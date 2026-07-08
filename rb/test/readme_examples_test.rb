# Gitlab SDK — documentation example COMPLETENESS GATE.
#
# Guarantees every fenced ruby code example across ALL THREE package docs is
# unit-tested. Reads the root ../../README.md, the Ruby ../README.md, and
# ../REFERENCE.md, extracts every fenced ruby block (tagged by source doc +
# index) and enforces:
#
#   1. SYNTAX — 'ruby -c' on every block. Every documented ruby example must
#      parse.
#   2. RUN — every RUNNABLE block (one that constructs the SDK, drives client.,
#      or performs an entity op load/list/create/update/remove) is EXECUTED
#      offline in seeded test mode (GitlabSDK.test) against the real
#      SDK. The captured output is scanned for a real Ruby-level error (undefined
#      method, wrong number of arguments, NameError, ...) REGARDLESS of exit
#      code, so a bug a documented begin/rescue swallows and prints cannot slip
#      through. Expected not-found domain errors are tolerated.
#   3. COMPLETENESS — every block is partitioned into exactly one of
#      {executed, syntaxchecked-nonrunnable, illustration}; the counts must sum
#      to the total. A runnable-looking block that was not executed belongs to
#      no bucket and FAILS the gate.
#
# Ruby is dynamically typed, so syntax + actually running every example is the
# strongest check available without a live server.

require "minitest/autorun"
require "tempfile"
require "open3"

class ReadmeExamplesTest < Minitest::Test
  # The three documentation sources this gate covers.
  DOCS = {
    "root README" => File.join(__dir__, "..", "..", "README.md"),
    "rb README" => File.join(__dir__, "..", "README.md"),
    "rb REFERENCE" => File.join(__dir__, "..", "REFERENCE.md"),
  }
  SDK = File.join(__dir__, "..", "Gitlab_sdk.rb")
  SDK_CLASS = "GitlabSDK"

  # SDK file basename (no extension) — used to strip the doc's own require of the
  # SDK file from a runnable block (we require it by absolute path).
  SDK_BASE = "Gitlab_sdk"

  # Entity accessor (client.<Name>) => fixture storage key (lowercase name).
  ENTITIES = {
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
  }

  # Documented SDK method names — used only to recognise the NARROW
  # signature/method-table "illustration" class.
  METHODS = %w[options_map get_utility prepare direct data_get data_set match_get match_set make get_name]

  # Ruby-level errors that indicate a real bug in a documented example (as
  # opposed to an expected not-found / domain error, which is tolerated).
  FATAL = /NoMethodError|NameError|ArgumentError|undefined method|undefined local variable|uninitialized constant|wrong number of arguments/

  # Extract every fenced ruby block from all three docs, each tagged with its
  # source doc label and its index within that doc.
  def ruby_blocks
    fence = (96.chr) * 3
    blocks = []
    DOCS.each do |label, path|
      assert File.exist?(path), "missing documentation source: #{label}"
      File.read(path).scan(/#{fence}ruby\r?\n(.*?)#{fence}/m).each_with_index do |a, i|
        blocks << { doc: label, n: i, code: a[0] }
      end
    end
    blocks
  end

  # --- classification -------------------------------------------------------

  # A block is RUNNABLE when it constructs the SDK, drives client., or performs
  # an entity operation. Every runnable block MUST be executed.
  def runnable?(b)
    b =~ /#{Regexp.escape(SDK_CLASS)}\.(?:new|test)\b/ ||
      b =~ /\bclient\./ ||
      b =~ /\.(?:load|list|create|update|remove)\b/ ? true : false
  end

  # A block "mentions the SDK" when it references the client variable, the SDK
  # class, an entity accessor, or an entity operation. A non-runnable block that
  # mentions the SDK but is not a signature illustration is an uncovered
  # runnable-looking block and must fail the completeness gate.
  def looks_sdk?(b)
    return true if b =~ /\bclient\b/
    return true if b =~ /\b#{Regexp.escape(SDK_CLASS)}\b/
    return true if b =~ /\.(?:load|list|create|update|remove)\b/
    ENTITIES.each_key { |name| return true if b =~ /\.#{Regexp.escape(name)}\b/ }
    false
  end

  # NARROW illustration class: a non-runnable block that references the SDK class
  # or a documented method NAME as a signature / method-table, and never uses a
  # live client variable. This is an explicit, restricted class — not a
  # catch-all — so an unexecuted block that uses a client variable cannot hide here.
  def illustration?(b)
    return false if runnable?(b)
    return false if b =~ /\bclient\b/
    return true if b =~ /\b#{Regexp.escape(SDK_CLASS)}\b/
    METHODS.each { |m| return true if b =~ /\b#{Regexp.escape(m)}\s*\(/ }
    false
  end

  # Partition label for a block: exactly one of the four.
  def classify(b)
    return "executed" if runnable?(b)
    return "illustration" if illustration?(b)
    return "syntaxchecked_nonrunnable" unless looks_sdk?(b)
    "unclassified"
  end

  # --- tests ----------------------------------------------------------------

  def test_docs_have_ruby_examples
    refute_empty ruby_blocks, "docs should contain ruby examples"
  end

  # Every ruby block across all three docs must parse (ruby -c).
  def test_ruby_snippets_have_valid_syntax
    failures = []
    ruby_blocks.each do |blk|
      Tempfile.create(["readme_rb_", ".rb"]) do |f|
        f.write(blk[:code])
        f.flush
        out, status = Open3.capture2e("ruby", "-c", f.path)
        failures << "#{blk[:doc]} ##{blk[:n]}:\n#{out}\n#{blk[:code]}" unless status.success?
      end
    end
    assert_equal [], failures, "docs ruby blocks with syntax errors:\n#{failures.join("\n\n")}"
  end

  # Build the SDK 'entity' fixture option (as Ruby source) for the entities a
  # block references, falling back to seeding all entities when none are named.
  def fixtures_literal(block)
    refs = ENTITIES.select { |name, _| block =~ /\bclient\.#{Regexp.escape(name)}\b/ }
    refs = ENTITIES if refs.empty?
    entity = {}
    refs.each_value { |storage| entity[storage] = { "test01" => { "id" => "test01" } } }
    { "entity" => entity }.inspect
  end

  # Rewrite a runnable block into an executable offline test-mode program: the
  # doc's own require of the SDK file is stripped (we require it by absolute
  # path); any real client constructor (.new/.test) becomes <Sdk>SDK.test(<fixtures>);
  # a block that only uses a client variable gets such a constructor prepended. (The
  # constructor arg-list match is deliberately shallow — it does not span nested
  # parens — because runnable op blocks never build a client inline with a
  # lambda/closure argument.)
  def to_runner(block)
    fixtures = fixtures_literal(block)
    # Drop the doc's own require of the SDK file; we require it by absolute path.
    block = block.gsub(/^[ \t]*require(?:_relative|_once)?[^\n]*#{Regexp.escape(SDK_BASE)}[^\n]*\r?\n?/i, "")
    ctor_re = /#{Regexp.escape(SDK_CLASS)}\.(?:new|test)(?:\([^()]*\))?/
    body =
      if block =~ /#{Regexp.escape(SDK_CLASS)}\.(?:new|test)\b/
        block.gsub(ctor_re) { "#{SDK_CLASS}.test(#{fixtures})" }
      else
        "client = #{SDK_CLASS}.test(#{fixtures})\n" + block
      end
    "require_relative #{SDK.inspect}\n" + body
  end

  # Every RUNNABLE block is executed offline in test mode and must not raise a
  # real Ruby-level error — even one an error-handling example swallows in a
  # rescue and prints: the captured output is scanned for FATAL either way, so a
  # programming error in a documented begin/rescue cannot slip through. Expected
  # domain errors (e.g. "404: Not found") never match FATAL, so caught not-found
  # cases stay tolerated.
  def test_ruby_examples_run_offline
    ran = 0
    failures = []
    ruby_blocks.each do |blk|
      next unless runnable?(blk[:code])
      ran += 1
      Tempfile.create(["readme_run_", ".rb"]) do |f|
        f.write(to_runner(blk[:code]))
        f.flush
        out, status = Open3.capture2e("ruby", f.path)
        if out =~ FATAL
          failures << "#{blk[:doc]} ##{blk[:n]} (exit #{status.exitstatus}):\n#{out}\n#{blk[:code]}"
        end
      end
    end
    assert_operator ran, :>, 0, "expected at least one runnable example to execute"
    assert_equal [], failures, "docs ruby examples raised a real error when run offline:\n#{failures.join("\n\n")}"
  end

  # COMPLETENESS GATE: every fenced ruby block is partitioned into exactly one of
  # {executed, syntaxchecked-nonrunnable, illustration}. The three counts must
  # sum to the total. A block that references the SDK but is neither runnable (so
  # not executed) nor a narrow signature illustration is "unclassified" — a
  # runnable-looking example that would be silently skipped — and fails the gate.
  def test_ruby_examples_are_completely_classified
    blocks = ruby_blocks
    buckets = { "executed" => [], "syntaxchecked_nonrunnable" => [], "illustration" => [], "unclassified" => [] }
    per_doc = {}
    blocks.each do |blk|
      cls = classify(blk[:code])
      buckets[cls] << blk
      d = (per_doc[blk[:doc]] ||= { "total" => 0, "executed" => 0, "syntaxchecked_nonrunnable" => 0, "illustration" => 0, "unclassified" => 0 })
      d["total"] += 1
      d[cls] += 1
    end

    summary = "ReadmeExamplesTest — ruby example coverage:\n"
    per_doc.each do |doc, c|
      extra = c["unclassified"] > 0 ? " UNCLASSIFIED=#{c["unclassified"]}" : ""
      summary += format("  %-14s total=%d executed=%d syntaxchecked=%d illustration=%d%s\n",
                        doc, c["total"], c["executed"], c["syntaxchecked_nonrunnable"], c["illustration"], extra)
    end
    warn "\n" + summary

    unclassified = buckets["unclassified"].map { |b| "#{b[:doc]} ##{b[:n]}:\n#{b[:code]}" }
    assert_equal [], unclassified,
                 "runnable-looking ruby blocks that were neither executed nor a signature illustration:\n#{unclassified.join("\n\n")}"

    total = blocks.length
    sum = buckets["executed"].length + buckets["syntaxchecked_nonrunnable"].length + buckets["illustration"].length
    assert_equal total, sum,
                 "every ruby block must be executed, syntaxchecked-nonrunnable, or illustration.\n#{summary}"

    assert_operator buckets["executed"].length, :>, 0, "expected at least one executed ruby example"
  end
end
