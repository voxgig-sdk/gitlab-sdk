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
    const items = struct.items

    if (true === getpath(this._options.feature, 'test.active')) {
      this._mode = 'test'
    }

    this._rootctx.options = this._options

    this._features = []

    const featureAdd = this._utility.featureAdd
    const featureInit = this._utility.featureInit

    items(this._options.feature, (fitem: [string, any]) => {
      const fname = fitem[0]
      const fopts = fitem[1]
      if (fopts.active) {
        featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname))
      }
    })

    if (null != this._options.extend) {
      for (let f of this._options.extend) {
        featureAdd(this._rootctx, f)
      }
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


  async direct(fetchargs?: any) {
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



  // Entity access: `client.AccessRequest().list()` / `client.AccessRequest().load({ id })`.
  AccessRequest(data?: any) {
    const self = this
    return new AccessRequestEntity(self,data)
  }


  // Entity access: `client.AlertManagement().list()` / `client.AlertManagement().load({ id })`.
  AlertManagement(data?: any) {
    const self = this
    return new AlertManagementEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesAccessRequester().list()` / `client.ApiEntitiesAccessRequester().load({ id })`.
  ApiEntitiesAccessRequester(data?: any) {
    const self = this
    return new ApiEntitiesAccessRequesterEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesAppearance().list()` / `client.ApiEntitiesAppearance().load({ id })`.
  ApiEntitiesAppearance(data?: any) {
    const self = this
    return new ApiEntitiesAppearanceEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesApplication().list()` / `client.ApiEntitiesApplication().load({ id })`.
  ApiEntitiesApplication(data?: any) {
    const self = this
    return new ApiEntitiesApplicationEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesApplicationStatistic().list()` / `client.ApiEntitiesApplicationStatistic().load({ id })`.
  ApiEntitiesApplicationStatistic(data?: any) {
    const self = this
    return new ApiEntitiesApplicationStatisticEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesApplicationWithSecret().list()` / `client.ApiEntitiesApplicationWithSecret().load({ id })`.
  ApiEntitiesApplicationWithSecret(data?: any) {
    const self = this
    return new ApiEntitiesApplicationWithSecretEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesAvatar().list()` / `client.ApiEntitiesAvatar().load({ id })`.
  ApiEntitiesAvatar(data?: any) {
    const self = this
    return new ApiEntitiesAvatarEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesAwardEmoji().list()` / `client.ApiEntitiesAwardEmoji().load({ id })`.
  ApiEntitiesAwardEmoji(data?: any) {
    const self = this
    return new ApiEntitiesAwardEmojiEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesBadge().list()` / `client.ApiEntitiesBadge().load({ id })`.
  ApiEntitiesBadge(data?: any) {
    const self = this
    return new ApiEntitiesBadgeEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesBasicBadgeDetail().list()` / `client.ApiEntitiesBasicBadgeDetail().load({ id })`.
  ApiEntitiesBasicBadgeDetail(data?: any) {
    const self = this
    return new ApiEntitiesBasicBadgeDetailEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesBasicGroupDetail().list()` / `client.ApiEntitiesBasicGroupDetail().load({ id })`.
  ApiEntitiesBasicGroupDetail(data?: any) {
    const self = this
    return new ApiEntitiesBasicGroupDetailEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesBasicProjectDetail().list()` / `client.ApiEntitiesBasicProjectDetail().load({ id })`.
  ApiEntitiesBasicProjectDetail(data?: any) {
    const self = this
    return new ApiEntitiesBasicProjectDetailEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesBasicRef().list()` / `client.ApiEntitiesBasicRef().load({ id })`.
  ApiEntitiesBasicRef(data?: any) {
    const self = this
    return new ApiEntitiesBasicRefEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesBasicSuccess().list()` / `client.ApiEntitiesBasicSuccess().load({ id })`.
  ApiEntitiesBasicSuccess(data?: any) {
    const self = this
    return new ApiEntitiesBasicSuccessEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesBatchedBackgroundMigration().list()` / `client.ApiEntitiesBatchedBackgroundMigration().load({ id })`.
  ApiEntitiesBatchedBackgroundMigration(data?: any) {
    const self = this
    return new ApiEntitiesBatchedBackgroundMigrationEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesBranch().list()` / `client.ApiEntitiesBranch().load({ id })`.
  ApiEntitiesBranch(data?: any) {
    const self = this
    return new ApiEntitiesBranchEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesBulkImport().list()` / `client.ApiEntitiesBulkImport().load({ id })`.
  ApiEntitiesBulkImport(data?: any) {
    const self = this
    return new ApiEntitiesBulkImportEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesBulkImportsEntityFailure().list()` / `client.ApiEntitiesBulkImportsEntityFailure().load({ id })`.
  ApiEntitiesBulkImportsEntityFailure(data?: any) {
    const self = this
    return new ApiEntitiesBulkImportsEntityFailureEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesBulkImportsExportStatus().list()` / `client.ApiEntitiesBulkImportsExportStatus().load({ id })`.
  ApiEntitiesBulkImportsExportStatus(data?: any) {
    const self = this
    return new ApiEntitiesBulkImportsExportStatusEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesChangelog().list()` / `client.ApiEntitiesChangelog().load({ id })`.
  ApiEntitiesChangelog(data?: any) {
    const self = this
    return new ApiEntitiesChangelogEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesCiBridge().list()` / `client.ApiEntitiesCiBridge().load({ id })`.
  ApiEntitiesCiBridge(data?: any) {
    const self = this
    return new ApiEntitiesCiBridgeEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesCiCatalogResourcesVersion().list()` / `client.ApiEntitiesCiCatalogResourcesVersion().load({ id })`.
  ApiEntitiesCiCatalogResourcesVersion(data?: any) {
    const self = this
    return new ApiEntitiesCiCatalogResourcesVersionEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesCiJob().list()` / `client.ApiEntitiesCiJob().load({ id })`.
  ApiEntitiesCiJob(data?: any) {
    const self = this
    return new ApiEntitiesCiJobEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesCiJobBasic().list()` / `client.ApiEntitiesCiJobBasic().load({ id })`.
  ApiEntitiesCiJobBasic(data?: any) {
    const self = this
    return new ApiEntitiesCiJobBasicEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesCiJobBasicWithProject().list()` / `client.ApiEntitiesCiJobBasicWithProject().load({ id })`.
  ApiEntitiesCiJobBasicWithProject(data?: any) {
    const self = this
    return new ApiEntitiesCiJobBasicWithProjectEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesCiLintResult().list()` / `client.ApiEntitiesCiLintResult().load({ id })`.
  ApiEntitiesCiLintResult(data?: any) {
    const self = this
    return new ApiEntitiesCiLintResultEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesCiPipeline().list()` / `client.ApiEntitiesCiPipeline().load({ id })`.
  ApiEntitiesCiPipeline(data?: any) {
    const self = this
    return new ApiEntitiesCiPipelineEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesCiPipelineBasic().list()` / `client.ApiEntitiesCiPipelineBasic().load({ id })`.
  ApiEntitiesCiPipelineBasic(data?: any) {
    const self = this
    return new ApiEntitiesCiPipelineBasicEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesCiPipelineSchedule().list()` / `client.ApiEntitiesCiPipelineSchedule().load({ id })`.
  ApiEntitiesCiPipelineSchedule(data?: any) {
    const self = this
    return new ApiEntitiesCiPipelineScheduleEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesCiPipelineScheduleDetail().list()` / `client.ApiEntitiesCiPipelineScheduleDetail().load({ id })`.
  ApiEntitiesCiPipelineScheduleDetail(data?: any) {
    const self = this
    return new ApiEntitiesCiPipelineScheduleDetailEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesCiResetTokenResult().list()` / `client.ApiEntitiesCiResetTokenResult().load({ id })`.
  ApiEntitiesCiResetTokenResult(data?: any) {
    const self = this
    return new ApiEntitiesCiResetTokenResultEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesCiResourceGroup().list()` / `client.ApiEntitiesCiResourceGroup().load({ id })`.
  ApiEntitiesCiResourceGroup(data?: any) {
    const self = this
    return new ApiEntitiesCiResourceGroupEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesCiRunner().list()` / `client.ApiEntitiesCiRunner().load({ id })`.
  ApiEntitiesCiRunner(data?: any) {
    const self = this
    return new ApiEntitiesCiRunnerEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesCiRunnerDetail().list()` / `client.ApiEntitiesCiRunnerDetail().load({ id })`.
  ApiEntitiesCiRunnerDetail(data?: any) {
    const self = this
    return new ApiEntitiesCiRunnerDetailEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesCiRunnerManager().list()` / `client.ApiEntitiesCiRunnerManager().load({ id })`.
  ApiEntitiesCiRunnerManager(data?: any) {
    const self = this
    return new ApiEntitiesCiRunnerManagerEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesCiRunnerRegistrationDetail().list()` / `client.ApiEntitiesCiRunnerRegistrationDetail().load({ id })`.
  ApiEntitiesCiRunnerRegistrationDetail(data?: any) {
    const self = this
    return new ApiEntitiesCiRunnerRegistrationDetailEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesCiSecureFile().list()` / `client.ApiEntitiesCiSecureFile().load({ id })`.
  ApiEntitiesCiSecureFile(data?: any) {
    const self = this
    return new ApiEntitiesCiSecureFileEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesCiVariable().list()` / `client.ApiEntitiesCiVariable().load({ id })`.
  ApiEntitiesCiVariable(data?: any) {
    const self = this
    return new ApiEntitiesCiVariableEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesCluster().list()` / `client.ApiEntitiesCluster().load({ id })`.
  ApiEntitiesCluster(data?: any) {
    const self = this
    return new ApiEntitiesClusterEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesClusterGroup().list()` / `client.ApiEntitiesClusterGroup().load({ id })`.
  ApiEntitiesClusterGroup(data?: any) {
    const self = this
    return new ApiEntitiesClusterGroupEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesClusterProject().list()` / `client.ApiEntitiesClusterProject().load({ id })`.
  ApiEntitiesClusterProject(data?: any) {
    const self = this
    return new ApiEntitiesClusterProjectEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesClustersAgent().list()` / `client.ApiEntitiesClustersAgent().load({ id })`.
  ApiEntitiesClustersAgent(data?: any) {
    const self = this
    return new ApiEntitiesClustersAgentEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesClustersAgentToken().list()` / `client.ApiEntitiesClustersAgentToken().load({ id })`.
  ApiEntitiesClustersAgentToken(data?: any) {
    const self = this
    return new ApiEntitiesClustersAgentTokenEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesClustersAgentTokenBasic().list()` / `client.ApiEntitiesClustersAgentTokenBasic().load({ id })`.
  ApiEntitiesClustersAgentTokenBasic(data?: any) {
    const self = this
    return new ApiEntitiesClustersAgentTokenBasicEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesClustersAgentTokenWithToken().list()` / `client.ApiEntitiesClustersAgentTokenWithToken().load({ id })`.
  ApiEntitiesClustersAgentTokenWithToken(data?: any) {
    const self = this
    return new ApiEntitiesClustersAgentTokenWithTokenEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesCommit().list()` / `client.ApiEntitiesCommit().load({ id })`.
  ApiEntitiesCommit(data?: any) {
    const self = this
    return new ApiEntitiesCommitEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesCommitDetail().list()` / `client.ApiEntitiesCommitDetail().load({ id })`.
  ApiEntitiesCommitDetail(data?: any) {
    const self = this
    return new ApiEntitiesCommitDetailEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesCommitNote().list()` / `client.ApiEntitiesCommitNote().load({ id })`.
  ApiEntitiesCommitNote(data?: any) {
    const self = this
    return new ApiEntitiesCommitNoteEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesCommitSequence().list()` / `client.ApiEntitiesCommitSequence().load({ id })`.
  ApiEntitiesCommitSequence(data?: any) {
    const self = this
    return new ApiEntitiesCommitSequenceEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesCommitSignature().list()` / `client.ApiEntitiesCommitSignature().load({ id })`.
  ApiEntitiesCommitSignature(data?: any) {
    const self = this
    return new ApiEntitiesCommitSignatureEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesCommitStatus().list()` / `client.ApiEntitiesCommitStatus().load({ id })`.
  ApiEntitiesCommitStatus(data?: any) {
    const self = this
    return new ApiEntitiesCommitStatusEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesCompare().list()` / `client.ApiEntitiesCompare().load({ id })`.
  ApiEntitiesCompare(data?: any) {
    const self = this
    return new ApiEntitiesCompareEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesContainerRegistryRepository().list()` / `client.ApiEntitiesContainerRegistryRepository().load({ id })`.
  ApiEntitiesContainerRegistryRepository(data?: any) {
    const self = this
    return new ApiEntitiesContainerRegistryRepositoryEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesContainerRegistryTag().list()` / `client.ApiEntitiesContainerRegistryTag().load({ id })`.
  ApiEntitiesContainerRegistryTag(data?: any) {
    const self = this
    return new ApiEntitiesContainerRegistryTagEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesContainerRegistryTagDetail().list()` / `client.ApiEntitiesContainerRegistryTagDetail().load({ id })`.
  ApiEntitiesContainerRegistryTagDetail(data?: any) {
    const self = this
    return new ApiEntitiesContainerRegistryTagDetailEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesContributor().list()` / `client.ApiEntitiesContributor().load({ id })`.
  ApiEntitiesContributor(data?: any) {
    const self = this
    return new ApiEntitiesContributorEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesDeployKey().list()` / `client.ApiEntitiesDeployKey().load({ id })`.
  ApiEntitiesDeployKey(data?: any) {
    const self = this
    return new ApiEntitiesDeployKeyEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesDeployKeysProject().list()` / `client.ApiEntitiesDeployKeysProject().load({ id })`.
  ApiEntitiesDeployKeysProject(data?: any) {
    const self = this
    return new ApiEntitiesDeployKeysProjectEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesDeployToken().list()` / `client.ApiEntitiesDeployToken().load({ id })`.
  ApiEntitiesDeployToken(data?: any) {
    const self = this
    return new ApiEntitiesDeployTokenEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesDeployTokenWithToken().list()` / `client.ApiEntitiesDeployTokenWithToken().load({ id })`.
  ApiEntitiesDeployTokenWithToken(data?: any) {
    const self = this
    return new ApiEntitiesDeployTokenWithTokenEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesDeployment().list()` / `client.ApiEntitiesDeployment().load({ id })`.
  ApiEntitiesDeployment(data?: any) {
    const self = this
    return new ApiEntitiesDeploymentEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesDeploymentExtended().list()` / `client.ApiEntitiesDeploymentExtended().load({ id })`.
  ApiEntitiesDeploymentExtended(data?: any) {
    const self = this
    return new ApiEntitiesDeploymentExtendedEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesDeploymentsApproval().list()` / `client.ApiEntitiesDeploymentsApproval().load({ id })`.
  ApiEntitiesDeploymentsApproval(data?: any) {
    const self = this
    return new ApiEntitiesDeploymentsApprovalEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesDictionaryTable().list()` / `client.ApiEntitiesDictionaryTable().load({ id })`.
  ApiEntitiesDictionaryTable(data?: any) {
    const self = this
    return new ApiEntitiesDictionaryTableEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesDiff().list()` / `client.ApiEntitiesDiff().load({ id })`.
  ApiEntitiesDiff(data?: any) {
    const self = this
    return new ApiEntitiesDiffEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesDiscoveredCluster().list()` / `client.ApiEntitiesDiscoveredCluster().load({ id })`.
  ApiEntitiesDiscoveredCluster(data?: any) {
    const self = this
    return new ApiEntitiesDiscoveredClusterEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesDraftNote().list()` / `client.ApiEntitiesDraftNote().load({ id })`.
  ApiEntitiesDraftNote(data?: any) {
    const self = this
    return new ApiEntitiesDraftNoteEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesEnvironment().list()` / `client.ApiEntitiesEnvironment().load({ id })`.
  ApiEntitiesEnvironment(data?: any) {
    const self = this
    return new ApiEntitiesEnvironmentEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesErrorTrackingClientKey().list()` / `client.ApiEntitiesErrorTrackingClientKey().load({ id })`.
  ApiEntitiesErrorTrackingClientKey(data?: any) {
    const self = this
    return new ApiEntitiesErrorTrackingClientKeyEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesErrorTrackingProjectSetting().list()` / `client.ApiEntitiesErrorTrackingProjectSetting().load({ id })`.
  ApiEntitiesErrorTrackingProjectSetting(data?: any) {
    const self = this
    return new ApiEntitiesErrorTrackingProjectSettingEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesEvent().list()` / `client.ApiEntitiesEvent().load({ id })`.
  ApiEntitiesEvent(data?: any) {
    const self = this
    return new ApiEntitiesEventEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesFeature().list()` / `client.ApiEntitiesFeature().load({ id })`.
  ApiEntitiesFeature(data?: any) {
    const self = this
    return new ApiEntitiesFeatureEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesFeatureDefinition().list()` / `client.ApiEntitiesFeatureDefinition().load({ id })`.
  ApiEntitiesFeatureDefinition(data?: any) {
    const self = this
    return new ApiEntitiesFeatureDefinitionEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesFeatureFlag().list()` / `client.ApiEntitiesFeatureFlag().load({ id })`.
  ApiEntitiesFeatureFlag(data?: any) {
    const self = this
    return new ApiEntitiesFeatureFlagEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesFeatureFlagUserList().list()` / `client.ApiEntitiesFeatureFlagUserList().load({ id })`.
  ApiEntitiesFeatureFlagUserList(data?: any) {
    const self = this
    return new ApiEntitiesFeatureFlagUserListEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesFreezePeriod().list()` / `client.ApiEntitiesFreezePeriod().load({ id })`.
  ApiEntitiesFreezePeriod(data?: any) {
    const self = this
    return new ApiEntitiesFreezePeriodEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesGitlabSubscription().list()` / `client.ApiEntitiesGitlabSubscription().load({ id })`.
  ApiEntitiesGitlabSubscription(data?: any) {
    const self = this
    return new ApiEntitiesGitlabSubscriptionEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesGoModuleVersion().list()` / `client.ApiEntitiesGoModuleVersion().load({ id })`.
  ApiEntitiesGoModuleVersion(data?: any) {
    const self = this
    return new ApiEntitiesGoModuleVersionEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesGroup().list()` / `client.ApiEntitiesGroup().load({ id })`.
  ApiEntitiesGroup(data?: any) {
    const self = this
    return new ApiEntitiesGroupEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesGroupDetail().list()` / `client.ApiEntitiesGroupDetail().load({ id })`.
  ApiEntitiesGroupDetail(data?: any) {
    const self = this
    return new ApiEntitiesGroupDetailEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesHook().list()` / `client.ApiEntitiesHook().load({ id })`.
  ApiEntitiesHook(data?: any) {
    const self = this
    return new ApiEntitiesHookEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesIntegration().list()` / `client.ApiEntitiesIntegration().load({ id })`.
  ApiEntitiesIntegration(data?: any) {
    const self = this
    return new ApiEntitiesIntegrationEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesIntegrationBasic().list()` / `client.ApiEntitiesIntegrationBasic().load({ id })`.
  ApiEntitiesIntegrationBasic(data?: any) {
    const self = this
    return new ApiEntitiesIntegrationBasicEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesInvitation().list()` / `client.ApiEntitiesInvitation().load({ id })`.
  ApiEntitiesInvitation(data?: any) {
    const self = this
    return new ApiEntitiesInvitationEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesIssuableTimeStat().list()` / `client.ApiEntitiesIssuableTimeStat().load({ id })`.
  ApiEntitiesIssuableTimeStat(data?: any) {
    const self = this
    return new ApiEntitiesIssuableTimeStatEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesIssue().list()` / `client.ApiEntitiesIssue().load({ id })`.
  ApiEntitiesIssue(data?: any) {
    const self = this
    return new ApiEntitiesIssueEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesIssueLink().list()` / `client.ApiEntitiesIssueLink().load({ id })`.
  ApiEntitiesIssueLink(data?: any) {
    const self = this
    return new ApiEntitiesIssueLinkEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesLicense().list()` / `client.ApiEntitiesLicense().load({ id })`.
  ApiEntitiesLicense(data?: any) {
    const self = this
    return new ApiEntitiesLicenseEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesMarkdown().list()` / `client.ApiEntitiesMarkdown().load({ id })`.
  ApiEntitiesMarkdown(data?: any) {
    const self = this
    return new ApiEntitiesMarkdownEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesMarkdownUploadAdmin().list()` / `client.ApiEntitiesMarkdownUploadAdmin().load({ id })`.
  ApiEntitiesMarkdownUploadAdmin(data?: any) {
    const self = this
    return new ApiEntitiesMarkdownUploadAdminEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesMember().list()` / `client.ApiEntitiesMember().load({ id })`.
  ApiEntitiesMember(data?: any) {
    const self = this
    return new ApiEntitiesMemberEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesMerge().list()` / `client.ApiEntitiesMerge().load({ id })`.
  ApiEntitiesMerge(data?: any) {
    const self = this
    return new ApiEntitiesMergeEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesMergeRequestApproval().list()` / `client.ApiEntitiesMergeRequestApproval().load({ id })`.
  ApiEntitiesMergeRequestApproval(data?: any) {
    const self = this
    return new ApiEntitiesMergeRequestApprovalEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesMergeRequestBasic().list()` / `client.ApiEntitiesMergeRequestBasic().load({ id })`.
  ApiEntitiesMergeRequestBasic(data?: any) {
    const self = this
    return new ApiEntitiesMergeRequestBasicEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesMergeRequestChange().list()` / `client.ApiEntitiesMergeRequestChange().load({ id })`.
  ApiEntitiesMergeRequestChange(data?: any) {
    const self = this
    return new ApiEntitiesMergeRequestChangeEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesMergeRequestDiff().list()` / `client.ApiEntitiesMergeRequestDiff().load({ id })`.
  ApiEntitiesMergeRequestDiff(data?: any) {
    const self = this
    return new ApiEntitiesMergeRequestDiffEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesMergeRequestDiffFull().list()` / `client.ApiEntitiesMergeRequestDiffFull().load({ id })`.
  ApiEntitiesMergeRequestDiffFull(data?: any) {
    const self = this
    return new ApiEntitiesMergeRequestDiffFullEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesMergeRequestReviewer().list()` / `client.ApiEntitiesMergeRequestReviewer().load({ id })`.
  ApiEntitiesMergeRequestReviewer(data?: any) {
    const self = this
    return new ApiEntitiesMergeRequestReviewerEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesMetricImage().list()` / `client.ApiEntitiesMetricImage().load({ id })`.
  ApiEntitiesMetricImage(data?: any) {
    const self = this
    return new ApiEntitiesMetricImageEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesMrNote().list()` / `client.ApiEntitiesMrNote().load({ id })`.
  ApiEntitiesMrNote(data?: any) {
    const self = this
    return new ApiEntitiesMrNoteEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesNamespace().list()` / `client.ApiEntitiesNamespace().load({ id })`.
  ApiEntitiesNamespace(data?: any) {
    const self = this
    return new ApiEntitiesNamespaceEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesNamespaceExistence().list()` / `client.ApiEntitiesNamespaceExistence().load({ id })`.
  ApiEntitiesNamespaceExistence(data?: any) {
    const self = this
    return new ApiEntitiesNamespaceExistenceEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesNamespacesStorageLimitExclusion().list()` / `client.ApiEntitiesNamespacesStorageLimitExclusion().load({ id })`.
  ApiEntitiesNamespacesStorageLimitExclusion(data?: any) {
    const self = this
    return new ApiEntitiesNamespacesStorageLimitExclusionEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesNpmPackage().list()` / `client.ApiEntitiesNpmPackage().load({ id })`.
  ApiEntitiesNpmPackage(data?: any) {
    const self = this
    return new ApiEntitiesNpmPackageEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesNpmPackageTag().list()` / `client.ApiEntitiesNpmPackageTag().load({ id })`.
  ApiEntitiesNpmPackageTag(data?: any) {
    const self = this
    return new ApiEntitiesNpmPackageTagEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesNugetPackagesVersion().list()` / `client.ApiEntitiesNugetPackagesVersion().load({ id })`.
  ApiEntitiesNugetPackagesVersion(data?: any) {
    const self = this
    return new ApiEntitiesNugetPackagesVersionEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesNugetSearchResult().list()` / `client.ApiEntitiesNugetSearchResult().load({ id })`.
  ApiEntitiesNugetSearchResult(data?: any) {
    const self = this
    return new ApiEntitiesNugetSearchResultEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesNugetServiceIndex().list()` / `client.ApiEntitiesNugetServiceIndex().load({ id })`.
  ApiEntitiesNugetServiceIndex(data?: any) {
    const self = this
    return new ApiEntitiesNugetServiceIndexEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesOrganizationsOrganization().list()` / `client.ApiEntitiesOrganizationsOrganization().load({ id })`.
  ApiEntitiesOrganizationsOrganization(data?: any) {
    const self = this
    return new ApiEntitiesOrganizationsOrganizationEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesPackage().list()` / `client.ApiEntitiesPackage().load({ id })`.
  ApiEntitiesPackage(data?: any) {
    const self = this
    return new ApiEntitiesPackageEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesPackageFile().list()` / `client.ApiEntitiesPackageFile().load({ id })`.
  ApiEntitiesPackageFile(data?: any) {
    const self = this
    return new ApiEntitiesPackageFileEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesPackagePipeline().list()` / `client.ApiEntitiesPackagePipeline().load({ id })`.
  ApiEntitiesPackagePipeline(data?: any) {
    const self = this
    return new ApiEntitiesPackagePipelineEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesPackagesConanFilesList().list()` / `client.ApiEntitiesPackagesConanFilesList().load({ id })`.
  ApiEntitiesPackagesConanFilesList(data?: any) {
    const self = this
    return new ApiEntitiesPackagesConanFilesListEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesPackagesConanPackageManifest().list()` / `client.ApiEntitiesPackagesConanPackageManifest().load({ id })`.
  ApiEntitiesPackagesConanPackageManifest(data?: any) {
    const self = this
    return new ApiEntitiesPackagesConanPackageManifestEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesPackagesConanPackageRevision().list()` / `client.ApiEntitiesPackagesConanPackageRevision().load({ id })`.
  ApiEntitiesPackagesConanPackageRevision(data?: any) {
    const self = this
    return new ApiEntitiesPackagesConanPackageRevisionEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesPackagesConanPackageSnapshot().list()` / `client.ApiEntitiesPackagesConanPackageSnapshot().load({ id })`.
  ApiEntitiesPackagesConanPackageSnapshot(data?: any) {
    const self = this
    return new ApiEntitiesPackagesConanPackageSnapshotEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesPackagesConanRecipeManifest().list()` / `client.ApiEntitiesPackagesConanRecipeManifest().load({ id })`.
  ApiEntitiesPackagesConanRecipeManifest(data?: any) {
    const self = this
    return new ApiEntitiesPackagesConanRecipeManifestEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesPackagesConanRecipeRevision().list()` / `client.ApiEntitiesPackagesConanRecipeRevision().load({ id })`.
  ApiEntitiesPackagesConanRecipeRevision(data?: any) {
    const self = this
    return new ApiEntitiesPackagesConanRecipeRevisionEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesPackagesConanRecipeSnapshot().list()` / `client.ApiEntitiesPackagesConanRecipeSnapshot().load({ id })`.
  ApiEntitiesPackagesConanRecipeSnapshot(data?: any) {
    const self = this
    return new ApiEntitiesPackagesConanRecipeSnapshotEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesPackagesConanRevision().list()` / `client.ApiEntitiesPackagesConanRevision().load({ id })`.
  ApiEntitiesPackagesConanRevision(data?: any) {
    const self = this
    return new ApiEntitiesPackagesConanRevisionEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesPackagesConanUploadUrl().list()` / `client.ApiEntitiesPackagesConanUploadUrl().load({ id })`.
  ApiEntitiesPackagesConanUploadUrl(data?: any) {
    const self = this
    return new ApiEntitiesPackagesConanUploadUrlEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesPackagesDebianDistribution().list()` / `client.ApiEntitiesPackagesDebianDistribution().load({ id })`.
  ApiEntitiesPackagesDebianDistribution(data?: any) {
    const self = this
    return new ApiEntitiesPackagesDebianDistributionEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesPagesDomain().list()` / `client.ApiEntitiesPagesDomain().load({ id })`.
  ApiEntitiesPagesDomain(data?: any) {
    const self = this
    return new ApiEntitiesPagesDomainEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesPagesDomainBasic().list()` / `client.ApiEntitiesPagesDomainBasic().load({ id })`.
  ApiEntitiesPagesDomainBasic(data?: any) {
    const self = this
    return new ApiEntitiesPagesDomainBasicEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesPersonalAccessToken().list()` / `client.ApiEntitiesPersonalAccessToken().load({ id })`.
  ApiEntitiesPersonalAccessToken(data?: any) {
    const self = this
    return new ApiEntitiesPersonalAccessTokenEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesPersonalAccessTokenWithLastUsedIp().list()` / `client.ApiEntitiesPersonalAccessTokenWithLastUsedIp().load({ id })`.
  ApiEntitiesPersonalAccessTokenWithLastUsedIp(data?: any) {
    const self = this
    return new ApiEntitiesPersonalAccessTokenWithLastUsedIpEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesPersonalAccessTokenWithToken().list()` / `client.ApiEntitiesPersonalAccessTokenWithToken().load({ id })`.
  ApiEntitiesPersonalAccessTokenWithToken(data?: any) {
    const self = this
    return new ApiEntitiesPersonalAccessTokenWithTokenEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesPersonalSnippet().list()` / `client.ApiEntitiesPersonalSnippet().load({ id })`.
  ApiEntitiesPersonalSnippet(data?: any) {
    const self = this
    return new ApiEntitiesPersonalSnippetEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesPlanLimit().list()` / `client.ApiEntitiesPlanLimit().load({ id })`.
  ApiEntitiesPlanLimit(data?: any) {
    const self = this
    return new ApiEntitiesPlanLimitEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesProject().list()` / `client.ApiEntitiesProject().load({ id })`.
  ApiEntitiesProject(data?: any) {
    const self = this
    return new ApiEntitiesProjectEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesProjectDailyStatistic().list()` / `client.ApiEntitiesProjectDailyStatistic().load({ id })`.
  ApiEntitiesProjectDailyStatistic(data?: any) {
    const self = this
    return new ApiEntitiesProjectDailyStatisticEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesProjectExportStatus().list()` / `client.ApiEntitiesProjectExportStatus().load({ id })`.
  ApiEntitiesProjectExportStatus(data?: any) {
    const self = this
    return new ApiEntitiesProjectExportStatusEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesProjectGroupLink().list()` / `client.ApiEntitiesProjectGroupLink().load({ id })`.
  ApiEntitiesProjectGroupLink(data?: any) {
    const self = this
    return new ApiEntitiesProjectGroupLinkEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesProjectHook().list()` / `client.ApiEntitiesProjectHook().load({ id })`.
  ApiEntitiesProjectHook(data?: any) {
    const self = this
    return new ApiEntitiesProjectHookEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesProjectImportStatus().list()` / `client.ApiEntitiesProjectImportStatus().load({ id })`.
  ApiEntitiesProjectImportStatus(data?: any) {
    const self = this
    return new ApiEntitiesProjectImportStatusEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesProjectJobTokenScope().list()` / `client.ApiEntitiesProjectJobTokenScope().load({ id })`.
  ApiEntitiesProjectJobTokenScope(data?: any) {
    const self = this
    return new ApiEntitiesProjectJobTokenScopeEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesProjectRepositoryStorage().list()` / `client.ApiEntitiesProjectRepositoryStorage().load({ id })`.
  ApiEntitiesProjectRepositoryStorage(data?: any) {
    const self = this
    return new ApiEntitiesProjectRepositoryStorageEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesProjectSnippet().list()` / `client.ApiEntitiesProjectSnippet().load({ id })`.
  ApiEntitiesProjectSnippet(data?: any) {
    const self = this
    return new ApiEntitiesProjectSnippetEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesProjectUpload().list()` / `client.ApiEntitiesProjectUpload().load({ id })`.
  ApiEntitiesProjectUpload(data?: any) {
    const self = this
    return new ApiEntitiesProjectUploadEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesProjectWithAccess().list()` / `client.ApiEntitiesProjectWithAccess().load({ id })`.
  ApiEntitiesProjectWithAccess(data?: any) {
    const self = this
    return new ApiEntitiesProjectWithAccessEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesProjectsContainerRegistryProtectionRule().list()` / `client.ApiEntitiesProjectsContainerRegistryProtectionRule().load({ id })`.
  ApiEntitiesProjectsContainerRegistryProtectionRule(data?: any) {
    const self = this
    return new ApiEntitiesProjectsContainerRegistryProtectionRuleEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesProjectsPackagesProtectionRule().list()` / `client.ApiEntitiesProjectsPackagesProtectionRule().load({ id })`.
  ApiEntitiesProjectsPackagesProtectionRule(data?: any) {
    const self = this
    return new ApiEntitiesProjectsPackagesProtectionRuleEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesProjectsTopic().list()` / `client.ApiEntitiesProjectsTopic().load({ id })`.
  ApiEntitiesProjectsTopic(data?: any) {
    const self = this
    return new ApiEntitiesProjectsTopicEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesProtectedBranch().list()` / `client.ApiEntitiesProtectedBranch().load({ id })`.
  ApiEntitiesProtectedBranch(data?: any) {
    const self = this
    return new ApiEntitiesProtectedBranchEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesProtectedTag().list()` / `client.ApiEntitiesProtectedTag().load({ id })`.
  ApiEntitiesProtectedTag(data?: any) {
    const self = this
    return new ApiEntitiesProtectedTagEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesPublicGroupDetail().list()` / `client.ApiEntitiesPublicGroupDetail().load({ id })`.
  ApiEntitiesPublicGroupDetail(data?: any) {
    const self = this
    return new ApiEntitiesPublicGroupDetailEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesRelatedIssue().list()` / `client.ApiEntitiesRelatedIssue().load({ id })`.
  ApiEntitiesRelatedIssue(data?: any) {
    const self = this
    return new ApiEntitiesRelatedIssueEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesRelationImportTracker().list()` / `client.ApiEntitiesRelationImportTracker().load({ id })`.
  ApiEntitiesRelationImportTracker(data?: any) {
    const self = this
    return new ApiEntitiesRelationImportTrackerEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesRelease().list()` / `client.ApiEntitiesRelease().load({ id })`.
  ApiEntitiesRelease(data?: any) {
    const self = this
    return new ApiEntitiesReleaseEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesReleasesLink().list()` / `client.ApiEntitiesReleasesLink().load({ id })`.
  ApiEntitiesReleasesLink(data?: any) {
    const self = this
    return new ApiEntitiesReleasesLinkEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesRemoteMirror().list()` / `client.ApiEntitiesRemoteMirror().load({ id })`.
  ApiEntitiesRemoteMirror(data?: any) {
    const self = this
    return new ApiEntitiesRemoteMirrorEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesRepositoryHealth().list()` / `client.ApiEntitiesRepositoryHealth().load({ id })`.
  ApiEntitiesRepositoryHealth(data?: any) {
    const self = this
    return new ApiEntitiesRepositoryHealthEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesResourceAccessTokenWithToken().list()` / `client.ApiEntitiesResourceAccessTokenWithToken().load({ id })`.
  ApiEntitiesResourceAccessTokenWithToken(data?: any) {
    const self = this
    return new ApiEntitiesResourceAccessTokenWithTokenEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesResourceMilestoneEvent().list()` / `client.ApiEntitiesResourceMilestoneEvent().load({ id })`.
  ApiEntitiesResourceMilestoneEvent(data?: any) {
    const self = this
    return new ApiEntitiesResourceMilestoneEventEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesSnippet().list()` / `client.ApiEntitiesSnippet().load({ id })`.
  ApiEntitiesSnippet(data?: any) {
    const self = this
    return new ApiEntitiesSnippetEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesSshKeyWithUser().list()` / `client.ApiEntitiesSshKeyWithUser().load({ id })`.
  ApiEntitiesSshKeyWithUser(data?: any) {
    const self = this
    return new ApiEntitiesSshKeyWithUserEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesSuggestion().list()` / `client.ApiEntitiesSuggestion().load({ id })`.
  ApiEntitiesSuggestion(data?: any) {
    const self = this
    return new ApiEntitiesSuggestionEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesSystemBroadcastMessage().list()` / `client.ApiEntitiesSystemBroadcastMessage().load({ id })`.
  ApiEntitiesSystemBroadcastMessage(data?: any) {
    const self = this
    return new ApiEntitiesSystemBroadcastMessageEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesTag().list()` / `client.ApiEntitiesTag().load({ id })`.
  ApiEntitiesTag(data?: any) {
    const self = this
    return new ApiEntitiesTagEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesTagSignature().list()` / `client.ApiEntitiesTagSignature().load({ id })`.
  ApiEntitiesTagSignature(data?: any) {
    const self = this
    return new ApiEntitiesTagSignatureEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesTemplatesList().list()` / `client.ApiEntitiesTemplatesList().load({ id })`.
  ApiEntitiesTemplatesList(data?: any) {
    const self = this
    return new ApiEntitiesTemplatesListEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesTerraformModuleVersion().list()` / `client.ApiEntitiesTerraformModuleVersion().load({ id })`.
  ApiEntitiesTerraformModuleVersion(data?: any) {
    const self = this
    return new ApiEntitiesTerraformModuleVersionEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesTreeObject().list()` / `client.ApiEntitiesTreeObject().load({ id })`.
  ApiEntitiesTreeObject(data?: any) {
    const self = this
    return new ApiEntitiesTreeObjectEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesTrigger().list()` / `client.ApiEntitiesTrigger().load({ id })`.
  ApiEntitiesTrigger(data?: any) {
    const self = this
    return new ApiEntitiesTriggerEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesUserAgentDetail().list()` / `client.ApiEntitiesUserAgentDetail().load({ id })`.
  ApiEntitiesUserAgentDetail(data?: any) {
    const self = this
    return new ApiEntitiesUserAgentDetailEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesUserCount().list()` / `client.ApiEntitiesUserCount().load({ id })`.
  ApiEntitiesUserCount(data?: any) {
    const self = this
    return new ApiEntitiesUserCountEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesUserPublic().list()` / `client.ApiEntitiesUserPublic().load({ id })`.
  ApiEntitiesUserPublic(data?: any) {
    const self = this
    return new ApiEntitiesUserPublicEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesUserWithAdmin().list()` / `client.ApiEntitiesUserWithAdmin().load({ id })`.
  ApiEntitiesUserWithAdmin(data?: any) {
    const self = this
    return new ApiEntitiesUserWithAdminEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesWikiAttachment().list()` / `client.ApiEntitiesWikiAttachment().load({ id })`.
  ApiEntitiesWikiAttachment(data?: any) {
    const self = this
    return new ApiEntitiesWikiAttachmentEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesWikiPage().list()` / `client.ApiEntitiesWikiPage().load({ id })`.
  ApiEntitiesWikiPage(data?: any) {
    const self = this
    return new ApiEntitiesWikiPageEntity(self,data)
  }


  // Entity access: `client.ApiEntitiesWikiPageBasic().list()` / `client.ApiEntitiesWikiPageBasic().load({ id })`.
  ApiEntitiesWikiPageBasic(data?: any) {
    const self = this
    return new ApiEntitiesWikiPageBasicEntity(self,data)
  }


  // Entity access: `client.Application().list()` / `client.Application().load({ id })`.
  Application(data?: any) {
    const self = this
    return new ApplicationEntity(self,data)
  }


  // Entity access: `client.AwardEmoji().list()` / `client.AwardEmoji().load({ id })`.
  AwardEmoji(data?: any) {
    const self = this
    return new AwardEmojiEntity(self,data)
  }


  // Entity access: `client.Badge().list()` / `client.Badge().load({ id })`.
  Badge(data?: any) {
    const self = this
    return new BadgeEntity(self,data)
  }


  // Entity access: `client.Branch().list()` / `client.Branch().load({ id })`.
  Branch(data?: any) {
    const self = this
    return new BranchEntity(self,data)
  }


  // Entity access: `client.CargoPackage().list()` / `client.CargoPackage().load({ id })`.
  CargoPackage(data?: any) {
    const self = this
    return new CargoPackageEntity(self,data)
  }


  // Entity access: `client.CiVariable().list()` / `client.CiVariable().load({ id })`.
  CiVariable(data?: any) {
    const self = this
    return new CiVariableEntity(self,data)
  }


  // Entity access: `client.Cluster().list()` / `client.Cluster().load({ id })`.
  Cluster(data?: any) {
    const self = this
    return new ClusterEntity(self,data)
  }


  // Entity access: `client.ClusterAgent().list()` / `client.ClusterAgent().load({ id })`.
  ClusterAgent(data?: any) {
    const self = this
    return new ClusterAgentEntity(self,data)
  }


  // Entity access: `client.Composer().list()` / `client.Composer().load({ id })`.
  Composer(data?: any) {
    const self = this
    return new ComposerEntity(self,data)
  }


  // Entity access: `client.ComposerPackage().list()` / `client.ComposerPackage().load({ id })`.
  ComposerPackage(data?: any) {
    const self = this
    return new ComposerPackageEntity(self,data)
  }


  // Entity access: `client.Conan().list()` / `client.Conan().load({ id })`.
  Conan(data?: any) {
    const self = this
    return new ConanEntity(self,data)
  }


  // Entity access: `client.ConanPackage().list()` / `client.ConanPackage().load({ id })`.
  ConanPackage(data?: any) {
    const self = this
    return new ConanPackageEntity(self,data)
  }


  // Entity access: `client.ContainerRegistry().list()` / `client.ContainerRegistry().load({ id })`.
  ContainerRegistry(data?: any) {
    const self = this
    return new ContainerRegistryEntity(self,data)
  }


  // Entity access: `client.ContainerRegistryEvent().list()` / `client.ContainerRegistryEvent().load({ id })`.
  ContainerRegistryEvent(data?: any) {
    const self = this
    return new ContainerRegistryEventEntity(self,data)
  }


  // Entity access: `client.CustomAttribute().list()` / `client.CustomAttribute().load({ id })`.
  CustomAttribute(data?: any) {
    const self = this
    return new CustomAttributeEntity(self,data)
  }


  // Entity access: `client.Debian().list()` / `client.Debian().load({ id })`.
  Debian(data?: any) {
    const self = this
    return new DebianEntity(self,data)
  }


  // Entity access: `client.DebianDistribution().list()` / `client.DebianDistribution().load({ id })`.
  DebianDistribution(data?: any) {
    const self = this
    return new DebianDistributionEntity(self,data)
  }


  // Entity access: `client.DebianPackage().list()` / `client.DebianPackage().load({ id })`.
  DebianPackage(data?: any) {
    const self = this
    return new DebianPackageEntity(self,data)
  }


  // Entity access: `client.DependencyProxy().list()` / `client.DependencyProxy().load({ id })`.
  DependencyProxy(data?: any) {
    const self = this
    return new DependencyProxyEntity(self,data)
  }


  // Entity access: `client.DeployKey().list()` / `client.DeployKey().load({ id })`.
  DeployKey(data?: any) {
    const self = this
    return new DeployKeyEntity(self,data)
  }


  // Entity access: `client.DeployToken().list()` / `client.DeployToken().load({ id })`.
  DeployToken(data?: any) {
    const self = this
    return new DeployTokenEntity(self,data)
  }


  // Entity access: `client.Deployment().list()` / `client.Deployment().load({ id })`.
  Deployment(data?: any) {
    const self = this
    return new DeploymentEntity(self,data)
  }


  // Entity access: `client.EeApiEntitiesApprovalState().list()` / `client.EeApiEntitiesApprovalState().load({ id })`.
  EeApiEntitiesApprovalState(data?: any) {
    const self = this
    return new EeApiEntitiesApprovalStateEntity(self,data)
  }


  // Entity access: `client.EeApiEntitiesAuditEvent().list()` / `client.EeApiEntitiesAuditEvent().load({ id })`.
  EeApiEntitiesAuditEvent(data?: any) {
    const self = this
    return new EeApiEntitiesAuditEventEntity(self,data)
  }


  // Entity access: `client.EeApiEntitiesBillableMembership().list()` / `client.EeApiEntitiesBillableMembership().load({ id })`.
  EeApiEntitiesBillableMembership(data?: any) {
    const self = this
    return new EeApiEntitiesBillableMembershipEntity(self,data)
  }


  // Entity access: `client.EeApiEntitiesGeoNodeStatus().list()` / `client.EeApiEntitiesGeoNodeStatus().load({ id })`.
  EeApiEntitiesGeoNodeStatus(data?: any) {
    const self = this
    return new EeApiEntitiesGeoNodeStatusEntity(self,data)
  }


  // Entity access: `client.EeApiEntitiesGeoPipelineRef().list()` / `client.EeApiEntitiesGeoPipelineRef().load({ id })`.
  EeApiEntitiesGeoPipelineRef(data?: any) {
    const self = this
    return new EeApiEntitiesGeoPipelineRefEntity(self,data)
  }


  // Entity access: `client.EeApiEntitiesIssuableMetricImage().list()` / `client.EeApiEntitiesIssuableMetricImage().load({ id })`.
  EeApiEntitiesIssuableMetricImage(data?: any) {
    const self = this
    return new EeApiEntitiesIssuableMetricImageEntity(self,data)
  }


  // Entity access: `client.EeApiEntitiesMergeRequestApprovalState().list()` / `client.EeApiEntitiesMergeRequestApprovalState().load({ id })`.
  EeApiEntitiesMergeRequestApprovalState(data?: any) {
    const self = this
    return new EeApiEntitiesMergeRequestApprovalStateEntity(self,data)
  }


  // Entity access: `client.EeApiEntitiesSshCertificate().list()` / `client.EeApiEntitiesSshCertificate().load({ id })`.
  EeApiEntitiesSshCertificate(data?: any) {
    const self = this
    return new EeApiEntitiesSshCertificateEntity(self,data)
  }


  // Entity access: `client.Environment().list()` / `client.Environment().load({ id })`.
  Environment(data?: any) {
    const self = this
    return new EnvironmentEntity(self,data)
  }


  // Entity access: `client.ErrorTrackingClientKey().list()` / `client.ErrorTrackingClientKey().load({ id })`.
  ErrorTrackingClientKey(data?: any) {
    const self = this
    return new ErrorTrackingClientKeyEntity(self,data)
  }


  // Entity access: `client.Feature().list()` / `client.Feature().load({ id })`.
  Feature(data?: any) {
    const self = this
    return new FeatureEntity(self,data)
  }


  // Entity access: `client.FeatureFlag().list()` / `client.FeatureFlag().load({ id })`.
  FeatureFlag(data?: any) {
    const self = this
    return new FeatureFlagEntity(self,data)
  }


  // Entity access: `client.FeatureFlagsUserList().list()` / `client.FeatureFlagsUserList().load({ id })`.
  FeatureFlagsUserList(data?: any) {
    const self = this
    return new FeatureFlagsUserListEntity(self,data)
  }


  // Entity access: `client.FreezePeriod().list()` / `client.FreezePeriod().load({ id })`.
  FreezePeriod(data?: any) {
    const self = this
    return new FreezePeriodEntity(self,data)
  }


  // Entity access: `client.GenericPackage().list()` / `client.GenericPackage().load({ id })`.
  GenericPackage(data?: any) {
    const self = this
    return new GenericPackageEntity(self,data)
  }


  // Entity access: `client.Geo().list()` / `client.Geo().load({ id })`.
  Geo(data?: any) {
    const self = this
    return new GeoEntity(self,data)
  }


  // Entity access: `client.GoProxy().list()` / `client.GoProxy().load({ id })`.
  GoProxy(data?: any) {
    const self = this
    return new GoProxyEntity(self,data)
  }


  // Entity access: `client.Group().list()` / `client.Group().load({ id })`.
  Group(data?: any) {
    const self = this
    return new GroupEntity(self,data)
  }


  // Entity access: `client.GroupAvatar().list()` / `client.GroupAvatar().load({ id })`.
  GroupAvatar(data?: any) {
    const self = this
    return new GroupAvatarEntity(self,data)
  }


  // Entity access: `client.GroupExport().list()` / `client.GroupExport().load({ id })`.
  GroupExport(data?: any) {
    const self = this
    return new GroupExportEntity(self,data)
  }


  // Entity access: `client.GroupImport().list()` / `client.GroupImport().load({ id })`.
  GroupImport(data?: any) {
    const self = this
    return new GroupImportEntity(self,data)
  }


  // Entity access: `client.HelmPackage().list()` / `client.HelmPackage().load({ id })`.
  HelmPackage(data?: any) {
    const self = this
    return new HelmPackageEntity(self,data)
  }


  // Entity access: `client.Hook().list()` / `client.Hook().load({ id })`.
  Hook(data?: any) {
    const self = this
    return new HookEntity(self,data)
  }


  // Entity access: `client.Import().list()` / `client.Import().load({ id })`.
  Import(data?: any) {
    const self = this
    return new ImportEntity(self,data)
  }


  // Entity access: `client.Integration().list()` / `client.Integration().load({ id })`.
  Integration(data?: any) {
    const self = this
    return new IntegrationEntity(self,data)
  }


  // Entity access: `client.Invitation().list()` / `client.Invitation().load({ id })`.
  Invitation(data?: any) {
    const self = this
    return new InvitationEntity(self,data)
  }


  // Entity access: `client.IssueLink().list()` / `client.IssueLink().load({ id })`.
  IssueLink(data?: any) {
    const self = this
    return new IssueLinkEntity(self,data)
  }


  // Entity access: `client.IssuesStatistic().list()` / `client.IssuesStatistic().load({ id })`.
  IssuesStatistic(data?: any) {
    const self = this
    return new IssuesStatisticEntity(self,data)
  }


  // Entity access: `client.Job().list()` / `client.Job().load({ id })`.
  Job(data?: any) {
    const self = this
    return new JobEntity(self,data)
  }


  // Entity access: `client.MavenPackage().list()` / `client.MavenPackage().load({ id })`.
  MavenPackage(data?: any) {
    const self = this
    return new MavenPackageEntity(self,data)
  }


  // Entity access: `client.Member().list()` / `client.Member().load({ id })`.
  Member(data?: any) {
    const self = this
    return new MemberEntity(self,data)
  }


  // Entity access: `client.MergeRequest().list()` / `client.MergeRequest().load({ id })`.
  MergeRequest(data?: any) {
    const self = this
    return new MergeRequestEntity(self,data)
  }


  // Entity access: `client.Metadata().list()` / `client.Metadata().load({ id })`.
  Metadata(data?: any) {
    const self = this
    return new MetadataEntity(self,data)
  }


  // Entity access: `client.Migration().list()` / `client.Migration().load({ id })`.
  Migration(data?: any) {
    const self = this
    return new MigrationEntity(self,data)
  }


  // Entity access: `client.MlModelRegistry().list()` / `client.MlModelRegistry().load({ id })`.
  MlModelRegistry(data?: any) {
    const self = this
    return new MlModelRegistryEntity(self,data)
  }


  // Entity access: `client.Namespace().list()` / `client.Namespace().load({ id })`.
  Namespace(data?: any) {
    const self = this
    return new NamespaceEntity(self,data)
  }


  // Entity access: `client.Npm().list()` / `client.Npm().load({ id })`.
  Npm(data?: any) {
    const self = this
    return new NpmEntity(self,data)
  }


  // Entity access: `client.NpmPackage().list()` / `client.NpmPackage().load({ id })`.
  NpmPackage(data?: any) {
    const self = this
    return new NpmPackageEntity(self,data)
  }


  // Entity access: `client.Nuget().list()` / `client.Nuget().load({ id })`.
  Nuget(data?: any) {
    const self = this
    return new NugetEntity(self,data)
  }


  // Entity access: `client.NugetPackage().list()` / `client.NugetPackage().load({ id })`.
  NugetPackage(data?: any) {
    const self = this
    return new NugetPackageEntity(self,data)
  }


  // Entity access: `client.PackageFile().list()` / `client.PackageFile().load({ id })`.
  PackageFile(data?: any) {
    const self = this
    return new PackageFileEntity(self,data)
  }


  // Entity access: `client.Page().list()` / `client.Page().load({ id })`.
  Page(data?: any) {
    const self = this
    return new PageEntity(self,data)
  }


  // Entity access: `client.Participant().list()` / `client.Participant().load({ id })`.
  Participant(data?: any) {
    const self = this
    return new ParticipantEntity(self,data)
  }


  // Entity access: `client.PersonalAccessToken().list()` / `client.PersonalAccessToken().load({ id })`.
  PersonalAccessToken(data?: any) {
    const self = this
    return new PersonalAccessTokenEntity(self,data)
  }


  // Entity access: `client.Project().list()` / `client.Project().load({ id })`.
  Project(data?: any) {
    const self = this
    return new ProjectEntityClient(self,data)
  }


  // Entity access: `client.ProjectAvatar().list()` / `client.ProjectAvatar().load({ id })`.
  ProjectAvatar(data?: any) {
    const self = this
    return new ProjectAvatarEntity(self,data)
  }


  // Entity access: `client.ProjectEntity().list()` / `client.ProjectEntity().load({ id })`.
  ProjectEntity(data?: any) {
    const self = this
    return new ProjectEntityEntity(self,data)
  }


  // Entity access: `client.ProjectExport().list()` / `client.ProjectExport().load({ id })`.
  ProjectExport(data?: any) {
    const self = this
    return new ProjectExportEntity(self,data)
  }


  // Entity access: `client.ProjectHook().list()` / `client.ProjectHook().load({ id })`.
  ProjectHook(data?: any) {
    const self = this
    return new ProjectHookEntity(self,data)
  }


  // Entity access: `client.ProjectImport().list()` / `client.ProjectImport().load({ id })`.
  ProjectImport(data?: any) {
    const self = this
    return new ProjectImportEntityClient(self,data)
  }


  // Entity access: `client.ProjectImportEntity().list()` / `client.ProjectImportEntity().load({ id })`.
  ProjectImportEntity(data?: any) {
    const self = this
    return new ProjectImportEntityEntity(self,data)
  }


  // Entity access: `client.ProjectPackage().list()` / `client.ProjectPackage().load({ id })`.
  ProjectPackage(data?: any) {
    const self = this
    return new ProjectPackageEntity(self,data)
  }


  // Entity access: `client.ProjectSnippet().list()` / `client.ProjectSnippet().load({ id })`.
  ProjectSnippet(data?: any) {
    const self = this
    return new ProjectSnippetEntity(self,data)
  }


  // Entity access: `client.ProjectsJobTokenScope().list()` / `client.ProjectsJobTokenScope().load({ id })`.
  ProjectsJobTokenScope(data?: any) {
    const self = this
    return new ProjectsJobTokenScopeEntity(self,data)
  }


  // Entity access: `client.ProtectedTag().list()` / `client.ProtectedTag().load({ id })`.
  ProtectedTag(data?: any) {
    const self = this
    return new ProtectedTagEntity(self,data)
  }


  // Entity access: `client.Pypi().list()` / `client.Pypi().load({ id })`.
  Pypi(data?: any) {
    const self = this
    return new PypiEntity(self,data)
  }


  // Entity access: `client.PypiPackage().list()` / `client.PypiPackage().load({ id })`.
  PypiPackage(data?: any) {
    const self = this
    return new PypiPackageEntity(self,data)
  }


  // Entity access: `client.Release().list()` / `client.Release().load({ id })`.
  Release(data?: any) {
    const self = this
    return new ReleaseEntity(self,data)
  }


  // Entity access: `client.ReleaseLink().list()` / `client.ReleaseLink().load({ id })`.
  ReleaseLink(data?: any) {
    const self = this
    return new ReleaseLinkEntity(self,data)
  }


  // Entity access: `client.RemoteMirror().list()` / `client.RemoteMirror().load({ id })`.
  RemoteMirror(data?: any) {
    const self = this
    return new RemoteMirrorEntity(self,data)
  }


  // Entity access: `client.Rpm().list()` / `client.Rpm().load({ id })`.
  Rpm(data?: any) {
    const self = this
    return new RpmEntity(self,data)
  }


  // Entity access: `client.RpmPackage().list()` / `client.RpmPackage().load({ id })`.
  RpmPackage(data?: any) {
    const self = this
    return new RpmPackageEntity(self,data)
  }


  // Entity access: `client.Rubygem().list()` / `client.Rubygem().load({ id })`.
  Rubygem(data?: any) {
    const self = this
    return new RubygemEntity(self,data)
  }


  // Entity access: `client.RubygemPackage().list()` / `client.RubygemPackage().load({ id })`.
  RubygemPackage(data?: any) {
    const self = this
    return new RubygemPackageEntity(self,data)
  }


  // Entity access: `client.Runner().list()` / `client.Runner().load({ id })`.
  Runner(data?: any) {
    const self = this
    return new RunnerEntity(self,data)
  }


  // Entity access: `client.Search().list()` / `client.Search().load({ id })`.
  Search(data?: any) {
    const self = this
    return new SearchEntity(self,data)
  }


  // Entity access: `client.SecureFile().list()` / `client.SecureFile().load({ id })`.
  SecureFile(data?: any) {
    const self = this
    return new SecureFileEntity(self,data)
  }


  // Entity access: `client.Slack().list()` / `client.Slack().load({ id })`.
  Slack(data?: any) {
    const self = this
    return new SlackEntity(self,data)
  }


  // Entity access: `client.Snippet().list()` / `client.Snippet().load({ id })`.
  Snippet(data?: any) {
    const self = this
    return new SnippetEntity(self,data)
  }


  // Entity access: `client.Starrer().list()` / `client.Starrer().load({ id })`.
  Starrer(data?: any) {
    const self = this
    return new StarrerEntity(self,data)
  }


  // Entity access: `client.SystemHook().list()` / `client.SystemHook().load({ id })`.
  SystemHook(data?: any) {
    const self = this
    return new SystemHookEntity(self,data)
  }


  // Entity access: `client.Tag().list()` / `client.Tag().load({ id })`.
  Tag(data?: any) {
    const self = this
    return new TagEntity(self,data)
  }


  // Entity access: `client.TerraformRegistry().list()` / `client.TerraformRegistry().load({ id })`.
  TerraformRegistry(data?: any) {
    const self = this
    return new TerraformRegistryEntity(self,data)
  }


  // Entity access: `client.TerraformState().list()` / `client.TerraformState().load({ id })`.
  TerraformState(data?: any) {
    const self = this
    return new TerraformStateEntity(self,data)
  }


  // Entity access: `client.TestReport().list()` / `client.TestReport().load({ id })`.
  TestReport(data?: any) {
    const self = this
    return new TestReportEntity(self,data)
  }


  // Entity access: `client.TestReportSummary().list()` / `client.TestReportSummary().load({ id })`.
  TestReportSummary(data?: any) {
    const self = this
    return new TestReportSummaryEntity(self,data)
  }


  // Entity access: `client.Topic().list()` / `client.Topic().load({ id })`.
  Topic(data?: any) {
    const self = this
    return new TopicEntity(self,data)
  }


  // Entity access: `client.UnleashApi().list()` / `client.UnleashApi().load({ id })`.
  UnleashApi(data?: any) {
    const self = this
    return new UnleashApiEntity(self,data)
  }


  // Entity access: `client.UsageData().list()` / `client.UsageData().load({ id })`.
  UsageData(data?: any) {
    const self = this
    return new UsageDataEntity(self,data)
  }


  // Entity access: `client.User().list()` / `client.User().load({ id })`.
  User(data?: any) {
    const self = this
    return new UserEntity(self,data)
  }


  // Entity access: `client.WebCommit().list()` / `client.WebCommit().load({ id })`.
  WebCommit(data?: any) {
    const self = this
    return new WebCommitEntity(self,data)
  }


  // Entity access: `client.Wiki().list()` / `client.Wiki().load({ id })`.
  Wiki(data?: any) {
    const self = this
    return new WikiEntity(self,data)
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

  BaseFeature,
  GitlabEntityBase,

  GitlabSDK,
  SDK,
}


