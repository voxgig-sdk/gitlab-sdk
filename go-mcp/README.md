# gitlab-mcp

[MCP](https://modelcontextprotocol.io) server exposing the Gitlab SDK as
two agent tools — `gitlab_list` and `gitlab_load` — built on the
[official Go MCP SDK](https://github.com/modelcontextprotocol/go-sdk) and the
sibling Go SDK at `../go`. Runs over **stdio** (default, for spawnable installs)
or **streamable HTTP** (one shared server for several agents).

## Examples

```sh
# 1. Build a native binary (-> dist/<os>-<arch>/gitlab-mcp)
make build

# 2. Provide credentials via the environment
export GITLAB_APIKEY=sk_live_xxx

# 3a. Install into Claude Code over stdio (most common)
claude mcp add --scope user gitlab \
  -- /absolute/path/to/gitlab-mcp -transport stdio

# 3b. …or run a shared HTTP server instead
./gitlab-mcp -transport http -addr :8080
```

Tool-call arguments (what an agent sends):

```jsonc
// gitlab_list: first page of records
{ "entity": "api_entities_access_requester" }
{ "entity": "api_entities_access_requester", "query": { } }

// gitlab_load: one record by id
{ "entity": "api_entities_appearance", "query": { "id": 1 } }
```

> The rest of this guide follows the [Diátaxis](https://diataxis.fr) framework:
> a hands-on **Tutorial**, task-focused **How-to guides**, a factual
> **Reference**, and background **Explanation**.

## Tutorial: install and call a tool

1. **Build** the server from this `go-mcp/` directory:

   ```sh
   make build          # -> dist/<os>-<arch>/gitlab-mcp
   ```

2. **Set your API key:**

   ```sh
   export GITLAB_APIKEY=sk_live_xxx
   ```

3. **Install it into Claude Code** (stdio transport):

   ```sh
   claude mcp add --scope user gitlab \
     -- "$PWD"/dist/*/gitlab-mcp -transport stdio
   ```

4. **Restart Claude Code.** The `gitlab_list` and `gitlab_load` tools now appear
   in new sessions. Ask the agent to *"list api_entities_access_requester using gitlab"*
   and it calls `gitlab_list` with `{"entity":"api_entities_access_requester"}`.

## How-to guides

### Authenticate and choose an environment

Configuration is read from the environment — nothing is written to disk:

```sh
export GITLAB_APIKEY=sk_live_xxx            # API key
export GITLAB_BASE=https://api.example.com  # optional: override the API base URL
```

Set these in the shell that launches the server (or in the `claude mcp add`
environment) so every tool call is authenticated.

### Run as a shared HTTP server

```sh
./gitlab-mcp -transport http -addr :8080
```

Streamable HTTP lets several agents share one running process; stdio (the
default) spawns a fresh process per client.

### Call the `gitlab_list` tool

Args: `entity` (required), `query` (optional filter map). Returns the first
page of records as JSON:

```jsonc
{ "entity": "api_entities_access_requester" }
```

### Call the `gitlab_load` tool

Args: `entity` (required), `query` = `{"id":N}` (required). Returns the single
record as JSON:

```jsonc
{ "entity": "api_entities_appearance", "query": { "id": 1 } }
```

### Cross-compile release binaries

```sh
make build       # native binary for this machine
make build-all   # linux/darwin/windows x amd64/arm64, under dist/<os>-<arch>/
```

## Reference

### Tools

| Tool | Args | Returns |
|------|------|---------|
| `gitlab_list` | `entity` (required), `query` (optional map) | First page of records as JSON |
| `gitlab_load` | `entity` (required), `query` = `{id:N}` | Single record as JSON |

On error, a tool returns an MCP error result (`isError: true`) whose text is the
failure message (e.g. unknown entity, or an API error).

### `Args` schema

Both tools take the same argument object:

| Field | Type | Notes |
|-------|------|-------|
| `entity` | string | One of the 276 supported entities (see below). |
| `query` | object | Optional match map. `{"id":N}` for load; omit or `{}` for list. |

JSON schemas are emitted by the SDK from the `Args` struct's `json` /
`jsonschema` tags — no schema is hand-written.

### Transports & flags

| Flag | Default | Purpose |
|------|---------|---------|
| `-transport` | `stdio` | `stdio` (spawnable) or `http` (streamable HTTP). |
| `-addr` | `:8080` | Listen address for the `http` transport. |

### Environment variables

| Variable | Purpose |
|----------|---------|
| `GITLAB_APIKEY` | API key sent with every request. |
| `GITLAB_BASE` | Optional override of the API base URL. |

### Entities

The 276 entities valid as the `entity` argument:

access_request | alert_management | api_entities_access_requester | api_entities_appearance | api_entities_application | api_entities_application_statistic | api_entities_application_with_secret | api_entities_avatar | api_entities_award_emoji | api_entities_badge | api_entities_basic_badge_detail | api_entities_basic_group_detail | api_entities_basic_project_detail | api_entities_basic_ref | api_entities_basic_success | api_entities_batched_background_migration | api_entities_branch | api_entities_bulk_import | api_entities_bulk_imports_entity_failure | api_entities_bulk_imports_export_status | api_entities_changelog | api_entities_ci_bridge | api_entities_ci_catalog_resources_version | api_entities_ci_job | api_entities_ci_job_basic | api_entities_ci_job_basic_with_project | api_entities_ci_lint_result | api_entities_ci_pipeline | api_entities_ci_pipeline_basic | api_entities_ci_pipeline_schedule | api_entities_ci_pipeline_schedule_detail | api_entities_ci_reset_token_result | api_entities_ci_resource_group | api_entities_ci_runner | api_entities_ci_runner_detail | api_entities_ci_runner_manager | api_entities_ci_runner_registration_detail | api_entities_ci_secure_file | api_entities_ci_variable | api_entities_cluster | api_entities_cluster_group | api_entities_cluster_project | api_entities_clusters_agent | api_entities_clusters_agent_token | api_entities_clusters_agent_token_basic | api_entities_clusters_agent_token_with_token | api_entities_commit | api_entities_commit_detail | api_entities_commit_note | api_entities_commit_sequence | api_entities_commit_signature | api_entities_commit_status | api_entities_compare | api_entities_container_registry_repository | api_entities_container_registry_tag | api_entities_container_registry_tag_detail | api_entities_contributor | api_entities_deploy_key | api_entities_deploy_keys_project | api_entities_deploy_token | api_entities_deploy_token_with_token | api_entities_deployment | api_entities_deployment_extended | api_entities_deployments_approval | api_entities_dictionary_table | api_entities_diff | api_entities_discovered_cluster | api_entities_draft_note | api_entities_environment | api_entities_error_tracking_client_key | api_entities_error_tracking_project_setting | api_entities_event | api_entities_feature | api_entities_feature_definition | api_entities_feature_flag | api_entities_feature_flag_user_list | api_entities_freeze_period | api_entities_gitlab_subscription | api_entities_go_module_version | api_entities_group | api_entities_group_detail | api_entities_hook | api_entities_integration | api_entities_integration_basic | api_entities_invitation | api_entities_issuable_time_stat | api_entities_issue | api_entities_issue_link | api_entities_license | api_entities_markdown | api_entities_markdown_upload_admin | api_entities_member | api_entities_merge | api_entities_merge_request_approval | api_entities_merge_request_basic | api_entities_merge_request_change | api_entities_merge_request_diff | api_entities_merge_request_diff_full | api_entities_merge_request_reviewer | api_entities_metric_image | api_entities_mr_note | api_entities_namespace | api_entities_namespace_existence | api_entities_namespaces_storage_limit_exclusion | api_entities_npm_package | api_entities_npm_package_tag | api_entities_nuget_packages_version | api_entities_nuget_search_result | api_entities_nuget_service_index | api_entities_organizations_organization | api_entities_package | api_entities_package_file | api_entities_package_pipeline | api_entities_packages_conan_files_list | api_entities_packages_conan_package_manifest | api_entities_packages_conan_package_revision | api_entities_packages_conan_package_snapshot | api_entities_packages_conan_recipe_manifest | api_entities_packages_conan_recipe_revision | api_entities_packages_conan_recipe_snapshot | api_entities_packages_conan_revision | api_entities_packages_conan_upload_url | api_entities_packages_debian_distribution | api_entities_pages_domain | api_entities_pages_domain_basic | api_entities_personal_access_token | api_entities_personal_access_token_with_last_used_ip | api_entities_personal_access_token_with_token | api_entities_personal_snippet | api_entities_plan_limit | api_entities_project | api_entities_project_daily_statistic | api_entities_project_export_status | api_entities_project_group_link | api_entities_project_hook | api_entities_project_import_status | api_entities_project_job_token_scope | api_entities_project_repository_storage | api_entities_project_snippet | api_entities_project_upload | api_entities_project_with_access | api_entities_projects_container_registry_protection_rule | api_entities_projects_packages_protection_rule | api_entities_projects_topic | api_entities_protected_branch | api_entities_protected_tag | api_entities_public_group_detail | api_entities_related_issue | api_entities_relation_import_tracker | api_entities_release | api_entities_releases_link | api_entities_remote_mirror | api_entities_repository_health | api_entities_resource_access_token_with_token | api_entities_resource_milestone_event | api_entities_snippet | api_entities_ssh_key_with_user | api_entities_suggestion | api_entities_system_broadcast_message | api_entities_tag | api_entities_tag_signature | api_entities_templates_list | api_entities_terraform_module_version | api_entities_tree_object | api_entities_trigger | api_entities_user_agent_detail | api_entities_user_count | api_entities_user_public | api_entities_user_with_admin | api_entities_wiki_attachment | api_entities_wiki_page | api_entities_wiki_page_basic | application | award_emoji | badge | branch | cargo_package | ci_variable | cluster | cluster_agent | composer | composer_package | conan | conan_package | container_registry | container_registry_event | custom_attribute | debian | debian_distribution | debian_package | dependency_proxy | deploy_key | deploy_token | deployment | ee_api_entities_approval_state | ee_api_entities_audit_event | ee_api_entities_billable_membership | ee_api_entities_geo_node_status | ee_api_entities_geo_pipeline_ref | ee_api_entities_issuable_metric_image | ee_api_entities_merge_request_approval_state | ee_api_entities_ssh_certificate | environment | error_tracking_client_key | feature | feature_flag | feature_flags_user_list | freeze_period | generic_package | geo | go_proxy | group | group_avatar | group_export | group_import | helm_package | hook | import | integration | invitation | issue_link | issues_statistic | job | maven_package | member | merge_request | metadata | migration | ml_model_registry | namespace | npm | npm_package | nuget | nuget_package | package_file | page | participant | personal_access_token | project | project_avatar | project_entity | project_export | project_hook | project_import | project_import_entity | project_package | project_snippet | projects_job_token_scope | protected_tag | pypi | pypi_package | release | release_link | remote_mirror | rpm | rpm_package | rubygem | rubygem_package | runner | search | secure_file | slack | snippet | starrer | system_hook | tag | terraform_registry | terraform_state | test_report | test_report_summary | topic | unleash_api | usage_data | user | web_commit | wiki

### Smoke test via HTTP (raw JSON-RPC)

```sh
./gitlab-mcp -transport http -addr :18080 &

# initialize, grab the session id
curl -sN -X POST http://localhost:18080 \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json, text/event-stream' \
  -D headers \
  -d '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2025-06-18","capabilities":{},"clientInfo":{"name":"smoke","version":"0"}}}'

SESSION=$(awk '/Mcp-Session-Id/ {print $2}' headers | tr -d '\r')

curl -sN -X POST http://localhost:18080 \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json, text/event-stream' \
  -H "Mcp-Session-Id: $SESSION" \
  -d '{"jsonrpc":"2.0","id":2,"method":"tools/call","params":{"name":"gitlab_load","arguments":{"entity":"api_entities_appearance","query":{"id":1}}}}'
```

## Explanation

### How tools map to the SDK

`main.go` builds the SDK client (configured from the environment) and registers
two tools. Each dispatches on the `entity` argument to the matching entity in
the sibling Go SDK at `../go`, calls `List` or `Load`, unwraps the `Entity`
wrappers to plain data, and returns it as pretty-printed JSON.

### Why two transports

**stdio** is the standard for agent hosts that spawn a server per client
(Claude Code's `claude mcp add`). **streamable HTTP** keeps one process running
that many agents can share — handy for a long-lived deployment.

### Schema generation

The input schema is derived from the `Args` Go struct's `json` / `jsonschema`
tags at registration time, so the advertised tool schema can never drift from
the code that consumes it.

## Generated by

sdkgen `go-mcp` target. See the target source under `.sdk/src/cmp/go-mcp/` in
this repo, or upstream at
`github.com/voxgig/sdkgen/project/.sdk/src/cmp/go-mcp/`.
