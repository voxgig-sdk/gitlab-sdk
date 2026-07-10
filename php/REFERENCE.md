# Gitlab PHP SDK Reference

Complete API reference for the Gitlab PHP SDK.


## GitlabSDK

### Constructor

```php
require_once __DIR__ . '/gitlab_sdk.php';

$client = new GitlabSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["apikey"]` | `string` | API key for authentication. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `GitlabSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = GitlabSDK::test();
```


### Instance Methods

#### `AccessRequest($data = null)`

Create a new `AccessRequestEntity` instance. Pass `null` for no initial data.

#### `AlertManagement($data = null)`

Create a new `AlertManagementEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesAccessRequester($data = null)`

Create a new `ApiEntitiesAccessRequesterEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesAppearance($data = null)`

Create a new `ApiEntitiesAppearanceEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesApplication($data = null)`

Create a new `ApiEntitiesApplicationEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesApplicationStatistic($data = null)`

Create a new `ApiEntitiesApplicationStatisticEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesApplicationWithSecret($data = null)`

Create a new `ApiEntitiesApplicationWithSecretEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesAvatar($data = null)`

Create a new `ApiEntitiesAvatarEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesAwardEmoji($data = null)`

Create a new `ApiEntitiesAwardEmojiEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesBadge($data = null)`

Create a new `ApiEntitiesBadgeEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesBasicBadgeDetail($data = null)`

Create a new `ApiEntitiesBasicBadgeDetailEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesBasicGroupDetail($data = null)`

Create a new `ApiEntitiesBasicGroupDetailEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesBasicProjectDetail($data = null)`

Create a new `ApiEntitiesBasicProjectDetailEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesBasicRef($data = null)`

Create a new `ApiEntitiesBasicRefEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesBasicSuccess($data = null)`

Create a new `ApiEntitiesBasicSuccessEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesBatchedBackgroundMigration($data = null)`

Create a new `ApiEntitiesBatchedBackgroundMigrationEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesBranch($data = null)`

Create a new `ApiEntitiesBranchEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesBulkImport($data = null)`

Create a new `ApiEntitiesBulkImportEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesBulkImportsEntityFailure($data = null)`

Create a new `ApiEntitiesBulkImportsEntityFailureEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesBulkImportsExportStatus($data = null)`

Create a new `ApiEntitiesBulkImportsExportStatusEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesChangelog($data = null)`

Create a new `ApiEntitiesChangelogEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesCiBridge($data = null)`

Create a new `ApiEntitiesCiBridgeEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesCiCatalogResourcesVersion($data = null)`

Create a new `ApiEntitiesCiCatalogResourcesVersionEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesCiJob($data = null)`

Create a new `ApiEntitiesCiJobEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesCiJobBasic($data = null)`

Create a new `ApiEntitiesCiJobBasicEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesCiJobBasicWithProject($data = null)`

Create a new `ApiEntitiesCiJobBasicWithProjectEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesCiLintResult($data = null)`

Create a new `ApiEntitiesCiLintResultEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesCiPipeline($data = null)`

Create a new `ApiEntitiesCiPipelineEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesCiPipelineBasic($data = null)`

Create a new `ApiEntitiesCiPipelineBasicEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesCiPipelineSchedule($data = null)`

Create a new `ApiEntitiesCiPipelineScheduleEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesCiPipelineScheduleDetail($data = null)`

Create a new `ApiEntitiesCiPipelineScheduleDetailEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesCiResetTokenResult($data = null)`

Create a new `ApiEntitiesCiResetTokenResultEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesCiResourceGroup($data = null)`

Create a new `ApiEntitiesCiResourceGroupEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesCiRunner($data = null)`

Create a new `ApiEntitiesCiRunnerEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesCiRunnerDetail($data = null)`

Create a new `ApiEntitiesCiRunnerDetailEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesCiRunnerManager($data = null)`

Create a new `ApiEntitiesCiRunnerManagerEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesCiRunnerRegistrationDetail($data = null)`

Create a new `ApiEntitiesCiRunnerRegistrationDetailEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesCiSecureFile($data = null)`

Create a new `ApiEntitiesCiSecureFileEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesCiVariable($data = null)`

Create a new `ApiEntitiesCiVariableEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesCluster($data = null)`

Create a new `ApiEntitiesClusterEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesClusterGroup($data = null)`

Create a new `ApiEntitiesClusterGroupEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesClusterProject($data = null)`

Create a new `ApiEntitiesClusterProjectEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesClustersAgent($data = null)`

Create a new `ApiEntitiesClustersAgentEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesClustersAgentToken($data = null)`

Create a new `ApiEntitiesClustersAgentTokenEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesClustersAgentTokenBasic($data = null)`

Create a new `ApiEntitiesClustersAgentTokenBasicEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesClustersAgentTokenWithToken($data = null)`

Create a new `ApiEntitiesClustersAgentTokenWithTokenEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesCommit($data = null)`

Create a new `ApiEntitiesCommitEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesCommitDetail($data = null)`

Create a new `ApiEntitiesCommitDetailEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesCommitNote($data = null)`

Create a new `ApiEntitiesCommitNoteEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesCommitSequence($data = null)`

Create a new `ApiEntitiesCommitSequenceEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesCommitSignature($data = null)`

Create a new `ApiEntitiesCommitSignatureEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesCommitStatus($data = null)`

Create a new `ApiEntitiesCommitStatusEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesCompare($data = null)`

Create a new `ApiEntitiesCompareEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesContainerRegistryRepository($data = null)`

Create a new `ApiEntitiesContainerRegistryRepositoryEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesContainerRegistryTag($data = null)`

Create a new `ApiEntitiesContainerRegistryTagEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesContainerRegistryTagDetail($data = null)`

Create a new `ApiEntitiesContainerRegistryTagDetailEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesContributor($data = null)`

Create a new `ApiEntitiesContributorEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesDeployKey($data = null)`

Create a new `ApiEntitiesDeployKeyEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesDeployKeysProject($data = null)`

Create a new `ApiEntitiesDeployKeysProjectEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesDeployToken($data = null)`

Create a new `ApiEntitiesDeployTokenEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesDeployTokenWithToken($data = null)`

Create a new `ApiEntitiesDeployTokenWithTokenEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesDeployment($data = null)`

Create a new `ApiEntitiesDeploymentEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesDeploymentExtended($data = null)`

Create a new `ApiEntitiesDeploymentExtendedEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesDeploymentsApproval($data = null)`

Create a new `ApiEntitiesDeploymentsApprovalEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesDictionaryTable($data = null)`

Create a new `ApiEntitiesDictionaryTableEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesDiff($data = null)`

Create a new `ApiEntitiesDiffEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesDiscoveredCluster($data = null)`

Create a new `ApiEntitiesDiscoveredClusterEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesDraftNote($data = null)`

Create a new `ApiEntitiesDraftNoteEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesEnvironment($data = null)`

Create a new `ApiEntitiesEnvironmentEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesErrorTrackingClientKey($data = null)`

Create a new `ApiEntitiesErrorTrackingClientKeyEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesErrorTrackingProjectSetting($data = null)`

Create a new `ApiEntitiesErrorTrackingProjectSettingEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesEvent($data = null)`

Create a new `ApiEntitiesEventEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesFeature($data = null)`

Create a new `ApiEntitiesFeatureEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesFeatureDefinition($data = null)`

Create a new `ApiEntitiesFeatureDefinitionEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesFeatureFlag($data = null)`

Create a new `ApiEntitiesFeatureFlagEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesFeatureFlagUserList($data = null)`

Create a new `ApiEntitiesFeatureFlagUserListEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesFreezePeriod($data = null)`

Create a new `ApiEntitiesFreezePeriodEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesGitlabSubscription($data = null)`

Create a new `ApiEntitiesGitlabSubscriptionEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesGoModuleVersion($data = null)`

Create a new `ApiEntitiesGoModuleVersionEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesGroup($data = null)`

Create a new `ApiEntitiesGroupEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesGroupDetail($data = null)`

Create a new `ApiEntitiesGroupDetailEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesHook($data = null)`

Create a new `ApiEntitiesHookEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesIntegration($data = null)`

Create a new `ApiEntitiesIntegrationEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesIntegrationBasic($data = null)`

Create a new `ApiEntitiesIntegrationBasicEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesInvitation($data = null)`

Create a new `ApiEntitiesInvitationEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesIssuableTimeStat($data = null)`

Create a new `ApiEntitiesIssuableTimeStatEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesIssue($data = null)`

Create a new `ApiEntitiesIssueEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesIssueLink($data = null)`

Create a new `ApiEntitiesIssueLinkEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesLicense($data = null)`

Create a new `ApiEntitiesLicenseEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesMarkdown($data = null)`

Create a new `ApiEntitiesMarkdownEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesMarkdownUploadAdmin($data = null)`

Create a new `ApiEntitiesMarkdownUploadAdminEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesMember($data = null)`

Create a new `ApiEntitiesMemberEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesMerge($data = null)`

Create a new `ApiEntitiesMergeEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesMergeRequestApproval($data = null)`

Create a new `ApiEntitiesMergeRequestApprovalEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesMergeRequestBasic($data = null)`

Create a new `ApiEntitiesMergeRequestBasicEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesMergeRequestChange($data = null)`

Create a new `ApiEntitiesMergeRequestChangeEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesMergeRequestDiff($data = null)`

Create a new `ApiEntitiesMergeRequestDiffEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesMergeRequestDiffFull($data = null)`

Create a new `ApiEntitiesMergeRequestDiffFullEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesMergeRequestReviewer($data = null)`

Create a new `ApiEntitiesMergeRequestReviewerEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesMetricImage($data = null)`

Create a new `ApiEntitiesMetricImageEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesMrNote($data = null)`

Create a new `ApiEntitiesMrNoteEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesNamespace($data = null)`

Create a new `ApiEntitiesNamespaceEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesNamespaceExistence($data = null)`

Create a new `ApiEntitiesNamespaceExistenceEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesNamespacesStorageLimitExclusion($data = null)`

Create a new `ApiEntitiesNamespacesStorageLimitExclusionEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesNpmPackage($data = null)`

Create a new `ApiEntitiesNpmPackageEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesNpmPackageTag($data = null)`

Create a new `ApiEntitiesNpmPackageTagEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesNugetPackagesVersion($data = null)`

Create a new `ApiEntitiesNugetPackagesVersionEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesNugetSearchResult($data = null)`

Create a new `ApiEntitiesNugetSearchResultEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesNugetServiceIndex($data = null)`

Create a new `ApiEntitiesNugetServiceIndexEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesOrganizationsOrganization($data = null)`

Create a new `ApiEntitiesOrganizationsOrganizationEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesPackage($data = null)`

Create a new `ApiEntitiesPackageEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesPackageFile($data = null)`

Create a new `ApiEntitiesPackageFileEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesPackagePipeline($data = null)`

Create a new `ApiEntitiesPackagePipelineEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesPackagesConanFilesList($data = null)`

Create a new `ApiEntitiesPackagesConanFilesListEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesPackagesConanPackageManifest($data = null)`

Create a new `ApiEntitiesPackagesConanPackageManifestEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesPackagesConanPackageRevision($data = null)`

Create a new `ApiEntitiesPackagesConanPackageRevisionEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesPackagesConanPackageSnapshot($data = null)`

Create a new `ApiEntitiesPackagesConanPackageSnapshotEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesPackagesConanRecipeManifest($data = null)`

Create a new `ApiEntitiesPackagesConanRecipeManifestEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesPackagesConanRecipeRevision($data = null)`

Create a new `ApiEntitiesPackagesConanRecipeRevisionEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesPackagesConanRecipeSnapshot($data = null)`

Create a new `ApiEntitiesPackagesConanRecipeSnapshotEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesPackagesConanRevision($data = null)`

Create a new `ApiEntitiesPackagesConanRevisionEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesPackagesConanUploadUrl($data = null)`

Create a new `ApiEntitiesPackagesConanUploadUrlEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesPackagesDebianDistribution($data = null)`

Create a new `ApiEntitiesPackagesDebianDistributionEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesPagesDomain($data = null)`

Create a new `ApiEntitiesPagesDomainEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesPagesDomainBasic($data = null)`

Create a new `ApiEntitiesPagesDomainBasicEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesPersonalAccessToken($data = null)`

Create a new `ApiEntitiesPersonalAccessTokenEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesPersonalAccessTokenWithLastUsedIp($data = null)`

Create a new `ApiEntitiesPersonalAccessTokenWithLastUsedIpEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesPersonalAccessTokenWithToken($data = null)`

Create a new `ApiEntitiesPersonalAccessTokenWithTokenEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesPersonalSnippet($data = null)`

Create a new `ApiEntitiesPersonalSnippetEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesPlanLimit($data = null)`

Create a new `ApiEntitiesPlanLimitEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesProject($data = null)`

Create a new `ApiEntitiesProjectEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesProjectDailyStatistic($data = null)`

Create a new `ApiEntitiesProjectDailyStatisticEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesProjectExportStatus($data = null)`

Create a new `ApiEntitiesProjectExportStatusEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesProjectGroupLink($data = null)`

Create a new `ApiEntitiesProjectGroupLinkEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesProjectHook($data = null)`

Create a new `ApiEntitiesProjectHookEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesProjectImportStatus($data = null)`

Create a new `ApiEntitiesProjectImportStatusEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesProjectJobTokenScope($data = null)`

Create a new `ApiEntitiesProjectJobTokenScopeEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesProjectRepositoryStorage($data = null)`

Create a new `ApiEntitiesProjectRepositoryStorageEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesProjectSnippet($data = null)`

Create a new `ApiEntitiesProjectSnippetEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesProjectUpload($data = null)`

Create a new `ApiEntitiesProjectUploadEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesProjectWithAccess($data = null)`

Create a new `ApiEntitiesProjectWithAccessEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesProjectsContainerRegistryProtectionRule($data = null)`

Create a new `ApiEntitiesProjectsContainerRegistryProtectionRuleEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesProjectsPackagesProtectionRule($data = null)`

Create a new `ApiEntitiesProjectsPackagesProtectionRuleEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesProjectsTopic($data = null)`

Create a new `ApiEntitiesProjectsTopicEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesProtectedBranch($data = null)`

Create a new `ApiEntitiesProtectedBranchEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesProtectedTag($data = null)`

Create a new `ApiEntitiesProtectedTagEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesPublicGroupDetail($data = null)`

Create a new `ApiEntitiesPublicGroupDetailEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesRelatedIssue($data = null)`

Create a new `ApiEntitiesRelatedIssueEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesRelationImportTracker($data = null)`

Create a new `ApiEntitiesRelationImportTrackerEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesRelease($data = null)`

Create a new `ApiEntitiesReleaseEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesReleasesLink($data = null)`

Create a new `ApiEntitiesReleasesLinkEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesRemoteMirror($data = null)`

Create a new `ApiEntitiesRemoteMirrorEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesRepositoryHealth($data = null)`

Create a new `ApiEntitiesRepositoryHealthEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesResourceAccessTokenWithToken($data = null)`

Create a new `ApiEntitiesResourceAccessTokenWithTokenEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesResourceMilestoneEvent($data = null)`

Create a new `ApiEntitiesResourceMilestoneEventEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesSnippet($data = null)`

Create a new `ApiEntitiesSnippetEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesSshKeyWithUser($data = null)`

Create a new `ApiEntitiesSshKeyWithUserEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesSuggestion($data = null)`

Create a new `ApiEntitiesSuggestionEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesSystemBroadcastMessage($data = null)`

Create a new `ApiEntitiesSystemBroadcastMessageEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesTag($data = null)`

Create a new `ApiEntitiesTagEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesTagSignature($data = null)`

Create a new `ApiEntitiesTagSignatureEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesTemplatesList($data = null)`

Create a new `ApiEntitiesTemplatesListEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesTerraformModuleVersion($data = null)`

Create a new `ApiEntitiesTerraformModuleVersionEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesTreeObject($data = null)`

Create a new `ApiEntitiesTreeObjectEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesTrigger($data = null)`

Create a new `ApiEntitiesTriggerEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesUserAgentDetail($data = null)`

Create a new `ApiEntitiesUserAgentDetailEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesUserCount($data = null)`

Create a new `ApiEntitiesUserCountEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesUserPublic($data = null)`

Create a new `ApiEntitiesUserPublicEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesUserWithAdmin($data = null)`

Create a new `ApiEntitiesUserWithAdminEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesWikiAttachment($data = null)`

Create a new `ApiEntitiesWikiAttachmentEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesWikiPage($data = null)`

Create a new `ApiEntitiesWikiPageEntity` instance. Pass `null` for no initial data.

#### `ApiEntitiesWikiPageBasic($data = null)`

Create a new `ApiEntitiesWikiPageBasicEntity` instance. Pass `null` for no initial data.

#### `Application($data = null)`

Create a new `ApplicationEntity` instance. Pass `null` for no initial data.

#### `AwardEmoji($data = null)`

Create a new `AwardEmojiEntity` instance. Pass `null` for no initial data.

#### `Badge($data = null)`

Create a new `BadgeEntity` instance. Pass `null` for no initial data.

#### `Branch($data = null)`

Create a new `BranchEntity` instance. Pass `null` for no initial data.

#### `CargoPackage($data = null)`

Create a new `CargoPackageEntity` instance. Pass `null` for no initial data.

#### `CiVariable($data = null)`

Create a new `CiVariableEntity` instance. Pass `null` for no initial data.

#### `Cluster($data = null)`

Create a new `ClusterEntity` instance. Pass `null` for no initial data.

#### `ClusterAgent($data = null)`

Create a new `ClusterAgentEntity` instance. Pass `null` for no initial data.

#### `Composer($data = null)`

Create a new `ComposerEntity` instance. Pass `null` for no initial data.

#### `ComposerPackage($data = null)`

Create a new `ComposerPackageEntity` instance. Pass `null` for no initial data.

#### `Conan($data = null)`

Create a new `ConanEntity` instance. Pass `null` for no initial data.

#### `ConanPackage($data = null)`

Create a new `ConanPackageEntity` instance. Pass `null` for no initial data.

#### `ContainerRegistry($data = null)`

Create a new `ContainerRegistryEntity` instance. Pass `null` for no initial data.

#### `ContainerRegistryEvent($data = null)`

Create a new `ContainerRegistryEventEntity` instance. Pass `null` for no initial data.

#### `CustomAttribute($data = null)`

Create a new `CustomAttributeEntity` instance. Pass `null` for no initial data.

#### `Debian($data = null)`

Create a new `DebianEntity` instance. Pass `null` for no initial data.

#### `DebianDistribution($data = null)`

Create a new `DebianDistributionEntity` instance. Pass `null` for no initial data.

#### `DebianPackage($data = null)`

Create a new `DebianPackageEntity` instance. Pass `null` for no initial data.

#### `DependencyProxy($data = null)`

Create a new `DependencyProxyEntity` instance. Pass `null` for no initial data.

#### `DeployKey($data = null)`

Create a new `DeployKeyEntity` instance. Pass `null` for no initial data.

#### `DeployToken($data = null)`

Create a new `DeployTokenEntity` instance. Pass `null` for no initial data.

#### `Deployment($data = null)`

Create a new `DeploymentEntity` instance. Pass `null` for no initial data.

#### `EeApiEntitiesApprovalState($data = null)`

Create a new `EeApiEntitiesApprovalStateEntity` instance. Pass `null` for no initial data.

#### `EeApiEntitiesAuditEvent($data = null)`

Create a new `EeApiEntitiesAuditEventEntity` instance. Pass `null` for no initial data.

#### `EeApiEntitiesBillableMembership($data = null)`

Create a new `EeApiEntitiesBillableMembershipEntity` instance. Pass `null` for no initial data.

#### `EeApiEntitiesGeoNodeStatus($data = null)`

Create a new `EeApiEntitiesGeoNodeStatusEntity` instance. Pass `null` for no initial data.

#### `EeApiEntitiesGeoPipelineRef($data = null)`

Create a new `EeApiEntitiesGeoPipelineRefEntity` instance. Pass `null` for no initial data.

#### `EeApiEntitiesIssuableMetricImage($data = null)`

Create a new `EeApiEntitiesIssuableMetricImageEntity` instance. Pass `null` for no initial data.

#### `EeApiEntitiesMergeRequestApprovalState($data = null)`

Create a new `EeApiEntitiesMergeRequestApprovalStateEntity` instance. Pass `null` for no initial data.

#### `EeApiEntitiesSshCertificate($data = null)`

Create a new `EeApiEntitiesSshCertificateEntity` instance. Pass `null` for no initial data.

#### `Environment($data = null)`

Create a new `EnvironmentEntity` instance. Pass `null` for no initial data.

#### `ErrorTrackingClientKey($data = null)`

Create a new `ErrorTrackingClientKeyEntity` instance. Pass `null` for no initial data.

#### `Feature($data = null)`

Create a new `FeatureEntity` instance. Pass `null` for no initial data.

#### `FeatureFlag($data = null)`

Create a new `FeatureFlagEntity` instance. Pass `null` for no initial data.

#### `FeatureFlagsUserList($data = null)`

Create a new `FeatureFlagsUserListEntity` instance. Pass `null` for no initial data.

#### `FreezePeriod($data = null)`

Create a new `FreezePeriodEntity` instance. Pass `null` for no initial data.

#### `GenericPackage($data = null)`

Create a new `GenericPackageEntity` instance. Pass `null` for no initial data.

#### `Geo($data = null)`

Create a new `GeoEntity` instance. Pass `null` for no initial data.

#### `GoProxy($data = null)`

Create a new `GoProxyEntity` instance. Pass `null` for no initial data.

#### `Group($data = null)`

Create a new `GroupEntity` instance. Pass `null` for no initial data.

#### `GroupAvatar($data = null)`

Create a new `GroupAvatarEntity` instance. Pass `null` for no initial data.

#### `GroupExport($data = null)`

Create a new `GroupExportEntity` instance. Pass `null` for no initial data.

#### `GroupImport($data = null)`

Create a new `GroupImportEntity` instance. Pass `null` for no initial data.

#### `HelmPackage($data = null)`

Create a new `HelmPackageEntity` instance. Pass `null` for no initial data.

#### `Hook($data = null)`

Create a new `HookEntity` instance. Pass `null` for no initial data.

#### `Import($data = null)`

Create a new `ImportEntity` instance. Pass `null` for no initial data.

#### `Integration($data = null)`

Create a new `IntegrationEntity` instance. Pass `null` for no initial data.

#### `Invitation($data = null)`

Create a new `InvitationEntity` instance. Pass `null` for no initial data.

#### `IssueLink($data = null)`

Create a new `IssueLinkEntity` instance. Pass `null` for no initial data.

#### `IssuesStatistic($data = null)`

Create a new `IssuesStatisticEntity` instance. Pass `null` for no initial data.

#### `Job($data = null)`

Create a new `JobEntity` instance. Pass `null` for no initial data.

#### `MavenPackage($data = null)`

Create a new `MavenPackageEntity` instance. Pass `null` for no initial data.

#### `Member($data = null)`

Create a new `MemberEntity` instance. Pass `null` for no initial data.

#### `MergeRequest($data = null)`

Create a new `MergeRequestEntity` instance. Pass `null` for no initial data.

#### `Metadata($data = null)`

Create a new `MetadataEntity` instance. Pass `null` for no initial data.

#### `Migration($data = null)`

Create a new `MigrationEntity` instance. Pass `null` for no initial data.

#### `MlModelRegistry($data = null)`

Create a new `MlModelRegistryEntity` instance. Pass `null` for no initial data.

#### `Namespace($data = null)`

Create a new `NamespaceEntity` instance. Pass `null` for no initial data.

#### `Npm($data = null)`

Create a new `NpmEntity` instance. Pass `null` for no initial data.

#### `NpmPackage($data = null)`

Create a new `NpmPackageEntity` instance. Pass `null` for no initial data.

#### `Nuget($data = null)`

Create a new `NugetEntity` instance. Pass `null` for no initial data.

#### `NugetPackage($data = null)`

Create a new `NugetPackageEntity` instance. Pass `null` for no initial data.

#### `PackageFile($data = null)`

Create a new `PackageFileEntity` instance. Pass `null` for no initial data.

#### `Page($data = null)`

Create a new `PageEntity` instance. Pass `null` for no initial data.

#### `Participant($data = null)`

Create a new `ParticipantEntity` instance. Pass `null` for no initial data.

#### `PersonalAccessToken($data = null)`

Create a new `PersonalAccessTokenEntity` instance. Pass `null` for no initial data.

#### `Project($data = null)`

Create a new `ProjectEntity` instance. Pass `null` for no initial data.

#### `ProjectAvatar($data = null)`

Create a new `ProjectAvatarEntity` instance. Pass `null` for no initial data.

#### `ProjectEntity($data = null)`

Create a new `ProjectEntityEntity` instance. Pass `null` for no initial data.

#### `ProjectExport($data = null)`

Create a new `ProjectExportEntity` instance. Pass `null` for no initial data.

#### `ProjectHook($data = null)`

Create a new `ProjectHookEntity` instance. Pass `null` for no initial data.

#### `ProjectImport($data = null)`

Create a new `ProjectImportEntity` instance. Pass `null` for no initial data.

#### `ProjectImportEntity($data = null)`

Create a new `ProjectImportEntityEntity` instance. Pass `null` for no initial data.

#### `ProjectPackage($data = null)`

Create a new `ProjectPackageEntity` instance. Pass `null` for no initial data.

#### `ProjectSnippet($data = null)`

Create a new `ProjectSnippetEntity` instance. Pass `null` for no initial data.

#### `ProjectsJobTokenScope($data = null)`

Create a new `ProjectsJobTokenScopeEntity` instance. Pass `null` for no initial data.

#### `ProtectedTag($data = null)`

Create a new `ProtectedTagEntity` instance. Pass `null` for no initial data.

#### `Pypi($data = null)`

Create a new `PypiEntity` instance. Pass `null` for no initial data.

#### `PypiPackage($data = null)`

Create a new `PypiPackageEntity` instance. Pass `null` for no initial data.

#### `Release($data = null)`

Create a new `ReleaseEntity` instance. Pass `null` for no initial data.

#### `ReleaseLink($data = null)`

Create a new `ReleaseLinkEntity` instance. Pass `null` for no initial data.

#### `RemoteMirror($data = null)`

Create a new `RemoteMirrorEntity` instance. Pass `null` for no initial data.

#### `Rpm($data = null)`

Create a new `RpmEntity` instance. Pass `null` for no initial data.

#### `RpmPackage($data = null)`

Create a new `RpmPackageEntity` instance. Pass `null` for no initial data.

#### `Rubygem($data = null)`

Create a new `RubygemEntity` instance. Pass `null` for no initial data.

#### `RubygemPackage($data = null)`

Create a new `RubygemPackageEntity` instance. Pass `null` for no initial data.

#### `Runner($data = null)`

Create a new `RunnerEntity` instance. Pass `null` for no initial data.

#### `Search($data = null)`

Create a new `SearchEntity` instance. Pass `null` for no initial data.

#### `SecureFile($data = null)`

Create a new `SecureFileEntity` instance. Pass `null` for no initial data.

#### `Slack($data = null)`

Create a new `SlackEntity` instance. Pass `null` for no initial data.

#### `Snippet($data = null)`

Create a new `SnippetEntity` instance. Pass `null` for no initial data.

#### `Starrer($data = null)`

Create a new `StarrerEntity` instance. Pass `null` for no initial data.

#### `SystemHook($data = null)`

Create a new `SystemHookEntity` instance. Pass `null` for no initial data.

#### `Tag($data = null)`

Create a new `TagEntity` instance. Pass `null` for no initial data.

#### `TerraformRegistry($data = null)`

Create a new `TerraformRegistryEntity` instance. Pass `null` for no initial data.

#### `TerraformState($data = null)`

Create a new `TerraformStateEntity` instance. Pass `null` for no initial data.

#### `TestReport($data = null)`

Create a new `TestReportEntity` instance. Pass `null` for no initial data.

#### `TestReportSummary($data = null)`

Create a new `TestReportSummaryEntity` instance. Pass `null` for no initial data.

#### `Topic($data = null)`

Create a new `TopicEntity` instance. Pass `null` for no initial data.

#### `UnleashApi($data = null)`

Create a new `UnleashApiEntity` instance. Pass `null` for no initial data.

#### `UsageData($data = null)`

Create a new `UsageDataEntity` instance. Pass `null` for no initial data.

#### `User($data = null)`

Create a new `UserEntity` instance. Pass `null` for no initial data.

#### `WebCommit($data = null)`

Create a new `WebCommitEntity` instance. Pass `null` for no initial data.

#### `Wiki($data = null)`

Create a new `WikiEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): GitlabUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## AccessRequestEntity

```php
$access_request = $client->AccessRequest();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->AccessRequest()->remove(["id" => "id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AccessRequestEntity`

Create a new `AccessRequestEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AlertManagementEntity

```php
$alert_management = $client->AlertManagement();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->AlertManagement()->create([
  "alert_management_alert_id" => null, // string
  "project_id" => null, // string
]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->AlertManagement()->remove(["alert_management_alert_id" => "alert_management_alert_id", "metric_image_id" => "metric_image_id", "project_id" => "project_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AlertManagementEntity`

Create a new `AlertManagementEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesAccessRequesterEntity

```php
$api_entities_access_requester = $client->ApiEntitiesAccessRequester();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_path` | `string` | No |  |
| `avatar_url` | `string` | No |  |
| `custom_attribute` | `array` | No |  |
| `id` | `int` | No |  |
| `key` | `string` | No |  |
| `locked` | `bool` | No |  |
| `name` | `string` | No |  |
| `public_email` | `string` | No |  |
| `requested_at` | `string` | No |  |
| `state` | `string` | No |  |
| `username` | `string` | No |  |
| `value` | `string` | No |  |
| `web_url` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApiEntitiesAccessRequester()->create([
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiEntitiesAccessRequester()->list();
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ApiEntitiesAccessRequester()->update([
  "access_request_id" => "access_request_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesAccessRequesterEntity`

Create a new `ApiEntitiesAccessRequesterEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesAppearanceEntity

```php
$api_entities_appearance = $client->ApiEntitiesAppearance();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No |  |
| `email_header_and_footer_enabled` | `string` | No |  |
| `favicon` | `string` | No |  |
| `footer_message` | `string` | No |  |
| `header_logo` | `string` | No |  |
| `header_message` | `string` | No |  |
| `logo` | `string` | No |  |
| `member_guideline` | `string` | No |  |
| `message_background_color` | `string` | No |  |
| `message_font_color` | `string` | No |  |
| `new_project_guideline` | `string` | No |  |
| `profile_image_guideline` | `string` | No |  |
| `pwa_description` | `string` | No |  |
| `pwa_icon` | `string` | No |  |
| `pwa_name` | `string` | No |  |
| `pwa_short_name` | `string` | No |  |
| `title` | `string` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesAppearance()->load();
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ApiEntitiesAppearance()->update([
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesAppearanceEntity`

Create a new `ApiEntitiesAppearanceEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesApplicationEntity

```php
$api_entities_application = $client->ApiEntitiesApplication();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `application_id` | `string` | No |  |
| `application_name` | `string` | No |  |
| `callback_url` | `string` | No |  |
| `confidential` | `bool` | No |  |
| `id` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiEntitiesApplication()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesApplicationEntity`

Create a new `ApiEntitiesApplicationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesApplicationStatisticEntity

```php
$api_entities_application_statistic = $client->ApiEntitiesApplicationStatistic();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_user` | `int` | No |  |
| `fork` | `int` | No |  |
| `group` | `int` | No |  |
| `issue` | `int` | No |  |
| `merge_request` | `int` | No |  |
| `milestone` | `int` | No |  |
| `note` | `int` | No |  |
| `project` | `int` | No |  |
| `snippet` | `int` | No |  |
| `ssh_key` | `int` | No |  |
| `user` | `int` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesApplicationStatistic()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesApplicationStatisticEntity`

Create a new `ApiEntitiesApplicationStatisticEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesApplicationWithSecretEntity

```php
$api_entities_application_with_secret = $client->ApiEntitiesApplicationWithSecret();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `application_id` | `string` | No |  |
| `application_name` | `string` | No |  |
| `callback_url` | `string` | No |  |
| `confidential` | `bool` | No |  |
| `id` | `string` | No |  |
| `secret` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApiEntitiesApplicationWithSecret()->create([
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesApplicationWithSecretEntity`

Create a new `ApiEntitiesApplicationWithSecretEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesAvatarEntity

```php
$api_entities_avatar = $client->ApiEntitiesAvatar();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_url` | `string` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesAvatar()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesAvatarEntity`

Create a new `ApiEntitiesAvatarEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesAwardEmojiEntity

```php
$api_entities_award_emoji = $client->ApiEntitiesAwardEmoji();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `awardable_id` | `int` | No |  |
| `awardable_type` | `string` | No |  |
| `created_at` | `string` | No |  |
| `id` | `int` | No |  |
| `name` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `url` | `string` | No |  |
| `user` | `array` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApiEntitiesAwardEmoji()->create([
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiEntitiesAwardEmoji()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesAwardEmoji()->load(["id" => "api_entities_award_emoji_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesAwardEmojiEntity`

Create a new `ApiEntitiesAwardEmojiEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesBadgeEntity

```php
$api_entities_badge = $client->ApiEntitiesBadge();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `image_url` | `string` | No |  |
| `kind` | `string` | No |  |
| `link_url` | `string` | No |  |
| `name` | `string` | No |  |
| `rendered_image_url` | `string` | No |  |
| `rendered_link_url` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApiEntitiesBadge()->create([
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiEntitiesBadge()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesBadge()->load(["id" => "api_entities_badge_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ApiEntitiesBadge()->update([
  "id" => "api_entities_badge_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesBadgeEntity`

Create a new `ApiEntitiesBadgeEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesBasicBadgeDetailEntity

```php
$api_entities_basic_badge_detail = $client->ApiEntitiesBasicBadgeDetail();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `image_url` | `string` | No |  |
| `link_url` | `string` | No |  |
| `name` | `string` | No |  |
| `rendered_image_url` | `string` | No |  |
| `rendered_link_url` | `string` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesBasicBadgeDetail()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesBasicBadgeDetailEntity`

Create a new `ApiEntitiesBasicBadgeDetailEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesBasicGroupDetailEntity

```php
$api_entities_basic_group_detail = $client->ApiEntitiesBasicGroupDetail();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApiEntitiesBasicGroupDetail()->create([
  "project_id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesBasicGroupDetailEntity`

Create a new `ApiEntitiesBasicGroupDetailEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesBasicProjectDetailEntity

```php
$api_entities_basic_project_detail = $client->ApiEntitiesBasicProjectDetail();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_url` | `string` | No |  |
| `created_at` | `string` | No |  |
| `custom_attribute` | `array` | No |  |
| `default_branch` | `string` | No |  |
| `description` | `string` | No |  |
| `forks_count` | `int` | No |  |
| `http_url_to_repo` | `string` | No |  |
| `id` | `int` | No |  |
| `last_activity_at` | `string` | No |  |
| `license` | `array` | No |  |
| `license_url` | `string` | No |  |
| `name` | `string` | No |  |
| `name_with_namespace` | `string` | No |  |
| `namespace` | `array` | No |  |
| `path` | `string` | No |  |
| `path_with_namespace` | `string` | No |  |
| `readme_url` | `string` | No |  |
| `repository_storage` | `string` | No |  |
| `ssh_url_to_repo` | `string` | No |  |
| `star_count` | `int` | No |  |
| `tag_list` | `array` | No |  |
| `topic` | `array` | No |  |
| `visibility` | `string` | No |  |
| `web_url` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApiEntitiesBasicProjectDetail()->create([
  "project_id" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiEntitiesBasicProjectDetail()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesBasicProjectDetailEntity`

Create a new `ApiEntitiesBasicProjectDetailEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesBasicRefEntity

```php
$api_entities_basic_ref = $client->ApiEntitiesBasicRef();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | No |  |
| `type` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiEntitiesBasicRef()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesBasicRefEntity`

Create a new `ApiEntitiesBasicRefEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesBasicSuccessEntity

```php
$api_entities_basic_success = $client->ApiEntitiesBasicSuccess();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApiEntitiesBasicSuccess()->create([
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesBasicSuccessEntity`

Create a new `ApiEntitiesBasicSuccessEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesBatchedBackgroundMigrationEntity

```php
$api_entities_batched_background_migration = $client->ApiEntitiesBatchedBackgroundMigration();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `column_name` | `string` | No |  |
| `created_at` | `string` | No |  |
| `id` | `string` | No |  |
| `job_class_name` | `string` | No |  |
| `progress` | `float` | No |  |
| `status` | `string` | No |  |
| `table_name` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiEntitiesBatchedBackgroundMigration()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesBatchedBackgroundMigration()->load(["id" => "api_entities_batched_background_migration_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ApiEntitiesBatchedBackgroundMigration()->update([
  "batched_background_migration_id" => "batched_background_migration_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesBatchedBackgroundMigrationEntity`

Create a new `ApiEntitiesBatchedBackgroundMigrationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesBranchEntity

```php
$api_entities_branch = $client->ApiEntitiesBranch();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `can_push` | `bool` | No |  |
| `commit` | `array` | No |  |
| `default` | `bool` | No |  |
| `developers_can_merge` | `bool` | No |  |
| `developers_can_push` | `bool` | No |  |
| `merged` | `bool` | No |  |
| `name` | `string` | No |  |
| `protected` | `bool` | No |  |
| `web_url` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApiEntitiesBranch()->create([
  "project_id" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiEntitiesBranch()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesBranch()->load(["id" => "api_entities_branch_id", "project_id" => "project_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ApiEntitiesBranch()->update([
  "branch_id" => "branch_id",
  "project_id" => "project_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesBranchEntity`

Create a new `ApiEntitiesBranchEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesBulkImportEntity

```php
$api_entities_bulk_import = $client->ApiEntitiesBulkImport();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bulk_import_id` | `int` | No |  |
| `created_at` | `string` | No |  |
| `destination_full_path` | `string` | No |  |
| `destination_name` | `string` | No |  |
| `destination_namespace` | `string` | No |  |
| `destination_slug` | `string` | No |  |
| `entity_type` | `string` | No |  |
| `failure` | `array` | No |  |
| `has_failure` | `bool` | No |  |
| `id` | `int` | No |  |
| `migrate_membership` | `bool` | No |  |
| `migrate_project` | `bool` | No |  |
| `namespace_id` | `int` | No |  |
| `parent_id` | `int` | No |  |
| `project_id` | `int` | No |  |
| `source_full_path` | `string` | No |  |
| `source_type` | `string` | No |  |
| `source_url` | `string` | No |  |
| `stat` | `array` | No |  |
| `status` | `string` | No |  |
| `updated_at` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApiEntitiesBulkImport()->create([
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiEntitiesBulkImport()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesBulkImport()->load(["id" => "api_entities_bulk_import_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesBulkImportEntity`

Create a new `ApiEntitiesBulkImportEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesBulkImportsEntityFailureEntity

```php
$api_entities_bulk_imports_entity_failure = $client->ApiEntitiesBulkImportsEntityFailure();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `correlation_id_value` | `string` | No |  |
| `exception_class` | `string` | No |  |
| `exception_message` | `string` | No |  |
| `relation` | `string` | No |  |
| `source_title` | `string` | No |  |
| `source_url` | `string` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesBulkImportsEntityFailure()->load(["bulk_import_id" => "bulk_import_id", "entity_id" => "entity_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesBulkImportsEntityFailureEntity`

Create a new `ApiEntitiesBulkImportsEntityFailureEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesBulkImportsExportStatusEntity

```php
$api_entities_bulk_imports_export_status = $client->ApiEntitiesBulkImportsExportStatus();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `batch` | `array` | No |  |
| `batched` | `bool` | No |  |
| `batches_count` | `int` | No |  |
| `error` | `string` | No |  |
| `relation` | `string` | No |  |
| `status` | `string` | No |  |
| `total_objects_count` | `int` | No |  |
| `updated_at` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiEntitiesBulkImportsExportStatus()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesBulkImportsExportStatusEntity`

Create a new `ApiEntitiesBulkImportsExportStatusEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesChangelogEntity

```php
$api_entities_changelog = $client->ApiEntitiesChangelog();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `note` | `string` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesChangelog()->load(["project_id" => "project_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesChangelogEntity`

Create a new `ApiEntitiesChangelogEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesCiBridgeEntity

```php
$api_entities_ci_bridge = $client->ApiEntitiesCiBridge();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_failure` | `bool` | No |  |
| `commit` | `array` | No |  |
| `coverage` | `float` | No |  |
| `created_at` | `string` | No |  |
| `downstream_pipeline` | `array` | No |  |
| `duration` | `float` | No |  |
| `erased_at` | `string` | No |  |
| `failure_reason` | `string` | No |  |
| `finished_at` | `string` | No |  |
| `id` | `int` | No |  |
| `name` | `string` | No |  |
| `pipeline` | `array` | No |  |
| `project` | `array` | No |  |
| `queued_duration` | `float` | No |  |
| `ref` | `string` | No |  |
| `stage` | `string` | No |  |
| `started_at` | `string` | No |  |
| `status` | `string` | No |  |
| `tag` | `bool` | No |  |
| `user` | `array` | No |  |
| `web_url` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiEntitiesCiBridge()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesCiBridgeEntity`

Create a new `ApiEntitiesCiBridgeEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesCiCatalogResourcesVersionEntity

```php
$api_entities_ci_catalog_resources_version = $client->ApiEntitiesCiCatalogResourcesVersion();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApiEntitiesCiCatalogResourcesVersion()->create([
  "project_id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesCiCatalogResourcesVersionEntity`

Create a new `ApiEntitiesCiCatalogResourcesVersionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesCiJobEntity

```php
$api_entities_ci_job = $client->ApiEntitiesCiJob();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_failure` | `bool` | No |  |
| `archived` | `bool` | No |  |
| `artifact` | `array` | No |  |
| `artifacts_expire_at` | `string` | No |  |
| `artifacts_file` | `array` | No |  |
| `commit` | `array` | No |  |
| `coverage` | `float` | No |  |
| `created_at` | `string` | No |  |
| `duration` | `float` | No |  |
| `erased_at` | `string` | No |  |
| `failure_reason` | `string` | No |  |
| `file_format` | `string` | No |  |
| `file_type` | `string` | No |  |
| `filename` | `string` | No |  |
| `finished_at` | `string` | No |  |
| `id` | `int` | No |  |
| `name` | `string` | No |  |
| `pipeline` | `array` | No |  |
| `project` | `array` | No |  |
| `queued_duration` | `float` | No |  |
| `ref` | `string` | No |  |
| `runner` | `array` | No |  |
| `runner_manager` | `array` | No |  |
| `size` | `int` | No |  |
| `stage` | `string` | No |  |
| `started_at` | `string` | No |  |
| `status` | `string` | No |  |
| `tag` | `bool` | No |  |
| `tag_list` | `array` | No |  |
| `user` | `array` | No |  |
| `web_url` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApiEntitiesCiJob()->create([
  "job_id" => null, // string
  "project_id" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiEntitiesCiJob()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesCiJob()->load(["id" => "api_entities_ci_job_id", "project_id" => "project_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesCiJobEntity`

Create a new `ApiEntitiesCiJobEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesCiJobBasicEntity

```php
$api_entities_ci_job_basic = $client->ApiEntitiesCiJobBasic();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_failure` | `bool` | No |  |
| `commit` | `array` | No |  |
| `coverage` | `float` | No |  |
| `created_at` | `string` | No |  |
| `duration` | `float` | No |  |
| `erased_at` | `string` | No |  |
| `failure_reason` | `string` | No |  |
| `finished_at` | `string` | No |  |
| `id` | `int` | No |  |
| `name` | `string` | No |  |
| `pipeline` | `array` | No |  |
| `project` | `array` | No |  |
| `queued_duration` | `float` | No |  |
| `ref` | `string` | No |  |
| `stage` | `string` | No |  |
| `started_at` | `string` | No |  |
| `status` | `string` | No |  |
| `tag` | `bool` | No |  |
| `user` | `array` | No |  |
| `web_url` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApiEntitiesCiJobBasic()->create([
  "job_id" => null, // string
  "project_id" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiEntitiesCiJobBasic()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesCiJobBasicEntity`

Create a new `ApiEntitiesCiJobBasicEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesCiJobBasicWithProjectEntity

```php
$api_entities_ci_job_basic_with_project = $client->ApiEntitiesCiJobBasicWithProject();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_failure` | `bool` | No |  |
| `commit` | `array` | No |  |
| `coverage` | `float` | No |  |
| `created_at` | `string` | No |  |
| `duration` | `float` | No |  |
| `erased_at` | `string` | No |  |
| `failure_reason` | `string` | No |  |
| `finished_at` | `string` | No |  |
| `id` | `int` | No |  |
| `name` | `string` | No |  |
| `pipeline` | `array` | No |  |
| `project` | `array` | No |  |
| `queued_duration` | `float` | No |  |
| `ref` | `string` | No |  |
| `stage` | `string` | No |  |
| `started_at` | `string` | No |  |
| `status` | `string` | No |  |
| `tag` | `bool` | No |  |
| `user` | `array` | No |  |
| `web_url` | `string` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesCiJobBasicWithProject()->load(["runner_id" => "runner_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesCiJobBasicWithProjectEntity`

Create a new `ApiEntitiesCiJobBasicWithProjectEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesCiLintResultEntity

```php
$api_entities_ci_lint_result = $client->ApiEntitiesCiLintResult();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `blob` | `string` | No |  |
| `context_project` | `string` | No |  |
| `context_sha` | `string` | No |  |
| `error` | `array` | No |  |
| `extra` | `array` | No |  |
| `include` | `array` | No |  |
| `job` | `array` | No |  |
| `location` | `string` | No |  |
| `merged_yaml` | `string` | No |  |
| `raw` | `string` | No |  |
| `type` | `string` | No |  |
| `valid` | `bool` | No |  |
| `warning` | `array` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApiEntitiesCiLintResult()->create([
  "project_id" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiEntitiesCiLintResult()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesCiLintResultEntity`

Create a new `ApiEntitiesCiLintResultEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesCiPipelineEntity

```php
$api_entities_ci_pipeline = $client->ApiEntitiesCiPipeline();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApiEntitiesCiPipeline()->create([
  "project_id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesCiPipelineEntity`

Create a new `ApiEntitiesCiPipelineEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesCiPipelineBasicEntity

```php
$api_entities_ci_pipeline_basic = $client->ApiEntitiesCiPipelineBasic();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No |  |
| `id` | `int` | No |  |
| `iid` | `int` | No |  |
| `project_id` | `int` | No |  |
| `ref` | `string` | No |  |
| `sha` | `string` | No |  |
| `source` | `string` | No |  |
| `status` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `web_url` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiEntitiesCiPipelineBasic()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesCiPipelineBasic()->load(["merge_request_id" => "merge_request_id", "project_id" => "project_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesCiPipelineBasicEntity`

Create a new `ApiEntitiesCiPipelineBasicEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesCiPipelineScheduleEntity

```php
$api_entities_ci_pipeline_schedule = $client->ApiEntitiesCiPipelineSchedule();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | No |  |
| `created_at` | `string` | No |  |
| `cron` | `string` | No |  |
| `cron_timezone` | `string` | No |  |
| `description` | `string` | No |  |
| `id` | `int` | No |  |
| `input` | `array` | No |  |
| `next_run_at` | `string` | No |  |
| `owner` | `array` | No |  |
| `ref` | `string` | No |  |
| `updated_at` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiEntitiesCiPipelineSchedule()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesCiPipelineScheduleEntity`

Create a new `ApiEntitiesCiPipelineScheduleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesCiPipelineScheduleDetailEntity

```php
$api_entities_ci_pipeline_schedule_detail = $client->ApiEntitiesCiPipelineScheduleDetail();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | No |  |
| `created_at` | `string` | No |  |
| `cron` | `string` | No |  |
| `cron_timezone` | `string` | No |  |
| `description` | `string` | No |  |
| `id` | `int` | No |  |
| `input` | `array` | No |  |
| `last_pipeline` | `array` | No |  |
| `next_run_at` | `string` | No |  |
| `owner` | `array` | No |  |
| `ref` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `variable` | `array` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApiEntitiesCiPipelineScheduleDetail()->create([
  "project_id" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesCiPipelineScheduleDetail()->load(["pipeline_schedule_id" => "pipeline_schedule_id", "project_id" => "project_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ApiEntitiesCiPipelineScheduleDetail()->update([
  "pipeline_schedule_id" => "pipeline_schedule_id",
  "project_id" => "project_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesCiPipelineScheduleDetailEntity`

Create a new `ApiEntitiesCiPipelineScheduleDetailEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesCiResetTokenResultEntity

```php
$api_entities_ci_reset_token_result = $client->ApiEntitiesCiResetTokenResult();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApiEntitiesCiResetTokenResult()->create([
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesCiResetTokenResultEntity`

Create a new `ApiEntitiesCiResetTokenResultEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesCiResourceGroupEntity

```php
$api_entities_ci_resource_group = $client->ApiEntitiesCiResourceGroup();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No |  |
| `id` | `int` | No |  |
| `key` | `string` | No |  |
| `process_mode` | `string` | No |  |
| `updated_at` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiEntitiesCiResourceGroup()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesCiResourceGroup()->load(["id" => "api_entities_ci_resource_group_id", "project_id" => "project_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ApiEntitiesCiResourceGroup()->update([
  "id" => "api_entities_ci_resource_group_id",
  "project_id" => "project_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesCiResourceGroupEntity`

Create a new `ApiEntitiesCiResourceGroupEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesCiRunnerEntity

```php
$api_entities_ci_runner = $client->ApiEntitiesCiRunner();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | No |  |
| `created_at` | `string` | No |  |
| `created_by` | `array` | No |  |
| `description` | `string` | No |  |
| `id` | `int` | No |  |
| `ip_address` | `string` | No |  |
| `is_shared` | `bool` | No |  |
| `job_execution_status` | `string` | No |  |
| `name` | `string` | No |  |
| `online` | `bool` | No |  |
| `paused` | `bool` | No |  |
| `runner_type` | `string` | No |  |
| `status` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApiEntitiesCiRunner()->create([
  "project_id" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesCiRunner()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesCiRunnerEntity`

Create a new `ApiEntitiesCiRunnerEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesCiRunnerDetailEntity

```php
$api_entities_ci_runner_detail = $client->ApiEntitiesCiRunnerDetail();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access_level` | `string` | No |  |
| `active` | `bool` | No |  |
| `architecture` | `string` | No |  |
| `contacted_at` | `string` | No |  |
| `created_at` | `string` | No |  |
| `created_by` | `array` | No |  |
| `description` | `string` | No |  |
| `group` | `array` | No |  |
| `id` | `int` | No |  |
| `ip_address` | `string` | No |  |
| `is_shared` | `bool` | No |  |
| `job_execution_status` | `string` | No |  |
| `locked` | `bool` | No |  |
| `maintenance_note` | `string` | No |  |
| `maximum_timeout` | `string` | No |  |
| `name` | `string` | No |  |
| `online` | `bool` | No |  |
| `paused` | `bool` | No |  |
| `platform` | `string` | No |  |
| `project` | `array` | No |  |
| `revision` | `string` | No |  |
| `run_untagged` | `string` | No |  |
| `runner_type` | `string` | No |  |
| `status` | `string` | No |  |
| `tag_list` | `string` | No |  |
| `version` | `string` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesCiRunnerDetail()->load(["id" => "api_entities_ci_runner_detail_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ApiEntitiesCiRunnerDetail()->update([
  "id" => "api_entities_ci_runner_detail_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesCiRunnerDetailEntity`

Create a new `ApiEntitiesCiRunnerDetailEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesCiRunnerManagerEntity

```php
$api_entities_ci_runner_manager = $client->ApiEntitiesCiRunnerManager();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `architecture` | `string` | No |  |
| `contacted_at` | `string` | No |  |
| `created_at` | `string` | No |  |
| `id` | `int` | No |  |
| `ip_address` | `string` | No |  |
| `job_execution_status` | `string` | No |  |
| `platform` | `string` | No |  |
| `revision` | `string` | No |  |
| `status` | `string` | No |  |
| `system_id` | `string` | No |  |
| `version` | `string` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesCiRunnerManager()->load(["runner_id" => "runner_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesCiRunnerManagerEntity`

Create a new `ApiEntitiesCiRunnerManagerEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesCiRunnerRegistrationDetailEntity

```php
$api_entities_ci_runner_registration_detail = $client->ApiEntitiesCiRunnerRegistrationDetail();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApiEntitiesCiRunnerRegistrationDetail()->create([
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesCiRunnerRegistrationDetailEntity`

Create a new `ApiEntitiesCiRunnerRegistrationDetailEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesCiSecureFileEntity

```php
$api_entities_ci_secure_file = $client->ApiEntitiesCiSecureFile();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `checksum` | `string` | No |  |
| `checksum_algorithm` | `string` | No |  |
| `created_at` | `string` | No |  |
| `expires_at` | `string` | No |  |
| `file_extension` | `string` | No |  |
| `id` | `int` | No |  |
| `metadata` | `array` | No |  |
| `name` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApiEntitiesCiSecureFile()->create([
  "project_id" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesCiSecureFile()->load(["id" => "api_entities_ci_secure_file_id", "project_id" => "project_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesCiSecureFileEntity`

Create a new `ApiEntitiesCiSecureFileEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesCiVariableEntity

```php
$api_entities_ci_variable = $client->ApiEntitiesCiVariable();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No |  |
| `environment_scope` | `string` | No |  |
| `hidden` | `bool` | No |  |
| `key` | `string` | No |  |
| `masked` | `bool` | No |  |
| `protected` | `bool` | No |  |
| `raw` | `bool` | No |  |
| `value` | `string` | No |  |
| `variable_type` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApiEntitiesCiVariable()->create([
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiEntitiesCiVariable()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesCiVariable()->load(["id" => "api_entities_ci_variable_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ApiEntitiesCiVariable()->update([
  "id" => "api_entities_ci_variable_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesCiVariableEntity`

Create a new `ApiEntitiesCiVariableEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesClusterEntity

```php
$api_entities_cluster = $client->ApiEntitiesCluster();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cluster_type` | `string` | No |  |
| `created_at` | `string` | No |  |
| `domain` | `string` | No |  |
| `enabled` | `bool` | No |  |
| `environment_scope` | `string` | No |  |
| `id` | `string` | No |  |
| `managed` | `string` | No |  |
| `management_project` | `array` | No |  |
| `name` | `string` | No |  |
| `namespace_per_environment` | `string` | No |  |
| `platform_kubernete` | `array` | No |  |
| `platform_type` | `string` | No |  |
| `provider_gcp` | `array` | No |  |
| `provider_type` | `string` | No |  |
| `user` | `array` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApiEntitiesCluster()->create([
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiEntitiesCluster()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesCluster()->load(["id" => "api_entities_cluster_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ApiEntitiesCluster()->update([
  "id" => "api_entities_cluster_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesClusterEntity`

Create a new `ApiEntitiesClusterEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesClusterGroupEntity

```php
$api_entities_cluster_group = $client->ApiEntitiesClusterGroup();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cluster_type` | `string` | No |  |
| `created_at` | `string` | No |  |
| `domain` | `string` | No |  |
| `enabled` | `bool` | No |  |
| `environment_scope` | `string` | No |  |
| `group` | `array` | No |  |
| `id` | `string` | No |  |
| `managed` | `string` | No |  |
| `management_project` | `array` | No |  |
| `name` | `string` | No |  |
| `namespace_per_environment` | `string` | No |  |
| `platform_kubernete` | `array` | No |  |
| `platform_type` | `string` | No |  |
| `provider_gcp` | `array` | No |  |
| `provider_type` | `string` | No |  |
| `user` | `array` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApiEntitiesClusterGroup()->create([
  "group_id" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesClusterGroup()->load(["cluster_id" => "cluster_id", "group_id" => "group_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ApiEntitiesClusterGroup()->update([
  "cluster_id" => "cluster_id",
  "group_id" => "group_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesClusterGroupEntity`

Create a new `ApiEntitiesClusterGroupEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesClusterProjectEntity

```php
$api_entities_cluster_project = $client->ApiEntitiesClusterProject();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cluster_type` | `string` | No |  |
| `created_at` | `string` | No |  |
| `domain` | `string` | No |  |
| `enabled` | `bool` | No |  |
| `environment_scope` | `string` | No |  |
| `id` | `string` | No |  |
| `managed` | `string` | No |  |
| `management_project` | `array` | No |  |
| `name` | `string` | No |  |
| `namespace_per_environment` | `string` | No |  |
| `platform_kubernete` | `array` | No |  |
| `platform_type` | `string` | No |  |
| `project` | `array` | No |  |
| `provider_gcp` | `array` | No |  |
| `provider_type` | `string` | No |  |
| `user` | `array` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApiEntitiesClusterProject()->create([
  "project_id" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesClusterProject()->load(["cluster_id" => "cluster_id", "project_id" => "project_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ApiEntitiesClusterProject()->update([
  "cluster_id" => "cluster_id",
  "project_id" => "project_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesClusterProjectEntity`

Create a new `ApiEntitiesClusterProjectEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesClustersAgentEntity

```php
$api_entities_clusters_agent = $client->ApiEntitiesClustersAgent();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `config_project` | `array` | No |  |
| `created_at` | `string` | No |  |
| `created_by_user_id` | `string` | No |  |
| `id` | `string` | No |  |
| `is_receptive` | `bool` | No |  |
| `name` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApiEntitiesClustersAgent()->create([
  "project_id" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesClustersAgent()->load(["project_id" => "project_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesClustersAgentEntity`

Create a new `ApiEntitiesClustersAgentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesClustersAgentTokenEntity

```php
$api_entities_clusters_agent_token = $client->ApiEntitiesClustersAgentToken();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent_id` | `string` | No |  |
| `created_at` | `string` | No |  |
| `created_by_user_id` | `string` | No |  |
| `description` | `string` | No |  |
| `id` | `string` | No |  |
| `last_used_at` | `string` | No |  |
| `name` | `string` | No |  |
| `status` | `string` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesClustersAgentToken()->load(["id" => "api_entities_clusters_agent_token_id", "cluster_agent_id" => "cluster_agent_id", "project_id" => "project_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesClustersAgentTokenEntity`

Create a new `ApiEntitiesClustersAgentTokenEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesClustersAgentTokenBasicEntity

```php
$api_entities_clusters_agent_token_basic = $client->ApiEntitiesClustersAgentTokenBasic();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent_id` | `string` | No |  |
| `created_at` | `string` | No |  |
| `created_by_user_id` | `string` | No |  |
| `description` | `string` | No |  |
| `id` | `string` | No |  |
| `name` | `string` | No |  |
| `status` | `string` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesClustersAgentTokenBasic()->load(["cluster_agent_id" => "cluster_agent_id", "project_id" => "project_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesClustersAgentTokenBasicEntity`

Create a new `ApiEntitiesClustersAgentTokenBasicEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesClustersAgentTokenWithTokenEntity

```php
$api_entities_clusters_agent_token_with_token = $client->ApiEntitiesClustersAgentTokenWithToken();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApiEntitiesClustersAgentTokenWithToken()->create([
  "cluster_agent_id" => null, // string
  "project_id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesClustersAgentTokenWithTokenEntity`

Create a new `ApiEntitiesClustersAgentTokenWithTokenEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesCommitEntity

```php
$api_entities_commit = $client->ApiEntitiesCommit();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author_email` | `string` | No |  |
| `author_name` | `string` | No |  |
| `authored_date` | `string` | No |  |
| `committed_date` | `string` | No |  |
| `committer_email` | `string` | No |  |
| `committer_name` | `string` | No |  |
| `created_at` | `string` | No |  |
| `extended_trailer` | `array` | No |  |
| `id` | `string` | No |  |
| `message` | `string` | No |  |
| `parent_id` | `array` | No |  |
| `short_id` | `string` | No |  |
| `title` | `string` | No |  |
| `trailer` | `array` | No |  |
| `web_url` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApiEntitiesCommit()->create([
  "project_id" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiEntitiesCommit()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesCommitEntity`

Create a new `ApiEntitiesCommitEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesCommitDetailEntity

```php
$api_entities_commit_detail = $client->ApiEntitiesCommitDetail();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author_email` | `string` | No |  |
| `author_name` | `string` | No |  |
| `authored_date` | `string` | No |  |
| `committed_date` | `string` | No |  |
| `committer_email` | `string` | No |  |
| `committer_name` | `string` | No |  |
| `created_at` | `string` | No |  |
| `extended_trailer` | `array` | No |  |
| `id` | `string` | No |  |
| `last_pipeline` | `array` | No |  |
| `message` | `string` | No |  |
| `parent_id` | `array` | No |  |
| `project_id` | `int` | No |  |
| `short_id` | `string` | No |  |
| `stat` | `array` | No |  |
| `status` | `string` | No |  |
| `title` | `string` | No |  |
| `trailer` | `array` | No |  |
| `web_url` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApiEntitiesCommitDetail()->create([
  "project_id" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesCommitDetail()->load(["project_id" => "project_id", "sha" => "sha"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ApiEntitiesCommitDetail()->update([
  "project_id" => "project_id",
  "submodule" => "submodule",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesCommitDetailEntity`

Create a new `ApiEntitiesCommitDetailEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesCommitNoteEntity

```php
$api_entities_commit_note = $client->ApiEntitiesCommitNote();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `array` | No |  |
| `created_at` | `string` | No |  |
| `line` | `int` | No |  |
| `line_type` | `string` | No |  |
| `note` | `string` | No |  |
| `path` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApiEntitiesCommitNote()->create([
  "project_id" => null, // string
  "sha" => null, // mixed
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiEntitiesCommitNote()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesCommitNoteEntity`

Create a new `ApiEntitiesCommitNoteEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesCommitSequenceEntity

```php
$api_entities_commit_sequence = $client->ApiEntitiesCommitSequence();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `int` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesCommitSequence()->load(["project_id" => "project_id", "sha" => "sha"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesCommitSequenceEntity`

Create a new `ApiEntitiesCommitSequenceEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesCommitSignatureEntity

```php
$api_entities_commit_signature = $client->ApiEntitiesCommitSignature();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `commit_source` | `string` | No |  |
| `signature` | `string` | No |  |
| `signature_type` | `string` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesCommitSignature()->load(["project_id" => "project_id", "sha" => "sha"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesCommitSignatureEntity`

Create a new `ApiEntitiesCommitSignatureEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesCommitStatusEntity

```php
$api_entities_commit_status = $client->ApiEntitiesCommitStatus();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_failure` | `bool` | No |  |
| `author` | `array` | No |  |
| `coverage` | `float` | No |  |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `finished_at` | `string` | No |  |
| `id` | `int` | No |  |
| `name` | `string` | No |  |
| `pipeline_id` | `int` | No |  |
| `ref` | `string` | No |  |
| `sha` | `string` | No |  |
| `started_at` | `string` | No |  |
| `status` | `string` | No |  |
| `target_url` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApiEntitiesCommitStatus()->create([
  "id" => null, // string
  "project_id" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiEntitiesCommitStatus()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesCommitStatusEntity`

Create a new `ApiEntitiesCommitStatusEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesCompareEntity

```php
$api_entities_compare = $client->ApiEntitiesCompare();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `commit` | `array` | No |  |
| `compare_same_ref` | `bool` | No |  |
| `compare_timeout` | `bool` | No |  |
| `diff` | `array` | No |  |
| `web_url` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiEntitiesCompare()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesCompareEntity`

Create a new `ApiEntitiesCompareEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesContainerRegistryRepositoryEntity

```php
$api_entities_container_registry_repository = $client->ApiEntitiesContainerRegistryRepository();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cleanup_policy_started_at` | `string` | No |  |
| `created_at` | `string` | No |  |
| `delete_api_path` | `string` | No |  |
| `id` | `int` | No |  |
| `location` | `string` | No |  |
| `name` | `string` | No |  |
| `path` | `string` | No |  |
| `project_id` | `int` | No |  |
| `size` | `int` | No |  |
| `status` | `string` | No |  |
| `tag` | `array` | No |  |
| `tags_count` | `int` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiEntitiesContainerRegistryRepository()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesContainerRegistryRepository()->load(["id" => "api_entities_container_registry_repository_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesContainerRegistryRepositoryEntity`

Create a new `ApiEntitiesContainerRegistryRepositoryEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesContainerRegistryTagEntity

```php
$api_entities_container_registry_tag = $client->ApiEntitiesContainerRegistryTag();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `location` | `string` | No |  |
| `name` | `string` | No |  |
| `path` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiEntitiesContainerRegistryTag()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesContainerRegistryTagEntity`

Create a new `ApiEntitiesContainerRegistryTagEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesContainerRegistryTagDetailEntity

```php
$api_entities_container_registry_tag_detail = $client->ApiEntitiesContainerRegistryTagDetail();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No |  |
| `digest` | `string` | No |  |
| `location` | `string` | No |  |
| `name` | `string` | No |  |
| `path` | `string` | No |  |
| `revision` | `string` | No |  |
| `short_revision` | `string` | No |  |
| `total_size` | `int` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesContainerRegistryTagDetail()->load(["project_id" => "project_id", "repository_id" => "repository_id", "tag_name" => "tag_name"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesContainerRegistryTagDetailEntity`

Create a new `ApiEntitiesContainerRegistryTagDetailEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesContributorEntity

```php
$api_entities_contributor = $client->ApiEntitiesContributor();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `addition` | `int` | No |  |
| `commit` | `int` | No |  |
| `deletion` | `int` | No |  |
| `email` | `string` | No |  |
| `name` | `string` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesContributor()->load(["project_id" => "project_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesContributorEntity`

Create a new `ApiEntitiesContributorEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesDeployKeyEntity

```php
$api_entities_deploy_key = $client->ApiEntitiesDeployKey();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No |  |
| `expires_at` | `string` | No |  |
| `fingerprint` | `string` | No |  |
| `fingerprint_sha256` | `string` | No |  |
| `id` | `int` | No |  |
| `key` | `string` | No |  |
| `last_used_at` | `string` | No |  |
| `projects_with_readonly_access` | `array` | No |  |
| `projects_with_write_access` | `array` | No |  |
| `title` | `string` | No |  |
| `usage_type` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApiEntitiesDeployKey()->create([
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiEntitiesDeployKey()->list();
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ApiEntitiesDeployKey()->update([
  "id" => "id",
  "project_id" => "project_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesDeployKeyEntity`

Create a new `ApiEntitiesDeployKeyEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesDeployKeysProjectEntity

```php
$api_entities_deploy_keys_project = $client->ApiEntitiesDeployKeysProject();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `can_push` | `bool` | No |  |
| `created_at` | `string` | No |  |
| `expires_at` | `string` | No |  |
| `fingerprint` | `string` | No |  |
| `fingerprint_sha256` | `string` | No |  |
| `id` | `int` | No |  |
| `key` | `string` | No |  |
| `last_used_at` | `string` | No |  |
| `projects_with_readonly_access` | `array` | No |  |
| `projects_with_write_access` | `array` | No |  |
| `title` | `string` | No |  |
| `usage_type` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApiEntitiesDeployKeysProject()->create([
  "project_id" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiEntitiesDeployKeysProject()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesDeployKeysProject()->load(["key_id" => "key_id", "project_id" => "project_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesDeployKeysProjectEntity`

Create a new `ApiEntitiesDeployKeysProjectEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesDeployTokenEntity

```php
$api_entities_deploy_token = $client->ApiEntitiesDeployToken();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `expired` | `bool` | No |  |
| `expires_at` | `string` | No |  |
| `id` | `int` | No |  |
| `name` | `string` | No |  |
| `revoked` | `bool` | No |  |
| `scope` | `array` | No |  |
| `username` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiEntitiesDeployToken()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesDeployToken()->load(["id" => "api_entities_deploy_token_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesDeployTokenEntity`

Create a new `ApiEntitiesDeployTokenEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesDeployTokenWithTokenEntity

```php
$api_entities_deploy_token_with_token = $client->ApiEntitiesDeployTokenWithToken();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApiEntitiesDeployTokenWithToken()->create([
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesDeployTokenWithTokenEntity`

Create a new `ApiEntitiesDeployTokenWithTokenEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesDeploymentEntity

```php
$api_entities_deployment = $client->ApiEntitiesDeployment();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No |  |
| `deployable` | `array` | No |  |
| `environment` | `array` | No |  |
| `id` | `int` | No |  |
| `iid` | `int` | No |  |
| `ref` | `string` | No |  |
| `sha` | `string` | No |  |
| `status` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `user` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiEntitiesDeployment()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesDeploymentEntity`

Create a new `ApiEntitiesDeploymentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesDeploymentExtendedEntity

```php
$api_entities_deployment_extended = $client->ApiEntitiesDeploymentExtended();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `approval` | `array` | No |  |
| `approval_summary` | `array` | No |  |
| `created_at` | `string` | No |  |
| `deployable` | `array` | No |  |
| `environment` | `array` | No |  |
| `id` | `int` | No |  |
| `iid` | `int` | No |  |
| `pending_approval_count` | `int` | No |  |
| `ref` | `string` | No |  |
| `sha` | `string` | No |  |
| `status` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `user` | `array` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApiEntitiesDeploymentExtended()->create([
  "project_id" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesDeploymentExtended()->load(["deployment_id" => "deployment_id", "project_id" => "project_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ApiEntitiesDeploymentExtended()->update([
  "deployment_id" => "deployment_id",
  "project_id" => "project_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesDeploymentExtendedEntity`

Create a new `ApiEntitiesDeploymentExtendedEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesDeploymentsApprovalEntity

```php
$api_entities_deployments_approval = $client->ApiEntitiesDeploymentsApproval();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApiEntitiesDeploymentsApproval()->create([
  "deployment_id" => null, // string
  "project_id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesDeploymentsApprovalEntity`

Create a new `ApiEntitiesDeploymentsApprovalEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesDictionaryTableEntity

```php
$api_entities_dictionary_table = $client->ApiEntitiesDictionaryTable();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `feature_category` | `array` | No |  |
| `table_name` | `string` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesDictionaryTable()->load(["id" => "api_entities_dictionary_table_id", "databas_id" => "databas_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesDictionaryTableEntity`

Create a new `ApiEntitiesDictionaryTableEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesDiffEntity

```php
$api_entities_diff = $client->ApiEntitiesDiff();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `a_mode` | `string` | No |  |
| `b_mode` | `string` | No |  |
| `collapsed` | `bool` | No |  |
| `deleted_file` | `bool` | No |  |
| `diff` | `string` | No |  |
| `generated_file` | `bool` | No |  |
| `new_file` | `bool` | No |  |
| `new_path` | `string` | No |  |
| `old_path` | `string` | No |  |
| `renamed_file` | `bool` | No |  |
| `too_large` | `bool` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiEntitiesDiff()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesDiff()->load(["merge_request_id" => "merge_request_id", "project_id" => "project_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesDiffEntity`

Create a new `ApiEntitiesDiffEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesDiscoveredClusterEntity

```php
$api_entities_discovered_cluster = $client->ApiEntitiesDiscoveredCluster();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `group` | `string` | No |  |
| `project` | `string` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesDiscoveredCluster()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesDiscoveredClusterEntity`

Create a new `ApiEntitiesDiscoveredClusterEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesDraftNoteEntity

```php
$api_entities_draft_note = $client->ApiEntitiesDraftNote();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author_id` | `int` | No |  |
| `commit_id` | `int` | No |  |
| `discussion_id` | `int` | No |  |
| `id` | `int` | No |  |
| `line_code` | `string` | No |  |
| `merge_request_id` | `int` | No |  |
| `note` | `string` | No |  |
| `position` | `array` | No |  |
| `resolve_discussion` | `bool` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApiEntitiesDraftNote()->create([
  "merge_request_id" => null, // string
  "project_id" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiEntitiesDraftNote()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesDraftNote()->load(["id" => "api_entities_draft_note_id", "merge_request_id" => "merge_request_id", "project_id" => "project_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ApiEntitiesDraftNote()->update([
  "id" => "api_entities_draft_note_id",
  "merge_request_id" => "merge_request_id",
  "project_id" => "project_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesDraftNoteEntity`

Create a new `ApiEntitiesDraftNoteEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesEnvironmentEntity

```php
$api_entities_environment = $client->ApiEntitiesEnvironment();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auto_stop_at` | `string` | No |  |
| `auto_stop_setting` | `string` | No |  |
| `cluster_agent` | `array` | No |  |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `external_url` | `string` | No |  |
| `flux_resource_path` | `string` | No |  |
| `id` | `int` | No |  |
| `kubernetes_namespace` | `string` | No |  |
| `last_deployment` | `array` | No |  |
| `name` | `string` | No |  |
| `project` | `array` | No |  |
| `slug` | `string` | No |  |
| `state` | `string` | No |  |
| `tier` | `string` | No |  |
| `updated_at` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApiEntitiesEnvironment()->create([
  "project_id" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiEntitiesEnvironment()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesEnvironment()->load(["id" => "api_entities_environment_id", "project_id" => "project_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ApiEntitiesEnvironment()->update([
  "id" => "api_entities_environment_id",
  "project_id" => "project_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesEnvironmentEntity`

Create a new `ApiEntitiesEnvironmentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesErrorTrackingClientKeyEntity

```php
$api_entities_error_tracking_client_key = $client->ApiEntitiesErrorTrackingClientKey();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | No |  |
| `id` | `int` | No |  |
| `public_key` | `string` | No |  |
| `sentry_dsn` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApiEntitiesErrorTrackingClientKey()->create([
  "project_id" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiEntitiesErrorTrackingClientKey()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesErrorTrackingClientKeyEntity`

Create a new `ApiEntitiesErrorTrackingClientKeyEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesErrorTrackingProjectSettingEntity

```php
$api_entities_error_tracking_project_setting = $client->ApiEntitiesErrorTrackingProjectSetting();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | No |  |
| `api_url` | `string` | No |  |
| `integrated` | `bool` | No |  |
| `project_name` | `string` | No |  |
| `sentry_external_url` | `string` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesErrorTrackingProjectSetting()->load(["project_id" => "project_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ApiEntitiesErrorTrackingProjectSetting()->update([
  "project_id" => "project_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesErrorTrackingProjectSettingEntity`

Create a new `ApiEntitiesErrorTrackingProjectSettingEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesEventEntity

```php
$api_entities_event = $client->ApiEntitiesEvent();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action_name` | `string` | No |  |
| `author` | `array` | No |  |
| `author_id` | `int` | No |  |
| `author_username` | `string` | No |  |
| `created_at` | `string` | No |  |
| `id` | `int` | No |  |
| `imported` | `bool` | No |  |
| `imported_from` | `string` | No |  |
| `note` | `array` | No |  |
| `project_id` | `int` | No |  |
| `push_data` | `array` | No |  |
| `target_id` | `int` | No |  |
| `target_iid` | `int` | No |  |
| `target_title` | `string` | No |  |
| `target_type` | `string` | No |  |
| `wiki_page` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiEntitiesEvent()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesEvent()->load(["project_id" => "project_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesEventEntity`

Create a new `ApiEntitiesEventEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesFeatureEntity

```php
$api_entities_feature = $client->ApiEntitiesFeature();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `definition` | `array` | No |  |
| `gate` | `array` | No |  |
| `name` | `string` | No |  |
| `state` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApiEntitiesFeature()->create([
  "id" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiEntitiesFeature()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesFeatureEntity`

Create a new `ApiEntitiesFeatureEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesFeatureDefinitionEntity

```php
$api_entities_feature_definition = $client->ApiEntitiesFeatureDefinition();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `default_enabled` | `string` | No |  |
| `feature_issue_url` | `string` | No |  |
| `group` | `string` | No |  |
| `intended_to_rollout_by` | `string` | No |  |
| `introduced_by_url` | `string` | No |  |
| `log_state_change` | `string` | No |  |
| `milestone` | `string` | No |  |
| `name` | `string` | No |  |
| `rollout_issue_url` | `string` | No |  |
| `type` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiEntitiesFeatureDefinition()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesFeatureDefinitionEntity`

Create a new `ApiEntitiesFeatureDefinitionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesFeatureFlagEntity

```php
$api_entities_feature_flag = $client->ApiEntitiesFeatureFlag();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | No |  |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `name` | `string` | No |  |
| `scope` | `string` | No |  |
| `strategy` | `array` | No |  |
| `updated_at` | `string` | No |  |
| `version` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApiEntitiesFeatureFlag()->create([
  "project_id" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiEntitiesFeatureFlag()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesFeatureFlag()->load(["id" => "api_entities_feature_flag_id", "project_id" => "project_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ApiEntitiesFeatureFlag()->update([
  "id" => "api_entities_feature_flag_id",
  "project_id" => "project_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesFeatureFlagEntity`

Create a new `ApiEntitiesFeatureFlagEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesFeatureFlagUserListEntity

```php
$api_entities_feature_flag_user_list = $client->ApiEntitiesFeatureFlagUserList();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No |  |
| `edit_path` | `string` | No |  |
| `id` | `int` | No |  |
| `iid` | `int` | No |  |
| `name` | `string` | No |  |
| `path` | `string` | No |  |
| `project_id` | `int` | No |  |
| `updated_at` | `string` | No |  |
| `user_xid` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApiEntitiesFeatureFlagUserList()->create([
  "project_id" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiEntitiesFeatureFlagUserList()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesFeatureFlagUserList()->load(["iid" => "iid", "project_id" => "project_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ApiEntitiesFeatureFlagUserList()->update([
  "iid" => "iid",
  "project_id" => "project_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesFeatureFlagUserListEntity`

Create a new `ApiEntitiesFeatureFlagUserListEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesFreezePeriodEntity

```php
$api_entities_freeze_period = $client->ApiEntitiesFreezePeriod();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No |  |
| `cron_timezone` | `string` | No |  |
| `freeze_end` | `string` | No |  |
| `freeze_start` | `string` | No |  |
| `id` | `int` | No |  |
| `updated_at` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApiEntitiesFreezePeriod()->create([
  "project_id" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiEntitiesFreezePeriod()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesFreezePeriod()->load(["id" => "api_entities_freeze_period_id", "project_id" => "project_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ApiEntitiesFreezePeriod()->update([
  "id" => "api_entities_freeze_period_id",
  "project_id" => "project_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesFreezePeriodEntity`

Create a new `ApiEntitiesFreezePeriodEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesGitlabSubscriptionEntity

```php
$api_entities_gitlab_subscription = $client->ApiEntitiesGitlabSubscription();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `billing` | `array` | No |  |
| `plan` | `array` | No |  |
| `usage` | `array` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesGitlabSubscription()->load(["namespace_id" => "namespace_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesGitlabSubscriptionEntity`

Create a new `ApiEntitiesGitlabSubscriptionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesGoModuleVersionEntity

```php
$api_entities_go_module_version = $client->ApiEntitiesGoModuleVersion();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `time` | `string` | No |  |
| `version` | `string` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesGoModuleVersion()->load(["module_version" => "module_version", "project_id" => "project_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesGoModuleVersionEntity`

Create a new `ApiEntitiesGoModuleVersionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesGroupEntity

```php
$api_entities_group = $client->ApiEntitiesGroup();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `bool` | No |  |
| `auto_devops_enabled` | `string` | No |  |
| `auto_duo_code_review_enabled` | `string` | No |  |
| `avatar_url` | `string` | No |  |
| `created_at` | `string` | No |  |
| `custom_attribute` | `array` | No |  |
| `default_branch` | `string` | No |  |
| `default_branch_protection` | `string` | No |  |
| `default_branch_protection_default` | `string` | No |  |
| `description` | `string` | No |  |
| `duo_core_features_enabled` | `bool` | No |  |
| `duo_features_enabled` | `string` | No |  |
| `emails_disabled` | `bool` | No |  |
| `emails_enabled` | `bool` | No |  |
| `file_template_project_id` | `string` | No |  |
| `full_name` | `string` | No |  |
| `full_path` | `string` | No |  |
| `id` | `string` | No |  |
| `ldap_access` | `string` | No |  |
| `ldap_cn` | `string` | No |  |
| `ldap_group_link` | `array` | No |  |
| `lfs_enabled` | `string` | No |  |
| `lock_duo_features_enabled` | `string` | No |  |
| `lock_math_rendering_limits_enabled` | `bool` | No |  |
| `marked_for_deletion_on` | `string` | No |  |
| `math_rendering_limits_enabled` | `bool` | No |  |
| `max_artifacts_size` | `int` | No |  |
| `mentions_disabled` | `string` | No |  |
| `name` | `string` | No |  |
| `organization_id` | `string` | No |  |
| `parent_id` | `string` | No |  |
| `path` | `string` | No |  |
| `project_creation_level` | `string` | No |  |
| `repository_storage` | `string` | No |  |
| `request_access_enabled` | `string` | No |  |
| `require_two_factor_authentication` | `string` | No |  |
| `root_storage_statistic` | `array` | No |  |
| `saml_group_link` | `array` | No |  |
| `share_with_group_lock` | `string` | No |  |
| `shared_runners_setting` | `string` | No |  |
| `show_diff_preview_in_email` | `bool` | No |  |
| `statistic` | `array` | No |  |
| `subgroup_creation_level` | `string` | No |  |
| `two_factor_grace_period` | `string` | No |  |
| `visibility` | `string` | No |  |
| `web_based_commit_signing_enabled` | `string` | No |  |
| `web_url` | `string` | No |  |
| `wiki_access_level` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApiEntitiesGroup()->create([
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiEntitiesGroup()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesGroup()->load(["project_id" => "project_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ApiEntitiesGroup()->update([
  "id" => "id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesGroupEntity`

Create a new `ApiEntitiesGroupEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesGroupDetailEntity

```php
$api_entities_group_detail = $client->ApiEntitiesGroupDetail();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowed_email_domains_list` | `string` | No |  |
| `archived` | `bool` | No |  |
| `auto_ban_user_on_excessive_projects_download` | `string` | No |  |
| `auto_devops_enabled` | `string` | No |  |
| `auto_duo_code_review_enabled` | `string` | No |  |
| `avatar_url` | `string` | No |  |
| `created_at` | `string` | No |  |
| `custom_attribute` | `array` | No |  |
| `default_branch` | `string` | No |  |
| `default_branch_protection` | `string` | No |  |
| `default_branch_protection_default` | `string` | No |  |
| `description` | `string` | No |  |
| `duo_core_features_enabled` | `bool` | No |  |
| `duo_features_enabled` | `string` | No |  |
| `emails_disabled` | `bool` | No |  |
| `emails_enabled` | `bool` | No |  |
| `enabled_git_access_protocol` | `string` | No |  |
| `extra_shared_runners_minutes_limit` | `string` | No |  |
| `file_template_project_id` | `string` | No |  |
| `full_name` | `string` | No |  |
| `full_path` | `string` | No |  |
| `id` | `string` | No |  |
| `ip_restriction_range` | `string` | No |  |
| `ldap_access` | `string` | No |  |
| `ldap_cn` | `string` | No |  |
| `ldap_group_link` | `array` | No |  |
| `lfs_enabled` | `string` | No |  |
| `lock_duo_features_enabled` | `string` | No |  |
| `lock_math_rendering_limits_enabled` | `bool` | No |  |
| `marked_for_deletion_on` | `string` | No |  |
| `math_rendering_limits_enabled` | `bool` | No |  |
| `max_artifacts_size` | `int` | No |  |
| `membership_lock` | `string` | No |  |
| `mentions_disabled` | `string` | No |  |
| `name` | `string` | No |  |
| `organization_id` | `string` | No |  |
| `parent_id` | `string` | No |  |
| `path` | `string` | No |  |
| `prevent_forking_outside_group` | `string` | No |  |
| `prevent_sharing_groups_outside_hierarchy` | `string` | No |  |
| `project` | `array` | No |  |
| `project_creation_level` | `string` | No |  |
| `repository_storage` | `string` | No |  |
| `request_access_enabled` | `string` | No |  |
| `require_two_factor_authentication` | `string` | No |  |
| `root_storage_statistic` | `array` | No |  |
| `runners_token` | `string` | No |  |
| `saml_group_link` | `array` | No |  |
| `service_access_tokens_expiration_enforced` | `string` | No |  |
| `share_with_group_lock` | `string` | No |  |
| `shared_project` | `array` | No |  |
| `shared_runners_minutes_limit` | `string` | No |  |
| `shared_runners_setting` | `string` | No |  |
| `shared_with_group` | `string` | No |  |
| `show_diff_preview_in_email` | `bool` | No |  |
| `statistic` | `array` | No |  |
| `subgroup_creation_level` | `string` | No |  |
| `two_factor_grace_period` | `string` | No |  |
| `unique_project_download_limit` | `string` | No |  |
| `unique_project_download_limit_alertlist` | `string` | No |  |
| `unique_project_download_limit_allowlist` | `string` | No |  |
| `unique_project_download_limit_interval_in_second` | `string` | No |  |
| `visibility` | `string` | No |  |
| `web_based_commit_signing_enabled` | `string` | No |  |
| `web_url` | `string` | No |  |
| `wiki_access_level` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApiEntitiesGroupDetail()->create([
  "group_id" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesGroupDetail()->load(["id" => "api_entities_group_detail_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesGroupDetailEntity`

Create a new `ApiEntitiesGroupDetailEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesHookEntity

```php
$api_entities_hook = $client->ApiEntitiesHook();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert_status` | `mixed` | No |  |
| `branch_filter_strategy` | `string` | No |  |
| `created_at` | `string` | No |  |
| `custom_header` | `array` | No |  |
| `custom_webhook_template` | `string` | No |  |
| `description` | `string` | No |  |
| `disabled_until` | `string` | No |  |
| `enable_ssl_verification` | `bool` | No |  |
| `id` | `string` | No |  |
| `merge_requests_event` | `bool` | No |  |
| `name` | `string` | No |  |
| `push_event` | `bool` | No |  |
| `push_events_branch_filter` | `string` | No |  |
| `repository_update_event` | `bool` | No |  |
| `tag_push_event` | `bool` | No |  |
| `url` | `string` | No |  |
| `url_variable` | `array` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApiEntitiesHook()->create([
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiEntitiesHook()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesHook()->load(["id" => "api_entities_hook_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ApiEntitiesHook()->update([
  "id" => "api_entities_hook_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesHookEntity`

Create a new `ApiEntitiesHookEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesIntegrationEntity

```php
$api_entities_integration = $client->ApiEntitiesIntegration();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | No |  |
| `alert_event` | `bool` | No |  |
| `comment_on_event_enabled` | `bool` | No |  |
| `commit_event` | `bool` | No |  |
| `confidential_issues_event` | `bool` | No |  |
| `confidential_note_event` | `bool` | No |  |
| `created_at` | `string` | No |  |
| `deployment_event` | `bool` | No |  |
| `id` | `int` | No |  |
| `incident_event` | `bool` | No |  |
| `inherited` | `bool` | No |  |
| `issues_event` | `bool` | No |  |
| `job_event` | `bool` | No |  |
| `merge_requests_event` | `bool` | No |  |
| `note_event` | `bool` | No |  |
| `pipeline_event` | `bool` | No |  |
| `property` | `array` | No |  |
| `push_event` | `bool` | No |  |
| `slug` | `int` | No |  |
| `tag_push_event` | `bool` | No |  |
| `title` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `vulnerability_event` | `bool` | No |  |
| `wiki_page_event` | `bool` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesIntegration()->load(["id" => "api_entities_integration_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesIntegrationEntity`

Create a new `ApiEntitiesIntegrationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesIntegrationBasicEntity

```php
$api_entities_integration_basic = $client->ApiEntitiesIntegrationBasic();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | No |  |
| `alert_event` | `bool` | No |  |
| `comment_on_event_enabled` | `bool` | No |  |
| `commit_event` | `bool` | No |  |
| `confidential_issues_event` | `bool` | No |  |
| `confidential_note_event` | `bool` | No |  |
| `created_at` | `string` | No |  |
| `deployment_event` | `bool` | No |  |
| `id` | `int` | No |  |
| `incident_event` | `bool` | No |  |
| `inherited` | `bool` | No |  |
| `issues_event` | `bool` | No |  |
| `job_event` | `bool` | No |  |
| `merge_requests_event` | `bool` | No |  |
| `note_event` | `bool` | No |  |
| `pipeline_event` | `bool` | No |  |
| `push_event` | `bool` | No |  |
| `slug` | `int` | No |  |
| `tag_push_event` | `bool` | No |  |
| `title` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `vulnerability_event` | `bool` | No |  |
| `wiki_page_event` | `bool` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiEntitiesIntegrationBasic()->list();
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ApiEntitiesIntegrationBasic()->update([
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesIntegrationBasicEntity`

Create a new `ApiEntitiesIntegrationBasicEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesInvitationEntity

```php
$api_entities_invitation = $client->ApiEntitiesInvitation();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access_level` | `string` | No |  |
| `created_at` | `string` | No |  |
| `created_by_name` | `string` | No |  |
| `expires_at` | `string` | No |  |
| `invite_email` | `string` | No |  |
| `invite_token` | `string` | No |  |
| `user_name` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApiEntitiesInvitation()->create([
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiEntitiesInvitation()->list();
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ApiEntitiesInvitation()->update([
  "id" => "id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesInvitationEntity`

Create a new `ApiEntitiesInvitationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesIssuableTimeStatEntity

```php
$api_entities_issuable_time_stat = $client->ApiEntitiesIssuableTimeStat();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `human_time_estimate` | `string` | No |  |
| `human_total_time_spent` | `string` | No |  |
| `time_estimate` | `int` | No |  |
| `total_time_spent` | `int` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApiEntitiesIssuableTimeStat()->create([
  "project_id" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesIssuableTimeStat()->load(["project_id" => "project_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesIssuableTimeStatEntity`

Create a new `ApiEntitiesIssuableTimeStatEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesIssueEntity

```php
$api_entities_issue = $client->ApiEntitiesIssue();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assignee` | `array` | No |  |
| `author` | `array` | No |  |
| `blocking_issues_count` | `string` | No |  |
| `closed_at` | `string` | No |  |
| `closed_by` | `array` | No |  |
| `confidential` | `bool` | No |  |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `discussion_locked` | `bool` | No |  |
| `downvote` | `string` | No |  |
| `due_date` | `string` | No |  |
| `epic` | `array` | No |  |
| `epic_iid` | `string` | No |  |
| `has_task` | `bool` | No |  |
| `health_status` | `string` | No |  |
| `id` | `int` | No |  |
| `iid` | `int` | No |  |
| `imported` | `string` | No |  |
| `imported_from` | `string` | No |  |
| `issue_type` | `string` | No |  |
| `iteration` | `array` | No |  |
| `label` | `array` | No |  |
| `link` | `array` | No |  |
| `merge_requests_count` | `string` | No |  |
| `milestone` | `array` | No |  |
| `moved_to_id` | `string` | No |  |
| `project_id` | `int` | No |  |
| `reference` | `array` | No |  |
| `service_desk_reply_to` | `string` | No |  |
| `severity` | `string` | No |  |
| `state` | `string` | No |  |
| `subscribed` | `string` | No |  |
| `task_completion_status` | `string` | No |  |
| `task_status` | `string` | No |  |
| `time_stat` | `array` | No |  |
| `title` | `string` | No |  |
| `type` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upvote` | `string` | No |  |
| `user_notes_count` | `string` | No |  |
| `web_url` | `string` | No |  |
| `weight` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApiEntitiesIssue()->create([
  "project_id" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiEntitiesIssue()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesIssue()->load(["id" => "api_entities_issue_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ApiEntitiesIssue()->update([
  "id" => "api_entities_issue_id",
  "project_id" => "project_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesIssueEntity`

Create a new `ApiEntitiesIssueEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesIssueLinkEntity

```php
$api_entities_issue_link = $client->ApiEntitiesIssueLink();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `link_type` | `string` | No |  |
| `source_issue` | `array` | No |  |
| `target_issue` | `array` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApiEntitiesIssueLink()->create([
  "issue_id" => null, // string
  "project_id" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesIssueLink()->load(["id" => "api_entities_issue_link_id", "issue_id" => "issue_id", "project_id" => "project_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesIssueLinkEntity`

Create a new `ApiEntitiesIssueLinkEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesLicenseEntity

```php
$api_entities_license = $client->ApiEntitiesLicense();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `condition` | `array` | No |  |
| `content` | `string` | No |  |
| `description` | `string` | No |  |
| `html_url` | `string` | No |  |
| `key` | `string` | No |  |
| `limitation` | `array` | No |  |
| `name` | `string` | No |  |
| `nickname` | `string` | No |  |
| `permission` | `array` | No |  |
| `popular` | `bool` | No |  |
| `source_url` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiEntitiesLicense()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesLicenseEntity`

Create a new `ApiEntitiesLicenseEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesMarkdownEntity

```php
$api_entities_markdown = $client->ApiEntitiesMarkdown();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApiEntitiesMarkdown()->create([
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesMarkdownEntity`

Create a new `ApiEntitiesMarkdownEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesMarkdownUploadAdminEntity

```php
$api_entities_markdown_upload_admin = $client->ApiEntitiesMarkdownUploadAdmin();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No |  |
| `filename` | `string` | No |  |
| `id` | `string` | No |  |
| `size` | `string` | No |  |
| `uploaded_by` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiEntitiesMarkdownUploadAdmin()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesMarkdownUploadAdminEntity`

Create a new `ApiEntitiesMarkdownUploadAdminEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesMemberEntity

```php
$api_entities_member = $client->ApiEntitiesMember();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access_level` | `string` | No |  |
| `avatar_path` | `string` | No |  |
| `avatar_url` | `string` | No |  |
| `created_at` | `string` | No |  |
| `created_by` | `array` | No |  |
| `custom_attribute` | `array` | No |  |
| `email` | `string` | No |  |
| `expires_at` | `string` | No |  |
| `group_saml_identity` | `array` | No |  |
| `group_scim_identity` | `array` | No |  |
| `id` | `int` | No |  |
| `is_using_seat` | `bool` | No |  |
| `key` | `string` | No |  |
| `locked` | `bool` | No |  |
| `member_role` | `array` | No |  |
| `membership_state` | `string` | No |  |
| `name` | `string` | No |  |
| `override` | `string` | No |  |
| `public_email` | `string` | No |  |
| `state` | `string` | No |  |
| `username` | `string` | No |  |
| `value` | `string` | No |  |
| `web_url` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApiEntitiesMember()->create([
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiEntitiesMember()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesMember()->load(["id" => "api_entities_member_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesMember()->remove(["group_id" => "group_id", "member_id" => "member_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ApiEntitiesMember()->update([
  "id" => "api_entities_member_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesMemberEntity`

Create a new `ApiEntitiesMemberEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesMergeEntity

```php
$api_entities_merge = $client->ApiEntitiesMerge();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_collaboration` | `bool` | No |  |
| `allow_maintainer_to_push` | `bool` | No |  |
| `approvals_before_merge` | `string` | No |  |
| `assignee` | `array` | No |  |
| `author` | `array` | No |  |
| `blocking_discussions_resolved` | `string` | No |  |
| `changes_count` | `string` | No |  |
| `closed_at` | `string` | No |  |
| `closed_by` | `array` | No |  |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `description_html` | `string` | No |  |
| `detailed_merge_status` | `string` | No |  |
| `diff_ref` | `array` | No |  |
| `discussion_locked` | `string` | No |  |
| `diverged_commits_count` | `string` | No |  |
| `downvote` | `string` | No |  |
| `draft` | `string` | No |  |
| `first_contribution` | `string` | No |  |
| `first_deployed_to_production_at` | `string` | No |  |
| `force_remove_source_branch` | `string` | No |  |
| `has_conflict` | `bool` | No |  |
| `head_pipeline` | `array` | No |  |
| `id` | `int` | No |  |
| `iid` | `int` | No |  |
| `imported` | `string` | No |  |
| `imported_from` | `string` | No |  |
| `label` | `string` | No |  |
| `latest_build_finished_at` | `string` | No |  |
| `latest_build_started_at` | `string` | No |  |
| `merge_after` | `string` | No |  |
| `merge_commit_sha` | `string` | No |  |
| `merge_error` | `string` | No |  |
| `merge_status` | `string` | No |  |
| `merge_user` | `array` | No |  |
| `merge_when_pipeline_succeed` | `string` | No |  |
| `merged_at` | `string` | No |  |
| `merged_by` | `array` | No |  |
| `milestone` | `array` | No |  |
| `pipeline` | `array` | No |  |
| `prepared_at` | `string` | No |  |
| `project_id` | `int` | No |  |
| `rebase_in_progress` | `string` | No |  |
| `reference` | `string` | No |  |
| `reviewer` | `array` | No |  |
| `sha` | `string` | No |  |
| `should_remove_source_branch` | `bool` | No |  |
| `source_branch` | `string` | No |  |
| `source_project_id` | `string` | No |  |
| `squash` | `string` | No |  |
| `squash_commit_sha` | `string` | No |  |
| `squash_on_merge` | `string` | No |  |
| `state` | `string` | No |  |
| `subscribed` | `string` | No |  |
| `target_branch` | `string` | No |  |
| `target_project_id` | `string` | No |  |
| `task_completion_status` | `string` | No |  |
| `time_stat` | `array` | No |  |
| `title` | `string` | No |  |
| `title_html` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upvote` | `string` | No |  |
| `user` | `array` | No |  |
| `user_notes_count` | `string` | No |  |
| `web_url` | `string` | No |  |
| `work_in_progress` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApiEntitiesMerge()->create([
  "project_id" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesMerge()->load(["merge_request_iid" => "merge_request_iid", "project_id" => "project_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ApiEntitiesMerge()->update([
  "project_id" => "project_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesMergeEntity`

Create a new `ApiEntitiesMergeEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesMergeRequestApprovalEntity

```php
$api_entities_merge_request_approval = $client->ApiEntitiesMergeRequestApproval();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `approved` | `bool` | No |  |
| `approved_by` | `array` | No |  |
| `user_can_approve` | `bool` | No |  |
| `user_has_approved` | `bool` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApiEntitiesMergeRequestApproval()->create([
  "merge_request_id" => null, // string
  "project_id" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesMergeRequestApproval()->load(["merge_request_id" => "merge_request_id", "project_id" => "project_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesMergeRequestApprovalEntity`

Create a new `ApiEntitiesMergeRequestApprovalEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesMergeRequestBasicEntity

```php
$api_entities_merge_request_basic = $client->ApiEntitiesMergeRequestBasic();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_collaboration` | `bool` | No |  |
| `allow_maintainer_to_push` | `bool` | No |  |
| `approvals_before_merge` | `string` | No |  |
| `assignee` | `array` | No |  |
| `author` | `array` | No |  |
| `blocking_discussions_resolved` | `string` | No |  |
| `closed_at` | `string` | No |  |
| `closed_by` | `array` | No |  |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `description_html` | `string` | No |  |
| `detailed_merge_status` | `string` | No |  |
| `discussion_locked` | `string` | No |  |
| `downvote` | `string` | No |  |
| `draft` | `string` | No |  |
| `force_remove_source_branch` | `string` | No |  |
| `has_conflict` | `bool` | No |  |
| `id` | `int` | No |  |
| `iid` | `int` | No |  |
| `imported` | `string` | No |  |
| `imported_from` | `string` | No |  |
| `label` | `string` | No |  |
| `merge_after` | `string` | No |  |
| `merge_commit_sha` | `string` | No |  |
| `merge_status` | `string` | No |  |
| `merge_user` | `array` | No |  |
| `merge_when_pipeline_succeed` | `string` | No |  |
| `merged_at` | `string` | No |  |
| `merged_by` | `array` | No |  |
| `milestone` | `array` | No |  |
| `prepared_at` | `string` | No |  |
| `project_id` | `int` | No |  |
| `reference` | `string` | No |  |
| `reviewer` | `array` | No |  |
| `sha` | `string` | No |  |
| `should_remove_source_branch` | `bool` | No |  |
| `source_branch` | `string` | No |  |
| `source_project_id` | `string` | No |  |
| `squash` | `string` | No |  |
| `squash_commit_sha` | `string` | No |  |
| `squash_on_merge` | `string` | No |  |
| `state` | `string` | No |  |
| `target_branch` | `string` | No |  |
| `target_project_id` | `string` | No |  |
| `task_completion_status` | `string` | No |  |
| `time_stat` | `array` | No |  |
| `title` | `string` | No |  |
| `title_html` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upvote` | `string` | No |  |
| `user_notes_count` | `string` | No |  |
| `web_url` | `string` | No |  |
| `work_in_progress` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiEntitiesMergeRequestBasic()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesMergeRequestBasic()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesMergeRequestBasicEntity`

Create a new `ApiEntitiesMergeRequestBasicEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesMergeRequestChangeEntity

```php
$api_entities_merge_request_change = $client->ApiEntitiesMergeRequestChange();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_collaboration` | `bool` | No |  |
| `allow_maintainer_to_push` | `bool` | No |  |
| `approvals_before_merge` | `string` | No |  |
| `assignee` | `array` | No |  |
| `author` | `array` | No |  |
| `blocking_discussions_resolved` | `string` | No |  |
| `change` | `array` | No |  |
| `changes_count` | `string` | No |  |
| `closed_at` | `string` | No |  |
| `closed_by` | `array` | No |  |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `description_html` | `string` | No |  |
| `detailed_merge_status` | `string` | No |  |
| `diff_ref` | `array` | No |  |
| `discussion_locked` | `string` | No |  |
| `diverged_commits_count` | `string` | No |  |
| `downvote` | `string` | No |  |
| `draft` | `string` | No |  |
| `first_contribution` | `string` | No |  |
| `first_deployed_to_production_at` | `string` | No |  |
| `force_remove_source_branch` | `string` | No |  |
| `has_conflict` | `bool` | No |  |
| `head_pipeline` | `array` | No |  |
| `id` | `int` | No |  |
| `iid` | `int` | No |  |
| `imported` | `string` | No |  |
| `imported_from` | `string` | No |  |
| `label` | `string` | No |  |
| `latest_build_finished_at` | `string` | No |  |
| `latest_build_started_at` | `string` | No |  |
| `merge_after` | `string` | No |  |
| `merge_commit_sha` | `string` | No |  |
| `merge_error` | `string` | No |  |
| `merge_status` | `string` | No |  |
| `merge_user` | `array` | No |  |
| `merge_when_pipeline_succeed` | `string` | No |  |
| `merged_at` | `string` | No |  |
| `merged_by` | `array` | No |  |
| `milestone` | `array` | No |  |
| `overflow` | `string` | No |  |
| `pipeline` | `array` | No |  |
| `prepared_at` | `string` | No |  |
| `project_id` | `int` | No |  |
| `rebase_in_progress` | `string` | No |  |
| `reference` | `string` | No |  |
| `reviewer` | `array` | No |  |
| `sha` | `string` | No |  |
| `should_remove_source_branch` | `bool` | No |  |
| `source_branch` | `string` | No |  |
| `source_project_id` | `string` | No |  |
| `squash` | `string` | No |  |
| `squash_commit_sha` | `string` | No |  |
| `squash_on_merge` | `string` | No |  |
| `state` | `string` | No |  |
| `subscribed` | `string` | No |  |
| `target_branch` | `string` | No |  |
| `target_project_id` | `string` | No |  |
| `task_completion_status` | `string` | No |  |
| `time_stat` | `array` | No |  |
| `title` | `string` | No |  |
| `title_html` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upvote` | `string` | No |  |
| `user` | `array` | No |  |
| `user_notes_count` | `string` | No |  |
| `web_url` | `string` | No |  |
| `work_in_progress` | `string` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesMergeRequestChange()->load(["merge_request_id" => "merge_request_id", "project_id" => "project_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesMergeRequestChangeEntity`

Create a new `ApiEntitiesMergeRequestChangeEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesMergeRequestDiffEntity

```php
$api_entities_merge_request_diff = $client->ApiEntitiesMergeRequestDiff();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `base_commit_sha` | `string` | No |  |
| `created_at` | `string` | No |  |
| `head_commit_sha` | `string` | No |  |
| `id` | `string` | No |  |
| `merge_request_id` | `string` | No |  |
| `patch_id_sha` | `string` | No |  |
| `real_size` | `string` | No |  |
| `start_commit_sha` | `string` | No |  |
| `state` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiEntitiesMergeRequestDiff()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesMergeRequestDiffEntity`

Create a new `ApiEntitiesMergeRequestDiffEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesMergeRequestDiffFullEntity

```php
$api_entities_merge_request_diff_full = $client->ApiEntitiesMergeRequestDiffFull();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `base_commit_sha` | `string` | No |  |
| `commit` | `array` | No |  |
| `created_at` | `string` | No |  |
| `diff` | `array` | No |  |
| `head_commit_sha` | `string` | No |  |
| `id` | `string` | No |  |
| `merge_request_id` | `string` | No |  |
| `patch_id_sha` | `string` | No |  |
| `real_size` | `string` | No |  |
| `start_commit_sha` | `string` | No |  |
| `state` | `string` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesMergeRequestDiffFull()->load(["merge_request_id" => "merge_request_id", "project_id" => "project_id", "version_id" => "version_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesMergeRequestDiffFullEntity`

Create a new `ApiEntitiesMergeRequestDiffFullEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesMergeRequestReviewerEntity

```php
$api_entities_merge_request_reviewer = $client->ApiEntitiesMergeRequestReviewer();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No |  |
| `state` | `string` | No |  |
| `user` | `array` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesMergeRequestReviewer()->load(["merge_request_id" => "merge_request_id", "project_id" => "project_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesMergeRequestReviewerEntity`

Create a new `ApiEntitiesMergeRequestReviewerEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesMetricImageEntity

```php
$api_entities_metric_image = $client->ApiEntitiesMetricImage();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No |  |
| `file_path` | `string` | No |  |
| `filename` | `string` | No |  |
| `id` | `int` | No |  |
| `url` | `string` | No |  |
| `url_text` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApiEntitiesMetricImage()->create([
  "alert_management_alert_id" => null, // string
  "project_id" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiEntitiesMetricImage()->list();
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ApiEntitiesMetricImage()->update([
  "alert_management_alert_id" => "alert_management_alert_id",
  "id" => "id",
  "project_id" => "project_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesMetricImageEntity`

Create a new `ApiEntitiesMetricImageEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesMrNoteEntity

```php
$api_entities_mr_note = $client->ApiEntitiesMrNote();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `array` | No |  |
| `note` | `string` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesMrNote()->load(["merge_request_id" => "merge_request_id", "project_id" => "project_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesMrNoteEntity`

Create a new `ApiEntitiesMrNoteEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesNamespaceEntity

```php
$api_entities_namespace = $client->ApiEntitiesNamespace();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `additional_purchased_storage_ends_on` | `string` | No |  |
| `additional_purchased_storage_size` | `int` | No |  |
| `avatar_url` | `string` | No |  |
| `billable_members_count` | `int` | No |  |
| `end_date` | `string` | No |  |
| `extra_shared_runners_minutes_limit` | `int` | No |  |
| `full_path` | `string` | No |  |
| `id` | `int` | No |  |
| `kind` | `string` | No |  |
| `max_seats_used` | `int` | No |  |
| `max_seats_used_changed_at` | `string` | No |  |
| `members_count_with_descendant` | `int` | No |  |
| `name` | `string` | No |  |
| `parent_id` | `int` | No |  |
| `path` | `string` | No |  |
| `plan` | `string` | No |  |
| `projects_count` | `int` | No |  |
| `root_repository_size` | `int` | No |  |
| `seats_in_use` | `int` | No |  |
| `shared_runners_minutes_limit` | `int` | No |  |
| `trial` | `bool` | No |  |
| `trial_ends_on` | `string` | No |  |
| `web_url` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiEntitiesNamespace()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesNamespace()->load(["id" => "api_entities_namespace_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ApiEntitiesNamespace()->update([
  "id" => "api_entities_namespace_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesNamespaceEntity`

Create a new `ApiEntitiesNamespaceEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesNamespaceExistenceEntity

```php
$api_entities_namespace_existence = $client->ApiEntitiesNamespaceExistence();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `exist` | `bool` | No |  |
| `suggest` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiEntitiesNamespaceExistence()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesNamespaceExistenceEntity`

Create a new `ApiEntitiesNamespaceExistenceEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesNamespacesStorageLimitExclusionEntity

```php
$api_entities_namespaces_storage_limit_exclusion = $client->ApiEntitiesNamespacesStorageLimitExclusion();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `int` | No |  |
| `namespace_id` | `int` | No |  |
| `namespace_name` | `string` | No |  |
| `reason` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApiEntitiesNamespacesStorageLimitExclusion()->create([
  "namespace_id" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesNamespacesStorageLimitExclusion()->load(["id" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesNamespacesStorageLimitExclusionEntity`

Create a new `ApiEntitiesNamespacesStorageLimitExclusionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesNpmPackageEntity

```php
$api_entities_npm_package = $client->ApiEntitiesNpmPackage();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dist_tag` | `array` | No |  |
| `name` | `string` | No |  |
| `version` | `array` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesNpmPackage()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesNpmPackageEntity`

Create a new `ApiEntitiesNpmPackageEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesNpmPackageTagEntity

```php
$api_entities_npm_package_tag = $client->ApiEntitiesNpmPackageTag();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dist_tag` | `array` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesNpmPackageTag()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesNpmPackageTagEntity`

Create a new `ApiEntitiesNpmPackageTagEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesNugetPackagesVersionEntity

```php
$api_entities_nuget_packages_version = $client->ApiEntitiesNugetPackagesVersion();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `version` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiEntitiesNugetPackagesVersion()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesNugetPackagesVersionEntity`

Create a new `ApiEntitiesNugetPackagesVersionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesNugetSearchResultEntity

```php
$api_entities_nuget_search_result = $client->ApiEntitiesNugetSearchResult();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `string` | No |  |
| `description` | `string` | No |  |
| `icon_url` | `string` | No |  |
| `id` | `string` | No |  |
| `license_url` | `string` | No |  |
| `project_url` | `string` | No |  |
| `summary` | `string` | No |  |
| `tag` | `string` | No |  |
| `title` | `string` | No |  |
| `total_download` | `int` | No |  |
| `type` | `string` | No |  |
| `verified` | `bool` | No |  |
| `version` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiEntitiesNugetSearchResult()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesNugetSearchResultEntity`

Create a new `ApiEntitiesNugetSearchResultEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesNugetServiceIndexEntity

```php
$api_entities_nuget_service_index = $client->ApiEntitiesNugetServiceIndex();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `resource` | `array` | No |  |
| `version` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiEntitiesNugetServiceIndex()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesNugetServiceIndexEntity`

Create a new `ApiEntitiesNugetServiceIndexEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesOrganizationsOrganizationEntity

```php
$api_entities_organizations_organization = $client->ApiEntitiesOrganizationsOrganization();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApiEntitiesOrganizationsOrganization()->create([
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesOrganizationsOrganizationEntity`

Create a new `ApiEntitiesOrganizationsOrganizationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesPackageEntity

```php
$api_entities_package = $client->ApiEntitiesPackage();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `conan_package_name` | `string` | No |  |
| `created_at` | `string` | No |  |
| `id` | `int` | No |  |
| `last_downloaded_at` | `string` | No |  |
| `link` | `array` | No |  |
| `name` | `string` | No |  |
| `package_type` | `string` | No |  |
| `pipeline` | `array` | No |  |
| `project_id` | `int` | No |  |
| `project_path` | `string` | No |  |
| `status` | `string` | No |  |
| `tag` | `string` | No |  |
| `version` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiEntitiesPackage()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesPackage()->load(["id" => "api_entities_package_id", "project_id" => "project_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesPackageEntity`

Create a new `ApiEntitiesPackageEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesPackageFileEntity

```php
$api_entities_package_file = $client->ApiEntitiesPackageFile();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No |  |
| `file_md5` | `string` | No |  |
| `file_name` | `string` | No |  |
| `file_sha1` | `string` | No |  |
| `file_sha256` | `string` | No |  |
| `id` | `int` | No |  |
| `package_id` | `int` | No |  |
| `pipeline` | `array` | No |  |
| `size` | `int` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiEntitiesPackageFile()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesPackageFileEntity`

Create a new `ApiEntitiesPackageFileEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesPackagePipelineEntity

```php
$api_entities_package_pipeline = $client->ApiEntitiesPackagePipeline();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No |  |
| `id` | `int` | No |  |
| `iid` | `int` | No |  |
| `project_id` | `int` | No |  |
| `ref` | `string` | No |  |
| `sha` | `string` | No |  |
| `source` | `string` | No |  |
| `status` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `user` | `array` | No |  |
| `web_url` | `string` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesPackagePipeline()->load(["package_id" => "package_id", "project_id" => "project_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesPackagePipelineEntity`

Create a new `ApiEntitiesPackagePipelineEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesPackagesConanFilesListEntity

```php
$api_entities_packages_conan_files_list = $client->ApiEntitiesPackagesConanFilesList();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `file` | `array` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesPackagesConanFilesList()->load(["conan_id" => "conan_id", "package_channel" => "package_channel", "package_username" => "package_username", "package_version" => "package_version", "project_id" => "project_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesPackagesConanFilesListEntity`

Create a new `ApiEntitiesPackagesConanFilesListEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesPackagesConanPackageManifestEntity

```php
$api_entities_packages_conan_package_manifest = $client->ApiEntitiesPackagesConanPackageManifest();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `package_url` | `array` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesPackagesConanPackageManifest()->load(["conan_id" => "conan_id", "conan_package_reference" => "conan_package_reference", "package_channel" => "package_channel", "package_username" => "package_username", "package_version" => "package_version"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesPackagesConanPackageManifestEntity`

Create a new `ApiEntitiesPackagesConanPackageManifestEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesPackagesConanPackageRevisionEntity

```php
$api_entities_packages_conan_package_revision = $client->ApiEntitiesPackagesConanPackageRevision();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `revision` | `string` | No |  |
| `time` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiEntitiesPackagesConanPackageRevision()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesPackagesConanPackageRevisionEntity`

Create a new `ApiEntitiesPackagesConanPackageRevisionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesPackagesConanPackageSnapshotEntity

```php
$api_entities_packages_conan_package_snapshot = $client->ApiEntitiesPackagesConanPackageSnapshot();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `package_snapshot` | `array` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesPackagesConanPackageSnapshot()->load(["conan_id" => "conan_id", "conan_package_reference" => "conan_package_reference", "package_channel" => "package_channel", "package_username" => "package_username", "package_version" => "package_version"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesPackagesConanPackageSnapshotEntity`

Create a new `ApiEntitiesPackagesConanPackageSnapshotEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesPackagesConanRecipeManifestEntity

```php
$api_entities_packages_conan_recipe_manifest = $client->ApiEntitiesPackagesConanRecipeManifest();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `recipe_url` | `array` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesPackagesConanRecipeManifest()->load(["conan_id" => "conan_id", "package_channel" => "package_channel", "package_username" => "package_username", "package_version" => "package_version"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesPackagesConanRecipeManifestEntity`

Create a new `ApiEntitiesPackagesConanRecipeManifestEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesPackagesConanRecipeRevisionEntity

```php
$api_entities_packages_conan_recipe_revision = $client->ApiEntitiesPackagesConanRecipeRevision();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `revision` | `string` | No |  |
| `time` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiEntitiesPackagesConanRecipeRevision()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesPackagesConanRecipeRevisionEntity`

Create a new `ApiEntitiesPackagesConanRecipeRevisionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesPackagesConanRecipeSnapshotEntity

```php
$api_entities_packages_conan_recipe_snapshot = $client->ApiEntitiesPackagesConanRecipeSnapshot();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `recipe_snapshot` | `array` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesPackagesConanRecipeSnapshot()->load(["id" => "api_entities_packages_conan_recipe_snapshot_id", "package_channel" => "package_channel", "package_name" => "package_name", "package_username" => "package_username", "package_version" => "package_version"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesPackagesConanRecipeSnapshotEntity`

Create a new `ApiEntitiesPackagesConanRecipeSnapshotEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesPackagesConanRevisionEntity

```php
$api_entities_packages_conan_revision = $client->ApiEntitiesPackagesConanRevision();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `revision` | `string` | No |  |
| `time` | `string` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesPackagesConanRevision()->load(["conan_id" => "conan_id", "package_channel" => "package_channel", "package_username" => "package_username", "package_version" => "package_version", "project_id" => "project_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesPackagesConanRevisionEntity`

Create a new `ApiEntitiesPackagesConanRevisionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesPackagesConanUploadUrlEntity

```php
$api_entities_packages_conan_upload_url = $client->ApiEntitiesPackagesConanUploadUrl();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `upload_url` | `array` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApiEntitiesPackagesConanUploadUrl()->create([
  "conan_id" => null, // string
  "package_channel" => null, // mixed
  "package_username" => null, // mixed
  "package_version" => null, // mixed
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesPackagesConanUploadUrlEntity`

Create a new `ApiEntitiesPackagesConanUploadUrlEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesPackagesDebianDistributionEntity

```php
$api_entities_packages_debian_distribution = $client->ApiEntitiesPackagesDebianDistribution();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `architecture` | `array` | No |  |
| `codename` | `string` | No |  |
| `component` | `array` | No |  |
| `description` | `string` | No |  |
| `id` | `int` | No |  |
| `label` | `string` | No |  |
| `origin` | `string` | No |  |
| `suite` | `string` | No |  |
| `valid_time_duration_second` | `int` | No |  |
| `version` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApiEntitiesPackagesDebianDistribution()->create([
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiEntitiesPackagesDebianDistribution()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesPackagesDebianDistribution()->load(["id" => "api_entities_packages_debian_distribution_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ApiEntitiesPackagesDebianDistribution()->update([
  "id" => "api_entities_packages_debian_distribution_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesPackagesDebianDistributionEntity`

Create a new `ApiEntitiesPackagesDebianDistributionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesPagesDomainEntity

```php
$api_entities_pages_domain = $client->ApiEntitiesPagesDomain();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auto_ssl_enabled` | `string` | No |  |
| `certificate` | `array` | No |  |
| `domain` | `string` | No |  |
| `enabled_until` | `string` | No |  |
| `url` | `string` | No |  |
| `verification_code` | `string` | No |  |
| `verified` | `bool` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApiEntitiesPagesDomain()->create([
  "project_id" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiEntitiesPagesDomain()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesPagesDomain()->load(["id" => "api_entities_pages_domain_id", "project_id" => "project_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ApiEntitiesPagesDomain()->update([
  "domain_id" => "domain_id",
  "project_id" => "project_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesPagesDomainEntity`

Create a new `ApiEntitiesPagesDomainEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesPagesDomainBasicEntity

```php
$api_entities_pages_domain_basic = $client->ApiEntitiesPagesDomainBasic();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auto_ssl_enabled` | `string` | No |  |
| `certificate_expiration` | `array` | No |  |
| `domain` | `string` | No |  |
| `enabled_until` | `string` | No |  |
| `project_id` | `string` | No |  |
| `url` | `string` | No |  |
| `verification_code` | `string` | No |  |
| `verified` | `bool` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesPagesDomainBasic()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesPagesDomainBasicEntity`

Create a new `ApiEntitiesPagesDomainBasicEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesPersonalAccessTokenEntity

```php
$api_entities_personal_access_token = $client->ApiEntitiesPersonalAccessToken();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | No |  |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `expires_at` | `string` | No |  |
| `id` | `int` | No |  |
| `last_used_at` | `string` | No |  |
| `name` | `string` | No |  |
| `revoked` | `bool` | No |  |
| `scope` | `array` | No |  |
| `user_id` | `int` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiEntitiesPersonalAccessToken()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesPersonalAccessTokenEntity`

Create a new `ApiEntitiesPersonalAccessTokenEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesPersonalAccessTokenWithLastUsedIpEntity

```php
$api_entities_personal_access_token_with_last_used_ip = $client->ApiEntitiesPersonalAccessTokenWithLastUsedIp();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | No |  |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `expires_at` | `string` | No |  |
| `id` | `int` | No |  |
| `last_used_at` | `string` | No |  |
| `last_used_ip` | `array` | No |  |
| `name` | `string` | No |  |
| `revoked` | `bool` | No |  |
| `scope` | `array` | No |  |
| `user_id` | `int` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiEntitiesPersonalAccessTokenWithLastUsedIp()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesPersonalAccessTokenWithLastUsedIp()->load(["id" => "api_entities_personal_access_token_with_last_used_ip_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesPersonalAccessTokenWithLastUsedIpEntity`

Create a new `ApiEntitiesPersonalAccessTokenWithLastUsedIpEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesPersonalAccessTokenWithTokenEntity

```php
$api_entities_personal_access_token_with_token = $client->ApiEntitiesPersonalAccessTokenWithToken();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | No |  |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `expires_at` | `string` | No |  |
| `id` | `int` | No |  |
| `last_used_at` | `string` | No |  |
| `name` | `string` | No |  |
| `revoked` | `bool` | No |  |
| `scope` | `array` | No |  |
| `token` | `string` | No |  |
| `user_id` | `int` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApiEntitiesPersonalAccessTokenWithToken()->create([
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesPersonalAccessTokenWithTokenEntity`

Create a new `ApiEntitiesPersonalAccessTokenWithTokenEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesPersonalSnippetEntity

```php
$api_entities_personal_snippet = $client->ApiEntitiesPersonalSnippet();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `array` | No |  |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `file` | `array` | No |  |
| `file_name` | `string` | No |  |
| `http_url_to_repo` | `string` | No |  |
| `id` | `int` | No |  |
| `imported` | `bool` | No |  |
| `imported_from` | `string` | No |  |
| `project_id` | `int` | No |  |
| `raw_url` | `string` | No |  |
| `repository_storage` | `string` | No |  |
| `ssh_url_to_repo` | `string` | No |  |
| `title` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `visibility` | `string` | No |  |
| `web_url` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApiEntitiesPersonalSnippet()->create([
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiEntitiesPersonalSnippet()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesPersonalSnippet()->load(["id" => "api_entities_personal_snippet_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ApiEntitiesPersonalSnippet()->update([
  "id" => "api_entities_personal_snippet_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesPersonalSnippetEntity`

Create a new `ApiEntitiesPersonalSnippetEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesPlanLimitEntity

```php
$api_entities_plan_limit = $client->ApiEntitiesPlanLimit();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ci_active_job` | `int` | No |  |
| `ci_instance_level_variable` | `int` | No |  |
| `ci_needs_size_limit` | `int` | No |  |
| `ci_pipeline_schedule` | `int` | No |  |
| `ci_pipeline_size` | `int` | No |  |
| `ci_project_subscription` | `int` | No |  |
| `ci_registered_group_runner` | `int` | No |  |
| `ci_registered_project_runner` | `int` | No |  |
| `conan_max_file_size` | `int` | No |  |
| `dotenv_size` | `int` | No |  |
| `dotenv_variable` | `int` | No |  |
| `enforcement_limit` | `int` | No |  |
| `generic_packages_max_file_size` | `int` | No |  |
| `helm_max_file_size` | `int` | No |  |
| `limits_history` | `array` | No |  |
| `maven_max_file_size` | `int` | No |  |
| `notification_limit` | `int` | No |  |
| `npm_max_file_size` | `int` | No |  |
| `nuget_max_file_size` | `int` | No |  |
| `pipeline_hierarchy_size` | `int` | No |  |
| `pypi_max_file_size` | `int` | No |  |
| `storage_size_limit` | `int` | No |  |
| `terraform_module_max_file_size` | `int` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesPlanLimit()->load();
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ApiEntitiesPlanLimit()->update([
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesPlanLimitEntity`

Create a new `ApiEntitiesPlanLimitEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesProjectEntity

```php
$api_entities_project = $client->ApiEntitiesProject();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_merge_on_skipped_pipeline` | `bool` | No |  |
| `allow_pipeline_trigger_approve_deployment` | `bool` | No |  |
| `analytics_access_level` | `string` | No |  |
| `approvals_before_merge` | `string` | No |  |
| `archived` | `bool` | No |  |
| `auto_cancel_pending_pipeline` | `string` | No |  |
| `auto_devops_deploy_strategy` | `string` | No |  |
| `auto_devops_enabled` | `bool` | No |  |
| `auto_duo_code_review_enabled` | `string` | No |  |
| `autoclose_referenced_issue` | `bool` | No |  |
| `avatar_url` | `string` | No |  |
| `build_git_strategy` | `string` | No |  |
| `build_timeout` | `int` | No |  |
| `builds_access_level` | `string` | No |  |
| `can_create_merge_request_in` | `bool` | No |  |
| `ci_allow_fork_pipelines_to_run_in_parent_project` | `bool` | No |  |
| `ci_config_path` | `string` | No |  |
| `ci_default_git_depth` | `int` | No |  |
| `ci_delete_pipelines_in_second` | `int` | No |  |
| `ci_forward_deployment_enabled` | `bool` | No |  |
| `ci_forward_deployment_rollback_allowed` | `bool` | No |  |
| `ci_id_token_sub_claim_component` | `array` | No |  |
| `ci_job_token_scope_enabled` | `bool` | No |  |
| `ci_pipeline_variables_minimum_override_role` | `string` | No |  |
| `ci_push_repository_for_job_token_allowed` | `bool` | No |  |
| `ci_restrict_pipeline_cancellation_role` | `string` | No |  |
| `ci_separated_cache` | `bool` | No |  |
| `compliance_framework` | `string` | No |  |
| `container_expiration_policy` | `array` | No |  |
| `container_registry_access_level` | `string` | No |  |
| `container_registry_enabled` | `bool` | No |  |
| `container_registry_image_prefix` | `string` | No |  |
| `created_at` | `string` | No |  |
| `creator_id` | `int` | No |  |
| `custom_attribute` | `array` | No |  |
| `default_branch` | `string` | No |  |
| `description` | `string` | No |  |
| `description_html` | `string` | No |  |
| `duo_remote_flows_enabled` | `string` | No |  |
| `emails_disabled` | `bool` | No |  |
| `emails_enabled` | `bool` | No |  |
| `empty_repo` | `bool` | No |  |
| `enforce_auth_checks_on_upload` | `bool` | No |  |
| `environments_access_level` | `string` | No |  |
| `external_authorization_classification_label` | `string` | No |  |
| `feature_flags_access_level` | `string` | No |  |
| `forked_from_project` | `array` | No |  |
| `forking_access_level` | `string` | No |  |
| `forks_count` | `int` | No |  |
| `group_runners_enabled` | `bool` | No |  |
| `http_url_to_repo` | `string` | No |  |
| `id` | `int` | No |  |
| `import_error` | `string` | No |  |
| `import_status` | `string` | No |  |
| `import_type` | `string` | No |  |
| `import_url` | `string` | No |  |
| `infrastructure_access_level` | `string` | No |  |
| `issue_branch_template` | `string` | No |  |
| `issues_access_level` | `string` | No |  |
| `issues_enabled` | `bool` | No |  |
| `issues_template` | `string` | No |  |
| `jobs_enabled` | `bool` | No |  |
| `keep_latest_artifact` | `bool` | No |  |
| `last_activity_at` | `string` | No |  |
| `lfs_enabled` | `bool` | No |  |
| `license` | `array` | No |  |
| `license_url` | `string` | No |  |
| `link` | `array` | No |  |
| `marked_for_deletion_at` | `string` | No |  |
| `marked_for_deletion_on` | `string` | No |  |
| `max_artifacts_size` | `int` | No |  |
| `merge_commit_template` | `string` | No |  |
| `merge_method` | `string` | No |  |
| `merge_pipelines_enabled` | `string` | No |  |
| `merge_request_title_regex` | `string` | No |  |
| `merge_request_title_regex_description` | `string` | No |  |
| `merge_requests_access_level` | `string` | No |  |
| `merge_requests_enabled` | `bool` | No |  |
| `merge_requests_template` | `string` | No |  |
| `merge_trains_enabled` | `string` | No |  |
| `merge_trains_skip_train_allowed` | `string` | No |  |
| `mirror` | `string` | No |  |
| `mirror_overwrites_diverged_branch` | `string` | No |  |
| `mirror_trigger_build` | `string` | No |  |
| `mirror_user_id` | `string` | No |  |
| `model_experiments_access_level` | `string` | No |  |
| `model_registry_access_level` | `string` | No |  |
| `monitor_access_level` | `string` | No |  |
| `mr_default_target_self` | `bool` | No |  |
| `name` | `string` | No |  |
| `name_with_namespace` | `string` | No |  |
| `namespace` | `array` | No |  |
| `only_allow_merge_if_all_discussions_are_resolved` | `bool` | No |  |
| `only_allow_merge_if_all_status_checks_passed` | `string` | No |  |
| `only_allow_merge_if_pipeline_succeed` | `bool` | No |  |
| `only_mirror_protected_branch` | `string` | No |  |
| `open_issues_count` | `int` | No |  |
| `owner` | `array` | No |  |
| `package_registry_access_level` | `string` | No |  |
| `packages_enabled` | `bool` | No |  |
| `pages_access_level` | `string` | No |  |
| `path` | `string` | No |  |
| `path_with_namespace` | `string` | No |  |
| `pre_receive_secret_detection_enabled` | `bool` | No |  |
| `prevent_merge_without_jira_issue` | `string` | No |  |
| `printing_merge_request_link_enabled` | `bool` | No |  |
| `public_job` | `bool` | No |  |
| `readme_url` | `string` | No |  |
| `releases_access_level` | `string` | No |  |
| `remove_source_branch_after_merge` | `bool` | No |  |
| `repository_access_level` | `string` | No |  |
| `repository_object_format` | `string` | No |  |
| `repository_storage` | `string` | No |  |
| `request_access_enabled` | `bool` | No |  |
| `requirements_access_level` | `string` | No |  |
| `requirements_enabled` | `string` | No |  |
| `resolve_outdated_diff_discussion` | `bool` | No |  |
| `resource_group_default_process_mode` | `string` | No |  |
| `restrict_user_defined_variable` | `bool` | No |  |
| `runner_token_expiration_interval` | `int` | No |  |
| `runners_token` | `string` | No |  |
| `secret_push_protection_enabled` | `bool` | No |  |
| `security_and_compliance_access_level` | `string` | No |  |
| `security_and_compliance_enabled` | `string` | No |  |
| `service_desk_address` | `string` | No |  |
| `service_desk_enabled` | `bool` | No |  |
| `shared_runners_enabled` | `bool` | No |  |
| `shared_with_group` | `array` | No |  |
| `show_diff_preview_in_email` | `bool` | No |  |
| `snippets_access_level` | `string` | No |  |
| `snippets_enabled` | `bool` | No |  |
| `spp_repository_pipeline_access` | `bool` | No |  |
| `squash_commit_template` | `string` | No |  |
| `squash_option` | `string` | No |  |
| `ssh_url_to_repo` | `string` | No |  |
| `star_count` | `int` | No |  |
| `statistic` | `array` | No |  |
| `suggestion_commit_message` | `string` | No |  |
| `tag_list` | `array` | No |  |
| `topic` | `array` | No |  |
| `updated_at` | `string` | No |  |
| `visibility` | `string` | No |  |
| `warn_about_potentially_unwanted_character` | `bool` | No |  |
| `web_based_commit_signing_enabled` | `string` | No |  |
| `web_url` | `string` | No |  |
| `wiki_access_level` | `string` | No |  |
| `wiki_enabled` | `bool` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApiEntitiesProject()->create([
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiEntitiesProject()->list();
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ApiEntitiesProject()->update([
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesProjectEntity`

Create a new `ApiEntitiesProjectEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesProjectDailyStatisticEntity

```php
$api_entities_project_daily_statistic = $client->ApiEntitiesProjectDailyStatistic();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fetch` | `array` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesProjectDailyStatistic()->load(["project_id" => "project_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesProjectDailyStatisticEntity`

Create a new `ApiEntitiesProjectDailyStatisticEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesProjectExportStatusEntity

```php
$api_entities_project_export_status = $client->ApiEntitiesProjectExportStatus();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `export_status` | `string` | No |  |
| `id` | `int` | No |  |
| `link` | `array` | No |  |
| `name` | `string` | No |  |
| `name_with_namespace` | `string` | No |  |
| `path` | `string` | No |  |
| `path_with_namespace` | `string` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesProjectExportStatus()->load(["project_id" => "project_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesProjectExportStatusEntity`

Create a new `ApiEntitiesProjectExportStatusEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesProjectGroupLinkEntity

```php
$api_entities_project_group_link = $client->ApiEntitiesProjectGroupLink();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApiEntitiesProjectGroupLink()->create([
  "project_id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesProjectGroupLinkEntity`

Create a new `ApiEntitiesProjectGroupLinkEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesProjectHookEntity

```php
$api_entities_project_hook = $client->ApiEntitiesProjectHook();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert_status` | `mixed` | No |  |
| `branch_filter_strategy` | `string` | No |  |
| `confidential_issues_event` | `bool` | No |  |
| `confidential_note_event` | `bool` | No |  |
| `created_at` | `string` | No |  |
| `custom_header` | `array` | No |  |
| `custom_webhook_template` | `string` | No |  |
| `deployment_event` | `bool` | No |  |
| `description` | `string` | No |  |
| `disabled_until` | `string` | No |  |
| `emoji_event` | `bool` | No |  |
| `enable_ssl_verification` | `bool` | No |  |
| `feature_flag_event` | `bool` | No |  |
| `id` | `string` | No |  |
| `issues_event` | `bool` | No |  |
| `job_event` | `bool` | No |  |
| `merge_requests_event` | `bool` | No |  |
| `milestone_event` | `bool` | No |  |
| `name` | `string` | No |  |
| `note_event` | `bool` | No |  |
| `pipeline_event` | `bool` | No |  |
| `project_id` | `string` | No |  |
| `push_event` | `bool` | No |  |
| `push_events_branch_filter` | `string` | No |  |
| `releases_event` | `bool` | No |  |
| `repository_update_event` | `bool` | No |  |
| `resource_access_token_event` | `bool` | No |  |
| `tag_push_event` | `bool` | No |  |
| `url` | `string` | No |  |
| `url_variable` | `array` | No |  |
| `vulnerability_event` | `bool` | No |  |
| `wiki_page_event` | `bool` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApiEntitiesProjectHook()->create([
  "project_id" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiEntitiesProjectHook()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesProjectHook()->load(["id" => "api_entities_project_hook_id", "project_id" => "project_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ApiEntitiesProjectHook()->update([
  "id" => "api_entities_project_hook_id",
  "project_id" => "project_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesProjectHookEntity`

Create a new `ApiEntitiesProjectHookEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesProjectImportStatusEntity

```php
$api_entities_project_import_status = $client->ApiEntitiesProjectImportStatus();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No |  |
| `exception_class` | `string` | No |  |
| `exception_message` | `string` | No |  |
| `id` | `string` | No |  |
| `line_number` | `int` | No |  |
| `relation_name` | `string` | No |  |
| `source` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApiEntitiesProjectImportStatus()->create([
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiEntitiesProjectImportStatus()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesProjectImportStatusEntity`

Create a new `ApiEntitiesProjectImportStatusEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesProjectJobTokenScopeEntity

```php
$api_entities_project_job_token_scope = $client->ApiEntitiesProjectJobTokenScope();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `inbound_enabled` | `bool` | No |  |
| `outbound_enabled` | `bool` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesProjectJobTokenScope()->load(["project_id" => "project_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesProjectJobTokenScopeEntity`

Create a new `ApiEntitiesProjectJobTokenScopeEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesProjectRepositoryStorageEntity

```php
$api_entities_project_repository_storage = $client->ApiEntitiesProjectRepositoryStorage();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No |  |
| `disk_path` | `string` | No |  |
| `project_id` | `int` | No |  |
| `repository_storage` | `string` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesProjectRepositoryStorage()->load(["project_id" => "project_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesProjectRepositoryStorageEntity`

Create a new `ApiEntitiesProjectRepositoryStorageEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesProjectSnippetEntity

```php
$api_entities_project_snippet = $client->ApiEntitiesProjectSnippet();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `array` | No |  |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `file` | `array` | No |  |
| `file_name` | `string` | No |  |
| `http_url_to_repo` | `string` | No |  |
| `id` | `int` | No |  |
| `imported` | `bool` | No |  |
| `imported_from` | `string` | No |  |
| `project_id` | `int` | No |  |
| `raw_url` | `string` | No |  |
| `repository_storage` | `string` | No |  |
| `ssh_url_to_repo` | `string` | No |  |
| `title` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `visibility` | `string` | No |  |
| `web_url` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApiEntitiesProjectSnippet()->create([
  "project_id" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiEntitiesProjectSnippet()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesProjectSnippet()->load(["id" => "api_entities_project_snippet_id", "project_id" => "project_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ApiEntitiesProjectSnippet()->update([
  "id" => "api_entities_project_snippet_id",
  "project_id" => "project_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesProjectSnippetEntity`

Create a new `ApiEntitiesProjectSnippetEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesProjectUploadEntity

```php
$api_entities_project_upload = $client->ApiEntitiesProjectUpload();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApiEntitiesProjectUpload()->create([
  "project_id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesProjectUploadEntity`

Create a new `ApiEntitiesProjectUploadEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesProjectWithAccessEntity

```php
$api_entities_project_with_access = $client->ApiEntitiesProjectWithAccess();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_merge_on_skipped_pipeline` | `bool` | No |  |
| `allow_pipeline_trigger_approve_deployment` | `bool` | No |  |
| `analytics_access_level` | `string` | No |  |
| `approvals_before_merge` | `string` | No |  |
| `archived` | `bool` | No |  |
| `auto_cancel_pending_pipeline` | `string` | No |  |
| `auto_devops_deploy_strategy` | `string` | No |  |
| `auto_devops_enabled` | `bool` | No |  |
| `auto_duo_code_review_enabled` | `string` | No |  |
| `autoclose_referenced_issue` | `bool` | No |  |
| `avatar_url` | `string` | No |  |
| `build_git_strategy` | `string` | No |  |
| `build_timeout` | `int` | No |  |
| `builds_access_level` | `string` | No |  |
| `can_create_merge_request_in` | `bool` | No |  |
| `ci_allow_fork_pipelines_to_run_in_parent_project` | `bool` | No |  |
| `ci_config_path` | `string` | No |  |
| `ci_default_git_depth` | `int` | No |  |
| `ci_delete_pipelines_in_second` | `int` | No |  |
| `ci_forward_deployment_enabled` | `bool` | No |  |
| `ci_forward_deployment_rollback_allowed` | `bool` | No |  |
| `ci_id_token_sub_claim_component` | `array` | No |  |
| `ci_job_token_scope_enabled` | `bool` | No |  |
| `ci_pipeline_variables_minimum_override_role` | `string` | No |  |
| `ci_push_repository_for_job_token_allowed` | `bool` | No |  |
| `ci_restrict_pipeline_cancellation_role` | `string` | No |  |
| `ci_separated_cache` | `bool` | No |  |
| `compliance_framework` | `string` | No |  |
| `container_expiration_policy` | `array` | No |  |
| `container_registry_access_level` | `string` | No |  |
| `container_registry_enabled` | `bool` | No |  |
| `container_registry_image_prefix` | `string` | No |  |
| `created_at` | `string` | No |  |
| `creator_id` | `int` | No |  |
| `custom_attribute` | `array` | No |  |
| `default_branch` | `string` | No |  |
| `description` | `string` | No |  |
| `description_html` | `string` | No |  |
| `duo_remote_flows_enabled` | `string` | No |  |
| `emails_disabled` | `bool` | No |  |
| `emails_enabled` | `bool` | No |  |
| `empty_repo` | `bool` | No |  |
| `enforce_auth_checks_on_upload` | `bool` | No |  |
| `environments_access_level` | `string` | No |  |
| `external_authorization_classification_label` | `string` | No |  |
| `feature_flags_access_level` | `string` | No |  |
| `forked_from_project` | `array` | No |  |
| `forking_access_level` | `string` | No |  |
| `forks_count` | `int` | No |  |
| `group_runners_enabled` | `bool` | No |  |
| `http_url_to_repo` | `string` | No |  |
| `id` | `int` | No |  |
| `import_error` | `string` | No |  |
| `import_status` | `string` | No |  |
| `import_type` | `string` | No |  |
| `import_url` | `string` | No |  |
| `infrastructure_access_level` | `string` | No |  |
| `issue_branch_template` | `string` | No |  |
| `issues_access_level` | `string` | No |  |
| `issues_enabled` | `bool` | No |  |
| `issues_template` | `string` | No |  |
| `jobs_enabled` | `bool` | No |  |
| `keep_latest_artifact` | `bool` | No |  |
| `last_activity_at` | `string` | No |  |
| `lfs_enabled` | `bool` | No |  |
| `license` | `array` | No |  |
| `license_url` | `string` | No |  |
| `link` | `array` | No |  |
| `marked_for_deletion_at` | `string` | No |  |
| `marked_for_deletion_on` | `string` | No |  |
| `max_artifacts_size` | `int` | No |  |
| `merge_commit_template` | `string` | No |  |
| `merge_method` | `string` | No |  |
| `merge_pipelines_enabled` | `string` | No |  |
| `merge_request_title_regex` | `string` | No |  |
| `merge_request_title_regex_description` | `string` | No |  |
| `merge_requests_access_level` | `string` | No |  |
| `merge_requests_enabled` | `bool` | No |  |
| `merge_requests_template` | `string` | No |  |
| `merge_trains_enabled` | `string` | No |  |
| `merge_trains_skip_train_allowed` | `string` | No |  |
| `mirror` | `string` | No |  |
| `mirror_overwrites_diverged_branch` | `string` | No |  |
| `mirror_trigger_build` | `string` | No |  |
| `mirror_user_id` | `string` | No |  |
| `model_experiments_access_level` | `string` | No |  |
| `model_registry_access_level` | `string` | No |  |
| `monitor_access_level` | `string` | No |  |
| `mr_default_target_self` | `bool` | No |  |
| `name` | `string` | No |  |
| `name_with_namespace` | `string` | No |  |
| `namespace` | `array` | No |  |
| `only_allow_merge_if_all_discussions_are_resolved` | `bool` | No |  |
| `only_allow_merge_if_all_status_checks_passed` | `string` | No |  |
| `only_allow_merge_if_pipeline_succeed` | `bool` | No |  |
| `only_mirror_protected_branch` | `string` | No |  |
| `open_issues_count` | `int` | No |  |
| `owner` | `array` | No |  |
| `package_registry_access_level` | `string` | No |  |
| `packages_enabled` | `bool` | No |  |
| `pages_access_level` | `string` | No |  |
| `path` | `string` | No |  |
| `path_with_namespace` | `string` | No |  |
| `permission` | `array` | No |  |
| `pre_receive_secret_detection_enabled` | `bool` | No |  |
| `prevent_merge_without_jira_issue` | `string` | No |  |
| `printing_merge_request_link_enabled` | `bool` | No |  |
| `public_job` | `bool` | No |  |
| `readme_url` | `string` | No |  |
| `releases_access_level` | `string` | No |  |
| `remove_source_branch_after_merge` | `bool` | No |  |
| `repository_access_level` | `string` | No |  |
| `repository_object_format` | `string` | No |  |
| `repository_storage` | `string` | No |  |
| `request_access_enabled` | `bool` | No |  |
| `requirements_access_level` | `string` | No |  |
| `requirements_enabled` | `string` | No |  |
| `resolve_outdated_diff_discussion` | `bool` | No |  |
| `resource_group_default_process_mode` | `string` | No |  |
| `restrict_user_defined_variable` | `bool` | No |  |
| `runner_token_expiration_interval` | `int` | No |  |
| `runners_token` | `string` | No |  |
| `secret_push_protection_enabled` | `bool` | No |  |
| `security_and_compliance_access_level` | `string` | No |  |
| `security_and_compliance_enabled` | `string` | No |  |
| `service_desk_address` | `string` | No |  |
| `service_desk_enabled` | `bool` | No |  |
| `shared_runners_enabled` | `bool` | No |  |
| `shared_with_group` | `array` | No |  |
| `show_diff_preview_in_email` | `bool` | No |  |
| `snippets_access_level` | `string` | No |  |
| `snippets_enabled` | `bool` | No |  |
| `spp_repository_pipeline_access` | `bool` | No |  |
| `squash_commit_template` | `string` | No |  |
| `squash_option` | `string` | No |  |
| `ssh_url_to_repo` | `string` | No |  |
| `star_count` | `int` | No |  |
| `statistic` | `array` | No |  |
| `suggestion_commit_message` | `string` | No |  |
| `tag_list` | `array` | No |  |
| `topic` | `array` | No |  |
| `updated_at` | `string` | No |  |
| `visibility` | `string` | No |  |
| `warn_about_potentially_unwanted_character` | `bool` | No |  |
| `web_based_commit_signing_enabled` | `string` | No |  |
| `web_url` | `string` | No |  |
| `wiki_access_level` | `string` | No |  |
| `wiki_enabled` | `bool` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesProjectWithAccess()->load(["id" => "api_entities_project_with_access_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesProjectWithAccessEntity`

Create a new `ApiEntitiesProjectWithAccessEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesProjectsContainerRegistryProtectionRuleEntity

```php
$api_entities_projects_container_registry_protection_rule = $client->ApiEntitiesProjectsContainerRegistryProtectionRule();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `int` | No |  |
| `minimum_access_level_for_delete` | `string` | No |  |
| `minimum_access_level_for_push` | `string` | No |  |
| `project_id` | `int` | No |  |
| `repository_path_pattern` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApiEntitiesProjectsContainerRegistryProtectionRule()->create([
  "project_id" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiEntitiesProjectsContainerRegistryProtectionRule()->list();
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ApiEntitiesProjectsContainerRegistryProtectionRule()->update([
  "id" => "id",
  "project_id" => "project_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesProjectsContainerRegistryProtectionRuleEntity`

Create a new `ApiEntitiesProjectsContainerRegistryProtectionRuleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesProjectsPackagesProtectionRuleEntity

```php
$api_entities_projects_packages_protection_rule = $client->ApiEntitiesProjectsPackagesProtectionRule();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `int` | No |  |
| `minimum_access_level_for_delete` | `string` | No |  |
| `minimum_access_level_for_push` | `string` | No |  |
| `package_name_pattern` | `string` | No |  |
| `package_type` | `string` | No |  |
| `project_id` | `int` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApiEntitiesProjectsPackagesProtectionRule()->create([
  "project_id" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiEntitiesProjectsPackagesProtectionRule()->list();
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ApiEntitiesProjectsPackagesProtectionRule()->update([
  "id" => "id",
  "project_id" => "project_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesProjectsPackagesProtectionRuleEntity`

Create a new `ApiEntitiesProjectsPackagesProtectionRuleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesProjectsTopicEntity

```php
$api_entities_projects_topic = $client->ApiEntitiesProjectsTopic();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_url` | `string` | No |  |
| `description` | `string` | No |  |
| `id` | `string` | No |  |
| `name` | `string` | No |  |
| `organization_id` | `string` | No |  |
| `title` | `string` | No |  |
| `total_projects_count` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApiEntitiesProjectsTopic()->create([
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesProjectsTopic()->load(["id" => "api_entities_projects_topic_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ApiEntitiesProjectsTopic()->update([
  "id" => "api_entities_projects_topic_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesProjectsTopicEntity`

Create a new `ApiEntitiesProjectsTopicEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesProtectedBranchEntity

```php
$api_entities_protected_branch = $client->ApiEntitiesProtectedBranch();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_force_push` | `bool` | No |  |
| `code_owner_approval_required` | `bool` | No |  |
| `id` | `int` | No |  |
| `inherited` | `bool` | No |  |
| `merge_access_level` | `array` | No |  |
| `name` | `string` | No |  |
| `push_access_level` | `array` | No |  |
| `unprotect_access_level` | `array` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApiEntitiesProtectedBranch()->create([
  "project_id" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiEntitiesProtectedBranch()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesProtectedBranch()->load(["id" => "api_entities_protected_branch_id", "project_id" => "project_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ApiEntitiesProtectedBranch()->update([
  "id" => "api_entities_protected_branch_id",
  "project_id" => "project_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesProtectedBranchEntity`

Create a new `ApiEntitiesProtectedBranchEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesProtectedTagEntity

```php
$api_entities_protected_tag = $client->ApiEntitiesProtectedTag();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `create_access_level` | `array` | No |  |
| `name` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApiEntitiesProtectedTag()->create([
  "project_id" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiEntitiesProtectedTag()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesProtectedTag()->load(["id" => "api_entities_protected_tag_id", "project_id" => "project_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesProtectedTagEntity`

Create a new `ApiEntitiesProtectedTagEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesPublicGroupDetailEntity

```php
$api_entities_public_group_detail = $client->ApiEntitiesPublicGroupDetail();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_url` | `string` | No |  |
| `full_name` | `string` | No |  |
| `full_path` | `string` | No |  |
| `id` | `string` | No |  |
| `name` | `string` | No |  |
| `web_url` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiEntitiesPublicGroupDetail()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesPublicGroupDetailEntity`

Create a new `ApiEntitiesPublicGroupDetailEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesRelatedIssueEntity

```php
$api_entities_related_issue = $client->ApiEntitiesRelatedIssue();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assignee` | `array` | No |  |
| `author` | `array` | No |  |
| `blocking_issues_count` | `string` | No |  |
| `closed_at` | `string` | No |  |
| `closed_by` | `array` | No |  |
| `confidential` | `bool` | No |  |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `discussion_locked` | `bool` | No |  |
| `downvote` | `string` | No |  |
| `due_date` | `string` | No |  |
| `epic` | `array` | No |  |
| `epic_iid` | `string` | No |  |
| `has_task` | `bool` | No |  |
| `health_status` | `string` | No |  |
| `id` | `int` | No |  |
| `iid` | `int` | No |  |
| `imported` | `string` | No |  |
| `imported_from` | `string` | No |  |
| `issue_link_id` | `string` | No |  |
| `issue_type` | `string` | No |  |
| `iteration` | `array` | No |  |
| `label` | `array` | No |  |
| `link` | `array` | No |  |
| `link_created_at` | `string` | No |  |
| `link_type` | `string` | No |  |
| `link_updated_at` | `string` | No |  |
| `merge_requests_count` | `string` | No |  |
| `milestone` | `array` | No |  |
| `moved_to_id` | `string` | No |  |
| `project_id` | `int` | No |  |
| `reference` | `array` | No |  |
| `service_desk_reply_to` | `string` | No |  |
| `severity` | `string` | No |  |
| `state` | `string` | No |  |
| `subscribed` | `string` | No |  |
| `task_completion_status` | `string` | No |  |
| `task_status` | `string` | No |  |
| `time_stat` | `array` | No |  |
| `title` | `string` | No |  |
| `type` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upvote` | `string` | No |  |
| `user_notes_count` | `string` | No |  |
| `web_url` | `string` | No |  |
| `weight` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiEntitiesRelatedIssue()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesRelatedIssueEntity`

Create a new `ApiEntitiesRelatedIssueEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesRelationImportTrackerEntity

```php
$api_entities_relation_import_tracker = $client->ApiEntitiesRelationImportTracker();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApiEntitiesRelationImportTracker()->create([
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesRelationImportTrackerEntity`

Create a new `ApiEntitiesRelationImportTrackerEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesReleaseEntity

```php
$api_entities_release = $client->ApiEntitiesRelease();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `asset` | `array` | No |  |
| `author` | `array` | No |  |
| `commit` | `array` | No |  |
| `commit_path` | `string` | No |  |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `description_html` | `string` | No |  |
| `evidence` | `array` | No |  |
| `link` | `array` | No |  |
| `milestone` | `array` | No |  |
| `name` | `string` | No |  |
| `released_at` | `string` | No |  |
| `tag_name` | `string` | No |  |
| `tag_path` | `string` | No |  |
| `upcoming_release` | `bool` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApiEntitiesRelease()->create([
  "project_id" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiEntitiesRelease()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesRelease()->load(["id" => "api_entities_release_id", "project_id" => "project_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ApiEntitiesRelease()->update([
  "id" => "api_entities_release_id",
  "project_id" => "project_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesReleaseEntity`

Create a new `ApiEntitiesReleaseEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesReleasesLinkEntity

```php
$api_entities_releases_link = $client->ApiEntitiesReleasesLink();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `direct_asset_url` | `string` | No |  |
| `id` | `int` | No |  |
| `link_type` | `string` | No |  |
| `name` | `string` | No |  |
| `url` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApiEntitiesReleasesLink()->create([
  "project_id" => null, // string
  "release_id" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiEntitiesReleasesLink()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesReleasesLink()->load(["id" => "api_entities_releases_link_id", "project_id" => "project_id", "release_id" => "release_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ApiEntitiesReleasesLink()->update([
  "id" => "api_entities_releases_link_id",
  "project_id" => "project_id",
  "release_id" => "release_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesReleasesLinkEntity`

Create a new `ApiEntitiesReleasesLinkEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesRemoteMirrorEntity

```php
$api_entities_remote_mirror = $client->ApiEntitiesRemoteMirror();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_method` | `string` | No |  |
| `enabled` | `bool` | No |  |
| `host_key` | `array` | No |  |
| `id` | `int` | No |  |
| `keep_divergent_ref` | `bool` | No |  |
| `last_error` | `int` | No |  |
| `last_successful_update_at` | `string` | No |  |
| `last_update_at` | `string` | No |  |
| `last_update_started_at` | `string` | No |  |
| `mirror_branch_regex` | `string` | No |  |
| `only_protected_branch` | `bool` | No |  |
| `update_status` | `string` | No |  |
| `url` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApiEntitiesRemoteMirror()->create([
  "project_id" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiEntitiesRemoteMirror()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesRemoteMirror()->load(["id" => "api_entities_remote_mirror_id", "project_id" => "project_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ApiEntitiesRemoteMirror()->update([
  "id" => "api_entities_remote_mirror_id",
  "project_id" => "project_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesRemoteMirrorEntity`

Create a new `ApiEntitiesRemoteMirrorEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesRepositoryHealthEntity

```php
$api_entities_repository_health = $client->ApiEntitiesRepositoryHealth();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alternate` | `array` | No |  |
| `bitmap` | `array` | No |  |
| `commit_graph` | `array` | No |  |
| `is_object_pool` | `bool` | No |  |
| `last_full_repack` | `array` | No |  |
| `multi_pack_index` | `array` | No |  |
| `multi_pack_index_bitmap` | `array` | No |  |
| `object` | `array` | No |  |
| `reference` | `array` | No |  |
| `size` | `int` | No |  |
| `updated_at` | `string` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesRepositoryHealth()->load(["project_id" => "project_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesRepositoryHealthEntity`

Create a new `ApiEntitiesRepositoryHealthEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesResourceAccessTokenWithTokenEntity

```php
$api_entities_resource_access_token_with_token = $client->ApiEntitiesResourceAccessTokenWithToken();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access_level` | `int` | No |  |
| `active` | `bool` | No |  |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `expires_at` | `string` | No |  |
| `id` | `int` | No |  |
| `last_used_at` | `string` | No |  |
| `name` | `string` | No |  |
| `resource_id` | `int` | No |  |
| `resource_type` | `string` | No |  |
| `revoked` | `bool` | No |  |
| `scope` | `array` | No |  |
| `token` | `string` | No |  |
| `user_id` | `int` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApiEntitiesResourceAccessTokenWithToken()->create([
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesResourceAccessTokenWithTokenEntity`

Create a new `ApiEntitiesResourceAccessTokenWithTokenEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesResourceMilestoneEventEntity

```php
$api_entities_resource_milestone_event = $client->ApiEntitiesResourceMilestoneEvent();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `string` | No |  |
| `created_at` | `string` | No |  |
| `id` | `int` | No |  |
| `milestone` | `array` | No |  |
| `resource_id` | `int` | No |  |
| `resource_type` | `string` | No |  |
| `state` | `string` | No |  |
| `user` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiEntitiesResourceMilestoneEvent()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesResourceMilestoneEvent()->load(["id" => "api_entities_resource_milestone_event_id", "project_id" => "project_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesResourceMilestoneEventEntity`

Create a new `ApiEntitiesResourceMilestoneEventEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesSnippetEntity

```php
$api_entities_snippet = $client->ApiEntitiesSnippet();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `array` | No |  |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `file` | `array` | No |  |
| `file_name` | `string` | No |  |
| `http_url_to_repo` | `string` | No |  |
| `id` | `int` | No |  |
| `imported` | `bool` | No |  |
| `imported_from` | `string` | No |  |
| `project_id` | `int` | No |  |
| `raw_url` | `string` | No |  |
| `repository_storage` | `string` | No |  |
| `ssh_url_to_repo` | `string` | No |  |
| `title` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `visibility` | `string` | No |  |
| `web_url` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiEntitiesSnippet()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesSnippetEntity`

Create a new `ApiEntitiesSnippetEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesSshKeyWithUserEntity

```php
$api_entities_ssh_key_with_user = $client->ApiEntitiesSshKeyWithUser();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No |  |
| `expires_at` | `string` | No |  |
| `id` | `int` | No |  |
| `key` | `string` | No |  |
| `last_used_at` | `string` | No |  |
| `title` | `string` | No |  |
| `usage_type` | `string` | No |  |
| `user` | `array` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesSshKeyWithUser()->load(["id" => "api_entities_ssh_key_with_user_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesSshKeyWithUserEntity`

Create a new `ApiEntitiesSshKeyWithUserEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesSuggestionEntity

```php
$api_entities_suggestion = $client->ApiEntitiesSuggestion();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `appliable` | `string` | No |  |
| `applied` | `string` | No |  |
| `from_content` | `string` | No |  |
| `from_line` | `string` | No |  |
| `id` | `string` | No |  |
| `to_content` | `string` | No |  |
| `to_line` | `string` | No |  |

### Operations

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ApiEntitiesSuggestion()->update([
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesSuggestionEntity`

Create a new `ApiEntitiesSuggestionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesSystemBroadcastMessageEntity

```php
$api_entities_system_broadcast_message = $client->ApiEntitiesSystemBroadcastMessage();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | No |  |
| `broadcast_type` | `string` | No |  |
| `color` | `string` | No |  |
| `dismissable` | `string` | No |  |
| `ends_at` | `string` | No |  |
| `font` | `string` | No |  |
| `id` | `string` | No |  |
| `message` | `string` | No |  |
| `starts_at` | `string` | No |  |
| `target_access_level` | `string` | No |  |
| `target_path` | `string` | No |  |
| `theme` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApiEntitiesSystemBroadcastMessage()->create([
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesSystemBroadcastMessage()->load(["id" => "api_entities_system_broadcast_message_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesSystemBroadcastMessage()->remove(["id" => "api_entities_system_broadcast_message_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ApiEntitiesSystemBroadcastMessage()->update([
  "id" => "api_entities_system_broadcast_message_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesSystemBroadcastMessageEntity`

Create a new `ApiEntitiesSystemBroadcastMessageEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesTagEntity

```php
$api_entities_tag = $client->ApiEntitiesTag();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `commit` | `array` | No |  |
| `created_at` | `string` | No |  |
| `message` | `string` | No |  |
| `name` | `string` | No |  |
| `protected` | `bool` | No |  |
| `release` | `array` | No |  |
| `target` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApiEntitiesTag()->create([
  "project_id" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiEntitiesTag()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesTag()->load(["id" => "api_entities_tag_id", "project_id" => "project_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesTagEntity`

Create a new `ApiEntitiesTagEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesTagSignatureEntity

```php
$api_entities_tag_signature = $client->ApiEntitiesTagSignature();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `signature` | `string` | No |  |
| `signature_type` | `string` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesTagSignature()->load(["project_id" => "project_id", "tag_name" => "tag_name"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesTagSignatureEntity`

Create a new `ApiEntitiesTagSignatureEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesTemplatesListEntity

```php
$api_entities_templates_list = $client->ApiEntitiesTemplatesList();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `key` | `string` | No |  |
| `name` | `string` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesTemplatesList()->load(["project_id" => "project_id", "type" => "type"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesTemplatesListEntity`

Create a new `ApiEntitiesTemplatesListEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesTerraformModuleVersionEntity

```php
$api_entities_terraform_module_version = $client->ApiEntitiesTerraformModuleVersion();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `module` | `string` | No |  |
| `name` | `string` | No |  |
| `provider` | `string` | No |  |
| `root` | `string` | No |  |
| `source` | `string` | No |  |
| `submodule` | `string` | No |  |
| `version` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiEntitiesTerraformModuleVersion()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesTerraformModuleVersion()->load(["module_name" => "module_name", "module_system" => "module_system"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesTerraformModuleVersionEntity`

Create a new `ApiEntitiesTerraformModuleVersionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesTreeObjectEntity

```php
$api_entities_tree_object = $client->ApiEntitiesTreeObject();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `mode` | `string` | No |  |
| `name` | `string` | No |  |
| `path` | `string` | No |  |
| `type` | `string` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesTreeObject()->load(["project_id" => "project_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesTreeObjectEntity`

Create a new `ApiEntitiesTreeObjectEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesTriggerEntity

```php
$api_entities_trigger = $client->ApiEntitiesTrigger();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `expires_at` | `string` | No |  |
| `id` | `int` | No |  |
| `last_used` | `string` | No |  |
| `owner` | `array` | No |  |
| `token` | `string` | No |  |
| `updated_at` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApiEntitiesTrigger()->create([
  "project_id" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiEntitiesTrigger()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesTrigger()->load(["id" => "api_entities_trigger_id", "project_id" => "project_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ApiEntitiesTrigger()->update([
  "id" => "api_entities_trigger_id",
  "project_id" => "project_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesTriggerEntity`

Create a new `ApiEntitiesTriggerEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesUserAgentDetailEntity

```php
$api_entities_user_agent_detail = $client->ApiEntitiesUserAgentDetail();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `akismet_submitted` | `bool` | No |  |
| `ip_address` | `string` | No |  |
| `user_agent` | `string` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesUserAgentDetail()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesUserAgentDetailEntity`

Create a new `ApiEntitiesUserAgentDetailEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesUserCountEntity

```php
$api_entities_user_count = $client->ApiEntitiesUserCount();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assigned_issue` | `int` | No |  |
| `assigned_merge_request` | `int` | No |  |
| `merge_request` | `int` | No |  |
| `review_requested_merge_request` | `int` | No |  |
| `todo` | `int` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesUserCount()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesUserCountEntity`

Create a new `ApiEntitiesUserCountEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesUserPublicEntity

```php
$api_entities_user_public = $client->ApiEntitiesUserPublic();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_path` | `string` | No |  |
| `avatar_url` | `string` | No |  |
| `bio` | `string` | No |  |
| `bot` | `string` | No |  |
| `can_create_group` | `bool` | No |  |
| `can_create_project` | `bool` | No |  |
| `color_scheme_id` | `int` | No |  |
| `commit_email` | `string` | No |  |
| `confirmed_at` | `string` | No |  |
| `created_at` | `string` | No |  |
| `current_sign_in_at` | `string` | No |  |
| `custom_attribute` | `array` | No |  |
| `discord` | `string` | No |  |
| `email` | `string` | No |  |
| `external` | `string` | No |  |
| `extra_shared_runners_minutes_limit` | `string` | No |  |
| `follower` | `string` | No |  |
| `following` | `string` | No |  |
| `github` | `string` | No |  |
| `id` | `int` | No |  |
| `identity` | `array` | No |  |
| `is_followed` | `bool` | No |  |
| `job_title` | `string` | No |  |
| `key` | `string` | No |  |
| `last_activity_on` | `string` | No |  |
| `last_sign_in_at` | `string` | No |  |
| `linkedin` | `string` | No |  |
| `local_time` | `string` | No |  |
| `location` | `string` | No |  |
| `locked` | `bool` | No |  |
| `name` | `string` | No |  |
| `organization` | `string` | No |  |
| `preferred_language` | `string` | No |  |
| `private_profile` | `bool` | No |  |
| `projects_limit` | `int` | No |  |
| `pronoun` | `string` | No |  |
| `public_email` | `string` | No |  |
| `scim_identity` | `array` | No |  |
| `shared_runners_minutes_limit` | `string` | No |  |
| `state` | `string` | No |  |
| `theme_id` | `int` | No |  |
| `twitter` | `string` | No |  |
| `two_factor_enabled` | `bool` | No |  |
| `username` | `string` | No |  |
| `value` | `string` | No |  |
| `web_url` | `string` | No |  |
| `website_url` | `string` | No |  |
| `work_information` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiEntitiesUserPublic()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesUserPublicEntity`

Create a new `ApiEntitiesUserPublicEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesUserWithAdminEntity

```php
$api_entities_user_with_admin = $client->ApiEntitiesUserWithAdmin();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `key` | `string` | No |  |
| `value` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiEntitiesUserWithAdmin()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesUserWithAdminEntity`

Create a new `ApiEntitiesUserWithAdminEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesWikiAttachmentEntity

```php
$api_entities_wiki_attachment = $client->ApiEntitiesWikiAttachment();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApiEntitiesWikiAttachment()->create([
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesWikiAttachmentEntity`

Create a new `ApiEntitiesWikiAttachmentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesWikiPageEntity

```php
$api_entities_wiki_page = $client->ApiEntitiesWikiPage();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content` | `string` | No |  |
| `encoding` | `string` | No |  |
| `format` | `string` | No |  |
| `front_matter` | `array` | No |  |
| `slug` | `string` | No |  |
| `title` | `string` | No |  |
| `wiki_page_meta_id` | `int` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApiEntitiesWikiPage()->create([
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiEntitiesWikiPage()->load(["slug" => "slug"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ApiEntitiesWikiPage()->update([
  "slug" => "slug",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesWikiPageEntity`

Create a new `ApiEntitiesWikiPageEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntitiesWikiPageBasicEntity

```php
$api_entities_wiki_page_basic = $client->ApiEntitiesWikiPageBasic();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `format` | `string` | No |  |
| `slug` | `string` | No |  |
| `title` | `string` | No |  |
| `wiki_page_meta_id` | `int` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiEntitiesWikiPageBasic()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntitiesWikiPageBasicEntity`

Create a new `ApiEntitiesWikiPageBasicEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApplicationEntity

```php
$application = $client->Application();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Application()->remove(["id" => "id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApplicationEntity`

Create a new `ApplicationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AwardEmojiEntity

```php
$award_emoji = $client->AwardEmoji();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->AwardEmoji()->remove(["id" => "id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AwardEmojiEntity`

Create a new `AwardEmojiEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BadgeEntity

```php
$badge = $client->Badge();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Badge()->remove(["id" => "id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BadgeEntity`

Create a new `BadgeEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BranchEntity

```php
$branch = $client->Branch();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Branch()->remove(["project_id" => "project_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BranchEntity`

Create a new `BranchEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CargoPackageEntity

```php
$cargo_package = $client->CargoPackage();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->CargoPackage()->load(["project_id" => "project_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CargoPackageEntity`

Create a new `CargoPackageEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CiVariableEntity

```php
$ci_variable = $client->CiVariable();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->CiVariable()->remove(["id" => "id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CiVariableEntity`

Create a new `CiVariableEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ClusterEntity

```php
$cluster = $client->Cluster();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Cluster()->remove(["id" => "id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ClusterEntity`

Create a new `ClusterEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ClusterAgentEntity

```php
$cluster_agent = $client->ClusterAgent();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->ClusterAgent()->remove(["id" => "id", "project_id" => "project_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ClusterAgentEntity`

Create a new `ClusterAgentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ComposerEntity

```php
$composer = $client->Composer();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Composer()->create([
  "project_id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ComposerEntity`

Create a new `ComposerEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ComposerPackageEntity

```php
$composer_package = $client->ComposerPackage();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ComposerPackage()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ComposerPackageEntity`

Create a new `ComposerPackageEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ConanEntity

```php
$conan = $client->Conan();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Conan()->remove(["package_channel" => "package_channel", "package_name" => "package_name", "package_username" => "package_username", "package_version" => "package_version"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ConanEntity`

Create a new `ConanEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ConanPackageEntity

```php
$conan_package = $client->ConanPackage();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ConanPackage()->load(["id" => "conan_package_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->ConanPackage()->remove(["conan_id" => "conan_id", "package_channel" => "package_channel", "package_username" => "package_username", "package_version" => "package_version", "project_id" => "project_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ConanPackage()->update([
  "id" => "conan_package_id",
  "file_name" => "file_name",
  "package_channel" => "package_channel",
  "package_username" => "package_username",
  "package_version" => "package_version",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ConanPackageEntity`

Create a new `ConanPackageEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ContainerRegistryEntity

```php
$container_registry = $client->ContainerRegistry();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->ContainerRegistry()->remove(["project_id" => "project_id", "repository_id" => "repository_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ContainerRegistryEntity`

Create a new `ContainerRegistryEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ContainerRegistryEventEntity

```php
$container_registry_event = $client->ContainerRegistryEvent();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ContainerRegistryEvent()->create([
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ContainerRegistryEventEntity`

Create a new `ContainerRegistryEventEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CustomAttributeEntity

```php
$custom_attribute = $client->CustomAttribute();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `key` | `string` | No |  |
| `value` | `string` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->CustomAttribute()->load(["id" => "custom_attribute_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CustomAttributeEntity`

Create a new `CustomAttributeEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DebianEntity

```php
$debian = $client->Debian();
```

### Operations

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Debian()->update([
  "id" => "id",
  "project_id" => "project_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DebianEntity`

Create a new `DebianEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DebianDistributionEntity

```php
$debian_distribution = $client->DebianDistribution();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->DebianDistribution()->remove(["id" => "id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DebianDistributionEntity`

Create a new `DebianDistributionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DebianPackageEntity

```php
$debian_package = $client->DebianPackage();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->DebianPackage()->load(["id" => "debian_package_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->DebianPackage()->update([
  "file_name" => "file_name",
  "project_id" => "project_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DebianPackageEntity`

Create a new `DebianPackageEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DependencyProxyEntity

```php
$dependency_proxy = $client->DependencyProxy();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->DependencyProxy()->remove(["group_id" => "group_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DependencyProxyEntity`

Create a new `DependencyProxyEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DeployKeyEntity

```php
$deploy_key = $client->DeployKey();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->DeployKey()->remove(["id" => "id", "project_id" => "project_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DeployKeyEntity`

Create a new `DeployKeyEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DeployTokenEntity

```php
$deploy_token = $client->DeployToken();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->DeployToken()->remove(["id" => "id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DeployTokenEntity`

Create a new `DeployTokenEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DeploymentEntity

```php
$deployment = $client->Deployment();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Deployment()->remove(["id" => "id", "project_id" => "project_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DeploymentEntity`

Create a new `DeploymentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EeApiEntitiesApprovalStateEntity

```php
$ee_api_entities_approval_state = $client->EeApiEntitiesApprovalState();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->EeApiEntitiesApprovalState()->create([
  "merge_request_id" => null, // string
  "project_id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EeApiEntitiesApprovalStateEntity`

Create a new `EeApiEntitiesApprovalStateEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EeApiEntitiesAuditEventEntity

```php
$ee_api_entities_audit_event = $client->EeApiEntitiesAuditEvent();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author_id` | `string` | No |  |
| `created_at` | `string` | No |  |
| `detail` | `string` | No |  |
| `entity_id` | `string` | No |  |
| `entity_type` | `string` | No |  |
| `event_name` | `string` | No |  |
| `id` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->EeApiEntitiesAuditEvent()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->EeApiEntitiesAuditEvent()->load(["id" => "ee_api_entities_audit_event_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EeApiEntitiesAuditEventEntity`

Create a new `EeApiEntitiesAuditEventEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EeApiEntitiesBillableMembershipEntity

```php
$ee_api_entities_billable_membership = $client->EeApiEntitiesBillableMembership();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access_level` | `array` | No |  |
| `created_at` | `string` | No |  |
| `expires_at` | `string` | No |  |
| `id` | `string` | No |  |
| `source_full_name` | `string` | No |  |
| `source_id` | `string` | No |  |
| `source_members_url` | `string` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->EeApiEntitiesBillableMembership()->load(["billable_member_id" => "billable_member_id", "group_id" => "group_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EeApiEntitiesBillableMembershipEntity`

Create a new `EeApiEntitiesBillableMembershipEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EeApiEntitiesGeoNodeStatusEntity

```php
$ee_api_entities_geo_node_status = $client->EeApiEntitiesGeoNodeStatus();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ci_secure_files_checksum_failed_count` | `string` | No |  |
| `ci_secure_files_checksum_total_count` | `string` | No |  |
| `ci_secure_files_checksummed_count` | `string` | No |  |
| `ci_secure_files_count` | `string` | No |  |
| `ci_secure_files_failed_count` | `string` | No |  |
| `ci_secure_files_registry_count` | `string` | No |  |
| `ci_secure_files_synced_count` | `string` | No |  |
| `ci_secure_files_synced_in_percentage` | `string` | No |  |
| `ci_secure_files_verification_failed_count` | `string` | No |  |
| `ci_secure_files_verification_total_count` | `string` | No |  |
| `ci_secure_files_verified_count` | `string` | No |  |
| `ci_secure_files_verified_in_percentage` | `string` | No |  |
| `container_repositories_checksum_failed_count` | `string` | No |  |
| `container_repositories_checksum_total_count` | `string` | No |  |
| `container_repositories_checksummed_count` | `string` | No |  |
| `container_repositories_count` | `string` | No |  |
| `container_repositories_failed_count` | `string` | No |  |
| `container_repositories_registry_count` | `string` | No |  |
| `container_repositories_replication_enabled` | `string` | No |  |
| `container_repositories_synced_count` | `string` | No |  |
| `container_repositories_synced_in_percentage` | `string` | No |  |
| `container_repositories_verification_failed_count` | `string` | No |  |
| `container_repositories_verification_total_count` | `string` | No |  |
| `container_repositories_verified_count` | `string` | No |  |
| `container_repositories_verified_in_percentage` | `string` | No |  |
| `cursor_last_event_id` | `string` | No |  |
| `cursor_last_event_timestamp` | `string` | No |  |
| `db_replication_lag_second` | `string` | No |  |
| `dependency_proxy_blobs_checksum_failed_count` | `string` | No |  |
| `dependency_proxy_blobs_checksum_total_count` | `string` | No |  |
| `dependency_proxy_blobs_checksummed_count` | `string` | No |  |
| `dependency_proxy_blobs_count` | `string` | No |  |
| `dependency_proxy_blobs_failed_count` | `string` | No |  |
| `dependency_proxy_blobs_registry_count` | `string` | No |  |
| `dependency_proxy_blobs_synced_count` | `string` | No |  |
| `dependency_proxy_blobs_synced_in_percentage` | `string` | No |  |
| `dependency_proxy_blobs_verification_failed_count` | `string` | No |  |
| `dependency_proxy_blobs_verification_total_count` | `string` | No |  |
| `dependency_proxy_blobs_verified_count` | `string` | No |  |
| `dependency_proxy_blobs_verified_in_percentage` | `string` | No |  |
| `dependency_proxy_manifests_checksum_failed_count` | `string` | No |  |
| `dependency_proxy_manifests_checksum_total_count` | `string` | No |  |
| `dependency_proxy_manifests_checksummed_count` | `string` | No |  |
| `dependency_proxy_manifests_count` | `string` | No |  |
| `dependency_proxy_manifests_failed_count` | `string` | No |  |
| `dependency_proxy_manifests_registry_count` | `string` | No |  |
| `dependency_proxy_manifests_synced_count` | `string` | No |  |
| `dependency_proxy_manifests_synced_in_percentage` | `string` | No |  |
| `dependency_proxy_manifests_verification_failed_count` | `string` | No |  |
| `dependency_proxy_manifests_verification_total_count` | `string` | No |  |
| `dependency_proxy_manifests_verified_count` | `string` | No |  |
| `dependency_proxy_manifests_verified_in_percentage` | `string` | No |  |
| `design_management_repositories_checksum_failed_count` | `string` | No |  |
| `design_management_repositories_checksum_total_count` | `string` | No |  |
| `design_management_repositories_checksummed_count` | `string` | No |  |
| `design_management_repositories_count` | `string` | No |  |
| `design_management_repositories_failed_count` | `string` | No |  |
| `design_management_repositories_registry_count` | `string` | No |  |
| `design_management_repositories_synced_count` | `string` | No |  |
| `design_management_repositories_synced_in_percentage` | `string` | No |  |
| `design_management_repositories_verification_failed_count` | `string` | No |  |
| `design_management_repositories_verification_total_count` | `string` | No |  |
| `design_management_repositories_verified_count` | `string` | No |  |
| `design_management_repositories_verified_in_percentage` | `string` | No |  |
| `geo_node_id` | `string` | No |  |
| `git_fetch_event_count_weekly` | `string` | No |  |
| `git_push_event_count_weekly` | `string` | No |  |
| `group_wiki_repositories_checksum_failed_count` | `string` | No |  |
| `group_wiki_repositories_checksum_total_count` | `string` | No |  |
| `group_wiki_repositories_checksummed_count` | `string` | No |  |
| `group_wiki_repositories_count` | `string` | No |  |
| `group_wiki_repositories_failed_count` | `string` | No |  |
| `group_wiki_repositories_registry_count` | `string` | No |  |
| `group_wiki_repositories_synced_count` | `string` | No |  |
| `group_wiki_repositories_synced_in_percentage` | `string` | No |  |
| `group_wiki_repositories_verification_failed_count` | `string` | No |  |
| `group_wiki_repositories_verification_total_count` | `string` | No |  |
| `group_wiki_repositories_verified_count` | `string` | No |  |
| `group_wiki_repositories_verified_in_percentage` | `string` | No |  |
| `health` | `string` | No |  |
| `health_status` | `string` | No |  |
| `healthy` | `string` | No |  |
| `job_artifacts_checksum_failed_count` | `string` | No |  |
| `job_artifacts_checksum_total_count` | `string` | No |  |
| `job_artifacts_checksummed_count` | `string` | No |  |
| `job_artifacts_count` | `string` | No |  |
| `job_artifacts_failed_count` | `string` | No |  |
| `job_artifacts_registry_count` | `string` | No |  |
| `job_artifacts_synced_count` | `string` | No |  |
| `job_artifacts_synced_in_percentage` | `string` | No |  |
| `job_artifacts_verification_failed_count` | `string` | No |  |
| `job_artifacts_verification_total_count` | `string` | No |  |
| `job_artifacts_verified_count` | `string` | No |  |
| `job_artifacts_verified_in_percentage` | `string` | No |  |
| `last_event_id` | `string` | No |  |
| `last_event_timestamp` | `string` | No |  |
| `last_successful_status_check_timestamp` | `string` | No |  |
| `lfs_objects_checksum_failed_count` | `string` | No |  |
| `lfs_objects_checksum_total_count` | `string` | No |  |
| `lfs_objects_checksummed_count` | `string` | No |  |
| `lfs_objects_count` | `string` | No |  |
| `lfs_objects_failed_count` | `string` | No |  |
| `lfs_objects_registry_count` | `string` | No |  |
| `lfs_objects_synced_count` | `string` | No |  |
| `lfs_objects_synced_in_percentage` | `string` | No |  |
| `lfs_objects_verification_failed_count` | `string` | No |  |
| `lfs_objects_verification_total_count` | `string` | No |  |
| `lfs_objects_verified_count` | `string` | No |  |
| `lfs_objects_verified_in_percentage` | `string` | No |  |
| `link` | `array` | No |  |
| `merge_request_diffs_checksum_failed_count` | `string` | No |  |
| `merge_request_diffs_checksum_total_count` | `string` | No |  |
| `merge_request_diffs_checksummed_count` | `string` | No |  |
| `merge_request_diffs_count` | `string` | No |  |
| `merge_request_diffs_failed_count` | `string` | No |  |
| `merge_request_diffs_registry_count` | `string` | No |  |
| `merge_request_diffs_synced_count` | `string` | No |  |
| `merge_request_diffs_synced_in_percentage` | `string` | No |  |
| `merge_request_diffs_verification_failed_count` | `string` | No |  |
| `merge_request_diffs_verification_total_count` | `string` | No |  |
| `merge_request_diffs_verified_count` | `string` | No |  |
| `merge_request_diffs_verified_in_percentage` | `string` | No |  |
| `missing_oauth_application` | `string` | No |  |
| `namespace` | `array` | No |  |
| `package_files_checksum_failed_count` | `string` | No |  |
| `package_files_checksum_total_count` | `string` | No |  |
| `package_files_checksummed_count` | `string` | No |  |
| `package_files_count` | `string` | No |  |
| `package_files_failed_count` | `string` | No |  |
| `package_files_registry_count` | `string` | No |  |
| `package_files_synced_count` | `string` | No |  |
| `package_files_synced_in_percentage` | `string` | No |  |
| `package_files_verification_failed_count` | `string` | No |  |
| `package_files_verification_total_count` | `string` | No |  |
| `package_files_verified_count` | `string` | No |  |
| `package_files_verified_in_percentage` | `string` | No |  |
| `pages_deployments_checksum_failed_count` | `string` | No |  |
| `pages_deployments_checksum_total_count` | `string` | No |  |
| `pages_deployments_checksummed_count` | `string` | No |  |
| `pages_deployments_count` | `string` | No |  |
| `pages_deployments_failed_count` | `string` | No |  |
| `pages_deployments_registry_count` | `string` | No |  |
| `pages_deployments_synced_count` | `string` | No |  |
| `pages_deployments_synced_in_percentage` | `string` | No |  |
| `pages_deployments_verification_failed_count` | `string` | No |  |
| `pages_deployments_verification_total_count` | `string` | No |  |
| `pages_deployments_verified_count` | `string` | No |  |
| `pages_deployments_verified_in_percentage` | `string` | No |  |
| `pipeline_artifacts_checksum_failed_count` | `string` | No |  |
| `pipeline_artifacts_checksum_total_count` | `string` | No |  |
| `pipeline_artifacts_checksummed_count` | `string` | No |  |
| `pipeline_artifacts_count` | `string` | No |  |
| `pipeline_artifacts_failed_count` | `string` | No |  |
| `pipeline_artifacts_registry_count` | `string` | No |  |
| `pipeline_artifacts_synced_count` | `string` | No |  |
| `pipeline_artifacts_synced_in_percentage` | `string` | No |  |
| `pipeline_artifacts_verification_failed_count` | `string` | No |  |
| `pipeline_artifacts_verification_total_count` | `string` | No |  |
| `pipeline_artifacts_verified_count` | `string` | No |  |
| `pipeline_artifacts_verified_in_percentage` | `string` | No |  |
| `project_repositories_checksum_failed_count` | `string` | No |  |
| `project_repositories_checksum_total_count` | `string` | No |  |
| `project_repositories_checksummed_count` | `string` | No |  |
| `project_repositories_count` | `string` | No |  |
| `project_repositories_failed_count` | `string` | No |  |
| `project_repositories_registry_count` | `string` | No |  |
| `project_repositories_synced_count` | `string` | No |  |
| `project_repositories_synced_in_percentage` | `string` | No |  |
| `project_repositories_verification_failed_count` | `string` | No |  |
| `project_repositories_verification_total_count` | `string` | No |  |
| `project_repositories_verified_count` | `string` | No |  |
| `project_repositories_verified_in_percentage` | `string` | No |  |
| `project_wiki_repositories_checksum_failed_count` | `string` | No |  |
| `project_wiki_repositories_checksum_total_count` | `string` | No |  |
| `project_wiki_repositories_checksummed_count` | `string` | No |  |
| `project_wiki_repositories_count` | `string` | No |  |
| `project_wiki_repositories_failed_count` | `string` | No |  |
| `project_wiki_repositories_registry_count` | `string` | No |  |
| `project_wiki_repositories_synced_count` | `string` | No |  |
| `project_wiki_repositories_synced_in_percentage` | `string` | No |  |
| `project_wiki_repositories_verification_failed_count` | `string` | No |  |
| `project_wiki_repositories_verification_total_count` | `string` | No |  |
| `project_wiki_repositories_verified_count` | `string` | No |  |
| `project_wiki_repositories_verified_in_percentage` | `string` | No |  |
| `projects_count` | `string` | No |  |
| `proxy_local_requests_event_count_weekly` | `string` | No |  |
| `proxy_remote_requests_event_count_weekly` | `string` | No |  |
| `replication_slots_count` | `string` | No |  |
| `replication_slots_max_retained_wal_byte` | `string` | No |  |
| `replication_slots_used_count` | `string` | No |  |
| `replication_slots_used_in_percentage` | `string` | No |  |
| `repositories_checked_count` | `string` | No |  |
| `repositories_checked_failed_count` | `string` | No |  |
| `repositories_checked_in_percentage` | `string` | No |  |
| `repositories_count` | `string` | No |  |
| `revision` | `string` | No |  |
| `selective_sync_type` | `string` | No |  |
| `snippet_repositories_checksum_failed_count` | `string` | No |  |
| `snippet_repositories_checksum_total_count` | `string` | No |  |
| `snippet_repositories_checksummed_count` | `string` | No |  |
| `snippet_repositories_count` | `string` | No |  |
| `snippet_repositories_failed_count` | `string` | No |  |
| `snippet_repositories_registry_count` | `string` | No |  |
| `snippet_repositories_synced_count` | `string` | No |  |
| `snippet_repositories_synced_in_percentage` | `string` | No |  |
| `snippet_repositories_verification_failed_count` | `string` | No |  |
| `snippet_repositories_verification_total_count` | `string` | No |  |
| `snippet_repositories_verified_count` | `string` | No |  |
| `snippet_repositories_verified_in_percentage` | `string` | No |  |
| `storage_shard` | `array` | No |  |
| `storage_shards_match` | `string` | No |  |
| `terraform_state_versions_checksum_failed_count` | `string` | No |  |
| `terraform_state_versions_checksum_total_count` | `string` | No |  |
| `terraform_state_versions_checksummed_count` | `string` | No |  |
| `terraform_state_versions_count` | `string` | No |  |
| `terraform_state_versions_failed_count` | `string` | No |  |
| `terraform_state_versions_registry_count` | `string` | No |  |
| `terraform_state_versions_synced_count` | `string` | No |  |
| `terraform_state_versions_synced_in_percentage` | `string` | No |  |
| `terraform_state_versions_verification_failed_count` | `string` | No |  |
| `terraform_state_versions_verification_total_count` | `string` | No |  |
| `terraform_state_versions_verified_count` | `string` | No |  |
| `terraform_state_versions_verified_in_percentage` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `uploads_checksum_failed_count` | `string` | No |  |
| `uploads_checksum_total_count` | `string` | No |  |
| `uploads_checksummed_count` | `string` | No |  |
| `uploads_count` | `string` | No |  |
| `uploads_failed_count` | `string` | No |  |
| `uploads_registry_count` | `string` | No |  |
| `uploads_synced_count` | `string` | No |  |
| `uploads_synced_in_percentage` | `string` | No |  |
| `uploads_verification_failed_count` | `string` | No |  |
| `uploads_verification_total_count` | `string` | No |  |
| `uploads_verified_count` | `string` | No |  |
| `uploads_verified_in_percentage` | `string` | No |  |
| `version` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->EeApiEntitiesGeoNodeStatus()->create([
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EeApiEntitiesGeoNodeStatusEntity`

Create a new `EeApiEntitiesGeoNodeStatusEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EeApiEntitiesGeoPipelineRefEntity

```php
$ee_api_entities_geo_pipeline_ref = $client->EeApiEntitiesGeoPipelineRef();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `pipeline_ref` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->EeApiEntitiesGeoPipelineRef()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EeApiEntitiesGeoPipelineRefEntity`

Create a new `EeApiEntitiesGeoPipelineRefEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EeApiEntitiesIssuableMetricImageEntity

```php
$ee_api_entities_issuable_metric_image = $client->EeApiEntitiesIssuableMetricImage();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No |  |
| `file_path` | `string` | No |  |
| `filename` | `string` | No |  |
| `id` | `string` | No |  |
| `url` | `string` | No |  |
| `url_text` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->EeApiEntitiesIssuableMetricImage()->create([
  "issue_id" => null, // string
  "project_id" => null, // string
]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->EeApiEntitiesIssuableMetricImage()->remove(["id" => "id", "issue_id" => "issue_id", "project_id" => "project_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->EeApiEntitiesIssuableMetricImage()->update([
  "id" => "id",
  "issue_id" => "issue_id",
  "project_id" => "project_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EeApiEntitiesIssuableMetricImageEntity`

Create a new `EeApiEntitiesIssuableMetricImageEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EeApiEntitiesMergeRequestApprovalStateEntity

```php
$ee_api_entities_merge_request_approval_state = $client->EeApiEntitiesMergeRequestApprovalState();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `approvals_required` | `int` | No |  |
| `approved` | `bool` | No |  |
| `approved_by` | `array` | No |  |
| `code_owner` | `bool` | No |  |
| `contains_hidden_group` | `bool` | No |  |
| `eligible_approver` | `array` | No |  |
| `group` | `array` | No |  |
| `id` | `int` | No |  |
| `name` | `string` | No |  |
| `overridden` | `bool` | No |  |
| `report_type` | `string` | No |  |
| `rule_type` | `string` | No |  |
| `section` | `string` | No |  |
| `source_rule` | `array` | No |  |
| `user` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->EeApiEntitiesMergeRequestApprovalState()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EeApiEntitiesMergeRequestApprovalStateEntity`

Create a new `EeApiEntitiesMergeRequestApprovalStateEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EeApiEntitiesSshCertificateEntity

```php
$ee_api_entities_ssh_certificate = $client->EeApiEntitiesSshCertificate();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No |  |
| `id` | `int` | No |  |
| `key` | `string` | No |  |
| `title` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->EeApiEntitiesSshCertificate()->create([
  "group_id" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->EeApiEntitiesSshCertificate()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EeApiEntitiesSshCertificateEntity`

Create a new `EeApiEntitiesSshCertificateEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EnvironmentEntity

```php
$environment = $client->Environment();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Environment()->create([
  "project_id" => null, // string
]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Environment()->remove(["id" => "id", "project_id" => "project_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EnvironmentEntity`

Create a new `EnvironmentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ErrorTrackingClientKeyEntity

```php
$error_tracking_client_key = $client->ErrorTrackingClientKey();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->ErrorTrackingClientKey()->remove(["id" => "id", "project_id" => "project_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ErrorTrackingClientKeyEntity`

Create a new `ErrorTrackingClientKeyEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## FeatureEntity

```php
$feature = $client->Feature();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Feature()->remove(["id" => "id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): FeatureEntity`

Create a new `FeatureEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## FeatureFlagEntity

```php
$feature_flag = $client->FeatureFlag();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->FeatureFlag()->create([
  "unleash_id" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->FeatureFlag()->load(["project_id" => "project_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->FeatureFlag()->remove(["id" => "id", "project_id" => "project_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): FeatureFlagEntity`

Create a new `FeatureFlagEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## FeatureFlagsUserListEntity

```php
$feature_flags_user_list = $client->FeatureFlagsUserList();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->FeatureFlagsUserList()->remove(["id" => "id", "project_id" => "project_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): FeatureFlagsUserListEntity`

Create a new `FeatureFlagsUserListEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## FreezePeriodEntity

```php
$freeze_period = $client->FreezePeriod();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->FreezePeriod()->remove(["id" => "id", "project_id" => "project_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): FreezePeriodEntity`

Create a new `FreezePeriodEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## GenericPackageEntity

```php
$generic_package = $client->GenericPackage();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->GenericPackage()->load(["file_name" => "file_name", "generic_id" => "generic_id", "project_id" => "project_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->GenericPackage()->update([
  "file_name" => "file_name",
  "generic_id" => "generic_id",
  "project_id" => "project_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): GenericPackageEntity`

Create a new `GenericPackageEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## GeoEntity

```php
$geo = $client->Geo();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Geo()->create([
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Geo()->load(["replicable_id" => "replicable_id", "replicable_name" => "replicable_name"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): GeoEntity`

Create a new `GeoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## GoProxyEntity

```php
$go_proxy = $client->GoProxy();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->GoProxy()->load(["project_id" => "project_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): GoProxyEntity`

Create a new `GoProxyEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## GroupEntity

```php
$group = $client->Group();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Group()->create([
  "id" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Group()->load(["id" => "group_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Group()->remove(["id" => "group_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Group()->update([
  "id" => "group_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): GroupEntity`

Create a new `GroupEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## GroupAvatarEntity

```php
$group_avatar = $client->GroupAvatar();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->GroupAvatar()->load(["id" => "group_avatar_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): GroupAvatarEntity`

Create a new `GroupAvatarEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## GroupExportEntity

```php
$group_export = $client->GroupExport();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->GroupExport()->create([
  "id" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->GroupExport()->load(["group_id" => "group_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): GroupExportEntity`

Create a new `GroupExportEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## GroupImportEntity

```php
$group_import = $client->GroupImport();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->GroupImport()->create([
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): GroupImportEntity`

Create a new `GroupImportEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## HelmPackageEntity

```php
$helm_package = $client->HelmPackage();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->HelmPackage()->create([
  "project_id" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->HelmPackage()->load(["project_id" => "project_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): HelmPackageEntity`

Create a new `HelmPackageEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## HookEntity

```php
$hook = $client->Hook();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Hook()->create([
  "id" => null, // string
]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Hook()->remove(["id" => "id", "key" => "key"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Hook()->update([
  "id" => "id",
  "key" => "key",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): HookEntity`

Create a new `HookEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ImportEntity

```php
$import = $client->Import();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Import()->create([
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ImportEntity`

Create a new `ImportEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IntegrationEntity

```php
$integration = $client->Integration();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Integration()->create([
]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Integration()->remove();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IntegrationEntity`

Create a new `IntegrationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## InvitationEntity

```php
$invitation = $client->Invitation();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Invitation()->remove(["id" => "id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): InvitationEntity`

Create a new `InvitationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IssueLinkEntity

```php
$issue_link = $client->IssueLink();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->IssueLink()->remove(["id" => "id", "issue_id" => "issue_id", "project_id" => "project_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IssueLinkEntity`

Create a new `IssueLinkEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IssuesStatisticEntity

```php
$issues_statistic = $client->IssuesStatistic();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->IssuesStatistic()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IssuesStatisticEntity`

Create a new `IssuesStatisticEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## JobEntity

```php
$job = $client->Job();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Job()->create([
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Job()->load(["id" => "job_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Job()->update([
  "id" => "job_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): JobEntity`

Create a new `JobEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MavenPackageEntity

```php
$maven_package = $client->MavenPackage();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->MavenPackage()->load(["file_name" => "file_name"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->MavenPackage()->update([
  "file_name" => "file_name",
  "project_id" => "project_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MavenPackageEntity`

Create a new `MavenPackageEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MemberEntity

```php
$member = $client->Member();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Member()->remove(["id" => "id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MemberEntity`

Create a new `MemberEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MergeRequestEntity

```php
$merge_request = $client->MergeRequest();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->MergeRequest()->load(["id" => "merge_request_id", "project_id" => "project_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->MergeRequest()->remove(["id" => "merge_request_id", "project_id" => "project_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->MergeRequest()->update([
  "id" => "merge_request_id",
  "project_id" => "project_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MergeRequestEntity`

Create a new `MergeRequestEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MetadataEntity

```php
$metadata = $client->Metadata();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enterprise` | `bool` | No |  |
| `kas` | `array` | No |  |
| `revision` | `string` | No |  |
| `version` | `string` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Metadata()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MetadataEntity`

Create a new `MetadataEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MigrationEntity

```php
$migration = $client->Migration();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Migration()->create([
  "timestamp" => null, // mixed
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MigrationEntity`

Create a new `MigrationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MlModelRegistryEntity

```php
$ml_model_registry = $client->MlModelRegistry();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->MlModelRegistry()->load(["file_name" => "file_name", "ml_model_id" => "ml_model_id", "project_id" => "project_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->MlModelRegistry()->update([
  "file_name" => "file_name",
  "ml_model_id" => "ml_model_id",
  "project_id" => "project_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MlModelRegistryEntity`

Create a new `MlModelRegistryEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## NamespaceEntity

```php
$namespace = $client->Namespace();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Namespace()->remove(["id" => "id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): NamespaceEntity`

Create a new `NamespaceEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## NpmEntity

```php
$npm = $client->Npm();
```

### Operations

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Npm()->update([
  "id" => "id",
  "project_id" => "project_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): NpmEntity`

Create a new `NpmEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## NpmPackageEntity

```php
$npm_package = $client->NpmPackage();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->NpmPackage()->create([
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->NpmPackage()->load(["project_id" => "project_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->NpmPackage()->remove(["tag" => "tag"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->NpmPackage()->update([
  "tag" => "tag",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): NpmPackageEntity`

Create a new `NpmPackageEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## NugetEntity

```php
$nuget = $client->Nuget();
```

### Operations

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Nuget()->update([
  "project_id" => "project_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): NugetEntity`

Create a new `NugetEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## NugetPackageEntity

```php
$nuget_package = $client->NugetPackage();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `catalog_entry` | `array` | No |  |
| `count` | `int` | No |  |
| `id` | `string` | No |  |
| `item` | `array` | No |  |
| `lower` | `string` | No |  |
| `package_content` | `string` | No |  |
| `upper` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->NugetPackage()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->NugetPackage()->load();
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->NugetPackage()->remove(["project_id" => "project_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->NugetPackage()->update([
  "project_id" => "project_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): NugetPackageEntity`

Create a new `NugetPackageEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PackageFileEntity

```php
$package_file = $client->PackageFile();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->PackageFile()->load(["id" => "package_file_id", "package_id" => "package_id", "project_id" => "project_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->PackageFile()->remove(["id" => "package_file_id", "package_id" => "package_id", "project_id" => "project_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PackageFileEntity`

Create a new `PackageFileEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PageEntity

```php
$page = $client->Page();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Page()->load(["project_id" => "project_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Page()->remove(["project_id" => "project_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Page()->update([
  "project_id" => "project_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PageEntity`

Create a new `PageEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ParticipantEntity

```php
$participant = $client->Participant();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `key` | `string` | No |  |
| `value` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Participant()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ParticipantEntity`

Create a new `ParticipantEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PersonalAccessTokenEntity

```php
$personal_access_token = $client->PersonalAccessToken();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->PersonalAccessToken()->remove(["id" => "id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PersonalAccessTokenEntity`

Create a new `PersonalAccessTokenEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ProjectEntity

```php
$project = $client->Project();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `before_sha` | `string` | No |  |
| `committed_at` | `string` | No |  |
| `coverage` | `float` | No |  |
| `created_at` | `string` | No |  |
| `detailed_status` | `array` | No |  |
| `duration` | `int` | No |  |
| `finished_at` | `string` | No |  |
| `id` | `int` | No |  |
| `iid` | `int` | No |  |
| `name` | `string` | No |  |
| `project_id` | `int` | No |  |
| `queued_duration` | `int` | No |  |
| `ref` | `string` | No |  |
| `sha` | `string` | No |  |
| `source` | `string` | No |  |
| `started_at` | `string` | No |  |
| `status` | `string` | No |  |
| `tag` | `bool` | No |  |
| `updated_at` | `string` | No |  |
| `user` | `array` | No |  |
| `web_url` | `string` | No |  |
| `yaml_error` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Project()->create([
  "id" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Project()->load(["id" => "project_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Project()->remove(["id" => "project_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Project()->update([
  "id" => "project_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ProjectEntity`

Create a new `ProjectEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ProjectAvatarEntity

```php
$project_avatar = $client->ProjectAvatar();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ProjectAvatar()->load(["id" => "project_avatar_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ProjectAvatarEntity`

Create a new `ProjectAvatarEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ProjectEntityEntity

```php
$project_entity = $client->ProjectEntity();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ProjectEntity()->create([
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ProjectEntityEntity`

Create a new `ProjectEntityEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ProjectExportEntity

```php
$project_export = $client->ProjectExport();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ProjectExport()->create([
  "id" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ProjectExport()->load(["project_id" => "project_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ProjectExportEntity`

Create a new `ProjectExportEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ProjectHookEntity

```php
$project_hook = $client->ProjectHook();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->ProjectHook()->remove(["id" => "id", "project_id" => "project_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ProjectHookEntity`

Create a new `ProjectHookEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ProjectImportEntity

```php
$project_import = $client->ProjectImport();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ProjectImport()->create([
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ProjectImportEntity`

Create a new `ProjectImportEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ProjectImportEntityEntity

```php
$project_import_entity = $client->ProjectImportEntity();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `forked` | `bool` | No |  |
| `full_name` | `string` | No |  |
| `full_path` | `string` | No |  |
| `human_import_status_name` | `string` | No |  |
| `id` | `int` | No |  |
| `import_error` | `string` | No |  |
| `import_source` | `string` | No |  |
| `import_status` | `string` | No |  |
| `import_warning` | `string` | No |  |
| `name` | `string` | No |  |
| `provider_link` | `string` | No |  |
| `refs_url` | `string` | No |  |
| `relation_type` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ProjectImportEntity()->create([
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ProjectImportEntityEntity`

Create a new `ProjectImportEntityEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ProjectPackageEntity

```php
$project_package = $client->ProjectPackage();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->ProjectPackage()->remove(["id" => "id", "project_id" => "project_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ProjectPackageEntity`

Create a new `ProjectPackageEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ProjectSnippetEntity

```php
$project_snippet = $client->ProjectSnippet();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->ProjectSnippet()->remove(["id" => "id", "project_id" => "project_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ProjectSnippetEntity`

Create a new `ProjectSnippetEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ProjectsJobTokenScopeEntity

```php
$projects_job_token_scope = $client->ProjectsJobTokenScope();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->ProjectsJobTokenScope()->remove(["project_id" => "project_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ProjectsJobTokenScope()->update([
  "project_id" => "project_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ProjectsJobTokenScopeEntity`

Create a new `ProjectsJobTokenScopeEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ProtectedTagEntity

```php
$protected_tag = $client->ProtectedTag();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->ProtectedTag()->remove(["id" => "id", "project_id" => "project_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ProtectedTagEntity`

Create a new `ProtectedTagEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PypiEntity

```php
$pypi = $client->Pypi();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Pypi()->create([
  "project_id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PypiEntity`

Create a new `PypiEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PypiPackageEntity

```php
$pypi_package = $client->PypiPackage();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->PypiPackage()->create([
  "project_id" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->PypiPackage()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PypiPackageEntity`

Create a new `PypiPackageEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ReleaseEntity

```php
$release = $client->Release();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Release()->load(["project_id" => "project_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Release()->remove(["id" => "id", "project_id" => "project_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ReleaseEntity`

Create a new `ReleaseEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ReleaseLinkEntity

```php
$release_link = $client->ReleaseLink();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->ReleaseLink()->remove(["id" => "id", "project_id" => "project_id", "release_id" => "release_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ReleaseLinkEntity`

Create a new `ReleaseLinkEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RemoteMirrorEntity

```php
$remote_mirror = $client->RemoteMirror();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->RemoteMirror()->create([
  "id" => null, // string
  "project_id" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->RemoteMirror()->load(["id" => "remote_mirror_id", "project_id" => "project_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->RemoteMirror()->remove(["id" => "remote_mirror_id", "project_id" => "project_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RemoteMirrorEntity`

Create a new `RemoteMirrorEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RpmEntity

```php
$rpm = $client->Rpm();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Rpm()->create([
  "project_id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RpmEntity`

Create a new `RpmEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RpmPackageEntity

```php
$rpm_package = $client->RpmPackage();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->RpmPackage()->create([
  "project_id" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->RpmPackage()->load(["project_id" => "project_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RpmPackageEntity`

Create a new `RpmPackageEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RubygemEntity

```php
$rubygem = $client->Rubygem();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Rubygem()->load(["id" => "rubygem_id", "project_id" => "project_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RubygemEntity`

Create a new `RubygemEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RubygemPackageEntity

```php
$rubygem_package = $client->RubygemPackage();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->RubygemPackage()->create([
  "project_id" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->RubygemPackage()->load(["project_id" => "project_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RubygemPackageEntity`

Create a new `RubygemPackageEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RunnerEntity

```php
$runner = $client->Runner();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Runner()->create([
]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Runner()->remove();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RunnerEntity`

Create a new `RunnerEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SearchEntity

```php
$search = $client->Search();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Search()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SearchEntity`

Create a new `SearchEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SecureFileEntity

```php
$secure_file = $client->SecureFile();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->SecureFile()->load(["id" => "secure_file_id", "project_id" => "project_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->SecureFile()->remove(["id" => "secure_file_id", "project_id" => "project_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SecureFileEntity`

Create a new `SecureFileEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SlackEntity

```php
$slack = $client->Slack();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Slack()->create([
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SlackEntity`

Create a new `SlackEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SnippetEntity

```php
$snippet = $client->Snippet();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Snippet()->load(["id" => "snippet_id", "file_id" => "file_id", "file_path" => "file_path"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Snippet()->remove(["id" => "snippet_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SnippetEntity`

Create a new `SnippetEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## StarrerEntity

```php
$starrer = $client->Starrer();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_path` | `string` | No |  |
| `avatar_url` | `string` | No |  |
| `custom_attribute` | `array` | No |  |
| `id` | `int` | No |  |
| `locked` | `bool` | No |  |
| `name` | `string` | No |  |
| `public_email` | `string` | No |  |
| `state` | `string` | No |  |
| `username` | `string` | No |  |
| `web_url` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Starrer()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): StarrerEntity`

Create a new `StarrerEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SystemHookEntity

```php
$system_hook = $client->SystemHook();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->SystemHook()->remove(["id" => "id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SystemHookEntity`

Create a new `SystemHookEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TagEntity

```php
$tag = $client->Tag();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Tag()->remove(["id" => "id", "project_id" => "project_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TagEntity`

Create a new `TagEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TerraformRegistryEntity

```php
$terraform_registry = $client->TerraformRegistry();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->TerraformRegistry()->load(["id" => "terraform_registry_id", "module_system" => "module_system"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->TerraformRegistry()->update([
  "module_id" => "module_id",
  "module_system" => "module_system",
  "project_id" => "project_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TerraformRegistryEntity`

Create a new `TerraformRegistryEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TerraformStateEntity

```php
$terraform_state = $client->TerraformState();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->TerraformState()->create([
  "project_id" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->TerraformState()->load(["id" => "terraform_state_id", "project_id" => "project_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->TerraformState()->remove(["id" => "terraform_state_id", "project_id" => "project_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TerraformStateEntity`

Create a new `TerraformStateEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TestReportEntity

```php
$test_report = $client->TestReport();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `error_count` | `int` | No |  |
| `failed_count` | `int` | No |  |
| `name` | `string` | No |  |
| `skipped_count` | `int` | No |  |
| `success_count` | `int` | No |  |
| `suite_error` | `string` | No |  |
| `test_case` | `array` | No |  |
| `total_count` | `int` | No |  |
| `total_time` | `int` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->TestReport()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TestReportEntity`

Create a new `TestReportEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TestReportSummaryEntity

```php
$test_report_summary = $client->TestReportSummary();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `test_suite` | `array` | No |  |
| `total` | `array` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->TestReportSummary()->load(["pipeline_id" => "pipeline_id", "project_id" => "project_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TestReportSummaryEntity`

Create a new `TestReportSummaryEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TopicEntity

```php
$topic = $client->Topic();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Topic()->remove(["id" => "id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TopicEntity`

Create a new `TopicEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## UnleashApiEntity

```php
$unleash_api = $client->UnleashApi();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->UnleashApi()->load(["unleash_id" => "unleash_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): UnleashApiEntity`

Create a new `UnleashApiEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## UsageDataEntity

```php
$usage_data = $client->UsageData();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->UsageData()->create([
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->UsageData()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): UsageDataEntity`

Create a new `UsageDataEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## UserEntity

```php
$user = $client->User();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_path` | `string` | No |  |
| `avatar_url` | `string` | No |  |
| `custom_attribute` | `array` | No |  |
| `id` | `int` | No |  |
| `locked` | `bool` | No |  |
| `name` | `string` | No |  |
| `public_email` | `string` | No |  |
| `state` | `string` | No |  |
| `username` | `string` | No |  |
| `web_url` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->User()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): UserEntity`

Create a new `UserEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WebCommitEntity

```php
$web_commit = $client->WebCommit();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->WebCommit()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WebCommitEntity`

Create a new `WebCommitEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WikiEntity

```php
$wiki = $client->Wiki();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Wiki()->remove(["id" => "id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WikiEntity`

Create a new `WikiEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```php
$client = new GitlabSDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
```

