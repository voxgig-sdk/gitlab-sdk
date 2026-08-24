# Gitlab JavaScript SDK



The JavaScript SDK for the Gitlab API — an entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.ApiEntitiesProjectWithAccess()` — each with a small set of operations (`list`, `load`, `create`, `update`, `remove`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
```js
npm install gitlab
```
## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.


### Create a Client

```js
const { GitlabSDK } = require('@voxgig-sdk/gitlab-js')

const client = new GitlabSDK({
  apikey: process.env.GITLAB_APIKEY,
})
```

### Load an ApiEntitiesProjectWithAccess

```js
const api_entities_project_with_access = await client.ApiEntitiesProjectWithAccess().load({ id: 'api_entities_project_with_access_id' })
console.log(api_entities_project_with_access)
```

### Direct API Access

Use `client.direct()` to call any API endpoint directly:

```js
const result = await client.direct({
  path: '/custom/endpoint/{id}',
  method: 'GET',
  params: { id: 'abc123' },
})

if (result.ok) {
  console.log(result.data)
}
```


## Error handling

Entity operations reject on failure, so wrap them in `try` / `catch`:

```ts
try {
  const apientitiesprojectwithaccess = await client.ApiEntitiesProjectWithAccess().load({ id: "example_id" })
  console.log(apientitiesprojectwithaccess)
} catch (err) {
  console.error('load failed:', err)
}
```

The low-level `direct()` method does **not** throw — it returns the
value or an `Error`, so check the result before using it:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example_id' },
})

if (result instanceof Error) {
  throw result
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```js
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result instanceof Error) {
  throw result
}
if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```js
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```js
const client = GitlabSDK.test()

const apientitiesprojectwithaccess = await client.ApiEntitiesProjectWithAccess().load({ id: 'test01' })
// apientitiesprojectwithaccess is the entity, populated with mock response data
// — call apientitiesprojectwithaccess.data() for the record itself
console.log(apientitiesprojectwithaccess)
```

You can also use the instance method:

```js
const client = new GitlabSDK({ apikey: '...' })
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```js
const entity = client.ApiEntitiesProjectWithAccess()

// First call runs the operation and stores its result
await entity.load({ id: 'example' })

// Subsequent calls reuse the stored state
const data = entity.data()
console.log(data.id)
```

### Add custom middleware

Pass features via the `extend` option:

```js
const logger = {
  hooks: {
    PreRequest: (ctx) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new GitlabSDK({
  apikey: '...',
  extend: [logger],
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
cd js && npm test
```


## Reference

### GitlabSDK

#### Constructor

```js
new GitlabSDK(options?)
```

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `ApiEntitiesProjectWithAccess(data?)` | `ApiEntitiesProjectWithAccessEntity` | Create an ApiEntitiesProjectWithAccess entity instance. |
| `Project(data?)` | `ProjectEntity` | Create a Project entity instance. |
| `tester(testopts?, sdkopts?)` | `GitlabSDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `GitlabSDK.test(testopts?, sdkopts?)` | `GitlabSDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `load(reqmatch?, ctrl?): Promise<Entity>` | Load a single entity by match criteria. |
| `list` | `list(reqmatch?, ctrl?): Promise<Entity[]>` | List entities matching the criteria. |
| `create` | `create(reqdata?, ctrl?): Promise<Entity>` | Create a new entity. |
| `update` | `update(reqdata?, ctrl?): Promise<Entity>` | Update an existing entity. |
| `remove` | `remove(reqmatch?, ctrl?): Promise<void>` | Remove an entity. |
| `data` | `data(data?: Partial<Entity>): Entity` | Get or set entity data. |
| `match` | `match(match?: Partial<Entity>): Partial<Entity>` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): GitlabSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Return values

Entity operations resolve to the entity data directly — there is no
result envelope:

- `load`, `create` and `update` resolve to a single entity object.
- `list` resolves to an **array** of entity objects (iterate it directly;
  there is no `.data` and no `.ok`).
- `remove` resolves to `undefined`.

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

### DirectResult shape

The `direct()` method returns:

```js
{
  ok: true,
  status: 200,
  headers: {},
  data: {}
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```js
{
  url: 'string',
  method: 'string',
  headers: {},
  body: undefined
}
```

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

Operations: load.

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

Operations: create, list, remove, update.

API path: `/api/v4/projects`



## Entities


### ApiEntitiesProjectWithAccess

Create an instance: `const api_entities_project_with_access = client.ApiEntitiesProjectWithAccess()`

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
| `ci_id_token_sub_claim_components` | `Array` |  |
| `ci_job_token_scope_enabled` | `boolean` |  |
| `ci_pipeline_variables_minimum_override_role` | `string` |  |
| `ci_push_repository_for_job_token_allowed` | `boolean` |  |
| `ci_restrict_pipeline_cancellation_role` | `string` |  |
| `ci_separated_caches` | `boolean` |  |
| `compliance_frameworks` | `string` |  |
| `container_expiration_policy` | `Object` |  |
| `container_registry_access_level` | `string` |  |
| `container_registry_enabled` | `boolean` |  |
| `container_registry_image_prefix` | `string` |  |
| `created_at` | `string` |  |
| `creator_id` | `number` |  |
| `custom_attributes` | `Object` | API_Entities_CustomAttribute model |
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
| `forked_from_project` | `Object` | API_Entities_BasicProjectDetails model |
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
| `license` | `Object` |  |
| `license_url` | `string` |  |
| `links` | `Object` |  |
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
| `namespace` | `Object` |  |
| `only_allow_merge_if_all_discussions_are_resolved` | `boolean` |  |
| `only_allow_merge_if_all_status_checks_passed` | `string` |  |
| `only_allow_merge_if_pipeline_succeeds` | `boolean` |  |
| `only_mirror_protected_branches` | `string` |  |
| `open_issues_count` | `number` |  |
| `owner` | `Object` | API_Entities_UserBasic model |
| `package_registry_access_level` | `string` |  |
| `packages_enabled` | `boolean` |  |
| `pages_access_level` | `string` |  |
| `path` | `string` |  |
| `path_with_namespace` | `string` |  |
| `permissions` | `Object` |  |
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
| `shared_with_groups` | `Array` |  |
| `show_diff_preview_in_email` | `boolean` |  |
| `snippets_access_level` | `string` |  |
| `snippets_enabled` | `boolean` |  |
| `spp_repository_pipeline_access` | `boolean` | The spp_repository_pipeline_access setting is only visible if the security_orchestration_policies feature is available. |
| `squash_commit_template` | `string` |  |
| `squash_option` | `string` |  |
| `ssh_url_to_repo` | `string` |  |
| `star_count` | `number` |  |
| `statistics` | `Object` |  |
| `suggestion_commit_message` | `string` |  |
| `tag_list` | `Array` |  |
| `topics` | `Array` |  |
| `updated_at` | `string` |  |
| `visibility` | `string` |  |
| `warn_about_potentially_unwanted_characters` | `boolean` |  |
| `web_based_commit_signing_enabled` | `string` |  |
| `web_url` | `string` |  |
| `wiki_access_level` | `string` |  |
| `wiki_enabled` | `boolean` |  |

#### Example: Load

```ts
const api_entities_project_with_access = await client.ApiEntitiesProjectWithAccess().load({ id: 'api_entities_project_with_access_id' })
```


### Project

Create an instance: `const project = client.Project()`

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
| `ci_id_token_sub_claim_components` | `Array` |  |
| `ci_job_token_scope_enabled` | `boolean` |  |
| `ci_pipeline_variables_minimum_override_role` | `string` |  |
| `ci_push_repository_for_job_token_allowed` | `boolean` |  |
| `ci_restrict_pipeline_cancellation_role` | `string` |  |
| `ci_separated_caches` | `boolean` |  |
| `compliance_frameworks` | `string` |  |
| `container_expiration_policy` | `Object` |  |
| `container_registry_access_level` | `string` |  |
| `container_registry_enabled` | `boolean` |  |
| `container_registry_image_prefix` | `string` |  |
| `created_at` | `string` |  |
| `creator_id` | `number` |  |
| `custom_attributes` | `Object` | API_Entities_CustomAttribute model |
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
| `forked_from_project` | `Object` | API_Entities_BasicProjectDetails model |
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
| `license` | `Object` |  |
| `license_url` | `string` |  |
| `links` | `Object` |  |
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
| `namespace` | `Object` |  |
| `only_allow_merge_if_all_discussions_are_resolved` | `boolean` |  |
| `only_allow_merge_if_all_status_checks_passed` | `string` |  |
| `only_allow_merge_if_pipeline_succeeds` | `boolean` |  |
| `only_mirror_protected_branches` | `string` |  |
| `open_issues_count` | `number` |  |
| `owner` | `Object` | API_Entities_UserBasic model |
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
| `shared_with_groups` | `Array` |  |
| `show_diff_preview_in_email` | `boolean` |  |
| `snippets_access_level` | `string` |  |
| `snippets_enabled` | `boolean` |  |
| `spp_repository_pipeline_access` | `boolean` | The spp_repository_pipeline_access setting is only visible if the security_orchestration_policies feature is available. |
| `squash_commit_template` | `string` |  |
| `squash_option` | `string` |  |
| `ssh_url_to_repo` | `string` |  |
| `star_count` | `number` |  |
| `statistics` | `Object` |  |
| `suggestion_commit_message` | `string` |  |
| `tag_list` | `Array` |  |
| `topics` | `Array` |  |
| `updated_at` | `string` |  |
| `visibility` | `string` |  |
| `warn_about_potentially_unwanted_characters` | `boolean` |  |
| `web_based_commit_signing_enabled` | `string` |  |
| `web_url` | `string` |  |
| `wiki_access_level` | `string` |  |
| `wiki_enabled` | `boolean` |  |

#### Example: List

```ts
const projects = await client.Project().list()
```

#### Example: Create

```ts
const project = await client.Project().create({
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

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Module structure

```
gitlab/
├── src/
│   ├── GitlabSDK.js        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
└── test/                   # Test suites
```

Import the SDK from the package root:

```js
const { GitlabSDK } = require('@voxgig-sdk/gitlab-js')
```

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const apientitiesprojectwithaccess = client.ApiEntitiesProjectWithAccess()
await apientitiesprojectwithaccess.load({ id: "example_id" })

// apientitiesprojectwithaccess.data() now returns the apientitiesprojectwithaccess data from the last `load`
// apientitiesprojectwithaccess.match() returns { id: "example_id" }
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
