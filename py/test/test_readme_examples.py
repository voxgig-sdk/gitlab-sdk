# Gitlab SDK — documentation python-examples COMPLETENESS gate.
#
# GUARANTEE: every python example in the docs is unit-tested. This module is a
# completeness gate over every python fenced code block in three documents:
#   - the repository ROOT README.md (one directory above the py/ package),
#   - the per-language py/README.md (tutorial, how-to, error-handling,
#     testing and entity-op examples — in the package root),
#   - the per-language py/REFERENCE.md (in the package root).
# It exists to keep the documented examples honest as the generator evolves:
# no runnable example may be silently skipped, and no block may be dropped.
#
# Checks, in order, PER DOCUMENT:
#
#   1. COMPILE: every python block is parsed with ast.parse + compile(). This
#      catches syntax errors in the docs (e.g. a dict key with no value, or a
#      hyphenated import module name that is not valid Python).
#
#   2. EXECUTE (the primary safety net): every RUNNABLE block is run offline in
#      a seeded TEST-mode subprocess. A block is RUNNABLE when it constructs the
#      SDK (mentions GitlabSDK) OR drives a client/sdk variable the narrative
#      built earlier ("client." / "sdk."). A constructing block is rewritten so
#      both GitlabSDK(...) and GitlabSDK.test(...) become
#      GitlabSDK.test({"entity": {...}}) seeding one mock record (id "test01")
#      per referenced entity; a client-driving block gets that seeded test
#      client injected first, then runs verbatim. Any PROGRAMMING error
#      (NameError / AttributeError / TypeError / KeyError / IndexError /
#      ImportError / SyntaxError / IndentationError) FAILS the test. ONLY a
#      not-found / 404 domain error is tolerated (it proves the snippet is
#      structurally valid Python that drives the SDK against an unseeded id).
#      Any other runtime error also FAILS. This surfaces real bugs — a snippet
#      calling a method that does not exist raises AttributeError; indexing
#      result["err"] on a direct() envelope with no err key raises KeyError.
#
#   3. COMPLETENESS: every block is partitioned into exactly one of
#      {executed, compiled-nonrunnable, illustration} and the test asserts
#      total == executed + compiled + illustration. "illustration" is a NARROW
#      explicit class — a non-runnable block whose every top-level statement is
#      an import, a signature stub, a bare reference, or a literal assignment (a
#      pure signature/table snippet). It can never absorb a runnable example: a
#      block that references the SDK/client is classified RUNNABLE first and
#      MUST execute. If a runnable block is not executed, the test FAILS. A
#      per-doc summary line (total/executed/compiled/illustration) is printed.
#
#   4. TYPECHECK (only if mypy is importable): the ROOT README blocks are
#      concatenated and type-checked with mypy as a bonus gate over the primary
#      EXECUTE gate. Only errors mypy attributes to the snippet file fail;
#      import-resolution noise is inconclusive.

import ast
import os
import subprocess
import sys
import tempfile

import pytest


_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
_PY_ROOT = os.path.dirname(_TEST_DIR)                       # the py/ package root
_README = os.path.abspath(os.path.join(_PY_ROOT, "..", "README.md"))  # repo root
_REFERENCE = os.path.join(_PY_ROOT, "REFERENCE.md")        # per-language reference
_LOCAL_README = os.path.join(_PY_ROOT, "README.md")        # per-language README

_FENCE = chr(96) * 3   # the triple-backtick markdown code fence
_NL = chr(10)          # newline
_WS = (chr(32), chr(9), chr(13), chr(10))   # space, tab, CR, LF

_SDK_MODULE = "gitlab_sdk"
_SDK_CLASS = "GitlabSDK"

# The variable names the generated narrative examples bind the client to. A doc
# reads as a sequence: an early snippet builds the client, later snippets drive
# it. A block that uses "client." or "sdk." without building one gets a seeded
# test client injected under those names so it runs standalone.
_CLIENT_VARS = ("client", "sdk")

# The API's capitalised semantic entities -> lowercase fixture key.
_ENTITIES = {
    "AccessRequest": "access_request",
    "AlertManagement": "alert_management",
    "ApiEntitiesAccessRequester": "api_entities_access_requester",
    "ApiEntitiesAppearance": "api_entities_appearance",
    "ApiEntitiesApplication": "api_entities_application",
    "ApiEntitiesApplicationStatistic": "api_entities_application_statistic",
    "ApiEntitiesApplicationWithSecret": "api_entities_application_with_secret",
    "ApiEntitiesAvatar": "api_entities_avatar",
    "ApiEntitiesAwardEmoji": "api_entities_award_emoji",
    "ApiEntitiesBadge": "api_entities_badge",
    "ApiEntitiesBasicBadgeDetail": "api_entities_basic_badge_detail",
    "ApiEntitiesBasicGroupDetail": "api_entities_basic_group_detail",
    "ApiEntitiesBasicProjectDetail": "api_entities_basic_project_detail",
    "ApiEntitiesBasicRef": "api_entities_basic_ref",
    "ApiEntitiesBasicSuccess": "api_entities_basic_success",
    "ApiEntitiesBatchedBackgroundMigration": "api_entities_batched_background_migration",
    "ApiEntitiesBranch": "api_entities_branch",
    "ApiEntitiesBulkImport": "api_entities_bulk_import",
    "ApiEntitiesBulkImportsEntityFailure": "api_entities_bulk_imports_entity_failure",
    "ApiEntitiesBulkImportsExportStatus": "api_entities_bulk_imports_export_status",
    "ApiEntitiesChangelog": "api_entities_changelog",
    "ApiEntitiesCiBridge": "api_entities_ci_bridge",
    "ApiEntitiesCiCatalogResourcesVersion": "api_entities_ci_catalog_resources_version",
    "ApiEntitiesCiJob": "api_entities_ci_job",
    "ApiEntitiesCiJobBasic": "api_entities_ci_job_basic",
    "ApiEntitiesCiJobBasicWithProject": "api_entities_ci_job_basic_with_project",
    "ApiEntitiesCiLintResult": "api_entities_ci_lint_result",
    "ApiEntitiesCiPipeline": "api_entities_ci_pipeline",
    "ApiEntitiesCiPipelineBasic": "api_entities_ci_pipeline_basic",
    "ApiEntitiesCiPipelineSchedule": "api_entities_ci_pipeline_schedule",
    "ApiEntitiesCiPipelineScheduleDetail": "api_entities_ci_pipeline_schedule_detail",
    "ApiEntitiesCiResetTokenResult": "api_entities_ci_reset_token_result",
    "ApiEntitiesCiResourceGroup": "api_entities_ci_resource_group",
    "ApiEntitiesCiRunner": "api_entities_ci_runner",
    "ApiEntitiesCiRunnerDetail": "api_entities_ci_runner_detail",
    "ApiEntitiesCiRunnerManager": "api_entities_ci_runner_manager",
    "ApiEntitiesCiRunnerRegistrationDetail": "api_entities_ci_runner_registration_detail",
    "ApiEntitiesCiSecureFile": "api_entities_ci_secure_file",
    "ApiEntitiesCiVariable": "api_entities_ci_variable",
    "ApiEntitiesCluster": "api_entities_cluster",
    "ApiEntitiesClusterGroup": "api_entities_cluster_group",
    "ApiEntitiesClusterProject": "api_entities_cluster_project",
    "ApiEntitiesClustersAgent": "api_entities_clusters_agent",
    "ApiEntitiesClustersAgentToken": "api_entities_clusters_agent_token",
    "ApiEntitiesClustersAgentTokenBasic": "api_entities_clusters_agent_token_basic",
    "ApiEntitiesClustersAgentTokenWithToken": "api_entities_clusters_agent_token_with_token",
    "ApiEntitiesCommit": "api_entities_commit",
    "ApiEntitiesCommitDetail": "api_entities_commit_detail",
    "ApiEntitiesCommitNote": "api_entities_commit_note",
    "ApiEntitiesCommitSequence": "api_entities_commit_sequence",
    "ApiEntitiesCommitSignature": "api_entities_commit_signature",
    "ApiEntitiesCommitStatus": "api_entities_commit_status",
    "ApiEntitiesCompare": "api_entities_compare",
    "ApiEntitiesContainerRegistryRepository": "api_entities_container_registry_repository",
    "ApiEntitiesContainerRegistryTag": "api_entities_container_registry_tag",
    "ApiEntitiesContainerRegistryTagDetail": "api_entities_container_registry_tag_detail",
    "ApiEntitiesContributor": "api_entities_contributor",
    "ApiEntitiesDeployKey": "api_entities_deploy_key",
    "ApiEntitiesDeployKeysProject": "api_entities_deploy_keys_project",
    "ApiEntitiesDeployToken": "api_entities_deploy_token",
    "ApiEntitiesDeployTokenWithToken": "api_entities_deploy_token_with_token",
    "ApiEntitiesDeployment": "api_entities_deployment",
    "ApiEntitiesDeploymentExtended": "api_entities_deployment_extended",
    "ApiEntitiesDeploymentsApproval": "api_entities_deployments_approval",
    "ApiEntitiesDictionaryTable": "api_entities_dictionary_table",
    "ApiEntitiesDiff": "api_entities_diff",
    "ApiEntitiesDiscoveredCluster": "api_entities_discovered_cluster",
    "ApiEntitiesDraftNote": "api_entities_draft_note",
    "ApiEntitiesEnvironment": "api_entities_environment",
    "ApiEntitiesErrorTrackingClientKey": "api_entities_error_tracking_client_key",
    "ApiEntitiesErrorTrackingProjectSetting": "api_entities_error_tracking_project_setting",
    "ApiEntitiesEvent": "api_entities_event",
    "ApiEntitiesFeature": "api_entities_feature",
    "ApiEntitiesFeatureDefinition": "api_entities_feature_definition",
    "ApiEntitiesFeatureFlag": "api_entities_feature_flag",
    "ApiEntitiesFeatureFlagUserList": "api_entities_feature_flag_user_list",
    "ApiEntitiesFreezePeriod": "api_entities_freeze_period",
    "ApiEntitiesGitlabSubscription": "api_entities_gitlab_subscription",
    "ApiEntitiesGoModuleVersion": "api_entities_go_module_version",
    "ApiEntitiesGroup": "api_entities_group",
    "ApiEntitiesGroupDetail": "api_entities_group_detail",
    "ApiEntitiesHook": "api_entities_hook",
    "ApiEntitiesIntegration": "api_entities_integration",
    "ApiEntitiesIntegrationBasic": "api_entities_integration_basic",
    "ApiEntitiesInvitation": "api_entities_invitation",
    "ApiEntitiesIssuableTimeStat": "api_entities_issuable_time_stat",
    "ApiEntitiesIssue": "api_entities_issue",
    "ApiEntitiesIssueLink": "api_entities_issue_link",
    "ApiEntitiesLicense": "api_entities_license",
    "ApiEntitiesMarkdown": "api_entities_markdown",
    "ApiEntitiesMarkdownUploadAdmin": "api_entities_markdown_upload_admin",
    "ApiEntitiesMember": "api_entities_member",
    "ApiEntitiesMerge": "api_entities_merge",
    "ApiEntitiesMergeRequestApproval": "api_entities_merge_request_approval",
    "ApiEntitiesMergeRequestBasic": "api_entities_merge_request_basic",
    "ApiEntitiesMergeRequestChange": "api_entities_merge_request_change",
    "ApiEntitiesMergeRequestDiff": "api_entities_merge_request_diff",
    "ApiEntitiesMergeRequestDiffFull": "api_entities_merge_request_diff_full",
    "ApiEntitiesMergeRequestReviewer": "api_entities_merge_request_reviewer",
    "ApiEntitiesMetricImage": "api_entities_metric_image",
    "ApiEntitiesMrNote": "api_entities_mr_note",
    "ApiEntitiesNamespace": "api_entities_namespace",
    "ApiEntitiesNamespaceExistence": "api_entities_namespace_existence",
    "ApiEntitiesNamespacesStorageLimitExclusion": "api_entities_namespaces_storage_limit_exclusion",
    "ApiEntitiesNpmPackage": "api_entities_npm_package",
    "ApiEntitiesNpmPackageTag": "api_entities_npm_package_tag",
    "ApiEntitiesNugetPackagesVersion": "api_entities_nuget_packages_version",
    "ApiEntitiesNugetSearchResult": "api_entities_nuget_search_result",
    "ApiEntitiesNugetServiceIndex": "api_entities_nuget_service_index",
    "ApiEntitiesOrganizationsOrganization": "api_entities_organizations_organization",
    "ApiEntitiesPackage": "api_entities_package",
    "ApiEntitiesPackageFile": "api_entities_package_file",
    "ApiEntitiesPackagePipeline": "api_entities_package_pipeline",
    "ApiEntitiesPackagesConanFilesList": "api_entities_packages_conan_files_list",
    "ApiEntitiesPackagesConanPackageManifest": "api_entities_packages_conan_package_manifest",
    "ApiEntitiesPackagesConanPackageRevision": "api_entities_packages_conan_package_revision",
    "ApiEntitiesPackagesConanPackageSnapshot": "api_entities_packages_conan_package_snapshot",
    "ApiEntitiesPackagesConanRecipeManifest": "api_entities_packages_conan_recipe_manifest",
    "ApiEntitiesPackagesConanRecipeRevision": "api_entities_packages_conan_recipe_revision",
    "ApiEntitiesPackagesConanRecipeSnapshot": "api_entities_packages_conan_recipe_snapshot",
    "ApiEntitiesPackagesConanRevision": "api_entities_packages_conan_revision",
    "ApiEntitiesPackagesConanUploadUrl": "api_entities_packages_conan_upload_url",
    "ApiEntitiesPackagesDebianDistribution": "api_entities_packages_debian_distribution",
    "ApiEntitiesPagesDomain": "api_entities_pages_domain",
    "ApiEntitiesPagesDomainBasic": "api_entities_pages_domain_basic",
    "ApiEntitiesPersonalAccessToken": "api_entities_personal_access_token",
    "ApiEntitiesPersonalAccessTokenWithLastUsedIp": "api_entities_personal_access_token_with_last_used_ip",
    "ApiEntitiesPersonalAccessTokenWithToken": "api_entities_personal_access_token_with_token",
    "ApiEntitiesPersonalSnippet": "api_entities_personal_snippet",
    "ApiEntitiesPlanLimit": "api_entities_plan_limit",
    "ApiEntitiesProject": "api_entities_project",
    "ApiEntitiesProjectDailyStatistic": "api_entities_project_daily_statistic",
    "ApiEntitiesProjectExportStatus": "api_entities_project_export_status",
    "ApiEntitiesProjectGroupLink": "api_entities_project_group_link",
    "ApiEntitiesProjectHook": "api_entities_project_hook",
    "ApiEntitiesProjectImportStatus": "api_entities_project_import_status",
    "ApiEntitiesProjectJobTokenScope": "api_entities_project_job_token_scope",
    "ApiEntitiesProjectRepositoryStorage": "api_entities_project_repository_storage",
    "ApiEntitiesProjectSnippet": "api_entities_project_snippet",
    "ApiEntitiesProjectUpload": "api_entities_project_upload",
    "ApiEntitiesProjectWithAccess": "api_entities_project_with_access",
    "ApiEntitiesProjectsContainerRegistryProtectionRule": "api_entities_projects_container_registry_protection_rule",
    "ApiEntitiesProjectsPackagesProtectionRule": "api_entities_projects_packages_protection_rule",
    "ApiEntitiesProjectsTopic": "api_entities_projects_topic",
    "ApiEntitiesProtectedBranch": "api_entities_protected_branch",
    "ApiEntitiesProtectedTag": "api_entities_protected_tag",
    "ApiEntitiesPublicGroupDetail": "api_entities_public_group_detail",
    "ApiEntitiesRelatedIssue": "api_entities_related_issue",
    "ApiEntitiesRelationImportTracker": "api_entities_relation_import_tracker",
    "ApiEntitiesRelease": "api_entities_release",
    "ApiEntitiesReleasesLink": "api_entities_releases_link",
    "ApiEntitiesRemoteMirror": "api_entities_remote_mirror",
    "ApiEntitiesRepositoryHealth": "api_entities_repository_health",
    "ApiEntitiesResourceAccessTokenWithToken": "api_entities_resource_access_token_with_token",
    "ApiEntitiesResourceMilestoneEvent": "api_entities_resource_milestone_event",
    "ApiEntitiesSnippet": "api_entities_snippet",
    "ApiEntitiesSshKeyWithUser": "api_entities_ssh_key_with_user",
    "ApiEntitiesSuggestion": "api_entities_suggestion",
    "ApiEntitiesSystemBroadcastMessage": "api_entities_system_broadcast_message",
    "ApiEntitiesTag": "api_entities_tag",
    "ApiEntitiesTagSignature": "api_entities_tag_signature",
    "ApiEntitiesTemplatesList": "api_entities_templates_list",
    "ApiEntitiesTerraformModuleVersion": "api_entities_terraform_module_version",
    "ApiEntitiesTreeObject": "api_entities_tree_object",
    "ApiEntitiesTrigger": "api_entities_trigger",
    "ApiEntitiesUserAgentDetail": "api_entities_user_agent_detail",
    "ApiEntitiesUserCount": "api_entities_user_count",
    "ApiEntitiesUserPublic": "api_entities_user_public",
    "ApiEntitiesUserWithAdmin": "api_entities_user_with_admin",
    "ApiEntitiesWikiAttachment": "api_entities_wiki_attachment",
    "ApiEntitiesWikiPage": "api_entities_wiki_page",
    "ApiEntitiesWikiPageBasic": "api_entities_wiki_page_basic",
    "Application": "application",
    "AwardEmoji": "award_emoji",
    "Badge": "badge",
    "Branch": "branch",
    "CargoPackage": "cargo_package",
    "CiVariable": "ci_variable",
    "Cluster": "cluster",
    "ClusterAgent": "cluster_agent",
    "Composer": "composer",
    "ComposerPackage": "composer_package",
    "Conan": "conan",
    "ConanPackage": "conan_package",
    "ContainerRegistry": "container_registry",
    "ContainerRegistryEvent": "container_registry_event",
    "CustomAttribute": "custom_attribute",
    "Debian": "debian",
    "DebianDistribution": "debian_distribution",
    "DebianPackage": "debian_package",
    "DependencyProxy": "dependency_proxy",
    "DeployKey": "deploy_key",
    "DeployToken": "deploy_token",
    "Deployment": "deployment",
    "EeApiEntitiesApprovalState": "ee_api_entities_approval_state",
    "EeApiEntitiesAuditEvent": "ee_api_entities_audit_event",
    "EeApiEntitiesBillableMembership": "ee_api_entities_billable_membership",
    "EeApiEntitiesGeoNodeStatus": "ee_api_entities_geo_node_status",
    "EeApiEntitiesGeoPipelineRef": "ee_api_entities_geo_pipeline_ref",
    "EeApiEntitiesIssuableMetricImage": "ee_api_entities_issuable_metric_image",
    "EeApiEntitiesMergeRequestApprovalState": "ee_api_entities_merge_request_approval_state",
    "EeApiEntitiesSshCertificate": "ee_api_entities_ssh_certificate",
    "Environment": "environment",
    "ErrorTrackingClientKey": "error_tracking_client_key",
    "Feature": "feature",
    "FeatureFlag": "feature_flag",
    "FeatureFlagsUserList": "feature_flags_user_list",
    "FreezePeriod": "freeze_period",
    "GenericPackage": "generic_package",
    "Geo": "geo",
    "GoProxy": "go_proxy",
    "Group": "group",
    "GroupAvatar": "group_avatar",
    "GroupExport": "group_export",
    "GroupImport": "group_import",
    "HelmPackage": "helm_package",
    "Hook": "hook",
    "Import": "import",
    "Integration": "integration",
    "Invitation": "invitation",
    "IssueLink": "issue_link",
    "IssuesStatistic": "issues_statistic",
    "Job": "job",
    "MavenPackage": "maven_package",
    "Member": "member",
    "MergeRequest": "merge_request",
    "Metadata": "metadata",
    "Migration": "migration",
    "MlModelRegistry": "ml_model_registry",
    "Namespace": "namespace",
    "Npm": "npm",
    "NpmPackage": "npm_package",
    "Nuget": "nuget",
    "NugetPackage": "nuget_package",
    "PackageFile": "package_file",
    "Page": "page",
    "Participant": "participant",
    "PersonalAccessToken": "personal_access_token",
    "Project": "project",
    "ProjectAvatar": "project_avatar",
    "ProjectEntity": "project_entity",
    "ProjectExport": "project_export",
    "ProjectHook": "project_hook",
    "ProjectImport": "project_import",
    "ProjectImportEntity": "project_import_entity",
    "ProjectPackage": "project_package",
    "ProjectSnippet": "project_snippet",
    "ProjectsJobTokenScope": "projects_job_token_scope",
    "ProtectedTag": "protected_tag",
    "Pypi": "pypi",
    "PypiPackage": "pypi_package",
    "Release": "release",
    "ReleaseLink": "release_link",
    "RemoteMirror": "remote_mirror",
    "Rpm": "rpm",
    "RpmPackage": "rpm_package",
    "Rubygem": "rubygem",
    "RubygemPackage": "rubygem_package",
    "Runner": "runner",
    "Search": "search",
    "SecureFile": "secure_file",
    "Slack": "slack",
    "Snippet": "snippet",
    "Starrer": "starrer",
    "SystemHook": "system_hook",
    "Tag": "tag",
    "TerraformRegistry": "terraform_registry",
    "TerraformState": "terraform_state",
    "TestReport": "test_report",
    "TestReportSummary": "test_report_summary",
    "Topic": "topic",
    "UnleashApi": "unleash_api",
    "UsageData": "usage_data",
    "User": "user",
    "WebCommit": "web_commit",
    "Wiki": "wiki",
}

# The three documents held to the gate, tagged by human label.
_DOCS = (
    ("root README", _README),
    ("py README.md", _LOCAL_README),
    ("py REFERENCE.md", _REFERENCE),
)


def _read_doc(path, label):
    if not os.path.exists(path):
        pytest.skip(label + " not found: " + path)
    with open(path, "r", encoding="utf-8") as fh:
        return fh.read()


def _blocks_in(text):
    # Split on the code fence: odd-indexed segments are the inside of a fenced
    # block (an info string on the first line, then the code). No regex, no
    # backslashes — keeps this robust and generator-friendly. Only fences whose
    # info string is exactly "python" are returned, so signature/markdown
    # tables (plain text or other fences) are skipped.
    parts = text.split(_FENCE)
    blocks = []
    for i in range(1, len(parts), 2):
        seg = parts[i]
        lines = seg.split(_NL)
        info = lines[0].strip()
        if info == "python":
            blocks.append(_NL.join(lines[1:]))
    return blocks


def _python_blocks():
    return _blocks_in(_read_doc(_README, "root README"))


def _reference_blocks():
    return _blocks_in(_read_doc(_REFERENCE, "py REFERENCE.md"))


def _local_readme_blocks():
    return _blocks_in(_read_doc(_LOCAL_README, "py README.md"))


# ----------------------------------------------------------------------------
# Presence + COMPILE (syntax) gate
# ----------------------------------------------------------------------------

def test_readme_has_python_blocks():
    assert len(_python_blocks()) > 0, "expected at least one python block in the root README"


def test_reference_has_python_blocks():
    assert len(_reference_blocks()) > 0, "expected at least one python block in py/REFERENCE.md"


def test_local_readme_has_python_blocks():
    assert len(_local_readme_blocks()) > 0, "expected at least one python block in py/README.md"


def _assert_blocks_compile(blocks, label):
    # Syntax gate: every documented python block must parse and compile. Catches
    # a bad constructor import such as a hyphenated module name
    # ("from my-slug_sdk import ...") which is a Python SyntaxError.
    for i, block in enumerate(blocks):
        try:
            ast.parse(block)
            compile(block, "<" + label + "-block-" + str(i) + ">", "exec")
        except SyntaxError as err:
            pytest.fail(
                label + " python block #" + str(i)
                + " is not valid Python: " + str(err) + _NL + _NL + block
            )


def test_readme_python_blocks_compile():
    _assert_blocks_compile(_python_blocks(), "root README")


def test_reference_python_blocks_compile():
    _assert_blocks_compile(_reference_blocks(), "py REFERENCE.md")


def test_local_readme_python_blocks_compile():
    _assert_blocks_compile(_local_readme_blocks(), "py README.md")


# ----------------------------------------------------------------------------
# TYPECHECK (bonus, root README only, if mypy is importable)
# ----------------------------------------------------------------------------

def _mypy_available():
    try:
        import mypy  # noqa: F401
        return True
    except Exception:
        return False


def test_readme_python_blocks_typecheck():
    # Type gate: concatenate the blocks and run mypy over them. Only fails on
    # errors mypy attributes to our snippet file; environmental import noise is
    # inconclusive (skipped). When mypy is unavailable the execute gate below
    # is the safety net.
    if not _mypy_available():
        pytest.skip("mypy not importable — covered by the execute gate")

    source = (_NL + _NL).join(_python_blocks()) + _NL

    with tempfile.TemporaryDirectory() as td:
        snippet_path = os.path.join(td, "readme_snippets.py")
        with open(snippet_path, "w", encoding="utf-8") as fh:
            fh.write(source)

        env = dict(os.environ)
        env["PYTHONDONTWRITEBYTECODE"] = "1"
        # Resolve "from _SDK_MODULE import _SDK_CLASS" against the package root.
        env["MYPYPATH"] = _PY_ROOT + os.pathsep + env.get("MYPYPATH", "")

        proc = subprocess.run(
            [
                sys.executable, "-m", "mypy",
                "--no-error-summary",
                "--no-color-output",
                "--follow-imports=silent",   # use SDK types, silence SDK-internal errors
                "--ignore-missing-imports",
                snippet_path,
            ],
            cwd=_PY_ROOT,
            env=env,
            capture_output=True,
            text=True,
        )

        base = os.path.basename(snippet_path)
        output = (proc.stdout or "") + (proc.stderr or "")
        errors = []
        for line in output.split(_NL):
            if base in line and ": error:" in line:
                if "Cannot find implementation or library stub" in line:
                    continue
                if "Skipping analyzing" in line:
                    continue
                errors.append(line)

        if errors:
            pytest.fail(
                "mypy found type errors in the root README python snippets:"
                + _NL + _NL.join(errors) + _NL + _NL + "--- snippets ---" + _NL + source
            )


# ----------------------------------------------------------------------------
# Classification: runnable / illustration / compiled-nonrunnable
# ----------------------------------------------------------------------------

def _uses_var(block, var):
    # True if the block reads an attribute off the whole-word variable "var"
    # (i.e. contains "var." with a non-identifier char, or nothing, before it).
    # This distinguishes a client-driving "sdk." from the "_sdk." tail of an
    # import module name.
    needle = var + "."
    start = 0
    while True:
        j = block.find(needle, start)
        if j < 0:
            return False
        ok_before = True
        if j > 0:
            ch = block[j - 1]
            if ch.isalnum() or ch == "_":
                ok_before = False
        if ok_before:
            return True
        start = j + 1


def _is_runnable(block):
    # A block is RUNNABLE — and therefore MUST be executed — when it constructs
    # the SDK (mentions the class) or drives a client/sdk the narrative built.
    if _SDK_CLASS in block:
        return True
    for var in _CLIENT_VARS:
        if _uses_var(block, var):
            return True
    return False


def _is_literalish(value):
    # A right-hand side that performs no function call (a literal, name, or
    # collection display). Keeps the "illustration" class narrow.
    for sub in ast.walk(value):
        if isinstance(sub, ast.Call):
            return False
    return True


def _is_illustration_node(node):
    # A single "shape only" statement: an import, a bare reference/literal
    # (not a call), a signature stub (def/class whose body is only pass /
    # docstring / ...), or a literal assignment.
    if isinstance(node, (ast.Import, ast.ImportFrom)):
        return True
    if isinstance(node, ast.Expr):
        return not isinstance(node.value, ast.Call)
    if isinstance(node, (ast.FunctionDef, ast.AsyncFunctionDef, ast.ClassDef)):
        for b in node.body:
            if isinstance(b, ast.Pass):
                continue
            if isinstance(b, ast.Expr) and isinstance(b.value, ast.Constant):
                continue
            return False
        return True
    if isinstance(node, ast.AnnAssign):
        return node.value is None or _is_literalish(node.value)
    if isinstance(node, ast.Assign):
        return _is_literalish(node.value)
    return False


def _is_illustration(block):
    # NARROW, explicit: a non-runnable block whose every top-level statement is
    # a benign "shape" node — an import, a bare reference/literal, a signature
    # stub, or a literal assignment (a pure signature/table snippet). Anything
    # that does work (a call, a loop, a with/try) is NOT an illustration; it
    # falls to the compiled-nonrunnable bucket. A runnable block (references the
    # SDK/client) is never an illustration, so this class can never silently
    # absorb a runnable example.
    if _is_runnable(block):
        return False
    try:
        tree = ast.parse(block)
    except SyntaxError:
        return False
    if not tree.body:
        return True
    for node in tree.body:
        if not _is_illustration_node(node):
            return False
    return True


def _classify(block):
    if _is_runnable(block):
        return "runnable"
    if _is_illustration(block):
        return "illustration"
    return "compiled"


# ----------------------------------------------------------------------------
# EXECUTE gate
# ----------------------------------------------------------------------------

# Exception TYPE names that signal a programming (not domain) error. Matched
# against the last line of a failed subprocess's traceback.
_PROGRAMMING_ERROR_NAMES = frozenset([
    "SyntaxError", "IndentationError", "NameError", "AttributeError",
    "TypeError", "KeyError", "IndexError", "ImportError", "ModuleNotFoundError",
])


def _seed_literal(block):
    # Build a test() fixture seeding one mock record (id "test01") for every
    # entity the block references, so list()/load() resolve offline. Detection
    # is by the "client.<Entity>(" factory call the generated examples use.
    seeded = {}
    for cap, key in _ENTITIES.items():
        if ("." + cap + "(") in block:
            seeded[key] = {"test01": {"id": "test01"}}
    return {"entity": seeded}


def _rewrite_to_test_mode(block):
    # Force every client construction into offline test mode with seeded
    # fixtures: both _SDK_CLASS(...) (live) and _SDK_CLASS.test(...) become
    # _SDK_CLASS.test({"entity": {...}}). Balanced-paren aware, so a
    # multi-line constructor argument is consumed whole. A bare mention of the
    # class name (e.g. in an import) is left untouched.
    seed = repr(_seed_literal(block))
    replacement = _SDK_CLASS + ".test(" + seed + ")"
    out = []
    i = 0
    n = len(block)
    while True:
        j = block.find(_SDK_CLASS, i)
        if j < 0:
            out.append(block[i:])
            break
        out.append(block[i:j])
        k = j + len(_SDK_CLASS)
        if block[k:k + 5] == ".test":
            k += 5
        while k < n and block[k] in _WS:
            k += 1
        if k < n and block[k] == "(":
            depth = 0
            m = k
            while m < n:
                c = block[m]
                if c == "(":
                    depth += 1
                elif c == ")":
                    depth -= 1
                    if depth == 0:
                        m += 1
                        break
                m += 1
            out.append(replacement)
            i = m
        else:
            # Not a construction (e.g. "from ..._sdk import _SDK_CLASS") —
            # keep the original text verbatim.
            out.append(block[j:k])
            i = k
    return "".join(out)


def _build_exec_source(block):
    # Return runnable python source for a RUNNABLE block, else None. A block
    # that constructs the SDK is rewritten into seeded test mode; a block that
    # only drives a client/sdk gets a seeded test client injected under those
    # names first, then runs verbatim. The set of blocks for which this returns
    # a source is exactly the set _is_runnable() flags — the completeness gate
    # asserts that, so no runnable block is ever silently skipped.
    preamble = "import os" + _NL + "from " + _SDK_MODULE + " import " + _SDK_CLASS + _NL
    if _SDK_CLASS in block:
        return preamble + _rewrite_to_test_mode(block)
    inject = ""
    used = False
    seed = repr(_seed_literal(block))
    for var in _CLIENT_VARS:
        if _uses_var(block, var):
            inject += var + " = " + _SDK_CLASS + ".test(" + seed + ")" + _NL
            used = True
    if used:
        return preamble + inject + block
    return None


def _is_not_found_error(last):
    # The ONLY tolerated domain error: a not-found / 404 raised because a
    # referenced id was not seeded. Detected by the SDK error message text.
    low = last.lower()
    return ("404" in last) or ("not found" in low) or ("notfound" in low)


def _run_source(source, label, index):
    # Run one rewritten block in a subprocess. Returns None when it exits 0 or
    # fails with the single tolerated not-found/404 domain error; otherwise
    # returns a failure message (a programming error, or any other runtime
    # error — both fail the gate).
    env = dict(os.environ)
    env["PYTHONDONTWRITEBYTECODE"] = "1"
    env["PYTHONPATH"] = _PY_ROOT + os.pathsep + env.get("PYTHONPATH", "")

    proc = subprocess.run(
        [sys.executable, "-c", source],
        cwd=_PY_ROOT,
        env=env,
        capture_output=True,
        text=True,
    )
    if proc.returncode == 0:
        return None

    stderr = proc.stderr or ""
    errlines = [ln for ln in stderr.split(_NL) if ln.strip()]
    last = errlines[-1] if errlines else ""
    # Traceback's final line is "ExceptionType: message"; the type may be
    # dotted (module-qualified) so compare the short name.
    exc_type = last.split(":", 1)[0].strip().split(".")[-1]

    detail = (
        label + " python block #" + str(index) + ": " + last + _NL + _NL
        + "--- executed source ---" + _NL + source
        + _NL + _NL + "--- stderr ---" + _NL + stderr
    )

    if exc_type in _PROGRAMMING_ERROR_NAMES:
        return "PROGRAMMING ERROR in " + detail
    if _is_not_found_error(last):
        return None   # tolerated domain error
    return "UNEXPECTED (non not-found/404) ERROR in " + detail


# ----------------------------------------------------------------------------
# COMPLETENESS gate (the guarantee)
# ----------------------------------------------------------------------------

def _completeness_gate(label, blocks):
    # Partition every block, execute every runnable one, and assert the
    # partition is complete. Returns the per-doc stats dict.
    total = len(blocks)
    executed = 0
    runnable = 0
    illustration = 0
    compiled = 0
    failures = []

    for i, block in enumerate(blocks):
        kind = _classify(block)
        if kind == "runnable":
            runnable += 1
            source = _build_exec_source(block)
            if source is None:
                # Should be impossible: _is_runnable and _build_exec_source key
                # off the same markers. If it ever happens a runnable example
                # would be silently skipped — fail loudly.
                failures.append(
                    label + " python block #" + str(i) + " is runnable-looking "
                    "(references the SDK/client) but produced no executable "
                    "source; it would be silently skipped:" + _NL + _NL + block
                )
                continue
            executed += 1
            msg = _run_source(source, label, i)
            if msg is not None:
                failures.append(msg)
        elif kind == "illustration":
            illustration += 1
        else:
            compiled += 1

    print(
        _NL + "[readme-examples] " + label + " python blocks: total="
        + str(total) + " executed=" + str(executed) + " compiled="
        + str(compiled) + " illustration=" + str(illustration)
    )

    if failures:
        pytest.fail(
            label + ": " + str(len(failures))
            + " documented python example(s) failed the completeness gate:"
            + _NL + _NL + (_NL + _NL).join(failures)
        )

    # Every runnable (SDK/client-referencing) block MUST have executed.
    assert executed == runnable, (
        label + ": " + str(runnable - executed) + " runnable python block(s) "
        "were not executed — a documented example that drives the SDK/client "
        "must run, never be silently skipped (executed=" + str(executed)
        + ", runnable=" + str(runnable) + ")"
    )
    # Every block is accounted for by exactly one bucket.
    assert total == executed + compiled + illustration, (
        label + ": python-block accounting does not add up — total=" + str(total)
        + " but executed+compiled+illustration="
        + str(executed + compiled + illustration)
        + ". Every block must be executed, compiled-nonrunnable, or a narrow "
        "illustration; none may be dropped."
    )
    return {
        "total": total,
        "executed": executed,
        "compiled": compiled,
        "illustration": illustration,
    }


def test_readme_completeness_gate():
    stats = _completeness_gate("root README", _python_blocks())
    assert stats["executed"] > 0, (
        "expected at least one runnable python block in the root README to execute"
    )


def test_local_readme_completeness_gate():
    stats = _completeness_gate("py README.md", _local_readme_blocks())
    assert stats["executed"] > 0, (
        "expected at least one runnable python block in py/README.md to execute"
    )


def test_reference_completeness_gate():
    stats = _completeness_gate("py REFERENCE.md", _reference_blocks())
    assert stats["executed"] > 0, (
        "expected at least one runnable python block in py/REFERENCE.md to execute"
    )
