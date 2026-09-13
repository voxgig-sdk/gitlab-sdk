# Typed models for the Gitlab SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class AccessRequest(TypedDict, total=False):
    id: str


class AccessRequestRemoveMatchRequired(TypedDict):
    id: str


class AccessRequestRemoveMatch(AccessRequestRemoveMatchRequired, total=False):
    group_id: str
    project_id: str


class AlertManagement(TypedDict):
    pass


class AlertManagementCreateData(TypedDict):
    alert_management_alert_id: str
    project_id: str


class AlertManagementRemoveMatch(TypedDict):
    alert_management_alert_id: str
    metric_image_id: str
    project_id: str


class ApiEntitiesAccessRequester(TypedDict, total=False):
    avatar_path: str
    avatar_url: str
    custom_attributes: list
    id: int
    key: str
    locked: bool
    name: str
    public_email: str
    requested_at: str
    state: str
    username: str
    value: str
    web_url: str


class ApiEntitiesAccessRequesterListMatchRequired(TypedDict):
    group_id: str


class ApiEntitiesAccessRequesterListMatch(ApiEntitiesAccessRequesterListMatchRequired, total=False):
    page: int
    per_page: int


class ApiEntitiesAccessRequesterCreateDataRequired(TypedDict):
    group_id: str


class ApiEntitiesAccessRequesterCreateData(ApiEntitiesAccessRequesterCreateDataRequired, total=False):
    avatar_path: str
    avatar_url: str
    custom_attributes: list
    id: int
    key: str
    locked: bool
    name: str
    public_email: str
    requested_at: str
    state: str
    username: str
    value: str
    web_url: str


class ApiEntitiesAccessRequesterUpdateDataRequired(TypedDict):
    access_request_id: str


class ApiEntitiesAccessRequesterUpdateData(ApiEntitiesAccessRequesterUpdateDataRequired, total=False):
    group_id: str
    put_api_v4_groups_id_access_requests_user_id_approve: dict
    project_id: str
    put_api_v4_projects_id_access_requests_user_id_approve: dict
    avatar_path: str
    avatar_url: str
    custom_attributes: list
    id: int
    key: str
    locked: bool
    name: str
    public_email: str
    requested_at: str
    state: str
    username: str
    value: str
    web_url: str


class ApiEntitiesAppearance(TypedDict, total=False):
    description: str
    email_header_and_footer_enabled: str
    favicon: str
    footer_message: str
    header_logo: str
    header_message: str
    logo: str
    member_guidelines: str
    message_background_color: str
    message_font_color: str
    new_project_guidelines: str
    profile_image_guidelines: str
    pwa_description: str
    pwa_icon: str
    pwa_name: str
    pwa_short_name: str
    title: str


class ApiEntitiesAppearanceLoadMatch(TypedDict, total=False):
    description: str
    email_header_and_footer_enabled: str
    favicon: str
    footer_message: str
    header_logo: str
    header_message: str
    logo: str
    member_guidelines: str
    message_background_color: str
    message_font_color: str
    new_project_guidelines: str
    profile_image_guidelines: str
    pwa_description: str
    pwa_icon: str
    pwa_name: str
    pwa_short_name: str
    title: str


class ApiEntitiesAppearanceUpdateData(TypedDict, total=False):
    description: str
    email_header_and_footer_enabled: Any
    favicon: Any
    footer_message: Any
    header_logo: Any
    header_message: Any
    logo: Any
    member_guideline: Any
    message_background_color: Any
    message_font_color: Any
    new_project_guideline: Any
    profile_image_guideline: Any
    pwa_description: Any
    pwa_icon: Any
    pwa_name: Any
    pwa_short_name: Any
    title: str
    member_guidelines: str
    new_project_guidelines: str
    profile_image_guidelines: str


class ApiEntitiesApplication(TypedDict, total=False):
    application_id: str
    application_name: str
    callback_url: str
    confidential: bool
    id: str


class ApiEntitiesApplicationListMatch(TypedDict, total=False):
    application_id: str
    application_name: str
    callback_url: str
    confidential: bool
    id: str


class ApiEntitiesApplicationStatistic(TypedDict, total=False):
    active_users: int
    forks: int
    groups: int
    issues: int
    merge_requests: int
    milestones: int
    notes: int
    projects: int
    snippets: int
    ssh_keys: int
    users: int


class ApiEntitiesApplicationStatisticLoadMatch(TypedDict, total=False):
    active_users: int
    forks: int
    groups: int
    issues: int
    merge_requests: int
    milestones: int
    notes: int
    projects: int
    snippets: int
    ssh_keys: int
    users: int


class ApiEntitiesApplicationWithSecret(TypedDict, total=False):
    application_id: str
    application_name: str
    callback_url: str
    confidential: bool
    id: str
    secret: str


class ApiEntitiesApplicationWithSecretCreateDataRequired(TypedDict):
    post_api_v4_application: dict


class ApiEntitiesApplicationWithSecretCreateData(ApiEntitiesApplicationWithSecretCreateDataRequired, total=False):
    application_id: str
    application_name: str
    callback_url: str
    confidential: bool
    id: str
    secret: str


class ApiEntitiesAvatar(TypedDict, total=False):
    avatar_url: str


class ApiEntitiesAvatarLoadMatchRequired(TypedDict):
    email: str


class ApiEntitiesAvatarLoadMatch(ApiEntitiesAvatarLoadMatchRequired, total=False):
    size: int


class ApiEntitiesAwardEmoji(TypedDict, total=False):
    avatar_path: str
    avatar_url: str
    awardable_id: int
    awardable_type: str
    created_at: str
    custom_attributes: list
    id: int
    locked: bool
    name: str
    public_email: str
    state: str
    updated_at: str
    url: str
    user: dict
    username: str
    web_url: str


class ApiEntitiesAwardEmojiLoadMatchRequired(TypedDict):
    id: str


class ApiEntitiesAwardEmojiLoadMatch(ApiEntitiesAwardEmojiLoadMatchRequired, total=False):
    epic_id: str
    group_id: str
    note_id: str
    issue_id: str
    project_id: str
    merge_request_id: str
    snippet_id: str


class ApiEntitiesAwardEmojiListMatchRequired(TypedDict):
    epic_id: str
    group_id: str


class ApiEntitiesAwardEmojiListMatch(ApiEntitiesAwardEmojiListMatchRequired, total=False):
    page: int
    per_page: int


class ApiEntitiesAwardEmojiCreateDataRequired(TypedDict):
    epic_id: str
    group_id: str
    post_api_v4_groups_id_epics_epic_iid_award_emoji: dict


class ApiEntitiesAwardEmojiCreateData(ApiEntitiesAwardEmojiCreateDataRequired, total=False):
    avatar_path: str
    avatar_url: str
    awardable_id: int
    awardable_type: str
    created_at: str
    custom_attributes: list
    id: int
    locked: bool
    name: str
    public_email: str
    state: str
    updated_at: str
    url: str
    user: dict
    username: str
    web_url: str


class ApiEntitiesBadge(TypedDict, total=False):
    id: str
    image_url: str
    kind: str
    link_url: str
    name: str
    rendered_image_url: str
    rendered_link_url: str


class ApiEntitiesBadgeLoadMatchRequired(TypedDict):
    id: str


class ApiEntitiesBadgeLoadMatch(ApiEntitiesBadgeLoadMatchRequired, total=False):
    group_id: str
    project_id: str


class ApiEntitiesBadgeListMatchRequired(TypedDict):
    group_id: str


class ApiEntitiesBadgeListMatch(ApiEntitiesBadgeListMatchRequired, total=False):
    name: str
    page: int
    per_page: int


class ApiEntitiesBadgeCreateDataRequired(TypedDict):
    group_id: str
    post_api_v4_groups_id_badge: dict


class ApiEntitiesBadgeCreateData(ApiEntitiesBadgeCreateDataRequired, total=False):
    id: str
    image_url: str
    kind: str
    link_url: str
    name: str
    rendered_image_url: str
    rendered_link_url: str


class ApiEntitiesBadgeUpdateDataRequired(TypedDict):
    id: str


class ApiEntitiesBadgeUpdateData(ApiEntitiesBadgeUpdateDataRequired, total=False):
    group_id: str
    put_api_v4_groups_id_badges_badge_id: dict
    project_id: str
    put_api_v4_projects_id_badges_badge_id: dict
    image_url: str
    kind: str
    link_url: str
    name: str
    rendered_image_url: str
    rendered_link_url: str


class ApiEntitiesBasicBadgeDetail(TypedDict, total=False):
    image_url: str
    link_url: str
    name: str
    rendered_image_url: str
    rendered_link_url: str


class ApiEntitiesBasicBadgeDetailLoadMatchRequired(TypedDict):
    image_url: Any
    link_url: Any


class ApiEntitiesBasicBadgeDetailLoadMatch(ApiEntitiesBasicBadgeDetailLoadMatchRequired, total=False):
    group_id: str
    project_id: str


class ApiEntitiesBasicGroupDetail(TypedDict):
    pass


class ApiEntitiesBasicGroupDetailCreateData(TypedDict):
    project_id: str
    post_api_v4_projects_id_job_token_scope_groups_allowlist: dict


class ApiEntitiesBasicProjectDetail(TypedDict, total=False):
    avatar_url: str
    created_at: str
    custom_attributes: dict
    default_branch: str
    description: str
    forks_count: int
    http_url_to_repo: str
    id: int
    last_activity_at: str
    license: dict
    license_url: str
    name: str
    name_with_namespace: str
    namespace: dict
    path: str
    path_with_namespace: str
    readme_url: str
    repository_storage: str
    ssh_url_to_repo: str
    star_count: int
    tag_list: list
    topics: list
    visibility: str
    web_url: str


class ApiEntitiesBasicProjectDetailListMatch(TypedDict, total=False):
    active: bool
    archived: bool
    id_after: Any
    id_before: Any
    imported: Any
    include_hidden: Any
    include_pending_delete: Any
    last_activity_after: Any
    last_activity_before: Any
    marked_for_deletion_on: Any
    membership: Any
    min_access_level: Any
    order_by: Any
    owned: Any
    page: int
    per_page: int
    repository_checksum_failed: Any
    repository_storage: Any
    search: Any
    search_namespace: Any
    simple: Any
    sort: Any
    starred: Any
    statistic: Any
    topic: Any
    topic_id: str
    updated_after: Any
    updated_before: Any
    visibility: Any
    wiki_checksum_failed: Any
    with_custom_attribute: Any
    with_issues_enabled: Any
    with_merge_requests_enabled: Any
    with_programming_language: Any


class ApiEntitiesBasicProjectDetailCreateDataRequired(TypedDict):
    project_id: str
    post_api_v4_projects_id_job_token_scope_allowlist: dict


class ApiEntitiesBasicProjectDetailCreateData(ApiEntitiesBasicProjectDetailCreateDataRequired, total=False):
    avatar_url: str
    created_at: str
    custom_attributes: dict
    default_branch: str
    description: str
    forks_count: int
    http_url_to_repo: str
    id: int
    last_activity_at: str
    license: dict
    license_url: str
    name: str
    name_with_namespace: str
    namespace: dict
    path: str
    path_with_namespace: str
    readme_url: str
    repository_storage: str
    ssh_url_to_repo: str
    star_count: int
    tag_list: list
    topics: list
    visibility: str
    web_url: str


class ApiEntitiesBasicRef(TypedDict, total=False):
    name: str
    type: str


class ApiEntitiesBasicRefListMatchRequired(TypedDict):
    project_id: str
    sha: Any


class ApiEntitiesBasicRefListMatch(ApiEntitiesBasicRefListMatchRequired, total=False):
    page: int
    per_page: int
    type: Any


class ApiEntitiesBasicSuccess(TypedDict):
    pass


class ApiEntitiesBasicSuccessCreateData(TypedDict):
    post_api_v4_integrations_jira_connect_subscription: dict


class ApiEntitiesBatchedBackgroundMigration(TypedDict, total=False):
    column_name: str
    created_at: str
    id: str
    job_class_name: str
    progress: float
    status: str
    table_name: str


class ApiEntitiesBatchedBackgroundMigrationLoadMatchRequired(TypedDict):
    id: str


class ApiEntitiesBatchedBackgroundMigrationLoadMatch(ApiEntitiesBatchedBackgroundMigrationLoadMatchRequired, total=False):
    database: Any


class ApiEntitiesBatchedBackgroundMigrationListMatch(TypedDict, total=False):
    database: Any
    job_class_name: Any


class ApiEntitiesBatchedBackgroundMigrationUpdateDataRequired(TypedDict):
    batched_background_migration_id: str


class ApiEntitiesBatchedBackgroundMigrationUpdateData(ApiEntitiesBatchedBackgroundMigrationUpdateDataRequired, total=False):
    put_api_v4_admin_batched_background_migrations_id_pause: dict
    put_api_v4_admin_batched_background_migrations_id_resume: dict
    column_name: str
    created_at: str
    id: str
    job_class_name: str
    progress: float
    status: str
    table_name: str


class ApiEntitiesBranch(TypedDict, total=False):
    author_email: str
    author_name: str
    authored_date: str
    can_push: bool
    commit: dict
    committed_date: str
    committer_email: str
    committer_name: str
    created_at: str
    default: bool
    developers_can_merge: bool
    developers_can_push: bool
    extended_trailers: dict
    id: str
    merged: bool
    message: str
    name: str
    parent_ids: list
    protected: bool
    short_id: str
    title: str
    trailers: dict
    web_url: str


class ApiEntitiesBranchLoadMatch(TypedDict):
    id: str
    project_id: str


class ApiEntitiesBranchListMatchRequired(TypedDict):
    project_id: str


class ApiEntitiesBranchListMatch(ApiEntitiesBranchListMatchRequired, total=False):
    page: int
    page_token: Any
    per_page: int
    regex: Any
    search: Any
    sort: Any


class ApiEntitiesBranchCreateDataRequired(TypedDict):
    project_id: str
    post_api_v4_projects_id_repository_branch: dict


class ApiEntitiesBranchCreateData(ApiEntitiesBranchCreateDataRequired, total=False):
    author_email: str
    author_name: str
    authored_date: str
    can_push: bool
    commit: dict
    committed_date: str
    committer_email: str
    committer_name: str
    created_at: str
    default: bool
    developers_can_merge: bool
    developers_can_push: bool
    extended_trailers: dict
    id: str
    merged: bool
    message: str
    name: str
    parent_ids: list
    protected: bool
    short_id: str
    title: str
    trailers: dict
    web_url: str


class ApiEntitiesBranchUpdateDataRequired(TypedDict):
    branch_id: str
    project_id: str


class ApiEntitiesBranchUpdateData(ApiEntitiesBranchUpdateDataRequired, total=False):
    put_api_v4_projects_id_repository_branches_branch_protect: dict
    author_email: str
    author_name: str
    authored_date: str
    can_push: bool
    commit: dict
    committed_date: str
    committer_email: str
    committer_name: str
    created_at: str
    default: bool
    developers_can_merge: bool
    developers_can_push: bool
    extended_trailers: dict
    id: str
    merged: bool
    message: str
    name: str
    parent_ids: list
    protected: bool
    short_id: str
    title: str
    trailers: dict
    web_url: str


class ApiEntitiesBulkImport(TypedDict, total=False):
    bulk_import_id: int
    created_at: str
    destination_full_path: str
    destination_name: str
    destination_namespace: str
    destination_slug: str
    entity_type: str
    failures: list
    has_failures: bool
    id: int
    migrate_memberships: bool
    migrate_projects: bool
    namespace_id: int
    parent_id: int
    project_id: int
    source_full_path: str
    source_type: str
    source_url: str
    stats: dict
    status: str
    updated_at: str


class ApiEntitiesBulkImportLoadMatch(TypedDict):
    id: str


class ApiEntitiesBulkImportListMatch(TypedDict, total=False):
    page: int
    per_page: int
    sort: Any
    status: Any


class ApiEntitiesBulkImportCreateDataRequired(TypedDict):
    configuration_access_token: Any
    configuration_url: Any
    entities_destination_namespace: Any
    entities_source_full_path: Any
    entities_source_type: Any


class ApiEntitiesBulkImportCreateData(ApiEntitiesBulkImportCreateDataRequired, total=False):
    entities_destination_name: Any
    entities_destination_slug: Any
    entities_migrate_membership: Any
    entities_migrate_project: Any
    bulk_import_id: int
    created_at: str
    destination_full_path: str
    destination_name: str
    destination_namespace: str
    destination_slug: str
    entity_type: str
    failures: list
    has_failures: bool
    id: int
    migrate_memberships: bool
    migrate_projects: bool
    namespace_id: int
    parent_id: int
    project_id: int
    source_full_path: str
    source_type: str
    source_url: str
    stats: dict
    status: str
    updated_at: str


class ApiEntitiesBulkImportsEntityFailure(TypedDict, total=False):
    correlation_id_value: str
    exception_class: str
    exception_message: str
    relation: str
    source_title: str
    source_url: str


class ApiEntitiesBulkImportsEntityFailureLoadMatch(TypedDict):
    bulk_import_id: str
    entity_id: str


class ApiEntitiesBulkImportsExportStatus(TypedDict, total=False):
    batched: bool
    batches: dict
    batches_count: int
    error: str
    relation: str
    status: str
    total_objects_count: int
    updated_at: str


class ApiEntitiesBulkImportsExportStatusListMatchRequired(TypedDict):
    group_id: str


class ApiEntitiesBulkImportsExportStatusListMatch(ApiEntitiesBulkImportsExportStatusListMatchRequired, total=False):
    relation: Any


class ApiEntitiesChangelog(TypedDict, total=False):
    notes: str


class ApiEntitiesChangelogLoadMatchRequired(TypedDict):
    project_id: str
    version: Any


class ApiEntitiesChangelogLoadMatch(ApiEntitiesChangelogLoadMatchRequired, total=False):
    config_file: Any
    config_file_ref: Any
    date: Any
    to: Any
    trailer: Any


class ApiEntitiesCiBridge(TypedDict, total=False):
    allow_failure: bool
    commit: dict
    coverage: float
    created_at: str
    downstream_pipeline: dict
    duration: float
    erased_at: str
    failure_reason: str
    finished_at: str
    id: int
    name: str
    pipeline: dict
    project: dict
    queued_duration: float
    ref: str
    stage: str
    started_at: str
    status: str
    tag: bool
    user: dict
    web_url: str


class ApiEntitiesCiBridgeListMatchRequired(TypedDict):
    pipeline_id: str
    project_id: str


class ApiEntitiesCiBridgeListMatch(ApiEntitiesCiBridgeListMatchRequired, total=False):
    page: int
    per_page: int
    scope: Any


class ApiEntitiesCiCatalogResourcesVersion(TypedDict):
    pass


class ApiEntitiesCiCatalogResourcesVersionCreateData(TypedDict):
    project_id: str
    post_api_v4_projects_id_catalog_publish: dict


class ApiEntitiesCiJob(TypedDict, total=False):
    allow_failure: bool
    archived: bool
    artifacts: list
    artifacts_expire_at: str
    artifacts_file: dict
    commit: dict
    coverage: float
    created_at: str
    duration: float
    erased_at: str
    failure_reason: str
    file_format: str
    file_type: str
    filename: str
    finished_at: str
    id: int
    name: str
    pipeline: dict
    project: dict
    queued_duration: float
    ref: str
    runner: dict
    runner_manager: dict
    size: int
    stage: str
    started_at: str
    status: str
    tag: bool
    tag_list: list
    user: dict
    web_url: str


class ApiEntitiesCiJobLoadMatch(TypedDict):
    id: str
    project_id: str


class ApiEntitiesCiJobListMatch(TypedDict, total=False):
    allow_failure: bool
    archived: bool
    artifacts: list
    artifacts_expire_at: str
    artifacts_file: dict
    commit: dict
    coverage: float
    created_at: str
    duration: float
    erased_at: str
    failure_reason: str
    file_format: str
    file_type: str
    filename: str
    finished_at: str
    id: int
    name: str
    pipeline: dict
    project: dict
    queued_duration: float
    ref: str
    runner: dict
    runner_manager: dict
    size: int
    stage: str
    started_at: str
    status: str
    tag: bool
    tag_list: list
    user: dict
    web_url: str


class ApiEntitiesCiJobCreateDataRequired(TypedDict):
    job_id: str
    project_id: str


class ApiEntitiesCiJobCreateData(ApiEntitiesCiJobCreateDataRequired, total=False):
    post_api_v4_projects_id_jobs_job_id_cancel: dict
    allow_failure: bool
    archived: bool
    artifacts: list
    artifacts_expire_at: str
    artifacts_file: dict
    commit: dict
    coverage: float
    created_at: str
    duration: float
    erased_at: str
    failure_reason: str
    file_format: str
    file_type: str
    filename: str
    finished_at: str
    id: int
    name: str
    pipeline: dict
    project: dict
    queued_duration: float
    ref: str
    runner: dict
    runner_manager: dict
    size: int
    stage: str
    started_at: str
    status: str
    tag: bool
    tag_list: list
    user: dict
    web_url: str


class ApiEntitiesCiJobBasic(TypedDict, total=False):
    allow_failure: bool
    commit: dict
    coverage: float
    created_at: str
    duration: float
    erased_at: str
    failure_reason: str
    finished_at: str
    id: int
    name: str
    pipeline: dict
    project: dict
    queued_duration: float
    ref: str
    stage: str
    started_at: str
    status: str
    tag: bool
    user: dict
    web_url: str


class ApiEntitiesCiJobBasicListMatchRequired(TypedDict):
    key: str
    project_id: str


class ApiEntitiesCiJobBasicListMatch(ApiEntitiesCiJobBasicListMatchRequired, total=False):
    page: int
    per_page: int


class ApiEntitiesCiJobBasicCreateDataRequired(TypedDict):
    job_id: str
    project_id: str
    post_api_v4_projects_id_jobs_job_id_play: dict


class ApiEntitiesCiJobBasicCreateData(ApiEntitiesCiJobBasicCreateDataRequired, total=False):
    allow_failure: bool
    commit: dict
    coverage: float
    created_at: str
    duration: float
    erased_at: str
    failure_reason: str
    finished_at: str
    id: int
    name: str
    pipeline: dict
    project: dict
    queued_duration: float
    ref: str
    stage: str
    started_at: str
    status: str
    tag: bool
    user: dict
    web_url: str


class ApiEntitiesCiJobBasicWithProject(TypedDict, total=False):
    allow_failure: bool
    commit: dict
    coverage: float
    created_at: str
    duration: float
    erased_at: str
    failure_reason: str
    finished_at: str
    id: int
    name: str
    pipeline: dict
    project: dict
    queued_duration: float
    ref: str
    stage: str
    started_at: str
    status: str
    tag: bool
    user: dict
    web_url: str


class ApiEntitiesCiJobBasicWithProjectLoadMatchRequired(TypedDict):
    runner_id: str


class ApiEntitiesCiJobBasicWithProjectLoadMatch(ApiEntitiesCiJobBasicWithProjectLoadMatchRequired, total=False):
    cursor: Any
    order_by: Any
    page: int
    per_page: int
    sort: Any
    status: Any
    system_id: str


class ApiEntitiesCiLintResult(TypedDict, total=False):
    blob: str
    context_project: str
    context_sha: str
    errors: list
    extra: dict
    includes: list
    jobs: list
    location: str
    merged_yaml: str
    raw: str
    type: str
    valid: bool
    warnings: list


class ApiEntitiesCiLintResultListMatchRequired(TypedDict):
    project_id: str


class ApiEntitiesCiLintResultListMatch(ApiEntitiesCiLintResultListMatchRequired, total=False):
    content_ref: Any
    dry_run: Any
    dry_run_ref: Any
    include_job: Any
    ref: Any
    sha: Any


class ApiEntitiesCiLintResultCreateDataRequired(TypedDict):
    project_id: str
    post_api_v4_projects_id_ci_lint: dict


class ApiEntitiesCiLintResultCreateData(ApiEntitiesCiLintResultCreateDataRequired, total=False):
    blob: str
    context_project: str
    context_sha: str
    errors: list
    extra: dict
    includes: list
    jobs: list
    location: str
    merged_yaml: str
    raw: str
    type: str
    valid: bool
    warnings: list


class ApiEntitiesCiPipeline(TypedDict):
    pass


class ApiEntitiesCiPipelineCreateDataRequired(TypedDict):
    project_id: str


class ApiEntitiesCiPipelineCreateData(ApiEntitiesCiPipelineCreateDataRequired, total=False):
    merge_request_id: str
    post_api_v4_projects_id_merge_requests_merge_request_iid_pipeline: dict
    ref_id: str
    pipeline_id: str
    post_api_v4_projects_id_pipeline: dict


class ApiEntitiesCiPipelineBasic(TypedDict, total=False):
    created_at: str
    id: int
    iid: int
    project_id: int
    ref: str
    sha: str
    source: str
    status: str
    updated_at: str
    web_url: str


class ApiEntitiesCiPipelineBasicLoadMatch(TypedDict):
    merge_request_id: str
    project_id: str


class ApiEntitiesCiPipelineBasicListMatchRequired(TypedDict):
    project_id: str


class ApiEntitiesCiPipelineBasicListMatch(ApiEntitiesCiPipelineBasicListMatchRequired, total=False):
    created_after: Any
    created_before: Any
    name: str
    order_by: Any
    page: int
    per_page: int
    ref: Any
    scope: Any
    sha: Any
    sort: Any
    source: Any
    status: Any
    updated_after: Any
    updated_before: Any
    username: str
    yaml_error: Any
    pipeline_schedule_id: str


class ApiEntitiesCiPipelineSchedule(TypedDict, total=False):
    active: bool
    created_at: str
    cron: str
    cron_timezone: str
    description: str
    id: int
    inputs: dict
    next_run_at: str
    owner: dict
    ref: str
    updated_at: str


class ApiEntitiesCiPipelineScheduleListMatchRequired(TypedDict):
    project_id: str


class ApiEntitiesCiPipelineScheduleListMatch(ApiEntitiesCiPipelineScheduleListMatchRequired, total=False):
    page: int
    per_page: int
    scope: Any


class ApiEntitiesCiPipelineScheduleDetail(TypedDict, total=False):
    active: bool
    created_at: str
    cron: str
    cron_timezone: str
    description: str
    id: int
    inputs: dict
    last_pipeline: dict
    next_run_at: str
    owner: dict
    ref: str
    updated_at: str
    variables: dict


class ApiEntitiesCiPipelineScheduleDetailLoadMatch(TypedDict):
    pipeline_schedule_id: str
    project_id: str


class ApiEntitiesCiPipelineScheduleDetailCreateDataRequired(TypedDict):
    project_id: str


class ApiEntitiesCiPipelineScheduleDetailCreateData(ApiEntitiesCiPipelineScheduleDetailCreateDataRequired, total=False):
    pipeline_schedule_id: str
    post_api_v4_projects_id_pipeline_schedule: dict
    active: bool
    created_at: str
    cron: str
    cron_timezone: str
    description: str
    id: int
    inputs: dict
    last_pipeline: dict
    next_run_at: str
    owner: dict
    ref: str
    updated_at: str
    variables: dict


class ApiEntitiesCiPipelineScheduleDetailUpdateDataRequired(TypedDict):
    pipeline_schedule_id: str
    project_id: str
    put_api_v4_projects_id_pipeline_schedules_pipeline_schedule_id: dict


class ApiEntitiesCiPipelineScheduleDetailUpdateData(ApiEntitiesCiPipelineScheduleDetailUpdateDataRequired, total=False):
    active: bool
    created_at: str
    cron: str
    cron_timezone: str
    description: str
    id: int
    inputs: dict
    last_pipeline: dict
    next_run_at: str
    owner: dict
    ref: str
    updated_at: str
    variables: dict


class ApiEntitiesCiResetTokenResult(TypedDict):
    pass


class ApiEntitiesCiResetTokenResultCreateData(TypedDict):
    post_api_v4_runners_reset_authentication_token: dict


class ApiEntitiesCiResourceGroup(TypedDict, total=False):
    created_at: str
    id: int
    key: str
    process_mode: str
    updated_at: str


class ApiEntitiesCiResourceGroupLoadMatch(TypedDict):
    id: str
    project_id: str


class ApiEntitiesCiResourceGroupListMatchRequired(TypedDict):
    project_id: str


class ApiEntitiesCiResourceGroupListMatch(ApiEntitiesCiResourceGroupListMatchRequired, total=False):
    page: int
    per_page: int


class ApiEntitiesCiResourceGroupUpdateDataRequired(TypedDict):
    id: str
    project_id: str
    put_api_v4_projects_id_resource_groups_key: dict


class ApiEntitiesCiResourceGroupUpdateData(ApiEntitiesCiResourceGroupUpdateDataRequired, total=False):
    created_at: str
    key: str
    process_mode: str
    updated_at: str


class ApiEntitiesCiRunner(TypedDict, total=False):
    avatar_path: str
    avatar_url: str
    custom_attributes: list
    id: int
    locked: bool
    name: str
    public_email: str
    state: str
    username: str
    web_url: str


class ApiEntitiesCiRunnerLoadMatch(TypedDict, total=False):
    page: int
    paused: Any
    per_page: int
    scope: Any
    status: Any
    tag_list: Any
    type: Any
    version_prefix: Any


class ApiEntitiesCiRunnerCreateDataRequired(TypedDict):
    project_id: str
    post_api_v4_projects_id_runner: dict


class ApiEntitiesCiRunnerCreateData(ApiEntitiesCiRunnerCreateDataRequired, total=False):
    avatar_path: str
    avatar_url: str
    custom_attributes: list
    id: int
    locked: bool
    name: str
    public_email: str
    state: str
    username: str
    web_url: str


class ApiEntitiesCiRunnerDetail(TypedDict, total=False):
    access_level: str
    active: bool
    architecture: str
    contacted_at: str
    created_at: str
    created_by: dict
    description: str
    groups: dict
    id: int
    ip_address: str
    is_shared: bool
    job_execution_status: str
    locked: bool
    maintenance_note: str
    maximum_timeout: str
    name: str
    online: bool
    paused: bool
    platform: str
    projects: dict
    revision: str
    run_untagged: str
    runner_type: str
    status: str
    tag_list: str
    version: str


class ApiEntitiesCiRunnerDetailLoadMatch(TypedDict):
    id: str


class ApiEntitiesCiRunnerDetailUpdateDataRequired(TypedDict):
    id: str
    put_api_v4_runners_id: dict


class ApiEntitiesCiRunnerDetailUpdateData(ApiEntitiesCiRunnerDetailUpdateDataRequired, total=False):
    access_level: str
    active: bool
    architecture: str
    contacted_at: str
    created_at: str
    created_by: dict
    description: str
    groups: dict
    ip_address: str
    is_shared: bool
    job_execution_status: str
    locked: bool
    maintenance_note: str
    maximum_timeout: str
    name: str
    online: bool
    paused: bool
    platform: str
    projects: dict
    revision: str
    run_untagged: str
    runner_type: str
    status: str
    tag_list: str
    version: str


class ApiEntitiesCiRunnerManager(TypedDict, total=False):
    architecture: str
    contacted_at: str
    created_at: str
    id: int
    ip_address: str
    job_execution_status: str
    platform: str
    revision: str
    status: str
    system_id: str
    version: str


class ApiEntitiesCiRunnerManagerLoadMatch(TypedDict):
    runner_id: str


class ApiEntitiesCiRunnerRegistrationDetail(TypedDict):
    pass


class ApiEntitiesCiRunnerRegistrationDetailCreateData(TypedDict):
    post_api_v4_runner: dict


class ApiEntitiesCiSecureFile(TypedDict, total=False):
    id: str


class ApiEntitiesCiSecureFileLoadMatchRequired(TypedDict):
    project_id: str


class ApiEntitiesCiSecureFileLoadMatch(ApiEntitiesCiSecureFileLoadMatchRequired, total=False):
    page: int
    per_page: int
    id: str


class ApiEntitiesCiSecureFileCreateDataRequired(TypedDict):
    project_id: str
    post_api_v4_projects_id_secure_file: dict


class ApiEntitiesCiSecureFileCreateData(ApiEntitiesCiSecureFileCreateDataRequired, total=False):
    id: str


class ApiEntitiesCiVariable(TypedDict, total=False):
    description: str
    environment_scope: str
    hidden: bool
    id: str
    key: str
    masked: bool
    protected: bool
    raw: bool
    value: str
    variable_type: str


class ApiEntitiesCiVariableLoadMatchRequired(TypedDict):
    id: str
    project_id: str


class ApiEntitiesCiVariableLoadMatch(ApiEntitiesCiVariableLoadMatchRequired, total=False):
    filter_environment_scope: Any


class ApiEntitiesCiVariableListMatch(TypedDict):
    pipeline_id: str
    project_id: str


class ApiEntitiesCiVariableCreateDataRequired(TypedDict):
    group_id: str
    post_api_v4_groups_id_variable: dict


class ApiEntitiesCiVariableCreateData(ApiEntitiesCiVariableCreateDataRequired, total=False):
    description: str
    environment_scope: str
    hidden: bool
    id: str
    key: str
    masked: bool
    protected: bool
    raw: bool
    value: str
    variable_type: str


class ApiEntitiesCiVariableUpdateDataRequired(TypedDict):
    id: str


class ApiEntitiesCiVariableUpdateData(ApiEntitiesCiVariableUpdateDataRequired, total=False):
    pipeline_schedule_id: str
    project_id: str
    put_api_v4_projects_id_pipeline_schedules_pipeline_schedule_id_variables_key: dict
    group_id: str
    put_api_v4_groups_id_variables_key: dict
    put_api_v4_projects_id_variables_key: dict
    put_api_v4_admin_ci_variables_key: dict
    description: str
    environment_scope: str
    hidden: bool
    key: str
    masked: bool
    protected: bool
    raw: bool
    value: str
    variable_type: str


class ApiEntitiesCluster(TypedDict, total=False):
    cluster_type: str
    created_at: str
    domain: str
    enabled: bool
    environment_scope: str
    id: str
    managed: str
    management_project: dict
    name: str
    namespace_per_environment: str
    platform_kubernetes: dict
    platform_type: str
    provider_gcp: dict
    provider_type: str
    user: dict


class ApiEntitiesClusterLoadMatch(TypedDict):
    id: str


class ApiEntitiesClusterListMatch(TypedDict, total=False):
    cluster_type: str
    created_at: str
    domain: str
    enabled: bool
    environment_scope: str
    id: str
    managed: str
    management_project: dict
    name: str
    namespace_per_environment: str
    platform_kubernetes: dict
    platform_type: str
    provider_gcp: dict
    provider_type: str
    user: dict


class ApiEntitiesClusterCreateDataRequired(TypedDict):
    post_api_v4_admin_clusters_add: dict


class ApiEntitiesClusterCreateData(ApiEntitiesClusterCreateDataRequired, total=False):
    cluster_type: str
    created_at: str
    domain: str
    enabled: bool
    environment_scope: str
    id: str
    managed: str
    management_project: dict
    name: str
    namespace_per_environment: str
    platform_kubernetes: dict
    platform_type: str
    provider_gcp: dict
    provider_type: str
    user: dict


class ApiEntitiesClusterUpdateDataRequired(TypedDict):
    id: str
    put_api_v4_admin_clusters_cluster_id: dict


class ApiEntitiesClusterUpdateData(ApiEntitiesClusterUpdateDataRequired, total=False):
    cluster_type: str
    created_at: str
    domain: str
    enabled: bool
    environment_scope: str
    managed: str
    management_project: dict
    name: str
    namespace_per_environment: str
    platform_kubernetes: dict
    platform_type: str
    provider_gcp: dict
    provider_type: str
    user: dict


class ApiEntitiesClusterGroup(TypedDict, total=False):
    cluster_type: str
    created_at: str
    domain: str
    enabled: bool
    environment_scope: str
    group: dict
    id: str
    managed: str
    management_project: dict
    name: str
    namespace_per_environment: str
    platform_kubernetes: dict
    platform_type: str
    provider_gcp: dict
    provider_type: str
    user: dict


class ApiEntitiesClusterGroupLoadMatch(TypedDict):
    cluster_id: str
    group_id: str


class ApiEntitiesClusterGroupCreateDataRequired(TypedDict):
    group_id: str
    post_api_v4_groups_id_clusters_user: dict


class ApiEntitiesClusterGroupCreateData(ApiEntitiesClusterGroupCreateDataRequired, total=False):
    cluster_type: str
    created_at: str
    domain: str
    enabled: bool
    environment_scope: str
    group: dict
    id: str
    managed: str
    management_project: dict
    name: str
    namespace_per_environment: str
    platform_kubernetes: dict
    platform_type: str
    provider_gcp: dict
    provider_type: str
    user: dict


class ApiEntitiesClusterGroupUpdateDataRequired(TypedDict):
    cluster_id: str
    group_id: str
    put_api_v4_groups_id_clusters_cluster_id: dict


class ApiEntitiesClusterGroupUpdateData(ApiEntitiesClusterGroupUpdateDataRequired, total=False):
    cluster_type: str
    created_at: str
    domain: str
    enabled: bool
    environment_scope: str
    group: dict
    id: str
    managed: str
    management_project: dict
    name: str
    namespace_per_environment: str
    platform_kubernetes: dict
    platform_type: str
    provider_gcp: dict
    provider_type: str
    user: dict


class ApiEntitiesClusterProject(TypedDict, total=False):
    cluster_type: str
    created_at: str
    domain: str
    enabled: bool
    environment_scope: str
    id: str
    managed: str
    management_project: dict
    name: str
    namespace_per_environment: str
    platform_kubernetes: dict
    platform_type: str
    project: dict
    provider_gcp: dict
    provider_type: str
    user: dict


class ApiEntitiesClusterProjectLoadMatch(TypedDict):
    cluster_id: str
    project_id: str


class ApiEntitiesClusterProjectCreateDataRequired(TypedDict):
    project_id: str
    post_api_v4_projects_id_clusters_user: dict


class ApiEntitiesClusterProjectCreateData(ApiEntitiesClusterProjectCreateDataRequired, total=False):
    cluster_type: str
    created_at: str
    domain: str
    enabled: bool
    environment_scope: str
    id: str
    managed: str
    management_project: dict
    name: str
    namespace_per_environment: str
    platform_kubernetes: dict
    platform_type: str
    project: dict
    provider_gcp: dict
    provider_type: str
    user: dict


class ApiEntitiesClusterProjectUpdateDataRequired(TypedDict):
    cluster_id: str
    project_id: str
    put_api_v4_projects_id_clusters_cluster_id: dict


class ApiEntitiesClusterProjectUpdateData(ApiEntitiesClusterProjectUpdateDataRequired, total=False):
    cluster_type: str
    created_at: str
    domain: str
    enabled: bool
    environment_scope: str
    id: str
    managed: str
    management_project: dict
    name: str
    namespace_per_environment: str
    platform_kubernetes: dict
    platform_type: str
    project: dict
    provider_gcp: dict
    provider_type: str
    user: dict


class ApiEntitiesClustersAgent(TypedDict, total=False):
    created_at: str
    description: str
    id: int
    name: str
    name_with_namespace: str
    path: str
    path_with_namespace: str


class ApiEntitiesClustersAgentLoadMatchRequired(TypedDict):
    project_id: str


class ApiEntitiesClustersAgentLoadMatch(ApiEntitiesClustersAgentLoadMatchRequired, total=False):
    page: int
    per_page: int
    agent_id: str


class ApiEntitiesClustersAgentCreateDataRequired(TypedDict):
    project_id: str
    post_api_v4_projects_id_cluster_agent: dict


class ApiEntitiesClustersAgentCreateData(ApiEntitiesClustersAgentCreateDataRequired, total=False):
    created_at: str
    description: str
    id: int
    name: str
    name_with_namespace: str
    path: str
    path_with_namespace: str


class ApiEntitiesClustersAgentToken(TypedDict, total=False):
    agent_id: str
    created_at: str
    created_by_user_id: str
    description: str
    id: str
    last_used_at: str
    name: str
    status: str


class ApiEntitiesClustersAgentTokenLoadMatch(TypedDict):
    cluster_agent_id: str
    id: str
    project_id: str


class ApiEntitiesClustersAgentTokenBasic(TypedDict, total=False):
    agent_id: str
    created_at: str
    created_by_user_id: str
    description: str
    id: str
    name: str
    status: str


class ApiEntitiesClustersAgentTokenBasicLoadMatchRequired(TypedDict):
    cluster_agent_id: str
    project_id: str


class ApiEntitiesClustersAgentTokenBasicLoadMatch(ApiEntitiesClustersAgentTokenBasicLoadMatchRequired, total=False):
    page: int
    per_page: int


class ApiEntitiesClustersAgentTokenWithToken(TypedDict):
    pass


class ApiEntitiesClustersAgentTokenWithTokenCreateData(TypedDict):
    cluster_agent_id: str
    project_id: str
    post_api_v4_projects_id_cluster_agents_agent_id_token: dict


class ApiEntitiesCommit(TypedDict, total=False):
    author_email: str
    author_name: str
    authored_date: str
    committed_date: str
    committer_email: str
    committer_name: str
    created_at: str
    extended_trailers: dict
    id: str
    message: str
    parent_ids: list
    short_id: str
    title: str
    trailers: dict
    web_url: str


class ApiEntitiesCommitListMatchRequired(TypedDict):
    project_id: str


class ApiEntitiesCommitListMatch(ApiEntitiesCommitListMatchRequired, total=False):
    all: Any
    author: Any
    first_parent: Any
    order: Any
    page: int
    path: str
    per_page: int
    ref_name: Any
    since: Any
    trailer: Any
    until: Any
    with_stat: Any
    merge_request_id: str
    ref: Any


class ApiEntitiesCommitCreateDataRequired(TypedDict):
    project_id: str


class ApiEntitiesCommitCreateData(ApiEntitiesCommitCreateDataRequired, total=False):
    merge_request_id: str
    post_api_v4_projects_id_merge_requests_merge_request_iid_context_commit: dict
    sha: Any
    post_api_v4_projects_id_repository_commits_sha_cherry_pick: dict
    post_api_v4_projects_id_repository_commits_sha_revert: dict
    author_email: str
    author_name: str
    authored_date: str
    committed_date: str
    committer_email: str
    committer_name: str
    created_at: str
    extended_trailers: dict
    id: str
    message: str
    parent_ids: list
    short_id: str
    title: str
    trailers: dict
    web_url: str


class ApiEntitiesCommitDetail(TypedDict, total=False):
    author_email: str
    author_name: str
    authored_date: str
    committed_date: str
    committer_email: str
    committer_name: str
    created_at: str
    extended_trailers: dict
    id: str
    last_pipeline: dict
    message: str
    parent_ids: list
    project_id: int
    short_id: str
    stats: dict
    status: str
    title: str
    trailers: dict
    web_url: str


class ApiEntitiesCommitDetailLoadMatchRequired(TypedDict):
    project_id: str
    sha: Any


class ApiEntitiesCommitDetailLoadMatch(ApiEntitiesCommitDetailLoadMatchRequired, total=False):
    stat: Any


class ApiEntitiesCommitDetailCreateDataRequired(TypedDict):
    project_id: str
    post_api_v4_projects_id_repository_commit: dict


class ApiEntitiesCommitDetailCreateData(ApiEntitiesCommitDetailCreateDataRequired, total=False):
    author_email: str
    author_name: str
    authored_date: str
    committed_date: str
    committer_email: str
    committer_name: str
    created_at: str
    extended_trailers: dict
    id: str
    last_pipeline: dict
    message: str
    parent_ids: list
    short_id: str
    stats: dict
    status: str
    title: str
    trailers: dict
    web_url: str


class ApiEntitiesCommitDetailUpdateDataRequired(TypedDict):
    project_id: str
    submodule: Any
    put_api_v4_projects_id_repository_submodules_submodule: dict


class ApiEntitiesCommitDetailUpdateData(ApiEntitiesCommitDetailUpdateDataRequired, total=False):
    author_email: str
    author_name: str
    authored_date: str
    committed_date: str
    committer_email: str
    committer_name: str
    created_at: str
    extended_trailers: dict
    id: str
    last_pipeline: dict
    message: str
    parent_ids: list
    short_id: str
    stats: dict
    status: str
    title: str
    trailers: dict
    web_url: str


class ApiEntitiesCommitNote(TypedDict, total=False):
    author: dict
    avatar_path: str
    avatar_url: str
    created_at: str
    custom_attributes: list
    id: int
    line: int
    line_type: str
    locked: bool
    name: str
    note: str
    path: str
    public_email: str
    state: str
    username: str
    web_url: str


class ApiEntitiesCommitNoteListMatchRequired(TypedDict):
    project_id: str
    sha: Any


class ApiEntitiesCommitNoteListMatch(ApiEntitiesCommitNoteListMatchRequired, total=False):
    page: int
    per_page: int


class ApiEntitiesCommitNoteCreateDataRequired(TypedDict):
    project_id: str
    sha: Any
    post_api_v4_projects_id_repository_commits_sha_comment: dict


class ApiEntitiesCommitNoteCreateData(ApiEntitiesCommitNoteCreateDataRequired, total=False):
    author: dict
    avatar_path: str
    avatar_url: str
    created_at: str
    custom_attributes: list
    id: int
    line: int
    line_type: str
    locked: bool
    name: str
    note: str
    path: str
    public_email: str
    state: str
    username: str
    web_url: str


class ApiEntitiesCommitSequence(TypedDict, total=False):
    count: int


class ApiEntitiesCommitSequenceLoadMatchRequired(TypedDict):
    project_id: str
    sha: Any


class ApiEntitiesCommitSequenceLoadMatch(ApiEntitiesCommitSequenceLoadMatchRequired, total=False):
    first_parent: Any


class ApiEntitiesCommitSignature(TypedDict, total=False):
    commit_source: str
    signature: str
    signature_type: str


class ApiEntitiesCommitSignatureLoadMatch(TypedDict):
    project_id: str
    sha: Any


class ApiEntitiesCommitStatus(TypedDict, total=False):
    allow_failure: bool
    author: dict
    avatar_path: str
    avatar_url: str
    coverage: float
    created_at: str
    custom_attributes: list
    description: str
    finished_at: str
    id: int
    locked: bool
    name: str
    pipeline_id: int
    public_email: str
    ref: str
    sha: str
    started_at: str
    state: str
    status: str
    target_url: str
    username: str
    web_url: str


class ApiEntitiesCommitStatusListMatchRequired(TypedDict):
    project_id: str
    sha: Any


class ApiEntitiesCommitStatusListMatch(ApiEntitiesCommitStatusListMatchRequired, total=False):
    all: Any
    name: str
    order_by: Any
    page: int
    per_page: int
    pipeline_id: str
    ref: Any
    sort: Any
    stage: Any


class ApiEntitiesCommitStatusCreateDataRequired(TypedDict):
    id: str
    project_id: str
    post_api_v4_projects_id_statuses_sha: dict


class ApiEntitiesCommitStatusCreateData(ApiEntitiesCommitStatusCreateDataRequired, total=False):
    allow_failure: bool
    author: dict
    avatar_path: str
    avatar_url: str
    coverage: float
    created_at: str
    custom_attributes: list
    description: str
    finished_at: str
    locked: bool
    name: str
    pipeline_id: int
    public_email: str
    ref: str
    sha: str
    started_at: str
    state: str
    status: str
    target_url: str
    username: str
    web_url: str


class ApiEntitiesCompare(TypedDict, total=False):
    commit: dict
    commits: list
    compare_same_ref: bool
    compare_timeout: bool
    diffs: list
    web_url: str


class ApiEntitiesCompareListMatchRequired(TypedDict):
    project_id: str
    to: Any


class ApiEntitiesCompareListMatch(ApiEntitiesCompareListMatchRequired, total=False):
    from_project_id: str
    straight: Any
    unidiff: Any


class ApiEntitiesContainerRegistryRepository(TypedDict, total=False):
    cleanup_policy_started_at: str
    created_at: str
    delete_api_path: str
    id: int
    location: str
    name: str
    path: str
    project_id: int
    size: int
    status: str
    tags: dict
    tags_count: int


class ApiEntitiesContainerRegistryRepositoryLoadMatchRequired(TypedDict):
    id: str


class ApiEntitiesContainerRegistryRepositoryLoadMatch(ApiEntitiesContainerRegistryRepositoryLoadMatchRequired, total=False):
    size: int
    tag: Any
    tags_count: int


class ApiEntitiesContainerRegistryRepositoryListMatchRequired(TypedDict):
    project_id: str


class ApiEntitiesContainerRegistryRepositoryListMatch(ApiEntitiesContainerRegistryRepositoryListMatchRequired, total=False):
    page: int
    per_page: int
    tag: Any
    tags_count: int


class ApiEntitiesContainerRegistryTag(TypedDict, total=False):
    location: str
    name: str
    path: str


class ApiEntitiesContainerRegistryTagListMatchRequired(TypedDict):
    project_id: str
    repository_id: str


class ApiEntitiesContainerRegistryTagListMatch(ApiEntitiesContainerRegistryTagListMatchRequired, total=False):
    page: int
    per_page: int


class ApiEntitiesContainerRegistryTagDetail(TypedDict, total=False):
    created_at: str
    digest: str
    location: str
    name: str
    path: str
    revision: str
    short_revision: str
    total_size: int


class ApiEntitiesContainerRegistryTagDetailLoadMatch(TypedDict):
    project_id: str
    repository_id: str
    tag_name: Any


class ApiEntitiesContributor(TypedDict, total=False):
    additions: int
    commits: int
    deletions: int
    email: str
    name: str


class ApiEntitiesContributorLoadMatchRequired(TypedDict):
    project_id: str


class ApiEntitiesContributorLoadMatch(ApiEntitiesContributorLoadMatchRequired, total=False):
    order_by: Any
    page: int
    per_page: int
    ref: Any
    sort: Any


class ApiEntitiesDeployKey(TypedDict, total=False):
    created_at: str
    expires_at: str
    fingerprint: str
    fingerprint_sha256: str
    id: int
    key: str
    last_used_at: str
    projects_with_readonly_access: dict
    projects_with_write_access: dict
    title: str
    usage_type: str


class ApiEntitiesDeployKeyListMatch(TypedDict, total=False):
    page: int
    per_page: int
    public: bool


class ApiEntitiesDeployKeyCreateDataRequired(TypedDict):
    post_api_v4_deploy_key: dict


class ApiEntitiesDeployKeyCreateData(ApiEntitiesDeployKeyCreateDataRequired, total=False):
    created_at: str
    expires_at: str
    fingerprint: str
    fingerprint_sha256: str
    id: int
    key: str
    last_used_at: str
    projects_with_readonly_access: dict
    projects_with_write_access: dict
    title: str
    usage_type: str


class ApiEntitiesDeployKeyUpdateDataRequired(TypedDict):
    id: str
    project_id: str
    put_api_v4_projects_id_deploy_keys_key_id: dict


class ApiEntitiesDeployKeyUpdateData(ApiEntitiesDeployKeyUpdateDataRequired, total=False):
    created_at: str
    expires_at: str
    fingerprint: str
    fingerprint_sha256: str
    key: str
    last_used_at: str
    projects_with_readonly_access: dict
    projects_with_write_access: dict
    title: str
    usage_type: str


class ApiEntitiesDeployKeysProject(TypedDict, total=False):
    can_push: bool
    created_at: str
    expires_at: str
    fingerprint: str
    fingerprint_sha256: str
    id: int
    key: str
    last_used_at: str
    projects_with_readonly_access: dict
    projects_with_write_access: dict
    title: str
    usage_type: str


class ApiEntitiesDeployKeysProjectLoadMatch(TypedDict):
    key_id: str
    project_id: str


class ApiEntitiesDeployKeysProjectListMatchRequired(TypedDict):
    project_id: str


class ApiEntitiesDeployKeysProjectListMatch(ApiEntitiesDeployKeysProjectListMatchRequired, total=False):
    page: int
    per_page: int


class ApiEntitiesDeployKeysProjectCreateDataRequired(TypedDict):
    project_id: str
    post_api_v4_projects_id_deploy_key: dict


class ApiEntitiesDeployKeysProjectCreateData(ApiEntitiesDeployKeysProjectCreateDataRequired, total=False):
    can_push: bool
    created_at: str
    expires_at: str
    fingerprint: str
    fingerprint_sha256: str
    id: int
    key: str
    last_used_at: str
    projects_with_readonly_access: dict
    projects_with_write_access: dict
    title: str
    usage_type: str


class ApiEntitiesDeployToken(TypedDict, total=False):
    expired: bool
    expires_at: str
    id: int
    name: str
    revoked: bool
    scopes: list
    username: str


class ApiEntitiesDeployTokenLoadMatchRequired(TypedDict):
    id: str


class ApiEntitiesDeployTokenLoadMatch(ApiEntitiesDeployTokenLoadMatchRequired, total=False):
    group_id: str
    project_id: str


class ApiEntitiesDeployTokenListMatch(TypedDict, total=False):
    active: bool
    page: int
    per_page: int


class ApiEntitiesDeployTokenWithToken(TypedDict):
    pass


class ApiEntitiesDeployTokenWithTokenCreateData(TypedDict):
    group_id: str
    post_api_v4_groups_id_deploy_token: dict


class ApiEntitiesDeployment(TypedDict, total=False):
    created_at: str
    deployable: dict
    environment: dict
    id: int
    iid: int
    ref: str
    sha: str
    status: str
    updated_at: str
    user: dict


class ApiEntitiesDeploymentListMatchRequired(TypedDict):
    project_id: str


class ApiEntitiesDeploymentListMatch(ApiEntitiesDeploymentListMatchRequired, total=False):
    environment: Any
    finished_after: Any
    finished_before: Any
    order_by: Any
    page: int
    per_page: int
    sort: Any
    status: Any
    updated_after: Any
    updated_before: Any


class ApiEntitiesDeploymentExtended(TypedDict, total=False):
    approval_summary: dict
    approvals: dict
    created_at: str
    deployable: dict
    environment: dict
    id: int
    iid: int
    pending_approval_count: int
    ref: str
    sha: str
    status: str
    updated_at: str
    user: dict


class ApiEntitiesDeploymentExtendedLoadMatch(TypedDict):
    deployment_id: str
    project_id: str


class ApiEntitiesDeploymentExtendedCreateDataRequired(TypedDict):
    project_id: str
    post_api_v4_projects_id_deployment: dict


class ApiEntitiesDeploymentExtendedCreateData(ApiEntitiesDeploymentExtendedCreateDataRequired, total=False):
    approval_summary: dict
    approvals: dict
    created_at: str
    deployable: dict
    environment: dict
    id: int
    iid: int
    pending_approval_count: int
    ref: str
    sha: str
    status: str
    updated_at: str
    user: dict


class ApiEntitiesDeploymentExtendedUpdateDataRequired(TypedDict):
    deployment_id: str
    project_id: str
    put_api_v4_projects_id_deployments_deployment_id: dict


class ApiEntitiesDeploymentExtendedUpdateData(ApiEntitiesDeploymentExtendedUpdateDataRequired, total=False):
    approval_summary: dict
    approvals: dict
    created_at: str
    deployable: dict
    environment: dict
    id: int
    iid: int
    pending_approval_count: int
    ref: str
    sha: str
    status: str
    updated_at: str
    user: dict


class ApiEntitiesDeploymentsApproval(TypedDict):
    pass


class ApiEntitiesDeploymentsApprovalCreateData(TypedDict):
    deployment_id: str
    project_id: str
    post_api_v4_projects_id_deployments_deployment_id_approval: dict


class ApiEntitiesDictionaryTable(TypedDict, total=False):
    feature_categories: list
    id: str
    table_name: str


class ApiEntitiesDictionaryTableLoadMatch(TypedDict):
    databas_id: str
    id: str


class ApiEntitiesDiff(TypedDict, total=False):
    a_mode: str
    b_mode: str
    collapsed: bool
    deleted_file: bool
    diff: str
    generated_file: bool
    new_file: bool
    new_path: str
    old_path: str
    renamed_file: bool
    too_large: bool


class ApiEntitiesDiffLoadMatchRequired(TypedDict):
    merge_request_id: str
    project_id: str


class ApiEntitiesDiffLoadMatch(ApiEntitiesDiffLoadMatchRequired, total=False):
    page: int
    per_page: int
    unidiff: Any


class ApiEntitiesDiffListMatchRequired(TypedDict):
    project_id: str
    sha: Any


class ApiEntitiesDiffListMatch(ApiEntitiesDiffListMatchRequired, total=False):
    page: int
    per_page: int
    unidiff: Any


class ApiEntitiesDiscoveredCluster(TypedDict, total=False):
    groups: str
    projects: str


class ApiEntitiesDiscoveredClusterLoadMatch(TypedDict):
    group_id: str


class ApiEntitiesDraftNote(TypedDict, total=False):
    author_id: int
    commit_id: int
    discussion_id: int
    id: int
    line_code: str
    merge_request_id: int
    note: str
    position: dict
    resolve_discussion: bool


class ApiEntitiesDraftNoteLoadMatch(TypedDict):
    id: str
    merge_request_id: str
    project_id: str


class ApiEntitiesDraftNoteListMatch(TypedDict):
    merge_request_id: str
    project_id: str


class ApiEntitiesDraftNoteCreateDataRequired(TypedDict):
    merge_request_id: str
    project_id: str
    post_api_v4_projects_id_merge_requests_merge_request_iid_draft_note: dict


class ApiEntitiesDraftNoteCreateData(ApiEntitiesDraftNoteCreateDataRequired, total=False):
    author_id: int
    commit_id: int
    discussion_id: int
    id: int
    line_code: str
    note: str
    position: dict
    resolve_discussion: bool


class ApiEntitiesDraftNoteUpdateDataRequired(TypedDict):
    id: str
    merge_request_id: str
    project_id: str
    put_api_v4_projects_id_merge_requests_merge_request_iid_draft_notes_draft_note_id: dict


class ApiEntitiesDraftNoteUpdateData(ApiEntitiesDraftNoteUpdateDataRequired, total=False):
    author_id: int
    commit_id: int
    discussion_id: int
    line_code: str
    note: str
    position: dict
    resolve_discussion: bool


class ApiEntitiesEnvironment(TypedDict, total=False):
    auto_stop_at: str
    auto_stop_setting: str
    cluster_agent: dict
    created_at: str
    description: str
    external_url: str
    flux_resource_path: str
    id: int
    kubernetes_namespace: str
    last_deployment: dict
    name: str
    project: dict
    slug: str
    state: str
    tier: str
    updated_at: str


class ApiEntitiesEnvironmentLoadMatch(TypedDict):
    id: str
    project_id: str


class ApiEntitiesEnvironmentListMatchRequired(TypedDict):
    project_id: str


class ApiEntitiesEnvironmentListMatch(ApiEntitiesEnvironmentListMatchRequired, total=False):
    name: str
    page: int
    per_page: int
    search: Any
    state: Any


class ApiEntitiesEnvironmentCreateDataRequired(TypedDict):
    project_id: str


class ApiEntitiesEnvironmentCreateData(ApiEntitiesEnvironmentCreateDataRequired, total=False):
    environment_id: str
    post_api_v4_projects_id_environments_environment_id_stop: dict
    post_api_v4_projects_id_environment: dict
    auto_stop_at: str
    auto_stop_setting: str
    cluster_agent: dict
    created_at: str
    description: str
    external_url: str
    flux_resource_path: str
    id: int
    kubernetes_namespace: str
    last_deployment: dict
    name: str
    project: dict
    slug: str
    state: str
    tier: str
    updated_at: str


class ApiEntitiesEnvironmentUpdateDataRequired(TypedDict):
    id: str
    project_id: str
    put_api_v4_projects_id_environments_environment_id: dict


class ApiEntitiesEnvironmentUpdateData(ApiEntitiesEnvironmentUpdateDataRequired, total=False):
    auto_stop_at: str
    auto_stop_setting: str
    cluster_agent: dict
    created_at: str
    description: str
    external_url: str
    flux_resource_path: str
    kubernetes_namespace: str
    last_deployment: dict
    name: str
    project: dict
    slug: str
    state: str
    tier: str
    updated_at: str


class ApiEntitiesErrorTrackingClientKey(TypedDict, total=False):
    active: bool
    id: int
    public_key: str
    sentry_dsn: str


class ApiEntitiesErrorTrackingClientKeyListMatch(TypedDict):
    project_id: str


class ApiEntitiesErrorTrackingClientKeyCreateDataRequired(TypedDict):
    project_id: str


class ApiEntitiesErrorTrackingClientKeyCreateData(ApiEntitiesErrorTrackingClientKeyCreateDataRequired, total=False):
    active: bool
    id: int
    public_key: str
    sentry_dsn: str


class ApiEntitiesErrorTrackingProjectSetting(TypedDict, total=False):
    active: bool
    api_url: str
    integrated: bool
    project_name: str
    sentry_external_url: str


class ApiEntitiesErrorTrackingProjectSettingLoadMatch(TypedDict):
    project_id: str


class ApiEntitiesErrorTrackingProjectSettingUpdateDataRequired(TypedDict):
    project_id: str
    put_api_v4_projects_id_error_tracking_setting: dict


class ApiEntitiesErrorTrackingProjectSettingUpdateData(ApiEntitiesErrorTrackingProjectSettingUpdateDataRequired, total=False):
    active: bool
    api_url: str
    integrated: bool
    project_name: str
    sentry_external_url: str


class ApiEntitiesEvent(TypedDict, total=False):
    action_name: str
    author: dict
    author_id: int
    author_username: str
    created_at: str
    id: int
    imported: bool
    imported_from: str
    note: dict
    project_id: int
    push_data: dict
    target_id: int
    target_iid: int
    target_title: str
    target_type: str
    wiki_page: dict


class ApiEntitiesEventLoadMatchRequired(TypedDict):
    project_id: str


class ApiEntitiesEventLoadMatch(ApiEntitiesEventLoadMatchRequired, total=False):
    action: Any
    after: Any
    before: Any
    page: int
    per_page: int
    sort: Any
    target_type: Any


class ApiEntitiesEventListMatch(TypedDict, total=False):
    action: Any
    after: Any
    before: Any
    page: int
    per_page: int
    scope: Any
    sort: Any
    target_type: Any


class ApiEntitiesFeature(TypedDict, total=False):
    definition: dict
    gates: dict
    id: str
    name: str
    state: str


class ApiEntitiesFeatureListMatch(TypedDict, total=False):
    definition: dict
    gates: dict
    id: str
    name: str
    state: str


class ApiEntitiesFeatureCreateDataRequired(TypedDict):
    id: str
    post_api_v4_features_name: dict


class ApiEntitiesFeatureCreateData(ApiEntitiesFeatureCreateDataRequired, total=False):
    definition: dict
    gates: dict
    name: str
    state: str


class ApiEntitiesFeatureDefinition(TypedDict, total=False):
    default_enabled: str
    feature_issue_url: str
    group: str
    intended_to_rollout_by: str
    introduced_by_url: str
    log_state_changes: str
    milestone: str
    name: str
    rollout_issue_url: str
    type: str


class ApiEntitiesFeatureDefinitionListMatch(TypedDict, total=False):
    default_enabled: str
    feature_issue_url: str
    group: str
    intended_to_rollout_by: str
    introduced_by_url: str
    log_state_changes: str
    milestone: str
    name: str
    rollout_issue_url: str
    type: str


class ApiEntitiesFeatureFlag(TypedDict, total=False):
    active: bool
    created_at: str
    description: str
    id: int
    name: str
    parameters: str
    scopes: dict
    strategies: dict
    updated_at: str
    user_list: dict
    version: str


class ApiEntitiesFeatureFlagLoadMatch(TypedDict):
    id: str
    project_id: str


class ApiEntitiesFeatureFlagListMatchRequired(TypedDict):
    project_id: str


class ApiEntitiesFeatureFlagListMatch(ApiEntitiesFeatureFlagListMatchRequired, total=False):
    page: int
    per_page: int
    scope: Any


class ApiEntitiesFeatureFlagCreateDataRequired(TypedDict):
    project_id: str
    post_api_v4_projects_id_feature_flag: dict


class ApiEntitiesFeatureFlagCreateData(ApiEntitiesFeatureFlagCreateDataRequired, total=False):
    active: bool
    created_at: str
    description: str
    id: int
    name: str
    parameters: str
    scopes: dict
    strategies: dict
    updated_at: str
    user_list: dict
    version: str


class ApiEntitiesFeatureFlagUpdateDataRequired(TypedDict):
    id: str
    project_id: str
    put_api_v4_projects_id_feature_flags_feature_flag_name: dict


class ApiEntitiesFeatureFlagUpdateData(ApiEntitiesFeatureFlagUpdateDataRequired, total=False):
    active: bool
    created_at: str
    description: str
    name: str
    parameters: str
    scopes: dict
    strategies: dict
    updated_at: str
    user_list: dict
    version: str


class ApiEntitiesFeatureFlagUserList(TypedDict, total=False):
    created_at: str
    edit_path: str
    id: int
    iid: int
    name: str
    path: str
    project_id: int
    updated_at: str
    user_xids: str


class ApiEntitiesFeatureFlagUserListLoadMatch(TypedDict):
    iid: Any
    project_id: str


class ApiEntitiesFeatureFlagUserListListMatchRequired(TypedDict):
    project_id: str


class ApiEntitiesFeatureFlagUserListListMatch(ApiEntitiesFeatureFlagUserListListMatchRequired, total=False):
    page: int
    per_page: int
    search: Any


class ApiEntitiesFeatureFlagUserListCreateDataRequired(TypedDict):
    project_id: str
    post_api_v4_projects_id_feature_flags_user_list: dict


class ApiEntitiesFeatureFlagUserListCreateData(ApiEntitiesFeatureFlagUserListCreateDataRequired, total=False):
    created_at: str
    edit_path: str
    id: int
    iid: int
    name: str
    path: str
    updated_at: str
    user_xids: str


class ApiEntitiesFeatureFlagUserListUpdateDataRequired(TypedDict):
    iid: Any
    project_id: str
    put_api_v4_projects_id_feature_flags_user_lists_iid: dict


class ApiEntitiesFeatureFlagUserListUpdateData(ApiEntitiesFeatureFlagUserListUpdateDataRequired, total=False):
    created_at: str
    edit_path: str
    id: int
    name: str
    path: str
    updated_at: str
    user_xids: str


class ApiEntitiesFreezePeriod(TypedDict, total=False):
    created_at: str
    cron_timezone: str
    freeze_end: str
    freeze_start: str
    id: int
    updated_at: str


class ApiEntitiesFreezePeriodLoadMatch(TypedDict):
    id: str
    project_id: str


class ApiEntitiesFreezePeriodListMatchRequired(TypedDict):
    project_id: str


class ApiEntitiesFreezePeriodListMatch(ApiEntitiesFreezePeriodListMatchRequired, total=False):
    page: int
    per_page: int


class ApiEntitiesFreezePeriodCreateDataRequired(TypedDict):
    project_id: str
    post_api_v4_projects_id_freeze_period: dict


class ApiEntitiesFreezePeriodCreateData(ApiEntitiesFreezePeriodCreateDataRequired, total=False):
    created_at: str
    cron_timezone: str
    freeze_end: str
    freeze_start: str
    id: int
    updated_at: str


class ApiEntitiesFreezePeriodUpdateDataRequired(TypedDict):
    id: str
    project_id: str
    put_api_v4_projects_id_freeze_periods_freeze_period_id: dict


class ApiEntitiesFreezePeriodUpdateData(ApiEntitiesFreezePeriodUpdateDataRequired, total=False):
    created_at: str
    cron_timezone: str
    freeze_end: str
    freeze_start: str
    updated_at: str


class ApiEntitiesGitlabSubscription(TypedDict, total=False):
    billing: dict
    plan: dict
    usage: dict


class ApiEntitiesGitlabSubscriptionLoadMatch(TypedDict):
    namespace_id: str


class ApiEntitiesGoModuleVersion(TypedDict, total=False):
    Time: str
    Version: str


class ApiEntitiesGoModuleVersionLoadMatch(TypedDict):
    module_version: Any
    project_id: str
    module_name: Any


class ApiEntitiesGroup(TypedDict, total=False):
    archived: bool
    auto_devops_enabled: str
    auto_duo_code_review_enabled: str
    avatar_url: str
    created_at: str
    custom_attributes: dict
    default_branch: str
    default_branch_protection: str
    default_branch_protection_defaults: str
    description: str
    duo_core_features_enabled: bool
    duo_features_enabled: str
    emails_disabled: bool
    emails_enabled: bool
    file_template_project_id: str
    full_name: str
    full_path: str
    id: str
    ldap_access: str
    ldap_cn: str
    ldap_group_links: dict
    lfs_enabled: str
    lock_duo_features_enabled: str
    lock_math_rendering_limits_enabled: bool
    marked_for_deletion_on: str
    math_rendering_limits_enabled: bool
    max_artifacts_size: int
    mentions_disabled: str
    name: str
    organization_id: str
    parent_id: str
    path: str
    project_creation_level: str
    repository_storage: str
    request_access_enabled: str
    require_two_factor_authentication: str
    root_storage_statistics: dict
    saml_group_links: dict
    share_with_group_lock: str
    shared_runners_setting: str
    show_diff_preview_in_email: bool
    statistics: dict
    subgroup_creation_level: str
    two_factor_grace_period: str
    visibility: str
    web_based_commit_signing_enabled: str
    web_url: str
    wiki_access_level: str


class ApiEntitiesGroupLoadMatchRequired(TypedDict):
    project_id: str


class ApiEntitiesGroupLoadMatch(ApiEntitiesGroupLoadMatchRequired, total=False):
    search: Any


class ApiEntitiesGroupListMatch(TypedDict, total=False):
    active: bool
    all_available: Any
    archived: bool
    marked_for_deletion_on: Any
    min_access_level: Any
    order_by: Any
    owned: Any
    page: int
    per_page: int
    repository_storage: Any
    search: Any
    skip_group: Any
    sort: Any
    statistic: Any
    top_level_only: Any
    visibility: Any
    with_custom_attribute: Any


class ApiEntitiesGroupCreateDataRequired(TypedDict):
    post_api_v4_group: dict


class ApiEntitiesGroupCreateData(ApiEntitiesGroupCreateDataRequired, total=False):
    archived: bool
    auto_devops_enabled: str
    auto_duo_code_review_enabled: str
    avatar_url: str
    created_at: str
    custom_attributes: dict
    default_branch: str
    default_branch_protection: str
    default_branch_protection_defaults: str
    description: str
    duo_core_features_enabled: bool
    duo_features_enabled: str
    emails_disabled: bool
    emails_enabled: bool
    file_template_project_id: str
    full_name: str
    full_path: str
    id: str
    ldap_access: str
    ldap_cn: str
    ldap_group_links: dict
    lfs_enabled: str
    lock_duo_features_enabled: str
    lock_math_rendering_limits_enabled: bool
    marked_for_deletion_on: str
    math_rendering_limits_enabled: bool
    max_artifacts_size: int
    mentions_disabled: str
    name: str
    organization_id: str
    parent_id: str
    path: str
    project_creation_level: str
    repository_storage: str
    request_access_enabled: str
    require_two_factor_authentication: str
    root_storage_statistics: dict
    saml_group_links: dict
    share_with_group_lock: str
    shared_runners_setting: str
    show_diff_preview_in_email: bool
    statistics: dict
    subgroup_creation_level: str
    two_factor_grace_period: str
    visibility: str
    web_based_commit_signing_enabled: str
    web_url: str
    wiki_access_level: str


class ApiEntitiesGroupUpdateDataRequired(TypedDict):
    id: str
    put_api_v4_groups_id: dict


class ApiEntitiesGroupUpdateData(ApiEntitiesGroupUpdateDataRequired, total=False):
    archived: bool
    auto_devops_enabled: str
    auto_duo_code_review_enabled: str
    avatar_url: str
    created_at: str
    custom_attributes: dict
    default_branch: str
    default_branch_protection: str
    default_branch_protection_defaults: str
    description: str
    duo_core_features_enabled: bool
    duo_features_enabled: str
    emails_disabled: bool
    emails_enabled: bool
    file_template_project_id: str
    full_name: str
    full_path: str
    ldap_access: str
    ldap_cn: str
    ldap_group_links: dict
    lfs_enabled: str
    lock_duo_features_enabled: str
    lock_math_rendering_limits_enabled: bool
    marked_for_deletion_on: str
    math_rendering_limits_enabled: bool
    max_artifacts_size: int
    mentions_disabled: str
    name: str
    organization_id: str
    parent_id: str
    path: str
    project_creation_level: str
    repository_storage: str
    request_access_enabled: str
    require_two_factor_authentication: str
    root_storage_statistics: dict
    saml_group_links: dict
    share_with_group_lock: str
    shared_runners_setting: str
    show_diff_preview_in_email: bool
    statistics: dict
    subgroup_creation_level: str
    two_factor_grace_period: str
    visibility: str
    web_based_commit_signing_enabled: str
    web_url: str
    wiki_access_level: str


class ApiEntitiesGroupDetail(TypedDict, total=False):
    allowed_email_domains_list: str
    archived: bool
    auto_ban_user_on_excessive_projects_download: str
    auto_devops_enabled: str
    auto_duo_code_review_enabled: str
    avatar_url: str
    created_at: str
    custom_attributes: dict
    default_branch: str
    default_branch_protection: str
    default_branch_protection_defaults: str
    description: str
    duo_core_features_enabled: bool
    duo_features_enabled: str
    emails_disabled: bool
    emails_enabled: bool
    enabled_git_access_protocol: str
    extra_shared_runners_minutes_limit: str
    file_template_project_id: str
    full_name: str
    full_path: str
    id: str
    ip_restriction_ranges: str
    ldap_access: str
    ldap_cn: str
    ldap_group_links: dict
    lfs_enabled: str
    lock_duo_features_enabled: str
    lock_math_rendering_limits_enabled: bool
    marked_for_deletion_on: str
    math_rendering_limits_enabled: bool
    max_artifacts_size: int
    membership_lock: str
    mentions_disabled: str
    name: str
    organization_id: str
    parent_id: str
    path: str
    prevent_forking_outside_group: str
    prevent_sharing_groups_outside_hierarchy: str
    project_creation_level: str
    projects: dict
    repository_storage: str
    request_access_enabled: str
    require_two_factor_authentication: str
    root_storage_statistics: dict
    runners_token: str
    saml_group_links: dict
    service_access_tokens_expiration_enforced: str
    share_with_group_lock: str
    shared_projects: dict
    shared_runners_minutes_limit: str
    shared_runners_setting: str
    shared_with_groups: str
    show_diff_preview_in_email: bool
    statistics: dict
    subgroup_creation_level: str
    two_factor_grace_period: str
    unique_project_download_limit: str
    unique_project_download_limit_alertlist: str
    unique_project_download_limit_allowlist: str
    unique_project_download_limit_interval_in_seconds: str
    visibility: str
    web_based_commit_signing_enabled: str
    web_url: str
    wiki_access_level: str


class ApiEntitiesGroupDetailLoadMatchRequired(TypedDict):
    id: str


class ApiEntitiesGroupDetailLoadMatch(ApiEntitiesGroupDetailLoadMatchRequired, total=False):
    with_custom_attribute: Any
    with_project: Any


class ApiEntitiesGroupDetailCreateDataRequired(TypedDict):
    group_id: str


class ApiEntitiesGroupDetailCreateData(ApiEntitiesGroupDetailCreateDataRequired, total=False):
    post_api_v4_groups_id_share: dict
    project_id: str
    allowed_email_domains_list: str
    archived: bool
    auto_ban_user_on_excessive_projects_download: str
    auto_devops_enabled: str
    auto_duo_code_review_enabled: str
    avatar_url: str
    created_at: str
    custom_attributes: dict
    default_branch: str
    default_branch_protection: str
    default_branch_protection_defaults: str
    description: str
    duo_core_features_enabled: bool
    duo_features_enabled: str
    emails_disabled: bool
    emails_enabled: bool
    enabled_git_access_protocol: str
    extra_shared_runners_minutes_limit: str
    file_template_project_id: str
    full_name: str
    full_path: str
    id: str
    ip_restriction_ranges: str
    ldap_access: str
    ldap_cn: str
    ldap_group_links: dict
    lfs_enabled: str
    lock_duo_features_enabled: str
    lock_math_rendering_limits_enabled: bool
    marked_for_deletion_on: str
    math_rendering_limits_enabled: bool
    max_artifacts_size: int
    membership_lock: str
    mentions_disabled: str
    name: str
    organization_id: str
    parent_id: str
    path: str
    prevent_forking_outside_group: str
    prevent_sharing_groups_outside_hierarchy: str
    project_creation_level: str
    projects: dict
    repository_storage: str
    request_access_enabled: str
    require_two_factor_authentication: str
    root_storage_statistics: dict
    runners_token: str
    saml_group_links: dict
    service_access_tokens_expiration_enforced: str
    share_with_group_lock: str
    shared_projects: dict
    shared_runners_minutes_limit: str
    shared_runners_setting: str
    shared_with_groups: str
    show_diff_preview_in_email: bool
    statistics: dict
    subgroup_creation_level: str
    two_factor_grace_period: str
    unique_project_download_limit: str
    unique_project_download_limit_alertlist: str
    unique_project_download_limit_allowlist: str
    unique_project_download_limit_interval_in_seconds: str
    visibility: str
    web_based_commit_signing_enabled: str
    web_url: str
    wiki_access_level: str


class ApiEntitiesHook(TypedDict, total=False):
    alert_status: Any
    branch_filter_strategy: str
    created_at: str
    custom_headers: list
    custom_webhook_template: str
    description: str
    disabled_until: str
    enable_ssl_verification: bool
    id: str
    merge_requests_events: bool
    name: str
    push_events: bool
    push_events_branch_filter: str
    repository_update_events: bool
    tag_push_events: bool
    url: str
    url_variables: list


class ApiEntitiesHookLoadMatch(TypedDict):
    id: str


class ApiEntitiesHookListMatch(TypedDict, total=False):
    page: int
    per_page: int


class ApiEntitiesHookCreateDataRequired(TypedDict):
    post_api_v4_hook: dict


class ApiEntitiesHookCreateData(ApiEntitiesHookCreateDataRequired, total=False):
    alert_status: Any
    branch_filter_strategy: str
    created_at: str
    custom_headers: list
    custom_webhook_template: str
    description: str
    disabled_until: str
    enable_ssl_verification: bool
    id: str
    merge_requests_events: bool
    name: str
    push_events: bool
    push_events_branch_filter: str
    repository_update_events: bool
    tag_push_events: bool
    url: str
    url_variables: list


class ApiEntitiesHookUpdateDataRequired(TypedDict):
    id: str
    put_api_v4_hooks_hook_id: dict


class ApiEntitiesHookUpdateData(ApiEntitiesHookUpdateDataRequired, total=False):
    alert_status: Any
    branch_filter_strategy: str
    created_at: str
    custom_headers: list
    custom_webhook_template: str
    description: str
    disabled_until: str
    enable_ssl_verification: bool
    merge_requests_events: bool
    name: str
    push_events: bool
    push_events_branch_filter: str
    repository_update_events: bool
    tag_push_events: bool
    url: str
    url_variables: list


class ApiEntitiesIntegration(TypedDict, total=False):
    id: str


class ApiEntitiesIntegrationLoadMatch(TypedDict):
    group_id: str
    id: str


class ApiEntitiesIntegrationBasic(TypedDict, total=False):
    active: bool
    alert_events: bool
    comment_on_event_enabled: bool
    commit_events: bool
    confidential_issues_events: bool
    confidential_note_events: bool
    created_at: str
    deployment_events: bool
    id: int
    incident_events: bool
    inherited: bool
    issues_events: bool
    job_events: bool
    merge_requests_events: bool
    note_events: bool
    pipeline_events: bool
    push_events: bool
    slug: int
    tag_push_events: bool
    title: str
    updated_at: str
    vulnerability_events: bool
    wiki_page_events: bool


class ApiEntitiesIntegrationBasicListMatch(TypedDict):
    group_id: str


class ApiEntitiesIntegrationBasicUpdateDataRequired(TypedDict):
    group_id: str
    put_api_v4_groups_id_integrations_apple_app_store: dict


class ApiEntitiesIntegrationBasicUpdateData(ApiEntitiesIntegrationBasicUpdateDataRequired, total=False):
    active: bool
    alert_events: bool
    comment_on_event_enabled: bool
    commit_events: bool
    confidential_issues_events: bool
    confidential_note_events: bool
    created_at: str
    deployment_events: bool
    id: int
    incident_events: bool
    inherited: bool
    issues_events: bool
    job_events: bool
    merge_requests_events: bool
    note_events: bool
    pipeline_events: bool
    push_events: bool
    slug: int
    tag_push_events: bool
    title: str
    updated_at: str
    vulnerability_events: bool
    wiki_page_events: bool


class ApiEntitiesInvitation(TypedDict, total=False):
    access_level: str
    created_at: str
    created_by_name: str
    expires_at: str
    id: str
    invite_email: str
    invite_token: str
    user_name: str


class ApiEntitiesInvitationListMatchRequired(TypedDict):
    group_id: str


class ApiEntitiesInvitationListMatch(ApiEntitiesInvitationListMatchRequired, total=False):
    page: int
    per_page: int
    query: Any


class ApiEntitiesInvitationCreateDataRequired(TypedDict):
    group_id: str
    post_api_v4_groups_id_invitation: dict


class ApiEntitiesInvitationCreateData(ApiEntitiesInvitationCreateDataRequired, total=False):
    access_level: str
    created_at: str
    created_by_name: str
    expires_at: str
    id: str
    invite_email: str
    invite_token: str
    user_name: str


class ApiEntitiesInvitationUpdateDataRequired(TypedDict):
    id: str


class ApiEntitiesInvitationUpdateData(ApiEntitiesInvitationUpdateDataRequired, total=False):
    group_id: str
    put_api_v4_groups_id_invitations_email: dict
    project_id: str
    put_api_v4_projects_id_invitations_email: dict
    access_level: str
    created_at: str
    created_by_name: str
    expires_at: str
    invite_email: str
    invite_token: str
    user_name: str


class ApiEntitiesIssuableTimeStat(TypedDict, total=False):
    human_time_estimate: str
    human_total_time_spent: str
    time_estimate: int
    total_time_spent: int


class ApiEntitiesIssuableTimeStatLoadMatchRequired(TypedDict):
    project_id: str


class ApiEntitiesIssuableTimeStatLoadMatch(ApiEntitiesIssuableTimeStatLoadMatchRequired, total=False):
    issue_id: str
    merge_request_id: str


class ApiEntitiesIssuableTimeStatCreateDataRequired(TypedDict):
    project_id: str


class ApiEntitiesIssuableTimeStatCreateData(ApiEntitiesIssuableTimeStatCreateDataRequired, total=False):
    issue_id: str
    post_api_v4_projects_id_issues_issue_iid_add_spent_time: dict
    post_api_v4_projects_id_issues_issue_iid_time_estimate: dict
    merge_request_id: str
    post_api_v4_projects_id_merge_requests_merge_request_iid_add_spent_time: dict
    post_api_v4_projects_id_merge_requests_merge_request_iid_time_estimate: dict
    human_time_estimate: str
    human_total_time_spent: str
    time_estimate: int
    total_time_spent: int


class ApiEntitiesIssue(TypedDict, total=False):
    assignee: dict
    assignees: dict
    author: dict
    blocking_issues_count: str
    closed_at: str
    closed_by: dict
    confidential: bool
    created_at: str
    description: str
    discussion_locked: bool
    downvotes: str
    due_date: str
    epic: dict
    epic_iid: str
    has_tasks: bool
    health_status: str
    id: int
    iid: int
    imported: str
    imported_from: str
    issue_type: str
    iteration: dict
    labels: list
    links: dict
    merge_requests_count: str
    milestone: dict
    moved_to_id: str
    project_id: int
    references: dict
    service_desk_reply_to: str
    severity: str
    state: str
    subscribed: str
    task_completion_status: str
    task_status: str
    time_stats: dict
    title: str
    type: str
    updated_at: str
    upvotes: str
    user_notes_count: str
    web_url: str
    weight: str


class ApiEntitiesIssueLoadMatchRequired(TypedDict):
    id: str


class ApiEntitiesIssueLoadMatch(ApiEntitiesIssueLoadMatchRequired, total=False):
    project_id: str


class ApiEntitiesIssueListMatch(TypedDict, total=False):
    assignee_id: str
    assignee_username: Any
    author_id: str
    author_username: Any
    closed_by_id: str
    confidential: Any
    created_after: Any
    created_before: Any
    due_date: Any
    epic_id: str
    health_status: Any
    iid: Any
    issue_type: Any
    iteration_id: str
    iteration_title: Any
    label: str
    milestone: Any
    milestone_id: str
    my_reaction_emoji: Any
    non_archived: Any
    not_assignee_id: str
    not_assignee_username: Any
    not_author_id: str
    not_author_username: Any
    not_iid: Any
    not_iteration_id: str
    not_iteration_title: Any
    not_label: Any
    not_milestone: Any
    not_milestone_id: str
    not_weight: Any
    order_by: Any
    page: int
    per_page: int
    scope: Any
    search: Any
    sort: Any
    state: Any
    updated_after: Any
    updated_before: Any
    weight: float
    with_labels_detail: Any


class ApiEntitiesIssueCreateDataRequired(TypedDict):
    project_id: str


class ApiEntitiesIssueCreateData(ApiEntitiesIssueCreateDataRequired, total=False):
    issue_id: str
    post_api_v4_projects_id_issues_issue_iid_clone: dict
    post_api_v4_projects_id_issues_issue_iid_move: dict
    post_api_v4_projects_id_issue: dict
    assignee: dict
    assignees: dict
    author: dict
    blocking_issues_count: str
    closed_at: str
    closed_by: dict
    confidential: bool
    created_at: str
    description: str
    discussion_locked: bool
    downvotes: str
    due_date: str
    epic: dict
    epic_iid: str
    has_tasks: bool
    health_status: str
    id: int
    iid: int
    imported: str
    imported_from: str
    issue_type: str
    iteration: dict
    labels: list
    links: dict
    merge_requests_count: str
    milestone: dict
    moved_to_id: str
    references: dict
    service_desk_reply_to: str
    severity: str
    state: str
    subscribed: str
    task_completion_status: str
    task_status: str
    time_stats: dict
    title: str
    type: str
    updated_at: str
    upvotes: str
    user_notes_count: str
    web_url: str
    weight: str


class ApiEntitiesIssueUpdateDataRequired(TypedDict):
    project_id: str


class ApiEntitiesIssueUpdateData(ApiEntitiesIssueUpdateDataRequired, total=False):
    id: str
    put_api_v4_projects_id_issues_issue_iid: dict
    issue_id: str
    put_api_v4_projects_id_issues_issue_iid_reorder: dict
    assignee: dict
    assignees: dict
    author: dict
    blocking_issues_count: str
    closed_at: str
    closed_by: dict
    confidential: bool
    created_at: str
    description: str
    discussion_locked: bool
    downvotes: str
    due_date: str
    epic: dict
    epic_iid: str
    has_tasks: bool
    health_status: str
    iid: int
    imported: str
    imported_from: str
    issue_type: str
    iteration: dict
    labels: list
    links: dict
    merge_requests_count: str
    milestone: dict
    moved_to_id: str
    references: dict
    service_desk_reply_to: str
    severity: str
    state: str
    subscribed: str
    task_completion_status: str
    task_status: str
    time_stats: dict
    title: str
    type: str
    updated_at: str
    upvotes: str
    user_notes_count: str
    web_url: str
    weight: str


class ApiEntitiesIssueLink(TypedDict, total=False):
    id: str
    link_type: str
    source_issue: dict
    target_issue: dict


class ApiEntitiesIssueLinkLoadMatch(TypedDict):
    id: str
    issue_id: str
    project_id: str


class ApiEntitiesIssueLinkCreateDataRequired(TypedDict):
    issue_id: str
    project_id: str
    post_api_v4_projects_id_issues_issue_iid_link: dict


class ApiEntitiesIssueLinkCreateData(ApiEntitiesIssueLinkCreateDataRequired, total=False):
    id: str
    link_type: str
    source_issue: dict
    target_issue: dict


class ApiEntitiesLicense(TypedDict, total=False):
    conditions: list
    content: str
    description: str
    html_url: str
    id: str
    key: str
    limitations: list
    name: str
    nickname: str
    permissions: list
    popular: bool
    source_url: str


class ApiEntitiesLicenseLoadMatchRequired(TypedDict):
    id: str
    name: str
    type: Any


class ApiEntitiesLicenseLoadMatch(ApiEntitiesLicenseLoadMatchRequired, total=False):
    fullname: Any
    project: Any
    source_template_project_id: str


class ApiEntitiesMarkdown(TypedDict):
    pass


class ApiEntitiesMarkdownCreateData(TypedDict):
    post_api_v4_markdown: dict


class ApiEntitiesMarkdownUploadAdmin(TypedDict, total=False):
    created_at: str
    filename: str
    id: str
    size: str
    uploaded_by: dict


class ApiEntitiesMarkdownUploadAdminListMatchRequired(TypedDict):
    group_id: str


class ApiEntitiesMarkdownUploadAdminListMatch(ApiEntitiesMarkdownUploadAdminListMatchRequired, total=False):
    page: int
    per_page: int


class ApiEntitiesMember(TypedDict, total=False):
    access_level: str
    avatar_path: str
    avatar_url: str
    created_at: str
    created_by: dict
    custom_attributes: list
    email: str
    expires_at: str
    group_saml_identity: dict
    group_scim_identity: dict
    id: int
    is_using_seat: bool
    key: str
    locked: bool
    member_role: dict
    membership_state: str
    name: str
    override: str
    public_email: str
    state: str
    username: str
    value: str
    web_url: str


class ApiEntitiesMemberLoadMatch(TypedDict):
    group_id: str
    id: str


class ApiEntitiesMemberListMatchRequired(TypedDict):
    group_id: str


class ApiEntitiesMemberListMatch(ApiEntitiesMemberListMatchRequired, total=False):
    page: int
    per_page: int
    query: Any
    show_seat_info: Any
    skip_user: Any
    user_id: str
    with_saml_identity: Any


class ApiEntitiesMemberCreateDataRequired(TypedDict):
    group_id: str
    post_api_v4_groups_id_member: dict


class ApiEntitiesMemberCreateData(ApiEntitiesMemberCreateDataRequired, total=False):
    access_level: str
    avatar_path: str
    avatar_url: str
    created_at: str
    created_by: dict
    custom_attributes: list
    email: str
    expires_at: str
    group_saml_identity: dict
    group_scim_identity: dict
    id: int
    is_using_seat: bool
    key: str
    locked: bool
    member_role: dict
    membership_state: str
    name: str
    override: str
    public_email: str
    state: str
    username: str
    value: str
    web_url: str


class ApiEntitiesMemberUpdateDataRequired(TypedDict):
    id: str


class ApiEntitiesMemberUpdateData(ApiEntitiesMemberUpdateDataRequired, total=False):
    group_id: str
    put_api_v4_groups_id_members_user_id: dict
    project_id: str
    put_api_v4_projects_id_members_user_id: dict
    access_level: str
    avatar_path: str
    avatar_url: str
    created_at: str
    created_by: dict
    custom_attributes: list
    email: str
    expires_at: str
    group_saml_identity: dict
    group_scim_identity: dict
    is_using_seat: bool
    key: str
    locked: bool
    member_role: dict
    membership_state: str
    name: str
    override: str
    public_email: str
    state: str
    username: str
    value: str
    web_url: str


class ApiEntitiesMemberRemoveMatch(TypedDict):
    group_id: str
    member_id: str


class ApiEntitiesMerge(TypedDict, total=False):
    allow_collaboration: bool
    allow_maintainer_to_push: bool
    approvals_before_merge: str
    assignee: dict
    assignees: dict
    author: dict
    blocking_discussions_resolved: str
    changes_count: str
    closed_at: str
    closed_by: dict
    created_at: str
    description: str
    description_html: str
    detailed_merge_status: str
    diff_refs: dict
    discussion_locked: str
    diverged_commits_count: str
    downvotes: str
    draft: str
    first_contribution: str
    first_deployed_to_production_at: str
    force_remove_source_branch: str
    has_conflicts: bool
    head_pipeline: dict
    id: int
    iid: int
    imported: str
    imported_from: str
    labels: str
    latest_build_finished_at: str
    latest_build_started_at: str
    merge_after: str
    merge_commit_sha: str
    merge_error: str
    merge_status: str
    merge_user: dict
    merge_when_pipeline_succeeds: str
    merged_at: str
    merged_by: dict
    milestone: dict
    pipeline: dict
    prepared_at: str
    project_id: int
    rebase_in_progress: str
    reference: str
    references: dict
    reviewers: dict
    sha: str
    should_remove_source_branch: bool
    source_branch: str
    source_project_id: str
    squash: str
    squash_commit_sha: str
    squash_on_merge: str
    state: str
    subscribed: str
    target_branch: str
    target_project_id: str
    task_completion_status: str
    time_stats: dict
    title: str
    title_html: str
    updated_at: str
    upvotes: str
    user: dict
    user_notes_count: str
    web_url: str
    work_in_progress: str


class ApiEntitiesMergeLoadMatchRequired(TypedDict):
    merge_request_iid: Any
    project_id: str


class ApiEntitiesMergeLoadMatch(ApiEntitiesMergeLoadMatchRequired, total=False):
    include_diverged_commits_count: int
    include_rebase_in_progress: Any
    render_html: Any


class ApiEntitiesMergeCreateDataRequired(TypedDict):
    project_id: str


class ApiEntitiesMergeCreateData(ApiEntitiesMergeCreateDataRequired, total=False):
    merge_request_id: str
    post_api_v4_projects_id_merge_request: dict
    allow_collaboration: bool
    allow_maintainer_to_push: bool
    approvals_before_merge: str
    assignee: dict
    assignees: dict
    author: dict
    blocking_discussions_resolved: str
    changes_count: str
    closed_at: str
    closed_by: dict
    created_at: str
    description: str
    description_html: str
    detailed_merge_status: str
    diff_refs: dict
    discussion_locked: str
    diverged_commits_count: str
    downvotes: str
    draft: str
    first_contribution: str
    first_deployed_to_production_at: str
    force_remove_source_branch: str
    has_conflicts: bool
    head_pipeline: dict
    id: int
    iid: int
    imported: str
    imported_from: str
    labels: str
    latest_build_finished_at: str
    latest_build_started_at: str
    merge_after: str
    merge_commit_sha: str
    merge_error: str
    merge_status: str
    merge_user: dict
    merge_when_pipeline_succeeds: str
    merged_at: str
    merged_by: dict
    milestone: dict
    pipeline: dict
    prepared_at: str
    rebase_in_progress: str
    reference: str
    references: dict
    reviewers: dict
    sha: str
    should_remove_source_branch: bool
    source_branch: str
    source_project_id: str
    squash: str
    squash_commit_sha: str
    squash_on_merge: str
    state: str
    subscribed: str
    target_branch: str
    target_project_id: str
    task_completion_status: str
    time_stats: dict
    title: str
    title_html: str
    updated_at: str
    upvotes: str
    user: dict
    user_notes_count: str
    web_url: str
    work_in_progress: str


class ApiEntitiesMergeUpdateDataRequired(TypedDict):
    project_id: str


class ApiEntitiesMergeUpdateData(ApiEntitiesMergeUpdateDataRequired, total=False):
    merge_request_id: str
    put_api_v4_projects_id_merge_requests_merge_request_iid_merge: dict
    merge_request_iid: Any
    put_api_v4_projects_id_merge_requests_merge_request_iid: dict
    allow_collaboration: bool
    allow_maintainer_to_push: bool
    approvals_before_merge: str
    assignee: dict
    assignees: dict
    author: dict
    blocking_discussions_resolved: str
    changes_count: str
    closed_at: str
    closed_by: dict
    created_at: str
    description: str
    description_html: str
    detailed_merge_status: str
    diff_refs: dict
    discussion_locked: str
    diverged_commits_count: str
    downvotes: str
    draft: str
    first_contribution: str
    first_deployed_to_production_at: str
    force_remove_source_branch: str
    has_conflicts: bool
    head_pipeline: dict
    id: int
    iid: int
    imported: str
    imported_from: str
    labels: str
    latest_build_finished_at: str
    latest_build_started_at: str
    merge_after: str
    merge_commit_sha: str
    merge_error: str
    merge_status: str
    merge_user: dict
    merge_when_pipeline_succeeds: str
    merged_at: str
    merged_by: dict
    milestone: dict
    pipeline: dict
    prepared_at: str
    rebase_in_progress: str
    reference: str
    references: dict
    reviewers: dict
    sha: str
    should_remove_source_branch: bool
    source_branch: str
    source_project_id: str
    squash: str
    squash_commit_sha: str
    squash_on_merge: str
    state: str
    subscribed: str
    target_branch: str
    target_project_id: str
    task_completion_status: str
    time_stats: dict
    title: str
    title_html: str
    updated_at: str
    upvotes: str
    user: dict
    user_notes_count: str
    web_url: str
    work_in_progress: str


class ApiEntitiesMergeRequestApproval(TypedDict, total=False):
    approved_at: str
    user: dict


class ApiEntitiesMergeRequestApprovalLoadMatch(TypedDict):
    merge_request_id: str
    project_id: str


class ApiEntitiesMergeRequestApprovalCreateDataRequired(TypedDict):
    merge_request_id: str
    project_id: str


class ApiEntitiesMergeRequestApprovalCreateData(ApiEntitiesMergeRequestApprovalCreateDataRequired, total=False):
    post_api_v4_projects_id_merge_requests_merge_request_iid_approve: dict
    approved_at: str
    user: dict


class ApiEntitiesMergeRequestBasic(TypedDict, total=False):
    allow_collaboration: bool
    allow_maintainer_to_push: bool
    approvals_before_merge: str
    assignee: dict
    assignees: dict
    author: dict
    blocking_discussions_resolved: str
    closed_at: str
    closed_by: dict
    created_at: str
    description: str
    description_html: str
    detailed_merge_status: str
    discussion_locked: str
    downvotes: str
    draft: str
    force_remove_source_branch: str
    has_conflicts: bool
    id: int
    iid: int
    imported: str
    imported_from: str
    labels: str
    merge_after: str
    merge_commit_sha: str
    merge_status: str
    merge_user: dict
    merge_when_pipeline_succeeds: str
    merged_at: str
    merged_by: dict
    milestone: dict
    prepared_at: str
    project_id: int
    reference: str
    references: dict
    reviewers: dict
    sha: str
    should_remove_source_branch: bool
    source_branch: str
    source_project_id: str
    squash: str
    squash_commit_sha: str
    squash_on_merge: str
    state: str
    target_branch: str
    target_project_id: str
    task_completion_status: str
    time_stats: dict
    title: str
    title_html: str
    updated_at: str
    upvotes: str
    user_notes_count: str
    web_url: str
    work_in_progress: str


class ApiEntitiesMergeRequestBasicLoadMatch(TypedDict, total=False):
    approved: Any
    approved_by_id: str
    approved_by_username: Any
    approver_id: str
    assignee_id: str
    assignee_username: Any
    author_id: str
    author_username: Any
    created_after: Any
    created_before: Any
    deployed_after: Any
    deployed_before: Any
    environment: Any
    label: str
    merge_user_id: str
    merge_user_username: Any
    milestone: Any
    my_reaction_emoji: Any
    not_assignee_id: str
    not_assignee_username: Any
    not_author_id: str
    not_author_username: Any
    not_label: Any
    not_milestone: Any
    not_my_reaction_emoji: Any
    not_reviewer_id: str
    not_reviewer_username: Any
    order_by: Any
    page: int
    per_page: int
    reviewer_id: str
    reviewer_username: Any
    scope: Any
    search: Any
    sort: Any
    source_branch: Any
    source_project_id: str
    state: Any
    target_branch: Any
    updated_after: Any
    updated_before: Any
    view: Any
    wip: Any
    with_labels_detail: Any
    with_merge_status_recheck: Any


class ApiEntitiesMergeRequestBasicListMatchRequired(TypedDict):
    project_id: str


class ApiEntitiesMergeRequestBasicListMatch(ApiEntitiesMergeRequestBasicListMatchRequired, total=False):
    deployment_id: str
    approved: Any
    assignee_id: str
    assignee_username: Any
    author_id: str
    author_username: Any
    created_after: Any
    created_before: Any
    deployed_after: Any
    deployed_before: Any
    environment: Any
    label: str
    merge_user_id: str
    merge_user_username: Any
    milestone: Any
    my_reaction_emoji: Any
    not_assignee_id: str
    not_assignee_username: Any
    not_author_id: str
    not_author_username: Any
    not_label: Any
    not_milestone: Any
    not_my_reaction_emoji: Any
    not_reviewer_id: str
    not_reviewer_username: Any
    order_by: Any
    page: int
    per_page: int
    reviewer_id: str
    reviewer_username: Any
    scope: Any
    search: Any
    sort: Any
    source_branch: Any
    source_project_id: str
    state: Any
    target_branch: Any
    updated_after: Any
    updated_before: Any
    view: Any
    wip: Any
    with_labels_detail: Any
    with_merge_status_recheck: Any
    sha: Any


class ApiEntitiesMergeRequestChange(TypedDict, total=False):
    allow_collaboration: bool
    allow_maintainer_to_push: bool
    approvals_before_merge: str
    assignee: dict
    assignees: dict
    author: dict
    blocking_discussions_resolved: str
    changes: dict
    changes_count: str
    closed_at: str
    closed_by: dict
    created_at: str
    description: str
    description_html: str
    detailed_merge_status: str
    diff_refs: dict
    discussion_locked: str
    diverged_commits_count: str
    downvotes: str
    draft: str
    first_contribution: str
    first_deployed_to_production_at: str
    force_remove_source_branch: str
    has_conflicts: bool
    head_pipeline: dict
    id: int
    iid: int
    imported: str
    imported_from: str
    labels: str
    latest_build_finished_at: str
    latest_build_started_at: str
    merge_after: str
    merge_commit_sha: str
    merge_error: str
    merge_status: str
    merge_user: dict
    merge_when_pipeline_succeeds: str
    merged_at: str
    merged_by: dict
    milestone: dict
    overflow: str
    pipeline: dict
    prepared_at: str
    project_id: int
    rebase_in_progress: str
    reference: str
    references: dict
    reviewers: dict
    sha: str
    should_remove_source_branch: bool
    source_branch: str
    source_project_id: str
    squash: str
    squash_commit_sha: str
    squash_on_merge: str
    state: str
    subscribed: str
    target_branch: str
    target_project_id: str
    task_completion_status: str
    time_stats: dict
    title: str
    title_html: str
    updated_at: str
    upvotes: str
    user: dict
    user_notes_count: str
    web_url: str
    work_in_progress: str


class ApiEntitiesMergeRequestChangeLoadMatchRequired(TypedDict):
    merge_request_id: str
    project_id: str


class ApiEntitiesMergeRequestChangeLoadMatch(ApiEntitiesMergeRequestChangeLoadMatchRequired, total=False):
    unidiff: Any


class ApiEntitiesMergeRequestDiff(TypedDict, total=False):
    base_commit_sha: str
    created_at: str
    head_commit_sha: str
    id: str
    merge_request_id: str
    patch_id_sha: str
    real_size: str
    start_commit_sha: str
    state: str


class ApiEntitiesMergeRequestDiffListMatchRequired(TypedDict):
    merge_request_id: str
    project_id: str


class ApiEntitiesMergeRequestDiffListMatch(ApiEntitiesMergeRequestDiffListMatchRequired, total=False):
    page: int
    per_page: int


class ApiEntitiesMergeRequestDiffFull(TypedDict, total=False):
    base_commit_sha: str
    commits: dict
    created_at: str
    diffs: dict
    head_commit_sha: str
    id: str
    merge_request_id: str
    patch_id_sha: str
    real_size: str
    start_commit_sha: str
    state: str


class ApiEntitiesMergeRequestDiffFullLoadMatchRequired(TypedDict):
    merge_request_id: str
    project_id: str
    version_id: str


class ApiEntitiesMergeRequestDiffFullLoadMatch(ApiEntitiesMergeRequestDiffFullLoadMatchRequired, total=False):
    unidiff: Any


class ApiEntitiesMergeRequestReviewer(TypedDict, total=False):
    avatar_path: str
    avatar_url: str
    custom_attributes: list
    id: int
    locked: bool
    name: str
    public_email: str
    state: str
    username: str
    web_url: str


class ApiEntitiesMergeRequestReviewerLoadMatch(TypedDict):
    merge_request_id: str
    project_id: str


class ApiEntitiesMetricImage(TypedDict, total=False):
    created_at: str
    file_path: str
    filename: str
    id: int
    url: str
    url_text: str


class ApiEntitiesMetricImageListMatch(TypedDict):
    alert_management_alert_id: str
    project_id: str


class ApiEntitiesMetricImageCreateDataRequired(TypedDict):
    alert_management_alert_id: str
    project_id: str
    file: Any


class ApiEntitiesMetricImageCreateData(ApiEntitiesMetricImageCreateDataRequired, total=False):
    url: str
    url_text: Any
    created_at: str
    file_path: str
    filename: str
    id: int


class ApiEntitiesMetricImageUpdateDataRequired(TypedDict):
    alert_management_alert_id: str
    id: str
    project_id: str


class ApiEntitiesMetricImageUpdateData(ApiEntitiesMetricImageUpdateDataRequired, total=False):
    url: str
    url_text: Any
    created_at: str
    file_path: str
    filename: str


class ApiEntitiesMrNote(TypedDict, total=False):
    avatar_path: str
    avatar_url: str
    custom_attributes: list
    id: int
    locked: bool
    name: str
    public_email: str
    state: str
    username: str
    web_url: str


class ApiEntitiesMrNoteLoadMatchRequired(TypedDict):
    merge_request_id: str
    project_id: str


class ApiEntitiesMrNoteLoadMatch(ApiEntitiesMrNoteLoadMatchRequired, total=False):
    page: int
    per_page: int


class ApiEntitiesNamespace(TypedDict, total=False):
    additional_purchased_storage_ends_on: str
    additional_purchased_storage_size: int
    avatar_url: str
    billable_members_count: int
    end_date: str
    extra_shared_runners_minutes_limit: int
    full_path: str
    id: int
    kind: str
    max_seats_used: int
    max_seats_used_changed_at: str
    members_count_with_descendants: int
    name: str
    parent_id: int
    path: str
    plan: str
    projects_count: int
    root_repository_size: int
    seats_in_use: int
    shared_runners_minutes_limit: int
    trial: bool
    trial_ends_on: str
    web_url: str


class ApiEntitiesNamespaceLoadMatch(TypedDict):
    id: str


class ApiEntitiesNamespaceListMatch(TypedDict, total=False):
    full_path_search: Any
    owned_only: Any
    page: int
    per_page: int
    requested_hosted_plan: Any
    search: Any
    top_level_only: Any


class ApiEntitiesNamespaceUpdateDataRequired(TypedDict):
    id: str
    put_api_v4_namespaces_id: dict


class ApiEntitiesNamespaceUpdateData(ApiEntitiesNamespaceUpdateDataRequired, total=False):
    additional_purchased_storage_ends_on: str
    additional_purchased_storage_size: int
    avatar_url: str
    billable_members_count: int
    end_date: str
    extra_shared_runners_minutes_limit: int
    full_path: str
    kind: str
    max_seats_used: int
    max_seats_used_changed_at: str
    members_count_with_descendants: int
    name: str
    parent_id: int
    path: str
    plan: str
    projects_count: int
    root_repository_size: int
    seats_in_use: int
    shared_runners_minutes_limit: int
    trial: bool
    trial_ends_on: str
    web_url: str


class ApiEntitiesNamespaceExistence(TypedDict, total=False):
    exists: bool
    suggests: list


class ApiEntitiesNamespaceExistenceListMatchRequired(TypedDict):
    namespace_id: str


class ApiEntitiesNamespaceExistenceListMatch(ApiEntitiesNamespaceExistenceListMatchRequired, total=False):
    parent_id: str


class ApiEntitiesNamespacesStorageLimitExclusion(TypedDict, total=False):
    id: int
    namespace_id: int
    namespace_name: str
    reason: str


class ApiEntitiesNamespacesStorageLimitExclusionLoadMatch(TypedDict, total=False):
    page: int
    per_page: int


class ApiEntitiesNamespacesStorageLimitExclusionCreateDataRequired(TypedDict):
    namespace_id: str
    post_api_v4_namespaces_id_storage_limit_exclusion: dict


class ApiEntitiesNamespacesStorageLimitExclusionCreateData(ApiEntitiesNamespacesStorageLimitExclusionCreateDataRequired, total=False):
    id: int
    namespace_name: str
    reason: str


class ApiEntitiesNpmPackage(TypedDict, total=False):
    disttags: dict
    name: str
    versions: dict


class ApiEntitiesNpmPackageLoadMatchRequired(TypedDict):
    package_name: Any


class ApiEntitiesNpmPackageLoadMatch(ApiEntitiesNpmPackageLoadMatchRequired, total=False):
    group_id: str
    project_id: str


class ApiEntitiesNpmPackageTag(TypedDict):
    pass


class ApiEntitiesNpmPackageTagLoadMatchRequired(TypedDict):
    package_name: Any


class ApiEntitiesNpmPackageTagLoadMatch(ApiEntitiesNpmPackageTagLoadMatchRequired, total=False):
    group_id: str
    project_id: str


class ApiEntitiesNugetPackagesVersion(TypedDict, total=False):
    versions: list


class ApiEntitiesNugetPackagesVersionListMatch(TypedDict):
    project_id: str
    package_name: Any


class ApiEntitiesNugetSearchResult(TypedDict, total=False):
    authors: str
    description: str
    iconUrl: str
    id: str
    licenseUrl: str
    projectUrl: str
    summary: str
    tags: str
    title: str
    totalDownloads: int
    type: str
    verified: bool
    version: str
    versions: dict


class ApiEntitiesNugetSearchResultListMatchRequired(TypedDict):
    project_id: str


class ApiEntitiesNugetSearchResultListMatch(ApiEntitiesNugetSearchResultListMatchRequired, total=False):
    prerelease: Any
    q: Any
    skip: int
    take: Any


class ApiEntitiesNugetServiceIndex(TypedDict, total=False):
    resources: list
    version: str


class ApiEntitiesNugetServiceIndexListMatch(TypedDict):
    project_id: str


class ApiEntitiesOrganizationsOrganization(TypedDict):
    pass


class ApiEntitiesOrganizationsOrganizationCreateData(TypedDict):
    post_api_v4_organization: dict


class ApiEntitiesPackage(TypedDict, total=False):
    conan_package_name: str
    created_at: str
    id: int
    last_downloaded_at: str
    links: dict
    name: str
    package_type: str
    pipeline: dict
    pipelines: dict
    project_id: int
    project_path: str
    status: str
    tags: str
    version: str
    versions: dict


class ApiEntitiesPackageLoadMatch(TypedDict):
    id: str
    project_id: str


class ApiEntitiesPackageListMatchRequired(TypedDict):
    group_id: str


class ApiEntitiesPackageListMatch(ApiEntitiesPackageListMatchRequired, total=False):
    exclude_subgroup: Any
    include_versionless: Any
    order_by: Any
    package_name: Any
    package_type: Any
    package_version: Any
    page: int
    per_page: int
    sort: Any
    status: Any


class ApiEntitiesPackageFile(TypedDict, total=False):
    created_at: str
    file_md5: str
    file_name: str
    file_sha1: str
    file_sha256: str
    id: int
    package_id: int
    pipelines: dict
    size: int


class ApiEntitiesPackageFileListMatchRequired(TypedDict):
    package_id: str
    project_id: str


class ApiEntitiesPackageFileListMatch(ApiEntitiesPackageFileListMatchRequired, total=False):
    order_by: Any
    page: int
    per_page: int
    sort: Any


class ApiEntitiesPackagePipeline(TypedDict, total=False):
    avatar_path: str
    avatar_url: str
    custom_attributes: list
    id: int
    locked: bool
    name: str
    public_email: str
    state: str
    username: str
    web_url: str


class ApiEntitiesPackagePipelineLoadMatchRequired(TypedDict):
    package_id: str
    project_id: str


class ApiEntitiesPackagePipelineLoadMatch(ApiEntitiesPackagePipelineLoadMatchRequired, total=False):
    cursor: Any
    page: int
    per_page: int


class ApiEntitiesPackagesConanFilesList(TypedDict):
    pass


class ApiEntitiesPackagesConanFilesListLoadMatchRequired(TypedDict):
    conan_id: str
    package_channel: Any
    package_username: Any
    package_version: Any
    project_id: str


class ApiEntitiesPackagesConanFilesListLoadMatch(ApiEntitiesPackagesConanFilesListLoadMatchRequired, total=False):
    package_id: str
    package_revision: Any
    revision_id: str
    recipe_revision: Any


class ApiEntitiesPackagesConanPackageManifest(TypedDict):
    pass


class ApiEntitiesPackagesConanPackageManifestLoadMatchRequired(TypedDict):
    conan_id: str
    conan_package_reference: Any
    package_channel: Any
    package_username: Any
    package_version: Any


class ApiEntitiesPackagesConanPackageManifestLoadMatch(ApiEntitiesPackagesConanPackageManifestLoadMatchRequired, total=False):
    project_id: str


class ApiEntitiesPackagesConanPackageRevision(TypedDict, total=False):
    revision: str
    time: str


class ApiEntitiesPackagesConanPackageRevisionListMatch(TypedDict):
    conan_id: str
    conan_package_reference: Any
    package_channel: Any
    package_username: Any
    package_version: Any
    project_id: str
    revision_id: str


class ApiEntitiesPackagesConanPackageSnapshot(TypedDict):
    pass


class ApiEntitiesPackagesConanPackageSnapshotLoadMatchRequired(TypedDict):
    conan_id: str
    conan_package_reference: Any
    package_channel: Any
    package_username: Any
    package_version: Any


class ApiEntitiesPackagesConanPackageSnapshotLoadMatch(ApiEntitiesPackagesConanPackageSnapshotLoadMatchRequired, total=False):
    project_id: str


class ApiEntitiesPackagesConanRecipeManifest(TypedDict):
    pass


class ApiEntitiesPackagesConanRecipeManifestLoadMatchRequired(TypedDict):
    conan_id: str
    package_channel: Any
    package_username: Any
    package_version: Any


class ApiEntitiesPackagesConanRecipeManifestLoadMatch(ApiEntitiesPackagesConanRecipeManifestLoadMatchRequired, total=False):
    project_id: str


class ApiEntitiesPackagesConanRecipeRevision(TypedDict, total=False):
    revision: str
    time: str


class ApiEntitiesPackagesConanRecipeRevisionListMatch(TypedDict):
    conan_id: str
    package_channel: Any
    package_username: Any
    package_version: Any
    project_id: str


class ApiEntitiesPackagesConanRecipeSnapshot(TypedDict, total=False):
    id: str


class ApiEntitiesPackagesConanRecipeSnapshotLoadMatchRequired(TypedDict):
    package_channel: Any
    package_name: Any
    package_username: Any
    package_version: Any


class ApiEntitiesPackagesConanRecipeSnapshotLoadMatch(ApiEntitiesPackagesConanRecipeSnapshotLoadMatchRequired, total=False):
    id: str


class ApiEntitiesPackagesConanRevision(TypedDict, total=False):
    revision: str
    time: str


class ApiEntitiesPackagesConanRevisionLoadMatchRequired(TypedDict):
    conan_id: str
    package_channel: Any
    package_username: Any
    package_version: Any
    project_id: str


class ApiEntitiesPackagesConanRevisionLoadMatch(ApiEntitiesPackagesConanRevisionLoadMatchRequired, total=False):
    conan_package_reference: Any
    revision_id: str


class ApiEntitiesPackagesConanUploadUrl(TypedDict):
    pass


class ApiEntitiesPackagesConanUploadUrlCreateDataRequired(TypedDict):
    conan_id: str
    package_channel: Any
    package_username: Any
    package_version: Any


class ApiEntitiesPackagesConanUploadUrlCreateData(ApiEntitiesPackagesConanUploadUrlCreateDataRequired, total=False):
    conan_package_reference: Any
    project_id: str


class ApiEntitiesPackagesDebianDistribution(TypedDict, total=False):
    architectures: list
    codename: str
    components: list
    description: str
    id: int
    label: str
    origin: str
    suite: str
    valid_time_duration_seconds: int
    version: str


class ApiEntitiesPackagesDebianDistributionLoadMatchRequired(TypedDict):
    id: str


class ApiEntitiesPackagesDebianDistributionLoadMatch(ApiEntitiesPackagesDebianDistributionLoadMatchRequired, total=False):
    group_id: str
    project_id: str


class ApiEntitiesPackagesDebianDistributionListMatchRequired(TypedDict):
    project_id: str


class ApiEntitiesPackagesDebianDistributionListMatch(ApiEntitiesPackagesDebianDistributionListMatchRequired, total=False):
    architecture: Any
    codename: Any
    component: Any
    description: str
    label: str
    origin: Any
    page: int
    per_page: int
    suite: Any
    valid_time_duration_second: Any
    version: Any


class ApiEntitiesPackagesDebianDistributionCreateDataRequired(TypedDict):
    project_id: str
    post_api_v4_projects_id_debian_distribution: dict


class ApiEntitiesPackagesDebianDistributionCreateData(ApiEntitiesPackagesDebianDistributionCreateDataRequired, total=False):
    architectures: list
    codename: str
    components: list
    description: str
    id: int
    label: str
    origin: str
    suite: str
    valid_time_duration_seconds: int
    version: str


class ApiEntitiesPackagesDebianDistributionUpdateDataRequired(TypedDict):
    id: str


class ApiEntitiesPackagesDebianDistributionUpdateData(ApiEntitiesPackagesDebianDistributionUpdateDataRequired, total=False):
    group_id: str
    put_api_v4_groups_id_debian_distributions_codename: dict
    project_id: str
    put_api_v4_projects_id_debian_distributions_codename: dict
    architectures: list
    codename: str
    components: list
    description: str
    label: str
    origin: str
    suite: str
    valid_time_duration_seconds: int
    version: str


class ApiEntitiesPagesDomain(TypedDict, total=False):
    auto_ssl_enabled: str
    certificate: str
    certificate_text: str
    domain: str
    enabled_until: str
    expired: str
    id: str
    subject: str
    url: str
    verification_code: str
    verified: bool


class ApiEntitiesPagesDomainLoadMatch(TypedDict):
    id: str
    project_id: str


class ApiEntitiesPagesDomainListMatchRequired(TypedDict):
    project_id: str


class ApiEntitiesPagesDomainListMatch(ApiEntitiesPagesDomainListMatchRequired, total=False):
    page: int
    per_page: int


class ApiEntitiesPagesDomainCreateDataRequired(TypedDict):
    project_id: str
    post_api_v4_projects_id_pages_domain: dict


class ApiEntitiesPagesDomainCreateData(ApiEntitiesPagesDomainCreateDataRequired, total=False):
    auto_ssl_enabled: str
    certificate: str
    certificate_text: str
    domain: str
    enabled_until: str
    expired: str
    id: str
    subject: str
    url: str
    verification_code: str
    verified: bool


class ApiEntitiesPagesDomainUpdateDataRequired(TypedDict):
    domain_id: str
    project_id: str


class ApiEntitiesPagesDomainUpdateData(ApiEntitiesPagesDomainUpdateDataRequired, total=False):
    auto_ssl_enabled: str
    certificate: str
    certificate_text: str
    domain: str
    enabled_until: str
    expired: str
    id: str
    subject: str
    url: str
    verification_code: str
    verified: bool


class ApiEntitiesPagesDomainBasic(TypedDict, total=False):
    expiration: str
    expired: str


class ApiEntitiesPagesDomainBasicLoadMatch(TypedDict, total=False):
    page: int
    per_page: int


class ApiEntitiesPersonalAccessToken(TypedDict, total=False):
    active: bool
    created_at: str
    description: str
    expires_at: str
    id: int
    last_used_at: str
    name: str
    revoked: bool
    scopes: list
    user_id: int


class ApiEntitiesPersonalAccessTokenListMatch(TypedDict, total=False):
    min_access_level: Any
    page: int
    per_page: int


class ApiEntitiesPersonalAccessTokenWithLastUsedIp(TypedDict, total=False):
    active: bool
    created_at: str
    description: str
    expires_at: str
    id: int
    last_used_at: str
    last_used_ips: list
    name: str
    revoked: bool
    scopes: list
    user_id: int


class ApiEntitiesPersonalAccessTokenWithLastUsedIpLoadMatch(TypedDict):
    id: str


class ApiEntitiesPersonalAccessTokenWithLastUsedIpListMatch(TypedDict, total=False):
    created_after: Any
    created_before: Any
    expires_after: Any
    expires_before: Any
    last_used_after: Any
    last_used_before: Any
    page: int
    per_page: int
    revoked: Any
    search: Any
    sort: Any
    state: Any
    user_id: str


class ApiEntitiesPersonalAccessTokenWithToken(TypedDict, total=False):
    active: bool
    created_at: str
    description: str
    expires_at: str
    id: int
    last_used_at: str
    name: str
    revoked: bool
    scopes: list
    token: str
    user_id: int


class ApiEntitiesPersonalAccessTokenWithTokenCreateDataRequired(TypedDict):
    personal_access_token_id: str
    post_api_v4_personal_access_tokens_id_rotate: dict


class ApiEntitiesPersonalAccessTokenWithTokenCreateData(ApiEntitiesPersonalAccessTokenWithTokenCreateDataRequired, total=False):
    active: bool
    created_at: str
    description: str
    expires_at: str
    id: int
    last_used_at: str
    name: str
    revoked: bool
    scopes: list
    token: str
    user_id: int


class ApiEntitiesPersonalSnippet(TypedDict, total=False):
    author: dict
    created_at: str
    description: str
    file_name: str
    files: list
    http_url_to_repo: str
    id: int
    imported: bool
    imported_from: str
    project_id: int
    raw_url: str
    repository_storage: str
    ssh_url_to_repo: str
    title: str
    updated_at: str
    visibility: str
    web_url: str


class ApiEntitiesPersonalSnippetLoadMatch(TypedDict):
    id: str


class ApiEntitiesPersonalSnippetListMatch(TypedDict, total=False):
    created_after: Any
    created_before: Any
    page: int
    per_page: int


class ApiEntitiesPersonalSnippetCreateDataRequired(TypedDict):
    post_api_v4_snippet: dict


class ApiEntitiesPersonalSnippetCreateData(ApiEntitiesPersonalSnippetCreateDataRequired, total=False):
    author: dict
    created_at: str
    description: str
    file_name: str
    files: list
    http_url_to_repo: str
    id: int
    imported: bool
    imported_from: str
    project_id: int
    raw_url: str
    repository_storage: str
    ssh_url_to_repo: str
    title: str
    updated_at: str
    visibility: str
    web_url: str


class ApiEntitiesPersonalSnippetUpdateDataRequired(TypedDict):
    id: str
    put_api_v4_snippets_id: dict


class ApiEntitiesPersonalSnippetUpdateData(ApiEntitiesPersonalSnippetUpdateDataRequired, total=False):
    author: dict
    created_at: str
    description: str
    file_name: str
    files: list
    http_url_to_repo: str
    imported: bool
    imported_from: str
    project_id: int
    raw_url: str
    repository_storage: str
    ssh_url_to_repo: str
    title: str
    updated_at: str
    visibility: str
    web_url: str


class ApiEntitiesPlanLimit(TypedDict):
    pass


class ApiEntitiesPlanLimitLoadMatch(TypedDict, total=False):
    plan_name: Any


class ApiEntitiesPlanLimitUpdateData(TypedDict):
    put_api_v4_application_plan_limit: dict


class ApiEntitiesProject(TypedDict, total=False):
    allow_merge_on_skipped_pipeline: bool
    allow_pipeline_trigger_approve_deployment: bool
    analytics_access_level: str
    approvals_before_merge: str
    archived: bool
    auto_cancel_pending_pipelines: str
    auto_devops_deploy_strategy: str
    auto_devops_enabled: bool
    auto_duo_code_review_enabled: str
    autoclose_referenced_issues: bool
    avatar_url: str
    build_git_strategy: str
    build_timeout: int
    builds_access_level: str
    can_create_merge_request_in: bool
    ci_allow_fork_pipelines_to_run_in_parent_project: bool
    ci_config_path: str
    ci_default_git_depth: int
    ci_delete_pipelines_in_seconds: int
    ci_forward_deployment_enabled: bool
    ci_forward_deployment_rollback_allowed: bool
    ci_id_token_sub_claim_components: list
    ci_job_token_scope_enabled: bool
    ci_pipeline_variables_minimum_override_role: str
    ci_push_repository_for_job_token_allowed: bool
    ci_restrict_pipeline_cancellation_role: str
    ci_separated_caches: bool
    compliance_frameworks: str
    container_expiration_policy: dict
    container_registry_access_level: str
    container_registry_enabled: bool
    container_registry_image_prefix: str
    created_at: str
    creator_id: int
    custom_attributes: dict
    default_branch: str
    description: str
    description_html: str
    duo_remote_flows_enabled: str
    emails_disabled: bool
    emails_enabled: bool
    empty_repo: bool
    enforce_auth_checks_on_uploads: bool
    environments_access_level: str
    external_authorization_classification_label: str
    feature_flags_access_level: str
    forked_from_project: dict
    forking_access_level: str
    forks_count: int
    group_runners_enabled: bool
    http_url_to_repo: str
    id: int
    import_error: str
    import_status: str
    import_type: str
    import_url: str
    infrastructure_access_level: str
    issue_branch_template: str
    issues_access_level: str
    issues_enabled: bool
    issues_template: str
    jobs_enabled: bool
    keep_latest_artifact: bool
    last_activity_at: str
    lfs_enabled: bool
    license: dict
    license_url: str
    links: dict
    marked_for_deletion_at: str
    marked_for_deletion_on: str
    max_artifacts_size: int
    merge_commit_template: str
    merge_method: str
    merge_pipelines_enabled: str
    merge_request_title_regex: str
    merge_request_title_regex_description: str
    merge_requests_access_level: str
    merge_requests_enabled: bool
    merge_requests_template: str
    merge_trains_enabled: str
    merge_trains_skip_train_allowed: str
    mirror: str
    mirror_overwrites_diverged_branches: str
    mirror_trigger_builds: str
    mirror_user_id: str
    model_experiments_access_level: str
    model_registry_access_level: str
    monitor_access_level: str
    mr_default_target_self: bool
    name: str
    name_with_namespace: str
    namespace: dict
    only_allow_merge_if_all_discussions_are_resolved: bool
    only_allow_merge_if_all_status_checks_passed: str
    only_allow_merge_if_pipeline_succeeds: bool
    only_mirror_protected_branches: str
    open_issues_count: int
    owner: dict
    package_registry_access_level: str
    packages_enabled: bool
    pages_access_level: str
    path: str
    path_with_namespace: str
    pre_receive_secret_detection_enabled: bool
    prevent_merge_without_jira_issue: str
    printing_merge_request_link_enabled: bool
    public_jobs: bool
    readme_url: str
    releases_access_level: str
    remove_source_branch_after_merge: bool
    repository_access_level: str
    repository_object_format: str
    repository_storage: str
    request_access_enabled: bool
    requirements_access_level: str
    requirements_enabled: str
    resolve_outdated_diff_discussions: bool
    resource_group_default_process_mode: str
    restrict_user_defined_variables: bool
    runner_token_expiration_interval: int
    runners_token: str
    secret_push_protection_enabled: bool
    security_and_compliance_access_level: str
    security_and_compliance_enabled: str
    service_desk_address: str
    service_desk_enabled: bool
    shared_runners_enabled: bool
    shared_with_groups: list
    show_diff_preview_in_email: bool
    snippets_access_level: str
    snippets_enabled: bool
    spp_repository_pipeline_access: bool
    squash_commit_template: str
    squash_option: str
    ssh_url_to_repo: str
    star_count: int
    statistics: dict
    suggestion_commit_message: str
    tag_list: list
    topics: list
    updated_at: str
    visibility: str
    warn_about_potentially_unwanted_characters: bool
    web_based_commit_signing_enabled: str
    web_url: str
    wiki_access_level: str
    wiki_enabled: bool


class ApiEntitiesProjectListMatchRequired(TypedDict):
    project_id: str


class ApiEntitiesProjectListMatch(ApiEntitiesProjectListMatchRequired, total=False):
    active: bool
    archived: bool
    id_after: Any
    id_before: Any
    imported: Any
    include_hidden: Any
    include_pending_delete: Any
    last_activity_after: Any
    last_activity_before: Any
    marked_for_deletion_on: Any
    membership: Any
    min_access_level: Any
    order_by: Any
    owned: Any
    page: int
    per_page: int
    repository_checksum_failed: Any
    repository_storage: Any
    search: Any
    search_namespace: Any
    simple: Any
    sort: Any
    starred: Any
    topic: Any
    topic_id: str
    updated_after: Any
    updated_before: Any
    visibility: Any
    wiki_checksum_failed: Any
    with_custom_attribute: Any
    with_issues_enabled: Any
    with_merge_requests_enabled: Any
    with_programming_language: Any


class ApiEntitiesProjectCreateDataRequired(TypedDict):
    user_id: str
    post_api_v4_projects_user_user_id: dict


class ApiEntitiesProjectCreateData(ApiEntitiesProjectCreateDataRequired, total=False):
    allow_merge_on_skipped_pipeline: bool
    allow_pipeline_trigger_approve_deployment: bool
    analytics_access_level: str
    approvals_before_merge: str
    archived: bool
    auto_cancel_pending_pipelines: str
    auto_devops_deploy_strategy: str
    auto_devops_enabled: bool
    auto_duo_code_review_enabled: str
    autoclose_referenced_issues: bool
    avatar_url: str
    build_git_strategy: str
    build_timeout: int
    builds_access_level: str
    can_create_merge_request_in: bool
    ci_allow_fork_pipelines_to_run_in_parent_project: bool
    ci_config_path: str
    ci_default_git_depth: int
    ci_delete_pipelines_in_seconds: int
    ci_forward_deployment_enabled: bool
    ci_forward_deployment_rollback_allowed: bool
    ci_id_token_sub_claim_components: list
    ci_job_token_scope_enabled: bool
    ci_pipeline_variables_minimum_override_role: str
    ci_push_repository_for_job_token_allowed: bool
    ci_restrict_pipeline_cancellation_role: str
    ci_separated_caches: bool
    compliance_frameworks: str
    container_expiration_policy: dict
    container_registry_access_level: str
    container_registry_enabled: bool
    container_registry_image_prefix: str
    created_at: str
    creator_id: int
    custom_attributes: dict
    default_branch: str
    description: str
    description_html: str
    duo_remote_flows_enabled: str
    emails_disabled: bool
    emails_enabled: bool
    empty_repo: bool
    enforce_auth_checks_on_uploads: bool
    environments_access_level: str
    external_authorization_classification_label: str
    feature_flags_access_level: str
    forked_from_project: dict
    forking_access_level: str
    forks_count: int
    group_runners_enabled: bool
    http_url_to_repo: str
    id: int
    import_error: str
    import_status: str
    import_type: str
    import_url: str
    infrastructure_access_level: str
    issue_branch_template: str
    issues_access_level: str
    issues_enabled: bool
    issues_template: str
    jobs_enabled: bool
    keep_latest_artifact: bool
    last_activity_at: str
    lfs_enabled: bool
    license: dict
    license_url: str
    links: dict
    marked_for_deletion_at: str
    marked_for_deletion_on: str
    max_artifacts_size: int
    merge_commit_template: str
    merge_method: str
    merge_pipelines_enabled: str
    merge_request_title_regex: str
    merge_request_title_regex_description: str
    merge_requests_access_level: str
    merge_requests_enabled: bool
    merge_requests_template: str
    merge_trains_enabled: str
    merge_trains_skip_train_allowed: str
    mirror: str
    mirror_overwrites_diverged_branches: str
    mirror_trigger_builds: str
    mirror_user_id: str
    model_experiments_access_level: str
    model_registry_access_level: str
    monitor_access_level: str
    mr_default_target_self: bool
    name: str
    name_with_namespace: str
    namespace: dict
    only_allow_merge_if_all_discussions_are_resolved: bool
    only_allow_merge_if_all_status_checks_passed: str
    only_allow_merge_if_pipeline_succeeds: bool
    only_mirror_protected_branches: str
    open_issues_count: int
    owner: dict
    package_registry_access_level: str
    packages_enabled: bool
    pages_access_level: str
    path: str
    path_with_namespace: str
    pre_receive_secret_detection_enabled: bool
    prevent_merge_without_jira_issue: str
    printing_merge_request_link_enabled: bool
    public_jobs: bool
    readme_url: str
    releases_access_level: str
    remove_source_branch_after_merge: bool
    repository_access_level: str
    repository_object_format: str
    repository_storage: str
    request_access_enabled: bool
    requirements_access_level: str
    requirements_enabled: str
    resolve_outdated_diff_discussions: bool
    resource_group_default_process_mode: str
    restrict_user_defined_variables: bool
    runner_token_expiration_interval: int
    runners_token: str
    secret_push_protection_enabled: bool
    security_and_compliance_access_level: str
    security_and_compliance_enabled: str
    service_desk_address: str
    service_desk_enabled: bool
    shared_runners_enabled: bool
    shared_with_groups: list
    show_diff_preview_in_email: bool
    snippets_access_level: str
    snippets_enabled: bool
    spp_repository_pipeline_access: bool
    squash_commit_template: str
    squash_option: str
    ssh_url_to_repo: str
    star_count: int
    statistics: dict
    suggestion_commit_message: str
    tag_list: list
    topics: list
    updated_at: str
    visibility: str
    warn_about_potentially_unwanted_characters: bool
    web_based_commit_signing_enabled: str
    web_url: str
    wiki_access_level: str
    wiki_enabled: bool


class ApiEntitiesProjectUpdateDataRequired(TypedDict):
    id: str
    put_api_v4_projects_id: dict


class ApiEntitiesProjectUpdateData(ApiEntitiesProjectUpdateDataRequired, total=False):
    allow_merge_on_skipped_pipeline: bool
    allow_pipeline_trigger_approve_deployment: bool
    analytics_access_level: str
    approvals_before_merge: str
    archived: bool
    auto_cancel_pending_pipelines: str
    auto_devops_deploy_strategy: str
    auto_devops_enabled: bool
    auto_duo_code_review_enabled: str
    autoclose_referenced_issues: bool
    avatar_url: str
    build_git_strategy: str
    build_timeout: int
    builds_access_level: str
    can_create_merge_request_in: bool
    ci_allow_fork_pipelines_to_run_in_parent_project: bool
    ci_config_path: str
    ci_default_git_depth: int
    ci_delete_pipelines_in_seconds: int
    ci_forward_deployment_enabled: bool
    ci_forward_deployment_rollback_allowed: bool
    ci_id_token_sub_claim_components: list
    ci_job_token_scope_enabled: bool
    ci_pipeline_variables_minimum_override_role: str
    ci_push_repository_for_job_token_allowed: bool
    ci_restrict_pipeline_cancellation_role: str
    ci_separated_caches: bool
    compliance_frameworks: str
    container_expiration_policy: dict
    container_registry_access_level: str
    container_registry_enabled: bool
    container_registry_image_prefix: str
    created_at: str
    creator_id: int
    custom_attributes: dict
    default_branch: str
    description: str
    description_html: str
    duo_remote_flows_enabled: str
    emails_disabled: bool
    emails_enabled: bool
    empty_repo: bool
    enforce_auth_checks_on_uploads: bool
    environments_access_level: str
    external_authorization_classification_label: str
    feature_flags_access_level: str
    forked_from_project: dict
    forking_access_level: str
    forks_count: int
    group_runners_enabled: bool
    http_url_to_repo: str
    import_error: str
    import_status: str
    import_type: str
    import_url: str
    infrastructure_access_level: str
    issue_branch_template: str
    issues_access_level: str
    issues_enabled: bool
    issues_template: str
    jobs_enabled: bool
    keep_latest_artifact: bool
    last_activity_at: str
    lfs_enabled: bool
    license: dict
    license_url: str
    links: dict
    marked_for_deletion_at: str
    marked_for_deletion_on: str
    max_artifacts_size: int
    merge_commit_template: str
    merge_method: str
    merge_pipelines_enabled: str
    merge_request_title_regex: str
    merge_request_title_regex_description: str
    merge_requests_access_level: str
    merge_requests_enabled: bool
    merge_requests_template: str
    merge_trains_enabled: str
    merge_trains_skip_train_allowed: str
    mirror: str
    mirror_overwrites_diverged_branches: str
    mirror_trigger_builds: str
    mirror_user_id: str
    model_experiments_access_level: str
    model_registry_access_level: str
    monitor_access_level: str
    mr_default_target_self: bool
    name: str
    name_with_namespace: str
    namespace: dict
    only_allow_merge_if_all_discussions_are_resolved: bool
    only_allow_merge_if_all_status_checks_passed: str
    only_allow_merge_if_pipeline_succeeds: bool
    only_mirror_protected_branches: str
    open_issues_count: int
    owner: dict
    package_registry_access_level: str
    packages_enabled: bool
    pages_access_level: str
    path: str
    path_with_namespace: str
    pre_receive_secret_detection_enabled: bool
    prevent_merge_without_jira_issue: str
    printing_merge_request_link_enabled: bool
    public_jobs: bool
    readme_url: str
    releases_access_level: str
    remove_source_branch_after_merge: bool
    repository_access_level: str
    repository_object_format: str
    repository_storage: str
    request_access_enabled: bool
    requirements_access_level: str
    requirements_enabled: str
    resolve_outdated_diff_discussions: bool
    resource_group_default_process_mode: str
    restrict_user_defined_variables: bool
    runner_token_expiration_interval: int
    runners_token: str
    secret_push_protection_enabled: bool
    security_and_compliance_access_level: str
    security_and_compliance_enabled: str
    service_desk_address: str
    service_desk_enabled: bool
    shared_runners_enabled: bool
    shared_with_groups: list
    show_diff_preview_in_email: bool
    snippets_access_level: str
    snippets_enabled: bool
    spp_repository_pipeline_access: bool
    squash_commit_template: str
    squash_option: str
    ssh_url_to_repo: str
    star_count: int
    statistics: dict
    suggestion_commit_message: str
    tag_list: list
    topics: list
    updated_at: str
    visibility: str
    warn_about_potentially_unwanted_characters: bool
    web_based_commit_signing_enabled: str
    web_url: str
    wiki_access_level: str
    wiki_enabled: bool


class ApiEntitiesProjectDailyStatistic(TypedDict, total=False):
    days: list
    total: int


class ApiEntitiesProjectDailyStatisticLoadMatch(TypedDict):
    project_id: str


class ApiEntitiesProjectExportStatus(TypedDict, total=False):
    api_url: str
    web_url: str


class ApiEntitiesProjectExportStatusLoadMatch(TypedDict):
    project_id: str


class ApiEntitiesProjectGroupLink(TypedDict):
    pass


class ApiEntitiesProjectGroupLinkCreateData(TypedDict):
    project_id: str
    post_api_v4_projects_id_share: dict


class ApiEntitiesProjectHook(TypedDict, total=False):
    alert_status: Any
    branch_filter_strategy: str
    confidential_issues_events: bool
    confidential_note_events: bool
    created_at: str
    custom_headers: list
    custom_webhook_template: str
    deployment_events: bool
    description: str
    disabled_until: str
    emoji_events: bool
    enable_ssl_verification: bool
    feature_flag_events: bool
    id: str
    issues_events: bool
    job_events: bool
    merge_requests_events: bool
    milestone_events: bool
    name: str
    note_events: bool
    pipeline_events: bool
    project_id: str
    push_events: bool
    push_events_branch_filter: str
    releases_events: bool
    repository_update_events: bool
    resource_access_token_events: bool
    tag_push_events: bool
    url: str
    url_variables: list
    vulnerability_events: bool
    wiki_page_events: bool


class ApiEntitiesProjectHookLoadMatch(TypedDict):
    id: str
    project_id: str


class ApiEntitiesProjectHookListMatchRequired(TypedDict):
    project_id: str


class ApiEntitiesProjectHookListMatch(ApiEntitiesProjectHookListMatchRequired, total=False):
    page: int
    per_page: int


class ApiEntitiesProjectHookCreateDataRequired(TypedDict):
    project_id: str
    post_api_v4_projects_id_hook: dict


class ApiEntitiesProjectHookCreateData(ApiEntitiesProjectHookCreateDataRequired, total=False):
    alert_status: Any
    branch_filter_strategy: str
    confidential_issues_events: bool
    confidential_note_events: bool
    created_at: str
    custom_headers: list
    custom_webhook_template: str
    deployment_events: bool
    description: str
    disabled_until: str
    emoji_events: bool
    enable_ssl_verification: bool
    feature_flag_events: bool
    id: str
    issues_events: bool
    job_events: bool
    merge_requests_events: bool
    milestone_events: bool
    name: str
    note_events: bool
    pipeline_events: bool
    push_events: bool
    push_events_branch_filter: str
    releases_events: bool
    repository_update_events: bool
    resource_access_token_events: bool
    tag_push_events: bool
    url: str
    url_variables: list
    vulnerability_events: bool
    wiki_page_events: bool


class ApiEntitiesProjectHookUpdateDataRequired(TypedDict):
    id: str
    project_id: str
    put_api_v4_projects_id_hooks_hook_id: dict


class ApiEntitiesProjectHookUpdateData(ApiEntitiesProjectHookUpdateDataRequired, total=False):
    alert_status: Any
    branch_filter_strategy: str
    confidential_issues_events: bool
    confidential_note_events: bool
    created_at: str
    custom_headers: list
    custom_webhook_template: str
    deployment_events: bool
    description: str
    disabled_until: str
    emoji_events: bool
    enable_ssl_verification: bool
    feature_flag_events: bool
    issues_events: bool
    job_events: bool
    merge_requests_events: bool
    milestone_events: bool
    name: str
    note_events: bool
    pipeline_events: bool
    push_events: bool
    push_events_branch_filter: str
    releases_events: bool
    repository_update_events: bool
    resource_access_token_events: bool
    tag_push_events: bool
    url: str
    url_variables: list
    vulnerability_events: bool
    wiki_page_events: bool


class ApiEntitiesProjectImportStatus(TypedDict, total=False):
    created_at: str
    exception_class: str
    exception_message: str
    id: str
    line_number: int
    relation_name: str
    source: str


class ApiEntitiesProjectImportStatusListMatch(TypedDict):
    project_id: str


class ApiEntitiesProjectImportStatusCreateDataRequired(TypedDict):
    path: str


class ApiEntitiesProjectImportStatusCreateData(ApiEntitiesProjectImportStatusCreateDataRequired, total=False):
    file: Any
    file_etag: Any
    file_md5: Any
    file_name: Any
    file_path: Any
    file_remote_id: str
    file_remote_url: Any
    file_sha1: Any
    file_sha256: Any
    file_size: Any
    file_type: Any
    name: str
    namespace: Any
    override_params_allow_merge_on_skipped_pipeline: Any
    override_params_analytics_access_level: Any
    override_params_approvals_before_merge: Any
    override_params_auto_cancel_pending_pipeline: Any
    override_params_auto_devops_deploy_strategy: Any
    override_params_auto_devops_enabled: Any
    override_params_auto_duo_code_review_enabled: Any
    override_params_autoclose_referenced_issue: Any
    override_params_avatar: Any
    override_params_build_git_strategy: Any
    override_params_build_timeout: Any
    override_params_builds_access_level: Any
    override_params_ci_config_path: Any
    override_params_container_expiration_policy_attributes_cadence: Any
    override_params_container_expiration_policy_attributes_enabled: Any
    override_params_container_expiration_policy_attributes_keep_n: Any
    override_params_container_expiration_policy_attributes_name_regex: Any
    override_params_container_expiration_policy_attributes_name_regex_keep: Any
    override_params_container_expiration_policy_attributes_older_than: Any
    override_params_container_registry_access_level: Any
    override_params_container_registry_enabled: Any
    override_params_description: Any
    override_params_duo_remote_flows_enabled: Any
    override_params_emails_disabled: Any
    override_params_emails_enabled: Any
    override_params_enforce_auth_checks_on_upload: Any
    override_params_environments_access_level: Any
    override_params_external_authorization_classification_label: Any
    override_params_feature_flags_access_level: Any
    override_params_forking_access_level: Any
    override_params_group_runners_enabled: Any
    override_params_infrastructure_access_level: Any
    override_params_issue_branch_template: Any
    override_params_issues_access_level: Any
    override_params_issues_enabled: Any
    override_params_jobs_enabled: Any
    override_params_lfs_enabled: Any
    override_params_merge_commit_template: Any
    override_params_merge_method: Any
    override_params_merge_request_title_regex: Any
    override_params_merge_request_title_regex_description: Any
    override_params_merge_requests_access_level: Any
    override_params_merge_requests_enabled: Any
    override_params_mirror: Any
    override_params_mirror_trigger_build: Any
    override_params_model_experiments_access_level: Any
    override_params_model_registry_access_level: Any
    override_params_monitor_access_level: Any
    override_params_mr_default_target_self: Any
    override_params_only_allow_merge_if_all_discussions_are_resolved: Any
    override_params_only_allow_merge_if_all_status_checks_passed: Any
    override_params_only_allow_merge_if_pipeline_succeed: Any
    override_params_package_registry_access_level: Any
    override_params_packages_enabled: Any
    override_params_pages_access_level: Any
    override_params_prevent_merge_without_jira_issue: Any
    override_params_printing_merge_request_link_enabled: Any
    override_params_public_build: Any
    override_params_public_job: Any
    override_params_releases_access_level: Any
    override_params_remove_source_branch_after_merge: Any
    override_params_repository_access_level: Any
    override_params_repository_storage: Any
    override_params_request_access_enabled: Any
    override_params_requirements_access_level: Any
    override_params_resolve_outdated_diff_discussion: Any
    override_params_resource_group_default_process_mode: Any
    override_params_security_and_compliance_access_level: Any
    override_params_service_desk_enabled: Any
    override_params_shared_runners_enabled: Any
    override_params_show_default_award_emoji: Any
    override_params_show_diff_preview_in_email: Any
    override_params_snippets_access_level: Any
    override_params_snippets_enabled: Any
    override_params_spp_repository_pipeline_access: Any
    override_params_squash_commit_template: Any
    override_params_squash_option: Any
    override_params_suggestion_commit_message: Any
    override_params_tag_list: Any
    override_params_topic: Any
    override_params_visibility: Any
    override_params_warn_about_potentially_unwanted_character: Any
    override_params_wiki_access_level: Any
    override_params_wiki_enabled: Any
    overwrite: Any
    access_key_id: str
    bucket_name: Any
    file_key: Any
    region: Any
    secret_access_key: Any
    url: str
    created_at: str
    exception_class: str
    exception_message: str
    id: str
    line_number: int
    relation_name: str
    source: str


class ApiEntitiesProjectJobTokenScope(TypedDict, total=False):
    inbound_enabled: bool
    outbound_enabled: bool


class ApiEntitiesProjectJobTokenScopeLoadMatch(TypedDict):
    project_id: str


class ApiEntitiesProjectRepositoryStorage(TypedDict, total=False):
    created_at: str
    disk_path: str
    project_id: int
    repository_storage: str


class ApiEntitiesProjectRepositoryStorageLoadMatch(TypedDict):
    project_id: str


class ApiEntitiesProjectSnippet(TypedDict, total=False):
    author: dict
    created_at: str
    description: str
    file_name: str
    files: list
    http_url_to_repo: str
    id: int
    imported: bool
    imported_from: str
    project_id: int
    raw_url: str
    repository_storage: str
    ssh_url_to_repo: str
    title: str
    updated_at: str
    visibility: str
    web_url: str


class ApiEntitiesProjectSnippetLoadMatch(TypedDict):
    id: str
    project_id: str


class ApiEntitiesProjectSnippetListMatchRequired(TypedDict):
    project_id: str


class ApiEntitiesProjectSnippetListMatch(ApiEntitiesProjectSnippetListMatchRequired, total=False):
    file_id: str
    file_path: Any
    snippet_id: str
    page: int
    per_page: int


class ApiEntitiesProjectSnippetCreateDataRequired(TypedDict):
    project_id: str
    post_api_v4_projects_id_snippet: dict


class ApiEntitiesProjectSnippetCreateData(ApiEntitiesProjectSnippetCreateDataRequired, total=False):
    author: dict
    created_at: str
    description: str
    file_name: str
    files: list
    http_url_to_repo: str
    id: int
    imported: bool
    imported_from: str
    raw_url: str
    repository_storage: str
    ssh_url_to_repo: str
    title: str
    updated_at: str
    visibility: str
    web_url: str


class ApiEntitiesProjectSnippetUpdateDataRequired(TypedDict):
    id: str
    project_id: str
    put_api_v4_projects_id_snippets_snippet_id: dict


class ApiEntitiesProjectSnippetUpdateData(ApiEntitiesProjectSnippetUpdateDataRequired, total=False):
    author: dict
    created_at: str
    description: str
    file_name: str
    files: list
    http_url_to_repo: str
    imported: bool
    imported_from: str
    raw_url: str
    repository_storage: str
    ssh_url_to_repo: str
    title: str
    updated_at: str
    visibility: str
    web_url: str


class ApiEntitiesProjectUpload(TypedDict):
    pass


class ApiEntitiesProjectUploadCreateData(TypedDict):
    project_id: str
    post_api_v4_projects_id_upload: dict


class ApiEntitiesProjectWithAccess(TypedDict, total=False):
    allow_merge_on_skipped_pipeline: bool
    allow_pipeline_trigger_approve_deployment: bool
    analytics_access_level: str
    approvals_before_merge: str
    archived: bool
    auto_cancel_pending_pipelines: str
    auto_devops_deploy_strategy: str
    auto_devops_enabled: bool
    auto_duo_code_review_enabled: str
    autoclose_referenced_issues: bool
    avatar_url: str
    build_git_strategy: str
    build_timeout: int
    builds_access_level: str
    can_create_merge_request_in: bool
    ci_allow_fork_pipelines_to_run_in_parent_project: bool
    ci_config_path: str
    ci_default_git_depth: int
    ci_delete_pipelines_in_seconds: int
    ci_forward_deployment_enabled: bool
    ci_forward_deployment_rollback_allowed: bool
    ci_id_token_sub_claim_components: list
    ci_job_token_scope_enabled: bool
    ci_pipeline_variables_minimum_override_role: str
    ci_push_repository_for_job_token_allowed: bool
    ci_restrict_pipeline_cancellation_role: str
    ci_separated_caches: bool
    compliance_frameworks: str
    container_expiration_policy: dict
    container_registry_access_level: str
    container_registry_enabled: bool
    container_registry_image_prefix: str
    created_at: str
    creator_id: int
    custom_attributes: dict
    default_branch: str
    description: str
    description_html: str
    duo_remote_flows_enabled: str
    emails_disabled: bool
    emails_enabled: bool
    empty_repo: bool
    enforce_auth_checks_on_uploads: bool
    environments_access_level: str
    external_authorization_classification_label: str
    feature_flags_access_level: str
    forked_from_project: dict
    forking_access_level: str
    forks_count: int
    group_runners_enabled: bool
    http_url_to_repo: str
    id: int
    import_error: str
    import_status: str
    import_type: str
    import_url: str
    infrastructure_access_level: str
    issue_branch_template: str
    issues_access_level: str
    issues_enabled: bool
    issues_template: str
    jobs_enabled: bool
    keep_latest_artifact: bool
    last_activity_at: str
    lfs_enabled: bool
    license: dict
    license_url: str
    links: dict
    marked_for_deletion_at: str
    marked_for_deletion_on: str
    max_artifacts_size: int
    merge_commit_template: str
    merge_method: str
    merge_pipelines_enabled: str
    merge_request_title_regex: str
    merge_request_title_regex_description: str
    merge_requests_access_level: str
    merge_requests_enabled: bool
    merge_requests_template: str
    merge_trains_enabled: str
    merge_trains_skip_train_allowed: str
    mirror: str
    mirror_overwrites_diverged_branches: str
    mirror_trigger_builds: str
    mirror_user_id: str
    model_experiments_access_level: str
    model_registry_access_level: str
    monitor_access_level: str
    mr_default_target_self: bool
    name: str
    name_with_namespace: str
    namespace: dict
    only_allow_merge_if_all_discussions_are_resolved: bool
    only_allow_merge_if_all_status_checks_passed: str
    only_allow_merge_if_pipeline_succeeds: bool
    only_mirror_protected_branches: str
    open_issues_count: int
    owner: dict
    package_registry_access_level: str
    packages_enabled: bool
    pages_access_level: str
    path: str
    path_with_namespace: str
    permissions: dict
    pre_receive_secret_detection_enabled: bool
    prevent_merge_without_jira_issue: str
    printing_merge_request_link_enabled: bool
    public_jobs: bool
    readme_url: str
    releases_access_level: str
    remove_source_branch_after_merge: bool
    repository_access_level: str
    repository_object_format: str
    repository_storage: str
    request_access_enabled: bool
    requirements_access_level: str
    requirements_enabled: str
    resolve_outdated_diff_discussions: bool
    resource_group_default_process_mode: str
    restrict_user_defined_variables: bool
    runner_token_expiration_interval: int
    runners_token: str
    secret_push_protection_enabled: bool
    security_and_compliance_access_level: str
    security_and_compliance_enabled: str
    service_desk_address: str
    service_desk_enabled: bool
    shared_runners_enabled: bool
    shared_with_groups: list
    show_diff_preview_in_email: bool
    snippets_access_level: str
    snippets_enabled: bool
    spp_repository_pipeline_access: bool
    squash_commit_template: str
    squash_option: str
    ssh_url_to_repo: str
    star_count: int
    statistics: dict
    suggestion_commit_message: str
    tag_list: list
    topics: list
    updated_at: str
    visibility: str
    warn_about_potentially_unwanted_characters: bool
    web_based_commit_signing_enabled: str
    web_url: str
    wiki_access_level: str
    wiki_enabled: bool


class ApiEntitiesProjectWithAccessLoadMatchRequired(TypedDict):
    id: str


class ApiEntitiesProjectWithAccessLoadMatch(ApiEntitiesProjectWithAccessLoadMatchRequired, total=False):
    license: Any
    statistic: Any
    with_custom_attribute: Any


class ApiEntitiesProjectWithAccessCreateDataRequired(TypedDict):
    project_id: str


class ApiEntitiesProjectWithAccessCreateData(ApiEntitiesProjectWithAccessCreateDataRequired, total=False):
    post_api_v4_projects_id_housekeeping: dict
    allow_merge_on_skipped_pipeline: bool
    allow_pipeline_trigger_approve_deployment: bool
    analytics_access_level: str
    approvals_before_merge: str
    archived: bool
    auto_cancel_pending_pipelines: str
    auto_devops_deploy_strategy: str
    auto_devops_enabled: bool
    auto_duo_code_review_enabled: str
    autoclose_referenced_issues: bool
    avatar_url: str
    build_git_strategy: str
    build_timeout: int
    builds_access_level: str
    can_create_merge_request_in: bool
    ci_allow_fork_pipelines_to_run_in_parent_project: bool
    ci_config_path: str
    ci_default_git_depth: int
    ci_delete_pipelines_in_seconds: int
    ci_forward_deployment_enabled: bool
    ci_forward_deployment_rollback_allowed: bool
    ci_id_token_sub_claim_components: list
    ci_job_token_scope_enabled: bool
    ci_pipeline_variables_minimum_override_role: str
    ci_push_repository_for_job_token_allowed: bool
    ci_restrict_pipeline_cancellation_role: str
    ci_separated_caches: bool
    compliance_frameworks: str
    container_expiration_policy: dict
    container_registry_access_level: str
    container_registry_enabled: bool
    container_registry_image_prefix: str
    created_at: str
    creator_id: int
    custom_attributes: dict
    default_branch: str
    description: str
    description_html: str
    duo_remote_flows_enabled: str
    emails_disabled: bool
    emails_enabled: bool
    empty_repo: bool
    enforce_auth_checks_on_uploads: bool
    environments_access_level: str
    external_authorization_classification_label: str
    feature_flags_access_level: str
    forked_from_project: dict
    forking_access_level: str
    forks_count: int
    group_runners_enabled: bool
    http_url_to_repo: str
    id: int
    import_error: str
    import_status: str
    import_type: str
    import_url: str
    infrastructure_access_level: str
    issue_branch_template: str
    issues_access_level: str
    issues_enabled: bool
    issues_template: str
    jobs_enabled: bool
    keep_latest_artifact: bool
    last_activity_at: str
    lfs_enabled: bool
    license: dict
    license_url: str
    links: dict
    marked_for_deletion_at: str
    marked_for_deletion_on: str
    max_artifacts_size: int
    merge_commit_template: str
    merge_method: str
    merge_pipelines_enabled: str
    merge_request_title_regex: str
    merge_request_title_regex_description: str
    merge_requests_access_level: str
    merge_requests_enabled: bool
    merge_requests_template: str
    merge_trains_enabled: str
    merge_trains_skip_train_allowed: str
    mirror: str
    mirror_overwrites_diverged_branches: str
    mirror_trigger_builds: str
    mirror_user_id: str
    model_experiments_access_level: str
    model_registry_access_level: str
    monitor_access_level: str
    mr_default_target_self: bool
    name: str
    name_with_namespace: str
    namespace: dict
    only_allow_merge_if_all_discussions_are_resolved: bool
    only_allow_merge_if_all_status_checks_passed: str
    only_allow_merge_if_pipeline_succeeds: bool
    only_mirror_protected_branches: str
    open_issues_count: int
    owner: dict
    package_registry_access_level: str
    packages_enabled: bool
    pages_access_level: str
    path: str
    path_with_namespace: str
    permissions: dict
    pre_receive_secret_detection_enabled: bool
    prevent_merge_without_jira_issue: str
    printing_merge_request_link_enabled: bool
    public_jobs: bool
    readme_url: str
    releases_access_level: str
    remove_source_branch_after_merge: bool
    repository_access_level: str
    repository_object_format: str
    repository_storage: str
    request_access_enabled: bool
    requirements_access_level: str
    requirements_enabled: str
    resolve_outdated_diff_discussions: bool
    resource_group_default_process_mode: str
    restrict_user_defined_variables: bool
    runner_token_expiration_interval: int
    runners_token: str
    secret_push_protection_enabled: bool
    security_and_compliance_access_level: str
    security_and_compliance_enabled: str
    service_desk_address: str
    service_desk_enabled: bool
    shared_runners_enabled: bool
    shared_with_groups: list
    show_diff_preview_in_email: bool
    snippets_access_level: str
    snippets_enabled: bool
    spp_repository_pipeline_access: bool
    squash_commit_template: str
    squash_option: str
    ssh_url_to_repo: str
    star_count: int
    statistics: dict
    suggestion_commit_message: str
    tag_list: list
    topics: list
    updated_at: str
    visibility: str
    warn_about_potentially_unwanted_characters: bool
    web_based_commit_signing_enabled: str
    web_url: str
    wiki_access_level: str
    wiki_enabled: bool


class ApiEntitiesProjectsContainerRegistryProtectionRule(TypedDict, total=False):
    id: int
    minimum_access_level_for_delete: str
    minimum_access_level_for_push: str
    project_id: int
    repository_path_pattern: str


class ApiEntitiesProjectsContainerRegistryProtectionRuleListMatch(TypedDict):
    project_id: str


class ApiEntitiesProjectsContainerRegistryProtectionRuleCreateDataRequired(TypedDict):
    project_id: str
    post_api_v4_projects_id_registry_protection_repository_rule: dict


class ApiEntitiesProjectsContainerRegistryProtectionRuleCreateData(ApiEntitiesProjectsContainerRegistryProtectionRuleCreateDataRequired, total=False):
    id: int
    minimum_access_level_for_delete: str
    minimum_access_level_for_push: str
    repository_path_pattern: str


class ApiEntitiesProjectsContainerRegistryProtectionRuleUpdateDataRequired(TypedDict):
    id: str
    project_id: str
    patch_api_v4_projects_id_registry_protection_repository_rules_protection_rule_id: dict


class ApiEntitiesProjectsContainerRegistryProtectionRuleUpdateData(ApiEntitiesProjectsContainerRegistryProtectionRuleUpdateDataRequired, total=False):
    minimum_access_level_for_delete: str
    minimum_access_level_for_push: str
    repository_path_pattern: str


class ApiEntitiesProjectsPackagesProtectionRule(TypedDict, total=False):
    id: int
    minimum_access_level_for_delete: str
    minimum_access_level_for_push: str
    package_name_pattern: str
    package_type: str
    project_id: int


class ApiEntitiesProjectsPackagesProtectionRuleListMatch(TypedDict):
    project_id: str


class ApiEntitiesProjectsPackagesProtectionRuleCreateDataRequired(TypedDict):
    project_id: str
    post_api_v4_projects_id_packages_protection_rule: dict


class ApiEntitiesProjectsPackagesProtectionRuleCreateData(ApiEntitiesProjectsPackagesProtectionRuleCreateDataRequired, total=False):
    id: int
    minimum_access_level_for_delete: str
    minimum_access_level_for_push: str
    package_name_pattern: str
    package_type: str


class ApiEntitiesProjectsPackagesProtectionRuleUpdateDataRequired(TypedDict):
    id: str
    project_id: str
    patch_api_v4_projects_id_packages_protection_rules_package_protection_rule_id: dict


class ApiEntitiesProjectsPackagesProtectionRuleUpdateData(ApiEntitiesProjectsPackagesProtectionRuleUpdateDataRequired, total=False):
    minimum_access_level_for_delete: str
    minimum_access_level_for_push: str
    package_name_pattern: str
    package_type: str


class ApiEntitiesProjectsTopic(TypedDict, total=False):
    avatar_url: str
    description: str
    id: str
    name: str
    organization_id: str
    title: str
    total_projects_count: str


class ApiEntitiesProjectsTopicLoadMatch(TypedDict):
    id: str


class ApiEntitiesProjectsTopicCreateDataRequired(TypedDict):
    post_api_v4_topic: dict


class ApiEntitiesProjectsTopicCreateData(ApiEntitiesProjectsTopicCreateDataRequired, total=False):
    avatar_url: str
    description: str
    id: str
    name: str
    organization_id: str
    title: str
    total_projects_count: str


class ApiEntitiesProjectsTopicUpdateDataRequired(TypedDict):
    id: str
    put_api_v4_topics_id: dict


class ApiEntitiesProjectsTopicUpdateData(ApiEntitiesProjectsTopicUpdateDataRequired, total=False):
    avatar_url: str
    description: str
    name: str
    organization_id: str
    title: str
    total_projects_count: str


class ApiEntitiesProtectedBranch(TypedDict, total=False):
    allow_force_push: bool
    code_owner_approval_required: bool
    id: int
    inherited: bool
    merge_access_levels: list
    name: str
    push_access_levels: list
    unprotect_access_levels: list


class ApiEntitiesProtectedBranchLoadMatch(TypedDict):
    id: str
    project_id: str


class ApiEntitiesProtectedBranchListMatchRequired(TypedDict):
    project_id: str


class ApiEntitiesProtectedBranchListMatch(ApiEntitiesProtectedBranchListMatchRequired, total=False):
    page: int
    per_page: int
    search: Any


class ApiEntitiesProtectedBranchCreateDataRequired(TypedDict):
    project_id: str
    post_api_v4_projects_id_protected_branch: dict


class ApiEntitiesProtectedBranchCreateData(ApiEntitiesProtectedBranchCreateDataRequired, total=False):
    allow_force_push: bool
    code_owner_approval_required: bool
    id: int
    inherited: bool
    merge_access_levels: list
    name: str
    push_access_levels: list
    unprotect_access_levels: list


class ApiEntitiesProtectedBranchUpdateDataRequired(TypedDict):
    id: str
    project_id: str
    patch_api_v4_projects_id_protected_branches_name: dict


class ApiEntitiesProtectedBranchUpdateData(ApiEntitiesProtectedBranchUpdateDataRequired, total=False):
    allow_force_push: bool
    code_owner_approval_required: bool
    inherited: bool
    merge_access_levels: list
    name: str
    push_access_levels: list
    unprotect_access_levels: list


class ApiEntitiesProtectedTag(TypedDict, total=False):
    access_level: int
    access_level_description: str
    create_access_levels: dict
    deploy_key_id: int
    group_id: int
    id: int
    name: str
    user_id: int


class ApiEntitiesProtectedTagLoadMatch(TypedDict):
    id: str
    project_id: str


class ApiEntitiesProtectedTagListMatchRequired(TypedDict):
    project_id: str


class ApiEntitiesProtectedTagListMatch(ApiEntitiesProtectedTagListMatchRequired, total=False):
    page: int
    per_page: int


class ApiEntitiesProtectedTagCreateDataRequired(TypedDict):
    project_id: str
    post_api_v4_projects_id_protected_tag: dict


class ApiEntitiesProtectedTagCreateData(ApiEntitiesProtectedTagCreateDataRequired, total=False):
    access_level: int
    access_level_description: str
    create_access_levels: dict
    deploy_key_id: int
    group_id: int
    id: int
    name: str
    user_id: int


class ApiEntitiesPublicGroupDetail(TypedDict, total=False):
    avatar_url: str
    full_name: str
    full_path: str
    id: str
    name: str
    web_url: str


class ApiEntitiesPublicGroupDetailListMatchRequired(TypedDict):
    project_id: str


class ApiEntitiesPublicGroupDetailListMatch(ApiEntitiesPublicGroupDetailListMatchRequired, total=False):
    page: int
    per_page: int
    search: Any
    shared_min_access_level: Any
    shared_visible_only: Any
    skip_group: Any
    with_shared: Any


class ApiEntitiesRelatedIssue(TypedDict, total=False):
    assignee: dict
    assignees: dict
    author: dict
    blocking_issues_count: str
    closed_at: str
    closed_by: dict
    confidential: bool
    created_at: str
    description: str
    discussion_locked: bool
    downvotes: str
    due_date: str
    epic: dict
    epic_iid: str
    has_tasks: bool
    health_status: str
    id: int
    iid: int
    imported: str
    imported_from: str
    issue_link_id: str
    issue_type: str
    iteration: dict
    labels: list
    link_created_at: str
    link_type: str
    link_updated_at: str
    links: dict
    merge_requests_count: str
    milestone: dict
    moved_to_id: str
    project_id: int
    references: dict
    service_desk_reply_to: str
    severity: str
    state: str
    subscribed: str
    task_completion_status: str
    task_status: str
    time_stats: dict
    title: str
    type: str
    updated_at: str
    upvotes: str
    user_notes_count: str
    web_url: str
    weight: str


class ApiEntitiesRelatedIssueListMatch(TypedDict):
    issue_id: str
    project_id: str


class ApiEntitiesRelationImportTracker(TypedDict):
    pass


class ApiEntitiesRelationImportTrackerCreateDataRequired(TypedDict):
    file: Any
    path: str
    relation: Any


class ApiEntitiesRelationImportTrackerCreateData(ApiEntitiesRelationImportTrackerCreateDataRequired, total=False):
    file_etag: Any
    file_md5: Any
    file_name: Any
    file_path: Any
    file_remote_id: str
    file_remote_url: Any
    file_sha1: Any
    file_sha256: Any
    file_size: Any
    file_type: Any


class ApiEntitiesRelease(TypedDict, total=False):
    assets: dict
    author: dict
    commit: dict
    commit_path: str
    created_at: str
    description: str
    description_html: str
    evidences: dict
    id: str
    links: dict
    milestones: dict
    name: str
    released_at: str
    tag_name: str
    tag_path: str
    upcoming_release: bool


class ApiEntitiesReleaseLoadMatchRequired(TypedDict):
    id: str
    project_id: str


class ApiEntitiesReleaseLoadMatch(ApiEntitiesReleaseLoadMatchRequired, total=False):
    include_html_description: Any


class ApiEntitiesReleaseListMatchRequired(TypedDict):
    project_id: str


class ApiEntitiesReleaseListMatch(ApiEntitiesReleaseListMatchRequired, total=False):
    include_html_description: Any
    order_by: Any
    page: int
    per_page: int
    sort: Any
    updated_after: Any
    updated_before: Any


class ApiEntitiesReleaseCreateDataRequired(TypedDict):
    project_id: str


class ApiEntitiesReleaseCreateData(ApiEntitiesReleaseCreateDataRequired, total=False):
    post_api_v4_projects_id_release: dict
    tag_name: Any
    assets: dict
    author: dict
    commit: dict
    commit_path: str
    created_at: str
    description: str
    description_html: str
    evidences: dict
    id: str
    links: dict
    milestones: dict
    name: str
    released_at: str
    tag_path: str
    upcoming_release: bool


class ApiEntitiesReleaseUpdateDataRequired(TypedDict):
    id: str
    project_id: str
    put_api_v4_projects_id_releases_tag_name: dict


class ApiEntitiesReleaseUpdateData(ApiEntitiesReleaseUpdateDataRequired, total=False):
    assets: dict
    author: dict
    commit: dict
    commit_path: str
    created_at: str
    description: str
    description_html: str
    evidences: dict
    links: dict
    milestones: dict
    name: str
    released_at: str
    tag_name: str
    tag_path: str
    upcoming_release: bool


class ApiEntitiesReleasesLink(TypedDict, total=False):
    direct_asset_url: str
    id: int
    link_type: str
    name: str
    url: str


class ApiEntitiesReleasesLinkLoadMatch(TypedDict):
    id: str
    project_id: str
    release_id: str


class ApiEntitiesReleasesLinkListMatchRequired(TypedDict):
    project_id: str
    release_id: str


class ApiEntitiesReleasesLinkListMatch(ApiEntitiesReleasesLinkListMatchRequired, total=False):
    page: int
    per_page: int


class ApiEntitiesReleasesLinkCreateDataRequired(TypedDict):
    project_id: str
    release_id: str
    post_api_v4_projects_id_releases_tag_name_assets_link: dict


class ApiEntitiesReleasesLinkCreateData(ApiEntitiesReleasesLinkCreateDataRequired, total=False):
    direct_asset_url: str
    id: int
    link_type: str
    name: str
    url: str


class ApiEntitiesReleasesLinkUpdateDataRequired(TypedDict):
    id: str
    project_id: str
    release_id: str
    put_api_v4_projects_id_releases_tag_name_assets_links_link_id: dict


class ApiEntitiesReleasesLinkUpdateData(ApiEntitiesReleasesLinkUpdateDataRequired, total=False):
    direct_asset_url: str
    link_type: str
    name: str
    url: str


class ApiEntitiesRemoteMirror(TypedDict, total=False):
    auth_method: str
    enabled: bool
    host_keys: list
    id: int
    keep_divergent_refs: bool
    last_error: int
    last_successful_update_at: str
    last_update_at: str
    last_update_started_at: str
    mirror_branch_regex: str
    only_protected_branches: bool
    update_status: str
    url: str


class ApiEntitiesRemoteMirrorLoadMatch(TypedDict):
    id: str
    project_id: str


class ApiEntitiesRemoteMirrorListMatchRequired(TypedDict):
    project_id: str


class ApiEntitiesRemoteMirrorListMatch(ApiEntitiesRemoteMirrorListMatchRequired, total=False):
    page: int
    per_page: int


class ApiEntitiesRemoteMirrorCreateDataRequired(TypedDict):
    project_id: str
    post_api_v4_projects_id_remote_mirror: dict


class ApiEntitiesRemoteMirrorCreateData(ApiEntitiesRemoteMirrorCreateDataRequired, total=False):
    auth_method: str
    enabled: bool
    host_keys: list
    id: int
    keep_divergent_refs: bool
    last_error: int
    last_successful_update_at: str
    last_update_at: str
    last_update_started_at: str
    mirror_branch_regex: str
    only_protected_branches: bool
    update_status: str
    url: str


class ApiEntitiesRemoteMirrorUpdateDataRequired(TypedDict):
    id: str
    project_id: str
    put_api_v4_projects_id_remote_mirrors_mirror_id: dict


class ApiEntitiesRemoteMirrorUpdateData(ApiEntitiesRemoteMirrorUpdateDataRequired, total=False):
    auth_method: str
    enabled: bool
    host_keys: list
    keep_divergent_refs: bool
    last_error: int
    last_successful_update_at: str
    last_update_at: str
    last_update_started_at: str
    mirror_branch_regex: str
    only_protected_branches: bool
    update_status: str
    url: str


class ApiEntitiesRepositoryHealth(TypedDict, total=False):
    alternates: dict
    bitmap: dict
    commit_graph: dict
    is_object_pool: bool
    last_full_repack: dict
    multi_pack_index: dict
    multi_pack_index_bitmap: dict
    objects: dict
    references: dict
    size: int
    updated_at: str


class ApiEntitiesRepositoryHealthLoadMatchRequired(TypedDict):
    project_id: str


class ApiEntitiesRepositoryHealthLoadMatch(ApiEntitiesRepositoryHealthLoadMatchRequired, total=False):
    generate: Any


class ApiEntitiesResourceAccessTokenWithToken(TypedDict, total=False):
    access_level: int
    active: bool
    created_at: str
    description: str
    expires_at: str
    id: int
    last_used_at: str
    name: str
    resource_id: int
    resource_type: str
    revoked: bool
    scopes: list
    token: str
    user_id: int


class ApiEntitiesResourceAccessTokenWithTokenCreateDataRequired(TypedDict):
    group_id: str
    post_api_v4_groups_id_access_tokens_self_rotate: dict


class ApiEntitiesResourceAccessTokenWithTokenCreateData(ApiEntitiesResourceAccessTokenWithTokenCreateDataRequired, total=False):
    access_level: int
    active: bool
    created_at: str
    description: str
    expires_at: str
    id: int
    last_used_at: str
    name: str
    resource_id: int
    resource_type: str
    revoked: bool
    scopes: list
    token: str
    user_id: int


class ApiEntitiesResourceMilestoneEvent(TypedDict, total=False):
    action: str
    created_at: str
    id: int
    milestone: dict
    resource_id: int
    resource_type: str
    state: str
    user: dict


class ApiEntitiesResourceMilestoneEventLoadMatchRequired(TypedDict):
    id: str
    project_id: str


class ApiEntitiesResourceMilestoneEventLoadMatch(ApiEntitiesResourceMilestoneEventLoadMatchRequired, total=False):
    issue_id: str
    merge_request_id: str


class ApiEntitiesResourceMilestoneEventListMatchRequired(TypedDict):
    project_id: str


class ApiEntitiesResourceMilestoneEventListMatch(ApiEntitiesResourceMilestoneEventListMatchRequired, total=False):
    issue_id: str
    page: int
    per_page: int
    merge_request_id: str


class ApiEntitiesSnippet(TypedDict, total=False):
    author: dict
    created_at: str
    description: str
    file_name: str
    files: list
    http_url_to_repo: str
    id: int
    imported: bool
    imported_from: str
    project_id: int
    raw_url: str
    repository_storage: str
    ssh_url_to_repo: str
    title: str
    updated_at: str
    visibility: str
    web_url: str


class ApiEntitiesSnippetListMatch(TypedDict, total=False):
    created_after: Any
    created_before: Any
    page: int
    per_page: int


class ApiEntitiesSshKeyWithUser(TypedDict, total=False):
    avatar_path: str
    avatar_url: str
    bio: str
    bot: str
    can_create_group: bool
    can_create_project: bool
    color_scheme_id: int
    commit_email: str
    confirmed_at: str
    created_at: str
    current_sign_in_at: str
    custom_attributes: list
    discord: str
    email: str
    external: str
    extra_shared_runners_minutes_limit: str
    followers: str
    following: str
    github: str
    id: int
    identities: dict
    is_followed: bool
    job_title: str
    last_activity_on: str
    last_sign_in_at: str
    linkedin: str
    local_time: str
    location: str
    locked: bool
    name: str
    organization: str
    preferred_language: str
    private_profile: bool
    projects_limit: int
    pronouns: str
    public_email: str
    scim_identities: dict
    shared_runners_minutes_limit: str
    state: str
    theme_id: int
    twitter: str
    two_factor_enabled: bool
    username: str
    web_url: str
    website_url: str
    work_information: str


class ApiEntitiesSshKeyWithUserLoadMatch(TypedDict):
    id: str


class ApiEntitiesSuggestion(TypedDict, total=False):
    appliable: str
    applied: str
    from_content: str
    from_line: str
    id: str
    to_content: str
    to_line: str


class ApiEntitiesSuggestionUpdateDataRequired(TypedDict):
    put_api_v4_suggestions_batch_apply: dict


class ApiEntitiesSuggestionUpdateData(ApiEntitiesSuggestionUpdateDataRequired, total=False):
    appliable: str
    applied: str
    from_content: str
    from_line: str
    id: str
    to_content: str
    to_line: str


class ApiEntitiesSystemBroadcastMessage(TypedDict, total=False):
    active: bool
    broadcast_type: str
    color: str
    dismissable: str
    ends_at: str
    font: str
    id: str
    message: str
    starts_at: str
    target_access_levels: str
    target_path: str
    theme: str


class ApiEntitiesSystemBroadcastMessageLoadMatch(TypedDict):
    id: str


class ApiEntitiesSystemBroadcastMessageCreateDataRequired(TypedDict):
    post_api_v4_broadcast_message: dict


class ApiEntitiesSystemBroadcastMessageCreateData(ApiEntitiesSystemBroadcastMessageCreateDataRequired, total=False):
    active: bool
    broadcast_type: str
    color: str
    dismissable: str
    ends_at: str
    font: str
    id: str
    message: str
    starts_at: str
    target_access_levels: str
    target_path: str
    theme: str


class ApiEntitiesSystemBroadcastMessageUpdateDataRequired(TypedDict):
    id: str
    put_api_v4_broadcast_messages_id: dict


class ApiEntitiesSystemBroadcastMessageUpdateData(ApiEntitiesSystemBroadcastMessageUpdateDataRequired, total=False):
    active: bool
    broadcast_type: str
    color: str
    dismissable: str
    ends_at: str
    font: str
    message: str
    starts_at: str
    target_access_levels: str
    target_path: str
    theme: str


class ApiEntitiesSystemBroadcastMessageRemoveMatch(TypedDict):
    id: str


class ApiEntitiesTag(TypedDict, total=False):
    commit: dict
    created_at: str
    id: str
    message: str
    name: str
    protected: bool
    release: dict
    target: str


class ApiEntitiesTagLoadMatch(TypedDict):
    id: str
    project_id: str


class ApiEntitiesTagListMatchRequired(TypedDict):
    project_id: str


class ApiEntitiesTagListMatch(ApiEntitiesTagListMatchRequired, total=False):
    order_by: Any
    page: int
    page_token: Any
    per_page: int
    search: Any
    sort: Any


class ApiEntitiesTagCreateDataRequired(TypedDict):
    project_id: str
    post_api_v4_projects_id_repository_tag: dict


class ApiEntitiesTagCreateData(ApiEntitiesTagCreateDataRequired, total=False):
    commit: dict
    created_at: str
    id: str
    message: str
    name: str
    protected: bool
    release: dict
    target: str


class ApiEntitiesTagSignature(TypedDict, total=False):
    signature: str
    signature_type: str


class ApiEntitiesTagSignatureLoadMatch(TypedDict):
    project_id: str
    tag_name: Any


class ApiEntitiesTemplatesList(TypedDict, total=False):
    key: str
    name: str


class ApiEntitiesTemplatesListLoadMatchRequired(TypedDict):
    project_id: str
    type: Any


class ApiEntitiesTemplatesListLoadMatch(ApiEntitiesTemplatesListLoadMatchRequired, total=False):
    page: int
    per_page: int


class ApiEntitiesTerraformModuleVersion(TypedDict, total=False):
    id: str
    modules: str
    name: str
    provider: str
    providers: str
    root: str
    source: str
    submodules: str
    version: str
    versions: str


class ApiEntitiesTerraformModuleVersionLoadMatchRequired(TypedDict):
    module_name: Any
    module_system: Any


class ApiEntitiesTerraformModuleVersionLoadMatch(ApiEntitiesTerraformModuleVersionLoadMatchRequired, total=False):
    v1_id: str
    module_version: Any
    module_namespace: Any


class ApiEntitiesTerraformModuleVersionListMatch(TypedDict):
    module_name: Any
    module_system: Any
    v1_id: str


class ApiEntitiesTreeObject(TypedDict, total=False):
    id: str
    mode: str
    name: str
    path: str
    type: str


class ApiEntitiesTreeObjectLoadMatchRequired(TypedDict):
    project_id: str


class ApiEntitiesTreeObjectLoadMatch(ApiEntitiesTreeObjectLoadMatchRequired, total=False):
    page: int
    page_token: Any
    pagination: Any
    path: str
    per_page: int
    recursive: Any
    ref: Any


class ApiEntitiesTrigger(TypedDict, total=False):
    avatar_path: str
    avatar_url: str
    created_at: str
    custom_attributes: list
    description: str
    expires_at: str
    id: int
    last_used: str
    locked: bool
    name: str
    owner: dict
    public_email: str
    state: str
    token: str
    updated_at: str
    username: str
    web_url: str


class ApiEntitiesTriggerLoadMatch(TypedDict):
    id: str
    project_id: str


class ApiEntitiesTriggerListMatchRequired(TypedDict):
    project_id: str


class ApiEntitiesTriggerListMatch(ApiEntitiesTriggerListMatchRequired, total=False):
    page: int
    per_page: int


class ApiEntitiesTriggerCreateDataRequired(TypedDict):
    project_id: str
    post_api_v4_projects_id_trigger: dict


class ApiEntitiesTriggerCreateData(ApiEntitiesTriggerCreateDataRequired, total=False):
    avatar_path: str
    avatar_url: str
    created_at: str
    custom_attributes: list
    description: str
    expires_at: str
    id: int
    last_used: str
    locked: bool
    name: str
    owner: dict
    public_email: str
    state: str
    token: str
    updated_at: str
    username: str
    web_url: str


class ApiEntitiesTriggerUpdateDataRequired(TypedDict):
    id: str
    project_id: str
    put_api_v4_projects_id_triggers_trigger_id: dict


class ApiEntitiesTriggerUpdateData(ApiEntitiesTriggerUpdateDataRequired, total=False):
    avatar_path: str
    avatar_url: str
    created_at: str
    custom_attributes: list
    description: str
    expires_at: str
    last_used: str
    locked: bool
    name: str
    owner: dict
    public_email: str
    state: str
    token: str
    updated_at: str
    username: str
    web_url: str


class ApiEntitiesUserAgentDetail(TypedDict, total=False):
    akismet_submitted: bool
    ip_address: str
    user_agent: str


class ApiEntitiesUserAgentDetailLoadMatch(TypedDict):
    snippet_id: str


class ApiEntitiesUserCount(TypedDict, total=False):
    assigned_issues: int
    assigned_merge_requests: int
    merge_requests: int
    review_requested_merge_requests: int
    todos: int


class ApiEntitiesUserCountLoadMatch(TypedDict, total=False):
    assigned_issues: int
    assigned_merge_requests: int
    merge_requests: int
    review_requested_merge_requests: int
    todos: int


class ApiEntitiesUserPublic(TypedDict, total=False):
    avatar_path: str
    avatar_url: str
    bio: str
    bot: str
    can_create_group: bool
    can_create_project: bool
    color_scheme_id: int
    commit_email: str
    confirmed_at: str
    created_at: str
    current_sign_in_at: str
    custom_attributes: list
    discord: str
    email: str
    external: str
    extra_shared_runners_minutes_limit: str
    followers: str
    following: str
    github: str
    id: int
    identities: dict
    is_followed: bool
    job_title: str
    key: str
    last_activity_on: str
    last_sign_in_at: str
    linkedin: str
    local_time: str
    location: str
    locked: bool
    name: str
    organization: str
    preferred_language: str
    private_profile: bool
    projects_limit: int
    pronouns: str
    public_email: str
    scim_identities: dict
    shared_runners_minutes_limit: str
    state: str
    theme_id: int
    twitter: str
    two_factor_enabled: bool
    username: str
    value: str
    web_url: str
    website_url: str
    work_information: str


class ApiEntitiesUserPublicListMatchRequired(TypedDict):
    group_id: str


class ApiEntitiesUserPublicListMatch(ApiEntitiesUserPublicListMatchRequired, total=False):
    active: bool
    blocked: bool
    created_after: Any
    created_before: Any
    page: int
    per_page: int
    search: Any
    username: str


class ApiEntitiesUserWithAdmin(TypedDict, total=False):
    key: str
    value: str


class ApiEntitiesUserWithAdminListMatch(TypedDict):
    fingerprint: Any


class ApiEntitiesWikiAttachment(TypedDict):
    pass


class ApiEntitiesWikiAttachmentCreateData(TypedDict):
    group_id: str
    post_api_v4_groups_id_wikis_attachment: dict


class ApiEntitiesWikiPage(TypedDict):
    pass


class ApiEntitiesWikiPageLoadMatchRequired(TypedDict):
    slug: str


class ApiEntitiesWikiPageLoadMatch(ApiEntitiesWikiPageLoadMatchRequired, total=False):
    group_id: str
    render_html: Any
    version: Any
    project_id: str


class ApiEntitiesWikiPageCreateData(TypedDict):
    group_id: str
    post_api_v4_groups_id_wiki: dict


class ApiEntitiesWikiPageUpdateDataRequired(TypedDict):
    slug: str


class ApiEntitiesWikiPageUpdateData(ApiEntitiesWikiPageUpdateDataRequired, total=False):
    group_id: str
    put_api_v4_groups_id_wikis_slug: dict
    project_id: str
    put_api_v4_projects_id_wikis_slug: dict


class ApiEntitiesWikiPageBasic(TypedDict, total=False):
    format: str
    slug: str
    title: str
    wiki_page_meta_id: int


class ApiEntitiesWikiPageBasicListMatchRequired(TypedDict):
    group_id: str


class ApiEntitiesWikiPageBasicListMatch(ApiEntitiesWikiPageBasicListMatchRequired, total=False):
    with_content: Any


class Application(TypedDict, total=False):
    id: str


class ApplicationRemoveMatch(TypedDict):
    id: str


class AwardEmoji(TypedDict, total=False):
    id: str


class AwardEmojiRemoveMatchRequired(TypedDict):
    id: str


class AwardEmojiRemoveMatch(AwardEmojiRemoveMatchRequired, total=False):
    epic_id: str
    group_id: str
    note_id: str
    issue_id: str
    project_id: str
    merge_request_id: str
    snippet_id: str


class Badge(TypedDict, total=False):
    id: str


class BadgeRemoveMatchRequired(TypedDict):
    id: str


class BadgeRemoveMatch(BadgeRemoveMatchRequired, total=False):
    group_id: str
    project_id: str


class Branch(TypedDict, total=False):
    id: str


class BranchRemoveMatchRequired(TypedDict):
    project_id: str


class BranchRemoveMatch(BranchRemoveMatchRequired, total=False):
    id: str


class CargoPackage(TypedDict):
    pass


class CargoPackageLoadMatch(TypedDict):
    project_id: str


class CiVariable(TypedDict, total=False):
    id: str


class CiVariableRemoveMatchRequired(TypedDict):
    id: str


class CiVariableRemoveMatch(CiVariableRemoveMatchRequired, total=False):
    project_id: str
    filter_environment_scope: Any
    group_id: str


class Cluster(TypedDict, total=False):
    id: str


class ClusterRemoveMatchRequired(TypedDict):
    id: str


class ClusterRemoveMatch(ClusterRemoveMatchRequired, total=False):
    group_id: str
    project_id: str


class ClusterAgent(TypedDict, total=False):
    id: str


class ClusterAgentRemoveMatchRequired(TypedDict):
    id: str
    project_id: str


class ClusterAgentRemoveMatch(ClusterAgentRemoveMatchRequired, total=False):
    token_id: str


class Composer(TypedDict):
    pass


class ComposerCreateData(TypedDict):
    project_id: str
    post_api_v4_projects_id_packages_composer: dict


class ComposerPackage(TypedDict):
    pass


class ComposerPackageLoadMatch(TypedDict):
    group_id: str
    sha: Any


class Conan(TypedDict, total=False):
    id: str


class ConanRemoveMatchRequired(TypedDict):
    package_channel: Any
    package_name: Any
    package_username: Any
    package_version: Any


class ConanRemoveMatch(ConanRemoveMatchRequired, total=False):
    id: str


class ConanPackage(TypedDict, total=False):
    id: str


class ConanPackageLoadMatch(TypedDict):
    file_id: str
    file_name: Any
    package_channel: Any
    package_username: Any
    package_version: Any
    recipe_revision: Any


class ConanPackageUpdateDataRequired(TypedDict):
    file_name: Any
    package_channel: Any
    package_username: Any
    package_version: Any


class ConanPackageUpdateData(ConanPackageUpdateDataRequired, total=False):
    conan_package_reference: Any
    id: str
    package_name: Any
    package_revision: Any
    recipe_revision: Any
    put_api_v4_projects_id_packages_conan_v1_files_package_name_package_version_package_username_package_channel_recipe_revision_package_conan_package_reference_package_revision_file_name: dict
    conan_id: str
    package_id: str
    project_id: str
    revision_id: str
    put_api_v4_projects_id_packages_conan_v2_conans_package_name_package_version_package_username_package_channel_revisions_recipe_revision_packages_conan_package_reference_revisions_package_revision_files_file_name: dict
    put_api_v4_packages_conan_v1_files_package_name_package_version_package_username_package_channel_recipe_revision_package_conan_package_reference_package_revision_file_name: dict
    file_id: str
    put_api_v4_projects_id_packages_conan_v2_conans_package_name_package_version_package_username_package_channel_revisions_recipe_revision_files_file_name: dict
    put_api_v4_projects_id_packages_conan_v1_files_package_name_package_version_package_username_package_channel_recipe_revision_export_file_name: dict
    put_api_v4_packages_conan_v1_files_package_name_package_version_package_username_package_channel_recipe_revision_export_file_name: dict


class ConanPackageRemoveMatchRequired(TypedDict):
    conan_id: str
    package_channel: Any
    package_username: Any
    package_version: Any
    project_id: str


class ConanPackageRemoveMatch(ConanPackageRemoveMatchRequired, total=False):
    package_id: str
    package_revision: Any
    revision_id: str
    recipe_revision: Any


class ContainerRegistry(TypedDict):
    pass


class ContainerRegistryRemoveMatchRequired(TypedDict):
    project_id: str
    repository_id: str


class ContainerRegistryRemoveMatch(ContainerRegistryRemoveMatchRequired, total=False):
    keep_n: Any
    name_regex: Any
    name_regex_delete: Any
    name_regex_keep: Any
    older_than: Any
    tag_name: Any


class ContainerRegistryEvent(TypedDict):
    pass


class ContainerRegistryEventCreateData(TypedDict):
    pass


class CustomAttribute(TypedDict, total=False):
    id: str
    key: str
    value: str


class CustomAttributeLoadMatch(TypedDict):
    group_id: str
    id: str


class Debian(TypedDict, total=False):
    id: str


class DebianUpdateData(TypedDict):
    id: str
    project_id: str
    put_api_v4_projects_id_packages_debian_file_name: dict


class DebianDistribution(TypedDict, total=False):
    id: str


class DebianDistributionRemoveMatchRequired(TypedDict):
    id: str


class DebianDistributionRemoveMatch(DebianDistributionRemoveMatchRequired, total=False):
    group_id: str
    architecture: Any
    component: Any
    description: str
    label: str
    origin: Any
    suite: Any
    valid_time_duration_second: Any
    version: Any
    project_id: str


class DebianPackage(TypedDict, total=False):
    id: str


class DebianPackageLoadMatchRequired(TypedDict):
    distribution: Any


class DebianPackageLoadMatch(DebianPackageLoadMatchRequired, total=False):
    file_name: Any
    id: str
    letter: Any
    package_name: Any
    package_version: Any
    project_id: str
    architecture: Any
    distribution_id: str
    file_sha256: Any
    group_id: str


class DependencyProxy(TypedDict):
    pass


class DependencyProxyRemoveMatch(TypedDict):
    group_id: str


class DeployKey(TypedDict, total=False):
    id: str


class DeployKeyRemoveMatch(TypedDict):
    id: str
    project_id: str


class DeployToken(TypedDict, total=False):
    id: str


class DeployTokenRemoveMatchRequired(TypedDict):
    id: str


class DeployTokenRemoveMatch(DeployTokenRemoveMatchRequired, total=False):
    group_id: str
    project_id: str


class Deployment(TypedDict, total=False):
    id: str


class DeploymentRemoveMatch(TypedDict):
    id: str
    project_id: str


class EeApiEntitiesApprovalState(TypedDict):
    pass


class EeApiEntitiesApprovalStateCreateData(TypedDict):
    merge_request_id: str
    project_id: str
    post_api_v4_projects_id_merge_requests_merge_request_iid_approval: dict


class EeApiEntitiesAuditEvent(TypedDict, total=False):
    author_id: str
    created_at: str
    details: str
    entity_id: str
    entity_type: str
    event_name: str
    id: str


class EeApiEntitiesAuditEventLoadMatchRequired(TypedDict):
    id: str


class EeApiEntitiesAuditEventLoadMatch(EeApiEntitiesAuditEventLoadMatchRequired, total=False):
    group_id: str
    project_id: str


class EeApiEntitiesAuditEventListMatchRequired(TypedDict):
    group_id: str


class EeApiEntitiesAuditEventListMatch(EeApiEntitiesAuditEventListMatchRequired, total=False):
    created_after: Any
    created_before: Any
    page: int
    per_page: int


class EeApiEntitiesBillableMembership(TypedDict, total=False):
    custom_role: str
    integer_value: str
    string_value: str


class EeApiEntitiesBillableMembershipLoadMatchRequired(TypedDict):
    billable_member_id: str
    group_id: str


class EeApiEntitiesBillableMembershipLoadMatch(EeApiEntitiesBillableMembershipLoadMatchRequired, total=False):
    page: int
    per_page: int


class EeApiEntitiesGeoNodeStatus(TypedDict, total=False):
    ci_secure_files_checksum_failed_count: str
    ci_secure_files_checksum_total_count: str
    ci_secure_files_checksummed_count: str
    ci_secure_files_count: str
    ci_secure_files_failed_count: str
    ci_secure_files_registry_count: str
    ci_secure_files_synced_count: str
    ci_secure_files_synced_in_percentage: str
    ci_secure_files_verification_failed_count: str
    ci_secure_files_verification_total_count: str
    ci_secure_files_verified_count: str
    ci_secure_files_verified_in_percentage: str
    container_repositories_checksum_failed_count: str
    container_repositories_checksum_total_count: str
    container_repositories_checksummed_count: str
    container_repositories_count: str
    container_repositories_failed_count: str
    container_repositories_registry_count: str
    container_repositories_replication_enabled: str
    container_repositories_synced_count: str
    container_repositories_synced_in_percentage: str
    container_repositories_verification_failed_count: str
    container_repositories_verification_total_count: str
    container_repositories_verified_count: str
    container_repositories_verified_in_percentage: str
    cursor_last_event_id: str
    cursor_last_event_timestamp: str
    db_replication_lag_seconds: str
    dependency_proxy_blobs_checksum_failed_count: str
    dependency_proxy_blobs_checksum_total_count: str
    dependency_proxy_blobs_checksummed_count: str
    dependency_proxy_blobs_count: str
    dependency_proxy_blobs_failed_count: str
    dependency_proxy_blobs_registry_count: str
    dependency_proxy_blobs_synced_count: str
    dependency_proxy_blobs_synced_in_percentage: str
    dependency_proxy_blobs_verification_failed_count: str
    dependency_proxy_blobs_verification_total_count: str
    dependency_proxy_blobs_verified_count: str
    dependency_proxy_blobs_verified_in_percentage: str
    dependency_proxy_manifests_checksum_failed_count: str
    dependency_proxy_manifests_checksum_total_count: str
    dependency_proxy_manifests_checksummed_count: str
    dependency_proxy_manifests_count: str
    dependency_proxy_manifests_failed_count: str
    dependency_proxy_manifests_registry_count: str
    dependency_proxy_manifests_synced_count: str
    dependency_proxy_manifests_synced_in_percentage: str
    dependency_proxy_manifests_verification_failed_count: str
    dependency_proxy_manifests_verification_total_count: str
    dependency_proxy_manifests_verified_count: str
    dependency_proxy_manifests_verified_in_percentage: str
    design_management_repositories_checksum_failed_count: str
    design_management_repositories_checksum_total_count: str
    design_management_repositories_checksummed_count: str
    design_management_repositories_count: str
    design_management_repositories_failed_count: str
    design_management_repositories_registry_count: str
    design_management_repositories_synced_count: str
    design_management_repositories_synced_in_percentage: str
    design_management_repositories_verification_failed_count: str
    design_management_repositories_verification_total_count: str
    design_management_repositories_verified_count: str
    design_management_repositories_verified_in_percentage: str
    geo_node_id: str
    git_fetch_event_count_weekly: str
    git_push_event_count_weekly: str
    group_wiki_repositories_checksum_failed_count: str
    group_wiki_repositories_checksum_total_count: str
    group_wiki_repositories_checksummed_count: str
    group_wiki_repositories_count: str
    group_wiki_repositories_failed_count: str
    group_wiki_repositories_registry_count: str
    group_wiki_repositories_synced_count: str
    group_wiki_repositories_synced_in_percentage: str
    group_wiki_repositories_verification_failed_count: str
    group_wiki_repositories_verification_total_count: str
    group_wiki_repositories_verified_count: str
    group_wiki_repositories_verified_in_percentage: str
    health: str
    health_status: str
    healthy: str
    job_artifacts_checksum_failed_count: str
    job_artifacts_checksum_total_count: str
    job_artifacts_checksummed_count: str
    job_artifacts_count: str
    job_artifacts_failed_count: str
    job_artifacts_registry_count: str
    job_artifacts_synced_count: str
    job_artifacts_synced_in_percentage: str
    job_artifacts_verification_failed_count: str
    job_artifacts_verification_total_count: str
    job_artifacts_verified_count: str
    job_artifacts_verified_in_percentage: str
    last_event_id: str
    last_event_timestamp: str
    last_successful_status_check_timestamp: str
    lfs_objects_checksum_failed_count: str
    lfs_objects_checksum_total_count: str
    lfs_objects_checksummed_count: str
    lfs_objects_count: str
    lfs_objects_failed_count: str
    lfs_objects_registry_count: str
    lfs_objects_synced_count: str
    lfs_objects_synced_in_percentage: str
    lfs_objects_verification_failed_count: str
    lfs_objects_verification_total_count: str
    lfs_objects_verified_count: str
    lfs_objects_verified_in_percentage: str
    links: dict
    merge_request_diffs_checksum_failed_count: str
    merge_request_diffs_checksum_total_count: str
    merge_request_diffs_checksummed_count: str
    merge_request_diffs_count: str
    merge_request_diffs_failed_count: str
    merge_request_diffs_registry_count: str
    merge_request_diffs_synced_count: str
    merge_request_diffs_synced_in_percentage: str
    merge_request_diffs_verification_failed_count: str
    merge_request_diffs_verification_total_count: str
    merge_request_diffs_verified_count: str
    merge_request_diffs_verified_in_percentage: str
    missing_oauth_application: str
    namespaces: dict
    package_files_checksum_failed_count: str
    package_files_checksum_total_count: str
    package_files_checksummed_count: str
    package_files_count: str
    package_files_failed_count: str
    package_files_registry_count: str
    package_files_synced_count: str
    package_files_synced_in_percentage: str
    package_files_verification_failed_count: str
    package_files_verification_total_count: str
    package_files_verified_count: str
    package_files_verified_in_percentage: str
    pages_deployments_checksum_failed_count: str
    pages_deployments_checksum_total_count: str
    pages_deployments_checksummed_count: str
    pages_deployments_count: str
    pages_deployments_failed_count: str
    pages_deployments_registry_count: str
    pages_deployments_synced_count: str
    pages_deployments_synced_in_percentage: str
    pages_deployments_verification_failed_count: str
    pages_deployments_verification_total_count: str
    pages_deployments_verified_count: str
    pages_deployments_verified_in_percentage: str
    pipeline_artifacts_checksum_failed_count: str
    pipeline_artifacts_checksum_total_count: str
    pipeline_artifacts_checksummed_count: str
    pipeline_artifacts_count: str
    pipeline_artifacts_failed_count: str
    pipeline_artifacts_registry_count: str
    pipeline_artifacts_synced_count: str
    pipeline_artifacts_synced_in_percentage: str
    pipeline_artifacts_verification_failed_count: str
    pipeline_artifacts_verification_total_count: str
    pipeline_artifacts_verified_count: str
    pipeline_artifacts_verified_in_percentage: str
    project_repositories_checksum_failed_count: str
    project_repositories_checksum_total_count: str
    project_repositories_checksummed_count: str
    project_repositories_count: str
    project_repositories_failed_count: str
    project_repositories_registry_count: str
    project_repositories_synced_count: str
    project_repositories_synced_in_percentage: str
    project_repositories_verification_failed_count: str
    project_repositories_verification_total_count: str
    project_repositories_verified_count: str
    project_repositories_verified_in_percentage: str
    project_wiki_repositories_checksum_failed_count: str
    project_wiki_repositories_checksum_total_count: str
    project_wiki_repositories_checksummed_count: str
    project_wiki_repositories_count: str
    project_wiki_repositories_failed_count: str
    project_wiki_repositories_registry_count: str
    project_wiki_repositories_synced_count: str
    project_wiki_repositories_synced_in_percentage: str
    project_wiki_repositories_verification_failed_count: str
    project_wiki_repositories_verification_total_count: str
    project_wiki_repositories_verified_count: str
    project_wiki_repositories_verified_in_percentage: str
    projects_count: str
    proxy_local_requests_event_count_weekly: str
    proxy_remote_requests_event_count_weekly: str
    replication_slots_count: str
    replication_slots_max_retained_wal_bytes: str
    replication_slots_used_count: str
    replication_slots_used_in_percentage: str
    repositories_checked_count: str
    repositories_checked_failed_count: str
    repositories_checked_in_percentage: str
    repositories_count: str
    revision: str
    selective_sync_type: str
    snippet_repositories_checksum_failed_count: str
    snippet_repositories_checksum_total_count: str
    snippet_repositories_checksummed_count: str
    snippet_repositories_count: str
    snippet_repositories_failed_count: str
    snippet_repositories_registry_count: str
    snippet_repositories_synced_count: str
    snippet_repositories_synced_in_percentage: str
    snippet_repositories_verification_failed_count: str
    snippet_repositories_verification_total_count: str
    snippet_repositories_verified_count: str
    snippet_repositories_verified_in_percentage: str
    storage_shards: dict
    storage_shards_match: str
    terraform_state_versions_checksum_failed_count: str
    terraform_state_versions_checksum_total_count: str
    terraform_state_versions_checksummed_count: str
    terraform_state_versions_count: str
    terraform_state_versions_failed_count: str
    terraform_state_versions_registry_count: str
    terraform_state_versions_synced_count: str
    terraform_state_versions_synced_in_percentage: str
    terraform_state_versions_verification_failed_count: str
    terraform_state_versions_verification_total_count: str
    terraform_state_versions_verified_count: str
    terraform_state_versions_verified_in_percentage: str
    updated_at: str
    uploads_checksum_failed_count: str
    uploads_checksum_total_count: str
    uploads_checksummed_count: str
    uploads_count: str
    uploads_failed_count: str
    uploads_registry_count: str
    uploads_synced_count: str
    uploads_synced_in_percentage: str
    uploads_verification_failed_count: str
    uploads_verification_total_count: str
    uploads_verified_count: str
    uploads_verified_in_percentage: str
    version: str


class EeApiEntitiesGeoNodeStatusCreateDataRequired(TypedDict):
    post_api_v4_geo_status: dict


class EeApiEntitiesGeoNodeStatusCreateData(EeApiEntitiesGeoNodeStatusCreateDataRequired, total=False):
    ci_secure_files_checksum_failed_count: str
    ci_secure_files_checksum_total_count: str
    ci_secure_files_checksummed_count: str
    ci_secure_files_count: str
    ci_secure_files_failed_count: str
    ci_secure_files_registry_count: str
    ci_secure_files_synced_count: str
    ci_secure_files_synced_in_percentage: str
    ci_secure_files_verification_failed_count: str
    ci_secure_files_verification_total_count: str
    ci_secure_files_verified_count: str
    ci_secure_files_verified_in_percentage: str
    container_repositories_checksum_failed_count: str
    container_repositories_checksum_total_count: str
    container_repositories_checksummed_count: str
    container_repositories_count: str
    container_repositories_failed_count: str
    container_repositories_registry_count: str
    container_repositories_replication_enabled: str
    container_repositories_synced_count: str
    container_repositories_synced_in_percentage: str
    container_repositories_verification_failed_count: str
    container_repositories_verification_total_count: str
    container_repositories_verified_count: str
    container_repositories_verified_in_percentage: str
    cursor_last_event_id: str
    cursor_last_event_timestamp: str
    db_replication_lag_seconds: str
    dependency_proxy_blobs_checksum_failed_count: str
    dependency_proxy_blobs_checksum_total_count: str
    dependency_proxy_blobs_checksummed_count: str
    dependency_proxy_blobs_count: str
    dependency_proxy_blobs_failed_count: str
    dependency_proxy_blobs_registry_count: str
    dependency_proxy_blobs_synced_count: str
    dependency_proxy_blobs_synced_in_percentage: str
    dependency_proxy_blobs_verification_failed_count: str
    dependency_proxy_blobs_verification_total_count: str
    dependency_proxy_blobs_verified_count: str
    dependency_proxy_blobs_verified_in_percentage: str
    dependency_proxy_manifests_checksum_failed_count: str
    dependency_proxy_manifests_checksum_total_count: str
    dependency_proxy_manifests_checksummed_count: str
    dependency_proxy_manifests_count: str
    dependency_proxy_manifests_failed_count: str
    dependency_proxy_manifests_registry_count: str
    dependency_proxy_manifests_synced_count: str
    dependency_proxy_manifests_synced_in_percentage: str
    dependency_proxy_manifests_verification_failed_count: str
    dependency_proxy_manifests_verification_total_count: str
    dependency_proxy_manifests_verified_count: str
    dependency_proxy_manifests_verified_in_percentage: str
    design_management_repositories_checksum_failed_count: str
    design_management_repositories_checksum_total_count: str
    design_management_repositories_checksummed_count: str
    design_management_repositories_count: str
    design_management_repositories_failed_count: str
    design_management_repositories_registry_count: str
    design_management_repositories_synced_count: str
    design_management_repositories_synced_in_percentage: str
    design_management_repositories_verification_failed_count: str
    design_management_repositories_verification_total_count: str
    design_management_repositories_verified_count: str
    design_management_repositories_verified_in_percentage: str
    geo_node_id: str
    git_fetch_event_count_weekly: str
    git_push_event_count_weekly: str
    group_wiki_repositories_checksum_failed_count: str
    group_wiki_repositories_checksum_total_count: str
    group_wiki_repositories_checksummed_count: str
    group_wiki_repositories_count: str
    group_wiki_repositories_failed_count: str
    group_wiki_repositories_registry_count: str
    group_wiki_repositories_synced_count: str
    group_wiki_repositories_synced_in_percentage: str
    group_wiki_repositories_verification_failed_count: str
    group_wiki_repositories_verification_total_count: str
    group_wiki_repositories_verified_count: str
    group_wiki_repositories_verified_in_percentage: str
    health: str
    health_status: str
    healthy: str
    job_artifacts_checksum_failed_count: str
    job_artifacts_checksum_total_count: str
    job_artifacts_checksummed_count: str
    job_artifacts_count: str
    job_artifacts_failed_count: str
    job_artifacts_registry_count: str
    job_artifacts_synced_count: str
    job_artifacts_synced_in_percentage: str
    job_artifacts_verification_failed_count: str
    job_artifacts_verification_total_count: str
    job_artifacts_verified_count: str
    job_artifacts_verified_in_percentage: str
    last_event_id: str
    last_event_timestamp: str
    last_successful_status_check_timestamp: str
    lfs_objects_checksum_failed_count: str
    lfs_objects_checksum_total_count: str
    lfs_objects_checksummed_count: str
    lfs_objects_count: str
    lfs_objects_failed_count: str
    lfs_objects_registry_count: str
    lfs_objects_synced_count: str
    lfs_objects_synced_in_percentage: str
    lfs_objects_verification_failed_count: str
    lfs_objects_verification_total_count: str
    lfs_objects_verified_count: str
    lfs_objects_verified_in_percentage: str
    links: dict
    merge_request_diffs_checksum_failed_count: str
    merge_request_diffs_checksum_total_count: str
    merge_request_diffs_checksummed_count: str
    merge_request_diffs_count: str
    merge_request_diffs_failed_count: str
    merge_request_diffs_registry_count: str
    merge_request_diffs_synced_count: str
    merge_request_diffs_synced_in_percentage: str
    merge_request_diffs_verification_failed_count: str
    merge_request_diffs_verification_total_count: str
    merge_request_diffs_verified_count: str
    merge_request_diffs_verified_in_percentage: str
    missing_oauth_application: str
    namespaces: dict
    package_files_checksum_failed_count: str
    package_files_checksum_total_count: str
    package_files_checksummed_count: str
    package_files_count: str
    package_files_failed_count: str
    package_files_registry_count: str
    package_files_synced_count: str
    package_files_synced_in_percentage: str
    package_files_verification_failed_count: str
    package_files_verification_total_count: str
    package_files_verified_count: str
    package_files_verified_in_percentage: str
    pages_deployments_checksum_failed_count: str
    pages_deployments_checksum_total_count: str
    pages_deployments_checksummed_count: str
    pages_deployments_count: str
    pages_deployments_failed_count: str
    pages_deployments_registry_count: str
    pages_deployments_synced_count: str
    pages_deployments_synced_in_percentage: str
    pages_deployments_verification_failed_count: str
    pages_deployments_verification_total_count: str
    pages_deployments_verified_count: str
    pages_deployments_verified_in_percentage: str
    pipeline_artifacts_checksum_failed_count: str
    pipeline_artifacts_checksum_total_count: str
    pipeline_artifacts_checksummed_count: str
    pipeline_artifacts_count: str
    pipeline_artifacts_failed_count: str
    pipeline_artifacts_registry_count: str
    pipeline_artifacts_synced_count: str
    pipeline_artifacts_synced_in_percentage: str
    pipeline_artifacts_verification_failed_count: str
    pipeline_artifacts_verification_total_count: str
    pipeline_artifacts_verified_count: str
    pipeline_artifacts_verified_in_percentage: str
    project_repositories_checksum_failed_count: str
    project_repositories_checksum_total_count: str
    project_repositories_checksummed_count: str
    project_repositories_count: str
    project_repositories_failed_count: str
    project_repositories_registry_count: str
    project_repositories_synced_count: str
    project_repositories_synced_in_percentage: str
    project_repositories_verification_failed_count: str
    project_repositories_verification_total_count: str
    project_repositories_verified_count: str
    project_repositories_verified_in_percentage: str
    project_wiki_repositories_checksum_failed_count: str
    project_wiki_repositories_checksum_total_count: str
    project_wiki_repositories_checksummed_count: str
    project_wiki_repositories_count: str
    project_wiki_repositories_failed_count: str
    project_wiki_repositories_registry_count: str
    project_wiki_repositories_synced_count: str
    project_wiki_repositories_synced_in_percentage: str
    project_wiki_repositories_verification_failed_count: str
    project_wiki_repositories_verification_total_count: str
    project_wiki_repositories_verified_count: str
    project_wiki_repositories_verified_in_percentage: str
    projects_count: str
    proxy_local_requests_event_count_weekly: str
    proxy_remote_requests_event_count_weekly: str
    replication_slots_count: str
    replication_slots_max_retained_wal_bytes: str
    replication_slots_used_count: str
    replication_slots_used_in_percentage: str
    repositories_checked_count: str
    repositories_checked_failed_count: str
    repositories_checked_in_percentage: str
    repositories_count: str
    revision: str
    selective_sync_type: str
    snippet_repositories_checksum_failed_count: str
    snippet_repositories_checksum_total_count: str
    snippet_repositories_checksummed_count: str
    snippet_repositories_count: str
    snippet_repositories_failed_count: str
    snippet_repositories_registry_count: str
    snippet_repositories_synced_count: str
    snippet_repositories_synced_in_percentage: str
    snippet_repositories_verification_failed_count: str
    snippet_repositories_verification_total_count: str
    snippet_repositories_verified_count: str
    snippet_repositories_verified_in_percentage: str
    storage_shards: dict
    storage_shards_match: str
    terraform_state_versions_checksum_failed_count: str
    terraform_state_versions_checksum_total_count: str
    terraform_state_versions_checksummed_count: str
    terraform_state_versions_count: str
    terraform_state_versions_failed_count: str
    terraform_state_versions_registry_count: str
    terraform_state_versions_synced_count: str
    terraform_state_versions_synced_in_percentage: str
    terraform_state_versions_verification_failed_count: str
    terraform_state_versions_verification_total_count: str
    terraform_state_versions_verified_count: str
    terraform_state_versions_verified_in_percentage: str
    updated_at: str
    uploads_checksum_failed_count: str
    uploads_checksum_total_count: str
    uploads_checksummed_count: str
    uploads_count: str
    uploads_failed_count: str
    uploads_registry_count: str
    uploads_synced_count: str
    uploads_synced_in_percentage: str
    uploads_verification_failed_count: str
    uploads_verification_total_count: str
    uploads_verified_count: str
    uploads_verified_in_percentage: str
    version: str


class EeApiEntitiesGeoPipelineRef(TypedDict, total=False):
    pipeline_refs: list


class EeApiEntitiesGeoPipelineRefListMatch(TypedDict):
    gl_repository: Any


class EeApiEntitiesIssuableMetricImage(TypedDict, total=False):
    created_at: str
    file_path: str
    filename: str
    id: str
    url: str
    url_text: str


class EeApiEntitiesIssuableMetricImageCreateDataRequired(TypedDict):
    issue_id: str
    project_id: str
    post_api_v4_projects_id_issues_issue_iid_metric_image: dict


class EeApiEntitiesIssuableMetricImageCreateData(EeApiEntitiesIssuableMetricImageCreateDataRequired, total=False):
    created_at: str
    file_path: str
    filename: str
    id: str
    url: str
    url_text: str


class EeApiEntitiesIssuableMetricImageUpdateDataRequired(TypedDict):
    id: str
    issue_id: str
    project_id: str
    put_api_v4_projects_id_issues_issue_iid_metric_images_metric_image_id: dict


class EeApiEntitiesIssuableMetricImageUpdateData(EeApiEntitiesIssuableMetricImageUpdateDataRequired, total=False):
    created_at: str
    file_path: str
    filename: str
    url: str
    url_text: str


class EeApiEntitiesIssuableMetricImageRemoveMatch(TypedDict):
    id: str
    issue_id: str
    project_id: str


class EeApiEntitiesMergeRequestApprovalState(TypedDict, total=False):
    approvals_required: int
    approved: bool
    approved_by: list
    code_owner: bool
    contains_hidden_groups: bool
    eligible_approvers: list
    groups: list
    id: int
    name: str
    overridden: bool
    report_type: str
    rule_type: str
    section: str
    source_rule: dict
    users: list


class EeApiEntitiesMergeRequestApprovalStateListMatch(TypedDict):
    merge_request_id: str
    project_id: str


class EeApiEntitiesSshCertificate(TypedDict, total=False):
    created_at: str
    id: int
    key: str
    title: str


class EeApiEntitiesSshCertificateListMatchRequired(TypedDict):
    group_id: str


class EeApiEntitiesSshCertificateListMatch(EeApiEntitiesSshCertificateListMatchRequired, total=False):
    page: int
    per_page: int


class EeApiEntitiesSshCertificateCreateDataRequired(TypedDict):
    group_id: str
    post_api_v4_groups_id_ssh_certificate: dict


class EeApiEntitiesSshCertificateCreateData(EeApiEntitiesSshCertificateCreateDataRequired, total=False):
    created_at: str
    id: int
    key: str
    title: str


class Environment(TypedDict, total=False):
    id: str


class EnvironmentCreateDataRequired(TypedDict):
    project_id: str
    post_api_v4_projects_id_environments_stop_stale: dict


class EnvironmentCreateData(EnvironmentCreateDataRequired, total=False):
    id: str


class EnvironmentRemoveMatch(TypedDict):
    id: str
    project_id: str


class ErrorTrackingClientKey(TypedDict, total=False):
    id: str


class ErrorTrackingClientKeyRemoveMatch(TypedDict):
    id: str
    project_id: str


class Feature(TypedDict, total=False):
    id: str


class FeatureRemoveMatch(TypedDict):
    id: str


class FeatureFlag(TypedDict, total=False):
    id: str


class FeatureFlagLoadMatchRequired(TypedDict):
    project_id: str


class FeatureFlagLoadMatch(FeatureFlagLoadMatchRequired, total=False):
    app_name: Any
    instance_id: str


class FeatureFlagCreateDataRequired(TypedDict):
    unleash_id: str


class FeatureFlagCreateData(FeatureFlagCreateDataRequired, total=False):
    post_api_v4_feature_flags_unleash_project_id_client_metric: dict
    post_api_v4_feature_flags_unleash_project_id_client_register: dict
    id: str


class FeatureFlagRemoveMatch(TypedDict):
    id: str
    project_id: str


class FeatureFlagsUserList(TypedDict, total=False):
    id: str


class FeatureFlagsUserListRemoveMatch(TypedDict):
    id: str
    project_id: str


class FreezePeriod(TypedDict, total=False):
    id: str


class FreezePeriodRemoveMatch(TypedDict):
    id: str
    project_id: str


class GenericPackage(TypedDict):
    pass


class GenericPackageLoadMatchRequired(TypedDict):
    file_name: Any
    generic_id: str
    project_id: str
    package_version: Any


class GenericPackageLoadMatch(GenericPackageLoadMatchRequired, total=False):
    path: str


class GenericPackageUpdateData(TypedDict):
    file_name: Any
    generic_id: str
    project_id: str


class Geo(TypedDict, total=False):
    id: str


class GeoLoadMatch(TypedDict):
    replicable_id: str
    replicable_name: Any


class GeoCreateDataRequired(TypedDict):
    post_api_v4_geo_proxy_git_ssh_info_refs_receive_pack: dict


class GeoCreateData(GeoCreateDataRequired, total=False):
    id: str


class GoProxy(TypedDict):
    pass


class GoProxyLoadMatchRequired(TypedDict):
    project_id: str
    module_name: Any


class GoProxyLoadMatch(GoProxyLoadMatchRequired, total=False):
    module_version: Any


class Group(TypedDict, total=False):
    id: str


class GroupLoadMatchRequired(TypedDict):
    id: str


class GroupLoadMatch(GroupLoadMatchRequired, total=False):
    filename: Any
    secret: Any
    upload_id: str


class GroupCreateDataRequired(TypedDict):
    id: str


class GroupCreateData(GroupCreateDataRequired, total=False):
    post_api_v4_groups_id_placeholder_reassignment: dict
    post_api_v4_groups_id_tokens_revoke: dict


class GroupUpdateData(TypedDict):
    id: str
    key: str
    put_api_v4_groups_id_custom_attributes_key: dict


class GroupRemoveMatchRequired(TypedDict):
    id: str


class GroupRemoveMatch(GroupRemoveMatchRequired, total=False):
    filename: Any
    secret: Any
    group_id: str
    key: str
    ssh_certificates_id: str
    upload_id: str
    user_id: str


class GroupAvatar(TypedDict, total=False):
    id: str


class GroupAvatarLoadMatch(TypedDict):
    id: str


class GroupExport(TypedDict, total=False):
    id: str


class GroupExportLoadMatchRequired(TypedDict):
    group_id: str


class GroupExportLoadMatch(GroupExportLoadMatchRequired, total=False):
    batch_number: int
    batched: Any
    relation: Any


class GroupExportCreateData(TypedDict):
    id: str


class GroupImport(TypedDict):
    pass


class GroupImportCreateDataRequired(TypedDict):
    file: Any
    name: str
    path: str


class GroupImportCreateData(GroupImportCreateDataRequired, total=False):
    organization_id: str
    parent_id: str


class HelmPackage(TypedDict):
    pass


class HelmPackageLoadMatchRequired(TypedDict):
    project_id: str


class HelmPackageLoadMatch(HelmPackageLoadMatchRequired, total=False):
    file_name: Any
    helm_id: str
    channel: Any


class HelmPackageCreateDataRequired(TypedDict):
    project_id: str


class HelmPackageCreateData(HelmPackageCreateDataRequired, total=False):
    channel: Any
    post_api_v4_projects_id_packages_helm_api_channel_chart: dict
    api_id: str


class Hook(TypedDict, total=False):
    id: str


class HookCreateData(TypedDict):
    id: str


class HookUpdateDataRequired(TypedDict):
    id: str
    key: str


class HookUpdateData(HookUpdateDataRequired, total=False):
    put_api_v4_hooks_hook_id_custom_headers_key: dict
    put_api_v4_hooks_hook_id_url_variables_key: dict


class HookRemoveMatch(TypedDict):
    id: str
    key: str


class Import(TypedDict):
    pass


class ImportCreateData(TypedDict):
    post_api_v4_import_github_gist: dict


class Integration(TypedDict, total=False):
    id: str


class IntegrationCreateDataRequired(TypedDict):
    post_api_v4_integrations_slack_event: dict


class IntegrationCreateData(IntegrationCreateDataRequired, total=False):
    id: str


class IntegrationRemoveMatch(TypedDict):
    group_id: str
    id: str


class Invitation(TypedDict, total=False):
    id: str


class InvitationRemoveMatchRequired(TypedDict):
    id: str


class InvitationRemoveMatch(InvitationRemoveMatchRequired, total=False):
    group_id: str
    project_id: str


class IssueLink(TypedDict, total=False):
    id: str


class IssueLinkRemoveMatch(TypedDict):
    id: str
    issue_id: str
    project_id: str


class IssuesStatistic(TypedDict):
    pass


class IssuesStatisticLoadMatch(TypedDict, total=False):
    assignee_id: str
    assignee_username: Any
    author_id: str
    author_username: Any
    confidential: Any
    created_after: Any
    created_before: Any
    epic_id: str
    health_status: Any
    iid: Any
    iteration_id: str
    iteration_title: Any
    label: str
    milestone: Any
    milestone_id: str
    my_reaction_emoji: Any
    not_assignee_id: str
    not_assignee_username: Any
    not_author_id: str
    not_author_username: Any
    not_iid: Any
    not_iteration_id: str
    not_iteration_title: Any
    not_label: Any
    not_milestone: Any
    not_milestone_id: str
    not_weight: Any
    scope: Any
    search: Any
    updated_after: Any
    updated_before: Any
    weight: float


class Job(TypedDict, total=False):
    id: str


class JobLoadMatchRequired(TypedDict):
    id: str


class JobLoadMatch(JobLoadMatchRequired, total=False):
    direct_download: Any
    token: str


class JobCreateDataRequired(TypedDict):
    post_api_v4_jobs_request: dict


class JobCreateData(JobCreateDataRequired, total=False):
    id: str


class JobUpdateData(TypedDict):
    id: str
    put_api_v4_jobs_id: dict


class MavenPackage(TypedDict):
    pass


class MavenPackageLoadMatchRequired(TypedDict):
    file_name: Any
    path: str


class MavenPackageLoadMatch(MavenPackageLoadMatchRequired, total=False):
    group_id: str
    project_id: str


class MavenPackageUpdateData(TypedDict):
    file_name: Any
    project_id: str


class Member(TypedDict, total=False):
    id: str


class MemberUpdateData(TypedDict):
    group_id: str
    id: str


class MemberRemoveMatchRequired(TypedDict):
    id: str


class MemberRemoveMatch(MemberRemoveMatchRequired, total=False):
    group_id: str
    skip_subresource: Any
    unassign_issuable: Any
    project_id: str


class MergeRequest(TypedDict, total=False):
    id: str


class MergeRequestLoadMatchRequired(TypedDict):
    id: str
    project_id: str


class MergeRequestLoadMatch(MergeRequestLoadMatchRequired, total=False):
    page: int
    per_page: int


class MergeRequestUpdateData(TypedDict):
    id: str
    project_id: str


class MergeRequestRemoveMatch(TypedDict):
    id: str
    project_id: str


class Metadata(TypedDict, total=False):
    enabled: bool
    externalK8sProxyUrl: str
    externalUrl: str
    version: str


class MetadataLoadMatch(TypedDict, total=False):
    enabled: bool
    externalK8sProxyUrl: str
    externalUrl: str
    version: str


class Migration(TypedDict):
    pass


class MigrationCreateData(TypedDict):
    timestamp: Any
    post_api_v4_admin_migrations_timestamp_mark: dict


class MlModelRegistry(TypedDict):
    pass


class MlModelRegistryLoadMatchRequired(TypedDict):
    file_name: Any
    ml_model_id: str
    project_id: str


class MlModelRegistryLoadMatch(MlModelRegistryLoadMatchRequired, total=False):
    path: str
    status: Any


class MlModelRegistryUpdateData(TypedDict):
    file_name: Any
    ml_model_id: str
    project_id: str


class Namespace(TypedDict, total=False):
    id: str


class NamespaceRemoveMatch(TypedDict):
    id: str


class Npm(TypedDict, total=False):
    id: str


class NpmUpdateData(TypedDict):
    id: str
    project_id: str
    put_api_v4_projects_id_packages_npm_package_name: dict


class NpmPackage(TypedDict):
    pass


class NpmPackageLoadMatch(TypedDict):
    project_id: str
    file_name: Any
    package_name: Any


class NpmPackageCreateData(TypedDict):
    pass


class NpmPackageUpdateDataRequired(TypedDict):
    tag: Any


class NpmPackageUpdateData(NpmPackageUpdateDataRequired, total=False):
    group_id: str
    project_id: str


class NpmPackageRemoveMatchRequired(TypedDict):
    tag: Any
    package_name: Any


class NpmPackageRemoveMatch(NpmPackageRemoveMatchRequired, total=False):
    group_id: str
    project_id: str


class Nuget(TypedDict):
    pass


class NugetUpdateData(TypedDict):
    project_id: str
    put_api_v4_projects_id_packages_nuget: dict


class NugetPackage(TypedDict, total=False):
    authors: str
    count: int
    dependencyGroups: list
    description: str
    iconUrl: str
    id: str
    items: list
    licenseUrl: str
    lower: str
    packageContent: str
    projectUrl: str
    published: str
    summary: str
    tags: str
    upper: str
    version: str


class NugetPackageLoadMatch(TypedDict):
    project_id: str


class NugetPackageListMatchRequired(TypedDict):
    package_name: Any


class NugetPackageListMatch(NugetPackageListMatchRequired, total=False):
    group_id: str
    project_id: str


class NugetPackageUpdateDataRequired(TypedDict):
    project_id: str


class NugetPackageUpdateData(NugetPackageUpdateDataRequired, total=False):
    put_api_v4_projects_id_packages_nuget_symbolpackage: dict
    put_api_v4_projects_id_packages_nuget_v2: dict
    authors: str
    count: int
    dependencyGroups: list
    description: str
    iconUrl: str
    id: str
    items: list
    licenseUrl: str
    lower: str
    packageContent: str
    projectUrl: str
    published: str
    summary: str
    tags: str
    upper: str
    version: str


class NugetPackageRemoveMatch(TypedDict):
    project_id: str
    package_name: Any
    package_version: Any


class PackageFile(TypedDict, total=False):
    id: str


class PackageFileLoadMatch(TypedDict):
    id: str
    package_id: str
    project_id: str


class PackageFileRemoveMatch(TypedDict):
    id: str
    package_id: str
    project_id: str


class Page(TypedDict):
    pass


class PageLoadMatch(TypedDict):
    project_id: str


class PageUpdateData(TypedDict):
    project_id: str
    patch_api_v4_projects_id_page: dict


class PageRemoveMatch(TypedDict):
    project_id: str


class Participant(TypedDict, total=False):
    key: str
    value: str


class ParticipantListMatchRequired(TypedDict):
    project_id: str


class ParticipantListMatch(ParticipantListMatchRequired, total=False):
    issue_id: str
    merge_request_id: str


class PersonalAccessToken(TypedDict, total=False):
    id: str


class PersonalAccessTokenRemoveMatch(TypedDict):
    id: str


class Project(TypedDict, total=False):
    before_sha: str
    committed_at: str
    coverage: float
    created_at: str
    detailed_status: dict
    duration: int
    finished_at: str
    id: int
    iid: int
    name: str
    project_id: int
    queued_duration: int
    ref: str
    sha: str
    source: str
    started_at: str
    status: str
    tag: bool
    updated_at: str
    user: dict
    web_url: str
    yaml_errors: str


class ProjectLoadMatchRequired(TypedDict):
    id: str


class ProjectLoadMatch(ProjectLoadMatchRequired, total=False):
    artifact_id: str
    artifact_path: Any
    job: Any
    job_token: Any
    file_path: Any
    range_end: Any
    range_start: Any
    ref: Any
    hook_id: str
    page: int
    per_page: int
    status: Any
    job_id: str
    lfs: Any
    ref_name: Any
    filename: Any
    secret: Any
    issue_id: str
    pipeline_id: str
    sha: Any
    upload_id: str


class ProjectCreateDataRequired(TypedDict):
    id: str


class ProjectCreateData(ProjectCreateDataRequired, total=False):
    event_id: str
    hook_id: str
    file_path: Any
    post_api_v4_projects_id_repository_files_file_path: dict
    trigger: Any
    issue_id: str
    merge_request_id: str
    project_id: str
    before_sha: str
    committed_at: str
    coverage: float
    created_at: str
    detailed_status: dict
    duration: int
    finished_at: str
    iid: int
    name: str
    queued_duration: int
    ref: str
    sha: str
    source: str
    started_at: str
    status: str
    tag: bool
    updated_at: str
    user: dict
    web_url: str
    yaml_errors: str


class ProjectUpdateDataRequired(TypedDict):
    id: str


class ProjectUpdateData(ProjectUpdateDataRequired, total=False):
    hook_id: str
    key: str
    put_api_v4_projects_id_hooks_hook_id_custom_headers_key: dict
    put_api_v4_projects_id_hooks_hook_id_url_variables_key: dict
    domain: Any
    put_api_v4_projects_id_pages_domains_domain: dict
    file_path: Any
    put_api_v4_projects_id_repository_files_file_path: dict
    put_api_v4_projects_id_custom_attributes_key: dict
    before_sha: str
    committed_at: str
    coverage: float
    created_at: str
    detailed_status: dict
    duration: int
    finished_at: str
    iid: int
    name: str
    project_id: int
    queued_duration: int
    ref: str
    sha: str
    source: str
    started_at: str
    status: str
    tag: bool
    updated_at: str
    user: dict
    web_url: str
    yaml_errors: str


class ProjectRemoveMatchRequired(TypedDict):
    id: str


class ProjectRemoveMatch(ProjectRemoveMatchRequired, total=False):
    file_path: Any
    author_email: Any
    author_name: Any
    branch: Any
    commit_message: Any
    start_branch: Any
    draft_note_id: str
    merge_request_id: str
    filename: Any
    secret: Any
    hook_id: str
    key: str
    pipeline_schedule_id: str
    domain: Any
    group_id: str
    issue_iid: Any
    job_id: str
    name: str
    package_protection_rule_id: str
    pipeline_id: str
    protection_rule_id: str
    trigger_id: str
    upload_id: str


class ProjectAvatar(TypedDict, total=False):
    id: str


class ProjectAvatarLoadMatch(TypedDict):
    id: str


class ProjectEntity(TypedDict):
    pass


class ProjectEntityCreateData(TypedDict):
    post_api_v4_import_bitbucket_server: dict


class ProjectExport(TypedDict, total=False):
    id: str


class ProjectExportLoadMatchRequired(TypedDict):
    project_id: str


class ProjectExportLoadMatch(ProjectExportLoadMatchRequired, total=False):
    batch_number: int
    batched: Any
    relation: Any


class ProjectExportCreateData(TypedDict):
    id: str
    post_api_v4_projects_id_export: dict


class ProjectHook(TypedDict, total=False):
    id: str


class ProjectHookRemoveMatch(TypedDict):
    id: str
    project_id: str


class ProjectImport(TypedDict):
    pass


class ProjectImportCreateData(TypedDict):
    pass


class ProjectImportEntity(TypedDict, total=False):
    forked: bool
    full_name: str
    full_path: str
    human_import_status_name: str
    id: int
    import_error: str
    import_source: str
    import_status: str
    import_warning: str
    name: str
    provider_link: str
    refs_url: str
    relation_type: str


class ProjectImportEntityCreateDataRequired(TypedDict):
    post_api_v4_import_bitbucket: dict


class ProjectImportEntityCreateData(ProjectImportEntityCreateDataRequired, total=False):
    forked: bool
    full_name: str
    full_path: str
    human_import_status_name: str
    id: int
    import_error: str
    import_source: str
    import_status: str
    import_warning: str
    name: str
    provider_link: str
    refs_url: str
    relation_type: str


class ProjectPackage(TypedDict, total=False):
    id: str


class ProjectPackageRemoveMatch(TypedDict):
    id: str
    project_id: str


class ProjectSnippet(TypedDict, total=False):
    id: str


class ProjectSnippetRemoveMatch(TypedDict):
    id: str
    project_id: str


class ProjectsJobTokenScope(TypedDict):
    pass


class ProjectsJobTokenScopeUpdateData(TypedDict):
    project_id: str
    patch_api_v4_projects_id_job_token_scope: dict


class ProjectsJobTokenScopeRemoveMatchRequired(TypedDict):
    project_id: str


class ProjectsJobTokenScopeRemoveMatch(ProjectsJobTokenScopeRemoveMatchRequired, total=False):
    target_group_id: str
    target_project_id: str


class ProtectedTag(TypedDict, total=False):
    id: str


class ProtectedTagRemoveMatch(TypedDict):
    id: str
    project_id: str


class Pypi(TypedDict):
    pass


class PypiCreateData(TypedDict):
    project_id: str
    post_api_v4_projects_id_packages_pypi: dict


class PypiPackage(TypedDict):
    pass


class PypiPackageLoadMatch(TypedDict):
    project_id: str


class PypiPackageCreateData(TypedDict):
    project_id: str


class Release(TypedDict, total=False):
    id: str


class ReleaseLoadMatch(TypedDict):
    project_id: str
    suffix_path: Any


class ReleaseRemoveMatch(TypedDict):
    id: str
    project_id: str


class ReleaseLink(TypedDict, total=False):
    id: str


class ReleaseLinkRemoveMatch(TypedDict):
    id: str
    project_id: str
    release_id: str


class RemoteMirror(TypedDict, total=False):
    id: str


class RemoteMirrorLoadMatch(TypedDict):
    id: str
    project_id: str


class RemoteMirrorRemoveMatch(TypedDict):
    id: str
    project_id: str


class Rpm(TypedDict):
    pass


class RpmCreateData(TypedDict):
    project_id: str


class RpmPackage(TypedDict):
    pass


class RpmPackageLoadMatchRequired(TypedDict):
    project_id: str
    file_name: Any


class RpmPackageLoadMatch(RpmPackageLoadMatchRequired, total=False):
    package_file_id: str


class RpmPackageCreateData(TypedDict):
    project_id: str


class Rubygem(TypedDict, total=False):
    id: str


class RubygemLoadMatch(TypedDict):
    id: str
    project_id: str


class RubygemPackage(TypedDict):
    pass


class RubygemPackageLoadMatchRequired(TypedDict):
    project_id: str


class RubygemPackageLoadMatch(RubygemPackageLoadMatchRequired, total=False):
    file_name: Any
    gem: Any


class RubygemPackageCreateDataRequired(TypedDict):
    project_id: str


class RubygemPackageCreateData(RubygemPackageCreateDataRequired, total=False):
    post_api_v4_projects_id_packages_rubygems_api_v1_gem: dict


class Runner(TypedDict, total=False):
    id: str


class RunnerCreateDataRequired(TypedDict):
    post_api_v4_runners_verify: dict


class RunnerCreateData(RunnerCreateDataRequired, total=False):
    id: str


class RunnerRemoveMatch(TypedDict):
    id: str


class Search(TypedDict):
    pass


class SearchLoadMatchRequired(TypedDict):
    scope: Any
    search: Any


class SearchLoadMatch(SearchLoadMatchRequired, total=False):
    confidential: Any
    field: Any
    page: int
    per_page: int
    state: Any


class SecureFile(TypedDict, total=False):
    id: str


class SecureFileLoadMatch(TypedDict):
    id: str
    project_id: str


class SecureFileRemoveMatch(TypedDict):
    id: str
    project_id: str


class Slack(TypedDict):
    pass


class SlackCreateData(TypedDict):
    post_api_v4_slack_trigger: dict


class Snippet(TypedDict, total=False):
    id: str


class SnippetLoadMatch(TypedDict):
    file_id: str
    file_path: Any
    id: str


class SnippetRemoveMatch(TypedDict):
    id: str


class Starrer(TypedDict, total=False):
    avatar_path: str
    avatar_url: str
    custom_attributes: list
    id: int
    locked: bool
    name: str
    public_email: str
    state: str
    username: str
    web_url: str


class StarrerListMatchRequired(TypedDict):
    project_id: str


class StarrerListMatch(StarrerListMatchRequired, total=False):
    page: int
    per_page: int
    search: Any


class SystemHook(TypedDict, total=False):
    id: str


class SystemHookRemoveMatch(TypedDict):
    id: str


class Tag(TypedDict, total=False):
    id: str


class TagRemoveMatch(TypedDict):
    id: str
    project_id: str


class TerraformRegistry(TypedDict, total=False):
    id: str


class TerraformRegistryLoadMatchRequired(TypedDict):
    module_system: Any


class TerraformRegistryLoadMatch(TerraformRegistryLoadMatchRequired, total=False):
    module_id: str
    project_id: str
    module_version: Any
    terraform_get: Any
    id: str
    module_name: Any
    v1_id: str


class TerraformRegistryUpdateDataRequired(TypedDict):
    module_id: str
    module_system: Any
    project_id: str


class TerraformRegistryUpdateData(TerraformRegistryUpdateDataRequired, total=False):
    file: Any
    module_version: Any
    id: str


class TerraformState(TypedDict, total=False):
    id: str


class TerraformStateLoadMatchRequired(TypedDict):
    project_id: str


class TerraformStateLoadMatch(TerraformStateLoadMatchRequired, total=False):
    serial: Any
    state_id: str
    id: str


class TerraformStateCreateData(TypedDict):
    id: str
    project_id: str


class TerraformStateRemoveMatchRequired(TypedDict):
    project_id: str


class TerraformStateRemoveMatch(TerraformStateRemoveMatchRequired, total=False):
    serial: Any
    state_id: str
    id: str


class TestReport(TypedDict, total=False):
    error_count: int
    failed_count: int
    name: str
    skipped_count: int
    success_count: int
    suite_error: str
    test_cases: list
    total_count: int
    total_time: int


class TestReportListMatch(TypedDict):
    pipeline_id: str
    project_id: str


class TestReportSummary(TypedDict, total=False):
    test_suites: dict
    total: dict


class TestReportSummaryLoadMatch(TypedDict):
    pipeline_id: str
    project_id: str


class Topic(TypedDict, total=False):
    id: str


class TopicRemoveMatch(TypedDict):
    id: str


class UnleashApi(TypedDict, total=False):
    id: str


class UnleashApiLoadMatchRequired(TypedDict):
    unleash_id: str


class UnleashApiLoadMatch(UnleashApiLoadMatchRequired, total=False):
    app_name: Any
    instance_id: str


class UsageData(TypedDict):
    pass


class UsageDataLoadMatch(TypedDict, total=False):
    include_path: Any


class UsageDataCreateData(TypedDict):
    post_api_v4_usage_data_increment_counter: dict


class User(TypedDict, total=False):
    avatar_path: str
    avatar_url: str
    custom_attributes: list
    id: int
    locked: bool
    name: str
    public_email: str
    state: str
    username: str
    web_url: str


class UserListMatchRequired(TypedDict):
    project_id: str


class UserListMatch(UserListMatchRequired, total=False):
    page: int
    per_page: int
    search: Any
    skip_user: Any


class WebCommit(TypedDict):
    pass


class WebCommitLoadMatch(TypedDict):
    pass


class Wiki(TypedDict, total=False):
    id: str


class WikiRemoveMatchRequired(TypedDict):
    id: str


class WikiRemoveMatch(WikiRemoveMatchRequired, total=False):
    group_id: str
    project_id: str
