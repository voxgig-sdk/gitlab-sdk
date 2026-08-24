# Gitlab Golang SDK



The Golang SDK for the Gitlab API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

It exposes the API as capitalised, semantic **Entities** — e.g. `client.ApiEntitiesProjectWithAccess(nil)` — each with the same small set of operations (`List`, `Load`, `Create`, `Update`, `Remove`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Also generated from this model: `go-cli`, `go-mcp`, `js`, `lua`, `php`, `py`, `ts` — see
> the [top-level README](../README.md).


## Install
```bash
go get github.com/voxgig-sdk/gitlab-sdk/go@latest
```

The Go module proxy resolves the version from the `go/vX.Y.Z` GitHub
release tag — see [Releases](https://github.com/voxgig-sdk/gitlab-sdk/releases) for the available versions.

To vendor from a local checkout instead, clone this repo alongside your
project and add a `replace` directive pointing at the checked-out
`go/` directory:

```bash
go mod edit -replace github.com/voxgig-sdk/gitlab-sdk/go=../gitlab-sdk/go
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### Quickstart

A complete program: create a client, then call the entity operations.
Each operation returns `(value, error)` — the value is the data itself
(there is no `{ok, data}` wrapper), so check `err` and use the value
directly.

```go
package main

import (
    "fmt"
    "os"
    sdk "github.com/voxgig-sdk/gitlab-sdk/go"
)

func main() {
    client := sdk.NewGitlabSDK(map[string]any{
        "apikey": os.Getenv("GITLAB_APIKEY"),
    })

    // Load a single apiEntitiesProjectWithAccess — the value is the loaded record.
    apiEntitiesProjectWithAccess, err := client.ApiEntitiesProjectWithAccess(nil).Load(map[string]any{"id": "example_id"}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(apiEntitiesProjectWithAccess)
}
```


## Error handling

Every entity operation returns `(value, error)`. Check `err` before
using the value — there is no exception to catch:

```go
apientitiesprojectwithaccess, err := client.ApiEntitiesProjectWithAccess(nil).Load(map[string]any{"id": "example_id"}, nil)
if err != nil {
    // handle err
    return
}
_ = apientitiesprojectwithaccess
```

`Direct` follows the same `(value, error)` convention:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example_id"},
})
if err != nil {
    // handle err
}
_ = result
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

if result["ok"] == true {
    fmt.Println(result["status"]) // 200
    fmt.Println(result["data"])   // response body
}
```

### Prepare a request without sending it

```go
fetchdef, err := client.Prepare(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "DELETE",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

fmt.Println(fetchdef["url"])
fmt.Println(fetchdef["method"])
fmt.Println(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```go
client := sdk.Test()

apiEntitiesProjectWithAccess, err := client.ApiEntitiesProjectWithAccess(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesProjectWithAccess) // the returned mock data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```go
mockFetch := func(url string, init map[string]any) (map[string]any, error) {
    return map[string]any{
        "status":     200,
        "statusText": "OK",
        "headers":    map[string]any{},
        "json": (func() any)(func() any {
            return map[string]any{"id": "mock01"}
        }),
    }, nil
}

client := sdk.NewGitlabSDK(map[string]any{
    "base": "http://localhost:8080",
    "system": map[string]any{
        "fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
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
cd go && go test ./test/...
```


## Reference

### NewGitlabSDK

```go
func NewGitlabSDK(options map[string]any) *GitlabSDK
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `"apikey"` | `string` | API key for authentication. |
| `"base"` | `string` | Base URL of the API server. |
| `"prefix"` | `string` | URL path prefix prepended to all requests. |
| `"suffix"` | `string` | URL path suffix appended to all requests. |
| `"feature"` | `map[string]any` | Feature activation flags. |
| `"extend"` | `[]any` | Additional Feature instances to load. |
| `"system"` | `map[string]any` | System overrides (e.g. custom `"fetch"` function). |

### TestSDK

```go
func TestSDK(testopts map[string]any, sdkopts map[string]any) *GitlabSDK
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### GitlabSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `OptionsMap` | `() map[string]any` | Deep copy of current SDK options. |
| `GetUtility` | `() *Utility` | Copy of the SDK utility object. |
| `Prepare` | `(fetchargs map[string]any) (map[string]any, error)` | Build an HTTP request definition without sending. |
| `Direct` | `(fetchargs map[string]any) (map[string]any, error)` | Build and send an HTTP request. |
| `ApiEntitiesProjectWithAccess` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesProjectWithAccess entity instance. |
| `Project` | `(data map[string]any) GitlabEntity` | Create a Project entity instance. |

### Entity interface (GitlabEntity)

All entities implement the `GitlabEntity` interface.

| Method | Signature | Description |
| --- | --- | --- |
| `Load` | `(reqmatch, ctrl map[string]any) (any, error)` | Load a single entity by match criteria. |
| `List` | `(reqmatch, ctrl map[string]any) (any, error)` | List entities matching the criteria. |
| `Create` | `(reqdata, ctrl map[string]any) (any, error)` | Create a new entity. |
| `Update` | `(reqdata, ctrl map[string]any) (any, error)` | Update an existing entity. |
| `Remove` | `(reqmatch, ctrl map[string]any) (any, error)` | Remove an entity. |
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(value, error)`. The `value` is the
operation's data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `Load` / `Create` / `Update` / `Remove` | the entity record (`map[string]any`) |
| `List` | a `[]any` of entity records |

Check `err` first, then use the value directly (or the typed
`...Typed` variants, which return the entity's model struct and a typed
slice):

    apiEntitiesProjectWithAccess, err := client.ApiEntitiesProjectWithAccess(nil).Load(map[string]any{"id": "example_id"}, nil)
    if err != nil { /* handle */ }
    // apiEntitiesProjectWithAccess is the returned record

Only `Direct()` returns a response envelope — a `map[string]any` with
`"ok"`, `"status"`, `"headers"`, and `"data"` keys.

### Entities

#### ApiEntitiesProjectWithAccess

| Field | Description |
| --- | --- |
| `"allow_merge_on_skipped_pipeline"` |  |
| `"allow_pipeline_trigger_approve_deployment"` |  |
| `"analytics_access_level"` |  |
| `"approvals_before_merge"` |  |
| `"archived"` |  |
| `"auto_cancel_pending_pipelines"` |  |
| `"auto_devops_deploy_strategy"` |  |
| `"auto_devops_enabled"` |  |
| `"auto_duo_code_review_enabled"` |  |
| `"autoclose_referenced_issues"` |  |
| `"avatar_url"` |  |
| `"build_git_strategy"` |  |
| `"build_timeout"` |  |
| `"builds_access_level"` |  |
| `"can_create_merge_request_in"` |  |
| `"ci_allow_fork_pipelines_to_run_in_parent_project"` |  |
| `"ci_config_path"` |  |
| `"ci_default_git_depth"` |  |
| `"ci_delete_pipelines_in_seconds"` |  |
| `"ci_forward_deployment_enabled"` |  |
| `"ci_forward_deployment_rollback_allowed"` |  |
| `"ci_id_token_sub_claim_components"` |  |
| `"ci_job_token_scope_enabled"` |  |
| `"ci_pipeline_variables_minimum_override_role"` |  |
| `"ci_push_repository_for_job_token_allowed"` |  |
| `"ci_restrict_pipeline_cancellation_role"` |  |
| `"ci_separated_caches"` |  |
| `"compliance_frameworks"` |  |
| `"container_expiration_policy"` |  |
| `"container_registry_access_level"` |  |
| `"container_registry_enabled"` |  |
| `"container_registry_image_prefix"` |  |
| `"created_at"` |  |
| `"creator_id"` |  |
| `"custom_attributes"` | API_Entities_CustomAttribute model |
| `"default_branch"` |  |
| `"description"` |  |
| `"description_html"` |  |
| `"duo_remote_flows_enabled"` |  |
| `"emails_disabled"` |  |
| `"emails_enabled"` |  |
| `"empty_repo"` |  |
| `"enforce_auth_checks_on_uploads"` |  |
| `"environments_access_level"` |  |
| `"external_authorization_classification_label"` |  |
| `"feature_flags_access_level"` |  |
| `"forked_from_project"` | API_Entities_BasicProjectDetails model |
| `"forking_access_level"` |  |
| `"forks_count"` |  |
| `"group_runners_enabled"` |  |
| `"http_url_to_repo"` |  |
| `"id"` |  |
| `"import_error"` |  |
| `"import_status"` |  |
| `"import_type"` |  |
| `"import_url"` |  |
| `"infrastructure_access_level"` |  |
| `"issue_branch_template"` |  |
| `"issues_access_level"` |  |
| `"issues_enabled"` |  |
| `"issues_template"` |  |
| `"jobs_enabled"` |  |
| `"keep_latest_artifact"` |  |
| `"last_activity_at"` |  |
| `"lfs_enabled"` |  |
| `"license"` |  |
| `"license_url"` |  |
| `"links"` |  |
| `"marked_for_deletion_at"` |  |
| `"marked_for_deletion_on"` |  |
| `"max_artifacts_size"` |  |
| `"merge_commit_template"` |  |
| `"merge_method"` |  |
| `"merge_pipelines_enabled"` |  |
| `"merge_request_title_regex"` |  |
| `"merge_request_title_regex_description"` |  |
| `"merge_requests_access_level"` |  |
| `"merge_requests_enabled"` |  |
| `"merge_requests_template"` |  |
| `"merge_trains_enabled"` |  |
| `"merge_trains_skip_train_allowed"` |  |
| `"mirror"` |  |
| `"mirror_overwrites_diverged_branches"` |  |
| `"mirror_trigger_builds"` |  |
| `"mirror_user_id"` |  |
| `"model_experiments_access_level"` |  |
| `"model_registry_access_level"` |  |
| `"monitor_access_level"` |  |
| `"mr_default_target_self"` |  |
| `"name"` |  |
| `"name_with_namespace"` |  |
| `"namespace"` |  |
| `"only_allow_merge_if_all_discussions_are_resolved"` |  |
| `"only_allow_merge_if_all_status_checks_passed"` |  |
| `"only_allow_merge_if_pipeline_succeeds"` |  |
| `"only_mirror_protected_branches"` |  |
| `"open_issues_count"` |  |
| `"owner"` | API_Entities_UserBasic model |
| `"package_registry_access_level"` |  |
| `"packages_enabled"` |  |
| `"pages_access_level"` |  |
| `"path"` |  |
| `"path_with_namespace"` |  |
| `"permissions"` |  |
| `"pre_receive_secret_detection_enabled"` |  |
| `"prevent_merge_without_jira_issue"` |  |
| `"printing_merge_request_link_enabled"` |  |
| `"public_jobs"` |  |
| `"readme_url"` |  |
| `"releases_access_level"` |  |
| `"remove_source_branch_after_merge"` |  |
| `"repository_access_level"` |  |
| `"repository_object_format"` |  |
| `"repository_storage"` |  |
| `"request_access_enabled"` |  |
| `"requirements_access_level"` |  |
| `"requirements_enabled"` |  |
| `"resolve_outdated_diff_discussions"` |  |
| `"resource_group_default_process_mode"` |  |
| `"restrict_user_defined_variables"` |  |
| `"runner_token_expiration_interval"` |  |
| `"runners_token"` |  |
| `"secret_push_protection_enabled"` |  |
| `"security_and_compliance_access_level"` |  |
| `"security_and_compliance_enabled"` |  |
| `"service_desk_address"` |  |
| `"service_desk_enabled"` |  |
| `"shared_runners_enabled"` |  |
| `"shared_with_groups"` |  |
| `"show_diff_preview_in_email"` |  |
| `"snippets_access_level"` |  |
| `"snippets_enabled"` |  |
| `"spp_repository_pipeline_access"` | The spp_repository_pipeline_access setting is only visible if the security_orchestration_policies feature is available. |
| `"squash_commit_template"` |  |
| `"squash_option"` |  |
| `"ssh_url_to_repo"` |  |
| `"star_count"` |  |
| `"statistics"` |  |
| `"suggestion_commit_message"` |  |
| `"tag_list"` |  |
| `"topics"` |  |
| `"updated_at"` |  |
| `"visibility"` |  |
| `"warn_about_potentially_unwanted_characters"` |  |
| `"web_based_commit_signing_enabled"` |  |
| `"web_url"` |  |
| `"wiki_access_level"` |  |
| `"wiki_enabled"` |  |

Operations: Load.

API path: `/api/v4/projects/{id}`

#### Project

| Field | Description |
| --- | --- |
| `"allow_merge_on_skipped_pipeline"` |  |
| `"allow_pipeline_trigger_approve_deployment"` |  |
| `"analytics_access_level"` |  |
| `"approvals_before_merge"` |  |
| `"archived"` |  |
| `"auto_cancel_pending_pipelines"` |  |
| `"auto_devops_deploy_strategy"` |  |
| `"auto_devops_enabled"` |  |
| `"auto_duo_code_review_enabled"` |  |
| `"autoclose_referenced_issues"` |  |
| `"avatar_url"` |  |
| `"build_git_strategy"` |  |
| `"build_timeout"` |  |
| `"builds_access_level"` |  |
| `"can_create_merge_request_in"` |  |
| `"ci_allow_fork_pipelines_to_run_in_parent_project"` |  |
| `"ci_config_path"` |  |
| `"ci_default_git_depth"` |  |
| `"ci_delete_pipelines_in_seconds"` |  |
| `"ci_forward_deployment_enabled"` |  |
| `"ci_forward_deployment_rollback_allowed"` |  |
| `"ci_id_token_sub_claim_components"` |  |
| `"ci_job_token_scope_enabled"` |  |
| `"ci_pipeline_variables_minimum_override_role"` |  |
| `"ci_push_repository_for_job_token_allowed"` |  |
| `"ci_restrict_pipeline_cancellation_role"` |  |
| `"ci_separated_caches"` |  |
| `"compliance_frameworks"` |  |
| `"container_expiration_policy"` |  |
| `"container_registry_access_level"` |  |
| `"container_registry_enabled"` |  |
| `"container_registry_image_prefix"` |  |
| `"created_at"` |  |
| `"creator_id"` |  |
| `"custom_attributes"` | API_Entities_CustomAttribute model |
| `"default_branch"` |  |
| `"description"` |  |
| `"description_html"` |  |
| `"duo_remote_flows_enabled"` |  |
| `"emails_disabled"` |  |
| `"emails_enabled"` |  |
| `"empty_repo"` |  |
| `"enforce_auth_checks_on_uploads"` |  |
| `"environments_access_level"` |  |
| `"external_authorization_classification_label"` |  |
| `"feature_flags_access_level"` |  |
| `"forked_from_project"` | API_Entities_BasicProjectDetails model |
| `"forking_access_level"` |  |
| `"forks_count"` |  |
| `"group_runners_enabled"` |  |
| `"http_url_to_repo"` |  |
| `"id"` |  |
| `"import_error"` |  |
| `"import_status"` |  |
| `"import_type"` |  |
| `"import_url"` |  |
| `"infrastructure_access_level"` |  |
| `"issue_branch_template"` |  |
| `"issues_access_level"` |  |
| `"issues_enabled"` |  |
| `"issues_template"` |  |
| `"jobs_enabled"` |  |
| `"keep_latest_artifact"` |  |
| `"last_activity_at"` |  |
| `"lfs_enabled"` |  |
| `"license"` |  |
| `"license_url"` |  |
| `"links"` |  |
| `"marked_for_deletion_at"` |  |
| `"marked_for_deletion_on"` |  |
| `"max_artifacts_size"` |  |
| `"merge_commit_template"` |  |
| `"merge_method"` |  |
| `"merge_pipelines_enabled"` |  |
| `"merge_request_title_regex"` |  |
| `"merge_request_title_regex_description"` |  |
| `"merge_requests_access_level"` |  |
| `"merge_requests_enabled"` |  |
| `"merge_requests_template"` |  |
| `"merge_trains_enabled"` |  |
| `"merge_trains_skip_train_allowed"` |  |
| `"mirror"` |  |
| `"mirror_overwrites_diverged_branches"` |  |
| `"mirror_trigger_builds"` |  |
| `"mirror_user_id"` |  |
| `"model_experiments_access_level"` |  |
| `"model_registry_access_level"` |  |
| `"monitor_access_level"` |  |
| `"mr_default_target_self"` |  |
| `"name"` |  |
| `"name_with_namespace"` |  |
| `"namespace"` |  |
| `"only_allow_merge_if_all_discussions_are_resolved"` |  |
| `"only_allow_merge_if_all_status_checks_passed"` |  |
| `"only_allow_merge_if_pipeline_succeeds"` |  |
| `"only_mirror_protected_branches"` |  |
| `"open_issues_count"` |  |
| `"owner"` | API_Entities_UserBasic model |
| `"package_registry_access_level"` |  |
| `"packages_enabled"` |  |
| `"pages_access_level"` |  |
| `"path"` |  |
| `"path_with_namespace"` |  |
| `"pre_receive_secret_detection_enabled"` |  |
| `"prevent_merge_without_jira_issue"` |  |
| `"printing_merge_request_link_enabled"` |  |
| `"public_jobs"` |  |
| `"readme_url"` |  |
| `"releases_access_level"` |  |
| `"remove_source_branch_after_merge"` |  |
| `"repository_access_level"` |  |
| `"repository_object_format"` |  |
| `"repository_storage"` |  |
| `"request_access_enabled"` |  |
| `"requirements_access_level"` |  |
| `"requirements_enabled"` |  |
| `"resolve_outdated_diff_discussions"` |  |
| `"resource_group_default_process_mode"` |  |
| `"restrict_user_defined_variables"` |  |
| `"runner_token_expiration_interval"` |  |
| `"runners_token"` |  |
| `"secret_push_protection_enabled"` |  |
| `"security_and_compliance_access_level"` |  |
| `"security_and_compliance_enabled"` |  |
| `"service_desk_address"` |  |
| `"service_desk_enabled"` |  |
| `"shared_runners_enabled"` |  |
| `"shared_with_groups"` |  |
| `"show_diff_preview_in_email"` |  |
| `"snippets_access_level"` |  |
| `"snippets_enabled"` |  |
| `"spp_repository_pipeline_access"` | The spp_repository_pipeline_access setting is only visible if the security_orchestration_policies feature is available. |
| `"squash_commit_template"` |  |
| `"squash_option"` |  |
| `"ssh_url_to_repo"` |  |
| `"star_count"` |  |
| `"statistics"` |  |
| `"suggestion_commit_message"` |  |
| `"tag_list"` |  |
| `"topics"` |  |
| `"updated_at"` |  |
| `"visibility"` |  |
| `"warn_about_potentially_unwanted_characters"` |  |
| `"web_based_commit_signing_enabled"` |  |
| `"web_url"` |  |
| `"wiki_access_level"` |  |
| `"wiki_enabled"` |  |

Operations: Create, List, Remove, Update.

API path: `/api/v4/projects`



## Entities


### ApiEntitiesProjectWithAccess

Create an instance: `apiEntitiesProjectWithAccess := client.ApiEntitiesProjectWithAccess(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_merge_on_skipped_pipeline` | `bool` |  |
| `allow_pipeline_trigger_approve_deployment` | `bool` |  |
| `analytics_access_level` | `string` |  |
| `approvals_before_merge` | `string` |  |
| `archived` | `bool` |  |
| `auto_cancel_pending_pipelines` | `string` |  |
| `auto_devops_deploy_strategy` | `string` |  |
| `auto_devops_enabled` | `bool` |  |
| `auto_duo_code_review_enabled` | `string` |  |
| `autoclose_referenced_issues` | `bool` |  |
| `avatar_url` | `string` |  |
| `build_git_strategy` | `string` |  |
| `build_timeout` | `int` |  |
| `builds_access_level` | `string` |  |
| `can_create_merge_request_in` | `bool` |  |
| `ci_allow_fork_pipelines_to_run_in_parent_project` | `bool` |  |
| `ci_config_path` | `string` |  |
| `ci_default_git_depth` | `int` |  |
| `ci_delete_pipelines_in_seconds` | `int` |  |
| `ci_forward_deployment_enabled` | `bool` |  |
| `ci_forward_deployment_rollback_allowed` | `bool` |  |
| `ci_id_token_sub_claim_components` | `[]any` |  |
| `ci_job_token_scope_enabled` | `bool` |  |
| `ci_pipeline_variables_minimum_override_role` | `string` |  |
| `ci_push_repository_for_job_token_allowed` | `bool` |  |
| `ci_restrict_pipeline_cancellation_role` | `string` |  |
| `ci_separated_caches` | `bool` |  |
| `compliance_frameworks` | `string` |  |
| `container_expiration_policy` | `map[string]any` |  |
| `container_registry_access_level` | `string` |  |
| `container_registry_enabled` | `bool` |  |
| `container_registry_image_prefix` | `string` |  |
| `created_at` | `string` |  |
| `creator_id` | `int` |  |
| `custom_attributes` | `map[string]any` | API_Entities_CustomAttribute model |
| `default_branch` | `string` |  |
| `description` | `string` |  |
| `description_html` | `string` |  |
| `duo_remote_flows_enabled` | `string` |  |
| `emails_disabled` | `bool` |  |
| `emails_enabled` | `bool` |  |
| `empty_repo` | `bool` |  |
| `enforce_auth_checks_on_uploads` | `bool` |  |
| `environments_access_level` | `string` |  |
| `external_authorization_classification_label` | `string` |  |
| `feature_flags_access_level` | `string` |  |
| `forked_from_project` | `map[string]any` | API_Entities_BasicProjectDetails model |
| `forking_access_level` | `string` |  |
| `forks_count` | `int` |  |
| `group_runners_enabled` | `bool` |  |
| `http_url_to_repo` | `string` |  |
| `id` | `int` |  |
| `import_error` | `string` |  |
| `import_status` | `string` |  |
| `import_type` | `string` |  |
| `import_url` | `string` |  |
| `infrastructure_access_level` | `string` |  |
| `issue_branch_template` | `string` |  |
| `issues_access_level` | `string` |  |
| `issues_enabled` | `bool` |  |
| `issues_template` | `string` |  |
| `jobs_enabled` | `bool` |  |
| `keep_latest_artifact` | `bool` |  |
| `last_activity_at` | `string` |  |
| `lfs_enabled` | `bool` |  |
| `license` | `map[string]any` |  |
| `license_url` | `string` |  |
| `links` | `map[string]any` |  |
| `marked_for_deletion_at` | `string` |  |
| `marked_for_deletion_on` | `string` |  |
| `max_artifacts_size` | `int` |  |
| `merge_commit_template` | `string` |  |
| `merge_method` | `string` |  |
| `merge_pipelines_enabled` | `string` |  |
| `merge_request_title_regex` | `string` |  |
| `merge_request_title_regex_description` | `string` |  |
| `merge_requests_access_level` | `string` |  |
| `merge_requests_enabled` | `bool` |  |
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
| `mr_default_target_self` | `bool` |  |
| `name` | `string` |  |
| `name_with_namespace` | `string` |  |
| `namespace` | `map[string]any` |  |
| `only_allow_merge_if_all_discussions_are_resolved` | `bool` |  |
| `only_allow_merge_if_all_status_checks_passed` | `string` |  |
| `only_allow_merge_if_pipeline_succeeds` | `bool` |  |
| `only_mirror_protected_branches` | `string` |  |
| `open_issues_count` | `int` |  |
| `owner` | `map[string]any` | API_Entities_UserBasic model |
| `package_registry_access_level` | `string` |  |
| `packages_enabled` | `bool` |  |
| `pages_access_level` | `string` |  |
| `path` | `string` |  |
| `path_with_namespace` | `string` |  |
| `permissions` | `map[string]any` |  |
| `pre_receive_secret_detection_enabled` | `bool` |  |
| `prevent_merge_without_jira_issue` | `string` |  |
| `printing_merge_request_link_enabled` | `bool` |  |
| `public_jobs` | `bool` |  |
| `readme_url` | `string` |  |
| `releases_access_level` | `string` |  |
| `remove_source_branch_after_merge` | `bool` |  |
| `repository_access_level` | `string` |  |
| `repository_object_format` | `string` |  |
| `repository_storage` | `string` |  |
| `request_access_enabled` | `bool` |  |
| `requirements_access_level` | `string` |  |
| `requirements_enabled` | `string` |  |
| `resolve_outdated_diff_discussions` | `bool` |  |
| `resource_group_default_process_mode` | `string` |  |
| `restrict_user_defined_variables` | `bool` |  |
| `runner_token_expiration_interval` | `int` |  |
| `runners_token` | `string` |  |
| `secret_push_protection_enabled` | `bool` |  |
| `security_and_compliance_access_level` | `string` |  |
| `security_and_compliance_enabled` | `string` |  |
| `service_desk_address` | `string` |  |
| `service_desk_enabled` | `bool` |  |
| `shared_runners_enabled` | `bool` |  |
| `shared_with_groups` | `[]any` |  |
| `show_diff_preview_in_email` | `bool` |  |
| `snippets_access_level` | `string` |  |
| `snippets_enabled` | `bool` |  |
| `spp_repository_pipeline_access` | `bool` | The spp_repository_pipeline_access setting is only visible if the security_orchestration_policies feature is available. |
| `squash_commit_template` | `string` |  |
| `squash_option` | `string` |  |
| `ssh_url_to_repo` | `string` |  |
| `star_count` | `int` |  |
| `statistics` | `map[string]any` |  |
| `suggestion_commit_message` | `string` |  |
| `tag_list` | `[]any` |  |
| `topics` | `[]any` |  |
| `updated_at` | `string` |  |
| `visibility` | `string` |  |
| `warn_about_potentially_unwanted_characters` | `bool` |  |
| `web_based_commit_signing_enabled` | `string` |  |
| `web_url` | `string` |  |
| `wiki_access_level` | `string` |  |
| `wiki_enabled` | `bool` |  |

#### Example: Load

```go
apiEntitiesProjectWithAccess, err := client.ApiEntitiesProjectWithAccess(nil).Load(map[string]any{"id": "api_entities_project_with_access_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesProjectWithAccess) // the loaded record
```


### Project

Create an instance: `project := client.Project(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_merge_on_skipped_pipeline` | `bool` |  |
| `allow_pipeline_trigger_approve_deployment` | `bool` |  |
| `analytics_access_level` | `string` |  |
| `approvals_before_merge` | `string` |  |
| `archived` | `bool` |  |
| `auto_cancel_pending_pipelines` | `string` |  |
| `auto_devops_deploy_strategy` | `string` |  |
| `auto_devops_enabled` | `bool` |  |
| `auto_duo_code_review_enabled` | `string` |  |
| `autoclose_referenced_issues` | `bool` |  |
| `avatar_url` | `string` |  |
| `build_git_strategy` | `string` |  |
| `build_timeout` | `int` |  |
| `builds_access_level` | `string` |  |
| `can_create_merge_request_in` | `bool` |  |
| `ci_allow_fork_pipelines_to_run_in_parent_project` | `bool` |  |
| `ci_config_path` | `string` |  |
| `ci_default_git_depth` | `int` |  |
| `ci_delete_pipelines_in_seconds` | `int` |  |
| `ci_forward_deployment_enabled` | `bool` |  |
| `ci_forward_deployment_rollback_allowed` | `bool` |  |
| `ci_id_token_sub_claim_components` | `[]any` |  |
| `ci_job_token_scope_enabled` | `bool` |  |
| `ci_pipeline_variables_minimum_override_role` | `string` |  |
| `ci_push_repository_for_job_token_allowed` | `bool` |  |
| `ci_restrict_pipeline_cancellation_role` | `string` |  |
| `ci_separated_caches` | `bool` |  |
| `compliance_frameworks` | `string` |  |
| `container_expiration_policy` | `map[string]any` |  |
| `container_registry_access_level` | `string` |  |
| `container_registry_enabled` | `bool` |  |
| `container_registry_image_prefix` | `string` |  |
| `created_at` | `string` |  |
| `creator_id` | `int` |  |
| `custom_attributes` | `map[string]any` | API_Entities_CustomAttribute model |
| `default_branch` | `string` |  |
| `description` | `string` |  |
| `description_html` | `string` |  |
| `duo_remote_flows_enabled` | `string` |  |
| `emails_disabled` | `bool` |  |
| `emails_enabled` | `bool` |  |
| `empty_repo` | `bool` |  |
| `enforce_auth_checks_on_uploads` | `bool` |  |
| `environments_access_level` | `string` |  |
| `external_authorization_classification_label` | `string` |  |
| `feature_flags_access_level` | `string` |  |
| `forked_from_project` | `map[string]any` | API_Entities_BasicProjectDetails model |
| `forking_access_level` | `string` |  |
| `forks_count` | `int` |  |
| `group_runners_enabled` | `bool` |  |
| `http_url_to_repo` | `string` |  |
| `id` | `int` |  |
| `import_error` | `string` |  |
| `import_status` | `string` |  |
| `import_type` | `string` |  |
| `import_url` | `string` |  |
| `infrastructure_access_level` | `string` |  |
| `issue_branch_template` | `string` |  |
| `issues_access_level` | `string` |  |
| `issues_enabled` | `bool` |  |
| `issues_template` | `string` |  |
| `jobs_enabled` | `bool` |  |
| `keep_latest_artifact` | `bool` |  |
| `last_activity_at` | `string` |  |
| `lfs_enabled` | `bool` |  |
| `license` | `map[string]any` |  |
| `license_url` | `string` |  |
| `links` | `map[string]any` |  |
| `marked_for_deletion_at` | `string` |  |
| `marked_for_deletion_on` | `string` |  |
| `max_artifacts_size` | `int` |  |
| `merge_commit_template` | `string` |  |
| `merge_method` | `string` |  |
| `merge_pipelines_enabled` | `string` |  |
| `merge_request_title_regex` | `string` |  |
| `merge_request_title_regex_description` | `string` |  |
| `merge_requests_access_level` | `string` |  |
| `merge_requests_enabled` | `bool` |  |
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
| `mr_default_target_self` | `bool` |  |
| `name` | `string` |  |
| `name_with_namespace` | `string` |  |
| `namespace` | `map[string]any` |  |
| `only_allow_merge_if_all_discussions_are_resolved` | `bool` |  |
| `only_allow_merge_if_all_status_checks_passed` | `string` |  |
| `only_allow_merge_if_pipeline_succeeds` | `bool` |  |
| `only_mirror_protected_branches` | `string` |  |
| `open_issues_count` | `int` |  |
| `owner` | `map[string]any` | API_Entities_UserBasic model |
| `package_registry_access_level` | `string` |  |
| `packages_enabled` | `bool` |  |
| `pages_access_level` | `string` |  |
| `path` | `string` |  |
| `path_with_namespace` | `string` |  |
| `pre_receive_secret_detection_enabled` | `bool` |  |
| `prevent_merge_without_jira_issue` | `string` |  |
| `printing_merge_request_link_enabled` | `bool` |  |
| `public_jobs` | `bool` |  |
| `readme_url` | `string` |  |
| `releases_access_level` | `string` |  |
| `remove_source_branch_after_merge` | `bool` |  |
| `repository_access_level` | `string` |  |
| `repository_object_format` | `string` |  |
| `repository_storage` | `string` |  |
| `request_access_enabled` | `bool` |  |
| `requirements_access_level` | `string` |  |
| `requirements_enabled` | `string` |  |
| `resolve_outdated_diff_discussions` | `bool` |  |
| `resource_group_default_process_mode` | `string` |  |
| `restrict_user_defined_variables` | `bool` |  |
| `runner_token_expiration_interval` | `int` |  |
| `runners_token` | `string` |  |
| `secret_push_protection_enabled` | `bool` |  |
| `security_and_compliance_access_level` | `string` |  |
| `security_and_compliance_enabled` | `string` |  |
| `service_desk_address` | `string` |  |
| `service_desk_enabled` | `bool` |  |
| `shared_runners_enabled` | `bool` |  |
| `shared_with_groups` | `[]any` |  |
| `show_diff_preview_in_email` | `bool` |  |
| `snippets_access_level` | `string` |  |
| `snippets_enabled` | `bool` |  |
| `spp_repository_pipeline_access` | `bool` | The spp_repository_pipeline_access setting is only visible if the security_orchestration_policies feature is available. |
| `squash_commit_template` | `string` |  |
| `squash_option` | `string` |  |
| `ssh_url_to_repo` | `string` |  |
| `star_count` | `int` |  |
| `statistics` | `map[string]any` |  |
| `suggestion_commit_message` | `string` |  |
| `tag_list` | `[]any` |  |
| `topics` | `[]any` |  |
| `updated_at` | `string` |  |
| `visibility` | `string` |  |
| `warn_about_potentially_unwanted_characters` | `bool` |  |
| `web_based_commit_signing_enabled` | `string` |  |
| `web_url` | `string` |  |
| `wiki_access_level` | `string` |  |
| `wiki_enabled` | `bool` |  |

#### Example: List

```go
projects, err := client.Project(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(projects) // the array of records
```

#### Example: Create

```go
result, err := client.Project(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
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

Features are the extension mechanism. A feature implements the
`Feature` interface and provides hooks — functions keyed by pipeline
stage names.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as maps

The Go SDK uses `map[string]any` throughout rather than typed structs.
This mirrors the dynamic nature of the API and keeps the SDK
flexible — no code generation is needed when the API schema changes.

Use `core.ToMapAny()` to safely cast results and nested data.

### Package structure

```
github.com/voxgig-sdk/gitlab-sdk/go/
├── gitlab.go        # Root package — type aliases and constructors
├── core/               # SDK core — client, types, pipeline
├── entity/             # Entity implementations
├── feature/            # Built-in features (Base, Test, Log)
├── utility/            # Utility functions and struct library
└── test/               # Test suites
```

The root package (`github.com/voxgig-sdk/gitlab-sdk/go`) re-exports everything needed
for normal use. Import sub-packages only when you need specific types
like `core.ToMapAny`.

### Entity state

Entity instances are stateful. After a successful `Load`, the entity
stores the returned data and match criteria internally.

```go
apientitiesprojectwithaccess := client.ApiEntitiesProjectWithAccess(nil)
apientitiesprojectwithaccess.Load(map[string]any{"id": "example_id"}, nil)

// apientitiesprojectwithaccess.Data() now returns the apientitiesprojectwithaccess data from the last load
// apientitiesprojectwithaccess.Match() returns the last match criteria
```

Call `Make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`Direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `Prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
