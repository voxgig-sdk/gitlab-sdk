# Gitlab PHP SDK



The PHP SDK for the Gitlab API — an entity-oriented client using PHP conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `$client->ApiEntitiesProjectWithAccess()` — with named operations (`list`/`load`/`create`/`update`/`remove`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to Packagist. Install it from the
GitHub release tag (`php/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/gitlab-sdk/releases](https://github.com/voxgig-sdk/gitlab-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```php
<?php
require_once 'gitlab_sdk.php';

$client = new GitlabSDK([
    "apikey" => getenv("GITLAB_APIKEY"),
]);
```

### 3. Load an apientitiesprojectwithaccess

```php
try {
    // load() returns the ENTITY — call data_get() for the ApiEntitiesProjectWithAccess record (throws on error).
    $apientitiesprojectwithaccess = $client->ApiEntitiesProjectWithAccess()->load(["id" => "example_id"]);
    print_r($apientitiesprojectwithaccess);
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```


## Error handling

Entity operations throw a `\Throwable` on failure, so wrap them in
`try` / `catch`:

```php
try {
    $apientitiesprojectwithaccess = $client->ApiEntitiesProjectWithAccess()->load(["id" => "example_id"]);
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

`direct()` does **not** throw — it returns the result array. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```php
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example_id"],
]);

if (! $result["ok"]) {
    $err = $result["err"] ?? null;
    echo "request failed: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```php
// direct() is the raw-HTTP escape hatch: it returns a result array
// (it does not throw). Branch on $result["ok"].
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);

if ($result["ok"]) {
    echo $result["status"];  // 200
    print_r($result["data"]);  // response body
} else {
    // On an HTTP error status there is no err (only a transport failure sets
    // it), so fall back to the status code.
    $err = $result["err"] ?? null;
    echo "Error: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```

### Prepare a request without sending it

```php
// prepare() throws on error and returns the fetch definition.
$fetchdef = $client->prepare([
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => ["id" => "example"],
]);

echo $fetchdef["url"];
echo $fetchdef["method"];
print_r($fetchdef["headers"]);
```

### Use test mode

Create a mock client for unit testing — no server required. Seed fixture
data via the `entity` option so offline calls resolve without a live server:

```php
$client = GitlabSDK::test([
    "entity" => ["apientitiesprojectwithaccess" => ["test01" => ["id" => "test01"]]],
]);

// Entity ops return the ENTITY (throws on error);
// call data_get() for the mock record.
$apientitiesprojectwithaccess = $client->ApiEntitiesProjectWithAccess()->load(["id" => "test01"]);
print_r($apientitiesprojectwithaccess);
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```php
$mock_fetch = function ($url, $init) {
    return [
        [
            "status" => 200,
            "statusText" => "OK",
            "headers" => [],
            "json" => function () { return ["id" => "mock01"]; },
        ],
        null,
    ];
};

$client = new GitlabSDK([
    "base" => "http://localhost:8080",
    "system" => [
        "fetch" => $mock_fetch,
    ],
]);
```

### Run live tests

Create a `.env.local` file at the project root:

```
GITLAB_TEST_LIVE=TRUE
GITLAB_APIKEY=<your-key>
```

Then run:

```bash
cd php && ./vendor/bin/phpunit test/
```


## Reference

### GitlabSDK

```php
require_once 'gitlab_sdk.php';
$client = new GitlabSDK($options);
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `array` | Feature activation flags. |
| `extend` | `array` | Additional Feature instances to load. |
| `system` | `array` | System overrides (e.g. custom `fetch` callable). |

### test

```php
$client = GitlabSDK::test($testopts, $sdkopts);
```

Creates a test-mode client with mock transport. Both arguments may be `null`.

### GitlabSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `(): array` | Deep copy of current SDK options. |
| `get_utility` | `(): Utility` | Copy of the SDK utility object. |
| `prepare` | `(array $fetchargs): array` | Build an HTTP request definition without sending. |
| `direct` | `(array $fetchargs): array` | Build and send an HTTP request. |
| `ApiEntitiesProjectWithAccess` | `($data): ApiEntitiesProjectWithAccessEntity` | Create an ApiEntitiesProjectWithAccess entity instance. |
| `Project` | `($data): ProjectEntity` | Create a Project entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `($reqmatch, $ctrl): array` | Load a single entity by match criteria. |
| `list` | `(?array $reqmatch = null, $ctrl): array` | List entities matching the criteria (call with no argument to list all). |
| `create` | `($reqdata, $ctrl): array` | Create a new entity. |
| `update` | `($reqdata, $ctrl): array` | Update an existing entity. |
| `remove` | `($reqmatch, $ctrl): array` | Remove an entity. |
| `data_get` | `(): array` | Get entity data. |
| `data_set` | `($data): void` | Set entity data. |
| `match_get` | `(): array` | Get entity match criteria. |
| `match_set` | `($match): void` | Set entity match criteria. |
| `make` | `(): Entity` | Create a new instance with the same options. |
| `get_name` | `(): string` | Return the entity name. |

### Result shape

Entity operations return the ENTITY (call data_get() for the record) (an `array` for single-entity
ops, a `list` for `list`) and throw on error. Wrap calls in
`try`/`catch` to handle failures.

The `direct()` escape hatch never throws — it returns a result `array`
you branch on via `$result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `true` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `array` | Response headers. |
| `data` | `mixed` | Parsed JSON response body. |

On error, `ok` is `false` and `$err` contains the error value.

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

Create an instance: `$api_entities_project_with_access = $client->ApiEntitiesProjectWithAccess();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

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
| `ci_id_token_sub_claim_components` | `array` |  |
| `ci_job_token_scope_enabled` | `bool` |  |
| `ci_pipeline_variables_minimum_override_role` | `string` |  |
| `ci_push_repository_for_job_token_allowed` | `bool` |  |
| `ci_restrict_pipeline_cancellation_role` | `string` |  |
| `ci_separated_caches` | `bool` |  |
| `compliance_frameworks` | `string` |  |
| `container_expiration_policy` | `array` |  |
| `container_registry_access_level` | `string` |  |
| `container_registry_enabled` | `bool` |  |
| `container_registry_image_prefix` | `string` |  |
| `created_at` | `string` |  |
| `creator_id` | `int` |  |
| `custom_attributes` | `array` | API_Entities_CustomAttribute model |
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
| `forked_from_project` | `array` | API_Entities_BasicProjectDetails model |
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
| `license` | `array` |  |
| `license_url` | `string` |  |
| `links` | `array` |  |
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
| `namespace` | `array` |  |
| `only_allow_merge_if_all_discussions_are_resolved` | `bool` |  |
| `only_allow_merge_if_all_status_checks_passed` | `string` |  |
| `only_allow_merge_if_pipeline_succeeds` | `bool` |  |
| `only_mirror_protected_branches` | `string` |  |
| `open_issues_count` | `int` |  |
| `owner` | `array` | API_Entities_UserBasic model |
| `package_registry_access_level` | `string` |  |
| `packages_enabled` | `bool` |  |
| `pages_access_level` | `string` |  |
| `path` | `string` |  |
| `path_with_namespace` | `string` |  |
| `permissions` | `array` |  |
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
| `shared_with_groups` | `array` |  |
| `show_diff_preview_in_email` | `bool` |  |
| `snippets_access_level` | `string` |  |
| `snippets_enabled` | `bool` |  |
| `spp_repository_pipeline_access` | `bool` | The spp_repository_pipeline_access setting is only visible if the security_orchestration_policies feature is available. |
| `squash_commit_template` | `string` |  |
| `squash_option` | `string` |  |
| `ssh_url_to_repo` | `string` |  |
| `star_count` | `int` |  |
| `statistics` | `array` |  |
| `suggestion_commit_message` | `string` |  |
| `tag_list` | `array` |  |
| `topics` | `array` |  |
| `updated_at` | `string` |  |
| `visibility` | `string` |  |
| `warn_about_potentially_unwanted_characters` | `bool` |  |
| `web_based_commit_signing_enabled` | `string` |  |
| `web_url` | `string` |  |
| `wiki_access_level` | `string` |  |
| `wiki_enabled` | `bool` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ApiEntitiesProjectWithAccess record (throws on error).
$api_entities_project_with_access = $client->ApiEntitiesProjectWithAccess()->load(["id" => "api_entities_project_with_access_id"]);
```


### Project

Create an instance: `$project = $client->Project();`

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
| `ci_id_token_sub_claim_components` | `array` |  |
| `ci_job_token_scope_enabled` | `bool` |  |
| `ci_pipeline_variables_minimum_override_role` | `string` |  |
| `ci_push_repository_for_job_token_allowed` | `bool` |  |
| `ci_restrict_pipeline_cancellation_role` | `string` |  |
| `ci_separated_caches` | `bool` |  |
| `compliance_frameworks` | `string` |  |
| `container_expiration_policy` | `array` |  |
| `container_registry_access_level` | `string` |  |
| `container_registry_enabled` | `bool` |  |
| `container_registry_image_prefix` | `string` |  |
| `created_at` | `string` |  |
| `creator_id` | `int` |  |
| `custom_attributes` | `array` | API_Entities_CustomAttribute model |
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
| `forked_from_project` | `array` | API_Entities_BasicProjectDetails model |
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
| `license` | `array` |  |
| `license_url` | `string` |  |
| `links` | `array` |  |
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
| `namespace` | `array` |  |
| `only_allow_merge_if_all_discussions_are_resolved` | `bool` |  |
| `only_allow_merge_if_all_status_checks_passed` | `string` |  |
| `only_allow_merge_if_pipeline_succeeds` | `bool` |  |
| `only_mirror_protected_branches` | `string` |  |
| `open_issues_count` | `int` |  |
| `owner` | `array` | API_Entities_UserBasic model |
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
| `shared_with_groups` | `array` |  |
| `show_diff_preview_in_email` | `bool` |  |
| `snippets_access_level` | `string` |  |
| `snippets_enabled` | `bool` |  |
| `spp_repository_pipeline_access` | `bool` | The spp_repository_pipeline_access setting is only visible if the security_orchestration_policies feature is available. |
| `squash_commit_template` | `string` |  |
| `squash_option` | `string` |  |
| `ssh_url_to_repo` | `string` |  |
| `star_count` | `int` |  |
| `statistics` | `array` |  |
| `suggestion_commit_message` | `string` |  |
| `tag_list` | `array` |  |
| `topics` | `array` |  |
| `updated_at` | `string` |  |
| `visibility` | `string` |  |
| `warn_about_potentially_unwanted_characters` | `bool` |  |
| `web_based_commit_signing_enabled` | `string` |  |
| `web_url` | `string` |  |
| `wiki_access_level` | `string` |  |
| `wiki_enabled` | `bool` |  |

#### Example: List

```php
// list() returns an array of Project records (throws on error).
$projects = $client->Project()->list();
```

#### Example: Create

```php
$project = $client->Project()->create([
]);
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

Features are the extension mechanism. A feature is a PHP class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as arrays

The PHP SDK uses plain PHP associative arrays throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers::to_map()` to safely validate that a value is an array.

### Directory structure

```
php/
├── gitlab_sdk.php          -- Main SDK class
├── config.php                     -- Configuration
├── features.php                   -- Feature factory
├── core/                          -- Core types and context
├── entity/                        -- Entity implementations
├── feature/                       -- Built-in features (Base, Test, Log)
├── utility/                       -- Utility functions and struct library
└── test/                          -- Test suites
```

The main class (`gitlab_sdk.php`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```php
$apientitiesprojectwithaccess = $client->ApiEntitiesProjectWithAccess();
$apientitiesprojectwithaccess->load(["id" => "example_id"]);

// $apientitiesprojectwithaccess->data_get() now returns the apientitiesprojectwithaccess data from the last load
// $apientitiesprojectwithaccess->match_get() returns the last match criteria
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
