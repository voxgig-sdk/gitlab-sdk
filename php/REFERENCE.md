# Gitlab PHP SDK Reference

Complete API reference for the Gitlab PHP SDK.


## GitlabSDK

### Constructor

```php
require_once __DIR__ . '/gitlab_sdk.php';

$client = new GitlabSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["apikey"]` | `string` | API key for authentication. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `GitlabSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = GitlabSDK::test();
```


### Instance Methods

#### `ApiEntitiesProjectWithAccess($data = null)`

Create a new `ApiEntitiesProjectWithAccessEntity` instance. Pass `null` for no initial data.

#### `Project($data = null)`

Create a new `ProjectEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): GitlabUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## ApiEntitiesProjectWithAccessEntity

```php
$api_entities_project_with_access = $client->ApiEntitiesProjectWithAccess();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_merge_on_skipped_pipeline` | `bool` | No |  |
| `allow_pipeline_trigger_approve_deployment` | `bool` | No |  |
| `analytics_access_level` | `string` | No |  |
| `approvals_before_merge` | `string` | No |  |
| `archived` | `bool` | No |  |
| `auto_cancel_pending_pipelines` | `string` | No |  |
| `auto_devops_deploy_strategy` | `string` | No |  |
| `auto_devops_enabled` | `bool` | No |  |
| `auto_duo_code_review_enabled` | `string` | No |  |
| `autoclose_referenced_issues` | `bool` | No |  |
| `avatar_url` | `string` | No |  |
| `build_git_strategy` | `string` | No |  |
| `build_timeout` | `int` | No |  |
| `builds_access_level` | `string` | No |  |
| `can_create_merge_request_in` | `bool` | No |  |
| `ci_allow_fork_pipelines_to_run_in_parent_project` | `bool` | No |  |
| `ci_config_path` | `string` | No |  |
| `ci_default_git_depth` | `int` | No |  |
| `ci_delete_pipelines_in_seconds` | `int` | No |  |
| `ci_forward_deployment_enabled` | `bool` | No |  |
| `ci_forward_deployment_rollback_allowed` | `bool` | No |  |
| `ci_id_token_sub_claim_components` | `array` | No |  |
| `ci_job_token_scope_enabled` | `bool` | No |  |
| `ci_pipeline_variables_minimum_override_role` | `string` | No |  |
| `ci_push_repository_for_job_token_allowed` | `bool` | No |  |
| `ci_restrict_pipeline_cancellation_role` | `string` | No |  |
| `ci_separated_caches` | `bool` | No |  |
| `compliance_frameworks` | `string` | No |  |
| `container_expiration_policy` | `array` | No |  |
| `container_registry_access_level` | `string` | No |  |
| `container_registry_enabled` | `bool` | No |  |
| `container_registry_image_prefix` | `string` | No |  |
| `created_at` | `string` | No |  |
| `creator_id` | `int` | No |  |
| `custom_attributes` | `array` | No | API_Entities_CustomAttribute model |
| `default_branch` | `string` | No |  |
| `description` | `string` | No |  |
| `description_html` | `string` | No |  |
| `duo_remote_flows_enabled` | `string` | No |  |
| `emails_disabled` | `bool` | No |  |
| `emails_enabled` | `bool` | No |  |
| `empty_repo` | `bool` | No |  |
| `enforce_auth_checks_on_uploads` | `bool` | No |  |
| `environments_access_level` | `string` | No |  |
| `external_authorization_classification_label` | `string` | No |  |
| `feature_flags_access_level` | `string` | No |  |
| `forked_from_project` | `array` | No | API_Entities_BasicProjectDetails model |
| `forking_access_level` | `string` | No |  |
| `forks_count` | `int` | No |  |
| `group_runners_enabled` | `bool` | No |  |
| `http_url_to_repo` | `string` | No |  |
| `id` | `int` | No |  |
| `import_error` | `string` | No |  |
| `import_status` | `string` | No |  |
| `import_type` | `string` | No |  |
| `import_url` | `string` | No |  |
| `infrastructure_access_level` | `string` | No |  |
| `issue_branch_template` | `string` | No |  |
| `issues_access_level` | `string` | No |  |
| `issues_enabled` | `bool` | No |  |
| `issues_template` | `string` | No |  |
| `jobs_enabled` | `bool` | No |  |
| `keep_latest_artifact` | `bool` | No |  |
| `last_activity_at` | `string` | No |  |
| `lfs_enabled` | `bool` | No |  |
| `license` | `array` | No |  |
| `license_url` | `string` | No |  |
| `links` | `array` | No |  |
| `marked_for_deletion_at` | `string` | No |  |
| `marked_for_deletion_on` | `string` | No |  |
| `max_artifacts_size` | `int` | No |  |
| `merge_commit_template` | `string` | No |  |
| `merge_method` | `string` | No |  |
| `merge_pipelines_enabled` | `string` | No |  |
| `merge_request_title_regex` | `string` | No |  |
| `merge_request_title_regex_description` | `string` | No |  |
| `merge_requests_access_level` | `string` | No |  |
| `merge_requests_enabled` | `bool` | No |  |
| `merge_requests_template` | `string` | No |  |
| `merge_trains_enabled` | `string` | No |  |
| `merge_trains_skip_train_allowed` | `string` | No |  |
| `mirror` | `string` | No |  |
| `mirror_overwrites_diverged_branches` | `string` | No |  |
| `mirror_trigger_builds` | `string` | No |  |
| `mirror_user_id` | `string` | No |  |
| `model_experiments_access_level` | `string` | No |  |
| `model_registry_access_level` | `string` | No |  |
| `monitor_access_level` | `string` | No |  |
| `mr_default_target_self` | `bool` | No |  |
| `name` | `string` | No |  |
| `name_with_namespace` | `string` | No |  |
| `namespace` | `array` | No |  |
| `only_allow_merge_if_all_discussions_are_resolved` | `bool` | No |  |
| `only_allow_merge_if_all_status_checks_passed` | `string` | No |  |
| `only_allow_merge_if_pipeline_succeeds` | `bool` | No |  |
| `only_mirror_protected_branches` | `string` | No |  |
| `open_issues_count` | `int` | No |  |
| `owner` | `array` | No | API_Entities_UserBasic model |
| `package_registry_access_level` | `string` | No |  |
| `packages_enabled` | `bool` | No |  |
| `pages_access_level` | `string` | No |  |
| `path` | `string` | No |  |
| `path_with_namespace` | `string` | No |  |
| `permissions` | `array` | No |  |
| `pre_receive_secret_detection_enabled` | `bool` | No |  |
| `prevent_merge_without_jira_issue` | `string` | No |  |
| `printing_merge_request_link_enabled` | `bool` | No |  |
| `public_jobs` | `bool` | No |  |
| `readme_url` | `string` | No |  |
| `releases_access_level` | `string` | No |  |
| `remove_source_branch_after_merge` | `bool` | No |  |
| `repository_access_level` | `string` | No |  |
| `repository_object_format` | `string` | No |  |
| `repository_storage` | `string` | No |  |
| `request_access_enabled` | `bool` | No |  |
| `requirements_access_level` | `string` | No |  |
| `requirements_enabled` | `string` | No |  |
| `resolve_outdated_diff_discussions` | `bool` | No |  |
| `resource_group_default_process_mode` | `string` | No |  |
| `restrict_user_defined_variables` | `bool` | No |  |
| `runner_token_expiration_interval` | `int` | No |  |
| `runners_token` | `string` | No |  |
| `secret_push_protection_enabled` | `bool` | No |  |
| `security_and_compliance_access_level` | `string` | No |  |
| `security_and_compliance_enabled` | `string` | No |  |
| `service_desk_address` | `string` | No |  |
| `service_desk_enabled` | `bool` | No |  |
| `shared_runners_enabled` | `bool` | No |  |
| `shared_with_groups` | `array` | No |  |
| `show_diff_preview_in_email` | `bool` | No |  |
| `snippets_access_level` | `string` | No |  |
| `snippets_enabled` | `bool` | No |  |
| `spp_repository_pipeline_access` | `bool` | No | The spp_repository_pipeline_access setting is only visible if the security_orchestration_policies feature is available. |
| `squash_commit_template` | `string` | No |  |
| `squash_option` | `string` | No |  |
| `ssh_url_to_repo` | `string` | No |  |
| `star_count` | `int` | No |  |
| `statistics` | `array` | No |  |
| `suggestion_commit_message` | `string` | No |  |
| `tag_list` | `array` | No |  |
| `topics` | `array` | No |  |
| `updated_at` | `string` | No |  |
| `visibility` | `string` | No |  |
| `warn_about_potentially_unwanted_characters` | `bool` | No |  |
| `web_based_commit_signing_enabled` | `string` | No |  |
| `web_url` | `string` | No |  |
| `wiki_access_level` | `string` | No |  |
| `wiki_enabled` | `bool` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesProjectWithAccess()->load(["id" => "api_entities_project_with_access_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesProjectWithAccessEntity`

Create a new `ApiEntitiesProjectWithAccessEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ProjectEntity

```php
$project = $client->Project();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_merge_on_skipped_pipeline` | `bool` | No |  |
| `allow_pipeline_trigger_approve_deployment` | `bool` | No |  |
| `analytics_access_level` | `string` | No |  |
| `approvals_before_merge` | `string` | No |  |
| `archived` | `bool` | No |  |
| `auto_cancel_pending_pipelines` | `string` | No |  |
| `auto_devops_deploy_strategy` | `string` | No |  |
| `auto_devops_enabled` | `bool` | No |  |
| `auto_duo_code_review_enabled` | `string` | No |  |
| `autoclose_referenced_issues` | `bool` | No |  |
| `avatar_url` | `string` | No |  |
| `build_git_strategy` | `string` | No |  |
| `build_timeout` | `int` | No |  |
| `builds_access_level` | `string` | No |  |
| `can_create_merge_request_in` | `bool` | No |  |
| `ci_allow_fork_pipelines_to_run_in_parent_project` | `bool` | No |  |
| `ci_config_path` | `string` | No |  |
| `ci_default_git_depth` | `int` | No |  |
| `ci_delete_pipelines_in_seconds` | `int` | No |  |
| `ci_forward_deployment_enabled` | `bool` | No |  |
| `ci_forward_deployment_rollback_allowed` | `bool` | No |  |
| `ci_id_token_sub_claim_components` | `array` | No |  |
| `ci_job_token_scope_enabled` | `bool` | No |  |
| `ci_pipeline_variables_minimum_override_role` | `string` | No |  |
| `ci_push_repository_for_job_token_allowed` | `bool` | No |  |
| `ci_restrict_pipeline_cancellation_role` | `string` | No |  |
| `ci_separated_caches` | `bool` | No |  |
| `compliance_frameworks` | `string` | No |  |
| `container_expiration_policy` | `array` | No |  |
| `container_registry_access_level` | `string` | No |  |
| `container_registry_enabled` | `bool` | No |  |
| `container_registry_image_prefix` | `string` | No |  |
| `created_at` | `string` | No |  |
| `creator_id` | `int` | No |  |
| `custom_attributes` | `array` | No | API_Entities_CustomAttribute model |
| `default_branch` | `string` | No |  |
| `description` | `string` | No |  |
| `description_html` | `string` | No |  |
| `duo_remote_flows_enabled` | `string` | No |  |
| `emails_disabled` | `bool` | No |  |
| `emails_enabled` | `bool` | No |  |
| `empty_repo` | `bool` | No |  |
| `enforce_auth_checks_on_uploads` | `bool` | No |  |
| `environments_access_level` | `string` | No |  |
| `external_authorization_classification_label` | `string` | No |  |
| `feature_flags_access_level` | `string` | No |  |
| `forked_from_project` | `array` | No | API_Entities_BasicProjectDetails model |
| `forking_access_level` | `string` | No |  |
| `forks_count` | `int` | No |  |
| `group_runners_enabled` | `bool` | No |  |
| `http_url_to_repo` | `string` | No |  |
| `id` | `int` | No |  |
| `import_error` | `string` | No |  |
| `import_status` | `string` | No |  |
| `import_type` | `string` | No |  |
| `import_url` | `string` | No |  |
| `infrastructure_access_level` | `string` | No |  |
| `issue_branch_template` | `string` | No |  |
| `issues_access_level` | `string` | No |  |
| `issues_enabled` | `bool` | No |  |
| `issues_template` | `string` | No |  |
| `jobs_enabled` | `bool` | No |  |
| `keep_latest_artifact` | `bool` | No |  |
| `last_activity_at` | `string` | No |  |
| `lfs_enabled` | `bool` | No |  |
| `license` | `array` | No |  |
| `license_url` | `string` | No |  |
| `links` | `array` | No |  |
| `marked_for_deletion_at` | `string` | No |  |
| `marked_for_deletion_on` | `string` | No |  |
| `max_artifacts_size` | `int` | No |  |
| `merge_commit_template` | `string` | No |  |
| `merge_method` | `string` | No |  |
| `merge_pipelines_enabled` | `string` | No |  |
| `merge_request_title_regex` | `string` | No |  |
| `merge_request_title_regex_description` | `string` | No |  |
| `merge_requests_access_level` | `string` | No |  |
| `merge_requests_enabled` | `bool` | No |  |
| `merge_requests_template` | `string` | No |  |
| `merge_trains_enabled` | `string` | No |  |
| `merge_trains_skip_train_allowed` | `string` | No |  |
| `mirror` | `string` | No |  |
| `mirror_overwrites_diverged_branches` | `string` | No |  |
| `mirror_trigger_builds` | `string` | No |  |
| `mirror_user_id` | `string` | No |  |
| `model_experiments_access_level` | `string` | No |  |
| `model_registry_access_level` | `string` | No |  |
| `monitor_access_level` | `string` | No |  |
| `mr_default_target_self` | `bool` | No |  |
| `name` | `string` | No |  |
| `name_with_namespace` | `string` | No |  |
| `namespace` | `array` | No |  |
| `only_allow_merge_if_all_discussions_are_resolved` | `bool` | No |  |
| `only_allow_merge_if_all_status_checks_passed` | `string` | No |  |
| `only_allow_merge_if_pipeline_succeeds` | `bool` | No |  |
| `only_mirror_protected_branches` | `string` | No |  |
| `open_issues_count` | `int` | No |  |
| `owner` | `array` | No | API_Entities_UserBasic model |
| `package_registry_access_level` | `string` | No |  |
| `packages_enabled` | `bool` | No |  |
| `pages_access_level` | `string` | No |  |
| `path` | `string` | No |  |
| `path_with_namespace` | `string` | No |  |
| `pre_receive_secret_detection_enabled` | `bool` | No |  |
| `prevent_merge_without_jira_issue` | `string` | No |  |
| `printing_merge_request_link_enabled` | `bool` | No |  |
| `public_jobs` | `bool` | No |  |
| `readme_url` | `string` | No |  |
| `releases_access_level` | `string` | No |  |
| `remove_source_branch_after_merge` | `bool` | No |  |
| `repository_access_level` | `string` | No |  |
| `repository_object_format` | `string` | No |  |
| `repository_storage` | `string` | No |  |
| `request_access_enabled` | `bool` | No |  |
| `requirements_access_level` | `string` | No |  |
| `requirements_enabled` | `string` | No |  |
| `resolve_outdated_diff_discussions` | `bool` | No |  |
| `resource_group_default_process_mode` | `string` | No |  |
| `restrict_user_defined_variables` | `bool` | No |  |
| `runner_token_expiration_interval` | `int` | No |  |
| `runners_token` | `string` | No |  |
| `secret_push_protection_enabled` | `bool` | No |  |
| `security_and_compliance_access_level` | `string` | No |  |
| `security_and_compliance_enabled` | `string` | No |  |
| `service_desk_address` | `string` | No |  |
| `service_desk_enabled` | `bool` | No |  |
| `shared_runners_enabled` | `bool` | No |  |
| `shared_with_groups` | `array` | No |  |
| `show_diff_preview_in_email` | `bool` | No |  |
| `snippets_access_level` | `string` | No |  |
| `snippets_enabled` | `bool` | No |  |
| `spp_repository_pipeline_access` | `bool` | No | The spp_repository_pipeline_access setting is only visible if the security_orchestration_policies feature is available. |
| `squash_commit_template` | `string` | No |  |
| `squash_option` | `string` | No |  |
| `ssh_url_to_repo` | `string` | No |  |
| `star_count` | `int` | No |  |
| `statistics` | `array` | No |  |
| `suggestion_commit_message` | `string` | No |  |
| `tag_list` | `array` | No |  |
| `topics` | `array` | No |  |
| `updated_at` | `string` | No |  |
| `visibility` | `string` | No |  |
| `warn_about_potentially_unwanted_characters` | `bool` | No |  |
| `web_based_commit_signing_enabled` | `string` | No |  |
| `web_url` | `string` | No |  |
| `wiki_access_level` | `string` | No |  |
| `wiki_enabled` | `bool` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Project()->create([
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Project()->list();
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Project()->remove(["id" => "id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Project()->update([
  "id" => "id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ProjectEntity`

Create a new `ProjectEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```php
$client = new GitlabSDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
```

