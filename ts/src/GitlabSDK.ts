// Gitlab Ts SDK

import { AccessRequestEntity } from './entity/AccessRequestEntity'
import { AlertManagementEntity } from './entity/AlertManagementEntity'
import { ApiEntitiesAccessRequesterEntity } from './entity/ApiEntitiesAccessRequesterEntity'
import { ApiEntitiesAppearanceEntity } from './entity/ApiEntitiesAppearanceEntity'
import { ApiEntitiesApplicationEntity } from './entity/ApiEntitiesApplicationEntity'
import { ApiEntitiesApplicationStatisticEntity } from './entity/ApiEntitiesApplicationStatisticEntity'
import { ApiEntitiesApplicationWithSecretEntity } from './entity/ApiEntitiesApplicationWithSecretEntity'
import { ApiEntitiesAvatarEntity } from './entity/ApiEntitiesAvatarEntity'
import { ApiEntitiesAwardEmojiEntity } from './entity/ApiEntitiesAwardEmojiEntity'
import { ApiEntitiesBadgeEntity } from './entity/ApiEntitiesBadgeEntity'
import { ApiEntitiesBasicBadgeDetailEntity } from './entity/ApiEntitiesBasicBadgeDetailEntity'
import { ApiEntitiesBasicGroupDetailEntity } from './entity/ApiEntitiesBasicGroupDetailEntity'
import { ApiEntitiesBasicProjectDetailEntity } from './entity/ApiEntitiesBasicProjectDetailEntity'
import { ApiEntitiesBasicRefEntity } from './entity/ApiEntitiesBasicRefEntity'
import { ApiEntitiesBasicSuccessEntity } from './entity/ApiEntitiesBasicSuccessEntity'
import { ApiEntitiesBatchedBackgroundMigrationEntity } from './entity/ApiEntitiesBatchedBackgroundMigrationEntity'
import { ApiEntitiesBranchEntity } from './entity/ApiEntitiesBranchEntity'
import { ApiEntitiesBulkImportEntity } from './entity/ApiEntitiesBulkImportEntity'
import { ApiEntitiesBulkImportsEntityFailureEntity } from './entity/ApiEntitiesBulkImportsEntityFailureEntity'
import { ApiEntitiesBulkImportsExportStatusEntity } from './entity/ApiEntitiesBulkImportsExportStatusEntity'
import { ApiEntitiesChangelogEntity } from './entity/ApiEntitiesChangelogEntity'
import { ApiEntitiesCiBridgeEntity } from './entity/ApiEntitiesCiBridgeEntity'
import { ApiEntitiesCiCatalogResourcesVersionEntity } from './entity/ApiEntitiesCiCatalogResourcesVersionEntity'
import { ApiEntitiesCiJobEntity } from './entity/ApiEntitiesCiJobEntity'
import { ApiEntitiesCiJobBasicEntity } from './entity/ApiEntitiesCiJobBasicEntity'
import { ApiEntitiesCiJobBasicWithProjectEntity } from './entity/ApiEntitiesCiJobBasicWithProjectEntity'
import { ApiEntitiesCiLintResultEntity } from './entity/ApiEntitiesCiLintResultEntity'
import { ApiEntitiesCiPipelineEntity } from './entity/ApiEntitiesCiPipelineEntity'
import { ApiEntitiesCiPipelineBasicEntity } from './entity/ApiEntitiesCiPipelineBasicEntity'
import { ApiEntitiesCiPipelineScheduleEntity } from './entity/ApiEntitiesCiPipelineScheduleEntity'
import { ApiEntitiesCiPipelineScheduleDetailEntity } from './entity/ApiEntitiesCiPipelineScheduleDetailEntity'
import { ApiEntitiesCiResetTokenResultEntity } from './entity/ApiEntitiesCiResetTokenResultEntity'
import { ApiEntitiesCiResourceGroupEntity } from './entity/ApiEntitiesCiResourceGroupEntity'
import { ApiEntitiesCiRunnerEntity } from './entity/ApiEntitiesCiRunnerEntity'
import { ApiEntitiesCiRunnerDetailEntity } from './entity/ApiEntitiesCiRunnerDetailEntity'
import { ApiEntitiesCiRunnerManagerEntity } from './entity/ApiEntitiesCiRunnerManagerEntity'
import { ApiEntitiesCiRunnerRegistrationDetailEntity } from './entity/ApiEntitiesCiRunnerRegistrationDetailEntity'
import { ApiEntitiesCiSecureFileEntity } from './entity/ApiEntitiesCiSecureFileEntity'
import { ApiEntitiesCiVariableEntity } from './entity/ApiEntitiesCiVariableEntity'
import { ApiEntitiesClusterEntity } from './entity/ApiEntitiesClusterEntity'
import { ApiEntitiesClusterGroupEntity } from './entity/ApiEntitiesClusterGroupEntity'
import { ApiEntitiesClusterProjectEntity } from './entity/ApiEntitiesClusterProjectEntity'
import { ApiEntitiesClustersAgentEntity } from './entity/ApiEntitiesClustersAgentEntity'
import { ApiEntitiesClustersAgentTokenEntity } from './entity/ApiEntitiesClustersAgentTokenEntity'
import { ApiEntitiesClustersAgentTokenBasicEntity } from './entity/ApiEntitiesClustersAgentTokenBasicEntity'
import { ApiEntitiesClustersAgentTokenWithTokenEntity } from './entity/ApiEntitiesClustersAgentTokenWithTokenEntity'
import { ApiEntitiesCommitEntity } from './entity/ApiEntitiesCommitEntity'
import { ApiEntitiesCommitDetailEntity } from './entity/ApiEntitiesCommitDetailEntity'
import { ApiEntitiesCommitNoteEntity } from './entity/ApiEntitiesCommitNoteEntity'
import { ApiEntitiesCommitSequenceEntity } from './entity/ApiEntitiesCommitSequenceEntity'
import { ApiEntitiesCommitSignatureEntity } from './entity/ApiEntitiesCommitSignatureEntity'
import { ApiEntitiesCommitStatusEntity } from './entity/ApiEntitiesCommitStatusEntity'
import { ApiEntitiesCompareEntity } from './entity/ApiEntitiesCompareEntity'
import { ApiEntitiesContainerRegistryRepositoryEntity } from './entity/ApiEntitiesContainerRegistryRepositoryEntity'
import { ApiEntitiesContainerRegistryTagEntity } from './entity/ApiEntitiesContainerRegistryTagEntity'
import { ApiEntitiesContainerRegistryTagDetailEntity } from './entity/ApiEntitiesContainerRegistryTagDetailEntity'
import { ApiEntitiesContributorEntity } from './entity/ApiEntitiesContributorEntity'
import { ApiEntitiesDeployKeyEntity } from './entity/ApiEntitiesDeployKeyEntity'
import { ApiEntitiesDeployKeysProjectEntity } from './entity/ApiEntitiesDeployKeysProjectEntity'
import { ApiEntitiesDeployTokenEntity } from './entity/ApiEntitiesDeployTokenEntity'
import { ApiEntitiesDeployTokenWithTokenEntity } from './entity/ApiEntitiesDeployTokenWithTokenEntity'
import { ApiEntitiesDeploymentEntity } from './entity/ApiEntitiesDeploymentEntity'
import { ApiEntitiesDeploymentExtendedEntity } from './entity/ApiEntitiesDeploymentExtendedEntity'
import { ApiEntitiesDeploymentsApprovalEntity } from './entity/ApiEntitiesDeploymentsApprovalEntity'
import { ApiEntitiesDictionaryTableEntity } from './entity/ApiEntitiesDictionaryTableEntity'
import { ApiEntitiesDiffEntity } from './entity/ApiEntitiesDiffEntity'
import { ApiEntitiesDiscoveredClusterEntity } from './entity/ApiEntitiesDiscoveredClusterEntity'
import { ApiEntitiesDraftNoteEntity } from './entity/ApiEntitiesDraftNoteEntity'
import { ApiEntitiesEnvironmentEntity } from './entity/ApiEntitiesEnvironmentEntity'
import { ApiEntitiesErrorTrackingClientKeyEntity } from './entity/ApiEntitiesErrorTrackingClientKeyEntity'
import { ApiEntitiesErrorTrackingProjectSettingEntity } from './entity/ApiEntitiesErrorTrackingProjectSettingEntity'
import { ApiEntitiesEventEntity } from './entity/ApiEntitiesEventEntity'
import { ApiEntitiesFeatureEntity } from './entity/ApiEntitiesFeatureEntity'
import { ApiEntitiesFeatureDefinitionEntity } from './entity/ApiEntitiesFeatureDefinitionEntity'
import { ApiEntitiesFeatureFlagEntity } from './entity/ApiEntitiesFeatureFlagEntity'
import { ApiEntitiesFeatureFlagUserListEntity } from './entity/ApiEntitiesFeatureFlagUserListEntity'
import { ApiEntitiesFreezePeriodEntity } from './entity/ApiEntitiesFreezePeriodEntity'
import { ApiEntitiesGitlabSubscriptionEntity } from './entity/ApiEntitiesGitlabSubscriptionEntity'
import { ApiEntitiesGoModuleVersionEntity } from './entity/ApiEntitiesGoModuleVersionEntity'
import { ApiEntitiesGroupEntity } from './entity/ApiEntitiesGroupEntity'
import { ApiEntitiesGroupDetailEntity } from './entity/ApiEntitiesGroupDetailEntity'
import { ApiEntitiesHookEntity } from './entity/ApiEntitiesHookEntity'
import { ApiEntitiesIntegrationEntity } from './entity/ApiEntitiesIntegrationEntity'
import { ApiEntitiesIntegrationBasicEntity } from './entity/ApiEntitiesIntegrationBasicEntity'
import { ApiEntitiesInvitationEntity } from './entity/ApiEntitiesInvitationEntity'
import { ApiEntitiesIssuableTimeStatEntity } from './entity/ApiEntitiesIssuableTimeStatEntity'
import { ApiEntitiesIssueEntity } from './entity/ApiEntitiesIssueEntity'
import { ApiEntitiesIssueLinkEntity } from './entity/ApiEntitiesIssueLinkEntity'
import { ApiEntitiesLicenseEntity } from './entity/ApiEntitiesLicenseEntity'
import { ApiEntitiesMarkdownEntity } from './entity/ApiEntitiesMarkdownEntity'
import { ApiEntitiesMarkdownUploadAdminEntity } from './entity/ApiEntitiesMarkdownUploadAdminEntity'
import { ApiEntitiesMemberEntity } from './entity/ApiEntitiesMemberEntity'
import { ApiEntitiesMergeEntity } from './entity/ApiEntitiesMergeEntity'
import { ApiEntitiesMergeRequestApprovalEntity } from './entity/ApiEntitiesMergeRequestApprovalEntity'
import { ApiEntitiesMergeRequestBasicEntity } from './entity/ApiEntitiesMergeRequestBasicEntity'
import { ApiEntitiesMergeRequestChangeEntity } from './entity/ApiEntitiesMergeRequestChangeEntity'
import { ApiEntitiesMergeRequestDiffEntity } from './entity/ApiEntitiesMergeRequestDiffEntity'
import { ApiEntitiesMergeRequestDiffFullEntity } from './entity/ApiEntitiesMergeRequestDiffFullEntity'
import { ApiEntitiesMergeRequestReviewerEntity } from './entity/ApiEntitiesMergeRequestReviewerEntity'
import { ApiEntitiesMetricImageEntity } from './entity/ApiEntitiesMetricImageEntity'
import { ApiEntitiesMrNoteEntity } from './entity/ApiEntitiesMrNoteEntity'
import { ApiEntitiesNamespaceEntity } from './entity/ApiEntitiesNamespaceEntity'
import { ApiEntitiesNamespaceExistenceEntity } from './entity/ApiEntitiesNamespaceExistenceEntity'
import { ApiEntitiesNamespacesStorageLimitExclusionEntity } from './entity/ApiEntitiesNamespacesStorageLimitExclusionEntity'
import { ApiEntitiesNpmPackageEntity } from './entity/ApiEntitiesNpmPackageEntity'
import { ApiEntitiesNpmPackageTagEntity } from './entity/ApiEntitiesNpmPackageTagEntity'
import { ApiEntitiesNugetPackagesVersionEntity } from './entity/ApiEntitiesNugetPackagesVersionEntity'
import { ApiEntitiesNugetSearchResultEntity } from './entity/ApiEntitiesNugetSearchResultEntity'
import { ApiEntitiesNugetServiceIndexEntity } from './entity/ApiEntitiesNugetServiceIndexEntity'
import { ApiEntitiesOrganizationsOrganizationEntity } from './entity/ApiEntitiesOrganizationsOrganizationEntity'
import { ApiEntitiesPackageEntity } from './entity/ApiEntitiesPackageEntity'
import { ApiEntitiesPackageFileEntity } from './entity/ApiEntitiesPackageFileEntity'
import { ApiEntitiesPackagePipelineEntity } from './entity/ApiEntitiesPackagePipelineEntity'
import { ApiEntitiesPackagesConanFilesListEntity } from './entity/ApiEntitiesPackagesConanFilesListEntity'
import { ApiEntitiesPackagesConanPackageManifestEntity } from './entity/ApiEntitiesPackagesConanPackageManifestEntity'
import { ApiEntitiesPackagesConanPackageRevisionEntity } from './entity/ApiEntitiesPackagesConanPackageRevisionEntity'
import { ApiEntitiesPackagesConanPackageSnapshotEntity } from './entity/ApiEntitiesPackagesConanPackageSnapshotEntity'
import { ApiEntitiesPackagesConanRecipeManifestEntity } from './entity/ApiEntitiesPackagesConanRecipeManifestEntity'
import { ApiEntitiesPackagesConanRecipeRevisionEntity } from './entity/ApiEntitiesPackagesConanRecipeRevisionEntity'
import { ApiEntitiesPackagesConanRecipeSnapshotEntity } from './entity/ApiEntitiesPackagesConanRecipeSnapshotEntity'
import { ApiEntitiesPackagesConanRevisionEntity } from './entity/ApiEntitiesPackagesConanRevisionEntity'
import { ApiEntitiesPackagesConanUploadUrlEntity } from './entity/ApiEntitiesPackagesConanUploadUrlEntity'
import { ApiEntitiesPackagesDebianDistributionEntity } from './entity/ApiEntitiesPackagesDebianDistributionEntity'
import { ApiEntitiesPagesDomainEntity } from './entity/ApiEntitiesPagesDomainEntity'
import { ApiEntitiesPagesDomainBasicEntity } from './entity/ApiEntitiesPagesDomainBasicEntity'
import { ApiEntitiesPersonalAccessTokenEntity } from './entity/ApiEntitiesPersonalAccessTokenEntity'
import { ApiEntitiesPersonalAccessTokenWithLastUsedIpEntity } from './entity/ApiEntitiesPersonalAccessTokenWithLastUsedIpEntity'
import { ApiEntitiesPersonalAccessTokenWithTokenEntity } from './entity/ApiEntitiesPersonalAccessTokenWithTokenEntity'
import { ApiEntitiesPersonalSnippetEntity } from './entity/ApiEntitiesPersonalSnippetEntity'
import { ApiEntitiesPlanLimitEntity } from './entity/ApiEntitiesPlanLimitEntity'
import { ApiEntitiesProjectEntity } from './entity/ApiEntitiesProjectEntity'
import { ApiEntitiesProjectDailyStatisticEntity } from './entity/ApiEntitiesProjectDailyStatisticEntity'
import { ApiEntitiesProjectExportStatusEntity } from './entity/ApiEntitiesProjectExportStatusEntity'
import { ApiEntitiesProjectGroupLinkEntity } from './entity/ApiEntitiesProjectGroupLinkEntity'
import { ApiEntitiesProjectHookEntity } from './entity/ApiEntitiesProjectHookEntity'
import { ApiEntitiesProjectImportStatusEntity } from './entity/ApiEntitiesProjectImportStatusEntity'
import { ApiEntitiesProjectJobTokenScopeEntity } from './entity/ApiEntitiesProjectJobTokenScopeEntity'
import { ApiEntitiesProjectRepositoryStorageEntity } from './entity/ApiEntitiesProjectRepositoryStorageEntity'
import { ApiEntitiesProjectSnippetEntity } from './entity/ApiEntitiesProjectSnippetEntity'
import { ApiEntitiesProjectUploadEntity } from './entity/ApiEntitiesProjectUploadEntity'
import { ApiEntitiesProjectWithAccessEntity } from './entity/ApiEntitiesProjectWithAccessEntity'
import { ApiEntitiesProjectsContainerRegistryProtectionRuleEntity } from './entity/ApiEntitiesProjectsContainerRegistryProtectionRuleEntity'
import { ApiEntitiesProjectsPackagesProtectionRuleEntity } from './entity/ApiEntitiesProjectsPackagesProtectionRuleEntity'
import { ApiEntitiesProjectsTopicEntity } from './entity/ApiEntitiesProjectsTopicEntity'
import { ApiEntitiesProtectedBranchEntity } from './entity/ApiEntitiesProtectedBranchEntity'
import { ApiEntitiesProtectedTagEntity } from './entity/ApiEntitiesProtectedTagEntity'
import { ApiEntitiesPublicGroupDetailEntity } from './entity/ApiEntitiesPublicGroupDetailEntity'
import { ApiEntitiesRelatedIssueEntity } from './entity/ApiEntitiesRelatedIssueEntity'
import { ApiEntitiesRelationImportTrackerEntity } from './entity/ApiEntitiesRelationImportTrackerEntity'
import { ApiEntitiesReleaseEntity } from './entity/ApiEntitiesReleaseEntity'
import { ApiEntitiesReleasesLinkEntity } from './entity/ApiEntitiesReleasesLinkEntity'
import { ApiEntitiesRemoteMirrorEntity } from './entity/ApiEntitiesRemoteMirrorEntity'
import { ApiEntitiesRepositoryHealthEntity } from './entity/ApiEntitiesRepositoryHealthEntity'
import { ApiEntitiesResourceAccessTokenWithTokenEntity } from './entity/ApiEntitiesResourceAccessTokenWithTokenEntity'
import { ApiEntitiesResourceMilestoneEventEntity } from './entity/ApiEntitiesResourceMilestoneEventEntity'
import { ApiEntitiesSnippetEntity } from './entity/ApiEntitiesSnippetEntity'
import { ApiEntitiesSshKeyWithUserEntity } from './entity/ApiEntitiesSshKeyWithUserEntity'
import { ApiEntitiesSuggestionEntity } from './entity/ApiEntitiesSuggestionEntity'
import { ApiEntitiesSystemBroadcastMessageEntity } from './entity/ApiEntitiesSystemBroadcastMessageEntity'
import { ApiEntitiesTagEntity } from './entity/ApiEntitiesTagEntity'
import { ApiEntitiesTagSignatureEntity } from './entity/ApiEntitiesTagSignatureEntity'
import { ApiEntitiesTemplatesListEntity } from './entity/ApiEntitiesTemplatesListEntity'
import { ApiEntitiesTerraformModuleVersionEntity } from './entity/ApiEntitiesTerraformModuleVersionEntity'
import { ApiEntitiesTreeObjectEntity } from './entity/ApiEntitiesTreeObjectEntity'
import { ApiEntitiesTriggerEntity } from './entity/ApiEntitiesTriggerEntity'
import { ApiEntitiesUserAgentDetailEntity } from './entity/ApiEntitiesUserAgentDetailEntity'
import { ApiEntitiesUserCountEntity } from './entity/ApiEntitiesUserCountEntity'
import { ApiEntitiesUserPublicEntity } from './entity/ApiEntitiesUserPublicEntity'
import { ApiEntitiesUserWithAdminEntity } from './entity/ApiEntitiesUserWithAdminEntity'
import { ApiEntitiesWikiAttachmentEntity } from './entity/ApiEntitiesWikiAttachmentEntity'
import { ApiEntitiesWikiPageEntity } from './entity/ApiEntitiesWikiPageEntity'
import { ApiEntitiesWikiPageBasicEntity } from './entity/ApiEntitiesWikiPageBasicEntity'
import { ApplicationEntity } from './entity/ApplicationEntity'
import { AwardEmojiEntity } from './entity/AwardEmojiEntity'
import { BadgeEntity } from './entity/BadgeEntity'
import { BranchEntity } from './entity/BranchEntity'
import { CargoPackageEntity } from './entity/CargoPackageEntity'
import { CiVariableEntity } from './entity/CiVariableEntity'
import { ClusterEntity } from './entity/ClusterEntity'
import { ClusterAgentEntity } from './entity/ClusterAgentEntity'
import { ComposerEntity } from './entity/ComposerEntity'
import { ComposerPackageEntity } from './entity/ComposerPackageEntity'
import { ConanEntity } from './entity/ConanEntity'
import { ConanPackageEntity } from './entity/ConanPackageEntity'
import { ContainerRegistryEntity } from './entity/ContainerRegistryEntity'
import { ContainerRegistryEventEntity } from './entity/ContainerRegistryEventEntity'
import { CustomAttributeEntity } from './entity/CustomAttributeEntity'
import { DebianEntity } from './entity/DebianEntity'
import { DebianDistributionEntity } from './entity/DebianDistributionEntity'
import { DebianPackageEntity } from './entity/DebianPackageEntity'
import { DependencyProxyEntity } from './entity/DependencyProxyEntity'
import { DeployKeyEntity } from './entity/DeployKeyEntity'
import { DeployTokenEntity } from './entity/DeployTokenEntity'
import { DeploymentEntity } from './entity/DeploymentEntity'
import { EeApiEntitiesApprovalStateEntity } from './entity/EeApiEntitiesApprovalStateEntity'
import { EeApiEntitiesAuditEventEntity } from './entity/EeApiEntitiesAuditEventEntity'
import { EeApiEntitiesBillableMembershipEntity } from './entity/EeApiEntitiesBillableMembershipEntity'
import { EeApiEntitiesGeoNodeStatusEntity } from './entity/EeApiEntitiesGeoNodeStatusEntity'
import { EeApiEntitiesGeoPipelineRefEntity } from './entity/EeApiEntitiesGeoPipelineRefEntity'
import { EeApiEntitiesIssuableMetricImageEntity } from './entity/EeApiEntitiesIssuableMetricImageEntity'
import { EeApiEntitiesMergeRequestApprovalStateEntity } from './entity/EeApiEntitiesMergeRequestApprovalStateEntity'
import { EeApiEntitiesSshCertificateEntity } from './entity/EeApiEntitiesSshCertificateEntity'
import { EnvironmentEntity } from './entity/EnvironmentEntity'
import { ErrorTrackingClientKeyEntity } from './entity/ErrorTrackingClientKeyEntity'
import { FeatureEntity } from './entity/FeatureEntity'
import { FeatureFlagEntity } from './entity/FeatureFlagEntity'
import { FeatureFlagsUserListEntity } from './entity/FeatureFlagsUserListEntity'
import { FreezePeriodEntity } from './entity/FreezePeriodEntity'
import { GenericPackageEntity } from './entity/GenericPackageEntity'
import { GeoEntity } from './entity/GeoEntity'
import { GoProxyEntity } from './entity/GoProxyEntity'
import { GroupEntity } from './entity/GroupEntity'
import { GroupAvatarEntity } from './entity/GroupAvatarEntity'
import { GroupExportEntity } from './entity/GroupExportEntity'
import { GroupImportEntity } from './entity/GroupImportEntity'
import { HelmPackageEntity } from './entity/HelmPackageEntity'
import { HookEntity } from './entity/HookEntity'
import { ImportEntity } from './entity/ImportEntity'
import { IntegrationEntity } from './entity/IntegrationEntity'
import { InvitationEntity } from './entity/InvitationEntity'
import { IssueLinkEntity } from './entity/IssueLinkEntity'
import { IssuesStatisticEntity } from './entity/IssuesStatisticEntity'
import { JobEntity } from './entity/JobEntity'
import { MavenPackageEntity } from './entity/MavenPackageEntity'
import { MemberEntity } from './entity/MemberEntity'
import { MergeRequestEntity } from './entity/MergeRequestEntity'
import { MetadataEntity } from './entity/MetadataEntity'
import { MigrationEntity } from './entity/MigrationEntity'
import { MlModelRegistryEntity } from './entity/MlModelRegistryEntity'
import { NamespaceEntity } from './entity/NamespaceEntity'
import { NpmEntity } from './entity/NpmEntity'
import { NpmPackageEntity } from './entity/NpmPackageEntity'
import { NugetEntity } from './entity/NugetEntity'
import { NugetPackageEntity } from './entity/NugetPackageEntity'
import { PackageFileEntity } from './entity/PackageFileEntity'
import { PageEntity } from './entity/PageEntity'
import { ParticipantEntity } from './entity/ParticipantEntity'
import { PersonalAccessTokenEntity } from './entity/PersonalAccessTokenEntity'
import { ProjectEntityClient } from './entity/ProjectEntityClient'
import { ProjectAvatarEntity } from './entity/ProjectAvatarEntity'
import { ProjectEntityEntity } from './entity/ProjectEntityEntity'
import { ProjectExportEntity } from './entity/ProjectExportEntity'
import { ProjectHookEntity } from './entity/ProjectHookEntity'
import { ProjectImportEntityClient } from './entity/ProjectImportEntityClient'
import { ProjectImportEntityEntity } from './entity/ProjectImportEntityEntity'
import { ProjectPackageEntity } from './entity/ProjectPackageEntity'
import { ProjectSnippetEntity } from './entity/ProjectSnippetEntity'
import { ProjectsJobTokenScopeEntity } from './entity/ProjectsJobTokenScopeEntity'
import { ProtectedTagEntity } from './entity/ProtectedTagEntity'
import { PypiEntity } from './entity/PypiEntity'
import { PypiPackageEntity } from './entity/PypiPackageEntity'
import { ReleaseEntity } from './entity/ReleaseEntity'
import { ReleaseLinkEntity } from './entity/ReleaseLinkEntity'
import { RemoteMirrorEntity } from './entity/RemoteMirrorEntity'
import { RpmEntity } from './entity/RpmEntity'
import { RpmPackageEntity } from './entity/RpmPackageEntity'
import { RubygemEntity } from './entity/RubygemEntity'
import { RubygemPackageEntity } from './entity/RubygemPackageEntity'
import { RunnerEntity } from './entity/RunnerEntity'
import { SearchEntity } from './entity/SearchEntity'
import { SecureFileEntity } from './entity/SecureFileEntity'
import { SlackEntity } from './entity/SlackEntity'
import { SnippetEntity } from './entity/SnippetEntity'
import { StarrerEntity } from './entity/StarrerEntity'
import { SystemHookEntity } from './entity/SystemHookEntity'
import { TagEntity } from './entity/TagEntity'
import { TerraformRegistryEntity } from './entity/TerraformRegistryEntity'
import { TerraformStateEntity } from './entity/TerraformStateEntity'
import { TestReportEntity } from './entity/TestReportEntity'
import { TestReportSummaryEntity } from './entity/TestReportSummaryEntity'
import { TopicEntity } from './entity/TopicEntity'
import { UnleashApiEntity } from './entity/UnleashApiEntity'
import { UsageDataEntity } from './entity/UsageDataEntity'
import { UserEntity } from './entity/UserEntity'
import { WebCommitEntity } from './entity/WebCommitEntity'
import { WikiEntity } from './entity/WikiEntity'

export type * from './GitlabTypes'


import { inspect } from 'node:util'

import type { Context, Feature } from './types'

import { config } from './Config'
import { GitlabEntityBase } from './GitlabEntityBase'
import { Utility } from './utility/Utility'


import { BaseFeature } from './feature/base/BaseFeature'


const stdutil = new Utility()


class GitlabSDK {
  _mode: string = 'live'
  _options: any
  _utility = new Utility()
  _features: Feature[]
  _rootctx: Context

  constructor(options?: any) {

    this._rootctx = this._utility.makeContext({
      client: this,
      utility: this._utility,
      config,
      options,
      shared: new WeakMap()
    })

    this._options = this._utility.makeOptions(this._rootctx)

    const struct = this._utility.struct
    const getpath = struct.getpath

    if (true === getpath(this._options.feature, 'test.active')) {
      this._mode = 'test'
    }

    this._rootctx.options = this._options

    this._features = []

    const featureAdd = this._utility.featureAdd
    const featureInit = this._utility.featureInit

    // Add features in the resolved order (makeOptions puts an explicit
    // array order first, else defaults to test-first). Ordering matters:
    // the `test` feature installs the base mock transport and the transport
    // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
    // so `test` must be added before them to sit at the base of the chain.
    const extend = this._options.extend || []

    const featureorder = getpath(this._options, '__derived__.featureorder') || []
    for (const fname of featureorder) {
      const fopts = this._options.feature[fname] || {}
      if (fopts.active) {
        // An active name with no generated class is legal when an
        // extend-supplied instance carries that name (station's adopt
        // path): the instance is added below, positioned by its own
        // __after__ entry, so skip it here rather than fail construction.
        if (!this._rootctx.config.hasFeature(fname) &&
          extend.some((f: any) => fname === f.name)) {
          continue
        }
        featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname))
      }
    }

    for (let f of extend) {
      featureAdd(this._rootctx, f)
    }

    for (let f of this._features) {
      featureInit(this._rootctx, f)
    }

    const featureHook = this._utility.featureHook
    featureHook(this._rootctx, 'PostConstruct')
  }


  options() {
    return this._utility.struct.clone(this._options)
  }


  utility() {
    return this._utility.struct.clone(this._utility)
  }


  async prepare(fetchargs?: any) {
    const utility = this._utility
    const struct = utility.struct
    const clone = struct.clone

    const {
      makeContext,
      makeFetchDef,
      prepareHeaders,
      prepareAuth,
    } = utility

    fetchargs = fetchargs || {}

    let ctx: Context = makeContext({
      opname: 'prepare',
      ctrl: fetchargs.ctrl || {},
    }, this._rootctx)

    const options = this._options

    // Build spec directly from SDK options + user-provided fetch args.
    const spec: any = {
      base: options.base,
      prefix: options.prefix,
      suffix: options.suffix,
      path: fetchargs.path || '',
      method: fetchargs.method || 'GET',
      params: fetchargs.params || {},
      query: fetchargs.query || {},
      headers: prepareHeaders(ctx),
      body: fetchargs.body,
      step: 'start',
    }

    ctx.spec = spec

    // Merge user-provided headers over SDK defaults.
    if (fetchargs.headers) {
      const uheaders = fetchargs.headers
      for (let key in uheaders) {
        spec.headers[key] = uheaders[key]
      }
    }

    // Apply SDK auth (apikey, auth prefix, etc.)
    const authResult = prepareAuth(ctx)
    if (authResult instanceof Error) {
      return authResult
    }

    return makeFetchDef(ctx)
  }


  // Raw endpoint access is operator-controllable, like every entity op.
  // Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
  // either one reaches the same endpoint.
  async direct(fetchargs?: any) {
    if (!this._options.allow.op.includes('direct')) {
      return {
        ok: false,
        err: new Error('GitlabSDK: direct: operation not allowed by' +
          ' SDK option allow.op value: "' + this._options.allow.op + '"'),
      }
    }

    return this._rawRequest(fetchargs)
  }


  // Ungated request path shared by direct() and graphql(), each of which
  // checks its own allow.op token first. Private, rather than a flag on
  // fetchargs: a caller-supplied marker would let anyone opt straight back
  // out of the gate by passing it.
  async _rawRequest(fetchargs?: any) {
    const utility = this._utility

    const fetcher = utility.fetcher
    const makeContext = utility.makeContext

    const fetchdef = await this.prepare(fetchargs)
    if (fetchdef instanceof Error) {
      return fetchdef
    }

    let ctx: Context = makeContext({
      opname: 'direct',
      ctrl: (fetchargs || {}).ctrl || {},
    }, this._rootctx)

    try {
      const fetched = await fetcher(ctx, fetchdef.url, fetchdef)

      if (null == fetched) {
        return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') }
      }
      else if (fetched instanceof Error) {
        return { ok: false, err: fetched }
      }

      const status = fetched.status

      // No body responses (204 No Content, 304 Not Modified) and explicit
      // zero content-length must skip JSON parsing — fetched.json() would
      // throw `Unexpected end of JSON input` on an empty body.
      const headers = fetched.headers
      const contentLength = headers && 'function' === typeof headers.get
        ? headers.get('content-length')
        : (headers || {})['content-length']
      const noBody = 204 === status || 304 === status || '0' === String(contentLength)

      let json: any = undefined
      if (!noBody) {
        try {
          json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json
        }
        catch (parseErr) {
          // Body wasn't valid JSON — surface the raw response rather than
          // throwing. data stays undefined; callers can inspect status/headers.
          json = undefined
        }
      }

      return {
        ok: status >= 200 && status < 300,
        status,
        headers: fetched.headers,
        data: json,
      }
    }
    catch (err: any) {
      return { ok: false, err }
    }
  }



  // Raw GraphQL access: the pressure valve that makes the generated
  // surface's deliberate omissions (per-call selection sets, typed filter
  // builders, batching, subscriptions) livable — the whole schema stays
  // reachable.
  //
  // Thin wrapper over the same prepare/fetch path `direct` uses, with the
  // one thing raw `direct` cannot do for GraphQL: a GraphQL failure rides
  // HTTP 200 as a top-level `errors` array, so status alone would report a
  // failed query as ok.
  //
  // NOTE: like `direct`, this bypasses the feature pipeline — no retry,
  // ratelimit or paging features apply.
  async graphql(query: string, variables?: any, ctrl?: any) {
    const options = this._options

    if (!options.allow.op.includes('graphql')) {
      return {
        ok: false,
        err: new Error('GitlabSDK: graphql: operation not allowed by' +
          ' SDK option allow.op value: "' + options.allow.op + '"'),
      }
    }

    const res: any = await this._rawRequest({
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: { query, variables: variables || {} },
      ctrl,
    })

    if (res instanceof Error) {
      return res
    }

    // Errors are read BEFORE any status check: a GraphQL parse or validation
    // failure comes back as HTTP 400 carrying the standard { errors: [...] }
    // body, and the raw path represents a non-2xx as { ok: false } with no
    // err — so returning early on status would discard the server's own
    // diagnostics, which are the only useful part of that response.
    const errors = null == res.data ? undefined : res.data.errors

    if (null != errors && Array.isArray(errors) && 0 < errors.length) {
      const first = errors[0] || {}
      const err: any = new Error('GitlabSDK: graphql: ' +
        (first.message || 'graphql error'))
      err.graphql = errors
      return { ok: false, status: res.status, headers: res.headers, err, data: res.data }
    }

    return res
  }



  // Entity access: `client.AccessRequest().list()` / `client.AccessRequest().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AccessRequest(entopts?: Record<string, any>) {
    const self = this
    return new AccessRequestEntity(self, entopts)
  }


  // Entity access: `client.AlertManagement().list()` / `client.AlertManagement().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AlertManagement(entopts?: Record<string, any>) {
    const self = this
    return new AlertManagementEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesAccessRequester().list()` / `client.ApiEntitiesAccessRequester().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesAccessRequester(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesAccessRequesterEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesAppearance().list()` / `client.ApiEntitiesAppearance().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesAppearance(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesAppearanceEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesApplication().list()` / `client.ApiEntitiesApplication().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesApplication(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesApplicationEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesApplicationStatistic().list()` / `client.ApiEntitiesApplicationStatistic().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesApplicationStatistic(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesApplicationStatisticEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesApplicationWithSecret().list()` / `client.ApiEntitiesApplicationWithSecret().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesApplicationWithSecret(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesApplicationWithSecretEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesAvatar().list()` / `client.ApiEntitiesAvatar().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesAvatar(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesAvatarEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesAwardEmoji().list()` / `client.ApiEntitiesAwardEmoji().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesAwardEmoji(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesAwardEmojiEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesBadge().list()` / `client.ApiEntitiesBadge().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesBadge(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesBadgeEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesBasicBadgeDetail().list()` / `client.ApiEntitiesBasicBadgeDetail().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesBasicBadgeDetail(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesBasicBadgeDetailEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesBasicGroupDetail().list()` / `client.ApiEntitiesBasicGroupDetail().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesBasicGroupDetail(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesBasicGroupDetailEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesBasicProjectDetail().list()` / `client.ApiEntitiesBasicProjectDetail().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesBasicProjectDetail(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesBasicProjectDetailEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesBasicRef().list()` / `client.ApiEntitiesBasicRef().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesBasicRef(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesBasicRefEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesBasicSuccess().list()` / `client.ApiEntitiesBasicSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesBasicSuccess(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesBasicSuccessEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesBatchedBackgroundMigration().list()` / `client.ApiEntitiesBatchedBackgroundMigration().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesBatchedBackgroundMigration(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesBatchedBackgroundMigrationEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesBranch().list()` / `client.ApiEntitiesBranch().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesBranch(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesBranchEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesBulkImport().list()` / `client.ApiEntitiesBulkImport().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesBulkImport(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesBulkImportEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesBulkImportsEntityFailure().list()` / `client.ApiEntitiesBulkImportsEntityFailure().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesBulkImportsEntityFailure(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesBulkImportsEntityFailureEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesBulkImportsExportStatus().list()` / `client.ApiEntitiesBulkImportsExportStatus().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesBulkImportsExportStatus(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesBulkImportsExportStatusEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesChangelog().list()` / `client.ApiEntitiesChangelog().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesChangelog(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesChangelogEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesCiBridge().list()` / `client.ApiEntitiesCiBridge().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesCiBridge(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesCiBridgeEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesCiCatalogResourcesVersion().list()` / `client.ApiEntitiesCiCatalogResourcesVersion().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesCiCatalogResourcesVersion(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesCiCatalogResourcesVersionEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesCiJob().list()` / `client.ApiEntitiesCiJob().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesCiJob(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesCiJobEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesCiJobBasic().list()` / `client.ApiEntitiesCiJobBasic().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesCiJobBasic(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesCiJobBasicEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesCiJobBasicWithProject().list()` / `client.ApiEntitiesCiJobBasicWithProject().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesCiJobBasicWithProject(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesCiJobBasicWithProjectEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesCiLintResult().list()` / `client.ApiEntitiesCiLintResult().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesCiLintResult(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesCiLintResultEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesCiPipeline().list()` / `client.ApiEntitiesCiPipeline().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesCiPipeline(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesCiPipelineEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesCiPipelineBasic().list()` / `client.ApiEntitiesCiPipelineBasic().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesCiPipelineBasic(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesCiPipelineBasicEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesCiPipelineSchedule().list()` / `client.ApiEntitiesCiPipelineSchedule().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesCiPipelineSchedule(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesCiPipelineScheduleEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesCiPipelineScheduleDetail().list()` / `client.ApiEntitiesCiPipelineScheduleDetail().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesCiPipelineScheduleDetail(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesCiPipelineScheduleDetailEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesCiResetTokenResult().list()` / `client.ApiEntitiesCiResetTokenResult().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesCiResetTokenResult(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesCiResetTokenResultEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesCiResourceGroup().list()` / `client.ApiEntitiesCiResourceGroup().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesCiResourceGroup(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesCiResourceGroupEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesCiRunner().list()` / `client.ApiEntitiesCiRunner().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesCiRunner(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesCiRunnerEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesCiRunnerDetail().list()` / `client.ApiEntitiesCiRunnerDetail().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesCiRunnerDetail(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesCiRunnerDetailEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesCiRunnerManager().list()` / `client.ApiEntitiesCiRunnerManager().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesCiRunnerManager(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesCiRunnerManagerEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesCiRunnerRegistrationDetail().list()` / `client.ApiEntitiesCiRunnerRegistrationDetail().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesCiRunnerRegistrationDetail(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesCiRunnerRegistrationDetailEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesCiSecureFile().list()` / `client.ApiEntitiesCiSecureFile().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesCiSecureFile(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesCiSecureFileEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesCiVariable().list()` / `client.ApiEntitiesCiVariable().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesCiVariable(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesCiVariableEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesCluster().list()` / `client.ApiEntitiesCluster().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesCluster(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesClusterEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesClusterGroup().list()` / `client.ApiEntitiesClusterGroup().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesClusterGroup(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesClusterGroupEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesClusterProject().list()` / `client.ApiEntitiesClusterProject().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesClusterProject(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesClusterProjectEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesClustersAgent().list()` / `client.ApiEntitiesClustersAgent().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesClustersAgent(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesClustersAgentEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesClustersAgentToken().list()` / `client.ApiEntitiesClustersAgentToken().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesClustersAgentToken(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesClustersAgentTokenEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesClustersAgentTokenBasic().list()` / `client.ApiEntitiesClustersAgentTokenBasic().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesClustersAgentTokenBasic(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesClustersAgentTokenBasicEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesClustersAgentTokenWithToken().list()` / `client.ApiEntitiesClustersAgentTokenWithToken().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesClustersAgentTokenWithToken(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesClustersAgentTokenWithTokenEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesCommit().list()` / `client.ApiEntitiesCommit().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesCommit(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesCommitEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesCommitDetail().list()` / `client.ApiEntitiesCommitDetail().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesCommitDetail(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesCommitDetailEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesCommitNote().list()` / `client.ApiEntitiesCommitNote().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesCommitNote(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesCommitNoteEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesCommitSequence().list()` / `client.ApiEntitiesCommitSequence().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesCommitSequence(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesCommitSequenceEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesCommitSignature().list()` / `client.ApiEntitiesCommitSignature().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesCommitSignature(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesCommitSignatureEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesCommitStatus().list()` / `client.ApiEntitiesCommitStatus().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesCommitStatus(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesCommitStatusEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesCompare().list()` / `client.ApiEntitiesCompare().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesCompare(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesCompareEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesContainerRegistryRepository().list()` / `client.ApiEntitiesContainerRegistryRepository().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesContainerRegistryRepository(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesContainerRegistryRepositoryEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesContainerRegistryTag().list()` / `client.ApiEntitiesContainerRegistryTag().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesContainerRegistryTag(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesContainerRegistryTagEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesContainerRegistryTagDetail().list()` / `client.ApiEntitiesContainerRegistryTagDetail().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesContainerRegistryTagDetail(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesContainerRegistryTagDetailEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesContributor().list()` / `client.ApiEntitiesContributor().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesContributor(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesContributorEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesDeployKey().list()` / `client.ApiEntitiesDeployKey().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesDeployKey(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesDeployKeyEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesDeployKeysProject().list()` / `client.ApiEntitiesDeployKeysProject().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesDeployKeysProject(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesDeployKeysProjectEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesDeployToken().list()` / `client.ApiEntitiesDeployToken().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesDeployToken(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesDeployTokenEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesDeployTokenWithToken().list()` / `client.ApiEntitiesDeployTokenWithToken().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesDeployTokenWithToken(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesDeployTokenWithTokenEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesDeployment().list()` / `client.ApiEntitiesDeployment().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesDeployment(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesDeploymentEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesDeploymentExtended().list()` / `client.ApiEntitiesDeploymentExtended().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesDeploymentExtended(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesDeploymentExtendedEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesDeploymentsApproval().list()` / `client.ApiEntitiesDeploymentsApproval().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesDeploymentsApproval(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesDeploymentsApprovalEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesDictionaryTable().list()` / `client.ApiEntitiesDictionaryTable().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesDictionaryTable(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesDictionaryTableEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesDiff().list()` / `client.ApiEntitiesDiff().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesDiff(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesDiffEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesDiscoveredCluster().list()` / `client.ApiEntitiesDiscoveredCluster().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesDiscoveredCluster(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesDiscoveredClusterEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesDraftNote().list()` / `client.ApiEntitiesDraftNote().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesDraftNote(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesDraftNoteEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesEnvironment().list()` / `client.ApiEntitiesEnvironment().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesEnvironment(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesEnvironmentEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesErrorTrackingClientKey().list()` / `client.ApiEntitiesErrorTrackingClientKey().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesErrorTrackingClientKey(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesErrorTrackingClientKeyEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesErrorTrackingProjectSetting().list()` / `client.ApiEntitiesErrorTrackingProjectSetting().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesErrorTrackingProjectSetting(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesErrorTrackingProjectSettingEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesEvent().list()` / `client.ApiEntitiesEvent().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesEvent(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesEventEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesFeature().list()` / `client.ApiEntitiesFeature().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesFeature(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesFeatureEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesFeatureDefinition().list()` / `client.ApiEntitiesFeatureDefinition().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesFeatureDefinition(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesFeatureDefinitionEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesFeatureFlag().list()` / `client.ApiEntitiesFeatureFlag().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesFeatureFlag(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesFeatureFlagEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesFeatureFlagUserList().list()` / `client.ApiEntitiesFeatureFlagUserList().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesFeatureFlagUserList(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesFeatureFlagUserListEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesFreezePeriod().list()` / `client.ApiEntitiesFreezePeriod().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesFreezePeriod(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesFreezePeriodEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesGitlabSubscription().list()` / `client.ApiEntitiesGitlabSubscription().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesGitlabSubscription(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesGitlabSubscriptionEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesGoModuleVersion().list()` / `client.ApiEntitiesGoModuleVersion().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesGoModuleVersion(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesGoModuleVersionEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesGroup().list()` / `client.ApiEntitiesGroup().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesGroup(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesGroupEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesGroupDetail().list()` / `client.ApiEntitiesGroupDetail().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesGroupDetail(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesGroupDetailEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesHook().list()` / `client.ApiEntitiesHook().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesHook(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesHookEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesIntegration().list()` / `client.ApiEntitiesIntegration().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesIntegration(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesIntegrationEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesIntegrationBasic().list()` / `client.ApiEntitiesIntegrationBasic().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesIntegrationBasic(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesIntegrationBasicEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesInvitation().list()` / `client.ApiEntitiesInvitation().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesInvitation(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesInvitationEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesIssuableTimeStat().list()` / `client.ApiEntitiesIssuableTimeStat().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesIssuableTimeStat(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesIssuableTimeStatEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesIssue().list()` / `client.ApiEntitiesIssue().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesIssue(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesIssueEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesIssueLink().list()` / `client.ApiEntitiesIssueLink().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesIssueLink(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesIssueLinkEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesLicense().list()` / `client.ApiEntitiesLicense().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesLicense(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesLicenseEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesMarkdown().list()` / `client.ApiEntitiesMarkdown().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesMarkdown(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesMarkdownEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesMarkdownUploadAdmin().list()` / `client.ApiEntitiesMarkdownUploadAdmin().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesMarkdownUploadAdmin(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesMarkdownUploadAdminEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesMember().list()` / `client.ApiEntitiesMember().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesMember(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesMemberEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesMerge().list()` / `client.ApiEntitiesMerge().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesMerge(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesMergeEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesMergeRequestApproval().list()` / `client.ApiEntitiesMergeRequestApproval().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesMergeRequestApproval(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesMergeRequestApprovalEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesMergeRequestBasic().list()` / `client.ApiEntitiesMergeRequestBasic().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesMergeRequestBasic(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesMergeRequestBasicEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesMergeRequestChange().list()` / `client.ApiEntitiesMergeRequestChange().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesMergeRequestChange(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesMergeRequestChangeEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesMergeRequestDiff().list()` / `client.ApiEntitiesMergeRequestDiff().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesMergeRequestDiff(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesMergeRequestDiffEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesMergeRequestDiffFull().list()` / `client.ApiEntitiesMergeRequestDiffFull().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesMergeRequestDiffFull(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesMergeRequestDiffFullEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesMergeRequestReviewer().list()` / `client.ApiEntitiesMergeRequestReviewer().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesMergeRequestReviewer(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesMergeRequestReviewerEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesMetricImage().list()` / `client.ApiEntitiesMetricImage().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesMetricImage(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesMetricImageEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesMrNote().list()` / `client.ApiEntitiesMrNote().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesMrNote(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesMrNoteEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesNamespace().list()` / `client.ApiEntitiesNamespace().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesNamespace(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesNamespaceEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesNamespaceExistence().list()` / `client.ApiEntitiesNamespaceExistence().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesNamespaceExistence(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesNamespaceExistenceEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesNamespacesStorageLimitExclusion().list()` / `client.ApiEntitiesNamespacesStorageLimitExclusion().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesNamespacesStorageLimitExclusion(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesNamespacesStorageLimitExclusionEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesNpmPackage().list()` / `client.ApiEntitiesNpmPackage().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesNpmPackage(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesNpmPackageEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesNpmPackageTag().list()` / `client.ApiEntitiesNpmPackageTag().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesNpmPackageTag(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesNpmPackageTagEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesNugetPackagesVersion().list()` / `client.ApiEntitiesNugetPackagesVersion().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesNugetPackagesVersion(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesNugetPackagesVersionEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesNugetSearchResult().list()` / `client.ApiEntitiesNugetSearchResult().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesNugetSearchResult(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesNugetSearchResultEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesNugetServiceIndex().list()` / `client.ApiEntitiesNugetServiceIndex().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesNugetServiceIndex(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesNugetServiceIndexEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesOrganizationsOrganization().list()` / `client.ApiEntitiesOrganizationsOrganization().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesOrganizationsOrganization(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesOrganizationsOrganizationEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesPackage().list()` / `client.ApiEntitiesPackage().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesPackage(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesPackageEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesPackageFile().list()` / `client.ApiEntitiesPackageFile().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesPackageFile(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesPackageFileEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesPackagePipeline().list()` / `client.ApiEntitiesPackagePipeline().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesPackagePipeline(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesPackagePipelineEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesPackagesConanFilesList().list()` / `client.ApiEntitiesPackagesConanFilesList().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesPackagesConanFilesList(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesPackagesConanFilesListEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesPackagesConanPackageManifest().list()` / `client.ApiEntitiesPackagesConanPackageManifest().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesPackagesConanPackageManifest(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesPackagesConanPackageManifestEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesPackagesConanPackageRevision().list()` / `client.ApiEntitiesPackagesConanPackageRevision().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesPackagesConanPackageRevision(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesPackagesConanPackageRevisionEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesPackagesConanPackageSnapshot().list()` / `client.ApiEntitiesPackagesConanPackageSnapshot().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesPackagesConanPackageSnapshot(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesPackagesConanPackageSnapshotEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesPackagesConanRecipeManifest().list()` / `client.ApiEntitiesPackagesConanRecipeManifest().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesPackagesConanRecipeManifest(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesPackagesConanRecipeManifestEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesPackagesConanRecipeRevision().list()` / `client.ApiEntitiesPackagesConanRecipeRevision().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesPackagesConanRecipeRevision(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesPackagesConanRecipeRevisionEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesPackagesConanRecipeSnapshot().list()` / `client.ApiEntitiesPackagesConanRecipeSnapshot().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesPackagesConanRecipeSnapshot(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesPackagesConanRecipeSnapshotEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesPackagesConanRevision().list()` / `client.ApiEntitiesPackagesConanRevision().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesPackagesConanRevision(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesPackagesConanRevisionEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesPackagesConanUploadUrl().list()` / `client.ApiEntitiesPackagesConanUploadUrl().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesPackagesConanUploadUrl(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesPackagesConanUploadUrlEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesPackagesDebianDistribution().list()` / `client.ApiEntitiesPackagesDebianDistribution().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesPackagesDebianDistribution(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesPackagesDebianDistributionEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesPagesDomain().list()` / `client.ApiEntitiesPagesDomain().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesPagesDomain(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesPagesDomainEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesPagesDomainBasic().list()` / `client.ApiEntitiesPagesDomainBasic().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesPagesDomainBasic(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesPagesDomainBasicEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesPersonalAccessToken().list()` / `client.ApiEntitiesPersonalAccessToken().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesPersonalAccessToken(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesPersonalAccessTokenEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesPersonalAccessTokenWithLastUsedIp().list()` / `client.ApiEntitiesPersonalAccessTokenWithLastUsedIp().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesPersonalAccessTokenWithLastUsedIp(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesPersonalAccessTokenWithLastUsedIpEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesPersonalAccessTokenWithToken().list()` / `client.ApiEntitiesPersonalAccessTokenWithToken().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesPersonalAccessTokenWithToken(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesPersonalAccessTokenWithTokenEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesPersonalSnippet().list()` / `client.ApiEntitiesPersonalSnippet().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesPersonalSnippet(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesPersonalSnippetEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesPlanLimit().list()` / `client.ApiEntitiesPlanLimit().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesPlanLimit(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesPlanLimitEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesProject().list()` / `client.ApiEntitiesProject().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesProject(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesProjectEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesProjectDailyStatistic().list()` / `client.ApiEntitiesProjectDailyStatistic().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesProjectDailyStatistic(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesProjectDailyStatisticEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesProjectExportStatus().list()` / `client.ApiEntitiesProjectExportStatus().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesProjectExportStatus(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesProjectExportStatusEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesProjectGroupLink().list()` / `client.ApiEntitiesProjectGroupLink().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesProjectGroupLink(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesProjectGroupLinkEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesProjectHook().list()` / `client.ApiEntitiesProjectHook().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesProjectHook(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesProjectHookEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesProjectImportStatus().list()` / `client.ApiEntitiesProjectImportStatus().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesProjectImportStatus(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesProjectImportStatusEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesProjectJobTokenScope().list()` / `client.ApiEntitiesProjectJobTokenScope().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesProjectJobTokenScope(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesProjectJobTokenScopeEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesProjectRepositoryStorage().list()` / `client.ApiEntitiesProjectRepositoryStorage().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesProjectRepositoryStorage(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesProjectRepositoryStorageEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesProjectSnippet().list()` / `client.ApiEntitiesProjectSnippet().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesProjectSnippet(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesProjectSnippetEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesProjectUpload().list()` / `client.ApiEntitiesProjectUpload().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesProjectUpload(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesProjectUploadEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesProjectWithAccess().list()` / `client.ApiEntitiesProjectWithAccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesProjectWithAccess(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesProjectWithAccessEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesProjectsContainerRegistryProtectionRule().list()` / `client.ApiEntitiesProjectsContainerRegistryProtectionRule().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesProjectsContainerRegistryProtectionRule(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesProjectsContainerRegistryProtectionRuleEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesProjectsPackagesProtectionRule().list()` / `client.ApiEntitiesProjectsPackagesProtectionRule().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesProjectsPackagesProtectionRule(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesProjectsPackagesProtectionRuleEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesProjectsTopic().list()` / `client.ApiEntitiesProjectsTopic().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesProjectsTopic(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesProjectsTopicEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesProtectedBranch().list()` / `client.ApiEntitiesProtectedBranch().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesProtectedBranch(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesProtectedBranchEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesProtectedTag().list()` / `client.ApiEntitiesProtectedTag().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesProtectedTag(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesProtectedTagEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesPublicGroupDetail().list()` / `client.ApiEntitiesPublicGroupDetail().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesPublicGroupDetail(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesPublicGroupDetailEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesRelatedIssue().list()` / `client.ApiEntitiesRelatedIssue().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesRelatedIssue(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesRelatedIssueEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesRelationImportTracker().list()` / `client.ApiEntitiesRelationImportTracker().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesRelationImportTracker(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesRelationImportTrackerEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesRelease().list()` / `client.ApiEntitiesRelease().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesRelease(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesReleaseEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesReleasesLink().list()` / `client.ApiEntitiesReleasesLink().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesReleasesLink(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesReleasesLinkEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesRemoteMirror().list()` / `client.ApiEntitiesRemoteMirror().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesRemoteMirror(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesRemoteMirrorEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesRepositoryHealth().list()` / `client.ApiEntitiesRepositoryHealth().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesRepositoryHealth(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesRepositoryHealthEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesResourceAccessTokenWithToken().list()` / `client.ApiEntitiesResourceAccessTokenWithToken().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesResourceAccessTokenWithToken(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesResourceAccessTokenWithTokenEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesResourceMilestoneEvent().list()` / `client.ApiEntitiesResourceMilestoneEvent().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesResourceMilestoneEvent(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesResourceMilestoneEventEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesSnippet().list()` / `client.ApiEntitiesSnippet().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesSnippet(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesSnippetEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesSshKeyWithUser().list()` / `client.ApiEntitiesSshKeyWithUser().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesSshKeyWithUser(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesSshKeyWithUserEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesSuggestion().list()` / `client.ApiEntitiesSuggestion().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesSuggestion(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesSuggestionEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesSystemBroadcastMessage().list()` / `client.ApiEntitiesSystemBroadcastMessage().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesSystemBroadcastMessage(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesSystemBroadcastMessageEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesTag().list()` / `client.ApiEntitiesTag().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesTag(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesTagEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesTagSignature().list()` / `client.ApiEntitiesTagSignature().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesTagSignature(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesTagSignatureEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesTemplatesList().list()` / `client.ApiEntitiesTemplatesList().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesTemplatesList(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesTemplatesListEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesTerraformModuleVersion().list()` / `client.ApiEntitiesTerraformModuleVersion().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesTerraformModuleVersion(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesTerraformModuleVersionEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesTreeObject().list()` / `client.ApiEntitiesTreeObject().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesTreeObject(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesTreeObjectEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesTrigger().list()` / `client.ApiEntitiesTrigger().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesTrigger(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesTriggerEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesUserAgentDetail().list()` / `client.ApiEntitiesUserAgentDetail().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesUserAgentDetail(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesUserAgentDetailEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesUserCount().list()` / `client.ApiEntitiesUserCount().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesUserCount(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesUserCountEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesUserPublic().list()` / `client.ApiEntitiesUserPublic().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesUserPublic(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesUserPublicEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesUserWithAdmin().list()` / `client.ApiEntitiesUserWithAdmin().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesUserWithAdmin(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesUserWithAdminEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesWikiAttachment().list()` / `client.ApiEntitiesWikiAttachment().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesWikiAttachment(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesWikiAttachmentEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesWikiPage().list()` / `client.ApiEntitiesWikiPage().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesWikiPage(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesWikiPageEntity(self, entopts)
  }


  // Entity access: `client.ApiEntitiesWikiPageBasic().list()` / `client.ApiEntitiesWikiPageBasic().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiEntitiesWikiPageBasic(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntitiesWikiPageBasicEntity(self, entopts)
  }


  // Entity access: `client.Application().list()` / `client.Application().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Application(entopts?: Record<string, any>) {
    const self = this
    return new ApplicationEntity(self, entopts)
  }


  // Entity access: `client.AwardEmoji().list()` / `client.AwardEmoji().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AwardEmoji(entopts?: Record<string, any>) {
    const self = this
    return new AwardEmojiEntity(self, entopts)
  }


  // Entity access: `client.Badge().list()` / `client.Badge().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Badge(entopts?: Record<string, any>) {
    const self = this
    return new BadgeEntity(self, entopts)
  }


  // Entity access: `client.Branch().list()` / `client.Branch().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Branch(entopts?: Record<string, any>) {
    const self = this
    return new BranchEntity(self, entopts)
  }


  // Entity access: `client.CargoPackage().list()` / `client.CargoPackage().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CargoPackage(entopts?: Record<string, any>) {
    const self = this
    return new CargoPackageEntity(self, entopts)
  }


  // Entity access: `client.CiVariable().list()` / `client.CiVariable().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CiVariable(entopts?: Record<string, any>) {
    const self = this
    return new CiVariableEntity(self, entopts)
  }


  // Entity access: `client.Cluster().list()` / `client.Cluster().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Cluster(entopts?: Record<string, any>) {
    const self = this
    return new ClusterEntity(self, entopts)
  }


  // Entity access: `client.ClusterAgent().list()` / `client.ClusterAgent().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ClusterAgent(entopts?: Record<string, any>) {
    const self = this
    return new ClusterAgentEntity(self, entopts)
  }


  // Entity access: `client.Composer().list()` / `client.Composer().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Composer(entopts?: Record<string, any>) {
    const self = this
    return new ComposerEntity(self, entopts)
  }


  // Entity access: `client.ComposerPackage().list()` / `client.ComposerPackage().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ComposerPackage(entopts?: Record<string, any>) {
    const self = this
    return new ComposerPackageEntity(self, entopts)
  }


  // Entity access: `client.Conan().list()` / `client.Conan().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Conan(entopts?: Record<string, any>) {
    const self = this
    return new ConanEntity(self, entopts)
  }


  // Entity access: `client.ConanPackage().list()` / `client.ConanPackage().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ConanPackage(entopts?: Record<string, any>) {
    const self = this
    return new ConanPackageEntity(self, entopts)
  }


  // Entity access: `client.ContainerRegistry().list()` / `client.ContainerRegistry().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ContainerRegistry(entopts?: Record<string, any>) {
    const self = this
    return new ContainerRegistryEntity(self, entopts)
  }


  // Entity access: `client.ContainerRegistryEvent().list()` / `client.ContainerRegistryEvent().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ContainerRegistryEvent(entopts?: Record<string, any>) {
    const self = this
    return new ContainerRegistryEventEntity(self, entopts)
  }


  // Entity access: `client.CustomAttribute().list()` / `client.CustomAttribute().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CustomAttribute(entopts?: Record<string, any>) {
    const self = this
    return new CustomAttributeEntity(self, entopts)
  }


  // Entity access: `client.Debian().list()` / `client.Debian().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Debian(entopts?: Record<string, any>) {
    const self = this
    return new DebianEntity(self, entopts)
  }


  // Entity access: `client.DebianDistribution().list()` / `client.DebianDistribution().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DebianDistribution(entopts?: Record<string, any>) {
    const self = this
    return new DebianDistributionEntity(self, entopts)
  }


  // Entity access: `client.DebianPackage().list()` / `client.DebianPackage().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DebianPackage(entopts?: Record<string, any>) {
    const self = this
    return new DebianPackageEntity(self, entopts)
  }


  // Entity access: `client.DependencyProxy().list()` / `client.DependencyProxy().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DependencyProxy(entopts?: Record<string, any>) {
    const self = this
    return new DependencyProxyEntity(self, entopts)
  }


  // Entity access: `client.DeployKey().list()` / `client.DeployKey().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DeployKey(entopts?: Record<string, any>) {
    const self = this
    return new DeployKeyEntity(self, entopts)
  }


  // Entity access: `client.DeployToken().list()` / `client.DeployToken().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DeployToken(entopts?: Record<string, any>) {
    const self = this
    return new DeployTokenEntity(self, entopts)
  }


  // Entity access: `client.Deployment().list()` / `client.Deployment().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Deployment(entopts?: Record<string, any>) {
    const self = this
    return new DeploymentEntity(self, entopts)
  }


  // Entity access: `client.EeApiEntitiesApprovalState().list()` / `client.EeApiEntitiesApprovalState().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  EeApiEntitiesApprovalState(entopts?: Record<string, any>) {
    const self = this
    return new EeApiEntitiesApprovalStateEntity(self, entopts)
  }


  // Entity access: `client.EeApiEntitiesAuditEvent().list()` / `client.EeApiEntitiesAuditEvent().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  EeApiEntitiesAuditEvent(entopts?: Record<string, any>) {
    const self = this
    return new EeApiEntitiesAuditEventEntity(self, entopts)
  }


  // Entity access: `client.EeApiEntitiesBillableMembership().list()` / `client.EeApiEntitiesBillableMembership().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  EeApiEntitiesBillableMembership(entopts?: Record<string, any>) {
    const self = this
    return new EeApiEntitiesBillableMembershipEntity(self, entopts)
  }


  // Entity access: `client.EeApiEntitiesGeoNodeStatus().list()` / `client.EeApiEntitiesGeoNodeStatus().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  EeApiEntitiesGeoNodeStatus(entopts?: Record<string, any>) {
    const self = this
    return new EeApiEntitiesGeoNodeStatusEntity(self, entopts)
  }


  // Entity access: `client.EeApiEntitiesGeoPipelineRef().list()` / `client.EeApiEntitiesGeoPipelineRef().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  EeApiEntitiesGeoPipelineRef(entopts?: Record<string, any>) {
    const self = this
    return new EeApiEntitiesGeoPipelineRefEntity(self, entopts)
  }


  // Entity access: `client.EeApiEntitiesIssuableMetricImage().list()` / `client.EeApiEntitiesIssuableMetricImage().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  EeApiEntitiesIssuableMetricImage(entopts?: Record<string, any>) {
    const self = this
    return new EeApiEntitiesIssuableMetricImageEntity(self, entopts)
  }


  // Entity access: `client.EeApiEntitiesMergeRequestApprovalState().list()` / `client.EeApiEntitiesMergeRequestApprovalState().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  EeApiEntitiesMergeRequestApprovalState(entopts?: Record<string, any>) {
    const self = this
    return new EeApiEntitiesMergeRequestApprovalStateEntity(self, entopts)
  }


  // Entity access: `client.EeApiEntitiesSshCertificate().list()` / `client.EeApiEntitiesSshCertificate().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  EeApiEntitiesSshCertificate(entopts?: Record<string, any>) {
    const self = this
    return new EeApiEntitiesSshCertificateEntity(self, entopts)
  }


  // Entity access: `client.Environment().list()` / `client.Environment().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Environment(entopts?: Record<string, any>) {
    const self = this
    return new EnvironmentEntity(self, entopts)
  }


  // Entity access: `client.ErrorTrackingClientKey().list()` / `client.ErrorTrackingClientKey().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ErrorTrackingClientKey(entopts?: Record<string, any>) {
    const self = this
    return new ErrorTrackingClientKeyEntity(self, entopts)
  }


  // Entity access: `client.Feature().list()` / `client.Feature().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Feature(entopts?: Record<string, any>) {
    const self = this
    return new FeatureEntity(self, entopts)
  }


  // Entity access: `client.FeatureFlag().list()` / `client.FeatureFlag().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  FeatureFlag(entopts?: Record<string, any>) {
    const self = this
    return new FeatureFlagEntity(self, entopts)
  }


  // Entity access: `client.FeatureFlagsUserList().list()` / `client.FeatureFlagsUserList().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  FeatureFlagsUserList(entopts?: Record<string, any>) {
    const self = this
    return new FeatureFlagsUserListEntity(self, entopts)
  }


  // Entity access: `client.FreezePeriod().list()` / `client.FreezePeriod().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  FreezePeriod(entopts?: Record<string, any>) {
    const self = this
    return new FreezePeriodEntity(self, entopts)
  }


  // Entity access: `client.GenericPackage().list()` / `client.GenericPackage().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  GenericPackage(entopts?: Record<string, any>) {
    const self = this
    return new GenericPackageEntity(self, entopts)
  }


  // Entity access: `client.Geo().list()` / `client.Geo().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Geo(entopts?: Record<string, any>) {
    const self = this
    return new GeoEntity(self, entopts)
  }


  // Entity access: `client.GoProxy().list()` / `client.GoProxy().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  GoProxy(entopts?: Record<string, any>) {
    const self = this
    return new GoProxyEntity(self, entopts)
  }


  // Entity access: `client.Group().list()` / `client.Group().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Group(entopts?: Record<string, any>) {
    const self = this
    return new GroupEntity(self, entopts)
  }


  // Entity access: `client.GroupAvatar().list()` / `client.GroupAvatar().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  GroupAvatar(entopts?: Record<string, any>) {
    const self = this
    return new GroupAvatarEntity(self, entopts)
  }


  // Entity access: `client.GroupExport().list()` / `client.GroupExport().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  GroupExport(entopts?: Record<string, any>) {
    const self = this
    return new GroupExportEntity(self, entopts)
  }


  // Entity access: `client.GroupImport().list()` / `client.GroupImport().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  GroupImport(entopts?: Record<string, any>) {
    const self = this
    return new GroupImportEntity(self, entopts)
  }


  // Entity access: `client.HelmPackage().list()` / `client.HelmPackage().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  HelmPackage(entopts?: Record<string, any>) {
    const self = this
    return new HelmPackageEntity(self, entopts)
  }


  // Entity access: `client.Hook().list()` / `client.Hook().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Hook(entopts?: Record<string, any>) {
    const self = this
    return new HookEntity(self, entopts)
  }


  // Entity access: `client.Import().list()` / `client.Import().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Import(entopts?: Record<string, any>) {
    const self = this
    return new ImportEntity(self, entopts)
  }


  // Entity access: `client.Integration().list()` / `client.Integration().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Integration(entopts?: Record<string, any>) {
    const self = this
    return new IntegrationEntity(self, entopts)
  }


  // Entity access: `client.Invitation().list()` / `client.Invitation().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Invitation(entopts?: Record<string, any>) {
    const self = this
    return new InvitationEntity(self, entopts)
  }


  // Entity access: `client.IssueLink().list()` / `client.IssueLink().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  IssueLink(entopts?: Record<string, any>) {
    const self = this
    return new IssueLinkEntity(self, entopts)
  }


  // Entity access: `client.IssuesStatistic().list()` / `client.IssuesStatistic().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  IssuesStatistic(entopts?: Record<string, any>) {
    const self = this
    return new IssuesStatisticEntity(self, entopts)
  }


  // Entity access: `client.Job().list()` / `client.Job().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Job(entopts?: Record<string, any>) {
    const self = this
    return new JobEntity(self, entopts)
  }


  // Entity access: `client.MavenPackage().list()` / `client.MavenPackage().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  MavenPackage(entopts?: Record<string, any>) {
    const self = this
    return new MavenPackageEntity(self, entopts)
  }


  // Entity access: `client.Member().list()` / `client.Member().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Member(entopts?: Record<string, any>) {
    const self = this
    return new MemberEntity(self, entopts)
  }


  // Entity access: `client.MergeRequest().list()` / `client.MergeRequest().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  MergeRequest(entopts?: Record<string, any>) {
    const self = this
    return new MergeRequestEntity(self, entopts)
  }


  // Entity access: `client.Metadata().list()` / `client.Metadata().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Metadata(entopts?: Record<string, any>) {
    const self = this
    return new MetadataEntity(self, entopts)
  }


  // Entity access: `client.Migration().list()` / `client.Migration().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Migration(entopts?: Record<string, any>) {
    const self = this
    return new MigrationEntity(self, entopts)
  }


  // Entity access: `client.MlModelRegistry().list()` / `client.MlModelRegistry().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  MlModelRegistry(entopts?: Record<string, any>) {
    const self = this
    return new MlModelRegistryEntity(self, entopts)
  }


  // Entity access: `client.Namespace().list()` / `client.Namespace().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Namespace(entopts?: Record<string, any>) {
    const self = this
    return new NamespaceEntity(self, entopts)
  }


  // Entity access: `client.Npm().list()` / `client.Npm().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Npm(entopts?: Record<string, any>) {
    const self = this
    return new NpmEntity(self, entopts)
  }


  // Entity access: `client.NpmPackage().list()` / `client.NpmPackage().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  NpmPackage(entopts?: Record<string, any>) {
    const self = this
    return new NpmPackageEntity(self, entopts)
  }


  // Entity access: `client.Nuget().list()` / `client.Nuget().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Nuget(entopts?: Record<string, any>) {
    const self = this
    return new NugetEntity(self, entopts)
  }


  // Entity access: `client.NugetPackage().list()` / `client.NugetPackage().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  NugetPackage(entopts?: Record<string, any>) {
    const self = this
    return new NugetPackageEntity(self, entopts)
  }


  // Entity access: `client.PackageFile().list()` / `client.PackageFile().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PackageFile(entopts?: Record<string, any>) {
    const self = this
    return new PackageFileEntity(self, entopts)
  }


  // Entity access: `client.Page().list()` / `client.Page().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Page(entopts?: Record<string, any>) {
    const self = this
    return new PageEntity(self, entopts)
  }


  // Entity access: `client.Participant().list()` / `client.Participant().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Participant(entopts?: Record<string, any>) {
    const self = this
    return new ParticipantEntity(self, entopts)
  }


  // Entity access: `client.PersonalAccessToken().list()` / `client.PersonalAccessToken().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PersonalAccessToken(entopts?: Record<string, any>) {
    const self = this
    return new PersonalAccessTokenEntity(self, entopts)
  }


  // Entity access: `client.Project().list()` / `client.Project().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Project(entopts?: Record<string, any>) {
    const self = this
    return new ProjectEntityClient(self, entopts)
  }


  // Entity access: `client.ProjectAvatar().list()` / `client.ProjectAvatar().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ProjectAvatar(entopts?: Record<string, any>) {
    const self = this
    return new ProjectAvatarEntity(self, entopts)
  }


  // Entity access: `client.ProjectEntity().list()` / `client.ProjectEntity().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ProjectEntity(entopts?: Record<string, any>) {
    const self = this
    return new ProjectEntityEntity(self, entopts)
  }


  // Entity access: `client.ProjectExport().list()` / `client.ProjectExport().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ProjectExport(entopts?: Record<string, any>) {
    const self = this
    return new ProjectExportEntity(self, entopts)
  }


  // Entity access: `client.ProjectHook().list()` / `client.ProjectHook().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ProjectHook(entopts?: Record<string, any>) {
    const self = this
    return new ProjectHookEntity(self, entopts)
  }


  // Entity access: `client.ProjectImport().list()` / `client.ProjectImport().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ProjectImport(entopts?: Record<string, any>) {
    const self = this
    return new ProjectImportEntityClient(self, entopts)
  }


  // Entity access: `client.ProjectImportEntity().list()` / `client.ProjectImportEntity().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ProjectImportEntity(entopts?: Record<string, any>) {
    const self = this
    return new ProjectImportEntityEntity(self, entopts)
  }


  // Entity access: `client.ProjectPackage().list()` / `client.ProjectPackage().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ProjectPackage(entopts?: Record<string, any>) {
    const self = this
    return new ProjectPackageEntity(self, entopts)
  }


  // Entity access: `client.ProjectSnippet().list()` / `client.ProjectSnippet().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ProjectSnippet(entopts?: Record<string, any>) {
    const self = this
    return new ProjectSnippetEntity(self, entopts)
  }


  // Entity access: `client.ProjectsJobTokenScope().list()` / `client.ProjectsJobTokenScope().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ProjectsJobTokenScope(entopts?: Record<string, any>) {
    const self = this
    return new ProjectsJobTokenScopeEntity(self, entopts)
  }


  // Entity access: `client.ProtectedTag().list()` / `client.ProtectedTag().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ProtectedTag(entopts?: Record<string, any>) {
    const self = this
    return new ProtectedTagEntity(self, entopts)
  }


  // Entity access: `client.Pypi().list()` / `client.Pypi().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Pypi(entopts?: Record<string, any>) {
    const self = this
    return new PypiEntity(self, entopts)
  }


  // Entity access: `client.PypiPackage().list()` / `client.PypiPackage().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PypiPackage(entopts?: Record<string, any>) {
    const self = this
    return new PypiPackageEntity(self, entopts)
  }


  // Entity access: `client.Release().list()` / `client.Release().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Release(entopts?: Record<string, any>) {
    const self = this
    return new ReleaseEntity(self, entopts)
  }


  // Entity access: `client.ReleaseLink().list()` / `client.ReleaseLink().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ReleaseLink(entopts?: Record<string, any>) {
    const self = this
    return new ReleaseLinkEntity(self, entopts)
  }


  // Entity access: `client.RemoteMirror().list()` / `client.RemoteMirror().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RemoteMirror(entopts?: Record<string, any>) {
    const self = this
    return new RemoteMirrorEntity(self, entopts)
  }


  // Entity access: `client.Rpm().list()` / `client.Rpm().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Rpm(entopts?: Record<string, any>) {
    const self = this
    return new RpmEntity(self, entopts)
  }


  // Entity access: `client.RpmPackage().list()` / `client.RpmPackage().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RpmPackage(entopts?: Record<string, any>) {
    const self = this
    return new RpmPackageEntity(self, entopts)
  }


  // Entity access: `client.Rubygem().list()` / `client.Rubygem().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Rubygem(entopts?: Record<string, any>) {
    const self = this
    return new RubygemEntity(self, entopts)
  }


  // Entity access: `client.RubygemPackage().list()` / `client.RubygemPackage().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RubygemPackage(entopts?: Record<string, any>) {
    const self = this
    return new RubygemPackageEntity(self, entopts)
  }


  // Entity access: `client.Runner().list()` / `client.Runner().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Runner(entopts?: Record<string, any>) {
    const self = this
    return new RunnerEntity(self, entopts)
  }


  // Entity access: `client.Search().list()` / `client.Search().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Search(entopts?: Record<string, any>) {
    const self = this
    return new SearchEntity(self, entopts)
  }


  // Entity access: `client.SecureFile().list()` / `client.SecureFile().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SecureFile(entopts?: Record<string, any>) {
    const self = this
    return new SecureFileEntity(self, entopts)
  }


  // Entity access: `client.Slack().list()` / `client.Slack().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Slack(entopts?: Record<string, any>) {
    const self = this
    return new SlackEntity(self, entopts)
  }


  // Entity access: `client.Snippet().list()` / `client.Snippet().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Snippet(entopts?: Record<string, any>) {
    const self = this
    return new SnippetEntity(self, entopts)
  }


  // Entity access: `client.Starrer().list()` / `client.Starrer().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Starrer(entopts?: Record<string, any>) {
    const self = this
    return new StarrerEntity(self, entopts)
  }


  // Entity access: `client.SystemHook().list()` / `client.SystemHook().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SystemHook(entopts?: Record<string, any>) {
    const self = this
    return new SystemHookEntity(self, entopts)
  }


  // Entity access: `client.Tag().list()` / `client.Tag().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Tag(entopts?: Record<string, any>) {
    const self = this
    return new TagEntity(self, entopts)
  }


  // Entity access: `client.TerraformRegistry().list()` / `client.TerraformRegistry().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TerraformRegistry(entopts?: Record<string, any>) {
    const self = this
    return new TerraformRegistryEntity(self, entopts)
  }


  // Entity access: `client.TerraformState().list()` / `client.TerraformState().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TerraformState(entopts?: Record<string, any>) {
    const self = this
    return new TerraformStateEntity(self, entopts)
  }


  // Entity access: `client.TestReport().list()` / `client.TestReport().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TestReport(entopts?: Record<string, any>) {
    const self = this
    return new TestReportEntity(self, entopts)
  }


  // Entity access: `client.TestReportSummary().list()` / `client.TestReportSummary().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TestReportSummary(entopts?: Record<string, any>) {
    const self = this
    return new TestReportSummaryEntity(self, entopts)
  }


  // Entity access: `client.Topic().list()` / `client.Topic().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Topic(entopts?: Record<string, any>) {
    const self = this
    return new TopicEntity(self, entopts)
  }


  // Entity access: `client.UnleashApi().list()` / `client.UnleashApi().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  UnleashApi(entopts?: Record<string, any>) {
    const self = this
    return new UnleashApiEntity(self, entopts)
  }


  // Entity access: `client.UsageData().list()` / `client.UsageData().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  UsageData(entopts?: Record<string, any>) {
    const self = this
    return new UsageDataEntity(self, entopts)
  }


  // Entity access: `client.User().list()` / `client.User().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  User(entopts?: Record<string, any>) {
    const self = this
    return new UserEntity(self, entopts)
  }


  // Entity access: `client.WebCommit().list()` / `client.WebCommit().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  WebCommit(entopts?: Record<string, any>) {
    const self = this
    return new WebCommitEntity(self, entopts)
  }


  // Entity access: `client.Wiki().list()` / `client.Wiki().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Wiki(entopts?: Record<string, any>) {
    const self = this
    return new WikiEntity(self, entopts)
  }




  static test(testoptsarg?: any, sdkoptsarg?: any) {
    const struct = stdutil.struct
    const setpath = struct.setpath
    const getdef = struct.getdef
    const clone = struct.clone
    const setprop = struct.setprop

    const sdkopts = getdef(clone(sdkoptsarg), {})
    const testopts = getdef(clone(testoptsarg), {})
    setprop(testopts, 'active', true)
    setpath(sdkopts, 'feature.test', testopts)

    const testsdk = new GitlabSDK(sdkopts)
    testsdk._mode = 'test'

    return testsdk
  }


  tester(testopts?: any, sdkopts?: any) {
    return GitlabSDK.test(testopts, sdkopts)
  }


  toJSON() {
    return { name: 'Gitlab' }
  }

  toString() {
    return 'Gitlab ' + this._utility.struct.jsonify(this.toJSON())
  }

  [inspect.custom]() {
    return this.toString()
  }

}




const SDK = GitlabSDK


export {
  stdutil,
  config,

  BaseFeature,
  GitlabEntityBase,

  GitlabSDK,
  SDK,
}


