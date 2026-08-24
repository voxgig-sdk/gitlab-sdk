# Gitlab Python SDK



The Python SDK for the Gitlab API — an entity-oriented client following Pythonic conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.ApiEntitiesProjectWithAccess()` — each
carrying a small, uniform set of operations (`list`, `load`, `create`, `update`, `remove`) instead of raw URL
paths and query strings. You work with named resources and verbs, which
keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to PyPI. Install it from the GitHub
release tag (`py/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/gitlab-sdk/releases)) or
from a source checkout:

```bash
pip install -e .
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```python
import os
from gitlab_sdk import GitlabSDK

client = GitlabSDK({
    "apikey": os.environ.get("GITLAB_APIKEY"),
})
```

### 3. Load an apientitiesprojectwithaccess

`load()` returns the ENTITY — call data_get() for the record — and raises on error.

```python
try:
    apientitiesprojectwithaccess = client.ApiEntitiesProjectWithAccess().load({"id": "example_id"})
    print(apientitiesprojectwithaccess)
except Exception as err:
    print(f"load failed: {err}")
```


## Error handling

Entity operations raise on failure, so wrap them in `try` / `except`:

```python
try:
    apientitiesprojectwithaccess = client.ApiEntitiesProjectWithAccess().load({"id": "example_id"})
    print(apientitiesprojectwithaccess)
except Exception as err:
    print(f"load failed: {err}")
```

`direct()` does **not** raise — it returns the result envelope. Branch
on `ok`; on failure `status` holds the HTTP status (for error responses)
and `err` holds a transport error, so read both defensively:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example_id"},
})

if not result["ok"]:
    print("request failed:", result.get("status"), result.get("err"))
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})

if result["ok"]:
    print(result["status"])  # 200
    print(result["data"])    # response body
else:
    # A non-2xx response carries status + data (the error body); a
    # transport-level failure carries err instead. Only one is present, so
    # read both with .get() rather than indexing a key that may be absent.
    print(result.get("status"), result.get("err"))
```

### Prepare a request without sending it

```python
# prepare() returns the fetch definition and raises on error.
fetchdef = client.prepare({
    "path": "/api/resource/{id}",
    "method": "DELETE",
    "params": {"id": "example"},
})

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```python
client = GitlabSDK.test()

# Entity ops return the ENTITY and raises on error;
# call data_get() for the record.
apientitiesprojectwithaccess = client.ApiEntitiesProjectWithAccess().load({"id": "test01"})
# apientitiesprojectwithaccess contains the mock response record
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```python
def mock_fetch(url, init):
    return {
        "status": 200,
        "statusText": "OK",
        "headers": {},
        "json": lambda: {"id": "mock01"},
    }, None

client = GitlabSDK({
    "base": "http://localhost:8080",
    "system": {
        "fetch": mock_fetch,
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
cd py && pytest test/
```


## Reference

### GitlabSDK

```python
from gitlab_sdk import GitlabSDK

client = GitlabSDK(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `str` | API key for authentication. |
| `base` | `str` | Base URL of the API server. |
| `prefix` | `str` | URL path prefix prepended to all requests. |
| `suffix` | `str` | URL path suffix appended to all requests. |
| `feature` | `dict` | Feature activation flags. |
| `extend` | `list` | Additional Feature instances to load. |
| `system` | `dict` | System overrides (e.g. custom `fetch` function). |

### test

```python
client = GitlabSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `None`.

### GitlabSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> dict` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> dict` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> dict` | Build and send an HTTP request. Returns a result dict (branch on `ok`). |
| `ApiEntitiesProjectWithAccess` | `(data) -> ApiEntitiesProjectWithAccessEntity` | Create an ApiEntitiesProjectWithAccess entity instance. |
| `Project` | `(data) -> ProjectEntity` | Create a Project entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> any` | Load a single entity by match criteria. Raises on error. |
| `list` | `(reqmatch, ctrl) -> list` | List entities matching the criteria. Raises on error. |
| `create` | `(reqdata, ctrl) -> any` | Create a new entity. Raises on error. |
| `update` | `(reqdata, ctrl) -> any` | Update an existing entity. Raises on error. |
| `remove` | `(reqmatch, ctrl) -> any` | Remove an entity. Raises on error. |
| `data_get` | `() -> dict` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> dict` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> str` | Return the entity name. |

### Result shape

Entity operations return the ENTITY (call data_get() for the record) (a `dict` for single-entity
ops, a `list` for `list`) and raise on error. Wrap calls in
`try`/`except` to handle failures.

The `direct()` escape hatch never raises — it returns a result `dict`
you branch on via `result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `True` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `dict` | Response headers. |
| `data` | `any` | Parsed JSON response body. |

On error, `ok` is `False` and `err` contains the error value.

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

Create an instance: `api_entities_project_with_access = client.ApiEntitiesProjectWithAccess()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_merge_on_skipped_pipeline` | `bool` |  |
| `allow_pipeline_trigger_approve_deployment` | `bool` |  |
| `analytics_access_level` | `str` |  |
| `approvals_before_merge` | `str` |  |
| `archived` | `bool` |  |
| `auto_cancel_pending_pipelines` | `str` |  |
| `auto_devops_deploy_strategy` | `str` |  |
| `auto_devops_enabled` | `bool` |  |
| `auto_duo_code_review_enabled` | `str` |  |
| `autoclose_referenced_issues` | `bool` |  |
| `avatar_url` | `str` |  |
| `build_git_strategy` | `str` |  |
| `build_timeout` | `int` |  |
| `builds_access_level` | `str` |  |
| `can_create_merge_request_in` | `bool` |  |
| `ci_allow_fork_pipelines_to_run_in_parent_project` | `bool` |  |
| `ci_config_path` | `str` |  |
| `ci_default_git_depth` | `int` |  |
| `ci_delete_pipelines_in_seconds` | `int` |  |
| `ci_forward_deployment_enabled` | `bool` |  |
| `ci_forward_deployment_rollback_allowed` | `bool` |  |
| `ci_id_token_sub_claim_components` | `list` |  |
| `ci_job_token_scope_enabled` | `bool` |  |
| `ci_pipeline_variables_minimum_override_role` | `str` |  |
| `ci_push_repository_for_job_token_allowed` | `bool` |  |
| `ci_restrict_pipeline_cancellation_role` | `str` |  |
| `ci_separated_caches` | `bool` |  |
| `compliance_frameworks` | `str` |  |
| `container_expiration_policy` | `dict` |  |
| `container_registry_access_level` | `str` |  |
| `container_registry_enabled` | `bool` |  |
| `container_registry_image_prefix` | `str` |  |
| `created_at` | `str` |  |
| `creator_id` | `int` |  |
| `custom_attributes` | `dict` | API_Entities_CustomAttribute model |
| `default_branch` | `str` |  |
| `description` | `str` |  |
| `description_html` | `str` |  |
| `duo_remote_flows_enabled` | `str` |  |
| `emails_disabled` | `bool` |  |
| `emails_enabled` | `bool` |  |
| `empty_repo` | `bool` |  |
| `enforce_auth_checks_on_uploads` | `bool` |  |
| `environments_access_level` | `str` |  |
| `external_authorization_classification_label` | `str` |  |
| `feature_flags_access_level` | `str` |  |
| `forked_from_project` | `dict` | API_Entities_BasicProjectDetails model |
| `forking_access_level` | `str` |  |
| `forks_count` | `int` |  |
| `group_runners_enabled` | `bool` |  |
| `http_url_to_repo` | `str` |  |
| `id` | `int` |  |
| `import_error` | `str` |  |
| `import_status` | `str` |  |
| `import_type` | `str` |  |
| `import_url` | `str` |  |
| `infrastructure_access_level` | `str` |  |
| `issue_branch_template` | `str` |  |
| `issues_access_level` | `str` |  |
| `issues_enabled` | `bool` |  |
| `issues_template` | `str` |  |
| `jobs_enabled` | `bool` |  |
| `keep_latest_artifact` | `bool` |  |
| `last_activity_at` | `str` |  |
| `lfs_enabled` | `bool` |  |
| `license` | `dict` |  |
| `license_url` | `str` |  |
| `links` | `dict` |  |
| `marked_for_deletion_at` | `str` |  |
| `marked_for_deletion_on` | `str` |  |
| `max_artifacts_size` | `int` |  |
| `merge_commit_template` | `str` |  |
| `merge_method` | `str` |  |
| `merge_pipelines_enabled` | `str` |  |
| `merge_request_title_regex` | `str` |  |
| `merge_request_title_regex_description` | `str` |  |
| `merge_requests_access_level` | `str` |  |
| `merge_requests_enabled` | `bool` |  |
| `merge_requests_template` | `str` |  |
| `merge_trains_enabled` | `str` |  |
| `merge_trains_skip_train_allowed` | `str` |  |
| `mirror` | `str` |  |
| `mirror_overwrites_diverged_branches` | `str` |  |
| `mirror_trigger_builds` | `str` |  |
| `mirror_user_id` | `str` |  |
| `model_experiments_access_level` | `str` |  |
| `model_registry_access_level` | `str` |  |
| `monitor_access_level` | `str` |  |
| `mr_default_target_self` | `bool` |  |
| `name` | `str` |  |
| `name_with_namespace` | `str` |  |
| `namespace` | `dict` |  |
| `only_allow_merge_if_all_discussions_are_resolved` | `bool` |  |
| `only_allow_merge_if_all_status_checks_passed` | `str` |  |
| `only_allow_merge_if_pipeline_succeeds` | `bool` |  |
| `only_mirror_protected_branches` | `str` |  |
| `open_issues_count` | `int` |  |
| `owner` | `dict` | API_Entities_UserBasic model |
| `package_registry_access_level` | `str` |  |
| `packages_enabled` | `bool` |  |
| `pages_access_level` | `str` |  |
| `path` | `str` |  |
| `path_with_namespace` | `str` |  |
| `permissions` | `dict` |  |
| `pre_receive_secret_detection_enabled` | `bool` |  |
| `prevent_merge_without_jira_issue` | `str` |  |
| `printing_merge_request_link_enabled` | `bool` |  |
| `public_jobs` | `bool` |  |
| `readme_url` | `str` |  |
| `releases_access_level` | `str` |  |
| `remove_source_branch_after_merge` | `bool` |  |
| `repository_access_level` | `str` |  |
| `repository_object_format` | `str` |  |
| `repository_storage` | `str` |  |
| `request_access_enabled` | `bool` |  |
| `requirements_access_level` | `str` |  |
| `requirements_enabled` | `str` |  |
| `resolve_outdated_diff_discussions` | `bool` |  |
| `resource_group_default_process_mode` | `str` |  |
| `restrict_user_defined_variables` | `bool` |  |
| `runner_token_expiration_interval` | `int` |  |
| `runners_token` | `str` |  |
| `secret_push_protection_enabled` | `bool` |  |
| `security_and_compliance_access_level` | `str` |  |
| `security_and_compliance_enabled` | `str` |  |
| `service_desk_address` | `str` |  |
| `service_desk_enabled` | `bool` |  |
| `shared_runners_enabled` | `bool` |  |
| `shared_with_groups` | `list` |  |
| `show_diff_preview_in_email` | `bool` |  |
| `snippets_access_level` | `str` |  |
| `snippets_enabled` | `bool` |  |
| `spp_repository_pipeline_access` | `bool` | The spp_repository_pipeline_access setting is only visible if the security_orchestration_policies feature is available. |
| `squash_commit_template` | `str` |  |
| `squash_option` | `str` |  |
| `ssh_url_to_repo` | `str` |  |
| `star_count` | `int` |  |
| `statistics` | `dict` |  |
| `suggestion_commit_message` | `str` |  |
| `tag_list` | `list` |  |
| `topics` | `list` |  |
| `updated_at` | `str` |  |
| `visibility` | `str` |  |
| `warn_about_potentially_unwanted_characters` | `bool` |  |
| `web_based_commit_signing_enabled` | `str` |  |
| `web_url` | `str` |  |
| `wiki_access_level` | `str` |  |
| `wiki_enabled` | `bool` |  |

#### Example: Load

```python
api_entities_project_with_access = client.ApiEntitiesProjectWithAccess().load({"id": "api_entities_project_with_access_id"})
```


### Project

Create an instance: `project = client.Project()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_merge_on_skipped_pipeline` | `bool` |  |
| `allow_pipeline_trigger_approve_deployment` | `bool` |  |
| `analytics_access_level` | `str` |  |
| `approvals_before_merge` | `str` |  |
| `archived` | `bool` |  |
| `auto_cancel_pending_pipelines` | `str` |  |
| `auto_devops_deploy_strategy` | `str` |  |
| `auto_devops_enabled` | `bool` |  |
| `auto_duo_code_review_enabled` | `str` |  |
| `autoclose_referenced_issues` | `bool` |  |
| `avatar_url` | `str` |  |
| `build_git_strategy` | `str` |  |
| `build_timeout` | `int` |  |
| `builds_access_level` | `str` |  |
| `can_create_merge_request_in` | `bool` |  |
| `ci_allow_fork_pipelines_to_run_in_parent_project` | `bool` |  |
| `ci_config_path` | `str` |  |
| `ci_default_git_depth` | `int` |  |
| `ci_delete_pipelines_in_seconds` | `int` |  |
| `ci_forward_deployment_enabled` | `bool` |  |
| `ci_forward_deployment_rollback_allowed` | `bool` |  |
| `ci_id_token_sub_claim_components` | `list` |  |
| `ci_job_token_scope_enabled` | `bool` |  |
| `ci_pipeline_variables_minimum_override_role` | `str` |  |
| `ci_push_repository_for_job_token_allowed` | `bool` |  |
| `ci_restrict_pipeline_cancellation_role` | `str` |  |
| `ci_separated_caches` | `bool` |  |
| `compliance_frameworks` | `str` |  |
| `container_expiration_policy` | `dict` |  |
| `container_registry_access_level` | `str` |  |
| `container_registry_enabled` | `bool` |  |
| `container_registry_image_prefix` | `str` |  |
| `created_at` | `str` |  |
| `creator_id` | `int` |  |
| `custom_attributes` | `dict` | API_Entities_CustomAttribute model |
| `default_branch` | `str` |  |
| `description` | `str` |  |
| `description_html` | `str` |  |
| `duo_remote_flows_enabled` | `str` |  |
| `emails_disabled` | `bool` |  |
| `emails_enabled` | `bool` |  |
| `empty_repo` | `bool` |  |
| `enforce_auth_checks_on_uploads` | `bool` |  |
| `environments_access_level` | `str` |  |
| `external_authorization_classification_label` | `str` |  |
| `feature_flags_access_level` | `str` |  |
| `forked_from_project` | `dict` | API_Entities_BasicProjectDetails model |
| `forking_access_level` | `str` |  |
| `forks_count` | `int` |  |
| `group_runners_enabled` | `bool` |  |
| `http_url_to_repo` | `str` |  |
| `id` | `int` |  |
| `import_error` | `str` |  |
| `import_status` | `str` |  |
| `import_type` | `str` |  |
| `import_url` | `str` |  |
| `infrastructure_access_level` | `str` |  |
| `issue_branch_template` | `str` |  |
| `issues_access_level` | `str` |  |
| `issues_enabled` | `bool` |  |
| `issues_template` | `str` |  |
| `jobs_enabled` | `bool` |  |
| `keep_latest_artifact` | `bool` |  |
| `last_activity_at` | `str` |  |
| `lfs_enabled` | `bool` |  |
| `license` | `dict` |  |
| `license_url` | `str` |  |
| `links` | `dict` |  |
| `marked_for_deletion_at` | `str` |  |
| `marked_for_deletion_on` | `str` |  |
| `max_artifacts_size` | `int` |  |
| `merge_commit_template` | `str` |  |
| `merge_method` | `str` |  |
| `merge_pipelines_enabled` | `str` |  |
| `merge_request_title_regex` | `str` |  |
| `merge_request_title_regex_description` | `str` |  |
| `merge_requests_access_level` | `str` |  |
| `merge_requests_enabled` | `bool` |  |
| `merge_requests_template` | `str` |  |
| `merge_trains_enabled` | `str` |  |
| `merge_trains_skip_train_allowed` | `str` |  |
| `mirror` | `str` |  |
| `mirror_overwrites_diverged_branches` | `str` |  |
| `mirror_trigger_builds` | `str` |  |
| `mirror_user_id` | `str` |  |
| `model_experiments_access_level` | `str` |  |
| `model_registry_access_level` | `str` |  |
| `monitor_access_level` | `str` |  |
| `mr_default_target_self` | `bool` |  |
| `name` | `str` |  |
| `name_with_namespace` | `str` |  |
| `namespace` | `dict` |  |
| `only_allow_merge_if_all_discussions_are_resolved` | `bool` |  |
| `only_allow_merge_if_all_status_checks_passed` | `str` |  |
| `only_allow_merge_if_pipeline_succeeds` | `bool` |  |
| `only_mirror_protected_branches` | `str` |  |
| `open_issues_count` | `int` |  |
| `owner` | `dict` | API_Entities_UserBasic model |
| `package_registry_access_level` | `str` |  |
| `packages_enabled` | `bool` |  |
| `pages_access_level` | `str` |  |
| `path` | `str` |  |
| `path_with_namespace` | `str` |  |
| `pre_receive_secret_detection_enabled` | `bool` |  |
| `prevent_merge_without_jira_issue` | `str` |  |
| `printing_merge_request_link_enabled` | `bool` |  |
| `public_jobs` | `bool` |  |
| `readme_url` | `str` |  |
| `releases_access_level` | `str` |  |
| `remove_source_branch_after_merge` | `bool` |  |
| `repository_access_level` | `str` |  |
| `repository_object_format` | `str` |  |
| `repository_storage` | `str` |  |
| `request_access_enabled` | `bool` |  |
| `requirements_access_level` | `str` |  |
| `requirements_enabled` | `str` |  |
| `resolve_outdated_diff_discussions` | `bool` |  |
| `resource_group_default_process_mode` | `str` |  |
| `restrict_user_defined_variables` | `bool` |  |
| `runner_token_expiration_interval` | `int` |  |
| `runners_token` | `str` |  |
| `secret_push_protection_enabled` | `bool` |  |
| `security_and_compliance_access_level` | `str` |  |
| `security_and_compliance_enabled` | `str` |  |
| `service_desk_address` | `str` |  |
| `service_desk_enabled` | `bool` |  |
| `shared_runners_enabled` | `bool` |  |
| `shared_with_groups` | `list` |  |
| `show_diff_preview_in_email` | `bool` |  |
| `snippets_access_level` | `str` |  |
| `snippets_enabled` | `bool` |  |
| `spp_repository_pipeline_access` | `bool` | The spp_repository_pipeline_access setting is only visible if the security_orchestration_policies feature is available. |
| `squash_commit_template` | `str` |  |
| `squash_option` | `str` |  |
| `ssh_url_to_repo` | `str` |  |
| `star_count` | `int` |  |
| `statistics` | `dict` |  |
| `suggestion_commit_message` | `str` |  |
| `tag_list` | `list` |  |
| `topics` | `list` |  |
| `updated_at` | `str` |  |
| `visibility` | `str` |  |
| `warn_about_potentially_unwanted_characters` | `bool` |  |
| `web_based_commit_signing_enabled` | `str` |  |
| `web_url` | `str` |  |
| `wiki_access_level` | `str` |  |
| `wiki_enabled` | `bool` |  |

#### Example: List

```python
projects = client.Project().list()
```

#### Example: Create

```python
project = client.Project().create({
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

Features are the extension mechanism. A feature is a Python class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as dicts

The Python SDK uses plain dicts throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a dict.

### Module structure

```
py/
├── gitlab_sdk.py         -- Main SDK module
├── config.py                    -- Configuration
├── features.py                  -- Feature factory
├── core/                        -- Core types and context
├── entity/                      -- Entity implementations
├── feature/                     -- Built-in features (Base, Test, Log)
├── utility/                     -- Utility functions and struct library
└── test/                        -- Test suites
```

The main module (`gitlab_sdk`) exports the SDK class.
Import entity or utility modules directly only when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```python
apientitiesprojectwithaccess = client.ApiEntitiesProjectWithAccess()
apientitiesprojectwithaccess.load({"id": "example_id"})

# apientitiesprojectwithaccess.data_get() now returns the apientitiesprojectwithaccess data from the last load
# apientitiesprojectwithaccess.match_get() returns the last match criteria
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
