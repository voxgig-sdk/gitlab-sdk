# Gitlab Lua SDK



The Lua SDK for the Gitlab API — an entity-oriented client using Lua conventions.

It exposes the API as capitalised, semantic **Entities** — e.g. `client:ApiEntitiesProjectWithAccess()` — each with the same small set of operations (`list`, `load`, `create`, `update`, `remove`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to LuaRocks. Install it from the
GitHub release tag (`lua/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/gitlab-sdk/releases)),
or add the source directory to your `LUA_PATH`:

```bash
export LUA_PATH="path/to/lua/?.lua;path/to/lua/?/init.lua;;"
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```lua
local sdk = require("gitlab_sdk")

local client = sdk.new({
  apikey = os.getenv("GITLAB_APIKEY"),
})
```

### 3. Load an apientitiesprojectwithaccess

```lua
local apientitiesprojectwithaccess, err = client:ApiEntitiesProjectWithAccess():load({ id = "example_id" })
if err then error(err) end
print(apientitiesprojectwithaccess)
```


## Error handling

Entity operations return `(value, err)`. Check `err` before using
the value:

```lua
local apientitiesprojectwithaccess, err = client:ApiEntitiesProjectWithAccess():load({ id = "example_id" })
if err then error(err) end
```

`direct` follows the same `(value, err)` convention:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example_id" },
})
if err then error(err) end
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
if err then error(err) end

if result["ok"] then
  print(result["status"])  -- 200
  print(result["data"])    -- response body
end
```

### Prepare a request without sending it

```lua
local fetchdef, err = client:prepare({
  path = "/api/resource/{id}",
  method = "DELETE",
  params = { id = "example" },
})
if err then error(err) end

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```lua
local client = sdk.test()

local result, err = client:ApiEntitiesProjectWithAccess():load({ id = "test01" })
-- result is the returned data; err is set on failure
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```lua
local function mock_fetch(url, init)
  return {
    status = 200,
    statusText = "OK",
    headers = {},
    json = function()
      return { id = "mock01" }
    end,
  }, nil
end

local client = sdk.new({
  base = "http://localhost:8080",
  system = {
    fetch = mock_fetch,
  },
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
GITLAB_TEST_LIVE=TRUE
GITLAB_APIKEY=<your-key>
```

Then run:

```bash
cd lua && busted test/
```


## Reference

### GitlabSDK

```lua
local sdk = require("gitlab_sdk")
local client = sdk.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `table` | Feature activation flags. |
| `extend` | `table` | Additional Feature instances to load. |
| `system` | `table` | System overrides (e.g. custom `fetch` function). |

### test

```lua
local client = sdk.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### GitlabSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> table` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> table, err` | Build an HTTP request definition without sending. |
| `direct` | `(fetchargs) -> table, err` | Build and send an HTTP request. |
| `ApiEntitiesProjectWithAccess` | `(data) -> ApiEntitiesProjectWithAccessEntity` | Create an ApiEntitiesProjectWithAccess entity instance. |
| `Project` | `(data) -> ProjectEntity` | Create a Project entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> any, err` | Load a single entity by match criteria. |
| `list` | `(reqmatch, ctrl) -> any, err` | List entities matching the criteria. |
| `create` | `(reqdata, ctrl) -> any, err` | Create a new entity. |
| `update` | `(reqdata, ctrl) -> any, err` | Update an existing entity. |
| `remove` | `(reqmatch, ctrl) -> any, err` | Remove an entity. |
| `data_get` | `() -> table` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> table` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> string` | Return the entity name. |

### Result shape

Entity operations return `(value, err)`. The `value` is the operation's
data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `load` / `create` / `update` / `remove` | the entity record (a `table`) |
| `list` | an array (`table`) of entity records |

Check `err` first (it is non-`nil` on failure), then use `value`:

    local api_entities_project_with_access, err = client:ApiEntitiesProjectWithAccess():load({ id = "example_id" })
    if err then error(err) end
    -- api_entities_project_with_access is the loaded record

Only `direct()` returns a response envelope — a `table` with `ok`,
`status`, `headers`, and `data` keys.

### Entities

#### ApiEntitiesProjectWithAccess

| Field | Description |
| --- | --- |
| `allow_merge_on_skipped_pipeline` |  |
| `allow_pipeline_trigger_approve_deployment` |  |
| `analytics_access_level` |  |
| `approvals_before_merge` |  |
| `archived` |  |
| `auto_cancel_pending_pipelines` |  |
| `auto_devops_deploy_strategy` |  |
| `auto_devops_enabled` |  |
| `auto_duo_code_review_enabled` |  |
| `autoclose_referenced_issues` |  |
| `avatar_url` |  |
| `build_git_strategy` |  |
| `build_timeout` |  |
| `builds_access_level` |  |
| `can_create_merge_request_in` |  |
| `ci_allow_fork_pipelines_to_run_in_parent_project` |  |
| `ci_config_path` |  |
| `ci_default_git_depth` |  |
| `ci_delete_pipelines_in_seconds` |  |
| `ci_forward_deployment_enabled` |  |
| `ci_forward_deployment_rollback_allowed` |  |
| `ci_id_token_sub_claim_components` |  |
| `ci_job_token_scope_enabled` |  |
| `ci_pipeline_variables_minimum_override_role` |  |
| `ci_push_repository_for_job_token_allowed` |  |
| `ci_restrict_pipeline_cancellation_role` |  |
| `ci_separated_caches` |  |
| `compliance_frameworks` |  |
| `container_expiration_policy` |  |
| `container_registry_access_level` |  |
| `container_registry_enabled` |  |
| `container_registry_image_prefix` |  |
| `created_at` |  |
| `creator_id` |  |
| `custom_attributes` | API_Entities_CustomAttribute model |
| `default_branch` |  |
| `description` |  |
| `description_html` |  |
| `duo_remote_flows_enabled` |  |
| `emails_disabled` |  |
| `emails_enabled` |  |
| `empty_repo` |  |
| `enforce_auth_checks_on_uploads` |  |
| `environments_access_level` |  |
| `external_authorization_classification_label` |  |
| `feature_flags_access_level` |  |
| `forked_from_project` | API_Entities_BasicProjectDetails model |
| `forking_access_level` |  |
| `forks_count` |  |
| `group_runners_enabled` |  |
| `http_url_to_repo` |  |
| `id` |  |
| `import_error` |  |
| `import_status` |  |
| `import_type` |  |
| `import_url` |  |
| `infrastructure_access_level` |  |
| `issue_branch_template` |  |
| `issues_access_level` |  |
| `issues_enabled` |  |
| `issues_template` |  |
| `jobs_enabled` |  |
| `keep_latest_artifact` |  |
| `last_activity_at` |  |
| `lfs_enabled` |  |
| `license` |  |
| `license_url` |  |
| `links` |  |
| `marked_for_deletion_at` |  |
| `marked_for_deletion_on` |  |
| `max_artifacts_size` |  |
| `merge_commit_template` |  |
| `merge_method` |  |
| `merge_pipelines_enabled` |  |
| `merge_request_title_regex` |  |
| `merge_request_title_regex_description` |  |
| `merge_requests_access_level` |  |
| `merge_requests_enabled` |  |
| `merge_requests_template` |  |
| `merge_trains_enabled` |  |
| `merge_trains_skip_train_allowed` |  |
| `mirror` |  |
| `mirror_overwrites_diverged_branches` |  |
| `mirror_trigger_builds` |  |
| `mirror_user_id` |  |
| `model_experiments_access_level` |  |
| `model_registry_access_level` |  |
| `monitor_access_level` |  |
| `mr_default_target_self` |  |
| `name` |  |
| `name_with_namespace` |  |
| `namespace` |  |
| `only_allow_merge_if_all_discussions_are_resolved` |  |
| `only_allow_merge_if_all_status_checks_passed` |  |
| `only_allow_merge_if_pipeline_succeeds` |  |
| `only_mirror_protected_branches` |  |
| `open_issues_count` |  |
| `owner` | API_Entities_UserBasic model |
| `package_registry_access_level` |  |
| `packages_enabled` |  |
| `pages_access_level` |  |
| `path` |  |
| `path_with_namespace` |  |
| `permissions` |  |
| `pre_receive_secret_detection_enabled` |  |
| `prevent_merge_without_jira_issue` |  |
| `printing_merge_request_link_enabled` |  |
| `public_jobs` |  |
| `readme_url` |  |
| `releases_access_level` |  |
| `remove_source_branch_after_merge` |  |
| `repository_access_level` |  |
| `repository_object_format` |  |
| `repository_storage` |  |
| `request_access_enabled` |  |
| `requirements_access_level` |  |
| `requirements_enabled` |  |
| `resolve_outdated_diff_discussions` |  |
| `resource_group_default_process_mode` |  |
| `restrict_user_defined_variables` |  |
| `runner_token_expiration_interval` |  |
| `runners_token` |  |
| `secret_push_protection_enabled` |  |
| `security_and_compliance_access_level` |  |
| `security_and_compliance_enabled` |  |
| `service_desk_address` |  |
| `service_desk_enabled` |  |
| `shared_runners_enabled` |  |
| `shared_with_groups` |  |
| `show_diff_preview_in_email` |  |
| `snippets_access_level` |  |
| `snippets_enabled` |  |
| `spp_repository_pipeline_access` | The spp_repository_pipeline_access setting is only visible if the security_orchestration_policies feature is available. |
| `squash_commit_template` |  |
| `squash_option` |  |
| `ssh_url_to_repo` |  |
| `star_count` |  |
| `statistics` |  |
| `suggestion_commit_message` |  |
| `tag_list` |  |
| `topics` |  |
| `updated_at` |  |
| `visibility` |  |
| `warn_about_potentially_unwanted_characters` |  |
| `web_based_commit_signing_enabled` |  |
| `web_url` |  |
| `wiki_access_level` |  |
| `wiki_enabled` |  |

Operations: Load.

API path: `/api/v4/projects/{id}`

#### Project

| Field | Description |
| --- | --- |
| `allow_merge_on_skipped_pipeline` |  |
| `allow_pipeline_trigger_approve_deployment` |  |
| `analytics_access_level` |  |
| `approvals_before_merge` |  |
| `archived` |  |
| `auto_cancel_pending_pipelines` |  |
| `auto_devops_deploy_strategy` |  |
| `auto_devops_enabled` |  |
| `auto_duo_code_review_enabled` |  |
| `autoclose_referenced_issues` |  |
| `avatar_url` |  |
| `build_git_strategy` |  |
| `build_timeout` |  |
| `builds_access_level` |  |
| `can_create_merge_request_in` |  |
| `ci_allow_fork_pipelines_to_run_in_parent_project` |  |
| `ci_config_path` |  |
| `ci_default_git_depth` |  |
| `ci_delete_pipelines_in_seconds` |  |
| `ci_forward_deployment_enabled` |  |
| `ci_forward_deployment_rollback_allowed` |  |
| `ci_id_token_sub_claim_components` |  |
| `ci_job_token_scope_enabled` |  |
| `ci_pipeline_variables_minimum_override_role` |  |
| `ci_push_repository_for_job_token_allowed` |  |
| `ci_restrict_pipeline_cancellation_role` |  |
| `ci_separated_caches` |  |
| `compliance_frameworks` |  |
| `container_expiration_policy` |  |
| `container_registry_access_level` |  |
| `container_registry_enabled` |  |
| `container_registry_image_prefix` |  |
| `created_at` |  |
| `creator_id` |  |
| `custom_attributes` | API_Entities_CustomAttribute model |
| `default_branch` |  |
| `description` |  |
| `description_html` |  |
| `duo_remote_flows_enabled` |  |
| `emails_disabled` |  |
| `emails_enabled` |  |
| `empty_repo` |  |
| `enforce_auth_checks_on_uploads` |  |
| `environments_access_level` |  |
| `external_authorization_classification_label` |  |
| `feature_flags_access_level` |  |
| `forked_from_project` | API_Entities_BasicProjectDetails model |
| `forking_access_level` |  |
| `forks_count` |  |
| `group_runners_enabled` |  |
| `http_url_to_repo` |  |
| `id` |  |
| `import_error` |  |
| `import_status` |  |
| `import_type` |  |
| `import_url` |  |
| `infrastructure_access_level` |  |
| `issue_branch_template` |  |
| `issues_access_level` |  |
| `issues_enabled` |  |
| `issues_template` |  |
| `jobs_enabled` |  |
| `keep_latest_artifact` |  |
| `last_activity_at` |  |
| `lfs_enabled` |  |
| `license` |  |
| `license_url` |  |
| `links` |  |
| `marked_for_deletion_at` |  |
| `marked_for_deletion_on` |  |
| `max_artifacts_size` |  |
| `merge_commit_template` |  |
| `merge_method` |  |
| `merge_pipelines_enabled` |  |
| `merge_request_title_regex` |  |
| `merge_request_title_regex_description` |  |
| `merge_requests_access_level` |  |
| `merge_requests_enabled` |  |
| `merge_requests_template` |  |
| `merge_trains_enabled` |  |
| `merge_trains_skip_train_allowed` |  |
| `mirror` |  |
| `mirror_overwrites_diverged_branches` |  |
| `mirror_trigger_builds` |  |
| `mirror_user_id` |  |
| `model_experiments_access_level` |  |
| `model_registry_access_level` |  |
| `monitor_access_level` |  |
| `mr_default_target_self` |  |
| `name` |  |
| `name_with_namespace` |  |
| `namespace` |  |
| `only_allow_merge_if_all_discussions_are_resolved` |  |
| `only_allow_merge_if_all_status_checks_passed` |  |
| `only_allow_merge_if_pipeline_succeeds` |  |
| `only_mirror_protected_branches` |  |
| `open_issues_count` |  |
| `owner` | API_Entities_UserBasic model |
| `package_registry_access_level` |  |
| `packages_enabled` |  |
| `pages_access_level` |  |
| `path` |  |
| `path_with_namespace` |  |
| `pre_receive_secret_detection_enabled` |  |
| `prevent_merge_without_jira_issue` |  |
| `printing_merge_request_link_enabled` |  |
| `public_jobs` |  |
| `readme_url` |  |
| `releases_access_level` |  |
| `remove_source_branch_after_merge` |  |
| `repository_access_level` |  |
| `repository_object_format` |  |
| `repository_storage` |  |
| `request_access_enabled` |  |
| `requirements_access_level` |  |
| `requirements_enabled` |  |
| `resolve_outdated_diff_discussions` |  |
| `resource_group_default_process_mode` |  |
| `restrict_user_defined_variables` |  |
| `runner_token_expiration_interval` |  |
| `runners_token` |  |
| `secret_push_protection_enabled` |  |
| `security_and_compliance_access_level` |  |
| `security_and_compliance_enabled` |  |
| `service_desk_address` |  |
| `service_desk_enabled` |  |
| `shared_runners_enabled` |  |
| `shared_with_groups` |  |
| `show_diff_preview_in_email` |  |
| `snippets_access_level` |  |
| `snippets_enabled` |  |
| `spp_repository_pipeline_access` | The spp_repository_pipeline_access setting is only visible if the security_orchestration_policies feature is available. |
| `squash_commit_template` |  |
| `squash_option` |  |
| `ssh_url_to_repo` |  |
| `star_count` |  |
| `statistics` |  |
| `suggestion_commit_message` |  |
| `tag_list` |  |
| `topics` |  |
| `updated_at` |  |
| `visibility` |  |
| `warn_about_potentially_unwanted_characters` |  |
| `web_based_commit_signing_enabled` |  |
| `web_url` |  |
| `wiki_access_level` |  |
| `wiki_enabled` |  |

Operations: Create, List, Remove, Update.

API path: `/api/v4/projects`



## Entities


### ApiEntitiesProjectWithAccess

Create an instance: `local api_entities_project_with_access = client:ApiEntitiesProjectWithAccess(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_merge_on_skipped_pipeline` | `boolean` |  |
| `allow_pipeline_trigger_approve_deployment` | `boolean` |  |
| `analytics_access_level` | `string` |  |
| `approvals_before_merge` | `string` |  |
| `archived` | `boolean` |  |
| `auto_cancel_pending_pipelines` | `string` |  |
| `auto_devops_deploy_strategy` | `string` |  |
| `auto_devops_enabled` | `boolean` |  |
| `auto_duo_code_review_enabled` | `string` |  |
| `autoclose_referenced_issues` | `boolean` |  |
| `avatar_url` | `string` |  |
| `build_git_strategy` | `string` |  |
| `build_timeout` | `number` |  |
| `builds_access_level` | `string` |  |
| `can_create_merge_request_in` | `boolean` |  |
| `ci_allow_fork_pipelines_to_run_in_parent_project` | `boolean` |  |
| `ci_config_path` | `string` |  |
| `ci_default_git_depth` | `number` |  |
| `ci_delete_pipelines_in_seconds` | `number` |  |
| `ci_forward_deployment_enabled` | `boolean` |  |
| `ci_forward_deployment_rollback_allowed` | `boolean` |  |
| `ci_id_token_sub_claim_components` | `table` |  |
| `ci_job_token_scope_enabled` | `boolean` |  |
| `ci_pipeline_variables_minimum_override_role` | `string` |  |
| `ci_push_repository_for_job_token_allowed` | `boolean` |  |
| `ci_restrict_pipeline_cancellation_role` | `string` |  |
| `ci_separated_caches` | `boolean` |  |
| `compliance_frameworks` | `string` |  |
| `container_expiration_policy` | `table` |  |
| `container_registry_access_level` | `string` |  |
| `container_registry_enabled` | `boolean` |  |
| `container_registry_image_prefix` | `string` |  |
| `created_at` | `string` |  |
| `creator_id` | `number` |  |
| `custom_attributes` | `table` | API_Entities_CustomAttribute model |
| `default_branch` | `string` |  |
| `description` | `string` |  |
| `description_html` | `string` |  |
| `duo_remote_flows_enabled` | `string` |  |
| `emails_disabled` | `boolean` |  |
| `emails_enabled` | `boolean` |  |
| `empty_repo` | `boolean` |  |
| `enforce_auth_checks_on_uploads` | `boolean` |  |
| `environments_access_level` | `string` |  |
| `external_authorization_classification_label` | `string` |  |
| `feature_flags_access_level` | `string` |  |
| `forked_from_project` | `table` | API_Entities_BasicProjectDetails model |
| `forking_access_level` | `string` |  |
| `forks_count` | `number` |  |
| `group_runners_enabled` | `boolean` |  |
| `http_url_to_repo` | `string` |  |
| `id` | `number` |  |
| `import_error` | `string` |  |
| `import_status` | `string` |  |
| `import_type` | `string` |  |
| `import_url` | `string` |  |
| `infrastructure_access_level` | `string` |  |
| `issue_branch_template` | `string` |  |
| `issues_access_level` | `string` |  |
| `issues_enabled` | `boolean` |  |
| `issues_template` | `string` |  |
| `jobs_enabled` | `boolean` |  |
| `keep_latest_artifact` | `boolean` |  |
| `last_activity_at` | `string` |  |
| `lfs_enabled` | `boolean` |  |
| `license` | `table` |  |
| `license_url` | `string` |  |
| `links` | `table` |  |
| `marked_for_deletion_at` | `string` |  |
| `marked_for_deletion_on` | `string` |  |
| `max_artifacts_size` | `number` |  |
| `merge_commit_template` | `string` |  |
| `merge_method` | `string` |  |
| `merge_pipelines_enabled` | `string` |  |
| `merge_request_title_regex` | `string` |  |
| `merge_request_title_regex_description` | `string` |  |
| `merge_requests_access_level` | `string` |  |
| `merge_requests_enabled` | `boolean` |  |
| `merge_requests_template` | `string` |  |
| `merge_trains_enabled` | `string` |  |
| `merge_trains_skip_train_allowed` | `string` |  |
| `mirror` | `string` |  |
| `mirror_overwrites_diverged_branches` | `string` |  |
| `mirror_trigger_builds` | `string` |  |
| `mirror_user_id` | `string` |  |
| `model_experiments_access_level` | `string` |  |
| `model_registry_access_level` | `string` |  |
| `monitor_access_level` | `string` |  |
| `mr_default_target_self` | `boolean` |  |
| `name` | `string` |  |
| `name_with_namespace` | `string` |  |
| `namespace` | `table` |  |
| `only_allow_merge_if_all_discussions_are_resolved` | `boolean` |  |
| `only_allow_merge_if_all_status_checks_passed` | `string` |  |
| `only_allow_merge_if_pipeline_succeeds` | `boolean` |  |
| `only_mirror_protected_branches` | `string` |  |
| `open_issues_count` | `number` |  |
| `owner` | `table` | API_Entities_UserBasic model |
| `package_registry_access_level` | `string` |  |
| `packages_enabled` | `boolean` |  |
| `pages_access_level` | `string` |  |
| `path` | `string` |  |
| `path_with_namespace` | `string` |  |
| `permissions` | `table` |  |
| `pre_receive_secret_detection_enabled` | `boolean` |  |
| `prevent_merge_without_jira_issue` | `string` |  |
| `printing_merge_request_link_enabled` | `boolean` |  |
| `public_jobs` | `boolean` |  |
| `readme_url` | `string` |  |
| `releases_access_level` | `string` |  |
| `remove_source_branch_after_merge` | `boolean` |  |
| `repository_access_level` | `string` |  |
| `repository_object_format` | `string` |  |
| `repository_storage` | `string` |  |
| `request_access_enabled` | `boolean` |  |
| `requirements_access_level` | `string` |  |
| `requirements_enabled` | `string` |  |
| `resolve_outdated_diff_discussions` | `boolean` |  |
| `resource_group_default_process_mode` | `string` |  |
| `restrict_user_defined_variables` | `boolean` |  |
| `runner_token_expiration_interval` | `number` |  |
| `runners_token` | `string` |  |
| `secret_push_protection_enabled` | `boolean` |  |
| `security_and_compliance_access_level` | `string` |  |
| `security_and_compliance_enabled` | `string` |  |
| `service_desk_address` | `string` |  |
| `service_desk_enabled` | `boolean` |  |
| `shared_runners_enabled` | `boolean` |  |
| `shared_with_groups` | `table` |  |
| `show_diff_preview_in_email` | `boolean` |  |
| `snippets_access_level` | `string` |  |
| `snippets_enabled` | `boolean` |  |
| `spp_repository_pipeline_access` | `boolean` | The spp_repository_pipeline_access setting is only visible if the security_orchestration_policies feature is available. |
| `squash_commit_template` | `string` |  |
| `squash_option` | `string` |  |
| `ssh_url_to_repo` | `string` |  |
| `star_count` | `number` |  |
| `statistics` | `table` |  |
| `suggestion_commit_message` | `string` |  |
| `tag_list` | `table` |  |
| `topics` | `table` |  |
| `updated_at` | `string` |  |
| `visibility` | `string` |  |
| `warn_about_potentially_unwanted_characters` | `boolean` |  |
| `web_based_commit_signing_enabled` | `string` |  |
| `web_url` | `string` |  |
| `wiki_access_level` | `string` |  |
| `wiki_enabled` | `boolean` |  |

#### Example: Load

```lua
local api_entities_project_with_access, err = client:ApiEntitiesProjectWithAccess():load({ id = "api_entities_project_with_access_id" })
```


### Project

Create an instance: `local project = client:Project(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_merge_on_skipped_pipeline` | `boolean` |  |
| `allow_pipeline_trigger_approve_deployment` | `boolean` |  |
| `analytics_access_level` | `string` |  |
| `approvals_before_merge` | `string` |  |
| `archived` | `boolean` |  |
| `auto_cancel_pending_pipelines` | `string` |  |
| `auto_devops_deploy_strategy` | `string` |  |
| `auto_devops_enabled` | `boolean` |  |
| `auto_duo_code_review_enabled` | `string` |  |
| `autoclose_referenced_issues` | `boolean` |  |
| `avatar_url` | `string` |  |
| `build_git_strategy` | `string` |  |
| `build_timeout` | `number` |  |
| `builds_access_level` | `string` |  |
| `can_create_merge_request_in` | `boolean` |  |
| `ci_allow_fork_pipelines_to_run_in_parent_project` | `boolean` |  |
| `ci_config_path` | `string` |  |
| `ci_default_git_depth` | `number` |  |
| `ci_delete_pipelines_in_seconds` | `number` |  |
| `ci_forward_deployment_enabled` | `boolean` |  |
| `ci_forward_deployment_rollback_allowed` | `boolean` |  |
| `ci_id_token_sub_claim_components` | `table` |  |
| `ci_job_token_scope_enabled` | `boolean` |  |
| `ci_pipeline_variables_minimum_override_role` | `string` |  |
| `ci_push_repository_for_job_token_allowed` | `boolean` |  |
| `ci_restrict_pipeline_cancellation_role` | `string` |  |
| `ci_separated_caches` | `boolean` |  |
| `compliance_frameworks` | `string` |  |
| `container_expiration_policy` | `table` |  |
| `container_registry_access_level` | `string` |  |
| `container_registry_enabled` | `boolean` |  |
| `container_registry_image_prefix` | `string` |  |
| `created_at` | `string` |  |
| `creator_id` | `number` |  |
| `custom_attributes` | `table` | API_Entities_CustomAttribute model |
| `default_branch` | `string` |  |
| `description` | `string` |  |
| `description_html` | `string` |  |
| `duo_remote_flows_enabled` | `string` |  |
| `emails_disabled` | `boolean` |  |
| `emails_enabled` | `boolean` |  |
| `empty_repo` | `boolean` |  |
| `enforce_auth_checks_on_uploads` | `boolean` |  |
| `environments_access_level` | `string` |  |
| `external_authorization_classification_label` | `string` |  |
| `feature_flags_access_level` | `string` |  |
| `forked_from_project` | `table` | API_Entities_BasicProjectDetails model |
| `forking_access_level` | `string` |  |
| `forks_count` | `number` |  |
| `group_runners_enabled` | `boolean` |  |
| `http_url_to_repo` | `string` |  |
| `id` | `number` |  |
| `import_error` | `string` |  |
| `import_status` | `string` |  |
| `import_type` | `string` |  |
| `import_url` | `string` |  |
| `infrastructure_access_level` | `string` |  |
| `issue_branch_template` | `string` |  |
| `issues_access_level` | `string` |  |
| `issues_enabled` | `boolean` |  |
| `issues_template` | `string` |  |
| `jobs_enabled` | `boolean` |  |
| `keep_latest_artifact` | `boolean` |  |
| `last_activity_at` | `string` |  |
| `lfs_enabled` | `boolean` |  |
| `license` | `table` |  |
| `license_url` | `string` |  |
| `links` | `table` |  |
| `marked_for_deletion_at` | `string` |  |
| `marked_for_deletion_on` | `string` |  |
| `max_artifacts_size` | `number` |  |
| `merge_commit_template` | `string` |  |
| `merge_method` | `string` |  |
| `merge_pipelines_enabled` | `string` |  |
| `merge_request_title_regex` | `string` |  |
| `merge_request_title_regex_description` | `string` |  |
| `merge_requests_access_level` | `string` |  |
| `merge_requests_enabled` | `boolean` |  |
| `merge_requests_template` | `string` |  |
| `merge_trains_enabled` | `string` |  |
| `merge_trains_skip_train_allowed` | `string` |  |
| `mirror` | `string` |  |
| `mirror_overwrites_diverged_branches` | `string` |  |
| `mirror_trigger_builds` | `string` |  |
| `mirror_user_id` | `string` |  |
| `model_experiments_access_level` | `string` |  |
| `model_registry_access_level` | `string` |  |
| `monitor_access_level` | `string` |  |
| `mr_default_target_self` | `boolean` |  |
| `name` | `string` |  |
| `name_with_namespace` | `string` |  |
| `namespace` | `table` |  |
| `only_allow_merge_if_all_discussions_are_resolved` | `boolean` |  |
| `only_allow_merge_if_all_status_checks_passed` | `string` |  |
| `only_allow_merge_if_pipeline_succeeds` | `boolean` |  |
| `only_mirror_protected_branches` | `string` |  |
| `open_issues_count` | `number` |  |
| `owner` | `table` | API_Entities_UserBasic model |
| `package_registry_access_level` | `string` |  |
| `packages_enabled` | `boolean` |  |
| `pages_access_level` | `string` |  |
| `path` | `string` |  |
| `path_with_namespace` | `string` |  |
| `pre_receive_secret_detection_enabled` | `boolean` |  |
| `prevent_merge_without_jira_issue` | `string` |  |
| `printing_merge_request_link_enabled` | `boolean` |  |
| `public_jobs` | `boolean` |  |
| `readme_url` | `string` |  |
| `releases_access_level` | `string` |  |
| `remove_source_branch_after_merge` | `boolean` |  |
| `repository_access_level` | `string` |  |
| `repository_object_format` | `string` |  |
| `repository_storage` | `string` |  |
| `request_access_enabled` | `boolean` |  |
| `requirements_access_level` | `string` |  |
| `requirements_enabled` | `string` |  |
| `resolve_outdated_diff_discussions` | `boolean` |  |
| `resource_group_default_process_mode` | `string` |  |
| `restrict_user_defined_variables` | `boolean` |  |
| `runner_token_expiration_interval` | `number` |  |
| `runners_token` | `string` |  |
| `secret_push_protection_enabled` | `boolean` |  |
| `security_and_compliance_access_level` | `string` |  |
| `security_and_compliance_enabled` | `string` |  |
| `service_desk_address` | `string` |  |
| `service_desk_enabled` | `boolean` |  |
| `shared_runners_enabled` | `boolean` |  |
| `shared_with_groups` | `table` |  |
| `show_diff_preview_in_email` | `boolean` |  |
| `snippets_access_level` | `string` |  |
| `snippets_enabled` | `boolean` |  |
| `spp_repository_pipeline_access` | `boolean` | The spp_repository_pipeline_access setting is only visible if the security_orchestration_policies feature is available. |
| `squash_commit_template` | `string` |  |
| `squash_option` | `string` |  |
| `ssh_url_to_repo` | `string` |  |
| `star_count` | `number` |  |
| `statistics` | `table` |  |
| `suggestion_commit_message` | `string` |  |
| `tag_list` | `table` |  |
| `topics` | `table` |  |
| `updated_at` | `string` |  |
| `visibility` | `string` |  |
| `warn_about_potentially_unwanted_characters` | `boolean` |  |
| `web_based_commit_signing_enabled` | `string` |  |
| `web_url` | `string` |  |
| `wiki_access_level` | `string` |  |
| `wiki_enabled` | `boolean` |  |

#### Example: List

```lua
local projects, err = client:Project():list()
```

#### Example: Create

```lua
local project, err = client:Project():create({
})
```


## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is a Lua table
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as tables

The Lua SDK uses plain Lua tables throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a table.

### Module structure

```
lua/
├── gitlab_sdk.lua    -- Main SDK module
├── config.lua               -- Configuration
├── features.lua             -- Feature factory
├── core/                    -- Core types and context
├── entity/                  -- Entity implementations
├── feature/                 -- Built-in features (Base, Test, Log)
├── utility/                 -- Utility functions and struct library
└── test/                    -- Test suites
```

The main module (`gitlab_sdk`) exports the SDK constructor
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```lua
local apientitiesprojectwithaccess = client:ApiEntitiesProjectWithAccess()
apientitiesprojectwithaccess:load({ id = "example_id" })

-- apientitiesprojectwithaccess:data_get() now returns the apientitiesprojectwithaccess data from the last load
-- apientitiesprojectwithaccess:match_get() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
