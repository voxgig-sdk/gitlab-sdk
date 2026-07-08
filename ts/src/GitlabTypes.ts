// Typed models for the Gitlab SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface AccessRequest {
}

export interface AccessRequestRemoveMatch {
  group_id?: string
  id: string
  project_id?: string
}

export interface AlertManagement {
}

export interface AlertManagementCreateData {
  alert_management_alert_id: string
  project_id: string
}

export interface AlertManagementRemoveMatch {
  alert_management_alert_id: string
  metric_image_id: string
  project_id: string
}

export interface ApiEntitiesAccessRequester {
  avatar_path?: string
  avatar_url?: string
  custom_attribute?: any[]
  id?: number
  key?: string
  locked?: boolean
  name?: string
  public_email?: string
  requested_at?: string
  state?: string
  username?: string
  value?: string
  web_url?: string
}

export interface ApiEntitiesAccessRequesterListMatch {
  group_id?: string
  project_id?: string
}

export interface ApiEntitiesAccessRequesterCreateData {
  group_id?: string
  project_id?: string
}

export interface ApiEntitiesAccessRequesterUpdateData {
  access_request_id: string
  group_id?: string
  project_id?: string
}

export interface ApiEntitiesAppearance {
  description?: string
  email_header_and_footer_enabled?: string
  favicon?: string
  footer_message?: string
  header_logo?: string
  header_message?: string
  logo?: string
  member_guideline?: string
  message_background_color?: string
  message_font_color?: string
  new_project_guideline?: string
  profile_image_guideline?: string
  pwa_description?: string
  pwa_icon?: string
  pwa_name?: string
  pwa_short_name?: string
  title?: string
}

export interface ApiEntitiesAppearanceLoadMatch {
  description?: string
  email_header_and_footer_enabled?: string
  favicon?: string
  footer_message?: string
  header_logo?: string
  header_message?: string
  logo?: string
  member_guideline?: string
  message_background_color?: string
  message_font_color?: string
  new_project_guideline?: string
  profile_image_guideline?: string
  pwa_description?: string
  pwa_icon?: string
  pwa_name?: string
  pwa_short_name?: string
  title?: string
}

export interface ApiEntitiesAppearanceUpdateData {
  description?: string
  email_header_and_footer_enabled?: string
  favicon?: string
  footer_message?: string
  header_logo?: string
  header_message?: string
  logo?: string
  member_guideline?: string
  message_background_color?: string
  message_font_color?: string
  new_project_guideline?: string
  profile_image_guideline?: string
  pwa_description?: string
  pwa_icon?: string
  pwa_name?: string
  pwa_short_name?: string
  title?: string
}

export interface ApiEntitiesApplication {
  application_id?: string
  application_name?: string
  callback_url?: string
  confidential?: boolean
  id?: string
}

export interface ApiEntitiesApplicationListMatch {
  application_id?: string
  application_name?: string
  callback_url?: string
  confidential?: boolean
  id?: string
}

export interface ApiEntitiesApplicationStatistic {
  active_user?: number
  fork?: number
  group?: number
  issue?: number
  merge_request?: number
  milestone?: number
  note?: number
  project?: number
  snippet?: number
  ssh_key?: number
  user?: number
}

export interface ApiEntitiesApplicationStatisticLoadMatch {
  active_user?: number
  fork?: number
  group?: number
  issue?: number
  merge_request?: number
  milestone?: number
  note?: number
  project?: number
  snippet?: number
  ssh_key?: number
  user?: number
}

export interface ApiEntitiesApplicationWithSecret {
  application_id?: string
  application_name?: string
  callback_url?: string
  confidential?: boolean
  id?: string
  secret?: string
}

export interface ApiEntitiesApplicationWithSecretCreateData {
  application_id?: string
}

export interface ApiEntitiesAvatar {
  avatar_url?: string
}

export interface ApiEntitiesAvatarLoadMatch {
  avatar_url?: string
}

export interface ApiEntitiesAwardEmoji {
  awardable_id?: number
  awardable_type?: string
  created_at?: string
  id?: number
  name?: string
  updated_at?: string
  url?: string
  user?: Record<string, any>
}

export interface ApiEntitiesAwardEmojiLoadMatch {
  epic_id?: string
  group_id?: string
  id: string
  note_id?: string
  issue_id?: string
  project_id?: string
  merge_request_id?: string
  snippet_id?: string
}

export interface ApiEntitiesAwardEmojiListMatch {
  epic_id?: string
  group_id?: string
  note_id?: string
  issue_id?: string
  project_id?: string
  merge_request_id?: string
  snippet_id?: string
}

export interface ApiEntitiesAwardEmojiCreateData {
  epic_id?: string
  group_id?: string
  note_id?: string
  issue_id?: string
  project_id?: string
  merge_request_id?: string
  snippet_id?: string
}

export interface ApiEntitiesBadge {
  id?: string
  image_url?: string
  kind?: string
  link_url?: string
  name?: string
  rendered_image_url?: string
  rendered_link_url?: string
}

export interface ApiEntitiesBadgeLoadMatch {
  group_id?: string
  id: string
  project_id?: string
}

export interface ApiEntitiesBadgeListMatch {
  group_id?: string
  project_id?: string
}

export interface ApiEntitiesBadgeCreateData {
  group_id?: string
  project_id?: string
}

export interface ApiEntitiesBadgeUpdateData {
  group_id?: string
  id: string
  project_id?: string
}

export interface ApiEntitiesBasicBadgeDetail {
  image_url?: string
  link_url?: string
  name?: string
  rendered_image_url?: string
  rendered_link_url?: string
}

export interface ApiEntitiesBasicBadgeDetailLoadMatch {
  group_id?: string
  project_id?: string
}

export interface ApiEntitiesBasicGroupDetail {
}

export interface ApiEntitiesBasicGroupDetailCreateData {
  project_id: string
}

export interface ApiEntitiesBasicProjectDetail {
  avatar_url?: string
  created_at?: string
  custom_attribute?: Record<string, any>
  default_branch?: string
  description?: string
  forks_count?: number
  http_url_to_repo?: string
  id?: number
  last_activity_at?: string
  license?: Record<string, any>
  license_url?: string
  name?: string
  name_with_namespace?: string
  namespace?: Record<string, any>
  path?: string
  path_with_namespace?: string
  readme_url?: string
  repository_storage?: string
  ssh_url_to_repo?: string
  star_count?: number
  tag_list?: any[]
  topic?: any[]
  visibility?: string
  web_url?: string
}

export interface ApiEntitiesBasicProjectDetailListMatch {
  user_id?: string
  project_id?: string
}

export interface ApiEntitiesBasicProjectDetailCreateData {
  project_id: string
}

export interface ApiEntitiesBasicRef {
  name?: string
  type?: string
}

export interface ApiEntitiesBasicRefListMatch {
  project_id: string
  sha: any
}

export interface ApiEntitiesBasicSuccess {
}

export interface ApiEntitiesBasicSuccessCreateData {
}

export interface ApiEntitiesBatchedBackgroundMigration {
  column_name?: string
  created_at?: string
  id?: string
  job_class_name?: string
  progress?: number
  status?: string
  table_name?: string
}

export interface ApiEntitiesBatchedBackgroundMigrationLoadMatch {
  id: string
}

export interface ApiEntitiesBatchedBackgroundMigrationListMatch {
  column_name?: string
  created_at?: string
  id?: string
  job_class_name?: string
  progress?: number
  status?: string
  table_name?: string
}

export interface ApiEntitiesBatchedBackgroundMigrationUpdateData {
  batched_background_migration_id: string
}

export interface ApiEntitiesBranch {
  can_push?: boolean
  commit?: Record<string, any>
  default?: boolean
  developers_can_merge?: boolean
  developers_can_push?: boolean
  merged?: boolean
  name?: string
  protected?: boolean
  web_url?: string
}

export interface ApiEntitiesBranchLoadMatch {
  id: string
  project_id: string
}

export interface ApiEntitiesBranchListMatch {
  project_id: string
}

export interface ApiEntitiesBranchCreateData {
  project_id: string
}

export interface ApiEntitiesBranchUpdateData {
  branch_id: string
  project_id: string
}

export interface ApiEntitiesBulkImport {
  bulk_import_id?: number
  created_at?: string
  destination_full_path?: string
  destination_name?: string
  destination_namespace?: string
  destination_slug?: string
  entity_type?: string
  failure?: any[]
  has_failure?: boolean
  id?: number
  migrate_membership?: boolean
  migrate_project?: boolean
  namespace_id?: number
  parent_id?: number
  project_id?: number
  source_full_path?: string
  source_type?: string
  source_url?: string
  stat?: Record<string, any>
  status?: string
  updated_at?: string
}

export interface ApiEntitiesBulkImportLoadMatch {
  bulk_import_id?: string
  entity_id?: string
  id?: string
}

export interface ApiEntitiesBulkImportListMatch {
  bulk_import_id?: string
}

export interface ApiEntitiesBulkImportCreateData {
  bulk_import_id?: string
}

export interface ApiEntitiesBulkImportsEntityFailure {
  correlation_id_value?: string
  exception_class?: string
  exception_message?: string
  relation?: string
  source_title?: string
  source_url?: string
}

export interface ApiEntitiesBulkImportsEntityFailureLoadMatch {
  bulk_import_id: string
  entity_id: string
}

export interface ApiEntitiesBulkImportsExportStatus {
  batch?: Record<string, any>
  batched?: boolean
  batches_count?: number
  error?: string
  relation?: string
  status?: string
  total_objects_count?: number
  updated_at?: string
}

export interface ApiEntitiesBulkImportsExportStatusListMatch {
  group_id?: string
  project_id?: string
}

export interface ApiEntitiesChangelog {
  note?: string
}

export interface ApiEntitiesChangelogLoadMatch {
  project_id: string
}

export interface ApiEntitiesCiBridge {
  allow_failure?: boolean
  commit?: Record<string, any>
  coverage?: number
  created_at?: string
  downstream_pipeline?: Record<string, any>
  duration?: number
  erased_at?: string
  failure_reason?: string
  finished_at?: string
  id?: number
  name?: string
  pipeline?: Record<string, any>
  project?: Record<string, any>
  queued_duration?: number
  ref?: string
  stage?: string
  started_at?: string
  status?: string
  tag?: boolean
  user?: Record<string, any>
  web_url?: string
}

export interface ApiEntitiesCiBridgeListMatch {
  pipeline_id: string
  project_id: string
}

export interface ApiEntitiesCiCatalogResourcesVersion {
}

export interface ApiEntitiesCiCatalogResourcesVersionCreateData {
  project_id: string
}

export interface ApiEntitiesCiJob {
  allow_failure?: boolean
  archived?: boolean
  artifact?: any[]
  artifacts_expire_at?: string
  artifacts_file?: Record<string, any>
  commit?: Record<string, any>
  coverage?: number
  created_at?: string
  duration?: number
  erased_at?: string
  failure_reason?: string
  file_format?: string
  file_type?: string
  filename?: string
  finished_at?: string
  id?: number
  name?: string
  pipeline?: Record<string, any>
  project?: Record<string, any>
  queued_duration?: number
  ref?: string
  runner?: Record<string, any>
  runner_manager?: Record<string, any>
  size?: number
  stage?: string
  started_at?: string
  status?: string
  tag?: boolean
  tag_list?: any[]
  user?: Record<string, any>
  web_url?: string
}

export interface ApiEntitiesCiJobLoadMatch {
  id: string
  project_id: string
}

export interface ApiEntitiesCiJobListMatch {
  pipeline_id?: string
  project_id?: string
  job_id?: string
}

export interface ApiEntitiesCiJobCreateData {
  job_id: string
  project_id: string
}

export interface ApiEntitiesCiJobBasic {
  allow_failure?: boolean
  commit?: Record<string, any>
  coverage?: number
  created_at?: string
  duration?: number
  erased_at?: string
  failure_reason?: string
  finished_at?: string
  id?: number
  name?: string
  pipeline?: Record<string, any>
  project?: Record<string, any>
  queued_duration?: number
  ref?: string
  stage?: string
  started_at?: string
  status?: string
  tag?: boolean
  user?: Record<string, any>
  web_url?: string
}

export interface ApiEntitiesCiJobBasicListMatch {
  key: string
  project_id: string
}

export interface ApiEntitiesCiJobBasicCreateData {
  job_id: string
  project_id: string
}

export interface ApiEntitiesCiJobBasicWithProject {
  allow_failure?: boolean
  commit?: Record<string, any>
  coverage?: number
  created_at?: string
  duration?: number
  erased_at?: string
  failure_reason?: string
  finished_at?: string
  id?: number
  name?: string
  pipeline?: Record<string, any>
  project?: Record<string, any>
  queued_duration?: number
  ref?: string
  stage?: string
  started_at?: string
  status?: string
  tag?: boolean
  user?: Record<string, any>
  web_url?: string
}

export interface ApiEntitiesCiJobBasicWithProjectLoadMatch {
  runner_id: string
}

export interface ApiEntitiesCiLintResult {
  blob?: string
  context_project?: string
  context_sha?: string
  error?: any[]
  extra?: Record<string, any>
  include?: any[]
  job?: any[]
  location?: string
  merged_yaml?: string
  raw?: string
  type?: string
  valid?: boolean
  warning?: any[]
}

export interface ApiEntitiesCiLintResultListMatch {
  project_id: string
}

export interface ApiEntitiesCiLintResultCreateData {
  project_id: string
}

export interface ApiEntitiesCiPipeline {
}

export interface ApiEntitiesCiPipelineCreateData {
  merge_request_id?: string
  project_id: string
  ref_id?: string
  pipeline_id?: string
}

export interface ApiEntitiesCiPipelineBasic {
  created_at?: string
  id?: number
  iid?: number
  project_id?: number
  ref?: string
  sha?: string
  source?: string
  status?: string
  updated_at?: string
  web_url?: string
}

export interface ApiEntitiesCiPipelineBasicLoadMatch {
  merge_request_id: string
  project_id: string
}

export interface ApiEntitiesCiPipelineBasicListMatch {
  project_id: string
  pipeline_schedule_id?: string
}

export interface ApiEntitiesCiPipelineSchedule {
  active?: boolean
  created_at?: string
  cron?: string
  cron_timezone?: string
  description?: string
  id?: number
  input?: Record<string, any>
  next_run_at?: string
  owner?: Record<string, any>
  ref?: string
  updated_at?: string
}

export interface ApiEntitiesCiPipelineScheduleListMatch {
  project_id: string
}

export interface ApiEntitiesCiPipelineScheduleDetail {
  active?: boolean
  created_at?: string
  cron?: string
  cron_timezone?: string
  description?: string
  id?: number
  input?: Record<string, any>
  last_pipeline?: Record<string, any>
  next_run_at?: string
  owner?: Record<string, any>
  ref?: string
  updated_at?: string
  variable?: Record<string, any>
}

export interface ApiEntitiesCiPipelineScheduleDetailLoadMatch {
  pipeline_schedule_id: string
  project_id: string
}

export interface ApiEntitiesCiPipelineScheduleDetailCreateData {
  pipeline_schedule_id?: string
  project_id: string
}

export interface ApiEntitiesCiPipelineScheduleDetailUpdateData {
  pipeline_schedule_id: string
  project_id: string
}

export interface ApiEntitiesCiResetTokenResult {
}

export interface ApiEntitiesCiResetTokenResultCreateData {
  group_id?: string
  project_id?: string
  runner_id?: string
}

export interface ApiEntitiesCiResourceGroup {
  created_at?: string
  id?: number
  key?: string
  process_mode?: string
  updated_at?: string
}

export interface ApiEntitiesCiResourceGroupLoadMatch {
  id: string
  project_id: string
}

export interface ApiEntitiesCiResourceGroupListMatch {
  project_id: string
}

export interface ApiEntitiesCiResourceGroupUpdateData {
  id: string
  project_id: string
}

export interface ApiEntitiesCiRunner {
  active?: boolean
  created_at?: string
  created_by?: Record<string, any>
  description?: string
  id?: number
  ip_address?: string
  is_shared?: boolean
  job_execution_status?: string
  name?: string
  online?: boolean
  paused?: boolean
  runner_type?: string
  status?: string
}

export interface ApiEntitiesCiRunnerLoadMatch {
  project_id?: string
  group_id?: string
}

export interface ApiEntitiesCiRunnerCreateData {
  project_id: string
}

export interface ApiEntitiesCiRunnerDetail {
  access_level?: string
  active?: boolean
  architecture?: string
  contacted_at?: string
  created_at?: string
  created_by?: Record<string, any>
  description?: string
  group?: Record<string, any>
  id?: number
  ip_address?: string
  is_shared?: boolean
  job_execution_status?: string
  locked?: boolean
  maintenance_note?: string
  maximum_timeout?: string
  name?: string
  online?: boolean
  paused?: boolean
  platform?: string
  project?: Record<string, any>
  revision?: string
  run_untagged?: string
  runner_type?: string
  status?: string
  tag_list?: string
  version?: string
}

export interface ApiEntitiesCiRunnerDetailLoadMatch {
  id: string
}

export interface ApiEntitiesCiRunnerDetailUpdateData {
  id: string
}

export interface ApiEntitiesCiRunnerManager {
  architecture?: string
  contacted_at?: string
  created_at?: string
  id?: number
  ip_address?: string
  job_execution_status?: string
  platform?: string
  revision?: string
  status?: string
  system_id?: string
  version?: string
}

export interface ApiEntitiesCiRunnerManagerLoadMatch {
  runner_id: string
}

export interface ApiEntitiesCiRunnerRegistrationDetail {
}

export interface ApiEntitiesCiRunnerRegistrationDetailCreateData {
}

export interface ApiEntitiesCiSecureFile {
  checksum?: string
  checksum_algorithm?: string
  created_at?: string
  expires_at?: string
  file_extension?: string
  id?: number
  metadata?: Record<string, any>
  name?: string
}

export interface ApiEntitiesCiSecureFileLoadMatch {
  project_id: string
  id?: string
}

export interface ApiEntitiesCiSecureFileCreateData {
  project_id: string
}

export interface ApiEntitiesCiVariable {
  description?: string
  environment_scope?: string
  hidden?: boolean
  key?: string
  masked?: boolean
  protected?: boolean
  raw?: boolean
  value?: string
  variable_type?: string
}

export interface ApiEntitiesCiVariableLoadMatch {
  id?: string
  project_id?: string
  group_id?: string
}

export interface ApiEntitiesCiVariableListMatch {
  pipeline_id: string
  project_id: string
}

export interface ApiEntitiesCiVariableCreateData {
  pipeline_schedule_id?: string
  project_id?: string
  group_id?: string
}

export interface ApiEntitiesCiVariableUpdateData {
  id: string
  pipeline_schedule_id?: string
  project_id?: string
  group_id?: string
}

export interface ApiEntitiesCluster {
  cluster_type?: string
  created_at?: string
  domain?: string
  enabled?: boolean
  environment_scope?: string
  id?: string
  managed?: string
  management_project?: Record<string, any>
  name?: string
  namespace_per_environment?: string
  platform_kubernete?: Record<string, any>
  platform_type?: string
  provider_gcp?: Record<string, any>
  provider_type?: string
  user?: Record<string, any>
}

export interface ApiEntitiesClusterLoadMatch {
  id: string
}

export interface ApiEntitiesClusterListMatch {
  group_id?: string
  project_id?: string
}

export interface ApiEntitiesClusterCreateData {
  cluster_type?: string
  created_at?: string
  domain?: string
  enabled?: boolean
  environment_scope?: string
  id?: string
  managed?: string
  management_project?: Record<string, any>
  name?: string
  namespace_per_environment?: string
  platform_kubernete?: Record<string, any>
  platform_type?: string
  provider_gcp?: Record<string, any>
  provider_type?: string
  user?: Record<string, any>
}

export interface ApiEntitiesClusterUpdateData {
  id: string
}

export interface ApiEntitiesClusterGroup {
  cluster_type?: string
  created_at?: string
  domain?: string
  enabled?: boolean
  environment_scope?: string
  group?: Record<string, any>
  id?: string
  managed?: string
  management_project?: Record<string, any>
  name?: string
  namespace_per_environment?: string
  platform_kubernete?: Record<string, any>
  platform_type?: string
  provider_gcp?: Record<string, any>
  provider_type?: string
  user?: Record<string, any>
}

export interface ApiEntitiesClusterGroupLoadMatch {
  cluster_id: string
  group_id: string
}

export interface ApiEntitiesClusterGroupCreateData {
  group_id: string
}

export interface ApiEntitiesClusterGroupUpdateData {
  cluster_id: string
  group_id: string
}

export interface ApiEntitiesClusterProject {
  cluster_type?: string
  created_at?: string
  domain?: string
  enabled?: boolean
  environment_scope?: string
  id?: string
  managed?: string
  management_project?: Record<string, any>
  name?: string
  namespace_per_environment?: string
  platform_kubernete?: Record<string, any>
  platform_type?: string
  project?: Record<string, any>
  provider_gcp?: Record<string, any>
  provider_type?: string
  user?: Record<string, any>
}

export interface ApiEntitiesClusterProjectLoadMatch {
  cluster_id: string
  project_id: string
}

export interface ApiEntitiesClusterProjectCreateData {
  project_id: string
}

export interface ApiEntitiesClusterProjectUpdateData {
  cluster_id: string
  project_id: string
}

export interface ApiEntitiesClustersAgent {
  config_project?: Record<string, any>
  created_at?: string
  created_by_user_id?: string
  id?: string
  is_receptive?: boolean
  name?: string
}

export interface ApiEntitiesClustersAgentLoadMatch {
  project_id: string
  agent_id?: string
}

export interface ApiEntitiesClustersAgentCreateData {
  project_id: string
}

export interface ApiEntitiesClustersAgentToken {
  agent_id?: string
  created_at?: string
  created_by_user_id?: string
  description?: string
  id?: string
  last_used_at?: string
  name?: string
  status?: string
}

export interface ApiEntitiesClustersAgentTokenLoadMatch {
  cluster_agent_id: string
  id: string
  project_id: string
}

export interface ApiEntitiesClustersAgentTokenBasic {
  agent_id?: string
  created_at?: string
  created_by_user_id?: string
  description?: string
  id?: string
  name?: string
  status?: string
}

export interface ApiEntitiesClustersAgentTokenBasicLoadMatch {
  cluster_agent_id: string
  project_id: string
}

export interface ApiEntitiesClustersAgentTokenWithToken {
}

export interface ApiEntitiesClustersAgentTokenWithTokenCreateData {
  cluster_agent_id: string
  project_id: string
}

export interface ApiEntitiesCommit {
  author_email?: string
  author_name?: string
  authored_date?: string
  committed_date?: string
  committer_email?: string
  committer_name?: string
  created_at?: string
  extended_trailer?: Record<string, any>
  id?: string
  message?: string
  parent_id?: any[]
  short_id?: string
  title?: string
  trailer?: Record<string, any>
  web_url?: string
}

export interface ApiEntitiesCommitListMatch {
  project_id: string
  merge_request_id?: string
}

export interface ApiEntitiesCommitCreateData {
  merge_request_id?: string
  project_id: string
  sha?: any
}

export interface ApiEntitiesCommitDetail {
  author_email?: string
  author_name?: string
  authored_date?: string
  committed_date?: string
  committer_email?: string
  committer_name?: string
  created_at?: string
  extended_trailer?: Record<string, any>
  id?: string
  last_pipeline?: Record<string, any>
  message?: string
  parent_id?: any[]
  project_id?: number
  short_id?: string
  stat?: Record<string, any>
  status?: string
  title?: string
  trailer?: Record<string, any>
  web_url?: string
}

export interface ApiEntitiesCommitDetailLoadMatch {
  project_id: string
  sha: any
}

export interface ApiEntitiesCommitDetailCreateData {
  project_id: string
}

export interface ApiEntitiesCommitDetailUpdateData {
  project_id: string
  submodule: any
}

export interface ApiEntitiesCommitNote {
  author?: Record<string, any>
  created_at?: string
  line?: number
  line_type?: string
  note?: string
  path?: string
}

export interface ApiEntitiesCommitNoteListMatch {
  project_id: string
  sha: any
}

export interface ApiEntitiesCommitNoteCreateData {
  project_id: string
  sha: any
}

export interface ApiEntitiesCommitSequence {
  count?: number
}

export interface ApiEntitiesCommitSequenceLoadMatch {
  project_id: string
  sha: any
}

export interface ApiEntitiesCommitSignature {
  commit_source?: string
  signature?: string
  signature_type?: string
}

export interface ApiEntitiesCommitSignatureLoadMatch {
  project_id: string
  sha: any
}

export interface ApiEntitiesCommitStatus {
  allow_failure?: boolean
  author?: Record<string, any>
  coverage?: number
  created_at?: string
  description?: string
  finished_at?: string
  id?: number
  name?: string
  pipeline_id?: number
  ref?: string
  sha?: string
  started_at?: string
  status?: string
  target_url?: string
}

export interface ApiEntitiesCommitStatusListMatch {
  project_id: string
  sha: any
}

export interface ApiEntitiesCommitStatusCreateData {
  id: string
  project_id: string
}

export interface ApiEntitiesCompare {
  commit?: Record<string, any>
  compare_same_ref?: boolean
  compare_timeout?: boolean
  diff?: any[]
  web_url?: string
}

export interface ApiEntitiesCompareListMatch {
  project_id: string
}

export interface ApiEntitiesContainerRegistryRepository {
  cleanup_policy_started_at?: string
  created_at?: string
  delete_api_path?: string
  id?: number
  location?: string
  name?: string
  path?: string
  project_id?: number
  size?: number
  status?: string
  tag?: Record<string, any>
  tags_count?: number
}

export interface ApiEntitiesContainerRegistryRepositoryLoadMatch {
  id: string
}

export interface ApiEntitiesContainerRegistryRepositoryListMatch {
  project_id?: string
  group_id?: string
}

export interface ApiEntitiesContainerRegistryTag {
  location?: string
  name?: string
  path?: string
}

export interface ApiEntitiesContainerRegistryTagListMatch {
  project_id: string
  repository_id: string
}

export interface ApiEntitiesContainerRegistryTagDetail {
  created_at?: string
  digest?: string
  location?: string
  name?: string
  path?: string
  revision?: string
  short_revision?: string
  total_size?: number
}

export interface ApiEntitiesContainerRegistryTagDetailLoadMatch {
  project_id: string
  repository_id: string
  tag_name: any
}

export interface ApiEntitiesContributor {
  addition?: number
  commit?: number
  deletion?: number
  email?: string
  name?: string
}

export interface ApiEntitiesContributorLoadMatch {
  project_id: string
}

export interface ApiEntitiesDeployKey {
  created_at?: string
  expires_at?: string
  fingerprint?: string
  fingerprint_sha256?: string
  id?: number
  key?: string
  last_used_at?: string
  projects_with_readonly_access?: Record<string, any>
  projects_with_write_access?: Record<string, any>
  title?: string
  usage_type?: string
}

export interface ApiEntitiesDeployKeyListMatch {
  created_at?: string
  expires_at?: string
  fingerprint?: string
  fingerprint_sha256?: string
  id?: number
  key?: string
  last_used_at?: string
  projects_with_readonly_access?: Record<string, any>
  projects_with_write_access?: Record<string, any>
  title?: string
  usage_type?: string
}

export interface ApiEntitiesDeployKeyCreateData {
  deploy_key_id?: string
  project_id?: string
}

export interface ApiEntitiesDeployKeyUpdateData {
  id: string
  project_id: string
}

export interface ApiEntitiesDeployKeysProject {
  can_push?: boolean
  created_at?: string
  expires_at?: string
  fingerprint?: string
  fingerprint_sha256?: string
  id?: number
  key?: string
  last_used_at?: string
  projects_with_readonly_access?: Record<string, any>
  projects_with_write_access?: Record<string, any>
  title?: string
  usage_type?: string
}

export interface ApiEntitiesDeployKeysProjectLoadMatch {
  key_id: string
  project_id: string
}

export interface ApiEntitiesDeployKeysProjectListMatch {
  project_id: string
}

export interface ApiEntitiesDeployKeysProjectCreateData {
  project_id: string
}

export interface ApiEntitiesDeployToken {
  expired?: boolean
  expires_at?: string
  id?: number
  name?: string
  revoked?: boolean
  scope?: any[]
  username?: string
}

export interface ApiEntitiesDeployTokenLoadMatch {
  group_id?: string
  id: string
  project_id?: string
}

export interface ApiEntitiesDeployTokenListMatch {
  group_id?: string
  project_id?: string
}

export interface ApiEntitiesDeployTokenWithToken {
}

export interface ApiEntitiesDeployTokenWithTokenCreateData {
  group_id?: string
  project_id?: string
}

export interface ApiEntitiesDeployment {
  created_at?: string
  deployable?: Record<string, any>
  environment?: Record<string, any>
  id?: number
  iid?: number
  ref?: string
  sha?: string
  status?: string
  updated_at?: string
  user?: Record<string, any>
}

export interface ApiEntitiesDeploymentListMatch {
  project_id: string
}

export interface ApiEntitiesDeploymentExtended {
  approval?: Record<string, any>
  approval_summary?: Record<string, any>
  created_at?: string
  deployable?: Record<string, any>
  environment?: Record<string, any>
  id?: number
  iid?: number
  pending_approval_count?: number
  ref?: string
  sha?: string
  status?: string
  updated_at?: string
  user?: Record<string, any>
}

export interface ApiEntitiesDeploymentExtendedLoadMatch {
  deployment_id: string
  project_id: string
}

export interface ApiEntitiesDeploymentExtendedCreateData {
  project_id: string
}

export interface ApiEntitiesDeploymentExtendedUpdateData {
  deployment_id: string
  project_id: string
}

export interface ApiEntitiesDeploymentsApproval {
}

export interface ApiEntitiesDeploymentsApprovalCreateData {
  deployment_id: string
  project_id: string
}

export interface ApiEntitiesDictionaryTable {
  feature_category?: any[]
  table_name?: string
}

export interface ApiEntitiesDictionaryTableLoadMatch {
  databas_id: string
  id: string
}

export interface ApiEntitiesDiff {
  a_mode?: string
  b_mode?: string
  collapsed?: boolean
  deleted_file?: boolean
  diff?: string
  generated_file?: boolean
  new_file?: boolean
  new_path?: string
  old_path?: string
  renamed_file?: boolean
  too_large?: boolean
}

export interface ApiEntitiesDiffLoadMatch {
  merge_request_id: string
  project_id: string
}

export interface ApiEntitiesDiffListMatch {
  project_id: string
  sha: any
}

export interface ApiEntitiesDiscoveredCluster {
  group?: string
  project?: string
}

export interface ApiEntitiesDiscoveredClusterLoadMatch {
  group?: string
  project?: string
}

export interface ApiEntitiesDraftNote {
  author_id?: number
  commit_id?: number
  discussion_id?: number
  id?: number
  line_code?: string
  merge_request_id?: number
  note?: string
  position?: Record<string, any>
  resolve_discussion?: boolean
}

export interface ApiEntitiesDraftNoteLoadMatch {
  id: string
  merge_request_id: string
  project_id: string
}

export interface ApiEntitiesDraftNoteListMatch {
  merge_request_id: string
  project_id: string
}

export interface ApiEntitiesDraftNoteCreateData {
  merge_request_id: string
  project_id: string
}

export interface ApiEntitiesDraftNoteUpdateData {
  id: string
  merge_request_id: string
  project_id: string
}

export interface ApiEntitiesEnvironment {
  auto_stop_at?: string
  auto_stop_setting?: string
  cluster_agent?: Record<string, any>
  created_at?: string
  description?: string
  external_url?: string
  flux_resource_path?: string
  id?: number
  kubernetes_namespace?: string
  last_deployment?: Record<string, any>
  name?: string
  project?: Record<string, any>
  slug?: string
  state?: string
  tier?: string
  updated_at?: string
}

export interface ApiEntitiesEnvironmentLoadMatch {
  id: string
  project_id: string
}

export interface ApiEntitiesEnvironmentListMatch {
  project_id: string
}

export interface ApiEntitiesEnvironmentCreateData {
  environment_id?: string
  project_id: string
}

export interface ApiEntitiesEnvironmentUpdateData {
  id: string
  project_id: string
}

export interface ApiEntitiesErrorTrackingClientKey {
  active?: boolean
  id?: number
  public_key?: string
  sentry_dsn?: string
}

export interface ApiEntitiesErrorTrackingClientKeyListMatch {
  project_id: string
}

export interface ApiEntitiesErrorTrackingClientKeyCreateData {
  project_id: string
}

export interface ApiEntitiesErrorTrackingProjectSetting {
  active?: boolean
  api_url?: string
  integrated?: boolean
  project_name?: string
  sentry_external_url?: string
}

export interface ApiEntitiesErrorTrackingProjectSettingLoadMatch {
  project_id: string
}

export interface ApiEntitiesErrorTrackingProjectSettingUpdateData {
  project_id: string
}

export interface ApiEntitiesEvent {
  action_name?: string
  author?: Record<string, any>
  author_id?: number
  author_username?: string
  created_at?: string
  id?: number
  imported?: boolean
  imported_from?: string
  note?: Record<string, any>
  project_id?: number
  push_data?: Record<string, any>
  target_id?: number
  target_iid?: number
  target_title?: string
  target_type?: string
  wiki_page?: Record<string, any>
}

export interface ApiEntitiesEventLoadMatch {
  project_id: string
}

export interface ApiEntitiesEventListMatch {
  user_id?: string
}

export interface ApiEntitiesFeature {
  definition?: Record<string, any>
  gate?: Record<string, any>
  name?: string
  state?: string
}

export interface ApiEntitiesFeatureListMatch {
  definition?: Record<string, any>
  gate?: Record<string, any>
  name?: string
  state?: string
}

export interface ApiEntitiesFeatureCreateData {
  id: string
}

export interface ApiEntitiesFeatureDefinition {
  default_enabled?: string
  feature_issue_url?: string
  group?: string
  intended_to_rollout_by?: string
  introduced_by_url?: string
  log_state_change?: string
  milestone?: string
  name?: string
  rollout_issue_url?: string
  type?: string
}

export interface ApiEntitiesFeatureDefinitionListMatch {
  default_enabled?: string
  feature_issue_url?: string
  group?: string
  intended_to_rollout_by?: string
  introduced_by_url?: string
  log_state_change?: string
  milestone?: string
  name?: string
  rollout_issue_url?: string
  type?: string
}

export interface ApiEntitiesFeatureFlag {
  active?: boolean
  created_at?: string
  description?: string
  name?: string
  scope?: string
  strategy?: Record<string, any>
  updated_at?: string
  version?: string
}

export interface ApiEntitiesFeatureFlagLoadMatch {
  id: string
  project_id: string
}

export interface ApiEntitiesFeatureFlagListMatch {
  project_id: string
}

export interface ApiEntitiesFeatureFlagCreateData {
  project_id: string
}

export interface ApiEntitiesFeatureFlagUpdateData {
  id: string
  project_id: string
}

export interface ApiEntitiesFeatureFlagUserList {
  created_at?: string
  edit_path?: string
  id?: number
  iid?: number
  name?: string
  path?: string
  project_id?: number
  updated_at?: string
  user_xid?: string
}

export interface ApiEntitiesFeatureFlagUserListLoadMatch {
  iid: any
  project_id: string
}

export interface ApiEntitiesFeatureFlagUserListListMatch {
  project_id: string
}

export interface ApiEntitiesFeatureFlagUserListCreateData {
  project_id: string
}

export interface ApiEntitiesFeatureFlagUserListUpdateData {
  iid: any
  project_id: string
}

export interface ApiEntitiesFreezePeriod {
  created_at?: string
  cron_timezone?: string
  freeze_end?: string
  freeze_start?: string
  id?: number
  updated_at?: string
}

export interface ApiEntitiesFreezePeriodLoadMatch {
  id: string
  project_id: string
}

export interface ApiEntitiesFreezePeriodListMatch {
  project_id: string
}

export interface ApiEntitiesFreezePeriodCreateData {
  project_id: string
}

export interface ApiEntitiesFreezePeriodUpdateData {
  id: string
  project_id: string
}

export interface ApiEntitiesGitlabSubscription {
  billing?: Record<string, any>
  plan?: Record<string, any>
  usage?: Record<string, any>
}

export interface ApiEntitiesGitlabSubscriptionLoadMatch {
  namespace_id: string
}

export interface ApiEntitiesGoModuleVersion {
  time?: string
  version?: string
}

export interface ApiEntitiesGoModuleVersionLoadMatch {
  module_version: any
  project_id: string
}

export interface ApiEntitiesGroup {
  archived?: boolean
  auto_devops_enabled?: string
  auto_duo_code_review_enabled?: string
  avatar_url?: string
  created_at?: string
  custom_attribute?: Record<string, any>
  default_branch?: string
  default_branch_protection?: string
  default_branch_protection_default?: string
  description?: string
  duo_core_features_enabled?: boolean
  duo_features_enabled?: string
  emails_disabled?: boolean
  emails_enabled?: boolean
  file_template_project_id?: string
  full_name?: string
  full_path?: string
  id?: string
  ldap_access?: string
  ldap_cn?: string
  ldap_group_link?: Record<string, any>
  lfs_enabled?: string
  lock_duo_features_enabled?: string
  lock_math_rendering_limits_enabled?: boolean
  marked_for_deletion_on?: string
  math_rendering_limits_enabled?: boolean
  max_artifacts_size?: number
  mentions_disabled?: string
  name?: string
  organization_id?: string
  parent_id?: string
  path?: string
  project_creation_level?: string
  repository_storage?: string
  request_access_enabled?: string
  require_two_factor_authentication?: string
  root_storage_statistic?: Record<string, any>
  saml_group_link?: Record<string, any>
  share_with_group_lock?: string
  shared_runners_setting?: string
  show_diff_preview_in_email?: boolean
  statistic?: Record<string, any>
  subgroup_creation_level?: string
  two_factor_grace_period?: string
  visibility?: string
  web_based_commit_signing_enabled?: string
  web_url?: string
  wiki_access_level?: string
}

export interface ApiEntitiesGroupLoadMatch {
  project_id: string
}

export interface ApiEntitiesGroupListMatch {
  group_id?: string
  project_id?: string
}

export interface ApiEntitiesGroupCreateData {
  group_id?: string
}

export interface ApiEntitiesGroupUpdateData {
  id: string
}

export interface ApiEntitiesGroupDetail {
  allowed_email_domains_list?: string
  archived?: boolean
  auto_ban_user_on_excessive_projects_download?: string
  auto_devops_enabled?: string
  auto_duo_code_review_enabled?: string
  avatar_url?: string
  created_at?: string
  custom_attribute?: Record<string, any>
  default_branch?: string
  default_branch_protection?: string
  default_branch_protection_default?: string
  description?: string
  duo_core_features_enabled?: boolean
  duo_features_enabled?: string
  emails_disabled?: boolean
  emails_enabled?: boolean
  enabled_git_access_protocol?: string
  extra_shared_runners_minutes_limit?: string
  file_template_project_id?: string
  full_name?: string
  full_path?: string
  id?: string
  ip_restriction_range?: string
  ldap_access?: string
  ldap_cn?: string
  ldap_group_link?: Record<string, any>
  lfs_enabled?: string
  lock_duo_features_enabled?: string
  lock_math_rendering_limits_enabled?: boolean
  marked_for_deletion_on?: string
  math_rendering_limits_enabled?: boolean
  max_artifacts_size?: number
  membership_lock?: string
  mentions_disabled?: string
  name?: string
  organization_id?: string
  parent_id?: string
  path?: string
  prevent_forking_outside_group?: string
  prevent_sharing_groups_outside_hierarchy?: string
  project?: Record<string, any>
  project_creation_level?: string
  repository_storage?: string
  request_access_enabled?: string
  require_two_factor_authentication?: string
  root_storage_statistic?: Record<string, any>
  runners_token?: string
  saml_group_link?: Record<string, any>
  service_access_tokens_expiration_enforced?: string
  share_with_group_lock?: string
  shared_project?: Record<string, any>
  shared_runners_minutes_limit?: string
  shared_runners_setting?: string
  shared_with_group?: string
  show_diff_preview_in_email?: boolean
  statistic?: Record<string, any>
  subgroup_creation_level?: string
  two_factor_grace_period?: string
  unique_project_download_limit?: string
  unique_project_download_limit_alertlist?: string
  unique_project_download_limit_allowlist?: string
  unique_project_download_limit_interval_in_second?: string
  visibility?: string
  web_based_commit_signing_enabled?: string
  web_url?: string
  wiki_access_level?: string
}

export interface ApiEntitiesGroupDetailLoadMatch {
  id: string
}

export interface ApiEntitiesGroupDetailCreateData {
  group_id: string
  project_id?: string
}

export interface ApiEntitiesHook {
  alert_status?: any
  branch_filter_strategy?: string
  created_at?: string
  custom_header?: any[]
  custom_webhook_template?: string
  description?: string
  disabled_until?: string
  enable_ssl_verification?: boolean
  id?: string
  merge_requests_event?: boolean
  name?: string
  push_event?: boolean
  push_events_branch_filter?: string
  repository_update_event?: boolean
  tag_push_event?: boolean
  url?: string
  url_variable?: any[]
}

export interface ApiEntitiesHookLoadMatch {
  id: string
}

export interface ApiEntitiesHookListMatch {
  alert_status?: any
  branch_filter_strategy?: string
  created_at?: string
  custom_header?: any[]
  custom_webhook_template?: string
  description?: string
  disabled_until?: string
  enable_ssl_verification?: boolean
  id?: string
  merge_requests_event?: boolean
  name?: string
  push_event?: boolean
  push_events_branch_filter?: string
  repository_update_event?: boolean
  tag_push_event?: boolean
  url?: string
  url_variable?: any[]
}

export interface ApiEntitiesHookCreateData {
  alert_status?: any
  branch_filter_strategy?: string
  created_at?: string
  custom_header?: any[]
  custom_webhook_template?: string
  description?: string
  disabled_until?: string
  enable_ssl_verification?: boolean
  id?: string
  merge_requests_event?: boolean
  name?: string
  push_event?: boolean
  push_events_branch_filter?: string
  repository_update_event?: boolean
  tag_push_event?: boolean
  url?: string
  url_variable?: any[]
}

export interface ApiEntitiesHookUpdateData {
  id: string
}

export interface ApiEntitiesIntegration {
  active?: boolean
  alert_event?: boolean
  comment_on_event_enabled?: boolean
  commit_event?: boolean
  confidential_issues_event?: boolean
  confidential_note_event?: boolean
  created_at?: string
  deployment_event?: boolean
  id?: number
  incident_event?: boolean
  inherited?: boolean
  issues_event?: boolean
  job_event?: boolean
  merge_requests_event?: boolean
  note_event?: boolean
  pipeline_event?: boolean
  property?: Record<string, any>
  push_event?: boolean
  slug?: number
  tag_push_event?: boolean
  title?: string
  updated_at?: string
  vulnerability_event?: boolean
  wiki_page_event?: boolean
}

export interface ApiEntitiesIntegrationLoadMatch {
  group_id?: string
  id?: string
  project_id?: string
  slug?: string
}

export interface ApiEntitiesIntegrationBasic {
  active?: boolean
  alert_event?: boolean
  comment_on_event_enabled?: boolean
  commit_event?: boolean
  confidential_issues_event?: boolean
  confidential_note_event?: boolean
  created_at?: string
  deployment_event?: boolean
  id?: number
  incident_event?: boolean
  inherited?: boolean
  issues_event?: boolean
  job_event?: boolean
  merge_requests_event?: boolean
  note_event?: boolean
  pipeline_event?: boolean
  push_event?: boolean
  slug?: number
  tag_push_event?: boolean
  title?: string
  updated_at?: string
  vulnerability_event?: boolean
  wiki_page_event?: boolean
}

export interface ApiEntitiesIntegrationBasicListMatch {
  group_id?: string
  project_id?: string
}

export interface ApiEntitiesIntegrationBasicUpdateData {
  group_id?: string
  project_id?: string
}

export interface ApiEntitiesInvitation {
  access_level?: string
  created_at?: string
  created_by_name?: string
  expires_at?: string
  invite_email?: string
  invite_token?: string
  user_name?: string
}

export interface ApiEntitiesInvitationListMatch {
  group_id?: string
  project_id?: string
}

export interface ApiEntitiesInvitationCreateData {
  group_id?: string
  project_id?: string
}

export interface ApiEntitiesInvitationUpdateData {
  group_id?: string
  id: string
  project_id?: string
}

export interface ApiEntitiesIssuableTimeStat {
  human_time_estimate?: string
  human_total_time_spent?: string
  time_estimate?: number
  total_time_spent?: number
}

export interface ApiEntitiesIssuableTimeStatLoadMatch {
  issue_id?: string
  project_id: string
  merge_request_id?: string
}

export interface ApiEntitiesIssuableTimeStatCreateData {
  issue_id?: string
  project_id: string
  merge_request_id?: string
}

export interface ApiEntitiesIssue {
  assignee?: Record<string, any>
  author?: Record<string, any>
  blocking_issues_count?: string
  closed_at?: string
  closed_by?: Record<string, any>
  confidential?: boolean
  created_at?: string
  description?: string
  discussion_locked?: boolean
  downvote?: string
  due_date?: string
  epic?: Record<string, any>
  epic_iid?: string
  has_task?: boolean
  health_status?: string
  id?: number
  iid?: number
  imported?: string
  imported_from?: string
  issue_type?: string
  iteration?: Record<string, any>
  label?: any[]
  link?: Record<string, any>
  merge_requests_count?: string
  milestone?: Record<string, any>
  moved_to_id?: string
  project_id?: number
  reference?: Record<string, any>
  service_desk_reply_to?: string
  severity?: string
  state?: string
  subscribed?: string
  task_completion_status?: string
  task_status?: string
  time_stat?: Record<string, any>
  title?: string
  type?: string
  updated_at?: string
  upvote?: string
  user_notes_count?: string
  web_url?: string
  weight?: string
}

export interface ApiEntitiesIssueLoadMatch {
  id: string
  project_id?: string
}

export interface ApiEntitiesIssueListMatch {
  project_id?: string
  group_id?: string
}

export interface ApiEntitiesIssueCreateData {
  issue_id?: string
  project_id: string
}

export interface ApiEntitiesIssueUpdateData {
  id?: string
  project_id: string
  issue_id?: string
}

export interface ApiEntitiesIssueLink {
  link_type?: string
  source_issue?: Record<string, any>
  target_issue?: Record<string, any>
}

export interface ApiEntitiesIssueLinkLoadMatch {
  id: string
  issue_id: string
  project_id: string
}

export interface ApiEntitiesIssueLinkCreateData {
  issue_id: string
  project_id: string
}

export interface ApiEntitiesLicense {
  condition?: any[]
  content?: string
  description?: string
  html_url?: string
  key?: string
  limitation?: any[]
  name?: string
  nickname?: string
  permission?: any[]
  popular?: boolean
  source_url?: string
}

export interface ApiEntitiesLicenseListMatch {
  id: string
  name: string
  type: any
}

export interface ApiEntitiesMarkdown {
}

export interface ApiEntitiesMarkdownCreateData {
}

export interface ApiEntitiesMarkdownUploadAdmin {
  created_at?: string
  filename?: string
  id?: string
  size?: string
  uploaded_by?: Record<string, any>
}

export interface ApiEntitiesMarkdownUploadAdminListMatch {
  group_id?: string
  project_id?: string
}

export interface ApiEntitiesMember {
  access_level?: string
  avatar_path?: string
  avatar_url?: string
  created_at?: string
  created_by?: Record<string, any>
  custom_attribute?: any[]
  email?: string
  expires_at?: string
  group_saml_identity?: Record<string, any>
  group_scim_identity?: Record<string, any>
  id?: number
  is_using_seat?: boolean
  key?: string
  locked?: boolean
  member_role?: Record<string, any>
  membership_state?: string
  name?: string
  override?: string
  public_email?: string
  state?: string
  username?: string
  value?: string
  web_url?: string
}

export interface ApiEntitiesMemberLoadMatch {
  group_id?: string
  id?: string
  user_id?: string
  project_id?: string
}

export interface ApiEntitiesMemberListMatch {
  group_id?: string
  project_id?: string
}

export interface ApiEntitiesMemberCreateData {
  group_id?: string
  member_id?: string
  project_id?: string
}

export interface ApiEntitiesMemberUpdateData {
  group_id?: string
  id: string
  project_id?: string
}

export interface ApiEntitiesMemberRemoveMatch {
  group_id: string
  member_id: string
}

export interface ApiEntitiesMerge {
  allow_collaboration?: boolean
  allow_maintainer_to_push?: boolean
  approvals_before_merge?: string
  assignee?: Record<string, any>
  author?: Record<string, any>
  blocking_discussions_resolved?: string
  changes_count?: string
  closed_at?: string
  closed_by?: Record<string, any>
  created_at?: string
  description?: string
  description_html?: string
  detailed_merge_status?: string
  diff_ref?: Record<string, any>
  discussion_locked?: string
  diverged_commits_count?: string
  downvote?: string
  draft?: string
  first_contribution?: string
  first_deployed_to_production_at?: string
  force_remove_source_branch?: string
  has_conflict?: boolean
  head_pipeline?: Record<string, any>
  id?: number
  iid?: number
  imported?: string
  imported_from?: string
  label?: string
  latest_build_finished_at?: string
  latest_build_started_at?: string
  merge_after?: string
  merge_commit_sha?: string
  merge_error?: string
  merge_status?: string
  merge_user?: Record<string, any>
  merge_when_pipeline_succeed?: string
  merged_at?: string
  merged_by?: Record<string, any>
  milestone?: Record<string, any>
  pipeline?: Record<string, any>
  prepared_at?: string
  project_id?: number
  rebase_in_progress?: string
  reference?: string
  reviewer?: Record<string, any>
  sha?: string
  should_remove_source_branch?: boolean
  source_branch?: string
  source_project_id?: string
  squash?: string
  squash_commit_sha?: string
  squash_on_merge?: string
  state?: string
  subscribed?: string
  target_branch?: string
  target_project_id?: string
  task_completion_status?: string
  time_stat?: Record<string, any>
  title?: string
  title_html?: string
  updated_at?: string
  upvote?: string
  user?: Record<string, any>
  user_notes_count?: string
  web_url?: string
  work_in_progress?: string
}

export interface ApiEntitiesMergeLoadMatch {
  merge_request_iid: any
  project_id: string
}

export interface ApiEntitiesMergeCreateData {
  merge_request_id?: string
  project_id: string
}

export interface ApiEntitiesMergeUpdateData {
  merge_request_id?: string
  project_id: string
  merge_request_iid?: any
}

export interface ApiEntitiesMergeRequestApproval {
  approved?: boolean
  approved_by?: Record<string, any>
  user_can_approve?: boolean
  user_has_approved?: boolean
}

export interface ApiEntitiesMergeRequestApprovalLoadMatch {
  merge_request_id: string
  project_id: string
}

export interface ApiEntitiesMergeRequestApprovalCreateData {
  merge_request_id: string
  project_id: string
}

export interface ApiEntitiesMergeRequestBasic {
  allow_collaboration?: boolean
  allow_maintainer_to_push?: boolean
  approvals_before_merge?: string
  assignee?: Record<string, any>
  author?: Record<string, any>
  blocking_discussions_resolved?: string
  closed_at?: string
  closed_by?: Record<string, any>
  created_at?: string
  description?: string
  description_html?: string
  detailed_merge_status?: string
  discussion_locked?: string
  downvote?: string
  draft?: string
  force_remove_source_branch?: string
  has_conflict?: boolean
  id?: number
  iid?: number
  imported?: string
  imported_from?: string
  label?: string
  merge_after?: string
  merge_commit_sha?: string
  merge_status?: string
  merge_user?: Record<string, any>
  merge_when_pipeline_succeed?: string
  merged_at?: string
  merged_by?: Record<string, any>
  milestone?: Record<string, any>
  prepared_at?: string
  project_id?: number
  reference?: string
  reviewer?: Record<string, any>
  sha?: string
  should_remove_source_branch?: boolean
  source_branch?: string
  source_project_id?: string
  squash?: string
  squash_commit_sha?: string
  squash_on_merge?: string
  state?: string
  target_branch?: string
  target_project_id?: string
  task_completion_status?: string
  time_stat?: Record<string, any>
  title?: string
  title_html?: string
  updated_at?: string
  upvote?: string
  user_notes_count?: string
  web_url?: string
  work_in_progress?: string
}

export interface ApiEntitiesMergeRequestBasicLoadMatch {
  group_id?: string
  project_id?: string
  issue_id?: string
}

export interface ApiEntitiesMergeRequestBasicListMatch {
  deployment_id?: string
  project_id: string
  sha?: any
}

export interface ApiEntitiesMergeRequestChange {
  allow_collaboration?: boolean
  allow_maintainer_to_push?: boolean
  approvals_before_merge?: string
  assignee?: Record<string, any>
  author?: Record<string, any>
  blocking_discussions_resolved?: string
  change?: Record<string, any>
  changes_count?: string
  closed_at?: string
  closed_by?: Record<string, any>
  created_at?: string
  description?: string
  description_html?: string
  detailed_merge_status?: string
  diff_ref?: Record<string, any>
  discussion_locked?: string
  diverged_commits_count?: string
  downvote?: string
  draft?: string
  first_contribution?: string
  first_deployed_to_production_at?: string
  force_remove_source_branch?: string
  has_conflict?: boolean
  head_pipeline?: Record<string, any>
  id?: number
  iid?: number
  imported?: string
  imported_from?: string
  label?: string
  latest_build_finished_at?: string
  latest_build_started_at?: string
  merge_after?: string
  merge_commit_sha?: string
  merge_error?: string
  merge_status?: string
  merge_user?: Record<string, any>
  merge_when_pipeline_succeed?: string
  merged_at?: string
  merged_by?: Record<string, any>
  milestone?: Record<string, any>
  overflow?: string
  pipeline?: Record<string, any>
  prepared_at?: string
  project_id?: number
  rebase_in_progress?: string
  reference?: string
  reviewer?: Record<string, any>
  sha?: string
  should_remove_source_branch?: boolean
  source_branch?: string
  source_project_id?: string
  squash?: string
  squash_commit_sha?: string
  squash_on_merge?: string
  state?: string
  subscribed?: string
  target_branch?: string
  target_project_id?: string
  task_completion_status?: string
  time_stat?: Record<string, any>
  title?: string
  title_html?: string
  updated_at?: string
  upvote?: string
  user?: Record<string, any>
  user_notes_count?: string
  web_url?: string
  work_in_progress?: string
}

export interface ApiEntitiesMergeRequestChangeLoadMatch {
  merge_request_id: string
  project_id: string
}

export interface ApiEntitiesMergeRequestDiff {
  base_commit_sha?: string
  created_at?: string
  head_commit_sha?: string
  id?: string
  merge_request_id?: string
  patch_id_sha?: string
  real_size?: string
  start_commit_sha?: string
  state?: string
}

export interface ApiEntitiesMergeRequestDiffListMatch {
  merge_request_id: string
  project_id: string
}

export interface ApiEntitiesMergeRequestDiffFull {
  base_commit_sha?: string
  commit?: Record<string, any>
  created_at?: string
  diff?: Record<string, any>
  head_commit_sha?: string
  id?: string
  merge_request_id?: string
  patch_id_sha?: string
  real_size?: string
  start_commit_sha?: string
  state?: string
}

export interface ApiEntitiesMergeRequestDiffFullLoadMatch {
  merge_request_id: string
  project_id: string
  version_id: string
}

export interface ApiEntitiesMergeRequestReviewer {
  created_at?: string
  state?: string
  user?: Record<string, any>
}

export interface ApiEntitiesMergeRequestReviewerLoadMatch {
  merge_request_id: string
  project_id: string
}

export interface ApiEntitiesMetricImage {
  created_at?: string
  file_path?: string
  filename?: string
  id?: number
  url?: string
  url_text?: string
}

export interface ApiEntitiesMetricImageListMatch {
  alert_management_alert_id: string
  project_id: string
}

export interface ApiEntitiesMetricImageCreateData {
  alert_management_alert_id: string
  project_id: string
}

export interface ApiEntitiesMetricImageUpdateData {
  alert_management_alert_id: string
  id: string
  project_id: string
}

export interface ApiEntitiesMrNote {
  author?: Record<string, any>
  note?: string
}

export interface ApiEntitiesMrNoteLoadMatch {
  merge_request_id: string
  project_id: string
}

export interface ApiEntitiesNamespace {
  additional_purchased_storage_ends_on?: string
  additional_purchased_storage_size?: number
  avatar_url?: string
  billable_members_count?: number
  end_date?: string
  extra_shared_runners_minutes_limit?: number
  full_path?: string
  id?: number
  kind?: string
  max_seats_used?: number
  max_seats_used_changed_at?: string
  members_count_with_descendant?: number
  name?: string
  parent_id?: number
  path?: string
  plan?: string
  projects_count?: number
  root_repository_size?: number
  seats_in_use?: number
  shared_runners_minutes_limit?: number
  trial?: boolean
  trial_ends_on?: string
  web_url?: string
}

export interface ApiEntitiesNamespaceLoadMatch {
  id: string
}

export interface ApiEntitiesNamespaceListMatch {
  additional_purchased_storage_ends_on?: string
  additional_purchased_storage_size?: number
  avatar_url?: string
  billable_members_count?: number
  end_date?: string
  extra_shared_runners_minutes_limit?: number
  full_path?: string
  id?: number
  kind?: string
  max_seats_used?: number
  max_seats_used_changed_at?: string
  members_count_with_descendant?: number
  name?: string
  parent_id?: number
  path?: string
  plan?: string
  projects_count?: number
  root_repository_size?: number
  seats_in_use?: number
  shared_runners_minutes_limit?: number
  trial?: boolean
  trial_ends_on?: string
  web_url?: string
}

export interface ApiEntitiesNamespaceUpdateData {
  id: string
}

export interface ApiEntitiesNamespaceExistence {
  exist?: boolean
  suggest?: any[]
}

export interface ApiEntitiesNamespaceExistenceListMatch {
  namespace_id: string
}

export interface ApiEntitiesNamespacesStorageLimitExclusion {
  id?: number
  namespace_id?: number
  namespace_name?: string
  reason?: string
}

export interface ApiEntitiesNamespacesStorageLimitExclusionLoadMatch {
  id: number
  namespace_id?: number
  namespace_name?: string
  reason?: string
}

export interface ApiEntitiesNamespacesStorageLimitExclusionCreateData {
  namespace_id: string
}

export interface ApiEntitiesNpmPackage {
  dist_tag?: Record<string, any>
  name?: string
  version?: Record<string, any>
}

export interface ApiEntitiesNpmPackageLoadMatch {
  group_id?: string
  project_id?: string
}

export interface ApiEntitiesNpmPackageTag {
  dist_tag?: Record<string, any>
}

export interface ApiEntitiesNpmPackageTagLoadMatch {
  group_id?: string
  project_id?: string
}

export interface ApiEntitiesNugetPackagesVersion {
  version?: any[]
}

export interface ApiEntitiesNugetPackagesVersionListMatch {
  project_id: string
}

export interface ApiEntitiesNugetSearchResult {
  author?: string
  description?: string
  icon_url?: string
  id?: string
  license_url?: string
  project_url?: string
  summary?: string
  tag?: string
  title?: string
  total_download?: number
  type?: string
  verified?: boolean
  version?: string
}

export interface ApiEntitiesNugetSearchResultListMatch {
  group_id?: string
  project_id?: string
}

export interface ApiEntitiesNugetServiceIndex {
  resource?: any[]
  version?: string
}

export interface ApiEntitiesNugetServiceIndexListMatch {
  group_id?: string
  project_id?: string
}

export interface ApiEntitiesOrganizationsOrganization {
}

export interface ApiEntitiesOrganizationsOrganizationCreateData {
}

export interface ApiEntitiesPackage {
  conan_package_name?: string
  created_at?: string
  id?: number
  last_downloaded_at?: string
  link?: Record<string, any>
  name?: string
  package_type?: string
  pipeline?: Record<string, any>
  project_id?: number
  project_path?: string
  status?: string
  tag?: string
  version?: string
}

export interface ApiEntitiesPackageLoadMatch {
  id: string
  project_id: string
}

export interface ApiEntitiesPackageListMatch {
  group_id?: string
  project_id?: string
}

export interface ApiEntitiesPackageFile {
  created_at?: string
  file_md5?: string
  file_name?: string
  file_sha1?: string
  file_sha256?: string
  id?: number
  package_id?: number
  pipeline?: Record<string, any>
  size?: number
}

export interface ApiEntitiesPackageFileListMatch {
  package_id: string
  project_id: string
}

export interface ApiEntitiesPackagePipeline {
  created_at?: string
  id?: number
  iid?: number
  project_id?: number
  ref?: string
  sha?: string
  source?: string
  status?: string
  updated_at?: string
  user?: Record<string, any>
  web_url?: string
}

export interface ApiEntitiesPackagePipelineLoadMatch {
  package_id: string
  project_id: string
}

export interface ApiEntitiesPackagesConanFilesList {
  file?: Record<string, any>
}

export interface ApiEntitiesPackagesConanFilesListLoadMatch {
  conan_id: string
  package_channel: any
  package_id?: string
  package_revision?: any
  package_username: any
  package_version: any
  project_id: string
  revision_id?: string
  recipe_revision?: any
}

export interface ApiEntitiesPackagesConanPackageManifest {
  package_url?: Record<string, any>
}

export interface ApiEntitiesPackagesConanPackageManifestLoadMatch {
  conan_id: string
  conan_package_reference: any
  package_channel: any
  package_username: any
  package_version: any
  project_id?: string
}

export interface ApiEntitiesPackagesConanPackageRevision {
  revision?: string
  time?: string
}

export interface ApiEntitiesPackagesConanPackageRevisionListMatch {
  conan_id: string
  conan_package_reference: any
  package_channel: any
  package_username: any
  package_version: any
  project_id: string
  revision_id: string
}

export interface ApiEntitiesPackagesConanPackageSnapshot {
  package_snapshot?: Record<string, any>
}

export interface ApiEntitiesPackagesConanPackageSnapshotLoadMatch {
  conan_id: string
  conan_package_reference: any
  package_channel: any
  package_username: any
  package_version: any
  project_id?: string
}

export interface ApiEntitiesPackagesConanRecipeManifest {
  recipe_url?: Record<string, any>
}

export interface ApiEntitiesPackagesConanRecipeManifestLoadMatch {
  conan_id: string
  package_channel: any
  package_username: any
  package_version: any
  project_id?: string
}

export interface ApiEntitiesPackagesConanRecipeRevision {
  revision?: string
  time?: string
}

export interface ApiEntitiesPackagesConanRecipeRevisionListMatch {
  conan_id: string
  package_channel: any
  package_username: any
  package_version: any
  project_id: string
}

export interface ApiEntitiesPackagesConanRecipeSnapshot {
  recipe_snapshot?: Record<string, any>
}

export interface ApiEntitiesPackagesConanRecipeSnapshotLoadMatch {
  id?: string
  package_channel: any
  package_name: any
  package_username: any
  package_version: any
}

export interface ApiEntitiesPackagesConanRevision {
  revision?: string
  time?: string
}

export interface ApiEntitiesPackagesConanRevisionLoadMatch {
  conan_id: string
  conan_package_reference?: any
  package_channel: any
  package_username: any
  package_version: any
  project_id: string
  revision_id?: string
}

export interface ApiEntitiesPackagesConanUploadUrl {
  upload_url?: Record<string, any>
}

export interface ApiEntitiesPackagesConanUploadUrlCreateData {
  conan_id: string
  conan_package_reference?: any
  package_channel: any
  package_username: any
  package_version: any
  project_id?: string
}

export interface ApiEntitiesPackagesDebianDistribution {
  architecture?: any[]
  codename?: string
  component?: any[]
  description?: string
  id?: number
  label?: string
  origin?: string
  suite?: string
  valid_time_duration_second?: number
  version?: string
}

export interface ApiEntitiesPackagesDebianDistributionLoadMatch {
  group_id?: string
  id: string
  project_id?: string
}

export interface ApiEntitiesPackagesDebianDistributionListMatch {
  group_id?: string
  project_id?: string
  codename?: any
}

export interface ApiEntitiesPackagesDebianDistributionCreateData {
  group_id?: string
  project_id?: string
}

export interface ApiEntitiesPackagesDebianDistributionUpdateData {
  group_id?: string
  id: string
  project_id?: string
}

export interface ApiEntitiesPagesDomain {
  auto_ssl_enabled?: string
  certificate?: Record<string, any>
  domain?: string
  enabled_until?: string
  url?: string
  verification_code?: string
  verified?: boolean
}

export interface ApiEntitiesPagesDomainLoadMatch {
  id: string
  project_id: string
}

export interface ApiEntitiesPagesDomainListMatch {
  project_id: string
}

export interface ApiEntitiesPagesDomainCreateData {
  project_id: string
}

export interface ApiEntitiesPagesDomainUpdateData {
  domain_id: string
  project_id: string
}

export interface ApiEntitiesPagesDomainBasic {
  auto_ssl_enabled?: string
  certificate_expiration?: Record<string, any>
  domain?: string
  enabled_until?: string
  project_id?: string
  url?: string
  verification_code?: string
  verified?: boolean
}

export interface ApiEntitiesPagesDomainBasicLoadMatch {
  auto_ssl_enabled?: string
  certificate_expiration?: Record<string, any>
  domain?: string
  enabled_until?: string
  project_id?: string
  url?: string
  verification_code?: string
  verified?: boolean
}

export interface ApiEntitiesPersonalAccessToken {
  active?: boolean
  created_at?: string
  description?: string
  expires_at?: string
  id?: number
  last_used_at?: string
  name?: string
  revoked?: boolean
  scope?: any[]
  user_id?: number
}

export interface ApiEntitiesPersonalAccessTokenListMatch {
  active?: boolean
  created_at?: string
  description?: string
  expires_at?: string
  id?: number
  last_used_at?: string
  name?: string
  revoked?: boolean
  scope?: any[]
  user_id?: number
}

export interface ApiEntitiesPersonalAccessTokenWithLastUsedIp {
  active?: boolean
  created_at?: string
  description?: string
  expires_at?: string
  id?: number
  last_used_at?: string
  last_used_ip?: any[]
  name?: string
  revoked?: boolean
  scope?: any[]
  user_id?: number
}

export interface ApiEntitiesPersonalAccessTokenWithLastUsedIpLoadMatch {
  id: string
}

export interface ApiEntitiesPersonalAccessTokenWithLastUsedIpListMatch {
  active?: boolean
  created_at?: string
  description?: string
  expires_at?: string
  id?: number
  last_used_at?: string
  last_used_ip?: any[]
  name?: string
  revoked?: boolean
  scope?: any[]
  user_id?: number
}

export interface ApiEntitiesPersonalAccessTokenWithToken {
  active?: boolean
  created_at?: string
  description?: string
  expires_at?: string
  id?: number
  last_used_at?: string
  name?: string
  revoked?: boolean
  scope?: any[]
  token?: string
  user_id?: number
}

export interface ApiEntitiesPersonalAccessTokenWithTokenCreateData {
  personal_access_token_id?: string
}

export interface ApiEntitiesPersonalSnippet {
  author?: Record<string, any>
  created_at?: string
  description?: string
  file?: any[]
  file_name?: string
  http_url_to_repo?: string
  id?: number
  imported?: boolean
  imported_from?: string
  project_id?: number
  raw_url?: string
  repository_storage?: string
  ssh_url_to_repo?: string
  title?: string
  updated_at?: string
  visibility?: string
  web_url?: string
}

export interface ApiEntitiesPersonalSnippetLoadMatch {
  id: string
}

export interface ApiEntitiesPersonalSnippetListMatch {
  author?: Record<string, any>
  created_at?: string
  description?: string
  file?: any[]
  file_name?: string
  http_url_to_repo?: string
  id?: number
  imported?: boolean
  imported_from?: string
  project_id?: number
  raw_url?: string
  repository_storage?: string
  ssh_url_to_repo?: string
  title?: string
  updated_at?: string
  visibility?: string
  web_url?: string
}

export interface ApiEntitiesPersonalSnippetCreateData {
  author?: Record<string, any>
  created_at?: string
  description?: string
  file?: any[]
  file_name?: string
  http_url_to_repo?: string
  id?: number
  imported?: boolean
  imported_from?: string
  project_id?: number
  raw_url?: string
  repository_storage?: string
  ssh_url_to_repo?: string
  title?: string
  updated_at?: string
  visibility?: string
  web_url?: string
}

export interface ApiEntitiesPersonalSnippetUpdateData {
  id: string
}

export interface ApiEntitiesPlanLimit {
  ci_active_job?: number
  ci_instance_level_variable?: number
  ci_needs_size_limit?: number
  ci_pipeline_schedule?: number
  ci_pipeline_size?: number
  ci_project_subscription?: number
  ci_registered_group_runner?: number
  ci_registered_project_runner?: number
  conan_max_file_size?: number
  dotenv_size?: number
  dotenv_variable?: number
  enforcement_limit?: number
  generic_packages_max_file_size?: number
  helm_max_file_size?: number
  limits_history?: Record<string, any>
  maven_max_file_size?: number
  notification_limit?: number
  npm_max_file_size?: number
  nuget_max_file_size?: number
  pipeline_hierarchy_size?: number
  pypi_max_file_size?: number
  storage_size_limit?: number
  terraform_module_max_file_size?: number
}

export interface ApiEntitiesPlanLimitLoadMatch {
  ci_active_job?: number
  ci_instance_level_variable?: number
  ci_needs_size_limit?: number
  ci_pipeline_schedule?: number
  ci_pipeline_size?: number
  ci_project_subscription?: number
  ci_registered_group_runner?: number
  ci_registered_project_runner?: number
  conan_max_file_size?: number
  dotenv_size?: number
  dotenv_variable?: number
  enforcement_limit?: number
  generic_packages_max_file_size?: number
  helm_max_file_size?: number
  limits_history?: Record<string, any>
  maven_max_file_size?: number
  notification_limit?: number
  npm_max_file_size?: number
  nuget_max_file_size?: number
  pipeline_hierarchy_size?: number
  pypi_max_file_size?: number
  storage_size_limit?: number
  terraform_module_max_file_size?: number
}

export interface ApiEntitiesPlanLimitUpdateData {
  ci_active_job?: number
  ci_instance_level_variable?: number
  ci_needs_size_limit?: number
  ci_pipeline_schedule?: number
  ci_pipeline_size?: number
  ci_project_subscription?: number
  ci_registered_group_runner?: number
  ci_registered_project_runner?: number
  conan_max_file_size?: number
  dotenv_size?: number
  dotenv_variable?: number
  enforcement_limit?: number
  generic_packages_max_file_size?: number
  helm_max_file_size?: number
  limits_history?: Record<string, any>
  maven_max_file_size?: number
  notification_limit?: number
  npm_max_file_size?: number
  nuget_max_file_size?: number
  pipeline_hierarchy_size?: number
  pypi_max_file_size?: number
  storage_size_limit?: number
  terraform_module_max_file_size?: number
}

export interface ApiEntitiesProject {
  allow_merge_on_skipped_pipeline?: boolean
  allow_pipeline_trigger_approve_deployment?: boolean
  analytics_access_level?: string
  approvals_before_merge?: string
  archived?: boolean
  auto_cancel_pending_pipeline?: string
  auto_devops_deploy_strategy?: string
  auto_devops_enabled?: boolean
  auto_duo_code_review_enabled?: string
  autoclose_referenced_issue?: boolean
  avatar_url?: string
  build_git_strategy?: string
  build_timeout?: number
  builds_access_level?: string
  can_create_merge_request_in?: boolean
  ci_allow_fork_pipelines_to_run_in_parent_project?: boolean
  ci_config_path?: string
  ci_default_git_depth?: number
  ci_delete_pipelines_in_second?: number
  ci_forward_deployment_enabled?: boolean
  ci_forward_deployment_rollback_allowed?: boolean
  ci_id_token_sub_claim_component?: any[]
  ci_job_token_scope_enabled?: boolean
  ci_pipeline_variables_minimum_override_role?: string
  ci_push_repository_for_job_token_allowed?: boolean
  ci_restrict_pipeline_cancellation_role?: string
  ci_separated_cache?: boolean
  compliance_framework?: string
  container_expiration_policy?: Record<string, any>
  container_registry_access_level?: string
  container_registry_enabled?: boolean
  container_registry_image_prefix?: string
  created_at?: string
  creator_id?: number
  custom_attribute?: Record<string, any>
  default_branch?: string
  description?: string
  description_html?: string
  duo_remote_flows_enabled?: string
  emails_disabled?: boolean
  emails_enabled?: boolean
  empty_repo?: boolean
  enforce_auth_checks_on_upload?: boolean
  environments_access_level?: string
  external_authorization_classification_label?: string
  feature_flags_access_level?: string
  forked_from_project?: Record<string, any>
  forking_access_level?: string
  forks_count?: number
  group_runners_enabled?: boolean
  http_url_to_repo?: string
  id?: number
  import_error?: string
  import_status?: string
  import_type?: string
  import_url?: string
  infrastructure_access_level?: string
  issue_branch_template?: string
  issues_access_level?: string
  issues_enabled?: boolean
  issues_template?: string
  jobs_enabled?: boolean
  keep_latest_artifact?: boolean
  last_activity_at?: string
  lfs_enabled?: boolean
  license?: Record<string, any>
  license_url?: string
  link?: Record<string, any>
  marked_for_deletion_at?: string
  marked_for_deletion_on?: string
  max_artifacts_size?: number
  merge_commit_template?: string
  merge_method?: string
  merge_pipelines_enabled?: string
  merge_request_title_regex?: string
  merge_request_title_regex_description?: string
  merge_requests_access_level?: string
  merge_requests_enabled?: boolean
  merge_requests_template?: string
  merge_trains_enabled?: string
  merge_trains_skip_train_allowed?: string
  mirror?: string
  mirror_overwrites_diverged_branch?: string
  mirror_trigger_build?: string
  mirror_user_id?: string
  model_experiments_access_level?: string
  model_registry_access_level?: string
  monitor_access_level?: string
  mr_default_target_self?: boolean
  name?: string
  name_with_namespace?: string
  namespace?: Record<string, any>
  only_allow_merge_if_all_discussions_are_resolved?: boolean
  only_allow_merge_if_all_status_checks_passed?: string
  only_allow_merge_if_pipeline_succeed?: boolean
  only_mirror_protected_branch?: string
  open_issues_count?: number
  owner?: Record<string, any>
  package_registry_access_level?: string
  packages_enabled?: boolean
  pages_access_level?: string
  path?: string
  path_with_namespace?: string
  pre_receive_secret_detection_enabled?: boolean
  prevent_merge_without_jira_issue?: string
  printing_merge_request_link_enabled?: boolean
  public_job?: boolean
  readme_url?: string
  releases_access_level?: string
  remove_source_branch_after_merge?: boolean
  repository_access_level?: string
  repository_object_format?: string
  repository_storage?: string
  request_access_enabled?: boolean
  requirements_access_level?: string
  requirements_enabled?: string
  resolve_outdated_diff_discussion?: boolean
  resource_group_default_process_mode?: string
  restrict_user_defined_variable?: boolean
  runner_token_expiration_interval?: number
  runners_token?: string
  secret_push_protection_enabled?: boolean
  security_and_compliance_access_level?: string
  security_and_compliance_enabled?: string
  service_desk_address?: string
  service_desk_enabled?: boolean
  shared_runners_enabled?: boolean
  shared_with_group?: any[]
  show_diff_preview_in_email?: boolean
  snippets_access_level?: string
  snippets_enabled?: boolean
  spp_repository_pipeline_access?: boolean
  squash_commit_template?: string
  squash_option?: string
  ssh_url_to_repo?: string
  star_count?: number
  statistic?: Record<string, any>
  suggestion_commit_message?: string
  tag_list?: any[]
  topic?: any[]
  updated_at?: string
  visibility?: string
  warn_about_potentially_unwanted_character?: boolean
  web_based_commit_signing_enabled?: string
  web_url?: string
  wiki_access_level?: string
  wiki_enabled?: boolean
}

export interface ApiEntitiesProjectListMatch {
  project_id?: string
  group_id?: string
}

export interface ApiEntitiesProjectCreateData {
  forked_from_id?: string
  project_id?: string
  user_id?: string
}

export interface ApiEntitiesProjectUpdateData {
  id?: string
  project_id?: string
}

export interface ApiEntitiesProjectDailyStatistic {
  fetch?: Record<string, any>
}

export interface ApiEntitiesProjectDailyStatisticLoadMatch {
  project_id: string
}

export interface ApiEntitiesProjectExportStatus {
  created_at?: string
  description?: string
  export_status?: string
  id?: number
  link?: Record<string, any>
  name?: string
  name_with_namespace?: string
  path?: string
  path_with_namespace?: string
}

export interface ApiEntitiesProjectExportStatusLoadMatch {
  project_id: string
}

export interface ApiEntitiesProjectGroupLink {
}

export interface ApiEntitiesProjectGroupLinkCreateData {
  project_id: string
}

export interface ApiEntitiesProjectHook {
  alert_status?: any
  branch_filter_strategy?: string
  confidential_issues_event?: boolean
  confidential_note_event?: boolean
  created_at?: string
  custom_header?: any[]
  custom_webhook_template?: string
  deployment_event?: boolean
  description?: string
  disabled_until?: string
  emoji_event?: boolean
  enable_ssl_verification?: boolean
  feature_flag_event?: boolean
  id?: string
  issues_event?: boolean
  job_event?: boolean
  merge_requests_event?: boolean
  milestone_event?: boolean
  name?: string
  note_event?: boolean
  pipeline_event?: boolean
  project_id?: string
  push_event?: boolean
  push_events_branch_filter?: string
  releases_event?: boolean
  repository_update_event?: boolean
  resource_access_token_event?: boolean
  tag_push_event?: boolean
  url?: string
  url_variable?: any[]
  vulnerability_event?: boolean
  wiki_page_event?: boolean
}

export interface ApiEntitiesProjectHookLoadMatch {
  id: string
  project_id: string
}

export interface ApiEntitiesProjectHookListMatch {
  project_id: string
}

export interface ApiEntitiesProjectHookCreateData {
  project_id: string
}

export interface ApiEntitiesProjectHookUpdateData {
  id: string
  project_id: string
}

export interface ApiEntitiesProjectImportStatus {
  created_at?: string
  exception_class?: string
  exception_message?: string
  id?: string
  line_number?: number
  relation_name?: string
  source?: string
}

export interface ApiEntitiesProjectImportStatusListMatch {
  project_id: string
}

export interface ApiEntitiesProjectImportStatusCreateData {
  created_at?: string
  exception_class?: string
  exception_message?: string
  id?: string
  line_number?: number
  relation_name?: string
  source?: string
}

export interface ApiEntitiesProjectJobTokenScope {
  inbound_enabled?: boolean
  outbound_enabled?: boolean
}

export interface ApiEntitiesProjectJobTokenScopeLoadMatch {
  project_id: string
}

export interface ApiEntitiesProjectRepositoryStorage {
  created_at?: string
  disk_path?: string
  project_id?: number
  repository_storage?: string
}

export interface ApiEntitiesProjectRepositoryStorageLoadMatch {
  project_id: string
}

export interface ApiEntitiesProjectSnippet {
  author?: Record<string, any>
  created_at?: string
  description?: string
  file?: any[]
  file_name?: string
  http_url_to_repo?: string
  id?: number
  imported?: boolean
  imported_from?: string
  project_id?: number
  raw_url?: string
  repository_storage?: string
  ssh_url_to_repo?: string
  title?: string
  updated_at?: string
  visibility?: string
  web_url?: string
}

export interface ApiEntitiesProjectSnippetLoadMatch {
  id: string
  project_id: string
}

export interface ApiEntitiesProjectSnippetListMatch {
  file_id?: string
  file_path?: any
  project_id: string
  snippet_id?: string
}

export interface ApiEntitiesProjectSnippetCreateData {
  project_id: string
}

export interface ApiEntitiesProjectSnippetUpdateData {
  id: string
  project_id: string
}

export interface ApiEntitiesProjectUpload {
}

export interface ApiEntitiesProjectUploadCreateData {
  project_id: string
}

export interface ApiEntitiesProjectWithAccess {
  allow_merge_on_skipped_pipeline?: boolean
  allow_pipeline_trigger_approve_deployment?: boolean
  analytics_access_level?: string
  approvals_before_merge?: string
  archived?: boolean
  auto_cancel_pending_pipeline?: string
  auto_devops_deploy_strategy?: string
  auto_devops_enabled?: boolean
  auto_duo_code_review_enabled?: string
  autoclose_referenced_issue?: boolean
  avatar_url?: string
  build_git_strategy?: string
  build_timeout?: number
  builds_access_level?: string
  can_create_merge_request_in?: boolean
  ci_allow_fork_pipelines_to_run_in_parent_project?: boolean
  ci_config_path?: string
  ci_default_git_depth?: number
  ci_delete_pipelines_in_second?: number
  ci_forward_deployment_enabled?: boolean
  ci_forward_deployment_rollback_allowed?: boolean
  ci_id_token_sub_claim_component?: any[]
  ci_job_token_scope_enabled?: boolean
  ci_pipeline_variables_minimum_override_role?: string
  ci_push_repository_for_job_token_allowed?: boolean
  ci_restrict_pipeline_cancellation_role?: string
  ci_separated_cache?: boolean
  compliance_framework?: string
  container_expiration_policy?: Record<string, any>
  container_registry_access_level?: string
  container_registry_enabled?: boolean
  container_registry_image_prefix?: string
  created_at?: string
  creator_id?: number
  custom_attribute?: Record<string, any>
  default_branch?: string
  description?: string
  description_html?: string
  duo_remote_flows_enabled?: string
  emails_disabled?: boolean
  emails_enabled?: boolean
  empty_repo?: boolean
  enforce_auth_checks_on_upload?: boolean
  environments_access_level?: string
  external_authorization_classification_label?: string
  feature_flags_access_level?: string
  forked_from_project?: Record<string, any>
  forking_access_level?: string
  forks_count?: number
  group_runners_enabled?: boolean
  http_url_to_repo?: string
  id?: number
  import_error?: string
  import_status?: string
  import_type?: string
  import_url?: string
  infrastructure_access_level?: string
  issue_branch_template?: string
  issues_access_level?: string
  issues_enabled?: boolean
  issues_template?: string
  jobs_enabled?: boolean
  keep_latest_artifact?: boolean
  last_activity_at?: string
  lfs_enabled?: boolean
  license?: Record<string, any>
  license_url?: string
  link?: Record<string, any>
  marked_for_deletion_at?: string
  marked_for_deletion_on?: string
  max_artifacts_size?: number
  merge_commit_template?: string
  merge_method?: string
  merge_pipelines_enabled?: string
  merge_request_title_regex?: string
  merge_request_title_regex_description?: string
  merge_requests_access_level?: string
  merge_requests_enabled?: boolean
  merge_requests_template?: string
  merge_trains_enabled?: string
  merge_trains_skip_train_allowed?: string
  mirror?: string
  mirror_overwrites_diverged_branch?: string
  mirror_trigger_build?: string
  mirror_user_id?: string
  model_experiments_access_level?: string
  model_registry_access_level?: string
  monitor_access_level?: string
  mr_default_target_self?: boolean
  name?: string
  name_with_namespace?: string
  namespace?: Record<string, any>
  only_allow_merge_if_all_discussions_are_resolved?: boolean
  only_allow_merge_if_all_status_checks_passed?: string
  only_allow_merge_if_pipeline_succeed?: boolean
  only_mirror_protected_branch?: string
  open_issues_count?: number
  owner?: Record<string, any>
  package_registry_access_level?: string
  packages_enabled?: boolean
  pages_access_level?: string
  path?: string
  path_with_namespace?: string
  permission?: Record<string, any>
  pre_receive_secret_detection_enabled?: boolean
  prevent_merge_without_jira_issue?: string
  printing_merge_request_link_enabled?: boolean
  public_job?: boolean
  readme_url?: string
  releases_access_level?: string
  remove_source_branch_after_merge?: boolean
  repository_access_level?: string
  repository_object_format?: string
  repository_storage?: string
  request_access_enabled?: boolean
  requirements_access_level?: string
  requirements_enabled?: string
  resolve_outdated_diff_discussion?: boolean
  resource_group_default_process_mode?: string
  restrict_user_defined_variable?: boolean
  runner_token_expiration_interval?: number
  runners_token?: string
  secret_push_protection_enabled?: boolean
  security_and_compliance_access_level?: string
  security_and_compliance_enabled?: string
  service_desk_address?: string
  service_desk_enabled?: boolean
  shared_runners_enabled?: boolean
  shared_with_group?: any[]
  show_diff_preview_in_email?: boolean
  snippets_access_level?: string
  snippets_enabled?: boolean
  spp_repository_pipeline_access?: boolean
  squash_commit_template?: string
  squash_option?: string
  ssh_url_to_repo?: string
  star_count?: number
  statistic?: Record<string, any>
  suggestion_commit_message?: string
  tag_list?: any[]
  topic?: any[]
  updated_at?: string
  visibility?: string
  warn_about_potentially_unwanted_character?: boolean
  web_based_commit_signing_enabled?: string
  web_url?: string
  wiki_access_level?: string
  wiki_enabled?: boolean
}

export interface ApiEntitiesProjectWithAccessLoadMatch {
  id: string
}

export interface ApiEntitiesProjectsContainerRegistryProtectionRule {
  id?: number
  minimum_access_level_for_delete?: string
  minimum_access_level_for_push?: string
  project_id?: number
  repository_path_pattern?: string
}

export interface ApiEntitiesProjectsContainerRegistryProtectionRuleListMatch {
  project_id: string
}

export interface ApiEntitiesProjectsContainerRegistryProtectionRuleCreateData {
  project_id: string
}

export interface ApiEntitiesProjectsContainerRegistryProtectionRuleUpdateData {
  id: string
  project_id: string
}

export interface ApiEntitiesProjectsPackagesProtectionRule {
  id?: number
  minimum_access_level_for_delete?: string
  minimum_access_level_for_push?: string
  package_name_pattern?: string
  package_type?: string
  project_id?: number
}

export interface ApiEntitiesProjectsPackagesProtectionRuleListMatch {
  project_id: string
}

export interface ApiEntitiesProjectsPackagesProtectionRuleCreateData {
  project_id: string
}

export interface ApiEntitiesProjectsPackagesProtectionRuleUpdateData {
  id: string
  project_id: string
}

export interface ApiEntitiesProjectsTopic {
  avatar_url?: string
  description?: string
  id?: string
  name?: string
  organization_id?: string
  title?: string
  total_projects_count?: string
}

export interface ApiEntitiesProjectsTopicLoadMatch {
  id?: string
}

export interface ApiEntitiesProjectsTopicCreateData {
  avatar_url?: string
  description?: string
  id?: string
  name?: string
  organization_id?: string
  title?: string
  total_projects_count?: string
}

export interface ApiEntitiesProjectsTopicUpdateData {
  id: string
}

export interface ApiEntitiesProtectedBranch {
  allow_force_push?: boolean
  code_owner_approval_required?: boolean
  id?: number
  inherited?: boolean
  merge_access_level?: any[]
  name?: string
  push_access_level?: any[]
  unprotect_access_level?: any[]
}

export interface ApiEntitiesProtectedBranchLoadMatch {
  id: string
  project_id: string
}

export interface ApiEntitiesProtectedBranchListMatch {
  project_id: string
}

export interface ApiEntitiesProtectedBranchCreateData {
  project_id: string
}

export interface ApiEntitiesProtectedBranchUpdateData {
  id: string
  project_id: string
}

export interface ApiEntitiesProtectedTag {
  create_access_level?: Record<string, any>
  name?: string
}

export interface ApiEntitiesProtectedTagLoadMatch {
  id: string
  project_id: string
}

export interface ApiEntitiesProtectedTagListMatch {
  project_id: string
}

export interface ApiEntitiesProtectedTagCreateData {
  project_id: string
}

export interface ApiEntitiesPublicGroupDetail {
  avatar_url?: string
  full_name?: string
  full_path?: string
  id?: string
  name?: string
  web_url?: string
}

export interface ApiEntitiesPublicGroupDetailListMatch {
  project_id: string
}

export interface ApiEntitiesRelatedIssue {
  assignee?: Record<string, any>
  author?: Record<string, any>
  blocking_issues_count?: string
  closed_at?: string
  closed_by?: Record<string, any>
  confidential?: boolean
  created_at?: string
  description?: string
  discussion_locked?: boolean
  downvote?: string
  due_date?: string
  epic?: Record<string, any>
  epic_iid?: string
  has_task?: boolean
  health_status?: string
  id?: number
  iid?: number
  imported?: string
  imported_from?: string
  issue_link_id?: string
  issue_type?: string
  iteration?: Record<string, any>
  label?: any[]
  link?: Record<string, any>
  link_created_at?: string
  link_type?: string
  link_updated_at?: string
  merge_requests_count?: string
  milestone?: Record<string, any>
  moved_to_id?: string
  project_id?: number
  reference?: Record<string, any>
  service_desk_reply_to?: string
  severity?: string
  state?: string
  subscribed?: string
  task_completion_status?: string
  task_status?: string
  time_stat?: Record<string, any>
  title?: string
  type?: string
  updated_at?: string
  upvote?: string
  user_notes_count?: string
  web_url?: string
  weight?: string
}

export interface ApiEntitiesRelatedIssueListMatch {
  issue_id: string
  project_id: string
}

export interface ApiEntitiesRelationImportTracker {
}

export interface ApiEntitiesRelationImportTrackerCreateData {
}

export interface ApiEntitiesRelease {
  asset?: Record<string, any>
  author?: Record<string, any>
  commit?: Record<string, any>
  commit_path?: string
  created_at?: string
  description?: string
  description_html?: string
  evidence?: Record<string, any>
  link?: Record<string, any>
  milestone?: Record<string, any>
  name?: string
  released_at?: string
  tag_name?: string
  tag_path?: string
  upcoming_release?: boolean
}

export interface ApiEntitiesReleaseLoadMatch {
  id: string
  project_id: string
}

export interface ApiEntitiesReleaseListMatch {
  project_id?: string
  group_id?: string
}

export interface ApiEntitiesReleaseCreateData {
  project_id: string
  tag_name?: any
}

export interface ApiEntitiesReleaseUpdateData {
  id: string
  project_id: string
}

export interface ApiEntitiesReleasesLink {
  direct_asset_url?: string
  id?: number
  link_type?: string
  name?: string
  url?: string
}

export interface ApiEntitiesReleasesLinkLoadMatch {
  id: string
  project_id: string
  release_id: string
}

export interface ApiEntitiesReleasesLinkListMatch {
  project_id: string
  release_id: string
}

export interface ApiEntitiesReleasesLinkCreateData {
  project_id: string
  release_id: string
}

export interface ApiEntitiesReleasesLinkUpdateData {
  id: string
  project_id: string
  release_id: string
}

export interface ApiEntitiesRemoteMirror {
  auth_method?: string
  enabled?: boolean
  host_key?: any[]
  id?: number
  keep_divergent_ref?: boolean
  last_error?: number
  last_successful_update_at?: string
  last_update_at?: string
  last_update_started_at?: string
  mirror_branch_regex?: string
  only_protected_branch?: boolean
  update_status?: string
  url?: string
}

export interface ApiEntitiesRemoteMirrorLoadMatch {
  id: string
  project_id: string
}

export interface ApiEntitiesRemoteMirrorListMatch {
  project_id: string
}

export interface ApiEntitiesRemoteMirrorCreateData {
  project_id: string
}

export interface ApiEntitiesRemoteMirrorUpdateData {
  id: string
  project_id: string
}

export interface ApiEntitiesRepositoryHealth {
  alternate?: Record<string, any>
  bitmap?: Record<string, any>
  commit_graph?: Record<string, any>
  is_object_pool?: boolean
  last_full_repack?: Record<string, any>
  multi_pack_index?: Record<string, any>
  multi_pack_index_bitmap?: Record<string, any>
  object?: Record<string, any>
  reference?: Record<string, any>
  size?: number
  updated_at?: string
}

export interface ApiEntitiesRepositoryHealthLoadMatch {
  project_id: string
}

export interface ApiEntitiesResourceAccessTokenWithToken {
  access_level?: number
  active?: boolean
  created_at?: string
  description?: string
  expires_at?: string
  id?: number
  last_used_at?: string
  name?: string
  resource_id?: number
  resource_type?: string
  revoked?: boolean
  scope?: any[]
  token?: string
  user_id?: number
}

export interface ApiEntitiesResourceAccessTokenWithTokenCreateData {
  group_id?: string
  project_id?: string
}

export interface ApiEntitiesResourceMilestoneEvent {
  action?: string
  created_at?: string
  id?: number
  milestone?: Record<string, any>
  resource_id?: number
  resource_type?: string
  state?: string
  user?: Record<string, any>
}

export interface ApiEntitiesResourceMilestoneEventLoadMatch {
  id: string
  issue_id?: string
  project_id: string
  merge_request_id?: string
}

export interface ApiEntitiesResourceMilestoneEventListMatch {
  issue_id?: string
  project_id: string
  merge_request_id?: string
}

export interface ApiEntitiesSnippet {
  author?: Record<string, any>
  created_at?: string
  description?: string
  file?: any[]
  file_name?: string
  http_url_to_repo?: string
  id?: number
  imported?: boolean
  imported_from?: string
  project_id?: number
  raw_url?: string
  repository_storage?: string
  ssh_url_to_repo?: string
  title?: string
  updated_at?: string
  visibility?: string
  web_url?: string
}

export interface ApiEntitiesSnippetListMatch {
  author?: Record<string, any>
  created_at?: string
  description?: string
  file?: any[]
  file_name?: string
  http_url_to_repo?: string
  id?: number
  imported?: boolean
  imported_from?: string
  project_id?: number
  raw_url?: string
  repository_storage?: string
  ssh_url_to_repo?: string
  title?: string
  updated_at?: string
  visibility?: string
  web_url?: string
}

export interface ApiEntitiesSshKeyWithUser {
  created_at?: string
  expires_at?: string
  id?: number
  key?: string
  last_used_at?: string
  title?: string
  usage_type?: string
  user?: Record<string, any>
}

export interface ApiEntitiesSshKeyWithUserLoadMatch {
  id: string
}

export interface ApiEntitiesSuggestion {
  appliable?: string
  applied?: string
  from_content?: string
  from_line?: string
  id?: string
  to_content?: string
  to_line?: string
}

export interface ApiEntitiesSuggestionUpdateData {
  suggestion_id?: string
}

export interface ApiEntitiesSystemBroadcastMessage {
  active?: boolean
  broadcast_type?: string
  color?: string
  dismissable?: string
  ends_at?: string
  font?: string
  id?: string
  message?: string
  starts_at?: string
  target_access_level?: string
  target_path?: string
  theme?: string
}

export interface ApiEntitiesSystemBroadcastMessageLoadMatch {
  id?: string
}

export interface ApiEntitiesSystemBroadcastMessageCreateData {
  active?: boolean
  broadcast_type?: string
  color?: string
  dismissable?: string
  ends_at?: string
  font?: string
  id?: string
  message?: string
  starts_at?: string
  target_access_level?: string
  target_path?: string
  theme?: string
}

export interface ApiEntitiesSystemBroadcastMessageUpdateData {
  id: string
}

export interface ApiEntitiesSystemBroadcastMessageRemoveMatch {
  id: string
}

export interface ApiEntitiesTag {
  commit?: Record<string, any>
  created_at?: string
  message?: string
  name?: string
  protected?: boolean
  release?: Record<string, any>
  target?: string
}

export interface ApiEntitiesTagLoadMatch {
  id: string
  project_id: string
}

export interface ApiEntitiesTagListMatch {
  project_id: string
}

export interface ApiEntitiesTagCreateData {
  project_id: string
}

export interface ApiEntitiesTagSignature {
  signature?: string
  signature_type?: string
}

export interface ApiEntitiesTagSignatureLoadMatch {
  project_id: string
  tag_name: any
}

export interface ApiEntitiesTemplatesList {
  key?: string
  name?: string
}

export interface ApiEntitiesTemplatesListLoadMatch {
  project_id: string
  type: any
}

export interface ApiEntitiesTerraformModuleVersion {
  module?: string
  name?: string
  provider?: string
  root?: string
  source?: string
  submodule?: string
  version?: string
}

export interface ApiEntitiesTerraformModuleVersionLoadMatch {
  module_name: any
  module_system: any
  v1_id?: string
  module_namespace?: any
}

export interface ApiEntitiesTerraformModuleVersionListMatch {
  module_name: any
  module_system: any
  v1_id: string
}

export interface ApiEntitiesTreeObject {
  id?: string
  mode?: string
  name?: string
  path?: string
  type?: string
}

export interface ApiEntitiesTreeObjectLoadMatch {
  project_id: string
}

export interface ApiEntitiesTrigger {
  created_at?: string
  description?: string
  expires_at?: string
  id?: number
  last_used?: string
  owner?: Record<string, any>
  token?: string
  updated_at?: string
}

export interface ApiEntitiesTriggerLoadMatch {
  id: string
  project_id: string
}

export interface ApiEntitiesTriggerListMatch {
  project_id: string
}

export interface ApiEntitiesTriggerCreateData {
  project_id: string
}

export interface ApiEntitiesTriggerUpdateData {
  id: string
  project_id: string
}

export interface ApiEntitiesUserAgentDetail {
  akismet_submitted?: boolean
  ip_address?: string
  user_agent?: string
}

export interface ApiEntitiesUserAgentDetailLoadMatch {
  issue_id?: string
  project_id?: string
  snippet_id?: string
}

export interface ApiEntitiesUserCount {
  assigned_issue?: number
  assigned_merge_request?: number
  merge_request?: number
  review_requested_merge_request?: number
  todo?: number
}

export interface ApiEntitiesUserCountLoadMatch {
  assigned_issue?: number
  assigned_merge_request?: number
  merge_request?: number
  review_requested_merge_request?: number
  todo?: number
}

export interface ApiEntitiesUserPublic {
  avatar_path?: string
  avatar_url?: string
  bio?: string
  bot?: string
  can_create_group?: boolean
  can_create_project?: boolean
  color_scheme_id?: number
  commit_email?: string
  confirmed_at?: string
  created_at?: string
  current_sign_in_at?: string
  custom_attribute?: any[]
  discord?: string
  email?: string
  external?: string
  extra_shared_runners_minutes_limit?: string
  follower?: string
  following?: string
  github?: string
  id?: number
  identity?: Record<string, any>
  is_followed?: boolean
  job_title?: string
  key?: string
  last_activity_on?: string
  last_sign_in_at?: string
  linkedin?: string
  local_time?: string
  location?: string
  locked?: boolean
  name?: string
  organization?: string
  preferred_language?: string
  private_profile?: boolean
  projects_limit?: number
  pronoun?: string
  public_email?: string
  scim_identity?: Record<string, any>
  shared_runners_minutes_limit?: string
  state?: string
  theme_id?: number
  twitter?: string
  two_factor_enabled?: boolean
  username?: string
  value?: string
  web_url?: string
  website_url?: string
  work_information?: string
}

export interface ApiEntitiesUserPublicListMatch {
  group_id: string
}

export interface ApiEntitiesUserWithAdmin {
  key?: string
  value?: string
}

export interface ApiEntitiesUserWithAdminListMatch {
  key?: string
  value?: string
}

export interface ApiEntitiesWikiAttachment {
}

export interface ApiEntitiesWikiAttachmentCreateData {
  group_id?: string
  project_id?: string
}

export interface ApiEntitiesWikiPage {
  content?: string
  encoding?: string
  format?: string
  front_matter?: Record<string, any>
  slug?: string
  title?: string
  wiki_page_meta_id?: number
}

export interface ApiEntitiesWikiPageLoadMatch {
  group_id?: string
  slug: string
  project_id?: string
}

export interface ApiEntitiesWikiPageCreateData {
  group_id?: string
  project_id?: string
}

export interface ApiEntitiesWikiPageUpdateData {
  group_id?: string
  slug: string
  project_id?: string
}

export interface ApiEntitiesWikiPageBasic {
  format?: string
  slug?: string
  title?: string
  wiki_page_meta_id?: number
}

export interface ApiEntitiesWikiPageBasicListMatch {
  group_id?: string
  project_id?: string
}

export interface Application {
}

export interface ApplicationRemoveMatch {
  id: string
}

export interface AwardEmoji {
}

export interface AwardEmojiRemoveMatch {
  epic_id?: string
  group_id?: string
  id: string
  note_id?: string
  issue_id?: string
  project_id?: string
  merge_request_id?: string
  snippet_id?: string
}

export interface Badge {
}

export interface BadgeRemoveMatch {
  group_id?: string
  id: string
  project_id?: string
}

export interface Branch {
}

export interface BranchRemoveMatch {
  id?: string
  project_id: string
}

export interface CargoPackage {
}

export interface CargoPackageLoadMatch {
  project_id: string
}

export interface CiVariable {
}

export interface CiVariableRemoveMatch {
  id: string
  project_id?: string
  group_id?: string
}

export interface Cluster {
}

export interface ClusterRemoveMatch {
  group_id?: string
  id: string
  project_id?: string
}

export interface ClusterAgent {
}

export interface ClusterAgentRemoveMatch {
  id: string
  project_id: string
  token_id?: string
}

export interface Composer {
}

export interface ComposerCreateData {
  project_id: string
}

export interface ComposerPackage {
}

export interface ComposerPackageLoadMatch {
  project_id?: string
  group_id?: string
  sha?: any
}

export interface Conan {
}

export interface ConanRemoveMatch {
  id?: string
  package_channel: any
  package_name: any
  package_username: any
  package_version: any
}

export interface ConanPackage {
}

export interface ConanPackageLoadMatch {
  conan_package_reference?: any
  file_name?: any
  id?: string
  package_channel?: any
  package_name?: any
  package_revision?: any
  package_username?: any
  package_version?: any
  recipe_revision?: any
  conan_id?: string
  package_id?: string
  project_id?: string
  revision_id?: string
  file_id?: string
}

export interface ConanPackageUpdateData {
  conan_package_reference?: any
  file_name: any
  id?: string
  package_channel: any
  package_name?: any
  package_revision?: any
  package_username: any
  package_version: any
  recipe_revision?: any
  conan_id?: string
  package_id?: string
  project_id?: string
  revision_id?: string
  file_id?: string
}

export interface ConanPackageRemoveMatch {
  conan_id: string
  package_channel: any
  package_id?: string
  package_revision?: any
  package_username: any
  package_version: any
  project_id: string
  revision_id?: string
  recipe_revision?: any
}

export interface ContainerRegistry {
}

export interface ContainerRegistryRemoveMatch {
  project_id: string
  repository_id: string
  tag_name?: any
}

export interface ContainerRegistryEvent {
}

export interface ContainerRegistryEventCreateData {
}

export interface CustomAttribute {
  key?: string
  value?: string
}

export interface CustomAttributeLoadMatch {
  group_id?: string
  id?: string
  project_id?: string
}

export interface Debian {
}

export interface DebianUpdateData {
  id: string
  project_id: string
}

export interface DebianDistribution {
}

export interface DebianDistributionRemoveMatch {
  group_id?: string
  id: string
  project_id?: string
}

export interface DebianPackage {
}

export interface DebianPackageLoadMatch {
  distribution?: any
  file_name?: any
  id?: string
  letter?: any
  package_name?: any
  package_version?: any
  project_id?: string
  architecture?: any
  distribution_id?: string
  file_sha256?: any
  group_id?: string
}

export interface DebianPackageUpdateData {
  file_name: any
  project_id: string
}

export interface DependencyProxy {
}

export interface DependencyProxyRemoveMatch {
  group_id: string
}

export interface DeployKey {
}

export interface DeployKeyRemoveMatch {
  id: string
  project_id: string
}

export interface DeployToken {
}

export interface DeployTokenRemoveMatch {
  group_id?: string
  id: string
  project_id?: string
}

export interface Deployment {
}

export interface DeploymentRemoveMatch {
  id: string
  project_id: string
}

export interface EeApiEntitiesApprovalState {
}

export interface EeApiEntitiesApprovalStateCreateData {
  merge_request_id: string
  project_id: string
}

export interface EeApiEntitiesAuditEvent {
  author_id?: string
  created_at?: string
  detail?: string
  entity_id?: string
  entity_type?: string
  event_name?: string
  id?: string
}

export interface EeApiEntitiesAuditEventLoadMatch {
  group_id?: string
  id: string
  project_id?: string
}

export interface EeApiEntitiesAuditEventListMatch {
  group_id?: string
  project_id?: string
}

export interface EeApiEntitiesBillableMembership {
  access_level?: Record<string, any>
  created_at?: string
  expires_at?: string
  id?: string
  source_full_name?: string
  source_id?: string
  source_members_url?: string
}

export interface EeApiEntitiesBillableMembershipLoadMatch {
  billable_member_id: string
  group_id: string
}

export interface EeApiEntitiesGeoNodeStatus {
  ci_secure_files_checksum_failed_count?: string
  ci_secure_files_checksum_total_count?: string
  ci_secure_files_checksummed_count?: string
  ci_secure_files_count?: string
  ci_secure_files_failed_count?: string
  ci_secure_files_registry_count?: string
  ci_secure_files_synced_count?: string
  ci_secure_files_synced_in_percentage?: string
  ci_secure_files_verification_failed_count?: string
  ci_secure_files_verification_total_count?: string
  ci_secure_files_verified_count?: string
  ci_secure_files_verified_in_percentage?: string
  container_repositories_checksum_failed_count?: string
  container_repositories_checksum_total_count?: string
  container_repositories_checksummed_count?: string
  container_repositories_count?: string
  container_repositories_failed_count?: string
  container_repositories_registry_count?: string
  container_repositories_replication_enabled?: string
  container_repositories_synced_count?: string
  container_repositories_synced_in_percentage?: string
  container_repositories_verification_failed_count?: string
  container_repositories_verification_total_count?: string
  container_repositories_verified_count?: string
  container_repositories_verified_in_percentage?: string
  cursor_last_event_id?: string
  cursor_last_event_timestamp?: string
  db_replication_lag_second?: string
  dependency_proxy_blobs_checksum_failed_count?: string
  dependency_proxy_blobs_checksum_total_count?: string
  dependency_proxy_blobs_checksummed_count?: string
  dependency_proxy_blobs_count?: string
  dependency_proxy_blobs_failed_count?: string
  dependency_proxy_blobs_registry_count?: string
  dependency_proxy_blobs_synced_count?: string
  dependency_proxy_blobs_synced_in_percentage?: string
  dependency_proxy_blobs_verification_failed_count?: string
  dependency_proxy_blobs_verification_total_count?: string
  dependency_proxy_blobs_verified_count?: string
  dependency_proxy_blobs_verified_in_percentage?: string
  dependency_proxy_manifests_checksum_failed_count?: string
  dependency_proxy_manifests_checksum_total_count?: string
  dependency_proxy_manifests_checksummed_count?: string
  dependency_proxy_manifests_count?: string
  dependency_proxy_manifests_failed_count?: string
  dependency_proxy_manifests_registry_count?: string
  dependency_proxy_manifests_synced_count?: string
  dependency_proxy_manifests_synced_in_percentage?: string
  dependency_proxy_manifests_verification_failed_count?: string
  dependency_proxy_manifests_verification_total_count?: string
  dependency_proxy_manifests_verified_count?: string
  dependency_proxy_manifests_verified_in_percentage?: string
  design_management_repositories_checksum_failed_count?: string
  design_management_repositories_checksum_total_count?: string
  design_management_repositories_checksummed_count?: string
  design_management_repositories_count?: string
  design_management_repositories_failed_count?: string
  design_management_repositories_registry_count?: string
  design_management_repositories_synced_count?: string
  design_management_repositories_synced_in_percentage?: string
  design_management_repositories_verification_failed_count?: string
  design_management_repositories_verification_total_count?: string
  design_management_repositories_verified_count?: string
  design_management_repositories_verified_in_percentage?: string
  geo_node_id?: string
  git_fetch_event_count_weekly?: string
  git_push_event_count_weekly?: string
  group_wiki_repositories_checksum_failed_count?: string
  group_wiki_repositories_checksum_total_count?: string
  group_wiki_repositories_checksummed_count?: string
  group_wiki_repositories_count?: string
  group_wiki_repositories_failed_count?: string
  group_wiki_repositories_registry_count?: string
  group_wiki_repositories_synced_count?: string
  group_wiki_repositories_synced_in_percentage?: string
  group_wiki_repositories_verification_failed_count?: string
  group_wiki_repositories_verification_total_count?: string
  group_wiki_repositories_verified_count?: string
  group_wiki_repositories_verified_in_percentage?: string
  health?: string
  health_status?: string
  healthy?: string
  job_artifacts_checksum_failed_count?: string
  job_artifacts_checksum_total_count?: string
  job_artifacts_checksummed_count?: string
  job_artifacts_count?: string
  job_artifacts_failed_count?: string
  job_artifacts_registry_count?: string
  job_artifacts_synced_count?: string
  job_artifacts_synced_in_percentage?: string
  job_artifacts_verification_failed_count?: string
  job_artifacts_verification_total_count?: string
  job_artifacts_verified_count?: string
  job_artifacts_verified_in_percentage?: string
  last_event_id?: string
  last_event_timestamp?: string
  last_successful_status_check_timestamp?: string
  lfs_objects_checksum_failed_count?: string
  lfs_objects_checksum_total_count?: string
  lfs_objects_checksummed_count?: string
  lfs_objects_count?: string
  lfs_objects_failed_count?: string
  lfs_objects_registry_count?: string
  lfs_objects_synced_count?: string
  lfs_objects_synced_in_percentage?: string
  lfs_objects_verification_failed_count?: string
  lfs_objects_verification_total_count?: string
  lfs_objects_verified_count?: string
  lfs_objects_verified_in_percentage?: string
  link?: Record<string, any>
  merge_request_diffs_checksum_failed_count?: string
  merge_request_diffs_checksum_total_count?: string
  merge_request_diffs_checksummed_count?: string
  merge_request_diffs_count?: string
  merge_request_diffs_failed_count?: string
  merge_request_diffs_registry_count?: string
  merge_request_diffs_synced_count?: string
  merge_request_diffs_synced_in_percentage?: string
  merge_request_diffs_verification_failed_count?: string
  merge_request_diffs_verification_total_count?: string
  merge_request_diffs_verified_count?: string
  merge_request_diffs_verified_in_percentage?: string
  missing_oauth_application?: string
  namespace?: Record<string, any>
  package_files_checksum_failed_count?: string
  package_files_checksum_total_count?: string
  package_files_checksummed_count?: string
  package_files_count?: string
  package_files_failed_count?: string
  package_files_registry_count?: string
  package_files_synced_count?: string
  package_files_synced_in_percentage?: string
  package_files_verification_failed_count?: string
  package_files_verification_total_count?: string
  package_files_verified_count?: string
  package_files_verified_in_percentage?: string
  pages_deployments_checksum_failed_count?: string
  pages_deployments_checksum_total_count?: string
  pages_deployments_checksummed_count?: string
  pages_deployments_count?: string
  pages_deployments_failed_count?: string
  pages_deployments_registry_count?: string
  pages_deployments_synced_count?: string
  pages_deployments_synced_in_percentage?: string
  pages_deployments_verification_failed_count?: string
  pages_deployments_verification_total_count?: string
  pages_deployments_verified_count?: string
  pages_deployments_verified_in_percentage?: string
  pipeline_artifacts_checksum_failed_count?: string
  pipeline_artifacts_checksum_total_count?: string
  pipeline_artifacts_checksummed_count?: string
  pipeline_artifacts_count?: string
  pipeline_artifacts_failed_count?: string
  pipeline_artifacts_registry_count?: string
  pipeline_artifacts_synced_count?: string
  pipeline_artifacts_synced_in_percentage?: string
  pipeline_artifacts_verification_failed_count?: string
  pipeline_artifacts_verification_total_count?: string
  pipeline_artifacts_verified_count?: string
  pipeline_artifacts_verified_in_percentage?: string
  project_repositories_checksum_failed_count?: string
  project_repositories_checksum_total_count?: string
  project_repositories_checksummed_count?: string
  project_repositories_count?: string
  project_repositories_failed_count?: string
  project_repositories_registry_count?: string
  project_repositories_synced_count?: string
  project_repositories_synced_in_percentage?: string
  project_repositories_verification_failed_count?: string
  project_repositories_verification_total_count?: string
  project_repositories_verified_count?: string
  project_repositories_verified_in_percentage?: string
  project_wiki_repositories_checksum_failed_count?: string
  project_wiki_repositories_checksum_total_count?: string
  project_wiki_repositories_checksummed_count?: string
  project_wiki_repositories_count?: string
  project_wiki_repositories_failed_count?: string
  project_wiki_repositories_registry_count?: string
  project_wiki_repositories_synced_count?: string
  project_wiki_repositories_synced_in_percentage?: string
  project_wiki_repositories_verification_failed_count?: string
  project_wiki_repositories_verification_total_count?: string
  project_wiki_repositories_verified_count?: string
  project_wiki_repositories_verified_in_percentage?: string
  projects_count?: string
  proxy_local_requests_event_count_weekly?: string
  proxy_remote_requests_event_count_weekly?: string
  replication_slots_count?: string
  replication_slots_max_retained_wal_byte?: string
  replication_slots_used_count?: string
  replication_slots_used_in_percentage?: string
  repositories_checked_count?: string
  repositories_checked_failed_count?: string
  repositories_checked_in_percentage?: string
  repositories_count?: string
  revision?: string
  selective_sync_type?: string
  snippet_repositories_checksum_failed_count?: string
  snippet_repositories_checksum_total_count?: string
  snippet_repositories_checksummed_count?: string
  snippet_repositories_count?: string
  snippet_repositories_failed_count?: string
  snippet_repositories_registry_count?: string
  snippet_repositories_synced_count?: string
  snippet_repositories_synced_in_percentage?: string
  snippet_repositories_verification_failed_count?: string
  snippet_repositories_verification_total_count?: string
  snippet_repositories_verified_count?: string
  snippet_repositories_verified_in_percentage?: string
  storage_shard?: Record<string, any>
  storage_shards_match?: string
  terraform_state_versions_checksum_failed_count?: string
  terraform_state_versions_checksum_total_count?: string
  terraform_state_versions_checksummed_count?: string
  terraform_state_versions_count?: string
  terraform_state_versions_failed_count?: string
  terraform_state_versions_registry_count?: string
  terraform_state_versions_synced_count?: string
  terraform_state_versions_synced_in_percentage?: string
  terraform_state_versions_verification_failed_count?: string
  terraform_state_versions_verification_total_count?: string
  terraform_state_versions_verified_count?: string
  terraform_state_versions_verified_in_percentage?: string
  updated_at?: string
  uploads_checksum_failed_count?: string
  uploads_checksum_total_count?: string
  uploads_checksummed_count?: string
  uploads_count?: string
  uploads_failed_count?: string
  uploads_registry_count?: string
  uploads_synced_count?: string
  uploads_synced_in_percentage?: string
  uploads_verification_failed_count?: string
  uploads_verification_total_count?: string
  uploads_verified_count?: string
  uploads_verified_in_percentage?: string
  version?: string
}

export interface EeApiEntitiesGeoNodeStatusCreateData {
  ci_secure_files_checksum_failed_count?: string
  ci_secure_files_checksum_total_count?: string
  ci_secure_files_checksummed_count?: string
  ci_secure_files_count?: string
  ci_secure_files_failed_count?: string
  ci_secure_files_registry_count?: string
  ci_secure_files_synced_count?: string
  ci_secure_files_synced_in_percentage?: string
  ci_secure_files_verification_failed_count?: string
  ci_secure_files_verification_total_count?: string
  ci_secure_files_verified_count?: string
  ci_secure_files_verified_in_percentage?: string
  container_repositories_checksum_failed_count?: string
  container_repositories_checksum_total_count?: string
  container_repositories_checksummed_count?: string
  container_repositories_count?: string
  container_repositories_failed_count?: string
  container_repositories_registry_count?: string
  container_repositories_replication_enabled?: string
  container_repositories_synced_count?: string
  container_repositories_synced_in_percentage?: string
  container_repositories_verification_failed_count?: string
  container_repositories_verification_total_count?: string
  container_repositories_verified_count?: string
  container_repositories_verified_in_percentage?: string
  cursor_last_event_id?: string
  cursor_last_event_timestamp?: string
  db_replication_lag_second?: string
  dependency_proxy_blobs_checksum_failed_count?: string
  dependency_proxy_blobs_checksum_total_count?: string
  dependency_proxy_blobs_checksummed_count?: string
  dependency_proxy_blobs_count?: string
  dependency_proxy_blobs_failed_count?: string
  dependency_proxy_blobs_registry_count?: string
  dependency_proxy_blobs_synced_count?: string
  dependency_proxy_blobs_synced_in_percentage?: string
  dependency_proxy_blobs_verification_failed_count?: string
  dependency_proxy_blobs_verification_total_count?: string
  dependency_proxy_blobs_verified_count?: string
  dependency_proxy_blobs_verified_in_percentage?: string
  dependency_proxy_manifests_checksum_failed_count?: string
  dependency_proxy_manifests_checksum_total_count?: string
  dependency_proxy_manifests_checksummed_count?: string
  dependency_proxy_manifests_count?: string
  dependency_proxy_manifests_failed_count?: string
  dependency_proxy_manifests_registry_count?: string
  dependency_proxy_manifests_synced_count?: string
  dependency_proxy_manifests_synced_in_percentage?: string
  dependency_proxy_manifests_verification_failed_count?: string
  dependency_proxy_manifests_verification_total_count?: string
  dependency_proxy_manifests_verified_count?: string
  dependency_proxy_manifests_verified_in_percentage?: string
  design_management_repositories_checksum_failed_count?: string
  design_management_repositories_checksum_total_count?: string
  design_management_repositories_checksummed_count?: string
  design_management_repositories_count?: string
  design_management_repositories_failed_count?: string
  design_management_repositories_registry_count?: string
  design_management_repositories_synced_count?: string
  design_management_repositories_synced_in_percentage?: string
  design_management_repositories_verification_failed_count?: string
  design_management_repositories_verification_total_count?: string
  design_management_repositories_verified_count?: string
  design_management_repositories_verified_in_percentage?: string
  geo_node_id?: string
  git_fetch_event_count_weekly?: string
  git_push_event_count_weekly?: string
  group_wiki_repositories_checksum_failed_count?: string
  group_wiki_repositories_checksum_total_count?: string
  group_wiki_repositories_checksummed_count?: string
  group_wiki_repositories_count?: string
  group_wiki_repositories_failed_count?: string
  group_wiki_repositories_registry_count?: string
  group_wiki_repositories_synced_count?: string
  group_wiki_repositories_synced_in_percentage?: string
  group_wiki_repositories_verification_failed_count?: string
  group_wiki_repositories_verification_total_count?: string
  group_wiki_repositories_verified_count?: string
  group_wiki_repositories_verified_in_percentage?: string
  health?: string
  health_status?: string
  healthy?: string
  job_artifacts_checksum_failed_count?: string
  job_artifacts_checksum_total_count?: string
  job_artifacts_checksummed_count?: string
  job_artifacts_count?: string
  job_artifacts_failed_count?: string
  job_artifacts_registry_count?: string
  job_artifacts_synced_count?: string
  job_artifacts_synced_in_percentage?: string
  job_artifacts_verification_failed_count?: string
  job_artifacts_verification_total_count?: string
  job_artifacts_verified_count?: string
  job_artifacts_verified_in_percentage?: string
  last_event_id?: string
  last_event_timestamp?: string
  last_successful_status_check_timestamp?: string
  lfs_objects_checksum_failed_count?: string
  lfs_objects_checksum_total_count?: string
  lfs_objects_checksummed_count?: string
  lfs_objects_count?: string
  lfs_objects_failed_count?: string
  lfs_objects_registry_count?: string
  lfs_objects_synced_count?: string
  lfs_objects_synced_in_percentage?: string
  lfs_objects_verification_failed_count?: string
  lfs_objects_verification_total_count?: string
  lfs_objects_verified_count?: string
  lfs_objects_verified_in_percentage?: string
  link?: Record<string, any>
  merge_request_diffs_checksum_failed_count?: string
  merge_request_diffs_checksum_total_count?: string
  merge_request_diffs_checksummed_count?: string
  merge_request_diffs_count?: string
  merge_request_diffs_failed_count?: string
  merge_request_diffs_registry_count?: string
  merge_request_diffs_synced_count?: string
  merge_request_diffs_synced_in_percentage?: string
  merge_request_diffs_verification_failed_count?: string
  merge_request_diffs_verification_total_count?: string
  merge_request_diffs_verified_count?: string
  merge_request_diffs_verified_in_percentage?: string
  missing_oauth_application?: string
  namespace?: Record<string, any>
  package_files_checksum_failed_count?: string
  package_files_checksum_total_count?: string
  package_files_checksummed_count?: string
  package_files_count?: string
  package_files_failed_count?: string
  package_files_registry_count?: string
  package_files_synced_count?: string
  package_files_synced_in_percentage?: string
  package_files_verification_failed_count?: string
  package_files_verification_total_count?: string
  package_files_verified_count?: string
  package_files_verified_in_percentage?: string
  pages_deployments_checksum_failed_count?: string
  pages_deployments_checksum_total_count?: string
  pages_deployments_checksummed_count?: string
  pages_deployments_count?: string
  pages_deployments_failed_count?: string
  pages_deployments_registry_count?: string
  pages_deployments_synced_count?: string
  pages_deployments_synced_in_percentage?: string
  pages_deployments_verification_failed_count?: string
  pages_deployments_verification_total_count?: string
  pages_deployments_verified_count?: string
  pages_deployments_verified_in_percentage?: string
  pipeline_artifacts_checksum_failed_count?: string
  pipeline_artifacts_checksum_total_count?: string
  pipeline_artifacts_checksummed_count?: string
  pipeline_artifacts_count?: string
  pipeline_artifacts_failed_count?: string
  pipeline_artifacts_registry_count?: string
  pipeline_artifacts_synced_count?: string
  pipeline_artifacts_synced_in_percentage?: string
  pipeline_artifacts_verification_failed_count?: string
  pipeline_artifacts_verification_total_count?: string
  pipeline_artifacts_verified_count?: string
  pipeline_artifacts_verified_in_percentage?: string
  project_repositories_checksum_failed_count?: string
  project_repositories_checksum_total_count?: string
  project_repositories_checksummed_count?: string
  project_repositories_count?: string
  project_repositories_failed_count?: string
  project_repositories_registry_count?: string
  project_repositories_synced_count?: string
  project_repositories_synced_in_percentage?: string
  project_repositories_verification_failed_count?: string
  project_repositories_verification_total_count?: string
  project_repositories_verified_count?: string
  project_repositories_verified_in_percentage?: string
  project_wiki_repositories_checksum_failed_count?: string
  project_wiki_repositories_checksum_total_count?: string
  project_wiki_repositories_checksummed_count?: string
  project_wiki_repositories_count?: string
  project_wiki_repositories_failed_count?: string
  project_wiki_repositories_registry_count?: string
  project_wiki_repositories_synced_count?: string
  project_wiki_repositories_synced_in_percentage?: string
  project_wiki_repositories_verification_failed_count?: string
  project_wiki_repositories_verification_total_count?: string
  project_wiki_repositories_verified_count?: string
  project_wiki_repositories_verified_in_percentage?: string
  projects_count?: string
  proxy_local_requests_event_count_weekly?: string
  proxy_remote_requests_event_count_weekly?: string
  replication_slots_count?: string
  replication_slots_max_retained_wal_byte?: string
  replication_slots_used_count?: string
  replication_slots_used_in_percentage?: string
  repositories_checked_count?: string
  repositories_checked_failed_count?: string
  repositories_checked_in_percentage?: string
  repositories_count?: string
  revision?: string
  selective_sync_type?: string
  snippet_repositories_checksum_failed_count?: string
  snippet_repositories_checksum_total_count?: string
  snippet_repositories_checksummed_count?: string
  snippet_repositories_count?: string
  snippet_repositories_failed_count?: string
  snippet_repositories_registry_count?: string
  snippet_repositories_synced_count?: string
  snippet_repositories_synced_in_percentage?: string
  snippet_repositories_verification_failed_count?: string
  snippet_repositories_verification_total_count?: string
  snippet_repositories_verified_count?: string
  snippet_repositories_verified_in_percentage?: string
  storage_shard?: Record<string, any>
  storage_shards_match?: string
  terraform_state_versions_checksum_failed_count?: string
  terraform_state_versions_checksum_total_count?: string
  terraform_state_versions_checksummed_count?: string
  terraform_state_versions_count?: string
  terraform_state_versions_failed_count?: string
  terraform_state_versions_registry_count?: string
  terraform_state_versions_synced_count?: string
  terraform_state_versions_synced_in_percentage?: string
  terraform_state_versions_verification_failed_count?: string
  terraform_state_versions_verification_total_count?: string
  terraform_state_versions_verified_count?: string
  terraform_state_versions_verified_in_percentage?: string
  updated_at?: string
  uploads_checksum_failed_count?: string
  uploads_checksum_total_count?: string
  uploads_checksummed_count?: string
  uploads_count?: string
  uploads_failed_count?: string
  uploads_registry_count?: string
  uploads_synced_count?: string
  uploads_synced_in_percentage?: string
  uploads_verification_failed_count?: string
  uploads_verification_total_count?: string
  uploads_verified_count?: string
  uploads_verified_in_percentage?: string
  version?: string
}

export interface EeApiEntitiesGeoPipelineRef {
  pipeline_ref?: any[]
}

export interface EeApiEntitiesGeoPipelineRefListMatch {
  gl_repository: any
}

export interface EeApiEntitiesIssuableMetricImage {
  created_at?: string
  file_path?: string
  filename?: string
  id?: string
  url?: string
  url_text?: string
}

export interface EeApiEntitiesIssuableMetricImageCreateData {
  issue_id: string
  project_id: string
}

export interface EeApiEntitiesIssuableMetricImageUpdateData {
  id: string
  issue_id: string
  project_id: string
}

export interface EeApiEntitiesIssuableMetricImageRemoveMatch {
  id: string
  issue_id: string
  project_id: string
}

export interface EeApiEntitiesMergeRequestApprovalState {
  approvals_required?: number
  approved?: boolean
  approved_by?: any[]
  code_owner?: boolean
  contains_hidden_group?: boolean
  eligible_approver?: any[]
  group?: any[]
  id?: number
  name?: string
  overridden?: boolean
  report_type?: string
  rule_type?: string
  section?: string
  source_rule?: Record<string, any>
  user?: any[]
}

export interface EeApiEntitiesMergeRequestApprovalStateListMatch {
  merge_request_id: string
  project_id: string
}

export interface EeApiEntitiesSshCertificate {
  created_at?: string
  id?: number
  key?: string
  title?: string
}

export interface EeApiEntitiesSshCertificateListMatch {
  group_id: string
}

export interface EeApiEntitiesSshCertificateCreateData {
  group_id: string
}

export interface Environment {
}

export interface EnvironmentCreateData {
  project_id: string
}

export interface EnvironmentRemoveMatch {
  id: string
  project_id: string
}

export interface ErrorTrackingClientKey {
}

export interface ErrorTrackingClientKeyRemoveMatch {
  id: string
  project_id: string
}

export interface Feature {
}

export interface FeatureRemoveMatch {
  id: string
}

export interface FeatureFlag {
}

export interface FeatureFlagLoadMatch {
  project_id: string
}

export interface FeatureFlagCreateData {
  unleash_id: string
}

export interface FeatureFlagRemoveMatch {
  id: string
  project_id: string
}

export interface FeatureFlagsUserList {
}

export interface FeatureFlagsUserListRemoveMatch {
  id: string
  project_id: string
}

export interface FreezePeriod {
}

export interface FreezePeriodRemoveMatch {
  id: string
  project_id: string
}

export interface GenericPackage {
}

export interface GenericPackageLoadMatch {
  file_name: any
  generic_id: string
  project_id: string
}

export interface GenericPackageUpdateData {
  file_name: any
  generic_id: string
  project_id: string
}

export interface Geo {
}

export interface GeoLoadMatch {
  replicable_id: string
  replicable_name: any
}

export interface GeoCreateData {
  node_proxy_id?: string
}

export interface GoProxy {
}

export interface GoProxyLoadMatch {
  module_version?: any
  project_id: string
}

export interface Group {
}

export interface GroupLoadMatch {
  filename?: any
  id: string
  secret?: any
  upload_id?: string
}

export interface GroupCreateData {
  id: string
}

export interface GroupUpdateData {
  id: string
  key?: string
  member_id?: string
}

export interface GroupRemoveMatch {
  filename?: any
  id: string
  secret?: any
  group_id?: string
  key?: string
  ssh_certificates_id?: string
  upload_id?: string
  user_id?: string
}

export interface GroupAvatar {
}

export interface GroupAvatarLoadMatch {
  id: string
}

export interface GroupExport {
}

export interface GroupExportLoadMatch {
  group_id: string
}

export interface GroupExportCreateData {
  id: string
}

export interface GroupImport {
}

export interface GroupImportCreateData {
}

export interface HelmPackage {
}

export interface HelmPackageLoadMatch {
  file_name?: any
  helm_id?: string
  project_id: string
  channel?: any
}

export interface HelmPackageCreateData {
  channel?: any
  project_id: string
  api_id?: string
}

export interface Hook {
}

export interface HookCreateData {
  id: string
}

export interface HookUpdateData {
  id: string
  key: string
}

export interface HookRemoveMatch {
  id: string
  key: string
}

export interface Import {
}

export interface ImportCreateData {
}

export interface Integration {
}

export interface IntegrationCreateData {
  project_id?: string
}

export interface IntegrationRemoveMatch {
  group_id?: string
  id?: string
  project_id?: string
  slug?: string
}

export interface Invitation {
}

export interface InvitationRemoveMatch {
  group_id?: string
  id: string
  project_id?: string
}

export interface IssueLink {
}

export interface IssueLinkRemoveMatch {
  id: string
  issue_id: string
  project_id: string
}

export interface IssuesStatistic {
}

export interface IssuesStatisticLoadMatch {
}

export interface Job {
}

export interface JobLoadMatch {
  id: string
}

export interface JobCreateData {
  id?: string
}

export interface JobUpdateData {
  id: string
}

export interface MavenPackage {
}

export interface MavenPackageLoadMatch {
  file_name: any
  group_id?: string
  project_id?: string
}

export interface MavenPackageUpdateData {
  file_name: any
  project_id: string
}

export interface Member {
}

export interface MemberRemoveMatch {
  group_id?: string
  id: string
  project_id?: string
}

export interface MergeRequest {
}

export interface MergeRequestLoadMatch {
  id: string
  project_id: string
}

export interface MergeRequestUpdateData {
  id: string
  project_id: string
}

export interface MergeRequestRemoveMatch {
  id: string
  project_id: string
}

export interface Metadata {
  enterprise?: boolean
  kas?: Record<string, any>
  revision?: string
  version?: string
}

export interface MetadataLoadMatch {
  enterprise?: boolean
  kas?: Record<string, any>
  revision?: string
  version?: string
}

export interface Migration {
}

export interface MigrationCreateData {
  timestamp: any
}

export interface MlModelRegistry {
}

export interface MlModelRegistryLoadMatch {
  file_name: any
  ml_model_id: string
  project_id: string
}

export interface MlModelRegistryUpdateData {
  file_name: any
  ml_model_id: string
  project_id: string
}

export interface Namespace {
}

export interface NamespaceRemoveMatch {
  id: string
}

export interface Npm {
}

export interface NpmUpdateData {
  id: string
  project_id: string
}

export interface NpmPackage {
}

export interface NpmPackageLoadMatch {
  project_id: string
}

export interface NpmPackageCreateData {
  group_id?: string
  project_id?: string
}

export interface NpmPackageUpdateData {
  group_id?: string
  tag: any
  project_id?: string
}

export interface NpmPackageRemoveMatch {
  group_id?: string
  tag: any
  project_id?: string
}

export interface Nuget {
}

export interface NugetUpdateData {
  project_id: string
}

export interface NugetPackage {
  catalog_entry?: Record<string, any>
  count?: number
  id?: string
  item?: any[]
  lower?: string
  package_content?: string
  upper?: string
}

export interface NugetPackageLoadMatch {
  group_id?: string
  project_id?: string
}

export interface NugetPackageListMatch {
  group_id?: string
  project_id?: string
}

export interface NugetPackageUpdateData {
  project_id: string
}

export interface NugetPackageRemoveMatch {
  project_id: string
}

export interface PackageFile {
}

export interface PackageFileLoadMatch {
  id: string
  package_id: string
  project_id: string
}

export interface PackageFileRemoveMatch {
  id: string
  package_id: string
  project_id: string
}

export interface Page {
}

export interface PageLoadMatch {
  project_id: string
}

export interface PageUpdateData {
  project_id: string
}

export interface PageRemoveMatch {
  project_id: string
}

export interface Participant {
  key?: string
  value?: string
}

export interface ParticipantListMatch {
  issue_id?: string
  project_id: string
  merge_request_id?: string
}

export interface PersonalAccessToken {
}

export interface PersonalAccessTokenRemoveMatch {
  id: string
}

export interface Project {
  before_sha?: string
  committed_at?: string
  coverage?: number
  created_at?: string
  detailed_status?: Record<string, any>
  duration?: number
  finished_at?: string
  id?: number
  iid?: number
  name?: string
  project_id?: number
  queued_duration?: number
  ref?: string
  sha?: string
  source?: string
  started_at?: string
  status?: string
  tag?: boolean
  updated_at?: string
  user?: Record<string, any>
  web_url?: string
  yaml_error?: string
}

export interface ProjectLoadMatch {
  artifact_id?: string
  id: string
  file_path?: any
  hook_id?: string
  job_id?: string
  ref_name?: any
  filename?: any
  secret?: any
  issue_id?: string
  pipeline_id?: string
  sha?: any
  upload_id?: string
}

export interface ProjectCreateData {
  event_id?: string
  hook_id?: string
  id: string
  file_path?: any
  trigger?: any
  issue_id?: string
  merge_request_id?: string
  pipeline_schedule_id?: string
  project_id?: string
}

export interface ProjectUpdateData {
  hook_id?: string
  id: string
  key?: string
  domain?: any
  draft_note_id?: string
  merge_request_id?: string
  file_path?: any
  pipeline_id?: string
}

export interface ProjectRemoveMatch {
  file_path?: any
  id: string
  draft_note_id?: string
  merge_request_id?: string
  filename?: any
  secret?: any
  hook_id?: string
  key?: string
  pipeline_schedule_id?: string
  domain?: any
  group_id?: string
  issue_iid?: any
  job_id?: string
  name?: string
  package_protection_rule_id?: string
  pipeline_id?: string
  protection_rule_id?: string
  trigger_id?: string
  upload_id?: string
}

export interface ProjectAvatar {
}

export interface ProjectAvatarLoadMatch {
  id: string
}

export interface ProjectEntity {
}

export interface ProjectEntityCreateData {
}

export interface ProjectExport {
}

export interface ProjectExportLoadMatch {
  project_id: string
}

export interface ProjectExportCreateData {
  id: string
}

export interface ProjectHook {
}

export interface ProjectHookRemoveMatch {
  id: string
  project_id: string
}

export interface ProjectImport {
}

export interface ProjectImportCreateData {
}

export interface ProjectImportEntity {
  forked?: boolean
  full_name?: string
  full_path?: string
  human_import_status_name?: string
  id?: number
  import_error?: string
  import_source?: string
  import_status?: string
  import_warning?: string
  name?: string
  provider_link?: string
  refs_url?: string
  relation_type?: string
}

export interface ProjectImportEntityCreateData {
  forked?: boolean
  full_name?: string
  full_path?: string
  human_import_status_name?: string
  id?: number
  import_error?: string
  import_source?: string
  import_status?: string
  import_warning?: string
  name?: string
  provider_link?: string
  refs_url?: string
  relation_type?: string
}

export interface ProjectPackage {
}

export interface ProjectPackageRemoveMatch {
  id: string
  project_id: string
}

export interface ProjectSnippet {
}

export interface ProjectSnippetRemoveMatch {
  id: string
  project_id: string
}

export interface ProjectsJobTokenScope {
}

export interface ProjectsJobTokenScopeUpdateData {
  project_id: string
}

export interface ProjectsJobTokenScopeRemoveMatch {
  project_id: string
  target_group_id?: string
  target_project_id?: string
}

export interface ProtectedTag {
}

export interface ProtectedTagRemoveMatch {
  id: string
  project_id: string
}

export interface Pypi {
}

export interface PypiCreateData {
  project_id: string
}

export interface PypiPackage {
}

export interface PypiPackageLoadMatch {
  group_id?: string
  sha256?: any
  project_id?: string
}

export interface PypiPackageCreateData {
  project_id: string
}

export interface Release {
}

export interface ReleaseLoadMatch {
  project_id: string
}

export interface ReleaseRemoveMatch {
  id: string
  project_id: string
}

export interface ReleaseLink {
}

export interface ReleaseLinkRemoveMatch {
  id: string
  project_id: string
  release_id: string
}

export interface RemoteMirror {
}

export interface RemoteMirrorLoadMatch {
  id: string
  project_id: string
}

export interface RemoteMirrorCreateData {
  id: string
  project_id: string
}

export interface RemoteMirrorRemoveMatch {
  id: string
  project_id: string
}

export interface Rpm {
}

export interface RpmCreateData {
  project_id: string
}

export interface RpmPackage {
}

export interface RpmPackageLoadMatch {
  project_id: string
}

export interface RpmPackageCreateData {
  project_id: string
}

export interface Rubygem {
}

export interface RubygemLoadMatch {
  id: string
  project_id: string
}

export interface RubygemPackage {
}

export interface RubygemPackageLoadMatch {
  file_name?: any
  project_id: string
}

export interface RubygemPackageCreateData {
  project_id: string
}

export interface Runner {
}

export interface RunnerCreateData {
}

export interface RunnerRemoveMatch {
  id?: string
  project_id?: string
}

export interface Search {
}

export interface SearchLoadMatch {
}

export interface SecureFile {
}

export interface SecureFileLoadMatch {
  id: string
  project_id: string
}

export interface SecureFileRemoveMatch {
  id: string
  project_id: string
}

export interface Slack {
}

export interface SlackCreateData {
}

export interface Snippet {
}

export interface SnippetLoadMatch {
  file_id: string
  file_path: any
  id: string
}

export interface SnippetRemoveMatch {
  id: string
}

export interface Starrer {
  avatar_path?: string
  avatar_url?: string
  custom_attribute?: any[]
  id?: number
  locked?: boolean
  name?: string
  public_email?: string
  state?: string
  username?: string
  web_url?: string
}

export interface StarrerListMatch {
  project_id: string
}

export interface SystemHook {
}

export interface SystemHookRemoveMatch {
  id: string
}

export interface Tag {
}

export interface TagRemoveMatch {
  id: string
  project_id: string
}

export interface TerraformRegistry {
}

export interface TerraformRegistryLoadMatch {
  module_id?: string
  module_system: any
  project_id?: string
  id?: string
  module_name?: any
  v1_id?: string
}

export interface TerraformRegistryUpdateData {
  module_id: string
  module_system: any
  project_id: string
}

export interface TerraformState {
}

export interface TerraformStateLoadMatch {
  project_id: string
  serial?: any
  state_id?: string
  id?: string
}

export interface TerraformStateCreateData {
  name?: string
  project_id: string
  id?: string
}

export interface TerraformStateRemoveMatch {
  name?: string
  project_id: string
  serial?: any
  state_id?: string
  id?: string
}

export interface TestReport {
  error_count?: number
  failed_count?: number
  name?: string
  skipped_count?: number
  success_count?: number
  suite_error?: string
  test_case?: any[]
  total_count?: number
  total_time?: number
}

export interface TestReportListMatch {
  pipeline_id: string
  project_id: string
}

export interface TestReportSummary {
  test_suite?: Record<string, any>
  total?: Record<string, any>
}

export interface TestReportSummaryLoadMatch {
  pipeline_id: string
  project_id: string
}

export interface Topic {
}

export interface TopicRemoveMatch {
  id: string
}

export interface UnleashApi {
}

export interface UnleashApiLoadMatch {
  unleash_id: string
}

export interface UsageData {
}

export interface UsageDataLoadMatch {
}

export interface UsageDataCreateData {
}

export interface User {
  avatar_path?: string
  avatar_url?: string
  custom_attribute?: any[]
  id?: number
  locked?: boolean
  name?: string
  public_email?: string
  state?: string
  username?: string
  web_url?: string
}

export interface UserListMatch {
  project_id: string
}

export interface WebCommit {
}

export interface WebCommitLoadMatch {
}

export interface Wiki {
}

export interface WikiRemoveMatch {
  group_id?: string
  id: string
  project_id?: string
}

