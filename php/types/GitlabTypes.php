<?php
declare(strict_types=1);

// Typed models for the Gitlab SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** AccessRequest entity data model. */
class AccessRequest
{
}

/** Request payload for AccessRequest#remove. */
class AccessRequestRemoveMatch
{
    public ?string $group_id = null;
    public string $id;
    public ?string $project_id = null;
}

/** AlertManagement entity data model. */
class AlertManagement
{
}

/** Request payload for AlertManagement#create. */
class AlertManagementCreateData
{
    public string $alert_management_alert_id;
    public string $project_id;
}

/** Request payload for AlertManagement#remove. */
class AlertManagementRemoveMatch
{
    public string $alert_management_alert_id;
    public string $metric_image_id;
    public string $project_id;
}

/** ApiEntitiesAccessRequester entity data model. */
class ApiEntitiesAccessRequester
{
    public ?string $avatar_path = null;
    public ?string $avatar_url = null;
    public ?array $custom_attribute = null;
    public ?int $id = null;
    public ?string $key = null;
    public ?bool $locked = null;
    public ?string $name = null;
    public ?string $public_email = null;
    public ?string $requested_at = null;
    public ?string $state = null;
    public ?string $username = null;
    public ?string $value = null;
    public ?string $web_url = null;
}

/** Request payload for ApiEntitiesAccessRequester#list. */
class ApiEntitiesAccessRequesterListMatch
{
    public ?string $group_id = null;
    public ?string $project_id = null;
}

/** Request payload for ApiEntitiesAccessRequester#create. */
class ApiEntitiesAccessRequesterCreateData
{
    public ?string $group_id = null;
    public ?string $project_id = null;
}

/** Request payload for ApiEntitiesAccessRequester#update. */
class ApiEntitiesAccessRequesterUpdateData
{
    public string $access_request_id;
    public ?string $group_id = null;
    public ?string $project_id = null;
}

/** ApiEntitiesAppearance entity data model. */
class ApiEntitiesAppearance
{
    public ?string $description = null;
    public ?string $email_header_and_footer_enabled = null;
    public ?string $favicon = null;
    public ?string $footer_message = null;
    public ?string $header_logo = null;
    public ?string $header_message = null;
    public ?string $logo = null;
    public ?string $member_guideline = null;
    public ?string $message_background_color = null;
    public ?string $message_font_color = null;
    public ?string $new_project_guideline = null;
    public ?string $profile_image_guideline = null;
    public ?string $pwa_description = null;
    public ?string $pwa_icon = null;
    public ?string $pwa_name = null;
    public ?string $pwa_short_name = null;
    public ?string $title = null;
}

/** Request payload for ApiEntitiesAppearance#load. */
class ApiEntitiesAppearanceLoadMatch
{
    public ?string $description = null;
    public ?string $email_header_and_footer_enabled = null;
    public ?string $favicon = null;
    public ?string $footer_message = null;
    public ?string $header_logo = null;
    public ?string $header_message = null;
    public ?string $logo = null;
    public ?string $member_guideline = null;
    public ?string $message_background_color = null;
    public ?string $message_font_color = null;
    public ?string $new_project_guideline = null;
    public ?string $profile_image_guideline = null;
    public ?string $pwa_description = null;
    public ?string $pwa_icon = null;
    public ?string $pwa_name = null;
    public ?string $pwa_short_name = null;
    public ?string $title = null;
}

/** Request payload for ApiEntitiesAppearance#update. */
class ApiEntitiesAppearanceUpdateData
{
    public ?string $description = null;
    public ?string $email_header_and_footer_enabled = null;
    public ?string $favicon = null;
    public ?string $footer_message = null;
    public ?string $header_logo = null;
    public ?string $header_message = null;
    public ?string $logo = null;
    public ?string $member_guideline = null;
    public ?string $message_background_color = null;
    public ?string $message_font_color = null;
    public ?string $new_project_guideline = null;
    public ?string $profile_image_guideline = null;
    public ?string $pwa_description = null;
    public ?string $pwa_icon = null;
    public ?string $pwa_name = null;
    public ?string $pwa_short_name = null;
    public ?string $title = null;
}

/** ApiEntitiesApplication entity data model. */
class ApiEntitiesApplication
{
    public ?string $application_id = null;
    public ?string $application_name = null;
    public ?string $callback_url = null;
    public ?bool $confidential = null;
    public ?string $id = null;
}

/** Request payload for ApiEntitiesApplication#list. */
class ApiEntitiesApplicationListMatch
{
    public ?string $application_id = null;
    public ?string $application_name = null;
    public ?string $callback_url = null;
    public ?bool $confidential = null;
    public ?string $id = null;
}

/** ApiEntitiesApplicationStatistic entity data model. */
class ApiEntitiesApplicationStatistic
{
    public ?int $active_user = null;
    public ?int $fork = null;
    public ?int $group = null;
    public ?int $issue = null;
    public ?int $merge_request = null;
    public ?int $milestone = null;
    public ?int $note = null;
    public ?int $project = null;
    public ?int $snippet = null;
    public ?int $ssh_key = null;
    public ?int $user = null;
}

/** Request payload for ApiEntitiesApplicationStatistic#load. */
class ApiEntitiesApplicationStatisticLoadMatch
{
    public ?int $active_user = null;
    public ?int $fork = null;
    public ?int $group = null;
    public ?int $issue = null;
    public ?int $merge_request = null;
    public ?int $milestone = null;
    public ?int $note = null;
    public ?int $project = null;
    public ?int $snippet = null;
    public ?int $ssh_key = null;
    public ?int $user = null;
}

/** ApiEntitiesApplicationWithSecret entity data model. */
class ApiEntitiesApplicationWithSecret
{
    public ?string $application_id = null;
    public ?string $application_name = null;
    public ?string $callback_url = null;
    public ?bool $confidential = null;
    public ?string $id = null;
    public ?string $secret = null;
}

/** Request payload for ApiEntitiesApplicationWithSecret#create. */
class ApiEntitiesApplicationWithSecretCreateData
{
    public ?string $application_id = null;
}

/** ApiEntitiesAvatar entity data model. */
class ApiEntitiesAvatar
{
    public ?string $avatar_url = null;
}

/** Request payload for ApiEntitiesAvatar#load. */
class ApiEntitiesAvatarLoadMatch
{
    public ?string $avatar_url = null;
}

/** ApiEntitiesAwardEmoji entity data model. */
class ApiEntitiesAwardEmoji
{
    public ?int $awardable_id = null;
    public ?string $awardable_type = null;
    public ?string $created_at = null;
    public ?int $id = null;
    public ?string $name = null;
    public ?string $updated_at = null;
    public ?string $url = null;
    public ?array $user = null;
}

/** Request payload for ApiEntitiesAwardEmoji#load. */
class ApiEntitiesAwardEmojiLoadMatch
{
    public ?string $epic_id = null;
    public ?string $group_id = null;
    public string $id;
    public ?string $note_id = null;
    public ?string $issue_id = null;
    public ?string $project_id = null;
    public ?string $merge_request_id = null;
    public ?string $snippet_id = null;
}

/** Request payload for ApiEntitiesAwardEmoji#list. */
class ApiEntitiesAwardEmojiListMatch
{
    public ?string $epic_id = null;
    public ?string $group_id = null;
    public ?string $note_id = null;
    public ?string $issue_id = null;
    public ?string $project_id = null;
    public ?string $merge_request_id = null;
    public ?string $snippet_id = null;
}

/** Request payload for ApiEntitiesAwardEmoji#create. */
class ApiEntitiesAwardEmojiCreateData
{
    public ?string $epic_id = null;
    public ?string $group_id = null;
    public ?string $note_id = null;
    public ?string $issue_id = null;
    public ?string $project_id = null;
    public ?string $merge_request_id = null;
    public ?string $snippet_id = null;
}

/** ApiEntitiesBadge entity data model. */
class ApiEntitiesBadge
{
    public ?string $id = null;
    public ?string $image_url = null;
    public ?string $kind = null;
    public ?string $link_url = null;
    public ?string $name = null;
    public ?string $rendered_image_url = null;
    public ?string $rendered_link_url = null;
}

/** Request payload for ApiEntitiesBadge#load. */
class ApiEntitiesBadgeLoadMatch
{
    public ?string $group_id = null;
    public string $id;
    public ?string $project_id = null;
}

/** Request payload for ApiEntitiesBadge#list. */
class ApiEntitiesBadgeListMatch
{
    public ?string $group_id = null;
    public ?string $project_id = null;
}

/** Request payload for ApiEntitiesBadge#create. */
class ApiEntitiesBadgeCreateData
{
    public ?string $group_id = null;
    public ?string $project_id = null;
}

/** Request payload for ApiEntitiesBadge#update. */
class ApiEntitiesBadgeUpdateData
{
    public ?string $group_id = null;
    public string $id;
    public ?string $project_id = null;
}

/** ApiEntitiesBasicBadgeDetail entity data model. */
class ApiEntitiesBasicBadgeDetail
{
    public ?string $image_url = null;
    public ?string $link_url = null;
    public ?string $name = null;
    public ?string $rendered_image_url = null;
    public ?string $rendered_link_url = null;
}

/** Request payload for ApiEntitiesBasicBadgeDetail#load. */
class ApiEntitiesBasicBadgeDetailLoadMatch
{
    public ?string $group_id = null;
    public ?string $project_id = null;
}

/** ApiEntitiesBasicGroupDetail entity data model. */
class ApiEntitiesBasicGroupDetail
{
}

/** Request payload for ApiEntitiesBasicGroupDetail#create. */
class ApiEntitiesBasicGroupDetailCreateData
{
    public string $project_id;
}

/** ApiEntitiesBasicProjectDetail entity data model. */
class ApiEntitiesBasicProjectDetail
{
    public ?string $avatar_url = null;
    public ?string $created_at = null;
    public ?array $custom_attribute = null;
    public ?string $default_branch = null;
    public ?string $description = null;
    public ?int $forks_count = null;
    public ?string $http_url_to_repo = null;
    public ?int $id = null;
    public ?string $last_activity_at = null;
    public ?array $license = null;
    public ?string $license_url = null;
    public ?string $name = null;
    public ?string $name_with_namespace = null;
    public ?array $namespace = null;
    public ?string $path = null;
    public ?string $path_with_namespace = null;
    public ?string $readme_url = null;
    public ?string $repository_storage = null;
    public ?string $ssh_url_to_repo = null;
    public ?int $star_count = null;
    public ?array $tag_list = null;
    public ?array $topic = null;
    public ?string $visibility = null;
    public ?string $web_url = null;
}

/** Request payload for ApiEntitiesBasicProjectDetail#list. */
class ApiEntitiesBasicProjectDetailListMatch
{
    public ?string $user_id = null;
    public ?string $project_id = null;
}

/** Request payload for ApiEntitiesBasicProjectDetail#create. */
class ApiEntitiesBasicProjectDetailCreateData
{
    public string $project_id;
}

/** ApiEntitiesBasicRef entity data model. */
class ApiEntitiesBasicRef
{
    public ?string $name = null;
    public ?string $type = null;
}

/** Request payload for ApiEntitiesBasicRef#list. */
class ApiEntitiesBasicRefListMatch
{
    public string $project_id;
    public mixed $sha;
}

/** ApiEntitiesBasicSuccess entity data model. */
class ApiEntitiesBasicSuccess
{
}

/** Request payload for ApiEntitiesBasicSuccess#create. */
class ApiEntitiesBasicSuccessCreateData
{
}

/** ApiEntitiesBatchedBackgroundMigration entity data model. */
class ApiEntitiesBatchedBackgroundMigration
{
    public ?string $column_name = null;
    public ?string $created_at = null;
    public ?string $id = null;
    public ?string $job_class_name = null;
    public ?float $progress = null;
    public ?string $status = null;
    public ?string $table_name = null;
}

/** Request payload for ApiEntitiesBatchedBackgroundMigration#load. */
class ApiEntitiesBatchedBackgroundMigrationLoadMatch
{
    public string $id;
}

/** Request payload for ApiEntitiesBatchedBackgroundMigration#list. */
class ApiEntitiesBatchedBackgroundMigrationListMatch
{
    public ?string $column_name = null;
    public ?string $created_at = null;
    public ?string $id = null;
    public ?string $job_class_name = null;
    public ?float $progress = null;
    public ?string $status = null;
    public ?string $table_name = null;
}

/** Request payload for ApiEntitiesBatchedBackgroundMigration#update. */
class ApiEntitiesBatchedBackgroundMigrationUpdateData
{
    public string $batched_background_migration_id;
}

/** ApiEntitiesBranch entity data model. */
class ApiEntitiesBranch
{
    public ?bool $can_push = null;
    public ?array $commit = null;
    public ?bool $default = null;
    public ?bool $developers_can_merge = null;
    public ?bool $developers_can_push = null;
    public ?bool $merged = null;
    public ?string $name = null;
    public ?bool $protected = null;
    public ?string $web_url = null;
}

/** Request payload for ApiEntitiesBranch#load. */
class ApiEntitiesBranchLoadMatch
{
    public string $id;
    public string $project_id;
}

/** Request payload for ApiEntitiesBranch#list. */
class ApiEntitiesBranchListMatch
{
    public string $project_id;
}

/** Request payload for ApiEntitiesBranch#create. */
class ApiEntitiesBranchCreateData
{
    public string $project_id;
}

/** Request payload for ApiEntitiesBranch#update. */
class ApiEntitiesBranchUpdateData
{
    public string $branch_id;
    public string $project_id;
}

/** ApiEntitiesBulkImport entity data model. */
class ApiEntitiesBulkImport
{
    public ?int $bulk_import_id = null;
    public ?string $created_at = null;
    public ?string $destination_full_path = null;
    public ?string $destination_name = null;
    public ?string $destination_namespace = null;
    public ?string $destination_slug = null;
    public ?string $entity_type = null;
    public ?array $failure = null;
    public ?bool $has_failure = null;
    public ?int $id = null;
    public ?bool $migrate_membership = null;
    public ?bool $migrate_project = null;
    public ?int $namespace_id = null;
    public ?int $parent_id = null;
    public ?int $project_id = null;
    public ?string $source_full_path = null;
    public ?string $source_type = null;
    public ?string $source_url = null;
    public ?array $stat = null;
    public ?string $status = null;
    public ?string $updated_at = null;
}

/** Request payload for ApiEntitiesBulkImport#load. */
class ApiEntitiesBulkImportLoadMatch
{
    public ?string $bulk_import_id = null;
    public ?string $entity_id = null;
    public ?string $id = null;
}

/** Request payload for ApiEntitiesBulkImport#list. */
class ApiEntitiesBulkImportListMatch
{
    public ?string $bulk_import_id = null;
}

/** Request payload for ApiEntitiesBulkImport#create. */
class ApiEntitiesBulkImportCreateData
{
    public ?string $bulk_import_id = null;
}

/** ApiEntitiesBulkImportsEntityFailure entity data model. */
class ApiEntitiesBulkImportsEntityFailure
{
    public ?string $correlation_id_value = null;
    public ?string $exception_class = null;
    public ?string $exception_message = null;
    public ?string $relation = null;
    public ?string $source_title = null;
    public ?string $source_url = null;
}

/** Request payload for ApiEntitiesBulkImportsEntityFailure#load. */
class ApiEntitiesBulkImportsEntityFailureLoadMatch
{
    public string $bulk_import_id;
    public string $entity_id;
}

/** ApiEntitiesBulkImportsExportStatus entity data model. */
class ApiEntitiesBulkImportsExportStatus
{
    public ?array $batch = null;
    public ?bool $batched = null;
    public ?int $batches_count = null;
    public ?string $error = null;
    public ?string $relation = null;
    public ?string $status = null;
    public ?int $total_objects_count = null;
    public ?string $updated_at = null;
}

/** Request payload for ApiEntitiesBulkImportsExportStatus#list. */
class ApiEntitiesBulkImportsExportStatusListMatch
{
    public ?string $group_id = null;
    public ?string $project_id = null;
}

/** ApiEntitiesChangelog entity data model. */
class ApiEntitiesChangelog
{
    public ?string $note = null;
}

/** Request payload for ApiEntitiesChangelog#load. */
class ApiEntitiesChangelogLoadMatch
{
    public string $project_id;
}

/** ApiEntitiesCiBridge entity data model. */
class ApiEntitiesCiBridge
{
    public ?bool $allow_failure = null;
    public ?array $commit = null;
    public ?float $coverage = null;
    public ?string $created_at = null;
    public ?array $downstream_pipeline = null;
    public ?float $duration = null;
    public ?string $erased_at = null;
    public ?string $failure_reason = null;
    public ?string $finished_at = null;
    public ?int $id = null;
    public ?string $name = null;
    public ?array $pipeline = null;
    public ?array $project = null;
    public ?float $queued_duration = null;
    public ?string $ref = null;
    public ?string $stage = null;
    public ?string $started_at = null;
    public ?string $status = null;
    public ?bool $tag = null;
    public ?array $user = null;
    public ?string $web_url = null;
}

/** Request payload for ApiEntitiesCiBridge#list. */
class ApiEntitiesCiBridgeListMatch
{
    public string $pipeline_id;
    public string $project_id;
}

/** ApiEntitiesCiCatalogResourcesVersion entity data model. */
class ApiEntitiesCiCatalogResourcesVersion
{
}

/** Request payload for ApiEntitiesCiCatalogResourcesVersion#create. */
class ApiEntitiesCiCatalogResourcesVersionCreateData
{
    public string $project_id;
}

/** ApiEntitiesCiJob entity data model. */
class ApiEntitiesCiJob
{
    public ?bool $allow_failure = null;
    public ?bool $archived = null;
    public ?array $artifact = null;
    public ?string $artifacts_expire_at = null;
    public ?array $artifacts_file = null;
    public ?array $commit = null;
    public ?float $coverage = null;
    public ?string $created_at = null;
    public ?float $duration = null;
    public ?string $erased_at = null;
    public ?string $failure_reason = null;
    public ?string $file_format = null;
    public ?string $file_type = null;
    public ?string $filename = null;
    public ?string $finished_at = null;
    public ?int $id = null;
    public ?string $name = null;
    public ?array $pipeline = null;
    public ?array $project = null;
    public ?float $queued_duration = null;
    public ?string $ref = null;
    public ?array $runner = null;
    public ?array $runner_manager = null;
    public ?int $size = null;
    public ?string $stage = null;
    public ?string $started_at = null;
    public ?string $status = null;
    public ?bool $tag = null;
    public ?array $tag_list = null;
    public ?array $user = null;
    public ?string $web_url = null;
}

/** Request payload for ApiEntitiesCiJob#load. */
class ApiEntitiesCiJobLoadMatch
{
    public string $id;
    public string $project_id;
}

/** Request payload for ApiEntitiesCiJob#list. */
class ApiEntitiesCiJobListMatch
{
    public ?string $pipeline_id = null;
    public ?string $project_id = null;
    public ?string $job_id = null;
}

/** Request payload for ApiEntitiesCiJob#create. */
class ApiEntitiesCiJobCreateData
{
    public string $job_id;
    public string $project_id;
}

/** ApiEntitiesCiJobBasic entity data model. */
class ApiEntitiesCiJobBasic
{
    public ?bool $allow_failure = null;
    public ?array $commit = null;
    public ?float $coverage = null;
    public ?string $created_at = null;
    public ?float $duration = null;
    public ?string $erased_at = null;
    public ?string $failure_reason = null;
    public ?string $finished_at = null;
    public ?int $id = null;
    public ?string $name = null;
    public ?array $pipeline = null;
    public ?array $project = null;
    public ?float $queued_duration = null;
    public ?string $ref = null;
    public ?string $stage = null;
    public ?string $started_at = null;
    public ?string $status = null;
    public ?bool $tag = null;
    public ?array $user = null;
    public ?string $web_url = null;
}

/** Request payload for ApiEntitiesCiJobBasic#list. */
class ApiEntitiesCiJobBasicListMatch
{
    public string $key;
    public string $project_id;
}

/** Request payload for ApiEntitiesCiJobBasic#create. */
class ApiEntitiesCiJobBasicCreateData
{
    public string $job_id;
    public string $project_id;
}

/** ApiEntitiesCiJobBasicWithProject entity data model. */
class ApiEntitiesCiJobBasicWithProject
{
    public ?bool $allow_failure = null;
    public ?array $commit = null;
    public ?float $coverage = null;
    public ?string $created_at = null;
    public ?float $duration = null;
    public ?string $erased_at = null;
    public ?string $failure_reason = null;
    public ?string $finished_at = null;
    public ?int $id = null;
    public ?string $name = null;
    public ?array $pipeline = null;
    public ?array $project = null;
    public ?float $queued_duration = null;
    public ?string $ref = null;
    public ?string $stage = null;
    public ?string $started_at = null;
    public ?string $status = null;
    public ?bool $tag = null;
    public ?array $user = null;
    public ?string $web_url = null;
}

/** Request payload for ApiEntitiesCiJobBasicWithProject#load. */
class ApiEntitiesCiJobBasicWithProjectLoadMatch
{
    public string $runner_id;
}

/** ApiEntitiesCiLintResult entity data model. */
class ApiEntitiesCiLintResult
{
    public ?string $blob = null;
    public ?string $context_project = null;
    public ?string $context_sha = null;
    public ?array $error = null;
    public ?array $extra = null;
    public ?array $include = null;
    public ?array $job = null;
    public ?string $location = null;
    public ?string $merged_yaml = null;
    public ?string $raw = null;
    public ?string $type = null;
    public ?bool $valid = null;
    public ?array $warning = null;
}

/** Request payload for ApiEntitiesCiLintResult#list. */
class ApiEntitiesCiLintResultListMatch
{
    public string $project_id;
}

/** Request payload for ApiEntitiesCiLintResult#create. */
class ApiEntitiesCiLintResultCreateData
{
    public string $project_id;
}

/** ApiEntitiesCiPipeline entity data model. */
class ApiEntitiesCiPipeline
{
}

/** Request payload for ApiEntitiesCiPipeline#create. */
class ApiEntitiesCiPipelineCreateData
{
    public ?string $merge_request_id = null;
    public string $project_id;
    public ?string $ref_id = null;
    public ?string $pipeline_id = null;
}

/** ApiEntitiesCiPipelineBasic entity data model. */
class ApiEntitiesCiPipelineBasic
{
    public ?string $created_at = null;
    public ?int $id = null;
    public ?int $iid = null;
    public ?int $project_id = null;
    public ?string $ref = null;
    public ?string $sha = null;
    public ?string $source = null;
    public ?string $status = null;
    public ?string $updated_at = null;
    public ?string $web_url = null;
}

/** Request payload for ApiEntitiesCiPipelineBasic#load. */
class ApiEntitiesCiPipelineBasicLoadMatch
{
    public string $merge_request_id;
    public string $project_id;
}

/** Request payload for ApiEntitiesCiPipelineBasic#list. */
class ApiEntitiesCiPipelineBasicListMatch
{
    public string $project_id;
    public ?string $pipeline_schedule_id = null;
}

/** ApiEntitiesCiPipelineSchedule entity data model. */
class ApiEntitiesCiPipelineSchedule
{
    public ?bool $active = null;
    public ?string $created_at = null;
    public ?string $cron = null;
    public ?string $cron_timezone = null;
    public ?string $description = null;
    public ?int $id = null;
    public ?array $input = null;
    public ?string $next_run_at = null;
    public ?array $owner = null;
    public ?string $ref = null;
    public ?string $updated_at = null;
}

/** Request payload for ApiEntitiesCiPipelineSchedule#list. */
class ApiEntitiesCiPipelineScheduleListMatch
{
    public string $project_id;
}

/** ApiEntitiesCiPipelineScheduleDetail entity data model. */
class ApiEntitiesCiPipelineScheduleDetail
{
    public ?bool $active = null;
    public ?string $created_at = null;
    public ?string $cron = null;
    public ?string $cron_timezone = null;
    public ?string $description = null;
    public ?int $id = null;
    public ?array $input = null;
    public ?array $last_pipeline = null;
    public ?string $next_run_at = null;
    public ?array $owner = null;
    public ?string $ref = null;
    public ?string $updated_at = null;
    public ?array $variable = null;
}

/** Request payload for ApiEntitiesCiPipelineScheduleDetail#load. */
class ApiEntitiesCiPipelineScheduleDetailLoadMatch
{
    public string $pipeline_schedule_id;
    public string $project_id;
}

/** Request payload for ApiEntitiesCiPipelineScheduleDetail#create. */
class ApiEntitiesCiPipelineScheduleDetailCreateData
{
    public ?string $pipeline_schedule_id = null;
    public string $project_id;
}

/** Request payload for ApiEntitiesCiPipelineScheduleDetail#update. */
class ApiEntitiesCiPipelineScheduleDetailUpdateData
{
    public string $pipeline_schedule_id;
    public string $project_id;
}

/** ApiEntitiesCiResetTokenResult entity data model. */
class ApiEntitiesCiResetTokenResult
{
}

/** Request payload for ApiEntitiesCiResetTokenResult#create. */
class ApiEntitiesCiResetTokenResultCreateData
{
    public ?string $group_id = null;
    public ?string $project_id = null;
    public ?string $runner_id = null;
}

/** ApiEntitiesCiResourceGroup entity data model. */
class ApiEntitiesCiResourceGroup
{
    public ?string $created_at = null;
    public ?int $id = null;
    public ?string $key = null;
    public ?string $process_mode = null;
    public ?string $updated_at = null;
}

/** Request payload for ApiEntitiesCiResourceGroup#load. */
class ApiEntitiesCiResourceGroupLoadMatch
{
    public string $id;
    public string $project_id;
}

/** Request payload for ApiEntitiesCiResourceGroup#list. */
class ApiEntitiesCiResourceGroupListMatch
{
    public string $project_id;
}

/** Request payload for ApiEntitiesCiResourceGroup#update. */
class ApiEntitiesCiResourceGroupUpdateData
{
    public string $id;
    public string $project_id;
}

/** ApiEntitiesCiRunner entity data model. */
class ApiEntitiesCiRunner
{
    public ?bool $active = null;
    public ?string $created_at = null;
    public ?array $created_by = null;
    public ?string $description = null;
    public ?int $id = null;
    public ?string $ip_address = null;
    public ?bool $is_shared = null;
    public ?string $job_execution_status = null;
    public ?string $name = null;
    public ?bool $online = null;
    public ?bool $paused = null;
    public ?string $runner_type = null;
    public ?string $status = null;
}

/** Request payload for ApiEntitiesCiRunner#load. */
class ApiEntitiesCiRunnerLoadMatch
{
    public ?string $project_id = null;
    public ?string $group_id = null;
}

/** Request payload for ApiEntitiesCiRunner#create. */
class ApiEntitiesCiRunnerCreateData
{
    public string $project_id;
}

/** ApiEntitiesCiRunnerDetail entity data model. */
class ApiEntitiesCiRunnerDetail
{
    public ?string $access_level = null;
    public ?bool $active = null;
    public ?string $architecture = null;
    public ?string $contacted_at = null;
    public ?string $created_at = null;
    public ?array $created_by = null;
    public ?string $description = null;
    public ?array $group = null;
    public ?int $id = null;
    public ?string $ip_address = null;
    public ?bool $is_shared = null;
    public ?string $job_execution_status = null;
    public ?bool $locked = null;
    public ?string $maintenance_note = null;
    public ?string $maximum_timeout = null;
    public ?string $name = null;
    public ?bool $online = null;
    public ?bool $paused = null;
    public ?string $platform = null;
    public ?array $project = null;
    public ?string $revision = null;
    public ?string $run_untagged = null;
    public ?string $runner_type = null;
    public ?string $status = null;
    public ?string $tag_list = null;
    public ?string $version = null;
}

/** Request payload for ApiEntitiesCiRunnerDetail#load. */
class ApiEntitiesCiRunnerDetailLoadMatch
{
    public string $id;
}

/** Request payload for ApiEntitiesCiRunnerDetail#update. */
class ApiEntitiesCiRunnerDetailUpdateData
{
    public string $id;
}

/** ApiEntitiesCiRunnerManager entity data model. */
class ApiEntitiesCiRunnerManager
{
    public ?string $architecture = null;
    public ?string $contacted_at = null;
    public ?string $created_at = null;
    public ?int $id = null;
    public ?string $ip_address = null;
    public ?string $job_execution_status = null;
    public ?string $platform = null;
    public ?string $revision = null;
    public ?string $status = null;
    public ?string $system_id = null;
    public ?string $version = null;
}

/** Request payload for ApiEntitiesCiRunnerManager#load. */
class ApiEntitiesCiRunnerManagerLoadMatch
{
    public string $runner_id;
}

/** ApiEntitiesCiRunnerRegistrationDetail entity data model. */
class ApiEntitiesCiRunnerRegistrationDetail
{
}

/** Request payload for ApiEntitiesCiRunnerRegistrationDetail#create. */
class ApiEntitiesCiRunnerRegistrationDetailCreateData
{
}

/** ApiEntitiesCiSecureFile entity data model. */
class ApiEntitiesCiSecureFile
{
    public ?string $checksum = null;
    public ?string $checksum_algorithm = null;
    public ?string $created_at = null;
    public ?string $expires_at = null;
    public ?string $file_extension = null;
    public ?int $id = null;
    public ?array $metadata = null;
    public ?string $name = null;
}

/** Request payload for ApiEntitiesCiSecureFile#load. */
class ApiEntitiesCiSecureFileLoadMatch
{
    public string $project_id;
    public ?string $id = null;
}

/** Request payload for ApiEntitiesCiSecureFile#create. */
class ApiEntitiesCiSecureFileCreateData
{
    public string $project_id;
}

/** ApiEntitiesCiVariable entity data model. */
class ApiEntitiesCiVariable
{
    public ?string $description = null;
    public ?string $environment_scope = null;
    public ?bool $hidden = null;
    public ?string $key = null;
    public ?bool $masked = null;
    public ?bool $protected = null;
    public ?bool $raw = null;
    public ?string $value = null;
    public ?string $variable_type = null;
}

/** Request payload for ApiEntitiesCiVariable#load. */
class ApiEntitiesCiVariableLoadMatch
{
    public ?string $id = null;
    public ?string $project_id = null;
    public ?string $group_id = null;
}

/** Request payload for ApiEntitiesCiVariable#list. */
class ApiEntitiesCiVariableListMatch
{
    public string $pipeline_id;
    public string $project_id;
}

/** Request payload for ApiEntitiesCiVariable#create. */
class ApiEntitiesCiVariableCreateData
{
    public ?string $pipeline_schedule_id = null;
    public ?string $project_id = null;
    public ?string $group_id = null;
}

/** Request payload for ApiEntitiesCiVariable#update. */
class ApiEntitiesCiVariableUpdateData
{
    public string $id;
    public ?string $pipeline_schedule_id = null;
    public ?string $project_id = null;
    public ?string $group_id = null;
}

/** ApiEntitiesCluster entity data model. */
class ApiEntitiesCluster
{
    public ?string $cluster_type = null;
    public ?string $created_at = null;
    public ?string $domain = null;
    public ?bool $enabled = null;
    public ?string $environment_scope = null;
    public ?string $id = null;
    public ?string $managed = null;
    public ?array $management_project = null;
    public ?string $name = null;
    public ?string $namespace_per_environment = null;
    public ?array $platform_kubernete = null;
    public ?string $platform_type = null;
    public ?array $provider_gcp = null;
    public ?string $provider_type = null;
    public ?array $user = null;
}

/** Request payload for ApiEntitiesCluster#load. */
class ApiEntitiesClusterLoadMatch
{
    public string $id;
}

/** Request payload for ApiEntitiesCluster#list. */
class ApiEntitiesClusterListMatch
{
    public ?string $group_id = null;
    public ?string $project_id = null;
}

/** Request payload for ApiEntitiesCluster#create. */
class ApiEntitiesClusterCreateData
{
    public ?string $cluster_type = null;
    public ?string $created_at = null;
    public ?string $domain = null;
    public ?bool $enabled = null;
    public ?string $environment_scope = null;
    public ?string $id = null;
    public ?string $managed = null;
    public ?array $management_project = null;
    public ?string $name = null;
    public ?string $namespace_per_environment = null;
    public ?array $platform_kubernete = null;
    public ?string $platform_type = null;
    public ?array $provider_gcp = null;
    public ?string $provider_type = null;
    public ?array $user = null;
}

/** Request payload for ApiEntitiesCluster#update. */
class ApiEntitiesClusterUpdateData
{
    public string $id;
}

/** ApiEntitiesClusterGroup entity data model. */
class ApiEntitiesClusterGroup
{
    public ?string $cluster_type = null;
    public ?string $created_at = null;
    public ?string $domain = null;
    public ?bool $enabled = null;
    public ?string $environment_scope = null;
    public ?array $group = null;
    public ?string $id = null;
    public ?string $managed = null;
    public ?array $management_project = null;
    public ?string $name = null;
    public ?string $namespace_per_environment = null;
    public ?array $platform_kubernete = null;
    public ?string $platform_type = null;
    public ?array $provider_gcp = null;
    public ?string $provider_type = null;
    public ?array $user = null;
}

/** Request payload for ApiEntitiesClusterGroup#load. */
class ApiEntitiesClusterGroupLoadMatch
{
    public string $cluster_id;
    public string $group_id;
}

/** Request payload for ApiEntitiesClusterGroup#create. */
class ApiEntitiesClusterGroupCreateData
{
    public string $group_id;
}

/** Request payload for ApiEntitiesClusterGroup#update. */
class ApiEntitiesClusterGroupUpdateData
{
    public string $cluster_id;
    public string $group_id;
}

/** ApiEntitiesClusterProject entity data model. */
class ApiEntitiesClusterProject
{
    public ?string $cluster_type = null;
    public ?string $created_at = null;
    public ?string $domain = null;
    public ?bool $enabled = null;
    public ?string $environment_scope = null;
    public ?string $id = null;
    public ?string $managed = null;
    public ?array $management_project = null;
    public ?string $name = null;
    public ?string $namespace_per_environment = null;
    public ?array $platform_kubernete = null;
    public ?string $platform_type = null;
    public ?array $project = null;
    public ?array $provider_gcp = null;
    public ?string $provider_type = null;
    public ?array $user = null;
}

/** Request payload for ApiEntitiesClusterProject#load. */
class ApiEntitiesClusterProjectLoadMatch
{
    public string $cluster_id;
    public string $project_id;
}

/** Request payload for ApiEntitiesClusterProject#create. */
class ApiEntitiesClusterProjectCreateData
{
    public string $project_id;
}

/** Request payload for ApiEntitiesClusterProject#update. */
class ApiEntitiesClusterProjectUpdateData
{
    public string $cluster_id;
    public string $project_id;
}

/** ApiEntitiesClustersAgent entity data model. */
class ApiEntitiesClustersAgent
{
    public ?array $config_project = null;
    public ?string $created_at = null;
    public ?string $created_by_user_id = null;
    public ?string $id = null;
    public ?bool $is_receptive = null;
    public ?string $name = null;
}

/** Request payload for ApiEntitiesClustersAgent#load. */
class ApiEntitiesClustersAgentLoadMatch
{
    public string $project_id;
    public ?string $agent_id = null;
}

/** Request payload for ApiEntitiesClustersAgent#create. */
class ApiEntitiesClustersAgentCreateData
{
    public string $project_id;
}

/** ApiEntitiesClustersAgentToken entity data model. */
class ApiEntitiesClustersAgentToken
{
    public ?string $agent_id = null;
    public ?string $created_at = null;
    public ?string $created_by_user_id = null;
    public ?string $description = null;
    public ?string $id = null;
    public ?string $last_used_at = null;
    public ?string $name = null;
    public ?string $status = null;
}

/** Request payload for ApiEntitiesClustersAgentToken#load. */
class ApiEntitiesClustersAgentTokenLoadMatch
{
    public string $cluster_agent_id;
    public string $id;
    public string $project_id;
}

/** ApiEntitiesClustersAgentTokenBasic entity data model. */
class ApiEntitiesClustersAgentTokenBasic
{
    public ?string $agent_id = null;
    public ?string $created_at = null;
    public ?string $created_by_user_id = null;
    public ?string $description = null;
    public ?string $id = null;
    public ?string $name = null;
    public ?string $status = null;
}

/** Request payload for ApiEntitiesClustersAgentTokenBasic#load. */
class ApiEntitiesClustersAgentTokenBasicLoadMatch
{
    public string $cluster_agent_id;
    public string $project_id;
}

/** ApiEntitiesClustersAgentTokenWithToken entity data model. */
class ApiEntitiesClustersAgentTokenWithToken
{
}

/** Request payload for ApiEntitiesClustersAgentTokenWithToken#create. */
class ApiEntitiesClustersAgentTokenWithTokenCreateData
{
    public string $cluster_agent_id;
    public string $project_id;
}

/** ApiEntitiesCommit entity data model. */
class ApiEntitiesCommit
{
    public ?string $author_email = null;
    public ?string $author_name = null;
    public ?string $authored_date = null;
    public ?string $committed_date = null;
    public ?string $committer_email = null;
    public ?string $committer_name = null;
    public ?string $created_at = null;
    public ?array $extended_trailer = null;
    public ?string $id = null;
    public ?string $message = null;
    public ?array $parent_id = null;
    public ?string $short_id = null;
    public ?string $title = null;
    public ?array $trailer = null;
    public ?string $web_url = null;
}

/** Request payload for ApiEntitiesCommit#list. */
class ApiEntitiesCommitListMatch
{
    public string $project_id;
    public ?string $merge_request_id = null;
}

/** Request payload for ApiEntitiesCommit#create. */
class ApiEntitiesCommitCreateData
{
    public ?string $merge_request_id = null;
    public string $project_id;
    public mixed $sha = null;
}

/** ApiEntitiesCommitDetail entity data model. */
class ApiEntitiesCommitDetail
{
    public ?string $author_email = null;
    public ?string $author_name = null;
    public ?string $authored_date = null;
    public ?string $committed_date = null;
    public ?string $committer_email = null;
    public ?string $committer_name = null;
    public ?string $created_at = null;
    public ?array $extended_trailer = null;
    public ?string $id = null;
    public ?array $last_pipeline = null;
    public ?string $message = null;
    public ?array $parent_id = null;
    public ?int $project_id = null;
    public ?string $short_id = null;
    public ?array $stat = null;
    public ?string $status = null;
    public ?string $title = null;
    public ?array $trailer = null;
    public ?string $web_url = null;
}

/** Request payload for ApiEntitiesCommitDetail#load. */
class ApiEntitiesCommitDetailLoadMatch
{
    public string $project_id;
    public mixed $sha;
}

/** Request payload for ApiEntitiesCommitDetail#create. */
class ApiEntitiesCommitDetailCreateData
{
    public string $project_id;
}

/** Request payload for ApiEntitiesCommitDetail#update. */
class ApiEntitiesCommitDetailUpdateData
{
    public string $project_id;
    public mixed $submodule;
}

/** ApiEntitiesCommitNote entity data model. */
class ApiEntitiesCommitNote
{
    public ?array $author = null;
    public ?string $created_at = null;
    public ?int $line = null;
    public ?string $line_type = null;
    public ?string $note = null;
    public ?string $path = null;
}

/** Request payload for ApiEntitiesCommitNote#list. */
class ApiEntitiesCommitNoteListMatch
{
    public string $project_id;
    public mixed $sha;
}

/** Request payload for ApiEntitiesCommitNote#create. */
class ApiEntitiesCommitNoteCreateData
{
    public string $project_id;
    public mixed $sha;
}

/** ApiEntitiesCommitSequence entity data model. */
class ApiEntitiesCommitSequence
{
    public ?int $count = null;
}

/** Request payload for ApiEntitiesCommitSequence#load. */
class ApiEntitiesCommitSequenceLoadMatch
{
    public string $project_id;
    public mixed $sha;
}

/** ApiEntitiesCommitSignature entity data model. */
class ApiEntitiesCommitSignature
{
    public ?string $commit_source = null;
    public ?string $signature = null;
    public ?string $signature_type = null;
}

/** Request payload for ApiEntitiesCommitSignature#load. */
class ApiEntitiesCommitSignatureLoadMatch
{
    public string $project_id;
    public mixed $sha;
}

/** ApiEntitiesCommitStatus entity data model. */
class ApiEntitiesCommitStatus
{
    public ?bool $allow_failure = null;
    public ?array $author = null;
    public ?float $coverage = null;
    public ?string $created_at = null;
    public ?string $description = null;
    public ?string $finished_at = null;
    public ?int $id = null;
    public ?string $name = null;
    public ?int $pipeline_id = null;
    public ?string $ref = null;
    public ?string $sha = null;
    public ?string $started_at = null;
    public ?string $status = null;
    public ?string $target_url = null;
}

/** Request payload for ApiEntitiesCommitStatus#list. */
class ApiEntitiesCommitStatusListMatch
{
    public string $project_id;
    public mixed $sha;
}

/** Request payload for ApiEntitiesCommitStatus#create. */
class ApiEntitiesCommitStatusCreateData
{
    public string $id;
    public string $project_id;
}

/** ApiEntitiesCompare entity data model. */
class ApiEntitiesCompare
{
    public ?array $commit = null;
    public ?bool $compare_same_ref = null;
    public ?bool $compare_timeout = null;
    public ?array $diff = null;
    public ?string $web_url = null;
}

/** Request payload for ApiEntitiesCompare#list. */
class ApiEntitiesCompareListMatch
{
    public string $project_id;
}

/** ApiEntitiesContainerRegistryRepository entity data model. */
class ApiEntitiesContainerRegistryRepository
{
    public ?string $cleanup_policy_started_at = null;
    public ?string $created_at = null;
    public ?string $delete_api_path = null;
    public ?int $id = null;
    public ?string $location = null;
    public ?string $name = null;
    public ?string $path = null;
    public ?int $project_id = null;
    public ?int $size = null;
    public ?string $status = null;
    public ?array $tag = null;
    public ?int $tags_count = null;
}

/** Request payload for ApiEntitiesContainerRegistryRepository#load. */
class ApiEntitiesContainerRegistryRepositoryLoadMatch
{
    public string $id;
}

/** Request payload for ApiEntitiesContainerRegistryRepository#list. */
class ApiEntitiesContainerRegistryRepositoryListMatch
{
    public ?string $project_id = null;
    public ?string $group_id = null;
}

/** ApiEntitiesContainerRegistryTag entity data model. */
class ApiEntitiesContainerRegistryTag
{
    public ?string $location = null;
    public ?string $name = null;
    public ?string $path = null;
}

/** Request payload for ApiEntitiesContainerRegistryTag#list. */
class ApiEntitiesContainerRegistryTagListMatch
{
    public string $project_id;
    public string $repository_id;
}

/** ApiEntitiesContainerRegistryTagDetail entity data model. */
class ApiEntitiesContainerRegistryTagDetail
{
    public ?string $created_at = null;
    public ?string $digest = null;
    public ?string $location = null;
    public ?string $name = null;
    public ?string $path = null;
    public ?string $revision = null;
    public ?string $short_revision = null;
    public ?int $total_size = null;
}

/** Request payload for ApiEntitiesContainerRegistryTagDetail#load. */
class ApiEntitiesContainerRegistryTagDetailLoadMatch
{
    public string $project_id;
    public string $repository_id;
    public mixed $tag_name;
}

/** ApiEntitiesContributor entity data model. */
class ApiEntitiesContributor
{
    public ?int $addition = null;
    public ?int $commit = null;
    public ?int $deletion = null;
    public ?string $email = null;
    public ?string $name = null;
}

/** Request payload for ApiEntitiesContributor#load. */
class ApiEntitiesContributorLoadMatch
{
    public string $project_id;
}

/** ApiEntitiesDeployKey entity data model. */
class ApiEntitiesDeployKey
{
    public ?string $created_at = null;
    public ?string $expires_at = null;
    public ?string $fingerprint = null;
    public ?string $fingerprint_sha256 = null;
    public ?int $id = null;
    public ?string $key = null;
    public ?string $last_used_at = null;
    public ?array $projects_with_readonly_access = null;
    public ?array $projects_with_write_access = null;
    public ?string $title = null;
    public ?string $usage_type = null;
}

/** Request payload for ApiEntitiesDeployKey#list. */
class ApiEntitiesDeployKeyListMatch
{
    public ?string $created_at = null;
    public ?string $expires_at = null;
    public ?string $fingerprint = null;
    public ?string $fingerprint_sha256 = null;
    public ?int $id = null;
    public ?string $key = null;
    public ?string $last_used_at = null;
    public ?array $projects_with_readonly_access = null;
    public ?array $projects_with_write_access = null;
    public ?string $title = null;
    public ?string $usage_type = null;
}

/** Request payload for ApiEntitiesDeployKey#create. */
class ApiEntitiesDeployKeyCreateData
{
    public ?string $deploy_key_id = null;
    public ?string $project_id = null;
}

/** Request payload for ApiEntitiesDeployKey#update. */
class ApiEntitiesDeployKeyUpdateData
{
    public string $id;
    public string $project_id;
}

/** ApiEntitiesDeployKeysProject entity data model. */
class ApiEntitiesDeployKeysProject
{
    public ?bool $can_push = null;
    public ?string $created_at = null;
    public ?string $expires_at = null;
    public ?string $fingerprint = null;
    public ?string $fingerprint_sha256 = null;
    public ?int $id = null;
    public ?string $key = null;
    public ?string $last_used_at = null;
    public ?array $projects_with_readonly_access = null;
    public ?array $projects_with_write_access = null;
    public ?string $title = null;
    public ?string $usage_type = null;
}

/** Request payload for ApiEntitiesDeployKeysProject#load. */
class ApiEntitiesDeployKeysProjectLoadMatch
{
    public string $key_id;
    public string $project_id;
}

/** Request payload for ApiEntitiesDeployKeysProject#list. */
class ApiEntitiesDeployKeysProjectListMatch
{
    public string $project_id;
}

/** Request payload for ApiEntitiesDeployKeysProject#create. */
class ApiEntitiesDeployKeysProjectCreateData
{
    public string $project_id;
}

/** ApiEntitiesDeployToken entity data model. */
class ApiEntitiesDeployToken
{
    public ?bool $expired = null;
    public ?string $expires_at = null;
    public ?int $id = null;
    public ?string $name = null;
    public ?bool $revoked = null;
    public ?array $scope = null;
    public ?string $username = null;
}

/** Request payload for ApiEntitiesDeployToken#load. */
class ApiEntitiesDeployTokenLoadMatch
{
    public ?string $group_id = null;
    public string $id;
    public ?string $project_id = null;
}

/** Request payload for ApiEntitiesDeployToken#list. */
class ApiEntitiesDeployTokenListMatch
{
    public ?string $group_id = null;
    public ?string $project_id = null;
}

/** ApiEntitiesDeployTokenWithToken entity data model. */
class ApiEntitiesDeployTokenWithToken
{
}

/** Request payload for ApiEntitiesDeployTokenWithToken#create. */
class ApiEntitiesDeployTokenWithTokenCreateData
{
    public ?string $group_id = null;
    public ?string $project_id = null;
}

/** ApiEntitiesDeployment entity data model. */
class ApiEntitiesDeployment
{
    public ?string $created_at = null;
    public ?array $deployable = null;
    public ?array $environment = null;
    public ?int $id = null;
    public ?int $iid = null;
    public ?string $ref = null;
    public ?string $sha = null;
    public ?string $status = null;
    public ?string $updated_at = null;
    public ?array $user = null;
}

/** Request payload for ApiEntitiesDeployment#list. */
class ApiEntitiesDeploymentListMatch
{
    public string $project_id;
}

/** ApiEntitiesDeploymentExtended entity data model. */
class ApiEntitiesDeploymentExtended
{
    public ?array $approval = null;
    public ?array $approval_summary = null;
    public ?string $created_at = null;
    public ?array $deployable = null;
    public ?array $environment = null;
    public ?int $id = null;
    public ?int $iid = null;
    public ?int $pending_approval_count = null;
    public ?string $ref = null;
    public ?string $sha = null;
    public ?string $status = null;
    public ?string $updated_at = null;
    public ?array $user = null;
}

/** Request payload for ApiEntitiesDeploymentExtended#load. */
class ApiEntitiesDeploymentExtendedLoadMatch
{
    public string $deployment_id;
    public string $project_id;
}

/** Request payload for ApiEntitiesDeploymentExtended#create. */
class ApiEntitiesDeploymentExtendedCreateData
{
    public string $project_id;
}

/** Request payload for ApiEntitiesDeploymentExtended#update. */
class ApiEntitiesDeploymentExtendedUpdateData
{
    public string $deployment_id;
    public string $project_id;
}

/** ApiEntitiesDeploymentsApproval entity data model. */
class ApiEntitiesDeploymentsApproval
{
}

/** Request payload for ApiEntitiesDeploymentsApproval#create. */
class ApiEntitiesDeploymentsApprovalCreateData
{
    public string $deployment_id;
    public string $project_id;
}

/** ApiEntitiesDictionaryTable entity data model. */
class ApiEntitiesDictionaryTable
{
    public ?array $feature_category = null;
    public ?string $table_name = null;
}

/** Request payload for ApiEntitiesDictionaryTable#load. */
class ApiEntitiesDictionaryTableLoadMatch
{
    public string $databas_id;
    public string $id;
}

/** ApiEntitiesDiff entity data model. */
class ApiEntitiesDiff
{
    public ?string $a_mode = null;
    public ?string $b_mode = null;
    public ?bool $collapsed = null;
    public ?bool $deleted_file = null;
    public ?string $diff = null;
    public ?bool $generated_file = null;
    public ?bool $new_file = null;
    public ?string $new_path = null;
    public ?string $old_path = null;
    public ?bool $renamed_file = null;
    public ?bool $too_large = null;
}

/** Request payload for ApiEntitiesDiff#load. */
class ApiEntitiesDiffLoadMatch
{
    public string $merge_request_id;
    public string $project_id;
}

/** Request payload for ApiEntitiesDiff#list. */
class ApiEntitiesDiffListMatch
{
    public string $project_id;
    public mixed $sha;
}

/** ApiEntitiesDiscoveredCluster entity data model. */
class ApiEntitiesDiscoveredCluster
{
    public ?string $group = null;
    public ?string $project = null;
}

/** Request payload for ApiEntitiesDiscoveredCluster#load. */
class ApiEntitiesDiscoveredClusterLoadMatch
{
    public ?string $group = null;
    public ?string $project = null;
}

/** ApiEntitiesDraftNote entity data model. */
class ApiEntitiesDraftNote
{
    public ?int $author_id = null;
    public ?int $commit_id = null;
    public ?int $discussion_id = null;
    public ?int $id = null;
    public ?string $line_code = null;
    public ?int $merge_request_id = null;
    public ?string $note = null;
    public ?array $position = null;
    public ?bool $resolve_discussion = null;
}

/** Request payload for ApiEntitiesDraftNote#load. */
class ApiEntitiesDraftNoteLoadMatch
{
    public string $id;
    public string $merge_request_id;
    public string $project_id;
}

/** Request payload for ApiEntitiesDraftNote#list. */
class ApiEntitiesDraftNoteListMatch
{
    public string $merge_request_id;
    public string $project_id;
}

/** Request payload for ApiEntitiesDraftNote#create. */
class ApiEntitiesDraftNoteCreateData
{
    public string $merge_request_id;
    public string $project_id;
}

/** Request payload for ApiEntitiesDraftNote#update. */
class ApiEntitiesDraftNoteUpdateData
{
    public string $id;
    public string $merge_request_id;
    public string $project_id;
}

/** ApiEntitiesEnvironment entity data model. */
class ApiEntitiesEnvironment
{
    public ?string $auto_stop_at = null;
    public ?string $auto_stop_setting = null;
    public ?array $cluster_agent = null;
    public ?string $created_at = null;
    public ?string $description = null;
    public ?string $external_url = null;
    public ?string $flux_resource_path = null;
    public ?int $id = null;
    public ?string $kubernetes_namespace = null;
    public ?array $last_deployment = null;
    public ?string $name = null;
    public ?array $project = null;
    public ?string $slug = null;
    public ?string $state = null;
    public ?string $tier = null;
    public ?string $updated_at = null;
}

/** Request payload for ApiEntitiesEnvironment#load. */
class ApiEntitiesEnvironmentLoadMatch
{
    public string $id;
    public string $project_id;
}

/** Request payload for ApiEntitiesEnvironment#list. */
class ApiEntitiesEnvironmentListMatch
{
    public string $project_id;
}

/** Request payload for ApiEntitiesEnvironment#create. */
class ApiEntitiesEnvironmentCreateData
{
    public ?string $environment_id = null;
    public string $project_id;
}

/** Request payload for ApiEntitiesEnvironment#update. */
class ApiEntitiesEnvironmentUpdateData
{
    public string $id;
    public string $project_id;
}

/** ApiEntitiesErrorTrackingClientKey entity data model. */
class ApiEntitiesErrorTrackingClientKey
{
    public ?bool $active = null;
    public ?int $id = null;
    public ?string $public_key = null;
    public ?string $sentry_dsn = null;
}

/** Request payload for ApiEntitiesErrorTrackingClientKey#list. */
class ApiEntitiesErrorTrackingClientKeyListMatch
{
    public string $project_id;
}

/** Request payload for ApiEntitiesErrorTrackingClientKey#create. */
class ApiEntitiesErrorTrackingClientKeyCreateData
{
    public string $project_id;
}

/** ApiEntitiesErrorTrackingProjectSetting entity data model. */
class ApiEntitiesErrorTrackingProjectSetting
{
    public ?bool $active = null;
    public ?string $api_url = null;
    public ?bool $integrated = null;
    public ?string $project_name = null;
    public ?string $sentry_external_url = null;
}

/** Request payload for ApiEntitiesErrorTrackingProjectSetting#load. */
class ApiEntitiesErrorTrackingProjectSettingLoadMatch
{
    public string $project_id;
}

/** Request payload for ApiEntitiesErrorTrackingProjectSetting#update. */
class ApiEntitiesErrorTrackingProjectSettingUpdateData
{
    public string $project_id;
}

/** ApiEntitiesEvent entity data model. */
class ApiEntitiesEvent
{
    public ?string $action_name = null;
    public ?array $author = null;
    public ?int $author_id = null;
    public ?string $author_username = null;
    public ?string $created_at = null;
    public ?int $id = null;
    public ?bool $imported = null;
    public ?string $imported_from = null;
    public ?array $note = null;
    public ?int $project_id = null;
    public ?array $push_data = null;
    public ?int $target_id = null;
    public ?int $target_iid = null;
    public ?string $target_title = null;
    public ?string $target_type = null;
    public ?array $wiki_page = null;
}

/** Request payload for ApiEntitiesEvent#load. */
class ApiEntitiesEventLoadMatch
{
    public string $project_id;
}

/** Request payload for ApiEntitiesEvent#list. */
class ApiEntitiesEventListMatch
{
    public ?string $user_id = null;
}

/** ApiEntitiesFeature entity data model. */
class ApiEntitiesFeature
{
    public ?array $definition = null;
    public ?array $gate = null;
    public ?string $name = null;
    public ?string $state = null;
}

/** Request payload for ApiEntitiesFeature#list. */
class ApiEntitiesFeatureListMatch
{
    public ?array $definition = null;
    public ?array $gate = null;
    public ?string $name = null;
    public ?string $state = null;
}

/** Request payload for ApiEntitiesFeature#create. */
class ApiEntitiesFeatureCreateData
{
    public string $id;
}

/** ApiEntitiesFeatureDefinition entity data model. */
class ApiEntitiesFeatureDefinition
{
    public ?string $default_enabled = null;
    public ?string $feature_issue_url = null;
    public ?string $group = null;
    public ?string $intended_to_rollout_by = null;
    public ?string $introduced_by_url = null;
    public ?string $log_state_change = null;
    public ?string $milestone = null;
    public ?string $name = null;
    public ?string $rollout_issue_url = null;
    public ?string $type = null;
}

/** Request payload for ApiEntitiesFeatureDefinition#list. */
class ApiEntitiesFeatureDefinitionListMatch
{
    public ?string $default_enabled = null;
    public ?string $feature_issue_url = null;
    public ?string $group = null;
    public ?string $intended_to_rollout_by = null;
    public ?string $introduced_by_url = null;
    public ?string $log_state_change = null;
    public ?string $milestone = null;
    public ?string $name = null;
    public ?string $rollout_issue_url = null;
    public ?string $type = null;
}

/** ApiEntitiesFeatureFlag entity data model. */
class ApiEntitiesFeatureFlag
{
    public ?bool $active = null;
    public ?string $created_at = null;
    public ?string $description = null;
    public ?string $name = null;
    public ?string $scope = null;
    public ?array $strategy = null;
    public ?string $updated_at = null;
    public ?string $version = null;
}

/** Request payload for ApiEntitiesFeatureFlag#load. */
class ApiEntitiesFeatureFlagLoadMatch
{
    public string $id;
    public string $project_id;
}

/** Request payload for ApiEntitiesFeatureFlag#list. */
class ApiEntitiesFeatureFlagListMatch
{
    public string $project_id;
}

/** Request payload for ApiEntitiesFeatureFlag#create. */
class ApiEntitiesFeatureFlagCreateData
{
    public string $project_id;
}

/** Request payload for ApiEntitiesFeatureFlag#update. */
class ApiEntitiesFeatureFlagUpdateData
{
    public string $id;
    public string $project_id;
}

/** ApiEntitiesFeatureFlagUserList entity data model. */
class ApiEntitiesFeatureFlagUserList
{
    public ?string $created_at = null;
    public ?string $edit_path = null;
    public ?int $id = null;
    public ?int $iid = null;
    public ?string $name = null;
    public ?string $path = null;
    public ?int $project_id = null;
    public ?string $updated_at = null;
    public ?string $user_xid = null;
}

/** Request payload for ApiEntitiesFeatureFlagUserList#load. */
class ApiEntitiesFeatureFlagUserListLoadMatch
{
    public mixed $iid;
    public string $project_id;
}

/** Request payload for ApiEntitiesFeatureFlagUserList#list. */
class ApiEntitiesFeatureFlagUserListListMatch
{
    public string $project_id;
}

/** Request payload for ApiEntitiesFeatureFlagUserList#create. */
class ApiEntitiesFeatureFlagUserListCreateData
{
    public string $project_id;
}

/** Request payload for ApiEntitiesFeatureFlagUserList#update. */
class ApiEntitiesFeatureFlagUserListUpdateData
{
    public mixed $iid;
    public string $project_id;
}

/** ApiEntitiesFreezePeriod entity data model. */
class ApiEntitiesFreezePeriod
{
    public ?string $created_at = null;
    public ?string $cron_timezone = null;
    public ?string $freeze_end = null;
    public ?string $freeze_start = null;
    public ?int $id = null;
    public ?string $updated_at = null;
}

/** Request payload for ApiEntitiesFreezePeriod#load. */
class ApiEntitiesFreezePeriodLoadMatch
{
    public string $id;
    public string $project_id;
}

/** Request payload for ApiEntitiesFreezePeriod#list. */
class ApiEntitiesFreezePeriodListMatch
{
    public string $project_id;
}

/** Request payload for ApiEntitiesFreezePeriod#create. */
class ApiEntitiesFreezePeriodCreateData
{
    public string $project_id;
}

/** Request payload for ApiEntitiesFreezePeriod#update. */
class ApiEntitiesFreezePeriodUpdateData
{
    public string $id;
    public string $project_id;
}

/** ApiEntitiesGitlabSubscription entity data model. */
class ApiEntitiesGitlabSubscription
{
    public ?array $billing = null;
    public ?array $plan = null;
    public ?array $usage = null;
}

/** Request payload for ApiEntitiesGitlabSubscription#load. */
class ApiEntitiesGitlabSubscriptionLoadMatch
{
    public string $namespace_id;
}

/** ApiEntitiesGoModuleVersion entity data model. */
class ApiEntitiesGoModuleVersion
{
    public ?string $time = null;
    public ?string $version = null;
}

/** Request payload for ApiEntitiesGoModuleVersion#load. */
class ApiEntitiesGoModuleVersionLoadMatch
{
    public mixed $module_version;
    public string $project_id;
}

/** ApiEntitiesGroup entity data model. */
class ApiEntitiesGroup
{
    public ?bool $archived = null;
    public ?string $auto_devops_enabled = null;
    public ?string $auto_duo_code_review_enabled = null;
    public ?string $avatar_url = null;
    public ?string $created_at = null;
    public ?array $custom_attribute = null;
    public ?string $default_branch = null;
    public ?string $default_branch_protection = null;
    public ?string $default_branch_protection_default = null;
    public ?string $description = null;
    public ?bool $duo_core_features_enabled = null;
    public ?string $duo_features_enabled = null;
    public ?bool $emails_disabled = null;
    public ?bool $emails_enabled = null;
    public ?string $file_template_project_id = null;
    public ?string $full_name = null;
    public ?string $full_path = null;
    public ?string $id = null;
    public ?string $ldap_access = null;
    public ?string $ldap_cn = null;
    public ?array $ldap_group_link = null;
    public ?string $lfs_enabled = null;
    public ?string $lock_duo_features_enabled = null;
    public ?bool $lock_math_rendering_limits_enabled = null;
    public ?string $marked_for_deletion_on = null;
    public ?bool $math_rendering_limits_enabled = null;
    public ?int $max_artifacts_size = null;
    public ?string $mentions_disabled = null;
    public ?string $name = null;
    public ?string $organization_id = null;
    public ?string $parent_id = null;
    public ?string $path = null;
    public ?string $project_creation_level = null;
    public ?string $repository_storage = null;
    public ?string $request_access_enabled = null;
    public ?string $require_two_factor_authentication = null;
    public ?array $root_storage_statistic = null;
    public ?array $saml_group_link = null;
    public ?string $share_with_group_lock = null;
    public ?string $shared_runners_setting = null;
    public ?bool $show_diff_preview_in_email = null;
    public ?array $statistic = null;
    public ?string $subgroup_creation_level = null;
    public ?string $two_factor_grace_period = null;
    public ?string $visibility = null;
    public ?string $web_based_commit_signing_enabled = null;
    public ?string $web_url = null;
    public ?string $wiki_access_level = null;
}

/** Request payload for ApiEntitiesGroup#load. */
class ApiEntitiesGroupLoadMatch
{
    public string $project_id;
}

/** Request payload for ApiEntitiesGroup#list. */
class ApiEntitiesGroupListMatch
{
    public ?string $group_id = null;
    public ?string $project_id = null;
}

/** Request payload for ApiEntitiesGroup#create. */
class ApiEntitiesGroupCreateData
{
    public ?string $group_id = null;
}

/** Request payload for ApiEntitiesGroup#update. */
class ApiEntitiesGroupUpdateData
{
    public string $id;
}

/** ApiEntitiesGroupDetail entity data model. */
class ApiEntitiesGroupDetail
{
    public ?string $allowed_email_domains_list = null;
    public ?bool $archived = null;
    public ?string $auto_ban_user_on_excessive_projects_download = null;
    public ?string $auto_devops_enabled = null;
    public ?string $auto_duo_code_review_enabled = null;
    public ?string $avatar_url = null;
    public ?string $created_at = null;
    public ?array $custom_attribute = null;
    public ?string $default_branch = null;
    public ?string $default_branch_protection = null;
    public ?string $default_branch_protection_default = null;
    public ?string $description = null;
    public ?bool $duo_core_features_enabled = null;
    public ?string $duo_features_enabled = null;
    public ?bool $emails_disabled = null;
    public ?bool $emails_enabled = null;
    public ?string $enabled_git_access_protocol = null;
    public ?string $extra_shared_runners_minutes_limit = null;
    public ?string $file_template_project_id = null;
    public ?string $full_name = null;
    public ?string $full_path = null;
    public ?string $id = null;
    public ?string $ip_restriction_range = null;
    public ?string $ldap_access = null;
    public ?string $ldap_cn = null;
    public ?array $ldap_group_link = null;
    public ?string $lfs_enabled = null;
    public ?string $lock_duo_features_enabled = null;
    public ?bool $lock_math_rendering_limits_enabled = null;
    public ?string $marked_for_deletion_on = null;
    public ?bool $math_rendering_limits_enabled = null;
    public ?int $max_artifacts_size = null;
    public ?string $membership_lock = null;
    public ?string $mentions_disabled = null;
    public ?string $name = null;
    public ?string $organization_id = null;
    public ?string $parent_id = null;
    public ?string $path = null;
    public ?string $prevent_forking_outside_group = null;
    public ?string $prevent_sharing_groups_outside_hierarchy = null;
    public ?array $project = null;
    public ?string $project_creation_level = null;
    public ?string $repository_storage = null;
    public ?string $request_access_enabled = null;
    public ?string $require_two_factor_authentication = null;
    public ?array $root_storage_statistic = null;
    public ?string $runners_token = null;
    public ?array $saml_group_link = null;
    public ?string $service_access_tokens_expiration_enforced = null;
    public ?string $share_with_group_lock = null;
    public ?array $shared_project = null;
    public ?string $shared_runners_minutes_limit = null;
    public ?string $shared_runners_setting = null;
    public ?string $shared_with_group = null;
    public ?bool $show_diff_preview_in_email = null;
    public ?array $statistic = null;
    public ?string $subgroup_creation_level = null;
    public ?string $two_factor_grace_period = null;
    public ?string $unique_project_download_limit = null;
    public ?string $unique_project_download_limit_alertlist = null;
    public ?string $unique_project_download_limit_allowlist = null;
    public ?string $unique_project_download_limit_interval_in_second = null;
    public ?string $visibility = null;
    public ?string $web_based_commit_signing_enabled = null;
    public ?string $web_url = null;
    public ?string $wiki_access_level = null;
}

/** Request payload for ApiEntitiesGroupDetail#load. */
class ApiEntitiesGroupDetailLoadMatch
{
    public string $id;
}

/** Request payload for ApiEntitiesGroupDetail#create. */
class ApiEntitiesGroupDetailCreateData
{
    public string $group_id;
    public ?string $project_id = null;
}

/** ApiEntitiesHook entity data model. */
class ApiEntitiesHook
{
    public mixed $alert_status = null;
    public ?string $branch_filter_strategy = null;
    public ?string $created_at = null;
    public ?array $custom_header = null;
    public ?string $custom_webhook_template = null;
    public ?string $description = null;
    public ?string $disabled_until = null;
    public ?bool $enable_ssl_verification = null;
    public ?string $id = null;
    public ?bool $merge_requests_event = null;
    public ?string $name = null;
    public ?bool $push_event = null;
    public ?string $push_events_branch_filter = null;
    public ?bool $repository_update_event = null;
    public ?bool $tag_push_event = null;
    public ?string $url = null;
    public ?array $url_variable = null;
}

/** Request payload for ApiEntitiesHook#load. */
class ApiEntitiesHookLoadMatch
{
    public string $id;
}

/** Request payload for ApiEntitiesHook#list. */
class ApiEntitiesHookListMatch
{
    public mixed $alert_status = null;
    public ?string $branch_filter_strategy = null;
    public ?string $created_at = null;
    public ?array $custom_header = null;
    public ?string $custom_webhook_template = null;
    public ?string $description = null;
    public ?string $disabled_until = null;
    public ?bool $enable_ssl_verification = null;
    public ?string $id = null;
    public ?bool $merge_requests_event = null;
    public ?string $name = null;
    public ?bool $push_event = null;
    public ?string $push_events_branch_filter = null;
    public ?bool $repository_update_event = null;
    public ?bool $tag_push_event = null;
    public ?string $url = null;
    public ?array $url_variable = null;
}

/** Request payload for ApiEntitiesHook#create. */
class ApiEntitiesHookCreateData
{
    public mixed $alert_status = null;
    public ?string $branch_filter_strategy = null;
    public ?string $created_at = null;
    public ?array $custom_header = null;
    public ?string $custom_webhook_template = null;
    public ?string $description = null;
    public ?string $disabled_until = null;
    public ?bool $enable_ssl_verification = null;
    public ?string $id = null;
    public ?bool $merge_requests_event = null;
    public ?string $name = null;
    public ?bool $push_event = null;
    public ?string $push_events_branch_filter = null;
    public ?bool $repository_update_event = null;
    public ?bool $tag_push_event = null;
    public ?string $url = null;
    public ?array $url_variable = null;
}

/** Request payload for ApiEntitiesHook#update. */
class ApiEntitiesHookUpdateData
{
    public string $id;
}

/** ApiEntitiesIntegration entity data model. */
class ApiEntitiesIntegration
{
    public ?bool $active = null;
    public ?bool $alert_event = null;
    public ?bool $comment_on_event_enabled = null;
    public ?bool $commit_event = null;
    public ?bool $confidential_issues_event = null;
    public ?bool $confidential_note_event = null;
    public ?string $created_at = null;
    public ?bool $deployment_event = null;
    public ?int $id = null;
    public ?bool $incident_event = null;
    public ?bool $inherited = null;
    public ?bool $issues_event = null;
    public ?bool $job_event = null;
    public ?bool $merge_requests_event = null;
    public ?bool $note_event = null;
    public ?bool $pipeline_event = null;
    public ?array $property = null;
    public ?bool $push_event = null;
    public ?int $slug = null;
    public ?bool $tag_push_event = null;
    public ?string $title = null;
    public ?string $updated_at = null;
    public ?bool $vulnerability_event = null;
    public ?bool $wiki_page_event = null;
}

/** Request payload for ApiEntitiesIntegration#load. */
class ApiEntitiesIntegrationLoadMatch
{
    public ?string $group_id = null;
    public ?string $id = null;
    public ?string $project_id = null;
    public ?string $slug = null;
}

/** ApiEntitiesIntegrationBasic entity data model. */
class ApiEntitiesIntegrationBasic
{
    public ?bool $active = null;
    public ?bool $alert_event = null;
    public ?bool $comment_on_event_enabled = null;
    public ?bool $commit_event = null;
    public ?bool $confidential_issues_event = null;
    public ?bool $confidential_note_event = null;
    public ?string $created_at = null;
    public ?bool $deployment_event = null;
    public ?int $id = null;
    public ?bool $incident_event = null;
    public ?bool $inherited = null;
    public ?bool $issues_event = null;
    public ?bool $job_event = null;
    public ?bool $merge_requests_event = null;
    public ?bool $note_event = null;
    public ?bool $pipeline_event = null;
    public ?bool $push_event = null;
    public ?int $slug = null;
    public ?bool $tag_push_event = null;
    public ?string $title = null;
    public ?string $updated_at = null;
    public ?bool $vulnerability_event = null;
    public ?bool $wiki_page_event = null;
}

/** Request payload for ApiEntitiesIntegrationBasic#list. */
class ApiEntitiesIntegrationBasicListMatch
{
    public ?string $group_id = null;
    public ?string $project_id = null;
}

/** Request payload for ApiEntitiesIntegrationBasic#update. */
class ApiEntitiesIntegrationBasicUpdateData
{
    public ?string $group_id = null;
    public ?string $project_id = null;
}

/** ApiEntitiesInvitation entity data model. */
class ApiEntitiesInvitation
{
    public ?string $access_level = null;
    public ?string $created_at = null;
    public ?string $created_by_name = null;
    public ?string $expires_at = null;
    public ?string $invite_email = null;
    public ?string $invite_token = null;
    public ?string $user_name = null;
}

/** Request payload for ApiEntitiesInvitation#list. */
class ApiEntitiesInvitationListMatch
{
    public ?string $group_id = null;
    public ?string $project_id = null;
}

/** Request payload for ApiEntitiesInvitation#create. */
class ApiEntitiesInvitationCreateData
{
    public ?string $group_id = null;
    public ?string $project_id = null;
}

/** Request payload for ApiEntitiesInvitation#update. */
class ApiEntitiesInvitationUpdateData
{
    public ?string $group_id = null;
    public string $id;
    public ?string $project_id = null;
}

/** ApiEntitiesIssuableTimeStat entity data model. */
class ApiEntitiesIssuableTimeStat
{
    public ?string $human_time_estimate = null;
    public ?string $human_total_time_spent = null;
    public ?int $time_estimate = null;
    public ?int $total_time_spent = null;
}

/** Request payload for ApiEntitiesIssuableTimeStat#load. */
class ApiEntitiesIssuableTimeStatLoadMatch
{
    public ?string $issue_id = null;
    public string $project_id;
    public ?string $merge_request_id = null;
}

/** Request payload for ApiEntitiesIssuableTimeStat#create. */
class ApiEntitiesIssuableTimeStatCreateData
{
    public ?string $issue_id = null;
    public string $project_id;
    public ?string $merge_request_id = null;
}

/** ApiEntitiesIssue entity data model. */
class ApiEntitiesIssue
{
    public ?array $assignee = null;
    public ?array $author = null;
    public ?string $blocking_issues_count = null;
    public ?string $closed_at = null;
    public ?array $closed_by = null;
    public ?bool $confidential = null;
    public ?string $created_at = null;
    public ?string $description = null;
    public ?bool $discussion_locked = null;
    public ?string $downvote = null;
    public ?string $due_date = null;
    public ?array $epic = null;
    public ?string $epic_iid = null;
    public ?bool $has_task = null;
    public ?string $health_status = null;
    public ?int $id = null;
    public ?int $iid = null;
    public ?string $imported = null;
    public ?string $imported_from = null;
    public ?string $issue_type = null;
    public ?array $iteration = null;
    public ?array $label = null;
    public ?array $link = null;
    public ?string $merge_requests_count = null;
    public ?array $milestone = null;
    public ?string $moved_to_id = null;
    public ?int $project_id = null;
    public ?array $reference = null;
    public ?string $service_desk_reply_to = null;
    public ?string $severity = null;
    public ?string $state = null;
    public ?string $subscribed = null;
    public ?string $task_completion_status = null;
    public ?string $task_status = null;
    public ?array $time_stat = null;
    public ?string $title = null;
    public ?string $type = null;
    public ?string $updated_at = null;
    public ?string $upvote = null;
    public ?string $user_notes_count = null;
    public ?string $web_url = null;
    public ?string $weight = null;
}

/** Request payload for ApiEntitiesIssue#load. */
class ApiEntitiesIssueLoadMatch
{
    public string $id;
    public ?string $project_id = null;
}

/** Request payload for ApiEntitiesIssue#list. */
class ApiEntitiesIssueListMatch
{
    public ?string $project_id = null;
    public ?string $group_id = null;
}

/** Request payload for ApiEntitiesIssue#create. */
class ApiEntitiesIssueCreateData
{
    public ?string $issue_id = null;
    public string $project_id;
}

/** Request payload for ApiEntitiesIssue#update. */
class ApiEntitiesIssueUpdateData
{
    public ?string $id = null;
    public string $project_id;
    public ?string $issue_id = null;
}

/** ApiEntitiesIssueLink entity data model. */
class ApiEntitiesIssueLink
{
    public ?string $link_type = null;
    public ?array $source_issue = null;
    public ?array $target_issue = null;
}

/** Request payload for ApiEntitiesIssueLink#load. */
class ApiEntitiesIssueLinkLoadMatch
{
    public string $id;
    public string $issue_id;
    public string $project_id;
}

/** Request payload for ApiEntitiesIssueLink#create. */
class ApiEntitiesIssueLinkCreateData
{
    public string $issue_id;
    public string $project_id;
}

/** ApiEntitiesLicense entity data model. */
class ApiEntitiesLicense
{
    public ?array $condition = null;
    public ?string $content = null;
    public ?string $description = null;
    public ?string $html_url = null;
    public ?string $key = null;
    public ?array $limitation = null;
    public ?string $name = null;
    public ?string $nickname = null;
    public ?array $permission = null;
    public ?bool $popular = null;
    public ?string $source_url = null;
}

/** Request payload for ApiEntitiesLicense#list. */
class ApiEntitiesLicenseListMatch
{
    public string $id;
    public string $name;
    public mixed $type;
}

/** ApiEntitiesMarkdown entity data model. */
class ApiEntitiesMarkdown
{
}

/** Request payload for ApiEntitiesMarkdown#create. */
class ApiEntitiesMarkdownCreateData
{
}

/** ApiEntitiesMarkdownUploadAdmin entity data model. */
class ApiEntitiesMarkdownUploadAdmin
{
    public ?string $created_at = null;
    public ?string $filename = null;
    public ?string $id = null;
    public ?string $size = null;
    public ?array $uploaded_by = null;
}

/** Request payload for ApiEntitiesMarkdownUploadAdmin#list. */
class ApiEntitiesMarkdownUploadAdminListMatch
{
    public ?string $group_id = null;
    public ?string $project_id = null;
}

/** ApiEntitiesMember entity data model. */
class ApiEntitiesMember
{
    public ?string $access_level = null;
    public ?string $avatar_path = null;
    public ?string $avatar_url = null;
    public ?string $created_at = null;
    public ?array $created_by = null;
    public ?array $custom_attribute = null;
    public ?string $email = null;
    public ?string $expires_at = null;
    public ?array $group_saml_identity = null;
    public ?array $group_scim_identity = null;
    public ?int $id = null;
    public ?bool $is_using_seat = null;
    public ?string $key = null;
    public ?bool $locked = null;
    public ?array $member_role = null;
    public ?string $membership_state = null;
    public ?string $name = null;
    public ?string $override = null;
    public ?string $public_email = null;
    public ?string $state = null;
    public ?string $username = null;
    public ?string $value = null;
    public ?string $web_url = null;
}

/** Request payload for ApiEntitiesMember#load. */
class ApiEntitiesMemberLoadMatch
{
    public ?string $group_id = null;
    public ?string $id = null;
    public ?string $user_id = null;
    public ?string $project_id = null;
}

/** Request payload for ApiEntitiesMember#list. */
class ApiEntitiesMemberListMatch
{
    public ?string $group_id = null;
    public ?string $project_id = null;
}

/** Request payload for ApiEntitiesMember#create. */
class ApiEntitiesMemberCreateData
{
    public ?string $group_id = null;
    public ?string $member_id = null;
    public ?string $project_id = null;
}

/** Request payload for ApiEntitiesMember#update. */
class ApiEntitiesMemberUpdateData
{
    public ?string $group_id = null;
    public string $id;
    public ?string $project_id = null;
}

/** Request payload for ApiEntitiesMember#remove. */
class ApiEntitiesMemberRemoveMatch
{
    public string $group_id;
    public string $member_id;
}

/** ApiEntitiesMerge entity data model. */
class ApiEntitiesMerge
{
    public ?bool $allow_collaboration = null;
    public ?bool $allow_maintainer_to_push = null;
    public ?string $approvals_before_merge = null;
    public ?array $assignee = null;
    public ?array $author = null;
    public ?string $blocking_discussions_resolved = null;
    public ?string $changes_count = null;
    public ?string $closed_at = null;
    public ?array $closed_by = null;
    public ?string $created_at = null;
    public ?string $description = null;
    public ?string $description_html = null;
    public ?string $detailed_merge_status = null;
    public ?array $diff_ref = null;
    public ?string $discussion_locked = null;
    public ?string $diverged_commits_count = null;
    public ?string $downvote = null;
    public ?string $draft = null;
    public ?string $first_contribution = null;
    public ?string $first_deployed_to_production_at = null;
    public ?string $force_remove_source_branch = null;
    public ?bool $has_conflict = null;
    public ?array $head_pipeline = null;
    public ?int $id = null;
    public ?int $iid = null;
    public ?string $imported = null;
    public ?string $imported_from = null;
    public ?string $label = null;
    public ?string $latest_build_finished_at = null;
    public ?string $latest_build_started_at = null;
    public ?string $merge_after = null;
    public ?string $merge_commit_sha = null;
    public ?string $merge_error = null;
    public ?string $merge_status = null;
    public ?array $merge_user = null;
    public ?string $merge_when_pipeline_succeed = null;
    public ?string $merged_at = null;
    public ?array $merged_by = null;
    public ?array $milestone = null;
    public ?array $pipeline = null;
    public ?string $prepared_at = null;
    public ?int $project_id = null;
    public ?string $rebase_in_progress = null;
    public ?string $reference = null;
    public ?array $reviewer = null;
    public ?string $sha = null;
    public ?bool $should_remove_source_branch = null;
    public ?string $source_branch = null;
    public ?string $source_project_id = null;
    public ?string $squash = null;
    public ?string $squash_commit_sha = null;
    public ?string $squash_on_merge = null;
    public ?string $state = null;
    public ?string $subscribed = null;
    public ?string $target_branch = null;
    public ?string $target_project_id = null;
    public ?string $task_completion_status = null;
    public ?array $time_stat = null;
    public ?string $title = null;
    public ?string $title_html = null;
    public ?string $updated_at = null;
    public ?string $upvote = null;
    public ?array $user = null;
    public ?string $user_notes_count = null;
    public ?string $web_url = null;
    public ?string $work_in_progress = null;
}

/** Request payload for ApiEntitiesMerge#load. */
class ApiEntitiesMergeLoadMatch
{
    public mixed $merge_request_iid;
    public string $project_id;
}

/** Request payload for ApiEntitiesMerge#create. */
class ApiEntitiesMergeCreateData
{
    public ?string $merge_request_id = null;
    public string $project_id;
}

/** Request payload for ApiEntitiesMerge#update. */
class ApiEntitiesMergeUpdateData
{
    public ?string $merge_request_id = null;
    public string $project_id;
    public mixed $merge_request_iid = null;
}

/** ApiEntitiesMergeRequestApproval entity data model. */
class ApiEntitiesMergeRequestApproval
{
    public ?bool $approved = null;
    public ?array $approved_by = null;
    public ?bool $user_can_approve = null;
    public ?bool $user_has_approved = null;
}

/** Request payload for ApiEntitiesMergeRequestApproval#load. */
class ApiEntitiesMergeRequestApprovalLoadMatch
{
    public string $merge_request_id;
    public string $project_id;
}

/** Request payload for ApiEntitiesMergeRequestApproval#create. */
class ApiEntitiesMergeRequestApprovalCreateData
{
    public string $merge_request_id;
    public string $project_id;
}

/** ApiEntitiesMergeRequestBasic entity data model. */
class ApiEntitiesMergeRequestBasic
{
    public ?bool $allow_collaboration = null;
    public ?bool $allow_maintainer_to_push = null;
    public ?string $approvals_before_merge = null;
    public ?array $assignee = null;
    public ?array $author = null;
    public ?string $blocking_discussions_resolved = null;
    public ?string $closed_at = null;
    public ?array $closed_by = null;
    public ?string $created_at = null;
    public ?string $description = null;
    public ?string $description_html = null;
    public ?string $detailed_merge_status = null;
    public ?string $discussion_locked = null;
    public ?string $downvote = null;
    public ?string $draft = null;
    public ?string $force_remove_source_branch = null;
    public ?bool $has_conflict = null;
    public ?int $id = null;
    public ?int $iid = null;
    public ?string $imported = null;
    public ?string $imported_from = null;
    public ?string $label = null;
    public ?string $merge_after = null;
    public ?string $merge_commit_sha = null;
    public ?string $merge_status = null;
    public ?array $merge_user = null;
    public ?string $merge_when_pipeline_succeed = null;
    public ?string $merged_at = null;
    public ?array $merged_by = null;
    public ?array $milestone = null;
    public ?string $prepared_at = null;
    public ?int $project_id = null;
    public ?string $reference = null;
    public ?array $reviewer = null;
    public ?string $sha = null;
    public ?bool $should_remove_source_branch = null;
    public ?string $source_branch = null;
    public ?string $source_project_id = null;
    public ?string $squash = null;
    public ?string $squash_commit_sha = null;
    public ?string $squash_on_merge = null;
    public ?string $state = null;
    public ?string $target_branch = null;
    public ?string $target_project_id = null;
    public ?string $task_completion_status = null;
    public ?array $time_stat = null;
    public ?string $title = null;
    public ?string $title_html = null;
    public ?string $updated_at = null;
    public ?string $upvote = null;
    public ?string $user_notes_count = null;
    public ?string $web_url = null;
    public ?string $work_in_progress = null;
}

/** Request payload for ApiEntitiesMergeRequestBasic#load. */
class ApiEntitiesMergeRequestBasicLoadMatch
{
    public ?string $group_id = null;
    public ?string $project_id = null;
    public ?string $issue_id = null;
}

/** Request payload for ApiEntitiesMergeRequestBasic#list. */
class ApiEntitiesMergeRequestBasicListMatch
{
    public ?string $deployment_id = null;
    public string $project_id;
    public mixed $sha = null;
}

/** ApiEntitiesMergeRequestChange entity data model. */
class ApiEntitiesMergeRequestChange
{
    public ?bool $allow_collaboration = null;
    public ?bool $allow_maintainer_to_push = null;
    public ?string $approvals_before_merge = null;
    public ?array $assignee = null;
    public ?array $author = null;
    public ?string $blocking_discussions_resolved = null;
    public ?array $change = null;
    public ?string $changes_count = null;
    public ?string $closed_at = null;
    public ?array $closed_by = null;
    public ?string $created_at = null;
    public ?string $description = null;
    public ?string $description_html = null;
    public ?string $detailed_merge_status = null;
    public ?array $diff_ref = null;
    public ?string $discussion_locked = null;
    public ?string $diverged_commits_count = null;
    public ?string $downvote = null;
    public ?string $draft = null;
    public ?string $first_contribution = null;
    public ?string $first_deployed_to_production_at = null;
    public ?string $force_remove_source_branch = null;
    public ?bool $has_conflict = null;
    public ?array $head_pipeline = null;
    public ?int $id = null;
    public ?int $iid = null;
    public ?string $imported = null;
    public ?string $imported_from = null;
    public ?string $label = null;
    public ?string $latest_build_finished_at = null;
    public ?string $latest_build_started_at = null;
    public ?string $merge_after = null;
    public ?string $merge_commit_sha = null;
    public ?string $merge_error = null;
    public ?string $merge_status = null;
    public ?array $merge_user = null;
    public ?string $merge_when_pipeline_succeed = null;
    public ?string $merged_at = null;
    public ?array $merged_by = null;
    public ?array $milestone = null;
    public ?string $overflow = null;
    public ?array $pipeline = null;
    public ?string $prepared_at = null;
    public ?int $project_id = null;
    public ?string $rebase_in_progress = null;
    public ?string $reference = null;
    public ?array $reviewer = null;
    public ?string $sha = null;
    public ?bool $should_remove_source_branch = null;
    public ?string $source_branch = null;
    public ?string $source_project_id = null;
    public ?string $squash = null;
    public ?string $squash_commit_sha = null;
    public ?string $squash_on_merge = null;
    public ?string $state = null;
    public ?string $subscribed = null;
    public ?string $target_branch = null;
    public ?string $target_project_id = null;
    public ?string $task_completion_status = null;
    public ?array $time_stat = null;
    public ?string $title = null;
    public ?string $title_html = null;
    public ?string $updated_at = null;
    public ?string $upvote = null;
    public ?array $user = null;
    public ?string $user_notes_count = null;
    public ?string $web_url = null;
    public ?string $work_in_progress = null;
}

/** Request payload for ApiEntitiesMergeRequestChange#load. */
class ApiEntitiesMergeRequestChangeLoadMatch
{
    public string $merge_request_id;
    public string $project_id;
}

/** ApiEntitiesMergeRequestDiff entity data model. */
class ApiEntitiesMergeRequestDiff
{
    public ?string $base_commit_sha = null;
    public ?string $created_at = null;
    public ?string $head_commit_sha = null;
    public ?string $id = null;
    public ?string $merge_request_id = null;
    public ?string $patch_id_sha = null;
    public ?string $real_size = null;
    public ?string $start_commit_sha = null;
    public ?string $state = null;
}

/** Request payload for ApiEntitiesMergeRequestDiff#list. */
class ApiEntitiesMergeRequestDiffListMatch
{
    public string $merge_request_id;
    public string $project_id;
}

/** ApiEntitiesMergeRequestDiffFull entity data model. */
class ApiEntitiesMergeRequestDiffFull
{
    public ?string $base_commit_sha = null;
    public ?array $commit = null;
    public ?string $created_at = null;
    public ?array $diff = null;
    public ?string $head_commit_sha = null;
    public ?string $id = null;
    public ?string $merge_request_id = null;
    public ?string $patch_id_sha = null;
    public ?string $real_size = null;
    public ?string $start_commit_sha = null;
    public ?string $state = null;
}

/** Request payload for ApiEntitiesMergeRequestDiffFull#load. */
class ApiEntitiesMergeRequestDiffFullLoadMatch
{
    public string $merge_request_id;
    public string $project_id;
    public string $version_id;
}

/** ApiEntitiesMergeRequestReviewer entity data model. */
class ApiEntitiesMergeRequestReviewer
{
    public ?string $created_at = null;
    public ?string $state = null;
    public ?array $user = null;
}

/** Request payload for ApiEntitiesMergeRequestReviewer#load. */
class ApiEntitiesMergeRequestReviewerLoadMatch
{
    public string $merge_request_id;
    public string $project_id;
}

/** ApiEntitiesMetricImage entity data model. */
class ApiEntitiesMetricImage
{
    public ?string $created_at = null;
    public ?string $file_path = null;
    public ?string $filename = null;
    public ?int $id = null;
    public ?string $url = null;
    public ?string $url_text = null;
}

/** Request payload for ApiEntitiesMetricImage#list. */
class ApiEntitiesMetricImageListMatch
{
    public string $alert_management_alert_id;
    public string $project_id;
}

/** Request payload for ApiEntitiesMetricImage#create. */
class ApiEntitiesMetricImageCreateData
{
    public string $alert_management_alert_id;
    public string $project_id;
}

/** Request payload for ApiEntitiesMetricImage#update. */
class ApiEntitiesMetricImageUpdateData
{
    public string $alert_management_alert_id;
    public string $id;
    public string $project_id;
}

/** ApiEntitiesMrNote entity data model. */
class ApiEntitiesMrNote
{
    public ?array $author = null;
    public ?string $note = null;
}

/** Request payload for ApiEntitiesMrNote#load. */
class ApiEntitiesMrNoteLoadMatch
{
    public string $merge_request_id;
    public string $project_id;
}

/** ApiEntitiesNamespace entity data model. */
class ApiEntitiesNamespace
{
    public ?string $additional_purchased_storage_ends_on = null;
    public ?int $additional_purchased_storage_size = null;
    public ?string $avatar_url = null;
    public ?int $billable_members_count = null;
    public ?string $end_date = null;
    public ?int $extra_shared_runners_minutes_limit = null;
    public ?string $full_path = null;
    public ?int $id = null;
    public ?string $kind = null;
    public ?int $max_seats_used = null;
    public ?string $max_seats_used_changed_at = null;
    public ?int $members_count_with_descendant = null;
    public ?string $name = null;
    public ?int $parent_id = null;
    public ?string $path = null;
    public ?string $plan = null;
    public ?int $projects_count = null;
    public ?int $root_repository_size = null;
    public ?int $seats_in_use = null;
    public ?int $shared_runners_minutes_limit = null;
    public ?bool $trial = null;
    public ?string $trial_ends_on = null;
    public ?string $web_url = null;
}

/** Request payload for ApiEntitiesNamespace#load. */
class ApiEntitiesNamespaceLoadMatch
{
    public string $id;
}

/** Request payload for ApiEntitiesNamespace#list. */
class ApiEntitiesNamespaceListMatch
{
    public ?string $additional_purchased_storage_ends_on = null;
    public ?int $additional_purchased_storage_size = null;
    public ?string $avatar_url = null;
    public ?int $billable_members_count = null;
    public ?string $end_date = null;
    public ?int $extra_shared_runners_minutes_limit = null;
    public ?string $full_path = null;
    public ?int $id = null;
    public ?string $kind = null;
    public ?int $max_seats_used = null;
    public ?string $max_seats_used_changed_at = null;
    public ?int $members_count_with_descendant = null;
    public ?string $name = null;
    public ?int $parent_id = null;
    public ?string $path = null;
    public ?string $plan = null;
    public ?int $projects_count = null;
    public ?int $root_repository_size = null;
    public ?int $seats_in_use = null;
    public ?int $shared_runners_minutes_limit = null;
    public ?bool $trial = null;
    public ?string $trial_ends_on = null;
    public ?string $web_url = null;
}

/** Request payload for ApiEntitiesNamespace#update. */
class ApiEntitiesNamespaceUpdateData
{
    public string $id;
}

/** ApiEntitiesNamespaceExistence entity data model. */
class ApiEntitiesNamespaceExistence
{
    public ?bool $exist = null;
    public ?array $suggest = null;
}

/** Request payload for ApiEntitiesNamespaceExistence#list. */
class ApiEntitiesNamespaceExistenceListMatch
{
    public string $namespace_id;
}

/** ApiEntitiesNamespacesStorageLimitExclusion entity data model. */
class ApiEntitiesNamespacesStorageLimitExclusion
{
    public ?int $id = null;
    public ?int $namespace_id = null;
    public ?string $namespace_name = null;
    public ?string $reason = null;
}

/** Request payload for ApiEntitiesNamespacesStorageLimitExclusion#load. */
class ApiEntitiesNamespacesStorageLimitExclusionLoadMatch
{
    public int $id;
    public ?int $namespace_id = null;
    public ?string $namespace_name = null;
    public ?string $reason = null;
}

/** Request payload for ApiEntitiesNamespacesStorageLimitExclusion#create. */
class ApiEntitiesNamespacesStorageLimitExclusionCreateData
{
    public string $namespace_id;
}

/** ApiEntitiesNpmPackage entity data model. */
class ApiEntitiesNpmPackage
{
    public ?array $dist_tag = null;
    public ?string $name = null;
    public ?array $version = null;
}

/** Request payload for ApiEntitiesNpmPackage#load. */
class ApiEntitiesNpmPackageLoadMatch
{
    public ?string $group_id = null;
    public ?string $project_id = null;
}

/** ApiEntitiesNpmPackageTag entity data model. */
class ApiEntitiesNpmPackageTag
{
    public ?array $dist_tag = null;
}

/** Request payload for ApiEntitiesNpmPackageTag#load. */
class ApiEntitiesNpmPackageTagLoadMatch
{
    public ?string $group_id = null;
    public ?string $project_id = null;
}

/** ApiEntitiesNugetPackagesVersion entity data model. */
class ApiEntitiesNugetPackagesVersion
{
    public ?array $version = null;
}

/** Request payload for ApiEntitiesNugetPackagesVersion#list. */
class ApiEntitiesNugetPackagesVersionListMatch
{
    public string $project_id;
}

/** ApiEntitiesNugetSearchResult entity data model. */
class ApiEntitiesNugetSearchResult
{
    public ?string $author = null;
    public ?string $description = null;
    public ?string $icon_url = null;
    public ?string $id = null;
    public ?string $license_url = null;
    public ?string $project_url = null;
    public ?string $summary = null;
    public ?string $tag = null;
    public ?string $title = null;
    public ?int $total_download = null;
    public ?string $type = null;
    public ?bool $verified = null;
    public ?string $version = null;
}

/** Request payload for ApiEntitiesNugetSearchResult#list. */
class ApiEntitiesNugetSearchResultListMatch
{
    public ?string $group_id = null;
    public ?string $project_id = null;
}

/** ApiEntitiesNugetServiceIndex entity data model. */
class ApiEntitiesNugetServiceIndex
{
    public ?array $resource = null;
    public ?string $version = null;
}

/** Request payload for ApiEntitiesNugetServiceIndex#list. */
class ApiEntitiesNugetServiceIndexListMatch
{
    public ?string $group_id = null;
    public ?string $project_id = null;
}

/** ApiEntitiesOrganizationsOrganization entity data model. */
class ApiEntitiesOrganizationsOrganization
{
}

/** Request payload for ApiEntitiesOrganizationsOrganization#create. */
class ApiEntitiesOrganizationsOrganizationCreateData
{
}

/** ApiEntitiesPackage entity data model. */
class ApiEntitiesPackage
{
    public ?string $conan_package_name = null;
    public ?string $created_at = null;
    public ?int $id = null;
    public ?string $last_downloaded_at = null;
    public ?array $link = null;
    public ?string $name = null;
    public ?string $package_type = null;
    public ?array $pipeline = null;
    public ?int $project_id = null;
    public ?string $project_path = null;
    public ?string $status = null;
    public ?string $tag = null;
    public ?string $version = null;
}

/** Request payload for ApiEntitiesPackage#load. */
class ApiEntitiesPackageLoadMatch
{
    public string $id;
    public string $project_id;
}

/** Request payload for ApiEntitiesPackage#list. */
class ApiEntitiesPackageListMatch
{
    public ?string $group_id = null;
    public ?string $project_id = null;
}

/** ApiEntitiesPackageFile entity data model. */
class ApiEntitiesPackageFile
{
    public ?string $created_at = null;
    public ?string $file_md5 = null;
    public ?string $file_name = null;
    public ?string $file_sha1 = null;
    public ?string $file_sha256 = null;
    public ?int $id = null;
    public ?int $package_id = null;
    public ?array $pipeline = null;
    public ?int $size = null;
}

/** Request payload for ApiEntitiesPackageFile#list. */
class ApiEntitiesPackageFileListMatch
{
    public string $package_id;
    public string $project_id;
}

/** ApiEntitiesPackagePipeline entity data model. */
class ApiEntitiesPackagePipeline
{
    public ?string $created_at = null;
    public ?int $id = null;
    public ?int $iid = null;
    public ?int $project_id = null;
    public ?string $ref = null;
    public ?string $sha = null;
    public ?string $source = null;
    public ?string $status = null;
    public ?string $updated_at = null;
    public ?array $user = null;
    public ?string $web_url = null;
}

/** Request payload for ApiEntitiesPackagePipeline#load. */
class ApiEntitiesPackagePipelineLoadMatch
{
    public string $package_id;
    public string $project_id;
}

/** ApiEntitiesPackagesConanFilesList entity data model. */
class ApiEntitiesPackagesConanFilesList
{
    public ?array $file = null;
}

/** Request payload for ApiEntitiesPackagesConanFilesList#load. */
class ApiEntitiesPackagesConanFilesListLoadMatch
{
    public string $conan_id;
    public mixed $package_channel;
    public ?string $package_id = null;
    public mixed $package_revision = null;
    public mixed $package_username;
    public mixed $package_version;
    public string $project_id;
    public ?string $revision_id = null;
    public mixed $recipe_revision = null;
}

/** ApiEntitiesPackagesConanPackageManifest entity data model. */
class ApiEntitiesPackagesConanPackageManifest
{
    public ?array $package_url = null;
}

/** Request payload for ApiEntitiesPackagesConanPackageManifest#load. */
class ApiEntitiesPackagesConanPackageManifestLoadMatch
{
    public string $conan_id;
    public mixed $conan_package_reference;
    public mixed $package_channel;
    public mixed $package_username;
    public mixed $package_version;
    public ?string $project_id = null;
}

/** ApiEntitiesPackagesConanPackageRevision entity data model. */
class ApiEntitiesPackagesConanPackageRevision
{
    public ?string $revision = null;
    public ?string $time = null;
}

/** Request payload for ApiEntitiesPackagesConanPackageRevision#list. */
class ApiEntitiesPackagesConanPackageRevisionListMatch
{
    public string $conan_id;
    public mixed $conan_package_reference;
    public mixed $package_channel;
    public mixed $package_username;
    public mixed $package_version;
    public string $project_id;
    public string $revision_id;
}

/** ApiEntitiesPackagesConanPackageSnapshot entity data model. */
class ApiEntitiesPackagesConanPackageSnapshot
{
    public ?array $package_snapshot = null;
}

/** Request payload for ApiEntitiesPackagesConanPackageSnapshot#load. */
class ApiEntitiesPackagesConanPackageSnapshotLoadMatch
{
    public string $conan_id;
    public mixed $conan_package_reference;
    public mixed $package_channel;
    public mixed $package_username;
    public mixed $package_version;
    public ?string $project_id = null;
}

/** ApiEntitiesPackagesConanRecipeManifest entity data model. */
class ApiEntitiesPackagesConanRecipeManifest
{
    public ?array $recipe_url = null;
}

/** Request payload for ApiEntitiesPackagesConanRecipeManifest#load. */
class ApiEntitiesPackagesConanRecipeManifestLoadMatch
{
    public string $conan_id;
    public mixed $package_channel;
    public mixed $package_username;
    public mixed $package_version;
    public ?string $project_id = null;
}

/** ApiEntitiesPackagesConanRecipeRevision entity data model. */
class ApiEntitiesPackagesConanRecipeRevision
{
    public ?string $revision = null;
    public ?string $time = null;
}

/** Request payload for ApiEntitiesPackagesConanRecipeRevision#list. */
class ApiEntitiesPackagesConanRecipeRevisionListMatch
{
    public string $conan_id;
    public mixed $package_channel;
    public mixed $package_username;
    public mixed $package_version;
    public string $project_id;
}

/** ApiEntitiesPackagesConanRecipeSnapshot entity data model. */
class ApiEntitiesPackagesConanRecipeSnapshot
{
    public ?array $recipe_snapshot = null;
}

/** Request payload for ApiEntitiesPackagesConanRecipeSnapshot#load. */
class ApiEntitiesPackagesConanRecipeSnapshotLoadMatch
{
    public ?string $id = null;
    public mixed $package_channel;
    public mixed $package_name;
    public mixed $package_username;
    public mixed $package_version;
}

/** ApiEntitiesPackagesConanRevision entity data model. */
class ApiEntitiesPackagesConanRevision
{
    public ?string $revision = null;
    public ?string $time = null;
}

/** Request payload for ApiEntitiesPackagesConanRevision#load. */
class ApiEntitiesPackagesConanRevisionLoadMatch
{
    public string $conan_id;
    public mixed $conan_package_reference = null;
    public mixed $package_channel;
    public mixed $package_username;
    public mixed $package_version;
    public string $project_id;
    public ?string $revision_id = null;
}

/** ApiEntitiesPackagesConanUploadUrl entity data model. */
class ApiEntitiesPackagesConanUploadUrl
{
    public ?array $upload_url = null;
}

/** Request payload for ApiEntitiesPackagesConanUploadUrl#create. */
class ApiEntitiesPackagesConanUploadUrlCreateData
{
    public string $conan_id;
    public mixed $conan_package_reference = null;
    public mixed $package_channel;
    public mixed $package_username;
    public mixed $package_version;
    public ?string $project_id = null;
}

/** ApiEntitiesPackagesDebianDistribution entity data model. */
class ApiEntitiesPackagesDebianDistribution
{
    public ?array $architecture = null;
    public ?string $codename = null;
    public ?array $component = null;
    public ?string $description = null;
    public ?int $id = null;
    public ?string $label = null;
    public ?string $origin = null;
    public ?string $suite = null;
    public ?int $valid_time_duration_second = null;
    public ?string $version = null;
}

/** Request payload for ApiEntitiesPackagesDebianDistribution#load. */
class ApiEntitiesPackagesDebianDistributionLoadMatch
{
    public ?string $group_id = null;
    public string $id;
    public ?string $project_id = null;
}

/** Request payload for ApiEntitiesPackagesDebianDistribution#list. */
class ApiEntitiesPackagesDebianDistributionListMatch
{
    public ?string $group_id = null;
    public ?string $project_id = null;
    public mixed $codename = null;
}

/** Request payload for ApiEntitiesPackagesDebianDistribution#create. */
class ApiEntitiesPackagesDebianDistributionCreateData
{
    public ?string $group_id = null;
    public ?string $project_id = null;
}

/** Request payload for ApiEntitiesPackagesDebianDistribution#update. */
class ApiEntitiesPackagesDebianDistributionUpdateData
{
    public ?string $group_id = null;
    public string $id;
    public ?string $project_id = null;
}

/** ApiEntitiesPagesDomain entity data model. */
class ApiEntitiesPagesDomain
{
    public ?string $auto_ssl_enabled = null;
    public ?array $certificate = null;
    public ?string $domain = null;
    public ?string $enabled_until = null;
    public ?string $url = null;
    public ?string $verification_code = null;
    public ?bool $verified = null;
}

/** Request payload for ApiEntitiesPagesDomain#load. */
class ApiEntitiesPagesDomainLoadMatch
{
    public string $id;
    public string $project_id;
}

/** Request payload for ApiEntitiesPagesDomain#list. */
class ApiEntitiesPagesDomainListMatch
{
    public string $project_id;
}

/** Request payload for ApiEntitiesPagesDomain#create. */
class ApiEntitiesPagesDomainCreateData
{
    public string $project_id;
}

/** Request payload for ApiEntitiesPagesDomain#update. */
class ApiEntitiesPagesDomainUpdateData
{
    public string $domain_id;
    public string $project_id;
}

/** ApiEntitiesPagesDomainBasic entity data model. */
class ApiEntitiesPagesDomainBasic
{
    public ?string $auto_ssl_enabled = null;
    public ?array $certificate_expiration = null;
    public ?string $domain = null;
    public ?string $enabled_until = null;
    public ?string $project_id = null;
    public ?string $url = null;
    public ?string $verification_code = null;
    public ?bool $verified = null;
}

/** Request payload for ApiEntitiesPagesDomainBasic#load. */
class ApiEntitiesPagesDomainBasicLoadMatch
{
    public ?string $auto_ssl_enabled = null;
    public ?array $certificate_expiration = null;
    public ?string $domain = null;
    public ?string $enabled_until = null;
    public ?string $project_id = null;
    public ?string $url = null;
    public ?string $verification_code = null;
    public ?bool $verified = null;
}

/** ApiEntitiesPersonalAccessToken entity data model. */
class ApiEntitiesPersonalAccessToken
{
    public ?bool $active = null;
    public ?string $created_at = null;
    public ?string $description = null;
    public ?string $expires_at = null;
    public ?int $id = null;
    public ?string $last_used_at = null;
    public ?string $name = null;
    public ?bool $revoked = null;
    public ?array $scope = null;
    public ?int $user_id = null;
}

/** Request payload for ApiEntitiesPersonalAccessToken#list. */
class ApiEntitiesPersonalAccessTokenListMatch
{
    public ?bool $active = null;
    public ?string $created_at = null;
    public ?string $description = null;
    public ?string $expires_at = null;
    public ?int $id = null;
    public ?string $last_used_at = null;
    public ?string $name = null;
    public ?bool $revoked = null;
    public ?array $scope = null;
    public ?int $user_id = null;
}

/** ApiEntitiesPersonalAccessTokenWithLastUsedIp entity data model. */
class ApiEntitiesPersonalAccessTokenWithLastUsedIp
{
    public ?bool $active = null;
    public ?string $created_at = null;
    public ?string $description = null;
    public ?string $expires_at = null;
    public ?int $id = null;
    public ?string $last_used_at = null;
    public ?array $last_used_ip = null;
    public ?string $name = null;
    public ?bool $revoked = null;
    public ?array $scope = null;
    public ?int $user_id = null;
}

/** Request payload for ApiEntitiesPersonalAccessTokenWithLastUsedIp#load. */
class ApiEntitiesPersonalAccessTokenWithLastUsedIpLoadMatch
{
    public string $id;
}

/** Request payload for ApiEntitiesPersonalAccessTokenWithLastUsedIp#list. */
class ApiEntitiesPersonalAccessTokenWithLastUsedIpListMatch
{
    public ?bool $active = null;
    public ?string $created_at = null;
    public ?string $description = null;
    public ?string $expires_at = null;
    public ?int $id = null;
    public ?string $last_used_at = null;
    public ?array $last_used_ip = null;
    public ?string $name = null;
    public ?bool $revoked = null;
    public ?array $scope = null;
    public ?int $user_id = null;
}

/** ApiEntitiesPersonalAccessTokenWithToken entity data model. */
class ApiEntitiesPersonalAccessTokenWithToken
{
    public ?bool $active = null;
    public ?string $created_at = null;
    public ?string $description = null;
    public ?string $expires_at = null;
    public ?int $id = null;
    public ?string $last_used_at = null;
    public ?string $name = null;
    public ?bool $revoked = null;
    public ?array $scope = null;
    public ?string $token = null;
    public ?int $user_id = null;
}

/** Request payload for ApiEntitiesPersonalAccessTokenWithToken#create. */
class ApiEntitiesPersonalAccessTokenWithTokenCreateData
{
    public ?string $personal_access_token_id = null;
}

/** ApiEntitiesPersonalSnippet entity data model. */
class ApiEntitiesPersonalSnippet
{
    public ?array $author = null;
    public ?string $created_at = null;
    public ?string $description = null;
    public ?array $file = null;
    public ?string $file_name = null;
    public ?string $http_url_to_repo = null;
    public ?int $id = null;
    public ?bool $imported = null;
    public ?string $imported_from = null;
    public ?int $project_id = null;
    public ?string $raw_url = null;
    public ?string $repository_storage = null;
    public ?string $ssh_url_to_repo = null;
    public ?string $title = null;
    public ?string $updated_at = null;
    public ?string $visibility = null;
    public ?string $web_url = null;
}

/** Request payload for ApiEntitiesPersonalSnippet#load. */
class ApiEntitiesPersonalSnippetLoadMatch
{
    public string $id;
}

/** Request payload for ApiEntitiesPersonalSnippet#list. */
class ApiEntitiesPersonalSnippetListMatch
{
    public ?array $author = null;
    public ?string $created_at = null;
    public ?string $description = null;
    public ?array $file = null;
    public ?string $file_name = null;
    public ?string $http_url_to_repo = null;
    public ?int $id = null;
    public ?bool $imported = null;
    public ?string $imported_from = null;
    public ?int $project_id = null;
    public ?string $raw_url = null;
    public ?string $repository_storage = null;
    public ?string $ssh_url_to_repo = null;
    public ?string $title = null;
    public ?string $updated_at = null;
    public ?string $visibility = null;
    public ?string $web_url = null;
}

/** Request payload for ApiEntitiesPersonalSnippet#create. */
class ApiEntitiesPersonalSnippetCreateData
{
    public ?array $author = null;
    public ?string $created_at = null;
    public ?string $description = null;
    public ?array $file = null;
    public ?string $file_name = null;
    public ?string $http_url_to_repo = null;
    public ?int $id = null;
    public ?bool $imported = null;
    public ?string $imported_from = null;
    public ?int $project_id = null;
    public ?string $raw_url = null;
    public ?string $repository_storage = null;
    public ?string $ssh_url_to_repo = null;
    public ?string $title = null;
    public ?string $updated_at = null;
    public ?string $visibility = null;
    public ?string $web_url = null;
}

/** Request payload for ApiEntitiesPersonalSnippet#update. */
class ApiEntitiesPersonalSnippetUpdateData
{
    public string $id;
}

/** ApiEntitiesPlanLimit entity data model. */
class ApiEntitiesPlanLimit
{
    public ?int $ci_active_job = null;
    public ?int $ci_instance_level_variable = null;
    public ?int $ci_needs_size_limit = null;
    public ?int $ci_pipeline_schedule = null;
    public ?int $ci_pipeline_size = null;
    public ?int $ci_project_subscription = null;
    public ?int $ci_registered_group_runner = null;
    public ?int $ci_registered_project_runner = null;
    public ?int $conan_max_file_size = null;
    public ?int $dotenv_size = null;
    public ?int $dotenv_variable = null;
    public ?int $enforcement_limit = null;
    public ?int $generic_packages_max_file_size = null;
    public ?int $helm_max_file_size = null;
    public ?array $limits_history = null;
    public ?int $maven_max_file_size = null;
    public ?int $notification_limit = null;
    public ?int $npm_max_file_size = null;
    public ?int $nuget_max_file_size = null;
    public ?int $pipeline_hierarchy_size = null;
    public ?int $pypi_max_file_size = null;
    public ?int $storage_size_limit = null;
    public ?int $terraform_module_max_file_size = null;
}

/** Request payload for ApiEntitiesPlanLimit#load. */
class ApiEntitiesPlanLimitLoadMatch
{
    public ?int $ci_active_job = null;
    public ?int $ci_instance_level_variable = null;
    public ?int $ci_needs_size_limit = null;
    public ?int $ci_pipeline_schedule = null;
    public ?int $ci_pipeline_size = null;
    public ?int $ci_project_subscription = null;
    public ?int $ci_registered_group_runner = null;
    public ?int $ci_registered_project_runner = null;
    public ?int $conan_max_file_size = null;
    public ?int $dotenv_size = null;
    public ?int $dotenv_variable = null;
    public ?int $enforcement_limit = null;
    public ?int $generic_packages_max_file_size = null;
    public ?int $helm_max_file_size = null;
    public ?array $limits_history = null;
    public ?int $maven_max_file_size = null;
    public ?int $notification_limit = null;
    public ?int $npm_max_file_size = null;
    public ?int $nuget_max_file_size = null;
    public ?int $pipeline_hierarchy_size = null;
    public ?int $pypi_max_file_size = null;
    public ?int $storage_size_limit = null;
    public ?int $terraform_module_max_file_size = null;
}

/** Request payload for ApiEntitiesPlanLimit#update. */
class ApiEntitiesPlanLimitUpdateData
{
    public ?int $ci_active_job = null;
    public ?int $ci_instance_level_variable = null;
    public ?int $ci_needs_size_limit = null;
    public ?int $ci_pipeline_schedule = null;
    public ?int $ci_pipeline_size = null;
    public ?int $ci_project_subscription = null;
    public ?int $ci_registered_group_runner = null;
    public ?int $ci_registered_project_runner = null;
    public ?int $conan_max_file_size = null;
    public ?int $dotenv_size = null;
    public ?int $dotenv_variable = null;
    public ?int $enforcement_limit = null;
    public ?int $generic_packages_max_file_size = null;
    public ?int $helm_max_file_size = null;
    public ?array $limits_history = null;
    public ?int $maven_max_file_size = null;
    public ?int $notification_limit = null;
    public ?int $npm_max_file_size = null;
    public ?int $nuget_max_file_size = null;
    public ?int $pipeline_hierarchy_size = null;
    public ?int $pypi_max_file_size = null;
    public ?int $storage_size_limit = null;
    public ?int $terraform_module_max_file_size = null;
}

/** ApiEntitiesProject entity data model. */
class ApiEntitiesProject
{
    public ?bool $allow_merge_on_skipped_pipeline = null;
    public ?bool $allow_pipeline_trigger_approve_deployment = null;
    public ?string $analytics_access_level = null;
    public ?string $approvals_before_merge = null;
    public ?bool $archived = null;
    public ?string $auto_cancel_pending_pipeline = null;
    public ?string $auto_devops_deploy_strategy = null;
    public ?bool $auto_devops_enabled = null;
    public ?string $auto_duo_code_review_enabled = null;
    public ?bool $autoclose_referenced_issue = null;
    public ?string $avatar_url = null;
    public ?string $build_git_strategy = null;
    public ?int $build_timeout = null;
    public ?string $builds_access_level = null;
    public ?bool $can_create_merge_request_in = null;
    public ?bool $ci_allow_fork_pipelines_to_run_in_parent_project = null;
    public ?string $ci_config_path = null;
    public ?int $ci_default_git_depth = null;
    public ?int $ci_delete_pipelines_in_second = null;
    public ?bool $ci_forward_deployment_enabled = null;
    public ?bool $ci_forward_deployment_rollback_allowed = null;
    public ?array $ci_id_token_sub_claim_component = null;
    public ?bool $ci_job_token_scope_enabled = null;
    public ?string $ci_pipeline_variables_minimum_override_role = null;
    public ?bool $ci_push_repository_for_job_token_allowed = null;
    public ?string $ci_restrict_pipeline_cancellation_role = null;
    public ?bool $ci_separated_cache = null;
    public ?string $compliance_framework = null;
    public ?array $container_expiration_policy = null;
    public ?string $container_registry_access_level = null;
    public ?bool $container_registry_enabled = null;
    public ?string $container_registry_image_prefix = null;
    public ?string $created_at = null;
    public ?int $creator_id = null;
    public ?array $custom_attribute = null;
    public ?string $default_branch = null;
    public ?string $description = null;
    public ?string $description_html = null;
    public ?string $duo_remote_flows_enabled = null;
    public ?bool $emails_disabled = null;
    public ?bool $emails_enabled = null;
    public ?bool $empty_repo = null;
    public ?bool $enforce_auth_checks_on_upload = null;
    public ?string $environments_access_level = null;
    public ?string $external_authorization_classification_label = null;
    public ?string $feature_flags_access_level = null;
    public ?array $forked_from_project = null;
    public ?string $forking_access_level = null;
    public ?int $forks_count = null;
    public ?bool $group_runners_enabled = null;
    public ?string $http_url_to_repo = null;
    public ?int $id = null;
    public ?string $import_error = null;
    public ?string $import_status = null;
    public ?string $import_type = null;
    public ?string $import_url = null;
    public ?string $infrastructure_access_level = null;
    public ?string $issue_branch_template = null;
    public ?string $issues_access_level = null;
    public ?bool $issues_enabled = null;
    public ?string $issues_template = null;
    public ?bool $jobs_enabled = null;
    public ?bool $keep_latest_artifact = null;
    public ?string $last_activity_at = null;
    public ?bool $lfs_enabled = null;
    public ?array $license = null;
    public ?string $license_url = null;
    public ?array $link = null;
    public ?string $marked_for_deletion_at = null;
    public ?string $marked_for_deletion_on = null;
    public ?int $max_artifacts_size = null;
    public ?string $merge_commit_template = null;
    public ?string $merge_method = null;
    public ?string $merge_pipelines_enabled = null;
    public ?string $merge_request_title_regex = null;
    public ?string $merge_request_title_regex_description = null;
    public ?string $merge_requests_access_level = null;
    public ?bool $merge_requests_enabled = null;
    public ?string $merge_requests_template = null;
    public ?string $merge_trains_enabled = null;
    public ?string $merge_trains_skip_train_allowed = null;
    public ?string $mirror = null;
    public ?string $mirror_overwrites_diverged_branch = null;
    public ?string $mirror_trigger_build = null;
    public ?string $mirror_user_id = null;
    public ?string $model_experiments_access_level = null;
    public ?string $model_registry_access_level = null;
    public ?string $monitor_access_level = null;
    public ?bool $mr_default_target_self = null;
    public ?string $name = null;
    public ?string $name_with_namespace = null;
    public ?array $namespace = null;
    public ?bool $only_allow_merge_if_all_discussions_are_resolved = null;
    public ?string $only_allow_merge_if_all_status_checks_passed = null;
    public ?bool $only_allow_merge_if_pipeline_succeed = null;
    public ?string $only_mirror_protected_branch = null;
    public ?int $open_issues_count = null;
    public ?array $owner = null;
    public ?string $package_registry_access_level = null;
    public ?bool $packages_enabled = null;
    public ?string $pages_access_level = null;
    public ?string $path = null;
    public ?string $path_with_namespace = null;
    public ?bool $pre_receive_secret_detection_enabled = null;
    public ?string $prevent_merge_without_jira_issue = null;
    public ?bool $printing_merge_request_link_enabled = null;
    public ?bool $public_job = null;
    public ?string $readme_url = null;
    public ?string $releases_access_level = null;
    public ?bool $remove_source_branch_after_merge = null;
    public ?string $repository_access_level = null;
    public ?string $repository_object_format = null;
    public ?string $repository_storage = null;
    public ?bool $request_access_enabled = null;
    public ?string $requirements_access_level = null;
    public ?string $requirements_enabled = null;
    public ?bool $resolve_outdated_diff_discussion = null;
    public ?string $resource_group_default_process_mode = null;
    public ?bool $restrict_user_defined_variable = null;
    public ?int $runner_token_expiration_interval = null;
    public ?string $runners_token = null;
    public ?bool $secret_push_protection_enabled = null;
    public ?string $security_and_compliance_access_level = null;
    public ?string $security_and_compliance_enabled = null;
    public ?string $service_desk_address = null;
    public ?bool $service_desk_enabled = null;
    public ?bool $shared_runners_enabled = null;
    public ?array $shared_with_group = null;
    public ?bool $show_diff_preview_in_email = null;
    public ?string $snippets_access_level = null;
    public ?bool $snippets_enabled = null;
    public ?bool $spp_repository_pipeline_access = null;
    public ?string $squash_commit_template = null;
    public ?string $squash_option = null;
    public ?string $ssh_url_to_repo = null;
    public ?int $star_count = null;
    public ?array $statistic = null;
    public ?string $suggestion_commit_message = null;
    public ?array $tag_list = null;
    public ?array $topic = null;
    public ?string $updated_at = null;
    public ?string $visibility = null;
    public ?bool $warn_about_potentially_unwanted_character = null;
    public ?string $web_based_commit_signing_enabled = null;
    public ?string $web_url = null;
    public ?string $wiki_access_level = null;
    public ?bool $wiki_enabled = null;
}

/** Request payload for ApiEntitiesProject#list. */
class ApiEntitiesProjectListMatch
{
    public ?string $project_id = null;
    public ?string $group_id = null;
}

/** Request payload for ApiEntitiesProject#create. */
class ApiEntitiesProjectCreateData
{
    public ?string $forked_from_id = null;
    public ?string $project_id = null;
    public ?string $user_id = null;
}

/** Request payload for ApiEntitiesProject#update. */
class ApiEntitiesProjectUpdateData
{
    public ?string $id = null;
    public ?string $project_id = null;
}

/** ApiEntitiesProjectDailyStatistic entity data model. */
class ApiEntitiesProjectDailyStatistic
{
    public ?array $fetch = null;
}

/** Request payload for ApiEntitiesProjectDailyStatistic#load. */
class ApiEntitiesProjectDailyStatisticLoadMatch
{
    public string $project_id;
}

/** ApiEntitiesProjectExportStatus entity data model. */
class ApiEntitiesProjectExportStatus
{
    public ?string $created_at = null;
    public ?string $description = null;
    public ?string $export_status = null;
    public ?int $id = null;
    public ?array $link = null;
    public ?string $name = null;
    public ?string $name_with_namespace = null;
    public ?string $path = null;
    public ?string $path_with_namespace = null;
}

/** Request payload for ApiEntitiesProjectExportStatus#load. */
class ApiEntitiesProjectExportStatusLoadMatch
{
    public string $project_id;
}

/** ApiEntitiesProjectGroupLink entity data model. */
class ApiEntitiesProjectGroupLink
{
}

/** Request payload for ApiEntitiesProjectGroupLink#create. */
class ApiEntitiesProjectGroupLinkCreateData
{
    public string $project_id;
}

/** ApiEntitiesProjectHook entity data model. */
class ApiEntitiesProjectHook
{
    public mixed $alert_status = null;
    public ?string $branch_filter_strategy = null;
    public ?bool $confidential_issues_event = null;
    public ?bool $confidential_note_event = null;
    public ?string $created_at = null;
    public ?array $custom_header = null;
    public ?string $custom_webhook_template = null;
    public ?bool $deployment_event = null;
    public ?string $description = null;
    public ?string $disabled_until = null;
    public ?bool $emoji_event = null;
    public ?bool $enable_ssl_verification = null;
    public ?bool $feature_flag_event = null;
    public ?string $id = null;
    public ?bool $issues_event = null;
    public ?bool $job_event = null;
    public ?bool $merge_requests_event = null;
    public ?bool $milestone_event = null;
    public ?string $name = null;
    public ?bool $note_event = null;
    public ?bool $pipeline_event = null;
    public ?string $project_id = null;
    public ?bool $push_event = null;
    public ?string $push_events_branch_filter = null;
    public ?bool $releases_event = null;
    public ?bool $repository_update_event = null;
    public ?bool $resource_access_token_event = null;
    public ?bool $tag_push_event = null;
    public ?string $url = null;
    public ?array $url_variable = null;
    public ?bool $vulnerability_event = null;
    public ?bool $wiki_page_event = null;
}

/** Request payload for ApiEntitiesProjectHook#load. */
class ApiEntitiesProjectHookLoadMatch
{
    public string $id;
    public string $project_id;
}

/** Request payload for ApiEntitiesProjectHook#list. */
class ApiEntitiesProjectHookListMatch
{
    public string $project_id;
}

/** Request payload for ApiEntitiesProjectHook#create. */
class ApiEntitiesProjectHookCreateData
{
    public string $project_id;
}

/** Request payload for ApiEntitiesProjectHook#update. */
class ApiEntitiesProjectHookUpdateData
{
    public string $id;
    public string $project_id;
}

/** ApiEntitiesProjectImportStatus entity data model. */
class ApiEntitiesProjectImportStatus
{
    public ?string $created_at = null;
    public ?string $exception_class = null;
    public ?string $exception_message = null;
    public ?string $id = null;
    public ?int $line_number = null;
    public ?string $relation_name = null;
    public ?string $source = null;
}

/** Request payload for ApiEntitiesProjectImportStatus#list. */
class ApiEntitiesProjectImportStatusListMatch
{
    public string $project_id;
}

/** Request payload for ApiEntitiesProjectImportStatus#create. */
class ApiEntitiesProjectImportStatusCreateData
{
    public ?string $created_at = null;
    public ?string $exception_class = null;
    public ?string $exception_message = null;
    public ?string $id = null;
    public ?int $line_number = null;
    public ?string $relation_name = null;
    public ?string $source = null;
}

/** ApiEntitiesProjectJobTokenScope entity data model. */
class ApiEntitiesProjectJobTokenScope
{
    public ?bool $inbound_enabled = null;
    public ?bool $outbound_enabled = null;
}

/** Request payload for ApiEntitiesProjectJobTokenScope#load. */
class ApiEntitiesProjectJobTokenScopeLoadMatch
{
    public string $project_id;
}

/** ApiEntitiesProjectRepositoryStorage entity data model. */
class ApiEntitiesProjectRepositoryStorage
{
    public ?string $created_at = null;
    public ?string $disk_path = null;
    public ?int $project_id = null;
    public ?string $repository_storage = null;
}

/** Request payload for ApiEntitiesProjectRepositoryStorage#load. */
class ApiEntitiesProjectRepositoryStorageLoadMatch
{
    public string $project_id;
}

/** ApiEntitiesProjectSnippet entity data model. */
class ApiEntitiesProjectSnippet
{
    public ?array $author = null;
    public ?string $created_at = null;
    public ?string $description = null;
    public ?array $file = null;
    public ?string $file_name = null;
    public ?string $http_url_to_repo = null;
    public ?int $id = null;
    public ?bool $imported = null;
    public ?string $imported_from = null;
    public ?int $project_id = null;
    public ?string $raw_url = null;
    public ?string $repository_storage = null;
    public ?string $ssh_url_to_repo = null;
    public ?string $title = null;
    public ?string $updated_at = null;
    public ?string $visibility = null;
    public ?string $web_url = null;
}

/** Request payload for ApiEntitiesProjectSnippet#load. */
class ApiEntitiesProjectSnippetLoadMatch
{
    public string $id;
    public string $project_id;
}

/** Request payload for ApiEntitiesProjectSnippet#list. */
class ApiEntitiesProjectSnippetListMatch
{
    public ?string $file_id = null;
    public mixed $file_path = null;
    public string $project_id;
    public ?string $snippet_id = null;
}

/** Request payload for ApiEntitiesProjectSnippet#create. */
class ApiEntitiesProjectSnippetCreateData
{
    public string $project_id;
}

/** Request payload for ApiEntitiesProjectSnippet#update. */
class ApiEntitiesProjectSnippetUpdateData
{
    public string $id;
    public string $project_id;
}

/** ApiEntitiesProjectUpload entity data model. */
class ApiEntitiesProjectUpload
{
}

/** Request payload for ApiEntitiesProjectUpload#create. */
class ApiEntitiesProjectUploadCreateData
{
    public string $project_id;
}

/** ApiEntitiesProjectWithAccess entity data model. */
class ApiEntitiesProjectWithAccess
{
    public ?bool $allow_merge_on_skipped_pipeline = null;
    public ?bool $allow_pipeline_trigger_approve_deployment = null;
    public ?string $analytics_access_level = null;
    public ?string $approvals_before_merge = null;
    public ?bool $archived = null;
    public ?string $auto_cancel_pending_pipeline = null;
    public ?string $auto_devops_deploy_strategy = null;
    public ?bool $auto_devops_enabled = null;
    public ?string $auto_duo_code_review_enabled = null;
    public ?bool $autoclose_referenced_issue = null;
    public ?string $avatar_url = null;
    public ?string $build_git_strategy = null;
    public ?int $build_timeout = null;
    public ?string $builds_access_level = null;
    public ?bool $can_create_merge_request_in = null;
    public ?bool $ci_allow_fork_pipelines_to_run_in_parent_project = null;
    public ?string $ci_config_path = null;
    public ?int $ci_default_git_depth = null;
    public ?int $ci_delete_pipelines_in_second = null;
    public ?bool $ci_forward_deployment_enabled = null;
    public ?bool $ci_forward_deployment_rollback_allowed = null;
    public ?array $ci_id_token_sub_claim_component = null;
    public ?bool $ci_job_token_scope_enabled = null;
    public ?string $ci_pipeline_variables_minimum_override_role = null;
    public ?bool $ci_push_repository_for_job_token_allowed = null;
    public ?string $ci_restrict_pipeline_cancellation_role = null;
    public ?bool $ci_separated_cache = null;
    public ?string $compliance_framework = null;
    public ?array $container_expiration_policy = null;
    public ?string $container_registry_access_level = null;
    public ?bool $container_registry_enabled = null;
    public ?string $container_registry_image_prefix = null;
    public ?string $created_at = null;
    public ?int $creator_id = null;
    public ?array $custom_attribute = null;
    public ?string $default_branch = null;
    public ?string $description = null;
    public ?string $description_html = null;
    public ?string $duo_remote_flows_enabled = null;
    public ?bool $emails_disabled = null;
    public ?bool $emails_enabled = null;
    public ?bool $empty_repo = null;
    public ?bool $enforce_auth_checks_on_upload = null;
    public ?string $environments_access_level = null;
    public ?string $external_authorization_classification_label = null;
    public ?string $feature_flags_access_level = null;
    public ?array $forked_from_project = null;
    public ?string $forking_access_level = null;
    public ?int $forks_count = null;
    public ?bool $group_runners_enabled = null;
    public ?string $http_url_to_repo = null;
    public ?int $id = null;
    public ?string $import_error = null;
    public ?string $import_status = null;
    public ?string $import_type = null;
    public ?string $import_url = null;
    public ?string $infrastructure_access_level = null;
    public ?string $issue_branch_template = null;
    public ?string $issues_access_level = null;
    public ?bool $issues_enabled = null;
    public ?string $issues_template = null;
    public ?bool $jobs_enabled = null;
    public ?bool $keep_latest_artifact = null;
    public ?string $last_activity_at = null;
    public ?bool $lfs_enabled = null;
    public ?array $license = null;
    public ?string $license_url = null;
    public ?array $link = null;
    public ?string $marked_for_deletion_at = null;
    public ?string $marked_for_deletion_on = null;
    public ?int $max_artifacts_size = null;
    public ?string $merge_commit_template = null;
    public ?string $merge_method = null;
    public ?string $merge_pipelines_enabled = null;
    public ?string $merge_request_title_regex = null;
    public ?string $merge_request_title_regex_description = null;
    public ?string $merge_requests_access_level = null;
    public ?bool $merge_requests_enabled = null;
    public ?string $merge_requests_template = null;
    public ?string $merge_trains_enabled = null;
    public ?string $merge_trains_skip_train_allowed = null;
    public ?string $mirror = null;
    public ?string $mirror_overwrites_diverged_branch = null;
    public ?string $mirror_trigger_build = null;
    public ?string $mirror_user_id = null;
    public ?string $model_experiments_access_level = null;
    public ?string $model_registry_access_level = null;
    public ?string $monitor_access_level = null;
    public ?bool $mr_default_target_self = null;
    public ?string $name = null;
    public ?string $name_with_namespace = null;
    public ?array $namespace = null;
    public ?bool $only_allow_merge_if_all_discussions_are_resolved = null;
    public ?string $only_allow_merge_if_all_status_checks_passed = null;
    public ?bool $only_allow_merge_if_pipeline_succeed = null;
    public ?string $only_mirror_protected_branch = null;
    public ?int $open_issues_count = null;
    public ?array $owner = null;
    public ?string $package_registry_access_level = null;
    public ?bool $packages_enabled = null;
    public ?string $pages_access_level = null;
    public ?string $path = null;
    public ?string $path_with_namespace = null;
    public ?array $permission = null;
    public ?bool $pre_receive_secret_detection_enabled = null;
    public ?string $prevent_merge_without_jira_issue = null;
    public ?bool $printing_merge_request_link_enabled = null;
    public ?bool $public_job = null;
    public ?string $readme_url = null;
    public ?string $releases_access_level = null;
    public ?bool $remove_source_branch_after_merge = null;
    public ?string $repository_access_level = null;
    public ?string $repository_object_format = null;
    public ?string $repository_storage = null;
    public ?bool $request_access_enabled = null;
    public ?string $requirements_access_level = null;
    public ?string $requirements_enabled = null;
    public ?bool $resolve_outdated_diff_discussion = null;
    public ?string $resource_group_default_process_mode = null;
    public ?bool $restrict_user_defined_variable = null;
    public ?int $runner_token_expiration_interval = null;
    public ?string $runners_token = null;
    public ?bool $secret_push_protection_enabled = null;
    public ?string $security_and_compliance_access_level = null;
    public ?string $security_and_compliance_enabled = null;
    public ?string $service_desk_address = null;
    public ?bool $service_desk_enabled = null;
    public ?bool $shared_runners_enabled = null;
    public ?array $shared_with_group = null;
    public ?bool $show_diff_preview_in_email = null;
    public ?string $snippets_access_level = null;
    public ?bool $snippets_enabled = null;
    public ?bool $spp_repository_pipeline_access = null;
    public ?string $squash_commit_template = null;
    public ?string $squash_option = null;
    public ?string $ssh_url_to_repo = null;
    public ?int $star_count = null;
    public ?array $statistic = null;
    public ?string $suggestion_commit_message = null;
    public ?array $tag_list = null;
    public ?array $topic = null;
    public ?string $updated_at = null;
    public ?string $visibility = null;
    public ?bool $warn_about_potentially_unwanted_character = null;
    public ?string $web_based_commit_signing_enabled = null;
    public ?string $web_url = null;
    public ?string $wiki_access_level = null;
    public ?bool $wiki_enabled = null;
}

/** Request payload for ApiEntitiesProjectWithAccess#load. */
class ApiEntitiesProjectWithAccessLoadMatch
{
    public string $id;
}

/** ApiEntitiesProjectsContainerRegistryProtectionRule entity data model. */
class ApiEntitiesProjectsContainerRegistryProtectionRule
{
    public ?int $id = null;
    public ?string $minimum_access_level_for_delete = null;
    public ?string $minimum_access_level_for_push = null;
    public ?int $project_id = null;
    public ?string $repository_path_pattern = null;
}

/** Request payload for ApiEntitiesProjectsContainerRegistryProtectionRule#list. */
class ApiEntitiesProjectsContainerRegistryProtectionRuleListMatch
{
    public string $project_id;
}

/** Request payload for ApiEntitiesProjectsContainerRegistryProtectionRule#create. */
class ApiEntitiesProjectsContainerRegistryProtectionRuleCreateData
{
    public string $project_id;
}

/** Request payload for ApiEntitiesProjectsContainerRegistryProtectionRule#update. */
class ApiEntitiesProjectsContainerRegistryProtectionRuleUpdateData
{
    public string $id;
    public string $project_id;
}

/** ApiEntitiesProjectsPackagesProtectionRule entity data model. */
class ApiEntitiesProjectsPackagesProtectionRule
{
    public ?int $id = null;
    public ?string $minimum_access_level_for_delete = null;
    public ?string $minimum_access_level_for_push = null;
    public ?string $package_name_pattern = null;
    public ?string $package_type = null;
    public ?int $project_id = null;
}

/** Request payload for ApiEntitiesProjectsPackagesProtectionRule#list. */
class ApiEntitiesProjectsPackagesProtectionRuleListMatch
{
    public string $project_id;
}

/** Request payload for ApiEntitiesProjectsPackagesProtectionRule#create. */
class ApiEntitiesProjectsPackagesProtectionRuleCreateData
{
    public string $project_id;
}

/** Request payload for ApiEntitiesProjectsPackagesProtectionRule#update. */
class ApiEntitiesProjectsPackagesProtectionRuleUpdateData
{
    public string $id;
    public string $project_id;
}

/** ApiEntitiesProjectsTopic entity data model. */
class ApiEntitiesProjectsTopic
{
    public ?string $avatar_url = null;
    public ?string $description = null;
    public ?string $id = null;
    public ?string $name = null;
    public ?string $organization_id = null;
    public ?string $title = null;
    public ?string $total_projects_count = null;
}

/** Request payload for ApiEntitiesProjectsTopic#load. */
class ApiEntitiesProjectsTopicLoadMatch
{
    public ?string $id = null;
}

/** Request payload for ApiEntitiesProjectsTopic#create. */
class ApiEntitiesProjectsTopicCreateData
{
    public ?string $avatar_url = null;
    public ?string $description = null;
    public ?string $id = null;
    public ?string $name = null;
    public ?string $organization_id = null;
    public ?string $title = null;
    public ?string $total_projects_count = null;
}

/** Request payload for ApiEntitiesProjectsTopic#update. */
class ApiEntitiesProjectsTopicUpdateData
{
    public string $id;
}

/** ApiEntitiesProtectedBranch entity data model. */
class ApiEntitiesProtectedBranch
{
    public ?bool $allow_force_push = null;
    public ?bool $code_owner_approval_required = null;
    public ?int $id = null;
    public ?bool $inherited = null;
    public ?array $merge_access_level = null;
    public ?string $name = null;
    public ?array $push_access_level = null;
    public ?array $unprotect_access_level = null;
}

/** Request payload for ApiEntitiesProtectedBranch#load. */
class ApiEntitiesProtectedBranchLoadMatch
{
    public string $id;
    public string $project_id;
}

/** Request payload for ApiEntitiesProtectedBranch#list. */
class ApiEntitiesProtectedBranchListMatch
{
    public string $project_id;
}

/** Request payload for ApiEntitiesProtectedBranch#create. */
class ApiEntitiesProtectedBranchCreateData
{
    public string $project_id;
}

/** Request payload for ApiEntitiesProtectedBranch#update. */
class ApiEntitiesProtectedBranchUpdateData
{
    public string $id;
    public string $project_id;
}

/** ApiEntitiesProtectedTag entity data model. */
class ApiEntitiesProtectedTag
{
    public ?array $create_access_level = null;
    public ?string $name = null;
}

/** Request payload for ApiEntitiesProtectedTag#load. */
class ApiEntitiesProtectedTagLoadMatch
{
    public string $id;
    public string $project_id;
}

/** Request payload for ApiEntitiesProtectedTag#list. */
class ApiEntitiesProtectedTagListMatch
{
    public string $project_id;
}

/** Request payload for ApiEntitiesProtectedTag#create. */
class ApiEntitiesProtectedTagCreateData
{
    public string $project_id;
}

/** ApiEntitiesPublicGroupDetail entity data model. */
class ApiEntitiesPublicGroupDetail
{
    public ?string $avatar_url = null;
    public ?string $full_name = null;
    public ?string $full_path = null;
    public ?string $id = null;
    public ?string $name = null;
    public ?string $web_url = null;
}

/** Request payload for ApiEntitiesPublicGroupDetail#list. */
class ApiEntitiesPublicGroupDetailListMatch
{
    public string $project_id;
}

/** ApiEntitiesRelatedIssue entity data model. */
class ApiEntitiesRelatedIssue
{
    public ?array $assignee = null;
    public ?array $author = null;
    public ?string $blocking_issues_count = null;
    public ?string $closed_at = null;
    public ?array $closed_by = null;
    public ?bool $confidential = null;
    public ?string $created_at = null;
    public ?string $description = null;
    public ?bool $discussion_locked = null;
    public ?string $downvote = null;
    public ?string $due_date = null;
    public ?array $epic = null;
    public ?string $epic_iid = null;
    public ?bool $has_task = null;
    public ?string $health_status = null;
    public ?int $id = null;
    public ?int $iid = null;
    public ?string $imported = null;
    public ?string $imported_from = null;
    public ?string $issue_link_id = null;
    public ?string $issue_type = null;
    public ?array $iteration = null;
    public ?array $label = null;
    public ?array $link = null;
    public ?string $link_created_at = null;
    public ?string $link_type = null;
    public ?string $link_updated_at = null;
    public ?string $merge_requests_count = null;
    public ?array $milestone = null;
    public ?string $moved_to_id = null;
    public ?int $project_id = null;
    public ?array $reference = null;
    public ?string $service_desk_reply_to = null;
    public ?string $severity = null;
    public ?string $state = null;
    public ?string $subscribed = null;
    public ?string $task_completion_status = null;
    public ?string $task_status = null;
    public ?array $time_stat = null;
    public ?string $title = null;
    public ?string $type = null;
    public ?string $updated_at = null;
    public ?string $upvote = null;
    public ?string $user_notes_count = null;
    public ?string $web_url = null;
    public ?string $weight = null;
}

/** Request payload for ApiEntitiesRelatedIssue#list. */
class ApiEntitiesRelatedIssueListMatch
{
    public string $issue_id;
    public string $project_id;
}

/** ApiEntitiesRelationImportTracker entity data model. */
class ApiEntitiesRelationImportTracker
{
}

/** Request payload for ApiEntitiesRelationImportTracker#create. */
class ApiEntitiesRelationImportTrackerCreateData
{
}

/** ApiEntitiesRelease entity data model. */
class ApiEntitiesRelease
{
    public ?array $asset = null;
    public ?array $author = null;
    public ?array $commit = null;
    public ?string $commit_path = null;
    public ?string $created_at = null;
    public ?string $description = null;
    public ?string $description_html = null;
    public ?array $evidence = null;
    public ?array $link = null;
    public ?array $milestone = null;
    public ?string $name = null;
    public ?string $released_at = null;
    public ?string $tag_name = null;
    public ?string $tag_path = null;
    public ?bool $upcoming_release = null;
}

/** Request payload for ApiEntitiesRelease#load. */
class ApiEntitiesReleaseLoadMatch
{
    public string $id;
    public string $project_id;
}

/** Request payload for ApiEntitiesRelease#list. */
class ApiEntitiesReleaseListMatch
{
    public ?string $project_id = null;
    public ?string $group_id = null;
}

/** Request payload for ApiEntitiesRelease#create. */
class ApiEntitiesReleaseCreateData
{
    public string $project_id;
    public mixed $tag_name = null;
}

/** Request payload for ApiEntitiesRelease#update. */
class ApiEntitiesReleaseUpdateData
{
    public string $id;
    public string $project_id;
}

/** ApiEntitiesReleasesLink entity data model. */
class ApiEntitiesReleasesLink
{
    public ?string $direct_asset_url = null;
    public ?int $id = null;
    public ?string $link_type = null;
    public ?string $name = null;
    public ?string $url = null;
}

/** Request payload for ApiEntitiesReleasesLink#load. */
class ApiEntitiesReleasesLinkLoadMatch
{
    public string $id;
    public string $project_id;
    public string $release_id;
}

/** Request payload for ApiEntitiesReleasesLink#list. */
class ApiEntitiesReleasesLinkListMatch
{
    public string $project_id;
    public string $release_id;
}

/** Request payload for ApiEntitiesReleasesLink#create. */
class ApiEntitiesReleasesLinkCreateData
{
    public string $project_id;
    public string $release_id;
}

/** Request payload for ApiEntitiesReleasesLink#update. */
class ApiEntitiesReleasesLinkUpdateData
{
    public string $id;
    public string $project_id;
    public string $release_id;
}

/** ApiEntitiesRemoteMirror entity data model. */
class ApiEntitiesRemoteMirror
{
    public ?string $auth_method = null;
    public ?bool $enabled = null;
    public ?array $host_key = null;
    public ?int $id = null;
    public ?bool $keep_divergent_ref = null;
    public ?int $last_error = null;
    public ?string $last_successful_update_at = null;
    public ?string $last_update_at = null;
    public ?string $last_update_started_at = null;
    public ?string $mirror_branch_regex = null;
    public ?bool $only_protected_branch = null;
    public ?string $update_status = null;
    public ?string $url = null;
}

/** Request payload for ApiEntitiesRemoteMirror#load. */
class ApiEntitiesRemoteMirrorLoadMatch
{
    public string $id;
    public string $project_id;
}

/** Request payload for ApiEntitiesRemoteMirror#list. */
class ApiEntitiesRemoteMirrorListMatch
{
    public string $project_id;
}

/** Request payload for ApiEntitiesRemoteMirror#create. */
class ApiEntitiesRemoteMirrorCreateData
{
    public string $project_id;
}

/** Request payload for ApiEntitiesRemoteMirror#update. */
class ApiEntitiesRemoteMirrorUpdateData
{
    public string $id;
    public string $project_id;
}

/** ApiEntitiesRepositoryHealth entity data model. */
class ApiEntitiesRepositoryHealth
{
    public ?array $alternate = null;
    public ?array $bitmap = null;
    public ?array $commit_graph = null;
    public ?bool $is_object_pool = null;
    public ?array $last_full_repack = null;
    public ?array $multi_pack_index = null;
    public ?array $multi_pack_index_bitmap = null;
    public ?array $object = null;
    public ?array $reference = null;
    public ?int $size = null;
    public ?string $updated_at = null;
}

/** Request payload for ApiEntitiesRepositoryHealth#load. */
class ApiEntitiesRepositoryHealthLoadMatch
{
    public string $project_id;
}

/** ApiEntitiesResourceAccessTokenWithToken entity data model. */
class ApiEntitiesResourceAccessTokenWithToken
{
    public ?int $access_level = null;
    public ?bool $active = null;
    public ?string $created_at = null;
    public ?string $description = null;
    public ?string $expires_at = null;
    public ?int $id = null;
    public ?string $last_used_at = null;
    public ?string $name = null;
    public ?int $resource_id = null;
    public ?string $resource_type = null;
    public ?bool $revoked = null;
    public ?array $scope = null;
    public ?string $token = null;
    public ?int $user_id = null;
}

/** Request payload for ApiEntitiesResourceAccessTokenWithToken#create. */
class ApiEntitiesResourceAccessTokenWithTokenCreateData
{
    public ?string $group_id = null;
    public ?string $project_id = null;
}

/** ApiEntitiesResourceMilestoneEvent entity data model. */
class ApiEntitiesResourceMilestoneEvent
{
    public ?string $action = null;
    public ?string $created_at = null;
    public ?int $id = null;
    public ?array $milestone = null;
    public ?int $resource_id = null;
    public ?string $resource_type = null;
    public ?string $state = null;
    public ?array $user = null;
}

/** Request payload for ApiEntitiesResourceMilestoneEvent#load. */
class ApiEntitiesResourceMilestoneEventLoadMatch
{
    public string $id;
    public ?string $issue_id = null;
    public string $project_id;
    public ?string $merge_request_id = null;
}

/** Request payload for ApiEntitiesResourceMilestoneEvent#list. */
class ApiEntitiesResourceMilestoneEventListMatch
{
    public ?string $issue_id = null;
    public string $project_id;
    public ?string $merge_request_id = null;
}

/** ApiEntitiesSnippet entity data model. */
class ApiEntitiesSnippet
{
    public ?array $author = null;
    public ?string $created_at = null;
    public ?string $description = null;
    public ?array $file = null;
    public ?string $file_name = null;
    public ?string $http_url_to_repo = null;
    public ?int $id = null;
    public ?bool $imported = null;
    public ?string $imported_from = null;
    public ?int $project_id = null;
    public ?string $raw_url = null;
    public ?string $repository_storage = null;
    public ?string $ssh_url_to_repo = null;
    public ?string $title = null;
    public ?string $updated_at = null;
    public ?string $visibility = null;
    public ?string $web_url = null;
}

/** Request payload for ApiEntitiesSnippet#list. */
class ApiEntitiesSnippetListMatch
{
    public ?array $author = null;
    public ?string $created_at = null;
    public ?string $description = null;
    public ?array $file = null;
    public ?string $file_name = null;
    public ?string $http_url_to_repo = null;
    public ?int $id = null;
    public ?bool $imported = null;
    public ?string $imported_from = null;
    public ?int $project_id = null;
    public ?string $raw_url = null;
    public ?string $repository_storage = null;
    public ?string $ssh_url_to_repo = null;
    public ?string $title = null;
    public ?string $updated_at = null;
    public ?string $visibility = null;
    public ?string $web_url = null;
}

/** ApiEntitiesSshKeyWithUser entity data model. */
class ApiEntitiesSshKeyWithUser
{
    public ?string $created_at = null;
    public ?string $expires_at = null;
    public ?int $id = null;
    public ?string $key = null;
    public ?string $last_used_at = null;
    public ?string $title = null;
    public ?string $usage_type = null;
    public ?array $user = null;
}

/** Request payload for ApiEntitiesSshKeyWithUser#load. */
class ApiEntitiesSshKeyWithUserLoadMatch
{
    public string $id;
}

/** ApiEntitiesSuggestion entity data model. */
class ApiEntitiesSuggestion
{
    public ?string $appliable = null;
    public ?string $applied = null;
    public ?string $from_content = null;
    public ?string $from_line = null;
    public ?string $id = null;
    public ?string $to_content = null;
    public ?string $to_line = null;
}

/** Request payload for ApiEntitiesSuggestion#update. */
class ApiEntitiesSuggestionUpdateData
{
    public ?string $suggestion_id = null;
}

/** ApiEntitiesSystemBroadcastMessage entity data model. */
class ApiEntitiesSystemBroadcastMessage
{
    public ?bool $active = null;
    public ?string $broadcast_type = null;
    public ?string $color = null;
    public ?string $dismissable = null;
    public ?string $ends_at = null;
    public ?string $font = null;
    public ?string $id = null;
    public ?string $message = null;
    public ?string $starts_at = null;
    public ?string $target_access_level = null;
    public ?string $target_path = null;
    public ?string $theme = null;
}

/** Request payload for ApiEntitiesSystemBroadcastMessage#load. */
class ApiEntitiesSystemBroadcastMessageLoadMatch
{
    public ?string $id = null;
}

/** Request payload for ApiEntitiesSystemBroadcastMessage#create. */
class ApiEntitiesSystemBroadcastMessageCreateData
{
    public ?bool $active = null;
    public ?string $broadcast_type = null;
    public ?string $color = null;
    public ?string $dismissable = null;
    public ?string $ends_at = null;
    public ?string $font = null;
    public ?string $id = null;
    public ?string $message = null;
    public ?string $starts_at = null;
    public ?string $target_access_level = null;
    public ?string $target_path = null;
    public ?string $theme = null;
}

/** Request payload for ApiEntitiesSystemBroadcastMessage#update. */
class ApiEntitiesSystemBroadcastMessageUpdateData
{
    public string $id;
}

/** Request payload for ApiEntitiesSystemBroadcastMessage#remove. */
class ApiEntitiesSystemBroadcastMessageRemoveMatch
{
    public string $id;
}

/** ApiEntitiesTag entity data model. */
class ApiEntitiesTag
{
    public ?array $commit = null;
    public ?string $created_at = null;
    public ?string $message = null;
    public ?string $name = null;
    public ?bool $protected = null;
    public ?array $release = null;
    public ?string $target = null;
}

/** Request payload for ApiEntitiesTag#load. */
class ApiEntitiesTagLoadMatch
{
    public string $id;
    public string $project_id;
}

/** Request payload for ApiEntitiesTag#list. */
class ApiEntitiesTagListMatch
{
    public string $project_id;
}

/** Request payload for ApiEntitiesTag#create. */
class ApiEntitiesTagCreateData
{
    public string $project_id;
}

/** ApiEntitiesTagSignature entity data model. */
class ApiEntitiesTagSignature
{
    public ?string $signature = null;
    public ?string $signature_type = null;
}

/** Request payload for ApiEntitiesTagSignature#load. */
class ApiEntitiesTagSignatureLoadMatch
{
    public string $project_id;
    public mixed $tag_name;
}

/** ApiEntitiesTemplatesList entity data model. */
class ApiEntitiesTemplatesList
{
    public ?string $key = null;
    public ?string $name = null;
}

/** Request payload for ApiEntitiesTemplatesList#load. */
class ApiEntitiesTemplatesListLoadMatch
{
    public string $project_id;
    public mixed $type;
}

/** ApiEntitiesTerraformModuleVersion entity data model. */
class ApiEntitiesTerraformModuleVersion
{
    public ?string $module = null;
    public ?string $name = null;
    public ?string $provider = null;
    public ?string $root = null;
    public ?string $source = null;
    public ?string $submodule = null;
    public ?string $version = null;
}

/** Request payload for ApiEntitiesTerraformModuleVersion#load. */
class ApiEntitiesTerraformModuleVersionLoadMatch
{
    public mixed $module_name;
    public mixed $module_system;
    public ?string $v1_id = null;
    public mixed $module_namespace = null;
}

/** Request payload for ApiEntitiesTerraformModuleVersion#list. */
class ApiEntitiesTerraformModuleVersionListMatch
{
    public mixed $module_name;
    public mixed $module_system;
    public string $v1_id;
}

/** ApiEntitiesTreeObject entity data model. */
class ApiEntitiesTreeObject
{
    public ?string $id = null;
    public ?string $mode = null;
    public ?string $name = null;
    public ?string $path = null;
    public ?string $type = null;
}

/** Request payload for ApiEntitiesTreeObject#load. */
class ApiEntitiesTreeObjectLoadMatch
{
    public string $project_id;
}

/** ApiEntitiesTrigger entity data model. */
class ApiEntitiesTrigger
{
    public ?string $created_at = null;
    public ?string $description = null;
    public ?string $expires_at = null;
    public ?int $id = null;
    public ?string $last_used = null;
    public ?array $owner = null;
    public ?string $token = null;
    public ?string $updated_at = null;
}

/** Request payload for ApiEntitiesTrigger#load. */
class ApiEntitiesTriggerLoadMatch
{
    public string $id;
    public string $project_id;
}

/** Request payload for ApiEntitiesTrigger#list. */
class ApiEntitiesTriggerListMatch
{
    public string $project_id;
}

/** Request payload for ApiEntitiesTrigger#create. */
class ApiEntitiesTriggerCreateData
{
    public string $project_id;
}

/** Request payload for ApiEntitiesTrigger#update. */
class ApiEntitiesTriggerUpdateData
{
    public string $id;
    public string $project_id;
}

/** ApiEntitiesUserAgentDetail entity data model. */
class ApiEntitiesUserAgentDetail
{
    public ?bool $akismet_submitted = null;
    public ?string $ip_address = null;
    public ?string $user_agent = null;
}

/** Request payload for ApiEntitiesUserAgentDetail#load. */
class ApiEntitiesUserAgentDetailLoadMatch
{
    public ?string $issue_id = null;
    public ?string $project_id = null;
    public ?string $snippet_id = null;
}

/** ApiEntitiesUserCount entity data model. */
class ApiEntitiesUserCount
{
    public ?int $assigned_issue = null;
    public ?int $assigned_merge_request = null;
    public ?int $merge_request = null;
    public ?int $review_requested_merge_request = null;
    public ?int $todo = null;
}

/** Request payload for ApiEntitiesUserCount#load. */
class ApiEntitiesUserCountLoadMatch
{
    public ?int $assigned_issue = null;
    public ?int $assigned_merge_request = null;
    public ?int $merge_request = null;
    public ?int $review_requested_merge_request = null;
    public ?int $todo = null;
}

/** ApiEntitiesUserPublic entity data model. */
class ApiEntitiesUserPublic
{
    public ?string $avatar_path = null;
    public ?string $avatar_url = null;
    public ?string $bio = null;
    public ?string $bot = null;
    public ?bool $can_create_group = null;
    public ?bool $can_create_project = null;
    public ?int $color_scheme_id = null;
    public ?string $commit_email = null;
    public ?string $confirmed_at = null;
    public ?string $created_at = null;
    public ?string $current_sign_in_at = null;
    public ?array $custom_attribute = null;
    public ?string $discord = null;
    public ?string $email = null;
    public ?string $external = null;
    public ?string $extra_shared_runners_minutes_limit = null;
    public ?string $follower = null;
    public ?string $following = null;
    public ?string $github = null;
    public ?int $id = null;
    public ?array $identity = null;
    public ?bool $is_followed = null;
    public ?string $job_title = null;
    public ?string $key = null;
    public ?string $last_activity_on = null;
    public ?string $last_sign_in_at = null;
    public ?string $linkedin = null;
    public ?string $local_time = null;
    public ?string $location = null;
    public ?bool $locked = null;
    public ?string $name = null;
    public ?string $organization = null;
    public ?string $preferred_language = null;
    public ?bool $private_profile = null;
    public ?int $projects_limit = null;
    public ?string $pronoun = null;
    public ?string $public_email = null;
    public ?array $scim_identity = null;
    public ?string $shared_runners_minutes_limit = null;
    public ?string $state = null;
    public ?int $theme_id = null;
    public ?string $twitter = null;
    public ?bool $two_factor_enabled = null;
    public ?string $username = null;
    public ?string $value = null;
    public ?string $web_url = null;
    public ?string $website_url = null;
    public ?string $work_information = null;
}

/** Request payload for ApiEntitiesUserPublic#list. */
class ApiEntitiesUserPublicListMatch
{
    public string $group_id;
}

/** ApiEntitiesUserWithAdmin entity data model. */
class ApiEntitiesUserWithAdmin
{
    public ?string $key = null;
    public ?string $value = null;
}

/** Request payload for ApiEntitiesUserWithAdmin#list. */
class ApiEntitiesUserWithAdminListMatch
{
    public ?string $key = null;
    public ?string $value = null;
}

/** ApiEntitiesWikiAttachment entity data model. */
class ApiEntitiesWikiAttachment
{
}

/** Request payload for ApiEntitiesWikiAttachment#create. */
class ApiEntitiesWikiAttachmentCreateData
{
    public ?string $group_id = null;
    public ?string $project_id = null;
}

/** ApiEntitiesWikiPage entity data model. */
class ApiEntitiesWikiPage
{
    public ?string $content = null;
    public ?string $encoding = null;
    public ?string $format = null;
    public ?array $front_matter = null;
    public ?string $slug = null;
    public ?string $title = null;
    public ?int $wiki_page_meta_id = null;
}

/** Request payload for ApiEntitiesWikiPage#load. */
class ApiEntitiesWikiPageLoadMatch
{
    public ?string $group_id = null;
    public string $slug;
    public ?string $project_id = null;
}

/** Request payload for ApiEntitiesWikiPage#create. */
class ApiEntitiesWikiPageCreateData
{
    public ?string $group_id = null;
    public ?string $project_id = null;
}

/** Request payload for ApiEntitiesWikiPage#update. */
class ApiEntitiesWikiPageUpdateData
{
    public ?string $group_id = null;
    public string $slug;
    public ?string $project_id = null;
}

/** ApiEntitiesWikiPageBasic entity data model. */
class ApiEntitiesWikiPageBasic
{
    public ?string $format = null;
    public ?string $slug = null;
    public ?string $title = null;
    public ?int $wiki_page_meta_id = null;
}

/** Request payload for ApiEntitiesWikiPageBasic#list. */
class ApiEntitiesWikiPageBasicListMatch
{
    public ?string $group_id = null;
    public ?string $project_id = null;
}

/** Application entity data model. */
class Application
{
}

/** Request payload for Application#remove. */
class ApplicationRemoveMatch
{
    public string $id;
}

/** AwardEmoji entity data model. */
class AwardEmoji
{
}

/** Request payload for AwardEmoji#remove. */
class AwardEmojiRemoveMatch
{
    public ?string $epic_id = null;
    public ?string $group_id = null;
    public string $id;
    public ?string $note_id = null;
    public ?string $issue_id = null;
    public ?string $project_id = null;
    public ?string $merge_request_id = null;
    public ?string $snippet_id = null;
}

/** Badge entity data model. */
class Badge
{
}

/** Request payload for Badge#remove. */
class BadgeRemoveMatch
{
    public ?string $group_id = null;
    public string $id;
    public ?string $project_id = null;
}

/** Branch entity data model. */
class Branch
{
}

/** Request payload for Branch#remove. */
class BranchRemoveMatch
{
    public ?string $id = null;
    public string $project_id;
}

/** CargoPackage entity data model. */
class CargoPackage
{
}

/** Request payload for CargoPackage#load. */
class CargoPackageLoadMatch
{
    public string $project_id;
}

/** CiVariable entity data model. */
class CiVariable
{
}

/** Request payload for CiVariable#remove. */
class CiVariableRemoveMatch
{
    public string $id;
    public ?string $project_id = null;
    public ?string $group_id = null;
}

/** Cluster entity data model. */
class Cluster
{
}

/** Request payload for Cluster#remove. */
class ClusterRemoveMatch
{
    public ?string $group_id = null;
    public string $id;
    public ?string $project_id = null;
}

/** ClusterAgent entity data model. */
class ClusterAgent
{
}

/** Request payload for ClusterAgent#remove. */
class ClusterAgentRemoveMatch
{
    public string $id;
    public string $project_id;
    public ?string $token_id = null;
}

/** Composer entity data model. */
class Composer
{
}

/** Request payload for Composer#create. */
class ComposerCreateData
{
    public string $project_id;
}

/** ComposerPackage entity data model. */
class ComposerPackage
{
}

/** Request payload for ComposerPackage#load. */
class ComposerPackageLoadMatch
{
    public ?string $project_id = null;
    public ?string $group_id = null;
    public mixed $sha = null;
}

/** Conan entity data model. */
class Conan
{
}

/** Request payload for Conan#remove. */
class ConanRemoveMatch
{
    public ?string $id = null;
    public mixed $package_channel;
    public mixed $package_name;
    public mixed $package_username;
    public mixed $package_version;
}

/** ConanPackage entity data model. */
class ConanPackage
{
}

/** Request payload for ConanPackage#load. */
class ConanPackageLoadMatch
{
    public mixed $conan_package_reference = null;
    public mixed $file_name = null;
    public ?string $id = null;
    public mixed $package_channel = null;
    public mixed $package_name = null;
    public mixed $package_revision = null;
    public mixed $package_username = null;
    public mixed $package_version = null;
    public mixed $recipe_revision = null;
    public ?string $conan_id = null;
    public ?string $package_id = null;
    public ?string $project_id = null;
    public ?string $revision_id = null;
    public ?string $file_id = null;
}

/** Request payload for ConanPackage#update. */
class ConanPackageUpdateData
{
    public mixed $conan_package_reference = null;
    public mixed $file_name;
    public ?string $id = null;
    public mixed $package_channel;
    public mixed $package_name = null;
    public mixed $package_revision = null;
    public mixed $package_username;
    public mixed $package_version;
    public mixed $recipe_revision = null;
    public ?string $conan_id = null;
    public ?string $package_id = null;
    public ?string $project_id = null;
    public ?string $revision_id = null;
    public ?string $file_id = null;
}

/** Request payload for ConanPackage#remove. */
class ConanPackageRemoveMatch
{
    public string $conan_id;
    public mixed $package_channel;
    public ?string $package_id = null;
    public mixed $package_revision = null;
    public mixed $package_username;
    public mixed $package_version;
    public string $project_id;
    public ?string $revision_id = null;
    public mixed $recipe_revision = null;
}

/** ContainerRegistry entity data model. */
class ContainerRegistry
{
}

/** Request payload for ContainerRegistry#remove. */
class ContainerRegistryRemoveMatch
{
    public string $project_id;
    public string $repository_id;
    public mixed $tag_name = null;
}

/** ContainerRegistryEvent entity data model. */
class ContainerRegistryEvent
{
}

/** Request payload for ContainerRegistryEvent#create. */
class ContainerRegistryEventCreateData
{
}

/** CustomAttribute entity data model. */
class CustomAttribute
{
    public ?string $key = null;
    public ?string $value = null;
}

/** Request payload for CustomAttribute#load. */
class CustomAttributeLoadMatch
{
    public ?string $group_id = null;
    public ?string $id = null;
    public ?string $project_id = null;
}

/** Debian entity data model. */
class Debian
{
}

/** Request payload for Debian#update. */
class DebianUpdateData
{
    public string $id;
    public string $project_id;
}

/** DebianDistribution entity data model. */
class DebianDistribution
{
}

/** Request payload for DebianDistribution#remove. */
class DebianDistributionRemoveMatch
{
    public ?string $group_id = null;
    public string $id;
    public ?string $project_id = null;
}

/** DebianPackage entity data model. */
class DebianPackage
{
}

/** Request payload for DebianPackage#load. */
class DebianPackageLoadMatch
{
    public mixed $distribution = null;
    public mixed $file_name = null;
    public ?string $id = null;
    public mixed $letter = null;
    public mixed $package_name = null;
    public mixed $package_version = null;
    public ?string $project_id = null;
    public mixed $architecture = null;
    public ?string $distribution_id = null;
    public mixed $file_sha256 = null;
    public ?string $group_id = null;
}

/** Request payload for DebianPackage#update. */
class DebianPackageUpdateData
{
    public mixed $file_name;
    public string $project_id;
}

/** DependencyProxy entity data model. */
class DependencyProxy
{
}

/** Request payload for DependencyProxy#remove. */
class DependencyProxyRemoveMatch
{
    public string $group_id;
}

/** DeployKey entity data model. */
class DeployKey
{
}

/** Request payload for DeployKey#remove. */
class DeployKeyRemoveMatch
{
    public string $id;
    public string $project_id;
}

/** DeployToken entity data model. */
class DeployToken
{
}

/** Request payload for DeployToken#remove. */
class DeployTokenRemoveMatch
{
    public ?string $group_id = null;
    public string $id;
    public ?string $project_id = null;
}

/** Deployment entity data model. */
class Deployment
{
}

/** Request payload for Deployment#remove. */
class DeploymentRemoveMatch
{
    public string $id;
    public string $project_id;
}

/** EeApiEntitiesApprovalState entity data model. */
class EeApiEntitiesApprovalState
{
}

/** Request payload for EeApiEntitiesApprovalState#create. */
class EeApiEntitiesApprovalStateCreateData
{
    public string $merge_request_id;
    public string $project_id;
}

/** EeApiEntitiesAuditEvent entity data model. */
class EeApiEntitiesAuditEvent
{
    public ?string $author_id = null;
    public ?string $created_at = null;
    public ?string $detail = null;
    public ?string $entity_id = null;
    public ?string $entity_type = null;
    public ?string $event_name = null;
    public ?string $id = null;
}

/** Request payload for EeApiEntitiesAuditEvent#load. */
class EeApiEntitiesAuditEventLoadMatch
{
    public ?string $group_id = null;
    public string $id;
    public ?string $project_id = null;
}

/** Request payload for EeApiEntitiesAuditEvent#list. */
class EeApiEntitiesAuditEventListMatch
{
    public ?string $group_id = null;
    public ?string $project_id = null;
}

/** EeApiEntitiesBillableMembership entity data model. */
class EeApiEntitiesBillableMembership
{
    public ?array $access_level = null;
    public ?string $created_at = null;
    public ?string $expires_at = null;
    public ?string $id = null;
    public ?string $source_full_name = null;
    public ?string $source_id = null;
    public ?string $source_members_url = null;
}

/** Request payload for EeApiEntitiesBillableMembership#load. */
class EeApiEntitiesBillableMembershipLoadMatch
{
    public string $billable_member_id;
    public string $group_id;
}

/** EeApiEntitiesGeoNodeStatus entity data model. */
class EeApiEntitiesGeoNodeStatus
{
    public ?string $ci_secure_files_checksum_failed_count = null;
    public ?string $ci_secure_files_checksum_total_count = null;
    public ?string $ci_secure_files_checksummed_count = null;
    public ?string $ci_secure_files_count = null;
    public ?string $ci_secure_files_failed_count = null;
    public ?string $ci_secure_files_registry_count = null;
    public ?string $ci_secure_files_synced_count = null;
    public ?string $ci_secure_files_synced_in_percentage = null;
    public ?string $ci_secure_files_verification_failed_count = null;
    public ?string $ci_secure_files_verification_total_count = null;
    public ?string $ci_secure_files_verified_count = null;
    public ?string $ci_secure_files_verified_in_percentage = null;
    public ?string $container_repositories_checksum_failed_count = null;
    public ?string $container_repositories_checksum_total_count = null;
    public ?string $container_repositories_checksummed_count = null;
    public ?string $container_repositories_count = null;
    public ?string $container_repositories_failed_count = null;
    public ?string $container_repositories_registry_count = null;
    public ?string $container_repositories_replication_enabled = null;
    public ?string $container_repositories_synced_count = null;
    public ?string $container_repositories_synced_in_percentage = null;
    public ?string $container_repositories_verification_failed_count = null;
    public ?string $container_repositories_verification_total_count = null;
    public ?string $container_repositories_verified_count = null;
    public ?string $container_repositories_verified_in_percentage = null;
    public ?string $cursor_last_event_id = null;
    public ?string $cursor_last_event_timestamp = null;
    public ?string $db_replication_lag_second = null;
    public ?string $dependency_proxy_blobs_checksum_failed_count = null;
    public ?string $dependency_proxy_blobs_checksum_total_count = null;
    public ?string $dependency_proxy_blobs_checksummed_count = null;
    public ?string $dependency_proxy_blobs_count = null;
    public ?string $dependency_proxy_blobs_failed_count = null;
    public ?string $dependency_proxy_blobs_registry_count = null;
    public ?string $dependency_proxy_blobs_synced_count = null;
    public ?string $dependency_proxy_blobs_synced_in_percentage = null;
    public ?string $dependency_proxy_blobs_verification_failed_count = null;
    public ?string $dependency_proxy_blobs_verification_total_count = null;
    public ?string $dependency_proxy_blobs_verified_count = null;
    public ?string $dependency_proxy_blobs_verified_in_percentage = null;
    public ?string $dependency_proxy_manifests_checksum_failed_count = null;
    public ?string $dependency_proxy_manifests_checksum_total_count = null;
    public ?string $dependency_proxy_manifests_checksummed_count = null;
    public ?string $dependency_proxy_manifests_count = null;
    public ?string $dependency_proxy_manifests_failed_count = null;
    public ?string $dependency_proxy_manifests_registry_count = null;
    public ?string $dependency_proxy_manifests_synced_count = null;
    public ?string $dependency_proxy_manifests_synced_in_percentage = null;
    public ?string $dependency_proxy_manifests_verification_failed_count = null;
    public ?string $dependency_proxy_manifests_verification_total_count = null;
    public ?string $dependency_proxy_manifests_verified_count = null;
    public ?string $dependency_proxy_manifests_verified_in_percentage = null;
    public ?string $design_management_repositories_checksum_failed_count = null;
    public ?string $design_management_repositories_checksum_total_count = null;
    public ?string $design_management_repositories_checksummed_count = null;
    public ?string $design_management_repositories_count = null;
    public ?string $design_management_repositories_failed_count = null;
    public ?string $design_management_repositories_registry_count = null;
    public ?string $design_management_repositories_synced_count = null;
    public ?string $design_management_repositories_synced_in_percentage = null;
    public ?string $design_management_repositories_verification_failed_count = null;
    public ?string $design_management_repositories_verification_total_count = null;
    public ?string $design_management_repositories_verified_count = null;
    public ?string $design_management_repositories_verified_in_percentage = null;
    public ?string $geo_node_id = null;
    public ?string $git_fetch_event_count_weekly = null;
    public ?string $git_push_event_count_weekly = null;
    public ?string $group_wiki_repositories_checksum_failed_count = null;
    public ?string $group_wiki_repositories_checksum_total_count = null;
    public ?string $group_wiki_repositories_checksummed_count = null;
    public ?string $group_wiki_repositories_count = null;
    public ?string $group_wiki_repositories_failed_count = null;
    public ?string $group_wiki_repositories_registry_count = null;
    public ?string $group_wiki_repositories_synced_count = null;
    public ?string $group_wiki_repositories_synced_in_percentage = null;
    public ?string $group_wiki_repositories_verification_failed_count = null;
    public ?string $group_wiki_repositories_verification_total_count = null;
    public ?string $group_wiki_repositories_verified_count = null;
    public ?string $group_wiki_repositories_verified_in_percentage = null;
    public ?string $health = null;
    public ?string $health_status = null;
    public ?string $healthy = null;
    public ?string $job_artifacts_checksum_failed_count = null;
    public ?string $job_artifacts_checksum_total_count = null;
    public ?string $job_artifacts_checksummed_count = null;
    public ?string $job_artifacts_count = null;
    public ?string $job_artifacts_failed_count = null;
    public ?string $job_artifacts_registry_count = null;
    public ?string $job_artifacts_synced_count = null;
    public ?string $job_artifacts_synced_in_percentage = null;
    public ?string $job_artifacts_verification_failed_count = null;
    public ?string $job_artifacts_verification_total_count = null;
    public ?string $job_artifacts_verified_count = null;
    public ?string $job_artifacts_verified_in_percentage = null;
    public ?string $last_event_id = null;
    public ?string $last_event_timestamp = null;
    public ?string $last_successful_status_check_timestamp = null;
    public ?string $lfs_objects_checksum_failed_count = null;
    public ?string $lfs_objects_checksum_total_count = null;
    public ?string $lfs_objects_checksummed_count = null;
    public ?string $lfs_objects_count = null;
    public ?string $lfs_objects_failed_count = null;
    public ?string $lfs_objects_registry_count = null;
    public ?string $lfs_objects_synced_count = null;
    public ?string $lfs_objects_synced_in_percentage = null;
    public ?string $lfs_objects_verification_failed_count = null;
    public ?string $lfs_objects_verification_total_count = null;
    public ?string $lfs_objects_verified_count = null;
    public ?string $lfs_objects_verified_in_percentage = null;
    public ?array $link = null;
    public ?string $merge_request_diffs_checksum_failed_count = null;
    public ?string $merge_request_diffs_checksum_total_count = null;
    public ?string $merge_request_diffs_checksummed_count = null;
    public ?string $merge_request_diffs_count = null;
    public ?string $merge_request_diffs_failed_count = null;
    public ?string $merge_request_diffs_registry_count = null;
    public ?string $merge_request_diffs_synced_count = null;
    public ?string $merge_request_diffs_synced_in_percentage = null;
    public ?string $merge_request_diffs_verification_failed_count = null;
    public ?string $merge_request_diffs_verification_total_count = null;
    public ?string $merge_request_diffs_verified_count = null;
    public ?string $merge_request_diffs_verified_in_percentage = null;
    public ?string $missing_oauth_application = null;
    public ?array $namespace = null;
    public ?string $package_files_checksum_failed_count = null;
    public ?string $package_files_checksum_total_count = null;
    public ?string $package_files_checksummed_count = null;
    public ?string $package_files_count = null;
    public ?string $package_files_failed_count = null;
    public ?string $package_files_registry_count = null;
    public ?string $package_files_synced_count = null;
    public ?string $package_files_synced_in_percentage = null;
    public ?string $package_files_verification_failed_count = null;
    public ?string $package_files_verification_total_count = null;
    public ?string $package_files_verified_count = null;
    public ?string $package_files_verified_in_percentage = null;
    public ?string $pages_deployments_checksum_failed_count = null;
    public ?string $pages_deployments_checksum_total_count = null;
    public ?string $pages_deployments_checksummed_count = null;
    public ?string $pages_deployments_count = null;
    public ?string $pages_deployments_failed_count = null;
    public ?string $pages_deployments_registry_count = null;
    public ?string $pages_deployments_synced_count = null;
    public ?string $pages_deployments_synced_in_percentage = null;
    public ?string $pages_deployments_verification_failed_count = null;
    public ?string $pages_deployments_verification_total_count = null;
    public ?string $pages_deployments_verified_count = null;
    public ?string $pages_deployments_verified_in_percentage = null;
    public ?string $pipeline_artifacts_checksum_failed_count = null;
    public ?string $pipeline_artifacts_checksum_total_count = null;
    public ?string $pipeline_artifacts_checksummed_count = null;
    public ?string $pipeline_artifacts_count = null;
    public ?string $pipeline_artifacts_failed_count = null;
    public ?string $pipeline_artifacts_registry_count = null;
    public ?string $pipeline_artifacts_synced_count = null;
    public ?string $pipeline_artifacts_synced_in_percentage = null;
    public ?string $pipeline_artifacts_verification_failed_count = null;
    public ?string $pipeline_artifacts_verification_total_count = null;
    public ?string $pipeline_artifacts_verified_count = null;
    public ?string $pipeline_artifacts_verified_in_percentage = null;
    public ?string $project_repositories_checksum_failed_count = null;
    public ?string $project_repositories_checksum_total_count = null;
    public ?string $project_repositories_checksummed_count = null;
    public ?string $project_repositories_count = null;
    public ?string $project_repositories_failed_count = null;
    public ?string $project_repositories_registry_count = null;
    public ?string $project_repositories_synced_count = null;
    public ?string $project_repositories_synced_in_percentage = null;
    public ?string $project_repositories_verification_failed_count = null;
    public ?string $project_repositories_verification_total_count = null;
    public ?string $project_repositories_verified_count = null;
    public ?string $project_repositories_verified_in_percentage = null;
    public ?string $project_wiki_repositories_checksum_failed_count = null;
    public ?string $project_wiki_repositories_checksum_total_count = null;
    public ?string $project_wiki_repositories_checksummed_count = null;
    public ?string $project_wiki_repositories_count = null;
    public ?string $project_wiki_repositories_failed_count = null;
    public ?string $project_wiki_repositories_registry_count = null;
    public ?string $project_wiki_repositories_synced_count = null;
    public ?string $project_wiki_repositories_synced_in_percentage = null;
    public ?string $project_wiki_repositories_verification_failed_count = null;
    public ?string $project_wiki_repositories_verification_total_count = null;
    public ?string $project_wiki_repositories_verified_count = null;
    public ?string $project_wiki_repositories_verified_in_percentage = null;
    public ?string $projects_count = null;
    public ?string $proxy_local_requests_event_count_weekly = null;
    public ?string $proxy_remote_requests_event_count_weekly = null;
    public ?string $replication_slots_count = null;
    public ?string $replication_slots_max_retained_wal_byte = null;
    public ?string $replication_slots_used_count = null;
    public ?string $replication_slots_used_in_percentage = null;
    public ?string $repositories_checked_count = null;
    public ?string $repositories_checked_failed_count = null;
    public ?string $repositories_checked_in_percentage = null;
    public ?string $repositories_count = null;
    public ?string $revision = null;
    public ?string $selective_sync_type = null;
    public ?string $snippet_repositories_checksum_failed_count = null;
    public ?string $snippet_repositories_checksum_total_count = null;
    public ?string $snippet_repositories_checksummed_count = null;
    public ?string $snippet_repositories_count = null;
    public ?string $snippet_repositories_failed_count = null;
    public ?string $snippet_repositories_registry_count = null;
    public ?string $snippet_repositories_synced_count = null;
    public ?string $snippet_repositories_synced_in_percentage = null;
    public ?string $snippet_repositories_verification_failed_count = null;
    public ?string $snippet_repositories_verification_total_count = null;
    public ?string $snippet_repositories_verified_count = null;
    public ?string $snippet_repositories_verified_in_percentage = null;
    public ?array $storage_shard = null;
    public ?string $storage_shards_match = null;
    public ?string $terraform_state_versions_checksum_failed_count = null;
    public ?string $terraform_state_versions_checksum_total_count = null;
    public ?string $terraform_state_versions_checksummed_count = null;
    public ?string $terraform_state_versions_count = null;
    public ?string $terraform_state_versions_failed_count = null;
    public ?string $terraform_state_versions_registry_count = null;
    public ?string $terraform_state_versions_synced_count = null;
    public ?string $terraform_state_versions_synced_in_percentage = null;
    public ?string $terraform_state_versions_verification_failed_count = null;
    public ?string $terraform_state_versions_verification_total_count = null;
    public ?string $terraform_state_versions_verified_count = null;
    public ?string $terraform_state_versions_verified_in_percentage = null;
    public ?string $updated_at = null;
    public ?string $uploads_checksum_failed_count = null;
    public ?string $uploads_checksum_total_count = null;
    public ?string $uploads_checksummed_count = null;
    public ?string $uploads_count = null;
    public ?string $uploads_failed_count = null;
    public ?string $uploads_registry_count = null;
    public ?string $uploads_synced_count = null;
    public ?string $uploads_synced_in_percentage = null;
    public ?string $uploads_verification_failed_count = null;
    public ?string $uploads_verification_total_count = null;
    public ?string $uploads_verified_count = null;
    public ?string $uploads_verified_in_percentage = null;
    public ?string $version = null;
}

/** Request payload for EeApiEntitiesGeoNodeStatus#create. */
class EeApiEntitiesGeoNodeStatusCreateData
{
    public ?string $ci_secure_files_checksum_failed_count = null;
    public ?string $ci_secure_files_checksum_total_count = null;
    public ?string $ci_secure_files_checksummed_count = null;
    public ?string $ci_secure_files_count = null;
    public ?string $ci_secure_files_failed_count = null;
    public ?string $ci_secure_files_registry_count = null;
    public ?string $ci_secure_files_synced_count = null;
    public ?string $ci_secure_files_synced_in_percentage = null;
    public ?string $ci_secure_files_verification_failed_count = null;
    public ?string $ci_secure_files_verification_total_count = null;
    public ?string $ci_secure_files_verified_count = null;
    public ?string $ci_secure_files_verified_in_percentage = null;
    public ?string $container_repositories_checksum_failed_count = null;
    public ?string $container_repositories_checksum_total_count = null;
    public ?string $container_repositories_checksummed_count = null;
    public ?string $container_repositories_count = null;
    public ?string $container_repositories_failed_count = null;
    public ?string $container_repositories_registry_count = null;
    public ?string $container_repositories_replication_enabled = null;
    public ?string $container_repositories_synced_count = null;
    public ?string $container_repositories_synced_in_percentage = null;
    public ?string $container_repositories_verification_failed_count = null;
    public ?string $container_repositories_verification_total_count = null;
    public ?string $container_repositories_verified_count = null;
    public ?string $container_repositories_verified_in_percentage = null;
    public ?string $cursor_last_event_id = null;
    public ?string $cursor_last_event_timestamp = null;
    public ?string $db_replication_lag_second = null;
    public ?string $dependency_proxy_blobs_checksum_failed_count = null;
    public ?string $dependency_proxy_blobs_checksum_total_count = null;
    public ?string $dependency_proxy_blobs_checksummed_count = null;
    public ?string $dependency_proxy_blobs_count = null;
    public ?string $dependency_proxy_blobs_failed_count = null;
    public ?string $dependency_proxy_blobs_registry_count = null;
    public ?string $dependency_proxy_blobs_synced_count = null;
    public ?string $dependency_proxy_blobs_synced_in_percentage = null;
    public ?string $dependency_proxy_blobs_verification_failed_count = null;
    public ?string $dependency_proxy_blobs_verification_total_count = null;
    public ?string $dependency_proxy_blobs_verified_count = null;
    public ?string $dependency_proxy_blobs_verified_in_percentage = null;
    public ?string $dependency_proxy_manifests_checksum_failed_count = null;
    public ?string $dependency_proxy_manifests_checksum_total_count = null;
    public ?string $dependency_proxy_manifests_checksummed_count = null;
    public ?string $dependency_proxy_manifests_count = null;
    public ?string $dependency_proxy_manifests_failed_count = null;
    public ?string $dependency_proxy_manifests_registry_count = null;
    public ?string $dependency_proxy_manifests_synced_count = null;
    public ?string $dependency_proxy_manifests_synced_in_percentage = null;
    public ?string $dependency_proxy_manifests_verification_failed_count = null;
    public ?string $dependency_proxy_manifests_verification_total_count = null;
    public ?string $dependency_proxy_manifests_verified_count = null;
    public ?string $dependency_proxy_manifests_verified_in_percentage = null;
    public ?string $design_management_repositories_checksum_failed_count = null;
    public ?string $design_management_repositories_checksum_total_count = null;
    public ?string $design_management_repositories_checksummed_count = null;
    public ?string $design_management_repositories_count = null;
    public ?string $design_management_repositories_failed_count = null;
    public ?string $design_management_repositories_registry_count = null;
    public ?string $design_management_repositories_synced_count = null;
    public ?string $design_management_repositories_synced_in_percentage = null;
    public ?string $design_management_repositories_verification_failed_count = null;
    public ?string $design_management_repositories_verification_total_count = null;
    public ?string $design_management_repositories_verified_count = null;
    public ?string $design_management_repositories_verified_in_percentage = null;
    public ?string $geo_node_id = null;
    public ?string $git_fetch_event_count_weekly = null;
    public ?string $git_push_event_count_weekly = null;
    public ?string $group_wiki_repositories_checksum_failed_count = null;
    public ?string $group_wiki_repositories_checksum_total_count = null;
    public ?string $group_wiki_repositories_checksummed_count = null;
    public ?string $group_wiki_repositories_count = null;
    public ?string $group_wiki_repositories_failed_count = null;
    public ?string $group_wiki_repositories_registry_count = null;
    public ?string $group_wiki_repositories_synced_count = null;
    public ?string $group_wiki_repositories_synced_in_percentage = null;
    public ?string $group_wiki_repositories_verification_failed_count = null;
    public ?string $group_wiki_repositories_verification_total_count = null;
    public ?string $group_wiki_repositories_verified_count = null;
    public ?string $group_wiki_repositories_verified_in_percentage = null;
    public ?string $health = null;
    public ?string $health_status = null;
    public ?string $healthy = null;
    public ?string $job_artifacts_checksum_failed_count = null;
    public ?string $job_artifacts_checksum_total_count = null;
    public ?string $job_artifacts_checksummed_count = null;
    public ?string $job_artifacts_count = null;
    public ?string $job_artifacts_failed_count = null;
    public ?string $job_artifacts_registry_count = null;
    public ?string $job_artifacts_synced_count = null;
    public ?string $job_artifacts_synced_in_percentage = null;
    public ?string $job_artifacts_verification_failed_count = null;
    public ?string $job_artifacts_verification_total_count = null;
    public ?string $job_artifacts_verified_count = null;
    public ?string $job_artifacts_verified_in_percentage = null;
    public ?string $last_event_id = null;
    public ?string $last_event_timestamp = null;
    public ?string $last_successful_status_check_timestamp = null;
    public ?string $lfs_objects_checksum_failed_count = null;
    public ?string $lfs_objects_checksum_total_count = null;
    public ?string $lfs_objects_checksummed_count = null;
    public ?string $lfs_objects_count = null;
    public ?string $lfs_objects_failed_count = null;
    public ?string $lfs_objects_registry_count = null;
    public ?string $lfs_objects_synced_count = null;
    public ?string $lfs_objects_synced_in_percentage = null;
    public ?string $lfs_objects_verification_failed_count = null;
    public ?string $lfs_objects_verification_total_count = null;
    public ?string $lfs_objects_verified_count = null;
    public ?string $lfs_objects_verified_in_percentage = null;
    public ?array $link = null;
    public ?string $merge_request_diffs_checksum_failed_count = null;
    public ?string $merge_request_diffs_checksum_total_count = null;
    public ?string $merge_request_diffs_checksummed_count = null;
    public ?string $merge_request_diffs_count = null;
    public ?string $merge_request_diffs_failed_count = null;
    public ?string $merge_request_diffs_registry_count = null;
    public ?string $merge_request_diffs_synced_count = null;
    public ?string $merge_request_diffs_synced_in_percentage = null;
    public ?string $merge_request_diffs_verification_failed_count = null;
    public ?string $merge_request_diffs_verification_total_count = null;
    public ?string $merge_request_diffs_verified_count = null;
    public ?string $merge_request_diffs_verified_in_percentage = null;
    public ?string $missing_oauth_application = null;
    public ?array $namespace = null;
    public ?string $package_files_checksum_failed_count = null;
    public ?string $package_files_checksum_total_count = null;
    public ?string $package_files_checksummed_count = null;
    public ?string $package_files_count = null;
    public ?string $package_files_failed_count = null;
    public ?string $package_files_registry_count = null;
    public ?string $package_files_synced_count = null;
    public ?string $package_files_synced_in_percentage = null;
    public ?string $package_files_verification_failed_count = null;
    public ?string $package_files_verification_total_count = null;
    public ?string $package_files_verified_count = null;
    public ?string $package_files_verified_in_percentage = null;
    public ?string $pages_deployments_checksum_failed_count = null;
    public ?string $pages_deployments_checksum_total_count = null;
    public ?string $pages_deployments_checksummed_count = null;
    public ?string $pages_deployments_count = null;
    public ?string $pages_deployments_failed_count = null;
    public ?string $pages_deployments_registry_count = null;
    public ?string $pages_deployments_synced_count = null;
    public ?string $pages_deployments_synced_in_percentage = null;
    public ?string $pages_deployments_verification_failed_count = null;
    public ?string $pages_deployments_verification_total_count = null;
    public ?string $pages_deployments_verified_count = null;
    public ?string $pages_deployments_verified_in_percentage = null;
    public ?string $pipeline_artifacts_checksum_failed_count = null;
    public ?string $pipeline_artifacts_checksum_total_count = null;
    public ?string $pipeline_artifacts_checksummed_count = null;
    public ?string $pipeline_artifacts_count = null;
    public ?string $pipeline_artifacts_failed_count = null;
    public ?string $pipeline_artifacts_registry_count = null;
    public ?string $pipeline_artifacts_synced_count = null;
    public ?string $pipeline_artifacts_synced_in_percentage = null;
    public ?string $pipeline_artifacts_verification_failed_count = null;
    public ?string $pipeline_artifacts_verification_total_count = null;
    public ?string $pipeline_artifacts_verified_count = null;
    public ?string $pipeline_artifacts_verified_in_percentage = null;
    public ?string $project_repositories_checksum_failed_count = null;
    public ?string $project_repositories_checksum_total_count = null;
    public ?string $project_repositories_checksummed_count = null;
    public ?string $project_repositories_count = null;
    public ?string $project_repositories_failed_count = null;
    public ?string $project_repositories_registry_count = null;
    public ?string $project_repositories_synced_count = null;
    public ?string $project_repositories_synced_in_percentage = null;
    public ?string $project_repositories_verification_failed_count = null;
    public ?string $project_repositories_verification_total_count = null;
    public ?string $project_repositories_verified_count = null;
    public ?string $project_repositories_verified_in_percentage = null;
    public ?string $project_wiki_repositories_checksum_failed_count = null;
    public ?string $project_wiki_repositories_checksum_total_count = null;
    public ?string $project_wiki_repositories_checksummed_count = null;
    public ?string $project_wiki_repositories_count = null;
    public ?string $project_wiki_repositories_failed_count = null;
    public ?string $project_wiki_repositories_registry_count = null;
    public ?string $project_wiki_repositories_synced_count = null;
    public ?string $project_wiki_repositories_synced_in_percentage = null;
    public ?string $project_wiki_repositories_verification_failed_count = null;
    public ?string $project_wiki_repositories_verification_total_count = null;
    public ?string $project_wiki_repositories_verified_count = null;
    public ?string $project_wiki_repositories_verified_in_percentage = null;
    public ?string $projects_count = null;
    public ?string $proxy_local_requests_event_count_weekly = null;
    public ?string $proxy_remote_requests_event_count_weekly = null;
    public ?string $replication_slots_count = null;
    public ?string $replication_slots_max_retained_wal_byte = null;
    public ?string $replication_slots_used_count = null;
    public ?string $replication_slots_used_in_percentage = null;
    public ?string $repositories_checked_count = null;
    public ?string $repositories_checked_failed_count = null;
    public ?string $repositories_checked_in_percentage = null;
    public ?string $repositories_count = null;
    public ?string $revision = null;
    public ?string $selective_sync_type = null;
    public ?string $snippet_repositories_checksum_failed_count = null;
    public ?string $snippet_repositories_checksum_total_count = null;
    public ?string $snippet_repositories_checksummed_count = null;
    public ?string $snippet_repositories_count = null;
    public ?string $snippet_repositories_failed_count = null;
    public ?string $snippet_repositories_registry_count = null;
    public ?string $snippet_repositories_synced_count = null;
    public ?string $snippet_repositories_synced_in_percentage = null;
    public ?string $snippet_repositories_verification_failed_count = null;
    public ?string $snippet_repositories_verification_total_count = null;
    public ?string $snippet_repositories_verified_count = null;
    public ?string $snippet_repositories_verified_in_percentage = null;
    public ?array $storage_shard = null;
    public ?string $storage_shards_match = null;
    public ?string $terraform_state_versions_checksum_failed_count = null;
    public ?string $terraform_state_versions_checksum_total_count = null;
    public ?string $terraform_state_versions_checksummed_count = null;
    public ?string $terraform_state_versions_count = null;
    public ?string $terraform_state_versions_failed_count = null;
    public ?string $terraform_state_versions_registry_count = null;
    public ?string $terraform_state_versions_synced_count = null;
    public ?string $terraform_state_versions_synced_in_percentage = null;
    public ?string $terraform_state_versions_verification_failed_count = null;
    public ?string $terraform_state_versions_verification_total_count = null;
    public ?string $terraform_state_versions_verified_count = null;
    public ?string $terraform_state_versions_verified_in_percentage = null;
    public ?string $updated_at = null;
    public ?string $uploads_checksum_failed_count = null;
    public ?string $uploads_checksum_total_count = null;
    public ?string $uploads_checksummed_count = null;
    public ?string $uploads_count = null;
    public ?string $uploads_failed_count = null;
    public ?string $uploads_registry_count = null;
    public ?string $uploads_synced_count = null;
    public ?string $uploads_synced_in_percentage = null;
    public ?string $uploads_verification_failed_count = null;
    public ?string $uploads_verification_total_count = null;
    public ?string $uploads_verified_count = null;
    public ?string $uploads_verified_in_percentage = null;
    public ?string $version = null;
}

/** EeApiEntitiesGeoPipelineRef entity data model. */
class EeApiEntitiesGeoPipelineRef
{
    public ?array $pipeline_ref = null;
}

/** Request payload for EeApiEntitiesGeoPipelineRef#list. */
class EeApiEntitiesGeoPipelineRefListMatch
{
    public mixed $gl_repository;
}

/** EeApiEntitiesIssuableMetricImage entity data model. */
class EeApiEntitiesIssuableMetricImage
{
    public ?string $created_at = null;
    public ?string $file_path = null;
    public ?string $filename = null;
    public ?string $id = null;
    public ?string $url = null;
    public ?string $url_text = null;
}

/** Request payload for EeApiEntitiesIssuableMetricImage#create. */
class EeApiEntitiesIssuableMetricImageCreateData
{
    public string $issue_id;
    public string $project_id;
}

/** Request payload for EeApiEntitiesIssuableMetricImage#update. */
class EeApiEntitiesIssuableMetricImageUpdateData
{
    public string $id;
    public string $issue_id;
    public string $project_id;
}

/** Request payload for EeApiEntitiesIssuableMetricImage#remove. */
class EeApiEntitiesIssuableMetricImageRemoveMatch
{
    public string $id;
    public string $issue_id;
    public string $project_id;
}

/** EeApiEntitiesMergeRequestApprovalState entity data model. */
class EeApiEntitiesMergeRequestApprovalState
{
    public ?int $approvals_required = null;
    public ?bool $approved = null;
    public ?array $approved_by = null;
    public ?bool $code_owner = null;
    public ?bool $contains_hidden_group = null;
    public ?array $eligible_approver = null;
    public ?array $group = null;
    public ?int $id = null;
    public ?string $name = null;
    public ?bool $overridden = null;
    public ?string $report_type = null;
    public ?string $rule_type = null;
    public ?string $section = null;
    public ?array $source_rule = null;
    public ?array $user = null;
}

/** Request payload for EeApiEntitiesMergeRequestApprovalState#list. */
class EeApiEntitiesMergeRequestApprovalStateListMatch
{
    public string $merge_request_id;
    public string $project_id;
}

/** EeApiEntitiesSshCertificate entity data model. */
class EeApiEntitiesSshCertificate
{
    public ?string $created_at = null;
    public ?int $id = null;
    public ?string $key = null;
    public ?string $title = null;
}

/** Request payload for EeApiEntitiesSshCertificate#list. */
class EeApiEntitiesSshCertificateListMatch
{
    public string $group_id;
}

/** Request payload for EeApiEntitiesSshCertificate#create. */
class EeApiEntitiesSshCertificateCreateData
{
    public string $group_id;
}

/** Environment entity data model. */
class Environment
{
}

/** Request payload for Environment#create. */
class EnvironmentCreateData
{
    public string $project_id;
}

/** Request payload for Environment#remove. */
class EnvironmentRemoveMatch
{
    public string $id;
    public string $project_id;
}

/** ErrorTrackingClientKey entity data model. */
class ErrorTrackingClientKey
{
}

/** Request payload for ErrorTrackingClientKey#remove. */
class ErrorTrackingClientKeyRemoveMatch
{
    public string $id;
    public string $project_id;
}

/** Feature entity data model. */
class Feature
{
}

/** Request payload for Feature#remove. */
class FeatureRemoveMatch
{
    public string $id;
}

/** FeatureFlag entity data model. */
class FeatureFlag
{
}

/** Request payload for FeatureFlag#load. */
class FeatureFlagLoadMatch
{
    public string $project_id;
}

/** Request payload for FeatureFlag#create. */
class FeatureFlagCreateData
{
    public string $unleash_id;
}

/** Request payload for FeatureFlag#remove. */
class FeatureFlagRemoveMatch
{
    public string $id;
    public string $project_id;
}

/** FeatureFlagsUserList entity data model. */
class FeatureFlagsUserList
{
}

/** Request payload for FeatureFlagsUserList#remove. */
class FeatureFlagsUserListRemoveMatch
{
    public string $id;
    public string $project_id;
}

/** FreezePeriod entity data model. */
class FreezePeriod
{
}

/** Request payload for FreezePeriod#remove. */
class FreezePeriodRemoveMatch
{
    public string $id;
    public string $project_id;
}

/** GenericPackage entity data model. */
class GenericPackage
{
}

/** Request payload for GenericPackage#load. */
class GenericPackageLoadMatch
{
    public mixed $file_name;
    public string $generic_id;
    public string $project_id;
}

/** Request payload for GenericPackage#update. */
class GenericPackageUpdateData
{
    public mixed $file_name;
    public string $generic_id;
    public string $project_id;
}

/** Geo entity data model. */
class Geo
{
}

/** Request payload for Geo#load. */
class GeoLoadMatch
{
    public string $replicable_id;
    public mixed $replicable_name;
}

/** Request payload for Geo#create. */
class GeoCreateData
{
    public ?string $node_proxy_id = null;
}

/** GoProxy entity data model. */
class GoProxy
{
}

/** Request payload for GoProxy#load. */
class GoProxyLoadMatch
{
    public mixed $module_version = null;
    public string $project_id;
}

/** Group entity data model. */
class Group
{
}

/** Request payload for Group#load. */
class GroupLoadMatch
{
    public mixed $filename = null;
    public string $id;
    public mixed $secret = null;
    public ?string $upload_id = null;
}

/** Request payload for Group#create. */
class GroupCreateData
{
    public string $id;
}

/** Request payload for Group#update. */
class GroupUpdateData
{
    public string $id;
    public ?string $key = null;
    public ?string $member_id = null;
}

/** Request payload for Group#remove. */
class GroupRemoveMatch
{
    public mixed $filename = null;
    public string $id;
    public mixed $secret = null;
    public ?string $group_id = null;
    public ?string $key = null;
    public ?string $ssh_certificates_id = null;
    public ?string $upload_id = null;
    public ?string $user_id = null;
}

/** GroupAvatar entity data model. */
class GroupAvatar
{
}

/** Request payload for GroupAvatar#load. */
class GroupAvatarLoadMatch
{
    public string $id;
}

/** GroupExport entity data model. */
class GroupExport
{
}

/** Request payload for GroupExport#load. */
class GroupExportLoadMatch
{
    public string $group_id;
}

/** Request payload for GroupExport#create. */
class GroupExportCreateData
{
    public string $id;
}

/** GroupImport entity data model. */
class GroupImport
{
}

/** Request payload for GroupImport#create. */
class GroupImportCreateData
{
}

/** HelmPackage entity data model. */
class HelmPackage
{
}

/** Request payload for HelmPackage#load. */
class HelmPackageLoadMatch
{
    public mixed $file_name = null;
    public ?string $helm_id = null;
    public string $project_id;
    public mixed $channel = null;
}

/** Request payload for HelmPackage#create. */
class HelmPackageCreateData
{
    public mixed $channel = null;
    public string $project_id;
    public ?string $api_id = null;
}

/** Hook entity data model. */
class Hook
{
}

/** Request payload for Hook#create. */
class HookCreateData
{
    public string $id;
}

/** Request payload for Hook#update. */
class HookUpdateData
{
    public string $id;
    public string $key;
}

/** Request payload for Hook#remove. */
class HookRemoveMatch
{
    public string $id;
    public string $key;
}

/** Import entity data model. */
class Import
{
}

/** Request payload for Import#create. */
class ImportCreateData
{
}

/** Integration entity data model. */
class Integration
{
}

/** Request payload for Integration#create. */
class IntegrationCreateData
{
    public ?string $project_id = null;
}

/** Request payload for Integration#remove. */
class IntegrationRemoveMatch
{
    public ?string $group_id = null;
    public ?string $id = null;
    public ?string $project_id = null;
    public ?string $slug = null;
}

/** Invitation entity data model. */
class Invitation
{
}

/** Request payload for Invitation#remove. */
class InvitationRemoveMatch
{
    public ?string $group_id = null;
    public string $id;
    public ?string $project_id = null;
}

/** IssueLink entity data model. */
class IssueLink
{
}

/** Request payload for IssueLink#remove. */
class IssueLinkRemoveMatch
{
    public string $id;
    public string $issue_id;
    public string $project_id;
}

/** IssuesStatistic entity data model. */
class IssuesStatistic
{
}

/** Request payload for IssuesStatistic#load. */
class IssuesStatisticLoadMatch
{
}

/** Job entity data model. */
class Job
{
}

/** Request payload for Job#load. */
class JobLoadMatch
{
    public string $id;
}

/** Request payload for Job#create. */
class JobCreateData
{
    public ?string $id = null;
}

/** Request payload for Job#update. */
class JobUpdateData
{
    public string $id;
}

/** MavenPackage entity data model. */
class MavenPackage
{
}

/** Request payload for MavenPackage#load. */
class MavenPackageLoadMatch
{
    public mixed $file_name;
    public ?string $group_id = null;
    public ?string $project_id = null;
}

/** Request payload for MavenPackage#update. */
class MavenPackageUpdateData
{
    public mixed $file_name;
    public string $project_id;
}

/** Member entity data model. */
class Member
{
}

/** Request payload for Member#remove. */
class MemberRemoveMatch
{
    public ?string $group_id = null;
    public string $id;
    public ?string $project_id = null;
}

/** MergeRequest entity data model. */
class MergeRequest
{
}

/** Request payload for MergeRequest#load. */
class MergeRequestLoadMatch
{
    public string $id;
    public string $project_id;
}

/** Request payload for MergeRequest#update. */
class MergeRequestUpdateData
{
    public string $id;
    public string $project_id;
}

/** Request payload for MergeRequest#remove. */
class MergeRequestRemoveMatch
{
    public string $id;
    public string $project_id;
}

/** Metadata entity data model. */
class Metadata
{
    public ?bool $enterprise = null;
    public ?array $kas = null;
    public ?string $revision = null;
    public ?string $version = null;
}

/** Request payload for Metadata#load. */
class MetadataLoadMatch
{
    public ?bool $enterprise = null;
    public ?array $kas = null;
    public ?string $revision = null;
    public ?string $version = null;
}

/** Migration entity data model. */
class Migration
{
}

/** Request payload for Migration#create. */
class MigrationCreateData
{
    public mixed $timestamp;
}

/** MlModelRegistry entity data model. */
class MlModelRegistry
{
}

/** Request payload for MlModelRegistry#load. */
class MlModelRegistryLoadMatch
{
    public mixed $file_name;
    public string $ml_model_id;
    public string $project_id;
}

/** Request payload for MlModelRegistry#update. */
class MlModelRegistryUpdateData
{
    public mixed $file_name;
    public string $ml_model_id;
    public string $project_id;
}

/** Namespace entity data model. */
class Namespace
{
}

/** Request payload for Namespace#remove. */
class NamespaceRemoveMatch
{
    public string $id;
}

/** Npm entity data model. */
class Npm
{
}

/** Request payload for Npm#update. */
class NpmUpdateData
{
    public string $id;
    public string $project_id;
}

/** NpmPackage entity data model. */
class NpmPackage
{
}

/** Request payload for NpmPackage#load. */
class NpmPackageLoadMatch
{
    public string $project_id;
}

/** Request payload for NpmPackage#create. */
class NpmPackageCreateData
{
    public ?string $group_id = null;
    public ?string $project_id = null;
}

/** Request payload for NpmPackage#update. */
class NpmPackageUpdateData
{
    public ?string $group_id = null;
    public mixed $tag;
    public ?string $project_id = null;
}

/** Request payload for NpmPackage#remove. */
class NpmPackageRemoveMatch
{
    public ?string $group_id = null;
    public mixed $tag;
    public ?string $project_id = null;
}

/** Nuget entity data model. */
class Nuget
{
}

/** Request payload for Nuget#update. */
class NugetUpdateData
{
    public string $project_id;
}

/** NugetPackage entity data model. */
class NugetPackage
{
    public ?array $catalog_entry = null;
    public ?int $count = null;
    public ?string $id = null;
    public ?array $item = null;
    public ?string $lower = null;
    public ?string $package_content = null;
    public ?string $upper = null;
}

/** Request payload for NugetPackage#load. */
class NugetPackageLoadMatch
{
    public ?string $group_id = null;
    public ?string $project_id = null;
}

/** Request payload for NugetPackage#list. */
class NugetPackageListMatch
{
    public ?string $group_id = null;
    public ?string $project_id = null;
}

/** Request payload for NugetPackage#update. */
class NugetPackageUpdateData
{
    public string $project_id;
}

/** Request payload for NugetPackage#remove. */
class NugetPackageRemoveMatch
{
    public string $project_id;
}

/** PackageFile entity data model. */
class PackageFile
{
}

/** Request payload for PackageFile#load. */
class PackageFileLoadMatch
{
    public string $id;
    public string $package_id;
    public string $project_id;
}

/** Request payload for PackageFile#remove. */
class PackageFileRemoveMatch
{
    public string $id;
    public string $package_id;
    public string $project_id;
}

/** Page entity data model. */
class Page
{
}

/** Request payload for Page#load. */
class PageLoadMatch
{
    public string $project_id;
}

/** Request payload for Page#update. */
class PageUpdateData
{
    public string $project_id;
}

/** Request payload for Page#remove. */
class PageRemoveMatch
{
    public string $project_id;
}

/** Participant entity data model. */
class Participant
{
    public ?string $key = null;
    public ?string $value = null;
}

/** Request payload for Participant#list. */
class ParticipantListMatch
{
    public ?string $issue_id = null;
    public string $project_id;
    public ?string $merge_request_id = null;
}

/** PersonalAccessToken entity data model. */
class PersonalAccessToken
{
}

/** Request payload for PersonalAccessToken#remove. */
class PersonalAccessTokenRemoveMatch
{
    public string $id;
}

/** Project entity data model. */
class Project
{
    public ?string $before_sha = null;
    public ?string $committed_at = null;
    public ?float $coverage = null;
    public ?string $created_at = null;
    public ?array $detailed_status = null;
    public ?int $duration = null;
    public ?string $finished_at = null;
    public ?int $id = null;
    public ?int $iid = null;
    public ?string $name = null;
    public ?int $project_id = null;
    public ?int $queued_duration = null;
    public ?string $ref = null;
    public ?string $sha = null;
    public ?string $source = null;
    public ?string $started_at = null;
    public ?string $status = null;
    public ?bool $tag = null;
    public ?string $updated_at = null;
    public ?array $user = null;
    public ?string $web_url = null;
    public ?string $yaml_error = null;
}

/** Request payload for Project#load. */
class ProjectLoadMatch
{
    public ?string $artifact_id = null;
    public string $id;
    public mixed $file_path = null;
    public ?string $hook_id = null;
    public ?string $job_id = null;
    public mixed $ref_name = null;
    public mixed $filename = null;
    public mixed $secret = null;
    public ?string $issue_id = null;
    public ?string $pipeline_id = null;
    public mixed $sha = null;
    public ?string $upload_id = null;
}

/** Request payload for Project#create. */
class ProjectCreateData
{
    public ?string $event_id = null;
    public ?string $hook_id = null;
    public string $id;
    public mixed $file_path = null;
    public mixed $trigger = null;
    public ?string $issue_id = null;
    public ?string $merge_request_id = null;
    public ?string $pipeline_schedule_id = null;
    public ?string $project_id = null;
}

/** Request payload for Project#update. */
class ProjectUpdateData
{
    public ?string $hook_id = null;
    public string $id;
    public ?string $key = null;
    public mixed $domain = null;
    public ?string $draft_note_id = null;
    public ?string $merge_request_id = null;
    public mixed $file_path = null;
    public ?string $pipeline_id = null;
}

/** Request payload for Project#remove. */
class ProjectRemoveMatch
{
    public mixed $file_path = null;
    public string $id;
    public ?string $draft_note_id = null;
    public ?string $merge_request_id = null;
    public mixed $filename = null;
    public mixed $secret = null;
    public ?string $hook_id = null;
    public ?string $key = null;
    public ?string $pipeline_schedule_id = null;
    public mixed $domain = null;
    public ?string $group_id = null;
    public mixed $issue_iid = null;
    public ?string $job_id = null;
    public ?string $name = null;
    public ?string $package_protection_rule_id = null;
    public ?string $pipeline_id = null;
    public ?string $protection_rule_id = null;
    public ?string $trigger_id = null;
    public ?string $upload_id = null;
}

/** ProjectAvatar entity data model. */
class ProjectAvatar
{
}

/** Request payload for ProjectAvatar#load. */
class ProjectAvatarLoadMatch
{
    public string $id;
}

/** ProjectEntity entity data model. */
class ProjectEntity
{
}

/** Request payload for ProjectEntity#create. */
class ProjectEntityCreateData
{
}

/** ProjectExport entity data model. */
class ProjectExport
{
}

/** Request payload for ProjectExport#load. */
class ProjectExportLoadMatch
{
    public string $project_id;
}

/** Request payload for ProjectExport#create. */
class ProjectExportCreateData
{
    public string $id;
}

/** ProjectHook entity data model. */
class ProjectHook
{
}

/** Request payload for ProjectHook#remove. */
class ProjectHookRemoveMatch
{
    public string $id;
    public string $project_id;
}

/** ProjectImport entity data model. */
class ProjectImport
{
}

/** Request payload for ProjectImport#create. */
class ProjectImportCreateData
{
}

/** ProjectImportEntity entity data model. */
class ProjectImportEntity
{
    public ?bool $forked = null;
    public ?string $full_name = null;
    public ?string $full_path = null;
    public ?string $human_import_status_name = null;
    public ?int $id = null;
    public ?string $import_error = null;
    public ?string $import_source = null;
    public ?string $import_status = null;
    public ?string $import_warning = null;
    public ?string $name = null;
    public ?string $provider_link = null;
    public ?string $refs_url = null;
    public ?string $relation_type = null;
}

/** Request payload for ProjectImportEntity#create. */
class ProjectImportEntityCreateData
{
    public ?bool $forked = null;
    public ?string $full_name = null;
    public ?string $full_path = null;
    public ?string $human_import_status_name = null;
    public ?int $id = null;
    public ?string $import_error = null;
    public ?string $import_source = null;
    public ?string $import_status = null;
    public ?string $import_warning = null;
    public ?string $name = null;
    public ?string $provider_link = null;
    public ?string $refs_url = null;
    public ?string $relation_type = null;
}

/** ProjectPackage entity data model. */
class ProjectPackage
{
}

/** Request payload for ProjectPackage#remove. */
class ProjectPackageRemoveMatch
{
    public string $id;
    public string $project_id;
}

/** ProjectSnippet entity data model. */
class ProjectSnippet
{
}

/** Request payload for ProjectSnippet#remove. */
class ProjectSnippetRemoveMatch
{
    public string $id;
    public string $project_id;
}

/** ProjectsJobTokenScope entity data model. */
class ProjectsJobTokenScope
{
}

/** Request payload for ProjectsJobTokenScope#update. */
class ProjectsJobTokenScopeUpdateData
{
    public string $project_id;
}

/** Request payload for ProjectsJobTokenScope#remove. */
class ProjectsJobTokenScopeRemoveMatch
{
    public string $project_id;
    public ?string $target_group_id = null;
    public ?string $target_project_id = null;
}

/** ProtectedTag entity data model. */
class ProtectedTag
{
}

/** Request payload for ProtectedTag#remove. */
class ProtectedTagRemoveMatch
{
    public string $id;
    public string $project_id;
}

/** Pypi entity data model. */
class Pypi
{
}

/** Request payload for Pypi#create. */
class PypiCreateData
{
    public string $project_id;
}

/** PypiPackage entity data model. */
class PypiPackage
{
}

/** Request payload for PypiPackage#load. */
class PypiPackageLoadMatch
{
    public ?string $group_id = null;
    public mixed $sha256 = null;
    public ?string $project_id = null;
}

/** Request payload for PypiPackage#create. */
class PypiPackageCreateData
{
    public string $project_id;
}

/** Release entity data model. */
class Release
{
}

/** Request payload for Release#load. */
class ReleaseLoadMatch
{
    public string $project_id;
}

/** Request payload for Release#remove. */
class ReleaseRemoveMatch
{
    public string $id;
    public string $project_id;
}

/** ReleaseLink entity data model. */
class ReleaseLink
{
}

/** Request payload for ReleaseLink#remove. */
class ReleaseLinkRemoveMatch
{
    public string $id;
    public string $project_id;
    public string $release_id;
}

/** RemoteMirror entity data model. */
class RemoteMirror
{
}

/** Request payload for RemoteMirror#load. */
class RemoteMirrorLoadMatch
{
    public string $id;
    public string $project_id;
}

/** Request payload for RemoteMirror#create. */
class RemoteMirrorCreateData
{
    public string $id;
    public string $project_id;
}

/** Request payload for RemoteMirror#remove. */
class RemoteMirrorRemoveMatch
{
    public string $id;
    public string $project_id;
}

/** Rpm entity data model. */
class Rpm
{
}

/** Request payload for Rpm#create. */
class RpmCreateData
{
    public string $project_id;
}

/** RpmPackage entity data model. */
class RpmPackage
{
}

/** Request payload for RpmPackage#load. */
class RpmPackageLoadMatch
{
    public string $project_id;
}

/** Request payload for RpmPackage#create. */
class RpmPackageCreateData
{
    public string $project_id;
}

/** Rubygem entity data model. */
class Rubygem
{
}

/** Request payload for Rubygem#load. */
class RubygemLoadMatch
{
    public string $id;
    public string $project_id;
}

/** RubygemPackage entity data model. */
class RubygemPackage
{
}

/** Request payload for RubygemPackage#load. */
class RubygemPackageLoadMatch
{
    public mixed $file_name = null;
    public string $project_id;
}

/** Request payload for RubygemPackage#create. */
class RubygemPackageCreateData
{
    public string $project_id;
}

/** Runner entity data model. */
class Runner
{
}

/** Request payload for Runner#create. */
class RunnerCreateData
{
}

/** Request payload for Runner#remove. */
class RunnerRemoveMatch
{
    public ?string $id = null;
    public ?string $project_id = null;
}

/** Search entity data model. */
class Search
{
}

/** Request payload for Search#load. */
class SearchLoadMatch
{
}

/** SecureFile entity data model. */
class SecureFile
{
}

/** Request payload for SecureFile#load. */
class SecureFileLoadMatch
{
    public string $id;
    public string $project_id;
}

/** Request payload for SecureFile#remove. */
class SecureFileRemoveMatch
{
    public string $id;
    public string $project_id;
}

/** Slack entity data model. */
class Slack
{
}

/** Request payload for Slack#create. */
class SlackCreateData
{
}

/** Snippet entity data model. */
class Snippet
{
}

/** Request payload for Snippet#load. */
class SnippetLoadMatch
{
    public string $file_id;
    public mixed $file_path;
    public string $id;
}

/** Request payload for Snippet#remove. */
class SnippetRemoveMatch
{
    public string $id;
}

/** Starrer entity data model. */
class Starrer
{
    public ?string $avatar_path = null;
    public ?string $avatar_url = null;
    public ?array $custom_attribute = null;
    public ?int $id = null;
    public ?bool $locked = null;
    public ?string $name = null;
    public ?string $public_email = null;
    public ?string $state = null;
    public ?string $username = null;
    public ?string $web_url = null;
}

/** Request payload for Starrer#list. */
class StarrerListMatch
{
    public string $project_id;
}

/** SystemHook entity data model. */
class SystemHook
{
}

/** Request payload for SystemHook#remove. */
class SystemHookRemoveMatch
{
    public string $id;
}

/** Tag entity data model. */
class Tag
{
}

/** Request payload for Tag#remove. */
class TagRemoveMatch
{
    public string $id;
    public string $project_id;
}

/** TerraformRegistry entity data model. */
class TerraformRegistry
{
}

/** Request payload for TerraformRegistry#load. */
class TerraformRegistryLoadMatch
{
    public ?string $module_id = null;
    public mixed $module_system;
    public ?string $project_id = null;
    public ?string $id = null;
    public mixed $module_name = null;
    public ?string $v1_id = null;
}

/** Request payload for TerraformRegistry#update. */
class TerraformRegistryUpdateData
{
    public string $module_id;
    public mixed $module_system;
    public string $project_id;
}

/** TerraformState entity data model. */
class TerraformState
{
}

/** Request payload for TerraformState#load. */
class TerraformStateLoadMatch
{
    public string $project_id;
    public mixed $serial = null;
    public ?string $state_id = null;
    public ?string $id = null;
}

/** Request payload for TerraformState#create. */
class TerraformStateCreateData
{
    public ?string $name = null;
    public string $project_id;
    public ?string $id = null;
}

/** Request payload for TerraformState#remove. */
class TerraformStateRemoveMatch
{
    public ?string $name = null;
    public string $project_id;
    public mixed $serial = null;
    public ?string $state_id = null;
    public ?string $id = null;
}

/** TestReport entity data model. */
class TestReport
{
    public ?int $error_count = null;
    public ?int $failed_count = null;
    public ?string $name = null;
    public ?int $skipped_count = null;
    public ?int $success_count = null;
    public ?string $suite_error = null;
    public ?array $test_case = null;
    public ?int $total_count = null;
    public ?int $total_time = null;
}

/** Request payload for TestReport#list. */
class TestReportListMatch
{
    public string $pipeline_id;
    public string $project_id;
}

/** TestReportSummary entity data model. */
class TestReportSummary
{
    public ?array $test_suite = null;
    public ?array $total = null;
}

/** Request payload for TestReportSummary#load. */
class TestReportSummaryLoadMatch
{
    public string $pipeline_id;
    public string $project_id;
}

/** Topic entity data model. */
class Topic
{
}

/** Request payload for Topic#remove. */
class TopicRemoveMatch
{
    public string $id;
}

/** UnleashApi entity data model. */
class UnleashApi
{
}

/** Request payload for UnleashApi#load. */
class UnleashApiLoadMatch
{
    public string $unleash_id;
}

/** UsageData entity data model. */
class UsageData
{
}

/** Request payload for UsageData#load. */
class UsageDataLoadMatch
{
}

/** Request payload for UsageData#create. */
class UsageDataCreateData
{
}

/** User entity data model. */
class User
{
    public ?string $avatar_path = null;
    public ?string $avatar_url = null;
    public ?array $custom_attribute = null;
    public ?int $id = null;
    public ?bool $locked = null;
    public ?string $name = null;
    public ?string $public_email = null;
    public ?string $state = null;
    public ?string $username = null;
    public ?string $web_url = null;
}

/** Request payload for User#list. */
class UserListMatch
{
    public string $project_id;
}

/** WebCommit entity data model. */
class WebCommit
{
}

/** Request payload for WebCommit#load. */
class WebCommitLoadMatch
{
}

/** Wiki entity data model. */
class Wiki
{
}

/** Request payload for Wiki#remove. */
class WikiRemoveMatch
{
    public ?string $group_id = null;
    public string $id;
    public ?string $project_id = null;
}

