export interface AccessRequest {
    id?: string;
}
export interface AccessRequestRemoveMatch {
    group_id?: string;
    id: string;
    project_id?: string;
}
export interface AlertManagement {
}
export interface AlertManagementCreateData {
    alert_management_alert_id: string;
    project_id: string;
}
export interface AlertManagementRemoveMatch {
    alert_management_alert_id: string;
    metric_image_id: string;
    project_id: string;
}
export interface ApiEntitiesAccessRequester {
    avatar_path?: string;
    avatar_url?: string;
    custom_attributes?: any[];
    id?: number;
    key?: string;
    locked?: boolean;
    name?: string;
    public_email?: string;
    requested_at?: string;
    state?: string;
    username?: string;
    value?: string;
    web_url?: string;
}
export interface ApiEntitiesAccessRequesterListMatch {
    group_id: string;
    page?: number;
    per_page?: number;
}
export interface ApiEntitiesAccessRequesterCreateData {
    group_id: string;
    avatar_path?: string;
    avatar_url?: string;
    custom_attributes?: any[];
    id?: number;
    key?: string;
    locked?: boolean;
    name?: string;
    public_email?: string;
    requested_at?: string;
    state?: string;
    username?: string;
    value?: string;
    web_url?: string;
}
export interface ApiEntitiesAccessRequesterUpdateData {
    access_request_id: string;
    group_id?: string;
    put_api_v4_groups_id_access_requests_user_id_approve?: Record<string, any>;
    project_id?: string;
    put_api_v4_projects_id_access_requests_user_id_approve?: Record<string, any>;
    avatar_path?: string;
    avatar_url?: string;
    custom_attributes?: any[];
    id?: number;
    key?: string;
    locked?: boolean;
    name?: string;
    public_email?: string;
    requested_at?: string;
    state?: string;
    username?: string;
    value?: string;
    web_url?: string;
}
export interface ApiEntitiesAppearance {
    description?: string;
    email_header_and_footer_enabled?: string;
    favicon?: string;
    footer_message?: string;
    header_logo?: string;
    header_message?: string;
    logo?: string;
    member_guidelines?: string;
    message_background_color?: string;
    message_font_color?: string;
    new_project_guidelines?: string;
    profile_image_guidelines?: string;
    pwa_description?: string;
    pwa_icon?: string;
    pwa_name?: string;
    pwa_short_name?: string;
    title?: string;
}
export interface ApiEntitiesAppearanceLoadMatch {
    description?: string;
    email_header_and_footer_enabled?: string;
    favicon?: string;
    footer_message?: string;
    header_logo?: string;
    header_message?: string;
    logo?: string;
    member_guidelines?: string;
    message_background_color?: string;
    message_font_color?: string;
    new_project_guidelines?: string;
    profile_image_guidelines?: string;
    pwa_description?: string;
    pwa_icon?: string;
    pwa_name?: string;
    pwa_short_name?: string;
    title?: string;
}
export interface ApiEntitiesAppearanceUpdateData {
    description?: string;
    email_header_and_footer_enabled?: any;
    favicon?: any;
    footer_message?: any;
    header_logo?: any;
    header_message?: any;
    logo?: any;
    member_guideline?: any;
    message_background_color?: any;
    message_font_color?: any;
    new_project_guideline?: any;
    profile_image_guideline?: any;
    pwa_description?: any;
    pwa_icon?: any;
    pwa_name?: any;
    pwa_short_name?: any;
    title?: string;
    member_guidelines?: string;
    new_project_guidelines?: string;
    profile_image_guidelines?: string;
}
export interface ApiEntitiesApplication {
    application_id?: string;
    application_name?: string;
    callback_url?: string;
    confidential?: boolean;
    id?: string;
}
export interface ApiEntitiesApplicationListMatch {
    application_id?: string;
    application_name?: string;
    callback_url?: string;
    confidential?: boolean;
    id?: string;
}
export interface ApiEntitiesApplicationStatistic {
    active_users?: number;
    forks?: number;
    groups?: number;
    issues?: number;
    merge_requests?: number;
    milestones?: number;
    notes?: number;
    projects?: number;
    snippets?: number;
    ssh_keys?: number;
    users?: number;
}
export interface ApiEntitiesApplicationStatisticLoadMatch {
    active_users?: number;
    forks?: number;
    groups?: number;
    issues?: number;
    merge_requests?: number;
    milestones?: number;
    notes?: number;
    projects?: number;
    snippets?: number;
    ssh_keys?: number;
    users?: number;
}
export interface ApiEntitiesApplicationWithSecret {
    application_id?: string;
    application_name?: string;
    callback_url?: string;
    confidential?: boolean;
    id?: string;
    secret?: string;
}
export interface ApiEntitiesApplicationWithSecretCreateData {
    post_api_v4_application: Record<string, any>;
    application_id?: string;
    application_name?: string;
    callback_url?: string;
    confidential?: boolean;
    id?: string;
    secret?: string;
}
export interface ApiEntitiesAvatar {
    avatar_url?: string;
}
export interface ApiEntitiesAvatarLoadMatch {
    email: string;
    size?: number;
}
export interface ApiEntitiesAwardEmoji {
    avatar_path?: string;
    avatar_url?: string;
    awardable_id?: number;
    awardable_type?: string;
    created_at?: string;
    custom_attributes?: any[];
    id?: number;
    locked?: boolean;
    name?: string;
    public_email?: string;
    state?: string;
    updated_at?: string;
    url?: string;
    user?: Record<string, any>;
    username?: string;
    web_url?: string;
}
export interface ApiEntitiesAwardEmojiLoadMatch {
    epic_id?: string;
    group_id?: string;
    id: string;
    note_id?: string;
    issue_id?: string;
    project_id?: string;
    merge_request_id?: string;
    snippet_id?: string;
}
export interface ApiEntitiesAwardEmojiListMatch {
    epic_id: string;
    group_id: string;
    page?: number;
    per_page?: number;
}
export interface ApiEntitiesAwardEmojiCreateData {
    epic_id: string;
    group_id: string;
    post_api_v4_groups_id_epics_epic_iid_award_emoji: Record<string, any>;
    avatar_path?: string;
    avatar_url?: string;
    awardable_id?: number;
    awardable_type?: string;
    created_at?: string;
    custom_attributes?: any[];
    id?: number;
    locked?: boolean;
    name?: string;
    public_email?: string;
    state?: string;
    updated_at?: string;
    url?: string;
    user?: Record<string, any>;
    username?: string;
    web_url?: string;
}
export interface ApiEntitiesBadge {
    id?: string;
    image_url?: string;
    kind?: string;
    link_url?: string;
    name?: string;
    rendered_image_url?: string;
    rendered_link_url?: string;
}
export interface ApiEntitiesBadgeLoadMatch {
    group_id?: string;
    id: string;
    project_id?: string;
}
export interface ApiEntitiesBadgeListMatch {
    group_id: string;
    name?: string;
    page?: number;
    per_page?: number;
}
export interface ApiEntitiesBadgeCreateData {
    group_id: string;
    post_api_v4_groups_id_badge: Record<string, any>;
    id?: string;
    image_url?: string;
    kind?: string;
    link_url?: string;
    name?: string;
    rendered_image_url?: string;
    rendered_link_url?: string;
}
export interface ApiEntitiesBadgeUpdateData {
    group_id?: string;
    id: string;
    put_api_v4_groups_id_badges_badge_id?: Record<string, any>;
    project_id?: string;
    put_api_v4_projects_id_badges_badge_id?: Record<string, any>;
    image_url?: string;
    kind?: string;
    link_url?: string;
    name?: string;
    rendered_image_url?: string;
    rendered_link_url?: string;
}
export interface ApiEntitiesBasicBadgeDetail {
    image_url?: string;
    link_url?: string;
    name?: string;
    rendered_image_url?: string;
    rendered_link_url?: string;
}
export interface ApiEntitiesBasicBadgeDetailLoadMatch {
    group_id?: string;
    image_url: any;
    link_url: any;
    project_id?: string;
}
export interface ApiEntitiesBasicGroupDetail {
}
export interface ApiEntitiesBasicGroupDetailCreateData {
    project_id: string;
    post_api_v4_projects_id_job_token_scope_groups_allowlist: Record<string, any>;
}
export interface ApiEntitiesBasicProjectDetail {
    avatar_url?: string;
    created_at?: string;
    custom_attributes?: Record<string, any>;
    default_branch?: string;
    description?: string;
    forks_count?: number;
    http_url_to_repo?: string;
    id?: number;
    last_activity_at?: string;
    license?: Record<string, any>;
    license_url?: string;
    name?: string;
    name_with_namespace?: string;
    namespace?: Record<string, any>;
    path?: string;
    path_with_namespace?: string;
    readme_url?: string;
    repository_storage?: string;
    ssh_url_to_repo?: string;
    star_count?: number;
    tag_list?: any[];
    topics?: any[];
    visibility?: string;
    web_url?: string;
}
export interface ApiEntitiesBasicProjectDetailListMatch {
    active?: boolean;
    archived?: boolean;
    id_after?: any;
    id_before?: any;
    imported?: any;
    include_hidden?: any;
    include_pending_delete?: any;
    last_activity_after?: any;
    last_activity_before?: any;
    marked_for_deletion_on?: any;
    membership?: any;
    min_access_level?: any;
    order_by?: any;
    owned?: any;
    page?: number;
    per_page?: number;
    repository_checksum_failed?: any;
    repository_storage?: any;
    search?: any;
    search_namespace?: any;
    simple?: any;
    sort?: any;
    starred?: any;
    statistic?: any;
    topic?: any;
    topic_id?: string;
    updated_after?: any;
    updated_before?: any;
    visibility?: any;
    wiki_checksum_failed?: any;
    with_custom_attribute?: any;
    with_issues_enabled?: any;
    with_merge_requests_enabled?: any;
    with_programming_language?: any;
}
export interface ApiEntitiesBasicProjectDetailCreateData {
    project_id: string;
    post_api_v4_projects_id_job_token_scope_allowlist: Record<string, any>;
    avatar_url?: string;
    created_at?: string;
    custom_attributes?: Record<string, any>;
    default_branch?: string;
    description?: string;
    forks_count?: number;
    http_url_to_repo?: string;
    id?: number;
    last_activity_at?: string;
    license?: Record<string, any>;
    license_url?: string;
    name?: string;
    name_with_namespace?: string;
    namespace?: Record<string, any>;
    path?: string;
    path_with_namespace?: string;
    readme_url?: string;
    repository_storage?: string;
    ssh_url_to_repo?: string;
    star_count?: number;
    tag_list?: any[];
    topics?: any[];
    visibility?: string;
    web_url?: string;
}
export interface ApiEntitiesBasicRef {
    name?: string;
    type?: string;
}
export interface ApiEntitiesBasicRefListMatch {
    project_id: string;
    sha: any;
    page?: number;
    per_page?: number;
    type?: any;
}
export interface ApiEntitiesBasicSuccess {
}
export interface ApiEntitiesBasicSuccessCreateData {
    post_api_v4_integrations_jira_connect_subscription: Record<string, any>;
}
export interface ApiEntitiesBatchedBackgroundMigration {
    column_name?: string;
    created_at?: string;
    id?: string;
    job_class_name?: string;
    progress?: number;
    status?: string;
    table_name?: string;
}
export interface ApiEntitiesBatchedBackgroundMigrationLoadMatch {
    id: string;
    database?: any;
}
export interface ApiEntitiesBatchedBackgroundMigrationListMatch {
    database?: any;
    job_class_name?: any;
}
export interface ApiEntitiesBatchedBackgroundMigrationUpdateData {
    batched_background_migration_id: string;
    put_api_v4_admin_batched_background_migrations_id_pause?: Record<string, any>;
    put_api_v4_admin_batched_background_migrations_id_resume?: Record<string, any>;
    column_name?: string;
    created_at?: string;
    id?: string;
    job_class_name?: string;
    progress?: number;
    status?: string;
    table_name?: string;
}
export interface ApiEntitiesBranch {
    author_email?: string;
    author_name?: string;
    authored_date?: string;
    can_push?: boolean;
    commit?: Record<string, any>;
    committed_date?: string;
    committer_email?: string;
    committer_name?: string;
    created_at?: string;
    default?: boolean;
    developers_can_merge?: boolean;
    developers_can_push?: boolean;
    extended_trailers?: Record<string, any>;
    id?: string;
    merged?: boolean;
    message?: string;
    name?: string;
    parent_ids?: any[];
    protected?: boolean;
    short_id?: string;
    title?: string;
    trailers?: Record<string, any>;
    web_url?: string;
}
export interface ApiEntitiesBranchLoadMatch {
    id: string;
    project_id: string;
}
export interface ApiEntitiesBranchListMatch {
    project_id: string;
    page?: number;
    page_token?: any;
    per_page?: number;
    regex?: any;
    search?: any;
    sort?: any;
}
export interface ApiEntitiesBranchCreateData {
    project_id: string;
    post_api_v4_projects_id_repository_branch: Record<string, any>;
    author_email?: string;
    author_name?: string;
    authored_date?: string;
    can_push?: boolean;
    commit?: Record<string, any>;
    committed_date?: string;
    committer_email?: string;
    committer_name?: string;
    created_at?: string;
    default?: boolean;
    developers_can_merge?: boolean;
    developers_can_push?: boolean;
    extended_trailers?: Record<string, any>;
    id?: string;
    merged?: boolean;
    message?: string;
    name?: string;
    parent_ids?: any[];
    protected?: boolean;
    short_id?: string;
    title?: string;
    trailers?: Record<string, any>;
    web_url?: string;
}
export interface ApiEntitiesBranchUpdateData {
    branch_id: string;
    project_id: string;
    put_api_v4_projects_id_repository_branches_branch_protect?: Record<string, any>;
    author_email?: string;
    author_name?: string;
    authored_date?: string;
    can_push?: boolean;
    commit?: Record<string, any>;
    committed_date?: string;
    committer_email?: string;
    committer_name?: string;
    created_at?: string;
    default?: boolean;
    developers_can_merge?: boolean;
    developers_can_push?: boolean;
    extended_trailers?: Record<string, any>;
    id?: string;
    merged?: boolean;
    message?: string;
    name?: string;
    parent_ids?: any[];
    protected?: boolean;
    short_id?: string;
    title?: string;
    trailers?: Record<string, any>;
    web_url?: string;
}
export interface ApiEntitiesBulkImport {
    bulk_import_id?: number;
    created_at?: string;
    destination_full_path?: string;
    destination_name?: string;
    destination_namespace?: string;
    destination_slug?: string;
    entity_type?: string;
    failures?: any[];
    has_failures?: boolean;
    id?: number;
    migrate_memberships?: boolean;
    migrate_projects?: boolean;
    namespace_id?: number;
    parent_id?: number;
    project_id?: number;
    source_full_path?: string;
    source_type?: string;
    source_url?: string;
    stats?: Record<string, any>;
    status?: string;
    updated_at?: string;
}
export interface ApiEntitiesBulkImportLoadMatch {
    id: string;
}
export interface ApiEntitiesBulkImportListMatch {
    page?: number;
    per_page?: number;
    sort?: any;
    status?: any;
}
export interface ApiEntitiesBulkImportCreateData {
    configuration_access_token: any;
    configuration_url: any;
    entities_destination_name?: any;
    entities_destination_namespace: any;
    entities_destination_slug?: any;
    entities_migrate_membership?: any;
    entities_migrate_project?: any;
    entities_source_full_path: any;
    entities_source_type: any;
    bulk_import_id?: number;
    created_at?: string;
    destination_full_path?: string;
    destination_name?: string;
    destination_namespace?: string;
    destination_slug?: string;
    entity_type?: string;
    failures?: any[];
    has_failures?: boolean;
    id?: number;
    migrate_memberships?: boolean;
    migrate_projects?: boolean;
    namespace_id?: number;
    parent_id?: number;
    project_id?: number;
    source_full_path?: string;
    source_type?: string;
    source_url?: string;
    stats?: Record<string, any>;
    status?: string;
    updated_at?: string;
}
export interface ApiEntitiesBulkImportsEntityFailure {
    correlation_id_value?: string;
    exception_class?: string;
    exception_message?: string;
    relation?: string;
    source_title?: string;
    source_url?: string;
}
export interface ApiEntitiesBulkImportsEntityFailureLoadMatch {
    bulk_import_id: string;
    entity_id: string;
}
export interface ApiEntitiesBulkImportsExportStatus {
    batched?: boolean;
    batches?: Record<string, any>;
    batches_count?: number;
    error?: string;
    relation?: string;
    status?: string;
    total_objects_count?: number;
    updated_at?: string;
}
export interface ApiEntitiesBulkImportsExportStatusListMatch {
    group_id: string;
    relation?: any;
}
export interface ApiEntitiesChangelog {
    notes?: string;
}
export interface ApiEntitiesChangelogLoadMatch {
    project_id: string;
    config_file?: any;
    config_file_ref?: any;
    date?: any;
    from?: any;
    to?: any;
    trailer?: any;
    version: any;
}
export interface ApiEntitiesCiBridge {
    allow_failure?: boolean;
    commit?: Record<string, any>;
    coverage?: number;
    created_at?: string;
    downstream_pipeline?: Record<string, any>;
    duration?: number;
    erased_at?: string;
    failure_reason?: string;
    finished_at?: string;
    id?: number;
    name?: string;
    pipeline?: Record<string, any>;
    project?: Record<string, any>;
    queued_duration?: number;
    ref?: string;
    stage?: string;
    started_at?: string;
    status?: string;
    tag?: boolean;
    user?: Record<string, any>;
    web_url?: string;
}
export interface ApiEntitiesCiBridgeListMatch {
    pipeline_id: string;
    project_id: string;
    page?: number;
    per_page?: number;
    scope?: any;
}
export interface ApiEntitiesCiCatalogResourcesVersion {
}
export interface ApiEntitiesCiCatalogResourcesVersionCreateData {
    project_id: string;
    post_api_v4_projects_id_catalog_publish: Record<string, any>;
}
export interface ApiEntitiesCiJob {
    allow_failure?: boolean;
    archived?: boolean;
    artifacts?: any[];
    artifacts_expire_at?: string;
    artifacts_file?: Record<string, any>;
    commit?: Record<string, any>;
    coverage?: number;
    created_at?: string;
    duration?: number;
    erased_at?: string;
    failure_reason?: string;
    file_format?: string;
    file_type?: string;
    filename?: string;
    finished_at?: string;
    id?: number;
    name?: string;
    pipeline?: Record<string, any>;
    project?: Record<string, any>;
    queued_duration?: number;
    ref?: string;
    runner?: Record<string, any>;
    runner_manager?: Record<string, any>;
    size?: number;
    stage?: string;
    started_at?: string;
    status?: string;
    tag?: boolean;
    tag_list?: any[];
    user?: Record<string, any>;
    web_url?: string;
}
export interface ApiEntitiesCiJobLoadMatch {
    id: string;
    project_id: string;
}
export interface ApiEntitiesCiJobListMatch {
    allow_failure?: boolean;
    archived?: boolean;
    artifacts?: any[];
    artifacts_expire_at?: string;
    artifacts_file?: Record<string, any>;
    commit?: Record<string, any>;
    coverage?: number;
    created_at?: string;
    duration?: number;
    erased_at?: string;
    failure_reason?: string;
    file_format?: string;
    file_type?: string;
    filename?: string;
    finished_at?: string;
    id?: number;
    name?: string;
    pipeline?: Record<string, any>;
    project?: Record<string, any>;
    queued_duration?: number;
    ref?: string;
    runner?: Record<string, any>;
    runner_manager?: Record<string, any>;
    size?: number;
    stage?: string;
    started_at?: string;
    status?: string;
    tag?: boolean;
    tag_list?: any[];
    user?: Record<string, any>;
    web_url?: string;
}
export interface ApiEntitiesCiJobCreateData {
    job_id: string;
    project_id: string;
    post_api_v4_projects_id_jobs_job_id_cancel?: Record<string, any>;
    allow_failure?: boolean;
    archived?: boolean;
    artifacts?: any[];
    artifacts_expire_at?: string;
    artifacts_file?: Record<string, any>;
    commit?: Record<string, any>;
    coverage?: number;
    created_at?: string;
    duration?: number;
    erased_at?: string;
    failure_reason?: string;
    file_format?: string;
    file_type?: string;
    filename?: string;
    finished_at?: string;
    id?: number;
    name?: string;
    pipeline?: Record<string, any>;
    project?: Record<string, any>;
    queued_duration?: number;
    ref?: string;
    runner?: Record<string, any>;
    runner_manager?: Record<string, any>;
    size?: number;
    stage?: string;
    started_at?: string;
    status?: string;
    tag?: boolean;
    tag_list?: any[];
    user?: Record<string, any>;
    web_url?: string;
}
export interface ApiEntitiesCiJobBasic {
    allow_failure?: boolean;
    commit?: Record<string, any>;
    coverage?: number;
    created_at?: string;
    duration?: number;
    erased_at?: string;
    failure_reason?: string;
    finished_at?: string;
    id?: number;
    name?: string;
    pipeline?: Record<string, any>;
    project?: Record<string, any>;
    queued_duration?: number;
    ref?: string;
    stage?: string;
    started_at?: string;
    status?: string;
    tag?: boolean;
    user?: Record<string, any>;
    web_url?: string;
}
export interface ApiEntitiesCiJobBasicListMatch {
    key: string;
    project_id: string;
    page?: number;
    per_page?: number;
}
export interface ApiEntitiesCiJobBasicCreateData {
    job_id: string;
    project_id: string;
    post_api_v4_projects_id_jobs_job_id_play: Record<string, any>;
    allow_failure?: boolean;
    commit?: Record<string, any>;
    coverage?: number;
    created_at?: string;
    duration?: number;
    erased_at?: string;
    failure_reason?: string;
    finished_at?: string;
    id?: number;
    name?: string;
    pipeline?: Record<string, any>;
    project?: Record<string, any>;
    queued_duration?: number;
    ref?: string;
    stage?: string;
    started_at?: string;
    status?: string;
    tag?: boolean;
    user?: Record<string, any>;
    web_url?: string;
}
export interface ApiEntitiesCiJobBasicWithProject {
    allow_failure?: boolean;
    commit?: Record<string, any>;
    coverage?: number;
    created_at?: string;
    duration?: number;
    erased_at?: string;
    failure_reason?: string;
    finished_at?: string;
    id?: number;
    name?: string;
    pipeline?: Record<string, any>;
    project?: Record<string, any>;
    queued_duration?: number;
    ref?: string;
    stage?: string;
    started_at?: string;
    status?: string;
    tag?: boolean;
    user?: Record<string, any>;
    web_url?: string;
}
export interface ApiEntitiesCiJobBasicWithProjectLoadMatch {
    runner_id: string;
    cursor?: any;
    order_by?: any;
    page?: number;
    per_page?: number;
    sort?: any;
    status?: any;
    system_id?: string;
}
export interface ApiEntitiesCiLintResult {
    blob?: string;
    context_project?: string;
    context_sha?: string;
    errors?: any[];
    extra?: Record<string, any>;
    includes?: any[];
    jobs?: any[];
    location?: string;
    merged_yaml?: string;
    raw?: string;
    type?: string;
    valid?: boolean;
    warnings?: any[];
}
export interface ApiEntitiesCiLintResultListMatch {
    project_id: string;
    content_ref?: any;
    dry_run?: any;
    dry_run_ref?: any;
    include_job?: any;
    ref?: any;
    sha?: any;
}
export interface ApiEntitiesCiLintResultCreateData {
    project_id: string;
    post_api_v4_projects_id_ci_lint: Record<string, any>;
    blob?: string;
    context_project?: string;
    context_sha?: string;
    errors?: any[];
    extra?: Record<string, any>;
    includes?: any[];
    jobs?: any[];
    location?: string;
    merged_yaml?: string;
    raw?: string;
    type?: string;
    valid?: boolean;
    warnings?: any[];
}
export interface ApiEntitiesCiPipeline {
}
export interface ApiEntitiesCiPipelineCreateData {
    merge_request_id?: string;
    project_id: string;
    post_api_v4_projects_id_merge_requests_merge_request_iid_pipeline?: Record<string, any>;
    ref_id?: string;
    "post_api_v4_projects_id(ref_ref)trigger_pipeline"?: Record<string, any>;
    pipeline_id?: string;
    post_api_v4_projects_id_pipeline?: Record<string, any>;
}
export interface ApiEntitiesCiPipelineBasic {
    created_at?: string;
    id?: number;
    iid?: number;
    project_id?: number;
    ref?: string;
    sha?: string;
    source?: string;
    status?: string;
    updated_at?: string;
    web_url?: string;
}
export interface ApiEntitiesCiPipelineBasicLoadMatch {
    merge_request_id: string;
    project_id: string;
}
export interface ApiEntitiesCiPipelineBasicListMatch {
    project_id: string;
    created_after?: any;
    created_before?: any;
    name?: string;
    order_by?: any;
    page?: number;
    per_page?: number;
    ref?: any;
    scope?: any;
    sha?: any;
    sort?: any;
    source?: any;
    status?: any;
    updated_after?: any;
    updated_before?: any;
    username?: string;
    yaml_error?: any;
    pipeline_schedule_id?: string;
}
export interface ApiEntitiesCiPipelineSchedule {
    active?: boolean;
    created_at?: string;
    cron?: string;
    cron_timezone?: string;
    description?: string;
    id?: number;
    inputs?: Record<string, any>;
    next_run_at?: string;
    owner?: Record<string, any>;
    ref?: string;
    updated_at?: string;
}
export interface ApiEntitiesCiPipelineScheduleListMatch {
    project_id: string;
    page?: number;
    per_page?: number;
    scope?: any;
}
export interface ApiEntitiesCiPipelineScheduleDetail {
    active?: boolean;
    created_at?: string;
    cron?: string;
    cron_timezone?: string;
    description?: string;
    id?: number;
    inputs?: Record<string, any>;
    last_pipeline?: Record<string, any>;
    next_run_at?: string;
    owner?: Record<string, any>;
    ref?: string;
    updated_at?: string;
    variables?: Record<string, any>;
}
export interface ApiEntitiesCiPipelineScheduleDetailLoadMatch {
    pipeline_schedule_id: string;
    project_id: string;
}
export interface ApiEntitiesCiPipelineScheduleDetailCreateData {
    pipeline_schedule_id?: string;
    project_id: string;
    post_api_v4_projects_id_pipeline_schedule?: Record<string, any>;
    active?: boolean;
    created_at?: string;
    cron?: string;
    cron_timezone?: string;
    description?: string;
    id?: number;
    inputs?: Record<string, any>;
    last_pipeline?: Record<string, any>;
    next_run_at?: string;
    owner?: Record<string, any>;
    ref?: string;
    updated_at?: string;
    variables?: Record<string, any>;
    $action?: string;
    [action: string]: any;
}
export interface ApiEntitiesCiPipelineScheduleDetailUpdateData {
    pipeline_schedule_id: string;
    project_id: string;
    put_api_v4_projects_id_pipeline_schedules_pipeline_schedule_id: Record<string, any>;
    active?: boolean;
    created_at?: string;
    cron?: string;
    cron_timezone?: string;
    description?: string;
    id?: number;
    inputs?: Record<string, any>;
    last_pipeline?: Record<string, any>;
    next_run_at?: string;
    owner?: Record<string, any>;
    ref?: string;
    updated_at?: string;
    variables?: Record<string, any>;
}
export interface ApiEntitiesCiResetTokenResult {
}
export interface ApiEntitiesCiResetTokenResultCreateData {
    post_api_v4_runners_reset_authentication_token: Record<string, any>;
}
export interface ApiEntitiesCiResourceGroup {
    created_at?: string;
    id?: number;
    key?: string;
    process_mode?: string;
    updated_at?: string;
}
export interface ApiEntitiesCiResourceGroupLoadMatch {
    id: string;
    project_id: string;
}
export interface ApiEntitiesCiResourceGroupListMatch {
    project_id: string;
    page?: number;
    per_page?: number;
}
export interface ApiEntitiesCiResourceGroupUpdateData {
    id: string;
    project_id: string;
    put_api_v4_projects_id_resource_groups_key: Record<string, any>;
    created_at?: string;
    key?: string;
    process_mode?: string;
    updated_at?: string;
}
export interface ApiEntitiesCiRunner {
    avatar_path?: string;
    avatar_url?: string;
    custom_attributes?: any[];
    id?: number;
    locked?: boolean;
    name?: string;
    public_email?: string;
    state?: string;
    username?: string;
    web_url?: string;
}
export interface ApiEntitiesCiRunnerLoadMatch {
    page?: number;
    paused?: any;
    per_page?: number;
    scope?: any;
    status?: any;
    tag_list?: any;
    type?: any;
    version_prefix?: any;
}
export interface ApiEntitiesCiRunnerCreateData {
    project_id: string;
    post_api_v4_projects_id_runner: Record<string, any>;
    avatar_path?: string;
    avatar_url?: string;
    custom_attributes?: any[];
    id?: number;
    locked?: boolean;
    name?: string;
    public_email?: string;
    state?: string;
    username?: string;
    web_url?: string;
}
export interface ApiEntitiesCiRunnerDetail {
    access_level?: string;
    active?: boolean;
    architecture?: string;
    contacted_at?: string;
    created_at?: string;
    created_by?: Record<string, any>;
    description?: string;
    groups?: Record<string, any>;
    id?: number;
    ip_address?: string;
    is_shared?: boolean;
    job_execution_status?: string;
    locked?: boolean;
    maintenance_note?: string;
    maximum_timeout?: string;
    name?: string;
    online?: boolean;
    paused?: boolean;
    platform?: string;
    projects?: Record<string, any>;
    revision?: string;
    run_untagged?: string;
    runner_type?: string;
    status?: string;
    tag_list?: string;
    version?: string;
}
export interface ApiEntitiesCiRunnerDetailLoadMatch {
    id: string;
}
export interface ApiEntitiesCiRunnerDetailUpdateData {
    id: string;
    put_api_v4_runners_id: Record<string, any>;
    access_level?: string;
    active?: boolean;
    architecture?: string;
    contacted_at?: string;
    created_at?: string;
    created_by?: Record<string, any>;
    description?: string;
    groups?: Record<string, any>;
    ip_address?: string;
    is_shared?: boolean;
    job_execution_status?: string;
    locked?: boolean;
    maintenance_note?: string;
    maximum_timeout?: string;
    name?: string;
    online?: boolean;
    paused?: boolean;
    platform?: string;
    projects?: Record<string, any>;
    revision?: string;
    run_untagged?: string;
    runner_type?: string;
    status?: string;
    tag_list?: string;
    version?: string;
}
export interface ApiEntitiesCiRunnerManager {
    architecture?: string;
    contacted_at?: string;
    created_at?: string;
    id?: number;
    ip_address?: string;
    job_execution_status?: string;
    platform?: string;
    revision?: string;
    status?: string;
    system_id?: string;
    version?: string;
}
export interface ApiEntitiesCiRunnerManagerLoadMatch {
    runner_id: string;
}
export interface ApiEntitiesCiRunnerRegistrationDetail {
}
export interface ApiEntitiesCiRunnerRegistrationDetailCreateData {
    post_api_v4_runner: Record<string, any>;
}
export interface ApiEntitiesCiSecureFile {
    id?: string;
}
export interface ApiEntitiesCiSecureFileLoadMatch {
    project_id: string;
    page?: number;
    per_page?: number;
    id?: string;
}
export interface ApiEntitiesCiSecureFileCreateData {
    project_id: string;
    post_api_v4_projects_id_secure_file: Record<string, any>;
    id?: string;
}
export interface ApiEntitiesCiVariable {
    description?: string;
    environment_scope?: string;
    hidden?: boolean;
    id?: string;
    key?: string;
    masked?: boolean;
    protected?: boolean;
    raw?: boolean;
    value?: string;
    variable_type?: string;
}
export interface ApiEntitiesCiVariableLoadMatch {
    id: string;
    project_id: string;
    filter_environment_scope?: any;
}
export interface ApiEntitiesCiVariableListMatch {
    pipeline_id: string;
    project_id: string;
}
export interface ApiEntitiesCiVariableCreateData {
    group_id: string;
    post_api_v4_groups_id_variable: Record<string, any>;
    description?: string;
    environment_scope?: string;
    hidden?: boolean;
    id?: string;
    key?: string;
    masked?: boolean;
    protected?: boolean;
    raw?: boolean;
    value?: string;
    variable_type?: string;
}
export interface ApiEntitiesCiVariableUpdateData {
    id: string;
    pipeline_schedule_id?: string;
    project_id?: string;
    put_api_v4_projects_id_pipeline_schedules_pipeline_schedule_id_variables_key?: Record<string, any>;
    group_id?: string;
    put_api_v4_groups_id_variables_key?: Record<string, any>;
    put_api_v4_projects_id_variables_key?: Record<string, any>;
    put_api_v4_admin_ci_variables_key?: Record<string, any>;
    description?: string;
    environment_scope?: string;
    hidden?: boolean;
    key?: string;
    masked?: boolean;
    protected?: boolean;
    raw?: boolean;
    value?: string;
    variable_type?: string;
}
export interface ApiEntitiesCluster {
    cluster_type?: string;
    created_at?: string;
    domain?: string;
    enabled?: boolean;
    environment_scope?: string;
    id?: string;
    managed?: string;
    management_project?: Record<string, any>;
    name?: string;
    namespace_per_environment?: string;
    platform_kubernetes?: Record<string, any>;
    platform_type?: string;
    provider_gcp?: Record<string, any>;
    provider_type?: string;
    user?: Record<string, any>;
}
export interface ApiEntitiesClusterLoadMatch {
    id: string;
}
export interface ApiEntitiesClusterListMatch {
    cluster_type?: string;
    created_at?: string;
    domain?: string;
    enabled?: boolean;
    environment_scope?: string;
    id?: string;
    managed?: string;
    management_project?: Record<string, any>;
    name?: string;
    namespace_per_environment?: string;
    platform_kubernetes?: Record<string, any>;
    platform_type?: string;
    provider_gcp?: Record<string, any>;
    provider_type?: string;
    user?: Record<string, any>;
}
export interface ApiEntitiesClusterCreateData {
    post_api_v4_admin_clusters_add: Record<string, any>;
    cluster_type?: string;
    created_at?: string;
    domain?: string;
    enabled?: boolean;
    environment_scope?: string;
    id?: string;
    managed?: string;
    management_project?: Record<string, any>;
    name?: string;
    namespace_per_environment?: string;
    platform_kubernetes?: Record<string, any>;
    platform_type?: string;
    provider_gcp?: Record<string, any>;
    provider_type?: string;
    user?: Record<string, any>;
}
export interface ApiEntitiesClusterUpdateData {
    id: string;
    put_api_v4_admin_clusters_cluster_id: Record<string, any>;
    cluster_type?: string;
    created_at?: string;
    domain?: string;
    enabled?: boolean;
    environment_scope?: string;
    managed?: string;
    management_project?: Record<string, any>;
    name?: string;
    namespace_per_environment?: string;
    platform_kubernetes?: Record<string, any>;
    platform_type?: string;
    provider_gcp?: Record<string, any>;
    provider_type?: string;
    user?: Record<string, any>;
}
export interface ApiEntitiesClusterGroup {
    cluster_type?: string;
    created_at?: string;
    domain?: string;
    enabled?: boolean;
    environment_scope?: string;
    group?: Record<string, any>;
    id?: string;
    managed?: string;
    management_project?: Record<string, any>;
    name?: string;
    namespace_per_environment?: string;
    platform_kubernetes?: Record<string, any>;
    platform_type?: string;
    provider_gcp?: Record<string, any>;
    provider_type?: string;
    user?: Record<string, any>;
}
export interface ApiEntitiesClusterGroupLoadMatch {
    cluster_id: string;
    group_id: string;
}
export interface ApiEntitiesClusterGroupCreateData {
    group_id: string;
    post_api_v4_groups_id_clusters_user: Record<string, any>;
    cluster_type?: string;
    created_at?: string;
    domain?: string;
    enabled?: boolean;
    environment_scope?: string;
    group?: Record<string, any>;
    id?: string;
    managed?: string;
    management_project?: Record<string, any>;
    name?: string;
    namespace_per_environment?: string;
    platform_kubernetes?: Record<string, any>;
    platform_type?: string;
    provider_gcp?: Record<string, any>;
    provider_type?: string;
    user?: Record<string, any>;
}
export interface ApiEntitiesClusterGroupUpdateData {
    cluster_id: string;
    group_id: string;
    put_api_v4_groups_id_clusters_cluster_id: Record<string, any>;
    cluster_type?: string;
    created_at?: string;
    domain?: string;
    enabled?: boolean;
    environment_scope?: string;
    group?: Record<string, any>;
    id?: string;
    managed?: string;
    management_project?: Record<string, any>;
    name?: string;
    namespace_per_environment?: string;
    platform_kubernetes?: Record<string, any>;
    platform_type?: string;
    provider_gcp?: Record<string, any>;
    provider_type?: string;
    user?: Record<string, any>;
}
export interface ApiEntitiesClusterProject {
    cluster_type?: string;
    created_at?: string;
    domain?: string;
    enabled?: boolean;
    environment_scope?: string;
    id?: string;
    managed?: string;
    management_project?: Record<string, any>;
    name?: string;
    namespace_per_environment?: string;
    platform_kubernetes?: Record<string, any>;
    platform_type?: string;
    project?: Record<string, any>;
    provider_gcp?: Record<string, any>;
    provider_type?: string;
    user?: Record<string, any>;
}
export interface ApiEntitiesClusterProjectLoadMatch {
    cluster_id: string;
    project_id: string;
}
export interface ApiEntitiesClusterProjectCreateData {
    project_id: string;
    post_api_v4_projects_id_clusters_user: Record<string, any>;
    cluster_type?: string;
    created_at?: string;
    domain?: string;
    enabled?: boolean;
    environment_scope?: string;
    id?: string;
    managed?: string;
    management_project?: Record<string, any>;
    name?: string;
    namespace_per_environment?: string;
    platform_kubernetes?: Record<string, any>;
    platform_type?: string;
    project?: Record<string, any>;
    provider_gcp?: Record<string, any>;
    provider_type?: string;
    user?: Record<string, any>;
}
export interface ApiEntitiesClusterProjectUpdateData {
    cluster_id: string;
    project_id: string;
    put_api_v4_projects_id_clusters_cluster_id: Record<string, any>;
    cluster_type?: string;
    created_at?: string;
    domain?: string;
    enabled?: boolean;
    environment_scope?: string;
    id?: string;
    managed?: string;
    management_project?: Record<string, any>;
    name?: string;
    namespace_per_environment?: string;
    platform_kubernetes?: Record<string, any>;
    platform_type?: string;
    project?: Record<string, any>;
    provider_gcp?: Record<string, any>;
    provider_type?: string;
    user?: Record<string, any>;
}
export interface ApiEntitiesClustersAgent {
    created_at?: string;
    description?: string;
    id?: number;
    name?: string;
    name_with_namespace?: string;
    path?: string;
    path_with_namespace?: string;
}
export interface ApiEntitiesClustersAgentLoadMatch {
    project_id: string;
    page?: number;
    per_page?: number;
    agent_id?: string;
}
export interface ApiEntitiesClustersAgentCreateData {
    project_id: string;
    post_api_v4_projects_id_cluster_agent: Record<string, any>;
    created_at?: string;
    description?: string;
    id?: number;
    name?: string;
    name_with_namespace?: string;
    path?: string;
    path_with_namespace?: string;
}
export interface ApiEntitiesClustersAgentToken {
    agent_id?: string;
    created_at?: string;
    created_by_user_id?: string;
    description?: string;
    id?: string;
    last_used_at?: string;
    name?: string;
    status?: string;
}
export interface ApiEntitiesClustersAgentTokenLoadMatch {
    cluster_agent_id: string;
    id: string;
    project_id: string;
}
export interface ApiEntitiesClustersAgentTokenBasic {
    agent_id?: string;
    created_at?: string;
    created_by_user_id?: string;
    description?: string;
    id?: string;
    name?: string;
    status?: string;
}
export interface ApiEntitiesClustersAgentTokenBasicLoadMatch {
    cluster_agent_id: string;
    project_id: string;
    page?: number;
    per_page?: number;
}
export interface ApiEntitiesClustersAgentTokenWithToken {
}
export interface ApiEntitiesClustersAgentTokenWithTokenCreateData {
    cluster_agent_id: string;
    project_id: string;
    post_api_v4_projects_id_cluster_agents_agent_id_token: Record<string, any>;
}
export interface ApiEntitiesCommit {
    author_email?: string;
    author_name?: string;
    authored_date?: string;
    committed_date?: string;
    committer_email?: string;
    committer_name?: string;
    created_at?: string;
    extended_trailers?: Record<string, any>;
    id?: string;
    message?: string;
    parent_ids?: any[];
    short_id?: string;
    title?: string;
    trailers?: Record<string, any>;
    web_url?: string;
}
export interface ApiEntitiesCommitListMatch {
    project_id: string;
    all?: any;
    author?: any;
    first_parent?: any;
    order?: any;
    page?: number;
    path?: string;
    per_page?: number;
    ref_name?: any;
    since?: any;
    trailer?: any;
    until?: any;
    with_stat?: any;
    merge_request_id?: string;
    ref?: any;
}
export interface ApiEntitiesCommitCreateData {
    merge_request_id?: string;
    project_id: string;
    post_api_v4_projects_id_merge_requests_merge_request_iid_context_commit?: Record<string, any>;
    sha?: any;
    post_api_v4_projects_id_repository_commits_sha_cherry_pick?: Record<string, any>;
    post_api_v4_projects_id_repository_commits_sha_revert?: Record<string, any>;
    author_email?: string;
    author_name?: string;
    authored_date?: string;
    committed_date?: string;
    committer_email?: string;
    committer_name?: string;
    created_at?: string;
    extended_trailers?: Record<string, any>;
    id?: string;
    message?: string;
    parent_ids?: any[];
    short_id?: string;
    title?: string;
    trailers?: Record<string, any>;
    web_url?: string;
}
export interface ApiEntitiesCommitDetail {
    author_email?: string;
    author_name?: string;
    authored_date?: string;
    committed_date?: string;
    committer_email?: string;
    committer_name?: string;
    created_at?: string;
    extended_trailers?: Record<string, any>;
    id?: string;
    last_pipeline?: Record<string, any>;
    message?: string;
    parent_ids?: any[];
    project_id?: number;
    short_id?: string;
    stats?: Record<string, any>;
    status?: string;
    title?: string;
    trailers?: Record<string, any>;
    web_url?: string;
}
export interface ApiEntitiesCommitDetailLoadMatch {
    project_id: string;
    sha: any;
    stat?: any;
}
export interface ApiEntitiesCommitDetailCreateData {
    project_id: string;
    post_api_v4_projects_id_repository_commit: Record<string, any>;
    author_email?: string;
    author_name?: string;
    authored_date?: string;
    committed_date?: string;
    committer_email?: string;
    committer_name?: string;
    created_at?: string;
    extended_trailers?: Record<string, any>;
    id?: string;
    last_pipeline?: Record<string, any>;
    message?: string;
    parent_ids?: any[];
    short_id?: string;
    stats?: Record<string, any>;
    status?: string;
    title?: string;
    trailers?: Record<string, any>;
    web_url?: string;
}
export interface ApiEntitiesCommitDetailUpdateData {
    project_id: string;
    submodule: any;
    put_api_v4_projects_id_repository_submodules_submodule: Record<string, any>;
    author_email?: string;
    author_name?: string;
    authored_date?: string;
    committed_date?: string;
    committer_email?: string;
    committer_name?: string;
    created_at?: string;
    extended_trailers?: Record<string, any>;
    id?: string;
    last_pipeline?: Record<string, any>;
    message?: string;
    parent_ids?: any[];
    short_id?: string;
    stats?: Record<string, any>;
    status?: string;
    title?: string;
    trailers?: Record<string, any>;
    web_url?: string;
}
export interface ApiEntitiesCommitNote {
    author?: Record<string, any>;
    avatar_path?: string;
    avatar_url?: string;
    created_at?: string;
    custom_attributes?: any[];
    id?: number;
    line?: number;
    line_type?: string;
    locked?: boolean;
    name?: string;
    note?: string;
    path?: string;
    public_email?: string;
    state?: string;
    username?: string;
    web_url?: string;
}
export interface ApiEntitiesCommitNoteListMatch {
    project_id: string;
    sha: any;
    page?: number;
    per_page?: number;
}
export interface ApiEntitiesCommitNoteCreateData {
    project_id: string;
    sha: any;
    post_api_v4_projects_id_repository_commits_sha_comment: Record<string, any>;
    author?: Record<string, any>;
    avatar_path?: string;
    avatar_url?: string;
    created_at?: string;
    custom_attributes?: any[];
    id?: number;
    line?: number;
    line_type?: string;
    locked?: boolean;
    name?: string;
    note?: string;
    path?: string;
    public_email?: string;
    state?: string;
    username?: string;
    web_url?: string;
}
export interface ApiEntitiesCommitSequence {
    count?: number;
}
export interface ApiEntitiesCommitSequenceLoadMatch {
    project_id: string;
    sha: any;
    first_parent?: any;
}
export interface ApiEntitiesCommitSignature {
    commit_source?: string;
    signature?: string;
    signature_type?: string;
}
export interface ApiEntitiesCommitSignatureLoadMatch {
    project_id: string;
    sha: any;
}
export interface ApiEntitiesCommitStatus {
    allow_failure?: boolean;
    author?: Record<string, any>;
    avatar_path?: string;
    avatar_url?: string;
    coverage?: number;
    created_at?: string;
    custom_attributes?: any[];
    description?: string;
    finished_at?: string;
    id?: number;
    locked?: boolean;
    name?: string;
    pipeline_id?: number;
    public_email?: string;
    ref?: string;
    sha?: string;
    started_at?: string;
    state?: string;
    status?: string;
    target_url?: string;
    username?: string;
    web_url?: string;
}
export interface ApiEntitiesCommitStatusListMatch {
    project_id: string;
    sha: any;
    all?: any;
    name?: string;
    order_by?: any;
    page?: number;
    per_page?: number;
    pipeline_id?: string;
    ref?: any;
    sort?: any;
    stage?: any;
}
export interface ApiEntitiesCommitStatusCreateData {
    id: string;
    project_id: string;
    post_api_v4_projects_id_statuses_sha: Record<string, any>;
    allow_failure?: boolean;
    author?: Record<string, any>;
    avatar_path?: string;
    avatar_url?: string;
    coverage?: number;
    created_at?: string;
    custom_attributes?: any[];
    description?: string;
    finished_at?: string;
    locked?: boolean;
    name?: string;
    pipeline_id?: number;
    public_email?: string;
    ref?: string;
    sha?: string;
    started_at?: string;
    state?: string;
    status?: string;
    target_url?: string;
    username?: string;
    web_url?: string;
}
export interface ApiEntitiesCompare {
    commit?: Record<string, any>;
    commits?: any[];
    compare_same_ref?: boolean;
    compare_timeout?: boolean;
    diffs?: any[];
    web_url?: string;
}
export interface ApiEntitiesCompareListMatch {
    project_id: string;
    from: any;
    from_project_id?: string;
    straight?: any;
    to: any;
    unidiff?: any;
}
export interface ApiEntitiesContainerRegistryRepository {
    cleanup_policy_started_at?: string;
    created_at?: string;
    delete_api_path?: string;
    id?: number;
    location?: string;
    name?: string;
    path?: string;
    project_id?: number;
    size?: number;
    status?: string;
    tags?: Record<string, any>;
    tags_count?: number;
}
export interface ApiEntitiesContainerRegistryRepositoryLoadMatch {
    id: string;
    size?: number;
    tag?: any;
    tags_count?: number;
}
export interface ApiEntitiesContainerRegistryRepositoryListMatch {
    project_id: string;
    page?: number;
    per_page?: number;
    tag?: any;
    tags_count?: number;
}
export interface ApiEntitiesContainerRegistryTag {
    location?: string;
    name?: string;
    path?: string;
}
export interface ApiEntitiesContainerRegistryTagListMatch {
    project_id: string;
    repository_id: string;
    page?: number;
    per_page?: number;
}
export interface ApiEntitiesContainerRegistryTagDetail {
    created_at?: string;
    digest?: string;
    location?: string;
    name?: string;
    path?: string;
    revision?: string;
    short_revision?: string;
    total_size?: number;
}
export interface ApiEntitiesContainerRegistryTagDetailLoadMatch {
    project_id: string;
    repository_id: string;
    tag_name: any;
}
export interface ApiEntitiesContributor {
    additions?: number;
    commits?: number;
    deletions?: number;
    email?: string;
    name?: string;
}
export interface ApiEntitiesContributorLoadMatch {
    project_id: string;
    order_by?: any;
    page?: number;
    per_page?: number;
    ref?: any;
    sort?: any;
}
export interface ApiEntitiesDeployKey {
    created_at?: string;
    expires_at?: string;
    fingerprint?: string;
    fingerprint_sha256?: string;
    id?: number;
    key?: string;
    last_used_at?: string;
    projects_with_readonly_access?: Record<string, any>;
    projects_with_write_access?: Record<string, any>;
    title?: string;
    usage_type?: string;
}
export interface ApiEntitiesDeployKeyListMatch {
    page?: number;
    per_page?: number;
    public?: boolean;
}
export interface ApiEntitiesDeployKeyCreateData {
    post_api_v4_deploy_key: Record<string, any>;
    created_at?: string;
    expires_at?: string;
    fingerprint?: string;
    fingerprint_sha256?: string;
    id?: number;
    key?: string;
    last_used_at?: string;
    projects_with_readonly_access?: Record<string, any>;
    projects_with_write_access?: Record<string, any>;
    title?: string;
    usage_type?: string;
}
export interface ApiEntitiesDeployKeyUpdateData {
    id: string;
    project_id: string;
    put_api_v4_projects_id_deploy_keys_key_id: Record<string, any>;
    created_at?: string;
    expires_at?: string;
    fingerprint?: string;
    fingerprint_sha256?: string;
    key?: string;
    last_used_at?: string;
    projects_with_readonly_access?: Record<string, any>;
    projects_with_write_access?: Record<string, any>;
    title?: string;
    usage_type?: string;
}
export interface ApiEntitiesDeployKeysProject {
    can_push?: boolean;
    created_at?: string;
    expires_at?: string;
    fingerprint?: string;
    fingerprint_sha256?: string;
    id?: number;
    key?: string;
    last_used_at?: string;
    projects_with_readonly_access?: Record<string, any>;
    projects_with_write_access?: Record<string, any>;
    title?: string;
    usage_type?: string;
}
export interface ApiEntitiesDeployKeysProjectLoadMatch {
    key_id: string;
    project_id: string;
}
export interface ApiEntitiesDeployKeysProjectListMatch {
    project_id: string;
    page?: number;
    per_page?: number;
}
export interface ApiEntitiesDeployKeysProjectCreateData {
    project_id: string;
    post_api_v4_projects_id_deploy_key: Record<string, any>;
    can_push?: boolean;
    created_at?: string;
    expires_at?: string;
    fingerprint?: string;
    fingerprint_sha256?: string;
    id?: number;
    key?: string;
    last_used_at?: string;
    projects_with_readonly_access?: Record<string, any>;
    projects_with_write_access?: Record<string, any>;
    title?: string;
    usage_type?: string;
}
export interface ApiEntitiesDeployToken {
    expired?: boolean;
    expires_at?: string;
    id?: number;
    name?: string;
    revoked?: boolean;
    scopes?: any[];
    username?: string;
}
export interface ApiEntitiesDeployTokenLoadMatch {
    group_id?: string;
    id: string;
    project_id?: string;
}
export interface ApiEntitiesDeployTokenListMatch {
    active?: boolean;
    page?: number;
    per_page?: number;
}
export interface ApiEntitiesDeployTokenWithToken {
}
export interface ApiEntitiesDeployTokenWithTokenCreateData {
    group_id: string;
    post_api_v4_groups_id_deploy_token: Record<string, any>;
}
export interface ApiEntitiesDeployment {
    created_at?: string;
    deployable?: Record<string, any>;
    environment?: Record<string, any>;
    id?: number;
    iid?: number;
    ref?: string;
    sha?: string;
    status?: string;
    updated_at?: string;
    user?: Record<string, any>;
}
export interface ApiEntitiesDeploymentListMatch {
    project_id: string;
    environment?: any;
    finished_after?: any;
    finished_before?: any;
    order_by?: any;
    page?: number;
    per_page?: number;
    sort?: any;
    status?: any;
    updated_after?: any;
    updated_before?: any;
}
export interface ApiEntitiesDeploymentExtended {
    approval_summary?: Record<string, any>;
    approvals?: Record<string, any>;
    created_at?: string;
    deployable?: Record<string, any>;
    environment?: Record<string, any>;
    id?: number;
    iid?: number;
    pending_approval_count?: number;
    ref?: string;
    sha?: string;
    status?: string;
    updated_at?: string;
    user?: Record<string, any>;
}
export interface ApiEntitiesDeploymentExtendedLoadMatch {
    deployment_id: string;
    project_id: string;
}
export interface ApiEntitiesDeploymentExtendedCreateData {
    project_id: string;
    post_api_v4_projects_id_deployment: Record<string, any>;
    approval_summary?: Record<string, any>;
    approvals?: Record<string, any>;
    created_at?: string;
    deployable?: Record<string, any>;
    environment?: Record<string, any>;
    id?: number;
    iid?: number;
    pending_approval_count?: number;
    ref?: string;
    sha?: string;
    status?: string;
    updated_at?: string;
    user?: Record<string, any>;
}
export interface ApiEntitiesDeploymentExtendedUpdateData {
    deployment_id: string;
    project_id: string;
    put_api_v4_projects_id_deployments_deployment_id: Record<string, any>;
    approval_summary?: Record<string, any>;
    approvals?: Record<string, any>;
    created_at?: string;
    deployable?: Record<string, any>;
    environment?: Record<string, any>;
    id?: number;
    iid?: number;
    pending_approval_count?: number;
    ref?: string;
    sha?: string;
    status?: string;
    updated_at?: string;
    user?: Record<string, any>;
}
export interface ApiEntitiesDeploymentsApproval {
}
export interface ApiEntitiesDeploymentsApprovalCreateData {
    deployment_id: string;
    project_id: string;
    post_api_v4_projects_id_deployments_deployment_id_approval: Record<string, any>;
}
export interface ApiEntitiesDictionaryTable {
    feature_categories?: any[];
    id?: string;
    table_name?: string;
}
export interface ApiEntitiesDictionaryTableLoadMatch {
    databas_id: string;
    id: string;
}
export interface ApiEntitiesDiff {
    a_mode?: string;
    b_mode?: string;
    collapsed?: boolean;
    deleted_file?: boolean;
    diff?: string;
    generated_file?: boolean;
    new_file?: boolean;
    new_path?: string;
    old_path?: string;
    renamed_file?: boolean;
    too_large?: boolean;
}
export interface ApiEntitiesDiffLoadMatch {
    merge_request_id: string;
    project_id: string;
    page?: number;
    per_page?: number;
    unidiff?: any;
}
export interface ApiEntitiesDiffListMatch {
    project_id: string;
    sha: any;
    page?: number;
    per_page?: number;
    unidiff?: any;
}
export interface ApiEntitiesDiscoveredCluster {
    groups?: string;
    projects?: string;
}
export interface ApiEntitiesDiscoveredClusterLoadMatch {
    group_id: string;
}
export interface ApiEntitiesDraftNote {
    author_id?: number;
    commit_id?: number;
    discussion_id?: number;
    id?: number;
    line_code?: string;
    merge_request_id?: number;
    note?: string;
    position?: Record<string, any>;
    resolve_discussion?: boolean;
}
export interface ApiEntitiesDraftNoteLoadMatch {
    id: string;
    merge_request_id: string;
    project_id: string;
}
export interface ApiEntitiesDraftNoteListMatch {
    merge_request_id: string;
    project_id: string;
}
export interface ApiEntitiesDraftNoteCreateData {
    merge_request_id: string;
    project_id: string;
    post_api_v4_projects_id_merge_requests_merge_request_iid_draft_note: Record<string, any>;
    author_id?: number;
    commit_id?: number;
    discussion_id?: number;
    id?: number;
    line_code?: string;
    note?: string;
    position?: Record<string, any>;
    resolve_discussion?: boolean;
}
export interface ApiEntitiesDraftNoteUpdateData {
    id: string;
    merge_request_id: string;
    project_id: string;
    put_api_v4_projects_id_merge_requests_merge_request_iid_draft_notes_draft_note_id: Record<string, any>;
    author_id?: number;
    commit_id?: number;
    discussion_id?: number;
    line_code?: string;
    note?: string;
    position?: Record<string, any>;
    resolve_discussion?: boolean;
    $action?: string;
    [action: string]: any;
}
export interface ApiEntitiesEnvironment {
    auto_stop_at?: string;
    auto_stop_setting?: string;
    cluster_agent?: Record<string, any>;
    created_at?: string;
    description?: string;
    external_url?: string;
    flux_resource_path?: string;
    id?: number;
    kubernetes_namespace?: string;
    last_deployment?: Record<string, any>;
    name?: string;
    project?: Record<string, any>;
    slug?: string;
    state?: string;
    tier?: string;
    updated_at?: string;
}
export interface ApiEntitiesEnvironmentLoadMatch {
    id: string;
    project_id: string;
}
export interface ApiEntitiesEnvironmentListMatch {
    project_id: string;
    name?: string;
    page?: number;
    per_page?: number;
    search?: any;
    state?: any;
}
export interface ApiEntitiesEnvironmentCreateData {
    environment_id?: string;
    project_id: string;
    post_api_v4_projects_id_environments_environment_id_stop?: Record<string, any>;
    post_api_v4_projects_id_environment?: Record<string, any>;
    auto_stop_at?: string;
    auto_stop_setting?: string;
    cluster_agent?: Record<string, any>;
    created_at?: string;
    description?: string;
    external_url?: string;
    flux_resource_path?: string;
    id?: number;
    kubernetes_namespace?: string;
    last_deployment?: Record<string, any>;
    name?: string;
    project?: Record<string, any>;
    slug?: string;
    state?: string;
    tier?: string;
    updated_at?: string;
}
export interface ApiEntitiesEnvironmentUpdateData {
    id: string;
    project_id: string;
    put_api_v4_projects_id_environments_environment_id: Record<string, any>;
    auto_stop_at?: string;
    auto_stop_setting?: string;
    cluster_agent?: Record<string, any>;
    created_at?: string;
    description?: string;
    external_url?: string;
    flux_resource_path?: string;
    kubernetes_namespace?: string;
    last_deployment?: Record<string, any>;
    name?: string;
    project?: Record<string, any>;
    slug?: string;
    state?: string;
    tier?: string;
    updated_at?: string;
}
export interface ApiEntitiesErrorTrackingClientKey {
    active?: boolean;
    id?: number;
    public_key?: string;
    sentry_dsn?: string;
}
export interface ApiEntitiesErrorTrackingClientKeyListMatch {
    project_id: string;
}
export interface ApiEntitiesErrorTrackingClientKeyCreateData {
    project_id: string;
    active?: boolean;
    id?: number;
    public_key?: string;
    sentry_dsn?: string;
}
export interface ApiEntitiesErrorTrackingProjectSetting {
    active?: boolean;
    api_url?: string;
    integrated?: boolean;
    project_name?: string;
    sentry_external_url?: string;
}
export interface ApiEntitiesErrorTrackingProjectSettingLoadMatch {
    project_id: string;
}
export interface ApiEntitiesErrorTrackingProjectSettingUpdateData {
    project_id: string;
    put_api_v4_projects_id_error_tracking_setting: Record<string, any>;
    active?: boolean;
    api_url?: string;
    integrated?: boolean;
    project_name?: string;
    sentry_external_url?: string;
}
export interface ApiEntitiesEvent {
    action_name?: string;
    author?: Record<string, any>;
    author_id?: number;
    author_username?: string;
    created_at?: string;
    id?: number;
    imported?: boolean;
    imported_from?: string;
    note?: Record<string, any>;
    project_id?: number;
    push_data?: Record<string, any>;
    target_id?: number;
    target_iid?: number;
    target_title?: string;
    target_type?: string;
    wiki_page?: Record<string, any>;
}
export interface ApiEntitiesEventLoadMatch {
    project_id: string;
    action?: any;
    after?: any;
    before?: any;
    page?: number;
    per_page?: number;
    sort?: any;
    target_type?: any;
}
export interface ApiEntitiesEventListMatch {
    action?: any;
    after?: any;
    before?: any;
    page?: number;
    per_page?: number;
    scope?: any;
    sort?: any;
    target_type?: any;
}
export interface ApiEntitiesFeature {
    definition?: Record<string, any>;
    gates?: Record<string, any>;
    id?: string;
    name?: string;
    state?: string;
}
export interface ApiEntitiesFeatureListMatch {
    definition?: Record<string, any>;
    gates?: Record<string, any>;
    id?: string;
    name?: string;
    state?: string;
}
export interface ApiEntitiesFeatureCreateData {
    id: string;
    post_api_v4_features_name: Record<string, any>;
    definition?: Record<string, any>;
    gates?: Record<string, any>;
    name?: string;
    state?: string;
}
export interface ApiEntitiesFeatureDefinition {
    default_enabled?: string;
    feature_issue_url?: string;
    group?: string;
    intended_to_rollout_by?: string;
    introduced_by_url?: string;
    log_state_changes?: string;
    milestone?: string;
    name?: string;
    rollout_issue_url?: string;
    type?: string;
}
export interface ApiEntitiesFeatureDefinitionListMatch {
    default_enabled?: string;
    feature_issue_url?: string;
    group?: string;
    intended_to_rollout_by?: string;
    introduced_by_url?: string;
    log_state_changes?: string;
    milestone?: string;
    name?: string;
    rollout_issue_url?: string;
    type?: string;
}
export interface ApiEntitiesFeatureFlag {
    active?: boolean;
    created_at?: string;
    description?: string;
    id?: number;
    name?: string;
    parameters?: string;
    scopes?: Record<string, any>;
    strategies?: Record<string, any>;
    updated_at?: string;
    user_list?: Record<string, any>;
    version?: string;
}
export interface ApiEntitiesFeatureFlagLoadMatch {
    id: string;
    project_id: string;
}
export interface ApiEntitiesFeatureFlagListMatch {
    project_id: string;
    page?: number;
    per_page?: number;
    scope?: any;
}
export interface ApiEntitiesFeatureFlagCreateData {
    project_id: string;
    post_api_v4_projects_id_feature_flag: Record<string, any>;
    active?: boolean;
    created_at?: string;
    description?: string;
    id?: number;
    name?: string;
    parameters?: string;
    scopes?: Record<string, any>;
    strategies?: Record<string, any>;
    updated_at?: string;
    user_list?: Record<string, any>;
    version?: string;
}
export interface ApiEntitiesFeatureFlagUpdateData {
    id: string;
    project_id: string;
    put_api_v4_projects_id_feature_flags_feature_flag_name: Record<string, any>;
    active?: boolean;
    created_at?: string;
    description?: string;
    name?: string;
    parameters?: string;
    scopes?: Record<string, any>;
    strategies?: Record<string, any>;
    updated_at?: string;
    user_list?: Record<string, any>;
    version?: string;
}
export interface ApiEntitiesFeatureFlagUserList {
    created_at?: string;
    edit_path?: string;
    id?: number;
    iid?: number;
    name?: string;
    path?: string;
    project_id?: number;
    updated_at?: string;
    user_xids?: string;
}
export interface ApiEntitiesFeatureFlagUserListLoadMatch {
    iid: any;
    project_id: string;
}
export interface ApiEntitiesFeatureFlagUserListListMatch {
    project_id: string;
    page?: number;
    per_page?: number;
    search?: any;
}
export interface ApiEntitiesFeatureFlagUserListCreateData {
    project_id: string;
    post_api_v4_projects_id_feature_flags_user_list: Record<string, any>;
    created_at?: string;
    edit_path?: string;
    id?: number;
    iid?: number;
    name?: string;
    path?: string;
    updated_at?: string;
    user_xids?: string;
}
export interface ApiEntitiesFeatureFlagUserListUpdateData {
    iid: any;
    project_id: string;
    put_api_v4_projects_id_feature_flags_user_lists_iid: Record<string, any>;
    created_at?: string;
    edit_path?: string;
    id?: number;
    name?: string;
    path?: string;
    updated_at?: string;
    user_xids?: string;
}
export interface ApiEntitiesFreezePeriod {
    created_at?: string;
    cron_timezone?: string;
    freeze_end?: string;
    freeze_start?: string;
    id?: number;
    updated_at?: string;
}
export interface ApiEntitiesFreezePeriodLoadMatch {
    id: string;
    project_id: string;
}
export interface ApiEntitiesFreezePeriodListMatch {
    project_id: string;
    page?: number;
    per_page?: number;
}
export interface ApiEntitiesFreezePeriodCreateData {
    project_id: string;
    post_api_v4_projects_id_freeze_period: Record<string, any>;
    created_at?: string;
    cron_timezone?: string;
    freeze_end?: string;
    freeze_start?: string;
    id?: number;
    updated_at?: string;
}
export interface ApiEntitiesFreezePeriodUpdateData {
    id: string;
    project_id: string;
    put_api_v4_projects_id_freeze_periods_freeze_period_id: Record<string, any>;
    created_at?: string;
    cron_timezone?: string;
    freeze_end?: string;
    freeze_start?: string;
    updated_at?: string;
}
export interface ApiEntitiesGitlabSubscription {
    billing?: Record<string, any>;
    plan?: Record<string, any>;
    usage?: Record<string, any>;
}
export interface ApiEntitiesGitlabSubscriptionLoadMatch {
    namespace_id: string;
}
export interface ApiEntitiesGoModuleVersion {
    Time?: string;
    Version?: string;
}
export interface ApiEntitiesGoModuleVersionLoadMatch {
    module_version: any;
    project_id: string;
    module_name: any;
}
export interface ApiEntitiesGroup {
    archived?: boolean;
    auto_devops_enabled?: string;
    auto_duo_code_review_enabled?: string;
    avatar_url?: string;
    created_at?: string;
    custom_attributes?: Record<string, any>;
    default_branch?: string;
    default_branch_protection?: string;
    default_branch_protection_defaults?: string;
    description?: string;
    duo_core_features_enabled?: boolean;
    duo_features_enabled?: string;
    emails_disabled?: boolean;
    emails_enabled?: boolean;
    file_template_project_id?: string;
    full_name?: string;
    full_path?: string;
    id?: string;
    ldap_access?: string;
    ldap_cn?: string;
    ldap_group_links?: Record<string, any>;
    lfs_enabled?: string;
    lock_duo_features_enabled?: string;
    lock_math_rendering_limits_enabled?: boolean;
    marked_for_deletion_on?: string;
    math_rendering_limits_enabled?: boolean;
    max_artifacts_size?: number;
    mentions_disabled?: string;
    name?: string;
    organization_id?: string;
    parent_id?: string;
    path?: string;
    project_creation_level?: string;
    repository_storage?: string;
    request_access_enabled?: string;
    require_two_factor_authentication?: string;
    root_storage_statistics?: Record<string, any>;
    saml_group_links?: Record<string, any>;
    share_with_group_lock?: string;
    shared_runners_setting?: string;
    show_diff_preview_in_email?: boolean;
    statistics?: Record<string, any>;
    subgroup_creation_level?: string;
    two_factor_grace_period?: string;
    visibility?: string;
    web_based_commit_signing_enabled?: string;
    web_url?: string;
    wiki_access_level?: string;
}
export interface ApiEntitiesGroupLoadMatch {
    project_id: string;
    search?: any;
}
export interface ApiEntitiesGroupListMatch {
    active?: boolean;
    all_available?: any;
    archived?: boolean;
    marked_for_deletion_on?: any;
    min_access_level?: any;
    order_by?: any;
    owned?: any;
    page?: number;
    per_page?: number;
    repository_storage?: any;
    search?: any;
    skip_group?: any;
    sort?: any;
    statistic?: any;
    top_level_only?: any;
    visibility?: any;
    with_custom_attribute?: any;
}
export interface ApiEntitiesGroupCreateData {
    post_api_v4_group: Record<string, any>;
    archived?: boolean;
    auto_devops_enabled?: string;
    auto_duo_code_review_enabled?: string;
    avatar_url?: string;
    created_at?: string;
    custom_attributes?: Record<string, any>;
    default_branch?: string;
    default_branch_protection?: string;
    default_branch_protection_defaults?: string;
    description?: string;
    duo_core_features_enabled?: boolean;
    duo_features_enabled?: string;
    emails_disabled?: boolean;
    emails_enabled?: boolean;
    file_template_project_id?: string;
    full_name?: string;
    full_path?: string;
    id?: string;
    ldap_access?: string;
    ldap_cn?: string;
    ldap_group_links?: Record<string, any>;
    lfs_enabled?: string;
    lock_duo_features_enabled?: string;
    lock_math_rendering_limits_enabled?: boolean;
    marked_for_deletion_on?: string;
    math_rendering_limits_enabled?: boolean;
    max_artifacts_size?: number;
    mentions_disabled?: string;
    name?: string;
    organization_id?: string;
    parent_id?: string;
    path?: string;
    project_creation_level?: string;
    repository_storage?: string;
    request_access_enabled?: string;
    require_two_factor_authentication?: string;
    root_storage_statistics?: Record<string, any>;
    saml_group_links?: Record<string, any>;
    share_with_group_lock?: string;
    shared_runners_setting?: string;
    show_diff_preview_in_email?: boolean;
    statistics?: Record<string, any>;
    subgroup_creation_level?: string;
    two_factor_grace_period?: string;
    visibility?: string;
    web_based_commit_signing_enabled?: string;
    web_url?: string;
    wiki_access_level?: string;
}
export interface ApiEntitiesGroupUpdateData {
    id: string;
    put_api_v4_groups_id: Record<string, any>;
    archived?: boolean;
    auto_devops_enabled?: string;
    auto_duo_code_review_enabled?: string;
    avatar_url?: string;
    created_at?: string;
    custom_attributes?: Record<string, any>;
    default_branch?: string;
    default_branch_protection?: string;
    default_branch_protection_defaults?: string;
    description?: string;
    duo_core_features_enabled?: boolean;
    duo_features_enabled?: string;
    emails_disabled?: boolean;
    emails_enabled?: boolean;
    file_template_project_id?: string;
    full_name?: string;
    full_path?: string;
    ldap_access?: string;
    ldap_cn?: string;
    ldap_group_links?: Record<string, any>;
    lfs_enabled?: string;
    lock_duo_features_enabled?: string;
    lock_math_rendering_limits_enabled?: boolean;
    marked_for_deletion_on?: string;
    math_rendering_limits_enabled?: boolean;
    max_artifacts_size?: number;
    mentions_disabled?: string;
    name?: string;
    organization_id?: string;
    parent_id?: string;
    path?: string;
    project_creation_level?: string;
    repository_storage?: string;
    request_access_enabled?: string;
    require_two_factor_authentication?: string;
    root_storage_statistics?: Record<string, any>;
    saml_group_links?: Record<string, any>;
    share_with_group_lock?: string;
    shared_runners_setting?: string;
    show_diff_preview_in_email?: boolean;
    statistics?: Record<string, any>;
    subgroup_creation_level?: string;
    two_factor_grace_period?: string;
    visibility?: string;
    web_based_commit_signing_enabled?: string;
    web_url?: string;
    wiki_access_level?: string;
}
export interface ApiEntitiesGroupDetail {
    allowed_email_domains_list?: string;
    archived?: boolean;
    auto_ban_user_on_excessive_projects_download?: string;
    auto_devops_enabled?: string;
    auto_duo_code_review_enabled?: string;
    avatar_url?: string;
    created_at?: string;
    custom_attributes?: Record<string, any>;
    default_branch?: string;
    default_branch_protection?: string;
    default_branch_protection_defaults?: string;
    description?: string;
    duo_core_features_enabled?: boolean;
    duo_features_enabled?: string;
    emails_disabled?: boolean;
    emails_enabled?: boolean;
    enabled_git_access_protocol?: string;
    extra_shared_runners_minutes_limit?: string;
    file_template_project_id?: string;
    full_name?: string;
    full_path?: string;
    id?: string;
    ip_restriction_ranges?: string;
    ldap_access?: string;
    ldap_cn?: string;
    ldap_group_links?: Record<string, any>;
    lfs_enabled?: string;
    lock_duo_features_enabled?: string;
    lock_math_rendering_limits_enabled?: boolean;
    marked_for_deletion_on?: string;
    math_rendering_limits_enabled?: boolean;
    max_artifacts_size?: number;
    membership_lock?: string;
    mentions_disabled?: string;
    name?: string;
    organization_id?: string;
    parent_id?: string;
    path?: string;
    prevent_forking_outside_group?: string;
    prevent_sharing_groups_outside_hierarchy?: string;
    project_creation_level?: string;
    projects?: Record<string, any>;
    repository_storage?: string;
    request_access_enabled?: string;
    require_two_factor_authentication?: string;
    root_storage_statistics?: Record<string, any>;
    runners_token?: string;
    saml_group_links?: Record<string, any>;
    service_access_tokens_expiration_enforced?: string;
    share_with_group_lock?: string;
    shared_projects?: Record<string, any>;
    shared_runners_minutes_limit?: string;
    shared_runners_setting?: string;
    shared_with_groups?: string;
    show_diff_preview_in_email?: boolean;
    statistics?: Record<string, any>;
    subgroup_creation_level?: string;
    two_factor_grace_period?: string;
    unique_project_download_limit?: string;
    unique_project_download_limit_alertlist?: string;
    unique_project_download_limit_allowlist?: string;
    unique_project_download_limit_interval_in_seconds?: string;
    visibility?: string;
    web_based_commit_signing_enabled?: string;
    web_url?: string;
    wiki_access_level?: string;
}
export interface ApiEntitiesGroupDetailLoadMatch {
    id: string;
    with_custom_attribute?: any;
    with_project?: any;
}
export interface ApiEntitiesGroupDetailCreateData {
    group_id: string;
    post_api_v4_groups_id_share?: Record<string, any>;
    project_id?: string;
    allowed_email_domains_list?: string;
    archived?: boolean;
    auto_ban_user_on_excessive_projects_download?: string;
    auto_devops_enabled?: string;
    auto_duo_code_review_enabled?: string;
    avatar_url?: string;
    created_at?: string;
    custom_attributes?: Record<string, any>;
    default_branch?: string;
    default_branch_protection?: string;
    default_branch_protection_defaults?: string;
    description?: string;
    duo_core_features_enabled?: boolean;
    duo_features_enabled?: string;
    emails_disabled?: boolean;
    emails_enabled?: boolean;
    enabled_git_access_protocol?: string;
    extra_shared_runners_minutes_limit?: string;
    file_template_project_id?: string;
    full_name?: string;
    full_path?: string;
    id?: string;
    ip_restriction_ranges?: string;
    ldap_access?: string;
    ldap_cn?: string;
    ldap_group_links?: Record<string, any>;
    lfs_enabled?: string;
    lock_duo_features_enabled?: string;
    lock_math_rendering_limits_enabled?: boolean;
    marked_for_deletion_on?: string;
    math_rendering_limits_enabled?: boolean;
    max_artifacts_size?: number;
    membership_lock?: string;
    mentions_disabled?: string;
    name?: string;
    organization_id?: string;
    parent_id?: string;
    path?: string;
    prevent_forking_outside_group?: string;
    prevent_sharing_groups_outside_hierarchy?: string;
    project_creation_level?: string;
    projects?: Record<string, any>;
    repository_storage?: string;
    request_access_enabled?: string;
    require_two_factor_authentication?: string;
    root_storage_statistics?: Record<string, any>;
    runners_token?: string;
    saml_group_links?: Record<string, any>;
    service_access_tokens_expiration_enforced?: string;
    share_with_group_lock?: string;
    shared_projects?: Record<string, any>;
    shared_runners_minutes_limit?: string;
    shared_runners_setting?: string;
    shared_with_groups?: string;
    show_diff_preview_in_email?: boolean;
    statistics?: Record<string, any>;
    subgroup_creation_level?: string;
    two_factor_grace_period?: string;
    unique_project_download_limit?: string;
    unique_project_download_limit_alertlist?: string;
    unique_project_download_limit_allowlist?: string;
    unique_project_download_limit_interval_in_seconds?: string;
    visibility?: string;
    web_based_commit_signing_enabled?: string;
    web_url?: string;
    wiki_access_level?: string;
    $action?: string;
    [action: string]: any;
}
export interface ApiEntitiesHook {
    alert_status?: any;
    branch_filter_strategy?: string;
    created_at?: string;
    custom_headers?: any[];
    custom_webhook_template?: string;
    description?: string;
    disabled_until?: string;
    enable_ssl_verification?: boolean;
    id?: string;
    merge_requests_events?: boolean;
    name?: string;
    push_events?: boolean;
    push_events_branch_filter?: string;
    repository_update_events?: boolean;
    tag_push_events?: boolean;
    url?: string;
    url_variables?: any[];
}
export interface ApiEntitiesHookLoadMatch {
    id: string;
}
export interface ApiEntitiesHookListMatch {
    page?: number;
    per_page?: number;
}
export interface ApiEntitiesHookCreateData {
    post_api_v4_hook: Record<string, any>;
    alert_status?: any;
    branch_filter_strategy?: string;
    created_at?: string;
    custom_headers?: any[];
    custom_webhook_template?: string;
    description?: string;
    disabled_until?: string;
    enable_ssl_verification?: boolean;
    id?: string;
    merge_requests_events?: boolean;
    name?: string;
    push_events?: boolean;
    push_events_branch_filter?: string;
    repository_update_events?: boolean;
    tag_push_events?: boolean;
    url?: string;
    url_variables?: any[];
}
export interface ApiEntitiesHookUpdateData {
    id: string;
    put_api_v4_hooks_hook_id: Record<string, any>;
    alert_status?: any;
    branch_filter_strategy?: string;
    created_at?: string;
    custom_headers?: any[];
    custom_webhook_template?: string;
    description?: string;
    disabled_until?: string;
    enable_ssl_verification?: boolean;
    merge_requests_events?: boolean;
    name?: string;
    push_events?: boolean;
    push_events_branch_filter?: string;
    repository_update_events?: boolean;
    tag_push_events?: boolean;
    url?: string;
    url_variables?: any[];
}
export interface ApiEntitiesIntegration {
    id?: string;
}
export interface ApiEntitiesIntegrationLoadMatch {
    group_id: string;
    id: string;
}
export interface ApiEntitiesIntegrationBasic {
    active?: boolean;
    alert_events?: boolean;
    comment_on_event_enabled?: boolean;
    commit_events?: boolean;
    confidential_issues_events?: boolean;
    confidential_note_events?: boolean;
    created_at?: string;
    deployment_events?: boolean;
    id?: number;
    incident_events?: boolean;
    inherited?: boolean;
    issues_events?: boolean;
    job_events?: boolean;
    merge_requests_events?: boolean;
    note_events?: boolean;
    pipeline_events?: boolean;
    push_events?: boolean;
    slug?: number;
    tag_push_events?: boolean;
    title?: string;
    updated_at?: string;
    vulnerability_events?: boolean;
    wiki_page_events?: boolean;
}
export interface ApiEntitiesIntegrationBasicListMatch {
    group_id: string;
}
export interface ApiEntitiesIntegrationBasicUpdateData {
    group_id: string;
    put_api_v4_groups_id_integrations_apple_app_store: Record<string, any>;
    active?: boolean;
    alert_events?: boolean;
    comment_on_event_enabled?: boolean;
    commit_events?: boolean;
    confidential_issues_events?: boolean;
    confidential_note_events?: boolean;
    created_at?: string;
    deployment_events?: boolean;
    id?: number;
    incident_events?: boolean;
    inherited?: boolean;
    issues_events?: boolean;
    job_events?: boolean;
    merge_requests_events?: boolean;
    note_events?: boolean;
    pipeline_events?: boolean;
    push_events?: boolean;
    slug?: number;
    tag_push_events?: boolean;
    title?: string;
    updated_at?: string;
    vulnerability_events?: boolean;
    wiki_page_events?: boolean;
}
export interface ApiEntitiesInvitation {
    access_level?: string;
    created_at?: string;
    created_by_name?: string;
    expires_at?: string;
    id?: string;
    invite_email?: string;
    invite_token?: string;
    user_name?: string;
}
export interface ApiEntitiesInvitationListMatch {
    group_id: string;
    page?: number;
    per_page?: number;
    query?: any;
}
export interface ApiEntitiesInvitationCreateData {
    group_id: string;
    post_api_v4_groups_id_invitation: Record<string, any>;
    access_level?: string;
    created_at?: string;
    created_by_name?: string;
    expires_at?: string;
    id?: string;
    invite_email?: string;
    invite_token?: string;
    user_name?: string;
}
export interface ApiEntitiesInvitationUpdateData {
    group_id?: string;
    id: string;
    put_api_v4_groups_id_invitations_email?: Record<string, any>;
    project_id?: string;
    put_api_v4_projects_id_invitations_email?: Record<string, any>;
    access_level?: string;
    created_at?: string;
    created_by_name?: string;
    expires_at?: string;
    invite_email?: string;
    invite_token?: string;
    user_name?: string;
}
export interface ApiEntitiesIssuableTimeStat {
    human_time_estimate?: string;
    human_total_time_spent?: string;
    time_estimate?: number;
    total_time_spent?: number;
}
export interface ApiEntitiesIssuableTimeStatLoadMatch {
    issue_id?: string;
    project_id: string;
    merge_request_id?: string;
}
export interface ApiEntitiesIssuableTimeStatCreateData {
    issue_id?: string;
    project_id: string;
    post_api_v4_projects_id_issues_issue_iid_add_spent_time?: Record<string, any>;
    post_api_v4_projects_id_issues_issue_iid_time_estimate?: Record<string, any>;
    merge_request_id?: string;
    post_api_v4_projects_id_merge_requests_merge_request_iid_add_spent_time?: Record<string, any>;
    post_api_v4_projects_id_merge_requests_merge_request_iid_time_estimate?: Record<string, any>;
    human_time_estimate?: string;
    human_total_time_spent?: string;
    time_estimate?: number;
    total_time_spent?: number;
}
export interface ApiEntitiesIssue {
    assignee?: Record<string, any>;
    assignees?: Record<string, any>;
    author?: Record<string, any>;
    blocking_issues_count?: string;
    closed_at?: string;
    closed_by?: Record<string, any>;
    confidential?: boolean;
    created_at?: string;
    description?: string;
    discussion_locked?: boolean;
    downvotes?: string;
    due_date?: string;
    epic?: Record<string, any>;
    epic_iid?: string;
    has_tasks?: boolean;
    health_status?: string;
    id?: number;
    iid?: number;
    imported?: string;
    imported_from?: string;
    issue_type?: string;
    iteration?: Record<string, any>;
    labels?: any[];
    links?: Record<string, any>;
    merge_requests_count?: string;
    milestone?: Record<string, any>;
    moved_to_id?: string;
    project_id?: number;
    references?: Record<string, any>;
    service_desk_reply_to?: string;
    severity?: string;
    state?: string;
    subscribed?: string;
    task_completion_status?: string;
    task_status?: string;
    time_stats?: Record<string, any>;
    title?: string;
    type?: string;
    updated_at?: string;
    upvotes?: string;
    user_notes_count?: string;
    web_url?: string;
    weight?: string;
}
export interface ApiEntitiesIssueLoadMatch {
    id: string;
    project_id?: string;
}
export interface ApiEntitiesIssueListMatch {
    assignee_id?: string;
    assignee_username?: any;
    author_id?: string;
    author_username?: any;
    closed_by_id?: string;
    confidential?: any;
    created_after?: any;
    created_before?: any;
    due_date?: any;
    epic_id?: string;
    health_status?: any;
    iid?: any;
    in?: any;
    issue_type?: any;
    iteration_id?: string;
    iteration_title?: any;
    label?: string;
    milestone?: any;
    milestone_id?: string;
    my_reaction_emoji?: any;
    non_archived?: any;
    not_assignee_id?: string;
    not_assignee_username?: any;
    not_author_id?: string;
    not_author_username?: any;
    not_iid?: any;
    not_iteration_id?: string;
    not_iteration_title?: any;
    not_label?: any;
    not_milestone?: any;
    not_milestone_id?: string;
    not_weight?: any;
    order_by?: any;
    page?: number;
    per_page?: number;
    scope?: any;
    search?: any;
    sort?: any;
    state?: any;
    updated_after?: any;
    updated_before?: any;
    weight?: number;
    with_labels_detail?: any;
}
export interface ApiEntitiesIssueCreateData {
    issue_id?: string;
    project_id: string;
    post_api_v4_projects_id_issues_issue_iid_clone?: Record<string, any>;
    post_api_v4_projects_id_issues_issue_iid_move?: Record<string, any>;
    post_api_v4_projects_id_issue?: Record<string, any>;
    assignee?: Record<string, any>;
    assignees?: Record<string, any>;
    author?: Record<string, any>;
    blocking_issues_count?: string;
    closed_at?: string;
    closed_by?: Record<string, any>;
    confidential?: boolean;
    created_at?: string;
    description?: string;
    discussion_locked?: boolean;
    downvotes?: string;
    due_date?: string;
    epic?: Record<string, any>;
    epic_iid?: string;
    has_tasks?: boolean;
    health_status?: string;
    id?: number;
    iid?: number;
    imported?: string;
    imported_from?: string;
    issue_type?: string;
    iteration?: Record<string, any>;
    labels?: any[];
    links?: Record<string, any>;
    merge_requests_count?: string;
    milestone?: Record<string, any>;
    moved_to_id?: string;
    references?: Record<string, any>;
    service_desk_reply_to?: string;
    severity?: string;
    state?: string;
    subscribed?: string;
    task_completion_status?: string;
    task_status?: string;
    time_stats?: Record<string, any>;
    title?: string;
    type?: string;
    updated_at?: string;
    upvotes?: string;
    user_notes_count?: string;
    web_url?: string;
    weight?: string;
}
export interface ApiEntitiesIssueUpdateData {
    id?: string;
    project_id: string;
    put_api_v4_projects_id_issues_issue_iid?: Record<string, any>;
    issue_id?: string;
    put_api_v4_projects_id_issues_issue_iid_reorder?: Record<string, any>;
    assignee?: Record<string, any>;
    assignees?: Record<string, any>;
    author?: Record<string, any>;
    blocking_issues_count?: string;
    closed_at?: string;
    closed_by?: Record<string, any>;
    confidential?: boolean;
    created_at?: string;
    description?: string;
    discussion_locked?: boolean;
    downvotes?: string;
    due_date?: string;
    epic?: Record<string, any>;
    epic_iid?: string;
    has_tasks?: boolean;
    health_status?: string;
    iid?: number;
    imported?: string;
    imported_from?: string;
    issue_type?: string;
    iteration?: Record<string, any>;
    labels?: any[];
    links?: Record<string, any>;
    merge_requests_count?: string;
    milestone?: Record<string, any>;
    moved_to_id?: string;
    references?: Record<string, any>;
    service_desk_reply_to?: string;
    severity?: string;
    state?: string;
    subscribed?: string;
    task_completion_status?: string;
    task_status?: string;
    time_stats?: Record<string, any>;
    title?: string;
    type?: string;
    updated_at?: string;
    upvotes?: string;
    user_notes_count?: string;
    web_url?: string;
    weight?: string;
}
export interface ApiEntitiesIssueLink {
    id?: string;
    link_type?: string;
    source_issue?: Record<string, any>;
    target_issue?: Record<string, any>;
}
export interface ApiEntitiesIssueLinkLoadMatch {
    id: string;
    issue_id: string;
    project_id: string;
}
export interface ApiEntitiesIssueLinkCreateData {
    issue_id: string;
    project_id: string;
    post_api_v4_projects_id_issues_issue_iid_link: Record<string, any>;
    id?: string;
    link_type?: string;
    source_issue?: Record<string, any>;
    target_issue?: Record<string, any>;
}
export interface ApiEntitiesLicense {
    conditions?: any[];
    content?: string;
    description?: string;
    html_url?: string;
    id?: string;
    key?: string;
    limitations?: any[];
    name?: string;
    nickname?: string;
    permissions?: any[];
    popular?: boolean;
    source_url?: string;
}
export interface ApiEntitiesLicenseLoadMatch {
    id: string;
    name: string;
    type: any;
    fullname?: any;
    project?: any;
    source_template_project_id?: string;
}
export interface ApiEntitiesMarkdown {
}
export interface ApiEntitiesMarkdownCreateData {
    post_api_v4_markdown: Record<string, any>;
}
export interface ApiEntitiesMarkdownUploadAdmin {
    created_at?: string;
    filename?: string;
    id?: string;
    size?: string;
    uploaded_by?: Record<string, any>;
}
export interface ApiEntitiesMarkdownUploadAdminListMatch {
    group_id: string;
    page?: number;
    per_page?: number;
}
export interface ApiEntitiesMember {
    access_level?: string;
    avatar_path?: string;
    avatar_url?: string;
    created_at?: string;
    created_by?: Record<string, any>;
    custom_attributes?: any[];
    email?: string;
    expires_at?: string;
    group_saml_identity?: Record<string, any>;
    group_scim_identity?: Record<string, any>;
    id?: number;
    is_using_seat?: boolean;
    key?: string;
    locked?: boolean;
    member_role?: Record<string, any>;
    membership_state?: string;
    name?: string;
    override?: string;
    public_email?: string;
    state?: string;
    username?: string;
    value?: string;
    web_url?: string;
}
export interface ApiEntitiesMemberLoadMatch {
    group_id: string;
    id: string;
}
export interface ApiEntitiesMemberListMatch {
    group_id: string;
    page?: number;
    per_page?: number;
    query?: any;
    show_seat_info?: any;
    skip_user?: any;
    user_id?: string;
    with_saml_identity?: any;
}
export interface ApiEntitiesMemberCreateData {
    group_id: string;
    post_api_v4_groups_id_member: Record<string, any>;
    access_level?: string;
    avatar_path?: string;
    avatar_url?: string;
    created_at?: string;
    created_by?: Record<string, any>;
    custom_attributes?: any[];
    email?: string;
    expires_at?: string;
    group_saml_identity?: Record<string, any>;
    group_scim_identity?: Record<string, any>;
    id?: number;
    is_using_seat?: boolean;
    key?: string;
    locked?: boolean;
    member_role?: Record<string, any>;
    membership_state?: string;
    name?: string;
    override?: string;
    public_email?: string;
    state?: string;
    username?: string;
    value?: string;
    web_url?: string;
}
export interface ApiEntitiesMemberUpdateData {
    group_id?: string;
    id: string;
    put_api_v4_groups_id_members_user_id?: Record<string, any>;
    project_id?: string;
    put_api_v4_projects_id_members_user_id?: Record<string, any>;
    access_level?: string;
    avatar_path?: string;
    avatar_url?: string;
    created_at?: string;
    created_by?: Record<string, any>;
    custom_attributes?: any[];
    email?: string;
    expires_at?: string;
    group_saml_identity?: Record<string, any>;
    group_scim_identity?: Record<string, any>;
    is_using_seat?: boolean;
    key?: string;
    locked?: boolean;
    member_role?: Record<string, any>;
    membership_state?: string;
    name?: string;
    override?: string;
    public_email?: string;
    state?: string;
    username?: string;
    value?: string;
    web_url?: string;
    $action?: string;
    [action: string]: any;
}
export interface ApiEntitiesMemberRemoveMatch {
    group_id: string;
    member_id: string;
}
export interface ApiEntitiesMerge {
    allow_collaboration?: boolean;
    allow_maintainer_to_push?: boolean;
    approvals_before_merge?: string;
    assignee?: Record<string, any>;
    assignees?: Record<string, any>;
    author?: Record<string, any>;
    blocking_discussions_resolved?: string;
    changes_count?: string;
    closed_at?: string;
    closed_by?: Record<string, any>;
    created_at?: string;
    description?: string;
    description_html?: string;
    detailed_merge_status?: string;
    diff_refs?: Record<string, any>;
    discussion_locked?: string;
    diverged_commits_count?: string;
    downvotes?: string;
    draft?: string;
    first_contribution?: string;
    first_deployed_to_production_at?: string;
    force_remove_source_branch?: string;
    has_conflicts?: boolean;
    head_pipeline?: Record<string, any>;
    id?: number;
    iid?: number;
    imported?: string;
    imported_from?: string;
    labels?: string;
    latest_build_finished_at?: string;
    latest_build_started_at?: string;
    merge_after?: string;
    merge_commit_sha?: string;
    merge_error?: string;
    merge_status?: string;
    merge_user?: Record<string, any>;
    merge_when_pipeline_succeeds?: string;
    merged_at?: string;
    merged_by?: Record<string, any>;
    milestone?: Record<string, any>;
    pipeline?: Record<string, any>;
    prepared_at?: string;
    project_id?: number;
    rebase_in_progress?: string;
    reference?: string;
    references?: Record<string, any>;
    reviewers?: Record<string, any>;
    sha?: string;
    should_remove_source_branch?: boolean;
    source_branch?: string;
    source_project_id?: string;
    squash?: string;
    squash_commit_sha?: string;
    squash_on_merge?: string;
    state?: string;
    subscribed?: string;
    target_branch?: string;
    target_project_id?: string;
    task_completion_status?: string;
    time_stats?: Record<string, any>;
    title?: string;
    title_html?: string;
    updated_at?: string;
    upvotes?: string;
    user?: Record<string, any>;
    user_notes_count?: string;
    web_url?: string;
    work_in_progress?: string;
}
export interface ApiEntitiesMergeLoadMatch {
    merge_request_iid: any;
    project_id: string;
    include_diverged_commits_count?: number;
    include_rebase_in_progress?: any;
    render_html?: any;
}
export interface ApiEntitiesMergeCreateData {
    merge_request_id?: string;
    project_id: string;
    post_api_v4_projects_id_merge_request?: Record<string, any>;
    allow_collaboration?: boolean;
    allow_maintainer_to_push?: boolean;
    approvals_before_merge?: string;
    assignee?: Record<string, any>;
    assignees?: Record<string, any>;
    author?: Record<string, any>;
    blocking_discussions_resolved?: string;
    changes_count?: string;
    closed_at?: string;
    closed_by?: Record<string, any>;
    created_at?: string;
    description?: string;
    description_html?: string;
    detailed_merge_status?: string;
    diff_refs?: Record<string, any>;
    discussion_locked?: string;
    diverged_commits_count?: string;
    downvotes?: string;
    draft?: string;
    first_contribution?: string;
    first_deployed_to_production_at?: string;
    force_remove_source_branch?: string;
    has_conflicts?: boolean;
    head_pipeline?: Record<string, any>;
    id?: number;
    iid?: number;
    imported?: string;
    imported_from?: string;
    labels?: string;
    latest_build_finished_at?: string;
    latest_build_started_at?: string;
    merge_after?: string;
    merge_commit_sha?: string;
    merge_error?: string;
    merge_status?: string;
    merge_user?: Record<string, any>;
    merge_when_pipeline_succeeds?: string;
    merged_at?: string;
    merged_by?: Record<string, any>;
    milestone?: Record<string, any>;
    pipeline?: Record<string, any>;
    prepared_at?: string;
    rebase_in_progress?: string;
    reference?: string;
    references?: Record<string, any>;
    reviewers?: Record<string, any>;
    sha?: string;
    should_remove_source_branch?: boolean;
    source_branch?: string;
    source_project_id?: string;
    squash?: string;
    squash_commit_sha?: string;
    squash_on_merge?: string;
    state?: string;
    subscribed?: string;
    target_branch?: string;
    target_project_id?: string;
    task_completion_status?: string;
    time_stats?: Record<string, any>;
    title?: string;
    title_html?: string;
    updated_at?: string;
    upvotes?: string;
    user?: Record<string, any>;
    user_notes_count?: string;
    web_url?: string;
    work_in_progress?: string;
}
export interface ApiEntitiesMergeUpdateData {
    merge_request_id?: string;
    project_id: string;
    put_api_v4_projects_id_merge_requests_merge_request_iid_merge?: Record<string, any>;
    merge_request_iid?: any;
    put_api_v4_projects_id_merge_requests_merge_request_iid?: Record<string, any>;
    allow_collaboration?: boolean;
    allow_maintainer_to_push?: boolean;
    approvals_before_merge?: string;
    assignee?: Record<string, any>;
    assignees?: Record<string, any>;
    author?: Record<string, any>;
    blocking_discussions_resolved?: string;
    changes_count?: string;
    closed_at?: string;
    closed_by?: Record<string, any>;
    created_at?: string;
    description?: string;
    description_html?: string;
    detailed_merge_status?: string;
    diff_refs?: Record<string, any>;
    discussion_locked?: string;
    diverged_commits_count?: string;
    downvotes?: string;
    draft?: string;
    first_contribution?: string;
    first_deployed_to_production_at?: string;
    force_remove_source_branch?: string;
    has_conflicts?: boolean;
    head_pipeline?: Record<string, any>;
    id?: number;
    iid?: number;
    imported?: string;
    imported_from?: string;
    labels?: string;
    latest_build_finished_at?: string;
    latest_build_started_at?: string;
    merge_after?: string;
    merge_commit_sha?: string;
    merge_error?: string;
    merge_status?: string;
    merge_user?: Record<string, any>;
    merge_when_pipeline_succeeds?: string;
    merged_at?: string;
    merged_by?: Record<string, any>;
    milestone?: Record<string, any>;
    pipeline?: Record<string, any>;
    prepared_at?: string;
    rebase_in_progress?: string;
    reference?: string;
    references?: Record<string, any>;
    reviewers?: Record<string, any>;
    sha?: string;
    should_remove_source_branch?: boolean;
    source_branch?: string;
    source_project_id?: string;
    squash?: string;
    squash_commit_sha?: string;
    squash_on_merge?: string;
    state?: string;
    subscribed?: string;
    target_branch?: string;
    target_project_id?: string;
    task_completion_status?: string;
    time_stats?: Record<string, any>;
    title?: string;
    title_html?: string;
    updated_at?: string;
    upvotes?: string;
    user?: Record<string, any>;
    user_notes_count?: string;
    web_url?: string;
    work_in_progress?: string;
    $action?: string;
    [action: string]: any;
}
export interface ApiEntitiesMergeRequestApproval {
    approved_at?: string;
    user?: Record<string, any>;
}
export interface ApiEntitiesMergeRequestApprovalLoadMatch {
    merge_request_id: string;
    project_id: string;
}
export interface ApiEntitiesMergeRequestApprovalCreateData {
    merge_request_id: string;
    project_id: string;
    post_api_v4_projects_id_merge_requests_merge_request_iid_approve?: Record<string, any>;
    approved_at?: string;
    user?: Record<string, any>;
}
export interface ApiEntitiesMergeRequestBasic {
    allow_collaboration?: boolean;
    allow_maintainer_to_push?: boolean;
    approvals_before_merge?: string;
    assignee?: Record<string, any>;
    assignees?: Record<string, any>;
    author?: Record<string, any>;
    blocking_discussions_resolved?: string;
    closed_at?: string;
    closed_by?: Record<string, any>;
    created_at?: string;
    description?: string;
    description_html?: string;
    detailed_merge_status?: string;
    discussion_locked?: string;
    downvotes?: string;
    draft?: string;
    force_remove_source_branch?: string;
    has_conflicts?: boolean;
    id?: number;
    iid?: number;
    imported?: string;
    imported_from?: string;
    labels?: string;
    merge_after?: string;
    merge_commit_sha?: string;
    merge_status?: string;
    merge_user?: Record<string, any>;
    merge_when_pipeline_succeeds?: string;
    merged_at?: string;
    merged_by?: Record<string, any>;
    milestone?: Record<string, any>;
    prepared_at?: string;
    project_id?: number;
    reference?: string;
    references?: Record<string, any>;
    reviewers?: Record<string, any>;
    sha?: string;
    should_remove_source_branch?: boolean;
    source_branch?: string;
    source_project_id?: string;
    squash?: string;
    squash_commit_sha?: string;
    squash_on_merge?: string;
    state?: string;
    target_branch?: string;
    target_project_id?: string;
    task_completion_status?: string;
    time_stats?: Record<string, any>;
    title?: string;
    title_html?: string;
    updated_at?: string;
    upvotes?: string;
    user_notes_count?: string;
    web_url?: string;
    work_in_progress?: string;
}
export interface ApiEntitiesMergeRequestBasicLoadMatch {
    approved?: any;
    approved_by_id?: string;
    approved_by_username?: any;
    approver_id?: string;
    assignee_id?: string;
    assignee_username?: any;
    author_id?: string;
    author_username?: any;
    created_after?: any;
    created_before?: any;
    deployed_after?: any;
    deployed_before?: any;
    environment?: any;
    in?: any;
    label?: string;
    merge_user_id?: string;
    merge_user_username?: any;
    milestone?: any;
    my_reaction_emoji?: any;
    not_assignee_id?: string;
    not_assignee_username?: any;
    not_author_id?: string;
    not_author_username?: any;
    not_label?: any;
    not_milestone?: any;
    not_my_reaction_emoji?: any;
    not_reviewer_id?: string;
    not_reviewer_username?: any;
    order_by?: any;
    page?: number;
    per_page?: number;
    reviewer_id?: string;
    reviewer_username?: any;
    scope?: any;
    search?: any;
    sort?: any;
    source_branch?: any;
    source_project_id?: string;
    state?: any;
    target_branch?: any;
    updated_after?: any;
    updated_before?: any;
    view?: any;
    wip?: any;
    with_labels_detail?: any;
    with_merge_status_recheck?: any;
}
export interface ApiEntitiesMergeRequestBasicListMatch {
    deployment_id?: string;
    project_id: string;
    approved?: any;
    assignee_id?: string;
    assignee_username?: any;
    author_id?: string;
    author_username?: any;
    created_after?: any;
    created_before?: any;
    deployed_after?: any;
    deployed_before?: any;
    environment?: any;
    in?: any;
    label?: string;
    merge_user_id?: string;
    merge_user_username?: any;
    milestone?: any;
    my_reaction_emoji?: any;
    not_assignee_id?: string;
    not_assignee_username?: any;
    not_author_id?: string;
    not_author_username?: any;
    not_label?: any;
    not_milestone?: any;
    not_my_reaction_emoji?: any;
    not_reviewer_id?: string;
    not_reviewer_username?: any;
    order_by?: any;
    page?: number;
    per_page?: number;
    reviewer_id?: string;
    reviewer_username?: any;
    scope?: any;
    search?: any;
    sort?: any;
    source_branch?: any;
    source_project_id?: string;
    state?: any;
    target_branch?: any;
    updated_after?: any;
    updated_before?: any;
    view?: any;
    wip?: any;
    with_labels_detail?: any;
    with_merge_status_recheck?: any;
    sha?: any;
}
export interface ApiEntitiesMergeRequestChange {
    allow_collaboration?: boolean;
    allow_maintainer_to_push?: boolean;
    approvals_before_merge?: string;
    assignee?: Record<string, any>;
    assignees?: Record<string, any>;
    author?: Record<string, any>;
    blocking_discussions_resolved?: string;
    changes?: Record<string, any>;
    changes_count?: string;
    closed_at?: string;
    closed_by?: Record<string, any>;
    created_at?: string;
    description?: string;
    description_html?: string;
    detailed_merge_status?: string;
    diff_refs?: Record<string, any>;
    discussion_locked?: string;
    diverged_commits_count?: string;
    downvotes?: string;
    draft?: string;
    first_contribution?: string;
    first_deployed_to_production_at?: string;
    force_remove_source_branch?: string;
    has_conflicts?: boolean;
    head_pipeline?: Record<string, any>;
    id?: number;
    iid?: number;
    imported?: string;
    imported_from?: string;
    labels?: string;
    latest_build_finished_at?: string;
    latest_build_started_at?: string;
    merge_after?: string;
    merge_commit_sha?: string;
    merge_error?: string;
    merge_status?: string;
    merge_user?: Record<string, any>;
    merge_when_pipeline_succeeds?: string;
    merged_at?: string;
    merged_by?: Record<string, any>;
    milestone?: Record<string, any>;
    overflow?: string;
    pipeline?: Record<string, any>;
    prepared_at?: string;
    project_id?: number;
    rebase_in_progress?: string;
    reference?: string;
    references?: Record<string, any>;
    reviewers?: Record<string, any>;
    sha?: string;
    should_remove_source_branch?: boolean;
    source_branch?: string;
    source_project_id?: string;
    squash?: string;
    squash_commit_sha?: string;
    squash_on_merge?: string;
    state?: string;
    subscribed?: string;
    target_branch?: string;
    target_project_id?: string;
    task_completion_status?: string;
    time_stats?: Record<string, any>;
    title?: string;
    title_html?: string;
    updated_at?: string;
    upvotes?: string;
    user?: Record<string, any>;
    user_notes_count?: string;
    web_url?: string;
    work_in_progress?: string;
}
export interface ApiEntitiesMergeRequestChangeLoadMatch {
    merge_request_id: string;
    project_id: string;
    unidiff?: any;
}
export interface ApiEntitiesMergeRequestDiff {
    base_commit_sha?: string;
    created_at?: string;
    head_commit_sha?: string;
    id?: string;
    merge_request_id?: string;
    patch_id_sha?: string;
    real_size?: string;
    start_commit_sha?: string;
    state?: string;
}
export interface ApiEntitiesMergeRequestDiffListMatch {
    merge_request_id: string;
    project_id: string;
    page?: number;
    per_page?: number;
}
export interface ApiEntitiesMergeRequestDiffFull {
    base_commit_sha?: string;
    commits?: Record<string, any>;
    created_at?: string;
    diffs?: Record<string, any>;
    head_commit_sha?: string;
    id?: string;
    merge_request_id?: string;
    patch_id_sha?: string;
    real_size?: string;
    start_commit_sha?: string;
    state?: string;
}
export interface ApiEntitiesMergeRequestDiffFullLoadMatch {
    merge_request_id: string;
    project_id: string;
    version_id: string;
    unidiff?: any;
}
export interface ApiEntitiesMergeRequestReviewer {
    avatar_path?: string;
    avatar_url?: string;
    custom_attributes?: any[];
    id?: number;
    locked?: boolean;
    name?: string;
    public_email?: string;
    state?: string;
    username?: string;
    web_url?: string;
}
export interface ApiEntitiesMergeRequestReviewerLoadMatch {
    merge_request_id: string;
    project_id: string;
}
export interface ApiEntitiesMetricImage {
    created_at?: string;
    file_path?: string;
    filename?: string;
    id?: number;
    url?: string;
    url_text?: string;
}
export interface ApiEntitiesMetricImageListMatch {
    alert_management_alert_id: string;
    project_id: string;
}
export interface ApiEntitiesMetricImageCreateData {
    alert_management_alert_id: string;
    project_id: string;
    file: any;
    url?: string;
    url_text?: any;
    created_at?: string;
    file_path?: string;
    filename?: string;
    id?: number;
}
export interface ApiEntitiesMetricImageUpdateData {
    alert_management_alert_id: string;
    id: string;
    project_id: string;
    url?: string;
    url_text?: any;
    created_at?: string;
    file_path?: string;
    filename?: string;
}
export interface ApiEntitiesMrNote {
    avatar_path?: string;
    avatar_url?: string;
    custom_attributes?: any[];
    id?: number;
    locked?: boolean;
    name?: string;
    public_email?: string;
    state?: string;
    username?: string;
    web_url?: string;
}
export interface ApiEntitiesMrNoteLoadMatch {
    merge_request_id: string;
    project_id: string;
    page?: number;
    per_page?: number;
}
export interface ApiEntitiesNamespace {
    additional_purchased_storage_ends_on?: string;
    additional_purchased_storage_size?: number;
    avatar_url?: string;
    billable_members_count?: number;
    end_date?: string;
    extra_shared_runners_minutes_limit?: number;
    full_path?: string;
    id?: number;
    kind?: string;
    max_seats_used?: number;
    max_seats_used_changed_at?: string;
    members_count_with_descendants?: number;
    name?: string;
    parent_id?: number;
    path?: string;
    plan?: string;
    projects_count?: number;
    root_repository_size?: number;
    seats_in_use?: number;
    shared_runners_minutes_limit?: number;
    trial?: boolean;
    trial_ends_on?: string;
    web_url?: string;
}
export interface ApiEntitiesNamespaceLoadMatch {
    id: string;
}
export interface ApiEntitiesNamespaceListMatch {
    full_path_search?: any;
    owned_only?: any;
    page?: number;
    per_page?: number;
    requested_hosted_plan?: any;
    search?: any;
    top_level_only?: any;
}
export interface ApiEntitiesNamespaceUpdateData {
    id: string;
    put_api_v4_namespaces_id: Record<string, any>;
    additional_purchased_storage_ends_on?: string;
    additional_purchased_storage_size?: number;
    avatar_url?: string;
    billable_members_count?: number;
    end_date?: string;
    extra_shared_runners_minutes_limit?: number;
    full_path?: string;
    kind?: string;
    max_seats_used?: number;
    max_seats_used_changed_at?: string;
    members_count_with_descendants?: number;
    name?: string;
    parent_id?: number;
    path?: string;
    plan?: string;
    projects_count?: number;
    root_repository_size?: number;
    seats_in_use?: number;
    shared_runners_minutes_limit?: number;
    trial?: boolean;
    trial_ends_on?: string;
    web_url?: string;
}
export interface ApiEntitiesNamespaceExistence {
    exists?: boolean;
    suggests?: any[];
}
export interface ApiEntitiesNamespaceExistenceListMatch {
    namespace_id: string;
    parent_id?: string;
}
export interface ApiEntitiesNamespacesStorageLimitExclusion {
    id?: number;
    namespace_id?: number;
    namespace_name?: string;
    reason?: string;
}
export interface ApiEntitiesNamespacesStorageLimitExclusionLoadMatch {
    page?: number;
    per_page?: number;
}
export interface ApiEntitiesNamespacesStorageLimitExclusionCreateData {
    namespace_id: string;
    post_api_v4_namespaces_id_storage_limit_exclusion: Record<string, any>;
    id?: number;
    namespace_name?: string;
    reason?: string;
}
export interface ApiEntitiesNpmPackage {
    disttags?: Record<string, any>;
    name?: string;
    versions?: Record<string, any>;
}
export interface ApiEntitiesNpmPackageLoadMatch {
    group_id?: string;
    package_name: any;
    project_id?: string;
}
export interface ApiEntitiesNpmPackageTag {
}
export interface ApiEntitiesNpmPackageTagLoadMatch {
    group_id?: string;
    package_name: any;
    project_id?: string;
}
export interface ApiEntitiesNugetPackagesVersion {
    versions?: any[];
}
export interface ApiEntitiesNugetPackagesVersionListMatch {
    project_id: string;
    package_name: any;
}
export interface ApiEntitiesNugetSearchResult {
    authors?: string;
    description?: string;
    iconUrl?: string;
    id?: string;
    licenseUrl?: string;
    projectUrl?: string;
    summary?: string;
    tags?: string;
    title?: string;
    totalDownloads?: number;
    type?: string;
    verified?: boolean;
    version?: string;
    versions?: Record<string, any>;
}
export interface ApiEntitiesNugetSearchResultListMatch {
    project_id: string;
    prerelease?: any;
    q?: any;
    skip?: number;
    take?: any;
}
export interface ApiEntitiesNugetServiceIndex {
    resources?: any[];
    version?: string;
}
export interface ApiEntitiesNugetServiceIndexListMatch {
    project_id: string;
}
export interface ApiEntitiesOrganizationsOrganization {
}
export interface ApiEntitiesOrganizationsOrganizationCreateData {
    post_api_v4_organization: Record<string, any>;
}
export interface ApiEntitiesPackage {
    conan_package_name?: string;
    created_at?: string;
    id?: number;
    last_downloaded_at?: string;
    links?: Record<string, any>;
    name?: string;
    package_type?: string;
    pipeline?: Record<string, any>;
    pipelines?: Record<string, any>;
    project_id?: number;
    project_path?: string;
    status?: string;
    tags?: string;
    version?: string;
    versions?: Record<string, any>;
}
export interface ApiEntitiesPackageLoadMatch {
    id: string;
    project_id: string;
}
export interface ApiEntitiesPackageListMatch {
    group_id: string;
    exclude_subgroup?: any;
    include_versionless?: any;
    order_by?: any;
    package_name?: any;
    package_type?: any;
    package_version?: any;
    page?: number;
    per_page?: number;
    sort?: any;
    status?: any;
}
export interface ApiEntitiesPackageFile {
    created_at?: string;
    file_md5?: string;
    file_name?: string;
    file_sha1?: string;
    file_sha256?: string;
    id?: number;
    package_id?: number;
    pipelines?: Record<string, any>;
    size?: number;
}
export interface ApiEntitiesPackageFileListMatch {
    package_id: string;
    project_id: string;
    order_by?: any;
    page?: number;
    per_page?: number;
    sort?: any;
}
export interface ApiEntitiesPackagePipeline {
    avatar_path?: string;
    avatar_url?: string;
    custom_attributes?: any[];
    id?: number;
    locked?: boolean;
    name?: string;
    public_email?: string;
    state?: string;
    username?: string;
    web_url?: string;
}
export interface ApiEntitiesPackagePipelineLoadMatch {
    package_id: string;
    project_id: string;
    cursor?: any;
    page?: number;
    per_page?: number;
}
export interface ApiEntitiesPackagesConanFilesList {
}
export interface ApiEntitiesPackagesConanFilesListLoadMatch {
    conan_id: string;
    package_channel: any;
    package_id?: string;
    package_revision?: any;
    package_username: any;
    package_version: any;
    project_id: string;
    revision_id?: string;
    recipe_revision?: any;
}
export interface ApiEntitiesPackagesConanPackageManifest {
}
export interface ApiEntitiesPackagesConanPackageManifestLoadMatch {
    conan_id: string;
    conan_package_reference: any;
    package_channel: any;
    package_username: any;
    package_version: any;
    project_id?: string;
}
export interface ApiEntitiesPackagesConanPackageRevision {
    revision?: string;
    time?: string;
}
export interface ApiEntitiesPackagesConanPackageRevisionListMatch {
    conan_id: string;
    conan_package_reference: any;
    package_channel: any;
    package_username: any;
    package_version: any;
    project_id: string;
    revision_id: string;
}
export interface ApiEntitiesPackagesConanPackageSnapshot {
}
export interface ApiEntitiesPackagesConanPackageSnapshotLoadMatch {
    conan_id: string;
    conan_package_reference: any;
    package_channel: any;
    package_username: any;
    package_version: any;
    project_id?: string;
}
export interface ApiEntitiesPackagesConanRecipeManifest {
}
export interface ApiEntitiesPackagesConanRecipeManifestLoadMatch {
    conan_id: string;
    package_channel: any;
    package_username: any;
    package_version: any;
    project_id?: string;
}
export interface ApiEntitiesPackagesConanRecipeRevision {
    revision?: string;
    time?: string;
}
export interface ApiEntitiesPackagesConanRecipeRevisionListMatch {
    conan_id: string;
    package_channel: any;
    package_username: any;
    package_version: any;
    project_id: string;
}
export interface ApiEntitiesPackagesConanRecipeSnapshot {
    id?: string;
}
export interface ApiEntitiesPackagesConanRecipeSnapshotLoadMatch {
    id?: string;
    package_channel: any;
    package_name: any;
    package_username: any;
    package_version: any;
}
export interface ApiEntitiesPackagesConanRevision {
    revision?: string;
    time?: string;
}
export interface ApiEntitiesPackagesConanRevisionLoadMatch {
    conan_id: string;
    conan_package_reference?: any;
    package_channel: any;
    package_username: any;
    package_version: any;
    project_id: string;
    revision_id?: string;
}
export interface ApiEntitiesPackagesConanUploadUrl {
}
export interface ApiEntitiesPackagesConanUploadUrlCreateData {
    conan_id: string;
    conan_package_reference?: any;
    package_channel: any;
    package_username: any;
    package_version: any;
    project_id?: string;
}
export interface ApiEntitiesPackagesDebianDistribution {
    architectures?: any[];
    codename?: string;
    components?: any[];
    description?: string;
    id?: number;
    label?: string;
    origin?: string;
    suite?: string;
    valid_time_duration_seconds?: number;
    version?: string;
}
export interface ApiEntitiesPackagesDebianDistributionLoadMatch {
    group_id?: string;
    id: string;
    project_id?: string;
}
export interface ApiEntitiesPackagesDebianDistributionListMatch {
    project_id: string;
    architecture?: any;
    codename?: any;
    component?: any;
    description?: string;
    label?: string;
    origin?: any;
    page?: number;
    per_page?: number;
    suite?: any;
    valid_time_duration_second?: any;
    version?: any;
}
export interface ApiEntitiesPackagesDebianDistributionCreateData {
    project_id: string;
    post_api_v4_projects_id_debian_distribution: Record<string, any>;
    architectures?: any[];
    codename?: string;
    components?: any[];
    description?: string;
    id?: number;
    label?: string;
    origin?: string;
    suite?: string;
    valid_time_duration_seconds?: number;
    version?: string;
}
export interface ApiEntitiesPackagesDebianDistributionUpdateData {
    group_id?: string;
    id: string;
    put_api_v4_groups_id_debian_distributions_codename?: Record<string, any>;
    project_id?: string;
    put_api_v4_projects_id_debian_distributions_codename?: Record<string, any>;
    architectures?: any[];
    codename?: string;
    components?: any[];
    description?: string;
    label?: string;
    origin?: string;
    suite?: string;
    valid_time_duration_seconds?: number;
    version?: string;
}
export interface ApiEntitiesPagesDomain {
    auto_ssl_enabled?: string;
    certificate?: string;
    certificate_text?: string;
    domain?: string;
    enabled_until?: string;
    expired?: string;
    id?: string;
    subject?: string;
    url?: string;
    verification_code?: string;
    verified?: boolean;
}
export interface ApiEntitiesPagesDomainLoadMatch {
    id: string;
    project_id: string;
}
export interface ApiEntitiesPagesDomainListMatch {
    project_id: string;
    page?: number;
    per_page?: number;
}
export interface ApiEntitiesPagesDomainCreateData {
    project_id: string;
    post_api_v4_projects_id_pages_domain: Record<string, any>;
    auto_ssl_enabled?: string;
    certificate?: string;
    certificate_text?: string;
    domain?: string;
    enabled_until?: string;
    expired?: string;
    id?: string;
    subject?: string;
    url?: string;
    verification_code?: string;
    verified?: boolean;
}
export interface ApiEntitiesPagesDomainUpdateData {
    domain_id: string;
    project_id: string;
    auto_ssl_enabled?: string;
    certificate?: string;
    certificate_text?: string;
    domain?: string;
    enabled_until?: string;
    expired?: string;
    id?: string;
    subject?: string;
    url?: string;
    verification_code?: string;
    verified?: boolean;
}
export interface ApiEntitiesPagesDomainBasic {
    expiration?: string;
    expired?: string;
}
export interface ApiEntitiesPagesDomainBasicLoadMatch {
    page?: number;
    per_page?: number;
}
export interface ApiEntitiesPersonalAccessToken {
    active?: boolean;
    created_at?: string;
    description?: string;
    expires_at?: string;
    id?: number;
    last_used_at?: string;
    name?: string;
    revoked?: boolean;
    scopes?: any[];
    user_id?: number;
}
export interface ApiEntitiesPersonalAccessTokenListMatch {
    min_access_level?: any;
    page?: number;
    per_page?: number;
}
export interface ApiEntitiesPersonalAccessTokenWithLastUsedIp {
    active?: boolean;
    created_at?: string;
    description?: string;
    expires_at?: string;
    id?: number;
    last_used_at?: string;
    last_used_ips?: any[];
    name?: string;
    revoked?: boolean;
    scopes?: any[];
    user_id?: number;
}
export interface ApiEntitiesPersonalAccessTokenWithLastUsedIpLoadMatch {
    id: string;
}
export interface ApiEntitiesPersonalAccessTokenWithLastUsedIpListMatch {
    created_after?: any;
    created_before?: any;
    expires_after?: any;
    expires_before?: any;
    last_used_after?: any;
    last_used_before?: any;
    page?: number;
    per_page?: number;
    revoked?: any;
    search?: any;
    sort?: any;
    state?: any;
    user_id?: string;
}
export interface ApiEntitiesPersonalAccessTokenWithToken {
    active?: boolean;
    created_at?: string;
    description?: string;
    expires_at?: string;
    id?: number;
    last_used_at?: string;
    name?: string;
    revoked?: boolean;
    scopes?: any[];
    token?: string;
    user_id?: number;
}
export interface ApiEntitiesPersonalAccessTokenWithTokenCreateData {
    personal_access_token_id: string;
    post_api_v4_personal_access_tokens_id_rotate: Record<string, any>;
    active?: boolean;
    created_at?: string;
    description?: string;
    expires_at?: string;
    id?: number;
    last_used_at?: string;
    name?: string;
    revoked?: boolean;
    scopes?: any[];
    token?: string;
    user_id?: number;
}
export interface ApiEntitiesPersonalSnippet {
    author?: Record<string, any>;
    created_at?: string;
    description?: string;
    file_name?: string;
    files?: any[];
    http_url_to_repo?: string;
    id?: number;
    imported?: boolean;
    imported_from?: string;
    project_id?: number;
    raw_url?: string;
    repository_storage?: string;
    ssh_url_to_repo?: string;
    title?: string;
    updated_at?: string;
    visibility?: string;
    web_url?: string;
}
export interface ApiEntitiesPersonalSnippetLoadMatch {
    id: string;
}
export interface ApiEntitiesPersonalSnippetListMatch {
    created_after?: any;
    created_before?: any;
    page?: number;
    per_page?: number;
}
export interface ApiEntitiesPersonalSnippetCreateData {
    post_api_v4_snippet: Record<string, any>;
    author?: Record<string, any>;
    created_at?: string;
    description?: string;
    file_name?: string;
    files?: any[];
    http_url_to_repo?: string;
    id?: number;
    imported?: boolean;
    imported_from?: string;
    project_id?: number;
    raw_url?: string;
    repository_storage?: string;
    ssh_url_to_repo?: string;
    title?: string;
    updated_at?: string;
    visibility?: string;
    web_url?: string;
}
export interface ApiEntitiesPersonalSnippetUpdateData {
    id: string;
    put_api_v4_snippets_id: Record<string, any>;
    author?: Record<string, any>;
    created_at?: string;
    description?: string;
    file_name?: string;
    files?: any[];
    http_url_to_repo?: string;
    imported?: boolean;
    imported_from?: string;
    project_id?: number;
    raw_url?: string;
    repository_storage?: string;
    ssh_url_to_repo?: string;
    title?: string;
    updated_at?: string;
    visibility?: string;
    web_url?: string;
}
export interface ApiEntitiesPlanLimit {
}
export interface ApiEntitiesPlanLimitLoadMatch {
    plan_name?: any;
}
export interface ApiEntitiesPlanLimitUpdateData {
    put_api_v4_application_plan_limit: Record<string, any>;
}
export interface ApiEntitiesProject {
    allow_merge_on_skipped_pipeline?: boolean;
    allow_pipeline_trigger_approve_deployment?: boolean;
    analytics_access_level?: string;
    approvals_before_merge?: string;
    archived?: boolean;
    auto_cancel_pending_pipelines?: string;
    auto_devops_deploy_strategy?: string;
    auto_devops_enabled?: boolean;
    auto_duo_code_review_enabled?: string;
    autoclose_referenced_issues?: boolean;
    avatar_url?: string;
    build_git_strategy?: string;
    build_timeout?: number;
    builds_access_level?: string;
    can_create_merge_request_in?: boolean;
    ci_allow_fork_pipelines_to_run_in_parent_project?: boolean;
    ci_config_path?: string;
    ci_default_git_depth?: number;
    ci_delete_pipelines_in_seconds?: number;
    ci_forward_deployment_enabled?: boolean;
    ci_forward_deployment_rollback_allowed?: boolean;
    ci_id_token_sub_claim_components?: any[];
    ci_job_token_scope_enabled?: boolean;
    ci_pipeline_variables_minimum_override_role?: string;
    ci_push_repository_for_job_token_allowed?: boolean;
    ci_restrict_pipeline_cancellation_role?: string;
    ci_separated_caches?: boolean;
    compliance_frameworks?: string;
    container_expiration_policy?: Record<string, any>;
    container_registry_access_level?: string;
    container_registry_enabled?: boolean;
    container_registry_image_prefix?: string;
    created_at?: string;
    creator_id?: number;
    custom_attributes?: Record<string, any>;
    default_branch?: string;
    description?: string;
    description_html?: string;
    duo_remote_flows_enabled?: string;
    emails_disabled?: boolean;
    emails_enabled?: boolean;
    empty_repo?: boolean;
    enforce_auth_checks_on_uploads?: boolean;
    environments_access_level?: string;
    external_authorization_classification_label?: string;
    feature_flags_access_level?: string;
    forked_from_project?: Record<string, any>;
    forking_access_level?: string;
    forks_count?: number;
    group_runners_enabled?: boolean;
    http_url_to_repo?: string;
    id?: number;
    import_error?: string;
    import_status?: string;
    import_type?: string;
    import_url?: string;
    infrastructure_access_level?: string;
    issue_branch_template?: string;
    issues_access_level?: string;
    issues_enabled?: boolean;
    issues_template?: string;
    jobs_enabled?: boolean;
    keep_latest_artifact?: boolean;
    last_activity_at?: string;
    lfs_enabled?: boolean;
    license?: Record<string, any>;
    license_url?: string;
    links?: Record<string, any>;
    marked_for_deletion_at?: string;
    marked_for_deletion_on?: string;
    max_artifacts_size?: number;
    merge_commit_template?: string;
    merge_method?: string;
    merge_pipelines_enabled?: string;
    merge_request_title_regex?: string;
    merge_request_title_regex_description?: string;
    merge_requests_access_level?: string;
    merge_requests_enabled?: boolean;
    merge_requests_template?: string;
    merge_trains_enabled?: string;
    merge_trains_skip_train_allowed?: string;
    mirror?: string;
    mirror_overwrites_diverged_branches?: string;
    mirror_trigger_builds?: string;
    mirror_user_id?: string;
    model_experiments_access_level?: string;
    model_registry_access_level?: string;
    monitor_access_level?: string;
    mr_default_target_self?: boolean;
    name?: string;
    name_with_namespace?: string;
    namespace?: Record<string, any>;
    only_allow_merge_if_all_discussions_are_resolved?: boolean;
    only_allow_merge_if_all_status_checks_passed?: string;
    only_allow_merge_if_pipeline_succeeds?: boolean;
    only_mirror_protected_branches?: string;
    open_issues_count?: number;
    owner?: Record<string, any>;
    package_registry_access_level?: string;
    packages_enabled?: boolean;
    pages_access_level?: string;
    path?: string;
    path_with_namespace?: string;
    pre_receive_secret_detection_enabled?: boolean;
    prevent_merge_without_jira_issue?: string;
    printing_merge_request_link_enabled?: boolean;
    public_jobs?: boolean;
    readme_url?: string;
    releases_access_level?: string;
    remove_source_branch_after_merge?: boolean;
    repository_access_level?: string;
    repository_object_format?: string;
    repository_storage?: string;
    request_access_enabled?: boolean;
    requirements_access_level?: string;
    requirements_enabled?: string;
    resolve_outdated_diff_discussions?: boolean;
    resource_group_default_process_mode?: string;
    restrict_user_defined_variables?: boolean;
    runner_token_expiration_interval?: number;
    runners_token?: string;
    secret_push_protection_enabled?: boolean;
    security_and_compliance_access_level?: string;
    security_and_compliance_enabled?: string;
    service_desk_address?: string;
    service_desk_enabled?: boolean;
    shared_runners_enabled?: boolean;
    shared_with_groups?: any[];
    show_diff_preview_in_email?: boolean;
    snippets_access_level?: string;
    snippets_enabled?: boolean;
    spp_repository_pipeline_access?: boolean;
    squash_commit_template?: string;
    squash_option?: string;
    ssh_url_to_repo?: string;
    star_count?: number;
    statistics?: Record<string, any>;
    suggestion_commit_message?: string;
    tag_list?: any[];
    topics?: any[];
    updated_at?: string;
    visibility?: string;
    warn_about_potentially_unwanted_characters?: boolean;
    web_based_commit_signing_enabled?: string;
    web_url?: string;
    wiki_access_level?: string;
    wiki_enabled?: boolean;
}
export interface ApiEntitiesProjectListMatch {
    project_id: string;
    active?: boolean;
    archived?: boolean;
    id_after?: any;
    id_before?: any;
    imported?: any;
    include_hidden?: any;
    include_pending_delete?: any;
    last_activity_after?: any;
    last_activity_before?: any;
    marked_for_deletion_on?: any;
    membership?: any;
    min_access_level?: any;
    order_by?: any;
    owned?: any;
    page?: number;
    per_page?: number;
    repository_checksum_failed?: any;
    repository_storage?: any;
    search?: any;
    search_namespace?: any;
    simple?: any;
    sort?: any;
    starred?: any;
    topic?: any;
    topic_id?: string;
    updated_after?: any;
    updated_before?: any;
    visibility?: any;
    wiki_checksum_failed?: any;
    with_custom_attribute?: any;
    with_issues_enabled?: any;
    with_merge_requests_enabled?: any;
    with_programming_language?: any;
}
export interface ApiEntitiesProjectCreateData {
    user_id: string;
    post_api_v4_projects_user_user_id: Record<string, any>;
    allow_merge_on_skipped_pipeline?: boolean;
    allow_pipeline_trigger_approve_deployment?: boolean;
    analytics_access_level?: string;
    approvals_before_merge?: string;
    archived?: boolean;
    auto_cancel_pending_pipelines?: string;
    auto_devops_deploy_strategy?: string;
    auto_devops_enabled?: boolean;
    auto_duo_code_review_enabled?: string;
    autoclose_referenced_issues?: boolean;
    avatar_url?: string;
    build_git_strategy?: string;
    build_timeout?: number;
    builds_access_level?: string;
    can_create_merge_request_in?: boolean;
    ci_allow_fork_pipelines_to_run_in_parent_project?: boolean;
    ci_config_path?: string;
    ci_default_git_depth?: number;
    ci_delete_pipelines_in_seconds?: number;
    ci_forward_deployment_enabled?: boolean;
    ci_forward_deployment_rollback_allowed?: boolean;
    ci_id_token_sub_claim_components?: any[];
    ci_job_token_scope_enabled?: boolean;
    ci_pipeline_variables_minimum_override_role?: string;
    ci_push_repository_for_job_token_allowed?: boolean;
    ci_restrict_pipeline_cancellation_role?: string;
    ci_separated_caches?: boolean;
    compliance_frameworks?: string;
    container_expiration_policy?: Record<string, any>;
    container_registry_access_level?: string;
    container_registry_enabled?: boolean;
    container_registry_image_prefix?: string;
    created_at?: string;
    creator_id?: number;
    custom_attributes?: Record<string, any>;
    default_branch?: string;
    description?: string;
    description_html?: string;
    duo_remote_flows_enabled?: string;
    emails_disabled?: boolean;
    emails_enabled?: boolean;
    empty_repo?: boolean;
    enforce_auth_checks_on_uploads?: boolean;
    environments_access_level?: string;
    external_authorization_classification_label?: string;
    feature_flags_access_level?: string;
    forked_from_project?: Record<string, any>;
    forking_access_level?: string;
    forks_count?: number;
    group_runners_enabled?: boolean;
    http_url_to_repo?: string;
    id?: number;
    import_error?: string;
    import_status?: string;
    import_type?: string;
    import_url?: string;
    infrastructure_access_level?: string;
    issue_branch_template?: string;
    issues_access_level?: string;
    issues_enabled?: boolean;
    issues_template?: string;
    jobs_enabled?: boolean;
    keep_latest_artifact?: boolean;
    last_activity_at?: string;
    lfs_enabled?: boolean;
    license?: Record<string, any>;
    license_url?: string;
    links?: Record<string, any>;
    marked_for_deletion_at?: string;
    marked_for_deletion_on?: string;
    max_artifacts_size?: number;
    merge_commit_template?: string;
    merge_method?: string;
    merge_pipelines_enabled?: string;
    merge_request_title_regex?: string;
    merge_request_title_regex_description?: string;
    merge_requests_access_level?: string;
    merge_requests_enabled?: boolean;
    merge_requests_template?: string;
    merge_trains_enabled?: string;
    merge_trains_skip_train_allowed?: string;
    mirror?: string;
    mirror_overwrites_diverged_branches?: string;
    mirror_trigger_builds?: string;
    mirror_user_id?: string;
    model_experiments_access_level?: string;
    model_registry_access_level?: string;
    monitor_access_level?: string;
    mr_default_target_self?: boolean;
    name?: string;
    name_with_namespace?: string;
    namespace?: Record<string, any>;
    only_allow_merge_if_all_discussions_are_resolved?: boolean;
    only_allow_merge_if_all_status_checks_passed?: string;
    only_allow_merge_if_pipeline_succeeds?: boolean;
    only_mirror_protected_branches?: string;
    open_issues_count?: number;
    owner?: Record<string, any>;
    package_registry_access_level?: string;
    packages_enabled?: boolean;
    pages_access_level?: string;
    path?: string;
    path_with_namespace?: string;
    pre_receive_secret_detection_enabled?: boolean;
    prevent_merge_without_jira_issue?: string;
    printing_merge_request_link_enabled?: boolean;
    public_jobs?: boolean;
    readme_url?: string;
    releases_access_level?: string;
    remove_source_branch_after_merge?: boolean;
    repository_access_level?: string;
    repository_object_format?: string;
    repository_storage?: string;
    request_access_enabled?: boolean;
    requirements_access_level?: string;
    requirements_enabled?: string;
    resolve_outdated_diff_discussions?: boolean;
    resource_group_default_process_mode?: string;
    restrict_user_defined_variables?: boolean;
    runner_token_expiration_interval?: number;
    runners_token?: string;
    secret_push_protection_enabled?: boolean;
    security_and_compliance_access_level?: string;
    security_and_compliance_enabled?: string;
    service_desk_address?: string;
    service_desk_enabled?: boolean;
    shared_runners_enabled?: boolean;
    shared_with_groups?: any[];
    show_diff_preview_in_email?: boolean;
    snippets_access_level?: string;
    snippets_enabled?: boolean;
    spp_repository_pipeline_access?: boolean;
    squash_commit_template?: string;
    squash_option?: string;
    ssh_url_to_repo?: string;
    star_count?: number;
    statistics?: Record<string, any>;
    suggestion_commit_message?: string;
    tag_list?: any[];
    topics?: any[];
    updated_at?: string;
    visibility?: string;
    warn_about_potentially_unwanted_characters?: boolean;
    web_based_commit_signing_enabled?: string;
    web_url?: string;
    wiki_access_level?: string;
    wiki_enabled?: boolean;
}
export interface ApiEntitiesProjectUpdateData {
    id: string;
    put_api_v4_projects_id: Record<string, any>;
    allow_merge_on_skipped_pipeline?: boolean;
    allow_pipeline_trigger_approve_deployment?: boolean;
    analytics_access_level?: string;
    approvals_before_merge?: string;
    archived?: boolean;
    auto_cancel_pending_pipelines?: string;
    auto_devops_deploy_strategy?: string;
    auto_devops_enabled?: boolean;
    auto_duo_code_review_enabled?: string;
    autoclose_referenced_issues?: boolean;
    avatar_url?: string;
    build_git_strategy?: string;
    build_timeout?: number;
    builds_access_level?: string;
    can_create_merge_request_in?: boolean;
    ci_allow_fork_pipelines_to_run_in_parent_project?: boolean;
    ci_config_path?: string;
    ci_default_git_depth?: number;
    ci_delete_pipelines_in_seconds?: number;
    ci_forward_deployment_enabled?: boolean;
    ci_forward_deployment_rollback_allowed?: boolean;
    ci_id_token_sub_claim_components?: any[];
    ci_job_token_scope_enabled?: boolean;
    ci_pipeline_variables_minimum_override_role?: string;
    ci_push_repository_for_job_token_allowed?: boolean;
    ci_restrict_pipeline_cancellation_role?: string;
    ci_separated_caches?: boolean;
    compliance_frameworks?: string;
    container_expiration_policy?: Record<string, any>;
    container_registry_access_level?: string;
    container_registry_enabled?: boolean;
    container_registry_image_prefix?: string;
    created_at?: string;
    creator_id?: number;
    custom_attributes?: Record<string, any>;
    default_branch?: string;
    description?: string;
    description_html?: string;
    duo_remote_flows_enabled?: string;
    emails_disabled?: boolean;
    emails_enabled?: boolean;
    empty_repo?: boolean;
    enforce_auth_checks_on_uploads?: boolean;
    environments_access_level?: string;
    external_authorization_classification_label?: string;
    feature_flags_access_level?: string;
    forked_from_project?: Record<string, any>;
    forking_access_level?: string;
    forks_count?: number;
    group_runners_enabled?: boolean;
    http_url_to_repo?: string;
    import_error?: string;
    import_status?: string;
    import_type?: string;
    import_url?: string;
    infrastructure_access_level?: string;
    issue_branch_template?: string;
    issues_access_level?: string;
    issues_enabled?: boolean;
    issues_template?: string;
    jobs_enabled?: boolean;
    keep_latest_artifact?: boolean;
    last_activity_at?: string;
    lfs_enabled?: boolean;
    license?: Record<string, any>;
    license_url?: string;
    links?: Record<string, any>;
    marked_for_deletion_at?: string;
    marked_for_deletion_on?: string;
    max_artifacts_size?: number;
    merge_commit_template?: string;
    merge_method?: string;
    merge_pipelines_enabled?: string;
    merge_request_title_regex?: string;
    merge_request_title_regex_description?: string;
    merge_requests_access_level?: string;
    merge_requests_enabled?: boolean;
    merge_requests_template?: string;
    merge_trains_enabled?: string;
    merge_trains_skip_train_allowed?: string;
    mirror?: string;
    mirror_overwrites_diverged_branches?: string;
    mirror_trigger_builds?: string;
    mirror_user_id?: string;
    model_experiments_access_level?: string;
    model_registry_access_level?: string;
    monitor_access_level?: string;
    mr_default_target_self?: boolean;
    name?: string;
    name_with_namespace?: string;
    namespace?: Record<string, any>;
    only_allow_merge_if_all_discussions_are_resolved?: boolean;
    only_allow_merge_if_all_status_checks_passed?: string;
    only_allow_merge_if_pipeline_succeeds?: boolean;
    only_mirror_protected_branches?: string;
    open_issues_count?: number;
    owner?: Record<string, any>;
    package_registry_access_level?: string;
    packages_enabled?: boolean;
    pages_access_level?: string;
    path?: string;
    path_with_namespace?: string;
    pre_receive_secret_detection_enabled?: boolean;
    prevent_merge_without_jira_issue?: string;
    printing_merge_request_link_enabled?: boolean;
    public_jobs?: boolean;
    readme_url?: string;
    releases_access_level?: string;
    remove_source_branch_after_merge?: boolean;
    repository_access_level?: string;
    repository_object_format?: string;
    repository_storage?: string;
    request_access_enabled?: boolean;
    requirements_access_level?: string;
    requirements_enabled?: string;
    resolve_outdated_diff_discussions?: boolean;
    resource_group_default_process_mode?: string;
    restrict_user_defined_variables?: boolean;
    runner_token_expiration_interval?: number;
    runners_token?: string;
    secret_push_protection_enabled?: boolean;
    security_and_compliance_access_level?: string;
    security_and_compliance_enabled?: string;
    service_desk_address?: string;
    service_desk_enabled?: boolean;
    shared_runners_enabled?: boolean;
    shared_with_groups?: any[];
    show_diff_preview_in_email?: boolean;
    snippets_access_level?: string;
    snippets_enabled?: boolean;
    spp_repository_pipeline_access?: boolean;
    squash_commit_template?: string;
    squash_option?: string;
    ssh_url_to_repo?: string;
    star_count?: number;
    statistics?: Record<string, any>;
    suggestion_commit_message?: string;
    tag_list?: any[];
    topics?: any[];
    updated_at?: string;
    visibility?: string;
    warn_about_potentially_unwanted_characters?: boolean;
    web_based_commit_signing_enabled?: string;
    web_url?: string;
    wiki_access_level?: string;
    wiki_enabled?: boolean;
}
export interface ApiEntitiesProjectDailyStatistic {
    days?: any[];
    total?: number;
}
export interface ApiEntitiesProjectDailyStatisticLoadMatch {
    project_id: string;
}
export interface ApiEntitiesProjectExportStatus {
    api_url?: string;
    web_url?: string;
}
export interface ApiEntitiesProjectExportStatusLoadMatch {
    project_id: string;
}
export interface ApiEntitiesProjectGroupLink {
}
export interface ApiEntitiesProjectGroupLinkCreateData {
    project_id: string;
    post_api_v4_projects_id_share: Record<string, any>;
}
export interface ApiEntitiesProjectHook {
    alert_status?: any;
    branch_filter_strategy?: string;
    confidential_issues_events?: boolean;
    confidential_note_events?: boolean;
    created_at?: string;
    custom_headers?: any[];
    custom_webhook_template?: string;
    deployment_events?: boolean;
    description?: string;
    disabled_until?: string;
    emoji_events?: boolean;
    enable_ssl_verification?: boolean;
    feature_flag_events?: boolean;
    id?: string;
    issues_events?: boolean;
    job_events?: boolean;
    merge_requests_events?: boolean;
    milestone_events?: boolean;
    name?: string;
    note_events?: boolean;
    pipeline_events?: boolean;
    project_id?: string;
    push_events?: boolean;
    push_events_branch_filter?: string;
    releases_events?: boolean;
    repository_update_events?: boolean;
    resource_access_token_events?: boolean;
    tag_push_events?: boolean;
    url?: string;
    url_variables?: any[];
    vulnerability_events?: boolean;
    wiki_page_events?: boolean;
}
export interface ApiEntitiesProjectHookLoadMatch {
    id: string;
    project_id: string;
}
export interface ApiEntitiesProjectHookListMatch {
    project_id: string;
    page?: number;
    per_page?: number;
}
export interface ApiEntitiesProjectHookCreateData {
    project_id: string;
    post_api_v4_projects_id_hook: Record<string, any>;
    alert_status?: any;
    branch_filter_strategy?: string;
    confidential_issues_events?: boolean;
    confidential_note_events?: boolean;
    created_at?: string;
    custom_headers?: any[];
    custom_webhook_template?: string;
    deployment_events?: boolean;
    description?: string;
    disabled_until?: string;
    emoji_events?: boolean;
    enable_ssl_verification?: boolean;
    feature_flag_events?: boolean;
    id?: string;
    issues_events?: boolean;
    job_events?: boolean;
    merge_requests_events?: boolean;
    milestone_events?: boolean;
    name?: string;
    note_events?: boolean;
    pipeline_events?: boolean;
    push_events?: boolean;
    push_events_branch_filter?: string;
    releases_events?: boolean;
    repository_update_events?: boolean;
    resource_access_token_events?: boolean;
    tag_push_events?: boolean;
    url?: string;
    url_variables?: any[];
    vulnerability_events?: boolean;
    wiki_page_events?: boolean;
}
export interface ApiEntitiesProjectHookUpdateData {
    id: string;
    project_id: string;
    put_api_v4_projects_id_hooks_hook_id: Record<string, any>;
    alert_status?: any;
    branch_filter_strategy?: string;
    confidential_issues_events?: boolean;
    confidential_note_events?: boolean;
    created_at?: string;
    custom_headers?: any[];
    custom_webhook_template?: string;
    deployment_events?: boolean;
    description?: string;
    disabled_until?: string;
    emoji_events?: boolean;
    enable_ssl_verification?: boolean;
    feature_flag_events?: boolean;
    issues_events?: boolean;
    job_events?: boolean;
    merge_requests_events?: boolean;
    milestone_events?: boolean;
    name?: string;
    note_events?: boolean;
    pipeline_events?: boolean;
    push_events?: boolean;
    push_events_branch_filter?: string;
    releases_events?: boolean;
    repository_update_events?: boolean;
    resource_access_token_events?: boolean;
    tag_push_events?: boolean;
    url?: string;
    url_variables?: any[];
    vulnerability_events?: boolean;
    wiki_page_events?: boolean;
}
export interface ApiEntitiesProjectImportStatus {
    created_at?: string;
    exception_class?: string;
    exception_message?: string;
    id?: string;
    line_number?: number;
    relation_name?: string;
    source?: string;
}
export interface ApiEntitiesProjectImportStatusListMatch {
    project_id: string;
}
export interface ApiEntitiesProjectImportStatusCreateData {
    file?: any;
    file_etag?: any;
    file_md5?: any;
    file_name?: any;
    file_path?: any;
    file_remote_id?: string;
    file_remote_url?: any;
    file_sha1?: any;
    file_sha256?: any;
    file_size?: any;
    file_type?: any;
    name?: string;
    namespace?: any;
    override_params_allow_merge_on_skipped_pipeline?: any;
    override_params_analytics_access_level?: any;
    override_params_approvals_before_merge?: any;
    override_params_auto_cancel_pending_pipeline?: any;
    override_params_auto_devops_deploy_strategy?: any;
    override_params_auto_devops_enabled?: any;
    override_params_auto_duo_code_review_enabled?: any;
    override_params_autoclose_referenced_issue?: any;
    override_params_avatar?: any;
    override_params_build_git_strategy?: any;
    override_params_build_timeout?: any;
    override_params_builds_access_level?: any;
    override_params_ci_config_path?: any;
    override_params_container_expiration_policy_attributes_cadence?: any;
    override_params_container_expiration_policy_attributes_enabled?: any;
    override_params_container_expiration_policy_attributes_keep_n?: any;
    override_params_container_expiration_policy_attributes_name_regex?: any;
    override_params_container_expiration_policy_attributes_name_regex_keep?: any;
    override_params_container_expiration_policy_attributes_older_than?: any;
    override_params_container_registry_access_level?: any;
    override_params_container_registry_enabled?: any;
    override_params_description?: any;
    override_params_duo_remote_flows_enabled?: any;
    override_params_emails_disabled?: any;
    override_params_emails_enabled?: any;
    override_params_enforce_auth_checks_on_upload?: any;
    override_params_environments_access_level?: any;
    override_params_external_authorization_classification_label?: any;
    override_params_feature_flags_access_level?: any;
    override_params_forking_access_level?: any;
    override_params_group_runners_enabled?: any;
    override_params_infrastructure_access_level?: any;
    override_params_issue_branch_template?: any;
    override_params_issues_access_level?: any;
    override_params_issues_enabled?: any;
    override_params_jobs_enabled?: any;
    override_params_lfs_enabled?: any;
    override_params_merge_commit_template?: any;
    override_params_merge_method?: any;
    override_params_merge_request_title_regex?: any;
    override_params_merge_request_title_regex_description?: any;
    override_params_merge_requests_access_level?: any;
    override_params_merge_requests_enabled?: any;
    override_params_mirror?: any;
    override_params_mirror_trigger_build?: any;
    override_params_model_experiments_access_level?: any;
    override_params_model_registry_access_level?: any;
    override_params_monitor_access_level?: any;
    override_params_mr_default_target_self?: any;
    override_params_only_allow_merge_if_all_discussions_are_resolved?: any;
    override_params_only_allow_merge_if_all_status_checks_passed?: any;
    override_params_only_allow_merge_if_pipeline_succeed?: any;
    override_params_package_registry_access_level?: any;
    override_params_packages_enabled?: any;
    override_params_pages_access_level?: any;
    override_params_prevent_merge_without_jira_issue?: any;
    override_params_printing_merge_request_link_enabled?: any;
    override_params_public_build?: any;
    override_params_public_job?: any;
    override_params_releases_access_level?: any;
    override_params_remove_source_branch_after_merge?: any;
    override_params_repository_access_level?: any;
    override_params_repository_storage?: any;
    override_params_request_access_enabled?: any;
    override_params_requirements_access_level?: any;
    override_params_resolve_outdated_diff_discussion?: any;
    override_params_resource_group_default_process_mode?: any;
    override_params_security_and_compliance_access_level?: any;
    override_params_service_desk_enabled?: any;
    override_params_shared_runners_enabled?: any;
    override_params_show_default_award_emoji?: any;
    override_params_show_diff_preview_in_email?: any;
    override_params_snippets_access_level?: any;
    override_params_snippets_enabled?: any;
    override_params_spp_repository_pipeline_access?: any;
    override_params_squash_commit_template?: any;
    override_params_squash_option?: any;
    override_params_suggestion_commit_message?: any;
    override_params_tag_list?: any;
    override_params_topic?: any;
    override_params_visibility?: any;
    override_params_warn_about_potentially_unwanted_character?: any;
    override_params_wiki_access_level?: any;
    override_params_wiki_enabled?: any;
    overwrite?: any;
    path: string;
    access_key_id?: string;
    bucket_name?: any;
    file_key?: any;
    region?: any;
    secret_access_key?: any;
    url?: string;
    created_at?: string;
    exception_class?: string;
    exception_message?: string;
    id?: string;
    line_number?: number;
    relation_name?: string;
    source?: string;
}
export interface ApiEntitiesProjectJobTokenScope {
    inbound_enabled?: boolean;
    outbound_enabled?: boolean;
}
export interface ApiEntitiesProjectJobTokenScopeLoadMatch {
    project_id: string;
}
export interface ApiEntitiesProjectRepositoryStorage {
    created_at?: string;
    disk_path?: string;
    project_id?: number;
    repository_storage?: string;
}
export interface ApiEntitiesProjectRepositoryStorageLoadMatch {
    project_id: string;
}
export interface ApiEntitiesProjectSnippet {
    author?: Record<string, any>;
    created_at?: string;
    description?: string;
    file_name?: string;
    files?: any[];
    http_url_to_repo?: string;
    id?: number;
    imported?: boolean;
    imported_from?: string;
    project_id?: number;
    raw_url?: string;
    repository_storage?: string;
    ssh_url_to_repo?: string;
    title?: string;
    updated_at?: string;
    visibility?: string;
    web_url?: string;
}
export interface ApiEntitiesProjectSnippetLoadMatch {
    id: string;
    project_id: string;
}
export interface ApiEntitiesProjectSnippetListMatch {
    file_id?: string;
    file_path?: any;
    project_id: string;
    snippet_id?: string;
    page?: number;
    per_page?: number;
}
export interface ApiEntitiesProjectSnippetCreateData {
    project_id: string;
    post_api_v4_projects_id_snippet: Record<string, any>;
    author?: Record<string, any>;
    created_at?: string;
    description?: string;
    file_name?: string;
    files?: any[];
    http_url_to_repo?: string;
    id?: number;
    imported?: boolean;
    imported_from?: string;
    raw_url?: string;
    repository_storage?: string;
    ssh_url_to_repo?: string;
    title?: string;
    updated_at?: string;
    visibility?: string;
    web_url?: string;
}
export interface ApiEntitiesProjectSnippetUpdateData {
    id: string;
    project_id: string;
    put_api_v4_projects_id_snippets_snippet_id: Record<string, any>;
    author?: Record<string, any>;
    created_at?: string;
    description?: string;
    file_name?: string;
    files?: any[];
    http_url_to_repo?: string;
    imported?: boolean;
    imported_from?: string;
    raw_url?: string;
    repository_storage?: string;
    ssh_url_to_repo?: string;
    title?: string;
    updated_at?: string;
    visibility?: string;
    web_url?: string;
}
export interface ApiEntitiesProjectUpload {
}
export interface ApiEntitiesProjectUploadCreateData {
    project_id: string;
    post_api_v4_projects_id_upload: Record<string, any>;
}
export interface ApiEntitiesProjectWithAccess {
    allow_merge_on_skipped_pipeline?: boolean;
    allow_pipeline_trigger_approve_deployment?: boolean;
    analytics_access_level?: string;
    approvals_before_merge?: string;
    archived?: boolean;
    auto_cancel_pending_pipelines?: string;
    auto_devops_deploy_strategy?: string;
    auto_devops_enabled?: boolean;
    auto_duo_code_review_enabled?: string;
    autoclose_referenced_issues?: boolean;
    avatar_url?: string;
    build_git_strategy?: string;
    build_timeout?: number;
    builds_access_level?: string;
    can_create_merge_request_in?: boolean;
    ci_allow_fork_pipelines_to_run_in_parent_project?: boolean;
    ci_config_path?: string;
    ci_default_git_depth?: number;
    ci_delete_pipelines_in_seconds?: number;
    ci_forward_deployment_enabled?: boolean;
    ci_forward_deployment_rollback_allowed?: boolean;
    ci_id_token_sub_claim_components?: any[];
    ci_job_token_scope_enabled?: boolean;
    ci_pipeline_variables_minimum_override_role?: string;
    ci_push_repository_for_job_token_allowed?: boolean;
    ci_restrict_pipeline_cancellation_role?: string;
    ci_separated_caches?: boolean;
    compliance_frameworks?: string;
    container_expiration_policy?: Record<string, any>;
    container_registry_access_level?: string;
    container_registry_enabled?: boolean;
    container_registry_image_prefix?: string;
    created_at?: string;
    creator_id?: number;
    custom_attributes?: Record<string, any>;
    default_branch?: string;
    description?: string;
    description_html?: string;
    duo_remote_flows_enabled?: string;
    emails_disabled?: boolean;
    emails_enabled?: boolean;
    empty_repo?: boolean;
    enforce_auth_checks_on_uploads?: boolean;
    environments_access_level?: string;
    external_authorization_classification_label?: string;
    feature_flags_access_level?: string;
    forked_from_project?: Record<string, any>;
    forking_access_level?: string;
    forks_count?: number;
    group_runners_enabled?: boolean;
    http_url_to_repo?: string;
    id?: number;
    import_error?: string;
    import_status?: string;
    import_type?: string;
    import_url?: string;
    infrastructure_access_level?: string;
    issue_branch_template?: string;
    issues_access_level?: string;
    issues_enabled?: boolean;
    issues_template?: string;
    jobs_enabled?: boolean;
    keep_latest_artifact?: boolean;
    last_activity_at?: string;
    lfs_enabled?: boolean;
    license?: Record<string, any>;
    license_url?: string;
    links?: Record<string, any>;
    marked_for_deletion_at?: string;
    marked_for_deletion_on?: string;
    max_artifacts_size?: number;
    merge_commit_template?: string;
    merge_method?: string;
    merge_pipelines_enabled?: string;
    merge_request_title_regex?: string;
    merge_request_title_regex_description?: string;
    merge_requests_access_level?: string;
    merge_requests_enabled?: boolean;
    merge_requests_template?: string;
    merge_trains_enabled?: string;
    merge_trains_skip_train_allowed?: string;
    mirror?: string;
    mirror_overwrites_diverged_branches?: string;
    mirror_trigger_builds?: string;
    mirror_user_id?: string;
    model_experiments_access_level?: string;
    model_registry_access_level?: string;
    monitor_access_level?: string;
    mr_default_target_self?: boolean;
    name?: string;
    name_with_namespace?: string;
    namespace?: Record<string, any>;
    only_allow_merge_if_all_discussions_are_resolved?: boolean;
    only_allow_merge_if_all_status_checks_passed?: string;
    only_allow_merge_if_pipeline_succeeds?: boolean;
    only_mirror_protected_branches?: string;
    open_issues_count?: number;
    owner?: Record<string, any>;
    package_registry_access_level?: string;
    packages_enabled?: boolean;
    pages_access_level?: string;
    path?: string;
    path_with_namespace?: string;
    permissions?: Record<string, any>;
    pre_receive_secret_detection_enabled?: boolean;
    prevent_merge_without_jira_issue?: string;
    printing_merge_request_link_enabled?: boolean;
    public_jobs?: boolean;
    readme_url?: string;
    releases_access_level?: string;
    remove_source_branch_after_merge?: boolean;
    repository_access_level?: string;
    repository_object_format?: string;
    repository_storage?: string;
    request_access_enabled?: boolean;
    requirements_access_level?: string;
    requirements_enabled?: string;
    resolve_outdated_diff_discussions?: boolean;
    resource_group_default_process_mode?: string;
    restrict_user_defined_variables?: boolean;
    runner_token_expiration_interval?: number;
    runners_token?: string;
    secret_push_protection_enabled?: boolean;
    security_and_compliance_access_level?: string;
    security_and_compliance_enabled?: string;
    service_desk_address?: string;
    service_desk_enabled?: boolean;
    shared_runners_enabled?: boolean;
    shared_with_groups?: any[];
    show_diff_preview_in_email?: boolean;
    snippets_access_level?: string;
    snippets_enabled?: boolean;
    spp_repository_pipeline_access?: boolean;
    squash_commit_template?: string;
    squash_option?: string;
    ssh_url_to_repo?: string;
    star_count?: number;
    statistics?: Record<string, any>;
    suggestion_commit_message?: string;
    tag_list?: any[];
    topics?: any[];
    updated_at?: string;
    visibility?: string;
    warn_about_potentially_unwanted_characters?: boolean;
    web_based_commit_signing_enabled?: string;
    web_url?: string;
    wiki_access_level?: string;
    wiki_enabled?: boolean;
}
export interface ApiEntitiesProjectWithAccessLoadMatch {
    id: string;
    license?: any;
    statistic?: any;
    with_custom_attribute?: any;
}
export interface ApiEntitiesProjectWithAccessCreateData {
    project_id: string;
    post_api_v4_projects_id_housekeeping?: Record<string, any>;
    allow_merge_on_skipped_pipeline?: boolean;
    allow_pipeline_trigger_approve_deployment?: boolean;
    analytics_access_level?: string;
    approvals_before_merge?: string;
    archived?: boolean;
    auto_cancel_pending_pipelines?: string;
    auto_devops_deploy_strategy?: string;
    auto_devops_enabled?: boolean;
    auto_duo_code_review_enabled?: string;
    autoclose_referenced_issues?: boolean;
    avatar_url?: string;
    build_git_strategy?: string;
    build_timeout?: number;
    builds_access_level?: string;
    can_create_merge_request_in?: boolean;
    ci_allow_fork_pipelines_to_run_in_parent_project?: boolean;
    ci_config_path?: string;
    ci_default_git_depth?: number;
    ci_delete_pipelines_in_seconds?: number;
    ci_forward_deployment_enabled?: boolean;
    ci_forward_deployment_rollback_allowed?: boolean;
    ci_id_token_sub_claim_components?: any[];
    ci_job_token_scope_enabled?: boolean;
    ci_pipeline_variables_minimum_override_role?: string;
    ci_push_repository_for_job_token_allowed?: boolean;
    ci_restrict_pipeline_cancellation_role?: string;
    ci_separated_caches?: boolean;
    compliance_frameworks?: string;
    container_expiration_policy?: Record<string, any>;
    container_registry_access_level?: string;
    container_registry_enabled?: boolean;
    container_registry_image_prefix?: string;
    created_at?: string;
    creator_id?: number;
    custom_attributes?: Record<string, any>;
    default_branch?: string;
    description?: string;
    description_html?: string;
    duo_remote_flows_enabled?: string;
    emails_disabled?: boolean;
    emails_enabled?: boolean;
    empty_repo?: boolean;
    enforce_auth_checks_on_uploads?: boolean;
    environments_access_level?: string;
    external_authorization_classification_label?: string;
    feature_flags_access_level?: string;
    forked_from_project?: Record<string, any>;
    forking_access_level?: string;
    forks_count?: number;
    group_runners_enabled?: boolean;
    http_url_to_repo?: string;
    id?: number;
    import_error?: string;
    import_status?: string;
    import_type?: string;
    import_url?: string;
    infrastructure_access_level?: string;
    issue_branch_template?: string;
    issues_access_level?: string;
    issues_enabled?: boolean;
    issues_template?: string;
    jobs_enabled?: boolean;
    keep_latest_artifact?: boolean;
    last_activity_at?: string;
    lfs_enabled?: boolean;
    license?: Record<string, any>;
    license_url?: string;
    links?: Record<string, any>;
    marked_for_deletion_at?: string;
    marked_for_deletion_on?: string;
    max_artifacts_size?: number;
    merge_commit_template?: string;
    merge_method?: string;
    merge_pipelines_enabled?: string;
    merge_request_title_regex?: string;
    merge_request_title_regex_description?: string;
    merge_requests_access_level?: string;
    merge_requests_enabled?: boolean;
    merge_requests_template?: string;
    merge_trains_enabled?: string;
    merge_trains_skip_train_allowed?: string;
    mirror?: string;
    mirror_overwrites_diverged_branches?: string;
    mirror_trigger_builds?: string;
    mirror_user_id?: string;
    model_experiments_access_level?: string;
    model_registry_access_level?: string;
    monitor_access_level?: string;
    mr_default_target_self?: boolean;
    name?: string;
    name_with_namespace?: string;
    namespace?: Record<string, any>;
    only_allow_merge_if_all_discussions_are_resolved?: boolean;
    only_allow_merge_if_all_status_checks_passed?: string;
    only_allow_merge_if_pipeline_succeeds?: boolean;
    only_mirror_protected_branches?: string;
    open_issues_count?: number;
    owner?: Record<string, any>;
    package_registry_access_level?: string;
    packages_enabled?: boolean;
    pages_access_level?: string;
    path?: string;
    path_with_namespace?: string;
    permissions?: Record<string, any>;
    pre_receive_secret_detection_enabled?: boolean;
    prevent_merge_without_jira_issue?: string;
    printing_merge_request_link_enabled?: boolean;
    public_jobs?: boolean;
    readme_url?: string;
    releases_access_level?: string;
    remove_source_branch_after_merge?: boolean;
    repository_access_level?: string;
    repository_object_format?: string;
    repository_storage?: string;
    request_access_enabled?: boolean;
    requirements_access_level?: string;
    requirements_enabled?: string;
    resolve_outdated_diff_discussions?: boolean;
    resource_group_default_process_mode?: string;
    restrict_user_defined_variables?: boolean;
    runner_token_expiration_interval?: number;
    runners_token?: string;
    secret_push_protection_enabled?: boolean;
    security_and_compliance_access_level?: string;
    security_and_compliance_enabled?: string;
    service_desk_address?: string;
    service_desk_enabled?: boolean;
    shared_runners_enabled?: boolean;
    shared_with_groups?: any[];
    show_diff_preview_in_email?: boolean;
    snippets_access_level?: string;
    snippets_enabled?: boolean;
    spp_repository_pipeline_access?: boolean;
    squash_commit_template?: string;
    squash_option?: string;
    ssh_url_to_repo?: string;
    star_count?: number;
    statistics?: Record<string, any>;
    suggestion_commit_message?: string;
    tag_list?: any[];
    topics?: any[];
    updated_at?: string;
    visibility?: string;
    warn_about_potentially_unwanted_characters?: boolean;
    web_based_commit_signing_enabled?: string;
    web_url?: string;
    wiki_access_level?: string;
    wiki_enabled?: boolean;
    $action?: string;
    [action: string]: any;
}
export interface ApiEntitiesProjectsContainerRegistryProtectionRule {
    id?: number;
    minimum_access_level_for_delete?: string;
    minimum_access_level_for_push?: string;
    project_id?: number;
    repository_path_pattern?: string;
}
export interface ApiEntitiesProjectsContainerRegistryProtectionRuleListMatch {
    project_id: string;
}
export interface ApiEntitiesProjectsContainerRegistryProtectionRuleCreateData {
    project_id: string;
    post_api_v4_projects_id_registry_protection_repository_rule: Record<string, any>;
    id?: number;
    minimum_access_level_for_delete?: string;
    minimum_access_level_for_push?: string;
    repository_path_pattern?: string;
}
export interface ApiEntitiesProjectsContainerRegistryProtectionRuleUpdateData {
    id: string;
    project_id: string;
    patch_api_v4_projects_id_registry_protection_repository_rules_protection_rule_id: Record<string, any>;
    minimum_access_level_for_delete?: string;
    minimum_access_level_for_push?: string;
    repository_path_pattern?: string;
}
export interface ApiEntitiesProjectsPackagesProtectionRule {
    id?: number;
    minimum_access_level_for_delete?: string;
    minimum_access_level_for_push?: string;
    package_name_pattern?: string;
    package_type?: string;
    project_id?: number;
}
export interface ApiEntitiesProjectsPackagesProtectionRuleListMatch {
    project_id: string;
}
export interface ApiEntitiesProjectsPackagesProtectionRuleCreateData {
    project_id: string;
    post_api_v4_projects_id_packages_protection_rule: Record<string, any>;
    id?: number;
    minimum_access_level_for_delete?: string;
    minimum_access_level_for_push?: string;
    package_name_pattern?: string;
    package_type?: string;
}
export interface ApiEntitiesProjectsPackagesProtectionRuleUpdateData {
    id: string;
    project_id: string;
    patch_api_v4_projects_id_packages_protection_rules_package_protection_rule_id: Record<string, any>;
    minimum_access_level_for_delete?: string;
    minimum_access_level_for_push?: string;
    package_name_pattern?: string;
    package_type?: string;
}
export interface ApiEntitiesProjectsTopic {
    avatar_url?: string;
    description?: string;
    id?: string;
    name?: string;
    organization_id?: string;
    title?: string;
    total_projects_count?: string;
}
export interface ApiEntitiesProjectsTopicLoadMatch {
    id: string;
}
export interface ApiEntitiesProjectsTopicCreateData {
    post_api_v4_topic: Record<string, any>;
    avatar_url?: string;
    description?: string;
    id?: string;
    name?: string;
    organization_id?: string;
    title?: string;
    total_projects_count?: string;
}
export interface ApiEntitiesProjectsTopicUpdateData {
    id: string;
    put_api_v4_topics_id: Record<string, any>;
    avatar_url?: string;
    description?: string;
    name?: string;
    organization_id?: string;
    title?: string;
    total_projects_count?: string;
}
export interface ApiEntitiesProtectedBranch {
    allow_force_push?: boolean;
    code_owner_approval_required?: boolean;
    id?: number;
    inherited?: boolean;
    merge_access_levels?: any[];
    name?: string;
    push_access_levels?: any[];
    unprotect_access_levels?: any[];
}
export interface ApiEntitiesProtectedBranchLoadMatch {
    id: string;
    project_id: string;
}
export interface ApiEntitiesProtectedBranchListMatch {
    project_id: string;
    page?: number;
    per_page?: number;
    search?: any;
}
export interface ApiEntitiesProtectedBranchCreateData {
    project_id: string;
    post_api_v4_projects_id_protected_branch: Record<string, any>;
    allow_force_push?: boolean;
    code_owner_approval_required?: boolean;
    id?: number;
    inherited?: boolean;
    merge_access_levels?: any[];
    name?: string;
    push_access_levels?: any[];
    unprotect_access_levels?: any[];
}
export interface ApiEntitiesProtectedBranchUpdateData {
    id: string;
    project_id: string;
    patch_api_v4_projects_id_protected_branches_name: Record<string, any>;
    allow_force_push?: boolean;
    code_owner_approval_required?: boolean;
    inherited?: boolean;
    merge_access_levels?: any[];
    name?: string;
    push_access_levels?: any[];
    unprotect_access_levels?: any[];
}
export interface ApiEntitiesProtectedTag {
    access_level?: number;
    access_level_description?: string;
    create_access_levels?: Record<string, any>;
    deploy_key_id?: number;
    group_id?: number;
    id?: number;
    name?: string;
    user_id?: number;
}
export interface ApiEntitiesProtectedTagLoadMatch {
    id: string;
    project_id: string;
}
export interface ApiEntitiesProtectedTagListMatch {
    project_id: string;
    page?: number;
    per_page?: number;
}
export interface ApiEntitiesProtectedTagCreateData {
    project_id: string;
    post_api_v4_projects_id_protected_tag: Record<string, any>;
    access_level?: number;
    access_level_description?: string;
    create_access_levels?: Record<string, any>;
    deploy_key_id?: number;
    group_id?: number;
    id?: number;
    name?: string;
    user_id?: number;
}
export interface ApiEntitiesPublicGroupDetail {
    avatar_url?: string;
    full_name?: string;
    full_path?: string;
    id?: string;
    name?: string;
    web_url?: string;
}
export interface ApiEntitiesPublicGroupDetailListMatch {
    project_id: string;
    page?: number;
    per_page?: number;
    search?: any;
    shared_min_access_level?: any;
    shared_visible_only?: any;
    skip_group?: any;
    with_shared?: any;
}
export interface ApiEntitiesRelatedIssue {
    assignee?: Record<string, any>;
    assignees?: Record<string, any>;
    author?: Record<string, any>;
    blocking_issues_count?: string;
    closed_at?: string;
    closed_by?: Record<string, any>;
    confidential?: boolean;
    created_at?: string;
    description?: string;
    discussion_locked?: boolean;
    downvotes?: string;
    due_date?: string;
    epic?: Record<string, any>;
    epic_iid?: string;
    has_tasks?: boolean;
    health_status?: string;
    id?: number;
    iid?: number;
    imported?: string;
    imported_from?: string;
    issue_link_id?: string;
    issue_type?: string;
    iteration?: Record<string, any>;
    labels?: any[];
    link_created_at?: string;
    link_type?: string;
    link_updated_at?: string;
    links?: Record<string, any>;
    merge_requests_count?: string;
    milestone?: Record<string, any>;
    moved_to_id?: string;
    project_id?: number;
    references?: Record<string, any>;
    service_desk_reply_to?: string;
    severity?: string;
    state?: string;
    subscribed?: string;
    task_completion_status?: string;
    task_status?: string;
    time_stats?: Record<string, any>;
    title?: string;
    type?: string;
    updated_at?: string;
    upvotes?: string;
    user_notes_count?: string;
    web_url?: string;
    weight?: string;
}
export interface ApiEntitiesRelatedIssueListMatch {
    issue_id: string;
    project_id: string;
}
export interface ApiEntitiesRelationImportTracker {
}
export interface ApiEntitiesRelationImportTrackerCreateData {
    file: any;
    file_etag?: any;
    file_md5?: any;
    file_name?: any;
    file_path?: any;
    file_remote_id?: string;
    file_remote_url?: any;
    file_sha1?: any;
    file_sha256?: any;
    file_size?: any;
    file_type?: any;
    path: string;
    relation: any;
}
export interface ApiEntitiesRelease {
    assets?: Record<string, any>;
    author?: Record<string, any>;
    commit?: Record<string, any>;
    commit_path?: string;
    created_at?: string;
    description?: string;
    description_html?: string;
    evidences?: Record<string, any>;
    id?: string;
    links?: Record<string, any>;
    milestones?: Record<string, any>;
    name?: string;
    released_at?: string;
    tag_name?: string;
    tag_path?: string;
    upcoming_release?: boolean;
}
export interface ApiEntitiesReleaseLoadMatch {
    id: string;
    project_id: string;
    include_html_description?: any;
}
export interface ApiEntitiesReleaseListMatch {
    project_id: string;
    include_html_description?: any;
    order_by?: any;
    page?: number;
    per_page?: number;
    sort?: any;
    updated_after?: any;
    updated_before?: any;
}
export interface ApiEntitiesReleaseCreateData {
    project_id: string;
    post_api_v4_projects_id_release?: Record<string, any>;
    tag_name?: any;
    assets?: Record<string, any>;
    author?: Record<string, any>;
    commit?: Record<string, any>;
    commit_path?: string;
    created_at?: string;
    description?: string;
    description_html?: string;
    evidences?: Record<string, any>;
    id?: string;
    links?: Record<string, any>;
    milestones?: Record<string, any>;
    name?: string;
    released_at?: string;
    tag_path?: string;
    upcoming_release?: boolean;
}
export interface ApiEntitiesReleaseUpdateData {
    id: string;
    project_id: string;
    put_api_v4_projects_id_releases_tag_name: Record<string, any>;
    assets?: Record<string, any>;
    author?: Record<string, any>;
    commit?: Record<string, any>;
    commit_path?: string;
    created_at?: string;
    description?: string;
    description_html?: string;
    evidences?: Record<string, any>;
    links?: Record<string, any>;
    milestones?: Record<string, any>;
    name?: string;
    released_at?: string;
    tag_name?: string;
    tag_path?: string;
    upcoming_release?: boolean;
}
export interface ApiEntitiesReleasesLink {
    direct_asset_url?: string;
    id?: number;
    link_type?: string;
    name?: string;
    url?: string;
}
export interface ApiEntitiesReleasesLinkLoadMatch {
    id: string;
    project_id: string;
    release_id: string;
}
export interface ApiEntitiesReleasesLinkListMatch {
    project_id: string;
    release_id: string;
    page?: number;
    per_page?: number;
}
export interface ApiEntitiesReleasesLinkCreateData {
    project_id: string;
    release_id: string;
    post_api_v4_projects_id_releases_tag_name_assets_link: Record<string, any>;
    direct_asset_url?: string;
    id?: number;
    link_type?: string;
    name?: string;
    url?: string;
}
export interface ApiEntitiesReleasesLinkUpdateData {
    id: string;
    project_id: string;
    release_id: string;
    put_api_v4_projects_id_releases_tag_name_assets_links_link_id: Record<string, any>;
    direct_asset_url?: string;
    link_type?: string;
    name?: string;
    url?: string;
}
export interface ApiEntitiesRemoteMirror {
    auth_method?: string;
    enabled?: boolean;
    host_keys?: any[];
    id?: number;
    keep_divergent_refs?: boolean;
    last_error?: number;
    last_successful_update_at?: string;
    last_update_at?: string;
    last_update_started_at?: string;
    mirror_branch_regex?: string;
    only_protected_branches?: boolean;
    update_status?: string;
    url?: string;
}
export interface ApiEntitiesRemoteMirrorLoadMatch {
    id: string;
    project_id: string;
}
export interface ApiEntitiesRemoteMirrorListMatch {
    project_id: string;
    page?: number;
    per_page?: number;
}
export interface ApiEntitiesRemoteMirrorCreateData {
    project_id: string;
    post_api_v4_projects_id_remote_mirror: Record<string, any>;
    auth_method?: string;
    enabled?: boolean;
    host_keys?: any[];
    id?: number;
    keep_divergent_refs?: boolean;
    last_error?: number;
    last_successful_update_at?: string;
    last_update_at?: string;
    last_update_started_at?: string;
    mirror_branch_regex?: string;
    only_protected_branches?: boolean;
    update_status?: string;
    url?: string;
    $action?: string;
    [action: string]: any;
}
export interface ApiEntitiesRemoteMirrorUpdateData {
    id: string;
    project_id: string;
    put_api_v4_projects_id_remote_mirrors_mirror_id: Record<string, any>;
    auth_method?: string;
    enabled?: boolean;
    host_keys?: any[];
    keep_divergent_refs?: boolean;
    last_error?: number;
    last_successful_update_at?: string;
    last_update_at?: string;
    last_update_started_at?: string;
    mirror_branch_regex?: string;
    only_protected_branches?: boolean;
    update_status?: string;
    url?: string;
}
export interface ApiEntitiesRepositoryHealth {
    alternates?: Record<string, any>;
    bitmap?: Record<string, any>;
    commit_graph?: Record<string, any>;
    is_object_pool?: boolean;
    last_full_repack?: Record<string, any>;
    multi_pack_index?: Record<string, any>;
    multi_pack_index_bitmap?: Record<string, any>;
    objects?: Record<string, any>;
    references?: Record<string, any>;
    size?: number;
    updated_at?: string;
}
export interface ApiEntitiesRepositoryHealthLoadMatch {
    project_id: string;
    generate?: any;
}
export interface ApiEntitiesResourceAccessTokenWithToken {
    access_level?: number;
    active?: boolean;
    created_at?: string;
    description?: string;
    expires_at?: string;
    id?: number;
    last_used_at?: string;
    name?: string;
    resource_id?: number;
    resource_type?: string;
    revoked?: boolean;
    scopes?: any[];
    token?: string;
    user_id?: number;
}
export interface ApiEntitiesResourceAccessTokenWithTokenCreateData {
    group_id: string;
    post_api_v4_groups_id_access_tokens_self_rotate: Record<string, any>;
    access_level?: number;
    active?: boolean;
    created_at?: string;
    description?: string;
    expires_at?: string;
    id?: number;
    last_used_at?: string;
    name?: string;
    resource_id?: number;
    resource_type?: string;
    revoked?: boolean;
    scopes?: any[];
    token?: string;
    user_id?: number;
}
export interface ApiEntitiesResourceMilestoneEvent {
    action?: string;
    created_at?: string;
    id?: number;
    milestone?: Record<string, any>;
    resource_id?: number;
    resource_type?: string;
    state?: string;
    user?: Record<string, any>;
}
export interface ApiEntitiesResourceMilestoneEventLoadMatch {
    id: string;
    issue_id?: string;
    project_id: string;
    merge_request_id?: string;
}
export interface ApiEntitiesResourceMilestoneEventListMatch {
    issue_id?: string;
    project_id: string;
    page?: number;
    per_page?: number;
    merge_request_id?: string;
}
export interface ApiEntitiesSnippet {
    author?: Record<string, any>;
    created_at?: string;
    description?: string;
    file_name?: string;
    files?: any[];
    http_url_to_repo?: string;
    id?: number;
    imported?: boolean;
    imported_from?: string;
    project_id?: number;
    raw_url?: string;
    repository_storage?: string;
    ssh_url_to_repo?: string;
    title?: string;
    updated_at?: string;
    visibility?: string;
    web_url?: string;
}
export interface ApiEntitiesSnippetListMatch {
    created_after?: any;
    created_before?: any;
    page?: number;
    per_page?: number;
}
export interface ApiEntitiesSshKeyWithUser {
    avatar_path?: string;
    avatar_url?: string;
    bio?: string;
    bot?: string;
    can_create_group?: boolean;
    can_create_project?: boolean;
    color_scheme_id?: number;
    commit_email?: string;
    confirmed_at?: string;
    created_at?: string;
    current_sign_in_at?: string;
    custom_attributes?: any[];
    discord?: string;
    email?: string;
    external?: string;
    extra_shared_runners_minutes_limit?: string;
    followers?: string;
    following?: string;
    github?: string;
    id?: number;
    identities?: Record<string, any>;
    is_followed?: boolean;
    job_title?: string;
    last_activity_on?: string;
    last_sign_in_at?: string;
    linkedin?: string;
    local_time?: string;
    location?: string;
    locked?: boolean;
    name?: string;
    organization?: string;
    preferred_language?: string;
    private_profile?: boolean;
    projects_limit?: number;
    pronouns?: string;
    public_email?: string;
    scim_identities?: Record<string, any>;
    shared_runners_minutes_limit?: string;
    state?: string;
    theme_id?: number;
    twitter?: string;
    two_factor_enabled?: boolean;
    username?: string;
    web_url?: string;
    website_url?: string;
    work_information?: string;
}
export interface ApiEntitiesSshKeyWithUserLoadMatch {
    id: string;
}
export interface ApiEntitiesSuggestion {
    appliable?: string;
    applied?: string;
    from_content?: string;
    from_line?: string;
    id?: string;
    to_content?: string;
    to_line?: string;
}
export interface ApiEntitiesSuggestionUpdateData {
    put_api_v4_suggestions_batch_apply: Record<string, any>;
    appliable?: string;
    applied?: string;
    from_content?: string;
    from_line?: string;
    id?: string;
    to_content?: string;
    to_line?: string;
}
export interface ApiEntitiesSystemBroadcastMessage {
    active?: boolean;
    broadcast_type?: string;
    color?: string;
    dismissable?: string;
    ends_at?: string;
    font?: string;
    id?: string;
    message?: string;
    starts_at?: string;
    target_access_levels?: string;
    target_path?: string;
    theme?: string;
}
export interface ApiEntitiesSystemBroadcastMessageLoadMatch {
    id: string;
}
export interface ApiEntitiesSystemBroadcastMessageCreateData {
    post_api_v4_broadcast_message: Record<string, any>;
    active?: boolean;
    broadcast_type?: string;
    color?: string;
    dismissable?: string;
    ends_at?: string;
    font?: string;
    id?: string;
    message?: string;
    starts_at?: string;
    target_access_levels?: string;
    target_path?: string;
    theme?: string;
}
export interface ApiEntitiesSystemBroadcastMessageUpdateData {
    id: string;
    put_api_v4_broadcast_messages_id: Record<string, any>;
    active?: boolean;
    broadcast_type?: string;
    color?: string;
    dismissable?: string;
    ends_at?: string;
    font?: string;
    message?: string;
    starts_at?: string;
    target_access_levels?: string;
    target_path?: string;
    theme?: string;
}
export interface ApiEntitiesSystemBroadcastMessageRemoveMatch {
    id: string;
}
export interface ApiEntitiesTag {
    commit?: Record<string, any>;
    created_at?: string;
    id?: string;
    message?: string;
    name?: string;
    protected?: boolean;
    release?: Record<string, any>;
    target?: string;
}
export interface ApiEntitiesTagLoadMatch {
    id: string;
    project_id: string;
}
export interface ApiEntitiesTagListMatch {
    project_id: string;
    order_by?: any;
    page?: number;
    page_token?: any;
    per_page?: number;
    search?: any;
    sort?: any;
}
export interface ApiEntitiesTagCreateData {
    project_id: string;
    post_api_v4_projects_id_repository_tag: Record<string, any>;
    commit?: Record<string, any>;
    created_at?: string;
    id?: string;
    message?: string;
    name?: string;
    protected?: boolean;
    release?: Record<string, any>;
    target?: string;
}
export interface ApiEntitiesTagSignature {
    signature?: string;
    signature_type?: string;
}
export interface ApiEntitiesTagSignatureLoadMatch {
    project_id: string;
    tag_name: any;
}
export interface ApiEntitiesTemplatesList {
    key?: string;
    name?: string;
}
export interface ApiEntitiesTemplatesListLoadMatch {
    project_id: string;
    type: any;
    page?: number;
    per_page?: number;
}
export interface ApiEntitiesTerraformModuleVersion {
    id?: string;
    modules?: string;
    name?: string;
    provider?: string;
    providers?: string;
    root?: string;
    source?: string;
    submodules?: string;
    version?: string;
    versions?: string;
}
export interface ApiEntitiesTerraformModuleVersionLoadMatch {
    module_name: any;
    module_system: any;
    v1_id?: string;
    module_version?: any;
    module_namespace?: any;
}
export interface ApiEntitiesTerraformModuleVersionListMatch {
    module_name: any;
    module_system: any;
    v1_id: string;
}
export interface ApiEntitiesTreeObject {
    id?: string;
    mode?: string;
    name?: string;
    path?: string;
    type?: string;
}
export interface ApiEntitiesTreeObjectLoadMatch {
    project_id: string;
    page?: number;
    page_token?: any;
    pagination?: any;
    path?: string;
    per_page?: number;
    recursive?: any;
    ref?: any;
}
export interface ApiEntitiesTrigger {
    avatar_path?: string;
    avatar_url?: string;
    created_at?: string;
    custom_attributes?: any[];
    description?: string;
    expires_at?: string;
    id?: number;
    last_used?: string;
    locked?: boolean;
    name?: string;
    owner?: Record<string, any>;
    public_email?: string;
    state?: string;
    token?: string;
    updated_at?: string;
    username?: string;
    web_url?: string;
}
export interface ApiEntitiesTriggerLoadMatch {
    id: string;
    project_id: string;
}
export interface ApiEntitiesTriggerListMatch {
    project_id: string;
    page?: number;
    per_page?: number;
}
export interface ApiEntitiesTriggerCreateData {
    project_id: string;
    post_api_v4_projects_id_trigger: Record<string, any>;
    avatar_path?: string;
    avatar_url?: string;
    created_at?: string;
    custom_attributes?: any[];
    description?: string;
    expires_at?: string;
    id?: number;
    last_used?: string;
    locked?: boolean;
    name?: string;
    owner?: Record<string, any>;
    public_email?: string;
    state?: string;
    token?: string;
    updated_at?: string;
    username?: string;
    web_url?: string;
}
export interface ApiEntitiesTriggerUpdateData {
    id: string;
    project_id: string;
    put_api_v4_projects_id_triggers_trigger_id: Record<string, any>;
    avatar_path?: string;
    avatar_url?: string;
    created_at?: string;
    custom_attributes?: any[];
    description?: string;
    expires_at?: string;
    last_used?: string;
    locked?: boolean;
    name?: string;
    owner?: Record<string, any>;
    public_email?: string;
    state?: string;
    token?: string;
    updated_at?: string;
    username?: string;
    web_url?: string;
}
export interface ApiEntitiesUserAgentDetail {
    akismet_submitted?: boolean;
    ip_address?: string;
    user_agent?: string;
}
export interface ApiEntitiesUserAgentDetailLoadMatch {
    snippet_id: string;
}
export interface ApiEntitiesUserCount {
    assigned_issues?: number;
    assigned_merge_requests?: number;
    merge_requests?: number;
    review_requested_merge_requests?: number;
    todos?: number;
}
export interface ApiEntitiesUserCountLoadMatch {
    assigned_issues?: number;
    assigned_merge_requests?: number;
    merge_requests?: number;
    review_requested_merge_requests?: number;
    todos?: number;
}
export interface ApiEntitiesUserPublic {
    avatar_path?: string;
    avatar_url?: string;
    bio?: string;
    bot?: string;
    can_create_group?: boolean;
    can_create_project?: boolean;
    color_scheme_id?: number;
    commit_email?: string;
    confirmed_at?: string;
    created_at?: string;
    current_sign_in_at?: string;
    custom_attributes?: any[];
    discord?: string;
    email?: string;
    external?: string;
    extra_shared_runners_minutes_limit?: string;
    followers?: string;
    following?: string;
    github?: string;
    id?: number;
    identities?: Record<string, any>;
    is_followed?: boolean;
    job_title?: string;
    key?: string;
    last_activity_on?: string;
    last_sign_in_at?: string;
    linkedin?: string;
    local_time?: string;
    location?: string;
    locked?: boolean;
    name?: string;
    organization?: string;
    preferred_language?: string;
    private_profile?: boolean;
    projects_limit?: number;
    pronouns?: string;
    public_email?: string;
    scim_identities?: Record<string, any>;
    shared_runners_minutes_limit?: string;
    state?: string;
    theme_id?: number;
    twitter?: string;
    two_factor_enabled?: boolean;
    username?: string;
    value?: string;
    web_url?: string;
    website_url?: string;
    work_information?: string;
}
export interface ApiEntitiesUserPublicListMatch {
    group_id: string;
    active?: boolean;
    blocked?: boolean;
    created_after?: any;
    created_before?: any;
    page?: number;
    per_page?: number;
    search?: any;
    username?: string;
}
export interface ApiEntitiesUserWithAdmin {
    key?: string;
    value?: string;
}
export interface ApiEntitiesUserWithAdminListMatch {
    fingerprint: any;
}
export interface ApiEntitiesWikiAttachment {
}
export interface ApiEntitiesWikiAttachmentCreateData {
    group_id: string;
    post_api_v4_groups_id_wikis_attachment: Record<string, any>;
}
export interface ApiEntitiesWikiPage {
}
export interface ApiEntitiesWikiPageLoadMatch {
    group_id?: string;
    slug: string;
    render_html?: any;
    version?: any;
    project_id?: string;
}
export interface ApiEntitiesWikiPageCreateData {
    group_id: string;
    post_api_v4_groups_id_wiki: Record<string, any>;
}
export interface ApiEntitiesWikiPageUpdateData {
    group_id?: string;
    slug: string;
    put_api_v4_groups_id_wikis_slug?: Record<string, any>;
    project_id?: string;
    put_api_v4_projects_id_wikis_slug?: Record<string, any>;
}
export interface ApiEntitiesWikiPageBasic {
    format?: string;
    slug?: string;
    title?: string;
    wiki_page_meta_id?: number;
}
export interface ApiEntitiesWikiPageBasicListMatch {
    group_id: string;
    with_content?: any;
}
export interface Application {
    id?: string;
}
export interface ApplicationRemoveMatch {
    id: string;
}
export interface AwardEmoji {
    id?: string;
}
export interface AwardEmojiRemoveMatch {
    epic_id?: string;
    group_id?: string;
    id: string;
    note_id?: string;
    issue_id?: string;
    project_id?: string;
    merge_request_id?: string;
    snippet_id?: string;
}
export interface Badge {
    id?: string;
}
export interface BadgeRemoveMatch {
    group_id?: string;
    id: string;
    project_id?: string;
}
export interface Branch {
    id?: string;
}
export interface BranchRemoveMatch {
    id?: string;
    project_id: string;
}
export interface CargoPackage {
}
export interface CargoPackageLoadMatch {
    project_id: string;
}
export interface CiVariable {
    id?: string;
}
export interface CiVariableRemoveMatch {
    id: string;
    project_id?: string;
    filter_environment_scope?: any;
    group_id?: string;
}
export interface Cluster {
    id?: string;
}
export interface ClusterRemoveMatch {
    group_id?: string;
    id: string;
    project_id?: string;
}
export interface ClusterAgent {
    id?: string;
}
export interface ClusterAgentRemoveMatch {
    id: string;
    project_id: string;
    token_id?: string;
}
export interface Composer {
}
export interface ComposerCreateData {
    project_id: string;
    post_api_v4_projects_id_packages_composer: Record<string, any>;
}
export interface ComposerPackage {
}
export interface ComposerPackageLoadMatch {
    group_id: string;
    sha: any;
}
export interface Conan {
    id?: string;
}
export interface ConanRemoveMatch {
    id?: string;
    package_channel: any;
    package_name: any;
    package_username: any;
    package_version: any;
}
export interface ConanPackage {
    id?: string;
}
export interface ConanPackageLoadMatch {
    file_id: string;
    file_name: any;
    package_channel: any;
    package_username: any;
    package_version: any;
    recipe_revision: any;
}
export interface ConanPackageUpdateData {
    conan_package_reference?: any;
    file_name: any;
    id?: string;
    package_channel: any;
    package_name?: any;
    package_revision?: any;
    package_username: any;
    package_version: any;
    recipe_revision?: any;
    put_api_v4_projects_id_packages_conan_v1_files_package_name_package_version_package_username_package_channel_recipe_revision_package_conan_package_reference_package_revision_file_name?: Record<string, any>;
    conan_id?: string;
    package_id?: string;
    project_id?: string;
    revision_id?: string;
    put_api_v4_projects_id_packages_conan_v2_conans_package_name_package_version_package_username_package_channel_revisions_recipe_revision_packages_conan_package_reference_revisions_package_revision_files_file_name?: Record<string, any>;
    put_api_v4_packages_conan_v1_files_package_name_package_version_package_username_package_channel_recipe_revision_package_conan_package_reference_package_revision_file_name?: Record<string, any>;
    file_id?: string;
    put_api_v4_projects_id_packages_conan_v2_conans_package_name_package_version_package_username_package_channel_revisions_recipe_revision_files_file_name?: Record<string, any>;
    put_api_v4_projects_id_packages_conan_v1_files_package_name_package_version_package_username_package_channel_recipe_revision_export_file_name?: Record<string, any>;
    put_api_v4_packages_conan_v1_files_package_name_package_version_package_username_package_channel_recipe_revision_export_file_name?: Record<string, any>;
    $action?: string;
    [action: string]: any;
}
export interface ConanPackageRemoveMatch {
    conan_id: string;
    package_channel: any;
    package_id?: string;
    package_revision?: any;
    package_username: any;
    package_version: any;
    project_id: string;
    revision_id?: string;
    recipe_revision?: any;
}
export interface ContainerRegistry {
}
export interface ContainerRegistryRemoveMatch {
    project_id: string;
    repository_id: string;
    keep_n?: any;
    name_regex?: any;
    name_regex_delete?: any;
    name_regex_keep?: any;
    older_than?: any;
    tag_name?: any;
}
export interface ContainerRegistryEvent {
}
export interface ContainerRegistryEventCreateData {
}
export interface CustomAttribute {
    id?: string;
    key?: string;
    value?: string;
}
export interface CustomAttributeLoadMatch {
    group_id: string;
    id: string;
}
export interface Debian {
    id?: string;
}
export interface DebianUpdateData {
    id: string;
    project_id: string;
    put_api_v4_projects_id_packages_debian_file_name: Record<string, any>;
    $action?: string;
    [action: string]: any;
}
export interface DebianDistribution {
    id?: string;
}
export interface DebianDistributionRemoveMatch {
    group_id?: string;
    id: string;
    architecture?: any;
    component?: any;
    description?: string;
    label?: string;
    origin?: any;
    suite?: any;
    valid_time_duration_second?: any;
    version?: any;
    project_id?: string;
}
export interface DebianPackage {
    id?: string;
}
export interface DebianPackageLoadMatch {
    distribution: any;
    file_name?: any;
    id?: string;
    letter?: any;
    package_name?: any;
    package_version?: any;
    project_id?: string;
    architecture?: any;
    distribution_id?: string;
    file_sha256?: any;
    group_id?: string;
}
export interface DependencyProxy {
}
export interface DependencyProxyRemoveMatch {
    group_id: string;
    $action?: string;
    [action: string]: any;
}
export interface DeployKey {
    id?: string;
}
export interface DeployKeyRemoveMatch {
    id: string;
    project_id: string;
}
export interface DeployToken {
    id?: string;
}
export interface DeployTokenRemoveMatch {
    group_id?: string;
    id: string;
    project_id?: string;
}
export interface Deployment {
    id?: string;
}
export interface DeploymentRemoveMatch {
    id: string;
    project_id: string;
}
export interface EeApiEntitiesApprovalState {
}
export interface EeApiEntitiesApprovalStateCreateData {
    merge_request_id: string;
    project_id: string;
    post_api_v4_projects_id_merge_requests_merge_request_iid_approval: Record<string, any>;
}
export interface EeApiEntitiesAuditEvent {
    author_id?: string;
    created_at?: string;
    details?: string;
    entity_id?: string;
    entity_type?: string;
    event_name?: string;
    id?: string;
}
export interface EeApiEntitiesAuditEventLoadMatch {
    group_id?: string;
    id: string;
    project_id?: string;
}
export interface EeApiEntitiesAuditEventListMatch {
    group_id: string;
    created_after?: any;
    created_before?: any;
    page?: number;
    per_page?: number;
}
export interface EeApiEntitiesBillableMembership {
    custom_role?: string;
    integer_value?: string;
    string_value?: string;
}
export interface EeApiEntitiesBillableMembershipLoadMatch {
    billable_member_id: string;
    group_id: string;
    page?: number;
    per_page?: number;
}
export interface EeApiEntitiesGeoNodeStatus {
    ci_secure_files_checksum_failed_count?: string;
    ci_secure_files_checksum_total_count?: string;
    ci_secure_files_checksummed_count?: string;
    ci_secure_files_count?: string;
    ci_secure_files_failed_count?: string;
    ci_secure_files_registry_count?: string;
    ci_secure_files_synced_count?: string;
    ci_secure_files_synced_in_percentage?: string;
    ci_secure_files_verification_failed_count?: string;
    ci_secure_files_verification_total_count?: string;
    ci_secure_files_verified_count?: string;
    ci_secure_files_verified_in_percentage?: string;
    container_repositories_checksum_failed_count?: string;
    container_repositories_checksum_total_count?: string;
    container_repositories_checksummed_count?: string;
    container_repositories_count?: string;
    container_repositories_failed_count?: string;
    container_repositories_registry_count?: string;
    container_repositories_replication_enabled?: string;
    container_repositories_synced_count?: string;
    container_repositories_synced_in_percentage?: string;
    container_repositories_verification_failed_count?: string;
    container_repositories_verification_total_count?: string;
    container_repositories_verified_count?: string;
    container_repositories_verified_in_percentage?: string;
    cursor_last_event_id?: string;
    cursor_last_event_timestamp?: string;
    db_replication_lag_seconds?: string;
    dependency_proxy_blobs_checksum_failed_count?: string;
    dependency_proxy_blobs_checksum_total_count?: string;
    dependency_proxy_blobs_checksummed_count?: string;
    dependency_proxy_blobs_count?: string;
    dependency_proxy_blobs_failed_count?: string;
    dependency_proxy_blobs_registry_count?: string;
    dependency_proxy_blobs_synced_count?: string;
    dependency_proxy_blobs_synced_in_percentage?: string;
    dependency_proxy_blobs_verification_failed_count?: string;
    dependency_proxy_blobs_verification_total_count?: string;
    dependency_proxy_blobs_verified_count?: string;
    dependency_proxy_blobs_verified_in_percentage?: string;
    dependency_proxy_manifests_checksum_failed_count?: string;
    dependency_proxy_manifests_checksum_total_count?: string;
    dependency_proxy_manifests_checksummed_count?: string;
    dependency_proxy_manifests_count?: string;
    dependency_proxy_manifests_failed_count?: string;
    dependency_proxy_manifests_registry_count?: string;
    dependency_proxy_manifests_synced_count?: string;
    dependency_proxy_manifests_synced_in_percentage?: string;
    dependency_proxy_manifests_verification_failed_count?: string;
    dependency_proxy_manifests_verification_total_count?: string;
    dependency_proxy_manifests_verified_count?: string;
    dependency_proxy_manifests_verified_in_percentage?: string;
    design_management_repositories_checksum_failed_count?: string;
    design_management_repositories_checksum_total_count?: string;
    design_management_repositories_checksummed_count?: string;
    design_management_repositories_count?: string;
    design_management_repositories_failed_count?: string;
    design_management_repositories_registry_count?: string;
    design_management_repositories_synced_count?: string;
    design_management_repositories_synced_in_percentage?: string;
    design_management_repositories_verification_failed_count?: string;
    design_management_repositories_verification_total_count?: string;
    design_management_repositories_verified_count?: string;
    design_management_repositories_verified_in_percentage?: string;
    geo_node_id?: string;
    git_fetch_event_count_weekly?: string;
    git_push_event_count_weekly?: string;
    group_wiki_repositories_checksum_failed_count?: string;
    group_wiki_repositories_checksum_total_count?: string;
    group_wiki_repositories_checksummed_count?: string;
    group_wiki_repositories_count?: string;
    group_wiki_repositories_failed_count?: string;
    group_wiki_repositories_registry_count?: string;
    group_wiki_repositories_synced_count?: string;
    group_wiki_repositories_synced_in_percentage?: string;
    group_wiki_repositories_verification_failed_count?: string;
    group_wiki_repositories_verification_total_count?: string;
    group_wiki_repositories_verified_count?: string;
    group_wiki_repositories_verified_in_percentage?: string;
    health?: string;
    health_status?: string;
    healthy?: string;
    job_artifacts_checksum_failed_count?: string;
    job_artifacts_checksum_total_count?: string;
    job_artifacts_checksummed_count?: string;
    job_artifacts_count?: string;
    job_artifacts_failed_count?: string;
    job_artifacts_registry_count?: string;
    job_artifacts_synced_count?: string;
    job_artifacts_synced_in_percentage?: string;
    job_artifacts_verification_failed_count?: string;
    job_artifacts_verification_total_count?: string;
    job_artifacts_verified_count?: string;
    job_artifacts_verified_in_percentage?: string;
    last_event_id?: string;
    last_event_timestamp?: string;
    last_successful_status_check_timestamp?: string;
    lfs_objects_checksum_failed_count?: string;
    lfs_objects_checksum_total_count?: string;
    lfs_objects_checksummed_count?: string;
    lfs_objects_count?: string;
    lfs_objects_failed_count?: string;
    lfs_objects_registry_count?: string;
    lfs_objects_synced_count?: string;
    lfs_objects_synced_in_percentage?: string;
    lfs_objects_verification_failed_count?: string;
    lfs_objects_verification_total_count?: string;
    lfs_objects_verified_count?: string;
    lfs_objects_verified_in_percentage?: string;
    links?: Record<string, any>;
    merge_request_diffs_checksum_failed_count?: string;
    merge_request_diffs_checksum_total_count?: string;
    merge_request_diffs_checksummed_count?: string;
    merge_request_diffs_count?: string;
    merge_request_diffs_failed_count?: string;
    merge_request_diffs_registry_count?: string;
    merge_request_diffs_synced_count?: string;
    merge_request_diffs_synced_in_percentage?: string;
    merge_request_diffs_verification_failed_count?: string;
    merge_request_diffs_verification_total_count?: string;
    merge_request_diffs_verified_count?: string;
    merge_request_diffs_verified_in_percentage?: string;
    missing_oauth_application?: string;
    namespaces?: Record<string, any>;
    package_files_checksum_failed_count?: string;
    package_files_checksum_total_count?: string;
    package_files_checksummed_count?: string;
    package_files_count?: string;
    package_files_failed_count?: string;
    package_files_registry_count?: string;
    package_files_synced_count?: string;
    package_files_synced_in_percentage?: string;
    package_files_verification_failed_count?: string;
    package_files_verification_total_count?: string;
    package_files_verified_count?: string;
    package_files_verified_in_percentage?: string;
    pages_deployments_checksum_failed_count?: string;
    pages_deployments_checksum_total_count?: string;
    pages_deployments_checksummed_count?: string;
    pages_deployments_count?: string;
    pages_deployments_failed_count?: string;
    pages_deployments_registry_count?: string;
    pages_deployments_synced_count?: string;
    pages_deployments_synced_in_percentage?: string;
    pages_deployments_verification_failed_count?: string;
    pages_deployments_verification_total_count?: string;
    pages_deployments_verified_count?: string;
    pages_deployments_verified_in_percentage?: string;
    pipeline_artifacts_checksum_failed_count?: string;
    pipeline_artifacts_checksum_total_count?: string;
    pipeline_artifacts_checksummed_count?: string;
    pipeline_artifacts_count?: string;
    pipeline_artifacts_failed_count?: string;
    pipeline_artifacts_registry_count?: string;
    pipeline_artifacts_synced_count?: string;
    pipeline_artifacts_synced_in_percentage?: string;
    pipeline_artifacts_verification_failed_count?: string;
    pipeline_artifacts_verification_total_count?: string;
    pipeline_artifacts_verified_count?: string;
    pipeline_artifacts_verified_in_percentage?: string;
    project_repositories_checksum_failed_count?: string;
    project_repositories_checksum_total_count?: string;
    project_repositories_checksummed_count?: string;
    project_repositories_count?: string;
    project_repositories_failed_count?: string;
    project_repositories_registry_count?: string;
    project_repositories_synced_count?: string;
    project_repositories_synced_in_percentage?: string;
    project_repositories_verification_failed_count?: string;
    project_repositories_verification_total_count?: string;
    project_repositories_verified_count?: string;
    project_repositories_verified_in_percentage?: string;
    project_wiki_repositories_checksum_failed_count?: string;
    project_wiki_repositories_checksum_total_count?: string;
    project_wiki_repositories_checksummed_count?: string;
    project_wiki_repositories_count?: string;
    project_wiki_repositories_failed_count?: string;
    project_wiki_repositories_registry_count?: string;
    project_wiki_repositories_synced_count?: string;
    project_wiki_repositories_synced_in_percentage?: string;
    project_wiki_repositories_verification_failed_count?: string;
    project_wiki_repositories_verification_total_count?: string;
    project_wiki_repositories_verified_count?: string;
    project_wiki_repositories_verified_in_percentage?: string;
    projects_count?: string;
    proxy_local_requests_event_count_weekly?: string;
    proxy_remote_requests_event_count_weekly?: string;
    replication_slots_count?: string;
    replication_slots_max_retained_wal_bytes?: string;
    replication_slots_used_count?: string;
    replication_slots_used_in_percentage?: string;
    repositories_checked_count?: string;
    repositories_checked_failed_count?: string;
    repositories_checked_in_percentage?: string;
    repositories_count?: string;
    revision?: string;
    selective_sync_type?: string;
    snippet_repositories_checksum_failed_count?: string;
    snippet_repositories_checksum_total_count?: string;
    snippet_repositories_checksummed_count?: string;
    snippet_repositories_count?: string;
    snippet_repositories_failed_count?: string;
    snippet_repositories_registry_count?: string;
    snippet_repositories_synced_count?: string;
    snippet_repositories_synced_in_percentage?: string;
    snippet_repositories_verification_failed_count?: string;
    snippet_repositories_verification_total_count?: string;
    snippet_repositories_verified_count?: string;
    snippet_repositories_verified_in_percentage?: string;
    storage_shards?: Record<string, any>;
    storage_shards_match?: string;
    terraform_state_versions_checksum_failed_count?: string;
    terraform_state_versions_checksum_total_count?: string;
    terraform_state_versions_checksummed_count?: string;
    terraform_state_versions_count?: string;
    terraform_state_versions_failed_count?: string;
    terraform_state_versions_registry_count?: string;
    terraform_state_versions_synced_count?: string;
    terraform_state_versions_synced_in_percentage?: string;
    terraform_state_versions_verification_failed_count?: string;
    terraform_state_versions_verification_total_count?: string;
    terraform_state_versions_verified_count?: string;
    terraform_state_versions_verified_in_percentage?: string;
    updated_at?: string;
    uploads_checksum_failed_count?: string;
    uploads_checksum_total_count?: string;
    uploads_checksummed_count?: string;
    uploads_count?: string;
    uploads_failed_count?: string;
    uploads_registry_count?: string;
    uploads_synced_count?: string;
    uploads_synced_in_percentage?: string;
    uploads_verification_failed_count?: string;
    uploads_verification_total_count?: string;
    uploads_verified_count?: string;
    uploads_verified_in_percentage?: string;
    version?: string;
}
export interface EeApiEntitiesGeoNodeStatusCreateData {
    post_api_v4_geo_status: Record<string, any>;
    ci_secure_files_checksum_failed_count?: string;
    ci_secure_files_checksum_total_count?: string;
    ci_secure_files_checksummed_count?: string;
    ci_secure_files_count?: string;
    ci_secure_files_failed_count?: string;
    ci_secure_files_registry_count?: string;
    ci_secure_files_synced_count?: string;
    ci_secure_files_synced_in_percentage?: string;
    ci_secure_files_verification_failed_count?: string;
    ci_secure_files_verification_total_count?: string;
    ci_secure_files_verified_count?: string;
    ci_secure_files_verified_in_percentage?: string;
    container_repositories_checksum_failed_count?: string;
    container_repositories_checksum_total_count?: string;
    container_repositories_checksummed_count?: string;
    container_repositories_count?: string;
    container_repositories_failed_count?: string;
    container_repositories_registry_count?: string;
    container_repositories_replication_enabled?: string;
    container_repositories_synced_count?: string;
    container_repositories_synced_in_percentage?: string;
    container_repositories_verification_failed_count?: string;
    container_repositories_verification_total_count?: string;
    container_repositories_verified_count?: string;
    container_repositories_verified_in_percentage?: string;
    cursor_last_event_id?: string;
    cursor_last_event_timestamp?: string;
    db_replication_lag_seconds?: string;
    dependency_proxy_blobs_checksum_failed_count?: string;
    dependency_proxy_blobs_checksum_total_count?: string;
    dependency_proxy_blobs_checksummed_count?: string;
    dependency_proxy_blobs_count?: string;
    dependency_proxy_blobs_failed_count?: string;
    dependency_proxy_blobs_registry_count?: string;
    dependency_proxy_blobs_synced_count?: string;
    dependency_proxy_blobs_synced_in_percentage?: string;
    dependency_proxy_blobs_verification_failed_count?: string;
    dependency_proxy_blobs_verification_total_count?: string;
    dependency_proxy_blobs_verified_count?: string;
    dependency_proxy_blobs_verified_in_percentage?: string;
    dependency_proxy_manifests_checksum_failed_count?: string;
    dependency_proxy_manifests_checksum_total_count?: string;
    dependency_proxy_manifests_checksummed_count?: string;
    dependency_proxy_manifests_count?: string;
    dependency_proxy_manifests_failed_count?: string;
    dependency_proxy_manifests_registry_count?: string;
    dependency_proxy_manifests_synced_count?: string;
    dependency_proxy_manifests_synced_in_percentage?: string;
    dependency_proxy_manifests_verification_failed_count?: string;
    dependency_proxy_manifests_verification_total_count?: string;
    dependency_proxy_manifests_verified_count?: string;
    dependency_proxy_manifests_verified_in_percentage?: string;
    design_management_repositories_checksum_failed_count?: string;
    design_management_repositories_checksum_total_count?: string;
    design_management_repositories_checksummed_count?: string;
    design_management_repositories_count?: string;
    design_management_repositories_failed_count?: string;
    design_management_repositories_registry_count?: string;
    design_management_repositories_synced_count?: string;
    design_management_repositories_synced_in_percentage?: string;
    design_management_repositories_verification_failed_count?: string;
    design_management_repositories_verification_total_count?: string;
    design_management_repositories_verified_count?: string;
    design_management_repositories_verified_in_percentage?: string;
    geo_node_id?: string;
    git_fetch_event_count_weekly?: string;
    git_push_event_count_weekly?: string;
    group_wiki_repositories_checksum_failed_count?: string;
    group_wiki_repositories_checksum_total_count?: string;
    group_wiki_repositories_checksummed_count?: string;
    group_wiki_repositories_count?: string;
    group_wiki_repositories_failed_count?: string;
    group_wiki_repositories_registry_count?: string;
    group_wiki_repositories_synced_count?: string;
    group_wiki_repositories_synced_in_percentage?: string;
    group_wiki_repositories_verification_failed_count?: string;
    group_wiki_repositories_verification_total_count?: string;
    group_wiki_repositories_verified_count?: string;
    group_wiki_repositories_verified_in_percentage?: string;
    health?: string;
    health_status?: string;
    healthy?: string;
    job_artifacts_checksum_failed_count?: string;
    job_artifacts_checksum_total_count?: string;
    job_artifacts_checksummed_count?: string;
    job_artifacts_count?: string;
    job_artifacts_failed_count?: string;
    job_artifacts_registry_count?: string;
    job_artifacts_synced_count?: string;
    job_artifacts_synced_in_percentage?: string;
    job_artifacts_verification_failed_count?: string;
    job_artifacts_verification_total_count?: string;
    job_artifacts_verified_count?: string;
    job_artifacts_verified_in_percentage?: string;
    last_event_id?: string;
    last_event_timestamp?: string;
    last_successful_status_check_timestamp?: string;
    lfs_objects_checksum_failed_count?: string;
    lfs_objects_checksum_total_count?: string;
    lfs_objects_checksummed_count?: string;
    lfs_objects_count?: string;
    lfs_objects_failed_count?: string;
    lfs_objects_registry_count?: string;
    lfs_objects_synced_count?: string;
    lfs_objects_synced_in_percentage?: string;
    lfs_objects_verification_failed_count?: string;
    lfs_objects_verification_total_count?: string;
    lfs_objects_verified_count?: string;
    lfs_objects_verified_in_percentage?: string;
    links?: Record<string, any>;
    merge_request_diffs_checksum_failed_count?: string;
    merge_request_diffs_checksum_total_count?: string;
    merge_request_diffs_checksummed_count?: string;
    merge_request_diffs_count?: string;
    merge_request_diffs_failed_count?: string;
    merge_request_diffs_registry_count?: string;
    merge_request_diffs_synced_count?: string;
    merge_request_diffs_synced_in_percentage?: string;
    merge_request_diffs_verification_failed_count?: string;
    merge_request_diffs_verification_total_count?: string;
    merge_request_diffs_verified_count?: string;
    merge_request_diffs_verified_in_percentage?: string;
    missing_oauth_application?: string;
    namespaces?: Record<string, any>;
    package_files_checksum_failed_count?: string;
    package_files_checksum_total_count?: string;
    package_files_checksummed_count?: string;
    package_files_count?: string;
    package_files_failed_count?: string;
    package_files_registry_count?: string;
    package_files_synced_count?: string;
    package_files_synced_in_percentage?: string;
    package_files_verification_failed_count?: string;
    package_files_verification_total_count?: string;
    package_files_verified_count?: string;
    package_files_verified_in_percentage?: string;
    pages_deployments_checksum_failed_count?: string;
    pages_deployments_checksum_total_count?: string;
    pages_deployments_checksummed_count?: string;
    pages_deployments_count?: string;
    pages_deployments_failed_count?: string;
    pages_deployments_registry_count?: string;
    pages_deployments_synced_count?: string;
    pages_deployments_synced_in_percentage?: string;
    pages_deployments_verification_failed_count?: string;
    pages_deployments_verification_total_count?: string;
    pages_deployments_verified_count?: string;
    pages_deployments_verified_in_percentage?: string;
    pipeline_artifacts_checksum_failed_count?: string;
    pipeline_artifacts_checksum_total_count?: string;
    pipeline_artifacts_checksummed_count?: string;
    pipeline_artifacts_count?: string;
    pipeline_artifacts_failed_count?: string;
    pipeline_artifacts_registry_count?: string;
    pipeline_artifacts_synced_count?: string;
    pipeline_artifacts_synced_in_percentage?: string;
    pipeline_artifacts_verification_failed_count?: string;
    pipeline_artifacts_verification_total_count?: string;
    pipeline_artifacts_verified_count?: string;
    pipeline_artifacts_verified_in_percentage?: string;
    project_repositories_checksum_failed_count?: string;
    project_repositories_checksum_total_count?: string;
    project_repositories_checksummed_count?: string;
    project_repositories_count?: string;
    project_repositories_failed_count?: string;
    project_repositories_registry_count?: string;
    project_repositories_synced_count?: string;
    project_repositories_synced_in_percentage?: string;
    project_repositories_verification_failed_count?: string;
    project_repositories_verification_total_count?: string;
    project_repositories_verified_count?: string;
    project_repositories_verified_in_percentage?: string;
    project_wiki_repositories_checksum_failed_count?: string;
    project_wiki_repositories_checksum_total_count?: string;
    project_wiki_repositories_checksummed_count?: string;
    project_wiki_repositories_count?: string;
    project_wiki_repositories_failed_count?: string;
    project_wiki_repositories_registry_count?: string;
    project_wiki_repositories_synced_count?: string;
    project_wiki_repositories_synced_in_percentage?: string;
    project_wiki_repositories_verification_failed_count?: string;
    project_wiki_repositories_verification_total_count?: string;
    project_wiki_repositories_verified_count?: string;
    project_wiki_repositories_verified_in_percentage?: string;
    projects_count?: string;
    proxy_local_requests_event_count_weekly?: string;
    proxy_remote_requests_event_count_weekly?: string;
    replication_slots_count?: string;
    replication_slots_max_retained_wal_bytes?: string;
    replication_slots_used_count?: string;
    replication_slots_used_in_percentage?: string;
    repositories_checked_count?: string;
    repositories_checked_failed_count?: string;
    repositories_checked_in_percentage?: string;
    repositories_count?: string;
    revision?: string;
    selective_sync_type?: string;
    snippet_repositories_checksum_failed_count?: string;
    snippet_repositories_checksum_total_count?: string;
    snippet_repositories_checksummed_count?: string;
    snippet_repositories_count?: string;
    snippet_repositories_failed_count?: string;
    snippet_repositories_registry_count?: string;
    snippet_repositories_synced_count?: string;
    snippet_repositories_synced_in_percentage?: string;
    snippet_repositories_verification_failed_count?: string;
    snippet_repositories_verification_total_count?: string;
    snippet_repositories_verified_count?: string;
    snippet_repositories_verified_in_percentage?: string;
    storage_shards?: Record<string, any>;
    storage_shards_match?: string;
    terraform_state_versions_checksum_failed_count?: string;
    terraform_state_versions_checksum_total_count?: string;
    terraform_state_versions_checksummed_count?: string;
    terraform_state_versions_count?: string;
    terraform_state_versions_failed_count?: string;
    terraform_state_versions_registry_count?: string;
    terraform_state_versions_synced_count?: string;
    terraform_state_versions_synced_in_percentage?: string;
    terraform_state_versions_verification_failed_count?: string;
    terraform_state_versions_verification_total_count?: string;
    terraform_state_versions_verified_count?: string;
    terraform_state_versions_verified_in_percentage?: string;
    updated_at?: string;
    uploads_checksum_failed_count?: string;
    uploads_checksum_total_count?: string;
    uploads_checksummed_count?: string;
    uploads_count?: string;
    uploads_failed_count?: string;
    uploads_registry_count?: string;
    uploads_synced_count?: string;
    uploads_synced_in_percentage?: string;
    uploads_verification_failed_count?: string;
    uploads_verification_total_count?: string;
    uploads_verified_count?: string;
    uploads_verified_in_percentage?: string;
    version?: string;
}
export interface EeApiEntitiesGeoPipelineRef {
    pipeline_refs?: any[];
}
export interface EeApiEntitiesGeoPipelineRefListMatch {
    gl_repository: any;
}
export interface EeApiEntitiesIssuableMetricImage {
    created_at?: string;
    file_path?: string;
    filename?: string;
    id?: string;
    url?: string;
    url_text?: string;
}
export interface EeApiEntitiesIssuableMetricImageCreateData {
    issue_id: string;
    project_id: string;
    post_api_v4_projects_id_issues_issue_iid_metric_image: Record<string, any>;
    created_at?: string;
    file_path?: string;
    filename?: string;
    id?: string;
    url?: string;
    url_text?: string;
}
export interface EeApiEntitiesIssuableMetricImageUpdateData {
    id: string;
    issue_id: string;
    project_id: string;
    put_api_v4_projects_id_issues_issue_iid_metric_images_metric_image_id: Record<string, any>;
    created_at?: string;
    file_path?: string;
    filename?: string;
    url?: string;
    url_text?: string;
}
export interface EeApiEntitiesIssuableMetricImageRemoveMatch {
    id: string;
    issue_id: string;
    project_id: string;
}
export interface EeApiEntitiesMergeRequestApprovalState {
    approvals_required?: number;
    approved?: boolean;
    approved_by?: any[];
    code_owner?: boolean;
    contains_hidden_groups?: boolean;
    eligible_approvers?: any[];
    groups?: any[];
    id?: number;
    name?: string;
    overridden?: boolean;
    report_type?: string;
    rule_type?: string;
    section?: string;
    source_rule?: Record<string, any>;
    users?: any[];
}
export interface EeApiEntitiesMergeRequestApprovalStateListMatch {
    merge_request_id: string;
    project_id: string;
}
export interface EeApiEntitiesSshCertificate {
    created_at?: string;
    id?: number;
    key?: string;
    title?: string;
}
export interface EeApiEntitiesSshCertificateListMatch {
    group_id: string;
    page?: number;
    per_page?: number;
}
export interface EeApiEntitiesSshCertificateCreateData {
    group_id: string;
    post_api_v4_groups_id_ssh_certificate: Record<string, any>;
    created_at?: string;
    id?: number;
    key?: string;
    title?: string;
}
export interface Environment {
    id?: string;
}
export interface EnvironmentCreateData {
    project_id: string;
    post_api_v4_projects_id_environments_stop_stale: Record<string, any>;
    id?: string;
    $action?: string;
    [action: string]: any;
}
export interface EnvironmentRemoveMatch {
    id: string;
    project_id: string;
    $action?: string;
    [action: string]: any;
}
export interface ErrorTrackingClientKey {
    id?: string;
}
export interface ErrorTrackingClientKeyRemoveMatch {
    id: string;
    project_id: string;
}
export interface Feature {
    id?: string;
}
export interface FeatureRemoveMatch {
    id: string;
}
export interface FeatureFlag {
    id?: string;
}
export interface FeatureFlagLoadMatch {
    project_id: string;
    app_name?: any;
    instance_id?: string;
}
export interface FeatureFlagCreateData {
    unleash_id: string;
    post_api_v4_feature_flags_unleash_project_id_client_metric?: Record<string, any>;
    post_api_v4_feature_flags_unleash_project_id_client_register?: Record<string, any>;
    id?: string;
}
export interface FeatureFlagRemoveMatch {
    id: string;
    project_id: string;
}
export interface FeatureFlagsUserList {
    id?: string;
}
export interface FeatureFlagsUserListRemoveMatch {
    id: string;
    project_id: string;
}
export interface FreezePeriod {
    id?: string;
}
export interface FreezePeriodRemoveMatch {
    id: string;
    project_id: string;
}
export interface GenericPackage {
}
export interface GenericPackageLoadMatch {
    file_name: any;
    generic_id: string;
    project_id: string;
    package_version: any;
    path?: string;
}
export interface GenericPackageUpdateData {
    file_name: any;
    generic_id: string;
    project_id: string;
    "put_api_v4_projects_id_packages_generic_package_name*package_version(*path)_file_name"?: Record<string, any>;
    "put_api_v4_projects_id_packages_generic_package_name*package_version(*path)_file_name_authorize"?: Record<string, any>;
}
export interface Geo {
    id?: string;
}
export interface GeoLoadMatch {
    replicable_id: string;
    replicable_name: any;
    $action?: string;
    [action: string]: any;
}
export interface GeoCreateData {
    post_api_v4_geo_proxy_git_ssh_info_refs_receive_pack: Record<string, any>;
    id?: string;
}
export interface GoProxy {
}
export interface GoProxyLoadMatch {
    module_version?: any;
    project_id: string;
    module_name: any;
}
export interface Group {
    id?: string;
}
export interface GroupLoadMatch {
    filename?: any;
    id: string;
    secret?: any;
    upload_id?: string;
    $action?: string;
    [action: string]: any;
}
export interface GroupCreateData {
    id: string;
    post_api_v4_groups_id_placeholder_reassignment?: Record<string, any>;
    post_api_v4_groups_id_tokens_revoke?: Record<string, any>;
    $action?: string;
    [action: string]: any;
}
export interface GroupUpdateData {
    id: string;
    key: string;
    put_api_v4_groups_id_custom_attributes_key: Record<string, any>;
}
export interface GroupRemoveMatch {
    filename?: any;
    id: string;
    secret?: any;
    group_id?: string;
    key?: string;
    ssh_certificates_id?: string;
    upload_id?: string;
    user_id?: string;
}
export interface GroupAvatar {
    id?: string;
}
export interface GroupAvatarLoadMatch {
    id: string;
}
export interface GroupExport {
    id?: string;
}
export interface GroupExportLoadMatch {
    group_id: string;
    batch_number?: number;
    batched?: any;
    relation?: any;
}
export interface GroupExportCreateData {
    id: string;
    $action?: string;
    [action: string]: any;
}
export interface GroupImport {
}
export interface GroupImportCreateData {
    file: any;
    name: string;
    organization_id?: string;
    parent_id?: string;
    path: string;
}
export interface HelmPackage {
}
export interface HelmPackageLoadMatch {
    file_name?: any;
    helm_id?: string;
    project_id: string;
    channel?: any;
}
export interface HelmPackageCreateData {
    channel?: any;
    project_id: string;
    post_api_v4_projects_id_packages_helm_api_channel_chart?: Record<string, any>;
    api_id?: string;
}
export interface Hook {
    id?: string;
}
export interface HookCreateData {
    id: string;
}
export interface HookUpdateData {
    id: string;
    key: string;
    put_api_v4_hooks_hook_id_custom_headers_key?: Record<string, any>;
    put_api_v4_hooks_hook_id_url_variables_key?: Record<string, any>;
}
export interface HookRemoveMatch {
    id: string;
    key: string;
}
export interface Import {
}
export interface ImportCreateData {
    post_api_v4_import_github_gist: Record<string, any>;
}
export interface Integration {
    id?: string;
}
export interface IntegrationCreateData {
    post_api_v4_integrations_slack_event: Record<string, any>;
    id?: string;
}
export interface IntegrationRemoveMatch {
    group_id: string;
    id: string;
}
export interface Invitation {
    id?: string;
}
export interface InvitationRemoveMatch {
    group_id?: string;
    id: string;
    project_id?: string;
}
export interface IssueLink {
    id?: string;
}
export interface IssueLinkRemoveMatch {
    id: string;
    issue_id: string;
    project_id: string;
}
export interface IssuesStatistic {
}
export interface IssuesStatisticLoadMatch {
    assignee_id?: string;
    assignee_username?: any;
    author_id?: string;
    author_username?: any;
    confidential?: any;
    created_after?: any;
    created_before?: any;
    epic_id?: string;
    health_status?: any;
    iid?: any;
    in?: any;
    iteration_id?: string;
    iteration_title?: any;
    label?: string;
    milestone?: any;
    milestone_id?: string;
    my_reaction_emoji?: any;
    not_assignee_id?: string;
    not_assignee_username?: any;
    not_author_id?: string;
    not_author_username?: any;
    not_iid?: any;
    not_iteration_id?: string;
    not_iteration_title?: any;
    not_label?: any;
    not_milestone?: any;
    not_milestone_id?: string;
    not_weight?: any;
    scope?: any;
    search?: any;
    updated_after?: any;
    updated_before?: any;
    weight?: number;
}
export interface Job {
    id?: string;
}
export interface JobLoadMatch {
    id: string;
    direct_download?: any;
    token?: string;
    $action?: string;
    [action: string]: any;
}
export interface JobCreateData {
    post_api_v4_jobs_request: Record<string, any>;
    id?: string;
    $action?: string;
    [action: string]: any;
}
export interface JobUpdateData {
    id: string;
    put_api_v4_jobs_id: Record<string, any>;
}
export interface MavenPackage {
}
export interface MavenPackageLoadMatch {
    file_name: any;
    group_id?: string;
    path: string;
    project_id?: string;
}
export interface MavenPackageUpdateData {
    file_name: any;
    project_id: string;
    "put_api_v4_projects_id_packages_maven*path_file_name": Record<string, any>;
    $action?: string;
    [action: string]: any;
}
export interface Member {
    id?: string;
}
export interface MemberUpdateData {
    group_id: string;
    id: string;
    $action?: string;
    [action: string]: any;
}
export interface MemberRemoveMatch {
    group_id?: string;
    id: string;
    skip_subresource?: any;
    unassign_issuable?: any;
    project_id?: string;
}
export interface MergeRequest {
    id?: string;
}
export interface MergeRequestLoadMatch {
    id: string;
    project_id: string;
    page?: number;
    per_page?: number;
    $action?: string;
    [action: string]: any;
}
export interface MergeRequestUpdateData {
    id: string;
    project_id: string;
    $action?: string;
    [action: string]: any;
}
export interface MergeRequestRemoveMatch {
    id: string;
    project_id: string;
    $action?: string;
    [action: string]: any;
}
export interface Metadata {
    enabled?: boolean;
    externalK8sProxyUrl?: string;
    externalUrl?: string;
    version?: string;
}
export interface MetadataLoadMatch {
    enabled?: boolean;
    externalK8sProxyUrl?: string;
    externalUrl?: string;
    version?: string;
}
export interface Migration {
}
export interface MigrationCreateData {
    timestamp: any;
    post_api_v4_admin_migrations_timestamp_mark: Record<string, any>;
    $action?: string;
    [action: string]: any;
}
export interface MlModelRegistry {
}
export interface MlModelRegistryLoadMatch {
    file_name: any;
    ml_model_id: string;
    project_id: string;
    path?: string;
    status?: any;
}
export interface MlModelRegistryUpdateData {
    file_name: any;
    ml_model_id: string;
    project_id: string;
    "put_api_v4_projects_id_packages_ml_models_model_version_id_files(*path)_file_name"?: Record<string, any>;
    "put_api_v4_projects_id_packages_ml_models_model_version_id_files(*path)_file_name_authorize"?: Record<string, any>;
}
export interface Namespace {
    id?: string;
}
export interface NamespaceRemoveMatch {
    id: string;
    $action?: string;
    [action: string]: any;
}
export interface Npm {
    id?: string;
}
export interface NpmUpdateData {
    id: string;
    project_id: string;
    put_api_v4_projects_id_packages_npm_package_name: Record<string, any>;
}
export interface NpmPackage {
}
export interface NpmPackageLoadMatch {
    project_id: string;
    file_name: any;
    package_name: any;
}
export interface NpmPackageCreateData {
}
export interface NpmPackageUpdateData {
    group_id?: string;
    tag: any;
    "put_api_v4_groups_id_packages_npm_package*package_name_dist_tags_tag"?: Record<string, any>;
    project_id?: string;
    "put_api_v4_projects_id_packages_npm_package*package_name_dist_tags_tag"?: Record<string, any>;
    "put_api_v4_packages_npm_package*package_name_dist_tags_tag"?: Record<string, any>;
}
export interface NpmPackageRemoveMatch {
    group_id?: string;
    tag: any;
    package_name: any;
    project_id?: string;
}
export interface Nuget {
}
export interface NugetUpdateData {
    project_id: string;
    put_api_v4_projects_id_packages_nuget: Record<string, any>;
}
export interface NugetPackage {
    authors?: string;
    count?: number;
    dependencyGroups?: any[];
    description?: string;
    iconUrl?: string;
    id?: string;
    items?: any[];
    licenseUrl?: string;
    lower?: string;
    packageContent?: string;
    projectUrl?: string;
    published?: string;
    summary?: string;
    tags?: string;
    upper?: string;
    version?: string;
}
export interface NugetPackageLoadMatch {
    project_id: string;
}
export interface NugetPackageListMatch {
    group_id?: string;
    package_name: any;
    project_id?: string;
}
export interface NugetPackageUpdateData {
    project_id: string;
    put_api_v4_projects_id_packages_nuget_symbolpackage?: Record<string, any>;
    put_api_v4_projects_id_packages_nuget_v2?: Record<string, any>;
    authors?: string;
    count?: number;
    dependencyGroups?: any[];
    description?: string;
    iconUrl?: string;
    id?: string;
    items?: any[];
    licenseUrl?: string;
    lower?: string;
    packageContent?: string;
    projectUrl?: string;
    published?: string;
    summary?: string;
    tags?: string;
    upper?: string;
    version?: string;
}
export interface NugetPackageRemoveMatch {
    project_id: string;
    package_name: any;
    package_version: any;
}
export interface PackageFile {
    id?: string;
}
export interface PackageFileLoadMatch {
    id: string;
    package_id: string;
    project_id: string;
    $action?: string;
    [action: string]: any;
}
export interface PackageFileRemoveMatch {
    id: string;
    package_id: string;
    project_id: string;
}
export interface Page {
}
export interface PageLoadMatch {
    project_id: string;
}
export interface PageUpdateData {
    project_id: string;
    patch_api_v4_projects_id_page: Record<string, any>;
}
export interface PageRemoveMatch {
    project_id: string;
}
export interface Participant {
    key?: string;
    value?: string;
}
export interface ParticipantListMatch {
    issue_id?: string;
    project_id: string;
    merge_request_id?: string;
}
export interface PersonalAccessToken {
    id?: string;
}
export interface PersonalAccessTokenRemoveMatch {
    id: string;
    $action?: string;
    [action: string]: any;
}
export interface Project {
    before_sha?: string;
    committed_at?: string;
    coverage?: number;
    created_at?: string;
    detailed_status?: Record<string, any>;
    duration?: number;
    finished_at?: string;
    id?: number;
    iid?: number;
    name?: string;
    project_id?: number;
    queued_duration?: number;
    ref?: string;
    sha?: string;
    source?: string;
    started_at?: string;
    status?: string;
    tag?: boolean;
    updated_at?: string;
    user?: Record<string, any>;
    web_url?: string;
    yaml_errors?: string;
}
export interface ProjectLoadMatch {
    artifact_id?: string;
    id: string;
    artifact_path?: any;
    job?: any;
    job_token?: any;
    file_path?: any;
    range_end?: any;
    range_start?: any;
    ref?: any;
    hook_id?: string;
    page?: number;
    per_page?: number;
    status?: any;
    job_id?: string;
    lfs?: any;
    ref_name?: any;
    filename?: any;
    secret?: any;
    issue_id?: string;
    pipeline_id?: string;
    sha?: any;
    upload_id?: string;
    $action?: string;
    [action: string]: any;
}
export interface ProjectCreateData {
    event_id?: string;
    hook_id?: string;
    id: string;
    file_path?: any;
    post_api_v4_projects_id_repository_files_file_path?: Record<string, any>;
    trigger?: any;
    issue_id?: string;
    merge_request_id?: string;
    project_id?: string;
    before_sha?: string;
    committed_at?: string;
    coverage?: number;
    created_at?: string;
    detailed_status?: Record<string, any>;
    duration?: number;
    finished_at?: string;
    iid?: number;
    name?: string;
    queued_duration?: number;
    ref?: string;
    sha?: string;
    source?: string;
    started_at?: string;
    status?: string;
    tag?: boolean;
    updated_at?: string;
    user?: Record<string, any>;
    web_url?: string;
    yaml_errors?: string;
    $action?: string;
    [action: string]: any;
}
export interface ProjectUpdateData {
    hook_id?: string;
    id: string;
    key?: string;
    put_api_v4_projects_id_hooks_hook_id_custom_headers_key?: Record<string, any>;
    put_api_v4_projects_id_hooks_hook_id_url_variables_key?: Record<string, any>;
    domain?: any;
    put_api_v4_projects_id_pages_domains_domain?: Record<string, any>;
    file_path?: any;
    put_api_v4_projects_id_repository_files_file_path?: Record<string, any>;
    put_api_v4_projects_id_custom_attributes_key?: Record<string, any>;
    before_sha?: string;
    committed_at?: string;
    coverage?: number;
    created_at?: string;
    detailed_status?: Record<string, any>;
    duration?: number;
    finished_at?: string;
    iid?: number;
    name?: string;
    project_id?: number;
    queued_duration?: number;
    ref?: string;
    sha?: string;
    source?: string;
    started_at?: string;
    status?: string;
    tag?: boolean;
    updated_at?: string;
    user?: Record<string, any>;
    web_url?: string;
    yaml_errors?: string;
    $action?: string;
    [action: string]: any;
}
export interface ProjectRemoveMatch {
    file_path?: any;
    id: string;
    author_email?: any;
    author_name?: any;
    branch?: any;
    commit_message?: any;
    start_branch?: any;
    draft_note_id?: string;
    merge_request_id?: string;
    filename?: any;
    secret?: any;
    hook_id?: string;
    key?: string;
    pipeline_schedule_id?: string;
    domain?: any;
    group_id?: string;
    issue_iid?: any;
    job_id?: string;
    name?: string;
    package_protection_rule_id?: string;
    pipeline_id?: string;
    protection_rule_id?: string;
    trigger_id?: string;
    upload_id?: string;
    $action?: string;
    [action: string]: any;
}
export interface ProjectAvatar {
    id?: string;
}
export interface ProjectAvatarLoadMatch {
    id: string;
}
export interface ProjectEntity {
}
export interface ProjectEntityCreateData {
    post_api_v4_import_bitbucket_server: Record<string, any>;
}
export interface ProjectExport {
    id?: string;
}
export interface ProjectExportLoadMatch {
    project_id: string;
    batch_number?: number;
    batched?: any;
    relation?: any;
}
export interface ProjectExportCreateData {
    id: string;
    post_api_v4_projects_id_export: Record<string, any>;
    $action?: string;
    [action: string]: any;
}
export interface ProjectHook {
    id?: string;
}
export interface ProjectHookRemoveMatch {
    id: string;
    project_id: string;
}
export interface ProjectImport {
}
export interface ProjectImportCreateData {
}
export interface ProjectImportEntity {
    forked?: boolean;
    full_name?: string;
    full_path?: string;
    human_import_status_name?: string;
    id?: number;
    import_error?: string;
    import_source?: string;
    import_status?: string;
    import_warning?: string;
    name?: string;
    provider_link?: string;
    refs_url?: string;
    relation_type?: string;
}
export interface ProjectImportEntityCreateData {
    post_api_v4_import_bitbucket: Record<string, any>;
    forked?: boolean;
    full_name?: string;
    full_path?: string;
    human_import_status_name?: string;
    id?: number;
    import_error?: string;
    import_source?: string;
    import_status?: string;
    import_warning?: string;
    name?: string;
    provider_link?: string;
    refs_url?: string;
    relation_type?: string;
}
export interface ProjectPackage {
    id?: string;
}
export interface ProjectPackageRemoveMatch {
    id: string;
    project_id: string;
}
export interface ProjectSnippet {
    id?: string;
}
export interface ProjectSnippetRemoveMatch {
    id: string;
    project_id: string;
}
export interface ProjectsJobTokenScope {
}
export interface ProjectsJobTokenScopeUpdateData {
    project_id: string;
    patch_api_v4_projects_id_job_token_scope: Record<string, any>;
}
export interface ProjectsJobTokenScopeRemoveMatch {
    project_id: string;
    target_group_id?: string;
    target_project_id?: string;
}
export interface ProtectedTag {
    id?: string;
}
export interface ProtectedTagRemoveMatch {
    id: string;
    project_id: string;
}
export interface Pypi {
}
export interface PypiCreateData {
    project_id: string;
    post_api_v4_projects_id_packages_pypi: Record<string, any>;
}
export interface PypiPackage {
}
export interface PypiPackageLoadMatch {
    project_id: string;
}
export interface PypiPackageCreateData {
    project_id: string;
}
export interface Release {
    id?: string;
}
export interface ReleaseLoadMatch {
    project_id: string;
    suffix_path: any;
    $action?: string;
    [action: string]: any;
}
export interface ReleaseRemoveMatch {
    id: string;
    project_id: string;
}
export interface ReleaseLink {
    id?: string;
}
export interface ReleaseLinkRemoveMatch {
    id: string;
    project_id: string;
    release_id: string;
}
export interface RemoteMirror {
    id?: string;
}
export interface RemoteMirrorLoadMatch {
    id: string;
    project_id: string;
    $action?: string;
    [action: string]: any;
}
export interface RemoteMirrorRemoveMatch {
    id: string;
    project_id: string;
}
export interface Rpm {
}
export interface RpmCreateData {
    project_id: string;
}
export interface RpmPackage {
}
export interface RpmPackageLoadMatch {
    project_id: string;
    file_name: any;
    package_file_id?: string;
}
export interface RpmPackageCreateData {
    project_id: string;
}
export interface Rubygem {
    id?: string;
}
export interface RubygemLoadMatch {
    id: string;
    project_id: string;
}
export interface RubygemPackage {
}
export interface RubygemPackageLoadMatch {
    file_name?: any;
    project_id: string;
    gem?: any;
}
export interface RubygemPackageCreateData {
    project_id: string;
    post_api_v4_projects_id_packages_rubygems_api_v1_gem?: Record<string, any>;
}
export interface Runner {
    id?: string;
}
export interface RunnerCreateData {
    post_api_v4_runners_verify: Record<string, any>;
    id?: string;
    $action?: string;
    [action: string]: any;
}
export interface RunnerRemoveMatch {
    id: string;
    $action?: string;
    [action: string]: any;
}
export interface Search {
}
export interface SearchLoadMatch {
    confidential?: any;
    field?: any;
    page?: number;
    per_page?: number;
    scope: any;
    search: any;
    state?: any;
}
export interface SecureFile {
    id?: string;
}
export interface SecureFileLoadMatch {
    id: string;
    project_id: string;
    $action?: string;
    [action: string]: any;
}
export interface SecureFileRemoveMatch {
    id: string;
    project_id: string;
}
export interface Slack {
}
export interface SlackCreateData {
    post_api_v4_slack_trigger: Record<string, any>;
    $action?: string;
    [action: string]: any;
}
export interface Snippet {
    id?: string;
}
export interface SnippetLoadMatch {
    file_id: string;
    file_path: any;
    id: string;
    $action?: string;
    [action: string]: any;
}
export interface SnippetRemoveMatch {
    id: string;
}
export interface Starrer {
    avatar_path?: string;
    avatar_url?: string;
    custom_attributes?: any[];
    id?: number;
    locked?: boolean;
    name?: string;
    public_email?: string;
    state?: string;
    username?: string;
    web_url?: string;
}
export interface StarrerListMatch {
    project_id: string;
    page?: number;
    per_page?: number;
    search?: any;
}
export interface SystemHook {
    id?: string;
}
export interface SystemHookRemoveMatch {
    id: string;
}
export interface Tag {
    id?: string;
}
export interface TagRemoveMatch {
    id: string;
    project_id: string;
}
export interface TerraformRegistry {
    id?: string;
}
export interface TerraformRegistryLoadMatch {
    module_id?: string;
    module_system: any;
    project_id?: string;
    module_version?: any;
    terraform_get?: any;
    id?: string;
    module_name?: any;
    v1_id?: string;
}
export interface TerraformRegistryUpdateData {
    module_id: string;
    module_system: any;
    project_id: string;
    file?: any;
    module_version?: any;
    "put_api_v4_projects_id_packages_terraform_modules_module_name_module_system*module_version_file_authorize"?: Record<string, any>;
    id?: string;
}
export interface TerraformState {
    id?: string;
}
export interface TerraformStateLoadMatch {
    project_id: string;
    serial?: any;
    state_id?: string;
    id?: string;
}
export interface TerraformStateCreateData {
    id: string;
    project_id: string;
    $action?: string;
    [action: string]: any;
}
export interface TerraformStateRemoveMatch {
    project_id: string;
    serial?: any;
    state_id?: string;
    id?: string;
    $action?: string;
    [action: string]: any;
}
export interface TestReport {
    error_count?: number;
    failed_count?: number;
    name?: string;
    skipped_count?: number;
    success_count?: number;
    suite_error?: string;
    test_cases?: any[];
    total_count?: number;
    total_time?: number;
}
export interface TestReportListMatch {
    pipeline_id: string;
    project_id: string;
}
export interface TestReportSummary {
    test_suites?: Record<string, any>;
    total?: Record<string, any>;
}
export interface TestReportSummaryLoadMatch {
    pipeline_id: string;
    project_id: string;
}
export interface Topic {
    id?: string;
}
export interface TopicRemoveMatch {
    id: string;
}
export interface UnleashApi {
    id?: string;
}
export interface UnleashApiLoadMatch {
    unleash_id: string;
    app_name?: any;
    instance_id?: string;
    $action?: string;
    [action: string]: any;
}
export interface UsageData {
}
export interface UsageDataLoadMatch {
    include_path?: any;
    $action?: string;
    [action: string]: any;
}
export interface UsageDataCreateData {
    post_api_v4_usage_data_increment_counter: Record<string, any>;
    $action?: string;
    [action: string]: any;
}
export interface User {
    avatar_path?: string;
    avatar_url?: string;
    custom_attributes?: any[];
    id?: number;
    locked?: boolean;
    name?: string;
    public_email?: string;
    state?: string;
    username?: string;
    web_url?: string;
}
export interface UserListMatch {
    project_id: string;
    page?: number;
    per_page?: number;
    search?: any;
    skip_user?: any;
}
export interface WebCommit {
}
export interface WebCommitLoadMatch {
    $action?: string;
    [action: string]: any;
}
export interface Wiki {
    id?: string;
}
export interface WikiRemoveMatch {
    group_id?: string;
    id: string;
    project_id?: string;
}
