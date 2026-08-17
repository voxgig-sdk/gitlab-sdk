"use strict";
// Gitlab Ts SDK
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = exports.GitlabSDK = exports.GitlabEntityBase = exports.BaseFeature = exports.config = exports.stdutil = void 0;
const AccessRequestEntity_1 = require("./entity/AccessRequestEntity");
const AlertManagementEntity_1 = require("./entity/AlertManagementEntity");
const ApiEntitiesAccessRequesterEntity_1 = require("./entity/ApiEntitiesAccessRequesterEntity");
const ApiEntitiesAppearanceEntity_1 = require("./entity/ApiEntitiesAppearanceEntity");
const ApiEntitiesApplicationEntity_1 = require("./entity/ApiEntitiesApplicationEntity");
const ApiEntitiesApplicationStatisticEntity_1 = require("./entity/ApiEntitiesApplicationStatisticEntity");
const ApiEntitiesApplicationWithSecretEntity_1 = require("./entity/ApiEntitiesApplicationWithSecretEntity");
const ApiEntitiesAvatarEntity_1 = require("./entity/ApiEntitiesAvatarEntity");
const ApiEntitiesAwardEmojiEntity_1 = require("./entity/ApiEntitiesAwardEmojiEntity");
const ApiEntitiesBadgeEntity_1 = require("./entity/ApiEntitiesBadgeEntity");
const ApiEntitiesBasicBadgeDetailEntity_1 = require("./entity/ApiEntitiesBasicBadgeDetailEntity");
const ApiEntitiesBasicGroupDetailEntity_1 = require("./entity/ApiEntitiesBasicGroupDetailEntity");
const ApiEntitiesBasicProjectDetailEntity_1 = require("./entity/ApiEntitiesBasicProjectDetailEntity");
const ApiEntitiesBasicRefEntity_1 = require("./entity/ApiEntitiesBasicRefEntity");
const ApiEntitiesBasicSuccessEntity_1 = require("./entity/ApiEntitiesBasicSuccessEntity");
const ApiEntitiesBatchedBackgroundMigrationEntity_1 = require("./entity/ApiEntitiesBatchedBackgroundMigrationEntity");
const ApiEntitiesBranchEntity_1 = require("./entity/ApiEntitiesBranchEntity");
const ApiEntitiesBulkImportEntity_1 = require("./entity/ApiEntitiesBulkImportEntity");
const ApiEntitiesBulkImportsEntityFailureEntity_1 = require("./entity/ApiEntitiesBulkImportsEntityFailureEntity");
const ApiEntitiesBulkImportsExportStatusEntity_1 = require("./entity/ApiEntitiesBulkImportsExportStatusEntity");
const ApiEntitiesChangelogEntity_1 = require("./entity/ApiEntitiesChangelogEntity");
const ApiEntitiesCiBridgeEntity_1 = require("./entity/ApiEntitiesCiBridgeEntity");
const ApiEntitiesCiCatalogResourcesVersionEntity_1 = require("./entity/ApiEntitiesCiCatalogResourcesVersionEntity");
const ApiEntitiesCiJobEntity_1 = require("./entity/ApiEntitiesCiJobEntity");
const ApiEntitiesCiJobBasicEntity_1 = require("./entity/ApiEntitiesCiJobBasicEntity");
const ApiEntitiesCiJobBasicWithProjectEntity_1 = require("./entity/ApiEntitiesCiJobBasicWithProjectEntity");
const ApiEntitiesCiLintResultEntity_1 = require("./entity/ApiEntitiesCiLintResultEntity");
const ApiEntitiesCiPipelineEntity_1 = require("./entity/ApiEntitiesCiPipelineEntity");
const ApiEntitiesCiPipelineBasicEntity_1 = require("./entity/ApiEntitiesCiPipelineBasicEntity");
const ApiEntitiesCiPipelineScheduleEntity_1 = require("./entity/ApiEntitiesCiPipelineScheduleEntity");
const ApiEntitiesCiPipelineScheduleDetailEntity_1 = require("./entity/ApiEntitiesCiPipelineScheduleDetailEntity");
const ApiEntitiesCiResetTokenResultEntity_1 = require("./entity/ApiEntitiesCiResetTokenResultEntity");
const ApiEntitiesCiResourceGroupEntity_1 = require("./entity/ApiEntitiesCiResourceGroupEntity");
const ApiEntitiesCiRunnerEntity_1 = require("./entity/ApiEntitiesCiRunnerEntity");
const ApiEntitiesCiRunnerDetailEntity_1 = require("./entity/ApiEntitiesCiRunnerDetailEntity");
const ApiEntitiesCiRunnerManagerEntity_1 = require("./entity/ApiEntitiesCiRunnerManagerEntity");
const ApiEntitiesCiRunnerRegistrationDetailEntity_1 = require("./entity/ApiEntitiesCiRunnerRegistrationDetailEntity");
const ApiEntitiesCiSecureFileEntity_1 = require("./entity/ApiEntitiesCiSecureFileEntity");
const ApiEntitiesCiVariableEntity_1 = require("./entity/ApiEntitiesCiVariableEntity");
const ApiEntitiesClusterEntity_1 = require("./entity/ApiEntitiesClusterEntity");
const ApiEntitiesClusterGroupEntity_1 = require("./entity/ApiEntitiesClusterGroupEntity");
const ApiEntitiesClusterProjectEntity_1 = require("./entity/ApiEntitiesClusterProjectEntity");
const ApiEntitiesClustersAgentEntity_1 = require("./entity/ApiEntitiesClustersAgentEntity");
const ApiEntitiesClustersAgentTokenEntity_1 = require("./entity/ApiEntitiesClustersAgentTokenEntity");
const ApiEntitiesClustersAgentTokenBasicEntity_1 = require("./entity/ApiEntitiesClustersAgentTokenBasicEntity");
const ApiEntitiesClustersAgentTokenWithTokenEntity_1 = require("./entity/ApiEntitiesClustersAgentTokenWithTokenEntity");
const ApiEntitiesCommitEntity_1 = require("./entity/ApiEntitiesCommitEntity");
const ApiEntitiesCommitDetailEntity_1 = require("./entity/ApiEntitiesCommitDetailEntity");
const ApiEntitiesCommitNoteEntity_1 = require("./entity/ApiEntitiesCommitNoteEntity");
const ApiEntitiesCommitSequenceEntity_1 = require("./entity/ApiEntitiesCommitSequenceEntity");
const ApiEntitiesCommitSignatureEntity_1 = require("./entity/ApiEntitiesCommitSignatureEntity");
const ApiEntitiesCommitStatusEntity_1 = require("./entity/ApiEntitiesCommitStatusEntity");
const ApiEntitiesCompareEntity_1 = require("./entity/ApiEntitiesCompareEntity");
const ApiEntitiesContainerRegistryRepositoryEntity_1 = require("./entity/ApiEntitiesContainerRegistryRepositoryEntity");
const ApiEntitiesContainerRegistryTagEntity_1 = require("./entity/ApiEntitiesContainerRegistryTagEntity");
const ApiEntitiesContainerRegistryTagDetailEntity_1 = require("./entity/ApiEntitiesContainerRegistryTagDetailEntity");
const ApiEntitiesContributorEntity_1 = require("./entity/ApiEntitiesContributorEntity");
const ApiEntitiesDeployKeyEntity_1 = require("./entity/ApiEntitiesDeployKeyEntity");
const ApiEntitiesDeployKeysProjectEntity_1 = require("./entity/ApiEntitiesDeployKeysProjectEntity");
const ApiEntitiesDeployTokenEntity_1 = require("./entity/ApiEntitiesDeployTokenEntity");
const ApiEntitiesDeployTokenWithTokenEntity_1 = require("./entity/ApiEntitiesDeployTokenWithTokenEntity");
const ApiEntitiesDeploymentEntity_1 = require("./entity/ApiEntitiesDeploymentEntity");
const ApiEntitiesDeploymentExtendedEntity_1 = require("./entity/ApiEntitiesDeploymentExtendedEntity");
const ApiEntitiesDeploymentsApprovalEntity_1 = require("./entity/ApiEntitiesDeploymentsApprovalEntity");
const ApiEntitiesDictionaryTableEntity_1 = require("./entity/ApiEntitiesDictionaryTableEntity");
const ApiEntitiesDiffEntity_1 = require("./entity/ApiEntitiesDiffEntity");
const ApiEntitiesDiscoveredClusterEntity_1 = require("./entity/ApiEntitiesDiscoveredClusterEntity");
const ApiEntitiesDraftNoteEntity_1 = require("./entity/ApiEntitiesDraftNoteEntity");
const ApiEntitiesEnvironmentEntity_1 = require("./entity/ApiEntitiesEnvironmentEntity");
const ApiEntitiesErrorTrackingClientKeyEntity_1 = require("./entity/ApiEntitiesErrorTrackingClientKeyEntity");
const ApiEntitiesErrorTrackingProjectSettingEntity_1 = require("./entity/ApiEntitiesErrorTrackingProjectSettingEntity");
const ApiEntitiesEventEntity_1 = require("./entity/ApiEntitiesEventEntity");
const ApiEntitiesFeatureEntity_1 = require("./entity/ApiEntitiesFeatureEntity");
const ApiEntitiesFeatureDefinitionEntity_1 = require("./entity/ApiEntitiesFeatureDefinitionEntity");
const ApiEntitiesFeatureFlagEntity_1 = require("./entity/ApiEntitiesFeatureFlagEntity");
const ApiEntitiesFeatureFlagUserListEntity_1 = require("./entity/ApiEntitiesFeatureFlagUserListEntity");
const ApiEntitiesFreezePeriodEntity_1 = require("./entity/ApiEntitiesFreezePeriodEntity");
const ApiEntitiesGitlabSubscriptionEntity_1 = require("./entity/ApiEntitiesGitlabSubscriptionEntity");
const ApiEntitiesGoModuleVersionEntity_1 = require("./entity/ApiEntitiesGoModuleVersionEntity");
const ApiEntitiesGroupEntity_1 = require("./entity/ApiEntitiesGroupEntity");
const ApiEntitiesGroupDetailEntity_1 = require("./entity/ApiEntitiesGroupDetailEntity");
const ApiEntitiesHookEntity_1 = require("./entity/ApiEntitiesHookEntity");
const ApiEntitiesIntegrationEntity_1 = require("./entity/ApiEntitiesIntegrationEntity");
const ApiEntitiesIntegrationBasicEntity_1 = require("./entity/ApiEntitiesIntegrationBasicEntity");
const ApiEntitiesInvitationEntity_1 = require("./entity/ApiEntitiesInvitationEntity");
const ApiEntitiesIssuableTimeStatEntity_1 = require("./entity/ApiEntitiesIssuableTimeStatEntity");
const ApiEntitiesIssueEntity_1 = require("./entity/ApiEntitiesIssueEntity");
const ApiEntitiesIssueLinkEntity_1 = require("./entity/ApiEntitiesIssueLinkEntity");
const ApiEntitiesLicenseEntity_1 = require("./entity/ApiEntitiesLicenseEntity");
const ApiEntitiesMarkdownEntity_1 = require("./entity/ApiEntitiesMarkdownEntity");
const ApiEntitiesMarkdownUploadAdminEntity_1 = require("./entity/ApiEntitiesMarkdownUploadAdminEntity");
const ApiEntitiesMemberEntity_1 = require("./entity/ApiEntitiesMemberEntity");
const ApiEntitiesMergeEntity_1 = require("./entity/ApiEntitiesMergeEntity");
const ApiEntitiesMergeRequestApprovalEntity_1 = require("./entity/ApiEntitiesMergeRequestApprovalEntity");
const ApiEntitiesMergeRequestBasicEntity_1 = require("./entity/ApiEntitiesMergeRequestBasicEntity");
const ApiEntitiesMergeRequestChangeEntity_1 = require("./entity/ApiEntitiesMergeRequestChangeEntity");
const ApiEntitiesMergeRequestDiffEntity_1 = require("./entity/ApiEntitiesMergeRequestDiffEntity");
const ApiEntitiesMergeRequestDiffFullEntity_1 = require("./entity/ApiEntitiesMergeRequestDiffFullEntity");
const ApiEntitiesMergeRequestReviewerEntity_1 = require("./entity/ApiEntitiesMergeRequestReviewerEntity");
const ApiEntitiesMetricImageEntity_1 = require("./entity/ApiEntitiesMetricImageEntity");
const ApiEntitiesMrNoteEntity_1 = require("./entity/ApiEntitiesMrNoteEntity");
const ApiEntitiesNamespaceEntity_1 = require("./entity/ApiEntitiesNamespaceEntity");
const ApiEntitiesNamespaceExistenceEntity_1 = require("./entity/ApiEntitiesNamespaceExistenceEntity");
const ApiEntitiesNamespacesStorageLimitExclusionEntity_1 = require("./entity/ApiEntitiesNamespacesStorageLimitExclusionEntity");
const ApiEntitiesNpmPackageEntity_1 = require("./entity/ApiEntitiesNpmPackageEntity");
const ApiEntitiesNpmPackageTagEntity_1 = require("./entity/ApiEntitiesNpmPackageTagEntity");
const ApiEntitiesNugetPackagesVersionEntity_1 = require("./entity/ApiEntitiesNugetPackagesVersionEntity");
const ApiEntitiesNugetSearchResultEntity_1 = require("./entity/ApiEntitiesNugetSearchResultEntity");
const ApiEntitiesNugetServiceIndexEntity_1 = require("./entity/ApiEntitiesNugetServiceIndexEntity");
const ApiEntitiesOrganizationsOrganizationEntity_1 = require("./entity/ApiEntitiesOrganizationsOrganizationEntity");
const ApiEntitiesPackageEntity_1 = require("./entity/ApiEntitiesPackageEntity");
const ApiEntitiesPackageFileEntity_1 = require("./entity/ApiEntitiesPackageFileEntity");
const ApiEntitiesPackagePipelineEntity_1 = require("./entity/ApiEntitiesPackagePipelineEntity");
const ApiEntitiesPackagesConanFilesListEntity_1 = require("./entity/ApiEntitiesPackagesConanFilesListEntity");
const ApiEntitiesPackagesConanPackageManifestEntity_1 = require("./entity/ApiEntitiesPackagesConanPackageManifestEntity");
const ApiEntitiesPackagesConanPackageRevisionEntity_1 = require("./entity/ApiEntitiesPackagesConanPackageRevisionEntity");
const ApiEntitiesPackagesConanPackageSnapshotEntity_1 = require("./entity/ApiEntitiesPackagesConanPackageSnapshotEntity");
const ApiEntitiesPackagesConanRecipeManifestEntity_1 = require("./entity/ApiEntitiesPackagesConanRecipeManifestEntity");
const ApiEntitiesPackagesConanRecipeRevisionEntity_1 = require("./entity/ApiEntitiesPackagesConanRecipeRevisionEntity");
const ApiEntitiesPackagesConanRecipeSnapshotEntity_1 = require("./entity/ApiEntitiesPackagesConanRecipeSnapshotEntity");
const ApiEntitiesPackagesConanRevisionEntity_1 = require("./entity/ApiEntitiesPackagesConanRevisionEntity");
const ApiEntitiesPackagesConanUploadUrlEntity_1 = require("./entity/ApiEntitiesPackagesConanUploadUrlEntity");
const ApiEntitiesPackagesDebianDistributionEntity_1 = require("./entity/ApiEntitiesPackagesDebianDistributionEntity");
const ApiEntitiesPagesDomainEntity_1 = require("./entity/ApiEntitiesPagesDomainEntity");
const ApiEntitiesPagesDomainBasicEntity_1 = require("./entity/ApiEntitiesPagesDomainBasicEntity");
const ApiEntitiesPersonalAccessTokenEntity_1 = require("./entity/ApiEntitiesPersonalAccessTokenEntity");
const ApiEntitiesPersonalAccessTokenWithLastUsedIpEntity_1 = require("./entity/ApiEntitiesPersonalAccessTokenWithLastUsedIpEntity");
const ApiEntitiesPersonalAccessTokenWithTokenEntity_1 = require("./entity/ApiEntitiesPersonalAccessTokenWithTokenEntity");
const ApiEntitiesPersonalSnippetEntity_1 = require("./entity/ApiEntitiesPersonalSnippetEntity");
const ApiEntitiesPlanLimitEntity_1 = require("./entity/ApiEntitiesPlanLimitEntity");
const ApiEntitiesProjectEntity_1 = require("./entity/ApiEntitiesProjectEntity");
const ApiEntitiesProjectDailyStatisticEntity_1 = require("./entity/ApiEntitiesProjectDailyStatisticEntity");
const ApiEntitiesProjectExportStatusEntity_1 = require("./entity/ApiEntitiesProjectExportStatusEntity");
const ApiEntitiesProjectGroupLinkEntity_1 = require("./entity/ApiEntitiesProjectGroupLinkEntity");
const ApiEntitiesProjectHookEntity_1 = require("./entity/ApiEntitiesProjectHookEntity");
const ApiEntitiesProjectImportStatusEntity_1 = require("./entity/ApiEntitiesProjectImportStatusEntity");
const ApiEntitiesProjectJobTokenScopeEntity_1 = require("./entity/ApiEntitiesProjectJobTokenScopeEntity");
const ApiEntitiesProjectRepositoryStorageEntity_1 = require("./entity/ApiEntitiesProjectRepositoryStorageEntity");
const ApiEntitiesProjectSnippetEntity_1 = require("./entity/ApiEntitiesProjectSnippetEntity");
const ApiEntitiesProjectUploadEntity_1 = require("./entity/ApiEntitiesProjectUploadEntity");
const ApiEntitiesProjectWithAccessEntity_1 = require("./entity/ApiEntitiesProjectWithAccessEntity");
const ApiEntitiesProjectsContainerRegistryProtectionRuleEntity_1 = require("./entity/ApiEntitiesProjectsContainerRegistryProtectionRuleEntity");
const ApiEntitiesProjectsPackagesProtectionRuleEntity_1 = require("./entity/ApiEntitiesProjectsPackagesProtectionRuleEntity");
const ApiEntitiesProjectsTopicEntity_1 = require("./entity/ApiEntitiesProjectsTopicEntity");
const ApiEntitiesProtectedBranchEntity_1 = require("./entity/ApiEntitiesProtectedBranchEntity");
const ApiEntitiesProtectedTagEntity_1 = require("./entity/ApiEntitiesProtectedTagEntity");
const ApiEntitiesPublicGroupDetailEntity_1 = require("./entity/ApiEntitiesPublicGroupDetailEntity");
const ApiEntitiesRelatedIssueEntity_1 = require("./entity/ApiEntitiesRelatedIssueEntity");
const ApiEntitiesRelationImportTrackerEntity_1 = require("./entity/ApiEntitiesRelationImportTrackerEntity");
const ApiEntitiesReleaseEntity_1 = require("./entity/ApiEntitiesReleaseEntity");
const ApiEntitiesReleasesLinkEntity_1 = require("./entity/ApiEntitiesReleasesLinkEntity");
const ApiEntitiesRemoteMirrorEntity_1 = require("./entity/ApiEntitiesRemoteMirrorEntity");
const ApiEntitiesRepositoryHealthEntity_1 = require("./entity/ApiEntitiesRepositoryHealthEntity");
const ApiEntitiesResourceAccessTokenWithTokenEntity_1 = require("./entity/ApiEntitiesResourceAccessTokenWithTokenEntity");
const ApiEntitiesResourceMilestoneEventEntity_1 = require("./entity/ApiEntitiesResourceMilestoneEventEntity");
const ApiEntitiesSnippetEntity_1 = require("./entity/ApiEntitiesSnippetEntity");
const ApiEntitiesSshKeyWithUserEntity_1 = require("./entity/ApiEntitiesSshKeyWithUserEntity");
const ApiEntitiesSuggestionEntity_1 = require("./entity/ApiEntitiesSuggestionEntity");
const ApiEntitiesSystemBroadcastMessageEntity_1 = require("./entity/ApiEntitiesSystemBroadcastMessageEntity");
const ApiEntitiesTagEntity_1 = require("./entity/ApiEntitiesTagEntity");
const ApiEntitiesTagSignatureEntity_1 = require("./entity/ApiEntitiesTagSignatureEntity");
const ApiEntitiesTemplatesListEntity_1 = require("./entity/ApiEntitiesTemplatesListEntity");
const ApiEntitiesTerraformModuleVersionEntity_1 = require("./entity/ApiEntitiesTerraformModuleVersionEntity");
const ApiEntitiesTreeObjectEntity_1 = require("./entity/ApiEntitiesTreeObjectEntity");
const ApiEntitiesTriggerEntity_1 = require("./entity/ApiEntitiesTriggerEntity");
const ApiEntitiesUserAgentDetailEntity_1 = require("./entity/ApiEntitiesUserAgentDetailEntity");
const ApiEntitiesUserCountEntity_1 = require("./entity/ApiEntitiesUserCountEntity");
const ApiEntitiesUserPublicEntity_1 = require("./entity/ApiEntitiesUserPublicEntity");
const ApiEntitiesUserWithAdminEntity_1 = require("./entity/ApiEntitiesUserWithAdminEntity");
const ApiEntitiesWikiAttachmentEntity_1 = require("./entity/ApiEntitiesWikiAttachmentEntity");
const ApiEntitiesWikiPageEntity_1 = require("./entity/ApiEntitiesWikiPageEntity");
const ApiEntitiesWikiPageBasicEntity_1 = require("./entity/ApiEntitiesWikiPageBasicEntity");
const ApplicationEntity_1 = require("./entity/ApplicationEntity");
const AwardEmojiEntity_1 = require("./entity/AwardEmojiEntity");
const BadgeEntity_1 = require("./entity/BadgeEntity");
const BranchEntity_1 = require("./entity/BranchEntity");
const CargoPackageEntity_1 = require("./entity/CargoPackageEntity");
const CiVariableEntity_1 = require("./entity/CiVariableEntity");
const ClusterEntity_1 = require("./entity/ClusterEntity");
const ClusterAgentEntity_1 = require("./entity/ClusterAgentEntity");
const ComposerEntity_1 = require("./entity/ComposerEntity");
const ComposerPackageEntity_1 = require("./entity/ComposerPackageEntity");
const ConanEntity_1 = require("./entity/ConanEntity");
const ConanPackageEntity_1 = require("./entity/ConanPackageEntity");
const ContainerRegistryEntity_1 = require("./entity/ContainerRegistryEntity");
const ContainerRegistryEventEntity_1 = require("./entity/ContainerRegistryEventEntity");
const CustomAttributeEntity_1 = require("./entity/CustomAttributeEntity");
const DebianEntity_1 = require("./entity/DebianEntity");
const DebianDistributionEntity_1 = require("./entity/DebianDistributionEntity");
const DebianPackageEntity_1 = require("./entity/DebianPackageEntity");
const DependencyProxyEntity_1 = require("./entity/DependencyProxyEntity");
const DeployKeyEntity_1 = require("./entity/DeployKeyEntity");
const DeployTokenEntity_1 = require("./entity/DeployTokenEntity");
const DeploymentEntity_1 = require("./entity/DeploymentEntity");
const EeApiEntitiesApprovalStateEntity_1 = require("./entity/EeApiEntitiesApprovalStateEntity");
const EeApiEntitiesAuditEventEntity_1 = require("./entity/EeApiEntitiesAuditEventEntity");
const EeApiEntitiesBillableMembershipEntity_1 = require("./entity/EeApiEntitiesBillableMembershipEntity");
const EeApiEntitiesGeoNodeStatusEntity_1 = require("./entity/EeApiEntitiesGeoNodeStatusEntity");
const EeApiEntitiesGeoPipelineRefEntity_1 = require("./entity/EeApiEntitiesGeoPipelineRefEntity");
const EeApiEntitiesIssuableMetricImageEntity_1 = require("./entity/EeApiEntitiesIssuableMetricImageEntity");
const EeApiEntitiesMergeRequestApprovalStateEntity_1 = require("./entity/EeApiEntitiesMergeRequestApprovalStateEntity");
const EeApiEntitiesSshCertificateEntity_1 = require("./entity/EeApiEntitiesSshCertificateEntity");
const EnvironmentEntity_1 = require("./entity/EnvironmentEntity");
const ErrorTrackingClientKeyEntity_1 = require("./entity/ErrorTrackingClientKeyEntity");
const FeatureEntity_1 = require("./entity/FeatureEntity");
const FeatureFlagEntity_1 = require("./entity/FeatureFlagEntity");
const FeatureFlagsUserListEntity_1 = require("./entity/FeatureFlagsUserListEntity");
const FreezePeriodEntity_1 = require("./entity/FreezePeriodEntity");
const GenericPackageEntity_1 = require("./entity/GenericPackageEntity");
const GeoEntity_1 = require("./entity/GeoEntity");
const GoProxyEntity_1 = require("./entity/GoProxyEntity");
const GroupEntity_1 = require("./entity/GroupEntity");
const GroupAvatarEntity_1 = require("./entity/GroupAvatarEntity");
const GroupExportEntity_1 = require("./entity/GroupExportEntity");
const GroupImportEntity_1 = require("./entity/GroupImportEntity");
const HelmPackageEntity_1 = require("./entity/HelmPackageEntity");
const HookEntity_1 = require("./entity/HookEntity");
const ImportEntity_1 = require("./entity/ImportEntity");
const IntegrationEntity_1 = require("./entity/IntegrationEntity");
const InvitationEntity_1 = require("./entity/InvitationEntity");
const IssueLinkEntity_1 = require("./entity/IssueLinkEntity");
const IssuesStatisticEntity_1 = require("./entity/IssuesStatisticEntity");
const JobEntity_1 = require("./entity/JobEntity");
const MavenPackageEntity_1 = require("./entity/MavenPackageEntity");
const MemberEntity_1 = require("./entity/MemberEntity");
const MergeRequestEntity_1 = require("./entity/MergeRequestEntity");
const MetadataEntity_1 = require("./entity/MetadataEntity");
const MigrationEntity_1 = require("./entity/MigrationEntity");
const MlModelRegistryEntity_1 = require("./entity/MlModelRegistryEntity");
const NamespaceEntity_1 = require("./entity/NamespaceEntity");
const NpmEntity_1 = require("./entity/NpmEntity");
const NpmPackageEntity_1 = require("./entity/NpmPackageEntity");
const NugetEntity_1 = require("./entity/NugetEntity");
const NugetPackageEntity_1 = require("./entity/NugetPackageEntity");
const PackageFileEntity_1 = require("./entity/PackageFileEntity");
const PageEntity_1 = require("./entity/PageEntity");
const ParticipantEntity_1 = require("./entity/ParticipantEntity");
const PersonalAccessTokenEntity_1 = require("./entity/PersonalAccessTokenEntity");
const ProjectEntityClient_1 = require("./entity/ProjectEntityClient");
const ProjectAvatarEntity_1 = require("./entity/ProjectAvatarEntity");
const ProjectEntityEntity_1 = require("./entity/ProjectEntityEntity");
const ProjectExportEntity_1 = require("./entity/ProjectExportEntity");
const ProjectHookEntity_1 = require("./entity/ProjectHookEntity");
const ProjectImportEntityClient_1 = require("./entity/ProjectImportEntityClient");
const ProjectImportEntityEntity_1 = require("./entity/ProjectImportEntityEntity");
const ProjectPackageEntity_1 = require("./entity/ProjectPackageEntity");
const ProjectSnippetEntity_1 = require("./entity/ProjectSnippetEntity");
const ProjectsJobTokenScopeEntity_1 = require("./entity/ProjectsJobTokenScopeEntity");
const ProtectedTagEntity_1 = require("./entity/ProtectedTagEntity");
const PypiEntity_1 = require("./entity/PypiEntity");
const PypiPackageEntity_1 = require("./entity/PypiPackageEntity");
const ReleaseEntity_1 = require("./entity/ReleaseEntity");
const ReleaseLinkEntity_1 = require("./entity/ReleaseLinkEntity");
const RemoteMirrorEntity_1 = require("./entity/RemoteMirrorEntity");
const RpmEntity_1 = require("./entity/RpmEntity");
const RpmPackageEntity_1 = require("./entity/RpmPackageEntity");
const RubygemEntity_1 = require("./entity/RubygemEntity");
const RubygemPackageEntity_1 = require("./entity/RubygemPackageEntity");
const RunnerEntity_1 = require("./entity/RunnerEntity");
const SearchEntity_1 = require("./entity/SearchEntity");
const SecureFileEntity_1 = require("./entity/SecureFileEntity");
const SlackEntity_1 = require("./entity/SlackEntity");
const SnippetEntity_1 = require("./entity/SnippetEntity");
const StarrerEntity_1 = require("./entity/StarrerEntity");
const SystemHookEntity_1 = require("./entity/SystemHookEntity");
const TagEntity_1 = require("./entity/TagEntity");
const TerraformRegistryEntity_1 = require("./entity/TerraformRegistryEntity");
const TerraformStateEntity_1 = require("./entity/TerraformStateEntity");
const TestReportEntity_1 = require("./entity/TestReportEntity");
const TestReportSummaryEntity_1 = require("./entity/TestReportSummaryEntity");
const TopicEntity_1 = require("./entity/TopicEntity");
const UnleashApiEntity_1 = require("./entity/UnleashApiEntity");
const UsageDataEntity_1 = require("./entity/UsageDataEntity");
const UserEntity_1 = require("./entity/UserEntity");
const WebCommitEntity_1 = require("./entity/WebCommitEntity");
const WikiEntity_1 = require("./entity/WikiEntity");
const node_util_1 = require("node:util");
const Config_1 = require("./Config");
Object.defineProperty(exports, "config", { enumerable: true, get: function () { return Config_1.config; } });
const GitlabEntityBase_1 = require("./GitlabEntityBase");
Object.defineProperty(exports, "GitlabEntityBase", { enumerable: true, get: function () { return GitlabEntityBase_1.GitlabEntityBase; } });
const Utility_1 = require("./utility/Utility");
const BaseFeature_1 = require("./feature/base/BaseFeature");
Object.defineProperty(exports, "BaseFeature", { enumerable: true, get: function () { return BaseFeature_1.BaseFeature; } });
const stdutil = new Utility_1.Utility();
exports.stdutil = stdutil;
class GitlabSDK {
    _mode = 'live';
    _options;
    _utility = new Utility_1.Utility();
    _features;
    _rootctx;
    constructor(options) {
        this._rootctx = this._utility.makeContext({
            client: this,
            utility: this._utility,
            config: Config_1.config,
            options,
            shared: new WeakMap()
        });
        this._options = this._utility.makeOptions(this._rootctx);
        const struct = this._utility.struct;
        const getpath = struct.getpath;
        if (true === getpath(this._options.feature, 'test.active')) {
            this._mode = 'test';
        }
        this._rootctx.options = this._options;
        this._features = [];
        const featureAdd = this._utility.featureAdd;
        const featureInit = this._utility.featureInit;
        // Add features in the resolved order (makeOptions puts an explicit
        // array order first, else defaults to test-first). Ordering matters:
        // the `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
        // so `test` must be added before them to sit at the base of the chain.
        const featureorder = getpath(this._options, '__derived__.featureorder') || [];
        for (const fname of featureorder) {
            const fopts = this._options.feature[fname] || {};
            if (fopts.active) {
                featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname));
            }
        }
        if (null != this._options.extend) {
            for (let f of this._options.extend) {
                featureAdd(this._rootctx, f);
            }
        }
        for (let f of this._features) {
            featureInit(this._rootctx, f);
        }
        const featureHook = this._utility.featureHook;
        featureHook(this._rootctx, 'PostConstruct');
    }
    options() {
        return this._utility.struct.clone(this._options);
    }
    utility() {
        return this._utility.struct.clone(this._utility);
    }
    async prepare(fetchargs) {
        const utility = this._utility;
        const struct = utility.struct;
        const clone = struct.clone;
        const { makeContext, makeFetchDef, prepareHeaders, prepareAuth, } = utility;
        fetchargs = fetchargs || {};
        let ctx = makeContext({
            opname: 'prepare',
            ctrl: fetchargs.ctrl || {},
        }, this._rootctx);
        const options = this._options;
        // Build spec directly from SDK options + user-provided fetch args.
        const spec = {
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
        };
        ctx.spec = spec;
        // Merge user-provided headers over SDK defaults.
        if (fetchargs.headers) {
            const uheaders = fetchargs.headers;
            for (let key in uheaders) {
                spec.headers[key] = uheaders[key];
            }
        }
        // Apply SDK auth (apikey, auth prefix, etc.)
        const authResult = prepareAuth(ctx);
        if (authResult instanceof Error) {
            return authResult;
        }
        return makeFetchDef(ctx);
    }
    // Raw endpoint access is operator-controllable, like every entity op.
    // Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
    // either one reaches the same endpoint.
    async direct(fetchargs) {
        if (!this._options.allow.op.includes('direct')) {
            return {
                ok: false,
                err: new Error('GitlabSDK: direct: operation not allowed by' +
                    ' SDK option allow.op value: "' + this._options.allow.op + '"'),
            };
        }
        return this._rawRequest(fetchargs);
    }
    // Ungated request path shared by direct() and graphql(), each of which
    // checks its own allow.op token first. Private, rather than a flag on
    // fetchargs: a caller-supplied marker would let anyone opt straight back
    // out of the gate by passing it.
    async _rawRequest(fetchargs) {
        const utility = this._utility;
        const fetcher = utility.fetcher;
        const makeContext = utility.makeContext;
        const fetchdef = await this.prepare(fetchargs);
        if (fetchdef instanceof Error) {
            return fetchdef;
        }
        let ctx = makeContext({
            opname: 'direct',
            ctrl: (fetchargs || {}).ctrl || {},
        }, this._rootctx);
        try {
            const fetched = await fetcher(ctx, fetchdef.url, fetchdef);
            if (null == fetched) {
                return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') };
            }
            else if (fetched instanceof Error) {
                return { ok: false, err: fetched };
            }
            const status = fetched.status;
            // No body responses (204 No Content, 304 Not Modified) and explicit
            // zero content-length must skip JSON parsing — fetched.json() would
            // throw `Unexpected end of JSON input` on an empty body.
            const headers = fetched.headers;
            const contentLength = headers && 'function' === typeof headers.get
                ? headers.get('content-length')
                : (headers || {})['content-length'];
            const noBody = 204 === status || 304 === status || '0' === String(contentLength);
            let json = undefined;
            if (!noBody) {
                try {
                    json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json;
                }
                catch (parseErr) {
                    // Body wasn't valid JSON — surface the raw response rather than
                    // throwing. data stays undefined; callers can inspect status/headers.
                    json = undefined;
                }
            }
            return {
                ok: status >= 200 && status < 300,
                status,
                headers: fetched.headers,
                data: json,
            };
        }
        catch (err) {
            return { ok: false, err };
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
    async graphql(query, variables, ctrl) {
        const options = this._options;
        if (!options.allow.op.includes('graphql')) {
            return {
                ok: false,
                err: new Error('GitlabSDK: graphql: operation not allowed by' +
                    ' SDK option allow.op value: "' + options.allow.op + '"'),
            };
        }
        const res = await this._rawRequest({
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: { query, variables: variables || {} },
            ctrl,
        });
        if (res instanceof Error) {
            return res;
        }
        // Errors are read BEFORE any status check: a GraphQL parse or validation
        // failure comes back as HTTP 400 carrying the standard { errors: [...] }
        // body, and the raw path represents a non-2xx as { ok: false } with no
        // err — so returning early on status would discard the server's own
        // diagnostics, which are the only useful part of that response.
        const errors = null == res.data ? undefined : res.data.errors;
        if (null != errors && Array.isArray(errors) && 0 < errors.length) {
            const first = errors[0] || {};
            const err = new Error('GitlabSDK: graphql: ' +
                (first.message || 'graphql error'));
            err.graphql = errors;
            return { ok: false, status: res.status, headers: res.headers, err, data: res.data };
        }
        return res;
    }
    // Entity access: `client.AccessRequest().list()` / `client.AccessRequest().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AccessRequest(entopts) {
        const self = this;
        return new AccessRequestEntity_1.AccessRequestEntity(self, entopts);
    }
    // Entity access: `client.AlertManagement().list()` / `client.AlertManagement().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AlertManagement(entopts) {
        const self = this;
        return new AlertManagementEntity_1.AlertManagementEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesAccessRequester().list()` / `client.ApiEntitiesAccessRequester().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesAccessRequester(entopts) {
        const self = this;
        return new ApiEntitiesAccessRequesterEntity_1.ApiEntitiesAccessRequesterEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesAppearance().list()` / `client.ApiEntitiesAppearance().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesAppearance(entopts) {
        const self = this;
        return new ApiEntitiesAppearanceEntity_1.ApiEntitiesAppearanceEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesApplication().list()` / `client.ApiEntitiesApplication().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesApplication(entopts) {
        const self = this;
        return new ApiEntitiesApplicationEntity_1.ApiEntitiesApplicationEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesApplicationStatistic().list()` / `client.ApiEntitiesApplicationStatistic().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesApplicationStatistic(entopts) {
        const self = this;
        return new ApiEntitiesApplicationStatisticEntity_1.ApiEntitiesApplicationStatisticEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesApplicationWithSecret().list()` / `client.ApiEntitiesApplicationWithSecret().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesApplicationWithSecret(entopts) {
        const self = this;
        return new ApiEntitiesApplicationWithSecretEntity_1.ApiEntitiesApplicationWithSecretEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesAvatar().list()` / `client.ApiEntitiesAvatar().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesAvatar(entopts) {
        const self = this;
        return new ApiEntitiesAvatarEntity_1.ApiEntitiesAvatarEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesAwardEmoji().list()` / `client.ApiEntitiesAwardEmoji().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesAwardEmoji(entopts) {
        const self = this;
        return new ApiEntitiesAwardEmojiEntity_1.ApiEntitiesAwardEmojiEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesBadge().list()` / `client.ApiEntitiesBadge().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesBadge(entopts) {
        const self = this;
        return new ApiEntitiesBadgeEntity_1.ApiEntitiesBadgeEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesBasicBadgeDetail().list()` / `client.ApiEntitiesBasicBadgeDetail().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesBasicBadgeDetail(entopts) {
        const self = this;
        return new ApiEntitiesBasicBadgeDetailEntity_1.ApiEntitiesBasicBadgeDetailEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesBasicGroupDetail().list()` / `client.ApiEntitiesBasicGroupDetail().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesBasicGroupDetail(entopts) {
        const self = this;
        return new ApiEntitiesBasicGroupDetailEntity_1.ApiEntitiesBasicGroupDetailEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesBasicProjectDetail().list()` / `client.ApiEntitiesBasicProjectDetail().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesBasicProjectDetail(entopts) {
        const self = this;
        return new ApiEntitiesBasicProjectDetailEntity_1.ApiEntitiesBasicProjectDetailEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesBasicRef().list()` / `client.ApiEntitiesBasicRef().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesBasicRef(entopts) {
        const self = this;
        return new ApiEntitiesBasicRefEntity_1.ApiEntitiesBasicRefEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesBasicSuccess().list()` / `client.ApiEntitiesBasicSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesBasicSuccess(entopts) {
        const self = this;
        return new ApiEntitiesBasicSuccessEntity_1.ApiEntitiesBasicSuccessEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesBatchedBackgroundMigration().list()` / `client.ApiEntitiesBatchedBackgroundMigration().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesBatchedBackgroundMigration(entopts) {
        const self = this;
        return new ApiEntitiesBatchedBackgroundMigrationEntity_1.ApiEntitiesBatchedBackgroundMigrationEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesBranch().list()` / `client.ApiEntitiesBranch().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesBranch(entopts) {
        const self = this;
        return new ApiEntitiesBranchEntity_1.ApiEntitiesBranchEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesBulkImport().list()` / `client.ApiEntitiesBulkImport().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesBulkImport(entopts) {
        const self = this;
        return new ApiEntitiesBulkImportEntity_1.ApiEntitiesBulkImportEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesBulkImportsEntityFailure().list()` / `client.ApiEntitiesBulkImportsEntityFailure().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesBulkImportsEntityFailure(entopts) {
        const self = this;
        return new ApiEntitiesBulkImportsEntityFailureEntity_1.ApiEntitiesBulkImportsEntityFailureEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesBulkImportsExportStatus().list()` / `client.ApiEntitiesBulkImportsExportStatus().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesBulkImportsExportStatus(entopts) {
        const self = this;
        return new ApiEntitiesBulkImportsExportStatusEntity_1.ApiEntitiesBulkImportsExportStatusEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesChangelog().list()` / `client.ApiEntitiesChangelog().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesChangelog(entopts) {
        const self = this;
        return new ApiEntitiesChangelogEntity_1.ApiEntitiesChangelogEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesCiBridge().list()` / `client.ApiEntitiesCiBridge().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesCiBridge(entopts) {
        const self = this;
        return new ApiEntitiesCiBridgeEntity_1.ApiEntitiesCiBridgeEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesCiCatalogResourcesVersion().list()` / `client.ApiEntitiesCiCatalogResourcesVersion().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesCiCatalogResourcesVersion(entopts) {
        const self = this;
        return new ApiEntitiesCiCatalogResourcesVersionEntity_1.ApiEntitiesCiCatalogResourcesVersionEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesCiJob().list()` / `client.ApiEntitiesCiJob().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesCiJob(entopts) {
        const self = this;
        return new ApiEntitiesCiJobEntity_1.ApiEntitiesCiJobEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesCiJobBasic().list()` / `client.ApiEntitiesCiJobBasic().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesCiJobBasic(entopts) {
        const self = this;
        return new ApiEntitiesCiJobBasicEntity_1.ApiEntitiesCiJobBasicEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesCiJobBasicWithProject().list()` / `client.ApiEntitiesCiJobBasicWithProject().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesCiJobBasicWithProject(entopts) {
        const self = this;
        return new ApiEntitiesCiJobBasicWithProjectEntity_1.ApiEntitiesCiJobBasicWithProjectEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesCiLintResult().list()` / `client.ApiEntitiesCiLintResult().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesCiLintResult(entopts) {
        const self = this;
        return new ApiEntitiesCiLintResultEntity_1.ApiEntitiesCiLintResultEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesCiPipeline().list()` / `client.ApiEntitiesCiPipeline().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesCiPipeline(entopts) {
        const self = this;
        return new ApiEntitiesCiPipelineEntity_1.ApiEntitiesCiPipelineEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesCiPipelineBasic().list()` / `client.ApiEntitiesCiPipelineBasic().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesCiPipelineBasic(entopts) {
        const self = this;
        return new ApiEntitiesCiPipelineBasicEntity_1.ApiEntitiesCiPipelineBasicEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesCiPipelineSchedule().list()` / `client.ApiEntitiesCiPipelineSchedule().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesCiPipelineSchedule(entopts) {
        const self = this;
        return new ApiEntitiesCiPipelineScheduleEntity_1.ApiEntitiesCiPipelineScheduleEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesCiPipelineScheduleDetail().list()` / `client.ApiEntitiesCiPipelineScheduleDetail().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesCiPipelineScheduleDetail(entopts) {
        const self = this;
        return new ApiEntitiesCiPipelineScheduleDetailEntity_1.ApiEntitiesCiPipelineScheduleDetailEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesCiResetTokenResult().list()` / `client.ApiEntitiesCiResetTokenResult().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesCiResetTokenResult(entopts) {
        const self = this;
        return new ApiEntitiesCiResetTokenResultEntity_1.ApiEntitiesCiResetTokenResultEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesCiResourceGroup().list()` / `client.ApiEntitiesCiResourceGroup().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesCiResourceGroup(entopts) {
        const self = this;
        return new ApiEntitiesCiResourceGroupEntity_1.ApiEntitiesCiResourceGroupEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesCiRunner().list()` / `client.ApiEntitiesCiRunner().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesCiRunner(entopts) {
        const self = this;
        return new ApiEntitiesCiRunnerEntity_1.ApiEntitiesCiRunnerEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesCiRunnerDetail().list()` / `client.ApiEntitiesCiRunnerDetail().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesCiRunnerDetail(entopts) {
        const self = this;
        return new ApiEntitiesCiRunnerDetailEntity_1.ApiEntitiesCiRunnerDetailEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesCiRunnerManager().list()` / `client.ApiEntitiesCiRunnerManager().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesCiRunnerManager(entopts) {
        const self = this;
        return new ApiEntitiesCiRunnerManagerEntity_1.ApiEntitiesCiRunnerManagerEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesCiRunnerRegistrationDetail().list()` / `client.ApiEntitiesCiRunnerRegistrationDetail().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesCiRunnerRegistrationDetail(entopts) {
        const self = this;
        return new ApiEntitiesCiRunnerRegistrationDetailEntity_1.ApiEntitiesCiRunnerRegistrationDetailEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesCiSecureFile().list()` / `client.ApiEntitiesCiSecureFile().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesCiSecureFile(entopts) {
        const self = this;
        return new ApiEntitiesCiSecureFileEntity_1.ApiEntitiesCiSecureFileEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesCiVariable().list()` / `client.ApiEntitiesCiVariable().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesCiVariable(entopts) {
        const self = this;
        return new ApiEntitiesCiVariableEntity_1.ApiEntitiesCiVariableEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesCluster().list()` / `client.ApiEntitiesCluster().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesCluster(entopts) {
        const self = this;
        return new ApiEntitiesClusterEntity_1.ApiEntitiesClusterEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesClusterGroup().list()` / `client.ApiEntitiesClusterGroup().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesClusterGroup(entopts) {
        const self = this;
        return new ApiEntitiesClusterGroupEntity_1.ApiEntitiesClusterGroupEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesClusterProject().list()` / `client.ApiEntitiesClusterProject().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesClusterProject(entopts) {
        const self = this;
        return new ApiEntitiesClusterProjectEntity_1.ApiEntitiesClusterProjectEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesClustersAgent().list()` / `client.ApiEntitiesClustersAgent().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesClustersAgent(entopts) {
        const self = this;
        return new ApiEntitiesClustersAgentEntity_1.ApiEntitiesClustersAgentEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesClustersAgentToken().list()` / `client.ApiEntitiesClustersAgentToken().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesClustersAgentToken(entopts) {
        const self = this;
        return new ApiEntitiesClustersAgentTokenEntity_1.ApiEntitiesClustersAgentTokenEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesClustersAgentTokenBasic().list()` / `client.ApiEntitiesClustersAgentTokenBasic().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesClustersAgentTokenBasic(entopts) {
        const self = this;
        return new ApiEntitiesClustersAgentTokenBasicEntity_1.ApiEntitiesClustersAgentTokenBasicEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesClustersAgentTokenWithToken().list()` / `client.ApiEntitiesClustersAgentTokenWithToken().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesClustersAgentTokenWithToken(entopts) {
        const self = this;
        return new ApiEntitiesClustersAgentTokenWithTokenEntity_1.ApiEntitiesClustersAgentTokenWithTokenEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesCommit().list()` / `client.ApiEntitiesCommit().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesCommit(entopts) {
        const self = this;
        return new ApiEntitiesCommitEntity_1.ApiEntitiesCommitEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesCommitDetail().list()` / `client.ApiEntitiesCommitDetail().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesCommitDetail(entopts) {
        const self = this;
        return new ApiEntitiesCommitDetailEntity_1.ApiEntitiesCommitDetailEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesCommitNote().list()` / `client.ApiEntitiesCommitNote().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesCommitNote(entopts) {
        const self = this;
        return new ApiEntitiesCommitNoteEntity_1.ApiEntitiesCommitNoteEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesCommitSequence().list()` / `client.ApiEntitiesCommitSequence().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesCommitSequence(entopts) {
        const self = this;
        return new ApiEntitiesCommitSequenceEntity_1.ApiEntitiesCommitSequenceEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesCommitSignature().list()` / `client.ApiEntitiesCommitSignature().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesCommitSignature(entopts) {
        const self = this;
        return new ApiEntitiesCommitSignatureEntity_1.ApiEntitiesCommitSignatureEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesCommitStatus().list()` / `client.ApiEntitiesCommitStatus().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesCommitStatus(entopts) {
        const self = this;
        return new ApiEntitiesCommitStatusEntity_1.ApiEntitiesCommitStatusEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesCompare().list()` / `client.ApiEntitiesCompare().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesCompare(entopts) {
        const self = this;
        return new ApiEntitiesCompareEntity_1.ApiEntitiesCompareEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesContainerRegistryRepository().list()` / `client.ApiEntitiesContainerRegistryRepository().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesContainerRegistryRepository(entopts) {
        const self = this;
        return new ApiEntitiesContainerRegistryRepositoryEntity_1.ApiEntitiesContainerRegistryRepositoryEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesContainerRegistryTag().list()` / `client.ApiEntitiesContainerRegistryTag().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesContainerRegistryTag(entopts) {
        const self = this;
        return new ApiEntitiesContainerRegistryTagEntity_1.ApiEntitiesContainerRegistryTagEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesContainerRegistryTagDetail().list()` / `client.ApiEntitiesContainerRegistryTagDetail().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesContainerRegistryTagDetail(entopts) {
        const self = this;
        return new ApiEntitiesContainerRegistryTagDetailEntity_1.ApiEntitiesContainerRegistryTagDetailEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesContributor().list()` / `client.ApiEntitiesContributor().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesContributor(entopts) {
        const self = this;
        return new ApiEntitiesContributorEntity_1.ApiEntitiesContributorEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesDeployKey().list()` / `client.ApiEntitiesDeployKey().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesDeployKey(entopts) {
        const self = this;
        return new ApiEntitiesDeployKeyEntity_1.ApiEntitiesDeployKeyEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesDeployKeysProject().list()` / `client.ApiEntitiesDeployKeysProject().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesDeployKeysProject(entopts) {
        const self = this;
        return new ApiEntitiesDeployKeysProjectEntity_1.ApiEntitiesDeployKeysProjectEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesDeployToken().list()` / `client.ApiEntitiesDeployToken().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesDeployToken(entopts) {
        const self = this;
        return new ApiEntitiesDeployTokenEntity_1.ApiEntitiesDeployTokenEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesDeployTokenWithToken().list()` / `client.ApiEntitiesDeployTokenWithToken().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesDeployTokenWithToken(entopts) {
        const self = this;
        return new ApiEntitiesDeployTokenWithTokenEntity_1.ApiEntitiesDeployTokenWithTokenEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesDeployment().list()` / `client.ApiEntitiesDeployment().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesDeployment(entopts) {
        const self = this;
        return new ApiEntitiesDeploymentEntity_1.ApiEntitiesDeploymentEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesDeploymentExtended().list()` / `client.ApiEntitiesDeploymentExtended().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesDeploymentExtended(entopts) {
        const self = this;
        return new ApiEntitiesDeploymentExtendedEntity_1.ApiEntitiesDeploymentExtendedEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesDeploymentsApproval().list()` / `client.ApiEntitiesDeploymentsApproval().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesDeploymentsApproval(entopts) {
        const self = this;
        return new ApiEntitiesDeploymentsApprovalEntity_1.ApiEntitiesDeploymentsApprovalEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesDictionaryTable().list()` / `client.ApiEntitiesDictionaryTable().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesDictionaryTable(entopts) {
        const self = this;
        return new ApiEntitiesDictionaryTableEntity_1.ApiEntitiesDictionaryTableEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesDiff().list()` / `client.ApiEntitiesDiff().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesDiff(entopts) {
        const self = this;
        return new ApiEntitiesDiffEntity_1.ApiEntitiesDiffEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesDiscoveredCluster().list()` / `client.ApiEntitiesDiscoveredCluster().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesDiscoveredCluster(entopts) {
        const self = this;
        return new ApiEntitiesDiscoveredClusterEntity_1.ApiEntitiesDiscoveredClusterEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesDraftNote().list()` / `client.ApiEntitiesDraftNote().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesDraftNote(entopts) {
        const self = this;
        return new ApiEntitiesDraftNoteEntity_1.ApiEntitiesDraftNoteEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesEnvironment().list()` / `client.ApiEntitiesEnvironment().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesEnvironment(entopts) {
        const self = this;
        return new ApiEntitiesEnvironmentEntity_1.ApiEntitiesEnvironmentEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesErrorTrackingClientKey().list()` / `client.ApiEntitiesErrorTrackingClientKey().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesErrorTrackingClientKey(entopts) {
        const self = this;
        return new ApiEntitiesErrorTrackingClientKeyEntity_1.ApiEntitiesErrorTrackingClientKeyEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesErrorTrackingProjectSetting().list()` / `client.ApiEntitiesErrorTrackingProjectSetting().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesErrorTrackingProjectSetting(entopts) {
        const self = this;
        return new ApiEntitiesErrorTrackingProjectSettingEntity_1.ApiEntitiesErrorTrackingProjectSettingEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesEvent().list()` / `client.ApiEntitiesEvent().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesEvent(entopts) {
        const self = this;
        return new ApiEntitiesEventEntity_1.ApiEntitiesEventEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesFeature().list()` / `client.ApiEntitiesFeature().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesFeature(entopts) {
        const self = this;
        return new ApiEntitiesFeatureEntity_1.ApiEntitiesFeatureEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesFeatureDefinition().list()` / `client.ApiEntitiesFeatureDefinition().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesFeatureDefinition(entopts) {
        const self = this;
        return new ApiEntitiesFeatureDefinitionEntity_1.ApiEntitiesFeatureDefinitionEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesFeatureFlag().list()` / `client.ApiEntitiesFeatureFlag().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesFeatureFlag(entopts) {
        const self = this;
        return new ApiEntitiesFeatureFlagEntity_1.ApiEntitiesFeatureFlagEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesFeatureFlagUserList().list()` / `client.ApiEntitiesFeatureFlagUserList().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesFeatureFlagUserList(entopts) {
        const self = this;
        return new ApiEntitiesFeatureFlagUserListEntity_1.ApiEntitiesFeatureFlagUserListEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesFreezePeriod().list()` / `client.ApiEntitiesFreezePeriod().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesFreezePeriod(entopts) {
        const self = this;
        return new ApiEntitiesFreezePeriodEntity_1.ApiEntitiesFreezePeriodEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesGitlabSubscription().list()` / `client.ApiEntitiesGitlabSubscription().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesGitlabSubscription(entopts) {
        const self = this;
        return new ApiEntitiesGitlabSubscriptionEntity_1.ApiEntitiesGitlabSubscriptionEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesGoModuleVersion().list()` / `client.ApiEntitiesGoModuleVersion().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesGoModuleVersion(entopts) {
        const self = this;
        return new ApiEntitiesGoModuleVersionEntity_1.ApiEntitiesGoModuleVersionEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesGroup().list()` / `client.ApiEntitiesGroup().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesGroup(entopts) {
        const self = this;
        return new ApiEntitiesGroupEntity_1.ApiEntitiesGroupEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesGroupDetail().list()` / `client.ApiEntitiesGroupDetail().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesGroupDetail(entopts) {
        const self = this;
        return new ApiEntitiesGroupDetailEntity_1.ApiEntitiesGroupDetailEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesHook().list()` / `client.ApiEntitiesHook().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesHook(entopts) {
        const self = this;
        return new ApiEntitiesHookEntity_1.ApiEntitiesHookEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesIntegration().list()` / `client.ApiEntitiesIntegration().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesIntegration(entopts) {
        const self = this;
        return new ApiEntitiesIntegrationEntity_1.ApiEntitiesIntegrationEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesIntegrationBasic().list()` / `client.ApiEntitiesIntegrationBasic().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesIntegrationBasic(entopts) {
        const self = this;
        return new ApiEntitiesIntegrationBasicEntity_1.ApiEntitiesIntegrationBasicEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesInvitation().list()` / `client.ApiEntitiesInvitation().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesInvitation(entopts) {
        const self = this;
        return new ApiEntitiesInvitationEntity_1.ApiEntitiesInvitationEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesIssuableTimeStat().list()` / `client.ApiEntitiesIssuableTimeStat().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesIssuableTimeStat(entopts) {
        const self = this;
        return new ApiEntitiesIssuableTimeStatEntity_1.ApiEntitiesIssuableTimeStatEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesIssue().list()` / `client.ApiEntitiesIssue().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesIssue(entopts) {
        const self = this;
        return new ApiEntitiesIssueEntity_1.ApiEntitiesIssueEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesIssueLink().list()` / `client.ApiEntitiesIssueLink().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesIssueLink(entopts) {
        const self = this;
        return new ApiEntitiesIssueLinkEntity_1.ApiEntitiesIssueLinkEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesLicense().list()` / `client.ApiEntitiesLicense().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesLicense(entopts) {
        const self = this;
        return new ApiEntitiesLicenseEntity_1.ApiEntitiesLicenseEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesMarkdown().list()` / `client.ApiEntitiesMarkdown().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesMarkdown(entopts) {
        const self = this;
        return new ApiEntitiesMarkdownEntity_1.ApiEntitiesMarkdownEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesMarkdownUploadAdmin().list()` / `client.ApiEntitiesMarkdownUploadAdmin().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesMarkdownUploadAdmin(entopts) {
        const self = this;
        return new ApiEntitiesMarkdownUploadAdminEntity_1.ApiEntitiesMarkdownUploadAdminEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesMember().list()` / `client.ApiEntitiesMember().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesMember(entopts) {
        const self = this;
        return new ApiEntitiesMemberEntity_1.ApiEntitiesMemberEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesMerge().list()` / `client.ApiEntitiesMerge().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesMerge(entopts) {
        const self = this;
        return new ApiEntitiesMergeEntity_1.ApiEntitiesMergeEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesMergeRequestApproval().list()` / `client.ApiEntitiesMergeRequestApproval().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesMergeRequestApproval(entopts) {
        const self = this;
        return new ApiEntitiesMergeRequestApprovalEntity_1.ApiEntitiesMergeRequestApprovalEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesMergeRequestBasic().list()` / `client.ApiEntitiesMergeRequestBasic().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesMergeRequestBasic(entopts) {
        const self = this;
        return new ApiEntitiesMergeRequestBasicEntity_1.ApiEntitiesMergeRequestBasicEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesMergeRequestChange().list()` / `client.ApiEntitiesMergeRequestChange().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesMergeRequestChange(entopts) {
        const self = this;
        return new ApiEntitiesMergeRequestChangeEntity_1.ApiEntitiesMergeRequestChangeEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesMergeRequestDiff().list()` / `client.ApiEntitiesMergeRequestDiff().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesMergeRequestDiff(entopts) {
        const self = this;
        return new ApiEntitiesMergeRequestDiffEntity_1.ApiEntitiesMergeRequestDiffEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesMergeRequestDiffFull().list()` / `client.ApiEntitiesMergeRequestDiffFull().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesMergeRequestDiffFull(entopts) {
        const self = this;
        return new ApiEntitiesMergeRequestDiffFullEntity_1.ApiEntitiesMergeRequestDiffFullEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesMergeRequestReviewer().list()` / `client.ApiEntitiesMergeRequestReviewer().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesMergeRequestReviewer(entopts) {
        const self = this;
        return new ApiEntitiesMergeRequestReviewerEntity_1.ApiEntitiesMergeRequestReviewerEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesMetricImage().list()` / `client.ApiEntitiesMetricImage().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesMetricImage(entopts) {
        const self = this;
        return new ApiEntitiesMetricImageEntity_1.ApiEntitiesMetricImageEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesMrNote().list()` / `client.ApiEntitiesMrNote().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesMrNote(entopts) {
        const self = this;
        return new ApiEntitiesMrNoteEntity_1.ApiEntitiesMrNoteEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesNamespace().list()` / `client.ApiEntitiesNamespace().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesNamespace(entopts) {
        const self = this;
        return new ApiEntitiesNamespaceEntity_1.ApiEntitiesNamespaceEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesNamespaceExistence().list()` / `client.ApiEntitiesNamespaceExistence().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesNamespaceExistence(entopts) {
        const self = this;
        return new ApiEntitiesNamespaceExistenceEntity_1.ApiEntitiesNamespaceExistenceEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesNamespacesStorageLimitExclusion().list()` / `client.ApiEntitiesNamespacesStorageLimitExclusion().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesNamespacesStorageLimitExclusion(entopts) {
        const self = this;
        return new ApiEntitiesNamespacesStorageLimitExclusionEntity_1.ApiEntitiesNamespacesStorageLimitExclusionEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesNpmPackage().list()` / `client.ApiEntitiesNpmPackage().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesNpmPackage(entopts) {
        const self = this;
        return new ApiEntitiesNpmPackageEntity_1.ApiEntitiesNpmPackageEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesNpmPackageTag().list()` / `client.ApiEntitiesNpmPackageTag().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesNpmPackageTag(entopts) {
        const self = this;
        return new ApiEntitiesNpmPackageTagEntity_1.ApiEntitiesNpmPackageTagEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesNugetPackagesVersion().list()` / `client.ApiEntitiesNugetPackagesVersion().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesNugetPackagesVersion(entopts) {
        const self = this;
        return new ApiEntitiesNugetPackagesVersionEntity_1.ApiEntitiesNugetPackagesVersionEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesNugetSearchResult().list()` / `client.ApiEntitiesNugetSearchResult().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesNugetSearchResult(entopts) {
        const self = this;
        return new ApiEntitiesNugetSearchResultEntity_1.ApiEntitiesNugetSearchResultEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesNugetServiceIndex().list()` / `client.ApiEntitiesNugetServiceIndex().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesNugetServiceIndex(entopts) {
        const self = this;
        return new ApiEntitiesNugetServiceIndexEntity_1.ApiEntitiesNugetServiceIndexEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesOrganizationsOrganization().list()` / `client.ApiEntitiesOrganizationsOrganization().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesOrganizationsOrganization(entopts) {
        const self = this;
        return new ApiEntitiesOrganizationsOrganizationEntity_1.ApiEntitiesOrganizationsOrganizationEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesPackage().list()` / `client.ApiEntitiesPackage().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesPackage(entopts) {
        const self = this;
        return new ApiEntitiesPackageEntity_1.ApiEntitiesPackageEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesPackageFile().list()` / `client.ApiEntitiesPackageFile().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesPackageFile(entopts) {
        const self = this;
        return new ApiEntitiesPackageFileEntity_1.ApiEntitiesPackageFileEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesPackagePipeline().list()` / `client.ApiEntitiesPackagePipeline().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesPackagePipeline(entopts) {
        const self = this;
        return new ApiEntitiesPackagePipelineEntity_1.ApiEntitiesPackagePipelineEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesPackagesConanFilesList().list()` / `client.ApiEntitiesPackagesConanFilesList().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesPackagesConanFilesList(entopts) {
        const self = this;
        return new ApiEntitiesPackagesConanFilesListEntity_1.ApiEntitiesPackagesConanFilesListEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesPackagesConanPackageManifest().list()` / `client.ApiEntitiesPackagesConanPackageManifest().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesPackagesConanPackageManifest(entopts) {
        const self = this;
        return new ApiEntitiesPackagesConanPackageManifestEntity_1.ApiEntitiesPackagesConanPackageManifestEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesPackagesConanPackageRevision().list()` / `client.ApiEntitiesPackagesConanPackageRevision().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesPackagesConanPackageRevision(entopts) {
        const self = this;
        return new ApiEntitiesPackagesConanPackageRevisionEntity_1.ApiEntitiesPackagesConanPackageRevisionEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesPackagesConanPackageSnapshot().list()` / `client.ApiEntitiesPackagesConanPackageSnapshot().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesPackagesConanPackageSnapshot(entopts) {
        const self = this;
        return new ApiEntitiesPackagesConanPackageSnapshotEntity_1.ApiEntitiesPackagesConanPackageSnapshotEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesPackagesConanRecipeManifest().list()` / `client.ApiEntitiesPackagesConanRecipeManifest().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesPackagesConanRecipeManifest(entopts) {
        const self = this;
        return new ApiEntitiesPackagesConanRecipeManifestEntity_1.ApiEntitiesPackagesConanRecipeManifestEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesPackagesConanRecipeRevision().list()` / `client.ApiEntitiesPackagesConanRecipeRevision().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesPackagesConanRecipeRevision(entopts) {
        const self = this;
        return new ApiEntitiesPackagesConanRecipeRevisionEntity_1.ApiEntitiesPackagesConanRecipeRevisionEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesPackagesConanRecipeSnapshot().list()` / `client.ApiEntitiesPackagesConanRecipeSnapshot().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesPackagesConanRecipeSnapshot(entopts) {
        const self = this;
        return new ApiEntitiesPackagesConanRecipeSnapshotEntity_1.ApiEntitiesPackagesConanRecipeSnapshotEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesPackagesConanRevision().list()` / `client.ApiEntitiesPackagesConanRevision().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesPackagesConanRevision(entopts) {
        const self = this;
        return new ApiEntitiesPackagesConanRevisionEntity_1.ApiEntitiesPackagesConanRevisionEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesPackagesConanUploadUrl().list()` / `client.ApiEntitiesPackagesConanUploadUrl().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesPackagesConanUploadUrl(entopts) {
        const self = this;
        return new ApiEntitiesPackagesConanUploadUrlEntity_1.ApiEntitiesPackagesConanUploadUrlEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesPackagesDebianDistribution().list()` / `client.ApiEntitiesPackagesDebianDistribution().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesPackagesDebianDistribution(entopts) {
        const self = this;
        return new ApiEntitiesPackagesDebianDistributionEntity_1.ApiEntitiesPackagesDebianDistributionEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesPagesDomain().list()` / `client.ApiEntitiesPagesDomain().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesPagesDomain(entopts) {
        const self = this;
        return new ApiEntitiesPagesDomainEntity_1.ApiEntitiesPagesDomainEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesPagesDomainBasic().list()` / `client.ApiEntitiesPagesDomainBasic().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesPagesDomainBasic(entopts) {
        const self = this;
        return new ApiEntitiesPagesDomainBasicEntity_1.ApiEntitiesPagesDomainBasicEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesPersonalAccessToken().list()` / `client.ApiEntitiesPersonalAccessToken().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesPersonalAccessToken(entopts) {
        const self = this;
        return new ApiEntitiesPersonalAccessTokenEntity_1.ApiEntitiesPersonalAccessTokenEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesPersonalAccessTokenWithLastUsedIp().list()` / `client.ApiEntitiesPersonalAccessTokenWithLastUsedIp().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesPersonalAccessTokenWithLastUsedIp(entopts) {
        const self = this;
        return new ApiEntitiesPersonalAccessTokenWithLastUsedIpEntity_1.ApiEntitiesPersonalAccessTokenWithLastUsedIpEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesPersonalAccessTokenWithToken().list()` / `client.ApiEntitiesPersonalAccessTokenWithToken().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesPersonalAccessTokenWithToken(entopts) {
        const self = this;
        return new ApiEntitiesPersonalAccessTokenWithTokenEntity_1.ApiEntitiesPersonalAccessTokenWithTokenEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesPersonalSnippet().list()` / `client.ApiEntitiesPersonalSnippet().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesPersonalSnippet(entopts) {
        const self = this;
        return new ApiEntitiesPersonalSnippetEntity_1.ApiEntitiesPersonalSnippetEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesPlanLimit().list()` / `client.ApiEntitiesPlanLimit().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesPlanLimit(entopts) {
        const self = this;
        return new ApiEntitiesPlanLimitEntity_1.ApiEntitiesPlanLimitEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesProject().list()` / `client.ApiEntitiesProject().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesProject(entopts) {
        const self = this;
        return new ApiEntitiesProjectEntity_1.ApiEntitiesProjectEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesProjectDailyStatistic().list()` / `client.ApiEntitiesProjectDailyStatistic().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesProjectDailyStatistic(entopts) {
        const self = this;
        return new ApiEntitiesProjectDailyStatisticEntity_1.ApiEntitiesProjectDailyStatisticEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesProjectExportStatus().list()` / `client.ApiEntitiesProjectExportStatus().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesProjectExportStatus(entopts) {
        const self = this;
        return new ApiEntitiesProjectExportStatusEntity_1.ApiEntitiesProjectExportStatusEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesProjectGroupLink().list()` / `client.ApiEntitiesProjectGroupLink().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesProjectGroupLink(entopts) {
        const self = this;
        return new ApiEntitiesProjectGroupLinkEntity_1.ApiEntitiesProjectGroupLinkEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesProjectHook().list()` / `client.ApiEntitiesProjectHook().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesProjectHook(entopts) {
        const self = this;
        return new ApiEntitiesProjectHookEntity_1.ApiEntitiesProjectHookEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesProjectImportStatus().list()` / `client.ApiEntitiesProjectImportStatus().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesProjectImportStatus(entopts) {
        const self = this;
        return new ApiEntitiesProjectImportStatusEntity_1.ApiEntitiesProjectImportStatusEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesProjectJobTokenScope().list()` / `client.ApiEntitiesProjectJobTokenScope().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesProjectJobTokenScope(entopts) {
        const self = this;
        return new ApiEntitiesProjectJobTokenScopeEntity_1.ApiEntitiesProjectJobTokenScopeEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesProjectRepositoryStorage().list()` / `client.ApiEntitiesProjectRepositoryStorage().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesProjectRepositoryStorage(entopts) {
        const self = this;
        return new ApiEntitiesProjectRepositoryStorageEntity_1.ApiEntitiesProjectRepositoryStorageEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesProjectSnippet().list()` / `client.ApiEntitiesProjectSnippet().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesProjectSnippet(entopts) {
        const self = this;
        return new ApiEntitiesProjectSnippetEntity_1.ApiEntitiesProjectSnippetEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesProjectUpload().list()` / `client.ApiEntitiesProjectUpload().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesProjectUpload(entopts) {
        const self = this;
        return new ApiEntitiesProjectUploadEntity_1.ApiEntitiesProjectUploadEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesProjectWithAccess().list()` / `client.ApiEntitiesProjectWithAccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesProjectWithAccess(entopts) {
        const self = this;
        return new ApiEntitiesProjectWithAccessEntity_1.ApiEntitiesProjectWithAccessEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesProjectsContainerRegistryProtectionRule().list()` / `client.ApiEntitiesProjectsContainerRegistryProtectionRule().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesProjectsContainerRegistryProtectionRule(entopts) {
        const self = this;
        return new ApiEntitiesProjectsContainerRegistryProtectionRuleEntity_1.ApiEntitiesProjectsContainerRegistryProtectionRuleEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesProjectsPackagesProtectionRule().list()` / `client.ApiEntitiesProjectsPackagesProtectionRule().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesProjectsPackagesProtectionRule(entopts) {
        const self = this;
        return new ApiEntitiesProjectsPackagesProtectionRuleEntity_1.ApiEntitiesProjectsPackagesProtectionRuleEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesProjectsTopic().list()` / `client.ApiEntitiesProjectsTopic().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesProjectsTopic(entopts) {
        const self = this;
        return new ApiEntitiesProjectsTopicEntity_1.ApiEntitiesProjectsTopicEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesProtectedBranch().list()` / `client.ApiEntitiesProtectedBranch().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesProtectedBranch(entopts) {
        const self = this;
        return new ApiEntitiesProtectedBranchEntity_1.ApiEntitiesProtectedBranchEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesProtectedTag().list()` / `client.ApiEntitiesProtectedTag().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesProtectedTag(entopts) {
        const self = this;
        return new ApiEntitiesProtectedTagEntity_1.ApiEntitiesProtectedTagEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesPublicGroupDetail().list()` / `client.ApiEntitiesPublicGroupDetail().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesPublicGroupDetail(entopts) {
        const self = this;
        return new ApiEntitiesPublicGroupDetailEntity_1.ApiEntitiesPublicGroupDetailEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesRelatedIssue().list()` / `client.ApiEntitiesRelatedIssue().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesRelatedIssue(entopts) {
        const self = this;
        return new ApiEntitiesRelatedIssueEntity_1.ApiEntitiesRelatedIssueEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesRelationImportTracker().list()` / `client.ApiEntitiesRelationImportTracker().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesRelationImportTracker(entopts) {
        const self = this;
        return new ApiEntitiesRelationImportTrackerEntity_1.ApiEntitiesRelationImportTrackerEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesRelease().list()` / `client.ApiEntitiesRelease().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesRelease(entopts) {
        const self = this;
        return new ApiEntitiesReleaseEntity_1.ApiEntitiesReleaseEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesReleasesLink().list()` / `client.ApiEntitiesReleasesLink().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesReleasesLink(entopts) {
        const self = this;
        return new ApiEntitiesReleasesLinkEntity_1.ApiEntitiesReleasesLinkEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesRemoteMirror().list()` / `client.ApiEntitiesRemoteMirror().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesRemoteMirror(entopts) {
        const self = this;
        return new ApiEntitiesRemoteMirrorEntity_1.ApiEntitiesRemoteMirrorEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesRepositoryHealth().list()` / `client.ApiEntitiesRepositoryHealth().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesRepositoryHealth(entopts) {
        const self = this;
        return new ApiEntitiesRepositoryHealthEntity_1.ApiEntitiesRepositoryHealthEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesResourceAccessTokenWithToken().list()` / `client.ApiEntitiesResourceAccessTokenWithToken().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesResourceAccessTokenWithToken(entopts) {
        const self = this;
        return new ApiEntitiesResourceAccessTokenWithTokenEntity_1.ApiEntitiesResourceAccessTokenWithTokenEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesResourceMilestoneEvent().list()` / `client.ApiEntitiesResourceMilestoneEvent().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesResourceMilestoneEvent(entopts) {
        const self = this;
        return new ApiEntitiesResourceMilestoneEventEntity_1.ApiEntitiesResourceMilestoneEventEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesSnippet().list()` / `client.ApiEntitiesSnippet().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesSnippet(entopts) {
        const self = this;
        return new ApiEntitiesSnippetEntity_1.ApiEntitiesSnippetEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesSshKeyWithUser().list()` / `client.ApiEntitiesSshKeyWithUser().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesSshKeyWithUser(entopts) {
        const self = this;
        return new ApiEntitiesSshKeyWithUserEntity_1.ApiEntitiesSshKeyWithUserEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesSuggestion().list()` / `client.ApiEntitiesSuggestion().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesSuggestion(entopts) {
        const self = this;
        return new ApiEntitiesSuggestionEntity_1.ApiEntitiesSuggestionEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesSystemBroadcastMessage().list()` / `client.ApiEntitiesSystemBroadcastMessage().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesSystemBroadcastMessage(entopts) {
        const self = this;
        return new ApiEntitiesSystemBroadcastMessageEntity_1.ApiEntitiesSystemBroadcastMessageEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesTag().list()` / `client.ApiEntitiesTag().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesTag(entopts) {
        const self = this;
        return new ApiEntitiesTagEntity_1.ApiEntitiesTagEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesTagSignature().list()` / `client.ApiEntitiesTagSignature().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesTagSignature(entopts) {
        const self = this;
        return new ApiEntitiesTagSignatureEntity_1.ApiEntitiesTagSignatureEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesTemplatesList().list()` / `client.ApiEntitiesTemplatesList().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesTemplatesList(entopts) {
        const self = this;
        return new ApiEntitiesTemplatesListEntity_1.ApiEntitiesTemplatesListEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesTerraformModuleVersion().list()` / `client.ApiEntitiesTerraformModuleVersion().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesTerraformModuleVersion(entopts) {
        const self = this;
        return new ApiEntitiesTerraformModuleVersionEntity_1.ApiEntitiesTerraformModuleVersionEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesTreeObject().list()` / `client.ApiEntitiesTreeObject().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesTreeObject(entopts) {
        const self = this;
        return new ApiEntitiesTreeObjectEntity_1.ApiEntitiesTreeObjectEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesTrigger().list()` / `client.ApiEntitiesTrigger().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesTrigger(entopts) {
        const self = this;
        return new ApiEntitiesTriggerEntity_1.ApiEntitiesTriggerEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesUserAgentDetail().list()` / `client.ApiEntitiesUserAgentDetail().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesUserAgentDetail(entopts) {
        const self = this;
        return new ApiEntitiesUserAgentDetailEntity_1.ApiEntitiesUserAgentDetailEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesUserCount().list()` / `client.ApiEntitiesUserCount().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesUserCount(entopts) {
        const self = this;
        return new ApiEntitiesUserCountEntity_1.ApiEntitiesUserCountEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesUserPublic().list()` / `client.ApiEntitiesUserPublic().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesUserPublic(entopts) {
        const self = this;
        return new ApiEntitiesUserPublicEntity_1.ApiEntitiesUserPublicEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesUserWithAdmin().list()` / `client.ApiEntitiesUserWithAdmin().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesUserWithAdmin(entopts) {
        const self = this;
        return new ApiEntitiesUserWithAdminEntity_1.ApiEntitiesUserWithAdminEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesWikiAttachment().list()` / `client.ApiEntitiesWikiAttachment().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesWikiAttachment(entopts) {
        const self = this;
        return new ApiEntitiesWikiAttachmentEntity_1.ApiEntitiesWikiAttachmentEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesWikiPage().list()` / `client.ApiEntitiesWikiPage().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesWikiPage(entopts) {
        const self = this;
        return new ApiEntitiesWikiPageEntity_1.ApiEntitiesWikiPageEntity(self, entopts);
    }
    // Entity access: `client.ApiEntitiesWikiPageBasic().list()` / `client.ApiEntitiesWikiPageBasic().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiEntitiesWikiPageBasic(entopts) {
        const self = this;
        return new ApiEntitiesWikiPageBasicEntity_1.ApiEntitiesWikiPageBasicEntity(self, entopts);
    }
    // Entity access: `client.Application().list()` / `client.Application().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Application(entopts) {
        const self = this;
        return new ApplicationEntity_1.ApplicationEntity(self, entopts);
    }
    // Entity access: `client.AwardEmoji().list()` / `client.AwardEmoji().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AwardEmoji(entopts) {
        const self = this;
        return new AwardEmojiEntity_1.AwardEmojiEntity(self, entopts);
    }
    // Entity access: `client.Badge().list()` / `client.Badge().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Badge(entopts) {
        const self = this;
        return new BadgeEntity_1.BadgeEntity(self, entopts);
    }
    // Entity access: `client.Branch().list()` / `client.Branch().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Branch(entopts) {
        const self = this;
        return new BranchEntity_1.BranchEntity(self, entopts);
    }
    // Entity access: `client.CargoPackage().list()` / `client.CargoPackage().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CargoPackage(entopts) {
        const self = this;
        return new CargoPackageEntity_1.CargoPackageEntity(self, entopts);
    }
    // Entity access: `client.CiVariable().list()` / `client.CiVariable().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CiVariable(entopts) {
        const self = this;
        return new CiVariableEntity_1.CiVariableEntity(self, entopts);
    }
    // Entity access: `client.Cluster().list()` / `client.Cluster().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Cluster(entopts) {
        const self = this;
        return new ClusterEntity_1.ClusterEntity(self, entopts);
    }
    // Entity access: `client.ClusterAgent().list()` / `client.ClusterAgent().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ClusterAgent(entopts) {
        const self = this;
        return new ClusterAgentEntity_1.ClusterAgentEntity(self, entopts);
    }
    // Entity access: `client.Composer().list()` / `client.Composer().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Composer(entopts) {
        const self = this;
        return new ComposerEntity_1.ComposerEntity(self, entopts);
    }
    // Entity access: `client.ComposerPackage().list()` / `client.ComposerPackage().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ComposerPackage(entopts) {
        const self = this;
        return new ComposerPackageEntity_1.ComposerPackageEntity(self, entopts);
    }
    // Entity access: `client.Conan().list()` / `client.Conan().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Conan(entopts) {
        const self = this;
        return new ConanEntity_1.ConanEntity(self, entopts);
    }
    // Entity access: `client.ConanPackage().list()` / `client.ConanPackage().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ConanPackage(entopts) {
        const self = this;
        return new ConanPackageEntity_1.ConanPackageEntity(self, entopts);
    }
    // Entity access: `client.ContainerRegistry().list()` / `client.ContainerRegistry().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ContainerRegistry(entopts) {
        const self = this;
        return new ContainerRegistryEntity_1.ContainerRegistryEntity(self, entopts);
    }
    // Entity access: `client.ContainerRegistryEvent().list()` / `client.ContainerRegistryEvent().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ContainerRegistryEvent(entopts) {
        const self = this;
        return new ContainerRegistryEventEntity_1.ContainerRegistryEventEntity(self, entopts);
    }
    // Entity access: `client.CustomAttribute().list()` / `client.CustomAttribute().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CustomAttribute(entopts) {
        const self = this;
        return new CustomAttributeEntity_1.CustomAttributeEntity(self, entopts);
    }
    // Entity access: `client.Debian().list()` / `client.Debian().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Debian(entopts) {
        const self = this;
        return new DebianEntity_1.DebianEntity(self, entopts);
    }
    // Entity access: `client.DebianDistribution().list()` / `client.DebianDistribution().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DebianDistribution(entopts) {
        const self = this;
        return new DebianDistributionEntity_1.DebianDistributionEntity(self, entopts);
    }
    // Entity access: `client.DebianPackage().list()` / `client.DebianPackage().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DebianPackage(entopts) {
        const self = this;
        return new DebianPackageEntity_1.DebianPackageEntity(self, entopts);
    }
    // Entity access: `client.DependencyProxy().list()` / `client.DependencyProxy().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DependencyProxy(entopts) {
        const self = this;
        return new DependencyProxyEntity_1.DependencyProxyEntity(self, entopts);
    }
    // Entity access: `client.DeployKey().list()` / `client.DeployKey().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DeployKey(entopts) {
        const self = this;
        return new DeployKeyEntity_1.DeployKeyEntity(self, entopts);
    }
    // Entity access: `client.DeployToken().list()` / `client.DeployToken().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DeployToken(entopts) {
        const self = this;
        return new DeployTokenEntity_1.DeployTokenEntity(self, entopts);
    }
    // Entity access: `client.Deployment().list()` / `client.Deployment().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Deployment(entopts) {
        const self = this;
        return new DeploymentEntity_1.DeploymentEntity(self, entopts);
    }
    // Entity access: `client.EeApiEntitiesApprovalState().list()` / `client.EeApiEntitiesApprovalState().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    EeApiEntitiesApprovalState(entopts) {
        const self = this;
        return new EeApiEntitiesApprovalStateEntity_1.EeApiEntitiesApprovalStateEntity(self, entopts);
    }
    // Entity access: `client.EeApiEntitiesAuditEvent().list()` / `client.EeApiEntitiesAuditEvent().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    EeApiEntitiesAuditEvent(entopts) {
        const self = this;
        return new EeApiEntitiesAuditEventEntity_1.EeApiEntitiesAuditEventEntity(self, entopts);
    }
    // Entity access: `client.EeApiEntitiesBillableMembership().list()` / `client.EeApiEntitiesBillableMembership().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    EeApiEntitiesBillableMembership(entopts) {
        const self = this;
        return new EeApiEntitiesBillableMembershipEntity_1.EeApiEntitiesBillableMembershipEntity(self, entopts);
    }
    // Entity access: `client.EeApiEntitiesGeoNodeStatus().list()` / `client.EeApiEntitiesGeoNodeStatus().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    EeApiEntitiesGeoNodeStatus(entopts) {
        const self = this;
        return new EeApiEntitiesGeoNodeStatusEntity_1.EeApiEntitiesGeoNodeStatusEntity(self, entopts);
    }
    // Entity access: `client.EeApiEntitiesGeoPipelineRef().list()` / `client.EeApiEntitiesGeoPipelineRef().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    EeApiEntitiesGeoPipelineRef(entopts) {
        const self = this;
        return new EeApiEntitiesGeoPipelineRefEntity_1.EeApiEntitiesGeoPipelineRefEntity(self, entopts);
    }
    // Entity access: `client.EeApiEntitiesIssuableMetricImage().list()` / `client.EeApiEntitiesIssuableMetricImage().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    EeApiEntitiesIssuableMetricImage(entopts) {
        const self = this;
        return new EeApiEntitiesIssuableMetricImageEntity_1.EeApiEntitiesIssuableMetricImageEntity(self, entopts);
    }
    // Entity access: `client.EeApiEntitiesMergeRequestApprovalState().list()` / `client.EeApiEntitiesMergeRequestApprovalState().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    EeApiEntitiesMergeRequestApprovalState(entopts) {
        const self = this;
        return new EeApiEntitiesMergeRequestApprovalStateEntity_1.EeApiEntitiesMergeRequestApprovalStateEntity(self, entopts);
    }
    // Entity access: `client.EeApiEntitiesSshCertificate().list()` / `client.EeApiEntitiesSshCertificate().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    EeApiEntitiesSshCertificate(entopts) {
        const self = this;
        return new EeApiEntitiesSshCertificateEntity_1.EeApiEntitiesSshCertificateEntity(self, entopts);
    }
    // Entity access: `client.Environment().list()` / `client.Environment().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Environment(entopts) {
        const self = this;
        return new EnvironmentEntity_1.EnvironmentEntity(self, entopts);
    }
    // Entity access: `client.ErrorTrackingClientKey().list()` / `client.ErrorTrackingClientKey().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ErrorTrackingClientKey(entopts) {
        const self = this;
        return new ErrorTrackingClientKeyEntity_1.ErrorTrackingClientKeyEntity(self, entopts);
    }
    // Entity access: `client.Feature().list()` / `client.Feature().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Feature(entopts) {
        const self = this;
        return new FeatureEntity_1.FeatureEntity(self, entopts);
    }
    // Entity access: `client.FeatureFlag().list()` / `client.FeatureFlag().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    FeatureFlag(entopts) {
        const self = this;
        return new FeatureFlagEntity_1.FeatureFlagEntity(self, entopts);
    }
    // Entity access: `client.FeatureFlagsUserList().list()` / `client.FeatureFlagsUserList().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    FeatureFlagsUserList(entopts) {
        const self = this;
        return new FeatureFlagsUserListEntity_1.FeatureFlagsUserListEntity(self, entopts);
    }
    // Entity access: `client.FreezePeriod().list()` / `client.FreezePeriod().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    FreezePeriod(entopts) {
        const self = this;
        return new FreezePeriodEntity_1.FreezePeriodEntity(self, entopts);
    }
    // Entity access: `client.GenericPackage().list()` / `client.GenericPackage().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    GenericPackage(entopts) {
        const self = this;
        return new GenericPackageEntity_1.GenericPackageEntity(self, entopts);
    }
    // Entity access: `client.Geo().list()` / `client.Geo().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Geo(entopts) {
        const self = this;
        return new GeoEntity_1.GeoEntity(self, entopts);
    }
    // Entity access: `client.GoProxy().list()` / `client.GoProxy().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    GoProxy(entopts) {
        const self = this;
        return new GoProxyEntity_1.GoProxyEntity(self, entopts);
    }
    // Entity access: `client.Group().list()` / `client.Group().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Group(entopts) {
        const self = this;
        return new GroupEntity_1.GroupEntity(self, entopts);
    }
    // Entity access: `client.GroupAvatar().list()` / `client.GroupAvatar().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    GroupAvatar(entopts) {
        const self = this;
        return new GroupAvatarEntity_1.GroupAvatarEntity(self, entopts);
    }
    // Entity access: `client.GroupExport().list()` / `client.GroupExport().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    GroupExport(entopts) {
        const self = this;
        return new GroupExportEntity_1.GroupExportEntity(self, entopts);
    }
    // Entity access: `client.GroupImport().list()` / `client.GroupImport().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    GroupImport(entopts) {
        const self = this;
        return new GroupImportEntity_1.GroupImportEntity(self, entopts);
    }
    // Entity access: `client.HelmPackage().list()` / `client.HelmPackage().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    HelmPackage(entopts) {
        const self = this;
        return new HelmPackageEntity_1.HelmPackageEntity(self, entopts);
    }
    // Entity access: `client.Hook().list()` / `client.Hook().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Hook(entopts) {
        const self = this;
        return new HookEntity_1.HookEntity(self, entopts);
    }
    // Entity access: `client.Import().list()` / `client.Import().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Import(entopts) {
        const self = this;
        return new ImportEntity_1.ImportEntity(self, entopts);
    }
    // Entity access: `client.Integration().list()` / `client.Integration().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Integration(entopts) {
        const self = this;
        return new IntegrationEntity_1.IntegrationEntity(self, entopts);
    }
    // Entity access: `client.Invitation().list()` / `client.Invitation().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Invitation(entopts) {
        const self = this;
        return new InvitationEntity_1.InvitationEntity(self, entopts);
    }
    // Entity access: `client.IssueLink().list()` / `client.IssueLink().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    IssueLink(entopts) {
        const self = this;
        return new IssueLinkEntity_1.IssueLinkEntity(self, entopts);
    }
    // Entity access: `client.IssuesStatistic().list()` / `client.IssuesStatistic().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    IssuesStatistic(entopts) {
        const self = this;
        return new IssuesStatisticEntity_1.IssuesStatisticEntity(self, entopts);
    }
    // Entity access: `client.Job().list()` / `client.Job().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Job(entopts) {
        const self = this;
        return new JobEntity_1.JobEntity(self, entopts);
    }
    // Entity access: `client.MavenPackage().list()` / `client.MavenPackage().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    MavenPackage(entopts) {
        const self = this;
        return new MavenPackageEntity_1.MavenPackageEntity(self, entopts);
    }
    // Entity access: `client.Member().list()` / `client.Member().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Member(entopts) {
        const self = this;
        return new MemberEntity_1.MemberEntity(self, entopts);
    }
    // Entity access: `client.MergeRequest().list()` / `client.MergeRequest().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    MergeRequest(entopts) {
        const self = this;
        return new MergeRequestEntity_1.MergeRequestEntity(self, entopts);
    }
    // Entity access: `client.Metadata().list()` / `client.Metadata().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Metadata(entopts) {
        const self = this;
        return new MetadataEntity_1.MetadataEntity(self, entopts);
    }
    // Entity access: `client.Migration().list()` / `client.Migration().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Migration(entopts) {
        const self = this;
        return new MigrationEntity_1.MigrationEntity(self, entopts);
    }
    // Entity access: `client.MlModelRegistry().list()` / `client.MlModelRegistry().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    MlModelRegistry(entopts) {
        const self = this;
        return new MlModelRegistryEntity_1.MlModelRegistryEntity(self, entopts);
    }
    // Entity access: `client.Namespace().list()` / `client.Namespace().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Namespace(entopts) {
        const self = this;
        return new NamespaceEntity_1.NamespaceEntity(self, entopts);
    }
    // Entity access: `client.Npm().list()` / `client.Npm().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Npm(entopts) {
        const self = this;
        return new NpmEntity_1.NpmEntity(self, entopts);
    }
    // Entity access: `client.NpmPackage().list()` / `client.NpmPackage().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    NpmPackage(entopts) {
        const self = this;
        return new NpmPackageEntity_1.NpmPackageEntity(self, entopts);
    }
    // Entity access: `client.Nuget().list()` / `client.Nuget().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Nuget(entopts) {
        const self = this;
        return new NugetEntity_1.NugetEntity(self, entopts);
    }
    // Entity access: `client.NugetPackage().list()` / `client.NugetPackage().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    NugetPackage(entopts) {
        const self = this;
        return new NugetPackageEntity_1.NugetPackageEntity(self, entopts);
    }
    // Entity access: `client.PackageFile().list()` / `client.PackageFile().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PackageFile(entopts) {
        const self = this;
        return new PackageFileEntity_1.PackageFileEntity(self, entopts);
    }
    // Entity access: `client.Page().list()` / `client.Page().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Page(entopts) {
        const self = this;
        return new PageEntity_1.PageEntity(self, entopts);
    }
    // Entity access: `client.Participant().list()` / `client.Participant().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Participant(entopts) {
        const self = this;
        return new ParticipantEntity_1.ParticipantEntity(self, entopts);
    }
    // Entity access: `client.PersonalAccessToken().list()` / `client.PersonalAccessToken().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PersonalAccessToken(entopts) {
        const self = this;
        return new PersonalAccessTokenEntity_1.PersonalAccessTokenEntity(self, entopts);
    }
    // Entity access: `client.Project().list()` / `client.Project().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Project(entopts) {
        const self = this;
        return new ProjectEntityClient_1.ProjectEntityClient(self, entopts);
    }
    // Entity access: `client.ProjectAvatar().list()` / `client.ProjectAvatar().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ProjectAvatar(entopts) {
        const self = this;
        return new ProjectAvatarEntity_1.ProjectAvatarEntity(self, entopts);
    }
    // Entity access: `client.ProjectEntity().list()` / `client.ProjectEntity().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ProjectEntity(entopts) {
        const self = this;
        return new ProjectEntityEntity_1.ProjectEntityEntity(self, entopts);
    }
    // Entity access: `client.ProjectExport().list()` / `client.ProjectExport().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ProjectExport(entopts) {
        const self = this;
        return new ProjectExportEntity_1.ProjectExportEntity(self, entopts);
    }
    // Entity access: `client.ProjectHook().list()` / `client.ProjectHook().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ProjectHook(entopts) {
        const self = this;
        return new ProjectHookEntity_1.ProjectHookEntity(self, entopts);
    }
    // Entity access: `client.ProjectImport().list()` / `client.ProjectImport().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ProjectImport(entopts) {
        const self = this;
        return new ProjectImportEntityClient_1.ProjectImportEntityClient(self, entopts);
    }
    // Entity access: `client.ProjectImportEntity().list()` / `client.ProjectImportEntity().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ProjectImportEntity(entopts) {
        const self = this;
        return new ProjectImportEntityEntity_1.ProjectImportEntityEntity(self, entopts);
    }
    // Entity access: `client.ProjectPackage().list()` / `client.ProjectPackage().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ProjectPackage(entopts) {
        const self = this;
        return new ProjectPackageEntity_1.ProjectPackageEntity(self, entopts);
    }
    // Entity access: `client.ProjectSnippet().list()` / `client.ProjectSnippet().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ProjectSnippet(entopts) {
        const self = this;
        return new ProjectSnippetEntity_1.ProjectSnippetEntity(self, entopts);
    }
    // Entity access: `client.ProjectsJobTokenScope().list()` / `client.ProjectsJobTokenScope().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ProjectsJobTokenScope(entopts) {
        const self = this;
        return new ProjectsJobTokenScopeEntity_1.ProjectsJobTokenScopeEntity(self, entopts);
    }
    // Entity access: `client.ProtectedTag().list()` / `client.ProtectedTag().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ProtectedTag(entopts) {
        const self = this;
        return new ProtectedTagEntity_1.ProtectedTagEntity(self, entopts);
    }
    // Entity access: `client.Pypi().list()` / `client.Pypi().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Pypi(entopts) {
        const self = this;
        return new PypiEntity_1.PypiEntity(self, entopts);
    }
    // Entity access: `client.PypiPackage().list()` / `client.PypiPackage().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PypiPackage(entopts) {
        const self = this;
        return new PypiPackageEntity_1.PypiPackageEntity(self, entopts);
    }
    // Entity access: `client.Release().list()` / `client.Release().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Release(entopts) {
        const self = this;
        return new ReleaseEntity_1.ReleaseEntity(self, entopts);
    }
    // Entity access: `client.ReleaseLink().list()` / `client.ReleaseLink().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ReleaseLink(entopts) {
        const self = this;
        return new ReleaseLinkEntity_1.ReleaseLinkEntity(self, entopts);
    }
    // Entity access: `client.RemoteMirror().list()` / `client.RemoteMirror().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    RemoteMirror(entopts) {
        const self = this;
        return new RemoteMirrorEntity_1.RemoteMirrorEntity(self, entopts);
    }
    // Entity access: `client.Rpm().list()` / `client.Rpm().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Rpm(entopts) {
        const self = this;
        return new RpmEntity_1.RpmEntity(self, entopts);
    }
    // Entity access: `client.RpmPackage().list()` / `client.RpmPackage().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    RpmPackage(entopts) {
        const self = this;
        return new RpmPackageEntity_1.RpmPackageEntity(self, entopts);
    }
    // Entity access: `client.Rubygem().list()` / `client.Rubygem().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Rubygem(entopts) {
        const self = this;
        return new RubygemEntity_1.RubygemEntity(self, entopts);
    }
    // Entity access: `client.RubygemPackage().list()` / `client.RubygemPackage().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    RubygemPackage(entopts) {
        const self = this;
        return new RubygemPackageEntity_1.RubygemPackageEntity(self, entopts);
    }
    // Entity access: `client.Runner().list()` / `client.Runner().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Runner(entopts) {
        const self = this;
        return new RunnerEntity_1.RunnerEntity(self, entopts);
    }
    // Entity access: `client.Search().list()` / `client.Search().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Search(entopts) {
        const self = this;
        return new SearchEntity_1.SearchEntity(self, entopts);
    }
    // Entity access: `client.SecureFile().list()` / `client.SecureFile().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SecureFile(entopts) {
        const self = this;
        return new SecureFileEntity_1.SecureFileEntity(self, entopts);
    }
    // Entity access: `client.Slack().list()` / `client.Slack().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Slack(entopts) {
        const self = this;
        return new SlackEntity_1.SlackEntity(self, entopts);
    }
    // Entity access: `client.Snippet().list()` / `client.Snippet().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Snippet(entopts) {
        const self = this;
        return new SnippetEntity_1.SnippetEntity(self, entopts);
    }
    // Entity access: `client.Starrer().list()` / `client.Starrer().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Starrer(entopts) {
        const self = this;
        return new StarrerEntity_1.StarrerEntity(self, entopts);
    }
    // Entity access: `client.SystemHook().list()` / `client.SystemHook().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SystemHook(entopts) {
        const self = this;
        return new SystemHookEntity_1.SystemHookEntity(self, entopts);
    }
    // Entity access: `client.Tag().list()` / `client.Tag().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Tag(entopts) {
        const self = this;
        return new TagEntity_1.TagEntity(self, entopts);
    }
    // Entity access: `client.TerraformRegistry().list()` / `client.TerraformRegistry().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TerraformRegistry(entopts) {
        const self = this;
        return new TerraformRegistryEntity_1.TerraformRegistryEntity(self, entopts);
    }
    // Entity access: `client.TerraformState().list()` / `client.TerraformState().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TerraformState(entopts) {
        const self = this;
        return new TerraformStateEntity_1.TerraformStateEntity(self, entopts);
    }
    // Entity access: `client.TestReport().list()` / `client.TestReport().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TestReport(entopts) {
        const self = this;
        return new TestReportEntity_1.TestReportEntity(self, entopts);
    }
    // Entity access: `client.TestReportSummary().list()` / `client.TestReportSummary().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TestReportSummary(entopts) {
        const self = this;
        return new TestReportSummaryEntity_1.TestReportSummaryEntity(self, entopts);
    }
    // Entity access: `client.Topic().list()` / `client.Topic().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Topic(entopts) {
        const self = this;
        return new TopicEntity_1.TopicEntity(self, entopts);
    }
    // Entity access: `client.UnleashApi().list()` / `client.UnleashApi().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    UnleashApi(entopts) {
        const self = this;
        return new UnleashApiEntity_1.UnleashApiEntity(self, entopts);
    }
    // Entity access: `client.UsageData().list()` / `client.UsageData().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    UsageData(entopts) {
        const self = this;
        return new UsageDataEntity_1.UsageDataEntity(self, entopts);
    }
    // Entity access: `client.User().list()` / `client.User().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    User(entopts) {
        const self = this;
        return new UserEntity_1.UserEntity(self, entopts);
    }
    // Entity access: `client.WebCommit().list()` / `client.WebCommit().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    WebCommit(entopts) {
        const self = this;
        return new WebCommitEntity_1.WebCommitEntity(self, entopts);
    }
    // Entity access: `client.Wiki().list()` / `client.Wiki().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Wiki(entopts) {
        const self = this;
        return new WikiEntity_1.WikiEntity(self, entopts);
    }
    static test(testoptsarg, sdkoptsarg) {
        const struct = stdutil.struct;
        const setpath = struct.setpath;
        const getdef = struct.getdef;
        const clone = struct.clone;
        const setprop = struct.setprop;
        const sdkopts = getdef(clone(sdkoptsarg), {});
        const testopts = getdef(clone(testoptsarg), {});
        setprop(testopts, 'active', true);
        setpath(sdkopts, 'feature.test', testopts);
        const testsdk = new GitlabSDK(sdkopts);
        testsdk._mode = 'test';
        return testsdk;
    }
    tester(testopts, sdkopts) {
        return GitlabSDK.test(testopts, sdkopts);
    }
    toJSON() {
        return { name: 'Gitlab' };
    }
    toString() {
        return 'Gitlab ' + this._utility.struct.jsonify(this.toJSON());
    }
    [node_util_1.inspect.custom]() {
        return this.toString();
    }
}
exports.GitlabSDK = GitlabSDK;
const SDK = GitlabSDK;
exports.SDK = SDK;
//# sourceMappingURL=GitlabSDK.js.map