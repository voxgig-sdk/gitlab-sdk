# GitLab API

The GitLab API.

## Start here

This guide introduces the API, the client libraries, and the companion tools in this repository. Start with the API capabilities, choose a client for your application, and use the linked reference when you need exact request and response details.

The selected API surface contains 276 entities and 1103 HTTP routes. There are 6 SDK targets and 2 companion tools.

An entity groups related API operations. An operation can have several routes with different inputs or authentication requirements. The SDK exposes the entity and its operations using the conventions of the selected language.

## What the API provides

### [AccessRequest](docs/api/access_request.html)

Results: Denies an access request for the given user.

SDK operations: `remove`.

### [AlertManagement](docs/api/alert_management.html)

Results: Workhorse authorize metric image file upload; Remove a metric image for an alert.

SDK operations: `create`, `remove`.

### [ApiEntitiesAccessRequester](docs/api/api_entities_access_requester.html)

Results: successful operation; Gets a list of access requests for a group.; Gets a list of access requests for a project.

SDK operations: `create`, `list`, `update`.

### [ApiEntitiesAppearance](docs/api/api_entities_appearance.html)

Results: Get the current appearance; Modify appearance.

SDK operations: `load`, `update`.

### [ApiEntitiesApplication](docs/api/api_entities_application.html)

Results: Get applications.

SDK operations: `list`.

### [ApiEntitiesApplicationStatistic](docs/api/api_entities_application_statistic.html)

Results: Get the current application statistics.

SDK operations: `load`.

Key fields to recognise:

- `active_users`: Number of active users
- `forks`: Approximate number of repo forks
- `groups`: Approximate number of projects
- `issues`: Approximate number of issues
- `merge_requests`: Approximate number of merge requests

### [ApiEntitiesApplicationWithSecret](docs/api/api_entities_application_with_secret.html)

Results: Renew an application secret; Create a new application.

SDK operations: `create`.

### [ApiEntitiesAvatar](docs/api/api_entities_avatar.html)

Results: Return avatar url for a user.

SDK operations: `load`.

### [ApiEntitiesAwardEmoji](docs/api/api_entities_award_emoji.html)

Results: Add a new emoji reaction; List an awardable&#39;s emoji reactions for groups; List an awardable&#39;s emoji reactions for projects; Get a single emoji reaction.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `user`: API_Entities_UserBasic model

### [ApiEntitiesBadge](docs/api/api_entities_badge.html)

Results: Adds a badge to a group.; Adds a badge to a project.; Gets a list of group badges viewable by the authenticated user.; Gets a list of project badges viewable by the authenticated user.; Gets a badge of a group.; Gets a badge of a project.; Updates a badge of a group.; Updates a badge of a project.

SDK operations: `create`, `list`, `load`, `update`.

### [ApiEntitiesBasicBadgeDetail](docs/api/api_entities_basic_badge_detail.html)

Results: Preview a badge from a group.; Preview a badge from a project.

SDK operations: `load`.

### [ApiEntitiesBasicGroupDetail](docs/api/api_entities_basic_group_detail.html)

Results: Add target group to allowlist.

SDK operations: `create`.

### [ApiEntitiesBasicProjectDetail](docs/api/api_entities_basic_project_detail.html)

Results: Add target project to allowlist.; Get a user projects; Get projects starred by a user; Get a list of visible projects for authenticated user; Get projects that a user has contributed to; Fetch project inbound allowlist for CI_JOB_TOKEN access settings.; Fetch project groups allowlist for CI_JOB_TOKEN access settings.

SDK operations: `create`, `list`.

Key fields to recognise:

- `custom_attributes`: API_Entities_CustomAttribute model

### [ApiEntitiesBasicRef](docs/api/api_entities_basic_ref.html)

Results: Get all references a commit is pushed to.

SDK operations: `list`.

### [ApiEntitiesBasicSuccess](docs/api/api_entities_basic_success.html)

Results: Subscribe a namespace to a JiraConnectInstallation.

SDK operations: `create`.

### [ApiEntitiesBatchedBackgroundMigration](docs/api/api_entities_batched_background_migration.html)

Results: Get the list of batched background migrations; Retrieve a batched background migration; Pause a batched background migration; Resume a batched background migration.

SDK operations: `list`, `load`, `update`.

### [ApiEntitiesBranch](docs/api/api_entities_branch.html)

Results: Create branch; Get a project repository branches; Get a single repository branch; Protect a single branch; Unprotect a single branch.

SDK operations: `create`, `list`, `load`, `update`.

Key fields to recognise:

- `commit`: API_Entities_Commit model

### [ApiEntitiesBulkImport](docs/api/api_entities_bulk_import.html)

Results: Start a new GitLab Migration; Cancel GitLab Migration; List GitLab Migration entities; List all GitLab Migrations; List all GitLab Migrations&#39; entities; Get GitLab Migration entity details; Get GitLab Migration details.

SDK operations: `create`, `list`, `load`.

### [ApiEntitiesBulkImportsEntityFailure](docs/api/api_entities_bulk_imports_entity_failure.html)

Results: Get GitLab Migration entity failures.

SDK operations: `load`.

### [ApiEntitiesBulkImportsExportStatus](docs/api/api_entities_bulk_imports_export_status.html)

Results: Relations export status.

SDK operations: `list`.

### [ApiEntitiesChangelog](docs/api/api_entities_changelog.html)

Results: Generates a changelog section for a release and returns it.

SDK operations: `load`.

### [ApiEntitiesCiBridge](docs/api/api_entities_ci_bridge.html)

Results: Get pipeline bridge jobs.

SDK operations: `list`.

Key fields to recognise:

- `commit`: API_Entities_Commit model
- `downstream_pipeline`: API_Entities_Ci_PipelineBasic model
- `duration`: Time spent running
- `pipeline`: API_Entities_Ci_PipelineBasic model
- `queued_duration`: Time spent enqueued

### [ApiEntitiesCiCatalogResourcesVersion](docs/api/api_entities_ci_catalog_resources_version.html)

Results: Publish a new component project release as version to the CI/CD catalog.

SDK operations: `create`.

### [ApiEntitiesCiJob](docs/api/api_entities_ci_job.html)

Results: Cancel a specific job of a project; Keep the artifacts to prevent them from being deleted; Erase job (remove artifacts and the trace); Retry a specific job of a project; Get pipeline jobs; Get a projects jobs; Get a trace of a specific job of a project; Get current job using job token; Get current agents; Get a specific job of a project.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `commit`: API_Entities_Commit model
- `duration`: Time spent running
- `pipeline`: API_Entities_Ci_PipelineBasic model
- `queued_duration`: Time spent enqueued
- `runner`: API_Entities_Ci_Runner model

### [ApiEntitiesCiJobBasic](docs/api/api_entities_ci_job_basic.html)

Results: Trigger an actionable job (manual, delayed, etc); List upcoming jobs for a specific resource group.

SDK operations: `create`, `list`.

Key fields to recognise:

- `commit`: API_Entities_Commit model
- `duration`: Time spent running
- `pipeline`: API_Entities_Ci_PipelineBasic model
- `queued_duration`: Time spent enqueued

### [ApiEntitiesCiJobBasicWithProject](docs/api/api_entities_ci_job_basic_with_project.html)

Results: List jobs running on a runner.

SDK operations: `load`.

Key fields to recognise:

- `commit`: API_Entities_Commit model
- `duration`: Time spent running
- `pipeline`: API_Entities_Ci_PipelineBasic model
- `queued_duration`: Time spent enqueued

### [ApiEntitiesCiLintResult](docs/api/api_entities_ci_lint_result.html)

Results: Validate a CI YAML configuration with a namespace; Validates a CI YAML configuration with a namespace.

SDK operations: `create`, `list`.

### [ApiEntitiesCiPipeline](docs/api/api_entities_ci_pipeline.html)

Results: Create merge request pipeline; Trigger a GitLab project pipeline; Cancel all builds in the pipeline; Retry builds in the pipeline; Create a new pipeline.

SDK operations: `create`.

### [ApiEntitiesCiPipelineBasic](docs/api/api_entities_ci_pipeline_basic.html)

Results: Get all Pipelines of the project; Get all pipelines triggered from a pipeline schedule; Get single merge request pipelines.

SDK operations: `list`, `load`.

### [ApiEntitiesCiPipelineSchedule](docs/api/api_entities_ci_pipeline_schedule.html)

Results: Get all pipeline schedules.

SDK operations: `list`.

Key fields to recognise:

- `owner`: API_Entities_UserBasic model

### [ApiEntitiesCiPipelineScheduleDetail](docs/api/api_entities_ci_pipeline_schedule_detail.html)

Results: Play a scheduled pipeline immediately; Take ownership of a pipeline schedule; Create a new pipeline schedule; Get a single pipeline schedule; Edit a pipeline schedule.

SDK operations: `create`, `load`, `update`.

Key fields to recognise:

- `last_pipeline`: API_Entities_Ci_PipelineBasic model
- `owner`: API_Entities_UserBasic model
- `variables`: API_Entities_Ci_Variable model

### [ApiEntitiesCiResetTokenResult](docs/api/api_entities_ci_reset_token_result.html)

Results: Reset runner registration token; Reset runner authentication token with current token; Reset runner authentication token.

SDK operations: `create`.

### [ApiEntitiesCiResourceGroup](docs/api/api_entities_ci_resource_group.html)

Results: Get all resource groups for a project; Get a specific resource group; Edit an existing resource group.

SDK operations: `list`, `load`, `update`.

### [ApiEntitiesCiRunner](docs/api/api_entities_ci_runner.html)

Results: Assign a runner to project; Get runners available for project; Get runners available for group; Get runners available for user; Get all runners - shared and project.

SDK operations: `create`, `load`.

### [ApiEntitiesCiRunnerDetail](docs/api/api_entities_ci_runner_detail.html)

Results: Get runner&#39;s details; Update runner&#39;s details.

SDK operations: `load`, `update`.

Key fields to recognise:

- `created_by`: API_Entities_UserBasic model
- `groups`: API_Entities_BasicGroupDetails model
- `projects`: API_Entities_BasicProjectDetails model

### [ApiEntitiesCiRunnerManager](docs/api/api_entities_ci_runner_manager.html)

Results: Get a list of all runner&#39;s managers.

SDK operations: `load`.

### [ApiEntitiesCiRunnerRegistrationDetail](docs/api/api_entities_ci_runner_registration_detail.html)

Results: Register a new runner; Create a runner owned by currently authenticated user.

SDK operations: `create`.

### [ApiEntitiesCiSecureFile](docs/api/api_entities_ci_secure_file.html)

Results: Create a secure file; Get list of secure files in a project; Get the details of a specific secure file in a project.

SDK operations: `create`, `load`.

### [ApiEntitiesCiVariable](docs/api/api_entities_ci_variable.html)

Results: Create a new pipeline schedule variable; Create a new variable in a group; Create a new variable in a project; Create a new instance-level variable; Gets the variables for a given pipeline; Get the details of a single variable from a project; Get a list of group-level variables; Get project variables; Get the details of a group’s specific variable; List all instance-level variables; Get the details of a specific instance-level variable; Edit a pipeline schedule variable; Update an existing variable from a group; Update an existing variable from a project; Update an instance-level variable.

SDK operations: `create`, `list`, `load`, `update`.

### [ApiEntitiesCluster](docs/api/api_entities_cluster.html)

Results: Add existing instance cluster; List group clusters; List project clusters; List instance clusters; Get a single instance cluster; Edit instance cluster.

SDK operations: `create`, `list`, `load`, `update`.

Key fields to recognise:

- `user`: API_Entities_UserBasic model

### [ApiEntitiesClusterGroup](docs/api/api_entities_cluster_group.html)

Results: Add existing cluster to group; Get a single group cluster; Edit group cluster.

SDK operations: `create`, `load`, `update`.

Key fields to recognise:

- `group`: API_Entities_BasicGroupDetails model
- `user`: API_Entities_UserBasic model

### [ApiEntitiesClusterProject](docs/api/api_entities_cluster_project.html)

Results: Add existing cluster to project; Get a single project cluster; Edit project cluster.

SDK operations: `create`, `load`, `update`.

Key fields to recognise:

- `project`: API_Entities_BasicProjectDetails model
- `user`: API_Entities_UserBasic model

### [ApiEntitiesClustersAgent](docs/api/api_entities_clusters_agent.html)

Results: Register an agent with a project; List the agents for a project; Get details about an agent.

SDK operations: `create`, `load`.

### [ApiEntitiesClustersAgentToken](docs/api/api_entities_clusters_agent_token.html)

Results: Get a single agent token.

SDK operations: `load`.

### [ApiEntitiesClustersAgentTokenBasic](docs/api/api_entities_clusters_agent_token_basic.html)

Results: List tokens for an agent.

SDK operations: `load`.

### [ApiEntitiesClustersAgentTokenWithToken](docs/api/api_entities_clusters_agent_token_with_token.html)

Results: Create an agent token.

SDK operations: `create`.

### [ApiEntitiesCommit](docs/api/api_entities_commit.html)

Results: Create merge request context commits; Cherry pick commit into a branch; Revert a commit in a branch; Get a project repository commits; Get single merge request commits; List merge request context commits; Get the common ancestor between commits.

SDK operations: `create`, `list`.

### [ApiEntitiesCommitDetail](docs/api/api_entities_commit_detail.html)

Results: Commit multiple file changes as one commit; Get a specific commit of a project; Update existing submodule reference in repository.

SDK operations: `create`, `load`, `update`.

Key fields to recognise:

- `last_pipeline`: API_Entities_Ci_PipelineBasic model

### [ApiEntitiesCommitNote](docs/api/api_entities_commit_note.html)

Results: Post comment to commit; Get a commit&#39;s comments.

SDK operations: `create`, `list`.

Key fields to recognise:

- `author`: API_Entities_UserBasic model

### [ApiEntitiesCommitSequence](docs/api/api_entities_commit_sequence.html)

Results: Get the sequence count of a commit SHA.

SDK operations: `load`.

### [ApiEntitiesCommitSignature](docs/api/api_entities_commit_signature.html)

Results: Get a commit&#39;s signature.

SDK operations: `load`.

### [ApiEntitiesCommitStatus](docs/api/api_entities_commit_status.html)

Results: Post status to a commit; Get a commit&#39;s statuses.

SDK operations: `create`, `list`.

Key fields to recognise:

- `author`: API_Entities_UserBasic model

### [ApiEntitiesCompare](docs/api/api_entities_compare.html)

Results: Compare two branches, tags, or commits.

SDK operations: `list`.

Key fields to recognise:

- `commit`: API_Entities_Commit model

### [ApiEntitiesContainerRegistryRepository](docs/api/api_entities_container_registry_repository.html)

Results: List container repositories within a project; List registry repositories within a group; Get a container repository.

SDK operations: `list`, `load`.

Key fields to recognise:

- `tags`: API_Entities_ContainerRegistry_Tag model

### [ApiEntitiesContainerRegistryTag](docs/api/api_entities_container_registry_tag.html)

Results: List tags of a repository.

SDK operations: `list`.

### [ApiEntitiesContainerRegistryTagDetail](docs/api/api_entities_container_registry_tag_detail.html)

Results: Get details about a repository tag.

SDK operations: `load`.

### [ApiEntitiesContributor](docs/api/api_entities_contributor.html)

Results: Get repository contributors.

SDK operations: `load`.

### [ApiEntitiesDeployKey](docs/api/api_entities_deploy_key.html)

Results: Enable a deploy key; Create a deploy key; List all deploy keys; Update deploy key.

SDK operations: `create`, `list`, `update`.

### [ApiEntitiesDeployKeysProject](docs/api/api_entities_deploy_keys_project.html)

Results: Add deploy key; List deploy keys for project; Get a single deploy key.

SDK operations: `create`, `list`, `load`.

### [ApiEntitiesDeployToken](docs/api/api_entities_deploy_token.html)

Results: List group deploy tokens; List project deploy tokens; List all deploy tokens; Get a group deploy token; Get a project deploy token.

SDK operations: `list`, `load`.

### [ApiEntitiesDeployTokenWithToken](docs/api/api_entities_deploy_token_with_token.html)

Results: Create a group deploy token; Create a project deploy token.

SDK operations: `create`.

### [ApiEntitiesDeployment](docs/api/api_entities_deployment.html)

Results: List project deployments.

SDK operations: `list`.

Key fields to recognise:

- `deployable`: API_Entities_Ci_Job model
- `environment`: API_Entities_EnvironmentBasic model
- `user`: API_Entities_UserBasic model

### [ApiEntitiesDeploymentExtended](docs/api/api_entities_deployment_extended.html)

Results: Create a deployment; Get a specific deployment; Update a deployment.

SDK operations: `create`, `load`, `update`.

Key fields to recognise:

- `approvals`: API_Entities_Deployments_Approval model
- `deployable`: API_Entities_Ci_Job model
- `environment`: API_Entities_EnvironmentBasic model
- `user`: API_Entities_UserBasic model

### [ApiEntitiesDeploymentsApproval](docs/api/api_entities_deployments_approval.html)

Results: Approve or reject a blocked deployment.

SDK operations: `create`.

### [ApiEntitiesDictionaryTable](docs/api/api_entities_dictionary_table.html)

Results: Retrieve dictionary details.

SDK operations: `load`.

### [ApiEntitiesDiff](docs/api/api_entities_diff.html)

Results: Get the diff for a specific commit of a project; Get the merge request diffs.

SDK operations: `list`, `load`.

### [ApiEntitiesDiscoveredCluster](docs/api/api_entities_discovered_cluster.html)

Results: Discover all descendant certificate-based clusters in a group.

SDK operations: `load`.

### [ApiEntitiesDraftNote](docs/api/api_entities_draft_note.html)

Results: Create a new draft note; Get a list of merge request draft notes; Get a single draft note; Modify an existing draft note; Publish a pending draft note.

SDK operations: `create`, `list`, `load`, `update`.

### [ApiEntitiesEnvironment](docs/api/api_entities_environment.html)

Results: Stop an environment; Create a new environment; List environments; Get a specific environment; Update an existing environment.

SDK operations: `create`, `list`, `load`, `update`.

Key fields to recognise:

- `cluster_agent`: API_Entities_Clusters_Agent model
- `last_deployment`: API_Entities_Deployment model
- `project`: API_Entities_BasicProjectDetails model

### [ApiEntitiesErrorTrackingClientKey](docs/api/api_entities_error_tracking_client_key.html)

Results: Create a client key; List project client keys.

SDK operations: `create`, `list`.

### [ApiEntitiesErrorTrackingProjectSetting](docs/api/api_entities_error_tracking_project_setting.html)

Results: Get Error Tracking settings; Enable or disable the Error Tracking project settings; Update Error Tracking project settings. Available in GitLab 15.10 and later.

SDK operations: `load`, `patch`, `update`.

### [ApiEntitiesEvent](docs/api/api_entities_event.html)

Results: List currently authenticated user&#39;s events; Get the contribution events of a specified user; List a project&#39;s visible events.

SDK operations: `list`, `load`.

Key fields to recognise:

- `author`: API_Entities_UserBasic model
- `wiki_page`: API_Entities_WikiPageBasic model

### [ApiEntitiesFeature](docs/api/api_entities_feature.html)

Results: Set or create a feature; List all features.

SDK operations: `create`, `list`.

Key fields to recognise:

- `definition`: API_Entities_Feature_Definition model

### [ApiEntitiesFeatureDefinition](docs/api/api_entities_feature_definition.html)

Results: List all feature definitions.

SDK operations: `list`.

### [ApiEntitiesFeatureFlag](docs/api/api_entities_feature_flag.html)

Results: Create a new feature flag; List feature flags for a project; Get a single feature flag; Update a feature flag.

SDK operations: `create`, `list`, `load`, `update`.

### [ApiEntitiesFeatureFlagUserList](docs/api/api_entities_feature_flag_user_list.html)

Results: Create a feature flag user list; List all feature flag user lists for a project; Get a feature flag user list; Update a feature flag user list.

SDK operations: `create`, `list`, `load`, `update`.

### [ApiEntitiesFreezePeriod](docs/api/api_entities_freeze_period.html)

Results: Create a freeze period; List freeze periods; Get a freeze period; Update a freeze period.

SDK operations: `create`, `list`, `load`, `update`.

### [ApiEntitiesGitlabSubscription](docs/api/api_entities_gitlab_subscription.html)

Results: Returns the subscription for the namespace.

SDK operations: `load`.

### [ApiEntitiesGoModuleVersion](docs/api/api_entities_go_module_version.html)

Results: Version metadata.

SDK operations: `load`.

### [ApiEntitiesGroup](docs/api/api_entities_group.html)

Results: Archive a group; Unarchive a group; Create a group. Available only for users who can create groups.; Get a list of descendant groups of this group.; Get a list of subgroups in this group.; Get a groups list; Get a list of shared groups this group was invited to; Get a list of invited groups in this group; Get a list of invited groups in this project; Get the groups to where the current group can be transferred to; Returns group that can be shared with the given project; Update a group. Available only for users who can administrate groups.

SDK operations: `create`, `list`, `load`, `update`.

Key fields to recognise:

- `custom_attributes`: API_Entities_CustomAttribute model
- `duo_core_features_enabled`: [Experimental] Indicates whether GitLab Duo Core features are enabled for the group

### [ApiEntitiesGroupDetail](docs/api/api_entities_group_detail.html)

Results: Share a group with a group; Transfer a group to a new parent group or promote a subgroup to a top-level group; Transfer a project to the group namespace. Available only for admin.; Sync a group with LDAP.; Restore a group.; Get a single group, with containing projects.

SDK operations: `create`, `load`.

Key fields to recognise:

- `custom_attributes`: API_Entities_CustomAttribute model
- `duo_core_features_enabled`: [Experimental] Indicates whether GitLab Duo Core features are enabled for the group
- `projects`: API_Entities_Project model
- `shared_projects`: API_Entities_Project model

### [ApiEntitiesHook](docs/api/api_entities_hook.html)

Results: Add new system hook; List system hooks; Get system hook; Edit system hook.

SDK operations: `create`, `list`, `load`, `update`.

### [ApiEntitiesIntegration](docs/api/api_entities_integration.html)

Results: Get an integration settings.

SDK operations: `load`.

### [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html)

Results: List all active integrations; Create/Edit Apple App Store integration; Create/Edit Asana integration; Create/Edit Assembla integration; Create/Edit Bamboo integration; Create/Edit Bugzilla integration; Create/Edit Buildkite integration; Create/Edit Campfire integration; Create/Edit Clickup integration; Create/Edit Confluence integration; Create/Edit Custom Issue Tracker integration; Create/Edit Datadog integration; Create/Edit Diffblue Cover integration; Create/Edit Discord integration; Create/Edit Drone Ci integration; Create/Edit Emails On Push integration; Create/Edit Ewm integration; Create/Edit External Wiki integration; Create/Edit Git Guardian integration; Create/Edit Github integration; Create/Edit Gitlab Slack Application integration; Create/Edit Google Cloud Platform Artifact Registry integration; Create/Edit Google Cloud Platform Workload Identity Federation integration; Create/Edit Google Play integration; Create/Edit Hangouts Chat integration; Create/Edit Harbor integration; Create/Edit Irker integration; Create/Edit Jenkins integration; Create/Edit Jira integration; Create/Edit Jira Cloud App integration; Create/Edit Linear integration; Create/Edit Matrix integration; Create/Edit Mattermost integration; Create/Edit Mattermost Slash Commands integration; Create/Edit Microsoft Teams integration; Create/Edit Mock Ci integration; Create/Edit Mock Monitoring integration; Create/Edit Packagist integration; Create/Edit Phorge integration; Create/Edit Pipelines Email integration; Create/Edit Pivotaltracker integration; Create/Edit Pumble integration; Create/Edit Pushover integration; Create/Edit Redmine integration; Create/Edit Slack integration; Create/Edit Slack Slash Commands integration; Create/Edit Squash Tm integration; Create/Edit Teamcity integration; Create/Edit Telegram integration; Create/Edit Unify Circuit integration; Create/Edit Webex Teams integration; Create/Edit Youtrack integration; Create/Edit Zentao integration.

SDK operations: `list`, `update`.

### [ApiEntitiesInvitation](docs/api/api_entities_invitation.html)

Results: Invite non-members by email address to a group or project.; Get a list of group or project invitations viewable by the authenticated user; Updates a group or project invitation.

SDK operations: `create`, `list`, `update`.

### [ApiEntitiesIssuableTimeStat](docs/api/api_entities_issuable_time_stat.html)

Results: Add spent time for a issue; Set a time estimate for a issue; Add spent time for a merge_request; Set a time estimate for a merge_request; Reset spent time for a issue; Reset the time estimate for a project issue; Reset spent time for a merge_request; Reset the time estimate for a project merge_request; Get time tracking stats.

SDK operations: `create`, `load`.

### [ApiEntitiesIssue](docs/api/api_entities_issue.html)

Results: Clone an existing issue; Move an existing issue; Create a new project issue; Get a list of project issues; Get a list of group issues; Get currently authenticated user&#39;s issues; Get a single project issue; Get specified issue (admin only); Update an existing issue; Reorder an existing issue.

SDK operations: `create`, `list`, `load`, `update`.

Key fields to recognise:

- `assignee`: API_Entities_UserBasic model
- `assignees`: API_Entities_UserBasic model
- `author`: API_Entities_UserBasic model
- `closed_by`: API_Entities_UserBasic model
- `severity`: One of [&quot;UNKNOWN&quot;, &quot;LOW&quot;, &quot;MEDIUM&quot;, &quot;HIGH&quot;, &quot;CRITICAL&quot;]

### [ApiEntitiesIssueLink](docs/api/api_entities_issue_link.html)

Results: Create an issue link; Get an issue link.

SDK operations: `create`, `load`.

### [ApiEntitiesLicense](docs/api/api_entities_license.html)

Results: Download a template available to this project.

SDK operations: `load`.

### [ApiEntitiesMarkdown](docs/api/api_entities_markdown.html)

Results: Render an arbitrary Markdown document.

SDK operations: `create`.

### [ApiEntitiesMarkdownUploadAdmin](docs/api/api_entities_markdown_upload_admin.html)

Results: Get the list of uploads of a group; Get the list of uploads of a project.

SDK operations: `list`.

### [ApiEntitiesMember](docs/api/api_entities_member.html)

Results: Overrides the access level of an LDAP group member.; Adds a member to a group or project.; Gets a list of group or project members viewable by the authenticated user.; Gets a list of group or project members viewable by the authenticated user, including those who gained membership through ancestor group.; Gets a list of billable users of top-level group.; Gets a member of a group or project.; Gets a member of a group or project, including those who gained membership through ancestor group; Remove an LDAP group member access level override.; Updates a member of a group or project.; Changes the state of the memberships of a user in the group.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `created_by`: API_Entities_UserBasic model

### [ApiEntitiesMerge](docs/api/api_entities_merge.html)

Results: Cancel Merge When Pipeline Succeeds; Create merge request; Get single merge request; Merge a merge request; Rebase a merge request; Update merge request.

SDK operations: `create`, `load`, `update`.

Key fields to recognise:

- `assignee`: API_Entities_UserBasic model
- `assignees`: API_Entities_UserBasic model
- `author`: API_Entities_UserBasic model
- `closed_by`: API_Entities_UserBasic model
- `head_pipeline`: API_Entities_Ci_Pipeline model

### [ApiEntitiesMergeRequestApproval](docs/api/api_entities_merge_request_approval.html)

Results: Approve a merge request; Remove an approval from a merge request; List approvals for merge request.

SDK operations: `create`, `load`.

Key fields to recognise:

- `user`: API_Entities_UserBasic model

### [ApiEntitiesMergeRequestBasic](docs/api/api_entities_merge_request_basic.html)

Results: List of merge requests associated with a deployment; Get Merge Requests associated with a commit; List group merge requests; List project merge requests; List merge requests; List merge requests closing issue; List merge requests that are related to the issue.

SDK operations: `list`, `load`.

Key fields to recognise:

- `assignee`: API_Entities_UserBasic model
- `assignees`: API_Entities_UserBasic model
- `author`: API_Entities_UserBasic model
- `closed_by`: API_Entities_UserBasic model
- `merge_user`: API_Entities_UserBasic model

### [ApiEntitiesMergeRequestChange](docs/api/api_entities_merge_request_change.html)

Results: Get single merge request changes.

SDK operations: `load`.

Key fields to recognise:

- `assignee`: API_Entities_UserBasic model
- `assignees`: API_Entities_UserBasic model
- `author`: API_Entities_UserBasic model
- `changes`: API_Entities_Diff model
- `closed_by`: API_Entities_UserBasic model

### [ApiEntitiesMergeRequestDiff](docs/api/api_entities_merge_request_diff.html)

Results: Get a list of merge request diff versions.

SDK operations: `list`.

### [ApiEntitiesMergeRequestDiffFull](docs/api/api_entities_merge_request_diff_full.html)

Results: Get a single merge request diff version.

SDK operations: `load`.

Key fields to recognise:

- `commits`: API_Entities_Commit model
- `diffs`: API_Entities_Diff model

### [ApiEntitiesMergeRequestReviewer](docs/api/api_entities_merge_request_reviewer.html)

Results: Get single merge request reviewers.

SDK operations: `load`.

### [ApiEntitiesMetricImage](docs/api/api_entities_metric_image.html)

Results: Upload a metric image for an alert; Metric Images for alert; Update a metric image for an alert.

SDK operations: `create`, `list`, `update`.

### [ApiEntitiesMrNote](docs/api/api_entities_mr_note.html)

Results: List issues that close on merge.

SDK operations: `load`.

### [ApiEntitiesNamespace](docs/api/api_entities_namespace.html)

Results: List namespaces; Get namespace by ID; [DEPRECATED] Update a namespace.

SDK operations: `list`, `load`, `update`.

### [ApiEntitiesNamespaceExistence](docs/api/api_entities_namespace_existence.html)

Results: Get existence of a namespace.

SDK operations: `list`.

### [ApiEntitiesNamespacesStorageLimitExclusion](docs/api/api_entities_namespaces_storage_limit_exclusion.html)

Results: Creates a storage limit exclusion for a Namespace; Retrieve all limit exclusions.

SDK operations: `create`, `load`.

### [ApiEntitiesNpmPackage](docs/api/api_entities_npm_package.html)

Results: Ok.

SDK operations: `load`.

### [ApiEntitiesNpmPackageTag](docs/api/api_entities_npm_package_tag.html)

Results: Get all tags for a given an NPM package.

SDK operations: `load`.

### [ApiEntitiesNugetPackagesVersion](docs/api/api_entities_nuget_packages_version.html)

Results: The NuGet Content Service - index request.

SDK operations: `list`.

### [ApiEntitiesNugetSearchResult](docs/api/api_entities_nuget_search_result.html)

Results: The NuGet Search Service.

SDK operations: `list`.

### [ApiEntitiesNugetServiceIndex](docs/api/api_entities_nuget_service_index.html)

Results: The NuGet V3 Feed Service Index.

SDK operations: `list`.

### [ApiEntitiesOrganizationsOrganization](docs/api/api_entities_organizations_organization.html)

Results: Create an organization.

SDK operations: `create`.

### [ApiEntitiesPackage](docs/api/api_entities_package.html)

Results: List packages within a group; Get a list of project packages; Get a single project package.

SDK operations: `list`, `load`.

Key fields to recognise:

- `pipeline`: API_Entities_Package_Pipeline model
- `pipelines`: API_Entities_Package_Pipeline model

### [ApiEntitiesPackageFile](docs/api/api_entities_package_file.html)

Results: List package files.

SDK operations: `list`.

Key fields to recognise:

- `pipelines`: API_Entities_Package_Pipeline model

### [ApiEntitiesPackagePipeline](docs/api/api_entities_package_pipeline.html)

Results: Get the pipelines for a single project package.

SDK operations: `load`.

### [ApiEntitiesPackagesConanFilesList](docs/api/api_entities_packages_conan_files_list.html)

Results: List package files; List recipe files.

SDK operations: `load`.

### [ApiEntitiesPackagesConanPackageManifest](docs/api/api_entities_packages_conan_package_manifest.html)

Results: Package Digest; Package Download Urls.

SDK operations: `load`.

### [ApiEntitiesPackagesConanPackageRevision](docs/api/api_entities_packages_conan_package_revision.html)

Results: Get the list of package revisions.

SDK operations: `list`.

Key fields to recognise:

- `revision`: The revision hash of the Conan recipe or package
- `time`: The UTC timestamp when the revision was created

### [ApiEntitiesPackagesConanPackageSnapshot](docs/api/api_entities_packages_conan_package_snapshot.html)

Results: Package Snapshot.

SDK operations: `load`.

### [ApiEntitiesPackagesConanRecipeManifest](docs/api/api_entities_packages_conan_recipe_manifest.html)

Results: Recipe Digest; Recipe Download Urls.

SDK operations: `load`.

### [ApiEntitiesPackagesConanRecipeRevision](docs/api/api_entities_packages_conan_recipe_revision.html)

Results: Get the list of revisions.

SDK operations: `list`.

Key fields to recognise:

- `revision`: The revision hash of the Conan recipe or package
- `time`: The UTC timestamp when the revision was created

### [ApiEntitiesPackagesConanRecipeSnapshot](docs/api/api_entities_packages_conan_recipe_snapshot.html)

Results: Recipe Snapshot.

SDK operations: `load`.

### [ApiEntitiesPackagesConanRevision](docs/api/api_entities_packages_conan_revision.html)

Results: Get the latest package revision; Get the latest recipe revision.

SDK operations: `load`.

Key fields to recognise:

- `revision`: The revision hash of the Conan recipe or package
- `time`: The UTC timestamp when the revision was created

### [ApiEntitiesPackagesConanUploadUrl](docs/api/api_entities_packages_conan_upload_url.html)

Results: Package Upload Urls; Recipe Upload Urls.

SDK operations: `create`.

### [ApiEntitiesPackagesDebianDistribution](docs/api/api_entities_packages_debian_distribution.html)

Results: Create a Debian Distribution; Get a list of Debian Distributions; Get a Debian Distribution Key; Get a Debian Distribution; Update a Debian Distribution.

SDK operations: `create`, `list`, `load`, `update`.

### [ApiEntitiesPagesDomain](docs/api/api_entities_pages_domain.html)

Results: Create a new pages domain; Get all pages domains; Get a single pages domain; Verify a pages domain.

SDK operations: `create`, `list`, `load`, `update`.

### [ApiEntitiesPagesDomainBasic](docs/api/api_entities_pages_domain_basic.html)

Results: Get all pages domains.

SDK operations: `load`.

### [ApiEntitiesPersonalAccessToken](docs/api/api_entities_personal_access_token.html)

Results: Return personal access token associations.

SDK operations: `list`.

### [ApiEntitiesPersonalAccessTokenWithLastUsedIp](docs/api/api_entities_personal_access_token_with_last_used_ip.html)

Results: List personal access tokens; Get single personal access token.

SDK operations: `list`, `load`.

### [ApiEntitiesPersonalAccessTokenWithToken](docs/api/api_entities_personal_access_token_with_token.html)

Results: Rotate personal access token; Rotate a personal access token.

SDK operations: `create`.

### [ApiEntitiesPersonalSnippet](docs/api/api_entities_personal_snippet.html)

Results: Create new snippet; List all public personal snippets current_user has access to; Get a single snippet; Update an existing snippet.

SDK operations: `create`, `list`, `load`, `update`.

Key fields to recognise:

- `author`: API_Entities_UserBasic model

### [ApiEntitiesPlanLimit](docs/api/api_entities_plan_limit.html)

Results: Get current plan limits; Change plan limits.

SDK operations: `load`, `update`.

### [ApiEntitiesProject](docs/api/api_entities_project.html)

Results: Mark this project as forked from another; Fork new project for the current user or provided namespace.; Create new project for a specified user. Only available to admin users.; Create new project; Archive a project; Restore a project; Star a project; Unarchive a project; Unstar a project; List forks of this project; Get a list of projects in this group.; Get a list of shared projects in this group; Update an existing project; Transfer a project to a new namespace.

SDK operations: `create`, `list`, `update`.

Key fields to recognise:

- `custom_attributes`: API_Entities_CustomAttribute model
- `forked_from_project`: API_Entities_BasicProjectDetails model
- `owner`: API_Entities_UserBasic model
- `spp_repository_pipeline_access`: The spp_repository_pipeline_access setting is only visible if the security_orchestration_policies feature is available.

### [ApiEntitiesProjectDailyStatistic](docs/api/api_entities_project_daily_statistic.html)

Results: Get the list of project fetch statistics for the last 30 days.

SDK operations: `load`.

### [ApiEntitiesProjectExportStatus](docs/api/api_entities_project_export_status.html)

Results: Get export status.

SDK operations: `load`.

### [ApiEntitiesProjectGroupLink](docs/api/api_entities_project_group_link.html)

Results: Share the project with a group.

SDK operations: `create`.

### [ApiEntitiesProjectHook](docs/api/api_entities_project_hook.html)

Results: Add project hook; List project hooks; Get project hook; Edit project hook.

SDK operations: `create`, `list`, `load`, `update`.

### [ApiEntitiesProjectImportStatus](docs/api/api_entities_project_import_status.html)

Results: Create a new project import; Create a new project import using a file from AWS S3; Create a new project import using a remote object storage path; Get a project import status; Get the statuses of relation imports for specified project.

SDK operations: `create`, `list`.

### [ApiEntitiesProjectJobTokenScope](docs/api/api_entities_project_job_token_scope.html)

Results: Fetch CI_JOB_TOKEN access settings.

SDK operations: `load`.

### [ApiEntitiesProjectRepositoryStorage](docs/api/api_entities_project_repository_storage.html)

Results: Show the storage information.

SDK operations: `load`.

### [ApiEntitiesProjectSnippet](docs/api/api_entities_project_snippet.html)

Results: Create a new project snippet; Get raw project snippet file contents from the repository; Get all project snippets; Get a raw project snippet; Get a single project snippet; Update an existing project snippet.

SDK operations: `create`, `list`, `load`, `update`.

Key fields to recognise:

- `author`: API_Entities_UserBasic model

### [ApiEntitiesProjectUpload](docs/api/api_entities_project_upload.html)

Results: Upload a file.

SDK operations: `create`.

### [ApiEntitiesProjectWithAccess](docs/api/api_entities_project_with_access.html)

Results: Start the housekeeping task for a project; Creates merge request for missing ci config in project; Start a task to recalculate repository size for a project; Get a single project.

SDK operations: `create`, `load`.

Key fields to recognise:

- `custom_attributes`: API_Entities_CustomAttribute model
- `forked_from_project`: API_Entities_BasicProjectDetails model
- `owner`: API_Entities_UserBasic model
- `spp_repository_pipeline_access`: The spp_repository_pipeline_access setting is only visible if the security_orchestration_policies feature is available.

### [ApiEntitiesProjectsContainerRegistryProtectionRule](docs/api/api_entities_projects_container_registry_protection_rule.html)

Results: Create a container protection rule for a project; Get list of container registry protection rules for a project; Update a container protection rule for a project.

SDK operations: `create`, `list`, `update`.

### [ApiEntitiesProjectsPackagesProtectionRule](docs/api/api_entities_projects_packages_protection_rule.html)

Results: Create a package protection rule for a project; Get list of package protection rules for a project; Update a package protection rule for a project.

SDK operations: `create`, `list`, `update`.

### [ApiEntitiesProjectsTopic](docs/api/api_entities_projects_topic.html)

Results: Create a topic; Merge topics; Get topics; Get topic; Update a topic.

SDK operations: `create`, `load`, `update`.

### [ApiEntitiesProtectedBranch](docs/api/api_entities_protected_branch.html)

Results: Protect a single branch; Get a project&#39;s protected branches; Get a single protected branch; Update a protected branch.

SDK operations: `create`, `list`, `load`, `update`.

### [ApiEntitiesProtectedTag](docs/api/api_entities_protected_tag.html)

Results: Protect a single tag or wildcard; Get a project&#39;s protected tags; Get a single protected tag.

SDK operations: `create`, `list`, `load`.

### [ApiEntitiesPublicGroupDetail](docs/api/api_entities_public_group_detail.html)

Results: Get ancestor and shared groups for a project; Get the namespaces to where the project can be transferred.

SDK operations: `list`.

### [ApiEntitiesRelatedIssue](docs/api/api_entities_related_issue.html)

Results: List issue relations.

SDK operations: `list`.

Key fields to recognise:

- `assignee`: API_Entities_UserBasic model
- `assignees`: API_Entities_UserBasic model
- `author`: API_Entities_UserBasic model
- `closed_by`: API_Entities_UserBasic model
- `severity`: One of [&quot;UNKNOWN&quot;, &quot;LOW&quot;, &quot;MEDIUM&quot;, &quot;HIGH&quot;, &quot;CRITICAL&quot;]

### [ApiEntitiesRelationImportTracker](docs/api/api_entities_relation_import_tracker.html)

Results: Re-import a relation into a project.

SDK operations: `create`.

### [ApiEntitiesRelease](docs/api/api_entities_release.html)

Results: Create a release; Collect release evidence; List Releases; List group releases; Get a release by a tag name; Update a release.

SDK operations: `create`, `list`, `load`, `update`.

Key fields to recognise:

- `author`: API_Entities_UserBasic model
- `commit`: API_Entities_Commit model

### [ApiEntitiesReleasesLink](docs/api/api_entities_releases_link.html)

Results: Create a release link; List links of a release; Get a release link; Update a release link.

SDK operations: `create`, `list`, `load`, `update`.

### [ApiEntitiesRemoteMirror](docs/api/api_entities_remote_mirror.html)

Results: Create remote mirror for a project; Triggers a push mirror operation; List the project&#39;s remote mirrors; Get a single remote mirror; Update the attributes of a single remote mirror.

SDK operations: `create`, `list`, `load`, `update`.

### [ApiEntitiesRepositoryHealth](docs/api/api_entities_repository_health.html)

Results: Get repository health.

SDK operations: `load`.

### [ApiEntitiesResourceAccessTokenWithToken](docs/api/api_entities_resource_access_token_with_token.html)

Results: Rotate a resource access token.

SDK operations: `create`.

### [ApiEntitiesResourceMilestoneEvent](docs/api/api_entities_resource_milestone_event.html)

Results: List project Issue milestone events; List project Merge request milestone events; Get single Issue milestone event; Get single Merge request milestone event.

SDK operations: `list`, `load`.

Key fields to recognise:

- `user`: API_Entities_UserBasic model

### [ApiEntitiesSnippet](docs/api/api_entities_snippet.html)

Results: List all snippets current_user has access to; Get a snippets list for an authenticated user.

SDK operations: `list`.

Key fields to recognise:

- `author`: API_Entities_UserBasic model

### [ApiEntitiesSshKeyWithUser](docs/api/api_entities_ssh_key_with_user.html)

Results: Get single ssh key by id. Only available to admin users.

SDK operations: `load`.

### [ApiEntitiesSuggestion](docs/api/api_entities_suggestion.html)

Results: Apply suggestion patch in the Merge Request it was created; Apply multiple suggestion patches in the Merge Request where they were created.

SDK operations: `update`.

### [ApiEntitiesSystemBroadcastMessage](docs/api/api_entities_system_broadcast_message.html)

Results: Create a broadcast message; Get all broadcast messages; Get a specific broadcast message; Delete a broadcast message; Update a broadcast message.

SDK operations: `create`, `load`, `remove`, `update`.

### [ApiEntitiesTag](docs/api/api_entities_tag.html)

Results: Create a new repository tag; Get a project repository tags; Get a single repository tag.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `commit`: API_Entities_Commit model

### [ApiEntitiesTagSignature](docs/api/api_entities_tag_signature.html)

Results: Get a tag&#39;s signature.

SDK operations: `load`.

### [ApiEntitiesTemplatesList](docs/api/api_entities_templates_list.html)

Results: Get a list of templates available to this project.

SDK operations: `load`.

### [ApiEntitiesTerraformModuleVersion](docs/api/api_entities_terraform_module_version.html)

Results: List versions for a module; Get details about specific version of a module; Get details about the latest version of a module.

SDK operations: `list`, `load`.

### [ApiEntitiesTreeObject](docs/api/api_entities_tree_object.html)

Results: Get a project repository tree.

SDK operations: `load`.

### [ApiEntitiesTrigger](docs/api/api_entities_trigger.html)

Results: Create a trigger token; Get trigger tokens list; Get specific trigger token of a project; Update a trigger token.

SDK operations: `create`, `list`, `load`, `update`.

Key fields to recognise:

- `owner`: API_Entities_UserBasic model

### [ApiEntitiesUserAgentDetail](docs/api/api_entities_user_agent_detail.html)

Results: Get the user agent details for an issue; Get the user agent details for a project snippet; Get the user agent details for a snippet.

SDK operations: `load`.

### [ApiEntitiesUserCount](docs/api/api_entities_user_count.html)

Results: Return the user specific counts.

SDK operations: `load`.

### [ApiEntitiesUserPublic](docs/api/api_entities_user_public.html)

Results: Get a list of users provisioned by the group; Get a list of SAML users of the group.

SDK operations: `list`.

### [ApiEntitiesUserWithAdmin](docs/api/api_entities_user_with_admin.html)

Results: Get user by fingerprint of SSH key.

SDK operations: `list`.

### [ApiEntitiesWikiAttachment](docs/api/api_entities_wiki_attachment.html)

Results: Upload an attachment to the wiki repository.

SDK operations: `create`.

### [ApiEntitiesWikiPage](docs/api/api_entities_wiki_page.html)

Results: Create a wiki page; Get a wiki page; Update a wiki page.

SDK operations: `create`, `load`, `update`.

### [ApiEntitiesWikiPageBasic](docs/api/api_entities_wiki_page_basic.html)

Results: Get a list of wiki pages.

SDK operations: `list`.

### [Application](docs/api/application.html)

Results: Delete an application.

SDK operations: `remove`.

### [AwardEmoji](docs/api/award_emoji.html)

Results: Delete an emoji reaction.

SDK operations: `remove`.

### [Badge](docs/api/badge.html)

Results: Removes a badge from the group.; Removes a badge from the project.

SDK operations: `remove`.

### [Branch](docs/api/branch.html)

Results: Delete a branch; 202 Accepted.

SDK operations: `remove`.

### [CargoPackage](docs/api/cargo_package.html)

Results: Get config.json.

SDK operations: `load`.

### [CiVariable](docs/api/ci_variable.html)

Results: Delete an existing variable from a project; Delete an existing variable from a group; Instance Variable Not Found.

SDK operations: `remove`.

### [Cluster](docs/api/cluster.html)

Results: Delete group cluster; Delete project cluster; Delete instance cluster.

SDK operations: `remove`.

### [ClusterAgent](docs/api/cluster_agent.html)

Results: Revoke an agent token; Delete a registered agent.

SDK operations: `remove`.

### [Composer](docs/api/composer.html)

Results: Composer packages endpoint for registering packages.

SDK operations: `create`.

### [ComposerPackage](docs/api/composer_package.html)

Results: Composer package endpoint to download a package archive; Composer packages endpoint at group level for package versions metadata; Composer v2 packages p2 endpoint at group level for package versions metadata; Composer packages endpoint at group level for packages list; Composer packages endpoint at group level.

SDK operations: `load`.

### [Conan](docs/api/conan.html)

Results: Delete Package.

SDK operations: `remove`.

### [ConanPackage](docs/api/conan_package.html)

Results: Download package files; Download recipe files; Get package references metadata; Search for packages; Ping the Conan API; Authenticate user against conan CLI; Check for valid user credentials per conan CLI; Delete package revision; Delete recipe revision; Upload package files; Workhorse authorize the conan package file; Upload recipe package files; Workhorse authorize the conan recipe file.

SDK operations: `load`, `remove`, `update`.

### [ContainerRegistry](docs/api/container_registry.html)

Results: Success.

SDK operations: `remove`.

### [ContainerRegistryEvent](docs/api/container_registry_event.html)

Results: Success.

SDK operations: `create`.

### [CustomAttribute](docs/api/custom_attribute.html)

Results: Get a custom attribute on a group; Get a custom attribute on a project; Get all custom attributes on a group; Get all custom attributes on a project.

SDK operations: `load`.

### [Debian](docs/api/debian.html)

Results: Authorize Debian package upload; Upload Debian package.

SDK operations: `update`.

### [DebianDistribution](docs/api/debian_distribution.html)

Results: Delete a Debian Distribution.

SDK operations: `remove`.

### [DebianPackage](docs/api/debian_package.html)

Results: Download Debian package; The binary files index by hash; The installer (udeb) binary files index by hash; The binary files index; The installer (udeb) binary files index; The source files index by hash; The source files index; The signed Release file; The unsigned Release file; The Release file signature.

SDK operations: `load`.

### [DependencyProxy](docs/api/dependency_proxy.html)

Results: Purge the dependency proxy for a group.

SDK operations: `remove`.

### [DeployKey](docs/api/deploy_key.html)

Results: Delete deploy key.

SDK operations: `remove`.

### [DeployToken](docs/api/deploy_token.html)

Results: Delete a group deploy token; Delete a project deploy token.

SDK operations: `remove`.

### [Deployment](docs/api/deployment.html)

Results: Deployment destroyed.

SDK operations: `remove`.

### [EeApiEntitiesApprovalState](docs/api/ee_api_entities_approval_state.html)

Results: Deprecated in 16.0: Use the merge request approvals API instead. Change approval-related configuration.

SDK operations: `create`.

### [EeApiEntitiesAuditEvent](docs/api/ee_api_entities_audit_event.html)

Results: Get a list of audit events in this group.; Get a list of audit events in this project.; Get a specific audit event in this group.; Get a specific audit event in this project.

SDK operations: `list`, `load`.

### [EeApiEntitiesBillableMembership](docs/api/ee_api_entities_billable_membership.html)

Results: Get the indirect memberships of a billable user of a top-level group.; Get the direct memberships of a billable user of a top-level group.

SDK operations: `load`.

### [EeApiEntitiesGeoNodeStatus](docs/api/ee_api_entities_geo_node_status.html)

Results: Posts the current node status to the primary site.

SDK operations: `create`.

### [EeApiEntitiesGeoPipelineRef](docs/api/ee_api_entities_geo_pipeline_ref.html)

Results: Returns the list of pipeline refs for the project.

SDK operations: `list`.

### [EeApiEntitiesIssuableMetricImage](docs/api/ee_api_entities_issuable_metric_image.html)

Results: Upload a metric image for an issue; Remove a metric image for an issue; Update a metric image for an issue.

SDK operations: `create`, `remove`, `update`.

### [EeApiEntitiesMergeRequestApprovalState](docs/api/ee_api_entities_merge_request_approval_state.html)

Results: Get approval state of merge request.

SDK operations: `list`.

### [EeApiEntitiesSshCertificate](docs/api/ee_api_entities_ssh_certificate.html)

Results: Create a ssh certificate for a group.; Get a list of ssh certificates created for a group.

SDK operations: `create`, `list`.

### [Environment](docs/api/environment.html)

Results: Stop stale environments; Delete multiple stopped review apps; Delete an environment.

SDK operations: `create`, `remove`.

### [ErrorTrackingClientKey](docs/api/error_tracking_client_key.html)

Results: Bad request.

SDK operations: `remove`.

### [Feature](docs/api/feature.html)

Results: Delete a feature.

SDK operations: `remove`.

### [FeatureFlag](docs/api/feature_flag.html)

Results: created Metric; created Register; get Unleash(s); Unauthorized.

SDK operations: `create`, `load`, `remove`.

### [FeatureFlagsUserList](docs/api/feature_flags_user_list.html)

Results: Delete feature flag user list.

SDK operations: `remove`.

### [FreezePeriod](docs/api/freeze_period.html)

Results: Delete a freeze period.

SDK operations: `remove`.

### [GenericPackage](docs/api/generic_package.html)

Results: Download package file; Upload package file; Workhorse authorize generic package file.

SDK operations: `load`, `update`.

### [Geo](docs/api/geo.html)

Results: Query the GraphQL endpoint of an existing Geo node; Responsible for making HTTP GET /repo.git/info/refs?service=git-receive-pack request from secondary gitlab-shell to primary; Responsible for making HTTP GET /repo.git/info/refs?service=git-upload-pack request from secondary gitlab-shell to primary; Responsible for making HTTP POST /repo.git/info/refs?service=git-receive-pack request from secondary gitlab-shell to primary; Responsible for making HTTP POST /repo.git/git-upload-pack request from secondary gitlab-shell to primary; Returns a replicable file from store (via CDN or sendfile); Returns a Geo proxy response.

SDK operations: `create`, `load`.

### [GoProxy](docs/api/go_proxy.html)

Results: Download module file; Download module source; List.

SDK operations: `load`.

### [Group](docs/api/group.html)

Results: created PlaceholderReassignment; Revoke a single token; Approves all pending members; Workhorse authorization for the reassignment CSV file; Get statistics for the list of group issues; Search on GitLab; Download a single project upload by secret and filename; Lists all pending members for a group including invited users; Download a single group upload by ID; Download the list of pending placeholder assignments for a group; Delete a single group upload by secret and filename; deleted Share; Delete a custom attribute on a group; Removes an ssh certificate from a group.; Delete a single group upload; Removes a billable member from a group or project.; Remove a group.; Set a custom attribute on a group.

SDK operations: `create`, `load`, `remove`, `update`.

### [GroupAvatar](docs/api/group_avatar.html)

Results: Download the group avatar.

SDK operations: `load`.

### [GroupExport](docs/api/group_export.html)

Results: Start relations export; Start export; Download relations export; Download export.

SDK operations: `create`, `load`.

### [GroupImport](docs/api/group_import.html)

Results: Create a new group import; Workhorse authorize the group import upload.

SDK operations: `create`.

### [HelmPackage](docs/api/helm_package.html)

Results: Upload a chart; Authorize a chart upload from workhorse; Download a chart; Download a chart index.

SDK operations: `create`, `load`.

### [Hook](docs/api/hook.html)

Results: created Hook; Un-Set a custom header; Un-Set a url variable; Set a custom header; Set a url variable.

SDK operations: `create`, `remove`, `update`.

### [Import](docs/api/import.html)

Results: Import User Gists.

SDK operations: `create`.

### [Integration](docs/api/integration.html)

Results: Trigger a slash command for mattermost-slash-commands; Trigger a slash command for slack-slash-commands; Successfully processed event; Failed to process event; created Interaction; created Option; Disable an integration.

SDK operations: `create`, `remove`.

### [Invitation](docs/api/invitation.html)

Results: Removes an invitation from a group or project.

SDK operations: `remove`.

### [IssueLink](docs/api/issue_link.html)

Results: Delete an issue link.

SDK operations: `remove`.

### [IssuesStatistic](docs/api/issues_statistic.html)

Results: Get currently authenticated user&#39;s issues statistics.

SDK operations: `load`.

### [Job](docs/api/job.html)

Results: Artifact uploaded; Upload allowed; Job was scheduled; No job for Runner; Download allowed; Trace was patched; Job was updated; Update accepted.

SDK operations: `create`, `load`, `patch`, `update`.

### [MavenPackage](docs/api/maven_package.html)

Results: Download the maven package file at a group level; Download the maven package file at a project level; Download the maven package file at instance level; Upload the maven package file; Workhorse authorize the maven package file upload.

SDK operations: `load`, `update`.

### [Member](docs/api/member.html)

Results: Removes a user from a group or project.; Approves a pending member.

SDK operations: `remove`, `update`.

### [MergeRequest](docs/api/merge_request.html)

Results: List issues related to merge request; Returns the up to date merge-ref HEAD commit; Get the merge request raw diffs; Delete merge request context commits; Delete a merge request; Remove all merge request approvals.

SDK operations: `load`, `remove`, `update`.

### [Metadata](docs/api/metadata.html)

Results: Retrieve metadata information for this GitLab instance; Retrieves version information for the GitLab instance.

SDK operations: `load`.

### [Migration](docs/api/migration.html)

Results: 201 Created.

SDK operations: `create`.

### [MlModelRegistry](docs/api/ml_model_registry.html)

Results: Download an ml_model package file; Workhorse upload model package file; Workhorse authorize model package file.

SDK operations: `load`, `update`.

### [Namespace](docs/api/namespace.html)

Results: Removes a storage limit exclusion for a Namespace.

SDK operations: `remove`.

### [Npm](docs/api/npm.html)

Results: Create or deprecate NPM package.

SDK operations: `update`.

### [NpmPackage](docs/api/npm_package.html)

Results: Ok; Download the NPM tarball; Deletes the given tag; Create or Update the given tag for the given NPM package and version.

SDK operations: `create`, `load`, `remove`, `update`.

### [Nuget](docs/api/nuget.html)

Results: The NuGet V3 Feed Package Publish endpoint.

SDK operations: `update`.

### [NugetPackage](docs/api/nuget_package.html)

Results: The NuGet Metadata Service - Package name level; The NuGet Symbol File Download Endpoint; The NuGet Content Service - content request; The NuGet Metadata Service - Package name and version level; The NuGet V2 Feed Single Package Metadata endpoint; The NuGet V2 Feed Enumerate Packages endpoint; The NuGet V2 Feed Find Packages by ID endpoint; The NuGet V2 Feed Service Index; The NuGet V2 Feed Package $metadata endpoint; The NuGet Package Delete endpoint; The NuGet Symbol Package Publish endpoint; The NuGet V2 Feed Package Publish endpoint; The NuGet Package Authorize endpoint; The NuGet Symbol Package Authorize endpoint; The NuGet V2 Feed Package Authorize endpoint.

SDK operations: `list`, `load`, `remove`, `update`.

### [PackageFile](docs/api/package_file.html)

Results: Download a package file; Delete a package file.

SDK operations: `load`, `remove`.

### [Page](docs/api/page.html)

Results: Get pages settings; Unpublish pages; Update pages settings.

SDK operations: `load`, `remove`, `update`.

### [Participant](docs/api/participant.html)

Results: List participants for an issue; Get single merge request participants.

SDK operations: `list`.

### [PersonalAccessToken](docs/api/personal_access_token.html)

Results: Revoke a personal access token.

SDK operations: `remove`.

### [Project](docs/api/project.html)

Results: Resend a webhook event; Create new file in repository; Triggers a hook test; created Authorize; Bulk publish all pending draft notes; Generates a changelog section for a release and commits it in a changelog file; Import members from another project; Workhorse authorize the file upload; Get statistics for the list of project issues; Search on GitLab; Get an archive of the repository; Download a specific file from artifacts archive from a ref; Get blame file from the repository; Get events for a given hook id; Download a specific file from artifacts archive; Get raw file contents from the repository; Download the artifacts archive from a job; Get a file from the repository; Download a single project upload by secret and filename; Metric Images for issue; Gets a specific pipeline for the project; Gets the latest pipeline for the project branch; Get a blob from the repository; Get raw blob contents from the repository; Download a single project upload by ID; Download a (possibly inconsistent) snapshot of a repository; Get languages in project repository; Check pages access of this project; Delete an existing file in repository; Unauthorized; Delete a single project upload by secret and filename; Un-Set a custom header; Un-Set a url variable; Delete a pipeline schedule variable; Delete a pages domain; Remove a group share; Delete a project issue; Delete the artifacts files from a job; Delete a custom attribute on a project; Unprotect a single branch; 204 No Content; Pipeline was deleted; Delete a pipeline schedule; Delete a trigger token; Delete a single project upload by ID; Delete a project; Expire the artifacts files from a project; Remove a forked_from relationship; Set a custom header; Set a url variable; Updates a pages domain; Update existing file in repository; Set a custom attribute on a project; Updates pipeline metadata.

SDK operations: `create`, `load`, `remove`, `update`.

Key fields to recognise:

- `duration`: Time spent running in seconds
- `queued_duration`: Time spent enqueued in seconds
- `user`: API_Entities_UserBasic model

### [ProjectAvatar](docs/api/project_avatar.html)

Results: Download a project avatar.

SDK operations: `load`.

### [ProjectEntity](docs/api/project_entity.html)

Results: Import a BitBucket Server repository; Import a GitHub project.

SDK operations: `create`.

### [ProjectExport](docs/api/project_export.html)

Results: Start export; Start relations export; Download relations export; Download export.

SDK operations: `create`, `load`.

### [ProjectHook](docs/api/project_hook.html)

Results: Not found.

SDK operations: `remove`.

### [ProjectImport](docs/api/project_import.html)

Results: Workhorse authorize the project relation import upload; Workhorse authorize the project import upload.

SDK operations: `create`.

### [ProjectImportEntity](docs/api/project_import_entity.html)

Results: Import a BitBucket Cloud repository; Cancel GitHub project import.

SDK operations: `create`.

### [ProjectPackage](docs/api/project_package.html)

Results: Delete a project package.

SDK operations: `remove`.

### [ProjectSnippet](docs/api/project_snippet.html)

Results: Delete a project snippet.

SDK operations: `remove`.

### [ProjectsJobTokenScope](docs/api/projects_job_token_scope.html)

Results: Delete target group from allowlist.; Delete project from allowlist.; Patch CI_JOB_TOKEN access settings.

SDK operations: `remove`, `update`.

### [ProtectedTag](docs/api/protected_tag.html)

Results: Unprotect a single tag.

SDK operations: `remove`.

### [Pypi](docs/api/pypi.html)

Results: The PyPi Package upload endpoint.

SDK operations: `create`.

### [PypiPackage](docs/api/pypi_package.html)

Results: Authorize the PyPi package upload from workhorse; Download a package file from a group; The PyPi package download endpoint; The PyPi Simple Group Package Endpoint; The PyPi Simple Project Package Endpoint; The PyPi Simple Group Index Endpoint; The PyPi Simple Project Index Endpoint.

SDK operations: `create`, `load`.

### [Release](docs/api/release.html)

Results: Download a project release asset file; Get the latest project release; Delete a release.

SDK operations: `load`, `remove`.

### [ReleaseLink](docs/api/release_link.html)

Results: Bad request.

SDK operations: `remove`.

### [RemoteMirror](docs/api/remote_mirror.html)

Results: Get the public key of a single remote mirror; Delete a single remote mirror.

SDK operations: `load`, `remove`.

### [Rpm](docs/api/rpm.html)

Results: Upload a RPM package.

SDK operations: `create`.

### [RpmPackage](docs/api/rpm_package.html)

Results: Authorize package upload from workhorse; Download RPM package files; Download repository metadata files.

SDK operations: `create`, `load`.

### [Rubygem](docs/api/rubygem.html)

Results: Download the spec index file.

SDK operations: `load`.

### [RubygemPackage](docs/api/rubygem_package.html)

Results: Upload a gem; Authorize a gem upload from workhorse; Download the .gem package; Download the gemspec file; Fetch a list of dependencies.

SDK operations: `create`, `load`.

### [Runner](docs/api/runner.html)

Results: Credentials are valid; Unassign a runner from project; Runner manager was deleted; Remove a runner; Delete a registered runner.

SDK operations: `create`, `remove`.

### [Search](docs/api/search.html)

Results: Search on GitLab.

SDK operations: `load`.

### [SecureFile](docs/api/secure_file.html)

Results: Download secure file; Remove a secure file.

SDK operations: `load`, `remove`.

### [Slack](docs/api/slack.html)

Results: Trigger a global slack command.

SDK operations: `create`.

### [Snippet](docs/api/snippet.html)

Results: Get raw snippet file contents from the repository; Get a raw snippet; Remove snippet.

SDK operations: `load`, `remove`.

### [Starrer](docs/api/starrer.html)

Results: Get the users who starred a project.

SDK operations: `list`.

### [SystemHook](docs/api/system_hook.html)

Results: Delete system hook.

SDK operations: `remove`.

### [Tag](docs/api/tag.html)

Results: Delete a repository tag.

SDK operations: `remove`.

### [TerraformRegistry](docs/api/terraform_registry.html)

Results: Download a specific version of a module; Download the latest version of a module; Get download location for specific version of a module; Download specific version of a module; Upload Terraform Module package file; Workhorse authorize Terraform Module package file.

SDK operations: `load`, `update`.

### [TerraformState](docs/api/terraform_state.html)

Results: Lock a Terraform state of a certain name; Add a new Terraform state or update an existing one; No data provided; Get a Terraform state version; Get a Terraform state by its name; Empty state; Unlock a Terraform state of a certain name; Delete a Terraform state version; Delete a Terraform state of a certain name.

SDK operations: `create`, `load`, `remove`.

### [TestReport](docs/api/test_report.html)

Results: Gets the test report for a given pipeline.

SDK operations: `list`.

### [TestReportSummary](docs/api/test_report_summary.html)

Results: Gets the test report summary for a given pipeline.

SDK operations: `load`.

### [Topic](docs/api/topic.html)

Results: Delete a topic.

SDK operations: `remove`.

### [UnleashApi](docs/api/unleash_api.html)

Results: Get a list of features (deprecated, v2 client support); Get a list of features.

SDK operations: `load`.

### [UsageData](docs/api/usage_data.html)

Results: Track usage data event; Track usage data event for the current user; Track gitlab internal events; Track multiple gitlab internal events; Get a list of all metric definitions; Get Non SQL usage ping metrics; Get raw SQL queries for usage data SQL metrics; Get the latest ServicePing payload.

SDK operations: `create`, `load`.

### [User](docs/api/user.html)

Results: Get the users list of a project.

SDK operations: `list`.

### [WebCommit](docs/api/web_commit.html)

Results: Get the public key for web commits.

SDK operations: `load`.

### [Wiki](docs/api/wiki.html)

Results: Delete a wiki page.

SDK operations: `remove`.

### Route map

Use this map to locate a capability. Consult the entity reference before supplying request data; routes for the same operation can require different fields.

| Entity | SDK operation | HTTP route | Authentication |
| --- | --- | --- | --- |
| [AccessRequest](docs/api/access_request.html) | `remove` | `DELETE /api/v4/groups/{id}/access_requests/{user_id}` | See reference |
| [AccessRequest](docs/api/access_request.html) | `remove` | `DELETE /api/v4/projects/{id}/access_requests/{user_id}` | See reference |
| [AlertManagement](docs/api/alert_management.html) | `create` | `POST /api/v4/projects/{id}/alert_management_alerts/{alert_iid}/metric_images/authorize` | See reference |
| [AlertManagement](docs/api/alert_management.html) | `remove` | `DELETE /api/v4/projects/{id}/alert_management_alerts/{alert_iid}/metric_images/{metric_image_id}` | See reference |
| [ApiEntitiesAccessRequester](docs/api/api_entities_access_requester.html) | `create` | `POST /api/v4/groups/{id}/access_requests` | See reference |
| [ApiEntitiesAccessRequester](docs/api/api_entities_access_requester.html) | `create` | `POST /api/v4/projects/{id}/access_requests` | See reference |
| [ApiEntitiesAccessRequester](docs/api/api_entities_access_requester.html) | `list` | `GET /api/v4/groups/{id}/access_requests` | See reference |
| [ApiEntitiesAccessRequester](docs/api/api_entities_access_requester.html) | `list` | `GET /api/v4/projects/{id}/access_requests` | See reference |
| [ApiEntitiesAccessRequester](docs/api/api_entities_access_requester.html) | `update` | `PUT /api/v4/groups/{id}/access_requests/{user_id}/approve` | See reference |
| [ApiEntitiesAccessRequester](docs/api/api_entities_access_requester.html) | `update` | `PUT /api/v4/projects/{id}/access_requests/{user_id}/approve` | See reference |
| [ApiEntitiesAppearance](docs/api/api_entities_appearance.html) | `load` | `GET /api/v4/application/appearance` | See reference |
| [ApiEntitiesAppearance](docs/api/api_entities_appearance.html) | `update` | `PUT /api/v4/application/appearance` | See reference |
| [ApiEntitiesApplication](docs/api/api_entities_application.html) | `list` | `GET /api/v4/applications` | See reference |
| [ApiEntitiesApplicationStatistic](docs/api/api_entities_application_statistic.html) | `load` | `GET /api/v4/application/statistics` | See reference |
| [ApiEntitiesApplicationWithSecret](docs/api/api_entities_application_with_secret.html) | `create` | `POST /api/v4/applications/{id}/renew-secret` | See reference |
| [ApiEntitiesApplicationWithSecret](docs/api/api_entities_application_with_secret.html) | `create` | `POST /api/v4/applications` | See reference |
| [ApiEntitiesAvatar](docs/api/api_entities_avatar.html) | `load` | `GET /api/v4/avatar` | See reference |
| [ApiEntitiesAwardEmoji](docs/api/api_entities_award_emoji.html) | `create` | `POST /api/v4/groups/{id}/epics/{epic_iid}/notes/{note_id}/award_emoji` | See reference |
| [ApiEntitiesAwardEmoji](docs/api/api_entities_award_emoji.html) | `create` | `POST /api/v4/projects/{id}/issues/{issue_iid}/notes/{note_id}/award_emoji` | See reference |
| [ApiEntitiesAwardEmoji](docs/api/api_entities_award_emoji.html) | `create` | `POST /api/v4/projects/{id}/merge_requests/{merge_request_iid}/notes/{note_id}/award_emoji` | See reference |
| [ApiEntitiesAwardEmoji](docs/api/api_entities_award_emoji.html) | `create` | `POST /api/v4/projects/{id}/snippets/{snippet_id}/notes/{note_id}/award_emoji` | See reference |
| [ApiEntitiesAwardEmoji](docs/api/api_entities_award_emoji.html) | `create` | `POST /api/v4/groups/{id}/epics/{epic_iid}/award_emoji` | See reference |
| [ApiEntitiesAwardEmoji](docs/api/api_entities_award_emoji.html) | `create` | `POST /api/v4/projects/{id}/issues/{issue_iid}/award_emoji` | See reference |
| [ApiEntitiesAwardEmoji](docs/api/api_entities_award_emoji.html) | `create` | `POST /api/v4/projects/{id}/merge_requests/{merge_request_iid}/award_emoji` | See reference |
| [ApiEntitiesAwardEmoji](docs/api/api_entities_award_emoji.html) | `create` | `POST /api/v4/projects/{id}/snippets/{snippet_id}/award_emoji` | See reference |
| [ApiEntitiesAwardEmoji](docs/api/api_entities_award_emoji.html) | `list` | `GET /api/v4/groups/{id}/epics/{epic_iid}/notes/{note_id}/award_emoji` | See reference |
| [ApiEntitiesAwardEmoji](docs/api/api_entities_award_emoji.html) | `list` | `GET /api/v4/projects/{id}/issues/{issue_iid}/notes/{note_id}/award_emoji` | See reference |
| [ApiEntitiesAwardEmoji](docs/api/api_entities_award_emoji.html) | `list` | `GET /api/v4/projects/{id}/merge_requests/{merge_request_iid}/notes/{note_id}/award_emoji` | See reference |
| [ApiEntitiesAwardEmoji](docs/api/api_entities_award_emoji.html) | `list` | `GET /api/v4/projects/{id}/snippets/{snippet_id}/notes/{note_id}/award_emoji` | See reference |
| [ApiEntitiesAwardEmoji](docs/api/api_entities_award_emoji.html) | `list` | `GET /api/v4/groups/{id}/epics/{epic_iid}/award_emoji` | See reference |
| [ApiEntitiesAwardEmoji](docs/api/api_entities_award_emoji.html) | `list` | `GET /api/v4/projects/{id}/issues/{issue_iid}/award_emoji` | See reference |
| [ApiEntitiesAwardEmoji](docs/api/api_entities_award_emoji.html) | `list` | `GET /api/v4/projects/{id}/merge_requests/{merge_request_iid}/award_emoji` | See reference |
| [ApiEntitiesAwardEmoji](docs/api/api_entities_award_emoji.html) | `list` | `GET /api/v4/projects/{id}/snippets/{snippet_id}/award_emoji` | See reference |
| [ApiEntitiesAwardEmoji](docs/api/api_entities_award_emoji.html) | `load` | `GET /api/v4/groups/{id}/epics/{epic_iid}/notes/{note_id}/award_emoji/{award_id}` | See reference |
| [ApiEntitiesAwardEmoji](docs/api/api_entities_award_emoji.html) | `load` | `GET /api/v4/projects/{id}/issues/{issue_iid}/notes/{note_id}/award_emoji/{award_id}` | See reference |
| [ApiEntitiesAwardEmoji](docs/api/api_entities_award_emoji.html) | `load` | `GET /api/v4/projects/{id}/merge_requests/{merge_request_iid}/notes/{note_id}/award_emoji/{award_id}` | See reference |
| [ApiEntitiesAwardEmoji](docs/api/api_entities_award_emoji.html) | `load` | `GET /api/v4/projects/{id}/snippets/{snippet_id}/notes/{note_id}/award_emoji/{award_id}` | See reference |
| [ApiEntitiesAwardEmoji](docs/api/api_entities_award_emoji.html) | `load` | `GET /api/v4/groups/{id}/epics/{epic_iid}/award_emoji/{award_id}` | See reference |
| [ApiEntitiesAwardEmoji](docs/api/api_entities_award_emoji.html) | `load` | `GET /api/v4/projects/{id}/issues/{issue_iid}/award_emoji/{award_id}` | See reference |
| [ApiEntitiesAwardEmoji](docs/api/api_entities_award_emoji.html) | `load` | `GET /api/v4/projects/{id}/merge_requests/{merge_request_iid}/award_emoji/{award_id}` | See reference |
| [ApiEntitiesAwardEmoji](docs/api/api_entities_award_emoji.html) | `load` | `GET /api/v4/projects/{id}/snippets/{snippet_id}/award_emoji/{award_id}` | See reference |
| [ApiEntitiesBadge](docs/api/api_entities_badge.html) | `create` | `POST /api/v4/groups/{id}/badges` | See reference |
| [ApiEntitiesBadge](docs/api/api_entities_badge.html) | `create` | `POST /api/v4/projects/{id}/badges` | See reference |
| [ApiEntitiesBadge](docs/api/api_entities_badge.html) | `list` | `GET /api/v4/groups/{id}/badges` | See reference |
| [ApiEntitiesBadge](docs/api/api_entities_badge.html) | `list` | `GET /api/v4/projects/{id}/badges` | See reference |
| [ApiEntitiesBadge](docs/api/api_entities_badge.html) | `load` | `GET /api/v4/groups/{id}/badges/{badge_id}` | See reference |
| [ApiEntitiesBadge](docs/api/api_entities_badge.html) | `load` | `GET /api/v4/projects/{id}/badges/{badge_id}` | See reference |
| [ApiEntitiesBadge](docs/api/api_entities_badge.html) | `update` | `PUT /api/v4/groups/{id}/badges/{badge_id}` | See reference |
| [ApiEntitiesBadge](docs/api/api_entities_badge.html) | `update` | `PUT /api/v4/projects/{id}/badges/{badge_id}` | See reference |
| [ApiEntitiesBasicBadgeDetail](docs/api/api_entities_basic_badge_detail.html) | `load` | `GET /api/v4/groups/{id}/badges/render` | See reference |
| [ApiEntitiesBasicBadgeDetail](docs/api/api_entities_basic_badge_detail.html) | `load` | `GET /api/v4/projects/{id}/badges/render` | See reference |
| [ApiEntitiesBasicGroupDetail](docs/api/api_entities_basic_group_detail.html) | `create` | `POST /api/v4/projects/{id}/job_token_scope/groups_allowlist` | See reference |
| [ApiEntitiesBasicProjectDetail](docs/api/api_entities_basic_project_detail.html) | `create` | `POST /api/v4/projects/{id}/job_token_scope/allowlist` | See reference |
| [ApiEntitiesBasicProjectDetail](docs/api/api_entities_basic_project_detail.html) | `list` | `GET /api/v4/users/{user_id}/projects` | See reference |
| [ApiEntitiesBasicProjectDetail](docs/api/api_entities_basic_project_detail.html) | `list` | `GET /api/v4/users/{user_id}/starred_projects` | See reference |
| [ApiEntitiesBasicProjectDetail](docs/api/api_entities_basic_project_detail.html) | `list` | `GET /api/v4/projects` | See reference |
| [ApiEntitiesBasicProjectDetail](docs/api/api_entities_basic_project_detail.html) | `list` | `GET /api/v4/users/{user_id}/contributed_projects` | See reference |
| [ApiEntitiesBasicProjectDetail](docs/api/api_entities_basic_project_detail.html) | `list` | `GET /api/v4/projects/{id}/job_token_scope/allowlist` | See reference |
| [ApiEntitiesBasicProjectDetail](docs/api/api_entities_basic_project_detail.html) | `list` | `GET /api/v4/projects/{id}/job_token_scope/groups_allowlist` | See reference |
| [ApiEntitiesBasicRef](docs/api/api_entities_basic_ref.html) | `list` | `GET /api/v4/projects/{id}/repository/commits/{sha}/refs` | See reference |
| [ApiEntitiesBasicSuccess](docs/api/api_entities_basic_success.html) | `create` | `POST /api/v4/integrations/jira_connect/subscriptions` | See reference |
| [ApiEntitiesBatchedBackgroundMigration](docs/api/api_entities_batched_background_migration.html) | `list` | `GET /api/v4/admin/batched_background_migrations` | See reference |
| [ApiEntitiesBatchedBackgroundMigration](docs/api/api_entities_batched_background_migration.html) | `load` | `GET /api/v4/admin/batched_background_migrations/{id}` | See reference |
| [ApiEntitiesBatchedBackgroundMigration](docs/api/api_entities_batched_background_migration.html) | `update` | `PUT /api/v4/admin/batched_background_migrations/{id}/pause` | See reference |
| [ApiEntitiesBatchedBackgroundMigration](docs/api/api_entities_batched_background_migration.html) | `update` | `PUT /api/v4/admin/batched_background_migrations/{id}/resume` | See reference |
| [ApiEntitiesBranch](docs/api/api_entities_branch.html) | `create` | `POST /api/v4/projects/{id}/repository/branches` | See reference |
| [ApiEntitiesBranch](docs/api/api_entities_branch.html) | `list` | `GET /api/v4/projects/{id}/repository/branches` | See reference |
| [ApiEntitiesBranch](docs/api/api_entities_branch.html) | `load` | `GET /api/v4/projects/{id}/repository/branches/{branch}` | See reference |
| [ApiEntitiesBranch](docs/api/api_entities_branch.html) | `update` | `PUT /api/v4/projects/{id}/repository/branches/{branch}/protect` | See reference |
| [ApiEntitiesBranch](docs/api/api_entities_branch.html) | `update` | `PUT /api/v4/projects/{id}/repository/branches/{branch}/unprotect` | See reference |
| [ApiEntitiesBulkImport](docs/api/api_entities_bulk_import.html) | `create` | `POST /api/v4/bulk_imports` | See reference |
| [ApiEntitiesBulkImport](docs/api/api_entities_bulk_import.html) | `create` | `POST /api/v4/bulk_imports/{import_id}/cancel` | See reference |
| [ApiEntitiesBulkImport](docs/api/api_entities_bulk_import.html) | `list` | `GET /api/v4/bulk_imports/{import_id}/entities` | See reference |
| [ApiEntitiesBulkImport](docs/api/api_entities_bulk_import.html) | `list` | `GET /api/v4/bulk_imports` | See reference |
| [ApiEntitiesBulkImport](docs/api/api_entities_bulk_import.html) | `list` | `GET /api/v4/bulk_imports/entities` | See reference |
| [ApiEntitiesBulkImport](docs/api/api_entities_bulk_import.html) | `load` | `GET /api/v4/bulk_imports/{import_id}/entities/{entity_id}` | See reference |
| [ApiEntitiesBulkImport](docs/api/api_entities_bulk_import.html) | `load` | `GET /api/v4/bulk_imports/{import_id}` | See reference |
| [ApiEntitiesBulkImportsEntityFailure](docs/api/api_entities_bulk_imports_entity_failure.html) | `load` | `GET /api/v4/bulk_imports/{import_id}/entities/{entity_id}/failures` | See reference |
| [ApiEntitiesBulkImportsExportStatus](docs/api/api_entities_bulk_imports_export_status.html) | `list` | `GET /api/v4/groups/{id}/export_relations/status` | See reference |
| [ApiEntitiesBulkImportsExportStatus](docs/api/api_entities_bulk_imports_export_status.html) | `list` | `GET /api/v4/projects/{id}/export_relations/status` | See reference |
| [ApiEntitiesChangelog](docs/api/api_entities_changelog.html) | `load` | `GET /api/v4/projects/{id}/repository/changelog` | See reference |
| [ApiEntitiesCiBridge](docs/api/api_entities_ci_bridge.html) | `list` | `GET /api/v4/projects/{id}/pipelines/{pipeline_id}/bridges` | See reference |
| [ApiEntitiesCiCatalogResourcesVersion](docs/api/api_entities_ci_catalog_resources_version.html) | `create` | `POST /api/v4/projects/{id}/catalog/publish` | See reference |
| [ApiEntitiesCiJob](docs/api/api_entities_ci_job.html) | `create` | `POST /api/v4/projects/{id}/jobs/{job_id}/cancel` | See reference |
| [ApiEntitiesCiJob](docs/api/api_entities_ci_job.html) | `create` | `POST /api/v4/projects/{id}/jobs/{job_id}/artifacts/keep` | See reference |
| [ApiEntitiesCiJob](docs/api/api_entities_ci_job.html) | `create` | `POST /api/v4/projects/{id}/jobs/{job_id}/erase` | See reference |
| [ApiEntitiesCiJob](docs/api/api_entities_ci_job.html) | `create` | `POST /api/v4/projects/{id}/jobs/{job_id}/retry` | See reference |
| [ApiEntitiesCiJob](docs/api/api_entities_ci_job.html) | `list` | `GET /api/v4/projects/{id}/pipelines/{pipeline_id}/jobs` | See reference |
| [ApiEntitiesCiJob](docs/api/api_entities_ci_job.html) | `list` | `GET /api/v4/projects/{id}/jobs` | See reference |
| [ApiEntitiesCiJob](docs/api/api_entities_ci_job.html) | `list` | `GET /api/v4/projects/{id}/jobs/{job_id}/trace` | See reference |
| [ApiEntitiesCiJob](docs/api/api_entities_ci_job.html) | `list` | `GET /api/v4/job` | See reference |
| [ApiEntitiesCiJob](docs/api/api_entities_ci_job.html) | `list` | `GET /api/v4/job/allowed_agents` | See reference |
| [ApiEntitiesCiJob](docs/api/api_entities_ci_job.html) | `load` | `GET /api/v4/projects/{id}/jobs/{job_id}` | See reference |
| [ApiEntitiesCiJobBasic](docs/api/api_entities_ci_job_basic.html) | `create` | `POST /api/v4/projects/{id}/jobs/{job_id}/play` | See reference |
| [ApiEntitiesCiJobBasic](docs/api/api_entities_ci_job_basic.html) | `list` | `GET /api/v4/projects/{id}/resource_groups/{key}/upcoming_jobs` | See reference |
| [ApiEntitiesCiJobBasicWithProject](docs/api/api_entities_ci_job_basic_with_project.html) | `load` | `GET /api/v4/runners/{id}/jobs` | See reference |
| [ApiEntitiesCiLintResult](docs/api/api_entities_ci_lint_result.html) | `create` | `POST /api/v4/projects/{id}/ci/lint` | See reference |
| [ApiEntitiesCiLintResult](docs/api/api_entities_ci_lint_result.html) | `list` | `GET /api/v4/projects/{id}/ci/lint` | See reference |
| [ApiEntitiesCiPipeline](docs/api/api_entities_ci_pipeline.html) | `create` | `POST /api/v4/projects/{id}/merge_requests/{merge_request_iid}/pipelines` | See reference |
| [ApiEntitiesCiPipeline](docs/api/api_entities_ci_pipeline.html) | `create` | `POST /api/v4/projects/{id}/(ref/{ref}/)trigger/pipeline` | See reference |
| [ApiEntitiesCiPipeline](docs/api/api_entities_ci_pipeline.html) | `create` | `POST /api/v4/projects/{id}/pipelines/{pipeline_id}/cancel` | See reference |
| [ApiEntitiesCiPipeline](docs/api/api_entities_ci_pipeline.html) | `create` | `POST /api/v4/projects/{id}/pipelines/{pipeline_id}/retry` | See reference |
| [ApiEntitiesCiPipeline](docs/api/api_entities_ci_pipeline.html) | `create` | `POST /api/v4/projects/{id}/pipeline` | See reference |
| [ApiEntitiesCiPipelineBasic](docs/api/api_entities_ci_pipeline_basic.html) | `list` | `GET /api/v4/projects/{id}/pipelines` | See reference |
| [ApiEntitiesCiPipelineBasic](docs/api/api_entities_ci_pipeline_basic.html) | `list` | `GET /api/v4/projects/{id}/pipeline_schedules/{pipeline_schedule_id}/pipelines` | See reference |
| [ApiEntitiesCiPipelineBasic](docs/api/api_entities_ci_pipeline_basic.html) | `load` | `GET /api/v4/projects/{id}/merge_requests/{merge_request_iid}/pipelines` | See reference |
| [ApiEntitiesCiPipelineSchedule](docs/api/api_entities_ci_pipeline_schedule.html) | `list` | `GET /api/v4/projects/{id}/pipeline_schedules` | See reference |
| [ApiEntitiesCiPipelineScheduleDetail](docs/api/api_entities_ci_pipeline_schedule_detail.html) | `create` | `POST /api/v4/projects/{id}/pipeline_schedules/{pipeline_schedule_id}/play` | See reference |
| [ApiEntitiesCiPipelineScheduleDetail](docs/api/api_entities_ci_pipeline_schedule_detail.html) | `create` | `POST /api/v4/projects/{id}/pipeline_schedules/{pipeline_schedule_id}/take_ownership` | See reference |
| [ApiEntitiesCiPipelineScheduleDetail](docs/api/api_entities_ci_pipeline_schedule_detail.html) | `create` | `POST /api/v4/projects/{id}/pipeline_schedules` | See reference |
| [ApiEntitiesCiPipelineScheduleDetail](docs/api/api_entities_ci_pipeline_schedule_detail.html) | `load` | `GET /api/v4/projects/{id}/pipeline_schedules/{pipeline_schedule_id}` | See reference |
| [ApiEntitiesCiPipelineScheduleDetail](docs/api/api_entities_ci_pipeline_schedule_detail.html) | `update` | `PUT /api/v4/projects/{id}/pipeline_schedules/{pipeline_schedule_id}` | See reference |
| [ApiEntitiesCiResetTokenResult](docs/api/api_entities_ci_reset_token_result.html) | `create` | `POST /api/v4/groups/{id}/runners/reset_registration_token` | See reference |
| [ApiEntitiesCiResetTokenResult](docs/api/api_entities_ci_reset_token_result.html) | `create` | `POST /api/v4/runners/reset_authentication_token` | See reference |
| [ApiEntitiesCiResetTokenResult](docs/api/api_entities_ci_reset_token_result.html) | `create` | `POST /api/v4/projects/{id}/runners/reset_registration_token` | See reference |
| [ApiEntitiesCiResetTokenResult](docs/api/api_entities_ci_reset_token_result.html) | `create` | `POST /api/v4/runners/{id}/reset_authentication_token` | See reference |
| [ApiEntitiesCiResetTokenResult](docs/api/api_entities_ci_reset_token_result.html) | `create` | `POST /api/v4/runners/reset_registration_token` | See reference |
| [ApiEntitiesCiResourceGroup](docs/api/api_entities_ci_resource_group.html) | `list` | `GET /api/v4/projects/{id}/resource_groups` | See reference |
| [ApiEntitiesCiResourceGroup](docs/api/api_entities_ci_resource_group.html) | `load` | `GET /api/v4/projects/{id}/resource_groups/{key}` | See reference |
| [ApiEntitiesCiResourceGroup](docs/api/api_entities_ci_resource_group.html) | `update` | `PUT /api/v4/projects/{id}/resource_groups/{key}` | See reference |
| [ApiEntitiesCiRunner](docs/api/api_entities_ci_runner.html) | `create` | `POST /api/v4/projects/{id}/runners` | See reference |
| [ApiEntitiesCiRunner](docs/api/api_entities_ci_runner.html) | `load` | `GET /api/v4/projects/{id}/runners` | See reference |
| [ApiEntitiesCiRunner](docs/api/api_entities_ci_runner.html) | `load` | `GET /api/v4/groups/{id}/runners` | See reference |
| [ApiEntitiesCiRunner](docs/api/api_entities_ci_runner.html) | `load` | `GET /api/v4/runners` | See reference |
| [ApiEntitiesCiRunner](docs/api/api_entities_ci_runner.html) | `load` | `GET /api/v4/runners/all` | See reference |
| [ApiEntitiesCiRunnerDetail](docs/api/api_entities_ci_runner_detail.html) | `load` | `GET /api/v4/runners/{id}` | See reference |
| [ApiEntitiesCiRunnerDetail](docs/api/api_entities_ci_runner_detail.html) | `update` | `PUT /api/v4/runners/{id}` | See reference |
| [ApiEntitiesCiRunnerManager](docs/api/api_entities_ci_runner_manager.html) | `load` | `GET /api/v4/runners/{id}/managers` | See reference |
| [ApiEntitiesCiRunnerRegistrationDetail](docs/api/api_entities_ci_runner_registration_detail.html) | `create` | `POST /api/v4/runners` | See reference |
| [ApiEntitiesCiRunnerRegistrationDetail](docs/api/api_entities_ci_runner_registration_detail.html) | `create` | `POST /api/v4/user/runners` | See reference |
| [ApiEntitiesCiSecureFile](docs/api/api_entities_ci_secure_file.html) | `create` | `POST /api/v4/projects/{id}/secure_files` | See reference |
| [ApiEntitiesCiSecureFile](docs/api/api_entities_ci_secure_file.html) | `load` | `GET /api/v4/projects/{id}/secure_files` | See reference |
| [ApiEntitiesCiSecureFile](docs/api/api_entities_ci_secure_file.html) | `load` | `GET /api/v4/projects/{id}/secure_files/{secure_file_id}` | See reference |
| [ApiEntitiesCiVariable](docs/api/api_entities_ci_variable.html) | `create` | `POST /api/v4/projects/{id}/pipeline_schedules/{pipeline_schedule_id}/variables` | See reference |
| [ApiEntitiesCiVariable](docs/api/api_entities_ci_variable.html) | `create` | `POST /api/v4/groups/{id}/variables` | See reference |
| [ApiEntitiesCiVariable](docs/api/api_entities_ci_variable.html) | `create` | `POST /api/v4/projects/{id}/variables` | See reference |
| [ApiEntitiesCiVariable](docs/api/api_entities_ci_variable.html) | `create` | `POST /api/v4/admin/ci/variables` | See reference |
| [ApiEntitiesCiVariable](docs/api/api_entities_ci_variable.html) | `list` | `GET /api/v4/projects/{id}/pipelines/{pipeline_id}/variables` | See reference |
| [ApiEntitiesCiVariable](docs/api/api_entities_ci_variable.html) | `load` | `GET /api/v4/projects/{id}/variables/{key}` | See reference |
| [ApiEntitiesCiVariable](docs/api/api_entities_ci_variable.html) | `load` | `GET /api/v4/groups/{id}/variables` | See reference |
| [ApiEntitiesCiVariable](docs/api/api_entities_ci_variable.html) | `load` | `GET /api/v4/projects/{id}/variables` | See reference |
| [ApiEntitiesCiVariable](docs/api/api_entities_ci_variable.html) | `load` | `GET /api/v4/groups/{id}/variables/{key}` | See reference |
| [ApiEntitiesCiVariable](docs/api/api_entities_ci_variable.html) | `load` | `GET /api/v4/admin/ci/variables` | See reference |
| [ApiEntitiesCiVariable](docs/api/api_entities_ci_variable.html) | `load` | `GET /api/v4/admin/ci/variables/{key}` | See reference |
| [ApiEntitiesCiVariable](docs/api/api_entities_ci_variable.html) | `update` | `PUT /api/v4/projects/{id}/pipeline_schedules/{pipeline_schedule_id}/variables/{key}` | See reference |
| [ApiEntitiesCiVariable](docs/api/api_entities_ci_variable.html) | `update` | `PUT /api/v4/groups/{id}/variables/{key}` | See reference |
| [ApiEntitiesCiVariable](docs/api/api_entities_ci_variable.html) | `update` | `PUT /api/v4/projects/{id}/variables/{key}` | See reference |
| [ApiEntitiesCiVariable](docs/api/api_entities_ci_variable.html) | `update` | `PUT /api/v4/admin/ci/variables/{key}` | See reference |
| [ApiEntitiesCluster](docs/api/api_entities_cluster.html) | `create` | `POST /api/v4/admin/clusters/add` | See reference |
| [ApiEntitiesCluster](docs/api/api_entities_cluster.html) | `list` | `GET /api/v4/groups/{id}/clusters` | See reference |
| [ApiEntitiesCluster](docs/api/api_entities_cluster.html) | `list` | `GET /api/v4/projects/{id}/clusters` | See reference |
| [ApiEntitiesCluster](docs/api/api_entities_cluster.html) | `list` | `GET /api/v4/admin/clusters` | See reference |
| [ApiEntitiesCluster](docs/api/api_entities_cluster.html) | `load` | `GET /api/v4/admin/clusters/{cluster_id}` | See reference |
| [ApiEntitiesCluster](docs/api/api_entities_cluster.html) | `update` | `PUT /api/v4/admin/clusters/{cluster_id}` | See reference |
| [ApiEntitiesClusterGroup](docs/api/api_entities_cluster_group.html) | `create` | `POST /api/v4/groups/{id}/clusters/user` | See reference |
| [ApiEntitiesClusterGroup](docs/api/api_entities_cluster_group.html) | `load` | `GET /api/v4/groups/{id}/clusters/{cluster_id}` | See reference |
| [ApiEntitiesClusterGroup](docs/api/api_entities_cluster_group.html) | `update` | `PUT /api/v4/groups/{id}/clusters/{cluster_id}` | See reference |
| [ApiEntitiesClusterProject](docs/api/api_entities_cluster_project.html) | `create` | `POST /api/v4/projects/{id}/clusters/user` | See reference |
| [ApiEntitiesClusterProject](docs/api/api_entities_cluster_project.html) | `load` | `GET /api/v4/projects/{id}/clusters/{cluster_id}` | See reference |
| [ApiEntitiesClusterProject](docs/api/api_entities_cluster_project.html) | `update` | `PUT /api/v4/projects/{id}/clusters/{cluster_id}` | See reference |
| [ApiEntitiesClustersAgent](docs/api/api_entities_clusters_agent.html) | `create` | `POST /api/v4/projects/{id}/cluster_agents` | See reference |
| [ApiEntitiesClustersAgent](docs/api/api_entities_clusters_agent.html) | `load` | `GET /api/v4/projects/{id}/cluster_agents` | See reference |
| [ApiEntitiesClustersAgent](docs/api/api_entities_clusters_agent.html) | `load` | `GET /api/v4/projects/{id}/cluster_agents/{agent_id}` | See reference |
| [ApiEntitiesClustersAgentToken](docs/api/api_entities_clusters_agent_token.html) | `load` | `GET /api/v4/projects/{id}/cluster_agents/{agent_id}/tokens/{token_id}` | See reference |
| [ApiEntitiesClustersAgentTokenBasic](docs/api/api_entities_clusters_agent_token_basic.html) | `load` | `GET /api/v4/projects/{id}/cluster_agents/{agent_id}/tokens` | See reference |
| [ApiEntitiesClustersAgentTokenWithToken](docs/api/api_entities_clusters_agent_token_with_token.html) | `create` | `POST /api/v4/projects/{id}/cluster_agents/{agent_id}/tokens` | See reference |
| [ApiEntitiesCommit](docs/api/api_entities_commit.html) | `create` | `POST /api/v4/projects/{id}/merge_requests/{merge_request_iid}/context_commits` | See reference |
| [ApiEntitiesCommit](docs/api/api_entities_commit.html) | `create` | `POST /api/v4/projects/{id}/repository/commits/{sha}/cherry_pick` | See reference |
| [ApiEntitiesCommit](docs/api/api_entities_commit.html) | `create` | `POST /api/v4/projects/{id}/repository/commits/{sha}/revert` | See reference |
| [ApiEntitiesCommit](docs/api/api_entities_commit.html) | `list` | `GET /api/v4/projects/{id}/repository/commits` | See reference |
| [ApiEntitiesCommit](docs/api/api_entities_commit.html) | `list` | `GET /api/v4/projects/{id}/merge_requests/{merge_request_iid}/commits` | See reference |
| [ApiEntitiesCommit](docs/api/api_entities_commit.html) | `list` | `GET /api/v4/projects/{id}/merge_requests/{merge_request_iid}/context_commits` | See reference |
| [ApiEntitiesCommit](docs/api/api_entities_commit.html) | `list` | `GET /api/v4/projects/{id}/repository/merge_base` | See reference |
| [ApiEntitiesCommitDetail](docs/api/api_entities_commit_detail.html) | `create` | `POST /api/v4/projects/{id}/repository/commits` | See reference |
| [ApiEntitiesCommitDetail](docs/api/api_entities_commit_detail.html) | `load` | `GET /api/v4/projects/{id}/repository/commits/{sha}` | See reference |
| [ApiEntitiesCommitDetail](docs/api/api_entities_commit_detail.html) | `update` | `PUT /api/v4/projects/{id}/repository/submodules/{submodule}` | See reference |
| [ApiEntitiesCommitNote](docs/api/api_entities_commit_note.html) | `create` | `POST /api/v4/projects/{id}/repository/commits/{sha}/comments` | See reference |
| [ApiEntitiesCommitNote](docs/api/api_entities_commit_note.html) | `list` | `GET /api/v4/projects/{id}/repository/commits/{sha}/comments` | See reference |
| [ApiEntitiesCommitSequence](docs/api/api_entities_commit_sequence.html) | `load` | `GET /api/v4/projects/{id}/repository/commits/{sha}/sequence` | See reference |
| [ApiEntitiesCommitSignature](docs/api/api_entities_commit_signature.html) | `load` | `GET /api/v4/projects/{id}/repository/commits/{sha}/signature` | See reference |
| [ApiEntitiesCommitStatus](docs/api/api_entities_commit_status.html) | `create` | `POST /api/v4/projects/{id}/statuses/{sha}` | See reference |
| [ApiEntitiesCommitStatus](docs/api/api_entities_commit_status.html) | `list` | `GET /api/v4/projects/{id}/repository/commits/{sha}/statuses` | See reference |
| [ApiEntitiesCompare](docs/api/api_entities_compare.html) | `list` | `GET /api/v4/projects/{id}/repository/compare` | See reference |
| [ApiEntitiesContainerRegistryRepository](docs/api/api_entities_container_registry_repository.html) | `list` | `GET /api/v4/projects/{id}/registry/repositories` | See reference |
| [ApiEntitiesContainerRegistryRepository](docs/api/api_entities_container_registry_repository.html) | `list` | `GET /api/v4/groups/{id}/registry/repositories` | See reference |
| [ApiEntitiesContainerRegistryRepository](docs/api/api_entities_container_registry_repository.html) | `load` | `GET /api/v4/registry/repositories/{id}` | See reference |
| [ApiEntitiesContainerRegistryTag](docs/api/api_entities_container_registry_tag.html) | `list` | `GET /api/v4/projects/{id}/registry/repositories/{repository_id}/tags` | See reference |
| [ApiEntitiesContainerRegistryTagDetail](docs/api/api_entities_container_registry_tag_detail.html) | `load` | `GET /api/v4/projects/{id}/registry/repositories/{repository_id}/tags/{tag_name}` | See reference |
| [ApiEntitiesContributor](docs/api/api_entities_contributor.html) | `load` | `GET /api/v4/projects/{id}/repository/contributors` | See reference |
| [ApiEntitiesDeployKey](docs/api/api_entities_deploy_key.html) | `create` | `POST /api/v4/projects/{id}/deploy_keys/{key_id}/enable` | See reference |
| [ApiEntitiesDeployKey](docs/api/api_entities_deploy_key.html) | `create` | `POST /api/v4/deploy_keys` | See reference |
| [ApiEntitiesDeployKey](docs/api/api_entities_deploy_key.html) | `list` | `GET /api/v4/deploy_keys` | See reference |
| [ApiEntitiesDeployKey](docs/api/api_entities_deploy_key.html) | `update` | `PUT /api/v4/projects/{id}/deploy_keys/{key_id}` | See reference |
| [ApiEntitiesDeployKeysProject](docs/api/api_entities_deploy_keys_project.html) | `create` | `POST /api/v4/projects/{id}/deploy_keys` | See reference |
| [ApiEntitiesDeployKeysProject](docs/api/api_entities_deploy_keys_project.html) | `list` | `GET /api/v4/projects/{id}/deploy_keys` | See reference |
| [ApiEntitiesDeployKeysProject](docs/api/api_entities_deploy_keys_project.html) | `load` | `GET /api/v4/projects/{id}/deploy_keys/{key_id}` | See reference |
| [ApiEntitiesDeployToken](docs/api/api_entities_deploy_token.html) | `list` | `GET /api/v4/groups/{id}/deploy_tokens` | See reference |
| [ApiEntitiesDeployToken](docs/api/api_entities_deploy_token.html) | `list` | `GET /api/v4/projects/{id}/deploy_tokens` | See reference |
| [ApiEntitiesDeployToken](docs/api/api_entities_deploy_token.html) | `list` | `GET /api/v4/deploy_tokens` | See reference |
| [ApiEntitiesDeployToken](docs/api/api_entities_deploy_token.html) | `load` | `GET /api/v4/groups/{id}/deploy_tokens/{token_id}` | See reference |
| [ApiEntitiesDeployToken](docs/api/api_entities_deploy_token.html) | `load` | `GET /api/v4/projects/{id}/deploy_tokens/{token_id}` | See reference |
| [ApiEntitiesDeployTokenWithToken](docs/api/api_entities_deploy_token_with_token.html) | `create` | `POST /api/v4/groups/{id}/deploy_tokens` | See reference |
| [ApiEntitiesDeployTokenWithToken](docs/api/api_entities_deploy_token_with_token.html) | `create` | `POST /api/v4/projects/{id}/deploy_tokens` | See reference |
| [ApiEntitiesDeployment](docs/api/api_entities_deployment.html) | `list` | `GET /api/v4/projects/{id}/deployments` | See reference |
| [ApiEntitiesDeploymentExtended](docs/api/api_entities_deployment_extended.html) | `create` | `POST /api/v4/projects/{id}/deployments` | See reference |
| [ApiEntitiesDeploymentExtended](docs/api/api_entities_deployment_extended.html) | `load` | `GET /api/v4/projects/{id}/deployments/{deployment_id}` | See reference |
| [ApiEntitiesDeploymentExtended](docs/api/api_entities_deployment_extended.html) | `update` | `PUT /api/v4/projects/{id}/deployments/{deployment_id}` | See reference |
| [ApiEntitiesDeploymentsApproval](docs/api/api_entities_deployments_approval.html) | `create` | `POST /api/v4/projects/{id}/deployments/{deployment_id}/approval` | See reference |
| [ApiEntitiesDictionaryTable](docs/api/api_entities_dictionary_table.html) | `load` | `GET /api/v4/admin/databases/{database_name}/dictionary/tables/{table_name}` | See reference |
| [ApiEntitiesDiff](docs/api/api_entities_diff.html) | `list` | `GET /api/v4/projects/{id}/repository/commits/{sha}/diff` | See reference |
| [ApiEntitiesDiff](docs/api/api_entities_diff.html) | `load` | `GET /api/v4/projects/{id}/merge_requests/{merge_request_iid}/diffs` | See reference |
| [ApiEntitiesDiscoveredCluster](docs/api/api_entities_discovered_cluster.html) | `load` | `GET /api/v4/discover-cert-based-clusters` | See reference |
| [ApiEntitiesDraftNote](docs/api/api_entities_draft_note.html) | `create` | `POST /api/v4/projects/{id}/merge_requests/{merge_request_iid}/draft_notes` | See reference |
| [ApiEntitiesDraftNote](docs/api/api_entities_draft_note.html) | `list` | `GET /api/v4/projects/{id}/merge_requests/{merge_request_iid}/draft_notes` | See reference |
| [ApiEntitiesDraftNote](docs/api/api_entities_draft_note.html) | `load` | `GET /api/v4/projects/{id}/merge_requests/{merge_request_iid}/draft_notes/{draft_note_id}` | See reference |
| [ApiEntitiesDraftNote](docs/api/api_entities_draft_note.html) | `update` | `PUT /api/v4/projects/{id}/merge_requests/{merge_request_iid}/draft_notes/{draft_note_id}` | See reference |
| [ApiEntitiesDraftNote](docs/api/api_entities_draft_note.html) | `update` | `PUT /api/v4/projects/{id}/merge_requests/{merge_request_iid}/draft_notes/{draft_note_id}/publish` | See reference |
| [ApiEntitiesEnvironment](docs/api/api_entities_environment.html) | `create` | `POST /api/v4/projects/{id}/environments/{environment_id}/stop` | See reference |
| [ApiEntitiesEnvironment](docs/api/api_entities_environment.html) | `create` | `POST /api/v4/projects/{id}/environments` | See reference |
| [ApiEntitiesEnvironment](docs/api/api_entities_environment.html) | `list` | `GET /api/v4/projects/{id}/environments` | See reference |
| [ApiEntitiesEnvironment](docs/api/api_entities_environment.html) | `load` | `GET /api/v4/projects/{id}/environments/{environment_id}` | See reference |
| [ApiEntitiesEnvironment](docs/api/api_entities_environment.html) | `update` | `PUT /api/v4/projects/{id}/environments/{environment_id}` | See reference |
| [ApiEntitiesErrorTrackingClientKey](docs/api/api_entities_error_tracking_client_key.html) | `create` | `POST /api/v4/projects/{id}/error_tracking/client_keys` | See reference |
| [ApiEntitiesErrorTrackingClientKey](docs/api/api_entities_error_tracking_client_key.html) | `list` | `GET /api/v4/projects/{id}/error_tracking/client_keys` | See reference |
| [ApiEntitiesErrorTrackingProjectSetting](docs/api/api_entities_error_tracking_project_setting.html) | `load` | `GET /api/v4/projects/{id}/error_tracking/settings` | See reference |
| [ApiEntitiesErrorTrackingProjectSetting](docs/api/api_entities_error_tracking_project_setting.html) | `patch` | `PATCH /api/v4/projects/{id}/error_tracking/settings` | See reference |
| [ApiEntitiesErrorTrackingProjectSetting](docs/api/api_entities_error_tracking_project_setting.html) | `update` | `PUT /api/v4/projects/{id}/error_tracking/settings` | See reference |
| [ApiEntitiesEvent](docs/api/api_entities_event.html) | `list` | `GET /api/v4/events` | See reference |
| [ApiEntitiesEvent](docs/api/api_entities_event.html) | `list` | `GET /api/v4/users/{id}/events` | See reference |
| [ApiEntitiesEvent](docs/api/api_entities_event.html) | `load` | `GET /api/v4/projects/{id}/events` | See reference |
| [ApiEntitiesFeature](docs/api/api_entities_feature.html) | `create` | `POST /api/v4/features/{name}` | See reference |
| [ApiEntitiesFeature](docs/api/api_entities_feature.html) | `list` | `GET /api/v4/features` | See reference |
| [ApiEntitiesFeatureDefinition](docs/api/api_entities_feature_definition.html) | `list` | `GET /api/v4/features/definitions` | See reference |
| [ApiEntitiesFeatureFlag](docs/api/api_entities_feature_flag.html) | `create` | `POST /api/v4/projects/{id}/feature_flags` | See reference |
| [ApiEntitiesFeatureFlag](docs/api/api_entities_feature_flag.html) | `list` | `GET /api/v4/projects/{id}/feature_flags` | See reference |
| [ApiEntitiesFeatureFlag](docs/api/api_entities_feature_flag.html) | `load` | `GET /api/v4/projects/{id}/feature_flags/{feature_flag_name}` | See reference |
| [ApiEntitiesFeatureFlag](docs/api/api_entities_feature_flag.html) | `update` | `PUT /api/v4/projects/{id}/feature_flags/{feature_flag_name}` | See reference |
| [ApiEntitiesFeatureFlagUserList](docs/api/api_entities_feature_flag_user_list.html) | `create` | `POST /api/v4/projects/{id}/feature_flags_user_lists` | See reference |
| [ApiEntitiesFeatureFlagUserList](docs/api/api_entities_feature_flag_user_list.html) | `list` | `GET /api/v4/projects/{id}/feature_flags_user_lists` | See reference |
| [ApiEntitiesFeatureFlagUserList](docs/api/api_entities_feature_flag_user_list.html) | `load` | `GET /api/v4/projects/{id}/feature_flags_user_lists/{iid}` | See reference |
| [ApiEntitiesFeatureFlagUserList](docs/api/api_entities_feature_flag_user_list.html) | `update` | `PUT /api/v4/projects/{id}/feature_flags_user_lists/{iid}` | See reference |
| [ApiEntitiesFreezePeriod](docs/api/api_entities_freeze_period.html) | `create` | `POST /api/v4/projects/{id}/freeze_periods` | See reference |
| [ApiEntitiesFreezePeriod](docs/api/api_entities_freeze_period.html) | `list` | `GET /api/v4/projects/{id}/freeze_periods` | See reference |
| [ApiEntitiesFreezePeriod](docs/api/api_entities_freeze_period.html) | `load` | `GET /api/v4/projects/{id}/freeze_periods/{freeze_period_id}` | See reference |
| [ApiEntitiesFreezePeriod](docs/api/api_entities_freeze_period.html) | `update` | `PUT /api/v4/projects/{id}/freeze_periods/{freeze_period_id}` | See reference |
| [ApiEntitiesGitlabSubscription](docs/api/api_entities_gitlab_subscription.html) | `load` | `GET /api/v4/namespaces/{id}/gitlab_subscription` | See reference |
| [ApiEntitiesGoModuleVersion](docs/api/api_entities_go_module_version.html) | `load` | `GET /api/v4/projects/{id}/packages/go/*module_name/@v/{module_version}.info` | See reference |
| [ApiEntitiesGroup](docs/api/api_entities_group.html) | `create` | `POST /api/v4/groups/{id}/archive` | See reference |
| [ApiEntitiesGroup](docs/api/api_entities_group.html) | `create` | `POST /api/v4/groups/{id}/unarchive` | See reference |
| [ApiEntitiesGroup](docs/api/api_entities_group.html) | `create` | `POST /api/v4/groups` | See reference |
| [ApiEntitiesGroup](docs/api/api_entities_group.html) | `list` | `GET /api/v4/groups/{id}/descendant_groups` | See reference |
| [ApiEntitiesGroup](docs/api/api_entities_group.html) | `list` | `GET /api/v4/groups/{id}/subgroups` | See reference |
| [ApiEntitiesGroup](docs/api/api_entities_group.html) | `list` | `GET /api/v4/groups` | See reference |
| [ApiEntitiesGroup](docs/api/api_entities_group.html) | `list` | `GET /api/v4/groups/{id}/groups/shared` | See reference |
| [ApiEntitiesGroup](docs/api/api_entities_group.html) | `list` | `GET /api/v4/groups/{id}/invited_groups` | See reference |
| [ApiEntitiesGroup](docs/api/api_entities_group.html) | `list` | `GET /api/v4/projects/{id}/invited_groups` | See reference |
| [ApiEntitiesGroup](docs/api/api_entities_group.html) | `list` | `GET /api/v4/groups/{id}/transfer_locations` | See reference |
| [ApiEntitiesGroup](docs/api/api_entities_group.html) | `load` | `GET /api/v4/projects/{id}/share_locations` | See reference |
| [ApiEntitiesGroup](docs/api/api_entities_group.html) | `update` | `PUT /api/v4/groups/{id}` | See reference |
| [ApiEntitiesGroupDetail](docs/api/api_entities_group_detail.html) | `create` | `POST /api/v4/groups/{id}/share` | See reference |
| [ApiEntitiesGroupDetail](docs/api/api_entities_group_detail.html) | `create` | `POST /api/v4/groups/{id}/transfer` | See reference |
| [ApiEntitiesGroupDetail](docs/api/api_entities_group_detail.html) | `create` | `POST /api/v4/groups/{id}/projects/{project_id}` | See reference |
| [ApiEntitiesGroupDetail](docs/api/api_entities_group_detail.html) | `create` | `POST /api/v4/groups/{id}/ldap_sync` | See reference |
| [ApiEntitiesGroupDetail](docs/api/api_entities_group_detail.html) | `create` | `POST /api/v4/groups/{id}/restore` | See reference |
| [ApiEntitiesGroupDetail](docs/api/api_entities_group_detail.html) | `load` | `GET /api/v4/groups/{id}` | See reference |
| [ApiEntitiesHook](docs/api/api_entities_hook.html) | `create` | `POST /api/v4/hooks` | See reference |
| [ApiEntitiesHook](docs/api/api_entities_hook.html) | `list` | `GET /api/v4/hooks` | See reference |
| [ApiEntitiesHook](docs/api/api_entities_hook.html) | `load` | `GET /api/v4/hooks/{hook_id}` | See reference |
| [ApiEntitiesHook](docs/api/api_entities_hook.html) | `update` | `PUT /api/v4/hooks/{hook_id}` | See reference |
| [ApiEntitiesIntegration](docs/api/api_entities_integration.html) | `load` | `GET /api/v4/groups/{id}/integrations/{slug}` | See reference |
| [ApiEntitiesIntegration](docs/api/api_entities_integration.html) | `load` | `GET /api/v4/projects/{id}/integrations/{slug}` | See reference |
| [ApiEntitiesIntegration](docs/api/api_entities_integration.html) | `load` | `GET /api/v4/projects/{id}/services/{slug}` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `list` | `GET /api/v4/groups/{id}/integrations` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `list` | `GET /api/v4/projects/{id}/integrations` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `list` | `GET /api/v4/projects/{id}/services` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/groups/{id}/integrations/apple-app-store` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/groups/{id}/integrations/asana` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/groups/{id}/integrations/assembla` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/groups/{id}/integrations/bamboo` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/groups/{id}/integrations/bugzilla` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/groups/{id}/integrations/buildkite` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/groups/{id}/integrations/campfire` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/groups/{id}/integrations/clickup` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/groups/{id}/integrations/confluence` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/groups/{id}/integrations/custom-issue-tracker` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/groups/{id}/integrations/datadog` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/groups/{id}/integrations/diffblue-cover` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/groups/{id}/integrations/discord` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/groups/{id}/integrations/drone-ci` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/groups/{id}/integrations/emails-on-push` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/groups/{id}/integrations/ewm` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/groups/{id}/integrations/external-wiki` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/groups/{id}/integrations/git-guardian` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/groups/{id}/integrations/github` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/groups/{id}/integrations/gitlab-slack-application` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/groups/{id}/integrations/google-cloud-platform-artifact-registry` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/groups/{id}/integrations/google-cloud-platform-workload-identity-federation` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/groups/{id}/integrations/google-play` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/groups/{id}/integrations/hangouts-chat` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/groups/{id}/integrations/harbor` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/groups/{id}/integrations/irker` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/groups/{id}/integrations/jenkins` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/groups/{id}/integrations/jira` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/groups/{id}/integrations/jira-cloud-app` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/groups/{id}/integrations/linear` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/groups/{id}/integrations/matrix` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/groups/{id}/integrations/mattermost` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/groups/{id}/integrations/mattermost-slash-commands` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/groups/{id}/integrations/microsoft-teams` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/groups/{id}/integrations/mock-ci` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/groups/{id}/integrations/mock-monitoring` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/groups/{id}/integrations/packagist` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/groups/{id}/integrations/phorge` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/groups/{id}/integrations/pipelines-email` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/groups/{id}/integrations/pivotaltracker` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/groups/{id}/integrations/pumble` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/groups/{id}/integrations/pushover` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/groups/{id}/integrations/redmine` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/groups/{id}/integrations/slack` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/groups/{id}/integrations/slack-slash-commands` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/groups/{id}/integrations/squash-tm` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/groups/{id}/integrations/teamcity` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/groups/{id}/integrations/telegram` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/groups/{id}/integrations/unify-circuit` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/groups/{id}/integrations/webex-teams` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/groups/{id}/integrations/youtrack` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/groups/{id}/integrations/zentao` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/integrations/apple-app-store` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/integrations/asana` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/integrations/assembla` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/integrations/bamboo` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/integrations/bugzilla` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/integrations/buildkite` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/integrations/campfire` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/integrations/clickup` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/integrations/confluence` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/integrations/custom-issue-tracker` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/integrations/datadog` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/integrations/diffblue-cover` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/integrations/discord` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/integrations/drone-ci` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/integrations/emails-on-push` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/integrations/ewm` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/integrations/external-wiki` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/integrations/git-guardian` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/integrations/github` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/integrations/gitlab-slack-application` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/integrations/google-cloud-platform-artifact-registry` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/integrations/google-cloud-platform-workload-identity-federation` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/integrations/google-play` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/integrations/hangouts-chat` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/integrations/harbor` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/integrations/irker` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/integrations/jenkins` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/integrations/jira` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/integrations/jira-cloud-app` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/integrations/linear` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/integrations/matrix` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/integrations/mattermost` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/integrations/mattermost-slash-commands` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/integrations/microsoft-teams` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/integrations/mock-ci` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/integrations/mock-monitoring` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/integrations/packagist` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/integrations/phorge` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/integrations/pipelines-email` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/integrations/pivotaltracker` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/integrations/pumble` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/integrations/pushover` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/integrations/redmine` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/integrations/slack` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/integrations/slack-slash-commands` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/integrations/squash-tm` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/integrations/teamcity` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/integrations/telegram` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/integrations/unify-circuit` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/integrations/webex-teams` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/integrations/youtrack` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/integrations/zentao` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/services/apple-app-store` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/services/asana` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/services/assembla` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/services/bamboo` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/services/bugzilla` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/services/buildkite` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/services/campfire` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/services/clickup` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/services/confluence` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/services/custom-issue-tracker` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/services/datadog` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/services/diffblue-cover` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/services/discord` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/services/drone-ci` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/services/emails-on-push` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/services/ewm` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/services/external-wiki` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/services/git-guardian` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/services/github` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/services/gitlab-slack-application` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/services/google-cloud-platform-artifact-registry` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/services/google-cloud-platform-workload-identity-federation` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/services/google-play` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/services/hangouts-chat` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/services/harbor` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/services/irker` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/services/jenkins` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/services/jira` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/services/jira-cloud-app` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/services/linear` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/services/matrix` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/services/mattermost` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/services/mattermost-slash-commands` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/services/microsoft-teams` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/services/mock-ci` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/services/mock-monitoring` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/services/packagist` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/services/phorge` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/services/pipelines-email` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/services/pivotaltracker` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/services/pumble` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/services/pushover` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/services/redmine` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/services/slack` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/services/slack-slash-commands` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/services/squash-tm` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/services/teamcity` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/services/telegram` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/services/unify-circuit` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/services/webex-teams` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/services/youtrack` | See reference |
| [ApiEntitiesIntegrationBasic](docs/api/api_entities_integration_basic.html) | `update` | `PUT /api/v4/projects/{id}/services/zentao` | See reference |
| [ApiEntitiesInvitation](docs/api/api_entities_invitation.html) | `create` | `POST /api/v4/groups/{id}/invitations` | See reference |
| [ApiEntitiesInvitation](docs/api/api_entities_invitation.html) | `create` | `POST /api/v4/projects/{id}/invitations` | See reference |
| [ApiEntitiesInvitation](docs/api/api_entities_invitation.html) | `list` | `GET /api/v4/groups/{id}/invitations` | See reference |
| [ApiEntitiesInvitation](docs/api/api_entities_invitation.html) | `list` | `GET /api/v4/projects/{id}/invitations` | See reference |
| [ApiEntitiesInvitation](docs/api/api_entities_invitation.html) | `update` | `PUT /api/v4/groups/{id}/invitations/{email}` | See reference |
| [ApiEntitiesInvitation](docs/api/api_entities_invitation.html) | `update` | `PUT /api/v4/projects/{id}/invitations/{email}` | See reference |
| [ApiEntitiesIssuableTimeStat](docs/api/api_entities_issuable_time_stat.html) | `create` | `POST /api/v4/projects/{id}/issues/{issue_iid}/add_spent_time` | See reference |
| [ApiEntitiesIssuableTimeStat](docs/api/api_entities_issuable_time_stat.html) | `create` | `POST /api/v4/projects/{id}/issues/{issue_iid}/time_estimate` | See reference |
| [ApiEntitiesIssuableTimeStat](docs/api/api_entities_issuable_time_stat.html) | `create` | `POST /api/v4/projects/{id}/merge_requests/{merge_request_iid}/add_spent_time` | See reference |
| [ApiEntitiesIssuableTimeStat](docs/api/api_entities_issuable_time_stat.html) | `create` | `POST /api/v4/projects/{id}/merge_requests/{merge_request_iid}/time_estimate` | See reference |
| [ApiEntitiesIssuableTimeStat](docs/api/api_entities_issuable_time_stat.html) | `create` | `POST /api/v4/projects/{id}/issues/{issue_iid}/reset_spent_time` | See reference |
| [ApiEntitiesIssuableTimeStat](docs/api/api_entities_issuable_time_stat.html) | `create` | `POST /api/v4/projects/{id}/issues/{issue_iid}/reset_time_estimate` | See reference |
| [ApiEntitiesIssuableTimeStat](docs/api/api_entities_issuable_time_stat.html) | `create` | `POST /api/v4/projects/{id}/merge_requests/{merge_request_iid}/reset_spent_time` | See reference |
| [ApiEntitiesIssuableTimeStat](docs/api/api_entities_issuable_time_stat.html) | `create` | `POST /api/v4/projects/{id}/merge_requests/{merge_request_iid}/reset_time_estimate` | See reference |
| [ApiEntitiesIssuableTimeStat](docs/api/api_entities_issuable_time_stat.html) | `load` | `GET /api/v4/projects/{id}/issues/{issue_iid}/time_stats` | See reference |
| [ApiEntitiesIssuableTimeStat](docs/api/api_entities_issuable_time_stat.html) | `load` | `GET /api/v4/projects/{id}/merge_requests/{merge_request_iid}/time_stats` | See reference |
| [ApiEntitiesIssue](docs/api/api_entities_issue.html) | `create` | `POST /api/v4/projects/{id}/issues/{issue_iid}/clone` | See reference |
| [ApiEntitiesIssue](docs/api/api_entities_issue.html) | `create` | `POST /api/v4/projects/{id}/issues/{issue_iid}/move` | See reference |
| [ApiEntitiesIssue](docs/api/api_entities_issue.html) | `create` | `POST /api/v4/projects/{id}/issues` | See reference |
| [ApiEntitiesIssue](docs/api/api_entities_issue.html) | `list` | `GET /api/v4/projects/{id}/issues` | See reference |
| [ApiEntitiesIssue](docs/api/api_entities_issue.html) | `list` | `GET /api/v4/groups/{id}/issues` | See reference |
| [ApiEntitiesIssue](docs/api/api_entities_issue.html) | `list` | `GET /api/v4/issues` | See reference |
| [ApiEntitiesIssue](docs/api/api_entities_issue.html) | `load` | `GET /api/v4/projects/{id}/issues/{issue_iid}` | See reference |
| [ApiEntitiesIssue](docs/api/api_entities_issue.html) | `load` | `GET /api/v4/issues/{id}` | See reference |
| [ApiEntitiesIssue](docs/api/api_entities_issue.html) | `update` | `PUT /api/v4/projects/{id}/issues/{issue_iid}` | See reference |
| [ApiEntitiesIssue](docs/api/api_entities_issue.html) | `update` | `PUT /api/v4/projects/{id}/issues/{issue_iid}/reorder` | See reference |
| [ApiEntitiesIssueLink](docs/api/api_entities_issue_link.html) | `create` | `POST /api/v4/projects/{id}/issues/{issue_iid}/links` | See reference |
| [ApiEntitiesIssueLink](docs/api/api_entities_issue_link.html) | `load` | `GET /api/v4/projects/{id}/issues/{issue_iid}/links/{issue_link_id}` | See reference |
| [ApiEntitiesLicense](docs/api/api_entities_license.html) | `load` | `GET /api/v4/projects/{id}/templates/{type}/{name}` | See reference |
| [ApiEntitiesMarkdown](docs/api/api_entities_markdown.html) | `create` | `POST /api/v4/markdown` | See reference |
| [ApiEntitiesMarkdownUploadAdmin](docs/api/api_entities_markdown_upload_admin.html) | `list` | `GET /api/v4/groups/{id}/uploads` | See reference |
| [ApiEntitiesMarkdownUploadAdmin](docs/api/api_entities_markdown_upload_admin.html) | `list` | `GET /api/v4/projects/{id}/uploads` | See reference |
| [ApiEntitiesMember](docs/api/api_entities_member.html) | `create` | `POST /api/v4/groups/{id}/members/{user_id}/override` | See reference |
| [ApiEntitiesMember](docs/api/api_entities_member.html) | `create` | `POST /api/v4/groups/{id}/members` | See reference |
| [ApiEntitiesMember](docs/api/api_entities_member.html) | `create` | `POST /api/v4/projects/{id}/members` | See reference |
| [ApiEntitiesMember](docs/api/api_entities_member.html) | `list` | `GET /api/v4/groups/{id}/members` | See reference |
| [ApiEntitiesMember](docs/api/api_entities_member.html) | `list` | `GET /api/v4/projects/{id}/members` | See reference |
| [ApiEntitiesMember](docs/api/api_entities_member.html) | `list` | `GET /api/v4/groups/{id}/members/all` | See reference |
| [ApiEntitiesMember](docs/api/api_entities_member.html) | `list` | `GET /api/v4/projects/{id}/members/all` | See reference |
| [ApiEntitiesMember](docs/api/api_entities_member.html) | `list` | `GET /api/v4/groups/{id}/billable_members` | See reference |
| [ApiEntitiesMember](docs/api/api_entities_member.html) | `load` | `GET /api/v4/groups/{id}/members/{user_id}` | See reference |
| [ApiEntitiesMember](docs/api/api_entities_member.html) | `load` | `GET /api/v4/groups/{id}/members/all/{user_id}` | See reference |
| [ApiEntitiesMember](docs/api/api_entities_member.html) | `load` | `GET /api/v4/projects/{id}/members/{user_id}` | See reference |
| [ApiEntitiesMember](docs/api/api_entities_member.html) | `load` | `GET /api/v4/projects/{id}/members/all/{user_id}` | See reference |
| [ApiEntitiesMember](docs/api/api_entities_member.html) | `remove` | `DELETE /api/v4/groups/{id}/members/{user_id}/override` | See reference |
| [ApiEntitiesMember](docs/api/api_entities_member.html) | `update` | `PUT /api/v4/groups/{id}/members/{user_id}` | See reference |
| [ApiEntitiesMember](docs/api/api_entities_member.html) | `update` | `PUT /api/v4/groups/{id}/members/{user_id}/state` | See reference |
| [ApiEntitiesMember](docs/api/api_entities_member.html) | `update` | `PUT /api/v4/projects/{id}/members/{user_id}` | See reference |
| [ApiEntitiesMerge](docs/api/api_entities_merge.html) | `create` | `POST /api/v4/projects/{id}/merge_requests/{merge_request_iid}/cancel_merge_when_pipeline_succeeds` | See reference |
| [ApiEntitiesMerge](docs/api/api_entities_merge.html) | `create` | `POST /api/v4/projects/{id}/merge_requests` | See reference |
| [ApiEntitiesMerge](docs/api/api_entities_merge.html) | `load` | `GET /api/v4/projects/{id}/merge_requests/{merge_request_iid}` | See reference |
| [ApiEntitiesMerge](docs/api/api_entities_merge.html) | `update` | `PUT /api/v4/projects/{id}/merge_requests/{merge_request_iid}/merge` | See reference |
| [ApiEntitiesMerge](docs/api/api_entities_merge.html) | `update` | `PUT /api/v4/projects/{id}/merge_requests/{merge_request_iid}/rebase` | See reference |
| [ApiEntitiesMerge](docs/api/api_entities_merge.html) | `update` | `PUT /api/v4/projects/{id}/merge_requests/{merge_request_iid}` | See reference |
| [ApiEntitiesMergeRequestApproval](docs/api/api_entities_merge_request_approval.html) | `create` | `POST /api/v4/projects/{id}/merge_requests/{merge_request_iid}/approve` | See reference |
| [ApiEntitiesMergeRequestApproval](docs/api/api_entities_merge_request_approval.html) | `create` | `POST /api/v4/projects/{id}/merge_requests/{merge_request_iid}/unapprove` | See reference |
| [ApiEntitiesMergeRequestApproval](docs/api/api_entities_merge_request_approval.html) | `load` | `GET /api/v4/projects/{id}/merge_requests/{merge_request_iid}/approvals` | See reference |
| [ApiEntitiesMergeRequestBasic](docs/api/api_entities_merge_request_basic.html) | `list` | `GET /api/v4/projects/{id}/deployments/{deployment_id}/merge_requests` | See reference |
| [ApiEntitiesMergeRequestBasic](docs/api/api_entities_merge_request_basic.html) | `list` | `GET /api/v4/projects/{id}/repository/commits/{sha}/merge_requests` | See reference |
| [ApiEntitiesMergeRequestBasic](docs/api/api_entities_merge_request_basic.html) | `load` | `GET /api/v4/groups/{id}/merge_requests` | See reference |
| [ApiEntitiesMergeRequestBasic](docs/api/api_entities_merge_request_basic.html) | `load` | `GET /api/v4/projects/{id}/merge_requests` | See reference |
| [ApiEntitiesMergeRequestBasic](docs/api/api_entities_merge_request_basic.html) | `load` | `GET /api/v4/merge_requests` | See reference |
| [ApiEntitiesMergeRequestBasic](docs/api/api_entities_merge_request_basic.html) | `load` | `GET /api/v4/projects/{id}/issues/{issue_iid}/closed_by` | See reference |
| [ApiEntitiesMergeRequestBasic](docs/api/api_entities_merge_request_basic.html) | `load` | `GET /api/v4/projects/{id}/issues/{issue_iid}/related_merge_requests` | See reference |
| [ApiEntitiesMergeRequestChange](docs/api/api_entities_merge_request_change.html) | `load` | `GET /api/v4/projects/{id}/merge_requests/{merge_request_iid}/changes` | See reference |
| [ApiEntitiesMergeRequestDiff](docs/api/api_entities_merge_request_diff.html) | `list` | `GET /api/v4/projects/{id}/merge_requests/{merge_request_iid}/versions` | See reference |
| [ApiEntitiesMergeRequestDiffFull](docs/api/api_entities_merge_request_diff_full.html) | `load` | `GET /api/v4/projects/{id}/merge_requests/{merge_request_iid}/versions/{version_id}` | See reference |
| [ApiEntitiesMergeRequestReviewer](docs/api/api_entities_merge_request_reviewer.html) | `load` | `GET /api/v4/projects/{id}/merge_requests/{merge_request_iid}/reviewers` | See reference |
| [ApiEntitiesMetricImage](docs/api/api_entities_metric_image.html) | `create` | `POST /api/v4/projects/{id}/alert_management_alerts/{alert_iid}/metric_images` | See reference |
| [ApiEntitiesMetricImage](docs/api/api_entities_metric_image.html) | `list` | `GET /api/v4/projects/{id}/alert_management_alerts/{alert_iid}/metric_images` | See reference |
| [ApiEntitiesMetricImage](docs/api/api_entities_metric_image.html) | `update` | `PUT /api/v4/projects/{id}/alert_management_alerts/{alert_iid}/metric_images/{metric_image_id}` | See reference |
| [ApiEntitiesMrNote](docs/api/api_entities_mr_note.html) | `load` | `GET /api/v4/projects/{id}/merge_requests/{merge_request_iid}/closes_issues` | See reference |
| [ApiEntitiesNamespace](docs/api/api_entities_namespace.html) | `list` | `GET /api/v4/namespaces` | See reference |
| [ApiEntitiesNamespace](docs/api/api_entities_namespace.html) | `load` | `GET /api/v4/namespaces/{id}` | See reference |
| [ApiEntitiesNamespace](docs/api/api_entities_namespace.html) | `update` | `PUT /api/v4/namespaces/{id}` | See reference |
| [ApiEntitiesNamespaceExistence](docs/api/api_entities_namespace_existence.html) | `list` | `GET /api/v4/namespaces/{id}/exists` | See reference |
| [ApiEntitiesNamespacesStorageLimitExclusion](docs/api/api_entities_namespaces_storage_limit_exclusion.html) | `create` | `POST /api/v4/namespaces/{id}/storage/limit_exclusion` | See reference |
| [ApiEntitiesNamespacesStorageLimitExclusion](docs/api/api_entities_namespaces_storage_limit_exclusion.html) | `load` | `GET /api/v4/namespaces/storage/limit_exclusions` | See reference |
| [ApiEntitiesNpmPackage](docs/api/api_entities_npm_package.html) | `load` | `GET /api/v4/groups/{id}/-/packages/npm/*package_name` | See reference |
| [ApiEntitiesNpmPackage](docs/api/api_entities_npm_package.html) | `load` | `GET /api/v4/projects/{id}/packages/npm/*package_name` | See reference |
| [ApiEntitiesNpmPackage](docs/api/api_entities_npm_package.html) | `load` | `GET /api/v4/packages/npm/*package_name` | See reference |
| [ApiEntitiesNpmPackageTag](docs/api/api_entities_npm_package_tag.html) | `load` | `GET /api/v4/groups/{id}/-/packages/npm/-/package/*package_name/dist-tags` | See reference |
| [ApiEntitiesNpmPackageTag](docs/api/api_entities_npm_package_tag.html) | `load` | `GET /api/v4/projects/{id}/packages/npm/-/package/*package_name/dist-tags` | See reference |
| [ApiEntitiesNpmPackageTag](docs/api/api_entities_npm_package_tag.html) | `load` | `GET /api/v4/packages/npm/-/package/*package_name/dist-tags` | See reference |
| [ApiEntitiesNugetPackagesVersion](docs/api/api_entities_nuget_packages_version.html) | `list` | `GET /api/v4/projects/{id}/packages/nuget/download/*package_name/index` | See reference |
| [ApiEntitiesNugetSearchResult](docs/api/api_entities_nuget_search_result.html) | `list` | `GET /api/v4/groups/{id}/-/packages/nuget/query` | See reference |
| [ApiEntitiesNugetSearchResult](docs/api/api_entities_nuget_search_result.html) | `list` | `GET /api/v4/projects/{id}/packages/nuget/query` | See reference |
| [ApiEntitiesNugetServiceIndex](docs/api/api_entities_nuget_service_index.html) | `list` | `GET /api/v4/groups/{id}/-/packages/nuget/index` | See reference |
| [ApiEntitiesNugetServiceIndex](docs/api/api_entities_nuget_service_index.html) | `list` | `GET /api/v4/projects/{id}/packages/nuget/index` | See reference |
| [ApiEntitiesOrganizationsOrganization](docs/api/api_entities_organizations_organization.html) | `create` | `POST /api/v4/organizations` | See reference |
| [ApiEntitiesPackage](docs/api/api_entities_package.html) | `list` | `GET /api/v4/groups/{id}/packages` | See reference |
| [ApiEntitiesPackage](docs/api/api_entities_package.html) | `list` | `GET /api/v4/projects/{id}/packages` | See reference |
| [ApiEntitiesPackage](docs/api/api_entities_package.html) | `load` | `GET /api/v4/projects/{id}/packages/{package_id}` | See reference |
| [ApiEntitiesPackageFile](docs/api/api_entities_package_file.html) | `list` | `GET /api/v4/projects/{id}/packages/{package_id}/package_files` | See reference |
| [ApiEntitiesPackagePipeline](docs/api/api_entities_package_pipeline.html) | `load` | `GET /api/v4/projects/{id}/packages/{package_id}/pipelines` | See reference |
| [ApiEntitiesPackagesConanFilesList](docs/api/api_entities_packages_conan_files_list.html) | `load` | `GET /api/v4/projects/{id}/packages/conan/v2/conans/{package_name}/{package_version}/{package_username}/{package_channel}/revisions/{recipe_revision}/packages/{conan_package_reference}/revisions/{package_revision}/files` | See reference |
| [ApiEntitiesPackagesConanFilesList](docs/api/api_entities_packages_conan_files_list.html) | `load` | `GET /api/v4/projects/{id}/packages/conan/v2/conans/{package_name}/{package_version}/{package_username}/{package_channel}/revisions/{recipe_revision}/files` | See reference |
| [ApiEntitiesPackagesConanPackageManifest](docs/api/api_entities_packages_conan_package_manifest.html) | `load` | `GET /api/v4/projects/{id}/packages/conan/v1/conans/{package_name}/{package_version}/{package_username}/{package_channel}/packages/{conan_package_reference}/digest` | See reference |
| [ApiEntitiesPackagesConanPackageManifest](docs/api/api_entities_packages_conan_package_manifest.html) | `load` | `GET /api/v4/projects/{id}/packages/conan/v1/conans/{package_name}/{package_version}/{package_username}/{package_channel}/packages/{conan_package_reference}/download_urls` | See reference |
| [ApiEntitiesPackagesConanPackageManifest](docs/api/api_entities_packages_conan_package_manifest.html) | `load` | `GET /api/v4/packages/conan/v1/conans/{package_name}/{package_version}/{package_username}/{package_channel}/packages/{conan_package_reference}/digest` | See reference |
| [ApiEntitiesPackagesConanPackageManifest](docs/api/api_entities_packages_conan_package_manifest.html) | `load` | `GET /api/v4/packages/conan/v1/conans/{package_name}/{package_version}/{package_username}/{package_channel}/packages/{conan_package_reference}/download_urls` | See reference |
| [ApiEntitiesPackagesConanPackageRevision](docs/api/api_entities_packages_conan_package_revision.html) | `list` | `GET /api/v4/projects/{id}/packages/conan/v2/conans/{package_name}/{package_version}/{package_username}/{package_channel}/revisions/{recipe_revision}/packages/{conan_package_reference}/revisions` | See reference |
| [ApiEntitiesPackagesConanPackageSnapshot](docs/api/api_entities_packages_conan_package_snapshot.html) | `load` | `GET /api/v4/projects/{id}/packages/conan/v1/conans/{package_name}/{package_version}/{package_username}/{package_channel}/packages/{conan_package_reference}` | See reference |
| [ApiEntitiesPackagesConanPackageSnapshot](docs/api/api_entities_packages_conan_package_snapshot.html) | `load` | `GET /api/v4/packages/conan/v1/conans/{package_name}/{package_version}/{package_username}/{package_channel}/packages/{conan_package_reference}` | See reference |
| [ApiEntitiesPackagesConanRecipeManifest](docs/api/api_entities_packages_conan_recipe_manifest.html) | `load` | `GET /api/v4/projects/{id}/packages/conan/v1/conans/{package_name}/{package_version}/{package_username}/{package_channel}/digest` | See reference |
| [ApiEntitiesPackagesConanRecipeManifest](docs/api/api_entities_packages_conan_recipe_manifest.html) | `load` | `GET /api/v4/projects/{id}/packages/conan/v1/conans/{package_name}/{package_version}/{package_username}/{package_channel}/download_urls` | See reference |
| [ApiEntitiesPackagesConanRecipeManifest](docs/api/api_entities_packages_conan_recipe_manifest.html) | `load` | `GET /api/v4/packages/conan/v1/conans/{package_name}/{package_version}/{package_username}/{package_channel}/digest` | See reference |
| [ApiEntitiesPackagesConanRecipeManifest](docs/api/api_entities_packages_conan_recipe_manifest.html) | `load` | `GET /api/v4/packages/conan/v1/conans/{package_name}/{package_version}/{package_username}/{package_channel}/download_urls` | See reference |
| [ApiEntitiesPackagesConanRecipeRevision](docs/api/api_entities_packages_conan_recipe_revision.html) | `list` | `GET /api/v4/projects/{id}/packages/conan/v2/conans/{package_name}/{package_version}/{package_username}/{package_channel}/revisions` | See reference |
| [ApiEntitiesPackagesConanRecipeSnapshot](docs/api/api_entities_packages_conan_recipe_snapshot.html) | `load` | `GET /api/v4/projects/{id}/packages/conan/v1/conans/{package_name}/{package_version}/{package_username}/{package_channel}` | See reference |
| [ApiEntitiesPackagesConanRecipeSnapshot](docs/api/api_entities_packages_conan_recipe_snapshot.html) | `load` | `GET /api/v4/packages/conan/v1/conans/{package_name}/{package_version}/{package_username}/{package_channel}` | See reference |
| [ApiEntitiesPackagesConanRevision](docs/api/api_entities_packages_conan_revision.html) | `load` | `GET /api/v4/projects/{id}/packages/conan/v2/conans/{package_name}/{package_version}/{package_username}/{package_channel}/revisions/{recipe_revision}/packages/{conan_package_reference}/latest` | See reference |
| [ApiEntitiesPackagesConanRevision](docs/api/api_entities_packages_conan_revision.html) | `load` | `GET /api/v4/projects/{id}/packages/conan/v2/conans/{package_name}/{package_version}/{package_username}/{package_channel}/latest` | See reference |
| [ApiEntitiesPackagesConanUploadUrl](docs/api/api_entities_packages_conan_upload_url.html) | `create` | `POST /api/v4/projects/{id}/packages/conan/v1/conans/{package_name}/{package_version}/{package_username}/{package_channel}/packages/{conan_package_reference}/upload_urls` | See reference |
| [ApiEntitiesPackagesConanUploadUrl](docs/api/api_entities_packages_conan_upload_url.html) | `create` | `POST /api/v4/packages/conan/v1/conans/{package_name}/{package_version}/{package_username}/{package_channel}/packages/{conan_package_reference}/upload_urls` | See reference |
| [ApiEntitiesPackagesConanUploadUrl](docs/api/api_entities_packages_conan_upload_url.html) | `create` | `POST /api/v4/projects/{id}/packages/conan/v1/conans/{package_name}/{package_version}/{package_username}/{package_channel}/upload_urls` | See reference |
| [ApiEntitiesPackagesConanUploadUrl](docs/api/api_entities_packages_conan_upload_url.html) | `create` | `POST /api/v4/packages/conan/v1/conans/{package_name}/{package_version}/{package_username}/{package_channel}/upload_urls` | See reference |
| [ApiEntitiesPackagesDebianDistribution](docs/api/api_entities_packages_debian_distribution.html) | `create` | `POST /api/v4/groups/{id}/-/debian_distributions` | See reference |
| [ApiEntitiesPackagesDebianDistribution](docs/api/api_entities_packages_debian_distribution.html) | `create` | `POST /api/v4/projects/{id}/debian_distributions` | See reference |
| [ApiEntitiesPackagesDebianDistribution](docs/api/api_entities_packages_debian_distribution.html) | `list` | `GET /api/v4/groups/{id}/-/debian_distributions` | See reference |
| [ApiEntitiesPackagesDebianDistribution](docs/api/api_entities_packages_debian_distribution.html) | `list` | `GET /api/v4/projects/{id}/debian_distributions` | See reference |
| [ApiEntitiesPackagesDebianDistribution](docs/api/api_entities_packages_debian_distribution.html) | `list` | `GET /api/v4/groups/{id}/-/debian_distributions/{codename}/key.asc` | See reference |
| [ApiEntitiesPackagesDebianDistribution](docs/api/api_entities_packages_debian_distribution.html) | `list` | `GET /api/v4/projects/{id}/debian_distributions/{codename}/key.asc` | See reference |
| [ApiEntitiesPackagesDebianDistribution](docs/api/api_entities_packages_debian_distribution.html) | `load` | `GET /api/v4/groups/{id}/-/debian_distributions/{codename}` | See reference |
| [ApiEntitiesPackagesDebianDistribution](docs/api/api_entities_packages_debian_distribution.html) | `load` | `GET /api/v4/projects/{id}/debian_distributions/{codename}` | See reference |
| [ApiEntitiesPackagesDebianDistribution](docs/api/api_entities_packages_debian_distribution.html) | `update` | `PUT /api/v4/groups/{id}/-/debian_distributions/{codename}` | See reference |
| [ApiEntitiesPackagesDebianDistribution](docs/api/api_entities_packages_debian_distribution.html) | `update` | `PUT /api/v4/projects/{id}/debian_distributions/{codename}` | See reference |
| [ApiEntitiesPagesDomain](docs/api/api_entities_pages_domain.html) | `create` | `POST /api/v4/projects/{id}/pages/domains` | See reference |
| [ApiEntitiesPagesDomain](docs/api/api_entities_pages_domain.html) | `list` | `GET /api/v4/projects/{id}/pages/domains` | See reference |
| [ApiEntitiesPagesDomain](docs/api/api_entities_pages_domain.html) | `load` | `GET /api/v4/projects/{id}/pages/domains/{domain}` | See reference |
| [ApiEntitiesPagesDomain](docs/api/api_entities_pages_domain.html) | `update` | `PUT /api/v4/projects/{id}/pages/domains/{domain}/verify` | See reference |
| [ApiEntitiesPagesDomainBasic](docs/api/api_entities_pages_domain_basic.html) | `load` | `GET /api/v4/pages/domains` | See reference |
| [ApiEntitiesPersonalAccessToken](docs/api/api_entities_personal_access_token.html) | `list` | `GET /api/v4/personal_access_tokens/self/associations` | See reference |
| [ApiEntitiesPersonalAccessTokenWithLastUsedIp](docs/api/api_entities_personal_access_token_with_last_used_ip.html) | `list` | `GET /api/v4/personal_access_tokens` | See reference |
| [ApiEntitiesPersonalAccessTokenWithLastUsedIp](docs/api/api_entities_personal_access_token_with_last_used_ip.html) | `list` | `GET /api/v4/personal_access_tokens/self` | See reference |
| [ApiEntitiesPersonalAccessTokenWithLastUsedIp](docs/api/api_entities_personal_access_token_with_last_used_ip.html) | `load` | `GET /api/v4/personal_access_tokens/{id}` | See reference |
| [ApiEntitiesPersonalAccessTokenWithToken](docs/api/api_entities_personal_access_token_with_token.html) | `create` | `POST /api/v4/personal_access_tokens/{id}/rotate` | See reference |
| [ApiEntitiesPersonalAccessTokenWithToken](docs/api/api_entities_personal_access_token_with_token.html) | `create` | `POST /api/v4/personal_access_tokens/self/rotate` | See reference |
| [ApiEntitiesPersonalSnippet](docs/api/api_entities_personal_snippet.html) | `create` | `POST /api/v4/snippets` | See reference |
| [ApiEntitiesPersonalSnippet](docs/api/api_entities_personal_snippet.html) | `list` | `GET /api/v4/snippets/public` | See reference |
| [ApiEntitiesPersonalSnippet](docs/api/api_entities_personal_snippet.html) | `load` | `GET /api/v4/snippets/{id}` | See reference |
| [ApiEntitiesPersonalSnippet](docs/api/api_entities_personal_snippet.html) | `update` | `PUT /api/v4/snippets/{id}` | See reference |
| [ApiEntitiesPlanLimit](docs/api/api_entities_plan_limit.html) | `load` | `GET /api/v4/application/plan_limits` | See reference |
| [ApiEntitiesPlanLimit](docs/api/api_entities_plan_limit.html) | `update` | `PUT /api/v4/application/plan_limits` | See reference |
| [ApiEntitiesProject](docs/api/api_entities_project.html) | `create` | `POST /api/v4/projects/{id}/fork/{forked_from_id}` | See reference |
| [ApiEntitiesProject](docs/api/api_entities_project.html) | `create` | `POST /api/v4/projects/{id}/fork` | See reference |
| [ApiEntitiesProject](docs/api/api_entities_project.html) | `create` | `POST /api/v4/projects/user/{user_id}` | See reference |
| [ApiEntitiesProject](docs/api/api_entities_project.html) | `create` | `POST /api/v4/projects` | See reference |
| [ApiEntitiesProject](docs/api/api_entities_project.html) | `create` | `POST /api/v4/projects/{id}/archive` | See reference |
| [ApiEntitiesProject](docs/api/api_entities_project.html) | `create` | `POST /api/v4/projects/{id}/restore` | See reference |
| [ApiEntitiesProject](docs/api/api_entities_project.html) | `create` | `POST /api/v4/projects/{id}/star` | See reference |
| [ApiEntitiesProject](docs/api/api_entities_project.html) | `create` | `POST /api/v4/projects/{id}/unarchive` | See reference |
| [ApiEntitiesProject](docs/api/api_entities_project.html) | `create` | `POST /api/v4/projects/{id}/unstar` | See reference |
| [ApiEntitiesProject](docs/api/api_entities_project.html) | `list` | `GET /api/v4/projects/{id}/forks` | See reference |
| [ApiEntitiesProject](docs/api/api_entities_project.html) | `list` | `GET /api/v4/groups/{id}/projects` | See reference |
| [ApiEntitiesProject](docs/api/api_entities_project.html) | `list` | `GET /api/v4/groups/{id}/projects/shared` | See reference |
| [ApiEntitiesProject](docs/api/api_entities_project.html) | `update` | `PUT /api/v4/projects/{id}` | See reference |
| [ApiEntitiesProject](docs/api/api_entities_project.html) | `update` | `PUT /api/v4/projects/{id}/transfer` | See reference |
| [ApiEntitiesProjectDailyStatistic](docs/api/api_entities_project_daily_statistic.html) | `load` | `GET /api/v4/projects/{id}/statistics` | See reference |
| [ApiEntitiesProjectExportStatus](docs/api/api_entities_project_export_status.html) | `load` | `GET /api/v4/projects/{id}/export` | See reference |
| [ApiEntitiesProjectGroupLink](docs/api/api_entities_project_group_link.html) | `create` | `POST /api/v4/projects/{id}/share` | See reference |
| [ApiEntitiesProjectHook](docs/api/api_entities_project_hook.html) | `create` | `POST /api/v4/projects/{id}/hooks` | See reference |
| [ApiEntitiesProjectHook](docs/api/api_entities_project_hook.html) | `list` | `GET /api/v4/projects/{id}/hooks` | See reference |
| [ApiEntitiesProjectHook](docs/api/api_entities_project_hook.html) | `load` | `GET /api/v4/projects/{id}/hooks/{hook_id}` | See reference |
| [ApiEntitiesProjectHook](docs/api/api_entities_project_hook.html) | `update` | `PUT /api/v4/projects/{id}/hooks/{hook_id}` | See reference |
| [ApiEntitiesProjectImportStatus](docs/api/api_entities_project_import_status.html) | `create` | `POST /api/v4/projects/import` | See reference |
| [ApiEntitiesProjectImportStatus](docs/api/api_entities_project_import_status.html) | `create` | `POST /api/v4/projects/remote-import-s3` | See reference |
| [ApiEntitiesProjectImportStatus](docs/api/api_entities_project_import_status.html) | `create` | `POST /api/v4/projects/remote-import` | See reference |
| [ApiEntitiesProjectImportStatus](docs/api/api_entities_project_import_status.html) | `list` | `GET /api/v4/projects/{id}/import` | See reference |
| [ApiEntitiesProjectImportStatus](docs/api/api_entities_project_import_status.html) | `list` | `GET /api/v4/projects/{id}/relation-imports` | See reference |
| [ApiEntitiesProjectJobTokenScope](docs/api/api_entities_project_job_token_scope.html) | `load` | `GET /api/v4/projects/{id}/job_token_scope` | See reference |
| [ApiEntitiesProjectRepositoryStorage](docs/api/api_entities_project_repository_storage.html) | `load` | `GET /api/v4/projects/{id}/storage` | See reference |
| [ApiEntitiesProjectSnippet](docs/api/api_entities_project_snippet.html) | `create` | `POST /api/v4/projects/{id}/snippets` | See reference |
| [ApiEntitiesProjectSnippet](docs/api/api_entities_project_snippet.html) | `list` | `GET /api/v4/projects/{id}/snippets/{snippet_id}/files/{ref}/{file_path}/raw` | See reference |
| [ApiEntitiesProjectSnippet](docs/api/api_entities_project_snippet.html) | `list` | `GET /api/v4/projects/{id}/snippets` | See reference |
| [ApiEntitiesProjectSnippet](docs/api/api_entities_project_snippet.html) | `list` | `GET /api/v4/projects/{id}/snippets/{snippet_id}/raw` | See reference |
| [ApiEntitiesProjectSnippet](docs/api/api_entities_project_snippet.html) | `load` | `GET /api/v4/projects/{id}/snippets/{snippet_id}` | See reference |
| [ApiEntitiesProjectSnippet](docs/api/api_entities_project_snippet.html) | `update` | `PUT /api/v4/projects/{id}/snippets/{snippet_id}` | See reference |
| [ApiEntitiesProjectUpload](docs/api/api_entities_project_upload.html) | `create` | `POST /api/v4/projects/{id}/uploads` | See reference |
| [ApiEntitiesProjectWithAccess](docs/api/api_entities_project_with_access.html) | `create` | `POST /api/v4/projects/{id}/housekeeping` | See reference |
| [ApiEntitiesProjectWithAccess](docs/api/api_entities_project_with_access.html) | `create` | `POST /api/v4/projects/{id}/create_ci_config` | See reference |
| [ApiEntitiesProjectWithAccess](docs/api/api_entities_project_with_access.html) | `create` | `POST /api/v4/projects/{id}/repository_size` | See reference |
| [ApiEntitiesProjectWithAccess](docs/api/api_entities_project_with_access.html) | `load` | `GET /api/v4/projects/{id}` | See reference |
| [ApiEntitiesProjectsContainerRegistryProtectionRule](docs/api/api_entities_projects_container_registry_protection_rule.html) | `create` | `POST /api/v4/projects/{id}/registry/protection/repository/rules` | See reference |
| [ApiEntitiesProjectsContainerRegistryProtectionRule](docs/api/api_entities_projects_container_registry_protection_rule.html) | `list` | `GET /api/v4/projects/{id}/registry/protection/repository/rules` | See reference |
| [ApiEntitiesProjectsContainerRegistryProtectionRule](docs/api/api_entities_projects_container_registry_protection_rule.html) | `update` | `PATCH /api/v4/projects/{id}/registry/protection/repository/rules/{protection_rule_id}` | See reference |
| [ApiEntitiesProjectsPackagesProtectionRule](docs/api/api_entities_projects_packages_protection_rule.html) | `create` | `POST /api/v4/projects/{id}/packages/protection/rules` | See reference |
| [ApiEntitiesProjectsPackagesProtectionRule](docs/api/api_entities_projects_packages_protection_rule.html) | `list` | `GET /api/v4/projects/{id}/packages/protection/rules` | See reference |
| [ApiEntitiesProjectsPackagesProtectionRule](docs/api/api_entities_projects_packages_protection_rule.html) | `update` | `PATCH /api/v4/projects/{id}/packages/protection/rules/{package_protection_rule_id}` | See reference |
| [ApiEntitiesProjectsTopic](docs/api/api_entities_projects_topic.html) | `create` | `POST /api/v4/topics` | See reference |
| [ApiEntitiesProjectsTopic](docs/api/api_entities_projects_topic.html) | `create` | `POST /api/v4/topics/merge` | See reference |
| [ApiEntitiesProjectsTopic](docs/api/api_entities_projects_topic.html) | `load` | `GET /api/v4/topics` | See reference |
| [ApiEntitiesProjectsTopic](docs/api/api_entities_projects_topic.html) | `load` | `GET /api/v4/topics/{id}` | See reference |
| [ApiEntitiesProjectsTopic](docs/api/api_entities_projects_topic.html) | `update` | `PUT /api/v4/topics/{id}` | See reference |
| [ApiEntitiesProtectedBranch](docs/api/api_entities_protected_branch.html) | `create` | `POST /api/v4/projects/{id}/protected_branches` | See reference |
| [ApiEntitiesProtectedBranch](docs/api/api_entities_protected_branch.html) | `list` | `GET /api/v4/projects/{id}/protected_branches` | See reference |
| [ApiEntitiesProtectedBranch](docs/api/api_entities_protected_branch.html) | `load` | `GET /api/v4/projects/{id}/protected_branches/{name}` | See reference |
| [ApiEntitiesProtectedBranch](docs/api/api_entities_protected_branch.html) | `update` | `PATCH /api/v4/projects/{id}/protected_branches/{name}` | See reference |
| [ApiEntitiesProtectedTag](docs/api/api_entities_protected_tag.html) | `create` | `POST /api/v4/projects/{id}/protected_tags` | See reference |
| [ApiEntitiesProtectedTag](docs/api/api_entities_protected_tag.html) | `list` | `GET /api/v4/projects/{id}/protected_tags` | See reference |
| [ApiEntitiesProtectedTag](docs/api/api_entities_protected_tag.html) | `load` | `GET /api/v4/projects/{id}/protected_tags/{name}` | See reference |
| [ApiEntitiesPublicGroupDetail](docs/api/api_entities_public_group_detail.html) | `list` | `GET /api/v4/projects/{id}/groups` | See reference |
| [ApiEntitiesPublicGroupDetail](docs/api/api_entities_public_group_detail.html) | `list` | `GET /api/v4/projects/{id}/transfer_locations` | See reference |
| [ApiEntitiesRelatedIssue](docs/api/api_entities_related_issue.html) | `list` | `GET /api/v4/projects/{id}/issues/{issue_iid}/links` | See reference |
| [ApiEntitiesRelationImportTracker](docs/api/api_entities_relation_import_tracker.html) | `create` | `POST /api/v4/projects/import-relation` | See reference |
| [ApiEntitiesRelease](docs/api/api_entities_release.html) | `create` | `POST /api/v4/projects/{id}/releases` | See reference |
| [ApiEntitiesRelease](docs/api/api_entities_release.html) | `create` | `POST /api/v4/projects/{id}/releases/{tag_name}/evidence` | See reference |
| [ApiEntitiesRelease](docs/api/api_entities_release.html) | `list` | `GET /api/v4/projects/{id}/releases` | See reference |
| [ApiEntitiesRelease](docs/api/api_entities_release.html) | `list` | `GET /api/v4/groups/{id}/releases` | See reference |
| [ApiEntitiesRelease](docs/api/api_entities_release.html) | `load` | `GET /api/v4/projects/{id}/releases/{tag_name}` | See reference |
| [ApiEntitiesRelease](docs/api/api_entities_release.html) | `update` | `PUT /api/v4/projects/{id}/releases/{tag_name}` | See reference |
| [ApiEntitiesReleasesLink](docs/api/api_entities_releases_link.html) | `create` | `POST /api/v4/projects/{id}/releases/{tag_name}/assets/links` | See reference |
| [ApiEntitiesReleasesLink](docs/api/api_entities_releases_link.html) | `list` | `GET /api/v4/projects/{id}/releases/{tag_name}/assets/links` | See reference |
| [ApiEntitiesReleasesLink](docs/api/api_entities_releases_link.html) | `load` | `GET /api/v4/projects/{id}/releases/{tag_name}/assets/links/{link_id}` | See reference |
| [ApiEntitiesReleasesLink](docs/api/api_entities_releases_link.html) | `update` | `PUT /api/v4/projects/{id}/releases/{tag_name}/assets/links/{link_id}` | See reference |
| [ApiEntitiesRemoteMirror](docs/api/api_entities_remote_mirror.html) | `create` | `POST /api/v4/projects/{id}/remote_mirrors` | See reference |
| [ApiEntitiesRemoteMirror](docs/api/api_entities_remote_mirror.html) | `create` | `POST /api/v4/projects/{id}/remote_mirrors/{mirror_id}/sync` | See reference |
| [ApiEntitiesRemoteMirror](docs/api/api_entities_remote_mirror.html) | `list` | `GET /api/v4/projects/{id}/remote_mirrors` | See reference |
| [ApiEntitiesRemoteMirror](docs/api/api_entities_remote_mirror.html) | `load` | `GET /api/v4/projects/{id}/remote_mirrors/{mirror_id}` | See reference |
| [ApiEntitiesRemoteMirror](docs/api/api_entities_remote_mirror.html) | `update` | `PUT /api/v4/projects/{id}/remote_mirrors/{mirror_id}` | See reference |
| [ApiEntitiesRepositoryHealth](docs/api/api_entities_repository_health.html) | `load` | `GET /api/v4/projects/{id}/repository/health` | See reference |
| [ApiEntitiesResourceAccessTokenWithToken](docs/api/api_entities_resource_access_token_with_token.html) | `create` | `POST /api/v4/groups/{id}/access_tokens/self/rotate` | See reference |
| [ApiEntitiesResourceAccessTokenWithToken](docs/api/api_entities_resource_access_token_with_token.html) | `create` | `POST /api/v4/projects/{id}/access_tokens/self/rotate` | See reference |
| [ApiEntitiesResourceMilestoneEvent](docs/api/api_entities_resource_milestone_event.html) | `list` | `GET /api/v4/projects/{id}/issues/{eventable_id}/resource_milestone_events` | See reference |
| [ApiEntitiesResourceMilestoneEvent](docs/api/api_entities_resource_milestone_event.html) | `list` | `GET /api/v4/projects/{id}/merge_requests/{eventable_id}/resource_milestone_events` | See reference |
| [ApiEntitiesResourceMilestoneEvent](docs/api/api_entities_resource_milestone_event.html) | `load` | `GET /api/v4/projects/{id}/issues/{eventable_id}/resource_milestone_events/{event_id}` | See reference |
| [ApiEntitiesResourceMilestoneEvent](docs/api/api_entities_resource_milestone_event.html) | `load` | `GET /api/v4/projects/{id}/merge_requests/{eventable_id}/resource_milestone_events/{event_id}` | See reference |
| [ApiEntitiesSnippet](docs/api/api_entities_snippet.html) | `list` | `GET /api/v4/snippets/all` | See reference |
| [ApiEntitiesSnippet](docs/api/api_entities_snippet.html) | `list` | `GET /api/v4/snippets` | See reference |
| [ApiEntitiesSshKeyWithUser](docs/api/api_entities_ssh_key_with_user.html) | `load` | `GET /api/v4/keys/{id}` | See reference |
| [ApiEntitiesSuggestion](docs/api/api_entities_suggestion.html) | `update` | `PUT /api/v4/suggestions/{id}/apply` | See reference |
| [ApiEntitiesSuggestion](docs/api/api_entities_suggestion.html) | `update` | `PUT /api/v4/suggestions/batch_apply` | See reference |
| [ApiEntitiesSystemBroadcastMessage](docs/api/api_entities_system_broadcast_message.html) | `create` | `POST /api/v4/broadcast_messages` | See reference |
| [ApiEntitiesSystemBroadcastMessage](docs/api/api_entities_system_broadcast_message.html) | `load` | `GET /api/v4/broadcast_messages` | See reference |
| [ApiEntitiesSystemBroadcastMessage](docs/api/api_entities_system_broadcast_message.html) | `load` | `GET /api/v4/broadcast_messages/{id}` | See reference |
| [ApiEntitiesSystemBroadcastMessage](docs/api/api_entities_system_broadcast_message.html) | `remove` | `DELETE /api/v4/broadcast_messages/{id}` | See reference |
| [ApiEntitiesSystemBroadcastMessage](docs/api/api_entities_system_broadcast_message.html) | `update` | `PUT /api/v4/broadcast_messages/{id}` | See reference |
| [ApiEntitiesTag](docs/api/api_entities_tag.html) | `create` | `POST /api/v4/projects/{id}/repository/tags` | See reference |
| [ApiEntitiesTag](docs/api/api_entities_tag.html) | `list` | `GET /api/v4/projects/{id}/repository/tags` | See reference |
| [ApiEntitiesTag](docs/api/api_entities_tag.html) | `load` | `GET /api/v4/projects/{id}/repository/tags/{tag_name}` | See reference |
| [ApiEntitiesTagSignature](docs/api/api_entities_tag_signature.html) | `load` | `GET /api/v4/projects/{id}/repository/tags/{tag_name}/signature` | See reference |
| [ApiEntitiesTemplatesList](docs/api/api_entities_templates_list.html) | `load` | `GET /api/v4/projects/{id}/templates/{type}` | See reference |
| [ApiEntitiesTerraformModuleVersion](docs/api/api_entities_terraform_module_version.html) | `list` | `GET /api/v4/packages/terraform/modules/v1/{module_namespace}/{module_name}/{module_system}/versions` | See reference |
| [ApiEntitiesTerraformModuleVersion](docs/api/api_entities_terraform_module_version.html) | `load` | `GET /api/v4/packages/terraform/modules/v1/{module_namespace}/{module_name}/{module_system}/*module_version` | See reference |
| [ApiEntitiesTerraformModuleVersion](docs/api/api_entities_terraform_module_version.html) | `load` | `GET /api/v4/packages/terraform/modules/v1/{module_namespace}/{module_name}/{module_system}` | See reference |
| [ApiEntitiesTreeObject](docs/api/api_entities_tree_object.html) | `load` | `GET /api/v4/projects/{id}/repository/tree` | See reference |
| [ApiEntitiesTrigger](docs/api/api_entities_trigger.html) | `create` | `POST /api/v4/projects/{id}/triggers` | See reference |
| [ApiEntitiesTrigger](docs/api/api_entities_trigger.html) | `list` | `GET /api/v4/projects/{id}/triggers` | See reference |
| [ApiEntitiesTrigger](docs/api/api_entities_trigger.html) | `load` | `GET /api/v4/projects/{id}/triggers/{trigger_id}` | See reference |
| [ApiEntitiesTrigger](docs/api/api_entities_trigger.html) | `update` | `PUT /api/v4/projects/{id}/triggers/{trigger_id}` | See reference |
| [ApiEntitiesUserAgentDetail](docs/api/api_entities_user_agent_detail.html) | `load` | `GET /api/v4/projects/{id}/issues/{issue_iid}/user_agent_detail` | See reference |
| [ApiEntitiesUserAgentDetail](docs/api/api_entities_user_agent_detail.html) | `load` | `GET /api/v4/projects/{id}/snippets/{snippet_id}/user_agent_detail` | See reference |
| [ApiEntitiesUserAgentDetail](docs/api/api_entities_user_agent_detail.html) | `load` | `GET /api/v4/snippets/{id}/user_agent_detail` | See reference |
| [ApiEntitiesUserCount](docs/api/api_entities_user_count.html) | `load` | `GET /api/v4/user_counts` | See reference |
| [ApiEntitiesUserPublic](docs/api/api_entities_user_public.html) | `list` | `GET /api/v4/groups/{id}/provisioned_users` | See reference |
| [ApiEntitiesUserPublic](docs/api/api_entities_user_public.html) | `list` | `GET /api/v4/groups/{id}/saml_users` | See reference |
| [ApiEntitiesUserWithAdmin](docs/api/api_entities_user_with_admin.html) | `list` | `GET /api/v4/keys` | See reference |
| [ApiEntitiesWikiAttachment](docs/api/api_entities_wiki_attachment.html) | `create` | `POST /api/v4/groups/{id}/wikis/attachments` | See reference |
| [ApiEntitiesWikiAttachment](docs/api/api_entities_wiki_attachment.html) | `create` | `POST /api/v4/projects/{id}/wikis/attachments` | See reference |
| [ApiEntitiesWikiPage](docs/api/api_entities_wiki_page.html) | `create` | `POST /api/v4/groups/{id}/wikis` | See reference |
| [ApiEntitiesWikiPage](docs/api/api_entities_wiki_page.html) | `create` | `POST /api/v4/projects/{id}/wikis` | See reference |
| [ApiEntitiesWikiPage](docs/api/api_entities_wiki_page.html) | `load` | `GET /api/v4/groups/{id}/wikis/{slug}` | See reference |
| [ApiEntitiesWikiPage](docs/api/api_entities_wiki_page.html) | `load` | `GET /api/v4/projects/{id}/wikis/{slug}` | See reference |
| [ApiEntitiesWikiPage](docs/api/api_entities_wiki_page.html) | `update` | `PUT /api/v4/groups/{id}/wikis/{slug}` | See reference |
| [ApiEntitiesWikiPage](docs/api/api_entities_wiki_page.html) | `update` | `PUT /api/v4/projects/{id}/wikis/{slug}` | See reference |
| [ApiEntitiesWikiPageBasic](docs/api/api_entities_wiki_page_basic.html) | `list` | `GET /api/v4/groups/{id}/wikis` | See reference |
| [ApiEntitiesWikiPageBasic](docs/api/api_entities_wiki_page_basic.html) | `list` | `GET /api/v4/projects/{id}/wikis` | See reference |
| [Application](docs/api/application.html) | `remove` | `DELETE /api/v4/applications/{id}` | See reference |
| [AwardEmoji](docs/api/award_emoji.html) | `remove` | `DELETE /api/v4/groups/{id}/epics/{epic_iid}/notes/{note_id}/award_emoji/{award_id}` | See reference |
| [AwardEmoji](docs/api/award_emoji.html) | `remove` | `DELETE /api/v4/projects/{id}/issues/{issue_iid}/notes/{note_id}/award_emoji/{award_id}` | See reference |
| [AwardEmoji](docs/api/award_emoji.html) | `remove` | `DELETE /api/v4/projects/{id}/merge_requests/{merge_request_iid}/notes/{note_id}/award_emoji/{award_id}` | See reference |
| [AwardEmoji](docs/api/award_emoji.html) | `remove` | `DELETE /api/v4/projects/{id}/snippets/{snippet_id}/notes/{note_id}/award_emoji/{award_id}` | See reference |
| [AwardEmoji](docs/api/award_emoji.html) | `remove` | `DELETE /api/v4/groups/{id}/epics/{epic_iid}/award_emoji/{award_id}` | See reference |
| [AwardEmoji](docs/api/award_emoji.html) | `remove` | `DELETE /api/v4/projects/{id}/issues/{issue_iid}/award_emoji/{award_id}` | See reference |
| [AwardEmoji](docs/api/award_emoji.html) | `remove` | `DELETE /api/v4/projects/{id}/merge_requests/{merge_request_iid}/award_emoji/{award_id}` | See reference |
| [AwardEmoji](docs/api/award_emoji.html) | `remove` | `DELETE /api/v4/projects/{id}/snippets/{snippet_id}/award_emoji/{award_id}` | See reference |
| [Badge](docs/api/badge.html) | `remove` | `DELETE /api/v4/groups/{id}/badges/{badge_id}` | See reference |
| [Badge](docs/api/badge.html) | `remove` | `DELETE /api/v4/projects/{id}/badges/{badge_id}` | See reference |
| [Branch](docs/api/branch.html) | `remove` | `DELETE /api/v4/projects/{id}/repository/branches/{branch}` | See reference |
| [Branch](docs/api/branch.html) | `remove` | `DELETE /api/v4/projects/{id}/repository/merged_branches` | See reference |
| [CargoPackage](docs/api/cargo_package.html) | `load` | `GET /api/v4/projects/{id}/packages/cargo/config.json` | See reference |
| [CiVariable](docs/api/ci_variable.html) | `remove` | `DELETE /api/v4/projects/{id}/variables/{key}` | See reference |
| [CiVariable](docs/api/ci_variable.html) | `remove` | `DELETE /api/v4/groups/{id}/variables/{key}` | See reference |
| [CiVariable](docs/api/ci_variable.html) | `remove` | `DELETE /api/v4/admin/ci/variables/{key}` | See reference |
| [Cluster](docs/api/cluster.html) | `remove` | `DELETE /api/v4/groups/{id}/clusters/{cluster_id}` | See reference |
| [Cluster](docs/api/cluster.html) | `remove` | `DELETE /api/v4/projects/{id}/clusters/{cluster_id}` | See reference |
| [Cluster](docs/api/cluster.html) | `remove` | `DELETE /api/v4/admin/clusters/{cluster_id}` | See reference |
| [ClusterAgent](docs/api/cluster_agent.html) | `remove` | `DELETE /api/v4/projects/{id}/cluster_agents/{agent_id}/tokens/{token_id}` | See reference |
| [ClusterAgent](docs/api/cluster_agent.html) | `remove` | `DELETE /api/v4/projects/{id}/cluster_agents/{agent_id}` | See reference |
| [Composer](docs/api/composer.html) | `create` | `POST /api/v4/projects/{id}/packages/composer` | See reference |
| [ComposerPackage](docs/api/composer_package.html) | `load` | `GET /api/v4/projects/{id}/packages/composer/archives/*package_name` | See reference |
| [ComposerPackage](docs/api/composer_package.html) | `load` | `GET /api/v4/group/{id}/-/packages/composer/*package_name` | See reference |
| [ComposerPackage](docs/api/composer_package.html) | `load` | `GET /api/v4/group/{id}/-/packages/composer/p2/*package_name` | See reference |
| [ComposerPackage](docs/api/composer_package.html) | `load` | `GET /api/v4/group/{id}/-/packages/composer/p/{sha}` | See reference |
| [ComposerPackage](docs/api/composer_package.html) | `load` | `GET /api/v4/group/{id}/-/packages/composer/packages` | See reference |
| [Conan](docs/api/conan.html) | `remove` | `DELETE /api/v4/projects/{id}/packages/conan/v1/conans/{package_name}/{package_version}/{package_username}/{package_channel}` | See reference |
| [Conan](docs/api/conan.html) | `remove` | `DELETE /api/v4/packages/conan/v1/conans/{package_name}/{package_version}/{package_username}/{package_channel}` | See reference |
| [ConanPackage](docs/api/conan_package.html) | `load` | `GET /api/v4/projects/{id}/packages/conan/v1/files/{package_name}/{package_version}/{package_username}/{package_channel}/{recipe_revision}/package/{conan_package_reference}/{package_revision}/{file_name}` | See reference |
| [ConanPackage](docs/api/conan_package.html) | `load` | `GET /api/v4/projects/{id}/packages/conan/v2/conans/{package_name}/{package_version}/{package_username}/{package_channel}/revisions/{recipe_revision}/packages/{conan_package_reference}/revisions/{package_revision}/files/{file_name}` | See reference |
| [ConanPackage](docs/api/conan_package.html) | `load` | `GET /api/v4/packages/conan/v1/files/{package_name}/{package_version}/{package_username}/{package_channel}/{recipe_revision}/package/{conan_package_reference}/{package_revision}/{file_name}` | See reference |
| [ConanPackage](docs/api/conan_package.html) | `load` | `GET /api/v4/projects/{id}/packages/conan/v2/conans/{package_name}/{package_version}/{package_username}/{package_channel}/revisions/{recipe_revision}/files/{file_name}` | See reference |
| [ConanPackage](docs/api/conan_package.html) | `load` | `GET /api/v4/projects/{id}/packages/conan/v1/files/{package_name}/{package_version}/{package_username}/{package_channel}/{recipe_revision}/export/{file_name}` | See reference |
| [ConanPackage](docs/api/conan_package.html) | `load` | `GET /api/v4/projects/{id}/packages/conan/v2/conans/{package_name}/{package_version}/{package_username}/{package_channel}/revisions/{recipe_revision}/search` | See reference |
| [ConanPackage](docs/api/conan_package.html) | `load` | `GET /api/v4/packages/conan/v1/files/{package_name}/{package_version}/{package_username}/{package_channel}/{recipe_revision}/export/{file_name}` | See reference |
| [ConanPackage](docs/api/conan_package.html) | `load` | `GET /api/v4/projects/{id}/packages/conan/v1/conans/{package_name}/{package_version}/{package_username}/{package_channel}/search` | See reference |
| [ConanPackage](docs/api/conan_package.html) | `load` | `GET /api/v4/projects/{id}/packages/conan/v2/conans/{package_name}/{package_version}/{package_username}/{package_channel}/search` | See reference |
| [ConanPackage](docs/api/conan_package.html) | `load` | `GET /api/v4/packages/conan/v1/conans/{package_name}/{package_version}/{package_username}/{package_channel}/search` | See reference |
| [ConanPackage](docs/api/conan_package.html) | `load` | `GET /api/v4/projects/{id}/packages/conan/v1/conans/search` | See reference |
| [ConanPackage](docs/api/conan_package.html) | `load` | `GET /api/v4/projects/{id}/packages/conan/v2/conans/search` | See reference |
| [ConanPackage](docs/api/conan_package.html) | `load` | `GET /api/v4/packages/conan/v1/conans/search` | See reference |
| [ConanPackage](docs/api/conan_package.html) | `load` | `GET /api/v4/projects/{id}/packages/conan/v1/ping` | See reference |
| [ConanPackage](docs/api/conan_package.html) | `load` | `GET /api/v4/projects/{id}/packages/conan/v1/users/authenticate` | See reference |
| [ConanPackage](docs/api/conan_package.html) | `load` | `GET /api/v4/projects/{id}/packages/conan/v1/users/check_credentials` | See reference |
| [ConanPackage](docs/api/conan_package.html) | `load` | `GET /api/v4/projects/{id}/packages/conan/v2/users/authenticate` | See reference |
| [ConanPackage](docs/api/conan_package.html) | `load` | `GET /api/v4/projects/{id}/packages/conan/v2/users/check_credentials` | See reference |
| [ConanPackage](docs/api/conan_package.html) | `load` | `GET /api/v4/packages/conan/v1/ping` | See reference |
| [ConanPackage](docs/api/conan_package.html) | `load` | `GET /api/v4/packages/conan/v1/users/authenticate` | See reference |
| [ConanPackage](docs/api/conan_package.html) | `load` | `GET /api/v4/packages/conan/v1/users/check_credentials` | See reference |
| [ConanPackage](docs/api/conan_package.html) | `remove` | `DELETE /api/v4/projects/{id}/packages/conan/v2/conans/{package_name}/{package_version}/{package_username}/{package_channel}/revisions/{recipe_revision}/packages/{conan_package_reference}/revisions/{package_revision}` | See reference |
| [ConanPackage](docs/api/conan_package.html) | `remove` | `DELETE /api/v4/projects/{id}/packages/conan/v2/conans/{package_name}/{package_version}/{package_username}/{package_channel}/revisions/{recipe_revision}` | See reference |
| [ConanPackage](docs/api/conan_package.html) | `update` | `PUT /api/v4/projects/{id}/packages/conan/v1/files/{package_name}/{package_version}/{package_username}/{package_channel}/{recipe_revision}/package/{conan_package_reference}/{package_revision}/{file_name}` | See reference |
| [ConanPackage](docs/api/conan_package.html) | `update` | `PUT /api/v4/projects/{id}/packages/conan/v2/conans/{package_name}/{package_version}/{package_username}/{package_channel}/revisions/{recipe_revision}/packages/{conan_package_reference}/revisions/{package_revision}/files/{file_name}` | See reference |
| [ConanPackage](docs/api/conan_package.html) | `update` | `PUT /api/v4/packages/conan/v1/files/{package_name}/{package_version}/{package_username}/{package_channel}/{recipe_revision}/package/{conan_package_reference}/{package_revision}/{file_name}` | See reference |
| [ConanPackage](docs/api/conan_package.html) | `update` | `PUT /api/v4/projects/{id}/packages/conan/v1/files/{package_name}/{package_version}/{package_username}/{package_channel}/{recipe_revision}/package/{conan_package_reference}/{package_revision}/{file_name}/authorize` | See reference |
| [ConanPackage](docs/api/conan_package.html) | `update` | `PUT /api/v4/projects/{id}/packages/conan/v2/conans/{package_name}/{package_version}/{package_username}/{package_channel}/revisions/{recipe_revision}/packages/{conan_package_reference}/revisions/{package_revision}/files/{file_name}/authorize` | See reference |
| [ConanPackage](docs/api/conan_package.html) | `update` | `PUT /api/v4/projects/{id}/packages/conan/v2/conans/{package_name}/{package_version}/{package_username}/{package_channel}/revisions/{recipe_revision}/files/{file_name}` | See reference |
| [ConanPackage](docs/api/conan_package.html) | `update` | `PUT /api/v4/packages/conan/v1/files/{package_name}/{package_version}/{package_username}/{package_channel}/{recipe_revision}/package/{conan_package_reference}/{package_revision}/{file_name}/authorize` | See reference |
| [ConanPackage](docs/api/conan_package.html) | `update` | `PUT /api/v4/projects/{id}/packages/conan/v1/files/{package_name}/{package_version}/{package_username}/{package_channel}/{recipe_revision}/export/{file_name}` | See reference |
| [ConanPackage](docs/api/conan_package.html) | `update` | `PUT /api/v4/projects/{id}/packages/conan/v2/conans/{package_name}/{package_version}/{package_username}/{package_channel}/revisions/{recipe_revision}/files/{file_name}/authorize` | See reference |
| [ConanPackage](docs/api/conan_package.html) | `update` | `PUT /api/v4/projects/{id}/packages/conan/v1/files/{package_name}/{package_version}/{package_username}/{package_channel}/{recipe_revision}/export/{file_name}/authorize` | See reference |
| [ConanPackage](docs/api/conan_package.html) | `update` | `PUT /api/v4/packages/conan/v1/files/{package_name}/{package_version}/{package_username}/{package_channel}/{recipe_revision}/export/{file_name}` | See reference |
| [ConanPackage](docs/api/conan_package.html) | `update` | `PUT /api/v4/packages/conan/v1/files/{package_name}/{package_version}/{package_username}/{package_channel}/{recipe_revision}/export/{file_name}/authorize` | See reference |
| [ContainerRegistry](docs/api/container_registry.html) | `remove` | `DELETE /api/v4/projects/{id}/registry/repositories/{repository_id}/tags` | See reference |
| [ContainerRegistry](docs/api/container_registry.html) | `remove` | `DELETE /api/v4/projects/{id}/registry/repositories/{repository_id}/tags/{tag_name}` | See reference |
| [ContainerRegistry](docs/api/container_registry.html) | `remove` | `DELETE /api/v4/projects/{id}/registry/repositories/{repository_id}` | See reference |
| [ContainerRegistryEvent](docs/api/container_registry_event.html) | `create` | `POST /api/v4/container_registry_event/events` | See reference |
| [CustomAttribute](docs/api/custom_attribute.html) | `load` | `GET /api/v4/groups/{id}/custom_attributes/{key}` | See reference |
| [CustomAttribute](docs/api/custom_attribute.html) | `load` | `GET /api/v4/projects/{id}/custom_attributes/{key}` | See reference |
| [CustomAttribute](docs/api/custom_attribute.html) | `load` | `GET /api/v4/groups/{id}/custom_attributes` | See reference |
| [CustomAttribute](docs/api/custom_attribute.html) | `load` | `GET /api/v4/projects/{id}/custom_attributes` | See reference |
| [Debian](docs/api/debian.html) | `update` | `PUT /api/v4/projects/{id}/packages/debian/{file_name}/authorize` | See reference |
| [Debian](docs/api/debian.html) | `update` | `PUT /api/v4/projects/{id}/packages/debian/{file_name}` | See reference |
| [DebianDistribution](docs/api/debian_distribution.html) | `remove` | `DELETE /api/v4/groups/{id}/-/debian_distributions/{codename}` | See reference |
| [DebianDistribution](docs/api/debian_distribution.html) | `remove` | `DELETE /api/v4/projects/{id}/debian_distributions/{codename}` | See reference |
| [DebianPackage](docs/api/debian_package.html) | `load` | `GET /api/v4/groups/{id}/-/packages/debian/pool/{distribution}/{project_id}/{letter}/{package_name}/{package_version}/{file_name}` | See reference |
| [DebianPackage](docs/api/debian_package.html) | `load` | `GET /api/v4/projects/{id}/packages/debian/pool/{distribution}/{letter}/{package_name}/{package_version}/{file_name}` | See reference |
| [DebianPackage](docs/api/debian_package.html) | `load` | `GET /api/v4/groups/{id}/-/packages/debian/dists/*distribution/{component}/binary-{architecture}/by-hash/SHA256/{file_sha256}` | See reference |
| [DebianPackage](docs/api/debian_package.html) | `load` | `GET /api/v4/groups/{id}/-/packages/debian/dists/*distribution/{component}/debian-installer/binary-{architecture}/by-hash/SHA256/{file_sha256}` | See reference |
| [DebianPackage](docs/api/debian_package.html) | `load` | `GET /api/v4/projects/{id}/packages/debian/dists/*distribution/{component}/binary-{architecture}/by-hash/SHA256/{file_sha256}` | See reference |
| [DebianPackage](docs/api/debian_package.html) | `load` | `GET /api/v4/projects/{id}/packages/debian/dists/*distribution/{component}/debian-installer/binary-{architecture}/by-hash/SHA256/{file_sha256}` | See reference |
| [DebianPackage](docs/api/debian_package.html) | `load` | `GET /api/v4/groups/{id}/-/packages/debian/dists/*distribution/{component}/binary-{architecture}/Packages` | See reference |
| [DebianPackage](docs/api/debian_package.html) | `load` | `GET /api/v4/groups/{id}/-/packages/debian/dists/*distribution/{component}/debian-installer/binary-{architecture}/Packages` | See reference |
| [DebianPackage](docs/api/debian_package.html) | `load` | `GET /api/v4/projects/{id}/packages/debian/dists/*distribution/{component}/binary-{architecture}/Packages` | See reference |
| [DebianPackage](docs/api/debian_package.html) | `load` | `GET /api/v4/projects/{id}/packages/debian/dists/*distribution/{component}/debian-installer/binary-{architecture}/Packages` | See reference |
| [DebianPackage](docs/api/debian_package.html) | `load` | `GET /api/v4/groups/{id}/-/packages/debian/dists/*distribution/{component}/source/by-hash/SHA256/{file_sha256}` | See reference |
| [DebianPackage](docs/api/debian_package.html) | `load` | `GET /api/v4/projects/{id}/packages/debian/dists/*distribution/{component}/source/by-hash/SHA256/{file_sha256}` | See reference |
| [DebianPackage](docs/api/debian_package.html) | `load` | `GET /api/v4/groups/{id}/-/packages/debian/dists/*distribution/{component}/source/Sources` | See reference |
| [DebianPackage](docs/api/debian_package.html) | `load` | `GET /api/v4/projects/{id}/packages/debian/dists/*distribution/{component}/source/Sources` | See reference |
| [DebianPackage](docs/api/debian_package.html) | `load` | `GET /api/v4/groups/{id}/-/packages/debian/dists/*distribution/InRelease` | See reference |
| [DebianPackage](docs/api/debian_package.html) | `load` | `GET /api/v4/groups/{id}/-/packages/debian/dists/*distribution/Release` | See reference |
| [DebianPackage](docs/api/debian_package.html) | `load` | `GET /api/v4/groups/{id}/-/packages/debian/dists/*distribution/Release.gpg` | See reference |
| [DebianPackage](docs/api/debian_package.html) | `load` | `GET /api/v4/projects/{id}/packages/debian/dists/*distribution/InRelease` | See reference |
| [DebianPackage](docs/api/debian_package.html) | `load` | `GET /api/v4/projects/{id}/packages/debian/dists/*distribution/Release` | See reference |
| [DebianPackage](docs/api/debian_package.html) | `load` | `GET /api/v4/projects/{id}/packages/debian/dists/*distribution/Release.gpg` | See reference |
| [DependencyProxy](docs/api/dependency_proxy.html) | `remove` | `DELETE /api/v4/groups/{id}/dependency_proxy/cache` | See reference |
| [DeployKey](docs/api/deploy_key.html) | `remove` | `DELETE /api/v4/projects/{id}/deploy_keys/{key_id}` | See reference |
| [DeployToken](docs/api/deploy_token.html) | `remove` | `DELETE /api/v4/groups/{id}/deploy_tokens/{token_id}` | See reference |
| [DeployToken](docs/api/deploy_token.html) | `remove` | `DELETE /api/v4/projects/{id}/deploy_tokens/{token_id}` | See reference |
| [Deployment](docs/api/deployment.html) | `remove` | `DELETE /api/v4/projects/{id}/deployments/{deployment_id}` | See reference |
| [EeApiEntitiesApprovalState](docs/api/ee_api_entities_approval_state.html) | `create` | `POST /api/v4/projects/{id}/merge_requests/{merge_request_iid}/approvals` | See reference |
| [EeApiEntitiesAuditEvent](docs/api/ee_api_entities_audit_event.html) | `list` | `GET /api/v4/groups/{id}/audit_events` | See reference |
| [EeApiEntitiesAuditEvent](docs/api/ee_api_entities_audit_event.html) | `list` | `GET /api/v4/projects/{id}/audit_events` | See reference |
| [EeApiEntitiesAuditEvent](docs/api/ee_api_entities_audit_event.html) | `load` | `GET /api/v4/groups/{id}/audit_events/{audit_event_id}` | See reference |
| [EeApiEntitiesAuditEvent](docs/api/ee_api_entities_audit_event.html) | `load` | `GET /api/v4/projects/{id}/audit_events/{audit_event_id}` | See reference |
| [EeApiEntitiesBillableMembership](docs/api/ee_api_entities_billable_membership.html) | `load` | `GET /api/v4/groups/{id}/billable_members/{user_id}/indirect` | See reference |
| [EeApiEntitiesBillableMembership](docs/api/ee_api_entities_billable_membership.html) | `load` | `GET /api/v4/groups/{id}/billable_members/{user_id}/memberships` | See reference |
| [EeApiEntitiesGeoNodeStatus](docs/api/ee_api_entities_geo_node_status.html) | `create` | `POST /api/v4/geo/status` | See reference |
| [EeApiEntitiesGeoPipelineRef](docs/api/ee_api_entities_geo_pipeline_ref.html) | `list` | `GET /api/v4/geo/repositories/{gl_repository}/pipeline_refs` | See reference |
| [EeApiEntitiesIssuableMetricImage](docs/api/ee_api_entities_issuable_metric_image.html) | `create` | `POST /api/v4/projects/{id}/issues/{issue_iid}/metric_images` | See reference |
| [EeApiEntitiesIssuableMetricImage](docs/api/ee_api_entities_issuable_metric_image.html) | `remove` | `DELETE /api/v4/projects/{id}/issues/{issue_iid}/metric_images/{metric_image_id}` | See reference |
| [EeApiEntitiesIssuableMetricImage](docs/api/ee_api_entities_issuable_metric_image.html) | `update` | `PUT /api/v4/projects/{id}/issues/{issue_iid}/metric_images/{metric_image_id}` | See reference |
| [EeApiEntitiesMergeRequestApprovalState](docs/api/ee_api_entities_merge_request_approval_state.html) | `list` | `GET /api/v4/projects/{id}/merge_requests/{merge_request_iid}/approval_state` | See reference |
| [EeApiEntitiesSshCertificate](docs/api/ee_api_entities_ssh_certificate.html) | `create` | `POST /api/v4/groups/{id}/ssh_certificates` | See reference |
| [EeApiEntitiesSshCertificate](docs/api/ee_api_entities_ssh_certificate.html) | `list` | `GET /api/v4/groups/{id}/ssh_certificates` | See reference |
| [Environment](docs/api/environment.html) | `create` | `POST /api/v4/projects/{id}/environments/stop_stale` | See reference |
| [Environment](docs/api/environment.html) | `remove` | `DELETE /api/v4/projects/{id}/environments/review_apps` | See reference |
| [Environment](docs/api/environment.html) | `remove` | `DELETE /api/v4/projects/{id}/environments/{environment_id}` | See reference |
| [ErrorTrackingClientKey](docs/api/error_tracking_client_key.html) | `remove` | `DELETE /api/v4/projects/{id}/error_tracking/client_keys/{key_id}` | See reference |
| [Feature](docs/api/feature.html) | `remove` | `DELETE /api/v4/features/{name}` | See reference |
| [FeatureFlag](docs/api/feature_flag.html) | `create` | `POST /api/v4/feature_flags/unleash/{project_id}/client/metrics` | See reference |
| [FeatureFlag](docs/api/feature_flag.html) | `create` | `POST /api/v4/feature_flags/unleash/{project_id}/client/register` | See reference |
| [FeatureFlag](docs/api/feature_flag.html) | `load` | `GET /api/v4/feature_flags/unleash/{project_id}` | See reference |
| [FeatureFlag](docs/api/feature_flag.html) | `remove` | `DELETE /api/v4/projects/{id}/feature_flags/{feature_flag_name}` | See reference |
| [FeatureFlagsUserList](docs/api/feature_flags_user_list.html) | `remove` | `DELETE /api/v4/projects/{id}/feature_flags_user_lists/{iid}` | See reference |
| [FreezePeriod](docs/api/freeze_period.html) | `remove` | `DELETE /api/v4/projects/{id}/freeze_periods/{freeze_period_id}` | See reference |
| [GenericPackage](docs/api/generic_package.html) | `load` | `GET /api/v4/projects/{id}/packages/generic/{package_name}/*package_version/(*path/){file_name}` | See reference |
| [GenericPackage](docs/api/generic_package.html) | `update` | `PUT /api/v4/projects/{id}/packages/generic/{package_name}/*package_version/(*path/){file_name}` | See reference |
| [GenericPackage](docs/api/generic_package.html) | `update` | `PUT /api/v4/projects/{id}/packages/generic/{package_name}/*package_version/(*path/){file_name}/authorize` | See reference |
| [Geo](docs/api/geo.html) | `create` | `POST /api/v4/geo/node_proxy/{id}/graphql` | See reference |
| [Geo](docs/api/geo.html) | `create` | `POST /api/v4/geo/proxy_git_ssh/info_refs_receive_pack` | See reference |
| [Geo](docs/api/geo.html) | `create` | `POST /api/v4/geo/proxy_git_ssh/info_refs_upload_pack` | See reference |
| [Geo](docs/api/geo.html) | `create` | `POST /api/v4/geo/proxy_git_ssh/receive_pack` | See reference |
| [Geo](docs/api/geo.html) | `create` | `POST /api/v4/geo/proxy_git_ssh/upload_pack` | See reference |
| [Geo](docs/api/geo.html) | `load` | `GET /api/v4/geo/retrieve/{replicable_name}/{replicable_id}` | See reference |
| [Geo](docs/api/geo.html) | `load` | `GET /api/v4/geo/proxy` | See reference |
| [GoProxy](docs/api/go_proxy.html) | `load` | `GET /api/v4/projects/{id}/packages/go/*module_name/@v/{module_version}.mod` | See reference |
| [GoProxy](docs/api/go_proxy.html) | `load` | `GET /api/v4/projects/{id}/packages/go/*module_name/@v/{module_version}.zip` | See reference |
| [GoProxy](docs/api/go_proxy.html) | `load` | `GET /api/v4/projects/{id}/packages/go/*module_name/@v/list` | See reference |
| [Group](docs/api/group.html) | `create` | `POST /api/v4/groups/{id}/placeholder_reassignments` | See reference |
| [Group](docs/api/group.html) | `create` | `POST /api/v4/groups/{id}/tokens/revoke` | See reference |
| [Group](docs/api/group.html) | `create` | `POST /api/v4/groups/{id}/members/approve_all` | See reference |
| [Group](docs/api/group.html) | `create` | `POST /api/v4/groups/{id}/placeholder_reassignments/authorize` | See reference |
| [Group](docs/api/group.html) | `load` | `GET /api/v4/groups/{id}/issues_statistics` | See reference |
| [Group](docs/api/group.html) | `load` | `GET /api/v4/groups/{id}/(-/)search` | See reference |
| [Group](docs/api/group.html) | `load` | `GET /api/v4/groups/{id}/uploads/{secret}/{filename}` | See reference |
| [Group](docs/api/group.html) | `load` | `GET /api/v4/groups/{id}/pending_members` | See reference |
| [Group](docs/api/group.html) | `load` | `GET /api/v4/groups/{id}/uploads/{upload_id}` | See reference |
| [Group](docs/api/group.html) | `load` | `GET /api/v4/groups/{id}/placeholder_reassignments` | See reference |
| [Group](docs/api/group.html) | `remove` | `DELETE /api/v4/groups/{id}/uploads/{secret}/{filename}` | See reference |
| [Group](docs/api/group.html) | `remove` | `DELETE /api/v4/groups/{id}/share/{group_id}` | See reference |
| [Group](docs/api/group.html) | `remove` | `DELETE /api/v4/groups/{id}/custom_attributes/{key}` | See reference |
| [Group](docs/api/group.html) | `remove` | `DELETE /api/v4/groups/{id}/ssh_certificates/{ssh_certificates_id}` | See reference |
| [Group](docs/api/group.html) | `remove` | `DELETE /api/v4/groups/{id}/uploads/{upload_id}` | See reference |
| [Group](docs/api/group.html) | `remove` | `DELETE /api/v4/groups/{id}/billable_members/{user_id}` | See reference |
| [Group](docs/api/group.html) | `remove` | `DELETE /api/v4/groups/{id}` | See reference |
| [Group](docs/api/group.html) | `update` | `PUT /api/v4/groups/{id}/custom_attributes/{key}` | See reference |
| [GroupAvatar](docs/api/group_avatar.html) | `load` | `GET /api/v4/groups/{id}/avatar` | See reference |
| [GroupExport](docs/api/group_export.html) | `create` | `POST /api/v4/groups/{id}/export_relations` | See reference |
| [GroupExport](docs/api/group_export.html) | `create` | `POST /api/v4/groups/{id}/export` | See reference |
| [GroupExport](docs/api/group_export.html) | `load` | `GET /api/v4/groups/{id}/export_relations/download` | See reference |
| [GroupExport](docs/api/group_export.html) | `load` | `GET /api/v4/groups/{id}/export/download` | See reference |
| [GroupImport](docs/api/group_import.html) | `create` | `POST /api/v4/groups/import` | See reference |
| [GroupImport](docs/api/group_import.html) | `create` | `POST /api/v4/groups/import/authorize` | See reference |
| [HelmPackage](docs/api/helm_package.html) | `create` | `POST /api/v4/projects/{id}/packages/helm/api/{channel}/charts` | See reference |
| [HelmPackage](docs/api/helm_package.html) | `create` | `POST /api/v4/projects/{id}/packages/helm/api/{channel}/charts/authorize` | See reference |
| [HelmPackage](docs/api/helm_package.html) | `load` | `GET /api/v4/projects/{id}/packages/helm/{channel}/charts/{file_name}.tgz` | See reference |
| [HelmPackage](docs/api/helm_package.html) | `load` | `GET /api/v4/projects/{id}/packages/helm/{channel}/index.yaml` | See reference |
| [Hook](docs/api/hook.html) | `create` | `POST /api/v4/hooks/{hook_id}` | See reference |
| [Hook](docs/api/hook.html) | `remove` | `DELETE /api/v4/hooks/{hook_id}/custom_headers/{key}` | See reference |
| [Hook](docs/api/hook.html) | `remove` | `DELETE /api/v4/hooks/{hook_id}/url_variables/{key}` | See reference |
| [Hook](docs/api/hook.html) | `update` | `PUT /api/v4/hooks/{hook_id}/custom_headers/{key}` | See reference |
| [Hook](docs/api/hook.html) | `update` | `PUT /api/v4/hooks/{hook_id}/url_variables/{key}` | See reference |
| [Import](docs/api/import.html) | `create` | `POST /api/v4/import/github/gists` | See reference |
| [Integration](docs/api/integration.html) | `create` | `POST /api/v4/projects/{id}/integrations/mattermost_slash_commands/trigger` | See reference |
| [Integration](docs/api/integration.html) | `create` | `POST /api/v4/projects/{id}/integrations/slack_slash_commands/trigger` | See reference |
| [Integration](docs/api/integration.html) | `create` | `POST /api/v4/projects/{id}/services/mattermost_slash_commands/trigger` | See reference |
| [Integration](docs/api/integration.html) | `create` | `POST /api/v4/projects/{id}/services/slack_slash_commands/trigger` | See reference |
| [Integration](docs/api/integration.html) | `create` | `POST /api/v4/integrations/slack/events` | See reference |
| [Integration](docs/api/integration.html) | `create` | `POST /api/v4/integrations/slack/interactions` | See reference |
| [Integration](docs/api/integration.html) | `create` | `POST /api/v4/integrations/slack/options` | See reference |
| [Integration](docs/api/integration.html) | `remove` | `DELETE /api/v4/groups/{id}/integrations/{slug}` | See reference |
| [Integration](docs/api/integration.html) | `remove` | `DELETE /api/v4/projects/{id}/integrations/{slug}` | See reference |
| [Integration](docs/api/integration.html) | `remove` | `DELETE /api/v4/projects/{id}/services/{slug}` | See reference |
| [Invitation](docs/api/invitation.html) | `remove` | `DELETE /api/v4/groups/{id}/invitations/{email}` | See reference |
| [Invitation](docs/api/invitation.html) | `remove` | `DELETE /api/v4/projects/{id}/invitations/{email}` | See reference |
| [IssueLink](docs/api/issue_link.html) | `remove` | `DELETE /api/v4/projects/{id}/issues/{issue_iid}/links/{issue_link_id}` | See reference |
| [IssuesStatistic](docs/api/issues_statistic.html) | `load` | `GET /api/v4/issues_statistics` | See reference |
| [Job](docs/api/job.html) | `create` | `POST /api/v4/jobs/{id}/artifacts` | See reference |
| [Job](docs/api/job.html) | `create` | `POST /api/v4/jobs/{id}/artifacts/authorize` | See reference |
| [Job](docs/api/job.html) | `create` | `POST /api/v4/jobs/request` | See reference |
| [Job](docs/api/job.html) | `load` | `GET /api/v4/jobs/{id}/artifacts` | See reference |
| [Job](docs/api/job.html) | `patch` | `PATCH /api/v4/jobs/{id}/trace` | See reference |
| [Job](docs/api/job.html) | `update` | `PUT /api/v4/jobs/{id}` | See reference |
| [MavenPackage](docs/api/maven_package.html) | `load` | `GET /api/v4/groups/{id}/-/packages/maven/*path/{file_name}` | See reference |
| [MavenPackage](docs/api/maven_package.html) | `load` | `GET /api/v4/projects/{id}/packages/maven/*path/{file_name}` | See reference |
| [MavenPackage](docs/api/maven_package.html) | `load` | `GET /api/v4/packages/maven/*path/{file_name}` | See reference |
| [MavenPackage](docs/api/maven_package.html) | `update` | `PUT /api/v4/projects/{id}/packages/maven/*path/{file_name}` | See reference |
| [MavenPackage](docs/api/maven_package.html) | `update` | `PUT /api/v4/projects/{id}/packages/maven/*path/{file_name}/authorize` | See reference |
| [Member](docs/api/member.html) | `remove` | `DELETE /api/v4/groups/{id}/members/{user_id}` | See reference |
| [Member](docs/api/member.html) | `remove` | `DELETE /api/v4/projects/{id}/members/{user_id}` | See reference |
| [Member](docs/api/member.html) | `update` | `PUT /api/v4/groups/{id}/members/{member_id}/approve` | See reference |
| [MergeRequest](docs/api/merge_request.html) | `load` | `GET /api/v4/projects/{id}/merge_requests/{merge_request_iid}/related_issues` | See reference |
| [MergeRequest](docs/api/merge_request.html) | `load` | `GET /api/v4/projects/{id}/merge_requests/{merge_request_iid}/merge_ref` | See reference |
| [MergeRequest](docs/api/merge_request.html) | `load` | `GET /api/v4/projects/{id}/merge_requests/{merge_request_iid}/raw_diffs` | See reference |
| [MergeRequest](docs/api/merge_request.html) | `remove` | `DELETE /api/v4/projects/{id}/merge_requests/{merge_request_iid}/context_commits` | See reference |
| [MergeRequest](docs/api/merge_request.html) | `remove` | `DELETE /api/v4/projects/{id}/merge_requests/{merge_request_iid}` | See reference |
| [MergeRequest](docs/api/merge_request.html) | `update` | `PUT /api/v4/projects/{id}/merge_requests/{merge_request_iid}/reset_approvals` | See reference |
| [Metadata](docs/api/metadata.html) | `load` | `GET /api/v4/metadata` | See reference |
| [Metadata](docs/api/metadata.html) | `load` | `GET /api/v4/version` | See reference |
| [Migration](docs/api/migration.html) | `create` | `POST /api/v4/admin/migrations/{timestamp}/mark` | See reference |
| [MlModelRegistry](docs/api/ml_model_registry.html) | `load` | `GET /api/v4/projects/{id}/packages/ml_models/{model_version_id}/files/(*path/){file_name}` | See reference |
| [MlModelRegistry](docs/api/ml_model_registry.html) | `update` | `PUT /api/v4/projects/{id}/packages/ml_models/{model_version_id}/files/(*path/){file_name}` | See reference |
| [MlModelRegistry](docs/api/ml_model_registry.html) | `update` | `PUT /api/v4/projects/{id}/packages/ml_models/{model_version_id}/files/(*path/){file_name}/authorize` | See reference |
| [Namespace](docs/api/namespace.html) | `remove` | `DELETE /api/v4/namespaces/{id}/storage/limit_exclusion` | See reference |
| [Npm](docs/api/npm.html) | `update` | `PUT /api/v4/projects/{id}/packages/npm/{package_name}` | See reference |
| [NpmPackage](docs/api/npm_package.html) | `create` | `POST /api/v4/groups/{id}/-/packages/npm/-/npm/v1/security/advisories/bulk` | See reference |
| [NpmPackage](docs/api/npm_package.html) | `create` | `POST /api/v4/groups/{id}/-/packages/npm/-/npm/v1/security/audits/quick` | See reference |
| [NpmPackage](docs/api/npm_package.html) | `create` | `POST /api/v4/projects/{id}/packages/npm/-/npm/v1/security/advisories/bulk` | See reference |
| [NpmPackage](docs/api/npm_package.html) | `create` | `POST /api/v4/projects/{id}/packages/npm/-/npm/v1/security/audits/quick` | See reference |
| [NpmPackage](docs/api/npm_package.html) | `create` | `POST /api/v4/packages/npm/-/npm/v1/security/advisories/bulk` | See reference |
| [NpmPackage](docs/api/npm_package.html) | `create` | `POST /api/v4/packages/npm/-/npm/v1/security/audits/quick` | See reference |
| [NpmPackage](docs/api/npm_package.html) | `load` | `GET /api/v4/projects/{id}/packages/npm/*package_name/-/*file_name` | See reference |
| [NpmPackage](docs/api/npm_package.html) | `remove` | `DELETE /api/v4/groups/{id}/-/packages/npm/-/package/*package_name/dist-tags/{tag}` | See reference |
| [NpmPackage](docs/api/npm_package.html) | `remove` | `DELETE /api/v4/projects/{id}/packages/npm/-/package/*package_name/dist-tags/{tag}` | See reference |
| [NpmPackage](docs/api/npm_package.html) | `remove` | `DELETE /api/v4/packages/npm/-/package/*package_name/dist-tags/{tag}` | See reference |
| [NpmPackage](docs/api/npm_package.html) | `update` | `PUT /api/v4/groups/{id}/-/packages/npm/-/package/*package_name/dist-tags/{tag}` | See reference |
| [NpmPackage](docs/api/npm_package.html) | `update` | `PUT /api/v4/projects/{id}/packages/npm/-/package/*package_name/dist-tags/{tag}` | See reference |
| [NpmPackage](docs/api/npm_package.html) | `update` | `PUT /api/v4/packages/npm/-/package/*package_name/dist-tags/{tag}` | See reference |
| [Nuget](docs/api/nuget.html) | `update` | `PUT /api/v4/projects/{id}/packages/nuget` | See reference |
| [NugetPackage](docs/api/nuget_package.html) | `list` | `GET /api/v4/groups/{id}/-/packages/nuget/metadata/*package_name/index` | See reference |
| [NugetPackage](docs/api/nuget_package.html) | `list` | `GET /api/v4/projects/{id}/packages/nuget/metadata/*package_name/index` | See reference |
| [NugetPackage](docs/api/nuget_package.html) | `load` | `GET /api/v4/groups/{id}/-/packages/nuget/symbolfiles/*file_name/*signature/*same_file_name` | See reference |
| [NugetPackage](docs/api/nuget_package.html) | `load` | `GET /api/v4/projects/{id}/packages/nuget/symbolfiles/*file_name/*signature/*same_file_name` | See reference |
| [NugetPackage](docs/api/nuget_package.html) | `load` | `GET /api/v4/projects/{id}/packages/nuget/download/*package_name/*package_version/*package_filename` | See reference |
| [NugetPackage](docs/api/nuget_package.html) | `load` | `GET /api/v4/groups/{id}/-/packages/nuget/metadata/*package_name/*package_version` | See reference |
| [NugetPackage](docs/api/nuget_package.html) | `load` | `GET /api/v4/projects/{id}/packages/nuget/metadata/*package_name/*package_version` | See reference |
| [NugetPackage](docs/api/nuget_package.html) | `load` | `GET /api/v4/projects/{project_id}/packages/nuget/v2/Packages\(Id='*package_name',Version='*package_version'\)` | See reference |
| [NugetPackage](docs/api/nuget_package.html) | `load` | `GET /api/v4/projects/{project_id}/packages/nuget/v2/Packages\(\)` | See reference |
| [NugetPackage](docs/api/nuget_package.html) | `load` | `GET /api/v4/projects/{project_id}/packages/nuget/v2/FindPackagesById\(\)` | See reference |
| [NugetPackage](docs/api/nuget_package.html) | `load` | `GET /api/v4/groups/{id}/-/packages/nuget/v2` | See reference |
| [NugetPackage](docs/api/nuget_package.html) | `load` | `GET /api/v4/groups/{id}/-/packages/nuget/v2/$metadata` | See reference |
| [NugetPackage](docs/api/nuget_package.html) | `load` | `GET /api/v4/projects/{id}/packages/nuget/v2` | See reference |
| [NugetPackage](docs/api/nuget_package.html) | `load` | `GET /api/v4/projects/{id}/packages/nuget/v2/$metadata` | See reference |
| [NugetPackage](docs/api/nuget_package.html) | `remove` | `DELETE /api/v4/projects/{id}/packages/nuget/*package_name/*package_version` | See reference |
| [NugetPackage](docs/api/nuget_package.html) | `update` | `PUT /api/v4/projects/{id}/packages/nuget/symbolpackage` | See reference |
| [NugetPackage](docs/api/nuget_package.html) | `update` | `PUT /api/v4/projects/{id}/packages/nuget/v2` | See reference |
| [NugetPackage](docs/api/nuget_package.html) | `update` | `PUT /api/v4/projects/{id}/packages/nuget/authorize` | See reference |
| [NugetPackage](docs/api/nuget_package.html) | `update` | `PUT /api/v4/projects/{id}/packages/nuget/symbolpackage/authorize` | See reference |
| [NugetPackage](docs/api/nuget_package.html) | `update` | `PUT /api/v4/projects/{id}/packages/nuget/v2/authorize` | See reference |
| [PackageFile](docs/api/package_file.html) | `load` | `GET /api/v4/projects/{id}/packages/{package_id}/package_files/{package_file_id}/download` | See reference |
| [PackageFile](docs/api/package_file.html) | `remove` | `DELETE /api/v4/projects/{id}/packages/{package_id}/package_files/{package_file_id}` | See reference |
| [Page](docs/api/page.html) | `load` | `GET /api/v4/projects/{id}/pages` | See reference |
| [Page](docs/api/page.html) | `remove` | `DELETE /api/v4/projects/{id}/pages` | See reference |
| [Page](docs/api/page.html) | `update` | `PATCH /api/v4/projects/{id}/pages` | See reference |
| [Participant](docs/api/participant.html) | `list` | `GET /api/v4/projects/{id}/issues/{issue_iid}/participants` | See reference |
| [Participant](docs/api/participant.html) | `list` | `GET /api/v4/projects/{id}/merge_requests/{merge_request_iid}/participants` | See reference |
| [PersonalAccessToken](docs/api/personal_access_token.html) | `remove` | `DELETE /api/v4/personal_access_tokens/{id}` | See reference |
| [PersonalAccessToken](docs/api/personal_access_token.html) | `remove` | `DELETE /api/v4/personal_access_tokens/self` | See reference |
| [Project](docs/api/project.html) | `create` | `POST /api/v4/projects/{id}/hooks/{hook_id}/events/{hook_log_id}/resend` | See reference |
| [Project](docs/api/project.html) | `create` | `POST /api/v4/projects/{id}/repository/files/{file_path}` | See reference |
| [Project](docs/api/project.html) | `create` | `POST /api/v4/projects/{id}/hooks/{hook_id}/test/{trigger}` | See reference |
| [Project](docs/api/project.html) | `create` | `POST /api/v4/projects/{id}/issues/{issue_iid}/metric_images/authorize` | See reference |
| [Project](docs/api/project.html) | `create` | `POST /api/v4/projects/{id}/merge_requests/{merge_request_iid}/draft_notes/bulk_publish` | See reference |
| [Project](docs/api/project.html) | `create` | `POST /api/v4/projects/{id}/repository/changelog` | See reference |
| [Project](docs/api/project.html) | `create` | `POST /api/v4/projects/{id}/import_project_members/{project_id}` | See reference |
| [Project](docs/api/project.html) | `create` | `POST /api/v4/projects/{id}/uploads/authorize` | See reference |
| [Project](docs/api/project.html) | `load` | `GET /api/v4/projects/{id}/issues_statistics` | See reference |
| [Project](docs/api/project.html) | `load` | `GET /api/v4/projects/{id}/(-/)search` | See reference |
| [Project](docs/api/project.html) | `load` | `GET /api/v4/projects/{id}/repository/archive` | See reference |
| [Project](docs/api/project.html) | `load` | `GET /api/v4/projects/{id}/jobs/artifacts/{ref_name}/raw/*artifact_path` | See reference |
| [Project](docs/api/project.html) | `load` | `GET /api/v4/projects/{id}/repository/files/{file_path}/blame` | See reference |
| [Project](docs/api/project.html) | `load` | `GET /api/v4/projects/{id}/hooks/{hook_id}/events` | See reference |
| [Project](docs/api/project.html) | `load` | `GET /api/v4/projects/{id}/jobs/{job_id}/artifacts/*artifact_path` | See reference |
| [Project](docs/api/project.html) | `load` | `GET /api/v4/projects/{id}/repository/files/{file_path}/raw` | See reference |
| [Project](docs/api/project.html) | `load` | `GET /api/v4/projects/{id}/jobs/artifacts/{ref_name}/download` | See reference |
| [Project](docs/api/project.html) | `load` | `GET /api/v4/projects/{id}/repository/files/{file_path}` | See reference |
| [Project](docs/api/project.html) | `load` | `GET /api/v4/projects/{id}/uploads/{secret}/{filename}` | See reference |
| [Project](docs/api/project.html) | `load` | `GET /api/v4/projects/{id}/jobs/{job_id}/artifacts` | See reference |
| [Project](docs/api/project.html) | `load` | `GET /api/v4/projects/{id}/issues/{issue_iid}/metric_images` | See reference |
| [Project](docs/api/project.html) | `load` | `GET /api/v4/projects/{id}/pipelines/{pipeline_id}` | See reference |
| [Project](docs/api/project.html) | `load` | `GET /api/v4/projects/{id}/pipelines/latest` | See reference |
| [Project](docs/api/project.html) | `load` | `GET /api/v4/projects/{id}/repository/blobs/{sha}` | See reference |
| [Project](docs/api/project.html) | `load` | `GET /api/v4/projects/{id}/repository/blobs/{sha}/raw` | See reference |
| [Project](docs/api/project.html) | `load` | `GET /api/v4/projects/{id}/uploads/{upload_id}` | See reference |
| [Project](docs/api/project.html) | `load` | `GET /api/v4/projects/{id}/snapshot` | See reference |
| [Project](docs/api/project.html) | `load` | `GET /api/v4/projects/{id}/languages` | See reference |
| [Project](docs/api/project.html) | `load` | `GET /api/v4/projects/{id}/pages_access` | See reference |
| [Project](docs/api/project.html) | `remove` | `DELETE /api/v4/projects/{id}/repository/files/{file_path}` | See reference |
| [Project](docs/api/project.html) | `remove` | `DELETE /api/v4/projects/{id}/merge_requests/{merge_request_iid}/draft_notes/{draft_note_id}` | See reference |
| [Project](docs/api/project.html) | `remove` | `DELETE /api/v4/projects/{id}/uploads/{secret}/{filename}` | See reference |
| [Project](docs/api/project.html) | `remove` | `DELETE /api/v4/projects/{id}/hooks/{hook_id}/custom_headers/{key}` | See reference |
| [Project](docs/api/project.html) | `remove` | `DELETE /api/v4/projects/{id}/hooks/{hook_id}/url_variables/{key}` | See reference |
| [Project](docs/api/project.html) | `remove` | `DELETE /api/v4/projects/{id}/pipeline_schedules/{pipeline_schedule_id}/variables/{key}` | See reference |
| [Project](docs/api/project.html) | `remove` | `DELETE /api/v4/projects/{id}/pages/domains/{domain}` | See reference |
| [Project](docs/api/project.html) | `remove` | `DELETE /api/v4/projects/{id}/share/{group_id}` | See reference |
| [Project](docs/api/project.html) | `remove` | `DELETE /api/v4/projects/{id}/issues/{issue_iid}` | See reference |
| [Project](docs/api/project.html) | `remove` | `DELETE /api/v4/projects/{id}/jobs/{job_id}/artifacts` | See reference |
| [Project](docs/api/project.html) | `remove` | `DELETE /api/v4/projects/{id}/custom_attributes/{key}` | See reference |
| [Project](docs/api/project.html) | `remove` | `DELETE /api/v4/projects/{id}/protected_branches/{name}` | See reference |
| [Project](docs/api/project.html) | `remove` | `DELETE /api/v4/projects/{id}/packages/protection/rules/{package_protection_rule_id}` | See reference |
| [Project](docs/api/project.html) | `remove` | `DELETE /api/v4/projects/{id}/pipelines/{pipeline_id}` | See reference |
| [Project](docs/api/project.html) | `remove` | `DELETE /api/v4/projects/{id}/pipeline_schedules/{pipeline_schedule_id}` | See reference |
| [Project](docs/api/project.html) | `remove` | `DELETE /api/v4/projects/{id}/registry/protection/repository/rules/{protection_rule_id}` | See reference |
| [Project](docs/api/project.html) | `remove` | `DELETE /api/v4/projects/{id}/triggers/{trigger_id}` | See reference |
| [Project](docs/api/project.html) | `remove` | `DELETE /api/v4/projects/{id}/uploads/{upload_id}` | See reference |
| [Project](docs/api/project.html) | `remove` | `DELETE /api/v4/projects/{id}` | See reference |
| [Project](docs/api/project.html) | `remove` | `DELETE /api/v4/projects/{id}/artifacts` | See reference |
| [Project](docs/api/project.html) | `remove` | `DELETE /api/v4/projects/{id}/fork` | See reference |
| [Project](docs/api/project.html) | `update` | `PUT /api/v4/projects/{id}/hooks/{hook_id}/custom_headers/{key}` | See reference |
| [Project](docs/api/project.html) | `update` | `PUT /api/v4/projects/{id}/hooks/{hook_id}/url_variables/{key}` | See reference |
| [Project](docs/api/project.html) | `update` | `PUT /api/v4/projects/{id}/pages/domains/{domain}` | See reference |
| [Project](docs/api/project.html) | `update` | `PUT /api/v4/projects/{id}/repository/files/{file_path}` | See reference |
| [Project](docs/api/project.html) | `update` | `PUT /api/v4/projects/{id}/custom_attributes/{key}` | See reference |
| [Project](docs/api/project.html) | `update` | `PUT /api/v4/projects/{id}/pipelines/{pipeline_id}/metadata` | See reference |
| [ProjectAvatar](docs/api/project_avatar.html) | `load` | `GET /api/v4/projects/{id}/avatar` | See reference |
| [ProjectEntity](docs/api/project_entity.html) | `create` | `POST /api/v4/import/bitbucket_server` | See reference |
| [ProjectEntity](docs/api/project_entity.html) | `create` | `POST /api/v4/import/github` | See reference |
| [ProjectExport](docs/api/project_export.html) | `create` | `POST /api/v4/projects/{id}/export` | See reference |
| [ProjectExport](docs/api/project_export.html) | `create` | `POST /api/v4/projects/{id}/export_relations` | See reference |
| [ProjectExport](docs/api/project_export.html) | `load` | `GET /api/v4/projects/{id}/export_relations/download` | See reference |
| [ProjectExport](docs/api/project_export.html) | `load` | `GET /api/v4/projects/{id}/export/download` | See reference |
| [ProjectHook](docs/api/project_hook.html) | `remove` | `DELETE /api/v4/projects/{id}/hooks/{hook_id}` | See reference |
| [ProjectImport](docs/api/project_import.html) | `create` | `POST /api/v4/projects/import-relation/authorize` | See reference |
| [ProjectImport](docs/api/project_import.html) | `create` | `POST /api/v4/projects/import/authorize` | See reference |
| [ProjectImportEntity](docs/api/project_import_entity.html) | `create` | `POST /api/v4/import/bitbucket` | See reference |
| [ProjectImportEntity](docs/api/project_import_entity.html) | `create` | `POST /api/v4/import/github/cancel` | See reference |
| [ProjectPackage](docs/api/project_package.html) | `remove` | `DELETE /api/v4/projects/{id}/packages/{package_id}` | See reference |
| [ProjectSnippet](docs/api/project_snippet.html) | `remove` | `DELETE /api/v4/projects/{id}/snippets/{snippet_id}` | See reference |
| [ProjectsJobTokenScope](docs/api/projects_job_token_scope.html) | `remove` | `DELETE /api/v4/projects/{id}/job_token_scope/groups_allowlist/{target_group_id}` | See reference |
| [ProjectsJobTokenScope](docs/api/projects_job_token_scope.html) | `remove` | `DELETE /api/v4/projects/{id}/job_token_scope/allowlist/{target_project_id}` | See reference |
| [ProjectsJobTokenScope](docs/api/projects_job_token_scope.html) | `update` | `PATCH /api/v4/projects/{id}/job_token_scope` | See reference |
| [ProtectedTag](docs/api/protected_tag.html) | `remove` | `DELETE /api/v4/projects/{id}/protected_tags/{name}` | See reference |
| [Pypi](docs/api/pypi.html) | `create` | `POST /api/v4/projects/{id}/packages/pypi` | See reference |
| [PypiPackage](docs/api/pypi_package.html) | `create` | `POST /api/v4/projects/{id}/packages/pypi/authorize` | See reference |
| [PypiPackage](docs/api/pypi_package.html) | `load` | `GET /api/v4/groups/{id}/-/packages/pypi/files/{sha256}/*file_identifier` | See reference |
| [PypiPackage](docs/api/pypi_package.html) | `load` | `GET /api/v4/projects/{id}/packages/pypi/files/{sha256}/*file_identifier` | See reference |
| [PypiPackage](docs/api/pypi_package.html) | `load` | `GET /api/v4/groups/{id}/-/packages/pypi/simple/*package_name` | See reference |
| [PypiPackage](docs/api/pypi_package.html) | `load` | `GET /api/v4/projects/{id}/packages/pypi/simple/*package_name` | See reference |
| [PypiPackage](docs/api/pypi_package.html) | `load` | `GET /api/v4/groups/{id}/-/packages/pypi/simple` | See reference |
| [PypiPackage](docs/api/pypi_package.html) | `load` | `GET /api/v4/projects/{id}/packages/pypi/simple` | See reference |
| [Release](docs/api/release.html) | `load` | `GET /api/v4/projects/{id}/releases/{tag_name}/downloads/*direct_asset_path` | See reference |
| [Release](docs/api/release.html) | `load` | `GET /api/v4/projects/{id}/releases/permalink/latest(/)(*suffix_path)` | See reference |
| [Release](docs/api/release.html) | `remove` | `DELETE /api/v4/projects/{id}/releases/{tag_name}` | See reference |
| [ReleaseLink](docs/api/release_link.html) | `remove` | `DELETE /api/v4/projects/{id}/releases/{tag_name}/assets/links/{link_id}` | See reference |
| [RemoteMirror](docs/api/remote_mirror.html) | `load` | `GET /api/v4/projects/{id}/remote_mirrors/{mirror_id}/public_key` | See reference |
| [RemoteMirror](docs/api/remote_mirror.html) | `remove` | `DELETE /api/v4/projects/{id}/remote_mirrors/{mirror_id}` | See reference |
| [Rpm](docs/api/rpm.html) | `create` | `POST /api/v4/projects/{id}/packages/rpm` | See reference |
| [RpmPackage](docs/api/rpm_package.html) | `create` | `POST /api/v4/projects/{id}/packages/rpm/authorize` | See reference |
| [RpmPackage](docs/api/rpm_package.html) | `load` | `GET /api/v4/projects/{id}/packages/rpm/*package_file_id/*file_name` | See reference |
| [RpmPackage](docs/api/rpm_package.html) | `load` | `GET /api/v4/projects/{id}/packages/rpm/repodata/*file_name` | See reference |
| [Rubygem](docs/api/rubygem.html) | `load` | `GET /api/v4/projects/{id}/packages/rubygems/{file_name}` | See reference |
| [RubygemPackage](docs/api/rubygem_package.html) | `create` | `POST /api/v4/projects/{id}/packages/rubygems/api/v1/gems` | See reference |
| [RubygemPackage](docs/api/rubygem_package.html) | `create` | `POST /api/v4/projects/{id}/packages/rubygems/api/v1/gems/authorize` | See reference |
| [RubygemPackage](docs/api/rubygem_package.html) | `load` | `GET /api/v4/projects/{id}/packages/rubygems/gems/{file_name}` | See reference |
| [RubygemPackage](docs/api/rubygem_package.html) | `load` | `GET /api/v4/projects/{id}/packages/rubygems/quick/Marshal.4.8/{file_name}` | See reference |
| [RubygemPackage](docs/api/rubygem_package.html) | `load` | `GET /api/v4/projects/{id}/packages/rubygems/api/v1/dependencies` | See reference |
| [Runner](docs/api/runner.html) | `create` | `POST /api/v4/runners/verify` | See reference |
| [Runner](docs/api/runner.html) | `remove` | `DELETE /api/v4/projects/{id}/runners/{runner_id}` | See reference |
| [Runner](docs/api/runner.html) | `remove` | `DELETE /api/v4/runners/managers` | See reference |
| [Runner](docs/api/runner.html) | `remove` | `DELETE /api/v4/runners/{id}` | See reference |
| [Runner](docs/api/runner.html) | `remove` | `DELETE /api/v4/runners` | See reference |
| [Search](docs/api/search.html) | `load` | `GET /api/v4/search` | See reference |
| [SecureFile](docs/api/secure_file.html) | `load` | `GET /api/v4/projects/{id}/secure_files/{secure_file_id}/download` | See reference |
| [SecureFile](docs/api/secure_file.html) | `remove` | `DELETE /api/v4/projects/{id}/secure_files/{secure_file_id}` | See reference |
| [Slack](docs/api/slack.html) | `create` | `POST /api/v4/slack/trigger` | See reference |
| [Snippet](docs/api/snippet.html) | `load` | `GET /api/v4/snippets/{id}/files/{ref}/{file_path}/raw` | See reference |
| [Snippet](docs/api/snippet.html) | `load` | `GET /api/v4/snippets/{id}/raw` | See reference |
| [Snippet](docs/api/snippet.html) | `remove` | `DELETE /api/v4/snippets/{id}` | See reference |
| [Starrer](docs/api/starrer.html) | `list` | `GET /api/v4/projects/{id}/starrers` | See reference |
| [SystemHook](docs/api/system_hook.html) | `remove` | `DELETE /api/v4/hooks/{hook_id}` | See reference |
| [Tag](docs/api/tag.html) | `remove` | `DELETE /api/v4/projects/{id}/repository/tags/{tag_name}` | See reference |
| [TerraformRegistry](docs/api/terraform_registry.html) | `load` | `GET /api/v4/projects/{id}/packages/terraform/modules/{module_name}/{module_system}/*module_version` | See reference |
| [TerraformRegistry](docs/api/terraform_registry.html) | `load` | `GET /api/v4/projects/{id}/packages/terraform/modules/{module_name}/{module_system}` | See reference |
| [TerraformRegistry](docs/api/terraform_registry.html) | `load` | `GET /api/v4/packages/terraform/modules/v1/{module_namespace}/{module_name}/{module_system}/*module_version/download` | See reference |
| [TerraformRegistry](docs/api/terraform_registry.html) | `load` | `GET /api/v4/packages/terraform/modules/v1/{module_namespace}/{module_name}/{module_system}/*module_version/file` | See reference |
| [TerraformRegistry](docs/api/terraform_registry.html) | `load` | `GET /api/v4/packages/terraform/modules/v1/{module_namespace}/{module_name}/{module_system}/download` | See reference |
| [TerraformRegistry](docs/api/terraform_registry.html) | `update` | `PUT /api/v4/projects/{id}/packages/terraform/modules/{module_name}/{module_system}/*module_version/file` | See reference |
| [TerraformRegistry](docs/api/terraform_registry.html) | `update` | `PUT /api/v4/projects/{id}/packages/terraform/modules/{module_name}/{module_system}/*module_version/file/authorize` | See reference |
| [TerraformState](docs/api/terraform_state.html) | `create` | `POST /api/v4/projects/{id}/terraform/state/{name}/lock` | See reference |
| [TerraformState](docs/api/terraform_state.html) | `create` | `POST /api/v4/projects/{id}/terraform/state/{name}` | See reference |
| [TerraformState](docs/api/terraform_state.html) | `load` | `GET /api/v4/projects/{id}/terraform/state/{name}/versions/{serial}` | See reference |
| [TerraformState](docs/api/terraform_state.html) | `load` | `GET /api/v4/projects/{id}/terraform/state/{name}` | See reference |
| [TerraformState](docs/api/terraform_state.html) | `remove` | `DELETE /api/v4/projects/{id}/terraform/state/{name}/lock` | See reference |
| [TerraformState](docs/api/terraform_state.html) | `remove` | `DELETE /api/v4/projects/{id}/terraform/state/{name}/versions/{serial}` | See reference |
| [TerraformState](docs/api/terraform_state.html) | `remove` | `DELETE /api/v4/projects/{id}/terraform/state/{name}` | See reference |
| [TestReport](docs/api/test_report.html) | `list` | `GET /api/v4/projects/{id}/pipelines/{pipeline_id}/test_report` | See reference |
| [TestReportSummary](docs/api/test_report_summary.html) | `load` | `GET /api/v4/projects/{id}/pipelines/{pipeline_id}/test_report_summary` | See reference |
| [Topic](docs/api/topic.html) | `remove` | `DELETE /api/v4/topics/{id}` | See reference |
| [UnleashApi](docs/api/unleash_api.html) | `load` | `GET /api/v4/feature_flags/unleash/{project_id}/features` | See reference |
| [UnleashApi](docs/api/unleash_api.html) | `load` | `GET /api/v4/feature_flags/unleash/{project_id}/client/features` | See reference |
| [UsageData](docs/api/usage_data.html) | `create` | `POST /api/v4/usage_data/increment_counter` | See reference |
| [UsageData](docs/api/usage_data.html) | `create` | `POST /api/v4/usage_data/increment_unique_users` | See reference |
| [UsageData](docs/api/usage_data.html) | `create` | `POST /api/v4/usage_data/track_event` | See reference |
| [UsageData](docs/api/usage_data.html) | `create` | `POST /api/v4/usage_data/track_events` | See reference |
| [UsageData](docs/api/usage_data.html) | `load` | `GET /api/v4/usage_data/metric_definitions` | See reference |
| [UsageData](docs/api/usage_data.html) | `load` | `GET /api/v4/usage_data/non_sql_metrics` | See reference |
| [UsageData](docs/api/usage_data.html) | `load` | `GET /api/v4/usage_data/queries` | See reference |
| [UsageData](docs/api/usage_data.html) | `load` | `GET /api/v4/usage_data/service_ping` | See reference |
| [User](docs/api/user.html) | `list` | `GET /api/v4/projects/{id}/users` | See reference |
| [WebCommit](docs/api/web_commit.html) | `load` | `GET /api/v4/web_commits/public_key` | See reference |
| [Wiki](docs/api/wiki.html) | `remove` | `DELETE /api/v4/groups/{id}/wikis/{slug}` | See reference |
| [Wiki](docs/api/wiki.html) | `remove` | `DELETE /api/v4/projects/{id}/wikis/{slug}` | See reference |

## Connect to the API

- API server: `https://gitlab.com`

The default credential is sent in the `PRIVATE-TOKEN` header.

Check authentication for the route you plan to call. A route that declares no authentication can be used without credentials; this does not change the requirements of other routes. Keep credentials in environment variables or a configured secret provider, and keep them out of source control and logs.

## Make a first request

1. Choose the API server and an operation that matches your task.
2. Check the operation’s required input and authentication. Use values valid for your account and environment.
3. Send one request and inspect the returned data before adding retries, concurrency, or a larger batch.

For an SDK call, install or build the chosen client, create a client instance with its documented configuration, and call the required entity operation. Language references describe the argument shape, asynchronous behaviour, and returned values.

## Choose an SDK

Choose the language already used by your application or service. The clients represent the same API model, while package setup, naming, and return types follow each language. Check the selected client’s reference and tests before integrating it into an existing application.

| Client | Repository directory | Distribution |
| --- | --- | --- |
| [Golang](docs/sdks/go.html) | `go/` | Build from source |
| [Lua](docs/sdks/lua.html) | `lua/` | Build from source |
| [PHP](docs/sdks/php.html) | `php/` | Build from source |
| [Python](docs/sdks/py.html) | `py/` | Build from source |
| [Ruby](docs/sdks/rb.html) | `rb/` | Build from source |
| [TypeScript](docs/sdks/ts.html) | `ts/` | Build from source |

Build-from-source entries are not marked as published in the project model. Follow the build instructions in that target’s README, then consume the resulting package using your language’s local dependency mechanism. Published entries give the installation command recorded for that client.

## Companion tools

These targets provide another way to use the API. Their available commands or tools can cover a smaller set of operations than the client libraries.

### [Go CLI](docs/tools/go-cli.html)

Use the command-line interface for shell-based tasks and scripts.

Repository directory: `go-cli/`. Not published. Build from the go-cli directory.


### [Go MCP server](docs/tools/go-mcp.html)

Use the MCP server to expose supported API operations to an MCP client.

Repository directory: `go-mcp/`. Not published. Build from the go-mcp directory.

- `gitlab_list`: List records for an entity. Supported entities: `api_entities_access_requester`, `api_entities_application`, `api_entities_award_emoji`, `api_entities_badge`, `api_entities_basic_project_detail`, `api_entities_basic_ref`, `api_entities_batched_background_migration`, `api_entities_branch`, `api_entities_bulk_import`, `api_entities_bulk_imports_export_status`, `api_entities_ci_bridge`, `api_entities_ci_job`, `api_entities_ci_job_basic`, `api_entities_ci_lint_result`, `api_entities_ci_pipeline_basic`, `api_entities_ci_pipeline_schedule`, `api_entities_ci_resource_group`, `api_entities_ci_variable`, `api_entities_cluster`, `api_entities_commit`, `api_entities_commit_note`, `api_entities_commit_status`, `api_entities_compare`, `api_entities_container_registry_repository`, `api_entities_container_registry_tag`, `api_entities_deploy_key`, `api_entities_deploy_keys_project`, `api_entities_deploy_token`, `api_entities_deployment`, `api_entities_diff`, `api_entities_draft_note`, `api_entities_environment`, `api_entities_error_tracking_client_key`, `api_entities_event`, `api_entities_feature`, `api_entities_feature_definition`, `api_entities_feature_flag`, `api_entities_feature_flag_user_list`, `api_entities_freeze_period`, `api_entities_group`, `api_entities_hook`, `api_entities_integration_basic`, `api_entities_invitation`, `api_entities_issue`, `api_entities_markdown_upload_admin`, `api_entities_member`, `api_entities_merge_request_basic`, `api_entities_merge_request_diff`, `api_entities_metric_image`, `api_entities_namespace`, `api_entities_namespace_existence`, `api_entities_nuget_packages_version`, `api_entities_nuget_search_result`, `api_entities_nuget_service_index`, `api_entities_package`, `api_entities_package_file`, `api_entities_packages_conan_package_revision`, `api_entities_packages_conan_recipe_revision`, `api_entities_packages_debian_distribution`, `api_entities_pages_domain`, `api_entities_personal_access_token`, `api_entities_personal_access_token_with_last_used_ip`, `api_entities_personal_snippet`, `api_entities_project`, `api_entities_project_hook`, `api_entities_project_import_status`, `api_entities_project_snippet`, `api_entities_projects_container_registry_protection_rule`, `api_entities_projects_packages_protection_rule`, `api_entities_protected_branch`, `api_entities_protected_tag`, `api_entities_public_group_detail`, `api_entities_related_issue`, `api_entities_release`, `api_entities_releases_link`, `api_entities_remote_mirror`, `api_entities_resource_milestone_event`, `api_entities_snippet`, `api_entities_tag`, `api_entities_terraform_module_version`, `api_entities_trigger`, `api_entities_user_public`, `api_entities_user_with_admin`, `api_entities_wiki_page_basic`, `ee_api_entities_audit_event`, `ee_api_entities_geo_pipeline_ref`, `ee_api_entities_merge_request_approval_state`, `ee_api_entities_ssh_certificate`, `nuget_package`, `participant`, `starrer`, `test_report`, `user`.
- `gitlab_load`: Load one record for an entity. Supported entities: `api_entities_appearance`, `api_entities_application_statistic`, `api_entities_avatar`, `api_entities_award_emoji`, `api_entities_badge`, `api_entities_basic_badge_detail`, `api_entities_batched_background_migration`, `api_entities_branch`, `api_entities_bulk_import`, `api_entities_bulk_imports_entity_failure`, `api_entities_changelog`, `api_entities_ci_job`, `api_entities_ci_job_basic_with_project`, `api_entities_ci_pipeline_basic`, `api_entities_ci_pipeline_schedule_detail`, `api_entities_ci_resource_group`, `api_entities_ci_runner`, `api_entities_ci_runner_detail`, `api_entities_ci_runner_manager`, `api_entities_ci_secure_file`, `api_entities_ci_variable`, `api_entities_cluster`, `api_entities_cluster_group`, `api_entities_cluster_project`, `api_entities_clusters_agent`, `api_entities_clusters_agent_token`, `api_entities_clusters_agent_token_basic`, `api_entities_commit_detail`, `api_entities_commit_sequence`, `api_entities_commit_signature`, `api_entities_container_registry_repository`, `api_entities_container_registry_tag_detail`, `api_entities_contributor`, `api_entities_deploy_keys_project`, `api_entities_deploy_token`, `api_entities_deployment_extended`, `api_entities_dictionary_table`, `api_entities_diff`, `api_entities_discovered_cluster`, `api_entities_draft_note`, `api_entities_environment`, `api_entities_error_tracking_project_setting`, `api_entities_event`, `api_entities_feature_flag`, `api_entities_feature_flag_user_list`, `api_entities_freeze_period`, `api_entities_gitlab_subscription`, `api_entities_go_module_version`, `api_entities_group`, `api_entities_group_detail`, `api_entities_hook`, `api_entities_integration`, `api_entities_issuable_time_stat`, `api_entities_issue`, `api_entities_issue_link`, `api_entities_license`, `api_entities_member`, `api_entities_merge`, `api_entities_merge_request_approval`, `api_entities_merge_request_basic`, `api_entities_merge_request_change`, `api_entities_merge_request_diff_full`, `api_entities_merge_request_reviewer`, `api_entities_mr_note`, `api_entities_namespace`, `api_entities_namespaces_storage_limit_exclusion`, `api_entities_npm_package`, `api_entities_npm_package_tag`, `api_entities_package`, `api_entities_package_pipeline`, `api_entities_packages_conan_files_list`, `api_entities_packages_conan_package_manifest`, `api_entities_packages_conan_package_snapshot`, `api_entities_packages_conan_recipe_manifest`, `api_entities_packages_conan_recipe_snapshot`, `api_entities_packages_conan_revision`, `api_entities_packages_debian_distribution`, `api_entities_pages_domain`, `api_entities_pages_domain_basic`, `api_entities_personal_access_token_with_last_used_ip`, `api_entities_personal_snippet`, `api_entities_plan_limit`, `api_entities_project_daily_statistic`, `api_entities_project_export_status`, `api_entities_project_hook`, `api_entities_project_job_token_scope`, `api_entities_project_repository_storage`, `api_entities_project_snippet`, `api_entities_project_with_access`, `api_entities_projects_topic`, `api_entities_protected_branch`, `api_entities_protected_tag`, `api_entities_release`, `api_entities_releases_link`, `api_entities_remote_mirror`, `api_entities_repository_health`, `api_entities_resource_milestone_event`, `api_entities_ssh_key_with_user`, `api_entities_system_broadcast_message`, `api_entities_tag`, `api_entities_tag_signature`, `api_entities_templates_list`, `api_entities_terraform_module_version`, `api_entities_tree_object`, `api_entities_trigger`, `api_entities_user_agent_detail`, `api_entities_user_count`, `api_entities_wiki_page`, `cargo_package`, `composer_package`, `conan_package`, `custom_attribute`, `debian_package`, `ee_api_entities_audit_event`, `ee_api_entities_billable_membership`, `feature_flag`, `generic_package`, `geo`, `go_proxy`, `group`, `group_avatar`, `group_export`, `helm_package`, `issues_statistic`, `job`, `maven_package`, `merge_request`, `metadata`, `ml_model_registry`, `npm_package`, `nuget_package`, `package_file`, `page`, `project`, `project_avatar`, `project_export`, `pypi_package`, `release`, `remote_mirror`, `rpm_package`, `rubygem`, `rubygem_package`, `search`, `secure_file`, `snippet`, `terraform_registry`, `terraform_state`, `test_report_summary`, `unleash_api`, `usage_data`, `web_commit`.

## Operational features

Features supply behaviour around API calls, such as request handling, diagnostics, or local testing. Inclusion in this project does not mean a feature is enabled at runtime. Check the selected SDK’s supported features and configuration defaults, then enable the behaviour your application needs.

- [`debug`](docs/features/debug.html): Request/response capture ring buffer for debugging
- [`idempotency`](docs/features/idempotency.html): Idempotency keys for safe retries of mutating operations
- [`metrics`](docs/features/metrics.html): Statistics capture: per-operation counters and latency
- [`paging`](docs/features/paging.html): Pagination signals for list operations
- [`ratelimit`](docs/features/ratelimit.html): Client-side rate limiting via a token bucket
- [`retry`](docs/features/retry.html): Automatic retry of transient failures with exponential backoff
- [`test`](docs/features/test.html): In-memory mock transport for testing without a live server
- [`timeout`](docs/features/timeout.html): Per-request timeout with transport abort

Start with the default client configuration. Add request limits and diagnostics as needed, test error paths, and review retry behaviour before using operations that change data. A retry can repeat an operation unless the API provides a suitable guarantee.

## Continue with the documentation

- Follow the [first-call guide](docs/guides/first-call.html) for the setup sequence.
- Read the [authentication guide](docs/guides/authentication.html) before using protected routes.
- Use the [API reference](docs/api/index.html) for request schemas, response formats, and status codes.
- Check the chosen SDK or companion tool reference for its configuration and supported operations.

