<?php
declare(strict_types=1);

// Gitlab SDK

require_once __DIR__ . '/utility/struct/Struct.php';
require_once __DIR__ . '/core/UtilityType.php';
require_once __DIR__ . '/core/Spec.php';
require_once __DIR__ . '/core/Helpers.php';

// Load utility registration
require_once __DIR__ . '/utility/Register.php';

// Load config and features
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/features.php';

use Voxgig\Struct\Struct;

// Features record diagnostic state on the client as dynamic properties
// (_retry, _cache, _metrics, ...); allow them explicitly (PHP 8.2+
// deprecates implicit dynamic properties).
#[\AllowDynamicProperties]
class GitlabSDK
{
    public string $mode;
    public array $features;
    public ?array $options;

    private $_utility;
    private $_rootctx;

    public function __construct(array $options = [])
    {
        $this->mode = "live";
        $this->features = [];
        $this->options = null;

        $utility = new GitlabUtility();
        $this->_utility = $utility;

        $config = GitlabConfig::make_config();

        $this->_rootctx = ($utility->make_context)([
            "client" => $this,
            "utility" => $utility,
            "config" => $config,
            "options" => $options ?? [],
            "shared" => [],
        ], null);

        $this->options = ($utility->make_options)($this->_rootctx);

        if (Struct::getpath($this->options, "feature.test.active") === true) {
            $this->mode = "test";
        }

        $this->_rootctx->options = $this->options;

        // Add features in the resolved order (make_options puts an explicit
        // list order first, else defaults to test-first). Ordering matters: the
        // `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        // current, so `test` must be added before them to sit at the base.
        $feature_opts = GitlabHelpers::to_map(Struct::getprop($this->options, "feature"));
        if ($feature_opts) {
            $featureorder = Struct::getpath($this->options, "__derived__.featureorder");
            if (is_array($featureorder)) {
                foreach ($featureorder as $fname) {
                    $fopts = GitlabHelpers::to_map($feature_opts[$fname] ?? null);
                    if ($fopts && isset($fopts["active"]) && $fopts["active"] === true) {
                        ($utility->feature_add)($this->_rootctx, GitlabFeatures::make_feature($fname));
                    }
                }
            }
        }

        // Add extension features.
        $extend_val = Struct::getprop($this->options, "extend");
        if (is_array($extend_val)) {
            foreach ($extend_val as $f) {
                if (is_object($f) && method_exists($f, 'get_name')) {
                    ($utility->feature_add)($this->_rootctx, $f);
                }
            }
        }

        // Initialize features.
        foreach ($this->features as $f) {
            ($utility->feature_init)($this->_rootctx, $f);
        }

        ($utility->feature_hook)($this->_rootctx, "PostConstruct");
    }

    public function options_map(): array
    {
        $out = Struct::clone($this->options);
        return is_array($out) ? $out : [];
    }

    public function get_utility()
    {
        return GitlabUtility::copy($this->_utility);
    }

    public function get_root_ctx()
    {
        return $this->_rootctx;
    }

    public function prepare(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;
        $fetchargs = $fetchargs ?? [];

        $ctrl = GitlabHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "prepare",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $opts = $this->options;
        $path = Struct::getprop($fetchargs, "path") ?? "";
        $path = is_string($path) ? $path : "";
        $method_val = Struct::getprop($fetchargs, "method") ?? "GET";
        $method_val = is_string($method_val) ? $method_val : "GET";
        $params = GitlabHelpers::to_map(Struct::getprop($fetchargs, "params")) ?? [];
        $query = GitlabHelpers::to_map(Struct::getprop($fetchargs, "query")) ?? [];
        $headers = ($utility->prepare_headers)($ctx);

        $base = Struct::getprop($opts, "base") ?? "";
        $base = is_string($base) ? $base : "";
        $prefix = Struct::getprop($opts, "prefix") ?? "";
        $prefix = is_string($prefix) ? $prefix : "";
        $suffix = Struct::getprop($opts, "suffix") ?? "";
        $suffix = is_string($suffix) ? $suffix : "";

        $ctx->spec = new GitlabSpec([
            "base" => $base, "prefix" => $prefix, "suffix" => $suffix,
            "path" => $path, "method" => $method_val,
            "params" => $params, "query" => $query, "headers" => $headers,
            "body" => Struct::getprop($fetchargs, "body"),
            "step" => "start",
        ]);

        // Merge user-provided headers.
        $uh = Struct::getprop($fetchargs, "headers");
        if (is_array($uh)) {
            foreach ($uh as $k => $v) {
                $ctx->spec->headers[$k] = $v;
            }
        }

        [$_, $err] = ($utility->prepare_auth)($ctx);
        if ($err) {
            return ($utility->make_error)($ctx, $err);
        }

        [$fetchdef, $fd_err] = ($utility->make_fetch_def)($ctx);
        if ($fd_err) {
            return ($utility->make_error)($ctx, $fd_err);
        }
        return $fetchdef;
    }

    public function direct(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;

        // direct() is the raw-HTTP escape hatch: it never throws, it returns
        // an {ok, err, ...} dict. prepare() now raises on error, so catch it
        // and surface the failure through the dict instead.
        try {
            $fetchdef = $this->prepare($fetchargs);
        } catch (\Throwable $err) {
            return ["ok" => false, "err" => $err];
        }

        $fetchargs = $fetchargs ?? [];
        $ctrl = GitlabHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "direct",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $url = $fetchdef["url"] ?? "";
        [$fetched, $fetch_err] = ($utility->fetcher)($ctx, $url, $fetchdef);

        if ($fetch_err) {
            return ["ok" => false, "err" => $fetch_err];
        }

        if ($fetched === null) {
            return [
                "ok" => false,
                "err" => $ctx->make_error("direct_no_response", "response: undefined"),
            ];
        }

        if (is_array($fetched)) {
            $status = GitlabHelpers::to_int(Struct::getprop($fetched, "status"));
            $headers = Struct::getprop($fetched, "headers") ?? [];

            // No-body responses (204, 304) and explicit zero content-length
            // must skip JSON parsing — calling json() on an empty body errors.
            $content_length = is_array($headers) ? ($headers["content-length"] ?? null) : null;
            $no_body = $status === 204 || $status === 304 || (string)$content_length === "0";

            $json_data = null;
            if (!$no_body) {
                $jf = Struct::getprop($fetched, "json");
                if (is_callable($jf)) {
                    try {
                        $json_data = $jf();
                    } catch (\Throwable $e) {
                        // Non-JSON body — leave data null but keep status/ok.
                        $json_data = null;
                    }
                }
            }

            return [
                "ok" => $status >= 200 && $status < 300,
                "status" => $status,
                "headers" => Struct::getprop($fetched, "headers"),
                "data" => $json_data,
            ];
        }

        return [
            "ok" => false,
            "err" => $ctx->make_error("direct_invalid", "invalid response type"),
        ];
    }


    private $_access_request = null;

    // Canonical facade: $client->AccessRequest()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->access_request()
    // resolves here too.
    public function AccessRequest($data = null)
    {
        require_once __DIR__ . '/entity/access_request_entity.php';
        if ($data === null) {
            if ($this->_access_request === null) {
                $this->_access_request = new AccessRequestEntity($this, null);
            }
            return $this->_access_request;
        }
        return new AccessRequestEntity($this, $data);
    }


    private $_alert_management = null;

    // Canonical facade: $client->AlertManagement()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->alert_management()
    // resolves here too.
    public function AlertManagement($data = null)
    {
        require_once __DIR__ . '/entity/alert_management_entity.php';
        if ($data === null) {
            if ($this->_alert_management === null) {
                $this->_alert_management = new AlertManagementEntity($this, null);
            }
            return $this->_alert_management;
        }
        return new AlertManagementEntity($this, $data);
    }


    private $_api_entities_access_requester = null;

    // Canonical facade: $client->ApiEntitiesAccessRequester()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_access_requester()
    // resolves here too.
    public function ApiEntitiesAccessRequester($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_access_requester_entity.php';
        if ($data === null) {
            if ($this->_api_entities_access_requester === null) {
                $this->_api_entities_access_requester = new ApiEntitiesAccessRequesterEntity($this, null);
            }
            return $this->_api_entities_access_requester;
        }
        return new ApiEntitiesAccessRequesterEntity($this, $data);
    }


    private $_api_entities_appearance = null;

    // Canonical facade: $client->ApiEntitiesAppearance()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_appearance()
    // resolves here too.
    public function ApiEntitiesAppearance($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_appearance_entity.php';
        if ($data === null) {
            if ($this->_api_entities_appearance === null) {
                $this->_api_entities_appearance = new ApiEntitiesAppearanceEntity($this, null);
            }
            return $this->_api_entities_appearance;
        }
        return new ApiEntitiesAppearanceEntity($this, $data);
    }


    private $_api_entities_application = null;

    // Canonical facade: $client->ApiEntitiesApplication()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_application()
    // resolves here too.
    public function ApiEntitiesApplication($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_application_entity.php';
        if ($data === null) {
            if ($this->_api_entities_application === null) {
                $this->_api_entities_application = new ApiEntitiesApplicationEntity($this, null);
            }
            return $this->_api_entities_application;
        }
        return new ApiEntitiesApplicationEntity($this, $data);
    }


    private $_api_entities_application_statistic = null;

    // Canonical facade: $client->ApiEntitiesApplicationStatistic()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_application_statistic()
    // resolves here too.
    public function ApiEntitiesApplicationStatistic($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_application_statistic_entity.php';
        if ($data === null) {
            if ($this->_api_entities_application_statistic === null) {
                $this->_api_entities_application_statistic = new ApiEntitiesApplicationStatisticEntity($this, null);
            }
            return $this->_api_entities_application_statistic;
        }
        return new ApiEntitiesApplicationStatisticEntity($this, $data);
    }


    private $_api_entities_application_with_secret = null;

    // Canonical facade: $client->ApiEntitiesApplicationWithSecret()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_application_with_secret()
    // resolves here too.
    public function ApiEntitiesApplicationWithSecret($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_application_with_secret_entity.php';
        if ($data === null) {
            if ($this->_api_entities_application_with_secret === null) {
                $this->_api_entities_application_with_secret = new ApiEntitiesApplicationWithSecretEntity($this, null);
            }
            return $this->_api_entities_application_with_secret;
        }
        return new ApiEntitiesApplicationWithSecretEntity($this, $data);
    }


    private $_api_entities_avatar = null;

    // Canonical facade: $client->ApiEntitiesAvatar()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_avatar()
    // resolves here too.
    public function ApiEntitiesAvatar($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_avatar_entity.php';
        if ($data === null) {
            if ($this->_api_entities_avatar === null) {
                $this->_api_entities_avatar = new ApiEntitiesAvatarEntity($this, null);
            }
            return $this->_api_entities_avatar;
        }
        return new ApiEntitiesAvatarEntity($this, $data);
    }


    private $_api_entities_award_emoji = null;

    // Canonical facade: $client->ApiEntitiesAwardEmoji()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_award_emoji()
    // resolves here too.
    public function ApiEntitiesAwardEmoji($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_award_emoji_entity.php';
        if ($data === null) {
            if ($this->_api_entities_award_emoji === null) {
                $this->_api_entities_award_emoji = new ApiEntitiesAwardEmojiEntity($this, null);
            }
            return $this->_api_entities_award_emoji;
        }
        return new ApiEntitiesAwardEmojiEntity($this, $data);
    }


    private $_api_entities_badge = null;

    // Canonical facade: $client->ApiEntitiesBadge()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_badge()
    // resolves here too.
    public function ApiEntitiesBadge($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_badge_entity.php';
        if ($data === null) {
            if ($this->_api_entities_badge === null) {
                $this->_api_entities_badge = new ApiEntitiesBadgeEntity($this, null);
            }
            return $this->_api_entities_badge;
        }
        return new ApiEntitiesBadgeEntity($this, $data);
    }


    private $_api_entities_basic_badge_detail = null;

    // Canonical facade: $client->ApiEntitiesBasicBadgeDetail()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_basic_badge_detail()
    // resolves here too.
    public function ApiEntitiesBasicBadgeDetail($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_basic_badge_detail_entity.php';
        if ($data === null) {
            if ($this->_api_entities_basic_badge_detail === null) {
                $this->_api_entities_basic_badge_detail = new ApiEntitiesBasicBadgeDetailEntity($this, null);
            }
            return $this->_api_entities_basic_badge_detail;
        }
        return new ApiEntitiesBasicBadgeDetailEntity($this, $data);
    }


    private $_api_entities_basic_group_detail = null;

    // Canonical facade: $client->ApiEntitiesBasicGroupDetail()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_basic_group_detail()
    // resolves here too.
    public function ApiEntitiesBasicGroupDetail($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_basic_group_detail_entity.php';
        if ($data === null) {
            if ($this->_api_entities_basic_group_detail === null) {
                $this->_api_entities_basic_group_detail = new ApiEntitiesBasicGroupDetailEntity($this, null);
            }
            return $this->_api_entities_basic_group_detail;
        }
        return new ApiEntitiesBasicGroupDetailEntity($this, $data);
    }


    private $_api_entities_basic_project_detail = null;

    // Canonical facade: $client->ApiEntitiesBasicProjectDetail()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_basic_project_detail()
    // resolves here too.
    public function ApiEntitiesBasicProjectDetail($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_basic_project_detail_entity.php';
        if ($data === null) {
            if ($this->_api_entities_basic_project_detail === null) {
                $this->_api_entities_basic_project_detail = new ApiEntitiesBasicProjectDetailEntity($this, null);
            }
            return $this->_api_entities_basic_project_detail;
        }
        return new ApiEntitiesBasicProjectDetailEntity($this, $data);
    }


    private $_api_entities_basic_ref = null;

    // Canonical facade: $client->ApiEntitiesBasicRef()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_basic_ref()
    // resolves here too.
    public function ApiEntitiesBasicRef($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_basic_ref_entity.php';
        if ($data === null) {
            if ($this->_api_entities_basic_ref === null) {
                $this->_api_entities_basic_ref = new ApiEntitiesBasicRefEntity($this, null);
            }
            return $this->_api_entities_basic_ref;
        }
        return new ApiEntitiesBasicRefEntity($this, $data);
    }


    private $_api_entities_basic_success = null;

    // Canonical facade: $client->ApiEntitiesBasicSuccess()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_basic_success()
    // resolves here too.
    public function ApiEntitiesBasicSuccess($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_basic_success_entity.php';
        if ($data === null) {
            if ($this->_api_entities_basic_success === null) {
                $this->_api_entities_basic_success = new ApiEntitiesBasicSuccessEntity($this, null);
            }
            return $this->_api_entities_basic_success;
        }
        return new ApiEntitiesBasicSuccessEntity($this, $data);
    }


    private $_api_entities_batched_background_migration = null;

    // Canonical facade: $client->ApiEntitiesBatchedBackgroundMigration()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_batched_background_migration()
    // resolves here too.
    public function ApiEntitiesBatchedBackgroundMigration($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_batched_background_migration_entity.php';
        if ($data === null) {
            if ($this->_api_entities_batched_background_migration === null) {
                $this->_api_entities_batched_background_migration = new ApiEntitiesBatchedBackgroundMigrationEntity($this, null);
            }
            return $this->_api_entities_batched_background_migration;
        }
        return new ApiEntitiesBatchedBackgroundMigrationEntity($this, $data);
    }


    private $_api_entities_branch = null;

    // Canonical facade: $client->ApiEntitiesBranch()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_branch()
    // resolves here too.
    public function ApiEntitiesBranch($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_branch_entity.php';
        if ($data === null) {
            if ($this->_api_entities_branch === null) {
                $this->_api_entities_branch = new ApiEntitiesBranchEntity($this, null);
            }
            return $this->_api_entities_branch;
        }
        return new ApiEntitiesBranchEntity($this, $data);
    }


    private $_api_entities_bulk_import = null;

    // Canonical facade: $client->ApiEntitiesBulkImport()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_bulk_import()
    // resolves here too.
    public function ApiEntitiesBulkImport($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_bulk_import_entity.php';
        if ($data === null) {
            if ($this->_api_entities_bulk_import === null) {
                $this->_api_entities_bulk_import = new ApiEntitiesBulkImportEntity($this, null);
            }
            return $this->_api_entities_bulk_import;
        }
        return new ApiEntitiesBulkImportEntity($this, $data);
    }


    private $_api_entities_bulk_imports_entity_failure = null;

    // Canonical facade: $client->ApiEntitiesBulkImportsEntityFailure()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_bulk_imports_entity_failure()
    // resolves here too.
    public function ApiEntitiesBulkImportsEntityFailure($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_bulk_imports_entity_failure_entity.php';
        if ($data === null) {
            if ($this->_api_entities_bulk_imports_entity_failure === null) {
                $this->_api_entities_bulk_imports_entity_failure = new ApiEntitiesBulkImportsEntityFailureEntity($this, null);
            }
            return $this->_api_entities_bulk_imports_entity_failure;
        }
        return new ApiEntitiesBulkImportsEntityFailureEntity($this, $data);
    }


    private $_api_entities_bulk_imports_export_status = null;

    // Canonical facade: $client->ApiEntitiesBulkImportsExportStatus()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_bulk_imports_export_status()
    // resolves here too.
    public function ApiEntitiesBulkImportsExportStatus($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_bulk_imports_export_status_entity.php';
        if ($data === null) {
            if ($this->_api_entities_bulk_imports_export_status === null) {
                $this->_api_entities_bulk_imports_export_status = new ApiEntitiesBulkImportsExportStatusEntity($this, null);
            }
            return $this->_api_entities_bulk_imports_export_status;
        }
        return new ApiEntitiesBulkImportsExportStatusEntity($this, $data);
    }


    private $_api_entities_changelog = null;

    // Canonical facade: $client->ApiEntitiesChangelog()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_changelog()
    // resolves here too.
    public function ApiEntitiesChangelog($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_changelog_entity.php';
        if ($data === null) {
            if ($this->_api_entities_changelog === null) {
                $this->_api_entities_changelog = new ApiEntitiesChangelogEntity($this, null);
            }
            return $this->_api_entities_changelog;
        }
        return new ApiEntitiesChangelogEntity($this, $data);
    }


    private $_api_entities_ci_bridge = null;

    // Canonical facade: $client->ApiEntitiesCiBridge()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_ci_bridge()
    // resolves here too.
    public function ApiEntitiesCiBridge($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_ci_bridge_entity.php';
        if ($data === null) {
            if ($this->_api_entities_ci_bridge === null) {
                $this->_api_entities_ci_bridge = new ApiEntitiesCiBridgeEntity($this, null);
            }
            return $this->_api_entities_ci_bridge;
        }
        return new ApiEntitiesCiBridgeEntity($this, $data);
    }


    private $_api_entities_ci_catalog_resources_version = null;

    // Canonical facade: $client->ApiEntitiesCiCatalogResourcesVersion()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_ci_catalog_resources_version()
    // resolves here too.
    public function ApiEntitiesCiCatalogResourcesVersion($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_ci_catalog_resources_version_entity.php';
        if ($data === null) {
            if ($this->_api_entities_ci_catalog_resources_version === null) {
                $this->_api_entities_ci_catalog_resources_version = new ApiEntitiesCiCatalogResourcesVersionEntity($this, null);
            }
            return $this->_api_entities_ci_catalog_resources_version;
        }
        return new ApiEntitiesCiCatalogResourcesVersionEntity($this, $data);
    }


    private $_api_entities_ci_job = null;

    // Canonical facade: $client->ApiEntitiesCiJob()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_ci_job()
    // resolves here too.
    public function ApiEntitiesCiJob($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_ci_job_entity.php';
        if ($data === null) {
            if ($this->_api_entities_ci_job === null) {
                $this->_api_entities_ci_job = new ApiEntitiesCiJobEntity($this, null);
            }
            return $this->_api_entities_ci_job;
        }
        return new ApiEntitiesCiJobEntity($this, $data);
    }


    private $_api_entities_ci_job_basic = null;

    // Canonical facade: $client->ApiEntitiesCiJobBasic()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_ci_job_basic()
    // resolves here too.
    public function ApiEntitiesCiJobBasic($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_ci_job_basic_entity.php';
        if ($data === null) {
            if ($this->_api_entities_ci_job_basic === null) {
                $this->_api_entities_ci_job_basic = new ApiEntitiesCiJobBasicEntity($this, null);
            }
            return $this->_api_entities_ci_job_basic;
        }
        return new ApiEntitiesCiJobBasicEntity($this, $data);
    }


    private $_api_entities_ci_job_basic_with_project = null;

    // Canonical facade: $client->ApiEntitiesCiJobBasicWithProject()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_ci_job_basic_with_project()
    // resolves here too.
    public function ApiEntitiesCiJobBasicWithProject($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_ci_job_basic_with_project_entity.php';
        if ($data === null) {
            if ($this->_api_entities_ci_job_basic_with_project === null) {
                $this->_api_entities_ci_job_basic_with_project = new ApiEntitiesCiJobBasicWithProjectEntity($this, null);
            }
            return $this->_api_entities_ci_job_basic_with_project;
        }
        return new ApiEntitiesCiJobBasicWithProjectEntity($this, $data);
    }


    private $_api_entities_ci_lint_result = null;

    // Canonical facade: $client->ApiEntitiesCiLintResult()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_ci_lint_result()
    // resolves here too.
    public function ApiEntitiesCiLintResult($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_ci_lint_result_entity.php';
        if ($data === null) {
            if ($this->_api_entities_ci_lint_result === null) {
                $this->_api_entities_ci_lint_result = new ApiEntitiesCiLintResultEntity($this, null);
            }
            return $this->_api_entities_ci_lint_result;
        }
        return new ApiEntitiesCiLintResultEntity($this, $data);
    }


    private $_api_entities_ci_pipeline = null;

    // Canonical facade: $client->ApiEntitiesCiPipeline()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_ci_pipeline()
    // resolves here too.
    public function ApiEntitiesCiPipeline($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_ci_pipeline_entity.php';
        if ($data === null) {
            if ($this->_api_entities_ci_pipeline === null) {
                $this->_api_entities_ci_pipeline = new ApiEntitiesCiPipelineEntity($this, null);
            }
            return $this->_api_entities_ci_pipeline;
        }
        return new ApiEntitiesCiPipelineEntity($this, $data);
    }


    private $_api_entities_ci_pipeline_basic = null;

    // Canonical facade: $client->ApiEntitiesCiPipelineBasic()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_ci_pipeline_basic()
    // resolves here too.
    public function ApiEntitiesCiPipelineBasic($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_ci_pipeline_basic_entity.php';
        if ($data === null) {
            if ($this->_api_entities_ci_pipeline_basic === null) {
                $this->_api_entities_ci_pipeline_basic = new ApiEntitiesCiPipelineBasicEntity($this, null);
            }
            return $this->_api_entities_ci_pipeline_basic;
        }
        return new ApiEntitiesCiPipelineBasicEntity($this, $data);
    }


    private $_api_entities_ci_pipeline_schedule = null;

    // Canonical facade: $client->ApiEntitiesCiPipelineSchedule()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_ci_pipeline_schedule()
    // resolves here too.
    public function ApiEntitiesCiPipelineSchedule($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_ci_pipeline_schedule_entity.php';
        if ($data === null) {
            if ($this->_api_entities_ci_pipeline_schedule === null) {
                $this->_api_entities_ci_pipeline_schedule = new ApiEntitiesCiPipelineScheduleEntity($this, null);
            }
            return $this->_api_entities_ci_pipeline_schedule;
        }
        return new ApiEntitiesCiPipelineScheduleEntity($this, $data);
    }


    private $_api_entities_ci_pipeline_schedule_detail = null;

    // Canonical facade: $client->ApiEntitiesCiPipelineScheduleDetail()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_ci_pipeline_schedule_detail()
    // resolves here too.
    public function ApiEntitiesCiPipelineScheduleDetail($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_ci_pipeline_schedule_detail_entity.php';
        if ($data === null) {
            if ($this->_api_entities_ci_pipeline_schedule_detail === null) {
                $this->_api_entities_ci_pipeline_schedule_detail = new ApiEntitiesCiPipelineScheduleDetailEntity($this, null);
            }
            return $this->_api_entities_ci_pipeline_schedule_detail;
        }
        return new ApiEntitiesCiPipelineScheduleDetailEntity($this, $data);
    }


    private $_api_entities_ci_reset_token_result = null;

    // Canonical facade: $client->ApiEntitiesCiResetTokenResult()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_ci_reset_token_result()
    // resolves here too.
    public function ApiEntitiesCiResetTokenResult($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_ci_reset_token_result_entity.php';
        if ($data === null) {
            if ($this->_api_entities_ci_reset_token_result === null) {
                $this->_api_entities_ci_reset_token_result = new ApiEntitiesCiResetTokenResultEntity($this, null);
            }
            return $this->_api_entities_ci_reset_token_result;
        }
        return new ApiEntitiesCiResetTokenResultEntity($this, $data);
    }


    private $_api_entities_ci_resource_group = null;

    // Canonical facade: $client->ApiEntitiesCiResourceGroup()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_ci_resource_group()
    // resolves here too.
    public function ApiEntitiesCiResourceGroup($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_ci_resource_group_entity.php';
        if ($data === null) {
            if ($this->_api_entities_ci_resource_group === null) {
                $this->_api_entities_ci_resource_group = new ApiEntitiesCiResourceGroupEntity($this, null);
            }
            return $this->_api_entities_ci_resource_group;
        }
        return new ApiEntitiesCiResourceGroupEntity($this, $data);
    }


    private $_api_entities_ci_runner = null;

    // Canonical facade: $client->ApiEntitiesCiRunner()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_ci_runner()
    // resolves here too.
    public function ApiEntitiesCiRunner($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_ci_runner_entity.php';
        if ($data === null) {
            if ($this->_api_entities_ci_runner === null) {
                $this->_api_entities_ci_runner = new ApiEntitiesCiRunnerEntity($this, null);
            }
            return $this->_api_entities_ci_runner;
        }
        return new ApiEntitiesCiRunnerEntity($this, $data);
    }


    private $_api_entities_ci_runner_detail = null;

    // Canonical facade: $client->ApiEntitiesCiRunnerDetail()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_ci_runner_detail()
    // resolves here too.
    public function ApiEntitiesCiRunnerDetail($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_ci_runner_detail_entity.php';
        if ($data === null) {
            if ($this->_api_entities_ci_runner_detail === null) {
                $this->_api_entities_ci_runner_detail = new ApiEntitiesCiRunnerDetailEntity($this, null);
            }
            return $this->_api_entities_ci_runner_detail;
        }
        return new ApiEntitiesCiRunnerDetailEntity($this, $data);
    }


    private $_api_entities_ci_runner_manager = null;

    // Canonical facade: $client->ApiEntitiesCiRunnerManager()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_ci_runner_manager()
    // resolves here too.
    public function ApiEntitiesCiRunnerManager($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_ci_runner_manager_entity.php';
        if ($data === null) {
            if ($this->_api_entities_ci_runner_manager === null) {
                $this->_api_entities_ci_runner_manager = new ApiEntitiesCiRunnerManagerEntity($this, null);
            }
            return $this->_api_entities_ci_runner_manager;
        }
        return new ApiEntitiesCiRunnerManagerEntity($this, $data);
    }


    private $_api_entities_ci_runner_registration_detail = null;

    // Canonical facade: $client->ApiEntitiesCiRunnerRegistrationDetail()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_ci_runner_registration_detail()
    // resolves here too.
    public function ApiEntitiesCiRunnerRegistrationDetail($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_ci_runner_registration_detail_entity.php';
        if ($data === null) {
            if ($this->_api_entities_ci_runner_registration_detail === null) {
                $this->_api_entities_ci_runner_registration_detail = new ApiEntitiesCiRunnerRegistrationDetailEntity($this, null);
            }
            return $this->_api_entities_ci_runner_registration_detail;
        }
        return new ApiEntitiesCiRunnerRegistrationDetailEntity($this, $data);
    }


    private $_api_entities_ci_secure_file = null;

    // Canonical facade: $client->ApiEntitiesCiSecureFile()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_ci_secure_file()
    // resolves here too.
    public function ApiEntitiesCiSecureFile($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_ci_secure_file_entity.php';
        if ($data === null) {
            if ($this->_api_entities_ci_secure_file === null) {
                $this->_api_entities_ci_secure_file = new ApiEntitiesCiSecureFileEntity($this, null);
            }
            return $this->_api_entities_ci_secure_file;
        }
        return new ApiEntitiesCiSecureFileEntity($this, $data);
    }


    private $_api_entities_ci_variable = null;

    // Canonical facade: $client->ApiEntitiesCiVariable()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_ci_variable()
    // resolves here too.
    public function ApiEntitiesCiVariable($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_ci_variable_entity.php';
        if ($data === null) {
            if ($this->_api_entities_ci_variable === null) {
                $this->_api_entities_ci_variable = new ApiEntitiesCiVariableEntity($this, null);
            }
            return $this->_api_entities_ci_variable;
        }
        return new ApiEntitiesCiVariableEntity($this, $data);
    }


    private $_api_entities_cluster = null;

    // Canonical facade: $client->ApiEntitiesCluster()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_cluster()
    // resolves here too.
    public function ApiEntitiesCluster($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_cluster_entity.php';
        if ($data === null) {
            if ($this->_api_entities_cluster === null) {
                $this->_api_entities_cluster = new ApiEntitiesClusterEntity($this, null);
            }
            return $this->_api_entities_cluster;
        }
        return new ApiEntitiesClusterEntity($this, $data);
    }


    private $_api_entities_cluster_group = null;

    // Canonical facade: $client->ApiEntitiesClusterGroup()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_cluster_group()
    // resolves here too.
    public function ApiEntitiesClusterGroup($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_cluster_group_entity.php';
        if ($data === null) {
            if ($this->_api_entities_cluster_group === null) {
                $this->_api_entities_cluster_group = new ApiEntitiesClusterGroupEntity($this, null);
            }
            return $this->_api_entities_cluster_group;
        }
        return new ApiEntitiesClusterGroupEntity($this, $data);
    }


    private $_api_entities_cluster_project = null;

    // Canonical facade: $client->ApiEntitiesClusterProject()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_cluster_project()
    // resolves here too.
    public function ApiEntitiesClusterProject($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_cluster_project_entity.php';
        if ($data === null) {
            if ($this->_api_entities_cluster_project === null) {
                $this->_api_entities_cluster_project = new ApiEntitiesClusterProjectEntity($this, null);
            }
            return $this->_api_entities_cluster_project;
        }
        return new ApiEntitiesClusterProjectEntity($this, $data);
    }


    private $_api_entities_clusters_agent = null;

    // Canonical facade: $client->ApiEntitiesClustersAgent()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_clusters_agent()
    // resolves here too.
    public function ApiEntitiesClustersAgent($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_clusters_agent_entity.php';
        if ($data === null) {
            if ($this->_api_entities_clusters_agent === null) {
                $this->_api_entities_clusters_agent = new ApiEntitiesClustersAgentEntity($this, null);
            }
            return $this->_api_entities_clusters_agent;
        }
        return new ApiEntitiesClustersAgentEntity($this, $data);
    }


    private $_api_entities_clusters_agent_token = null;

    // Canonical facade: $client->ApiEntitiesClustersAgentToken()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_clusters_agent_token()
    // resolves here too.
    public function ApiEntitiesClustersAgentToken($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_clusters_agent_token_entity.php';
        if ($data === null) {
            if ($this->_api_entities_clusters_agent_token === null) {
                $this->_api_entities_clusters_agent_token = new ApiEntitiesClustersAgentTokenEntity($this, null);
            }
            return $this->_api_entities_clusters_agent_token;
        }
        return new ApiEntitiesClustersAgentTokenEntity($this, $data);
    }


    private $_api_entities_clusters_agent_token_basic = null;

    // Canonical facade: $client->ApiEntitiesClustersAgentTokenBasic()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_clusters_agent_token_basic()
    // resolves here too.
    public function ApiEntitiesClustersAgentTokenBasic($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_clusters_agent_token_basic_entity.php';
        if ($data === null) {
            if ($this->_api_entities_clusters_agent_token_basic === null) {
                $this->_api_entities_clusters_agent_token_basic = new ApiEntitiesClustersAgentTokenBasicEntity($this, null);
            }
            return $this->_api_entities_clusters_agent_token_basic;
        }
        return new ApiEntitiesClustersAgentTokenBasicEntity($this, $data);
    }


    private $_api_entities_clusters_agent_token_with_token = null;

    // Canonical facade: $client->ApiEntitiesClustersAgentTokenWithToken()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_clusters_agent_token_with_token()
    // resolves here too.
    public function ApiEntitiesClustersAgentTokenWithToken($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_clusters_agent_token_with_token_entity.php';
        if ($data === null) {
            if ($this->_api_entities_clusters_agent_token_with_token === null) {
                $this->_api_entities_clusters_agent_token_with_token = new ApiEntitiesClustersAgentTokenWithTokenEntity($this, null);
            }
            return $this->_api_entities_clusters_agent_token_with_token;
        }
        return new ApiEntitiesClustersAgentTokenWithTokenEntity($this, $data);
    }


    private $_api_entities_commit = null;

    // Canonical facade: $client->ApiEntitiesCommit()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_commit()
    // resolves here too.
    public function ApiEntitiesCommit($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_commit_entity.php';
        if ($data === null) {
            if ($this->_api_entities_commit === null) {
                $this->_api_entities_commit = new ApiEntitiesCommitEntity($this, null);
            }
            return $this->_api_entities_commit;
        }
        return new ApiEntitiesCommitEntity($this, $data);
    }


    private $_api_entities_commit_detail = null;

    // Canonical facade: $client->ApiEntitiesCommitDetail()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_commit_detail()
    // resolves here too.
    public function ApiEntitiesCommitDetail($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_commit_detail_entity.php';
        if ($data === null) {
            if ($this->_api_entities_commit_detail === null) {
                $this->_api_entities_commit_detail = new ApiEntitiesCommitDetailEntity($this, null);
            }
            return $this->_api_entities_commit_detail;
        }
        return new ApiEntitiesCommitDetailEntity($this, $data);
    }


    private $_api_entities_commit_note = null;

    // Canonical facade: $client->ApiEntitiesCommitNote()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_commit_note()
    // resolves here too.
    public function ApiEntitiesCommitNote($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_commit_note_entity.php';
        if ($data === null) {
            if ($this->_api_entities_commit_note === null) {
                $this->_api_entities_commit_note = new ApiEntitiesCommitNoteEntity($this, null);
            }
            return $this->_api_entities_commit_note;
        }
        return new ApiEntitiesCommitNoteEntity($this, $data);
    }


    private $_api_entities_commit_sequence = null;

    // Canonical facade: $client->ApiEntitiesCommitSequence()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_commit_sequence()
    // resolves here too.
    public function ApiEntitiesCommitSequence($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_commit_sequence_entity.php';
        if ($data === null) {
            if ($this->_api_entities_commit_sequence === null) {
                $this->_api_entities_commit_sequence = new ApiEntitiesCommitSequenceEntity($this, null);
            }
            return $this->_api_entities_commit_sequence;
        }
        return new ApiEntitiesCommitSequenceEntity($this, $data);
    }


    private $_api_entities_commit_signature = null;

    // Canonical facade: $client->ApiEntitiesCommitSignature()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_commit_signature()
    // resolves here too.
    public function ApiEntitiesCommitSignature($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_commit_signature_entity.php';
        if ($data === null) {
            if ($this->_api_entities_commit_signature === null) {
                $this->_api_entities_commit_signature = new ApiEntitiesCommitSignatureEntity($this, null);
            }
            return $this->_api_entities_commit_signature;
        }
        return new ApiEntitiesCommitSignatureEntity($this, $data);
    }


    private $_api_entities_commit_status = null;

    // Canonical facade: $client->ApiEntitiesCommitStatus()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_commit_status()
    // resolves here too.
    public function ApiEntitiesCommitStatus($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_commit_status_entity.php';
        if ($data === null) {
            if ($this->_api_entities_commit_status === null) {
                $this->_api_entities_commit_status = new ApiEntitiesCommitStatusEntity($this, null);
            }
            return $this->_api_entities_commit_status;
        }
        return new ApiEntitiesCommitStatusEntity($this, $data);
    }


    private $_api_entities_compare = null;

    // Canonical facade: $client->ApiEntitiesCompare()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_compare()
    // resolves here too.
    public function ApiEntitiesCompare($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_compare_entity.php';
        if ($data === null) {
            if ($this->_api_entities_compare === null) {
                $this->_api_entities_compare = new ApiEntitiesCompareEntity($this, null);
            }
            return $this->_api_entities_compare;
        }
        return new ApiEntitiesCompareEntity($this, $data);
    }


    private $_api_entities_container_registry_repository = null;

    // Canonical facade: $client->ApiEntitiesContainerRegistryRepository()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_container_registry_repository()
    // resolves here too.
    public function ApiEntitiesContainerRegistryRepository($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_container_registry_repository_entity.php';
        if ($data === null) {
            if ($this->_api_entities_container_registry_repository === null) {
                $this->_api_entities_container_registry_repository = new ApiEntitiesContainerRegistryRepositoryEntity($this, null);
            }
            return $this->_api_entities_container_registry_repository;
        }
        return new ApiEntitiesContainerRegistryRepositoryEntity($this, $data);
    }


    private $_api_entities_container_registry_tag = null;

    // Canonical facade: $client->ApiEntitiesContainerRegistryTag()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_container_registry_tag()
    // resolves here too.
    public function ApiEntitiesContainerRegistryTag($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_container_registry_tag_entity.php';
        if ($data === null) {
            if ($this->_api_entities_container_registry_tag === null) {
                $this->_api_entities_container_registry_tag = new ApiEntitiesContainerRegistryTagEntity($this, null);
            }
            return $this->_api_entities_container_registry_tag;
        }
        return new ApiEntitiesContainerRegistryTagEntity($this, $data);
    }


    private $_api_entities_container_registry_tag_detail = null;

    // Canonical facade: $client->ApiEntitiesContainerRegistryTagDetail()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_container_registry_tag_detail()
    // resolves here too.
    public function ApiEntitiesContainerRegistryTagDetail($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_container_registry_tag_detail_entity.php';
        if ($data === null) {
            if ($this->_api_entities_container_registry_tag_detail === null) {
                $this->_api_entities_container_registry_tag_detail = new ApiEntitiesContainerRegistryTagDetailEntity($this, null);
            }
            return $this->_api_entities_container_registry_tag_detail;
        }
        return new ApiEntitiesContainerRegistryTagDetailEntity($this, $data);
    }


    private $_api_entities_contributor = null;

    // Canonical facade: $client->ApiEntitiesContributor()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_contributor()
    // resolves here too.
    public function ApiEntitiesContributor($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_contributor_entity.php';
        if ($data === null) {
            if ($this->_api_entities_contributor === null) {
                $this->_api_entities_contributor = new ApiEntitiesContributorEntity($this, null);
            }
            return $this->_api_entities_contributor;
        }
        return new ApiEntitiesContributorEntity($this, $data);
    }


    private $_api_entities_deploy_key = null;

    // Canonical facade: $client->ApiEntitiesDeployKey()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_deploy_key()
    // resolves here too.
    public function ApiEntitiesDeployKey($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_deploy_key_entity.php';
        if ($data === null) {
            if ($this->_api_entities_deploy_key === null) {
                $this->_api_entities_deploy_key = new ApiEntitiesDeployKeyEntity($this, null);
            }
            return $this->_api_entities_deploy_key;
        }
        return new ApiEntitiesDeployKeyEntity($this, $data);
    }


    private $_api_entities_deploy_keys_project = null;

    // Canonical facade: $client->ApiEntitiesDeployKeysProject()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_deploy_keys_project()
    // resolves here too.
    public function ApiEntitiesDeployKeysProject($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_deploy_keys_project_entity.php';
        if ($data === null) {
            if ($this->_api_entities_deploy_keys_project === null) {
                $this->_api_entities_deploy_keys_project = new ApiEntitiesDeployKeysProjectEntity($this, null);
            }
            return $this->_api_entities_deploy_keys_project;
        }
        return new ApiEntitiesDeployKeysProjectEntity($this, $data);
    }


    private $_api_entities_deploy_token = null;

    // Canonical facade: $client->ApiEntitiesDeployToken()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_deploy_token()
    // resolves here too.
    public function ApiEntitiesDeployToken($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_deploy_token_entity.php';
        if ($data === null) {
            if ($this->_api_entities_deploy_token === null) {
                $this->_api_entities_deploy_token = new ApiEntitiesDeployTokenEntity($this, null);
            }
            return $this->_api_entities_deploy_token;
        }
        return new ApiEntitiesDeployTokenEntity($this, $data);
    }


    private $_api_entities_deploy_token_with_token = null;

    // Canonical facade: $client->ApiEntitiesDeployTokenWithToken()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_deploy_token_with_token()
    // resolves here too.
    public function ApiEntitiesDeployTokenWithToken($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_deploy_token_with_token_entity.php';
        if ($data === null) {
            if ($this->_api_entities_deploy_token_with_token === null) {
                $this->_api_entities_deploy_token_with_token = new ApiEntitiesDeployTokenWithTokenEntity($this, null);
            }
            return $this->_api_entities_deploy_token_with_token;
        }
        return new ApiEntitiesDeployTokenWithTokenEntity($this, $data);
    }


    private $_api_entities_deployment = null;

    // Canonical facade: $client->ApiEntitiesDeployment()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_deployment()
    // resolves here too.
    public function ApiEntitiesDeployment($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_deployment_entity.php';
        if ($data === null) {
            if ($this->_api_entities_deployment === null) {
                $this->_api_entities_deployment = new ApiEntitiesDeploymentEntity($this, null);
            }
            return $this->_api_entities_deployment;
        }
        return new ApiEntitiesDeploymentEntity($this, $data);
    }


    private $_api_entities_deployment_extended = null;

    // Canonical facade: $client->ApiEntitiesDeploymentExtended()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_deployment_extended()
    // resolves here too.
    public function ApiEntitiesDeploymentExtended($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_deployment_extended_entity.php';
        if ($data === null) {
            if ($this->_api_entities_deployment_extended === null) {
                $this->_api_entities_deployment_extended = new ApiEntitiesDeploymentExtendedEntity($this, null);
            }
            return $this->_api_entities_deployment_extended;
        }
        return new ApiEntitiesDeploymentExtendedEntity($this, $data);
    }


    private $_api_entities_deployments_approval = null;

    // Canonical facade: $client->ApiEntitiesDeploymentsApproval()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_deployments_approval()
    // resolves here too.
    public function ApiEntitiesDeploymentsApproval($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_deployments_approval_entity.php';
        if ($data === null) {
            if ($this->_api_entities_deployments_approval === null) {
                $this->_api_entities_deployments_approval = new ApiEntitiesDeploymentsApprovalEntity($this, null);
            }
            return $this->_api_entities_deployments_approval;
        }
        return new ApiEntitiesDeploymentsApprovalEntity($this, $data);
    }


    private $_api_entities_dictionary_table = null;

    // Canonical facade: $client->ApiEntitiesDictionaryTable()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_dictionary_table()
    // resolves here too.
    public function ApiEntitiesDictionaryTable($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_dictionary_table_entity.php';
        if ($data === null) {
            if ($this->_api_entities_dictionary_table === null) {
                $this->_api_entities_dictionary_table = new ApiEntitiesDictionaryTableEntity($this, null);
            }
            return $this->_api_entities_dictionary_table;
        }
        return new ApiEntitiesDictionaryTableEntity($this, $data);
    }


    private $_api_entities_diff = null;

    // Canonical facade: $client->ApiEntitiesDiff()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_diff()
    // resolves here too.
    public function ApiEntitiesDiff($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_diff_entity.php';
        if ($data === null) {
            if ($this->_api_entities_diff === null) {
                $this->_api_entities_diff = new ApiEntitiesDiffEntity($this, null);
            }
            return $this->_api_entities_diff;
        }
        return new ApiEntitiesDiffEntity($this, $data);
    }


    private $_api_entities_discovered_cluster = null;

    // Canonical facade: $client->ApiEntitiesDiscoveredCluster()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_discovered_cluster()
    // resolves here too.
    public function ApiEntitiesDiscoveredCluster($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_discovered_cluster_entity.php';
        if ($data === null) {
            if ($this->_api_entities_discovered_cluster === null) {
                $this->_api_entities_discovered_cluster = new ApiEntitiesDiscoveredClusterEntity($this, null);
            }
            return $this->_api_entities_discovered_cluster;
        }
        return new ApiEntitiesDiscoveredClusterEntity($this, $data);
    }


    private $_api_entities_draft_note = null;

    // Canonical facade: $client->ApiEntitiesDraftNote()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_draft_note()
    // resolves here too.
    public function ApiEntitiesDraftNote($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_draft_note_entity.php';
        if ($data === null) {
            if ($this->_api_entities_draft_note === null) {
                $this->_api_entities_draft_note = new ApiEntitiesDraftNoteEntity($this, null);
            }
            return $this->_api_entities_draft_note;
        }
        return new ApiEntitiesDraftNoteEntity($this, $data);
    }


    private $_api_entities_environment = null;

    // Canonical facade: $client->ApiEntitiesEnvironment()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_environment()
    // resolves here too.
    public function ApiEntitiesEnvironment($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_environment_entity.php';
        if ($data === null) {
            if ($this->_api_entities_environment === null) {
                $this->_api_entities_environment = new ApiEntitiesEnvironmentEntity($this, null);
            }
            return $this->_api_entities_environment;
        }
        return new ApiEntitiesEnvironmentEntity($this, $data);
    }


    private $_api_entities_error_tracking_client_key = null;

    // Canonical facade: $client->ApiEntitiesErrorTrackingClientKey()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_error_tracking_client_key()
    // resolves here too.
    public function ApiEntitiesErrorTrackingClientKey($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_error_tracking_client_key_entity.php';
        if ($data === null) {
            if ($this->_api_entities_error_tracking_client_key === null) {
                $this->_api_entities_error_tracking_client_key = new ApiEntitiesErrorTrackingClientKeyEntity($this, null);
            }
            return $this->_api_entities_error_tracking_client_key;
        }
        return new ApiEntitiesErrorTrackingClientKeyEntity($this, $data);
    }


    private $_api_entities_error_tracking_project_setting = null;

    // Canonical facade: $client->ApiEntitiesErrorTrackingProjectSetting()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_error_tracking_project_setting()
    // resolves here too.
    public function ApiEntitiesErrorTrackingProjectSetting($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_error_tracking_project_setting_entity.php';
        if ($data === null) {
            if ($this->_api_entities_error_tracking_project_setting === null) {
                $this->_api_entities_error_tracking_project_setting = new ApiEntitiesErrorTrackingProjectSettingEntity($this, null);
            }
            return $this->_api_entities_error_tracking_project_setting;
        }
        return new ApiEntitiesErrorTrackingProjectSettingEntity($this, $data);
    }


    private $_api_entities_event = null;

    // Canonical facade: $client->ApiEntitiesEvent()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_event()
    // resolves here too.
    public function ApiEntitiesEvent($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_event_entity.php';
        if ($data === null) {
            if ($this->_api_entities_event === null) {
                $this->_api_entities_event = new ApiEntitiesEventEntity($this, null);
            }
            return $this->_api_entities_event;
        }
        return new ApiEntitiesEventEntity($this, $data);
    }


    private $_api_entities_feature = null;

    // Canonical facade: $client->ApiEntitiesFeature()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_feature()
    // resolves here too.
    public function ApiEntitiesFeature($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_feature_entity.php';
        if ($data === null) {
            if ($this->_api_entities_feature === null) {
                $this->_api_entities_feature = new ApiEntitiesFeatureEntity($this, null);
            }
            return $this->_api_entities_feature;
        }
        return new ApiEntitiesFeatureEntity($this, $data);
    }


    private $_api_entities_feature_definition = null;

    // Canonical facade: $client->ApiEntitiesFeatureDefinition()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_feature_definition()
    // resolves here too.
    public function ApiEntitiesFeatureDefinition($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_feature_definition_entity.php';
        if ($data === null) {
            if ($this->_api_entities_feature_definition === null) {
                $this->_api_entities_feature_definition = new ApiEntitiesFeatureDefinitionEntity($this, null);
            }
            return $this->_api_entities_feature_definition;
        }
        return new ApiEntitiesFeatureDefinitionEntity($this, $data);
    }


    private $_api_entities_feature_flag = null;

    // Canonical facade: $client->ApiEntitiesFeatureFlag()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_feature_flag()
    // resolves here too.
    public function ApiEntitiesFeatureFlag($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_feature_flag_entity.php';
        if ($data === null) {
            if ($this->_api_entities_feature_flag === null) {
                $this->_api_entities_feature_flag = new ApiEntitiesFeatureFlagEntity($this, null);
            }
            return $this->_api_entities_feature_flag;
        }
        return new ApiEntitiesFeatureFlagEntity($this, $data);
    }


    private $_api_entities_feature_flag_user_list = null;

    // Canonical facade: $client->ApiEntitiesFeatureFlagUserList()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_feature_flag_user_list()
    // resolves here too.
    public function ApiEntitiesFeatureFlagUserList($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_feature_flag_user_list_entity.php';
        if ($data === null) {
            if ($this->_api_entities_feature_flag_user_list === null) {
                $this->_api_entities_feature_flag_user_list = new ApiEntitiesFeatureFlagUserListEntity($this, null);
            }
            return $this->_api_entities_feature_flag_user_list;
        }
        return new ApiEntitiesFeatureFlagUserListEntity($this, $data);
    }


    private $_api_entities_freeze_period = null;

    // Canonical facade: $client->ApiEntitiesFreezePeriod()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_freeze_period()
    // resolves here too.
    public function ApiEntitiesFreezePeriod($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_freeze_period_entity.php';
        if ($data === null) {
            if ($this->_api_entities_freeze_period === null) {
                $this->_api_entities_freeze_period = new ApiEntitiesFreezePeriodEntity($this, null);
            }
            return $this->_api_entities_freeze_period;
        }
        return new ApiEntitiesFreezePeriodEntity($this, $data);
    }


    private $_api_entities_gitlab_subscription = null;

    // Canonical facade: $client->ApiEntitiesGitlabSubscription()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_gitlab_subscription()
    // resolves here too.
    public function ApiEntitiesGitlabSubscription($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_gitlab_subscription_entity.php';
        if ($data === null) {
            if ($this->_api_entities_gitlab_subscription === null) {
                $this->_api_entities_gitlab_subscription = new ApiEntitiesGitlabSubscriptionEntity($this, null);
            }
            return $this->_api_entities_gitlab_subscription;
        }
        return new ApiEntitiesGitlabSubscriptionEntity($this, $data);
    }


    private $_api_entities_go_module_version = null;

    // Canonical facade: $client->ApiEntitiesGoModuleVersion()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_go_module_version()
    // resolves here too.
    public function ApiEntitiesGoModuleVersion($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_go_module_version_entity.php';
        if ($data === null) {
            if ($this->_api_entities_go_module_version === null) {
                $this->_api_entities_go_module_version = new ApiEntitiesGoModuleVersionEntity($this, null);
            }
            return $this->_api_entities_go_module_version;
        }
        return new ApiEntitiesGoModuleVersionEntity($this, $data);
    }


    private $_api_entities_group = null;

    // Canonical facade: $client->ApiEntitiesGroup()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_group()
    // resolves here too.
    public function ApiEntitiesGroup($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_group_entity.php';
        if ($data === null) {
            if ($this->_api_entities_group === null) {
                $this->_api_entities_group = new ApiEntitiesGroupEntity($this, null);
            }
            return $this->_api_entities_group;
        }
        return new ApiEntitiesGroupEntity($this, $data);
    }


    private $_api_entities_group_detail = null;

    // Canonical facade: $client->ApiEntitiesGroupDetail()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_group_detail()
    // resolves here too.
    public function ApiEntitiesGroupDetail($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_group_detail_entity.php';
        if ($data === null) {
            if ($this->_api_entities_group_detail === null) {
                $this->_api_entities_group_detail = new ApiEntitiesGroupDetailEntity($this, null);
            }
            return $this->_api_entities_group_detail;
        }
        return new ApiEntitiesGroupDetailEntity($this, $data);
    }


    private $_api_entities_hook = null;

    // Canonical facade: $client->ApiEntitiesHook()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_hook()
    // resolves here too.
    public function ApiEntitiesHook($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_hook_entity.php';
        if ($data === null) {
            if ($this->_api_entities_hook === null) {
                $this->_api_entities_hook = new ApiEntitiesHookEntity($this, null);
            }
            return $this->_api_entities_hook;
        }
        return new ApiEntitiesHookEntity($this, $data);
    }


    private $_api_entities_integration = null;

    // Canonical facade: $client->ApiEntitiesIntegration()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_integration()
    // resolves here too.
    public function ApiEntitiesIntegration($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_integration_entity.php';
        if ($data === null) {
            if ($this->_api_entities_integration === null) {
                $this->_api_entities_integration = new ApiEntitiesIntegrationEntity($this, null);
            }
            return $this->_api_entities_integration;
        }
        return new ApiEntitiesIntegrationEntity($this, $data);
    }


    private $_api_entities_integration_basic = null;

    // Canonical facade: $client->ApiEntitiesIntegrationBasic()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_integration_basic()
    // resolves here too.
    public function ApiEntitiesIntegrationBasic($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_integration_basic_entity.php';
        if ($data === null) {
            if ($this->_api_entities_integration_basic === null) {
                $this->_api_entities_integration_basic = new ApiEntitiesIntegrationBasicEntity($this, null);
            }
            return $this->_api_entities_integration_basic;
        }
        return new ApiEntitiesIntegrationBasicEntity($this, $data);
    }


    private $_api_entities_invitation = null;

    // Canonical facade: $client->ApiEntitiesInvitation()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_invitation()
    // resolves here too.
    public function ApiEntitiesInvitation($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_invitation_entity.php';
        if ($data === null) {
            if ($this->_api_entities_invitation === null) {
                $this->_api_entities_invitation = new ApiEntitiesInvitationEntity($this, null);
            }
            return $this->_api_entities_invitation;
        }
        return new ApiEntitiesInvitationEntity($this, $data);
    }


    private $_api_entities_issuable_time_stat = null;

    // Canonical facade: $client->ApiEntitiesIssuableTimeStat()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_issuable_time_stat()
    // resolves here too.
    public function ApiEntitiesIssuableTimeStat($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_issuable_time_stat_entity.php';
        if ($data === null) {
            if ($this->_api_entities_issuable_time_stat === null) {
                $this->_api_entities_issuable_time_stat = new ApiEntitiesIssuableTimeStatEntity($this, null);
            }
            return $this->_api_entities_issuable_time_stat;
        }
        return new ApiEntitiesIssuableTimeStatEntity($this, $data);
    }


    private $_api_entities_issue = null;

    // Canonical facade: $client->ApiEntitiesIssue()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_issue()
    // resolves here too.
    public function ApiEntitiesIssue($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_issue_entity.php';
        if ($data === null) {
            if ($this->_api_entities_issue === null) {
                $this->_api_entities_issue = new ApiEntitiesIssueEntity($this, null);
            }
            return $this->_api_entities_issue;
        }
        return new ApiEntitiesIssueEntity($this, $data);
    }


    private $_api_entities_issue_link = null;

    // Canonical facade: $client->ApiEntitiesIssueLink()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_issue_link()
    // resolves here too.
    public function ApiEntitiesIssueLink($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_issue_link_entity.php';
        if ($data === null) {
            if ($this->_api_entities_issue_link === null) {
                $this->_api_entities_issue_link = new ApiEntitiesIssueLinkEntity($this, null);
            }
            return $this->_api_entities_issue_link;
        }
        return new ApiEntitiesIssueLinkEntity($this, $data);
    }


    private $_api_entities_license = null;

    // Canonical facade: $client->ApiEntitiesLicense()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_license()
    // resolves here too.
    public function ApiEntitiesLicense($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_license_entity.php';
        if ($data === null) {
            if ($this->_api_entities_license === null) {
                $this->_api_entities_license = new ApiEntitiesLicenseEntity($this, null);
            }
            return $this->_api_entities_license;
        }
        return new ApiEntitiesLicenseEntity($this, $data);
    }


    private $_api_entities_markdown = null;

    // Canonical facade: $client->ApiEntitiesMarkdown()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_markdown()
    // resolves here too.
    public function ApiEntitiesMarkdown($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_markdown_entity.php';
        if ($data === null) {
            if ($this->_api_entities_markdown === null) {
                $this->_api_entities_markdown = new ApiEntitiesMarkdownEntity($this, null);
            }
            return $this->_api_entities_markdown;
        }
        return new ApiEntitiesMarkdownEntity($this, $data);
    }


    private $_api_entities_markdown_upload_admin = null;

    // Canonical facade: $client->ApiEntitiesMarkdownUploadAdmin()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_markdown_upload_admin()
    // resolves here too.
    public function ApiEntitiesMarkdownUploadAdmin($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_markdown_upload_admin_entity.php';
        if ($data === null) {
            if ($this->_api_entities_markdown_upload_admin === null) {
                $this->_api_entities_markdown_upload_admin = new ApiEntitiesMarkdownUploadAdminEntity($this, null);
            }
            return $this->_api_entities_markdown_upload_admin;
        }
        return new ApiEntitiesMarkdownUploadAdminEntity($this, $data);
    }


    private $_api_entities_member = null;

    // Canonical facade: $client->ApiEntitiesMember()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_member()
    // resolves here too.
    public function ApiEntitiesMember($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_member_entity.php';
        if ($data === null) {
            if ($this->_api_entities_member === null) {
                $this->_api_entities_member = new ApiEntitiesMemberEntity($this, null);
            }
            return $this->_api_entities_member;
        }
        return new ApiEntitiesMemberEntity($this, $data);
    }


    private $_api_entities_merge = null;

    // Canonical facade: $client->ApiEntitiesMerge()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_merge()
    // resolves here too.
    public function ApiEntitiesMerge($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_merge_entity.php';
        if ($data === null) {
            if ($this->_api_entities_merge === null) {
                $this->_api_entities_merge = new ApiEntitiesMergeEntity($this, null);
            }
            return $this->_api_entities_merge;
        }
        return new ApiEntitiesMergeEntity($this, $data);
    }


    private $_api_entities_merge_request_approval = null;

    // Canonical facade: $client->ApiEntitiesMergeRequestApproval()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_merge_request_approval()
    // resolves here too.
    public function ApiEntitiesMergeRequestApproval($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_merge_request_approval_entity.php';
        if ($data === null) {
            if ($this->_api_entities_merge_request_approval === null) {
                $this->_api_entities_merge_request_approval = new ApiEntitiesMergeRequestApprovalEntity($this, null);
            }
            return $this->_api_entities_merge_request_approval;
        }
        return new ApiEntitiesMergeRequestApprovalEntity($this, $data);
    }


    private $_api_entities_merge_request_basic = null;

    // Canonical facade: $client->ApiEntitiesMergeRequestBasic()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_merge_request_basic()
    // resolves here too.
    public function ApiEntitiesMergeRequestBasic($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_merge_request_basic_entity.php';
        if ($data === null) {
            if ($this->_api_entities_merge_request_basic === null) {
                $this->_api_entities_merge_request_basic = new ApiEntitiesMergeRequestBasicEntity($this, null);
            }
            return $this->_api_entities_merge_request_basic;
        }
        return new ApiEntitiesMergeRequestBasicEntity($this, $data);
    }


    private $_api_entities_merge_request_change = null;

    // Canonical facade: $client->ApiEntitiesMergeRequestChange()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_merge_request_change()
    // resolves here too.
    public function ApiEntitiesMergeRequestChange($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_merge_request_change_entity.php';
        if ($data === null) {
            if ($this->_api_entities_merge_request_change === null) {
                $this->_api_entities_merge_request_change = new ApiEntitiesMergeRequestChangeEntity($this, null);
            }
            return $this->_api_entities_merge_request_change;
        }
        return new ApiEntitiesMergeRequestChangeEntity($this, $data);
    }


    private $_api_entities_merge_request_diff = null;

    // Canonical facade: $client->ApiEntitiesMergeRequestDiff()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_merge_request_diff()
    // resolves here too.
    public function ApiEntitiesMergeRequestDiff($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_merge_request_diff_entity.php';
        if ($data === null) {
            if ($this->_api_entities_merge_request_diff === null) {
                $this->_api_entities_merge_request_diff = new ApiEntitiesMergeRequestDiffEntity($this, null);
            }
            return $this->_api_entities_merge_request_diff;
        }
        return new ApiEntitiesMergeRequestDiffEntity($this, $data);
    }


    private $_api_entities_merge_request_diff_full = null;

    // Canonical facade: $client->ApiEntitiesMergeRequestDiffFull()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_merge_request_diff_full()
    // resolves here too.
    public function ApiEntitiesMergeRequestDiffFull($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_merge_request_diff_full_entity.php';
        if ($data === null) {
            if ($this->_api_entities_merge_request_diff_full === null) {
                $this->_api_entities_merge_request_diff_full = new ApiEntitiesMergeRequestDiffFullEntity($this, null);
            }
            return $this->_api_entities_merge_request_diff_full;
        }
        return new ApiEntitiesMergeRequestDiffFullEntity($this, $data);
    }


    private $_api_entities_merge_request_reviewer = null;

    // Canonical facade: $client->ApiEntitiesMergeRequestReviewer()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_merge_request_reviewer()
    // resolves here too.
    public function ApiEntitiesMergeRequestReviewer($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_merge_request_reviewer_entity.php';
        if ($data === null) {
            if ($this->_api_entities_merge_request_reviewer === null) {
                $this->_api_entities_merge_request_reviewer = new ApiEntitiesMergeRequestReviewerEntity($this, null);
            }
            return $this->_api_entities_merge_request_reviewer;
        }
        return new ApiEntitiesMergeRequestReviewerEntity($this, $data);
    }


    private $_api_entities_metric_image = null;

    // Canonical facade: $client->ApiEntitiesMetricImage()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_metric_image()
    // resolves here too.
    public function ApiEntitiesMetricImage($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_metric_image_entity.php';
        if ($data === null) {
            if ($this->_api_entities_metric_image === null) {
                $this->_api_entities_metric_image = new ApiEntitiesMetricImageEntity($this, null);
            }
            return $this->_api_entities_metric_image;
        }
        return new ApiEntitiesMetricImageEntity($this, $data);
    }


    private $_api_entities_mr_note = null;

    // Canonical facade: $client->ApiEntitiesMrNote()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_mr_note()
    // resolves here too.
    public function ApiEntitiesMrNote($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_mr_note_entity.php';
        if ($data === null) {
            if ($this->_api_entities_mr_note === null) {
                $this->_api_entities_mr_note = new ApiEntitiesMrNoteEntity($this, null);
            }
            return $this->_api_entities_mr_note;
        }
        return new ApiEntitiesMrNoteEntity($this, $data);
    }


    private $_api_entities_namespace = null;

    // Canonical facade: $client->ApiEntitiesNamespace()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_namespace()
    // resolves here too.
    public function ApiEntitiesNamespace($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_namespace_entity.php';
        if ($data === null) {
            if ($this->_api_entities_namespace === null) {
                $this->_api_entities_namespace = new ApiEntitiesNamespaceEntity($this, null);
            }
            return $this->_api_entities_namespace;
        }
        return new ApiEntitiesNamespaceEntity($this, $data);
    }


    private $_api_entities_namespace_existence = null;

    // Canonical facade: $client->ApiEntitiesNamespaceExistence()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_namespace_existence()
    // resolves here too.
    public function ApiEntitiesNamespaceExistence($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_namespace_existence_entity.php';
        if ($data === null) {
            if ($this->_api_entities_namespace_existence === null) {
                $this->_api_entities_namespace_existence = new ApiEntitiesNamespaceExistenceEntity($this, null);
            }
            return $this->_api_entities_namespace_existence;
        }
        return new ApiEntitiesNamespaceExistenceEntity($this, $data);
    }


    private $_api_entities_namespaces_storage_limit_exclusion = null;

    // Canonical facade: $client->ApiEntitiesNamespacesStorageLimitExclusion()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_namespaces_storage_limit_exclusion()
    // resolves here too.
    public function ApiEntitiesNamespacesStorageLimitExclusion($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_namespaces_storage_limit_exclusion_entity.php';
        if ($data === null) {
            if ($this->_api_entities_namespaces_storage_limit_exclusion === null) {
                $this->_api_entities_namespaces_storage_limit_exclusion = new ApiEntitiesNamespacesStorageLimitExclusionEntity($this, null);
            }
            return $this->_api_entities_namespaces_storage_limit_exclusion;
        }
        return new ApiEntitiesNamespacesStorageLimitExclusionEntity($this, $data);
    }


    private $_api_entities_npm_package = null;

    // Canonical facade: $client->ApiEntitiesNpmPackage()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_npm_package()
    // resolves here too.
    public function ApiEntitiesNpmPackage($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_npm_package_entity.php';
        if ($data === null) {
            if ($this->_api_entities_npm_package === null) {
                $this->_api_entities_npm_package = new ApiEntitiesNpmPackageEntity($this, null);
            }
            return $this->_api_entities_npm_package;
        }
        return new ApiEntitiesNpmPackageEntity($this, $data);
    }


    private $_api_entities_npm_package_tag = null;

    // Canonical facade: $client->ApiEntitiesNpmPackageTag()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_npm_package_tag()
    // resolves here too.
    public function ApiEntitiesNpmPackageTag($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_npm_package_tag_entity.php';
        if ($data === null) {
            if ($this->_api_entities_npm_package_tag === null) {
                $this->_api_entities_npm_package_tag = new ApiEntitiesNpmPackageTagEntity($this, null);
            }
            return $this->_api_entities_npm_package_tag;
        }
        return new ApiEntitiesNpmPackageTagEntity($this, $data);
    }


    private $_api_entities_nuget_packages_version = null;

    // Canonical facade: $client->ApiEntitiesNugetPackagesVersion()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_nuget_packages_version()
    // resolves here too.
    public function ApiEntitiesNugetPackagesVersion($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_nuget_packages_version_entity.php';
        if ($data === null) {
            if ($this->_api_entities_nuget_packages_version === null) {
                $this->_api_entities_nuget_packages_version = new ApiEntitiesNugetPackagesVersionEntity($this, null);
            }
            return $this->_api_entities_nuget_packages_version;
        }
        return new ApiEntitiesNugetPackagesVersionEntity($this, $data);
    }


    private $_api_entities_nuget_search_result = null;

    // Canonical facade: $client->ApiEntitiesNugetSearchResult()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_nuget_search_result()
    // resolves here too.
    public function ApiEntitiesNugetSearchResult($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_nuget_search_result_entity.php';
        if ($data === null) {
            if ($this->_api_entities_nuget_search_result === null) {
                $this->_api_entities_nuget_search_result = new ApiEntitiesNugetSearchResultEntity($this, null);
            }
            return $this->_api_entities_nuget_search_result;
        }
        return new ApiEntitiesNugetSearchResultEntity($this, $data);
    }


    private $_api_entities_nuget_service_index = null;

    // Canonical facade: $client->ApiEntitiesNugetServiceIndex()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_nuget_service_index()
    // resolves here too.
    public function ApiEntitiesNugetServiceIndex($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_nuget_service_index_entity.php';
        if ($data === null) {
            if ($this->_api_entities_nuget_service_index === null) {
                $this->_api_entities_nuget_service_index = new ApiEntitiesNugetServiceIndexEntity($this, null);
            }
            return $this->_api_entities_nuget_service_index;
        }
        return new ApiEntitiesNugetServiceIndexEntity($this, $data);
    }


    private $_api_entities_organizations_organization = null;

    // Canonical facade: $client->ApiEntitiesOrganizationsOrganization()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_organizations_organization()
    // resolves here too.
    public function ApiEntitiesOrganizationsOrganization($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_organizations_organization_entity.php';
        if ($data === null) {
            if ($this->_api_entities_organizations_organization === null) {
                $this->_api_entities_organizations_organization = new ApiEntitiesOrganizationsOrganizationEntity($this, null);
            }
            return $this->_api_entities_organizations_organization;
        }
        return new ApiEntitiesOrganizationsOrganizationEntity($this, $data);
    }


    private $_api_entities_package = null;

    // Canonical facade: $client->ApiEntitiesPackage()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_package()
    // resolves here too.
    public function ApiEntitiesPackage($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_package_entity.php';
        if ($data === null) {
            if ($this->_api_entities_package === null) {
                $this->_api_entities_package = new ApiEntitiesPackageEntity($this, null);
            }
            return $this->_api_entities_package;
        }
        return new ApiEntitiesPackageEntity($this, $data);
    }


    private $_api_entities_package_file = null;

    // Canonical facade: $client->ApiEntitiesPackageFile()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_package_file()
    // resolves here too.
    public function ApiEntitiesPackageFile($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_package_file_entity.php';
        if ($data === null) {
            if ($this->_api_entities_package_file === null) {
                $this->_api_entities_package_file = new ApiEntitiesPackageFileEntity($this, null);
            }
            return $this->_api_entities_package_file;
        }
        return new ApiEntitiesPackageFileEntity($this, $data);
    }


    private $_api_entities_package_pipeline = null;

    // Canonical facade: $client->ApiEntitiesPackagePipeline()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_package_pipeline()
    // resolves here too.
    public function ApiEntitiesPackagePipeline($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_package_pipeline_entity.php';
        if ($data === null) {
            if ($this->_api_entities_package_pipeline === null) {
                $this->_api_entities_package_pipeline = new ApiEntitiesPackagePipelineEntity($this, null);
            }
            return $this->_api_entities_package_pipeline;
        }
        return new ApiEntitiesPackagePipelineEntity($this, $data);
    }


    private $_api_entities_packages_conan_files_list = null;

    // Canonical facade: $client->ApiEntitiesPackagesConanFilesList()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_packages_conan_files_list()
    // resolves here too.
    public function ApiEntitiesPackagesConanFilesList($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_packages_conan_files_list_entity.php';
        if ($data === null) {
            if ($this->_api_entities_packages_conan_files_list === null) {
                $this->_api_entities_packages_conan_files_list = new ApiEntitiesPackagesConanFilesListEntity($this, null);
            }
            return $this->_api_entities_packages_conan_files_list;
        }
        return new ApiEntitiesPackagesConanFilesListEntity($this, $data);
    }


    private $_api_entities_packages_conan_package_manifest = null;

    // Canonical facade: $client->ApiEntitiesPackagesConanPackageManifest()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_packages_conan_package_manifest()
    // resolves here too.
    public function ApiEntitiesPackagesConanPackageManifest($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_packages_conan_package_manifest_entity.php';
        if ($data === null) {
            if ($this->_api_entities_packages_conan_package_manifest === null) {
                $this->_api_entities_packages_conan_package_manifest = new ApiEntitiesPackagesConanPackageManifestEntity($this, null);
            }
            return $this->_api_entities_packages_conan_package_manifest;
        }
        return new ApiEntitiesPackagesConanPackageManifestEntity($this, $data);
    }


    private $_api_entities_packages_conan_package_revision = null;

    // Canonical facade: $client->ApiEntitiesPackagesConanPackageRevision()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_packages_conan_package_revision()
    // resolves here too.
    public function ApiEntitiesPackagesConanPackageRevision($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_packages_conan_package_revision_entity.php';
        if ($data === null) {
            if ($this->_api_entities_packages_conan_package_revision === null) {
                $this->_api_entities_packages_conan_package_revision = new ApiEntitiesPackagesConanPackageRevisionEntity($this, null);
            }
            return $this->_api_entities_packages_conan_package_revision;
        }
        return new ApiEntitiesPackagesConanPackageRevisionEntity($this, $data);
    }


    private $_api_entities_packages_conan_package_snapshot = null;

    // Canonical facade: $client->ApiEntitiesPackagesConanPackageSnapshot()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_packages_conan_package_snapshot()
    // resolves here too.
    public function ApiEntitiesPackagesConanPackageSnapshot($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_packages_conan_package_snapshot_entity.php';
        if ($data === null) {
            if ($this->_api_entities_packages_conan_package_snapshot === null) {
                $this->_api_entities_packages_conan_package_snapshot = new ApiEntitiesPackagesConanPackageSnapshotEntity($this, null);
            }
            return $this->_api_entities_packages_conan_package_snapshot;
        }
        return new ApiEntitiesPackagesConanPackageSnapshotEntity($this, $data);
    }


    private $_api_entities_packages_conan_recipe_manifest = null;

    // Canonical facade: $client->ApiEntitiesPackagesConanRecipeManifest()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_packages_conan_recipe_manifest()
    // resolves here too.
    public function ApiEntitiesPackagesConanRecipeManifest($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_packages_conan_recipe_manifest_entity.php';
        if ($data === null) {
            if ($this->_api_entities_packages_conan_recipe_manifest === null) {
                $this->_api_entities_packages_conan_recipe_manifest = new ApiEntitiesPackagesConanRecipeManifestEntity($this, null);
            }
            return $this->_api_entities_packages_conan_recipe_manifest;
        }
        return new ApiEntitiesPackagesConanRecipeManifestEntity($this, $data);
    }


    private $_api_entities_packages_conan_recipe_revision = null;

    // Canonical facade: $client->ApiEntitiesPackagesConanRecipeRevision()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_packages_conan_recipe_revision()
    // resolves here too.
    public function ApiEntitiesPackagesConanRecipeRevision($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_packages_conan_recipe_revision_entity.php';
        if ($data === null) {
            if ($this->_api_entities_packages_conan_recipe_revision === null) {
                $this->_api_entities_packages_conan_recipe_revision = new ApiEntitiesPackagesConanRecipeRevisionEntity($this, null);
            }
            return $this->_api_entities_packages_conan_recipe_revision;
        }
        return new ApiEntitiesPackagesConanRecipeRevisionEntity($this, $data);
    }


    private $_api_entities_packages_conan_recipe_snapshot = null;

    // Canonical facade: $client->ApiEntitiesPackagesConanRecipeSnapshot()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_packages_conan_recipe_snapshot()
    // resolves here too.
    public function ApiEntitiesPackagesConanRecipeSnapshot($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_packages_conan_recipe_snapshot_entity.php';
        if ($data === null) {
            if ($this->_api_entities_packages_conan_recipe_snapshot === null) {
                $this->_api_entities_packages_conan_recipe_snapshot = new ApiEntitiesPackagesConanRecipeSnapshotEntity($this, null);
            }
            return $this->_api_entities_packages_conan_recipe_snapshot;
        }
        return new ApiEntitiesPackagesConanRecipeSnapshotEntity($this, $data);
    }


    private $_api_entities_packages_conan_revision = null;

    // Canonical facade: $client->ApiEntitiesPackagesConanRevision()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_packages_conan_revision()
    // resolves here too.
    public function ApiEntitiesPackagesConanRevision($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_packages_conan_revision_entity.php';
        if ($data === null) {
            if ($this->_api_entities_packages_conan_revision === null) {
                $this->_api_entities_packages_conan_revision = new ApiEntitiesPackagesConanRevisionEntity($this, null);
            }
            return $this->_api_entities_packages_conan_revision;
        }
        return new ApiEntitiesPackagesConanRevisionEntity($this, $data);
    }


    private $_api_entities_packages_conan_upload_url = null;

    // Canonical facade: $client->ApiEntitiesPackagesConanUploadUrl()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_packages_conan_upload_url()
    // resolves here too.
    public function ApiEntitiesPackagesConanUploadUrl($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_packages_conan_upload_url_entity.php';
        if ($data === null) {
            if ($this->_api_entities_packages_conan_upload_url === null) {
                $this->_api_entities_packages_conan_upload_url = new ApiEntitiesPackagesConanUploadUrlEntity($this, null);
            }
            return $this->_api_entities_packages_conan_upload_url;
        }
        return new ApiEntitiesPackagesConanUploadUrlEntity($this, $data);
    }


    private $_api_entities_packages_debian_distribution = null;

    // Canonical facade: $client->ApiEntitiesPackagesDebianDistribution()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_packages_debian_distribution()
    // resolves here too.
    public function ApiEntitiesPackagesDebianDistribution($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_packages_debian_distribution_entity.php';
        if ($data === null) {
            if ($this->_api_entities_packages_debian_distribution === null) {
                $this->_api_entities_packages_debian_distribution = new ApiEntitiesPackagesDebianDistributionEntity($this, null);
            }
            return $this->_api_entities_packages_debian_distribution;
        }
        return new ApiEntitiesPackagesDebianDistributionEntity($this, $data);
    }


    private $_api_entities_pages_domain = null;

    // Canonical facade: $client->ApiEntitiesPagesDomain()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_pages_domain()
    // resolves here too.
    public function ApiEntitiesPagesDomain($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_pages_domain_entity.php';
        if ($data === null) {
            if ($this->_api_entities_pages_domain === null) {
                $this->_api_entities_pages_domain = new ApiEntitiesPagesDomainEntity($this, null);
            }
            return $this->_api_entities_pages_domain;
        }
        return new ApiEntitiesPagesDomainEntity($this, $data);
    }


    private $_api_entities_pages_domain_basic = null;

    // Canonical facade: $client->ApiEntitiesPagesDomainBasic()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_pages_domain_basic()
    // resolves here too.
    public function ApiEntitiesPagesDomainBasic($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_pages_domain_basic_entity.php';
        if ($data === null) {
            if ($this->_api_entities_pages_domain_basic === null) {
                $this->_api_entities_pages_domain_basic = new ApiEntitiesPagesDomainBasicEntity($this, null);
            }
            return $this->_api_entities_pages_domain_basic;
        }
        return new ApiEntitiesPagesDomainBasicEntity($this, $data);
    }


    private $_api_entities_personal_access_token = null;

    // Canonical facade: $client->ApiEntitiesPersonalAccessToken()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_personal_access_token()
    // resolves here too.
    public function ApiEntitiesPersonalAccessToken($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_personal_access_token_entity.php';
        if ($data === null) {
            if ($this->_api_entities_personal_access_token === null) {
                $this->_api_entities_personal_access_token = new ApiEntitiesPersonalAccessTokenEntity($this, null);
            }
            return $this->_api_entities_personal_access_token;
        }
        return new ApiEntitiesPersonalAccessTokenEntity($this, $data);
    }


    private $_api_entities_personal_access_token_with_last_used_ip = null;

    // Canonical facade: $client->ApiEntitiesPersonalAccessTokenWithLastUsedIp()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_personal_access_token_with_last_used_ip()
    // resolves here too.
    public function ApiEntitiesPersonalAccessTokenWithLastUsedIp($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_personal_access_token_with_last_used_ip_entity.php';
        if ($data === null) {
            if ($this->_api_entities_personal_access_token_with_last_used_ip === null) {
                $this->_api_entities_personal_access_token_with_last_used_ip = new ApiEntitiesPersonalAccessTokenWithLastUsedIpEntity($this, null);
            }
            return $this->_api_entities_personal_access_token_with_last_used_ip;
        }
        return new ApiEntitiesPersonalAccessTokenWithLastUsedIpEntity($this, $data);
    }


    private $_api_entities_personal_access_token_with_token = null;

    // Canonical facade: $client->ApiEntitiesPersonalAccessTokenWithToken()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_personal_access_token_with_token()
    // resolves here too.
    public function ApiEntitiesPersonalAccessTokenWithToken($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_personal_access_token_with_token_entity.php';
        if ($data === null) {
            if ($this->_api_entities_personal_access_token_with_token === null) {
                $this->_api_entities_personal_access_token_with_token = new ApiEntitiesPersonalAccessTokenWithTokenEntity($this, null);
            }
            return $this->_api_entities_personal_access_token_with_token;
        }
        return new ApiEntitiesPersonalAccessTokenWithTokenEntity($this, $data);
    }


    private $_api_entities_personal_snippet = null;

    // Canonical facade: $client->ApiEntitiesPersonalSnippet()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_personal_snippet()
    // resolves here too.
    public function ApiEntitiesPersonalSnippet($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_personal_snippet_entity.php';
        if ($data === null) {
            if ($this->_api_entities_personal_snippet === null) {
                $this->_api_entities_personal_snippet = new ApiEntitiesPersonalSnippetEntity($this, null);
            }
            return $this->_api_entities_personal_snippet;
        }
        return new ApiEntitiesPersonalSnippetEntity($this, $data);
    }


    private $_api_entities_plan_limit = null;

    // Canonical facade: $client->ApiEntitiesPlanLimit()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_plan_limit()
    // resolves here too.
    public function ApiEntitiesPlanLimit($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_plan_limit_entity.php';
        if ($data === null) {
            if ($this->_api_entities_plan_limit === null) {
                $this->_api_entities_plan_limit = new ApiEntitiesPlanLimitEntity($this, null);
            }
            return $this->_api_entities_plan_limit;
        }
        return new ApiEntitiesPlanLimitEntity($this, $data);
    }


    private $_api_entities_project = null;

    // Canonical facade: $client->ApiEntitiesProject()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_project()
    // resolves here too.
    public function ApiEntitiesProject($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_project_entity.php';
        if ($data === null) {
            if ($this->_api_entities_project === null) {
                $this->_api_entities_project = new ApiEntitiesProjectEntity($this, null);
            }
            return $this->_api_entities_project;
        }
        return new ApiEntitiesProjectEntity($this, $data);
    }


    private $_api_entities_project_daily_statistic = null;

    // Canonical facade: $client->ApiEntitiesProjectDailyStatistic()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_project_daily_statistic()
    // resolves here too.
    public function ApiEntitiesProjectDailyStatistic($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_project_daily_statistic_entity.php';
        if ($data === null) {
            if ($this->_api_entities_project_daily_statistic === null) {
                $this->_api_entities_project_daily_statistic = new ApiEntitiesProjectDailyStatisticEntity($this, null);
            }
            return $this->_api_entities_project_daily_statistic;
        }
        return new ApiEntitiesProjectDailyStatisticEntity($this, $data);
    }


    private $_api_entities_project_export_status = null;

    // Canonical facade: $client->ApiEntitiesProjectExportStatus()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_project_export_status()
    // resolves here too.
    public function ApiEntitiesProjectExportStatus($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_project_export_status_entity.php';
        if ($data === null) {
            if ($this->_api_entities_project_export_status === null) {
                $this->_api_entities_project_export_status = new ApiEntitiesProjectExportStatusEntity($this, null);
            }
            return $this->_api_entities_project_export_status;
        }
        return new ApiEntitiesProjectExportStatusEntity($this, $data);
    }


    private $_api_entities_project_group_link = null;

    // Canonical facade: $client->ApiEntitiesProjectGroupLink()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_project_group_link()
    // resolves here too.
    public function ApiEntitiesProjectGroupLink($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_project_group_link_entity.php';
        if ($data === null) {
            if ($this->_api_entities_project_group_link === null) {
                $this->_api_entities_project_group_link = new ApiEntitiesProjectGroupLinkEntity($this, null);
            }
            return $this->_api_entities_project_group_link;
        }
        return new ApiEntitiesProjectGroupLinkEntity($this, $data);
    }


    private $_api_entities_project_hook = null;

    // Canonical facade: $client->ApiEntitiesProjectHook()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_project_hook()
    // resolves here too.
    public function ApiEntitiesProjectHook($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_project_hook_entity.php';
        if ($data === null) {
            if ($this->_api_entities_project_hook === null) {
                $this->_api_entities_project_hook = new ApiEntitiesProjectHookEntity($this, null);
            }
            return $this->_api_entities_project_hook;
        }
        return new ApiEntitiesProjectHookEntity($this, $data);
    }


    private $_api_entities_project_import_status = null;

    // Canonical facade: $client->ApiEntitiesProjectImportStatus()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_project_import_status()
    // resolves here too.
    public function ApiEntitiesProjectImportStatus($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_project_import_status_entity.php';
        if ($data === null) {
            if ($this->_api_entities_project_import_status === null) {
                $this->_api_entities_project_import_status = new ApiEntitiesProjectImportStatusEntity($this, null);
            }
            return $this->_api_entities_project_import_status;
        }
        return new ApiEntitiesProjectImportStatusEntity($this, $data);
    }


    private $_api_entities_project_job_token_scope = null;

    // Canonical facade: $client->ApiEntitiesProjectJobTokenScope()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_project_job_token_scope()
    // resolves here too.
    public function ApiEntitiesProjectJobTokenScope($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_project_job_token_scope_entity.php';
        if ($data === null) {
            if ($this->_api_entities_project_job_token_scope === null) {
                $this->_api_entities_project_job_token_scope = new ApiEntitiesProjectJobTokenScopeEntity($this, null);
            }
            return $this->_api_entities_project_job_token_scope;
        }
        return new ApiEntitiesProjectJobTokenScopeEntity($this, $data);
    }


    private $_api_entities_project_repository_storage = null;

    // Canonical facade: $client->ApiEntitiesProjectRepositoryStorage()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_project_repository_storage()
    // resolves here too.
    public function ApiEntitiesProjectRepositoryStorage($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_project_repository_storage_entity.php';
        if ($data === null) {
            if ($this->_api_entities_project_repository_storage === null) {
                $this->_api_entities_project_repository_storage = new ApiEntitiesProjectRepositoryStorageEntity($this, null);
            }
            return $this->_api_entities_project_repository_storage;
        }
        return new ApiEntitiesProjectRepositoryStorageEntity($this, $data);
    }


    private $_api_entities_project_snippet = null;

    // Canonical facade: $client->ApiEntitiesProjectSnippet()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_project_snippet()
    // resolves here too.
    public function ApiEntitiesProjectSnippet($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_project_snippet_entity.php';
        if ($data === null) {
            if ($this->_api_entities_project_snippet === null) {
                $this->_api_entities_project_snippet = new ApiEntitiesProjectSnippetEntity($this, null);
            }
            return $this->_api_entities_project_snippet;
        }
        return new ApiEntitiesProjectSnippetEntity($this, $data);
    }


    private $_api_entities_project_upload = null;

    // Canonical facade: $client->ApiEntitiesProjectUpload()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_project_upload()
    // resolves here too.
    public function ApiEntitiesProjectUpload($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_project_upload_entity.php';
        if ($data === null) {
            if ($this->_api_entities_project_upload === null) {
                $this->_api_entities_project_upload = new ApiEntitiesProjectUploadEntity($this, null);
            }
            return $this->_api_entities_project_upload;
        }
        return new ApiEntitiesProjectUploadEntity($this, $data);
    }


    private $_api_entities_project_with_access = null;

    // Canonical facade: $client->ApiEntitiesProjectWithAccess()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_project_with_access()
    // resolves here too.
    public function ApiEntitiesProjectWithAccess($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_project_with_access_entity.php';
        if ($data === null) {
            if ($this->_api_entities_project_with_access === null) {
                $this->_api_entities_project_with_access = new ApiEntitiesProjectWithAccessEntity($this, null);
            }
            return $this->_api_entities_project_with_access;
        }
        return new ApiEntitiesProjectWithAccessEntity($this, $data);
    }


    private $_api_entities_projects_container_registry_protection_rule = null;

    // Canonical facade: $client->ApiEntitiesProjectsContainerRegistryProtectionRule()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_projects_container_registry_protection_rule()
    // resolves here too.
    public function ApiEntitiesProjectsContainerRegistryProtectionRule($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_projects_container_registry_protection_rule_entity.php';
        if ($data === null) {
            if ($this->_api_entities_projects_container_registry_protection_rule === null) {
                $this->_api_entities_projects_container_registry_protection_rule = new ApiEntitiesProjectsContainerRegistryProtectionRuleEntity($this, null);
            }
            return $this->_api_entities_projects_container_registry_protection_rule;
        }
        return new ApiEntitiesProjectsContainerRegistryProtectionRuleEntity($this, $data);
    }


    private $_api_entities_projects_packages_protection_rule = null;

    // Canonical facade: $client->ApiEntitiesProjectsPackagesProtectionRule()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_projects_packages_protection_rule()
    // resolves here too.
    public function ApiEntitiesProjectsPackagesProtectionRule($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_projects_packages_protection_rule_entity.php';
        if ($data === null) {
            if ($this->_api_entities_projects_packages_protection_rule === null) {
                $this->_api_entities_projects_packages_protection_rule = new ApiEntitiesProjectsPackagesProtectionRuleEntity($this, null);
            }
            return $this->_api_entities_projects_packages_protection_rule;
        }
        return new ApiEntitiesProjectsPackagesProtectionRuleEntity($this, $data);
    }


    private $_api_entities_projects_topic = null;

    // Canonical facade: $client->ApiEntitiesProjectsTopic()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_projects_topic()
    // resolves here too.
    public function ApiEntitiesProjectsTopic($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_projects_topic_entity.php';
        if ($data === null) {
            if ($this->_api_entities_projects_topic === null) {
                $this->_api_entities_projects_topic = new ApiEntitiesProjectsTopicEntity($this, null);
            }
            return $this->_api_entities_projects_topic;
        }
        return new ApiEntitiesProjectsTopicEntity($this, $data);
    }


    private $_api_entities_protected_branch = null;

    // Canonical facade: $client->ApiEntitiesProtectedBranch()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_protected_branch()
    // resolves here too.
    public function ApiEntitiesProtectedBranch($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_protected_branch_entity.php';
        if ($data === null) {
            if ($this->_api_entities_protected_branch === null) {
                $this->_api_entities_protected_branch = new ApiEntitiesProtectedBranchEntity($this, null);
            }
            return $this->_api_entities_protected_branch;
        }
        return new ApiEntitiesProtectedBranchEntity($this, $data);
    }


    private $_api_entities_protected_tag = null;

    // Canonical facade: $client->ApiEntitiesProtectedTag()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_protected_tag()
    // resolves here too.
    public function ApiEntitiesProtectedTag($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_protected_tag_entity.php';
        if ($data === null) {
            if ($this->_api_entities_protected_tag === null) {
                $this->_api_entities_protected_tag = new ApiEntitiesProtectedTagEntity($this, null);
            }
            return $this->_api_entities_protected_tag;
        }
        return new ApiEntitiesProtectedTagEntity($this, $data);
    }


    private $_api_entities_public_group_detail = null;

    // Canonical facade: $client->ApiEntitiesPublicGroupDetail()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_public_group_detail()
    // resolves here too.
    public function ApiEntitiesPublicGroupDetail($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_public_group_detail_entity.php';
        if ($data === null) {
            if ($this->_api_entities_public_group_detail === null) {
                $this->_api_entities_public_group_detail = new ApiEntitiesPublicGroupDetailEntity($this, null);
            }
            return $this->_api_entities_public_group_detail;
        }
        return new ApiEntitiesPublicGroupDetailEntity($this, $data);
    }


    private $_api_entities_related_issue = null;

    // Canonical facade: $client->ApiEntitiesRelatedIssue()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_related_issue()
    // resolves here too.
    public function ApiEntitiesRelatedIssue($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_related_issue_entity.php';
        if ($data === null) {
            if ($this->_api_entities_related_issue === null) {
                $this->_api_entities_related_issue = new ApiEntitiesRelatedIssueEntity($this, null);
            }
            return $this->_api_entities_related_issue;
        }
        return new ApiEntitiesRelatedIssueEntity($this, $data);
    }


    private $_api_entities_relation_import_tracker = null;

    // Canonical facade: $client->ApiEntitiesRelationImportTracker()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_relation_import_tracker()
    // resolves here too.
    public function ApiEntitiesRelationImportTracker($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_relation_import_tracker_entity.php';
        if ($data === null) {
            if ($this->_api_entities_relation_import_tracker === null) {
                $this->_api_entities_relation_import_tracker = new ApiEntitiesRelationImportTrackerEntity($this, null);
            }
            return $this->_api_entities_relation_import_tracker;
        }
        return new ApiEntitiesRelationImportTrackerEntity($this, $data);
    }


    private $_api_entities_release = null;

    // Canonical facade: $client->ApiEntitiesRelease()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_release()
    // resolves here too.
    public function ApiEntitiesRelease($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_release_entity.php';
        if ($data === null) {
            if ($this->_api_entities_release === null) {
                $this->_api_entities_release = new ApiEntitiesReleaseEntity($this, null);
            }
            return $this->_api_entities_release;
        }
        return new ApiEntitiesReleaseEntity($this, $data);
    }


    private $_api_entities_releases_link = null;

    // Canonical facade: $client->ApiEntitiesReleasesLink()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_releases_link()
    // resolves here too.
    public function ApiEntitiesReleasesLink($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_releases_link_entity.php';
        if ($data === null) {
            if ($this->_api_entities_releases_link === null) {
                $this->_api_entities_releases_link = new ApiEntitiesReleasesLinkEntity($this, null);
            }
            return $this->_api_entities_releases_link;
        }
        return new ApiEntitiesReleasesLinkEntity($this, $data);
    }


    private $_api_entities_remote_mirror = null;

    // Canonical facade: $client->ApiEntitiesRemoteMirror()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_remote_mirror()
    // resolves here too.
    public function ApiEntitiesRemoteMirror($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_remote_mirror_entity.php';
        if ($data === null) {
            if ($this->_api_entities_remote_mirror === null) {
                $this->_api_entities_remote_mirror = new ApiEntitiesRemoteMirrorEntity($this, null);
            }
            return $this->_api_entities_remote_mirror;
        }
        return new ApiEntitiesRemoteMirrorEntity($this, $data);
    }


    private $_api_entities_repository_health = null;

    // Canonical facade: $client->ApiEntitiesRepositoryHealth()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_repository_health()
    // resolves here too.
    public function ApiEntitiesRepositoryHealth($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_repository_health_entity.php';
        if ($data === null) {
            if ($this->_api_entities_repository_health === null) {
                $this->_api_entities_repository_health = new ApiEntitiesRepositoryHealthEntity($this, null);
            }
            return $this->_api_entities_repository_health;
        }
        return new ApiEntitiesRepositoryHealthEntity($this, $data);
    }


    private $_api_entities_resource_access_token_with_token = null;

    // Canonical facade: $client->ApiEntitiesResourceAccessTokenWithToken()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_resource_access_token_with_token()
    // resolves here too.
    public function ApiEntitiesResourceAccessTokenWithToken($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_resource_access_token_with_token_entity.php';
        if ($data === null) {
            if ($this->_api_entities_resource_access_token_with_token === null) {
                $this->_api_entities_resource_access_token_with_token = new ApiEntitiesResourceAccessTokenWithTokenEntity($this, null);
            }
            return $this->_api_entities_resource_access_token_with_token;
        }
        return new ApiEntitiesResourceAccessTokenWithTokenEntity($this, $data);
    }


    private $_api_entities_resource_milestone_event = null;

    // Canonical facade: $client->ApiEntitiesResourceMilestoneEvent()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_resource_milestone_event()
    // resolves here too.
    public function ApiEntitiesResourceMilestoneEvent($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_resource_milestone_event_entity.php';
        if ($data === null) {
            if ($this->_api_entities_resource_milestone_event === null) {
                $this->_api_entities_resource_milestone_event = new ApiEntitiesResourceMilestoneEventEntity($this, null);
            }
            return $this->_api_entities_resource_milestone_event;
        }
        return new ApiEntitiesResourceMilestoneEventEntity($this, $data);
    }


    private $_api_entities_snippet = null;

    // Canonical facade: $client->ApiEntitiesSnippet()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_snippet()
    // resolves here too.
    public function ApiEntitiesSnippet($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_snippet_entity.php';
        if ($data === null) {
            if ($this->_api_entities_snippet === null) {
                $this->_api_entities_snippet = new ApiEntitiesSnippetEntity($this, null);
            }
            return $this->_api_entities_snippet;
        }
        return new ApiEntitiesSnippetEntity($this, $data);
    }


    private $_api_entities_ssh_key_with_user = null;

    // Canonical facade: $client->ApiEntitiesSshKeyWithUser()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_ssh_key_with_user()
    // resolves here too.
    public function ApiEntitiesSshKeyWithUser($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_ssh_key_with_user_entity.php';
        if ($data === null) {
            if ($this->_api_entities_ssh_key_with_user === null) {
                $this->_api_entities_ssh_key_with_user = new ApiEntitiesSshKeyWithUserEntity($this, null);
            }
            return $this->_api_entities_ssh_key_with_user;
        }
        return new ApiEntitiesSshKeyWithUserEntity($this, $data);
    }


    private $_api_entities_suggestion = null;

    // Canonical facade: $client->ApiEntitiesSuggestion()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_suggestion()
    // resolves here too.
    public function ApiEntitiesSuggestion($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_suggestion_entity.php';
        if ($data === null) {
            if ($this->_api_entities_suggestion === null) {
                $this->_api_entities_suggestion = new ApiEntitiesSuggestionEntity($this, null);
            }
            return $this->_api_entities_suggestion;
        }
        return new ApiEntitiesSuggestionEntity($this, $data);
    }


    private $_api_entities_system_broadcast_message = null;

    // Canonical facade: $client->ApiEntitiesSystemBroadcastMessage()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_system_broadcast_message()
    // resolves here too.
    public function ApiEntitiesSystemBroadcastMessage($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_system_broadcast_message_entity.php';
        if ($data === null) {
            if ($this->_api_entities_system_broadcast_message === null) {
                $this->_api_entities_system_broadcast_message = new ApiEntitiesSystemBroadcastMessageEntity($this, null);
            }
            return $this->_api_entities_system_broadcast_message;
        }
        return new ApiEntitiesSystemBroadcastMessageEntity($this, $data);
    }


    private $_api_entities_tag = null;

    // Canonical facade: $client->ApiEntitiesTag()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_tag()
    // resolves here too.
    public function ApiEntitiesTag($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_tag_entity.php';
        if ($data === null) {
            if ($this->_api_entities_tag === null) {
                $this->_api_entities_tag = new ApiEntitiesTagEntity($this, null);
            }
            return $this->_api_entities_tag;
        }
        return new ApiEntitiesTagEntity($this, $data);
    }


    private $_api_entities_tag_signature = null;

    // Canonical facade: $client->ApiEntitiesTagSignature()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_tag_signature()
    // resolves here too.
    public function ApiEntitiesTagSignature($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_tag_signature_entity.php';
        if ($data === null) {
            if ($this->_api_entities_tag_signature === null) {
                $this->_api_entities_tag_signature = new ApiEntitiesTagSignatureEntity($this, null);
            }
            return $this->_api_entities_tag_signature;
        }
        return new ApiEntitiesTagSignatureEntity($this, $data);
    }


    private $_api_entities_templates_list = null;

    // Canonical facade: $client->ApiEntitiesTemplatesList()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_templates_list()
    // resolves here too.
    public function ApiEntitiesTemplatesList($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_templates_list_entity.php';
        if ($data === null) {
            if ($this->_api_entities_templates_list === null) {
                $this->_api_entities_templates_list = new ApiEntitiesTemplatesListEntity($this, null);
            }
            return $this->_api_entities_templates_list;
        }
        return new ApiEntitiesTemplatesListEntity($this, $data);
    }


    private $_api_entities_terraform_module_version = null;

    // Canonical facade: $client->ApiEntitiesTerraformModuleVersion()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_terraform_module_version()
    // resolves here too.
    public function ApiEntitiesTerraformModuleVersion($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_terraform_module_version_entity.php';
        if ($data === null) {
            if ($this->_api_entities_terraform_module_version === null) {
                $this->_api_entities_terraform_module_version = new ApiEntitiesTerraformModuleVersionEntity($this, null);
            }
            return $this->_api_entities_terraform_module_version;
        }
        return new ApiEntitiesTerraformModuleVersionEntity($this, $data);
    }


    private $_api_entities_tree_object = null;

    // Canonical facade: $client->ApiEntitiesTreeObject()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_tree_object()
    // resolves here too.
    public function ApiEntitiesTreeObject($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_tree_object_entity.php';
        if ($data === null) {
            if ($this->_api_entities_tree_object === null) {
                $this->_api_entities_tree_object = new ApiEntitiesTreeObjectEntity($this, null);
            }
            return $this->_api_entities_tree_object;
        }
        return new ApiEntitiesTreeObjectEntity($this, $data);
    }


    private $_api_entities_trigger = null;

    // Canonical facade: $client->ApiEntitiesTrigger()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_trigger()
    // resolves here too.
    public function ApiEntitiesTrigger($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_trigger_entity.php';
        if ($data === null) {
            if ($this->_api_entities_trigger === null) {
                $this->_api_entities_trigger = new ApiEntitiesTriggerEntity($this, null);
            }
            return $this->_api_entities_trigger;
        }
        return new ApiEntitiesTriggerEntity($this, $data);
    }


    private $_api_entities_user_agent_detail = null;

    // Canonical facade: $client->ApiEntitiesUserAgentDetail()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_user_agent_detail()
    // resolves here too.
    public function ApiEntitiesUserAgentDetail($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_user_agent_detail_entity.php';
        if ($data === null) {
            if ($this->_api_entities_user_agent_detail === null) {
                $this->_api_entities_user_agent_detail = new ApiEntitiesUserAgentDetailEntity($this, null);
            }
            return $this->_api_entities_user_agent_detail;
        }
        return new ApiEntitiesUserAgentDetailEntity($this, $data);
    }


    private $_api_entities_user_count = null;

    // Canonical facade: $client->ApiEntitiesUserCount()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_user_count()
    // resolves here too.
    public function ApiEntitiesUserCount($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_user_count_entity.php';
        if ($data === null) {
            if ($this->_api_entities_user_count === null) {
                $this->_api_entities_user_count = new ApiEntitiesUserCountEntity($this, null);
            }
            return $this->_api_entities_user_count;
        }
        return new ApiEntitiesUserCountEntity($this, $data);
    }


    private $_api_entities_user_public = null;

    // Canonical facade: $client->ApiEntitiesUserPublic()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_user_public()
    // resolves here too.
    public function ApiEntitiesUserPublic($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_user_public_entity.php';
        if ($data === null) {
            if ($this->_api_entities_user_public === null) {
                $this->_api_entities_user_public = new ApiEntitiesUserPublicEntity($this, null);
            }
            return $this->_api_entities_user_public;
        }
        return new ApiEntitiesUserPublicEntity($this, $data);
    }


    private $_api_entities_user_with_admin = null;

    // Canonical facade: $client->ApiEntitiesUserWithAdmin()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_user_with_admin()
    // resolves here too.
    public function ApiEntitiesUserWithAdmin($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_user_with_admin_entity.php';
        if ($data === null) {
            if ($this->_api_entities_user_with_admin === null) {
                $this->_api_entities_user_with_admin = new ApiEntitiesUserWithAdminEntity($this, null);
            }
            return $this->_api_entities_user_with_admin;
        }
        return new ApiEntitiesUserWithAdminEntity($this, $data);
    }


    private $_api_entities_wiki_attachment = null;

    // Canonical facade: $client->ApiEntitiesWikiAttachment()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_wiki_attachment()
    // resolves here too.
    public function ApiEntitiesWikiAttachment($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_wiki_attachment_entity.php';
        if ($data === null) {
            if ($this->_api_entities_wiki_attachment === null) {
                $this->_api_entities_wiki_attachment = new ApiEntitiesWikiAttachmentEntity($this, null);
            }
            return $this->_api_entities_wiki_attachment;
        }
        return new ApiEntitiesWikiAttachmentEntity($this, $data);
    }


    private $_api_entities_wiki_page = null;

    // Canonical facade: $client->ApiEntitiesWikiPage()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_wiki_page()
    // resolves here too.
    public function ApiEntitiesWikiPage($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_wiki_page_entity.php';
        if ($data === null) {
            if ($this->_api_entities_wiki_page === null) {
                $this->_api_entities_wiki_page = new ApiEntitiesWikiPageEntity($this, null);
            }
            return $this->_api_entities_wiki_page;
        }
        return new ApiEntitiesWikiPageEntity($this, $data);
    }


    private $_api_entities_wiki_page_basic = null;

    // Canonical facade: $client->ApiEntitiesWikiPageBasic()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_entities_wiki_page_basic()
    // resolves here too.
    public function ApiEntitiesWikiPageBasic($data = null)
    {
        require_once __DIR__ . '/entity/api_entities_wiki_page_basic_entity.php';
        if ($data === null) {
            if ($this->_api_entities_wiki_page_basic === null) {
                $this->_api_entities_wiki_page_basic = new ApiEntitiesWikiPageBasicEntity($this, null);
            }
            return $this->_api_entities_wiki_page_basic;
        }
        return new ApiEntitiesWikiPageBasicEntity($this, $data);
    }


    private $_application = null;

    // Canonical facade: $client->Application()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->application()
    // resolves here too.
    public function Application($data = null)
    {
        require_once __DIR__ . '/entity/application_entity.php';
        if ($data === null) {
            if ($this->_application === null) {
                $this->_application = new ApplicationEntity($this, null);
            }
            return $this->_application;
        }
        return new ApplicationEntity($this, $data);
    }


    private $_award_emoji = null;

    // Canonical facade: $client->AwardEmoji()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->award_emoji()
    // resolves here too.
    public function AwardEmoji($data = null)
    {
        require_once __DIR__ . '/entity/award_emoji_entity.php';
        if ($data === null) {
            if ($this->_award_emoji === null) {
                $this->_award_emoji = new AwardEmojiEntity($this, null);
            }
            return $this->_award_emoji;
        }
        return new AwardEmojiEntity($this, $data);
    }


    private $_badge = null;

    // Canonical facade: $client->Badge()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->badge()
    // resolves here too.
    public function Badge($data = null)
    {
        require_once __DIR__ . '/entity/badge_entity.php';
        if ($data === null) {
            if ($this->_badge === null) {
                $this->_badge = new BadgeEntity($this, null);
            }
            return $this->_badge;
        }
        return new BadgeEntity($this, $data);
    }


    private $_branch = null;

    // Canonical facade: $client->Branch()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->branch()
    // resolves here too.
    public function Branch($data = null)
    {
        require_once __DIR__ . '/entity/branch_entity.php';
        if ($data === null) {
            if ($this->_branch === null) {
                $this->_branch = new BranchEntity($this, null);
            }
            return $this->_branch;
        }
        return new BranchEntity($this, $data);
    }


    private $_cargo_package = null;

    // Canonical facade: $client->CargoPackage()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->cargo_package()
    // resolves here too.
    public function CargoPackage($data = null)
    {
        require_once __DIR__ . '/entity/cargo_package_entity.php';
        if ($data === null) {
            if ($this->_cargo_package === null) {
                $this->_cargo_package = new CargoPackageEntity($this, null);
            }
            return $this->_cargo_package;
        }
        return new CargoPackageEntity($this, $data);
    }


    private $_ci_variable = null;

    // Canonical facade: $client->CiVariable()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->ci_variable()
    // resolves here too.
    public function CiVariable($data = null)
    {
        require_once __DIR__ . '/entity/ci_variable_entity.php';
        if ($data === null) {
            if ($this->_ci_variable === null) {
                $this->_ci_variable = new CiVariableEntity($this, null);
            }
            return $this->_ci_variable;
        }
        return new CiVariableEntity($this, $data);
    }


    private $_cluster = null;

    // Canonical facade: $client->Cluster()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->cluster()
    // resolves here too.
    public function Cluster($data = null)
    {
        require_once __DIR__ . '/entity/cluster_entity.php';
        if ($data === null) {
            if ($this->_cluster === null) {
                $this->_cluster = new ClusterEntity($this, null);
            }
            return $this->_cluster;
        }
        return new ClusterEntity($this, $data);
    }


    private $_cluster_agent = null;

    // Canonical facade: $client->ClusterAgent()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->cluster_agent()
    // resolves here too.
    public function ClusterAgent($data = null)
    {
        require_once __DIR__ . '/entity/cluster_agent_entity.php';
        if ($data === null) {
            if ($this->_cluster_agent === null) {
                $this->_cluster_agent = new ClusterAgentEntity($this, null);
            }
            return $this->_cluster_agent;
        }
        return new ClusterAgentEntity($this, $data);
    }


    private $_composer = null;

    // Canonical facade: $client->Composer()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->composer()
    // resolves here too.
    public function Composer($data = null)
    {
        require_once __DIR__ . '/entity/composer_entity.php';
        if ($data === null) {
            if ($this->_composer === null) {
                $this->_composer = new ComposerEntity($this, null);
            }
            return $this->_composer;
        }
        return new ComposerEntity($this, $data);
    }


    private $_composer_package = null;

    // Canonical facade: $client->ComposerPackage()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->composer_package()
    // resolves here too.
    public function ComposerPackage($data = null)
    {
        require_once __DIR__ . '/entity/composer_package_entity.php';
        if ($data === null) {
            if ($this->_composer_package === null) {
                $this->_composer_package = new ComposerPackageEntity($this, null);
            }
            return $this->_composer_package;
        }
        return new ComposerPackageEntity($this, $data);
    }


    private $_conan = null;

    // Canonical facade: $client->Conan()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->conan()
    // resolves here too.
    public function Conan($data = null)
    {
        require_once __DIR__ . '/entity/conan_entity.php';
        if ($data === null) {
            if ($this->_conan === null) {
                $this->_conan = new ConanEntity($this, null);
            }
            return $this->_conan;
        }
        return new ConanEntity($this, $data);
    }


    private $_conan_package = null;

    // Canonical facade: $client->ConanPackage()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->conan_package()
    // resolves here too.
    public function ConanPackage($data = null)
    {
        require_once __DIR__ . '/entity/conan_package_entity.php';
        if ($data === null) {
            if ($this->_conan_package === null) {
                $this->_conan_package = new ConanPackageEntity($this, null);
            }
            return $this->_conan_package;
        }
        return new ConanPackageEntity($this, $data);
    }


    private $_container_registry = null;

    // Canonical facade: $client->ContainerRegistry()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->container_registry()
    // resolves here too.
    public function ContainerRegistry($data = null)
    {
        require_once __DIR__ . '/entity/container_registry_entity.php';
        if ($data === null) {
            if ($this->_container_registry === null) {
                $this->_container_registry = new ContainerRegistryEntity($this, null);
            }
            return $this->_container_registry;
        }
        return new ContainerRegistryEntity($this, $data);
    }


    private $_container_registry_event = null;

    // Canonical facade: $client->ContainerRegistryEvent()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->container_registry_event()
    // resolves here too.
    public function ContainerRegistryEvent($data = null)
    {
        require_once __DIR__ . '/entity/container_registry_event_entity.php';
        if ($data === null) {
            if ($this->_container_registry_event === null) {
                $this->_container_registry_event = new ContainerRegistryEventEntity($this, null);
            }
            return $this->_container_registry_event;
        }
        return new ContainerRegistryEventEntity($this, $data);
    }


    private $_custom_attribute = null;

    // Canonical facade: $client->CustomAttribute()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->custom_attribute()
    // resolves here too.
    public function CustomAttribute($data = null)
    {
        require_once __DIR__ . '/entity/custom_attribute_entity.php';
        if ($data === null) {
            if ($this->_custom_attribute === null) {
                $this->_custom_attribute = new CustomAttributeEntity($this, null);
            }
            return $this->_custom_attribute;
        }
        return new CustomAttributeEntity($this, $data);
    }


    private $_debian = null;

    // Canonical facade: $client->Debian()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->debian()
    // resolves here too.
    public function Debian($data = null)
    {
        require_once __DIR__ . '/entity/debian_entity.php';
        if ($data === null) {
            if ($this->_debian === null) {
                $this->_debian = new DebianEntity($this, null);
            }
            return $this->_debian;
        }
        return new DebianEntity($this, $data);
    }


    private $_debian_distribution = null;

    // Canonical facade: $client->DebianDistribution()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->debian_distribution()
    // resolves here too.
    public function DebianDistribution($data = null)
    {
        require_once __DIR__ . '/entity/debian_distribution_entity.php';
        if ($data === null) {
            if ($this->_debian_distribution === null) {
                $this->_debian_distribution = new DebianDistributionEntity($this, null);
            }
            return $this->_debian_distribution;
        }
        return new DebianDistributionEntity($this, $data);
    }


    private $_debian_package = null;

    // Canonical facade: $client->DebianPackage()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->debian_package()
    // resolves here too.
    public function DebianPackage($data = null)
    {
        require_once __DIR__ . '/entity/debian_package_entity.php';
        if ($data === null) {
            if ($this->_debian_package === null) {
                $this->_debian_package = new DebianPackageEntity($this, null);
            }
            return $this->_debian_package;
        }
        return new DebianPackageEntity($this, $data);
    }


    private $_dependency_proxy = null;

    // Canonical facade: $client->DependencyProxy()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->dependency_proxy()
    // resolves here too.
    public function DependencyProxy($data = null)
    {
        require_once __DIR__ . '/entity/dependency_proxy_entity.php';
        if ($data === null) {
            if ($this->_dependency_proxy === null) {
                $this->_dependency_proxy = new DependencyProxyEntity($this, null);
            }
            return $this->_dependency_proxy;
        }
        return new DependencyProxyEntity($this, $data);
    }


    private $_deploy_key = null;

    // Canonical facade: $client->DeployKey()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->deploy_key()
    // resolves here too.
    public function DeployKey($data = null)
    {
        require_once __DIR__ . '/entity/deploy_key_entity.php';
        if ($data === null) {
            if ($this->_deploy_key === null) {
                $this->_deploy_key = new DeployKeyEntity($this, null);
            }
            return $this->_deploy_key;
        }
        return new DeployKeyEntity($this, $data);
    }


    private $_deploy_token = null;

    // Canonical facade: $client->DeployToken()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->deploy_token()
    // resolves here too.
    public function DeployToken($data = null)
    {
        require_once __DIR__ . '/entity/deploy_token_entity.php';
        if ($data === null) {
            if ($this->_deploy_token === null) {
                $this->_deploy_token = new DeployTokenEntity($this, null);
            }
            return $this->_deploy_token;
        }
        return new DeployTokenEntity($this, $data);
    }


    private $_deployment = null;

    // Canonical facade: $client->Deployment()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->deployment()
    // resolves here too.
    public function Deployment($data = null)
    {
        require_once __DIR__ . '/entity/deployment_entity.php';
        if ($data === null) {
            if ($this->_deployment === null) {
                $this->_deployment = new DeploymentEntity($this, null);
            }
            return $this->_deployment;
        }
        return new DeploymentEntity($this, $data);
    }


    private $_ee_api_entities_approval_state = null;

    // Canonical facade: $client->EeApiEntitiesApprovalState()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->ee_api_entities_approval_state()
    // resolves here too.
    public function EeApiEntitiesApprovalState($data = null)
    {
        require_once __DIR__ . '/entity/ee_api_entities_approval_state_entity.php';
        if ($data === null) {
            if ($this->_ee_api_entities_approval_state === null) {
                $this->_ee_api_entities_approval_state = new EeApiEntitiesApprovalStateEntity($this, null);
            }
            return $this->_ee_api_entities_approval_state;
        }
        return new EeApiEntitiesApprovalStateEntity($this, $data);
    }


    private $_ee_api_entities_audit_event = null;

    // Canonical facade: $client->EeApiEntitiesAuditEvent()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->ee_api_entities_audit_event()
    // resolves here too.
    public function EeApiEntitiesAuditEvent($data = null)
    {
        require_once __DIR__ . '/entity/ee_api_entities_audit_event_entity.php';
        if ($data === null) {
            if ($this->_ee_api_entities_audit_event === null) {
                $this->_ee_api_entities_audit_event = new EeApiEntitiesAuditEventEntity($this, null);
            }
            return $this->_ee_api_entities_audit_event;
        }
        return new EeApiEntitiesAuditEventEntity($this, $data);
    }


    private $_ee_api_entities_billable_membership = null;

    // Canonical facade: $client->EeApiEntitiesBillableMembership()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->ee_api_entities_billable_membership()
    // resolves here too.
    public function EeApiEntitiesBillableMembership($data = null)
    {
        require_once __DIR__ . '/entity/ee_api_entities_billable_membership_entity.php';
        if ($data === null) {
            if ($this->_ee_api_entities_billable_membership === null) {
                $this->_ee_api_entities_billable_membership = new EeApiEntitiesBillableMembershipEntity($this, null);
            }
            return $this->_ee_api_entities_billable_membership;
        }
        return new EeApiEntitiesBillableMembershipEntity($this, $data);
    }


    private $_ee_api_entities_geo_node_status = null;

    // Canonical facade: $client->EeApiEntitiesGeoNodeStatus()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->ee_api_entities_geo_node_status()
    // resolves here too.
    public function EeApiEntitiesGeoNodeStatus($data = null)
    {
        require_once __DIR__ . '/entity/ee_api_entities_geo_node_status_entity.php';
        if ($data === null) {
            if ($this->_ee_api_entities_geo_node_status === null) {
                $this->_ee_api_entities_geo_node_status = new EeApiEntitiesGeoNodeStatusEntity($this, null);
            }
            return $this->_ee_api_entities_geo_node_status;
        }
        return new EeApiEntitiesGeoNodeStatusEntity($this, $data);
    }


    private $_ee_api_entities_geo_pipeline_ref = null;

    // Canonical facade: $client->EeApiEntitiesGeoPipelineRef()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->ee_api_entities_geo_pipeline_ref()
    // resolves here too.
    public function EeApiEntitiesGeoPipelineRef($data = null)
    {
        require_once __DIR__ . '/entity/ee_api_entities_geo_pipeline_ref_entity.php';
        if ($data === null) {
            if ($this->_ee_api_entities_geo_pipeline_ref === null) {
                $this->_ee_api_entities_geo_pipeline_ref = new EeApiEntitiesGeoPipelineRefEntity($this, null);
            }
            return $this->_ee_api_entities_geo_pipeline_ref;
        }
        return new EeApiEntitiesGeoPipelineRefEntity($this, $data);
    }


    private $_ee_api_entities_issuable_metric_image = null;

    // Canonical facade: $client->EeApiEntitiesIssuableMetricImage()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->ee_api_entities_issuable_metric_image()
    // resolves here too.
    public function EeApiEntitiesIssuableMetricImage($data = null)
    {
        require_once __DIR__ . '/entity/ee_api_entities_issuable_metric_image_entity.php';
        if ($data === null) {
            if ($this->_ee_api_entities_issuable_metric_image === null) {
                $this->_ee_api_entities_issuable_metric_image = new EeApiEntitiesIssuableMetricImageEntity($this, null);
            }
            return $this->_ee_api_entities_issuable_metric_image;
        }
        return new EeApiEntitiesIssuableMetricImageEntity($this, $data);
    }


    private $_ee_api_entities_merge_request_approval_state = null;

    // Canonical facade: $client->EeApiEntitiesMergeRequestApprovalState()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->ee_api_entities_merge_request_approval_state()
    // resolves here too.
    public function EeApiEntitiesMergeRequestApprovalState($data = null)
    {
        require_once __DIR__ . '/entity/ee_api_entities_merge_request_approval_state_entity.php';
        if ($data === null) {
            if ($this->_ee_api_entities_merge_request_approval_state === null) {
                $this->_ee_api_entities_merge_request_approval_state = new EeApiEntitiesMergeRequestApprovalStateEntity($this, null);
            }
            return $this->_ee_api_entities_merge_request_approval_state;
        }
        return new EeApiEntitiesMergeRequestApprovalStateEntity($this, $data);
    }


    private $_ee_api_entities_ssh_certificate = null;

    // Canonical facade: $client->EeApiEntitiesSshCertificate()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->ee_api_entities_ssh_certificate()
    // resolves here too.
    public function EeApiEntitiesSshCertificate($data = null)
    {
        require_once __DIR__ . '/entity/ee_api_entities_ssh_certificate_entity.php';
        if ($data === null) {
            if ($this->_ee_api_entities_ssh_certificate === null) {
                $this->_ee_api_entities_ssh_certificate = new EeApiEntitiesSshCertificateEntity($this, null);
            }
            return $this->_ee_api_entities_ssh_certificate;
        }
        return new EeApiEntitiesSshCertificateEntity($this, $data);
    }


    private $_environment = null;

    // Canonical facade: $client->Environment()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->environment()
    // resolves here too.
    public function Environment($data = null)
    {
        require_once __DIR__ . '/entity/environment_entity.php';
        if ($data === null) {
            if ($this->_environment === null) {
                $this->_environment = new EnvironmentEntity($this, null);
            }
            return $this->_environment;
        }
        return new EnvironmentEntity($this, $data);
    }


    private $_error_tracking_client_key = null;

    // Canonical facade: $client->ErrorTrackingClientKey()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->error_tracking_client_key()
    // resolves here too.
    public function ErrorTrackingClientKey($data = null)
    {
        require_once __DIR__ . '/entity/error_tracking_client_key_entity.php';
        if ($data === null) {
            if ($this->_error_tracking_client_key === null) {
                $this->_error_tracking_client_key = new ErrorTrackingClientKeyEntity($this, null);
            }
            return $this->_error_tracking_client_key;
        }
        return new ErrorTrackingClientKeyEntity($this, $data);
    }


    private $_feature = null;

    // Canonical facade: $client->Feature()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->feature()
    // resolves here too.
    public function Feature($data = null)
    {
        require_once __DIR__ . '/entity/feature_entity.php';
        if ($data === null) {
            if ($this->_feature === null) {
                $this->_feature = new FeatureEntity($this, null);
            }
            return $this->_feature;
        }
        return new FeatureEntity($this, $data);
    }


    private $_feature_flag = null;

    // Canonical facade: $client->FeatureFlag()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->feature_flag()
    // resolves here too.
    public function FeatureFlag($data = null)
    {
        require_once __DIR__ . '/entity/feature_flag_entity.php';
        if ($data === null) {
            if ($this->_feature_flag === null) {
                $this->_feature_flag = new FeatureFlagEntity($this, null);
            }
            return $this->_feature_flag;
        }
        return new FeatureFlagEntity($this, $data);
    }


    private $_feature_flags_user_list = null;

    // Canonical facade: $client->FeatureFlagsUserList()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->feature_flags_user_list()
    // resolves here too.
    public function FeatureFlagsUserList($data = null)
    {
        require_once __DIR__ . '/entity/feature_flags_user_list_entity.php';
        if ($data === null) {
            if ($this->_feature_flags_user_list === null) {
                $this->_feature_flags_user_list = new FeatureFlagsUserListEntity($this, null);
            }
            return $this->_feature_flags_user_list;
        }
        return new FeatureFlagsUserListEntity($this, $data);
    }


    private $_freeze_period = null;

    // Canonical facade: $client->FreezePeriod()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->freeze_period()
    // resolves here too.
    public function FreezePeriod($data = null)
    {
        require_once __DIR__ . '/entity/freeze_period_entity.php';
        if ($data === null) {
            if ($this->_freeze_period === null) {
                $this->_freeze_period = new FreezePeriodEntity($this, null);
            }
            return $this->_freeze_period;
        }
        return new FreezePeriodEntity($this, $data);
    }


    private $_generic_package = null;

    // Canonical facade: $client->GenericPackage()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->generic_package()
    // resolves here too.
    public function GenericPackage($data = null)
    {
        require_once __DIR__ . '/entity/generic_package_entity.php';
        if ($data === null) {
            if ($this->_generic_package === null) {
                $this->_generic_package = new GenericPackageEntity($this, null);
            }
            return $this->_generic_package;
        }
        return new GenericPackageEntity($this, $data);
    }


    private $_geo = null;

    // Canonical facade: $client->Geo()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->geo()
    // resolves here too.
    public function Geo($data = null)
    {
        require_once __DIR__ . '/entity/geo_entity.php';
        if ($data === null) {
            if ($this->_geo === null) {
                $this->_geo = new GeoEntity($this, null);
            }
            return $this->_geo;
        }
        return new GeoEntity($this, $data);
    }


    private $_go_proxy = null;

    // Canonical facade: $client->GoProxy()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->go_proxy()
    // resolves here too.
    public function GoProxy($data = null)
    {
        require_once __DIR__ . '/entity/go_proxy_entity.php';
        if ($data === null) {
            if ($this->_go_proxy === null) {
                $this->_go_proxy = new GoProxyEntity($this, null);
            }
            return $this->_go_proxy;
        }
        return new GoProxyEntity($this, $data);
    }


    private $_group = null;

    // Canonical facade: $client->Group()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->group()
    // resolves here too.
    public function Group($data = null)
    {
        require_once __DIR__ . '/entity/group_entity.php';
        if ($data === null) {
            if ($this->_group === null) {
                $this->_group = new GroupEntity($this, null);
            }
            return $this->_group;
        }
        return new GroupEntity($this, $data);
    }


    private $_group_avatar = null;

    // Canonical facade: $client->GroupAvatar()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->group_avatar()
    // resolves here too.
    public function GroupAvatar($data = null)
    {
        require_once __DIR__ . '/entity/group_avatar_entity.php';
        if ($data === null) {
            if ($this->_group_avatar === null) {
                $this->_group_avatar = new GroupAvatarEntity($this, null);
            }
            return $this->_group_avatar;
        }
        return new GroupAvatarEntity($this, $data);
    }


    private $_group_export = null;

    // Canonical facade: $client->GroupExport()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->group_export()
    // resolves here too.
    public function GroupExport($data = null)
    {
        require_once __DIR__ . '/entity/group_export_entity.php';
        if ($data === null) {
            if ($this->_group_export === null) {
                $this->_group_export = new GroupExportEntity($this, null);
            }
            return $this->_group_export;
        }
        return new GroupExportEntity($this, $data);
    }


    private $_group_import = null;

    // Canonical facade: $client->GroupImport()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->group_import()
    // resolves here too.
    public function GroupImport($data = null)
    {
        require_once __DIR__ . '/entity/group_import_entity.php';
        if ($data === null) {
            if ($this->_group_import === null) {
                $this->_group_import = new GroupImportEntity($this, null);
            }
            return $this->_group_import;
        }
        return new GroupImportEntity($this, $data);
    }


    private $_helm_package = null;

    // Canonical facade: $client->HelmPackage()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->helm_package()
    // resolves here too.
    public function HelmPackage($data = null)
    {
        require_once __DIR__ . '/entity/helm_package_entity.php';
        if ($data === null) {
            if ($this->_helm_package === null) {
                $this->_helm_package = new HelmPackageEntity($this, null);
            }
            return $this->_helm_package;
        }
        return new HelmPackageEntity($this, $data);
    }


    private $_hook = null;

    // Canonical facade: $client->Hook()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->hook()
    // resolves here too.
    public function Hook($data = null)
    {
        require_once __DIR__ . '/entity/hook_entity.php';
        if ($data === null) {
            if ($this->_hook === null) {
                $this->_hook = new HookEntity($this, null);
            }
            return $this->_hook;
        }
        return new HookEntity($this, $data);
    }


    private $_import = null;

    // Canonical facade: $client->Import()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->import()
    // resolves here too.
    public function Import($data = null)
    {
        require_once __DIR__ . '/entity/import_entity.php';
        if ($data === null) {
            if ($this->_import === null) {
                $this->_import = new ImportEntity($this, null);
            }
            return $this->_import;
        }
        return new ImportEntity($this, $data);
    }


    private $_integration = null;

    // Canonical facade: $client->Integration()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->integration()
    // resolves here too.
    public function Integration($data = null)
    {
        require_once __DIR__ . '/entity/integration_entity.php';
        if ($data === null) {
            if ($this->_integration === null) {
                $this->_integration = new IntegrationEntity($this, null);
            }
            return $this->_integration;
        }
        return new IntegrationEntity($this, $data);
    }


    private $_invitation = null;

    // Canonical facade: $client->Invitation()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->invitation()
    // resolves here too.
    public function Invitation($data = null)
    {
        require_once __DIR__ . '/entity/invitation_entity.php';
        if ($data === null) {
            if ($this->_invitation === null) {
                $this->_invitation = new InvitationEntity($this, null);
            }
            return $this->_invitation;
        }
        return new InvitationEntity($this, $data);
    }


    private $_issue_link = null;

    // Canonical facade: $client->IssueLink()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->issue_link()
    // resolves here too.
    public function IssueLink($data = null)
    {
        require_once __DIR__ . '/entity/issue_link_entity.php';
        if ($data === null) {
            if ($this->_issue_link === null) {
                $this->_issue_link = new IssueLinkEntity($this, null);
            }
            return $this->_issue_link;
        }
        return new IssueLinkEntity($this, $data);
    }


    private $_issues_statistic = null;

    // Canonical facade: $client->IssuesStatistic()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->issues_statistic()
    // resolves here too.
    public function IssuesStatistic($data = null)
    {
        require_once __DIR__ . '/entity/issues_statistic_entity.php';
        if ($data === null) {
            if ($this->_issues_statistic === null) {
                $this->_issues_statistic = new IssuesStatisticEntity($this, null);
            }
            return $this->_issues_statistic;
        }
        return new IssuesStatisticEntity($this, $data);
    }


    private $_job = null;

    // Canonical facade: $client->Job()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->job()
    // resolves here too.
    public function Job($data = null)
    {
        require_once __DIR__ . '/entity/job_entity.php';
        if ($data === null) {
            if ($this->_job === null) {
                $this->_job = new JobEntity($this, null);
            }
            return $this->_job;
        }
        return new JobEntity($this, $data);
    }


    private $_maven_package = null;

    // Canonical facade: $client->MavenPackage()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->maven_package()
    // resolves here too.
    public function MavenPackage($data = null)
    {
        require_once __DIR__ . '/entity/maven_package_entity.php';
        if ($data === null) {
            if ($this->_maven_package === null) {
                $this->_maven_package = new MavenPackageEntity($this, null);
            }
            return $this->_maven_package;
        }
        return new MavenPackageEntity($this, $data);
    }


    private $_member = null;

    // Canonical facade: $client->Member()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->member()
    // resolves here too.
    public function Member($data = null)
    {
        require_once __DIR__ . '/entity/member_entity.php';
        if ($data === null) {
            if ($this->_member === null) {
                $this->_member = new MemberEntity($this, null);
            }
            return $this->_member;
        }
        return new MemberEntity($this, $data);
    }


    private $_merge_request = null;

    // Canonical facade: $client->MergeRequest()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->merge_request()
    // resolves here too.
    public function MergeRequest($data = null)
    {
        require_once __DIR__ . '/entity/merge_request_entity.php';
        if ($data === null) {
            if ($this->_merge_request === null) {
                $this->_merge_request = new MergeRequestEntity($this, null);
            }
            return $this->_merge_request;
        }
        return new MergeRequestEntity($this, $data);
    }


    private $_metadata = null;

    // Canonical facade: $client->Metadata()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->metadata()
    // resolves here too.
    public function Metadata($data = null)
    {
        require_once __DIR__ . '/entity/metadata_entity.php';
        if ($data === null) {
            if ($this->_metadata === null) {
                $this->_metadata = new MetadataEntity($this, null);
            }
            return $this->_metadata;
        }
        return new MetadataEntity($this, $data);
    }


    private $_migration = null;

    // Canonical facade: $client->Migration()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->migration()
    // resolves here too.
    public function Migration($data = null)
    {
        require_once __DIR__ . '/entity/migration_entity.php';
        if ($data === null) {
            if ($this->_migration === null) {
                $this->_migration = new MigrationEntity($this, null);
            }
            return $this->_migration;
        }
        return new MigrationEntity($this, $data);
    }


    private $_ml_model_registry = null;

    // Canonical facade: $client->MlModelRegistry()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->ml_model_registry()
    // resolves here too.
    public function MlModelRegistry($data = null)
    {
        require_once __DIR__ . '/entity/ml_model_registry_entity.php';
        if ($data === null) {
            if ($this->_ml_model_registry === null) {
                $this->_ml_model_registry = new MlModelRegistryEntity($this, null);
            }
            return $this->_ml_model_registry;
        }
        return new MlModelRegistryEntity($this, $data);
    }


    private $_namespace = null;

    // Canonical facade: $client->Namespace()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->namespace()
    // resolves here too.
    public function Namespace($data = null)
    {
        require_once __DIR__ . '/entity/namespace_entity.php';
        if ($data === null) {
            if ($this->_namespace === null) {
                $this->_namespace = new NamespaceEntity($this, null);
            }
            return $this->_namespace;
        }
        return new NamespaceEntity($this, $data);
    }


    private $_npm = null;

    // Canonical facade: $client->Npm()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->npm()
    // resolves here too.
    public function Npm($data = null)
    {
        require_once __DIR__ . '/entity/npm_entity.php';
        if ($data === null) {
            if ($this->_npm === null) {
                $this->_npm = new NpmEntity($this, null);
            }
            return $this->_npm;
        }
        return new NpmEntity($this, $data);
    }


    private $_npm_package = null;

    // Canonical facade: $client->NpmPackage()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->npm_package()
    // resolves here too.
    public function NpmPackage($data = null)
    {
        require_once __DIR__ . '/entity/npm_package_entity.php';
        if ($data === null) {
            if ($this->_npm_package === null) {
                $this->_npm_package = new NpmPackageEntity($this, null);
            }
            return $this->_npm_package;
        }
        return new NpmPackageEntity($this, $data);
    }


    private $_nuget = null;

    // Canonical facade: $client->Nuget()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->nuget()
    // resolves here too.
    public function Nuget($data = null)
    {
        require_once __DIR__ . '/entity/nuget_entity.php';
        if ($data === null) {
            if ($this->_nuget === null) {
                $this->_nuget = new NugetEntity($this, null);
            }
            return $this->_nuget;
        }
        return new NugetEntity($this, $data);
    }


    private $_nuget_package = null;

    // Canonical facade: $client->NugetPackage()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->nuget_package()
    // resolves here too.
    public function NugetPackage($data = null)
    {
        require_once __DIR__ . '/entity/nuget_package_entity.php';
        if ($data === null) {
            if ($this->_nuget_package === null) {
                $this->_nuget_package = new NugetPackageEntity($this, null);
            }
            return $this->_nuget_package;
        }
        return new NugetPackageEntity($this, $data);
    }


    private $_package_file = null;

    // Canonical facade: $client->PackageFile()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->package_file()
    // resolves here too.
    public function PackageFile($data = null)
    {
        require_once __DIR__ . '/entity/package_file_entity.php';
        if ($data === null) {
            if ($this->_package_file === null) {
                $this->_package_file = new PackageFileEntity($this, null);
            }
            return $this->_package_file;
        }
        return new PackageFileEntity($this, $data);
    }


    private $_page = null;

    // Canonical facade: $client->Page()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->page()
    // resolves here too.
    public function Page($data = null)
    {
        require_once __DIR__ . '/entity/page_entity.php';
        if ($data === null) {
            if ($this->_page === null) {
                $this->_page = new PageEntity($this, null);
            }
            return $this->_page;
        }
        return new PageEntity($this, $data);
    }


    private $_participant = null;

    // Canonical facade: $client->Participant()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->participant()
    // resolves here too.
    public function Participant($data = null)
    {
        require_once __DIR__ . '/entity/participant_entity.php';
        if ($data === null) {
            if ($this->_participant === null) {
                $this->_participant = new ParticipantEntity($this, null);
            }
            return $this->_participant;
        }
        return new ParticipantEntity($this, $data);
    }


    private $_personal_access_token = null;

    // Canonical facade: $client->PersonalAccessToken()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->personal_access_token()
    // resolves here too.
    public function PersonalAccessToken($data = null)
    {
        require_once __DIR__ . '/entity/personal_access_token_entity.php';
        if ($data === null) {
            if ($this->_personal_access_token === null) {
                $this->_personal_access_token = new PersonalAccessTokenEntity($this, null);
            }
            return $this->_personal_access_token;
        }
        return new PersonalAccessTokenEntity($this, $data);
    }


    private $_project = null;

    // Canonical facade: $client->Project()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->project()
    // resolves here too.
    public function Project($data = null)
    {
        require_once __DIR__ . '/entity/project_entity.php';
        if ($data === null) {
            if ($this->_project === null) {
                $this->_project = new ProjectEntityClient($this, null);
            }
            return $this->_project;
        }
        return new ProjectEntityClient($this, $data);
    }


    private $_project_avatar = null;

    // Canonical facade: $client->ProjectAvatar()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->project_avatar()
    // resolves here too.
    public function ProjectAvatar($data = null)
    {
        require_once __DIR__ . '/entity/project_avatar_entity.php';
        if ($data === null) {
            if ($this->_project_avatar === null) {
                $this->_project_avatar = new ProjectAvatarEntity($this, null);
            }
            return $this->_project_avatar;
        }
        return new ProjectAvatarEntity($this, $data);
    }


    private $_project_entity = null;

    // Canonical facade: $client->ProjectEntity()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->project_entity()
    // resolves here too.
    public function ProjectEntity($data = null)
    {
        require_once __DIR__ . '/entity/project_entity_entity.php';
        if ($data === null) {
            if ($this->_project_entity === null) {
                $this->_project_entity = new ProjectEntityEntity($this, null);
            }
            return $this->_project_entity;
        }
        return new ProjectEntityEntity($this, $data);
    }


    private $_project_export = null;

    // Canonical facade: $client->ProjectExport()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->project_export()
    // resolves here too.
    public function ProjectExport($data = null)
    {
        require_once __DIR__ . '/entity/project_export_entity.php';
        if ($data === null) {
            if ($this->_project_export === null) {
                $this->_project_export = new ProjectExportEntity($this, null);
            }
            return $this->_project_export;
        }
        return new ProjectExportEntity($this, $data);
    }


    private $_project_hook = null;

    // Canonical facade: $client->ProjectHook()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->project_hook()
    // resolves here too.
    public function ProjectHook($data = null)
    {
        require_once __DIR__ . '/entity/project_hook_entity.php';
        if ($data === null) {
            if ($this->_project_hook === null) {
                $this->_project_hook = new ProjectHookEntity($this, null);
            }
            return $this->_project_hook;
        }
        return new ProjectHookEntity($this, $data);
    }


    private $_project_import = null;

    // Canonical facade: $client->ProjectImport()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->project_import()
    // resolves here too.
    public function ProjectImport($data = null)
    {
        require_once __DIR__ . '/entity/project_import_entity.php';
        if ($data === null) {
            if ($this->_project_import === null) {
                $this->_project_import = new ProjectImportEntityClient($this, null);
            }
            return $this->_project_import;
        }
        return new ProjectImportEntityClient($this, $data);
    }


    private $_project_import_entity = null;

    // Canonical facade: $client->ProjectImportEntity()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->project_import_entity()
    // resolves here too.
    public function ProjectImportEntity($data = null)
    {
        require_once __DIR__ . '/entity/project_import_entity_entity.php';
        if ($data === null) {
            if ($this->_project_import_entity === null) {
                $this->_project_import_entity = new ProjectImportEntityEntity($this, null);
            }
            return $this->_project_import_entity;
        }
        return new ProjectImportEntityEntity($this, $data);
    }


    private $_project_package = null;

    // Canonical facade: $client->ProjectPackage()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->project_package()
    // resolves here too.
    public function ProjectPackage($data = null)
    {
        require_once __DIR__ . '/entity/project_package_entity.php';
        if ($data === null) {
            if ($this->_project_package === null) {
                $this->_project_package = new ProjectPackageEntity($this, null);
            }
            return $this->_project_package;
        }
        return new ProjectPackageEntity($this, $data);
    }


    private $_project_snippet = null;

    // Canonical facade: $client->ProjectSnippet()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->project_snippet()
    // resolves here too.
    public function ProjectSnippet($data = null)
    {
        require_once __DIR__ . '/entity/project_snippet_entity.php';
        if ($data === null) {
            if ($this->_project_snippet === null) {
                $this->_project_snippet = new ProjectSnippetEntity($this, null);
            }
            return $this->_project_snippet;
        }
        return new ProjectSnippetEntity($this, $data);
    }


    private $_projects_job_token_scope = null;

    // Canonical facade: $client->ProjectsJobTokenScope()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->projects_job_token_scope()
    // resolves here too.
    public function ProjectsJobTokenScope($data = null)
    {
        require_once __DIR__ . '/entity/projects_job_token_scope_entity.php';
        if ($data === null) {
            if ($this->_projects_job_token_scope === null) {
                $this->_projects_job_token_scope = new ProjectsJobTokenScopeEntity($this, null);
            }
            return $this->_projects_job_token_scope;
        }
        return new ProjectsJobTokenScopeEntity($this, $data);
    }


    private $_protected_tag = null;

    // Canonical facade: $client->ProtectedTag()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->protected_tag()
    // resolves here too.
    public function ProtectedTag($data = null)
    {
        require_once __DIR__ . '/entity/protected_tag_entity.php';
        if ($data === null) {
            if ($this->_protected_tag === null) {
                $this->_protected_tag = new ProtectedTagEntity($this, null);
            }
            return $this->_protected_tag;
        }
        return new ProtectedTagEntity($this, $data);
    }


    private $_pypi = null;

    // Canonical facade: $client->Pypi()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->pypi()
    // resolves here too.
    public function Pypi($data = null)
    {
        require_once __DIR__ . '/entity/pypi_entity.php';
        if ($data === null) {
            if ($this->_pypi === null) {
                $this->_pypi = new PypiEntity($this, null);
            }
            return $this->_pypi;
        }
        return new PypiEntity($this, $data);
    }


    private $_pypi_package = null;

    // Canonical facade: $client->PypiPackage()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->pypi_package()
    // resolves here too.
    public function PypiPackage($data = null)
    {
        require_once __DIR__ . '/entity/pypi_package_entity.php';
        if ($data === null) {
            if ($this->_pypi_package === null) {
                $this->_pypi_package = new PypiPackageEntity($this, null);
            }
            return $this->_pypi_package;
        }
        return new PypiPackageEntity($this, $data);
    }


    private $_release = null;

    // Canonical facade: $client->Release()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->release()
    // resolves here too.
    public function Release($data = null)
    {
        require_once __DIR__ . '/entity/release_entity.php';
        if ($data === null) {
            if ($this->_release === null) {
                $this->_release = new ReleaseEntity($this, null);
            }
            return $this->_release;
        }
        return new ReleaseEntity($this, $data);
    }


    private $_release_link = null;

    // Canonical facade: $client->ReleaseLink()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->release_link()
    // resolves here too.
    public function ReleaseLink($data = null)
    {
        require_once __DIR__ . '/entity/release_link_entity.php';
        if ($data === null) {
            if ($this->_release_link === null) {
                $this->_release_link = new ReleaseLinkEntity($this, null);
            }
            return $this->_release_link;
        }
        return new ReleaseLinkEntity($this, $data);
    }


    private $_remote_mirror = null;

    // Canonical facade: $client->RemoteMirror()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->remote_mirror()
    // resolves here too.
    public function RemoteMirror($data = null)
    {
        require_once __DIR__ . '/entity/remote_mirror_entity.php';
        if ($data === null) {
            if ($this->_remote_mirror === null) {
                $this->_remote_mirror = new RemoteMirrorEntity($this, null);
            }
            return $this->_remote_mirror;
        }
        return new RemoteMirrorEntity($this, $data);
    }


    private $_rpm = null;

    // Canonical facade: $client->Rpm()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->rpm()
    // resolves here too.
    public function Rpm($data = null)
    {
        require_once __DIR__ . '/entity/rpm_entity.php';
        if ($data === null) {
            if ($this->_rpm === null) {
                $this->_rpm = new RpmEntity($this, null);
            }
            return $this->_rpm;
        }
        return new RpmEntity($this, $data);
    }


    private $_rpm_package = null;

    // Canonical facade: $client->RpmPackage()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->rpm_package()
    // resolves here too.
    public function RpmPackage($data = null)
    {
        require_once __DIR__ . '/entity/rpm_package_entity.php';
        if ($data === null) {
            if ($this->_rpm_package === null) {
                $this->_rpm_package = new RpmPackageEntity($this, null);
            }
            return $this->_rpm_package;
        }
        return new RpmPackageEntity($this, $data);
    }


    private $_rubygem = null;

    // Canonical facade: $client->Rubygem()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->rubygem()
    // resolves here too.
    public function Rubygem($data = null)
    {
        require_once __DIR__ . '/entity/rubygem_entity.php';
        if ($data === null) {
            if ($this->_rubygem === null) {
                $this->_rubygem = new RubygemEntity($this, null);
            }
            return $this->_rubygem;
        }
        return new RubygemEntity($this, $data);
    }


    private $_rubygem_package = null;

    // Canonical facade: $client->RubygemPackage()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->rubygem_package()
    // resolves here too.
    public function RubygemPackage($data = null)
    {
        require_once __DIR__ . '/entity/rubygem_package_entity.php';
        if ($data === null) {
            if ($this->_rubygem_package === null) {
                $this->_rubygem_package = new RubygemPackageEntity($this, null);
            }
            return $this->_rubygem_package;
        }
        return new RubygemPackageEntity($this, $data);
    }


    private $_runner = null;

    // Canonical facade: $client->Runner()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->runner()
    // resolves here too.
    public function Runner($data = null)
    {
        require_once __DIR__ . '/entity/runner_entity.php';
        if ($data === null) {
            if ($this->_runner === null) {
                $this->_runner = new RunnerEntity($this, null);
            }
            return $this->_runner;
        }
        return new RunnerEntity($this, $data);
    }


    private $_search = null;

    // Canonical facade: $client->Search()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->search()
    // resolves here too.
    public function Search($data = null)
    {
        require_once __DIR__ . '/entity/search_entity.php';
        if ($data === null) {
            if ($this->_search === null) {
                $this->_search = new SearchEntity($this, null);
            }
            return $this->_search;
        }
        return new SearchEntity($this, $data);
    }


    private $_secure_file = null;

    // Canonical facade: $client->SecureFile()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->secure_file()
    // resolves here too.
    public function SecureFile($data = null)
    {
        require_once __DIR__ . '/entity/secure_file_entity.php';
        if ($data === null) {
            if ($this->_secure_file === null) {
                $this->_secure_file = new SecureFileEntity($this, null);
            }
            return $this->_secure_file;
        }
        return new SecureFileEntity($this, $data);
    }


    private $_slack = null;

    // Canonical facade: $client->Slack()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->slack()
    // resolves here too.
    public function Slack($data = null)
    {
        require_once __DIR__ . '/entity/slack_entity.php';
        if ($data === null) {
            if ($this->_slack === null) {
                $this->_slack = new SlackEntity($this, null);
            }
            return $this->_slack;
        }
        return new SlackEntity($this, $data);
    }


    private $_snippet = null;

    // Canonical facade: $client->Snippet()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->snippet()
    // resolves here too.
    public function Snippet($data = null)
    {
        require_once __DIR__ . '/entity/snippet_entity.php';
        if ($data === null) {
            if ($this->_snippet === null) {
                $this->_snippet = new SnippetEntity($this, null);
            }
            return $this->_snippet;
        }
        return new SnippetEntity($this, $data);
    }


    private $_starrer = null;

    // Canonical facade: $client->Starrer()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->starrer()
    // resolves here too.
    public function Starrer($data = null)
    {
        require_once __DIR__ . '/entity/starrer_entity.php';
        if ($data === null) {
            if ($this->_starrer === null) {
                $this->_starrer = new StarrerEntity($this, null);
            }
            return $this->_starrer;
        }
        return new StarrerEntity($this, $data);
    }


    private $_system_hook = null;

    // Canonical facade: $client->SystemHook()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->system_hook()
    // resolves here too.
    public function SystemHook($data = null)
    {
        require_once __DIR__ . '/entity/system_hook_entity.php';
        if ($data === null) {
            if ($this->_system_hook === null) {
                $this->_system_hook = new SystemHookEntity($this, null);
            }
            return $this->_system_hook;
        }
        return new SystemHookEntity($this, $data);
    }


    private $_tag = null;

    // Canonical facade: $client->Tag()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tag()
    // resolves here too.
    public function Tag($data = null)
    {
        require_once __DIR__ . '/entity/tag_entity.php';
        if ($data === null) {
            if ($this->_tag === null) {
                $this->_tag = new TagEntity($this, null);
            }
            return $this->_tag;
        }
        return new TagEntity($this, $data);
    }


    private $_terraform_registry = null;

    // Canonical facade: $client->TerraformRegistry()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->terraform_registry()
    // resolves here too.
    public function TerraformRegistry($data = null)
    {
        require_once __DIR__ . '/entity/terraform_registry_entity.php';
        if ($data === null) {
            if ($this->_terraform_registry === null) {
                $this->_terraform_registry = new TerraformRegistryEntity($this, null);
            }
            return $this->_terraform_registry;
        }
        return new TerraformRegistryEntity($this, $data);
    }


    private $_terraform_state = null;

    // Canonical facade: $client->TerraformState()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->terraform_state()
    // resolves here too.
    public function TerraformState($data = null)
    {
        require_once __DIR__ . '/entity/terraform_state_entity.php';
        if ($data === null) {
            if ($this->_terraform_state === null) {
                $this->_terraform_state = new TerraformStateEntity($this, null);
            }
            return $this->_terraform_state;
        }
        return new TerraformStateEntity($this, $data);
    }


    private $_test_report = null;

    // Canonical facade: $client->TestReport()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->test_report()
    // resolves here too.
    public function TestReport($data = null)
    {
        require_once __DIR__ . '/entity/test_report_entity.php';
        if ($data === null) {
            if ($this->_test_report === null) {
                $this->_test_report = new TestReportEntity($this, null);
            }
            return $this->_test_report;
        }
        return new TestReportEntity($this, $data);
    }


    private $_test_report_summary = null;

    // Canonical facade: $client->TestReportSummary()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->test_report_summary()
    // resolves here too.
    public function TestReportSummary($data = null)
    {
        require_once __DIR__ . '/entity/test_report_summary_entity.php';
        if ($data === null) {
            if ($this->_test_report_summary === null) {
                $this->_test_report_summary = new TestReportSummaryEntity($this, null);
            }
            return $this->_test_report_summary;
        }
        return new TestReportSummaryEntity($this, $data);
    }


    private $_topic = null;

    // Canonical facade: $client->Topic()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->topic()
    // resolves here too.
    public function Topic($data = null)
    {
        require_once __DIR__ . '/entity/topic_entity.php';
        if ($data === null) {
            if ($this->_topic === null) {
                $this->_topic = new TopicEntity($this, null);
            }
            return $this->_topic;
        }
        return new TopicEntity($this, $data);
    }


    private $_unleash_api = null;

    // Canonical facade: $client->UnleashApi()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->unleash_api()
    // resolves here too.
    public function UnleashApi($data = null)
    {
        require_once __DIR__ . '/entity/unleash_api_entity.php';
        if ($data === null) {
            if ($this->_unleash_api === null) {
                $this->_unleash_api = new UnleashApiEntity($this, null);
            }
            return $this->_unleash_api;
        }
        return new UnleashApiEntity($this, $data);
    }


    private $_usage_data = null;

    // Canonical facade: $client->UsageData()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->usage_data()
    // resolves here too.
    public function UsageData($data = null)
    {
        require_once __DIR__ . '/entity/usage_data_entity.php';
        if ($data === null) {
            if ($this->_usage_data === null) {
                $this->_usage_data = new UsageDataEntity($this, null);
            }
            return $this->_usage_data;
        }
        return new UsageDataEntity($this, $data);
    }


    private $_user = null;

    // Canonical facade: $client->User()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->user()
    // resolves here too.
    public function User($data = null)
    {
        require_once __DIR__ . '/entity/user_entity.php';
        if ($data === null) {
            if ($this->_user === null) {
                $this->_user = new UserEntity($this, null);
            }
            return $this->_user;
        }
        return new UserEntity($this, $data);
    }


    private $_web_commit = null;

    // Canonical facade: $client->WebCommit()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->web_commit()
    // resolves here too.
    public function WebCommit($data = null)
    {
        require_once __DIR__ . '/entity/web_commit_entity.php';
        if ($data === null) {
            if ($this->_web_commit === null) {
                $this->_web_commit = new WebCommitEntity($this, null);
            }
            return $this->_web_commit;
        }
        return new WebCommitEntity($this, $data);
    }


    private $_wiki = null;

    // Canonical facade: $client->Wiki()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->wiki()
    // resolves here too.
    public function Wiki($data = null)
    {
        require_once __DIR__ . '/entity/wiki_entity.php';
        if ($data === null) {
            if ($this->_wiki === null) {
                $this->_wiki = new WikiEntity($this, null);
            }
            return $this->_wiki;
        }
        return new WikiEntity($this, $data);
    }



    public static function test(?array $testopts = null, ?array $sdkopts = null): self
    {
        $sdkopts = $sdkopts ?? [];
        $sdkopts = Struct::clone($sdkopts);
        $sdkopts = is_array($sdkopts) ? $sdkopts : [];

        $testopts = $testopts ?? [];
        $testopts = Struct::clone($testopts);
        $testopts = is_array($testopts) ? $testopts : [];
        $testopts["active"] = true;

        if (!isset($sdkopts["feature"])) {
            $sdkopts["feature"] = [];
        }
        $sdkopts["feature"]["test"] = $testopts;

        $sdk = new GitlabSDK($sdkopts);
        $sdk->mode = "test";
        return $sdk;
    }
}
