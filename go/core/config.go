package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "Gitlab",
			"slug": "gitlab",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
			},
		},
		"options": map[string]any{
			"base": "https://gitlab.com",
			"auth": map[string]any{
				"prefix": "",
			},
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"api_entities_project_with_access": map[string]any{},
				"project": map[string]any{},
			},
		},
		"entity": map[string]any{
			"api_entities_project_with_access": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "allow_merge_on_skipped_pipeline",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "allow_pipeline_trigger_approve_deployment",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "analytics_access_level",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "approvals_before_merge",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "archived",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "auto_cancel_pending_pipelines",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "auto_devops_deploy_strategy",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "auto_devops_enabled",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "auto_duo_code_review_enabled",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "autoclose_referenced_issues",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "avatar_url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "build_git_strategy",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "build_timeout",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "builds_access_level",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "can_create_merge_request_in",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "ci_allow_fork_pipelines_to_run_in_parent_project",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "ci_config_path",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ci_default_git_depth",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "ci_delete_pipelines_in_seconds",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "ci_forward_deployment_enabled",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "ci_forward_deployment_rollback_allowed",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "ci_id_token_sub_claim_components",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "ci_job_token_scope_enabled",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "ci_pipeline_variables_minimum_override_role",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ci_push_repository_for_job_token_allowed",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "ci_restrict_pipeline_cancellation_role",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ci_separated_caches",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "compliance_frameworks",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "container_expiration_policy",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "container_registry_access_level",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "container_registry_enabled",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "container_registry_image_prefix",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "created_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "creator_id",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "custom_attributes",
						"short": "API_Entities_CustomAttribute model",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "default_branch",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "description",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "description_html",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "duo_remote_flows_enabled",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "emails_disabled",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "emails_enabled",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "empty_repo",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "enforce_auth_checks_on_uploads",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "environments_access_level",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "external_authorization_classification_label",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "feature_flags_access_level",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "forked_from_project",
						"short": "API_Entities_BasicProjectDetails model",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "forking_access_level",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "forks_count",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "group_runners_enabled",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "http_url_to_repo",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "import_error",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "import_status",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "import_type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "import_url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "infrastructure_access_level",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "issue_branch_template",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "issues_access_level",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "issues_enabled",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "issues_template",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "jobs_enabled",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "keep_latest_artifact",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "last_activity_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "lfs_enabled",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "license",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "license_url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "links",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "marked_for_deletion_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "marked_for_deletion_on",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "max_artifacts_size",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "merge_commit_template",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "merge_method",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "merge_pipelines_enabled",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "merge_request_title_regex",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "merge_request_title_regex_description",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "merge_requests_access_level",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "merge_requests_enabled",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "merge_requests_template",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "merge_trains_enabled",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "merge_trains_skip_train_allowed",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "mirror",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "mirror_overwrites_diverged_branches",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "mirror_trigger_builds",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "mirror_user_id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "model_experiments_access_level",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "model_registry_access_level",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "monitor_access_level",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "mr_default_target_self",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name_with_namespace",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "namespace",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "only_allow_merge_if_all_discussions_are_resolved",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "only_allow_merge_if_all_status_checks_passed",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "only_allow_merge_if_pipeline_succeeds",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "only_mirror_protected_branches",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "open_issues_count",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "owner",
						"short": "API_Entities_UserBasic model",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "package_registry_access_level",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "packages_enabled",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "pages_access_level",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "path",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "path_with_namespace",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "permissions",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "pre_receive_secret_detection_enabled",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "prevent_merge_without_jira_issue",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "printing_merge_request_link_enabled",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "public_jobs",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "readme_url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "releases_access_level",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "remove_source_branch_after_merge",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "repository_access_level",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "repository_object_format",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "repository_storage",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "request_access_enabled",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "requirements_access_level",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "requirements_enabled",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "resolve_outdated_diff_discussions",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "resource_group_default_process_mode",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "restrict_user_defined_variables",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "runner_token_expiration_interval",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "runners_token",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "secret_push_protection_enabled",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "security_and_compliance_access_level",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "security_and_compliance_enabled",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "service_desk_address",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "service_desk_enabled",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "shared_runners_enabled",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "shared_with_groups",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "show_diff_preview_in_email",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "snippets_access_level",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "snippets_enabled",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "spp_repository_pipeline_access",
						"short": "The spp_repository_pipeline_access setting is only visible if the security_orchestration_policies feature is available.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "squash_commit_template",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "squash_option",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ssh_url_to_repo",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "star_count",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "statistics",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "suggestion_commit_message",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "tag_list",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "topics",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "updated_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "visibility",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "warn_about_potentially_unwanted_characters",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "web_based_commit_signing_enabled",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "web_url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "wiki_access_level",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "wiki_enabled",
						"type": "`$BOOLEAN`",
					},
				},
				"name": "api_entities_project_with_access",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "license",
											"orig": "license",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "statistic",
											"orig": "statistic",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "with_custom_attribute",
											"orig": "with_custom_attribute",
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v4/projects/{id}",
								"parts": []any{
									"api",
									"v4",
									"projects",
									"{id}",
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"license",
										"statistic",
										"with_custom_attribute",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"project": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "allow_merge_on_skipped_pipeline",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "allow_pipeline_trigger_approve_deployment",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "analytics_access_level",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "approvals_before_merge",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "archived",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "auto_cancel_pending_pipelines",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "auto_devops_deploy_strategy",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "auto_devops_enabled",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "auto_duo_code_review_enabled",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "autoclose_referenced_issues",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "avatar_url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "build_git_strategy",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "build_timeout",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "builds_access_level",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "can_create_merge_request_in",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "ci_allow_fork_pipelines_to_run_in_parent_project",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "ci_config_path",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ci_default_git_depth",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "ci_delete_pipelines_in_seconds",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "ci_forward_deployment_enabled",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "ci_forward_deployment_rollback_allowed",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "ci_id_token_sub_claim_components",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "ci_job_token_scope_enabled",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "ci_pipeline_variables_minimum_override_role",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ci_push_repository_for_job_token_allowed",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "ci_restrict_pipeline_cancellation_role",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ci_separated_caches",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "compliance_frameworks",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "container_expiration_policy",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "container_registry_access_level",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "container_registry_enabled",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "container_registry_image_prefix",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "created_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "creator_id",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "custom_attributes",
						"short": "API_Entities_CustomAttribute model",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "default_branch",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "description",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "description_html",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "duo_remote_flows_enabled",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "emails_disabled",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "emails_enabled",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "empty_repo",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "enforce_auth_checks_on_uploads",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "environments_access_level",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "external_authorization_classification_label",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "feature_flags_access_level",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "forked_from_project",
						"short": "API_Entities_BasicProjectDetails model",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "forking_access_level",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "forks_count",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "group_runners_enabled",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "http_url_to_repo",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "import_error",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "import_status",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "import_type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "import_url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "infrastructure_access_level",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "issue_branch_template",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "issues_access_level",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "issues_enabled",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "issues_template",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "jobs_enabled",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "keep_latest_artifact",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "last_activity_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "lfs_enabled",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "license",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "license_url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "links",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "marked_for_deletion_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "marked_for_deletion_on",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "max_artifacts_size",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "merge_commit_template",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "merge_method",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "merge_pipelines_enabled",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "merge_request_title_regex",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "merge_request_title_regex_description",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "merge_requests_access_level",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "merge_requests_enabled",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "merge_requests_template",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "merge_trains_enabled",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "merge_trains_skip_train_allowed",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "mirror",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "mirror_overwrites_diverged_branches",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "mirror_trigger_builds",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "mirror_user_id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "model_experiments_access_level",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "model_registry_access_level",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "monitor_access_level",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "mr_default_target_self",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name_with_namespace",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "namespace",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "only_allow_merge_if_all_discussions_are_resolved",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "only_allow_merge_if_all_status_checks_passed",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "only_allow_merge_if_pipeline_succeeds",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "only_mirror_protected_branches",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "open_issues_count",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "owner",
						"short": "API_Entities_UserBasic model",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "package_registry_access_level",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "packages_enabled",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "pages_access_level",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "path",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "path_with_namespace",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "pre_receive_secret_detection_enabled",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "prevent_merge_without_jira_issue",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "printing_merge_request_link_enabled",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "public_jobs",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "readme_url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "releases_access_level",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "remove_source_branch_after_merge",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "repository_access_level",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "repository_object_format",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "repository_storage",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "request_access_enabled",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "requirements_access_level",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "requirements_enabled",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "resolve_outdated_diff_discussions",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "resource_group_default_process_mode",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "restrict_user_defined_variables",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "runner_token_expiration_interval",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "runners_token",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "secret_push_protection_enabled",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "security_and_compliance_access_level",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "security_and_compliance_enabled",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "service_desk_address",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "service_desk_enabled",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "shared_runners_enabled",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "shared_with_groups",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "show_diff_preview_in_email",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "snippets_access_level",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "snippets_enabled",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "spp_repository_pipeline_access",
						"short": "The spp_repository_pipeline_access setting is only visible if the security_orchestration_policies feature is available.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "squash_commit_template",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "squash_option",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ssh_url_to_repo",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "star_count",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "statistics",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "suggestion_commit_message",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "tag_list",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "topics",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "updated_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "visibility",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "warn_about_potentially_unwanted_characters",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "web_based_commit_signing_enabled",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "web_url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "wiki_access_level",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "wiki_enabled",
						"type": "`$BOOLEAN`",
					},
				},
				"name": "project",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "post_api_v4_project",
											"orig": "post_api_v4_project",
											"reqd": true,
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/api/v4/projects",
								"parts": []any{
									"api",
									"v4",
									"projects",
								},
								"select": map[string]any{
									"exist": []any{
										"post_api_v4_project",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "active",
											"orig": "active",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "archived",
											"orig": "archived",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "id_after",
											"orig": "id_after",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "id_before",
											"orig": "id_before",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "imported",
											"orig": "imported",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "include_hidden",
											"orig": "include_hidden",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "include_pending_delete",
											"orig": "include_pending_delete",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "last_activity_after",
											"orig": "last_activity_after",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "last_activity_before",
											"orig": "last_activity_before",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "marked_for_deletion_on",
											"orig": "marked_for_deletion_on",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "membership",
											"orig": "membership",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "min_access_level",
											"orig": "min_access_level",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "order_by",
											"orig": "order_by",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "owned",
											"orig": "owned",
											"type": "`$ANY`",
										},
										map[string]any{
											"example": 1,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 20,
											"kind": "query",
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "repository_checksum_failed",
											"orig": "repository_checksum_failed",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "repository_storage",
											"orig": "repository_storage",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "search",
											"orig": "search",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "search_namespace",
											"orig": "search_namespace",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "simple",
											"orig": "simple",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "sort",
											"orig": "sort",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "starred",
											"orig": "starred",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "statistic",
											"orig": "statistic",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "topic",
											"orig": "topic",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "topic_id",
											"orig": "topic_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "updated_after",
											"orig": "updated_after",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "updated_before",
											"orig": "updated_before",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "visibility",
											"orig": "visibility",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "wiki_checksum_failed",
											"orig": "wiki_checksum_failed",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "with_custom_attribute",
											"orig": "with_custom_attribute",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "with_issues_enabled",
											"orig": "with_issues_enabled",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "with_merge_requests_enabled",
											"orig": "with_merge_requests_enabled",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "with_programming_language",
											"orig": "with_programming_language",
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v4/projects",
								"parts": []any{
									"api",
									"v4",
									"projects",
								},
								"select": map[string]any{
									"exist": []any{
										"active",
										"archived",
										"id_after",
										"id_before",
										"imported",
										"include_hidden",
										"include_pending_delete",
										"last_activity_after",
										"last_activity_before",
										"marked_for_deletion_on",
										"membership",
										"min_access_level",
										"order_by",
										"owned",
										"page",
										"per_page",
										"repository_checksum_failed",
										"repository_storage",
										"search",
										"search_namespace",
										"simple",
										"sort",
										"starred",
										"statistic",
										"topic",
										"topic_id",
										"updated_after",
										"updated_before",
										"visibility",
										"wiki_checksum_failed",
										"with_custom_attribute",
										"with_issues_enabled",
										"with_merge_requests_enabled",
										"with_programming_language",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/api/v4/projects/{id}",
								"parts": []any{
									"api",
									"v4",
									"projects",
									"{id}",
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "put_api_v4_projects_id",
											"orig": "put_api_v4_projects_id",
											"reqd": true,
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/api/v4/projects/{id}",
								"parts": []any{
									"api",
									"v4",
									"projects",
									"{id}",
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"put_api_v4_projects_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
