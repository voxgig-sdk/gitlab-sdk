<?php
declare(strict_types=1);

// Gitlab SDK configuration

class GitlabConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "Gitlab",
                "slug" => "gitlab",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://gitlab.com",
                "auth" => [
                    "prefix" => "",
                ],
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "api_entities_project_with_access" => [],
                    "project" => [],
                ],
            ],
            "entity" => [
        'api_entities_project_with_access' => [
          'fields' => [
            [
              'name' => 'allow_merge_on_skipped_pipeline',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'allow_pipeline_trigger_approve_deployment',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'analytics_access_level',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'approvals_before_merge',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'archived',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'auto_cancel_pending_pipelines',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'auto_devops_deploy_strategy',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'auto_devops_enabled',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'auto_duo_code_review_enabled',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'autoclose_referenced_issues',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'avatar_url',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'build_git_strategy',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'build_timeout',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'builds_access_level',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'can_create_merge_request_in',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'ci_allow_fork_pipelines_to_run_in_parent_project',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'ci_config_path',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'ci_default_git_depth',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'ci_delete_pipelines_in_seconds',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'ci_forward_deployment_enabled',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'ci_forward_deployment_rollback_allowed',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'ci_id_token_sub_claim_components',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'ci_job_token_scope_enabled',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'ci_pipeline_variables_minimum_override_role',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'ci_push_repository_for_job_token_allowed',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'ci_restrict_pipeline_cancellation_role',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'ci_separated_caches',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'compliance_frameworks',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'container_expiration_policy',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'container_registry_access_level',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'container_registry_enabled',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'container_registry_image_prefix',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'created_at',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'creator_id',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'custom_attributes',
              'short' => 'API_Entities_CustomAttribute model',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'default_branch',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'description',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'description_html',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'duo_remote_flows_enabled',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'emails_disabled',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'emails_enabled',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'empty_repo',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'enforce_auth_checks_on_uploads',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'environments_access_level',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'external_authorization_classification_label',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'feature_flags_access_level',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'forked_from_project',
              'short' => 'API_Entities_BasicProjectDetails model',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'forking_access_level',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'forks_count',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'group_runners_enabled',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'http_url_to_repo',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'import_error',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'import_status',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'import_type',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'import_url',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'infrastructure_access_level',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'issue_branch_template',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'issues_access_level',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'issues_enabled',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'issues_template',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'jobs_enabled',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'keep_latest_artifact',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'last_activity_at',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'lfs_enabled',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'license',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'license_url',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'links',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'marked_for_deletion_at',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'marked_for_deletion_on',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'max_artifacts_size',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'merge_commit_template',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'merge_method',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'merge_pipelines_enabled',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'merge_request_title_regex',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'merge_request_title_regex_description',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'merge_requests_access_level',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'merge_requests_enabled',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'merge_requests_template',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'merge_trains_enabled',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'merge_trains_skip_train_allowed',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'mirror',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'mirror_overwrites_diverged_branches',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'mirror_trigger_builds',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'mirror_user_id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'model_experiments_access_level',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'model_registry_access_level',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'monitor_access_level',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'mr_default_target_self',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'name',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'name_with_namespace',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'namespace',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'only_allow_merge_if_all_discussions_are_resolved',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'only_allow_merge_if_all_status_checks_passed',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'only_allow_merge_if_pipeline_succeeds',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'only_mirror_protected_branches',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'open_issues_count',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'owner',
              'short' => 'API_Entities_UserBasic model',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'package_registry_access_level',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'packages_enabled',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'pages_access_level',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'path',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'path_with_namespace',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'permissions',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'pre_receive_secret_detection_enabled',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'prevent_merge_without_jira_issue',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'printing_merge_request_link_enabled',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'public_jobs',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'readme_url',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'releases_access_level',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'remove_source_branch_after_merge',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'repository_access_level',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'repository_object_format',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'repository_storage',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'request_access_enabled',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'requirements_access_level',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'requirements_enabled',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'resolve_outdated_diff_discussions',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'resource_group_default_process_mode',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'restrict_user_defined_variables',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'runner_token_expiration_interval',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'runners_token',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'secret_push_protection_enabled',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'security_and_compliance_access_level',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'security_and_compliance_enabled',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'service_desk_address',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'service_desk_enabled',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'shared_runners_enabled',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'shared_with_groups',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'show_diff_preview_in_email',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'snippets_access_level',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'snippets_enabled',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'spp_repository_pipeline_access',
              'short' => 'The spp_repository_pipeline_access setting is only visible if the security_orchestration_policies feature is available.',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'squash_commit_template',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'squash_option',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'ssh_url_to_repo',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'star_count',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'statistics',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'suggestion_commit_message',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'tag_list',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'topics',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'updated_at',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'visibility',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'warn_about_potentially_unwanted_characters',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'web_based_commit_signing_enabled',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'web_url',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'wiki_access_level',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'wiki_enabled',
              'type' => '`$BOOLEAN`',
            ],
          ],
          'name' => 'api_entities_project_with_access',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'license',
                        'orig' => 'license',
                        'type' => '`$ANY`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'statistic',
                        'orig' => 'statistic',
                        'type' => '`$ANY`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'with_custom_attribute',
                        'orig' => 'with_custom_attribute',
                        'type' => '`$ANY`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v4/projects/{id}',
                  'parts' => [
                    'api',
                    'v4',
                    'projects',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                      'license',
                      'statistic',
                      'with_custom_attribute',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'project' => [
          'fields' => [
            [
              'name' => 'allow_merge_on_skipped_pipeline',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'allow_pipeline_trigger_approve_deployment',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'analytics_access_level',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'approvals_before_merge',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'archived',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'auto_cancel_pending_pipelines',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'auto_devops_deploy_strategy',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'auto_devops_enabled',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'auto_duo_code_review_enabled',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'autoclose_referenced_issues',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'avatar_url',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'build_git_strategy',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'build_timeout',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'builds_access_level',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'can_create_merge_request_in',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'ci_allow_fork_pipelines_to_run_in_parent_project',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'ci_config_path',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'ci_default_git_depth',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'ci_delete_pipelines_in_seconds',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'ci_forward_deployment_enabled',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'ci_forward_deployment_rollback_allowed',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'ci_id_token_sub_claim_components',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'ci_job_token_scope_enabled',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'ci_pipeline_variables_minimum_override_role',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'ci_push_repository_for_job_token_allowed',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'ci_restrict_pipeline_cancellation_role',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'ci_separated_caches',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'compliance_frameworks',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'container_expiration_policy',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'container_registry_access_level',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'container_registry_enabled',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'container_registry_image_prefix',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'created_at',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'creator_id',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'custom_attributes',
              'short' => 'API_Entities_CustomAttribute model',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'default_branch',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'description',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'description_html',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'duo_remote_flows_enabled',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'emails_disabled',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'emails_enabled',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'empty_repo',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'enforce_auth_checks_on_uploads',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'environments_access_level',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'external_authorization_classification_label',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'feature_flags_access_level',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'forked_from_project',
              'short' => 'API_Entities_BasicProjectDetails model',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'forking_access_level',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'forks_count',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'group_runners_enabled',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'http_url_to_repo',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'import_error',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'import_status',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'import_type',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'import_url',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'infrastructure_access_level',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'issue_branch_template',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'issues_access_level',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'issues_enabled',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'issues_template',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'jobs_enabled',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'keep_latest_artifact',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'last_activity_at',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'lfs_enabled',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'license',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'license_url',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'links',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'marked_for_deletion_at',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'marked_for_deletion_on',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'max_artifacts_size',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'merge_commit_template',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'merge_method',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'merge_pipelines_enabled',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'merge_request_title_regex',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'merge_request_title_regex_description',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'merge_requests_access_level',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'merge_requests_enabled',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'merge_requests_template',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'merge_trains_enabled',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'merge_trains_skip_train_allowed',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'mirror',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'mirror_overwrites_diverged_branches',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'mirror_trigger_builds',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'mirror_user_id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'model_experiments_access_level',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'model_registry_access_level',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'monitor_access_level',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'mr_default_target_self',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'name',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'name_with_namespace',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'namespace',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'only_allow_merge_if_all_discussions_are_resolved',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'only_allow_merge_if_all_status_checks_passed',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'only_allow_merge_if_pipeline_succeeds',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'only_mirror_protected_branches',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'open_issues_count',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'owner',
              'short' => 'API_Entities_UserBasic model',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'package_registry_access_level',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'packages_enabled',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'pages_access_level',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'path',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'path_with_namespace',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'pre_receive_secret_detection_enabled',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'prevent_merge_without_jira_issue',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'printing_merge_request_link_enabled',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'public_jobs',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'readme_url',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'releases_access_level',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'remove_source_branch_after_merge',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'repository_access_level',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'repository_object_format',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'repository_storage',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'request_access_enabled',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'requirements_access_level',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'requirements_enabled',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'resolve_outdated_diff_discussions',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'resource_group_default_process_mode',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'restrict_user_defined_variables',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'runner_token_expiration_interval',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'runners_token',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'secret_push_protection_enabled',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'security_and_compliance_access_level',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'security_and_compliance_enabled',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'service_desk_address',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'service_desk_enabled',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'shared_runners_enabled',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'shared_with_groups',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'show_diff_preview_in_email',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'snippets_access_level',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'snippets_enabled',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'spp_repository_pipeline_access',
              'short' => 'The spp_repository_pipeline_access setting is only visible if the security_orchestration_policies feature is available.',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'squash_commit_template',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'squash_option',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'ssh_url_to_repo',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'star_count',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'statistics',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'suggestion_commit_message',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'tag_list',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'topics',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'updated_at',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'visibility',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'warn_about_potentially_unwanted_characters',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'web_based_commit_signing_enabled',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'web_url',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'wiki_access_level',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'wiki_enabled',
              'type' => '`$BOOLEAN`',
            ],
          ],
          'name' => 'project',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'post_api_v4_project',
                        'orig' => 'post_api_v4_project',
                        'reqd' => true,
                        'type' => '`$OBJECT`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/api/v4/projects',
                  'parts' => [
                    'api',
                    'v4',
                    'projects',
                  ],
                  'select' => [
                    'exist' => [
                      'post_api_v4_project',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'active',
                        'orig' => 'active',
                        'type' => '`$BOOLEAN`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'archived',
                        'orig' => 'archived',
                        'type' => '`$BOOLEAN`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'id_after',
                        'orig' => 'id_after',
                        'type' => '`$ANY`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'id_before',
                        'orig' => 'id_before',
                        'type' => '`$ANY`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'imported',
                        'orig' => 'imported',
                        'type' => '`$ANY`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'include_hidden',
                        'orig' => 'include_hidden',
                        'type' => '`$ANY`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'include_pending_delete',
                        'orig' => 'include_pending_delete',
                        'type' => '`$ANY`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'last_activity_after',
                        'orig' => 'last_activity_after',
                        'type' => '`$ANY`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'last_activity_before',
                        'orig' => 'last_activity_before',
                        'type' => '`$ANY`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'marked_for_deletion_on',
                        'orig' => 'marked_for_deletion_on',
                        'type' => '`$ANY`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'membership',
                        'orig' => 'membership',
                        'type' => '`$ANY`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'min_access_level',
                        'orig' => 'min_access_level',
                        'type' => '`$ANY`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'order_by',
                        'orig' => 'order_by',
                        'type' => '`$ANY`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'owned',
                        'orig' => 'owned',
                        'type' => '`$ANY`',
                      ],
                      [
                        'example' => 1,
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'example' => 20,
                        'kind' => 'query',
                        'name' => 'per_page',
                        'orig' => 'per_page',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'repository_checksum_failed',
                        'orig' => 'repository_checksum_failed',
                        'type' => '`$ANY`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'repository_storage',
                        'orig' => 'repository_storage',
                        'type' => '`$ANY`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'search',
                        'orig' => 'search',
                        'type' => '`$ANY`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'search_namespace',
                        'orig' => 'search_namespace',
                        'type' => '`$ANY`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'simple',
                        'orig' => 'simple',
                        'type' => '`$ANY`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'sort',
                        'orig' => 'sort',
                        'type' => '`$ANY`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'starred',
                        'orig' => 'starred',
                        'type' => '`$ANY`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'statistic',
                        'orig' => 'statistic',
                        'type' => '`$ANY`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'topic',
                        'orig' => 'topic',
                        'type' => '`$ANY`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'topic_id',
                        'orig' => 'topic_id',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'updated_after',
                        'orig' => 'updated_after',
                        'type' => '`$ANY`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'updated_before',
                        'orig' => 'updated_before',
                        'type' => '`$ANY`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'visibility',
                        'orig' => 'visibility',
                        'type' => '`$ANY`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'wiki_checksum_failed',
                        'orig' => 'wiki_checksum_failed',
                        'type' => '`$ANY`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'with_custom_attribute',
                        'orig' => 'with_custom_attribute',
                        'type' => '`$ANY`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'with_issues_enabled',
                        'orig' => 'with_issues_enabled',
                        'type' => '`$ANY`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'with_merge_requests_enabled',
                        'orig' => 'with_merge_requests_enabled',
                        'type' => '`$ANY`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'with_programming_language',
                        'orig' => 'with_programming_language',
                        'type' => '`$ANY`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v4/projects',
                  'parts' => [
                    'api',
                    'v4',
                    'projects',
                  ],
                  'select' => [
                    'exist' => [
                      'active',
                      'archived',
                      'id_after',
                      'id_before',
                      'imported',
                      'include_hidden',
                      'include_pending_delete',
                      'last_activity_after',
                      'last_activity_before',
                      'marked_for_deletion_on',
                      'membership',
                      'min_access_level',
                      'order_by',
                      'owned',
                      'page',
                      'per_page',
                      'repository_checksum_failed',
                      'repository_storage',
                      'search',
                      'search_namespace',
                      'simple',
                      'sort',
                      'starred',
                      'statistic',
                      'topic',
                      'topic_id',
                      'updated_after',
                      'updated_before',
                      'visibility',
                      'wiki_checksum_failed',
                      'with_custom_attribute',
                      'with_issues_enabled',
                      'with_merge_requests_enabled',
                      'with_programming_language',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
            'remove' => [
              'input' => 'data',
              'name' => 'remove',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'DELETE',
                  'orig' => '/api/v4/projects/{id}',
                  'parts' => [
                    'api',
                    'v4',
                    'projects',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'put_api_v4_projects_id',
                        'orig' => 'put_api_v4_projects_id',
                        'reqd' => true,
                        'type' => '`$OBJECT`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'PUT',
                  'orig' => '/api/v4/projects/{id}',
                  'parts' => [
                    'api',
                    'v4',
                    'projects',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                      'put_api_v4_projects_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return GitlabFeatures::make_feature($name);
    }
}
