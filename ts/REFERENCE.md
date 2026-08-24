# Gitlab TypeScript SDK Reference

Complete API reference for the Gitlab TypeScript SDK.


## GitlabSDK

### Constructor

```ts
new GitlabSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `GitlabSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = GitlabSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `GitlabSDK` instance in test mode.


### Instance Methods

#### `ApiEntitiesProjectWithAccess(data?: object)`

Create a new `ApiEntitiesProjectWithAccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesProjectWithAccessEntity` instance.

#### `Project(data?: object)`

Create a new `Project` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProjectEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `GitlabSDK.test()`.

**Returns:** `GitlabSDK` instance in test mode.


---

## ApiEntitiesProjectWithAccessEntity

```ts
const api_entities_project_with_access = client.ApiEntitiesProjectWithAccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_merge_on_skipped_pipeline` | `boolean` | No |  |
| `allow_pipeline_trigger_approve_deployment` | `boolean` | No |  |
| `analytics_access_level` | `string` | No |  |
| `approvals_before_merge` | `string` | No |  |
| `archived` | `boolean` | No |  |
| `auto_cancel_pending_pipelines` | `string` | No |  |
| `auto_devops_deploy_strategy` | `string` | No |  |
| `auto_devops_enabled` | `boolean` | No |  |
| `auto_duo_code_review_enabled` | `string` | No |  |
| `autoclose_referenced_issues` | `boolean` | No |  |
| `avatar_url` | `string` | No |  |
| `build_git_strategy` | `string` | No |  |
| `build_timeout` | `number` | No |  |
| `builds_access_level` | `string` | No |  |
| `can_create_merge_request_in` | `boolean` | No |  |
| `ci_allow_fork_pipelines_to_run_in_parent_project` | `boolean` | No |  |
| `ci_config_path` | `string` | No |  |
| `ci_default_git_depth` | `number` | No |  |
| `ci_delete_pipelines_in_seconds` | `number` | No |  |
| `ci_forward_deployment_enabled` | `boolean` | No |  |
| `ci_forward_deployment_rollback_allowed` | `boolean` | No |  |
| `ci_id_token_sub_claim_components` | `any[]` | No |  |
| `ci_job_token_scope_enabled` | `boolean` | No |  |
| `ci_pipeline_variables_minimum_override_role` | `string` | No |  |
| `ci_push_repository_for_job_token_allowed` | `boolean` | No |  |
| `ci_restrict_pipeline_cancellation_role` | `string` | No |  |
| `ci_separated_caches` | `boolean` | No |  |
| `compliance_frameworks` | `string` | No |  |
| `container_expiration_policy` | `Record<string, any>` | No |  |
| `container_registry_access_level` | `string` | No |  |
| `container_registry_enabled` | `boolean` | No |  |
| `container_registry_image_prefix` | `string` | No |  |
| `created_at` | `string` | No |  |
| `creator_id` | `number` | No |  |
| `custom_attributes` | `Record<string, any>` | No | API_Entities_CustomAttribute model |
| `default_branch` | `string` | No |  |
| `description` | `string` | No |  |
| `description_html` | `string` | No |  |
| `duo_remote_flows_enabled` | `string` | No |  |
| `emails_disabled` | `boolean` | No |  |
| `emails_enabled` | `boolean` | No |  |
| `empty_repo` | `boolean` | No |  |
| `enforce_auth_checks_on_uploads` | `boolean` | No |  |
| `environments_access_level` | `string` | No |  |
| `external_authorization_classification_label` | `string` | No |  |
| `feature_flags_access_level` | `string` | No |  |
| `forked_from_project` | `Record<string, any>` | No | API_Entities_BasicProjectDetails model |
| `forking_access_level` | `string` | No |  |
| `forks_count` | `number` | No |  |
| `group_runners_enabled` | `boolean` | No |  |
| `http_url_to_repo` | `string` | No |  |
| `id` | `number` | No |  |
| `import_error` | `string` | No |  |
| `import_status` | `string` | No |  |
| `import_type` | `string` | No |  |
| `import_url` | `string` | No |  |
| `infrastructure_access_level` | `string` | No |  |
| `issue_branch_template` | `string` | No |  |
| `issues_access_level` | `string` | No |  |
| `issues_enabled` | `boolean` | No |  |
| `issues_template` | `string` | No |  |
| `jobs_enabled` | `boolean` | No |  |
| `keep_latest_artifact` | `boolean` | No |  |
| `last_activity_at` | `string` | No |  |
| `lfs_enabled` | `boolean` | No |  |
| `license` | `Record<string, any>` | No |  |
| `license_url` | `string` | No |  |
| `links` | `Record<string, any>` | No |  |
| `marked_for_deletion_at` | `string` | No |  |
| `marked_for_deletion_on` | `string` | No |  |
| `max_artifacts_size` | `number` | No |  |
| `merge_commit_template` | `string` | No |  |
| `merge_method` | `string` | No |  |
| `merge_pipelines_enabled` | `string` | No |  |
| `merge_request_title_regex` | `string` | No |  |
| `merge_request_title_regex_description` | `string` | No |  |
| `merge_requests_access_level` | `string` | No |  |
| `merge_requests_enabled` | `boolean` | No |  |
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
| `mr_default_target_self` | `boolean` | No |  |
| `name` | `string` | No |  |
| `name_with_namespace` | `string` | No |  |
| `namespace` | `Record<string, any>` | No |  |
| `only_allow_merge_if_all_discussions_are_resolved` | `boolean` | No |  |
| `only_allow_merge_if_all_status_checks_passed` | `string` | No |  |
| `only_allow_merge_if_pipeline_succeeds` | `boolean` | No |  |
| `only_mirror_protected_branches` | `string` | No |  |
| `open_issues_count` | `number` | No |  |
| `owner` | `Record<string, any>` | No | API_Entities_UserBasic model |
| `package_registry_access_level` | `string` | No |  |
| `packages_enabled` | `boolean` | No |  |
| `pages_access_level` | `string` | No |  |
| `path` | `string` | No |  |
| `path_with_namespace` | `string` | No |  |
| `permissions` | `Record<string, any>` | No |  |
| `pre_receive_secret_detection_enabled` | `boolean` | No |  |
| `prevent_merge_without_jira_issue` | `string` | No |  |
| `printing_merge_request_link_enabled` | `boolean` | No |  |
| `public_jobs` | `boolean` | No |  |
| `readme_url` | `string` | No |  |
| `releases_access_level` | `string` | No |  |
| `remove_source_branch_after_merge` | `boolean` | No |  |
| `repository_access_level` | `string` | No |  |
| `repository_object_format` | `string` | No |  |
| `repository_storage` | `string` | No |  |
| `request_access_enabled` | `boolean` | No |  |
| `requirements_access_level` | `string` | No |  |
| `requirements_enabled` | `string` | No |  |
| `resolve_outdated_diff_discussions` | `boolean` | No |  |
| `resource_group_default_process_mode` | `string` | No |  |
| `restrict_user_defined_variables` | `boolean` | No |  |
| `runner_token_expiration_interval` | `number` | No |  |
| `runners_token` | `string` | No |  |
| `secret_push_protection_enabled` | `boolean` | No |  |
| `security_and_compliance_access_level` | `string` | No |  |
| `security_and_compliance_enabled` | `string` | No |  |
| `service_desk_address` | `string` | No |  |
| `service_desk_enabled` | `boolean` | No |  |
| `shared_runners_enabled` | `boolean` | No |  |
| `shared_with_groups` | `any[]` | No |  |
| `show_diff_preview_in_email` | `boolean` | No |  |
| `snippets_access_level` | `string` | No |  |
| `snippets_enabled` | `boolean` | No |  |
| `spp_repository_pipeline_access` | `boolean` | No | The spp_repository_pipeline_access setting is only visible if the security_orchestration_policies feature is available. |
| `squash_commit_template` | `string` | No |  |
| `squash_option` | `string` | No |  |
| `ssh_url_to_repo` | `string` | No |  |
| `star_count` | `number` | No |  |
| `statistics` | `Record<string, any>` | No |  |
| `suggestion_commit_message` | `string` | No |  |
| `tag_list` | `any[]` | No |  |
| `topics` | `any[]` | No |  |
| `updated_at` | `string` | No |  |
| `visibility` | `string` | No |  |
| `warn_about_potentially_unwanted_characters` | `boolean` | No |  |
| `web_based_commit_signing_enabled` | `string` | No |  |
| `web_url` | `string` | No |  |
| `wiki_access_level` | `string` | No |  |
| `wiki_enabled` | `boolean` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesProjectWithAccess().load({ id: 'api_entities_project_with_access_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesProjectWithAccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProjectEntity

```ts
const project = client.Project()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_merge_on_skipped_pipeline` | `boolean` | No |  |
| `allow_pipeline_trigger_approve_deployment` | `boolean` | No |  |
| `analytics_access_level` | `string` | No |  |
| `approvals_before_merge` | `string` | No |  |
| `archived` | `boolean` | No |  |
| `auto_cancel_pending_pipelines` | `string` | No |  |
| `auto_devops_deploy_strategy` | `string` | No |  |
| `auto_devops_enabled` | `boolean` | No |  |
| `auto_duo_code_review_enabled` | `string` | No |  |
| `autoclose_referenced_issues` | `boolean` | No |  |
| `avatar_url` | `string` | No |  |
| `build_git_strategy` | `string` | No |  |
| `build_timeout` | `number` | No |  |
| `builds_access_level` | `string` | No |  |
| `can_create_merge_request_in` | `boolean` | No |  |
| `ci_allow_fork_pipelines_to_run_in_parent_project` | `boolean` | No |  |
| `ci_config_path` | `string` | No |  |
| `ci_default_git_depth` | `number` | No |  |
| `ci_delete_pipelines_in_seconds` | `number` | No |  |
| `ci_forward_deployment_enabled` | `boolean` | No |  |
| `ci_forward_deployment_rollback_allowed` | `boolean` | No |  |
| `ci_id_token_sub_claim_components` | `any[]` | No |  |
| `ci_job_token_scope_enabled` | `boolean` | No |  |
| `ci_pipeline_variables_minimum_override_role` | `string` | No |  |
| `ci_push_repository_for_job_token_allowed` | `boolean` | No |  |
| `ci_restrict_pipeline_cancellation_role` | `string` | No |  |
| `ci_separated_caches` | `boolean` | No |  |
| `compliance_frameworks` | `string` | No |  |
| `container_expiration_policy` | `Record<string, any>` | No |  |
| `container_registry_access_level` | `string` | No |  |
| `container_registry_enabled` | `boolean` | No |  |
| `container_registry_image_prefix` | `string` | No |  |
| `created_at` | `string` | No |  |
| `creator_id` | `number` | No |  |
| `custom_attributes` | `Record<string, any>` | No | API_Entities_CustomAttribute model |
| `default_branch` | `string` | No |  |
| `description` | `string` | No |  |
| `description_html` | `string` | No |  |
| `duo_remote_flows_enabled` | `string` | No |  |
| `emails_disabled` | `boolean` | No |  |
| `emails_enabled` | `boolean` | No |  |
| `empty_repo` | `boolean` | No |  |
| `enforce_auth_checks_on_uploads` | `boolean` | No |  |
| `environments_access_level` | `string` | No |  |
| `external_authorization_classification_label` | `string` | No |  |
| `feature_flags_access_level` | `string` | No |  |
| `forked_from_project` | `Record<string, any>` | No | API_Entities_BasicProjectDetails model |
| `forking_access_level` | `string` | No |  |
| `forks_count` | `number` | No |  |
| `group_runners_enabled` | `boolean` | No |  |
| `http_url_to_repo` | `string` | No |  |
| `id` | `number` | No |  |
| `import_error` | `string` | No |  |
| `import_status` | `string` | No |  |
| `import_type` | `string` | No |  |
| `import_url` | `string` | No |  |
| `infrastructure_access_level` | `string` | No |  |
| `issue_branch_template` | `string` | No |  |
| `issues_access_level` | `string` | No |  |
| `issues_enabled` | `boolean` | No |  |
| `issues_template` | `string` | No |  |
| `jobs_enabled` | `boolean` | No |  |
| `keep_latest_artifact` | `boolean` | No |  |
| `last_activity_at` | `string` | No |  |
| `lfs_enabled` | `boolean` | No |  |
| `license` | `Record<string, any>` | No |  |
| `license_url` | `string` | No |  |
| `links` | `Record<string, any>` | No |  |
| `marked_for_deletion_at` | `string` | No |  |
| `marked_for_deletion_on` | `string` | No |  |
| `max_artifacts_size` | `number` | No |  |
| `merge_commit_template` | `string` | No |  |
| `merge_method` | `string` | No |  |
| `merge_pipelines_enabled` | `string` | No |  |
| `merge_request_title_regex` | `string` | No |  |
| `merge_request_title_regex_description` | `string` | No |  |
| `merge_requests_access_level` | `string` | No |  |
| `merge_requests_enabled` | `boolean` | No |  |
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
| `mr_default_target_self` | `boolean` | No |  |
| `name` | `string` | No |  |
| `name_with_namespace` | `string` | No |  |
| `namespace` | `Record<string, any>` | No |  |
| `only_allow_merge_if_all_discussions_are_resolved` | `boolean` | No |  |
| `only_allow_merge_if_all_status_checks_passed` | `string` | No |  |
| `only_allow_merge_if_pipeline_succeeds` | `boolean` | No |  |
| `only_mirror_protected_branches` | `string` | No |  |
| `open_issues_count` | `number` | No |  |
| `owner` | `Record<string, any>` | No | API_Entities_UserBasic model |
| `package_registry_access_level` | `string` | No |  |
| `packages_enabled` | `boolean` | No |  |
| `pages_access_level` | `string` | No |  |
| `path` | `string` | No |  |
| `path_with_namespace` | `string` | No |  |
| `pre_receive_secret_detection_enabled` | `boolean` | No |  |
| `prevent_merge_without_jira_issue` | `string` | No |  |
| `printing_merge_request_link_enabled` | `boolean` | No |  |
| `public_jobs` | `boolean` | No |  |
| `readme_url` | `string` | No |  |
| `releases_access_level` | `string` | No |  |
| `remove_source_branch_after_merge` | `boolean` | No |  |
| `repository_access_level` | `string` | No |  |
| `repository_object_format` | `string` | No |  |
| `repository_storage` | `string` | No |  |
| `request_access_enabled` | `boolean` | No |  |
| `requirements_access_level` | `string` | No |  |
| `requirements_enabled` | `string` | No |  |
| `resolve_outdated_diff_discussions` | `boolean` | No |  |
| `resource_group_default_process_mode` | `string` | No |  |
| `restrict_user_defined_variables` | `boolean` | No |  |
| `runner_token_expiration_interval` | `number` | No |  |
| `runners_token` | `string` | No |  |
| `secret_push_protection_enabled` | `boolean` | No |  |
| `security_and_compliance_access_level` | `string` | No |  |
| `security_and_compliance_enabled` | `string` | No |  |
| `service_desk_address` | `string` | No |  |
| `service_desk_enabled` | `boolean` | No |  |
| `shared_runners_enabled` | `boolean` | No |  |
| `shared_with_groups` | `any[]` | No |  |
| `show_diff_preview_in_email` | `boolean` | No |  |
| `snippets_access_level` | `string` | No |  |
| `snippets_enabled` | `boolean` | No |  |
| `spp_repository_pipeline_access` | `boolean` | No | The spp_repository_pipeline_access setting is only visible if the security_orchestration_policies feature is available. |
| `squash_commit_template` | `string` | No |  |
| `squash_option` | `string` | No |  |
| `ssh_url_to_repo` | `string` | No |  |
| `star_count` | `number` | No |  |
| `statistics` | `Record<string, any>` | No |  |
| `suggestion_commit_message` | `string` | No |  |
| `tag_list` | `any[]` | No |  |
| `topics` | `any[]` | No |  |
| `updated_at` | `string` | No |  |
| `visibility` | `string` | No |  |
| `warn_about_potentially_unwanted_characters` | `boolean` | No |  |
| `web_based_commit_signing_enabled` | `string` | No |  |
| `web_url` | `string` | No |  |
| `wiki_access_level` | `string` | No |  |
| `wiki_enabled` | `boolean` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Project().create({
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Project().list()
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Project().remove({ id: 'id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Project().update({
  id: 'id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProjectEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new GitlabSDK({
  feature: {
    test: { active: true },
  }
})
```

