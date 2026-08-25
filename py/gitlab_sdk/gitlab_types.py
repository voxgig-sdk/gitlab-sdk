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


class ApiEntitiesAccessRequesterListMatch(TypedDict):
    group_id: str


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
    project_id: str
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


class ApiEntitiesApplicationWithSecretCreateData(TypedDict, total=False):
    application_id: str
    application_name: str
    callback_url: str
    confidential: bool
    id: str
    secret: str


class ApiEntitiesAvatar(TypedDict, total=False):
    avatar_url: str


class ApiEntitiesAvatarLoadMatch(TypedDict, total=False):
    avatar_url: str


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


class ApiEntitiesAwardEmojiListMatch(TypedDict):
    epic_id: str
    group_id: str


class ApiEntitiesAwardEmojiCreateDataRequired(TypedDict):
    epic_id: str
    group_id: str


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


class ApiEntitiesBadgeListMatch(TypedDict):
    group_id: str


class ApiEntitiesBadgeCreateDataRequired(TypedDict):
    group_id: str


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
    project_id: str
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


class ApiEntitiesBasicBadgeDetailLoadMatch(TypedDict):
    group_id: str


class ApiEntitiesBasicGroupDetail(TypedDict):
    pass


class ApiEntitiesBasicGroupDetailCreateData(TypedDict):
    project_id: str


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


class ApiEntitiesBasicProjectDetailCreateDataRequired(TypedDict):
    project_id: str


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


class ApiEntitiesBasicRefListMatch(TypedDict):
    project_id: str
    sha: Any


class ApiEntitiesBasicSuccess(TypedDict):
    pass


class ApiEntitiesBasicSuccessCreateData(TypedDict):
    pass


class ApiEntitiesBatchedBackgroundMigration(TypedDict, total=False):
    column_name: str
    created_at: str
    id: str
    job_class_name: str
    progress: float
    status: str
    table_name: str


class ApiEntitiesBatchedBackgroundMigrationLoadMatch(TypedDict):
    id: str


class ApiEntitiesBatchedBackgroundMigrationListMatch(TypedDict, total=False):
    column_name: str
    created_at: str
    id: str
    job_class_name: str
    progress: float
    status: str
    table_name: str


class ApiEntitiesBatchedBackgroundMigrationUpdateDataRequired(TypedDict):
    batched_background_migration_id: str


class ApiEntitiesBatchedBackgroundMigrationUpdateData(ApiEntitiesBatchedBackgroundMigrationUpdateDataRequired, total=False):
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


class ApiEntitiesBranchListMatch(TypedDict):
    project_id: str


class ApiEntitiesBranchCreateDataRequired(TypedDict):
    project_id: str


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


class ApiEntitiesBulkImportCreateData(TypedDict, total=False):
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


class ApiEntitiesBulkImportsExportStatusListMatch(TypedDict):
    group_id: str


class ApiEntitiesChangelog(TypedDict, total=False):
    notes: str


class ApiEntitiesChangelogLoadMatch(TypedDict):
    project_id: str


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


class ApiEntitiesCiBridgeListMatch(TypedDict):
    pipeline_id: str
    project_id: str


class ApiEntitiesCiCatalogResourcesVersion(TypedDict):
    pass


class ApiEntitiesCiCatalogResourcesVersionCreateData(TypedDict):
    project_id: str


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


class ApiEntitiesCiJobBasicListMatch(TypedDict):
    key: str
    project_id: str


class ApiEntitiesCiJobBasicCreateDataRequired(TypedDict):
    job_id: str
    project_id: str


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


class ApiEntitiesCiJobBasicWithProjectLoadMatch(TypedDict):
    runner_id: str


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


class ApiEntitiesCiLintResultListMatch(TypedDict):
    project_id: str


class ApiEntitiesCiLintResultCreateDataRequired(TypedDict):
    project_id: str


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
    ref_id: str
    pipeline_id: str


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


class ApiEntitiesCiPipelineScheduleListMatch(TypedDict):
    project_id: str


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
    pass


class ApiEntitiesCiResourceGroup(TypedDict, total=False):
    created_at: str
    id: int
    key: str
    process_mode: str
    updated_at: str


class ApiEntitiesCiResourceGroupLoadMatch(TypedDict):
    id: str
    project_id: str


class ApiEntitiesCiResourceGroupListMatch(TypedDict):
    project_id: str


class ApiEntitiesCiResourceGroupUpdateDataRequired(TypedDict):
    id: str
    project_id: str


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


class ApiEntitiesCiRunnerLoadMatchRequired(TypedDict):
    id: int


class ApiEntitiesCiRunnerLoadMatch(ApiEntitiesCiRunnerLoadMatchRequired, total=False):
    avatar_path: str
    avatar_url: str
    custom_attributes: list
    locked: bool
    name: str
    public_email: str
    state: str
    username: str
    web_url: str


class ApiEntitiesCiRunnerCreateDataRequired(TypedDict):
    project_id: str


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
    pass


class ApiEntitiesCiSecureFile(TypedDict, total=False):
    id: str


class ApiEntitiesCiSecureFileLoadMatchRequired(TypedDict):
    project_id: str


class ApiEntitiesCiSecureFileLoadMatch(ApiEntitiesCiSecureFileLoadMatchRequired, total=False):
    id: str


class ApiEntitiesCiSecureFileCreateDataRequired(TypedDict):
    project_id: str


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


class ApiEntitiesCiVariableLoadMatch(TypedDict):
    id: str
    project_id: str


class ApiEntitiesCiVariableListMatch(TypedDict):
    pipeline_id: str
    project_id: str


class ApiEntitiesCiVariableCreateDataRequired(TypedDict):
    group_id: str


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
    group_id: str
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


class ApiEntitiesClusterCreateData(TypedDict, total=False):
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
    agent_id: str


class ApiEntitiesClustersAgentCreateDataRequired(TypedDict):
    project_id: str


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


class ApiEntitiesClustersAgentTokenBasicLoadMatch(TypedDict):
    cluster_agent_id: str
    project_id: str


class ApiEntitiesClustersAgentTokenWithToken(TypedDict):
    pass


class ApiEntitiesClustersAgentTokenWithTokenCreateData(TypedDict):
    cluster_agent_id: str
    project_id: str


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
    merge_request_id: str


class ApiEntitiesCommitCreateDataRequired(TypedDict):
    project_id: str


class ApiEntitiesCommitCreateData(ApiEntitiesCommitCreateDataRequired, total=False):
    merge_request_id: str
    sha: Any
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


class ApiEntitiesCommitDetailLoadMatch(TypedDict):
    project_id: str
    sha: Any


class ApiEntitiesCommitDetailCreateDataRequired(TypedDict):
    project_id: str


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


class ApiEntitiesCommitNoteListMatch(TypedDict):
    project_id: str
    sha: Any


class ApiEntitiesCommitNoteCreateDataRequired(TypedDict):
    project_id: str
    sha: Any


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


class ApiEntitiesCommitSequenceLoadMatch(TypedDict):
    project_id: str
    sha: Any


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


class ApiEntitiesCommitStatusListMatch(TypedDict):
    project_id: str
    sha: Any


class ApiEntitiesCommitStatusCreateDataRequired(TypedDict):
    id: str
    project_id: str


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


class ApiEntitiesCompareListMatch(TypedDict):
    project_id: str


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


class ApiEntitiesContainerRegistryRepositoryLoadMatch(TypedDict):
    id: str


class ApiEntitiesContainerRegistryRepositoryListMatch(TypedDict):
    project_id: str


class ApiEntitiesContainerRegistryTag(TypedDict, total=False):
    location: str
    name: str
    path: str


class ApiEntitiesContainerRegistryTagListMatch(TypedDict):
    project_id: str
    repository_id: str


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


class ApiEntitiesContributorLoadMatch(TypedDict):
    project_id: str


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


class ApiEntitiesDeployKeyCreateData(TypedDict, total=False):
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


class ApiEntitiesDeployKeysProjectListMatch(TypedDict):
    project_id: str


class ApiEntitiesDeployKeysProjectCreateDataRequired(TypedDict):
    project_id: str


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
    expired: bool
    expires_at: str
    id: int
    name: str
    revoked: bool
    scopes: list
    username: str


class ApiEntitiesDeployTokenWithToken(TypedDict):
    pass


class ApiEntitiesDeployTokenWithTokenCreateData(TypedDict):
    group_id: str


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


class ApiEntitiesDeploymentListMatch(TypedDict):
    project_id: str


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


class ApiEntitiesDiffLoadMatch(TypedDict):
    merge_request_id: str
    project_id: str


class ApiEntitiesDiffListMatch(TypedDict):
    project_id: str
    sha: Any


class ApiEntitiesDiscoveredCluster(TypedDict, total=False):
    groups: str
    projects: str


class ApiEntitiesDiscoveredClusterLoadMatch(TypedDict, total=False):
    groups: str
    projects: str


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


class ApiEntitiesEnvironmentListMatch(TypedDict):
    project_id: str


class ApiEntitiesEnvironmentCreateDataRequired(TypedDict):
    project_id: str


class ApiEntitiesEnvironmentCreateData(ApiEntitiesEnvironmentCreateDataRequired, total=False):
    environment_id: str
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


class ApiEntitiesEventLoadMatch(TypedDict):
    project_id: str


class ApiEntitiesEventListMatch(TypedDict, total=False):
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


class ApiEntitiesFeatureFlagListMatch(TypedDict):
    project_id: str


class ApiEntitiesFeatureFlagCreateDataRequired(TypedDict):
    project_id: str


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


class ApiEntitiesFeatureFlagUserListListMatch(TypedDict):
    project_id: str


class ApiEntitiesFeatureFlagUserListCreateDataRequired(TypedDict):
    project_id: str


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


class ApiEntitiesFreezePeriodListMatch(TypedDict):
    project_id: str


class ApiEntitiesFreezePeriodCreateDataRequired(TypedDict):
    project_id: str


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


class ApiEntitiesGroupLoadMatch(TypedDict):
    project_id: str


class ApiEntitiesGroupListMatch(TypedDict, total=False):
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


class ApiEntitiesGroupCreateData(TypedDict, total=False):
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


class ApiEntitiesGroupDetailLoadMatch(TypedDict):
    id: str


class ApiEntitiesGroupDetailCreateDataRequired(TypedDict):
    group_id: str


class ApiEntitiesGroupDetailCreateData(ApiEntitiesGroupDetailCreateDataRequired, total=False):
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


class ApiEntitiesHookCreateData(TypedDict, total=False):
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


class ApiEntitiesInvitationListMatch(TypedDict):
    group_id: str


class ApiEntitiesInvitationCreateDataRequired(TypedDict):
    group_id: str


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
    project_id: str
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
    merge_request_id: str
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


class ApiEntitiesIssueCreateDataRequired(TypedDict):
    project_id: str


class ApiEntitiesIssueCreateData(ApiEntitiesIssueCreateDataRequired, total=False):
    issue_id: str
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
    issue_id: str
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


class ApiEntitiesLicenseLoadMatch(TypedDict):
    id: str
    name: str
    type: Any


class ApiEntitiesMarkdown(TypedDict):
    pass


class ApiEntitiesMarkdownCreateData(TypedDict):
    pass


class ApiEntitiesMarkdownUploadAdmin(TypedDict, total=False):
    created_at: str
    filename: str
    id: str
    size: str
    uploaded_by: dict


class ApiEntitiesMarkdownUploadAdminListMatch(TypedDict):
    group_id: str


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


class ApiEntitiesMemberListMatch(TypedDict):
    group_id: str


class ApiEntitiesMemberCreateDataRequired(TypedDict):
    group_id: str


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
    project_id: str
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


class ApiEntitiesMergeLoadMatch(TypedDict):
    merge_request_iid: Any
    project_id: str


class ApiEntitiesMergeCreateDataRequired(TypedDict):
    project_id: str


class ApiEntitiesMergeCreateData(ApiEntitiesMergeCreateDataRequired, total=False):
    merge_request_id: str
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
    merge_request_iid: Any
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


class ApiEntitiesMergeRequestBasicLoadMatchRequired(TypedDict):
    id: int


class ApiEntitiesMergeRequestBasicLoadMatch(ApiEntitiesMergeRequestBasicLoadMatchRequired, total=False):
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


class ApiEntitiesMergeRequestBasicListMatchRequired(TypedDict):
    project_id: str


class ApiEntitiesMergeRequestBasicListMatch(ApiEntitiesMergeRequestBasicListMatchRequired, total=False):
    deployment_id: str
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


class ApiEntitiesMergeRequestChangeLoadMatch(TypedDict):
    merge_request_id: str
    project_id: str


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


class ApiEntitiesMergeRequestDiffListMatch(TypedDict):
    merge_request_id: str
    project_id: str


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


class ApiEntitiesMergeRequestDiffFullLoadMatch(TypedDict):
    merge_request_id: str
    project_id: str
    version_id: str


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


class ApiEntitiesMetricImageCreateData(ApiEntitiesMetricImageCreateDataRequired, total=False):
    created_at: str
    file_path: str
    filename: str
    id: int
    url: str
    url_text: str


class ApiEntitiesMetricImageUpdateDataRequired(TypedDict):
    alert_management_alert_id: str
    id: str
    project_id: str


class ApiEntitiesMetricImageUpdateData(ApiEntitiesMetricImageUpdateDataRequired, total=False):
    created_at: str
    file_path: str
    filename: str
    url: str
    url_text: str


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


class ApiEntitiesMrNoteLoadMatch(TypedDict):
    merge_request_id: str
    project_id: str


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


class ApiEntitiesNamespaceUpdateDataRequired(TypedDict):
    id: str


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


class ApiEntitiesNamespaceExistenceListMatch(TypedDict):
    namespace_id: str


class ApiEntitiesNamespacesStorageLimitExclusion(TypedDict, total=False):
    id: int
    namespace_id: int
    namespace_name: str
    reason: str


class ApiEntitiesNamespacesStorageLimitExclusionLoadMatchRequired(TypedDict):
    id: int


class ApiEntitiesNamespacesStorageLimitExclusionLoadMatch(ApiEntitiesNamespacesStorageLimitExclusionLoadMatchRequired, total=False):
    namespace_id: int
    namespace_name: str
    reason: str


class ApiEntitiesNamespacesStorageLimitExclusionCreateDataRequired(TypedDict):
    namespace_id: str


class ApiEntitiesNamespacesStorageLimitExclusionCreateData(ApiEntitiesNamespacesStorageLimitExclusionCreateDataRequired, total=False):
    id: int
    namespace_name: str
    reason: str


class ApiEntitiesNpmPackage(TypedDict, total=False):
    disttags: dict
    name: str
    versions: dict


class ApiEntitiesNpmPackageLoadMatch(TypedDict, total=False):
    disttags: dict
    name: str
    versions: dict


class ApiEntitiesNpmPackageTag(TypedDict):
    pass


class ApiEntitiesNpmPackageTagLoadMatch(TypedDict):
    pass


class ApiEntitiesNugetPackagesVersion(TypedDict, total=False):
    versions: list


class ApiEntitiesNugetPackagesVersionListMatch(TypedDict):
    project_id: str


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


class ApiEntitiesNugetSearchResultListMatch(TypedDict):
    project_id: str


class ApiEntitiesNugetServiceIndex(TypedDict, total=False):
    resources: list
    version: str


class ApiEntitiesNugetServiceIndexListMatch(TypedDict):
    project_id: str


class ApiEntitiesOrganizationsOrganization(TypedDict):
    pass


class ApiEntitiesOrganizationsOrganizationCreateData(TypedDict):
    pass


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


class ApiEntitiesPackageListMatch(TypedDict):
    group_id: str


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


class ApiEntitiesPackageFileListMatch(TypedDict):
    package_id: str
    project_id: str


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


class ApiEntitiesPackagePipelineLoadMatch(TypedDict):
    package_id: str
    project_id: str


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


class ApiEntitiesPackagesDebianDistributionListMatch(TypedDict):
    project_id: str


class ApiEntitiesPackagesDebianDistributionCreateDataRequired(TypedDict):
    project_id: str


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
    project_id: str
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


class ApiEntitiesPagesDomainListMatch(TypedDict):
    project_id: str


class ApiEntitiesPagesDomainCreateDataRequired(TypedDict):
    project_id: str


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
    expiration: str
    expired: str


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


class ApiEntitiesPersonalSnippetCreateData(TypedDict, total=False):
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


class ApiEntitiesPlanLimitLoadMatch(TypedDict):
    pass


class ApiEntitiesPlanLimitUpdateData(TypedDict):
    pass


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


class ApiEntitiesProjectListMatch(TypedDict):
    project_id: str


class ApiEntitiesProjectCreateDataRequired(TypedDict):
    user_id: str


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


class ApiEntitiesProjectHookListMatch(TypedDict):
    project_id: str


class ApiEntitiesProjectHookCreateDataRequired(TypedDict):
    project_id: str


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


class ApiEntitiesProjectImportStatusCreateData(TypedDict, total=False):
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


class ApiEntitiesProjectSnippetCreateDataRequired(TypedDict):
    project_id: str


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


class ApiEntitiesProjectWithAccessLoadMatch(TypedDict):
    id: str


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


class ApiEntitiesProjectsContainerRegistryProtectionRuleCreateData(ApiEntitiesProjectsContainerRegistryProtectionRuleCreateDataRequired, total=False):
    id: int
    minimum_access_level_for_delete: str
    minimum_access_level_for_push: str
    repository_path_pattern: str


class ApiEntitiesProjectsContainerRegistryProtectionRuleUpdateDataRequired(TypedDict):
    id: str
    project_id: str


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


class ApiEntitiesProjectsPackagesProtectionRuleCreateData(ApiEntitiesProjectsPackagesProtectionRuleCreateDataRequired, total=False):
    id: int
    minimum_access_level_for_delete: str
    minimum_access_level_for_push: str
    package_name_pattern: str
    package_type: str


class ApiEntitiesProjectsPackagesProtectionRuleUpdateDataRequired(TypedDict):
    id: str
    project_id: str


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


class ApiEntitiesProjectsTopicCreateData(TypedDict, total=False):
    avatar_url: str
    description: str
    id: str
    name: str
    organization_id: str
    title: str
    total_projects_count: str


class ApiEntitiesProjectsTopicUpdateDataRequired(TypedDict):
    id: str


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


class ApiEntitiesProtectedBranchListMatch(TypedDict):
    project_id: str


class ApiEntitiesProtectedBranchCreateDataRequired(TypedDict):
    project_id: str


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


class ApiEntitiesProtectedTagListMatch(TypedDict):
    project_id: str


class ApiEntitiesProtectedTagCreateDataRequired(TypedDict):
    project_id: str


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


class ApiEntitiesPublicGroupDetailListMatch(TypedDict):
    project_id: str


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


class ApiEntitiesRelationImportTrackerCreateData(TypedDict):
    pass


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


class ApiEntitiesReleaseLoadMatch(TypedDict):
    id: str
    project_id: str


class ApiEntitiesReleaseListMatch(TypedDict):
    project_id: str


class ApiEntitiesReleaseCreateDataRequired(TypedDict):
    project_id: str


class ApiEntitiesReleaseCreateData(ApiEntitiesReleaseCreateDataRequired, total=False):
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


class ApiEntitiesReleasesLinkListMatch(TypedDict):
    project_id: str
    release_id: str


class ApiEntitiesReleasesLinkCreateDataRequired(TypedDict):
    project_id: str
    release_id: str


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


class ApiEntitiesRemoteMirrorListMatch(TypedDict):
    project_id: str


class ApiEntitiesRemoteMirrorCreateDataRequired(TypedDict):
    project_id: str


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


class ApiEntitiesRepositoryHealthLoadMatch(TypedDict):
    project_id: str


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


class ApiEntitiesSuggestionUpdateData(TypedDict, total=False):
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


class ApiEntitiesSystemBroadcastMessageCreateData(TypedDict, total=False):
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


class ApiEntitiesTagListMatch(TypedDict):
    project_id: str


class ApiEntitiesTagCreateDataRequired(TypedDict):
    project_id: str


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


class ApiEntitiesTemplatesListLoadMatch(TypedDict):
    project_id: str
    type: Any


class ApiEntitiesTerraformModuleVersion(TypedDict, total=False):
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


class ApiEntitiesTreeObjectLoadMatch(TypedDict):
    project_id: str


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


class ApiEntitiesTriggerListMatch(TypedDict):
    project_id: str


class ApiEntitiesTriggerCreateDataRequired(TypedDict):
    project_id: str


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


class ApiEntitiesUserPublicListMatch(TypedDict):
    group_id: str


class ApiEntitiesUserWithAdmin(TypedDict, total=False):
    key: str
    value: str


class ApiEntitiesUserWithAdminListMatch(TypedDict, total=False):
    key: str
    value: str


class ApiEntitiesWikiAttachment(TypedDict):
    pass


class ApiEntitiesWikiAttachmentCreateData(TypedDict):
    group_id: str


class ApiEntitiesWikiPage(TypedDict):
    pass


class ApiEntitiesWikiPageLoadMatchRequired(TypedDict):
    slug: str


class ApiEntitiesWikiPageLoadMatch(ApiEntitiesWikiPageLoadMatchRequired, total=False):
    group_id: str
    project_id: str


class ApiEntitiesWikiPageCreateData(TypedDict):
    group_id: str


class ApiEntitiesWikiPageUpdateDataRequired(TypedDict):
    slug: str


class ApiEntitiesWikiPageUpdateData(ApiEntitiesWikiPageUpdateDataRequired, total=False):
    group_id: str
    project_id: str


class ApiEntitiesWikiPageBasic(TypedDict, total=False):
    format: str
    slug: str
    title: str
    wiki_page_meta_id: int


class ApiEntitiesWikiPageBasicListMatch(TypedDict):
    group_id: str


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
    conan_id: str
    package_id: str
    project_id: str
    revision_id: str
    file_id: str


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


class DebianDistribution(TypedDict, total=False):
    id: str


class DebianDistributionRemoveMatchRequired(TypedDict):
    id: str


class DebianDistributionRemoveMatch(DebianDistributionRemoveMatchRequired, total=False):
    group_id: str
    project_id: str


class DebianPackage(TypedDict, total=False):
    id: str


class DebianPackageLoadMatch(TypedDict):
    distribution: Any
    file_name: Any
    id: str
    letter: Any
    package_name: Any
    package_version: Any


class DebianPackageUpdateDataRequired(TypedDict):
    file_name: Any
    project_id: str


class DebianPackageUpdateData(DebianPackageUpdateDataRequired, total=False):
    id: str


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


class EeApiEntitiesAuditEventListMatch(TypedDict):
    group_id: str


class EeApiEntitiesBillableMembership(TypedDict, total=False):
    custom_role: str
    integer_value: str
    string_value: str


class EeApiEntitiesBillableMembershipLoadMatch(TypedDict):
    billable_member_id: str
    group_id: str


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


class EeApiEntitiesGeoNodeStatusCreateData(TypedDict, total=False):
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


class EeApiEntitiesSshCertificateListMatch(TypedDict):
    group_id: str


class EeApiEntitiesSshCertificateCreateDataRequired(TypedDict):
    group_id: str


class EeApiEntitiesSshCertificateCreateData(EeApiEntitiesSshCertificateCreateDataRequired, total=False):
    created_at: str
    id: int
    key: str
    title: str


class Environment(TypedDict, total=False):
    id: str


class EnvironmentCreateDataRequired(TypedDict):
    project_id: str


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


class FeatureFlagLoadMatch(TypedDict):
    project_id: str


class FeatureFlagCreateDataRequired(TypedDict):
    unleash_id: str


class FeatureFlagCreateData(FeatureFlagCreateDataRequired, total=False):
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


class GenericPackageLoadMatch(TypedDict):
    file_name: Any
    generic_id: str
    project_id: str


class GenericPackageUpdateData(TypedDict):
    file_name: Any
    generic_id: str
    project_id: str


class Geo(TypedDict):
    pass


class GeoLoadMatch(TypedDict):
    replicable_id: str
    replicable_name: Any


class GeoCreateData(TypedDict):
    pass


class GoProxy(TypedDict):
    pass


class GoProxyLoadMatchRequired(TypedDict):
    project_id: str


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


class GroupCreateData(TypedDict):
    id: str


class GroupUpdateDataRequired(TypedDict):
    id: str


class GroupUpdateData(GroupUpdateDataRequired, total=False):
    key: str
    member_id: str


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


class GroupExportLoadMatch(TypedDict):
    group_id: str


class GroupExportCreateData(TypedDict):
    id: str


class GroupImport(TypedDict):
    pass


class GroupImportCreateData(TypedDict):
    pass


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
    api_id: str


class Hook(TypedDict, total=False):
    id: str


class HookCreateData(TypedDict):
    id: str


class HookUpdateData(TypedDict):
    id: str
    key: str


class HookRemoveMatch(TypedDict):
    id: str
    key: str


class Import(TypedDict):
    pass


class ImportCreateData(TypedDict):
    pass


class Integration(TypedDict, total=False):
    id: str


class IntegrationCreateData(TypedDict, total=False):
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


class IssuesStatisticLoadMatch(TypedDict):
    pass


class Job(TypedDict, total=False):
    id: str


class JobLoadMatch(TypedDict):
    id: str


class JobCreateData(TypedDict, total=False):
    id: str


class JobUpdateData(TypedDict):
    id: str


class MavenPackage(TypedDict):
    pass


class MavenPackageLoadMatchRequired(TypedDict):
    file_name: Any


class MavenPackageLoadMatch(MavenPackageLoadMatchRequired, total=False):
    group_id: str
    project_id: str


class MavenPackageUpdateData(TypedDict):
    file_name: Any
    project_id: str


class Member(TypedDict, total=False):
    id: str


class MemberRemoveMatchRequired(TypedDict):
    id: str


class MemberRemoveMatch(MemberRemoveMatchRequired, total=False):
    group_id: str
    project_id: str


class MergeRequest(TypedDict, total=False):
    id: str


class MergeRequestLoadMatch(TypedDict):
    id: str
    project_id: str


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


class MlModelRegistry(TypedDict):
    pass


class MlModelRegistryLoadMatch(TypedDict):
    file_name: Any
    ml_model_id: str
    project_id: str


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


class NpmPackage(TypedDict):
    pass


class NpmPackageLoadMatch(TypedDict):
    project_id: str


class NpmPackageCreateData(TypedDict):
    pass


class NpmPackageUpdateDataRequired(TypedDict):
    tag: Any


class NpmPackageUpdateData(NpmPackageUpdateDataRequired, total=False):
    group_id: str
    project_id: str


class NpmPackageRemoveMatchRequired(TypedDict):
    tag: Any


class NpmPackageRemoveMatch(NpmPackageRemoveMatchRequired, total=False):
    group_id: str
    project_id: str


class Nuget(TypedDict):
    pass


class NugetUpdateData(TypedDict):
    project_id: str


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


class NugetPackageListMatch(TypedDict):
    project_id: str


class NugetPackageUpdateDataRequired(TypedDict):
    project_id: str


class NugetPackageUpdateData(NugetPackageUpdateDataRequired, total=False):
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
    file_path: Any
    hook_id: str
    job_id: str
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
    trigger: Any
    issue_id: str
    merge_request_id: str
    pipeline_schedule_id: str
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
    domain: Any
    draft_note_id: str
    merge_request_id: str
    file_path: Any
    pipeline_id: str
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
    pass


class ProjectExport(TypedDict, total=False):
    id: str


class ProjectExportLoadMatch(TypedDict):
    project_id: str


class ProjectExportCreateData(TypedDict):
    id: str


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


class ProjectImportEntityCreateData(TypedDict, total=False):
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


class RemoteMirrorCreateData(TypedDict):
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


class RpmPackageLoadMatch(TypedDict):
    project_id: str


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


class RubygemPackageCreateData(TypedDict):
    project_id: str


class Runner(TypedDict, total=False):
    id: str


class RunnerCreateData(TypedDict, total=False):
    id: str


class RunnerRemoveMatch(TypedDict):
    id: str


class Search(TypedDict):
    pass


class SearchLoadMatch(TypedDict):
    pass


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
    pass


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


class StarrerListMatch(TypedDict):
    project_id: str


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
    id: str
    module_name: Any
    v1_id: str


class TerraformRegistryUpdateDataRequired(TypedDict):
    module_id: str
    module_system: Any
    project_id: str


class TerraformRegistryUpdateData(TerraformRegistryUpdateDataRequired, total=False):
    id: str


class TerraformState(TypedDict, total=False):
    id: str


class TerraformStateLoadMatchRequired(TypedDict):
    project_id: str


class TerraformStateLoadMatch(TerraformStateLoadMatchRequired, total=False):
    serial: Any
    state_id: str
    id: str


class TerraformStateCreateDataRequired(TypedDict):
    project_id: str


class TerraformStateCreateData(TerraformStateCreateDataRequired, total=False):
    name: str
    id: str


class TerraformStateRemoveMatchRequired(TypedDict):
    project_id: str


class TerraformStateRemoveMatch(TerraformStateRemoveMatchRequired, total=False):
    name: str
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


class UnleashApiLoadMatch(TypedDict):
    unleash_id: str


class UsageData(TypedDict):
    pass


class UsageDataLoadMatch(TypedDict):
    pass


class UsageDataCreateData(TypedDict):
    pass


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


class UserListMatch(TypedDict):
    project_id: str


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
