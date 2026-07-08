package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewAccessRequestEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewAlertManagementEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesAccessRequesterEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesAppearanceEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesApplicationEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesApplicationStatisticEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesApplicationWithSecretEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesAvatarEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesAwardEmojiEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesBadgeEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesBasicBadgeDetailEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesBasicGroupDetailEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesBasicProjectDetailEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesBasicRefEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesBasicSuccessEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesBatchedBackgroundMigrationEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesBranchEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesBulkImportEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesBulkImportsEntityFailureEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesBulkImportsExportStatusEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesChangelogEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesCiBridgeEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesCiCatalogResourcesVersionEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesCiJobEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesCiJobBasicEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesCiJobBasicWithProjectEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesCiLintResultEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesCiPipelineEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesCiPipelineBasicEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesCiPipelineScheduleEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesCiPipelineScheduleDetailEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesCiResetTokenResultEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesCiResourceGroupEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesCiRunnerEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesCiRunnerDetailEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesCiRunnerManagerEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesCiRunnerRegistrationDetailEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesCiSecureFileEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesCiVariableEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesClusterEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesClusterGroupEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesClusterProjectEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesClustersAgentEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesClustersAgentTokenEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesClustersAgentTokenBasicEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesClustersAgentTokenWithTokenEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesCommitEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesCommitDetailEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesCommitNoteEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesCommitSequenceEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesCommitSignatureEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesCommitStatusEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesCompareEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesContainerRegistryRepositoryEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesContainerRegistryTagEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesContainerRegistryTagDetailEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesContributorEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesDeployKeyEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesDeployKeysProjectEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesDeployTokenEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesDeployTokenWithTokenEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesDeploymentEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesDeploymentExtendedEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesDeploymentsApprovalEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesDictionaryTableEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesDiffEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesDiscoveredClusterEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesDraftNoteEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesEnvironmentEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesErrorTrackingClientKeyEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesErrorTrackingProjectSettingEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesEventEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesFeatureEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesFeatureDefinitionEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesFeatureFlagEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesFeatureFlagUserListEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesFreezePeriodEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesGitlabSubscriptionEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesGoModuleVersionEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesGroupEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesGroupDetailEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesHookEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesIntegrationEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesIntegrationBasicEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesInvitationEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesIssuableTimeStatEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesIssueEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesIssueLinkEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesLicenseEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesMarkdownEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesMarkdownUploadAdminEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesMemberEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesMergeEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesMergeRequestApprovalEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesMergeRequestBasicEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesMergeRequestChangeEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesMergeRequestDiffEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesMergeRequestDiffFullEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesMergeRequestReviewerEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesMetricImageEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesMrNoteEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesNamespaceEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesNamespaceExistenceEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesNamespacesStorageLimitExclusionEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesNpmPackageEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesNpmPackageTagEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesNugetPackagesVersionEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesNugetSearchResultEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesNugetServiceIndexEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesOrganizationsOrganizationEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesPackageEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesPackageFileEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesPackagePipelineEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesPackagesConanFilesListEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesPackagesConanPackageManifestEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesPackagesConanPackageRevisionEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesPackagesConanPackageSnapshotEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesPackagesConanRecipeManifestEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesPackagesConanRecipeRevisionEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesPackagesConanRecipeSnapshotEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesPackagesConanRevisionEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesPackagesConanUploadUrlEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesPackagesDebianDistributionEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesPagesDomainEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesPagesDomainBasicEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesPersonalAccessTokenEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesPersonalAccessTokenWithLastUsedIpEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesPersonalAccessTokenWithTokenEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesPersonalSnippetEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesPlanLimitEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesProjectEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesProjectDailyStatisticEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesProjectExportStatusEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesProjectGroupLinkEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesProjectHookEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesProjectImportStatusEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesProjectJobTokenScopeEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesProjectRepositoryStorageEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesProjectSnippetEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesProjectUploadEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesProjectWithAccessEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesProjectsContainerRegistryProtectionRuleEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesProjectsPackagesProtectionRuleEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesProjectsTopicEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesProtectedBranchEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesProtectedTagEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesPublicGroupDetailEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesRelatedIssueEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesRelationImportTrackerEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesReleaseEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesReleasesLinkEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesRemoteMirrorEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesRepositoryHealthEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesResourceAccessTokenWithTokenEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesResourceMilestoneEventEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesSnippetEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesSshKeyWithUserEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesSuggestionEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesSystemBroadcastMessageEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesTagEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesTagSignatureEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesTemplatesListEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesTerraformModuleVersionEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesTreeObjectEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesTriggerEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesUserAgentDetailEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesUserCountEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesUserPublicEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesUserWithAdminEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesWikiAttachmentEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesWikiPageEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApiEntitiesWikiPageBasicEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewApplicationEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewAwardEmojiEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewBadgeEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewBranchEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewCargoPackageEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewCiVariableEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewClusterEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewClusterAgentEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewComposerEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewComposerPackageEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewConanEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewConanPackageEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewContainerRegistryEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewContainerRegistryEventEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewCustomAttributeEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewDebianEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewDebianDistributionEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewDebianPackageEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewDependencyProxyEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewDeployKeyEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewDeployTokenEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewDeploymentEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewEeApiEntitiesApprovalStateEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewEeApiEntitiesAuditEventEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewEeApiEntitiesBillableMembershipEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewEeApiEntitiesGeoNodeStatusEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewEeApiEntitiesGeoPipelineRefEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewEeApiEntitiesIssuableMetricImageEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewEeApiEntitiesMergeRequestApprovalStateEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewEeApiEntitiesSshCertificateEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewEnvironmentEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewErrorTrackingClientKeyEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewFeatureEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewFeatureFlagEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewFeatureFlagsUserListEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewFreezePeriodEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewGenericPackageEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewGeoEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewGoProxyEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewGroupEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewGroupAvatarEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewGroupExportEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewGroupImportEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewHelmPackageEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewHookEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewImportEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewIntegrationEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewInvitationEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewIssueLinkEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewIssuesStatisticEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewJobEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewMavenPackageEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewMemberEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewMergeRequestEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewMetadataEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewMigrationEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewMlModelRegistryEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewNamespaceEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewNpmEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewNpmPackageEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewNugetEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewNugetPackageEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewPackageFileEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewPageEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewParticipantEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewPersonalAccessTokenEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewProjectEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewProjectAvatarEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewProjectEntityEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewProjectExportEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewProjectHookEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewProjectImportEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewProjectImportEntityEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewProjectPackageEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewProjectSnippetEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewProjectsJobTokenScopeEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewProtectedTagEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewPypiEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewPypiPackageEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewReleaseEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewReleaseLinkEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewRemoteMirrorEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewRpmEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewRpmPackageEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewRubygemEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewRubygemPackageEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewRunnerEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewSearchEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewSecureFileEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewSlackEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewSnippetEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewStarrerEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewSystemHookEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewTagEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewTerraformRegistryEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewTerraformStateEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewTestReportEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewTestReportSummaryEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewTopicEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewUnleashApiEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewUsageDataEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewUserEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewWebCommitEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewWikiEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

