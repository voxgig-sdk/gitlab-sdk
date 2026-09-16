# Gitlab Python SDK Reference

Complete API reference for the Gitlab Python SDK.


## GitlabSDK

### Constructor

```python
from gitlab_sdk import GitlabSDK

client = GitlabSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["apikey"]` | `str` | API key for authentication. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `GitlabSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = GitlabSDK.test()
```


### Instance Methods

#### `AccessRequest(data=None)`

Create a new `AccessRequestEntity` instance. Pass `None` for no initial data.

#### `AlertManagement(data=None)`

Create a new `AlertManagementEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesAccessRequester(data=None)`

Create a new `ApiEntitiesAccessRequesterEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesAppearance(data=None)`

Create a new `ApiEntitiesAppearanceEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesApplication(data=None)`

Create a new `ApiEntitiesApplicationEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesApplicationStatistic(data=None)`

Create a new `ApiEntitiesApplicationStatisticEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesApplicationWithSecret(data=None)`

Create a new `ApiEntitiesApplicationWithSecretEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesAvatar(data=None)`

Create a new `ApiEntitiesAvatarEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesAwardEmoji(data=None)`

Create a new `ApiEntitiesAwardEmojiEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesBadge(data=None)`

Create a new `ApiEntitiesBadgeEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesBasicBadgeDetail(data=None)`

Create a new `ApiEntitiesBasicBadgeDetailEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesBasicGroupDetail(data=None)`

Create a new `ApiEntitiesBasicGroupDetailEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesBasicProjectDetail(data=None)`

Create a new `ApiEntitiesBasicProjectDetailEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesBasicRef(data=None)`

Create a new `ApiEntitiesBasicRefEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesBasicSuccess(data=None)`

Create a new `ApiEntitiesBasicSuccessEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesBatchedBackgroundMigration(data=None)`

Create a new `ApiEntitiesBatchedBackgroundMigrationEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesBranch(data=None)`

Create a new `ApiEntitiesBranchEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesBulkImport(data=None)`

Create a new `ApiEntitiesBulkImportEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesBulkImportsEntityFailure(data=None)`

Create a new `ApiEntitiesBulkImportsEntityFailureEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesBulkImportsExportStatus(data=None)`

Create a new `ApiEntitiesBulkImportsExportStatusEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesChangelog(data=None)`

Create a new `ApiEntitiesChangelogEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesCiBridge(data=None)`

Create a new `ApiEntitiesCiBridgeEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesCiCatalogResourcesVersion(data=None)`

Create a new `ApiEntitiesCiCatalogResourcesVersionEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesCiJob(data=None)`

Create a new `ApiEntitiesCiJobEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesCiJobBasic(data=None)`

Create a new `ApiEntitiesCiJobBasicEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesCiJobBasicWithProject(data=None)`

Create a new `ApiEntitiesCiJobBasicWithProjectEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesCiLintResult(data=None)`

Create a new `ApiEntitiesCiLintResultEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesCiPipeline(data=None)`

Create a new `ApiEntitiesCiPipelineEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesCiPipelineBasic(data=None)`

Create a new `ApiEntitiesCiPipelineBasicEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesCiPipelineSchedule(data=None)`

Create a new `ApiEntitiesCiPipelineScheduleEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesCiPipelineScheduleDetail(data=None)`

Create a new `ApiEntitiesCiPipelineScheduleDetailEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesCiResetTokenResult(data=None)`

Create a new `ApiEntitiesCiResetTokenResultEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesCiResourceGroup(data=None)`

Create a new `ApiEntitiesCiResourceGroupEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesCiRunner(data=None)`

Create a new `ApiEntitiesCiRunnerEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesCiRunnerDetail(data=None)`

Create a new `ApiEntitiesCiRunnerDetailEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesCiRunnerManager(data=None)`

Create a new `ApiEntitiesCiRunnerManagerEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesCiRunnerRegistrationDetail(data=None)`

Create a new `ApiEntitiesCiRunnerRegistrationDetailEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesCiSecureFile(data=None)`

Create a new `ApiEntitiesCiSecureFileEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesCiVariable(data=None)`

Create a new `ApiEntitiesCiVariableEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesCluster(data=None)`

Create a new `ApiEntitiesClusterEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesClusterGroup(data=None)`

Create a new `ApiEntitiesClusterGroupEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesClusterProject(data=None)`

Create a new `ApiEntitiesClusterProjectEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesClustersAgent(data=None)`

Create a new `ApiEntitiesClustersAgentEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesClustersAgentToken(data=None)`

Create a new `ApiEntitiesClustersAgentTokenEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesClustersAgentTokenBasic(data=None)`

Create a new `ApiEntitiesClustersAgentTokenBasicEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesClustersAgentTokenWithToken(data=None)`

Create a new `ApiEntitiesClustersAgentTokenWithTokenEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesCommit(data=None)`

Create a new `ApiEntitiesCommitEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesCommitDetail(data=None)`

Create a new `ApiEntitiesCommitDetailEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesCommitNote(data=None)`

Create a new `ApiEntitiesCommitNoteEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesCommitSequence(data=None)`

Create a new `ApiEntitiesCommitSequenceEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesCommitSignature(data=None)`

Create a new `ApiEntitiesCommitSignatureEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesCommitStatus(data=None)`

Create a new `ApiEntitiesCommitStatusEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesCompare(data=None)`

Create a new `ApiEntitiesCompareEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesContainerRegistryRepository(data=None)`

Create a new `ApiEntitiesContainerRegistryRepositoryEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesContainerRegistryTag(data=None)`

Create a new `ApiEntitiesContainerRegistryTagEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesContainerRegistryTagDetail(data=None)`

Create a new `ApiEntitiesContainerRegistryTagDetailEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesContributor(data=None)`

Create a new `ApiEntitiesContributorEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesDeployKey(data=None)`

Create a new `ApiEntitiesDeployKeyEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesDeployKeysProject(data=None)`

Create a new `ApiEntitiesDeployKeysProjectEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesDeployToken(data=None)`

Create a new `ApiEntitiesDeployTokenEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesDeployTokenWithToken(data=None)`

Create a new `ApiEntitiesDeployTokenWithTokenEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesDeployment(data=None)`

Create a new `ApiEntitiesDeploymentEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesDeploymentExtended(data=None)`

Create a new `ApiEntitiesDeploymentExtendedEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesDeploymentsApproval(data=None)`

Create a new `ApiEntitiesDeploymentsApprovalEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesDictionaryTable(data=None)`

Create a new `ApiEntitiesDictionaryTableEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesDiff(data=None)`

Create a new `ApiEntitiesDiffEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesDiscoveredCluster(data=None)`

Create a new `ApiEntitiesDiscoveredClusterEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesDraftNote(data=None)`

Create a new `ApiEntitiesDraftNoteEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesEnvironment(data=None)`

Create a new `ApiEntitiesEnvironmentEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesErrorTrackingClientKey(data=None)`

Create a new `ApiEntitiesErrorTrackingClientKeyEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesErrorTrackingProjectSetting(data=None)`

Create a new `ApiEntitiesErrorTrackingProjectSettingEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesEvent(data=None)`

Create a new `ApiEntitiesEventEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesFeature(data=None)`

Create a new `ApiEntitiesFeatureEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesFeatureDefinition(data=None)`

Create a new `ApiEntitiesFeatureDefinitionEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesFeatureFlag(data=None)`

Create a new `ApiEntitiesFeatureFlagEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesFeatureFlagUserList(data=None)`

Create a new `ApiEntitiesFeatureFlagUserListEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesFreezePeriod(data=None)`

Create a new `ApiEntitiesFreezePeriodEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesGitlabSubscription(data=None)`

Create a new `ApiEntitiesGitlabSubscriptionEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesGoModuleVersion(data=None)`

Create a new `ApiEntitiesGoModuleVersionEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesGroup(data=None)`

Create a new `ApiEntitiesGroupEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesGroupDetail(data=None)`

Create a new `ApiEntitiesGroupDetailEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesHook(data=None)`

Create a new `ApiEntitiesHookEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesIntegration(data=None)`

Create a new `ApiEntitiesIntegrationEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesIntegrationBasic(data=None)`

Create a new `ApiEntitiesIntegrationBasicEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesInvitation(data=None)`

Create a new `ApiEntitiesInvitationEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesIssuableTimeStat(data=None)`

Create a new `ApiEntitiesIssuableTimeStatEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesIssue(data=None)`

Create a new `ApiEntitiesIssueEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesIssueLink(data=None)`

Create a new `ApiEntitiesIssueLinkEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesLicense(data=None)`

Create a new `ApiEntitiesLicenseEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesMarkdown(data=None)`

Create a new `ApiEntitiesMarkdownEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesMarkdownUploadAdmin(data=None)`

Create a new `ApiEntitiesMarkdownUploadAdminEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesMember(data=None)`

Create a new `ApiEntitiesMemberEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesMerge(data=None)`

Create a new `ApiEntitiesMergeEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesMergeRequestApproval(data=None)`

Create a new `ApiEntitiesMergeRequestApprovalEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesMergeRequestBasic(data=None)`

Create a new `ApiEntitiesMergeRequestBasicEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesMergeRequestChange(data=None)`

Create a new `ApiEntitiesMergeRequestChangeEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesMergeRequestDiff(data=None)`

Create a new `ApiEntitiesMergeRequestDiffEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesMergeRequestDiffFull(data=None)`

Create a new `ApiEntitiesMergeRequestDiffFullEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesMergeRequestReviewer(data=None)`

Create a new `ApiEntitiesMergeRequestReviewerEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesMetricImage(data=None)`

Create a new `ApiEntitiesMetricImageEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesMrNote(data=None)`

Create a new `ApiEntitiesMrNoteEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesNamespace(data=None)`

Create a new `ApiEntitiesNamespaceEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesNamespaceExistence(data=None)`

Create a new `ApiEntitiesNamespaceExistenceEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesNamespacesStorageLimitExclusion(data=None)`

Create a new `ApiEntitiesNamespacesStorageLimitExclusionEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesNpmPackage(data=None)`

Create a new `ApiEntitiesNpmPackageEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesNpmPackageTag(data=None)`

Create a new `ApiEntitiesNpmPackageTagEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesNugetPackagesVersion(data=None)`

Create a new `ApiEntitiesNugetPackagesVersionEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesNugetSearchResult(data=None)`

Create a new `ApiEntitiesNugetSearchResultEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesNugetServiceIndex(data=None)`

Create a new `ApiEntitiesNugetServiceIndexEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesOrganizationsOrganization(data=None)`

Create a new `ApiEntitiesOrganizationsOrganizationEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesPackage(data=None)`

Create a new `ApiEntitiesPackageEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesPackageFile(data=None)`

Create a new `ApiEntitiesPackageFileEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesPackagePipeline(data=None)`

Create a new `ApiEntitiesPackagePipelineEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesPackagesConanFilesList(data=None)`

Create a new `ApiEntitiesPackagesConanFilesListEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesPackagesConanPackageManifest(data=None)`

Create a new `ApiEntitiesPackagesConanPackageManifestEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesPackagesConanPackageRevision(data=None)`

Create a new `ApiEntitiesPackagesConanPackageRevisionEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesPackagesConanPackageSnapshot(data=None)`

Create a new `ApiEntitiesPackagesConanPackageSnapshotEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesPackagesConanRecipeManifest(data=None)`

Create a new `ApiEntitiesPackagesConanRecipeManifestEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesPackagesConanRecipeRevision(data=None)`

Create a new `ApiEntitiesPackagesConanRecipeRevisionEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesPackagesConanRecipeSnapshot(data=None)`

Create a new `ApiEntitiesPackagesConanRecipeSnapshotEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesPackagesConanRevision(data=None)`

Create a new `ApiEntitiesPackagesConanRevisionEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesPackagesConanUploadUrl(data=None)`

Create a new `ApiEntitiesPackagesConanUploadUrlEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesPackagesDebianDistribution(data=None)`

Create a new `ApiEntitiesPackagesDebianDistributionEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesPagesDomain(data=None)`

Create a new `ApiEntitiesPagesDomainEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesPagesDomainBasic(data=None)`

Create a new `ApiEntitiesPagesDomainBasicEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesPersonalAccessToken(data=None)`

Create a new `ApiEntitiesPersonalAccessTokenEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesPersonalAccessTokenWithLastUsedIp(data=None)`

Create a new `ApiEntitiesPersonalAccessTokenWithLastUsedIpEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesPersonalAccessTokenWithToken(data=None)`

Create a new `ApiEntitiesPersonalAccessTokenWithTokenEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesPersonalSnippet(data=None)`

Create a new `ApiEntitiesPersonalSnippetEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesPlanLimit(data=None)`

Create a new `ApiEntitiesPlanLimitEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesProject(data=None)`

Create a new `ApiEntitiesProjectEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesProjectDailyStatistic(data=None)`

Create a new `ApiEntitiesProjectDailyStatisticEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesProjectExportStatus(data=None)`

Create a new `ApiEntitiesProjectExportStatusEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesProjectGroupLink(data=None)`

Create a new `ApiEntitiesProjectGroupLinkEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesProjectHook(data=None)`

Create a new `ApiEntitiesProjectHookEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesProjectImportStatus(data=None)`

Create a new `ApiEntitiesProjectImportStatusEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesProjectJobTokenScope(data=None)`

Create a new `ApiEntitiesProjectJobTokenScopeEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesProjectRepositoryStorage(data=None)`

Create a new `ApiEntitiesProjectRepositoryStorageEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesProjectSnippet(data=None)`

Create a new `ApiEntitiesProjectSnippetEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesProjectUpload(data=None)`

Create a new `ApiEntitiesProjectUploadEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesProjectWithAccess(data=None)`

Create a new `ApiEntitiesProjectWithAccessEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesProjectsContainerRegistryProtectionRule(data=None)`

Create a new `ApiEntitiesProjectsContainerRegistryProtectionRuleEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesProjectsPackagesProtectionRule(data=None)`

Create a new `ApiEntitiesProjectsPackagesProtectionRuleEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesProjectsTopic(data=None)`

Create a new `ApiEntitiesProjectsTopicEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesProtectedBranch(data=None)`

Create a new `ApiEntitiesProtectedBranchEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesProtectedTag(data=None)`

Create a new `ApiEntitiesProtectedTagEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesPublicGroupDetail(data=None)`

Create a new `ApiEntitiesPublicGroupDetailEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesRelatedIssue(data=None)`

Create a new `ApiEntitiesRelatedIssueEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesRelationImportTracker(data=None)`

Create a new `ApiEntitiesRelationImportTrackerEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesRelease(data=None)`

Create a new `ApiEntitiesReleaseEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesReleasesLink(data=None)`

Create a new `ApiEntitiesReleasesLinkEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesRemoteMirror(data=None)`

Create a new `ApiEntitiesRemoteMirrorEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesRepositoryHealth(data=None)`

Create a new `ApiEntitiesRepositoryHealthEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesResourceAccessTokenWithToken(data=None)`

Create a new `ApiEntitiesResourceAccessTokenWithTokenEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesResourceMilestoneEvent(data=None)`

Create a new `ApiEntitiesResourceMilestoneEventEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesSnippet(data=None)`

Create a new `ApiEntitiesSnippetEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesSshKeyWithUser(data=None)`

Create a new `ApiEntitiesSshKeyWithUserEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesSuggestion(data=None)`

Create a new `ApiEntitiesSuggestionEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesSystemBroadcastMessage(data=None)`

Create a new `ApiEntitiesSystemBroadcastMessageEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesTag(data=None)`

Create a new `ApiEntitiesTagEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesTagSignature(data=None)`

Create a new `ApiEntitiesTagSignatureEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesTemplatesList(data=None)`

Create a new `ApiEntitiesTemplatesListEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesTerraformModuleVersion(data=None)`

Create a new `ApiEntitiesTerraformModuleVersionEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesTreeObject(data=None)`

Create a new `ApiEntitiesTreeObjectEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesTrigger(data=None)`

Create a new `ApiEntitiesTriggerEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesUserAgentDetail(data=None)`

Create a new `ApiEntitiesUserAgentDetailEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesUserCount(data=None)`

Create a new `ApiEntitiesUserCountEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesUserPublic(data=None)`

Create a new `ApiEntitiesUserPublicEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesUserWithAdmin(data=None)`

Create a new `ApiEntitiesUserWithAdminEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesWikiAttachment(data=None)`

Create a new `ApiEntitiesWikiAttachmentEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesWikiPage(data=None)`

Create a new `ApiEntitiesWikiPageEntity` instance. Pass `None` for no initial data.

#### `ApiEntitiesWikiPageBasic(data=None)`

Create a new `ApiEntitiesWikiPageBasicEntity` instance. Pass `None` for no initial data.

#### `Application(data=None)`

Create a new `ApplicationEntity` instance. Pass `None` for no initial data.

#### `AwardEmoji(data=None)`

Create a new `AwardEmojiEntity` instance. Pass `None` for no initial data.

#### `Badge(data=None)`

Create a new `BadgeEntity` instance. Pass `None` for no initial data.

#### `Branch(data=None)`

Create a new `BranchEntity` instance. Pass `None` for no initial data.

#### `CargoPackage(data=None)`

Create a new `CargoPackageEntity` instance. Pass `None` for no initial data.

#### `CiVariable(data=None)`

Create a new `CiVariableEntity` instance. Pass `None` for no initial data.

#### `Cluster(data=None)`

Create a new `ClusterEntity` instance. Pass `None` for no initial data.

#### `ClusterAgent(data=None)`

Create a new `ClusterAgentEntity` instance. Pass `None` for no initial data.

#### `Composer(data=None)`

Create a new `ComposerEntity` instance. Pass `None` for no initial data.

#### `ComposerPackage(data=None)`

Create a new `ComposerPackageEntity` instance. Pass `None` for no initial data.

#### `Conan(data=None)`

Create a new `ConanEntity` instance. Pass `None` for no initial data.

#### `ConanPackage(data=None)`

Create a new `ConanPackageEntity` instance. Pass `None` for no initial data.

#### `ContainerRegistry(data=None)`

Create a new `ContainerRegistryEntity` instance. Pass `None` for no initial data.

#### `ContainerRegistryEvent(data=None)`

Create a new `ContainerRegistryEventEntity` instance. Pass `None` for no initial data.

#### `CustomAttribute(data=None)`

Create a new `CustomAttributeEntity` instance. Pass `None` for no initial data.

#### `Debian(data=None)`

Create a new `DebianEntity` instance. Pass `None` for no initial data.

#### `DebianDistribution(data=None)`

Create a new `DebianDistributionEntity` instance. Pass `None` for no initial data.

#### `DebianPackage(data=None)`

Create a new `DebianPackageEntity` instance. Pass `None` for no initial data.

#### `DependencyProxy(data=None)`

Create a new `DependencyProxyEntity` instance. Pass `None` for no initial data.

#### `DeployKey(data=None)`

Create a new `DeployKeyEntity` instance. Pass `None` for no initial data.

#### `DeployToken(data=None)`

Create a new `DeployTokenEntity` instance. Pass `None` for no initial data.

#### `Deployment(data=None)`

Create a new `DeploymentEntity` instance. Pass `None` for no initial data.

#### `EeApiEntitiesApprovalState(data=None)`

Create a new `EeApiEntitiesApprovalStateEntity` instance. Pass `None` for no initial data.

#### `EeApiEntitiesAuditEvent(data=None)`

Create a new `EeApiEntitiesAuditEventEntity` instance. Pass `None` for no initial data.

#### `EeApiEntitiesBillableMembership(data=None)`

Create a new `EeApiEntitiesBillableMembershipEntity` instance. Pass `None` for no initial data.

#### `EeApiEntitiesGeoNodeStatus(data=None)`

Create a new `EeApiEntitiesGeoNodeStatusEntity` instance. Pass `None` for no initial data.

#### `EeApiEntitiesGeoPipelineRef(data=None)`

Create a new `EeApiEntitiesGeoPipelineRefEntity` instance. Pass `None` for no initial data.

#### `EeApiEntitiesIssuableMetricImage(data=None)`

Create a new `EeApiEntitiesIssuableMetricImageEntity` instance. Pass `None` for no initial data.

#### `EeApiEntitiesMergeRequestApprovalState(data=None)`

Create a new `EeApiEntitiesMergeRequestApprovalStateEntity` instance. Pass `None` for no initial data.

#### `EeApiEntitiesSshCertificate(data=None)`

Create a new `EeApiEntitiesSshCertificateEntity` instance. Pass `None` for no initial data.

#### `Environment(data=None)`

Create a new `EnvironmentEntity` instance. Pass `None` for no initial data.

#### `ErrorTrackingClientKey(data=None)`

Create a new `ErrorTrackingClientKeyEntity` instance. Pass `None` for no initial data.

#### `Feature(data=None)`

Create a new `FeatureEntity` instance. Pass `None` for no initial data.

#### `FeatureFlag(data=None)`

Create a new `FeatureFlagEntity` instance. Pass `None` for no initial data.

#### `FeatureFlagsUserList(data=None)`

Create a new `FeatureFlagsUserListEntity` instance. Pass `None` for no initial data.

#### `FreezePeriod(data=None)`

Create a new `FreezePeriodEntity` instance. Pass `None` for no initial data.

#### `GenericPackage(data=None)`

Create a new `GenericPackageEntity` instance. Pass `None` for no initial data.

#### `Geo(data=None)`

Create a new `GeoEntity` instance. Pass `None` for no initial data.

#### `GoProxy(data=None)`

Create a new `GoProxyEntity` instance. Pass `None` for no initial data.

#### `Group(data=None)`

Create a new `GroupEntity` instance. Pass `None` for no initial data.

#### `GroupAvatar(data=None)`

Create a new `GroupAvatarEntity` instance. Pass `None` for no initial data.

#### `GroupExport(data=None)`

Create a new `GroupExportEntity` instance. Pass `None` for no initial data.

#### `GroupImport(data=None)`

Create a new `GroupImportEntity` instance. Pass `None` for no initial data.

#### `HelmPackage(data=None)`

Create a new `HelmPackageEntity` instance. Pass `None` for no initial data.

#### `Hook(data=None)`

Create a new `HookEntity` instance. Pass `None` for no initial data.

#### `Import(data=None)`

Create a new `ImportEntity` instance. Pass `None` for no initial data.

#### `Integration(data=None)`

Create a new `IntegrationEntity` instance. Pass `None` for no initial data.

#### `Invitation(data=None)`

Create a new `InvitationEntity` instance. Pass `None` for no initial data.

#### `IssueLink(data=None)`

Create a new `IssueLinkEntity` instance. Pass `None` for no initial data.

#### `IssuesStatistic(data=None)`

Create a new `IssuesStatisticEntity` instance. Pass `None` for no initial data.

#### `Job(data=None)`

Create a new `JobEntity` instance. Pass `None` for no initial data.

#### `MavenPackage(data=None)`

Create a new `MavenPackageEntity` instance. Pass `None` for no initial data.

#### `Member(data=None)`

Create a new `MemberEntity` instance. Pass `None` for no initial data.

#### `MergeRequest(data=None)`

Create a new `MergeRequestEntity` instance. Pass `None` for no initial data.

#### `Metadata(data=None)`

Create a new `MetadataEntity` instance. Pass `None` for no initial data.

#### `Migration(data=None)`

Create a new `MigrationEntity` instance. Pass `None` for no initial data.

#### `MlModelRegistry(data=None)`

Create a new `MlModelRegistryEntity` instance. Pass `None` for no initial data.

#### `Namespace(data=None)`

Create a new `NamespaceEntity` instance. Pass `None` for no initial data.

#### `Npm(data=None)`

Create a new `NpmEntity` instance. Pass `None` for no initial data.

#### `NpmPackage(data=None)`

Create a new `NpmPackageEntity` instance. Pass `None` for no initial data.

#### `Nuget(data=None)`

Create a new `NugetEntity` instance. Pass `None` for no initial data.

#### `NugetPackage(data=None)`

Create a new `NugetPackageEntity` instance. Pass `None` for no initial data.

#### `PackageFile(data=None)`

Create a new `PackageFileEntity` instance. Pass `None` for no initial data.

#### `Page(data=None)`

Create a new `PageEntity` instance. Pass `None` for no initial data.

#### `Participant(data=None)`

Create a new `ParticipantEntity` instance. Pass `None` for no initial data.

#### `PersonalAccessToken(data=None)`

Create a new `PersonalAccessTokenEntity` instance. Pass `None` for no initial data.

#### `Project(data=None)`

Create a new `ProjectEntity` instance. Pass `None` for no initial data.

#### `ProjectAvatar(data=None)`

Create a new `ProjectAvatarEntity` instance. Pass `None` for no initial data.

#### `ProjectEntity(data=None)`

Create a new `ProjectEntityEntity` instance. Pass `None` for no initial data.

#### `ProjectExport(data=None)`

Create a new `ProjectExportEntity` instance. Pass `None` for no initial data.

#### `ProjectHook(data=None)`

Create a new `ProjectHookEntity` instance. Pass `None` for no initial data.

#### `ProjectImport(data=None)`

Create a new `ProjectImportEntity` instance. Pass `None` for no initial data.

#### `ProjectImportEntity(data=None)`

Create a new `ProjectImportEntityEntity` instance. Pass `None` for no initial data.

#### `ProjectPackage(data=None)`

Create a new `ProjectPackageEntity` instance. Pass `None` for no initial data.

#### `ProjectSnippet(data=None)`

Create a new `ProjectSnippetEntity` instance. Pass `None` for no initial data.

#### `ProjectsJobTokenScope(data=None)`

Create a new `ProjectsJobTokenScopeEntity` instance. Pass `None` for no initial data.

#### `ProtectedTag(data=None)`

Create a new `ProtectedTagEntity` instance. Pass `None` for no initial data.

#### `Pypi(data=None)`

Create a new `PypiEntity` instance. Pass `None` for no initial data.

#### `PypiPackage(data=None)`

Create a new `PypiPackageEntity` instance. Pass `None` for no initial data.

#### `Release(data=None)`

Create a new `ReleaseEntity` instance. Pass `None` for no initial data.

#### `ReleaseLink(data=None)`

Create a new `ReleaseLinkEntity` instance. Pass `None` for no initial data.

#### `RemoteMirror(data=None)`

Create a new `RemoteMirrorEntity` instance. Pass `None` for no initial data.

#### `Rpm(data=None)`

Create a new `RpmEntity` instance. Pass `None` for no initial data.

#### `RpmPackage(data=None)`

Create a new `RpmPackageEntity` instance. Pass `None` for no initial data.

#### `Rubygem(data=None)`

Create a new `RubygemEntity` instance. Pass `None` for no initial data.

#### `RubygemPackage(data=None)`

Create a new `RubygemPackageEntity` instance. Pass `None` for no initial data.

#### `Runner(data=None)`

Create a new `RunnerEntity` instance. Pass `None` for no initial data.

#### `Search(data=None)`

Create a new `SearchEntity` instance. Pass `None` for no initial data.

#### `SecureFile(data=None)`

Create a new `SecureFileEntity` instance. Pass `None` for no initial data.

#### `Slack(data=None)`

Create a new `SlackEntity` instance. Pass `None` for no initial data.

#### `Snippet(data=None)`

Create a new `SnippetEntity` instance. Pass `None` for no initial data.

#### `Starrer(data=None)`

Create a new `StarrerEntity` instance. Pass `None` for no initial data.

#### `SystemHook(data=None)`

Create a new `SystemHookEntity` instance. Pass `None` for no initial data.

#### `Tag(data=None)`

Create a new `TagEntity` instance. Pass `None` for no initial data.

#### `TerraformRegistry(data=None)`

Create a new `TerraformRegistryEntity` instance. Pass `None` for no initial data.

#### `TerraformState(data=None)`

Create a new `TerraformStateEntity` instance. Pass `None` for no initial data.

#### `TestReport(data=None)`

Create a new `TestReportEntity` instance. Pass `None` for no initial data.

#### `TestReportSummary(data=None)`

Create a new `TestReportSummaryEntity` instance. Pass `None` for no initial data.

#### `Topic(data=None)`

Create a new `TopicEntity` instance. Pass `None` for no initial data.

#### `UnleashApi(data=None)`

Create a new `UnleashApiEntity` instance. Pass `None` for no initial data.

#### `UsageData(data=None)`

Create a new `UsageDataEntity` instance. Pass `None` for no initial data.

#### `User(data=None)`

Create a new `UserEntity` instance. Pass `None` for no initial data.

#### `WebCommit(data=None)`

Create a new `WebCommitEntity` instance. Pass `None` for no initial data.

#### `Wiki(data=None)`

Create a new `WikiEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## AccessRequestEntity

```python
access_request = client.AccessRequest()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.AccessRequest().remove({"id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AccessRequestEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AlertManagementEntity

```python
alert_management = client.AlertManagement()
```

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.AlertManagement().create({
    "alert_management_alert_id": "example_alert_management_alert_id",  # str
    "project_id": "example_project_id",  # str
})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.AlertManagement().remove({"alert_management_alert_id": "alert_management_alert_id", "metric_image_id": "metric_image_id", "project_id": "project_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AlertManagementEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesAccessRequesterEntity

```python
api_entities_access_requester = client.ApiEntitiesAccessRequester()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_path` | `str` | No |  |
| `avatar_url` | `str` | No |  |
| `custom_attributes` | `list` | No |  |
| `id` | `int` | No |  |
| `key` | `str` | No |  |
| `locked` | `bool` | No |  |
| `name` | `str` | No |  |
| `public_email` | `str` | No |  |
| `requested_at` | `str` | No |  |
| `state` | `str` | No |  |
| `username` | `str` | No |  |
| `value` | `str` | No |  |
| `web_url` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiEntitiesAccessRequester().create({
    "group_id": "example_group_id",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiEntitiesAccessRequester().list({"group_id": "example"})
for api_entities_access_requester in results:
    print(api_entities_access_requester)
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ApiEntitiesAccessRequester().update({
    "access_request_id": "access_request_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesAccessRequesterEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesAppearanceEntity

```python
api_entities_appearance = client.ApiEntitiesAppearance()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `str` | No |  |
| `email_header_and_footer_enabled` | `str` | No |  |
| `favicon` | `str` | No |  |
| `footer_message` | `str` | No |  |
| `header_logo` | `str` | No |  |
| `header_message` | `str` | No |  |
| `logo` | `str` | No |  |
| `member_guidelines` | `str` | No |  |
| `message_background_color` | `str` | No |  |
| `message_font_color` | `str` | No |  |
| `new_project_guidelines` | `str` | No |  |
| `profile_image_guidelines` | `str` | No |  |
| `pwa_description` | `str` | No |  |
| `pwa_icon` | `str` | No |  |
| `pwa_name` | `str` | No |  |
| `pwa_short_name` | `str` | No |  |
| `title` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesAppearance().load()
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ApiEntitiesAppearance().update({
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesAppearanceEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesApplicationEntity

```python
api_entities_application = client.ApiEntitiesApplication()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `application_id` | `str` | No |  |
| `application_name` | `str` | No |  |
| `callback_url` | `str` | No |  |
| `confidential` | `bool` | No |  |
| `id` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiEntitiesApplication().list()
for api_entities_application in results:
    print(api_entities_application)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesApplicationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesApplicationStatisticEntity

```python
api_entities_application_statistic = client.ApiEntitiesApplicationStatistic()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_users` | `int` | No | Number of active users |
| `forks` | `int` | No | Approximate number of repo forks |
| `groups` | `int` | No | Approximate number of projects |
| `issues` | `int` | No | Approximate number of issues |
| `merge_requests` | `int` | No | Approximate number of merge requests |
| `milestones` | `int` | No | Approximate number of milestones |
| `notes` | `int` | No | Approximate number of notes |
| `projects` | `int` | No | Approximate number of projects |
| `snippets` | `int` | No | Approximate number of snippets |
| `ssh_keys` | `int` | No | Approximate number of SSH keys |
| `users` | `int` | No | Approximate number of users |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesApplicationStatistic().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesApplicationStatisticEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesApplicationWithSecretEntity

```python
api_entities_application_with_secret = client.ApiEntitiesApplicationWithSecret()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `application_id` | `str` | No |  |
| `application_name` | `str` | No |  |
| `callback_url` | `str` | No |  |
| `confidential` | `bool` | No |  |
| `id` | `str` | No |  |
| `secret` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiEntitiesApplicationWithSecret().create({
    "post_api_v4_application": {},  # dict
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesApplicationWithSecretEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesAvatarEntity

```python
api_entities_avatar = client.ApiEntitiesAvatar()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_url` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesAvatar().load({"email": "email"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesAvatarEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesAwardEmojiEntity

```python
api_entities_award_emoji = client.ApiEntitiesAwardEmoji()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_path` | `str` | No |  |
| `avatar_url` | `str` | No |  |
| `awardable_id` | `int` | No |  |
| `awardable_type` | `str` | No |  |
| `created_at` | `str` | No |  |
| `custom_attributes` | `list` | No |  |
| `id` | `int` | No |  |
| `locked` | `bool` | No |  |
| `name` | `str` | No |  |
| `public_email` | `str` | No |  |
| `state` | `str` | No |  |
| `updated_at` | `str` | No |  |
| `url` | `str` | No |  |
| `user` | `dict` | No | API_Entities_UserBasic model |
| `username` | `str` | No |  |
| `web_url` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiEntitiesAwardEmoji().create({
    "epic_id": "example_epic_id",  # str
    "group_id": "example_group_id",  # str
    "post_api_v4_groups_id_epics_epic_iid_award_emoji": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiEntitiesAwardEmoji().list({"epic_id": "example", "group_id": "example"})
for api_entities_award_emoji in results:
    print(api_entities_award_emoji)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesAwardEmoji().load({"id": "api_entities_award_emoji_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesAwardEmojiEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesBadgeEntity

```python
api_entities_badge = client.ApiEntitiesBadge()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |
| `image_url` | `str` | No |  |
| `kind` | `str` | No |  |
| `link_url` | `str` | No |  |
| `name` | `str` | No |  |
| `rendered_image_url` | `str` | No |  |
| `rendered_link_url` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiEntitiesBadge().create({
    "group_id": "example_group_id",  # str
    "post_api_v4_groups_id_badge": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiEntitiesBadge().list({"group_id": "example"})
for api_entities_badge in results:
    print(api_entities_badge)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesBadge().load({"id": "api_entities_badge_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ApiEntitiesBadge().update({
    "id": "api_entities_badge_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesBadgeEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesBasicBadgeDetailEntity

```python
api_entities_basic_badge_detail = client.ApiEntitiesBasicBadgeDetail()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `image_url` | `str` | No |  |
| `link_url` | `str` | No |  |
| `name` | `str` | No |  |
| `rendered_image_url` | `str` | No |  |
| `rendered_link_url` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesBasicBadgeDetail().load({"image_url": "image_url", "link_url": "link_url"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesBasicBadgeDetailEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesBasicGroupDetailEntity

```python
api_entities_basic_group_detail = client.ApiEntitiesBasicGroupDetail()
```

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiEntitiesBasicGroupDetail().create({
    "project_id": "example_project_id",  # str
    "post_api_v4_projects_id_job_token_scope_groups_allowlist": {},  # dict
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesBasicGroupDetailEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesBasicProjectDetailEntity

```python
api_entities_basic_project_detail = client.ApiEntitiesBasicProjectDetail()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_url` | `str` | No |  |
| `created_at` | `str` | No |  |
| `custom_attributes` | `dict` | No | API_Entities_CustomAttribute model |
| `default_branch` | `str` | No |  |
| `description` | `str` | No |  |
| `forks_count` | `int` | No |  |
| `http_url_to_repo` | `str` | No |  |
| `id` | `int` | No |  |
| `last_activity_at` | `str` | No |  |
| `license` | `dict` | No |  |
| `license_url` | `str` | No |  |
| `name` | `str` | No |  |
| `name_with_namespace` | `str` | No |  |
| `namespace` | `dict` | No |  |
| `path` | `str` | No |  |
| `path_with_namespace` | `str` | No |  |
| `readme_url` | `str` | No |  |
| `repository_storage` | `str` | No |  |
| `ssh_url_to_repo` | `str` | No |  |
| `star_count` | `int` | No |  |
| `tag_list` | `list` | No |  |
| `topics` | `list` | No |  |
| `visibility` | `str` | No |  |
| `web_url` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiEntitiesBasicProjectDetail().create({
    "project_id": "example_project_id",  # str
    "post_api_v4_projects_id_job_token_scope_allowlist": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiEntitiesBasicProjectDetail().list()
for api_entities_basic_project_detail in results:
    print(api_entities_basic_project_detail)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesBasicProjectDetailEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesBasicRefEntity

```python
api_entities_basic_ref = client.ApiEntitiesBasicRef()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `str` | No |  |
| `type` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiEntitiesBasicRef().list({"project_id": "example", "sha": "example"})
for api_entities_basic_ref in results:
    print(api_entities_basic_ref)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesBasicRefEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesBasicSuccessEntity

```python
api_entities_basic_success = client.ApiEntitiesBasicSuccess()
```

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiEntitiesBasicSuccess().create({
    "post_api_v4_integrations_jira_connect_subscription": {},  # dict
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesBasicSuccessEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesBatchedBackgroundMigrationEntity

```python
api_entities_batched_background_migration = client.ApiEntitiesBatchedBackgroundMigration()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `column_name` | `str` | No |  |
| `created_at` | `str` | No |  |
| `id` | `str` | No |  |
| `job_class_name` | `str` | No |  |
| `progress` | `float` | No |  |
| `status` | `str` | No |  |
| `table_name` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiEntitiesBatchedBackgroundMigration().list()
for api_entities_batched_background_migration in results:
    print(api_entities_batched_background_migration)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesBatchedBackgroundMigration().load({"id": "api_entities_batched_background_migration_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ApiEntitiesBatchedBackgroundMigration().update({
    "id": "api_entities_batched_background_migration_id",
    "batched_background_migration_id": "batched_background_migration_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesBatchedBackgroundMigrationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesBranchEntity

```python
api_entities_branch = client.ApiEntitiesBranch()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author_email` | `str` | No |  |
| `author_name` | `str` | No |  |
| `authored_date` | `str` | No |  |
| `can_push` | `bool` | No |  |
| `commit` | `dict` | No | API_Entities_Commit model |
| `committed_date` | `str` | No |  |
| `committer_email` | `str` | No |  |
| `committer_name` | `str` | No |  |
| `created_at` | `str` | No |  |
| `default` | `bool` | No |  |
| `developers_can_merge` | `bool` | No |  |
| `developers_can_push` | `bool` | No |  |
| `extended_trailers` | `dict` | No |  |
| `id` | `str` | No |  |
| `merged` | `bool` | No |  |
| `message` | `str` | No |  |
| `name` | `str` | No |  |
| `parent_ids` | `list` | No |  |
| `protected` | `bool` | No |  |
| `short_id` | `str` | No |  |
| `title` | `str` | No |  |
| `trailers` | `dict` | No |  |
| `web_url` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiEntitiesBranch().create({
    "project_id": "example_project_id",  # str
    "post_api_v4_projects_id_repository_branch": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiEntitiesBranch().list({"project_id": "example"})
for api_entities_branch in results:
    print(api_entities_branch)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesBranch().load({"id": "api_entities_branch_id", "project_id": "project_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ApiEntitiesBranch().update({
    "id": "api_entities_branch_id",
    "branch_id": "branch_id",
    "project_id": "project_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesBranchEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesBulkImportEntity

```python
api_entities_bulk_import = client.ApiEntitiesBulkImport()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bulk_import_id` | `int` | No |  |
| `created_at` | `str` | No |  |
| `destination_full_path` | `str` | No |  |
| `destination_name` | `str` | No |  |
| `destination_namespace` | `str` | No |  |
| `destination_slug` | `str` | No |  |
| `entity_type` | `str` | No |  |
| `failures` | `list` | No |  |
| `has_failures` | `bool` | No |  |
| `id` | `int` | No |  |
| `migrate_memberships` | `bool` | No |  |
| `migrate_projects` | `bool` | No |  |
| `namespace_id` | `int` | No |  |
| `parent_id` | `int` | No |  |
| `project_id` | `int` | No |  |
| `source_full_path` | `str` | No |  |
| `source_type` | `str` | No |  |
| `source_url` | `str` | No |  |
| `stats` | `dict` | No |  |
| `status` | `str` | No |  |
| `updated_at` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiEntitiesBulkImport().create({
    "configuration_access_token": "example_configuration_access_token",  # Any
    "configuration_url": "example_configuration_url",  # Any
    "entities_destination_namespace": "example_entities_destination_namespace",  # Any
    "entities_source_full_path": "example_entities_source_full_path",  # Any
    "entities_source_type": "example_entities_source_type",  # Any
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiEntitiesBulkImport().list()
for api_entities_bulk_import in results:
    print(api_entities_bulk_import)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesBulkImport().load({"id": "api_entities_bulk_import_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesBulkImportEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesBulkImportsEntityFailureEntity

```python
api_entities_bulk_imports_entity_failure = client.ApiEntitiesBulkImportsEntityFailure()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `correlation_id_value` | `str` | No |  |
| `exception_class` | `str` | No |  |
| `exception_message` | `str` | No |  |
| `relation` | `str` | No |  |
| `source_title` | `str` | No |  |
| `source_url` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesBulkImportsEntityFailure().load({"bulk_import_id": "bulk_import_id", "entity_id": "entity_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesBulkImportsEntityFailureEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesBulkImportsExportStatusEntity

```python
api_entities_bulk_imports_export_status = client.ApiEntitiesBulkImportsExportStatus()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `batched` | `bool` | No |  |
| `batches` | `dict` | No |  |
| `batches_count` | `int` | No |  |
| `error` | `str` | No |  |
| `relation` | `str` | No |  |
| `status` | `str` | No |  |
| `total_objects_count` | `int` | No |  |
| `updated_at` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiEntitiesBulkImportsExportStatus().list({"group_id": "example"})
for api_entities_bulk_imports_export_status in results:
    print(api_entities_bulk_imports_export_status)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesBulkImportsExportStatusEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesChangelogEntity

```python
api_entities_changelog = client.ApiEntitiesChangelog()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `notes` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesChangelog().load({"project_id": "project_id", "version": "version"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesChangelogEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesCiBridgeEntity

```python
api_entities_ci_bridge = client.ApiEntitiesCiBridge()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_failure` | `bool` | No |  |
| `commit` | `dict` | No | API_Entities_Commit model |
| `coverage` | `float` | No |  |
| `created_at` | `str` | No |  |
| `downstream_pipeline` | `dict` | No | API_Entities_Ci_PipelineBasic model |
| `duration` | `float` | No | Time spent running |
| `erased_at` | `str` | No |  |
| `failure_reason` | `str` | No |  |
| `finished_at` | `str` | No |  |
| `id` | `int` | No |  |
| `name` | `str` | No |  |
| `pipeline` | `dict` | No | API_Entities_Ci_PipelineBasic model |
| `project` | `dict` | No |  |
| `queued_duration` | `float` | No | Time spent enqueued |
| `ref` | `str` | No |  |
| `stage` | `str` | No |  |
| `started_at` | `str` | No |  |
| `status` | `str` | No |  |
| `tag` | `bool` | No |  |
| `user` | `dict` | No |  |
| `web_url` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiEntitiesCiBridge().list({"pipeline_id": "example", "project_id": "example"})
for api_entities_ci_bridge in results:
    print(api_entities_ci_bridge)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesCiBridgeEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesCiCatalogResourcesVersionEntity

```python
api_entities_ci_catalog_resources_version = client.ApiEntitiesCiCatalogResourcesVersion()
```

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiEntitiesCiCatalogResourcesVersion().create({
    "project_id": "example_project_id",  # str
    "post_api_v4_projects_id_catalog_publish": {},  # dict
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesCiCatalogResourcesVersionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesCiJobEntity

```python
api_entities_ci_job = client.ApiEntitiesCiJob()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_failure` | `bool` | No |  |
| `archived` | `bool` | No |  |
| `artifacts` | `list` | No |  |
| `artifacts_expire_at` | `str` | No |  |
| `artifacts_file` | `dict` | No |  |
| `commit` | `dict` | No | API_Entities_Commit model |
| `coverage` | `float` | No |  |
| `created_at` | `str` | No |  |
| `duration` | `float` | No | Time spent running |
| `erased_at` | `str` | No |  |
| `failure_reason` | `str` | No |  |
| `file_format` | `str` | No |  |
| `file_type` | `str` | No |  |
| `filename` | `str` | No |  |
| `finished_at` | `str` | No |  |
| `id` | `int` | No |  |
| `name` | `str` | No |  |
| `pipeline` | `dict` | No | API_Entities_Ci_PipelineBasic model |
| `project` | `dict` | No |  |
| `queued_duration` | `float` | No | Time spent enqueued |
| `ref` | `str` | No |  |
| `runner` | `dict` | No | API_Entities_Ci_Runner model |
| `runner_manager` | `dict` | No | API_Entities_Ci_RunnerManager model |
| `size` | `int` | No |  |
| `stage` | `str` | No |  |
| `started_at` | `str` | No |  |
| `status` | `str` | No |  |
| `tag` | `bool` | No |  |
| `tag_list` | `list` | No |  |
| `user` | `dict` | No |  |
| `web_url` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiEntitiesCiJob().create({
    "job_id": "example_job_id",  # str
    "project_id": "example_project_id",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiEntitiesCiJob().list()
for api_entities_ci_job in results:
    print(api_entities_ci_job)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesCiJob().load({"id": "api_entities_ci_job_id", "project_id": "project_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesCiJobEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesCiJobBasicEntity

```python
api_entities_ci_job_basic = client.ApiEntitiesCiJobBasic()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_failure` | `bool` | No |  |
| `commit` | `dict` | No | API_Entities_Commit model |
| `coverage` | `float` | No |  |
| `created_at` | `str` | No |  |
| `duration` | `float` | No | Time spent running |
| `erased_at` | `str` | No |  |
| `failure_reason` | `str` | No |  |
| `finished_at` | `str` | No |  |
| `id` | `int` | No |  |
| `name` | `str` | No |  |
| `pipeline` | `dict` | No | API_Entities_Ci_PipelineBasic model |
| `project` | `dict` | No |  |
| `queued_duration` | `float` | No | Time spent enqueued |
| `ref` | `str` | No |  |
| `stage` | `str` | No |  |
| `started_at` | `str` | No |  |
| `status` | `str` | No |  |
| `tag` | `bool` | No |  |
| `user` | `dict` | No |  |
| `web_url` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiEntitiesCiJobBasic().create({
    "job_id": "example_job_id",  # str
    "project_id": "example_project_id",  # str
    "post_api_v4_projects_id_jobs_job_id_play": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiEntitiesCiJobBasic().list({"key": "example", "project_id": "example"})
for api_entities_ci_job_basic in results:
    print(api_entities_ci_job_basic)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesCiJobBasicEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesCiJobBasicWithProjectEntity

```python
api_entities_ci_job_basic_with_project = client.ApiEntitiesCiJobBasicWithProject()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_failure` | `bool` | No |  |
| `commit` | `dict` | No | API_Entities_Commit model |
| `coverage` | `float` | No |  |
| `created_at` | `str` | No |  |
| `duration` | `float` | No | Time spent running |
| `erased_at` | `str` | No |  |
| `failure_reason` | `str` | No |  |
| `finished_at` | `str` | No |  |
| `id` | `int` | No |  |
| `name` | `str` | No |  |
| `pipeline` | `dict` | No | API_Entities_Ci_PipelineBasic model |
| `project` | `dict` | No |  |
| `queued_duration` | `float` | No | Time spent enqueued |
| `ref` | `str` | No |  |
| `stage` | `str` | No |  |
| `started_at` | `str` | No |  |
| `status` | `str` | No |  |
| `tag` | `bool` | No |  |
| `user` | `dict` | No |  |
| `web_url` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesCiJobBasicWithProject().load({"runner_id": "runner_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesCiJobBasicWithProjectEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesCiLintResultEntity

```python
api_entities_ci_lint_result = client.ApiEntitiesCiLintResult()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `blob` | `str` | No |  |
| `context_project` | `str` | No |  |
| `context_sha` | `str` | No |  |
| `errors` | `list` | No |  |
| `extra` | `dict` | No |  |
| `includes` | `list` | No |  |
| `jobs` | `list` | No |  |
| `location` | `str` | No |  |
| `merged_yaml` | `str` | No |  |
| `raw` | `str` | No |  |
| `type` | `str` | No |  |
| `valid` | `bool` | No |  |
| `warnings` | `list` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiEntitiesCiLintResult().create({
    "project_id": "example_project_id",  # str
    "post_api_v4_projects_id_ci_lint": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiEntitiesCiLintResult().list({"project_id": "example"})
for api_entities_ci_lint_result in results:
    print(api_entities_ci_lint_result)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesCiLintResultEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesCiPipelineEntity

```python
api_entities_ci_pipeline = client.ApiEntitiesCiPipeline()
```

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiEntitiesCiPipeline().create({
    "project_id": "example_project_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesCiPipelineEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesCiPipelineBasicEntity

```python
api_entities_ci_pipeline_basic = client.ApiEntitiesCiPipelineBasic()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | No |  |
| `id` | `int` | No |  |
| `iid` | `int` | No |  |
| `project_id` | `int` | No |  |
| `ref` | `str` | No |  |
| `sha` | `str` | No |  |
| `source` | `str` | No |  |
| `status` | `str` | No |  |
| `updated_at` | `str` | No |  |
| `web_url` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiEntitiesCiPipelineBasic().list({"project_id": "example"})
for api_entities_ci_pipeline_basic in results:
    print(api_entities_ci_pipeline_basic)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesCiPipelineBasic().load({"merge_request_id": "merge_request_id", "project_id": "project_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesCiPipelineBasicEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesCiPipelineScheduleEntity

```python
api_entities_ci_pipeline_schedule = client.ApiEntitiesCiPipelineSchedule()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | No |  |
| `created_at` | `str` | No |  |
| `cron` | `str` | No |  |
| `cron_timezone` | `str` | No |  |
| `description` | `str` | No |  |
| `id` | `int` | No |  |
| `inputs` | `dict` | No |  |
| `next_run_at` | `str` | No |  |
| `owner` | `dict` | No | API_Entities_UserBasic model |
| `ref` | `str` | No |  |
| `updated_at` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiEntitiesCiPipelineSchedule().list({"project_id": "example"})
for api_entities_ci_pipeline_schedule in results:
    print(api_entities_ci_pipeline_schedule)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesCiPipelineScheduleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesCiPipelineScheduleDetailEntity

```python
api_entities_ci_pipeline_schedule_detail = client.ApiEntitiesCiPipelineScheduleDetail()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | No |  |
| `created_at` | `str` | No |  |
| `cron` | `str` | No |  |
| `cron_timezone` | `str` | No |  |
| `description` | `str` | No |  |
| `id` | `int` | No |  |
| `inputs` | `dict` | No |  |
| `last_pipeline` | `dict` | No | API_Entities_Ci_PipelineBasic model |
| `next_run_at` | `str` | No |  |
| `owner` | `dict` | No | API_Entities_UserBasic model |
| `ref` | `str` | No |  |
| `updated_at` | `str` | No |  |
| `variables` | `dict` | No | API_Entities_Ci_Variable model |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiEntitiesCiPipelineScheduleDetail().create({
    "project_id": "example_project_id",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesCiPipelineScheduleDetail().load({"pipeline_schedule_id": "pipeline_schedule_id", "project_id": "project_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ApiEntitiesCiPipelineScheduleDetail().update({
    "pipeline_schedule_id": "pipeline_schedule_id",
    "project_id": "project_id",
    "put_api_v4_projects_id_pipeline_schedules_pipeline_schedule_id": {},
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesCiPipelineScheduleDetailEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesCiResetTokenResultEntity

```python
api_entities_ci_reset_token_result = client.ApiEntitiesCiResetTokenResult()
```

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiEntitiesCiResetTokenResult().create({
    "post_api_v4_runners_reset_authentication_token": {},  # dict
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesCiResetTokenResultEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesCiResourceGroupEntity

```python
api_entities_ci_resource_group = client.ApiEntitiesCiResourceGroup()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | No |  |
| `id` | `int` | No |  |
| `key` | `str` | No |  |
| `process_mode` | `str` | No |  |
| `updated_at` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiEntitiesCiResourceGroup().list({"project_id": "example"})
for api_entities_ci_resource_group in results:
    print(api_entities_ci_resource_group)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesCiResourceGroup().load({"id": "api_entities_ci_resource_group_id", "project_id": "project_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ApiEntitiesCiResourceGroup().update({
    "id": "api_entities_ci_resource_group_id",
    "project_id": "project_id",
    "put_api_v4_projects_id_resource_groups_key": {},
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesCiResourceGroupEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesCiRunnerEntity

```python
api_entities_ci_runner = client.ApiEntitiesCiRunner()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_path` | `str` | No |  |
| `avatar_url` | `str` | No |  |
| `custom_attributes` | `list` | No |  |
| `id` | `int` | No |  |
| `locked` | `bool` | No |  |
| `name` | `str` | No |  |
| `public_email` | `str` | No |  |
| `state` | `str` | No |  |
| `username` | `str` | No |  |
| `web_url` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiEntitiesCiRunner().create({
    "project_id": "example_project_id",  # str
    "post_api_v4_projects_id_runner": {},  # dict
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesCiRunner().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesCiRunnerEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesCiRunnerDetailEntity

```python
api_entities_ci_runner_detail = client.ApiEntitiesCiRunnerDetail()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access_level` | `str` | No |  |
| `active` | `bool` | No |  |
| `architecture` | `str` | No |  |
| `contacted_at` | `str` | No |  |
| `created_at` | `str` | No |  |
| `created_by` | `dict` | No | API_Entities_UserBasic model |
| `description` | `str` | No |  |
| `groups` | `dict` | No | API_Entities_BasicGroupDetails model |
| `id` | `int` | No |  |
| `ip_address` | `str` | No |  |
| `is_shared` | `bool` | No |  |
| `job_execution_status` | `str` | No |  |
| `locked` | `bool` | No |  |
| `maintenance_note` | `str` | No |  |
| `maximum_timeout` | `str` | No |  |
| `name` | `str` | No |  |
| `online` | `bool` | No |  |
| `paused` | `bool` | No |  |
| `platform` | `str` | No |  |
| `projects` | `dict` | No | API_Entities_BasicProjectDetails model |
| `revision` | `str` | No |  |
| `run_untagged` | `str` | No |  |
| `runner_type` | `str` | No |  |
| `status` | `str` | No |  |
| `tag_list` | `str` | No |  |
| `version` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesCiRunnerDetail().load({"id": "api_entities_ci_runner_detail_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ApiEntitiesCiRunnerDetail().update({
    "id": "api_entities_ci_runner_detail_id",
    "put_api_v4_runners_id": {},
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesCiRunnerDetailEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesCiRunnerManagerEntity

```python
api_entities_ci_runner_manager = client.ApiEntitiesCiRunnerManager()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `architecture` | `str` | No |  |
| `contacted_at` | `str` | No |  |
| `created_at` | `str` | No |  |
| `id` | `int` | No |  |
| `ip_address` | `str` | No |  |
| `job_execution_status` | `str` | No |  |
| `platform` | `str` | No |  |
| `revision` | `str` | No |  |
| `status` | `str` | No |  |
| `system_id` | `str` | No |  |
| `version` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesCiRunnerManager().load({"runner_id": "runner_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesCiRunnerManagerEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesCiRunnerRegistrationDetailEntity

```python
api_entities_ci_runner_registration_detail = client.ApiEntitiesCiRunnerRegistrationDetail()
```

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiEntitiesCiRunnerRegistrationDetail().create({
    "post_api_v4_runner": {},  # dict
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesCiRunnerRegistrationDetailEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesCiSecureFileEntity

```python
api_entities_ci_secure_file = client.ApiEntitiesCiSecureFile()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiEntitiesCiSecureFile().create({
    "project_id": "example_project_id",  # str
    "post_api_v4_projects_id_secure_file": {},  # dict
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesCiSecureFile().load({"id": "api_entities_ci_secure_file_id", "project_id": "project_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesCiSecureFileEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesCiVariableEntity

```python
api_entities_ci_variable = client.ApiEntitiesCiVariable()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `str` | No |  |
| `environment_scope` | `str` | No |  |
| `hidden` | `bool` | No |  |
| `id` | `str` | No |  |
| `key` | `str` | No |  |
| `masked` | `bool` | No |  |
| `protected` | `bool` | No |  |
| `raw` | `bool` | No |  |
| `value` | `str` | No |  |
| `variable_type` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiEntitiesCiVariable().create({
    "group_id": "example_group_id",  # str
    "post_api_v4_groups_id_variable": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiEntitiesCiVariable().list({"pipeline_id": "example", "project_id": "example"})
for api_entities_ci_variable in results:
    print(api_entities_ci_variable)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesCiVariable().load({"id": "api_entities_ci_variable_id", "project_id": "project_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ApiEntitiesCiVariable().update({
    "id": "api_entities_ci_variable_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesCiVariableEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesClusterEntity

```python
api_entities_cluster = client.ApiEntitiesCluster()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cluster_type` | `str` | No |  |
| `created_at` | `str` | No |  |
| `domain` | `str` | No |  |
| `enabled` | `bool` | No |  |
| `environment_scope` | `str` | No |  |
| `id` | `str` | No |  |
| `managed` | `str` | No |  |
| `management_project` | `dict` | No |  |
| `name` | `str` | No |  |
| `namespace_per_environment` | `str` | No |  |
| `platform_kubernetes` | `dict` | No |  |
| `platform_type` | `str` | No |  |
| `provider_gcp` | `dict` | No |  |
| `provider_type` | `str` | No |  |
| `user` | `dict` | No | API_Entities_UserBasic model |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiEntitiesCluster().create({
    "post_api_v4_admin_clusters_add": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiEntitiesCluster().list()
for api_entities_cluster in results:
    print(api_entities_cluster)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesCluster().load({"id": "api_entities_cluster_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ApiEntitiesCluster().update({
    "id": "api_entities_cluster_id",
    "put_api_v4_admin_clusters_cluster_id": {},
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesClusterEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesClusterGroupEntity

```python
api_entities_cluster_group = client.ApiEntitiesClusterGroup()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cluster_type` | `str` | No |  |
| `created_at` | `str` | No |  |
| `domain` | `str` | No |  |
| `enabled` | `bool` | No |  |
| `environment_scope` | `str` | No |  |
| `group` | `dict` | No | API_Entities_BasicGroupDetails model |
| `id` | `str` | No |  |
| `managed` | `str` | No |  |
| `management_project` | `dict` | No |  |
| `name` | `str` | No |  |
| `namespace_per_environment` | `str` | No |  |
| `platform_kubernetes` | `dict` | No |  |
| `platform_type` | `str` | No |  |
| `provider_gcp` | `dict` | No |  |
| `provider_type` | `str` | No |  |
| `user` | `dict` | No | API_Entities_UserBasic model |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiEntitiesClusterGroup().create({
    "group_id": "example_group_id",  # str
    "post_api_v4_groups_id_clusters_user": {},  # dict
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesClusterGroup().load({"cluster_id": "cluster_id", "group_id": "group_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ApiEntitiesClusterGroup().update({
    "cluster_id": "cluster_id",
    "group_id": "group_id",
    "put_api_v4_groups_id_clusters_cluster_id": {},
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesClusterGroupEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesClusterProjectEntity

```python
api_entities_cluster_project = client.ApiEntitiesClusterProject()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cluster_type` | `str` | No |  |
| `created_at` | `str` | No |  |
| `domain` | `str` | No |  |
| `enabled` | `bool` | No |  |
| `environment_scope` | `str` | No |  |
| `id` | `str` | No |  |
| `managed` | `str` | No |  |
| `management_project` | `dict` | No |  |
| `name` | `str` | No |  |
| `namespace_per_environment` | `str` | No |  |
| `platform_kubernetes` | `dict` | No |  |
| `platform_type` | `str` | No |  |
| `project` | `dict` | No | API_Entities_BasicProjectDetails model |
| `provider_gcp` | `dict` | No |  |
| `provider_type` | `str` | No |  |
| `user` | `dict` | No | API_Entities_UserBasic model |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiEntitiesClusterProject().create({
    "project_id": "example_project_id",  # str
    "post_api_v4_projects_id_clusters_user": {},  # dict
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesClusterProject().load({"cluster_id": "cluster_id", "project_id": "project_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ApiEntitiesClusterProject().update({
    "cluster_id": "cluster_id",
    "project_id": "project_id",
    "put_api_v4_projects_id_clusters_cluster_id": {},
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesClusterProjectEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesClustersAgentEntity

```python
api_entities_clusters_agent = client.ApiEntitiesClustersAgent()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | No |  |
| `description` | `str` | No |  |
| `id` | `int` | No |  |
| `name` | `str` | No |  |
| `name_with_namespace` | `str` | No |  |
| `path` | `str` | No |  |
| `path_with_namespace` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiEntitiesClustersAgent().create({
    "project_id": "example_project_id",  # str
    "post_api_v4_projects_id_cluster_agent": {},  # dict
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesClustersAgent().load({"project_id": "project_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesClustersAgentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesClustersAgentTokenEntity

```python
api_entities_clusters_agent_token = client.ApiEntitiesClustersAgentToken()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent_id` | `str` | No |  |
| `created_at` | `str` | No |  |
| `created_by_user_id` | `str` | No |  |
| `description` | `str` | No |  |
| `id` | `str` | No |  |
| `last_used_at` | `str` | No |  |
| `name` | `str` | No |  |
| `status` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesClustersAgentToken().load({"id": "api_entities_clusters_agent_token_id", "cluster_agent_id": "cluster_agent_id", "project_id": "project_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesClustersAgentTokenEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesClustersAgentTokenBasicEntity

```python
api_entities_clusters_agent_token_basic = client.ApiEntitiesClustersAgentTokenBasic()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent_id` | `str` | No |  |
| `created_at` | `str` | No |  |
| `created_by_user_id` | `str` | No |  |
| `description` | `str` | No |  |
| `id` | `str` | No |  |
| `name` | `str` | No |  |
| `status` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesClustersAgentTokenBasic().load({"cluster_agent_id": "cluster_agent_id", "project_id": "project_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesClustersAgentTokenBasicEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesClustersAgentTokenWithTokenEntity

```python
api_entities_clusters_agent_token_with_token = client.ApiEntitiesClustersAgentTokenWithToken()
```

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiEntitiesClustersAgentTokenWithToken().create({
    "cluster_agent_id": "example_cluster_agent_id",  # str
    "project_id": "example_project_id",  # str
    "post_api_v4_projects_id_cluster_agents_agent_id_token": {},  # dict
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesClustersAgentTokenWithTokenEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesCommitEntity

```python
api_entities_commit = client.ApiEntitiesCommit()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author_email` | `str` | No |  |
| `author_name` | `str` | No |  |
| `authored_date` | `str` | No |  |
| `committed_date` | `str` | No |  |
| `committer_email` | `str` | No |  |
| `committer_name` | `str` | No |  |
| `created_at` | `str` | No |  |
| `extended_trailers` | `dict` | No |  |
| `id` | `str` | No |  |
| `message` | `str` | No |  |
| `parent_ids` | `list` | No |  |
| `short_id` | `str` | No |  |
| `title` | `str` | No |  |
| `trailers` | `dict` | No |  |
| `web_url` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiEntitiesCommit().create({
    "project_id": "example_project_id",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiEntitiesCommit().list({"project_id": "example"})
for api_entities_commit in results:
    print(api_entities_commit)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesCommitEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesCommitDetailEntity

```python
api_entities_commit_detail = client.ApiEntitiesCommitDetail()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author_email` | `str` | No |  |
| `author_name` | `str` | No |  |
| `authored_date` | `str` | No |  |
| `committed_date` | `str` | No |  |
| `committer_email` | `str` | No |  |
| `committer_name` | `str` | No |  |
| `created_at` | `str` | No |  |
| `extended_trailers` | `dict` | No |  |
| `id` | `str` | No |  |
| `last_pipeline` | `dict` | No | API_Entities_Ci_PipelineBasic model |
| `message` | `str` | No |  |
| `parent_ids` | `list` | No |  |
| `project_id` | `int` | No |  |
| `short_id` | `str` | No |  |
| `stats` | `dict` | No |  |
| `status` | `str` | No |  |
| `title` | `str` | No |  |
| `trailers` | `dict` | No |  |
| `web_url` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiEntitiesCommitDetail().create({
    "project_id": "example_project_id",  # str
    "post_api_v4_projects_id_repository_commit": {},  # dict
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesCommitDetail().load({"project_id": "project_id", "sha": "sha"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ApiEntitiesCommitDetail().update({
    "project_id": "project_id",
    "submodule": "submodule",
    "put_api_v4_projects_id_repository_submodules_submodule": {},
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesCommitDetailEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesCommitNoteEntity

```python
api_entities_commit_note = client.ApiEntitiesCommitNote()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `dict` | No | API_Entities_UserBasic model |
| `avatar_path` | `str` | No |  |
| `avatar_url` | `str` | No |  |
| `created_at` | `str` | No |  |
| `custom_attributes` | `list` | No |  |
| `id` | `int` | No |  |
| `line` | `int` | No |  |
| `line_type` | `str` | No |  |
| `locked` | `bool` | No |  |
| `name` | `str` | No |  |
| `note` | `str` | No |  |
| `path` | `str` | No |  |
| `public_email` | `str` | No |  |
| `state` | `str` | No |  |
| `username` | `str` | No |  |
| `web_url` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiEntitiesCommitNote().create({
    "project_id": "example_project_id",  # str
    "sha": "example_sha",  # Any
    "post_api_v4_projects_id_repository_commits_sha_comment": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiEntitiesCommitNote().list({"project_id": "example", "sha": "example"})
for api_entities_commit_note in results:
    print(api_entities_commit_note)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesCommitNoteEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesCommitSequenceEntity

```python
api_entities_commit_sequence = client.ApiEntitiesCommitSequence()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `int` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesCommitSequence().load({"project_id": "project_id", "sha": "sha"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesCommitSequenceEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesCommitSignatureEntity

```python
api_entities_commit_signature = client.ApiEntitiesCommitSignature()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `commit_source` | `str` | No |  |
| `signature` | `str` | No |  |
| `signature_type` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesCommitSignature().load({"project_id": "project_id", "sha": "sha"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesCommitSignatureEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesCommitStatusEntity

```python
api_entities_commit_status = client.ApiEntitiesCommitStatus()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_failure` | `bool` | No |  |
| `author` | `dict` | No | API_Entities_UserBasic model |
| `avatar_path` | `str` | No |  |
| `avatar_url` | `str` | No |  |
| `coverage` | `float` | No |  |
| `created_at` | `str` | No |  |
| `custom_attributes` | `list` | No |  |
| `description` | `str` | No |  |
| `finished_at` | `str` | No |  |
| `id` | `int` | No |  |
| `locked` | `bool` | No |  |
| `name` | `str` | No |  |
| `pipeline_id` | `int` | No |  |
| `public_email` | `str` | No |  |
| `ref` | `str` | No |  |
| `sha` | `str` | No |  |
| `started_at` | `str` | No |  |
| `state` | `str` | No |  |
| `status` | `str` | No |  |
| `target_url` | `str` | No |  |
| `username` | `str` | No |  |
| `web_url` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiEntitiesCommitStatus().create({
    "id": "example_id",  # str
    "project_id": "example_project_id",  # str
    "post_api_v4_projects_id_statuses_sha": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiEntitiesCommitStatus().list({"project_id": "example", "sha": "example"})
for api_entities_commit_status in results:
    print(api_entities_commit_status)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesCommitStatusEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesCompareEntity

```python
api_entities_compare = client.ApiEntitiesCompare()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `commit` | `dict` | No | API_Entities_Commit model |
| `commits` | `list` | No |  |
| `compare_same_ref` | `bool` | No |  |
| `compare_timeout` | `bool` | No |  |
| `diffs` | `list` | No |  |
| `web_url` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiEntitiesCompare().list({"project_id": "example", "from": "example", "to": "example"})
for api_entities_compare in results:
    print(api_entities_compare)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesCompareEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesContainerRegistryRepositoryEntity

```python
api_entities_container_registry_repository = client.ApiEntitiesContainerRegistryRepository()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cleanup_policy_started_at` | `str` | No |  |
| `created_at` | `str` | No |  |
| `delete_api_path` | `str` | No |  |
| `id` | `int` | No |  |
| `location` | `str` | No |  |
| `name` | `str` | No |  |
| `path` | `str` | No |  |
| `project_id` | `int` | No |  |
| `size` | `int` | No |  |
| `status` | `str` | No |  |
| `tags` | `dict` | No | API_Entities_ContainerRegistry_Tag model |
| `tags_count` | `int` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiEntitiesContainerRegistryRepository().list({"project_id": "example"})
for api_entities_container_registry_repository in results:
    print(api_entities_container_registry_repository)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesContainerRegistryRepository().load({"id": "api_entities_container_registry_repository_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesContainerRegistryRepositoryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesContainerRegistryTagEntity

```python
api_entities_container_registry_tag = client.ApiEntitiesContainerRegistryTag()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `location` | `str` | No |  |
| `name` | `str` | No |  |
| `path` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiEntitiesContainerRegistryTag().list({"project_id": "example", "repository_id": "example"})
for api_entities_container_registry_tag in results:
    print(api_entities_container_registry_tag)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesContainerRegistryTagEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesContainerRegistryTagDetailEntity

```python
api_entities_container_registry_tag_detail = client.ApiEntitiesContainerRegistryTagDetail()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | No |  |
| `digest` | `str` | No |  |
| `location` | `str` | No |  |
| `name` | `str` | No |  |
| `path` | `str` | No |  |
| `revision` | `str` | No |  |
| `short_revision` | `str` | No |  |
| `total_size` | `int` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesContainerRegistryTagDetail().load({"project_id": "project_id", "repository_id": "repository_id", "tag_name": "tag_name"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesContainerRegistryTagDetailEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesContributorEntity

```python
api_entities_contributor = client.ApiEntitiesContributor()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `additions` | `int` | No |  |
| `commits` | `int` | No |  |
| `deletions` | `int` | No |  |
| `email` | `str` | No |  |
| `name` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesContributor().load({"project_id": "project_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesContributorEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesDeployKeyEntity

```python
api_entities_deploy_key = client.ApiEntitiesDeployKey()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | No |  |
| `expires_at` | `str` | No |  |
| `fingerprint` | `str` | No |  |
| `fingerprint_sha256` | `str` | No |  |
| `id` | `int` | No |  |
| `key` | `str` | No |  |
| `last_used_at` | `str` | No |  |
| `projects_with_readonly_access` | `dict` | No |  |
| `projects_with_write_access` | `dict` | No |  |
| `title` | `str` | No |  |
| `usage_type` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiEntitiesDeployKey().create({
    "post_api_v4_deploy_key": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiEntitiesDeployKey().list()
for api_entities_deploy_key in results:
    print(api_entities_deploy_key)
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ApiEntitiesDeployKey().update({
    "id": "id",
    "project_id": "project_id",
    "put_api_v4_projects_id_deploy_keys_key_id": {},
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesDeployKeyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesDeployKeysProjectEntity

```python
api_entities_deploy_keys_project = client.ApiEntitiesDeployKeysProject()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `can_push` | `bool` | No |  |
| `created_at` | `str` | No |  |
| `expires_at` | `str` | No |  |
| `fingerprint` | `str` | No |  |
| `fingerprint_sha256` | `str` | No |  |
| `id` | `int` | No |  |
| `key` | `str` | No |  |
| `last_used_at` | `str` | No |  |
| `projects_with_readonly_access` | `dict` | No |  |
| `projects_with_write_access` | `dict` | No |  |
| `title` | `str` | No |  |
| `usage_type` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiEntitiesDeployKeysProject().create({
    "project_id": "example_project_id",  # str
    "post_api_v4_projects_id_deploy_key": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiEntitiesDeployKeysProject().list({"project_id": "example"})
for api_entities_deploy_keys_project in results:
    print(api_entities_deploy_keys_project)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesDeployKeysProject().load({"key_id": "key_id", "project_id": "project_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesDeployKeysProjectEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesDeployTokenEntity

```python
api_entities_deploy_token = client.ApiEntitiesDeployToken()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `expired` | `bool` | No |  |
| `expires_at` | `str` | No |  |
| `id` | `int` | No |  |
| `name` | `str` | No |  |
| `revoked` | `bool` | No |  |
| `scopes` | `list` | No |  |
| `username` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiEntitiesDeployToken().list()
for api_entities_deploy_token in results:
    print(api_entities_deploy_token)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesDeployToken().load({"id": "api_entities_deploy_token_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesDeployTokenEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesDeployTokenWithTokenEntity

```python
api_entities_deploy_token_with_token = client.ApiEntitiesDeployTokenWithToken()
```

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiEntitiesDeployTokenWithToken().create({
    "group_id": "example_group_id",  # str
    "post_api_v4_groups_id_deploy_token": {},  # dict
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesDeployTokenWithTokenEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesDeploymentEntity

```python
api_entities_deployment = client.ApiEntitiesDeployment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | No |  |
| `deployable` | `dict` | No | API_Entities_Ci_Job model |
| `environment` | `dict` | No | API_Entities_EnvironmentBasic model |
| `id` | `int` | No |  |
| `iid` | `int` | No |  |
| `ref` | `str` | No |  |
| `sha` | `str` | No |  |
| `status` | `str` | No |  |
| `updated_at` | `str` | No |  |
| `user` | `dict` | No | API_Entities_UserBasic model |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiEntitiesDeployment().list({"project_id": "example"})
for api_entities_deployment in results:
    print(api_entities_deployment)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesDeploymentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesDeploymentExtendedEntity

```python
api_entities_deployment_extended = client.ApiEntitiesDeploymentExtended()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `approval_summary` | `dict` | No |  |
| `approvals` | `dict` | No | API_Entities_Deployments_Approval model |
| `created_at` | `str` | No |  |
| `deployable` | `dict` | No | API_Entities_Ci_Job model |
| `environment` | `dict` | No | API_Entities_EnvironmentBasic model |
| `id` | `int` | No |  |
| `iid` | `int` | No |  |
| `pending_approval_count` | `int` | No |  |
| `ref` | `str` | No |  |
| `sha` | `str` | No |  |
| `status` | `str` | No |  |
| `updated_at` | `str` | No |  |
| `user` | `dict` | No | API_Entities_UserBasic model |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiEntitiesDeploymentExtended().create({
    "project_id": "example_project_id",  # str
    "post_api_v4_projects_id_deployment": {},  # dict
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesDeploymentExtended().load({"deployment_id": "deployment_id", "project_id": "project_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ApiEntitiesDeploymentExtended().update({
    "deployment_id": "deployment_id",
    "project_id": "project_id",
    "put_api_v4_projects_id_deployments_deployment_id": {},
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesDeploymentExtendedEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesDeploymentsApprovalEntity

```python
api_entities_deployments_approval = client.ApiEntitiesDeploymentsApproval()
```

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiEntitiesDeploymentsApproval().create({
    "deployment_id": "example_deployment_id",  # str
    "project_id": "example_project_id",  # str
    "post_api_v4_projects_id_deployments_deployment_id_approval": {},  # dict
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesDeploymentsApprovalEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesDictionaryTableEntity

```python
api_entities_dictionary_table = client.ApiEntitiesDictionaryTable()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `feature_categories` | `list` | No |  |
| `id` | `str` | No |  |
| `table_name` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesDictionaryTable().load({"id": "api_entities_dictionary_table_id", "databas_id": "databas_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesDictionaryTableEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesDiffEntity

```python
api_entities_diff = client.ApiEntitiesDiff()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `a_mode` | `str` | No |  |
| `b_mode` | `str` | No |  |
| `collapsed` | `bool` | No |  |
| `deleted_file` | `bool` | No |  |
| `diff` | `str` | No |  |
| `generated_file` | `bool` | No |  |
| `new_file` | `bool` | No |  |
| `new_path` | `str` | No |  |
| `old_path` | `str` | No |  |
| `renamed_file` | `bool` | No |  |
| `too_large` | `bool` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiEntitiesDiff().list({"project_id": "example", "sha": "example"})
for api_entities_diff in results:
    print(api_entities_diff)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesDiff().load({"merge_request_id": "merge_request_id", "project_id": "project_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesDiffEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesDiscoveredClusterEntity

```python
api_entities_discovered_cluster = client.ApiEntitiesDiscoveredCluster()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `groups` | `str` | No |  |
| `projects` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesDiscoveredCluster().load({"group_id": "group_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesDiscoveredClusterEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesDraftNoteEntity

```python
api_entities_draft_note = client.ApiEntitiesDraftNote()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author_id` | `int` | No |  |
| `commit_id` | `int` | No |  |
| `discussion_id` | `int` | No |  |
| `id` | `int` | No |  |
| `line_code` | `str` | No |  |
| `merge_request_id` | `int` | No |  |
| `note` | `str` | No |  |
| `position` | `dict` | No |  |
| `resolve_discussion` | `bool` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiEntitiesDraftNote().create({
    "merge_request_id": "example_merge_request_id",  # str
    "project_id": "example_project_id",  # str
    "post_api_v4_projects_id_merge_requests_merge_request_iid_draft_note": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiEntitiesDraftNote().list({"merge_request_id": "example", "project_id": "example"})
for api_entities_draft_note in results:
    print(api_entities_draft_note)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesDraftNote().load({"id": "api_entities_draft_note_id", "merge_request_id": "merge_request_id", "project_id": "project_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ApiEntitiesDraftNote().update({
    "id": "api_entities_draft_note_id",
    "merge_request_id": "merge_request_id",
    "project_id": "project_id",
    "put_api_v4_projects_id_merge_requests_merge_request_iid_draft_notes_draft_note_id": {},
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesDraftNoteEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesEnvironmentEntity

```python
api_entities_environment = client.ApiEntitiesEnvironment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auto_stop_at` | `str` | No |  |
| `auto_stop_setting` | `str` | No |  |
| `cluster_agent` | `dict` | No | API_Entities_Clusters_Agent model |
| `created_at` | `str` | No |  |
| `description` | `str` | No |  |
| `external_url` | `str` | No |  |
| `flux_resource_path` | `str` | No |  |
| `id` | `int` | No |  |
| `kubernetes_namespace` | `str` | No |  |
| `last_deployment` | `dict` | No | API_Entities_Deployment model |
| `name` | `str` | No |  |
| `project` | `dict` | No | API_Entities_BasicProjectDetails model |
| `slug` | `str` | No |  |
| `state` | `str` | No |  |
| `tier` | `str` | No |  |
| `updated_at` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiEntitiesEnvironment().create({
    "project_id": "example_project_id",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiEntitiesEnvironment().list({"project_id": "example"})
for api_entities_environment in results:
    print(api_entities_environment)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesEnvironment().load({"id": "api_entities_environment_id", "project_id": "project_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ApiEntitiesEnvironment().update({
    "id": "api_entities_environment_id",
    "project_id": "project_id",
    "put_api_v4_projects_id_environments_environment_id": {},
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesEnvironmentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesErrorTrackingClientKeyEntity

```python
api_entities_error_tracking_client_key = client.ApiEntitiesErrorTrackingClientKey()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | No |  |
| `id` | `int` | No |  |
| `public_key` | `str` | No |  |
| `sentry_dsn` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiEntitiesErrorTrackingClientKey().create({
    "project_id": "example_project_id",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiEntitiesErrorTrackingClientKey().list({"project_id": "example"})
for api_entities_error_tracking_client_key in results:
    print(api_entities_error_tracking_client_key)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesErrorTrackingClientKeyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesErrorTrackingProjectSettingEntity

```python
api_entities_error_tracking_project_setting = client.ApiEntitiesErrorTrackingProjectSetting()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | No |  |
| `api_url` | `str` | No |  |
| `integrated` | `bool` | No |  |
| `project_name` | `str` | No |  |
| `sentry_external_url` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesErrorTrackingProjectSetting().load({"project_id": "project_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ApiEntitiesErrorTrackingProjectSetting().update({
    "project_id": "project_id",
    "put_api_v4_projects_id_error_tracking_setting": {},
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesErrorTrackingProjectSettingEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesEventEntity

```python
api_entities_event = client.ApiEntitiesEvent()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action_name` | `str` | No |  |
| `author` | `dict` | No | API_Entities_UserBasic model |
| `author_id` | `int` | No |  |
| `author_username` | `str` | No |  |
| `created_at` | `str` | No |  |
| `id` | `int` | No |  |
| `imported` | `bool` | No |  |
| `imported_from` | `str` | No |  |
| `note` | `dict` | No |  |
| `project_id` | `int` | No |  |
| `push_data` | `dict` | No |  |
| `target_id` | `int` | No |  |
| `target_iid` | `int` | No |  |
| `target_title` | `str` | No |  |
| `target_type` | `str` | No |  |
| `wiki_page` | `dict` | No | API_Entities_WikiPageBasic model |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiEntitiesEvent().list()
for api_entities_event in results:
    print(api_entities_event)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesEvent().load({"project_id": "project_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesEventEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesFeatureEntity

```python
api_entities_feature = client.ApiEntitiesFeature()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `definition` | `dict` | No | API_Entities_Feature_Definition model |
| `gates` | `dict` | No |  |
| `id` | `str` | No |  |
| `name` | `str` | No |  |
| `state` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiEntitiesFeature().create({
    "id": "example_id",  # str
    "post_api_v4_features_name": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiEntitiesFeature().list()
for api_entities_feature in results:
    print(api_entities_feature)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesFeatureEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesFeatureDefinitionEntity

```python
api_entities_feature_definition = client.ApiEntitiesFeatureDefinition()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `default_enabled` | `str` | No |  |
| `feature_issue_url` | `str` | No |  |
| `group` | `str` | No |  |
| `intended_to_rollout_by` | `str` | No |  |
| `introduced_by_url` | `str` | No |  |
| `log_state_changes` | `str` | No |  |
| `milestone` | `str` | No |  |
| `name` | `str` | No |  |
| `rollout_issue_url` | `str` | No |  |
| `type` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiEntitiesFeatureDefinition().list()
for api_entities_feature_definition in results:
    print(api_entities_feature_definition)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesFeatureDefinitionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesFeatureFlagEntity

```python
api_entities_feature_flag = client.ApiEntitiesFeatureFlag()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | No |  |
| `created_at` | `str` | No |  |
| `description` | `str` | No |  |
| `id` | `int` | No |  |
| `name` | `str` | No |  |
| `parameters` | `str` | No |  |
| `scopes` | `dict` | No |  |
| `strategies` | `dict` | No |  |
| `updated_at` | `str` | No |  |
| `user_list` | `dict` | No |  |
| `version` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiEntitiesFeatureFlag().create({
    "project_id": "example_project_id",  # str
    "post_api_v4_projects_id_feature_flag": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiEntitiesFeatureFlag().list({"project_id": "example"})
for api_entities_feature_flag in results:
    print(api_entities_feature_flag)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesFeatureFlag().load({"id": "api_entities_feature_flag_id", "project_id": "project_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ApiEntitiesFeatureFlag().update({
    "id": "api_entities_feature_flag_id",
    "project_id": "project_id",
    "put_api_v4_projects_id_feature_flags_feature_flag_name": {},
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesFeatureFlagEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesFeatureFlagUserListEntity

```python
api_entities_feature_flag_user_list = client.ApiEntitiesFeatureFlagUserList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | No |  |
| `edit_path` | `str` | No |  |
| `id` | `int` | No |  |
| `iid` | `int` | No |  |
| `name` | `str` | No |  |
| `path` | `str` | No |  |
| `project_id` | `int` | No |  |
| `updated_at` | `str` | No |  |
| `user_xids` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiEntitiesFeatureFlagUserList().create({
    "project_id": "example_project_id",  # str
    "post_api_v4_projects_id_feature_flags_user_list": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiEntitiesFeatureFlagUserList().list({"project_id": "example"})
for api_entities_feature_flag_user_list in results:
    print(api_entities_feature_flag_user_list)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesFeatureFlagUserList().load({"iid": "iid", "project_id": "project_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ApiEntitiesFeatureFlagUserList().update({
    "iid": "iid",
    "project_id": "project_id",
    "put_api_v4_projects_id_feature_flags_user_lists_iid": {},
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesFeatureFlagUserListEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesFreezePeriodEntity

```python
api_entities_freeze_period = client.ApiEntitiesFreezePeriod()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | No |  |
| `cron_timezone` | `str` | No |  |
| `freeze_end` | `str` | No |  |
| `freeze_start` | `str` | No |  |
| `id` | `int` | No |  |
| `updated_at` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiEntitiesFreezePeriod().create({
    "project_id": "example_project_id",  # str
    "post_api_v4_projects_id_freeze_period": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiEntitiesFreezePeriod().list({"project_id": "example"})
for api_entities_freeze_period in results:
    print(api_entities_freeze_period)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesFreezePeriod().load({"id": "api_entities_freeze_period_id", "project_id": "project_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ApiEntitiesFreezePeriod().update({
    "id": "api_entities_freeze_period_id",
    "project_id": "project_id",
    "put_api_v4_projects_id_freeze_periods_freeze_period_id": {},
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesFreezePeriodEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesGitlabSubscriptionEntity

```python
api_entities_gitlab_subscription = client.ApiEntitiesGitlabSubscription()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `billing` | `dict` | No |  |
| `plan` | `dict` | No |  |
| `usage` | `dict` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesGitlabSubscription().load({"namespace_id": "namespace_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesGitlabSubscriptionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesGoModuleVersionEntity

```python
api_entities_go_module_version = client.ApiEntitiesGoModuleVersion()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `Time` | `str` | No |  |
| `Version` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesGoModuleVersion().load({"module_version": "module_version", "project_id": "project_id", "module_name": "module_name"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesGoModuleVersionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesGroupEntity

```python
api_entities_group = client.ApiEntitiesGroup()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `bool` | No |  |
| `auto_devops_enabled` | `str` | No |  |
| `auto_duo_code_review_enabled` | `str` | No |  |
| `avatar_url` | `str` | No |  |
| `created_at` | `str` | No |  |
| `custom_attributes` | `dict` | No | API_Entities_CustomAttribute model |
| `default_branch` | `str` | No |  |
| `default_branch_protection` | `str` | No |  |
| `default_branch_protection_defaults` | `str` | No |  |
| `description` | `str` | No |  |
| `duo_core_features_enabled` | `bool` | No | [Experimental] Indicates whether GitLab Duo Core features are enabled for the group |
| `duo_features_enabled` | `str` | No |  |
| `emails_disabled` | `bool` | No |  |
| `emails_enabled` | `bool` | No |  |
| `file_template_project_id` | `str` | No |  |
| `full_name` | `str` | No |  |
| `full_path` | `str` | No |  |
| `id` | `str` | No |  |
| `ldap_access` | `str` | No |  |
| `ldap_cn` | `str` | No |  |
| `ldap_group_links` | `dict` | No |  |
| `lfs_enabled` | `str` | No |  |
| `lock_duo_features_enabled` | `str` | No |  |
| `lock_math_rendering_limits_enabled` | `bool` | No |  |
| `marked_for_deletion_on` | `str` | No |  |
| `math_rendering_limits_enabled` | `bool` | No |  |
| `max_artifacts_size` | `int` | No |  |
| `mentions_disabled` | `str` | No |  |
| `name` | `str` | No |  |
| `organization_id` | `str` | No |  |
| `parent_id` | `str` | No |  |
| `path` | `str` | No |  |
| `project_creation_level` | `str` | No |  |
| `repository_storage` | `str` | No |  |
| `request_access_enabled` | `str` | No |  |
| `require_two_factor_authentication` | `str` | No |  |
| `root_storage_statistics` | `dict` | No |  |
| `saml_group_links` | `dict` | No |  |
| `share_with_group_lock` | `str` | No |  |
| `shared_runners_setting` | `str` | No |  |
| `show_diff_preview_in_email` | `bool` | No |  |
| `statistics` | `dict` | No |  |
| `subgroup_creation_level` | `str` | No |  |
| `two_factor_grace_period` | `str` | No |  |
| `visibility` | `str` | No |  |
| `web_based_commit_signing_enabled` | `str` | No |  |
| `web_url` | `str` | No |  |
| `wiki_access_level` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiEntitiesGroup().create({
    "post_api_v4_group": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiEntitiesGroup().list()
for api_entities_group in results:
    print(api_entities_group)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesGroup().load({"project_id": "project_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ApiEntitiesGroup().update({
    "id": "id",
    "put_api_v4_groups_id": {},
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesGroupEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesGroupDetailEntity

```python
api_entities_group_detail = client.ApiEntitiesGroupDetail()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowed_email_domains_list` | `str` | No |  |
| `archived` | `bool` | No |  |
| `auto_ban_user_on_excessive_projects_download` | `str` | No |  |
| `auto_devops_enabled` | `str` | No |  |
| `auto_duo_code_review_enabled` | `str` | No |  |
| `avatar_url` | `str` | No |  |
| `created_at` | `str` | No |  |
| `custom_attributes` | `dict` | No | API_Entities_CustomAttribute model |
| `default_branch` | `str` | No |  |
| `default_branch_protection` | `str` | No |  |
| `default_branch_protection_defaults` | `str` | No |  |
| `description` | `str` | No |  |
| `duo_core_features_enabled` | `bool` | No | [Experimental] Indicates whether GitLab Duo Core features are enabled for the group |
| `duo_features_enabled` | `str` | No |  |
| `emails_disabled` | `bool` | No |  |
| `emails_enabled` | `bool` | No |  |
| `enabled_git_access_protocol` | `str` | No |  |
| `extra_shared_runners_minutes_limit` | `str` | No |  |
| `file_template_project_id` | `str` | No |  |
| `full_name` | `str` | No |  |
| `full_path` | `str` | No |  |
| `id` | `str` | No |  |
| `ip_restriction_ranges` | `str` | No |  |
| `ldap_access` | `str` | No |  |
| `ldap_cn` | `str` | No |  |
| `ldap_group_links` | `dict` | No |  |
| `lfs_enabled` | `str` | No |  |
| `lock_duo_features_enabled` | `str` | No |  |
| `lock_math_rendering_limits_enabled` | `bool` | No |  |
| `marked_for_deletion_on` | `str` | No |  |
| `math_rendering_limits_enabled` | `bool` | No |  |
| `max_artifacts_size` | `int` | No |  |
| `membership_lock` | `str` | No |  |
| `mentions_disabled` | `str` | No |  |
| `name` | `str` | No |  |
| `organization_id` | `str` | No |  |
| `parent_id` | `str` | No |  |
| `path` | `str` | No |  |
| `prevent_forking_outside_group` | `str` | No |  |
| `prevent_sharing_groups_outside_hierarchy` | `str` | No |  |
| `project_creation_level` | `str` | No |  |
| `projects` | `dict` | No | API_Entities_Project model |
| `repository_storage` | `str` | No |  |
| `request_access_enabled` | `str` | No |  |
| `require_two_factor_authentication` | `str` | No |  |
| `root_storage_statistics` | `dict` | No |  |
| `runners_token` | `str` | No |  |
| `saml_group_links` | `dict` | No |  |
| `service_access_tokens_expiration_enforced` | `str` | No |  |
| `share_with_group_lock` | `str` | No |  |
| `shared_projects` | `dict` | No | API_Entities_Project model |
| `shared_runners_minutes_limit` | `str` | No |  |
| `shared_runners_setting` | `str` | No |  |
| `shared_with_groups` | `str` | No |  |
| `show_diff_preview_in_email` | `bool` | No |  |
| `statistics` | `dict` | No |  |
| `subgroup_creation_level` | `str` | No |  |
| `two_factor_grace_period` | `str` | No |  |
| `unique_project_download_limit` | `str` | No |  |
| `unique_project_download_limit_alertlist` | `str` | No |  |
| `unique_project_download_limit_allowlist` | `str` | No |  |
| `unique_project_download_limit_interval_in_seconds` | `str` | No |  |
| `visibility` | `str` | No |  |
| `web_based_commit_signing_enabled` | `str` | No |  |
| `web_url` | `str` | No |  |
| `wiki_access_level` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiEntitiesGroupDetail().create({
    "group_id": "example_group_id",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesGroupDetail().load({"id": "api_entities_group_detail_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesGroupDetailEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesHookEntity

```python
api_entities_hook = client.ApiEntitiesHook()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert_status` | `Any` | No |  |
| `branch_filter_strategy` | `str` | No |  |
| `created_at` | `str` | No |  |
| `custom_headers` | `list` | No |  |
| `custom_webhook_template` | `str` | No |  |
| `description` | `str` | No |  |
| `disabled_until` | `str` | No |  |
| `enable_ssl_verification` | `bool` | No |  |
| `id` | `str` | No |  |
| `merge_requests_events` | `bool` | No |  |
| `name` | `str` | No |  |
| `push_events` | `bool` | No |  |
| `push_events_branch_filter` | `str` | No |  |
| `repository_update_events` | `bool` | No |  |
| `tag_push_events` | `bool` | No |  |
| `url` | `str` | No |  |
| `url_variables` | `list` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiEntitiesHook().create({
    "post_api_v4_hook": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiEntitiesHook().list()
for api_entities_hook in results:
    print(api_entities_hook)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesHook().load({"id": "api_entities_hook_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ApiEntitiesHook().update({
    "id": "api_entities_hook_id",
    "put_api_v4_hooks_hook_id": {},
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesHookEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesIntegrationEntity

```python
api_entities_integration = client.ApiEntitiesIntegration()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesIntegration().load({"id": "api_entities_integration_id", "group_id": "group_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesIntegrationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesIntegrationBasicEntity

```python
api_entities_integration_basic = client.ApiEntitiesIntegrationBasic()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | No |  |
| `alert_events` | `bool` | No |  |
| `comment_on_event_enabled` | `bool` | No |  |
| `commit_events` | `bool` | No |  |
| `confidential_issues_events` | `bool` | No |  |
| `confidential_note_events` | `bool` | No |  |
| `created_at` | `str` | No |  |
| `deployment_events` | `bool` | No |  |
| `id` | `int` | No |  |
| `incident_events` | `bool` | No |  |
| `inherited` | `bool` | No |  |
| `issues_events` | `bool` | No |  |
| `job_events` | `bool` | No |  |
| `merge_requests_events` | `bool` | No |  |
| `note_events` | `bool` | No |  |
| `pipeline_events` | `bool` | No |  |
| `push_events` | `bool` | No |  |
| `slug` | `int` | No |  |
| `tag_push_events` | `bool` | No |  |
| `title` | `str` | No |  |
| `updated_at` | `str` | No |  |
| `vulnerability_events` | `bool` | No |  |
| `wiki_page_events` | `bool` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiEntitiesIntegrationBasic().list({"group_id": "example"})
for api_entities_integration_basic in results:
    print(api_entities_integration_basic)
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ApiEntitiesIntegrationBasic().update({
    "group_id": "group_id",
    "put_api_v4_groups_id_integrations_apple_app_store": {},
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesIntegrationBasicEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesInvitationEntity

```python
api_entities_invitation = client.ApiEntitiesInvitation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access_level` | `str` | No |  |
| `created_at` | `str` | No |  |
| `created_by_name` | `str` | No |  |
| `expires_at` | `str` | No |  |
| `id` | `str` | No |  |
| `invite_email` | `str` | No |  |
| `invite_token` | `str` | No |  |
| `user_name` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiEntitiesInvitation().create({
    "group_id": "example_group_id",  # str
    "post_api_v4_groups_id_invitation": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiEntitiesInvitation().list({"group_id": "example"})
for api_entities_invitation in results:
    print(api_entities_invitation)
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ApiEntitiesInvitation().update({
    "id": "id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesInvitationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesIssuableTimeStatEntity

```python
api_entities_issuable_time_stat = client.ApiEntitiesIssuableTimeStat()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `human_time_estimate` | `str` | No |  |
| `human_total_time_spent` | `str` | No |  |
| `time_estimate` | `int` | No |  |
| `total_time_spent` | `int` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiEntitiesIssuableTimeStat().create({
    "project_id": "example_project_id",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesIssuableTimeStat().load({"project_id": "project_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesIssuableTimeStatEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesIssueEntity

```python
api_entities_issue = client.ApiEntitiesIssue()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assignee` | `dict` | No | API_Entities_UserBasic model |
| `assignees` | `dict` | No | API_Entities_UserBasic model |
| `author` | `dict` | No | API_Entities_UserBasic model |
| `blocking_issues_count` | `str` | No |  |
| `closed_at` | `str` | No |  |
| `closed_by` | `dict` | No | API_Entities_UserBasic model |
| `confidential` | `bool` | No |  |
| `created_at` | `str` | No |  |
| `description` | `str` | No |  |
| `discussion_locked` | `bool` | No |  |
| `downvotes` | `str` | No |  |
| `due_date` | `str` | No |  |
| `epic` | `dict` | No |  |
| `epic_iid` | `str` | No |  |
| `has_tasks` | `bool` | No |  |
| `health_status` | `str` | No |  |
| `id` | `int` | No |  |
| `iid` | `int` | No |  |
| `imported` | `str` | No |  |
| `imported_from` | `str` | No |  |
| `issue_type` | `str` | No |  |
| `iteration` | `dict` | No |  |
| `labels` | `list` | No |  |
| `links` | `dict` | No |  |
| `merge_requests_count` | `str` | No |  |
| `milestone` | `dict` | No |  |
| `moved_to_id` | `str` | No |  |
| `project_id` | `int` | No |  |
| `references` | `dict` | No |  |
| `service_desk_reply_to` | `str` | No |  |
| `severity` | `str` | No | One of ["UNKNOWN", "LOW", "MEDIUM", "HIGH", "CRITICAL"] |
| `state` | `str` | No |  |
| `subscribed` | `str` | No |  |
| `task_completion_status` | `str` | No |  |
| `task_status` | `str` | No |  |
| `time_stats` | `dict` | No | API_Entities_IssuableTimeStats model |
| `title` | `str` | No |  |
| `type` | `str` | No | One of ["ISSUE", "INCIDENT", "TEST_CASE", "REQUIREMENT", "TASK", "TICKET"] |
| `updated_at` | `str` | No |  |
| `upvotes` | `str` | No |  |
| `user_notes_count` | `str` | No |  |
| `web_url` | `str` | No |  |
| `weight` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiEntitiesIssue().create({
    "project_id": "example_project_id",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiEntitiesIssue().list()
for api_entities_issue in results:
    print(api_entities_issue)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesIssue().load({"id": "api_entities_issue_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ApiEntitiesIssue().update({
    "id": "api_entities_issue_id",
    "project_id": "project_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesIssueEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesIssueLinkEntity

```python
api_entities_issue_link = client.ApiEntitiesIssueLink()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |
| `link_type` | `str` | No |  |
| `source_issue` | `dict` | No |  |
| `target_issue` | `dict` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiEntitiesIssueLink().create({
    "issue_id": "example_issue_id",  # str
    "project_id": "example_project_id",  # str
    "post_api_v4_projects_id_issues_issue_iid_link": {},  # dict
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesIssueLink().load({"id": "api_entities_issue_link_id", "issue_id": "issue_id", "project_id": "project_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesIssueLinkEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesLicenseEntity

```python
api_entities_license = client.ApiEntitiesLicense()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `conditions` | `list` | No |  |
| `content` | `str` | No |  |
| `description` | `str` | No |  |
| `html_url` | `str` | No |  |
| `id` | `str` | No |  |
| `key` | `str` | No |  |
| `limitations` | `list` | No |  |
| `name` | `str` | No |  |
| `nickname` | `str` | No |  |
| `permissions` | `list` | No |  |
| `popular` | `bool` | No |  |
| `source_url` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesLicense().load({"id": "api_entities_license_id", "name": "name", "type": "type"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesLicenseEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesMarkdownEntity

```python
api_entities_markdown = client.ApiEntitiesMarkdown()
```

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiEntitiesMarkdown().create({
    "post_api_v4_markdown": {},  # dict
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesMarkdownEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesMarkdownUploadAdminEntity

```python
api_entities_markdown_upload_admin = client.ApiEntitiesMarkdownUploadAdmin()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | No |  |
| `filename` | `str` | No |  |
| `id` | `str` | No |  |
| `size` | `str` | No |  |
| `uploaded_by` | `dict` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiEntitiesMarkdownUploadAdmin().list({"group_id": "example"})
for api_entities_markdown_upload_admin in results:
    print(api_entities_markdown_upload_admin)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesMarkdownUploadAdminEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesMemberEntity

```python
api_entities_member = client.ApiEntitiesMember()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access_level` | `str` | No |  |
| `avatar_path` | `str` | No |  |
| `avatar_url` | `str` | No |  |
| `created_at` | `str` | No |  |
| `created_by` | `dict` | No | API_Entities_UserBasic model |
| `custom_attributes` | `list` | No |  |
| `email` | `str` | No |  |
| `expires_at` | `str` | No |  |
| `group_saml_identity` | `dict` | No |  |
| `group_scim_identity` | `dict` | No |  |
| `id` | `int` | No |  |
| `is_using_seat` | `bool` | No |  |
| `key` | `str` | No |  |
| `locked` | `bool` | No |  |
| `member_role` | `dict` | No |  |
| `membership_state` | `str` | No |  |
| `name` | `str` | No |  |
| `override` | `str` | No |  |
| `public_email` | `str` | No |  |
| `state` | `str` | No |  |
| `username` | `str` | No |  |
| `value` | `str` | No |  |
| `web_url` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiEntitiesMember().create({
    "group_id": "example_group_id",  # str
    "post_api_v4_groups_id_member": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiEntitiesMember().list({"group_id": "example"})
for api_entities_member in results:
    print(api_entities_member)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesMember().load({"id": "api_entities_member_id", "group_id": "group_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.ApiEntitiesMember().remove({"group_id": "group_id", "member_id": "member_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ApiEntitiesMember().update({
    "id": "api_entities_member_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesMemberEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesMergeEntity

```python
api_entities_merge = client.ApiEntitiesMerge()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_collaboration` | `bool` | No |  |
| `allow_maintainer_to_push` | `bool` | No |  |
| `approvals_before_merge` | `str` | No |  |
| `assignee` | `dict` | No | API_Entities_UserBasic model |
| `assignees` | `dict` | No | API_Entities_UserBasic model |
| `author` | `dict` | No | API_Entities_UserBasic model |
| `blocking_discussions_resolved` | `str` | No |  |
| `changes_count` | `str` | No |  |
| `closed_at` | `str` | No |  |
| `closed_by` | `dict` | No | API_Entities_UserBasic model |
| `created_at` | `str` | No |  |
| `description` | `str` | No |  |
| `description_html` | `str` | No |  |
| `detailed_merge_status` | `str` | No |  |
| `diff_refs` | `dict` | No |  |
| `discussion_locked` | `str` | No |  |
| `diverged_commits_count` | `str` | No |  |
| `downvotes` | `str` | No |  |
| `draft` | `str` | No |  |
| `first_contribution` | `str` | No |  |
| `first_deployed_to_production_at` | `str` | No |  |
| `force_remove_source_branch` | `str` | No |  |
| `has_conflicts` | `bool` | No |  |
| `head_pipeline` | `dict` | No | API_Entities_Ci_Pipeline model |
| `id` | `int` | No |  |
| `iid` | `int` | No |  |
| `imported` | `str` | No |  |
| `imported_from` | `str` | No |  |
| `labels` | `str` | No |  |
| `latest_build_finished_at` | `str` | No |  |
| `latest_build_started_at` | `str` | No |  |
| `merge_after` | `str` | No |  |
| `merge_commit_sha` | `str` | No |  |
| `merge_error` | `str` | No |  |
| `merge_status` | `str` | No |  |
| `merge_user` | `dict` | No | API_Entities_UserBasic model |
| `merge_when_pipeline_succeeds` | `str` | No |  |
| `merged_at` | `str` | No |  |
| `merged_by` | `dict` | No | API_Entities_UserBasic model |
| `milestone` | `dict` | No |  |
| `pipeline` | `dict` | No | API_Entities_Ci_PipelineBasic model |
| `prepared_at` | `str` | No |  |
| `project_id` | `int` | No |  |
| `rebase_in_progress` | `str` | No |  |
| `reference` | `str` | No |  |
| `references` | `dict` | No |  |
| `reviewers` | `dict` | No | API_Entities_UserBasic model |
| `sha` | `str` | No |  |
| `should_remove_source_branch` | `bool` | No |  |
| `source_branch` | `str` | No |  |
| `source_project_id` | `str` | No |  |
| `squash` | `str` | No |  |
| `squash_commit_sha` | `str` | No |  |
| `squash_on_merge` | `str` | No |  |
| `state` | `str` | No |  |
| `subscribed` | `str` | No |  |
| `target_branch` | `str` | No |  |
| `target_project_id` | `str` | No |  |
| `task_completion_status` | `str` | No |  |
| `time_stats` | `dict` | No | API_Entities_IssuableTimeStats model |
| `title` | `str` | No |  |
| `title_html` | `str` | No |  |
| `updated_at` | `str` | No |  |
| `upvotes` | `str` | No |  |
| `user` | `dict` | No |  |
| `user_notes_count` | `str` | No |  |
| `web_url` | `str` | No |  |
| `work_in_progress` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiEntitiesMerge().create({
    "project_id": "example_project_id",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesMerge().load({"merge_request_iid": "merge_request_iid", "project_id": "project_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ApiEntitiesMerge().update({
    "project_id": "project_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesMergeEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesMergeRequestApprovalEntity

```python
api_entities_merge_request_approval = client.ApiEntitiesMergeRequestApproval()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `approved_at` | `str` | No |  |
| `user` | `dict` | No | API_Entities_UserBasic model |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiEntitiesMergeRequestApproval().create({
    "merge_request_id": "example_merge_request_id",  # str
    "project_id": "example_project_id",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesMergeRequestApproval().load({"merge_request_id": "merge_request_id", "project_id": "project_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesMergeRequestApprovalEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesMergeRequestBasicEntity

```python
api_entities_merge_request_basic = client.ApiEntitiesMergeRequestBasic()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_collaboration` | `bool` | No |  |
| `allow_maintainer_to_push` | `bool` | No |  |
| `approvals_before_merge` | `str` | No |  |
| `assignee` | `dict` | No | API_Entities_UserBasic model |
| `assignees` | `dict` | No | API_Entities_UserBasic model |
| `author` | `dict` | No | API_Entities_UserBasic model |
| `blocking_discussions_resolved` | `str` | No |  |
| `closed_at` | `str` | No |  |
| `closed_by` | `dict` | No | API_Entities_UserBasic model |
| `created_at` | `str` | No |  |
| `description` | `str` | No |  |
| `description_html` | `str` | No |  |
| `detailed_merge_status` | `str` | No |  |
| `discussion_locked` | `str` | No |  |
| `downvotes` | `str` | No |  |
| `draft` | `str` | No |  |
| `force_remove_source_branch` | `str` | No |  |
| `has_conflicts` | `bool` | No |  |
| `id` | `int` | No |  |
| `iid` | `int` | No |  |
| `imported` | `str` | No |  |
| `imported_from` | `str` | No |  |
| `labels` | `str` | No |  |
| `merge_after` | `str` | No |  |
| `merge_commit_sha` | `str` | No |  |
| `merge_status` | `str` | No |  |
| `merge_user` | `dict` | No | API_Entities_UserBasic model |
| `merge_when_pipeline_succeeds` | `str` | No |  |
| `merged_at` | `str` | No |  |
| `merged_by` | `dict` | No | API_Entities_UserBasic model |
| `milestone` | `dict` | No |  |
| `prepared_at` | `str` | No |  |
| `project_id` | `int` | No |  |
| `reference` | `str` | No |  |
| `references` | `dict` | No |  |
| `reviewers` | `dict` | No | API_Entities_UserBasic model |
| `sha` | `str` | No |  |
| `should_remove_source_branch` | `bool` | No |  |
| `source_branch` | `str` | No |  |
| `source_project_id` | `str` | No |  |
| `squash` | `str` | No |  |
| `squash_commit_sha` | `str` | No |  |
| `squash_on_merge` | `str` | No |  |
| `state` | `str` | No |  |
| `target_branch` | `str` | No |  |
| `target_project_id` | `str` | No |  |
| `task_completion_status` | `str` | No |  |
| `time_stats` | `dict` | No | API_Entities_IssuableTimeStats model |
| `title` | `str` | No |  |
| `title_html` | `str` | No |  |
| `updated_at` | `str` | No |  |
| `upvotes` | `str` | No |  |
| `user_notes_count` | `str` | No |  |
| `web_url` | `str` | No |  |
| `work_in_progress` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiEntitiesMergeRequestBasic().list({"project_id": "example"})
for api_entities_merge_request_basic in results:
    print(api_entities_merge_request_basic)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesMergeRequestBasic().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesMergeRequestBasicEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesMergeRequestChangeEntity

```python
api_entities_merge_request_change = client.ApiEntitiesMergeRequestChange()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_collaboration` | `bool` | No |  |
| `allow_maintainer_to_push` | `bool` | No |  |
| `approvals_before_merge` | `str` | No |  |
| `assignee` | `dict` | No | API_Entities_UserBasic model |
| `assignees` | `dict` | No | API_Entities_UserBasic model |
| `author` | `dict` | No | API_Entities_UserBasic model |
| `blocking_discussions_resolved` | `str` | No |  |
| `changes` | `dict` | No | API_Entities_Diff model |
| `changes_count` | `str` | No |  |
| `closed_at` | `str` | No |  |
| `closed_by` | `dict` | No | API_Entities_UserBasic model |
| `created_at` | `str` | No |  |
| `description` | `str` | No |  |
| `description_html` | `str` | No |  |
| `detailed_merge_status` | `str` | No |  |
| `diff_refs` | `dict` | No |  |
| `discussion_locked` | `str` | No |  |
| `diverged_commits_count` | `str` | No |  |
| `downvotes` | `str` | No |  |
| `draft` | `str` | No |  |
| `first_contribution` | `str` | No |  |
| `first_deployed_to_production_at` | `str` | No |  |
| `force_remove_source_branch` | `str` | No |  |
| `has_conflicts` | `bool` | No |  |
| `head_pipeline` | `dict` | No | API_Entities_Ci_Pipeline model |
| `id` | `int` | No |  |
| `iid` | `int` | No |  |
| `imported` | `str` | No |  |
| `imported_from` | `str` | No |  |
| `labels` | `str` | No |  |
| `latest_build_finished_at` | `str` | No |  |
| `latest_build_started_at` | `str` | No |  |
| `merge_after` | `str` | No |  |
| `merge_commit_sha` | `str` | No |  |
| `merge_error` | `str` | No |  |
| `merge_status` | `str` | No |  |
| `merge_user` | `dict` | No | API_Entities_UserBasic model |
| `merge_when_pipeline_succeeds` | `str` | No |  |
| `merged_at` | `str` | No |  |
| `merged_by` | `dict` | No | API_Entities_UserBasic model |
| `milestone` | `dict` | No |  |
| `overflow` | `str` | No |  |
| `pipeline` | `dict` | No | API_Entities_Ci_PipelineBasic model |
| `prepared_at` | `str` | No |  |
| `project_id` | `int` | No |  |
| `rebase_in_progress` | `str` | No |  |
| `reference` | `str` | No |  |
| `references` | `dict` | No |  |
| `reviewers` | `dict` | No | API_Entities_UserBasic model |
| `sha` | `str` | No |  |
| `should_remove_source_branch` | `bool` | No |  |
| `source_branch` | `str` | No |  |
| `source_project_id` | `str` | No |  |
| `squash` | `str` | No |  |
| `squash_commit_sha` | `str` | No |  |
| `squash_on_merge` | `str` | No |  |
| `state` | `str` | No |  |
| `subscribed` | `str` | No |  |
| `target_branch` | `str` | No |  |
| `target_project_id` | `str` | No |  |
| `task_completion_status` | `str` | No |  |
| `time_stats` | `dict` | No | API_Entities_IssuableTimeStats model |
| `title` | `str` | No |  |
| `title_html` | `str` | No |  |
| `updated_at` | `str` | No |  |
| `upvotes` | `str` | No |  |
| `user` | `dict` | No |  |
| `user_notes_count` | `str` | No |  |
| `web_url` | `str` | No |  |
| `work_in_progress` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesMergeRequestChange().load({"merge_request_id": "merge_request_id", "project_id": "project_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesMergeRequestChangeEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesMergeRequestDiffEntity

```python
api_entities_merge_request_diff = client.ApiEntitiesMergeRequestDiff()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `base_commit_sha` | `str` | No |  |
| `created_at` | `str` | No |  |
| `head_commit_sha` | `str` | No |  |
| `id` | `str` | No |  |
| `merge_request_id` | `str` | No |  |
| `patch_id_sha` | `str` | No |  |
| `real_size` | `str` | No |  |
| `start_commit_sha` | `str` | No |  |
| `state` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiEntitiesMergeRequestDiff().list({"merge_request_id": "example", "project_id": "example"})
for api_entities_merge_request_diff in results:
    print(api_entities_merge_request_diff)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesMergeRequestDiffEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesMergeRequestDiffFullEntity

```python
api_entities_merge_request_diff_full = client.ApiEntitiesMergeRequestDiffFull()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `base_commit_sha` | `str` | No |  |
| `commits` | `dict` | No | API_Entities_Commit model |
| `created_at` | `str` | No |  |
| `diffs` | `dict` | No | API_Entities_Diff model |
| `head_commit_sha` | `str` | No |  |
| `id` | `str` | No |  |
| `merge_request_id` | `str` | No |  |
| `patch_id_sha` | `str` | No |  |
| `real_size` | `str` | No |  |
| `start_commit_sha` | `str` | No |  |
| `state` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesMergeRequestDiffFull().load({"merge_request_id": "merge_request_id", "project_id": "project_id", "version_id": "version_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesMergeRequestDiffFullEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesMergeRequestReviewerEntity

```python
api_entities_merge_request_reviewer = client.ApiEntitiesMergeRequestReviewer()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_path` | `str` | No |  |
| `avatar_url` | `str` | No |  |
| `custom_attributes` | `list` | No |  |
| `id` | `int` | No |  |
| `locked` | `bool` | No |  |
| `name` | `str` | No |  |
| `public_email` | `str` | No |  |
| `state` | `str` | No |  |
| `username` | `str` | No |  |
| `web_url` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesMergeRequestReviewer().load({"merge_request_id": "merge_request_id", "project_id": "project_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesMergeRequestReviewerEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesMetricImageEntity

```python
api_entities_metric_image = client.ApiEntitiesMetricImage()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | No |  |
| `file_path` | `str` | No |  |
| `filename` | `str` | No |  |
| `id` | `int` | No |  |
| `url` | `str` | No |  |
| `url_text` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiEntitiesMetricImage().create({
    "alert_management_alert_id": "example_alert_management_alert_id",  # str
    "project_id": "example_project_id",  # str
    "file": "example_file",  # Any
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiEntitiesMetricImage().list({"alert_management_alert_id": "example", "project_id": "example"})
for api_entities_metric_image in results:
    print(api_entities_metric_image)
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ApiEntitiesMetricImage().update({
    "alert_management_alert_id": "alert_management_alert_id",
    "id": "id",
    "project_id": "project_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesMetricImageEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesMrNoteEntity

```python
api_entities_mr_note = client.ApiEntitiesMrNote()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_path` | `str` | No |  |
| `avatar_url` | `str` | No |  |
| `custom_attributes` | `list` | No |  |
| `id` | `int` | No |  |
| `locked` | `bool` | No |  |
| `name` | `str` | No |  |
| `public_email` | `str` | No |  |
| `state` | `str` | No |  |
| `username` | `str` | No |  |
| `web_url` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesMrNote().load({"merge_request_id": "merge_request_id", "project_id": "project_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesMrNoteEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesNamespaceEntity

```python
api_entities_namespace = client.ApiEntitiesNamespace()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `additional_purchased_storage_ends_on` | `str` | No |  |
| `additional_purchased_storage_size` | `int` | No |  |
| `avatar_url` | `str` | No |  |
| `billable_members_count` | `int` | No |  |
| `end_date` | `str` | No |  |
| `extra_shared_runners_minutes_limit` | `int` | No |  |
| `full_path` | `str` | No |  |
| `id` | `int` | No |  |
| `kind` | `str` | No |  |
| `max_seats_used` | `int` | No |  |
| `max_seats_used_changed_at` | `str` | No |  |
| `members_count_with_descendants` | `int` | No |  |
| `name` | `str` | No |  |
| `parent_id` | `int` | No |  |
| `path` | `str` | No |  |
| `plan` | `str` | No |  |
| `projects_count` | `int` | No |  |
| `root_repository_size` | `int` | No |  |
| `seats_in_use` | `int` | No |  |
| `shared_runners_minutes_limit` | `int` | No |  |
| `trial` | `bool` | No |  |
| `trial_ends_on` | `str` | No |  |
| `web_url` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiEntitiesNamespace().list()
for api_entities_namespace in results:
    print(api_entities_namespace)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesNamespace().load({"id": "api_entities_namespace_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ApiEntitiesNamespace().update({
    "id": "api_entities_namespace_id",
    "put_api_v4_namespaces_id": {},
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesNamespaceEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesNamespaceExistenceEntity

```python
api_entities_namespace_existence = client.ApiEntitiesNamespaceExistence()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `exists` | `bool` | No |  |
| `suggests` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiEntitiesNamespaceExistence().list({"namespace_id": "example"})
for api_entities_namespace_existence in results:
    print(api_entities_namespace_existence)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesNamespaceExistenceEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesNamespacesStorageLimitExclusionEntity

```python
api_entities_namespaces_storage_limit_exclusion = client.ApiEntitiesNamespacesStorageLimitExclusion()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `int` | No |  |
| `namespace_id` | `int` | No |  |
| `namespace_name` | `str` | No |  |
| `reason` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiEntitiesNamespacesStorageLimitExclusion().create({
    "namespace_id": "example_namespace_id",  # str
    "post_api_v4_namespaces_id_storage_limit_exclusion": {},  # dict
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesNamespacesStorageLimitExclusion().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesNamespacesStorageLimitExclusionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesNpmPackageEntity

```python
api_entities_npm_package = client.ApiEntitiesNpmPackage()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `disttags` | `dict` | No |  |
| `name` | `str` | No |  |
| `versions` | `dict` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesNpmPackage().load({"package_name": "package_name"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesNpmPackageEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesNpmPackageTagEntity

```python
api_entities_npm_package_tag = client.ApiEntitiesNpmPackageTag()
```

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesNpmPackageTag().load({"package_name": "package_name"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesNpmPackageTagEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesNugetPackagesVersionEntity

```python
api_entities_nuget_packages_version = client.ApiEntitiesNugetPackagesVersion()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `versions` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiEntitiesNugetPackagesVersion().list({"project_id": "example", "package_name": "example"})
for api_entities_nuget_packages_version in results:
    print(api_entities_nuget_packages_version)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesNugetPackagesVersionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesNugetSearchResultEntity

```python
api_entities_nuget_search_result = client.ApiEntitiesNugetSearchResult()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `authors` | `str` | No |  |
| `description` | `str` | No |  |
| `iconUrl` | `str` | No |  |
| `id` | `str` | No |  |
| `licenseUrl` | `str` | No |  |
| `projectUrl` | `str` | No |  |
| `summary` | `str` | No |  |
| `tags` | `str` | No |  |
| `title` | `str` | No |  |
| `totalDownloads` | `int` | No |  |
| `type` | `str` | No |  |
| `verified` | `bool` | No |  |
| `version` | `str` | No |  |
| `versions` | `dict` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiEntitiesNugetSearchResult().list({"project_id": "example"})
for api_entities_nuget_search_result in results:
    print(api_entities_nuget_search_result)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesNugetSearchResultEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesNugetServiceIndexEntity

```python
api_entities_nuget_service_index = client.ApiEntitiesNugetServiceIndex()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `resources` | `list` | No |  |
| `version` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiEntitiesNugetServiceIndex().list({"project_id": "example"})
for api_entities_nuget_service_index in results:
    print(api_entities_nuget_service_index)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesNugetServiceIndexEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesOrganizationsOrganizationEntity

```python
api_entities_organizations_organization = client.ApiEntitiesOrganizationsOrganization()
```

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiEntitiesOrganizationsOrganization().create({
    "post_api_v4_organization": {},  # dict
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesOrganizationsOrganizationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesPackageEntity

```python
api_entities_package = client.ApiEntitiesPackage()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `conan_package_name` | `str` | No |  |
| `created_at` | `str` | No |  |
| `id` | `int` | No |  |
| `last_downloaded_at` | `str` | No |  |
| `links` | `dict` | No |  |
| `name` | `str` | No |  |
| `package_type` | `str` | No |  |
| `pipeline` | `dict` | No | API_Entities_Package_Pipeline model |
| `pipelines` | `dict` | No | API_Entities_Package_Pipeline model |
| `project_id` | `int` | No |  |
| `project_path` | `str` | No |  |
| `status` | `str` | No |  |
| `tags` | `str` | No |  |
| `version` | `str` | No |  |
| `versions` | `dict` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiEntitiesPackage().list({"group_id": "example"})
for api_entities_package in results:
    print(api_entities_package)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesPackage().load({"id": "api_entities_package_id", "project_id": "project_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesPackageEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesPackageFileEntity

```python
api_entities_package_file = client.ApiEntitiesPackageFile()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | No |  |
| `file_md5` | `str` | No |  |
| `file_name` | `str` | No |  |
| `file_sha1` | `str` | No |  |
| `file_sha256` | `str` | No |  |
| `id` | `int` | No |  |
| `package_id` | `int` | No |  |
| `pipelines` | `dict` | No | API_Entities_Package_Pipeline model |
| `size` | `int` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiEntitiesPackageFile().list({"package_id": "example", "project_id": "example"})
for api_entities_package_file in results:
    print(api_entities_package_file)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesPackageFileEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesPackagePipelineEntity

```python
api_entities_package_pipeline = client.ApiEntitiesPackagePipeline()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_path` | `str` | No |  |
| `avatar_url` | `str` | No |  |
| `custom_attributes` | `list` | No |  |
| `id` | `int` | No |  |
| `locked` | `bool` | No |  |
| `name` | `str` | No |  |
| `public_email` | `str` | No |  |
| `state` | `str` | No |  |
| `username` | `str` | No |  |
| `web_url` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesPackagePipeline().load({"package_id": "package_id", "project_id": "project_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesPackagePipelineEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesPackagesConanFilesListEntity

```python
api_entities_packages_conan_files_list = client.ApiEntitiesPackagesConanFilesList()
```

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesPackagesConanFilesList().load({"conan_id": "conan_id", "package_channel": "package_channel", "package_username": "package_username", "package_version": "package_version", "project_id": "project_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesPackagesConanFilesListEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesPackagesConanPackageManifestEntity

```python
api_entities_packages_conan_package_manifest = client.ApiEntitiesPackagesConanPackageManifest()
```

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesPackagesConanPackageManifest().load({"conan_id": "conan_id", "conan_package_reference": "conan_package_reference", "package_channel": "package_channel", "package_username": "package_username", "package_version": "package_version"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesPackagesConanPackageManifestEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesPackagesConanPackageRevisionEntity

```python
api_entities_packages_conan_package_revision = client.ApiEntitiesPackagesConanPackageRevision()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `revision` | `str` | No | The revision hash of the Conan recipe or package |
| `time` | `str` | No | The UTC timestamp when the revision was created |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiEntitiesPackagesConanPackageRevision().list({"conan_id": "example", "conan_package_reference": "example", "package_channel": "example", "package_username": "example", "package_version": "example", "project_id": "example", "revision_id": "example"})
for api_entities_packages_conan_package_revision in results:
    print(api_entities_packages_conan_package_revision)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesPackagesConanPackageRevisionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesPackagesConanPackageSnapshotEntity

```python
api_entities_packages_conan_package_snapshot = client.ApiEntitiesPackagesConanPackageSnapshot()
```

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesPackagesConanPackageSnapshot().load({"conan_id": "conan_id", "conan_package_reference": "conan_package_reference", "package_channel": "package_channel", "package_username": "package_username", "package_version": "package_version"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesPackagesConanPackageSnapshotEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesPackagesConanRecipeManifestEntity

```python
api_entities_packages_conan_recipe_manifest = client.ApiEntitiesPackagesConanRecipeManifest()
```

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesPackagesConanRecipeManifest().load({"conan_id": "conan_id", "package_channel": "package_channel", "package_username": "package_username", "package_version": "package_version"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesPackagesConanRecipeManifestEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesPackagesConanRecipeRevisionEntity

```python
api_entities_packages_conan_recipe_revision = client.ApiEntitiesPackagesConanRecipeRevision()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `revision` | `str` | No | The revision hash of the Conan recipe or package |
| `time` | `str` | No | The UTC timestamp when the revision was created |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiEntitiesPackagesConanRecipeRevision().list({"conan_id": "example", "package_channel": "example", "package_username": "example", "package_version": "example", "project_id": "example"})
for api_entities_packages_conan_recipe_revision in results:
    print(api_entities_packages_conan_recipe_revision)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesPackagesConanRecipeRevisionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesPackagesConanRecipeSnapshotEntity

```python
api_entities_packages_conan_recipe_snapshot = client.ApiEntitiesPackagesConanRecipeSnapshot()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesPackagesConanRecipeSnapshot().load({"id": "api_entities_packages_conan_recipe_snapshot_id", "package_channel": "package_channel", "package_name": "package_name", "package_username": "package_username", "package_version": "package_version"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesPackagesConanRecipeSnapshotEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesPackagesConanRevisionEntity

```python
api_entities_packages_conan_revision = client.ApiEntitiesPackagesConanRevision()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `revision` | `str` | No | The revision hash of the Conan recipe or package |
| `time` | `str` | No | The UTC timestamp when the revision was created |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesPackagesConanRevision().load({"conan_id": "conan_id", "package_channel": "package_channel", "package_username": "package_username", "package_version": "package_version", "project_id": "project_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesPackagesConanRevisionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesPackagesConanUploadUrlEntity

```python
api_entities_packages_conan_upload_url = client.ApiEntitiesPackagesConanUploadUrl()
```

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiEntitiesPackagesConanUploadUrl().create({
    "conan_id": "example_conan_id",  # str
    "package_channel": "example_package_channel",  # Any
    "package_username": "example_package_username",  # Any
    "package_version": "example_package_version",  # Any
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesPackagesConanUploadUrlEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesPackagesDebianDistributionEntity

```python
api_entities_packages_debian_distribution = client.ApiEntitiesPackagesDebianDistribution()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `architectures` | `list` | No |  |
| `codename` | `str` | No |  |
| `components` | `list` | No |  |
| `description` | `str` | No |  |
| `id` | `int` | No |  |
| `label` | `str` | No |  |
| `origin` | `str` | No |  |
| `suite` | `str` | No |  |
| `valid_time_duration_seconds` | `int` | No |  |
| `version` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiEntitiesPackagesDebianDistribution().create({
    "project_id": "example_project_id",  # str
    "post_api_v4_projects_id_debian_distribution": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiEntitiesPackagesDebianDistribution().list({"project_id": "example"})
for api_entities_packages_debian_distribution in results:
    print(api_entities_packages_debian_distribution)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesPackagesDebianDistribution().load({"id": "api_entities_packages_debian_distribution_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ApiEntitiesPackagesDebianDistribution().update({
    "id": "api_entities_packages_debian_distribution_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesPackagesDebianDistributionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesPagesDomainEntity

```python
api_entities_pages_domain = client.ApiEntitiesPagesDomain()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auto_ssl_enabled` | `str` | No |  |
| `certificate` | `str` | No |  |
| `certificate_text` | `str` | No |  |
| `domain` | `str` | No |  |
| `enabled_until` | `str` | No |  |
| `expired` | `str` | No |  |
| `id` | `str` | No |  |
| `subject` | `str` | No |  |
| `url` | `str` | No |  |
| `verification_code` | `str` | No |  |
| `verified` | `bool` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiEntitiesPagesDomain().create({
    "project_id": "example_project_id",  # str
    "post_api_v4_projects_id_pages_domain": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiEntitiesPagesDomain().list({"project_id": "example"})
for api_entities_pages_domain in results:
    print(api_entities_pages_domain)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesPagesDomain().load({"id": "api_entities_pages_domain_id", "project_id": "project_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ApiEntitiesPagesDomain().update({
    "id": "api_entities_pages_domain_id",
    "domain_id": "domain_id",
    "project_id": "project_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesPagesDomainEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesPagesDomainBasicEntity

```python
api_entities_pages_domain_basic = client.ApiEntitiesPagesDomainBasic()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `expiration` | `str` | No |  |
| `expired` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesPagesDomainBasic().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesPagesDomainBasicEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesPersonalAccessTokenEntity

```python
api_entities_personal_access_token = client.ApiEntitiesPersonalAccessToken()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | No |  |
| `created_at` | `str` | No |  |
| `description` | `str` | No |  |
| `expires_at` | `str` | No |  |
| `id` | `int` | No |  |
| `last_used_at` | `str` | No |  |
| `name` | `str` | No |  |
| `revoked` | `bool` | No |  |
| `scopes` | `list` | No |  |
| `user_id` | `int` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiEntitiesPersonalAccessToken().list()
for api_entities_personal_access_token in results:
    print(api_entities_personal_access_token)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesPersonalAccessTokenEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesPersonalAccessTokenWithLastUsedIpEntity

```python
api_entities_personal_access_token_with_last_used_ip = client.ApiEntitiesPersonalAccessTokenWithLastUsedIp()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | No |  |
| `created_at` | `str` | No |  |
| `description` | `str` | No |  |
| `expires_at` | `str` | No |  |
| `id` | `int` | No |  |
| `last_used_at` | `str` | No |  |
| `last_used_ips` | `list` | No |  |
| `name` | `str` | No |  |
| `revoked` | `bool` | No |  |
| `scopes` | `list` | No |  |
| `user_id` | `int` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiEntitiesPersonalAccessTokenWithLastUsedIp().list()
for api_entities_personal_access_token_with_last_used_ip in results:
    print(api_entities_personal_access_token_with_last_used_ip)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesPersonalAccessTokenWithLastUsedIp().load({"id": "api_entities_personal_access_token_with_last_used_ip_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesPersonalAccessTokenWithLastUsedIpEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesPersonalAccessTokenWithTokenEntity

```python
api_entities_personal_access_token_with_token = client.ApiEntitiesPersonalAccessTokenWithToken()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | No |  |
| `created_at` | `str` | No |  |
| `description` | `str` | No |  |
| `expires_at` | `str` | No |  |
| `id` | `int` | No |  |
| `last_used_at` | `str` | No |  |
| `name` | `str` | No |  |
| `revoked` | `bool` | No |  |
| `scopes` | `list` | No |  |
| `token` | `str` | No |  |
| `user_id` | `int` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiEntitiesPersonalAccessTokenWithToken().create({
    "personal_access_token_id": "example_personal_access_token_id",  # str
    "post_api_v4_personal_access_tokens_id_rotate": {},  # dict
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesPersonalAccessTokenWithTokenEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesPersonalSnippetEntity

```python
api_entities_personal_snippet = client.ApiEntitiesPersonalSnippet()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `dict` | No | API_Entities_UserBasic model |
| `created_at` | `str` | No |  |
| `description` | `str` | No |  |
| `file_name` | `str` | No |  |
| `files` | `list` | No |  |
| `http_url_to_repo` | `str` | No |  |
| `id` | `int` | No |  |
| `imported` | `bool` | No |  |
| `imported_from` | `str` | No |  |
| `project_id` | `int` | No |  |
| `raw_url` | `str` | No |  |
| `repository_storage` | `str` | No |  |
| `ssh_url_to_repo` | `str` | No |  |
| `title` | `str` | No |  |
| `updated_at` | `str` | No |  |
| `visibility` | `str` | No |  |
| `web_url` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiEntitiesPersonalSnippet().create({
    "post_api_v4_snippet": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiEntitiesPersonalSnippet().list()
for api_entities_personal_snippet in results:
    print(api_entities_personal_snippet)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesPersonalSnippet().load({"id": "api_entities_personal_snippet_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ApiEntitiesPersonalSnippet().update({
    "id": "api_entities_personal_snippet_id",
    "put_api_v4_snippets_id": {},
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesPersonalSnippetEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesPlanLimitEntity

```python
api_entities_plan_limit = client.ApiEntitiesPlanLimit()
```

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesPlanLimit().load()
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ApiEntitiesPlanLimit().update({
    "put_api_v4_application_plan_limit": {},
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesPlanLimitEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesProjectEntity

```python
api_entities_project = client.ApiEntitiesProject()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_merge_on_skipped_pipeline` | `bool` | No |  |
| `allow_pipeline_trigger_approve_deployment` | `bool` | No |  |
| `analytics_access_level` | `str` | No |  |
| `approvals_before_merge` | `str` | No |  |
| `archived` | `bool` | No |  |
| `auto_cancel_pending_pipelines` | `str` | No |  |
| `auto_devops_deploy_strategy` | `str` | No |  |
| `auto_devops_enabled` | `bool` | No |  |
| `auto_duo_code_review_enabled` | `str` | No |  |
| `autoclose_referenced_issues` | `bool` | No |  |
| `avatar_url` | `str` | No |  |
| `build_git_strategy` | `str` | No |  |
| `build_timeout` | `int` | No |  |
| `builds_access_level` | `str` | No |  |
| `can_create_merge_request_in` | `bool` | No |  |
| `ci_allow_fork_pipelines_to_run_in_parent_project` | `bool` | No |  |
| `ci_config_path` | `str` | No |  |
| `ci_default_git_depth` | `int` | No |  |
| `ci_delete_pipelines_in_seconds` | `int` | No |  |
| `ci_forward_deployment_enabled` | `bool` | No |  |
| `ci_forward_deployment_rollback_allowed` | `bool` | No |  |
| `ci_id_token_sub_claim_components` | `list` | No |  |
| `ci_job_token_scope_enabled` | `bool` | No |  |
| `ci_pipeline_variables_minimum_override_role` | `str` | No |  |
| `ci_push_repository_for_job_token_allowed` | `bool` | No |  |
| `ci_restrict_pipeline_cancellation_role` | `str` | No |  |
| `ci_separated_caches` | `bool` | No |  |
| `compliance_frameworks` | `str` | No |  |
| `container_expiration_policy` | `dict` | No |  |
| `container_registry_access_level` | `str` | No |  |
| `container_registry_enabled` | `bool` | No |  |
| `container_registry_image_prefix` | `str` | No |  |
| `created_at` | `str` | No |  |
| `creator_id` | `int` | No |  |
| `custom_attributes` | `dict` | No | API_Entities_CustomAttribute model |
| `default_branch` | `str` | No |  |
| `description` | `str` | No |  |
| `description_html` | `str` | No |  |
| `duo_remote_flows_enabled` | `str` | No |  |
| `emails_disabled` | `bool` | No |  |
| `emails_enabled` | `bool` | No |  |
| `empty_repo` | `bool` | No |  |
| `enforce_auth_checks_on_uploads` | `bool` | No |  |
| `environments_access_level` | `str` | No |  |
| `external_authorization_classification_label` | `str` | No |  |
| `feature_flags_access_level` | `str` | No |  |
| `forked_from_project` | `dict` | No | API_Entities_BasicProjectDetails model |
| `forking_access_level` | `str` | No |  |
| `forks_count` | `int` | No |  |
| `group_runners_enabled` | `bool` | No |  |
| `http_url_to_repo` | `str` | No |  |
| `id` | `int` | No |  |
| `import_error` | `str` | No |  |
| `import_status` | `str` | No |  |
| `import_type` | `str` | No |  |
| `import_url` | `str` | No |  |
| `infrastructure_access_level` | `str` | No |  |
| `issue_branch_template` | `str` | No |  |
| `issues_access_level` | `str` | No |  |
| `issues_enabled` | `bool` | No |  |
| `issues_template` | `str` | No |  |
| `jobs_enabled` | `bool` | No |  |
| `keep_latest_artifact` | `bool` | No |  |
| `last_activity_at` | `str` | No |  |
| `lfs_enabled` | `bool` | No |  |
| `license` | `dict` | No |  |
| `license_url` | `str` | No |  |
| `links` | `dict` | No |  |
| `marked_for_deletion_at` | `str` | No |  |
| `marked_for_deletion_on` | `str` | No |  |
| `max_artifacts_size` | `int` | No |  |
| `merge_commit_template` | `str` | No |  |
| `merge_method` | `str` | No |  |
| `merge_pipelines_enabled` | `str` | No |  |
| `merge_request_title_regex` | `str` | No |  |
| `merge_request_title_regex_description` | `str` | No |  |
| `merge_requests_access_level` | `str` | No |  |
| `merge_requests_enabled` | `bool` | No |  |
| `merge_requests_template` | `str` | No |  |
| `merge_trains_enabled` | `str` | No |  |
| `merge_trains_skip_train_allowed` | `str` | No |  |
| `mirror` | `str` | No |  |
| `mirror_overwrites_diverged_branches` | `str` | No |  |
| `mirror_trigger_builds` | `str` | No |  |
| `mirror_user_id` | `str` | No |  |
| `model_experiments_access_level` | `str` | No |  |
| `model_registry_access_level` | `str` | No |  |
| `monitor_access_level` | `str` | No |  |
| `mr_default_target_self` | `bool` | No |  |
| `name` | `str` | No |  |
| `name_with_namespace` | `str` | No |  |
| `namespace` | `dict` | No |  |
| `only_allow_merge_if_all_discussions_are_resolved` | `bool` | No |  |
| `only_allow_merge_if_all_status_checks_passed` | `str` | No |  |
| `only_allow_merge_if_pipeline_succeeds` | `bool` | No |  |
| `only_mirror_protected_branches` | `str` | No |  |
| `open_issues_count` | `int` | No |  |
| `owner` | `dict` | No | API_Entities_UserBasic model |
| `package_registry_access_level` | `str` | No |  |
| `packages_enabled` | `bool` | No |  |
| `pages_access_level` | `str` | No |  |
| `path` | `str` | No |  |
| `path_with_namespace` | `str` | No |  |
| `pre_receive_secret_detection_enabled` | `bool` | No |  |
| `prevent_merge_without_jira_issue` | `str` | No |  |
| `printing_merge_request_link_enabled` | `bool` | No |  |
| `public_jobs` | `bool` | No |  |
| `readme_url` | `str` | No |  |
| `releases_access_level` | `str` | No |  |
| `remove_source_branch_after_merge` | `bool` | No |  |
| `repository_access_level` | `str` | No |  |
| `repository_object_format` | `str` | No |  |
| `repository_storage` | `str` | No |  |
| `request_access_enabled` | `bool` | No |  |
| `requirements_access_level` | `str` | No |  |
| `requirements_enabled` | `str` | No |  |
| `resolve_outdated_diff_discussions` | `bool` | No |  |
| `resource_group_default_process_mode` | `str` | No |  |
| `restrict_user_defined_variables` | `bool` | No |  |
| `runner_token_expiration_interval` | `int` | No |  |
| `runners_token` | `str` | No |  |
| `secret_push_protection_enabled` | `bool` | No |  |
| `security_and_compliance_access_level` | `str` | No |  |
| `security_and_compliance_enabled` | `str` | No |  |
| `service_desk_address` | `str` | No |  |
| `service_desk_enabled` | `bool` | No |  |
| `shared_runners_enabled` | `bool` | No |  |
| `shared_with_groups` | `list` | No |  |
| `show_diff_preview_in_email` | `bool` | No |  |
| `snippets_access_level` | `str` | No |  |
| `snippets_enabled` | `bool` | No |  |
| `spp_repository_pipeline_access` | `bool` | No | The spp_repository_pipeline_access setting is only visible if the security_orchestration_policies feature is available. |
| `squash_commit_template` | `str` | No |  |
| `squash_option` | `str` | No |  |
| `ssh_url_to_repo` | `str` | No |  |
| `star_count` | `int` | No |  |
| `statistics` | `dict` | No |  |
| `suggestion_commit_message` | `str` | No |  |
| `tag_list` | `list` | No |  |
| `topics` | `list` | No |  |
| `updated_at` | `str` | No |  |
| `visibility` | `str` | No |  |
| `warn_about_potentially_unwanted_characters` | `bool` | No |  |
| `web_based_commit_signing_enabled` | `str` | No |  |
| `web_url` | `str` | No |  |
| `wiki_access_level` | `str` | No |  |
| `wiki_enabled` | `bool` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiEntitiesProject().create({
    "user_id": "example_user_id",  # str
    "post_api_v4_projects_user_user_id": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiEntitiesProject().list({"project_id": "example"})
for api_entities_project in results:
    print(api_entities_project)
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ApiEntitiesProject().update({
    "id": "id",
    "put_api_v4_projects_id": {},
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesProjectEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesProjectDailyStatisticEntity

```python
api_entities_project_daily_statistic = client.ApiEntitiesProjectDailyStatistic()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `days` | `list` | No |  |
| `total` | `int` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesProjectDailyStatistic().load({"project_id": "project_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesProjectDailyStatisticEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesProjectExportStatusEntity

```python
api_entities_project_export_status = client.ApiEntitiesProjectExportStatus()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `api_url` | `str` | No |  |
| `web_url` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesProjectExportStatus().load({"project_id": "project_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesProjectExportStatusEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesProjectGroupLinkEntity

```python
api_entities_project_group_link = client.ApiEntitiesProjectGroupLink()
```

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiEntitiesProjectGroupLink().create({
    "project_id": "example_project_id",  # str
    "post_api_v4_projects_id_share": {},  # dict
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesProjectGroupLinkEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesProjectHookEntity

```python
api_entities_project_hook = client.ApiEntitiesProjectHook()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert_status` | `Any` | No |  |
| `branch_filter_strategy` | `str` | No |  |
| `confidential_issues_events` | `bool` | No |  |
| `confidential_note_events` | `bool` | No |  |
| `created_at` | `str` | No |  |
| `custom_headers` | `list` | No |  |
| `custom_webhook_template` | `str` | No |  |
| `deployment_events` | `bool` | No |  |
| `description` | `str` | No |  |
| `disabled_until` | `str` | No |  |
| `emoji_events` | `bool` | No |  |
| `enable_ssl_verification` | `bool` | No |  |
| `feature_flag_events` | `bool` | No |  |
| `id` | `str` | No |  |
| `issues_events` | `bool` | No |  |
| `job_events` | `bool` | No |  |
| `merge_requests_events` | `bool` | No |  |
| `milestone_events` | `bool` | No |  |
| `name` | `str` | No |  |
| `note_events` | `bool` | No |  |
| `pipeline_events` | `bool` | No |  |
| `project_id` | `str` | No |  |
| `push_events` | `bool` | No |  |
| `push_events_branch_filter` | `str` | No |  |
| `releases_events` | `bool` | No |  |
| `repository_update_events` | `bool` | No |  |
| `resource_access_token_events` | `bool` | No |  |
| `tag_push_events` | `bool` | No |  |
| `url` | `str` | No |  |
| `url_variables` | `list` | No |  |
| `vulnerability_events` | `bool` | No |  |
| `wiki_page_events` | `bool` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiEntitiesProjectHook().create({
    "project_id": "example_project_id",  # str
    "post_api_v4_projects_id_hook": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiEntitiesProjectHook().list({"project_id": "example"})
for api_entities_project_hook in results:
    print(api_entities_project_hook)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesProjectHook().load({"id": "api_entities_project_hook_id", "project_id": "project_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ApiEntitiesProjectHook().update({
    "id": "api_entities_project_hook_id",
    "project_id": "project_id",
    "put_api_v4_projects_id_hooks_hook_id": {},
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesProjectHookEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesProjectImportStatusEntity

```python
api_entities_project_import_status = client.ApiEntitiesProjectImportStatus()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | No |  |
| `exception_class` | `str` | No |  |
| `exception_message` | `str` | No |  |
| `id` | `str` | No |  |
| `line_number` | `int` | No |  |
| `relation_name` | `str` | No |  |
| `source` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiEntitiesProjectImportStatus().create({
    "path": "example_path",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiEntitiesProjectImportStatus().list({"project_id": "example"})
for api_entities_project_import_status in results:
    print(api_entities_project_import_status)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesProjectImportStatusEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesProjectJobTokenScopeEntity

```python
api_entities_project_job_token_scope = client.ApiEntitiesProjectJobTokenScope()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `inbound_enabled` | `bool` | No |  |
| `outbound_enabled` | `bool` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesProjectJobTokenScope().load({"project_id": "project_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesProjectJobTokenScopeEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesProjectRepositoryStorageEntity

```python
api_entities_project_repository_storage = client.ApiEntitiesProjectRepositoryStorage()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | No |  |
| `disk_path` | `str` | No |  |
| `project_id` | `int` | No |  |
| `repository_storage` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesProjectRepositoryStorage().load({"project_id": "project_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesProjectRepositoryStorageEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesProjectSnippetEntity

```python
api_entities_project_snippet = client.ApiEntitiesProjectSnippet()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `dict` | No | API_Entities_UserBasic model |
| `created_at` | `str` | No |  |
| `description` | `str` | No |  |
| `file_name` | `str` | No |  |
| `files` | `list` | No |  |
| `http_url_to_repo` | `str` | No |  |
| `id` | `int` | No |  |
| `imported` | `bool` | No |  |
| `imported_from` | `str` | No |  |
| `project_id` | `int` | No |  |
| `raw_url` | `str` | No |  |
| `repository_storage` | `str` | No |  |
| `ssh_url_to_repo` | `str` | No |  |
| `title` | `str` | No |  |
| `updated_at` | `str` | No |  |
| `visibility` | `str` | No |  |
| `web_url` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiEntitiesProjectSnippet().create({
    "project_id": "example_project_id",  # str
    "post_api_v4_projects_id_snippet": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiEntitiesProjectSnippet().list({"project_id": "example"})
for api_entities_project_snippet in results:
    print(api_entities_project_snippet)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesProjectSnippet().load({"id": "api_entities_project_snippet_id", "project_id": "project_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ApiEntitiesProjectSnippet().update({
    "id": "api_entities_project_snippet_id",
    "project_id": "project_id",
    "put_api_v4_projects_id_snippets_snippet_id": {},
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesProjectSnippetEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesProjectUploadEntity

```python
api_entities_project_upload = client.ApiEntitiesProjectUpload()
```

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiEntitiesProjectUpload().create({
    "project_id": "example_project_id",  # str
    "post_api_v4_projects_id_upload": {},  # dict
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesProjectUploadEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesProjectWithAccessEntity

```python
api_entities_project_with_access = client.ApiEntitiesProjectWithAccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_merge_on_skipped_pipeline` | `bool` | No |  |
| `allow_pipeline_trigger_approve_deployment` | `bool` | No |  |
| `analytics_access_level` | `str` | No |  |
| `approvals_before_merge` | `str` | No |  |
| `archived` | `bool` | No |  |
| `auto_cancel_pending_pipelines` | `str` | No |  |
| `auto_devops_deploy_strategy` | `str` | No |  |
| `auto_devops_enabled` | `bool` | No |  |
| `auto_duo_code_review_enabled` | `str` | No |  |
| `autoclose_referenced_issues` | `bool` | No |  |
| `avatar_url` | `str` | No |  |
| `build_git_strategy` | `str` | No |  |
| `build_timeout` | `int` | No |  |
| `builds_access_level` | `str` | No |  |
| `can_create_merge_request_in` | `bool` | No |  |
| `ci_allow_fork_pipelines_to_run_in_parent_project` | `bool` | No |  |
| `ci_config_path` | `str` | No |  |
| `ci_default_git_depth` | `int` | No |  |
| `ci_delete_pipelines_in_seconds` | `int` | No |  |
| `ci_forward_deployment_enabled` | `bool` | No |  |
| `ci_forward_deployment_rollback_allowed` | `bool` | No |  |
| `ci_id_token_sub_claim_components` | `list` | No |  |
| `ci_job_token_scope_enabled` | `bool` | No |  |
| `ci_pipeline_variables_minimum_override_role` | `str` | No |  |
| `ci_push_repository_for_job_token_allowed` | `bool` | No |  |
| `ci_restrict_pipeline_cancellation_role` | `str` | No |  |
| `ci_separated_caches` | `bool` | No |  |
| `compliance_frameworks` | `str` | No |  |
| `container_expiration_policy` | `dict` | No |  |
| `container_registry_access_level` | `str` | No |  |
| `container_registry_enabled` | `bool` | No |  |
| `container_registry_image_prefix` | `str` | No |  |
| `created_at` | `str` | No |  |
| `creator_id` | `int` | No |  |
| `custom_attributes` | `dict` | No | API_Entities_CustomAttribute model |
| `default_branch` | `str` | No |  |
| `description` | `str` | No |  |
| `description_html` | `str` | No |  |
| `duo_remote_flows_enabled` | `str` | No |  |
| `emails_disabled` | `bool` | No |  |
| `emails_enabled` | `bool` | No |  |
| `empty_repo` | `bool` | No |  |
| `enforce_auth_checks_on_uploads` | `bool` | No |  |
| `environments_access_level` | `str` | No |  |
| `external_authorization_classification_label` | `str` | No |  |
| `feature_flags_access_level` | `str` | No |  |
| `forked_from_project` | `dict` | No | API_Entities_BasicProjectDetails model |
| `forking_access_level` | `str` | No |  |
| `forks_count` | `int` | No |  |
| `group_runners_enabled` | `bool` | No |  |
| `http_url_to_repo` | `str` | No |  |
| `id` | `int` | No |  |
| `import_error` | `str` | No |  |
| `import_status` | `str` | No |  |
| `import_type` | `str` | No |  |
| `import_url` | `str` | No |  |
| `infrastructure_access_level` | `str` | No |  |
| `issue_branch_template` | `str` | No |  |
| `issues_access_level` | `str` | No |  |
| `issues_enabled` | `bool` | No |  |
| `issues_template` | `str` | No |  |
| `jobs_enabled` | `bool` | No |  |
| `keep_latest_artifact` | `bool` | No |  |
| `last_activity_at` | `str` | No |  |
| `lfs_enabled` | `bool` | No |  |
| `license` | `dict` | No |  |
| `license_url` | `str` | No |  |
| `links` | `dict` | No |  |
| `marked_for_deletion_at` | `str` | No |  |
| `marked_for_deletion_on` | `str` | No |  |
| `max_artifacts_size` | `int` | No |  |
| `merge_commit_template` | `str` | No |  |
| `merge_method` | `str` | No |  |
| `merge_pipelines_enabled` | `str` | No |  |
| `merge_request_title_regex` | `str` | No |  |
| `merge_request_title_regex_description` | `str` | No |  |
| `merge_requests_access_level` | `str` | No |  |
| `merge_requests_enabled` | `bool` | No |  |
| `merge_requests_template` | `str` | No |  |
| `merge_trains_enabled` | `str` | No |  |
| `merge_trains_skip_train_allowed` | `str` | No |  |
| `mirror` | `str` | No |  |
| `mirror_overwrites_diverged_branches` | `str` | No |  |
| `mirror_trigger_builds` | `str` | No |  |
| `mirror_user_id` | `str` | No |  |
| `model_experiments_access_level` | `str` | No |  |
| `model_registry_access_level` | `str` | No |  |
| `monitor_access_level` | `str` | No |  |
| `mr_default_target_self` | `bool` | No |  |
| `name` | `str` | No |  |
| `name_with_namespace` | `str` | No |  |
| `namespace` | `dict` | No |  |
| `only_allow_merge_if_all_discussions_are_resolved` | `bool` | No |  |
| `only_allow_merge_if_all_status_checks_passed` | `str` | No |  |
| `only_allow_merge_if_pipeline_succeeds` | `bool` | No |  |
| `only_mirror_protected_branches` | `str` | No |  |
| `open_issues_count` | `int` | No |  |
| `owner` | `dict` | No | API_Entities_UserBasic model |
| `package_registry_access_level` | `str` | No |  |
| `packages_enabled` | `bool` | No |  |
| `pages_access_level` | `str` | No |  |
| `path` | `str` | No |  |
| `path_with_namespace` | `str` | No |  |
| `permissions` | `dict` | No |  |
| `pre_receive_secret_detection_enabled` | `bool` | No |  |
| `prevent_merge_without_jira_issue` | `str` | No |  |
| `printing_merge_request_link_enabled` | `bool` | No |  |
| `public_jobs` | `bool` | No |  |
| `readme_url` | `str` | No |  |
| `releases_access_level` | `str` | No |  |
| `remove_source_branch_after_merge` | `bool` | No |  |
| `repository_access_level` | `str` | No |  |
| `repository_object_format` | `str` | No |  |
| `repository_storage` | `str` | No |  |
| `request_access_enabled` | `bool` | No |  |
| `requirements_access_level` | `str` | No |  |
| `requirements_enabled` | `str` | No |  |
| `resolve_outdated_diff_discussions` | `bool` | No |  |
| `resource_group_default_process_mode` | `str` | No |  |
| `restrict_user_defined_variables` | `bool` | No |  |
| `runner_token_expiration_interval` | `int` | No |  |
| `runners_token` | `str` | No |  |
| `secret_push_protection_enabled` | `bool` | No |  |
| `security_and_compliance_access_level` | `str` | No |  |
| `security_and_compliance_enabled` | `str` | No |  |
| `service_desk_address` | `str` | No |  |
| `service_desk_enabled` | `bool` | No |  |
| `shared_runners_enabled` | `bool` | No |  |
| `shared_with_groups` | `list` | No |  |
| `show_diff_preview_in_email` | `bool` | No |  |
| `snippets_access_level` | `str` | No |  |
| `snippets_enabled` | `bool` | No |  |
| `spp_repository_pipeline_access` | `bool` | No | The spp_repository_pipeline_access setting is only visible if the security_orchestration_policies feature is available. |
| `squash_commit_template` | `str` | No |  |
| `squash_option` | `str` | No |  |
| `ssh_url_to_repo` | `str` | No |  |
| `star_count` | `int` | No |  |
| `statistics` | `dict` | No |  |
| `suggestion_commit_message` | `str` | No |  |
| `tag_list` | `list` | No |  |
| `topics` | `list` | No |  |
| `updated_at` | `str` | No |  |
| `visibility` | `str` | No |  |
| `warn_about_potentially_unwanted_characters` | `bool` | No |  |
| `web_based_commit_signing_enabled` | `str` | No |  |
| `web_url` | `str` | No |  |
| `wiki_access_level` | `str` | No |  |
| `wiki_enabled` | `bool` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiEntitiesProjectWithAccess().create({
    "project_id": "example_project_id",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesProjectWithAccess().load({"id": "api_entities_project_with_access_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesProjectWithAccessEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesProjectsContainerRegistryProtectionRuleEntity

```python
api_entities_projects_container_registry_protection_rule = client.ApiEntitiesProjectsContainerRegistryProtectionRule()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `int` | No |  |
| `minimum_access_level_for_delete` | `str` | No |  |
| `minimum_access_level_for_push` | `str` | No |  |
| `project_id` | `int` | No |  |
| `repository_path_pattern` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiEntitiesProjectsContainerRegistryProtectionRule().create({
    "project_id": "example_project_id",  # str
    "post_api_v4_projects_id_registry_protection_repository_rule": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiEntitiesProjectsContainerRegistryProtectionRule().list({"project_id": "example"})
for api_entities_projects_container_registry_protection_rule in results:
    print(api_entities_projects_container_registry_protection_rule)
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ApiEntitiesProjectsContainerRegistryProtectionRule().update({
    "id": "id",
    "project_id": "project_id",
    "patch_api_v4_projects_id_registry_protection_repository_rules_protection_rule_id": {},
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesProjectsContainerRegistryProtectionRuleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesProjectsPackagesProtectionRuleEntity

```python
api_entities_projects_packages_protection_rule = client.ApiEntitiesProjectsPackagesProtectionRule()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `int` | No |  |
| `minimum_access_level_for_delete` | `str` | No |  |
| `minimum_access_level_for_push` | `str` | No |  |
| `package_name_pattern` | `str` | No |  |
| `package_type` | `str` | No |  |
| `project_id` | `int` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiEntitiesProjectsPackagesProtectionRule().create({
    "project_id": "example_project_id",  # str
    "post_api_v4_projects_id_packages_protection_rule": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiEntitiesProjectsPackagesProtectionRule().list({"project_id": "example"})
for api_entities_projects_packages_protection_rule in results:
    print(api_entities_projects_packages_protection_rule)
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ApiEntitiesProjectsPackagesProtectionRule().update({
    "id": "id",
    "project_id": "project_id",
    "patch_api_v4_projects_id_packages_protection_rules_package_protection_rule_id": {},
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesProjectsPackagesProtectionRuleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesProjectsTopicEntity

```python
api_entities_projects_topic = client.ApiEntitiesProjectsTopic()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_url` | `str` | No |  |
| `description` | `str` | No |  |
| `id` | `str` | No |  |
| `name` | `str` | No |  |
| `organization_id` | `str` | No |  |
| `title` | `str` | No |  |
| `total_projects_count` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiEntitiesProjectsTopic().create({
    "post_api_v4_topic": {},  # dict
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesProjectsTopic().load({"id": "api_entities_projects_topic_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ApiEntitiesProjectsTopic().update({
    "id": "api_entities_projects_topic_id",
    "put_api_v4_topics_id": {},
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesProjectsTopicEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesProtectedBranchEntity

```python
api_entities_protected_branch = client.ApiEntitiesProtectedBranch()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_force_push` | `bool` | No |  |
| `code_owner_approval_required` | `bool` | No |  |
| `id` | `int` | No |  |
| `inherited` | `bool` | No |  |
| `merge_access_levels` | `list` | No |  |
| `name` | `str` | No |  |
| `push_access_levels` | `list` | No |  |
| `unprotect_access_levels` | `list` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiEntitiesProtectedBranch().create({
    "project_id": "example_project_id",  # str
    "post_api_v4_projects_id_protected_branch": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiEntitiesProtectedBranch().list({"project_id": "example"})
for api_entities_protected_branch in results:
    print(api_entities_protected_branch)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesProtectedBranch().load({"id": "api_entities_protected_branch_id", "project_id": "project_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ApiEntitiesProtectedBranch().update({
    "id": "api_entities_protected_branch_id",
    "project_id": "project_id",
    "patch_api_v4_projects_id_protected_branches_name": {},
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesProtectedBranchEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesProtectedTagEntity

```python
api_entities_protected_tag = client.ApiEntitiesProtectedTag()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access_level` | `int` | No |  |
| `access_level_description` | `str` | No |  |
| `create_access_levels` | `dict` | No |  |
| `deploy_key_id` | `int` | No |  |
| `group_id` | `int` | No |  |
| `id` | `int` | No |  |
| `name` | `str` | No |  |
| `user_id` | `int` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiEntitiesProtectedTag().create({
    "project_id": "example_project_id",  # str
    "post_api_v4_projects_id_protected_tag": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiEntitiesProtectedTag().list({"project_id": "example"})
for api_entities_protected_tag in results:
    print(api_entities_protected_tag)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesProtectedTag().load({"id": "api_entities_protected_tag_id", "project_id": "project_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesProtectedTagEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesPublicGroupDetailEntity

```python
api_entities_public_group_detail = client.ApiEntitiesPublicGroupDetail()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_url` | `str` | No |  |
| `full_name` | `str` | No |  |
| `full_path` | `str` | No |  |
| `id` | `str` | No |  |
| `name` | `str` | No |  |
| `web_url` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiEntitiesPublicGroupDetail().list({"project_id": "example"})
for api_entities_public_group_detail in results:
    print(api_entities_public_group_detail)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesPublicGroupDetailEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesRelatedIssueEntity

```python
api_entities_related_issue = client.ApiEntitiesRelatedIssue()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assignee` | `dict` | No | API_Entities_UserBasic model |
| `assignees` | `dict` | No | API_Entities_UserBasic model |
| `author` | `dict` | No | API_Entities_UserBasic model |
| `blocking_issues_count` | `str` | No |  |
| `closed_at` | `str` | No |  |
| `closed_by` | `dict` | No | API_Entities_UserBasic model |
| `confidential` | `bool` | No |  |
| `created_at` | `str` | No |  |
| `description` | `str` | No |  |
| `discussion_locked` | `bool` | No |  |
| `downvotes` | `str` | No |  |
| `due_date` | `str` | No |  |
| `epic` | `dict` | No |  |
| `epic_iid` | `str` | No |  |
| `has_tasks` | `bool` | No |  |
| `health_status` | `str` | No |  |
| `id` | `int` | No |  |
| `iid` | `int` | No |  |
| `imported` | `str` | No |  |
| `imported_from` | `str` | No |  |
| `issue_link_id` | `str` | No |  |
| `issue_type` | `str` | No |  |
| `iteration` | `dict` | No |  |
| `labels` | `list` | No |  |
| `link_created_at` | `str` | No |  |
| `link_type` | `str` | No |  |
| `link_updated_at` | `str` | No |  |
| `links` | `dict` | No |  |
| `merge_requests_count` | `str` | No |  |
| `milestone` | `dict` | No |  |
| `moved_to_id` | `str` | No |  |
| `project_id` | `int` | No |  |
| `references` | `dict` | No |  |
| `service_desk_reply_to` | `str` | No |  |
| `severity` | `str` | No | One of ["UNKNOWN", "LOW", "MEDIUM", "HIGH", "CRITICAL"] |
| `state` | `str` | No |  |
| `subscribed` | `str` | No |  |
| `task_completion_status` | `str` | No |  |
| `task_status` | `str` | No |  |
| `time_stats` | `dict` | No | API_Entities_IssuableTimeStats model |
| `title` | `str` | No |  |
| `type` | `str` | No | One of ["ISSUE", "INCIDENT", "TEST_CASE", "REQUIREMENT", "TASK", "TICKET"] |
| `updated_at` | `str` | No |  |
| `upvotes` | `str` | No |  |
| `user_notes_count` | `str` | No |  |
| `web_url` | `str` | No |  |
| `weight` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiEntitiesRelatedIssue().list({"issue_id": "example", "project_id": "example"})
for api_entities_related_issue in results:
    print(api_entities_related_issue)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesRelatedIssueEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesRelationImportTrackerEntity

```python
api_entities_relation_import_tracker = client.ApiEntitiesRelationImportTracker()
```

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiEntitiesRelationImportTracker().create({
    "file": "example_file",  # Any
    "path": "example_path",  # str
    "relation": "example_relation",  # Any
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesRelationImportTrackerEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesReleaseEntity

```python
api_entities_release = client.ApiEntitiesRelease()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assets` | `dict` | No |  |
| `author` | `dict` | No | API_Entities_UserBasic model |
| `commit` | `dict` | No | API_Entities_Commit model |
| `commit_path` | `str` | No |  |
| `created_at` | `str` | No |  |
| `description` | `str` | No |  |
| `description_html` | `str` | No |  |
| `evidences` | `dict` | No |  |
| `id` | `str` | No |  |
| `links` | `dict` | No |  |
| `milestones` | `dict` | No |  |
| `name` | `str` | No |  |
| `released_at` | `str` | No |  |
| `tag_name` | `str` | No |  |
| `tag_path` | `str` | No |  |
| `upcoming_release` | `bool` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiEntitiesRelease().create({
    "project_id": "example_project_id",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiEntitiesRelease().list({"project_id": "example"})
for api_entities_release in results:
    print(api_entities_release)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesRelease().load({"id": "api_entities_release_id", "project_id": "project_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ApiEntitiesRelease().update({
    "id": "api_entities_release_id",
    "project_id": "project_id",
    "put_api_v4_projects_id_releases_tag_name": {},
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesReleaseEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesReleasesLinkEntity

```python
api_entities_releases_link = client.ApiEntitiesReleasesLink()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `direct_asset_url` | `str` | No |  |
| `id` | `int` | No |  |
| `link_type` | `str` | No |  |
| `name` | `str` | No |  |
| `url` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiEntitiesReleasesLink().create({
    "project_id": "example_project_id",  # str
    "release_id": "example_release_id",  # str
    "post_api_v4_projects_id_releases_tag_name_assets_link": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiEntitiesReleasesLink().list({"project_id": "example", "release_id": "example"})
for api_entities_releases_link in results:
    print(api_entities_releases_link)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesReleasesLink().load({"id": "api_entities_releases_link_id", "project_id": "project_id", "release_id": "release_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ApiEntitiesReleasesLink().update({
    "id": "api_entities_releases_link_id",
    "project_id": "project_id",
    "release_id": "release_id",
    "put_api_v4_projects_id_releases_tag_name_assets_links_link_id": {},
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesReleasesLinkEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesRemoteMirrorEntity

```python
api_entities_remote_mirror = client.ApiEntitiesRemoteMirror()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_method` | `str` | No |  |
| `enabled` | `bool` | No |  |
| `host_keys` | `list` | No |  |
| `id` | `int` | No |  |
| `keep_divergent_refs` | `bool` | No |  |
| `last_error` | `int` | No |  |
| `last_successful_update_at` | `str` | No |  |
| `last_update_at` | `str` | No |  |
| `last_update_started_at` | `str` | No |  |
| `mirror_branch_regex` | `str` | No |  |
| `only_protected_branches` | `bool` | No |  |
| `update_status` | `str` | No |  |
| `url` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiEntitiesRemoteMirror().create({
    "project_id": "example_project_id",  # str
    "post_api_v4_projects_id_remote_mirror": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiEntitiesRemoteMirror().list({"project_id": "example"})
for api_entities_remote_mirror in results:
    print(api_entities_remote_mirror)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesRemoteMirror().load({"id": "api_entities_remote_mirror_id", "project_id": "project_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ApiEntitiesRemoteMirror().update({
    "id": "api_entities_remote_mirror_id",
    "project_id": "project_id",
    "put_api_v4_projects_id_remote_mirrors_mirror_id": {},
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesRemoteMirrorEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesRepositoryHealthEntity

```python
api_entities_repository_health = client.ApiEntitiesRepositoryHealth()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alternates` | `dict` | No |  |
| `bitmap` | `dict` | No |  |
| `commit_graph` | `dict` | No |  |
| `is_object_pool` | `bool` | No |  |
| `last_full_repack` | `dict` | No |  |
| `multi_pack_index` | `dict` | No |  |
| `multi_pack_index_bitmap` | `dict` | No |  |
| `objects` | `dict` | No |  |
| `references` | `dict` | No |  |
| `size` | `int` | No |  |
| `updated_at` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesRepositoryHealth().load({"project_id": "project_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesRepositoryHealthEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesResourceAccessTokenWithTokenEntity

```python
api_entities_resource_access_token_with_token = client.ApiEntitiesResourceAccessTokenWithToken()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access_level` | `int` | No |  |
| `active` | `bool` | No |  |
| `created_at` | `str` | No |  |
| `description` | `str` | No |  |
| `expires_at` | `str` | No |  |
| `id` | `int` | No |  |
| `last_used_at` | `str` | No |  |
| `name` | `str` | No |  |
| `resource_id` | `int` | No |  |
| `resource_type` | `str` | No |  |
| `revoked` | `bool` | No |  |
| `scopes` | `list` | No |  |
| `token` | `str` | No |  |
| `user_id` | `int` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiEntitiesResourceAccessTokenWithToken().create({
    "group_id": "example_group_id",  # str
    "post_api_v4_groups_id_access_tokens_self_rotate": {},  # dict
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesResourceAccessTokenWithTokenEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesResourceMilestoneEventEntity

```python
api_entities_resource_milestone_event = client.ApiEntitiesResourceMilestoneEvent()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `str` | No |  |
| `created_at` | `str` | No |  |
| `id` | `int` | No |  |
| `milestone` | `dict` | No |  |
| `resource_id` | `int` | No |  |
| `resource_type` | `str` | No |  |
| `state` | `str` | No |  |
| `user` | `dict` | No | API_Entities_UserBasic model |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiEntitiesResourceMilestoneEvent().list({"project_id": "example"})
for api_entities_resource_milestone_event in results:
    print(api_entities_resource_milestone_event)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesResourceMilestoneEvent().load({"id": "api_entities_resource_milestone_event_id", "project_id": "project_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesResourceMilestoneEventEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesSnippetEntity

```python
api_entities_snippet = client.ApiEntitiesSnippet()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `dict` | No | API_Entities_UserBasic model |
| `created_at` | `str` | No |  |
| `description` | `str` | No |  |
| `file_name` | `str` | No |  |
| `files` | `list` | No |  |
| `http_url_to_repo` | `str` | No |  |
| `id` | `int` | No |  |
| `imported` | `bool` | No |  |
| `imported_from` | `str` | No |  |
| `project_id` | `int` | No |  |
| `raw_url` | `str` | No |  |
| `repository_storage` | `str` | No |  |
| `ssh_url_to_repo` | `str` | No |  |
| `title` | `str` | No |  |
| `updated_at` | `str` | No |  |
| `visibility` | `str` | No |  |
| `web_url` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiEntitiesSnippet().list()
for api_entities_snippet in results:
    print(api_entities_snippet)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesSnippetEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesSshKeyWithUserEntity

```python
api_entities_ssh_key_with_user = client.ApiEntitiesSshKeyWithUser()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_path` | `str` | No |  |
| `avatar_url` | `str` | No |  |
| `bio` | `str` | No |  |
| `bot` | `str` | No |  |
| `can_create_group` | `bool` | No |  |
| `can_create_project` | `bool` | No |  |
| `color_scheme_id` | `int` | No |  |
| `commit_email` | `str` | No |  |
| `confirmed_at` | `str` | No |  |
| `created_at` | `str` | No |  |
| `current_sign_in_at` | `str` | No |  |
| `custom_attributes` | `list` | No |  |
| `discord` | `str` | No |  |
| `email` | `str` | No |  |
| `external` | `str` | No |  |
| `extra_shared_runners_minutes_limit` | `str` | No |  |
| `followers` | `str` | No |  |
| `following` | `str` | No |  |
| `github` | `str` | No |  |
| `id` | `int` | No |  |
| `identities` | `dict` | No |  |
| `is_followed` | `bool` | No |  |
| `job_title` | `str` | No |  |
| `last_activity_on` | `str` | No |  |
| `last_sign_in_at` | `str` | No |  |
| `linkedin` | `str` | No |  |
| `local_time` | `str` | No |  |
| `location` | `str` | No |  |
| `locked` | `bool` | No |  |
| `name` | `str` | No |  |
| `organization` | `str` | No |  |
| `preferred_language` | `str` | No |  |
| `private_profile` | `bool` | No |  |
| `projects_limit` | `int` | No |  |
| `pronouns` | `str` | No |  |
| `public_email` | `str` | No |  |
| `scim_identities` | `dict` | No |  |
| `shared_runners_minutes_limit` | `str` | No |  |
| `state` | `str` | No |  |
| `theme_id` | `int` | No |  |
| `twitter` | `str` | No |  |
| `two_factor_enabled` | `bool` | No |  |
| `username` | `str` | No |  |
| `web_url` | `str` | No |  |
| `website_url` | `str` | No |  |
| `work_information` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesSshKeyWithUser().load({"id": "api_entities_ssh_key_with_user_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesSshKeyWithUserEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesSuggestionEntity

```python
api_entities_suggestion = client.ApiEntitiesSuggestion()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `appliable` | `str` | No |  |
| `applied` | `str` | No |  |
| `from_content` | `str` | No |  |
| `from_line` | `str` | No |  |
| `id` | `str` | No |  |
| `to_content` | `str` | No |  |
| `to_line` | `str` | No |  |

### Operations

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ApiEntitiesSuggestion().update({
    "put_api_v4_suggestions_batch_apply": {},
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesSuggestionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesSystemBroadcastMessageEntity

```python
api_entities_system_broadcast_message = client.ApiEntitiesSystemBroadcastMessage()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | No |  |
| `broadcast_type` | `str` | No |  |
| `color` | `str` | No |  |
| `dismissable` | `str` | No |  |
| `ends_at` | `str` | No |  |
| `font` | `str` | No |  |
| `id` | `str` | No |  |
| `message` | `str` | No |  |
| `starts_at` | `str` | No |  |
| `target_access_levels` | `str` | No |  |
| `target_path` | `str` | No |  |
| `theme` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiEntitiesSystemBroadcastMessage().create({
    "post_api_v4_broadcast_message": {},  # dict
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesSystemBroadcastMessage().load({"id": "api_entities_system_broadcast_message_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.ApiEntitiesSystemBroadcastMessage().remove({"id": "api_entities_system_broadcast_message_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ApiEntitiesSystemBroadcastMessage().update({
    "id": "api_entities_system_broadcast_message_id",
    "put_api_v4_broadcast_messages_id": {},
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesSystemBroadcastMessageEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesTagEntity

```python
api_entities_tag = client.ApiEntitiesTag()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `commit` | `dict` | No | API_Entities_Commit model |
| `created_at` | `str` | No |  |
| `id` | `str` | No |  |
| `message` | `str` | No |  |
| `name` | `str` | No |  |
| `protected` | `bool` | No |  |
| `release` | `dict` | No |  |
| `target` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiEntitiesTag().create({
    "project_id": "example_project_id",  # str
    "post_api_v4_projects_id_repository_tag": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiEntitiesTag().list({"project_id": "example"})
for api_entities_tag in results:
    print(api_entities_tag)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesTag().load({"id": "api_entities_tag_id", "project_id": "project_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesTagEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesTagSignatureEntity

```python
api_entities_tag_signature = client.ApiEntitiesTagSignature()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `signature` | `str` | No |  |
| `signature_type` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesTagSignature().load({"project_id": "project_id", "tag_name": "tag_name"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesTagSignatureEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesTemplatesListEntity

```python
api_entities_templates_list = client.ApiEntitiesTemplatesList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `key` | `str` | No |  |
| `name` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesTemplatesList().load({"project_id": "project_id", "type": "type"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesTemplatesListEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesTerraformModuleVersionEntity

```python
api_entities_terraform_module_version = client.ApiEntitiesTerraformModuleVersion()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |
| `modules` | `str` | No |  |
| `name` | `str` | No |  |
| `provider` | `str` | No |  |
| `providers` | `str` | No |  |
| `root` | `str` | No |  |
| `source` | `str` | No |  |
| `submodules` | `str` | No |  |
| `version` | `str` | No |  |
| `versions` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiEntitiesTerraformModuleVersion().list({"module_name": "example", "module_system": "example", "v1_id": "example"})
for api_entities_terraform_module_version in results:
    print(api_entities_terraform_module_version)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesTerraformModuleVersion().load({"module_name": "module_name", "module_system": "module_system"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesTerraformModuleVersionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesTreeObjectEntity

```python
api_entities_tree_object = client.ApiEntitiesTreeObject()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |
| `mode` | `str` | No |  |
| `name` | `str` | No |  |
| `path` | `str` | No |  |
| `type` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesTreeObject().load({"project_id": "project_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesTreeObjectEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesTriggerEntity

```python
api_entities_trigger = client.ApiEntitiesTrigger()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_path` | `str` | No |  |
| `avatar_url` | `str` | No |  |
| `created_at` | `str` | No |  |
| `custom_attributes` | `list` | No |  |
| `description` | `str` | No |  |
| `expires_at` | `str` | No |  |
| `id` | `int` | No |  |
| `last_used` | `str` | No |  |
| `locked` | `bool` | No |  |
| `name` | `str` | No |  |
| `owner` | `dict` | No | API_Entities_UserBasic model |
| `public_email` | `str` | No |  |
| `state` | `str` | No |  |
| `token` | `str` | No |  |
| `updated_at` | `str` | No |  |
| `username` | `str` | No |  |
| `web_url` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiEntitiesTrigger().create({
    "project_id": "example_project_id",  # str
    "post_api_v4_projects_id_trigger": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiEntitiesTrigger().list({"project_id": "example"})
for api_entities_trigger in results:
    print(api_entities_trigger)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesTrigger().load({"id": "api_entities_trigger_id", "project_id": "project_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ApiEntitiesTrigger().update({
    "id": "api_entities_trigger_id",
    "project_id": "project_id",
    "put_api_v4_projects_id_triggers_trigger_id": {},
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesTriggerEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesUserAgentDetailEntity

```python
api_entities_user_agent_detail = client.ApiEntitiesUserAgentDetail()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `akismet_submitted` | `bool` | No |  |
| `ip_address` | `str` | No |  |
| `user_agent` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesUserAgentDetail().load({"snippet_id": "snippet_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesUserAgentDetailEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesUserCountEntity

```python
api_entities_user_count = client.ApiEntitiesUserCount()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assigned_issues` | `int` | No |  |
| `assigned_merge_requests` | `int` | No |  |
| `merge_requests` | `int` | No |  |
| `review_requested_merge_requests` | `int` | No |  |
| `todos` | `int` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesUserCount().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesUserCountEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesUserPublicEntity

```python
api_entities_user_public = client.ApiEntitiesUserPublic()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_path` | `str` | No |  |
| `avatar_url` | `str` | No |  |
| `bio` | `str` | No |  |
| `bot` | `str` | No |  |
| `can_create_group` | `bool` | No |  |
| `can_create_project` | `bool` | No |  |
| `color_scheme_id` | `int` | No |  |
| `commit_email` | `str` | No |  |
| `confirmed_at` | `str` | No |  |
| `created_at` | `str` | No |  |
| `current_sign_in_at` | `str` | No |  |
| `custom_attributes` | `list` | No |  |
| `discord` | `str` | No |  |
| `email` | `str` | No |  |
| `external` | `str` | No |  |
| `extra_shared_runners_minutes_limit` | `str` | No |  |
| `followers` | `str` | No |  |
| `following` | `str` | No |  |
| `github` | `str` | No |  |
| `id` | `int` | No |  |
| `identities` | `dict` | No |  |
| `is_followed` | `bool` | No |  |
| `job_title` | `str` | No |  |
| `key` | `str` | No |  |
| `last_activity_on` | `str` | No |  |
| `last_sign_in_at` | `str` | No |  |
| `linkedin` | `str` | No |  |
| `local_time` | `str` | No |  |
| `location` | `str` | No |  |
| `locked` | `bool` | No |  |
| `name` | `str` | No |  |
| `organization` | `str` | No |  |
| `preferred_language` | `str` | No |  |
| `private_profile` | `bool` | No |  |
| `projects_limit` | `int` | No |  |
| `pronouns` | `str` | No |  |
| `public_email` | `str` | No |  |
| `scim_identities` | `dict` | No |  |
| `shared_runners_minutes_limit` | `str` | No |  |
| `state` | `str` | No |  |
| `theme_id` | `int` | No |  |
| `twitter` | `str` | No |  |
| `two_factor_enabled` | `bool` | No |  |
| `username` | `str` | No |  |
| `value` | `str` | No |  |
| `web_url` | `str` | No |  |
| `website_url` | `str` | No |  |
| `work_information` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiEntitiesUserPublic().list({"group_id": "example"})
for api_entities_user_public in results:
    print(api_entities_user_public)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesUserPublicEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesUserWithAdminEntity

```python
api_entities_user_with_admin = client.ApiEntitiesUserWithAdmin()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `key` | `str` | No |  |
| `value` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiEntitiesUserWithAdmin().list({"fingerprint": "example"})
for api_entities_user_with_admin in results:
    print(api_entities_user_with_admin)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesUserWithAdminEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesWikiAttachmentEntity

```python
api_entities_wiki_attachment = client.ApiEntitiesWikiAttachment()
```

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiEntitiesWikiAttachment().create({
    "group_id": "example_group_id",  # str
    "post_api_v4_groups_id_wikis_attachment": {},  # dict
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesWikiAttachmentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesWikiPageEntity

```python
api_entities_wiki_page = client.ApiEntitiesWikiPage()
```

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiEntitiesWikiPage().create({
    "group_id": "example_group_id",  # str
    "post_api_v4_groups_id_wiki": {},  # dict
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiEntitiesWikiPage().load({"slug": "slug"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ApiEntitiesWikiPage().update({
    "slug": "slug",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesWikiPageEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntitiesWikiPageBasicEntity

```python
api_entities_wiki_page_basic = client.ApiEntitiesWikiPageBasic()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `format` | `str` | No |  |
| `slug` | `str` | No |  |
| `title` | `str` | No |  |
| `wiki_page_meta_id` | `int` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiEntitiesWikiPageBasic().list({"group_id": "example"})
for api_entities_wiki_page_basic in results:
    print(api_entities_wiki_page_basic)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesWikiPageBasicEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApplicationEntity

```python
application = client.Application()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Application().remove({"id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApplicationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AwardEmojiEntity

```python
award_emoji = client.AwardEmoji()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.AwardEmoji().remove({"id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AwardEmojiEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BadgeEntity

```python
badge = client.Badge()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Badge().remove({"id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BadgeEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BranchEntity

```python
branch = client.Branch()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Branch().remove({"project_id": "project_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BranchEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CargoPackageEntity

```python
cargo_package = client.CargoPackage()
```

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.CargoPackage().load({"project_id": "project_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CargoPackageEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CiVariableEntity

```python
ci_variable = client.CiVariable()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.CiVariable().remove({"id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CiVariableEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ClusterEntity

```python
cluster = client.Cluster()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Cluster().remove({"id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ClusterEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ClusterAgentEntity

```python
cluster_agent = client.ClusterAgent()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.ClusterAgent().remove({"id": "id", "project_id": "project_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ClusterAgentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ComposerEntity

```python
composer = client.Composer()
```

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Composer().create({
    "project_id": "example_project_id",  # str
    "post_api_v4_projects_id_packages_composer": {},  # dict
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ComposerEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ComposerPackageEntity

```python
composer_package = client.ComposerPackage()
```

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ComposerPackage().load({"group_id": "group_id", "sha": "sha"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ComposerPackageEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ConanEntity

```python
conan = client.Conan()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Conan().remove({"package_channel": "package_channel", "package_name": "package_name", "package_username": "package_username", "package_version": "package_version"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConanEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ConanPackageEntity

```python
conan_package = client.ConanPackage()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ConanPackage().load({"file_id": "file_id", "file_name": "file_name", "package_channel": "package_channel", "package_username": "package_username", "package_version": "package_version", "recipe_revision": "recipe_revision"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.ConanPackage().remove({"conan_id": "conan_id", "package_channel": "package_channel", "package_username": "package_username", "package_version": "package_version", "project_id": "project_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ConanPackage().update({
    "file_name": "file_name",
    "package_channel": "package_channel",
    "package_username": "package_username",
    "package_version": "package_version",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConanPackageEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ContainerRegistryEntity

```python
container_registry = client.ContainerRegistry()
```

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.ContainerRegistry().remove({"project_id": "project_id", "repository_id": "repository_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ContainerRegistryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ContainerRegistryEventEntity

```python
container_registry_event = client.ContainerRegistryEvent()
```

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ContainerRegistryEvent().create({
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ContainerRegistryEventEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CustomAttributeEntity

```python
custom_attribute = client.CustomAttribute()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |
| `key` | `str` | No |  |
| `value` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.CustomAttribute().load({"id": "custom_attribute_id", "group_id": "group_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomAttributeEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DebianEntity

```python
debian = client.Debian()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Debian().update({
    "id": "id",
    "project_id": "project_id",
    "put_api_v4_projects_id_packages_debian_file_name": {},
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DebianEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DebianDistributionEntity

```python
debian_distribution = client.DebianDistribution()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.DebianDistribution().remove({"id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DebianDistributionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DebianPackageEntity

```python
debian_package = client.DebianPackage()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.DebianPackage().load({"id": "debian_package_id", "distribution": "distribution"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DebianPackageEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DependencyProxyEntity

```python
dependency_proxy = client.DependencyProxy()
```

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.DependencyProxy().remove({"group_id": "group_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DependencyProxyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DeployKeyEntity

```python
deploy_key = client.DeployKey()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.DeployKey().remove({"id": "id", "project_id": "project_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DeployKeyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DeployTokenEntity

```python
deploy_token = client.DeployToken()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.DeployToken().remove({"id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DeployTokenEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DeploymentEntity

```python
deployment = client.Deployment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Deployment().remove({"id": "id", "project_id": "project_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DeploymentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EeApiEntitiesApprovalStateEntity

```python
ee_api_entities_approval_state = client.EeApiEntitiesApprovalState()
```

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.EeApiEntitiesApprovalState().create({
    "merge_request_id": "example_merge_request_id",  # str
    "project_id": "example_project_id",  # str
    "post_api_v4_projects_id_merge_requests_merge_request_iid_approval": {},  # dict
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EeApiEntitiesApprovalStateEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EeApiEntitiesAuditEventEntity

```python
ee_api_entities_audit_event = client.EeApiEntitiesAuditEvent()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author_id` | `str` | No |  |
| `created_at` | `str` | No |  |
| `details` | `str` | No |  |
| `entity_id` | `str` | No |  |
| `entity_type` | `str` | No |  |
| `event_name` | `str` | No |  |
| `id` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.EeApiEntitiesAuditEvent().list({"group_id": "example"})
for ee_api_entities_audit_event in results:
    print(ee_api_entities_audit_event)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.EeApiEntitiesAuditEvent().load({"id": "ee_api_entities_audit_event_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EeApiEntitiesAuditEventEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EeApiEntitiesBillableMembershipEntity

```python
ee_api_entities_billable_membership = client.EeApiEntitiesBillableMembership()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `custom_role` | `str` | No |  |
| `integer_value` | `str` | No |  |
| `string_value` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.EeApiEntitiesBillableMembership().load({"billable_member_id": "billable_member_id", "group_id": "group_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EeApiEntitiesBillableMembershipEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EeApiEntitiesGeoNodeStatusEntity

```python
ee_api_entities_geo_node_status = client.EeApiEntitiesGeoNodeStatus()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ci_secure_files_checksum_failed_count` | `str` | No |  |
| `ci_secure_files_checksum_total_count` | `str` | No |  |
| `ci_secure_files_checksummed_count` | `str` | No |  |
| `ci_secure_files_count` | `str` | No |  |
| `ci_secure_files_failed_count` | `str` | No |  |
| `ci_secure_files_registry_count` | `str` | No |  |
| `ci_secure_files_synced_count` | `str` | No |  |
| `ci_secure_files_synced_in_percentage` | `str` | No |  |
| `ci_secure_files_verification_failed_count` | `str` | No |  |
| `ci_secure_files_verification_total_count` | `str` | No |  |
| `ci_secure_files_verified_count` | `str` | No |  |
| `ci_secure_files_verified_in_percentage` | `str` | No |  |
| `container_repositories_checksum_failed_count` | `str` | No |  |
| `container_repositories_checksum_total_count` | `str` | No |  |
| `container_repositories_checksummed_count` | `str` | No |  |
| `container_repositories_count` | `str` | No |  |
| `container_repositories_failed_count` | `str` | No |  |
| `container_repositories_registry_count` | `str` | No |  |
| `container_repositories_replication_enabled` | `str` | No |  |
| `container_repositories_synced_count` | `str` | No |  |
| `container_repositories_synced_in_percentage` | `str` | No |  |
| `container_repositories_verification_failed_count` | `str` | No |  |
| `container_repositories_verification_total_count` | `str` | No |  |
| `container_repositories_verified_count` | `str` | No |  |
| `container_repositories_verified_in_percentage` | `str` | No |  |
| `cursor_last_event_id` | `str` | No |  |
| `cursor_last_event_timestamp` | `str` | No |  |
| `db_replication_lag_seconds` | `str` | No |  |
| `dependency_proxy_blobs_checksum_failed_count` | `str` | No |  |
| `dependency_proxy_blobs_checksum_total_count` | `str` | No |  |
| `dependency_proxy_blobs_checksummed_count` | `str` | No |  |
| `dependency_proxy_blobs_count` | `str` | No |  |
| `dependency_proxy_blobs_failed_count` | `str` | No |  |
| `dependency_proxy_blobs_registry_count` | `str` | No |  |
| `dependency_proxy_blobs_synced_count` | `str` | No |  |
| `dependency_proxy_blobs_synced_in_percentage` | `str` | No |  |
| `dependency_proxy_blobs_verification_failed_count` | `str` | No |  |
| `dependency_proxy_blobs_verification_total_count` | `str` | No |  |
| `dependency_proxy_blobs_verified_count` | `str` | No |  |
| `dependency_proxy_blobs_verified_in_percentage` | `str` | No |  |
| `dependency_proxy_manifests_checksum_failed_count` | `str` | No |  |
| `dependency_proxy_manifests_checksum_total_count` | `str` | No |  |
| `dependency_proxy_manifests_checksummed_count` | `str` | No |  |
| `dependency_proxy_manifests_count` | `str` | No |  |
| `dependency_proxy_manifests_failed_count` | `str` | No |  |
| `dependency_proxy_manifests_registry_count` | `str` | No |  |
| `dependency_proxy_manifests_synced_count` | `str` | No |  |
| `dependency_proxy_manifests_synced_in_percentage` | `str` | No |  |
| `dependency_proxy_manifests_verification_failed_count` | `str` | No |  |
| `dependency_proxy_manifests_verification_total_count` | `str` | No |  |
| `dependency_proxy_manifests_verified_count` | `str` | No |  |
| `dependency_proxy_manifests_verified_in_percentage` | `str` | No |  |
| `design_management_repositories_checksum_failed_count` | `str` | No |  |
| `design_management_repositories_checksum_total_count` | `str` | No |  |
| `design_management_repositories_checksummed_count` | `str` | No |  |
| `design_management_repositories_count` | `str` | No |  |
| `design_management_repositories_failed_count` | `str` | No |  |
| `design_management_repositories_registry_count` | `str` | No |  |
| `design_management_repositories_synced_count` | `str` | No |  |
| `design_management_repositories_synced_in_percentage` | `str` | No |  |
| `design_management_repositories_verification_failed_count` | `str` | No |  |
| `design_management_repositories_verification_total_count` | `str` | No |  |
| `design_management_repositories_verified_count` | `str` | No |  |
| `design_management_repositories_verified_in_percentage` | `str` | No |  |
| `geo_node_id` | `str` | No |  |
| `git_fetch_event_count_weekly` | `str` | No |  |
| `git_push_event_count_weekly` | `str` | No |  |
| `group_wiki_repositories_checksum_failed_count` | `str` | No |  |
| `group_wiki_repositories_checksum_total_count` | `str` | No |  |
| `group_wiki_repositories_checksummed_count` | `str` | No |  |
| `group_wiki_repositories_count` | `str` | No |  |
| `group_wiki_repositories_failed_count` | `str` | No |  |
| `group_wiki_repositories_registry_count` | `str` | No |  |
| `group_wiki_repositories_synced_count` | `str` | No |  |
| `group_wiki_repositories_synced_in_percentage` | `str` | No |  |
| `group_wiki_repositories_verification_failed_count` | `str` | No |  |
| `group_wiki_repositories_verification_total_count` | `str` | No |  |
| `group_wiki_repositories_verified_count` | `str` | No |  |
| `group_wiki_repositories_verified_in_percentage` | `str` | No |  |
| `health` | `str` | No |  |
| `health_status` | `str` | No |  |
| `healthy` | `str` | No |  |
| `job_artifacts_checksum_failed_count` | `str` | No |  |
| `job_artifacts_checksum_total_count` | `str` | No |  |
| `job_artifacts_checksummed_count` | `str` | No |  |
| `job_artifacts_count` | `str` | No |  |
| `job_artifacts_failed_count` | `str` | No |  |
| `job_artifacts_registry_count` | `str` | No |  |
| `job_artifacts_synced_count` | `str` | No |  |
| `job_artifacts_synced_in_percentage` | `str` | No |  |
| `job_artifacts_verification_failed_count` | `str` | No |  |
| `job_artifacts_verification_total_count` | `str` | No |  |
| `job_artifacts_verified_count` | `str` | No |  |
| `job_artifacts_verified_in_percentage` | `str` | No |  |
| `last_event_id` | `str` | No |  |
| `last_event_timestamp` | `str` | No |  |
| `last_successful_status_check_timestamp` | `str` | No |  |
| `lfs_objects_checksum_failed_count` | `str` | No |  |
| `lfs_objects_checksum_total_count` | `str` | No |  |
| `lfs_objects_checksummed_count` | `str` | No |  |
| `lfs_objects_count` | `str` | No |  |
| `lfs_objects_failed_count` | `str` | No |  |
| `lfs_objects_registry_count` | `str` | No |  |
| `lfs_objects_synced_count` | `str` | No |  |
| `lfs_objects_synced_in_percentage` | `str` | No |  |
| `lfs_objects_verification_failed_count` | `str` | No |  |
| `lfs_objects_verification_total_count` | `str` | No |  |
| `lfs_objects_verified_count` | `str` | No |  |
| `lfs_objects_verified_in_percentage` | `str` | No |  |
| `links` | `dict` | No |  |
| `merge_request_diffs_checksum_failed_count` | `str` | No |  |
| `merge_request_diffs_checksum_total_count` | `str` | No |  |
| `merge_request_diffs_checksummed_count` | `str` | No |  |
| `merge_request_diffs_count` | `str` | No |  |
| `merge_request_diffs_failed_count` | `str` | No |  |
| `merge_request_diffs_registry_count` | `str` | No |  |
| `merge_request_diffs_synced_count` | `str` | No |  |
| `merge_request_diffs_synced_in_percentage` | `str` | No |  |
| `merge_request_diffs_verification_failed_count` | `str` | No |  |
| `merge_request_diffs_verification_total_count` | `str` | No |  |
| `merge_request_diffs_verified_count` | `str` | No |  |
| `merge_request_diffs_verified_in_percentage` | `str` | No |  |
| `missing_oauth_application` | `str` | No |  |
| `namespaces` | `dict` | No |  |
| `package_files_checksum_failed_count` | `str` | No |  |
| `package_files_checksum_total_count` | `str` | No |  |
| `package_files_checksummed_count` | `str` | No |  |
| `package_files_count` | `str` | No |  |
| `package_files_failed_count` | `str` | No |  |
| `package_files_registry_count` | `str` | No |  |
| `package_files_synced_count` | `str` | No |  |
| `package_files_synced_in_percentage` | `str` | No |  |
| `package_files_verification_failed_count` | `str` | No |  |
| `package_files_verification_total_count` | `str` | No |  |
| `package_files_verified_count` | `str` | No |  |
| `package_files_verified_in_percentage` | `str` | No |  |
| `pages_deployments_checksum_failed_count` | `str` | No |  |
| `pages_deployments_checksum_total_count` | `str` | No |  |
| `pages_deployments_checksummed_count` | `str` | No |  |
| `pages_deployments_count` | `str` | No |  |
| `pages_deployments_failed_count` | `str` | No |  |
| `pages_deployments_registry_count` | `str` | No |  |
| `pages_deployments_synced_count` | `str` | No |  |
| `pages_deployments_synced_in_percentage` | `str` | No |  |
| `pages_deployments_verification_failed_count` | `str` | No |  |
| `pages_deployments_verification_total_count` | `str` | No |  |
| `pages_deployments_verified_count` | `str` | No |  |
| `pages_deployments_verified_in_percentage` | `str` | No |  |
| `pipeline_artifacts_checksum_failed_count` | `str` | No |  |
| `pipeline_artifacts_checksum_total_count` | `str` | No |  |
| `pipeline_artifacts_checksummed_count` | `str` | No |  |
| `pipeline_artifacts_count` | `str` | No |  |
| `pipeline_artifacts_failed_count` | `str` | No |  |
| `pipeline_artifacts_registry_count` | `str` | No |  |
| `pipeline_artifacts_synced_count` | `str` | No |  |
| `pipeline_artifacts_synced_in_percentage` | `str` | No |  |
| `pipeline_artifacts_verification_failed_count` | `str` | No |  |
| `pipeline_artifacts_verification_total_count` | `str` | No |  |
| `pipeline_artifacts_verified_count` | `str` | No |  |
| `pipeline_artifacts_verified_in_percentage` | `str` | No |  |
| `project_repositories_checksum_failed_count` | `str` | No |  |
| `project_repositories_checksum_total_count` | `str` | No |  |
| `project_repositories_checksummed_count` | `str` | No |  |
| `project_repositories_count` | `str` | No |  |
| `project_repositories_failed_count` | `str` | No |  |
| `project_repositories_registry_count` | `str` | No |  |
| `project_repositories_synced_count` | `str` | No |  |
| `project_repositories_synced_in_percentage` | `str` | No |  |
| `project_repositories_verification_failed_count` | `str` | No |  |
| `project_repositories_verification_total_count` | `str` | No |  |
| `project_repositories_verified_count` | `str` | No |  |
| `project_repositories_verified_in_percentage` | `str` | No |  |
| `project_wiki_repositories_checksum_failed_count` | `str` | No |  |
| `project_wiki_repositories_checksum_total_count` | `str` | No |  |
| `project_wiki_repositories_checksummed_count` | `str` | No |  |
| `project_wiki_repositories_count` | `str` | No |  |
| `project_wiki_repositories_failed_count` | `str` | No |  |
| `project_wiki_repositories_registry_count` | `str` | No |  |
| `project_wiki_repositories_synced_count` | `str` | No |  |
| `project_wiki_repositories_synced_in_percentage` | `str` | No |  |
| `project_wiki_repositories_verification_failed_count` | `str` | No |  |
| `project_wiki_repositories_verification_total_count` | `str` | No |  |
| `project_wiki_repositories_verified_count` | `str` | No |  |
| `project_wiki_repositories_verified_in_percentage` | `str` | No |  |
| `projects_count` | `str` | No |  |
| `proxy_local_requests_event_count_weekly` | `str` | No |  |
| `proxy_remote_requests_event_count_weekly` | `str` | No |  |
| `replication_slots_count` | `str` | No |  |
| `replication_slots_max_retained_wal_bytes` | `str` | No |  |
| `replication_slots_used_count` | `str` | No |  |
| `replication_slots_used_in_percentage` | `str` | No |  |
| `repositories_checked_count` | `str` | No |  |
| `repositories_checked_failed_count` | `str` | No |  |
| `repositories_checked_in_percentage` | `str` | No |  |
| `repositories_count` | `str` | No |  |
| `revision` | `str` | No |  |
| `selective_sync_type` | `str` | No |  |
| `snippet_repositories_checksum_failed_count` | `str` | No |  |
| `snippet_repositories_checksum_total_count` | `str` | No |  |
| `snippet_repositories_checksummed_count` | `str` | No |  |
| `snippet_repositories_count` | `str` | No |  |
| `snippet_repositories_failed_count` | `str` | No |  |
| `snippet_repositories_registry_count` | `str` | No |  |
| `snippet_repositories_synced_count` | `str` | No |  |
| `snippet_repositories_synced_in_percentage` | `str` | No |  |
| `snippet_repositories_verification_failed_count` | `str` | No |  |
| `snippet_repositories_verification_total_count` | `str` | No |  |
| `snippet_repositories_verified_count` | `str` | No |  |
| `snippet_repositories_verified_in_percentage` | `str` | No |  |
| `storage_shards` | `dict` | No |  |
| `storage_shards_match` | `str` | No |  |
| `terraform_state_versions_checksum_failed_count` | `str` | No |  |
| `terraform_state_versions_checksum_total_count` | `str` | No |  |
| `terraform_state_versions_checksummed_count` | `str` | No |  |
| `terraform_state_versions_count` | `str` | No |  |
| `terraform_state_versions_failed_count` | `str` | No |  |
| `terraform_state_versions_registry_count` | `str` | No |  |
| `terraform_state_versions_synced_count` | `str` | No |  |
| `terraform_state_versions_synced_in_percentage` | `str` | No |  |
| `terraform_state_versions_verification_failed_count` | `str` | No |  |
| `terraform_state_versions_verification_total_count` | `str` | No |  |
| `terraform_state_versions_verified_count` | `str` | No |  |
| `terraform_state_versions_verified_in_percentage` | `str` | No |  |
| `updated_at` | `str` | No |  |
| `uploads_checksum_failed_count` | `str` | No |  |
| `uploads_checksum_total_count` | `str` | No |  |
| `uploads_checksummed_count` | `str` | No |  |
| `uploads_count` | `str` | No |  |
| `uploads_failed_count` | `str` | No |  |
| `uploads_registry_count` | `str` | No |  |
| `uploads_synced_count` | `str` | No |  |
| `uploads_synced_in_percentage` | `str` | No |  |
| `uploads_verification_failed_count` | `str` | No |  |
| `uploads_verification_total_count` | `str` | No |  |
| `uploads_verified_count` | `str` | No |  |
| `uploads_verified_in_percentage` | `str` | No |  |
| `version` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.EeApiEntitiesGeoNodeStatus().create({
    "post_api_v4_geo_status": {},  # dict
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EeApiEntitiesGeoNodeStatusEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EeApiEntitiesGeoPipelineRefEntity

```python
ee_api_entities_geo_pipeline_ref = client.EeApiEntitiesGeoPipelineRef()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `pipeline_refs` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.EeApiEntitiesGeoPipelineRef().list({"gl_repository": "example"})
for ee_api_entities_geo_pipeline_ref in results:
    print(ee_api_entities_geo_pipeline_ref)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EeApiEntitiesGeoPipelineRefEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EeApiEntitiesIssuableMetricImageEntity

```python
ee_api_entities_issuable_metric_image = client.EeApiEntitiesIssuableMetricImage()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | No |  |
| `file_path` | `str` | No |  |
| `filename` | `str` | No |  |
| `id` | `str` | No |  |
| `url` | `str` | No |  |
| `url_text` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.EeApiEntitiesIssuableMetricImage().create({
    "issue_id": "example_issue_id",  # str
    "project_id": "example_project_id",  # str
    "post_api_v4_projects_id_issues_issue_iid_metric_image": {},  # dict
})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.EeApiEntitiesIssuableMetricImage().remove({"id": "id", "issue_id": "issue_id", "project_id": "project_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.EeApiEntitiesIssuableMetricImage().update({
    "id": "id",
    "issue_id": "issue_id",
    "project_id": "project_id",
    "put_api_v4_projects_id_issues_issue_iid_metric_images_metric_image_id": {},
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EeApiEntitiesIssuableMetricImageEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EeApiEntitiesMergeRequestApprovalStateEntity

```python
ee_api_entities_merge_request_approval_state = client.EeApiEntitiesMergeRequestApprovalState()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `approvals_required` | `int` | No |  |
| `approved` | `bool` | No |  |
| `approved_by` | `list` | No |  |
| `code_owner` | `bool` | No |  |
| `contains_hidden_groups` | `bool` | No |  |
| `eligible_approvers` | `list` | No |  |
| `groups` | `list` | No |  |
| `id` | `int` | No |  |
| `name` | `str` | No |  |
| `overridden` | `bool` | No |  |
| `report_type` | `str` | No |  |
| `rule_type` | `str` | No |  |
| `section` | `str` | No |  |
| `source_rule` | `dict` | No |  |
| `users` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.EeApiEntitiesMergeRequestApprovalState().list({"merge_request_id": "example", "project_id": "example"})
for ee_api_entities_merge_request_approval_state in results:
    print(ee_api_entities_merge_request_approval_state)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EeApiEntitiesMergeRequestApprovalStateEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EeApiEntitiesSshCertificateEntity

```python
ee_api_entities_ssh_certificate = client.EeApiEntitiesSshCertificate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | No |  |
| `id` | `int` | No |  |
| `key` | `str` | No |  |
| `title` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.EeApiEntitiesSshCertificate().create({
    "group_id": "example_group_id",  # str
    "post_api_v4_groups_id_ssh_certificate": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.EeApiEntitiesSshCertificate().list({"group_id": "example"})
for ee_api_entities_ssh_certificate in results:
    print(ee_api_entities_ssh_certificate)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EeApiEntitiesSshCertificateEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EnvironmentEntity

```python
environment = client.Environment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Environment().create({
    "project_id": "example_project_id",  # str
    "post_api_v4_projects_id_environments_stop_stale": {},  # dict
})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Environment().remove({"id": "id", "project_id": "project_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EnvironmentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ErrorTrackingClientKeyEntity

```python
error_tracking_client_key = client.ErrorTrackingClientKey()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.ErrorTrackingClientKey().remove({"id": "id", "project_id": "project_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ErrorTrackingClientKeyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## FeatureEntity

```python
feature = client.Feature()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Feature().remove({"id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FeatureEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## FeatureFlagEntity

```python
feature_flag = client.FeatureFlag()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.FeatureFlag().create({
    "unleash_id": "example_unleash_id",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.FeatureFlag().load({"project_id": "project_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.FeatureFlag().remove({"id": "id", "project_id": "project_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FeatureFlagEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## FeatureFlagsUserListEntity

```python
feature_flags_user_list = client.FeatureFlagsUserList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.FeatureFlagsUserList().remove({"id": "id", "project_id": "project_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FeatureFlagsUserListEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## FreezePeriodEntity

```python
freeze_period = client.FreezePeriod()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.FreezePeriod().remove({"id": "id", "project_id": "project_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FreezePeriodEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## GenericPackageEntity

```python
generic_package = client.GenericPackage()
```

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.GenericPackage().load({"file_name": "file_name", "generic_id": "generic_id", "project_id": "project_id", "package_version": "package_version"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.GenericPackage().update({
    "file_name": "file_name",
    "generic_id": "generic_id",
    "project_id": "project_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GenericPackageEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## GeoEntity

```python
geo = client.Geo()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Geo().create({
    "post_api_v4_geo_proxy_git_ssh_info_refs_receive_pack": {},  # dict
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Geo().load({"replicable_id": "replicable_id", "replicable_name": "replicable_name"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GeoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## GoProxyEntity

```python
go_proxy = client.GoProxy()
```

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.GoProxy().load({"project_id": "project_id", "module_name": "module_name"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GoProxyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## GroupEntity

```python
group = client.Group()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Group().create({
    "id": "example_id",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Group().load({"id": "group_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Group().remove({"id": "group_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Group().update({
    "id": "group_id",
    "key": "key",
    "put_api_v4_groups_id_custom_attributes_key": {},
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GroupEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## GroupAvatarEntity

```python
group_avatar = client.GroupAvatar()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.GroupAvatar().load({"id": "group_avatar_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GroupAvatarEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## GroupExportEntity

```python
group_export = client.GroupExport()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.GroupExport().create({
    "id": "example_id",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.GroupExport().load({"group_id": "group_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GroupExportEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## GroupImportEntity

```python
group_import = client.GroupImport()
```

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.GroupImport().create({
    "file": "example_file",  # Any
    "name": "example_name",  # str
    "path": "example_path",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GroupImportEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## HelmPackageEntity

```python
helm_package = client.HelmPackage()
```

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.HelmPackage().create({
    "project_id": "example_project_id",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.HelmPackage().load({"project_id": "project_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `HelmPackageEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## HookEntity

```python
hook = client.Hook()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Hook().create({
    "id": "example_id",  # str
})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Hook().remove({"id": "id", "key": "key"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Hook().update({
    "id": "id",
    "key": "key",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `HookEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ImportEntity

```python
import_ = client.Import()
```

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Import().create({
    "post_api_v4_import_github_gist": {},  # dict
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ImportEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IntegrationEntity

```python
integration = client.Integration()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Integration().create({
    "post_api_v4_integrations_slack_event": {},  # dict
})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Integration().remove({"group_id": "group_id", "id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IntegrationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## InvitationEntity

```python
invitation = client.Invitation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Invitation().remove({"id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `InvitationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IssueLinkEntity

```python
issue_link = client.IssueLink()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.IssueLink().remove({"id": "id", "issue_id": "issue_id", "project_id": "project_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IssueLinkEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IssuesStatisticEntity

```python
issues_statistic = client.IssuesStatistic()
```

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.IssuesStatistic().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IssuesStatisticEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## JobEntity

```python
job = client.Job()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Job().create({
    "post_api_v4_jobs_request": {},  # dict
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Job().load({"id": "job_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Job().update({
    "id": "job_id",
    "put_api_v4_jobs_id": {},
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `JobEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MavenPackageEntity

```python
maven_package = client.MavenPackage()
```

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.MavenPackage().load({"file_name": "file_name", "path": "path"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.MavenPackage().update({
    "file_name": "file_name",
    "project_id": "project_id",
    "put_api_v4_projects_id_packages_maven*path_file_name": {},
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MavenPackageEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MemberEntity

```python
member = client.Member()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Member().remove({"id": "id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Member().update({
    "group_id": "group_id",
    "id": "id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MemberEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MergeRequestEntity

```python
merge_request = client.MergeRequest()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.MergeRequest().load({"id": "merge_request_id", "project_id": "project_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.MergeRequest().remove({"id": "merge_request_id", "project_id": "project_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.MergeRequest().update({
    "id": "merge_request_id",
    "project_id": "project_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MergeRequestEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MetadataEntity

```python
metadata = client.Metadata()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `bool` | No |  |
| `externalK8sProxyUrl` | `str` | No |  |
| `externalUrl` | `str` | No |  |
| `version` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Metadata().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MetadataEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MigrationEntity

```python
migration = client.Migration()
```

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Migration().create({
    "timestamp": "example_timestamp",  # Any
    "post_api_v4_admin_migrations_timestamp_mark": {},  # dict
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MigrationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MlModelRegistryEntity

```python
ml_model_registry = client.MlModelRegistry()
```

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.MlModelRegistry().load({"file_name": "file_name", "ml_model_id": "ml_model_id", "project_id": "project_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.MlModelRegistry().update({
    "file_name": "file_name",
    "ml_model_id": "ml_model_id",
    "project_id": "project_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MlModelRegistryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## NamespaceEntity

```python
namespace = client.Namespace()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Namespace().remove({"id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NamespaceEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## NpmEntity

```python
npm = client.Npm()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Npm().update({
    "id": "id",
    "project_id": "project_id",
    "put_api_v4_projects_id_packages_npm_package_name": {},
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NpmEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## NpmPackageEntity

```python
npm_package = client.NpmPackage()
```

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.NpmPackage().create({
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.NpmPackage().load({"project_id": "project_id", "file_name": "file_name", "package_name": "package_name"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.NpmPackage().remove({"tag": "tag", "package_name": "package_name"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.NpmPackage().update({
    "tag": "tag",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NpmPackageEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## NugetEntity

```python
nuget = client.Nuget()
```

### Operations

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Nuget().update({
    "project_id": "project_id",
    "put_api_v4_projects_id_packages_nuget": {},
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NugetEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## NugetPackageEntity

```python
nuget_package = client.NugetPackage()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `authors` | `str` | No |  |
| `count` | `int` | No |  |
| `dependencyGroups` | `list` | No |  |
| `description` | `str` | No |  |
| `iconUrl` | `str` | No |  |
| `id` | `str` | No |  |
| `items` | `list` | No |  |
| `licenseUrl` | `str` | No |  |
| `lower` | `str` | No |  |
| `packageContent` | `str` | No |  |
| `projectUrl` | `str` | No |  |
| `published` | `str` | No |  |
| `summary` | `str` | No |  |
| `tags` | `str` | No |  |
| `upper` | `str` | No |  |
| `version` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.NugetPackage().list({"package_name": "example"})
for nuget_package in results:
    print(nuget_package)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.NugetPackage().load({"project_id": "project_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.NugetPackage().remove({"project_id": "project_id", "package_name": "package_name", "package_version": "package_version"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.NugetPackage().update({
    "project_id": "project_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NugetPackageEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PackageFileEntity

```python
package_file = client.PackageFile()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.PackageFile().load({"id": "package_file_id", "package_id": "package_id", "project_id": "project_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.PackageFile().remove({"id": "package_file_id", "package_id": "package_id", "project_id": "project_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PackageFileEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PageEntity

```python
page = client.Page()
```

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Page().load({"project_id": "project_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Page().remove({"project_id": "project_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Page().update({
    "project_id": "project_id",
    "patch_api_v4_projects_id_page": {},
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PageEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ParticipantEntity

```python
participant = client.Participant()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `key` | `str` | No |  |
| `value` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Participant().list({"project_id": "example"})
for participant in results:
    print(participant)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ParticipantEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PersonalAccessTokenEntity

```python
personal_access_token = client.PersonalAccessToken()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.PersonalAccessToken().remove({"id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PersonalAccessTokenEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ProjectEntity

```python
project = client.Project()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `before_sha` | `str` | No |  |
| `committed_at` | `str` | No |  |
| `coverage` | `float` | No |  |
| `created_at` | `str` | No |  |
| `detailed_status` | `dict` | No |  |
| `duration` | `int` | No | Time spent running in seconds |
| `finished_at` | `str` | No |  |
| `id` | `int` | No |  |
| `iid` | `int` | No |  |
| `name` | `str` | No |  |
| `project_id` | `int` | No |  |
| `queued_duration` | `int` | No | Time spent enqueued in seconds |
| `ref` | `str` | No |  |
| `sha` | `str` | No |  |
| `source` | `str` | No |  |
| `started_at` | `str` | No |  |
| `status` | `str` | No |  |
| `tag` | `bool` | No |  |
| `updated_at` | `str` | No |  |
| `user` | `dict` | No | API_Entities_UserBasic model |
| `web_url` | `str` | No |  |
| `yaml_errors` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Project().create({
    "id": "example_id",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Project().load({"id": "project_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Project().remove({"id": "project_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Project().update({
    "id": "project_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ProjectAvatarEntity

```python
project_avatar = client.ProjectAvatar()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ProjectAvatar().load({"id": "project_avatar_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectAvatarEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ProjectEntityEntity

```python
project_entity = client.ProjectEntity()
```

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ProjectEntity().create({
    "post_api_v4_import_bitbucket_server": {},  # dict
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectEntityEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ProjectExportEntity

```python
project_export = client.ProjectExport()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ProjectExport().create({
    "id": "example_id",  # str
    "post_api_v4_projects_id_export": {},  # dict
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ProjectExport().load({"project_id": "project_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectExportEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ProjectHookEntity

```python
project_hook = client.ProjectHook()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.ProjectHook().remove({"id": "id", "project_id": "project_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectHookEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ProjectImportEntity

```python
project_import = client.ProjectImport()
```

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ProjectImport().create({
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectImportEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ProjectImportEntityEntity

```python
project_import_entity = client.ProjectImportEntity()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `forked` | `bool` | No |  |
| `full_name` | `str` | No |  |
| `full_path` | `str` | No |  |
| `human_import_status_name` | `str` | No |  |
| `id` | `int` | No |  |
| `import_error` | `str` | No |  |
| `import_source` | `str` | No |  |
| `import_status` | `str` | No |  |
| `import_warning` | `str` | No |  |
| `name` | `str` | No |  |
| `provider_link` | `str` | No |  |
| `refs_url` | `str` | No |  |
| `relation_type` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ProjectImportEntity().create({
    "post_api_v4_import_bitbucket": {},  # dict
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectImportEntityEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ProjectPackageEntity

```python
project_package = client.ProjectPackage()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.ProjectPackage().remove({"id": "id", "project_id": "project_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectPackageEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ProjectSnippetEntity

```python
project_snippet = client.ProjectSnippet()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.ProjectSnippet().remove({"id": "id", "project_id": "project_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectSnippetEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ProjectsJobTokenScopeEntity

```python
projects_job_token_scope = client.ProjectsJobTokenScope()
```

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.ProjectsJobTokenScope().remove({"project_id": "project_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ProjectsJobTokenScope().update({
    "project_id": "project_id",
    "patch_api_v4_projects_id_job_token_scope": {},
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectsJobTokenScopeEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ProtectedTagEntity

```python
protected_tag = client.ProtectedTag()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.ProtectedTag().remove({"id": "id", "project_id": "project_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProtectedTagEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PypiEntity

```python
pypi = client.Pypi()
```

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Pypi().create({
    "project_id": "example_project_id",  # str
    "post_api_v4_projects_id_packages_pypi": {},  # dict
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PypiEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PypiPackageEntity

```python
pypi_package = client.PypiPackage()
```

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.PypiPackage().create({
    "project_id": "example_project_id",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.PypiPackage().load({"project_id": "project_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PypiPackageEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ReleaseEntity

```python
release = client.Release()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Release().load({"project_id": "project_id", "suffix_path": "suffix_path"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Release().remove({"id": "id", "project_id": "project_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ReleaseEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ReleaseLinkEntity

```python
release_link = client.ReleaseLink()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.ReleaseLink().remove({"id": "id", "project_id": "project_id", "release_id": "release_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ReleaseLinkEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RemoteMirrorEntity

```python
remote_mirror = client.RemoteMirror()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.RemoteMirror().load({"id": "remote_mirror_id", "project_id": "project_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.RemoteMirror().remove({"id": "remote_mirror_id", "project_id": "project_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RemoteMirrorEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RpmEntity

```python
rpm = client.Rpm()
```

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Rpm().create({
    "project_id": "example_project_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RpmEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RpmPackageEntity

```python
rpm_package = client.RpmPackage()
```

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.RpmPackage().create({
    "project_id": "example_project_id",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.RpmPackage().load({"project_id": "project_id", "file_name": "file_name"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RpmPackageEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RubygemEntity

```python
rubygem = client.Rubygem()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Rubygem().load({"id": "rubygem_id", "project_id": "project_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RubygemEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RubygemPackageEntity

```python
rubygem_package = client.RubygemPackage()
```

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.RubygemPackage().create({
    "project_id": "example_project_id",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.RubygemPackage().load({"project_id": "project_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RubygemPackageEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RunnerEntity

```python
runner = client.Runner()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Runner().create({
    "post_api_v4_runners_verify": {},  # dict
})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Runner().remove({"id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RunnerEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SearchEntity

```python
search = client.Search()
```

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Search().load({"scope": "scope", "search": "search"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SearchEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SecureFileEntity

```python
secure_file = client.SecureFile()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.SecureFile().load({"id": "secure_file_id", "project_id": "project_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.SecureFile().remove({"id": "secure_file_id", "project_id": "project_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SecureFileEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SlackEntity

```python
slack = client.Slack()
```

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Slack().create({
    "post_api_v4_slack_trigger": {},  # dict
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SlackEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SnippetEntity

```python
snippet = client.Snippet()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Snippet().load({"id": "snippet_id", "file_id": "file_id", "file_path": "file_path"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Snippet().remove({"id": "snippet_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SnippetEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## StarrerEntity

```python
starrer = client.Starrer()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_path` | `str` | No |  |
| `avatar_url` | `str` | No |  |
| `custom_attributes` | `list` | No |  |
| `id` | `int` | No |  |
| `locked` | `bool` | No |  |
| `name` | `str` | No |  |
| `public_email` | `str` | No |  |
| `state` | `str` | No |  |
| `username` | `str` | No |  |
| `web_url` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Starrer().list({"project_id": "example"})
for starrer in results:
    print(starrer)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `StarrerEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SystemHookEntity

```python
system_hook = client.SystemHook()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.SystemHook().remove({"id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SystemHookEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TagEntity

```python
tag = client.Tag()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Tag().remove({"id": "id", "project_id": "project_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TagEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TerraformRegistryEntity

```python
terraform_registry = client.TerraformRegistry()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.TerraformRegistry().load({"id": "terraform_registry_id", "module_system": "module_system"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.TerraformRegistry().update({
    "id": "terraform_registry_id",
    "module_id": "module_id",
    "module_system": "module_system",
    "project_id": "project_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TerraformRegistryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TerraformStateEntity

```python
terraform_state = client.TerraformState()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.TerraformState().create({
    "id": "example_id",  # str
    "project_id": "example_project_id",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.TerraformState().load({"id": "terraform_state_id", "project_id": "project_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.TerraformState().remove({"id": "terraform_state_id", "project_id": "project_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TerraformStateEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TestReportEntity

```python
test_report = client.TestReport()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `error_count` | `int` | No |  |
| `failed_count` | `int` | No |  |
| `name` | `str` | No |  |
| `skipped_count` | `int` | No |  |
| `success_count` | `int` | No |  |
| `suite_error` | `str` | No |  |
| `test_cases` | `list` | No |  |
| `total_count` | `int` | No |  |
| `total_time` | `int` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.TestReport().list({"pipeline_id": "example", "project_id": "example"})
for test_report in results:
    print(test_report)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TestReportEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TestReportSummaryEntity

```python
test_report_summary = client.TestReportSummary()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `test_suites` | `dict` | No |  |
| `total` | `dict` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.TestReportSummary().load({"pipeline_id": "pipeline_id", "project_id": "project_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TestReportSummaryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TopicEntity

```python
topic = client.Topic()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Topic().remove({"id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TopicEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UnleashApiEntity

```python
unleash_api = client.UnleashApi()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.UnleashApi().load({"unleash_id": "unleash_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UnleashApiEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UsageDataEntity

```python
usage_data = client.UsageData()
```

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.UsageData().create({
    "post_api_v4_usage_data_increment_counter": {},  # dict
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.UsageData().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UsageDataEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UserEntity

```python
user = client.User()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_path` | `str` | No |  |
| `avatar_url` | `str` | No |  |
| `custom_attributes` | `list` | No |  |
| `id` | `int` | No |  |
| `locked` | `bool` | No |  |
| `name` | `str` | No |  |
| `public_email` | `str` | No |  |
| `state` | `str` | No |  |
| `username` | `str` | No |  |
| `web_url` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.User().list({"project_id": "example"})
for user in results:
    print(user)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UserEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WebCommitEntity

```python
web_commit = client.WebCommit()
```

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.WebCommit().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WebCommitEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WikiEntity

```python
wiki = client.Wiki()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Wiki().remove({"id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WikiEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `debug` | 0.0.1 | Request/response capture ring buffer for debugging |
| `idempotency` | 0.0.1 | Idempotency keys for safe retries of mutating operations |
| `metrics` | 0.0.1 | Statistics capture: per-operation counters and latency |
| `paging` | 0.0.1 | Pagination signals for list operations |
| `ratelimit` | 0.0.1 | Client-side rate limiting via a token bucket |
| `retry` | 0.0.1 | Automatic retry of transient failures with exponential backoff |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |
| `timeout` | 0.0.1 | Per-request timeout with transport abort |


Features are activated via the `feature` option:

```python
client = GitlabSDK({
    "feature": {
        "debug": {"active": True},
        "idempotency": {"active": True},
        "metrics": {"active": True},
        "paging": {"active": True},
        "ratelimit": {"active": True},
        "retry": {"active": True},
        "test": {"active": True},
        "timeout": {"active": True},
    },
})
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### Ordering

`ratelimit`, `retry`, `timeout` wrap the transport. Each
wraps whatever is already installed, so **activation order is nesting order**:
a feature activated later sits OUTSIDE one activated earlier, and sees the call
first.

That decides behaviour, not just sequence: a feature that short-circuits the
call, such as a cache serving a hit, stops every feature nested inside it from
ever seeing that call.

`debug`, `idempotency`, `metrics`, `paging`, `test` attach to pipeline hooks
rather than the transport, so their order does not affect what they observe.

#### `debug`

Request/response capture ring buffer for debugging.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `max` | `100` |
| `redact` | `['authorization', 'cookie', 'set-cookie', 'api-key', 'apikey', 'x-api-key', 'idempotency-key']` |

| Option | Type |
|---|---|
| `now` | function |
| `onEntry` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.debug.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `idempotency`

Idempotency keys for safe retries of mutating operations.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `header` | `'Idempotency-Key'` |
| `methods` | `['POST', 'PUT', 'PATCH', 'DELETE']` |
| `ops` | `['create', 'update', 'remove']` |

| Option | Type |
|---|---|
| `keygen` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.idempotency.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `metrics`

Statistics capture: per-operation counters and latency.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `now` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.metrics.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `paging`

Pagination signals for list operations.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `afterVar` | `'after'` |
| `cursorParam` | `'cursor'` |
| `firstVar` | `'first'` |
| `limitParam` | `'limit'` |
| `pageParam` | `'page'` |
| `startPage` | `1` |

| Option | Type |
|---|---|
| `limit` | number |
| `ops` | list |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.paging.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `ratelimit`

Client-side rate limiting via a token bucket.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

| Option | Type |
|---|---|
| `now` | function |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.ratelimit.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `retry`

Automatic retry of transient failures with exponential backoff.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

| Option | Type |
|---|---|
| `jitter` | boolean |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.retry.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `test`

In-memory mock transport for testing without a live server.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `entity` | map |
| `net` | map |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

#### `timeout`

Per-request timeout with transport abort.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

| Option | Type |
|---|---|
| `clearTimer` | function |
| `setTimer` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.timeout.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

