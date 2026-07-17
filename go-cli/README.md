# gitlab-cli

AQL-driven command-line client **and** interactive REPL for the Gitlab
SDK. Each command line is parsed as a single [AQL](https://github.com/aql-lang/aql)
expression and evaluated against the live API; run it with no arguments to drop
into a REPL. Built on `github.com/aql-lang/aql/eng/go` and the sibling Go SDK
at `../go`.

## Examples

```sh
# 1. Build a native binary (-> dist/<os>-<arch>/gitlab-cli)
make build

# 2. See usage (words, entities, env vars)
./gitlab-cli --help

# 3. Provide credentials once, via the environment
export GITLAB_APIKEY=sk_live_xxx

# 4. Each command line is ONE AQL expression, run against the API:

# 5. Override the API base URL for a single call
GITLAB_BASE=https://api.example.com ./gitlab-cli --help

# 6. No arguments -> interactive REPL
./gitlab-cli
gitlab> /help
gitlab> /quit
```

> The rest of this guide follows the [Diátaxis](https://diataxis.fr) framework:
> a hands-on **Tutorial**, task-focused **How-to guides**, a factual
> **Reference**, and background **Explanation**.

## Tutorial: your first query in under a minute

1. **Build the binary.** From this `go-cli/` directory:

   ```sh
   make build          # -> dist/<os>-<arch>/gitlab-cli
   ```

2. **Set your API key** (read from the environment):

   ```sh
   export GITLAB_APIKEY=sk_live_xxx
   ```

3. **Run a query.** Evaluate an AQL expression against the API (or run with no
   arguments to open the REPL):

   ```sh
   ./dist/*/gitlab-cli --help
   ```

4. **Go interactive.** Run the binary with no arguments to open the REPL, then
   type `/help` for the word and entity lists and `/quit` to leave.

That is the whole loop: *build → set key → evaluate AQL expressions*.

## How-to guides

### Authenticate and choose an environment

Configuration is read from the environment — nothing is written to disk:

```sh
export GITLAB_APIKEY=sk_live_xxx            # API key
export GITLAB_BASE=https://api.example.com  # optional: override the API base URL
./gitlab-cli --help
```

Both are injectable by a secrets vault, so the key never has to be typed inline.

### Explore interactively with the REPL

Run with no arguments to open a REPL (prompt `gitlab>`). Each line is
evaluated as its own AQL expression:

```text
$ ./gitlab-cli
gitlab> /help
gitlab> /quit
```

### Cross-compile release binaries

```sh
make build       # native binary for this machine
make build-all   # linux/darwin/windows x amd64/arm64, under dist/<os>-<arch>/
```

### Discover the available entities

`/help` in the REPL prints the full entity list, or see [Entities](#entities)
below — this SDK exposes 276 entities.

## Reference

### Words

The CLI registers these AQL words, each bound to the SDK:

| Word     | Signatures                                    | Returns                        |
|----------|-----------------------------------------------|--------------------------------|
| `list`   | `list <entity>` · `list <query> <entity>`     | First page of records          |
| `load`   | `load <entity>` · `load <query> <entity>`     | A single record                |
| `update` | `update <query> <entity>`                     | Update a record, return it     |

- `<entity>` is a bareword, auto-quoted as an AQL atom (e.g. `access_request`).
- `<query>` is either a **Map** (`{id:1}`) or a **Scalar** (`1`, treated as
  `{id:1}`). A scalar is always wrapped as `{id:<value>}`.

### Environment variables

| Variable | Purpose |
|----------|---------|
| `GITLAB_APIKEY` | API key sent with every request. |
| `GITLAB_BASE` | Optional override of the API base URL. |

Unset variables fall back to the SDK's built-in defaults.

### CLI flags

- `--help` / `-h` — print usage (words, entities, env vars) and exit.

### REPL commands

Meta-commands use the `/` prefix (everything else on a line is evaluated as AQL):

- `/quit` / `/q` / `/exit` — exit the REPL
- `/help` / `/h` / `/?`     — show the word list, entity list and meta commands

### Exit codes

| Code | Meaning |
|------|---------|
| `0` | Success (also the normal REPL exit). |
| `1` | Parse error, word-registration error, or an API/evaluation error. |

### Build targets

| Target | Result |
|--------|--------|
| `make build` | Native binary at `dist/<os>-<arch>/gitlab-cli`. |
| `make build-all` | linux/darwin/windows x amd64/arm64, each under its own `dist/<os>-<arch>/`. |
| `make clean` | Remove `dist/` and any stray binaries. |

### Entities

The 276 entities this SDK exposes (any is valid as `<entity>`):

access_request alert_management api_entities_access_requester api_entities_appearance api_entities_application api_entities_application_statistic api_entities_application_with_secret api_entities_avatar api_entities_award_emoji api_entities_badge api_entities_basic_badge_detail api_entities_basic_group_detail api_entities_basic_project_detail api_entities_basic_ref api_entities_basic_success api_entities_batched_background_migration api_entities_branch api_entities_bulk_import api_entities_bulk_imports_entity_failure api_entities_bulk_imports_export_status api_entities_changelog api_entities_ci_bridge api_entities_ci_catalog_resources_version api_entities_ci_job api_entities_ci_job_basic api_entities_ci_job_basic_with_project api_entities_ci_lint_result api_entities_ci_pipeline api_entities_ci_pipeline_basic api_entities_ci_pipeline_schedule api_entities_ci_pipeline_schedule_detail api_entities_ci_reset_token_result api_entities_ci_resource_group api_entities_ci_runner api_entities_ci_runner_detail api_entities_ci_runner_manager api_entities_ci_runner_registration_detail api_entities_ci_secure_file api_entities_ci_variable api_entities_cluster api_entities_cluster_group api_entities_cluster_project api_entities_clusters_agent api_entities_clusters_agent_token api_entities_clusters_agent_token_basic api_entities_clusters_agent_token_with_token api_entities_commit api_entities_commit_detail api_entities_commit_note api_entities_commit_sequence api_entities_commit_signature api_entities_commit_status api_entities_compare api_entities_container_registry_repository api_entities_container_registry_tag api_entities_container_registry_tag_detail api_entities_contributor api_entities_deploy_key api_entities_deploy_keys_project api_entities_deploy_token api_entities_deploy_token_with_token api_entities_deployment api_entities_deployment_extended api_entities_deployments_approval api_entities_dictionary_table api_entities_diff api_entities_discovered_cluster api_entities_draft_note api_entities_environment api_entities_error_tracking_client_key api_entities_error_tracking_project_setting api_entities_event api_entities_feature api_entities_feature_definition api_entities_feature_flag api_entities_feature_flag_user_list api_entities_freeze_period api_entities_gitlab_subscription api_entities_go_module_version api_entities_group api_entities_group_detail api_entities_hook api_entities_integration api_entities_integration_basic api_entities_invitation api_entities_issuable_time_stat api_entities_issue api_entities_issue_link api_entities_license api_entities_markdown api_entities_markdown_upload_admin api_entities_member api_entities_merge api_entities_merge_request_approval api_entities_merge_request_basic api_entities_merge_request_change api_entities_merge_request_diff api_entities_merge_request_diff_full api_entities_merge_request_reviewer api_entities_metric_image api_entities_mr_note api_entities_namespace api_entities_namespace_existence api_entities_namespaces_storage_limit_exclusion api_entities_npm_package api_entities_npm_package_tag api_entities_nuget_packages_version api_entities_nuget_search_result api_entities_nuget_service_index api_entities_organizations_organization api_entities_package api_entities_package_file api_entities_package_pipeline api_entities_packages_conan_files_list api_entities_packages_conan_package_manifest api_entities_packages_conan_package_revision api_entities_packages_conan_package_snapshot api_entities_packages_conan_recipe_manifest api_entities_packages_conan_recipe_revision api_entities_packages_conan_recipe_snapshot api_entities_packages_conan_revision api_entities_packages_conan_upload_url api_entities_packages_debian_distribution api_entities_pages_domain api_entities_pages_domain_basic api_entities_personal_access_token api_entities_personal_access_token_with_last_used_ip api_entities_personal_access_token_with_token api_entities_personal_snippet api_entities_plan_limit api_entities_project api_entities_project_daily_statistic api_entities_project_export_status api_entities_project_group_link api_entities_project_hook api_entities_project_import_status api_entities_project_job_token_scope api_entities_project_repository_storage api_entities_project_snippet api_entities_project_upload api_entities_project_with_access api_entities_projects_container_registry_protection_rule api_entities_projects_packages_protection_rule api_entities_projects_topic api_entities_protected_branch api_entities_protected_tag api_entities_public_group_detail api_entities_related_issue api_entities_relation_import_tracker api_entities_release api_entities_releases_link api_entities_remote_mirror api_entities_repository_health api_entities_resource_access_token_with_token api_entities_resource_milestone_event api_entities_snippet api_entities_ssh_key_with_user api_entities_suggestion api_entities_system_broadcast_message api_entities_tag api_entities_tag_signature api_entities_templates_list api_entities_terraform_module_version api_entities_tree_object api_entities_trigger api_entities_user_agent_detail api_entities_user_count api_entities_user_public api_entities_user_with_admin api_entities_wiki_attachment api_entities_wiki_page api_entities_wiki_page_basic application award_emoji badge branch cargo_package ci_variable cluster cluster_agent composer composer_package conan conan_package container_registry container_registry_event custom_attribute debian debian_distribution debian_package dependency_proxy deploy_key deploy_token deployment ee_api_entities_approval_state ee_api_entities_audit_event ee_api_entities_billable_membership ee_api_entities_geo_node_status ee_api_entities_geo_pipeline_ref ee_api_entities_issuable_metric_image ee_api_entities_merge_request_approval_state ee_api_entities_ssh_certificate environment error_tracking_client_key feature feature_flag feature_flags_user_list freeze_period generic_package geo go_proxy group group_avatar group_export group_import helm_package hook import integration invitation issue_link issues_statistic job maven_package member merge_request metadata migration ml_model_registry namespace npm npm_package nuget nuget_package package_file page participant personal_access_token project project_avatar project_entity project_export project_hook project_import project_import_entity project_package project_snippet projects_job_token_scope protected_tag pypi pypi_package release release_link remote_mirror rpm rpm_package rubygem rubygem_package runner search secure_file slack snippet starrer system_hook tag terraform_registry terraform_state test_report test_report_summary topic unleash_api usage_data user web_commit wiki

## Explanation

### Why AQL?

The whole command line is one [AQL](https://github.com/aql-lang/aql) expression,
not a fixed `verb --flag` grammar. That means the same binary works one-shot
(`./gitlab-cli <expr>`) and interactively (the REPL), and expressions compose the
same way in both. `list` / `load` / `update` are ordinary AQL *words* bound to
the SDK — adding SDK operations is adding words, not re-parsing flags.

### How it is wired

`main.go` builds the SDK client (configured from the environment), creates an
AQL registry, and `words.go` registers `list` / `load` / `update` as native
words that dispatch on the entity atom and call the sibling Go SDK at `../go`.
Results are unwrapped from their `Entity` wrappers to plain data before being
printed.

### Output format

Each result value is printed as its AQL string form (a JSON-like rendering of
the record or list of records). One-shot mode prints to stdout; errors go to
stderr with a non-zero exit code.

## Generated by

sdkgen `go-cli` target. See the target source under `.sdk/src/cmp/go-cli/` in
this repo, or upstream at
`github.com/voxgig/sdkgen/project/.sdk/src/cmp/go-cli/`.
