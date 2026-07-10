<?php
declare(strict_types=1);

// Gitlab SDK — documentation example COMPLETENESS GATE.
//
// Guarantees every fenced php code example across ALL THREE package docs is
// unit-tested. Reads the root ../../README.md, the PHP ../README.md, and
// ../REFERENCE.md, extracts every fenced php block (tagged by source doc +
// index) and enforces:
//
//   1. SYNTAX — 'php -l' on every block (a leading <?php is prepended when the
//      snippet omits one). Every documented php example must parse.
//   2. RUN — every RUNNABLE block (one that constructs the SDK, drives
//      \$client->, or performs an entity op load/list/create/update/remove) is
//      EXECUTED offline in seeded test mode (GitlabSDK::test)
//      against the real SDK. The captured output is scanned for a real
//      PHP-level error (undefined method, wrong-arg-count, TypeError, ...)
//      REGARDLESS of exit code, so a bug a documented try/catch swallows and
//      echoes cannot slip through. Expected not-found domain errors are
//      tolerated.
//   3. COMPLETENESS — every block is partitioned into exactly one of
//      {executed, syntaxchecked-nonrunnable, illustration}; the counts must sum
//      to the total. A runnable-looking block that was not executed belongs to
//      no bucket and FAILS the gate.
//
// PHP is dynamically typed, so syntax + actually running every example is the
// strongest check available without a live server.

require_once __DIR__ . '/../gitlab_sdk.php';

use PHPUnit\Framework\TestCase;

class ReadmeExamplesTest extends TestCase
{
    private const SDK_CLASS = 'GitlabSDK';

    // SDK file basename (no extension) — used to strip the doc's own require of
    // the SDK file from a runnable block (we require it by absolute path).
    private const SDK_BASE = 'gitlab_sdk';

    // Entity accessor (\$client->Name()) => fixture storage key (lowercase name).
    private const ENTITIES = [
        "AccessRequest" => "access_request",
        "AlertManagement" => "alert_management",
        "ApiEntitiesAccessRequester" => "api_entities_access_requester",
        "ApiEntitiesAppearance" => "api_entities_appearance",
        "ApiEntitiesApplication" => "api_entities_application",
        "ApiEntitiesApplicationStatistic" => "api_entities_application_statistic",
        "ApiEntitiesApplicationWithSecret" => "api_entities_application_with_secret",
        "ApiEntitiesAvatar" => "api_entities_avatar",
        "ApiEntitiesAwardEmoji" => "api_entities_award_emoji",
        "ApiEntitiesBadge" => "api_entities_badge",
        "ApiEntitiesBasicBadgeDetail" => "api_entities_basic_badge_detail",
        "ApiEntitiesBasicGroupDetail" => "api_entities_basic_group_detail",
        "ApiEntitiesBasicProjectDetail" => "api_entities_basic_project_detail",
        "ApiEntitiesBasicRef" => "api_entities_basic_ref",
        "ApiEntitiesBasicSuccess" => "api_entities_basic_success",
        "ApiEntitiesBatchedBackgroundMigration" => "api_entities_batched_background_migration",
        "ApiEntitiesBranch" => "api_entities_branch",
        "ApiEntitiesBulkImport" => "api_entities_bulk_import",
        "ApiEntitiesBulkImportsEntityFailure" => "api_entities_bulk_imports_entity_failure",
        "ApiEntitiesBulkImportsExportStatus" => "api_entities_bulk_imports_export_status",
        "ApiEntitiesChangelog" => "api_entities_changelog",
        "ApiEntitiesCiBridge" => "api_entities_ci_bridge",
        "ApiEntitiesCiCatalogResourcesVersion" => "api_entities_ci_catalog_resources_version",
        "ApiEntitiesCiJob" => "api_entities_ci_job",
        "ApiEntitiesCiJobBasic" => "api_entities_ci_job_basic",
        "ApiEntitiesCiJobBasicWithProject" => "api_entities_ci_job_basic_with_project",
        "ApiEntitiesCiLintResult" => "api_entities_ci_lint_result",
        "ApiEntitiesCiPipeline" => "api_entities_ci_pipeline",
        "ApiEntitiesCiPipelineBasic" => "api_entities_ci_pipeline_basic",
        "ApiEntitiesCiPipelineSchedule" => "api_entities_ci_pipeline_schedule",
        "ApiEntitiesCiPipelineScheduleDetail" => "api_entities_ci_pipeline_schedule_detail",
        "ApiEntitiesCiResetTokenResult" => "api_entities_ci_reset_token_result",
        "ApiEntitiesCiResourceGroup" => "api_entities_ci_resource_group",
        "ApiEntitiesCiRunner" => "api_entities_ci_runner",
        "ApiEntitiesCiRunnerDetail" => "api_entities_ci_runner_detail",
        "ApiEntitiesCiRunnerManager" => "api_entities_ci_runner_manager",
        "ApiEntitiesCiRunnerRegistrationDetail" => "api_entities_ci_runner_registration_detail",
        "ApiEntitiesCiSecureFile" => "api_entities_ci_secure_file",
        "ApiEntitiesCiVariable" => "api_entities_ci_variable",
        "ApiEntitiesCluster" => "api_entities_cluster",
        "ApiEntitiesClusterGroup" => "api_entities_cluster_group",
        "ApiEntitiesClusterProject" => "api_entities_cluster_project",
        "ApiEntitiesClustersAgent" => "api_entities_clusters_agent",
        "ApiEntitiesClustersAgentToken" => "api_entities_clusters_agent_token",
        "ApiEntitiesClustersAgentTokenBasic" => "api_entities_clusters_agent_token_basic",
        "ApiEntitiesClustersAgentTokenWithToken" => "api_entities_clusters_agent_token_with_token",
        "ApiEntitiesCommit" => "api_entities_commit",
        "ApiEntitiesCommitDetail" => "api_entities_commit_detail",
        "ApiEntitiesCommitNote" => "api_entities_commit_note",
        "ApiEntitiesCommitSequence" => "api_entities_commit_sequence",
        "ApiEntitiesCommitSignature" => "api_entities_commit_signature",
        "ApiEntitiesCommitStatus" => "api_entities_commit_status",
        "ApiEntitiesCompare" => "api_entities_compare",
        "ApiEntitiesContainerRegistryRepository" => "api_entities_container_registry_repository",
        "ApiEntitiesContainerRegistryTag" => "api_entities_container_registry_tag",
        "ApiEntitiesContainerRegistryTagDetail" => "api_entities_container_registry_tag_detail",
        "ApiEntitiesContributor" => "api_entities_contributor",
        "ApiEntitiesDeployKey" => "api_entities_deploy_key",
        "ApiEntitiesDeployKeysProject" => "api_entities_deploy_keys_project",
        "ApiEntitiesDeployToken" => "api_entities_deploy_token",
        "ApiEntitiesDeployTokenWithToken" => "api_entities_deploy_token_with_token",
        "ApiEntitiesDeployment" => "api_entities_deployment",
        "ApiEntitiesDeploymentExtended" => "api_entities_deployment_extended",
        "ApiEntitiesDeploymentsApproval" => "api_entities_deployments_approval",
        "ApiEntitiesDictionaryTable" => "api_entities_dictionary_table",
        "ApiEntitiesDiff" => "api_entities_diff",
        "ApiEntitiesDiscoveredCluster" => "api_entities_discovered_cluster",
        "ApiEntitiesDraftNote" => "api_entities_draft_note",
        "ApiEntitiesEnvironment" => "api_entities_environment",
        "ApiEntitiesErrorTrackingClientKey" => "api_entities_error_tracking_client_key",
        "ApiEntitiesErrorTrackingProjectSetting" => "api_entities_error_tracking_project_setting",
        "ApiEntitiesEvent" => "api_entities_event",
        "ApiEntitiesFeature" => "api_entities_feature",
        "ApiEntitiesFeatureDefinition" => "api_entities_feature_definition",
        "ApiEntitiesFeatureFlag" => "api_entities_feature_flag",
        "ApiEntitiesFeatureFlagUserList" => "api_entities_feature_flag_user_list",
        "ApiEntitiesFreezePeriod" => "api_entities_freeze_period",
        "ApiEntitiesGitlabSubscription" => "api_entities_gitlab_subscription",
        "ApiEntitiesGoModuleVersion" => "api_entities_go_module_version",
        "ApiEntitiesGroup" => "api_entities_group",
        "ApiEntitiesGroupDetail" => "api_entities_group_detail",
        "ApiEntitiesHook" => "api_entities_hook",
        "ApiEntitiesIntegration" => "api_entities_integration",
        "ApiEntitiesIntegrationBasic" => "api_entities_integration_basic",
        "ApiEntitiesInvitation" => "api_entities_invitation",
        "ApiEntitiesIssuableTimeStat" => "api_entities_issuable_time_stat",
        "ApiEntitiesIssue" => "api_entities_issue",
        "ApiEntitiesIssueLink" => "api_entities_issue_link",
        "ApiEntitiesLicense" => "api_entities_license",
        "ApiEntitiesMarkdown" => "api_entities_markdown",
        "ApiEntitiesMarkdownUploadAdmin" => "api_entities_markdown_upload_admin",
        "ApiEntitiesMember" => "api_entities_member",
        "ApiEntitiesMerge" => "api_entities_merge",
        "ApiEntitiesMergeRequestApproval" => "api_entities_merge_request_approval",
        "ApiEntitiesMergeRequestBasic" => "api_entities_merge_request_basic",
        "ApiEntitiesMergeRequestChange" => "api_entities_merge_request_change",
        "ApiEntitiesMergeRequestDiff" => "api_entities_merge_request_diff",
        "ApiEntitiesMergeRequestDiffFull" => "api_entities_merge_request_diff_full",
        "ApiEntitiesMergeRequestReviewer" => "api_entities_merge_request_reviewer",
        "ApiEntitiesMetricImage" => "api_entities_metric_image",
        "ApiEntitiesMrNote" => "api_entities_mr_note",
        "ApiEntitiesNamespace" => "api_entities_namespace",
        "ApiEntitiesNamespaceExistence" => "api_entities_namespace_existence",
        "ApiEntitiesNamespacesStorageLimitExclusion" => "api_entities_namespaces_storage_limit_exclusion",
        "ApiEntitiesNpmPackage" => "api_entities_npm_package",
        "ApiEntitiesNpmPackageTag" => "api_entities_npm_package_tag",
        "ApiEntitiesNugetPackagesVersion" => "api_entities_nuget_packages_version",
        "ApiEntitiesNugetSearchResult" => "api_entities_nuget_search_result",
        "ApiEntitiesNugetServiceIndex" => "api_entities_nuget_service_index",
        "ApiEntitiesOrganizationsOrganization" => "api_entities_organizations_organization",
        "ApiEntitiesPackage" => "api_entities_package",
        "ApiEntitiesPackageFile" => "api_entities_package_file",
        "ApiEntitiesPackagePipeline" => "api_entities_package_pipeline",
        "ApiEntitiesPackagesConanFilesList" => "api_entities_packages_conan_files_list",
        "ApiEntitiesPackagesConanPackageManifest" => "api_entities_packages_conan_package_manifest",
        "ApiEntitiesPackagesConanPackageRevision" => "api_entities_packages_conan_package_revision",
        "ApiEntitiesPackagesConanPackageSnapshot" => "api_entities_packages_conan_package_snapshot",
        "ApiEntitiesPackagesConanRecipeManifest" => "api_entities_packages_conan_recipe_manifest",
        "ApiEntitiesPackagesConanRecipeRevision" => "api_entities_packages_conan_recipe_revision",
        "ApiEntitiesPackagesConanRecipeSnapshot" => "api_entities_packages_conan_recipe_snapshot",
        "ApiEntitiesPackagesConanRevision" => "api_entities_packages_conan_revision",
        "ApiEntitiesPackagesConanUploadUrl" => "api_entities_packages_conan_upload_url",
        "ApiEntitiesPackagesDebianDistribution" => "api_entities_packages_debian_distribution",
        "ApiEntitiesPagesDomain" => "api_entities_pages_domain",
        "ApiEntitiesPagesDomainBasic" => "api_entities_pages_domain_basic",
        "ApiEntitiesPersonalAccessToken" => "api_entities_personal_access_token",
        "ApiEntitiesPersonalAccessTokenWithLastUsedIp" => "api_entities_personal_access_token_with_last_used_ip",
        "ApiEntitiesPersonalAccessTokenWithToken" => "api_entities_personal_access_token_with_token",
        "ApiEntitiesPersonalSnippet" => "api_entities_personal_snippet",
        "ApiEntitiesPlanLimit" => "api_entities_plan_limit",
        "ApiEntitiesProject" => "api_entities_project",
        "ApiEntitiesProjectDailyStatistic" => "api_entities_project_daily_statistic",
        "ApiEntitiesProjectExportStatus" => "api_entities_project_export_status",
        "ApiEntitiesProjectGroupLink" => "api_entities_project_group_link",
        "ApiEntitiesProjectHook" => "api_entities_project_hook",
        "ApiEntitiesProjectImportStatus" => "api_entities_project_import_status",
        "ApiEntitiesProjectJobTokenScope" => "api_entities_project_job_token_scope",
        "ApiEntitiesProjectRepositoryStorage" => "api_entities_project_repository_storage",
        "ApiEntitiesProjectSnippet" => "api_entities_project_snippet",
        "ApiEntitiesProjectUpload" => "api_entities_project_upload",
        "ApiEntitiesProjectWithAccess" => "api_entities_project_with_access",
        "ApiEntitiesProjectsContainerRegistryProtectionRule" => "api_entities_projects_container_registry_protection_rule",
        "ApiEntitiesProjectsPackagesProtectionRule" => "api_entities_projects_packages_protection_rule",
        "ApiEntitiesProjectsTopic" => "api_entities_projects_topic",
        "ApiEntitiesProtectedBranch" => "api_entities_protected_branch",
        "ApiEntitiesProtectedTag" => "api_entities_protected_tag",
        "ApiEntitiesPublicGroupDetail" => "api_entities_public_group_detail",
        "ApiEntitiesRelatedIssue" => "api_entities_related_issue",
        "ApiEntitiesRelationImportTracker" => "api_entities_relation_import_tracker",
        "ApiEntitiesRelease" => "api_entities_release",
        "ApiEntitiesReleasesLink" => "api_entities_releases_link",
        "ApiEntitiesRemoteMirror" => "api_entities_remote_mirror",
        "ApiEntitiesRepositoryHealth" => "api_entities_repository_health",
        "ApiEntitiesResourceAccessTokenWithToken" => "api_entities_resource_access_token_with_token",
        "ApiEntitiesResourceMilestoneEvent" => "api_entities_resource_milestone_event",
        "ApiEntitiesSnippet" => "api_entities_snippet",
        "ApiEntitiesSshKeyWithUser" => "api_entities_ssh_key_with_user",
        "ApiEntitiesSuggestion" => "api_entities_suggestion",
        "ApiEntitiesSystemBroadcastMessage" => "api_entities_system_broadcast_message",
        "ApiEntitiesTag" => "api_entities_tag",
        "ApiEntitiesTagSignature" => "api_entities_tag_signature",
        "ApiEntitiesTemplatesList" => "api_entities_templates_list",
        "ApiEntitiesTerraformModuleVersion" => "api_entities_terraform_module_version",
        "ApiEntitiesTreeObject" => "api_entities_tree_object",
        "ApiEntitiesTrigger" => "api_entities_trigger",
        "ApiEntitiesUserAgentDetail" => "api_entities_user_agent_detail",
        "ApiEntitiesUserCount" => "api_entities_user_count",
        "ApiEntitiesUserPublic" => "api_entities_user_public",
        "ApiEntitiesUserWithAdmin" => "api_entities_user_with_admin",
        "ApiEntitiesWikiAttachment" => "api_entities_wiki_attachment",
        "ApiEntitiesWikiPage" => "api_entities_wiki_page",
        "ApiEntitiesWikiPageBasic" => "api_entities_wiki_page_basic",
        "Application" => "application",
        "AwardEmoji" => "award_emoji",
        "Badge" => "badge",
        "Branch" => "branch",
        "CargoPackage" => "cargo_package",
        "CiVariable" => "ci_variable",
        "Cluster" => "cluster",
        "ClusterAgent" => "cluster_agent",
        "Composer" => "composer",
        "ComposerPackage" => "composer_package",
        "Conan" => "conan",
        "ConanPackage" => "conan_package",
        "ContainerRegistry" => "container_registry",
        "ContainerRegistryEvent" => "container_registry_event",
        "CustomAttribute" => "custom_attribute",
        "Debian" => "debian",
        "DebianDistribution" => "debian_distribution",
        "DebianPackage" => "debian_package",
        "DependencyProxy" => "dependency_proxy",
        "DeployKey" => "deploy_key",
        "DeployToken" => "deploy_token",
        "Deployment" => "deployment",
        "EeApiEntitiesApprovalState" => "ee_api_entities_approval_state",
        "EeApiEntitiesAuditEvent" => "ee_api_entities_audit_event",
        "EeApiEntitiesBillableMembership" => "ee_api_entities_billable_membership",
        "EeApiEntitiesGeoNodeStatus" => "ee_api_entities_geo_node_status",
        "EeApiEntitiesGeoPipelineRef" => "ee_api_entities_geo_pipeline_ref",
        "EeApiEntitiesIssuableMetricImage" => "ee_api_entities_issuable_metric_image",
        "EeApiEntitiesMergeRequestApprovalState" => "ee_api_entities_merge_request_approval_state",
        "EeApiEntitiesSshCertificate" => "ee_api_entities_ssh_certificate",
        "Environment" => "environment",
        "ErrorTrackingClientKey" => "error_tracking_client_key",
        "Feature" => "feature",
        "FeatureFlag" => "feature_flag",
        "FeatureFlagsUserList" => "feature_flags_user_list",
        "FreezePeriod" => "freeze_period",
        "GenericPackage" => "generic_package",
        "Geo" => "geo",
        "GoProxy" => "go_proxy",
        "Group" => "group",
        "GroupAvatar" => "group_avatar",
        "GroupExport" => "group_export",
        "GroupImport" => "group_import",
        "HelmPackage" => "helm_package",
        "Hook" => "hook",
        "Import" => "import",
        "Integration" => "integration",
        "Invitation" => "invitation",
        "IssueLink" => "issue_link",
        "IssuesStatistic" => "issues_statistic",
        "Job" => "job",
        "MavenPackage" => "maven_package",
        "Member" => "member",
        "MergeRequest" => "merge_request",
        "Metadata" => "metadata",
        "Migration" => "migration",
        "MlModelRegistry" => "ml_model_registry",
        "Namespace" => "namespace",
        "Npm" => "npm",
        "NpmPackage" => "npm_package",
        "Nuget" => "nuget",
        "NugetPackage" => "nuget_package",
        "PackageFile" => "package_file",
        "Page" => "page",
        "Participant" => "participant",
        "PersonalAccessToken" => "personal_access_token",
        "Project" => "project",
        "ProjectAvatar" => "project_avatar",
        "ProjectEntity" => "project_entity",
        "ProjectExport" => "project_export",
        "ProjectHook" => "project_hook",
        "ProjectImport" => "project_import",
        "ProjectImportEntity" => "project_import_entity",
        "ProjectPackage" => "project_package",
        "ProjectSnippet" => "project_snippet",
        "ProjectsJobTokenScope" => "projects_job_token_scope",
        "ProtectedTag" => "protected_tag",
        "Pypi" => "pypi",
        "PypiPackage" => "pypi_package",
        "Release" => "release",
        "ReleaseLink" => "release_link",
        "RemoteMirror" => "remote_mirror",
        "Rpm" => "rpm",
        "RpmPackage" => "rpm_package",
        "Rubygem" => "rubygem",
        "RubygemPackage" => "rubygem_package",
        "Runner" => "runner",
        "Search" => "search",
        "SecureFile" => "secure_file",
        "Slack" => "slack",
        "Snippet" => "snippet",
        "Starrer" => "starrer",
        "SystemHook" => "system_hook",
        "Tag" => "tag",
        "TerraformRegistry" => "terraform_registry",
        "TerraformState" => "terraform_state",
        "TestReport" => "test_report",
        "TestReportSummary" => "test_report_summary",
        "Topic" => "topic",
        "UnleashApi" => "unleash_api",
        "UsageData" => "usage_data",
        "User" => "user",
        "WebCommit" => "web_commit",
        "Wiki" => "wiki",
    ];

    // Documented SDK method names — used only to recognise the NARROW
    // signature/method-table "illustration" class.
    private const METHODS = [
        'options_map', 'get_utility', 'prepare', 'direct',
        'data_get', 'data_set', 'match_get', 'match_set', 'make', 'get_name',
    ];

    // PHP-level errors that indicate a real bug in a documented example (as
    // opposed to an expected not-found / domain error, which is tolerated).
    private const FATAL = '/(Call to undefined method|Call to undefined function|Call to a member function|ArgumentCountError|Too few arguments|Undefined constant|Uncaught TypeError)/';

    // The three documentation sources this gate covers.
    private function docs(): array
    {
        return [
            'root README' => __DIR__ . '/../../README.md',
            'php README' => __DIR__ . '/../README.md',
            'php REFERENCE' => __DIR__ . '/../REFERENCE.md',
        ];
    }

    /**
     * Extract every fenced php block from all three docs, each tagged with its
     * source doc label and its index within that doc.
     */
    private function phpBlocks(): array
    {
        $fence = str_repeat(chr(96), 3);
        $pattern = '/' . $fence . 'php\r?\n(.*?)' . $fence . '/s';
        $blocks = [];
        foreach ($this->docs() as $label => $path) {
            $this->assertFileExists($path, 'missing documentation source: ' . $label);
            preg_match_all($pattern, file_get_contents($path), $m);
            foreach ($m[1] as $i => $b) {
                $blocks[] = ['doc' => $label, 'n' => $i, 'code' => $b];
            }
        }
        return $blocks;
    }

    // --- classification -----------------------------------------------------

    /**
     * A block is RUNNABLE when it constructs the SDK, drives \$client->, or
     * performs an entity operation. Every runnable block MUST be executed.
     */
    private function isRunnable(string $b): bool
    {
        $cls = preg_quote(self::SDK_CLASS, '/');
        return preg_match('/new\s+' . $cls . '\b/', $b) === 1
            || preg_match('/' . $cls . '::test\b/', $b) === 1
            || preg_match('/\$client\s*->/', $b) === 1
            || preg_match('/->\s*(?:load|list|create|update|remove)\s*\(/', $b) === 1;
    }

    /**
     * A block "mentions the SDK" when it references the client variable, the SDK
     * class, an entity accessor, or an entity operation. A non-runnable block
     * that mentions the SDK but is not a signature illustration is an uncovered
     * runnable-looking block and must fail the completeness gate.
     */
    private function looksSdk(string $b): bool
    {
        if (preg_match('/\$client\b/', $b) === 1) {
            return true;
        }
        if (preg_match('/\b' . preg_quote(self::SDK_CLASS, '/') . '\b/', $b) === 1) {
            return true;
        }
        if (preg_match('/->\s*(?:load|list|create|update|remove)\b/', $b) === 1) {
            return true;
        }
        foreach (array_keys(self::ENTITIES) as $name) {
            if (preg_match('/->\s*' . preg_quote($name, '/') . '\s*\(/', $b) === 1) {
                return true;
            }
        }
        return false;
    }

    /**
     * NARROW illustration class: a non-runnable block that references the SDK
     * class or a documented method NAME as a signature / method-table, and never
     * uses a live client variable. This is an explicit, restricted class — not a
     * catch-all — so an unexecuted block that uses \$client cannot hide here.
     */
    private function isIllustration(string $b): bool
    {
        if ($this->isRunnable($b)) {
            return false;
        }
        if (preg_match('/\$client\b/', $b) === 1) {
            return false;
        }
        if (preg_match('/\b' . preg_quote(self::SDK_CLASS, '/') . '\b/', $b) === 1) {
            return true;
        }
        foreach (self::METHODS as $meth) {
            if (preg_match('/\b' . preg_quote($meth, '/') . '\s*\(/', $b) === 1) {
                return true;
            }
        }
        return false;
    }

    /** Partition label for a block: exactly one of the four. */
    private function classify(string $b): string
    {
        if ($this->isRunnable($b)) {
            return 'executed';
        }
        if ($this->isIllustration($b)) {
            return 'illustration';
        }
        if (!$this->looksSdk($b)) {
            return 'syntaxchecked_nonrunnable';
        }
        return 'unclassified';
    }

    // --- tests --------------------------------------------------------------

    public function test_docs_have_php_examples(): void
    {
        $this->assertNotEmpty($this->phpBlocks(), 'docs should contain php examples');
    }

    /** Every php block across all three docs must parse (php -l). */
    public function test_php_snippets_have_valid_syntax(): void
    {
        $failures = [];
        foreach ($this->phpBlocks() as $blk) {
            $block = $blk['code'];
            $code = preg_match('/^\s*<\?php/', $block) ? $block : "<?php\n" . $block;
            $tmp = tempnam(sys_get_temp_dir(), 'readme_php_') . '.php';
            file_put_contents($tmp, $code);
            $out = [];
            $rc = 0;
            exec('php -l ' . escapeshellarg($tmp) . ' 2>&1', $out, $rc);
            @unlink($tmp);
            if ($rc !== 0) {
                $failures[] = $blk['doc'] . ' #' . $blk['n'] . ":\n" . implode("\n", $out) . "\n" . $block;
            }
        }
        $this->assertSame([], $failures, "docs php blocks with syntax errors:\n" . implode("\n\n", $failures));
    }

    /**
     * Build the SDK 'entity' fixture option for the entities a block references,
     * falling back to seeding all entities when none are named.
     */
    private function fixturesFor(string $block): array
    {
        $refs = [];
        foreach (self::ENTITIES as $name => $storage) {
            if (preg_match('/\$client->' . preg_quote($name, '/') . '\b/', $block)) {
                $refs[$storage] = ["test01" => ["id" => "test01"]];
            }
        }
        if (empty($refs)) {
            foreach (self::ENTITIES as $storage) {
                $refs[$storage] = ["test01" => ["id" => "test01"]];
            }
        }
        return ["entity" => $refs];
    }

    /**
     * Rewrite a runnable block into an executable offline test-mode program: the
     * doc's own require of the SDK file is stripped (we require it by absolute
     * path); any real client constructor (new <Sdk>SDK / <Sdk>SDK::test) becomes
     * <Sdk>SDK::test(<fixtures>); a block that only uses \$client gets such a
     * constructor prepended. (The constructor arg-list match is deliberately
     * shallow — it does not span nested parens — because runnable op blocks
     * never build a client inline with a closure argument.)
     */
    private function toRunner(string $block, string $sdk): string
    {
        $cls = self::SDK_CLASS;
        $fixtures = var_export($this->fixturesFor($block), true);
        $body = preg_replace('/^\s*<\?php\s*/', '', $block);
        // Drop the doc's own require of the SDK file; we require it by absolute path.
        $body = preg_replace(
            '/^[ \t]*require(?:_once)?[^\n]*' . preg_quote(self::SDK_BASE, '/') . '[^\n]*\r?\n?/mi',
            '',
            $body
        );
        $ctorRe = '/(?:new\s+' . preg_quote($cls, '/') . '|' . preg_quote($cls, '/') . '::test)(?:\([^()]*\))?/';
        if (preg_match($ctorRe, $body)) {
            $body = preg_replace_callback($ctorRe, function () use ($cls, $fixtures) {
                return $cls . '::test(' . $fixtures . ')';
            }, $body);
        } else {
            $body = '$client = ' . $cls . '::test(' . $fixtures . ");\n" . $body;
        }
        return "<?php\nrequire_once " . var_export($sdk, true) . ";\n" . $body;
    }

    /**
     * Every RUNNABLE block is executed offline in test mode and must not raise a
     * real PHP-level error — even one an error-handling example swallows in a
     * catch (Throwable) and echoes via getMessage(): the captured output is
     * scanned for FATAL either way, so a programming error in a documented
     * try/catch cannot slip through. Expected domain errors (e.g. "404: Not
     * found") never match FATAL, so caught not-found cases stay tolerated.
     */
    public function test_php_examples_run_offline(): void
    {
        $ran = 0;
        $failures = [];
        $sdk = __DIR__ . '/../gitlab_sdk.php';
        foreach ($this->phpBlocks() as $blk) {
            if (!$this->isRunnable($blk['code'])) {
                continue;
            }
            $ran++;
            $runner = $this->toRunner($blk['code'], $sdk);
            $tmp = tempnam(sys_get_temp_dir(), 'readme_run_') . '.php';
            file_put_contents($tmp, $runner);
            $out = [];
            $rc = 0;
            exec('php ' . escapeshellarg($tmp) . ' 2>&1', $out, $rc);
            @unlink($tmp);
            $text = implode("\n", $out);
            if (preg_match(self::FATAL, $text) === 1) {
                $failures[] = $blk['doc'] . ' #' . $blk['n'] . ' (exit ' . $rc . "):\n" . $text . "\n" . $blk['code'];
            }
        }
        $this->assertGreaterThan(0, $ran, 'expected at least one runnable example to execute');
        $this->assertSame([], $failures, "docs php examples raised a real error when run offline:\n" . implode("\n\n", $failures));
    }

    /**
     * COMPLETENESS GATE: every fenced php block is partitioned into exactly one
     * of {executed, syntaxchecked-nonrunnable, illustration}. The three counts
     * must sum to the total. A block that references the SDK but is neither
     * runnable (so not executed) nor a narrow signature illustration is
     * "unclassified" — a runnable-looking example that would be silently skipped
     * — and fails the gate.
     */
    public function test_php_examples_are_completely_classified(): void
    {
        $blocks = $this->phpBlocks();
        $buckets = [
            'executed' => [],
            'syntaxchecked_nonrunnable' => [],
            'illustration' => [],
            'unclassified' => [],
        ];
        $perDoc = [];
        foreach ($blocks as $blk) {
            $cls = $this->classify($blk['code']);
            $buckets[$cls][] = $blk;
            $doc = $blk['doc'];
            if (!isset($perDoc[$doc])) {
                $perDoc[$doc] = ['total' => 0, 'executed' => 0, 'syntaxchecked_nonrunnable' => 0, 'illustration' => 0, 'unclassified' => 0];
            }
            $perDoc[$doc]['total']++;
            $perDoc[$doc][$cls]++;
        }

        $summary = "ReadmeExamplesTest — php example coverage:\n";
        foreach ($perDoc as $doc => $c) {
            $summary .= sprintf(
                "  %-14s total=%d executed=%d syntaxchecked=%d illustration=%d%s\n",
                $doc, $c['total'], $c['executed'], $c['syntaxchecked_nonrunnable'], $c['illustration'],
                $c['unclassified'] > 0 ? ' UNCLASSIFIED=' . $c['unclassified'] : ''
            );
        }
        fwrite(STDERR, "\n" . $summary);

        $unclassified = array_map(
            function ($b) { return $b['doc'] . ' #' . $b['n'] . ":\n" . $b['code']; },
            $buckets['unclassified']
        );
        $this->assertSame([], $unclassified,
            "runnable-looking php blocks that were neither executed nor a signature illustration:\n"
            . implode("\n\n", $unclassified));

        $total = count($blocks);
        $sum = count($buckets['executed'])
            + count($buckets['syntaxchecked_nonrunnable'])
            + count($buckets['illustration']);
        $this->assertSame($total, $sum,
            "every php block must be executed, syntaxchecked-nonrunnable, or illustration.\n" . $summary);

        $this->assertGreaterThan(0, count($buckets['executed']),
            'expected at least one executed php example');
    }
}
