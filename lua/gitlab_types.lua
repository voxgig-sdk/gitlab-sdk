-- Typed models for the Gitlab SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class AccessRequest

---@class AccessRequestRemoveMatch
---@field group_id? string
---@field id string
---@field project_id? string

---@class AlertManagement

---@class AlertManagementCreateData
---@field alert_management_alert_id string
---@field project_id string

---@class AlertManagementRemoveMatch
---@field alert_management_alert_id string
---@field metric_image_id string
---@field project_id string

---@class ApiEntitiesAccessRequester
---@field avatar_path? string
---@field avatar_url? string
---@field custom_attribute? table
---@field id? number
---@field key? string
---@field locked? boolean
---@field name? string
---@field public_email? string
---@field requested_at? string
---@field state? string
---@field username? string
---@field value? string
---@field web_url? string

---@class ApiEntitiesAccessRequesterListMatch
---@field group_id? string
---@field project_id? string

---@class ApiEntitiesAccessRequesterCreateData
---@field group_id? string
---@field project_id? string

---@class ApiEntitiesAccessRequesterUpdateData
---@field access_request_id string
---@field group_id? string
---@field project_id? string

---@class ApiEntitiesAppearance
---@field description? string
---@field email_header_and_footer_enabled? string
---@field favicon? string
---@field footer_message? string
---@field header_logo? string
---@field header_message? string
---@field logo? string
---@field member_guideline? string
---@field message_background_color? string
---@field message_font_color? string
---@field new_project_guideline? string
---@field profile_image_guideline? string
---@field pwa_description? string
---@field pwa_icon? string
---@field pwa_name? string
---@field pwa_short_name? string
---@field title? string

---@class ApiEntitiesAppearanceLoadMatch
---@field description? string
---@field email_header_and_footer_enabled? string
---@field favicon? string
---@field footer_message? string
---@field header_logo? string
---@field header_message? string
---@field logo? string
---@field member_guideline? string
---@field message_background_color? string
---@field message_font_color? string
---@field new_project_guideline? string
---@field profile_image_guideline? string
---@field pwa_description? string
---@field pwa_icon? string
---@field pwa_name? string
---@field pwa_short_name? string
---@field title? string

---@class ApiEntitiesAppearanceUpdateData
---@field description? string
---@field email_header_and_footer_enabled? string
---@field favicon? string
---@field footer_message? string
---@field header_logo? string
---@field header_message? string
---@field logo? string
---@field member_guideline? string
---@field message_background_color? string
---@field message_font_color? string
---@field new_project_guideline? string
---@field profile_image_guideline? string
---@field pwa_description? string
---@field pwa_icon? string
---@field pwa_name? string
---@field pwa_short_name? string
---@field title? string

---@class ApiEntitiesApplication
---@field application_id? string
---@field application_name? string
---@field callback_url? string
---@field confidential? boolean
---@field id? string

---@class ApiEntitiesApplicationListMatch
---@field application_id? string
---@field application_name? string
---@field callback_url? string
---@field confidential? boolean
---@field id? string

---@class ApiEntitiesApplicationStatistic
---@field active_user? number
---@field fork? number
---@field group? number
---@field issue? number
---@field merge_request? number
---@field milestone? number
---@field note? number
---@field project? number
---@field snippet? number
---@field ssh_key? number
---@field user? number

---@class ApiEntitiesApplicationStatisticLoadMatch
---@field active_user? number
---@field fork? number
---@field group? number
---@field issue? number
---@field merge_request? number
---@field milestone? number
---@field note? number
---@field project? number
---@field snippet? number
---@field ssh_key? number
---@field user? number

---@class ApiEntitiesApplicationWithSecret
---@field application_id? string
---@field application_name? string
---@field callback_url? string
---@field confidential? boolean
---@field id? string
---@field secret? string

---@class ApiEntitiesApplicationWithSecretCreateData
---@field application_id? string

---@class ApiEntitiesAvatar
---@field avatar_url? string

---@class ApiEntitiesAvatarLoadMatch
---@field avatar_url? string

---@class ApiEntitiesAwardEmoji
---@field awardable_id? number
---@field awardable_type? string
---@field created_at? string
---@field id? number
---@field name? string
---@field updated_at? string
---@field url? string
---@field user? table

---@class ApiEntitiesAwardEmojiLoadMatch
---@field epic_id? string
---@field group_id? string
---@field id string
---@field note_id? string
---@field issue_id? string
---@field project_id? string
---@field merge_request_id? string
---@field snippet_id? string

---@class ApiEntitiesAwardEmojiListMatch
---@field epic_id? string
---@field group_id? string
---@field note_id? string
---@field issue_id? string
---@field project_id? string
---@field merge_request_id? string
---@field snippet_id? string

---@class ApiEntitiesAwardEmojiCreateData
---@field epic_id? string
---@field group_id? string
---@field note_id? string
---@field issue_id? string
---@field project_id? string
---@field merge_request_id? string
---@field snippet_id? string

---@class ApiEntitiesBadge
---@field id? string
---@field image_url? string
---@field kind? string
---@field link_url? string
---@field name? string
---@field rendered_image_url? string
---@field rendered_link_url? string

---@class ApiEntitiesBadgeLoadMatch
---@field group_id? string
---@field id string
---@field project_id? string

---@class ApiEntitiesBadgeListMatch
---@field group_id? string
---@field project_id? string

---@class ApiEntitiesBadgeCreateData
---@field group_id? string
---@field project_id? string

---@class ApiEntitiesBadgeUpdateData
---@field group_id? string
---@field id string
---@field project_id? string

---@class ApiEntitiesBasicBadgeDetail
---@field image_url? string
---@field link_url? string
---@field name? string
---@field rendered_image_url? string
---@field rendered_link_url? string

---@class ApiEntitiesBasicBadgeDetailLoadMatch
---@field group_id? string
---@field project_id? string

---@class ApiEntitiesBasicGroupDetail

---@class ApiEntitiesBasicGroupDetailCreateData
---@field project_id string

---@class ApiEntitiesBasicProjectDetail
---@field avatar_url? string
---@field created_at? string
---@field custom_attribute? table
---@field default_branch? string
---@field description? string
---@field forks_count? number
---@field http_url_to_repo? string
---@field id? number
---@field last_activity_at? string
---@field license? table
---@field license_url? string
---@field name? string
---@field name_with_namespace? string
---@field namespace? table
---@field path? string
---@field path_with_namespace? string
---@field readme_url? string
---@field repository_storage? string
---@field ssh_url_to_repo? string
---@field star_count? number
---@field tag_list? table
---@field topic? table
---@field visibility? string
---@field web_url? string

---@class ApiEntitiesBasicProjectDetailListMatch
---@field user_id? string
---@field project_id? string

---@class ApiEntitiesBasicProjectDetailCreateData
---@field project_id string

---@class ApiEntitiesBasicRef
---@field name? string
---@field type? string

---@class ApiEntitiesBasicRefListMatch
---@field project_id string
---@field sha any

---@class ApiEntitiesBasicSuccess

---@class ApiEntitiesBasicSuccessCreateData

---@class ApiEntitiesBatchedBackgroundMigration
---@field column_name? string
---@field created_at? string
---@field id? string
---@field job_class_name? string
---@field progress? number
---@field status? string
---@field table_name? string

---@class ApiEntitiesBatchedBackgroundMigrationLoadMatch
---@field id string

---@class ApiEntitiesBatchedBackgroundMigrationListMatch
---@field column_name? string
---@field created_at? string
---@field id? string
---@field job_class_name? string
---@field progress? number
---@field status? string
---@field table_name? string

---@class ApiEntitiesBatchedBackgroundMigrationUpdateData
---@field batched_background_migration_id string

---@class ApiEntitiesBranch
---@field can_push? boolean
---@field commit? table
---@field default? boolean
---@field developers_can_merge? boolean
---@field developers_can_push? boolean
---@field merged? boolean
---@field name? string
---@field protected? boolean
---@field web_url? string

---@class ApiEntitiesBranchLoadMatch
---@field id string
---@field project_id string

---@class ApiEntitiesBranchListMatch
---@field project_id string

---@class ApiEntitiesBranchCreateData
---@field project_id string

---@class ApiEntitiesBranchUpdateData
---@field branch_id string
---@field project_id string

---@class ApiEntitiesBulkImport
---@field bulk_import_id? number
---@field created_at? string
---@field destination_full_path? string
---@field destination_name? string
---@field destination_namespace? string
---@field destination_slug? string
---@field entity_type? string
---@field failure? table
---@field has_failure? boolean
---@field id? number
---@field migrate_membership? boolean
---@field migrate_project? boolean
---@field namespace_id? number
---@field parent_id? number
---@field project_id? number
---@field source_full_path? string
---@field source_type? string
---@field source_url? string
---@field stat? table
---@field status? string
---@field updated_at? string

---@class ApiEntitiesBulkImportLoadMatch
---@field bulk_import_id? string
---@field entity_id? string
---@field id? string

---@class ApiEntitiesBulkImportListMatch
---@field bulk_import_id? string

---@class ApiEntitiesBulkImportCreateData
---@field bulk_import_id? string

---@class ApiEntitiesBulkImportsEntityFailure
---@field correlation_id_value? string
---@field exception_class? string
---@field exception_message? string
---@field relation? string
---@field source_title? string
---@field source_url? string

---@class ApiEntitiesBulkImportsEntityFailureLoadMatch
---@field bulk_import_id string
---@field entity_id string

---@class ApiEntitiesBulkImportsExportStatus
---@field batch? table
---@field batched? boolean
---@field batches_count? number
---@field error? string
---@field relation? string
---@field status? string
---@field total_objects_count? number
---@field updated_at? string

---@class ApiEntitiesBulkImportsExportStatusListMatch
---@field group_id? string
---@field project_id? string

---@class ApiEntitiesChangelog
---@field note? string

---@class ApiEntitiesChangelogLoadMatch
---@field project_id string

---@class ApiEntitiesCiBridge
---@field allow_failure? boolean
---@field commit? table
---@field coverage? number
---@field created_at? string
---@field downstream_pipeline? table
---@field duration? number
---@field erased_at? string
---@field failure_reason? string
---@field finished_at? string
---@field id? number
---@field name? string
---@field pipeline? table
---@field project? table
---@field queued_duration? number
---@field ref? string
---@field stage? string
---@field started_at? string
---@field status? string
---@field tag? boolean
---@field user? table
---@field web_url? string

---@class ApiEntitiesCiBridgeListMatch
---@field pipeline_id string
---@field project_id string

---@class ApiEntitiesCiCatalogResourcesVersion

---@class ApiEntitiesCiCatalogResourcesVersionCreateData
---@field project_id string

---@class ApiEntitiesCiJob
---@field allow_failure? boolean
---@field archived? boolean
---@field artifact? table
---@field artifacts_expire_at? string
---@field artifacts_file? table
---@field commit? table
---@field coverage? number
---@field created_at? string
---@field duration? number
---@field erased_at? string
---@field failure_reason? string
---@field file_format? string
---@field file_type? string
---@field filename? string
---@field finished_at? string
---@field id? number
---@field name? string
---@field pipeline? table
---@field project? table
---@field queued_duration? number
---@field ref? string
---@field runner? table
---@field runner_manager? table
---@field size? number
---@field stage? string
---@field started_at? string
---@field status? string
---@field tag? boolean
---@field tag_list? table
---@field user? table
---@field web_url? string

---@class ApiEntitiesCiJobLoadMatch
---@field id string
---@field project_id string

---@class ApiEntitiesCiJobListMatch
---@field pipeline_id? string
---@field project_id? string
---@field job_id? string

---@class ApiEntitiesCiJobCreateData
---@field job_id string
---@field project_id string

---@class ApiEntitiesCiJobBasic
---@field allow_failure? boolean
---@field commit? table
---@field coverage? number
---@field created_at? string
---@field duration? number
---@field erased_at? string
---@field failure_reason? string
---@field finished_at? string
---@field id? number
---@field name? string
---@field pipeline? table
---@field project? table
---@field queued_duration? number
---@field ref? string
---@field stage? string
---@field started_at? string
---@field status? string
---@field tag? boolean
---@field user? table
---@field web_url? string

---@class ApiEntitiesCiJobBasicListMatch
---@field key string
---@field project_id string

---@class ApiEntitiesCiJobBasicCreateData
---@field job_id string
---@field project_id string

---@class ApiEntitiesCiJobBasicWithProject
---@field allow_failure? boolean
---@field commit? table
---@field coverage? number
---@field created_at? string
---@field duration? number
---@field erased_at? string
---@field failure_reason? string
---@field finished_at? string
---@field id? number
---@field name? string
---@field pipeline? table
---@field project? table
---@field queued_duration? number
---@field ref? string
---@field stage? string
---@field started_at? string
---@field status? string
---@field tag? boolean
---@field user? table
---@field web_url? string

---@class ApiEntitiesCiJobBasicWithProjectLoadMatch
---@field runner_id string

---@class ApiEntitiesCiLintResult
---@field blob? string
---@field context_project? string
---@field context_sha? string
---@field error? table
---@field extra? table
---@field include? table
---@field job? table
---@field location? string
---@field merged_yaml? string
---@field raw? string
---@field type? string
---@field valid? boolean
---@field warning? table

---@class ApiEntitiesCiLintResultListMatch
---@field project_id string

---@class ApiEntitiesCiLintResultCreateData
---@field project_id string

---@class ApiEntitiesCiPipeline

---@class ApiEntitiesCiPipelineCreateData
---@field merge_request_id? string
---@field project_id string
---@field ref_id? string
---@field pipeline_id? string

---@class ApiEntitiesCiPipelineBasic
---@field created_at? string
---@field id? number
---@field iid? number
---@field project_id? number
---@field ref? string
---@field sha? string
---@field source? string
---@field status? string
---@field updated_at? string
---@field web_url? string

---@class ApiEntitiesCiPipelineBasicLoadMatch
---@field merge_request_id string
---@field project_id string

---@class ApiEntitiesCiPipelineBasicListMatch
---@field project_id string
---@field pipeline_schedule_id? string

---@class ApiEntitiesCiPipelineSchedule
---@field active? boolean
---@field created_at? string
---@field cron? string
---@field cron_timezone? string
---@field description? string
---@field id? number
---@field input? table
---@field next_run_at? string
---@field owner? table
---@field ref? string
---@field updated_at? string

---@class ApiEntitiesCiPipelineScheduleListMatch
---@field project_id string

---@class ApiEntitiesCiPipelineScheduleDetail
---@field active? boolean
---@field created_at? string
---@field cron? string
---@field cron_timezone? string
---@field description? string
---@field id? number
---@field input? table
---@field last_pipeline? table
---@field next_run_at? string
---@field owner? table
---@field ref? string
---@field updated_at? string
---@field variable? table

---@class ApiEntitiesCiPipelineScheduleDetailLoadMatch
---@field pipeline_schedule_id string
---@field project_id string

---@class ApiEntitiesCiPipelineScheduleDetailCreateData
---@field pipeline_schedule_id? string
---@field project_id string

---@class ApiEntitiesCiPipelineScheduleDetailUpdateData
---@field pipeline_schedule_id string
---@field project_id string

---@class ApiEntitiesCiResetTokenResult

---@class ApiEntitiesCiResetTokenResultCreateData
---@field group_id? string
---@field project_id? string
---@field runner_id? string

---@class ApiEntitiesCiResourceGroup
---@field created_at? string
---@field id? number
---@field key? string
---@field process_mode? string
---@field updated_at? string

---@class ApiEntitiesCiResourceGroupLoadMatch
---@field id string
---@field project_id string

---@class ApiEntitiesCiResourceGroupListMatch
---@field project_id string

---@class ApiEntitiesCiResourceGroupUpdateData
---@field id string
---@field project_id string

---@class ApiEntitiesCiRunner
---@field active? boolean
---@field created_at? string
---@field created_by? table
---@field description? string
---@field id? number
---@field ip_address? string
---@field is_shared? boolean
---@field job_execution_status? string
---@field name? string
---@field online? boolean
---@field paused? boolean
---@field runner_type? string
---@field status? string

---@class ApiEntitiesCiRunnerLoadMatch
---@field project_id? string
---@field group_id? string

---@class ApiEntitiesCiRunnerCreateData
---@field project_id string

---@class ApiEntitiesCiRunnerDetail
---@field access_level? string
---@field active? boolean
---@field architecture? string
---@field contacted_at? string
---@field created_at? string
---@field created_by? table
---@field description? string
---@field group? table
---@field id? number
---@field ip_address? string
---@field is_shared? boolean
---@field job_execution_status? string
---@field locked? boolean
---@field maintenance_note? string
---@field maximum_timeout? string
---@field name? string
---@field online? boolean
---@field paused? boolean
---@field platform? string
---@field project? table
---@field revision? string
---@field run_untagged? string
---@field runner_type? string
---@field status? string
---@field tag_list? string
---@field version? string

---@class ApiEntitiesCiRunnerDetailLoadMatch
---@field id string

---@class ApiEntitiesCiRunnerDetailUpdateData
---@field id string

---@class ApiEntitiesCiRunnerManager
---@field architecture? string
---@field contacted_at? string
---@field created_at? string
---@field id? number
---@field ip_address? string
---@field job_execution_status? string
---@field platform? string
---@field revision? string
---@field status? string
---@field system_id? string
---@field version? string

---@class ApiEntitiesCiRunnerManagerLoadMatch
---@field runner_id string

---@class ApiEntitiesCiRunnerRegistrationDetail

---@class ApiEntitiesCiRunnerRegistrationDetailCreateData

---@class ApiEntitiesCiSecureFile
---@field checksum? string
---@field checksum_algorithm? string
---@field created_at? string
---@field expires_at? string
---@field file_extension? string
---@field id? number
---@field metadata? table
---@field name? string

---@class ApiEntitiesCiSecureFileLoadMatch
---@field project_id string
---@field id? string

---@class ApiEntitiesCiSecureFileCreateData
---@field project_id string

---@class ApiEntitiesCiVariable
---@field description? string
---@field environment_scope? string
---@field hidden? boolean
---@field key? string
---@field masked? boolean
---@field protected? boolean
---@field raw? boolean
---@field value? string
---@field variable_type? string

---@class ApiEntitiesCiVariableLoadMatch
---@field id? string
---@field project_id? string
---@field group_id? string

---@class ApiEntitiesCiVariableListMatch
---@field pipeline_id string
---@field project_id string

---@class ApiEntitiesCiVariableCreateData
---@field pipeline_schedule_id? string
---@field project_id? string
---@field group_id? string

---@class ApiEntitiesCiVariableUpdateData
---@field id string
---@field pipeline_schedule_id? string
---@field project_id? string
---@field group_id? string

---@class ApiEntitiesCluster
---@field cluster_type? string
---@field created_at? string
---@field domain? string
---@field enabled? boolean
---@field environment_scope? string
---@field id? string
---@field managed? string
---@field management_project? table
---@field name? string
---@field namespace_per_environment? string
---@field platform_kubernete? table
---@field platform_type? string
---@field provider_gcp? table
---@field provider_type? string
---@field user? table

---@class ApiEntitiesClusterLoadMatch
---@field id string

---@class ApiEntitiesClusterListMatch
---@field group_id? string
---@field project_id? string

---@class ApiEntitiesClusterCreateData
---@field cluster_type? string
---@field created_at? string
---@field domain? string
---@field enabled? boolean
---@field environment_scope? string
---@field id? string
---@field managed? string
---@field management_project? table
---@field name? string
---@field namespace_per_environment? string
---@field platform_kubernete? table
---@field platform_type? string
---@field provider_gcp? table
---@field provider_type? string
---@field user? table

---@class ApiEntitiesClusterUpdateData
---@field id string

---@class ApiEntitiesClusterGroup
---@field cluster_type? string
---@field created_at? string
---@field domain? string
---@field enabled? boolean
---@field environment_scope? string
---@field group? table
---@field id? string
---@field managed? string
---@field management_project? table
---@field name? string
---@field namespace_per_environment? string
---@field platform_kubernete? table
---@field platform_type? string
---@field provider_gcp? table
---@field provider_type? string
---@field user? table

---@class ApiEntitiesClusterGroupLoadMatch
---@field cluster_id string
---@field group_id string

---@class ApiEntitiesClusterGroupCreateData
---@field group_id string

---@class ApiEntitiesClusterGroupUpdateData
---@field cluster_id string
---@field group_id string

---@class ApiEntitiesClusterProject
---@field cluster_type? string
---@field created_at? string
---@field domain? string
---@field enabled? boolean
---@field environment_scope? string
---@field id? string
---@field managed? string
---@field management_project? table
---@field name? string
---@field namespace_per_environment? string
---@field platform_kubernete? table
---@field platform_type? string
---@field project? table
---@field provider_gcp? table
---@field provider_type? string
---@field user? table

---@class ApiEntitiesClusterProjectLoadMatch
---@field cluster_id string
---@field project_id string

---@class ApiEntitiesClusterProjectCreateData
---@field project_id string

---@class ApiEntitiesClusterProjectUpdateData
---@field cluster_id string
---@field project_id string

---@class ApiEntitiesClustersAgent
---@field config_project? table
---@field created_at? string
---@field created_by_user_id? string
---@field id? string
---@field is_receptive? boolean
---@field name? string

---@class ApiEntitiesClustersAgentLoadMatch
---@field project_id string
---@field agent_id? string

---@class ApiEntitiesClustersAgentCreateData
---@field project_id string

---@class ApiEntitiesClustersAgentToken
---@field agent_id? string
---@field created_at? string
---@field created_by_user_id? string
---@field description? string
---@field id? string
---@field last_used_at? string
---@field name? string
---@field status? string

---@class ApiEntitiesClustersAgentTokenLoadMatch
---@field cluster_agent_id string
---@field id string
---@field project_id string

---@class ApiEntitiesClustersAgentTokenBasic
---@field agent_id? string
---@field created_at? string
---@field created_by_user_id? string
---@field description? string
---@field id? string
---@field name? string
---@field status? string

---@class ApiEntitiesClustersAgentTokenBasicLoadMatch
---@field cluster_agent_id string
---@field project_id string

---@class ApiEntitiesClustersAgentTokenWithToken

---@class ApiEntitiesClustersAgentTokenWithTokenCreateData
---@field cluster_agent_id string
---@field project_id string

---@class ApiEntitiesCommit
---@field author_email? string
---@field author_name? string
---@field authored_date? string
---@field committed_date? string
---@field committer_email? string
---@field committer_name? string
---@field created_at? string
---@field extended_trailer? table
---@field id? string
---@field message? string
---@field parent_id? table
---@field short_id? string
---@field title? string
---@field trailer? table
---@field web_url? string

---@class ApiEntitiesCommitListMatch
---@field project_id string
---@field merge_request_id? string

---@class ApiEntitiesCommitCreateData
---@field merge_request_id? string
---@field project_id string
---@field sha? any

---@class ApiEntitiesCommitDetail
---@field author_email? string
---@field author_name? string
---@field authored_date? string
---@field committed_date? string
---@field committer_email? string
---@field committer_name? string
---@field created_at? string
---@field extended_trailer? table
---@field id? string
---@field last_pipeline? table
---@field message? string
---@field parent_id? table
---@field project_id? number
---@field short_id? string
---@field stat? table
---@field status? string
---@field title? string
---@field trailer? table
---@field web_url? string

---@class ApiEntitiesCommitDetailLoadMatch
---@field project_id string
---@field sha any

---@class ApiEntitiesCommitDetailCreateData
---@field project_id string

---@class ApiEntitiesCommitDetailUpdateData
---@field project_id string
---@field submodule any

---@class ApiEntitiesCommitNote
---@field author? table
---@field created_at? string
---@field line? number
---@field line_type? string
---@field note? string
---@field path? string

---@class ApiEntitiesCommitNoteListMatch
---@field project_id string
---@field sha any

---@class ApiEntitiesCommitNoteCreateData
---@field project_id string
---@field sha any

---@class ApiEntitiesCommitSequence
---@field count? number

---@class ApiEntitiesCommitSequenceLoadMatch
---@field project_id string
---@field sha any

---@class ApiEntitiesCommitSignature
---@field commit_source? string
---@field signature? string
---@field signature_type? string

---@class ApiEntitiesCommitSignatureLoadMatch
---@field project_id string
---@field sha any

---@class ApiEntitiesCommitStatus
---@field allow_failure? boolean
---@field author? table
---@field coverage? number
---@field created_at? string
---@field description? string
---@field finished_at? string
---@field id? number
---@field name? string
---@field pipeline_id? number
---@field ref? string
---@field sha? string
---@field started_at? string
---@field status? string
---@field target_url? string

---@class ApiEntitiesCommitStatusListMatch
---@field project_id string
---@field sha any

---@class ApiEntitiesCommitStatusCreateData
---@field id string
---@field project_id string

---@class ApiEntitiesCompare
---@field commit? table
---@field compare_same_ref? boolean
---@field compare_timeout? boolean
---@field diff? table
---@field web_url? string

---@class ApiEntitiesCompareListMatch
---@field project_id string

---@class ApiEntitiesContainerRegistryRepository
---@field cleanup_policy_started_at? string
---@field created_at? string
---@field delete_api_path? string
---@field id? number
---@field location? string
---@field name? string
---@field path? string
---@field project_id? number
---@field size? number
---@field status? string
---@field tag? table
---@field tags_count? number

---@class ApiEntitiesContainerRegistryRepositoryLoadMatch
---@field id string

---@class ApiEntitiesContainerRegistryRepositoryListMatch
---@field project_id? string
---@field group_id? string

---@class ApiEntitiesContainerRegistryTag
---@field location? string
---@field name? string
---@field path? string

---@class ApiEntitiesContainerRegistryTagListMatch
---@field project_id string
---@field repository_id string

---@class ApiEntitiesContainerRegistryTagDetail
---@field created_at? string
---@field digest? string
---@field location? string
---@field name? string
---@field path? string
---@field revision? string
---@field short_revision? string
---@field total_size? number

---@class ApiEntitiesContainerRegistryTagDetailLoadMatch
---@field project_id string
---@field repository_id string
---@field tag_name any

---@class ApiEntitiesContributor
---@field addition? number
---@field commit? number
---@field deletion? number
---@field email? string
---@field name? string

---@class ApiEntitiesContributorLoadMatch
---@field project_id string

---@class ApiEntitiesDeployKey
---@field created_at? string
---@field expires_at? string
---@field fingerprint? string
---@field fingerprint_sha256? string
---@field id? number
---@field key? string
---@field last_used_at? string
---@field projects_with_readonly_access? table
---@field projects_with_write_access? table
---@field title? string
---@field usage_type? string

---@class ApiEntitiesDeployKeyListMatch
---@field created_at? string
---@field expires_at? string
---@field fingerprint? string
---@field fingerprint_sha256? string
---@field id? number
---@field key? string
---@field last_used_at? string
---@field projects_with_readonly_access? table
---@field projects_with_write_access? table
---@field title? string
---@field usage_type? string

---@class ApiEntitiesDeployKeyCreateData
---@field deploy_key_id? string
---@field project_id? string

---@class ApiEntitiesDeployKeyUpdateData
---@field id string
---@field project_id string

---@class ApiEntitiesDeployKeysProject
---@field can_push? boolean
---@field created_at? string
---@field expires_at? string
---@field fingerprint? string
---@field fingerprint_sha256? string
---@field id? number
---@field key? string
---@field last_used_at? string
---@field projects_with_readonly_access? table
---@field projects_with_write_access? table
---@field title? string
---@field usage_type? string

---@class ApiEntitiesDeployKeysProjectLoadMatch
---@field key_id string
---@field project_id string

---@class ApiEntitiesDeployKeysProjectListMatch
---@field project_id string

---@class ApiEntitiesDeployKeysProjectCreateData
---@field project_id string

---@class ApiEntitiesDeployToken
---@field expired? boolean
---@field expires_at? string
---@field id? number
---@field name? string
---@field revoked? boolean
---@field scope? table
---@field username? string

---@class ApiEntitiesDeployTokenLoadMatch
---@field group_id? string
---@field id string
---@field project_id? string

---@class ApiEntitiesDeployTokenListMatch
---@field group_id? string
---@field project_id? string

---@class ApiEntitiesDeployTokenWithToken

---@class ApiEntitiesDeployTokenWithTokenCreateData
---@field group_id? string
---@field project_id? string

---@class ApiEntitiesDeployment
---@field created_at? string
---@field deployable? table
---@field environment? table
---@field id? number
---@field iid? number
---@field ref? string
---@field sha? string
---@field status? string
---@field updated_at? string
---@field user? table

---@class ApiEntitiesDeploymentListMatch
---@field project_id string

---@class ApiEntitiesDeploymentExtended
---@field approval? table
---@field approval_summary? table
---@field created_at? string
---@field deployable? table
---@field environment? table
---@field id? number
---@field iid? number
---@field pending_approval_count? number
---@field ref? string
---@field sha? string
---@field status? string
---@field updated_at? string
---@field user? table

---@class ApiEntitiesDeploymentExtendedLoadMatch
---@field deployment_id string
---@field project_id string

---@class ApiEntitiesDeploymentExtendedCreateData
---@field project_id string

---@class ApiEntitiesDeploymentExtendedUpdateData
---@field deployment_id string
---@field project_id string

---@class ApiEntitiesDeploymentsApproval

---@class ApiEntitiesDeploymentsApprovalCreateData
---@field deployment_id string
---@field project_id string

---@class ApiEntitiesDictionaryTable
---@field feature_category? table
---@field table_name? string

---@class ApiEntitiesDictionaryTableLoadMatch
---@field databas_id string
---@field id string

---@class ApiEntitiesDiff
---@field a_mode? string
---@field b_mode? string
---@field collapsed? boolean
---@field deleted_file? boolean
---@field diff? string
---@field generated_file? boolean
---@field new_file? boolean
---@field new_path? string
---@field old_path? string
---@field renamed_file? boolean
---@field too_large? boolean

---@class ApiEntitiesDiffLoadMatch
---@field merge_request_id string
---@field project_id string

---@class ApiEntitiesDiffListMatch
---@field project_id string
---@field sha any

---@class ApiEntitiesDiscoveredCluster
---@field group? string
---@field project? string

---@class ApiEntitiesDiscoveredClusterLoadMatch
---@field group? string
---@field project? string

---@class ApiEntitiesDraftNote
---@field author_id? number
---@field commit_id? number
---@field discussion_id? number
---@field id? number
---@field line_code? string
---@field merge_request_id? number
---@field note? string
---@field position? table
---@field resolve_discussion? boolean

---@class ApiEntitiesDraftNoteLoadMatch
---@field id string
---@field merge_request_id string
---@field project_id string

---@class ApiEntitiesDraftNoteListMatch
---@field merge_request_id string
---@field project_id string

---@class ApiEntitiesDraftNoteCreateData
---@field merge_request_id string
---@field project_id string

---@class ApiEntitiesDraftNoteUpdateData
---@field id string
---@field merge_request_id string
---@field project_id string

---@class ApiEntitiesEnvironment
---@field auto_stop_at? string
---@field auto_stop_setting? string
---@field cluster_agent? table
---@field created_at? string
---@field description? string
---@field external_url? string
---@field flux_resource_path? string
---@field id? number
---@field kubernetes_namespace? string
---@field last_deployment? table
---@field name? string
---@field project? table
---@field slug? string
---@field state? string
---@field tier? string
---@field updated_at? string

---@class ApiEntitiesEnvironmentLoadMatch
---@field id string
---@field project_id string

---@class ApiEntitiesEnvironmentListMatch
---@field project_id string

---@class ApiEntitiesEnvironmentCreateData
---@field environment_id? string
---@field project_id string

---@class ApiEntitiesEnvironmentUpdateData
---@field id string
---@field project_id string

---@class ApiEntitiesErrorTrackingClientKey
---@field active? boolean
---@field id? number
---@field public_key? string
---@field sentry_dsn? string

---@class ApiEntitiesErrorTrackingClientKeyListMatch
---@field project_id string

---@class ApiEntitiesErrorTrackingClientKeyCreateData
---@field project_id string

---@class ApiEntitiesErrorTrackingProjectSetting
---@field active? boolean
---@field api_url? string
---@field integrated? boolean
---@field project_name? string
---@field sentry_external_url? string

---@class ApiEntitiesErrorTrackingProjectSettingLoadMatch
---@field project_id string

---@class ApiEntitiesErrorTrackingProjectSettingUpdateData
---@field project_id string

---@class ApiEntitiesEvent
---@field action_name? string
---@field author? table
---@field author_id? number
---@field author_username? string
---@field created_at? string
---@field id? number
---@field imported? boolean
---@field imported_from? string
---@field note? table
---@field project_id? number
---@field push_data? table
---@field target_id? number
---@field target_iid? number
---@field target_title? string
---@field target_type? string
---@field wiki_page? table

---@class ApiEntitiesEventLoadMatch
---@field project_id string

---@class ApiEntitiesEventListMatch
---@field user_id? string

---@class ApiEntitiesFeature
---@field definition? table
---@field gate? table
---@field name? string
---@field state? string

---@class ApiEntitiesFeatureListMatch
---@field definition? table
---@field gate? table
---@field name? string
---@field state? string

---@class ApiEntitiesFeatureCreateData
---@field id string

---@class ApiEntitiesFeatureDefinition
---@field default_enabled? string
---@field feature_issue_url? string
---@field group? string
---@field intended_to_rollout_by? string
---@field introduced_by_url? string
---@field log_state_change? string
---@field milestone? string
---@field name? string
---@field rollout_issue_url? string
---@field type? string

---@class ApiEntitiesFeatureDefinitionListMatch
---@field default_enabled? string
---@field feature_issue_url? string
---@field group? string
---@field intended_to_rollout_by? string
---@field introduced_by_url? string
---@field log_state_change? string
---@field milestone? string
---@field name? string
---@field rollout_issue_url? string
---@field type? string

---@class ApiEntitiesFeatureFlag
---@field active? boolean
---@field created_at? string
---@field description? string
---@field name? string
---@field scope? string
---@field strategy? table
---@field updated_at? string
---@field version? string

---@class ApiEntitiesFeatureFlagLoadMatch
---@field id string
---@field project_id string

---@class ApiEntitiesFeatureFlagListMatch
---@field project_id string

---@class ApiEntitiesFeatureFlagCreateData
---@field project_id string

---@class ApiEntitiesFeatureFlagUpdateData
---@field id string
---@field project_id string

---@class ApiEntitiesFeatureFlagUserList
---@field created_at? string
---@field edit_path? string
---@field id? number
---@field iid? number
---@field name? string
---@field path? string
---@field project_id? number
---@field updated_at? string
---@field user_xid? string

---@class ApiEntitiesFeatureFlagUserListLoadMatch
---@field iid any
---@field project_id string

---@class ApiEntitiesFeatureFlagUserListListMatch
---@field project_id string

---@class ApiEntitiesFeatureFlagUserListCreateData
---@field project_id string

---@class ApiEntitiesFeatureFlagUserListUpdateData
---@field iid any
---@field project_id string

---@class ApiEntitiesFreezePeriod
---@field created_at? string
---@field cron_timezone? string
---@field freeze_end? string
---@field freeze_start? string
---@field id? number
---@field updated_at? string

---@class ApiEntitiesFreezePeriodLoadMatch
---@field id string
---@field project_id string

---@class ApiEntitiesFreezePeriodListMatch
---@field project_id string

---@class ApiEntitiesFreezePeriodCreateData
---@field project_id string

---@class ApiEntitiesFreezePeriodUpdateData
---@field id string
---@field project_id string

---@class ApiEntitiesGitlabSubscription
---@field billing? table
---@field plan? table
---@field usage? table

---@class ApiEntitiesGitlabSubscriptionLoadMatch
---@field namespace_id string

---@class ApiEntitiesGoModuleVersion
---@field time? string
---@field version? string

---@class ApiEntitiesGoModuleVersionLoadMatch
---@field module_version any
---@field project_id string

---@class ApiEntitiesGroup
---@field archived? boolean
---@field auto_devops_enabled? string
---@field auto_duo_code_review_enabled? string
---@field avatar_url? string
---@field created_at? string
---@field custom_attribute? table
---@field default_branch? string
---@field default_branch_protection? string
---@field default_branch_protection_default? string
---@field description? string
---@field duo_core_features_enabled? boolean
---@field duo_features_enabled? string
---@field emails_disabled? boolean
---@field emails_enabled? boolean
---@field file_template_project_id? string
---@field full_name? string
---@field full_path? string
---@field id? string
---@field ldap_access? string
---@field ldap_cn? string
---@field ldap_group_link? table
---@field lfs_enabled? string
---@field lock_duo_features_enabled? string
---@field lock_math_rendering_limits_enabled? boolean
---@field marked_for_deletion_on? string
---@field math_rendering_limits_enabled? boolean
---@field max_artifacts_size? number
---@field mentions_disabled? string
---@field name? string
---@field organization_id? string
---@field parent_id? string
---@field path? string
---@field project_creation_level? string
---@field repository_storage? string
---@field request_access_enabled? string
---@field require_two_factor_authentication? string
---@field root_storage_statistic? table
---@field saml_group_link? table
---@field share_with_group_lock? string
---@field shared_runners_setting? string
---@field show_diff_preview_in_email? boolean
---@field statistic? table
---@field subgroup_creation_level? string
---@field two_factor_grace_period? string
---@field visibility? string
---@field web_based_commit_signing_enabled? string
---@field web_url? string
---@field wiki_access_level? string

---@class ApiEntitiesGroupLoadMatch
---@field project_id string

---@class ApiEntitiesGroupListMatch
---@field group_id? string
---@field project_id? string

---@class ApiEntitiesGroupCreateData
---@field group_id? string

---@class ApiEntitiesGroupUpdateData
---@field id string

---@class ApiEntitiesGroupDetail
---@field allowed_email_domains_list? string
---@field archived? boolean
---@field auto_ban_user_on_excessive_projects_download? string
---@field auto_devops_enabled? string
---@field auto_duo_code_review_enabled? string
---@field avatar_url? string
---@field created_at? string
---@field custom_attribute? table
---@field default_branch? string
---@field default_branch_protection? string
---@field default_branch_protection_default? string
---@field description? string
---@field duo_core_features_enabled? boolean
---@field duo_features_enabled? string
---@field emails_disabled? boolean
---@field emails_enabled? boolean
---@field enabled_git_access_protocol? string
---@field extra_shared_runners_minutes_limit? string
---@field file_template_project_id? string
---@field full_name? string
---@field full_path? string
---@field id? string
---@field ip_restriction_range? string
---@field ldap_access? string
---@field ldap_cn? string
---@field ldap_group_link? table
---@field lfs_enabled? string
---@field lock_duo_features_enabled? string
---@field lock_math_rendering_limits_enabled? boolean
---@field marked_for_deletion_on? string
---@field math_rendering_limits_enabled? boolean
---@field max_artifacts_size? number
---@field membership_lock? string
---@field mentions_disabled? string
---@field name? string
---@field organization_id? string
---@field parent_id? string
---@field path? string
---@field prevent_forking_outside_group? string
---@field prevent_sharing_groups_outside_hierarchy? string
---@field project? table
---@field project_creation_level? string
---@field repository_storage? string
---@field request_access_enabled? string
---@field require_two_factor_authentication? string
---@field root_storage_statistic? table
---@field runners_token? string
---@field saml_group_link? table
---@field service_access_tokens_expiration_enforced? string
---@field share_with_group_lock? string
---@field shared_project? table
---@field shared_runners_minutes_limit? string
---@field shared_runners_setting? string
---@field shared_with_group? string
---@field show_diff_preview_in_email? boolean
---@field statistic? table
---@field subgroup_creation_level? string
---@field two_factor_grace_period? string
---@field unique_project_download_limit? string
---@field unique_project_download_limit_alertlist? string
---@field unique_project_download_limit_allowlist? string
---@field unique_project_download_limit_interval_in_second? string
---@field visibility? string
---@field web_based_commit_signing_enabled? string
---@field web_url? string
---@field wiki_access_level? string

---@class ApiEntitiesGroupDetailLoadMatch
---@field id string

---@class ApiEntitiesGroupDetailCreateData
---@field group_id string
---@field project_id? string

---@class ApiEntitiesHook
---@field alert_status? any
---@field branch_filter_strategy? string
---@field created_at? string
---@field custom_header? table
---@field custom_webhook_template? string
---@field description? string
---@field disabled_until? string
---@field enable_ssl_verification? boolean
---@field id? string
---@field merge_requests_event? boolean
---@field name? string
---@field push_event? boolean
---@field push_events_branch_filter? string
---@field repository_update_event? boolean
---@field tag_push_event? boolean
---@field url? string
---@field url_variable? table

---@class ApiEntitiesHookLoadMatch
---@field id string

---@class ApiEntitiesHookListMatch
---@field alert_status? any
---@field branch_filter_strategy? string
---@field created_at? string
---@field custom_header? table
---@field custom_webhook_template? string
---@field description? string
---@field disabled_until? string
---@field enable_ssl_verification? boolean
---@field id? string
---@field merge_requests_event? boolean
---@field name? string
---@field push_event? boolean
---@field push_events_branch_filter? string
---@field repository_update_event? boolean
---@field tag_push_event? boolean
---@field url? string
---@field url_variable? table

---@class ApiEntitiesHookCreateData
---@field alert_status? any
---@field branch_filter_strategy? string
---@field created_at? string
---@field custom_header? table
---@field custom_webhook_template? string
---@field description? string
---@field disabled_until? string
---@field enable_ssl_verification? boolean
---@field id? string
---@field merge_requests_event? boolean
---@field name? string
---@field push_event? boolean
---@field push_events_branch_filter? string
---@field repository_update_event? boolean
---@field tag_push_event? boolean
---@field url? string
---@field url_variable? table

---@class ApiEntitiesHookUpdateData
---@field id string

---@class ApiEntitiesIntegration
---@field active? boolean
---@field alert_event? boolean
---@field comment_on_event_enabled? boolean
---@field commit_event? boolean
---@field confidential_issues_event? boolean
---@field confidential_note_event? boolean
---@field created_at? string
---@field deployment_event? boolean
---@field id? number
---@field incident_event? boolean
---@field inherited? boolean
---@field issues_event? boolean
---@field job_event? boolean
---@field merge_requests_event? boolean
---@field note_event? boolean
---@field pipeline_event? boolean
---@field property? table
---@field push_event? boolean
---@field slug? number
---@field tag_push_event? boolean
---@field title? string
---@field updated_at? string
---@field vulnerability_event? boolean
---@field wiki_page_event? boolean

---@class ApiEntitiesIntegrationLoadMatch
---@field group_id? string
---@field id? string
---@field project_id? string
---@field slug? string

---@class ApiEntitiesIntegrationBasic
---@field active? boolean
---@field alert_event? boolean
---@field comment_on_event_enabled? boolean
---@field commit_event? boolean
---@field confidential_issues_event? boolean
---@field confidential_note_event? boolean
---@field created_at? string
---@field deployment_event? boolean
---@field id? number
---@field incident_event? boolean
---@field inherited? boolean
---@field issues_event? boolean
---@field job_event? boolean
---@field merge_requests_event? boolean
---@field note_event? boolean
---@field pipeline_event? boolean
---@field push_event? boolean
---@field slug? number
---@field tag_push_event? boolean
---@field title? string
---@field updated_at? string
---@field vulnerability_event? boolean
---@field wiki_page_event? boolean

---@class ApiEntitiesIntegrationBasicListMatch
---@field group_id? string
---@field project_id? string

---@class ApiEntitiesIntegrationBasicUpdateData
---@field group_id? string
---@field project_id? string

---@class ApiEntitiesInvitation
---@field access_level? string
---@field created_at? string
---@field created_by_name? string
---@field expires_at? string
---@field invite_email? string
---@field invite_token? string
---@field user_name? string

---@class ApiEntitiesInvitationListMatch
---@field group_id? string
---@field project_id? string

---@class ApiEntitiesInvitationCreateData
---@field group_id? string
---@field project_id? string

---@class ApiEntitiesInvitationUpdateData
---@field group_id? string
---@field id string
---@field project_id? string

---@class ApiEntitiesIssuableTimeStat
---@field human_time_estimate? string
---@field human_total_time_spent? string
---@field time_estimate? number
---@field total_time_spent? number

---@class ApiEntitiesIssuableTimeStatLoadMatch
---@field issue_id? string
---@field project_id string
---@field merge_request_id? string

---@class ApiEntitiesIssuableTimeStatCreateData
---@field issue_id? string
---@field project_id string
---@field merge_request_id? string

---@class ApiEntitiesIssue
---@field assignee? table
---@field author? table
---@field blocking_issues_count? string
---@field closed_at? string
---@field closed_by? table
---@field confidential? boolean
---@field created_at? string
---@field description? string
---@field discussion_locked? boolean
---@field downvote? string
---@field due_date? string
---@field epic? table
---@field epic_iid? string
---@field has_task? boolean
---@field health_status? string
---@field id? number
---@field iid? number
---@field imported? string
---@field imported_from? string
---@field issue_type? string
---@field iteration? table
---@field label? table
---@field link? table
---@field merge_requests_count? string
---@field milestone? table
---@field moved_to_id? string
---@field project_id? number
---@field reference? table
---@field service_desk_reply_to? string
---@field severity? string
---@field state? string
---@field subscribed? string
---@field task_completion_status? string
---@field task_status? string
---@field time_stat? table
---@field title? string
---@field type? string
---@field updated_at? string
---@field upvote? string
---@field user_notes_count? string
---@field web_url? string
---@field weight? string

---@class ApiEntitiesIssueLoadMatch
---@field id string
---@field project_id? string

---@class ApiEntitiesIssueListMatch
---@field project_id? string
---@field group_id? string

---@class ApiEntitiesIssueCreateData
---@field issue_id? string
---@field project_id string

---@class ApiEntitiesIssueUpdateData
---@field id? string
---@field project_id string
---@field issue_id? string

---@class ApiEntitiesIssueLink
---@field link_type? string
---@field source_issue? table
---@field target_issue? table

---@class ApiEntitiesIssueLinkLoadMatch
---@field id string
---@field issue_id string
---@field project_id string

---@class ApiEntitiesIssueLinkCreateData
---@field issue_id string
---@field project_id string

---@class ApiEntitiesLicense
---@field condition? table
---@field content? string
---@field description? string
---@field html_url? string
---@field key? string
---@field limitation? table
---@field name? string
---@field nickname? string
---@field permission? table
---@field popular? boolean
---@field source_url? string

---@class ApiEntitiesLicenseListMatch
---@field id string
---@field name string
---@field type any

---@class ApiEntitiesMarkdown

---@class ApiEntitiesMarkdownCreateData

---@class ApiEntitiesMarkdownUploadAdmin
---@field created_at? string
---@field filename? string
---@field id? string
---@field size? string
---@field uploaded_by? table

---@class ApiEntitiesMarkdownUploadAdminListMatch
---@field group_id? string
---@field project_id? string

---@class ApiEntitiesMember
---@field access_level? string
---@field avatar_path? string
---@field avatar_url? string
---@field created_at? string
---@field created_by? table
---@field custom_attribute? table
---@field email? string
---@field expires_at? string
---@field group_saml_identity? table
---@field group_scim_identity? table
---@field id? number
---@field is_using_seat? boolean
---@field key? string
---@field locked? boolean
---@field member_role? table
---@field membership_state? string
---@field name? string
---@field override? string
---@field public_email? string
---@field state? string
---@field username? string
---@field value? string
---@field web_url? string

---@class ApiEntitiesMemberLoadMatch
---@field group_id? string
---@field id? string
---@field user_id? string
---@field project_id? string

---@class ApiEntitiesMemberListMatch
---@field group_id? string
---@field project_id? string

---@class ApiEntitiesMemberCreateData
---@field group_id? string
---@field member_id? string
---@field project_id? string

---@class ApiEntitiesMemberUpdateData
---@field group_id? string
---@field id string
---@field project_id? string

---@class ApiEntitiesMemberRemoveMatch
---@field group_id string
---@field member_id string

---@class ApiEntitiesMerge
---@field allow_collaboration? boolean
---@field allow_maintainer_to_push? boolean
---@field approvals_before_merge? string
---@field assignee? table
---@field author? table
---@field blocking_discussions_resolved? string
---@field changes_count? string
---@field closed_at? string
---@field closed_by? table
---@field created_at? string
---@field description? string
---@field description_html? string
---@field detailed_merge_status? string
---@field diff_ref? table
---@field discussion_locked? string
---@field diverged_commits_count? string
---@field downvote? string
---@field draft? string
---@field first_contribution? string
---@field first_deployed_to_production_at? string
---@field force_remove_source_branch? string
---@field has_conflict? boolean
---@field head_pipeline? table
---@field id? number
---@field iid? number
---@field imported? string
---@field imported_from? string
---@field label? string
---@field latest_build_finished_at? string
---@field latest_build_started_at? string
---@field merge_after? string
---@field merge_commit_sha? string
---@field merge_error? string
---@field merge_status? string
---@field merge_user? table
---@field merge_when_pipeline_succeed? string
---@field merged_at? string
---@field merged_by? table
---@field milestone? table
---@field pipeline? table
---@field prepared_at? string
---@field project_id? number
---@field rebase_in_progress? string
---@field reference? string
---@field reviewer? table
---@field sha? string
---@field should_remove_source_branch? boolean
---@field source_branch? string
---@field source_project_id? string
---@field squash? string
---@field squash_commit_sha? string
---@field squash_on_merge? string
---@field state? string
---@field subscribed? string
---@field target_branch? string
---@field target_project_id? string
---@field task_completion_status? string
---@field time_stat? table
---@field title? string
---@field title_html? string
---@field updated_at? string
---@field upvote? string
---@field user? table
---@field user_notes_count? string
---@field web_url? string
---@field work_in_progress? string

---@class ApiEntitiesMergeLoadMatch
---@field merge_request_iid any
---@field project_id string

---@class ApiEntitiesMergeCreateData
---@field merge_request_id? string
---@field project_id string

---@class ApiEntitiesMergeUpdateData
---@field merge_request_id? string
---@field project_id string
---@field merge_request_iid? any

---@class ApiEntitiesMergeRequestApproval
---@field approved? boolean
---@field approved_by? table
---@field user_can_approve? boolean
---@field user_has_approved? boolean

---@class ApiEntitiesMergeRequestApprovalLoadMatch
---@field merge_request_id string
---@field project_id string

---@class ApiEntitiesMergeRequestApprovalCreateData
---@field merge_request_id string
---@field project_id string

---@class ApiEntitiesMergeRequestBasic
---@field allow_collaboration? boolean
---@field allow_maintainer_to_push? boolean
---@field approvals_before_merge? string
---@field assignee? table
---@field author? table
---@field blocking_discussions_resolved? string
---@field closed_at? string
---@field closed_by? table
---@field created_at? string
---@field description? string
---@field description_html? string
---@field detailed_merge_status? string
---@field discussion_locked? string
---@field downvote? string
---@field draft? string
---@field force_remove_source_branch? string
---@field has_conflict? boolean
---@field id? number
---@field iid? number
---@field imported? string
---@field imported_from? string
---@field label? string
---@field merge_after? string
---@field merge_commit_sha? string
---@field merge_status? string
---@field merge_user? table
---@field merge_when_pipeline_succeed? string
---@field merged_at? string
---@field merged_by? table
---@field milestone? table
---@field prepared_at? string
---@field project_id? number
---@field reference? string
---@field reviewer? table
---@field sha? string
---@field should_remove_source_branch? boolean
---@field source_branch? string
---@field source_project_id? string
---@field squash? string
---@field squash_commit_sha? string
---@field squash_on_merge? string
---@field state? string
---@field target_branch? string
---@field target_project_id? string
---@field task_completion_status? string
---@field time_stat? table
---@field title? string
---@field title_html? string
---@field updated_at? string
---@field upvote? string
---@field user_notes_count? string
---@field web_url? string
---@field work_in_progress? string

---@class ApiEntitiesMergeRequestBasicLoadMatch
---@field group_id? string
---@field project_id? string
---@field issue_id? string

---@class ApiEntitiesMergeRequestBasicListMatch
---@field deployment_id? string
---@field project_id string
---@field sha? any

---@class ApiEntitiesMergeRequestChange
---@field allow_collaboration? boolean
---@field allow_maintainer_to_push? boolean
---@field approvals_before_merge? string
---@field assignee? table
---@field author? table
---@field blocking_discussions_resolved? string
---@field change? table
---@field changes_count? string
---@field closed_at? string
---@field closed_by? table
---@field created_at? string
---@field description? string
---@field description_html? string
---@field detailed_merge_status? string
---@field diff_ref? table
---@field discussion_locked? string
---@field diverged_commits_count? string
---@field downvote? string
---@field draft? string
---@field first_contribution? string
---@field first_deployed_to_production_at? string
---@field force_remove_source_branch? string
---@field has_conflict? boolean
---@field head_pipeline? table
---@field id? number
---@field iid? number
---@field imported? string
---@field imported_from? string
---@field label? string
---@field latest_build_finished_at? string
---@field latest_build_started_at? string
---@field merge_after? string
---@field merge_commit_sha? string
---@field merge_error? string
---@field merge_status? string
---@field merge_user? table
---@field merge_when_pipeline_succeed? string
---@field merged_at? string
---@field merged_by? table
---@field milestone? table
---@field overflow? string
---@field pipeline? table
---@field prepared_at? string
---@field project_id? number
---@field rebase_in_progress? string
---@field reference? string
---@field reviewer? table
---@field sha? string
---@field should_remove_source_branch? boolean
---@field source_branch? string
---@field source_project_id? string
---@field squash? string
---@field squash_commit_sha? string
---@field squash_on_merge? string
---@field state? string
---@field subscribed? string
---@field target_branch? string
---@field target_project_id? string
---@field task_completion_status? string
---@field time_stat? table
---@field title? string
---@field title_html? string
---@field updated_at? string
---@field upvote? string
---@field user? table
---@field user_notes_count? string
---@field web_url? string
---@field work_in_progress? string

---@class ApiEntitiesMergeRequestChangeLoadMatch
---@field merge_request_id string
---@field project_id string

---@class ApiEntitiesMergeRequestDiff
---@field base_commit_sha? string
---@field created_at? string
---@field head_commit_sha? string
---@field id? string
---@field merge_request_id? string
---@field patch_id_sha? string
---@field real_size? string
---@field start_commit_sha? string
---@field state? string

---@class ApiEntitiesMergeRequestDiffListMatch
---@field merge_request_id string
---@field project_id string

---@class ApiEntitiesMergeRequestDiffFull
---@field base_commit_sha? string
---@field commit? table
---@field created_at? string
---@field diff? table
---@field head_commit_sha? string
---@field id? string
---@field merge_request_id? string
---@field patch_id_sha? string
---@field real_size? string
---@field start_commit_sha? string
---@field state? string

---@class ApiEntitiesMergeRequestDiffFullLoadMatch
---@field merge_request_id string
---@field project_id string
---@field version_id string

---@class ApiEntitiesMergeRequestReviewer
---@field created_at? string
---@field state? string
---@field user? table

---@class ApiEntitiesMergeRequestReviewerLoadMatch
---@field merge_request_id string
---@field project_id string

---@class ApiEntitiesMetricImage
---@field created_at? string
---@field file_path? string
---@field filename? string
---@field id? number
---@field url? string
---@field url_text? string

---@class ApiEntitiesMetricImageListMatch
---@field alert_management_alert_id string
---@field project_id string

---@class ApiEntitiesMetricImageCreateData
---@field alert_management_alert_id string
---@field project_id string

---@class ApiEntitiesMetricImageUpdateData
---@field alert_management_alert_id string
---@field id string
---@field project_id string

---@class ApiEntitiesMrNote
---@field author? table
---@field note? string

---@class ApiEntitiesMrNoteLoadMatch
---@field merge_request_id string
---@field project_id string

---@class ApiEntitiesNamespace
---@field additional_purchased_storage_ends_on? string
---@field additional_purchased_storage_size? number
---@field avatar_url? string
---@field billable_members_count? number
---@field end_date? string
---@field extra_shared_runners_minutes_limit? number
---@field full_path? string
---@field id? number
---@field kind? string
---@field max_seats_used? number
---@field max_seats_used_changed_at? string
---@field members_count_with_descendant? number
---@field name? string
---@field parent_id? number
---@field path? string
---@field plan? string
---@field projects_count? number
---@field root_repository_size? number
---@field seats_in_use? number
---@field shared_runners_minutes_limit? number
---@field trial? boolean
---@field trial_ends_on? string
---@field web_url? string

---@class ApiEntitiesNamespaceLoadMatch
---@field id string

---@class ApiEntitiesNamespaceListMatch
---@field additional_purchased_storage_ends_on? string
---@field additional_purchased_storage_size? number
---@field avatar_url? string
---@field billable_members_count? number
---@field end_date? string
---@field extra_shared_runners_minutes_limit? number
---@field full_path? string
---@field id? number
---@field kind? string
---@field max_seats_used? number
---@field max_seats_used_changed_at? string
---@field members_count_with_descendant? number
---@field name? string
---@field parent_id? number
---@field path? string
---@field plan? string
---@field projects_count? number
---@field root_repository_size? number
---@field seats_in_use? number
---@field shared_runners_minutes_limit? number
---@field trial? boolean
---@field trial_ends_on? string
---@field web_url? string

---@class ApiEntitiesNamespaceUpdateData
---@field id string

---@class ApiEntitiesNamespaceExistence
---@field exist? boolean
---@field suggest? table

---@class ApiEntitiesNamespaceExistenceListMatch
---@field namespace_id string

---@class ApiEntitiesNamespacesStorageLimitExclusion
---@field id? number
---@field namespace_id? number
---@field namespace_name? string
---@field reason? string

---@class ApiEntitiesNamespacesStorageLimitExclusionLoadMatch
---@field id number
---@field namespace_id? number
---@field namespace_name? string
---@field reason? string

---@class ApiEntitiesNamespacesStorageLimitExclusionCreateData
---@field namespace_id string

---@class ApiEntitiesNpmPackage
---@field dist_tag? table
---@field name? string
---@field version? table

---@class ApiEntitiesNpmPackageLoadMatch
---@field group_id? string
---@field project_id? string

---@class ApiEntitiesNpmPackageTag
---@field dist_tag? table

---@class ApiEntitiesNpmPackageTagLoadMatch
---@field group_id? string
---@field project_id? string

---@class ApiEntitiesNugetPackagesVersion
---@field version? table

---@class ApiEntitiesNugetPackagesVersionListMatch
---@field project_id string

---@class ApiEntitiesNugetSearchResult
---@field author? string
---@field description? string
---@field icon_url? string
---@field id? string
---@field license_url? string
---@field project_url? string
---@field summary? string
---@field tag? string
---@field title? string
---@field total_download? number
---@field type? string
---@field verified? boolean
---@field version? string

---@class ApiEntitiesNugetSearchResultListMatch
---@field group_id? string
---@field project_id? string

---@class ApiEntitiesNugetServiceIndex
---@field resource? table
---@field version? string

---@class ApiEntitiesNugetServiceIndexListMatch
---@field group_id? string
---@field project_id? string

---@class ApiEntitiesOrganizationsOrganization

---@class ApiEntitiesOrganizationsOrganizationCreateData

---@class ApiEntitiesPackage
---@field conan_package_name? string
---@field created_at? string
---@field id? number
---@field last_downloaded_at? string
---@field link? table
---@field name? string
---@field package_type? string
---@field pipeline? table
---@field project_id? number
---@field project_path? string
---@field status? string
---@field tag? string
---@field version? string

---@class ApiEntitiesPackageLoadMatch
---@field id string
---@field project_id string

---@class ApiEntitiesPackageListMatch
---@field group_id? string
---@field project_id? string

---@class ApiEntitiesPackageFile
---@field created_at? string
---@field file_md5? string
---@field file_name? string
---@field file_sha1? string
---@field file_sha256? string
---@field id? number
---@field package_id? number
---@field pipeline? table
---@field size? number

---@class ApiEntitiesPackageFileListMatch
---@field package_id string
---@field project_id string

---@class ApiEntitiesPackagePipeline
---@field created_at? string
---@field id? number
---@field iid? number
---@field project_id? number
---@field ref? string
---@field sha? string
---@field source? string
---@field status? string
---@field updated_at? string
---@field user? table
---@field web_url? string

---@class ApiEntitiesPackagePipelineLoadMatch
---@field package_id string
---@field project_id string

---@class ApiEntitiesPackagesConanFilesList
---@field file? table

---@class ApiEntitiesPackagesConanFilesListLoadMatch
---@field conan_id string
---@field package_channel any
---@field package_id? string
---@field package_revision? any
---@field package_username any
---@field package_version any
---@field project_id string
---@field revision_id? string
---@field recipe_revision? any

---@class ApiEntitiesPackagesConanPackageManifest
---@field package_url? table

---@class ApiEntitiesPackagesConanPackageManifestLoadMatch
---@field conan_id string
---@field conan_package_reference any
---@field package_channel any
---@field package_username any
---@field package_version any
---@field project_id? string

---@class ApiEntitiesPackagesConanPackageRevision
---@field revision? string
---@field time? string

---@class ApiEntitiesPackagesConanPackageRevisionListMatch
---@field conan_id string
---@field conan_package_reference any
---@field package_channel any
---@field package_username any
---@field package_version any
---@field project_id string
---@field revision_id string

---@class ApiEntitiesPackagesConanPackageSnapshot
---@field package_snapshot? table

---@class ApiEntitiesPackagesConanPackageSnapshotLoadMatch
---@field conan_id string
---@field conan_package_reference any
---@field package_channel any
---@field package_username any
---@field package_version any
---@field project_id? string

---@class ApiEntitiesPackagesConanRecipeManifest
---@field recipe_url? table

---@class ApiEntitiesPackagesConanRecipeManifestLoadMatch
---@field conan_id string
---@field package_channel any
---@field package_username any
---@field package_version any
---@field project_id? string

---@class ApiEntitiesPackagesConanRecipeRevision
---@field revision? string
---@field time? string

---@class ApiEntitiesPackagesConanRecipeRevisionListMatch
---@field conan_id string
---@field package_channel any
---@field package_username any
---@field package_version any
---@field project_id string

---@class ApiEntitiesPackagesConanRecipeSnapshot
---@field recipe_snapshot? table

---@class ApiEntitiesPackagesConanRecipeSnapshotLoadMatch
---@field id? string
---@field package_channel any
---@field package_name any
---@field package_username any
---@field package_version any

---@class ApiEntitiesPackagesConanRevision
---@field revision? string
---@field time? string

---@class ApiEntitiesPackagesConanRevisionLoadMatch
---@field conan_id string
---@field conan_package_reference? any
---@field package_channel any
---@field package_username any
---@field package_version any
---@field project_id string
---@field revision_id? string

---@class ApiEntitiesPackagesConanUploadUrl
---@field upload_url? table

---@class ApiEntitiesPackagesConanUploadUrlCreateData
---@field conan_id string
---@field conan_package_reference? any
---@field package_channel any
---@field package_username any
---@field package_version any
---@field project_id? string

---@class ApiEntitiesPackagesDebianDistribution
---@field architecture? table
---@field codename? string
---@field component? table
---@field description? string
---@field id? number
---@field label? string
---@field origin? string
---@field suite? string
---@field valid_time_duration_second? number
---@field version? string

---@class ApiEntitiesPackagesDebianDistributionLoadMatch
---@field group_id? string
---@field id string
---@field project_id? string

---@class ApiEntitiesPackagesDebianDistributionListMatch
---@field group_id? string
---@field project_id? string
---@field codename? any

---@class ApiEntitiesPackagesDebianDistributionCreateData
---@field group_id? string
---@field project_id? string

---@class ApiEntitiesPackagesDebianDistributionUpdateData
---@field group_id? string
---@field id string
---@field project_id? string

---@class ApiEntitiesPagesDomain
---@field auto_ssl_enabled? string
---@field certificate? table
---@field domain? string
---@field enabled_until? string
---@field url? string
---@field verification_code? string
---@field verified? boolean

---@class ApiEntitiesPagesDomainLoadMatch
---@field id string
---@field project_id string

---@class ApiEntitiesPagesDomainListMatch
---@field project_id string

---@class ApiEntitiesPagesDomainCreateData
---@field project_id string

---@class ApiEntitiesPagesDomainUpdateData
---@field domain_id string
---@field project_id string

---@class ApiEntitiesPagesDomainBasic
---@field auto_ssl_enabled? string
---@field certificate_expiration? table
---@field domain? string
---@field enabled_until? string
---@field project_id? string
---@field url? string
---@field verification_code? string
---@field verified? boolean

---@class ApiEntitiesPagesDomainBasicLoadMatch
---@field auto_ssl_enabled? string
---@field certificate_expiration? table
---@field domain? string
---@field enabled_until? string
---@field project_id? string
---@field url? string
---@field verification_code? string
---@field verified? boolean

---@class ApiEntitiesPersonalAccessToken
---@field active? boolean
---@field created_at? string
---@field description? string
---@field expires_at? string
---@field id? number
---@field last_used_at? string
---@field name? string
---@field revoked? boolean
---@field scope? table
---@field user_id? number

---@class ApiEntitiesPersonalAccessTokenListMatch
---@field active? boolean
---@field created_at? string
---@field description? string
---@field expires_at? string
---@field id? number
---@field last_used_at? string
---@field name? string
---@field revoked? boolean
---@field scope? table
---@field user_id? number

---@class ApiEntitiesPersonalAccessTokenWithLastUsedIp
---@field active? boolean
---@field created_at? string
---@field description? string
---@field expires_at? string
---@field id? number
---@field last_used_at? string
---@field last_used_ip? table
---@field name? string
---@field revoked? boolean
---@field scope? table
---@field user_id? number

---@class ApiEntitiesPersonalAccessTokenWithLastUsedIpLoadMatch
---@field id string

---@class ApiEntitiesPersonalAccessTokenWithLastUsedIpListMatch
---@field active? boolean
---@field created_at? string
---@field description? string
---@field expires_at? string
---@field id? number
---@field last_used_at? string
---@field last_used_ip? table
---@field name? string
---@field revoked? boolean
---@field scope? table
---@field user_id? number

---@class ApiEntitiesPersonalAccessTokenWithToken
---@field active? boolean
---@field created_at? string
---@field description? string
---@field expires_at? string
---@field id? number
---@field last_used_at? string
---@field name? string
---@field revoked? boolean
---@field scope? table
---@field token? string
---@field user_id? number

---@class ApiEntitiesPersonalAccessTokenWithTokenCreateData
---@field personal_access_token_id? string

---@class ApiEntitiesPersonalSnippet
---@field author? table
---@field created_at? string
---@field description? string
---@field file? table
---@field file_name? string
---@field http_url_to_repo? string
---@field id? number
---@field imported? boolean
---@field imported_from? string
---@field project_id? number
---@field raw_url? string
---@field repository_storage? string
---@field ssh_url_to_repo? string
---@field title? string
---@field updated_at? string
---@field visibility? string
---@field web_url? string

---@class ApiEntitiesPersonalSnippetLoadMatch
---@field id string

---@class ApiEntitiesPersonalSnippetListMatch
---@field author? table
---@field created_at? string
---@field description? string
---@field file? table
---@field file_name? string
---@field http_url_to_repo? string
---@field id? number
---@field imported? boolean
---@field imported_from? string
---@field project_id? number
---@field raw_url? string
---@field repository_storage? string
---@field ssh_url_to_repo? string
---@field title? string
---@field updated_at? string
---@field visibility? string
---@field web_url? string

---@class ApiEntitiesPersonalSnippetCreateData
---@field author? table
---@field created_at? string
---@field description? string
---@field file? table
---@field file_name? string
---@field http_url_to_repo? string
---@field id? number
---@field imported? boolean
---@field imported_from? string
---@field project_id? number
---@field raw_url? string
---@field repository_storage? string
---@field ssh_url_to_repo? string
---@field title? string
---@field updated_at? string
---@field visibility? string
---@field web_url? string

---@class ApiEntitiesPersonalSnippetUpdateData
---@field id string

---@class ApiEntitiesPlanLimit
---@field ci_active_job? number
---@field ci_instance_level_variable? number
---@field ci_needs_size_limit? number
---@field ci_pipeline_schedule? number
---@field ci_pipeline_size? number
---@field ci_project_subscription? number
---@field ci_registered_group_runner? number
---@field ci_registered_project_runner? number
---@field conan_max_file_size? number
---@field dotenv_size? number
---@field dotenv_variable? number
---@field enforcement_limit? number
---@field generic_packages_max_file_size? number
---@field helm_max_file_size? number
---@field limits_history? table
---@field maven_max_file_size? number
---@field notification_limit? number
---@field npm_max_file_size? number
---@field nuget_max_file_size? number
---@field pipeline_hierarchy_size? number
---@field pypi_max_file_size? number
---@field storage_size_limit? number
---@field terraform_module_max_file_size? number

---@class ApiEntitiesPlanLimitLoadMatch
---@field ci_active_job? number
---@field ci_instance_level_variable? number
---@field ci_needs_size_limit? number
---@field ci_pipeline_schedule? number
---@field ci_pipeline_size? number
---@field ci_project_subscription? number
---@field ci_registered_group_runner? number
---@field ci_registered_project_runner? number
---@field conan_max_file_size? number
---@field dotenv_size? number
---@field dotenv_variable? number
---@field enforcement_limit? number
---@field generic_packages_max_file_size? number
---@field helm_max_file_size? number
---@field limits_history? table
---@field maven_max_file_size? number
---@field notification_limit? number
---@field npm_max_file_size? number
---@field nuget_max_file_size? number
---@field pipeline_hierarchy_size? number
---@field pypi_max_file_size? number
---@field storage_size_limit? number
---@field terraform_module_max_file_size? number

---@class ApiEntitiesPlanLimitUpdateData
---@field ci_active_job? number
---@field ci_instance_level_variable? number
---@field ci_needs_size_limit? number
---@field ci_pipeline_schedule? number
---@field ci_pipeline_size? number
---@field ci_project_subscription? number
---@field ci_registered_group_runner? number
---@field ci_registered_project_runner? number
---@field conan_max_file_size? number
---@field dotenv_size? number
---@field dotenv_variable? number
---@field enforcement_limit? number
---@field generic_packages_max_file_size? number
---@field helm_max_file_size? number
---@field limits_history? table
---@field maven_max_file_size? number
---@field notification_limit? number
---@field npm_max_file_size? number
---@field nuget_max_file_size? number
---@field pipeline_hierarchy_size? number
---@field pypi_max_file_size? number
---@field storage_size_limit? number
---@field terraform_module_max_file_size? number

---@class ApiEntitiesProject
---@field allow_merge_on_skipped_pipeline? boolean
---@field allow_pipeline_trigger_approve_deployment? boolean
---@field analytics_access_level? string
---@field approvals_before_merge? string
---@field archived? boolean
---@field auto_cancel_pending_pipeline? string
---@field auto_devops_deploy_strategy? string
---@field auto_devops_enabled? boolean
---@field auto_duo_code_review_enabled? string
---@field autoclose_referenced_issue? boolean
---@field avatar_url? string
---@field build_git_strategy? string
---@field build_timeout? number
---@field builds_access_level? string
---@field can_create_merge_request_in? boolean
---@field ci_allow_fork_pipelines_to_run_in_parent_project? boolean
---@field ci_config_path? string
---@field ci_default_git_depth? number
---@field ci_delete_pipelines_in_second? number
---@field ci_forward_deployment_enabled? boolean
---@field ci_forward_deployment_rollback_allowed? boolean
---@field ci_id_token_sub_claim_component? table
---@field ci_job_token_scope_enabled? boolean
---@field ci_pipeline_variables_minimum_override_role? string
---@field ci_push_repository_for_job_token_allowed? boolean
---@field ci_restrict_pipeline_cancellation_role? string
---@field ci_separated_cache? boolean
---@field compliance_framework? string
---@field container_expiration_policy? table
---@field container_registry_access_level? string
---@field container_registry_enabled? boolean
---@field container_registry_image_prefix? string
---@field created_at? string
---@field creator_id? number
---@field custom_attribute? table
---@field default_branch? string
---@field description? string
---@field description_html? string
---@field duo_remote_flows_enabled? string
---@field emails_disabled? boolean
---@field emails_enabled? boolean
---@field empty_repo? boolean
---@field enforce_auth_checks_on_upload? boolean
---@field environments_access_level? string
---@field external_authorization_classification_label? string
---@field feature_flags_access_level? string
---@field forked_from_project? table
---@field forking_access_level? string
---@field forks_count? number
---@field group_runners_enabled? boolean
---@field http_url_to_repo? string
---@field id? number
---@field import_error? string
---@field import_status? string
---@field import_type? string
---@field import_url? string
---@field infrastructure_access_level? string
---@field issue_branch_template? string
---@field issues_access_level? string
---@field issues_enabled? boolean
---@field issues_template? string
---@field jobs_enabled? boolean
---@field keep_latest_artifact? boolean
---@field last_activity_at? string
---@field lfs_enabled? boolean
---@field license? table
---@field license_url? string
---@field link? table
---@field marked_for_deletion_at? string
---@field marked_for_deletion_on? string
---@field max_artifacts_size? number
---@field merge_commit_template? string
---@field merge_method? string
---@field merge_pipelines_enabled? string
---@field merge_request_title_regex? string
---@field merge_request_title_regex_description? string
---@field merge_requests_access_level? string
---@field merge_requests_enabled? boolean
---@field merge_requests_template? string
---@field merge_trains_enabled? string
---@field merge_trains_skip_train_allowed? string
---@field mirror? string
---@field mirror_overwrites_diverged_branch? string
---@field mirror_trigger_build? string
---@field mirror_user_id? string
---@field model_experiments_access_level? string
---@field model_registry_access_level? string
---@field monitor_access_level? string
---@field mr_default_target_self? boolean
---@field name? string
---@field name_with_namespace? string
---@field namespace? table
---@field only_allow_merge_if_all_discussions_are_resolved? boolean
---@field only_allow_merge_if_all_status_checks_passed? string
---@field only_allow_merge_if_pipeline_succeed? boolean
---@field only_mirror_protected_branch? string
---@field open_issues_count? number
---@field owner? table
---@field package_registry_access_level? string
---@field packages_enabled? boolean
---@field pages_access_level? string
---@field path? string
---@field path_with_namespace? string
---@field pre_receive_secret_detection_enabled? boolean
---@field prevent_merge_without_jira_issue? string
---@field printing_merge_request_link_enabled? boolean
---@field public_job? boolean
---@field readme_url? string
---@field releases_access_level? string
---@field remove_source_branch_after_merge? boolean
---@field repository_access_level? string
---@field repository_object_format? string
---@field repository_storage? string
---@field request_access_enabled? boolean
---@field requirements_access_level? string
---@field requirements_enabled? string
---@field resolve_outdated_diff_discussion? boolean
---@field resource_group_default_process_mode? string
---@field restrict_user_defined_variable? boolean
---@field runner_token_expiration_interval? number
---@field runners_token? string
---@field secret_push_protection_enabled? boolean
---@field security_and_compliance_access_level? string
---@field security_and_compliance_enabled? string
---@field service_desk_address? string
---@field service_desk_enabled? boolean
---@field shared_runners_enabled? boolean
---@field shared_with_group? table
---@field show_diff_preview_in_email? boolean
---@field snippets_access_level? string
---@field snippets_enabled? boolean
---@field spp_repository_pipeline_access? boolean
---@field squash_commit_template? string
---@field squash_option? string
---@field ssh_url_to_repo? string
---@field star_count? number
---@field statistic? table
---@field suggestion_commit_message? string
---@field tag_list? table
---@field topic? table
---@field updated_at? string
---@field visibility? string
---@field warn_about_potentially_unwanted_character? boolean
---@field web_based_commit_signing_enabled? string
---@field web_url? string
---@field wiki_access_level? string
---@field wiki_enabled? boolean

---@class ApiEntitiesProjectListMatch
---@field project_id? string
---@field group_id? string

---@class ApiEntitiesProjectCreateData
---@field forked_from_id? string
---@field project_id? string
---@field user_id? string

---@class ApiEntitiesProjectUpdateData
---@field id? string
---@field project_id? string

---@class ApiEntitiesProjectDailyStatistic
---@field fetch? table

---@class ApiEntitiesProjectDailyStatisticLoadMatch
---@field project_id string

---@class ApiEntitiesProjectExportStatus
---@field created_at? string
---@field description? string
---@field export_status? string
---@field id? number
---@field link? table
---@field name? string
---@field name_with_namespace? string
---@field path? string
---@field path_with_namespace? string

---@class ApiEntitiesProjectExportStatusLoadMatch
---@field project_id string

---@class ApiEntitiesProjectGroupLink

---@class ApiEntitiesProjectGroupLinkCreateData
---@field project_id string

---@class ApiEntitiesProjectHook
---@field alert_status? any
---@field branch_filter_strategy? string
---@field confidential_issues_event? boolean
---@field confidential_note_event? boolean
---@field created_at? string
---@field custom_header? table
---@field custom_webhook_template? string
---@field deployment_event? boolean
---@field description? string
---@field disabled_until? string
---@field emoji_event? boolean
---@field enable_ssl_verification? boolean
---@field feature_flag_event? boolean
---@field id? string
---@field issues_event? boolean
---@field job_event? boolean
---@field merge_requests_event? boolean
---@field milestone_event? boolean
---@field name? string
---@field note_event? boolean
---@field pipeline_event? boolean
---@field project_id? string
---@field push_event? boolean
---@field push_events_branch_filter? string
---@field releases_event? boolean
---@field repository_update_event? boolean
---@field resource_access_token_event? boolean
---@field tag_push_event? boolean
---@field url? string
---@field url_variable? table
---@field vulnerability_event? boolean
---@field wiki_page_event? boolean

---@class ApiEntitiesProjectHookLoadMatch
---@field id string
---@field project_id string

---@class ApiEntitiesProjectHookListMatch
---@field project_id string

---@class ApiEntitiesProjectHookCreateData
---@field project_id string

---@class ApiEntitiesProjectHookUpdateData
---@field id string
---@field project_id string

---@class ApiEntitiesProjectImportStatus
---@field created_at? string
---@field exception_class? string
---@field exception_message? string
---@field id? string
---@field line_number? number
---@field relation_name? string
---@field source? string

---@class ApiEntitiesProjectImportStatusListMatch
---@field project_id string

---@class ApiEntitiesProjectImportStatusCreateData
---@field created_at? string
---@field exception_class? string
---@field exception_message? string
---@field id? string
---@field line_number? number
---@field relation_name? string
---@field source? string

---@class ApiEntitiesProjectJobTokenScope
---@field inbound_enabled? boolean
---@field outbound_enabled? boolean

---@class ApiEntitiesProjectJobTokenScopeLoadMatch
---@field project_id string

---@class ApiEntitiesProjectRepositoryStorage
---@field created_at? string
---@field disk_path? string
---@field project_id? number
---@field repository_storage? string

---@class ApiEntitiesProjectRepositoryStorageLoadMatch
---@field project_id string

---@class ApiEntitiesProjectSnippet
---@field author? table
---@field created_at? string
---@field description? string
---@field file? table
---@field file_name? string
---@field http_url_to_repo? string
---@field id? number
---@field imported? boolean
---@field imported_from? string
---@field project_id? number
---@field raw_url? string
---@field repository_storage? string
---@field ssh_url_to_repo? string
---@field title? string
---@field updated_at? string
---@field visibility? string
---@field web_url? string

---@class ApiEntitiesProjectSnippetLoadMatch
---@field id string
---@field project_id string

---@class ApiEntitiesProjectSnippetListMatch
---@field file_id? string
---@field file_path? any
---@field project_id string
---@field snippet_id? string

---@class ApiEntitiesProjectSnippetCreateData
---@field project_id string

---@class ApiEntitiesProjectSnippetUpdateData
---@field id string
---@field project_id string

---@class ApiEntitiesProjectUpload

---@class ApiEntitiesProjectUploadCreateData
---@field project_id string

---@class ApiEntitiesProjectWithAccess
---@field allow_merge_on_skipped_pipeline? boolean
---@field allow_pipeline_trigger_approve_deployment? boolean
---@field analytics_access_level? string
---@field approvals_before_merge? string
---@field archived? boolean
---@field auto_cancel_pending_pipeline? string
---@field auto_devops_deploy_strategy? string
---@field auto_devops_enabled? boolean
---@field auto_duo_code_review_enabled? string
---@field autoclose_referenced_issue? boolean
---@field avatar_url? string
---@field build_git_strategy? string
---@field build_timeout? number
---@field builds_access_level? string
---@field can_create_merge_request_in? boolean
---@field ci_allow_fork_pipelines_to_run_in_parent_project? boolean
---@field ci_config_path? string
---@field ci_default_git_depth? number
---@field ci_delete_pipelines_in_second? number
---@field ci_forward_deployment_enabled? boolean
---@field ci_forward_deployment_rollback_allowed? boolean
---@field ci_id_token_sub_claim_component? table
---@field ci_job_token_scope_enabled? boolean
---@field ci_pipeline_variables_minimum_override_role? string
---@field ci_push_repository_for_job_token_allowed? boolean
---@field ci_restrict_pipeline_cancellation_role? string
---@field ci_separated_cache? boolean
---@field compliance_framework? string
---@field container_expiration_policy? table
---@field container_registry_access_level? string
---@field container_registry_enabled? boolean
---@field container_registry_image_prefix? string
---@field created_at? string
---@field creator_id? number
---@field custom_attribute? table
---@field default_branch? string
---@field description? string
---@field description_html? string
---@field duo_remote_flows_enabled? string
---@field emails_disabled? boolean
---@field emails_enabled? boolean
---@field empty_repo? boolean
---@field enforce_auth_checks_on_upload? boolean
---@field environments_access_level? string
---@field external_authorization_classification_label? string
---@field feature_flags_access_level? string
---@field forked_from_project? table
---@field forking_access_level? string
---@field forks_count? number
---@field group_runners_enabled? boolean
---@field http_url_to_repo? string
---@field id? number
---@field import_error? string
---@field import_status? string
---@field import_type? string
---@field import_url? string
---@field infrastructure_access_level? string
---@field issue_branch_template? string
---@field issues_access_level? string
---@field issues_enabled? boolean
---@field issues_template? string
---@field jobs_enabled? boolean
---@field keep_latest_artifact? boolean
---@field last_activity_at? string
---@field lfs_enabled? boolean
---@field license? table
---@field license_url? string
---@field link? table
---@field marked_for_deletion_at? string
---@field marked_for_deletion_on? string
---@field max_artifacts_size? number
---@field merge_commit_template? string
---@field merge_method? string
---@field merge_pipelines_enabled? string
---@field merge_request_title_regex? string
---@field merge_request_title_regex_description? string
---@field merge_requests_access_level? string
---@field merge_requests_enabled? boolean
---@field merge_requests_template? string
---@field merge_trains_enabled? string
---@field merge_trains_skip_train_allowed? string
---@field mirror? string
---@field mirror_overwrites_diverged_branch? string
---@field mirror_trigger_build? string
---@field mirror_user_id? string
---@field model_experiments_access_level? string
---@field model_registry_access_level? string
---@field monitor_access_level? string
---@field mr_default_target_self? boolean
---@field name? string
---@field name_with_namespace? string
---@field namespace? table
---@field only_allow_merge_if_all_discussions_are_resolved? boolean
---@field only_allow_merge_if_all_status_checks_passed? string
---@field only_allow_merge_if_pipeline_succeed? boolean
---@field only_mirror_protected_branch? string
---@field open_issues_count? number
---@field owner? table
---@field package_registry_access_level? string
---@field packages_enabled? boolean
---@field pages_access_level? string
---@field path? string
---@field path_with_namespace? string
---@field permission? table
---@field pre_receive_secret_detection_enabled? boolean
---@field prevent_merge_without_jira_issue? string
---@field printing_merge_request_link_enabled? boolean
---@field public_job? boolean
---@field readme_url? string
---@field releases_access_level? string
---@field remove_source_branch_after_merge? boolean
---@field repository_access_level? string
---@field repository_object_format? string
---@field repository_storage? string
---@field request_access_enabled? boolean
---@field requirements_access_level? string
---@field requirements_enabled? string
---@field resolve_outdated_diff_discussion? boolean
---@field resource_group_default_process_mode? string
---@field restrict_user_defined_variable? boolean
---@field runner_token_expiration_interval? number
---@field runners_token? string
---@field secret_push_protection_enabled? boolean
---@field security_and_compliance_access_level? string
---@field security_and_compliance_enabled? string
---@field service_desk_address? string
---@field service_desk_enabled? boolean
---@field shared_runners_enabled? boolean
---@field shared_with_group? table
---@field show_diff_preview_in_email? boolean
---@field snippets_access_level? string
---@field snippets_enabled? boolean
---@field spp_repository_pipeline_access? boolean
---@field squash_commit_template? string
---@field squash_option? string
---@field ssh_url_to_repo? string
---@field star_count? number
---@field statistic? table
---@field suggestion_commit_message? string
---@field tag_list? table
---@field topic? table
---@field updated_at? string
---@field visibility? string
---@field warn_about_potentially_unwanted_character? boolean
---@field web_based_commit_signing_enabled? string
---@field web_url? string
---@field wiki_access_level? string
---@field wiki_enabled? boolean

---@class ApiEntitiesProjectWithAccessLoadMatch
---@field id string

---@class ApiEntitiesProjectsContainerRegistryProtectionRule
---@field id? number
---@field minimum_access_level_for_delete? string
---@field minimum_access_level_for_push? string
---@field project_id? number
---@field repository_path_pattern? string

---@class ApiEntitiesProjectsContainerRegistryProtectionRuleListMatch
---@field project_id string

---@class ApiEntitiesProjectsContainerRegistryProtectionRuleCreateData
---@field project_id string

---@class ApiEntitiesProjectsContainerRegistryProtectionRuleUpdateData
---@field id string
---@field project_id string

---@class ApiEntitiesProjectsPackagesProtectionRule
---@field id? number
---@field minimum_access_level_for_delete? string
---@field minimum_access_level_for_push? string
---@field package_name_pattern? string
---@field package_type? string
---@field project_id? number

---@class ApiEntitiesProjectsPackagesProtectionRuleListMatch
---@field project_id string

---@class ApiEntitiesProjectsPackagesProtectionRuleCreateData
---@field project_id string

---@class ApiEntitiesProjectsPackagesProtectionRuleUpdateData
---@field id string
---@field project_id string

---@class ApiEntitiesProjectsTopic
---@field avatar_url? string
---@field description? string
---@field id? string
---@field name? string
---@field organization_id? string
---@field title? string
---@field total_projects_count? string

---@class ApiEntitiesProjectsTopicLoadMatch
---@field id? string

---@class ApiEntitiesProjectsTopicCreateData
---@field avatar_url? string
---@field description? string
---@field id? string
---@field name? string
---@field organization_id? string
---@field title? string
---@field total_projects_count? string

---@class ApiEntitiesProjectsTopicUpdateData
---@field id string

---@class ApiEntitiesProtectedBranch
---@field allow_force_push? boolean
---@field code_owner_approval_required? boolean
---@field id? number
---@field inherited? boolean
---@field merge_access_level? table
---@field name? string
---@field push_access_level? table
---@field unprotect_access_level? table

---@class ApiEntitiesProtectedBranchLoadMatch
---@field id string
---@field project_id string

---@class ApiEntitiesProtectedBranchListMatch
---@field project_id string

---@class ApiEntitiesProtectedBranchCreateData
---@field project_id string

---@class ApiEntitiesProtectedBranchUpdateData
---@field id string
---@field project_id string

---@class ApiEntitiesProtectedTag
---@field create_access_level? table
---@field name? string

---@class ApiEntitiesProtectedTagLoadMatch
---@field id string
---@field project_id string

---@class ApiEntitiesProtectedTagListMatch
---@field project_id string

---@class ApiEntitiesProtectedTagCreateData
---@field project_id string

---@class ApiEntitiesPublicGroupDetail
---@field avatar_url? string
---@field full_name? string
---@field full_path? string
---@field id? string
---@field name? string
---@field web_url? string

---@class ApiEntitiesPublicGroupDetailListMatch
---@field project_id string

---@class ApiEntitiesRelatedIssue
---@field assignee? table
---@field author? table
---@field blocking_issues_count? string
---@field closed_at? string
---@field closed_by? table
---@field confidential? boolean
---@field created_at? string
---@field description? string
---@field discussion_locked? boolean
---@field downvote? string
---@field due_date? string
---@field epic? table
---@field epic_iid? string
---@field has_task? boolean
---@field health_status? string
---@field id? number
---@field iid? number
---@field imported? string
---@field imported_from? string
---@field issue_link_id? string
---@field issue_type? string
---@field iteration? table
---@field label? table
---@field link? table
---@field link_created_at? string
---@field link_type? string
---@field link_updated_at? string
---@field merge_requests_count? string
---@field milestone? table
---@field moved_to_id? string
---@field project_id? number
---@field reference? table
---@field service_desk_reply_to? string
---@field severity? string
---@field state? string
---@field subscribed? string
---@field task_completion_status? string
---@field task_status? string
---@field time_stat? table
---@field title? string
---@field type? string
---@field updated_at? string
---@field upvote? string
---@field user_notes_count? string
---@field web_url? string
---@field weight? string

---@class ApiEntitiesRelatedIssueListMatch
---@field issue_id string
---@field project_id string

---@class ApiEntitiesRelationImportTracker

---@class ApiEntitiesRelationImportTrackerCreateData

---@class ApiEntitiesRelease
---@field asset? table
---@field author? table
---@field commit? table
---@field commit_path? string
---@field created_at? string
---@field description? string
---@field description_html? string
---@field evidence? table
---@field link? table
---@field milestone? table
---@field name? string
---@field released_at? string
---@field tag_name? string
---@field tag_path? string
---@field upcoming_release? boolean

---@class ApiEntitiesReleaseLoadMatch
---@field id string
---@field project_id string

---@class ApiEntitiesReleaseListMatch
---@field project_id? string
---@field group_id? string

---@class ApiEntitiesReleaseCreateData
---@field project_id string
---@field tag_name? any

---@class ApiEntitiesReleaseUpdateData
---@field id string
---@field project_id string

---@class ApiEntitiesReleasesLink
---@field direct_asset_url? string
---@field id? number
---@field link_type? string
---@field name? string
---@field url? string

---@class ApiEntitiesReleasesLinkLoadMatch
---@field id string
---@field project_id string
---@field release_id string

---@class ApiEntitiesReleasesLinkListMatch
---@field project_id string
---@field release_id string

---@class ApiEntitiesReleasesLinkCreateData
---@field project_id string
---@field release_id string

---@class ApiEntitiesReleasesLinkUpdateData
---@field id string
---@field project_id string
---@field release_id string

---@class ApiEntitiesRemoteMirror
---@field auth_method? string
---@field enabled? boolean
---@field host_key? table
---@field id? number
---@field keep_divergent_ref? boolean
---@field last_error? number
---@field last_successful_update_at? string
---@field last_update_at? string
---@field last_update_started_at? string
---@field mirror_branch_regex? string
---@field only_protected_branch? boolean
---@field update_status? string
---@field url? string

---@class ApiEntitiesRemoteMirrorLoadMatch
---@field id string
---@field project_id string

---@class ApiEntitiesRemoteMirrorListMatch
---@field project_id string

---@class ApiEntitiesRemoteMirrorCreateData
---@field project_id string

---@class ApiEntitiesRemoteMirrorUpdateData
---@field id string
---@field project_id string

---@class ApiEntitiesRepositoryHealth
---@field alternate? table
---@field bitmap? table
---@field commit_graph? table
---@field is_object_pool? boolean
---@field last_full_repack? table
---@field multi_pack_index? table
---@field multi_pack_index_bitmap? table
---@field object? table
---@field reference? table
---@field size? number
---@field updated_at? string

---@class ApiEntitiesRepositoryHealthLoadMatch
---@field project_id string

---@class ApiEntitiesResourceAccessTokenWithToken
---@field access_level? number
---@field active? boolean
---@field created_at? string
---@field description? string
---@field expires_at? string
---@field id? number
---@field last_used_at? string
---@field name? string
---@field resource_id? number
---@field resource_type? string
---@field revoked? boolean
---@field scope? table
---@field token? string
---@field user_id? number

---@class ApiEntitiesResourceAccessTokenWithTokenCreateData
---@field group_id? string
---@field project_id? string

---@class ApiEntitiesResourceMilestoneEvent
---@field action? string
---@field created_at? string
---@field id? number
---@field milestone? table
---@field resource_id? number
---@field resource_type? string
---@field state? string
---@field user? table

---@class ApiEntitiesResourceMilestoneEventLoadMatch
---@field id string
---@field issue_id? string
---@field project_id string
---@field merge_request_id? string

---@class ApiEntitiesResourceMilestoneEventListMatch
---@field issue_id? string
---@field project_id string
---@field merge_request_id? string

---@class ApiEntitiesSnippet
---@field author? table
---@field created_at? string
---@field description? string
---@field file? table
---@field file_name? string
---@field http_url_to_repo? string
---@field id? number
---@field imported? boolean
---@field imported_from? string
---@field project_id? number
---@field raw_url? string
---@field repository_storage? string
---@field ssh_url_to_repo? string
---@field title? string
---@field updated_at? string
---@field visibility? string
---@field web_url? string

---@class ApiEntitiesSnippetListMatch
---@field author? table
---@field created_at? string
---@field description? string
---@field file? table
---@field file_name? string
---@field http_url_to_repo? string
---@field id? number
---@field imported? boolean
---@field imported_from? string
---@field project_id? number
---@field raw_url? string
---@field repository_storage? string
---@field ssh_url_to_repo? string
---@field title? string
---@field updated_at? string
---@field visibility? string
---@field web_url? string

---@class ApiEntitiesSshKeyWithUser
---@field created_at? string
---@field expires_at? string
---@field id? number
---@field key? string
---@field last_used_at? string
---@field title? string
---@field usage_type? string
---@field user? table

---@class ApiEntitiesSshKeyWithUserLoadMatch
---@field id string

---@class ApiEntitiesSuggestion
---@field appliable? string
---@field applied? string
---@field from_content? string
---@field from_line? string
---@field id? string
---@field to_content? string
---@field to_line? string

---@class ApiEntitiesSuggestionUpdateData
---@field suggestion_id? string

---@class ApiEntitiesSystemBroadcastMessage
---@field active? boolean
---@field broadcast_type? string
---@field color? string
---@field dismissable? string
---@field ends_at? string
---@field font? string
---@field id? string
---@field message? string
---@field starts_at? string
---@field target_access_level? string
---@field target_path? string
---@field theme? string

---@class ApiEntitiesSystemBroadcastMessageLoadMatch
---@field id? string

---@class ApiEntitiesSystemBroadcastMessageCreateData
---@field active? boolean
---@field broadcast_type? string
---@field color? string
---@field dismissable? string
---@field ends_at? string
---@field font? string
---@field id? string
---@field message? string
---@field starts_at? string
---@field target_access_level? string
---@field target_path? string
---@field theme? string

---@class ApiEntitiesSystemBroadcastMessageUpdateData
---@field id string

---@class ApiEntitiesSystemBroadcastMessageRemoveMatch
---@field id string

---@class ApiEntitiesTag
---@field commit? table
---@field created_at? string
---@field message? string
---@field name? string
---@field protected? boolean
---@field release? table
---@field target? string

---@class ApiEntitiesTagLoadMatch
---@field id string
---@field project_id string

---@class ApiEntitiesTagListMatch
---@field project_id string

---@class ApiEntitiesTagCreateData
---@field project_id string

---@class ApiEntitiesTagSignature
---@field signature? string
---@field signature_type? string

---@class ApiEntitiesTagSignatureLoadMatch
---@field project_id string
---@field tag_name any

---@class ApiEntitiesTemplatesList
---@field key? string
---@field name? string

---@class ApiEntitiesTemplatesListLoadMatch
---@field project_id string
---@field type any

---@class ApiEntitiesTerraformModuleVersion
---@field module? string
---@field name? string
---@field provider? string
---@field root? string
---@field source? string
---@field submodule? string
---@field version? string

---@class ApiEntitiesTerraformModuleVersionLoadMatch
---@field module_name any
---@field module_system any
---@field v1_id? string
---@field module_namespace? any

---@class ApiEntitiesTerraformModuleVersionListMatch
---@field module_name any
---@field module_system any
---@field v1_id string

---@class ApiEntitiesTreeObject
---@field id? string
---@field mode? string
---@field name? string
---@field path? string
---@field type? string

---@class ApiEntitiesTreeObjectLoadMatch
---@field project_id string

---@class ApiEntitiesTrigger
---@field created_at? string
---@field description? string
---@field expires_at? string
---@field id? number
---@field last_used? string
---@field owner? table
---@field token? string
---@field updated_at? string

---@class ApiEntitiesTriggerLoadMatch
---@field id string
---@field project_id string

---@class ApiEntitiesTriggerListMatch
---@field project_id string

---@class ApiEntitiesTriggerCreateData
---@field project_id string

---@class ApiEntitiesTriggerUpdateData
---@field id string
---@field project_id string

---@class ApiEntitiesUserAgentDetail
---@field akismet_submitted? boolean
---@field ip_address? string
---@field user_agent? string

---@class ApiEntitiesUserAgentDetailLoadMatch
---@field issue_id? string
---@field project_id? string
---@field snippet_id? string

---@class ApiEntitiesUserCount
---@field assigned_issue? number
---@field assigned_merge_request? number
---@field merge_request? number
---@field review_requested_merge_request? number
---@field todo? number

---@class ApiEntitiesUserCountLoadMatch
---@field assigned_issue? number
---@field assigned_merge_request? number
---@field merge_request? number
---@field review_requested_merge_request? number
---@field todo? number

---@class ApiEntitiesUserPublic
---@field avatar_path? string
---@field avatar_url? string
---@field bio? string
---@field bot? string
---@field can_create_group? boolean
---@field can_create_project? boolean
---@field color_scheme_id? number
---@field commit_email? string
---@field confirmed_at? string
---@field created_at? string
---@field current_sign_in_at? string
---@field custom_attribute? table
---@field discord? string
---@field email? string
---@field external? string
---@field extra_shared_runners_minutes_limit? string
---@field follower? string
---@field following? string
---@field github? string
---@field id? number
---@field identity? table
---@field is_followed? boolean
---@field job_title? string
---@field key? string
---@field last_activity_on? string
---@field last_sign_in_at? string
---@field linkedin? string
---@field local_time? string
---@field location? string
---@field locked? boolean
---@field name? string
---@field organization? string
---@field preferred_language? string
---@field private_profile? boolean
---@field projects_limit? number
---@field pronoun? string
---@field public_email? string
---@field scim_identity? table
---@field shared_runners_minutes_limit? string
---@field state? string
---@field theme_id? number
---@field twitter? string
---@field two_factor_enabled? boolean
---@field username? string
---@field value? string
---@field web_url? string
---@field website_url? string
---@field work_information? string

---@class ApiEntitiesUserPublicListMatch
---@field group_id string

---@class ApiEntitiesUserWithAdmin
---@field key? string
---@field value? string

---@class ApiEntitiesUserWithAdminListMatch
---@field key? string
---@field value? string

---@class ApiEntitiesWikiAttachment

---@class ApiEntitiesWikiAttachmentCreateData
---@field group_id? string
---@field project_id? string

---@class ApiEntitiesWikiPage
---@field content? string
---@field encoding? string
---@field format? string
---@field front_matter? table
---@field slug? string
---@field title? string
---@field wiki_page_meta_id? number

---@class ApiEntitiesWikiPageLoadMatch
---@field group_id? string
---@field slug string
---@field project_id? string

---@class ApiEntitiesWikiPageCreateData
---@field group_id? string
---@field project_id? string

---@class ApiEntitiesWikiPageUpdateData
---@field group_id? string
---@field slug string
---@field project_id? string

---@class ApiEntitiesWikiPageBasic
---@field format? string
---@field slug? string
---@field title? string
---@field wiki_page_meta_id? number

---@class ApiEntitiesWikiPageBasicListMatch
---@field group_id? string
---@field project_id? string

---@class Application

---@class ApplicationRemoveMatch
---@field id string

---@class AwardEmoji

---@class AwardEmojiRemoveMatch
---@field epic_id? string
---@field group_id? string
---@field id string
---@field note_id? string
---@field issue_id? string
---@field project_id? string
---@field merge_request_id? string
---@field snippet_id? string

---@class Badge

---@class BadgeRemoveMatch
---@field group_id? string
---@field id string
---@field project_id? string

---@class Branch

---@class BranchRemoveMatch
---@field id? string
---@field project_id string

---@class CargoPackage

---@class CargoPackageLoadMatch
---@field project_id string

---@class CiVariable

---@class CiVariableRemoveMatch
---@field id string
---@field project_id? string
---@field group_id? string

---@class Cluster

---@class ClusterRemoveMatch
---@field group_id? string
---@field id string
---@field project_id? string

---@class ClusterAgent

---@class ClusterAgentRemoveMatch
---@field id string
---@field project_id string
---@field token_id? string

---@class Composer

---@class ComposerCreateData
---@field project_id string

---@class ComposerPackage

---@class ComposerPackageLoadMatch
---@field project_id? string
---@field group_id? string
---@field sha? any

---@class Conan

---@class ConanRemoveMatch
---@field id? string
---@field package_channel any
---@field package_name any
---@field package_username any
---@field package_version any

---@class ConanPackage

---@class ConanPackageLoadMatch
---@field conan_package_reference? any
---@field file_name? any
---@field id? string
---@field package_channel? any
---@field package_name? any
---@field package_revision? any
---@field package_username? any
---@field package_version? any
---@field recipe_revision? any
---@field conan_id? string
---@field package_id? string
---@field project_id? string
---@field revision_id? string
---@field file_id? string

---@class ConanPackageUpdateData
---@field conan_package_reference? any
---@field file_name any
---@field id? string
---@field package_channel any
---@field package_name? any
---@field package_revision? any
---@field package_username any
---@field package_version any
---@field recipe_revision? any
---@field conan_id? string
---@field package_id? string
---@field project_id? string
---@field revision_id? string
---@field file_id? string

---@class ConanPackageRemoveMatch
---@field conan_id string
---@field package_channel any
---@field package_id? string
---@field package_revision? any
---@field package_username any
---@field package_version any
---@field project_id string
---@field revision_id? string
---@field recipe_revision? any

---@class ContainerRegistry

---@class ContainerRegistryRemoveMatch
---@field project_id string
---@field repository_id string
---@field tag_name? any

---@class ContainerRegistryEvent

---@class ContainerRegistryEventCreateData

---@class CustomAttribute
---@field key? string
---@field value? string

---@class CustomAttributeLoadMatch
---@field group_id? string
---@field id? string
---@field project_id? string

---@class Debian

---@class DebianUpdateData
---@field id string
---@field project_id string

---@class DebianDistribution

---@class DebianDistributionRemoveMatch
---@field group_id? string
---@field id string
---@field project_id? string

---@class DebianPackage

---@class DebianPackageLoadMatch
---@field distribution? any
---@field file_name? any
---@field id? string
---@field letter? any
---@field package_name? any
---@field package_version? any
---@field project_id? string
---@field architecture? any
---@field distribution_id? string
---@field file_sha256? any
---@field group_id? string

---@class DebianPackageUpdateData
---@field file_name any
---@field project_id string

---@class DependencyProxy

---@class DependencyProxyRemoveMatch
---@field group_id string

---@class DeployKey

---@class DeployKeyRemoveMatch
---@field id string
---@field project_id string

---@class DeployToken

---@class DeployTokenRemoveMatch
---@field group_id? string
---@field id string
---@field project_id? string

---@class Deployment

---@class DeploymentRemoveMatch
---@field id string
---@field project_id string

---@class EeApiEntitiesApprovalState

---@class EeApiEntitiesApprovalStateCreateData
---@field merge_request_id string
---@field project_id string

---@class EeApiEntitiesAuditEvent
---@field author_id? string
---@field created_at? string
---@field detail? string
---@field entity_id? string
---@field entity_type? string
---@field event_name? string
---@field id? string

---@class EeApiEntitiesAuditEventLoadMatch
---@field group_id? string
---@field id string
---@field project_id? string

---@class EeApiEntitiesAuditEventListMatch
---@field group_id? string
---@field project_id? string

---@class EeApiEntitiesBillableMembership
---@field access_level? table
---@field created_at? string
---@field expires_at? string
---@field id? string
---@field source_full_name? string
---@field source_id? string
---@field source_members_url? string

---@class EeApiEntitiesBillableMembershipLoadMatch
---@field billable_member_id string
---@field group_id string

---@class EeApiEntitiesGeoNodeStatus
---@field ci_secure_files_checksum_failed_count? string
---@field ci_secure_files_checksum_total_count? string
---@field ci_secure_files_checksummed_count? string
---@field ci_secure_files_count? string
---@field ci_secure_files_failed_count? string
---@field ci_secure_files_registry_count? string
---@field ci_secure_files_synced_count? string
---@field ci_secure_files_synced_in_percentage? string
---@field ci_secure_files_verification_failed_count? string
---@field ci_secure_files_verification_total_count? string
---@field ci_secure_files_verified_count? string
---@field ci_secure_files_verified_in_percentage? string
---@field container_repositories_checksum_failed_count? string
---@field container_repositories_checksum_total_count? string
---@field container_repositories_checksummed_count? string
---@field container_repositories_count? string
---@field container_repositories_failed_count? string
---@field container_repositories_registry_count? string
---@field container_repositories_replication_enabled? string
---@field container_repositories_synced_count? string
---@field container_repositories_synced_in_percentage? string
---@field container_repositories_verification_failed_count? string
---@field container_repositories_verification_total_count? string
---@field container_repositories_verified_count? string
---@field container_repositories_verified_in_percentage? string
---@field cursor_last_event_id? string
---@field cursor_last_event_timestamp? string
---@field db_replication_lag_second? string
---@field dependency_proxy_blobs_checksum_failed_count? string
---@field dependency_proxy_blobs_checksum_total_count? string
---@field dependency_proxy_blobs_checksummed_count? string
---@field dependency_proxy_blobs_count? string
---@field dependency_proxy_blobs_failed_count? string
---@field dependency_proxy_blobs_registry_count? string
---@field dependency_proxy_blobs_synced_count? string
---@field dependency_proxy_blobs_synced_in_percentage? string
---@field dependency_proxy_blobs_verification_failed_count? string
---@field dependency_proxy_blobs_verification_total_count? string
---@field dependency_proxy_blobs_verified_count? string
---@field dependency_proxy_blobs_verified_in_percentage? string
---@field dependency_proxy_manifests_checksum_failed_count? string
---@field dependency_proxy_manifests_checksum_total_count? string
---@field dependency_proxy_manifests_checksummed_count? string
---@field dependency_proxy_manifests_count? string
---@field dependency_proxy_manifests_failed_count? string
---@field dependency_proxy_manifests_registry_count? string
---@field dependency_proxy_manifests_synced_count? string
---@field dependency_proxy_manifests_synced_in_percentage? string
---@field dependency_proxy_manifests_verification_failed_count? string
---@field dependency_proxy_manifests_verification_total_count? string
---@field dependency_proxy_manifests_verified_count? string
---@field dependency_proxy_manifests_verified_in_percentage? string
---@field design_management_repositories_checksum_failed_count? string
---@field design_management_repositories_checksum_total_count? string
---@field design_management_repositories_checksummed_count? string
---@field design_management_repositories_count? string
---@field design_management_repositories_failed_count? string
---@field design_management_repositories_registry_count? string
---@field design_management_repositories_synced_count? string
---@field design_management_repositories_synced_in_percentage? string
---@field design_management_repositories_verification_failed_count? string
---@field design_management_repositories_verification_total_count? string
---@field design_management_repositories_verified_count? string
---@field design_management_repositories_verified_in_percentage? string
---@field geo_node_id? string
---@field git_fetch_event_count_weekly? string
---@field git_push_event_count_weekly? string
---@field group_wiki_repositories_checksum_failed_count? string
---@field group_wiki_repositories_checksum_total_count? string
---@field group_wiki_repositories_checksummed_count? string
---@field group_wiki_repositories_count? string
---@field group_wiki_repositories_failed_count? string
---@field group_wiki_repositories_registry_count? string
---@field group_wiki_repositories_synced_count? string
---@field group_wiki_repositories_synced_in_percentage? string
---@field group_wiki_repositories_verification_failed_count? string
---@field group_wiki_repositories_verification_total_count? string
---@field group_wiki_repositories_verified_count? string
---@field group_wiki_repositories_verified_in_percentage? string
---@field health? string
---@field health_status? string
---@field healthy? string
---@field job_artifacts_checksum_failed_count? string
---@field job_artifacts_checksum_total_count? string
---@field job_artifacts_checksummed_count? string
---@field job_artifacts_count? string
---@field job_artifacts_failed_count? string
---@field job_artifacts_registry_count? string
---@field job_artifacts_synced_count? string
---@field job_artifacts_synced_in_percentage? string
---@field job_artifacts_verification_failed_count? string
---@field job_artifacts_verification_total_count? string
---@field job_artifacts_verified_count? string
---@field job_artifacts_verified_in_percentage? string
---@field last_event_id? string
---@field last_event_timestamp? string
---@field last_successful_status_check_timestamp? string
---@field lfs_objects_checksum_failed_count? string
---@field lfs_objects_checksum_total_count? string
---@field lfs_objects_checksummed_count? string
---@field lfs_objects_count? string
---@field lfs_objects_failed_count? string
---@field lfs_objects_registry_count? string
---@field lfs_objects_synced_count? string
---@field lfs_objects_synced_in_percentage? string
---@field lfs_objects_verification_failed_count? string
---@field lfs_objects_verification_total_count? string
---@field lfs_objects_verified_count? string
---@field lfs_objects_verified_in_percentage? string
---@field link? table
---@field merge_request_diffs_checksum_failed_count? string
---@field merge_request_diffs_checksum_total_count? string
---@field merge_request_diffs_checksummed_count? string
---@field merge_request_diffs_count? string
---@field merge_request_diffs_failed_count? string
---@field merge_request_diffs_registry_count? string
---@field merge_request_diffs_synced_count? string
---@field merge_request_diffs_synced_in_percentage? string
---@field merge_request_diffs_verification_failed_count? string
---@field merge_request_diffs_verification_total_count? string
---@field merge_request_diffs_verified_count? string
---@field merge_request_diffs_verified_in_percentage? string
---@field missing_oauth_application? string
---@field namespace? table
---@field package_files_checksum_failed_count? string
---@field package_files_checksum_total_count? string
---@field package_files_checksummed_count? string
---@field package_files_count? string
---@field package_files_failed_count? string
---@field package_files_registry_count? string
---@field package_files_synced_count? string
---@field package_files_synced_in_percentage? string
---@field package_files_verification_failed_count? string
---@field package_files_verification_total_count? string
---@field package_files_verified_count? string
---@field package_files_verified_in_percentage? string
---@field pages_deployments_checksum_failed_count? string
---@field pages_deployments_checksum_total_count? string
---@field pages_deployments_checksummed_count? string
---@field pages_deployments_count? string
---@field pages_deployments_failed_count? string
---@field pages_deployments_registry_count? string
---@field pages_deployments_synced_count? string
---@field pages_deployments_synced_in_percentage? string
---@field pages_deployments_verification_failed_count? string
---@field pages_deployments_verification_total_count? string
---@field pages_deployments_verified_count? string
---@field pages_deployments_verified_in_percentage? string
---@field pipeline_artifacts_checksum_failed_count? string
---@field pipeline_artifacts_checksum_total_count? string
---@field pipeline_artifacts_checksummed_count? string
---@field pipeline_artifacts_count? string
---@field pipeline_artifacts_failed_count? string
---@field pipeline_artifacts_registry_count? string
---@field pipeline_artifacts_synced_count? string
---@field pipeline_artifacts_synced_in_percentage? string
---@field pipeline_artifacts_verification_failed_count? string
---@field pipeline_artifacts_verification_total_count? string
---@field pipeline_artifacts_verified_count? string
---@field pipeline_artifacts_verified_in_percentage? string
---@field project_repositories_checksum_failed_count? string
---@field project_repositories_checksum_total_count? string
---@field project_repositories_checksummed_count? string
---@field project_repositories_count? string
---@field project_repositories_failed_count? string
---@field project_repositories_registry_count? string
---@field project_repositories_synced_count? string
---@field project_repositories_synced_in_percentage? string
---@field project_repositories_verification_failed_count? string
---@field project_repositories_verification_total_count? string
---@field project_repositories_verified_count? string
---@field project_repositories_verified_in_percentage? string
---@field project_wiki_repositories_checksum_failed_count? string
---@field project_wiki_repositories_checksum_total_count? string
---@field project_wiki_repositories_checksummed_count? string
---@field project_wiki_repositories_count? string
---@field project_wiki_repositories_failed_count? string
---@field project_wiki_repositories_registry_count? string
---@field project_wiki_repositories_synced_count? string
---@field project_wiki_repositories_synced_in_percentage? string
---@field project_wiki_repositories_verification_failed_count? string
---@field project_wiki_repositories_verification_total_count? string
---@field project_wiki_repositories_verified_count? string
---@field project_wiki_repositories_verified_in_percentage? string
---@field projects_count? string
---@field proxy_local_requests_event_count_weekly? string
---@field proxy_remote_requests_event_count_weekly? string
---@field replication_slots_count? string
---@field replication_slots_max_retained_wal_byte? string
---@field replication_slots_used_count? string
---@field replication_slots_used_in_percentage? string
---@field repositories_checked_count? string
---@field repositories_checked_failed_count? string
---@field repositories_checked_in_percentage? string
---@field repositories_count? string
---@field revision? string
---@field selective_sync_type? string
---@field snippet_repositories_checksum_failed_count? string
---@field snippet_repositories_checksum_total_count? string
---@field snippet_repositories_checksummed_count? string
---@field snippet_repositories_count? string
---@field snippet_repositories_failed_count? string
---@field snippet_repositories_registry_count? string
---@field snippet_repositories_synced_count? string
---@field snippet_repositories_synced_in_percentage? string
---@field snippet_repositories_verification_failed_count? string
---@field snippet_repositories_verification_total_count? string
---@field snippet_repositories_verified_count? string
---@field snippet_repositories_verified_in_percentage? string
---@field storage_shard? table
---@field storage_shards_match? string
---@field terraform_state_versions_checksum_failed_count? string
---@field terraform_state_versions_checksum_total_count? string
---@field terraform_state_versions_checksummed_count? string
---@field terraform_state_versions_count? string
---@field terraform_state_versions_failed_count? string
---@field terraform_state_versions_registry_count? string
---@field terraform_state_versions_synced_count? string
---@field terraform_state_versions_synced_in_percentage? string
---@field terraform_state_versions_verification_failed_count? string
---@field terraform_state_versions_verification_total_count? string
---@field terraform_state_versions_verified_count? string
---@field terraform_state_versions_verified_in_percentage? string
---@field updated_at? string
---@field uploads_checksum_failed_count? string
---@field uploads_checksum_total_count? string
---@field uploads_checksummed_count? string
---@field uploads_count? string
---@field uploads_failed_count? string
---@field uploads_registry_count? string
---@field uploads_synced_count? string
---@field uploads_synced_in_percentage? string
---@field uploads_verification_failed_count? string
---@field uploads_verification_total_count? string
---@field uploads_verified_count? string
---@field uploads_verified_in_percentage? string
---@field version? string

---@class EeApiEntitiesGeoNodeStatusCreateData
---@field ci_secure_files_checksum_failed_count? string
---@field ci_secure_files_checksum_total_count? string
---@field ci_secure_files_checksummed_count? string
---@field ci_secure_files_count? string
---@field ci_secure_files_failed_count? string
---@field ci_secure_files_registry_count? string
---@field ci_secure_files_synced_count? string
---@field ci_secure_files_synced_in_percentage? string
---@field ci_secure_files_verification_failed_count? string
---@field ci_secure_files_verification_total_count? string
---@field ci_secure_files_verified_count? string
---@field ci_secure_files_verified_in_percentage? string
---@field container_repositories_checksum_failed_count? string
---@field container_repositories_checksum_total_count? string
---@field container_repositories_checksummed_count? string
---@field container_repositories_count? string
---@field container_repositories_failed_count? string
---@field container_repositories_registry_count? string
---@field container_repositories_replication_enabled? string
---@field container_repositories_synced_count? string
---@field container_repositories_synced_in_percentage? string
---@field container_repositories_verification_failed_count? string
---@field container_repositories_verification_total_count? string
---@field container_repositories_verified_count? string
---@field container_repositories_verified_in_percentage? string
---@field cursor_last_event_id? string
---@field cursor_last_event_timestamp? string
---@field db_replication_lag_second? string
---@field dependency_proxy_blobs_checksum_failed_count? string
---@field dependency_proxy_blobs_checksum_total_count? string
---@field dependency_proxy_blobs_checksummed_count? string
---@field dependency_proxy_blobs_count? string
---@field dependency_proxy_blobs_failed_count? string
---@field dependency_proxy_blobs_registry_count? string
---@field dependency_proxy_blobs_synced_count? string
---@field dependency_proxy_blobs_synced_in_percentage? string
---@field dependency_proxy_blobs_verification_failed_count? string
---@field dependency_proxy_blobs_verification_total_count? string
---@field dependency_proxy_blobs_verified_count? string
---@field dependency_proxy_blobs_verified_in_percentage? string
---@field dependency_proxy_manifests_checksum_failed_count? string
---@field dependency_proxy_manifests_checksum_total_count? string
---@field dependency_proxy_manifests_checksummed_count? string
---@field dependency_proxy_manifests_count? string
---@field dependency_proxy_manifests_failed_count? string
---@field dependency_proxy_manifests_registry_count? string
---@field dependency_proxy_manifests_synced_count? string
---@field dependency_proxy_manifests_synced_in_percentage? string
---@field dependency_proxy_manifests_verification_failed_count? string
---@field dependency_proxy_manifests_verification_total_count? string
---@field dependency_proxy_manifests_verified_count? string
---@field dependency_proxy_manifests_verified_in_percentage? string
---@field design_management_repositories_checksum_failed_count? string
---@field design_management_repositories_checksum_total_count? string
---@field design_management_repositories_checksummed_count? string
---@field design_management_repositories_count? string
---@field design_management_repositories_failed_count? string
---@field design_management_repositories_registry_count? string
---@field design_management_repositories_synced_count? string
---@field design_management_repositories_synced_in_percentage? string
---@field design_management_repositories_verification_failed_count? string
---@field design_management_repositories_verification_total_count? string
---@field design_management_repositories_verified_count? string
---@field design_management_repositories_verified_in_percentage? string
---@field geo_node_id? string
---@field git_fetch_event_count_weekly? string
---@field git_push_event_count_weekly? string
---@field group_wiki_repositories_checksum_failed_count? string
---@field group_wiki_repositories_checksum_total_count? string
---@field group_wiki_repositories_checksummed_count? string
---@field group_wiki_repositories_count? string
---@field group_wiki_repositories_failed_count? string
---@field group_wiki_repositories_registry_count? string
---@field group_wiki_repositories_synced_count? string
---@field group_wiki_repositories_synced_in_percentage? string
---@field group_wiki_repositories_verification_failed_count? string
---@field group_wiki_repositories_verification_total_count? string
---@field group_wiki_repositories_verified_count? string
---@field group_wiki_repositories_verified_in_percentage? string
---@field health? string
---@field health_status? string
---@field healthy? string
---@field job_artifacts_checksum_failed_count? string
---@field job_artifacts_checksum_total_count? string
---@field job_artifacts_checksummed_count? string
---@field job_artifacts_count? string
---@field job_artifacts_failed_count? string
---@field job_artifacts_registry_count? string
---@field job_artifacts_synced_count? string
---@field job_artifacts_synced_in_percentage? string
---@field job_artifacts_verification_failed_count? string
---@field job_artifacts_verification_total_count? string
---@field job_artifacts_verified_count? string
---@field job_artifacts_verified_in_percentage? string
---@field last_event_id? string
---@field last_event_timestamp? string
---@field last_successful_status_check_timestamp? string
---@field lfs_objects_checksum_failed_count? string
---@field lfs_objects_checksum_total_count? string
---@field lfs_objects_checksummed_count? string
---@field lfs_objects_count? string
---@field lfs_objects_failed_count? string
---@field lfs_objects_registry_count? string
---@field lfs_objects_synced_count? string
---@field lfs_objects_synced_in_percentage? string
---@field lfs_objects_verification_failed_count? string
---@field lfs_objects_verification_total_count? string
---@field lfs_objects_verified_count? string
---@field lfs_objects_verified_in_percentage? string
---@field link? table
---@field merge_request_diffs_checksum_failed_count? string
---@field merge_request_diffs_checksum_total_count? string
---@field merge_request_diffs_checksummed_count? string
---@field merge_request_diffs_count? string
---@field merge_request_diffs_failed_count? string
---@field merge_request_diffs_registry_count? string
---@field merge_request_diffs_synced_count? string
---@field merge_request_diffs_synced_in_percentage? string
---@field merge_request_diffs_verification_failed_count? string
---@field merge_request_diffs_verification_total_count? string
---@field merge_request_diffs_verified_count? string
---@field merge_request_diffs_verified_in_percentage? string
---@field missing_oauth_application? string
---@field namespace? table
---@field package_files_checksum_failed_count? string
---@field package_files_checksum_total_count? string
---@field package_files_checksummed_count? string
---@field package_files_count? string
---@field package_files_failed_count? string
---@field package_files_registry_count? string
---@field package_files_synced_count? string
---@field package_files_synced_in_percentage? string
---@field package_files_verification_failed_count? string
---@field package_files_verification_total_count? string
---@field package_files_verified_count? string
---@field package_files_verified_in_percentage? string
---@field pages_deployments_checksum_failed_count? string
---@field pages_deployments_checksum_total_count? string
---@field pages_deployments_checksummed_count? string
---@field pages_deployments_count? string
---@field pages_deployments_failed_count? string
---@field pages_deployments_registry_count? string
---@field pages_deployments_synced_count? string
---@field pages_deployments_synced_in_percentage? string
---@field pages_deployments_verification_failed_count? string
---@field pages_deployments_verification_total_count? string
---@field pages_deployments_verified_count? string
---@field pages_deployments_verified_in_percentage? string
---@field pipeline_artifacts_checksum_failed_count? string
---@field pipeline_artifacts_checksum_total_count? string
---@field pipeline_artifacts_checksummed_count? string
---@field pipeline_artifacts_count? string
---@field pipeline_artifacts_failed_count? string
---@field pipeline_artifacts_registry_count? string
---@field pipeline_artifacts_synced_count? string
---@field pipeline_artifacts_synced_in_percentage? string
---@field pipeline_artifacts_verification_failed_count? string
---@field pipeline_artifacts_verification_total_count? string
---@field pipeline_artifacts_verified_count? string
---@field pipeline_artifacts_verified_in_percentage? string
---@field project_repositories_checksum_failed_count? string
---@field project_repositories_checksum_total_count? string
---@field project_repositories_checksummed_count? string
---@field project_repositories_count? string
---@field project_repositories_failed_count? string
---@field project_repositories_registry_count? string
---@field project_repositories_synced_count? string
---@field project_repositories_synced_in_percentage? string
---@field project_repositories_verification_failed_count? string
---@field project_repositories_verification_total_count? string
---@field project_repositories_verified_count? string
---@field project_repositories_verified_in_percentage? string
---@field project_wiki_repositories_checksum_failed_count? string
---@field project_wiki_repositories_checksum_total_count? string
---@field project_wiki_repositories_checksummed_count? string
---@field project_wiki_repositories_count? string
---@field project_wiki_repositories_failed_count? string
---@field project_wiki_repositories_registry_count? string
---@field project_wiki_repositories_synced_count? string
---@field project_wiki_repositories_synced_in_percentage? string
---@field project_wiki_repositories_verification_failed_count? string
---@field project_wiki_repositories_verification_total_count? string
---@field project_wiki_repositories_verified_count? string
---@field project_wiki_repositories_verified_in_percentage? string
---@field projects_count? string
---@field proxy_local_requests_event_count_weekly? string
---@field proxy_remote_requests_event_count_weekly? string
---@field replication_slots_count? string
---@field replication_slots_max_retained_wal_byte? string
---@field replication_slots_used_count? string
---@field replication_slots_used_in_percentage? string
---@field repositories_checked_count? string
---@field repositories_checked_failed_count? string
---@field repositories_checked_in_percentage? string
---@field repositories_count? string
---@field revision? string
---@field selective_sync_type? string
---@field snippet_repositories_checksum_failed_count? string
---@field snippet_repositories_checksum_total_count? string
---@field snippet_repositories_checksummed_count? string
---@field snippet_repositories_count? string
---@field snippet_repositories_failed_count? string
---@field snippet_repositories_registry_count? string
---@field snippet_repositories_synced_count? string
---@field snippet_repositories_synced_in_percentage? string
---@field snippet_repositories_verification_failed_count? string
---@field snippet_repositories_verification_total_count? string
---@field snippet_repositories_verified_count? string
---@field snippet_repositories_verified_in_percentage? string
---@field storage_shard? table
---@field storage_shards_match? string
---@field terraform_state_versions_checksum_failed_count? string
---@field terraform_state_versions_checksum_total_count? string
---@field terraform_state_versions_checksummed_count? string
---@field terraform_state_versions_count? string
---@field terraform_state_versions_failed_count? string
---@field terraform_state_versions_registry_count? string
---@field terraform_state_versions_synced_count? string
---@field terraform_state_versions_synced_in_percentage? string
---@field terraform_state_versions_verification_failed_count? string
---@field terraform_state_versions_verification_total_count? string
---@field terraform_state_versions_verified_count? string
---@field terraform_state_versions_verified_in_percentage? string
---@field updated_at? string
---@field uploads_checksum_failed_count? string
---@field uploads_checksum_total_count? string
---@field uploads_checksummed_count? string
---@field uploads_count? string
---@field uploads_failed_count? string
---@field uploads_registry_count? string
---@field uploads_synced_count? string
---@field uploads_synced_in_percentage? string
---@field uploads_verification_failed_count? string
---@field uploads_verification_total_count? string
---@field uploads_verified_count? string
---@field uploads_verified_in_percentage? string
---@field version? string

---@class EeApiEntitiesGeoPipelineRef
---@field pipeline_ref? table

---@class EeApiEntitiesGeoPipelineRefListMatch
---@field gl_repository any

---@class EeApiEntitiesIssuableMetricImage
---@field created_at? string
---@field file_path? string
---@field filename? string
---@field id? string
---@field url? string
---@field url_text? string

---@class EeApiEntitiesIssuableMetricImageCreateData
---@field issue_id string
---@field project_id string

---@class EeApiEntitiesIssuableMetricImageUpdateData
---@field id string
---@field issue_id string
---@field project_id string

---@class EeApiEntitiesIssuableMetricImageRemoveMatch
---@field id string
---@field issue_id string
---@field project_id string

---@class EeApiEntitiesMergeRequestApprovalState
---@field approvals_required? number
---@field approved? boolean
---@field approved_by? table
---@field code_owner? boolean
---@field contains_hidden_group? boolean
---@field eligible_approver? table
---@field group? table
---@field id? number
---@field name? string
---@field overridden? boolean
---@field report_type? string
---@field rule_type? string
---@field section? string
---@field source_rule? table
---@field user? table

---@class EeApiEntitiesMergeRequestApprovalStateListMatch
---@field merge_request_id string
---@field project_id string

---@class EeApiEntitiesSshCertificate
---@field created_at? string
---@field id? number
---@field key? string
---@field title? string

---@class EeApiEntitiesSshCertificateListMatch
---@field group_id string

---@class EeApiEntitiesSshCertificateCreateData
---@field group_id string

---@class Environment

---@class EnvironmentCreateData
---@field project_id string

---@class EnvironmentRemoveMatch
---@field id string
---@field project_id string

---@class ErrorTrackingClientKey

---@class ErrorTrackingClientKeyRemoveMatch
---@field id string
---@field project_id string

---@class Feature

---@class FeatureRemoveMatch
---@field id string

---@class FeatureFlag

---@class FeatureFlagLoadMatch
---@field project_id string

---@class FeatureFlagCreateData
---@field unleash_id string

---@class FeatureFlagRemoveMatch
---@field id string
---@field project_id string

---@class FeatureFlagsUserList

---@class FeatureFlagsUserListRemoveMatch
---@field id string
---@field project_id string

---@class FreezePeriod

---@class FreezePeriodRemoveMatch
---@field id string
---@field project_id string

---@class GenericPackage

---@class GenericPackageLoadMatch
---@field file_name any
---@field generic_id string
---@field project_id string

---@class GenericPackageUpdateData
---@field file_name any
---@field generic_id string
---@field project_id string

---@class Geo

---@class GeoLoadMatch
---@field replicable_id string
---@field replicable_name any

---@class GeoCreateData
---@field node_proxy_id? string

---@class GoProxy

---@class GoProxyLoadMatch
---@field module_version? any
---@field project_id string

---@class Group

---@class GroupLoadMatch
---@field filename? any
---@field id string
---@field secret? any
---@field upload_id? string

---@class GroupCreateData
---@field id string

---@class GroupUpdateData
---@field id string
---@field key? string
---@field member_id? string

---@class GroupRemoveMatch
---@field filename? any
---@field id string
---@field secret? any
---@field group_id? string
---@field key? string
---@field ssh_certificates_id? string
---@field upload_id? string
---@field user_id? string

---@class GroupAvatar

---@class GroupAvatarLoadMatch
---@field id string

---@class GroupExport

---@class GroupExportLoadMatch
---@field group_id string

---@class GroupExportCreateData
---@field id string

---@class GroupImport

---@class GroupImportCreateData

---@class HelmPackage

---@class HelmPackageLoadMatch
---@field file_name? any
---@field helm_id? string
---@field project_id string
---@field channel? any

---@class HelmPackageCreateData
---@field channel? any
---@field project_id string
---@field api_id? string

---@class Hook

---@class HookCreateData
---@field id string

---@class HookUpdateData
---@field id string
---@field key string

---@class HookRemoveMatch
---@field id string
---@field key string

---@class Import

---@class ImportCreateData

---@class Integration

---@class IntegrationCreateData
---@field project_id? string

---@class IntegrationRemoveMatch
---@field group_id? string
---@field id? string
---@field project_id? string
---@field slug? string

---@class Invitation

---@class InvitationRemoveMatch
---@field group_id? string
---@field id string
---@field project_id? string

---@class IssueLink

---@class IssueLinkRemoveMatch
---@field id string
---@field issue_id string
---@field project_id string

---@class IssuesStatistic

---@class IssuesStatisticLoadMatch

---@class Job

---@class JobLoadMatch
---@field id string

---@class JobCreateData
---@field id? string

---@class JobUpdateData
---@field id string

---@class MavenPackage

---@class MavenPackageLoadMatch
---@field file_name any
---@field group_id? string
---@field project_id? string

---@class MavenPackageUpdateData
---@field file_name any
---@field project_id string

---@class Member

---@class MemberRemoveMatch
---@field group_id? string
---@field id string
---@field project_id? string

---@class MergeRequest

---@class MergeRequestLoadMatch
---@field id string
---@field project_id string

---@class MergeRequestUpdateData
---@field id string
---@field project_id string

---@class MergeRequestRemoveMatch
---@field id string
---@field project_id string

---@class Metadata
---@field enterprise? boolean
---@field kas? table
---@field revision? string
---@field version? string

---@class MetadataLoadMatch
---@field enterprise? boolean
---@field kas? table
---@field revision? string
---@field version? string

---@class Migration

---@class MigrationCreateData
---@field timestamp any

---@class MlModelRegistry

---@class MlModelRegistryLoadMatch
---@field file_name any
---@field ml_model_id string
---@field project_id string

---@class MlModelRegistryUpdateData
---@field file_name any
---@field ml_model_id string
---@field project_id string

---@class Namespace

---@class NamespaceRemoveMatch
---@field id string

---@class Npm

---@class NpmUpdateData
---@field id string
---@field project_id string

---@class NpmPackage

---@class NpmPackageLoadMatch
---@field project_id string

---@class NpmPackageCreateData
---@field group_id? string
---@field project_id? string

---@class NpmPackageUpdateData
---@field group_id? string
---@field tag any
---@field project_id? string

---@class NpmPackageRemoveMatch
---@field group_id? string
---@field tag any
---@field project_id? string

---@class Nuget

---@class NugetUpdateData
---@field project_id string

---@class NugetPackage
---@field catalog_entry? table
---@field count? number
---@field id? string
---@field item? table
---@field lower? string
---@field package_content? string
---@field upper? string

---@class NugetPackageLoadMatch
---@field group_id? string
---@field project_id? string

---@class NugetPackageListMatch
---@field group_id? string
---@field project_id? string

---@class NugetPackageUpdateData
---@field project_id string

---@class NugetPackageRemoveMatch
---@field project_id string

---@class PackageFile

---@class PackageFileLoadMatch
---@field id string
---@field package_id string
---@field project_id string

---@class PackageFileRemoveMatch
---@field id string
---@field package_id string
---@field project_id string

---@class Page

---@class PageLoadMatch
---@field project_id string

---@class PageUpdateData
---@field project_id string

---@class PageRemoveMatch
---@field project_id string

---@class Participant
---@field key? string
---@field value? string

---@class ParticipantListMatch
---@field issue_id? string
---@field project_id string
---@field merge_request_id? string

---@class PersonalAccessToken

---@class PersonalAccessTokenRemoveMatch
---@field id string

---@class Project
---@field before_sha? string
---@field committed_at? string
---@field coverage? number
---@field created_at? string
---@field detailed_status? table
---@field duration? number
---@field finished_at? string
---@field id? number
---@field iid? number
---@field name? string
---@field project_id? number
---@field queued_duration? number
---@field ref? string
---@field sha? string
---@field source? string
---@field started_at? string
---@field status? string
---@field tag? boolean
---@field updated_at? string
---@field user? table
---@field web_url? string
---@field yaml_error? string

---@class ProjectLoadMatch
---@field artifact_id? string
---@field id string
---@field file_path? any
---@field hook_id? string
---@field job_id? string
---@field ref_name? any
---@field filename? any
---@field secret? any
---@field issue_id? string
---@field pipeline_id? string
---@field sha? any
---@field upload_id? string

---@class ProjectCreateData
---@field event_id? string
---@field hook_id? string
---@field id string
---@field file_path? any
---@field trigger? any
---@field issue_id? string
---@field merge_request_id? string
---@field pipeline_schedule_id? string
---@field project_id? string

---@class ProjectUpdateData
---@field hook_id? string
---@field id string
---@field key? string
---@field domain? any
---@field draft_note_id? string
---@field merge_request_id? string
---@field file_path? any
---@field pipeline_id? string

---@class ProjectRemoveMatch
---@field file_path? any
---@field id string
---@field draft_note_id? string
---@field merge_request_id? string
---@field filename? any
---@field secret? any
---@field hook_id? string
---@field key? string
---@field pipeline_schedule_id? string
---@field domain? any
---@field group_id? string
---@field issue_iid? any
---@field job_id? string
---@field name? string
---@field package_protection_rule_id? string
---@field pipeline_id? string
---@field protection_rule_id? string
---@field trigger_id? string
---@field upload_id? string

---@class ProjectAvatar

---@class ProjectAvatarLoadMatch
---@field id string

---@class ProjectEntity

---@class ProjectEntityCreateData

---@class ProjectExport

---@class ProjectExportLoadMatch
---@field project_id string

---@class ProjectExportCreateData
---@field id string

---@class ProjectHook

---@class ProjectHookRemoveMatch
---@field id string
---@field project_id string

---@class ProjectImport

---@class ProjectImportCreateData

---@class ProjectImportEntity
---@field forked? boolean
---@field full_name? string
---@field full_path? string
---@field human_import_status_name? string
---@field id? number
---@field import_error? string
---@field import_source? string
---@field import_status? string
---@field import_warning? string
---@field name? string
---@field provider_link? string
---@field refs_url? string
---@field relation_type? string

---@class ProjectImportEntityCreateData
---@field forked? boolean
---@field full_name? string
---@field full_path? string
---@field human_import_status_name? string
---@field id? number
---@field import_error? string
---@field import_source? string
---@field import_status? string
---@field import_warning? string
---@field name? string
---@field provider_link? string
---@field refs_url? string
---@field relation_type? string

---@class ProjectPackage

---@class ProjectPackageRemoveMatch
---@field id string
---@field project_id string

---@class ProjectSnippet

---@class ProjectSnippetRemoveMatch
---@field id string
---@field project_id string

---@class ProjectsJobTokenScope

---@class ProjectsJobTokenScopeUpdateData
---@field project_id string

---@class ProjectsJobTokenScopeRemoveMatch
---@field project_id string
---@field target_group_id? string
---@field target_project_id? string

---@class ProtectedTag

---@class ProtectedTagRemoveMatch
---@field id string
---@field project_id string

---@class Pypi

---@class PypiCreateData
---@field project_id string

---@class PypiPackage

---@class PypiPackageLoadMatch
---@field group_id? string
---@field sha256? any
---@field project_id? string

---@class PypiPackageCreateData
---@field project_id string

---@class Release

---@class ReleaseLoadMatch
---@field project_id string

---@class ReleaseRemoveMatch
---@field id string
---@field project_id string

---@class ReleaseLink

---@class ReleaseLinkRemoveMatch
---@field id string
---@field project_id string
---@field release_id string

---@class RemoteMirror

---@class RemoteMirrorLoadMatch
---@field id string
---@field project_id string

---@class RemoteMirrorCreateData
---@field id string
---@field project_id string

---@class RemoteMirrorRemoveMatch
---@field id string
---@field project_id string

---@class Rpm

---@class RpmCreateData
---@field project_id string

---@class RpmPackage

---@class RpmPackageLoadMatch
---@field project_id string

---@class RpmPackageCreateData
---@field project_id string

---@class Rubygem

---@class RubygemLoadMatch
---@field id string
---@field project_id string

---@class RubygemPackage

---@class RubygemPackageLoadMatch
---@field file_name? any
---@field project_id string

---@class RubygemPackageCreateData
---@field project_id string

---@class Runner

---@class RunnerCreateData

---@class RunnerRemoveMatch
---@field id? string
---@field project_id? string

---@class Search

---@class SearchLoadMatch

---@class SecureFile

---@class SecureFileLoadMatch
---@field id string
---@field project_id string

---@class SecureFileRemoveMatch
---@field id string
---@field project_id string

---@class Slack

---@class SlackCreateData

---@class Snippet

---@class SnippetLoadMatch
---@field file_id string
---@field file_path any
---@field id string

---@class SnippetRemoveMatch
---@field id string

---@class Starrer
---@field avatar_path? string
---@field avatar_url? string
---@field custom_attribute? table
---@field id? number
---@field locked? boolean
---@field name? string
---@field public_email? string
---@field state? string
---@field username? string
---@field web_url? string

---@class StarrerListMatch
---@field project_id string

---@class SystemHook

---@class SystemHookRemoveMatch
---@field id string

---@class Tag

---@class TagRemoveMatch
---@field id string
---@field project_id string

---@class TerraformRegistry

---@class TerraformRegistryLoadMatch
---@field module_id? string
---@field module_system any
---@field project_id? string
---@field id? string
---@field module_name? any
---@field v1_id? string

---@class TerraformRegistryUpdateData
---@field module_id string
---@field module_system any
---@field project_id string

---@class TerraformState

---@class TerraformStateLoadMatch
---@field project_id string
---@field serial? any
---@field state_id? string
---@field id? string

---@class TerraformStateCreateData
---@field name? string
---@field project_id string
---@field id? string

---@class TerraformStateRemoveMatch
---@field name? string
---@field project_id string
---@field serial? any
---@field state_id? string
---@field id? string

---@class TestReport
---@field error_count? number
---@field failed_count? number
---@field name? string
---@field skipped_count? number
---@field success_count? number
---@field suite_error? string
---@field test_case? table
---@field total_count? number
---@field total_time? number

---@class TestReportListMatch
---@field pipeline_id string
---@field project_id string

---@class TestReportSummary
---@field test_suite? table
---@field total? table

---@class TestReportSummaryLoadMatch
---@field pipeline_id string
---@field project_id string

---@class Topic

---@class TopicRemoveMatch
---@field id string

---@class UnleashApi

---@class UnleashApiLoadMatch
---@field unleash_id string

---@class UsageData

---@class UsageDataLoadMatch

---@class UsageDataCreateData

---@class User
---@field avatar_path? string
---@field avatar_url? string
---@field custom_attribute? table
---@field id? number
---@field locked? boolean
---@field name? string
---@field public_email? string
---@field state? string
---@field username? string
---@field web_url? string

---@class UserListMatch
---@field project_id string

---@class WebCommit

---@class WebCommitLoadMatch

---@class Wiki

---@class WikiRemoveMatch
---@field group_id? string
---@field id string
---@field project_id? string

local M = {}

return M
