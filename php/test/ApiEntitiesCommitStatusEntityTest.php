<?php
declare(strict_types=1);

// ApiEntitiesCommitStatus entity test

require_once __DIR__ . '/../gitlab_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class ApiEntitiesCommitStatusEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = GitlabSDK::test(null, null);
        $ent = $testsdk->ApiEntitiesCommitStatus(null);
        $this->assertNotNull($ent);
    }

    // Feature #4: the entity stream(action, ...) method runs the op pipeline
    // and yields result items. With the streaming feature active it yields the
    // feature's incremental output; otherwise it falls back to the materialised
    // list so stream always yields.
    public function test_stream(): void
    {
        $seed = [
            "entity" => [
                "api_entities_commit_status" => [
                    "s1" => ["id" => "s1"],
                    "s2" => ["id" => "s2"],
                    "s3" => ["id" => "s3"],
                ],
            ],
        ];

        // Fallback: streaming inactive -> yields the materialised list items.
        $base = GitlabSDK::test($seed, null);
        $seen = iterator_to_array($base->ApiEntitiesCommitStatus(null)->stream("list", null, null), false);
        $this->assertCount(3, $seen);

        // Inbound: streaming active -> yields each item from the feature.
        $cfg = GitlabConfig::make_config();
        if (isset($cfg["feature"]) && is_array($cfg["feature"]) && isset($cfg["feature"]["streaming"])) {
            $sdk = GitlabSDK::test($seed, ["feature" => ["streaming" => ["active" => true]]]);
            $got = [];
            foreach ($sdk->ApiEntitiesCommitStatus(null)->stream("list", null, null) as $item) {
                if (is_array($item) && array_is_list($item)) {
                    foreach ($item as $sub) {
                        $got[] = $sub;
                    }
                } else {
                    $got[] = $item;
                }
            }
            $this->assertCount(3, $got);
        }
    }

    public function test_basic_flow(): void
    {
        $setup = api_entities_commit_status_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create", "list"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "api_entities_commit_status." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set GITLAB_TEST_API_ENTITIES_COMMIT_STATUS_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // CREATE
        $api_entities_commit_status_ref01_ent = $client->ApiEntitiesCommitStatus(null);
        $api_entities_commit_status_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.api_entities_commit_status"), "api_entities_commit_status_ref01"));
        $api_entities_commit_status_ref01_data["project_id"] = $setup["idmap"]["project01"];
        $api_entities_commit_status_ref01_data["sha"] = $setup["idmap"]["sha01"];

        $api_entities_commit_status_ref01_data_result = $api_entities_commit_status_ref01_ent->create($api_entities_commit_status_ref01_data, null);
        $api_entities_commit_status_ref01_data = Helpers::to_map($api_entities_commit_status_ref01_data_result);
        $this->assertNotNull($api_entities_commit_status_ref01_data);
        $this->assertNotNull($api_entities_commit_status_ref01_data["id"]);

        // LIST
        $api_entities_commit_status_ref01_match = [
            "project_id" => $setup["idmap"]["project01"],
            "sha" => $setup["idmap"]["sha01"],
        ];

        $api_entities_commit_status_ref01_list_result = $api_entities_commit_status_ref01_ent->list($api_entities_commit_status_ref01_match, null);
        $this->assertIsArray($api_entities_commit_status_ref01_list_result);

        $found_item = sdk_select(
            Runner::entity_list_to_data($api_entities_commit_status_ref01_list_result),
            ["id" => $api_entities_commit_status_ref01_data["id"]]);
        $this->assertNotEmpty($found_item);

    }
}

function api_entities_commit_status_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/api_entities_commit_status/ApiEntitiesCommitStatusTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = GitlabSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["api_entities_commit_status01", "api_entities_commit_status02", "api_entities_commit_status03", "project01", "project02", "project03", "commit01", "commit02", "commit03", "sha01"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("GITLAB_TEST_API_ENTITIES_COMMIT_STATUS_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "GITLAB_TEST_API_ENTITIES_COMMIT_STATUS_ENTID" => $idmap,
        "GITLAB_TEST_LIVE" => "FALSE",
        "GITLAB_TEST_EXPLAIN" => "FALSE",
        "GITLAB_APIKEY" => "NONE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["GITLAB_TEST_API_ENTITIES_COMMIT_STATUS_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }

    if ($env["GITLAB_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            [
                "apikey" => $env["GITLAB_APIKEY"],
            ],
            $extra ?? [],
        ]);
        $client = new GitlabSDK(Helpers::to_map($merged_opts));
    }

    $live = $env["GITLAB_TEST_LIVE"] === "TRUE";
    return [
        "client" => $client,
        "data" => $entity_data,
        "idmap" => $idmap_resolved,
        "env" => $env,
        "explain" => $env["GITLAB_TEST_EXPLAIN"] === "TRUE",
        "live" => $live,
        "synthetic_only" => $live && !$idmap_overridden,
        "now" => (int)(microtime(true) * 1000),
    ];
}
