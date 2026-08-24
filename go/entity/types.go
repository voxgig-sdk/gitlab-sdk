// Typed models for the Gitlab SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/gitlab-sdk/go/core"
)

// ApiEntitiesProjectWithAccess is the typed data model for the api_entities_project_with_access entity.
type ApiEntitiesProjectWithAccess struct {
	AllowMergeOnSkippedPipeline *bool `json:"allow_merge_on_skipped_pipeline,omitempty"`
	AllowPipelineTriggerApproveDeployment *bool `json:"allow_pipeline_trigger_approve_deployment,omitempty"`
	AnalyticsAccessLevel *string `json:"analytics_access_level,omitempty"`
	ApprovalsBeforeMerge *string `json:"approvals_before_merge,omitempty"`
	Archived *bool `json:"archived,omitempty"`
	AutoCancelPendingPipelines *string `json:"auto_cancel_pending_pipelines,omitempty"`
	AutoDevopsDeployStrategy *string `json:"auto_devops_deploy_strategy,omitempty"`
	AutoDevopsEnabled *bool `json:"auto_devops_enabled,omitempty"`
	AutoDuoCodeReviewEnabled *string `json:"auto_duo_code_review_enabled,omitempty"`
	AutocloseReferencedIssues *bool `json:"autoclose_referenced_issues,omitempty"`
	AvatarUrl *string `json:"avatar_url,omitempty"`
	BuildGitStrategy *string `json:"build_git_strategy,omitempty"`
	BuildTimeout *int `json:"build_timeout,omitempty"`
	BuildsAccessLevel *string `json:"builds_access_level,omitempty"`
	CanCreateMergeRequestIn *bool `json:"can_create_merge_request_in,omitempty"`
	CiAllowForkPipelinesToRunInParentProject *bool `json:"ci_allow_fork_pipelines_to_run_in_parent_project,omitempty"`
	CiConfigPath *string `json:"ci_config_path,omitempty"`
	CiDefaultGitDepth *int `json:"ci_default_git_depth,omitempty"`
	CiDeletePipelinesInSeconds *int `json:"ci_delete_pipelines_in_seconds,omitempty"`
	CiForwardDeploymentEnabled *bool `json:"ci_forward_deployment_enabled,omitempty"`
	CiForwardDeploymentRollbackAllowed *bool `json:"ci_forward_deployment_rollback_allowed,omitempty"`
	CiIdTokenSubClaimComponents *[]any `json:"ci_id_token_sub_claim_components,omitempty"`
	CiJobTokenScopeEnabled *bool `json:"ci_job_token_scope_enabled,omitempty"`
	CiPipelineVariablesMinimumOverrideRole *string `json:"ci_pipeline_variables_minimum_override_role,omitempty"`
	CiPushRepositoryForJobTokenAllowed *bool `json:"ci_push_repository_for_job_token_allowed,omitempty"`
	CiRestrictPipelineCancellationRole *string `json:"ci_restrict_pipeline_cancellation_role,omitempty"`
	CiSeparatedCaches *bool `json:"ci_separated_caches,omitempty"`
	ComplianceFrameworks *string `json:"compliance_frameworks,omitempty"`
	ContainerExpirationPolicy *map[string]any `json:"container_expiration_policy,omitempty"`
	ContainerRegistryAccessLevel *string `json:"container_registry_access_level,omitempty"`
	ContainerRegistryEnabled *bool `json:"container_registry_enabled,omitempty"`
	ContainerRegistryImagePrefix *string `json:"container_registry_image_prefix,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	CreatorId *int `json:"creator_id,omitempty"`
	CustomAttributes *map[string]any `json:"custom_attributes,omitempty"`
	DefaultBranch *string `json:"default_branch,omitempty"`
	Description *string `json:"description,omitempty"`
	DescriptionHtml *string `json:"description_html,omitempty"`
	DuoRemoteFlowsEnabled *string `json:"duo_remote_flows_enabled,omitempty"`
	EmailsDisabled *bool `json:"emails_disabled,omitempty"`
	EmailsEnabled *bool `json:"emails_enabled,omitempty"`
	EmptyRepo *bool `json:"empty_repo,omitempty"`
	EnforceAuthChecksOnUploads *bool `json:"enforce_auth_checks_on_uploads,omitempty"`
	EnvironmentsAccessLevel *string `json:"environments_access_level,omitempty"`
	ExternalAuthorizationClassificationLabel *string `json:"external_authorization_classification_label,omitempty"`
	FeatureFlagsAccessLevel *string `json:"feature_flags_access_level,omitempty"`
	ForkedFromProject *map[string]any `json:"forked_from_project,omitempty"`
	ForkingAccessLevel *string `json:"forking_access_level,omitempty"`
	ForksCount *int `json:"forks_count,omitempty"`
	GroupRunnersEnabled *bool `json:"group_runners_enabled,omitempty"`
	HttpUrlToRepo *string `json:"http_url_to_repo,omitempty"`
	Id *int `json:"id,omitempty"`
	ImportError *string `json:"import_error,omitempty"`
	ImportStatus *string `json:"import_status,omitempty"`
	ImportType *string `json:"import_type,omitempty"`
	ImportUrl *string `json:"import_url,omitempty"`
	InfrastructureAccessLevel *string `json:"infrastructure_access_level,omitempty"`
	IssueBranchTemplate *string `json:"issue_branch_template,omitempty"`
	IssuesAccessLevel *string `json:"issues_access_level,omitempty"`
	IssuesEnabled *bool `json:"issues_enabled,omitempty"`
	IssuesTemplate *string `json:"issues_template,omitempty"`
	JobsEnabled *bool `json:"jobs_enabled,omitempty"`
	KeepLatestArtifact *bool `json:"keep_latest_artifact,omitempty"`
	LastActivityAt *string `json:"last_activity_at,omitempty"`
	LfsEnabled *bool `json:"lfs_enabled,omitempty"`
	License *map[string]any `json:"license,omitempty"`
	LicenseUrl *string `json:"license_url,omitempty"`
	Links *map[string]any `json:"links,omitempty"`
	MarkedForDeletionAt *string `json:"marked_for_deletion_at,omitempty"`
	MarkedForDeletionOn *string `json:"marked_for_deletion_on,omitempty"`
	MaxArtifactsSize *int `json:"max_artifacts_size,omitempty"`
	MergeCommitTemplate *string `json:"merge_commit_template,omitempty"`
	MergeMethod *string `json:"merge_method,omitempty"`
	MergePipelinesEnabled *string `json:"merge_pipelines_enabled,omitempty"`
	MergeRequestTitleRegex *string `json:"merge_request_title_regex,omitempty"`
	MergeRequestTitleRegexDescription *string `json:"merge_request_title_regex_description,omitempty"`
	MergeRequestsAccessLevel *string `json:"merge_requests_access_level,omitempty"`
	MergeRequestsEnabled *bool `json:"merge_requests_enabled,omitempty"`
	MergeRequestsTemplate *string `json:"merge_requests_template,omitempty"`
	MergeTrainsEnabled *string `json:"merge_trains_enabled,omitempty"`
	MergeTrainsSkipTrainAllowed *string `json:"merge_trains_skip_train_allowed,omitempty"`
	Mirror *string `json:"mirror,omitempty"`
	MirrorOverwritesDivergedBranches *string `json:"mirror_overwrites_diverged_branches,omitempty"`
	MirrorTriggerBuilds *string `json:"mirror_trigger_builds,omitempty"`
	MirrorUserId *string `json:"mirror_user_id,omitempty"`
	ModelExperimentsAccessLevel *string `json:"model_experiments_access_level,omitempty"`
	ModelRegistryAccessLevel *string `json:"model_registry_access_level,omitempty"`
	MonitorAccessLevel *string `json:"monitor_access_level,omitempty"`
	MrDefaultTargetSelf *bool `json:"mr_default_target_self,omitempty"`
	Name *string `json:"name,omitempty"`
	NameWithNamespace *string `json:"name_with_namespace,omitempty"`
	Namespace *map[string]any `json:"namespace,omitempty"`
	OnlyAllowMergeIfAllDiscussionsAreResolved *bool `json:"only_allow_merge_if_all_discussions_are_resolved,omitempty"`
	OnlyAllowMergeIfAllStatusChecksPassed *string `json:"only_allow_merge_if_all_status_checks_passed,omitempty"`
	OnlyAllowMergeIfPipelineSucceeds *bool `json:"only_allow_merge_if_pipeline_succeeds,omitempty"`
	OnlyMirrorProtectedBranches *string `json:"only_mirror_protected_branches,omitempty"`
	OpenIssuesCount *int `json:"open_issues_count,omitempty"`
	Owner *map[string]any `json:"owner,omitempty"`
	PackageRegistryAccessLevel *string `json:"package_registry_access_level,omitempty"`
	PackagesEnabled *bool `json:"packages_enabled,omitempty"`
	PagesAccessLevel *string `json:"pages_access_level,omitempty"`
	Path *string `json:"path,omitempty"`
	PathWithNamespace *string `json:"path_with_namespace,omitempty"`
	Permissions *map[string]any `json:"permissions,omitempty"`
	PreReceiveSecretDetectionEnabled *bool `json:"pre_receive_secret_detection_enabled,omitempty"`
	PreventMergeWithoutJiraIssue *string `json:"prevent_merge_without_jira_issue,omitempty"`
	PrintingMergeRequestLinkEnabled *bool `json:"printing_merge_request_link_enabled,omitempty"`
	PublicJobs *bool `json:"public_jobs,omitempty"`
	ReadmeUrl *string `json:"readme_url,omitempty"`
	ReleasesAccessLevel *string `json:"releases_access_level,omitempty"`
	RemoveSourceBranchAfterMerge *bool `json:"remove_source_branch_after_merge,omitempty"`
	RepositoryAccessLevel *string `json:"repository_access_level,omitempty"`
	RepositoryObjectFormat *string `json:"repository_object_format,omitempty"`
	RepositoryStorage *string `json:"repository_storage,omitempty"`
	RequestAccessEnabled *bool `json:"request_access_enabled,omitempty"`
	RequirementsAccessLevel *string `json:"requirements_access_level,omitempty"`
	RequirementsEnabled *string `json:"requirements_enabled,omitempty"`
	ResolveOutdatedDiffDiscussions *bool `json:"resolve_outdated_diff_discussions,omitempty"`
	ResourceGroupDefaultProcessMode *string `json:"resource_group_default_process_mode,omitempty"`
	RestrictUserDefinedVariables *bool `json:"restrict_user_defined_variables,omitempty"`
	RunnerTokenExpirationInterval *int `json:"runner_token_expiration_interval,omitempty"`
	RunnersToken *string `json:"runners_token,omitempty"`
	SecretPushProtectionEnabled *bool `json:"secret_push_protection_enabled,omitempty"`
	SecurityAndComplianceAccessLevel *string `json:"security_and_compliance_access_level,omitempty"`
	SecurityAndComplianceEnabled *string `json:"security_and_compliance_enabled,omitempty"`
	ServiceDeskAddress *string `json:"service_desk_address,omitempty"`
	ServiceDeskEnabled *bool `json:"service_desk_enabled,omitempty"`
	SharedRunnersEnabled *bool `json:"shared_runners_enabled,omitempty"`
	SharedWithGroups *[]any `json:"shared_with_groups,omitempty"`
	ShowDiffPreviewInEmail *bool `json:"show_diff_preview_in_email,omitempty"`
	SnippetsAccessLevel *string `json:"snippets_access_level,omitempty"`
	SnippetsEnabled *bool `json:"snippets_enabled,omitempty"`
	SppRepositoryPipelineAccess *bool `json:"spp_repository_pipeline_access,omitempty"`
	SquashCommitTemplate *string `json:"squash_commit_template,omitempty"`
	SquashOption *string `json:"squash_option,omitempty"`
	SshUrlToRepo *string `json:"ssh_url_to_repo,omitempty"`
	StarCount *int `json:"star_count,omitempty"`
	Statistics *map[string]any `json:"statistics,omitempty"`
	SuggestionCommitMessage *string `json:"suggestion_commit_message,omitempty"`
	TagList *[]any `json:"tag_list,omitempty"`
	Topics *[]any `json:"topics,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Visibility *string `json:"visibility,omitempty"`
	WarnAboutPotentiallyUnwantedCharacters *bool `json:"warn_about_potentially_unwanted_characters,omitempty"`
	WebBasedCommitSigningEnabled *string `json:"web_based_commit_signing_enabled,omitempty"`
	WebUrl *string `json:"web_url,omitempty"`
	WikiAccessLevel *string `json:"wiki_access_level,omitempty"`
	WikiEnabled *bool `json:"wiki_enabled,omitempty"`
}

// ApiEntitiesProjectWithAccessLoadMatch is the typed request payload for ApiEntitiesProjectWithAccess.LoadTyped.
type ApiEntitiesProjectWithAccessLoadMatch struct {
	Id string `json:"id"`
}

// Project is the typed data model for the project entity.
type Project struct {
	AllowMergeOnSkippedPipeline *bool `json:"allow_merge_on_skipped_pipeline,omitempty"`
	AllowPipelineTriggerApproveDeployment *bool `json:"allow_pipeline_trigger_approve_deployment,omitempty"`
	AnalyticsAccessLevel *string `json:"analytics_access_level,omitempty"`
	ApprovalsBeforeMerge *string `json:"approvals_before_merge,omitempty"`
	Archived *bool `json:"archived,omitempty"`
	AutoCancelPendingPipelines *string `json:"auto_cancel_pending_pipelines,omitempty"`
	AutoDevopsDeployStrategy *string `json:"auto_devops_deploy_strategy,omitempty"`
	AutoDevopsEnabled *bool `json:"auto_devops_enabled,omitempty"`
	AutoDuoCodeReviewEnabled *string `json:"auto_duo_code_review_enabled,omitempty"`
	AutocloseReferencedIssues *bool `json:"autoclose_referenced_issues,omitempty"`
	AvatarUrl *string `json:"avatar_url,omitempty"`
	BuildGitStrategy *string `json:"build_git_strategy,omitempty"`
	BuildTimeout *int `json:"build_timeout,omitempty"`
	BuildsAccessLevel *string `json:"builds_access_level,omitempty"`
	CanCreateMergeRequestIn *bool `json:"can_create_merge_request_in,omitempty"`
	CiAllowForkPipelinesToRunInParentProject *bool `json:"ci_allow_fork_pipelines_to_run_in_parent_project,omitempty"`
	CiConfigPath *string `json:"ci_config_path,omitempty"`
	CiDefaultGitDepth *int `json:"ci_default_git_depth,omitempty"`
	CiDeletePipelinesInSeconds *int `json:"ci_delete_pipelines_in_seconds,omitempty"`
	CiForwardDeploymentEnabled *bool `json:"ci_forward_deployment_enabled,omitempty"`
	CiForwardDeploymentRollbackAllowed *bool `json:"ci_forward_deployment_rollback_allowed,omitempty"`
	CiIdTokenSubClaimComponents *[]any `json:"ci_id_token_sub_claim_components,omitempty"`
	CiJobTokenScopeEnabled *bool `json:"ci_job_token_scope_enabled,omitempty"`
	CiPipelineVariablesMinimumOverrideRole *string `json:"ci_pipeline_variables_minimum_override_role,omitempty"`
	CiPushRepositoryForJobTokenAllowed *bool `json:"ci_push_repository_for_job_token_allowed,omitempty"`
	CiRestrictPipelineCancellationRole *string `json:"ci_restrict_pipeline_cancellation_role,omitempty"`
	CiSeparatedCaches *bool `json:"ci_separated_caches,omitempty"`
	ComplianceFrameworks *string `json:"compliance_frameworks,omitempty"`
	ContainerExpirationPolicy *map[string]any `json:"container_expiration_policy,omitempty"`
	ContainerRegistryAccessLevel *string `json:"container_registry_access_level,omitempty"`
	ContainerRegistryEnabled *bool `json:"container_registry_enabled,omitempty"`
	ContainerRegistryImagePrefix *string `json:"container_registry_image_prefix,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	CreatorId *int `json:"creator_id,omitempty"`
	CustomAttributes *map[string]any `json:"custom_attributes,omitempty"`
	DefaultBranch *string `json:"default_branch,omitempty"`
	Description *string `json:"description,omitempty"`
	DescriptionHtml *string `json:"description_html,omitempty"`
	DuoRemoteFlowsEnabled *string `json:"duo_remote_flows_enabled,omitempty"`
	EmailsDisabled *bool `json:"emails_disabled,omitempty"`
	EmailsEnabled *bool `json:"emails_enabled,omitempty"`
	EmptyRepo *bool `json:"empty_repo,omitempty"`
	EnforceAuthChecksOnUploads *bool `json:"enforce_auth_checks_on_uploads,omitempty"`
	EnvironmentsAccessLevel *string `json:"environments_access_level,omitempty"`
	ExternalAuthorizationClassificationLabel *string `json:"external_authorization_classification_label,omitempty"`
	FeatureFlagsAccessLevel *string `json:"feature_flags_access_level,omitempty"`
	ForkedFromProject *map[string]any `json:"forked_from_project,omitempty"`
	ForkingAccessLevel *string `json:"forking_access_level,omitempty"`
	ForksCount *int `json:"forks_count,omitempty"`
	GroupRunnersEnabled *bool `json:"group_runners_enabled,omitempty"`
	HttpUrlToRepo *string `json:"http_url_to_repo,omitempty"`
	Id *int `json:"id,omitempty"`
	ImportError *string `json:"import_error,omitempty"`
	ImportStatus *string `json:"import_status,omitempty"`
	ImportType *string `json:"import_type,omitempty"`
	ImportUrl *string `json:"import_url,omitempty"`
	InfrastructureAccessLevel *string `json:"infrastructure_access_level,omitempty"`
	IssueBranchTemplate *string `json:"issue_branch_template,omitempty"`
	IssuesAccessLevel *string `json:"issues_access_level,omitempty"`
	IssuesEnabled *bool `json:"issues_enabled,omitempty"`
	IssuesTemplate *string `json:"issues_template,omitempty"`
	JobsEnabled *bool `json:"jobs_enabled,omitempty"`
	KeepLatestArtifact *bool `json:"keep_latest_artifact,omitempty"`
	LastActivityAt *string `json:"last_activity_at,omitempty"`
	LfsEnabled *bool `json:"lfs_enabled,omitempty"`
	License *map[string]any `json:"license,omitempty"`
	LicenseUrl *string `json:"license_url,omitempty"`
	Links *map[string]any `json:"links,omitempty"`
	MarkedForDeletionAt *string `json:"marked_for_deletion_at,omitempty"`
	MarkedForDeletionOn *string `json:"marked_for_deletion_on,omitempty"`
	MaxArtifactsSize *int `json:"max_artifacts_size,omitempty"`
	MergeCommitTemplate *string `json:"merge_commit_template,omitempty"`
	MergeMethod *string `json:"merge_method,omitempty"`
	MergePipelinesEnabled *string `json:"merge_pipelines_enabled,omitempty"`
	MergeRequestTitleRegex *string `json:"merge_request_title_regex,omitempty"`
	MergeRequestTitleRegexDescription *string `json:"merge_request_title_regex_description,omitempty"`
	MergeRequestsAccessLevel *string `json:"merge_requests_access_level,omitempty"`
	MergeRequestsEnabled *bool `json:"merge_requests_enabled,omitempty"`
	MergeRequestsTemplate *string `json:"merge_requests_template,omitempty"`
	MergeTrainsEnabled *string `json:"merge_trains_enabled,omitempty"`
	MergeTrainsSkipTrainAllowed *string `json:"merge_trains_skip_train_allowed,omitempty"`
	Mirror *string `json:"mirror,omitempty"`
	MirrorOverwritesDivergedBranches *string `json:"mirror_overwrites_diverged_branches,omitempty"`
	MirrorTriggerBuilds *string `json:"mirror_trigger_builds,omitempty"`
	MirrorUserId *string `json:"mirror_user_id,omitempty"`
	ModelExperimentsAccessLevel *string `json:"model_experiments_access_level,omitempty"`
	ModelRegistryAccessLevel *string `json:"model_registry_access_level,omitempty"`
	MonitorAccessLevel *string `json:"monitor_access_level,omitempty"`
	MrDefaultTargetSelf *bool `json:"mr_default_target_self,omitempty"`
	Name *string `json:"name,omitempty"`
	NameWithNamespace *string `json:"name_with_namespace,omitempty"`
	Namespace *map[string]any `json:"namespace,omitempty"`
	OnlyAllowMergeIfAllDiscussionsAreResolved *bool `json:"only_allow_merge_if_all_discussions_are_resolved,omitempty"`
	OnlyAllowMergeIfAllStatusChecksPassed *string `json:"only_allow_merge_if_all_status_checks_passed,omitempty"`
	OnlyAllowMergeIfPipelineSucceeds *bool `json:"only_allow_merge_if_pipeline_succeeds,omitempty"`
	OnlyMirrorProtectedBranches *string `json:"only_mirror_protected_branches,omitempty"`
	OpenIssuesCount *int `json:"open_issues_count,omitempty"`
	Owner *map[string]any `json:"owner,omitempty"`
	PackageRegistryAccessLevel *string `json:"package_registry_access_level,omitempty"`
	PackagesEnabled *bool `json:"packages_enabled,omitempty"`
	PagesAccessLevel *string `json:"pages_access_level,omitempty"`
	Path *string `json:"path,omitempty"`
	PathWithNamespace *string `json:"path_with_namespace,omitempty"`
	PreReceiveSecretDetectionEnabled *bool `json:"pre_receive_secret_detection_enabled,omitempty"`
	PreventMergeWithoutJiraIssue *string `json:"prevent_merge_without_jira_issue,omitempty"`
	PrintingMergeRequestLinkEnabled *bool `json:"printing_merge_request_link_enabled,omitempty"`
	PublicJobs *bool `json:"public_jobs,omitempty"`
	ReadmeUrl *string `json:"readme_url,omitempty"`
	ReleasesAccessLevel *string `json:"releases_access_level,omitempty"`
	RemoveSourceBranchAfterMerge *bool `json:"remove_source_branch_after_merge,omitempty"`
	RepositoryAccessLevel *string `json:"repository_access_level,omitempty"`
	RepositoryObjectFormat *string `json:"repository_object_format,omitempty"`
	RepositoryStorage *string `json:"repository_storage,omitempty"`
	RequestAccessEnabled *bool `json:"request_access_enabled,omitempty"`
	RequirementsAccessLevel *string `json:"requirements_access_level,omitempty"`
	RequirementsEnabled *string `json:"requirements_enabled,omitempty"`
	ResolveOutdatedDiffDiscussions *bool `json:"resolve_outdated_diff_discussions,omitempty"`
	ResourceGroupDefaultProcessMode *string `json:"resource_group_default_process_mode,omitempty"`
	RestrictUserDefinedVariables *bool `json:"restrict_user_defined_variables,omitempty"`
	RunnerTokenExpirationInterval *int `json:"runner_token_expiration_interval,omitempty"`
	RunnersToken *string `json:"runners_token,omitempty"`
	SecretPushProtectionEnabled *bool `json:"secret_push_protection_enabled,omitempty"`
	SecurityAndComplianceAccessLevel *string `json:"security_and_compliance_access_level,omitempty"`
	SecurityAndComplianceEnabled *string `json:"security_and_compliance_enabled,omitempty"`
	ServiceDeskAddress *string `json:"service_desk_address,omitempty"`
	ServiceDeskEnabled *bool `json:"service_desk_enabled,omitempty"`
	SharedRunnersEnabled *bool `json:"shared_runners_enabled,omitempty"`
	SharedWithGroups *[]any `json:"shared_with_groups,omitempty"`
	ShowDiffPreviewInEmail *bool `json:"show_diff_preview_in_email,omitempty"`
	SnippetsAccessLevel *string `json:"snippets_access_level,omitempty"`
	SnippetsEnabled *bool `json:"snippets_enabled,omitempty"`
	SppRepositoryPipelineAccess *bool `json:"spp_repository_pipeline_access,omitempty"`
	SquashCommitTemplate *string `json:"squash_commit_template,omitempty"`
	SquashOption *string `json:"squash_option,omitempty"`
	SshUrlToRepo *string `json:"ssh_url_to_repo,omitempty"`
	StarCount *int `json:"star_count,omitempty"`
	Statistics *map[string]any `json:"statistics,omitempty"`
	SuggestionCommitMessage *string `json:"suggestion_commit_message,omitempty"`
	TagList *[]any `json:"tag_list,omitempty"`
	Topics *[]any `json:"topics,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Visibility *string `json:"visibility,omitempty"`
	WarnAboutPotentiallyUnwantedCharacters *bool `json:"warn_about_potentially_unwanted_characters,omitempty"`
	WebBasedCommitSigningEnabled *string `json:"web_based_commit_signing_enabled,omitempty"`
	WebUrl *string `json:"web_url,omitempty"`
	WikiAccessLevel *string `json:"wiki_access_level,omitempty"`
	WikiEnabled *bool `json:"wiki_enabled,omitempty"`
}

// ProjectListMatch is the typed request payload for Project.ListTyped.
type ProjectListMatch struct {
	AllowMergeOnSkippedPipeline *bool `json:"allow_merge_on_skipped_pipeline,omitempty"`
	AllowPipelineTriggerApproveDeployment *bool `json:"allow_pipeline_trigger_approve_deployment,omitempty"`
	AnalyticsAccessLevel *string `json:"analytics_access_level,omitempty"`
	ApprovalsBeforeMerge *string `json:"approvals_before_merge,omitempty"`
	Archived *bool `json:"archived,omitempty"`
	AutoCancelPendingPipelines *string `json:"auto_cancel_pending_pipelines,omitempty"`
	AutoDevopsDeployStrategy *string `json:"auto_devops_deploy_strategy,omitempty"`
	AutoDevopsEnabled *bool `json:"auto_devops_enabled,omitempty"`
	AutoDuoCodeReviewEnabled *string `json:"auto_duo_code_review_enabled,omitempty"`
	AutocloseReferencedIssues *bool `json:"autoclose_referenced_issues,omitempty"`
	AvatarUrl *string `json:"avatar_url,omitempty"`
	BuildGitStrategy *string `json:"build_git_strategy,omitempty"`
	BuildTimeout *int `json:"build_timeout,omitempty"`
	BuildsAccessLevel *string `json:"builds_access_level,omitempty"`
	CanCreateMergeRequestIn *bool `json:"can_create_merge_request_in,omitempty"`
	CiAllowForkPipelinesToRunInParentProject *bool `json:"ci_allow_fork_pipelines_to_run_in_parent_project,omitempty"`
	CiConfigPath *string `json:"ci_config_path,omitempty"`
	CiDefaultGitDepth *int `json:"ci_default_git_depth,omitempty"`
	CiDeletePipelinesInSeconds *int `json:"ci_delete_pipelines_in_seconds,omitempty"`
	CiForwardDeploymentEnabled *bool `json:"ci_forward_deployment_enabled,omitempty"`
	CiForwardDeploymentRollbackAllowed *bool `json:"ci_forward_deployment_rollback_allowed,omitempty"`
	CiIdTokenSubClaimComponents *[]any `json:"ci_id_token_sub_claim_components,omitempty"`
	CiJobTokenScopeEnabled *bool `json:"ci_job_token_scope_enabled,omitempty"`
	CiPipelineVariablesMinimumOverrideRole *string `json:"ci_pipeline_variables_minimum_override_role,omitempty"`
	CiPushRepositoryForJobTokenAllowed *bool `json:"ci_push_repository_for_job_token_allowed,omitempty"`
	CiRestrictPipelineCancellationRole *string `json:"ci_restrict_pipeline_cancellation_role,omitempty"`
	CiSeparatedCaches *bool `json:"ci_separated_caches,omitempty"`
	ComplianceFrameworks *string `json:"compliance_frameworks,omitempty"`
	ContainerExpirationPolicy *map[string]any `json:"container_expiration_policy,omitempty"`
	ContainerRegistryAccessLevel *string `json:"container_registry_access_level,omitempty"`
	ContainerRegistryEnabled *bool `json:"container_registry_enabled,omitempty"`
	ContainerRegistryImagePrefix *string `json:"container_registry_image_prefix,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	CreatorId *int `json:"creator_id,omitempty"`
	CustomAttributes *map[string]any `json:"custom_attributes,omitempty"`
	DefaultBranch *string `json:"default_branch,omitempty"`
	Description *string `json:"description,omitempty"`
	DescriptionHtml *string `json:"description_html,omitempty"`
	DuoRemoteFlowsEnabled *string `json:"duo_remote_flows_enabled,omitempty"`
	EmailsDisabled *bool `json:"emails_disabled,omitempty"`
	EmailsEnabled *bool `json:"emails_enabled,omitempty"`
	EmptyRepo *bool `json:"empty_repo,omitempty"`
	EnforceAuthChecksOnUploads *bool `json:"enforce_auth_checks_on_uploads,omitempty"`
	EnvironmentsAccessLevel *string `json:"environments_access_level,omitempty"`
	ExternalAuthorizationClassificationLabel *string `json:"external_authorization_classification_label,omitempty"`
	FeatureFlagsAccessLevel *string `json:"feature_flags_access_level,omitempty"`
	ForkedFromProject *map[string]any `json:"forked_from_project,omitempty"`
	ForkingAccessLevel *string `json:"forking_access_level,omitempty"`
	ForksCount *int `json:"forks_count,omitempty"`
	GroupRunnersEnabled *bool `json:"group_runners_enabled,omitempty"`
	HttpUrlToRepo *string `json:"http_url_to_repo,omitempty"`
	Id *int `json:"id,omitempty"`
	ImportError *string `json:"import_error,omitempty"`
	ImportStatus *string `json:"import_status,omitempty"`
	ImportType *string `json:"import_type,omitempty"`
	ImportUrl *string `json:"import_url,omitempty"`
	InfrastructureAccessLevel *string `json:"infrastructure_access_level,omitempty"`
	IssueBranchTemplate *string `json:"issue_branch_template,omitempty"`
	IssuesAccessLevel *string `json:"issues_access_level,omitempty"`
	IssuesEnabled *bool `json:"issues_enabled,omitempty"`
	IssuesTemplate *string `json:"issues_template,omitempty"`
	JobsEnabled *bool `json:"jobs_enabled,omitempty"`
	KeepLatestArtifact *bool `json:"keep_latest_artifact,omitempty"`
	LastActivityAt *string `json:"last_activity_at,omitempty"`
	LfsEnabled *bool `json:"lfs_enabled,omitempty"`
	License *map[string]any `json:"license,omitempty"`
	LicenseUrl *string `json:"license_url,omitempty"`
	Links *map[string]any `json:"links,omitempty"`
	MarkedForDeletionAt *string `json:"marked_for_deletion_at,omitempty"`
	MarkedForDeletionOn *string `json:"marked_for_deletion_on,omitempty"`
	MaxArtifactsSize *int `json:"max_artifacts_size,omitempty"`
	MergeCommitTemplate *string `json:"merge_commit_template,omitempty"`
	MergeMethod *string `json:"merge_method,omitempty"`
	MergePipelinesEnabled *string `json:"merge_pipelines_enabled,omitempty"`
	MergeRequestTitleRegex *string `json:"merge_request_title_regex,omitempty"`
	MergeRequestTitleRegexDescription *string `json:"merge_request_title_regex_description,omitempty"`
	MergeRequestsAccessLevel *string `json:"merge_requests_access_level,omitempty"`
	MergeRequestsEnabled *bool `json:"merge_requests_enabled,omitempty"`
	MergeRequestsTemplate *string `json:"merge_requests_template,omitempty"`
	MergeTrainsEnabled *string `json:"merge_trains_enabled,omitempty"`
	MergeTrainsSkipTrainAllowed *string `json:"merge_trains_skip_train_allowed,omitempty"`
	Mirror *string `json:"mirror,omitempty"`
	MirrorOverwritesDivergedBranches *string `json:"mirror_overwrites_diverged_branches,omitempty"`
	MirrorTriggerBuilds *string `json:"mirror_trigger_builds,omitempty"`
	MirrorUserId *string `json:"mirror_user_id,omitempty"`
	ModelExperimentsAccessLevel *string `json:"model_experiments_access_level,omitempty"`
	ModelRegistryAccessLevel *string `json:"model_registry_access_level,omitempty"`
	MonitorAccessLevel *string `json:"monitor_access_level,omitempty"`
	MrDefaultTargetSelf *bool `json:"mr_default_target_self,omitempty"`
	Name *string `json:"name,omitempty"`
	NameWithNamespace *string `json:"name_with_namespace,omitempty"`
	Namespace *map[string]any `json:"namespace,omitempty"`
	OnlyAllowMergeIfAllDiscussionsAreResolved *bool `json:"only_allow_merge_if_all_discussions_are_resolved,omitempty"`
	OnlyAllowMergeIfAllStatusChecksPassed *string `json:"only_allow_merge_if_all_status_checks_passed,omitempty"`
	OnlyAllowMergeIfPipelineSucceeds *bool `json:"only_allow_merge_if_pipeline_succeeds,omitempty"`
	OnlyMirrorProtectedBranches *string `json:"only_mirror_protected_branches,omitempty"`
	OpenIssuesCount *int `json:"open_issues_count,omitempty"`
	Owner *map[string]any `json:"owner,omitempty"`
	PackageRegistryAccessLevel *string `json:"package_registry_access_level,omitempty"`
	PackagesEnabled *bool `json:"packages_enabled,omitempty"`
	PagesAccessLevel *string `json:"pages_access_level,omitempty"`
	Path *string `json:"path,omitempty"`
	PathWithNamespace *string `json:"path_with_namespace,omitempty"`
	PreReceiveSecretDetectionEnabled *bool `json:"pre_receive_secret_detection_enabled,omitempty"`
	PreventMergeWithoutJiraIssue *string `json:"prevent_merge_without_jira_issue,omitempty"`
	PrintingMergeRequestLinkEnabled *bool `json:"printing_merge_request_link_enabled,omitempty"`
	PublicJobs *bool `json:"public_jobs,omitempty"`
	ReadmeUrl *string `json:"readme_url,omitempty"`
	ReleasesAccessLevel *string `json:"releases_access_level,omitempty"`
	RemoveSourceBranchAfterMerge *bool `json:"remove_source_branch_after_merge,omitempty"`
	RepositoryAccessLevel *string `json:"repository_access_level,omitempty"`
	RepositoryObjectFormat *string `json:"repository_object_format,omitempty"`
	RepositoryStorage *string `json:"repository_storage,omitempty"`
	RequestAccessEnabled *bool `json:"request_access_enabled,omitempty"`
	RequirementsAccessLevel *string `json:"requirements_access_level,omitempty"`
	RequirementsEnabled *string `json:"requirements_enabled,omitempty"`
	ResolveOutdatedDiffDiscussions *bool `json:"resolve_outdated_diff_discussions,omitempty"`
	ResourceGroupDefaultProcessMode *string `json:"resource_group_default_process_mode,omitempty"`
	RestrictUserDefinedVariables *bool `json:"restrict_user_defined_variables,omitempty"`
	RunnerTokenExpirationInterval *int `json:"runner_token_expiration_interval,omitempty"`
	RunnersToken *string `json:"runners_token,omitempty"`
	SecretPushProtectionEnabled *bool `json:"secret_push_protection_enabled,omitempty"`
	SecurityAndComplianceAccessLevel *string `json:"security_and_compliance_access_level,omitempty"`
	SecurityAndComplianceEnabled *string `json:"security_and_compliance_enabled,omitempty"`
	ServiceDeskAddress *string `json:"service_desk_address,omitempty"`
	ServiceDeskEnabled *bool `json:"service_desk_enabled,omitempty"`
	SharedRunnersEnabled *bool `json:"shared_runners_enabled,omitempty"`
	SharedWithGroups *[]any `json:"shared_with_groups,omitempty"`
	ShowDiffPreviewInEmail *bool `json:"show_diff_preview_in_email,omitempty"`
	SnippetsAccessLevel *string `json:"snippets_access_level,omitempty"`
	SnippetsEnabled *bool `json:"snippets_enabled,omitempty"`
	SppRepositoryPipelineAccess *bool `json:"spp_repository_pipeline_access,omitempty"`
	SquashCommitTemplate *string `json:"squash_commit_template,omitempty"`
	SquashOption *string `json:"squash_option,omitempty"`
	SshUrlToRepo *string `json:"ssh_url_to_repo,omitempty"`
	StarCount *int `json:"star_count,omitempty"`
	Statistics *map[string]any `json:"statistics,omitempty"`
	SuggestionCommitMessage *string `json:"suggestion_commit_message,omitempty"`
	TagList *[]any `json:"tag_list,omitempty"`
	Topics *[]any `json:"topics,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Visibility *string `json:"visibility,omitempty"`
	WarnAboutPotentiallyUnwantedCharacters *bool `json:"warn_about_potentially_unwanted_characters,omitempty"`
	WebBasedCommitSigningEnabled *string `json:"web_based_commit_signing_enabled,omitempty"`
	WebUrl *string `json:"web_url,omitempty"`
	WikiAccessLevel *string `json:"wiki_access_level,omitempty"`
	WikiEnabled *bool `json:"wiki_enabled,omitempty"`
}

// ProjectCreateData is the typed request payload for Project.CreateTyped.
type ProjectCreateData struct {
	AllowMergeOnSkippedPipeline *bool `json:"allow_merge_on_skipped_pipeline,omitempty"`
	AllowPipelineTriggerApproveDeployment *bool `json:"allow_pipeline_trigger_approve_deployment,omitempty"`
	AnalyticsAccessLevel *string `json:"analytics_access_level,omitempty"`
	ApprovalsBeforeMerge *string `json:"approvals_before_merge,omitempty"`
	Archived *bool `json:"archived,omitempty"`
	AutoCancelPendingPipelines *string `json:"auto_cancel_pending_pipelines,omitempty"`
	AutoDevopsDeployStrategy *string `json:"auto_devops_deploy_strategy,omitempty"`
	AutoDevopsEnabled *bool `json:"auto_devops_enabled,omitempty"`
	AutoDuoCodeReviewEnabled *string `json:"auto_duo_code_review_enabled,omitempty"`
	AutocloseReferencedIssues *bool `json:"autoclose_referenced_issues,omitempty"`
	AvatarUrl *string `json:"avatar_url,omitempty"`
	BuildGitStrategy *string `json:"build_git_strategy,omitempty"`
	BuildTimeout *int `json:"build_timeout,omitempty"`
	BuildsAccessLevel *string `json:"builds_access_level,omitempty"`
	CanCreateMergeRequestIn *bool `json:"can_create_merge_request_in,omitempty"`
	CiAllowForkPipelinesToRunInParentProject *bool `json:"ci_allow_fork_pipelines_to_run_in_parent_project,omitempty"`
	CiConfigPath *string `json:"ci_config_path,omitempty"`
	CiDefaultGitDepth *int `json:"ci_default_git_depth,omitempty"`
	CiDeletePipelinesInSeconds *int `json:"ci_delete_pipelines_in_seconds,omitempty"`
	CiForwardDeploymentEnabled *bool `json:"ci_forward_deployment_enabled,omitempty"`
	CiForwardDeploymentRollbackAllowed *bool `json:"ci_forward_deployment_rollback_allowed,omitempty"`
	CiIdTokenSubClaimComponents *[]any `json:"ci_id_token_sub_claim_components,omitempty"`
	CiJobTokenScopeEnabled *bool `json:"ci_job_token_scope_enabled,omitempty"`
	CiPipelineVariablesMinimumOverrideRole *string `json:"ci_pipeline_variables_minimum_override_role,omitempty"`
	CiPushRepositoryForJobTokenAllowed *bool `json:"ci_push_repository_for_job_token_allowed,omitempty"`
	CiRestrictPipelineCancellationRole *string `json:"ci_restrict_pipeline_cancellation_role,omitempty"`
	CiSeparatedCaches *bool `json:"ci_separated_caches,omitempty"`
	ComplianceFrameworks *string `json:"compliance_frameworks,omitempty"`
	ContainerExpirationPolicy *map[string]any `json:"container_expiration_policy,omitempty"`
	ContainerRegistryAccessLevel *string `json:"container_registry_access_level,omitempty"`
	ContainerRegistryEnabled *bool `json:"container_registry_enabled,omitempty"`
	ContainerRegistryImagePrefix *string `json:"container_registry_image_prefix,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	CreatorId *int `json:"creator_id,omitempty"`
	CustomAttributes *map[string]any `json:"custom_attributes,omitempty"`
	DefaultBranch *string `json:"default_branch,omitempty"`
	Description *string `json:"description,omitempty"`
	DescriptionHtml *string `json:"description_html,omitempty"`
	DuoRemoteFlowsEnabled *string `json:"duo_remote_flows_enabled,omitempty"`
	EmailsDisabled *bool `json:"emails_disabled,omitempty"`
	EmailsEnabled *bool `json:"emails_enabled,omitempty"`
	EmptyRepo *bool `json:"empty_repo,omitempty"`
	EnforceAuthChecksOnUploads *bool `json:"enforce_auth_checks_on_uploads,omitempty"`
	EnvironmentsAccessLevel *string `json:"environments_access_level,omitempty"`
	ExternalAuthorizationClassificationLabel *string `json:"external_authorization_classification_label,omitempty"`
	FeatureFlagsAccessLevel *string `json:"feature_flags_access_level,omitempty"`
	ForkedFromProject *map[string]any `json:"forked_from_project,omitempty"`
	ForkingAccessLevel *string `json:"forking_access_level,omitempty"`
	ForksCount *int `json:"forks_count,omitempty"`
	GroupRunnersEnabled *bool `json:"group_runners_enabled,omitempty"`
	HttpUrlToRepo *string `json:"http_url_to_repo,omitempty"`
	Id *int `json:"id,omitempty"`
	ImportError *string `json:"import_error,omitempty"`
	ImportStatus *string `json:"import_status,omitempty"`
	ImportType *string `json:"import_type,omitempty"`
	ImportUrl *string `json:"import_url,omitempty"`
	InfrastructureAccessLevel *string `json:"infrastructure_access_level,omitempty"`
	IssueBranchTemplate *string `json:"issue_branch_template,omitempty"`
	IssuesAccessLevel *string `json:"issues_access_level,omitempty"`
	IssuesEnabled *bool `json:"issues_enabled,omitempty"`
	IssuesTemplate *string `json:"issues_template,omitempty"`
	JobsEnabled *bool `json:"jobs_enabled,omitempty"`
	KeepLatestArtifact *bool `json:"keep_latest_artifact,omitempty"`
	LastActivityAt *string `json:"last_activity_at,omitempty"`
	LfsEnabled *bool `json:"lfs_enabled,omitempty"`
	License *map[string]any `json:"license,omitempty"`
	LicenseUrl *string `json:"license_url,omitempty"`
	Links *map[string]any `json:"links,omitempty"`
	MarkedForDeletionAt *string `json:"marked_for_deletion_at,omitempty"`
	MarkedForDeletionOn *string `json:"marked_for_deletion_on,omitempty"`
	MaxArtifactsSize *int `json:"max_artifacts_size,omitempty"`
	MergeCommitTemplate *string `json:"merge_commit_template,omitempty"`
	MergeMethod *string `json:"merge_method,omitempty"`
	MergePipelinesEnabled *string `json:"merge_pipelines_enabled,omitempty"`
	MergeRequestTitleRegex *string `json:"merge_request_title_regex,omitempty"`
	MergeRequestTitleRegexDescription *string `json:"merge_request_title_regex_description,omitempty"`
	MergeRequestsAccessLevel *string `json:"merge_requests_access_level,omitempty"`
	MergeRequestsEnabled *bool `json:"merge_requests_enabled,omitempty"`
	MergeRequestsTemplate *string `json:"merge_requests_template,omitempty"`
	MergeTrainsEnabled *string `json:"merge_trains_enabled,omitempty"`
	MergeTrainsSkipTrainAllowed *string `json:"merge_trains_skip_train_allowed,omitempty"`
	Mirror *string `json:"mirror,omitempty"`
	MirrorOverwritesDivergedBranches *string `json:"mirror_overwrites_diverged_branches,omitempty"`
	MirrorTriggerBuilds *string `json:"mirror_trigger_builds,omitempty"`
	MirrorUserId *string `json:"mirror_user_id,omitempty"`
	ModelExperimentsAccessLevel *string `json:"model_experiments_access_level,omitempty"`
	ModelRegistryAccessLevel *string `json:"model_registry_access_level,omitempty"`
	MonitorAccessLevel *string `json:"monitor_access_level,omitempty"`
	MrDefaultTargetSelf *bool `json:"mr_default_target_self,omitempty"`
	Name *string `json:"name,omitempty"`
	NameWithNamespace *string `json:"name_with_namespace,omitempty"`
	Namespace *map[string]any `json:"namespace,omitempty"`
	OnlyAllowMergeIfAllDiscussionsAreResolved *bool `json:"only_allow_merge_if_all_discussions_are_resolved,omitempty"`
	OnlyAllowMergeIfAllStatusChecksPassed *string `json:"only_allow_merge_if_all_status_checks_passed,omitempty"`
	OnlyAllowMergeIfPipelineSucceeds *bool `json:"only_allow_merge_if_pipeline_succeeds,omitempty"`
	OnlyMirrorProtectedBranches *string `json:"only_mirror_protected_branches,omitempty"`
	OpenIssuesCount *int `json:"open_issues_count,omitempty"`
	Owner *map[string]any `json:"owner,omitempty"`
	PackageRegistryAccessLevel *string `json:"package_registry_access_level,omitempty"`
	PackagesEnabled *bool `json:"packages_enabled,omitempty"`
	PagesAccessLevel *string `json:"pages_access_level,omitempty"`
	Path *string `json:"path,omitempty"`
	PathWithNamespace *string `json:"path_with_namespace,omitempty"`
	PreReceiveSecretDetectionEnabled *bool `json:"pre_receive_secret_detection_enabled,omitempty"`
	PreventMergeWithoutJiraIssue *string `json:"prevent_merge_without_jira_issue,omitempty"`
	PrintingMergeRequestLinkEnabled *bool `json:"printing_merge_request_link_enabled,omitempty"`
	PublicJobs *bool `json:"public_jobs,omitempty"`
	ReadmeUrl *string `json:"readme_url,omitempty"`
	ReleasesAccessLevel *string `json:"releases_access_level,omitempty"`
	RemoveSourceBranchAfterMerge *bool `json:"remove_source_branch_after_merge,omitempty"`
	RepositoryAccessLevel *string `json:"repository_access_level,omitempty"`
	RepositoryObjectFormat *string `json:"repository_object_format,omitempty"`
	RepositoryStorage *string `json:"repository_storage,omitempty"`
	RequestAccessEnabled *bool `json:"request_access_enabled,omitempty"`
	RequirementsAccessLevel *string `json:"requirements_access_level,omitempty"`
	RequirementsEnabled *string `json:"requirements_enabled,omitempty"`
	ResolveOutdatedDiffDiscussions *bool `json:"resolve_outdated_diff_discussions,omitempty"`
	ResourceGroupDefaultProcessMode *string `json:"resource_group_default_process_mode,omitempty"`
	RestrictUserDefinedVariables *bool `json:"restrict_user_defined_variables,omitempty"`
	RunnerTokenExpirationInterval *int `json:"runner_token_expiration_interval,omitempty"`
	RunnersToken *string `json:"runners_token,omitempty"`
	SecretPushProtectionEnabled *bool `json:"secret_push_protection_enabled,omitempty"`
	SecurityAndComplianceAccessLevel *string `json:"security_and_compliance_access_level,omitempty"`
	SecurityAndComplianceEnabled *string `json:"security_and_compliance_enabled,omitempty"`
	ServiceDeskAddress *string `json:"service_desk_address,omitempty"`
	ServiceDeskEnabled *bool `json:"service_desk_enabled,omitempty"`
	SharedRunnersEnabled *bool `json:"shared_runners_enabled,omitempty"`
	SharedWithGroups *[]any `json:"shared_with_groups,omitempty"`
	ShowDiffPreviewInEmail *bool `json:"show_diff_preview_in_email,omitempty"`
	SnippetsAccessLevel *string `json:"snippets_access_level,omitempty"`
	SnippetsEnabled *bool `json:"snippets_enabled,omitempty"`
	SppRepositoryPipelineAccess *bool `json:"spp_repository_pipeline_access,omitempty"`
	SquashCommitTemplate *string `json:"squash_commit_template,omitempty"`
	SquashOption *string `json:"squash_option,omitempty"`
	SshUrlToRepo *string `json:"ssh_url_to_repo,omitempty"`
	StarCount *int `json:"star_count,omitempty"`
	Statistics *map[string]any `json:"statistics,omitempty"`
	SuggestionCommitMessage *string `json:"suggestion_commit_message,omitempty"`
	TagList *[]any `json:"tag_list,omitempty"`
	Topics *[]any `json:"topics,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Visibility *string `json:"visibility,omitempty"`
	WarnAboutPotentiallyUnwantedCharacters *bool `json:"warn_about_potentially_unwanted_characters,omitempty"`
	WebBasedCommitSigningEnabled *string `json:"web_based_commit_signing_enabled,omitempty"`
	WebUrl *string `json:"web_url,omitempty"`
	WikiAccessLevel *string `json:"wiki_access_level,omitempty"`
	WikiEnabled *bool `json:"wiki_enabled,omitempty"`
}

// ProjectUpdateData is the typed request payload for Project.UpdateTyped.
type ProjectUpdateData struct {
	Id string `json:"id"`
	AllowMergeOnSkippedPipeline *bool `json:"allow_merge_on_skipped_pipeline,omitempty"`
	AllowPipelineTriggerApproveDeployment *bool `json:"allow_pipeline_trigger_approve_deployment,omitempty"`
	AnalyticsAccessLevel *string `json:"analytics_access_level,omitempty"`
	ApprovalsBeforeMerge *string `json:"approvals_before_merge,omitempty"`
	Archived *bool `json:"archived,omitempty"`
	AutoCancelPendingPipelines *string `json:"auto_cancel_pending_pipelines,omitempty"`
	AutoDevopsDeployStrategy *string `json:"auto_devops_deploy_strategy,omitempty"`
	AutoDevopsEnabled *bool `json:"auto_devops_enabled,omitempty"`
	AutoDuoCodeReviewEnabled *string `json:"auto_duo_code_review_enabled,omitempty"`
	AutocloseReferencedIssues *bool `json:"autoclose_referenced_issues,omitempty"`
	AvatarUrl *string `json:"avatar_url,omitempty"`
	BuildGitStrategy *string `json:"build_git_strategy,omitempty"`
	BuildTimeout *int `json:"build_timeout,omitempty"`
	BuildsAccessLevel *string `json:"builds_access_level,omitempty"`
	CanCreateMergeRequestIn *bool `json:"can_create_merge_request_in,omitempty"`
	CiAllowForkPipelinesToRunInParentProject *bool `json:"ci_allow_fork_pipelines_to_run_in_parent_project,omitempty"`
	CiConfigPath *string `json:"ci_config_path,omitempty"`
	CiDefaultGitDepth *int `json:"ci_default_git_depth,omitempty"`
	CiDeletePipelinesInSeconds *int `json:"ci_delete_pipelines_in_seconds,omitempty"`
	CiForwardDeploymentEnabled *bool `json:"ci_forward_deployment_enabled,omitempty"`
	CiForwardDeploymentRollbackAllowed *bool `json:"ci_forward_deployment_rollback_allowed,omitempty"`
	CiIdTokenSubClaimComponents *[]any `json:"ci_id_token_sub_claim_components,omitempty"`
	CiJobTokenScopeEnabled *bool `json:"ci_job_token_scope_enabled,omitempty"`
	CiPipelineVariablesMinimumOverrideRole *string `json:"ci_pipeline_variables_minimum_override_role,omitempty"`
	CiPushRepositoryForJobTokenAllowed *bool `json:"ci_push_repository_for_job_token_allowed,omitempty"`
	CiRestrictPipelineCancellationRole *string `json:"ci_restrict_pipeline_cancellation_role,omitempty"`
	CiSeparatedCaches *bool `json:"ci_separated_caches,omitempty"`
	ComplianceFrameworks *string `json:"compliance_frameworks,omitempty"`
	ContainerExpirationPolicy *map[string]any `json:"container_expiration_policy,omitempty"`
	ContainerRegistryAccessLevel *string `json:"container_registry_access_level,omitempty"`
	ContainerRegistryEnabled *bool `json:"container_registry_enabled,omitempty"`
	ContainerRegistryImagePrefix *string `json:"container_registry_image_prefix,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	CreatorId *int `json:"creator_id,omitempty"`
	CustomAttributes *map[string]any `json:"custom_attributes,omitempty"`
	DefaultBranch *string `json:"default_branch,omitempty"`
	Description *string `json:"description,omitempty"`
	DescriptionHtml *string `json:"description_html,omitempty"`
	DuoRemoteFlowsEnabled *string `json:"duo_remote_flows_enabled,omitempty"`
	EmailsDisabled *bool `json:"emails_disabled,omitempty"`
	EmailsEnabled *bool `json:"emails_enabled,omitempty"`
	EmptyRepo *bool `json:"empty_repo,omitempty"`
	EnforceAuthChecksOnUploads *bool `json:"enforce_auth_checks_on_uploads,omitempty"`
	EnvironmentsAccessLevel *string `json:"environments_access_level,omitempty"`
	ExternalAuthorizationClassificationLabel *string `json:"external_authorization_classification_label,omitempty"`
	FeatureFlagsAccessLevel *string `json:"feature_flags_access_level,omitempty"`
	ForkedFromProject *map[string]any `json:"forked_from_project,omitempty"`
	ForkingAccessLevel *string `json:"forking_access_level,omitempty"`
	ForksCount *int `json:"forks_count,omitempty"`
	GroupRunnersEnabled *bool `json:"group_runners_enabled,omitempty"`
	HttpUrlToRepo *string `json:"http_url_to_repo,omitempty"`
	ImportError *string `json:"import_error,omitempty"`
	ImportStatus *string `json:"import_status,omitempty"`
	ImportType *string `json:"import_type,omitempty"`
	ImportUrl *string `json:"import_url,omitempty"`
	InfrastructureAccessLevel *string `json:"infrastructure_access_level,omitempty"`
	IssueBranchTemplate *string `json:"issue_branch_template,omitempty"`
	IssuesAccessLevel *string `json:"issues_access_level,omitempty"`
	IssuesEnabled *bool `json:"issues_enabled,omitempty"`
	IssuesTemplate *string `json:"issues_template,omitempty"`
	JobsEnabled *bool `json:"jobs_enabled,omitempty"`
	KeepLatestArtifact *bool `json:"keep_latest_artifact,omitempty"`
	LastActivityAt *string `json:"last_activity_at,omitempty"`
	LfsEnabled *bool `json:"lfs_enabled,omitempty"`
	License *map[string]any `json:"license,omitempty"`
	LicenseUrl *string `json:"license_url,omitempty"`
	Links *map[string]any `json:"links,omitempty"`
	MarkedForDeletionAt *string `json:"marked_for_deletion_at,omitempty"`
	MarkedForDeletionOn *string `json:"marked_for_deletion_on,omitempty"`
	MaxArtifactsSize *int `json:"max_artifacts_size,omitempty"`
	MergeCommitTemplate *string `json:"merge_commit_template,omitempty"`
	MergeMethod *string `json:"merge_method,omitempty"`
	MergePipelinesEnabled *string `json:"merge_pipelines_enabled,omitempty"`
	MergeRequestTitleRegex *string `json:"merge_request_title_regex,omitempty"`
	MergeRequestTitleRegexDescription *string `json:"merge_request_title_regex_description,omitempty"`
	MergeRequestsAccessLevel *string `json:"merge_requests_access_level,omitempty"`
	MergeRequestsEnabled *bool `json:"merge_requests_enabled,omitempty"`
	MergeRequestsTemplate *string `json:"merge_requests_template,omitempty"`
	MergeTrainsEnabled *string `json:"merge_trains_enabled,omitempty"`
	MergeTrainsSkipTrainAllowed *string `json:"merge_trains_skip_train_allowed,omitempty"`
	Mirror *string `json:"mirror,omitempty"`
	MirrorOverwritesDivergedBranches *string `json:"mirror_overwrites_diverged_branches,omitempty"`
	MirrorTriggerBuilds *string `json:"mirror_trigger_builds,omitempty"`
	MirrorUserId *string `json:"mirror_user_id,omitempty"`
	ModelExperimentsAccessLevel *string `json:"model_experiments_access_level,omitempty"`
	ModelRegistryAccessLevel *string `json:"model_registry_access_level,omitempty"`
	MonitorAccessLevel *string `json:"monitor_access_level,omitempty"`
	MrDefaultTargetSelf *bool `json:"mr_default_target_self,omitempty"`
	Name *string `json:"name,omitempty"`
	NameWithNamespace *string `json:"name_with_namespace,omitempty"`
	Namespace *map[string]any `json:"namespace,omitempty"`
	OnlyAllowMergeIfAllDiscussionsAreResolved *bool `json:"only_allow_merge_if_all_discussions_are_resolved,omitempty"`
	OnlyAllowMergeIfAllStatusChecksPassed *string `json:"only_allow_merge_if_all_status_checks_passed,omitempty"`
	OnlyAllowMergeIfPipelineSucceeds *bool `json:"only_allow_merge_if_pipeline_succeeds,omitempty"`
	OnlyMirrorProtectedBranches *string `json:"only_mirror_protected_branches,omitempty"`
	OpenIssuesCount *int `json:"open_issues_count,omitempty"`
	Owner *map[string]any `json:"owner,omitempty"`
	PackageRegistryAccessLevel *string `json:"package_registry_access_level,omitempty"`
	PackagesEnabled *bool `json:"packages_enabled,omitempty"`
	PagesAccessLevel *string `json:"pages_access_level,omitempty"`
	Path *string `json:"path,omitempty"`
	PathWithNamespace *string `json:"path_with_namespace,omitempty"`
	PreReceiveSecretDetectionEnabled *bool `json:"pre_receive_secret_detection_enabled,omitempty"`
	PreventMergeWithoutJiraIssue *string `json:"prevent_merge_without_jira_issue,omitempty"`
	PrintingMergeRequestLinkEnabled *bool `json:"printing_merge_request_link_enabled,omitempty"`
	PublicJobs *bool `json:"public_jobs,omitempty"`
	ReadmeUrl *string `json:"readme_url,omitempty"`
	ReleasesAccessLevel *string `json:"releases_access_level,omitempty"`
	RemoveSourceBranchAfterMerge *bool `json:"remove_source_branch_after_merge,omitempty"`
	RepositoryAccessLevel *string `json:"repository_access_level,omitempty"`
	RepositoryObjectFormat *string `json:"repository_object_format,omitempty"`
	RepositoryStorage *string `json:"repository_storage,omitempty"`
	RequestAccessEnabled *bool `json:"request_access_enabled,omitempty"`
	RequirementsAccessLevel *string `json:"requirements_access_level,omitempty"`
	RequirementsEnabled *string `json:"requirements_enabled,omitempty"`
	ResolveOutdatedDiffDiscussions *bool `json:"resolve_outdated_diff_discussions,omitempty"`
	ResourceGroupDefaultProcessMode *string `json:"resource_group_default_process_mode,omitempty"`
	RestrictUserDefinedVariables *bool `json:"restrict_user_defined_variables,omitempty"`
	RunnerTokenExpirationInterval *int `json:"runner_token_expiration_interval,omitempty"`
	RunnersToken *string `json:"runners_token,omitempty"`
	SecretPushProtectionEnabled *bool `json:"secret_push_protection_enabled,omitempty"`
	SecurityAndComplianceAccessLevel *string `json:"security_and_compliance_access_level,omitempty"`
	SecurityAndComplianceEnabled *string `json:"security_and_compliance_enabled,omitempty"`
	ServiceDeskAddress *string `json:"service_desk_address,omitempty"`
	ServiceDeskEnabled *bool `json:"service_desk_enabled,omitempty"`
	SharedRunnersEnabled *bool `json:"shared_runners_enabled,omitempty"`
	SharedWithGroups *[]any `json:"shared_with_groups,omitempty"`
	ShowDiffPreviewInEmail *bool `json:"show_diff_preview_in_email,omitempty"`
	SnippetsAccessLevel *string `json:"snippets_access_level,omitempty"`
	SnippetsEnabled *bool `json:"snippets_enabled,omitempty"`
	SppRepositoryPipelineAccess *bool `json:"spp_repository_pipeline_access,omitempty"`
	SquashCommitTemplate *string `json:"squash_commit_template,omitempty"`
	SquashOption *string `json:"squash_option,omitempty"`
	SshUrlToRepo *string `json:"ssh_url_to_repo,omitempty"`
	StarCount *int `json:"star_count,omitempty"`
	Statistics *map[string]any `json:"statistics,omitempty"`
	SuggestionCommitMessage *string `json:"suggestion_commit_message,omitempty"`
	TagList *[]any `json:"tag_list,omitempty"`
	Topics *[]any `json:"topics,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Visibility *string `json:"visibility,omitempty"`
	WarnAboutPotentiallyUnwantedCharacters *bool `json:"warn_about_potentially_unwanted_characters,omitempty"`
	WebBasedCommitSigningEnabled *string `json:"web_based_commit_signing_enabled,omitempty"`
	WebUrl *string `json:"web_url,omitempty"`
	WikiAccessLevel *string `json:"wiki_access_level,omitempty"`
	WikiEnabled *bool `json:"wiki_enabled,omitempty"`
}

// ProjectRemoveMatch is the typed request payload for Project.RemoveTyped.
type ProjectRemoveMatch struct {
	Id string `json:"id"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
