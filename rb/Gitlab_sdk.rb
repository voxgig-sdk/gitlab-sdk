# Gitlab SDK

require_relative 'utility/struct/voxgig_struct'
require_relative 'core/utility_type'
require_relative 'core/spec'
require_relative 'core/helpers'

# Load utility registration
require_relative 'utility/register'

# Load config and features
require_relative 'config'
require_relative 'feature/base_feature'
require_relative 'features'

# Load typed models (Struct value objects).
require_relative 'Gitlab_types'


class GitlabSDK
  attr_accessor :mode, :features, :options

  def initialize(options = {})
    @mode = "live"
    @features = []
    @options = nil

    utility = GitlabUtility.new
    @_utility = utility

    config = GitlabConfig.make_config

    @_rootctx = utility.make_context.call({
      "client" => self,
      "utility" => utility,
      "config" => config,
      "options" => options || {},
      "shared" => {},
    }, nil)

    @options = utility.make_options.call(@_rootctx)

    if VoxgigStruct.getpath(@options, "feature.test.active") == true
      @mode = "test"
    end

    @_rootctx.options = @options

    # Add features from config.
    feature_opts = GitlabHelpers.to_map(VoxgigStruct.getprop(@options, "feature"))
    if feature_opts
      items = VoxgigStruct.items(feature_opts)
      if items
        items.each do |item|
          fname = item[0]
          fopts = GitlabHelpers.to_map(item[1])
          if fopts && fopts["active"] == true
            utility.feature_add.call(@_rootctx, GitlabFeatures.make_feature(fname))
          end
        end
      end
    end

    # Add extension features.
    extend_val = VoxgigStruct.getprop(@options, "extend")
    if extend_val.is_a?(Array)
      extend_val.each do |f|
        if f.respond_to?(:get_name)
          utility.feature_add.call(@_rootctx, f)
        end
      end
    end

    # Initialize features.
    @features.each do |f|
      utility.feature_init.call(@_rootctx, f)
    end

    utility.feature_hook.call(@_rootctx, "PostConstruct")
  end

  def options_map
    out = VoxgigStruct.clone(@options)
    out.is_a?(Hash) ? out : {}
  end

  def get_utility
    GitlabUtility.copy(@_utility)
  end

  def get_root_ctx
    @_rootctx
  end

  def prepare(fetchargs = {})
    utility = @_utility
    fetchargs ||= {}

    ctrl = GitlabHelpers.to_map(VoxgigStruct.getprop(fetchargs, "ctrl")) || {}

    ctx = utility.make_context.call({
      "opname" => "prepare",
      "ctrl" => ctrl,
    }, @_rootctx)

    opts = @options
    path = VoxgigStruct.getprop(fetchargs, "path") || ""
    path = "" unless path.is_a?(String)
    method_val = VoxgigStruct.getprop(fetchargs, "method") || "GET"
    method_val = "GET" unless method_val.is_a?(String)
    params = GitlabHelpers.to_map(VoxgigStruct.getprop(fetchargs, "params")) || {}
    query = GitlabHelpers.to_map(VoxgigStruct.getprop(fetchargs, "query")) || {}
    headers = utility.prepare_headers.call(ctx)

    base = VoxgigStruct.getprop(opts, "base") || ""
    base = "" unless base.is_a?(String)
    prefix = VoxgigStruct.getprop(opts, "prefix") || ""
    prefix = "" unless prefix.is_a?(String)
    suffix = VoxgigStruct.getprop(opts, "suffix") || ""
    suffix = "" unless suffix.is_a?(String)

    ctx.spec = GitlabSpec.new({
      "base" => base, "prefix" => prefix, "suffix" => suffix,
      "path" => path, "method" => method_val,
      "params" => params, "query" => query, "headers" => headers,
      "body" => VoxgigStruct.getprop(fetchargs, "body"),
      "step" => "start",
    })

    # Merge user-provided headers.
    uh = VoxgigStruct.getprop(fetchargs, "headers")
    if uh.is_a?(Hash)
      uh.each { |k, v| ctx.spec.headers[k] = v }
    end

    _, err = utility.prepare_auth.call(ctx)
    raise err if err

    # make_fetch_def returns a (fetchdef, err) tuple; destructure it and
    # return just the fetchdef Hash (raising on error) so callers — including
    # direct(), which indexes fetchdef["url"] — receive a Hash, mirroring the
    # ts/py prepare().
    fetchdef, fd_err = utility.make_fetch_def.call(ctx)
    raise fd_err if fd_err

    fetchdef
  end

  def direct(fetchargs = {})
    utility = @_utility

    # direct() is the raw-HTTP escape hatch: it always returns a result hash
    # ({ "ok" => ..., ... }) and never raises. prepare() raises on error, so
    # trap that and surface it in the hash.
    begin
      fetchdef = prepare(fetchargs)
    rescue GitlabError => err
      return { "ok" => false, "err" => err }
    end

    fetchargs ||= {}
    ctrl = GitlabHelpers.to_map(VoxgigStruct.getprop(fetchargs, "ctrl")) || {}

    ctx = utility.make_context.call({
      "opname" => "direct",
      "ctrl" => ctrl,
    }, @_rootctx)

    url = fetchdef["url"] || ""
    fetched, fetch_err = utility.fetcher.call(ctx, url, fetchdef)

    return { "ok" => false, "err" => fetch_err } if fetch_err

    if fetched.nil?
      return {
        "ok" => false,
        "err" => ctx.make_error("direct_no_response", "response: undefined"),
      }
    end

    if fetched.is_a?(Hash)
      status = GitlabHelpers.to_int(VoxgigStruct.getprop(fetched, "status"))
      headers = VoxgigStruct.getprop(fetched, "headers") || {}

      # No-body responses (204, 304) and explicit zero content-length must
      # skip JSON parsing — calling json() on an empty body errors.
      content_length = headers.is_a?(Hash) ? headers["content-length"] : nil
      no_body = status == 204 || status == 304 || content_length.to_s == "0"

      json_data = nil
      unless no_body
        jf = VoxgigStruct.getprop(fetched, "json")
        if jf.is_a?(Proc)
          begin
            json_data = jf.call
          rescue StandardError
            # Non-JSON body — leave data nil, keep status/headers.
            json_data = nil
          end
        end
      end

      return {
        "ok" => status >= 200 && status < 300,
        "status" => status,
        "headers" => headers,
        "data" => json_data,
      }
    end

    return {
      "ok" => false,
      "err" => ctx.make_error("direct_invalid", "invalid response type"),
    }
  end


  # Canonical facade: client.AccessRequest.list / client.AccessRequest.load({ "id" => ... })
  def AccessRequest(data = nil)
    require_relative 'entity/access_request_entity'
    AccessRequestEntity.new(self, data)
  end


  # Canonical facade: client.AlertManagement.list / client.AlertManagement.load({ "id" => ... })
  def AlertManagement(data = nil)
    require_relative 'entity/alert_management_entity'
    AlertManagementEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesAccessRequester.list / client.ApiEntitiesAccessRequester.load({ "id" => ... })
  def ApiEntitiesAccessRequester(data = nil)
    require_relative 'entity/api_entities_access_requester_entity'
    ApiEntitiesAccessRequesterEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesAppearance.list / client.ApiEntitiesAppearance.load({ "id" => ... })
  def ApiEntitiesAppearance(data = nil)
    require_relative 'entity/api_entities_appearance_entity'
    ApiEntitiesAppearanceEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesApplication.list / client.ApiEntitiesApplication.load({ "id" => ... })
  def ApiEntitiesApplication(data = nil)
    require_relative 'entity/api_entities_application_entity'
    ApiEntitiesApplicationEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesApplicationStatistic.list / client.ApiEntitiesApplicationStatistic.load({ "id" => ... })
  def ApiEntitiesApplicationStatistic(data = nil)
    require_relative 'entity/api_entities_application_statistic_entity'
    ApiEntitiesApplicationStatisticEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesApplicationWithSecret.list / client.ApiEntitiesApplicationWithSecret.load({ "id" => ... })
  def ApiEntitiesApplicationWithSecret(data = nil)
    require_relative 'entity/api_entities_application_with_secret_entity'
    ApiEntitiesApplicationWithSecretEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesAvatar.list / client.ApiEntitiesAvatar.load({ "id" => ... })
  def ApiEntitiesAvatar(data = nil)
    require_relative 'entity/api_entities_avatar_entity'
    ApiEntitiesAvatarEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesAwardEmoji.list / client.ApiEntitiesAwardEmoji.load({ "id" => ... })
  def ApiEntitiesAwardEmoji(data = nil)
    require_relative 'entity/api_entities_award_emoji_entity'
    ApiEntitiesAwardEmojiEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesBadge.list / client.ApiEntitiesBadge.load({ "id" => ... })
  def ApiEntitiesBadge(data = nil)
    require_relative 'entity/api_entities_badge_entity'
    ApiEntitiesBadgeEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesBasicBadgeDetail.list / client.ApiEntitiesBasicBadgeDetail.load({ "id" => ... })
  def ApiEntitiesBasicBadgeDetail(data = nil)
    require_relative 'entity/api_entities_basic_badge_detail_entity'
    ApiEntitiesBasicBadgeDetailEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesBasicGroupDetail.list / client.ApiEntitiesBasicGroupDetail.load({ "id" => ... })
  def ApiEntitiesBasicGroupDetail(data = nil)
    require_relative 'entity/api_entities_basic_group_detail_entity'
    ApiEntitiesBasicGroupDetailEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesBasicProjectDetail.list / client.ApiEntitiesBasicProjectDetail.load({ "id" => ... })
  def ApiEntitiesBasicProjectDetail(data = nil)
    require_relative 'entity/api_entities_basic_project_detail_entity'
    ApiEntitiesBasicProjectDetailEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesBasicRef.list / client.ApiEntitiesBasicRef.load({ "id" => ... })
  def ApiEntitiesBasicRef(data = nil)
    require_relative 'entity/api_entities_basic_ref_entity'
    ApiEntitiesBasicRefEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesBasicSuccess.list / client.ApiEntitiesBasicSuccess.load({ "id" => ... })
  def ApiEntitiesBasicSuccess(data = nil)
    require_relative 'entity/api_entities_basic_success_entity'
    ApiEntitiesBasicSuccessEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesBatchedBackgroundMigration.list / client.ApiEntitiesBatchedBackgroundMigration.load({ "id" => ... })
  def ApiEntitiesBatchedBackgroundMigration(data = nil)
    require_relative 'entity/api_entities_batched_background_migration_entity'
    ApiEntitiesBatchedBackgroundMigrationEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesBranch.list / client.ApiEntitiesBranch.load({ "id" => ... })
  def ApiEntitiesBranch(data = nil)
    require_relative 'entity/api_entities_branch_entity'
    ApiEntitiesBranchEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesBulkImport.list / client.ApiEntitiesBulkImport.load({ "id" => ... })
  def ApiEntitiesBulkImport(data = nil)
    require_relative 'entity/api_entities_bulk_import_entity'
    ApiEntitiesBulkImportEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesBulkImportsEntityFailure.list / client.ApiEntitiesBulkImportsEntityFailure.load({ "id" => ... })
  def ApiEntitiesBulkImportsEntityFailure(data = nil)
    require_relative 'entity/api_entities_bulk_imports_entity_failure_entity'
    ApiEntitiesBulkImportsEntityFailureEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesBulkImportsExportStatus.list / client.ApiEntitiesBulkImportsExportStatus.load({ "id" => ... })
  def ApiEntitiesBulkImportsExportStatus(data = nil)
    require_relative 'entity/api_entities_bulk_imports_export_status_entity'
    ApiEntitiesBulkImportsExportStatusEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesChangelog.list / client.ApiEntitiesChangelog.load({ "id" => ... })
  def ApiEntitiesChangelog(data = nil)
    require_relative 'entity/api_entities_changelog_entity'
    ApiEntitiesChangelogEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesCiBridge.list / client.ApiEntitiesCiBridge.load({ "id" => ... })
  def ApiEntitiesCiBridge(data = nil)
    require_relative 'entity/api_entities_ci_bridge_entity'
    ApiEntitiesCiBridgeEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesCiCatalogResourcesVersion.list / client.ApiEntitiesCiCatalogResourcesVersion.load({ "id" => ... })
  def ApiEntitiesCiCatalogResourcesVersion(data = nil)
    require_relative 'entity/api_entities_ci_catalog_resources_version_entity'
    ApiEntitiesCiCatalogResourcesVersionEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesCiJob.list / client.ApiEntitiesCiJob.load({ "id" => ... })
  def ApiEntitiesCiJob(data = nil)
    require_relative 'entity/api_entities_ci_job_entity'
    ApiEntitiesCiJobEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesCiJobBasic.list / client.ApiEntitiesCiJobBasic.load({ "id" => ... })
  def ApiEntitiesCiJobBasic(data = nil)
    require_relative 'entity/api_entities_ci_job_basic_entity'
    ApiEntitiesCiJobBasicEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesCiJobBasicWithProject.list / client.ApiEntitiesCiJobBasicWithProject.load({ "id" => ... })
  def ApiEntitiesCiJobBasicWithProject(data = nil)
    require_relative 'entity/api_entities_ci_job_basic_with_project_entity'
    ApiEntitiesCiJobBasicWithProjectEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesCiLintResult.list / client.ApiEntitiesCiLintResult.load({ "id" => ... })
  def ApiEntitiesCiLintResult(data = nil)
    require_relative 'entity/api_entities_ci_lint_result_entity'
    ApiEntitiesCiLintResultEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesCiPipeline.list / client.ApiEntitiesCiPipeline.load({ "id" => ... })
  def ApiEntitiesCiPipeline(data = nil)
    require_relative 'entity/api_entities_ci_pipeline_entity'
    ApiEntitiesCiPipelineEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesCiPipelineBasic.list / client.ApiEntitiesCiPipelineBasic.load({ "id" => ... })
  def ApiEntitiesCiPipelineBasic(data = nil)
    require_relative 'entity/api_entities_ci_pipeline_basic_entity'
    ApiEntitiesCiPipelineBasicEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesCiPipelineSchedule.list / client.ApiEntitiesCiPipelineSchedule.load({ "id" => ... })
  def ApiEntitiesCiPipelineSchedule(data = nil)
    require_relative 'entity/api_entities_ci_pipeline_schedule_entity'
    ApiEntitiesCiPipelineScheduleEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesCiPipelineScheduleDetail.list / client.ApiEntitiesCiPipelineScheduleDetail.load({ "id" => ... })
  def ApiEntitiesCiPipelineScheduleDetail(data = nil)
    require_relative 'entity/api_entities_ci_pipeline_schedule_detail_entity'
    ApiEntitiesCiPipelineScheduleDetailEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesCiResetTokenResult.list / client.ApiEntitiesCiResetTokenResult.load({ "id" => ... })
  def ApiEntitiesCiResetTokenResult(data = nil)
    require_relative 'entity/api_entities_ci_reset_token_result_entity'
    ApiEntitiesCiResetTokenResultEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesCiResourceGroup.list / client.ApiEntitiesCiResourceGroup.load({ "id" => ... })
  def ApiEntitiesCiResourceGroup(data = nil)
    require_relative 'entity/api_entities_ci_resource_group_entity'
    ApiEntitiesCiResourceGroupEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesCiRunner.list / client.ApiEntitiesCiRunner.load({ "id" => ... })
  def ApiEntitiesCiRunner(data = nil)
    require_relative 'entity/api_entities_ci_runner_entity'
    ApiEntitiesCiRunnerEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesCiRunnerDetail.list / client.ApiEntitiesCiRunnerDetail.load({ "id" => ... })
  def ApiEntitiesCiRunnerDetail(data = nil)
    require_relative 'entity/api_entities_ci_runner_detail_entity'
    ApiEntitiesCiRunnerDetailEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesCiRunnerManager.list / client.ApiEntitiesCiRunnerManager.load({ "id" => ... })
  def ApiEntitiesCiRunnerManager(data = nil)
    require_relative 'entity/api_entities_ci_runner_manager_entity'
    ApiEntitiesCiRunnerManagerEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesCiRunnerRegistrationDetail.list / client.ApiEntitiesCiRunnerRegistrationDetail.load({ "id" => ... })
  def ApiEntitiesCiRunnerRegistrationDetail(data = nil)
    require_relative 'entity/api_entities_ci_runner_registration_detail_entity'
    ApiEntitiesCiRunnerRegistrationDetailEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesCiSecureFile.list / client.ApiEntitiesCiSecureFile.load({ "id" => ... })
  def ApiEntitiesCiSecureFile(data = nil)
    require_relative 'entity/api_entities_ci_secure_file_entity'
    ApiEntitiesCiSecureFileEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesCiVariable.list / client.ApiEntitiesCiVariable.load({ "id" => ... })
  def ApiEntitiesCiVariable(data = nil)
    require_relative 'entity/api_entities_ci_variable_entity'
    ApiEntitiesCiVariableEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesCluster.list / client.ApiEntitiesCluster.load({ "id" => ... })
  def ApiEntitiesCluster(data = nil)
    require_relative 'entity/api_entities_cluster_entity'
    ApiEntitiesClusterEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesClusterGroup.list / client.ApiEntitiesClusterGroup.load({ "id" => ... })
  def ApiEntitiesClusterGroup(data = nil)
    require_relative 'entity/api_entities_cluster_group_entity'
    ApiEntitiesClusterGroupEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesClusterProject.list / client.ApiEntitiesClusterProject.load({ "id" => ... })
  def ApiEntitiesClusterProject(data = nil)
    require_relative 'entity/api_entities_cluster_project_entity'
    ApiEntitiesClusterProjectEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesClustersAgent.list / client.ApiEntitiesClustersAgent.load({ "id" => ... })
  def ApiEntitiesClustersAgent(data = nil)
    require_relative 'entity/api_entities_clusters_agent_entity'
    ApiEntitiesClustersAgentEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesClustersAgentToken.list / client.ApiEntitiesClustersAgentToken.load({ "id" => ... })
  def ApiEntitiesClustersAgentToken(data = nil)
    require_relative 'entity/api_entities_clusters_agent_token_entity'
    ApiEntitiesClustersAgentTokenEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesClustersAgentTokenBasic.list / client.ApiEntitiesClustersAgentTokenBasic.load({ "id" => ... })
  def ApiEntitiesClustersAgentTokenBasic(data = nil)
    require_relative 'entity/api_entities_clusters_agent_token_basic_entity'
    ApiEntitiesClustersAgentTokenBasicEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesClustersAgentTokenWithToken.list / client.ApiEntitiesClustersAgentTokenWithToken.load({ "id" => ... })
  def ApiEntitiesClustersAgentTokenWithToken(data = nil)
    require_relative 'entity/api_entities_clusters_agent_token_with_token_entity'
    ApiEntitiesClustersAgentTokenWithTokenEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesCommit.list / client.ApiEntitiesCommit.load({ "id" => ... })
  def ApiEntitiesCommit(data = nil)
    require_relative 'entity/api_entities_commit_entity'
    ApiEntitiesCommitEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesCommitDetail.list / client.ApiEntitiesCommitDetail.load({ "id" => ... })
  def ApiEntitiesCommitDetail(data = nil)
    require_relative 'entity/api_entities_commit_detail_entity'
    ApiEntitiesCommitDetailEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesCommitNote.list / client.ApiEntitiesCommitNote.load({ "id" => ... })
  def ApiEntitiesCommitNote(data = nil)
    require_relative 'entity/api_entities_commit_note_entity'
    ApiEntitiesCommitNoteEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesCommitSequence.list / client.ApiEntitiesCommitSequence.load({ "id" => ... })
  def ApiEntitiesCommitSequence(data = nil)
    require_relative 'entity/api_entities_commit_sequence_entity'
    ApiEntitiesCommitSequenceEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesCommitSignature.list / client.ApiEntitiesCommitSignature.load({ "id" => ... })
  def ApiEntitiesCommitSignature(data = nil)
    require_relative 'entity/api_entities_commit_signature_entity'
    ApiEntitiesCommitSignatureEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesCommitStatus.list / client.ApiEntitiesCommitStatus.load({ "id" => ... })
  def ApiEntitiesCommitStatus(data = nil)
    require_relative 'entity/api_entities_commit_status_entity'
    ApiEntitiesCommitStatusEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesCompare.list / client.ApiEntitiesCompare.load({ "id" => ... })
  def ApiEntitiesCompare(data = nil)
    require_relative 'entity/api_entities_compare_entity'
    ApiEntitiesCompareEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesContainerRegistryRepository.list / client.ApiEntitiesContainerRegistryRepository.load({ "id" => ... })
  def ApiEntitiesContainerRegistryRepository(data = nil)
    require_relative 'entity/api_entities_container_registry_repository_entity'
    ApiEntitiesContainerRegistryRepositoryEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesContainerRegistryTag.list / client.ApiEntitiesContainerRegistryTag.load({ "id" => ... })
  def ApiEntitiesContainerRegistryTag(data = nil)
    require_relative 'entity/api_entities_container_registry_tag_entity'
    ApiEntitiesContainerRegistryTagEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesContainerRegistryTagDetail.list / client.ApiEntitiesContainerRegistryTagDetail.load({ "id" => ... })
  def ApiEntitiesContainerRegistryTagDetail(data = nil)
    require_relative 'entity/api_entities_container_registry_tag_detail_entity'
    ApiEntitiesContainerRegistryTagDetailEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesContributor.list / client.ApiEntitiesContributor.load({ "id" => ... })
  def ApiEntitiesContributor(data = nil)
    require_relative 'entity/api_entities_contributor_entity'
    ApiEntitiesContributorEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesDeployKey.list / client.ApiEntitiesDeployKey.load({ "id" => ... })
  def ApiEntitiesDeployKey(data = nil)
    require_relative 'entity/api_entities_deploy_key_entity'
    ApiEntitiesDeployKeyEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesDeployKeysProject.list / client.ApiEntitiesDeployKeysProject.load({ "id" => ... })
  def ApiEntitiesDeployKeysProject(data = nil)
    require_relative 'entity/api_entities_deploy_keys_project_entity'
    ApiEntitiesDeployKeysProjectEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesDeployToken.list / client.ApiEntitiesDeployToken.load({ "id" => ... })
  def ApiEntitiesDeployToken(data = nil)
    require_relative 'entity/api_entities_deploy_token_entity'
    ApiEntitiesDeployTokenEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesDeployTokenWithToken.list / client.ApiEntitiesDeployTokenWithToken.load({ "id" => ... })
  def ApiEntitiesDeployTokenWithToken(data = nil)
    require_relative 'entity/api_entities_deploy_token_with_token_entity'
    ApiEntitiesDeployTokenWithTokenEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesDeployment.list / client.ApiEntitiesDeployment.load({ "id" => ... })
  def ApiEntitiesDeployment(data = nil)
    require_relative 'entity/api_entities_deployment_entity'
    ApiEntitiesDeploymentEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesDeploymentExtended.list / client.ApiEntitiesDeploymentExtended.load({ "id" => ... })
  def ApiEntitiesDeploymentExtended(data = nil)
    require_relative 'entity/api_entities_deployment_extended_entity'
    ApiEntitiesDeploymentExtendedEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesDeploymentsApproval.list / client.ApiEntitiesDeploymentsApproval.load({ "id" => ... })
  def ApiEntitiesDeploymentsApproval(data = nil)
    require_relative 'entity/api_entities_deployments_approval_entity'
    ApiEntitiesDeploymentsApprovalEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesDictionaryTable.list / client.ApiEntitiesDictionaryTable.load({ "id" => ... })
  def ApiEntitiesDictionaryTable(data = nil)
    require_relative 'entity/api_entities_dictionary_table_entity'
    ApiEntitiesDictionaryTableEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesDiff.list / client.ApiEntitiesDiff.load({ "id" => ... })
  def ApiEntitiesDiff(data = nil)
    require_relative 'entity/api_entities_diff_entity'
    ApiEntitiesDiffEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesDiscoveredCluster.list / client.ApiEntitiesDiscoveredCluster.load({ "id" => ... })
  def ApiEntitiesDiscoveredCluster(data = nil)
    require_relative 'entity/api_entities_discovered_cluster_entity'
    ApiEntitiesDiscoveredClusterEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesDraftNote.list / client.ApiEntitiesDraftNote.load({ "id" => ... })
  def ApiEntitiesDraftNote(data = nil)
    require_relative 'entity/api_entities_draft_note_entity'
    ApiEntitiesDraftNoteEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesEnvironment.list / client.ApiEntitiesEnvironment.load({ "id" => ... })
  def ApiEntitiesEnvironment(data = nil)
    require_relative 'entity/api_entities_environment_entity'
    ApiEntitiesEnvironmentEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesErrorTrackingClientKey.list / client.ApiEntitiesErrorTrackingClientKey.load({ "id" => ... })
  def ApiEntitiesErrorTrackingClientKey(data = nil)
    require_relative 'entity/api_entities_error_tracking_client_key_entity'
    ApiEntitiesErrorTrackingClientKeyEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesErrorTrackingProjectSetting.list / client.ApiEntitiesErrorTrackingProjectSetting.load({ "id" => ... })
  def ApiEntitiesErrorTrackingProjectSetting(data = nil)
    require_relative 'entity/api_entities_error_tracking_project_setting_entity'
    ApiEntitiesErrorTrackingProjectSettingEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesEvent.list / client.ApiEntitiesEvent.load({ "id" => ... })
  def ApiEntitiesEvent(data = nil)
    require_relative 'entity/api_entities_event_entity'
    ApiEntitiesEventEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesFeature.list / client.ApiEntitiesFeature.load({ "id" => ... })
  def ApiEntitiesFeature(data = nil)
    require_relative 'entity/api_entities_feature_entity'
    ApiEntitiesFeatureEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesFeatureDefinition.list / client.ApiEntitiesFeatureDefinition.load({ "id" => ... })
  def ApiEntitiesFeatureDefinition(data = nil)
    require_relative 'entity/api_entities_feature_definition_entity'
    ApiEntitiesFeatureDefinitionEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesFeatureFlag.list / client.ApiEntitiesFeatureFlag.load({ "id" => ... })
  def ApiEntitiesFeatureFlag(data = nil)
    require_relative 'entity/api_entities_feature_flag_entity'
    ApiEntitiesFeatureFlagEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesFeatureFlagUserList.list / client.ApiEntitiesFeatureFlagUserList.load({ "id" => ... })
  def ApiEntitiesFeatureFlagUserList(data = nil)
    require_relative 'entity/api_entities_feature_flag_user_list_entity'
    ApiEntitiesFeatureFlagUserListEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesFreezePeriod.list / client.ApiEntitiesFreezePeriod.load({ "id" => ... })
  def ApiEntitiesFreezePeriod(data = nil)
    require_relative 'entity/api_entities_freeze_period_entity'
    ApiEntitiesFreezePeriodEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesGitlabSubscription.list / client.ApiEntitiesGitlabSubscription.load({ "id" => ... })
  def ApiEntitiesGitlabSubscription(data = nil)
    require_relative 'entity/api_entities_gitlab_subscription_entity'
    ApiEntitiesGitlabSubscriptionEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesGoModuleVersion.list / client.ApiEntitiesGoModuleVersion.load({ "id" => ... })
  def ApiEntitiesGoModuleVersion(data = nil)
    require_relative 'entity/api_entities_go_module_version_entity'
    ApiEntitiesGoModuleVersionEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesGroup.list / client.ApiEntitiesGroup.load({ "id" => ... })
  def ApiEntitiesGroup(data = nil)
    require_relative 'entity/api_entities_group_entity'
    ApiEntitiesGroupEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesGroupDetail.list / client.ApiEntitiesGroupDetail.load({ "id" => ... })
  def ApiEntitiesGroupDetail(data = nil)
    require_relative 'entity/api_entities_group_detail_entity'
    ApiEntitiesGroupDetailEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesHook.list / client.ApiEntitiesHook.load({ "id" => ... })
  def ApiEntitiesHook(data = nil)
    require_relative 'entity/api_entities_hook_entity'
    ApiEntitiesHookEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesIntegration.list / client.ApiEntitiesIntegration.load({ "id" => ... })
  def ApiEntitiesIntegration(data = nil)
    require_relative 'entity/api_entities_integration_entity'
    ApiEntitiesIntegrationEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesIntegrationBasic.list / client.ApiEntitiesIntegrationBasic.load({ "id" => ... })
  def ApiEntitiesIntegrationBasic(data = nil)
    require_relative 'entity/api_entities_integration_basic_entity'
    ApiEntitiesIntegrationBasicEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesInvitation.list / client.ApiEntitiesInvitation.load({ "id" => ... })
  def ApiEntitiesInvitation(data = nil)
    require_relative 'entity/api_entities_invitation_entity'
    ApiEntitiesInvitationEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesIssuableTimeStat.list / client.ApiEntitiesIssuableTimeStat.load({ "id" => ... })
  def ApiEntitiesIssuableTimeStat(data = nil)
    require_relative 'entity/api_entities_issuable_time_stat_entity'
    ApiEntitiesIssuableTimeStatEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesIssue.list / client.ApiEntitiesIssue.load({ "id" => ... })
  def ApiEntitiesIssue(data = nil)
    require_relative 'entity/api_entities_issue_entity'
    ApiEntitiesIssueEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesIssueLink.list / client.ApiEntitiesIssueLink.load({ "id" => ... })
  def ApiEntitiesIssueLink(data = nil)
    require_relative 'entity/api_entities_issue_link_entity'
    ApiEntitiesIssueLinkEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesLicense.list / client.ApiEntitiesLicense.load({ "id" => ... })
  def ApiEntitiesLicense(data = nil)
    require_relative 'entity/api_entities_license_entity'
    ApiEntitiesLicenseEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesMarkdown.list / client.ApiEntitiesMarkdown.load({ "id" => ... })
  def ApiEntitiesMarkdown(data = nil)
    require_relative 'entity/api_entities_markdown_entity'
    ApiEntitiesMarkdownEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesMarkdownUploadAdmin.list / client.ApiEntitiesMarkdownUploadAdmin.load({ "id" => ... })
  def ApiEntitiesMarkdownUploadAdmin(data = nil)
    require_relative 'entity/api_entities_markdown_upload_admin_entity'
    ApiEntitiesMarkdownUploadAdminEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesMember.list / client.ApiEntitiesMember.load({ "id" => ... })
  def ApiEntitiesMember(data = nil)
    require_relative 'entity/api_entities_member_entity'
    ApiEntitiesMemberEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesMerge.list / client.ApiEntitiesMerge.load({ "id" => ... })
  def ApiEntitiesMerge(data = nil)
    require_relative 'entity/api_entities_merge_entity'
    ApiEntitiesMergeEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesMergeRequestApproval.list / client.ApiEntitiesMergeRequestApproval.load({ "id" => ... })
  def ApiEntitiesMergeRequestApproval(data = nil)
    require_relative 'entity/api_entities_merge_request_approval_entity'
    ApiEntitiesMergeRequestApprovalEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesMergeRequestBasic.list / client.ApiEntitiesMergeRequestBasic.load({ "id" => ... })
  def ApiEntitiesMergeRequestBasic(data = nil)
    require_relative 'entity/api_entities_merge_request_basic_entity'
    ApiEntitiesMergeRequestBasicEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesMergeRequestChange.list / client.ApiEntitiesMergeRequestChange.load({ "id" => ... })
  def ApiEntitiesMergeRequestChange(data = nil)
    require_relative 'entity/api_entities_merge_request_change_entity'
    ApiEntitiesMergeRequestChangeEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesMergeRequestDiff.list / client.ApiEntitiesMergeRequestDiff.load({ "id" => ... })
  def ApiEntitiesMergeRequestDiff(data = nil)
    require_relative 'entity/api_entities_merge_request_diff_entity'
    ApiEntitiesMergeRequestDiffEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesMergeRequestDiffFull.list / client.ApiEntitiesMergeRequestDiffFull.load({ "id" => ... })
  def ApiEntitiesMergeRequestDiffFull(data = nil)
    require_relative 'entity/api_entities_merge_request_diff_full_entity'
    ApiEntitiesMergeRequestDiffFullEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesMergeRequestReviewer.list / client.ApiEntitiesMergeRequestReviewer.load({ "id" => ... })
  def ApiEntitiesMergeRequestReviewer(data = nil)
    require_relative 'entity/api_entities_merge_request_reviewer_entity'
    ApiEntitiesMergeRequestReviewerEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesMetricImage.list / client.ApiEntitiesMetricImage.load({ "id" => ... })
  def ApiEntitiesMetricImage(data = nil)
    require_relative 'entity/api_entities_metric_image_entity'
    ApiEntitiesMetricImageEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesMrNote.list / client.ApiEntitiesMrNote.load({ "id" => ... })
  def ApiEntitiesMrNote(data = nil)
    require_relative 'entity/api_entities_mr_note_entity'
    ApiEntitiesMrNoteEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesNamespace.list / client.ApiEntitiesNamespace.load({ "id" => ... })
  def ApiEntitiesNamespace(data = nil)
    require_relative 'entity/api_entities_namespace_entity'
    ApiEntitiesNamespaceEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesNamespaceExistence.list / client.ApiEntitiesNamespaceExistence.load({ "id" => ... })
  def ApiEntitiesNamespaceExistence(data = nil)
    require_relative 'entity/api_entities_namespace_existence_entity'
    ApiEntitiesNamespaceExistenceEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesNamespacesStorageLimitExclusion.list / client.ApiEntitiesNamespacesStorageLimitExclusion.load({ "id" => ... })
  def ApiEntitiesNamespacesStorageLimitExclusion(data = nil)
    require_relative 'entity/api_entities_namespaces_storage_limit_exclusion_entity'
    ApiEntitiesNamespacesStorageLimitExclusionEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesNpmPackage.list / client.ApiEntitiesNpmPackage.load({ "id" => ... })
  def ApiEntitiesNpmPackage(data = nil)
    require_relative 'entity/api_entities_npm_package_entity'
    ApiEntitiesNpmPackageEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesNpmPackageTag.list / client.ApiEntitiesNpmPackageTag.load({ "id" => ... })
  def ApiEntitiesNpmPackageTag(data = nil)
    require_relative 'entity/api_entities_npm_package_tag_entity'
    ApiEntitiesNpmPackageTagEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesNugetPackagesVersion.list / client.ApiEntitiesNugetPackagesVersion.load({ "id" => ... })
  def ApiEntitiesNugetPackagesVersion(data = nil)
    require_relative 'entity/api_entities_nuget_packages_version_entity'
    ApiEntitiesNugetPackagesVersionEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesNugetSearchResult.list / client.ApiEntitiesNugetSearchResult.load({ "id" => ... })
  def ApiEntitiesNugetSearchResult(data = nil)
    require_relative 'entity/api_entities_nuget_search_result_entity'
    ApiEntitiesNugetSearchResultEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesNugetServiceIndex.list / client.ApiEntitiesNugetServiceIndex.load({ "id" => ... })
  def ApiEntitiesNugetServiceIndex(data = nil)
    require_relative 'entity/api_entities_nuget_service_index_entity'
    ApiEntitiesNugetServiceIndexEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesOrganizationsOrganization.list / client.ApiEntitiesOrganizationsOrganization.load({ "id" => ... })
  def ApiEntitiesOrganizationsOrganization(data = nil)
    require_relative 'entity/api_entities_organizations_organization_entity'
    ApiEntitiesOrganizationsOrganizationEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesPackage.list / client.ApiEntitiesPackage.load({ "id" => ... })
  def ApiEntitiesPackage(data = nil)
    require_relative 'entity/api_entities_package_entity'
    ApiEntitiesPackageEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesPackageFile.list / client.ApiEntitiesPackageFile.load({ "id" => ... })
  def ApiEntitiesPackageFile(data = nil)
    require_relative 'entity/api_entities_package_file_entity'
    ApiEntitiesPackageFileEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesPackagePipeline.list / client.ApiEntitiesPackagePipeline.load({ "id" => ... })
  def ApiEntitiesPackagePipeline(data = nil)
    require_relative 'entity/api_entities_package_pipeline_entity'
    ApiEntitiesPackagePipelineEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesPackagesConanFilesList.list / client.ApiEntitiesPackagesConanFilesList.load({ "id" => ... })
  def ApiEntitiesPackagesConanFilesList(data = nil)
    require_relative 'entity/api_entities_packages_conan_files_list_entity'
    ApiEntitiesPackagesConanFilesListEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesPackagesConanPackageManifest.list / client.ApiEntitiesPackagesConanPackageManifest.load({ "id" => ... })
  def ApiEntitiesPackagesConanPackageManifest(data = nil)
    require_relative 'entity/api_entities_packages_conan_package_manifest_entity'
    ApiEntitiesPackagesConanPackageManifestEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesPackagesConanPackageRevision.list / client.ApiEntitiesPackagesConanPackageRevision.load({ "id" => ... })
  def ApiEntitiesPackagesConanPackageRevision(data = nil)
    require_relative 'entity/api_entities_packages_conan_package_revision_entity'
    ApiEntitiesPackagesConanPackageRevisionEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesPackagesConanPackageSnapshot.list / client.ApiEntitiesPackagesConanPackageSnapshot.load({ "id" => ... })
  def ApiEntitiesPackagesConanPackageSnapshot(data = nil)
    require_relative 'entity/api_entities_packages_conan_package_snapshot_entity'
    ApiEntitiesPackagesConanPackageSnapshotEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesPackagesConanRecipeManifest.list / client.ApiEntitiesPackagesConanRecipeManifest.load({ "id" => ... })
  def ApiEntitiesPackagesConanRecipeManifest(data = nil)
    require_relative 'entity/api_entities_packages_conan_recipe_manifest_entity'
    ApiEntitiesPackagesConanRecipeManifestEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesPackagesConanRecipeRevision.list / client.ApiEntitiesPackagesConanRecipeRevision.load({ "id" => ... })
  def ApiEntitiesPackagesConanRecipeRevision(data = nil)
    require_relative 'entity/api_entities_packages_conan_recipe_revision_entity'
    ApiEntitiesPackagesConanRecipeRevisionEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesPackagesConanRecipeSnapshot.list / client.ApiEntitiesPackagesConanRecipeSnapshot.load({ "id" => ... })
  def ApiEntitiesPackagesConanRecipeSnapshot(data = nil)
    require_relative 'entity/api_entities_packages_conan_recipe_snapshot_entity'
    ApiEntitiesPackagesConanRecipeSnapshotEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesPackagesConanRevision.list / client.ApiEntitiesPackagesConanRevision.load({ "id" => ... })
  def ApiEntitiesPackagesConanRevision(data = nil)
    require_relative 'entity/api_entities_packages_conan_revision_entity'
    ApiEntitiesPackagesConanRevisionEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesPackagesConanUploadUrl.list / client.ApiEntitiesPackagesConanUploadUrl.load({ "id" => ... })
  def ApiEntitiesPackagesConanUploadUrl(data = nil)
    require_relative 'entity/api_entities_packages_conan_upload_url_entity'
    ApiEntitiesPackagesConanUploadUrlEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesPackagesDebianDistribution.list / client.ApiEntitiesPackagesDebianDistribution.load({ "id" => ... })
  def ApiEntitiesPackagesDebianDistribution(data = nil)
    require_relative 'entity/api_entities_packages_debian_distribution_entity'
    ApiEntitiesPackagesDebianDistributionEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesPagesDomain.list / client.ApiEntitiesPagesDomain.load({ "id" => ... })
  def ApiEntitiesPagesDomain(data = nil)
    require_relative 'entity/api_entities_pages_domain_entity'
    ApiEntitiesPagesDomainEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesPagesDomainBasic.list / client.ApiEntitiesPagesDomainBasic.load({ "id" => ... })
  def ApiEntitiesPagesDomainBasic(data = nil)
    require_relative 'entity/api_entities_pages_domain_basic_entity'
    ApiEntitiesPagesDomainBasicEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesPersonalAccessToken.list / client.ApiEntitiesPersonalAccessToken.load({ "id" => ... })
  def ApiEntitiesPersonalAccessToken(data = nil)
    require_relative 'entity/api_entities_personal_access_token_entity'
    ApiEntitiesPersonalAccessTokenEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesPersonalAccessTokenWithLastUsedIp.list / client.ApiEntitiesPersonalAccessTokenWithLastUsedIp.load({ "id" => ... })
  def ApiEntitiesPersonalAccessTokenWithLastUsedIp(data = nil)
    require_relative 'entity/api_entities_personal_access_token_with_last_used_ip_entity'
    ApiEntitiesPersonalAccessTokenWithLastUsedIpEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesPersonalAccessTokenWithToken.list / client.ApiEntitiesPersonalAccessTokenWithToken.load({ "id" => ... })
  def ApiEntitiesPersonalAccessTokenWithToken(data = nil)
    require_relative 'entity/api_entities_personal_access_token_with_token_entity'
    ApiEntitiesPersonalAccessTokenWithTokenEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesPersonalSnippet.list / client.ApiEntitiesPersonalSnippet.load({ "id" => ... })
  def ApiEntitiesPersonalSnippet(data = nil)
    require_relative 'entity/api_entities_personal_snippet_entity'
    ApiEntitiesPersonalSnippetEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesPlanLimit.list / client.ApiEntitiesPlanLimit.load({ "id" => ... })
  def ApiEntitiesPlanLimit(data = nil)
    require_relative 'entity/api_entities_plan_limit_entity'
    ApiEntitiesPlanLimitEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesProject.list / client.ApiEntitiesProject.load({ "id" => ... })
  def ApiEntitiesProject(data = nil)
    require_relative 'entity/api_entities_project_entity'
    ApiEntitiesProjectEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesProjectDailyStatistic.list / client.ApiEntitiesProjectDailyStatistic.load({ "id" => ... })
  def ApiEntitiesProjectDailyStatistic(data = nil)
    require_relative 'entity/api_entities_project_daily_statistic_entity'
    ApiEntitiesProjectDailyStatisticEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesProjectExportStatus.list / client.ApiEntitiesProjectExportStatus.load({ "id" => ... })
  def ApiEntitiesProjectExportStatus(data = nil)
    require_relative 'entity/api_entities_project_export_status_entity'
    ApiEntitiesProjectExportStatusEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesProjectGroupLink.list / client.ApiEntitiesProjectGroupLink.load({ "id" => ... })
  def ApiEntitiesProjectGroupLink(data = nil)
    require_relative 'entity/api_entities_project_group_link_entity'
    ApiEntitiesProjectGroupLinkEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesProjectHook.list / client.ApiEntitiesProjectHook.load({ "id" => ... })
  def ApiEntitiesProjectHook(data = nil)
    require_relative 'entity/api_entities_project_hook_entity'
    ApiEntitiesProjectHookEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesProjectImportStatus.list / client.ApiEntitiesProjectImportStatus.load({ "id" => ... })
  def ApiEntitiesProjectImportStatus(data = nil)
    require_relative 'entity/api_entities_project_import_status_entity'
    ApiEntitiesProjectImportStatusEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesProjectJobTokenScope.list / client.ApiEntitiesProjectJobTokenScope.load({ "id" => ... })
  def ApiEntitiesProjectJobTokenScope(data = nil)
    require_relative 'entity/api_entities_project_job_token_scope_entity'
    ApiEntitiesProjectJobTokenScopeEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesProjectRepositoryStorage.list / client.ApiEntitiesProjectRepositoryStorage.load({ "id" => ... })
  def ApiEntitiesProjectRepositoryStorage(data = nil)
    require_relative 'entity/api_entities_project_repository_storage_entity'
    ApiEntitiesProjectRepositoryStorageEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesProjectSnippet.list / client.ApiEntitiesProjectSnippet.load({ "id" => ... })
  def ApiEntitiesProjectSnippet(data = nil)
    require_relative 'entity/api_entities_project_snippet_entity'
    ApiEntitiesProjectSnippetEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesProjectUpload.list / client.ApiEntitiesProjectUpload.load({ "id" => ... })
  def ApiEntitiesProjectUpload(data = nil)
    require_relative 'entity/api_entities_project_upload_entity'
    ApiEntitiesProjectUploadEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesProjectWithAccess.list / client.ApiEntitiesProjectWithAccess.load({ "id" => ... })
  def ApiEntitiesProjectWithAccess(data = nil)
    require_relative 'entity/api_entities_project_with_access_entity'
    ApiEntitiesProjectWithAccessEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesProjectsContainerRegistryProtectionRule.list / client.ApiEntitiesProjectsContainerRegistryProtectionRule.load({ "id" => ... })
  def ApiEntitiesProjectsContainerRegistryProtectionRule(data = nil)
    require_relative 'entity/api_entities_projects_container_registry_protection_rule_entity'
    ApiEntitiesProjectsContainerRegistryProtectionRuleEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesProjectsPackagesProtectionRule.list / client.ApiEntitiesProjectsPackagesProtectionRule.load({ "id" => ... })
  def ApiEntitiesProjectsPackagesProtectionRule(data = nil)
    require_relative 'entity/api_entities_projects_packages_protection_rule_entity'
    ApiEntitiesProjectsPackagesProtectionRuleEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesProjectsTopic.list / client.ApiEntitiesProjectsTopic.load({ "id" => ... })
  def ApiEntitiesProjectsTopic(data = nil)
    require_relative 'entity/api_entities_projects_topic_entity'
    ApiEntitiesProjectsTopicEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesProtectedBranch.list / client.ApiEntitiesProtectedBranch.load({ "id" => ... })
  def ApiEntitiesProtectedBranch(data = nil)
    require_relative 'entity/api_entities_protected_branch_entity'
    ApiEntitiesProtectedBranchEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesProtectedTag.list / client.ApiEntitiesProtectedTag.load({ "id" => ... })
  def ApiEntitiesProtectedTag(data = nil)
    require_relative 'entity/api_entities_protected_tag_entity'
    ApiEntitiesProtectedTagEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesPublicGroupDetail.list / client.ApiEntitiesPublicGroupDetail.load({ "id" => ... })
  def ApiEntitiesPublicGroupDetail(data = nil)
    require_relative 'entity/api_entities_public_group_detail_entity'
    ApiEntitiesPublicGroupDetailEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesRelatedIssue.list / client.ApiEntitiesRelatedIssue.load({ "id" => ... })
  def ApiEntitiesRelatedIssue(data = nil)
    require_relative 'entity/api_entities_related_issue_entity'
    ApiEntitiesRelatedIssueEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesRelationImportTracker.list / client.ApiEntitiesRelationImportTracker.load({ "id" => ... })
  def ApiEntitiesRelationImportTracker(data = nil)
    require_relative 'entity/api_entities_relation_import_tracker_entity'
    ApiEntitiesRelationImportTrackerEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesRelease.list / client.ApiEntitiesRelease.load({ "id" => ... })
  def ApiEntitiesRelease(data = nil)
    require_relative 'entity/api_entities_release_entity'
    ApiEntitiesReleaseEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesReleasesLink.list / client.ApiEntitiesReleasesLink.load({ "id" => ... })
  def ApiEntitiesReleasesLink(data = nil)
    require_relative 'entity/api_entities_releases_link_entity'
    ApiEntitiesReleasesLinkEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesRemoteMirror.list / client.ApiEntitiesRemoteMirror.load({ "id" => ... })
  def ApiEntitiesRemoteMirror(data = nil)
    require_relative 'entity/api_entities_remote_mirror_entity'
    ApiEntitiesRemoteMirrorEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesRepositoryHealth.list / client.ApiEntitiesRepositoryHealth.load({ "id" => ... })
  def ApiEntitiesRepositoryHealth(data = nil)
    require_relative 'entity/api_entities_repository_health_entity'
    ApiEntitiesRepositoryHealthEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesResourceAccessTokenWithToken.list / client.ApiEntitiesResourceAccessTokenWithToken.load({ "id" => ... })
  def ApiEntitiesResourceAccessTokenWithToken(data = nil)
    require_relative 'entity/api_entities_resource_access_token_with_token_entity'
    ApiEntitiesResourceAccessTokenWithTokenEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesResourceMilestoneEvent.list / client.ApiEntitiesResourceMilestoneEvent.load({ "id" => ... })
  def ApiEntitiesResourceMilestoneEvent(data = nil)
    require_relative 'entity/api_entities_resource_milestone_event_entity'
    ApiEntitiesResourceMilestoneEventEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesSnippet.list / client.ApiEntitiesSnippet.load({ "id" => ... })
  def ApiEntitiesSnippet(data = nil)
    require_relative 'entity/api_entities_snippet_entity'
    ApiEntitiesSnippetEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesSshKeyWithUser.list / client.ApiEntitiesSshKeyWithUser.load({ "id" => ... })
  def ApiEntitiesSshKeyWithUser(data = nil)
    require_relative 'entity/api_entities_ssh_key_with_user_entity'
    ApiEntitiesSshKeyWithUserEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesSuggestion.list / client.ApiEntitiesSuggestion.load({ "id" => ... })
  def ApiEntitiesSuggestion(data = nil)
    require_relative 'entity/api_entities_suggestion_entity'
    ApiEntitiesSuggestionEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesSystemBroadcastMessage.list / client.ApiEntitiesSystemBroadcastMessage.load({ "id" => ... })
  def ApiEntitiesSystemBroadcastMessage(data = nil)
    require_relative 'entity/api_entities_system_broadcast_message_entity'
    ApiEntitiesSystemBroadcastMessageEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesTag.list / client.ApiEntitiesTag.load({ "id" => ... })
  def ApiEntitiesTag(data = nil)
    require_relative 'entity/api_entities_tag_entity'
    ApiEntitiesTagEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesTagSignature.list / client.ApiEntitiesTagSignature.load({ "id" => ... })
  def ApiEntitiesTagSignature(data = nil)
    require_relative 'entity/api_entities_tag_signature_entity'
    ApiEntitiesTagSignatureEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesTemplatesList.list / client.ApiEntitiesTemplatesList.load({ "id" => ... })
  def ApiEntitiesTemplatesList(data = nil)
    require_relative 'entity/api_entities_templates_list_entity'
    ApiEntitiesTemplatesListEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesTerraformModuleVersion.list / client.ApiEntitiesTerraformModuleVersion.load({ "id" => ... })
  def ApiEntitiesTerraformModuleVersion(data = nil)
    require_relative 'entity/api_entities_terraform_module_version_entity'
    ApiEntitiesTerraformModuleVersionEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesTreeObject.list / client.ApiEntitiesTreeObject.load({ "id" => ... })
  def ApiEntitiesTreeObject(data = nil)
    require_relative 'entity/api_entities_tree_object_entity'
    ApiEntitiesTreeObjectEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesTrigger.list / client.ApiEntitiesTrigger.load({ "id" => ... })
  def ApiEntitiesTrigger(data = nil)
    require_relative 'entity/api_entities_trigger_entity'
    ApiEntitiesTriggerEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesUserAgentDetail.list / client.ApiEntitiesUserAgentDetail.load({ "id" => ... })
  def ApiEntitiesUserAgentDetail(data = nil)
    require_relative 'entity/api_entities_user_agent_detail_entity'
    ApiEntitiesUserAgentDetailEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesUserCount.list / client.ApiEntitiesUserCount.load({ "id" => ... })
  def ApiEntitiesUserCount(data = nil)
    require_relative 'entity/api_entities_user_count_entity'
    ApiEntitiesUserCountEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesUserPublic.list / client.ApiEntitiesUserPublic.load({ "id" => ... })
  def ApiEntitiesUserPublic(data = nil)
    require_relative 'entity/api_entities_user_public_entity'
    ApiEntitiesUserPublicEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesUserWithAdmin.list / client.ApiEntitiesUserWithAdmin.load({ "id" => ... })
  def ApiEntitiesUserWithAdmin(data = nil)
    require_relative 'entity/api_entities_user_with_admin_entity'
    ApiEntitiesUserWithAdminEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesWikiAttachment.list / client.ApiEntitiesWikiAttachment.load({ "id" => ... })
  def ApiEntitiesWikiAttachment(data = nil)
    require_relative 'entity/api_entities_wiki_attachment_entity'
    ApiEntitiesWikiAttachmentEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesWikiPage.list / client.ApiEntitiesWikiPage.load({ "id" => ... })
  def ApiEntitiesWikiPage(data = nil)
    require_relative 'entity/api_entities_wiki_page_entity'
    ApiEntitiesWikiPageEntity.new(self, data)
  end


  # Canonical facade: client.ApiEntitiesWikiPageBasic.list / client.ApiEntitiesWikiPageBasic.load({ "id" => ... })
  def ApiEntitiesWikiPageBasic(data = nil)
    require_relative 'entity/api_entities_wiki_page_basic_entity'
    ApiEntitiesWikiPageBasicEntity.new(self, data)
  end


  # Canonical facade: client.Application.list / client.Application.load({ "id" => ... })
  def Application(data = nil)
    require_relative 'entity/application_entity'
    ApplicationEntity.new(self, data)
  end


  # Canonical facade: client.AwardEmoji.list / client.AwardEmoji.load({ "id" => ... })
  def AwardEmoji(data = nil)
    require_relative 'entity/award_emoji_entity'
    AwardEmojiEntity.new(self, data)
  end


  # Canonical facade: client.Badge.list / client.Badge.load({ "id" => ... })
  def Badge(data = nil)
    require_relative 'entity/badge_entity'
    BadgeEntity.new(self, data)
  end


  # Canonical facade: client.Branch.list / client.Branch.load({ "id" => ... })
  def Branch(data = nil)
    require_relative 'entity/branch_entity'
    BranchEntity.new(self, data)
  end


  # Canonical facade: client.CargoPackage.list / client.CargoPackage.load({ "id" => ... })
  def CargoPackage(data = nil)
    require_relative 'entity/cargo_package_entity'
    CargoPackageEntity.new(self, data)
  end


  # Canonical facade: client.CiVariable.list / client.CiVariable.load({ "id" => ... })
  def CiVariable(data = nil)
    require_relative 'entity/ci_variable_entity'
    CiVariableEntity.new(self, data)
  end


  # Canonical facade: client.Cluster.list / client.Cluster.load({ "id" => ... })
  def Cluster(data = nil)
    require_relative 'entity/cluster_entity'
    ClusterEntity.new(self, data)
  end


  # Canonical facade: client.ClusterAgent.list / client.ClusterAgent.load({ "id" => ... })
  def ClusterAgent(data = nil)
    require_relative 'entity/cluster_agent_entity'
    ClusterAgentEntity.new(self, data)
  end


  # Canonical facade: client.Composer.list / client.Composer.load({ "id" => ... })
  def Composer(data = nil)
    require_relative 'entity/composer_entity'
    ComposerEntity.new(self, data)
  end


  # Canonical facade: client.ComposerPackage.list / client.ComposerPackage.load({ "id" => ... })
  def ComposerPackage(data = nil)
    require_relative 'entity/composer_package_entity'
    ComposerPackageEntity.new(self, data)
  end


  # Canonical facade: client.Conan.list / client.Conan.load({ "id" => ... })
  def Conan(data = nil)
    require_relative 'entity/conan_entity'
    ConanEntity.new(self, data)
  end


  # Canonical facade: client.ConanPackage.list / client.ConanPackage.load({ "id" => ... })
  def ConanPackage(data = nil)
    require_relative 'entity/conan_package_entity'
    ConanPackageEntity.new(self, data)
  end


  # Canonical facade: client.ContainerRegistry.list / client.ContainerRegistry.load({ "id" => ... })
  def ContainerRegistry(data = nil)
    require_relative 'entity/container_registry_entity'
    ContainerRegistryEntity.new(self, data)
  end


  # Canonical facade: client.ContainerRegistryEvent.list / client.ContainerRegistryEvent.load({ "id" => ... })
  def ContainerRegistryEvent(data = nil)
    require_relative 'entity/container_registry_event_entity'
    ContainerRegistryEventEntity.new(self, data)
  end


  # Canonical facade: client.CustomAttribute.list / client.CustomAttribute.load({ "id" => ... })
  def CustomAttribute(data = nil)
    require_relative 'entity/custom_attribute_entity'
    CustomAttributeEntity.new(self, data)
  end


  # Canonical facade: client.Debian.list / client.Debian.load({ "id" => ... })
  def Debian(data = nil)
    require_relative 'entity/debian_entity'
    DebianEntity.new(self, data)
  end


  # Canonical facade: client.DebianDistribution.list / client.DebianDistribution.load({ "id" => ... })
  def DebianDistribution(data = nil)
    require_relative 'entity/debian_distribution_entity'
    DebianDistributionEntity.new(self, data)
  end


  # Canonical facade: client.DebianPackage.list / client.DebianPackage.load({ "id" => ... })
  def DebianPackage(data = nil)
    require_relative 'entity/debian_package_entity'
    DebianPackageEntity.new(self, data)
  end


  # Canonical facade: client.DependencyProxy.list / client.DependencyProxy.load({ "id" => ... })
  def DependencyProxy(data = nil)
    require_relative 'entity/dependency_proxy_entity'
    DependencyProxyEntity.new(self, data)
  end


  # Canonical facade: client.DeployKey.list / client.DeployKey.load({ "id" => ... })
  def DeployKey(data = nil)
    require_relative 'entity/deploy_key_entity'
    DeployKeyEntity.new(self, data)
  end


  # Canonical facade: client.DeployToken.list / client.DeployToken.load({ "id" => ... })
  def DeployToken(data = nil)
    require_relative 'entity/deploy_token_entity'
    DeployTokenEntity.new(self, data)
  end


  # Canonical facade: client.Deployment.list / client.Deployment.load({ "id" => ... })
  def Deployment(data = nil)
    require_relative 'entity/deployment_entity'
    DeploymentEntity.new(self, data)
  end


  # Canonical facade: client.EeApiEntitiesApprovalState.list / client.EeApiEntitiesApprovalState.load({ "id" => ... })
  def EeApiEntitiesApprovalState(data = nil)
    require_relative 'entity/ee_api_entities_approval_state_entity'
    EeApiEntitiesApprovalStateEntity.new(self, data)
  end


  # Canonical facade: client.EeApiEntitiesAuditEvent.list / client.EeApiEntitiesAuditEvent.load({ "id" => ... })
  def EeApiEntitiesAuditEvent(data = nil)
    require_relative 'entity/ee_api_entities_audit_event_entity'
    EeApiEntitiesAuditEventEntity.new(self, data)
  end


  # Canonical facade: client.EeApiEntitiesBillableMembership.list / client.EeApiEntitiesBillableMembership.load({ "id" => ... })
  def EeApiEntitiesBillableMembership(data = nil)
    require_relative 'entity/ee_api_entities_billable_membership_entity'
    EeApiEntitiesBillableMembershipEntity.new(self, data)
  end


  # Canonical facade: client.EeApiEntitiesGeoNodeStatus.list / client.EeApiEntitiesGeoNodeStatus.load({ "id" => ... })
  def EeApiEntitiesGeoNodeStatus(data = nil)
    require_relative 'entity/ee_api_entities_geo_node_status_entity'
    EeApiEntitiesGeoNodeStatusEntity.new(self, data)
  end


  # Canonical facade: client.EeApiEntitiesGeoPipelineRef.list / client.EeApiEntitiesGeoPipelineRef.load({ "id" => ... })
  def EeApiEntitiesGeoPipelineRef(data = nil)
    require_relative 'entity/ee_api_entities_geo_pipeline_ref_entity'
    EeApiEntitiesGeoPipelineRefEntity.new(self, data)
  end


  # Canonical facade: client.EeApiEntitiesIssuableMetricImage.list / client.EeApiEntitiesIssuableMetricImage.load({ "id" => ... })
  def EeApiEntitiesIssuableMetricImage(data = nil)
    require_relative 'entity/ee_api_entities_issuable_metric_image_entity'
    EeApiEntitiesIssuableMetricImageEntity.new(self, data)
  end


  # Canonical facade: client.EeApiEntitiesMergeRequestApprovalState.list / client.EeApiEntitiesMergeRequestApprovalState.load({ "id" => ... })
  def EeApiEntitiesMergeRequestApprovalState(data = nil)
    require_relative 'entity/ee_api_entities_merge_request_approval_state_entity'
    EeApiEntitiesMergeRequestApprovalStateEntity.new(self, data)
  end


  # Canonical facade: client.EeApiEntitiesSshCertificate.list / client.EeApiEntitiesSshCertificate.load({ "id" => ... })
  def EeApiEntitiesSshCertificate(data = nil)
    require_relative 'entity/ee_api_entities_ssh_certificate_entity'
    EeApiEntitiesSshCertificateEntity.new(self, data)
  end


  # Canonical facade: client.Environment.list / client.Environment.load({ "id" => ... })
  def Environment(data = nil)
    require_relative 'entity/environment_entity'
    EnvironmentEntity.new(self, data)
  end


  # Canonical facade: client.ErrorTrackingClientKey.list / client.ErrorTrackingClientKey.load({ "id" => ... })
  def ErrorTrackingClientKey(data = nil)
    require_relative 'entity/error_tracking_client_key_entity'
    ErrorTrackingClientKeyEntity.new(self, data)
  end


  # Canonical facade: client.Feature.list / client.Feature.load({ "id" => ... })
  def Feature(data = nil)
    require_relative 'entity/feature_entity'
    FeatureEntity.new(self, data)
  end


  # Canonical facade: client.FeatureFlag.list / client.FeatureFlag.load({ "id" => ... })
  def FeatureFlag(data = nil)
    require_relative 'entity/feature_flag_entity'
    FeatureFlagEntity.new(self, data)
  end


  # Canonical facade: client.FeatureFlagsUserList.list / client.FeatureFlagsUserList.load({ "id" => ... })
  def FeatureFlagsUserList(data = nil)
    require_relative 'entity/feature_flags_user_list_entity'
    FeatureFlagsUserListEntity.new(self, data)
  end


  # Canonical facade: client.FreezePeriod.list / client.FreezePeriod.load({ "id" => ... })
  def FreezePeriod(data = nil)
    require_relative 'entity/freeze_period_entity'
    FreezePeriodEntity.new(self, data)
  end


  # Canonical facade: client.GenericPackage.list / client.GenericPackage.load({ "id" => ... })
  def GenericPackage(data = nil)
    require_relative 'entity/generic_package_entity'
    GenericPackageEntity.new(self, data)
  end


  # Canonical facade: client.Geo.list / client.Geo.load({ "id" => ... })
  def Geo(data = nil)
    require_relative 'entity/geo_entity'
    GeoEntity.new(self, data)
  end


  # Canonical facade: client.GoProxy.list / client.GoProxy.load({ "id" => ... })
  def GoProxy(data = nil)
    require_relative 'entity/go_proxy_entity'
    GoProxyEntity.new(self, data)
  end


  # Canonical facade: client.Group.list / client.Group.load({ "id" => ... })
  def Group(data = nil)
    require_relative 'entity/group_entity'
    GroupEntity.new(self, data)
  end


  # Canonical facade: client.GroupAvatar.list / client.GroupAvatar.load({ "id" => ... })
  def GroupAvatar(data = nil)
    require_relative 'entity/group_avatar_entity'
    GroupAvatarEntity.new(self, data)
  end


  # Canonical facade: client.GroupExport.list / client.GroupExport.load({ "id" => ... })
  def GroupExport(data = nil)
    require_relative 'entity/group_export_entity'
    GroupExportEntity.new(self, data)
  end


  # Canonical facade: client.GroupImport.list / client.GroupImport.load({ "id" => ... })
  def GroupImport(data = nil)
    require_relative 'entity/group_import_entity'
    GroupImportEntity.new(self, data)
  end


  # Canonical facade: client.HelmPackage.list / client.HelmPackage.load({ "id" => ... })
  def HelmPackage(data = nil)
    require_relative 'entity/helm_package_entity'
    HelmPackageEntity.new(self, data)
  end


  # Canonical facade: client.Hook.list / client.Hook.load({ "id" => ... })
  def Hook(data = nil)
    require_relative 'entity/hook_entity'
    HookEntity.new(self, data)
  end


  # Canonical facade: client.Import.list / client.Import.load({ "id" => ... })
  def Import(data = nil)
    require_relative 'entity/import_entity'
    ImportEntity.new(self, data)
  end


  # Canonical facade: client.Integration.list / client.Integration.load({ "id" => ... })
  def Integration(data = nil)
    require_relative 'entity/integration_entity'
    IntegrationEntity.new(self, data)
  end


  # Canonical facade: client.Invitation.list / client.Invitation.load({ "id" => ... })
  def Invitation(data = nil)
    require_relative 'entity/invitation_entity'
    InvitationEntity.new(self, data)
  end


  # Canonical facade: client.IssueLink.list / client.IssueLink.load({ "id" => ... })
  def IssueLink(data = nil)
    require_relative 'entity/issue_link_entity'
    IssueLinkEntity.new(self, data)
  end


  # Canonical facade: client.IssuesStatistic.list / client.IssuesStatistic.load({ "id" => ... })
  def IssuesStatistic(data = nil)
    require_relative 'entity/issues_statistic_entity'
    IssuesStatisticEntity.new(self, data)
  end


  # Canonical facade: client.Job.list / client.Job.load({ "id" => ... })
  def Job(data = nil)
    require_relative 'entity/job_entity'
    JobEntity.new(self, data)
  end


  # Canonical facade: client.MavenPackage.list / client.MavenPackage.load({ "id" => ... })
  def MavenPackage(data = nil)
    require_relative 'entity/maven_package_entity'
    MavenPackageEntity.new(self, data)
  end


  # Canonical facade: client.Member.list / client.Member.load({ "id" => ... })
  def Member(data = nil)
    require_relative 'entity/member_entity'
    MemberEntity.new(self, data)
  end


  # Canonical facade: client.MergeRequest.list / client.MergeRequest.load({ "id" => ... })
  def MergeRequest(data = nil)
    require_relative 'entity/merge_request_entity'
    MergeRequestEntity.new(self, data)
  end


  # Canonical facade: client.Metadata.list / client.Metadata.load({ "id" => ... })
  def Metadata(data = nil)
    require_relative 'entity/metadata_entity'
    MetadataEntity.new(self, data)
  end


  # Canonical facade: client.Migration.list / client.Migration.load({ "id" => ... })
  def Migration(data = nil)
    require_relative 'entity/migration_entity'
    MigrationEntity.new(self, data)
  end


  # Canonical facade: client.MlModelRegistry.list / client.MlModelRegistry.load({ "id" => ... })
  def MlModelRegistry(data = nil)
    require_relative 'entity/ml_model_registry_entity'
    MlModelRegistryEntity.new(self, data)
  end


  # Canonical facade: client.Namespace.list / client.Namespace.load({ "id" => ... })
  def Namespace(data = nil)
    require_relative 'entity/namespace_entity'
    NamespaceEntity.new(self, data)
  end


  # Canonical facade: client.Npm.list / client.Npm.load({ "id" => ... })
  def Npm(data = nil)
    require_relative 'entity/npm_entity'
    NpmEntity.new(self, data)
  end


  # Canonical facade: client.NpmPackage.list / client.NpmPackage.load({ "id" => ... })
  def NpmPackage(data = nil)
    require_relative 'entity/npm_package_entity'
    NpmPackageEntity.new(self, data)
  end


  # Canonical facade: client.Nuget.list / client.Nuget.load({ "id" => ... })
  def Nuget(data = nil)
    require_relative 'entity/nuget_entity'
    NugetEntity.new(self, data)
  end


  # Canonical facade: client.NugetPackage.list / client.NugetPackage.load({ "id" => ... })
  def NugetPackage(data = nil)
    require_relative 'entity/nuget_package_entity'
    NugetPackageEntity.new(self, data)
  end


  # Canonical facade: client.PackageFile.list / client.PackageFile.load({ "id" => ... })
  def PackageFile(data = nil)
    require_relative 'entity/package_file_entity'
    PackageFileEntity.new(self, data)
  end


  # Canonical facade: client.Page.list / client.Page.load({ "id" => ... })
  def Page(data = nil)
    require_relative 'entity/page_entity'
    PageEntity.new(self, data)
  end


  # Canonical facade: client.Participant.list / client.Participant.load({ "id" => ... })
  def Participant(data = nil)
    require_relative 'entity/participant_entity'
    ParticipantEntity.new(self, data)
  end


  # Canonical facade: client.PersonalAccessToken.list / client.PersonalAccessToken.load({ "id" => ... })
  def PersonalAccessToken(data = nil)
    require_relative 'entity/personal_access_token_entity'
    PersonalAccessTokenEntity.new(self, data)
  end


  # Canonical facade: client.Project.list / client.Project.load({ "id" => ... })
  def Project(data = nil)
    require_relative 'entity/project_entity'
    ProjectEntity.new(self, data)
  end


  # Canonical facade: client.ProjectAvatar.list / client.ProjectAvatar.load({ "id" => ... })
  def ProjectAvatar(data = nil)
    require_relative 'entity/project_avatar_entity'
    ProjectAvatarEntity.new(self, data)
  end


  # Canonical facade: client.ProjectEntity.list / client.ProjectEntity.load({ "id" => ... })
  def ProjectEntity(data = nil)
    require_relative 'entity/project_entity_entity'
    ProjectEntityEntity.new(self, data)
  end


  # Canonical facade: client.ProjectExport.list / client.ProjectExport.load({ "id" => ... })
  def ProjectExport(data = nil)
    require_relative 'entity/project_export_entity'
    ProjectExportEntity.new(self, data)
  end


  # Canonical facade: client.ProjectHook.list / client.ProjectHook.load({ "id" => ... })
  def ProjectHook(data = nil)
    require_relative 'entity/project_hook_entity'
    ProjectHookEntity.new(self, data)
  end


  # Canonical facade: client.ProjectImport.list / client.ProjectImport.load({ "id" => ... })
  def ProjectImport(data = nil)
    require_relative 'entity/project_import_entity'
    ProjectImportEntity.new(self, data)
  end


  # Canonical facade: client.ProjectImportEntity.list / client.ProjectImportEntity.load({ "id" => ... })
  def ProjectImportEntity(data = nil)
    require_relative 'entity/project_import_entity_entity'
    ProjectImportEntityEntity.new(self, data)
  end


  # Canonical facade: client.ProjectPackage.list / client.ProjectPackage.load({ "id" => ... })
  def ProjectPackage(data = nil)
    require_relative 'entity/project_package_entity'
    ProjectPackageEntity.new(self, data)
  end


  # Canonical facade: client.ProjectSnippet.list / client.ProjectSnippet.load({ "id" => ... })
  def ProjectSnippet(data = nil)
    require_relative 'entity/project_snippet_entity'
    ProjectSnippetEntity.new(self, data)
  end


  # Canonical facade: client.ProjectsJobTokenScope.list / client.ProjectsJobTokenScope.load({ "id" => ... })
  def ProjectsJobTokenScope(data = nil)
    require_relative 'entity/projects_job_token_scope_entity'
    ProjectsJobTokenScopeEntity.new(self, data)
  end


  # Canonical facade: client.ProtectedTag.list / client.ProtectedTag.load({ "id" => ... })
  def ProtectedTag(data = nil)
    require_relative 'entity/protected_tag_entity'
    ProtectedTagEntity.new(self, data)
  end


  # Canonical facade: client.Pypi.list / client.Pypi.load({ "id" => ... })
  def Pypi(data = nil)
    require_relative 'entity/pypi_entity'
    PypiEntity.new(self, data)
  end


  # Canonical facade: client.PypiPackage.list / client.PypiPackage.load({ "id" => ... })
  def PypiPackage(data = nil)
    require_relative 'entity/pypi_package_entity'
    PypiPackageEntity.new(self, data)
  end


  # Canonical facade: client.Release.list / client.Release.load({ "id" => ... })
  def Release(data = nil)
    require_relative 'entity/release_entity'
    ReleaseEntity.new(self, data)
  end


  # Canonical facade: client.ReleaseLink.list / client.ReleaseLink.load({ "id" => ... })
  def ReleaseLink(data = nil)
    require_relative 'entity/release_link_entity'
    ReleaseLinkEntity.new(self, data)
  end


  # Canonical facade: client.RemoteMirror.list / client.RemoteMirror.load({ "id" => ... })
  def RemoteMirror(data = nil)
    require_relative 'entity/remote_mirror_entity'
    RemoteMirrorEntity.new(self, data)
  end


  # Canonical facade: client.Rpm.list / client.Rpm.load({ "id" => ... })
  def Rpm(data = nil)
    require_relative 'entity/rpm_entity'
    RpmEntity.new(self, data)
  end


  # Canonical facade: client.RpmPackage.list / client.RpmPackage.load({ "id" => ... })
  def RpmPackage(data = nil)
    require_relative 'entity/rpm_package_entity'
    RpmPackageEntity.new(self, data)
  end


  # Canonical facade: client.Rubygem.list / client.Rubygem.load({ "id" => ... })
  def Rubygem(data = nil)
    require_relative 'entity/rubygem_entity'
    RubygemEntity.new(self, data)
  end


  # Canonical facade: client.RubygemPackage.list / client.RubygemPackage.load({ "id" => ... })
  def RubygemPackage(data = nil)
    require_relative 'entity/rubygem_package_entity'
    RubygemPackageEntity.new(self, data)
  end


  # Canonical facade: client.Runner.list / client.Runner.load({ "id" => ... })
  def Runner(data = nil)
    require_relative 'entity/runner_entity'
    RunnerEntity.new(self, data)
  end


  # Canonical facade: client.Search.list / client.Search.load({ "id" => ... })
  def Search(data = nil)
    require_relative 'entity/search_entity'
    SearchEntity.new(self, data)
  end


  # Canonical facade: client.SecureFile.list / client.SecureFile.load({ "id" => ... })
  def SecureFile(data = nil)
    require_relative 'entity/secure_file_entity'
    SecureFileEntity.new(self, data)
  end


  # Canonical facade: client.Slack.list / client.Slack.load({ "id" => ... })
  def Slack(data = nil)
    require_relative 'entity/slack_entity'
    SlackEntity.new(self, data)
  end


  # Canonical facade: client.Snippet.list / client.Snippet.load({ "id" => ... })
  def Snippet(data = nil)
    require_relative 'entity/snippet_entity'
    SnippetEntity.new(self, data)
  end


  # Canonical facade: client.Starrer.list / client.Starrer.load({ "id" => ... })
  def Starrer(data = nil)
    require_relative 'entity/starrer_entity'
    StarrerEntity.new(self, data)
  end


  # Canonical facade: client.SystemHook.list / client.SystemHook.load({ "id" => ... })
  def SystemHook(data = nil)
    require_relative 'entity/system_hook_entity'
    SystemHookEntity.new(self, data)
  end


  # Canonical facade: client.Tag.list / client.Tag.load({ "id" => ... })
  def Tag(data = nil)
    require_relative 'entity/tag_entity'
    TagEntity.new(self, data)
  end


  # Canonical facade: client.TerraformRegistry.list / client.TerraformRegistry.load({ "id" => ... })
  def TerraformRegistry(data = nil)
    require_relative 'entity/terraform_registry_entity'
    TerraformRegistryEntity.new(self, data)
  end


  # Canonical facade: client.TerraformState.list / client.TerraformState.load({ "id" => ... })
  def TerraformState(data = nil)
    require_relative 'entity/terraform_state_entity'
    TerraformStateEntity.new(self, data)
  end


  # Canonical facade: client.TestReport.list / client.TestReport.load({ "id" => ... })
  def TestReport(data = nil)
    require_relative 'entity/test_report_entity'
    TestReportEntity.new(self, data)
  end


  # Canonical facade: client.TestReportSummary.list / client.TestReportSummary.load({ "id" => ... })
  def TestReportSummary(data = nil)
    require_relative 'entity/test_report_summary_entity'
    TestReportSummaryEntity.new(self, data)
  end


  # Canonical facade: client.Topic.list / client.Topic.load({ "id" => ... })
  def Topic(data = nil)
    require_relative 'entity/topic_entity'
    TopicEntity.new(self, data)
  end


  # Canonical facade: client.UnleashApi.list / client.UnleashApi.load({ "id" => ... })
  def UnleashApi(data = nil)
    require_relative 'entity/unleash_api_entity'
    UnleashApiEntity.new(self, data)
  end


  # Canonical facade: client.UsageData.list / client.UsageData.load({ "id" => ... })
  def UsageData(data = nil)
    require_relative 'entity/usage_data_entity'
    UsageDataEntity.new(self, data)
  end


  # Canonical facade: client.User.list / client.User.load({ "id" => ... })
  def User(data = nil)
    require_relative 'entity/user_entity'
    UserEntity.new(self, data)
  end


  # Canonical facade: client.WebCommit.list / client.WebCommit.load({ "id" => ... })
  def WebCommit(data = nil)
    require_relative 'entity/web_commit_entity'
    WebCommitEntity.new(self, data)
  end


  # Canonical facade: client.Wiki.list / client.Wiki.load({ "id" => ... })
  def Wiki(data = nil)
    require_relative 'entity/wiki_entity'
    WikiEntity.new(self, data)
  end



  def self.test(testopts = nil, sdkopts = nil)
    sdkopts = sdkopts || {}
    sdkopts = VoxgigStruct.clone(sdkopts)
    sdkopts = {} unless sdkopts.is_a?(Hash)

    testopts = testopts || {}
    testopts = VoxgigStruct.clone(testopts)
    testopts = {} unless testopts.is_a?(Hash)
    testopts["active"] = true

    VoxgigStruct.setpath(sdkopts, "feature.test", testopts)

    sdk = GitlabSDK.new(sdkopts)
    sdk.mode = "test"
    sdk
  end
end
