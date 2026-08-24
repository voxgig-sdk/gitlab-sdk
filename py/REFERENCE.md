# Gitlab Python SDK Reference

Complete API reference for the Gitlab Python SDK.


## GitlabSDK

### Constructor

```python
from gitlab_sdk import GitlabSDK

client = GitlabSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["apikey"]` | `str` | API key for authentication. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `GitlabSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = GitlabSDK.test()
```


### Instance Methods

#### `ApiEntitiesProjectWithAccess(data=None)`

Create a new `ApiEntitiesProjectWithAccessEntity` instance. Pass `None` for no initial data.

#### `Project(data=None)`

Create a new `ProjectEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## ApiEntitiesProjectWithAccessEntity

```python
api_entities_project_with_access = client.ApiEntitiesProjectWithAccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_merge_on_skipped_pipeline` | `bool` | No |  |
| `allow_pipeline_trigger_approve_deployment` | `bool` | No |  |
| `analytics_access_level` | `str` | No |  |
| `approvals_before_merge` | `str` | No |  |
| `archived` | `bool` | No |  |
| `auto_cancel_pending_pipelines` | `str` | No |  |
| `auto_devops_deploy_strategy` | `str` | No |  |
| `auto_devops_enabled` | `bool` | No |  |
| `auto_duo_code_review_enabled` | `str` | No |  |
| `autoclose_referenced_issues` | `bool` | No |  |
| `avatar_url` | `str` | No |  |
| `build_git_strategy` | `str` | No |  |
| `build_timeout` | `int` | No |  |
| `builds_access_level` | `str` | No |  |
| `can_create_merge_request_in` | `bool` | No |  |
| `ci_allow_fork_pipelines_to_run_in_parent_project` | `bool` | No |  |
| `ci_config_path` | `str` | No |  |
| `ci_default_git_depth` | `int` | No |  |
| `ci_delete_pipelines_in_seconds` | `int` | No |  |
| `ci_forward_deployment_enabled` | `bool` | No |  |
| `ci_forward_deployment_rollback_allowed` | `bool` | No |  |
| `ci_id_token_sub_claim_components` | `list` | No |  |
| `ci_job_token_scope_enabled` | `bool` | No |  |
| `ci_pipeline_variables_minimum_override_role` | `str` | No |  |
| `ci_push_repository_for_job_token_allowed` | `bool` | No |  |
| `ci_restrict_pipeline_cancellation_role` | `str` | No |  |
| `ci_separated_caches` | `bool` | No |  |
| `compliance_frameworks` | `str` | No |  |
| `container_expiration_policy` | `dict` | No |  |
| `container_registry_access_level` | `str` | No |  |
| `container_registry_enabled` | `bool` | No |  |
| `container_registry_image_prefix` | `str` | No |  |
| `created_at` | `str` | No |  |
| `creator_id` | `int` | No |  |
| `custom_attributes` | `dict` | No | API_Entities_CustomAttribute model |
| `default_branch` | `str` | No |  |
| `description` | `str` | No |  |
| `description_html` | `str` | No |  |
| `duo_remote_flows_enabled` | `str` | No |  |
| `emails_disabled` | `bool` | No |  |
| `emails_enabled` | `bool` | No |  |
| `empty_repo` | `bool` | No |  |
| `enforce_auth_checks_on_uploads` | `bool` | No |  |
| `environments_access_level` | `str` | No |  |
| `external_authorization_classification_label` | `str` | No |  |
| `feature_flags_access_level` | `str` | No |  |
| `forked_from_project` | `dict` | No | API_Entities_BasicProjectDetails model |
| `forking_access_level` | `str` | No |  |
| `forks_count` | `int` | No |  |
| `group_runners_enabled` | `bool` | No |  |
| `http_url_to_repo` | `str` | No |  |
| `id` | `int` | No |  |
| `import_error` | `str` | No |  |
| `import_status` | `str` | No |  |
| `import_type` | `str` | No |  |
| `import_url` | `str` | No |  |
| `infrastructure_access_level` | `str` | No |  |
| `issue_branch_template` | `str` | No |  |
| `issues_access_level` | `str` | No |  |
| `issues_enabled` | `bool` | No |  |
| `issues_template` | `str` | No |  |
| `jobs_enabled` | `bool` | No |  |
| `keep_latest_artifact` | `bool` | No |  |
| `last_activity_at` | `str` | No |  |
| `lfs_enabled` | `bool` | No |  |
| `license` | `dict` | No |  |
| `license_url` | `str` | No |  |
| `links` | `dict` | No |  |
| `marked_for_deletion_at` | `str` | No |  |
| `marked_for_deletion_on` | `str` | No |  |
| `max_artifacts_size` | `int` | No |  |
| `merge_commit_template` | `str` | No |  |
| `merge_method` | `str` | No |  |
| `merge_pipelines_enabled` | `str` | No |  |
| `merge_request_title_regex` | `str` | No |  |
| `merge_request_title_regex_description` | `str` | No |  |
| `merge_requests_access_level` | `str` | No |  |
| `merge_requests_enabled` | `bool` | No |  |
| `merge_requests_template` | `str` | No |  |
| `merge_trains_enabled` | `str` | No |  |
| `merge_trains_skip_train_allowed` | `str` | No |  |
| `mirror` | `str` | No |  |
| `mirror_overwrites_diverged_branches` | `str` | No |  |
| `mirror_trigger_builds` | `str` | No |  |
| `mirror_user_id` | `str` | No |  |
| `model_experiments_access_level` | `str` | No |  |
| `model_registry_access_level` | `str` | No |  |
| `monitor_access_level` | `str` | No |  |
| `mr_default_target_self` | `bool` | No |  |
| `name` | `str` | No |  |
| `name_with_namespace` | `str` | No |  |
| `namespace` | `dict` | No |  |
| `only_allow_merge_if_all_discussions_are_resolved` | `bool` | No |  |
| `only_allow_merge_if_all_status_checks_passed` | `str` | No |  |
| `only_allow_merge_if_pipeline_succeeds` | `bool` | No |  |
| `only_mirror_protected_branches` | `str` | No |  |
| `open_issues_count` | `int` | No |  |
| `owner` | `dict` | No | API_Entities_UserBasic model |
| `package_registry_access_level` | `str` | No |  |
| `packages_enabled` | `bool` | No |  |
| `pages_access_level` | `str` | No |  |
| `path` | `str` | No |  |
| `path_with_namespace` | `str` | No |  |
| `permissions` | `dict` | No |  |
| `pre_receive_secret_detection_enabled` | `bool` | No |  |
| `prevent_merge_without_jira_issue` | `str` | No |  |
| `printing_merge_request_link_enabled` | `bool` | No |  |
| `public_jobs` | `bool` | No |  |
| `readme_url` | `str` | No |  |
| `releases_access_level` | `str` | No |  |
| `remove_source_branch_after_merge` | `bool` | No |  |
| `repository_access_level` | `str` | No |  |
| `repository_object_format` | `str` | No |  |
| `repository_storage` | `str` | No |  |
| `request_access_enabled` | `bool` | No |  |
| `requirements_access_level` | `str` | No |  |
| `requirements_enabled` | `str` | No |  |
| `resolve_outdated_diff_discussions` | `bool` | No |  |
| `resource_group_default_process_mode` | `str` | No |  |
| `restrict_user_defined_variables` | `bool` | No |  |
| `runner_token_expiration_interval` | `int` | No |  |
| `runners_token` | `str` | No |  |
| `secret_push_protection_enabled` | `bool` | No |  |
| `security_and_compliance_access_level` | `str` | No |  |
| `security_and_compliance_enabled` | `str` | No |  |
| `service_desk_address` | `str` | No |  |
| `service_desk_enabled` | `bool` | No |  |
| `shared_runners_enabled` | `bool` | No |  |
| `shared_with_groups` | `list` | No |  |
| `show_diff_preview_in_email` | `bool` | No |  |
| `snippets_access_level` | `str` | No |  |
| `snippets_enabled` | `bool` | No |  |
| `spp_repository_pipeline_access` | `bool` | No | The spp_repository_pipeline_access setting is only visible if the security_orchestration_policies feature is available. |
| `squash_commit_template` | `str` | No |  |
| `squash_option` | `str` | No |  |
| `ssh_url_to_repo` | `str` | No |  |
| `star_count` | `int` | No |  |
| `statistics` | `dict` | No |  |
| `suggestion_commit_message` | `str` | No |  |
| `tag_list` | `list` | No |  |
| `topics` | `list` | No |  |
| `updated_at` | `str` | No |  |
| `visibility` | `str` | No |  |
| `warn_about_potentially_unwanted_characters` | `bool` | No |  |
| `web_based_commit_signing_enabled` | `str` | No |  |
| `web_url` | `str` | No |  |
| `wiki_access_level` | `str` | No |  |
| `wiki_enabled` | `bool` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesProjectWithAccess().load({"id": "api_entities_project_with_access_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesProjectWithAccessEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ProjectEntity

```python
project = client.Project()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_merge_on_skipped_pipeline` | `bool` | No |  |
| `allow_pipeline_trigger_approve_deployment` | `bool` | No |  |
| `analytics_access_level` | `str` | No |  |
| `approvals_before_merge` | `str` | No |  |
| `archived` | `bool` | No |  |
| `auto_cancel_pending_pipelines` | `str` | No |  |
| `auto_devops_deploy_strategy` | `str` | No |  |
| `auto_devops_enabled` | `bool` | No |  |
| `auto_duo_code_review_enabled` | `str` | No |  |
| `autoclose_referenced_issues` | `bool` | No |  |
| `avatar_url` | `str` | No |  |
| `build_git_strategy` | `str` | No |  |
| `build_timeout` | `int` | No |  |
| `builds_access_level` | `str` | No |  |
| `can_create_merge_request_in` | `bool` | No |  |
| `ci_allow_fork_pipelines_to_run_in_parent_project` | `bool` | No |  |
| `ci_config_path` | `str` | No |  |
| `ci_default_git_depth` | `int` | No |  |
| `ci_delete_pipelines_in_seconds` | `int` | No |  |
| `ci_forward_deployment_enabled` | `bool` | No |  |
| `ci_forward_deployment_rollback_allowed` | `bool` | No |  |
| `ci_id_token_sub_claim_components` | `list` | No |  |
| `ci_job_token_scope_enabled` | `bool` | No |  |
| `ci_pipeline_variables_minimum_override_role` | `str` | No |  |
| `ci_push_repository_for_job_token_allowed` | `bool` | No |  |
| `ci_restrict_pipeline_cancellation_role` | `str` | No |  |
| `ci_separated_caches` | `bool` | No |  |
| `compliance_frameworks` | `str` | No |  |
| `container_expiration_policy` | `dict` | No |  |
| `container_registry_access_level` | `str` | No |  |
| `container_registry_enabled` | `bool` | No |  |
| `container_registry_image_prefix` | `str` | No |  |
| `created_at` | `str` | No |  |
| `creator_id` | `int` | No |  |
| `custom_attributes` | `dict` | No | API_Entities_CustomAttribute model |
| `default_branch` | `str` | No |  |
| `description` | `str` | No |  |
| `description_html` | `str` | No |  |
| `duo_remote_flows_enabled` | `str` | No |  |
| `emails_disabled` | `bool` | No |  |
| `emails_enabled` | `bool` | No |  |
| `empty_repo` | `bool` | No |  |
| `enforce_auth_checks_on_uploads` | `bool` | No |  |
| `environments_access_level` | `str` | No |  |
| `external_authorization_classification_label` | `str` | No |  |
| `feature_flags_access_level` | `str` | No |  |
| `forked_from_project` | `dict` | No | API_Entities_BasicProjectDetails model |
| `forking_access_level` | `str` | No |  |
| `forks_count` | `int` | No |  |
| `group_runners_enabled` | `bool` | No |  |
| `http_url_to_repo` | `str` | No |  |
| `id` | `int` | No |  |
| `import_error` | `str` | No |  |
| `import_status` | `str` | No |  |
| `import_type` | `str` | No |  |
| `import_url` | `str` | No |  |
| `infrastructure_access_level` | `str` | No |  |
| `issue_branch_template` | `str` | No |  |
| `issues_access_level` | `str` | No |  |
| `issues_enabled` | `bool` | No |  |
| `issues_template` | `str` | No |  |
| `jobs_enabled` | `bool` | No |  |
| `keep_latest_artifact` | `bool` | No |  |
| `last_activity_at` | `str` | No |  |
| `lfs_enabled` | `bool` | No |  |
| `license` | `dict` | No |  |
| `license_url` | `str` | No |  |
| `links` | `dict` | No |  |
| `marked_for_deletion_at` | `str` | No |  |
| `marked_for_deletion_on` | `str` | No |  |
| `max_artifacts_size` | `int` | No |  |
| `merge_commit_template` | `str` | No |  |
| `merge_method` | `str` | No |  |
| `merge_pipelines_enabled` | `str` | No |  |
| `merge_request_title_regex` | `str` | No |  |
| `merge_request_title_regex_description` | `str` | No |  |
| `merge_requests_access_level` | `str` | No |  |
| `merge_requests_enabled` | `bool` | No |  |
| `merge_requests_template` | `str` | No |  |
| `merge_trains_enabled` | `str` | No |  |
| `merge_trains_skip_train_allowed` | `str` | No |  |
| `mirror` | `str` | No |  |
| `mirror_overwrites_diverged_branches` | `str` | No |  |
| `mirror_trigger_builds` | `str` | No |  |
| `mirror_user_id` | `str` | No |  |
| `model_experiments_access_level` | `str` | No |  |
| `model_registry_access_level` | `str` | No |  |
| `monitor_access_level` | `str` | No |  |
| `mr_default_target_self` | `bool` | No |  |
| `name` | `str` | No |  |
| `name_with_namespace` | `str` | No |  |
| `namespace` | `dict` | No |  |
| `only_allow_merge_if_all_discussions_are_resolved` | `bool` | No |  |
| `only_allow_merge_if_all_status_checks_passed` | `str` | No |  |
| `only_allow_merge_if_pipeline_succeeds` | `bool` | No |  |
| `only_mirror_protected_branches` | `str` | No |  |
| `open_issues_count` | `int` | No |  |
| `owner` | `dict` | No | API_Entities_UserBasic model |
| `package_registry_access_level` | `str` | No |  |
| `packages_enabled` | `bool` | No |  |
| `pages_access_level` | `str` | No |  |
| `path` | `str` | No |  |
| `path_with_namespace` | `str` | No |  |
| `pre_receive_secret_detection_enabled` | `bool` | No |  |
| `prevent_merge_without_jira_issue` | `str` | No |  |
| `printing_merge_request_link_enabled` | `bool` | No |  |
| `public_jobs` | `bool` | No |  |
| `readme_url` | `str` | No |  |
| `releases_access_level` | `str` | No |  |
| `remove_source_branch_after_merge` | `bool` | No |  |
| `repository_access_level` | `str` | No |  |
| `repository_object_format` | `str` | No |  |
| `repository_storage` | `str` | No |  |
| `request_access_enabled` | `bool` | No |  |
| `requirements_access_level` | `str` | No |  |
| `requirements_enabled` | `str` | No |  |
| `resolve_outdated_diff_discussions` | `bool` | No |  |
| `resource_group_default_process_mode` | `str` | No |  |
| `restrict_user_defined_variables` | `bool` | No |  |
| `runner_token_expiration_interval` | `int` | No |  |
| `runners_token` | `str` | No |  |
| `secret_push_protection_enabled` | `bool` | No |  |
| `security_and_compliance_access_level` | `str` | No |  |
| `security_and_compliance_enabled` | `str` | No |  |
| `service_desk_address` | `str` | No |  |
| `service_desk_enabled` | `bool` | No |  |
| `shared_runners_enabled` | `bool` | No |  |
| `shared_with_groups` | `list` | No |  |
| `show_diff_preview_in_email` | `bool` | No |  |
| `snippets_access_level` | `str` | No |  |
| `snippets_enabled` | `bool` | No |  |
| `spp_repository_pipeline_access` | `bool` | No | The spp_repository_pipeline_access setting is only visible if the security_orchestration_policies feature is available. |
| `squash_commit_template` | `str` | No |  |
| `squash_option` | `str` | No |  |
| `ssh_url_to_repo` | `str` | No |  |
| `star_count` | `int` | No |  |
| `statistics` | `dict` | No |  |
| `suggestion_commit_message` | `str` | No |  |
| `tag_list` | `list` | No |  |
| `topics` | `list` | No |  |
| `updated_at` | `str` | No |  |
| `visibility` | `str` | No |  |
| `warn_about_potentially_unwanted_characters` | `bool` | No |  |
| `web_based_commit_signing_enabled` | `str` | No |  |
| `web_url` | `str` | No |  |
| `wiki_access_level` | `str` | No |  |
| `wiki_enabled` | `bool` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Project().create({
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Project().list()
for project in results:
    print(project)
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Project().remove({"id": "id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Project().update({
    "id": "id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```python
client = GitlabSDK({
    "feature": {
        "test": {"active": True},
    },
})
```

