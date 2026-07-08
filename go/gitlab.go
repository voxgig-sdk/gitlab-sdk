package voxgiggitlabsdk

import (
	"github.com/voxgig-sdk/gitlab-sdk/go/core"
	"github.com/voxgig-sdk/gitlab-sdk/go/entity"
	"github.com/voxgig-sdk/gitlab-sdk/go/feature"
	_ "github.com/voxgig-sdk/gitlab-sdk/go/utility"
)

// Type aliases preserve external API.
type GitlabSDK = core.GitlabSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type GitlabEntity = core.GitlabEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type GitlabError = core.GitlabError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewAccessRequestEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewAccessRequestEntity(client, entopts)
	}
	core.NewAlertManagementEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewAlertManagementEntity(client, entopts)
	}
	core.NewApiEntitiesAccessRequesterEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesAccessRequesterEntity(client, entopts)
	}
	core.NewApiEntitiesAppearanceEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesAppearanceEntity(client, entopts)
	}
	core.NewApiEntitiesApplicationEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesApplicationEntity(client, entopts)
	}
	core.NewApiEntitiesApplicationStatisticEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesApplicationStatisticEntity(client, entopts)
	}
	core.NewApiEntitiesApplicationWithSecretEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesApplicationWithSecretEntity(client, entopts)
	}
	core.NewApiEntitiesAvatarEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesAvatarEntity(client, entopts)
	}
	core.NewApiEntitiesAwardEmojiEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesAwardEmojiEntity(client, entopts)
	}
	core.NewApiEntitiesBadgeEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesBadgeEntity(client, entopts)
	}
	core.NewApiEntitiesBasicBadgeDetailEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesBasicBadgeDetailEntity(client, entopts)
	}
	core.NewApiEntitiesBasicGroupDetailEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesBasicGroupDetailEntity(client, entopts)
	}
	core.NewApiEntitiesBasicProjectDetailEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesBasicProjectDetailEntity(client, entopts)
	}
	core.NewApiEntitiesBasicRefEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesBasicRefEntity(client, entopts)
	}
	core.NewApiEntitiesBasicSuccessEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesBasicSuccessEntity(client, entopts)
	}
	core.NewApiEntitiesBatchedBackgroundMigrationEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesBatchedBackgroundMigrationEntity(client, entopts)
	}
	core.NewApiEntitiesBranchEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesBranchEntity(client, entopts)
	}
	core.NewApiEntitiesBulkImportEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesBulkImportEntity(client, entopts)
	}
	core.NewApiEntitiesBulkImportsEntityFailureEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesBulkImportsEntityFailureEntity(client, entopts)
	}
	core.NewApiEntitiesBulkImportsExportStatusEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesBulkImportsExportStatusEntity(client, entopts)
	}
	core.NewApiEntitiesChangelogEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesChangelogEntity(client, entopts)
	}
	core.NewApiEntitiesCiBridgeEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesCiBridgeEntity(client, entopts)
	}
	core.NewApiEntitiesCiCatalogResourcesVersionEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesCiCatalogResourcesVersionEntity(client, entopts)
	}
	core.NewApiEntitiesCiJobEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesCiJobEntity(client, entopts)
	}
	core.NewApiEntitiesCiJobBasicEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesCiJobBasicEntity(client, entopts)
	}
	core.NewApiEntitiesCiJobBasicWithProjectEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesCiJobBasicWithProjectEntity(client, entopts)
	}
	core.NewApiEntitiesCiLintResultEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesCiLintResultEntity(client, entopts)
	}
	core.NewApiEntitiesCiPipelineEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesCiPipelineEntity(client, entopts)
	}
	core.NewApiEntitiesCiPipelineBasicEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesCiPipelineBasicEntity(client, entopts)
	}
	core.NewApiEntitiesCiPipelineScheduleEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesCiPipelineScheduleEntity(client, entopts)
	}
	core.NewApiEntitiesCiPipelineScheduleDetailEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesCiPipelineScheduleDetailEntity(client, entopts)
	}
	core.NewApiEntitiesCiResetTokenResultEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesCiResetTokenResultEntity(client, entopts)
	}
	core.NewApiEntitiesCiResourceGroupEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesCiResourceGroupEntity(client, entopts)
	}
	core.NewApiEntitiesCiRunnerEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesCiRunnerEntity(client, entopts)
	}
	core.NewApiEntitiesCiRunnerDetailEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesCiRunnerDetailEntity(client, entopts)
	}
	core.NewApiEntitiesCiRunnerManagerEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesCiRunnerManagerEntity(client, entopts)
	}
	core.NewApiEntitiesCiRunnerRegistrationDetailEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesCiRunnerRegistrationDetailEntity(client, entopts)
	}
	core.NewApiEntitiesCiSecureFileEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesCiSecureFileEntity(client, entopts)
	}
	core.NewApiEntitiesCiVariableEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesCiVariableEntity(client, entopts)
	}
	core.NewApiEntitiesClusterEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesClusterEntity(client, entopts)
	}
	core.NewApiEntitiesClusterGroupEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesClusterGroupEntity(client, entopts)
	}
	core.NewApiEntitiesClusterProjectEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesClusterProjectEntity(client, entopts)
	}
	core.NewApiEntitiesClustersAgentEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesClustersAgentEntity(client, entopts)
	}
	core.NewApiEntitiesClustersAgentTokenEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesClustersAgentTokenEntity(client, entopts)
	}
	core.NewApiEntitiesClustersAgentTokenBasicEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesClustersAgentTokenBasicEntity(client, entopts)
	}
	core.NewApiEntitiesClustersAgentTokenWithTokenEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesClustersAgentTokenWithTokenEntity(client, entopts)
	}
	core.NewApiEntitiesCommitEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesCommitEntity(client, entopts)
	}
	core.NewApiEntitiesCommitDetailEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesCommitDetailEntity(client, entopts)
	}
	core.NewApiEntitiesCommitNoteEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesCommitNoteEntity(client, entopts)
	}
	core.NewApiEntitiesCommitSequenceEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesCommitSequenceEntity(client, entopts)
	}
	core.NewApiEntitiesCommitSignatureEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesCommitSignatureEntity(client, entopts)
	}
	core.NewApiEntitiesCommitStatusEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesCommitStatusEntity(client, entopts)
	}
	core.NewApiEntitiesCompareEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesCompareEntity(client, entopts)
	}
	core.NewApiEntitiesContainerRegistryRepositoryEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesContainerRegistryRepositoryEntity(client, entopts)
	}
	core.NewApiEntitiesContainerRegistryTagEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesContainerRegistryTagEntity(client, entopts)
	}
	core.NewApiEntitiesContainerRegistryTagDetailEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesContainerRegistryTagDetailEntity(client, entopts)
	}
	core.NewApiEntitiesContributorEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesContributorEntity(client, entopts)
	}
	core.NewApiEntitiesDeployKeyEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesDeployKeyEntity(client, entopts)
	}
	core.NewApiEntitiesDeployKeysProjectEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesDeployKeysProjectEntity(client, entopts)
	}
	core.NewApiEntitiesDeployTokenEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesDeployTokenEntity(client, entopts)
	}
	core.NewApiEntitiesDeployTokenWithTokenEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesDeployTokenWithTokenEntity(client, entopts)
	}
	core.NewApiEntitiesDeploymentEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesDeploymentEntity(client, entopts)
	}
	core.NewApiEntitiesDeploymentExtendedEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesDeploymentExtendedEntity(client, entopts)
	}
	core.NewApiEntitiesDeploymentsApprovalEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesDeploymentsApprovalEntity(client, entopts)
	}
	core.NewApiEntitiesDictionaryTableEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesDictionaryTableEntity(client, entopts)
	}
	core.NewApiEntitiesDiffEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesDiffEntity(client, entopts)
	}
	core.NewApiEntitiesDiscoveredClusterEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesDiscoveredClusterEntity(client, entopts)
	}
	core.NewApiEntitiesDraftNoteEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesDraftNoteEntity(client, entopts)
	}
	core.NewApiEntitiesEnvironmentEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesEnvironmentEntity(client, entopts)
	}
	core.NewApiEntitiesErrorTrackingClientKeyEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesErrorTrackingClientKeyEntity(client, entopts)
	}
	core.NewApiEntitiesErrorTrackingProjectSettingEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesErrorTrackingProjectSettingEntity(client, entopts)
	}
	core.NewApiEntitiesEventEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesEventEntity(client, entopts)
	}
	core.NewApiEntitiesFeatureEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesFeatureEntity(client, entopts)
	}
	core.NewApiEntitiesFeatureDefinitionEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesFeatureDefinitionEntity(client, entopts)
	}
	core.NewApiEntitiesFeatureFlagEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesFeatureFlagEntity(client, entopts)
	}
	core.NewApiEntitiesFeatureFlagUserListEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesFeatureFlagUserListEntity(client, entopts)
	}
	core.NewApiEntitiesFreezePeriodEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesFreezePeriodEntity(client, entopts)
	}
	core.NewApiEntitiesGitlabSubscriptionEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesGitlabSubscriptionEntity(client, entopts)
	}
	core.NewApiEntitiesGoModuleVersionEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesGoModuleVersionEntity(client, entopts)
	}
	core.NewApiEntitiesGroupEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesGroupEntity(client, entopts)
	}
	core.NewApiEntitiesGroupDetailEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesGroupDetailEntity(client, entopts)
	}
	core.NewApiEntitiesHookEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesHookEntity(client, entopts)
	}
	core.NewApiEntitiesIntegrationEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesIntegrationEntity(client, entopts)
	}
	core.NewApiEntitiesIntegrationBasicEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesIntegrationBasicEntity(client, entopts)
	}
	core.NewApiEntitiesInvitationEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesInvitationEntity(client, entopts)
	}
	core.NewApiEntitiesIssuableTimeStatEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesIssuableTimeStatEntity(client, entopts)
	}
	core.NewApiEntitiesIssueEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesIssueEntity(client, entopts)
	}
	core.NewApiEntitiesIssueLinkEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesIssueLinkEntity(client, entopts)
	}
	core.NewApiEntitiesLicenseEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesLicenseEntity(client, entopts)
	}
	core.NewApiEntitiesMarkdownEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesMarkdownEntity(client, entopts)
	}
	core.NewApiEntitiesMarkdownUploadAdminEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesMarkdownUploadAdminEntity(client, entopts)
	}
	core.NewApiEntitiesMemberEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesMemberEntity(client, entopts)
	}
	core.NewApiEntitiesMergeEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesMergeEntity(client, entopts)
	}
	core.NewApiEntitiesMergeRequestApprovalEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesMergeRequestApprovalEntity(client, entopts)
	}
	core.NewApiEntitiesMergeRequestBasicEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesMergeRequestBasicEntity(client, entopts)
	}
	core.NewApiEntitiesMergeRequestChangeEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesMergeRequestChangeEntity(client, entopts)
	}
	core.NewApiEntitiesMergeRequestDiffEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesMergeRequestDiffEntity(client, entopts)
	}
	core.NewApiEntitiesMergeRequestDiffFullEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesMergeRequestDiffFullEntity(client, entopts)
	}
	core.NewApiEntitiesMergeRequestReviewerEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesMergeRequestReviewerEntity(client, entopts)
	}
	core.NewApiEntitiesMetricImageEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesMetricImageEntity(client, entopts)
	}
	core.NewApiEntitiesMrNoteEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesMrNoteEntity(client, entopts)
	}
	core.NewApiEntitiesNamespaceEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesNamespaceEntity(client, entopts)
	}
	core.NewApiEntitiesNamespaceExistenceEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesNamespaceExistenceEntity(client, entopts)
	}
	core.NewApiEntitiesNamespacesStorageLimitExclusionEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesNamespacesStorageLimitExclusionEntity(client, entopts)
	}
	core.NewApiEntitiesNpmPackageEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesNpmPackageEntity(client, entopts)
	}
	core.NewApiEntitiesNpmPackageTagEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesNpmPackageTagEntity(client, entopts)
	}
	core.NewApiEntitiesNugetPackagesVersionEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesNugetPackagesVersionEntity(client, entopts)
	}
	core.NewApiEntitiesNugetSearchResultEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesNugetSearchResultEntity(client, entopts)
	}
	core.NewApiEntitiesNugetServiceIndexEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesNugetServiceIndexEntity(client, entopts)
	}
	core.NewApiEntitiesOrganizationsOrganizationEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesOrganizationsOrganizationEntity(client, entopts)
	}
	core.NewApiEntitiesPackageEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesPackageEntity(client, entopts)
	}
	core.NewApiEntitiesPackageFileEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesPackageFileEntity(client, entopts)
	}
	core.NewApiEntitiesPackagePipelineEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesPackagePipelineEntity(client, entopts)
	}
	core.NewApiEntitiesPackagesConanFilesListEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesPackagesConanFilesListEntity(client, entopts)
	}
	core.NewApiEntitiesPackagesConanPackageManifestEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesPackagesConanPackageManifestEntity(client, entopts)
	}
	core.NewApiEntitiesPackagesConanPackageRevisionEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesPackagesConanPackageRevisionEntity(client, entopts)
	}
	core.NewApiEntitiesPackagesConanPackageSnapshotEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesPackagesConanPackageSnapshotEntity(client, entopts)
	}
	core.NewApiEntitiesPackagesConanRecipeManifestEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesPackagesConanRecipeManifestEntity(client, entopts)
	}
	core.NewApiEntitiesPackagesConanRecipeRevisionEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesPackagesConanRecipeRevisionEntity(client, entopts)
	}
	core.NewApiEntitiesPackagesConanRecipeSnapshotEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesPackagesConanRecipeSnapshotEntity(client, entopts)
	}
	core.NewApiEntitiesPackagesConanRevisionEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesPackagesConanRevisionEntity(client, entopts)
	}
	core.NewApiEntitiesPackagesConanUploadUrlEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesPackagesConanUploadUrlEntity(client, entopts)
	}
	core.NewApiEntitiesPackagesDebianDistributionEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesPackagesDebianDistributionEntity(client, entopts)
	}
	core.NewApiEntitiesPagesDomainEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesPagesDomainEntity(client, entopts)
	}
	core.NewApiEntitiesPagesDomainBasicEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesPagesDomainBasicEntity(client, entopts)
	}
	core.NewApiEntitiesPersonalAccessTokenEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesPersonalAccessTokenEntity(client, entopts)
	}
	core.NewApiEntitiesPersonalAccessTokenWithLastUsedIpEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesPersonalAccessTokenWithLastUsedIpEntity(client, entopts)
	}
	core.NewApiEntitiesPersonalAccessTokenWithTokenEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesPersonalAccessTokenWithTokenEntity(client, entopts)
	}
	core.NewApiEntitiesPersonalSnippetEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesPersonalSnippetEntity(client, entopts)
	}
	core.NewApiEntitiesPlanLimitEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesPlanLimitEntity(client, entopts)
	}
	core.NewApiEntitiesProjectEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesProjectEntity(client, entopts)
	}
	core.NewApiEntitiesProjectDailyStatisticEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesProjectDailyStatisticEntity(client, entopts)
	}
	core.NewApiEntitiesProjectExportStatusEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesProjectExportStatusEntity(client, entopts)
	}
	core.NewApiEntitiesProjectGroupLinkEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesProjectGroupLinkEntity(client, entopts)
	}
	core.NewApiEntitiesProjectHookEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesProjectHookEntity(client, entopts)
	}
	core.NewApiEntitiesProjectImportStatusEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesProjectImportStatusEntity(client, entopts)
	}
	core.NewApiEntitiesProjectJobTokenScopeEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesProjectJobTokenScopeEntity(client, entopts)
	}
	core.NewApiEntitiesProjectRepositoryStorageEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesProjectRepositoryStorageEntity(client, entopts)
	}
	core.NewApiEntitiesProjectSnippetEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesProjectSnippetEntity(client, entopts)
	}
	core.NewApiEntitiesProjectUploadEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesProjectUploadEntity(client, entopts)
	}
	core.NewApiEntitiesProjectWithAccessEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesProjectWithAccessEntity(client, entopts)
	}
	core.NewApiEntitiesProjectsContainerRegistryProtectionRuleEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesProjectsContainerRegistryProtectionRuleEntity(client, entopts)
	}
	core.NewApiEntitiesProjectsPackagesProtectionRuleEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesProjectsPackagesProtectionRuleEntity(client, entopts)
	}
	core.NewApiEntitiesProjectsTopicEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesProjectsTopicEntity(client, entopts)
	}
	core.NewApiEntitiesProtectedBranchEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesProtectedBranchEntity(client, entopts)
	}
	core.NewApiEntitiesProtectedTagEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesProtectedTagEntity(client, entopts)
	}
	core.NewApiEntitiesPublicGroupDetailEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesPublicGroupDetailEntity(client, entopts)
	}
	core.NewApiEntitiesRelatedIssueEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesRelatedIssueEntity(client, entopts)
	}
	core.NewApiEntitiesRelationImportTrackerEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesRelationImportTrackerEntity(client, entopts)
	}
	core.NewApiEntitiesReleaseEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesReleaseEntity(client, entopts)
	}
	core.NewApiEntitiesReleasesLinkEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesReleasesLinkEntity(client, entopts)
	}
	core.NewApiEntitiesRemoteMirrorEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesRemoteMirrorEntity(client, entopts)
	}
	core.NewApiEntitiesRepositoryHealthEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesRepositoryHealthEntity(client, entopts)
	}
	core.NewApiEntitiesResourceAccessTokenWithTokenEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesResourceAccessTokenWithTokenEntity(client, entopts)
	}
	core.NewApiEntitiesResourceMilestoneEventEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesResourceMilestoneEventEntity(client, entopts)
	}
	core.NewApiEntitiesSnippetEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesSnippetEntity(client, entopts)
	}
	core.NewApiEntitiesSshKeyWithUserEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesSshKeyWithUserEntity(client, entopts)
	}
	core.NewApiEntitiesSuggestionEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesSuggestionEntity(client, entopts)
	}
	core.NewApiEntitiesSystemBroadcastMessageEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesSystemBroadcastMessageEntity(client, entopts)
	}
	core.NewApiEntitiesTagEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesTagEntity(client, entopts)
	}
	core.NewApiEntitiesTagSignatureEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesTagSignatureEntity(client, entopts)
	}
	core.NewApiEntitiesTemplatesListEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesTemplatesListEntity(client, entopts)
	}
	core.NewApiEntitiesTerraformModuleVersionEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesTerraformModuleVersionEntity(client, entopts)
	}
	core.NewApiEntitiesTreeObjectEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesTreeObjectEntity(client, entopts)
	}
	core.NewApiEntitiesTriggerEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesTriggerEntity(client, entopts)
	}
	core.NewApiEntitiesUserAgentDetailEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesUserAgentDetailEntity(client, entopts)
	}
	core.NewApiEntitiesUserCountEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesUserCountEntity(client, entopts)
	}
	core.NewApiEntitiesUserPublicEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesUserPublicEntity(client, entopts)
	}
	core.NewApiEntitiesUserWithAdminEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesUserWithAdminEntity(client, entopts)
	}
	core.NewApiEntitiesWikiAttachmentEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesWikiAttachmentEntity(client, entopts)
	}
	core.NewApiEntitiesWikiPageEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesWikiPageEntity(client, entopts)
	}
	core.NewApiEntitiesWikiPageBasicEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesWikiPageBasicEntity(client, entopts)
	}
	core.NewApplicationEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApplicationEntity(client, entopts)
	}
	core.NewAwardEmojiEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewAwardEmojiEntity(client, entopts)
	}
	core.NewBadgeEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewBadgeEntity(client, entopts)
	}
	core.NewBranchEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewBranchEntity(client, entopts)
	}
	core.NewCargoPackageEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewCargoPackageEntity(client, entopts)
	}
	core.NewCiVariableEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewCiVariableEntity(client, entopts)
	}
	core.NewClusterEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewClusterEntity(client, entopts)
	}
	core.NewClusterAgentEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewClusterAgentEntity(client, entopts)
	}
	core.NewComposerEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewComposerEntity(client, entopts)
	}
	core.NewComposerPackageEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewComposerPackageEntity(client, entopts)
	}
	core.NewConanEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewConanEntity(client, entopts)
	}
	core.NewConanPackageEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewConanPackageEntity(client, entopts)
	}
	core.NewContainerRegistryEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewContainerRegistryEntity(client, entopts)
	}
	core.NewContainerRegistryEventEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewContainerRegistryEventEntity(client, entopts)
	}
	core.NewCustomAttributeEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewCustomAttributeEntity(client, entopts)
	}
	core.NewDebianEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewDebianEntity(client, entopts)
	}
	core.NewDebianDistributionEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewDebianDistributionEntity(client, entopts)
	}
	core.NewDebianPackageEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewDebianPackageEntity(client, entopts)
	}
	core.NewDependencyProxyEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewDependencyProxyEntity(client, entopts)
	}
	core.NewDeployKeyEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewDeployKeyEntity(client, entopts)
	}
	core.NewDeployTokenEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewDeployTokenEntity(client, entopts)
	}
	core.NewDeploymentEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewDeploymentEntity(client, entopts)
	}
	core.NewEeApiEntitiesApprovalStateEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewEeApiEntitiesApprovalStateEntity(client, entopts)
	}
	core.NewEeApiEntitiesAuditEventEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewEeApiEntitiesAuditEventEntity(client, entopts)
	}
	core.NewEeApiEntitiesBillableMembershipEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewEeApiEntitiesBillableMembershipEntity(client, entopts)
	}
	core.NewEeApiEntitiesGeoNodeStatusEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewEeApiEntitiesGeoNodeStatusEntity(client, entopts)
	}
	core.NewEeApiEntitiesGeoPipelineRefEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewEeApiEntitiesGeoPipelineRefEntity(client, entopts)
	}
	core.NewEeApiEntitiesIssuableMetricImageEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewEeApiEntitiesIssuableMetricImageEntity(client, entopts)
	}
	core.NewEeApiEntitiesMergeRequestApprovalStateEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewEeApiEntitiesMergeRequestApprovalStateEntity(client, entopts)
	}
	core.NewEeApiEntitiesSshCertificateEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewEeApiEntitiesSshCertificateEntity(client, entopts)
	}
	core.NewEnvironmentEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewEnvironmentEntity(client, entopts)
	}
	core.NewErrorTrackingClientKeyEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewErrorTrackingClientKeyEntity(client, entopts)
	}
	core.NewFeatureEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewFeatureEntity(client, entopts)
	}
	core.NewFeatureFlagEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewFeatureFlagEntity(client, entopts)
	}
	core.NewFeatureFlagsUserListEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewFeatureFlagsUserListEntity(client, entopts)
	}
	core.NewFreezePeriodEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewFreezePeriodEntity(client, entopts)
	}
	core.NewGenericPackageEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewGenericPackageEntity(client, entopts)
	}
	core.NewGeoEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewGeoEntity(client, entopts)
	}
	core.NewGoProxyEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewGoProxyEntity(client, entopts)
	}
	core.NewGroupEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewGroupEntity(client, entopts)
	}
	core.NewGroupAvatarEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewGroupAvatarEntity(client, entopts)
	}
	core.NewGroupExportEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewGroupExportEntity(client, entopts)
	}
	core.NewGroupImportEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewGroupImportEntity(client, entopts)
	}
	core.NewHelmPackageEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewHelmPackageEntity(client, entopts)
	}
	core.NewHookEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewHookEntity(client, entopts)
	}
	core.NewImportEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewImportEntity(client, entopts)
	}
	core.NewIntegrationEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewIntegrationEntity(client, entopts)
	}
	core.NewInvitationEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewInvitationEntity(client, entopts)
	}
	core.NewIssueLinkEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewIssueLinkEntity(client, entopts)
	}
	core.NewIssuesStatisticEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewIssuesStatisticEntity(client, entopts)
	}
	core.NewJobEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewJobEntity(client, entopts)
	}
	core.NewMavenPackageEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewMavenPackageEntity(client, entopts)
	}
	core.NewMemberEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewMemberEntity(client, entopts)
	}
	core.NewMergeRequestEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewMergeRequestEntity(client, entopts)
	}
	core.NewMetadataEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewMetadataEntity(client, entopts)
	}
	core.NewMigrationEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewMigrationEntity(client, entopts)
	}
	core.NewMlModelRegistryEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewMlModelRegistryEntity(client, entopts)
	}
	core.NewNamespaceEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewNamespaceEntity(client, entopts)
	}
	core.NewNpmEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewNpmEntity(client, entopts)
	}
	core.NewNpmPackageEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewNpmPackageEntity(client, entopts)
	}
	core.NewNugetEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewNugetEntity(client, entopts)
	}
	core.NewNugetPackageEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewNugetPackageEntity(client, entopts)
	}
	core.NewPackageFileEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewPackageFileEntity(client, entopts)
	}
	core.NewPageEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewPageEntity(client, entopts)
	}
	core.NewParticipantEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewParticipantEntity(client, entopts)
	}
	core.NewPersonalAccessTokenEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewPersonalAccessTokenEntity(client, entopts)
	}
	core.NewProjectEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewProjectEntity(client, entopts)
	}
	core.NewProjectAvatarEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewProjectAvatarEntity(client, entopts)
	}
	core.NewProjectEntityEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewProjectEntityEntity(client, entopts)
	}
	core.NewProjectExportEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewProjectExportEntity(client, entopts)
	}
	core.NewProjectHookEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewProjectHookEntity(client, entopts)
	}
	core.NewProjectImportEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewProjectImportEntity(client, entopts)
	}
	core.NewProjectImportEntityEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewProjectImportEntityEntity(client, entopts)
	}
	core.NewProjectPackageEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewProjectPackageEntity(client, entopts)
	}
	core.NewProjectSnippetEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewProjectSnippetEntity(client, entopts)
	}
	core.NewProjectsJobTokenScopeEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewProjectsJobTokenScopeEntity(client, entopts)
	}
	core.NewProtectedTagEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewProtectedTagEntity(client, entopts)
	}
	core.NewPypiEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewPypiEntity(client, entopts)
	}
	core.NewPypiPackageEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewPypiPackageEntity(client, entopts)
	}
	core.NewReleaseEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewReleaseEntity(client, entopts)
	}
	core.NewReleaseLinkEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewReleaseLinkEntity(client, entopts)
	}
	core.NewRemoteMirrorEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewRemoteMirrorEntity(client, entopts)
	}
	core.NewRpmEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewRpmEntity(client, entopts)
	}
	core.NewRpmPackageEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewRpmPackageEntity(client, entopts)
	}
	core.NewRubygemEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewRubygemEntity(client, entopts)
	}
	core.NewRubygemPackageEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewRubygemPackageEntity(client, entopts)
	}
	core.NewRunnerEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewRunnerEntity(client, entopts)
	}
	core.NewSearchEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewSearchEntity(client, entopts)
	}
	core.NewSecureFileEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewSecureFileEntity(client, entopts)
	}
	core.NewSlackEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewSlackEntity(client, entopts)
	}
	core.NewSnippetEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewSnippetEntity(client, entopts)
	}
	core.NewStarrerEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewStarrerEntity(client, entopts)
	}
	core.NewSystemHookEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewSystemHookEntity(client, entopts)
	}
	core.NewTagEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewTagEntity(client, entopts)
	}
	core.NewTerraformRegistryEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewTerraformRegistryEntity(client, entopts)
	}
	core.NewTerraformStateEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewTerraformStateEntity(client, entopts)
	}
	core.NewTestReportEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewTestReportEntity(client, entopts)
	}
	core.NewTestReportSummaryEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewTestReportSummaryEntity(client, entopts)
	}
	core.NewTopicEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewTopicEntity(client, entopts)
	}
	core.NewUnleashApiEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewUnleashApiEntity(client, entopts)
	}
	core.NewUsageDataEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewUsageDataEntity(client, entopts)
	}
	core.NewUserEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewUserEntity(client, entopts)
	}
	core.NewWebCommitEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewWebCommitEntity(client, entopts)
	}
	core.NewWikiEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewWikiEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewGitlabSDK = core.NewGitlabSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewGitlabSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *GitlabSDK  { return NewGitlabSDK(nil) }
func Test() *GitlabSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
