// Typed models for the Gitlab SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// AccessRequest is the typed data model for the access_request entity.
type AccessRequest struct {
}

// AccessRequestRemoveMatch is the typed request payload for AccessRequest.RemoveTyped.
type AccessRequestRemoveMatch struct {
	GroupId *string `json:"group_id,omitempty"`
	Id string `json:"id"`
	ProjectId *string `json:"project_id,omitempty"`
}

// AlertManagement is the typed data model for the alert_management entity.
type AlertManagement struct {
}

// AlertManagementCreateData is the typed request payload for AlertManagement.CreateTyped.
type AlertManagementCreateData struct {
	AlertManagementAlertId string `json:"alert_management_alert_id"`
	ProjectId string `json:"project_id"`
}

// AlertManagementRemoveMatch is the typed request payload for AlertManagement.RemoveTyped.
type AlertManagementRemoveMatch struct {
	AlertManagementAlertId string `json:"alert_management_alert_id"`
	MetricImageId string `json:"metric_image_id"`
	ProjectId string `json:"project_id"`
}

// ApiEntitiesAccessRequester is the typed data model for the api_entities_access_requester entity.
type ApiEntitiesAccessRequester struct {
	AvatarPath *string `json:"avatar_path,omitempty"`
	AvatarUrl *string `json:"avatar_url,omitempty"`
	CustomAttribute *[]any `json:"custom_attribute,omitempty"`
	Id *int `json:"id,omitempty"`
	Key *string `json:"key,omitempty"`
	Locked *bool `json:"locked,omitempty"`
	Name *string `json:"name,omitempty"`
	PublicEmail *string `json:"public_email,omitempty"`
	RequestedAt *string `json:"requested_at,omitempty"`
	State *string `json:"state,omitempty"`
	Username *string `json:"username,omitempty"`
	Value *string `json:"value,omitempty"`
	WebUrl *string `json:"web_url,omitempty"`
}

// ApiEntitiesAccessRequesterListMatch is the typed request payload for ApiEntitiesAccessRequester.ListTyped.
type ApiEntitiesAccessRequesterListMatch struct {
	GroupId *string `json:"group_id,omitempty"`
	ProjectId *string `json:"project_id,omitempty"`
}

// ApiEntitiesAccessRequesterCreateData is the typed request payload for ApiEntitiesAccessRequester.CreateTyped.
type ApiEntitiesAccessRequesterCreateData struct {
	GroupId *string `json:"group_id,omitempty"`
	ProjectId *string `json:"project_id,omitempty"`
}

// ApiEntitiesAccessRequesterUpdateData is the typed request payload for ApiEntitiesAccessRequester.UpdateTyped.
type ApiEntitiesAccessRequesterUpdateData struct {
	AccessRequestId string `json:"access_request_id"`
	GroupId *string `json:"group_id,omitempty"`
	ProjectId *string `json:"project_id,omitempty"`
}

// ApiEntitiesAppearance is the typed data model for the api_entities_appearance entity.
type ApiEntitiesAppearance struct {
	Description *string `json:"description,omitempty"`
	EmailHeaderAndFooterEnabled *string `json:"email_header_and_footer_enabled,omitempty"`
	Favicon *string `json:"favicon,omitempty"`
	FooterMessage *string `json:"footer_message,omitempty"`
	HeaderLogo *string `json:"header_logo,omitempty"`
	HeaderMessage *string `json:"header_message,omitempty"`
	Logo *string `json:"logo,omitempty"`
	MemberGuideline *string `json:"member_guideline,omitempty"`
	MessageBackgroundColor *string `json:"message_background_color,omitempty"`
	MessageFontColor *string `json:"message_font_color,omitempty"`
	NewProjectGuideline *string `json:"new_project_guideline,omitempty"`
	ProfileImageGuideline *string `json:"profile_image_guideline,omitempty"`
	PwaDescription *string `json:"pwa_description,omitempty"`
	PwaIcon *string `json:"pwa_icon,omitempty"`
	PwaName *string `json:"pwa_name,omitempty"`
	PwaShortName *string `json:"pwa_short_name,omitempty"`
	Title *string `json:"title,omitempty"`
}

// ApiEntitiesAppearanceLoadMatch is the typed request payload for ApiEntitiesAppearance.LoadTyped.
type ApiEntitiesAppearanceLoadMatch struct {
	Description *string `json:"description,omitempty"`
	EmailHeaderAndFooterEnabled *string `json:"email_header_and_footer_enabled,omitempty"`
	Favicon *string `json:"favicon,omitempty"`
	FooterMessage *string `json:"footer_message,omitempty"`
	HeaderLogo *string `json:"header_logo,omitempty"`
	HeaderMessage *string `json:"header_message,omitempty"`
	Logo *string `json:"logo,omitempty"`
	MemberGuideline *string `json:"member_guideline,omitempty"`
	MessageBackgroundColor *string `json:"message_background_color,omitempty"`
	MessageFontColor *string `json:"message_font_color,omitempty"`
	NewProjectGuideline *string `json:"new_project_guideline,omitempty"`
	ProfileImageGuideline *string `json:"profile_image_guideline,omitempty"`
	PwaDescription *string `json:"pwa_description,omitempty"`
	PwaIcon *string `json:"pwa_icon,omitempty"`
	PwaName *string `json:"pwa_name,omitempty"`
	PwaShortName *string `json:"pwa_short_name,omitempty"`
	Title *string `json:"title,omitempty"`
}

// ApiEntitiesAppearanceUpdateData is the typed request payload for ApiEntitiesAppearance.UpdateTyped.
type ApiEntitiesAppearanceUpdateData struct {
	Description *string `json:"description,omitempty"`
	EmailHeaderAndFooterEnabled *string `json:"email_header_and_footer_enabled,omitempty"`
	Favicon *string `json:"favicon,omitempty"`
	FooterMessage *string `json:"footer_message,omitempty"`
	HeaderLogo *string `json:"header_logo,omitempty"`
	HeaderMessage *string `json:"header_message,omitempty"`
	Logo *string `json:"logo,omitempty"`
	MemberGuideline *string `json:"member_guideline,omitempty"`
	MessageBackgroundColor *string `json:"message_background_color,omitempty"`
	MessageFontColor *string `json:"message_font_color,omitempty"`
	NewProjectGuideline *string `json:"new_project_guideline,omitempty"`
	ProfileImageGuideline *string `json:"profile_image_guideline,omitempty"`
	PwaDescription *string `json:"pwa_description,omitempty"`
	PwaIcon *string `json:"pwa_icon,omitempty"`
	PwaName *string `json:"pwa_name,omitempty"`
	PwaShortName *string `json:"pwa_short_name,omitempty"`
	Title *string `json:"title,omitempty"`
}

// ApiEntitiesApplication is the typed data model for the api_entities_application entity.
type ApiEntitiesApplication struct {
	ApplicationId *string `json:"application_id,omitempty"`
	ApplicationName *string `json:"application_name,omitempty"`
	CallbackUrl *string `json:"callback_url,omitempty"`
	Confidential *bool `json:"confidential,omitempty"`
	Id *string `json:"id,omitempty"`
}

// ApiEntitiesApplicationListMatch is the typed request payload for ApiEntitiesApplication.ListTyped.
type ApiEntitiesApplicationListMatch struct {
	ApplicationId *string `json:"application_id,omitempty"`
	ApplicationName *string `json:"application_name,omitempty"`
	CallbackUrl *string `json:"callback_url,omitempty"`
	Confidential *bool `json:"confidential,omitempty"`
	Id *string `json:"id,omitempty"`
}

// ApiEntitiesApplicationStatistic is the typed data model for the api_entities_application_statistic entity.
type ApiEntitiesApplicationStatistic struct {
	ActiveUser *int `json:"active_user,omitempty"`
	Fork *int `json:"fork,omitempty"`
	Group *int `json:"group,omitempty"`
	Issue *int `json:"issue,omitempty"`
	MergeRequest *int `json:"merge_request,omitempty"`
	Milestone *int `json:"milestone,omitempty"`
	Note *int `json:"note,omitempty"`
	Project *int `json:"project,omitempty"`
	Snippet *int `json:"snippet,omitempty"`
	SshKey *int `json:"ssh_key,omitempty"`
	User *int `json:"user,omitempty"`
}

// ApiEntitiesApplicationStatisticLoadMatch is the typed request payload for ApiEntitiesApplicationStatistic.LoadTyped.
type ApiEntitiesApplicationStatisticLoadMatch struct {
	ActiveUser *int `json:"active_user,omitempty"`
	Fork *int `json:"fork,omitempty"`
	Group *int `json:"group,omitempty"`
	Issue *int `json:"issue,omitempty"`
	MergeRequest *int `json:"merge_request,omitempty"`
	Milestone *int `json:"milestone,omitempty"`
	Note *int `json:"note,omitempty"`
	Project *int `json:"project,omitempty"`
	Snippet *int `json:"snippet,omitempty"`
	SshKey *int `json:"ssh_key,omitempty"`
	User *int `json:"user,omitempty"`
}

// ApiEntitiesApplicationWithSecret is the typed data model for the api_entities_application_with_secret entity.
type ApiEntitiesApplicationWithSecret struct {
	ApplicationId *string `json:"application_id,omitempty"`
	ApplicationName *string `json:"application_name,omitempty"`
	CallbackUrl *string `json:"callback_url,omitempty"`
	Confidential *bool `json:"confidential,omitempty"`
	Id *string `json:"id,omitempty"`
	Secret *string `json:"secret,omitempty"`
}

// ApiEntitiesApplicationWithSecretCreateData is the typed request payload for ApiEntitiesApplicationWithSecret.CreateTyped.
type ApiEntitiesApplicationWithSecretCreateData struct {
	ApplicationId *string `json:"application_id,omitempty"`
}

// ApiEntitiesAvatar is the typed data model for the api_entities_avatar entity.
type ApiEntitiesAvatar struct {
	AvatarUrl *string `json:"avatar_url,omitempty"`
}

// ApiEntitiesAvatarLoadMatch is the typed request payload for ApiEntitiesAvatar.LoadTyped.
type ApiEntitiesAvatarLoadMatch struct {
	AvatarUrl *string `json:"avatar_url,omitempty"`
}

// ApiEntitiesAwardEmoji is the typed data model for the api_entities_award_emoji entity.
type ApiEntitiesAwardEmoji struct {
	AwardableId *int `json:"awardable_id,omitempty"`
	AwardableType *string `json:"awardable_type,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Id *int `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Url *string `json:"url,omitempty"`
	User *map[string]any `json:"user,omitempty"`
}

// ApiEntitiesAwardEmojiLoadMatch is the typed request payload for ApiEntitiesAwardEmoji.LoadTyped.
type ApiEntitiesAwardEmojiLoadMatch struct {
	EpicId *string `json:"epic_id,omitempty"`
	GroupId *string `json:"group_id,omitempty"`
	Id string `json:"id"`
	NoteId *string `json:"note_id,omitempty"`
	IssueId *string `json:"issue_id,omitempty"`
	ProjectId *string `json:"project_id,omitempty"`
	MergeRequestId *string `json:"merge_request_id,omitempty"`
	SnippetId *string `json:"snippet_id,omitempty"`
}

// ApiEntitiesAwardEmojiListMatch is the typed request payload for ApiEntitiesAwardEmoji.ListTyped.
type ApiEntitiesAwardEmojiListMatch struct {
	EpicId *string `json:"epic_id,omitempty"`
	GroupId *string `json:"group_id,omitempty"`
	NoteId *string `json:"note_id,omitempty"`
	IssueId *string `json:"issue_id,omitempty"`
	ProjectId *string `json:"project_id,omitempty"`
	MergeRequestId *string `json:"merge_request_id,omitempty"`
	SnippetId *string `json:"snippet_id,omitempty"`
}

// ApiEntitiesAwardEmojiCreateData is the typed request payload for ApiEntitiesAwardEmoji.CreateTyped.
type ApiEntitiesAwardEmojiCreateData struct {
	EpicId *string `json:"epic_id,omitempty"`
	GroupId *string `json:"group_id,omitempty"`
	NoteId *string `json:"note_id,omitempty"`
	IssueId *string `json:"issue_id,omitempty"`
	ProjectId *string `json:"project_id,omitempty"`
	MergeRequestId *string `json:"merge_request_id,omitempty"`
	SnippetId *string `json:"snippet_id,omitempty"`
}

// ApiEntitiesBadge is the typed data model for the api_entities_badge entity.
type ApiEntitiesBadge struct {
	Id *string `json:"id,omitempty"`
	ImageUrl *string `json:"image_url,omitempty"`
	Kind *string `json:"kind,omitempty"`
	LinkUrl *string `json:"link_url,omitempty"`
	Name *string `json:"name,omitempty"`
	RenderedImageUrl *string `json:"rendered_image_url,omitempty"`
	RenderedLinkUrl *string `json:"rendered_link_url,omitempty"`
}

// ApiEntitiesBadgeLoadMatch is the typed request payload for ApiEntitiesBadge.LoadTyped.
type ApiEntitiesBadgeLoadMatch struct {
	GroupId *string `json:"group_id,omitempty"`
	Id string `json:"id"`
	ProjectId *string `json:"project_id,omitempty"`
}

// ApiEntitiesBadgeListMatch is the typed request payload for ApiEntitiesBadge.ListTyped.
type ApiEntitiesBadgeListMatch struct {
	GroupId *string `json:"group_id,omitempty"`
	ProjectId *string `json:"project_id,omitempty"`
}

// ApiEntitiesBadgeCreateData is the typed request payload for ApiEntitiesBadge.CreateTyped.
type ApiEntitiesBadgeCreateData struct {
	GroupId *string `json:"group_id,omitempty"`
	ProjectId *string `json:"project_id,omitempty"`
}

// ApiEntitiesBadgeUpdateData is the typed request payload for ApiEntitiesBadge.UpdateTyped.
type ApiEntitiesBadgeUpdateData struct {
	GroupId *string `json:"group_id,omitempty"`
	Id string `json:"id"`
	ProjectId *string `json:"project_id,omitempty"`
}

// ApiEntitiesBasicBadgeDetail is the typed data model for the api_entities_basic_badge_detail entity.
type ApiEntitiesBasicBadgeDetail struct {
	ImageUrl *string `json:"image_url,omitempty"`
	LinkUrl *string `json:"link_url,omitempty"`
	Name *string `json:"name,omitempty"`
	RenderedImageUrl *string `json:"rendered_image_url,omitempty"`
	RenderedLinkUrl *string `json:"rendered_link_url,omitempty"`
}

// ApiEntitiesBasicBadgeDetailLoadMatch is the typed request payload for ApiEntitiesBasicBadgeDetail.LoadTyped.
type ApiEntitiesBasicBadgeDetailLoadMatch struct {
	GroupId *string `json:"group_id,omitempty"`
	ProjectId *string `json:"project_id,omitempty"`
}

// ApiEntitiesBasicGroupDetail is the typed data model for the api_entities_basic_group_detail entity.
type ApiEntitiesBasicGroupDetail struct {
}

// ApiEntitiesBasicGroupDetailCreateData is the typed request payload for ApiEntitiesBasicGroupDetail.CreateTyped.
type ApiEntitiesBasicGroupDetailCreateData struct {
	ProjectId string `json:"project_id"`
}

// ApiEntitiesBasicProjectDetail is the typed data model for the api_entities_basic_project_detail entity.
type ApiEntitiesBasicProjectDetail struct {
	AvatarUrl *string `json:"avatar_url,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	CustomAttribute *map[string]any `json:"custom_attribute,omitempty"`
	DefaultBranch *string `json:"default_branch,omitempty"`
	Description *string `json:"description,omitempty"`
	ForksCount *int `json:"forks_count,omitempty"`
	HttpUrlToRepo *string `json:"http_url_to_repo,omitempty"`
	Id *int `json:"id,omitempty"`
	LastActivityAt *string `json:"last_activity_at,omitempty"`
	License *map[string]any `json:"license,omitempty"`
	LicenseUrl *string `json:"license_url,omitempty"`
	Name *string `json:"name,omitempty"`
	NameWithNamespace *string `json:"name_with_namespace,omitempty"`
	Namespace *map[string]any `json:"namespace,omitempty"`
	Path *string `json:"path,omitempty"`
	PathWithNamespace *string `json:"path_with_namespace,omitempty"`
	ReadmeUrl *string `json:"readme_url,omitempty"`
	RepositoryStorage *string `json:"repository_storage,omitempty"`
	SshUrlToRepo *string `json:"ssh_url_to_repo,omitempty"`
	StarCount *int `json:"star_count,omitempty"`
	TagList *[]any `json:"tag_list,omitempty"`
	Topic *[]any `json:"topic,omitempty"`
	Visibility *string `json:"visibility,omitempty"`
	WebUrl *string `json:"web_url,omitempty"`
}

// ApiEntitiesBasicProjectDetailListMatch is the typed request payload for ApiEntitiesBasicProjectDetail.ListTyped.
type ApiEntitiesBasicProjectDetailListMatch struct {
	UserId *string `json:"user_id,omitempty"`
	ProjectId *string `json:"project_id,omitempty"`
}

// ApiEntitiesBasicProjectDetailCreateData is the typed request payload for ApiEntitiesBasicProjectDetail.CreateTyped.
type ApiEntitiesBasicProjectDetailCreateData struct {
	ProjectId string `json:"project_id"`
}

// ApiEntitiesBasicRef is the typed data model for the api_entities_basic_ref entity.
type ApiEntitiesBasicRef struct {
	Name *string `json:"name,omitempty"`
	Type *string `json:"type,omitempty"`
}

// ApiEntitiesBasicRefListMatch is the typed request payload for ApiEntitiesBasicRef.ListTyped.
type ApiEntitiesBasicRefListMatch struct {
	ProjectId string `json:"project_id"`
	Sha any `json:"sha"`
}

// ApiEntitiesBasicSuccess is the typed data model for the api_entities_basic_success entity.
type ApiEntitiesBasicSuccess struct {
}

// ApiEntitiesBasicSuccessCreateData is the typed request payload for ApiEntitiesBasicSuccess.CreateTyped.
type ApiEntitiesBasicSuccessCreateData struct {
}

// ApiEntitiesBatchedBackgroundMigration is the typed data model for the api_entities_batched_background_migration entity.
type ApiEntitiesBatchedBackgroundMigration struct {
	ColumnName *string `json:"column_name,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Id *string `json:"id,omitempty"`
	JobClassName *string `json:"job_class_name,omitempty"`
	Progress *float64 `json:"progress,omitempty"`
	Status *string `json:"status,omitempty"`
	TableName *string `json:"table_name,omitempty"`
}

// ApiEntitiesBatchedBackgroundMigrationLoadMatch is the typed request payload for ApiEntitiesBatchedBackgroundMigration.LoadTyped.
type ApiEntitiesBatchedBackgroundMigrationLoadMatch struct {
	Id string `json:"id"`
}

// ApiEntitiesBatchedBackgroundMigrationListMatch is the typed request payload for ApiEntitiesBatchedBackgroundMigration.ListTyped.
type ApiEntitiesBatchedBackgroundMigrationListMatch struct {
	ColumnName *string `json:"column_name,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Id *string `json:"id,omitempty"`
	JobClassName *string `json:"job_class_name,omitempty"`
	Progress *float64 `json:"progress,omitempty"`
	Status *string `json:"status,omitempty"`
	TableName *string `json:"table_name,omitempty"`
}

// ApiEntitiesBatchedBackgroundMigrationUpdateData is the typed request payload for ApiEntitiesBatchedBackgroundMigration.UpdateTyped.
type ApiEntitiesBatchedBackgroundMigrationUpdateData struct {
	BatchedBackgroundMigrationId string `json:"batched_background_migration_id"`
}

// ApiEntitiesBranch is the typed data model for the api_entities_branch entity.
type ApiEntitiesBranch struct {
	CanPush *bool `json:"can_push,omitempty"`
	Commit *map[string]any `json:"commit,omitempty"`
	Default *bool `json:"default,omitempty"`
	DevelopersCanMerge *bool `json:"developers_can_merge,omitempty"`
	DevelopersCanPush *bool `json:"developers_can_push,omitempty"`
	Merged *bool `json:"merged,omitempty"`
	Name *string `json:"name,omitempty"`
	Protected *bool `json:"protected,omitempty"`
	WebUrl *string `json:"web_url,omitempty"`
}

// ApiEntitiesBranchLoadMatch is the typed request payload for ApiEntitiesBranch.LoadTyped.
type ApiEntitiesBranchLoadMatch struct {
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
}

// ApiEntitiesBranchListMatch is the typed request payload for ApiEntitiesBranch.ListTyped.
type ApiEntitiesBranchListMatch struct {
	ProjectId string `json:"project_id"`
}

// ApiEntitiesBranchCreateData is the typed request payload for ApiEntitiesBranch.CreateTyped.
type ApiEntitiesBranchCreateData struct {
	ProjectId string `json:"project_id"`
}

// ApiEntitiesBranchUpdateData is the typed request payload for ApiEntitiesBranch.UpdateTyped.
type ApiEntitiesBranchUpdateData struct {
	BranchId string `json:"branch_id"`
	ProjectId string `json:"project_id"`
}

// ApiEntitiesBulkImport is the typed data model for the api_entities_bulk_import entity.
type ApiEntitiesBulkImport struct {
	BulkImportId *int `json:"bulk_import_id,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DestinationFullPath *string `json:"destination_full_path,omitempty"`
	DestinationName *string `json:"destination_name,omitempty"`
	DestinationNamespace *string `json:"destination_namespace,omitempty"`
	DestinationSlug *string `json:"destination_slug,omitempty"`
	EntityType *string `json:"entity_type,omitempty"`
	Failure *[]any `json:"failure,omitempty"`
	HasFailure *bool `json:"has_failure,omitempty"`
	Id *int `json:"id,omitempty"`
	MigrateMembership *bool `json:"migrate_membership,omitempty"`
	MigrateProject *bool `json:"migrate_project,omitempty"`
	NamespaceId *int `json:"namespace_id,omitempty"`
	ParentId *int `json:"parent_id,omitempty"`
	ProjectId *int `json:"project_id,omitempty"`
	SourceFullPath *string `json:"source_full_path,omitempty"`
	SourceType *string `json:"source_type,omitempty"`
	SourceUrl *string `json:"source_url,omitempty"`
	Stat *map[string]any `json:"stat,omitempty"`
	Status *string `json:"status,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// ApiEntitiesBulkImportLoadMatch is the typed request payload for ApiEntitiesBulkImport.LoadTyped.
type ApiEntitiesBulkImportLoadMatch struct {
	BulkImportId *string `json:"bulk_import_id,omitempty"`
	EntityId *string `json:"entity_id,omitempty"`
	Id *string `json:"id,omitempty"`
}

// ApiEntitiesBulkImportListMatch is the typed request payload for ApiEntitiesBulkImport.ListTyped.
type ApiEntitiesBulkImportListMatch struct {
	BulkImportId *string `json:"bulk_import_id,omitempty"`
}

// ApiEntitiesBulkImportCreateData is the typed request payload for ApiEntitiesBulkImport.CreateTyped.
type ApiEntitiesBulkImportCreateData struct {
	BulkImportId *string `json:"bulk_import_id,omitempty"`
}

// ApiEntitiesBulkImportsEntityFailure is the typed data model for the api_entities_bulk_imports_entity_failure entity.
type ApiEntitiesBulkImportsEntityFailure struct {
	CorrelationIdValue *string `json:"correlation_id_value,omitempty"`
	ExceptionClass *string `json:"exception_class,omitempty"`
	ExceptionMessage *string `json:"exception_message,omitempty"`
	Relation *string `json:"relation,omitempty"`
	SourceTitle *string `json:"source_title,omitempty"`
	SourceUrl *string `json:"source_url,omitempty"`
}

// ApiEntitiesBulkImportsEntityFailureLoadMatch is the typed request payload for ApiEntitiesBulkImportsEntityFailure.LoadTyped.
type ApiEntitiesBulkImportsEntityFailureLoadMatch struct {
	BulkImportId string `json:"bulk_import_id"`
	EntityId string `json:"entity_id"`
}

// ApiEntitiesBulkImportsExportStatus is the typed data model for the api_entities_bulk_imports_export_status entity.
type ApiEntitiesBulkImportsExportStatus struct {
	Batch *map[string]any `json:"batch,omitempty"`
	Batched *bool `json:"batched,omitempty"`
	BatchesCount *int `json:"batches_count,omitempty"`
	Error *string `json:"error,omitempty"`
	Relation *string `json:"relation,omitempty"`
	Status *string `json:"status,omitempty"`
	TotalObjectsCount *int `json:"total_objects_count,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// ApiEntitiesBulkImportsExportStatusListMatch is the typed request payload for ApiEntitiesBulkImportsExportStatus.ListTyped.
type ApiEntitiesBulkImportsExportStatusListMatch struct {
	GroupId *string `json:"group_id,omitempty"`
	ProjectId *string `json:"project_id,omitempty"`
}

// ApiEntitiesChangelog is the typed data model for the api_entities_changelog entity.
type ApiEntitiesChangelog struct {
	Note *string `json:"note,omitempty"`
}

// ApiEntitiesChangelogLoadMatch is the typed request payload for ApiEntitiesChangelog.LoadTyped.
type ApiEntitiesChangelogLoadMatch struct {
	ProjectId string `json:"project_id"`
}

// ApiEntitiesCiBridge is the typed data model for the api_entities_ci_bridge entity.
type ApiEntitiesCiBridge struct {
	AllowFailure *bool `json:"allow_failure,omitempty"`
	Commit *map[string]any `json:"commit,omitempty"`
	Coverage *float64 `json:"coverage,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DownstreamPipeline *map[string]any `json:"downstream_pipeline,omitempty"`
	Duration *float64 `json:"duration,omitempty"`
	ErasedAt *string `json:"erased_at,omitempty"`
	FailureReason *string `json:"failure_reason,omitempty"`
	FinishedAt *string `json:"finished_at,omitempty"`
	Id *int `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	Pipeline *map[string]any `json:"pipeline,omitempty"`
	Project *map[string]any `json:"project,omitempty"`
	QueuedDuration *float64 `json:"queued_duration,omitempty"`
	Ref *string `json:"ref,omitempty"`
	Stage *string `json:"stage,omitempty"`
	StartedAt *string `json:"started_at,omitempty"`
	Status *string `json:"status,omitempty"`
	Tag *bool `json:"tag,omitempty"`
	User *map[string]any `json:"user,omitempty"`
	WebUrl *string `json:"web_url,omitempty"`
}

// ApiEntitiesCiBridgeListMatch is the typed request payload for ApiEntitiesCiBridge.ListTyped.
type ApiEntitiesCiBridgeListMatch struct {
	PipelineId string `json:"pipeline_id"`
	ProjectId string `json:"project_id"`
}

// ApiEntitiesCiCatalogResourcesVersion is the typed data model for the api_entities_ci_catalog_resources_version entity.
type ApiEntitiesCiCatalogResourcesVersion struct {
}

// ApiEntitiesCiCatalogResourcesVersionCreateData is the typed request payload for ApiEntitiesCiCatalogResourcesVersion.CreateTyped.
type ApiEntitiesCiCatalogResourcesVersionCreateData struct {
	ProjectId string `json:"project_id"`
}

// ApiEntitiesCiJob is the typed data model for the api_entities_ci_job entity.
type ApiEntitiesCiJob struct {
	AllowFailure *bool `json:"allow_failure,omitempty"`
	Archived *bool `json:"archived,omitempty"`
	Artifact *[]any `json:"artifact,omitempty"`
	ArtifactsExpireAt *string `json:"artifacts_expire_at,omitempty"`
	ArtifactsFile *map[string]any `json:"artifacts_file,omitempty"`
	Commit *map[string]any `json:"commit,omitempty"`
	Coverage *float64 `json:"coverage,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Duration *float64 `json:"duration,omitempty"`
	ErasedAt *string `json:"erased_at,omitempty"`
	FailureReason *string `json:"failure_reason,omitempty"`
	FileFormat *string `json:"file_format,omitempty"`
	FileType *string `json:"file_type,omitempty"`
	Filename *string `json:"filename,omitempty"`
	FinishedAt *string `json:"finished_at,omitempty"`
	Id *int `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	Pipeline *map[string]any `json:"pipeline,omitempty"`
	Project *map[string]any `json:"project,omitempty"`
	QueuedDuration *float64 `json:"queued_duration,omitempty"`
	Ref *string `json:"ref,omitempty"`
	Runner *map[string]any `json:"runner,omitempty"`
	RunnerManager *map[string]any `json:"runner_manager,omitempty"`
	Size *int `json:"size,omitempty"`
	Stage *string `json:"stage,omitempty"`
	StartedAt *string `json:"started_at,omitempty"`
	Status *string `json:"status,omitempty"`
	Tag *bool `json:"tag,omitempty"`
	TagList *[]any `json:"tag_list,omitempty"`
	User *map[string]any `json:"user,omitempty"`
	WebUrl *string `json:"web_url,omitempty"`
}

// ApiEntitiesCiJobLoadMatch is the typed request payload for ApiEntitiesCiJob.LoadTyped.
type ApiEntitiesCiJobLoadMatch struct {
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
}

// ApiEntitiesCiJobListMatch is the typed request payload for ApiEntitiesCiJob.ListTyped.
type ApiEntitiesCiJobListMatch struct {
	PipelineId *string `json:"pipeline_id,omitempty"`
	ProjectId *string `json:"project_id,omitempty"`
	JobId *string `json:"job_id,omitempty"`
}

// ApiEntitiesCiJobCreateData is the typed request payload for ApiEntitiesCiJob.CreateTyped.
type ApiEntitiesCiJobCreateData struct {
	JobId string `json:"job_id"`
	ProjectId string `json:"project_id"`
}

// ApiEntitiesCiJobBasic is the typed data model for the api_entities_ci_job_basic entity.
type ApiEntitiesCiJobBasic struct {
	AllowFailure *bool `json:"allow_failure,omitempty"`
	Commit *map[string]any `json:"commit,omitempty"`
	Coverage *float64 `json:"coverage,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Duration *float64 `json:"duration,omitempty"`
	ErasedAt *string `json:"erased_at,omitempty"`
	FailureReason *string `json:"failure_reason,omitempty"`
	FinishedAt *string `json:"finished_at,omitempty"`
	Id *int `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	Pipeline *map[string]any `json:"pipeline,omitempty"`
	Project *map[string]any `json:"project,omitempty"`
	QueuedDuration *float64 `json:"queued_duration,omitempty"`
	Ref *string `json:"ref,omitempty"`
	Stage *string `json:"stage,omitempty"`
	StartedAt *string `json:"started_at,omitempty"`
	Status *string `json:"status,omitempty"`
	Tag *bool `json:"tag,omitempty"`
	User *map[string]any `json:"user,omitempty"`
	WebUrl *string `json:"web_url,omitempty"`
}

// ApiEntitiesCiJobBasicListMatch is the typed request payload for ApiEntitiesCiJobBasic.ListTyped.
type ApiEntitiesCiJobBasicListMatch struct {
	Key string `json:"key"`
	ProjectId string `json:"project_id"`
}

// ApiEntitiesCiJobBasicCreateData is the typed request payload for ApiEntitiesCiJobBasic.CreateTyped.
type ApiEntitiesCiJobBasicCreateData struct {
	JobId string `json:"job_id"`
	ProjectId string `json:"project_id"`
}

// ApiEntitiesCiJobBasicWithProject is the typed data model for the api_entities_ci_job_basic_with_project entity.
type ApiEntitiesCiJobBasicWithProject struct {
	AllowFailure *bool `json:"allow_failure,omitempty"`
	Commit *map[string]any `json:"commit,omitempty"`
	Coverage *float64 `json:"coverage,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Duration *float64 `json:"duration,omitempty"`
	ErasedAt *string `json:"erased_at,omitempty"`
	FailureReason *string `json:"failure_reason,omitempty"`
	FinishedAt *string `json:"finished_at,omitempty"`
	Id *int `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	Pipeline *map[string]any `json:"pipeline,omitempty"`
	Project *map[string]any `json:"project,omitempty"`
	QueuedDuration *float64 `json:"queued_duration,omitempty"`
	Ref *string `json:"ref,omitempty"`
	Stage *string `json:"stage,omitempty"`
	StartedAt *string `json:"started_at,omitempty"`
	Status *string `json:"status,omitempty"`
	Tag *bool `json:"tag,omitempty"`
	User *map[string]any `json:"user,omitempty"`
	WebUrl *string `json:"web_url,omitempty"`
}

// ApiEntitiesCiJobBasicWithProjectLoadMatch is the typed request payload for ApiEntitiesCiJobBasicWithProject.LoadTyped.
type ApiEntitiesCiJobBasicWithProjectLoadMatch struct {
	RunnerId string `json:"runner_id"`
}

// ApiEntitiesCiLintResult is the typed data model for the api_entities_ci_lint_result entity.
type ApiEntitiesCiLintResult struct {
	Blob *string `json:"blob,omitempty"`
	ContextProject *string `json:"context_project,omitempty"`
	ContextSha *string `json:"context_sha,omitempty"`
	Error *[]any `json:"error,omitempty"`
	Extra *map[string]any `json:"extra,omitempty"`
	Include *[]any `json:"include,omitempty"`
	Job *[]any `json:"job,omitempty"`
	Location *string `json:"location,omitempty"`
	MergedYaml *string `json:"merged_yaml,omitempty"`
	Raw *string `json:"raw,omitempty"`
	Type *string `json:"type,omitempty"`
	Valid *bool `json:"valid,omitempty"`
	Warning *[]any `json:"warning,omitempty"`
}

// ApiEntitiesCiLintResultListMatch is the typed request payload for ApiEntitiesCiLintResult.ListTyped.
type ApiEntitiesCiLintResultListMatch struct {
	ProjectId string `json:"project_id"`
}

// ApiEntitiesCiLintResultCreateData is the typed request payload for ApiEntitiesCiLintResult.CreateTyped.
type ApiEntitiesCiLintResultCreateData struct {
	ProjectId string `json:"project_id"`
}

// ApiEntitiesCiPipeline is the typed data model for the api_entities_ci_pipeline entity.
type ApiEntitiesCiPipeline struct {
}

// ApiEntitiesCiPipelineCreateData is the typed request payload for ApiEntitiesCiPipeline.CreateTyped.
type ApiEntitiesCiPipelineCreateData struct {
	MergeRequestId *string `json:"merge_request_id,omitempty"`
	ProjectId string `json:"project_id"`
	RefId *string `json:"ref_id,omitempty"`
	PipelineId *string `json:"pipeline_id,omitempty"`
}

// ApiEntitiesCiPipelineBasic is the typed data model for the api_entities_ci_pipeline_basic entity.
type ApiEntitiesCiPipelineBasic struct {
	CreatedAt *string `json:"created_at,omitempty"`
	Id *int `json:"id,omitempty"`
	Iid *int `json:"iid,omitempty"`
	ProjectId *int `json:"project_id,omitempty"`
	Ref *string `json:"ref,omitempty"`
	Sha *string `json:"sha,omitempty"`
	Source *string `json:"source,omitempty"`
	Status *string `json:"status,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	WebUrl *string `json:"web_url,omitempty"`
}

// ApiEntitiesCiPipelineBasicLoadMatch is the typed request payload for ApiEntitiesCiPipelineBasic.LoadTyped.
type ApiEntitiesCiPipelineBasicLoadMatch struct {
	MergeRequestId string `json:"merge_request_id"`
	ProjectId string `json:"project_id"`
}

// ApiEntitiesCiPipelineBasicListMatch is the typed request payload for ApiEntitiesCiPipelineBasic.ListTyped.
type ApiEntitiesCiPipelineBasicListMatch struct {
	ProjectId string `json:"project_id"`
	PipelineScheduleId *string `json:"pipeline_schedule_id,omitempty"`
}

// ApiEntitiesCiPipelineSchedule is the typed data model for the api_entities_ci_pipeline_schedule entity.
type ApiEntitiesCiPipelineSchedule struct {
	Active *bool `json:"active,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Cron *string `json:"cron,omitempty"`
	CronTimezone *string `json:"cron_timezone,omitempty"`
	Description *string `json:"description,omitempty"`
	Id *int `json:"id,omitempty"`
	Input *map[string]any `json:"input,omitempty"`
	NextRunAt *string `json:"next_run_at,omitempty"`
	Owner *map[string]any `json:"owner,omitempty"`
	Ref *string `json:"ref,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// ApiEntitiesCiPipelineScheduleListMatch is the typed request payload for ApiEntitiesCiPipelineSchedule.ListTyped.
type ApiEntitiesCiPipelineScheduleListMatch struct {
	ProjectId string `json:"project_id"`
}

// ApiEntitiesCiPipelineScheduleDetail is the typed data model for the api_entities_ci_pipeline_schedule_detail entity.
type ApiEntitiesCiPipelineScheduleDetail struct {
	Active *bool `json:"active,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Cron *string `json:"cron,omitempty"`
	CronTimezone *string `json:"cron_timezone,omitempty"`
	Description *string `json:"description,omitempty"`
	Id *int `json:"id,omitempty"`
	Input *map[string]any `json:"input,omitempty"`
	LastPipeline *map[string]any `json:"last_pipeline,omitempty"`
	NextRunAt *string `json:"next_run_at,omitempty"`
	Owner *map[string]any `json:"owner,omitempty"`
	Ref *string `json:"ref,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Variable *map[string]any `json:"variable,omitempty"`
}

// ApiEntitiesCiPipelineScheduleDetailLoadMatch is the typed request payload for ApiEntitiesCiPipelineScheduleDetail.LoadTyped.
type ApiEntitiesCiPipelineScheduleDetailLoadMatch struct {
	PipelineScheduleId string `json:"pipeline_schedule_id"`
	ProjectId string `json:"project_id"`
}

// ApiEntitiesCiPipelineScheduleDetailCreateData is the typed request payload for ApiEntitiesCiPipelineScheduleDetail.CreateTyped.
type ApiEntitiesCiPipelineScheduleDetailCreateData struct {
	PipelineScheduleId *string `json:"pipeline_schedule_id,omitempty"`
	ProjectId string `json:"project_id"`
}

// ApiEntitiesCiPipelineScheduleDetailUpdateData is the typed request payload for ApiEntitiesCiPipelineScheduleDetail.UpdateTyped.
type ApiEntitiesCiPipelineScheduleDetailUpdateData struct {
	PipelineScheduleId string `json:"pipeline_schedule_id"`
	ProjectId string `json:"project_id"`
}

// ApiEntitiesCiResetTokenResult is the typed data model for the api_entities_ci_reset_token_result entity.
type ApiEntitiesCiResetTokenResult struct {
}

// ApiEntitiesCiResetTokenResultCreateData is the typed request payload for ApiEntitiesCiResetTokenResult.CreateTyped.
type ApiEntitiesCiResetTokenResultCreateData struct {
	GroupId *string `json:"group_id,omitempty"`
	ProjectId *string `json:"project_id,omitempty"`
	RunnerId *string `json:"runner_id,omitempty"`
}

// ApiEntitiesCiResourceGroup is the typed data model for the api_entities_ci_resource_group entity.
type ApiEntitiesCiResourceGroup struct {
	CreatedAt *string `json:"created_at,omitempty"`
	Id *int `json:"id,omitempty"`
	Key *string `json:"key,omitempty"`
	ProcessMode *string `json:"process_mode,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// ApiEntitiesCiResourceGroupLoadMatch is the typed request payload for ApiEntitiesCiResourceGroup.LoadTyped.
type ApiEntitiesCiResourceGroupLoadMatch struct {
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
}

// ApiEntitiesCiResourceGroupListMatch is the typed request payload for ApiEntitiesCiResourceGroup.ListTyped.
type ApiEntitiesCiResourceGroupListMatch struct {
	ProjectId string `json:"project_id"`
}

// ApiEntitiesCiResourceGroupUpdateData is the typed request payload for ApiEntitiesCiResourceGroup.UpdateTyped.
type ApiEntitiesCiResourceGroupUpdateData struct {
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
}

// ApiEntitiesCiRunner is the typed data model for the api_entities_ci_runner entity.
type ApiEntitiesCiRunner struct {
	Active *bool `json:"active,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	CreatedBy *map[string]any `json:"created_by,omitempty"`
	Description *string `json:"description,omitempty"`
	Id *int `json:"id,omitempty"`
	IpAddress *string `json:"ip_address,omitempty"`
	IsShared *bool `json:"is_shared,omitempty"`
	JobExecutionStatus *string `json:"job_execution_status,omitempty"`
	Name *string `json:"name,omitempty"`
	Online *bool `json:"online,omitempty"`
	Paused *bool `json:"paused,omitempty"`
	RunnerType *string `json:"runner_type,omitempty"`
	Status *string `json:"status,omitempty"`
}

// ApiEntitiesCiRunnerLoadMatch is the typed request payload for ApiEntitiesCiRunner.LoadTyped.
type ApiEntitiesCiRunnerLoadMatch struct {
	ProjectId *string `json:"project_id,omitempty"`
	GroupId *string `json:"group_id,omitempty"`
}

// ApiEntitiesCiRunnerCreateData is the typed request payload for ApiEntitiesCiRunner.CreateTyped.
type ApiEntitiesCiRunnerCreateData struct {
	ProjectId string `json:"project_id"`
}

// ApiEntitiesCiRunnerDetail is the typed data model for the api_entities_ci_runner_detail entity.
type ApiEntitiesCiRunnerDetail struct {
	AccessLevel *string `json:"access_level,omitempty"`
	Active *bool `json:"active,omitempty"`
	Architecture *string `json:"architecture,omitempty"`
	ContactedAt *string `json:"contacted_at,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	CreatedBy *map[string]any `json:"created_by,omitempty"`
	Description *string `json:"description,omitempty"`
	Group *map[string]any `json:"group,omitempty"`
	Id *int `json:"id,omitempty"`
	IpAddress *string `json:"ip_address,omitempty"`
	IsShared *bool `json:"is_shared,omitempty"`
	JobExecutionStatus *string `json:"job_execution_status,omitempty"`
	Locked *bool `json:"locked,omitempty"`
	MaintenanceNote *string `json:"maintenance_note,omitempty"`
	MaximumTimeout *string `json:"maximum_timeout,omitempty"`
	Name *string `json:"name,omitempty"`
	Online *bool `json:"online,omitempty"`
	Paused *bool `json:"paused,omitempty"`
	Platform *string `json:"platform,omitempty"`
	Project *map[string]any `json:"project,omitempty"`
	Revision *string `json:"revision,omitempty"`
	RunUntagged *string `json:"run_untagged,omitempty"`
	RunnerType *string `json:"runner_type,omitempty"`
	Status *string `json:"status,omitempty"`
	TagList *string `json:"tag_list,omitempty"`
	Version *string `json:"version,omitempty"`
}

// ApiEntitiesCiRunnerDetailLoadMatch is the typed request payload for ApiEntitiesCiRunnerDetail.LoadTyped.
type ApiEntitiesCiRunnerDetailLoadMatch struct {
	Id string `json:"id"`
}

// ApiEntitiesCiRunnerDetailUpdateData is the typed request payload for ApiEntitiesCiRunnerDetail.UpdateTyped.
type ApiEntitiesCiRunnerDetailUpdateData struct {
	Id string `json:"id"`
}

// ApiEntitiesCiRunnerManager is the typed data model for the api_entities_ci_runner_manager entity.
type ApiEntitiesCiRunnerManager struct {
	Architecture *string `json:"architecture,omitempty"`
	ContactedAt *string `json:"contacted_at,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Id *int `json:"id,omitempty"`
	IpAddress *string `json:"ip_address,omitempty"`
	JobExecutionStatus *string `json:"job_execution_status,omitempty"`
	Platform *string `json:"platform,omitempty"`
	Revision *string `json:"revision,omitempty"`
	Status *string `json:"status,omitempty"`
	SystemId *string `json:"system_id,omitempty"`
	Version *string `json:"version,omitempty"`
}

// ApiEntitiesCiRunnerManagerLoadMatch is the typed request payload for ApiEntitiesCiRunnerManager.LoadTyped.
type ApiEntitiesCiRunnerManagerLoadMatch struct {
	RunnerId string `json:"runner_id"`
}

// ApiEntitiesCiRunnerRegistrationDetail is the typed data model for the api_entities_ci_runner_registration_detail entity.
type ApiEntitiesCiRunnerRegistrationDetail struct {
}

// ApiEntitiesCiRunnerRegistrationDetailCreateData is the typed request payload for ApiEntitiesCiRunnerRegistrationDetail.CreateTyped.
type ApiEntitiesCiRunnerRegistrationDetailCreateData struct {
}

// ApiEntitiesCiSecureFile is the typed data model for the api_entities_ci_secure_file entity.
type ApiEntitiesCiSecureFile struct {
	Checksum *string `json:"checksum,omitempty"`
	ChecksumAlgorithm *string `json:"checksum_algorithm,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	ExpiresAt *string `json:"expires_at,omitempty"`
	FileExtension *string `json:"file_extension,omitempty"`
	Id *int `json:"id,omitempty"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	Name *string `json:"name,omitempty"`
}

// ApiEntitiesCiSecureFileLoadMatch is the typed request payload for ApiEntitiesCiSecureFile.LoadTyped.
type ApiEntitiesCiSecureFileLoadMatch struct {
	ProjectId string `json:"project_id"`
	Id *string `json:"id,omitempty"`
}

// ApiEntitiesCiSecureFileCreateData is the typed request payload for ApiEntitiesCiSecureFile.CreateTyped.
type ApiEntitiesCiSecureFileCreateData struct {
	ProjectId string `json:"project_id"`
}

// ApiEntitiesCiVariable is the typed data model for the api_entities_ci_variable entity.
type ApiEntitiesCiVariable struct {
	Description *string `json:"description,omitempty"`
	EnvironmentScope *string `json:"environment_scope,omitempty"`
	Hidden *bool `json:"hidden,omitempty"`
	Key *string `json:"key,omitempty"`
	Masked *bool `json:"masked,omitempty"`
	Protected *bool `json:"protected,omitempty"`
	Raw *bool `json:"raw,omitempty"`
	Value *string `json:"value,omitempty"`
	VariableType *string `json:"variable_type,omitempty"`
}

// ApiEntitiesCiVariableLoadMatch is the typed request payload for ApiEntitiesCiVariable.LoadTyped.
type ApiEntitiesCiVariableLoadMatch struct {
	Id *string `json:"id,omitempty"`
	ProjectId *string `json:"project_id,omitempty"`
	GroupId *string `json:"group_id,omitempty"`
}

// ApiEntitiesCiVariableListMatch is the typed request payload for ApiEntitiesCiVariable.ListTyped.
type ApiEntitiesCiVariableListMatch struct {
	PipelineId string `json:"pipeline_id"`
	ProjectId string `json:"project_id"`
}

// ApiEntitiesCiVariableCreateData is the typed request payload for ApiEntitiesCiVariable.CreateTyped.
type ApiEntitiesCiVariableCreateData struct {
	PipelineScheduleId *string `json:"pipeline_schedule_id,omitempty"`
	ProjectId *string `json:"project_id,omitempty"`
	GroupId *string `json:"group_id,omitempty"`
}

// ApiEntitiesCiVariableUpdateData is the typed request payload for ApiEntitiesCiVariable.UpdateTyped.
type ApiEntitiesCiVariableUpdateData struct {
	Id string `json:"id"`
	PipelineScheduleId *string `json:"pipeline_schedule_id,omitempty"`
	ProjectId *string `json:"project_id,omitempty"`
	GroupId *string `json:"group_id,omitempty"`
}

// ApiEntitiesCluster is the typed data model for the api_entities_cluster entity.
type ApiEntitiesCluster struct {
	ClusterType *string `json:"cluster_type,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Domain *string `json:"domain,omitempty"`
	Enabled *bool `json:"enabled,omitempty"`
	EnvironmentScope *string `json:"environment_scope,omitempty"`
	Id *string `json:"id,omitempty"`
	Managed *string `json:"managed,omitempty"`
	ManagementProject *map[string]any `json:"management_project,omitempty"`
	Name *string `json:"name,omitempty"`
	NamespacePerEnvironment *string `json:"namespace_per_environment,omitempty"`
	PlatformKubernete *map[string]any `json:"platform_kubernete,omitempty"`
	PlatformType *string `json:"platform_type,omitempty"`
	ProviderGcp *map[string]any `json:"provider_gcp,omitempty"`
	ProviderType *string `json:"provider_type,omitempty"`
	User *map[string]any `json:"user,omitempty"`
}

// ApiEntitiesClusterLoadMatch is the typed request payload for ApiEntitiesCluster.LoadTyped.
type ApiEntitiesClusterLoadMatch struct {
	Id string `json:"id"`
}

// ApiEntitiesClusterListMatch is the typed request payload for ApiEntitiesCluster.ListTyped.
type ApiEntitiesClusterListMatch struct {
	GroupId *string `json:"group_id,omitempty"`
	ProjectId *string `json:"project_id,omitempty"`
}

// ApiEntitiesClusterCreateData is the typed request payload for ApiEntitiesCluster.CreateTyped.
type ApiEntitiesClusterCreateData struct {
	ClusterType *string `json:"cluster_type,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Domain *string `json:"domain,omitempty"`
	Enabled *bool `json:"enabled,omitempty"`
	EnvironmentScope *string `json:"environment_scope,omitempty"`
	Id *string `json:"id,omitempty"`
	Managed *string `json:"managed,omitempty"`
	ManagementProject *map[string]any `json:"management_project,omitempty"`
	Name *string `json:"name,omitempty"`
	NamespacePerEnvironment *string `json:"namespace_per_environment,omitempty"`
	PlatformKubernete *map[string]any `json:"platform_kubernete,omitempty"`
	PlatformType *string `json:"platform_type,omitempty"`
	ProviderGcp *map[string]any `json:"provider_gcp,omitempty"`
	ProviderType *string `json:"provider_type,omitempty"`
	User *map[string]any `json:"user,omitempty"`
}

// ApiEntitiesClusterUpdateData is the typed request payload for ApiEntitiesCluster.UpdateTyped.
type ApiEntitiesClusterUpdateData struct {
	Id string `json:"id"`
}

// ApiEntitiesClusterGroup is the typed data model for the api_entities_cluster_group entity.
type ApiEntitiesClusterGroup struct {
	ClusterType *string `json:"cluster_type,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Domain *string `json:"domain,omitempty"`
	Enabled *bool `json:"enabled,omitempty"`
	EnvironmentScope *string `json:"environment_scope,omitempty"`
	Group *map[string]any `json:"group,omitempty"`
	Id *string `json:"id,omitempty"`
	Managed *string `json:"managed,omitempty"`
	ManagementProject *map[string]any `json:"management_project,omitempty"`
	Name *string `json:"name,omitempty"`
	NamespacePerEnvironment *string `json:"namespace_per_environment,omitempty"`
	PlatformKubernete *map[string]any `json:"platform_kubernete,omitempty"`
	PlatformType *string `json:"platform_type,omitempty"`
	ProviderGcp *map[string]any `json:"provider_gcp,omitempty"`
	ProviderType *string `json:"provider_type,omitempty"`
	User *map[string]any `json:"user,omitempty"`
}

// ApiEntitiesClusterGroupLoadMatch is the typed request payload for ApiEntitiesClusterGroup.LoadTyped.
type ApiEntitiesClusterGroupLoadMatch struct {
	ClusterId string `json:"cluster_id"`
	GroupId string `json:"group_id"`
}

// ApiEntitiesClusterGroupCreateData is the typed request payload for ApiEntitiesClusterGroup.CreateTyped.
type ApiEntitiesClusterGroupCreateData struct {
	GroupId string `json:"group_id"`
}

// ApiEntitiesClusterGroupUpdateData is the typed request payload for ApiEntitiesClusterGroup.UpdateTyped.
type ApiEntitiesClusterGroupUpdateData struct {
	ClusterId string `json:"cluster_id"`
	GroupId string `json:"group_id"`
}

// ApiEntitiesClusterProject is the typed data model for the api_entities_cluster_project entity.
type ApiEntitiesClusterProject struct {
	ClusterType *string `json:"cluster_type,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Domain *string `json:"domain,omitempty"`
	Enabled *bool `json:"enabled,omitempty"`
	EnvironmentScope *string `json:"environment_scope,omitempty"`
	Id *string `json:"id,omitempty"`
	Managed *string `json:"managed,omitempty"`
	ManagementProject *map[string]any `json:"management_project,omitempty"`
	Name *string `json:"name,omitempty"`
	NamespacePerEnvironment *string `json:"namespace_per_environment,omitempty"`
	PlatformKubernete *map[string]any `json:"platform_kubernete,omitempty"`
	PlatformType *string `json:"platform_type,omitempty"`
	Project *map[string]any `json:"project,omitempty"`
	ProviderGcp *map[string]any `json:"provider_gcp,omitempty"`
	ProviderType *string `json:"provider_type,omitempty"`
	User *map[string]any `json:"user,omitempty"`
}

// ApiEntitiesClusterProjectLoadMatch is the typed request payload for ApiEntitiesClusterProject.LoadTyped.
type ApiEntitiesClusterProjectLoadMatch struct {
	ClusterId string `json:"cluster_id"`
	ProjectId string `json:"project_id"`
}

// ApiEntitiesClusterProjectCreateData is the typed request payload for ApiEntitiesClusterProject.CreateTyped.
type ApiEntitiesClusterProjectCreateData struct {
	ProjectId string `json:"project_id"`
}

// ApiEntitiesClusterProjectUpdateData is the typed request payload for ApiEntitiesClusterProject.UpdateTyped.
type ApiEntitiesClusterProjectUpdateData struct {
	ClusterId string `json:"cluster_id"`
	ProjectId string `json:"project_id"`
}

// ApiEntitiesClustersAgent is the typed data model for the api_entities_clusters_agent entity.
type ApiEntitiesClustersAgent struct {
	ConfigProject *map[string]any `json:"config_project,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	CreatedByUserId *string `json:"created_by_user_id,omitempty"`
	Id *string `json:"id,omitempty"`
	IsReceptive *bool `json:"is_receptive,omitempty"`
	Name *string `json:"name,omitempty"`
}

// ApiEntitiesClustersAgentLoadMatch is the typed request payload for ApiEntitiesClustersAgent.LoadTyped.
type ApiEntitiesClustersAgentLoadMatch struct {
	ProjectId string `json:"project_id"`
	AgentId *string `json:"agent_id,omitempty"`
}

// ApiEntitiesClustersAgentCreateData is the typed request payload for ApiEntitiesClustersAgent.CreateTyped.
type ApiEntitiesClustersAgentCreateData struct {
	ProjectId string `json:"project_id"`
}

// ApiEntitiesClustersAgentToken is the typed data model for the api_entities_clusters_agent_token entity.
type ApiEntitiesClustersAgentToken struct {
	AgentId *string `json:"agent_id,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	CreatedByUserId *string `json:"created_by_user_id,omitempty"`
	Description *string `json:"description,omitempty"`
	Id *string `json:"id,omitempty"`
	LastUsedAt *string `json:"last_used_at,omitempty"`
	Name *string `json:"name,omitempty"`
	Status *string `json:"status,omitempty"`
}

// ApiEntitiesClustersAgentTokenLoadMatch is the typed request payload for ApiEntitiesClustersAgentToken.LoadTyped.
type ApiEntitiesClustersAgentTokenLoadMatch struct {
	ClusterAgentId string `json:"cluster_agent_id"`
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
}

// ApiEntitiesClustersAgentTokenBasic is the typed data model for the api_entities_clusters_agent_token_basic entity.
type ApiEntitiesClustersAgentTokenBasic struct {
	AgentId *string `json:"agent_id,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	CreatedByUserId *string `json:"created_by_user_id,omitempty"`
	Description *string `json:"description,omitempty"`
	Id *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	Status *string `json:"status,omitempty"`
}

// ApiEntitiesClustersAgentTokenBasicLoadMatch is the typed request payload for ApiEntitiesClustersAgentTokenBasic.LoadTyped.
type ApiEntitiesClustersAgentTokenBasicLoadMatch struct {
	ClusterAgentId string `json:"cluster_agent_id"`
	ProjectId string `json:"project_id"`
}

// ApiEntitiesClustersAgentTokenWithToken is the typed data model for the api_entities_clusters_agent_token_with_token entity.
type ApiEntitiesClustersAgentTokenWithToken struct {
}

// ApiEntitiesClustersAgentTokenWithTokenCreateData is the typed request payload for ApiEntitiesClustersAgentTokenWithToken.CreateTyped.
type ApiEntitiesClustersAgentTokenWithTokenCreateData struct {
	ClusterAgentId string `json:"cluster_agent_id"`
	ProjectId string `json:"project_id"`
}

// ApiEntitiesCommit is the typed data model for the api_entities_commit entity.
type ApiEntitiesCommit struct {
	AuthorEmail *string `json:"author_email,omitempty"`
	AuthorName *string `json:"author_name,omitempty"`
	AuthoredDate *string `json:"authored_date,omitempty"`
	CommittedDate *string `json:"committed_date,omitempty"`
	CommitterEmail *string `json:"committer_email,omitempty"`
	CommitterName *string `json:"committer_name,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	ExtendedTrailer *map[string]any `json:"extended_trailer,omitempty"`
	Id *string `json:"id,omitempty"`
	Message *string `json:"message,omitempty"`
	ParentId *[]any `json:"parent_id,omitempty"`
	ShortId *string `json:"short_id,omitempty"`
	Title *string `json:"title,omitempty"`
	Trailer *map[string]any `json:"trailer,omitempty"`
	WebUrl *string `json:"web_url,omitempty"`
}

// ApiEntitiesCommitListMatch is the typed request payload for ApiEntitiesCommit.ListTyped.
type ApiEntitiesCommitListMatch struct {
	ProjectId string `json:"project_id"`
	MergeRequestId *string `json:"merge_request_id,omitempty"`
}

// ApiEntitiesCommitCreateData is the typed request payload for ApiEntitiesCommit.CreateTyped.
type ApiEntitiesCommitCreateData struct {
	MergeRequestId *string `json:"merge_request_id,omitempty"`
	ProjectId string `json:"project_id"`
	Sha *any `json:"sha,omitempty"`
}

// ApiEntitiesCommitDetail is the typed data model for the api_entities_commit_detail entity.
type ApiEntitiesCommitDetail struct {
	AuthorEmail *string `json:"author_email,omitempty"`
	AuthorName *string `json:"author_name,omitempty"`
	AuthoredDate *string `json:"authored_date,omitempty"`
	CommittedDate *string `json:"committed_date,omitempty"`
	CommitterEmail *string `json:"committer_email,omitempty"`
	CommitterName *string `json:"committer_name,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	ExtendedTrailer *map[string]any `json:"extended_trailer,omitempty"`
	Id *string `json:"id,omitempty"`
	LastPipeline *map[string]any `json:"last_pipeline,omitempty"`
	Message *string `json:"message,omitempty"`
	ParentId *[]any `json:"parent_id,omitempty"`
	ProjectId *int `json:"project_id,omitempty"`
	ShortId *string `json:"short_id,omitempty"`
	Stat *map[string]any `json:"stat,omitempty"`
	Status *string `json:"status,omitempty"`
	Title *string `json:"title,omitempty"`
	Trailer *map[string]any `json:"trailer,omitempty"`
	WebUrl *string `json:"web_url,omitempty"`
}

// ApiEntitiesCommitDetailLoadMatch is the typed request payload for ApiEntitiesCommitDetail.LoadTyped.
type ApiEntitiesCommitDetailLoadMatch struct {
	ProjectId string `json:"project_id"`
	Sha any `json:"sha"`
}

// ApiEntitiesCommitDetailCreateData is the typed request payload for ApiEntitiesCommitDetail.CreateTyped.
type ApiEntitiesCommitDetailCreateData struct {
	ProjectId string `json:"project_id"`
}

// ApiEntitiesCommitDetailUpdateData is the typed request payload for ApiEntitiesCommitDetail.UpdateTyped.
type ApiEntitiesCommitDetailUpdateData struct {
	ProjectId string `json:"project_id"`
	Submodule any `json:"submodule"`
}

// ApiEntitiesCommitNote is the typed data model for the api_entities_commit_note entity.
type ApiEntitiesCommitNote struct {
	Author *map[string]any `json:"author,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Line *int `json:"line,omitempty"`
	LineType *string `json:"line_type,omitempty"`
	Note *string `json:"note,omitempty"`
	Path *string `json:"path,omitempty"`
}

// ApiEntitiesCommitNoteListMatch is the typed request payload for ApiEntitiesCommitNote.ListTyped.
type ApiEntitiesCommitNoteListMatch struct {
	ProjectId string `json:"project_id"`
	Sha any `json:"sha"`
}

// ApiEntitiesCommitNoteCreateData is the typed request payload for ApiEntitiesCommitNote.CreateTyped.
type ApiEntitiesCommitNoteCreateData struct {
	ProjectId string `json:"project_id"`
	Sha any `json:"sha"`
}

// ApiEntitiesCommitSequence is the typed data model for the api_entities_commit_sequence entity.
type ApiEntitiesCommitSequence struct {
	Count *int `json:"count,omitempty"`
}

// ApiEntitiesCommitSequenceLoadMatch is the typed request payload for ApiEntitiesCommitSequence.LoadTyped.
type ApiEntitiesCommitSequenceLoadMatch struct {
	ProjectId string `json:"project_id"`
	Sha any `json:"sha"`
}

// ApiEntitiesCommitSignature is the typed data model for the api_entities_commit_signature entity.
type ApiEntitiesCommitSignature struct {
	CommitSource *string `json:"commit_source,omitempty"`
	Signature *string `json:"signature,omitempty"`
	SignatureType *string `json:"signature_type,omitempty"`
}

// ApiEntitiesCommitSignatureLoadMatch is the typed request payload for ApiEntitiesCommitSignature.LoadTyped.
type ApiEntitiesCommitSignatureLoadMatch struct {
	ProjectId string `json:"project_id"`
	Sha any `json:"sha"`
}

// ApiEntitiesCommitStatus is the typed data model for the api_entities_commit_status entity.
type ApiEntitiesCommitStatus struct {
	AllowFailure *bool `json:"allow_failure,omitempty"`
	Author *map[string]any `json:"author,omitempty"`
	Coverage *float64 `json:"coverage,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	FinishedAt *string `json:"finished_at,omitempty"`
	Id *int `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	PipelineId *int `json:"pipeline_id,omitempty"`
	Ref *string `json:"ref,omitempty"`
	Sha *string `json:"sha,omitempty"`
	StartedAt *string `json:"started_at,omitempty"`
	Status *string `json:"status,omitempty"`
	TargetUrl *string `json:"target_url,omitempty"`
}

// ApiEntitiesCommitStatusListMatch is the typed request payload for ApiEntitiesCommitStatus.ListTyped.
type ApiEntitiesCommitStatusListMatch struct {
	ProjectId string `json:"project_id"`
	Sha any `json:"sha"`
}

// ApiEntitiesCommitStatusCreateData is the typed request payload for ApiEntitiesCommitStatus.CreateTyped.
type ApiEntitiesCommitStatusCreateData struct {
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
}

// ApiEntitiesCompare is the typed data model for the api_entities_compare entity.
type ApiEntitiesCompare struct {
	Commit *map[string]any `json:"commit,omitempty"`
	CompareSameRef *bool `json:"compare_same_ref,omitempty"`
	CompareTimeout *bool `json:"compare_timeout,omitempty"`
	Diff *[]any `json:"diff,omitempty"`
	WebUrl *string `json:"web_url,omitempty"`
}

// ApiEntitiesCompareListMatch is the typed request payload for ApiEntitiesCompare.ListTyped.
type ApiEntitiesCompareListMatch struct {
	ProjectId string `json:"project_id"`
}

// ApiEntitiesContainerRegistryRepository is the typed data model for the api_entities_container_registry_repository entity.
type ApiEntitiesContainerRegistryRepository struct {
	CleanupPolicyStartedAt *string `json:"cleanup_policy_started_at,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DeleteApiPath *string `json:"delete_api_path,omitempty"`
	Id *int `json:"id,omitempty"`
	Location *string `json:"location,omitempty"`
	Name *string `json:"name,omitempty"`
	Path *string `json:"path,omitempty"`
	ProjectId *int `json:"project_id,omitempty"`
	Size *int `json:"size,omitempty"`
	Status *string `json:"status,omitempty"`
	Tag *map[string]any `json:"tag,omitempty"`
	TagsCount *int `json:"tags_count,omitempty"`
}

// ApiEntitiesContainerRegistryRepositoryLoadMatch is the typed request payload for ApiEntitiesContainerRegistryRepository.LoadTyped.
type ApiEntitiesContainerRegistryRepositoryLoadMatch struct {
	Id string `json:"id"`
}

// ApiEntitiesContainerRegistryRepositoryListMatch is the typed request payload for ApiEntitiesContainerRegistryRepository.ListTyped.
type ApiEntitiesContainerRegistryRepositoryListMatch struct {
	ProjectId *string `json:"project_id,omitempty"`
	GroupId *string `json:"group_id,omitempty"`
}

// ApiEntitiesContainerRegistryTag is the typed data model for the api_entities_container_registry_tag entity.
type ApiEntitiesContainerRegistryTag struct {
	Location *string `json:"location,omitempty"`
	Name *string `json:"name,omitempty"`
	Path *string `json:"path,omitempty"`
}

// ApiEntitiesContainerRegistryTagListMatch is the typed request payload for ApiEntitiesContainerRegistryTag.ListTyped.
type ApiEntitiesContainerRegistryTagListMatch struct {
	ProjectId string `json:"project_id"`
	RepositoryId string `json:"repository_id"`
}

// ApiEntitiesContainerRegistryTagDetail is the typed data model for the api_entities_container_registry_tag_detail entity.
type ApiEntitiesContainerRegistryTagDetail struct {
	CreatedAt *string `json:"created_at,omitempty"`
	Digest *string `json:"digest,omitempty"`
	Location *string `json:"location,omitempty"`
	Name *string `json:"name,omitempty"`
	Path *string `json:"path,omitempty"`
	Revision *string `json:"revision,omitempty"`
	ShortRevision *string `json:"short_revision,omitempty"`
	TotalSize *int `json:"total_size,omitempty"`
}

// ApiEntitiesContainerRegistryTagDetailLoadMatch is the typed request payload for ApiEntitiesContainerRegistryTagDetail.LoadTyped.
type ApiEntitiesContainerRegistryTagDetailLoadMatch struct {
	ProjectId string `json:"project_id"`
	RepositoryId string `json:"repository_id"`
	TagName any `json:"tag_name"`
}

// ApiEntitiesContributor is the typed data model for the api_entities_contributor entity.
type ApiEntitiesContributor struct {
	Addition *int `json:"addition,omitempty"`
	Commit *int `json:"commit,omitempty"`
	Deletion *int `json:"deletion,omitempty"`
	Email *string `json:"email,omitempty"`
	Name *string `json:"name,omitempty"`
}

// ApiEntitiesContributorLoadMatch is the typed request payload for ApiEntitiesContributor.LoadTyped.
type ApiEntitiesContributorLoadMatch struct {
	ProjectId string `json:"project_id"`
}

// ApiEntitiesDeployKey is the typed data model for the api_entities_deploy_key entity.
type ApiEntitiesDeployKey struct {
	CreatedAt *string `json:"created_at,omitempty"`
	ExpiresAt *string `json:"expires_at,omitempty"`
	Fingerprint *string `json:"fingerprint,omitempty"`
	FingerprintSha256 *string `json:"fingerprint_sha256,omitempty"`
	Id *int `json:"id,omitempty"`
	Key *string `json:"key,omitempty"`
	LastUsedAt *string `json:"last_used_at,omitempty"`
	ProjectsWithReadonlyAccess *map[string]any `json:"projects_with_readonly_access,omitempty"`
	ProjectsWithWriteAccess *map[string]any `json:"projects_with_write_access,omitempty"`
	Title *string `json:"title,omitempty"`
	UsageType *string `json:"usage_type,omitempty"`
}

// ApiEntitiesDeployKeyListMatch is the typed request payload for ApiEntitiesDeployKey.ListTyped.
type ApiEntitiesDeployKeyListMatch struct {
	CreatedAt *string `json:"created_at,omitempty"`
	ExpiresAt *string `json:"expires_at,omitempty"`
	Fingerprint *string `json:"fingerprint,omitempty"`
	FingerprintSha256 *string `json:"fingerprint_sha256,omitempty"`
	Id *int `json:"id,omitempty"`
	Key *string `json:"key,omitempty"`
	LastUsedAt *string `json:"last_used_at,omitempty"`
	ProjectsWithReadonlyAccess *map[string]any `json:"projects_with_readonly_access,omitempty"`
	ProjectsWithWriteAccess *map[string]any `json:"projects_with_write_access,omitempty"`
	Title *string `json:"title,omitempty"`
	UsageType *string `json:"usage_type,omitempty"`
}

// ApiEntitiesDeployKeyCreateData is the typed request payload for ApiEntitiesDeployKey.CreateTyped.
type ApiEntitiesDeployKeyCreateData struct {
	DeployKeyId *string `json:"deploy_key_id,omitempty"`
	ProjectId *string `json:"project_id,omitempty"`
}

// ApiEntitiesDeployKeyUpdateData is the typed request payload for ApiEntitiesDeployKey.UpdateTyped.
type ApiEntitiesDeployKeyUpdateData struct {
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
}

// ApiEntitiesDeployKeysProject is the typed data model for the api_entities_deploy_keys_project entity.
type ApiEntitiesDeployKeysProject struct {
	CanPush *bool `json:"can_push,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	ExpiresAt *string `json:"expires_at,omitempty"`
	Fingerprint *string `json:"fingerprint,omitempty"`
	FingerprintSha256 *string `json:"fingerprint_sha256,omitempty"`
	Id *int `json:"id,omitempty"`
	Key *string `json:"key,omitempty"`
	LastUsedAt *string `json:"last_used_at,omitempty"`
	ProjectsWithReadonlyAccess *map[string]any `json:"projects_with_readonly_access,omitempty"`
	ProjectsWithWriteAccess *map[string]any `json:"projects_with_write_access,omitempty"`
	Title *string `json:"title,omitempty"`
	UsageType *string `json:"usage_type,omitempty"`
}

// ApiEntitiesDeployKeysProjectLoadMatch is the typed request payload for ApiEntitiesDeployKeysProject.LoadTyped.
type ApiEntitiesDeployKeysProjectLoadMatch struct {
	KeyId string `json:"key_id"`
	ProjectId string `json:"project_id"`
}

// ApiEntitiesDeployKeysProjectListMatch is the typed request payload for ApiEntitiesDeployKeysProject.ListTyped.
type ApiEntitiesDeployKeysProjectListMatch struct {
	ProjectId string `json:"project_id"`
}

// ApiEntitiesDeployKeysProjectCreateData is the typed request payload for ApiEntitiesDeployKeysProject.CreateTyped.
type ApiEntitiesDeployKeysProjectCreateData struct {
	ProjectId string `json:"project_id"`
}

// ApiEntitiesDeployToken is the typed data model for the api_entities_deploy_token entity.
type ApiEntitiesDeployToken struct {
	Expired *bool `json:"expired,omitempty"`
	ExpiresAt *string `json:"expires_at,omitempty"`
	Id *int `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	Revoked *bool `json:"revoked,omitempty"`
	Scope *[]any `json:"scope,omitempty"`
	Username *string `json:"username,omitempty"`
}

// ApiEntitiesDeployTokenLoadMatch is the typed request payload for ApiEntitiesDeployToken.LoadTyped.
type ApiEntitiesDeployTokenLoadMatch struct {
	GroupId *string `json:"group_id,omitempty"`
	Id string `json:"id"`
	ProjectId *string `json:"project_id,omitempty"`
}

// ApiEntitiesDeployTokenListMatch is the typed request payload for ApiEntitiesDeployToken.ListTyped.
type ApiEntitiesDeployTokenListMatch struct {
	GroupId *string `json:"group_id,omitempty"`
	ProjectId *string `json:"project_id,omitempty"`
}

// ApiEntitiesDeployTokenWithToken is the typed data model for the api_entities_deploy_token_with_token entity.
type ApiEntitiesDeployTokenWithToken struct {
}

// ApiEntitiesDeployTokenWithTokenCreateData is the typed request payload for ApiEntitiesDeployTokenWithToken.CreateTyped.
type ApiEntitiesDeployTokenWithTokenCreateData struct {
	GroupId *string `json:"group_id,omitempty"`
	ProjectId *string `json:"project_id,omitempty"`
}

// ApiEntitiesDeployment is the typed data model for the api_entities_deployment entity.
type ApiEntitiesDeployment struct {
	CreatedAt *string `json:"created_at,omitempty"`
	Deployable *map[string]any `json:"deployable,omitempty"`
	Environment *map[string]any `json:"environment,omitempty"`
	Id *int `json:"id,omitempty"`
	Iid *int `json:"iid,omitempty"`
	Ref *string `json:"ref,omitempty"`
	Sha *string `json:"sha,omitempty"`
	Status *string `json:"status,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	User *map[string]any `json:"user,omitempty"`
}

// ApiEntitiesDeploymentListMatch is the typed request payload for ApiEntitiesDeployment.ListTyped.
type ApiEntitiesDeploymentListMatch struct {
	ProjectId string `json:"project_id"`
}

// ApiEntitiesDeploymentExtended is the typed data model for the api_entities_deployment_extended entity.
type ApiEntitiesDeploymentExtended struct {
	Approval *map[string]any `json:"approval,omitempty"`
	ApprovalSummary *map[string]any `json:"approval_summary,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Deployable *map[string]any `json:"deployable,omitempty"`
	Environment *map[string]any `json:"environment,omitempty"`
	Id *int `json:"id,omitempty"`
	Iid *int `json:"iid,omitempty"`
	PendingApprovalCount *int `json:"pending_approval_count,omitempty"`
	Ref *string `json:"ref,omitempty"`
	Sha *string `json:"sha,omitempty"`
	Status *string `json:"status,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	User *map[string]any `json:"user,omitempty"`
}

// ApiEntitiesDeploymentExtendedLoadMatch is the typed request payload for ApiEntitiesDeploymentExtended.LoadTyped.
type ApiEntitiesDeploymentExtendedLoadMatch struct {
	DeploymentId string `json:"deployment_id"`
	ProjectId string `json:"project_id"`
}

// ApiEntitiesDeploymentExtendedCreateData is the typed request payload for ApiEntitiesDeploymentExtended.CreateTyped.
type ApiEntitiesDeploymentExtendedCreateData struct {
	ProjectId string `json:"project_id"`
}

// ApiEntitiesDeploymentExtendedUpdateData is the typed request payload for ApiEntitiesDeploymentExtended.UpdateTyped.
type ApiEntitiesDeploymentExtendedUpdateData struct {
	DeploymentId string `json:"deployment_id"`
	ProjectId string `json:"project_id"`
}

// ApiEntitiesDeploymentsApproval is the typed data model for the api_entities_deployments_approval entity.
type ApiEntitiesDeploymentsApproval struct {
}

// ApiEntitiesDeploymentsApprovalCreateData is the typed request payload for ApiEntitiesDeploymentsApproval.CreateTyped.
type ApiEntitiesDeploymentsApprovalCreateData struct {
	DeploymentId string `json:"deployment_id"`
	ProjectId string `json:"project_id"`
}

// ApiEntitiesDictionaryTable is the typed data model for the api_entities_dictionary_table entity.
type ApiEntitiesDictionaryTable struct {
	FeatureCategory *[]any `json:"feature_category,omitempty"`
	TableName *string `json:"table_name,omitempty"`
}

// ApiEntitiesDictionaryTableLoadMatch is the typed request payload for ApiEntitiesDictionaryTable.LoadTyped.
type ApiEntitiesDictionaryTableLoadMatch struct {
	DatabasId string `json:"databas_id"`
	Id string `json:"id"`
}

// ApiEntitiesDiff is the typed data model for the api_entities_diff entity.
type ApiEntitiesDiff struct {
	AMode *string `json:"a_mode,omitempty"`
	BMode *string `json:"b_mode,omitempty"`
	Collapsed *bool `json:"collapsed,omitempty"`
	DeletedFile *bool `json:"deleted_file,omitempty"`
	Diff *string `json:"diff,omitempty"`
	GeneratedFile *bool `json:"generated_file,omitempty"`
	NewFile *bool `json:"new_file,omitempty"`
	NewPath *string `json:"new_path,omitempty"`
	OldPath *string `json:"old_path,omitempty"`
	RenamedFile *bool `json:"renamed_file,omitempty"`
	TooLarge *bool `json:"too_large,omitempty"`
}

// ApiEntitiesDiffLoadMatch is the typed request payload for ApiEntitiesDiff.LoadTyped.
type ApiEntitiesDiffLoadMatch struct {
	MergeRequestId string `json:"merge_request_id"`
	ProjectId string `json:"project_id"`
}

// ApiEntitiesDiffListMatch is the typed request payload for ApiEntitiesDiff.ListTyped.
type ApiEntitiesDiffListMatch struct {
	ProjectId string `json:"project_id"`
	Sha any `json:"sha"`
}

// ApiEntitiesDiscoveredCluster is the typed data model for the api_entities_discovered_cluster entity.
type ApiEntitiesDiscoveredCluster struct {
	Group *string `json:"group,omitempty"`
	Project *string `json:"project,omitempty"`
}

// ApiEntitiesDiscoveredClusterLoadMatch is the typed request payload for ApiEntitiesDiscoveredCluster.LoadTyped.
type ApiEntitiesDiscoveredClusterLoadMatch struct {
	Group *string `json:"group,omitempty"`
	Project *string `json:"project,omitempty"`
}

// ApiEntitiesDraftNote is the typed data model for the api_entities_draft_note entity.
type ApiEntitiesDraftNote struct {
	AuthorId *int `json:"author_id,omitempty"`
	CommitId *int `json:"commit_id,omitempty"`
	DiscussionId *int `json:"discussion_id,omitempty"`
	Id *int `json:"id,omitempty"`
	LineCode *string `json:"line_code,omitempty"`
	MergeRequestId *int `json:"merge_request_id,omitempty"`
	Note *string `json:"note,omitempty"`
	Position *map[string]any `json:"position,omitempty"`
	ResolveDiscussion *bool `json:"resolve_discussion,omitempty"`
}

// ApiEntitiesDraftNoteLoadMatch is the typed request payload for ApiEntitiesDraftNote.LoadTyped.
type ApiEntitiesDraftNoteLoadMatch struct {
	Id string `json:"id"`
	MergeRequestId string `json:"merge_request_id"`
	ProjectId string `json:"project_id"`
}

// ApiEntitiesDraftNoteListMatch is the typed request payload for ApiEntitiesDraftNote.ListTyped.
type ApiEntitiesDraftNoteListMatch struct {
	MergeRequestId string `json:"merge_request_id"`
	ProjectId string `json:"project_id"`
}

// ApiEntitiesDraftNoteCreateData is the typed request payload for ApiEntitiesDraftNote.CreateTyped.
type ApiEntitiesDraftNoteCreateData struct {
	MergeRequestId string `json:"merge_request_id"`
	ProjectId string `json:"project_id"`
}

// ApiEntitiesDraftNoteUpdateData is the typed request payload for ApiEntitiesDraftNote.UpdateTyped.
type ApiEntitiesDraftNoteUpdateData struct {
	Id string `json:"id"`
	MergeRequestId string `json:"merge_request_id"`
	ProjectId string `json:"project_id"`
}

// ApiEntitiesEnvironment is the typed data model for the api_entities_environment entity.
type ApiEntitiesEnvironment struct {
	AutoStopAt *string `json:"auto_stop_at,omitempty"`
	AutoStopSetting *string `json:"auto_stop_setting,omitempty"`
	ClusterAgent *map[string]any `json:"cluster_agent,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	ExternalUrl *string `json:"external_url,omitempty"`
	FluxResourcePath *string `json:"flux_resource_path,omitempty"`
	Id *int `json:"id,omitempty"`
	KubernetesNamespace *string `json:"kubernetes_namespace,omitempty"`
	LastDeployment *map[string]any `json:"last_deployment,omitempty"`
	Name *string `json:"name,omitempty"`
	Project *map[string]any `json:"project,omitempty"`
	Slug *string `json:"slug,omitempty"`
	State *string `json:"state,omitempty"`
	Tier *string `json:"tier,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// ApiEntitiesEnvironmentLoadMatch is the typed request payload for ApiEntitiesEnvironment.LoadTyped.
type ApiEntitiesEnvironmentLoadMatch struct {
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
}

// ApiEntitiesEnvironmentListMatch is the typed request payload for ApiEntitiesEnvironment.ListTyped.
type ApiEntitiesEnvironmentListMatch struct {
	ProjectId string `json:"project_id"`
}

// ApiEntitiesEnvironmentCreateData is the typed request payload for ApiEntitiesEnvironment.CreateTyped.
type ApiEntitiesEnvironmentCreateData struct {
	EnvironmentId *string `json:"environment_id,omitempty"`
	ProjectId string `json:"project_id"`
}

// ApiEntitiesEnvironmentUpdateData is the typed request payload for ApiEntitiesEnvironment.UpdateTyped.
type ApiEntitiesEnvironmentUpdateData struct {
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
}

// ApiEntitiesErrorTrackingClientKey is the typed data model for the api_entities_error_tracking_client_key entity.
type ApiEntitiesErrorTrackingClientKey struct {
	Active *bool `json:"active,omitempty"`
	Id *int `json:"id,omitempty"`
	PublicKey *string `json:"public_key,omitempty"`
	SentryDsn *string `json:"sentry_dsn,omitempty"`
}

// ApiEntitiesErrorTrackingClientKeyListMatch is the typed request payload for ApiEntitiesErrorTrackingClientKey.ListTyped.
type ApiEntitiesErrorTrackingClientKeyListMatch struct {
	ProjectId string `json:"project_id"`
}

// ApiEntitiesErrorTrackingClientKeyCreateData is the typed request payload for ApiEntitiesErrorTrackingClientKey.CreateTyped.
type ApiEntitiesErrorTrackingClientKeyCreateData struct {
	ProjectId string `json:"project_id"`
}

// ApiEntitiesErrorTrackingProjectSetting is the typed data model for the api_entities_error_tracking_project_setting entity.
type ApiEntitiesErrorTrackingProjectSetting struct {
	Active *bool `json:"active,omitempty"`
	ApiUrl *string `json:"api_url,omitempty"`
	Integrated *bool `json:"integrated,omitempty"`
	ProjectName *string `json:"project_name,omitempty"`
	SentryExternalUrl *string `json:"sentry_external_url,omitempty"`
}

// ApiEntitiesErrorTrackingProjectSettingLoadMatch is the typed request payload for ApiEntitiesErrorTrackingProjectSetting.LoadTyped.
type ApiEntitiesErrorTrackingProjectSettingLoadMatch struct {
	ProjectId string `json:"project_id"`
}

// ApiEntitiesErrorTrackingProjectSettingUpdateData is the typed request payload for ApiEntitiesErrorTrackingProjectSetting.UpdateTyped.
type ApiEntitiesErrorTrackingProjectSettingUpdateData struct {
	ProjectId string `json:"project_id"`
}

// ApiEntitiesEvent is the typed data model for the api_entities_event entity.
type ApiEntitiesEvent struct {
	ActionName *string `json:"action_name,omitempty"`
	Author *map[string]any `json:"author,omitempty"`
	AuthorId *int `json:"author_id,omitempty"`
	AuthorUsername *string `json:"author_username,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Id *int `json:"id,omitempty"`
	Imported *bool `json:"imported,omitempty"`
	ImportedFrom *string `json:"imported_from,omitempty"`
	Note *map[string]any `json:"note,omitempty"`
	ProjectId *int `json:"project_id,omitempty"`
	PushData *map[string]any `json:"push_data,omitempty"`
	TargetId *int `json:"target_id,omitempty"`
	TargetIid *int `json:"target_iid,omitempty"`
	TargetTitle *string `json:"target_title,omitempty"`
	TargetType *string `json:"target_type,omitempty"`
	WikiPage *map[string]any `json:"wiki_page,omitempty"`
}

// ApiEntitiesEventLoadMatch is the typed request payload for ApiEntitiesEvent.LoadTyped.
type ApiEntitiesEventLoadMatch struct {
	ProjectId string `json:"project_id"`
}

// ApiEntitiesEventListMatch is the typed request payload for ApiEntitiesEvent.ListTyped.
type ApiEntitiesEventListMatch struct {
	UserId *string `json:"user_id,omitempty"`
}

// ApiEntitiesFeature is the typed data model for the api_entities_feature entity.
type ApiEntitiesFeature struct {
	Definition *map[string]any `json:"definition,omitempty"`
	Gate *map[string]any `json:"gate,omitempty"`
	Name *string `json:"name,omitempty"`
	State *string `json:"state,omitempty"`
}

// ApiEntitiesFeatureListMatch is the typed request payload for ApiEntitiesFeature.ListTyped.
type ApiEntitiesFeatureListMatch struct {
	Definition *map[string]any `json:"definition,omitempty"`
	Gate *map[string]any `json:"gate,omitempty"`
	Name *string `json:"name,omitempty"`
	State *string `json:"state,omitempty"`
}

// ApiEntitiesFeatureCreateData is the typed request payload for ApiEntitiesFeature.CreateTyped.
type ApiEntitiesFeatureCreateData struct {
	Id string `json:"id"`
}

// ApiEntitiesFeatureDefinition is the typed data model for the api_entities_feature_definition entity.
type ApiEntitiesFeatureDefinition struct {
	DefaultEnabled *string `json:"default_enabled,omitempty"`
	FeatureIssueUrl *string `json:"feature_issue_url,omitempty"`
	Group *string `json:"group,omitempty"`
	IntendedToRolloutBy *string `json:"intended_to_rollout_by,omitempty"`
	IntroducedByUrl *string `json:"introduced_by_url,omitempty"`
	LogStateChange *string `json:"log_state_change,omitempty"`
	Milestone *string `json:"milestone,omitempty"`
	Name *string `json:"name,omitempty"`
	RolloutIssueUrl *string `json:"rollout_issue_url,omitempty"`
	Type *string `json:"type,omitempty"`
}

// ApiEntitiesFeatureDefinitionListMatch is the typed request payload for ApiEntitiesFeatureDefinition.ListTyped.
type ApiEntitiesFeatureDefinitionListMatch struct {
	DefaultEnabled *string `json:"default_enabled,omitempty"`
	FeatureIssueUrl *string `json:"feature_issue_url,omitempty"`
	Group *string `json:"group,omitempty"`
	IntendedToRolloutBy *string `json:"intended_to_rollout_by,omitempty"`
	IntroducedByUrl *string `json:"introduced_by_url,omitempty"`
	LogStateChange *string `json:"log_state_change,omitempty"`
	Milestone *string `json:"milestone,omitempty"`
	Name *string `json:"name,omitempty"`
	RolloutIssueUrl *string `json:"rollout_issue_url,omitempty"`
	Type *string `json:"type,omitempty"`
}

// ApiEntitiesFeatureFlag is the typed data model for the api_entities_feature_flag entity.
type ApiEntitiesFeatureFlag struct {
	Active *bool `json:"active,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	Name *string `json:"name,omitempty"`
	Scope *string `json:"scope,omitempty"`
	Strategy *map[string]any `json:"strategy,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Version *string `json:"version,omitempty"`
}

// ApiEntitiesFeatureFlagLoadMatch is the typed request payload for ApiEntitiesFeatureFlag.LoadTyped.
type ApiEntitiesFeatureFlagLoadMatch struct {
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
}

// ApiEntitiesFeatureFlagListMatch is the typed request payload for ApiEntitiesFeatureFlag.ListTyped.
type ApiEntitiesFeatureFlagListMatch struct {
	ProjectId string `json:"project_id"`
}

// ApiEntitiesFeatureFlagCreateData is the typed request payload for ApiEntitiesFeatureFlag.CreateTyped.
type ApiEntitiesFeatureFlagCreateData struct {
	ProjectId string `json:"project_id"`
}

// ApiEntitiesFeatureFlagUpdateData is the typed request payload for ApiEntitiesFeatureFlag.UpdateTyped.
type ApiEntitiesFeatureFlagUpdateData struct {
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
}

// ApiEntitiesFeatureFlagUserList is the typed data model for the api_entities_feature_flag_user_list entity.
type ApiEntitiesFeatureFlagUserList struct {
	CreatedAt *string `json:"created_at,omitempty"`
	EditPath *string `json:"edit_path,omitempty"`
	Id *int `json:"id,omitempty"`
	Iid *int `json:"iid,omitempty"`
	Name *string `json:"name,omitempty"`
	Path *string `json:"path,omitempty"`
	ProjectId *int `json:"project_id,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UserXid *string `json:"user_xid,omitempty"`
}

// ApiEntitiesFeatureFlagUserListLoadMatch is the typed request payload for ApiEntitiesFeatureFlagUserList.LoadTyped.
type ApiEntitiesFeatureFlagUserListLoadMatch struct {
	Iid any `json:"iid"`
	ProjectId string `json:"project_id"`
}

// ApiEntitiesFeatureFlagUserListListMatch is the typed request payload for ApiEntitiesFeatureFlagUserList.ListTyped.
type ApiEntitiesFeatureFlagUserListListMatch struct {
	ProjectId string `json:"project_id"`
}

// ApiEntitiesFeatureFlagUserListCreateData is the typed request payload for ApiEntitiesFeatureFlagUserList.CreateTyped.
type ApiEntitiesFeatureFlagUserListCreateData struct {
	ProjectId string `json:"project_id"`
}

// ApiEntitiesFeatureFlagUserListUpdateData is the typed request payload for ApiEntitiesFeatureFlagUserList.UpdateTyped.
type ApiEntitiesFeatureFlagUserListUpdateData struct {
	Iid any `json:"iid"`
	ProjectId string `json:"project_id"`
}

// ApiEntitiesFreezePeriod is the typed data model for the api_entities_freeze_period entity.
type ApiEntitiesFreezePeriod struct {
	CreatedAt *string `json:"created_at,omitempty"`
	CronTimezone *string `json:"cron_timezone,omitempty"`
	FreezeEnd *string `json:"freeze_end,omitempty"`
	FreezeStart *string `json:"freeze_start,omitempty"`
	Id *int `json:"id,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// ApiEntitiesFreezePeriodLoadMatch is the typed request payload for ApiEntitiesFreezePeriod.LoadTyped.
type ApiEntitiesFreezePeriodLoadMatch struct {
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
}

// ApiEntitiesFreezePeriodListMatch is the typed request payload for ApiEntitiesFreezePeriod.ListTyped.
type ApiEntitiesFreezePeriodListMatch struct {
	ProjectId string `json:"project_id"`
}

// ApiEntitiesFreezePeriodCreateData is the typed request payload for ApiEntitiesFreezePeriod.CreateTyped.
type ApiEntitiesFreezePeriodCreateData struct {
	ProjectId string `json:"project_id"`
}

// ApiEntitiesFreezePeriodUpdateData is the typed request payload for ApiEntitiesFreezePeriod.UpdateTyped.
type ApiEntitiesFreezePeriodUpdateData struct {
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
}

// ApiEntitiesGitlabSubscription is the typed data model for the api_entities_gitlab_subscription entity.
type ApiEntitiesGitlabSubscription struct {
	Billing *map[string]any `json:"billing,omitempty"`
	Plan *map[string]any `json:"plan,omitempty"`
	Usage *map[string]any `json:"usage,omitempty"`
}

// ApiEntitiesGitlabSubscriptionLoadMatch is the typed request payload for ApiEntitiesGitlabSubscription.LoadTyped.
type ApiEntitiesGitlabSubscriptionLoadMatch struct {
	NamespaceId string `json:"namespace_id"`
}

// ApiEntitiesGoModuleVersion is the typed data model for the api_entities_go_module_version entity.
type ApiEntitiesGoModuleVersion struct {
	Time *string `json:"time,omitempty"`
	Version *string `json:"version,omitempty"`
}

// ApiEntitiesGoModuleVersionLoadMatch is the typed request payload for ApiEntitiesGoModuleVersion.LoadTyped.
type ApiEntitiesGoModuleVersionLoadMatch struct {
	ModuleVersion any `json:"module_version"`
	ProjectId string `json:"project_id"`
}

// ApiEntitiesGroup is the typed data model for the api_entities_group entity.
type ApiEntitiesGroup struct {
	Archived *bool `json:"archived,omitempty"`
	AutoDevopsEnabled *string `json:"auto_devops_enabled,omitempty"`
	AutoDuoCodeReviewEnabled *string `json:"auto_duo_code_review_enabled,omitempty"`
	AvatarUrl *string `json:"avatar_url,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	CustomAttribute *map[string]any `json:"custom_attribute,omitempty"`
	DefaultBranch *string `json:"default_branch,omitempty"`
	DefaultBranchProtection *string `json:"default_branch_protection,omitempty"`
	DefaultBranchProtectionDefault *string `json:"default_branch_protection_default,omitempty"`
	Description *string `json:"description,omitempty"`
	DuoCoreFeaturesEnabled *bool `json:"duo_core_features_enabled,omitempty"`
	DuoFeaturesEnabled *string `json:"duo_features_enabled,omitempty"`
	EmailsDisabled *bool `json:"emails_disabled,omitempty"`
	EmailsEnabled *bool `json:"emails_enabled,omitempty"`
	FileTemplateProjectId *string `json:"file_template_project_id,omitempty"`
	FullName *string `json:"full_name,omitempty"`
	FullPath *string `json:"full_path,omitempty"`
	Id *string `json:"id,omitempty"`
	LdapAccess *string `json:"ldap_access,omitempty"`
	LdapCn *string `json:"ldap_cn,omitempty"`
	LdapGroupLink *map[string]any `json:"ldap_group_link,omitempty"`
	LfsEnabled *string `json:"lfs_enabled,omitempty"`
	LockDuoFeaturesEnabled *string `json:"lock_duo_features_enabled,omitempty"`
	LockMathRenderingLimitsEnabled *bool `json:"lock_math_rendering_limits_enabled,omitempty"`
	MarkedForDeletionOn *string `json:"marked_for_deletion_on,omitempty"`
	MathRenderingLimitsEnabled *bool `json:"math_rendering_limits_enabled,omitempty"`
	MaxArtifactsSize *int `json:"max_artifacts_size,omitempty"`
	MentionsDisabled *string `json:"mentions_disabled,omitempty"`
	Name *string `json:"name,omitempty"`
	OrganizationId *string `json:"organization_id,omitempty"`
	ParentId *string `json:"parent_id,omitempty"`
	Path *string `json:"path,omitempty"`
	ProjectCreationLevel *string `json:"project_creation_level,omitempty"`
	RepositoryStorage *string `json:"repository_storage,omitempty"`
	RequestAccessEnabled *string `json:"request_access_enabled,omitempty"`
	RequireTwoFactorAuthentication *string `json:"require_two_factor_authentication,omitempty"`
	RootStorageStatistic *map[string]any `json:"root_storage_statistic,omitempty"`
	SamlGroupLink *map[string]any `json:"saml_group_link,omitempty"`
	ShareWithGroupLock *string `json:"share_with_group_lock,omitempty"`
	SharedRunnersSetting *string `json:"shared_runners_setting,omitempty"`
	ShowDiffPreviewInEmail *bool `json:"show_diff_preview_in_email,omitempty"`
	Statistic *map[string]any `json:"statistic,omitempty"`
	SubgroupCreationLevel *string `json:"subgroup_creation_level,omitempty"`
	TwoFactorGracePeriod *string `json:"two_factor_grace_period,omitempty"`
	Visibility *string `json:"visibility,omitempty"`
	WebBasedCommitSigningEnabled *string `json:"web_based_commit_signing_enabled,omitempty"`
	WebUrl *string `json:"web_url,omitempty"`
	WikiAccessLevel *string `json:"wiki_access_level,omitempty"`
}

// ApiEntitiesGroupLoadMatch is the typed request payload for ApiEntitiesGroup.LoadTyped.
type ApiEntitiesGroupLoadMatch struct {
	ProjectId string `json:"project_id"`
}

// ApiEntitiesGroupListMatch is the typed request payload for ApiEntitiesGroup.ListTyped.
type ApiEntitiesGroupListMatch struct {
	GroupId *string `json:"group_id,omitempty"`
	ProjectId *string `json:"project_id,omitempty"`
}

// ApiEntitiesGroupCreateData is the typed request payload for ApiEntitiesGroup.CreateTyped.
type ApiEntitiesGroupCreateData struct {
	GroupId *string `json:"group_id,omitempty"`
}

// ApiEntitiesGroupUpdateData is the typed request payload for ApiEntitiesGroup.UpdateTyped.
type ApiEntitiesGroupUpdateData struct {
	Id string `json:"id"`
}

// ApiEntitiesGroupDetail is the typed data model for the api_entities_group_detail entity.
type ApiEntitiesGroupDetail struct {
	AllowedEmailDomainsList *string `json:"allowed_email_domains_list,omitempty"`
	Archived *bool `json:"archived,omitempty"`
	AutoBanUserOnExcessiveProjectsDownload *string `json:"auto_ban_user_on_excessive_projects_download,omitempty"`
	AutoDevopsEnabled *string `json:"auto_devops_enabled,omitempty"`
	AutoDuoCodeReviewEnabled *string `json:"auto_duo_code_review_enabled,omitempty"`
	AvatarUrl *string `json:"avatar_url,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	CustomAttribute *map[string]any `json:"custom_attribute,omitempty"`
	DefaultBranch *string `json:"default_branch,omitempty"`
	DefaultBranchProtection *string `json:"default_branch_protection,omitempty"`
	DefaultBranchProtectionDefault *string `json:"default_branch_protection_default,omitempty"`
	Description *string `json:"description,omitempty"`
	DuoCoreFeaturesEnabled *bool `json:"duo_core_features_enabled,omitempty"`
	DuoFeaturesEnabled *string `json:"duo_features_enabled,omitempty"`
	EmailsDisabled *bool `json:"emails_disabled,omitempty"`
	EmailsEnabled *bool `json:"emails_enabled,omitempty"`
	EnabledGitAccessProtocol *string `json:"enabled_git_access_protocol,omitempty"`
	ExtraSharedRunnersMinutesLimit *string `json:"extra_shared_runners_minutes_limit,omitempty"`
	FileTemplateProjectId *string `json:"file_template_project_id,omitempty"`
	FullName *string `json:"full_name,omitempty"`
	FullPath *string `json:"full_path,omitempty"`
	Id *string `json:"id,omitempty"`
	IpRestrictionRange *string `json:"ip_restriction_range,omitempty"`
	LdapAccess *string `json:"ldap_access,omitempty"`
	LdapCn *string `json:"ldap_cn,omitempty"`
	LdapGroupLink *map[string]any `json:"ldap_group_link,omitempty"`
	LfsEnabled *string `json:"lfs_enabled,omitempty"`
	LockDuoFeaturesEnabled *string `json:"lock_duo_features_enabled,omitempty"`
	LockMathRenderingLimitsEnabled *bool `json:"lock_math_rendering_limits_enabled,omitempty"`
	MarkedForDeletionOn *string `json:"marked_for_deletion_on,omitempty"`
	MathRenderingLimitsEnabled *bool `json:"math_rendering_limits_enabled,omitempty"`
	MaxArtifactsSize *int `json:"max_artifacts_size,omitempty"`
	MembershipLock *string `json:"membership_lock,omitempty"`
	MentionsDisabled *string `json:"mentions_disabled,omitempty"`
	Name *string `json:"name,omitempty"`
	OrganizationId *string `json:"organization_id,omitempty"`
	ParentId *string `json:"parent_id,omitempty"`
	Path *string `json:"path,omitempty"`
	PreventForkingOutsideGroup *string `json:"prevent_forking_outside_group,omitempty"`
	PreventSharingGroupsOutsideHierarchy *string `json:"prevent_sharing_groups_outside_hierarchy,omitempty"`
	Project *map[string]any `json:"project,omitempty"`
	ProjectCreationLevel *string `json:"project_creation_level,omitempty"`
	RepositoryStorage *string `json:"repository_storage,omitempty"`
	RequestAccessEnabled *string `json:"request_access_enabled,omitempty"`
	RequireTwoFactorAuthentication *string `json:"require_two_factor_authentication,omitempty"`
	RootStorageStatistic *map[string]any `json:"root_storage_statistic,omitempty"`
	RunnersToken *string `json:"runners_token,omitempty"`
	SamlGroupLink *map[string]any `json:"saml_group_link,omitempty"`
	ServiceAccessTokensExpirationEnforced *string `json:"service_access_tokens_expiration_enforced,omitempty"`
	ShareWithGroupLock *string `json:"share_with_group_lock,omitempty"`
	SharedProject *map[string]any `json:"shared_project,omitempty"`
	SharedRunnersMinutesLimit *string `json:"shared_runners_minutes_limit,omitempty"`
	SharedRunnersSetting *string `json:"shared_runners_setting,omitempty"`
	SharedWithGroup *string `json:"shared_with_group,omitempty"`
	ShowDiffPreviewInEmail *bool `json:"show_diff_preview_in_email,omitempty"`
	Statistic *map[string]any `json:"statistic,omitempty"`
	SubgroupCreationLevel *string `json:"subgroup_creation_level,omitempty"`
	TwoFactorGracePeriod *string `json:"two_factor_grace_period,omitempty"`
	UniqueProjectDownloadLimit *string `json:"unique_project_download_limit,omitempty"`
	UniqueProjectDownloadLimitAlertlist *string `json:"unique_project_download_limit_alertlist,omitempty"`
	UniqueProjectDownloadLimitAllowlist *string `json:"unique_project_download_limit_allowlist,omitempty"`
	UniqueProjectDownloadLimitIntervalInSecond *string `json:"unique_project_download_limit_interval_in_second,omitempty"`
	Visibility *string `json:"visibility,omitempty"`
	WebBasedCommitSigningEnabled *string `json:"web_based_commit_signing_enabled,omitempty"`
	WebUrl *string `json:"web_url,omitempty"`
	WikiAccessLevel *string `json:"wiki_access_level,omitempty"`
}

// ApiEntitiesGroupDetailLoadMatch is the typed request payload for ApiEntitiesGroupDetail.LoadTyped.
type ApiEntitiesGroupDetailLoadMatch struct {
	Id string `json:"id"`
}

// ApiEntitiesGroupDetailCreateData is the typed request payload for ApiEntitiesGroupDetail.CreateTyped.
type ApiEntitiesGroupDetailCreateData struct {
	GroupId string `json:"group_id"`
	ProjectId *string `json:"project_id,omitempty"`
}

// ApiEntitiesHook is the typed data model for the api_entities_hook entity.
type ApiEntitiesHook struct {
	AlertStatus *any `json:"alert_status,omitempty"`
	BranchFilterStrategy *string `json:"branch_filter_strategy,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	CustomHeader *[]any `json:"custom_header,omitempty"`
	CustomWebhookTemplate *string `json:"custom_webhook_template,omitempty"`
	Description *string `json:"description,omitempty"`
	DisabledUntil *string `json:"disabled_until,omitempty"`
	EnableSslVerification *bool `json:"enable_ssl_verification,omitempty"`
	Id *string `json:"id,omitempty"`
	MergeRequestsEvent *bool `json:"merge_requests_event,omitempty"`
	Name *string `json:"name,omitempty"`
	PushEvent *bool `json:"push_event,omitempty"`
	PushEventsBranchFilter *string `json:"push_events_branch_filter,omitempty"`
	RepositoryUpdateEvent *bool `json:"repository_update_event,omitempty"`
	TagPushEvent *bool `json:"tag_push_event,omitempty"`
	Url *string `json:"url,omitempty"`
	UrlVariable *[]any `json:"url_variable,omitempty"`
}

// ApiEntitiesHookLoadMatch is the typed request payload for ApiEntitiesHook.LoadTyped.
type ApiEntitiesHookLoadMatch struct {
	Id string `json:"id"`
}

// ApiEntitiesHookListMatch is the typed request payload for ApiEntitiesHook.ListTyped.
type ApiEntitiesHookListMatch struct {
	AlertStatus *any `json:"alert_status,omitempty"`
	BranchFilterStrategy *string `json:"branch_filter_strategy,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	CustomHeader *[]any `json:"custom_header,omitempty"`
	CustomWebhookTemplate *string `json:"custom_webhook_template,omitempty"`
	Description *string `json:"description,omitempty"`
	DisabledUntil *string `json:"disabled_until,omitempty"`
	EnableSslVerification *bool `json:"enable_ssl_verification,omitempty"`
	Id *string `json:"id,omitempty"`
	MergeRequestsEvent *bool `json:"merge_requests_event,omitempty"`
	Name *string `json:"name,omitempty"`
	PushEvent *bool `json:"push_event,omitempty"`
	PushEventsBranchFilter *string `json:"push_events_branch_filter,omitempty"`
	RepositoryUpdateEvent *bool `json:"repository_update_event,omitempty"`
	TagPushEvent *bool `json:"tag_push_event,omitempty"`
	Url *string `json:"url,omitempty"`
	UrlVariable *[]any `json:"url_variable,omitempty"`
}

// ApiEntitiesHookCreateData is the typed request payload for ApiEntitiesHook.CreateTyped.
type ApiEntitiesHookCreateData struct {
	AlertStatus *any `json:"alert_status,omitempty"`
	BranchFilterStrategy *string `json:"branch_filter_strategy,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	CustomHeader *[]any `json:"custom_header,omitempty"`
	CustomWebhookTemplate *string `json:"custom_webhook_template,omitempty"`
	Description *string `json:"description,omitempty"`
	DisabledUntil *string `json:"disabled_until,omitempty"`
	EnableSslVerification *bool `json:"enable_ssl_verification,omitempty"`
	Id *string `json:"id,omitempty"`
	MergeRequestsEvent *bool `json:"merge_requests_event,omitempty"`
	Name *string `json:"name,omitempty"`
	PushEvent *bool `json:"push_event,omitempty"`
	PushEventsBranchFilter *string `json:"push_events_branch_filter,omitempty"`
	RepositoryUpdateEvent *bool `json:"repository_update_event,omitempty"`
	TagPushEvent *bool `json:"tag_push_event,omitempty"`
	Url *string `json:"url,omitempty"`
	UrlVariable *[]any `json:"url_variable,omitempty"`
}

// ApiEntitiesHookUpdateData is the typed request payload for ApiEntitiesHook.UpdateTyped.
type ApiEntitiesHookUpdateData struct {
	Id string `json:"id"`
}

// ApiEntitiesIntegration is the typed data model for the api_entities_integration entity.
type ApiEntitiesIntegration struct {
	Active *bool `json:"active,omitempty"`
	AlertEvent *bool `json:"alert_event,omitempty"`
	CommentOnEventEnabled *bool `json:"comment_on_event_enabled,omitempty"`
	CommitEvent *bool `json:"commit_event,omitempty"`
	ConfidentialIssuesEvent *bool `json:"confidential_issues_event,omitempty"`
	ConfidentialNoteEvent *bool `json:"confidential_note_event,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DeploymentEvent *bool `json:"deployment_event,omitempty"`
	Id *int `json:"id,omitempty"`
	IncidentEvent *bool `json:"incident_event,omitempty"`
	Inherited *bool `json:"inherited,omitempty"`
	IssuesEvent *bool `json:"issues_event,omitempty"`
	JobEvent *bool `json:"job_event,omitempty"`
	MergeRequestsEvent *bool `json:"merge_requests_event,omitempty"`
	NoteEvent *bool `json:"note_event,omitempty"`
	PipelineEvent *bool `json:"pipeline_event,omitempty"`
	Property *map[string]any `json:"property,omitempty"`
	PushEvent *bool `json:"push_event,omitempty"`
	Slug *int `json:"slug,omitempty"`
	TagPushEvent *bool `json:"tag_push_event,omitempty"`
	Title *string `json:"title,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	VulnerabilityEvent *bool `json:"vulnerability_event,omitempty"`
	WikiPageEvent *bool `json:"wiki_page_event,omitempty"`
}

// ApiEntitiesIntegrationLoadMatch is the typed request payload for ApiEntitiesIntegration.LoadTyped.
type ApiEntitiesIntegrationLoadMatch struct {
	GroupId *string `json:"group_id,omitempty"`
	Id *string `json:"id,omitempty"`
	ProjectId *string `json:"project_id,omitempty"`
	Slug *string `json:"slug,omitempty"`
}

// ApiEntitiesIntegrationBasic is the typed data model for the api_entities_integration_basic entity.
type ApiEntitiesIntegrationBasic struct {
	Active *bool `json:"active,omitempty"`
	AlertEvent *bool `json:"alert_event,omitempty"`
	CommentOnEventEnabled *bool `json:"comment_on_event_enabled,omitempty"`
	CommitEvent *bool `json:"commit_event,omitempty"`
	ConfidentialIssuesEvent *bool `json:"confidential_issues_event,omitempty"`
	ConfidentialNoteEvent *bool `json:"confidential_note_event,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DeploymentEvent *bool `json:"deployment_event,omitempty"`
	Id *int `json:"id,omitempty"`
	IncidentEvent *bool `json:"incident_event,omitempty"`
	Inherited *bool `json:"inherited,omitempty"`
	IssuesEvent *bool `json:"issues_event,omitempty"`
	JobEvent *bool `json:"job_event,omitempty"`
	MergeRequestsEvent *bool `json:"merge_requests_event,omitempty"`
	NoteEvent *bool `json:"note_event,omitempty"`
	PipelineEvent *bool `json:"pipeline_event,omitempty"`
	PushEvent *bool `json:"push_event,omitempty"`
	Slug *int `json:"slug,omitempty"`
	TagPushEvent *bool `json:"tag_push_event,omitempty"`
	Title *string `json:"title,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	VulnerabilityEvent *bool `json:"vulnerability_event,omitempty"`
	WikiPageEvent *bool `json:"wiki_page_event,omitempty"`
}

// ApiEntitiesIntegrationBasicListMatch is the typed request payload for ApiEntitiesIntegrationBasic.ListTyped.
type ApiEntitiesIntegrationBasicListMatch struct {
	GroupId *string `json:"group_id,omitempty"`
	ProjectId *string `json:"project_id,omitempty"`
}

// ApiEntitiesIntegrationBasicUpdateData is the typed request payload for ApiEntitiesIntegrationBasic.UpdateTyped.
type ApiEntitiesIntegrationBasicUpdateData struct {
	GroupId *string `json:"group_id,omitempty"`
	ProjectId *string `json:"project_id,omitempty"`
}

// ApiEntitiesInvitation is the typed data model for the api_entities_invitation entity.
type ApiEntitiesInvitation struct {
	AccessLevel *string `json:"access_level,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	CreatedByName *string `json:"created_by_name,omitempty"`
	ExpiresAt *string `json:"expires_at,omitempty"`
	InviteEmail *string `json:"invite_email,omitempty"`
	InviteToken *string `json:"invite_token,omitempty"`
	UserName *string `json:"user_name,omitempty"`
}

// ApiEntitiesInvitationListMatch is the typed request payload for ApiEntitiesInvitation.ListTyped.
type ApiEntitiesInvitationListMatch struct {
	GroupId *string `json:"group_id,omitempty"`
	ProjectId *string `json:"project_id,omitempty"`
}

// ApiEntitiesInvitationCreateData is the typed request payload for ApiEntitiesInvitation.CreateTyped.
type ApiEntitiesInvitationCreateData struct {
	GroupId *string `json:"group_id,omitempty"`
	ProjectId *string `json:"project_id,omitempty"`
}

// ApiEntitiesInvitationUpdateData is the typed request payload for ApiEntitiesInvitation.UpdateTyped.
type ApiEntitiesInvitationUpdateData struct {
	GroupId *string `json:"group_id,omitempty"`
	Id string `json:"id"`
	ProjectId *string `json:"project_id,omitempty"`
}

// ApiEntitiesIssuableTimeStat is the typed data model for the api_entities_issuable_time_stat entity.
type ApiEntitiesIssuableTimeStat struct {
	HumanTimeEstimate *string `json:"human_time_estimate,omitempty"`
	HumanTotalTimeSpent *string `json:"human_total_time_spent,omitempty"`
	TimeEstimate *int `json:"time_estimate,omitempty"`
	TotalTimeSpent *int `json:"total_time_spent,omitempty"`
}

// ApiEntitiesIssuableTimeStatLoadMatch is the typed request payload for ApiEntitiesIssuableTimeStat.LoadTyped.
type ApiEntitiesIssuableTimeStatLoadMatch struct {
	IssueId *string `json:"issue_id,omitempty"`
	ProjectId string `json:"project_id"`
	MergeRequestId *string `json:"merge_request_id,omitempty"`
}

// ApiEntitiesIssuableTimeStatCreateData is the typed request payload for ApiEntitiesIssuableTimeStat.CreateTyped.
type ApiEntitiesIssuableTimeStatCreateData struct {
	IssueId *string `json:"issue_id,omitempty"`
	ProjectId string `json:"project_id"`
	MergeRequestId *string `json:"merge_request_id,omitempty"`
}

// ApiEntitiesIssue is the typed data model for the api_entities_issue entity.
type ApiEntitiesIssue struct {
	Assignee *map[string]any `json:"assignee,omitempty"`
	Author *map[string]any `json:"author,omitempty"`
	BlockingIssuesCount *string `json:"blocking_issues_count,omitempty"`
	ClosedAt *string `json:"closed_at,omitempty"`
	ClosedBy *map[string]any `json:"closed_by,omitempty"`
	Confidential *bool `json:"confidential,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	DiscussionLocked *bool `json:"discussion_locked,omitempty"`
	Downvote *string `json:"downvote,omitempty"`
	DueDate *string `json:"due_date,omitempty"`
	Epic *map[string]any `json:"epic,omitempty"`
	EpicIid *string `json:"epic_iid,omitempty"`
	HasTask *bool `json:"has_task,omitempty"`
	HealthStatus *string `json:"health_status,omitempty"`
	Id *int `json:"id,omitempty"`
	Iid *int `json:"iid,omitempty"`
	Imported *string `json:"imported,omitempty"`
	ImportedFrom *string `json:"imported_from,omitempty"`
	IssueType *string `json:"issue_type,omitempty"`
	Iteration *map[string]any `json:"iteration,omitempty"`
	Label *[]any `json:"label,omitempty"`
	Link *map[string]any `json:"link,omitempty"`
	MergeRequestsCount *string `json:"merge_requests_count,omitempty"`
	Milestone *map[string]any `json:"milestone,omitempty"`
	MovedToId *string `json:"moved_to_id,omitempty"`
	ProjectId *int `json:"project_id,omitempty"`
	Reference *map[string]any `json:"reference,omitempty"`
	ServiceDeskReplyTo *string `json:"service_desk_reply_to,omitempty"`
	Severity *string `json:"severity,omitempty"`
	State *string `json:"state,omitempty"`
	Subscribed *string `json:"subscribed,omitempty"`
	TaskCompletionStatus *string `json:"task_completion_status,omitempty"`
	TaskStatus *string `json:"task_status,omitempty"`
	TimeStat *map[string]any `json:"time_stat,omitempty"`
	Title *string `json:"title,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Upvote *string `json:"upvote,omitempty"`
	UserNotesCount *string `json:"user_notes_count,omitempty"`
	WebUrl *string `json:"web_url,omitempty"`
	Weight *string `json:"weight,omitempty"`
}

// ApiEntitiesIssueLoadMatch is the typed request payload for ApiEntitiesIssue.LoadTyped.
type ApiEntitiesIssueLoadMatch struct {
	Id string `json:"id"`
	ProjectId *string `json:"project_id,omitempty"`
}

// ApiEntitiesIssueListMatch is the typed request payload for ApiEntitiesIssue.ListTyped.
type ApiEntitiesIssueListMatch struct {
	ProjectId *string `json:"project_id,omitempty"`
	GroupId *string `json:"group_id,omitempty"`
}

// ApiEntitiesIssueCreateData is the typed request payload for ApiEntitiesIssue.CreateTyped.
type ApiEntitiesIssueCreateData struct {
	IssueId *string `json:"issue_id,omitempty"`
	ProjectId string `json:"project_id"`
}

// ApiEntitiesIssueUpdateData is the typed request payload for ApiEntitiesIssue.UpdateTyped.
type ApiEntitiesIssueUpdateData struct {
	Id *string `json:"id,omitempty"`
	ProjectId string `json:"project_id"`
	IssueId *string `json:"issue_id,omitempty"`
}

// ApiEntitiesIssueLink is the typed data model for the api_entities_issue_link entity.
type ApiEntitiesIssueLink struct {
	LinkType *string `json:"link_type,omitempty"`
	SourceIssue *map[string]any `json:"source_issue,omitempty"`
	TargetIssue *map[string]any `json:"target_issue,omitempty"`
}

// ApiEntitiesIssueLinkLoadMatch is the typed request payload for ApiEntitiesIssueLink.LoadTyped.
type ApiEntitiesIssueLinkLoadMatch struct {
	Id string `json:"id"`
	IssueId string `json:"issue_id"`
	ProjectId string `json:"project_id"`
}

// ApiEntitiesIssueLinkCreateData is the typed request payload for ApiEntitiesIssueLink.CreateTyped.
type ApiEntitiesIssueLinkCreateData struct {
	IssueId string `json:"issue_id"`
	ProjectId string `json:"project_id"`
}

// ApiEntitiesLicense is the typed data model for the api_entities_license entity.
type ApiEntitiesLicense struct {
	Condition *[]any `json:"condition,omitempty"`
	Content *string `json:"content,omitempty"`
	Description *string `json:"description,omitempty"`
	HtmlUrl *string `json:"html_url,omitempty"`
	Key *string `json:"key,omitempty"`
	Limitation *[]any `json:"limitation,omitempty"`
	Name *string `json:"name,omitempty"`
	Nickname *string `json:"nickname,omitempty"`
	Permission *[]any `json:"permission,omitempty"`
	Popular *bool `json:"popular,omitempty"`
	SourceUrl *string `json:"source_url,omitempty"`
}

// ApiEntitiesLicenseListMatch is the typed request payload for ApiEntitiesLicense.ListTyped.
type ApiEntitiesLicenseListMatch struct {
	Id string `json:"id"`
	Name string `json:"name"`
	Type any `json:"type"`
}

// ApiEntitiesMarkdown is the typed data model for the api_entities_markdown entity.
type ApiEntitiesMarkdown struct {
}

// ApiEntitiesMarkdownCreateData is the typed request payload for ApiEntitiesMarkdown.CreateTyped.
type ApiEntitiesMarkdownCreateData struct {
}

// ApiEntitiesMarkdownUploadAdmin is the typed data model for the api_entities_markdown_upload_admin entity.
type ApiEntitiesMarkdownUploadAdmin struct {
	CreatedAt *string `json:"created_at,omitempty"`
	Filename *string `json:"filename,omitempty"`
	Id *string `json:"id,omitempty"`
	Size *string `json:"size,omitempty"`
	UploadedBy *map[string]any `json:"uploaded_by,omitempty"`
}

// ApiEntitiesMarkdownUploadAdminListMatch is the typed request payload for ApiEntitiesMarkdownUploadAdmin.ListTyped.
type ApiEntitiesMarkdownUploadAdminListMatch struct {
	GroupId *string `json:"group_id,omitempty"`
	ProjectId *string `json:"project_id,omitempty"`
}

// ApiEntitiesMember is the typed data model for the api_entities_member entity.
type ApiEntitiesMember struct {
	AccessLevel *string `json:"access_level,omitempty"`
	AvatarPath *string `json:"avatar_path,omitempty"`
	AvatarUrl *string `json:"avatar_url,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	CreatedBy *map[string]any `json:"created_by,omitempty"`
	CustomAttribute *[]any `json:"custom_attribute,omitempty"`
	Email *string `json:"email,omitempty"`
	ExpiresAt *string `json:"expires_at,omitempty"`
	GroupSamlIdentity *map[string]any `json:"group_saml_identity,omitempty"`
	GroupScimIdentity *map[string]any `json:"group_scim_identity,omitempty"`
	Id *int `json:"id,omitempty"`
	IsUsingSeat *bool `json:"is_using_seat,omitempty"`
	Key *string `json:"key,omitempty"`
	Locked *bool `json:"locked,omitempty"`
	MemberRole *map[string]any `json:"member_role,omitempty"`
	MembershipState *string `json:"membership_state,omitempty"`
	Name *string `json:"name,omitempty"`
	Override *string `json:"override,omitempty"`
	PublicEmail *string `json:"public_email,omitempty"`
	State *string `json:"state,omitempty"`
	Username *string `json:"username,omitempty"`
	Value *string `json:"value,omitempty"`
	WebUrl *string `json:"web_url,omitempty"`
}

// ApiEntitiesMemberLoadMatch is the typed request payload for ApiEntitiesMember.LoadTyped.
type ApiEntitiesMemberLoadMatch struct {
	GroupId *string `json:"group_id,omitempty"`
	Id *string `json:"id,omitempty"`
	UserId *string `json:"user_id,omitempty"`
	ProjectId *string `json:"project_id,omitempty"`
}

// ApiEntitiesMemberListMatch is the typed request payload for ApiEntitiesMember.ListTyped.
type ApiEntitiesMemberListMatch struct {
	GroupId *string `json:"group_id,omitempty"`
	ProjectId *string `json:"project_id,omitempty"`
}

// ApiEntitiesMemberCreateData is the typed request payload for ApiEntitiesMember.CreateTyped.
type ApiEntitiesMemberCreateData struct {
	GroupId *string `json:"group_id,omitempty"`
	MemberId *string `json:"member_id,omitempty"`
	ProjectId *string `json:"project_id,omitempty"`
}

// ApiEntitiesMemberUpdateData is the typed request payload for ApiEntitiesMember.UpdateTyped.
type ApiEntitiesMemberUpdateData struct {
	GroupId *string `json:"group_id,omitempty"`
	Id string `json:"id"`
	ProjectId *string `json:"project_id,omitempty"`
}

// ApiEntitiesMemberRemoveMatch is the typed request payload for ApiEntitiesMember.RemoveTyped.
type ApiEntitiesMemberRemoveMatch struct {
	GroupId string `json:"group_id"`
	MemberId string `json:"member_id"`
}

// ApiEntitiesMerge is the typed data model for the api_entities_merge entity.
type ApiEntitiesMerge struct {
	AllowCollaboration *bool `json:"allow_collaboration,omitempty"`
	AllowMaintainerToPush *bool `json:"allow_maintainer_to_push,omitempty"`
	ApprovalsBeforeMerge *string `json:"approvals_before_merge,omitempty"`
	Assignee *map[string]any `json:"assignee,omitempty"`
	Author *map[string]any `json:"author,omitempty"`
	BlockingDiscussionsResolved *string `json:"blocking_discussions_resolved,omitempty"`
	ChangesCount *string `json:"changes_count,omitempty"`
	ClosedAt *string `json:"closed_at,omitempty"`
	ClosedBy *map[string]any `json:"closed_by,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	DescriptionHtml *string `json:"description_html,omitempty"`
	DetailedMergeStatus *string `json:"detailed_merge_status,omitempty"`
	DiffRef *map[string]any `json:"diff_ref,omitempty"`
	DiscussionLocked *string `json:"discussion_locked,omitempty"`
	DivergedCommitsCount *string `json:"diverged_commits_count,omitempty"`
	Downvote *string `json:"downvote,omitempty"`
	Draft *string `json:"draft,omitempty"`
	FirstContribution *string `json:"first_contribution,omitempty"`
	FirstDeployedToProductionAt *string `json:"first_deployed_to_production_at,omitempty"`
	ForceRemoveSourceBranch *string `json:"force_remove_source_branch,omitempty"`
	HasConflict *bool `json:"has_conflict,omitempty"`
	HeadPipeline *map[string]any `json:"head_pipeline,omitempty"`
	Id *int `json:"id,omitempty"`
	Iid *int `json:"iid,omitempty"`
	Imported *string `json:"imported,omitempty"`
	ImportedFrom *string `json:"imported_from,omitempty"`
	Label *string `json:"label,omitempty"`
	LatestBuildFinishedAt *string `json:"latest_build_finished_at,omitempty"`
	LatestBuildStartedAt *string `json:"latest_build_started_at,omitempty"`
	MergeAfter *string `json:"merge_after,omitempty"`
	MergeCommitSha *string `json:"merge_commit_sha,omitempty"`
	MergeError *string `json:"merge_error,omitempty"`
	MergeStatus *string `json:"merge_status,omitempty"`
	MergeUser *map[string]any `json:"merge_user,omitempty"`
	MergeWhenPipelineSucceed *string `json:"merge_when_pipeline_succeed,omitempty"`
	MergedAt *string `json:"merged_at,omitempty"`
	MergedBy *map[string]any `json:"merged_by,omitempty"`
	Milestone *map[string]any `json:"milestone,omitempty"`
	Pipeline *map[string]any `json:"pipeline,omitempty"`
	PreparedAt *string `json:"prepared_at,omitempty"`
	ProjectId *int `json:"project_id,omitempty"`
	RebaseInProgress *string `json:"rebase_in_progress,omitempty"`
	Reference *string `json:"reference,omitempty"`
	Reviewer *map[string]any `json:"reviewer,omitempty"`
	Sha *string `json:"sha,omitempty"`
	ShouldRemoveSourceBranch *bool `json:"should_remove_source_branch,omitempty"`
	SourceBranch *string `json:"source_branch,omitempty"`
	SourceProjectId *string `json:"source_project_id,omitempty"`
	Squash *string `json:"squash,omitempty"`
	SquashCommitSha *string `json:"squash_commit_sha,omitempty"`
	SquashOnMerge *string `json:"squash_on_merge,omitempty"`
	State *string `json:"state,omitempty"`
	Subscribed *string `json:"subscribed,omitempty"`
	TargetBranch *string `json:"target_branch,omitempty"`
	TargetProjectId *string `json:"target_project_id,omitempty"`
	TaskCompletionStatus *string `json:"task_completion_status,omitempty"`
	TimeStat *map[string]any `json:"time_stat,omitempty"`
	Title *string `json:"title,omitempty"`
	TitleHtml *string `json:"title_html,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Upvote *string `json:"upvote,omitempty"`
	User *map[string]any `json:"user,omitempty"`
	UserNotesCount *string `json:"user_notes_count,omitempty"`
	WebUrl *string `json:"web_url,omitempty"`
	WorkInProgress *string `json:"work_in_progress,omitempty"`
}

// ApiEntitiesMergeLoadMatch is the typed request payload for ApiEntitiesMerge.LoadTyped.
type ApiEntitiesMergeLoadMatch struct {
	MergeRequestIid any `json:"merge_request_iid"`
	ProjectId string `json:"project_id"`
}

// ApiEntitiesMergeCreateData is the typed request payload for ApiEntitiesMerge.CreateTyped.
type ApiEntitiesMergeCreateData struct {
	MergeRequestId *string `json:"merge_request_id,omitempty"`
	ProjectId string `json:"project_id"`
}

// ApiEntitiesMergeUpdateData is the typed request payload for ApiEntitiesMerge.UpdateTyped.
type ApiEntitiesMergeUpdateData struct {
	MergeRequestId *string `json:"merge_request_id,omitempty"`
	ProjectId string `json:"project_id"`
	MergeRequestIid *any `json:"merge_request_iid,omitempty"`
}

// ApiEntitiesMergeRequestApproval is the typed data model for the api_entities_merge_request_approval entity.
type ApiEntitiesMergeRequestApproval struct {
	Approved *bool `json:"approved,omitempty"`
	ApprovedBy *map[string]any `json:"approved_by,omitempty"`
	UserCanApprove *bool `json:"user_can_approve,omitempty"`
	UserHasApproved *bool `json:"user_has_approved,omitempty"`
}

// ApiEntitiesMergeRequestApprovalLoadMatch is the typed request payload for ApiEntitiesMergeRequestApproval.LoadTyped.
type ApiEntitiesMergeRequestApprovalLoadMatch struct {
	MergeRequestId string `json:"merge_request_id"`
	ProjectId string `json:"project_id"`
}

// ApiEntitiesMergeRequestApprovalCreateData is the typed request payload for ApiEntitiesMergeRequestApproval.CreateTyped.
type ApiEntitiesMergeRequestApprovalCreateData struct {
	MergeRequestId string `json:"merge_request_id"`
	ProjectId string `json:"project_id"`
}

// ApiEntitiesMergeRequestBasic is the typed data model for the api_entities_merge_request_basic entity.
type ApiEntitiesMergeRequestBasic struct {
	AllowCollaboration *bool `json:"allow_collaboration,omitempty"`
	AllowMaintainerToPush *bool `json:"allow_maintainer_to_push,omitempty"`
	ApprovalsBeforeMerge *string `json:"approvals_before_merge,omitempty"`
	Assignee *map[string]any `json:"assignee,omitempty"`
	Author *map[string]any `json:"author,omitempty"`
	BlockingDiscussionsResolved *string `json:"blocking_discussions_resolved,omitempty"`
	ClosedAt *string `json:"closed_at,omitempty"`
	ClosedBy *map[string]any `json:"closed_by,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	DescriptionHtml *string `json:"description_html,omitempty"`
	DetailedMergeStatus *string `json:"detailed_merge_status,omitempty"`
	DiscussionLocked *string `json:"discussion_locked,omitempty"`
	Downvote *string `json:"downvote,omitempty"`
	Draft *string `json:"draft,omitempty"`
	ForceRemoveSourceBranch *string `json:"force_remove_source_branch,omitempty"`
	HasConflict *bool `json:"has_conflict,omitempty"`
	Id *int `json:"id,omitempty"`
	Iid *int `json:"iid,omitempty"`
	Imported *string `json:"imported,omitempty"`
	ImportedFrom *string `json:"imported_from,omitempty"`
	Label *string `json:"label,omitempty"`
	MergeAfter *string `json:"merge_after,omitempty"`
	MergeCommitSha *string `json:"merge_commit_sha,omitempty"`
	MergeStatus *string `json:"merge_status,omitempty"`
	MergeUser *map[string]any `json:"merge_user,omitempty"`
	MergeWhenPipelineSucceed *string `json:"merge_when_pipeline_succeed,omitempty"`
	MergedAt *string `json:"merged_at,omitempty"`
	MergedBy *map[string]any `json:"merged_by,omitempty"`
	Milestone *map[string]any `json:"milestone,omitempty"`
	PreparedAt *string `json:"prepared_at,omitempty"`
	ProjectId *int `json:"project_id,omitempty"`
	Reference *string `json:"reference,omitempty"`
	Reviewer *map[string]any `json:"reviewer,omitempty"`
	Sha *string `json:"sha,omitempty"`
	ShouldRemoveSourceBranch *bool `json:"should_remove_source_branch,omitempty"`
	SourceBranch *string `json:"source_branch,omitempty"`
	SourceProjectId *string `json:"source_project_id,omitempty"`
	Squash *string `json:"squash,omitempty"`
	SquashCommitSha *string `json:"squash_commit_sha,omitempty"`
	SquashOnMerge *string `json:"squash_on_merge,omitempty"`
	State *string `json:"state,omitempty"`
	TargetBranch *string `json:"target_branch,omitempty"`
	TargetProjectId *string `json:"target_project_id,omitempty"`
	TaskCompletionStatus *string `json:"task_completion_status,omitempty"`
	TimeStat *map[string]any `json:"time_stat,omitempty"`
	Title *string `json:"title,omitempty"`
	TitleHtml *string `json:"title_html,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Upvote *string `json:"upvote,omitempty"`
	UserNotesCount *string `json:"user_notes_count,omitempty"`
	WebUrl *string `json:"web_url,omitempty"`
	WorkInProgress *string `json:"work_in_progress,omitempty"`
}

// ApiEntitiesMergeRequestBasicLoadMatch is the typed request payload for ApiEntitiesMergeRequestBasic.LoadTyped.
type ApiEntitiesMergeRequestBasicLoadMatch struct {
	GroupId *string `json:"group_id,omitempty"`
	ProjectId *string `json:"project_id,omitempty"`
	IssueId *string `json:"issue_id,omitempty"`
}

// ApiEntitiesMergeRequestBasicListMatch is the typed request payload for ApiEntitiesMergeRequestBasic.ListTyped.
type ApiEntitiesMergeRequestBasicListMatch struct {
	DeploymentId *string `json:"deployment_id,omitempty"`
	ProjectId string `json:"project_id"`
	Sha *any `json:"sha,omitempty"`
}

// ApiEntitiesMergeRequestChange is the typed data model for the api_entities_merge_request_change entity.
type ApiEntitiesMergeRequestChange struct {
	AllowCollaboration *bool `json:"allow_collaboration,omitempty"`
	AllowMaintainerToPush *bool `json:"allow_maintainer_to_push,omitempty"`
	ApprovalsBeforeMerge *string `json:"approvals_before_merge,omitempty"`
	Assignee *map[string]any `json:"assignee,omitempty"`
	Author *map[string]any `json:"author,omitempty"`
	BlockingDiscussionsResolved *string `json:"blocking_discussions_resolved,omitempty"`
	Change *map[string]any `json:"change,omitempty"`
	ChangesCount *string `json:"changes_count,omitempty"`
	ClosedAt *string `json:"closed_at,omitempty"`
	ClosedBy *map[string]any `json:"closed_by,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	DescriptionHtml *string `json:"description_html,omitempty"`
	DetailedMergeStatus *string `json:"detailed_merge_status,omitempty"`
	DiffRef *map[string]any `json:"diff_ref,omitempty"`
	DiscussionLocked *string `json:"discussion_locked,omitempty"`
	DivergedCommitsCount *string `json:"diverged_commits_count,omitempty"`
	Downvote *string `json:"downvote,omitempty"`
	Draft *string `json:"draft,omitempty"`
	FirstContribution *string `json:"first_contribution,omitempty"`
	FirstDeployedToProductionAt *string `json:"first_deployed_to_production_at,omitempty"`
	ForceRemoveSourceBranch *string `json:"force_remove_source_branch,omitempty"`
	HasConflict *bool `json:"has_conflict,omitempty"`
	HeadPipeline *map[string]any `json:"head_pipeline,omitempty"`
	Id *int `json:"id,omitempty"`
	Iid *int `json:"iid,omitempty"`
	Imported *string `json:"imported,omitempty"`
	ImportedFrom *string `json:"imported_from,omitempty"`
	Label *string `json:"label,omitempty"`
	LatestBuildFinishedAt *string `json:"latest_build_finished_at,omitempty"`
	LatestBuildStartedAt *string `json:"latest_build_started_at,omitempty"`
	MergeAfter *string `json:"merge_after,omitempty"`
	MergeCommitSha *string `json:"merge_commit_sha,omitempty"`
	MergeError *string `json:"merge_error,omitempty"`
	MergeStatus *string `json:"merge_status,omitempty"`
	MergeUser *map[string]any `json:"merge_user,omitempty"`
	MergeWhenPipelineSucceed *string `json:"merge_when_pipeline_succeed,omitempty"`
	MergedAt *string `json:"merged_at,omitempty"`
	MergedBy *map[string]any `json:"merged_by,omitempty"`
	Milestone *map[string]any `json:"milestone,omitempty"`
	Overflow *string `json:"overflow,omitempty"`
	Pipeline *map[string]any `json:"pipeline,omitempty"`
	PreparedAt *string `json:"prepared_at,omitempty"`
	ProjectId *int `json:"project_id,omitempty"`
	RebaseInProgress *string `json:"rebase_in_progress,omitempty"`
	Reference *string `json:"reference,omitempty"`
	Reviewer *map[string]any `json:"reviewer,omitempty"`
	Sha *string `json:"sha,omitempty"`
	ShouldRemoveSourceBranch *bool `json:"should_remove_source_branch,omitempty"`
	SourceBranch *string `json:"source_branch,omitempty"`
	SourceProjectId *string `json:"source_project_id,omitempty"`
	Squash *string `json:"squash,omitempty"`
	SquashCommitSha *string `json:"squash_commit_sha,omitempty"`
	SquashOnMerge *string `json:"squash_on_merge,omitempty"`
	State *string `json:"state,omitempty"`
	Subscribed *string `json:"subscribed,omitempty"`
	TargetBranch *string `json:"target_branch,omitempty"`
	TargetProjectId *string `json:"target_project_id,omitempty"`
	TaskCompletionStatus *string `json:"task_completion_status,omitempty"`
	TimeStat *map[string]any `json:"time_stat,omitempty"`
	Title *string `json:"title,omitempty"`
	TitleHtml *string `json:"title_html,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Upvote *string `json:"upvote,omitempty"`
	User *map[string]any `json:"user,omitempty"`
	UserNotesCount *string `json:"user_notes_count,omitempty"`
	WebUrl *string `json:"web_url,omitempty"`
	WorkInProgress *string `json:"work_in_progress,omitempty"`
}

// ApiEntitiesMergeRequestChangeLoadMatch is the typed request payload for ApiEntitiesMergeRequestChange.LoadTyped.
type ApiEntitiesMergeRequestChangeLoadMatch struct {
	MergeRequestId string `json:"merge_request_id"`
	ProjectId string `json:"project_id"`
}

// ApiEntitiesMergeRequestDiff is the typed data model for the api_entities_merge_request_diff entity.
type ApiEntitiesMergeRequestDiff struct {
	BaseCommitSha *string `json:"base_commit_sha,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	HeadCommitSha *string `json:"head_commit_sha,omitempty"`
	Id *string `json:"id,omitempty"`
	MergeRequestId *string `json:"merge_request_id,omitempty"`
	PatchIdSha *string `json:"patch_id_sha,omitempty"`
	RealSize *string `json:"real_size,omitempty"`
	StartCommitSha *string `json:"start_commit_sha,omitempty"`
	State *string `json:"state,omitempty"`
}

// ApiEntitiesMergeRequestDiffListMatch is the typed request payload for ApiEntitiesMergeRequestDiff.ListTyped.
type ApiEntitiesMergeRequestDiffListMatch struct {
	MergeRequestId string `json:"merge_request_id"`
	ProjectId string `json:"project_id"`
}

// ApiEntitiesMergeRequestDiffFull is the typed data model for the api_entities_merge_request_diff_full entity.
type ApiEntitiesMergeRequestDiffFull struct {
	BaseCommitSha *string `json:"base_commit_sha,omitempty"`
	Commit *map[string]any `json:"commit,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Diff *map[string]any `json:"diff,omitempty"`
	HeadCommitSha *string `json:"head_commit_sha,omitempty"`
	Id *string `json:"id,omitempty"`
	MergeRequestId *string `json:"merge_request_id,omitempty"`
	PatchIdSha *string `json:"patch_id_sha,omitempty"`
	RealSize *string `json:"real_size,omitempty"`
	StartCommitSha *string `json:"start_commit_sha,omitempty"`
	State *string `json:"state,omitempty"`
}

// ApiEntitiesMergeRequestDiffFullLoadMatch is the typed request payload for ApiEntitiesMergeRequestDiffFull.LoadTyped.
type ApiEntitiesMergeRequestDiffFullLoadMatch struct {
	MergeRequestId string `json:"merge_request_id"`
	ProjectId string `json:"project_id"`
	VersionId string `json:"version_id"`
}

// ApiEntitiesMergeRequestReviewer is the typed data model for the api_entities_merge_request_reviewer entity.
type ApiEntitiesMergeRequestReviewer struct {
	CreatedAt *string `json:"created_at,omitempty"`
	State *string `json:"state,omitempty"`
	User *map[string]any `json:"user,omitempty"`
}

// ApiEntitiesMergeRequestReviewerLoadMatch is the typed request payload for ApiEntitiesMergeRequestReviewer.LoadTyped.
type ApiEntitiesMergeRequestReviewerLoadMatch struct {
	MergeRequestId string `json:"merge_request_id"`
	ProjectId string `json:"project_id"`
}

// ApiEntitiesMetricImage is the typed data model for the api_entities_metric_image entity.
type ApiEntitiesMetricImage struct {
	CreatedAt *string `json:"created_at,omitempty"`
	FilePath *string `json:"file_path,omitempty"`
	Filename *string `json:"filename,omitempty"`
	Id *int `json:"id,omitempty"`
	Url *string `json:"url,omitempty"`
	UrlText *string `json:"url_text,omitempty"`
}

// ApiEntitiesMetricImageListMatch is the typed request payload for ApiEntitiesMetricImage.ListTyped.
type ApiEntitiesMetricImageListMatch struct {
	AlertManagementAlertId string `json:"alert_management_alert_id"`
	ProjectId string `json:"project_id"`
}

// ApiEntitiesMetricImageCreateData is the typed request payload for ApiEntitiesMetricImage.CreateTyped.
type ApiEntitiesMetricImageCreateData struct {
	AlertManagementAlertId string `json:"alert_management_alert_id"`
	ProjectId string `json:"project_id"`
}

// ApiEntitiesMetricImageUpdateData is the typed request payload for ApiEntitiesMetricImage.UpdateTyped.
type ApiEntitiesMetricImageUpdateData struct {
	AlertManagementAlertId string `json:"alert_management_alert_id"`
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
}

// ApiEntitiesMrNote is the typed data model for the api_entities_mr_note entity.
type ApiEntitiesMrNote struct {
	Author *map[string]any `json:"author,omitempty"`
	Note *string `json:"note,omitempty"`
}

// ApiEntitiesMrNoteLoadMatch is the typed request payload for ApiEntitiesMrNote.LoadTyped.
type ApiEntitiesMrNoteLoadMatch struct {
	MergeRequestId string `json:"merge_request_id"`
	ProjectId string `json:"project_id"`
}

// ApiEntitiesNamespace is the typed data model for the api_entities_namespace entity.
type ApiEntitiesNamespace struct {
	AdditionalPurchasedStorageEndsOn *string `json:"additional_purchased_storage_ends_on,omitempty"`
	AdditionalPurchasedStorageSize *int `json:"additional_purchased_storage_size,omitempty"`
	AvatarUrl *string `json:"avatar_url,omitempty"`
	BillableMembersCount *int `json:"billable_members_count,omitempty"`
	EndDate *string `json:"end_date,omitempty"`
	ExtraSharedRunnersMinutesLimit *int `json:"extra_shared_runners_minutes_limit,omitempty"`
	FullPath *string `json:"full_path,omitempty"`
	Id *int `json:"id,omitempty"`
	Kind *string `json:"kind,omitempty"`
	MaxSeatsUsed *int `json:"max_seats_used,omitempty"`
	MaxSeatsUsedChangedAt *string `json:"max_seats_used_changed_at,omitempty"`
	MembersCountWithDescendant *int `json:"members_count_with_descendant,omitempty"`
	Name *string `json:"name,omitempty"`
	ParentId *int `json:"parent_id,omitempty"`
	Path *string `json:"path,omitempty"`
	Plan *string `json:"plan,omitempty"`
	ProjectsCount *int `json:"projects_count,omitempty"`
	RootRepositorySize *int `json:"root_repository_size,omitempty"`
	SeatsInUse *int `json:"seats_in_use,omitempty"`
	SharedRunnersMinutesLimit *int `json:"shared_runners_minutes_limit,omitempty"`
	Trial *bool `json:"trial,omitempty"`
	TrialEndsOn *string `json:"trial_ends_on,omitempty"`
	WebUrl *string `json:"web_url,omitempty"`
}

// ApiEntitiesNamespaceLoadMatch is the typed request payload for ApiEntitiesNamespace.LoadTyped.
type ApiEntitiesNamespaceLoadMatch struct {
	Id string `json:"id"`
}

// ApiEntitiesNamespaceListMatch is the typed request payload for ApiEntitiesNamespace.ListTyped.
type ApiEntitiesNamespaceListMatch struct {
	AdditionalPurchasedStorageEndsOn *string `json:"additional_purchased_storage_ends_on,omitempty"`
	AdditionalPurchasedStorageSize *int `json:"additional_purchased_storage_size,omitempty"`
	AvatarUrl *string `json:"avatar_url,omitempty"`
	BillableMembersCount *int `json:"billable_members_count,omitempty"`
	EndDate *string `json:"end_date,omitempty"`
	ExtraSharedRunnersMinutesLimit *int `json:"extra_shared_runners_minutes_limit,omitempty"`
	FullPath *string `json:"full_path,omitempty"`
	Id *int `json:"id,omitempty"`
	Kind *string `json:"kind,omitempty"`
	MaxSeatsUsed *int `json:"max_seats_used,omitempty"`
	MaxSeatsUsedChangedAt *string `json:"max_seats_used_changed_at,omitempty"`
	MembersCountWithDescendant *int `json:"members_count_with_descendant,omitempty"`
	Name *string `json:"name,omitempty"`
	ParentId *int `json:"parent_id,omitempty"`
	Path *string `json:"path,omitempty"`
	Plan *string `json:"plan,omitempty"`
	ProjectsCount *int `json:"projects_count,omitempty"`
	RootRepositorySize *int `json:"root_repository_size,omitempty"`
	SeatsInUse *int `json:"seats_in_use,omitempty"`
	SharedRunnersMinutesLimit *int `json:"shared_runners_minutes_limit,omitempty"`
	Trial *bool `json:"trial,omitempty"`
	TrialEndsOn *string `json:"trial_ends_on,omitempty"`
	WebUrl *string `json:"web_url,omitempty"`
}

// ApiEntitiesNamespaceUpdateData is the typed request payload for ApiEntitiesNamespace.UpdateTyped.
type ApiEntitiesNamespaceUpdateData struct {
	Id string `json:"id"`
}

// ApiEntitiesNamespaceExistence is the typed data model for the api_entities_namespace_existence entity.
type ApiEntitiesNamespaceExistence struct {
	Exist *bool `json:"exist,omitempty"`
	Suggest *[]any `json:"suggest,omitempty"`
}

// ApiEntitiesNamespaceExistenceListMatch is the typed request payload for ApiEntitiesNamespaceExistence.ListTyped.
type ApiEntitiesNamespaceExistenceListMatch struct {
	NamespaceId string `json:"namespace_id"`
}

// ApiEntitiesNamespacesStorageLimitExclusion is the typed data model for the api_entities_namespaces_storage_limit_exclusion entity.
type ApiEntitiesNamespacesStorageLimitExclusion struct {
	Id *int `json:"id,omitempty"`
	NamespaceId *int `json:"namespace_id,omitempty"`
	NamespaceName *string `json:"namespace_name,omitempty"`
	Reason *string `json:"reason,omitempty"`
}

// ApiEntitiesNamespacesStorageLimitExclusionLoadMatch is the typed request payload for ApiEntitiesNamespacesStorageLimitExclusion.LoadTyped.
type ApiEntitiesNamespacesStorageLimitExclusionLoadMatch struct {
	Id int `json:"id"`
	NamespaceId *int `json:"namespace_id,omitempty"`
	NamespaceName *string `json:"namespace_name,omitempty"`
	Reason *string `json:"reason,omitempty"`
}

// ApiEntitiesNamespacesStorageLimitExclusionCreateData is the typed request payload for ApiEntitiesNamespacesStorageLimitExclusion.CreateTyped.
type ApiEntitiesNamespacesStorageLimitExclusionCreateData struct {
	NamespaceId string `json:"namespace_id"`
}

// ApiEntitiesNpmPackage is the typed data model for the api_entities_npm_package entity.
type ApiEntitiesNpmPackage struct {
	DistTag *map[string]any `json:"dist_tag,omitempty"`
	Name *string `json:"name,omitempty"`
	Version *map[string]any `json:"version,omitempty"`
}

// ApiEntitiesNpmPackageLoadMatch is the typed request payload for ApiEntitiesNpmPackage.LoadTyped.
type ApiEntitiesNpmPackageLoadMatch struct {
	GroupId *string `json:"group_id,omitempty"`
	ProjectId *string `json:"project_id,omitempty"`
}

// ApiEntitiesNpmPackageTag is the typed data model for the api_entities_npm_package_tag entity.
type ApiEntitiesNpmPackageTag struct {
	DistTag *map[string]any `json:"dist_tag,omitempty"`
}

// ApiEntitiesNpmPackageTagLoadMatch is the typed request payload for ApiEntitiesNpmPackageTag.LoadTyped.
type ApiEntitiesNpmPackageTagLoadMatch struct {
	GroupId *string `json:"group_id,omitempty"`
	ProjectId *string `json:"project_id,omitempty"`
}

// ApiEntitiesNugetPackagesVersion is the typed data model for the api_entities_nuget_packages_version entity.
type ApiEntitiesNugetPackagesVersion struct {
	Version *[]any `json:"version,omitempty"`
}

// ApiEntitiesNugetPackagesVersionListMatch is the typed request payload for ApiEntitiesNugetPackagesVersion.ListTyped.
type ApiEntitiesNugetPackagesVersionListMatch struct {
	ProjectId string `json:"project_id"`
}

// ApiEntitiesNugetSearchResult is the typed data model for the api_entities_nuget_search_result entity.
type ApiEntitiesNugetSearchResult struct {
	Author *string `json:"author,omitempty"`
	Description *string `json:"description,omitempty"`
	IconUrl *string `json:"icon_url,omitempty"`
	Id *string `json:"id,omitempty"`
	LicenseUrl *string `json:"license_url,omitempty"`
	ProjectUrl *string `json:"project_url,omitempty"`
	Summary *string `json:"summary,omitempty"`
	Tag *string `json:"tag,omitempty"`
	Title *string `json:"title,omitempty"`
	TotalDownload *int `json:"total_download,omitempty"`
	Type *string `json:"type,omitempty"`
	Verified *bool `json:"verified,omitempty"`
	Version *string `json:"version,omitempty"`
}

// ApiEntitiesNugetSearchResultListMatch is the typed request payload for ApiEntitiesNugetSearchResult.ListTyped.
type ApiEntitiesNugetSearchResultListMatch struct {
	GroupId *string `json:"group_id,omitempty"`
	ProjectId *string `json:"project_id,omitempty"`
}

// ApiEntitiesNugetServiceIndex is the typed data model for the api_entities_nuget_service_index entity.
type ApiEntitiesNugetServiceIndex struct {
	Resource *[]any `json:"resource,omitempty"`
	Version *string `json:"version,omitempty"`
}

// ApiEntitiesNugetServiceIndexListMatch is the typed request payload for ApiEntitiesNugetServiceIndex.ListTyped.
type ApiEntitiesNugetServiceIndexListMatch struct {
	GroupId *string `json:"group_id,omitempty"`
	ProjectId *string `json:"project_id,omitempty"`
}

// ApiEntitiesOrganizationsOrganization is the typed data model for the api_entities_organizations_organization entity.
type ApiEntitiesOrganizationsOrganization struct {
}

// ApiEntitiesOrganizationsOrganizationCreateData is the typed request payload for ApiEntitiesOrganizationsOrganization.CreateTyped.
type ApiEntitiesOrganizationsOrganizationCreateData struct {
}

// ApiEntitiesPackage is the typed data model for the api_entities_package entity.
type ApiEntitiesPackage struct {
	ConanPackageName *string `json:"conan_package_name,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Id *int `json:"id,omitempty"`
	LastDownloadedAt *string `json:"last_downloaded_at,omitempty"`
	Link *map[string]any `json:"link,omitempty"`
	Name *string `json:"name,omitempty"`
	PackageType *string `json:"package_type,omitempty"`
	Pipeline *map[string]any `json:"pipeline,omitempty"`
	ProjectId *int `json:"project_id,omitempty"`
	ProjectPath *string `json:"project_path,omitempty"`
	Status *string `json:"status,omitempty"`
	Tag *string `json:"tag,omitempty"`
	Version *string `json:"version,omitempty"`
}

// ApiEntitiesPackageLoadMatch is the typed request payload for ApiEntitiesPackage.LoadTyped.
type ApiEntitiesPackageLoadMatch struct {
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
}

// ApiEntitiesPackageListMatch is the typed request payload for ApiEntitiesPackage.ListTyped.
type ApiEntitiesPackageListMatch struct {
	GroupId *string `json:"group_id,omitempty"`
	ProjectId *string `json:"project_id,omitempty"`
}

// ApiEntitiesPackageFile is the typed data model for the api_entities_package_file entity.
type ApiEntitiesPackageFile struct {
	CreatedAt *string `json:"created_at,omitempty"`
	FileMd5 *string `json:"file_md5,omitempty"`
	FileName *string `json:"file_name,omitempty"`
	FileSha1 *string `json:"file_sha1,omitempty"`
	FileSha256 *string `json:"file_sha256,omitempty"`
	Id *int `json:"id,omitempty"`
	PackageId *int `json:"package_id,omitempty"`
	Pipeline *map[string]any `json:"pipeline,omitempty"`
	Size *int `json:"size,omitempty"`
}

// ApiEntitiesPackageFileListMatch is the typed request payload for ApiEntitiesPackageFile.ListTyped.
type ApiEntitiesPackageFileListMatch struct {
	PackageId string `json:"package_id"`
	ProjectId string `json:"project_id"`
}

// ApiEntitiesPackagePipeline is the typed data model for the api_entities_package_pipeline entity.
type ApiEntitiesPackagePipeline struct {
	CreatedAt *string `json:"created_at,omitempty"`
	Id *int `json:"id,omitempty"`
	Iid *int `json:"iid,omitempty"`
	ProjectId *int `json:"project_id,omitempty"`
	Ref *string `json:"ref,omitempty"`
	Sha *string `json:"sha,omitempty"`
	Source *string `json:"source,omitempty"`
	Status *string `json:"status,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	User *map[string]any `json:"user,omitempty"`
	WebUrl *string `json:"web_url,omitempty"`
}

// ApiEntitiesPackagePipelineLoadMatch is the typed request payload for ApiEntitiesPackagePipeline.LoadTyped.
type ApiEntitiesPackagePipelineLoadMatch struct {
	PackageId string `json:"package_id"`
	ProjectId string `json:"project_id"`
}

// ApiEntitiesPackagesConanFilesList is the typed data model for the api_entities_packages_conan_files_list entity.
type ApiEntitiesPackagesConanFilesList struct {
	File *map[string]any `json:"file,omitempty"`
}

// ApiEntitiesPackagesConanFilesListLoadMatch is the typed request payload for ApiEntitiesPackagesConanFilesList.LoadTyped.
type ApiEntitiesPackagesConanFilesListLoadMatch struct {
	ConanId string `json:"conan_id"`
	PackageChannel any `json:"package_channel"`
	PackageId *string `json:"package_id,omitempty"`
	PackageRevision *any `json:"package_revision,omitempty"`
	PackageUsername any `json:"package_username"`
	PackageVersion any `json:"package_version"`
	ProjectId string `json:"project_id"`
	RevisionId *string `json:"revision_id,omitempty"`
	RecipeRevision *any `json:"recipe_revision,omitempty"`
}

// ApiEntitiesPackagesConanPackageManifest is the typed data model for the api_entities_packages_conan_package_manifest entity.
type ApiEntitiesPackagesConanPackageManifest struct {
	PackageUrl *map[string]any `json:"package_url,omitempty"`
}

// ApiEntitiesPackagesConanPackageManifestLoadMatch is the typed request payload for ApiEntitiesPackagesConanPackageManifest.LoadTyped.
type ApiEntitiesPackagesConanPackageManifestLoadMatch struct {
	ConanId string `json:"conan_id"`
	ConanPackageReference any `json:"conan_package_reference"`
	PackageChannel any `json:"package_channel"`
	PackageUsername any `json:"package_username"`
	PackageVersion any `json:"package_version"`
	ProjectId *string `json:"project_id,omitempty"`
}

// ApiEntitiesPackagesConanPackageRevision is the typed data model for the api_entities_packages_conan_package_revision entity.
type ApiEntitiesPackagesConanPackageRevision struct {
	Revision *string `json:"revision,omitempty"`
	Time *string `json:"time,omitempty"`
}

// ApiEntitiesPackagesConanPackageRevisionListMatch is the typed request payload for ApiEntitiesPackagesConanPackageRevision.ListTyped.
type ApiEntitiesPackagesConanPackageRevisionListMatch struct {
	ConanId string `json:"conan_id"`
	ConanPackageReference any `json:"conan_package_reference"`
	PackageChannel any `json:"package_channel"`
	PackageUsername any `json:"package_username"`
	PackageVersion any `json:"package_version"`
	ProjectId string `json:"project_id"`
	RevisionId string `json:"revision_id"`
}

// ApiEntitiesPackagesConanPackageSnapshot is the typed data model for the api_entities_packages_conan_package_snapshot entity.
type ApiEntitiesPackagesConanPackageSnapshot struct {
	PackageSnapshot *map[string]any `json:"package_snapshot,omitempty"`
}

// ApiEntitiesPackagesConanPackageSnapshotLoadMatch is the typed request payload for ApiEntitiesPackagesConanPackageSnapshot.LoadTyped.
type ApiEntitiesPackagesConanPackageSnapshotLoadMatch struct {
	ConanId string `json:"conan_id"`
	ConanPackageReference any `json:"conan_package_reference"`
	PackageChannel any `json:"package_channel"`
	PackageUsername any `json:"package_username"`
	PackageVersion any `json:"package_version"`
	ProjectId *string `json:"project_id,omitempty"`
}

// ApiEntitiesPackagesConanRecipeManifest is the typed data model for the api_entities_packages_conan_recipe_manifest entity.
type ApiEntitiesPackagesConanRecipeManifest struct {
	RecipeUrl *map[string]any `json:"recipe_url,omitempty"`
}

// ApiEntitiesPackagesConanRecipeManifestLoadMatch is the typed request payload for ApiEntitiesPackagesConanRecipeManifest.LoadTyped.
type ApiEntitiesPackagesConanRecipeManifestLoadMatch struct {
	ConanId string `json:"conan_id"`
	PackageChannel any `json:"package_channel"`
	PackageUsername any `json:"package_username"`
	PackageVersion any `json:"package_version"`
	ProjectId *string `json:"project_id,omitempty"`
}

// ApiEntitiesPackagesConanRecipeRevision is the typed data model for the api_entities_packages_conan_recipe_revision entity.
type ApiEntitiesPackagesConanRecipeRevision struct {
	Revision *string `json:"revision,omitempty"`
	Time *string `json:"time,omitempty"`
}

// ApiEntitiesPackagesConanRecipeRevisionListMatch is the typed request payload for ApiEntitiesPackagesConanRecipeRevision.ListTyped.
type ApiEntitiesPackagesConanRecipeRevisionListMatch struct {
	ConanId string `json:"conan_id"`
	PackageChannel any `json:"package_channel"`
	PackageUsername any `json:"package_username"`
	PackageVersion any `json:"package_version"`
	ProjectId string `json:"project_id"`
}

// ApiEntitiesPackagesConanRecipeSnapshot is the typed data model for the api_entities_packages_conan_recipe_snapshot entity.
type ApiEntitiesPackagesConanRecipeSnapshot struct {
	RecipeSnapshot *map[string]any `json:"recipe_snapshot,omitempty"`
}

// ApiEntitiesPackagesConanRecipeSnapshotLoadMatch is the typed request payload for ApiEntitiesPackagesConanRecipeSnapshot.LoadTyped.
type ApiEntitiesPackagesConanRecipeSnapshotLoadMatch struct {
	Id *string `json:"id,omitempty"`
	PackageChannel any `json:"package_channel"`
	PackageName any `json:"package_name"`
	PackageUsername any `json:"package_username"`
	PackageVersion any `json:"package_version"`
}

// ApiEntitiesPackagesConanRevision is the typed data model for the api_entities_packages_conan_revision entity.
type ApiEntitiesPackagesConanRevision struct {
	Revision *string `json:"revision,omitempty"`
	Time *string `json:"time,omitempty"`
}

// ApiEntitiesPackagesConanRevisionLoadMatch is the typed request payload for ApiEntitiesPackagesConanRevision.LoadTyped.
type ApiEntitiesPackagesConanRevisionLoadMatch struct {
	ConanId string `json:"conan_id"`
	ConanPackageReference *any `json:"conan_package_reference,omitempty"`
	PackageChannel any `json:"package_channel"`
	PackageUsername any `json:"package_username"`
	PackageVersion any `json:"package_version"`
	ProjectId string `json:"project_id"`
	RevisionId *string `json:"revision_id,omitempty"`
}

// ApiEntitiesPackagesConanUploadUrl is the typed data model for the api_entities_packages_conan_upload_url entity.
type ApiEntitiesPackagesConanUploadUrl struct {
	UploadUrl *map[string]any `json:"upload_url,omitempty"`
}

// ApiEntitiesPackagesConanUploadUrlCreateData is the typed request payload for ApiEntitiesPackagesConanUploadUrl.CreateTyped.
type ApiEntitiesPackagesConanUploadUrlCreateData struct {
	ConanId string `json:"conan_id"`
	ConanPackageReference *any `json:"conan_package_reference,omitempty"`
	PackageChannel any `json:"package_channel"`
	PackageUsername any `json:"package_username"`
	PackageVersion any `json:"package_version"`
	ProjectId *string `json:"project_id,omitempty"`
}

// ApiEntitiesPackagesDebianDistribution is the typed data model for the api_entities_packages_debian_distribution entity.
type ApiEntitiesPackagesDebianDistribution struct {
	Architecture *[]any `json:"architecture,omitempty"`
	Codename *string `json:"codename,omitempty"`
	Component *[]any `json:"component,omitempty"`
	Description *string `json:"description,omitempty"`
	Id *int `json:"id,omitempty"`
	Label *string `json:"label,omitempty"`
	Origin *string `json:"origin,omitempty"`
	Suite *string `json:"suite,omitempty"`
	ValidTimeDurationSecond *int `json:"valid_time_duration_second,omitempty"`
	Version *string `json:"version,omitempty"`
}

// ApiEntitiesPackagesDebianDistributionLoadMatch is the typed request payload for ApiEntitiesPackagesDebianDistribution.LoadTyped.
type ApiEntitiesPackagesDebianDistributionLoadMatch struct {
	GroupId *string `json:"group_id,omitempty"`
	Id string `json:"id"`
	ProjectId *string `json:"project_id,omitempty"`
}

// ApiEntitiesPackagesDebianDistributionListMatch is the typed request payload for ApiEntitiesPackagesDebianDistribution.ListTyped.
type ApiEntitiesPackagesDebianDistributionListMatch struct {
	GroupId *string `json:"group_id,omitempty"`
	ProjectId *string `json:"project_id,omitempty"`
	Codename *any `json:"codename,omitempty"`
}

// ApiEntitiesPackagesDebianDistributionCreateData is the typed request payload for ApiEntitiesPackagesDebianDistribution.CreateTyped.
type ApiEntitiesPackagesDebianDistributionCreateData struct {
	GroupId *string `json:"group_id,omitempty"`
	ProjectId *string `json:"project_id,omitempty"`
}

// ApiEntitiesPackagesDebianDistributionUpdateData is the typed request payload for ApiEntitiesPackagesDebianDistribution.UpdateTyped.
type ApiEntitiesPackagesDebianDistributionUpdateData struct {
	GroupId *string `json:"group_id,omitempty"`
	Id string `json:"id"`
	ProjectId *string `json:"project_id,omitempty"`
}

// ApiEntitiesPagesDomain is the typed data model for the api_entities_pages_domain entity.
type ApiEntitiesPagesDomain struct {
	AutoSslEnabled *string `json:"auto_ssl_enabled,omitempty"`
	Certificate *map[string]any `json:"certificate,omitempty"`
	Domain *string `json:"domain,omitempty"`
	EnabledUntil *string `json:"enabled_until,omitempty"`
	Url *string `json:"url,omitempty"`
	VerificationCode *string `json:"verification_code,omitempty"`
	Verified *bool `json:"verified,omitempty"`
}

// ApiEntitiesPagesDomainLoadMatch is the typed request payload for ApiEntitiesPagesDomain.LoadTyped.
type ApiEntitiesPagesDomainLoadMatch struct {
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
}

// ApiEntitiesPagesDomainListMatch is the typed request payload for ApiEntitiesPagesDomain.ListTyped.
type ApiEntitiesPagesDomainListMatch struct {
	ProjectId string `json:"project_id"`
}

// ApiEntitiesPagesDomainCreateData is the typed request payload for ApiEntitiesPagesDomain.CreateTyped.
type ApiEntitiesPagesDomainCreateData struct {
	ProjectId string `json:"project_id"`
}

// ApiEntitiesPagesDomainUpdateData is the typed request payload for ApiEntitiesPagesDomain.UpdateTyped.
type ApiEntitiesPagesDomainUpdateData struct {
	DomainId string `json:"domain_id"`
	ProjectId string `json:"project_id"`
}

// ApiEntitiesPagesDomainBasic is the typed data model for the api_entities_pages_domain_basic entity.
type ApiEntitiesPagesDomainBasic struct {
	AutoSslEnabled *string `json:"auto_ssl_enabled,omitempty"`
	CertificateExpiration *map[string]any `json:"certificate_expiration,omitempty"`
	Domain *string `json:"domain,omitempty"`
	EnabledUntil *string `json:"enabled_until,omitempty"`
	ProjectId *string `json:"project_id,omitempty"`
	Url *string `json:"url,omitempty"`
	VerificationCode *string `json:"verification_code,omitempty"`
	Verified *bool `json:"verified,omitempty"`
}

// ApiEntitiesPagesDomainBasicLoadMatch is the typed request payload for ApiEntitiesPagesDomainBasic.LoadTyped.
type ApiEntitiesPagesDomainBasicLoadMatch struct {
	AutoSslEnabled *string `json:"auto_ssl_enabled,omitempty"`
	CertificateExpiration *map[string]any `json:"certificate_expiration,omitempty"`
	Domain *string `json:"domain,omitempty"`
	EnabledUntil *string `json:"enabled_until,omitempty"`
	ProjectId *string `json:"project_id,omitempty"`
	Url *string `json:"url,omitempty"`
	VerificationCode *string `json:"verification_code,omitempty"`
	Verified *bool `json:"verified,omitempty"`
}

// ApiEntitiesPersonalAccessToken is the typed data model for the api_entities_personal_access_token entity.
type ApiEntitiesPersonalAccessToken struct {
	Active *bool `json:"active,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	ExpiresAt *string `json:"expires_at,omitempty"`
	Id *int `json:"id,omitempty"`
	LastUsedAt *string `json:"last_used_at,omitempty"`
	Name *string `json:"name,omitempty"`
	Revoked *bool `json:"revoked,omitempty"`
	Scope *[]any `json:"scope,omitempty"`
	UserId *int `json:"user_id,omitempty"`
}

// ApiEntitiesPersonalAccessTokenListMatch is the typed request payload for ApiEntitiesPersonalAccessToken.ListTyped.
type ApiEntitiesPersonalAccessTokenListMatch struct {
	Active *bool `json:"active,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	ExpiresAt *string `json:"expires_at,omitempty"`
	Id *int `json:"id,omitempty"`
	LastUsedAt *string `json:"last_used_at,omitempty"`
	Name *string `json:"name,omitempty"`
	Revoked *bool `json:"revoked,omitempty"`
	Scope *[]any `json:"scope,omitempty"`
	UserId *int `json:"user_id,omitempty"`
}

// ApiEntitiesPersonalAccessTokenWithLastUsedIp is the typed data model for the api_entities_personal_access_token_with_last_used_ip entity.
type ApiEntitiesPersonalAccessTokenWithLastUsedIp struct {
	Active *bool `json:"active,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	ExpiresAt *string `json:"expires_at,omitempty"`
	Id *int `json:"id,omitempty"`
	LastUsedAt *string `json:"last_used_at,omitempty"`
	LastUsedIp *[]any `json:"last_used_ip,omitempty"`
	Name *string `json:"name,omitempty"`
	Revoked *bool `json:"revoked,omitempty"`
	Scope *[]any `json:"scope,omitempty"`
	UserId *int `json:"user_id,omitempty"`
}

// ApiEntitiesPersonalAccessTokenWithLastUsedIpLoadMatch is the typed request payload for ApiEntitiesPersonalAccessTokenWithLastUsedIp.LoadTyped.
type ApiEntitiesPersonalAccessTokenWithLastUsedIpLoadMatch struct {
	Id string `json:"id"`
}

// ApiEntitiesPersonalAccessTokenWithLastUsedIpListMatch is the typed request payload for ApiEntitiesPersonalAccessTokenWithLastUsedIp.ListTyped.
type ApiEntitiesPersonalAccessTokenWithLastUsedIpListMatch struct {
	Active *bool `json:"active,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	ExpiresAt *string `json:"expires_at,omitempty"`
	Id *int `json:"id,omitempty"`
	LastUsedAt *string `json:"last_used_at,omitempty"`
	LastUsedIp *[]any `json:"last_used_ip,omitempty"`
	Name *string `json:"name,omitempty"`
	Revoked *bool `json:"revoked,omitempty"`
	Scope *[]any `json:"scope,omitempty"`
	UserId *int `json:"user_id,omitempty"`
}

// ApiEntitiesPersonalAccessTokenWithToken is the typed data model for the api_entities_personal_access_token_with_token entity.
type ApiEntitiesPersonalAccessTokenWithToken struct {
	Active *bool `json:"active,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	ExpiresAt *string `json:"expires_at,omitempty"`
	Id *int `json:"id,omitempty"`
	LastUsedAt *string `json:"last_used_at,omitempty"`
	Name *string `json:"name,omitempty"`
	Revoked *bool `json:"revoked,omitempty"`
	Scope *[]any `json:"scope,omitempty"`
	Token *string `json:"token,omitempty"`
	UserId *int `json:"user_id,omitempty"`
}

// ApiEntitiesPersonalAccessTokenWithTokenCreateData is the typed request payload for ApiEntitiesPersonalAccessTokenWithToken.CreateTyped.
type ApiEntitiesPersonalAccessTokenWithTokenCreateData struct {
	PersonalAccessTokenId *string `json:"personal_access_token_id,omitempty"`
}

// ApiEntitiesPersonalSnippet is the typed data model for the api_entities_personal_snippet entity.
type ApiEntitiesPersonalSnippet struct {
	Author *map[string]any `json:"author,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	File *[]any `json:"file,omitempty"`
	FileName *string `json:"file_name,omitempty"`
	HttpUrlToRepo *string `json:"http_url_to_repo,omitempty"`
	Id *int `json:"id,omitempty"`
	Imported *bool `json:"imported,omitempty"`
	ImportedFrom *string `json:"imported_from,omitempty"`
	ProjectId *int `json:"project_id,omitempty"`
	RawUrl *string `json:"raw_url,omitempty"`
	RepositoryStorage *string `json:"repository_storage,omitempty"`
	SshUrlToRepo *string `json:"ssh_url_to_repo,omitempty"`
	Title *string `json:"title,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Visibility *string `json:"visibility,omitempty"`
	WebUrl *string `json:"web_url,omitempty"`
}

// ApiEntitiesPersonalSnippetLoadMatch is the typed request payload for ApiEntitiesPersonalSnippet.LoadTyped.
type ApiEntitiesPersonalSnippetLoadMatch struct {
	Id string `json:"id"`
}

// ApiEntitiesPersonalSnippetListMatch is the typed request payload for ApiEntitiesPersonalSnippet.ListTyped.
type ApiEntitiesPersonalSnippetListMatch struct {
	Author *map[string]any `json:"author,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	File *[]any `json:"file,omitempty"`
	FileName *string `json:"file_name,omitempty"`
	HttpUrlToRepo *string `json:"http_url_to_repo,omitempty"`
	Id *int `json:"id,omitempty"`
	Imported *bool `json:"imported,omitempty"`
	ImportedFrom *string `json:"imported_from,omitempty"`
	ProjectId *int `json:"project_id,omitempty"`
	RawUrl *string `json:"raw_url,omitempty"`
	RepositoryStorage *string `json:"repository_storage,omitempty"`
	SshUrlToRepo *string `json:"ssh_url_to_repo,omitempty"`
	Title *string `json:"title,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Visibility *string `json:"visibility,omitempty"`
	WebUrl *string `json:"web_url,omitempty"`
}

// ApiEntitiesPersonalSnippetCreateData is the typed request payload for ApiEntitiesPersonalSnippet.CreateTyped.
type ApiEntitiesPersonalSnippetCreateData struct {
	Author *map[string]any `json:"author,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	File *[]any `json:"file,omitempty"`
	FileName *string `json:"file_name,omitempty"`
	HttpUrlToRepo *string `json:"http_url_to_repo,omitempty"`
	Id *int `json:"id,omitempty"`
	Imported *bool `json:"imported,omitempty"`
	ImportedFrom *string `json:"imported_from,omitempty"`
	ProjectId *int `json:"project_id,omitempty"`
	RawUrl *string `json:"raw_url,omitempty"`
	RepositoryStorage *string `json:"repository_storage,omitempty"`
	SshUrlToRepo *string `json:"ssh_url_to_repo,omitempty"`
	Title *string `json:"title,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Visibility *string `json:"visibility,omitempty"`
	WebUrl *string `json:"web_url,omitempty"`
}

// ApiEntitiesPersonalSnippetUpdateData is the typed request payload for ApiEntitiesPersonalSnippet.UpdateTyped.
type ApiEntitiesPersonalSnippetUpdateData struct {
	Id string `json:"id"`
}

// ApiEntitiesPlanLimit is the typed data model for the api_entities_plan_limit entity.
type ApiEntitiesPlanLimit struct {
	CiActiveJob *int `json:"ci_active_job,omitempty"`
	CiInstanceLevelVariable *int `json:"ci_instance_level_variable,omitempty"`
	CiNeedsSizeLimit *int `json:"ci_needs_size_limit,omitempty"`
	CiPipelineSchedule *int `json:"ci_pipeline_schedule,omitempty"`
	CiPipelineSize *int `json:"ci_pipeline_size,omitempty"`
	CiProjectSubscription *int `json:"ci_project_subscription,omitempty"`
	CiRegisteredGroupRunner *int `json:"ci_registered_group_runner,omitempty"`
	CiRegisteredProjectRunner *int `json:"ci_registered_project_runner,omitempty"`
	ConanMaxFileSize *int `json:"conan_max_file_size,omitempty"`
	DotenvSize *int `json:"dotenv_size,omitempty"`
	DotenvVariable *int `json:"dotenv_variable,omitempty"`
	EnforcementLimit *int `json:"enforcement_limit,omitempty"`
	GenericPackagesMaxFileSize *int `json:"generic_packages_max_file_size,omitempty"`
	HelmMaxFileSize *int `json:"helm_max_file_size,omitempty"`
	LimitsHistory *map[string]any `json:"limits_history,omitempty"`
	MavenMaxFileSize *int `json:"maven_max_file_size,omitempty"`
	NotificationLimit *int `json:"notification_limit,omitempty"`
	NpmMaxFileSize *int `json:"npm_max_file_size,omitempty"`
	NugetMaxFileSize *int `json:"nuget_max_file_size,omitempty"`
	PipelineHierarchySize *int `json:"pipeline_hierarchy_size,omitempty"`
	PypiMaxFileSize *int `json:"pypi_max_file_size,omitempty"`
	StorageSizeLimit *int `json:"storage_size_limit,omitempty"`
	TerraformModuleMaxFileSize *int `json:"terraform_module_max_file_size,omitempty"`
}

// ApiEntitiesPlanLimitLoadMatch is the typed request payload for ApiEntitiesPlanLimit.LoadTyped.
type ApiEntitiesPlanLimitLoadMatch struct {
	CiActiveJob *int `json:"ci_active_job,omitempty"`
	CiInstanceLevelVariable *int `json:"ci_instance_level_variable,omitempty"`
	CiNeedsSizeLimit *int `json:"ci_needs_size_limit,omitempty"`
	CiPipelineSchedule *int `json:"ci_pipeline_schedule,omitempty"`
	CiPipelineSize *int `json:"ci_pipeline_size,omitempty"`
	CiProjectSubscription *int `json:"ci_project_subscription,omitempty"`
	CiRegisteredGroupRunner *int `json:"ci_registered_group_runner,omitempty"`
	CiRegisteredProjectRunner *int `json:"ci_registered_project_runner,omitempty"`
	ConanMaxFileSize *int `json:"conan_max_file_size,omitempty"`
	DotenvSize *int `json:"dotenv_size,omitempty"`
	DotenvVariable *int `json:"dotenv_variable,omitempty"`
	EnforcementLimit *int `json:"enforcement_limit,omitempty"`
	GenericPackagesMaxFileSize *int `json:"generic_packages_max_file_size,omitempty"`
	HelmMaxFileSize *int `json:"helm_max_file_size,omitempty"`
	LimitsHistory *map[string]any `json:"limits_history,omitempty"`
	MavenMaxFileSize *int `json:"maven_max_file_size,omitempty"`
	NotificationLimit *int `json:"notification_limit,omitempty"`
	NpmMaxFileSize *int `json:"npm_max_file_size,omitempty"`
	NugetMaxFileSize *int `json:"nuget_max_file_size,omitempty"`
	PipelineHierarchySize *int `json:"pipeline_hierarchy_size,omitempty"`
	PypiMaxFileSize *int `json:"pypi_max_file_size,omitempty"`
	StorageSizeLimit *int `json:"storage_size_limit,omitempty"`
	TerraformModuleMaxFileSize *int `json:"terraform_module_max_file_size,omitempty"`
}

// ApiEntitiesPlanLimitUpdateData is the typed request payload for ApiEntitiesPlanLimit.UpdateTyped.
type ApiEntitiesPlanLimitUpdateData struct {
	CiActiveJob *int `json:"ci_active_job,omitempty"`
	CiInstanceLevelVariable *int `json:"ci_instance_level_variable,omitempty"`
	CiNeedsSizeLimit *int `json:"ci_needs_size_limit,omitempty"`
	CiPipelineSchedule *int `json:"ci_pipeline_schedule,omitempty"`
	CiPipelineSize *int `json:"ci_pipeline_size,omitempty"`
	CiProjectSubscription *int `json:"ci_project_subscription,omitempty"`
	CiRegisteredGroupRunner *int `json:"ci_registered_group_runner,omitempty"`
	CiRegisteredProjectRunner *int `json:"ci_registered_project_runner,omitempty"`
	ConanMaxFileSize *int `json:"conan_max_file_size,omitempty"`
	DotenvSize *int `json:"dotenv_size,omitempty"`
	DotenvVariable *int `json:"dotenv_variable,omitempty"`
	EnforcementLimit *int `json:"enforcement_limit,omitempty"`
	GenericPackagesMaxFileSize *int `json:"generic_packages_max_file_size,omitempty"`
	HelmMaxFileSize *int `json:"helm_max_file_size,omitempty"`
	LimitsHistory *map[string]any `json:"limits_history,omitempty"`
	MavenMaxFileSize *int `json:"maven_max_file_size,omitempty"`
	NotificationLimit *int `json:"notification_limit,omitempty"`
	NpmMaxFileSize *int `json:"npm_max_file_size,omitempty"`
	NugetMaxFileSize *int `json:"nuget_max_file_size,omitempty"`
	PipelineHierarchySize *int `json:"pipeline_hierarchy_size,omitempty"`
	PypiMaxFileSize *int `json:"pypi_max_file_size,omitempty"`
	StorageSizeLimit *int `json:"storage_size_limit,omitempty"`
	TerraformModuleMaxFileSize *int `json:"terraform_module_max_file_size,omitempty"`
}

// ApiEntitiesProject is the typed data model for the api_entities_project entity.
type ApiEntitiesProject struct {
	AllowMergeOnSkippedPipeline *bool `json:"allow_merge_on_skipped_pipeline,omitempty"`
	AllowPipelineTriggerApproveDeployment *bool `json:"allow_pipeline_trigger_approve_deployment,omitempty"`
	AnalyticsAccessLevel *string `json:"analytics_access_level,omitempty"`
	ApprovalsBeforeMerge *string `json:"approvals_before_merge,omitempty"`
	Archived *bool `json:"archived,omitempty"`
	AutoCancelPendingPipeline *string `json:"auto_cancel_pending_pipeline,omitempty"`
	AutoDevopsDeployStrategy *string `json:"auto_devops_deploy_strategy,omitempty"`
	AutoDevopsEnabled *bool `json:"auto_devops_enabled,omitempty"`
	AutoDuoCodeReviewEnabled *string `json:"auto_duo_code_review_enabled,omitempty"`
	AutocloseReferencedIssue *bool `json:"autoclose_referenced_issue,omitempty"`
	AvatarUrl *string `json:"avatar_url,omitempty"`
	BuildGitStrategy *string `json:"build_git_strategy,omitempty"`
	BuildTimeout *int `json:"build_timeout,omitempty"`
	BuildsAccessLevel *string `json:"builds_access_level,omitempty"`
	CanCreateMergeRequestIn *bool `json:"can_create_merge_request_in,omitempty"`
	CiAllowForkPipelinesToRunInParentProject *bool `json:"ci_allow_fork_pipelines_to_run_in_parent_project,omitempty"`
	CiConfigPath *string `json:"ci_config_path,omitempty"`
	CiDefaultGitDepth *int `json:"ci_default_git_depth,omitempty"`
	CiDeletePipelinesInSecond *int `json:"ci_delete_pipelines_in_second,omitempty"`
	CiForwardDeploymentEnabled *bool `json:"ci_forward_deployment_enabled,omitempty"`
	CiForwardDeploymentRollbackAllowed *bool `json:"ci_forward_deployment_rollback_allowed,omitempty"`
	CiIdTokenSubClaimComponent *[]any `json:"ci_id_token_sub_claim_component,omitempty"`
	CiJobTokenScopeEnabled *bool `json:"ci_job_token_scope_enabled,omitempty"`
	CiPipelineVariablesMinimumOverrideRole *string `json:"ci_pipeline_variables_minimum_override_role,omitempty"`
	CiPushRepositoryForJobTokenAllowed *bool `json:"ci_push_repository_for_job_token_allowed,omitempty"`
	CiRestrictPipelineCancellationRole *string `json:"ci_restrict_pipeline_cancellation_role,omitempty"`
	CiSeparatedCache *bool `json:"ci_separated_cache,omitempty"`
	ComplianceFramework *string `json:"compliance_framework,omitempty"`
	ContainerExpirationPolicy *map[string]any `json:"container_expiration_policy,omitempty"`
	ContainerRegistryAccessLevel *string `json:"container_registry_access_level,omitempty"`
	ContainerRegistryEnabled *bool `json:"container_registry_enabled,omitempty"`
	ContainerRegistryImagePrefix *string `json:"container_registry_image_prefix,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	CreatorId *int `json:"creator_id,omitempty"`
	CustomAttribute *map[string]any `json:"custom_attribute,omitempty"`
	DefaultBranch *string `json:"default_branch,omitempty"`
	Description *string `json:"description,omitempty"`
	DescriptionHtml *string `json:"description_html,omitempty"`
	DuoRemoteFlowsEnabled *string `json:"duo_remote_flows_enabled,omitempty"`
	EmailsDisabled *bool `json:"emails_disabled,omitempty"`
	EmailsEnabled *bool `json:"emails_enabled,omitempty"`
	EmptyRepo *bool `json:"empty_repo,omitempty"`
	EnforceAuthChecksOnUpload *bool `json:"enforce_auth_checks_on_upload,omitempty"`
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
	Link *map[string]any `json:"link,omitempty"`
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
	MirrorOverwritesDivergedBranch *string `json:"mirror_overwrites_diverged_branch,omitempty"`
	MirrorTriggerBuild *string `json:"mirror_trigger_build,omitempty"`
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
	OnlyAllowMergeIfPipelineSucceed *bool `json:"only_allow_merge_if_pipeline_succeed,omitempty"`
	OnlyMirrorProtectedBranch *string `json:"only_mirror_protected_branch,omitempty"`
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
	PublicJob *bool `json:"public_job,omitempty"`
	ReadmeUrl *string `json:"readme_url,omitempty"`
	ReleasesAccessLevel *string `json:"releases_access_level,omitempty"`
	RemoveSourceBranchAfterMerge *bool `json:"remove_source_branch_after_merge,omitempty"`
	RepositoryAccessLevel *string `json:"repository_access_level,omitempty"`
	RepositoryObjectFormat *string `json:"repository_object_format,omitempty"`
	RepositoryStorage *string `json:"repository_storage,omitempty"`
	RequestAccessEnabled *bool `json:"request_access_enabled,omitempty"`
	RequirementsAccessLevel *string `json:"requirements_access_level,omitempty"`
	RequirementsEnabled *string `json:"requirements_enabled,omitempty"`
	ResolveOutdatedDiffDiscussion *bool `json:"resolve_outdated_diff_discussion,omitempty"`
	ResourceGroupDefaultProcessMode *string `json:"resource_group_default_process_mode,omitempty"`
	RestrictUserDefinedVariable *bool `json:"restrict_user_defined_variable,omitempty"`
	RunnerTokenExpirationInterval *int `json:"runner_token_expiration_interval,omitempty"`
	RunnersToken *string `json:"runners_token,omitempty"`
	SecretPushProtectionEnabled *bool `json:"secret_push_protection_enabled,omitempty"`
	SecurityAndComplianceAccessLevel *string `json:"security_and_compliance_access_level,omitempty"`
	SecurityAndComplianceEnabled *string `json:"security_and_compliance_enabled,omitempty"`
	ServiceDeskAddress *string `json:"service_desk_address,omitempty"`
	ServiceDeskEnabled *bool `json:"service_desk_enabled,omitempty"`
	SharedRunnersEnabled *bool `json:"shared_runners_enabled,omitempty"`
	SharedWithGroup *[]any `json:"shared_with_group,omitempty"`
	ShowDiffPreviewInEmail *bool `json:"show_diff_preview_in_email,omitempty"`
	SnippetsAccessLevel *string `json:"snippets_access_level,omitempty"`
	SnippetsEnabled *bool `json:"snippets_enabled,omitempty"`
	SppRepositoryPipelineAccess *bool `json:"spp_repository_pipeline_access,omitempty"`
	SquashCommitTemplate *string `json:"squash_commit_template,omitempty"`
	SquashOption *string `json:"squash_option,omitempty"`
	SshUrlToRepo *string `json:"ssh_url_to_repo,omitempty"`
	StarCount *int `json:"star_count,omitempty"`
	Statistic *map[string]any `json:"statistic,omitempty"`
	SuggestionCommitMessage *string `json:"suggestion_commit_message,omitempty"`
	TagList *[]any `json:"tag_list,omitempty"`
	Topic *[]any `json:"topic,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Visibility *string `json:"visibility,omitempty"`
	WarnAboutPotentiallyUnwantedCharacter *bool `json:"warn_about_potentially_unwanted_character,omitempty"`
	WebBasedCommitSigningEnabled *string `json:"web_based_commit_signing_enabled,omitempty"`
	WebUrl *string `json:"web_url,omitempty"`
	WikiAccessLevel *string `json:"wiki_access_level,omitempty"`
	WikiEnabled *bool `json:"wiki_enabled,omitempty"`
}

// ApiEntitiesProjectListMatch is the typed request payload for ApiEntitiesProject.ListTyped.
type ApiEntitiesProjectListMatch struct {
	ProjectId *string `json:"project_id,omitempty"`
	GroupId *string `json:"group_id,omitempty"`
}

// ApiEntitiesProjectCreateData is the typed request payload for ApiEntitiesProject.CreateTyped.
type ApiEntitiesProjectCreateData struct {
	ForkedFromId *string `json:"forked_from_id,omitempty"`
	ProjectId *string `json:"project_id,omitempty"`
	UserId *string `json:"user_id,omitempty"`
}

// ApiEntitiesProjectUpdateData is the typed request payload for ApiEntitiesProject.UpdateTyped.
type ApiEntitiesProjectUpdateData struct {
	Id *string `json:"id,omitempty"`
	ProjectId *string `json:"project_id,omitempty"`
}

// ApiEntitiesProjectDailyStatistic is the typed data model for the api_entities_project_daily_statistic entity.
type ApiEntitiesProjectDailyStatistic struct {
	Fetch *map[string]any `json:"fetch,omitempty"`
}

// ApiEntitiesProjectDailyStatisticLoadMatch is the typed request payload for ApiEntitiesProjectDailyStatistic.LoadTyped.
type ApiEntitiesProjectDailyStatisticLoadMatch struct {
	ProjectId string `json:"project_id"`
}

// ApiEntitiesProjectExportStatus is the typed data model for the api_entities_project_export_status entity.
type ApiEntitiesProjectExportStatus struct {
	CreatedAt *string `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	ExportStatus *string `json:"export_status,omitempty"`
	Id *int `json:"id,omitempty"`
	Link *map[string]any `json:"link,omitempty"`
	Name *string `json:"name,omitempty"`
	NameWithNamespace *string `json:"name_with_namespace,omitempty"`
	Path *string `json:"path,omitempty"`
	PathWithNamespace *string `json:"path_with_namespace,omitempty"`
}

// ApiEntitiesProjectExportStatusLoadMatch is the typed request payload for ApiEntitiesProjectExportStatus.LoadTyped.
type ApiEntitiesProjectExportStatusLoadMatch struct {
	ProjectId string `json:"project_id"`
}

// ApiEntitiesProjectGroupLink is the typed data model for the api_entities_project_group_link entity.
type ApiEntitiesProjectGroupLink struct {
}

// ApiEntitiesProjectGroupLinkCreateData is the typed request payload for ApiEntitiesProjectGroupLink.CreateTyped.
type ApiEntitiesProjectGroupLinkCreateData struct {
	ProjectId string `json:"project_id"`
}

// ApiEntitiesProjectHook is the typed data model for the api_entities_project_hook entity.
type ApiEntitiesProjectHook struct {
	AlertStatus *any `json:"alert_status,omitempty"`
	BranchFilterStrategy *string `json:"branch_filter_strategy,omitempty"`
	ConfidentialIssuesEvent *bool `json:"confidential_issues_event,omitempty"`
	ConfidentialNoteEvent *bool `json:"confidential_note_event,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	CustomHeader *[]any `json:"custom_header,omitempty"`
	CustomWebhookTemplate *string `json:"custom_webhook_template,omitempty"`
	DeploymentEvent *bool `json:"deployment_event,omitempty"`
	Description *string `json:"description,omitempty"`
	DisabledUntil *string `json:"disabled_until,omitempty"`
	EmojiEvent *bool `json:"emoji_event,omitempty"`
	EnableSslVerification *bool `json:"enable_ssl_verification,omitempty"`
	FeatureFlagEvent *bool `json:"feature_flag_event,omitempty"`
	Id *string `json:"id,omitempty"`
	IssuesEvent *bool `json:"issues_event,omitempty"`
	JobEvent *bool `json:"job_event,omitempty"`
	MergeRequestsEvent *bool `json:"merge_requests_event,omitempty"`
	MilestoneEvent *bool `json:"milestone_event,omitempty"`
	Name *string `json:"name,omitempty"`
	NoteEvent *bool `json:"note_event,omitempty"`
	PipelineEvent *bool `json:"pipeline_event,omitempty"`
	ProjectId *string `json:"project_id,omitempty"`
	PushEvent *bool `json:"push_event,omitempty"`
	PushEventsBranchFilter *string `json:"push_events_branch_filter,omitempty"`
	ReleasesEvent *bool `json:"releases_event,omitempty"`
	RepositoryUpdateEvent *bool `json:"repository_update_event,omitempty"`
	ResourceAccessTokenEvent *bool `json:"resource_access_token_event,omitempty"`
	TagPushEvent *bool `json:"tag_push_event,omitempty"`
	Url *string `json:"url,omitempty"`
	UrlVariable *[]any `json:"url_variable,omitempty"`
	VulnerabilityEvent *bool `json:"vulnerability_event,omitempty"`
	WikiPageEvent *bool `json:"wiki_page_event,omitempty"`
}

// ApiEntitiesProjectHookLoadMatch is the typed request payload for ApiEntitiesProjectHook.LoadTyped.
type ApiEntitiesProjectHookLoadMatch struct {
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
}

// ApiEntitiesProjectHookListMatch is the typed request payload for ApiEntitiesProjectHook.ListTyped.
type ApiEntitiesProjectHookListMatch struct {
	ProjectId string `json:"project_id"`
}

// ApiEntitiesProjectHookCreateData is the typed request payload for ApiEntitiesProjectHook.CreateTyped.
type ApiEntitiesProjectHookCreateData struct {
	ProjectId string `json:"project_id"`
}

// ApiEntitiesProjectHookUpdateData is the typed request payload for ApiEntitiesProjectHook.UpdateTyped.
type ApiEntitiesProjectHookUpdateData struct {
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
}

// ApiEntitiesProjectImportStatus is the typed data model for the api_entities_project_import_status entity.
type ApiEntitiesProjectImportStatus struct {
	CreatedAt *string `json:"created_at,omitempty"`
	ExceptionClass *string `json:"exception_class,omitempty"`
	ExceptionMessage *string `json:"exception_message,omitempty"`
	Id *string `json:"id,omitempty"`
	LineNumber *int `json:"line_number,omitempty"`
	RelationName *string `json:"relation_name,omitempty"`
	Source *string `json:"source,omitempty"`
}

// ApiEntitiesProjectImportStatusListMatch is the typed request payload for ApiEntitiesProjectImportStatus.ListTyped.
type ApiEntitiesProjectImportStatusListMatch struct {
	ProjectId string `json:"project_id"`
}

// ApiEntitiesProjectImportStatusCreateData is the typed request payload for ApiEntitiesProjectImportStatus.CreateTyped.
type ApiEntitiesProjectImportStatusCreateData struct {
	CreatedAt *string `json:"created_at,omitempty"`
	ExceptionClass *string `json:"exception_class,omitempty"`
	ExceptionMessage *string `json:"exception_message,omitempty"`
	Id *string `json:"id,omitempty"`
	LineNumber *int `json:"line_number,omitempty"`
	RelationName *string `json:"relation_name,omitempty"`
	Source *string `json:"source,omitempty"`
}

// ApiEntitiesProjectJobTokenScope is the typed data model for the api_entities_project_job_token_scope entity.
type ApiEntitiesProjectJobTokenScope struct {
	InboundEnabled *bool `json:"inbound_enabled,omitempty"`
	OutboundEnabled *bool `json:"outbound_enabled,omitempty"`
}

// ApiEntitiesProjectJobTokenScopeLoadMatch is the typed request payload for ApiEntitiesProjectJobTokenScope.LoadTyped.
type ApiEntitiesProjectJobTokenScopeLoadMatch struct {
	ProjectId string `json:"project_id"`
}

// ApiEntitiesProjectRepositoryStorage is the typed data model for the api_entities_project_repository_storage entity.
type ApiEntitiesProjectRepositoryStorage struct {
	CreatedAt *string `json:"created_at,omitempty"`
	DiskPath *string `json:"disk_path,omitempty"`
	ProjectId *int `json:"project_id,omitempty"`
	RepositoryStorage *string `json:"repository_storage,omitempty"`
}

// ApiEntitiesProjectRepositoryStorageLoadMatch is the typed request payload for ApiEntitiesProjectRepositoryStorage.LoadTyped.
type ApiEntitiesProjectRepositoryStorageLoadMatch struct {
	ProjectId string `json:"project_id"`
}

// ApiEntitiesProjectSnippet is the typed data model for the api_entities_project_snippet entity.
type ApiEntitiesProjectSnippet struct {
	Author *map[string]any `json:"author,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	File *[]any `json:"file,omitempty"`
	FileName *string `json:"file_name,omitempty"`
	HttpUrlToRepo *string `json:"http_url_to_repo,omitempty"`
	Id *int `json:"id,omitempty"`
	Imported *bool `json:"imported,omitempty"`
	ImportedFrom *string `json:"imported_from,omitempty"`
	ProjectId *int `json:"project_id,omitempty"`
	RawUrl *string `json:"raw_url,omitempty"`
	RepositoryStorage *string `json:"repository_storage,omitempty"`
	SshUrlToRepo *string `json:"ssh_url_to_repo,omitempty"`
	Title *string `json:"title,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Visibility *string `json:"visibility,omitempty"`
	WebUrl *string `json:"web_url,omitempty"`
}

// ApiEntitiesProjectSnippetLoadMatch is the typed request payload for ApiEntitiesProjectSnippet.LoadTyped.
type ApiEntitiesProjectSnippetLoadMatch struct {
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
}

// ApiEntitiesProjectSnippetListMatch is the typed request payload for ApiEntitiesProjectSnippet.ListTyped.
type ApiEntitiesProjectSnippetListMatch struct {
	FileId *string `json:"file_id,omitempty"`
	FilePath *any `json:"file_path,omitempty"`
	ProjectId string `json:"project_id"`
	SnippetId *string `json:"snippet_id,omitempty"`
}

// ApiEntitiesProjectSnippetCreateData is the typed request payload for ApiEntitiesProjectSnippet.CreateTyped.
type ApiEntitiesProjectSnippetCreateData struct {
	ProjectId string `json:"project_id"`
}

// ApiEntitiesProjectSnippetUpdateData is the typed request payload for ApiEntitiesProjectSnippet.UpdateTyped.
type ApiEntitiesProjectSnippetUpdateData struct {
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
}

// ApiEntitiesProjectUpload is the typed data model for the api_entities_project_upload entity.
type ApiEntitiesProjectUpload struct {
}

// ApiEntitiesProjectUploadCreateData is the typed request payload for ApiEntitiesProjectUpload.CreateTyped.
type ApiEntitiesProjectUploadCreateData struct {
	ProjectId string `json:"project_id"`
}

// ApiEntitiesProjectWithAccess is the typed data model for the api_entities_project_with_access entity.
type ApiEntitiesProjectWithAccess struct {
	AllowMergeOnSkippedPipeline *bool `json:"allow_merge_on_skipped_pipeline,omitempty"`
	AllowPipelineTriggerApproveDeployment *bool `json:"allow_pipeline_trigger_approve_deployment,omitempty"`
	AnalyticsAccessLevel *string `json:"analytics_access_level,omitempty"`
	ApprovalsBeforeMerge *string `json:"approvals_before_merge,omitempty"`
	Archived *bool `json:"archived,omitempty"`
	AutoCancelPendingPipeline *string `json:"auto_cancel_pending_pipeline,omitempty"`
	AutoDevopsDeployStrategy *string `json:"auto_devops_deploy_strategy,omitempty"`
	AutoDevopsEnabled *bool `json:"auto_devops_enabled,omitempty"`
	AutoDuoCodeReviewEnabled *string `json:"auto_duo_code_review_enabled,omitempty"`
	AutocloseReferencedIssue *bool `json:"autoclose_referenced_issue,omitempty"`
	AvatarUrl *string `json:"avatar_url,omitempty"`
	BuildGitStrategy *string `json:"build_git_strategy,omitempty"`
	BuildTimeout *int `json:"build_timeout,omitempty"`
	BuildsAccessLevel *string `json:"builds_access_level,omitempty"`
	CanCreateMergeRequestIn *bool `json:"can_create_merge_request_in,omitempty"`
	CiAllowForkPipelinesToRunInParentProject *bool `json:"ci_allow_fork_pipelines_to_run_in_parent_project,omitempty"`
	CiConfigPath *string `json:"ci_config_path,omitempty"`
	CiDefaultGitDepth *int `json:"ci_default_git_depth,omitempty"`
	CiDeletePipelinesInSecond *int `json:"ci_delete_pipelines_in_second,omitempty"`
	CiForwardDeploymentEnabled *bool `json:"ci_forward_deployment_enabled,omitempty"`
	CiForwardDeploymentRollbackAllowed *bool `json:"ci_forward_deployment_rollback_allowed,omitempty"`
	CiIdTokenSubClaimComponent *[]any `json:"ci_id_token_sub_claim_component,omitempty"`
	CiJobTokenScopeEnabled *bool `json:"ci_job_token_scope_enabled,omitempty"`
	CiPipelineVariablesMinimumOverrideRole *string `json:"ci_pipeline_variables_minimum_override_role,omitempty"`
	CiPushRepositoryForJobTokenAllowed *bool `json:"ci_push_repository_for_job_token_allowed,omitempty"`
	CiRestrictPipelineCancellationRole *string `json:"ci_restrict_pipeline_cancellation_role,omitempty"`
	CiSeparatedCache *bool `json:"ci_separated_cache,omitempty"`
	ComplianceFramework *string `json:"compliance_framework,omitempty"`
	ContainerExpirationPolicy *map[string]any `json:"container_expiration_policy,omitempty"`
	ContainerRegistryAccessLevel *string `json:"container_registry_access_level,omitempty"`
	ContainerRegistryEnabled *bool `json:"container_registry_enabled,omitempty"`
	ContainerRegistryImagePrefix *string `json:"container_registry_image_prefix,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	CreatorId *int `json:"creator_id,omitempty"`
	CustomAttribute *map[string]any `json:"custom_attribute,omitempty"`
	DefaultBranch *string `json:"default_branch,omitempty"`
	Description *string `json:"description,omitempty"`
	DescriptionHtml *string `json:"description_html,omitempty"`
	DuoRemoteFlowsEnabled *string `json:"duo_remote_flows_enabled,omitempty"`
	EmailsDisabled *bool `json:"emails_disabled,omitempty"`
	EmailsEnabled *bool `json:"emails_enabled,omitempty"`
	EmptyRepo *bool `json:"empty_repo,omitempty"`
	EnforceAuthChecksOnUpload *bool `json:"enforce_auth_checks_on_upload,omitempty"`
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
	Link *map[string]any `json:"link,omitempty"`
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
	MirrorOverwritesDivergedBranch *string `json:"mirror_overwrites_diverged_branch,omitempty"`
	MirrorTriggerBuild *string `json:"mirror_trigger_build,omitempty"`
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
	OnlyAllowMergeIfPipelineSucceed *bool `json:"only_allow_merge_if_pipeline_succeed,omitempty"`
	OnlyMirrorProtectedBranch *string `json:"only_mirror_protected_branch,omitempty"`
	OpenIssuesCount *int `json:"open_issues_count,omitempty"`
	Owner *map[string]any `json:"owner,omitempty"`
	PackageRegistryAccessLevel *string `json:"package_registry_access_level,omitempty"`
	PackagesEnabled *bool `json:"packages_enabled,omitempty"`
	PagesAccessLevel *string `json:"pages_access_level,omitempty"`
	Path *string `json:"path,omitempty"`
	PathWithNamespace *string `json:"path_with_namespace,omitempty"`
	Permission *map[string]any `json:"permission,omitempty"`
	PreReceiveSecretDetectionEnabled *bool `json:"pre_receive_secret_detection_enabled,omitempty"`
	PreventMergeWithoutJiraIssue *string `json:"prevent_merge_without_jira_issue,omitempty"`
	PrintingMergeRequestLinkEnabled *bool `json:"printing_merge_request_link_enabled,omitempty"`
	PublicJob *bool `json:"public_job,omitempty"`
	ReadmeUrl *string `json:"readme_url,omitempty"`
	ReleasesAccessLevel *string `json:"releases_access_level,omitempty"`
	RemoveSourceBranchAfterMerge *bool `json:"remove_source_branch_after_merge,omitempty"`
	RepositoryAccessLevel *string `json:"repository_access_level,omitempty"`
	RepositoryObjectFormat *string `json:"repository_object_format,omitempty"`
	RepositoryStorage *string `json:"repository_storage,omitempty"`
	RequestAccessEnabled *bool `json:"request_access_enabled,omitempty"`
	RequirementsAccessLevel *string `json:"requirements_access_level,omitempty"`
	RequirementsEnabled *string `json:"requirements_enabled,omitempty"`
	ResolveOutdatedDiffDiscussion *bool `json:"resolve_outdated_diff_discussion,omitempty"`
	ResourceGroupDefaultProcessMode *string `json:"resource_group_default_process_mode,omitempty"`
	RestrictUserDefinedVariable *bool `json:"restrict_user_defined_variable,omitempty"`
	RunnerTokenExpirationInterval *int `json:"runner_token_expiration_interval,omitempty"`
	RunnersToken *string `json:"runners_token,omitempty"`
	SecretPushProtectionEnabled *bool `json:"secret_push_protection_enabled,omitempty"`
	SecurityAndComplianceAccessLevel *string `json:"security_and_compliance_access_level,omitempty"`
	SecurityAndComplianceEnabled *string `json:"security_and_compliance_enabled,omitempty"`
	ServiceDeskAddress *string `json:"service_desk_address,omitempty"`
	ServiceDeskEnabled *bool `json:"service_desk_enabled,omitempty"`
	SharedRunnersEnabled *bool `json:"shared_runners_enabled,omitempty"`
	SharedWithGroup *[]any `json:"shared_with_group,omitempty"`
	ShowDiffPreviewInEmail *bool `json:"show_diff_preview_in_email,omitempty"`
	SnippetsAccessLevel *string `json:"snippets_access_level,omitempty"`
	SnippetsEnabled *bool `json:"snippets_enabled,omitempty"`
	SppRepositoryPipelineAccess *bool `json:"spp_repository_pipeline_access,omitempty"`
	SquashCommitTemplate *string `json:"squash_commit_template,omitempty"`
	SquashOption *string `json:"squash_option,omitempty"`
	SshUrlToRepo *string `json:"ssh_url_to_repo,omitempty"`
	StarCount *int `json:"star_count,omitempty"`
	Statistic *map[string]any `json:"statistic,omitempty"`
	SuggestionCommitMessage *string `json:"suggestion_commit_message,omitempty"`
	TagList *[]any `json:"tag_list,omitempty"`
	Topic *[]any `json:"topic,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Visibility *string `json:"visibility,omitempty"`
	WarnAboutPotentiallyUnwantedCharacter *bool `json:"warn_about_potentially_unwanted_character,omitempty"`
	WebBasedCommitSigningEnabled *string `json:"web_based_commit_signing_enabled,omitempty"`
	WebUrl *string `json:"web_url,omitempty"`
	WikiAccessLevel *string `json:"wiki_access_level,omitempty"`
	WikiEnabled *bool `json:"wiki_enabled,omitempty"`
}

// ApiEntitiesProjectWithAccessLoadMatch is the typed request payload for ApiEntitiesProjectWithAccess.LoadTyped.
type ApiEntitiesProjectWithAccessLoadMatch struct {
	Id string `json:"id"`
}

// ApiEntitiesProjectsContainerRegistryProtectionRule is the typed data model for the api_entities_projects_container_registry_protection_rule entity.
type ApiEntitiesProjectsContainerRegistryProtectionRule struct {
	Id *int `json:"id,omitempty"`
	MinimumAccessLevelForDelete *string `json:"minimum_access_level_for_delete,omitempty"`
	MinimumAccessLevelForPush *string `json:"minimum_access_level_for_push,omitempty"`
	ProjectId *int `json:"project_id,omitempty"`
	RepositoryPathPattern *string `json:"repository_path_pattern,omitempty"`
}

// ApiEntitiesProjectsContainerRegistryProtectionRuleListMatch is the typed request payload for ApiEntitiesProjectsContainerRegistryProtectionRule.ListTyped.
type ApiEntitiesProjectsContainerRegistryProtectionRuleListMatch struct {
	ProjectId string `json:"project_id"`
}

// ApiEntitiesProjectsContainerRegistryProtectionRuleCreateData is the typed request payload for ApiEntitiesProjectsContainerRegistryProtectionRule.CreateTyped.
type ApiEntitiesProjectsContainerRegistryProtectionRuleCreateData struct {
	ProjectId string `json:"project_id"`
}

// ApiEntitiesProjectsContainerRegistryProtectionRuleUpdateData is the typed request payload for ApiEntitiesProjectsContainerRegistryProtectionRule.UpdateTyped.
type ApiEntitiesProjectsContainerRegistryProtectionRuleUpdateData struct {
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
}

// ApiEntitiesProjectsPackagesProtectionRule is the typed data model for the api_entities_projects_packages_protection_rule entity.
type ApiEntitiesProjectsPackagesProtectionRule struct {
	Id *int `json:"id,omitempty"`
	MinimumAccessLevelForDelete *string `json:"minimum_access_level_for_delete,omitempty"`
	MinimumAccessLevelForPush *string `json:"minimum_access_level_for_push,omitempty"`
	PackageNamePattern *string `json:"package_name_pattern,omitempty"`
	PackageType *string `json:"package_type,omitempty"`
	ProjectId *int `json:"project_id,omitempty"`
}

// ApiEntitiesProjectsPackagesProtectionRuleListMatch is the typed request payload for ApiEntitiesProjectsPackagesProtectionRule.ListTyped.
type ApiEntitiesProjectsPackagesProtectionRuleListMatch struct {
	ProjectId string `json:"project_id"`
}

// ApiEntitiesProjectsPackagesProtectionRuleCreateData is the typed request payload for ApiEntitiesProjectsPackagesProtectionRule.CreateTyped.
type ApiEntitiesProjectsPackagesProtectionRuleCreateData struct {
	ProjectId string `json:"project_id"`
}

// ApiEntitiesProjectsPackagesProtectionRuleUpdateData is the typed request payload for ApiEntitiesProjectsPackagesProtectionRule.UpdateTyped.
type ApiEntitiesProjectsPackagesProtectionRuleUpdateData struct {
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
}

// ApiEntitiesProjectsTopic is the typed data model for the api_entities_projects_topic entity.
type ApiEntitiesProjectsTopic struct {
	AvatarUrl *string `json:"avatar_url,omitempty"`
	Description *string `json:"description,omitempty"`
	Id *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	OrganizationId *string `json:"organization_id,omitempty"`
	Title *string `json:"title,omitempty"`
	TotalProjectsCount *string `json:"total_projects_count,omitempty"`
}

// ApiEntitiesProjectsTopicLoadMatch is the typed request payload for ApiEntitiesProjectsTopic.LoadTyped.
type ApiEntitiesProjectsTopicLoadMatch struct {
	Id *string `json:"id,omitempty"`
}

// ApiEntitiesProjectsTopicCreateData is the typed request payload for ApiEntitiesProjectsTopic.CreateTyped.
type ApiEntitiesProjectsTopicCreateData struct {
	AvatarUrl *string `json:"avatar_url,omitempty"`
	Description *string `json:"description,omitempty"`
	Id *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	OrganizationId *string `json:"organization_id,omitempty"`
	Title *string `json:"title,omitempty"`
	TotalProjectsCount *string `json:"total_projects_count,omitempty"`
}

// ApiEntitiesProjectsTopicUpdateData is the typed request payload for ApiEntitiesProjectsTopic.UpdateTyped.
type ApiEntitiesProjectsTopicUpdateData struct {
	Id string `json:"id"`
}

// ApiEntitiesProtectedBranch is the typed data model for the api_entities_protected_branch entity.
type ApiEntitiesProtectedBranch struct {
	AllowForcePush *bool `json:"allow_force_push,omitempty"`
	CodeOwnerApprovalRequired *bool `json:"code_owner_approval_required,omitempty"`
	Id *int `json:"id,omitempty"`
	Inherited *bool `json:"inherited,omitempty"`
	MergeAccessLevel *[]any `json:"merge_access_level,omitempty"`
	Name *string `json:"name,omitempty"`
	PushAccessLevel *[]any `json:"push_access_level,omitempty"`
	UnprotectAccessLevel *[]any `json:"unprotect_access_level,omitempty"`
}

// ApiEntitiesProtectedBranchLoadMatch is the typed request payload for ApiEntitiesProtectedBranch.LoadTyped.
type ApiEntitiesProtectedBranchLoadMatch struct {
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
}

// ApiEntitiesProtectedBranchListMatch is the typed request payload for ApiEntitiesProtectedBranch.ListTyped.
type ApiEntitiesProtectedBranchListMatch struct {
	ProjectId string `json:"project_id"`
}

// ApiEntitiesProtectedBranchCreateData is the typed request payload for ApiEntitiesProtectedBranch.CreateTyped.
type ApiEntitiesProtectedBranchCreateData struct {
	ProjectId string `json:"project_id"`
}

// ApiEntitiesProtectedBranchUpdateData is the typed request payload for ApiEntitiesProtectedBranch.UpdateTyped.
type ApiEntitiesProtectedBranchUpdateData struct {
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
}

// ApiEntitiesProtectedTag is the typed data model for the api_entities_protected_tag entity.
type ApiEntitiesProtectedTag struct {
	CreateAccessLevel *map[string]any `json:"create_access_level,omitempty"`
	Name *string `json:"name,omitempty"`
}

// ApiEntitiesProtectedTagLoadMatch is the typed request payload for ApiEntitiesProtectedTag.LoadTyped.
type ApiEntitiesProtectedTagLoadMatch struct {
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
}

// ApiEntitiesProtectedTagListMatch is the typed request payload for ApiEntitiesProtectedTag.ListTyped.
type ApiEntitiesProtectedTagListMatch struct {
	ProjectId string `json:"project_id"`
}

// ApiEntitiesProtectedTagCreateData is the typed request payload for ApiEntitiesProtectedTag.CreateTyped.
type ApiEntitiesProtectedTagCreateData struct {
	ProjectId string `json:"project_id"`
}

// ApiEntitiesPublicGroupDetail is the typed data model for the api_entities_public_group_detail entity.
type ApiEntitiesPublicGroupDetail struct {
	AvatarUrl *string `json:"avatar_url,omitempty"`
	FullName *string `json:"full_name,omitempty"`
	FullPath *string `json:"full_path,omitempty"`
	Id *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	WebUrl *string `json:"web_url,omitempty"`
}

// ApiEntitiesPublicGroupDetailListMatch is the typed request payload for ApiEntitiesPublicGroupDetail.ListTyped.
type ApiEntitiesPublicGroupDetailListMatch struct {
	ProjectId string `json:"project_id"`
}

// ApiEntitiesRelatedIssue is the typed data model for the api_entities_related_issue entity.
type ApiEntitiesRelatedIssue struct {
	Assignee *map[string]any `json:"assignee,omitempty"`
	Author *map[string]any `json:"author,omitempty"`
	BlockingIssuesCount *string `json:"blocking_issues_count,omitempty"`
	ClosedAt *string `json:"closed_at,omitempty"`
	ClosedBy *map[string]any `json:"closed_by,omitempty"`
	Confidential *bool `json:"confidential,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	DiscussionLocked *bool `json:"discussion_locked,omitempty"`
	Downvote *string `json:"downvote,omitempty"`
	DueDate *string `json:"due_date,omitempty"`
	Epic *map[string]any `json:"epic,omitempty"`
	EpicIid *string `json:"epic_iid,omitempty"`
	HasTask *bool `json:"has_task,omitempty"`
	HealthStatus *string `json:"health_status,omitempty"`
	Id *int `json:"id,omitempty"`
	Iid *int `json:"iid,omitempty"`
	Imported *string `json:"imported,omitempty"`
	ImportedFrom *string `json:"imported_from,omitempty"`
	IssueLinkId *string `json:"issue_link_id,omitempty"`
	IssueType *string `json:"issue_type,omitempty"`
	Iteration *map[string]any `json:"iteration,omitempty"`
	Label *[]any `json:"label,omitempty"`
	Link *map[string]any `json:"link,omitempty"`
	LinkCreatedAt *string `json:"link_created_at,omitempty"`
	LinkType *string `json:"link_type,omitempty"`
	LinkUpdatedAt *string `json:"link_updated_at,omitempty"`
	MergeRequestsCount *string `json:"merge_requests_count,omitempty"`
	Milestone *map[string]any `json:"milestone,omitempty"`
	MovedToId *string `json:"moved_to_id,omitempty"`
	ProjectId *int `json:"project_id,omitempty"`
	Reference *map[string]any `json:"reference,omitempty"`
	ServiceDeskReplyTo *string `json:"service_desk_reply_to,omitempty"`
	Severity *string `json:"severity,omitempty"`
	State *string `json:"state,omitempty"`
	Subscribed *string `json:"subscribed,omitempty"`
	TaskCompletionStatus *string `json:"task_completion_status,omitempty"`
	TaskStatus *string `json:"task_status,omitempty"`
	TimeStat *map[string]any `json:"time_stat,omitempty"`
	Title *string `json:"title,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Upvote *string `json:"upvote,omitempty"`
	UserNotesCount *string `json:"user_notes_count,omitempty"`
	WebUrl *string `json:"web_url,omitempty"`
	Weight *string `json:"weight,omitempty"`
}

// ApiEntitiesRelatedIssueListMatch is the typed request payload for ApiEntitiesRelatedIssue.ListTyped.
type ApiEntitiesRelatedIssueListMatch struct {
	IssueId string `json:"issue_id"`
	ProjectId string `json:"project_id"`
}

// ApiEntitiesRelationImportTracker is the typed data model for the api_entities_relation_import_tracker entity.
type ApiEntitiesRelationImportTracker struct {
}

// ApiEntitiesRelationImportTrackerCreateData is the typed request payload for ApiEntitiesRelationImportTracker.CreateTyped.
type ApiEntitiesRelationImportTrackerCreateData struct {
}

// ApiEntitiesRelease is the typed data model for the api_entities_release entity.
type ApiEntitiesRelease struct {
	Asset *map[string]any `json:"asset,omitempty"`
	Author *map[string]any `json:"author,omitempty"`
	Commit *map[string]any `json:"commit,omitempty"`
	CommitPath *string `json:"commit_path,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	DescriptionHtml *string `json:"description_html,omitempty"`
	Evidence *map[string]any `json:"evidence,omitempty"`
	Link *map[string]any `json:"link,omitempty"`
	Milestone *map[string]any `json:"milestone,omitempty"`
	Name *string `json:"name,omitempty"`
	ReleasedAt *string `json:"released_at,omitempty"`
	TagName *string `json:"tag_name,omitempty"`
	TagPath *string `json:"tag_path,omitempty"`
	UpcomingRelease *bool `json:"upcoming_release,omitempty"`
}

// ApiEntitiesReleaseLoadMatch is the typed request payload for ApiEntitiesRelease.LoadTyped.
type ApiEntitiesReleaseLoadMatch struct {
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
}

// ApiEntitiesReleaseListMatch is the typed request payload for ApiEntitiesRelease.ListTyped.
type ApiEntitiesReleaseListMatch struct {
	ProjectId *string `json:"project_id,omitempty"`
	GroupId *string `json:"group_id,omitempty"`
}

// ApiEntitiesReleaseCreateData is the typed request payload for ApiEntitiesRelease.CreateTyped.
type ApiEntitiesReleaseCreateData struct {
	ProjectId string `json:"project_id"`
	TagName *any `json:"tag_name,omitempty"`
}

// ApiEntitiesReleaseUpdateData is the typed request payload for ApiEntitiesRelease.UpdateTyped.
type ApiEntitiesReleaseUpdateData struct {
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
}

// ApiEntitiesReleasesLink is the typed data model for the api_entities_releases_link entity.
type ApiEntitiesReleasesLink struct {
	DirectAssetUrl *string `json:"direct_asset_url,omitempty"`
	Id *int `json:"id,omitempty"`
	LinkType *string `json:"link_type,omitempty"`
	Name *string `json:"name,omitempty"`
	Url *string `json:"url,omitempty"`
}

// ApiEntitiesReleasesLinkLoadMatch is the typed request payload for ApiEntitiesReleasesLink.LoadTyped.
type ApiEntitiesReleasesLinkLoadMatch struct {
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
	ReleaseId string `json:"release_id"`
}

// ApiEntitiesReleasesLinkListMatch is the typed request payload for ApiEntitiesReleasesLink.ListTyped.
type ApiEntitiesReleasesLinkListMatch struct {
	ProjectId string `json:"project_id"`
	ReleaseId string `json:"release_id"`
}

// ApiEntitiesReleasesLinkCreateData is the typed request payload for ApiEntitiesReleasesLink.CreateTyped.
type ApiEntitiesReleasesLinkCreateData struct {
	ProjectId string `json:"project_id"`
	ReleaseId string `json:"release_id"`
}

// ApiEntitiesReleasesLinkUpdateData is the typed request payload for ApiEntitiesReleasesLink.UpdateTyped.
type ApiEntitiesReleasesLinkUpdateData struct {
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
	ReleaseId string `json:"release_id"`
}

// ApiEntitiesRemoteMirror is the typed data model for the api_entities_remote_mirror entity.
type ApiEntitiesRemoteMirror struct {
	AuthMethod *string `json:"auth_method,omitempty"`
	Enabled *bool `json:"enabled,omitempty"`
	HostKey *[]any `json:"host_key,omitempty"`
	Id *int `json:"id,omitempty"`
	KeepDivergentRef *bool `json:"keep_divergent_ref,omitempty"`
	LastError *int `json:"last_error,omitempty"`
	LastSuccessfulUpdateAt *string `json:"last_successful_update_at,omitempty"`
	LastUpdateAt *string `json:"last_update_at,omitempty"`
	LastUpdateStartedAt *string `json:"last_update_started_at,omitempty"`
	MirrorBranchRegex *string `json:"mirror_branch_regex,omitempty"`
	OnlyProtectedBranch *bool `json:"only_protected_branch,omitempty"`
	UpdateStatus *string `json:"update_status,omitempty"`
	Url *string `json:"url,omitempty"`
}

// ApiEntitiesRemoteMirrorLoadMatch is the typed request payload for ApiEntitiesRemoteMirror.LoadTyped.
type ApiEntitiesRemoteMirrorLoadMatch struct {
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
}

// ApiEntitiesRemoteMirrorListMatch is the typed request payload for ApiEntitiesRemoteMirror.ListTyped.
type ApiEntitiesRemoteMirrorListMatch struct {
	ProjectId string `json:"project_id"`
}

// ApiEntitiesRemoteMirrorCreateData is the typed request payload for ApiEntitiesRemoteMirror.CreateTyped.
type ApiEntitiesRemoteMirrorCreateData struct {
	ProjectId string `json:"project_id"`
}

// ApiEntitiesRemoteMirrorUpdateData is the typed request payload for ApiEntitiesRemoteMirror.UpdateTyped.
type ApiEntitiesRemoteMirrorUpdateData struct {
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
}

// ApiEntitiesRepositoryHealth is the typed data model for the api_entities_repository_health entity.
type ApiEntitiesRepositoryHealth struct {
	Alternate *map[string]any `json:"alternate,omitempty"`
	Bitmap *map[string]any `json:"bitmap,omitempty"`
	CommitGraph *map[string]any `json:"commit_graph,omitempty"`
	IsObjectPool *bool `json:"is_object_pool,omitempty"`
	LastFullRepack *map[string]any `json:"last_full_repack,omitempty"`
	MultiPackIndex *map[string]any `json:"multi_pack_index,omitempty"`
	MultiPackIndexBitmap *map[string]any `json:"multi_pack_index_bitmap,omitempty"`
	Object *map[string]any `json:"object,omitempty"`
	Reference *map[string]any `json:"reference,omitempty"`
	Size *int `json:"size,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// ApiEntitiesRepositoryHealthLoadMatch is the typed request payload for ApiEntitiesRepositoryHealth.LoadTyped.
type ApiEntitiesRepositoryHealthLoadMatch struct {
	ProjectId string `json:"project_id"`
}

// ApiEntitiesResourceAccessTokenWithToken is the typed data model for the api_entities_resource_access_token_with_token entity.
type ApiEntitiesResourceAccessTokenWithToken struct {
	AccessLevel *int `json:"access_level,omitempty"`
	Active *bool `json:"active,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	ExpiresAt *string `json:"expires_at,omitempty"`
	Id *int `json:"id,omitempty"`
	LastUsedAt *string `json:"last_used_at,omitempty"`
	Name *string `json:"name,omitempty"`
	ResourceId *int `json:"resource_id,omitempty"`
	ResourceType *string `json:"resource_type,omitempty"`
	Revoked *bool `json:"revoked,omitempty"`
	Scope *[]any `json:"scope,omitempty"`
	Token *string `json:"token,omitempty"`
	UserId *int `json:"user_id,omitempty"`
}

// ApiEntitiesResourceAccessTokenWithTokenCreateData is the typed request payload for ApiEntitiesResourceAccessTokenWithToken.CreateTyped.
type ApiEntitiesResourceAccessTokenWithTokenCreateData struct {
	GroupId *string `json:"group_id,omitempty"`
	ProjectId *string `json:"project_id,omitempty"`
}

// ApiEntitiesResourceMilestoneEvent is the typed data model for the api_entities_resource_milestone_event entity.
type ApiEntitiesResourceMilestoneEvent struct {
	Action *string `json:"action,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Id *int `json:"id,omitempty"`
	Milestone *map[string]any `json:"milestone,omitempty"`
	ResourceId *int `json:"resource_id,omitempty"`
	ResourceType *string `json:"resource_type,omitempty"`
	State *string `json:"state,omitempty"`
	User *map[string]any `json:"user,omitempty"`
}

// ApiEntitiesResourceMilestoneEventLoadMatch is the typed request payload for ApiEntitiesResourceMilestoneEvent.LoadTyped.
type ApiEntitiesResourceMilestoneEventLoadMatch struct {
	Id string `json:"id"`
	IssueId *string `json:"issue_id,omitempty"`
	ProjectId string `json:"project_id"`
	MergeRequestId *string `json:"merge_request_id,omitempty"`
}

// ApiEntitiesResourceMilestoneEventListMatch is the typed request payload for ApiEntitiesResourceMilestoneEvent.ListTyped.
type ApiEntitiesResourceMilestoneEventListMatch struct {
	IssueId *string `json:"issue_id,omitempty"`
	ProjectId string `json:"project_id"`
	MergeRequestId *string `json:"merge_request_id,omitempty"`
}

// ApiEntitiesSnippet is the typed data model for the api_entities_snippet entity.
type ApiEntitiesSnippet struct {
	Author *map[string]any `json:"author,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	File *[]any `json:"file,omitempty"`
	FileName *string `json:"file_name,omitempty"`
	HttpUrlToRepo *string `json:"http_url_to_repo,omitempty"`
	Id *int `json:"id,omitempty"`
	Imported *bool `json:"imported,omitempty"`
	ImportedFrom *string `json:"imported_from,omitempty"`
	ProjectId *int `json:"project_id,omitempty"`
	RawUrl *string `json:"raw_url,omitempty"`
	RepositoryStorage *string `json:"repository_storage,omitempty"`
	SshUrlToRepo *string `json:"ssh_url_to_repo,omitempty"`
	Title *string `json:"title,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Visibility *string `json:"visibility,omitempty"`
	WebUrl *string `json:"web_url,omitempty"`
}

// ApiEntitiesSnippetListMatch is the typed request payload for ApiEntitiesSnippet.ListTyped.
type ApiEntitiesSnippetListMatch struct {
	Author *map[string]any `json:"author,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	File *[]any `json:"file,omitempty"`
	FileName *string `json:"file_name,omitempty"`
	HttpUrlToRepo *string `json:"http_url_to_repo,omitempty"`
	Id *int `json:"id,omitempty"`
	Imported *bool `json:"imported,omitempty"`
	ImportedFrom *string `json:"imported_from,omitempty"`
	ProjectId *int `json:"project_id,omitempty"`
	RawUrl *string `json:"raw_url,omitempty"`
	RepositoryStorage *string `json:"repository_storage,omitempty"`
	SshUrlToRepo *string `json:"ssh_url_to_repo,omitempty"`
	Title *string `json:"title,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Visibility *string `json:"visibility,omitempty"`
	WebUrl *string `json:"web_url,omitempty"`
}

// ApiEntitiesSshKeyWithUser is the typed data model for the api_entities_ssh_key_with_user entity.
type ApiEntitiesSshKeyWithUser struct {
	CreatedAt *string `json:"created_at,omitempty"`
	ExpiresAt *string `json:"expires_at,omitempty"`
	Id *int `json:"id,omitempty"`
	Key *string `json:"key,omitempty"`
	LastUsedAt *string `json:"last_used_at,omitempty"`
	Title *string `json:"title,omitempty"`
	UsageType *string `json:"usage_type,omitempty"`
	User *map[string]any `json:"user,omitempty"`
}

// ApiEntitiesSshKeyWithUserLoadMatch is the typed request payload for ApiEntitiesSshKeyWithUser.LoadTyped.
type ApiEntitiesSshKeyWithUserLoadMatch struct {
	Id string `json:"id"`
}

// ApiEntitiesSuggestion is the typed data model for the api_entities_suggestion entity.
type ApiEntitiesSuggestion struct {
	Appliable *string `json:"appliable,omitempty"`
	Applied *string `json:"applied,omitempty"`
	FromContent *string `json:"from_content,omitempty"`
	FromLine *string `json:"from_line,omitempty"`
	Id *string `json:"id,omitempty"`
	ToContent *string `json:"to_content,omitempty"`
	ToLine *string `json:"to_line,omitempty"`
}

// ApiEntitiesSuggestionUpdateData is the typed request payload for ApiEntitiesSuggestion.UpdateTyped.
type ApiEntitiesSuggestionUpdateData struct {
	SuggestionId *string `json:"suggestion_id,omitempty"`
}

// ApiEntitiesSystemBroadcastMessage is the typed data model for the api_entities_system_broadcast_message entity.
type ApiEntitiesSystemBroadcastMessage struct {
	Active *bool `json:"active,omitempty"`
	BroadcastType *string `json:"broadcast_type,omitempty"`
	Color *string `json:"color,omitempty"`
	Dismissable *string `json:"dismissable,omitempty"`
	EndsAt *string `json:"ends_at,omitempty"`
	Font *string `json:"font,omitempty"`
	Id *string `json:"id,omitempty"`
	Message *string `json:"message,omitempty"`
	StartsAt *string `json:"starts_at,omitempty"`
	TargetAccessLevel *string `json:"target_access_level,omitempty"`
	TargetPath *string `json:"target_path,omitempty"`
	Theme *string `json:"theme,omitempty"`
}

// ApiEntitiesSystemBroadcastMessageLoadMatch is the typed request payload for ApiEntitiesSystemBroadcastMessage.LoadTyped.
type ApiEntitiesSystemBroadcastMessageLoadMatch struct {
	Id *string `json:"id,omitempty"`
}

// ApiEntitiesSystemBroadcastMessageCreateData is the typed request payload for ApiEntitiesSystemBroadcastMessage.CreateTyped.
type ApiEntitiesSystemBroadcastMessageCreateData struct {
	Active *bool `json:"active,omitempty"`
	BroadcastType *string `json:"broadcast_type,omitempty"`
	Color *string `json:"color,omitempty"`
	Dismissable *string `json:"dismissable,omitempty"`
	EndsAt *string `json:"ends_at,omitempty"`
	Font *string `json:"font,omitempty"`
	Id *string `json:"id,omitempty"`
	Message *string `json:"message,omitempty"`
	StartsAt *string `json:"starts_at,omitempty"`
	TargetAccessLevel *string `json:"target_access_level,omitempty"`
	TargetPath *string `json:"target_path,omitempty"`
	Theme *string `json:"theme,omitempty"`
}

// ApiEntitiesSystemBroadcastMessageUpdateData is the typed request payload for ApiEntitiesSystemBroadcastMessage.UpdateTyped.
type ApiEntitiesSystemBroadcastMessageUpdateData struct {
	Id string `json:"id"`
}

// ApiEntitiesSystemBroadcastMessageRemoveMatch is the typed request payload for ApiEntitiesSystemBroadcastMessage.RemoveTyped.
type ApiEntitiesSystemBroadcastMessageRemoveMatch struct {
	Id string `json:"id"`
}

// ApiEntitiesTag is the typed data model for the api_entities_tag entity.
type ApiEntitiesTag struct {
	Commit *map[string]any `json:"commit,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Message *string `json:"message,omitempty"`
	Name *string `json:"name,omitempty"`
	Protected *bool `json:"protected,omitempty"`
	Release *map[string]any `json:"release,omitempty"`
	Target *string `json:"target,omitempty"`
}

// ApiEntitiesTagLoadMatch is the typed request payload for ApiEntitiesTag.LoadTyped.
type ApiEntitiesTagLoadMatch struct {
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
}

// ApiEntitiesTagListMatch is the typed request payload for ApiEntitiesTag.ListTyped.
type ApiEntitiesTagListMatch struct {
	ProjectId string `json:"project_id"`
}

// ApiEntitiesTagCreateData is the typed request payload for ApiEntitiesTag.CreateTyped.
type ApiEntitiesTagCreateData struct {
	ProjectId string `json:"project_id"`
}

// ApiEntitiesTagSignature is the typed data model for the api_entities_tag_signature entity.
type ApiEntitiesTagSignature struct {
	Signature *string `json:"signature,omitempty"`
	SignatureType *string `json:"signature_type,omitempty"`
}

// ApiEntitiesTagSignatureLoadMatch is the typed request payload for ApiEntitiesTagSignature.LoadTyped.
type ApiEntitiesTagSignatureLoadMatch struct {
	ProjectId string `json:"project_id"`
	TagName any `json:"tag_name"`
}

// ApiEntitiesTemplatesList is the typed data model for the api_entities_templates_list entity.
type ApiEntitiesTemplatesList struct {
	Key *string `json:"key,omitempty"`
	Name *string `json:"name,omitempty"`
}

// ApiEntitiesTemplatesListLoadMatch is the typed request payload for ApiEntitiesTemplatesList.LoadTyped.
type ApiEntitiesTemplatesListLoadMatch struct {
	ProjectId string `json:"project_id"`
	Type any `json:"type"`
}

// ApiEntitiesTerraformModuleVersion is the typed data model for the api_entities_terraform_module_version entity.
type ApiEntitiesTerraformModuleVersion struct {
	Module *string `json:"module,omitempty"`
	Name *string `json:"name,omitempty"`
	Provider *string `json:"provider,omitempty"`
	Root *string `json:"root,omitempty"`
	Source *string `json:"source,omitempty"`
	Submodule *string `json:"submodule,omitempty"`
	Version *string `json:"version,omitempty"`
}

// ApiEntitiesTerraformModuleVersionLoadMatch is the typed request payload for ApiEntitiesTerraformModuleVersion.LoadTyped.
type ApiEntitiesTerraformModuleVersionLoadMatch struct {
	ModuleName any `json:"module_name"`
	ModuleSystem any `json:"module_system"`
	V1Id *string `json:"v1_id,omitempty"`
	ModuleNamespace *any `json:"module_namespace,omitempty"`
}

// ApiEntitiesTerraformModuleVersionListMatch is the typed request payload for ApiEntitiesTerraformModuleVersion.ListTyped.
type ApiEntitiesTerraformModuleVersionListMatch struct {
	ModuleName any `json:"module_name"`
	ModuleSystem any `json:"module_system"`
	V1Id string `json:"v1_id"`
}

// ApiEntitiesTreeObject is the typed data model for the api_entities_tree_object entity.
type ApiEntitiesTreeObject struct {
	Id *string `json:"id,omitempty"`
	Mode *string `json:"mode,omitempty"`
	Name *string `json:"name,omitempty"`
	Path *string `json:"path,omitempty"`
	Type *string `json:"type,omitempty"`
}

// ApiEntitiesTreeObjectLoadMatch is the typed request payload for ApiEntitiesTreeObject.LoadTyped.
type ApiEntitiesTreeObjectLoadMatch struct {
	ProjectId string `json:"project_id"`
}

// ApiEntitiesTrigger is the typed data model for the api_entities_trigger entity.
type ApiEntitiesTrigger struct {
	CreatedAt *string `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	ExpiresAt *string `json:"expires_at,omitempty"`
	Id *int `json:"id,omitempty"`
	LastUsed *string `json:"last_used,omitempty"`
	Owner *map[string]any `json:"owner,omitempty"`
	Token *string `json:"token,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// ApiEntitiesTriggerLoadMatch is the typed request payload for ApiEntitiesTrigger.LoadTyped.
type ApiEntitiesTriggerLoadMatch struct {
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
}

// ApiEntitiesTriggerListMatch is the typed request payload for ApiEntitiesTrigger.ListTyped.
type ApiEntitiesTriggerListMatch struct {
	ProjectId string `json:"project_id"`
}

// ApiEntitiesTriggerCreateData is the typed request payload for ApiEntitiesTrigger.CreateTyped.
type ApiEntitiesTriggerCreateData struct {
	ProjectId string `json:"project_id"`
}

// ApiEntitiesTriggerUpdateData is the typed request payload for ApiEntitiesTrigger.UpdateTyped.
type ApiEntitiesTriggerUpdateData struct {
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
}

// ApiEntitiesUserAgentDetail is the typed data model for the api_entities_user_agent_detail entity.
type ApiEntitiesUserAgentDetail struct {
	AkismetSubmitted *bool `json:"akismet_submitted,omitempty"`
	IpAddress *string `json:"ip_address,omitempty"`
	UserAgent *string `json:"user_agent,omitempty"`
}

// ApiEntitiesUserAgentDetailLoadMatch is the typed request payload for ApiEntitiesUserAgentDetail.LoadTyped.
type ApiEntitiesUserAgentDetailLoadMatch struct {
	IssueId *string `json:"issue_id,omitempty"`
	ProjectId *string `json:"project_id,omitempty"`
	SnippetId *string `json:"snippet_id,omitempty"`
}

// ApiEntitiesUserCount is the typed data model for the api_entities_user_count entity.
type ApiEntitiesUserCount struct {
	AssignedIssue *int `json:"assigned_issue,omitempty"`
	AssignedMergeRequest *int `json:"assigned_merge_request,omitempty"`
	MergeRequest *int `json:"merge_request,omitempty"`
	ReviewRequestedMergeRequest *int `json:"review_requested_merge_request,omitempty"`
	Todo *int `json:"todo,omitempty"`
}

// ApiEntitiesUserCountLoadMatch is the typed request payload for ApiEntitiesUserCount.LoadTyped.
type ApiEntitiesUserCountLoadMatch struct {
	AssignedIssue *int `json:"assigned_issue,omitempty"`
	AssignedMergeRequest *int `json:"assigned_merge_request,omitempty"`
	MergeRequest *int `json:"merge_request,omitempty"`
	ReviewRequestedMergeRequest *int `json:"review_requested_merge_request,omitempty"`
	Todo *int `json:"todo,omitempty"`
}

// ApiEntitiesUserPublic is the typed data model for the api_entities_user_public entity.
type ApiEntitiesUserPublic struct {
	AvatarPath *string `json:"avatar_path,omitempty"`
	AvatarUrl *string `json:"avatar_url,omitempty"`
	Bio *string `json:"bio,omitempty"`
	Bot *string `json:"bot,omitempty"`
	CanCreateGroup *bool `json:"can_create_group,omitempty"`
	CanCreateProject *bool `json:"can_create_project,omitempty"`
	ColorSchemeId *int `json:"color_scheme_id,omitempty"`
	CommitEmail *string `json:"commit_email,omitempty"`
	ConfirmedAt *string `json:"confirmed_at,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	CurrentSignInAt *string `json:"current_sign_in_at,omitempty"`
	CustomAttribute *[]any `json:"custom_attribute,omitempty"`
	Discord *string `json:"discord,omitempty"`
	Email *string `json:"email,omitempty"`
	External *string `json:"external,omitempty"`
	ExtraSharedRunnersMinutesLimit *string `json:"extra_shared_runners_minutes_limit,omitempty"`
	Follower *string `json:"follower,omitempty"`
	Following *string `json:"following,omitempty"`
	Github *string `json:"github,omitempty"`
	Id *int `json:"id,omitempty"`
	Identity *map[string]any `json:"identity,omitempty"`
	IsFollowed *bool `json:"is_followed,omitempty"`
	JobTitle *string `json:"job_title,omitempty"`
	Key *string `json:"key,omitempty"`
	LastActivityOn *string `json:"last_activity_on,omitempty"`
	LastSignInAt *string `json:"last_sign_in_at,omitempty"`
	Linkedin *string `json:"linkedin,omitempty"`
	LocalTime *string `json:"local_time,omitempty"`
	Location *string `json:"location,omitempty"`
	Locked *bool `json:"locked,omitempty"`
	Name *string `json:"name,omitempty"`
	Organization *string `json:"organization,omitempty"`
	PreferredLanguage *string `json:"preferred_language,omitempty"`
	PrivateProfile *bool `json:"private_profile,omitempty"`
	ProjectsLimit *int `json:"projects_limit,omitempty"`
	Pronoun *string `json:"pronoun,omitempty"`
	PublicEmail *string `json:"public_email,omitempty"`
	ScimIdentity *map[string]any `json:"scim_identity,omitempty"`
	SharedRunnersMinutesLimit *string `json:"shared_runners_minutes_limit,omitempty"`
	State *string `json:"state,omitempty"`
	ThemeId *int `json:"theme_id,omitempty"`
	Twitter *string `json:"twitter,omitempty"`
	TwoFactorEnabled *bool `json:"two_factor_enabled,omitempty"`
	Username *string `json:"username,omitempty"`
	Value *string `json:"value,omitempty"`
	WebUrl *string `json:"web_url,omitempty"`
	WebsiteUrl *string `json:"website_url,omitempty"`
	WorkInformation *string `json:"work_information,omitempty"`
}

// ApiEntitiesUserPublicListMatch is the typed request payload for ApiEntitiesUserPublic.ListTyped.
type ApiEntitiesUserPublicListMatch struct {
	GroupId string `json:"group_id"`
}

// ApiEntitiesUserWithAdmin is the typed data model for the api_entities_user_with_admin entity.
type ApiEntitiesUserWithAdmin struct {
	Key *string `json:"key,omitempty"`
	Value *string `json:"value,omitempty"`
}

// ApiEntitiesUserWithAdminListMatch is the typed request payload for ApiEntitiesUserWithAdmin.ListTyped.
type ApiEntitiesUserWithAdminListMatch struct {
	Key *string `json:"key,omitempty"`
	Value *string `json:"value,omitempty"`
}

// ApiEntitiesWikiAttachment is the typed data model for the api_entities_wiki_attachment entity.
type ApiEntitiesWikiAttachment struct {
}

// ApiEntitiesWikiAttachmentCreateData is the typed request payload for ApiEntitiesWikiAttachment.CreateTyped.
type ApiEntitiesWikiAttachmentCreateData struct {
	GroupId *string `json:"group_id,omitempty"`
	ProjectId *string `json:"project_id,omitempty"`
}

// ApiEntitiesWikiPage is the typed data model for the api_entities_wiki_page entity.
type ApiEntitiesWikiPage struct {
	Content *string `json:"content,omitempty"`
	Encoding *string `json:"encoding,omitempty"`
	Format *string `json:"format,omitempty"`
	FrontMatter *map[string]any `json:"front_matter,omitempty"`
	Slug *string `json:"slug,omitempty"`
	Title *string `json:"title,omitempty"`
	WikiPageMetaId *int `json:"wiki_page_meta_id,omitempty"`
}

// ApiEntitiesWikiPageLoadMatch is the typed request payload for ApiEntitiesWikiPage.LoadTyped.
type ApiEntitiesWikiPageLoadMatch struct {
	GroupId *string `json:"group_id,omitempty"`
	Slug string `json:"slug"`
	ProjectId *string `json:"project_id,omitempty"`
}

// ApiEntitiesWikiPageCreateData is the typed request payload for ApiEntitiesWikiPage.CreateTyped.
type ApiEntitiesWikiPageCreateData struct {
	GroupId *string `json:"group_id,omitempty"`
	ProjectId *string `json:"project_id,omitempty"`
}

// ApiEntitiesWikiPageUpdateData is the typed request payload for ApiEntitiesWikiPage.UpdateTyped.
type ApiEntitiesWikiPageUpdateData struct {
	GroupId *string `json:"group_id,omitempty"`
	Slug string `json:"slug"`
	ProjectId *string `json:"project_id,omitempty"`
}

// ApiEntitiesWikiPageBasic is the typed data model for the api_entities_wiki_page_basic entity.
type ApiEntitiesWikiPageBasic struct {
	Format *string `json:"format,omitempty"`
	Slug *string `json:"slug,omitempty"`
	Title *string `json:"title,omitempty"`
	WikiPageMetaId *int `json:"wiki_page_meta_id,omitempty"`
}

// ApiEntitiesWikiPageBasicListMatch is the typed request payload for ApiEntitiesWikiPageBasic.ListTyped.
type ApiEntitiesWikiPageBasicListMatch struct {
	GroupId *string `json:"group_id,omitempty"`
	ProjectId *string `json:"project_id,omitempty"`
}

// Application is the typed data model for the application entity.
type Application struct {
}

// ApplicationRemoveMatch is the typed request payload for Application.RemoveTyped.
type ApplicationRemoveMatch struct {
	Id string `json:"id"`
}

// AwardEmoji is the typed data model for the award_emoji entity.
type AwardEmoji struct {
}

// AwardEmojiRemoveMatch is the typed request payload for AwardEmoji.RemoveTyped.
type AwardEmojiRemoveMatch struct {
	EpicId *string `json:"epic_id,omitempty"`
	GroupId *string `json:"group_id,omitempty"`
	Id string `json:"id"`
	NoteId *string `json:"note_id,omitempty"`
	IssueId *string `json:"issue_id,omitempty"`
	ProjectId *string `json:"project_id,omitempty"`
	MergeRequestId *string `json:"merge_request_id,omitempty"`
	SnippetId *string `json:"snippet_id,omitempty"`
}

// Badge is the typed data model for the badge entity.
type Badge struct {
}

// BadgeRemoveMatch is the typed request payload for Badge.RemoveTyped.
type BadgeRemoveMatch struct {
	GroupId *string `json:"group_id,omitempty"`
	Id string `json:"id"`
	ProjectId *string `json:"project_id,omitempty"`
}

// Branch is the typed data model for the branch entity.
type Branch struct {
}

// BranchRemoveMatch is the typed request payload for Branch.RemoveTyped.
type BranchRemoveMatch struct {
	Id *string `json:"id,omitempty"`
	ProjectId string `json:"project_id"`
}

// CargoPackage is the typed data model for the cargo_package entity.
type CargoPackage struct {
}

// CargoPackageLoadMatch is the typed request payload for CargoPackage.LoadTyped.
type CargoPackageLoadMatch struct {
	ProjectId string `json:"project_id"`
}

// CiVariable is the typed data model for the ci_variable entity.
type CiVariable struct {
}

// CiVariableRemoveMatch is the typed request payload for CiVariable.RemoveTyped.
type CiVariableRemoveMatch struct {
	Id string `json:"id"`
	ProjectId *string `json:"project_id,omitempty"`
	GroupId *string `json:"group_id,omitempty"`
}

// Cluster is the typed data model for the cluster entity.
type Cluster struct {
}

// ClusterRemoveMatch is the typed request payload for Cluster.RemoveTyped.
type ClusterRemoveMatch struct {
	GroupId *string `json:"group_id,omitempty"`
	Id string `json:"id"`
	ProjectId *string `json:"project_id,omitempty"`
}

// ClusterAgent is the typed data model for the cluster_agent entity.
type ClusterAgent struct {
}

// ClusterAgentRemoveMatch is the typed request payload for ClusterAgent.RemoveTyped.
type ClusterAgentRemoveMatch struct {
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
	TokenId *string `json:"token_id,omitempty"`
}

// Composer is the typed data model for the composer entity.
type Composer struct {
}

// ComposerCreateData is the typed request payload for Composer.CreateTyped.
type ComposerCreateData struct {
	ProjectId string `json:"project_id"`
}

// ComposerPackage is the typed data model for the composer_package entity.
type ComposerPackage struct {
}

// ComposerPackageLoadMatch is the typed request payload for ComposerPackage.LoadTyped.
type ComposerPackageLoadMatch struct {
	ProjectId *string `json:"project_id,omitempty"`
	GroupId *string `json:"group_id,omitempty"`
	Sha *any `json:"sha,omitempty"`
}

// Conan is the typed data model for the conan entity.
type Conan struct {
}

// ConanRemoveMatch is the typed request payload for Conan.RemoveTyped.
type ConanRemoveMatch struct {
	Id *string `json:"id,omitempty"`
	PackageChannel any `json:"package_channel"`
	PackageName any `json:"package_name"`
	PackageUsername any `json:"package_username"`
	PackageVersion any `json:"package_version"`
}

// ConanPackage is the typed data model for the conan_package entity.
type ConanPackage struct {
}

// ConanPackageLoadMatch is the typed request payload for ConanPackage.LoadTyped.
type ConanPackageLoadMatch struct {
	ConanPackageReference *any `json:"conan_package_reference,omitempty"`
	FileName *any `json:"file_name,omitempty"`
	Id *string `json:"id,omitempty"`
	PackageChannel *any `json:"package_channel,omitempty"`
	PackageName *any `json:"package_name,omitempty"`
	PackageRevision *any `json:"package_revision,omitempty"`
	PackageUsername *any `json:"package_username,omitempty"`
	PackageVersion *any `json:"package_version,omitempty"`
	RecipeRevision *any `json:"recipe_revision,omitempty"`
	ConanId *string `json:"conan_id,omitempty"`
	PackageId *string `json:"package_id,omitempty"`
	ProjectId *string `json:"project_id,omitempty"`
	RevisionId *string `json:"revision_id,omitempty"`
	FileId *string `json:"file_id,omitempty"`
}

// ConanPackageUpdateData is the typed request payload for ConanPackage.UpdateTyped.
type ConanPackageUpdateData struct {
	ConanPackageReference *any `json:"conan_package_reference,omitempty"`
	FileName any `json:"file_name"`
	Id *string `json:"id,omitempty"`
	PackageChannel any `json:"package_channel"`
	PackageName *any `json:"package_name,omitempty"`
	PackageRevision *any `json:"package_revision,omitempty"`
	PackageUsername any `json:"package_username"`
	PackageVersion any `json:"package_version"`
	RecipeRevision *any `json:"recipe_revision,omitempty"`
	ConanId *string `json:"conan_id,omitempty"`
	PackageId *string `json:"package_id,omitempty"`
	ProjectId *string `json:"project_id,omitempty"`
	RevisionId *string `json:"revision_id,omitempty"`
	FileId *string `json:"file_id,omitempty"`
}

// ConanPackageRemoveMatch is the typed request payload for ConanPackage.RemoveTyped.
type ConanPackageRemoveMatch struct {
	ConanId string `json:"conan_id"`
	PackageChannel any `json:"package_channel"`
	PackageId *string `json:"package_id,omitempty"`
	PackageRevision *any `json:"package_revision,omitempty"`
	PackageUsername any `json:"package_username"`
	PackageVersion any `json:"package_version"`
	ProjectId string `json:"project_id"`
	RevisionId *string `json:"revision_id,omitempty"`
	RecipeRevision *any `json:"recipe_revision,omitempty"`
}

// ContainerRegistry is the typed data model for the container_registry entity.
type ContainerRegistry struct {
}

// ContainerRegistryRemoveMatch is the typed request payload for ContainerRegistry.RemoveTyped.
type ContainerRegistryRemoveMatch struct {
	ProjectId string `json:"project_id"`
	RepositoryId string `json:"repository_id"`
	TagName *any `json:"tag_name,omitempty"`
}

// ContainerRegistryEvent is the typed data model for the container_registry_event entity.
type ContainerRegistryEvent struct {
}

// ContainerRegistryEventCreateData is the typed request payload for ContainerRegistryEvent.CreateTyped.
type ContainerRegistryEventCreateData struct {
}

// CustomAttribute is the typed data model for the custom_attribute entity.
type CustomAttribute struct {
	Key *string `json:"key,omitempty"`
	Value *string `json:"value,omitempty"`
}

// CustomAttributeLoadMatch is the typed request payload for CustomAttribute.LoadTyped.
type CustomAttributeLoadMatch struct {
	GroupId *string `json:"group_id,omitempty"`
	Id *string `json:"id,omitempty"`
	ProjectId *string `json:"project_id,omitempty"`
}

// Debian is the typed data model for the debian entity.
type Debian struct {
}

// DebianUpdateData is the typed request payload for Debian.UpdateTyped.
type DebianUpdateData struct {
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
}

// DebianDistribution is the typed data model for the debian_distribution entity.
type DebianDistribution struct {
}

// DebianDistributionRemoveMatch is the typed request payload for DebianDistribution.RemoveTyped.
type DebianDistributionRemoveMatch struct {
	GroupId *string `json:"group_id,omitempty"`
	Id string `json:"id"`
	ProjectId *string `json:"project_id,omitempty"`
}

// DebianPackage is the typed data model for the debian_package entity.
type DebianPackage struct {
}

// DebianPackageLoadMatch is the typed request payload for DebianPackage.LoadTyped.
type DebianPackageLoadMatch struct {
	Distribution *any `json:"distribution,omitempty"`
	FileName *any `json:"file_name,omitempty"`
	Id *string `json:"id,omitempty"`
	Letter *any `json:"letter,omitempty"`
	PackageName *any `json:"package_name,omitempty"`
	PackageVersion *any `json:"package_version,omitempty"`
	ProjectId *string `json:"project_id,omitempty"`
	Architecture *any `json:"architecture,omitempty"`
	DistributionId *string `json:"distribution_id,omitempty"`
	FileSha256 *any `json:"file_sha256,omitempty"`
	GroupId *string `json:"group_id,omitempty"`
}

// DebianPackageUpdateData is the typed request payload for DebianPackage.UpdateTyped.
type DebianPackageUpdateData struct {
	FileName any `json:"file_name"`
	ProjectId string `json:"project_id"`
}

// DependencyProxy is the typed data model for the dependency_proxy entity.
type DependencyProxy struct {
}

// DependencyProxyRemoveMatch is the typed request payload for DependencyProxy.RemoveTyped.
type DependencyProxyRemoveMatch struct {
	GroupId string `json:"group_id"`
}

// DeployKey is the typed data model for the deploy_key entity.
type DeployKey struct {
}

// DeployKeyRemoveMatch is the typed request payload for DeployKey.RemoveTyped.
type DeployKeyRemoveMatch struct {
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
}

// DeployToken is the typed data model for the deploy_token entity.
type DeployToken struct {
}

// DeployTokenRemoveMatch is the typed request payload for DeployToken.RemoveTyped.
type DeployTokenRemoveMatch struct {
	GroupId *string `json:"group_id,omitempty"`
	Id string `json:"id"`
	ProjectId *string `json:"project_id,omitempty"`
}

// Deployment is the typed data model for the deployment entity.
type Deployment struct {
}

// DeploymentRemoveMatch is the typed request payload for Deployment.RemoveTyped.
type DeploymentRemoveMatch struct {
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
}

// EeApiEntitiesApprovalState is the typed data model for the ee_api_entities_approval_state entity.
type EeApiEntitiesApprovalState struct {
}

// EeApiEntitiesApprovalStateCreateData is the typed request payload for EeApiEntitiesApprovalState.CreateTyped.
type EeApiEntitiesApprovalStateCreateData struct {
	MergeRequestId string `json:"merge_request_id"`
	ProjectId string `json:"project_id"`
}

// EeApiEntitiesAuditEvent is the typed data model for the ee_api_entities_audit_event entity.
type EeApiEntitiesAuditEvent struct {
	AuthorId *string `json:"author_id,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Detail *string `json:"detail,omitempty"`
	EntityId *string `json:"entity_id,omitempty"`
	EntityType *string `json:"entity_type,omitempty"`
	EventName *string `json:"event_name,omitempty"`
	Id *string `json:"id,omitempty"`
}

// EeApiEntitiesAuditEventLoadMatch is the typed request payload for EeApiEntitiesAuditEvent.LoadTyped.
type EeApiEntitiesAuditEventLoadMatch struct {
	GroupId *string `json:"group_id,omitempty"`
	Id string `json:"id"`
	ProjectId *string `json:"project_id,omitempty"`
}

// EeApiEntitiesAuditEventListMatch is the typed request payload for EeApiEntitiesAuditEvent.ListTyped.
type EeApiEntitiesAuditEventListMatch struct {
	GroupId *string `json:"group_id,omitempty"`
	ProjectId *string `json:"project_id,omitempty"`
}

// EeApiEntitiesBillableMembership is the typed data model for the ee_api_entities_billable_membership entity.
type EeApiEntitiesBillableMembership struct {
	AccessLevel *map[string]any `json:"access_level,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	ExpiresAt *string `json:"expires_at,omitempty"`
	Id *string `json:"id,omitempty"`
	SourceFullName *string `json:"source_full_name,omitempty"`
	SourceId *string `json:"source_id,omitempty"`
	SourceMembersUrl *string `json:"source_members_url,omitempty"`
}

// EeApiEntitiesBillableMembershipLoadMatch is the typed request payload for EeApiEntitiesBillableMembership.LoadTyped.
type EeApiEntitiesBillableMembershipLoadMatch struct {
	BillableMemberId string `json:"billable_member_id"`
	GroupId string `json:"group_id"`
}

// EeApiEntitiesGeoNodeStatus is the typed data model for the ee_api_entities_geo_node_status entity.
type EeApiEntitiesGeoNodeStatus struct {
	CiSecureFilesChecksumFailedCount *string `json:"ci_secure_files_checksum_failed_count,omitempty"`
	CiSecureFilesChecksumTotalCount *string `json:"ci_secure_files_checksum_total_count,omitempty"`
	CiSecureFilesChecksummedCount *string `json:"ci_secure_files_checksummed_count,omitempty"`
	CiSecureFilesCount *string `json:"ci_secure_files_count,omitempty"`
	CiSecureFilesFailedCount *string `json:"ci_secure_files_failed_count,omitempty"`
	CiSecureFilesRegistryCount *string `json:"ci_secure_files_registry_count,omitempty"`
	CiSecureFilesSyncedCount *string `json:"ci_secure_files_synced_count,omitempty"`
	CiSecureFilesSyncedInPercentage *string `json:"ci_secure_files_synced_in_percentage,omitempty"`
	CiSecureFilesVerificationFailedCount *string `json:"ci_secure_files_verification_failed_count,omitempty"`
	CiSecureFilesVerificationTotalCount *string `json:"ci_secure_files_verification_total_count,omitempty"`
	CiSecureFilesVerifiedCount *string `json:"ci_secure_files_verified_count,omitempty"`
	CiSecureFilesVerifiedInPercentage *string `json:"ci_secure_files_verified_in_percentage,omitempty"`
	ContainerRepositoriesChecksumFailedCount *string `json:"container_repositories_checksum_failed_count,omitempty"`
	ContainerRepositoriesChecksumTotalCount *string `json:"container_repositories_checksum_total_count,omitempty"`
	ContainerRepositoriesChecksummedCount *string `json:"container_repositories_checksummed_count,omitempty"`
	ContainerRepositoriesCount *string `json:"container_repositories_count,omitempty"`
	ContainerRepositoriesFailedCount *string `json:"container_repositories_failed_count,omitempty"`
	ContainerRepositoriesRegistryCount *string `json:"container_repositories_registry_count,omitempty"`
	ContainerRepositoriesReplicationEnabled *string `json:"container_repositories_replication_enabled,omitempty"`
	ContainerRepositoriesSyncedCount *string `json:"container_repositories_synced_count,omitempty"`
	ContainerRepositoriesSyncedInPercentage *string `json:"container_repositories_synced_in_percentage,omitempty"`
	ContainerRepositoriesVerificationFailedCount *string `json:"container_repositories_verification_failed_count,omitempty"`
	ContainerRepositoriesVerificationTotalCount *string `json:"container_repositories_verification_total_count,omitempty"`
	ContainerRepositoriesVerifiedCount *string `json:"container_repositories_verified_count,omitempty"`
	ContainerRepositoriesVerifiedInPercentage *string `json:"container_repositories_verified_in_percentage,omitempty"`
	CursorLastEventId *string `json:"cursor_last_event_id,omitempty"`
	CursorLastEventTimestamp *string `json:"cursor_last_event_timestamp,omitempty"`
	DbReplicationLagSecond *string `json:"db_replication_lag_second,omitempty"`
	DependencyProxyBlobsChecksumFailedCount *string `json:"dependency_proxy_blobs_checksum_failed_count,omitempty"`
	DependencyProxyBlobsChecksumTotalCount *string `json:"dependency_proxy_blobs_checksum_total_count,omitempty"`
	DependencyProxyBlobsChecksummedCount *string `json:"dependency_proxy_blobs_checksummed_count,omitempty"`
	DependencyProxyBlobsCount *string `json:"dependency_proxy_blobs_count,omitempty"`
	DependencyProxyBlobsFailedCount *string `json:"dependency_proxy_blobs_failed_count,omitempty"`
	DependencyProxyBlobsRegistryCount *string `json:"dependency_proxy_blobs_registry_count,omitempty"`
	DependencyProxyBlobsSyncedCount *string `json:"dependency_proxy_blobs_synced_count,omitempty"`
	DependencyProxyBlobsSyncedInPercentage *string `json:"dependency_proxy_blobs_synced_in_percentage,omitempty"`
	DependencyProxyBlobsVerificationFailedCount *string `json:"dependency_proxy_blobs_verification_failed_count,omitempty"`
	DependencyProxyBlobsVerificationTotalCount *string `json:"dependency_proxy_blobs_verification_total_count,omitempty"`
	DependencyProxyBlobsVerifiedCount *string `json:"dependency_proxy_blobs_verified_count,omitempty"`
	DependencyProxyBlobsVerifiedInPercentage *string `json:"dependency_proxy_blobs_verified_in_percentage,omitempty"`
	DependencyProxyManifestsChecksumFailedCount *string `json:"dependency_proxy_manifests_checksum_failed_count,omitempty"`
	DependencyProxyManifestsChecksumTotalCount *string `json:"dependency_proxy_manifests_checksum_total_count,omitempty"`
	DependencyProxyManifestsChecksummedCount *string `json:"dependency_proxy_manifests_checksummed_count,omitempty"`
	DependencyProxyManifestsCount *string `json:"dependency_proxy_manifests_count,omitempty"`
	DependencyProxyManifestsFailedCount *string `json:"dependency_proxy_manifests_failed_count,omitempty"`
	DependencyProxyManifestsRegistryCount *string `json:"dependency_proxy_manifests_registry_count,omitempty"`
	DependencyProxyManifestsSyncedCount *string `json:"dependency_proxy_manifests_synced_count,omitempty"`
	DependencyProxyManifestsSyncedInPercentage *string `json:"dependency_proxy_manifests_synced_in_percentage,omitempty"`
	DependencyProxyManifestsVerificationFailedCount *string `json:"dependency_proxy_manifests_verification_failed_count,omitempty"`
	DependencyProxyManifestsVerificationTotalCount *string `json:"dependency_proxy_manifests_verification_total_count,omitempty"`
	DependencyProxyManifestsVerifiedCount *string `json:"dependency_proxy_manifests_verified_count,omitempty"`
	DependencyProxyManifestsVerifiedInPercentage *string `json:"dependency_proxy_manifests_verified_in_percentage,omitempty"`
	DesignManagementRepositoriesChecksumFailedCount *string `json:"design_management_repositories_checksum_failed_count,omitempty"`
	DesignManagementRepositoriesChecksumTotalCount *string `json:"design_management_repositories_checksum_total_count,omitempty"`
	DesignManagementRepositoriesChecksummedCount *string `json:"design_management_repositories_checksummed_count,omitempty"`
	DesignManagementRepositoriesCount *string `json:"design_management_repositories_count,omitempty"`
	DesignManagementRepositoriesFailedCount *string `json:"design_management_repositories_failed_count,omitempty"`
	DesignManagementRepositoriesRegistryCount *string `json:"design_management_repositories_registry_count,omitempty"`
	DesignManagementRepositoriesSyncedCount *string `json:"design_management_repositories_synced_count,omitempty"`
	DesignManagementRepositoriesSyncedInPercentage *string `json:"design_management_repositories_synced_in_percentage,omitempty"`
	DesignManagementRepositoriesVerificationFailedCount *string `json:"design_management_repositories_verification_failed_count,omitempty"`
	DesignManagementRepositoriesVerificationTotalCount *string `json:"design_management_repositories_verification_total_count,omitempty"`
	DesignManagementRepositoriesVerifiedCount *string `json:"design_management_repositories_verified_count,omitempty"`
	DesignManagementRepositoriesVerifiedInPercentage *string `json:"design_management_repositories_verified_in_percentage,omitempty"`
	GeoNodeId *string `json:"geo_node_id,omitempty"`
	GitFetchEventCountWeekly *string `json:"git_fetch_event_count_weekly,omitempty"`
	GitPushEventCountWeekly *string `json:"git_push_event_count_weekly,omitempty"`
	GroupWikiRepositoriesChecksumFailedCount *string `json:"group_wiki_repositories_checksum_failed_count,omitempty"`
	GroupWikiRepositoriesChecksumTotalCount *string `json:"group_wiki_repositories_checksum_total_count,omitempty"`
	GroupWikiRepositoriesChecksummedCount *string `json:"group_wiki_repositories_checksummed_count,omitempty"`
	GroupWikiRepositoriesCount *string `json:"group_wiki_repositories_count,omitempty"`
	GroupWikiRepositoriesFailedCount *string `json:"group_wiki_repositories_failed_count,omitempty"`
	GroupWikiRepositoriesRegistryCount *string `json:"group_wiki_repositories_registry_count,omitempty"`
	GroupWikiRepositoriesSyncedCount *string `json:"group_wiki_repositories_synced_count,omitempty"`
	GroupWikiRepositoriesSyncedInPercentage *string `json:"group_wiki_repositories_synced_in_percentage,omitempty"`
	GroupWikiRepositoriesVerificationFailedCount *string `json:"group_wiki_repositories_verification_failed_count,omitempty"`
	GroupWikiRepositoriesVerificationTotalCount *string `json:"group_wiki_repositories_verification_total_count,omitempty"`
	GroupWikiRepositoriesVerifiedCount *string `json:"group_wiki_repositories_verified_count,omitempty"`
	GroupWikiRepositoriesVerifiedInPercentage *string `json:"group_wiki_repositories_verified_in_percentage,omitempty"`
	Health *string `json:"health,omitempty"`
	HealthStatus *string `json:"health_status,omitempty"`
	Healthy *string `json:"healthy,omitempty"`
	JobArtifactsChecksumFailedCount *string `json:"job_artifacts_checksum_failed_count,omitempty"`
	JobArtifactsChecksumTotalCount *string `json:"job_artifacts_checksum_total_count,omitempty"`
	JobArtifactsChecksummedCount *string `json:"job_artifacts_checksummed_count,omitempty"`
	JobArtifactsCount *string `json:"job_artifacts_count,omitempty"`
	JobArtifactsFailedCount *string `json:"job_artifacts_failed_count,omitempty"`
	JobArtifactsRegistryCount *string `json:"job_artifacts_registry_count,omitempty"`
	JobArtifactsSyncedCount *string `json:"job_artifacts_synced_count,omitempty"`
	JobArtifactsSyncedInPercentage *string `json:"job_artifacts_synced_in_percentage,omitempty"`
	JobArtifactsVerificationFailedCount *string `json:"job_artifacts_verification_failed_count,omitempty"`
	JobArtifactsVerificationTotalCount *string `json:"job_artifacts_verification_total_count,omitempty"`
	JobArtifactsVerifiedCount *string `json:"job_artifacts_verified_count,omitempty"`
	JobArtifactsVerifiedInPercentage *string `json:"job_artifacts_verified_in_percentage,omitempty"`
	LastEventId *string `json:"last_event_id,omitempty"`
	LastEventTimestamp *string `json:"last_event_timestamp,omitempty"`
	LastSuccessfulStatusCheckTimestamp *string `json:"last_successful_status_check_timestamp,omitempty"`
	LfsObjectsChecksumFailedCount *string `json:"lfs_objects_checksum_failed_count,omitempty"`
	LfsObjectsChecksumTotalCount *string `json:"lfs_objects_checksum_total_count,omitempty"`
	LfsObjectsChecksummedCount *string `json:"lfs_objects_checksummed_count,omitempty"`
	LfsObjectsCount *string `json:"lfs_objects_count,omitempty"`
	LfsObjectsFailedCount *string `json:"lfs_objects_failed_count,omitempty"`
	LfsObjectsRegistryCount *string `json:"lfs_objects_registry_count,omitempty"`
	LfsObjectsSyncedCount *string `json:"lfs_objects_synced_count,omitempty"`
	LfsObjectsSyncedInPercentage *string `json:"lfs_objects_synced_in_percentage,omitempty"`
	LfsObjectsVerificationFailedCount *string `json:"lfs_objects_verification_failed_count,omitempty"`
	LfsObjectsVerificationTotalCount *string `json:"lfs_objects_verification_total_count,omitempty"`
	LfsObjectsVerifiedCount *string `json:"lfs_objects_verified_count,omitempty"`
	LfsObjectsVerifiedInPercentage *string `json:"lfs_objects_verified_in_percentage,omitempty"`
	Link *map[string]any `json:"link,omitempty"`
	MergeRequestDiffsChecksumFailedCount *string `json:"merge_request_diffs_checksum_failed_count,omitempty"`
	MergeRequestDiffsChecksumTotalCount *string `json:"merge_request_diffs_checksum_total_count,omitempty"`
	MergeRequestDiffsChecksummedCount *string `json:"merge_request_diffs_checksummed_count,omitempty"`
	MergeRequestDiffsCount *string `json:"merge_request_diffs_count,omitempty"`
	MergeRequestDiffsFailedCount *string `json:"merge_request_diffs_failed_count,omitempty"`
	MergeRequestDiffsRegistryCount *string `json:"merge_request_diffs_registry_count,omitempty"`
	MergeRequestDiffsSyncedCount *string `json:"merge_request_diffs_synced_count,omitempty"`
	MergeRequestDiffsSyncedInPercentage *string `json:"merge_request_diffs_synced_in_percentage,omitempty"`
	MergeRequestDiffsVerificationFailedCount *string `json:"merge_request_diffs_verification_failed_count,omitempty"`
	MergeRequestDiffsVerificationTotalCount *string `json:"merge_request_diffs_verification_total_count,omitempty"`
	MergeRequestDiffsVerifiedCount *string `json:"merge_request_diffs_verified_count,omitempty"`
	MergeRequestDiffsVerifiedInPercentage *string `json:"merge_request_diffs_verified_in_percentage,omitempty"`
	MissingOauthApplication *string `json:"missing_oauth_application,omitempty"`
	Namespace *map[string]any `json:"namespace,omitempty"`
	PackageFilesChecksumFailedCount *string `json:"package_files_checksum_failed_count,omitempty"`
	PackageFilesChecksumTotalCount *string `json:"package_files_checksum_total_count,omitempty"`
	PackageFilesChecksummedCount *string `json:"package_files_checksummed_count,omitempty"`
	PackageFilesCount *string `json:"package_files_count,omitempty"`
	PackageFilesFailedCount *string `json:"package_files_failed_count,omitempty"`
	PackageFilesRegistryCount *string `json:"package_files_registry_count,omitempty"`
	PackageFilesSyncedCount *string `json:"package_files_synced_count,omitempty"`
	PackageFilesSyncedInPercentage *string `json:"package_files_synced_in_percentage,omitempty"`
	PackageFilesVerificationFailedCount *string `json:"package_files_verification_failed_count,omitempty"`
	PackageFilesVerificationTotalCount *string `json:"package_files_verification_total_count,omitempty"`
	PackageFilesVerifiedCount *string `json:"package_files_verified_count,omitempty"`
	PackageFilesVerifiedInPercentage *string `json:"package_files_verified_in_percentage,omitempty"`
	PagesDeploymentsChecksumFailedCount *string `json:"pages_deployments_checksum_failed_count,omitempty"`
	PagesDeploymentsChecksumTotalCount *string `json:"pages_deployments_checksum_total_count,omitempty"`
	PagesDeploymentsChecksummedCount *string `json:"pages_deployments_checksummed_count,omitempty"`
	PagesDeploymentsCount *string `json:"pages_deployments_count,omitempty"`
	PagesDeploymentsFailedCount *string `json:"pages_deployments_failed_count,omitempty"`
	PagesDeploymentsRegistryCount *string `json:"pages_deployments_registry_count,omitempty"`
	PagesDeploymentsSyncedCount *string `json:"pages_deployments_synced_count,omitempty"`
	PagesDeploymentsSyncedInPercentage *string `json:"pages_deployments_synced_in_percentage,omitempty"`
	PagesDeploymentsVerificationFailedCount *string `json:"pages_deployments_verification_failed_count,omitempty"`
	PagesDeploymentsVerificationTotalCount *string `json:"pages_deployments_verification_total_count,omitempty"`
	PagesDeploymentsVerifiedCount *string `json:"pages_deployments_verified_count,omitempty"`
	PagesDeploymentsVerifiedInPercentage *string `json:"pages_deployments_verified_in_percentage,omitempty"`
	PipelineArtifactsChecksumFailedCount *string `json:"pipeline_artifacts_checksum_failed_count,omitempty"`
	PipelineArtifactsChecksumTotalCount *string `json:"pipeline_artifacts_checksum_total_count,omitempty"`
	PipelineArtifactsChecksummedCount *string `json:"pipeline_artifacts_checksummed_count,omitempty"`
	PipelineArtifactsCount *string `json:"pipeline_artifacts_count,omitempty"`
	PipelineArtifactsFailedCount *string `json:"pipeline_artifacts_failed_count,omitempty"`
	PipelineArtifactsRegistryCount *string `json:"pipeline_artifacts_registry_count,omitempty"`
	PipelineArtifactsSyncedCount *string `json:"pipeline_artifacts_synced_count,omitempty"`
	PipelineArtifactsSyncedInPercentage *string `json:"pipeline_artifacts_synced_in_percentage,omitempty"`
	PipelineArtifactsVerificationFailedCount *string `json:"pipeline_artifacts_verification_failed_count,omitempty"`
	PipelineArtifactsVerificationTotalCount *string `json:"pipeline_artifacts_verification_total_count,omitempty"`
	PipelineArtifactsVerifiedCount *string `json:"pipeline_artifacts_verified_count,omitempty"`
	PipelineArtifactsVerifiedInPercentage *string `json:"pipeline_artifacts_verified_in_percentage,omitempty"`
	ProjectRepositoriesChecksumFailedCount *string `json:"project_repositories_checksum_failed_count,omitempty"`
	ProjectRepositoriesChecksumTotalCount *string `json:"project_repositories_checksum_total_count,omitempty"`
	ProjectRepositoriesChecksummedCount *string `json:"project_repositories_checksummed_count,omitempty"`
	ProjectRepositoriesCount *string `json:"project_repositories_count,omitempty"`
	ProjectRepositoriesFailedCount *string `json:"project_repositories_failed_count,omitempty"`
	ProjectRepositoriesRegistryCount *string `json:"project_repositories_registry_count,omitempty"`
	ProjectRepositoriesSyncedCount *string `json:"project_repositories_synced_count,omitempty"`
	ProjectRepositoriesSyncedInPercentage *string `json:"project_repositories_synced_in_percentage,omitempty"`
	ProjectRepositoriesVerificationFailedCount *string `json:"project_repositories_verification_failed_count,omitempty"`
	ProjectRepositoriesVerificationTotalCount *string `json:"project_repositories_verification_total_count,omitempty"`
	ProjectRepositoriesVerifiedCount *string `json:"project_repositories_verified_count,omitempty"`
	ProjectRepositoriesVerifiedInPercentage *string `json:"project_repositories_verified_in_percentage,omitempty"`
	ProjectWikiRepositoriesChecksumFailedCount *string `json:"project_wiki_repositories_checksum_failed_count,omitempty"`
	ProjectWikiRepositoriesChecksumTotalCount *string `json:"project_wiki_repositories_checksum_total_count,omitempty"`
	ProjectWikiRepositoriesChecksummedCount *string `json:"project_wiki_repositories_checksummed_count,omitempty"`
	ProjectWikiRepositoriesCount *string `json:"project_wiki_repositories_count,omitempty"`
	ProjectWikiRepositoriesFailedCount *string `json:"project_wiki_repositories_failed_count,omitempty"`
	ProjectWikiRepositoriesRegistryCount *string `json:"project_wiki_repositories_registry_count,omitempty"`
	ProjectWikiRepositoriesSyncedCount *string `json:"project_wiki_repositories_synced_count,omitempty"`
	ProjectWikiRepositoriesSyncedInPercentage *string `json:"project_wiki_repositories_synced_in_percentage,omitempty"`
	ProjectWikiRepositoriesVerificationFailedCount *string `json:"project_wiki_repositories_verification_failed_count,omitempty"`
	ProjectWikiRepositoriesVerificationTotalCount *string `json:"project_wiki_repositories_verification_total_count,omitempty"`
	ProjectWikiRepositoriesVerifiedCount *string `json:"project_wiki_repositories_verified_count,omitempty"`
	ProjectWikiRepositoriesVerifiedInPercentage *string `json:"project_wiki_repositories_verified_in_percentage,omitempty"`
	ProjectsCount *string `json:"projects_count,omitempty"`
	ProxyLocalRequestsEventCountWeekly *string `json:"proxy_local_requests_event_count_weekly,omitempty"`
	ProxyRemoteRequestsEventCountWeekly *string `json:"proxy_remote_requests_event_count_weekly,omitempty"`
	ReplicationSlotsCount *string `json:"replication_slots_count,omitempty"`
	ReplicationSlotsMaxRetainedWalByte *string `json:"replication_slots_max_retained_wal_byte,omitempty"`
	ReplicationSlotsUsedCount *string `json:"replication_slots_used_count,omitempty"`
	ReplicationSlotsUsedInPercentage *string `json:"replication_slots_used_in_percentage,omitempty"`
	RepositoriesCheckedCount *string `json:"repositories_checked_count,omitempty"`
	RepositoriesCheckedFailedCount *string `json:"repositories_checked_failed_count,omitempty"`
	RepositoriesCheckedInPercentage *string `json:"repositories_checked_in_percentage,omitempty"`
	RepositoriesCount *string `json:"repositories_count,omitempty"`
	Revision *string `json:"revision,omitempty"`
	SelectiveSyncType *string `json:"selective_sync_type,omitempty"`
	SnippetRepositoriesChecksumFailedCount *string `json:"snippet_repositories_checksum_failed_count,omitempty"`
	SnippetRepositoriesChecksumTotalCount *string `json:"snippet_repositories_checksum_total_count,omitempty"`
	SnippetRepositoriesChecksummedCount *string `json:"snippet_repositories_checksummed_count,omitempty"`
	SnippetRepositoriesCount *string `json:"snippet_repositories_count,omitempty"`
	SnippetRepositoriesFailedCount *string `json:"snippet_repositories_failed_count,omitempty"`
	SnippetRepositoriesRegistryCount *string `json:"snippet_repositories_registry_count,omitempty"`
	SnippetRepositoriesSyncedCount *string `json:"snippet_repositories_synced_count,omitempty"`
	SnippetRepositoriesSyncedInPercentage *string `json:"snippet_repositories_synced_in_percentage,omitempty"`
	SnippetRepositoriesVerificationFailedCount *string `json:"snippet_repositories_verification_failed_count,omitempty"`
	SnippetRepositoriesVerificationTotalCount *string `json:"snippet_repositories_verification_total_count,omitempty"`
	SnippetRepositoriesVerifiedCount *string `json:"snippet_repositories_verified_count,omitempty"`
	SnippetRepositoriesVerifiedInPercentage *string `json:"snippet_repositories_verified_in_percentage,omitempty"`
	StorageShard *map[string]any `json:"storage_shard,omitempty"`
	StorageShardsMatch *string `json:"storage_shards_match,omitempty"`
	TerraformStateVersionsChecksumFailedCount *string `json:"terraform_state_versions_checksum_failed_count,omitempty"`
	TerraformStateVersionsChecksumTotalCount *string `json:"terraform_state_versions_checksum_total_count,omitempty"`
	TerraformStateVersionsChecksummedCount *string `json:"terraform_state_versions_checksummed_count,omitempty"`
	TerraformStateVersionsCount *string `json:"terraform_state_versions_count,omitempty"`
	TerraformStateVersionsFailedCount *string `json:"terraform_state_versions_failed_count,omitempty"`
	TerraformStateVersionsRegistryCount *string `json:"terraform_state_versions_registry_count,omitempty"`
	TerraformStateVersionsSyncedCount *string `json:"terraform_state_versions_synced_count,omitempty"`
	TerraformStateVersionsSyncedInPercentage *string `json:"terraform_state_versions_synced_in_percentage,omitempty"`
	TerraformStateVersionsVerificationFailedCount *string `json:"terraform_state_versions_verification_failed_count,omitempty"`
	TerraformStateVersionsVerificationTotalCount *string `json:"terraform_state_versions_verification_total_count,omitempty"`
	TerraformStateVersionsVerifiedCount *string `json:"terraform_state_versions_verified_count,omitempty"`
	TerraformStateVersionsVerifiedInPercentage *string `json:"terraform_state_versions_verified_in_percentage,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UploadsChecksumFailedCount *string `json:"uploads_checksum_failed_count,omitempty"`
	UploadsChecksumTotalCount *string `json:"uploads_checksum_total_count,omitempty"`
	UploadsChecksummedCount *string `json:"uploads_checksummed_count,omitempty"`
	UploadsCount *string `json:"uploads_count,omitempty"`
	UploadsFailedCount *string `json:"uploads_failed_count,omitempty"`
	UploadsRegistryCount *string `json:"uploads_registry_count,omitempty"`
	UploadsSyncedCount *string `json:"uploads_synced_count,omitempty"`
	UploadsSyncedInPercentage *string `json:"uploads_synced_in_percentage,omitempty"`
	UploadsVerificationFailedCount *string `json:"uploads_verification_failed_count,omitempty"`
	UploadsVerificationTotalCount *string `json:"uploads_verification_total_count,omitempty"`
	UploadsVerifiedCount *string `json:"uploads_verified_count,omitempty"`
	UploadsVerifiedInPercentage *string `json:"uploads_verified_in_percentage,omitempty"`
	Version *string `json:"version,omitempty"`
}

// EeApiEntitiesGeoNodeStatusCreateData is the typed request payload for EeApiEntitiesGeoNodeStatus.CreateTyped.
type EeApiEntitiesGeoNodeStatusCreateData struct {
	CiSecureFilesChecksumFailedCount *string `json:"ci_secure_files_checksum_failed_count,omitempty"`
	CiSecureFilesChecksumTotalCount *string `json:"ci_secure_files_checksum_total_count,omitempty"`
	CiSecureFilesChecksummedCount *string `json:"ci_secure_files_checksummed_count,omitempty"`
	CiSecureFilesCount *string `json:"ci_secure_files_count,omitempty"`
	CiSecureFilesFailedCount *string `json:"ci_secure_files_failed_count,omitempty"`
	CiSecureFilesRegistryCount *string `json:"ci_secure_files_registry_count,omitempty"`
	CiSecureFilesSyncedCount *string `json:"ci_secure_files_synced_count,omitempty"`
	CiSecureFilesSyncedInPercentage *string `json:"ci_secure_files_synced_in_percentage,omitempty"`
	CiSecureFilesVerificationFailedCount *string `json:"ci_secure_files_verification_failed_count,omitempty"`
	CiSecureFilesVerificationTotalCount *string `json:"ci_secure_files_verification_total_count,omitempty"`
	CiSecureFilesVerifiedCount *string `json:"ci_secure_files_verified_count,omitempty"`
	CiSecureFilesVerifiedInPercentage *string `json:"ci_secure_files_verified_in_percentage,omitempty"`
	ContainerRepositoriesChecksumFailedCount *string `json:"container_repositories_checksum_failed_count,omitempty"`
	ContainerRepositoriesChecksumTotalCount *string `json:"container_repositories_checksum_total_count,omitempty"`
	ContainerRepositoriesChecksummedCount *string `json:"container_repositories_checksummed_count,omitempty"`
	ContainerRepositoriesCount *string `json:"container_repositories_count,omitempty"`
	ContainerRepositoriesFailedCount *string `json:"container_repositories_failed_count,omitempty"`
	ContainerRepositoriesRegistryCount *string `json:"container_repositories_registry_count,omitempty"`
	ContainerRepositoriesReplicationEnabled *string `json:"container_repositories_replication_enabled,omitempty"`
	ContainerRepositoriesSyncedCount *string `json:"container_repositories_synced_count,omitempty"`
	ContainerRepositoriesSyncedInPercentage *string `json:"container_repositories_synced_in_percentage,omitempty"`
	ContainerRepositoriesVerificationFailedCount *string `json:"container_repositories_verification_failed_count,omitempty"`
	ContainerRepositoriesVerificationTotalCount *string `json:"container_repositories_verification_total_count,omitempty"`
	ContainerRepositoriesVerifiedCount *string `json:"container_repositories_verified_count,omitempty"`
	ContainerRepositoriesVerifiedInPercentage *string `json:"container_repositories_verified_in_percentage,omitempty"`
	CursorLastEventId *string `json:"cursor_last_event_id,omitempty"`
	CursorLastEventTimestamp *string `json:"cursor_last_event_timestamp,omitempty"`
	DbReplicationLagSecond *string `json:"db_replication_lag_second,omitempty"`
	DependencyProxyBlobsChecksumFailedCount *string `json:"dependency_proxy_blobs_checksum_failed_count,omitempty"`
	DependencyProxyBlobsChecksumTotalCount *string `json:"dependency_proxy_blobs_checksum_total_count,omitempty"`
	DependencyProxyBlobsChecksummedCount *string `json:"dependency_proxy_blobs_checksummed_count,omitempty"`
	DependencyProxyBlobsCount *string `json:"dependency_proxy_blobs_count,omitempty"`
	DependencyProxyBlobsFailedCount *string `json:"dependency_proxy_blobs_failed_count,omitempty"`
	DependencyProxyBlobsRegistryCount *string `json:"dependency_proxy_blobs_registry_count,omitempty"`
	DependencyProxyBlobsSyncedCount *string `json:"dependency_proxy_blobs_synced_count,omitempty"`
	DependencyProxyBlobsSyncedInPercentage *string `json:"dependency_proxy_blobs_synced_in_percentage,omitempty"`
	DependencyProxyBlobsVerificationFailedCount *string `json:"dependency_proxy_blobs_verification_failed_count,omitempty"`
	DependencyProxyBlobsVerificationTotalCount *string `json:"dependency_proxy_blobs_verification_total_count,omitempty"`
	DependencyProxyBlobsVerifiedCount *string `json:"dependency_proxy_blobs_verified_count,omitempty"`
	DependencyProxyBlobsVerifiedInPercentage *string `json:"dependency_proxy_blobs_verified_in_percentage,omitempty"`
	DependencyProxyManifestsChecksumFailedCount *string `json:"dependency_proxy_manifests_checksum_failed_count,omitempty"`
	DependencyProxyManifestsChecksumTotalCount *string `json:"dependency_proxy_manifests_checksum_total_count,omitempty"`
	DependencyProxyManifestsChecksummedCount *string `json:"dependency_proxy_manifests_checksummed_count,omitempty"`
	DependencyProxyManifestsCount *string `json:"dependency_proxy_manifests_count,omitempty"`
	DependencyProxyManifestsFailedCount *string `json:"dependency_proxy_manifests_failed_count,omitempty"`
	DependencyProxyManifestsRegistryCount *string `json:"dependency_proxy_manifests_registry_count,omitempty"`
	DependencyProxyManifestsSyncedCount *string `json:"dependency_proxy_manifests_synced_count,omitempty"`
	DependencyProxyManifestsSyncedInPercentage *string `json:"dependency_proxy_manifests_synced_in_percentage,omitempty"`
	DependencyProxyManifestsVerificationFailedCount *string `json:"dependency_proxy_manifests_verification_failed_count,omitempty"`
	DependencyProxyManifestsVerificationTotalCount *string `json:"dependency_proxy_manifests_verification_total_count,omitempty"`
	DependencyProxyManifestsVerifiedCount *string `json:"dependency_proxy_manifests_verified_count,omitempty"`
	DependencyProxyManifestsVerifiedInPercentage *string `json:"dependency_proxy_manifests_verified_in_percentage,omitempty"`
	DesignManagementRepositoriesChecksumFailedCount *string `json:"design_management_repositories_checksum_failed_count,omitempty"`
	DesignManagementRepositoriesChecksumTotalCount *string `json:"design_management_repositories_checksum_total_count,omitempty"`
	DesignManagementRepositoriesChecksummedCount *string `json:"design_management_repositories_checksummed_count,omitempty"`
	DesignManagementRepositoriesCount *string `json:"design_management_repositories_count,omitempty"`
	DesignManagementRepositoriesFailedCount *string `json:"design_management_repositories_failed_count,omitempty"`
	DesignManagementRepositoriesRegistryCount *string `json:"design_management_repositories_registry_count,omitempty"`
	DesignManagementRepositoriesSyncedCount *string `json:"design_management_repositories_synced_count,omitempty"`
	DesignManagementRepositoriesSyncedInPercentage *string `json:"design_management_repositories_synced_in_percentage,omitempty"`
	DesignManagementRepositoriesVerificationFailedCount *string `json:"design_management_repositories_verification_failed_count,omitempty"`
	DesignManagementRepositoriesVerificationTotalCount *string `json:"design_management_repositories_verification_total_count,omitempty"`
	DesignManagementRepositoriesVerifiedCount *string `json:"design_management_repositories_verified_count,omitempty"`
	DesignManagementRepositoriesVerifiedInPercentage *string `json:"design_management_repositories_verified_in_percentage,omitempty"`
	GeoNodeId *string `json:"geo_node_id,omitempty"`
	GitFetchEventCountWeekly *string `json:"git_fetch_event_count_weekly,omitempty"`
	GitPushEventCountWeekly *string `json:"git_push_event_count_weekly,omitempty"`
	GroupWikiRepositoriesChecksumFailedCount *string `json:"group_wiki_repositories_checksum_failed_count,omitempty"`
	GroupWikiRepositoriesChecksumTotalCount *string `json:"group_wiki_repositories_checksum_total_count,omitempty"`
	GroupWikiRepositoriesChecksummedCount *string `json:"group_wiki_repositories_checksummed_count,omitempty"`
	GroupWikiRepositoriesCount *string `json:"group_wiki_repositories_count,omitempty"`
	GroupWikiRepositoriesFailedCount *string `json:"group_wiki_repositories_failed_count,omitempty"`
	GroupWikiRepositoriesRegistryCount *string `json:"group_wiki_repositories_registry_count,omitempty"`
	GroupWikiRepositoriesSyncedCount *string `json:"group_wiki_repositories_synced_count,omitempty"`
	GroupWikiRepositoriesSyncedInPercentage *string `json:"group_wiki_repositories_synced_in_percentage,omitempty"`
	GroupWikiRepositoriesVerificationFailedCount *string `json:"group_wiki_repositories_verification_failed_count,omitempty"`
	GroupWikiRepositoriesVerificationTotalCount *string `json:"group_wiki_repositories_verification_total_count,omitempty"`
	GroupWikiRepositoriesVerifiedCount *string `json:"group_wiki_repositories_verified_count,omitempty"`
	GroupWikiRepositoriesVerifiedInPercentage *string `json:"group_wiki_repositories_verified_in_percentage,omitempty"`
	Health *string `json:"health,omitempty"`
	HealthStatus *string `json:"health_status,omitempty"`
	Healthy *string `json:"healthy,omitempty"`
	JobArtifactsChecksumFailedCount *string `json:"job_artifacts_checksum_failed_count,omitempty"`
	JobArtifactsChecksumTotalCount *string `json:"job_artifacts_checksum_total_count,omitempty"`
	JobArtifactsChecksummedCount *string `json:"job_artifacts_checksummed_count,omitempty"`
	JobArtifactsCount *string `json:"job_artifacts_count,omitempty"`
	JobArtifactsFailedCount *string `json:"job_artifacts_failed_count,omitempty"`
	JobArtifactsRegistryCount *string `json:"job_artifacts_registry_count,omitempty"`
	JobArtifactsSyncedCount *string `json:"job_artifacts_synced_count,omitempty"`
	JobArtifactsSyncedInPercentage *string `json:"job_artifacts_synced_in_percentage,omitempty"`
	JobArtifactsVerificationFailedCount *string `json:"job_artifacts_verification_failed_count,omitempty"`
	JobArtifactsVerificationTotalCount *string `json:"job_artifacts_verification_total_count,omitempty"`
	JobArtifactsVerifiedCount *string `json:"job_artifacts_verified_count,omitempty"`
	JobArtifactsVerifiedInPercentage *string `json:"job_artifacts_verified_in_percentage,omitempty"`
	LastEventId *string `json:"last_event_id,omitempty"`
	LastEventTimestamp *string `json:"last_event_timestamp,omitempty"`
	LastSuccessfulStatusCheckTimestamp *string `json:"last_successful_status_check_timestamp,omitempty"`
	LfsObjectsChecksumFailedCount *string `json:"lfs_objects_checksum_failed_count,omitempty"`
	LfsObjectsChecksumTotalCount *string `json:"lfs_objects_checksum_total_count,omitempty"`
	LfsObjectsChecksummedCount *string `json:"lfs_objects_checksummed_count,omitempty"`
	LfsObjectsCount *string `json:"lfs_objects_count,omitempty"`
	LfsObjectsFailedCount *string `json:"lfs_objects_failed_count,omitempty"`
	LfsObjectsRegistryCount *string `json:"lfs_objects_registry_count,omitempty"`
	LfsObjectsSyncedCount *string `json:"lfs_objects_synced_count,omitempty"`
	LfsObjectsSyncedInPercentage *string `json:"lfs_objects_synced_in_percentage,omitempty"`
	LfsObjectsVerificationFailedCount *string `json:"lfs_objects_verification_failed_count,omitempty"`
	LfsObjectsVerificationTotalCount *string `json:"lfs_objects_verification_total_count,omitempty"`
	LfsObjectsVerifiedCount *string `json:"lfs_objects_verified_count,omitempty"`
	LfsObjectsVerifiedInPercentage *string `json:"lfs_objects_verified_in_percentage,omitempty"`
	Link *map[string]any `json:"link,omitempty"`
	MergeRequestDiffsChecksumFailedCount *string `json:"merge_request_diffs_checksum_failed_count,omitempty"`
	MergeRequestDiffsChecksumTotalCount *string `json:"merge_request_diffs_checksum_total_count,omitempty"`
	MergeRequestDiffsChecksummedCount *string `json:"merge_request_diffs_checksummed_count,omitempty"`
	MergeRequestDiffsCount *string `json:"merge_request_diffs_count,omitempty"`
	MergeRequestDiffsFailedCount *string `json:"merge_request_diffs_failed_count,omitempty"`
	MergeRequestDiffsRegistryCount *string `json:"merge_request_diffs_registry_count,omitempty"`
	MergeRequestDiffsSyncedCount *string `json:"merge_request_diffs_synced_count,omitempty"`
	MergeRequestDiffsSyncedInPercentage *string `json:"merge_request_diffs_synced_in_percentage,omitempty"`
	MergeRequestDiffsVerificationFailedCount *string `json:"merge_request_diffs_verification_failed_count,omitempty"`
	MergeRequestDiffsVerificationTotalCount *string `json:"merge_request_diffs_verification_total_count,omitempty"`
	MergeRequestDiffsVerifiedCount *string `json:"merge_request_diffs_verified_count,omitempty"`
	MergeRequestDiffsVerifiedInPercentage *string `json:"merge_request_diffs_verified_in_percentage,omitempty"`
	MissingOauthApplication *string `json:"missing_oauth_application,omitempty"`
	Namespace *map[string]any `json:"namespace,omitempty"`
	PackageFilesChecksumFailedCount *string `json:"package_files_checksum_failed_count,omitempty"`
	PackageFilesChecksumTotalCount *string `json:"package_files_checksum_total_count,omitempty"`
	PackageFilesChecksummedCount *string `json:"package_files_checksummed_count,omitempty"`
	PackageFilesCount *string `json:"package_files_count,omitempty"`
	PackageFilesFailedCount *string `json:"package_files_failed_count,omitempty"`
	PackageFilesRegistryCount *string `json:"package_files_registry_count,omitempty"`
	PackageFilesSyncedCount *string `json:"package_files_synced_count,omitempty"`
	PackageFilesSyncedInPercentage *string `json:"package_files_synced_in_percentage,omitempty"`
	PackageFilesVerificationFailedCount *string `json:"package_files_verification_failed_count,omitempty"`
	PackageFilesVerificationTotalCount *string `json:"package_files_verification_total_count,omitempty"`
	PackageFilesVerifiedCount *string `json:"package_files_verified_count,omitempty"`
	PackageFilesVerifiedInPercentage *string `json:"package_files_verified_in_percentage,omitempty"`
	PagesDeploymentsChecksumFailedCount *string `json:"pages_deployments_checksum_failed_count,omitempty"`
	PagesDeploymentsChecksumTotalCount *string `json:"pages_deployments_checksum_total_count,omitempty"`
	PagesDeploymentsChecksummedCount *string `json:"pages_deployments_checksummed_count,omitempty"`
	PagesDeploymentsCount *string `json:"pages_deployments_count,omitempty"`
	PagesDeploymentsFailedCount *string `json:"pages_deployments_failed_count,omitempty"`
	PagesDeploymentsRegistryCount *string `json:"pages_deployments_registry_count,omitempty"`
	PagesDeploymentsSyncedCount *string `json:"pages_deployments_synced_count,omitempty"`
	PagesDeploymentsSyncedInPercentage *string `json:"pages_deployments_synced_in_percentage,omitempty"`
	PagesDeploymentsVerificationFailedCount *string `json:"pages_deployments_verification_failed_count,omitempty"`
	PagesDeploymentsVerificationTotalCount *string `json:"pages_deployments_verification_total_count,omitempty"`
	PagesDeploymentsVerifiedCount *string `json:"pages_deployments_verified_count,omitempty"`
	PagesDeploymentsVerifiedInPercentage *string `json:"pages_deployments_verified_in_percentage,omitempty"`
	PipelineArtifactsChecksumFailedCount *string `json:"pipeline_artifacts_checksum_failed_count,omitempty"`
	PipelineArtifactsChecksumTotalCount *string `json:"pipeline_artifacts_checksum_total_count,omitempty"`
	PipelineArtifactsChecksummedCount *string `json:"pipeline_artifacts_checksummed_count,omitempty"`
	PipelineArtifactsCount *string `json:"pipeline_artifacts_count,omitempty"`
	PipelineArtifactsFailedCount *string `json:"pipeline_artifacts_failed_count,omitempty"`
	PipelineArtifactsRegistryCount *string `json:"pipeline_artifacts_registry_count,omitempty"`
	PipelineArtifactsSyncedCount *string `json:"pipeline_artifacts_synced_count,omitempty"`
	PipelineArtifactsSyncedInPercentage *string `json:"pipeline_artifacts_synced_in_percentage,omitempty"`
	PipelineArtifactsVerificationFailedCount *string `json:"pipeline_artifacts_verification_failed_count,omitempty"`
	PipelineArtifactsVerificationTotalCount *string `json:"pipeline_artifacts_verification_total_count,omitempty"`
	PipelineArtifactsVerifiedCount *string `json:"pipeline_artifacts_verified_count,omitempty"`
	PipelineArtifactsVerifiedInPercentage *string `json:"pipeline_artifacts_verified_in_percentage,omitempty"`
	ProjectRepositoriesChecksumFailedCount *string `json:"project_repositories_checksum_failed_count,omitempty"`
	ProjectRepositoriesChecksumTotalCount *string `json:"project_repositories_checksum_total_count,omitempty"`
	ProjectRepositoriesChecksummedCount *string `json:"project_repositories_checksummed_count,omitempty"`
	ProjectRepositoriesCount *string `json:"project_repositories_count,omitempty"`
	ProjectRepositoriesFailedCount *string `json:"project_repositories_failed_count,omitempty"`
	ProjectRepositoriesRegistryCount *string `json:"project_repositories_registry_count,omitempty"`
	ProjectRepositoriesSyncedCount *string `json:"project_repositories_synced_count,omitempty"`
	ProjectRepositoriesSyncedInPercentage *string `json:"project_repositories_synced_in_percentage,omitempty"`
	ProjectRepositoriesVerificationFailedCount *string `json:"project_repositories_verification_failed_count,omitempty"`
	ProjectRepositoriesVerificationTotalCount *string `json:"project_repositories_verification_total_count,omitempty"`
	ProjectRepositoriesVerifiedCount *string `json:"project_repositories_verified_count,omitempty"`
	ProjectRepositoriesVerifiedInPercentage *string `json:"project_repositories_verified_in_percentage,omitempty"`
	ProjectWikiRepositoriesChecksumFailedCount *string `json:"project_wiki_repositories_checksum_failed_count,omitempty"`
	ProjectWikiRepositoriesChecksumTotalCount *string `json:"project_wiki_repositories_checksum_total_count,omitempty"`
	ProjectWikiRepositoriesChecksummedCount *string `json:"project_wiki_repositories_checksummed_count,omitempty"`
	ProjectWikiRepositoriesCount *string `json:"project_wiki_repositories_count,omitempty"`
	ProjectWikiRepositoriesFailedCount *string `json:"project_wiki_repositories_failed_count,omitempty"`
	ProjectWikiRepositoriesRegistryCount *string `json:"project_wiki_repositories_registry_count,omitempty"`
	ProjectWikiRepositoriesSyncedCount *string `json:"project_wiki_repositories_synced_count,omitempty"`
	ProjectWikiRepositoriesSyncedInPercentage *string `json:"project_wiki_repositories_synced_in_percentage,omitempty"`
	ProjectWikiRepositoriesVerificationFailedCount *string `json:"project_wiki_repositories_verification_failed_count,omitempty"`
	ProjectWikiRepositoriesVerificationTotalCount *string `json:"project_wiki_repositories_verification_total_count,omitempty"`
	ProjectWikiRepositoriesVerifiedCount *string `json:"project_wiki_repositories_verified_count,omitempty"`
	ProjectWikiRepositoriesVerifiedInPercentage *string `json:"project_wiki_repositories_verified_in_percentage,omitempty"`
	ProjectsCount *string `json:"projects_count,omitempty"`
	ProxyLocalRequestsEventCountWeekly *string `json:"proxy_local_requests_event_count_weekly,omitempty"`
	ProxyRemoteRequestsEventCountWeekly *string `json:"proxy_remote_requests_event_count_weekly,omitempty"`
	ReplicationSlotsCount *string `json:"replication_slots_count,omitempty"`
	ReplicationSlotsMaxRetainedWalByte *string `json:"replication_slots_max_retained_wal_byte,omitempty"`
	ReplicationSlotsUsedCount *string `json:"replication_slots_used_count,omitempty"`
	ReplicationSlotsUsedInPercentage *string `json:"replication_slots_used_in_percentage,omitempty"`
	RepositoriesCheckedCount *string `json:"repositories_checked_count,omitempty"`
	RepositoriesCheckedFailedCount *string `json:"repositories_checked_failed_count,omitempty"`
	RepositoriesCheckedInPercentage *string `json:"repositories_checked_in_percentage,omitempty"`
	RepositoriesCount *string `json:"repositories_count,omitempty"`
	Revision *string `json:"revision,omitempty"`
	SelectiveSyncType *string `json:"selective_sync_type,omitempty"`
	SnippetRepositoriesChecksumFailedCount *string `json:"snippet_repositories_checksum_failed_count,omitempty"`
	SnippetRepositoriesChecksumTotalCount *string `json:"snippet_repositories_checksum_total_count,omitempty"`
	SnippetRepositoriesChecksummedCount *string `json:"snippet_repositories_checksummed_count,omitempty"`
	SnippetRepositoriesCount *string `json:"snippet_repositories_count,omitempty"`
	SnippetRepositoriesFailedCount *string `json:"snippet_repositories_failed_count,omitempty"`
	SnippetRepositoriesRegistryCount *string `json:"snippet_repositories_registry_count,omitempty"`
	SnippetRepositoriesSyncedCount *string `json:"snippet_repositories_synced_count,omitempty"`
	SnippetRepositoriesSyncedInPercentage *string `json:"snippet_repositories_synced_in_percentage,omitempty"`
	SnippetRepositoriesVerificationFailedCount *string `json:"snippet_repositories_verification_failed_count,omitempty"`
	SnippetRepositoriesVerificationTotalCount *string `json:"snippet_repositories_verification_total_count,omitempty"`
	SnippetRepositoriesVerifiedCount *string `json:"snippet_repositories_verified_count,omitempty"`
	SnippetRepositoriesVerifiedInPercentage *string `json:"snippet_repositories_verified_in_percentage,omitempty"`
	StorageShard *map[string]any `json:"storage_shard,omitempty"`
	StorageShardsMatch *string `json:"storage_shards_match,omitempty"`
	TerraformStateVersionsChecksumFailedCount *string `json:"terraform_state_versions_checksum_failed_count,omitempty"`
	TerraformStateVersionsChecksumTotalCount *string `json:"terraform_state_versions_checksum_total_count,omitempty"`
	TerraformStateVersionsChecksummedCount *string `json:"terraform_state_versions_checksummed_count,omitempty"`
	TerraformStateVersionsCount *string `json:"terraform_state_versions_count,omitempty"`
	TerraformStateVersionsFailedCount *string `json:"terraform_state_versions_failed_count,omitempty"`
	TerraformStateVersionsRegistryCount *string `json:"terraform_state_versions_registry_count,omitempty"`
	TerraformStateVersionsSyncedCount *string `json:"terraform_state_versions_synced_count,omitempty"`
	TerraformStateVersionsSyncedInPercentage *string `json:"terraform_state_versions_synced_in_percentage,omitempty"`
	TerraformStateVersionsVerificationFailedCount *string `json:"terraform_state_versions_verification_failed_count,omitempty"`
	TerraformStateVersionsVerificationTotalCount *string `json:"terraform_state_versions_verification_total_count,omitempty"`
	TerraformStateVersionsVerifiedCount *string `json:"terraform_state_versions_verified_count,omitempty"`
	TerraformStateVersionsVerifiedInPercentage *string `json:"terraform_state_versions_verified_in_percentage,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UploadsChecksumFailedCount *string `json:"uploads_checksum_failed_count,omitempty"`
	UploadsChecksumTotalCount *string `json:"uploads_checksum_total_count,omitempty"`
	UploadsChecksummedCount *string `json:"uploads_checksummed_count,omitempty"`
	UploadsCount *string `json:"uploads_count,omitempty"`
	UploadsFailedCount *string `json:"uploads_failed_count,omitempty"`
	UploadsRegistryCount *string `json:"uploads_registry_count,omitempty"`
	UploadsSyncedCount *string `json:"uploads_synced_count,omitempty"`
	UploadsSyncedInPercentage *string `json:"uploads_synced_in_percentage,omitempty"`
	UploadsVerificationFailedCount *string `json:"uploads_verification_failed_count,omitempty"`
	UploadsVerificationTotalCount *string `json:"uploads_verification_total_count,omitempty"`
	UploadsVerifiedCount *string `json:"uploads_verified_count,omitempty"`
	UploadsVerifiedInPercentage *string `json:"uploads_verified_in_percentage,omitempty"`
	Version *string `json:"version,omitempty"`
}

// EeApiEntitiesGeoPipelineRef is the typed data model for the ee_api_entities_geo_pipeline_ref entity.
type EeApiEntitiesGeoPipelineRef struct {
	PipelineRef *[]any `json:"pipeline_ref,omitempty"`
}

// EeApiEntitiesGeoPipelineRefListMatch is the typed request payload for EeApiEntitiesGeoPipelineRef.ListTyped.
type EeApiEntitiesGeoPipelineRefListMatch struct {
	GlRepository any `json:"gl_repository"`
}

// EeApiEntitiesIssuableMetricImage is the typed data model for the ee_api_entities_issuable_metric_image entity.
type EeApiEntitiesIssuableMetricImage struct {
	CreatedAt *string `json:"created_at,omitempty"`
	FilePath *string `json:"file_path,omitempty"`
	Filename *string `json:"filename,omitempty"`
	Id *string `json:"id,omitempty"`
	Url *string `json:"url,omitempty"`
	UrlText *string `json:"url_text,omitempty"`
}

// EeApiEntitiesIssuableMetricImageCreateData is the typed request payload for EeApiEntitiesIssuableMetricImage.CreateTyped.
type EeApiEntitiesIssuableMetricImageCreateData struct {
	IssueId string `json:"issue_id"`
	ProjectId string `json:"project_id"`
}

// EeApiEntitiesIssuableMetricImageUpdateData is the typed request payload for EeApiEntitiesIssuableMetricImage.UpdateTyped.
type EeApiEntitiesIssuableMetricImageUpdateData struct {
	Id string `json:"id"`
	IssueId string `json:"issue_id"`
	ProjectId string `json:"project_id"`
}

// EeApiEntitiesIssuableMetricImageRemoveMatch is the typed request payload for EeApiEntitiesIssuableMetricImage.RemoveTyped.
type EeApiEntitiesIssuableMetricImageRemoveMatch struct {
	Id string `json:"id"`
	IssueId string `json:"issue_id"`
	ProjectId string `json:"project_id"`
}

// EeApiEntitiesMergeRequestApprovalState is the typed data model for the ee_api_entities_merge_request_approval_state entity.
type EeApiEntitiesMergeRequestApprovalState struct {
	ApprovalsRequired *int `json:"approvals_required,omitempty"`
	Approved *bool `json:"approved,omitempty"`
	ApprovedBy *[]any `json:"approved_by,omitempty"`
	CodeOwner *bool `json:"code_owner,omitempty"`
	ContainsHiddenGroup *bool `json:"contains_hidden_group,omitempty"`
	EligibleApprover *[]any `json:"eligible_approver,omitempty"`
	Group *[]any `json:"group,omitempty"`
	Id *int `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	Overridden *bool `json:"overridden,omitempty"`
	ReportType *string `json:"report_type,omitempty"`
	RuleType *string `json:"rule_type,omitempty"`
	Section *string `json:"section,omitempty"`
	SourceRule *map[string]any `json:"source_rule,omitempty"`
	User *[]any `json:"user,omitempty"`
}

// EeApiEntitiesMergeRequestApprovalStateListMatch is the typed request payload for EeApiEntitiesMergeRequestApprovalState.ListTyped.
type EeApiEntitiesMergeRequestApprovalStateListMatch struct {
	MergeRequestId string `json:"merge_request_id"`
	ProjectId string `json:"project_id"`
}

// EeApiEntitiesSshCertificate is the typed data model for the ee_api_entities_ssh_certificate entity.
type EeApiEntitiesSshCertificate struct {
	CreatedAt *string `json:"created_at,omitempty"`
	Id *int `json:"id,omitempty"`
	Key *string `json:"key,omitempty"`
	Title *string `json:"title,omitempty"`
}

// EeApiEntitiesSshCertificateListMatch is the typed request payload for EeApiEntitiesSshCertificate.ListTyped.
type EeApiEntitiesSshCertificateListMatch struct {
	GroupId string `json:"group_id"`
}

// EeApiEntitiesSshCertificateCreateData is the typed request payload for EeApiEntitiesSshCertificate.CreateTyped.
type EeApiEntitiesSshCertificateCreateData struct {
	GroupId string `json:"group_id"`
}

// Environment is the typed data model for the environment entity.
type Environment struct {
}

// EnvironmentCreateData is the typed request payload for Environment.CreateTyped.
type EnvironmentCreateData struct {
	ProjectId string `json:"project_id"`
}

// EnvironmentRemoveMatch is the typed request payload for Environment.RemoveTyped.
type EnvironmentRemoveMatch struct {
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
}

// ErrorTrackingClientKey is the typed data model for the error_tracking_client_key entity.
type ErrorTrackingClientKey struct {
}

// ErrorTrackingClientKeyRemoveMatch is the typed request payload for ErrorTrackingClientKey.RemoveTyped.
type ErrorTrackingClientKeyRemoveMatch struct {
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
}

// Feature is the typed data model for the feature entity.
type Feature struct {
}

// FeatureRemoveMatch is the typed request payload for Feature.RemoveTyped.
type FeatureRemoveMatch struct {
	Id string `json:"id"`
}

// FeatureFlag is the typed data model for the feature_flag entity.
type FeatureFlag struct {
}

// FeatureFlagLoadMatch is the typed request payload for FeatureFlag.LoadTyped.
type FeatureFlagLoadMatch struct {
	ProjectId string `json:"project_id"`
}

// FeatureFlagCreateData is the typed request payload for FeatureFlag.CreateTyped.
type FeatureFlagCreateData struct {
	UnleashId string `json:"unleash_id"`
}

// FeatureFlagRemoveMatch is the typed request payload for FeatureFlag.RemoveTyped.
type FeatureFlagRemoveMatch struct {
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
}

// FeatureFlagsUserList is the typed data model for the feature_flags_user_list entity.
type FeatureFlagsUserList struct {
}

// FeatureFlagsUserListRemoveMatch is the typed request payload for FeatureFlagsUserList.RemoveTyped.
type FeatureFlagsUserListRemoveMatch struct {
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
}

// FreezePeriod is the typed data model for the freeze_period entity.
type FreezePeriod struct {
}

// FreezePeriodRemoveMatch is the typed request payload for FreezePeriod.RemoveTyped.
type FreezePeriodRemoveMatch struct {
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
}

// GenericPackage is the typed data model for the generic_package entity.
type GenericPackage struct {
}

// GenericPackageLoadMatch is the typed request payload for GenericPackage.LoadTyped.
type GenericPackageLoadMatch struct {
	FileName any `json:"file_name"`
	GenericId string `json:"generic_id"`
	ProjectId string `json:"project_id"`
}

// GenericPackageUpdateData is the typed request payload for GenericPackage.UpdateTyped.
type GenericPackageUpdateData struct {
	FileName any `json:"file_name"`
	GenericId string `json:"generic_id"`
	ProjectId string `json:"project_id"`
}

// Geo is the typed data model for the geo entity.
type Geo struct {
}

// GeoLoadMatch is the typed request payload for Geo.LoadTyped.
type GeoLoadMatch struct {
	ReplicableId string `json:"replicable_id"`
	ReplicableName any `json:"replicable_name"`
}

// GeoCreateData is the typed request payload for Geo.CreateTyped.
type GeoCreateData struct {
	NodeProxyId *string `json:"node_proxy_id,omitempty"`
}

// GoProxy is the typed data model for the go_proxy entity.
type GoProxy struct {
}

// GoProxyLoadMatch is the typed request payload for GoProxy.LoadTyped.
type GoProxyLoadMatch struct {
	ModuleVersion *any `json:"module_version,omitempty"`
	ProjectId string `json:"project_id"`
}

// Group is the typed data model for the group entity.
type Group struct {
}

// GroupLoadMatch is the typed request payload for Group.LoadTyped.
type GroupLoadMatch struct {
	Filename *any `json:"filename,omitempty"`
	Id string `json:"id"`
	Secret *any `json:"secret,omitempty"`
	UploadId *string `json:"upload_id,omitempty"`
}

// GroupCreateData is the typed request payload for Group.CreateTyped.
type GroupCreateData struct {
	Id string `json:"id"`
}

// GroupUpdateData is the typed request payload for Group.UpdateTyped.
type GroupUpdateData struct {
	Id string `json:"id"`
	Key *string `json:"key,omitempty"`
	MemberId *string `json:"member_id,omitempty"`
}

// GroupRemoveMatch is the typed request payload for Group.RemoveTyped.
type GroupRemoveMatch struct {
	Filename *any `json:"filename,omitempty"`
	Id string `json:"id"`
	Secret *any `json:"secret,omitempty"`
	GroupId *string `json:"group_id,omitempty"`
	Key *string `json:"key,omitempty"`
	SshCertificatesId *string `json:"ssh_certificates_id,omitempty"`
	UploadId *string `json:"upload_id,omitempty"`
	UserId *string `json:"user_id,omitempty"`
}

// GroupAvatar is the typed data model for the group_avatar entity.
type GroupAvatar struct {
}

// GroupAvatarLoadMatch is the typed request payload for GroupAvatar.LoadTyped.
type GroupAvatarLoadMatch struct {
	Id string `json:"id"`
}

// GroupExport is the typed data model for the group_export entity.
type GroupExport struct {
}

// GroupExportLoadMatch is the typed request payload for GroupExport.LoadTyped.
type GroupExportLoadMatch struct {
	GroupId string `json:"group_id"`
}

// GroupExportCreateData is the typed request payload for GroupExport.CreateTyped.
type GroupExportCreateData struct {
	Id string `json:"id"`
}

// GroupImport is the typed data model for the group_import entity.
type GroupImport struct {
}

// GroupImportCreateData is the typed request payload for GroupImport.CreateTyped.
type GroupImportCreateData struct {
}

// HelmPackage is the typed data model for the helm_package entity.
type HelmPackage struct {
}

// HelmPackageLoadMatch is the typed request payload for HelmPackage.LoadTyped.
type HelmPackageLoadMatch struct {
	FileName *any `json:"file_name,omitempty"`
	HelmId *string `json:"helm_id,omitempty"`
	ProjectId string `json:"project_id"`
	Channel *any `json:"channel,omitempty"`
}

// HelmPackageCreateData is the typed request payload for HelmPackage.CreateTyped.
type HelmPackageCreateData struct {
	Channel *any `json:"channel,omitempty"`
	ProjectId string `json:"project_id"`
	ApiId *string `json:"api_id,omitempty"`
}

// Hook is the typed data model for the hook entity.
type Hook struct {
}

// HookCreateData is the typed request payload for Hook.CreateTyped.
type HookCreateData struct {
	Id string `json:"id"`
}

// HookUpdateData is the typed request payload for Hook.UpdateTyped.
type HookUpdateData struct {
	Id string `json:"id"`
	Key string `json:"key"`
}

// HookRemoveMatch is the typed request payload for Hook.RemoveTyped.
type HookRemoveMatch struct {
	Id string `json:"id"`
	Key string `json:"key"`
}

// Import is the typed data model for the import entity.
type Import struct {
}

// ImportCreateData is the typed request payload for Import.CreateTyped.
type ImportCreateData struct {
}

// Integration is the typed data model for the integration entity.
type Integration struct {
}

// IntegrationCreateData is the typed request payload for Integration.CreateTyped.
type IntegrationCreateData struct {
	ProjectId *string `json:"project_id,omitempty"`
}

// IntegrationRemoveMatch is the typed request payload for Integration.RemoveTyped.
type IntegrationRemoveMatch struct {
	GroupId *string `json:"group_id,omitempty"`
	Id *string `json:"id,omitempty"`
	ProjectId *string `json:"project_id,omitempty"`
	Slug *string `json:"slug,omitempty"`
}

// Invitation is the typed data model for the invitation entity.
type Invitation struct {
}

// InvitationRemoveMatch is the typed request payload for Invitation.RemoveTyped.
type InvitationRemoveMatch struct {
	GroupId *string `json:"group_id,omitempty"`
	Id string `json:"id"`
	ProjectId *string `json:"project_id,omitempty"`
}

// IssueLink is the typed data model for the issue_link entity.
type IssueLink struct {
}

// IssueLinkRemoveMatch is the typed request payload for IssueLink.RemoveTyped.
type IssueLinkRemoveMatch struct {
	Id string `json:"id"`
	IssueId string `json:"issue_id"`
	ProjectId string `json:"project_id"`
}

// IssuesStatistic is the typed data model for the issues_statistic entity.
type IssuesStatistic struct {
}

// IssuesStatisticLoadMatch is the typed request payload for IssuesStatistic.LoadTyped.
type IssuesStatisticLoadMatch struct {
}

// Job is the typed data model for the job entity.
type Job struct {
}

// JobLoadMatch is the typed request payload for Job.LoadTyped.
type JobLoadMatch struct {
	Id string `json:"id"`
}

// JobCreateData is the typed request payload for Job.CreateTyped.
type JobCreateData struct {
	Id *string `json:"id,omitempty"`
}

// JobUpdateData is the typed request payload for Job.UpdateTyped.
type JobUpdateData struct {
	Id string `json:"id"`
}

// MavenPackage is the typed data model for the maven_package entity.
type MavenPackage struct {
}

// MavenPackageLoadMatch is the typed request payload for MavenPackage.LoadTyped.
type MavenPackageLoadMatch struct {
	FileName any `json:"file_name"`
	GroupId *string `json:"group_id,omitempty"`
	ProjectId *string `json:"project_id,omitempty"`
}

// MavenPackageUpdateData is the typed request payload for MavenPackage.UpdateTyped.
type MavenPackageUpdateData struct {
	FileName any `json:"file_name"`
	ProjectId string `json:"project_id"`
}

// Member is the typed data model for the member entity.
type Member struct {
}

// MemberRemoveMatch is the typed request payload for Member.RemoveTyped.
type MemberRemoveMatch struct {
	GroupId *string `json:"group_id,omitempty"`
	Id string `json:"id"`
	ProjectId *string `json:"project_id,omitempty"`
}

// MergeRequest is the typed data model for the merge_request entity.
type MergeRequest struct {
}

// MergeRequestLoadMatch is the typed request payload for MergeRequest.LoadTyped.
type MergeRequestLoadMatch struct {
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
}

// MergeRequestUpdateData is the typed request payload for MergeRequest.UpdateTyped.
type MergeRequestUpdateData struct {
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
}

// MergeRequestRemoveMatch is the typed request payload for MergeRequest.RemoveTyped.
type MergeRequestRemoveMatch struct {
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
}

// Metadata is the typed data model for the metadata entity.
type Metadata struct {
	Enterprise *bool `json:"enterprise,omitempty"`
	Kas *map[string]any `json:"kas,omitempty"`
	Revision *string `json:"revision,omitempty"`
	Version *string `json:"version,omitempty"`
}

// MetadataLoadMatch is the typed request payload for Metadata.LoadTyped.
type MetadataLoadMatch struct {
	Enterprise *bool `json:"enterprise,omitempty"`
	Kas *map[string]any `json:"kas,omitempty"`
	Revision *string `json:"revision,omitempty"`
	Version *string `json:"version,omitempty"`
}

// Migration is the typed data model for the migration entity.
type Migration struct {
}

// MigrationCreateData is the typed request payload for Migration.CreateTyped.
type MigrationCreateData struct {
	Timestamp any `json:"timestamp"`
}

// MlModelRegistry is the typed data model for the ml_model_registry entity.
type MlModelRegistry struct {
}

// MlModelRegistryLoadMatch is the typed request payload for MlModelRegistry.LoadTyped.
type MlModelRegistryLoadMatch struct {
	FileName any `json:"file_name"`
	MlModelId string `json:"ml_model_id"`
	ProjectId string `json:"project_id"`
}

// MlModelRegistryUpdateData is the typed request payload for MlModelRegistry.UpdateTyped.
type MlModelRegistryUpdateData struct {
	FileName any `json:"file_name"`
	MlModelId string `json:"ml_model_id"`
	ProjectId string `json:"project_id"`
}

// Namespace is the typed data model for the namespace entity.
type Namespace struct {
}

// NamespaceRemoveMatch is the typed request payload for Namespace.RemoveTyped.
type NamespaceRemoveMatch struct {
	Id string `json:"id"`
}

// Npm is the typed data model for the npm entity.
type Npm struct {
}

// NpmUpdateData is the typed request payload for Npm.UpdateTyped.
type NpmUpdateData struct {
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
}

// NpmPackage is the typed data model for the npm_package entity.
type NpmPackage struct {
}

// NpmPackageLoadMatch is the typed request payload for NpmPackage.LoadTyped.
type NpmPackageLoadMatch struct {
	ProjectId string `json:"project_id"`
}

// NpmPackageCreateData is the typed request payload for NpmPackage.CreateTyped.
type NpmPackageCreateData struct {
	GroupId *string `json:"group_id,omitempty"`
	ProjectId *string `json:"project_id,omitempty"`
}

// NpmPackageUpdateData is the typed request payload for NpmPackage.UpdateTyped.
type NpmPackageUpdateData struct {
	GroupId *string `json:"group_id,omitempty"`
	Tag any `json:"tag"`
	ProjectId *string `json:"project_id,omitempty"`
}

// NpmPackageRemoveMatch is the typed request payload for NpmPackage.RemoveTyped.
type NpmPackageRemoveMatch struct {
	GroupId *string `json:"group_id,omitempty"`
	Tag any `json:"tag"`
	ProjectId *string `json:"project_id,omitempty"`
}

// Nuget is the typed data model for the nuget entity.
type Nuget struct {
}

// NugetUpdateData is the typed request payload for Nuget.UpdateTyped.
type NugetUpdateData struct {
	ProjectId string `json:"project_id"`
}

// NugetPackage is the typed data model for the nuget_package entity.
type NugetPackage struct {
	CatalogEntry *map[string]any `json:"catalog_entry,omitempty"`
	Count *int `json:"count,omitempty"`
	Id *string `json:"id,omitempty"`
	Item *[]any `json:"item,omitempty"`
	Lower *string `json:"lower,omitempty"`
	PackageContent *string `json:"package_content,omitempty"`
	Upper *string `json:"upper,omitempty"`
}

// NugetPackageLoadMatch is the typed request payload for NugetPackage.LoadTyped.
type NugetPackageLoadMatch struct {
	GroupId *string `json:"group_id,omitempty"`
	ProjectId *string `json:"project_id,omitempty"`
}

// NugetPackageListMatch is the typed request payload for NugetPackage.ListTyped.
type NugetPackageListMatch struct {
	GroupId *string `json:"group_id,omitempty"`
	ProjectId *string `json:"project_id,omitempty"`
}

// NugetPackageUpdateData is the typed request payload for NugetPackage.UpdateTyped.
type NugetPackageUpdateData struct {
	ProjectId string `json:"project_id"`
}

// NugetPackageRemoveMatch is the typed request payload for NugetPackage.RemoveTyped.
type NugetPackageRemoveMatch struct {
	ProjectId string `json:"project_id"`
}

// PackageFile is the typed data model for the package_file entity.
type PackageFile struct {
}

// PackageFileLoadMatch is the typed request payload for PackageFile.LoadTyped.
type PackageFileLoadMatch struct {
	Id string `json:"id"`
	PackageId string `json:"package_id"`
	ProjectId string `json:"project_id"`
}

// PackageFileRemoveMatch is the typed request payload for PackageFile.RemoveTyped.
type PackageFileRemoveMatch struct {
	Id string `json:"id"`
	PackageId string `json:"package_id"`
	ProjectId string `json:"project_id"`
}

// Page is the typed data model for the page entity.
type Page struct {
}

// PageLoadMatch is the typed request payload for Page.LoadTyped.
type PageLoadMatch struct {
	ProjectId string `json:"project_id"`
}

// PageUpdateData is the typed request payload for Page.UpdateTyped.
type PageUpdateData struct {
	ProjectId string `json:"project_id"`
}

// PageRemoveMatch is the typed request payload for Page.RemoveTyped.
type PageRemoveMatch struct {
	ProjectId string `json:"project_id"`
}

// Participant is the typed data model for the participant entity.
type Participant struct {
	Key *string `json:"key,omitempty"`
	Value *string `json:"value,omitempty"`
}

// ParticipantListMatch is the typed request payload for Participant.ListTyped.
type ParticipantListMatch struct {
	IssueId *string `json:"issue_id,omitempty"`
	ProjectId string `json:"project_id"`
	MergeRequestId *string `json:"merge_request_id,omitempty"`
}

// PersonalAccessToken is the typed data model for the personal_access_token entity.
type PersonalAccessToken struct {
}

// PersonalAccessTokenRemoveMatch is the typed request payload for PersonalAccessToken.RemoveTyped.
type PersonalAccessTokenRemoveMatch struct {
	Id string `json:"id"`
}

// Project is the typed data model for the project entity.
type Project struct {
	BeforeSha *string `json:"before_sha,omitempty"`
	CommittedAt *string `json:"committed_at,omitempty"`
	Coverage *float64 `json:"coverage,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DetailedStatus *map[string]any `json:"detailed_status,omitempty"`
	Duration *int `json:"duration,omitempty"`
	FinishedAt *string `json:"finished_at,omitempty"`
	Id *int `json:"id,omitempty"`
	Iid *int `json:"iid,omitempty"`
	Name *string `json:"name,omitempty"`
	ProjectId *int `json:"project_id,omitempty"`
	QueuedDuration *int `json:"queued_duration,omitempty"`
	Ref *string `json:"ref,omitempty"`
	Sha *string `json:"sha,omitempty"`
	Source *string `json:"source,omitempty"`
	StartedAt *string `json:"started_at,omitempty"`
	Status *string `json:"status,omitempty"`
	Tag *bool `json:"tag,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	User *map[string]any `json:"user,omitempty"`
	WebUrl *string `json:"web_url,omitempty"`
	YamlError *string `json:"yaml_error,omitempty"`
}

// ProjectLoadMatch is the typed request payload for Project.LoadTyped.
type ProjectLoadMatch struct {
	ArtifactId *string `json:"artifact_id,omitempty"`
	Id string `json:"id"`
	FilePath *any `json:"file_path,omitempty"`
	HookId *string `json:"hook_id,omitempty"`
	JobId *string `json:"job_id,omitempty"`
	RefName *any `json:"ref_name,omitempty"`
	Filename *any `json:"filename,omitempty"`
	Secret *any `json:"secret,omitempty"`
	IssueId *string `json:"issue_id,omitempty"`
	PipelineId *string `json:"pipeline_id,omitempty"`
	Sha *any `json:"sha,omitempty"`
	UploadId *string `json:"upload_id,omitempty"`
}

// ProjectCreateData is the typed request payload for Project.CreateTyped.
type ProjectCreateData struct {
	EventId *string `json:"event_id,omitempty"`
	HookId *string `json:"hook_id,omitempty"`
	Id string `json:"id"`
	FilePath *any `json:"file_path,omitempty"`
	Trigger *any `json:"trigger,omitempty"`
	IssueId *string `json:"issue_id,omitempty"`
	MergeRequestId *string `json:"merge_request_id,omitempty"`
	PipelineScheduleId *string `json:"pipeline_schedule_id,omitempty"`
	ProjectId *string `json:"project_id,omitempty"`
}

// ProjectUpdateData is the typed request payload for Project.UpdateTyped.
type ProjectUpdateData struct {
	HookId *string `json:"hook_id,omitempty"`
	Id string `json:"id"`
	Key *string `json:"key,omitempty"`
	Domain *any `json:"domain,omitempty"`
	DraftNoteId *string `json:"draft_note_id,omitempty"`
	MergeRequestId *string `json:"merge_request_id,omitempty"`
	FilePath *any `json:"file_path,omitempty"`
	PipelineId *string `json:"pipeline_id,omitempty"`
}

// ProjectRemoveMatch is the typed request payload for Project.RemoveTyped.
type ProjectRemoveMatch struct {
	FilePath *any `json:"file_path,omitempty"`
	Id string `json:"id"`
	DraftNoteId *string `json:"draft_note_id,omitempty"`
	MergeRequestId *string `json:"merge_request_id,omitempty"`
	Filename *any `json:"filename,omitempty"`
	Secret *any `json:"secret,omitempty"`
	HookId *string `json:"hook_id,omitempty"`
	Key *string `json:"key,omitempty"`
	PipelineScheduleId *string `json:"pipeline_schedule_id,omitempty"`
	Domain *any `json:"domain,omitempty"`
	GroupId *string `json:"group_id,omitempty"`
	IssueIid *any `json:"issue_iid,omitempty"`
	JobId *string `json:"job_id,omitempty"`
	Name *string `json:"name,omitempty"`
	PackageProtectionRuleId *string `json:"package_protection_rule_id,omitempty"`
	PipelineId *string `json:"pipeline_id,omitempty"`
	ProtectionRuleId *string `json:"protection_rule_id,omitempty"`
	TriggerId *string `json:"trigger_id,omitempty"`
	UploadId *string `json:"upload_id,omitempty"`
}

// ProjectAvatar is the typed data model for the project_avatar entity.
type ProjectAvatar struct {
}

// ProjectAvatarLoadMatch is the typed request payload for ProjectAvatar.LoadTyped.
type ProjectAvatarLoadMatch struct {
	Id string `json:"id"`
}

// ProjectEntity is the typed data model for the project_entity entity.
type ProjectEntity struct {
}

// ProjectEntityCreateData is the typed request payload for ProjectEntity.CreateTyped.
type ProjectEntityCreateData struct {
}

// ProjectExport is the typed data model for the project_export entity.
type ProjectExport struct {
}

// ProjectExportLoadMatch is the typed request payload for ProjectExport.LoadTyped.
type ProjectExportLoadMatch struct {
	ProjectId string `json:"project_id"`
}

// ProjectExportCreateData is the typed request payload for ProjectExport.CreateTyped.
type ProjectExportCreateData struct {
	Id string `json:"id"`
}

// ProjectHook is the typed data model for the project_hook entity.
type ProjectHook struct {
}

// ProjectHookRemoveMatch is the typed request payload for ProjectHook.RemoveTyped.
type ProjectHookRemoveMatch struct {
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
}

// ProjectImport is the typed data model for the project_import entity.
type ProjectImport struct {
}

// ProjectImportCreateData is the typed request payload for ProjectImport.CreateTyped.
type ProjectImportCreateData struct {
}

// ProjectImportEntity is the typed data model for the project_import_entity entity.
type ProjectImportEntity struct {
	Forked *bool `json:"forked,omitempty"`
	FullName *string `json:"full_name,omitempty"`
	FullPath *string `json:"full_path,omitempty"`
	HumanImportStatusName *string `json:"human_import_status_name,omitempty"`
	Id *int `json:"id,omitempty"`
	ImportError *string `json:"import_error,omitempty"`
	ImportSource *string `json:"import_source,omitempty"`
	ImportStatus *string `json:"import_status,omitempty"`
	ImportWarning *string `json:"import_warning,omitempty"`
	Name *string `json:"name,omitempty"`
	ProviderLink *string `json:"provider_link,omitempty"`
	RefsUrl *string `json:"refs_url,omitempty"`
	RelationType *string `json:"relation_type,omitempty"`
}

// ProjectImportEntityCreateData is the typed request payload for ProjectImportEntity.CreateTyped.
type ProjectImportEntityCreateData struct {
	Forked *bool `json:"forked,omitempty"`
	FullName *string `json:"full_name,omitempty"`
	FullPath *string `json:"full_path,omitempty"`
	HumanImportStatusName *string `json:"human_import_status_name,omitempty"`
	Id *int `json:"id,omitempty"`
	ImportError *string `json:"import_error,omitempty"`
	ImportSource *string `json:"import_source,omitempty"`
	ImportStatus *string `json:"import_status,omitempty"`
	ImportWarning *string `json:"import_warning,omitempty"`
	Name *string `json:"name,omitempty"`
	ProviderLink *string `json:"provider_link,omitempty"`
	RefsUrl *string `json:"refs_url,omitempty"`
	RelationType *string `json:"relation_type,omitempty"`
}

// ProjectPackage is the typed data model for the project_package entity.
type ProjectPackage struct {
}

// ProjectPackageRemoveMatch is the typed request payload for ProjectPackage.RemoveTyped.
type ProjectPackageRemoveMatch struct {
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
}

// ProjectSnippet is the typed data model for the project_snippet entity.
type ProjectSnippet struct {
}

// ProjectSnippetRemoveMatch is the typed request payload for ProjectSnippet.RemoveTyped.
type ProjectSnippetRemoveMatch struct {
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
}

// ProjectsJobTokenScope is the typed data model for the projects_job_token_scope entity.
type ProjectsJobTokenScope struct {
}

// ProjectsJobTokenScopeUpdateData is the typed request payload for ProjectsJobTokenScope.UpdateTyped.
type ProjectsJobTokenScopeUpdateData struct {
	ProjectId string `json:"project_id"`
}

// ProjectsJobTokenScopeRemoveMatch is the typed request payload for ProjectsJobTokenScope.RemoveTyped.
type ProjectsJobTokenScopeRemoveMatch struct {
	ProjectId string `json:"project_id"`
	TargetGroupId *string `json:"target_group_id,omitempty"`
	TargetProjectId *string `json:"target_project_id,omitempty"`
}

// ProtectedTag is the typed data model for the protected_tag entity.
type ProtectedTag struct {
}

// ProtectedTagRemoveMatch is the typed request payload for ProtectedTag.RemoveTyped.
type ProtectedTagRemoveMatch struct {
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
}

// Pypi is the typed data model for the pypi entity.
type Pypi struct {
}

// PypiCreateData is the typed request payload for Pypi.CreateTyped.
type PypiCreateData struct {
	ProjectId string `json:"project_id"`
}

// PypiPackage is the typed data model for the pypi_package entity.
type PypiPackage struct {
}

// PypiPackageLoadMatch is the typed request payload for PypiPackage.LoadTyped.
type PypiPackageLoadMatch struct {
	GroupId *string `json:"group_id,omitempty"`
	Sha256 *any `json:"sha256,omitempty"`
	ProjectId *string `json:"project_id,omitempty"`
}

// PypiPackageCreateData is the typed request payload for PypiPackage.CreateTyped.
type PypiPackageCreateData struct {
	ProjectId string `json:"project_id"`
}

// Release is the typed data model for the release entity.
type Release struct {
}

// ReleaseLoadMatch is the typed request payload for Release.LoadTyped.
type ReleaseLoadMatch struct {
	ProjectId string `json:"project_id"`
}

// ReleaseRemoveMatch is the typed request payload for Release.RemoveTyped.
type ReleaseRemoveMatch struct {
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
}

// ReleaseLink is the typed data model for the release_link entity.
type ReleaseLink struct {
}

// ReleaseLinkRemoveMatch is the typed request payload for ReleaseLink.RemoveTyped.
type ReleaseLinkRemoveMatch struct {
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
	ReleaseId string `json:"release_id"`
}

// RemoteMirror is the typed data model for the remote_mirror entity.
type RemoteMirror struct {
}

// RemoteMirrorLoadMatch is the typed request payload for RemoteMirror.LoadTyped.
type RemoteMirrorLoadMatch struct {
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
}

// RemoteMirrorCreateData is the typed request payload for RemoteMirror.CreateTyped.
type RemoteMirrorCreateData struct {
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
}

// RemoteMirrorRemoveMatch is the typed request payload for RemoteMirror.RemoveTyped.
type RemoteMirrorRemoveMatch struct {
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
}

// Rpm is the typed data model for the rpm entity.
type Rpm struct {
}

// RpmCreateData is the typed request payload for Rpm.CreateTyped.
type RpmCreateData struct {
	ProjectId string `json:"project_id"`
}

// RpmPackage is the typed data model for the rpm_package entity.
type RpmPackage struct {
}

// RpmPackageLoadMatch is the typed request payload for RpmPackage.LoadTyped.
type RpmPackageLoadMatch struct {
	ProjectId string `json:"project_id"`
}

// RpmPackageCreateData is the typed request payload for RpmPackage.CreateTyped.
type RpmPackageCreateData struct {
	ProjectId string `json:"project_id"`
}

// Rubygem is the typed data model for the rubygem entity.
type Rubygem struct {
}

// RubygemLoadMatch is the typed request payload for Rubygem.LoadTyped.
type RubygemLoadMatch struct {
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
}

// RubygemPackage is the typed data model for the rubygem_package entity.
type RubygemPackage struct {
}

// RubygemPackageLoadMatch is the typed request payload for RubygemPackage.LoadTyped.
type RubygemPackageLoadMatch struct {
	FileName *any `json:"file_name,omitempty"`
	ProjectId string `json:"project_id"`
}

// RubygemPackageCreateData is the typed request payload for RubygemPackage.CreateTyped.
type RubygemPackageCreateData struct {
	ProjectId string `json:"project_id"`
}

// Runner is the typed data model for the runner entity.
type Runner struct {
}

// RunnerCreateData is the typed request payload for Runner.CreateTyped.
type RunnerCreateData struct {
}

// RunnerRemoveMatch is the typed request payload for Runner.RemoveTyped.
type RunnerRemoveMatch struct {
	Id *string `json:"id,omitempty"`
	ProjectId *string `json:"project_id,omitempty"`
}

// Search is the typed data model for the search entity.
type Search struct {
}

// SearchLoadMatch is the typed request payload for Search.LoadTyped.
type SearchLoadMatch struct {
}

// SecureFile is the typed data model for the secure_file entity.
type SecureFile struct {
}

// SecureFileLoadMatch is the typed request payload for SecureFile.LoadTyped.
type SecureFileLoadMatch struct {
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
}

// SecureFileRemoveMatch is the typed request payload for SecureFile.RemoveTyped.
type SecureFileRemoveMatch struct {
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
}

// Slack is the typed data model for the slack entity.
type Slack struct {
}

// SlackCreateData is the typed request payload for Slack.CreateTyped.
type SlackCreateData struct {
}

// Snippet is the typed data model for the snippet entity.
type Snippet struct {
}

// SnippetLoadMatch is the typed request payload for Snippet.LoadTyped.
type SnippetLoadMatch struct {
	FileId string `json:"file_id"`
	FilePath any `json:"file_path"`
	Id string `json:"id"`
}

// SnippetRemoveMatch is the typed request payload for Snippet.RemoveTyped.
type SnippetRemoveMatch struct {
	Id string `json:"id"`
}

// Starrer is the typed data model for the starrer entity.
type Starrer struct {
	AvatarPath *string `json:"avatar_path,omitempty"`
	AvatarUrl *string `json:"avatar_url,omitempty"`
	CustomAttribute *[]any `json:"custom_attribute,omitempty"`
	Id *int `json:"id,omitempty"`
	Locked *bool `json:"locked,omitempty"`
	Name *string `json:"name,omitempty"`
	PublicEmail *string `json:"public_email,omitempty"`
	State *string `json:"state,omitempty"`
	Username *string `json:"username,omitempty"`
	WebUrl *string `json:"web_url,omitempty"`
}

// StarrerListMatch is the typed request payload for Starrer.ListTyped.
type StarrerListMatch struct {
	ProjectId string `json:"project_id"`
}

// SystemHook is the typed data model for the system_hook entity.
type SystemHook struct {
}

// SystemHookRemoveMatch is the typed request payload for SystemHook.RemoveTyped.
type SystemHookRemoveMatch struct {
	Id string `json:"id"`
}

// Tag is the typed data model for the tag entity.
type Tag struct {
}

// TagRemoveMatch is the typed request payload for Tag.RemoveTyped.
type TagRemoveMatch struct {
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
}

// TerraformRegistry is the typed data model for the terraform_registry entity.
type TerraformRegistry struct {
}

// TerraformRegistryLoadMatch is the typed request payload for TerraformRegistry.LoadTyped.
type TerraformRegistryLoadMatch struct {
	ModuleId *string `json:"module_id,omitempty"`
	ModuleSystem any `json:"module_system"`
	ProjectId *string `json:"project_id,omitempty"`
	Id *string `json:"id,omitempty"`
	ModuleName *any `json:"module_name,omitempty"`
	V1Id *string `json:"v1_id,omitempty"`
}

// TerraformRegistryUpdateData is the typed request payload for TerraformRegistry.UpdateTyped.
type TerraformRegistryUpdateData struct {
	ModuleId string `json:"module_id"`
	ModuleSystem any `json:"module_system"`
	ProjectId string `json:"project_id"`
}

// TerraformState is the typed data model for the terraform_state entity.
type TerraformState struct {
}

// TerraformStateLoadMatch is the typed request payload for TerraformState.LoadTyped.
type TerraformStateLoadMatch struct {
	ProjectId string `json:"project_id"`
	Serial *any `json:"serial,omitempty"`
	StateId *string `json:"state_id,omitempty"`
	Id *string `json:"id,omitempty"`
}

// TerraformStateCreateData is the typed request payload for TerraformState.CreateTyped.
type TerraformStateCreateData struct {
	Name *string `json:"name,omitempty"`
	ProjectId string `json:"project_id"`
	Id *string `json:"id,omitempty"`
}

// TerraformStateRemoveMatch is the typed request payload for TerraformState.RemoveTyped.
type TerraformStateRemoveMatch struct {
	Name *string `json:"name,omitempty"`
	ProjectId string `json:"project_id"`
	Serial *any `json:"serial,omitempty"`
	StateId *string `json:"state_id,omitempty"`
	Id *string `json:"id,omitempty"`
}

// TestReport is the typed data model for the test_report entity.
type TestReport struct {
	ErrorCount *int `json:"error_count,omitempty"`
	FailedCount *int `json:"failed_count,omitempty"`
	Name *string `json:"name,omitempty"`
	SkippedCount *int `json:"skipped_count,omitempty"`
	SuccessCount *int `json:"success_count,omitempty"`
	SuiteError *string `json:"suite_error,omitempty"`
	TestCase *[]any `json:"test_case,omitempty"`
	TotalCount *int `json:"total_count,omitempty"`
	TotalTime *int `json:"total_time,omitempty"`
}

// TestReportListMatch is the typed request payload for TestReport.ListTyped.
type TestReportListMatch struct {
	PipelineId string `json:"pipeline_id"`
	ProjectId string `json:"project_id"`
}

// TestReportSummary is the typed data model for the test_report_summary entity.
type TestReportSummary struct {
	TestSuite *map[string]any `json:"test_suite,omitempty"`
	Total *map[string]any `json:"total,omitempty"`
}

// TestReportSummaryLoadMatch is the typed request payload for TestReportSummary.LoadTyped.
type TestReportSummaryLoadMatch struct {
	PipelineId string `json:"pipeline_id"`
	ProjectId string `json:"project_id"`
}

// Topic is the typed data model for the topic entity.
type Topic struct {
}

// TopicRemoveMatch is the typed request payload for Topic.RemoveTyped.
type TopicRemoveMatch struct {
	Id string `json:"id"`
}

// UnleashApi is the typed data model for the unleash_api entity.
type UnleashApi struct {
}

// UnleashApiLoadMatch is the typed request payload for UnleashApi.LoadTyped.
type UnleashApiLoadMatch struct {
	UnleashId string `json:"unleash_id"`
}

// UsageData is the typed data model for the usage_data entity.
type UsageData struct {
}

// UsageDataLoadMatch is the typed request payload for UsageData.LoadTyped.
type UsageDataLoadMatch struct {
}

// UsageDataCreateData is the typed request payload for UsageData.CreateTyped.
type UsageDataCreateData struct {
}

// User is the typed data model for the user entity.
type User struct {
	AvatarPath *string `json:"avatar_path,omitempty"`
	AvatarUrl *string `json:"avatar_url,omitempty"`
	CustomAttribute *[]any `json:"custom_attribute,omitempty"`
	Id *int `json:"id,omitempty"`
	Locked *bool `json:"locked,omitempty"`
	Name *string `json:"name,omitempty"`
	PublicEmail *string `json:"public_email,omitempty"`
	State *string `json:"state,omitempty"`
	Username *string `json:"username,omitempty"`
	WebUrl *string `json:"web_url,omitempty"`
}

// UserListMatch is the typed request payload for User.ListTyped.
type UserListMatch struct {
	ProjectId string `json:"project_id"`
}

// WebCommit is the typed data model for the web_commit entity.
type WebCommit struct {
}

// WebCommitLoadMatch is the typed request payload for WebCommit.LoadTyped.
type WebCommitLoadMatch struct {
}

// Wiki is the typed data model for the wiki entity.
type Wiki struct {
}

// WikiRemoveMatch is the typed request payload for Wiki.RemoveTyped.
type WikiRemoveMatch struct {
	GroupId *string `json:"group_id,omitempty"`
	Id string `json:"id"`
	ProjectId *string `json:"project_id,omitempty"`
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

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
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

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
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
