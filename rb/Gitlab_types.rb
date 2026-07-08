# frozen_string_literal: true

# Typed models for the Gitlab SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# AccessRequest entity data model.
class AccessRequest
end

# Request payload for AccessRequest#remove.
#
# @!attribute [rw] group_id
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String, nil]
AccessRequestRemoveMatch = Struct.new(
  :group_id,
  :id,
  :project_id,
  keyword_init: true
)

# AlertManagement entity data model.
class AlertManagement
end

# Request payload for AlertManagement#create.
#
# @!attribute [rw] alert_management_alert_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
AlertManagementCreateData = Struct.new(
  :alert_management_alert_id,
  :project_id,
  keyword_init: true
)

# Request payload for AlertManagement#remove.
#
# @!attribute [rw] alert_management_alert_id
#   @return [String]
#
# @!attribute [rw] metric_image_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
AlertManagementRemoveMatch = Struct.new(
  :alert_management_alert_id,
  :metric_image_id,
  :project_id,
  keyword_init: true
)

# ApiEntitiesAccessRequester entity data model.
#
# @!attribute [rw] avatar_path
#   @return [String, nil]
#
# @!attribute [rw] avatar_url
#   @return [String, nil]
#
# @!attribute [rw] custom_attribute
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] key
#   @return [String, nil]
#
# @!attribute [rw] locked
#   @return [Boolean, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] public_email
#   @return [String, nil]
#
# @!attribute [rw] requested_at
#   @return [String, nil]
#
# @!attribute [rw] state
#   @return [String, nil]
#
# @!attribute [rw] username
#   @return [String, nil]
#
# @!attribute [rw] value
#   @return [String, nil]
#
# @!attribute [rw] web_url
#   @return [String, nil]
ApiEntitiesAccessRequester = Struct.new(
  :avatar_path,
  :avatar_url,
  :custom_attribute,
  :id,
  :key,
  :locked,
  :name,
  :public_email,
  :requested_at,
  :state,
  :username,
  :value,
  :web_url,
  keyword_init: true
)

# Request payload for ApiEntitiesAccessRequester#list.
#
# @!attribute [rw] group_id
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String, nil]
ApiEntitiesAccessRequesterListMatch = Struct.new(
  :group_id,
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesAccessRequester#create.
#
# @!attribute [rw] group_id
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String, nil]
ApiEntitiesAccessRequesterCreateData = Struct.new(
  :group_id,
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesAccessRequester#update.
#
# @!attribute [rw] access_request_id
#   @return [String]
#
# @!attribute [rw] group_id
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String, nil]
ApiEntitiesAccessRequesterUpdateData = Struct.new(
  :access_request_id,
  :group_id,
  :project_id,
  keyword_init: true
)

# ApiEntitiesAppearance entity data model.
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] email_header_and_footer_enabled
#   @return [String, nil]
#
# @!attribute [rw] favicon
#   @return [String, nil]
#
# @!attribute [rw] footer_message
#   @return [String, nil]
#
# @!attribute [rw] header_logo
#   @return [String, nil]
#
# @!attribute [rw] header_message
#   @return [String, nil]
#
# @!attribute [rw] logo
#   @return [String, nil]
#
# @!attribute [rw] member_guideline
#   @return [String, nil]
#
# @!attribute [rw] message_background_color
#   @return [String, nil]
#
# @!attribute [rw] message_font_color
#   @return [String, nil]
#
# @!attribute [rw] new_project_guideline
#   @return [String, nil]
#
# @!attribute [rw] profile_image_guideline
#   @return [String, nil]
#
# @!attribute [rw] pwa_description
#   @return [String, nil]
#
# @!attribute [rw] pwa_icon
#   @return [String, nil]
#
# @!attribute [rw] pwa_name
#   @return [String, nil]
#
# @!attribute [rw] pwa_short_name
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
ApiEntitiesAppearance = Struct.new(
  :description,
  :email_header_and_footer_enabled,
  :favicon,
  :footer_message,
  :header_logo,
  :header_message,
  :logo,
  :member_guideline,
  :message_background_color,
  :message_font_color,
  :new_project_guideline,
  :profile_image_guideline,
  :pwa_description,
  :pwa_icon,
  :pwa_name,
  :pwa_short_name,
  :title,
  keyword_init: true
)

# Request payload for ApiEntitiesAppearance#load.
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] email_header_and_footer_enabled
#   @return [String, nil]
#
# @!attribute [rw] favicon
#   @return [String, nil]
#
# @!attribute [rw] footer_message
#   @return [String, nil]
#
# @!attribute [rw] header_logo
#   @return [String, nil]
#
# @!attribute [rw] header_message
#   @return [String, nil]
#
# @!attribute [rw] logo
#   @return [String, nil]
#
# @!attribute [rw] member_guideline
#   @return [String, nil]
#
# @!attribute [rw] message_background_color
#   @return [String, nil]
#
# @!attribute [rw] message_font_color
#   @return [String, nil]
#
# @!attribute [rw] new_project_guideline
#   @return [String, nil]
#
# @!attribute [rw] profile_image_guideline
#   @return [String, nil]
#
# @!attribute [rw] pwa_description
#   @return [String, nil]
#
# @!attribute [rw] pwa_icon
#   @return [String, nil]
#
# @!attribute [rw] pwa_name
#   @return [String, nil]
#
# @!attribute [rw] pwa_short_name
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
ApiEntitiesAppearanceLoadMatch = Struct.new(
  :description,
  :email_header_and_footer_enabled,
  :favicon,
  :footer_message,
  :header_logo,
  :header_message,
  :logo,
  :member_guideline,
  :message_background_color,
  :message_font_color,
  :new_project_guideline,
  :profile_image_guideline,
  :pwa_description,
  :pwa_icon,
  :pwa_name,
  :pwa_short_name,
  :title,
  keyword_init: true
)

# Request payload for ApiEntitiesAppearance#update.
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] email_header_and_footer_enabled
#   @return [String, nil]
#
# @!attribute [rw] favicon
#   @return [String, nil]
#
# @!attribute [rw] footer_message
#   @return [String, nil]
#
# @!attribute [rw] header_logo
#   @return [String, nil]
#
# @!attribute [rw] header_message
#   @return [String, nil]
#
# @!attribute [rw] logo
#   @return [String, nil]
#
# @!attribute [rw] member_guideline
#   @return [String, nil]
#
# @!attribute [rw] message_background_color
#   @return [String, nil]
#
# @!attribute [rw] message_font_color
#   @return [String, nil]
#
# @!attribute [rw] new_project_guideline
#   @return [String, nil]
#
# @!attribute [rw] profile_image_guideline
#   @return [String, nil]
#
# @!attribute [rw] pwa_description
#   @return [String, nil]
#
# @!attribute [rw] pwa_icon
#   @return [String, nil]
#
# @!attribute [rw] pwa_name
#   @return [String, nil]
#
# @!attribute [rw] pwa_short_name
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
ApiEntitiesAppearanceUpdateData = Struct.new(
  :description,
  :email_header_and_footer_enabled,
  :favicon,
  :footer_message,
  :header_logo,
  :header_message,
  :logo,
  :member_guideline,
  :message_background_color,
  :message_font_color,
  :new_project_guideline,
  :profile_image_guideline,
  :pwa_description,
  :pwa_icon,
  :pwa_name,
  :pwa_short_name,
  :title,
  keyword_init: true
)

# ApiEntitiesApplication entity data model.
#
# @!attribute [rw] application_id
#   @return [String, nil]
#
# @!attribute [rw] application_name
#   @return [String, nil]
#
# @!attribute [rw] callback_url
#   @return [String, nil]
#
# @!attribute [rw] confidential
#   @return [Boolean, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
ApiEntitiesApplication = Struct.new(
  :application_id,
  :application_name,
  :callback_url,
  :confidential,
  :id,
  keyword_init: true
)

# Request payload for ApiEntitiesApplication#list.
#
# @!attribute [rw] application_id
#   @return [String, nil]
#
# @!attribute [rw] application_name
#   @return [String, nil]
#
# @!attribute [rw] callback_url
#   @return [String, nil]
#
# @!attribute [rw] confidential
#   @return [Boolean, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
ApiEntitiesApplicationListMatch = Struct.new(
  :application_id,
  :application_name,
  :callback_url,
  :confidential,
  :id,
  keyword_init: true
)

# ApiEntitiesApplicationStatistic entity data model.
#
# @!attribute [rw] active_user
#   @return [Integer, nil]
#
# @!attribute [rw] fork
#   @return [Integer, nil]
#
# @!attribute [rw] group
#   @return [Integer, nil]
#
# @!attribute [rw] issue
#   @return [Integer, nil]
#
# @!attribute [rw] merge_request
#   @return [Integer, nil]
#
# @!attribute [rw] milestone
#   @return [Integer, nil]
#
# @!attribute [rw] note
#   @return [Integer, nil]
#
# @!attribute [rw] project
#   @return [Integer, nil]
#
# @!attribute [rw] snippet
#   @return [Integer, nil]
#
# @!attribute [rw] ssh_key
#   @return [Integer, nil]
#
# @!attribute [rw] user
#   @return [Integer, nil]
ApiEntitiesApplicationStatistic = Struct.new(
  :active_user,
  :fork,
  :group,
  :issue,
  :merge_request,
  :milestone,
  :note,
  :project,
  :snippet,
  :ssh_key,
  :user,
  keyword_init: true
)

# Request payload for ApiEntitiesApplicationStatistic#load.
#
# @!attribute [rw] active_user
#   @return [Integer, nil]
#
# @!attribute [rw] fork
#   @return [Integer, nil]
#
# @!attribute [rw] group
#   @return [Integer, nil]
#
# @!attribute [rw] issue
#   @return [Integer, nil]
#
# @!attribute [rw] merge_request
#   @return [Integer, nil]
#
# @!attribute [rw] milestone
#   @return [Integer, nil]
#
# @!attribute [rw] note
#   @return [Integer, nil]
#
# @!attribute [rw] project
#   @return [Integer, nil]
#
# @!attribute [rw] snippet
#   @return [Integer, nil]
#
# @!attribute [rw] ssh_key
#   @return [Integer, nil]
#
# @!attribute [rw] user
#   @return [Integer, nil]
ApiEntitiesApplicationStatisticLoadMatch = Struct.new(
  :active_user,
  :fork,
  :group,
  :issue,
  :merge_request,
  :milestone,
  :note,
  :project,
  :snippet,
  :ssh_key,
  :user,
  keyword_init: true
)

# ApiEntitiesApplicationWithSecret entity data model.
#
# @!attribute [rw] application_id
#   @return [String, nil]
#
# @!attribute [rw] application_name
#   @return [String, nil]
#
# @!attribute [rw] callback_url
#   @return [String, nil]
#
# @!attribute [rw] confidential
#   @return [Boolean, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] secret
#   @return [String, nil]
ApiEntitiesApplicationWithSecret = Struct.new(
  :application_id,
  :application_name,
  :callback_url,
  :confidential,
  :id,
  :secret,
  keyword_init: true
)

# Request payload for ApiEntitiesApplicationWithSecret#create.
#
# @!attribute [rw] application_id
#   @return [String, nil]
ApiEntitiesApplicationWithSecretCreateData = Struct.new(
  :application_id,
  keyword_init: true
)

# ApiEntitiesAvatar entity data model.
#
# @!attribute [rw] avatar_url
#   @return [String, nil]
ApiEntitiesAvatar = Struct.new(
  :avatar_url,
  keyword_init: true
)

# Request payload for ApiEntitiesAvatar#load.
#
# @!attribute [rw] avatar_url
#   @return [String, nil]
ApiEntitiesAvatarLoadMatch = Struct.new(
  :avatar_url,
  keyword_init: true
)

# ApiEntitiesAwardEmoji entity data model.
#
# @!attribute [rw] awardable_id
#   @return [Integer, nil]
#
# @!attribute [rw] awardable_type
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
#
# @!attribute [rw] user
#   @return [Hash, nil]
ApiEntitiesAwardEmoji = Struct.new(
  :awardable_id,
  :awardable_type,
  :created_at,
  :id,
  :name,
  :updated_at,
  :url,
  :user,
  keyword_init: true
)

# Request payload for ApiEntitiesAwardEmoji#load.
#
# @!attribute [rw] epic_id
#   @return [String, nil]
#
# @!attribute [rw] group_id
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] note_id
#   @return [String, nil]
#
# @!attribute [rw] issue_id
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String, nil]
#
# @!attribute [rw] merge_request_id
#   @return [String, nil]
#
# @!attribute [rw] snippet_id
#   @return [String, nil]
ApiEntitiesAwardEmojiLoadMatch = Struct.new(
  :epic_id,
  :group_id,
  :id,
  :note_id,
  :issue_id,
  :project_id,
  :merge_request_id,
  :snippet_id,
  keyword_init: true
)

# Request payload for ApiEntitiesAwardEmoji#list.
#
# @!attribute [rw] epic_id
#   @return [String, nil]
#
# @!attribute [rw] group_id
#   @return [String, nil]
#
# @!attribute [rw] note_id
#   @return [String, nil]
#
# @!attribute [rw] issue_id
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String, nil]
#
# @!attribute [rw] merge_request_id
#   @return [String, nil]
#
# @!attribute [rw] snippet_id
#   @return [String, nil]
ApiEntitiesAwardEmojiListMatch = Struct.new(
  :epic_id,
  :group_id,
  :note_id,
  :issue_id,
  :project_id,
  :merge_request_id,
  :snippet_id,
  keyword_init: true
)

# Request payload for ApiEntitiesAwardEmoji#create.
#
# @!attribute [rw] epic_id
#   @return [String, nil]
#
# @!attribute [rw] group_id
#   @return [String, nil]
#
# @!attribute [rw] note_id
#   @return [String, nil]
#
# @!attribute [rw] issue_id
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String, nil]
#
# @!attribute [rw] merge_request_id
#   @return [String, nil]
#
# @!attribute [rw] snippet_id
#   @return [String, nil]
ApiEntitiesAwardEmojiCreateData = Struct.new(
  :epic_id,
  :group_id,
  :note_id,
  :issue_id,
  :project_id,
  :merge_request_id,
  :snippet_id,
  keyword_init: true
)

# ApiEntitiesBadge entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] image_url
#   @return [String, nil]
#
# @!attribute [rw] kind
#   @return [String, nil]
#
# @!attribute [rw] link_url
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] rendered_image_url
#   @return [String, nil]
#
# @!attribute [rw] rendered_link_url
#   @return [String, nil]
ApiEntitiesBadge = Struct.new(
  :id,
  :image_url,
  :kind,
  :link_url,
  :name,
  :rendered_image_url,
  :rendered_link_url,
  keyword_init: true
)

# Request payload for ApiEntitiesBadge#load.
#
# @!attribute [rw] group_id
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String, nil]
ApiEntitiesBadgeLoadMatch = Struct.new(
  :group_id,
  :id,
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesBadge#list.
#
# @!attribute [rw] group_id
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String, nil]
ApiEntitiesBadgeListMatch = Struct.new(
  :group_id,
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesBadge#create.
#
# @!attribute [rw] group_id
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String, nil]
ApiEntitiesBadgeCreateData = Struct.new(
  :group_id,
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesBadge#update.
#
# @!attribute [rw] group_id
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String, nil]
ApiEntitiesBadgeUpdateData = Struct.new(
  :group_id,
  :id,
  :project_id,
  keyword_init: true
)

# ApiEntitiesBasicBadgeDetail entity data model.
#
# @!attribute [rw] image_url
#   @return [String, nil]
#
# @!attribute [rw] link_url
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] rendered_image_url
#   @return [String, nil]
#
# @!attribute [rw] rendered_link_url
#   @return [String, nil]
ApiEntitiesBasicBadgeDetail = Struct.new(
  :image_url,
  :link_url,
  :name,
  :rendered_image_url,
  :rendered_link_url,
  keyword_init: true
)

# Request payload for ApiEntitiesBasicBadgeDetail#load.
#
# @!attribute [rw] group_id
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String, nil]
ApiEntitiesBasicBadgeDetailLoadMatch = Struct.new(
  :group_id,
  :project_id,
  keyword_init: true
)

# ApiEntitiesBasicGroupDetail entity data model.
class ApiEntitiesBasicGroupDetail
end

# Request payload for ApiEntitiesBasicGroupDetail#create.
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesBasicGroupDetailCreateData = Struct.new(
  :project_id,
  keyword_init: true
)

# ApiEntitiesBasicProjectDetail entity data model.
#
# @!attribute [rw] avatar_url
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] custom_attribute
#   @return [Hash, nil]
#
# @!attribute [rw] default_branch
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] forks_count
#   @return [Integer, nil]
#
# @!attribute [rw] http_url_to_repo
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] last_activity_at
#   @return [String, nil]
#
# @!attribute [rw] license
#   @return [Hash, nil]
#
# @!attribute [rw] license_url
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] name_with_namespace
#   @return [String, nil]
#
# @!attribute [rw] namespace
#   @return [Hash, nil]
#
# @!attribute [rw] path
#   @return [String, nil]
#
# @!attribute [rw] path_with_namespace
#   @return [String, nil]
#
# @!attribute [rw] readme_url
#   @return [String, nil]
#
# @!attribute [rw] repository_storage
#   @return [String, nil]
#
# @!attribute [rw] ssh_url_to_repo
#   @return [String, nil]
#
# @!attribute [rw] star_count
#   @return [Integer, nil]
#
# @!attribute [rw] tag_list
#   @return [Array, nil]
#
# @!attribute [rw] topic
#   @return [Array, nil]
#
# @!attribute [rw] visibility
#   @return [String, nil]
#
# @!attribute [rw] web_url
#   @return [String, nil]
ApiEntitiesBasicProjectDetail = Struct.new(
  :avatar_url,
  :created_at,
  :custom_attribute,
  :default_branch,
  :description,
  :forks_count,
  :http_url_to_repo,
  :id,
  :last_activity_at,
  :license,
  :license_url,
  :name,
  :name_with_namespace,
  :namespace,
  :path,
  :path_with_namespace,
  :readme_url,
  :repository_storage,
  :ssh_url_to_repo,
  :star_count,
  :tag_list,
  :topic,
  :visibility,
  :web_url,
  keyword_init: true
)

# Request payload for ApiEntitiesBasicProjectDetail#list.
#
# @!attribute [rw] user_id
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String, nil]
ApiEntitiesBasicProjectDetailListMatch = Struct.new(
  :user_id,
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesBasicProjectDetail#create.
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesBasicProjectDetailCreateData = Struct.new(
  :project_id,
  keyword_init: true
)

# ApiEntitiesBasicRef entity data model.
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
ApiEntitiesBasicRef = Struct.new(
  :name,
  :type,
  keyword_init: true
)

# Request payload for ApiEntitiesBasicRef#list.
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] sha
#   @return [Object]
ApiEntitiesBasicRefListMatch = Struct.new(
  :project_id,
  :sha,
  keyword_init: true
)

# ApiEntitiesBasicSuccess entity data model.
class ApiEntitiesBasicSuccess
end

# Request payload for ApiEntitiesBasicSuccess#create.
class ApiEntitiesBasicSuccessCreateData
end

# ApiEntitiesBatchedBackgroundMigration entity data model.
#
# @!attribute [rw] column_name
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] job_class_name
#   @return [String, nil]
#
# @!attribute [rw] progress
#   @return [Float, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] table_name
#   @return [String, nil]
ApiEntitiesBatchedBackgroundMigration = Struct.new(
  :column_name,
  :created_at,
  :id,
  :job_class_name,
  :progress,
  :status,
  :table_name,
  keyword_init: true
)

# Request payload for ApiEntitiesBatchedBackgroundMigration#load.
#
# @!attribute [rw] id
#   @return [String]
ApiEntitiesBatchedBackgroundMigrationLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for ApiEntitiesBatchedBackgroundMigration#list.
#
# @!attribute [rw] column_name
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] job_class_name
#   @return [String, nil]
#
# @!attribute [rw] progress
#   @return [Float, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] table_name
#   @return [String, nil]
ApiEntitiesBatchedBackgroundMigrationListMatch = Struct.new(
  :column_name,
  :created_at,
  :id,
  :job_class_name,
  :progress,
  :status,
  :table_name,
  keyword_init: true
)

# Request payload for ApiEntitiesBatchedBackgroundMigration#update.
#
# @!attribute [rw] batched_background_migration_id
#   @return [String]
ApiEntitiesBatchedBackgroundMigrationUpdateData = Struct.new(
  :batched_background_migration_id,
  keyword_init: true
)

# ApiEntitiesBranch entity data model.
#
# @!attribute [rw] can_push
#   @return [Boolean, nil]
#
# @!attribute [rw] commit
#   @return [Hash, nil]
#
# @!attribute [rw] default
#   @return [Boolean, nil]
#
# @!attribute [rw] developers_can_merge
#   @return [Boolean, nil]
#
# @!attribute [rw] developers_can_push
#   @return [Boolean, nil]
#
# @!attribute [rw] merged
#   @return [Boolean, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] protected
#   @return [Boolean, nil]
#
# @!attribute [rw] web_url
#   @return [String, nil]
ApiEntitiesBranch = Struct.new(
  :can_push,
  :commit,
  :default,
  :developers_can_merge,
  :developers_can_push,
  :merged,
  :name,
  :protected,
  :web_url,
  keyword_init: true
)

# Request payload for ApiEntitiesBranch#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesBranchLoadMatch = Struct.new(
  :id,
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesBranch#list.
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesBranchListMatch = Struct.new(
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesBranch#create.
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesBranchCreateData = Struct.new(
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesBranch#update.
#
# @!attribute [rw] branch_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesBranchUpdateData = Struct.new(
  :branch_id,
  :project_id,
  keyword_init: true
)

# ApiEntitiesBulkImport entity data model.
#
# @!attribute [rw] bulk_import_id
#   @return [Integer, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] destination_full_path
#   @return [String, nil]
#
# @!attribute [rw] destination_name
#   @return [String, nil]
#
# @!attribute [rw] destination_namespace
#   @return [String, nil]
#
# @!attribute [rw] destination_slug
#   @return [String, nil]
#
# @!attribute [rw] entity_type
#   @return [String, nil]
#
# @!attribute [rw] failure
#   @return [Array, nil]
#
# @!attribute [rw] has_failure
#   @return [Boolean, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] migrate_membership
#   @return [Boolean, nil]
#
# @!attribute [rw] migrate_project
#   @return [Boolean, nil]
#
# @!attribute [rw] namespace_id
#   @return [Integer, nil]
#
# @!attribute [rw] parent_id
#   @return [Integer, nil]
#
# @!attribute [rw] project_id
#   @return [Integer, nil]
#
# @!attribute [rw] source_full_path
#   @return [String, nil]
#
# @!attribute [rw] source_type
#   @return [String, nil]
#
# @!attribute [rw] source_url
#   @return [String, nil]
#
# @!attribute [rw] stat
#   @return [Hash, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
ApiEntitiesBulkImport = Struct.new(
  :bulk_import_id,
  :created_at,
  :destination_full_path,
  :destination_name,
  :destination_namespace,
  :destination_slug,
  :entity_type,
  :failure,
  :has_failure,
  :id,
  :migrate_membership,
  :migrate_project,
  :namespace_id,
  :parent_id,
  :project_id,
  :source_full_path,
  :source_type,
  :source_url,
  :stat,
  :status,
  :updated_at,
  keyword_init: true
)

# Request payload for ApiEntitiesBulkImport#load.
#
# @!attribute [rw] bulk_import_id
#   @return [String, nil]
#
# @!attribute [rw] entity_id
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
ApiEntitiesBulkImportLoadMatch = Struct.new(
  :bulk_import_id,
  :entity_id,
  :id,
  keyword_init: true
)

# Request payload for ApiEntitiesBulkImport#list.
#
# @!attribute [rw] bulk_import_id
#   @return [String, nil]
ApiEntitiesBulkImportListMatch = Struct.new(
  :bulk_import_id,
  keyword_init: true
)

# Request payload for ApiEntitiesBulkImport#create.
#
# @!attribute [rw] bulk_import_id
#   @return [String, nil]
ApiEntitiesBulkImportCreateData = Struct.new(
  :bulk_import_id,
  keyword_init: true
)

# ApiEntitiesBulkImportsEntityFailure entity data model.
#
# @!attribute [rw] correlation_id_value
#   @return [String, nil]
#
# @!attribute [rw] exception_class
#   @return [String, nil]
#
# @!attribute [rw] exception_message
#   @return [String, nil]
#
# @!attribute [rw] relation
#   @return [String, nil]
#
# @!attribute [rw] source_title
#   @return [String, nil]
#
# @!attribute [rw] source_url
#   @return [String, nil]
ApiEntitiesBulkImportsEntityFailure = Struct.new(
  :correlation_id_value,
  :exception_class,
  :exception_message,
  :relation,
  :source_title,
  :source_url,
  keyword_init: true
)

# Request payload for ApiEntitiesBulkImportsEntityFailure#load.
#
# @!attribute [rw] bulk_import_id
#   @return [String]
#
# @!attribute [rw] entity_id
#   @return [String]
ApiEntitiesBulkImportsEntityFailureLoadMatch = Struct.new(
  :bulk_import_id,
  :entity_id,
  keyword_init: true
)

# ApiEntitiesBulkImportsExportStatus entity data model.
#
# @!attribute [rw] batch
#   @return [Hash, nil]
#
# @!attribute [rw] batched
#   @return [Boolean, nil]
#
# @!attribute [rw] batches_count
#   @return [Integer, nil]
#
# @!attribute [rw] error
#   @return [String, nil]
#
# @!attribute [rw] relation
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] total_objects_count
#   @return [Integer, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
ApiEntitiesBulkImportsExportStatus = Struct.new(
  :batch,
  :batched,
  :batches_count,
  :error,
  :relation,
  :status,
  :total_objects_count,
  :updated_at,
  keyword_init: true
)

# Request payload for ApiEntitiesBulkImportsExportStatus#list.
#
# @!attribute [rw] group_id
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String, nil]
ApiEntitiesBulkImportsExportStatusListMatch = Struct.new(
  :group_id,
  :project_id,
  keyword_init: true
)

# ApiEntitiesChangelog entity data model.
#
# @!attribute [rw] note
#   @return [String, nil]
ApiEntitiesChangelog = Struct.new(
  :note,
  keyword_init: true
)

# Request payload for ApiEntitiesChangelog#load.
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesChangelogLoadMatch = Struct.new(
  :project_id,
  keyword_init: true
)

# ApiEntitiesCiBridge entity data model.
#
# @!attribute [rw] allow_failure
#   @return [Boolean, nil]
#
# @!attribute [rw] commit
#   @return [Hash, nil]
#
# @!attribute [rw] coverage
#   @return [Float, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] downstream_pipeline
#   @return [Hash, nil]
#
# @!attribute [rw] duration
#   @return [Float, nil]
#
# @!attribute [rw] erased_at
#   @return [String, nil]
#
# @!attribute [rw] failure_reason
#   @return [String, nil]
#
# @!attribute [rw] finished_at
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] pipeline
#   @return [Hash, nil]
#
# @!attribute [rw] project
#   @return [Hash, nil]
#
# @!attribute [rw] queued_duration
#   @return [Float, nil]
#
# @!attribute [rw] ref
#   @return [String, nil]
#
# @!attribute [rw] stage
#   @return [String, nil]
#
# @!attribute [rw] started_at
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] tag
#   @return [Boolean, nil]
#
# @!attribute [rw] user
#   @return [Hash, nil]
#
# @!attribute [rw] web_url
#   @return [String, nil]
ApiEntitiesCiBridge = Struct.new(
  :allow_failure,
  :commit,
  :coverage,
  :created_at,
  :downstream_pipeline,
  :duration,
  :erased_at,
  :failure_reason,
  :finished_at,
  :id,
  :name,
  :pipeline,
  :project,
  :queued_duration,
  :ref,
  :stage,
  :started_at,
  :status,
  :tag,
  :user,
  :web_url,
  keyword_init: true
)

# Request payload for ApiEntitiesCiBridge#list.
#
# @!attribute [rw] pipeline_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesCiBridgeListMatch = Struct.new(
  :pipeline_id,
  :project_id,
  keyword_init: true
)

# ApiEntitiesCiCatalogResourcesVersion entity data model.
class ApiEntitiesCiCatalogResourcesVersion
end

# Request payload for ApiEntitiesCiCatalogResourcesVersion#create.
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesCiCatalogResourcesVersionCreateData = Struct.new(
  :project_id,
  keyword_init: true
)

# ApiEntitiesCiJob entity data model.
#
# @!attribute [rw] allow_failure
#   @return [Boolean, nil]
#
# @!attribute [rw] archived
#   @return [Boolean, nil]
#
# @!attribute [rw] artifact
#   @return [Array, nil]
#
# @!attribute [rw] artifacts_expire_at
#   @return [String, nil]
#
# @!attribute [rw] artifacts_file
#   @return [Hash, nil]
#
# @!attribute [rw] commit
#   @return [Hash, nil]
#
# @!attribute [rw] coverage
#   @return [Float, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] duration
#   @return [Float, nil]
#
# @!attribute [rw] erased_at
#   @return [String, nil]
#
# @!attribute [rw] failure_reason
#   @return [String, nil]
#
# @!attribute [rw] file_format
#   @return [String, nil]
#
# @!attribute [rw] file_type
#   @return [String, nil]
#
# @!attribute [rw] filename
#   @return [String, nil]
#
# @!attribute [rw] finished_at
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] pipeline
#   @return [Hash, nil]
#
# @!attribute [rw] project
#   @return [Hash, nil]
#
# @!attribute [rw] queued_duration
#   @return [Float, nil]
#
# @!attribute [rw] ref
#   @return [String, nil]
#
# @!attribute [rw] runner
#   @return [Hash, nil]
#
# @!attribute [rw] runner_manager
#   @return [Hash, nil]
#
# @!attribute [rw] size
#   @return [Integer, nil]
#
# @!attribute [rw] stage
#   @return [String, nil]
#
# @!attribute [rw] started_at
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] tag
#   @return [Boolean, nil]
#
# @!attribute [rw] tag_list
#   @return [Array, nil]
#
# @!attribute [rw] user
#   @return [Hash, nil]
#
# @!attribute [rw] web_url
#   @return [String, nil]
ApiEntitiesCiJob = Struct.new(
  :allow_failure,
  :archived,
  :artifact,
  :artifacts_expire_at,
  :artifacts_file,
  :commit,
  :coverage,
  :created_at,
  :duration,
  :erased_at,
  :failure_reason,
  :file_format,
  :file_type,
  :filename,
  :finished_at,
  :id,
  :name,
  :pipeline,
  :project,
  :queued_duration,
  :ref,
  :runner,
  :runner_manager,
  :size,
  :stage,
  :started_at,
  :status,
  :tag,
  :tag_list,
  :user,
  :web_url,
  keyword_init: true
)

# Request payload for ApiEntitiesCiJob#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesCiJobLoadMatch = Struct.new(
  :id,
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesCiJob#list.
#
# @!attribute [rw] pipeline_id
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String, nil]
#
# @!attribute [rw] job_id
#   @return [String, nil]
ApiEntitiesCiJobListMatch = Struct.new(
  :pipeline_id,
  :project_id,
  :job_id,
  keyword_init: true
)

# Request payload for ApiEntitiesCiJob#create.
#
# @!attribute [rw] job_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesCiJobCreateData = Struct.new(
  :job_id,
  :project_id,
  keyword_init: true
)

# ApiEntitiesCiJobBasic entity data model.
#
# @!attribute [rw] allow_failure
#   @return [Boolean, nil]
#
# @!attribute [rw] commit
#   @return [Hash, nil]
#
# @!attribute [rw] coverage
#   @return [Float, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] duration
#   @return [Float, nil]
#
# @!attribute [rw] erased_at
#   @return [String, nil]
#
# @!attribute [rw] failure_reason
#   @return [String, nil]
#
# @!attribute [rw] finished_at
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] pipeline
#   @return [Hash, nil]
#
# @!attribute [rw] project
#   @return [Hash, nil]
#
# @!attribute [rw] queued_duration
#   @return [Float, nil]
#
# @!attribute [rw] ref
#   @return [String, nil]
#
# @!attribute [rw] stage
#   @return [String, nil]
#
# @!attribute [rw] started_at
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] tag
#   @return [Boolean, nil]
#
# @!attribute [rw] user
#   @return [Hash, nil]
#
# @!attribute [rw] web_url
#   @return [String, nil]
ApiEntitiesCiJobBasic = Struct.new(
  :allow_failure,
  :commit,
  :coverage,
  :created_at,
  :duration,
  :erased_at,
  :failure_reason,
  :finished_at,
  :id,
  :name,
  :pipeline,
  :project,
  :queued_duration,
  :ref,
  :stage,
  :started_at,
  :status,
  :tag,
  :user,
  :web_url,
  keyword_init: true
)

# Request payload for ApiEntitiesCiJobBasic#list.
#
# @!attribute [rw] key
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesCiJobBasicListMatch = Struct.new(
  :key,
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesCiJobBasic#create.
#
# @!attribute [rw] job_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesCiJobBasicCreateData = Struct.new(
  :job_id,
  :project_id,
  keyword_init: true
)

# ApiEntitiesCiJobBasicWithProject entity data model.
#
# @!attribute [rw] allow_failure
#   @return [Boolean, nil]
#
# @!attribute [rw] commit
#   @return [Hash, nil]
#
# @!attribute [rw] coverage
#   @return [Float, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] duration
#   @return [Float, nil]
#
# @!attribute [rw] erased_at
#   @return [String, nil]
#
# @!attribute [rw] failure_reason
#   @return [String, nil]
#
# @!attribute [rw] finished_at
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] pipeline
#   @return [Hash, nil]
#
# @!attribute [rw] project
#   @return [Hash, nil]
#
# @!attribute [rw] queued_duration
#   @return [Float, nil]
#
# @!attribute [rw] ref
#   @return [String, nil]
#
# @!attribute [rw] stage
#   @return [String, nil]
#
# @!attribute [rw] started_at
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] tag
#   @return [Boolean, nil]
#
# @!attribute [rw] user
#   @return [Hash, nil]
#
# @!attribute [rw] web_url
#   @return [String, nil]
ApiEntitiesCiJobBasicWithProject = Struct.new(
  :allow_failure,
  :commit,
  :coverage,
  :created_at,
  :duration,
  :erased_at,
  :failure_reason,
  :finished_at,
  :id,
  :name,
  :pipeline,
  :project,
  :queued_duration,
  :ref,
  :stage,
  :started_at,
  :status,
  :tag,
  :user,
  :web_url,
  keyword_init: true
)

# Request payload for ApiEntitiesCiJobBasicWithProject#load.
#
# @!attribute [rw] runner_id
#   @return [String]
ApiEntitiesCiJobBasicWithProjectLoadMatch = Struct.new(
  :runner_id,
  keyword_init: true
)

# ApiEntitiesCiLintResult entity data model.
#
# @!attribute [rw] blob
#   @return [String, nil]
#
# @!attribute [rw] context_project
#   @return [String, nil]
#
# @!attribute [rw] context_sha
#   @return [String, nil]
#
# @!attribute [rw] error
#   @return [Array, nil]
#
# @!attribute [rw] extra
#   @return [Hash, nil]
#
# @!attribute [rw] include
#   @return [Array, nil]
#
# @!attribute [rw] job
#   @return [Array, nil]
#
# @!attribute [rw] location
#   @return [String, nil]
#
# @!attribute [rw] merged_yaml
#   @return [String, nil]
#
# @!attribute [rw] raw
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] valid
#   @return [Boolean, nil]
#
# @!attribute [rw] warning
#   @return [Array, nil]
ApiEntitiesCiLintResult = Struct.new(
  :blob,
  :context_project,
  :context_sha,
  :error,
  :extra,
  :include,
  :job,
  :location,
  :merged_yaml,
  :raw,
  :type,
  :valid,
  :warning,
  keyword_init: true
)

# Request payload for ApiEntitiesCiLintResult#list.
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesCiLintResultListMatch = Struct.new(
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesCiLintResult#create.
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesCiLintResultCreateData = Struct.new(
  :project_id,
  keyword_init: true
)

# ApiEntitiesCiPipeline entity data model.
class ApiEntitiesCiPipeline
end

# Request payload for ApiEntitiesCiPipeline#create.
#
# @!attribute [rw] merge_request_id
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] ref_id
#   @return [String, nil]
#
# @!attribute [rw] pipeline_id
#   @return [String, nil]
ApiEntitiesCiPipelineCreateData = Struct.new(
  :merge_request_id,
  :project_id,
  :ref_id,
  :pipeline_id,
  keyword_init: true
)

# ApiEntitiesCiPipelineBasic entity data model.
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] iid
#   @return [Integer, nil]
#
# @!attribute [rw] project_id
#   @return [Integer, nil]
#
# @!attribute [rw] ref
#   @return [String, nil]
#
# @!attribute [rw] sha
#   @return [String, nil]
#
# @!attribute [rw] source
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] web_url
#   @return [String, nil]
ApiEntitiesCiPipelineBasic = Struct.new(
  :created_at,
  :id,
  :iid,
  :project_id,
  :ref,
  :sha,
  :source,
  :status,
  :updated_at,
  :web_url,
  keyword_init: true
)

# Request payload for ApiEntitiesCiPipelineBasic#load.
#
# @!attribute [rw] merge_request_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesCiPipelineBasicLoadMatch = Struct.new(
  :merge_request_id,
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesCiPipelineBasic#list.
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] pipeline_schedule_id
#   @return [String, nil]
ApiEntitiesCiPipelineBasicListMatch = Struct.new(
  :project_id,
  :pipeline_schedule_id,
  keyword_init: true
)

# ApiEntitiesCiPipelineSchedule entity data model.
#
# @!attribute [rw] active
#   @return [Boolean, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] cron
#   @return [String, nil]
#
# @!attribute [rw] cron_timezone
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] input
#   @return [Hash, nil]
#
# @!attribute [rw] next_run_at
#   @return [String, nil]
#
# @!attribute [rw] owner
#   @return [Hash, nil]
#
# @!attribute [rw] ref
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
ApiEntitiesCiPipelineSchedule = Struct.new(
  :active,
  :created_at,
  :cron,
  :cron_timezone,
  :description,
  :id,
  :input,
  :next_run_at,
  :owner,
  :ref,
  :updated_at,
  keyword_init: true
)

# Request payload for ApiEntitiesCiPipelineSchedule#list.
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesCiPipelineScheduleListMatch = Struct.new(
  :project_id,
  keyword_init: true
)

# ApiEntitiesCiPipelineScheduleDetail entity data model.
#
# @!attribute [rw] active
#   @return [Boolean, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] cron
#   @return [String, nil]
#
# @!attribute [rw] cron_timezone
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] input
#   @return [Hash, nil]
#
# @!attribute [rw] last_pipeline
#   @return [Hash, nil]
#
# @!attribute [rw] next_run_at
#   @return [String, nil]
#
# @!attribute [rw] owner
#   @return [Hash, nil]
#
# @!attribute [rw] ref
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] variable
#   @return [Hash, nil]
ApiEntitiesCiPipelineScheduleDetail = Struct.new(
  :active,
  :created_at,
  :cron,
  :cron_timezone,
  :description,
  :id,
  :input,
  :last_pipeline,
  :next_run_at,
  :owner,
  :ref,
  :updated_at,
  :variable,
  keyword_init: true
)

# Request payload for ApiEntitiesCiPipelineScheduleDetail#load.
#
# @!attribute [rw] pipeline_schedule_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesCiPipelineScheduleDetailLoadMatch = Struct.new(
  :pipeline_schedule_id,
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesCiPipelineScheduleDetail#create.
#
# @!attribute [rw] pipeline_schedule_id
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesCiPipelineScheduleDetailCreateData = Struct.new(
  :pipeline_schedule_id,
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesCiPipelineScheduleDetail#update.
#
# @!attribute [rw] pipeline_schedule_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesCiPipelineScheduleDetailUpdateData = Struct.new(
  :pipeline_schedule_id,
  :project_id,
  keyword_init: true
)

# ApiEntitiesCiResetTokenResult entity data model.
class ApiEntitiesCiResetTokenResult
end

# Request payload for ApiEntitiesCiResetTokenResult#create.
#
# @!attribute [rw] group_id
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String, nil]
#
# @!attribute [rw] runner_id
#   @return [String, nil]
ApiEntitiesCiResetTokenResultCreateData = Struct.new(
  :group_id,
  :project_id,
  :runner_id,
  keyword_init: true
)

# ApiEntitiesCiResourceGroup entity data model.
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] key
#   @return [String, nil]
#
# @!attribute [rw] process_mode
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
ApiEntitiesCiResourceGroup = Struct.new(
  :created_at,
  :id,
  :key,
  :process_mode,
  :updated_at,
  keyword_init: true
)

# Request payload for ApiEntitiesCiResourceGroup#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesCiResourceGroupLoadMatch = Struct.new(
  :id,
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesCiResourceGroup#list.
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesCiResourceGroupListMatch = Struct.new(
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesCiResourceGroup#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesCiResourceGroupUpdateData = Struct.new(
  :id,
  :project_id,
  keyword_init: true
)

# ApiEntitiesCiRunner entity data model.
#
# @!attribute [rw] active
#   @return [Boolean, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] created_by
#   @return [Hash, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] ip_address
#   @return [String, nil]
#
# @!attribute [rw] is_shared
#   @return [Boolean, nil]
#
# @!attribute [rw] job_execution_status
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] online
#   @return [Boolean, nil]
#
# @!attribute [rw] paused
#   @return [Boolean, nil]
#
# @!attribute [rw] runner_type
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
ApiEntitiesCiRunner = Struct.new(
  :active,
  :created_at,
  :created_by,
  :description,
  :id,
  :ip_address,
  :is_shared,
  :job_execution_status,
  :name,
  :online,
  :paused,
  :runner_type,
  :status,
  keyword_init: true
)

# Request payload for ApiEntitiesCiRunner#load.
#
# @!attribute [rw] project_id
#   @return [String, nil]
#
# @!attribute [rw] group_id
#   @return [String, nil]
ApiEntitiesCiRunnerLoadMatch = Struct.new(
  :project_id,
  :group_id,
  keyword_init: true
)

# Request payload for ApiEntitiesCiRunner#create.
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesCiRunnerCreateData = Struct.new(
  :project_id,
  keyword_init: true
)

# ApiEntitiesCiRunnerDetail entity data model.
#
# @!attribute [rw] access_level
#   @return [String, nil]
#
# @!attribute [rw] active
#   @return [Boolean, nil]
#
# @!attribute [rw] architecture
#   @return [String, nil]
#
# @!attribute [rw] contacted_at
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] created_by
#   @return [Hash, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] group
#   @return [Hash, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] ip_address
#   @return [String, nil]
#
# @!attribute [rw] is_shared
#   @return [Boolean, nil]
#
# @!attribute [rw] job_execution_status
#   @return [String, nil]
#
# @!attribute [rw] locked
#   @return [Boolean, nil]
#
# @!attribute [rw] maintenance_note
#   @return [String, nil]
#
# @!attribute [rw] maximum_timeout
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] online
#   @return [Boolean, nil]
#
# @!attribute [rw] paused
#   @return [Boolean, nil]
#
# @!attribute [rw] platform
#   @return [String, nil]
#
# @!attribute [rw] project
#   @return [Hash, nil]
#
# @!attribute [rw] revision
#   @return [String, nil]
#
# @!attribute [rw] run_untagged
#   @return [String, nil]
#
# @!attribute [rw] runner_type
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] tag_list
#   @return [String, nil]
#
# @!attribute [rw] version
#   @return [String, nil]
ApiEntitiesCiRunnerDetail = Struct.new(
  :access_level,
  :active,
  :architecture,
  :contacted_at,
  :created_at,
  :created_by,
  :description,
  :group,
  :id,
  :ip_address,
  :is_shared,
  :job_execution_status,
  :locked,
  :maintenance_note,
  :maximum_timeout,
  :name,
  :online,
  :paused,
  :platform,
  :project,
  :revision,
  :run_untagged,
  :runner_type,
  :status,
  :tag_list,
  :version,
  keyword_init: true
)

# Request payload for ApiEntitiesCiRunnerDetail#load.
#
# @!attribute [rw] id
#   @return [String]
ApiEntitiesCiRunnerDetailLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for ApiEntitiesCiRunnerDetail#update.
#
# @!attribute [rw] id
#   @return [String]
ApiEntitiesCiRunnerDetailUpdateData = Struct.new(
  :id,
  keyword_init: true
)

# ApiEntitiesCiRunnerManager entity data model.
#
# @!attribute [rw] architecture
#   @return [String, nil]
#
# @!attribute [rw] contacted_at
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] ip_address
#   @return [String, nil]
#
# @!attribute [rw] job_execution_status
#   @return [String, nil]
#
# @!attribute [rw] platform
#   @return [String, nil]
#
# @!attribute [rw] revision
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] system_id
#   @return [String, nil]
#
# @!attribute [rw] version
#   @return [String, nil]
ApiEntitiesCiRunnerManager = Struct.new(
  :architecture,
  :contacted_at,
  :created_at,
  :id,
  :ip_address,
  :job_execution_status,
  :platform,
  :revision,
  :status,
  :system_id,
  :version,
  keyword_init: true
)

# Request payload for ApiEntitiesCiRunnerManager#load.
#
# @!attribute [rw] runner_id
#   @return [String]
ApiEntitiesCiRunnerManagerLoadMatch = Struct.new(
  :runner_id,
  keyword_init: true
)

# ApiEntitiesCiRunnerRegistrationDetail entity data model.
class ApiEntitiesCiRunnerRegistrationDetail
end

# Request payload for ApiEntitiesCiRunnerRegistrationDetail#create.
class ApiEntitiesCiRunnerRegistrationDetailCreateData
end

# ApiEntitiesCiSecureFile entity data model.
#
# @!attribute [rw] checksum
#   @return [String, nil]
#
# @!attribute [rw] checksum_algorithm
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] expires_at
#   @return [String, nil]
#
# @!attribute [rw] file_extension
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] metadata
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
ApiEntitiesCiSecureFile = Struct.new(
  :checksum,
  :checksum_algorithm,
  :created_at,
  :expires_at,
  :file_extension,
  :id,
  :metadata,
  :name,
  keyword_init: true
)

# Request payload for ApiEntitiesCiSecureFile#load.
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String, nil]
ApiEntitiesCiSecureFileLoadMatch = Struct.new(
  :project_id,
  :id,
  keyword_init: true
)

# Request payload for ApiEntitiesCiSecureFile#create.
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesCiSecureFileCreateData = Struct.new(
  :project_id,
  keyword_init: true
)

# ApiEntitiesCiVariable entity data model.
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] environment_scope
#   @return [String, nil]
#
# @!attribute [rw] hidden
#   @return [Boolean, nil]
#
# @!attribute [rw] key
#   @return [String, nil]
#
# @!attribute [rw] masked
#   @return [Boolean, nil]
#
# @!attribute [rw] protected
#   @return [Boolean, nil]
#
# @!attribute [rw] raw
#   @return [Boolean, nil]
#
# @!attribute [rw] value
#   @return [String, nil]
#
# @!attribute [rw] variable_type
#   @return [String, nil]
ApiEntitiesCiVariable = Struct.new(
  :description,
  :environment_scope,
  :hidden,
  :key,
  :masked,
  :protected,
  :raw,
  :value,
  :variable_type,
  keyword_init: true
)

# Request payload for ApiEntitiesCiVariable#load.
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String, nil]
#
# @!attribute [rw] group_id
#   @return [String, nil]
ApiEntitiesCiVariableLoadMatch = Struct.new(
  :id,
  :project_id,
  :group_id,
  keyword_init: true
)

# Request payload for ApiEntitiesCiVariable#list.
#
# @!attribute [rw] pipeline_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesCiVariableListMatch = Struct.new(
  :pipeline_id,
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesCiVariable#create.
#
# @!attribute [rw] pipeline_schedule_id
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String, nil]
#
# @!attribute [rw] group_id
#   @return [String, nil]
ApiEntitiesCiVariableCreateData = Struct.new(
  :pipeline_schedule_id,
  :project_id,
  :group_id,
  keyword_init: true
)

# Request payload for ApiEntitiesCiVariable#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] pipeline_schedule_id
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String, nil]
#
# @!attribute [rw] group_id
#   @return [String, nil]
ApiEntitiesCiVariableUpdateData = Struct.new(
  :id,
  :pipeline_schedule_id,
  :project_id,
  :group_id,
  keyword_init: true
)

# ApiEntitiesCluster entity data model.
#
# @!attribute [rw] cluster_type
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] domain
#   @return [String, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] environment_scope
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] managed
#   @return [String, nil]
#
# @!attribute [rw] management_project
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] namespace_per_environment
#   @return [String, nil]
#
# @!attribute [rw] platform_kubernete
#   @return [Hash, nil]
#
# @!attribute [rw] platform_type
#   @return [String, nil]
#
# @!attribute [rw] provider_gcp
#   @return [Hash, nil]
#
# @!attribute [rw] provider_type
#   @return [String, nil]
#
# @!attribute [rw] user
#   @return [Hash, nil]
ApiEntitiesCluster = Struct.new(
  :cluster_type,
  :created_at,
  :domain,
  :enabled,
  :environment_scope,
  :id,
  :managed,
  :management_project,
  :name,
  :namespace_per_environment,
  :platform_kubernete,
  :platform_type,
  :provider_gcp,
  :provider_type,
  :user,
  keyword_init: true
)

# Request payload for ApiEntitiesCluster#load.
#
# @!attribute [rw] id
#   @return [String]
ApiEntitiesClusterLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for ApiEntitiesCluster#list.
#
# @!attribute [rw] group_id
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String, nil]
ApiEntitiesClusterListMatch = Struct.new(
  :group_id,
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesCluster#create.
#
# @!attribute [rw] cluster_type
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] domain
#   @return [String, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] environment_scope
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] managed
#   @return [String, nil]
#
# @!attribute [rw] management_project
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] namespace_per_environment
#   @return [String, nil]
#
# @!attribute [rw] platform_kubernete
#   @return [Hash, nil]
#
# @!attribute [rw] platform_type
#   @return [String, nil]
#
# @!attribute [rw] provider_gcp
#   @return [Hash, nil]
#
# @!attribute [rw] provider_type
#   @return [String, nil]
#
# @!attribute [rw] user
#   @return [Hash, nil]
ApiEntitiesClusterCreateData = Struct.new(
  :cluster_type,
  :created_at,
  :domain,
  :enabled,
  :environment_scope,
  :id,
  :managed,
  :management_project,
  :name,
  :namespace_per_environment,
  :platform_kubernete,
  :platform_type,
  :provider_gcp,
  :provider_type,
  :user,
  keyword_init: true
)

# Request payload for ApiEntitiesCluster#update.
#
# @!attribute [rw] id
#   @return [String]
ApiEntitiesClusterUpdateData = Struct.new(
  :id,
  keyword_init: true
)

# ApiEntitiesClusterGroup entity data model.
#
# @!attribute [rw] cluster_type
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] domain
#   @return [String, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] environment_scope
#   @return [String, nil]
#
# @!attribute [rw] group
#   @return [Hash, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] managed
#   @return [String, nil]
#
# @!attribute [rw] management_project
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] namespace_per_environment
#   @return [String, nil]
#
# @!attribute [rw] platform_kubernete
#   @return [Hash, nil]
#
# @!attribute [rw] platform_type
#   @return [String, nil]
#
# @!attribute [rw] provider_gcp
#   @return [Hash, nil]
#
# @!attribute [rw] provider_type
#   @return [String, nil]
#
# @!attribute [rw] user
#   @return [Hash, nil]
ApiEntitiesClusterGroup = Struct.new(
  :cluster_type,
  :created_at,
  :domain,
  :enabled,
  :environment_scope,
  :group,
  :id,
  :managed,
  :management_project,
  :name,
  :namespace_per_environment,
  :platform_kubernete,
  :platform_type,
  :provider_gcp,
  :provider_type,
  :user,
  keyword_init: true
)

# Request payload for ApiEntitiesClusterGroup#load.
#
# @!attribute [rw] cluster_id
#   @return [String]
#
# @!attribute [rw] group_id
#   @return [String]
ApiEntitiesClusterGroupLoadMatch = Struct.new(
  :cluster_id,
  :group_id,
  keyword_init: true
)

# Request payload for ApiEntitiesClusterGroup#create.
#
# @!attribute [rw] group_id
#   @return [String]
ApiEntitiesClusterGroupCreateData = Struct.new(
  :group_id,
  keyword_init: true
)

# Request payload for ApiEntitiesClusterGroup#update.
#
# @!attribute [rw] cluster_id
#   @return [String]
#
# @!attribute [rw] group_id
#   @return [String]
ApiEntitiesClusterGroupUpdateData = Struct.new(
  :cluster_id,
  :group_id,
  keyword_init: true
)

# ApiEntitiesClusterProject entity data model.
#
# @!attribute [rw] cluster_type
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] domain
#   @return [String, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] environment_scope
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] managed
#   @return [String, nil]
#
# @!attribute [rw] management_project
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] namespace_per_environment
#   @return [String, nil]
#
# @!attribute [rw] platform_kubernete
#   @return [Hash, nil]
#
# @!attribute [rw] platform_type
#   @return [String, nil]
#
# @!attribute [rw] project
#   @return [Hash, nil]
#
# @!attribute [rw] provider_gcp
#   @return [Hash, nil]
#
# @!attribute [rw] provider_type
#   @return [String, nil]
#
# @!attribute [rw] user
#   @return [Hash, nil]
ApiEntitiesClusterProject = Struct.new(
  :cluster_type,
  :created_at,
  :domain,
  :enabled,
  :environment_scope,
  :id,
  :managed,
  :management_project,
  :name,
  :namespace_per_environment,
  :platform_kubernete,
  :platform_type,
  :project,
  :provider_gcp,
  :provider_type,
  :user,
  keyword_init: true
)

# Request payload for ApiEntitiesClusterProject#load.
#
# @!attribute [rw] cluster_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesClusterProjectLoadMatch = Struct.new(
  :cluster_id,
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesClusterProject#create.
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesClusterProjectCreateData = Struct.new(
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesClusterProject#update.
#
# @!attribute [rw] cluster_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesClusterProjectUpdateData = Struct.new(
  :cluster_id,
  :project_id,
  keyword_init: true
)

# ApiEntitiesClustersAgent entity data model.
#
# @!attribute [rw] config_project
#   @return [Hash, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] created_by_user_id
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] is_receptive
#   @return [Boolean, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
ApiEntitiesClustersAgent = Struct.new(
  :config_project,
  :created_at,
  :created_by_user_id,
  :id,
  :is_receptive,
  :name,
  keyword_init: true
)

# Request payload for ApiEntitiesClustersAgent#load.
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] agent_id
#   @return [String, nil]
ApiEntitiesClustersAgentLoadMatch = Struct.new(
  :project_id,
  :agent_id,
  keyword_init: true
)

# Request payload for ApiEntitiesClustersAgent#create.
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesClustersAgentCreateData = Struct.new(
  :project_id,
  keyword_init: true
)

# ApiEntitiesClustersAgentToken entity data model.
#
# @!attribute [rw] agent_id
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] created_by_user_id
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] last_used_at
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
ApiEntitiesClustersAgentToken = Struct.new(
  :agent_id,
  :created_at,
  :created_by_user_id,
  :description,
  :id,
  :last_used_at,
  :name,
  :status,
  keyword_init: true
)

# Request payload for ApiEntitiesClustersAgentToken#load.
#
# @!attribute [rw] cluster_agent_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesClustersAgentTokenLoadMatch = Struct.new(
  :cluster_agent_id,
  :id,
  :project_id,
  keyword_init: true
)

# ApiEntitiesClustersAgentTokenBasic entity data model.
#
# @!attribute [rw] agent_id
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] created_by_user_id
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
ApiEntitiesClustersAgentTokenBasic = Struct.new(
  :agent_id,
  :created_at,
  :created_by_user_id,
  :description,
  :id,
  :name,
  :status,
  keyword_init: true
)

# Request payload for ApiEntitiesClustersAgentTokenBasic#load.
#
# @!attribute [rw] cluster_agent_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesClustersAgentTokenBasicLoadMatch = Struct.new(
  :cluster_agent_id,
  :project_id,
  keyword_init: true
)

# ApiEntitiesClustersAgentTokenWithToken entity data model.
class ApiEntitiesClustersAgentTokenWithToken
end

# Request payload for ApiEntitiesClustersAgentTokenWithToken#create.
#
# @!attribute [rw] cluster_agent_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesClustersAgentTokenWithTokenCreateData = Struct.new(
  :cluster_agent_id,
  :project_id,
  keyword_init: true
)

# ApiEntitiesCommit entity data model.
#
# @!attribute [rw] author_email
#   @return [String, nil]
#
# @!attribute [rw] author_name
#   @return [String, nil]
#
# @!attribute [rw] authored_date
#   @return [String, nil]
#
# @!attribute [rw] committed_date
#   @return [String, nil]
#
# @!attribute [rw] committer_email
#   @return [String, nil]
#
# @!attribute [rw] committer_name
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] extended_trailer
#   @return [Hash, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] message
#   @return [String, nil]
#
# @!attribute [rw] parent_id
#   @return [Array, nil]
#
# @!attribute [rw] short_id
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] trailer
#   @return [Hash, nil]
#
# @!attribute [rw] web_url
#   @return [String, nil]
ApiEntitiesCommit = Struct.new(
  :author_email,
  :author_name,
  :authored_date,
  :committed_date,
  :committer_email,
  :committer_name,
  :created_at,
  :extended_trailer,
  :id,
  :message,
  :parent_id,
  :short_id,
  :title,
  :trailer,
  :web_url,
  keyword_init: true
)

# Request payload for ApiEntitiesCommit#list.
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] merge_request_id
#   @return [String, nil]
ApiEntitiesCommitListMatch = Struct.new(
  :project_id,
  :merge_request_id,
  keyword_init: true
)

# Request payload for ApiEntitiesCommit#create.
#
# @!attribute [rw] merge_request_id
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] sha
#   @return [Object, nil]
ApiEntitiesCommitCreateData = Struct.new(
  :merge_request_id,
  :project_id,
  :sha,
  keyword_init: true
)

# ApiEntitiesCommitDetail entity data model.
#
# @!attribute [rw] author_email
#   @return [String, nil]
#
# @!attribute [rw] author_name
#   @return [String, nil]
#
# @!attribute [rw] authored_date
#   @return [String, nil]
#
# @!attribute [rw] committed_date
#   @return [String, nil]
#
# @!attribute [rw] committer_email
#   @return [String, nil]
#
# @!attribute [rw] committer_name
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] extended_trailer
#   @return [Hash, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] last_pipeline
#   @return [Hash, nil]
#
# @!attribute [rw] message
#   @return [String, nil]
#
# @!attribute [rw] parent_id
#   @return [Array, nil]
#
# @!attribute [rw] project_id
#   @return [Integer, nil]
#
# @!attribute [rw] short_id
#   @return [String, nil]
#
# @!attribute [rw] stat
#   @return [Hash, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] trailer
#   @return [Hash, nil]
#
# @!attribute [rw] web_url
#   @return [String, nil]
ApiEntitiesCommitDetail = Struct.new(
  :author_email,
  :author_name,
  :authored_date,
  :committed_date,
  :committer_email,
  :committer_name,
  :created_at,
  :extended_trailer,
  :id,
  :last_pipeline,
  :message,
  :parent_id,
  :project_id,
  :short_id,
  :stat,
  :status,
  :title,
  :trailer,
  :web_url,
  keyword_init: true
)

# Request payload for ApiEntitiesCommitDetail#load.
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] sha
#   @return [Object]
ApiEntitiesCommitDetailLoadMatch = Struct.new(
  :project_id,
  :sha,
  keyword_init: true
)

# Request payload for ApiEntitiesCommitDetail#create.
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesCommitDetailCreateData = Struct.new(
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesCommitDetail#update.
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] submodule
#   @return [Object]
ApiEntitiesCommitDetailUpdateData = Struct.new(
  :project_id,
  :submodule,
  keyword_init: true
)

# ApiEntitiesCommitNote entity data model.
#
# @!attribute [rw] author
#   @return [Hash, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] line
#   @return [Integer, nil]
#
# @!attribute [rw] line_type
#   @return [String, nil]
#
# @!attribute [rw] note
#   @return [String, nil]
#
# @!attribute [rw] path
#   @return [String, nil]
ApiEntitiesCommitNote = Struct.new(
  :author,
  :created_at,
  :line,
  :line_type,
  :note,
  :path,
  keyword_init: true
)

# Request payload for ApiEntitiesCommitNote#list.
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] sha
#   @return [Object]
ApiEntitiesCommitNoteListMatch = Struct.new(
  :project_id,
  :sha,
  keyword_init: true
)

# Request payload for ApiEntitiesCommitNote#create.
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] sha
#   @return [Object]
ApiEntitiesCommitNoteCreateData = Struct.new(
  :project_id,
  :sha,
  keyword_init: true
)

# ApiEntitiesCommitSequence entity data model.
#
# @!attribute [rw] count
#   @return [Integer, nil]
ApiEntitiesCommitSequence = Struct.new(
  :count,
  keyword_init: true
)

# Request payload for ApiEntitiesCommitSequence#load.
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] sha
#   @return [Object]
ApiEntitiesCommitSequenceLoadMatch = Struct.new(
  :project_id,
  :sha,
  keyword_init: true
)

# ApiEntitiesCommitSignature entity data model.
#
# @!attribute [rw] commit_source
#   @return [String, nil]
#
# @!attribute [rw] signature
#   @return [String, nil]
#
# @!attribute [rw] signature_type
#   @return [String, nil]
ApiEntitiesCommitSignature = Struct.new(
  :commit_source,
  :signature,
  :signature_type,
  keyword_init: true
)

# Request payload for ApiEntitiesCommitSignature#load.
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] sha
#   @return [Object]
ApiEntitiesCommitSignatureLoadMatch = Struct.new(
  :project_id,
  :sha,
  keyword_init: true
)

# ApiEntitiesCommitStatus entity data model.
#
# @!attribute [rw] allow_failure
#   @return [Boolean, nil]
#
# @!attribute [rw] author
#   @return [Hash, nil]
#
# @!attribute [rw] coverage
#   @return [Float, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] finished_at
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] pipeline_id
#   @return [Integer, nil]
#
# @!attribute [rw] ref
#   @return [String, nil]
#
# @!attribute [rw] sha
#   @return [String, nil]
#
# @!attribute [rw] started_at
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] target_url
#   @return [String, nil]
ApiEntitiesCommitStatus = Struct.new(
  :allow_failure,
  :author,
  :coverage,
  :created_at,
  :description,
  :finished_at,
  :id,
  :name,
  :pipeline_id,
  :ref,
  :sha,
  :started_at,
  :status,
  :target_url,
  keyword_init: true
)

# Request payload for ApiEntitiesCommitStatus#list.
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] sha
#   @return [Object]
ApiEntitiesCommitStatusListMatch = Struct.new(
  :project_id,
  :sha,
  keyword_init: true
)

# Request payload for ApiEntitiesCommitStatus#create.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesCommitStatusCreateData = Struct.new(
  :id,
  :project_id,
  keyword_init: true
)

# ApiEntitiesCompare entity data model.
#
# @!attribute [rw] commit
#   @return [Hash, nil]
#
# @!attribute [rw] compare_same_ref
#   @return [Boolean, nil]
#
# @!attribute [rw] compare_timeout
#   @return [Boolean, nil]
#
# @!attribute [rw] diff
#   @return [Array, nil]
#
# @!attribute [rw] web_url
#   @return [String, nil]
ApiEntitiesCompare = Struct.new(
  :commit,
  :compare_same_ref,
  :compare_timeout,
  :diff,
  :web_url,
  keyword_init: true
)

# Request payload for ApiEntitiesCompare#list.
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesCompareListMatch = Struct.new(
  :project_id,
  keyword_init: true
)

# ApiEntitiesContainerRegistryRepository entity data model.
#
# @!attribute [rw] cleanup_policy_started_at
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] delete_api_path
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] location
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] path
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [Integer, nil]
#
# @!attribute [rw] size
#   @return [Integer, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] tag
#   @return [Hash, nil]
#
# @!attribute [rw] tags_count
#   @return [Integer, nil]
ApiEntitiesContainerRegistryRepository = Struct.new(
  :cleanup_policy_started_at,
  :created_at,
  :delete_api_path,
  :id,
  :location,
  :name,
  :path,
  :project_id,
  :size,
  :status,
  :tag,
  :tags_count,
  keyword_init: true
)

# Request payload for ApiEntitiesContainerRegistryRepository#load.
#
# @!attribute [rw] id
#   @return [String]
ApiEntitiesContainerRegistryRepositoryLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for ApiEntitiesContainerRegistryRepository#list.
#
# @!attribute [rw] project_id
#   @return [String, nil]
#
# @!attribute [rw] group_id
#   @return [String, nil]
ApiEntitiesContainerRegistryRepositoryListMatch = Struct.new(
  :project_id,
  :group_id,
  keyword_init: true
)

# ApiEntitiesContainerRegistryTag entity data model.
#
# @!attribute [rw] location
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] path
#   @return [String, nil]
ApiEntitiesContainerRegistryTag = Struct.new(
  :location,
  :name,
  :path,
  keyword_init: true
)

# Request payload for ApiEntitiesContainerRegistryTag#list.
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] repository_id
#   @return [String]
ApiEntitiesContainerRegistryTagListMatch = Struct.new(
  :project_id,
  :repository_id,
  keyword_init: true
)

# ApiEntitiesContainerRegistryTagDetail entity data model.
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] digest
#   @return [String, nil]
#
# @!attribute [rw] location
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] path
#   @return [String, nil]
#
# @!attribute [rw] revision
#   @return [String, nil]
#
# @!attribute [rw] short_revision
#   @return [String, nil]
#
# @!attribute [rw] total_size
#   @return [Integer, nil]
ApiEntitiesContainerRegistryTagDetail = Struct.new(
  :created_at,
  :digest,
  :location,
  :name,
  :path,
  :revision,
  :short_revision,
  :total_size,
  keyword_init: true
)

# Request payload for ApiEntitiesContainerRegistryTagDetail#load.
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] repository_id
#   @return [String]
#
# @!attribute [rw] tag_name
#   @return [Object]
ApiEntitiesContainerRegistryTagDetailLoadMatch = Struct.new(
  :project_id,
  :repository_id,
  :tag_name,
  keyword_init: true
)

# ApiEntitiesContributor entity data model.
#
# @!attribute [rw] addition
#   @return [Integer, nil]
#
# @!attribute [rw] commit
#   @return [Integer, nil]
#
# @!attribute [rw] deletion
#   @return [Integer, nil]
#
# @!attribute [rw] email
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
ApiEntitiesContributor = Struct.new(
  :addition,
  :commit,
  :deletion,
  :email,
  :name,
  keyword_init: true
)

# Request payload for ApiEntitiesContributor#load.
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesContributorLoadMatch = Struct.new(
  :project_id,
  keyword_init: true
)

# ApiEntitiesDeployKey entity data model.
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] expires_at
#   @return [String, nil]
#
# @!attribute [rw] fingerprint
#   @return [String, nil]
#
# @!attribute [rw] fingerprint_sha256
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] key
#   @return [String, nil]
#
# @!attribute [rw] last_used_at
#   @return [String, nil]
#
# @!attribute [rw] projects_with_readonly_access
#   @return [Hash, nil]
#
# @!attribute [rw] projects_with_write_access
#   @return [Hash, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] usage_type
#   @return [String, nil]
ApiEntitiesDeployKey = Struct.new(
  :created_at,
  :expires_at,
  :fingerprint,
  :fingerprint_sha256,
  :id,
  :key,
  :last_used_at,
  :projects_with_readonly_access,
  :projects_with_write_access,
  :title,
  :usage_type,
  keyword_init: true
)

# Request payload for ApiEntitiesDeployKey#list.
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] expires_at
#   @return [String, nil]
#
# @!attribute [rw] fingerprint
#   @return [String, nil]
#
# @!attribute [rw] fingerprint_sha256
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] key
#   @return [String, nil]
#
# @!attribute [rw] last_used_at
#   @return [String, nil]
#
# @!attribute [rw] projects_with_readonly_access
#   @return [Hash, nil]
#
# @!attribute [rw] projects_with_write_access
#   @return [Hash, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] usage_type
#   @return [String, nil]
ApiEntitiesDeployKeyListMatch = Struct.new(
  :created_at,
  :expires_at,
  :fingerprint,
  :fingerprint_sha256,
  :id,
  :key,
  :last_used_at,
  :projects_with_readonly_access,
  :projects_with_write_access,
  :title,
  :usage_type,
  keyword_init: true
)

# Request payload for ApiEntitiesDeployKey#create.
#
# @!attribute [rw] deploy_key_id
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String, nil]
ApiEntitiesDeployKeyCreateData = Struct.new(
  :deploy_key_id,
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesDeployKey#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesDeployKeyUpdateData = Struct.new(
  :id,
  :project_id,
  keyword_init: true
)

# ApiEntitiesDeployKeysProject entity data model.
#
# @!attribute [rw] can_push
#   @return [Boolean, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] expires_at
#   @return [String, nil]
#
# @!attribute [rw] fingerprint
#   @return [String, nil]
#
# @!attribute [rw] fingerprint_sha256
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] key
#   @return [String, nil]
#
# @!attribute [rw] last_used_at
#   @return [String, nil]
#
# @!attribute [rw] projects_with_readonly_access
#   @return [Hash, nil]
#
# @!attribute [rw] projects_with_write_access
#   @return [Hash, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] usage_type
#   @return [String, nil]
ApiEntitiesDeployKeysProject = Struct.new(
  :can_push,
  :created_at,
  :expires_at,
  :fingerprint,
  :fingerprint_sha256,
  :id,
  :key,
  :last_used_at,
  :projects_with_readonly_access,
  :projects_with_write_access,
  :title,
  :usage_type,
  keyword_init: true
)

# Request payload for ApiEntitiesDeployKeysProject#load.
#
# @!attribute [rw] key_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesDeployKeysProjectLoadMatch = Struct.new(
  :key_id,
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesDeployKeysProject#list.
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesDeployKeysProjectListMatch = Struct.new(
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesDeployKeysProject#create.
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesDeployKeysProjectCreateData = Struct.new(
  :project_id,
  keyword_init: true
)

# ApiEntitiesDeployToken entity data model.
#
# @!attribute [rw] expired
#   @return [Boolean, nil]
#
# @!attribute [rw] expires_at
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] revoked
#   @return [Boolean, nil]
#
# @!attribute [rw] scope
#   @return [Array, nil]
#
# @!attribute [rw] username
#   @return [String, nil]
ApiEntitiesDeployToken = Struct.new(
  :expired,
  :expires_at,
  :id,
  :name,
  :revoked,
  :scope,
  :username,
  keyword_init: true
)

# Request payload for ApiEntitiesDeployToken#load.
#
# @!attribute [rw] group_id
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String, nil]
ApiEntitiesDeployTokenLoadMatch = Struct.new(
  :group_id,
  :id,
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesDeployToken#list.
#
# @!attribute [rw] group_id
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String, nil]
ApiEntitiesDeployTokenListMatch = Struct.new(
  :group_id,
  :project_id,
  keyword_init: true
)

# ApiEntitiesDeployTokenWithToken entity data model.
class ApiEntitiesDeployTokenWithToken
end

# Request payload for ApiEntitiesDeployTokenWithToken#create.
#
# @!attribute [rw] group_id
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String, nil]
ApiEntitiesDeployTokenWithTokenCreateData = Struct.new(
  :group_id,
  :project_id,
  keyword_init: true
)

# ApiEntitiesDeployment entity data model.
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] deployable
#   @return [Hash, nil]
#
# @!attribute [rw] environment
#   @return [Hash, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] iid
#   @return [Integer, nil]
#
# @!attribute [rw] ref
#   @return [String, nil]
#
# @!attribute [rw] sha
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] user
#   @return [Hash, nil]
ApiEntitiesDeployment = Struct.new(
  :created_at,
  :deployable,
  :environment,
  :id,
  :iid,
  :ref,
  :sha,
  :status,
  :updated_at,
  :user,
  keyword_init: true
)

# Request payload for ApiEntitiesDeployment#list.
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesDeploymentListMatch = Struct.new(
  :project_id,
  keyword_init: true
)

# ApiEntitiesDeploymentExtended entity data model.
#
# @!attribute [rw] approval
#   @return [Hash, nil]
#
# @!attribute [rw] approval_summary
#   @return [Hash, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] deployable
#   @return [Hash, nil]
#
# @!attribute [rw] environment
#   @return [Hash, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] iid
#   @return [Integer, nil]
#
# @!attribute [rw] pending_approval_count
#   @return [Integer, nil]
#
# @!attribute [rw] ref
#   @return [String, nil]
#
# @!attribute [rw] sha
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] user
#   @return [Hash, nil]
ApiEntitiesDeploymentExtended = Struct.new(
  :approval,
  :approval_summary,
  :created_at,
  :deployable,
  :environment,
  :id,
  :iid,
  :pending_approval_count,
  :ref,
  :sha,
  :status,
  :updated_at,
  :user,
  keyword_init: true
)

# Request payload for ApiEntitiesDeploymentExtended#load.
#
# @!attribute [rw] deployment_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesDeploymentExtendedLoadMatch = Struct.new(
  :deployment_id,
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesDeploymentExtended#create.
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesDeploymentExtendedCreateData = Struct.new(
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesDeploymentExtended#update.
#
# @!attribute [rw] deployment_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesDeploymentExtendedUpdateData = Struct.new(
  :deployment_id,
  :project_id,
  keyword_init: true
)

# ApiEntitiesDeploymentsApproval entity data model.
class ApiEntitiesDeploymentsApproval
end

# Request payload for ApiEntitiesDeploymentsApproval#create.
#
# @!attribute [rw] deployment_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesDeploymentsApprovalCreateData = Struct.new(
  :deployment_id,
  :project_id,
  keyword_init: true
)

# ApiEntitiesDictionaryTable entity data model.
#
# @!attribute [rw] feature_category
#   @return [Array, nil]
#
# @!attribute [rw] table_name
#   @return [String, nil]
ApiEntitiesDictionaryTable = Struct.new(
  :feature_category,
  :table_name,
  keyword_init: true
)

# Request payload for ApiEntitiesDictionaryTable#load.
#
# @!attribute [rw] databas_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
ApiEntitiesDictionaryTableLoadMatch = Struct.new(
  :databas_id,
  :id,
  keyword_init: true
)

# ApiEntitiesDiff entity data model.
#
# @!attribute [rw] a_mode
#   @return [String, nil]
#
# @!attribute [rw] b_mode
#   @return [String, nil]
#
# @!attribute [rw] collapsed
#   @return [Boolean, nil]
#
# @!attribute [rw] deleted_file
#   @return [Boolean, nil]
#
# @!attribute [rw] diff
#   @return [String, nil]
#
# @!attribute [rw] generated_file
#   @return [Boolean, nil]
#
# @!attribute [rw] new_file
#   @return [Boolean, nil]
#
# @!attribute [rw] new_path
#   @return [String, nil]
#
# @!attribute [rw] old_path
#   @return [String, nil]
#
# @!attribute [rw] renamed_file
#   @return [Boolean, nil]
#
# @!attribute [rw] too_large
#   @return [Boolean, nil]
ApiEntitiesDiff = Struct.new(
  :a_mode,
  :b_mode,
  :collapsed,
  :deleted_file,
  :diff,
  :generated_file,
  :new_file,
  :new_path,
  :old_path,
  :renamed_file,
  :too_large,
  keyword_init: true
)

# Request payload for ApiEntitiesDiff#load.
#
# @!attribute [rw] merge_request_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesDiffLoadMatch = Struct.new(
  :merge_request_id,
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesDiff#list.
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] sha
#   @return [Object]
ApiEntitiesDiffListMatch = Struct.new(
  :project_id,
  :sha,
  keyword_init: true
)

# ApiEntitiesDiscoveredCluster entity data model.
#
# @!attribute [rw] group
#   @return [String, nil]
#
# @!attribute [rw] project
#   @return [String, nil]
ApiEntitiesDiscoveredCluster = Struct.new(
  :group,
  :project,
  keyword_init: true
)

# Request payload for ApiEntitiesDiscoveredCluster#load.
#
# @!attribute [rw] group
#   @return [String, nil]
#
# @!attribute [rw] project
#   @return [String, nil]
ApiEntitiesDiscoveredClusterLoadMatch = Struct.new(
  :group,
  :project,
  keyword_init: true
)

# ApiEntitiesDraftNote entity data model.
#
# @!attribute [rw] author_id
#   @return [Integer, nil]
#
# @!attribute [rw] commit_id
#   @return [Integer, nil]
#
# @!attribute [rw] discussion_id
#   @return [Integer, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] line_code
#   @return [String, nil]
#
# @!attribute [rw] merge_request_id
#   @return [Integer, nil]
#
# @!attribute [rw] note
#   @return [String, nil]
#
# @!attribute [rw] position
#   @return [Hash, nil]
#
# @!attribute [rw] resolve_discussion
#   @return [Boolean, nil]
ApiEntitiesDraftNote = Struct.new(
  :author_id,
  :commit_id,
  :discussion_id,
  :id,
  :line_code,
  :merge_request_id,
  :note,
  :position,
  :resolve_discussion,
  keyword_init: true
)

# Request payload for ApiEntitiesDraftNote#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] merge_request_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesDraftNoteLoadMatch = Struct.new(
  :id,
  :merge_request_id,
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesDraftNote#list.
#
# @!attribute [rw] merge_request_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesDraftNoteListMatch = Struct.new(
  :merge_request_id,
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesDraftNote#create.
#
# @!attribute [rw] merge_request_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesDraftNoteCreateData = Struct.new(
  :merge_request_id,
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesDraftNote#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] merge_request_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesDraftNoteUpdateData = Struct.new(
  :id,
  :merge_request_id,
  :project_id,
  keyword_init: true
)

# ApiEntitiesEnvironment entity data model.
#
# @!attribute [rw] auto_stop_at
#   @return [String, nil]
#
# @!attribute [rw] auto_stop_setting
#   @return [String, nil]
#
# @!attribute [rw] cluster_agent
#   @return [Hash, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] external_url
#   @return [String, nil]
#
# @!attribute [rw] flux_resource_path
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] kubernetes_namespace
#   @return [String, nil]
#
# @!attribute [rw] last_deployment
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] project
#   @return [Hash, nil]
#
# @!attribute [rw] slug
#   @return [String, nil]
#
# @!attribute [rw] state
#   @return [String, nil]
#
# @!attribute [rw] tier
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
ApiEntitiesEnvironment = Struct.new(
  :auto_stop_at,
  :auto_stop_setting,
  :cluster_agent,
  :created_at,
  :description,
  :external_url,
  :flux_resource_path,
  :id,
  :kubernetes_namespace,
  :last_deployment,
  :name,
  :project,
  :slug,
  :state,
  :tier,
  :updated_at,
  keyword_init: true
)

# Request payload for ApiEntitiesEnvironment#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesEnvironmentLoadMatch = Struct.new(
  :id,
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesEnvironment#list.
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesEnvironmentListMatch = Struct.new(
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesEnvironment#create.
#
# @!attribute [rw] environment_id
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesEnvironmentCreateData = Struct.new(
  :environment_id,
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesEnvironment#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesEnvironmentUpdateData = Struct.new(
  :id,
  :project_id,
  keyword_init: true
)

# ApiEntitiesErrorTrackingClientKey entity data model.
#
# @!attribute [rw] active
#   @return [Boolean, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] public_key
#   @return [String, nil]
#
# @!attribute [rw] sentry_dsn
#   @return [String, nil]
ApiEntitiesErrorTrackingClientKey = Struct.new(
  :active,
  :id,
  :public_key,
  :sentry_dsn,
  keyword_init: true
)

# Request payload for ApiEntitiesErrorTrackingClientKey#list.
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesErrorTrackingClientKeyListMatch = Struct.new(
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesErrorTrackingClientKey#create.
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesErrorTrackingClientKeyCreateData = Struct.new(
  :project_id,
  keyword_init: true
)

# ApiEntitiesErrorTrackingProjectSetting entity data model.
#
# @!attribute [rw] active
#   @return [Boolean, nil]
#
# @!attribute [rw] api_url
#   @return [String, nil]
#
# @!attribute [rw] integrated
#   @return [Boolean, nil]
#
# @!attribute [rw] project_name
#   @return [String, nil]
#
# @!attribute [rw] sentry_external_url
#   @return [String, nil]
ApiEntitiesErrorTrackingProjectSetting = Struct.new(
  :active,
  :api_url,
  :integrated,
  :project_name,
  :sentry_external_url,
  keyword_init: true
)

# Request payload for ApiEntitiesErrorTrackingProjectSetting#load.
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesErrorTrackingProjectSettingLoadMatch = Struct.new(
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesErrorTrackingProjectSetting#update.
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesErrorTrackingProjectSettingUpdateData = Struct.new(
  :project_id,
  keyword_init: true
)

# ApiEntitiesEvent entity data model.
#
# @!attribute [rw] action_name
#   @return [String, nil]
#
# @!attribute [rw] author
#   @return [Hash, nil]
#
# @!attribute [rw] author_id
#   @return [Integer, nil]
#
# @!attribute [rw] author_username
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] imported
#   @return [Boolean, nil]
#
# @!attribute [rw] imported_from
#   @return [String, nil]
#
# @!attribute [rw] note
#   @return [Hash, nil]
#
# @!attribute [rw] project_id
#   @return [Integer, nil]
#
# @!attribute [rw] push_data
#   @return [Hash, nil]
#
# @!attribute [rw] target_id
#   @return [Integer, nil]
#
# @!attribute [rw] target_iid
#   @return [Integer, nil]
#
# @!attribute [rw] target_title
#   @return [String, nil]
#
# @!attribute [rw] target_type
#   @return [String, nil]
#
# @!attribute [rw] wiki_page
#   @return [Hash, nil]
ApiEntitiesEvent = Struct.new(
  :action_name,
  :author,
  :author_id,
  :author_username,
  :created_at,
  :id,
  :imported,
  :imported_from,
  :note,
  :project_id,
  :push_data,
  :target_id,
  :target_iid,
  :target_title,
  :target_type,
  :wiki_page,
  keyword_init: true
)

# Request payload for ApiEntitiesEvent#load.
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesEventLoadMatch = Struct.new(
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesEvent#list.
#
# @!attribute [rw] user_id
#   @return [String, nil]
ApiEntitiesEventListMatch = Struct.new(
  :user_id,
  keyword_init: true
)

# ApiEntitiesFeature entity data model.
#
# @!attribute [rw] definition
#   @return [Hash, nil]
#
# @!attribute [rw] gate
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] state
#   @return [String, nil]
ApiEntitiesFeature = Struct.new(
  :definition,
  :gate,
  :name,
  :state,
  keyword_init: true
)

# Request payload for ApiEntitiesFeature#list.
#
# @!attribute [rw] definition
#   @return [Hash, nil]
#
# @!attribute [rw] gate
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] state
#   @return [String, nil]
ApiEntitiesFeatureListMatch = Struct.new(
  :definition,
  :gate,
  :name,
  :state,
  keyword_init: true
)

# Request payload for ApiEntitiesFeature#create.
#
# @!attribute [rw] id
#   @return [String]
ApiEntitiesFeatureCreateData = Struct.new(
  :id,
  keyword_init: true
)

# ApiEntitiesFeatureDefinition entity data model.
#
# @!attribute [rw] default_enabled
#   @return [String, nil]
#
# @!attribute [rw] feature_issue_url
#   @return [String, nil]
#
# @!attribute [rw] group
#   @return [String, nil]
#
# @!attribute [rw] intended_to_rollout_by
#   @return [String, nil]
#
# @!attribute [rw] introduced_by_url
#   @return [String, nil]
#
# @!attribute [rw] log_state_change
#   @return [String, nil]
#
# @!attribute [rw] milestone
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] rollout_issue_url
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
ApiEntitiesFeatureDefinition = Struct.new(
  :default_enabled,
  :feature_issue_url,
  :group,
  :intended_to_rollout_by,
  :introduced_by_url,
  :log_state_change,
  :milestone,
  :name,
  :rollout_issue_url,
  :type,
  keyword_init: true
)

# Request payload for ApiEntitiesFeatureDefinition#list.
#
# @!attribute [rw] default_enabled
#   @return [String, nil]
#
# @!attribute [rw] feature_issue_url
#   @return [String, nil]
#
# @!attribute [rw] group
#   @return [String, nil]
#
# @!attribute [rw] intended_to_rollout_by
#   @return [String, nil]
#
# @!attribute [rw] introduced_by_url
#   @return [String, nil]
#
# @!attribute [rw] log_state_change
#   @return [String, nil]
#
# @!attribute [rw] milestone
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] rollout_issue_url
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
ApiEntitiesFeatureDefinitionListMatch = Struct.new(
  :default_enabled,
  :feature_issue_url,
  :group,
  :intended_to_rollout_by,
  :introduced_by_url,
  :log_state_change,
  :milestone,
  :name,
  :rollout_issue_url,
  :type,
  keyword_init: true
)

# ApiEntitiesFeatureFlag entity data model.
#
# @!attribute [rw] active
#   @return [Boolean, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] scope
#   @return [String, nil]
#
# @!attribute [rw] strategy
#   @return [Hash, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] version
#   @return [String, nil]
ApiEntitiesFeatureFlag = Struct.new(
  :active,
  :created_at,
  :description,
  :name,
  :scope,
  :strategy,
  :updated_at,
  :version,
  keyword_init: true
)

# Request payload for ApiEntitiesFeatureFlag#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesFeatureFlagLoadMatch = Struct.new(
  :id,
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesFeatureFlag#list.
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesFeatureFlagListMatch = Struct.new(
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesFeatureFlag#create.
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesFeatureFlagCreateData = Struct.new(
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesFeatureFlag#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesFeatureFlagUpdateData = Struct.new(
  :id,
  :project_id,
  keyword_init: true
)

# ApiEntitiesFeatureFlagUserList entity data model.
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] edit_path
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] iid
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] path
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [Integer, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] user_xid
#   @return [String, nil]
ApiEntitiesFeatureFlagUserList = Struct.new(
  :created_at,
  :edit_path,
  :id,
  :iid,
  :name,
  :path,
  :project_id,
  :updated_at,
  :user_xid,
  keyword_init: true
)

# Request payload for ApiEntitiesFeatureFlagUserList#load.
#
# @!attribute [rw] iid
#   @return [Object]
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesFeatureFlagUserListLoadMatch = Struct.new(
  :iid,
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesFeatureFlagUserList#list.
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesFeatureFlagUserListListMatch = Struct.new(
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesFeatureFlagUserList#create.
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesFeatureFlagUserListCreateData = Struct.new(
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesFeatureFlagUserList#update.
#
# @!attribute [rw] iid
#   @return [Object]
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesFeatureFlagUserListUpdateData = Struct.new(
  :iid,
  :project_id,
  keyword_init: true
)

# ApiEntitiesFreezePeriod entity data model.
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] cron_timezone
#   @return [String, nil]
#
# @!attribute [rw] freeze_end
#   @return [String, nil]
#
# @!attribute [rw] freeze_start
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
ApiEntitiesFreezePeriod = Struct.new(
  :created_at,
  :cron_timezone,
  :freeze_end,
  :freeze_start,
  :id,
  :updated_at,
  keyword_init: true
)

# Request payload for ApiEntitiesFreezePeriod#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesFreezePeriodLoadMatch = Struct.new(
  :id,
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesFreezePeriod#list.
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesFreezePeriodListMatch = Struct.new(
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesFreezePeriod#create.
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesFreezePeriodCreateData = Struct.new(
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesFreezePeriod#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesFreezePeriodUpdateData = Struct.new(
  :id,
  :project_id,
  keyword_init: true
)

# ApiEntitiesGitlabSubscription entity data model.
#
# @!attribute [rw] billing
#   @return [Hash, nil]
#
# @!attribute [rw] plan
#   @return [Hash, nil]
#
# @!attribute [rw] usage
#   @return [Hash, nil]
ApiEntitiesGitlabSubscription = Struct.new(
  :billing,
  :plan,
  :usage,
  keyword_init: true
)

# Request payload for ApiEntitiesGitlabSubscription#load.
#
# @!attribute [rw] namespace_id
#   @return [String]
ApiEntitiesGitlabSubscriptionLoadMatch = Struct.new(
  :namespace_id,
  keyword_init: true
)

# ApiEntitiesGoModuleVersion entity data model.
#
# @!attribute [rw] time
#   @return [String, nil]
#
# @!attribute [rw] version
#   @return [String, nil]
ApiEntitiesGoModuleVersion = Struct.new(
  :time,
  :version,
  keyword_init: true
)

# Request payload for ApiEntitiesGoModuleVersion#load.
#
# @!attribute [rw] module_version
#   @return [Object]
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesGoModuleVersionLoadMatch = Struct.new(
  :module_version,
  :project_id,
  keyword_init: true
)

# ApiEntitiesGroup entity data model.
#
# @!attribute [rw] archived
#   @return [Boolean, nil]
#
# @!attribute [rw] auto_devops_enabled
#   @return [String, nil]
#
# @!attribute [rw] auto_duo_code_review_enabled
#   @return [String, nil]
#
# @!attribute [rw] avatar_url
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] custom_attribute
#   @return [Hash, nil]
#
# @!attribute [rw] default_branch
#   @return [String, nil]
#
# @!attribute [rw] default_branch_protection
#   @return [String, nil]
#
# @!attribute [rw] default_branch_protection_default
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] duo_core_features_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] duo_features_enabled
#   @return [String, nil]
#
# @!attribute [rw] emails_disabled
#   @return [Boolean, nil]
#
# @!attribute [rw] emails_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] file_template_project_id
#   @return [String, nil]
#
# @!attribute [rw] full_name
#   @return [String, nil]
#
# @!attribute [rw] full_path
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] ldap_access
#   @return [String, nil]
#
# @!attribute [rw] ldap_cn
#   @return [String, nil]
#
# @!attribute [rw] ldap_group_link
#   @return [Hash, nil]
#
# @!attribute [rw] lfs_enabled
#   @return [String, nil]
#
# @!attribute [rw] lock_duo_features_enabled
#   @return [String, nil]
#
# @!attribute [rw] lock_math_rendering_limits_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] marked_for_deletion_on
#   @return [String, nil]
#
# @!attribute [rw] math_rendering_limits_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] max_artifacts_size
#   @return [Integer, nil]
#
# @!attribute [rw] mentions_disabled
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] organization_id
#   @return [String, nil]
#
# @!attribute [rw] parent_id
#   @return [String, nil]
#
# @!attribute [rw] path
#   @return [String, nil]
#
# @!attribute [rw] project_creation_level
#   @return [String, nil]
#
# @!attribute [rw] repository_storage
#   @return [String, nil]
#
# @!attribute [rw] request_access_enabled
#   @return [String, nil]
#
# @!attribute [rw] require_two_factor_authentication
#   @return [String, nil]
#
# @!attribute [rw] root_storage_statistic
#   @return [Hash, nil]
#
# @!attribute [rw] saml_group_link
#   @return [Hash, nil]
#
# @!attribute [rw] share_with_group_lock
#   @return [String, nil]
#
# @!attribute [rw] shared_runners_setting
#   @return [String, nil]
#
# @!attribute [rw] show_diff_preview_in_email
#   @return [Boolean, nil]
#
# @!attribute [rw] statistic
#   @return [Hash, nil]
#
# @!attribute [rw] subgroup_creation_level
#   @return [String, nil]
#
# @!attribute [rw] two_factor_grace_period
#   @return [String, nil]
#
# @!attribute [rw] visibility
#   @return [String, nil]
#
# @!attribute [rw] web_based_commit_signing_enabled
#   @return [String, nil]
#
# @!attribute [rw] web_url
#   @return [String, nil]
#
# @!attribute [rw] wiki_access_level
#   @return [String, nil]
ApiEntitiesGroup = Struct.new(
  :archived,
  :auto_devops_enabled,
  :auto_duo_code_review_enabled,
  :avatar_url,
  :created_at,
  :custom_attribute,
  :default_branch,
  :default_branch_protection,
  :default_branch_protection_default,
  :description,
  :duo_core_features_enabled,
  :duo_features_enabled,
  :emails_disabled,
  :emails_enabled,
  :file_template_project_id,
  :full_name,
  :full_path,
  :id,
  :ldap_access,
  :ldap_cn,
  :ldap_group_link,
  :lfs_enabled,
  :lock_duo_features_enabled,
  :lock_math_rendering_limits_enabled,
  :marked_for_deletion_on,
  :math_rendering_limits_enabled,
  :max_artifacts_size,
  :mentions_disabled,
  :name,
  :organization_id,
  :parent_id,
  :path,
  :project_creation_level,
  :repository_storage,
  :request_access_enabled,
  :require_two_factor_authentication,
  :root_storage_statistic,
  :saml_group_link,
  :share_with_group_lock,
  :shared_runners_setting,
  :show_diff_preview_in_email,
  :statistic,
  :subgroup_creation_level,
  :two_factor_grace_period,
  :visibility,
  :web_based_commit_signing_enabled,
  :web_url,
  :wiki_access_level,
  keyword_init: true
)

# Request payload for ApiEntitiesGroup#load.
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesGroupLoadMatch = Struct.new(
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesGroup#list.
#
# @!attribute [rw] group_id
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String, nil]
ApiEntitiesGroupListMatch = Struct.new(
  :group_id,
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesGroup#create.
#
# @!attribute [rw] group_id
#   @return [String, nil]
ApiEntitiesGroupCreateData = Struct.new(
  :group_id,
  keyword_init: true
)

# Request payload for ApiEntitiesGroup#update.
#
# @!attribute [rw] id
#   @return [String]
ApiEntitiesGroupUpdateData = Struct.new(
  :id,
  keyword_init: true
)

# ApiEntitiesGroupDetail entity data model.
#
# @!attribute [rw] allowed_email_domains_list
#   @return [String, nil]
#
# @!attribute [rw] archived
#   @return [Boolean, nil]
#
# @!attribute [rw] auto_ban_user_on_excessive_projects_download
#   @return [String, nil]
#
# @!attribute [rw] auto_devops_enabled
#   @return [String, nil]
#
# @!attribute [rw] auto_duo_code_review_enabled
#   @return [String, nil]
#
# @!attribute [rw] avatar_url
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] custom_attribute
#   @return [Hash, nil]
#
# @!attribute [rw] default_branch
#   @return [String, nil]
#
# @!attribute [rw] default_branch_protection
#   @return [String, nil]
#
# @!attribute [rw] default_branch_protection_default
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] duo_core_features_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] duo_features_enabled
#   @return [String, nil]
#
# @!attribute [rw] emails_disabled
#   @return [Boolean, nil]
#
# @!attribute [rw] emails_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] enabled_git_access_protocol
#   @return [String, nil]
#
# @!attribute [rw] extra_shared_runners_minutes_limit
#   @return [String, nil]
#
# @!attribute [rw] file_template_project_id
#   @return [String, nil]
#
# @!attribute [rw] full_name
#   @return [String, nil]
#
# @!attribute [rw] full_path
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] ip_restriction_range
#   @return [String, nil]
#
# @!attribute [rw] ldap_access
#   @return [String, nil]
#
# @!attribute [rw] ldap_cn
#   @return [String, nil]
#
# @!attribute [rw] ldap_group_link
#   @return [Hash, nil]
#
# @!attribute [rw] lfs_enabled
#   @return [String, nil]
#
# @!attribute [rw] lock_duo_features_enabled
#   @return [String, nil]
#
# @!attribute [rw] lock_math_rendering_limits_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] marked_for_deletion_on
#   @return [String, nil]
#
# @!attribute [rw] math_rendering_limits_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] max_artifacts_size
#   @return [Integer, nil]
#
# @!attribute [rw] membership_lock
#   @return [String, nil]
#
# @!attribute [rw] mentions_disabled
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] organization_id
#   @return [String, nil]
#
# @!attribute [rw] parent_id
#   @return [String, nil]
#
# @!attribute [rw] path
#   @return [String, nil]
#
# @!attribute [rw] prevent_forking_outside_group
#   @return [String, nil]
#
# @!attribute [rw] prevent_sharing_groups_outside_hierarchy
#   @return [String, nil]
#
# @!attribute [rw] project
#   @return [Hash, nil]
#
# @!attribute [rw] project_creation_level
#   @return [String, nil]
#
# @!attribute [rw] repository_storage
#   @return [String, nil]
#
# @!attribute [rw] request_access_enabled
#   @return [String, nil]
#
# @!attribute [rw] require_two_factor_authentication
#   @return [String, nil]
#
# @!attribute [rw] root_storage_statistic
#   @return [Hash, nil]
#
# @!attribute [rw] runners_token
#   @return [String, nil]
#
# @!attribute [rw] saml_group_link
#   @return [Hash, nil]
#
# @!attribute [rw] service_access_tokens_expiration_enforced
#   @return [String, nil]
#
# @!attribute [rw] share_with_group_lock
#   @return [String, nil]
#
# @!attribute [rw] shared_project
#   @return [Hash, nil]
#
# @!attribute [rw] shared_runners_minutes_limit
#   @return [String, nil]
#
# @!attribute [rw] shared_runners_setting
#   @return [String, nil]
#
# @!attribute [rw] shared_with_group
#   @return [String, nil]
#
# @!attribute [rw] show_diff_preview_in_email
#   @return [Boolean, nil]
#
# @!attribute [rw] statistic
#   @return [Hash, nil]
#
# @!attribute [rw] subgroup_creation_level
#   @return [String, nil]
#
# @!attribute [rw] two_factor_grace_period
#   @return [String, nil]
#
# @!attribute [rw] unique_project_download_limit
#   @return [String, nil]
#
# @!attribute [rw] unique_project_download_limit_alertlist
#   @return [String, nil]
#
# @!attribute [rw] unique_project_download_limit_allowlist
#   @return [String, nil]
#
# @!attribute [rw] unique_project_download_limit_interval_in_second
#   @return [String, nil]
#
# @!attribute [rw] visibility
#   @return [String, nil]
#
# @!attribute [rw] web_based_commit_signing_enabled
#   @return [String, nil]
#
# @!attribute [rw] web_url
#   @return [String, nil]
#
# @!attribute [rw] wiki_access_level
#   @return [String, nil]
ApiEntitiesGroupDetail = Struct.new(
  :allowed_email_domains_list,
  :archived,
  :auto_ban_user_on_excessive_projects_download,
  :auto_devops_enabled,
  :auto_duo_code_review_enabled,
  :avatar_url,
  :created_at,
  :custom_attribute,
  :default_branch,
  :default_branch_protection,
  :default_branch_protection_default,
  :description,
  :duo_core_features_enabled,
  :duo_features_enabled,
  :emails_disabled,
  :emails_enabled,
  :enabled_git_access_protocol,
  :extra_shared_runners_minutes_limit,
  :file_template_project_id,
  :full_name,
  :full_path,
  :id,
  :ip_restriction_range,
  :ldap_access,
  :ldap_cn,
  :ldap_group_link,
  :lfs_enabled,
  :lock_duo_features_enabled,
  :lock_math_rendering_limits_enabled,
  :marked_for_deletion_on,
  :math_rendering_limits_enabled,
  :max_artifacts_size,
  :membership_lock,
  :mentions_disabled,
  :name,
  :organization_id,
  :parent_id,
  :path,
  :prevent_forking_outside_group,
  :prevent_sharing_groups_outside_hierarchy,
  :project,
  :project_creation_level,
  :repository_storage,
  :request_access_enabled,
  :require_two_factor_authentication,
  :root_storage_statistic,
  :runners_token,
  :saml_group_link,
  :service_access_tokens_expiration_enforced,
  :share_with_group_lock,
  :shared_project,
  :shared_runners_minutes_limit,
  :shared_runners_setting,
  :shared_with_group,
  :show_diff_preview_in_email,
  :statistic,
  :subgroup_creation_level,
  :two_factor_grace_period,
  :unique_project_download_limit,
  :unique_project_download_limit_alertlist,
  :unique_project_download_limit_allowlist,
  :unique_project_download_limit_interval_in_second,
  :visibility,
  :web_based_commit_signing_enabled,
  :web_url,
  :wiki_access_level,
  keyword_init: true
)

# Request payload for ApiEntitiesGroupDetail#load.
#
# @!attribute [rw] id
#   @return [String]
ApiEntitiesGroupDetailLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for ApiEntitiesGroupDetail#create.
#
# @!attribute [rw] group_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String, nil]
ApiEntitiesGroupDetailCreateData = Struct.new(
  :group_id,
  :project_id,
  keyword_init: true
)

# ApiEntitiesHook entity data model.
#
# @!attribute [rw] alert_status
#   @return [Object, nil]
#
# @!attribute [rw] branch_filter_strategy
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] custom_header
#   @return [Array, nil]
#
# @!attribute [rw] custom_webhook_template
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] disabled_until
#   @return [String, nil]
#
# @!attribute [rw] enable_ssl_verification
#   @return [Boolean, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] merge_requests_event
#   @return [Boolean, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] push_event
#   @return [Boolean, nil]
#
# @!attribute [rw] push_events_branch_filter
#   @return [String, nil]
#
# @!attribute [rw] repository_update_event
#   @return [Boolean, nil]
#
# @!attribute [rw] tag_push_event
#   @return [Boolean, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
#
# @!attribute [rw] url_variable
#   @return [Array, nil]
ApiEntitiesHook = Struct.new(
  :alert_status,
  :branch_filter_strategy,
  :created_at,
  :custom_header,
  :custom_webhook_template,
  :description,
  :disabled_until,
  :enable_ssl_verification,
  :id,
  :merge_requests_event,
  :name,
  :push_event,
  :push_events_branch_filter,
  :repository_update_event,
  :tag_push_event,
  :url,
  :url_variable,
  keyword_init: true
)

# Request payload for ApiEntitiesHook#load.
#
# @!attribute [rw] id
#   @return [String]
ApiEntitiesHookLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for ApiEntitiesHook#list.
#
# @!attribute [rw] alert_status
#   @return [Object, nil]
#
# @!attribute [rw] branch_filter_strategy
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] custom_header
#   @return [Array, nil]
#
# @!attribute [rw] custom_webhook_template
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] disabled_until
#   @return [String, nil]
#
# @!attribute [rw] enable_ssl_verification
#   @return [Boolean, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] merge_requests_event
#   @return [Boolean, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] push_event
#   @return [Boolean, nil]
#
# @!attribute [rw] push_events_branch_filter
#   @return [String, nil]
#
# @!attribute [rw] repository_update_event
#   @return [Boolean, nil]
#
# @!attribute [rw] tag_push_event
#   @return [Boolean, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
#
# @!attribute [rw] url_variable
#   @return [Array, nil]
ApiEntitiesHookListMatch = Struct.new(
  :alert_status,
  :branch_filter_strategy,
  :created_at,
  :custom_header,
  :custom_webhook_template,
  :description,
  :disabled_until,
  :enable_ssl_verification,
  :id,
  :merge_requests_event,
  :name,
  :push_event,
  :push_events_branch_filter,
  :repository_update_event,
  :tag_push_event,
  :url,
  :url_variable,
  keyword_init: true
)

# Request payload for ApiEntitiesHook#create.
#
# @!attribute [rw] alert_status
#   @return [Object, nil]
#
# @!attribute [rw] branch_filter_strategy
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] custom_header
#   @return [Array, nil]
#
# @!attribute [rw] custom_webhook_template
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] disabled_until
#   @return [String, nil]
#
# @!attribute [rw] enable_ssl_verification
#   @return [Boolean, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] merge_requests_event
#   @return [Boolean, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] push_event
#   @return [Boolean, nil]
#
# @!attribute [rw] push_events_branch_filter
#   @return [String, nil]
#
# @!attribute [rw] repository_update_event
#   @return [Boolean, nil]
#
# @!attribute [rw] tag_push_event
#   @return [Boolean, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
#
# @!attribute [rw] url_variable
#   @return [Array, nil]
ApiEntitiesHookCreateData = Struct.new(
  :alert_status,
  :branch_filter_strategy,
  :created_at,
  :custom_header,
  :custom_webhook_template,
  :description,
  :disabled_until,
  :enable_ssl_verification,
  :id,
  :merge_requests_event,
  :name,
  :push_event,
  :push_events_branch_filter,
  :repository_update_event,
  :tag_push_event,
  :url,
  :url_variable,
  keyword_init: true
)

# Request payload for ApiEntitiesHook#update.
#
# @!attribute [rw] id
#   @return [String]
ApiEntitiesHookUpdateData = Struct.new(
  :id,
  keyword_init: true
)

# ApiEntitiesIntegration entity data model.
#
# @!attribute [rw] active
#   @return [Boolean, nil]
#
# @!attribute [rw] alert_event
#   @return [Boolean, nil]
#
# @!attribute [rw] comment_on_event_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] commit_event
#   @return [Boolean, nil]
#
# @!attribute [rw] confidential_issues_event
#   @return [Boolean, nil]
#
# @!attribute [rw] confidential_note_event
#   @return [Boolean, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] deployment_event
#   @return [Boolean, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] incident_event
#   @return [Boolean, nil]
#
# @!attribute [rw] inherited
#   @return [Boolean, nil]
#
# @!attribute [rw] issues_event
#   @return [Boolean, nil]
#
# @!attribute [rw] job_event
#   @return [Boolean, nil]
#
# @!attribute [rw] merge_requests_event
#   @return [Boolean, nil]
#
# @!attribute [rw] note_event
#   @return [Boolean, nil]
#
# @!attribute [rw] pipeline_event
#   @return [Boolean, nil]
#
# @!attribute [rw] property
#   @return [Hash, nil]
#
# @!attribute [rw] push_event
#   @return [Boolean, nil]
#
# @!attribute [rw] slug
#   @return [Integer, nil]
#
# @!attribute [rw] tag_push_event
#   @return [Boolean, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] vulnerability_event
#   @return [Boolean, nil]
#
# @!attribute [rw] wiki_page_event
#   @return [Boolean, nil]
ApiEntitiesIntegration = Struct.new(
  :active,
  :alert_event,
  :comment_on_event_enabled,
  :commit_event,
  :confidential_issues_event,
  :confidential_note_event,
  :created_at,
  :deployment_event,
  :id,
  :incident_event,
  :inherited,
  :issues_event,
  :job_event,
  :merge_requests_event,
  :note_event,
  :pipeline_event,
  :property,
  :push_event,
  :slug,
  :tag_push_event,
  :title,
  :updated_at,
  :vulnerability_event,
  :wiki_page_event,
  keyword_init: true
)

# Request payload for ApiEntitiesIntegration#load.
#
# @!attribute [rw] group_id
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String, nil]
#
# @!attribute [rw] slug
#   @return [String, nil]
ApiEntitiesIntegrationLoadMatch = Struct.new(
  :group_id,
  :id,
  :project_id,
  :slug,
  keyword_init: true
)

# ApiEntitiesIntegrationBasic entity data model.
#
# @!attribute [rw] active
#   @return [Boolean, nil]
#
# @!attribute [rw] alert_event
#   @return [Boolean, nil]
#
# @!attribute [rw] comment_on_event_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] commit_event
#   @return [Boolean, nil]
#
# @!attribute [rw] confidential_issues_event
#   @return [Boolean, nil]
#
# @!attribute [rw] confidential_note_event
#   @return [Boolean, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] deployment_event
#   @return [Boolean, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] incident_event
#   @return [Boolean, nil]
#
# @!attribute [rw] inherited
#   @return [Boolean, nil]
#
# @!attribute [rw] issues_event
#   @return [Boolean, nil]
#
# @!attribute [rw] job_event
#   @return [Boolean, nil]
#
# @!attribute [rw] merge_requests_event
#   @return [Boolean, nil]
#
# @!attribute [rw] note_event
#   @return [Boolean, nil]
#
# @!attribute [rw] pipeline_event
#   @return [Boolean, nil]
#
# @!attribute [rw] push_event
#   @return [Boolean, nil]
#
# @!attribute [rw] slug
#   @return [Integer, nil]
#
# @!attribute [rw] tag_push_event
#   @return [Boolean, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] vulnerability_event
#   @return [Boolean, nil]
#
# @!attribute [rw] wiki_page_event
#   @return [Boolean, nil]
ApiEntitiesIntegrationBasic = Struct.new(
  :active,
  :alert_event,
  :comment_on_event_enabled,
  :commit_event,
  :confidential_issues_event,
  :confidential_note_event,
  :created_at,
  :deployment_event,
  :id,
  :incident_event,
  :inherited,
  :issues_event,
  :job_event,
  :merge_requests_event,
  :note_event,
  :pipeline_event,
  :push_event,
  :slug,
  :tag_push_event,
  :title,
  :updated_at,
  :vulnerability_event,
  :wiki_page_event,
  keyword_init: true
)

# Request payload for ApiEntitiesIntegrationBasic#list.
#
# @!attribute [rw] group_id
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String, nil]
ApiEntitiesIntegrationBasicListMatch = Struct.new(
  :group_id,
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesIntegrationBasic#update.
#
# @!attribute [rw] group_id
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String, nil]
ApiEntitiesIntegrationBasicUpdateData = Struct.new(
  :group_id,
  :project_id,
  keyword_init: true
)

# ApiEntitiesInvitation entity data model.
#
# @!attribute [rw] access_level
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] created_by_name
#   @return [String, nil]
#
# @!attribute [rw] expires_at
#   @return [String, nil]
#
# @!attribute [rw] invite_email
#   @return [String, nil]
#
# @!attribute [rw] invite_token
#   @return [String, nil]
#
# @!attribute [rw] user_name
#   @return [String, nil]
ApiEntitiesInvitation = Struct.new(
  :access_level,
  :created_at,
  :created_by_name,
  :expires_at,
  :invite_email,
  :invite_token,
  :user_name,
  keyword_init: true
)

# Request payload for ApiEntitiesInvitation#list.
#
# @!attribute [rw] group_id
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String, nil]
ApiEntitiesInvitationListMatch = Struct.new(
  :group_id,
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesInvitation#create.
#
# @!attribute [rw] group_id
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String, nil]
ApiEntitiesInvitationCreateData = Struct.new(
  :group_id,
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesInvitation#update.
#
# @!attribute [rw] group_id
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String, nil]
ApiEntitiesInvitationUpdateData = Struct.new(
  :group_id,
  :id,
  :project_id,
  keyword_init: true
)

# ApiEntitiesIssuableTimeStat entity data model.
#
# @!attribute [rw] human_time_estimate
#   @return [String, nil]
#
# @!attribute [rw] human_total_time_spent
#   @return [String, nil]
#
# @!attribute [rw] time_estimate
#   @return [Integer, nil]
#
# @!attribute [rw] total_time_spent
#   @return [Integer, nil]
ApiEntitiesIssuableTimeStat = Struct.new(
  :human_time_estimate,
  :human_total_time_spent,
  :time_estimate,
  :total_time_spent,
  keyword_init: true
)

# Request payload for ApiEntitiesIssuableTimeStat#load.
#
# @!attribute [rw] issue_id
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] merge_request_id
#   @return [String, nil]
ApiEntitiesIssuableTimeStatLoadMatch = Struct.new(
  :issue_id,
  :project_id,
  :merge_request_id,
  keyword_init: true
)

# Request payload for ApiEntitiesIssuableTimeStat#create.
#
# @!attribute [rw] issue_id
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] merge_request_id
#   @return [String, nil]
ApiEntitiesIssuableTimeStatCreateData = Struct.new(
  :issue_id,
  :project_id,
  :merge_request_id,
  keyword_init: true
)

# ApiEntitiesIssue entity data model.
#
# @!attribute [rw] assignee
#   @return [Hash, nil]
#
# @!attribute [rw] author
#   @return [Hash, nil]
#
# @!attribute [rw] blocking_issues_count
#   @return [String, nil]
#
# @!attribute [rw] closed_at
#   @return [String, nil]
#
# @!attribute [rw] closed_by
#   @return [Hash, nil]
#
# @!attribute [rw] confidential
#   @return [Boolean, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] discussion_locked
#   @return [Boolean, nil]
#
# @!attribute [rw] downvote
#   @return [String, nil]
#
# @!attribute [rw] due_date
#   @return [String, nil]
#
# @!attribute [rw] epic
#   @return [Hash, nil]
#
# @!attribute [rw] epic_iid
#   @return [String, nil]
#
# @!attribute [rw] has_task
#   @return [Boolean, nil]
#
# @!attribute [rw] health_status
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] iid
#   @return [Integer, nil]
#
# @!attribute [rw] imported
#   @return [String, nil]
#
# @!attribute [rw] imported_from
#   @return [String, nil]
#
# @!attribute [rw] issue_type
#   @return [String, nil]
#
# @!attribute [rw] iteration
#   @return [Hash, nil]
#
# @!attribute [rw] label
#   @return [Array, nil]
#
# @!attribute [rw] link
#   @return [Hash, nil]
#
# @!attribute [rw] merge_requests_count
#   @return [String, nil]
#
# @!attribute [rw] milestone
#   @return [Hash, nil]
#
# @!attribute [rw] moved_to_id
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [Integer, nil]
#
# @!attribute [rw] reference
#   @return [Hash, nil]
#
# @!attribute [rw] service_desk_reply_to
#   @return [String, nil]
#
# @!attribute [rw] severity
#   @return [String, nil]
#
# @!attribute [rw] state
#   @return [String, nil]
#
# @!attribute [rw] subscribed
#   @return [String, nil]
#
# @!attribute [rw] task_completion_status
#   @return [String, nil]
#
# @!attribute [rw] task_status
#   @return [String, nil]
#
# @!attribute [rw] time_stat
#   @return [Hash, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] upvote
#   @return [String, nil]
#
# @!attribute [rw] user_notes_count
#   @return [String, nil]
#
# @!attribute [rw] web_url
#   @return [String, nil]
#
# @!attribute [rw] weight
#   @return [String, nil]
ApiEntitiesIssue = Struct.new(
  :assignee,
  :author,
  :blocking_issues_count,
  :closed_at,
  :closed_by,
  :confidential,
  :created_at,
  :description,
  :discussion_locked,
  :downvote,
  :due_date,
  :epic,
  :epic_iid,
  :has_task,
  :health_status,
  :id,
  :iid,
  :imported,
  :imported_from,
  :issue_type,
  :iteration,
  :label,
  :link,
  :merge_requests_count,
  :milestone,
  :moved_to_id,
  :project_id,
  :reference,
  :service_desk_reply_to,
  :severity,
  :state,
  :subscribed,
  :task_completion_status,
  :task_status,
  :time_stat,
  :title,
  :type,
  :updated_at,
  :upvote,
  :user_notes_count,
  :web_url,
  :weight,
  keyword_init: true
)

# Request payload for ApiEntitiesIssue#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String, nil]
ApiEntitiesIssueLoadMatch = Struct.new(
  :id,
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesIssue#list.
#
# @!attribute [rw] project_id
#   @return [String, nil]
#
# @!attribute [rw] group_id
#   @return [String, nil]
ApiEntitiesIssueListMatch = Struct.new(
  :project_id,
  :group_id,
  keyword_init: true
)

# Request payload for ApiEntitiesIssue#create.
#
# @!attribute [rw] issue_id
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesIssueCreateData = Struct.new(
  :issue_id,
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesIssue#update.
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] issue_id
#   @return [String, nil]
ApiEntitiesIssueUpdateData = Struct.new(
  :id,
  :project_id,
  :issue_id,
  keyword_init: true
)

# ApiEntitiesIssueLink entity data model.
#
# @!attribute [rw] link_type
#   @return [String, nil]
#
# @!attribute [rw] source_issue
#   @return [Hash, nil]
#
# @!attribute [rw] target_issue
#   @return [Hash, nil]
ApiEntitiesIssueLink = Struct.new(
  :link_type,
  :source_issue,
  :target_issue,
  keyword_init: true
)

# Request payload for ApiEntitiesIssueLink#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] issue_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesIssueLinkLoadMatch = Struct.new(
  :id,
  :issue_id,
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesIssueLink#create.
#
# @!attribute [rw] issue_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesIssueLinkCreateData = Struct.new(
  :issue_id,
  :project_id,
  keyword_init: true
)

# ApiEntitiesLicense entity data model.
#
# @!attribute [rw] condition
#   @return [Array, nil]
#
# @!attribute [rw] content
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] html_url
#   @return [String, nil]
#
# @!attribute [rw] key
#   @return [String, nil]
#
# @!attribute [rw] limitation
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] nickname
#   @return [String, nil]
#
# @!attribute [rw] permission
#   @return [Array, nil]
#
# @!attribute [rw] popular
#   @return [Boolean, nil]
#
# @!attribute [rw] source_url
#   @return [String, nil]
ApiEntitiesLicense = Struct.new(
  :condition,
  :content,
  :description,
  :html_url,
  :key,
  :limitation,
  :name,
  :nickname,
  :permission,
  :popular,
  :source_url,
  keyword_init: true
)

# Request payload for ApiEntitiesLicense#list.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] type
#   @return [Object]
ApiEntitiesLicenseListMatch = Struct.new(
  :id,
  :name,
  :type,
  keyword_init: true
)

# ApiEntitiesMarkdown entity data model.
class ApiEntitiesMarkdown
end

# Request payload for ApiEntitiesMarkdown#create.
class ApiEntitiesMarkdownCreateData
end

# ApiEntitiesMarkdownUploadAdmin entity data model.
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] filename
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] size
#   @return [String, nil]
#
# @!attribute [rw] uploaded_by
#   @return [Hash, nil]
ApiEntitiesMarkdownUploadAdmin = Struct.new(
  :created_at,
  :filename,
  :id,
  :size,
  :uploaded_by,
  keyword_init: true
)

# Request payload for ApiEntitiesMarkdownUploadAdmin#list.
#
# @!attribute [rw] group_id
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String, nil]
ApiEntitiesMarkdownUploadAdminListMatch = Struct.new(
  :group_id,
  :project_id,
  keyword_init: true
)

# ApiEntitiesMember entity data model.
#
# @!attribute [rw] access_level
#   @return [String, nil]
#
# @!attribute [rw] avatar_path
#   @return [String, nil]
#
# @!attribute [rw] avatar_url
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] created_by
#   @return [Hash, nil]
#
# @!attribute [rw] custom_attribute
#   @return [Array, nil]
#
# @!attribute [rw] email
#   @return [String, nil]
#
# @!attribute [rw] expires_at
#   @return [String, nil]
#
# @!attribute [rw] group_saml_identity
#   @return [Hash, nil]
#
# @!attribute [rw] group_scim_identity
#   @return [Hash, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] is_using_seat
#   @return [Boolean, nil]
#
# @!attribute [rw] key
#   @return [String, nil]
#
# @!attribute [rw] locked
#   @return [Boolean, nil]
#
# @!attribute [rw] member_role
#   @return [Hash, nil]
#
# @!attribute [rw] membership_state
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] override
#   @return [String, nil]
#
# @!attribute [rw] public_email
#   @return [String, nil]
#
# @!attribute [rw] state
#   @return [String, nil]
#
# @!attribute [rw] username
#   @return [String, nil]
#
# @!attribute [rw] value
#   @return [String, nil]
#
# @!attribute [rw] web_url
#   @return [String, nil]
ApiEntitiesMember = Struct.new(
  :access_level,
  :avatar_path,
  :avatar_url,
  :created_at,
  :created_by,
  :custom_attribute,
  :email,
  :expires_at,
  :group_saml_identity,
  :group_scim_identity,
  :id,
  :is_using_seat,
  :key,
  :locked,
  :member_role,
  :membership_state,
  :name,
  :override,
  :public_email,
  :state,
  :username,
  :value,
  :web_url,
  keyword_init: true
)

# Request payload for ApiEntitiesMember#load.
#
# @!attribute [rw] group_id
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] user_id
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String, nil]
ApiEntitiesMemberLoadMatch = Struct.new(
  :group_id,
  :id,
  :user_id,
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesMember#list.
#
# @!attribute [rw] group_id
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String, nil]
ApiEntitiesMemberListMatch = Struct.new(
  :group_id,
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesMember#create.
#
# @!attribute [rw] group_id
#   @return [String, nil]
#
# @!attribute [rw] member_id
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String, nil]
ApiEntitiesMemberCreateData = Struct.new(
  :group_id,
  :member_id,
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesMember#update.
#
# @!attribute [rw] group_id
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String, nil]
ApiEntitiesMemberUpdateData = Struct.new(
  :group_id,
  :id,
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesMember#remove.
#
# @!attribute [rw] group_id
#   @return [String]
#
# @!attribute [rw] member_id
#   @return [String]
ApiEntitiesMemberRemoveMatch = Struct.new(
  :group_id,
  :member_id,
  keyword_init: true
)

# ApiEntitiesMerge entity data model.
#
# @!attribute [rw] allow_collaboration
#   @return [Boolean, nil]
#
# @!attribute [rw] allow_maintainer_to_push
#   @return [Boolean, nil]
#
# @!attribute [rw] approvals_before_merge
#   @return [String, nil]
#
# @!attribute [rw] assignee
#   @return [Hash, nil]
#
# @!attribute [rw] author
#   @return [Hash, nil]
#
# @!attribute [rw] blocking_discussions_resolved
#   @return [String, nil]
#
# @!attribute [rw] changes_count
#   @return [String, nil]
#
# @!attribute [rw] closed_at
#   @return [String, nil]
#
# @!attribute [rw] closed_by
#   @return [Hash, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] description_html
#   @return [String, nil]
#
# @!attribute [rw] detailed_merge_status
#   @return [String, nil]
#
# @!attribute [rw] diff_ref
#   @return [Hash, nil]
#
# @!attribute [rw] discussion_locked
#   @return [String, nil]
#
# @!attribute [rw] diverged_commits_count
#   @return [String, nil]
#
# @!attribute [rw] downvote
#   @return [String, nil]
#
# @!attribute [rw] draft
#   @return [String, nil]
#
# @!attribute [rw] first_contribution
#   @return [String, nil]
#
# @!attribute [rw] first_deployed_to_production_at
#   @return [String, nil]
#
# @!attribute [rw] force_remove_source_branch
#   @return [String, nil]
#
# @!attribute [rw] has_conflict
#   @return [Boolean, nil]
#
# @!attribute [rw] head_pipeline
#   @return [Hash, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] iid
#   @return [Integer, nil]
#
# @!attribute [rw] imported
#   @return [String, nil]
#
# @!attribute [rw] imported_from
#   @return [String, nil]
#
# @!attribute [rw] label
#   @return [String, nil]
#
# @!attribute [rw] latest_build_finished_at
#   @return [String, nil]
#
# @!attribute [rw] latest_build_started_at
#   @return [String, nil]
#
# @!attribute [rw] merge_after
#   @return [String, nil]
#
# @!attribute [rw] merge_commit_sha
#   @return [String, nil]
#
# @!attribute [rw] merge_error
#   @return [String, nil]
#
# @!attribute [rw] merge_status
#   @return [String, nil]
#
# @!attribute [rw] merge_user
#   @return [Hash, nil]
#
# @!attribute [rw] merge_when_pipeline_succeed
#   @return [String, nil]
#
# @!attribute [rw] merged_at
#   @return [String, nil]
#
# @!attribute [rw] merged_by
#   @return [Hash, nil]
#
# @!attribute [rw] milestone
#   @return [Hash, nil]
#
# @!attribute [rw] pipeline
#   @return [Hash, nil]
#
# @!attribute [rw] prepared_at
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [Integer, nil]
#
# @!attribute [rw] rebase_in_progress
#   @return [String, nil]
#
# @!attribute [rw] reference
#   @return [String, nil]
#
# @!attribute [rw] reviewer
#   @return [Hash, nil]
#
# @!attribute [rw] sha
#   @return [String, nil]
#
# @!attribute [rw] should_remove_source_branch
#   @return [Boolean, nil]
#
# @!attribute [rw] source_branch
#   @return [String, nil]
#
# @!attribute [rw] source_project_id
#   @return [String, nil]
#
# @!attribute [rw] squash
#   @return [String, nil]
#
# @!attribute [rw] squash_commit_sha
#   @return [String, nil]
#
# @!attribute [rw] squash_on_merge
#   @return [String, nil]
#
# @!attribute [rw] state
#   @return [String, nil]
#
# @!attribute [rw] subscribed
#   @return [String, nil]
#
# @!attribute [rw] target_branch
#   @return [String, nil]
#
# @!attribute [rw] target_project_id
#   @return [String, nil]
#
# @!attribute [rw] task_completion_status
#   @return [String, nil]
#
# @!attribute [rw] time_stat
#   @return [Hash, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] title_html
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] upvote
#   @return [String, nil]
#
# @!attribute [rw] user
#   @return [Hash, nil]
#
# @!attribute [rw] user_notes_count
#   @return [String, nil]
#
# @!attribute [rw] web_url
#   @return [String, nil]
#
# @!attribute [rw] work_in_progress
#   @return [String, nil]
ApiEntitiesMerge = Struct.new(
  :allow_collaboration,
  :allow_maintainer_to_push,
  :approvals_before_merge,
  :assignee,
  :author,
  :blocking_discussions_resolved,
  :changes_count,
  :closed_at,
  :closed_by,
  :created_at,
  :description,
  :description_html,
  :detailed_merge_status,
  :diff_ref,
  :discussion_locked,
  :diverged_commits_count,
  :downvote,
  :draft,
  :first_contribution,
  :first_deployed_to_production_at,
  :force_remove_source_branch,
  :has_conflict,
  :head_pipeline,
  :id,
  :iid,
  :imported,
  :imported_from,
  :label,
  :latest_build_finished_at,
  :latest_build_started_at,
  :merge_after,
  :merge_commit_sha,
  :merge_error,
  :merge_status,
  :merge_user,
  :merge_when_pipeline_succeed,
  :merged_at,
  :merged_by,
  :milestone,
  :pipeline,
  :prepared_at,
  :project_id,
  :rebase_in_progress,
  :reference,
  :reviewer,
  :sha,
  :should_remove_source_branch,
  :source_branch,
  :source_project_id,
  :squash,
  :squash_commit_sha,
  :squash_on_merge,
  :state,
  :subscribed,
  :target_branch,
  :target_project_id,
  :task_completion_status,
  :time_stat,
  :title,
  :title_html,
  :updated_at,
  :upvote,
  :user,
  :user_notes_count,
  :web_url,
  :work_in_progress,
  keyword_init: true
)

# Request payload for ApiEntitiesMerge#load.
#
# @!attribute [rw] merge_request_iid
#   @return [Object]
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesMergeLoadMatch = Struct.new(
  :merge_request_iid,
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesMerge#create.
#
# @!attribute [rw] merge_request_id
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesMergeCreateData = Struct.new(
  :merge_request_id,
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesMerge#update.
#
# @!attribute [rw] merge_request_id
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] merge_request_iid
#   @return [Object, nil]
ApiEntitiesMergeUpdateData = Struct.new(
  :merge_request_id,
  :project_id,
  :merge_request_iid,
  keyword_init: true
)

# ApiEntitiesMergeRequestApproval entity data model.
#
# @!attribute [rw] approved
#   @return [Boolean, nil]
#
# @!attribute [rw] approved_by
#   @return [Hash, nil]
#
# @!attribute [rw] user_can_approve
#   @return [Boolean, nil]
#
# @!attribute [rw] user_has_approved
#   @return [Boolean, nil]
ApiEntitiesMergeRequestApproval = Struct.new(
  :approved,
  :approved_by,
  :user_can_approve,
  :user_has_approved,
  keyword_init: true
)

# Request payload for ApiEntitiesMergeRequestApproval#load.
#
# @!attribute [rw] merge_request_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesMergeRequestApprovalLoadMatch = Struct.new(
  :merge_request_id,
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesMergeRequestApproval#create.
#
# @!attribute [rw] merge_request_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesMergeRequestApprovalCreateData = Struct.new(
  :merge_request_id,
  :project_id,
  keyword_init: true
)

# ApiEntitiesMergeRequestBasic entity data model.
#
# @!attribute [rw] allow_collaboration
#   @return [Boolean, nil]
#
# @!attribute [rw] allow_maintainer_to_push
#   @return [Boolean, nil]
#
# @!attribute [rw] approvals_before_merge
#   @return [String, nil]
#
# @!attribute [rw] assignee
#   @return [Hash, nil]
#
# @!attribute [rw] author
#   @return [Hash, nil]
#
# @!attribute [rw] blocking_discussions_resolved
#   @return [String, nil]
#
# @!attribute [rw] closed_at
#   @return [String, nil]
#
# @!attribute [rw] closed_by
#   @return [Hash, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] description_html
#   @return [String, nil]
#
# @!attribute [rw] detailed_merge_status
#   @return [String, nil]
#
# @!attribute [rw] discussion_locked
#   @return [String, nil]
#
# @!attribute [rw] downvote
#   @return [String, nil]
#
# @!attribute [rw] draft
#   @return [String, nil]
#
# @!attribute [rw] force_remove_source_branch
#   @return [String, nil]
#
# @!attribute [rw] has_conflict
#   @return [Boolean, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] iid
#   @return [Integer, nil]
#
# @!attribute [rw] imported
#   @return [String, nil]
#
# @!attribute [rw] imported_from
#   @return [String, nil]
#
# @!attribute [rw] label
#   @return [String, nil]
#
# @!attribute [rw] merge_after
#   @return [String, nil]
#
# @!attribute [rw] merge_commit_sha
#   @return [String, nil]
#
# @!attribute [rw] merge_status
#   @return [String, nil]
#
# @!attribute [rw] merge_user
#   @return [Hash, nil]
#
# @!attribute [rw] merge_when_pipeline_succeed
#   @return [String, nil]
#
# @!attribute [rw] merged_at
#   @return [String, nil]
#
# @!attribute [rw] merged_by
#   @return [Hash, nil]
#
# @!attribute [rw] milestone
#   @return [Hash, nil]
#
# @!attribute [rw] prepared_at
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [Integer, nil]
#
# @!attribute [rw] reference
#   @return [String, nil]
#
# @!attribute [rw] reviewer
#   @return [Hash, nil]
#
# @!attribute [rw] sha
#   @return [String, nil]
#
# @!attribute [rw] should_remove_source_branch
#   @return [Boolean, nil]
#
# @!attribute [rw] source_branch
#   @return [String, nil]
#
# @!attribute [rw] source_project_id
#   @return [String, nil]
#
# @!attribute [rw] squash
#   @return [String, nil]
#
# @!attribute [rw] squash_commit_sha
#   @return [String, nil]
#
# @!attribute [rw] squash_on_merge
#   @return [String, nil]
#
# @!attribute [rw] state
#   @return [String, nil]
#
# @!attribute [rw] target_branch
#   @return [String, nil]
#
# @!attribute [rw] target_project_id
#   @return [String, nil]
#
# @!attribute [rw] task_completion_status
#   @return [String, nil]
#
# @!attribute [rw] time_stat
#   @return [Hash, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] title_html
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] upvote
#   @return [String, nil]
#
# @!attribute [rw] user_notes_count
#   @return [String, nil]
#
# @!attribute [rw] web_url
#   @return [String, nil]
#
# @!attribute [rw] work_in_progress
#   @return [String, nil]
ApiEntitiesMergeRequestBasic = Struct.new(
  :allow_collaboration,
  :allow_maintainer_to_push,
  :approvals_before_merge,
  :assignee,
  :author,
  :blocking_discussions_resolved,
  :closed_at,
  :closed_by,
  :created_at,
  :description,
  :description_html,
  :detailed_merge_status,
  :discussion_locked,
  :downvote,
  :draft,
  :force_remove_source_branch,
  :has_conflict,
  :id,
  :iid,
  :imported,
  :imported_from,
  :label,
  :merge_after,
  :merge_commit_sha,
  :merge_status,
  :merge_user,
  :merge_when_pipeline_succeed,
  :merged_at,
  :merged_by,
  :milestone,
  :prepared_at,
  :project_id,
  :reference,
  :reviewer,
  :sha,
  :should_remove_source_branch,
  :source_branch,
  :source_project_id,
  :squash,
  :squash_commit_sha,
  :squash_on_merge,
  :state,
  :target_branch,
  :target_project_id,
  :task_completion_status,
  :time_stat,
  :title,
  :title_html,
  :updated_at,
  :upvote,
  :user_notes_count,
  :web_url,
  :work_in_progress,
  keyword_init: true
)

# Request payload for ApiEntitiesMergeRequestBasic#load.
#
# @!attribute [rw] group_id
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String, nil]
#
# @!attribute [rw] issue_id
#   @return [String, nil]
ApiEntitiesMergeRequestBasicLoadMatch = Struct.new(
  :group_id,
  :project_id,
  :issue_id,
  keyword_init: true
)

# Request payload for ApiEntitiesMergeRequestBasic#list.
#
# @!attribute [rw] deployment_id
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] sha
#   @return [Object, nil]
ApiEntitiesMergeRequestBasicListMatch = Struct.new(
  :deployment_id,
  :project_id,
  :sha,
  keyword_init: true
)

# ApiEntitiesMergeRequestChange entity data model.
#
# @!attribute [rw] allow_collaboration
#   @return [Boolean, nil]
#
# @!attribute [rw] allow_maintainer_to_push
#   @return [Boolean, nil]
#
# @!attribute [rw] approvals_before_merge
#   @return [String, nil]
#
# @!attribute [rw] assignee
#   @return [Hash, nil]
#
# @!attribute [rw] author
#   @return [Hash, nil]
#
# @!attribute [rw] blocking_discussions_resolved
#   @return [String, nil]
#
# @!attribute [rw] change
#   @return [Hash, nil]
#
# @!attribute [rw] changes_count
#   @return [String, nil]
#
# @!attribute [rw] closed_at
#   @return [String, nil]
#
# @!attribute [rw] closed_by
#   @return [Hash, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] description_html
#   @return [String, nil]
#
# @!attribute [rw] detailed_merge_status
#   @return [String, nil]
#
# @!attribute [rw] diff_ref
#   @return [Hash, nil]
#
# @!attribute [rw] discussion_locked
#   @return [String, nil]
#
# @!attribute [rw] diverged_commits_count
#   @return [String, nil]
#
# @!attribute [rw] downvote
#   @return [String, nil]
#
# @!attribute [rw] draft
#   @return [String, nil]
#
# @!attribute [rw] first_contribution
#   @return [String, nil]
#
# @!attribute [rw] first_deployed_to_production_at
#   @return [String, nil]
#
# @!attribute [rw] force_remove_source_branch
#   @return [String, nil]
#
# @!attribute [rw] has_conflict
#   @return [Boolean, nil]
#
# @!attribute [rw] head_pipeline
#   @return [Hash, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] iid
#   @return [Integer, nil]
#
# @!attribute [rw] imported
#   @return [String, nil]
#
# @!attribute [rw] imported_from
#   @return [String, nil]
#
# @!attribute [rw] label
#   @return [String, nil]
#
# @!attribute [rw] latest_build_finished_at
#   @return [String, nil]
#
# @!attribute [rw] latest_build_started_at
#   @return [String, nil]
#
# @!attribute [rw] merge_after
#   @return [String, nil]
#
# @!attribute [rw] merge_commit_sha
#   @return [String, nil]
#
# @!attribute [rw] merge_error
#   @return [String, nil]
#
# @!attribute [rw] merge_status
#   @return [String, nil]
#
# @!attribute [rw] merge_user
#   @return [Hash, nil]
#
# @!attribute [rw] merge_when_pipeline_succeed
#   @return [String, nil]
#
# @!attribute [rw] merged_at
#   @return [String, nil]
#
# @!attribute [rw] merged_by
#   @return [Hash, nil]
#
# @!attribute [rw] milestone
#   @return [Hash, nil]
#
# @!attribute [rw] overflow
#   @return [String, nil]
#
# @!attribute [rw] pipeline
#   @return [Hash, nil]
#
# @!attribute [rw] prepared_at
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [Integer, nil]
#
# @!attribute [rw] rebase_in_progress
#   @return [String, nil]
#
# @!attribute [rw] reference
#   @return [String, nil]
#
# @!attribute [rw] reviewer
#   @return [Hash, nil]
#
# @!attribute [rw] sha
#   @return [String, nil]
#
# @!attribute [rw] should_remove_source_branch
#   @return [Boolean, nil]
#
# @!attribute [rw] source_branch
#   @return [String, nil]
#
# @!attribute [rw] source_project_id
#   @return [String, nil]
#
# @!attribute [rw] squash
#   @return [String, nil]
#
# @!attribute [rw] squash_commit_sha
#   @return [String, nil]
#
# @!attribute [rw] squash_on_merge
#   @return [String, nil]
#
# @!attribute [rw] state
#   @return [String, nil]
#
# @!attribute [rw] subscribed
#   @return [String, nil]
#
# @!attribute [rw] target_branch
#   @return [String, nil]
#
# @!attribute [rw] target_project_id
#   @return [String, nil]
#
# @!attribute [rw] task_completion_status
#   @return [String, nil]
#
# @!attribute [rw] time_stat
#   @return [Hash, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] title_html
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] upvote
#   @return [String, nil]
#
# @!attribute [rw] user
#   @return [Hash, nil]
#
# @!attribute [rw] user_notes_count
#   @return [String, nil]
#
# @!attribute [rw] web_url
#   @return [String, nil]
#
# @!attribute [rw] work_in_progress
#   @return [String, nil]
ApiEntitiesMergeRequestChange = Struct.new(
  :allow_collaboration,
  :allow_maintainer_to_push,
  :approvals_before_merge,
  :assignee,
  :author,
  :blocking_discussions_resolved,
  :change,
  :changes_count,
  :closed_at,
  :closed_by,
  :created_at,
  :description,
  :description_html,
  :detailed_merge_status,
  :diff_ref,
  :discussion_locked,
  :diverged_commits_count,
  :downvote,
  :draft,
  :first_contribution,
  :first_deployed_to_production_at,
  :force_remove_source_branch,
  :has_conflict,
  :head_pipeline,
  :id,
  :iid,
  :imported,
  :imported_from,
  :label,
  :latest_build_finished_at,
  :latest_build_started_at,
  :merge_after,
  :merge_commit_sha,
  :merge_error,
  :merge_status,
  :merge_user,
  :merge_when_pipeline_succeed,
  :merged_at,
  :merged_by,
  :milestone,
  :overflow,
  :pipeline,
  :prepared_at,
  :project_id,
  :rebase_in_progress,
  :reference,
  :reviewer,
  :sha,
  :should_remove_source_branch,
  :source_branch,
  :source_project_id,
  :squash,
  :squash_commit_sha,
  :squash_on_merge,
  :state,
  :subscribed,
  :target_branch,
  :target_project_id,
  :task_completion_status,
  :time_stat,
  :title,
  :title_html,
  :updated_at,
  :upvote,
  :user,
  :user_notes_count,
  :web_url,
  :work_in_progress,
  keyword_init: true
)

# Request payload for ApiEntitiesMergeRequestChange#load.
#
# @!attribute [rw] merge_request_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesMergeRequestChangeLoadMatch = Struct.new(
  :merge_request_id,
  :project_id,
  keyword_init: true
)

# ApiEntitiesMergeRequestDiff entity data model.
#
# @!attribute [rw] base_commit_sha
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] head_commit_sha
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] merge_request_id
#   @return [String, nil]
#
# @!attribute [rw] patch_id_sha
#   @return [String, nil]
#
# @!attribute [rw] real_size
#   @return [String, nil]
#
# @!attribute [rw] start_commit_sha
#   @return [String, nil]
#
# @!attribute [rw] state
#   @return [String, nil]
ApiEntitiesMergeRequestDiff = Struct.new(
  :base_commit_sha,
  :created_at,
  :head_commit_sha,
  :id,
  :merge_request_id,
  :patch_id_sha,
  :real_size,
  :start_commit_sha,
  :state,
  keyword_init: true
)

# Request payload for ApiEntitiesMergeRequestDiff#list.
#
# @!attribute [rw] merge_request_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesMergeRequestDiffListMatch = Struct.new(
  :merge_request_id,
  :project_id,
  keyword_init: true
)

# ApiEntitiesMergeRequestDiffFull entity data model.
#
# @!attribute [rw] base_commit_sha
#   @return [String, nil]
#
# @!attribute [rw] commit
#   @return [Hash, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] diff
#   @return [Hash, nil]
#
# @!attribute [rw] head_commit_sha
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] merge_request_id
#   @return [String, nil]
#
# @!attribute [rw] patch_id_sha
#   @return [String, nil]
#
# @!attribute [rw] real_size
#   @return [String, nil]
#
# @!attribute [rw] start_commit_sha
#   @return [String, nil]
#
# @!attribute [rw] state
#   @return [String, nil]
ApiEntitiesMergeRequestDiffFull = Struct.new(
  :base_commit_sha,
  :commit,
  :created_at,
  :diff,
  :head_commit_sha,
  :id,
  :merge_request_id,
  :patch_id_sha,
  :real_size,
  :start_commit_sha,
  :state,
  keyword_init: true
)

# Request payload for ApiEntitiesMergeRequestDiffFull#load.
#
# @!attribute [rw] merge_request_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] version_id
#   @return [String]
ApiEntitiesMergeRequestDiffFullLoadMatch = Struct.new(
  :merge_request_id,
  :project_id,
  :version_id,
  keyword_init: true
)

# ApiEntitiesMergeRequestReviewer entity data model.
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] state
#   @return [String, nil]
#
# @!attribute [rw] user
#   @return [Hash, nil]
ApiEntitiesMergeRequestReviewer = Struct.new(
  :created_at,
  :state,
  :user,
  keyword_init: true
)

# Request payload for ApiEntitiesMergeRequestReviewer#load.
#
# @!attribute [rw] merge_request_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesMergeRequestReviewerLoadMatch = Struct.new(
  :merge_request_id,
  :project_id,
  keyword_init: true
)

# ApiEntitiesMetricImage entity data model.
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] file_path
#   @return [String, nil]
#
# @!attribute [rw] filename
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
#
# @!attribute [rw] url_text
#   @return [String, nil]
ApiEntitiesMetricImage = Struct.new(
  :created_at,
  :file_path,
  :filename,
  :id,
  :url,
  :url_text,
  keyword_init: true
)

# Request payload for ApiEntitiesMetricImage#list.
#
# @!attribute [rw] alert_management_alert_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesMetricImageListMatch = Struct.new(
  :alert_management_alert_id,
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesMetricImage#create.
#
# @!attribute [rw] alert_management_alert_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesMetricImageCreateData = Struct.new(
  :alert_management_alert_id,
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesMetricImage#update.
#
# @!attribute [rw] alert_management_alert_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesMetricImageUpdateData = Struct.new(
  :alert_management_alert_id,
  :id,
  :project_id,
  keyword_init: true
)

# ApiEntitiesMrNote entity data model.
#
# @!attribute [rw] author
#   @return [Hash, nil]
#
# @!attribute [rw] note
#   @return [String, nil]
ApiEntitiesMrNote = Struct.new(
  :author,
  :note,
  keyword_init: true
)

# Request payload for ApiEntitiesMrNote#load.
#
# @!attribute [rw] merge_request_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesMrNoteLoadMatch = Struct.new(
  :merge_request_id,
  :project_id,
  keyword_init: true
)

# ApiEntitiesNamespace entity data model.
#
# @!attribute [rw] additional_purchased_storage_ends_on
#   @return [String, nil]
#
# @!attribute [rw] additional_purchased_storage_size
#   @return [Integer, nil]
#
# @!attribute [rw] avatar_url
#   @return [String, nil]
#
# @!attribute [rw] billable_members_count
#   @return [Integer, nil]
#
# @!attribute [rw] end_date
#   @return [String, nil]
#
# @!attribute [rw] extra_shared_runners_minutes_limit
#   @return [Integer, nil]
#
# @!attribute [rw] full_path
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] kind
#   @return [String, nil]
#
# @!attribute [rw] max_seats_used
#   @return [Integer, nil]
#
# @!attribute [rw] max_seats_used_changed_at
#   @return [String, nil]
#
# @!attribute [rw] members_count_with_descendant
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] parent_id
#   @return [Integer, nil]
#
# @!attribute [rw] path
#   @return [String, nil]
#
# @!attribute [rw] plan
#   @return [String, nil]
#
# @!attribute [rw] projects_count
#   @return [Integer, nil]
#
# @!attribute [rw] root_repository_size
#   @return [Integer, nil]
#
# @!attribute [rw] seats_in_use
#   @return [Integer, nil]
#
# @!attribute [rw] shared_runners_minutes_limit
#   @return [Integer, nil]
#
# @!attribute [rw] trial
#   @return [Boolean, nil]
#
# @!attribute [rw] trial_ends_on
#   @return [String, nil]
#
# @!attribute [rw] web_url
#   @return [String, nil]
ApiEntitiesNamespace = Struct.new(
  :additional_purchased_storage_ends_on,
  :additional_purchased_storage_size,
  :avatar_url,
  :billable_members_count,
  :end_date,
  :extra_shared_runners_minutes_limit,
  :full_path,
  :id,
  :kind,
  :max_seats_used,
  :max_seats_used_changed_at,
  :members_count_with_descendant,
  :name,
  :parent_id,
  :path,
  :plan,
  :projects_count,
  :root_repository_size,
  :seats_in_use,
  :shared_runners_minutes_limit,
  :trial,
  :trial_ends_on,
  :web_url,
  keyword_init: true
)

# Request payload for ApiEntitiesNamespace#load.
#
# @!attribute [rw] id
#   @return [String]
ApiEntitiesNamespaceLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for ApiEntitiesNamespace#list.
#
# @!attribute [rw] additional_purchased_storage_ends_on
#   @return [String, nil]
#
# @!attribute [rw] additional_purchased_storage_size
#   @return [Integer, nil]
#
# @!attribute [rw] avatar_url
#   @return [String, nil]
#
# @!attribute [rw] billable_members_count
#   @return [Integer, nil]
#
# @!attribute [rw] end_date
#   @return [String, nil]
#
# @!attribute [rw] extra_shared_runners_minutes_limit
#   @return [Integer, nil]
#
# @!attribute [rw] full_path
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] kind
#   @return [String, nil]
#
# @!attribute [rw] max_seats_used
#   @return [Integer, nil]
#
# @!attribute [rw] max_seats_used_changed_at
#   @return [String, nil]
#
# @!attribute [rw] members_count_with_descendant
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] parent_id
#   @return [Integer, nil]
#
# @!attribute [rw] path
#   @return [String, nil]
#
# @!attribute [rw] plan
#   @return [String, nil]
#
# @!attribute [rw] projects_count
#   @return [Integer, nil]
#
# @!attribute [rw] root_repository_size
#   @return [Integer, nil]
#
# @!attribute [rw] seats_in_use
#   @return [Integer, nil]
#
# @!attribute [rw] shared_runners_minutes_limit
#   @return [Integer, nil]
#
# @!attribute [rw] trial
#   @return [Boolean, nil]
#
# @!attribute [rw] trial_ends_on
#   @return [String, nil]
#
# @!attribute [rw] web_url
#   @return [String, nil]
ApiEntitiesNamespaceListMatch = Struct.new(
  :additional_purchased_storage_ends_on,
  :additional_purchased_storage_size,
  :avatar_url,
  :billable_members_count,
  :end_date,
  :extra_shared_runners_minutes_limit,
  :full_path,
  :id,
  :kind,
  :max_seats_used,
  :max_seats_used_changed_at,
  :members_count_with_descendant,
  :name,
  :parent_id,
  :path,
  :plan,
  :projects_count,
  :root_repository_size,
  :seats_in_use,
  :shared_runners_minutes_limit,
  :trial,
  :trial_ends_on,
  :web_url,
  keyword_init: true
)

# Request payload for ApiEntitiesNamespace#update.
#
# @!attribute [rw] id
#   @return [String]
ApiEntitiesNamespaceUpdateData = Struct.new(
  :id,
  keyword_init: true
)

# ApiEntitiesNamespaceExistence entity data model.
#
# @!attribute [rw] exist
#   @return [Boolean, nil]
#
# @!attribute [rw] suggest
#   @return [Array, nil]
ApiEntitiesNamespaceExistence = Struct.new(
  :exist,
  :suggest,
  keyword_init: true
)

# Request payload for ApiEntitiesNamespaceExistence#list.
#
# @!attribute [rw] namespace_id
#   @return [String]
ApiEntitiesNamespaceExistenceListMatch = Struct.new(
  :namespace_id,
  keyword_init: true
)

# ApiEntitiesNamespacesStorageLimitExclusion entity data model.
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] namespace_id
#   @return [Integer, nil]
#
# @!attribute [rw] namespace_name
#   @return [String, nil]
#
# @!attribute [rw] reason
#   @return [String, nil]
ApiEntitiesNamespacesStorageLimitExclusion = Struct.new(
  :id,
  :namespace_id,
  :namespace_name,
  :reason,
  keyword_init: true
)

# Request payload for ApiEntitiesNamespacesStorageLimitExclusion#load.
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] namespace_id
#   @return [Integer, nil]
#
# @!attribute [rw] namespace_name
#   @return [String, nil]
#
# @!attribute [rw] reason
#   @return [String, nil]
ApiEntitiesNamespacesStorageLimitExclusionLoadMatch = Struct.new(
  :id,
  :namespace_id,
  :namespace_name,
  :reason,
  keyword_init: true
)

# Request payload for ApiEntitiesNamespacesStorageLimitExclusion#create.
#
# @!attribute [rw] namespace_id
#   @return [String]
ApiEntitiesNamespacesStorageLimitExclusionCreateData = Struct.new(
  :namespace_id,
  keyword_init: true
)

# ApiEntitiesNpmPackage entity data model.
#
# @!attribute [rw] dist_tag
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] version
#   @return [Hash, nil]
ApiEntitiesNpmPackage = Struct.new(
  :dist_tag,
  :name,
  :version,
  keyword_init: true
)

# Request payload for ApiEntitiesNpmPackage#load.
#
# @!attribute [rw] group_id
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String, nil]
ApiEntitiesNpmPackageLoadMatch = Struct.new(
  :group_id,
  :project_id,
  keyword_init: true
)

# ApiEntitiesNpmPackageTag entity data model.
#
# @!attribute [rw] dist_tag
#   @return [Hash, nil]
ApiEntitiesNpmPackageTag = Struct.new(
  :dist_tag,
  keyword_init: true
)

# Request payload for ApiEntitiesNpmPackageTag#load.
#
# @!attribute [rw] group_id
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String, nil]
ApiEntitiesNpmPackageTagLoadMatch = Struct.new(
  :group_id,
  :project_id,
  keyword_init: true
)

# ApiEntitiesNugetPackagesVersion entity data model.
#
# @!attribute [rw] version
#   @return [Array, nil]
ApiEntitiesNugetPackagesVersion = Struct.new(
  :version,
  keyword_init: true
)

# Request payload for ApiEntitiesNugetPackagesVersion#list.
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesNugetPackagesVersionListMatch = Struct.new(
  :project_id,
  keyword_init: true
)

# ApiEntitiesNugetSearchResult entity data model.
#
# @!attribute [rw] author
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] icon_url
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] license_url
#   @return [String, nil]
#
# @!attribute [rw] project_url
#   @return [String, nil]
#
# @!attribute [rw] summary
#   @return [String, nil]
#
# @!attribute [rw] tag
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] total_download
#   @return [Integer, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] verified
#   @return [Boolean, nil]
#
# @!attribute [rw] version
#   @return [String, nil]
ApiEntitiesNugetSearchResult = Struct.new(
  :author,
  :description,
  :icon_url,
  :id,
  :license_url,
  :project_url,
  :summary,
  :tag,
  :title,
  :total_download,
  :type,
  :verified,
  :version,
  keyword_init: true
)

# Request payload for ApiEntitiesNugetSearchResult#list.
#
# @!attribute [rw] group_id
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String, nil]
ApiEntitiesNugetSearchResultListMatch = Struct.new(
  :group_id,
  :project_id,
  keyword_init: true
)

# ApiEntitiesNugetServiceIndex entity data model.
#
# @!attribute [rw] resource
#   @return [Array, nil]
#
# @!attribute [rw] version
#   @return [String, nil]
ApiEntitiesNugetServiceIndex = Struct.new(
  :resource,
  :version,
  keyword_init: true
)

# Request payload for ApiEntitiesNugetServiceIndex#list.
#
# @!attribute [rw] group_id
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String, nil]
ApiEntitiesNugetServiceIndexListMatch = Struct.new(
  :group_id,
  :project_id,
  keyword_init: true
)

# ApiEntitiesOrganizationsOrganization entity data model.
class ApiEntitiesOrganizationsOrganization
end

# Request payload for ApiEntitiesOrganizationsOrganization#create.
class ApiEntitiesOrganizationsOrganizationCreateData
end

# ApiEntitiesPackage entity data model.
#
# @!attribute [rw] conan_package_name
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] last_downloaded_at
#   @return [String, nil]
#
# @!attribute [rw] link
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] package_type
#   @return [String, nil]
#
# @!attribute [rw] pipeline
#   @return [Hash, nil]
#
# @!attribute [rw] project_id
#   @return [Integer, nil]
#
# @!attribute [rw] project_path
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] tag
#   @return [String, nil]
#
# @!attribute [rw] version
#   @return [String, nil]
ApiEntitiesPackage = Struct.new(
  :conan_package_name,
  :created_at,
  :id,
  :last_downloaded_at,
  :link,
  :name,
  :package_type,
  :pipeline,
  :project_id,
  :project_path,
  :status,
  :tag,
  :version,
  keyword_init: true
)

# Request payload for ApiEntitiesPackage#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesPackageLoadMatch = Struct.new(
  :id,
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesPackage#list.
#
# @!attribute [rw] group_id
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String, nil]
ApiEntitiesPackageListMatch = Struct.new(
  :group_id,
  :project_id,
  keyword_init: true
)

# ApiEntitiesPackageFile entity data model.
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] file_md5
#   @return [String, nil]
#
# @!attribute [rw] file_name
#   @return [String, nil]
#
# @!attribute [rw] file_sha1
#   @return [String, nil]
#
# @!attribute [rw] file_sha256
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] package_id
#   @return [Integer, nil]
#
# @!attribute [rw] pipeline
#   @return [Hash, nil]
#
# @!attribute [rw] size
#   @return [Integer, nil]
ApiEntitiesPackageFile = Struct.new(
  :created_at,
  :file_md5,
  :file_name,
  :file_sha1,
  :file_sha256,
  :id,
  :package_id,
  :pipeline,
  :size,
  keyword_init: true
)

# Request payload for ApiEntitiesPackageFile#list.
#
# @!attribute [rw] package_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesPackageFileListMatch = Struct.new(
  :package_id,
  :project_id,
  keyword_init: true
)

# ApiEntitiesPackagePipeline entity data model.
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] iid
#   @return [Integer, nil]
#
# @!attribute [rw] project_id
#   @return [Integer, nil]
#
# @!attribute [rw] ref
#   @return [String, nil]
#
# @!attribute [rw] sha
#   @return [String, nil]
#
# @!attribute [rw] source
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] user
#   @return [Hash, nil]
#
# @!attribute [rw] web_url
#   @return [String, nil]
ApiEntitiesPackagePipeline = Struct.new(
  :created_at,
  :id,
  :iid,
  :project_id,
  :ref,
  :sha,
  :source,
  :status,
  :updated_at,
  :user,
  :web_url,
  keyword_init: true
)

# Request payload for ApiEntitiesPackagePipeline#load.
#
# @!attribute [rw] package_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesPackagePipelineLoadMatch = Struct.new(
  :package_id,
  :project_id,
  keyword_init: true
)

# ApiEntitiesPackagesConanFilesList entity data model.
#
# @!attribute [rw] file
#   @return [Hash, nil]
ApiEntitiesPackagesConanFilesList = Struct.new(
  :file,
  keyword_init: true
)

# Request payload for ApiEntitiesPackagesConanFilesList#load.
#
# @!attribute [rw] conan_id
#   @return [String]
#
# @!attribute [rw] package_channel
#   @return [Object]
#
# @!attribute [rw] package_id
#   @return [String, nil]
#
# @!attribute [rw] package_revision
#   @return [Object, nil]
#
# @!attribute [rw] package_username
#   @return [Object]
#
# @!attribute [rw] package_version
#   @return [Object]
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] revision_id
#   @return [String, nil]
#
# @!attribute [rw] recipe_revision
#   @return [Object, nil]
ApiEntitiesPackagesConanFilesListLoadMatch = Struct.new(
  :conan_id,
  :package_channel,
  :package_id,
  :package_revision,
  :package_username,
  :package_version,
  :project_id,
  :revision_id,
  :recipe_revision,
  keyword_init: true
)

# ApiEntitiesPackagesConanPackageManifest entity data model.
#
# @!attribute [rw] package_url
#   @return [Hash, nil]
ApiEntitiesPackagesConanPackageManifest = Struct.new(
  :package_url,
  keyword_init: true
)

# Request payload for ApiEntitiesPackagesConanPackageManifest#load.
#
# @!attribute [rw] conan_id
#   @return [String]
#
# @!attribute [rw] conan_package_reference
#   @return [Object]
#
# @!attribute [rw] package_channel
#   @return [Object]
#
# @!attribute [rw] package_username
#   @return [Object]
#
# @!attribute [rw] package_version
#   @return [Object]
#
# @!attribute [rw] project_id
#   @return [String, nil]
ApiEntitiesPackagesConanPackageManifestLoadMatch = Struct.new(
  :conan_id,
  :conan_package_reference,
  :package_channel,
  :package_username,
  :package_version,
  :project_id,
  keyword_init: true
)

# ApiEntitiesPackagesConanPackageRevision entity data model.
#
# @!attribute [rw] revision
#   @return [String, nil]
#
# @!attribute [rw] time
#   @return [String, nil]
ApiEntitiesPackagesConanPackageRevision = Struct.new(
  :revision,
  :time,
  keyword_init: true
)

# Request payload for ApiEntitiesPackagesConanPackageRevision#list.
#
# @!attribute [rw] conan_id
#   @return [String]
#
# @!attribute [rw] conan_package_reference
#   @return [Object]
#
# @!attribute [rw] package_channel
#   @return [Object]
#
# @!attribute [rw] package_username
#   @return [Object]
#
# @!attribute [rw] package_version
#   @return [Object]
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] revision_id
#   @return [String]
ApiEntitiesPackagesConanPackageRevisionListMatch = Struct.new(
  :conan_id,
  :conan_package_reference,
  :package_channel,
  :package_username,
  :package_version,
  :project_id,
  :revision_id,
  keyword_init: true
)

# ApiEntitiesPackagesConanPackageSnapshot entity data model.
#
# @!attribute [rw] package_snapshot
#   @return [Hash, nil]
ApiEntitiesPackagesConanPackageSnapshot = Struct.new(
  :package_snapshot,
  keyword_init: true
)

# Request payload for ApiEntitiesPackagesConanPackageSnapshot#load.
#
# @!attribute [rw] conan_id
#   @return [String]
#
# @!attribute [rw] conan_package_reference
#   @return [Object]
#
# @!attribute [rw] package_channel
#   @return [Object]
#
# @!attribute [rw] package_username
#   @return [Object]
#
# @!attribute [rw] package_version
#   @return [Object]
#
# @!attribute [rw] project_id
#   @return [String, nil]
ApiEntitiesPackagesConanPackageSnapshotLoadMatch = Struct.new(
  :conan_id,
  :conan_package_reference,
  :package_channel,
  :package_username,
  :package_version,
  :project_id,
  keyword_init: true
)

# ApiEntitiesPackagesConanRecipeManifest entity data model.
#
# @!attribute [rw] recipe_url
#   @return [Hash, nil]
ApiEntitiesPackagesConanRecipeManifest = Struct.new(
  :recipe_url,
  keyword_init: true
)

# Request payload for ApiEntitiesPackagesConanRecipeManifest#load.
#
# @!attribute [rw] conan_id
#   @return [String]
#
# @!attribute [rw] package_channel
#   @return [Object]
#
# @!attribute [rw] package_username
#   @return [Object]
#
# @!attribute [rw] package_version
#   @return [Object]
#
# @!attribute [rw] project_id
#   @return [String, nil]
ApiEntitiesPackagesConanRecipeManifestLoadMatch = Struct.new(
  :conan_id,
  :package_channel,
  :package_username,
  :package_version,
  :project_id,
  keyword_init: true
)

# ApiEntitiesPackagesConanRecipeRevision entity data model.
#
# @!attribute [rw] revision
#   @return [String, nil]
#
# @!attribute [rw] time
#   @return [String, nil]
ApiEntitiesPackagesConanRecipeRevision = Struct.new(
  :revision,
  :time,
  keyword_init: true
)

# Request payload for ApiEntitiesPackagesConanRecipeRevision#list.
#
# @!attribute [rw] conan_id
#   @return [String]
#
# @!attribute [rw] package_channel
#   @return [Object]
#
# @!attribute [rw] package_username
#   @return [Object]
#
# @!attribute [rw] package_version
#   @return [Object]
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesPackagesConanRecipeRevisionListMatch = Struct.new(
  :conan_id,
  :package_channel,
  :package_username,
  :package_version,
  :project_id,
  keyword_init: true
)

# ApiEntitiesPackagesConanRecipeSnapshot entity data model.
#
# @!attribute [rw] recipe_snapshot
#   @return [Hash, nil]
ApiEntitiesPackagesConanRecipeSnapshot = Struct.new(
  :recipe_snapshot,
  keyword_init: true
)

# Request payload for ApiEntitiesPackagesConanRecipeSnapshot#load.
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] package_channel
#   @return [Object]
#
# @!attribute [rw] package_name
#   @return [Object]
#
# @!attribute [rw] package_username
#   @return [Object]
#
# @!attribute [rw] package_version
#   @return [Object]
ApiEntitiesPackagesConanRecipeSnapshotLoadMatch = Struct.new(
  :id,
  :package_channel,
  :package_name,
  :package_username,
  :package_version,
  keyword_init: true
)

# ApiEntitiesPackagesConanRevision entity data model.
#
# @!attribute [rw] revision
#   @return [String, nil]
#
# @!attribute [rw] time
#   @return [String, nil]
ApiEntitiesPackagesConanRevision = Struct.new(
  :revision,
  :time,
  keyword_init: true
)

# Request payload for ApiEntitiesPackagesConanRevision#load.
#
# @!attribute [rw] conan_id
#   @return [String]
#
# @!attribute [rw] conan_package_reference
#   @return [Object, nil]
#
# @!attribute [rw] package_channel
#   @return [Object]
#
# @!attribute [rw] package_username
#   @return [Object]
#
# @!attribute [rw] package_version
#   @return [Object]
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] revision_id
#   @return [String, nil]
ApiEntitiesPackagesConanRevisionLoadMatch = Struct.new(
  :conan_id,
  :conan_package_reference,
  :package_channel,
  :package_username,
  :package_version,
  :project_id,
  :revision_id,
  keyword_init: true
)

# ApiEntitiesPackagesConanUploadUrl entity data model.
#
# @!attribute [rw] upload_url
#   @return [Hash, nil]
ApiEntitiesPackagesConanUploadUrl = Struct.new(
  :upload_url,
  keyword_init: true
)

# Request payload for ApiEntitiesPackagesConanUploadUrl#create.
#
# @!attribute [rw] conan_id
#   @return [String]
#
# @!attribute [rw] conan_package_reference
#   @return [Object, nil]
#
# @!attribute [rw] package_channel
#   @return [Object]
#
# @!attribute [rw] package_username
#   @return [Object]
#
# @!attribute [rw] package_version
#   @return [Object]
#
# @!attribute [rw] project_id
#   @return [String, nil]
ApiEntitiesPackagesConanUploadUrlCreateData = Struct.new(
  :conan_id,
  :conan_package_reference,
  :package_channel,
  :package_username,
  :package_version,
  :project_id,
  keyword_init: true
)

# ApiEntitiesPackagesDebianDistribution entity data model.
#
# @!attribute [rw] architecture
#   @return [Array, nil]
#
# @!attribute [rw] codename
#   @return [String, nil]
#
# @!attribute [rw] component
#   @return [Array, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] label
#   @return [String, nil]
#
# @!attribute [rw] origin
#   @return [String, nil]
#
# @!attribute [rw] suite
#   @return [String, nil]
#
# @!attribute [rw] valid_time_duration_second
#   @return [Integer, nil]
#
# @!attribute [rw] version
#   @return [String, nil]
ApiEntitiesPackagesDebianDistribution = Struct.new(
  :architecture,
  :codename,
  :component,
  :description,
  :id,
  :label,
  :origin,
  :suite,
  :valid_time_duration_second,
  :version,
  keyword_init: true
)

# Request payload for ApiEntitiesPackagesDebianDistribution#load.
#
# @!attribute [rw] group_id
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String, nil]
ApiEntitiesPackagesDebianDistributionLoadMatch = Struct.new(
  :group_id,
  :id,
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesPackagesDebianDistribution#list.
#
# @!attribute [rw] group_id
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String, nil]
#
# @!attribute [rw] codename
#   @return [Object, nil]
ApiEntitiesPackagesDebianDistributionListMatch = Struct.new(
  :group_id,
  :project_id,
  :codename,
  keyword_init: true
)

# Request payload for ApiEntitiesPackagesDebianDistribution#create.
#
# @!attribute [rw] group_id
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String, nil]
ApiEntitiesPackagesDebianDistributionCreateData = Struct.new(
  :group_id,
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesPackagesDebianDistribution#update.
#
# @!attribute [rw] group_id
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String, nil]
ApiEntitiesPackagesDebianDistributionUpdateData = Struct.new(
  :group_id,
  :id,
  :project_id,
  keyword_init: true
)

# ApiEntitiesPagesDomain entity data model.
#
# @!attribute [rw] auto_ssl_enabled
#   @return [String, nil]
#
# @!attribute [rw] certificate
#   @return [Hash, nil]
#
# @!attribute [rw] domain
#   @return [String, nil]
#
# @!attribute [rw] enabled_until
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
#
# @!attribute [rw] verification_code
#   @return [String, nil]
#
# @!attribute [rw] verified
#   @return [Boolean, nil]
ApiEntitiesPagesDomain = Struct.new(
  :auto_ssl_enabled,
  :certificate,
  :domain,
  :enabled_until,
  :url,
  :verification_code,
  :verified,
  keyword_init: true
)

# Request payload for ApiEntitiesPagesDomain#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesPagesDomainLoadMatch = Struct.new(
  :id,
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesPagesDomain#list.
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesPagesDomainListMatch = Struct.new(
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesPagesDomain#create.
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesPagesDomainCreateData = Struct.new(
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesPagesDomain#update.
#
# @!attribute [rw] domain_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesPagesDomainUpdateData = Struct.new(
  :domain_id,
  :project_id,
  keyword_init: true
)

# ApiEntitiesPagesDomainBasic entity data model.
#
# @!attribute [rw] auto_ssl_enabled
#   @return [String, nil]
#
# @!attribute [rw] certificate_expiration
#   @return [Hash, nil]
#
# @!attribute [rw] domain
#   @return [String, nil]
#
# @!attribute [rw] enabled_until
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
#
# @!attribute [rw] verification_code
#   @return [String, nil]
#
# @!attribute [rw] verified
#   @return [Boolean, nil]
ApiEntitiesPagesDomainBasic = Struct.new(
  :auto_ssl_enabled,
  :certificate_expiration,
  :domain,
  :enabled_until,
  :project_id,
  :url,
  :verification_code,
  :verified,
  keyword_init: true
)

# Request payload for ApiEntitiesPagesDomainBasic#load.
#
# @!attribute [rw] auto_ssl_enabled
#   @return [String, nil]
#
# @!attribute [rw] certificate_expiration
#   @return [Hash, nil]
#
# @!attribute [rw] domain
#   @return [String, nil]
#
# @!attribute [rw] enabled_until
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
#
# @!attribute [rw] verification_code
#   @return [String, nil]
#
# @!attribute [rw] verified
#   @return [Boolean, nil]
ApiEntitiesPagesDomainBasicLoadMatch = Struct.new(
  :auto_ssl_enabled,
  :certificate_expiration,
  :domain,
  :enabled_until,
  :project_id,
  :url,
  :verification_code,
  :verified,
  keyword_init: true
)

# ApiEntitiesPersonalAccessToken entity data model.
#
# @!attribute [rw] active
#   @return [Boolean, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] expires_at
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] last_used_at
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] revoked
#   @return [Boolean, nil]
#
# @!attribute [rw] scope
#   @return [Array, nil]
#
# @!attribute [rw] user_id
#   @return [Integer, nil]
ApiEntitiesPersonalAccessToken = Struct.new(
  :active,
  :created_at,
  :description,
  :expires_at,
  :id,
  :last_used_at,
  :name,
  :revoked,
  :scope,
  :user_id,
  keyword_init: true
)

# Request payload for ApiEntitiesPersonalAccessToken#list.
#
# @!attribute [rw] active
#   @return [Boolean, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] expires_at
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] last_used_at
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] revoked
#   @return [Boolean, nil]
#
# @!attribute [rw] scope
#   @return [Array, nil]
#
# @!attribute [rw] user_id
#   @return [Integer, nil]
ApiEntitiesPersonalAccessTokenListMatch = Struct.new(
  :active,
  :created_at,
  :description,
  :expires_at,
  :id,
  :last_used_at,
  :name,
  :revoked,
  :scope,
  :user_id,
  keyword_init: true
)

# ApiEntitiesPersonalAccessTokenWithLastUsedIp entity data model.
#
# @!attribute [rw] active
#   @return [Boolean, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] expires_at
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] last_used_at
#   @return [String, nil]
#
# @!attribute [rw] last_used_ip
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] revoked
#   @return [Boolean, nil]
#
# @!attribute [rw] scope
#   @return [Array, nil]
#
# @!attribute [rw] user_id
#   @return [Integer, nil]
ApiEntitiesPersonalAccessTokenWithLastUsedIp = Struct.new(
  :active,
  :created_at,
  :description,
  :expires_at,
  :id,
  :last_used_at,
  :last_used_ip,
  :name,
  :revoked,
  :scope,
  :user_id,
  keyword_init: true
)

# Request payload for ApiEntitiesPersonalAccessTokenWithLastUsedIp#load.
#
# @!attribute [rw] id
#   @return [String]
ApiEntitiesPersonalAccessTokenWithLastUsedIpLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for ApiEntitiesPersonalAccessTokenWithLastUsedIp#list.
#
# @!attribute [rw] active
#   @return [Boolean, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] expires_at
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] last_used_at
#   @return [String, nil]
#
# @!attribute [rw] last_used_ip
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] revoked
#   @return [Boolean, nil]
#
# @!attribute [rw] scope
#   @return [Array, nil]
#
# @!attribute [rw] user_id
#   @return [Integer, nil]
ApiEntitiesPersonalAccessTokenWithLastUsedIpListMatch = Struct.new(
  :active,
  :created_at,
  :description,
  :expires_at,
  :id,
  :last_used_at,
  :last_used_ip,
  :name,
  :revoked,
  :scope,
  :user_id,
  keyword_init: true
)

# ApiEntitiesPersonalAccessTokenWithToken entity data model.
#
# @!attribute [rw] active
#   @return [Boolean, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] expires_at
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] last_used_at
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] revoked
#   @return [Boolean, nil]
#
# @!attribute [rw] scope
#   @return [Array, nil]
#
# @!attribute [rw] token
#   @return [String, nil]
#
# @!attribute [rw] user_id
#   @return [Integer, nil]
ApiEntitiesPersonalAccessTokenWithToken = Struct.new(
  :active,
  :created_at,
  :description,
  :expires_at,
  :id,
  :last_used_at,
  :name,
  :revoked,
  :scope,
  :token,
  :user_id,
  keyword_init: true
)

# Request payload for ApiEntitiesPersonalAccessTokenWithToken#create.
#
# @!attribute [rw] personal_access_token_id
#   @return [String, nil]
ApiEntitiesPersonalAccessTokenWithTokenCreateData = Struct.new(
  :personal_access_token_id,
  keyword_init: true
)

# ApiEntitiesPersonalSnippet entity data model.
#
# @!attribute [rw] author
#   @return [Hash, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] file
#   @return [Array, nil]
#
# @!attribute [rw] file_name
#   @return [String, nil]
#
# @!attribute [rw] http_url_to_repo
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] imported
#   @return [Boolean, nil]
#
# @!attribute [rw] imported_from
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [Integer, nil]
#
# @!attribute [rw] raw_url
#   @return [String, nil]
#
# @!attribute [rw] repository_storage
#   @return [String, nil]
#
# @!attribute [rw] ssh_url_to_repo
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] visibility
#   @return [String, nil]
#
# @!attribute [rw] web_url
#   @return [String, nil]
ApiEntitiesPersonalSnippet = Struct.new(
  :author,
  :created_at,
  :description,
  :file,
  :file_name,
  :http_url_to_repo,
  :id,
  :imported,
  :imported_from,
  :project_id,
  :raw_url,
  :repository_storage,
  :ssh_url_to_repo,
  :title,
  :updated_at,
  :visibility,
  :web_url,
  keyword_init: true
)

# Request payload for ApiEntitiesPersonalSnippet#load.
#
# @!attribute [rw] id
#   @return [String]
ApiEntitiesPersonalSnippetLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for ApiEntitiesPersonalSnippet#list.
#
# @!attribute [rw] author
#   @return [Hash, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] file
#   @return [Array, nil]
#
# @!attribute [rw] file_name
#   @return [String, nil]
#
# @!attribute [rw] http_url_to_repo
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] imported
#   @return [Boolean, nil]
#
# @!attribute [rw] imported_from
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [Integer, nil]
#
# @!attribute [rw] raw_url
#   @return [String, nil]
#
# @!attribute [rw] repository_storage
#   @return [String, nil]
#
# @!attribute [rw] ssh_url_to_repo
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] visibility
#   @return [String, nil]
#
# @!attribute [rw] web_url
#   @return [String, nil]
ApiEntitiesPersonalSnippetListMatch = Struct.new(
  :author,
  :created_at,
  :description,
  :file,
  :file_name,
  :http_url_to_repo,
  :id,
  :imported,
  :imported_from,
  :project_id,
  :raw_url,
  :repository_storage,
  :ssh_url_to_repo,
  :title,
  :updated_at,
  :visibility,
  :web_url,
  keyword_init: true
)

# Request payload for ApiEntitiesPersonalSnippet#create.
#
# @!attribute [rw] author
#   @return [Hash, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] file
#   @return [Array, nil]
#
# @!attribute [rw] file_name
#   @return [String, nil]
#
# @!attribute [rw] http_url_to_repo
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] imported
#   @return [Boolean, nil]
#
# @!attribute [rw] imported_from
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [Integer, nil]
#
# @!attribute [rw] raw_url
#   @return [String, nil]
#
# @!attribute [rw] repository_storage
#   @return [String, nil]
#
# @!attribute [rw] ssh_url_to_repo
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] visibility
#   @return [String, nil]
#
# @!attribute [rw] web_url
#   @return [String, nil]
ApiEntitiesPersonalSnippetCreateData = Struct.new(
  :author,
  :created_at,
  :description,
  :file,
  :file_name,
  :http_url_to_repo,
  :id,
  :imported,
  :imported_from,
  :project_id,
  :raw_url,
  :repository_storage,
  :ssh_url_to_repo,
  :title,
  :updated_at,
  :visibility,
  :web_url,
  keyword_init: true
)

# Request payload for ApiEntitiesPersonalSnippet#update.
#
# @!attribute [rw] id
#   @return [String]
ApiEntitiesPersonalSnippetUpdateData = Struct.new(
  :id,
  keyword_init: true
)

# ApiEntitiesPlanLimit entity data model.
#
# @!attribute [rw] ci_active_job
#   @return [Integer, nil]
#
# @!attribute [rw] ci_instance_level_variable
#   @return [Integer, nil]
#
# @!attribute [rw] ci_needs_size_limit
#   @return [Integer, nil]
#
# @!attribute [rw] ci_pipeline_schedule
#   @return [Integer, nil]
#
# @!attribute [rw] ci_pipeline_size
#   @return [Integer, nil]
#
# @!attribute [rw] ci_project_subscription
#   @return [Integer, nil]
#
# @!attribute [rw] ci_registered_group_runner
#   @return [Integer, nil]
#
# @!attribute [rw] ci_registered_project_runner
#   @return [Integer, nil]
#
# @!attribute [rw] conan_max_file_size
#   @return [Integer, nil]
#
# @!attribute [rw] dotenv_size
#   @return [Integer, nil]
#
# @!attribute [rw] dotenv_variable
#   @return [Integer, nil]
#
# @!attribute [rw] enforcement_limit
#   @return [Integer, nil]
#
# @!attribute [rw] generic_packages_max_file_size
#   @return [Integer, nil]
#
# @!attribute [rw] helm_max_file_size
#   @return [Integer, nil]
#
# @!attribute [rw] limits_history
#   @return [Hash, nil]
#
# @!attribute [rw] maven_max_file_size
#   @return [Integer, nil]
#
# @!attribute [rw] notification_limit
#   @return [Integer, nil]
#
# @!attribute [rw] npm_max_file_size
#   @return [Integer, nil]
#
# @!attribute [rw] nuget_max_file_size
#   @return [Integer, nil]
#
# @!attribute [rw] pipeline_hierarchy_size
#   @return [Integer, nil]
#
# @!attribute [rw] pypi_max_file_size
#   @return [Integer, nil]
#
# @!attribute [rw] storage_size_limit
#   @return [Integer, nil]
#
# @!attribute [rw] terraform_module_max_file_size
#   @return [Integer, nil]
ApiEntitiesPlanLimit = Struct.new(
  :ci_active_job,
  :ci_instance_level_variable,
  :ci_needs_size_limit,
  :ci_pipeline_schedule,
  :ci_pipeline_size,
  :ci_project_subscription,
  :ci_registered_group_runner,
  :ci_registered_project_runner,
  :conan_max_file_size,
  :dotenv_size,
  :dotenv_variable,
  :enforcement_limit,
  :generic_packages_max_file_size,
  :helm_max_file_size,
  :limits_history,
  :maven_max_file_size,
  :notification_limit,
  :npm_max_file_size,
  :nuget_max_file_size,
  :pipeline_hierarchy_size,
  :pypi_max_file_size,
  :storage_size_limit,
  :terraform_module_max_file_size,
  keyword_init: true
)

# Request payload for ApiEntitiesPlanLimit#load.
#
# @!attribute [rw] ci_active_job
#   @return [Integer, nil]
#
# @!attribute [rw] ci_instance_level_variable
#   @return [Integer, nil]
#
# @!attribute [rw] ci_needs_size_limit
#   @return [Integer, nil]
#
# @!attribute [rw] ci_pipeline_schedule
#   @return [Integer, nil]
#
# @!attribute [rw] ci_pipeline_size
#   @return [Integer, nil]
#
# @!attribute [rw] ci_project_subscription
#   @return [Integer, nil]
#
# @!attribute [rw] ci_registered_group_runner
#   @return [Integer, nil]
#
# @!attribute [rw] ci_registered_project_runner
#   @return [Integer, nil]
#
# @!attribute [rw] conan_max_file_size
#   @return [Integer, nil]
#
# @!attribute [rw] dotenv_size
#   @return [Integer, nil]
#
# @!attribute [rw] dotenv_variable
#   @return [Integer, nil]
#
# @!attribute [rw] enforcement_limit
#   @return [Integer, nil]
#
# @!attribute [rw] generic_packages_max_file_size
#   @return [Integer, nil]
#
# @!attribute [rw] helm_max_file_size
#   @return [Integer, nil]
#
# @!attribute [rw] limits_history
#   @return [Hash, nil]
#
# @!attribute [rw] maven_max_file_size
#   @return [Integer, nil]
#
# @!attribute [rw] notification_limit
#   @return [Integer, nil]
#
# @!attribute [rw] npm_max_file_size
#   @return [Integer, nil]
#
# @!attribute [rw] nuget_max_file_size
#   @return [Integer, nil]
#
# @!attribute [rw] pipeline_hierarchy_size
#   @return [Integer, nil]
#
# @!attribute [rw] pypi_max_file_size
#   @return [Integer, nil]
#
# @!attribute [rw] storage_size_limit
#   @return [Integer, nil]
#
# @!attribute [rw] terraform_module_max_file_size
#   @return [Integer, nil]
ApiEntitiesPlanLimitLoadMatch = Struct.new(
  :ci_active_job,
  :ci_instance_level_variable,
  :ci_needs_size_limit,
  :ci_pipeline_schedule,
  :ci_pipeline_size,
  :ci_project_subscription,
  :ci_registered_group_runner,
  :ci_registered_project_runner,
  :conan_max_file_size,
  :dotenv_size,
  :dotenv_variable,
  :enforcement_limit,
  :generic_packages_max_file_size,
  :helm_max_file_size,
  :limits_history,
  :maven_max_file_size,
  :notification_limit,
  :npm_max_file_size,
  :nuget_max_file_size,
  :pipeline_hierarchy_size,
  :pypi_max_file_size,
  :storage_size_limit,
  :terraform_module_max_file_size,
  keyword_init: true
)

# Request payload for ApiEntitiesPlanLimit#update.
#
# @!attribute [rw] ci_active_job
#   @return [Integer, nil]
#
# @!attribute [rw] ci_instance_level_variable
#   @return [Integer, nil]
#
# @!attribute [rw] ci_needs_size_limit
#   @return [Integer, nil]
#
# @!attribute [rw] ci_pipeline_schedule
#   @return [Integer, nil]
#
# @!attribute [rw] ci_pipeline_size
#   @return [Integer, nil]
#
# @!attribute [rw] ci_project_subscription
#   @return [Integer, nil]
#
# @!attribute [rw] ci_registered_group_runner
#   @return [Integer, nil]
#
# @!attribute [rw] ci_registered_project_runner
#   @return [Integer, nil]
#
# @!attribute [rw] conan_max_file_size
#   @return [Integer, nil]
#
# @!attribute [rw] dotenv_size
#   @return [Integer, nil]
#
# @!attribute [rw] dotenv_variable
#   @return [Integer, nil]
#
# @!attribute [rw] enforcement_limit
#   @return [Integer, nil]
#
# @!attribute [rw] generic_packages_max_file_size
#   @return [Integer, nil]
#
# @!attribute [rw] helm_max_file_size
#   @return [Integer, nil]
#
# @!attribute [rw] limits_history
#   @return [Hash, nil]
#
# @!attribute [rw] maven_max_file_size
#   @return [Integer, nil]
#
# @!attribute [rw] notification_limit
#   @return [Integer, nil]
#
# @!attribute [rw] npm_max_file_size
#   @return [Integer, nil]
#
# @!attribute [rw] nuget_max_file_size
#   @return [Integer, nil]
#
# @!attribute [rw] pipeline_hierarchy_size
#   @return [Integer, nil]
#
# @!attribute [rw] pypi_max_file_size
#   @return [Integer, nil]
#
# @!attribute [rw] storage_size_limit
#   @return [Integer, nil]
#
# @!attribute [rw] terraform_module_max_file_size
#   @return [Integer, nil]
ApiEntitiesPlanLimitUpdateData = Struct.new(
  :ci_active_job,
  :ci_instance_level_variable,
  :ci_needs_size_limit,
  :ci_pipeline_schedule,
  :ci_pipeline_size,
  :ci_project_subscription,
  :ci_registered_group_runner,
  :ci_registered_project_runner,
  :conan_max_file_size,
  :dotenv_size,
  :dotenv_variable,
  :enforcement_limit,
  :generic_packages_max_file_size,
  :helm_max_file_size,
  :limits_history,
  :maven_max_file_size,
  :notification_limit,
  :npm_max_file_size,
  :nuget_max_file_size,
  :pipeline_hierarchy_size,
  :pypi_max_file_size,
  :storage_size_limit,
  :terraform_module_max_file_size,
  keyword_init: true
)

# ApiEntitiesProject entity data model.
#
# @!attribute [rw] allow_merge_on_skipped_pipeline
#   @return [Boolean, nil]
#
# @!attribute [rw] allow_pipeline_trigger_approve_deployment
#   @return [Boolean, nil]
#
# @!attribute [rw] analytics_access_level
#   @return [String, nil]
#
# @!attribute [rw] approvals_before_merge
#   @return [String, nil]
#
# @!attribute [rw] archived
#   @return [Boolean, nil]
#
# @!attribute [rw] auto_cancel_pending_pipeline
#   @return [String, nil]
#
# @!attribute [rw] auto_devops_deploy_strategy
#   @return [String, nil]
#
# @!attribute [rw] auto_devops_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] auto_duo_code_review_enabled
#   @return [String, nil]
#
# @!attribute [rw] autoclose_referenced_issue
#   @return [Boolean, nil]
#
# @!attribute [rw] avatar_url
#   @return [String, nil]
#
# @!attribute [rw] build_git_strategy
#   @return [String, nil]
#
# @!attribute [rw] build_timeout
#   @return [Integer, nil]
#
# @!attribute [rw] builds_access_level
#   @return [String, nil]
#
# @!attribute [rw] can_create_merge_request_in
#   @return [Boolean, nil]
#
# @!attribute [rw] ci_allow_fork_pipelines_to_run_in_parent_project
#   @return [Boolean, nil]
#
# @!attribute [rw] ci_config_path
#   @return [String, nil]
#
# @!attribute [rw] ci_default_git_depth
#   @return [Integer, nil]
#
# @!attribute [rw] ci_delete_pipelines_in_second
#   @return [Integer, nil]
#
# @!attribute [rw] ci_forward_deployment_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] ci_forward_deployment_rollback_allowed
#   @return [Boolean, nil]
#
# @!attribute [rw] ci_id_token_sub_claim_component
#   @return [Array, nil]
#
# @!attribute [rw] ci_job_token_scope_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] ci_pipeline_variables_minimum_override_role
#   @return [String, nil]
#
# @!attribute [rw] ci_push_repository_for_job_token_allowed
#   @return [Boolean, nil]
#
# @!attribute [rw] ci_restrict_pipeline_cancellation_role
#   @return [String, nil]
#
# @!attribute [rw] ci_separated_cache
#   @return [Boolean, nil]
#
# @!attribute [rw] compliance_framework
#   @return [String, nil]
#
# @!attribute [rw] container_expiration_policy
#   @return [Hash, nil]
#
# @!attribute [rw] container_registry_access_level
#   @return [String, nil]
#
# @!attribute [rw] container_registry_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] container_registry_image_prefix
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] creator_id
#   @return [Integer, nil]
#
# @!attribute [rw] custom_attribute
#   @return [Hash, nil]
#
# @!attribute [rw] default_branch
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] description_html
#   @return [String, nil]
#
# @!attribute [rw] duo_remote_flows_enabled
#   @return [String, nil]
#
# @!attribute [rw] emails_disabled
#   @return [Boolean, nil]
#
# @!attribute [rw] emails_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] empty_repo
#   @return [Boolean, nil]
#
# @!attribute [rw] enforce_auth_checks_on_upload
#   @return [Boolean, nil]
#
# @!attribute [rw] environments_access_level
#   @return [String, nil]
#
# @!attribute [rw] external_authorization_classification_label
#   @return [String, nil]
#
# @!attribute [rw] feature_flags_access_level
#   @return [String, nil]
#
# @!attribute [rw] forked_from_project
#   @return [Hash, nil]
#
# @!attribute [rw] forking_access_level
#   @return [String, nil]
#
# @!attribute [rw] forks_count
#   @return [Integer, nil]
#
# @!attribute [rw] group_runners_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] http_url_to_repo
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] import_error
#   @return [String, nil]
#
# @!attribute [rw] import_status
#   @return [String, nil]
#
# @!attribute [rw] import_type
#   @return [String, nil]
#
# @!attribute [rw] import_url
#   @return [String, nil]
#
# @!attribute [rw] infrastructure_access_level
#   @return [String, nil]
#
# @!attribute [rw] issue_branch_template
#   @return [String, nil]
#
# @!attribute [rw] issues_access_level
#   @return [String, nil]
#
# @!attribute [rw] issues_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] issues_template
#   @return [String, nil]
#
# @!attribute [rw] jobs_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] keep_latest_artifact
#   @return [Boolean, nil]
#
# @!attribute [rw] last_activity_at
#   @return [String, nil]
#
# @!attribute [rw] lfs_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] license
#   @return [Hash, nil]
#
# @!attribute [rw] license_url
#   @return [String, nil]
#
# @!attribute [rw] link
#   @return [Hash, nil]
#
# @!attribute [rw] marked_for_deletion_at
#   @return [String, nil]
#
# @!attribute [rw] marked_for_deletion_on
#   @return [String, nil]
#
# @!attribute [rw] max_artifacts_size
#   @return [Integer, nil]
#
# @!attribute [rw] merge_commit_template
#   @return [String, nil]
#
# @!attribute [rw] merge_method
#   @return [String, nil]
#
# @!attribute [rw] merge_pipelines_enabled
#   @return [String, nil]
#
# @!attribute [rw] merge_request_title_regex
#   @return [String, nil]
#
# @!attribute [rw] merge_request_title_regex_description
#   @return [String, nil]
#
# @!attribute [rw] merge_requests_access_level
#   @return [String, nil]
#
# @!attribute [rw] merge_requests_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] merge_requests_template
#   @return [String, nil]
#
# @!attribute [rw] merge_trains_enabled
#   @return [String, nil]
#
# @!attribute [rw] merge_trains_skip_train_allowed
#   @return [String, nil]
#
# @!attribute [rw] mirror
#   @return [String, nil]
#
# @!attribute [rw] mirror_overwrites_diverged_branch
#   @return [String, nil]
#
# @!attribute [rw] mirror_trigger_build
#   @return [String, nil]
#
# @!attribute [rw] mirror_user_id
#   @return [String, nil]
#
# @!attribute [rw] model_experiments_access_level
#   @return [String, nil]
#
# @!attribute [rw] model_registry_access_level
#   @return [String, nil]
#
# @!attribute [rw] monitor_access_level
#   @return [String, nil]
#
# @!attribute [rw] mr_default_target_self
#   @return [Boolean, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] name_with_namespace
#   @return [String, nil]
#
# @!attribute [rw] namespace
#   @return [Hash, nil]
#
# @!attribute [rw] only_allow_merge_if_all_discussions_are_resolved
#   @return [Boolean, nil]
#
# @!attribute [rw] only_allow_merge_if_all_status_checks_passed
#   @return [String, nil]
#
# @!attribute [rw] only_allow_merge_if_pipeline_succeed
#   @return [Boolean, nil]
#
# @!attribute [rw] only_mirror_protected_branch
#   @return [String, nil]
#
# @!attribute [rw] open_issues_count
#   @return [Integer, nil]
#
# @!attribute [rw] owner
#   @return [Hash, nil]
#
# @!attribute [rw] package_registry_access_level
#   @return [String, nil]
#
# @!attribute [rw] packages_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] pages_access_level
#   @return [String, nil]
#
# @!attribute [rw] path
#   @return [String, nil]
#
# @!attribute [rw] path_with_namespace
#   @return [String, nil]
#
# @!attribute [rw] pre_receive_secret_detection_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] prevent_merge_without_jira_issue
#   @return [String, nil]
#
# @!attribute [rw] printing_merge_request_link_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] public_job
#   @return [Boolean, nil]
#
# @!attribute [rw] readme_url
#   @return [String, nil]
#
# @!attribute [rw] releases_access_level
#   @return [String, nil]
#
# @!attribute [rw] remove_source_branch_after_merge
#   @return [Boolean, nil]
#
# @!attribute [rw] repository_access_level
#   @return [String, nil]
#
# @!attribute [rw] repository_object_format
#   @return [String, nil]
#
# @!attribute [rw] repository_storage
#   @return [String, nil]
#
# @!attribute [rw] request_access_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] requirements_access_level
#   @return [String, nil]
#
# @!attribute [rw] requirements_enabled
#   @return [String, nil]
#
# @!attribute [rw] resolve_outdated_diff_discussion
#   @return [Boolean, nil]
#
# @!attribute [rw] resource_group_default_process_mode
#   @return [String, nil]
#
# @!attribute [rw] restrict_user_defined_variable
#   @return [Boolean, nil]
#
# @!attribute [rw] runner_token_expiration_interval
#   @return [Integer, nil]
#
# @!attribute [rw] runners_token
#   @return [String, nil]
#
# @!attribute [rw] secret_push_protection_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] security_and_compliance_access_level
#   @return [String, nil]
#
# @!attribute [rw] security_and_compliance_enabled
#   @return [String, nil]
#
# @!attribute [rw] service_desk_address
#   @return [String, nil]
#
# @!attribute [rw] service_desk_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] shared_runners_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] shared_with_group
#   @return [Array, nil]
#
# @!attribute [rw] show_diff_preview_in_email
#   @return [Boolean, nil]
#
# @!attribute [rw] snippets_access_level
#   @return [String, nil]
#
# @!attribute [rw] snippets_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] spp_repository_pipeline_access
#   @return [Boolean, nil]
#
# @!attribute [rw] squash_commit_template
#   @return [String, nil]
#
# @!attribute [rw] squash_option
#   @return [String, nil]
#
# @!attribute [rw] ssh_url_to_repo
#   @return [String, nil]
#
# @!attribute [rw] star_count
#   @return [Integer, nil]
#
# @!attribute [rw] statistic
#   @return [Hash, nil]
#
# @!attribute [rw] suggestion_commit_message
#   @return [String, nil]
#
# @!attribute [rw] tag_list
#   @return [Array, nil]
#
# @!attribute [rw] topic
#   @return [Array, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] visibility
#   @return [String, nil]
#
# @!attribute [rw] warn_about_potentially_unwanted_character
#   @return [Boolean, nil]
#
# @!attribute [rw] web_based_commit_signing_enabled
#   @return [String, nil]
#
# @!attribute [rw] web_url
#   @return [String, nil]
#
# @!attribute [rw] wiki_access_level
#   @return [String, nil]
#
# @!attribute [rw] wiki_enabled
#   @return [Boolean, nil]
ApiEntitiesProject = Struct.new(
  :allow_merge_on_skipped_pipeline,
  :allow_pipeline_trigger_approve_deployment,
  :analytics_access_level,
  :approvals_before_merge,
  :archived,
  :auto_cancel_pending_pipeline,
  :auto_devops_deploy_strategy,
  :auto_devops_enabled,
  :auto_duo_code_review_enabled,
  :autoclose_referenced_issue,
  :avatar_url,
  :build_git_strategy,
  :build_timeout,
  :builds_access_level,
  :can_create_merge_request_in,
  :ci_allow_fork_pipelines_to_run_in_parent_project,
  :ci_config_path,
  :ci_default_git_depth,
  :ci_delete_pipelines_in_second,
  :ci_forward_deployment_enabled,
  :ci_forward_deployment_rollback_allowed,
  :ci_id_token_sub_claim_component,
  :ci_job_token_scope_enabled,
  :ci_pipeline_variables_minimum_override_role,
  :ci_push_repository_for_job_token_allowed,
  :ci_restrict_pipeline_cancellation_role,
  :ci_separated_cache,
  :compliance_framework,
  :container_expiration_policy,
  :container_registry_access_level,
  :container_registry_enabled,
  :container_registry_image_prefix,
  :created_at,
  :creator_id,
  :custom_attribute,
  :default_branch,
  :description,
  :description_html,
  :duo_remote_flows_enabled,
  :emails_disabled,
  :emails_enabled,
  :empty_repo,
  :enforce_auth_checks_on_upload,
  :environments_access_level,
  :external_authorization_classification_label,
  :feature_flags_access_level,
  :forked_from_project,
  :forking_access_level,
  :forks_count,
  :group_runners_enabled,
  :http_url_to_repo,
  :id,
  :import_error,
  :import_status,
  :import_type,
  :import_url,
  :infrastructure_access_level,
  :issue_branch_template,
  :issues_access_level,
  :issues_enabled,
  :issues_template,
  :jobs_enabled,
  :keep_latest_artifact,
  :last_activity_at,
  :lfs_enabled,
  :license,
  :license_url,
  :link,
  :marked_for_deletion_at,
  :marked_for_deletion_on,
  :max_artifacts_size,
  :merge_commit_template,
  :merge_method,
  :merge_pipelines_enabled,
  :merge_request_title_regex,
  :merge_request_title_regex_description,
  :merge_requests_access_level,
  :merge_requests_enabled,
  :merge_requests_template,
  :merge_trains_enabled,
  :merge_trains_skip_train_allowed,
  :mirror,
  :mirror_overwrites_diverged_branch,
  :mirror_trigger_build,
  :mirror_user_id,
  :model_experiments_access_level,
  :model_registry_access_level,
  :monitor_access_level,
  :mr_default_target_self,
  :name,
  :name_with_namespace,
  :namespace,
  :only_allow_merge_if_all_discussions_are_resolved,
  :only_allow_merge_if_all_status_checks_passed,
  :only_allow_merge_if_pipeline_succeed,
  :only_mirror_protected_branch,
  :open_issues_count,
  :owner,
  :package_registry_access_level,
  :packages_enabled,
  :pages_access_level,
  :path,
  :path_with_namespace,
  :pre_receive_secret_detection_enabled,
  :prevent_merge_without_jira_issue,
  :printing_merge_request_link_enabled,
  :public_job,
  :readme_url,
  :releases_access_level,
  :remove_source_branch_after_merge,
  :repository_access_level,
  :repository_object_format,
  :repository_storage,
  :request_access_enabled,
  :requirements_access_level,
  :requirements_enabled,
  :resolve_outdated_diff_discussion,
  :resource_group_default_process_mode,
  :restrict_user_defined_variable,
  :runner_token_expiration_interval,
  :runners_token,
  :secret_push_protection_enabled,
  :security_and_compliance_access_level,
  :security_and_compliance_enabled,
  :service_desk_address,
  :service_desk_enabled,
  :shared_runners_enabled,
  :shared_with_group,
  :show_diff_preview_in_email,
  :snippets_access_level,
  :snippets_enabled,
  :spp_repository_pipeline_access,
  :squash_commit_template,
  :squash_option,
  :ssh_url_to_repo,
  :star_count,
  :statistic,
  :suggestion_commit_message,
  :tag_list,
  :topic,
  :updated_at,
  :visibility,
  :warn_about_potentially_unwanted_character,
  :web_based_commit_signing_enabled,
  :web_url,
  :wiki_access_level,
  :wiki_enabled,
  keyword_init: true
)

# Request payload for ApiEntitiesProject#list.
#
# @!attribute [rw] project_id
#   @return [String, nil]
#
# @!attribute [rw] group_id
#   @return [String, nil]
ApiEntitiesProjectListMatch = Struct.new(
  :project_id,
  :group_id,
  keyword_init: true
)

# Request payload for ApiEntitiesProject#create.
#
# @!attribute [rw] forked_from_id
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String, nil]
#
# @!attribute [rw] user_id
#   @return [String, nil]
ApiEntitiesProjectCreateData = Struct.new(
  :forked_from_id,
  :project_id,
  :user_id,
  keyword_init: true
)

# Request payload for ApiEntitiesProject#update.
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String, nil]
ApiEntitiesProjectUpdateData = Struct.new(
  :id,
  :project_id,
  keyword_init: true
)

# ApiEntitiesProjectDailyStatistic entity data model.
#
# @!attribute [rw] fetch
#   @return [Hash, nil]
ApiEntitiesProjectDailyStatistic = Struct.new(
  :fetch,
  keyword_init: true
)

# Request payload for ApiEntitiesProjectDailyStatistic#load.
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesProjectDailyStatisticLoadMatch = Struct.new(
  :project_id,
  keyword_init: true
)

# ApiEntitiesProjectExportStatus entity data model.
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] export_status
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] link
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] name_with_namespace
#   @return [String, nil]
#
# @!attribute [rw] path
#   @return [String, nil]
#
# @!attribute [rw] path_with_namespace
#   @return [String, nil]
ApiEntitiesProjectExportStatus = Struct.new(
  :created_at,
  :description,
  :export_status,
  :id,
  :link,
  :name,
  :name_with_namespace,
  :path,
  :path_with_namespace,
  keyword_init: true
)

# Request payload for ApiEntitiesProjectExportStatus#load.
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesProjectExportStatusLoadMatch = Struct.new(
  :project_id,
  keyword_init: true
)

# ApiEntitiesProjectGroupLink entity data model.
class ApiEntitiesProjectGroupLink
end

# Request payload for ApiEntitiesProjectGroupLink#create.
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesProjectGroupLinkCreateData = Struct.new(
  :project_id,
  keyword_init: true
)

# ApiEntitiesProjectHook entity data model.
#
# @!attribute [rw] alert_status
#   @return [Object, nil]
#
# @!attribute [rw] branch_filter_strategy
#   @return [String, nil]
#
# @!attribute [rw] confidential_issues_event
#   @return [Boolean, nil]
#
# @!attribute [rw] confidential_note_event
#   @return [Boolean, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] custom_header
#   @return [Array, nil]
#
# @!attribute [rw] custom_webhook_template
#   @return [String, nil]
#
# @!attribute [rw] deployment_event
#   @return [Boolean, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] disabled_until
#   @return [String, nil]
#
# @!attribute [rw] emoji_event
#   @return [Boolean, nil]
#
# @!attribute [rw] enable_ssl_verification
#   @return [Boolean, nil]
#
# @!attribute [rw] feature_flag_event
#   @return [Boolean, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] issues_event
#   @return [Boolean, nil]
#
# @!attribute [rw] job_event
#   @return [Boolean, nil]
#
# @!attribute [rw] merge_requests_event
#   @return [Boolean, nil]
#
# @!attribute [rw] milestone_event
#   @return [Boolean, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] note_event
#   @return [Boolean, nil]
#
# @!attribute [rw] pipeline_event
#   @return [Boolean, nil]
#
# @!attribute [rw] project_id
#   @return [String, nil]
#
# @!attribute [rw] push_event
#   @return [Boolean, nil]
#
# @!attribute [rw] push_events_branch_filter
#   @return [String, nil]
#
# @!attribute [rw] releases_event
#   @return [Boolean, nil]
#
# @!attribute [rw] repository_update_event
#   @return [Boolean, nil]
#
# @!attribute [rw] resource_access_token_event
#   @return [Boolean, nil]
#
# @!attribute [rw] tag_push_event
#   @return [Boolean, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
#
# @!attribute [rw] url_variable
#   @return [Array, nil]
#
# @!attribute [rw] vulnerability_event
#   @return [Boolean, nil]
#
# @!attribute [rw] wiki_page_event
#   @return [Boolean, nil]
ApiEntitiesProjectHook = Struct.new(
  :alert_status,
  :branch_filter_strategy,
  :confidential_issues_event,
  :confidential_note_event,
  :created_at,
  :custom_header,
  :custom_webhook_template,
  :deployment_event,
  :description,
  :disabled_until,
  :emoji_event,
  :enable_ssl_verification,
  :feature_flag_event,
  :id,
  :issues_event,
  :job_event,
  :merge_requests_event,
  :milestone_event,
  :name,
  :note_event,
  :pipeline_event,
  :project_id,
  :push_event,
  :push_events_branch_filter,
  :releases_event,
  :repository_update_event,
  :resource_access_token_event,
  :tag_push_event,
  :url,
  :url_variable,
  :vulnerability_event,
  :wiki_page_event,
  keyword_init: true
)

# Request payload for ApiEntitiesProjectHook#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesProjectHookLoadMatch = Struct.new(
  :id,
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesProjectHook#list.
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesProjectHookListMatch = Struct.new(
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesProjectHook#create.
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesProjectHookCreateData = Struct.new(
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesProjectHook#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesProjectHookUpdateData = Struct.new(
  :id,
  :project_id,
  keyword_init: true
)

# ApiEntitiesProjectImportStatus entity data model.
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] exception_class
#   @return [String, nil]
#
# @!attribute [rw] exception_message
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] line_number
#   @return [Integer, nil]
#
# @!attribute [rw] relation_name
#   @return [String, nil]
#
# @!attribute [rw] source
#   @return [String, nil]
ApiEntitiesProjectImportStatus = Struct.new(
  :created_at,
  :exception_class,
  :exception_message,
  :id,
  :line_number,
  :relation_name,
  :source,
  keyword_init: true
)

# Request payload for ApiEntitiesProjectImportStatus#list.
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesProjectImportStatusListMatch = Struct.new(
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesProjectImportStatus#create.
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] exception_class
#   @return [String, nil]
#
# @!attribute [rw] exception_message
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] line_number
#   @return [Integer, nil]
#
# @!attribute [rw] relation_name
#   @return [String, nil]
#
# @!attribute [rw] source
#   @return [String, nil]
ApiEntitiesProjectImportStatusCreateData = Struct.new(
  :created_at,
  :exception_class,
  :exception_message,
  :id,
  :line_number,
  :relation_name,
  :source,
  keyword_init: true
)

# ApiEntitiesProjectJobTokenScope entity data model.
#
# @!attribute [rw] inbound_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] outbound_enabled
#   @return [Boolean, nil]
ApiEntitiesProjectJobTokenScope = Struct.new(
  :inbound_enabled,
  :outbound_enabled,
  keyword_init: true
)

# Request payload for ApiEntitiesProjectJobTokenScope#load.
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesProjectJobTokenScopeLoadMatch = Struct.new(
  :project_id,
  keyword_init: true
)

# ApiEntitiesProjectRepositoryStorage entity data model.
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] disk_path
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [Integer, nil]
#
# @!attribute [rw] repository_storage
#   @return [String, nil]
ApiEntitiesProjectRepositoryStorage = Struct.new(
  :created_at,
  :disk_path,
  :project_id,
  :repository_storage,
  keyword_init: true
)

# Request payload for ApiEntitiesProjectRepositoryStorage#load.
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesProjectRepositoryStorageLoadMatch = Struct.new(
  :project_id,
  keyword_init: true
)

# ApiEntitiesProjectSnippet entity data model.
#
# @!attribute [rw] author
#   @return [Hash, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] file
#   @return [Array, nil]
#
# @!attribute [rw] file_name
#   @return [String, nil]
#
# @!attribute [rw] http_url_to_repo
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] imported
#   @return [Boolean, nil]
#
# @!attribute [rw] imported_from
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [Integer, nil]
#
# @!attribute [rw] raw_url
#   @return [String, nil]
#
# @!attribute [rw] repository_storage
#   @return [String, nil]
#
# @!attribute [rw] ssh_url_to_repo
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] visibility
#   @return [String, nil]
#
# @!attribute [rw] web_url
#   @return [String, nil]
ApiEntitiesProjectSnippet = Struct.new(
  :author,
  :created_at,
  :description,
  :file,
  :file_name,
  :http_url_to_repo,
  :id,
  :imported,
  :imported_from,
  :project_id,
  :raw_url,
  :repository_storage,
  :ssh_url_to_repo,
  :title,
  :updated_at,
  :visibility,
  :web_url,
  keyword_init: true
)

# Request payload for ApiEntitiesProjectSnippet#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesProjectSnippetLoadMatch = Struct.new(
  :id,
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesProjectSnippet#list.
#
# @!attribute [rw] file_id
#   @return [String, nil]
#
# @!attribute [rw] file_path
#   @return [Object, nil]
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] snippet_id
#   @return [String, nil]
ApiEntitiesProjectSnippetListMatch = Struct.new(
  :file_id,
  :file_path,
  :project_id,
  :snippet_id,
  keyword_init: true
)

# Request payload for ApiEntitiesProjectSnippet#create.
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesProjectSnippetCreateData = Struct.new(
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesProjectSnippet#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesProjectSnippetUpdateData = Struct.new(
  :id,
  :project_id,
  keyword_init: true
)

# ApiEntitiesProjectUpload entity data model.
class ApiEntitiesProjectUpload
end

# Request payload for ApiEntitiesProjectUpload#create.
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesProjectUploadCreateData = Struct.new(
  :project_id,
  keyword_init: true
)

# ApiEntitiesProjectWithAccess entity data model.
#
# @!attribute [rw] allow_merge_on_skipped_pipeline
#   @return [Boolean, nil]
#
# @!attribute [rw] allow_pipeline_trigger_approve_deployment
#   @return [Boolean, nil]
#
# @!attribute [rw] analytics_access_level
#   @return [String, nil]
#
# @!attribute [rw] approvals_before_merge
#   @return [String, nil]
#
# @!attribute [rw] archived
#   @return [Boolean, nil]
#
# @!attribute [rw] auto_cancel_pending_pipeline
#   @return [String, nil]
#
# @!attribute [rw] auto_devops_deploy_strategy
#   @return [String, nil]
#
# @!attribute [rw] auto_devops_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] auto_duo_code_review_enabled
#   @return [String, nil]
#
# @!attribute [rw] autoclose_referenced_issue
#   @return [Boolean, nil]
#
# @!attribute [rw] avatar_url
#   @return [String, nil]
#
# @!attribute [rw] build_git_strategy
#   @return [String, nil]
#
# @!attribute [rw] build_timeout
#   @return [Integer, nil]
#
# @!attribute [rw] builds_access_level
#   @return [String, nil]
#
# @!attribute [rw] can_create_merge_request_in
#   @return [Boolean, nil]
#
# @!attribute [rw] ci_allow_fork_pipelines_to_run_in_parent_project
#   @return [Boolean, nil]
#
# @!attribute [rw] ci_config_path
#   @return [String, nil]
#
# @!attribute [rw] ci_default_git_depth
#   @return [Integer, nil]
#
# @!attribute [rw] ci_delete_pipelines_in_second
#   @return [Integer, nil]
#
# @!attribute [rw] ci_forward_deployment_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] ci_forward_deployment_rollback_allowed
#   @return [Boolean, nil]
#
# @!attribute [rw] ci_id_token_sub_claim_component
#   @return [Array, nil]
#
# @!attribute [rw] ci_job_token_scope_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] ci_pipeline_variables_minimum_override_role
#   @return [String, nil]
#
# @!attribute [rw] ci_push_repository_for_job_token_allowed
#   @return [Boolean, nil]
#
# @!attribute [rw] ci_restrict_pipeline_cancellation_role
#   @return [String, nil]
#
# @!attribute [rw] ci_separated_cache
#   @return [Boolean, nil]
#
# @!attribute [rw] compliance_framework
#   @return [String, nil]
#
# @!attribute [rw] container_expiration_policy
#   @return [Hash, nil]
#
# @!attribute [rw] container_registry_access_level
#   @return [String, nil]
#
# @!attribute [rw] container_registry_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] container_registry_image_prefix
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] creator_id
#   @return [Integer, nil]
#
# @!attribute [rw] custom_attribute
#   @return [Hash, nil]
#
# @!attribute [rw] default_branch
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] description_html
#   @return [String, nil]
#
# @!attribute [rw] duo_remote_flows_enabled
#   @return [String, nil]
#
# @!attribute [rw] emails_disabled
#   @return [Boolean, nil]
#
# @!attribute [rw] emails_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] empty_repo
#   @return [Boolean, nil]
#
# @!attribute [rw] enforce_auth_checks_on_upload
#   @return [Boolean, nil]
#
# @!attribute [rw] environments_access_level
#   @return [String, nil]
#
# @!attribute [rw] external_authorization_classification_label
#   @return [String, nil]
#
# @!attribute [rw] feature_flags_access_level
#   @return [String, nil]
#
# @!attribute [rw] forked_from_project
#   @return [Hash, nil]
#
# @!attribute [rw] forking_access_level
#   @return [String, nil]
#
# @!attribute [rw] forks_count
#   @return [Integer, nil]
#
# @!attribute [rw] group_runners_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] http_url_to_repo
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] import_error
#   @return [String, nil]
#
# @!attribute [rw] import_status
#   @return [String, nil]
#
# @!attribute [rw] import_type
#   @return [String, nil]
#
# @!attribute [rw] import_url
#   @return [String, nil]
#
# @!attribute [rw] infrastructure_access_level
#   @return [String, nil]
#
# @!attribute [rw] issue_branch_template
#   @return [String, nil]
#
# @!attribute [rw] issues_access_level
#   @return [String, nil]
#
# @!attribute [rw] issues_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] issues_template
#   @return [String, nil]
#
# @!attribute [rw] jobs_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] keep_latest_artifact
#   @return [Boolean, nil]
#
# @!attribute [rw] last_activity_at
#   @return [String, nil]
#
# @!attribute [rw] lfs_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] license
#   @return [Hash, nil]
#
# @!attribute [rw] license_url
#   @return [String, nil]
#
# @!attribute [rw] link
#   @return [Hash, nil]
#
# @!attribute [rw] marked_for_deletion_at
#   @return [String, nil]
#
# @!attribute [rw] marked_for_deletion_on
#   @return [String, nil]
#
# @!attribute [rw] max_artifacts_size
#   @return [Integer, nil]
#
# @!attribute [rw] merge_commit_template
#   @return [String, nil]
#
# @!attribute [rw] merge_method
#   @return [String, nil]
#
# @!attribute [rw] merge_pipelines_enabled
#   @return [String, nil]
#
# @!attribute [rw] merge_request_title_regex
#   @return [String, nil]
#
# @!attribute [rw] merge_request_title_regex_description
#   @return [String, nil]
#
# @!attribute [rw] merge_requests_access_level
#   @return [String, nil]
#
# @!attribute [rw] merge_requests_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] merge_requests_template
#   @return [String, nil]
#
# @!attribute [rw] merge_trains_enabled
#   @return [String, nil]
#
# @!attribute [rw] merge_trains_skip_train_allowed
#   @return [String, nil]
#
# @!attribute [rw] mirror
#   @return [String, nil]
#
# @!attribute [rw] mirror_overwrites_diverged_branch
#   @return [String, nil]
#
# @!attribute [rw] mirror_trigger_build
#   @return [String, nil]
#
# @!attribute [rw] mirror_user_id
#   @return [String, nil]
#
# @!attribute [rw] model_experiments_access_level
#   @return [String, nil]
#
# @!attribute [rw] model_registry_access_level
#   @return [String, nil]
#
# @!attribute [rw] monitor_access_level
#   @return [String, nil]
#
# @!attribute [rw] mr_default_target_self
#   @return [Boolean, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] name_with_namespace
#   @return [String, nil]
#
# @!attribute [rw] namespace
#   @return [Hash, nil]
#
# @!attribute [rw] only_allow_merge_if_all_discussions_are_resolved
#   @return [Boolean, nil]
#
# @!attribute [rw] only_allow_merge_if_all_status_checks_passed
#   @return [String, nil]
#
# @!attribute [rw] only_allow_merge_if_pipeline_succeed
#   @return [Boolean, nil]
#
# @!attribute [rw] only_mirror_protected_branch
#   @return [String, nil]
#
# @!attribute [rw] open_issues_count
#   @return [Integer, nil]
#
# @!attribute [rw] owner
#   @return [Hash, nil]
#
# @!attribute [rw] package_registry_access_level
#   @return [String, nil]
#
# @!attribute [rw] packages_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] pages_access_level
#   @return [String, nil]
#
# @!attribute [rw] path
#   @return [String, nil]
#
# @!attribute [rw] path_with_namespace
#   @return [String, nil]
#
# @!attribute [rw] permission
#   @return [Hash, nil]
#
# @!attribute [rw] pre_receive_secret_detection_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] prevent_merge_without_jira_issue
#   @return [String, nil]
#
# @!attribute [rw] printing_merge_request_link_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] public_job
#   @return [Boolean, nil]
#
# @!attribute [rw] readme_url
#   @return [String, nil]
#
# @!attribute [rw] releases_access_level
#   @return [String, nil]
#
# @!attribute [rw] remove_source_branch_after_merge
#   @return [Boolean, nil]
#
# @!attribute [rw] repository_access_level
#   @return [String, nil]
#
# @!attribute [rw] repository_object_format
#   @return [String, nil]
#
# @!attribute [rw] repository_storage
#   @return [String, nil]
#
# @!attribute [rw] request_access_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] requirements_access_level
#   @return [String, nil]
#
# @!attribute [rw] requirements_enabled
#   @return [String, nil]
#
# @!attribute [rw] resolve_outdated_diff_discussion
#   @return [Boolean, nil]
#
# @!attribute [rw] resource_group_default_process_mode
#   @return [String, nil]
#
# @!attribute [rw] restrict_user_defined_variable
#   @return [Boolean, nil]
#
# @!attribute [rw] runner_token_expiration_interval
#   @return [Integer, nil]
#
# @!attribute [rw] runners_token
#   @return [String, nil]
#
# @!attribute [rw] secret_push_protection_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] security_and_compliance_access_level
#   @return [String, nil]
#
# @!attribute [rw] security_and_compliance_enabled
#   @return [String, nil]
#
# @!attribute [rw] service_desk_address
#   @return [String, nil]
#
# @!attribute [rw] service_desk_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] shared_runners_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] shared_with_group
#   @return [Array, nil]
#
# @!attribute [rw] show_diff_preview_in_email
#   @return [Boolean, nil]
#
# @!attribute [rw] snippets_access_level
#   @return [String, nil]
#
# @!attribute [rw] snippets_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] spp_repository_pipeline_access
#   @return [Boolean, nil]
#
# @!attribute [rw] squash_commit_template
#   @return [String, nil]
#
# @!attribute [rw] squash_option
#   @return [String, nil]
#
# @!attribute [rw] ssh_url_to_repo
#   @return [String, nil]
#
# @!attribute [rw] star_count
#   @return [Integer, nil]
#
# @!attribute [rw] statistic
#   @return [Hash, nil]
#
# @!attribute [rw] suggestion_commit_message
#   @return [String, nil]
#
# @!attribute [rw] tag_list
#   @return [Array, nil]
#
# @!attribute [rw] topic
#   @return [Array, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] visibility
#   @return [String, nil]
#
# @!attribute [rw] warn_about_potentially_unwanted_character
#   @return [Boolean, nil]
#
# @!attribute [rw] web_based_commit_signing_enabled
#   @return [String, nil]
#
# @!attribute [rw] web_url
#   @return [String, nil]
#
# @!attribute [rw] wiki_access_level
#   @return [String, nil]
#
# @!attribute [rw] wiki_enabled
#   @return [Boolean, nil]
ApiEntitiesProjectWithAccess = Struct.new(
  :allow_merge_on_skipped_pipeline,
  :allow_pipeline_trigger_approve_deployment,
  :analytics_access_level,
  :approvals_before_merge,
  :archived,
  :auto_cancel_pending_pipeline,
  :auto_devops_deploy_strategy,
  :auto_devops_enabled,
  :auto_duo_code_review_enabled,
  :autoclose_referenced_issue,
  :avatar_url,
  :build_git_strategy,
  :build_timeout,
  :builds_access_level,
  :can_create_merge_request_in,
  :ci_allow_fork_pipelines_to_run_in_parent_project,
  :ci_config_path,
  :ci_default_git_depth,
  :ci_delete_pipelines_in_second,
  :ci_forward_deployment_enabled,
  :ci_forward_deployment_rollback_allowed,
  :ci_id_token_sub_claim_component,
  :ci_job_token_scope_enabled,
  :ci_pipeline_variables_minimum_override_role,
  :ci_push_repository_for_job_token_allowed,
  :ci_restrict_pipeline_cancellation_role,
  :ci_separated_cache,
  :compliance_framework,
  :container_expiration_policy,
  :container_registry_access_level,
  :container_registry_enabled,
  :container_registry_image_prefix,
  :created_at,
  :creator_id,
  :custom_attribute,
  :default_branch,
  :description,
  :description_html,
  :duo_remote_flows_enabled,
  :emails_disabled,
  :emails_enabled,
  :empty_repo,
  :enforce_auth_checks_on_upload,
  :environments_access_level,
  :external_authorization_classification_label,
  :feature_flags_access_level,
  :forked_from_project,
  :forking_access_level,
  :forks_count,
  :group_runners_enabled,
  :http_url_to_repo,
  :id,
  :import_error,
  :import_status,
  :import_type,
  :import_url,
  :infrastructure_access_level,
  :issue_branch_template,
  :issues_access_level,
  :issues_enabled,
  :issues_template,
  :jobs_enabled,
  :keep_latest_artifact,
  :last_activity_at,
  :lfs_enabled,
  :license,
  :license_url,
  :link,
  :marked_for_deletion_at,
  :marked_for_deletion_on,
  :max_artifacts_size,
  :merge_commit_template,
  :merge_method,
  :merge_pipelines_enabled,
  :merge_request_title_regex,
  :merge_request_title_regex_description,
  :merge_requests_access_level,
  :merge_requests_enabled,
  :merge_requests_template,
  :merge_trains_enabled,
  :merge_trains_skip_train_allowed,
  :mirror,
  :mirror_overwrites_diverged_branch,
  :mirror_trigger_build,
  :mirror_user_id,
  :model_experiments_access_level,
  :model_registry_access_level,
  :monitor_access_level,
  :mr_default_target_self,
  :name,
  :name_with_namespace,
  :namespace,
  :only_allow_merge_if_all_discussions_are_resolved,
  :only_allow_merge_if_all_status_checks_passed,
  :only_allow_merge_if_pipeline_succeed,
  :only_mirror_protected_branch,
  :open_issues_count,
  :owner,
  :package_registry_access_level,
  :packages_enabled,
  :pages_access_level,
  :path,
  :path_with_namespace,
  :permission,
  :pre_receive_secret_detection_enabled,
  :prevent_merge_without_jira_issue,
  :printing_merge_request_link_enabled,
  :public_job,
  :readme_url,
  :releases_access_level,
  :remove_source_branch_after_merge,
  :repository_access_level,
  :repository_object_format,
  :repository_storage,
  :request_access_enabled,
  :requirements_access_level,
  :requirements_enabled,
  :resolve_outdated_diff_discussion,
  :resource_group_default_process_mode,
  :restrict_user_defined_variable,
  :runner_token_expiration_interval,
  :runners_token,
  :secret_push_protection_enabled,
  :security_and_compliance_access_level,
  :security_and_compliance_enabled,
  :service_desk_address,
  :service_desk_enabled,
  :shared_runners_enabled,
  :shared_with_group,
  :show_diff_preview_in_email,
  :snippets_access_level,
  :snippets_enabled,
  :spp_repository_pipeline_access,
  :squash_commit_template,
  :squash_option,
  :ssh_url_to_repo,
  :star_count,
  :statistic,
  :suggestion_commit_message,
  :tag_list,
  :topic,
  :updated_at,
  :visibility,
  :warn_about_potentially_unwanted_character,
  :web_based_commit_signing_enabled,
  :web_url,
  :wiki_access_level,
  :wiki_enabled,
  keyword_init: true
)

# Request payload for ApiEntitiesProjectWithAccess#load.
#
# @!attribute [rw] id
#   @return [String]
ApiEntitiesProjectWithAccessLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# ApiEntitiesProjectsContainerRegistryProtectionRule entity data model.
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] minimum_access_level_for_delete
#   @return [String, nil]
#
# @!attribute [rw] minimum_access_level_for_push
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [Integer, nil]
#
# @!attribute [rw] repository_path_pattern
#   @return [String, nil]
ApiEntitiesProjectsContainerRegistryProtectionRule = Struct.new(
  :id,
  :minimum_access_level_for_delete,
  :minimum_access_level_for_push,
  :project_id,
  :repository_path_pattern,
  keyword_init: true
)

# Request payload for ApiEntitiesProjectsContainerRegistryProtectionRule#list.
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesProjectsContainerRegistryProtectionRuleListMatch = Struct.new(
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesProjectsContainerRegistryProtectionRule#create.
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesProjectsContainerRegistryProtectionRuleCreateData = Struct.new(
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesProjectsContainerRegistryProtectionRule#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesProjectsContainerRegistryProtectionRuleUpdateData = Struct.new(
  :id,
  :project_id,
  keyword_init: true
)

# ApiEntitiesProjectsPackagesProtectionRule entity data model.
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] minimum_access_level_for_delete
#   @return [String, nil]
#
# @!attribute [rw] minimum_access_level_for_push
#   @return [String, nil]
#
# @!attribute [rw] package_name_pattern
#   @return [String, nil]
#
# @!attribute [rw] package_type
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [Integer, nil]
ApiEntitiesProjectsPackagesProtectionRule = Struct.new(
  :id,
  :minimum_access_level_for_delete,
  :minimum_access_level_for_push,
  :package_name_pattern,
  :package_type,
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesProjectsPackagesProtectionRule#list.
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesProjectsPackagesProtectionRuleListMatch = Struct.new(
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesProjectsPackagesProtectionRule#create.
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesProjectsPackagesProtectionRuleCreateData = Struct.new(
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesProjectsPackagesProtectionRule#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesProjectsPackagesProtectionRuleUpdateData = Struct.new(
  :id,
  :project_id,
  keyword_init: true
)

# ApiEntitiesProjectsTopic entity data model.
#
# @!attribute [rw] avatar_url
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] organization_id
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] total_projects_count
#   @return [String, nil]
ApiEntitiesProjectsTopic = Struct.new(
  :avatar_url,
  :description,
  :id,
  :name,
  :organization_id,
  :title,
  :total_projects_count,
  keyword_init: true
)

# Request payload for ApiEntitiesProjectsTopic#load.
#
# @!attribute [rw] id
#   @return [String, nil]
ApiEntitiesProjectsTopicLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for ApiEntitiesProjectsTopic#create.
#
# @!attribute [rw] avatar_url
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] organization_id
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] total_projects_count
#   @return [String, nil]
ApiEntitiesProjectsTopicCreateData = Struct.new(
  :avatar_url,
  :description,
  :id,
  :name,
  :organization_id,
  :title,
  :total_projects_count,
  keyword_init: true
)

# Request payload for ApiEntitiesProjectsTopic#update.
#
# @!attribute [rw] id
#   @return [String]
ApiEntitiesProjectsTopicUpdateData = Struct.new(
  :id,
  keyword_init: true
)

# ApiEntitiesProtectedBranch entity data model.
#
# @!attribute [rw] allow_force_push
#   @return [Boolean, nil]
#
# @!attribute [rw] code_owner_approval_required
#   @return [Boolean, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] inherited
#   @return [Boolean, nil]
#
# @!attribute [rw] merge_access_level
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] push_access_level
#   @return [Array, nil]
#
# @!attribute [rw] unprotect_access_level
#   @return [Array, nil]
ApiEntitiesProtectedBranch = Struct.new(
  :allow_force_push,
  :code_owner_approval_required,
  :id,
  :inherited,
  :merge_access_level,
  :name,
  :push_access_level,
  :unprotect_access_level,
  keyword_init: true
)

# Request payload for ApiEntitiesProtectedBranch#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesProtectedBranchLoadMatch = Struct.new(
  :id,
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesProtectedBranch#list.
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesProtectedBranchListMatch = Struct.new(
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesProtectedBranch#create.
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesProtectedBranchCreateData = Struct.new(
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesProtectedBranch#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesProtectedBranchUpdateData = Struct.new(
  :id,
  :project_id,
  keyword_init: true
)

# ApiEntitiesProtectedTag entity data model.
#
# @!attribute [rw] create_access_level
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
ApiEntitiesProtectedTag = Struct.new(
  :create_access_level,
  :name,
  keyword_init: true
)

# Request payload for ApiEntitiesProtectedTag#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesProtectedTagLoadMatch = Struct.new(
  :id,
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesProtectedTag#list.
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesProtectedTagListMatch = Struct.new(
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesProtectedTag#create.
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesProtectedTagCreateData = Struct.new(
  :project_id,
  keyword_init: true
)

# ApiEntitiesPublicGroupDetail entity data model.
#
# @!attribute [rw] avatar_url
#   @return [String, nil]
#
# @!attribute [rw] full_name
#   @return [String, nil]
#
# @!attribute [rw] full_path
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] web_url
#   @return [String, nil]
ApiEntitiesPublicGroupDetail = Struct.new(
  :avatar_url,
  :full_name,
  :full_path,
  :id,
  :name,
  :web_url,
  keyword_init: true
)

# Request payload for ApiEntitiesPublicGroupDetail#list.
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesPublicGroupDetailListMatch = Struct.new(
  :project_id,
  keyword_init: true
)

# ApiEntitiesRelatedIssue entity data model.
#
# @!attribute [rw] assignee
#   @return [Hash, nil]
#
# @!attribute [rw] author
#   @return [Hash, nil]
#
# @!attribute [rw] blocking_issues_count
#   @return [String, nil]
#
# @!attribute [rw] closed_at
#   @return [String, nil]
#
# @!attribute [rw] closed_by
#   @return [Hash, nil]
#
# @!attribute [rw] confidential
#   @return [Boolean, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] discussion_locked
#   @return [Boolean, nil]
#
# @!attribute [rw] downvote
#   @return [String, nil]
#
# @!attribute [rw] due_date
#   @return [String, nil]
#
# @!attribute [rw] epic
#   @return [Hash, nil]
#
# @!attribute [rw] epic_iid
#   @return [String, nil]
#
# @!attribute [rw] has_task
#   @return [Boolean, nil]
#
# @!attribute [rw] health_status
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] iid
#   @return [Integer, nil]
#
# @!attribute [rw] imported
#   @return [String, nil]
#
# @!attribute [rw] imported_from
#   @return [String, nil]
#
# @!attribute [rw] issue_link_id
#   @return [String, nil]
#
# @!attribute [rw] issue_type
#   @return [String, nil]
#
# @!attribute [rw] iteration
#   @return [Hash, nil]
#
# @!attribute [rw] label
#   @return [Array, nil]
#
# @!attribute [rw] link
#   @return [Hash, nil]
#
# @!attribute [rw] link_created_at
#   @return [String, nil]
#
# @!attribute [rw] link_type
#   @return [String, nil]
#
# @!attribute [rw] link_updated_at
#   @return [String, nil]
#
# @!attribute [rw] merge_requests_count
#   @return [String, nil]
#
# @!attribute [rw] milestone
#   @return [Hash, nil]
#
# @!attribute [rw] moved_to_id
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [Integer, nil]
#
# @!attribute [rw] reference
#   @return [Hash, nil]
#
# @!attribute [rw] service_desk_reply_to
#   @return [String, nil]
#
# @!attribute [rw] severity
#   @return [String, nil]
#
# @!attribute [rw] state
#   @return [String, nil]
#
# @!attribute [rw] subscribed
#   @return [String, nil]
#
# @!attribute [rw] task_completion_status
#   @return [String, nil]
#
# @!attribute [rw] task_status
#   @return [String, nil]
#
# @!attribute [rw] time_stat
#   @return [Hash, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] upvote
#   @return [String, nil]
#
# @!attribute [rw] user_notes_count
#   @return [String, nil]
#
# @!attribute [rw] web_url
#   @return [String, nil]
#
# @!attribute [rw] weight
#   @return [String, nil]
ApiEntitiesRelatedIssue = Struct.new(
  :assignee,
  :author,
  :blocking_issues_count,
  :closed_at,
  :closed_by,
  :confidential,
  :created_at,
  :description,
  :discussion_locked,
  :downvote,
  :due_date,
  :epic,
  :epic_iid,
  :has_task,
  :health_status,
  :id,
  :iid,
  :imported,
  :imported_from,
  :issue_link_id,
  :issue_type,
  :iteration,
  :label,
  :link,
  :link_created_at,
  :link_type,
  :link_updated_at,
  :merge_requests_count,
  :milestone,
  :moved_to_id,
  :project_id,
  :reference,
  :service_desk_reply_to,
  :severity,
  :state,
  :subscribed,
  :task_completion_status,
  :task_status,
  :time_stat,
  :title,
  :type,
  :updated_at,
  :upvote,
  :user_notes_count,
  :web_url,
  :weight,
  keyword_init: true
)

# Request payload for ApiEntitiesRelatedIssue#list.
#
# @!attribute [rw] issue_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesRelatedIssueListMatch = Struct.new(
  :issue_id,
  :project_id,
  keyword_init: true
)

# ApiEntitiesRelationImportTracker entity data model.
class ApiEntitiesRelationImportTracker
end

# Request payload for ApiEntitiesRelationImportTracker#create.
class ApiEntitiesRelationImportTrackerCreateData
end

# ApiEntitiesRelease entity data model.
#
# @!attribute [rw] asset
#   @return [Hash, nil]
#
# @!attribute [rw] author
#   @return [Hash, nil]
#
# @!attribute [rw] commit
#   @return [Hash, nil]
#
# @!attribute [rw] commit_path
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] description_html
#   @return [String, nil]
#
# @!attribute [rw] evidence
#   @return [Hash, nil]
#
# @!attribute [rw] link
#   @return [Hash, nil]
#
# @!attribute [rw] milestone
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] released_at
#   @return [String, nil]
#
# @!attribute [rw] tag_name
#   @return [String, nil]
#
# @!attribute [rw] tag_path
#   @return [String, nil]
#
# @!attribute [rw] upcoming_release
#   @return [Boolean, nil]
ApiEntitiesRelease = Struct.new(
  :asset,
  :author,
  :commit,
  :commit_path,
  :created_at,
  :description,
  :description_html,
  :evidence,
  :link,
  :milestone,
  :name,
  :released_at,
  :tag_name,
  :tag_path,
  :upcoming_release,
  keyword_init: true
)

# Request payload for ApiEntitiesRelease#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesReleaseLoadMatch = Struct.new(
  :id,
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesRelease#list.
#
# @!attribute [rw] project_id
#   @return [String, nil]
#
# @!attribute [rw] group_id
#   @return [String, nil]
ApiEntitiesReleaseListMatch = Struct.new(
  :project_id,
  :group_id,
  keyword_init: true
)

# Request payload for ApiEntitiesRelease#create.
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] tag_name
#   @return [Object, nil]
ApiEntitiesReleaseCreateData = Struct.new(
  :project_id,
  :tag_name,
  keyword_init: true
)

# Request payload for ApiEntitiesRelease#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesReleaseUpdateData = Struct.new(
  :id,
  :project_id,
  keyword_init: true
)

# ApiEntitiesReleasesLink entity data model.
#
# @!attribute [rw] direct_asset_url
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] link_type
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
ApiEntitiesReleasesLink = Struct.new(
  :direct_asset_url,
  :id,
  :link_type,
  :name,
  :url,
  keyword_init: true
)

# Request payload for ApiEntitiesReleasesLink#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] release_id
#   @return [String]
ApiEntitiesReleasesLinkLoadMatch = Struct.new(
  :id,
  :project_id,
  :release_id,
  keyword_init: true
)

# Request payload for ApiEntitiesReleasesLink#list.
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] release_id
#   @return [String]
ApiEntitiesReleasesLinkListMatch = Struct.new(
  :project_id,
  :release_id,
  keyword_init: true
)

# Request payload for ApiEntitiesReleasesLink#create.
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] release_id
#   @return [String]
ApiEntitiesReleasesLinkCreateData = Struct.new(
  :project_id,
  :release_id,
  keyword_init: true
)

# Request payload for ApiEntitiesReleasesLink#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] release_id
#   @return [String]
ApiEntitiesReleasesLinkUpdateData = Struct.new(
  :id,
  :project_id,
  :release_id,
  keyword_init: true
)

# ApiEntitiesRemoteMirror entity data model.
#
# @!attribute [rw] auth_method
#   @return [String, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] host_key
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] keep_divergent_ref
#   @return [Boolean, nil]
#
# @!attribute [rw] last_error
#   @return [Integer, nil]
#
# @!attribute [rw] last_successful_update_at
#   @return [String, nil]
#
# @!attribute [rw] last_update_at
#   @return [String, nil]
#
# @!attribute [rw] last_update_started_at
#   @return [String, nil]
#
# @!attribute [rw] mirror_branch_regex
#   @return [String, nil]
#
# @!attribute [rw] only_protected_branch
#   @return [Boolean, nil]
#
# @!attribute [rw] update_status
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
ApiEntitiesRemoteMirror = Struct.new(
  :auth_method,
  :enabled,
  :host_key,
  :id,
  :keep_divergent_ref,
  :last_error,
  :last_successful_update_at,
  :last_update_at,
  :last_update_started_at,
  :mirror_branch_regex,
  :only_protected_branch,
  :update_status,
  :url,
  keyword_init: true
)

# Request payload for ApiEntitiesRemoteMirror#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesRemoteMirrorLoadMatch = Struct.new(
  :id,
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesRemoteMirror#list.
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesRemoteMirrorListMatch = Struct.new(
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesRemoteMirror#create.
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesRemoteMirrorCreateData = Struct.new(
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesRemoteMirror#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesRemoteMirrorUpdateData = Struct.new(
  :id,
  :project_id,
  keyword_init: true
)

# ApiEntitiesRepositoryHealth entity data model.
#
# @!attribute [rw] alternate
#   @return [Hash, nil]
#
# @!attribute [rw] bitmap
#   @return [Hash, nil]
#
# @!attribute [rw] commit_graph
#   @return [Hash, nil]
#
# @!attribute [rw] is_object_pool
#   @return [Boolean, nil]
#
# @!attribute [rw] last_full_repack
#   @return [Hash, nil]
#
# @!attribute [rw] multi_pack_index
#   @return [Hash, nil]
#
# @!attribute [rw] multi_pack_index_bitmap
#   @return [Hash, nil]
#
# @!attribute [rw] object
#   @return [Hash, nil]
#
# @!attribute [rw] reference
#   @return [Hash, nil]
#
# @!attribute [rw] size
#   @return [Integer, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
ApiEntitiesRepositoryHealth = Struct.new(
  :alternate,
  :bitmap,
  :commit_graph,
  :is_object_pool,
  :last_full_repack,
  :multi_pack_index,
  :multi_pack_index_bitmap,
  :object,
  :reference,
  :size,
  :updated_at,
  keyword_init: true
)

# Request payload for ApiEntitiesRepositoryHealth#load.
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesRepositoryHealthLoadMatch = Struct.new(
  :project_id,
  keyword_init: true
)

# ApiEntitiesResourceAccessTokenWithToken entity data model.
#
# @!attribute [rw] access_level
#   @return [Integer, nil]
#
# @!attribute [rw] active
#   @return [Boolean, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] expires_at
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] last_used_at
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] resource_id
#   @return [Integer, nil]
#
# @!attribute [rw] resource_type
#   @return [String, nil]
#
# @!attribute [rw] revoked
#   @return [Boolean, nil]
#
# @!attribute [rw] scope
#   @return [Array, nil]
#
# @!attribute [rw] token
#   @return [String, nil]
#
# @!attribute [rw] user_id
#   @return [Integer, nil]
ApiEntitiesResourceAccessTokenWithToken = Struct.new(
  :access_level,
  :active,
  :created_at,
  :description,
  :expires_at,
  :id,
  :last_used_at,
  :name,
  :resource_id,
  :resource_type,
  :revoked,
  :scope,
  :token,
  :user_id,
  keyword_init: true
)

# Request payload for ApiEntitiesResourceAccessTokenWithToken#create.
#
# @!attribute [rw] group_id
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String, nil]
ApiEntitiesResourceAccessTokenWithTokenCreateData = Struct.new(
  :group_id,
  :project_id,
  keyword_init: true
)

# ApiEntitiesResourceMilestoneEvent entity data model.
#
# @!attribute [rw] action
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] milestone
#   @return [Hash, nil]
#
# @!attribute [rw] resource_id
#   @return [Integer, nil]
#
# @!attribute [rw] resource_type
#   @return [String, nil]
#
# @!attribute [rw] state
#   @return [String, nil]
#
# @!attribute [rw] user
#   @return [Hash, nil]
ApiEntitiesResourceMilestoneEvent = Struct.new(
  :action,
  :created_at,
  :id,
  :milestone,
  :resource_id,
  :resource_type,
  :state,
  :user,
  keyword_init: true
)

# Request payload for ApiEntitiesResourceMilestoneEvent#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] issue_id
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] merge_request_id
#   @return [String, nil]
ApiEntitiesResourceMilestoneEventLoadMatch = Struct.new(
  :id,
  :issue_id,
  :project_id,
  :merge_request_id,
  keyword_init: true
)

# Request payload for ApiEntitiesResourceMilestoneEvent#list.
#
# @!attribute [rw] issue_id
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] merge_request_id
#   @return [String, nil]
ApiEntitiesResourceMilestoneEventListMatch = Struct.new(
  :issue_id,
  :project_id,
  :merge_request_id,
  keyword_init: true
)

# ApiEntitiesSnippet entity data model.
#
# @!attribute [rw] author
#   @return [Hash, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] file
#   @return [Array, nil]
#
# @!attribute [rw] file_name
#   @return [String, nil]
#
# @!attribute [rw] http_url_to_repo
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] imported
#   @return [Boolean, nil]
#
# @!attribute [rw] imported_from
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [Integer, nil]
#
# @!attribute [rw] raw_url
#   @return [String, nil]
#
# @!attribute [rw] repository_storage
#   @return [String, nil]
#
# @!attribute [rw] ssh_url_to_repo
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] visibility
#   @return [String, nil]
#
# @!attribute [rw] web_url
#   @return [String, nil]
ApiEntitiesSnippet = Struct.new(
  :author,
  :created_at,
  :description,
  :file,
  :file_name,
  :http_url_to_repo,
  :id,
  :imported,
  :imported_from,
  :project_id,
  :raw_url,
  :repository_storage,
  :ssh_url_to_repo,
  :title,
  :updated_at,
  :visibility,
  :web_url,
  keyword_init: true
)

# Request payload for ApiEntitiesSnippet#list.
#
# @!attribute [rw] author
#   @return [Hash, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] file
#   @return [Array, nil]
#
# @!attribute [rw] file_name
#   @return [String, nil]
#
# @!attribute [rw] http_url_to_repo
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] imported
#   @return [Boolean, nil]
#
# @!attribute [rw] imported_from
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [Integer, nil]
#
# @!attribute [rw] raw_url
#   @return [String, nil]
#
# @!attribute [rw] repository_storage
#   @return [String, nil]
#
# @!attribute [rw] ssh_url_to_repo
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] visibility
#   @return [String, nil]
#
# @!attribute [rw] web_url
#   @return [String, nil]
ApiEntitiesSnippetListMatch = Struct.new(
  :author,
  :created_at,
  :description,
  :file,
  :file_name,
  :http_url_to_repo,
  :id,
  :imported,
  :imported_from,
  :project_id,
  :raw_url,
  :repository_storage,
  :ssh_url_to_repo,
  :title,
  :updated_at,
  :visibility,
  :web_url,
  keyword_init: true
)

# ApiEntitiesSshKeyWithUser entity data model.
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] expires_at
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] key
#   @return [String, nil]
#
# @!attribute [rw] last_used_at
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] usage_type
#   @return [String, nil]
#
# @!attribute [rw] user
#   @return [Hash, nil]
ApiEntitiesSshKeyWithUser = Struct.new(
  :created_at,
  :expires_at,
  :id,
  :key,
  :last_used_at,
  :title,
  :usage_type,
  :user,
  keyword_init: true
)

# Request payload for ApiEntitiesSshKeyWithUser#load.
#
# @!attribute [rw] id
#   @return [String]
ApiEntitiesSshKeyWithUserLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# ApiEntitiesSuggestion entity data model.
#
# @!attribute [rw] appliable
#   @return [String, nil]
#
# @!attribute [rw] applied
#   @return [String, nil]
#
# @!attribute [rw] from_content
#   @return [String, nil]
#
# @!attribute [rw] from_line
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] to_content
#   @return [String, nil]
#
# @!attribute [rw] to_line
#   @return [String, nil]
ApiEntitiesSuggestion = Struct.new(
  :appliable,
  :applied,
  :from_content,
  :from_line,
  :id,
  :to_content,
  :to_line,
  keyword_init: true
)

# Request payload for ApiEntitiesSuggestion#update.
#
# @!attribute [rw] suggestion_id
#   @return [String, nil]
ApiEntitiesSuggestionUpdateData = Struct.new(
  :suggestion_id,
  keyword_init: true
)

# ApiEntitiesSystemBroadcastMessage entity data model.
#
# @!attribute [rw] active
#   @return [Boolean, nil]
#
# @!attribute [rw] broadcast_type
#   @return [String, nil]
#
# @!attribute [rw] color
#   @return [String, nil]
#
# @!attribute [rw] dismissable
#   @return [String, nil]
#
# @!attribute [rw] ends_at
#   @return [String, nil]
#
# @!attribute [rw] font
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] message
#   @return [String, nil]
#
# @!attribute [rw] starts_at
#   @return [String, nil]
#
# @!attribute [rw] target_access_level
#   @return [String, nil]
#
# @!attribute [rw] target_path
#   @return [String, nil]
#
# @!attribute [rw] theme
#   @return [String, nil]
ApiEntitiesSystemBroadcastMessage = Struct.new(
  :active,
  :broadcast_type,
  :color,
  :dismissable,
  :ends_at,
  :font,
  :id,
  :message,
  :starts_at,
  :target_access_level,
  :target_path,
  :theme,
  keyword_init: true
)

# Request payload for ApiEntitiesSystemBroadcastMessage#load.
#
# @!attribute [rw] id
#   @return [String, nil]
ApiEntitiesSystemBroadcastMessageLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for ApiEntitiesSystemBroadcastMessage#create.
#
# @!attribute [rw] active
#   @return [Boolean, nil]
#
# @!attribute [rw] broadcast_type
#   @return [String, nil]
#
# @!attribute [rw] color
#   @return [String, nil]
#
# @!attribute [rw] dismissable
#   @return [String, nil]
#
# @!attribute [rw] ends_at
#   @return [String, nil]
#
# @!attribute [rw] font
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] message
#   @return [String, nil]
#
# @!attribute [rw] starts_at
#   @return [String, nil]
#
# @!attribute [rw] target_access_level
#   @return [String, nil]
#
# @!attribute [rw] target_path
#   @return [String, nil]
#
# @!attribute [rw] theme
#   @return [String, nil]
ApiEntitiesSystemBroadcastMessageCreateData = Struct.new(
  :active,
  :broadcast_type,
  :color,
  :dismissable,
  :ends_at,
  :font,
  :id,
  :message,
  :starts_at,
  :target_access_level,
  :target_path,
  :theme,
  keyword_init: true
)

# Request payload for ApiEntitiesSystemBroadcastMessage#update.
#
# @!attribute [rw] id
#   @return [String]
ApiEntitiesSystemBroadcastMessageUpdateData = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for ApiEntitiesSystemBroadcastMessage#remove.
#
# @!attribute [rw] id
#   @return [String]
ApiEntitiesSystemBroadcastMessageRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# ApiEntitiesTag entity data model.
#
# @!attribute [rw] commit
#   @return [Hash, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] message
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] protected
#   @return [Boolean, nil]
#
# @!attribute [rw] release
#   @return [Hash, nil]
#
# @!attribute [rw] target
#   @return [String, nil]
ApiEntitiesTag = Struct.new(
  :commit,
  :created_at,
  :message,
  :name,
  :protected,
  :release,
  :target,
  keyword_init: true
)

# Request payload for ApiEntitiesTag#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesTagLoadMatch = Struct.new(
  :id,
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesTag#list.
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesTagListMatch = Struct.new(
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesTag#create.
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesTagCreateData = Struct.new(
  :project_id,
  keyword_init: true
)

# ApiEntitiesTagSignature entity data model.
#
# @!attribute [rw] signature
#   @return [String, nil]
#
# @!attribute [rw] signature_type
#   @return [String, nil]
ApiEntitiesTagSignature = Struct.new(
  :signature,
  :signature_type,
  keyword_init: true
)

# Request payload for ApiEntitiesTagSignature#load.
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] tag_name
#   @return [Object]
ApiEntitiesTagSignatureLoadMatch = Struct.new(
  :project_id,
  :tag_name,
  keyword_init: true
)

# ApiEntitiesTemplatesList entity data model.
#
# @!attribute [rw] key
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
ApiEntitiesTemplatesList = Struct.new(
  :key,
  :name,
  keyword_init: true
)

# Request payload for ApiEntitiesTemplatesList#load.
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] type
#   @return [Object]
ApiEntitiesTemplatesListLoadMatch = Struct.new(
  :project_id,
  :type,
  keyword_init: true
)

# ApiEntitiesTerraformModuleVersion entity data model.
#
# @!attribute [rw] module
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] provider
#   @return [String, nil]
#
# @!attribute [rw] root
#   @return [String, nil]
#
# @!attribute [rw] source
#   @return [String, nil]
#
# @!attribute [rw] submodule
#   @return [String, nil]
#
# @!attribute [rw] version
#   @return [String, nil]
ApiEntitiesTerraformModuleVersion = Struct.new(
  :module,
  :name,
  :provider,
  :root,
  :source,
  :submodule,
  :version,
  keyword_init: true
)

# Request payload for ApiEntitiesTerraformModuleVersion#load.
#
# @!attribute [rw] module_name
#   @return [Object]
#
# @!attribute [rw] module_system
#   @return [Object]
#
# @!attribute [rw] v1_id
#   @return [String, nil]
#
# @!attribute [rw] module_namespace
#   @return [Object, nil]
ApiEntitiesTerraformModuleVersionLoadMatch = Struct.new(
  :module_name,
  :module_system,
  :v1_id,
  :module_namespace,
  keyword_init: true
)

# Request payload for ApiEntitiesTerraformModuleVersion#list.
#
# @!attribute [rw] module_name
#   @return [Object]
#
# @!attribute [rw] module_system
#   @return [Object]
#
# @!attribute [rw] v1_id
#   @return [String]
ApiEntitiesTerraformModuleVersionListMatch = Struct.new(
  :module_name,
  :module_system,
  :v1_id,
  keyword_init: true
)

# ApiEntitiesTreeObject entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] mode
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] path
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
ApiEntitiesTreeObject = Struct.new(
  :id,
  :mode,
  :name,
  :path,
  :type,
  keyword_init: true
)

# Request payload for ApiEntitiesTreeObject#load.
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesTreeObjectLoadMatch = Struct.new(
  :project_id,
  keyword_init: true
)

# ApiEntitiesTrigger entity data model.
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] expires_at
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] last_used
#   @return [String, nil]
#
# @!attribute [rw] owner
#   @return [Hash, nil]
#
# @!attribute [rw] token
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
ApiEntitiesTrigger = Struct.new(
  :created_at,
  :description,
  :expires_at,
  :id,
  :last_used,
  :owner,
  :token,
  :updated_at,
  keyword_init: true
)

# Request payload for ApiEntitiesTrigger#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesTriggerLoadMatch = Struct.new(
  :id,
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesTrigger#list.
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesTriggerListMatch = Struct.new(
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesTrigger#create.
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesTriggerCreateData = Struct.new(
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesTrigger#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
ApiEntitiesTriggerUpdateData = Struct.new(
  :id,
  :project_id,
  keyword_init: true
)

# ApiEntitiesUserAgentDetail entity data model.
#
# @!attribute [rw] akismet_submitted
#   @return [Boolean, nil]
#
# @!attribute [rw] ip_address
#   @return [String, nil]
#
# @!attribute [rw] user_agent
#   @return [String, nil]
ApiEntitiesUserAgentDetail = Struct.new(
  :akismet_submitted,
  :ip_address,
  :user_agent,
  keyword_init: true
)

# Request payload for ApiEntitiesUserAgentDetail#load.
#
# @!attribute [rw] issue_id
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String, nil]
#
# @!attribute [rw] snippet_id
#   @return [String, nil]
ApiEntitiesUserAgentDetailLoadMatch = Struct.new(
  :issue_id,
  :project_id,
  :snippet_id,
  keyword_init: true
)

# ApiEntitiesUserCount entity data model.
#
# @!attribute [rw] assigned_issue
#   @return [Integer, nil]
#
# @!attribute [rw] assigned_merge_request
#   @return [Integer, nil]
#
# @!attribute [rw] merge_request
#   @return [Integer, nil]
#
# @!attribute [rw] review_requested_merge_request
#   @return [Integer, nil]
#
# @!attribute [rw] todo
#   @return [Integer, nil]
ApiEntitiesUserCount = Struct.new(
  :assigned_issue,
  :assigned_merge_request,
  :merge_request,
  :review_requested_merge_request,
  :todo,
  keyword_init: true
)

# Request payload for ApiEntitiesUserCount#load.
#
# @!attribute [rw] assigned_issue
#   @return [Integer, nil]
#
# @!attribute [rw] assigned_merge_request
#   @return [Integer, nil]
#
# @!attribute [rw] merge_request
#   @return [Integer, nil]
#
# @!attribute [rw] review_requested_merge_request
#   @return [Integer, nil]
#
# @!attribute [rw] todo
#   @return [Integer, nil]
ApiEntitiesUserCountLoadMatch = Struct.new(
  :assigned_issue,
  :assigned_merge_request,
  :merge_request,
  :review_requested_merge_request,
  :todo,
  keyword_init: true
)

# ApiEntitiesUserPublic entity data model.
#
# @!attribute [rw] avatar_path
#   @return [String, nil]
#
# @!attribute [rw] avatar_url
#   @return [String, nil]
#
# @!attribute [rw] bio
#   @return [String, nil]
#
# @!attribute [rw] bot
#   @return [String, nil]
#
# @!attribute [rw] can_create_group
#   @return [Boolean, nil]
#
# @!attribute [rw] can_create_project
#   @return [Boolean, nil]
#
# @!attribute [rw] color_scheme_id
#   @return [Integer, nil]
#
# @!attribute [rw] commit_email
#   @return [String, nil]
#
# @!attribute [rw] confirmed_at
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] current_sign_in_at
#   @return [String, nil]
#
# @!attribute [rw] custom_attribute
#   @return [Array, nil]
#
# @!attribute [rw] discord
#   @return [String, nil]
#
# @!attribute [rw] email
#   @return [String, nil]
#
# @!attribute [rw] external
#   @return [String, nil]
#
# @!attribute [rw] extra_shared_runners_minutes_limit
#   @return [String, nil]
#
# @!attribute [rw] follower
#   @return [String, nil]
#
# @!attribute [rw] following
#   @return [String, nil]
#
# @!attribute [rw] github
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] identity
#   @return [Hash, nil]
#
# @!attribute [rw] is_followed
#   @return [Boolean, nil]
#
# @!attribute [rw] job_title
#   @return [String, nil]
#
# @!attribute [rw] key
#   @return [String, nil]
#
# @!attribute [rw] last_activity_on
#   @return [String, nil]
#
# @!attribute [rw] last_sign_in_at
#   @return [String, nil]
#
# @!attribute [rw] linkedin
#   @return [String, nil]
#
# @!attribute [rw] local_time
#   @return [String, nil]
#
# @!attribute [rw] location
#   @return [String, nil]
#
# @!attribute [rw] locked
#   @return [Boolean, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] organization
#   @return [String, nil]
#
# @!attribute [rw] preferred_language
#   @return [String, nil]
#
# @!attribute [rw] private_profile
#   @return [Boolean, nil]
#
# @!attribute [rw] projects_limit
#   @return [Integer, nil]
#
# @!attribute [rw] pronoun
#   @return [String, nil]
#
# @!attribute [rw] public_email
#   @return [String, nil]
#
# @!attribute [rw] scim_identity
#   @return [Hash, nil]
#
# @!attribute [rw] shared_runners_minutes_limit
#   @return [String, nil]
#
# @!attribute [rw] state
#   @return [String, nil]
#
# @!attribute [rw] theme_id
#   @return [Integer, nil]
#
# @!attribute [rw] twitter
#   @return [String, nil]
#
# @!attribute [rw] two_factor_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] username
#   @return [String, nil]
#
# @!attribute [rw] value
#   @return [String, nil]
#
# @!attribute [rw] web_url
#   @return [String, nil]
#
# @!attribute [rw] website_url
#   @return [String, nil]
#
# @!attribute [rw] work_information
#   @return [String, nil]
ApiEntitiesUserPublic = Struct.new(
  :avatar_path,
  :avatar_url,
  :bio,
  :bot,
  :can_create_group,
  :can_create_project,
  :color_scheme_id,
  :commit_email,
  :confirmed_at,
  :created_at,
  :current_sign_in_at,
  :custom_attribute,
  :discord,
  :email,
  :external,
  :extra_shared_runners_minutes_limit,
  :follower,
  :following,
  :github,
  :id,
  :identity,
  :is_followed,
  :job_title,
  :key,
  :last_activity_on,
  :last_sign_in_at,
  :linkedin,
  :local_time,
  :location,
  :locked,
  :name,
  :organization,
  :preferred_language,
  :private_profile,
  :projects_limit,
  :pronoun,
  :public_email,
  :scim_identity,
  :shared_runners_minutes_limit,
  :state,
  :theme_id,
  :twitter,
  :two_factor_enabled,
  :username,
  :value,
  :web_url,
  :website_url,
  :work_information,
  keyword_init: true
)

# Request payload for ApiEntitiesUserPublic#list.
#
# @!attribute [rw] group_id
#   @return [String]
ApiEntitiesUserPublicListMatch = Struct.new(
  :group_id,
  keyword_init: true
)

# ApiEntitiesUserWithAdmin entity data model.
#
# @!attribute [rw] key
#   @return [String, nil]
#
# @!attribute [rw] value
#   @return [String, nil]
ApiEntitiesUserWithAdmin = Struct.new(
  :key,
  :value,
  keyword_init: true
)

# Request payload for ApiEntitiesUserWithAdmin#list.
#
# @!attribute [rw] key
#   @return [String, nil]
#
# @!attribute [rw] value
#   @return [String, nil]
ApiEntitiesUserWithAdminListMatch = Struct.new(
  :key,
  :value,
  keyword_init: true
)

# ApiEntitiesWikiAttachment entity data model.
class ApiEntitiesWikiAttachment
end

# Request payload for ApiEntitiesWikiAttachment#create.
#
# @!attribute [rw] group_id
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String, nil]
ApiEntitiesWikiAttachmentCreateData = Struct.new(
  :group_id,
  :project_id,
  keyword_init: true
)

# ApiEntitiesWikiPage entity data model.
#
# @!attribute [rw] content
#   @return [String, nil]
#
# @!attribute [rw] encoding
#   @return [String, nil]
#
# @!attribute [rw] format
#   @return [String, nil]
#
# @!attribute [rw] front_matter
#   @return [Hash, nil]
#
# @!attribute [rw] slug
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] wiki_page_meta_id
#   @return [Integer, nil]
ApiEntitiesWikiPage = Struct.new(
  :content,
  :encoding,
  :format,
  :front_matter,
  :slug,
  :title,
  :wiki_page_meta_id,
  keyword_init: true
)

# Request payload for ApiEntitiesWikiPage#load.
#
# @!attribute [rw] group_id
#   @return [String, nil]
#
# @!attribute [rw] slug
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String, nil]
ApiEntitiesWikiPageLoadMatch = Struct.new(
  :group_id,
  :slug,
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesWikiPage#create.
#
# @!attribute [rw] group_id
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String, nil]
ApiEntitiesWikiPageCreateData = Struct.new(
  :group_id,
  :project_id,
  keyword_init: true
)

# Request payload for ApiEntitiesWikiPage#update.
#
# @!attribute [rw] group_id
#   @return [String, nil]
#
# @!attribute [rw] slug
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String, nil]
ApiEntitiesWikiPageUpdateData = Struct.new(
  :group_id,
  :slug,
  :project_id,
  keyword_init: true
)

# ApiEntitiesWikiPageBasic entity data model.
#
# @!attribute [rw] format
#   @return [String, nil]
#
# @!attribute [rw] slug
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] wiki_page_meta_id
#   @return [Integer, nil]
ApiEntitiesWikiPageBasic = Struct.new(
  :format,
  :slug,
  :title,
  :wiki_page_meta_id,
  keyword_init: true
)

# Request payload for ApiEntitiesWikiPageBasic#list.
#
# @!attribute [rw] group_id
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String, nil]
ApiEntitiesWikiPageBasicListMatch = Struct.new(
  :group_id,
  :project_id,
  keyword_init: true
)

# Application entity data model.
class Application
end

# Request payload for Application#remove.
#
# @!attribute [rw] id
#   @return [String]
ApplicationRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# AwardEmoji entity data model.
class AwardEmoji
end

# Request payload for AwardEmoji#remove.
#
# @!attribute [rw] epic_id
#   @return [String, nil]
#
# @!attribute [rw] group_id
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] note_id
#   @return [String, nil]
#
# @!attribute [rw] issue_id
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String, nil]
#
# @!attribute [rw] merge_request_id
#   @return [String, nil]
#
# @!attribute [rw] snippet_id
#   @return [String, nil]
AwardEmojiRemoveMatch = Struct.new(
  :epic_id,
  :group_id,
  :id,
  :note_id,
  :issue_id,
  :project_id,
  :merge_request_id,
  :snippet_id,
  keyword_init: true
)

# Badge entity data model.
class Badge
end

# Request payload for Badge#remove.
#
# @!attribute [rw] group_id
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String, nil]
BadgeRemoveMatch = Struct.new(
  :group_id,
  :id,
  :project_id,
  keyword_init: true
)

# Branch entity data model.
class Branch
end

# Request payload for Branch#remove.
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String]
BranchRemoveMatch = Struct.new(
  :id,
  :project_id,
  keyword_init: true
)

# CargoPackage entity data model.
class CargoPackage
end

# Request payload for CargoPackage#load.
#
# @!attribute [rw] project_id
#   @return [String]
CargoPackageLoadMatch = Struct.new(
  :project_id,
  keyword_init: true
)

# CiVariable entity data model.
class CiVariable
end

# Request payload for CiVariable#remove.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String, nil]
#
# @!attribute [rw] group_id
#   @return [String, nil]
CiVariableRemoveMatch = Struct.new(
  :id,
  :project_id,
  :group_id,
  keyword_init: true
)

# Cluster entity data model.
class Cluster
end

# Request payload for Cluster#remove.
#
# @!attribute [rw] group_id
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String, nil]
ClusterRemoveMatch = Struct.new(
  :group_id,
  :id,
  :project_id,
  keyword_init: true
)

# ClusterAgent entity data model.
class ClusterAgent
end

# Request payload for ClusterAgent#remove.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] token_id
#   @return [String, nil]
ClusterAgentRemoveMatch = Struct.new(
  :id,
  :project_id,
  :token_id,
  keyword_init: true
)

# Composer entity data model.
class Composer
end

# Request payload for Composer#create.
#
# @!attribute [rw] project_id
#   @return [String]
ComposerCreateData = Struct.new(
  :project_id,
  keyword_init: true
)

# ComposerPackage entity data model.
class ComposerPackage
end

# Request payload for ComposerPackage#load.
#
# @!attribute [rw] project_id
#   @return [String, nil]
#
# @!attribute [rw] group_id
#   @return [String, nil]
#
# @!attribute [rw] sha
#   @return [Object, nil]
ComposerPackageLoadMatch = Struct.new(
  :project_id,
  :group_id,
  :sha,
  keyword_init: true
)

# Conan entity data model.
class Conan
end

# Request payload for Conan#remove.
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] package_channel
#   @return [Object]
#
# @!attribute [rw] package_name
#   @return [Object]
#
# @!attribute [rw] package_username
#   @return [Object]
#
# @!attribute [rw] package_version
#   @return [Object]
ConanRemoveMatch = Struct.new(
  :id,
  :package_channel,
  :package_name,
  :package_username,
  :package_version,
  keyword_init: true
)

# ConanPackage entity data model.
class ConanPackage
end

# Request payload for ConanPackage#load.
#
# @!attribute [rw] conan_package_reference
#   @return [Object, nil]
#
# @!attribute [rw] file_name
#   @return [Object, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] package_channel
#   @return [Object, nil]
#
# @!attribute [rw] package_name
#   @return [Object, nil]
#
# @!attribute [rw] package_revision
#   @return [Object, nil]
#
# @!attribute [rw] package_username
#   @return [Object, nil]
#
# @!attribute [rw] package_version
#   @return [Object, nil]
#
# @!attribute [rw] recipe_revision
#   @return [Object, nil]
#
# @!attribute [rw] conan_id
#   @return [String, nil]
#
# @!attribute [rw] package_id
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String, nil]
#
# @!attribute [rw] revision_id
#   @return [String, nil]
#
# @!attribute [rw] file_id
#   @return [String, nil]
ConanPackageLoadMatch = Struct.new(
  :conan_package_reference,
  :file_name,
  :id,
  :package_channel,
  :package_name,
  :package_revision,
  :package_username,
  :package_version,
  :recipe_revision,
  :conan_id,
  :package_id,
  :project_id,
  :revision_id,
  :file_id,
  keyword_init: true
)

# Request payload for ConanPackage#update.
#
# @!attribute [rw] conan_package_reference
#   @return [Object, nil]
#
# @!attribute [rw] file_name
#   @return [Object]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] package_channel
#   @return [Object]
#
# @!attribute [rw] package_name
#   @return [Object, nil]
#
# @!attribute [rw] package_revision
#   @return [Object, nil]
#
# @!attribute [rw] package_username
#   @return [Object]
#
# @!attribute [rw] package_version
#   @return [Object]
#
# @!attribute [rw] recipe_revision
#   @return [Object, nil]
#
# @!attribute [rw] conan_id
#   @return [String, nil]
#
# @!attribute [rw] package_id
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String, nil]
#
# @!attribute [rw] revision_id
#   @return [String, nil]
#
# @!attribute [rw] file_id
#   @return [String, nil]
ConanPackageUpdateData = Struct.new(
  :conan_package_reference,
  :file_name,
  :id,
  :package_channel,
  :package_name,
  :package_revision,
  :package_username,
  :package_version,
  :recipe_revision,
  :conan_id,
  :package_id,
  :project_id,
  :revision_id,
  :file_id,
  keyword_init: true
)

# Request payload for ConanPackage#remove.
#
# @!attribute [rw] conan_id
#   @return [String]
#
# @!attribute [rw] package_channel
#   @return [Object]
#
# @!attribute [rw] package_id
#   @return [String, nil]
#
# @!attribute [rw] package_revision
#   @return [Object, nil]
#
# @!attribute [rw] package_username
#   @return [Object]
#
# @!attribute [rw] package_version
#   @return [Object]
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] revision_id
#   @return [String, nil]
#
# @!attribute [rw] recipe_revision
#   @return [Object, nil]
ConanPackageRemoveMatch = Struct.new(
  :conan_id,
  :package_channel,
  :package_id,
  :package_revision,
  :package_username,
  :package_version,
  :project_id,
  :revision_id,
  :recipe_revision,
  keyword_init: true
)

# ContainerRegistry entity data model.
class ContainerRegistry
end

# Request payload for ContainerRegistry#remove.
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] repository_id
#   @return [String]
#
# @!attribute [rw] tag_name
#   @return [Object, nil]
ContainerRegistryRemoveMatch = Struct.new(
  :project_id,
  :repository_id,
  :tag_name,
  keyword_init: true
)

# ContainerRegistryEvent entity data model.
class ContainerRegistryEvent
end

# Request payload for ContainerRegistryEvent#create.
class ContainerRegistryEventCreateData
end

# CustomAttribute entity data model.
#
# @!attribute [rw] key
#   @return [String, nil]
#
# @!attribute [rw] value
#   @return [String, nil]
CustomAttribute = Struct.new(
  :key,
  :value,
  keyword_init: true
)

# Request payload for CustomAttribute#load.
#
# @!attribute [rw] group_id
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String, nil]
CustomAttributeLoadMatch = Struct.new(
  :group_id,
  :id,
  :project_id,
  keyword_init: true
)

# Debian entity data model.
class Debian
end

# Request payload for Debian#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
DebianUpdateData = Struct.new(
  :id,
  :project_id,
  keyword_init: true
)

# DebianDistribution entity data model.
class DebianDistribution
end

# Request payload for DebianDistribution#remove.
#
# @!attribute [rw] group_id
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String, nil]
DebianDistributionRemoveMatch = Struct.new(
  :group_id,
  :id,
  :project_id,
  keyword_init: true
)

# DebianPackage entity data model.
class DebianPackage
end

# Request payload for DebianPackage#load.
#
# @!attribute [rw] distribution
#   @return [Object, nil]
#
# @!attribute [rw] file_name
#   @return [Object, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] letter
#   @return [Object, nil]
#
# @!attribute [rw] package_name
#   @return [Object, nil]
#
# @!attribute [rw] package_version
#   @return [Object, nil]
#
# @!attribute [rw] project_id
#   @return [String, nil]
#
# @!attribute [rw] architecture
#   @return [Object, nil]
#
# @!attribute [rw] distribution_id
#   @return [String, nil]
#
# @!attribute [rw] file_sha256
#   @return [Object, nil]
#
# @!attribute [rw] group_id
#   @return [String, nil]
DebianPackageLoadMatch = Struct.new(
  :distribution,
  :file_name,
  :id,
  :letter,
  :package_name,
  :package_version,
  :project_id,
  :architecture,
  :distribution_id,
  :file_sha256,
  :group_id,
  keyword_init: true
)

# Request payload for DebianPackage#update.
#
# @!attribute [rw] file_name
#   @return [Object]
#
# @!attribute [rw] project_id
#   @return [String]
DebianPackageUpdateData = Struct.new(
  :file_name,
  :project_id,
  keyword_init: true
)

# DependencyProxy entity data model.
class DependencyProxy
end

# Request payload for DependencyProxy#remove.
#
# @!attribute [rw] group_id
#   @return [String]
DependencyProxyRemoveMatch = Struct.new(
  :group_id,
  keyword_init: true
)

# DeployKey entity data model.
class DeployKey
end

# Request payload for DeployKey#remove.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
DeployKeyRemoveMatch = Struct.new(
  :id,
  :project_id,
  keyword_init: true
)

# DeployToken entity data model.
class DeployToken
end

# Request payload for DeployToken#remove.
#
# @!attribute [rw] group_id
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String, nil]
DeployTokenRemoveMatch = Struct.new(
  :group_id,
  :id,
  :project_id,
  keyword_init: true
)

# Deployment entity data model.
class Deployment
end

# Request payload for Deployment#remove.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
DeploymentRemoveMatch = Struct.new(
  :id,
  :project_id,
  keyword_init: true
)

# EeApiEntitiesApprovalState entity data model.
class EeApiEntitiesApprovalState
end

# Request payload for EeApiEntitiesApprovalState#create.
#
# @!attribute [rw] merge_request_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
EeApiEntitiesApprovalStateCreateData = Struct.new(
  :merge_request_id,
  :project_id,
  keyword_init: true
)

# EeApiEntitiesAuditEvent entity data model.
#
# @!attribute [rw] author_id
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] detail
#   @return [String, nil]
#
# @!attribute [rw] entity_id
#   @return [String, nil]
#
# @!attribute [rw] entity_type
#   @return [String, nil]
#
# @!attribute [rw] event_name
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
EeApiEntitiesAuditEvent = Struct.new(
  :author_id,
  :created_at,
  :detail,
  :entity_id,
  :entity_type,
  :event_name,
  :id,
  keyword_init: true
)

# Request payload for EeApiEntitiesAuditEvent#load.
#
# @!attribute [rw] group_id
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String, nil]
EeApiEntitiesAuditEventLoadMatch = Struct.new(
  :group_id,
  :id,
  :project_id,
  keyword_init: true
)

# Request payload for EeApiEntitiesAuditEvent#list.
#
# @!attribute [rw] group_id
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String, nil]
EeApiEntitiesAuditEventListMatch = Struct.new(
  :group_id,
  :project_id,
  keyword_init: true
)

# EeApiEntitiesBillableMembership entity data model.
#
# @!attribute [rw] access_level
#   @return [Hash, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] expires_at
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] source_full_name
#   @return [String, nil]
#
# @!attribute [rw] source_id
#   @return [String, nil]
#
# @!attribute [rw] source_members_url
#   @return [String, nil]
EeApiEntitiesBillableMembership = Struct.new(
  :access_level,
  :created_at,
  :expires_at,
  :id,
  :source_full_name,
  :source_id,
  :source_members_url,
  keyword_init: true
)

# Request payload for EeApiEntitiesBillableMembership#load.
#
# @!attribute [rw] billable_member_id
#   @return [String]
#
# @!attribute [rw] group_id
#   @return [String]
EeApiEntitiesBillableMembershipLoadMatch = Struct.new(
  :billable_member_id,
  :group_id,
  keyword_init: true
)

# EeApiEntitiesGeoNodeStatus entity data model.
#
# @!attribute [rw] ci_secure_files_checksum_failed_count
#   @return [String, nil]
#
# @!attribute [rw] ci_secure_files_checksum_total_count
#   @return [String, nil]
#
# @!attribute [rw] ci_secure_files_checksummed_count
#   @return [String, nil]
#
# @!attribute [rw] ci_secure_files_count
#   @return [String, nil]
#
# @!attribute [rw] ci_secure_files_failed_count
#   @return [String, nil]
#
# @!attribute [rw] ci_secure_files_registry_count
#   @return [String, nil]
#
# @!attribute [rw] ci_secure_files_synced_count
#   @return [String, nil]
#
# @!attribute [rw] ci_secure_files_synced_in_percentage
#   @return [String, nil]
#
# @!attribute [rw] ci_secure_files_verification_failed_count
#   @return [String, nil]
#
# @!attribute [rw] ci_secure_files_verification_total_count
#   @return [String, nil]
#
# @!attribute [rw] ci_secure_files_verified_count
#   @return [String, nil]
#
# @!attribute [rw] ci_secure_files_verified_in_percentage
#   @return [String, nil]
#
# @!attribute [rw] container_repositories_checksum_failed_count
#   @return [String, nil]
#
# @!attribute [rw] container_repositories_checksum_total_count
#   @return [String, nil]
#
# @!attribute [rw] container_repositories_checksummed_count
#   @return [String, nil]
#
# @!attribute [rw] container_repositories_count
#   @return [String, nil]
#
# @!attribute [rw] container_repositories_failed_count
#   @return [String, nil]
#
# @!attribute [rw] container_repositories_registry_count
#   @return [String, nil]
#
# @!attribute [rw] container_repositories_replication_enabled
#   @return [String, nil]
#
# @!attribute [rw] container_repositories_synced_count
#   @return [String, nil]
#
# @!attribute [rw] container_repositories_synced_in_percentage
#   @return [String, nil]
#
# @!attribute [rw] container_repositories_verification_failed_count
#   @return [String, nil]
#
# @!attribute [rw] container_repositories_verification_total_count
#   @return [String, nil]
#
# @!attribute [rw] container_repositories_verified_count
#   @return [String, nil]
#
# @!attribute [rw] container_repositories_verified_in_percentage
#   @return [String, nil]
#
# @!attribute [rw] cursor_last_event_id
#   @return [String, nil]
#
# @!attribute [rw] cursor_last_event_timestamp
#   @return [String, nil]
#
# @!attribute [rw] db_replication_lag_second
#   @return [String, nil]
#
# @!attribute [rw] dependency_proxy_blobs_checksum_failed_count
#   @return [String, nil]
#
# @!attribute [rw] dependency_proxy_blobs_checksum_total_count
#   @return [String, nil]
#
# @!attribute [rw] dependency_proxy_blobs_checksummed_count
#   @return [String, nil]
#
# @!attribute [rw] dependency_proxy_blobs_count
#   @return [String, nil]
#
# @!attribute [rw] dependency_proxy_blobs_failed_count
#   @return [String, nil]
#
# @!attribute [rw] dependency_proxy_blobs_registry_count
#   @return [String, nil]
#
# @!attribute [rw] dependency_proxy_blobs_synced_count
#   @return [String, nil]
#
# @!attribute [rw] dependency_proxy_blobs_synced_in_percentage
#   @return [String, nil]
#
# @!attribute [rw] dependency_proxy_blobs_verification_failed_count
#   @return [String, nil]
#
# @!attribute [rw] dependency_proxy_blobs_verification_total_count
#   @return [String, nil]
#
# @!attribute [rw] dependency_proxy_blobs_verified_count
#   @return [String, nil]
#
# @!attribute [rw] dependency_proxy_blobs_verified_in_percentage
#   @return [String, nil]
#
# @!attribute [rw] dependency_proxy_manifests_checksum_failed_count
#   @return [String, nil]
#
# @!attribute [rw] dependency_proxy_manifests_checksum_total_count
#   @return [String, nil]
#
# @!attribute [rw] dependency_proxy_manifests_checksummed_count
#   @return [String, nil]
#
# @!attribute [rw] dependency_proxy_manifests_count
#   @return [String, nil]
#
# @!attribute [rw] dependency_proxy_manifests_failed_count
#   @return [String, nil]
#
# @!attribute [rw] dependency_proxy_manifests_registry_count
#   @return [String, nil]
#
# @!attribute [rw] dependency_proxy_manifests_synced_count
#   @return [String, nil]
#
# @!attribute [rw] dependency_proxy_manifests_synced_in_percentage
#   @return [String, nil]
#
# @!attribute [rw] dependency_proxy_manifests_verification_failed_count
#   @return [String, nil]
#
# @!attribute [rw] dependency_proxy_manifests_verification_total_count
#   @return [String, nil]
#
# @!attribute [rw] dependency_proxy_manifests_verified_count
#   @return [String, nil]
#
# @!attribute [rw] dependency_proxy_manifests_verified_in_percentage
#   @return [String, nil]
#
# @!attribute [rw] design_management_repositories_checksum_failed_count
#   @return [String, nil]
#
# @!attribute [rw] design_management_repositories_checksum_total_count
#   @return [String, nil]
#
# @!attribute [rw] design_management_repositories_checksummed_count
#   @return [String, nil]
#
# @!attribute [rw] design_management_repositories_count
#   @return [String, nil]
#
# @!attribute [rw] design_management_repositories_failed_count
#   @return [String, nil]
#
# @!attribute [rw] design_management_repositories_registry_count
#   @return [String, nil]
#
# @!attribute [rw] design_management_repositories_synced_count
#   @return [String, nil]
#
# @!attribute [rw] design_management_repositories_synced_in_percentage
#   @return [String, nil]
#
# @!attribute [rw] design_management_repositories_verification_failed_count
#   @return [String, nil]
#
# @!attribute [rw] design_management_repositories_verification_total_count
#   @return [String, nil]
#
# @!attribute [rw] design_management_repositories_verified_count
#   @return [String, nil]
#
# @!attribute [rw] design_management_repositories_verified_in_percentage
#   @return [String, nil]
#
# @!attribute [rw] geo_node_id
#   @return [String, nil]
#
# @!attribute [rw] git_fetch_event_count_weekly
#   @return [String, nil]
#
# @!attribute [rw] git_push_event_count_weekly
#   @return [String, nil]
#
# @!attribute [rw] group_wiki_repositories_checksum_failed_count
#   @return [String, nil]
#
# @!attribute [rw] group_wiki_repositories_checksum_total_count
#   @return [String, nil]
#
# @!attribute [rw] group_wiki_repositories_checksummed_count
#   @return [String, nil]
#
# @!attribute [rw] group_wiki_repositories_count
#   @return [String, nil]
#
# @!attribute [rw] group_wiki_repositories_failed_count
#   @return [String, nil]
#
# @!attribute [rw] group_wiki_repositories_registry_count
#   @return [String, nil]
#
# @!attribute [rw] group_wiki_repositories_synced_count
#   @return [String, nil]
#
# @!attribute [rw] group_wiki_repositories_synced_in_percentage
#   @return [String, nil]
#
# @!attribute [rw] group_wiki_repositories_verification_failed_count
#   @return [String, nil]
#
# @!attribute [rw] group_wiki_repositories_verification_total_count
#   @return [String, nil]
#
# @!attribute [rw] group_wiki_repositories_verified_count
#   @return [String, nil]
#
# @!attribute [rw] group_wiki_repositories_verified_in_percentage
#   @return [String, nil]
#
# @!attribute [rw] health
#   @return [String, nil]
#
# @!attribute [rw] health_status
#   @return [String, nil]
#
# @!attribute [rw] healthy
#   @return [String, nil]
#
# @!attribute [rw] job_artifacts_checksum_failed_count
#   @return [String, nil]
#
# @!attribute [rw] job_artifacts_checksum_total_count
#   @return [String, nil]
#
# @!attribute [rw] job_artifacts_checksummed_count
#   @return [String, nil]
#
# @!attribute [rw] job_artifacts_count
#   @return [String, nil]
#
# @!attribute [rw] job_artifacts_failed_count
#   @return [String, nil]
#
# @!attribute [rw] job_artifacts_registry_count
#   @return [String, nil]
#
# @!attribute [rw] job_artifacts_synced_count
#   @return [String, nil]
#
# @!attribute [rw] job_artifacts_synced_in_percentage
#   @return [String, nil]
#
# @!attribute [rw] job_artifacts_verification_failed_count
#   @return [String, nil]
#
# @!attribute [rw] job_artifacts_verification_total_count
#   @return [String, nil]
#
# @!attribute [rw] job_artifacts_verified_count
#   @return [String, nil]
#
# @!attribute [rw] job_artifacts_verified_in_percentage
#   @return [String, nil]
#
# @!attribute [rw] last_event_id
#   @return [String, nil]
#
# @!attribute [rw] last_event_timestamp
#   @return [String, nil]
#
# @!attribute [rw] last_successful_status_check_timestamp
#   @return [String, nil]
#
# @!attribute [rw] lfs_objects_checksum_failed_count
#   @return [String, nil]
#
# @!attribute [rw] lfs_objects_checksum_total_count
#   @return [String, nil]
#
# @!attribute [rw] lfs_objects_checksummed_count
#   @return [String, nil]
#
# @!attribute [rw] lfs_objects_count
#   @return [String, nil]
#
# @!attribute [rw] lfs_objects_failed_count
#   @return [String, nil]
#
# @!attribute [rw] lfs_objects_registry_count
#   @return [String, nil]
#
# @!attribute [rw] lfs_objects_synced_count
#   @return [String, nil]
#
# @!attribute [rw] lfs_objects_synced_in_percentage
#   @return [String, nil]
#
# @!attribute [rw] lfs_objects_verification_failed_count
#   @return [String, nil]
#
# @!attribute [rw] lfs_objects_verification_total_count
#   @return [String, nil]
#
# @!attribute [rw] lfs_objects_verified_count
#   @return [String, nil]
#
# @!attribute [rw] lfs_objects_verified_in_percentage
#   @return [String, nil]
#
# @!attribute [rw] link
#   @return [Hash, nil]
#
# @!attribute [rw] merge_request_diffs_checksum_failed_count
#   @return [String, nil]
#
# @!attribute [rw] merge_request_diffs_checksum_total_count
#   @return [String, nil]
#
# @!attribute [rw] merge_request_diffs_checksummed_count
#   @return [String, nil]
#
# @!attribute [rw] merge_request_diffs_count
#   @return [String, nil]
#
# @!attribute [rw] merge_request_diffs_failed_count
#   @return [String, nil]
#
# @!attribute [rw] merge_request_diffs_registry_count
#   @return [String, nil]
#
# @!attribute [rw] merge_request_diffs_synced_count
#   @return [String, nil]
#
# @!attribute [rw] merge_request_diffs_synced_in_percentage
#   @return [String, nil]
#
# @!attribute [rw] merge_request_diffs_verification_failed_count
#   @return [String, nil]
#
# @!attribute [rw] merge_request_diffs_verification_total_count
#   @return [String, nil]
#
# @!attribute [rw] merge_request_diffs_verified_count
#   @return [String, nil]
#
# @!attribute [rw] merge_request_diffs_verified_in_percentage
#   @return [String, nil]
#
# @!attribute [rw] missing_oauth_application
#   @return [String, nil]
#
# @!attribute [rw] namespace
#   @return [Hash, nil]
#
# @!attribute [rw] package_files_checksum_failed_count
#   @return [String, nil]
#
# @!attribute [rw] package_files_checksum_total_count
#   @return [String, nil]
#
# @!attribute [rw] package_files_checksummed_count
#   @return [String, nil]
#
# @!attribute [rw] package_files_count
#   @return [String, nil]
#
# @!attribute [rw] package_files_failed_count
#   @return [String, nil]
#
# @!attribute [rw] package_files_registry_count
#   @return [String, nil]
#
# @!attribute [rw] package_files_synced_count
#   @return [String, nil]
#
# @!attribute [rw] package_files_synced_in_percentage
#   @return [String, nil]
#
# @!attribute [rw] package_files_verification_failed_count
#   @return [String, nil]
#
# @!attribute [rw] package_files_verification_total_count
#   @return [String, nil]
#
# @!attribute [rw] package_files_verified_count
#   @return [String, nil]
#
# @!attribute [rw] package_files_verified_in_percentage
#   @return [String, nil]
#
# @!attribute [rw] pages_deployments_checksum_failed_count
#   @return [String, nil]
#
# @!attribute [rw] pages_deployments_checksum_total_count
#   @return [String, nil]
#
# @!attribute [rw] pages_deployments_checksummed_count
#   @return [String, nil]
#
# @!attribute [rw] pages_deployments_count
#   @return [String, nil]
#
# @!attribute [rw] pages_deployments_failed_count
#   @return [String, nil]
#
# @!attribute [rw] pages_deployments_registry_count
#   @return [String, nil]
#
# @!attribute [rw] pages_deployments_synced_count
#   @return [String, nil]
#
# @!attribute [rw] pages_deployments_synced_in_percentage
#   @return [String, nil]
#
# @!attribute [rw] pages_deployments_verification_failed_count
#   @return [String, nil]
#
# @!attribute [rw] pages_deployments_verification_total_count
#   @return [String, nil]
#
# @!attribute [rw] pages_deployments_verified_count
#   @return [String, nil]
#
# @!attribute [rw] pages_deployments_verified_in_percentage
#   @return [String, nil]
#
# @!attribute [rw] pipeline_artifacts_checksum_failed_count
#   @return [String, nil]
#
# @!attribute [rw] pipeline_artifacts_checksum_total_count
#   @return [String, nil]
#
# @!attribute [rw] pipeline_artifacts_checksummed_count
#   @return [String, nil]
#
# @!attribute [rw] pipeline_artifacts_count
#   @return [String, nil]
#
# @!attribute [rw] pipeline_artifacts_failed_count
#   @return [String, nil]
#
# @!attribute [rw] pipeline_artifacts_registry_count
#   @return [String, nil]
#
# @!attribute [rw] pipeline_artifacts_synced_count
#   @return [String, nil]
#
# @!attribute [rw] pipeline_artifacts_synced_in_percentage
#   @return [String, nil]
#
# @!attribute [rw] pipeline_artifacts_verification_failed_count
#   @return [String, nil]
#
# @!attribute [rw] pipeline_artifacts_verification_total_count
#   @return [String, nil]
#
# @!attribute [rw] pipeline_artifacts_verified_count
#   @return [String, nil]
#
# @!attribute [rw] pipeline_artifacts_verified_in_percentage
#   @return [String, nil]
#
# @!attribute [rw] project_repositories_checksum_failed_count
#   @return [String, nil]
#
# @!attribute [rw] project_repositories_checksum_total_count
#   @return [String, nil]
#
# @!attribute [rw] project_repositories_checksummed_count
#   @return [String, nil]
#
# @!attribute [rw] project_repositories_count
#   @return [String, nil]
#
# @!attribute [rw] project_repositories_failed_count
#   @return [String, nil]
#
# @!attribute [rw] project_repositories_registry_count
#   @return [String, nil]
#
# @!attribute [rw] project_repositories_synced_count
#   @return [String, nil]
#
# @!attribute [rw] project_repositories_synced_in_percentage
#   @return [String, nil]
#
# @!attribute [rw] project_repositories_verification_failed_count
#   @return [String, nil]
#
# @!attribute [rw] project_repositories_verification_total_count
#   @return [String, nil]
#
# @!attribute [rw] project_repositories_verified_count
#   @return [String, nil]
#
# @!attribute [rw] project_repositories_verified_in_percentage
#   @return [String, nil]
#
# @!attribute [rw] project_wiki_repositories_checksum_failed_count
#   @return [String, nil]
#
# @!attribute [rw] project_wiki_repositories_checksum_total_count
#   @return [String, nil]
#
# @!attribute [rw] project_wiki_repositories_checksummed_count
#   @return [String, nil]
#
# @!attribute [rw] project_wiki_repositories_count
#   @return [String, nil]
#
# @!attribute [rw] project_wiki_repositories_failed_count
#   @return [String, nil]
#
# @!attribute [rw] project_wiki_repositories_registry_count
#   @return [String, nil]
#
# @!attribute [rw] project_wiki_repositories_synced_count
#   @return [String, nil]
#
# @!attribute [rw] project_wiki_repositories_synced_in_percentage
#   @return [String, nil]
#
# @!attribute [rw] project_wiki_repositories_verification_failed_count
#   @return [String, nil]
#
# @!attribute [rw] project_wiki_repositories_verification_total_count
#   @return [String, nil]
#
# @!attribute [rw] project_wiki_repositories_verified_count
#   @return [String, nil]
#
# @!attribute [rw] project_wiki_repositories_verified_in_percentage
#   @return [String, nil]
#
# @!attribute [rw] projects_count
#   @return [String, nil]
#
# @!attribute [rw] proxy_local_requests_event_count_weekly
#   @return [String, nil]
#
# @!attribute [rw] proxy_remote_requests_event_count_weekly
#   @return [String, nil]
#
# @!attribute [rw] replication_slots_count
#   @return [String, nil]
#
# @!attribute [rw] replication_slots_max_retained_wal_byte
#   @return [String, nil]
#
# @!attribute [rw] replication_slots_used_count
#   @return [String, nil]
#
# @!attribute [rw] replication_slots_used_in_percentage
#   @return [String, nil]
#
# @!attribute [rw] repositories_checked_count
#   @return [String, nil]
#
# @!attribute [rw] repositories_checked_failed_count
#   @return [String, nil]
#
# @!attribute [rw] repositories_checked_in_percentage
#   @return [String, nil]
#
# @!attribute [rw] repositories_count
#   @return [String, nil]
#
# @!attribute [rw] revision
#   @return [String, nil]
#
# @!attribute [rw] selective_sync_type
#   @return [String, nil]
#
# @!attribute [rw] snippet_repositories_checksum_failed_count
#   @return [String, nil]
#
# @!attribute [rw] snippet_repositories_checksum_total_count
#   @return [String, nil]
#
# @!attribute [rw] snippet_repositories_checksummed_count
#   @return [String, nil]
#
# @!attribute [rw] snippet_repositories_count
#   @return [String, nil]
#
# @!attribute [rw] snippet_repositories_failed_count
#   @return [String, nil]
#
# @!attribute [rw] snippet_repositories_registry_count
#   @return [String, nil]
#
# @!attribute [rw] snippet_repositories_synced_count
#   @return [String, nil]
#
# @!attribute [rw] snippet_repositories_synced_in_percentage
#   @return [String, nil]
#
# @!attribute [rw] snippet_repositories_verification_failed_count
#   @return [String, nil]
#
# @!attribute [rw] snippet_repositories_verification_total_count
#   @return [String, nil]
#
# @!attribute [rw] snippet_repositories_verified_count
#   @return [String, nil]
#
# @!attribute [rw] snippet_repositories_verified_in_percentage
#   @return [String, nil]
#
# @!attribute [rw] storage_shard
#   @return [Hash, nil]
#
# @!attribute [rw] storage_shards_match
#   @return [String, nil]
#
# @!attribute [rw] terraform_state_versions_checksum_failed_count
#   @return [String, nil]
#
# @!attribute [rw] terraform_state_versions_checksum_total_count
#   @return [String, nil]
#
# @!attribute [rw] terraform_state_versions_checksummed_count
#   @return [String, nil]
#
# @!attribute [rw] terraform_state_versions_count
#   @return [String, nil]
#
# @!attribute [rw] terraform_state_versions_failed_count
#   @return [String, nil]
#
# @!attribute [rw] terraform_state_versions_registry_count
#   @return [String, nil]
#
# @!attribute [rw] terraform_state_versions_synced_count
#   @return [String, nil]
#
# @!attribute [rw] terraform_state_versions_synced_in_percentage
#   @return [String, nil]
#
# @!attribute [rw] terraform_state_versions_verification_failed_count
#   @return [String, nil]
#
# @!attribute [rw] terraform_state_versions_verification_total_count
#   @return [String, nil]
#
# @!attribute [rw] terraform_state_versions_verified_count
#   @return [String, nil]
#
# @!attribute [rw] terraform_state_versions_verified_in_percentage
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] uploads_checksum_failed_count
#   @return [String, nil]
#
# @!attribute [rw] uploads_checksum_total_count
#   @return [String, nil]
#
# @!attribute [rw] uploads_checksummed_count
#   @return [String, nil]
#
# @!attribute [rw] uploads_count
#   @return [String, nil]
#
# @!attribute [rw] uploads_failed_count
#   @return [String, nil]
#
# @!attribute [rw] uploads_registry_count
#   @return [String, nil]
#
# @!attribute [rw] uploads_synced_count
#   @return [String, nil]
#
# @!attribute [rw] uploads_synced_in_percentage
#   @return [String, nil]
#
# @!attribute [rw] uploads_verification_failed_count
#   @return [String, nil]
#
# @!attribute [rw] uploads_verification_total_count
#   @return [String, nil]
#
# @!attribute [rw] uploads_verified_count
#   @return [String, nil]
#
# @!attribute [rw] uploads_verified_in_percentage
#   @return [String, nil]
#
# @!attribute [rw] version
#   @return [String, nil]
EeApiEntitiesGeoNodeStatus = Struct.new(
  :ci_secure_files_checksum_failed_count,
  :ci_secure_files_checksum_total_count,
  :ci_secure_files_checksummed_count,
  :ci_secure_files_count,
  :ci_secure_files_failed_count,
  :ci_secure_files_registry_count,
  :ci_secure_files_synced_count,
  :ci_secure_files_synced_in_percentage,
  :ci_secure_files_verification_failed_count,
  :ci_secure_files_verification_total_count,
  :ci_secure_files_verified_count,
  :ci_secure_files_verified_in_percentage,
  :container_repositories_checksum_failed_count,
  :container_repositories_checksum_total_count,
  :container_repositories_checksummed_count,
  :container_repositories_count,
  :container_repositories_failed_count,
  :container_repositories_registry_count,
  :container_repositories_replication_enabled,
  :container_repositories_synced_count,
  :container_repositories_synced_in_percentage,
  :container_repositories_verification_failed_count,
  :container_repositories_verification_total_count,
  :container_repositories_verified_count,
  :container_repositories_verified_in_percentage,
  :cursor_last_event_id,
  :cursor_last_event_timestamp,
  :db_replication_lag_second,
  :dependency_proxy_blobs_checksum_failed_count,
  :dependency_proxy_blobs_checksum_total_count,
  :dependency_proxy_blobs_checksummed_count,
  :dependency_proxy_blobs_count,
  :dependency_proxy_blobs_failed_count,
  :dependency_proxy_blobs_registry_count,
  :dependency_proxy_blobs_synced_count,
  :dependency_proxy_blobs_synced_in_percentage,
  :dependency_proxy_blobs_verification_failed_count,
  :dependency_proxy_blobs_verification_total_count,
  :dependency_proxy_blobs_verified_count,
  :dependency_proxy_blobs_verified_in_percentage,
  :dependency_proxy_manifests_checksum_failed_count,
  :dependency_proxy_manifests_checksum_total_count,
  :dependency_proxy_manifests_checksummed_count,
  :dependency_proxy_manifests_count,
  :dependency_proxy_manifests_failed_count,
  :dependency_proxy_manifests_registry_count,
  :dependency_proxy_manifests_synced_count,
  :dependency_proxy_manifests_synced_in_percentage,
  :dependency_proxy_manifests_verification_failed_count,
  :dependency_proxy_manifests_verification_total_count,
  :dependency_proxy_manifests_verified_count,
  :dependency_proxy_manifests_verified_in_percentage,
  :design_management_repositories_checksum_failed_count,
  :design_management_repositories_checksum_total_count,
  :design_management_repositories_checksummed_count,
  :design_management_repositories_count,
  :design_management_repositories_failed_count,
  :design_management_repositories_registry_count,
  :design_management_repositories_synced_count,
  :design_management_repositories_synced_in_percentage,
  :design_management_repositories_verification_failed_count,
  :design_management_repositories_verification_total_count,
  :design_management_repositories_verified_count,
  :design_management_repositories_verified_in_percentage,
  :geo_node_id,
  :git_fetch_event_count_weekly,
  :git_push_event_count_weekly,
  :group_wiki_repositories_checksum_failed_count,
  :group_wiki_repositories_checksum_total_count,
  :group_wiki_repositories_checksummed_count,
  :group_wiki_repositories_count,
  :group_wiki_repositories_failed_count,
  :group_wiki_repositories_registry_count,
  :group_wiki_repositories_synced_count,
  :group_wiki_repositories_synced_in_percentage,
  :group_wiki_repositories_verification_failed_count,
  :group_wiki_repositories_verification_total_count,
  :group_wiki_repositories_verified_count,
  :group_wiki_repositories_verified_in_percentage,
  :health,
  :health_status,
  :healthy,
  :job_artifacts_checksum_failed_count,
  :job_artifacts_checksum_total_count,
  :job_artifacts_checksummed_count,
  :job_artifacts_count,
  :job_artifacts_failed_count,
  :job_artifacts_registry_count,
  :job_artifacts_synced_count,
  :job_artifacts_synced_in_percentage,
  :job_artifacts_verification_failed_count,
  :job_artifacts_verification_total_count,
  :job_artifacts_verified_count,
  :job_artifacts_verified_in_percentage,
  :last_event_id,
  :last_event_timestamp,
  :last_successful_status_check_timestamp,
  :lfs_objects_checksum_failed_count,
  :lfs_objects_checksum_total_count,
  :lfs_objects_checksummed_count,
  :lfs_objects_count,
  :lfs_objects_failed_count,
  :lfs_objects_registry_count,
  :lfs_objects_synced_count,
  :lfs_objects_synced_in_percentage,
  :lfs_objects_verification_failed_count,
  :lfs_objects_verification_total_count,
  :lfs_objects_verified_count,
  :lfs_objects_verified_in_percentage,
  :link,
  :merge_request_diffs_checksum_failed_count,
  :merge_request_diffs_checksum_total_count,
  :merge_request_diffs_checksummed_count,
  :merge_request_diffs_count,
  :merge_request_diffs_failed_count,
  :merge_request_diffs_registry_count,
  :merge_request_diffs_synced_count,
  :merge_request_diffs_synced_in_percentage,
  :merge_request_diffs_verification_failed_count,
  :merge_request_diffs_verification_total_count,
  :merge_request_diffs_verified_count,
  :merge_request_diffs_verified_in_percentage,
  :missing_oauth_application,
  :namespace,
  :package_files_checksum_failed_count,
  :package_files_checksum_total_count,
  :package_files_checksummed_count,
  :package_files_count,
  :package_files_failed_count,
  :package_files_registry_count,
  :package_files_synced_count,
  :package_files_synced_in_percentage,
  :package_files_verification_failed_count,
  :package_files_verification_total_count,
  :package_files_verified_count,
  :package_files_verified_in_percentage,
  :pages_deployments_checksum_failed_count,
  :pages_deployments_checksum_total_count,
  :pages_deployments_checksummed_count,
  :pages_deployments_count,
  :pages_deployments_failed_count,
  :pages_deployments_registry_count,
  :pages_deployments_synced_count,
  :pages_deployments_synced_in_percentage,
  :pages_deployments_verification_failed_count,
  :pages_deployments_verification_total_count,
  :pages_deployments_verified_count,
  :pages_deployments_verified_in_percentage,
  :pipeline_artifacts_checksum_failed_count,
  :pipeline_artifacts_checksum_total_count,
  :pipeline_artifacts_checksummed_count,
  :pipeline_artifacts_count,
  :pipeline_artifacts_failed_count,
  :pipeline_artifacts_registry_count,
  :pipeline_artifacts_synced_count,
  :pipeline_artifacts_synced_in_percentage,
  :pipeline_artifacts_verification_failed_count,
  :pipeline_artifacts_verification_total_count,
  :pipeline_artifacts_verified_count,
  :pipeline_artifacts_verified_in_percentage,
  :project_repositories_checksum_failed_count,
  :project_repositories_checksum_total_count,
  :project_repositories_checksummed_count,
  :project_repositories_count,
  :project_repositories_failed_count,
  :project_repositories_registry_count,
  :project_repositories_synced_count,
  :project_repositories_synced_in_percentage,
  :project_repositories_verification_failed_count,
  :project_repositories_verification_total_count,
  :project_repositories_verified_count,
  :project_repositories_verified_in_percentage,
  :project_wiki_repositories_checksum_failed_count,
  :project_wiki_repositories_checksum_total_count,
  :project_wiki_repositories_checksummed_count,
  :project_wiki_repositories_count,
  :project_wiki_repositories_failed_count,
  :project_wiki_repositories_registry_count,
  :project_wiki_repositories_synced_count,
  :project_wiki_repositories_synced_in_percentage,
  :project_wiki_repositories_verification_failed_count,
  :project_wiki_repositories_verification_total_count,
  :project_wiki_repositories_verified_count,
  :project_wiki_repositories_verified_in_percentage,
  :projects_count,
  :proxy_local_requests_event_count_weekly,
  :proxy_remote_requests_event_count_weekly,
  :replication_slots_count,
  :replication_slots_max_retained_wal_byte,
  :replication_slots_used_count,
  :replication_slots_used_in_percentage,
  :repositories_checked_count,
  :repositories_checked_failed_count,
  :repositories_checked_in_percentage,
  :repositories_count,
  :revision,
  :selective_sync_type,
  :snippet_repositories_checksum_failed_count,
  :snippet_repositories_checksum_total_count,
  :snippet_repositories_checksummed_count,
  :snippet_repositories_count,
  :snippet_repositories_failed_count,
  :snippet_repositories_registry_count,
  :snippet_repositories_synced_count,
  :snippet_repositories_synced_in_percentage,
  :snippet_repositories_verification_failed_count,
  :snippet_repositories_verification_total_count,
  :snippet_repositories_verified_count,
  :snippet_repositories_verified_in_percentage,
  :storage_shard,
  :storage_shards_match,
  :terraform_state_versions_checksum_failed_count,
  :terraform_state_versions_checksum_total_count,
  :terraform_state_versions_checksummed_count,
  :terraform_state_versions_count,
  :terraform_state_versions_failed_count,
  :terraform_state_versions_registry_count,
  :terraform_state_versions_synced_count,
  :terraform_state_versions_synced_in_percentage,
  :terraform_state_versions_verification_failed_count,
  :terraform_state_versions_verification_total_count,
  :terraform_state_versions_verified_count,
  :terraform_state_versions_verified_in_percentage,
  :updated_at,
  :uploads_checksum_failed_count,
  :uploads_checksum_total_count,
  :uploads_checksummed_count,
  :uploads_count,
  :uploads_failed_count,
  :uploads_registry_count,
  :uploads_synced_count,
  :uploads_synced_in_percentage,
  :uploads_verification_failed_count,
  :uploads_verification_total_count,
  :uploads_verified_count,
  :uploads_verified_in_percentage,
  :version,
  keyword_init: true
)

# Request payload for EeApiEntitiesGeoNodeStatus#create.
#
# @!attribute [rw] ci_secure_files_checksum_failed_count
#   @return [String, nil]
#
# @!attribute [rw] ci_secure_files_checksum_total_count
#   @return [String, nil]
#
# @!attribute [rw] ci_secure_files_checksummed_count
#   @return [String, nil]
#
# @!attribute [rw] ci_secure_files_count
#   @return [String, nil]
#
# @!attribute [rw] ci_secure_files_failed_count
#   @return [String, nil]
#
# @!attribute [rw] ci_secure_files_registry_count
#   @return [String, nil]
#
# @!attribute [rw] ci_secure_files_synced_count
#   @return [String, nil]
#
# @!attribute [rw] ci_secure_files_synced_in_percentage
#   @return [String, nil]
#
# @!attribute [rw] ci_secure_files_verification_failed_count
#   @return [String, nil]
#
# @!attribute [rw] ci_secure_files_verification_total_count
#   @return [String, nil]
#
# @!attribute [rw] ci_secure_files_verified_count
#   @return [String, nil]
#
# @!attribute [rw] ci_secure_files_verified_in_percentage
#   @return [String, nil]
#
# @!attribute [rw] container_repositories_checksum_failed_count
#   @return [String, nil]
#
# @!attribute [rw] container_repositories_checksum_total_count
#   @return [String, nil]
#
# @!attribute [rw] container_repositories_checksummed_count
#   @return [String, nil]
#
# @!attribute [rw] container_repositories_count
#   @return [String, nil]
#
# @!attribute [rw] container_repositories_failed_count
#   @return [String, nil]
#
# @!attribute [rw] container_repositories_registry_count
#   @return [String, nil]
#
# @!attribute [rw] container_repositories_replication_enabled
#   @return [String, nil]
#
# @!attribute [rw] container_repositories_synced_count
#   @return [String, nil]
#
# @!attribute [rw] container_repositories_synced_in_percentage
#   @return [String, nil]
#
# @!attribute [rw] container_repositories_verification_failed_count
#   @return [String, nil]
#
# @!attribute [rw] container_repositories_verification_total_count
#   @return [String, nil]
#
# @!attribute [rw] container_repositories_verified_count
#   @return [String, nil]
#
# @!attribute [rw] container_repositories_verified_in_percentage
#   @return [String, nil]
#
# @!attribute [rw] cursor_last_event_id
#   @return [String, nil]
#
# @!attribute [rw] cursor_last_event_timestamp
#   @return [String, nil]
#
# @!attribute [rw] db_replication_lag_second
#   @return [String, nil]
#
# @!attribute [rw] dependency_proxy_blobs_checksum_failed_count
#   @return [String, nil]
#
# @!attribute [rw] dependency_proxy_blobs_checksum_total_count
#   @return [String, nil]
#
# @!attribute [rw] dependency_proxy_blobs_checksummed_count
#   @return [String, nil]
#
# @!attribute [rw] dependency_proxy_blobs_count
#   @return [String, nil]
#
# @!attribute [rw] dependency_proxy_blobs_failed_count
#   @return [String, nil]
#
# @!attribute [rw] dependency_proxy_blobs_registry_count
#   @return [String, nil]
#
# @!attribute [rw] dependency_proxy_blobs_synced_count
#   @return [String, nil]
#
# @!attribute [rw] dependency_proxy_blobs_synced_in_percentage
#   @return [String, nil]
#
# @!attribute [rw] dependency_proxy_blobs_verification_failed_count
#   @return [String, nil]
#
# @!attribute [rw] dependency_proxy_blobs_verification_total_count
#   @return [String, nil]
#
# @!attribute [rw] dependency_proxy_blobs_verified_count
#   @return [String, nil]
#
# @!attribute [rw] dependency_proxy_blobs_verified_in_percentage
#   @return [String, nil]
#
# @!attribute [rw] dependency_proxy_manifests_checksum_failed_count
#   @return [String, nil]
#
# @!attribute [rw] dependency_proxy_manifests_checksum_total_count
#   @return [String, nil]
#
# @!attribute [rw] dependency_proxy_manifests_checksummed_count
#   @return [String, nil]
#
# @!attribute [rw] dependency_proxy_manifests_count
#   @return [String, nil]
#
# @!attribute [rw] dependency_proxy_manifests_failed_count
#   @return [String, nil]
#
# @!attribute [rw] dependency_proxy_manifests_registry_count
#   @return [String, nil]
#
# @!attribute [rw] dependency_proxy_manifests_synced_count
#   @return [String, nil]
#
# @!attribute [rw] dependency_proxy_manifests_synced_in_percentage
#   @return [String, nil]
#
# @!attribute [rw] dependency_proxy_manifests_verification_failed_count
#   @return [String, nil]
#
# @!attribute [rw] dependency_proxy_manifests_verification_total_count
#   @return [String, nil]
#
# @!attribute [rw] dependency_proxy_manifests_verified_count
#   @return [String, nil]
#
# @!attribute [rw] dependency_proxy_manifests_verified_in_percentage
#   @return [String, nil]
#
# @!attribute [rw] design_management_repositories_checksum_failed_count
#   @return [String, nil]
#
# @!attribute [rw] design_management_repositories_checksum_total_count
#   @return [String, nil]
#
# @!attribute [rw] design_management_repositories_checksummed_count
#   @return [String, nil]
#
# @!attribute [rw] design_management_repositories_count
#   @return [String, nil]
#
# @!attribute [rw] design_management_repositories_failed_count
#   @return [String, nil]
#
# @!attribute [rw] design_management_repositories_registry_count
#   @return [String, nil]
#
# @!attribute [rw] design_management_repositories_synced_count
#   @return [String, nil]
#
# @!attribute [rw] design_management_repositories_synced_in_percentage
#   @return [String, nil]
#
# @!attribute [rw] design_management_repositories_verification_failed_count
#   @return [String, nil]
#
# @!attribute [rw] design_management_repositories_verification_total_count
#   @return [String, nil]
#
# @!attribute [rw] design_management_repositories_verified_count
#   @return [String, nil]
#
# @!attribute [rw] design_management_repositories_verified_in_percentage
#   @return [String, nil]
#
# @!attribute [rw] geo_node_id
#   @return [String, nil]
#
# @!attribute [rw] git_fetch_event_count_weekly
#   @return [String, nil]
#
# @!attribute [rw] git_push_event_count_weekly
#   @return [String, nil]
#
# @!attribute [rw] group_wiki_repositories_checksum_failed_count
#   @return [String, nil]
#
# @!attribute [rw] group_wiki_repositories_checksum_total_count
#   @return [String, nil]
#
# @!attribute [rw] group_wiki_repositories_checksummed_count
#   @return [String, nil]
#
# @!attribute [rw] group_wiki_repositories_count
#   @return [String, nil]
#
# @!attribute [rw] group_wiki_repositories_failed_count
#   @return [String, nil]
#
# @!attribute [rw] group_wiki_repositories_registry_count
#   @return [String, nil]
#
# @!attribute [rw] group_wiki_repositories_synced_count
#   @return [String, nil]
#
# @!attribute [rw] group_wiki_repositories_synced_in_percentage
#   @return [String, nil]
#
# @!attribute [rw] group_wiki_repositories_verification_failed_count
#   @return [String, nil]
#
# @!attribute [rw] group_wiki_repositories_verification_total_count
#   @return [String, nil]
#
# @!attribute [rw] group_wiki_repositories_verified_count
#   @return [String, nil]
#
# @!attribute [rw] group_wiki_repositories_verified_in_percentage
#   @return [String, nil]
#
# @!attribute [rw] health
#   @return [String, nil]
#
# @!attribute [rw] health_status
#   @return [String, nil]
#
# @!attribute [rw] healthy
#   @return [String, nil]
#
# @!attribute [rw] job_artifacts_checksum_failed_count
#   @return [String, nil]
#
# @!attribute [rw] job_artifacts_checksum_total_count
#   @return [String, nil]
#
# @!attribute [rw] job_artifacts_checksummed_count
#   @return [String, nil]
#
# @!attribute [rw] job_artifacts_count
#   @return [String, nil]
#
# @!attribute [rw] job_artifacts_failed_count
#   @return [String, nil]
#
# @!attribute [rw] job_artifacts_registry_count
#   @return [String, nil]
#
# @!attribute [rw] job_artifacts_synced_count
#   @return [String, nil]
#
# @!attribute [rw] job_artifacts_synced_in_percentage
#   @return [String, nil]
#
# @!attribute [rw] job_artifacts_verification_failed_count
#   @return [String, nil]
#
# @!attribute [rw] job_artifacts_verification_total_count
#   @return [String, nil]
#
# @!attribute [rw] job_artifacts_verified_count
#   @return [String, nil]
#
# @!attribute [rw] job_artifacts_verified_in_percentage
#   @return [String, nil]
#
# @!attribute [rw] last_event_id
#   @return [String, nil]
#
# @!attribute [rw] last_event_timestamp
#   @return [String, nil]
#
# @!attribute [rw] last_successful_status_check_timestamp
#   @return [String, nil]
#
# @!attribute [rw] lfs_objects_checksum_failed_count
#   @return [String, nil]
#
# @!attribute [rw] lfs_objects_checksum_total_count
#   @return [String, nil]
#
# @!attribute [rw] lfs_objects_checksummed_count
#   @return [String, nil]
#
# @!attribute [rw] lfs_objects_count
#   @return [String, nil]
#
# @!attribute [rw] lfs_objects_failed_count
#   @return [String, nil]
#
# @!attribute [rw] lfs_objects_registry_count
#   @return [String, nil]
#
# @!attribute [rw] lfs_objects_synced_count
#   @return [String, nil]
#
# @!attribute [rw] lfs_objects_synced_in_percentage
#   @return [String, nil]
#
# @!attribute [rw] lfs_objects_verification_failed_count
#   @return [String, nil]
#
# @!attribute [rw] lfs_objects_verification_total_count
#   @return [String, nil]
#
# @!attribute [rw] lfs_objects_verified_count
#   @return [String, nil]
#
# @!attribute [rw] lfs_objects_verified_in_percentage
#   @return [String, nil]
#
# @!attribute [rw] link
#   @return [Hash, nil]
#
# @!attribute [rw] merge_request_diffs_checksum_failed_count
#   @return [String, nil]
#
# @!attribute [rw] merge_request_diffs_checksum_total_count
#   @return [String, nil]
#
# @!attribute [rw] merge_request_diffs_checksummed_count
#   @return [String, nil]
#
# @!attribute [rw] merge_request_diffs_count
#   @return [String, nil]
#
# @!attribute [rw] merge_request_diffs_failed_count
#   @return [String, nil]
#
# @!attribute [rw] merge_request_diffs_registry_count
#   @return [String, nil]
#
# @!attribute [rw] merge_request_diffs_synced_count
#   @return [String, nil]
#
# @!attribute [rw] merge_request_diffs_synced_in_percentage
#   @return [String, nil]
#
# @!attribute [rw] merge_request_diffs_verification_failed_count
#   @return [String, nil]
#
# @!attribute [rw] merge_request_diffs_verification_total_count
#   @return [String, nil]
#
# @!attribute [rw] merge_request_diffs_verified_count
#   @return [String, nil]
#
# @!attribute [rw] merge_request_diffs_verified_in_percentage
#   @return [String, nil]
#
# @!attribute [rw] missing_oauth_application
#   @return [String, nil]
#
# @!attribute [rw] namespace
#   @return [Hash, nil]
#
# @!attribute [rw] package_files_checksum_failed_count
#   @return [String, nil]
#
# @!attribute [rw] package_files_checksum_total_count
#   @return [String, nil]
#
# @!attribute [rw] package_files_checksummed_count
#   @return [String, nil]
#
# @!attribute [rw] package_files_count
#   @return [String, nil]
#
# @!attribute [rw] package_files_failed_count
#   @return [String, nil]
#
# @!attribute [rw] package_files_registry_count
#   @return [String, nil]
#
# @!attribute [rw] package_files_synced_count
#   @return [String, nil]
#
# @!attribute [rw] package_files_synced_in_percentage
#   @return [String, nil]
#
# @!attribute [rw] package_files_verification_failed_count
#   @return [String, nil]
#
# @!attribute [rw] package_files_verification_total_count
#   @return [String, nil]
#
# @!attribute [rw] package_files_verified_count
#   @return [String, nil]
#
# @!attribute [rw] package_files_verified_in_percentage
#   @return [String, nil]
#
# @!attribute [rw] pages_deployments_checksum_failed_count
#   @return [String, nil]
#
# @!attribute [rw] pages_deployments_checksum_total_count
#   @return [String, nil]
#
# @!attribute [rw] pages_deployments_checksummed_count
#   @return [String, nil]
#
# @!attribute [rw] pages_deployments_count
#   @return [String, nil]
#
# @!attribute [rw] pages_deployments_failed_count
#   @return [String, nil]
#
# @!attribute [rw] pages_deployments_registry_count
#   @return [String, nil]
#
# @!attribute [rw] pages_deployments_synced_count
#   @return [String, nil]
#
# @!attribute [rw] pages_deployments_synced_in_percentage
#   @return [String, nil]
#
# @!attribute [rw] pages_deployments_verification_failed_count
#   @return [String, nil]
#
# @!attribute [rw] pages_deployments_verification_total_count
#   @return [String, nil]
#
# @!attribute [rw] pages_deployments_verified_count
#   @return [String, nil]
#
# @!attribute [rw] pages_deployments_verified_in_percentage
#   @return [String, nil]
#
# @!attribute [rw] pipeline_artifacts_checksum_failed_count
#   @return [String, nil]
#
# @!attribute [rw] pipeline_artifacts_checksum_total_count
#   @return [String, nil]
#
# @!attribute [rw] pipeline_artifacts_checksummed_count
#   @return [String, nil]
#
# @!attribute [rw] pipeline_artifacts_count
#   @return [String, nil]
#
# @!attribute [rw] pipeline_artifacts_failed_count
#   @return [String, nil]
#
# @!attribute [rw] pipeline_artifacts_registry_count
#   @return [String, nil]
#
# @!attribute [rw] pipeline_artifacts_synced_count
#   @return [String, nil]
#
# @!attribute [rw] pipeline_artifacts_synced_in_percentage
#   @return [String, nil]
#
# @!attribute [rw] pipeline_artifacts_verification_failed_count
#   @return [String, nil]
#
# @!attribute [rw] pipeline_artifacts_verification_total_count
#   @return [String, nil]
#
# @!attribute [rw] pipeline_artifacts_verified_count
#   @return [String, nil]
#
# @!attribute [rw] pipeline_artifacts_verified_in_percentage
#   @return [String, nil]
#
# @!attribute [rw] project_repositories_checksum_failed_count
#   @return [String, nil]
#
# @!attribute [rw] project_repositories_checksum_total_count
#   @return [String, nil]
#
# @!attribute [rw] project_repositories_checksummed_count
#   @return [String, nil]
#
# @!attribute [rw] project_repositories_count
#   @return [String, nil]
#
# @!attribute [rw] project_repositories_failed_count
#   @return [String, nil]
#
# @!attribute [rw] project_repositories_registry_count
#   @return [String, nil]
#
# @!attribute [rw] project_repositories_synced_count
#   @return [String, nil]
#
# @!attribute [rw] project_repositories_synced_in_percentage
#   @return [String, nil]
#
# @!attribute [rw] project_repositories_verification_failed_count
#   @return [String, nil]
#
# @!attribute [rw] project_repositories_verification_total_count
#   @return [String, nil]
#
# @!attribute [rw] project_repositories_verified_count
#   @return [String, nil]
#
# @!attribute [rw] project_repositories_verified_in_percentage
#   @return [String, nil]
#
# @!attribute [rw] project_wiki_repositories_checksum_failed_count
#   @return [String, nil]
#
# @!attribute [rw] project_wiki_repositories_checksum_total_count
#   @return [String, nil]
#
# @!attribute [rw] project_wiki_repositories_checksummed_count
#   @return [String, nil]
#
# @!attribute [rw] project_wiki_repositories_count
#   @return [String, nil]
#
# @!attribute [rw] project_wiki_repositories_failed_count
#   @return [String, nil]
#
# @!attribute [rw] project_wiki_repositories_registry_count
#   @return [String, nil]
#
# @!attribute [rw] project_wiki_repositories_synced_count
#   @return [String, nil]
#
# @!attribute [rw] project_wiki_repositories_synced_in_percentage
#   @return [String, nil]
#
# @!attribute [rw] project_wiki_repositories_verification_failed_count
#   @return [String, nil]
#
# @!attribute [rw] project_wiki_repositories_verification_total_count
#   @return [String, nil]
#
# @!attribute [rw] project_wiki_repositories_verified_count
#   @return [String, nil]
#
# @!attribute [rw] project_wiki_repositories_verified_in_percentage
#   @return [String, nil]
#
# @!attribute [rw] projects_count
#   @return [String, nil]
#
# @!attribute [rw] proxy_local_requests_event_count_weekly
#   @return [String, nil]
#
# @!attribute [rw] proxy_remote_requests_event_count_weekly
#   @return [String, nil]
#
# @!attribute [rw] replication_slots_count
#   @return [String, nil]
#
# @!attribute [rw] replication_slots_max_retained_wal_byte
#   @return [String, nil]
#
# @!attribute [rw] replication_slots_used_count
#   @return [String, nil]
#
# @!attribute [rw] replication_slots_used_in_percentage
#   @return [String, nil]
#
# @!attribute [rw] repositories_checked_count
#   @return [String, nil]
#
# @!attribute [rw] repositories_checked_failed_count
#   @return [String, nil]
#
# @!attribute [rw] repositories_checked_in_percentage
#   @return [String, nil]
#
# @!attribute [rw] repositories_count
#   @return [String, nil]
#
# @!attribute [rw] revision
#   @return [String, nil]
#
# @!attribute [rw] selective_sync_type
#   @return [String, nil]
#
# @!attribute [rw] snippet_repositories_checksum_failed_count
#   @return [String, nil]
#
# @!attribute [rw] snippet_repositories_checksum_total_count
#   @return [String, nil]
#
# @!attribute [rw] snippet_repositories_checksummed_count
#   @return [String, nil]
#
# @!attribute [rw] snippet_repositories_count
#   @return [String, nil]
#
# @!attribute [rw] snippet_repositories_failed_count
#   @return [String, nil]
#
# @!attribute [rw] snippet_repositories_registry_count
#   @return [String, nil]
#
# @!attribute [rw] snippet_repositories_synced_count
#   @return [String, nil]
#
# @!attribute [rw] snippet_repositories_synced_in_percentage
#   @return [String, nil]
#
# @!attribute [rw] snippet_repositories_verification_failed_count
#   @return [String, nil]
#
# @!attribute [rw] snippet_repositories_verification_total_count
#   @return [String, nil]
#
# @!attribute [rw] snippet_repositories_verified_count
#   @return [String, nil]
#
# @!attribute [rw] snippet_repositories_verified_in_percentage
#   @return [String, nil]
#
# @!attribute [rw] storage_shard
#   @return [Hash, nil]
#
# @!attribute [rw] storage_shards_match
#   @return [String, nil]
#
# @!attribute [rw] terraform_state_versions_checksum_failed_count
#   @return [String, nil]
#
# @!attribute [rw] terraform_state_versions_checksum_total_count
#   @return [String, nil]
#
# @!attribute [rw] terraform_state_versions_checksummed_count
#   @return [String, nil]
#
# @!attribute [rw] terraform_state_versions_count
#   @return [String, nil]
#
# @!attribute [rw] terraform_state_versions_failed_count
#   @return [String, nil]
#
# @!attribute [rw] terraform_state_versions_registry_count
#   @return [String, nil]
#
# @!attribute [rw] terraform_state_versions_synced_count
#   @return [String, nil]
#
# @!attribute [rw] terraform_state_versions_synced_in_percentage
#   @return [String, nil]
#
# @!attribute [rw] terraform_state_versions_verification_failed_count
#   @return [String, nil]
#
# @!attribute [rw] terraform_state_versions_verification_total_count
#   @return [String, nil]
#
# @!attribute [rw] terraform_state_versions_verified_count
#   @return [String, nil]
#
# @!attribute [rw] terraform_state_versions_verified_in_percentage
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] uploads_checksum_failed_count
#   @return [String, nil]
#
# @!attribute [rw] uploads_checksum_total_count
#   @return [String, nil]
#
# @!attribute [rw] uploads_checksummed_count
#   @return [String, nil]
#
# @!attribute [rw] uploads_count
#   @return [String, nil]
#
# @!attribute [rw] uploads_failed_count
#   @return [String, nil]
#
# @!attribute [rw] uploads_registry_count
#   @return [String, nil]
#
# @!attribute [rw] uploads_synced_count
#   @return [String, nil]
#
# @!attribute [rw] uploads_synced_in_percentage
#   @return [String, nil]
#
# @!attribute [rw] uploads_verification_failed_count
#   @return [String, nil]
#
# @!attribute [rw] uploads_verification_total_count
#   @return [String, nil]
#
# @!attribute [rw] uploads_verified_count
#   @return [String, nil]
#
# @!attribute [rw] uploads_verified_in_percentage
#   @return [String, nil]
#
# @!attribute [rw] version
#   @return [String, nil]
EeApiEntitiesGeoNodeStatusCreateData = Struct.new(
  :ci_secure_files_checksum_failed_count,
  :ci_secure_files_checksum_total_count,
  :ci_secure_files_checksummed_count,
  :ci_secure_files_count,
  :ci_secure_files_failed_count,
  :ci_secure_files_registry_count,
  :ci_secure_files_synced_count,
  :ci_secure_files_synced_in_percentage,
  :ci_secure_files_verification_failed_count,
  :ci_secure_files_verification_total_count,
  :ci_secure_files_verified_count,
  :ci_secure_files_verified_in_percentage,
  :container_repositories_checksum_failed_count,
  :container_repositories_checksum_total_count,
  :container_repositories_checksummed_count,
  :container_repositories_count,
  :container_repositories_failed_count,
  :container_repositories_registry_count,
  :container_repositories_replication_enabled,
  :container_repositories_synced_count,
  :container_repositories_synced_in_percentage,
  :container_repositories_verification_failed_count,
  :container_repositories_verification_total_count,
  :container_repositories_verified_count,
  :container_repositories_verified_in_percentage,
  :cursor_last_event_id,
  :cursor_last_event_timestamp,
  :db_replication_lag_second,
  :dependency_proxy_blobs_checksum_failed_count,
  :dependency_proxy_blobs_checksum_total_count,
  :dependency_proxy_blobs_checksummed_count,
  :dependency_proxy_blobs_count,
  :dependency_proxy_blobs_failed_count,
  :dependency_proxy_blobs_registry_count,
  :dependency_proxy_blobs_synced_count,
  :dependency_proxy_blobs_synced_in_percentage,
  :dependency_proxy_blobs_verification_failed_count,
  :dependency_proxy_blobs_verification_total_count,
  :dependency_proxy_blobs_verified_count,
  :dependency_proxy_blobs_verified_in_percentage,
  :dependency_proxy_manifests_checksum_failed_count,
  :dependency_proxy_manifests_checksum_total_count,
  :dependency_proxy_manifests_checksummed_count,
  :dependency_proxy_manifests_count,
  :dependency_proxy_manifests_failed_count,
  :dependency_proxy_manifests_registry_count,
  :dependency_proxy_manifests_synced_count,
  :dependency_proxy_manifests_synced_in_percentage,
  :dependency_proxy_manifests_verification_failed_count,
  :dependency_proxy_manifests_verification_total_count,
  :dependency_proxy_manifests_verified_count,
  :dependency_proxy_manifests_verified_in_percentage,
  :design_management_repositories_checksum_failed_count,
  :design_management_repositories_checksum_total_count,
  :design_management_repositories_checksummed_count,
  :design_management_repositories_count,
  :design_management_repositories_failed_count,
  :design_management_repositories_registry_count,
  :design_management_repositories_synced_count,
  :design_management_repositories_synced_in_percentage,
  :design_management_repositories_verification_failed_count,
  :design_management_repositories_verification_total_count,
  :design_management_repositories_verified_count,
  :design_management_repositories_verified_in_percentage,
  :geo_node_id,
  :git_fetch_event_count_weekly,
  :git_push_event_count_weekly,
  :group_wiki_repositories_checksum_failed_count,
  :group_wiki_repositories_checksum_total_count,
  :group_wiki_repositories_checksummed_count,
  :group_wiki_repositories_count,
  :group_wiki_repositories_failed_count,
  :group_wiki_repositories_registry_count,
  :group_wiki_repositories_synced_count,
  :group_wiki_repositories_synced_in_percentage,
  :group_wiki_repositories_verification_failed_count,
  :group_wiki_repositories_verification_total_count,
  :group_wiki_repositories_verified_count,
  :group_wiki_repositories_verified_in_percentage,
  :health,
  :health_status,
  :healthy,
  :job_artifacts_checksum_failed_count,
  :job_artifacts_checksum_total_count,
  :job_artifacts_checksummed_count,
  :job_artifacts_count,
  :job_artifacts_failed_count,
  :job_artifacts_registry_count,
  :job_artifacts_synced_count,
  :job_artifacts_synced_in_percentage,
  :job_artifacts_verification_failed_count,
  :job_artifacts_verification_total_count,
  :job_artifacts_verified_count,
  :job_artifacts_verified_in_percentage,
  :last_event_id,
  :last_event_timestamp,
  :last_successful_status_check_timestamp,
  :lfs_objects_checksum_failed_count,
  :lfs_objects_checksum_total_count,
  :lfs_objects_checksummed_count,
  :lfs_objects_count,
  :lfs_objects_failed_count,
  :lfs_objects_registry_count,
  :lfs_objects_synced_count,
  :lfs_objects_synced_in_percentage,
  :lfs_objects_verification_failed_count,
  :lfs_objects_verification_total_count,
  :lfs_objects_verified_count,
  :lfs_objects_verified_in_percentage,
  :link,
  :merge_request_diffs_checksum_failed_count,
  :merge_request_diffs_checksum_total_count,
  :merge_request_diffs_checksummed_count,
  :merge_request_diffs_count,
  :merge_request_diffs_failed_count,
  :merge_request_diffs_registry_count,
  :merge_request_diffs_synced_count,
  :merge_request_diffs_synced_in_percentage,
  :merge_request_diffs_verification_failed_count,
  :merge_request_diffs_verification_total_count,
  :merge_request_diffs_verified_count,
  :merge_request_diffs_verified_in_percentage,
  :missing_oauth_application,
  :namespace,
  :package_files_checksum_failed_count,
  :package_files_checksum_total_count,
  :package_files_checksummed_count,
  :package_files_count,
  :package_files_failed_count,
  :package_files_registry_count,
  :package_files_synced_count,
  :package_files_synced_in_percentage,
  :package_files_verification_failed_count,
  :package_files_verification_total_count,
  :package_files_verified_count,
  :package_files_verified_in_percentage,
  :pages_deployments_checksum_failed_count,
  :pages_deployments_checksum_total_count,
  :pages_deployments_checksummed_count,
  :pages_deployments_count,
  :pages_deployments_failed_count,
  :pages_deployments_registry_count,
  :pages_deployments_synced_count,
  :pages_deployments_synced_in_percentage,
  :pages_deployments_verification_failed_count,
  :pages_deployments_verification_total_count,
  :pages_deployments_verified_count,
  :pages_deployments_verified_in_percentage,
  :pipeline_artifacts_checksum_failed_count,
  :pipeline_artifacts_checksum_total_count,
  :pipeline_artifacts_checksummed_count,
  :pipeline_artifacts_count,
  :pipeline_artifacts_failed_count,
  :pipeline_artifacts_registry_count,
  :pipeline_artifacts_synced_count,
  :pipeline_artifacts_synced_in_percentage,
  :pipeline_artifacts_verification_failed_count,
  :pipeline_artifacts_verification_total_count,
  :pipeline_artifacts_verified_count,
  :pipeline_artifacts_verified_in_percentage,
  :project_repositories_checksum_failed_count,
  :project_repositories_checksum_total_count,
  :project_repositories_checksummed_count,
  :project_repositories_count,
  :project_repositories_failed_count,
  :project_repositories_registry_count,
  :project_repositories_synced_count,
  :project_repositories_synced_in_percentage,
  :project_repositories_verification_failed_count,
  :project_repositories_verification_total_count,
  :project_repositories_verified_count,
  :project_repositories_verified_in_percentage,
  :project_wiki_repositories_checksum_failed_count,
  :project_wiki_repositories_checksum_total_count,
  :project_wiki_repositories_checksummed_count,
  :project_wiki_repositories_count,
  :project_wiki_repositories_failed_count,
  :project_wiki_repositories_registry_count,
  :project_wiki_repositories_synced_count,
  :project_wiki_repositories_synced_in_percentage,
  :project_wiki_repositories_verification_failed_count,
  :project_wiki_repositories_verification_total_count,
  :project_wiki_repositories_verified_count,
  :project_wiki_repositories_verified_in_percentage,
  :projects_count,
  :proxy_local_requests_event_count_weekly,
  :proxy_remote_requests_event_count_weekly,
  :replication_slots_count,
  :replication_slots_max_retained_wal_byte,
  :replication_slots_used_count,
  :replication_slots_used_in_percentage,
  :repositories_checked_count,
  :repositories_checked_failed_count,
  :repositories_checked_in_percentage,
  :repositories_count,
  :revision,
  :selective_sync_type,
  :snippet_repositories_checksum_failed_count,
  :snippet_repositories_checksum_total_count,
  :snippet_repositories_checksummed_count,
  :snippet_repositories_count,
  :snippet_repositories_failed_count,
  :snippet_repositories_registry_count,
  :snippet_repositories_synced_count,
  :snippet_repositories_synced_in_percentage,
  :snippet_repositories_verification_failed_count,
  :snippet_repositories_verification_total_count,
  :snippet_repositories_verified_count,
  :snippet_repositories_verified_in_percentage,
  :storage_shard,
  :storage_shards_match,
  :terraform_state_versions_checksum_failed_count,
  :terraform_state_versions_checksum_total_count,
  :terraform_state_versions_checksummed_count,
  :terraform_state_versions_count,
  :terraform_state_versions_failed_count,
  :terraform_state_versions_registry_count,
  :terraform_state_versions_synced_count,
  :terraform_state_versions_synced_in_percentage,
  :terraform_state_versions_verification_failed_count,
  :terraform_state_versions_verification_total_count,
  :terraform_state_versions_verified_count,
  :terraform_state_versions_verified_in_percentage,
  :updated_at,
  :uploads_checksum_failed_count,
  :uploads_checksum_total_count,
  :uploads_checksummed_count,
  :uploads_count,
  :uploads_failed_count,
  :uploads_registry_count,
  :uploads_synced_count,
  :uploads_synced_in_percentage,
  :uploads_verification_failed_count,
  :uploads_verification_total_count,
  :uploads_verified_count,
  :uploads_verified_in_percentage,
  :version,
  keyword_init: true
)

# EeApiEntitiesGeoPipelineRef entity data model.
#
# @!attribute [rw] pipeline_ref
#   @return [Array, nil]
EeApiEntitiesGeoPipelineRef = Struct.new(
  :pipeline_ref,
  keyword_init: true
)

# Request payload for EeApiEntitiesGeoPipelineRef#list.
#
# @!attribute [rw] gl_repository
#   @return [Object]
EeApiEntitiesGeoPipelineRefListMatch = Struct.new(
  :gl_repository,
  keyword_init: true
)

# EeApiEntitiesIssuableMetricImage entity data model.
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] file_path
#   @return [String, nil]
#
# @!attribute [rw] filename
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
#
# @!attribute [rw] url_text
#   @return [String, nil]
EeApiEntitiesIssuableMetricImage = Struct.new(
  :created_at,
  :file_path,
  :filename,
  :id,
  :url,
  :url_text,
  keyword_init: true
)

# Request payload for EeApiEntitiesIssuableMetricImage#create.
#
# @!attribute [rw] issue_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
EeApiEntitiesIssuableMetricImageCreateData = Struct.new(
  :issue_id,
  :project_id,
  keyword_init: true
)

# Request payload for EeApiEntitiesIssuableMetricImage#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] issue_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
EeApiEntitiesIssuableMetricImageUpdateData = Struct.new(
  :id,
  :issue_id,
  :project_id,
  keyword_init: true
)

# Request payload for EeApiEntitiesIssuableMetricImage#remove.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] issue_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
EeApiEntitiesIssuableMetricImageRemoveMatch = Struct.new(
  :id,
  :issue_id,
  :project_id,
  keyword_init: true
)

# EeApiEntitiesMergeRequestApprovalState entity data model.
#
# @!attribute [rw] approvals_required
#   @return [Integer, nil]
#
# @!attribute [rw] approved
#   @return [Boolean, nil]
#
# @!attribute [rw] approved_by
#   @return [Array, nil]
#
# @!attribute [rw] code_owner
#   @return [Boolean, nil]
#
# @!attribute [rw] contains_hidden_group
#   @return [Boolean, nil]
#
# @!attribute [rw] eligible_approver
#   @return [Array, nil]
#
# @!attribute [rw] group
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] overridden
#   @return [Boolean, nil]
#
# @!attribute [rw] report_type
#   @return [String, nil]
#
# @!attribute [rw] rule_type
#   @return [String, nil]
#
# @!attribute [rw] section
#   @return [String, nil]
#
# @!attribute [rw] source_rule
#   @return [Hash, nil]
#
# @!attribute [rw] user
#   @return [Array, nil]
EeApiEntitiesMergeRequestApprovalState = Struct.new(
  :approvals_required,
  :approved,
  :approved_by,
  :code_owner,
  :contains_hidden_group,
  :eligible_approver,
  :group,
  :id,
  :name,
  :overridden,
  :report_type,
  :rule_type,
  :section,
  :source_rule,
  :user,
  keyword_init: true
)

# Request payload for EeApiEntitiesMergeRequestApprovalState#list.
#
# @!attribute [rw] merge_request_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
EeApiEntitiesMergeRequestApprovalStateListMatch = Struct.new(
  :merge_request_id,
  :project_id,
  keyword_init: true
)

# EeApiEntitiesSshCertificate entity data model.
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] key
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
EeApiEntitiesSshCertificate = Struct.new(
  :created_at,
  :id,
  :key,
  :title,
  keyword_init: true
)

# Request payload for EeApiEntitiesSshCertificate#list.
#
# @!attribute [rw] group_id
#   @return [String]
EeApiEntitiesSshCertificateListMatch = Struct.new(
  :group_id,
  keyword_init: true
)

# Request payload for EeApiEntitiesSshCertificate#create.
#
# @!attribute [rw] group_id
#   @return [String]
EeApiEntitiesSshCertificateCreateData = Struct.new(
  :group_id,
  keyword_init: true
)

# Environment entity data model.
class Environment
end

# Request payload for Environment#create.
#
# @!attribute [rw] project_id
#   @return [String]
EnvironmentCreateData = Struct.new(
  :project_id,
  keyword_init: true
)

# Request payload for Environment#remove.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
EnvironmentRemoveMatch = Struct.new(
  :id,
  :project_id,
  keyword_init: true
)

# ErrorTrackingClientKey entity data model.
class ErrorTrackingClientKey
end

# Request payload for ErrorTrackingClientKey#remove.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
ErrorTrackingClientKeyRemoveMatch = Struct.new(
  :id,
  :project_id,
  keyword_init: true
)

# Feature entity data model.
class Feature
end

# Request payload for Feature#remove.
#
# @!attribute [rw] id
#   @return [String]
FeatureRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# FeatureFlag entity data model.
class FeatureFlag
end

# Request payload for FeatureFlag#load.
#
# @!attribute [rw] project_id
#   @return [String]
FeatureFlagLoadMatch = Struct.new(
  :project_id,
  keyword_init: true
)

# Request payload for FeatureFlag#create.
#
# @!attribute [rw] unleash_id
#   @return [String]
FeatureFlagCreateData = Struct.new(
  :unleash_id,
  keyword_init: true
)

# Request payload for FeatureFlag#remove.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
FeatureFlagRemoveMatch = Struct.new(
  :id,
  :project_id,
  keyword_init: true
)

# FeatureFlagsUserList entity data model.
class FeatureFlagsUserList
end

# Request payload for FeatureFlagsUserList#remove.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
FeatureFlagsUserListRemoveMatch = Struct.new(
  :id,
  :project_id,
  keyword_init: true
)

# FreezePeriod entity data model.
class FreezePeriod
end

# Request payload for FreezePeriod#remove.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
FreezePeriodRemoveMatch = Struct.new(
  :id,
  :project_id,
  keyword_init: true
)

# GenericPackage entity data model.
class GenericPackage
end

# Request payload for GenericPackage#load.
#
# @!attribute [rw] file_name
#   @return [Object]
#
# @!attribute [rw] generic_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
GenericPackageLoadMatch = Struct.new(
  :file_name,
  :generic_id,
  :project_id,
  keyword_init: true
)

# Request payload for GenericPackage#update.
#
# @!attribute [rw] file_name
#   @return [Object]
#
# @!attribute [rw] generic_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
GenericPackageUpdateData = Struct.new(
  :file_name,
  :generic_id,
  :project_id,
  keyword_init: true
)

# Geo entity data model.
class Geo
end

# Request payload for Geo#load.
#
# @!attribute [rw] replicable_id
#   @return [String]
#
# @!attribute [rw] replicable_name
#   @return [Object]
GeoLoadMatch = Struct.new(
  :replicable_id,
  :replicable_name,
  keyword_init: true
)

# Request payload for Geo#create.
#
# @!attribute [rw] node_proxy_id
#   @return [String, nil]
GeoCreateData = Struct.new(
  :node_proxy_id,
  keyword_init: true
)

# GoProxy entity data model.
class GoProxy
end

# Request payload for GoProxy#load.
#
# @!attribute [rw] module_version
#   @return [Object, nil]
#
# @!attribute [rw] project_id
#   @return [String]
GoProxyLoadMatch = Struct.new(
  :module_version,
  :project_id,
  keyword_init: true
)

# Group entity data model.
class Group
end

# Request payload for Group#load.
#
# @!attribute [rw] filename
#   @return [Object, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] secret
#   @return [Object, nil]
#
# @!attribute [rw] upload_id
#   @return [String, nil]
GroupLoadMatch = Struct.new(
  :filename,
  :id,
  :secret,
  :upload_id,
  keyword_init: true
)

# Request payload for Group#create.
#
# @!attribute [rw] id
#   @return [String]
GroupCreateData = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Group#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] key
#   @return [String, nil]
#
# @!attribute [rw] member_id
#   @return [String, nil]
GroupUpdateData = Struct.new(
  :id,
  :key,
  :member_id,
  keyword_init: true
)

# Request payload for Group#remove.
#
# @!attribute [rw] filename
#   @return [Object, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] secret
#   @return [Object, nil]
#
# @!attribute [rw] group_id
#   @return [String, nil]
#
# @!attribute [rw] key
#   @return [String, nil]
#
# @!attribute [rw] ssh_certificates_id
#   @return [String, nil]
#
# @!attribute [rw] upload_id
#   @return [String, nil]
#
# @!attribute [rw] user_id
#   @return [String, nil]
GroupRemoveMatch = Struct.new(
  :filename,
  :id,
  :secret,
  :group_id,
  :key,
  :ssh_certificates_id,
  :upload_id,
  :user_id,
  keyword_init: true
)

# GroupAvatar entity data model.
class GroupAvatar
end

# Request payload for GroupAvatar#load.
#
# @!attribute [rw] id
#   @return [String]
GroupAvatarLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# GroupExport entity data model.
class GroupExport
end

# Request payload for GroupExport#load.
#
# @!attribute [rw] group_id
#   @return [String]
GroupExportLoadMatch = Struct.new(
  :group_id,
  keyword_init: true
)

# Request payload for GroupExport#create.
#
# @!attribute [rw] id
#   @return [String]
GroupExportCreateData = Struct.new(
  :id,
  keyword_init: true
)

# GroupImport entity data model.
class GroupImport
end

# Request payload for GroupImport#create.
class GroupImportCreateData
end

# HelmPackage entity data model.
class HelmPackage
end

# Request payload for HelmPackage#load.
#
# @!attribute [rw] file_name
#   @return [Object, nil]
#
# @!attribute [rw] helm_id
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] channel
#   @return [Object, nil]
HelmPackageLoadMatch = Struct.new(
  :file_name,
  :helm_id,
  :project_id,
  :channel,
  keyword_init: true
)

# Request payload for HelmPackage#create.
#
# @!attribute [rw] channel
#   @return [Object, nil]
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] api_id
#   @return [String, nil]
HelmPackageCreateData = Struct.new(
  :channel,
  :project_id,
  :api_id,
  keyword_init: true
)

# Hook entity data model.
class Hook
end

# Request payload for Hook#create.
#
# @!attribute [rw] id
#   @return [String]
HookCreateData = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Hook#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] key
#   @return [String]
HookUpdateData = Struct.new(
  :id,
  :key,
  keyword_init: true
)

# Request payload for Hook#remove.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] key
#   @return [String]
HookRemoveMatch = Struct.new(
  :id,
  :key,
  keyword_init: true
)

# Import entity data model.
class Import
end

# Request payload for Import#create.
class ImportCreateData
end

# Integration entity data model.
class Integration
end

# Request payload for Integration#create.
#
# @!attribute [rw] project_id
#   @return [String, nil]
IntegrationCreateData = Struct.new(
  :project_id,
  keyword_init: true
)

# Request payload for Integration#remove.
#
# @!attribute [rw] group_id
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String, nil]
#
# @!attribute [rw] slug
#   @return [String, nil]
IntegrationRemoveMatch = Struct.new(
  :group_id,
  :id,
  :project_id,
  :slug,
  keyword_init: true
)

# Invitation entity data model.
class Invitation
end

# Request payload for Invitation#remove.
#
# @!attribute [rw] group_id
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String, nil]
InvitationRemoveMatch = Struct.new(
  :group_id,
  :id,
  :project_id,
  keyword_init: true
)

# IssueLink entity data model.
class IssueLink
end

# Request payload for IssueLink#remove.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] issue_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
IssueLinkRemoveMatch = Struct.new(
  :id,
  :issue_id,
  :project_id,
  keyword_init: true
)

# IssuesStatistic entity data model.
class IssuesStatistic
end

# Request payload for IssuesStatistic#load.
class IssuesStatisticLoadMatch
end

# Job entity data model.
class Job
end

# Request payload for Job#load.
#
# @!attribute [rw] id
#   @return [String]
JobLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Job#create.
#
# @!attribute [rw] id
#   @return [String, nil]
JobCreateData = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Job#update.
#
# @!attribute [rw] id
#   @return [String]
JobUpdateData = Struct.new(
  :id,
  keyword_init: true
)

# MavenPackage entity data model.
class MavenPackage
end

# Request payload for MavenPackage#load.
#
# @!attribute [rw] file_name
#   @return [Object]
#
# @!attribute [rw] group_id
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String, nil]
MavenPackageLoadMatch = Struct.new(
  :file_name,
  :group_id,
  :project_id,
  keyword_init: true
)

# Request payload for MavenPackage#update.
#
# @!attribute [rw] file_name
#   @return [Object]
#
# @!attribute [rw] project_id
#   @return [String]
MavenPackageUpdateData = Struct.new(
  :file_name,
  :project_id,
  keyword_init: true
)

# Member entity data model.
class Member
end

# Request payload for Member#remove.
#
# @!attribute [rw] group_id
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String, nil]
MemberRemoveMatch = Struct.new(
  :group_id,
  :id,
  :project_id,
  keyword_init: true
)

# MergeRequest entity data model.
class MergeRequest
end

# Request payload for MergeRequest#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
MergeRequestLoadMatch = Struct.new(
  :id,
  :project_id,
  keyword_init: true
)

# Request payload for MergeRequest#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
MergeRequestUpdateData = Struct.new(
  :id,
  :project_id,
  keyword_init: true
)

# Request payload for MergeRequest#remove.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
MergeRequestRemoveMatch = Struct.new(
  :id,
  :project_id,
  keyword_init: true
)

# Metadata entity data model.
#
# @!attribute [rw] enterprise
#   @return [Boolean, nil]
#
# @!attribute [rw] kas
#   @return [Hash, nil]
#
# @!attribute [rw] revision
#   @return [String, nil]
#
# @!attribute [rw] version
#   @return [String, nil]
Metadata = Struct.new(
  :enterprise,
  :kas,
  :revision,
  :version,
  keyword_init: true
)

# Request payload for Metadata#load.
#
# @!attribute [rw] enterprise
#   @return [Boolean, nil]
#
# @!attribute [rw] kas
#   @return [Hash, nil]
#
# @!attribute [rw] revision
#   @return [String, nil]
#
# @!attribute [rw] version
#   @return [String, nil]
MetadataLoadMatch = Struct.new(
  :enterprise,
  :kas,
  :revision,
  :version,
  keyword_init: true
)

# Migration entity data model.
class Migration
end

# Request payload for Migration#create.
#
# @!attribute [rw] timestamp
#   @return [Object]
MigrationCreateData = Struct.new(
  :timestamp,
  keyword_init: true
)

# MlModelRegistry entity data model.
class MlModelRegistry
end

# Request payload for MlModelRegistry#load.
#
# @!attribute [rw] file_name
#   @return [Object]
#
# @!attribute [rw] ml_model_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
MlModelRegistryLoadMatch = Struct.new(
  :file_name,
  :ml_model_id,
  :project_id,
  keyword_init: true
)

# Request payload for MlModelRegistry#update.
#
# @!attribute [rw] file_name
#   @return [Object]
#
# @!attribute [rw] ml_model_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
MlModelRegistryUpdateData = Struct.new(
  :file_name,
  :ml_model_id,
  :project_id,
  keyword_init: true
)

# Namespace entity data model.
class Namespace
end

# Request payload for Namespace#remove.
#
# @!attribute [rw] id
#   @return [String]
NamespaceRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# Npm entity data model.
class Npm
end

# Request payload for Npm#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
NpmUpdateData = Struct.new(
  :id,
  :project_id,
  keyword_init: true
)

# NpmPackage entity data model.
class NpmPackage
end

# Request payload for NpmPackage#load.
#
# @!attribute [rw] project_id
#   @return [String]
NpmPackageLoadMatch = Struct.new(
  :project_id,
  keyword_init: true
)

# Request payload for NpmPackage#create.
#
# @!attribute [rw] group_id
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String, nil]
NpmPackageCreateData = Struct.new(
  :group_id,
  :project_id,
  keyword_init: true
)

# Request payload for NpmPackage#update.
#
# @!attribute [rw] group_id
#   @return [String, nil]
#
# @!attribute [rw] tag
#   @return [Object]
#
# @!attribute [rw] project_id
#   @return [String, nil]
NpmPackageUpdateData = Struct.new(
  :group_id,
  :tag,
  :project_id,
  keyword_init: true
)

# Request payload for NpmPackage#remove.
#
# @!attribute [rw] group_id
#   @return [String, nil]
#
# @!attribute [rw] tag
#   @return [Object]
#
# @!attribute [rw] project_id
#   @return [String, nil]
NpmPackageRemoveMatch = Struct.new(
  :group_id,
  :tag,
  :project_id,
  keyword_init: true
)

# Nuget entity data model.
class Nuget
end

# Request payload for Nuget#update.
#
# @!attribute [rw] project_id
#   @return [String]
NugetUpdateData = Struct.new(
  :project_id,
  keyword_init: true
)

# NugetPackage entity data model.
#
# @!attribute [rw] catalog_entry
#   @return [Hash, nil]
#
# @!attribute [rw] count
#   @return [Integer, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] item
#   @return [Array, nil]
#
# @!attribute [rw] lower
#   @return [String, nil]
#
# @!attribute [rw] package_content
#   @return [String, nil]
#
# @!attribute [rw] upper
#   @return [String, nil]
NugetPackage = Struct.new(
  :catalog_entry,
  :count,
  :id,
  :item,
  :lower,
  :package_content,
  :upper,
  keyword_init: true
)

# Request payload for NugetPackage#load.
#
# @!attribute [rw] group_id
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String, nil]
NugetPackageLoadMatch = Struct.new(
  :group_id,
  :project_id,
  keyword_init: true
)

# Request payload for NugetPackage#list.
#
# @!attribute [rw] group_id
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String, nil]
NugetPackageListMatch = Struct.new(
  :group_id,
  :project_id,
  keyword_init: true
)

# Request payload for NugetPackage#update.
#
# @!attribute [rw] project_id
#   @return [String]
NugetPackageUpdateData = Struct.new(
  :project_id,
  keyword_init: true
)

# Request payload for NugetPackage#remove.
#
# @!attribute [rw] project_id
#   @return [String]
NugetPackageRemoveMatch = Struct.new(
  :project_id,
  keyword_init: true
)

# PackageFile entity data model.
class PackageFile
end

# Request payload for PackageFile#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] package_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
PackageFileLoadMatch = Struct.new(
  :id,
  :package_id,
  :project_id,
  keyword_init: true
)

# Request payload for PackageFile#remove.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] package_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
PackageFileRemoveMatch = Struct.new(
  :id,
  :package_id,
  :project_id,
  keyword_init: true
)

# Page entity data model.
class Page
end

# Request payload for Page#load.
#
# @!attribute [rw] project_id
#   @return [String]
PageLoadMatch = Struct.new(
  :project_id,
  keyword_init: true
)

# Request payload for Page#update.
#
# @!attribute [rw] project_id
#   @return [String]
PageUpdateData = Struct.new(
  :project_id,
  keyword_init: true
)

# Request payload for Page#remove.
#
# @!attribute [rw] project_id
#   @return [String]
PageRemoveMatch = Struct.new(
  :project_id,
  keyword_init: true
)

# Participant entity data model.
#
# @!attribute [rw] key
#   @return [String, nil]
#
# @!attribute [rw] value
#   @return [String, nil]
Participant = Struct.new(
  :key,
  :value,
  keyword_init: true
)

# Request payload for Participant#list.
#
# @!attribute [rw] issue_id
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] merge_request_id
#   @return [String, nil]
ParticipantListMatch = Struct.new(
  :issue_id,
  :project_id,
  :merge_request_id,
  keyword_init: true
)

# PersonalAccessToken entity data model.
class PersonalAccessToken
end

# Request payload for PersonalAccessToken#remove.
#
# @!attribute [rw] id
#   @return [String]
PersonalAccessTokenRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# Project entity data model.
#
# @!attribute [rw] before_sha
#   @return [String, nil]
#
# @!attribute [rw] committed_at
#   @return [String, nil]
#
# @!attribute [rw] coverage
#   @return [Float, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] detailed_status
#   @return [Hash, nil]
#
# @!attribute [rw] duration
#   @return [Integer, nil]
#
# @!attribute [rw] finished_at
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] iid
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [Integer, nil]
#
# @!attribute [rw] queued_duration
#   @return [Integer, nil]
#
# @!attribute [rw] ref
#   @return [String, nil]
#
# @!attribute [rw] sha
#   @return [String, nil]
#
# @!attribute [rw] source
#   @return [String, nil]
#
# @!attribute [rw] started_at
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] tag
#   @return [Boolean, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] user
#   @return [Hash, nil]
#
# @!attribute [rw] web_url
#   @return [String, nil]
#
# @!attribute [rw] yaml_error
#   @return [String, nil]
Project = Struct.new(
  :before_sha,
  :committed_at,
  :coverage,
  :created_at,
  :detailed_status,
  :duration,
  :finished_at,
  :id,
  :iid,
  :name,
  :project_id,
  :queued_duration,
  :ref,
  :sha,
  :source,
  :started_at,
  :status,
  :tag,
  :updated_at,
  :user,
  :web_url,
  :yaml_error,
  keyword_init: true
)

# Request payload for Project#load.
#
# @!attribute [rw] artifact_id
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] file_path
#   @return [Object, nil]
#
# @!attribute [rw] hook_id
#   @return [String, nil]
#
# @!attribute [rw] job_id
#   @return [String, nil]
#
# @!attribute [rw] ref_name
#   @return [Object, nil]
#
# @!attribute [rw] filename
#   @return [Object, nil]
#
# @!attribute [rw] secret
#   @return [Object, nil]
#
# @!attribute [rw] issue_id
#   @return [String, nil]
#
# @!attribute [rw] pipeline_id
#   @return [String, nil]
#
# @!attribute [rw] sha
#   @return [Object, nil]
#
# @!attribute [rw] upload_id
#   @return [String, nil]
ProjectLoadMatch = Struct.new(
  :artifact_id,
  :id,
  :file_path,
  :hook_id,
  :job_id,
  :ref_name,
  :filename,
  :secret,
  :issue_id,
  :pipeline_id,
  :sha,
  :upload_id,
  keyword_init: true
)

# Request payload for Project#create.
#
# @!attribute [rw] event_id
#   @return [String, nil]
#
# @!attribute [rw] hook_id
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] file_path
#   @return [Object, nil]
#
# @!attribute [rw] trigger
#   @return [Object, nil]
#
# @!attribute [rw] issue_id
#   @return [String, nil]
#
# @!attribute [rw] merge_request_id
#   @return [String, nil]
#
# @!attribute [rw] pipeline_schedule_id
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String, nil]
ProjectCreateData = Struct.new(
  :event_id,
  :hook_id,
  :id,
  :file_path,
  :trigger,
  :issue_id,
  :merge_request_id,
  :pipeline_schedule_id,
  :project_id,
  keyword_init: true
)

# Request payload for Project#update.
#
# @!attribute [rw] hook_id
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] key
#   @return [String, nil]
#
# @!attribute [rw] domain
#   @return [Object, nil]
#
# @!attribute [rw] draft_note_id
#   @return [String, nil]
#
# @!attribute [rw] merge_request_id
#   @return [String, nil]
#
# @!attribute [rw] file_path
#   @return [Object, nil]
#
# @!attribute [rw] pipeline_id
#   @return [String, nil]
ProjectUpdateData = Struct.new(
  :hook_id,
  :id,
  :key,
  :domain,
  :draft_note_id,
  :merge_request_id,
  :file_path,
  :pipeline_id,
  keyword_init: true
)

# Request payload for Project#remove.
#
# @!attribute [rw] file_path
#   @return [Object, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] draft_note_id
#   @return [String, nil]
#
# @!attribute [rw] merge_request_id
#   @return [String, nil]
#
# @!attribute [rw] filename
#   @return [Object, nil]
#
# @!attribute [rw] secret
#   @return [Object, nil]
#
# @!attribute [rw] hook_id
#   @return [String, nil]
#
# @!attribute [rw] key
#   @return [String, nil]
#
# @!attribute [rw] pipeline_schedule_id
#   @return [String, nil]
#
# @!attribute [rw] domain
#   @return [Object, nil]
#
# @!attribute [rw] group_id
#   @return [String, nil]
#
# @!attribute [rw] issue_iid
#   @return [Object, nil]
#
# @!attribute [rw] job_id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] package_protection_rule_id
#   @return [String, nil]
#
# @!attribute [rw] pipeline_id
#   @return [String, nil]
#
# @!attribute [rw] protection_rule_id
#   @return [String, nil]
#
# @!attribute [rw] trigger_id
#   @return [String, nil]
#
# @!attribute [rw] upload_id
#   @return [String, nil]
ProjectRemoveMatch = Struct.new(
  :file_path,
  :id,
  :draft_note_id,
  :merge_request_id,
  :filename,
  :secret,
  :hook_id,
  :key,
  :pipeline_schedule_id,
  :domain,
  :group_id,
  :issue_iid,
  :job_id,
  :name,
  :package_protection_rule_id,
  :pipeline_id,
  :protection_rule_id,
  :trigger_id,
  :upload_id,
  keyword_init: true
)

# ProjectAvatar entity data model.
class ProjectAvatar
end

# Request payload for ProjectAvatar#load.
#
# @!attribute [rw] id
#   @return [String]
ProjectAvatarLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# ProjectEntity entity data model.
class ProjectEntity
end

# Request payload for ProjectEntity#create.
class ProjectEntityCreateData
end

# ProjectExport entity data model.
class ProjectExport
end

# Request payload for ProjectExport#load.
#
# @!attribute [rw] project_id
#   @return [String]
ProjectExportLoadMatch = Struct.new(
  :project_id,
  keyword_init: true
)

# Request payload for ProjectExport#create.
#
# @!attribute [rw] id
#   @return [String]
ProjectExportCreateData = Struct.new(
  :id,
  keyword_init: true
)

# ProjectHook entity data model.
class ProjectHook
end

# Request payload for ProjectHook#remove.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
ProjectHookRemoveMatch = Struct.new(
  :id,
  :project_id,
  keyword_init: true
)

# ProjectImport entity data model.
class ProjectImport
end

# Request payload for ProjectImport#create.
class ProjectImportCreateData
end

# ProjectImportEntity entity data model.
#
# @!attribute [rw] forked
#   @return [Boolean, nil]
#
# @!attribute [rw] full_name
#   @return [String, nil]
#
# @!attribute [rw] full_path
#   @return [String, nil]
#
# @!attribute [rw] human_import_status_name
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] import_error
#   @return [String, nil]
#
# @!attribute [rw] import_source
#   @return [String, nil]
#
# @!attribute [rw] import_status
#   @return [String, nil]
#
# @!attribute [rw] import_warning
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] provider_link
#   @return [String, nil]
#
# @!attribute [rw] refs_url
#   @return [String, nil]
#
# @!attribute [rw] relation_type
#   @return [String, nil]
ProjectImportEntity = Struct.new(
  :forked,
  :full_name,
  :full_path,
  :human_import_status_name,
  :id,
  :import_error,
  :import_source,
  :import_status,
  :import_warning,
  :name,
  :provider_link,
  :refs_url,
  :relation_type,
  keyword_init: true
)

# Request payload for ProjectImportEntity#create.
#
# @!attribute [rw] forked
#   @return [Boolean, nil]
#
# @!attribute [rw] full_name
#   @return [String, nil]
#
# @!attribute [rw] full_path
#   @return [String, nil]
#
# @!attribute [rw] human_import_status_name
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] import_error
#   @return [String, nil]
#
# @!attribute [rw] import_source
#   @return [String, nil]
#
# @!attribute [rw] import_status
#   @return [String, nil]
#
# @!attribute [rw] import_warning
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] provider_link
#   @return [String, nil]
#
# @!attribute [rw] refs_url
#   @return [String, nil]
#
# @!attribute [rw] relation_type
#   @return [String, nil]
ProjectImportEntityCreateData = Struct.new(
  :forked,
  :full_name,
  :full_path,
  :human_import_status_name,
  :id,
  :import_error,
  :import_source,
  :import_status,
  :import_warning,
  :name,
  :provider_link,
  :refs_url,
  :relation_type,
  keyword_init: true
)

# ProjectPackage entity data model.
class ProjectPackage
end

# Request payload for ProjectPackage#remove.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
ProjectPackageRemoveMatch = Struct.new(
  :id,
  :project_id,
  keyword_init: true
)

# ProjectSnippet entity data model.
class ProjectSnippet
end

# Request payload for ProjectSnippet#remove.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
ProjectSnippetRemoveMatch = Struct.new(
  :id,
  :project_id,
  keyword_init: true
)

# ProjectsJobTokenScope entity data model.
class ProjectsJobTokenScope
end

# Request payload for ProjectsJobTokenScope#update.
#
# @!attribute [rw] project_id
#   @return [String]
ProjectsJobTokenScopeUpdateData = Struct.new(
  :project_id,
  keyword_init: true
)

# Request payload for ProjectsJobTokenScope#remove.
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] target_group_id
#   @return [String, nil]
#
# @!attribute [rw] target_project_id
#   @return [String, nil]
ProjectsJobTokenScopeRemoveMatch = Struct.new(
  :project_id,
  :target_group_id,
  :target_project_id,
  keyword_init: true
)

# ProtectedTag entity data model.
class ProtectedTag
end

# Request payload for ProtectedTag#remove.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
ProtectedTagRemoveMatch = Struct.new(
  :id,
  :project_id,
  keyword_init: true
)

# Pypi entity data model.
class Pypi
end

# Request payload for Pypi#create.
#
# @!attribute [rw] project_id
#   @return [String]
PypiCreateData = Struct.new(
  :project_id,
  keyword_init: true
)

# PypiPackage entity data model.
class PypiPackage
end

# Request payload for PypiPackage#load.
#
# @!attribute [rw] group_id
#   @return [String, nil]
#
# @!attribute [rw] sha256
#   @return [Object, nil]
#
# @!attribute [rw] project_id
#   @return [String, nil]
PypiPackageLoadMatch = Struct.new(
  :group_id,
  :sha256,
  :project_id,
  keyword_init: true
)

# Request payload for PypiPackage#create.
#
# @!attribute [rw] project_id
#   @return [String]
PypiPackageCreateData = Struct.new(
  :project_id,
  keyword_init: true
)

# Release entity data model.
class Release
end

# Request payload for Release#load.
#
# @!attribute [rw] project_id
#   @return [String]
ReleaseLoadMatch = Struct.new(
  :project_id,
  keyword_init: true
)

# Request payload for Release#remove.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
ReleaseRemoveMatch = Struct.new(
  :id,
  :project_id,
  keyword_init: true
)

# ReleaseLink entity data model.
class ReleaseLink
end

# Request payload for ReleaseLink#remove.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] release_id
#   @return [String]
ReleaseLinkRemoveMatch = Struct.new(
  :id,
  :project_id,
  :release_id,
  keyword_init: true
)

# RemoteMirror entity data model.
class RemoteMirror
end

# Request payload for RemoteMirror#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
RemoteMirrorLoadMatch = Struct.new(
  :id,
  :project_id,
  keyword_init: true
)

# Request payload for RemoteMirror#create.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
RemoteMirrorCreateData = Struct.new(
  :id,
  :project_id,
  keyword_init: true
)

# Request payload for RemoteMirror#remove.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
RemoteMirrorRemoveMatch = Struct.new(
  :id,
  :project_id,
  keyword_init: true
)

# Rpm entity data model.
class Rpm
end

# Request payload for Rpm#create.
#
# @!attribute [rw] project_id
#   @return [String]
RpmCreateData = Struct.new(
  :project_id,
  keyword_init: true
)

# RpmPackage entity data model.
class RpmPackage
end

# Request payload for RpmPackage#load.
#
# @!attribute [rw] project_id
#   @return [String]
RpmPackageLoadMatch = Struct.new(
  :project_id,
  keyword_init: true
)

# Request payload for RpmPackage#create.
#
# @!attribute [rw] project_id
#   @return [String]
RpmPackageCreateData = Struct.new(
  :project_id,
  keyword_init: true
)

# Rubygem entity data model.
class Rubygem
end

# Request payload for Rubygem#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
RubygemLoadMatch = Struct.new(
  :id,
  :project_id,
  keyword_init: true
)

# RubygemPackage entity data model.
class RubygemPackage
end

# Request payload for RubygemPackage#load.
#
# @!attribute [rw] file_name
#   @return [Object, nil]
#
# @!attribute [rw] project_id
#   @return [String]
RubygemPackageLoadMatch = Struct.new(
  :file_name,
  :project_id,
  keyword_init: true
)

# Request payload for RubygemPackage#create.
#
# @!attribute [rw] project_id
#   @return [String]
RubygemPackageCreateData = Struct.new(
  :project_id,
  keyword_init: true
)

# Runner entity data model.
class Runner
end

# Request payload for Runner#create.
class RunnerCreateData
end

# Request payload for Runner#remove.
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String, nil]
RunnerRemoveMatch = Struct.new(
  :id,
  :project_id,
  keyword_init: true
)

# Search entity data model.
class Search
end

# Request payload for Search#load.
class SearchLoadMatch
end

# SecureFile entity data model.
class SecureFile
end

# Request payload for SecureFile#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
SecureFileLoadMatch = Struct.new(
  :id,
  :project_id,
  keyword_init: true
)

# Request payload for SecureFile#remove.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
SecureFileRemoveMatch = Struct.new(
  :id,
  :project_id,
  keyword_init: true
)

# Slack entity data model.
class Slack
end

# Request payload for Slack#create.
class SlackCreateData
end

# Snippet entity data model.
class Snippet
end

# Request payload for Snippet#load.
#
# @!attribute [rw] file_id
#   @return [String]
#
# @!attribute [rw] file_path
#   @return [Object]
#
# @!attribute [rw] id
#   @return [String]
SnippetLoadMatch = Struct.new(
  :file_id,
  :file_path,
  :id,
  keyword_init: true
)

# Request payload for Snippet#remove.
#
# @!attribute [rw] id
#   @return [String]
SnippetRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# Starrer entity data model.
#
# @!attribute [rw] avatar_path
#   @return [String, nil]
#
# @!attribute [rw] avatar_url
#   @return [String, nil]
#
# @!attribute [rw] custom_attribute
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] locked
#   @return [Boolean, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] public_email
#   @return [String, nil]
#
# @!attribute [rw] state
#   @return [String, nil]
#
# @!attribute [rw] username
#   @return [String, nil]
#
# @!attribute [rw] web_url
#   @return [String, nil]
Starrer = Struct.new(
  :avatar_path,
  :avatar_url,
  :custom_attribute,
  :id,
  :locked,
  :name,
  :public_email,
  :state,
  :username,
  :web_url,
  keyword_init: true
)

# Request payload for Starrer#list.
#
# @!attribute [rw] project_id
#   @return [String]
StarrerListMatch = Struct.new(
  :project_id,
  keyword_init: true
)

# SystemHook entity data model.
class SystemHook
end

# Request payload for SystemHook#remove.
#
# @!attribute [rw] id
#   @return [String]
SystemHookRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# Tag entity data model.
class Tag
end

# Request payload for Tag#remove.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
TagRemoveMatch = Struct.new(
  :id,
  :project_id,
  keyword_init: true
)

# TerraformRegistry entity data model.
class TerraformRegistry
end

# Request payload for TerraformRegistry#load.
#
# @!attribute [rw] module_id
#   @return [String, nil]
#
# @!attribute [rw] module_system
#   @return [Object]
#
# @!attribute [rw] project_id
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] module_name
#   @return [Object, nil]
#
# @!attribute [rw] v1_id
#   @return [String, nil]
TerraformRegistryLoadMatch = Struct.new(
  :module_id,
  :module_system,
  :project_id,
  :id,
  :module_name,
  :v1_id,
  keyword_init: true
)

# Request payload for TerraformRegistry#update.
#
# @!attribute [rw] module_id
#   @return [String]
#
# @!attribute [rw] module_system
#   @return [Object]
#
# @!attribute [rw] project_id
#   @return [String]
TerraformRegistryUpdateData = Struct.new(
  :module_id,
  :module_system,
  :project_id,
  keyword_init: true
)

# TerraformState entity data model.
class TerraformState
end

# Request payload for TerraformState#load.
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] serial
#   @return [Object, nil]
#
# @!attribute [rw] state_id
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
TerraformStateLoadMatch = Struct.new(
  :project_id,
  :serial,
  :state_id,
  :id,
  keyword_init: true
)

# Request payload for TerraformState#create.
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String, nil]
TerraformStateCreateData = Struct.new(
  :name,
  :project_id,
  :id,
  keyword_init: true
)

# Request payload for TerraformState#remove.
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] serial
#   @return [Object, nil]
#
# @!attribute [rw] state_id
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
TerraformStateRemoveMatch = Struct.new(
  :name,
  :project_id,
  :serial,
  :state_id,
  :id,
  keyword_init: true
)

# TestReport entity data model.
#
# @!attribute [rw] error_count
#   @return [Integer, nil]
#
# @!attribute [rw] failed_count
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] skipped_count
#   @return [Integer, nil]
#
# @!attribute [rw] success_count
#   @return [Integer, nil]
#
# @!attribute [rw] suite_error
#   @return [String, nil]
#
# @!attribute [rw] test_case
#   @return [Array, nil]
#
# @!attribute [rw] total_count
#   @return [Integer, nil]
#
# @!attribute [rw] total_time
#   @return [Integer, nil]
TestReport = Struct.new(
  :error_count,
  :failed_count,
  :name,
  :skipped_count,
  :success_count,
  :suite_error,
  :test_case,
  :total_count,
  :total_time,
  keyword_init: true
)

# Request payload for TestReport#list.
#
# @!attribute [rw] pipeline_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
TestReportListMatch = Struct.new(
  :pipeline_id,
  :project_id,
  keyword_init: true
)

# TestReportSummary entity data model.
#
# @!attribute [rw] test_suite
#   @return [Hash, nil]
#
# @!attribute [rw] total
#   @return [Hash, nil]
TestReportSummary = Struct.new(
  :test_suite,
  :total,
  keyword_init: true
)

# Request payload for TestReportSummary#load.
#
# @!attribute [rw] pipeline_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
TestReportSummaryLoadMatch = Struct.new(
  :pipeline_id,
  :project_id,
  keyword_init: true
)

# Topic entity data model.
class Topic
end

# Request payload for Topic#remove.
#
# @!attribute [rw] id
#   @return [String]
TopicRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# UnleashApi entity data model.
class UnleashApi
end

# Request payload for UnleashApi#load.
#
# @!attribute [rw] unleash_id
#   @return [String]
UnleashApiLoadMatch = Struct.new(
  :unleash_id,
  keyword_init: true
)

# UsageData entity data model.
class UsageData
end

# Request payload for UsageData#load.
class UsageDataLoadMatch
end

# Request payload for UsageData#create.
class UsageDataCreateData
end

# User entity data model.
#
# @!attribute [rw] avatar_path
#   @return [String, nil]
#
# @!attribute [rw] avatar_url
#   @return [String, nil]
#
# @!attribute [rw] custom_attribute
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] locked
#   @return [Boolean, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] public_email
#   @return [String, nil]
#
# @!attribute [rw] state
#   @return [String, nil]
#
# @!attribute [rw] username
#   @return [String, nil]
#
# @!attribute [rw] web_url
#   @return [String, nil]
User = Struct.new(
  :avatar_path,
  :avatar_url,
  :custom_attribute,
  :id,
  :locked,
  :name,
  :public_email,
  :state,
  :username,
  :web_url,
  keyword_init: true
)

# Request payload for User#list.
#
# @!attribute [rw] project_id
#   @return [String]
UserListMatch = Struct.new(
  :project_id,
  keyword_init: true
)

# WebCommit entity data model.
class WebCommit
end

# Request payload for WebCommit#load.
class WebCommitLoadMatch
end

# Wiki entity data model.
class Wiki
end

# Request payload for Wiki#remove.
#
# @!attribute [rw] group_id
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String, nil]
WikiRemoveMatch = Struct.new(
  :group_id,
  :id,
  :project_id,
  keyword_init: true
)

