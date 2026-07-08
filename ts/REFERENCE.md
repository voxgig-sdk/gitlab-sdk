# Gitlab TypeScript SDK Reference

Complete API reference for the Gitlab TypeScript SDK.


## GitlabSDK

### Constructor

```ts
new GitlabSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `GitlabSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = GitlabSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `GitlabSDK` instance in test mode.


### Instance Methods

#### `AccessRequest(data?: object)`

Create a new `AccessRequest` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AccessRequestEntity` instance.

#### `AlertManagement(data?: object)`

Create a new `AlertManagement` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AlertManagementEntity` instance.

#### `ApiEntitiesAccessRequester(data?: object)`

Create a new `ApiEntitiesAccessRequester` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesAccessRequesterEntity` instance.

#### `ApiEntitiesAppearance(data?: object)`

Create a new `ApiEntitiesAppearance` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesAppearanceEntity` instance.

#### `ApiEntitiesApplication(data?: object)`

Create a new `ApiEntitiesApplication` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesApplicationEntity` instance.

#### `ApiEntitiesApplicationStatistic(data?: object)`

Create a new `ApiEntitiesApplicationStatistic` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesApplicationStatisticEntity` instance.

#### `ApiEntitiesApplicationWithSecret(data?: object)`

Create a new `ApiEntitiesApplicationWithSecret` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesApplicationWithSecretEntity` instance.

#### `ApiEntitiesAvatar(data?: object)`

Create a new `ApiEntitiesAvatar` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesAvatarEntity` instance.

#### `ApiEntitiesAwardEmoji(data?: object)`

Create a new `ApiEntitiesAwardEmoji` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesAwardEmojiEntity` instance.

#### `ApiEntitiesBadge(data?: object)`

Create a new `ApiEntitiesBadge` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesBadgeEntity` instance.

#### `ApiEntitiesBasicBadgeDetail(data?: object)`

Create a new `ApiEntitiesBasicBadgeDetail` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesBasicBadgeDetailEntity` instance.

#### `ApiEntitiesBasicGroupDetail(data?: object)`

Create a new `ApiEntitiesBasicGroupDetail` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesBasicGroupDetailEntity` instance.

#### `ApiEntitiesBasicProjectDetail(data?: object)`

Create a new `ApiEntitiesBasicProjectDetail` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesBasicProjectDetailEntity` instance.

#### `ApiEntitiesBasicRef(data?: object)`

Create a new `ApiEntitiesBasicRef` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesBasicRefEntity` instance.

#### `ApiEntitiesBasicSuccess(data?: object)`

Create a new `ApiEntitiesBasicSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesBasicSuccessEntity` instance.

#### `ApiEntitiesBatchedBackgroundMigration(data?: object)`

Create a new `ApiEntitiesBatchedBackgroundMigration` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesBatchedBackgroundMigrationEntity` instance.

#### `ApiEntitiesBranch(data?: object)`

Create a new `ApiEntitiesBranch` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesBranchEntity` instance.

#### `ApiEntitiesBulkImport(data?: object)`

Create a new `ApiEntitiesBulkImport` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesBulkImportEntity` instance.

#### `ApiEntitiesBulkImportsEntityFailure(data?: object)`

Create a new `ApiEntitiesBulkImportsEntityFailure` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesBulkImportsEntityFailureEntity` instance.

#### `ApiEntitiesBulkImportsExportStatus(data?: object)`

Create a new `ApiEntitiesBulkImportsExportStatus` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesBulkImportsExportStatusEntity` instance.

#### `ApiEntitiesChangelog(data?: object)`

Create a new `ApiEntitiesChangelog` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesChangelogEntity` instance.

#### `ApiEntitiesCiBridge(data?: object)`

Create a new `ApiEntitiesCiBridge` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesCiBridgeEntity` instance.

#### `ApiEntitiesCiCatalogResourcesVersion(data?: object)`

Create a new `ApiEntitiesCiCatalogResourcesVersion` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesCiCatalogResourcesVersionEntity` instance.

#### `ApiEntitiesCiJob(data?: object)`

Create a new `ApiEntitiesCiJob` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesCiJobEntity` instance.

#### `ApiEntitiesCiJobBasic(data?: object)`

Create a new `ApiEntitiesCiJobBasic` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesCiJobBasicEntity` instance.

#### `ApiEntitiesCiJobBasicWithProject(data?: object)`

Create a new `ApiEntitiesCiJobBasicWithProject` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesCiJobBasicWithProjectEntity` instance.

#### `ApiEntitiesCiLintResult(data?: object)`

Create a new `ApiEntitiesCiLintResult` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesCiLintResultEntity` instance.

#### `ApiEntitiesCiPipeline(data?: object)`

Create a new `ApiEntitiesCiPipeline` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesCiPipelineEntity` instance.

#### `ApiEntitiesCiPipelineBasic(data?: object)`

Create a new `ApiEntitiesCiPipelineBasic` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesCiPipelineBasicEntity` instance.

#### `ApiEntitiesCiPipelineSchedule(data?: object)`

Create a new `ApiEntitiesCiPipelineSchedule` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesCiPipelineScheduleEntity` instance.

#### `ApiEntitiesCiPipelineScheduleDetail(data?: object)`

Create a new `ApiEntitiesCiPipelineScheduleDetail` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesCiPipelineScheduleDetailEntity` instance.

#### `ApiEntitiesCiResetTokenResult(data?: object)`

Create a new `ApiEntitiesCiResetTokenResult` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesCiResetTokenResultEntity` instance.

#### `ApiEntitiesCiResourceGroup(data?: object)`

Create a new `ApiEntitiesCiResourceGroup` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesCiResourceGroupEntity` instance.

#### `ApiEntitiesCiRunner(data?: object)`

Create a new `ApiEntitiesCiRunner` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesCiRunnerEntity` instance.

#### `ApiEntitiesCiRunnerDetail(data?: object)`

Create a new `ApiEntitiesCiRunnerDetail` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesCiRunnerDetailEntity` instance.

#### `ApiEntitiesCiRunnerManager(data?: object)`

Create a new `ApiEntitiesCiRunnerManager` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesCiRunnerManagerEntity` instance.

#### `ApiEntitiesCiRunnerRegistrationDetail(data?: object)`

Create a new `ApiEntitiesCiRunnerRegistrationDetail` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesCiRunnerRegistrationDetailEntity` instance.

#### `ApiEntitiesCiSecureFile(data?: object)`

Create a new `ApiEntitiesCiSecureFile` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesCiSecureFileEntity` instance.

#### `ApiEntitiesCiVariable(data?: object)`

Create a new `ApiEntitiesCiVariable` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesCiVariableEntity` instance.

#### `ApiEntitiesCluster(data?: object)`

Create a new `ApiEntitiesCluster` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesClusterEntity` instance.

#### `ApiEntitiesClusterGroup(data?: object)`

Create a new `ApiEntitiesClusterGroup` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesClusterGroupEntity` instance.

#### `ApiEntitiesClusterProject(data?: object)`

Create a new `ApiEntitiesClusterProject` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesClusterProjectEntity` instance.

#### `ApiEntitiesClustersAgent(data?: object)`

Create a new `ApiEntitiesClustersAgent` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesClustersAgentEntity` instance.

#### `ApiEntitiesClustersAgentToken(data?: object)`

Create a new `ApiEntitiesClustersAgentToken` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesClustersAgentTokenEntity` instance.

#### `ApiEntitiesClustersAgentTokenBasic(data?: object)`

Create a new `ApiEntitiesClustersAgentTokenBasic` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesClustersAgentTokenBasicEntity` instance.

#### `ApiEntitiesClustersAgentTokenWithToken(data?: object)`

Create a new `ApiEntitiesClustersAgentTokenWithToken` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesClustersAgentTokenWithTokenEntity` instance.

#### `ApiEntitiesCommit(data?: object)`

Create a new `ApiEntitiesCommit` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesCommitEntity` instance.

#### `ApiEntitiesCommitDetail(data?: object)`

Create a new `ApiEntitiesCommitDetail` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesCommitDetailEntity` instance.

#### `ApiEntitiesCommitNote(data?: object)`

Create a new `ApiEntitiesCommitNote` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesCommitNoteEntity` instance.

#### `ApiEntitiesCommitSequence(data?: object)`

Create a new `ApiEntitiesCommitSequence` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesCommitSequenceEntity` instance.

#### `ApiEntitiesCommitSignature(data?: object)`

Create a new `ApiEntitiesCommitSignature` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesCommitSignatureEntity` instance.

#### `ApiEntitiesCommitStatus(data?: object)`

Create a new `ApiEntitiesCommitStatus` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesCommitStatusEntity` instance.

#### `ApiEntitiesCompare(data?: object)`

Create a new `ApiEntitiesCompare` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesCompareEntity` instance.

#### `ApiEntitiesContainerRegistryRepository(data?: object)`

Create a new `ApiEntitiesContainerRegistryRepository` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesContainerRegistryRepositoryEntity` instance.

#### `ApiEntitiesContainerRegistryTag(data?: object)`

Create a new `ApiEntitiesContainerRegistryTag` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesContainerRegistryTagEntity` instance.

#### `ApiEntitiesContainerRegistryTagDetail(data?: object)`

Create a new `ApiEntitiesContainerRegistryTagDetail` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesContainerRegistryTagDetailEntity` instance.

#### `ApiEntitiesContributor(data?: object)`

Create a new `ApiEntitiesContributor` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesContributorEntity` instance.

#### `ApiEntitiesDeployKey(data?: object)`

Create a new `ApiEntitiesDeployKey` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesDeployKeyEntity` instance.

#### `ApiEntitiesDeployKeysProject(data?: object)`

Create a new `ApiEntitiesDeployKeysProject` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesDeployKeysProjectEntity` instance.

#### `ApiEntitiesDeployToken(data?: object)`

Create a new `ApiEntitiesDeployToken` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesDeployTokenEntity` instance.

#### `ApiEntitiesDeployTokenWithToken(data?: object)`

Create a new `ApiEntitiesDeployTokenWithToken` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesDeployTokenWithTokenEntity` instance.

#### `ApiEntitiesDeployment(data?: object)`

Create a new `ApiEntitiesDeployment` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesDeploymentEntity` instance.

#### `ApiEntitiesDeploymentExtended(data?: object)`

Create a new `ApiEntitiesDeploymentExtended` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesDeploymentExtendedEntity` instance.

#### `ApiEntitiesDeploymentsApproval(data?: object)`

Create a new `ApiEntitiesDeploymentsApproval` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesDeploymentsApprovalEntity` instance.

#### `ApiEntitiesDictionaryTable(data?: object)`

Create a new `ApiEntitiesDictionaryTable` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesDictionaryTableEntity` instance.

#### `ApiEntitiesDiff(data?: object)`

Create a new `ApiEntitiesDiff` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesDiffEntity` instance.

#### `ApiEntitiesDiscoveredCluster(data?: object)`

Create a new `ApiEntitiesDiscoveredCluster` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesDiscoveredClusterEntity` instance.

#### `ApiEntitiesDraftNote(data?: object)`

Create a new `ApiEntitiesDraftNote` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesDraftNoteEntity` instance.

#### `ApiEntitiesEnvironment(data?: object)`

Create a new `ApiEntitiesEnvironment` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesEnvironmentEntity` instance.

#### `ApiEntitiesErrorTrackingClientKey(data?: object)`

Create a new `ApiEntitiesErrorTrackingClientKey` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesErrorTrackingClientKeyEntity` instance.

#### `ApiEntitiesErrorTrackingProjectSetting(data?: object)`

Create a new `ApiEntitiesErrorTrackingProjectSetting` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesErrorTrackingProjectSettingEntity` instance.

#### `ApiEntitiesEvent(data?: object)`

Create a new `ApiEntitiesEvent` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesEventEntity` instance.

#### `ApiEntitiesFeature(data?: object)`

Create a new `ApiEntitiesFeature` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesFeatureEntity` instance.

#### `ApiEntitiesFeatureDefinition(data?: object)`

Create a new `ApiEntitiesFeatureDefinition` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesFeatureDefinitionEntity` instance.

#### `ApiEntitiesFeatureFlag(data?: object)`

Create a new `ApiEntitiesFeatureFlag` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesFeatureFlagEntity` instance.

#### `ApiEntitiesFeatureFlagUserList(data?: object)`

Create a new `ApiEntitiesFeatureFlagUserList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesFeatureFlagUserListEntity` instance.

#### `ApiEntitiesFreezePeriod(data?: object)`

Create a new `ApiEntitiesFreezePeriod` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesFreezePeriodEntity` instance.

#### `ApiEntitiesGitlabSubscription(data?: object)`

Create a new `ApiEntitiesGitlabSubscription` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesGitlabSubscriptionEntity` instance.

#### `ApiEntitiesGoModuleVersion(data?: object)`

Create a new `ApiEntitiesGoModuleVersion` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesGoModuleVersionEntity` instance.

#### `ApiEntitiesGroup(data?: object)`

Create a new `ApiEntitiesGroup` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesGroupEntity` instance.

#### `ApiEntitiesGroupDetail(data?: object)`

Create a new `ApiEntitiesGroupDetail` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesGroupDetailEntity` instance.

#### `ApiEntitiesHook(data?: object)`

Create a new `ApiEntitiesHook` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesHookEntity` instance.

#### `ApiEntitiesIntegration(data?: object)`

Create a new `ApiEntitiesIntegration` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesIntegrationEntity` instance.

#### `ApiEntitiesIntegrationBasic(data?: object)`

Create a new `ApiEntitiesIntegrationBasic` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesIntegrationBasicEntity` instance.

#### `ApiEntitiesInvitation(data?: object)`

Create a new `ApiEntitiesInvitation` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesInvitationEntity` instance.

#### `ApiEntitiesIssuableTimeStat(data?: object)`

Create a new `ApiEntitiesIssuableTimeStat` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesIssuableTimeStatEntity` instance.

#### `ApiEntitiesIssue(data?: object)`

Create a new `ApiEntitiesIssue` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesIssueEntity` instance.

#### `ApiEntitiesIssueLink(data?: object)`

Create a new `ApiEntitiesIssueLink` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesIssueLinkEntity` instance.

#### `ApiEntitiesLicense(data?: object)`

Create a new `ApiEntitiesLicense` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesLicenseEntity` instance.

#### `ApiEntitiesMarkdown(data?: object)`

Create a new `ApiEntitiesMarkdown` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesMarkdownEntity` instance.

#### `ApiEntitiesMarkdownUploadAdmin(data?: object)`

Create a new `ApiEntitiesMarkdownUploadAdmin` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesMarkdownUploadAdminEntity` instance.

#### `ApiEntitiesMember(data?: object)`

Create a new `ApiEntitiesMember` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesMemberEntity` instance.

#### `ApiEntitiesMerge(data?: object)`

Create a new `ApiEntitiesMerge` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesMergeEntity` instance.

#### `ApiEntitiesMergeRequestApproval(data?: object)`

Create a new `ApiEntitiesMergeRequestApproval` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesMergeRequestApprovalEntity` instance.

#### `ApiEntitiesMergeRequestBasic(data?: object)`

Create a new `ApiEntitiesMergeRequestBasic` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesMergeRequestBasicEntity` instance.

#### `ApiEntitiesMergeRequestChange(data?: object)`

Create a new `ApiEntitiesMergeRequestChange` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesMergeRequestChangeEntity` instance.

#### `ApiEntitiesMergeRequestDiff(data?: object)`

Create a new `ApiEntitiesMergeRequestDiff` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesMergeRequestDiffEntity` instance.

#### `ApiEntitiesMergeRequestDiffFull(data?: object)`

Create a new `ApiEntitiesMergeRequestDiffFull` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesMergeRequestDiffFullEntity` instance.

#### `ApiEntitiesMergeRequestReviewer(data?: object)`

Create a new `ApiEntitiesMergeRequestReviewer` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesMergeRequestReviewerEntity` instance.

#### `ApiEntitiesMetricImage(data?: object)`

Create a new `ApiEntitiesMetricImage` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesMetricImageEntity` instance.

#### `ApiEntitiesMrNote(data?: object)`

Create a new `ApiEntitiesMrNote` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesMrNoteEntity` instance.

#### `ApiEntitiesNamespace(data?: object)`

Create a new `ApiEntitiesNamespace` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesNamespaceEntity` instance.

#### `ApiEntitiesNamespaceExistence(data?: object)`

Create a new `ApiEntitiesNamespaceExistence` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesNamespaceExistenceEntity` instance.

#### `ApiEntitiesNamespacesStorageLimitExclusion(data?: object)`

Create a new `ApiEntitiesNamespacesStorageLimitExclusion` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesNamespacesStorageLimitExclusionEntity` instance.

#### `ApiEntitiesNpmPackage(data?: object)`

Create a new `ApiEntitiesNpmPackage` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesNpmPackageEntity` instance.

#### `ApiEntitiesNpmPackageTag(data?: object)`

Create a new `ApiEntitiesNpmPackageTag` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesNpmPackageTagEntity` instance.

#### `ApiEntitiesNugetPackagesVersion(data?: object)`

Create a new `ApiEntitiesNugetPackagesVersion` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesNugetPackagesVersionEntity` instance.

#### `ApiEntitiesNugetSearchResult(data?: object)`

Create a new `ApiEntitiesNugetSearchResult` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesNugetSearchResultEntity` instance.

#### `ApiEntitiesNugetServiceIndex(data?: object)`

Create a new `ApiEntitiesNugetServiceIndex` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesNugetServiceIndexEntity` instance.

#### `ApiEntitiesOrganizationsOrganization(data?: object)`

Create a new `ApiEntitiesOrganizationsOrganization` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesOrganizationsOrganizationEntity` instance.

#### `ApiEntitiesPackage(data?: object)`

Create a new `ApiEntitiesPackage` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesPackageEntity` instance.

#### `ApiEntitiesPackageFile(data?: object)`

Create a new `ApiEntitiesPackageFile` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesPackageFileEntity` instance.

#### `ApiEntitiesPackagePipeline(data?: object)`

Create a new `ApiEntitiesPackagePipeline` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesPackagePipelineEntity` instance.

#### `ApiEntitiesPackagesConanFilesList(data?: object)`

Create a new `ApiEntitiesPackagesConanFilesList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesPackagesConanFilesListEntity` instance.

#### `ApiEntitiesPackagesConanPackageManifest(data?: object)`

Create a new `ApiEntitiesPackagesConanPackageManifest` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesPackagesConanPackageManifestEntity` instance.

#### `ApiEntitiesPackagesConanPackageRevision(data?: object)`

Create a new `ApiEntitiesPackagesConanPackageRevision` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesPackagesConanPackageRevisionEntity` instance.

#### `ApiEntitiesPackagesConanPackageSnapshot(data?: object)`

Create a new `ApiEntitiesPackagesConanPackageSnapshot` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesPackagesConanPackageSnapshotEntity` instance.

#### `ApiEntitiesPackagesConanRecipeManifest(data?: object)`

Create a new `ApiEntitiesPackagesConanRecipeManifest` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesPackagesConanRecipeManifestEntity` instance.

#### `ApiEntitiesPackagesConanRecipeRevision(data?: object)`

Create a new `ApiEntitiesPackagesConanRecipeRevision` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesPackagesConanRecipeRevisionEntity` instance.

#### `ApiEntitiesPackagesConanRecipeSnapshot(data?: object)`

Create a new `ApiEntitiesPackagesConanRecipeSnapshot` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesPackagesConanRecipeSnapshotEntity` instance.

#### `ApiEntitiesPackagesConanRevision(data?: object)`

Create a new `ApiEntitiesPackagesConanRevision` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesPackagesConanRevisionEntity` instance.

#### `ApiEntitiesPackagesConanUploadUrl(data?: object)`

Create a new `ApiEntitiesPackagesConanUploadUrl` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesPackagesConanUploadUrlEntity` instance.

#### `ApiEntitiesPackagesDebianDistribution(data?: object)`

Create a new `ApiEntitiesPackagesDebianDistribution` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesPackagesDebianDistributionEntity` instance.

#### `ApiEntitiesPagesDomain(data?: object)`

Create a new `ApiEntitiesPagesDomain` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesPagesDomainEntity` instance.

#### `ApiEntitiesPagesDomainBasic(data?: object)`

Create a new `ApiEntitiesPagesDomainBasic` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesPagesDomainBasicEntity` instance.

#### `ApiEntitiesPersonalAccessToken(data?: object)`

Create a new `ApiEntitiesPersonalAccessToken` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesPersonalAccessTokenEntity` instance.

#### `ApiEntitiesPersonalAccessTokenWithLastUsedIp(data?: object)`

Create a new `ApiEntitiesPersonalAccessTokenWithLastUsedIp` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesPersonalAccessTokenWithLastUsedIpEntity` instance.

#### `ApiEntitiesPersonalAccessTokenWithToken(data?: object)`

Create a new `ApiEntitiesPersonalAccessTokenWithToken` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesPersonalAccessTokenWithTokenEntity` instance.

#### `ApiEntitiesPersonalSnippet(data?: object)`

Create a new `ApiEntitiesPersonalSnippet` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesPersonalSnippetEntity` instance.

#### `ApiEntitiesPlanLimit(data?: object)`

Create a new `ApiEntitiesPlanLimit` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesPlanLimitEntity` instance.

#### `ApiEntitiesProject(data?: object)`

Create a new `ApiEntitiesProject` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesProjectEntity` instance.

#### `ApiEntitiesProjectDailyStatistic(data?: object)`

Create a new `ApiEntitiesProjectDailyStatistic` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesProjectDailyStatisticEntity` instance.

#### `ApiEntitiesProjectExportStatus(data?: object)`

Create a new `ApiEntitiesProjectExportStatus` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesProjectExportStatusEntity` instance.

#### `ApiEntitiesProjectGroupLink(data?: object)`

Create a new `ApiEntitiesProjectGroupLink` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesProjectGroupLinkEntity` instance.

#### `ApiEntitiesProjectHook(data?: object)`

Create a new `ApiEntitiesProjectHook` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesProjectHookEntity` instance.

#### `ApiEntitiesProjectImportStatus(data?: object)`

Create a new `ApiEntitiesProjectImportStatus` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesProjectImportStatusEntity` instance.

#### `ApiEntitiesProjectJobTokenScope(data?: object)`

Create a new `ApiEntitiesProjectJobTokenScope` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesProjectJobTokenScopeEntity` instance.

#### `ApiEntitiesProjectRepositoryStorage(data?: object)`

Create a new `ApiEntitiesProjectRepositoryStorage` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesProjectRepositoryStorageEntity` instance.

#### `ApiEntitiesProjectSnippet(data?: object)`

Create a new `ApiEntitiesProjectSnippet` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesProjectSnippetEntity` instance.

#### `ApiEntitiesProjectUpload(data?: object)`

Create a new `ApiEntitiesProjectUpload` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesProjectUploadEntity` instance.

#### `ApiEntitiesProjectWithAccess(data?: object)`

Create a new `ApiEntitiesProjectWithAccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesProjectWithAccessEntity` instance.

#### `ApiEntitiesProjectsContainerRegistryProtectionRule(data?: object)`

Create a new `ApiEntitiesProjectsContainerRegistryProtectionRule` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesProjectsContainerRegistryProtectionRuleEntity` instance.

#### `ApiEntitiesProjectsPackagesProtectionRule(data?: object)`

Create a new `ApiEntitiesProjectsPackagesProtectionRule` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesProjectsPackagesProtectionRuleEntity` instance.

#### `ApiEntitiesProjectsTopic(data?: object)`

Create a new `ApiEntitiesProjectsTopic` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesProjectsTopicEntity` instance.

#### `ApiEntitiesProtectedBranch(data?: object)`

Create a new `ApiEntitiesProtectedBranch` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesProtectedBranchEntity` instance.

#### `ApiEntitiesProtectedTag(data?: object)`

Create a new `ApiEntitiesProtectedTag` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesProtectedTagEntity` instance.

#### `ApiEntitiesPublicGroupDetail(data?: object)`

Create a new `ApiEntitiesPublicGroupDetail` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesPublicGroupDetailEntity` instance.

#### `ApiEntitiesRelatedIssue(data?: object)`

Create a new `ApiEntitiesRelatedIssue` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesRelatedIssueEntity` instance.

#### `ApiEntitiesRelationImportTracker(data?: object)`

Create a new `ApiEntitiesRelationImportTracker` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesRelationImportTrackerEntity` instance.

#### `ApiEntitiesRelease(data?: object)`

Create a new `ApiEntitiesRelease` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesReleaseEntity` instance.

#### `ApiEntitiesReleasesLink(data?: object)`

Create a new `ApiEntitiesReleasesLink` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesReleasesLinkEntity` instance.

#### `ApiEntitiesRemoteMirror(data?: object)`

Create a new `ApiEntitiesRemoteMirror` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesRemoteMirrorEntity` instance.

#### `ApiEntitiesRepositoryHealth(data?: object)`

Create a new `ApiEntitiesRepositoryHealth` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesRepositoryHealthEntity` instance.

#### `ApiEntitiesResourceAccessTokenWithToken(data?: object)`

Create a new `ApiEntitiesResourceAccessTokenWithToken` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesResourceAccessTokenWithTokenEntity` instance.

#### `ApiEntitiesResourceMilestoneEvent(data?: object)`

Create a new `ApiEntitiesResourceMilestoneEvent` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesResourceMilestoneEventEntity` instance.

#### `ApiEntitiesSnippet(data?: object)`

Create a new `ApiEntitiesSnippet` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesSnippetEntity` instance.

#### `ApiEntitiesSshKeyWithUser(data?: object)`

Create a new `ApiEntitiesSshKeyWithUser` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesSshKeyWithUserEntity` instance.

#### `ApiEntitiesSuggestion(data?: object)`

Create a new `ApiEntitiesSuggestion` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesSuggestionEntity` instance.

#### `ApiEntitiesSystemBroadcastMessage(data?: object)`

Create a new `ApiEntitiesSystemBroadcastMessage` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesSystemBroadcastMessageEntity` instance.

#### `ApiEntitiesTag(data?: object)`

Create a new `ApiEntitiesTag` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesTagEntity` instance.

#### `ApiEntitiesTagSignature(data?: object)`

Create a new `ApiEntitiesTagSignature` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesTagSignatureEntity` instance.

#### `ApiEntitiesTemplatesList(data?: object)`

Create a new `ApiEntitiesTemplatesList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesTemplatesListEntity` instance.

#### `ApiEntitiesTerraformModuleVersion(data?: object)`

Create a new `ApiEntitiesTerraformModuleVersion` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesTerraformModuleVersionEntity` instance.

#### `ApiEntitiesTreeObject(data?: object)`

Create a new `ApiEntitiesTreeObject` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesTreeObjectEntity` instance.

#### `ApiEntitiesTrigger(data?: object)`

Create a new `ApiEntitiesTrigger` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesTriggerEntity` instance.

#### `ApiEntitiesUserAgentDetail(data?: object)`

Create a new `ApiEntitiesUserAgentDetail` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesUserAgentDetailEntity` instance.

#### `ApiEntitiesUserCount(data?: object)`

Create a new `ApiEntitiesUserCount` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesUserCountEntity` instance.

#### `ApiEntitiesUserPublic(data?: object)`

Create a new `ApiEntitiesUserPublic` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesUserPublicEntity` instance.

#### `ApiEntitiesUserWithAdmin(data?: object)`

Create a new `ApiEntitiesUserWithAdmin` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesUserWithAdminEntity` instance.

#### `ApiEntitiesWikiAttachment(data?: object)`

Create a new `ApiEntitiesWikiAttachment` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesWikiAttachmentEntity` instance.

#### `ApiEntitiesWikiPage(data?: object)`

Create a new `ApiEntitiesWikiPage` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesWikiPageEntity` instance.

#### `ApiEntitiesWikiPageBasic(data?: object)`

Create a new `ApiEntitiesWikiPageBasic` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntitiesWikiPageBasicEntity` instance.

#### `Application(data?: object)`

Create a new `Application` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApplicationEntity` instance.

#### `AwardEmoji(data?: object)`

Create a new `AwardEmoji` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AwardEmojiEntity` instance.

#### `Badge(data?: object)`

Create a new `Badge` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BadgeEntity` instance.

#### `Branch(data?: object)`

Create a new `Branch` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BranchEntity` instance.

#### `CargoPackage(data?: object)`

Create a new `CargoPackage` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CargoPackageEntity` instance.

#### `CiVariable(data?: object)`

Create a new `CiVariable` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CiVariableEntity` instance.

#### `Cluster(data?: object)`

Create a new `Cluster` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ClusterEntity` instance.

#### `ClusterAgent(data?: object)`

Create a new `ClusterAgent` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ClusterAgentEntity` instance.

#### `Composer(data?: object)`

Create a new `Composer` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ComposerEntity` instance.

#### `ComposerPackage(data?: object)`

Create a new `ComposerPackage` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ComposerPackageEntity` instance.

#### `Conan(data?: object)`

Create a new `Conan` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ConanEntity` instance.

#### `ConanPackage(data?: object)`

Create a new `ConanPackage` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ConanPackageEntity` instance.

#### `ContainerRegistry(data?: object)`

Create a new `ContainerRegistry` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ContainerRegistryEntity` instance.

#### `ContainerRegistryEvent(data?: object)`

Create a new `ContainerRegistryEvent` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ContainerRegistryEventEntity` instance.

#### `CustomAttribute(data?: object)`

Create a new `CustomAttribute` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CustomAttributeEntity` instance.

#### `Debian(data?: object)`

Create a new `Debian` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DebianEntity` instance.

#### `DebianDistribution(data?: object)`

Create a new `DebianDistribution` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DebianDistributionEntity` instance.

#### `DebianPackage(data?: object)`

Create a new `DebianPackage` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DebianPackageEntity` instance.

#### `DependencyProxy(data?: object)`

Create a new `DependencyProxy` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DependencyProxyEntity` instance.

#### `DeployKey(data?: object)`

Create a new `DeployKey` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DeployKeyEntity` instance.

#### `DeployToken(data?: object)`

Create a new `DeployToken` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DeployTokenEntity` instance.

#### `Deployment(data?: object)`

Create a new `Deployment` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DeploymentEntity` instance.

#### `EeApiEntitiesApprovalState(data?: object)`

Create a new `EeApiEntitiesApprovalState` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EeApiEntitiesApprovalStateEntity` instance.

#### `EeApiEntitiesAuditEvent(data?: object)`

Create a new `EeApiEntitiesAuditEvent` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EeApiEntitiesAuditEventEntity` instance.

#### `EeApiEntitiesBillableMembership(data?: object)`

Create a new `EeApiEntitiesBillableMembership` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EeApiEntitiesBillableMembershipEntity` instance.

#### `EeApiEntitiesGeoNodeStatus(data?: object)`

Create a new `EeApiEntitiesGeoNodeStatus` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EeApiEntitiesGeoNodeStatusEntity` instance.

#### `EeApiEntitiesGeoPipelineRef(data?: object)`

Create a new `EeApiEntitiesGeoPipelineRef` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EeApiEntitiesGeoPipelineRefEntity` instance.

#### `EeApiEntitiesIssuableMetricImage(data?: object)`

Create a new `EeApiEntitiesIssuableMetricImage` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EeApiEntitiesIssuableMetricImageEntity` instance.

#### `EeApiEntitiesMergeRequestApprovalState(data?: object)`

Create a new `EeApiEntitiesMergeRequestApprovalState` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EeApiEntitiesMergeRequestApprovalStateEntity` instance.

#### `EeApiEntitiesSshCertificate(data?: object)`

Create a new `EeApiEntitiesSshCertificate` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EeApiEntitiesSshCertificateEntity` instance.

#### `Environment(data?: object)`

Create a new `Environment` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EnvironmentEntity` instance.

#### `ErrorTrackingClientKey(data?: object)`

Create a new `ErrorTrackingClientKey` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ErrorTrackingClientKeyEntity` instance.

#### `Feature(data?: object)`

Create a new `Feature` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `FeatureEntity` instance.

#### `FeatureFlag(data?: object)`

Create a new `FeatureFlag` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `FeatureFlagEntity` instance.

#### `FeatureFlagsUserList(data?: object)`

Create a new `FeatureFlagsUserList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `FeatureFlagsUserListEntity` instance.

#### `FreezePeriod(data?: object)`

Create a new `FreezePeriod` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `FreezePeriodEntity` instance.

#### `GenericPackage(data?: object)`

Create a new `GenericPackage` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GenericPackageEntity` instance.

#### `Geo(data?: object)`

Create a new `Geo` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GeoEntity` instance.

#### `GoProxy(data?: object)`

Create a new `GoProxy` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GoProxyEntity` instance.

#### `Group(data?: object)`

Create a new `Group` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GroupEntity` instance.

#### `GroupAvatar(data?: object)`

Create a new `GroupAvatar` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GroupAvatarEntity` instance.

#### `GroupExport(data?: object)`

Create a new `GroupExport` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GroupExportEntity` instance.

#### `GroupImport(data?: object)`

Create a new `GroupImport` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GroupImportEntity` instance.

#### `HelmPackage(data?: object)`

Create a new `HelmPackage` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `HelmPackageEntity` instance.

#### `Hook(data?: object)`

Create a new `Hook` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `HookEntity` instance.

#### `Import(data?: object)`

Create a new `Import` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ImportEntity` instance.

#### `Integration(data?: object)`

Create a new `Integration` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IntegrationEntity` instance.

#### `Invitation(data?: object)`

Create a new `Invitation` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `InvitationEntity` instance.

#### `IssueLink(data?: object)`

Create a new `IssueLink` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IssueLinkEntity` instance.

#### `IssuesStatistic(data?: object)`

Create a new `IssuesStatistic` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IssuesStatisticEntity` instance.

#### `Job(data?: object)`

Create a new `Job` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `JobEntity` instance.

#### `MavenPackage(data?: object)`

Create a new `MavenPackage` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MavenPackageEntity` instance.

#### `Member(data?: object)`

Create a new `Member` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MemberEntity` instance.

#### `MergeRequest(data?: object)`

Create a new `MergeRequest` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MergeRequestEntity` instance.

#### `Metadata(data?: object)`

Create a new `Metadata` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MetadataEntity` instance.

#### `Migration(data?: object)`

Create a new `Migration` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MigrationEntity` instance.

#### `MlModelRegistry(data?: object)`

Create a new `MlModelRegistry` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MlModelRegistryEntity` instance.

#### `Namespace(data?: object)`

Create a new `Namespace` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `NamespaceEntity` instance.

#### `Npm(data?: object)`

Create a new `Npm` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `NpmEntity` instance.

#### `NpmPackage(data?: object)`

Create a new `NpmPackage` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `NpmPackageEntity` instance.

#### `Nuget(data?: object)`

Create a new `Nuget` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `NugetEntity` instance.

#### `NugetPackage(data?: object)`

Create a new `NugetPackage` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `NugetPackageEntity` instance.

#### `PackageFile(data?: object)`

Create a new `PackageFile` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PackageFileEntity` instance.

#### `Page(data?: object)`

Create a new `Page` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PageEntity` instance.

#### `Participant(data?: object)`

Create a new `Participant` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ParticipantEntity` instance.

#### `PersonalAccessToken(data?: object)`

Create a new `PersonalAccessToken` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PersonalAccessTokenEntity` instance.

#### `Project(data?: object)`

Create a new `Project` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProjectEntity` instance.

#### `ProjectAvatar(data?: object)`

Create a new `ProjectAvatar` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProjectAvatarEntity` instance.

#### `ProjectEntity(data?: object)`

Create a new `ProjectEntity` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProjectEntityEntity` instance.

#### `ProjectExport(data?: object)`

Create a new `ProjectExport` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProjectExportEntity` instance.

#### `ProjectHook(data?: object)`

Create a new `ProjectHook` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProjectHookEntity` instance.

#### `ProjectImport(data?: object)`

Create a new `ProjectImport` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProjectImportEntity` instance.

#### `ProjectImportEntity(data?: object)`

Create a new `ProjectImportEntity` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProjectImportEntityEntity` instance.

#### `ProjectPackage(data?: object)`

Create a new `ProjectPackage` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProjectPackageEntity` instance.

#### `ProjectSnippet(data?: object)`

Create a new `ProjectSnippet` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProjectSnippetEntity` instance.

#### `ProjectsJobTokenScope(data?: object)`

Create a new `ProjectsJobTokenScope` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProjectsJobTokenScopeEntity` instance.

#### `ProtectedTag(data?: object)`

Create a new `ProtectedTag` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProtectedTagEntity` instance.

#### `Pypi(data?: object)`

Create a new `Pypi` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PypiEntity` instance.

#### `PypiPackage(data?: object)`

Create a new `PypiPackage` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PypiPackageEntity` instance.

#### `Release(data?: object)`

Create a new `Release` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ReleaseEntity` instance.

#### `ReleaseLink(data?: object)`

Create a new `ReleaseLink` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ReleaseLinkEntity` instance.

#### `RemoteMirror(data?: object)`

Create a new `RemoteMirror` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RemoteMirrorEntity` instance.

#### `Rpm(data?: object)`

Create a new `Rpm` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RpmEntity` instance.

#### `RpmPackage(data?: object)`

Create a new `RpmPackage` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RpmPackageEntity` instance.

#### `Rubygem(data?: object)`

Create a new `Rubygem` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RubygemEntity` instance.

#### `RubygemPackage(data?: object)`

Create a new `RubygemPackage` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RubygemPackageEntity` instance.

#### `Runner(data?: object)`

Create a new `Runner` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RunnerEntity` instance.

#### `Search(data?: object)`

Create a new `Search` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SearchEntity` instance.

#### `SecureFile(data?: object)`

Create a new `SecureFile` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SecureFileEntity` instance.

#### `Slack(data?: object)`

Create a new `Slack` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SlackEntity` instance.

#### `Snippet(data?: object)`

Create a new `Snippet` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SnippetEntity` instance.

#### `Starrer(data?: object)`

Create a new `Starrer` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `StarrerEntity` instance.

#### `SystemHook(data?: object)`

Create a new `SystemHook` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SystemHookEntity` instance.

#### `Tag(data?: object)`

Create a new `Tag` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TagEntity` instance.

#### `TerraformRegistry(data?: object)`

Create a new `TerraformRegistry` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TerraformRegistryEntity` instance.

#### `TerraformState(data?: object)`

Create a new `TerraformState` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TerraformStateEntity` instance.

#### `TestReport(data?: object)`

Create a new `TestReport` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TestReportEntity` instance.

#### `TestReportSummary(data?: object)`

Create a new `TestReportSummary` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TestReportSummaryEntity` instance.

#### `Topic(data?: object)`

Create a new `Topic` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TopicEntity` instance.

#### `UnleashApi(data?: object)`

Create a new `UnleashApi` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UnleashApiEntity` instance.

#### `UsageData(data?: object)`

Create a new `UsageData` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UsageDataEntity` instance.

#### `User(data?: object)`

Create a new `User` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UserEntity` instance.

#### `WebCommit(data?: object)`

Create a new `WebCommit` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WebCommitEntity` instance.

#### `Wiki(data?: object)`

Create a new `Wiki` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WikiEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `GitlabSDK.test()`.

**Returns:** `GitlabSDK` instance in test mode.


---

## AccessRequestEntity

```ts
const access_request = client.AccessRequest()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.AccessRequest().remove({ id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AccessRequestEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AlertManagementEntity

```ts
const alert_management = client.AlertManagement()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.AlertManagement().create({
  alert_management_alert_id: /* string */,
  project_id: /* string */,
})
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.AlertManagement().remove({ alert_management_alert_id: 'alert_management_alert_id', metric_image_id: 'metric_image_id', project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AlertManagementEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesAccessRequesterEntity

```ts
const api_entities_access_requester = client.ApiEntitiesAccessRequester()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_path` | `string` | No |  |
| `avatar_url` | `string` | No |  |
| `custom_attribute` | `any[]` | No |  |
| `id` | `number` | No |  |
| `key` | `string` | No |  |
| `locked` | `boolean` | No |  |
| `name` | `string` | No |  |
| `public_email` | `string` | No |  |
| `requested_at` | `string` | No |  |
| `state` | `string` | No |  |
| `username` | `string` | No |  |
| `value` | `string` | No |  |
| `web_url` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiEntitiesAccessRequester().create({
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiEntitiesAccessRequester().list()
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ApiEntitiesAccessRequester().update({
  access_request_id: 'access_request_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesAccessRequesterEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesAppearanceEntity

```ts
const api_entities_appearance = client.ApiEntitiesAppearance()
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesAppearance().load()
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ApiEntitiesAppearance().update({
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesAppearanceEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesApplicationEntity

```ts
const api_entities_application = client.ApiEntitiesApplication()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `application_id` | `string` | No |  |
| `application_name` | `string` | No |  |
| `callback_url` | `string` | No |  |
| `confidential` | `boolean` | No |  |
| `id` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiEntitiesApplication().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesApplicationEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesApplicationStatisticEntity

```ts
const api_entities_application_statistic = client.ApiEntitiesApplicationStatistic()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_user` | `number` | No |  |
| `fork` | `number` | No |  |
| `group` | `number` | No |  |
| `issue` | `number` | No |  |
| `merge_request` | `number` | No |  |
| `milestone` | `number` | No |  |
| `note` | `number` | No |  |
| `project` | `number` | No |  |
| `snippet` | `number` | No |  |
| `ssh_key` | `number` | No |  |
| `user` | `number` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesApplicationStatistic().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesApplicationStatisticEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesApplicationWithSecretEntity

```ts
const api_entities_application_with_secret = client.ApiEntitiesApplicationWithSecret()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `application_id` | `string` | No |  |
| `application_name` | `string` | No |  |
| `callback_url` | `string` | No |  |
| `confidential` | `boolean` | No |  |
| `id` | `string` | No |  |
| `secret` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiEntitiesApplicationWithSecret().create({
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesApplicationWithSecretEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesAvatarEntity

```ts
const api_entities_avatar = client.ApiEntitiesAvatar()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_url` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesAvatar().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesAvatarEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesAwardEmojiEntity

```ts
const api_entities_award_emoji = client.ApiEntitiesAwardEmoji()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `awardable_id` | `number` | No |  |
| `awardable_type` | `string` | No |  |
| `created_at` | `string` | No |  |
| `id` | `number` | No |  |
| `name` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `url` | `string` | No |  |
| `user` | `Record<string, any>` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiEntitiesAwardEmoji().create({
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiEntitiesAwardEmoji().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesAwardEmoji().load({ id: 'api_entities_award_emoji_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesAwardEmojiEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesBadgeEntity

```ts
const api_entities_badge = client.ApiEntitiesBadge()
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiEntitiesBadge().create({
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiEntitiesBadge().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesBadge().load({ id: 'api_entities_badge_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ApiEntitiesBadge().update({
  id: 'api_entities_badge_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesBadgeEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesBasicBadgeDetailEntity

```ts
const api_entities_basic_badge_detail = client.ApiEntitiesBasicBadgeDetail()
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesBasicBadgeDetail().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesBasicBadgeDetailEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesBasicGroupDetailEntity

```ts
const api_entities_basic_group_detail = client.ApiEntitiesBasicGroupDetail()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiEntitiesBasicGroupDetail().create({
  project_id: /* string */,
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesBasicGroupDetailEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesBasicProjectDetailEntity

```ts
const api_entities_basic_project_detail = client.ApiEntitiesBasicProjectDetail()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_url` | `string` | No |  |
| `created_at` | `string` | No |  |
| `custom_attribute` | `Record<string, any>` | No |  |
| `default_branch` | `string` | No |  |
| `description` | `string` | No |  |
| `forks_count` | `number` | No |  |
| `http_url_to_repo` | `string` | No |  |
| `id` | `number` | No |  |
| `last_activity_at` | `string` | No |  |
| `license` | `Record<string, any>` | No |  |
| `license_url` | `string` | No |  |
| `name` | `string` | No |  |
| `name_with_namespace` | `string` | No |  |
| `namespace` | `Record<string, any>` | No |  |
| `path` | `string` | No |  |
| `path_with_namespace` | `string` | No |  |
| `readme_url` | `string` | No |  |
| `repository_storage` | `string` | No |  |
| `ssh_url_to_repo` | `string` | No |  |
| `star_count` | `number` | No |  |
| `tag_list` | `any[]` | No |  |
| `topic` | `any[]` | No |  |
| `visibility` | `string` | No |  |
| `web_url` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiEntitiesBasicProjectDetail().create({
  project_id: /* string */,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiEntitiesBasicProjectDetail().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesBasicProjectDetailEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesBasicRefEntity

```ts
const api_entities_basic_ref = client.ApiEntitiesBasicRef()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | No |  |
| `type` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiEntitiesBasicRef().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesBasicRefEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesBasicSuccessEntity

```ts
const api_entities_basic_success = client.ApiEntitiesBasicSuccess()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiEntitiesBasicSuccess().create({
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesBasicSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesBatchedBackgroundMigrationEntity

```ts
const api_entities_batched_background_migration = client.ApiEntitiesBatchedBackgroundMigration()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `column_name` | `string` | No |  |
| `created_at` | `string` | No |  |
| `id` | `string` | No |  |
| `job_class_name` | `string` | No |  |
| `progress` | `number` | No |  |
| `status` | `string` | No |  |
| `table_name` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiEntitiesBatchedBackgroundMigration().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesBatchedBackgroundMigration().load({ id: 'api_entities_batched_background_migration_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ApiEntitiesBatchedBackgroundMigration().update({
  batched_background_migration_id: 'batched_background_migration_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesBatchedBackgroundMigrationEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesBranchEntity

```ts
const api_entities_branch = client.ApiEntitiesBranch()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `can_push` | `boolean` | No |  |
| `commit` | `Record<string, any>` | No |  |
| `default` | `boolean` | No |  |
| `developers_can_merge` | `boolean` | No |  |
| `developers_can_push` | `boolean` | No |  |
| `merged` | `boolean` | No |  |
| `name` | `string` | No |  |
| `protected` | `boolean` | No |  |
| `web_url` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiEntitiesBranch().create({
  project_id: /* string */,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiEntitiesBranch().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesBranch().load({ id: 'api_entities_branch_id', project_id: 'project_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ApiEntitiesBranch().update({
  branch_id: 'branch_id',
  project_id: 'project_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesBranchEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesBulkImportEntity

```ts
const api_entities_bulk_import = client.ApiEntitiesBulkImport()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bulk_import_id` | `number` | No |  |
| `created_at` | `string` | No |  |
| `destination_full_path` | `string` | No |  |
| `destination_name` | `string` | No |  |
| `destination_namespace` | `string` | No |  |
| `destination_slug` | `string` | No |  |
| `entity_type` | `string` | No |  |
| `failure` | `any[]` | No |  |
| `has_failure` | `boolean` | No |  |
| `id` | `number` | No |  |
| `migrate_membership` | `boolean` | No |  |
| `migrate_project` | `boolean` | No |  |
| `namespace_id` | `number` | No |  |
| `parent_id` | `number` | No |  |
| `project_id` | `number` | No |  |
| `source_full_path` | `string` | No |  |
| `source_type` | `string` | No |  |
| `source_url` | `string` | No |  |
| `stat` | `Record<string, any>` | No |  |
| `status` | `string` | No |  |
| `updated_at` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiEntitiesBulkImport().create({
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiEntitiesBulkImport().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesBulkImport().load({ id: 'api_entities_bulk_import_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesBulkImportEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesBulkImportsEntityFailureEntity

```ts
const api_entities_bulk_imports_entity_failure = client.ApiEntitiesBulkImportsEntityFailure()
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesBulkImportsEntityFailure().load({ bulk_import_id: 'bulk_import_id', entity_id: 'entity_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesBulkImportsEntityFailureEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesBulkImportsExportStatusEntity

```ts
const api_entities_bulk_imports_export_status = client.ApiEntitiesBulkImportsExportStatus()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `batch` | `Record<string, any>` | No |  |
| `batched` | `boolean` | No |  |
| `batches_count` | `number` | No |  |
| `error` | `string` | No |  |
| `relation` | `string` | No |  |
| `status` | `string` | No |  |
| `total_objects_count` | `number` | No |  |
| `updated_at` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiEntitiesBulkImportsExportStatus().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesBulkImportsExportStatusEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesChangelogEntity

```ts
const api_entities_changelog = client.ApiEntitiesChangelog()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `note` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesChangelog().load({ project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesChangelogEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesCiBridgeEntity

```ts
const api_entities_ci_bridge = client.ApiEntitiesCiBridge()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_failure` | `boolean` | No |  |
| `commit` | `Record<string, any>` | No |  |
| `coverage` | `number` | No |  |
| `created_at` | `string` | No |  |
| `downstream_pipeline` | `Record<string, any>` | No |  |
| `duration` | `number` | No |  |
| `erased_at` | `string` | No |  |
| `failure_reason` | `string` | No |  |
| `finished_at` | `string` | No |  |
| `id` | `number` | No |  |
| `name` | `string` | No |  |
| `pipeline` | `Record<string, any>` | No |  |
| `project` | `Record<string, any>` | No |  |
| `queued_duration` | `number` | No |  |
| `ref` | `string` | No |  |
| `stage` | `string` | No |  |
| `started_at` | `string` | No |  |
| `status` | `string` | No |  |
| `tag` | `boolean` | No |  |
| `user` | `Record<string, any>` | No |  |
| `web_url` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiEntitiesCiBridge().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesCiBridgeEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesCiCatalogResourcesVersionEntity

```ts
const api_entities_ci_catalog_resources_version = client.ApiEntitiesCiCatalogResourcesVersion()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiEntitiesCiCatalogResourcesVersion().create({
  project_id: /* string */,
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesCiCatalogResourcesVersionEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesCiJobEntity

```ts
const api_entities_ci_job = client.ApiEntitiesCiJob()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_failure` | `boolean` | No |  |
| `archived` | `boolean` | No |  |
| `artifact` | `any[]` | No |  |
| `artifacts_expire_at` | `string` | No |  |
| `artifacts_file` | `Record<string, any>` | No |  |
| `commit` | `Record<string, any>` | No |  |
| `coverage` | `number` | No |  |
| `created_at` | `string` | No |  |
| `duration` | `number` | No |  |
| `erased_at` | `string` | No |  |
| `failure_reason` | `string` | No |  |
| `file_format` | `string` | No |  |
| `file_type` | `string` | No |  |
| `filename` | `string` | No |  |
| `finished_at` | `string` | No |  |
| `id` | `number` | No |  |
| `name` | `string` | No |  |
| `pipeline` | `Record<string, any>` | No |  |
| `project` | `Record<string, any>` | No |  |
| `queued_duration` | `number` | No |  |
| `ref` | `string` | No |  |
| `runner` | `Record<string, any>` | No |  |
| `runner_manager` | `Record<string, any>` | No |  |
| `size` | `number` | No |  |
| `stage` | `string` | No |  |
| `started_at` | `string` | No |  |
| `status` | `string` | No |  |
| `tag` | `boolean` | No |  |
| `tag_list` | `any[]` | No |  |
| `user` | `Record<string, any>` | No |  |
| `web_url` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiEntitiesCiJob().create({
  job_id: /* string */,
  project_id: /* string */,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiEntitiesCiJob().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesCiJob().load({ id: 'api_entities_ci_job_id', project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesCiJobEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesCiJobBasicEntity

```ts
const api_entities_ci_job_basic = client.ApiEntitiesCiJobBasic()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_failure` | `boolean` | No |  |
| `commit` | `Record<string, any>` | No |  |
| `coverage` | `number` | No |  |
| `created_at` | `string` | No |  |
| `duration` | `number` | No |  |
| `erased_at` | `string` | No |  |
| `failure_reason` | `string` | No |  |
| `finished_at` | `string` | No |  |
| `id` | `number` | No |  |
| `name` | `string` | No |  |
| `pipeline` | `Record<string, any>` | No |  |
| `project` | `Record<string, any>` | No |  |
| `queued_duration` | `number` | No |  |
| `ref` | `string` | No |  |
| `stage` | `string` | No |  |
| `started_at` | `string` | No |  |
| `status` | `string` | No |  |
| `tag` | `boolean` | No |  |
| `user` | `Record<string, any>` | No |  |
| `web_url` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiEntitiesCiJobBasic().create({
  job_id: /* string */,
  project_id: /* string */,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiEntitiesCiJobBasic().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesCiJobBasicEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesCiJobBasicWithProjectEntity

```ts
const api_entities_ci_job_basic_with_project = client.ApiEntitiesCiJobBasicWithProject()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_failure` | `boolean` | No |  |
| `commit` | `Record<string, any>` | No |  |
| `coverage` | `number` | No |  |
| `created_at` | `string` | No |  |
| `duration` | `number` | No |  |
| `erased_at` | `string` | No |  |
| `failure_reason` | `string` | No |  |
| `finished_at` | `string` | No |  |
| `id` | `number` | No |  |
| `name` | `string` | No |  |
| `pipeline` | `Record<string, any>` | No |  |
| `project` | `Record<string, any>` | No |  |
| `queued_duration` | `number` | No |  |
| `ref` | `string` | No |  |
| `stage` | `string` | No |  |
| `started_at` | `string` | No |  |
| `status` | `string` | No |  |
| `tag` | `boolean` | No |  |
| `user` | `Record<string, any>` | No |  |
| `web_url` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesCiJobBasicWithProject().load({ runner_id: 'runner_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesCiJobBasicWithProjectEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesCiLintResultEntity

```ts
const api_entities_ci_lint_result = client.ApiEntitiesCiLintResult()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `blob` | `string` | No |  |
| `context_project` | `string` | No |  |
| `context_sha` | `string` | No |  |
| `error` | `any[]` | No |  |
| `extra` | `Record<string, any>` | No |  |
| `include` | `any[]` | No |  |
| `job` | `any[]` | No |  |
| `location` | `string` | No |  |
| `merged_yaml` | `string` | No |  |
| `raw` | `string` | No |  |
| `type` | `string` | No |  |
| `valid` | `boolean` | No |  |
| `warning` | `any[]` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiEntitiesCiLintResult().create({
  project_id: /* string */,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiEntitiesCiLintResult().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesCiLintResultEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesCiPipelineEntity

```ts
const api_entities_ci_pipeline = client.ApiEntitiesCiPipeline()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiEntitiesCiPipeline().create({
  project_id: /* string */,
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesCiPipelineEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesCiPipelineBasicEntity

```ts
const api_entities_ci_pipeline_basic = client.ApiEntitiesCiPipelineBasic()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No |  |
| `id` | `number` | No |  |
| `iid` | `number` | No |  |
| `project_id` | `number` | No |  |
| `ref` | `string` | No |  |
| `sha` | `string` | No |  |
| `source` | `string` | No |  |
| `status` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `web_url` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiEntitiesCiPipelineBasic().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesCiPipelineBasic().load({ merge_request_id: 'merge_request_id', project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesCiPipelineBasicEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesCiPipelineScheduleEntity

```ts
const api_entities_ci_pipeline_schedule = client.ApiEntitiesCiPipelineSchedule()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | No |  |
| `created_at` | `string` | No |  |
| `cron` | `string` | No |  |
| `cron_timezone` | `string` | No |  |
| `description` | `string` | No |  |
| `id` | `number` | No |  |
| `input` | `Record<string, any>` | No |  |
| `next_run_at` | `string` | No |  |
| `owner` | `Record<string, any>` | No |  |
| `ref` | `string` | No |  |
| `updated_at` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiEntitiesCiPipelineSchedule().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesCiPipelineScheduleEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesCiPipelineScheduleDetailEntity

```ts
const api_entities_ci_pipeline_schedule_detail = client.ApiEntitiesCiPipelineScheduleDetail()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | No |  |
| `created_at` | `string` | No |  |
| `cron` | `string` | No |  |
| `cron_timezone` | `string` | No |  |
| `description` | `string` | No |  |
| `id` | `number` | No |  |
| `input` | `Record<string, any>` | No |  |
| `last_pipeline` | `Record<string, any>` | No |  |
| `next_run_at` | `string` | No |  |
| `owner` | `Record<string, any>` | No |  |
| `ref` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `variable` | `Record<string, any>` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiEntitiesCiPipelineScheduleDetail().create({
  project_id: /* string */,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesCiPipelineScheduleDetail().load({ pipeline_schedule_id: 'pipeline_schedule_id', project_id: 'project_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ApiEntitiesCiPipelineScheduleDetail().update({
  pipeline_schedule_id: 'pipeline_schedule_id',
  project_id: 'project_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesCiPipelineScheduleDetailEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesCiResetTokenResultEntity

```ts
const api_entities_ci_reset_token_result = client.ApiEntitiesCiResetTokenResult()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiEntitiesCiResetTokenResult().create({
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesCiResetTokenResultEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesCiResourceGroupEntity

```ts
const api_entities_ci_resource_group = client.ApiEntitiesCiResourceGroup()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No |  |
| `id` | `number` | No |  |
| `key` | `string` | No |  |
| `process_mode` | `string` | No |  |
| `updated_at` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiEntitiesCiResourceGroup().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesCiResourceGroup().load({ id: 'api_entities_ci_resource_group_id', project_id: 'project_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ApiEntitiesCiResourceGroup().update({
  id: 'api_entities_ci_resource_group_id',
  project_id: 'project_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesCiResourceGroupEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesCiRunnerEntity

```ts
const api_entities_ci_runner = client.ApiEntitiesCiRunner()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | No |  |
| `created_at` | `string` | No |  |
| `created_by` | `Record<string, any>` | No |  |
| `description` | `string` | No |  |
| `id` | `number` | No |  |
| `ip_address` | `string` | No |  |
| `is_shared` | `boolean` | No |  |
| `job_execution_status` | `string` | No |  |
| `name` | `string` | No |  |
| `online` | `boolean` | No |  |
| `paused` | `boolean` | No |  |
| `runner_type` | `string` | No |  |
| `status` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiEntitiesCiRunner().create({
  project_id: /* string */,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesCiRunner().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesCiRunnerEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesCiRunnerDetailEntity

```ts
const api_entities_ci_runner_detail = client.ApiEntitiesCiRunnerDetail()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access_level` | `string` | No |  |
| `active` | `boolean` | No |  |
| `architecture` | `string` | No |  |
| `contacted_at` | `string` | No |  |
| `created_at` | `string` | No |  |
| `created_by` | `Record<string, any>` | No |  |
| `description` | `string` | No |  |
| `group` | `Record<string, any>` | No |  |
| `id` | `number` | No |  |
| `ip_address` | `string` | No |  |
| `is_shared` | `boolean` | No |  |
| `job_execution_status` | `string` | No |  |
| `locked` | `boolean` | No |  |
| `maintenance_note` | `string` | No |  |
| `maximum_timeout` | `string` | No |  |
| `name` | `string` | No |  |
| `online` | `boolean` | No |  |
| `paused` | `boolean` | No |  |
| `platform` | `string` | No |  |
| `project` | `Record<string, any>` | No |  |
| `revision` | `string` | No |  |
| `run_untagged` | `string` | No |  |
| `runner_type` | `string` | No |  |
| `status` | `string` | No |  |
| `tag_list` | `string` | No |  |
| `version` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesCiRunnerDetail().load({ id: 'api_entities_ci_runner_detail_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ApiEntitiesCiRunnerDetail().update({
  id: 'api_entities_ci_runner_detail_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesCiRunnerDetailEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesCiRunnerManagerEntity

```ts
const api_entities_ci_runner_manager = client.ApiEntitiesCiRunnerManager()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `architecture` | `string` | No |  |
| `contacted_at` | `string` | No |  |
| `created_at` | `string` | No |  |
| `id` | `number` | No |  |
| `ip_address` | `string` | No |  |
| `job_execution_status` | `string` | No |  |
| `platform` | `string` | No |  |
| `revision` | `string` | No |  |
| `status` | `string` | No |  |
| `system_id` | `string` | No |  |
| `version` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesCiRunnerManager().load({ runner_id: 'runner_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesCiRunnerManagerEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesCiRunnerRegistrationDetailEntity

```ts
const api_entities_ci_runner_registration_detail = client.ApiEntitiesCiRunnerRegistrationDetail()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiEntitiesCiRunnerRegistrationDetail().create({
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesCiRunnerRegistrationDetailEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesCiSecureFileEntity

```ts
const api_entities_ci_secure_file = client.ApiEntitiesCiSecureFile()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `checksum` | `string` | No |  |
| `checksum_algorithm` | `string` | No |  |
| `created_at` | `string` | No |  |
| `expires_at` | `string` | No |  |
| `file_extension` | `string` | No |  |
| `id` | `number` | No |  |
| `metadata` | `Record<string, any>` | No |  |
| `name` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiEntitiesCiSecureFile().create({
  project_id: /* string */,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesCiSecureFile().load({ id: 'api_entities_ci_secure_file_id', project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesCiSecureFileEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesCiVariableEntity

```ts
const api_entities_ci_variable = client.ApiEntitiesCiVariable()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No |  |
| `environment_scope` | `string` | No |  |
| `hidden` | `boolean` | No |  |
| `key` | `string` | No |  |
| `masked` | `boolean` | No |  |
| `protected` | `boolean` | No |  |
| `raw` | `boolean` | No |  |
| `value` | `string` | No |  |
| `variable_type` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiEntitiesCiVariable().create({
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiEntitiesCiVariable().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesCiVariable().load({ id: 'api_entities_ci_variable_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ApiEntitiesCiVariable().update({
  id: 'api_entities_ci_variable_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesCiVariableEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesClusterEntity

```ts
const api_entities_cluster = client.ApiEntitiesCluster()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cluster_type` | `string` | No |  |
| `created_at` | `string` | No |  |
| `domain` | `string` | No |  |
| `enabled` | `boolean` | No |  |
| `environment_scope` | `string` | No |  |
| `id` | `string` | No |  |
| `managed` | `string` | No |  |
| `management_project` | `Record<string, any>` | No |  |
| `name` | `string` | No |  |
| `namespace_per_environment` | `string` | No |  |
| `platform_kubernete` | `Record<string, any>` | No |  |
| `platform_type` | `string` | No |  |
| `provider_gcp` | `Record<string, any>` | No |  |
| `provider_type` | `string` | No |  |
| `user` | `Record<string, any>` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiEntitiesCluster().create({
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiEntitiesCluster().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesCluster().load({ id: 'api_entities_cluster_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ApiEntitiesCluster().update({
  id: 'api_entities_cluster_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesClusterEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesClusterGroupEntity

```ts
const api_entities_cluster_group = client.ApiEntitiesClusterGroup()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cluster_type` | `string` | No |  |
| `created_at` | `string` | No |  |
| `domain` | `string` | No |  |
| `enabled` | `boolean` | No |  |
| `environment_scope` | `string` | No |  |
| `group` | `Record<string, any>` | No |  |
| `id` | `string` | No |  |
| `managed` | `string` | No |  |
| `management_project` | `Record<string, any>` | No |  |
| `name` | `string` | No |  |
| `namespace_per_environment` | `string` | No |  |
| `platform_kubernete` | `Record<string, any>` | No |  |
| `platform_type` | `string` | No |  |
| `provider_gcp` | `Record<string, any>` | No |  |
| `provider_type` | `string` | No |  |
| `user` | `Record<string, any>` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiEntitiesClusterGroup().create({
  group_id: /* string */,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesClusterGroup().load({ cluster_id: 'cluster_id', group_id: 'group_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ApiEntitiesClusterGroup().update({
  cluster_id: 'cluster_id',
  group_id: 'group_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesClusterGroupEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesClusterProjectEntity

```ts
const api_entities_cluster_project = client.ApiEntitiesClusterProject()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cluster_type` | `string` | No |  |
| `created_at` | `string` | No |  |
| `domain` | `string` | No |  |
| `enabled` | `boolean` | No |  |
| `environment_scope` | `string` | No |  |
| `id` | `string` | No |  |
| `managed` | `string` | No |  |
| `management_project` | `Record<string, any>` | No |  |
| `name` | `string` | No |  |
| `namespace_per_environment` | `string` | No |  |
| `platform_kubernete` | `Record<string, any>` | No |  |
| `platform_type` | `string` | No |  |
| `project` | `Record<string, any>` | No |  |
| `provider_gcp` | `Record<string, any>` | No |  |
| `provider_type` | `string` | No |  |
| `user` | `Record<string, any>` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiEntitiesClusterProject().create({
  project_id: /* string */,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesClusterProject().load({ cluster_id: 'cluster_id', project_id: 'project_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ApiEntitiesClusterProject().update({
  cluster_id: 'cluster_id',
  project_id: 'project_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesClusterProjectEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesClustersAgentEntity

```ts
const api_entities_clusters_agent = client.ApiEntitiesClustersAgent()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `config_project` | `Record<string, any>` | No |  |
| `created_at` | `string` | No |  |
| `created_by_user_id` | `string` | No |  |
| `id` | `string` | No |  |
| `is_receptive` | `boolean` | No |  |
| `name` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiEntitiesClustersAgent().create({
  project_id: /* string */,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesClustersAgent().load({ project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesClustersAgentEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesClustersAgentTokenEntity

```ts
const api_entities_clusters_agent_token = client.ApiEntitiesClustersAgentToken()
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesClustersAgentToken().load({ id: 'api_entities_clusters_agent_token_id', cluster_agent_id: 'cluster_agent_id', project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesClustersAgentTokenEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesClustersAgentTokenBasicEntity

```ts
const api_entities_clusters_agent_token_basic = client.ApiEntitiesClustersAgentTokenBasic()
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesClustersAgentTokenBasic().load({ cluster_agent_id: 'cluster_agent_id', project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesClustersAgentTokenBasicEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesClustersAgentTokenWithTokenEntity

```ts
const api_entities_clusters_agent_token_with_token = client.ApiEntitiesClustersAgentTokenWithToken()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiEntitiesClustersAgentTokenWithToken().create({
  cluster_agent_id: /* string */,
  project_id: /* string */,
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesClustersAgentTokenWithTokenEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesCommitEntity

```ts
const api_entities_commit = client.ApiEntitiesCommit()
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
| `extended_trailer` | `Record<string, any>` | No |  |
| `id` | `string` | No |  |
| `message` | `string` | No |  |
| `parent_id` | `any[]` | No |  |
| `short_id` | `string` | No |  |
| `title` | `string` | No |  |
| `trailer` | `Record<string, any>` | No |  |
| `web_url` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiEntitiesCommit().create({
  project_id: /* string */,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiEntitiesCommit().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesCommitEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesCommitDetailEntity

```ts
const api_entities_commit_detail = client.ApiEntitiesCommitDetail()
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
| `extended_trailer` | `Record<string, any>` | No |  |
| `id` | `string` | No |  |
| `last_pipeline` | `Record<string, any>` | No |  |
| `message` | `string` | No |  |
| `parent_id` | `any[]` | No |  |
| `project_id` | `number` | No |  |
| `short_id` | `string` | No |  |
| `stat` | `Record<string, any>` | No |  |
| `status` | `string` | No |  |
| `title` | `string` | No |  |
| `trailer` | `Record<string, any>` | No |  |
| `web_url` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiEntitiesCommitDetail().create({
  project_id: /* string */,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesCommitDetail().load({ project_id: 'project_id', sha: 'sha' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ApiEntitiesCommitDetail().update({
  project_id: 'project_id',
  submodule: 'submodule',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesCommitDetailEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesCommitNoteEntity

```ts
const api_entities_commit_note = client.ApiEntitiesCommitNote()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `Record<string, any>` | No |  |
| `created_at` | `string` | No |  |
| `line` | `number` | No |  |
| `line_type` | `string` | No |  |
| `note` | `string` | No |  |
| `path` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiEntitiesCommitNote().create({
  project_id: /* string */,
  sha: /* any */,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiEntitiesCommitNote().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesCommitNoteEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesCommitSequenceEntity

```ts
const api_entities_commit_sequence = client.ApiEntitiesCommitSequence()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `number` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesCommitSequence().load({ project_id: 'project_id', sha: 'sha' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesCommitSequenceEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesCommitSignatureEntity

```ts
const api_entities_commit_signature = client.ApiEntitiesCommitSignature()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `commit_source` | `string` | No |  |
| `signature` | `string` | No |  |
| `signature_type` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesCommitSignature().load({ project_id: 'project_id', sha: 'sha' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesCommitSignatureEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesCommitStatusEntity

```ts
const api_entities_commit_status = client.ApiEntitiesCommitStatus()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_failure` | `boolean` | No |  |
| `author` | `Record<string, any>` | No |  |
| `coverage` | `number` | No |  |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `finished_at` | `string` | No |  |
| `id` | `number` | No |  |
| `name` | `string` | No |  |
| `pipeline_id` | `number` | No |  |
| `ref` | `string` | No |  |
| `sha` | `string` | No |  |
| `started_at` | `string` | No |  |
| `status` | `string` | No |  |
| `target_url` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiEntitiesCommitStatus().create({
  id: /* string */,
  project_id: /* string */,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiEntitiesCommitStatus().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesCommitStatusEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesCompareEntity

```ts
const api_entities_compare = client.ApiEntitiesCompare()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `commit` | `Record<string, any>` | No |  |
| `compare_same_ref` | `boolean` | No |  |
| `compare_timeout` | `boolean` | No |  |
| `diff` | `any[]` | No |  |
| `web_url` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiEntitiesCompare().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesCompareEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesContainerRegistryRepositoryEntity

```ts
const api_entities_container_registry_repository = client.ApiEntitiesContainerRegistryRepository()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cleanup_policy_started_at` | `string` | No |  |
| `created_at` | `string` | No |  |
| `delete_api_path` | `string` | No |  |
| `id` | `number` | No |  |
| `location` | `string` | No |  |
| `name` | `string` | No |  |
| `path` | `string` | No |  |
| `project_id` | `number` | No |  |
| `size` | `number` | No |  |
| `status` | `string` | No |  |
| `tag` | `Record<string, any>` | No |  |
| `tags_count` | `number` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiEntitiesContainerRegistryRepository().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesContainerRegistryRepository().load({ id: 'api_entities_container_registry_repository_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesContainerRegistryRepositoryEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesContainerRegistryTagEntity

```ts
const api_entities_container_registry_tag = client.ApiEntitiesContainerRegistryTag()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `location` | `string` | No |  |
| `name` | `string` | No |  |
| `path` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiEntitiesContainerRegistryTag().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesContainerRegistryTagEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesContainerRegistryTagDetailEntity

```ts
const api_entities_container_registry_tag_detail = client.ApiEntitiesContainerRegistryTagDetail()
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
| `total_size` | `number` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesContainerRegistryTagDetail().load({ project_id: 'project_id', repository_id: 'repository_id', tag_name: 'tag_name' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesContainerRegistryTagDetailEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesContributorEntity

```ts
const api_entities_contributor = client.ApiEntitiesContributor()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `addition` | `number` | No |  |
| `commit` | `number` | No |  |
| `deletion` | `number` | No |  |
| `email` | `string` | No |  |
| `name` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesContributor().load({ project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesContributorEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesDeployKeyEntity

```ts
const api_entities_deploy_key = client.ApiEntitiesDeployKey()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No |  |
| `expires_at` | `string` | No |  |
| `fingerprint` | `string` | No |  |
| `fingerprint_sha256` | `string` | No |  |
| `id` | `number` | No |  |
| `key` | `string` | No |  |
| `last_used_at` | `string` | No |  |
| `projects_with_readonly_access` | `Record<string, any>` | No |  |
| `projects_with_write_access` | `Record<string, any>` | No |  |
| `title` | `string` | No |  |
| `usage_type` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiEntitiesDeployKey().create({
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiEntitiesDeployKey().list()
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ApiEntitiesDeployKey().update({
  id: 'id',
  project_id: 'project_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesDeployKeyEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesDeployKeysProjectEntity

```ts
const api_entities_deploy_keys_project = client.ApiEntitiesDeployKeysProject()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `can_push` | `boolean` | No |  |
| `created_at` | `string` | No |  |
| `expires_at` | `string` | No |  |
| `fingerprint` | `string` | No |  |
| `fingerprint_sha256` | `string` | No |  |
| `id` | `number` | No |  |
| `key` | `string` | No |  |
| `last_used_at` | `string` | No |  |
| `projects_with_readonly_access` | `Record<string, any>` | No |  |
| `projects_with_write_access` | `Record<string, any>` | No |  |
| `title` | `string` | No |  |
| `usage_type` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiEntitiesDeployKeysProject().create({
  project_id: /* string */,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiEntitiesDeployKeysProject().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesDeployKeysProject().load({ key_id: 'key_id', project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesDeployKeysProjectEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesDeployTokenEntity

```ts
const api_entities_deploy_token = client.ApiEntitiesDeployToken()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `expired` | `boolean` | No |  |
| `expires_at` | `string` | No |  |
| `id` | `number` | No |  |
| `name` | `string` | No |  |
| `revoked` | `boolean` | No |  |
| `scope` | `any[]` | No |  |
| `username` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiEntitiesDeployToken().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesDeployToken().load({ id: 'api_entities_deploy_token_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesDeployTokenEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesDeployTokenWithTokenEntity

```ts
const api_entities_deploy_token_with_token = client.ApiEntitiesDeployTokenWithToken()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiEntitiesDeployTokenWithToken().create({
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesDeployTokenWithTokenEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesDeploymentEntity

```ts
const api_entities_deployment = client.ApiEntitiesDeployment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No |  |
| `deployable` | `Record<string, any>` | No |  |
| `environment` | `Record<string, any>` | No |  |
| `id` | `number` | No |  |
| `iid` | `number` | No |  |
| `ref` | `string` | No |  |
| `sha` | `string` | No |  |
| `status` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `user` | `Record<string, any>` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiEntitiesDeployment().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesDeploymentEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesDeploymentExtendedEntity

```ts
const api_entities_deployment_extended = client.ApiEntitiesDeploymentExtended()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `approval` | `Record<string, any>` | No |  |
| `approval_summary` | `Record<string, any>` | No |  |
| `created_at` | `string` | No |  |
| `deployable` | `Record<string, any>` | No |  |
| `environment` | `Record<string, any>` | No |  |
| `id` | `number` | No |  |
| `iid` | `number` | No |  |
| `pending_approval_count` | `number` | No |  |
| `ref` | `string` | No |  |
| `sha` | `string` | No |  |
| `status` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `user` | `Record<string, any>` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiEntitiesDeploymentExtended().create({
  project_id: /* string */,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesDeploymentExtended().load({ deployment_id: 'deployment_id', project_id: 'project_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ApiEntitiesDeploymentExtended().update({
  deployment_id: 'deployment_id',
  project_id: 'project_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesDeploymentExtendedEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesDeploymentsApprovalEntity

```ts
const api_entities_deployments_approval = client.ApiEntitiesDeploymentsApproval()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiEntitiesDeploymentsApproval().create({
  deployment_id: /* string */,
  project_id: /* string */,
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesDeploymentsApprovalEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesDictionaryTableEntity

```ts
const api_entities_dictionary_table = client.ApiEntitiesDictionaryTable()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `feature_category` | `any[]` | No |  |
| `table_name` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesDictionaryTable().load({ id: 'api_entities_dictionary_table_id', databas_id: 'databas_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesDictionaryTableEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesDiffEntity

```ts
const api_entities_diff = client.ApiEntitiesDiff()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `a_mode` | `string` | No |  |
| `b_mode` | `string` | No |  |
| `collapsed` | `boolean` | No |  |
| `deleted_file` | `boolean` | No |  |
| `diff` | `string` | No |  |
| `generated_file` | `boolean` | No |  |
| `new_file` | `boolean` | No |  |
| `new_path` | `string` | No |  |
| `old_path` | `string` | No |  |
| `renamed_file` | `boolean` | No |  |
| `too_large` | `boolean` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiEntitiesDiff().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesDiff().load({ merge_request_id: 'merge_request_id', project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesDiffEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesDiscoveredClusterEntity

```ts
const api_entities_discovered_cluster = client.ApiEntitiesDiscoveredCluster()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `group` | `string` | No |  |
| `project` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesDiscoveredCluster().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesDiscoveredClusterEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesDraftNoteEntity

```ts
const api_entities_draft_note = client.ApiEntitiesDraftNote()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author_id` | `number` | No |  |
| `commit_id` | `number` | No |  |
| `discussion_id` | `number` | No |  |
| `id` | `number` | No |  |
| `line_code` | `string` | No |  |
| `merge_request_id` | `number` | No |  |
| `note` | `string` | No |  |
| `position` | `Record<string, any>` | No |  |
| `resolve_discussion` | `boolean` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiEntitiesDraftNote().create({
  merge_request_id: /* string */,
  project_id: /* string */,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiEntitiesDraftNote().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesDraftNote().load({ id: 'api_entities_draft_note_id', merge_request_id: 'merge_request_id', project_id: 'project_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ApiEntitiesDraftNote().update({
  id: 'api_entities_draft_note_id',
  merge_request_id: 'merge_request_id',
  project_id: 'project_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesDraftNoteEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesEnvironmentEntity

```ts
const api_entities_environment = client.ApiEntitiesEnvironment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auto_stop_at` | `string` | No |  |
| `auto_stop_setting` | `string` | No |  |
| `cluster_agent` | `Record<string, any>` | No |  |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `external_url` | `string` | No |  |
| `flux_resource_path` | `string` | No |  |
| `id` | `number` | No |  |
| `kubernetes_namespace` | `string` | No |  |
| `last_deployment` | `Record<string, any>` | No |  |
| `name` | `string` | No |  |
| `project` | `Record<string, any>` | No |  |
| `slug` | `string` | No |  |
| `state` | `string` | No |  |
| `tier` | `string` | No |  |
| `updated_at` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiEntitiesEnvironment().create({
  project_id: /* string */,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiEntitiesEnvironment().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesEnvironment().load({ id: 'api_entities_environment_id', project_id: 'project_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ApiEntitiesEnvironment().update({
  id: 'api_entities_environment_id',
  project_id: 'project_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesEnvironmentEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesErrorTrackingClientKeyEntity

```ts
const api_entities_error_tracking_client_key = client.ApiEntitiesErrorTrackingClientKey()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | No |  |
| `id` | `number` | No |  |
| `public_key` | `string` | No |  |
| `sentry_dsn` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiEntitiesErrorTrackingClientKey().create({
  project_id: /* string */,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiEntitiesErrorTrackingClientKey().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesErrorTrackingClientKeyEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesErrorTrackingProjectSettingEntity

```ts
const api_entities_error_tracking_project_setting = client.ApiEntitiesErrorTrackingProjectSetting()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | No |  |
| `api_url` | `string` | No |  |
| `integrated` | `boolean` | No |  |
| `project_name` | `string` | No |  |
| `sentry_external_url` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesErrorTrackingProjectSetting().load({ project_id: 'project_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ApiEntitiesErrorTrackingProjectSetting().update({
  project_id: 'project_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesErrorTrackingProjectSettingEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesEventEntity

```ts
const api_entities_event = client.ApiEntitiesEvent()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action_name` | `string` | No |  |
| `author` | `Record<string, any>` | No |  |
| `author_id` | `number` | No |  |
| `author_username` | `string` | No |  |
| `created_at` | `string` | No |  |
| `id` | `number` | No |  |
| `imported` | `boolean` | No |  |
| `imported_from` | `string` | No |  |
| `note` | `Record<string, any>` | No |  |
| `project_id` | `number` | No |  |
| `push_data` | `Record<string, any>` | No |  |
| `target_id` | `number` | No |  |
| `target_iid` | `number` | No |  |
| `target_title` | `string` | No |  |
| `target_type` | `string` | No |  |
| `wiki_page` | `Record<string, any>` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiEntitiesEvent().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesEvent().load({ project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesEventEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesFeatureEntity

```ts
const api_entities_feature = client.ApiEntitiesFeature()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `definition` | `Record<string, any>` | No |  |
| `gate` | `Record<string, any>` | No |  |
| `name` | `string` | No |  |
| `state` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiEntitiesFeature().create({
  id: /* string */,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiEntitiesFeature().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesFeatureEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesFeatureDefinitionEntity

```ts
const api_entities_feature_definition = client.ApiEntitiesFeatureDefinition()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiEntitiesFeatureDefinition().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesFeatureDefinitionEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesFeatureFlagEntity

```ts
const api_entities_feature_flag = client.ApiEntitiesFeatureFlag()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | No |  |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `name` | `string` | No |  |
| `scope` | `string` | No |  |
| `strategy` | `Record<string, any>` | No |  |
| `updated_at` | `string` | No |  |
| `version` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiEntitiesFeatureFlag().create({
  project_id: /* string */,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiEntitiesFeatureFlag().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesFeatureFlag().load({ id: 'api_entities_feature_flag_id', project_id: 'project_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ApiEntitiesFeatureFlag().update({
  id: 'api_entities_feature_flag_id',
  project_id: 'project_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesFeatureFlagEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesFeatureFlagUserListEntity

```ts
const api_entities_feature_flag_user_list = client.ApiEntitiesFeatureFlagUserList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No |  |
| `edit_path` | `string` | No |  |
| `id` | `number` | No |  |
| `iid` | `number` | No |  |
| `name` | `string` | No |  |
| `path` | `string` | No |  |
| `project_id` | `number` | No |  |
| `updated_at` | `string` | No |  |
| `user_xid` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiEntitiesFeatureFlagUserList().create({
  project_id: /* string */,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiEntitiesFeatureFlagUserList().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesFeatureFlagUserList().load({ iid: 'iid', project_id: 'project_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ApiEntitiesFeatureFlagUserList().update({
  iid: 'iid',
  project_id: 'project_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesFeatureFlagUserListEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesFreezePeriodEntity

```ts
const api_entities_freeze_period = client.ApiEntitiesFreezePeriod()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No |  |
| `cron_timezone` | `string` | No |  |
| `freeze_end` | `string` | No |  |
| `freeze_start` | `string` | No |  |
| `id` | `number` | No |  |
| `updated_at` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiEntitiesFreezePeriod().create({
  project_id: /* string */,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiEntitiesFreezePeriod().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesFreezePeriod().load({ id: 'api_entities_freeze_period_id', project_id: 'project_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ApiEntitiesFreezePeriod().update({
  id: 'api_entities_freeze_period_id',
  project_id: 'project_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesFreezePeriodEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesGitlabSubscriptionEntity

```ts
const api_entities_gitlab_subscription = client.ApiEntitiesGitlabSubscription()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `billing` | `Record<string, any>` | No |  |
| `plan` | `Record<string, any>` | No |  |
| `usage` | `Record<string, any>` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesGitlabSubscription().load({ namespace_id: 'namespace_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesGitlabSubscriptionEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesGoModuleVersionEntity

```ts
const api_entities_go_module_version = client.ApiEntitiesGoModuleVersion()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `time` | `string` | No |  |
| `version` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesGoModuleVersion().load({ module_version: 'module_version', project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesGoModuleVersionEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesGroupEntity

```ts
const api_entities_group = client.ApiEntitiesGroup()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `boolean` | No |  |
| `auto_devops_enabled` | `string` | No |  |
| `auto_duo_code_review_enabled` | `string` | No |  |
| `avatar_url` | `string` | No |  |
| `created_at` | `string` | No |  |
| `custom_attribute` | `Record<string, any>` | No |  |
| `default_branch` | `string` | No |  |
| `default_branch_protection` | `string` | No |  |
| `default_branch_protection_default` | `string` | No |  |
| `description` | `string` | No |  |
| `duo_core_features_enabled` | `boolean` | No |  |
| `duo_features_enabled` | `string` | No |  |
| `emails_disabled` | `boolean` | No |  |
| `emails_enabled` | `boolean` | No |  |
| `file_template_project_id` | `string` | No |  |
| `full_name` | `string` | No |  |
| `full_path` | `string` | No |  |
| `id` | `string` | No |  |
| `ldap_access` | `string` | No |  |
| `ldap_cn` | `string` | No |  |
| `ldap_group_link` | `Record<string, any>` | No |  |
| `lfs_enabled` | `string` | No |  |
| `lock_duo_features_enabled` | `string` | No |  |
| `lock_math_rendering_limits_enabled` | `boolean` | No |  |
| `marked_for_deletion_on` | `string` | No |  |
| `math_rendering_limits_enabled` | `boolean` | No |  |
| `max_artifacts_size` | `number` | No |  |
| `mentions_disabled` | `string` | No |  |
| `name` | `string` | No |  |
| `organization_id` | `string` | No |  |
| `parent_id` | `string` | No |  |
| `path` | `string` | No |  |
| `project_creation_level` | `string` | No |  |
| `repository_storage` | `string` | No |  |
| `request_access_enabled` | `string` | No |  |
| `require_two_factor_authentication` | `string` | No |  |
| `root_storage_statistic` | `Record<string, any>` | No |  |
| `saml_group_link` | `Record<string, any>` | No |  |
| `share_with_group_lock` | `string` | No |  |
| `shared_runners_setting` | `string` | No |  |
| `show_diff_preview_in_email` | `boolean` | No |  |
| `statistic` | `Record<string, any>` | No |  |
| `subgroup_creation_level` | `string` | No |  |
| `two_factor_grace_period` | `string` | No |  |
| `visibility` | `string` | No |  |
| `web_based_commit_signing_enabled` | `string` | No |  |
| `web_url` | `string` | No |  |
| `wiki_access_level` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiEntitiesGroup().create({
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiEntitiesGroup().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesGroup().load({ project_id: 'project_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ApiEntitiesGroup().update({
  id: 'id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesGroupEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesGroupDetailEntity

```ts
const api_entities_group_detail = client.ApiEntitiesGroupDetail()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowed_email_domains_list` | `string` | No |  |
| `archived` | `boolean` | No |  |
| `auto_ban_user_on_excessive_projects_download` | `string` | No |  |
| `auto_devops_enabled` | `string` | No |  |
| `auto_duo_code_review_enabled` | `string` | No |  |
| `avatar_url` | `string` | No |  |
| `created_at` | `string` | No |  |
| `custom_attribute` | `Record<string, any>` | No |  |
| `default_branch` | `string` | No |  |
| `default_branch_protection` | `string` | No |  |
| `default_branch_protection_default` | `string` | No |  |
| `description` | `string` | No |  |
| `duo_core_features_enabled` | `boolean` | No |  |
| `duo_features_enabled` | `string` | No |  |
| `emails_disabled` | `boolean` | No |  |
| `emails_enabled` | `boolean` | No |  |
| `enabled_git_access_protocol` | `string` | No |  |
| `extra_shared_runners_minutes_limit` | `string` | No |  |
| `file_template_project_id` | `string` | No |  |
| `full_name` | `string` | No |  |
| `full_path` | `string` | No |  |
| `id` | `string` | No |  |
| `ip_restriction_range` | `string` | No |  |
| `ldap_access` | `string` | No |  |
| `ldap_cn` | `string` | No |  |
| `ldap_group_link` | `Record<string, any>` | No |  |
| `lfs_enabled` | `string` | No |  |
| `lock_duo_features_enabled` | `string` | No |  |
| `lock_math_rendering_limits_enabled` | `boolean` | No |  |
| `marked_for_deletion_on` | `string` | No |  |
| `math_rendering_limits_enabled` | `boolean` | No |  |
| `max_artifacts_size` | `number` | No |  |
| `membership_lock` | `string` | No |  |
| `mentions_disabled` | `string` | No |  |
| `name` | `string` | No |  |
| `organization_id` | `string` | No |  |
| `parent_id` | `string` | No |  |
| `path` | `string` | No |  |
| `prevent_forking_outside_group` | `string` | No |  |
| `prevent_sharing_groups_outside_hierarchy` | `string` | No |  |
| `project` | `Record<string, any>` | No |  |
| `project_creation_level` | `string` | No |  |
| `repository_storage` | `string` | No |  |
| `request_access_enabled` | `string` | No |  |
| `require_two_factor_authentication` | `string` | No |  |
| `root_storage_statistic` | `Record<string, any>` | No |  |
| `runners_token` | `string` | No |  |
| `saml_group_link` | `Record<string, any>` | No |  |
| `service_access_tokens_expiration_enforced` | `string` | No |  |
| `share_with_group_lock` | `string` | No |  |
| `shared_project` | `Record<string, any>` | No |  |
| `shared_runners_minutes_limit` | `string` | No |  |
| `shared_runners_setting` | `string` | No |  |
| `shared_with_group` | `string` | No |  |
| `show_diff_preview_in_email` | `boolean` | No |  |
| `statistic` | `Record<string, any>` | No |  |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiEntitiesGroupDetail().create({
  group_id: /* string */,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesGroupDetail().load({ id: 'api_entities_group_detail_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesGroupDetailEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesHookEntity

```ts
const api_entities_hook = client.ApiEntitiesHook()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert_status` | `any` | No |  |
| `branch_filter_strategy` | `string` | No |  |
| `created_at` | `string` | No |  |
| `custom_header` | `any[]` | No |  |
| `custom_webhook_template` | `string` | No |  |
| `description` | `string` | No |  |
| `disabled_until` | `string` | No |  |
| `enable_ssl_verification` | `boolean` | No |  |
| `id` | `string` | No |  |
| `merge_requests_event` | `boolean` | No |  |
| `name` | `string` | No |  |
| `push_event` | `boolean` | No |  |
| `push_events_branch_filter` | `string` | No |  |
| `repository_update_event` | `boolean` | No |  |
| `tag_push_event` | `boolean` | No |  |
| `url` | `string` | No |  |
| `url_variable` | `any[]` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiEntitiesHook().create({
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiEntitiesHook().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesHook().load({ id: 'api_entities_hook_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ApiEntitiesHook().update({
  id: 'api_entities_hook_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesHookEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesIntegrationEntity

```ts
const api_entities_integration = client.ApiEntitiesIntegration()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | No |  |
| `alert_event` | `boolean` | No |  |
| `comment_on_event_enabled` | `boolean` | No |  |
| `commit_event` | `boolean` | No |  |
| `confidential_issues_event` | `boolean` | No |  |
| `confidential_note_event` | `boolean` | No |  |
| `created_at` | `string` | No |  |
| `deployment_event` | `boolean` | No |  |
| `id` | `number` | No |  |
| `incident_event` | `boolean` | No |  |
| `inherited` | `boolean` | No |  |
| `issues_event` | `boolean` | No |  |
| `job_event` | `boolean` | No |  |
| `merge_requests_event` | `boolean` | No |  |
| `note_event` | `boolean` | No |  |
| `pipeline_event` | `boolean` | No |  |
| `property` | `Record<string, any>` | No |  |
| `push_event` | `boolean` | No |  |
| `slug` | `number` | No |  |
| `tag_push_event` | `boolean` | No |  |
| `title` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `vulnerability_event` | `boolean` | No |  |
| `wiki_page_event` | `boolean` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesIntegration().load({ id: 'api_entities_integration_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesIntegrationEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesIntegrationBasicEntity

```ts
const api_entities_integration_basic = client.ApiEntitiesIntegrationBasic()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | No |  |
| `alert_event` | `boolean` | No |  |
| `comment_on_event_enabled` | `boolean` | No |  |
| `commit_event` | `boolean` | No |  |
| `confidential_issues_event` | `boolean` | No |  |
| `confidential_note_event` | `boolean` | No |  |
| `created_at` | `string` | No |  |
| `deployment_event` | `boolean` | No |  |
| `id` | `number` | No |  |
| `incident_event` | `boolean` | No |  |
| `inherited` | `boolean` | No |  |
| `issues_event` | `boolean` | No |  |
| `job_event` | `boolean` | No |  |
| `merge_requests_event` | `boolean` | No |  |
| `note_event` | `boolean` | No |  |
| `pipeline_event` | `boolean` | No |  |
| `push_event` | `boolean` | No |  |
| `slug` | `number` | No |  |
| `tag_push_event` | `boolean` | No |  |
| `title` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `vulnerability_event` | `boolean` | No |  |
| `wiki_page_event` | `boolean` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiEntitiesIntegrationBasic().list()
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ApiEntitiesIntegrationBasic().update({
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesIntegrationBasicEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesInvitationEntity

```ts
const api_entities_invitation = client.ApiEntitiesInvitation()
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiEntitiesInvitation().create({
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiEntitiesInvitation().list()
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ApiEntitiesInvitation().update({
  id: 'id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesInvitationEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesIssuableTimeStatEntity

```ts
const api_entities_issuable_time_stat = client.ApiEntitiesIssuableTimeStat()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `human_time_estimate` | `string` | No |  |
| `human_total_time_spent` | `string` | No |  |
| `time_estimate` | `number` | No |  |
| `total_time_spent` | `number` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiEntitiesIssuableTimeStat().create({
  project_id: /* string */,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesIssuableTimeStat().load({ project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesIssuableTimeStatEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesIssueEntity

```ts
const api_entities_issue = client.ApiEntitiesIssue()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assignee` | `Record<string, any>` | No |  |
| `author` | `Record<string, any>` | No |  |
| `blocking_issues_count` | `string` | No |  |
| `closed_at` | `string` | No |  |
| `closed_by` | `Record<string, any>` | No |  |
| `confidential` | `boolean` | No |  |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `discussion_locked` | `boolean` | No |  |
| `downvote` | `string` | No |  |
| `due_date` | `string` | No |  |
| `epic` | `Record<string, any>` | No |  |
| `epic_iid` | `string` | No |  |
| `has_task` | `boolean` | No |  |
| `health_status` | `string` | No |  |
| `id` | `number` | No |  |
| `iid` | `number` | No |  |
| `imported` | `string` | No |  |
| `imported_from` | `string` | No |  |
| `issue_type` | `string` | No |  |
| `iteration` | `Record<string, any>` | No |  |
| `label` | `any[]` | No |  |
| `link` | `Record<string, any>` | No |  |
| `merge_requests_count` | `string` | No |  |
| `milestone` | `Record<string, any>` | No |  |
| `moved_to_id` | `string` | No |  |
| `project_id` | `number` | No |  |
| `reference` | `Record<string, any>` | No |  |
| `service_desk_reply_to` | `string` | No |  |
| `severity` | `string` | No |  |
| `state` | `string` | No |  |
| `subscribed` | `string` | No |  |
| `task_completion_status` | `string` | No |  |
| `task_status` | `string` | No |  |
| `time_stat` | `Record<string, any>` | No |  |
| `title` | `string` | No |  |
| `type` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upvote` | `string` | No |  |
| `user_notes_count` | `string` | No |  |
| `web_url` | `string` | No |  |
| `weight` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiEntitiesIssue().create({
  project_id: /* string */,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiEntitiesIssue().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesIssue().load({ id: 'api_entities_issue_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ApiEntitiesIssue().update({
  id: 'api_entities_issue_id',
  project_id: 'project_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesIssueEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesIssueLinkEntity

```ts
const api_entities_issue_link = client.ApiEntitiesIssueLink()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `link_type` | `string` | No |  |
| `source_issue` | `Record<string, any>` | No |  |
| `target_issue` | `Record<string, any>` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiEntitiesIssueLink().create({
  issue_id: /* string */,
  project_id: /* string */,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesIssueLink().load({ id: 'api_entities_issue_link_id', issue_id: 'issue_id', project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesIssueLinkEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesLicenseEntity

```ts
const api_entities_license = client.ApiEntitiesLicense()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `condition` | `any[]` | No |  |
| `content` | `string` | No |  |
| `description` | `string` | No |  |
| `html_url` | `string` | No |  |
| `key` | `string` | No |  |
| `limitation` | `any[]` | No |  |
| `name` | `string` | No |  |
| `nickname` | `string` | No |  |
| `permission` | `any[]` | No |  |
| `popular` | `boolean` | No |  |
| `source_url` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiEntitiesLicense().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesLicenseEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesMarkdownEntity

```ts
const api_entities_markdown = client.ApiEntitiesMarkdown()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiEntitiesMarkdown().create({
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesMarkdownEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesMarkdownUploadAdminEntity

```ts
const api_entities_markdown_upload_admin = client.ApiEntitiesMarkdownUploadAdmin()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No |  |
| `filename` | `string` | No |  |
| `id` | `string` | No |  |
| `size` | `string` | No |  |
| `uploaded_by` | `Record<string, any>` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiEntitiesMarkdownUploadAdmin().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesMarkdownUploadAdminEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesMemberEntity

```ts
const api_entities_member = client.ApiEntitiesMember()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access_level` | `string` | No |  |
| `avatar_path` | `string` | No |  |
| `avatar_url` | `string` | No |  |
| `created_at` | `string` | No |  |
| `created_by` | `Record<string, any>` | No |  |
| `custom_attribute` | `any[]` | No |  |
| `email` | `string` | No |  |
| `expires_at` | `string` | No |  |
| `group_saml_identity` | `Record<string, any>` | No |  |
| `group_scim_identity` | `Record<string, any>` | No |  |
| `id` | `number` | No |  |
| `is_using_seat` | `boolean` | No |  |
| `key` | `string` | No |  |
| `locked` | `boolean` | No |  |
| `member_role` | `Record<string, any>` | No |  |
| `membership_state` | `string` | No |  |
| `name` | `string` | No |  |
| `override` | `string` | No |  |
| `public_email` | `string` | No |  |
| `state` | `string` | No |  |
| `username` | `string` | No |  |
| `value` | `string` | No |  |
| `web_url` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiEntitiesMember().create({
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiEntitiesMember().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesMember().load({ id: 'api_entities_member_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.ApiEntitiesMember().remove({ group_id: 'group_id', member_id: 'member_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ApiEntitiesMember().update({
  id: 'api_entities_member_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesMemberEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesMergeEntity

```ts
const api_entities_merge = client.ApiEntitiesMerge()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_collaboration` | `boolean` | No |  |
| `allow_maintainer_to_push` | `boolean` | No |  |
| `approvals_before_merge` | `string` | No |  |
| `assignee` | `Record<string, any>` | No |  |
| `author` | `Record<string, any>` | No |  |
| `blocking_discussions_resolved` | `string` | No |  |
| `changes_count` | `string` | No |  |
| `closed_at` | `string` | No |  |
| `closed_by` | `Record<string, any>` | No |  |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `description_html` | `string` | No |  |
| `detailed_merge_status` | `string` | No |  |
| `diff_ref` | `Record<string, any>` | No |  |
| `discussion_locked` | `string` | No |  |
| `diverged_commits_count` | `string` | No |  |
| `downvote` | `string` | No |  |
| `draft` | `string` | No |  |
| `first_contribution` | `string` | No |  |
| `first_deployed_to_production_at` | `string` | No |  |
| `force_remove_source_branch` | `string` | No |  |
| `has_conflict` | `boolean` | No |  |
| `head_pipeline` | `Record<string, any>` | No |  |
| `id` | `number` | No |  |
| `iid` | `number` | No |  |
| `imported` | `string` | No |  |
| `imported_from` | `string` | No |  |
| `label` | `string` | No |  |
| `latest_build_finished_at` | `string` | No |  |
| `latest_build_started_at` | `string` | No |  |
| `merge_after` | `string` | No |  |
| `merge_commit_sha` | `string` | No |  |
| `merge_error` | `string` | No |  |
| `merge_status` | `string` | No |  |
| `merge_user` | `Record<string, any>` | No |  |
| `merge_when_pipeline_succeed` | `string` | No |  |
| `merged_at` | `string` | No |  |
| `merged_by` | `Record<string, any>` | No |  |
| `milestone` | `Record<string, any>` | No |  |
| `pipeline` | `Record<string, any>` | No |  |
| `prepared_at` | `string` | No |  |
| `project_id` | `number` | No |  |
| `rebase_in_progress` | `string` | No |  |
| `reference` | `string` | No |  |
| `reviewer` | `Record<string, any>` | No |  |
| `sha` | `string` | No |  |
| `should_remove_source_branch` | `boolean` | No |  |
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
| `time_stat` | `Record<string, any>` | No |  |
| `title` | `string` | No |  |
| `title_html` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upvote` | `string` | No |  |
| `user` | `Record<string, any>` | No |  |
| `user_notes_count` | `string` | No |  |
| `web_url` | `string` | No |  |
| `work_in_progress` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiEntitiesMerge().create({
  project_id: /* string */,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesMerge().load({ merge_request_iid: 'merge_request_iid', project_id: 'project_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ApiEntitiesMerge().update({
  project_id: 'project_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesMergeEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesMergeRequestApprovalEntity

```ts
const api_entities_merge_request_approval = client.ApiEntitiesMergeRequestApproval()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `approved` | `boolean` | No |  |
| `approved_by` | `Record<string, any>` | No |  |
| `user_can_approve` | `boolean` | No |  |
| `user_has_approved` | `boolean` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiEntitiesMergeRequestApproval().create({
  merge_request_id: /* string */,
  project_id: /* string */,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesMergeRequestApproval().load({ merge_request_id: 'merge_request_id', project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesMergeRequestApprovalEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesMergeRequestBasicEntity

```ts
const api_entities_merge_request_basic = client.ApiEntitiesMergeRequestBasic()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_collaboration` | `boolean` | No |  |
| `allow_maintainer_to_push` | `boolean` | No |  |
| `approvals_before_merge` | `string` | No |  |
| `assignee` | `Record<string, any>` | No |  |
| `author` | `Record<string, any>` | No |  |
| `blocking_discussions_resolved` | `string` | No |  |
| `closed_at` | `string` | No |  |
| `closed_by` | `Record<string, any>` | No |  |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `description_html` | `string` | No |  |
| `detailed_merge_status` | `string` | No |  |
| `discussion_locked` | `string` | No |  |
| `downvote` | `string` | No |  |
| `draft` | `string` | No |  |
| `force_remove_source_branch` | `string` | No |  |
| `has_conflict` | `boolean` | No |  |
| `id` | `number` | No |  |
| `iid` | `number` | No |  |
| `imported` | `string` | No |  |
| `imported_from` | `string` | No |  |
| `label` | `string` | No |  |
| `merge_after` | `string` | No |  |
| `merge_commit_sha` | `string` | No |  |
| `merge_status` | `string` | No |  |
| `merge_user` | `Record<string, any>` | No |  |
| `merge_when_pipeline_succeed` | `string` | No |  |
| `merged_at` | `string` | No |  |
| `merged_by` | `Record<string, any>` | No |  |
| `milestone` | `Record<string, any>` | No |  |
| `prepared_at` | `string` | No |  |
| `project_id` | `number` | No |  |
| `reference` | `string` | No |  |
| `reviewer` | `Record<string, any>` | No |  |
| `sha` | `string` | No |  |
| `should_remove_source_branch` | `boolean` | No |  |
| `source_branch` | `string` | No |  |
| `source_project_id` | `string` | No |  |
| `squash` | `string` | No |  |
| `squash_commit_sha` | `string` | No |  |
| `squash_on_merge` | `string` | No |  |
| `state` | `string` | No |  |
| `target_branch` | `string` | No |  |
| `target_project_id` | `string` | No |  |
| `task_completion_status` | `string` | No |  |
| `time_stat` | `Record<string, any>` | No |  |
| `title` | `string` | No |  |
| `title_html` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upvote` | `string` | No |  |
| `user_notes_count` | `string` | No |  |
| `web_url` | `string` | No |  |
| `work_in_progress` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiEntitiesMergeRequestBasic().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesMergeRequestBasic().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesMergeRequestBasicEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesMergeRequestChangeEntity

```ts
const api_entities_merge_request_change = client.ApiEntitiesMergeRequestChange()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_collaboration` | `boolean` | No |  |
| `allow_maintainer_to_push` | `boolean` | No |  |
| `approvals_before_merge` | `string` | No |  |
| `assignee` | `Record<string, any>` | No |  |
| `author` | `Record<string, any>` | No |  |
| `blocking_discussions_resolved` | `string` | No |  |
| `change` | `Record<string, any>` | No |  |
| `changes_count` | `string` | No |  |
| `closed_at` | `string` | No |  |
| `closed_by` | `Record<string, any>` | No |  |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `description_html` | `string` | No |  |
| `detailed_merge_status` | `string` | No |  |
| `diff_ref` | `Record<string, any>` | No |  |
| `discussion_locked` | `string` | No |  |
| `diverged_commits_count` | `string` | No |  |
| `downvote` | `string` | No |  |
| `draft` | `string` | No |  |
| `first_contribution` | `string` | No |  |
| `first_deployed_to_production_at` | `string` | No |  |
| `force_remove_source_branch` | `string` | No |  |
| `has_conflict` | `boolean` | No |  |
| `head_pipeline` | `Record<string, any>` | No |  |
| `id` | `number` | No |  |
| `iid` | `number` | No |  |
| `imported` | `string` | No |  |
| `imported_from` | `string` | No |  |
| `label` | `string` | No |  |
| `latest_build_finished_at` | `string` | No |  |
| `latest_build_started_at` | `string` | No |  |
| `merge_after` | `string` | No |  |
| `merge_commit_sha` | `string` | No |  |
| `merge_error` | `string` | No |  |
| `merge_status` | `string` | No |  |
| `merge_user` | `Record<string, any>` | No |  |
| `merge_when_pipeline_succeed` | `string` | No |  |
| `merged_at` | `string` | No |  |
| `merged_by` | `Record<string, any>` | No |  |
| `milestone` | `Record<string, any>` | No |  |
| `overflow` | `string` | No |  |
| `pipeline` | `Record<string, any>` | No |  |
| `prepared_at` | `string` | No |  |
| `project_id` | `number` | No |  |
| `rebase_in_progress` | `string` | No |  |
| `reference` | `string` | No |  |
| `reviewer` | `Record<string, any>` | No |  |
| `sha` | `string` | No |  |
| `should_remove_source_branch` | `boolean` | No |  |
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
| `time_stat` | `Record<string, any>` | No |  |
| `title` | `string` | No |  |
| `title_html` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upvote` | `string` | No |  |
| `user` | `Record<string, any>` | No |  |
| `user_notes_count` | `string` | No |  |
| `web_url` | `string` | No |  |
| `work_in_progress` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesMergeRequestChange().load({ merge_request_id: 'merge_request_id', project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesMergeRequestChangeEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesMergeRequestDiffEntity

```ts
const api_entities_merge_request_diff = client.ApiEntitiesMergeRequestDiff()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiEntitiesMergeRequestDiff().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesMergeRequestDiffEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesMergeRequestDiffFullEntity

```ts
const api_entities_merge_request_diff_full = client.ApiEntitiesMergeRequestDiffFull()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `base_commit_sha` | `string` | No |  |
| `commit` | `Record<string, any>` | No |  |
| `created_at` | `string` | No |  |
| `diff` | `Record<string, any>` | No |  |
| `head_commit_sha` | `string` | No |  |
| `id` | `string` | No |  |
| `merge_request_id` | `string` | No |  |
| `patch_id_sha` | `string` | No |  |
| `real_size` | `string` | No |  |
| `start_commit_sha` | `string` | No |  |
| `state` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesMergeRequestDiffFull().load({ merge_request_id: 'merge_request_id', project_id: 'project_id', version_id: 'version_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesMergeRequestDiffFullEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesMergeRequestReviewerEntity

```ts
const api_entities_merge_request_reviewer = client.ApiEntitiesMergeRequestReviewer()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No |  |
| `state` | `string` | No |  |
| `user` | `Record<string, any>` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesMergeRequestReviewer().load({ merge_request_id: 'merge_request_id', project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesMergeRequestReviewerEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesMetricImageEntity

```ts
const api_entities_metric_image = client.ApiEntitiesMetricImage()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No |  |
| `file_path` | `string` | No |  |
| `filename` | `string` | No |  |
| `id` | `number` | No |  |
| `url` | `string` | No |  |
| `url_text` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiEntitiesMetricImage().create({
  alert_management_alert_id: /* string */,
  project_id: /* string */,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiEntitiesMetricImage().list()
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ApiEntitiesMetricImage().update({
  alert_management_alert_id: 'alert_management_alert_id',
  id: 'id',
  project_id: 'project_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesMetricImageEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesMrNoteEntity

```ts
const api_entities_mr_note = client.ApiEntitiesMrNote()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `Record<string, any>` | No |  |
| `note` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesMrNote().load({ merge_request_id: 'merge_request_id', project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesMrNoteEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesNamespaceEntity

```ts
const api_entities_namespace = client.ApiEntitiesNamespace()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `additional_purchased_storage_ends_on` | `string` | No |  |
| `additional_purchased_storage_size` | `number` | No |  |
| `avatar_url` | `string` | No |  |
| `billable_members_count` | `number` | No |  |
| `end_date` | `string` | No |  |
| `extra_shared_runners_minutes_limit` | `number` | No |  |
| `full_path` | `string` | No |  |
| `id` | `number` | No |  |
| `kind` | `string` | No |  |
| `max_seats_used` | `number` | No |  |
| `max_seats_used_changed_at` | `string` | No |  |
| `members_count_with_descendant` | `number` | No |  |
| `name` | `string` | No |  |
| `parent_id` | `number` | No |  |
| `path` | `string` | No |  |
| `plan` | `string` | No |  |
| `projects_count` | `number` | No |  |
| `root_repository_size` | `number` | No |  |
| `seats_in_use` | `number` | No |  |
| `shared_runners_minutes_limit` | `number` | No |  |
| `trial` | `boolean` | No |  |
| `trial_ends_on` | `string` | No |  |
| `web_url` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiEntitiesNamespace().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesNamespace().load({ id: 'api_entities_namespace_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ApiEntitiesNamespace().update({
  id: 'api_entities_namespace_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesNamespaceEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesNamespaceExistenceEntity

```ts
const api_entities_namespace_existence = client.ApiEntitiesNamespaceExistence()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `exist` | `boolean` | No |  |
| `suggest` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiEntitiesNamespaceExistence().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesNamespaceExistenceEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesNamespacesStorageLimitExclusionEntity

```ts
const api_entities_namespaces_storage_limit_exclusion = client.ApiEntitiesNamespacesStorageLimitExclusion()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `number` | No |  |
| `namespace_id` | `number` | No |  |
| `namespace_name` | `string` | No |  |
| `reason` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiEntitiesNamespacesStorageLimitExclusion().create({
  namespace_id: /* string */,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesNamespacesStorageLimitExclusion().load({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesNamespacesStorageLimitExclusionEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesNpmPackageEntity

```ts
const api_entities_npm_package = client.ApiEntitiesNpmPackage()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dist_tag` | `Record<string, any>` | No |  |
| `name` | `string` | No |  |
| `version` | `Record<string, any>` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesNpmPackage().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesNpmPackageEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesNpmPackageTagEntity

```ts
const api_entities_npm_package_tag = client.ApiEntitiesNpmPackageTag()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dist_tag` | `Record<string, any>` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesNpmPackageTag().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesNpmPackageTagEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesNugetPackagesVersionEntity

```ts
const api_entities_nuget_packages_version = client.ApiEntitiesNugetPackagesVersion()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `version` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiEntitiesNugetPackagesVersion().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesNugetPackagesVersionEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesNugetSearchResultEntity

```ts
const api_entities_nuget_search_result = client.ApiEntitiesNugetSearchResult()
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
| `total_download` | `number` | No |  |
| `type` | `string` | No |  |
| `verified` | `boolean` | No |  |
| `version` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiEntitiesNugetSearchResult().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesNugetSearchResultEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesNugetServiceIndexEntity

```ts
const api_entities_nuget_service_index = client.ApiEntitiesNugetServiceIndex()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `resource` | `any[]` | No |  |
| `version` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiEntitiesNugetServiceIndex().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesNugetServiceIndexEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesOrganizationsOrganizationEntity

```ts
const api_entities_organizations_organization = client.ApiEntitiesOrganizationsOrganization()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiEntitiesOrganizationsOrganization().create({
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesOrganizationsOrganizationEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesPackageEntity

```ts
const api_entities_package = client.ApiEntitiesPackage()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `conan_package_name` | `string` | No |  |
| `created_at` | `string` | No |  |
| `id` | `number` | No |  |
| `last_downloaded_at` | `string` | No |  |
| `link` | `Record<string, any>` | No |  |
| `name` | `string` | No |  |
| `package_type` | `string` | No |  |
| `pipeline` | `Record<string, any>` | No |  |
| `project_id` | `number` | No |  |
| `project_path` | `string` | No |  |
| `status` | `string` | No |  |
| `tag` | `string` | No |  |
| `version` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiEntitiesPackage().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesPackage().load({ id: 'api_entities_package_id', project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesPackageEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesPackageFileEntity

```ts
const api_entities_package_file = client.ApiEntitiesPackageFile()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No |  |
| `file_md5` | `string` | No |  |
| `file_name` | `string` | No |  |
| `file_sha1` | `string` | No |  |
| `file_sha256` | `string` | No |  |
| `id` | `number` | No |  |
| `package_id` | `number` | No |  |
| `pipeline` | `Record<string, any>` | No |  |
| `size` | `number` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiEntitiesPackageFile().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesPackageFileEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesPackagePipelineEntity

```ts
const api_entities_package_pipeline = client.ApiEntitiesPackagePipeline()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No |  |
| `id` | `number` | No |  |
| `iid` | `number` | No |  |
| `project_id` | `number` | No |  |
| `ref` | `string` | No |  |
| `sha` | `string` | No |  |
| `source` | `string` | No |  |
| `status` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `user` | `Record<string, any>` | No |  |
| `web_url` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesPackagePipeline().load({ package_id: 'package_id', project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesPackagePipelineEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesPackagesConanFilesListEntity

```ts
const api_entities_packages_conan_files_list = client.ApiEntitiesPackagesConanFilesList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `file` | `Record<string, any>` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesPackagesConanFilesList().load({ conan_id: 'conan_id', package_channel: 'package_channel', package_username: 'package_username', package_version: 'package_version', project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesPackagesConanFilesListEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesPackagesConanPackageManifestEntity

```ts
const api_entities_packages_conan_package_manifest = client.ApiEntitiesPackagesConanPackageManifest()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `package_url` | `Record<string, any>` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesPackagesConanPackageManifest().load({ conan_id: 'conan_id', conan_package_reference: 'conan_package_reference', package_channel: 'package_channel', package_username: 'package_username', package_version: 'package_version' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesPackagesConanPackageManifestEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesPackagesConanPackageRevisionEntity

```ts
const api_entities_packages_conan_package_revision = client.ApiEntitiesPackagesConanPackageRevision()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `revision` | `string` | No |  |
| `time` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiEntitiesPackagesConanPackageRevision().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesPackagesConanPackageRevisionEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesPackagesConanPackageSnapshotEntity

```ts
const api_entities_packages_conan_package_snapshot = client.ApiEntitiesPackagesConanPackageSnapshot()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `package_snapshot` | `Record<string, any>` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesPackagesConanPackageSnapshot().load({ conan_id: 'conan_id', conan_package_reference: 'conan_package_reference', package_channel: 'package_channel', package_username: 'package_username', package_version: 'package_version' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesPackagesConanPackageSnapshotEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesPackagesConanRecipeManifestEntity

```ts
const api_entities_packages_conan_recipe_manifest = client.ApiEntitiesPackagesConanRecipeManifest()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `recipe_url` | `Record<string, any>` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesPackagesConanRecipeManifest().load({ conan_id: 'conan_id', package_channel: 'package_channel', package_username: 'package_username', package_version: 'package_version' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesPackagesConanRecipeManifestEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesPackagesConanRecipeRevisionEntity

```ts
const api_entities_packages_conan_recipe_revision = client.ApiEntitiesPackagesConanRecipeRevision()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `revision` | `string` | No |  |
| `time` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiEntitiesPackagesConanRecipeRevision().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesPackagesConanRecipeRevisionEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesPackagesConanRecipeSnapshotEntity

```ts
const api_entities_packages_conan_recipe_snapshot = client.ApiEntitiesPackagesConanRecipeSnapshot()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `recipe_snapshot` | `Record<string, any>` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesPackagesConanRecipeSnapshot().load({ id: 'api_entities_packages_conan_recipe_snapshot_id', package_channel: 'package_channel', package_name: 'package_name', package_username: 'package_username', package_version: 'package_version' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesPackagesConanRecipeSnapshotEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesPackagesConanRevisionEntity

```ts
const api_entities_packages_conan_revision = client.ApiEntitiesPackagesConanRevision()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `revision` | `string` | No |  |
| `time` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesPackagesConanRevision().load({ conan_id: 'conan_id', package_channel: 'package_channel', package_username: 'package_username', package_version: 'package_version', project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesPackagesConanRevisionEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesPackagesConanUploadUrlEntity

```ts
const api_entities_packages_conan_upload_url = client.ApiEntitiesPackagesConanUploadUrl()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `upload_url` | `Record<string, any>` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiEntitiesPackagesConanUploadUrl().create({
  conan_id: /* string */,
  package_channel: /* any */,
  package_username: /* any */,
  package_version: /* any */,
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesPackagesConanUploadUrlEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesPackagesDebianDistributionEntity

```ts
const api_entities_packages_debian_distribution = client.ApiEntitiesPackagesDebianDistribution()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `architecture` | `any[]` | No |  |
| `codename` | `string` | No |  |
| `component` | `any[]` | No |  |
| `description` | `string` | No |  |
| `id` | `number` | No |  |
| `label` | `string` | No |  |
| `origin` | `string` | No |  |
| `suite` | `string` | No |  |
| `valid_time_duration_second` | `number` | No |  |
| `version` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiEntitiesPackagesDebianDistribution().create({
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiEntitiesPackagesDebianDistribution().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesPackagesDebianDistribution().load({ id: 'api_entities_packages_debian_distribution_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ApiEntitiesPackagesDebianDistribution().update({
  id: 'api_entities_packages_debian_distribution_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesPackagesDebianDistributionEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesPagesDomainEntity

```ts
const api_entities_pages_domain = client.ApiEntitiesPagesDomain()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auto_ssl_enabled` | `string` | No |  |
| `certificate` | `Record<string, any>` | No |  |
| `domain` | `string` | No |  |
| `enabled_until` | `string` | No |  |
| `url` | `string` | No |  |
| `verification_code` | `string` | No |  |
| `verified` | `boolean` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiEntitiesPagesDomain().create({
  project_id: /* string */,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiEntitiesPagesDomain().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesPagesDomain().load({ id: 'api_entities_pages_domain_id', project_id: 'project_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ApiEntitiesPagesDomain().update({
  domain_id: 'domain_id',
  project_id: 'project_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesPagesDomainEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesPagesDomainBasicEntity

```ts
const api_entities_pages_domain_basic = client.ApiEntitiesPagesDomainBasic()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auto_ssl_enabled` | `string` | No |  |
| `certificate_expiration` | `Record<string, any>` | No |  |
| `domain` | `string` | No |  |
| `enabled_until` | `string` | No |  |
| `project_id` | `string` | No |  |
| `url` | `string` | No |  |
| `verification_code` | `string` | No |  |
| `verified` | `boolean` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesPagesDomainBasic().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesPagesDomainBasicEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesPersonalAccessTokenEntity

```ts
const api_entities_personal_access_token = client.ApiEntitiesPersonalAccessToken()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | No |  |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `expires_at` | `string` | No |  |
| `id` | `number` | No |  |
| `last_used_at` | `string` | No |  |
| `name` | `string` | No |  |
| `revoked` | `boolean` | No |  |
| `scope` | `any[]` | No |  |
| `user_id` | `number` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiEntitiesPersonalAccessToken().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesPersonalAccessTokenEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesPersonalAccessTokenWithLastUsedIpEntity

```ts
const api_entities_personal_access_token_with_last_used_ip = client.ApiEntitiesPersonalAccessTokenWithLastUsedIp()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | No |  |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `expires_at` | `string` | No |  |
| `id` | `number` | No |  |
| `last_used_at` | `string` | No |  |
| `last_used_ip` | `any[]` | No |  |
| `name` | `string` | No |  |
| `revoked` | `boolean` | No |  |
| `scope` | `any[]` | No |  |
| `user_id` | `number` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiEntitiesPersonalAccessTokenWithLastUsedIp().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesPersonalAccessTokenWithLastUsedIp().load({ id: 'api_entities_personal_access_token_with_last_used_ip_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesPersonalAccessTokenWithLastUsedIpEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesPersonalAccessTokenWithTokenEntity

```ts
const api_entities_personal_access_token_with_token = client.ApiEntitiesPersonalAccessTokenWithToken()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | No |  |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `expires_at` | `string` | No |  |
| `id` | `number` | No |  |
| `last_used_at` | `string` | No |  |
| `name` | `string` | No |  |
| `revoked` | `boolean` | No |  |
| `scope` | `any[]` | No |  |
| `token` | `string` | No |  |
| `user_id` | `number` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiEntitiesPersonalAccessTokenWithToken().create({
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesPersonalAccessTokenWithTokenEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesPersonalSnippetEntity

```ts
const api_entities_personal_snippet = client.ApiEntitiesPersonalSnippet()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `Record<string, any>` | No |  |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `file` | `any[]` | No |  |
| `file_name` | `string` | No |  |
| `http_url_to_repo` | `string` | No |  |
| `id` | `number` | No |  |
| `imported` | `boolean` | No |  |
| `imported_from` | `string` | No |  |
| `project_id` | `number` | No |  |
| `raw_url` | `string` | No |  |
| `repository_storage` | `string` | No |  |
| `ssh_url_to_repo` | `string` | No |  |
| `title` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `visibility` | `string` | No |  |
| `web_url` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiEntitiesPersonalSnippet().create({
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiEntitiesPersonalSnippet().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesPersonalSnippet().load({ id: 'api_entities_personal_snippet_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ApiEntitiesPersonalSnippet().update({
  id: 'api_entities_personal_snippet_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesPersonalSnippetEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesPlanLimitEntity

```ts
const api_entities_plan_limit = client.ApiEntitiesPlanLimit()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ci_active_job` | `number` | No |  |
| `ci_instance_level_variable` | `number` | No |  |
| `ci_needs_size_limit` | `number` | No |  |
| `ci_pipeline_schedule` | `number` | No |  |
| `ci_pipeline_size` | `number` | No |  |
| `ci_project_subscription` | `number` | No |  |
| `ci_registered_group_runner` | `number` | No |  |
| `ci_registered_project_runner` | `number` | No |  |
| `conan_max_file_size` | `number` | No |  |
| `dotenv_size` | `number` | No |  |
| `dotenv_variable` | `number` | No |  |
| `enforcement_limit` | `number` | No |  |
| `generic_packages_max_file_size` | `number` | No |  |
| `helm_max_file_size` | `number` | No |  |
| `limits_history` | `Record<string, any>` | No |  |
| `maven_max_file_size` | `number` | No |  |
| `notification_limit` | `number` | No |  |
| `npm_max_file_size` | `number` | No |  |
| `nuget_max_file_size` | `number` | No |  |
| `pipeline_hierarchy_size` | `number` | No |  |
| `pypi_max_file_size` | `number` | No |  |
| `storage_size_limit` | `number` | No |  |
| `terraform_module_max_file_size` | `number` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesPlanLimit().load()
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ApiEntitiesPlanLimit().update({
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesPlanLimitEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesProjectEntity

```ts
const api_entities_project = client.ApiEntitiesProject()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_merge_on_skipped_pipeline` | `boolean` | No |  |
| `allow_pipeline_trigger_approve_deployment` | `boolean` | No |  |
| `analytics_access_level` | `string` | No |  |
| `approvals_before_merge` | `string` | No |  |
| `archived` | `boolean` | No |  |
| `auto_cancel_pending_pipeline` | `string` | No |  |
| `auto_devops_deploy_strategy` | `string` | No |  |
| `auto_devops_enabled` | `boolean` | No |  |
| `auto_duo_code_review_enabled` | `string` | No |  |
| `autoclose_referenced_issue` | `boolean` | No |  |
| `avatar_url` | `string` | No |  |
| `build_git_strategy` | `string` | No |  |
| `build_timeout` | `number` | No |  |
| `builds_access_level` | `string` | No |  |
| `can_create_merge_request_in` | `boolean` | No |  |
| `ci_allow_fork_pipelines_to_run_in_parent_project` | `boolean` | No |  |
| `ci_config_path` | `string` | No |  |
| `ci_default_git_depth` | `number` | No |  |
| `ci_delete_pipelines_in_second` | `number` | No |  |
| `ci_forward_deployment_enabled` | `boolean` | No |  |
| `ci_forward_deployment_rollback_allowed` | `boolean` | No |  |
| `ci_id_token_sub_claim_component` | `any[]` | No |  |
| `ci_job_token_scope_enabled` | `boolean` | No |  |
| `ci_pipeline_variables_minimum_override_role` | `string` | No |  |
| `ci_push_repository_for_job_token_allowed` | `boolean` | No |  |
| `ci_restrict_pipeline_cancellation_role` | `string` | No |  |
| `ci_separated_cache` | `boolean` | No |  |
| `compliance_framework` | `string` | No |  |
| `container_expiration_policy` | `Record<string, any>` | No |  |
| `container_registry_access_level` | `string` | No |  |
| `container_registry_enabled` | `boolean` | No |  |
| `container_registry_image_prefix` | `string` | No |  |
| `created_at` | `string` | No |  |
| `creator_id` | `number` | No |  |
| `custom_attribute` | `Record<string, any>` | No |  |
| `default_branch` | `string` | No |  |
| `description` | `string` | No |  |
| `description_html` | `string` | No |  |
| `duo_remote_flows_enabled` | `string` | No |  |
| `emails_disabled` | `boolean` | No |  |
| `emails_enabled` | `boolean` | No |  |
| `empty_repo` | `boolean` | No |  |
| `enforce_auth_checks_on_upload` | `boolean` | No |  |
| `environments_access_level` | `string` | No |  |
| `external_authorization_classification_label` | `string` | No |  |
| `feature_flags_access_level` | `string` | No |  |
| `forked_from_project` | `Record<string, any>` | No |  |
| `forking_access_level` | `string` | No |  |
| `forks_count` | `number` | No |  |
| `group_runners_enabled` | `boolean` | No |  |
| `http_url_to_repo` | `string` | No |  |
| `id` | `number` | No |  |
| `import_error` | `string` | No |  |
| `import_status` | `string` | No |  |
| `import_type` | `string` | No |  |
| `import_url` | `string` | No |  |
| `infrastructure_access_level` | `string` | No |  |
| `issue_branch_template` | `string` | No |  |
| `issues_access_level` | `string` | No |  |
| `issues_enabled` | `boolean` | No |  |
| `issues_template` | `string` | No |  |
| `jobs_enabled` | `boolean` | No |  |
| `keep_latest_artifact` | `boolean` | No |  |
| `last_activity_at` | `string` | No |  |
| `lfs_enabled` | `boolean` | No |  |
| `license` | `Record<string, any>` | No |  |
| `license_url` | `string` | No |  |
| `link` | `Record<string, any>` | No |  |
| `marked_for_deletion_at` | `string` | No |  |
| `marked_for_deletion_on` | `string` | No |  |
| `max_artifacts_size` | `number` | No |  |
| `merge_commit_template` | `string` | No |  |
| `merge_method` | `string` | No |  |
| `merge_pipelines_enabled` | `string` | No |  |
| `merge_request_title_regex` | `string` | No |  |
| `merge_request_title_regex_description` | `string` | No |  |
| `merge_requests_access_level` | `string` | No |  |
| `merge_requests_enabled` | `boolean` | No |  |
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
| `mr_default_target_self` | `boolean` | No |  |
| `name` | `string` | No |  |
| `name_with_namespace` | `string` | No |  |
| `namespace` | `Record<string, any>` | No |  |
| `only_allow_merge_if_all_discussions_are_resolved` | `boolean` | No |  |
| `only_allow_merge_if_all_status_checks_passed` | `string` | No |  |
| `only_allow_merge_if_pipeline_succeed` | `boolean` | No |  |
| `only_mirror_protected_branch` | `string` | No |  |
| `open_issues_count` | `number` | No |  |
| `owner` | `Record<string, any>` | No |  |
| `package_registry_access_level` | `string` | No |  |
| `packages_enabled` | `boolean` | No |  |
| `pages_access_level` | `string` | No |  |
| `path` | `string` | No |  |
| `path_with_namespace` | `string` | No |  |
| `pre_receive_secret_detection_enabled` | `boolean` | No |  |
| `prevent_merge_without_jira_issue` | `string` | No |  |
| `printing_merge_request_link_enabled` | `boolean` | No |  |
| `public_job` | `boolean` | No |  |
| `readme_url` | `string` | No |  |
| `releases_access_level` | `string` | No |  |
| `remove_source_branch_after_merge` | `boolean` | No |  |
| `repository_access_level` | `string` | No |  |
| `repository_object_format` | `string` | No |  |
| `repository_storage` | `string` | No |  |
| `request_access_enabled` | `boolean` | No |  |
| `requirements_access_level` | `string` | No |  |
| `requirements_enabled` | `string` | No |  |
| `resolve_outdated_diff_discussion` | `boolean` | No |  |
| `resource_group_default_process_mode` | `string` | No |  |
| `restrict_user_defined_variable` | `boolean` | No |  |
| `runner_token_expiration_interval` | `number` | No |  |
| `runners_token` | `string` | No |  |
| `secret_push_protection_enabled` | `boolean` | No |  |
| `security_and_compliance_access_level` | `string` | No |  |
| `security_and_compliance_enabled` | `string` | No |  |
| `service_desk_address` | `string` | No |  |
| `service_desk_enabled` | `boolean` | No |  |
| `shared_runners_enabled` | `boolean` | No |  |
| `shared_with_group` | `any[]` | No |  |
| `show_diff_preview_in_email` | `boolean` | No |  |
| `snippets_access_level` | `string` | No |  |
| `snippets_enabled` | `boolean` | No |  |
| `spp_repository_pipeline_access` | `boolean` | No |  |
| `squash_commit_template` | `string` | No |  |
| `squash_option` | `string` | No |  |
| `ssh_url_to_repo` | `string` | No |  |
| `star_count` | `number` | No |  |
| `statistic` | `Record<string, any>` | No |  |
| `suggestion_commit_message` | `string` | No |  |
| `tag_list` | `any[]` | No |  |
| `topic` | `any[]` | No |  |
| `updated_at` | `string` | No |  |
| `visibility` | `string` | No |  |
| `warn_about_potentially_unwanted_character` | `boolean` | No |  |
| `web_based_commit_signing_enabled` | `string` | No |  |
| `web_url` | `string` | No |  |
| `wiki_access_level` | `string` | No |  |
| `wiki_enabled` | `boolean` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiEntitiesProject().create({
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiEntitiesProject().list()
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ApiEntitiesProject().update({
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesProjectEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesProjectDailyStatisticEntity

```ts
const api_entities_project_daily_statistic = client.ApiEntitiesProjectDailyStatistic()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fetch` | `Record<string, any>` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesProjectDailyStatistic().load({ project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesProjectDailyStatisticEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesProjectExportStatusEntity

```ts
const api_entities_project_export_status = client.ApiEntitiesProjectExportStatus()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `export_status` | `string` | No |  |
| `id` | `number` | No |  |
| `link` | `Record<string, any>` | No |  |
| `name` | `string` | No |  |
| `name_with_namespace` | `string` | No |  |
| `path` | `string` | No |  |
| `path_with_namespace` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesProjectExportStatus().load({ project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesProjectExportStatusEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesProjectGroupLinkEntity

```ts
const api_entities_project_group_link = client.ApiEntitiesProjectGroupLink()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiEntitiesProjectGroupLink().create({
  project_id: /* string */,
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesProjectGroupLinkEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesProjectHookEntity

```ts
const api_entities_project_hook = client.ApiEntitiesProjectHook()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert_status` | `any` | No |  |
| `branch_filter_strategy` | `string` | No |  |
| `confidential_issues_event` | `boolean` | No |  |
| `confidential_note_event` | `boolean` | No |  |
| `created_at` | `string` | No |  |
| `custom_header` | `any[]` | No |  |
| `custom_webhook_template` | `string` | No |  |
| `deployment_event` | `boolean` | No |  |
| `description` | `string` | No |  |
| `disabled_until` | `string` | No |  |
| `emoji_event` | `boolean` | No |  |
| `enable_ssl_verification` | `boolean` | No |  |
| `feature_flag_event` | `boolean` | No |  |
| `id` | `string` | No |  |
| `issues_event` | `boolean` | No |  |
| `job_event` | `boolean` | No |  |
| `merge_requests_event` | `boolean` | No |  |
| `milestone_event` | `boolean` | No |  |
| `name` | `string` | No |  |
| `note_event` | `boolean` | No |  |
| `pipeline_event` | `boolean` | No |  |
| `project_id` | `string` | No |  |
| `push_event` | `boolean` | No |  |
| `push_events_branch_filter` | `string` | No |  |
| `releases_event` | `boolean` | No |  |
| `repository_update_event` | `boolean` | No |  |
| `resource_access_token_event` | `boolean` | No |  |
| `tag_push_event` | `boolean` | No |  |
| `url` | `string` | No |  |
| `url_variable` | `any[]` | No |  |
| `vulnerability_event` | `boolean` | No |  |
| `wiki_page_event` | `boolean` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiEntitiesProjectHook().create({
  project_id: /* string */,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiEntitiesProjectHook().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesProjectHook().load({ id: 'api_entities_project_hook_id', project_id: 'project_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ApiEntitiesProjectHook().update({
  id: 'api_entities_project_hook_id',
  project_id: 'project_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesProjectHookEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesProjectImportStatusEntity

```ts
const api_entities_project_import_status = client.ApiEntitiesProjectImportStatus()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No |  |
| `exception_class` | `string` | No |  |
| `exception_message` | `string` | No |  |
| `id` | `string` | No |  |
| `line_number` | `number` | No |  |
| `relation_name` | `string` | No |  |
| `source` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiEntitiesProjectImportStatus().create({
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiEntitiesProjectImportStatus().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesProjectImportStatusEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesProjectJobTokenScopeEntity

```ts
const api_entities_project_job_token_scope = client.ApiEntitiesProjectJobTokenScope()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `inbound_enabled` | `boolean` | No |  |
| `outbound_enabled` | `boolean` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesProjectJobTokenScope().load({ project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesProjectJobTokenScopeEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesProjectRepositoryStorageEntity

```ts
const api_entities_project_repository_storage = client.ApiEntitiesProjectRepositoryStorage()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No |  |
| `disk_path` | `string` | No |  |
| `project_id` | `number` | No |  |
| `repository_storage` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesProjectRepositoryStorage().load({ project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesProjectRepositoryStorageEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesProjectSnippetEntity

```ts
const api_entities_project_snippet = client.ApiEntitiesProjectSnippet()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `Record<string, any>` | No |  |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `file` | `any[]` | No |  |
| `file_name` | `string` | No |  |
| `http_url_to_repo` | `string` | No |  |
| `id` | `number` | No |  |
| `imported` | `boolean` | No |  |
| `imported_from` | `string` | No |  |
| `project_id` | `number` | No |  |
| `raw_url` | `string` | No |  |
| `repository_storage` | `string` | No |  |
| `ssh_url_to_repo` | `string` | No |  |
| `title` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `visibility` | `string` | No |  |
| `web_url` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiEntitiesProjectSnippet().create({
  project_id: /* string */,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiEntitiesProjectSnippet().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesProjectSnippet().load({ id: 'api_entities_project_snippet_id', project_id: 'project_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ApiEntitiesProjectSnippet().update({
  id: 'api_entities_project_snippet_id',
  project_id: 'project_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesProjectSnippetEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesProjectUploadEntity

```ts
const api_entities_project_upload = client.ApiEntitiesProjectUpload()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiEntitiesProjectUpload().create({
  project_id: /* string */,
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesProjectUploadEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesProjectWithAccessEntity

```ts
const api_entities_project_with_access = client.ApiEntitiesProjectWithAccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_merge_on_skipped_pipeline` | `boolean` | No |  |
| `allow_pipeline_trigger_approve_deployment` | `boolean` | No |  |
| `analytics_access_level` | `string` | No |  |
| `approvals_before_merge` | `string` | No |  |
| `archived` | `boolean` | No |  |
| `auto_cancel_pending_pipeline` | `string` | No |  |
| `auto_devops_deploy_strategy` | `string` | No |  |
| `auto_devops_enabled` | `boolean` | No |  |
| `auto_duo_code_review_enabled` | `string` | No |  |
| `autoclose_referenced_issue` | `boolean` | No |  |
| `avatar_url` | `string` | No |  |
| `build_git_strategy` | `string` | No |  |
| `build_timeout` | `number` | No |  |
| `builds_access_level` | `string` | No |  |
| `can_create_merge_request_in` | `boolean` | No |  |
| `ci_allow_fork_pipelines_to_run_in_parent_project` | `boolean` | No |  |
| `ci_config_path` | `string` | No |  |
| `ci_default_git_depth` | `number` | No |  |
| `ci_delete_pipelines_in_second` | `number` | No |  |
| `ci_forward_deployment_enabled` | `boolean` | No |  |
| `ci_forward_deployment_rollback_allowed` | `boolean` | No |  |
| `ci_id_token_sub_claim_component` | `any[]` | No |  |
| `ci_job_token_scope_enabled` | `boolean` | No |  |
| `ci_pipeline_variables_minimum_override_role` | `string` | No |  |
| `ci_push_repository_for_job_token_allowed` | `boolean` | No |  |
| `ci_restrict_pipeline_cancellation_role` | `string` | No |  |
| `ci_separated_cache` | `boolean` | No |  |
| `compliance_framework` | `string` | No |  |
| `container_expiration_policy` | `Record<string, any>` | No |  |
| `container_registry_access_level` | `string` | No |  |
| `container_registry_enabled` | `boolean` | No |  |
| `container_registry_image_prefix` | `string` | No |  |
| `created_at` | `string` | No |  |
| `creator_id` | `number` | No |  |
| `custom_attribute` | `Record<string, any>` | No |  |
| `default_branch` | `string` | No |  |
| `description` | `string` | No |  |
| `description_html` | `string` | No |  |
| `duo_remote_flows_enabled` | `string` | No |  |
| `emails_disabled` | `boolean` | No |  |
| `emails_enabled` | `boolean` | No |  |
| `empty_repo` | `boolean` | No |  |
| `enforce_auth_checks_on_upload` | `boolean` | No |  |
| `environments_access_level` | `string` | No |  |
| `external_authorization_classification_label` | `string` | No |  |
| `feature_flags_access_level` | `string` | No |  |
| `forked_from_project` | `Record<string, any>` | No |  |
| `forking_access_level` | `string` | No |  |
| `forks_count` | `number` | No |  |
| `group_runners_enabled` | `boolean` | No |  |
| `http_url_to_repo` | `string` | No |  |
| `id` | `number` | No |  |
| `import_error` | `string` | No |  |
| `import_status` | `string` | No |  |
| `import_type` | `string` | No |  |
| `import_url` | `string` | No |  |
| `infrastructure_access_level` | `string` | No |  |
| `issue_branch_template` | `string` | No |  |
| `issues_access_level` | `string` | No |  |
| `issues_enabled` | `boolean` | No |  |
| `issues_template` | `string` | No |  |
| `jobs_enabled` | `boolean` | No |  |
| `keep_latest_artifact` | `boolean` | No |  |
| `last_activity_at` | `string` | No |  |
| `lfs_enabled` | `boolean` | No |  |
| `license` | `Record<string, any>` | No |  |
| `license_url` | `string` | No |  |
| `link` | `Record<string, any>` | No |  |
| `marked_for_deletion_at` | `string` | No |  |
| `marked_for_deletion_on` | `string` | No |  |
| `max_artifacts_size` | `number` | No |  |
| `merge_commit_template` | `string` | No |  |
| `merge_method` | `string` | No |  |
| `merge_pipelines_enabled` | `string` | No |  |
| `merge_request_title_regex` | `string` | No |  |
| `merge_request_title_regex_description` | `string` | No |  |
| `merge_requests_access_level` | `string` | No |  |
| `merge_requests_enabled` | `boolean` | No |  |
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
| `mr_default_target_self` | `boolean` | No |  |
| `name` | `string` | No |  |
| `name_with_namespace` | `string` | No |  |
| `namespace` | `Record<string, any>` | No |  |
| `only_allow_merge_if_all_discussions_are_resolved` | `boolean` | No |  |
| `only_allow_merge_if_all_status_checks_passed` | `string` | No |  |
| `only_allow_merge_if_pipeline_succeed` | `boolean` | No |  |
| `only_mirror_protected_branch` | `string` | No |  |
| `open_issues_count` | `number` | No |  |
| `owner` | `Record<string, any>` | No |  |
| `package_registry_access_level` | `string` | No |  |
| `packages_enabled` | `boolean` | No |  |
| `pages_access_level` | `string` | No |  |
| `path` | `string` | No |  |
| `path_with_namespace` | `string` | No |  |
| `permission` | `Record<string, any>` | No |  |
| `pre_receive_secret_detection_enabled` | `boolean` | No |  |
| `prevent_merge_without_jira_issue` | `string` | No |  |
| `printing_merge_request_link_enabled` | `boolean` | No |  |
| `public_job` | `boolean` | No |  |
| `readme_url` | `string` | No |  |
| `releases_access_level` | `string` | No |  |
| `remove_source_branch_after_merge` | `boolean` | No |  |
| `repository_access_level` | `string` | No |  |
| `repository_object_format` | `string` | No |  |
| `repository_storage` | `string` | No |  |
| `request_access_enabled` | `boolean` | No |  |
| `requirements_access_level` | `string` | No |  |
| `requirements_enabled` | `string` | No |  |
| `resolve_outdated_diff_discussion` | `boolean` | No |  |
| `resource_group_default_process_mode` | `string` | No |  |
| `restrict_user_defined_variable` | `boolean` | No |  |
| `runner_token_expiration_interval` | `number` | No |  |
| `runners_token` | `string` | No |  |
| `secret_push_protection_enabled` | `boolean` | No |  |
| `security_and_compliance_access_level` | `string` | No |  |
| `security_and_compliance_enabled` | `string` | No |  |
| `service_desk_address` | `string` | No |  |
| `service_desk_enabled` | `boolean` | No |  |
| `shared_runners_enabled` | `boolean` | No |  |
| `shared_with_group` | `any[]` | No |  |
| `show_diff_preview_in_email` | `boolean` | No |  |
| `snippets_access_level` | `string` | No |  |
| `snippets_enabled` | `boolean` | No |  |
| `spp_repository_pipeline_access` | `boolean` | No |  |
| `squash_commit_template` | `string` | No |  |
| `squash_option` | `string` | No |  |
| `ssh_url_to_repo` | `string` | No |  |
| `star_count` | `number` | No |  |
| `statistic` | `Record<string, any>` | No |  |
| `suggestion_commit_message` | `string` | No |  |
| `tag_list` | `any[]` | No |  |
| `topic` | `any[]` | No |  |
| `updated_at` | `string` | No |  |
| `visibility` | `string` | No |  |
| `warn_about_potentially_unwanted_character` | `boolean` | No |  |
| `web_based_commit_signing_enabled` | `string` | No |  |
| `web_url` | `string` | No |  |
| `wiki_access_level` | `string` | No |  |
| `wiki_enabled` | `boolean` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesProjectWithAccess().load({ id: 'api_entities_project_with_access_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesProjectWithAccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesProjectsContainerRegistryProtectionRuleEntity

```ts
const api_entities_projects_container_registry_protection_rule = client.ApiEntitiesProjectsContainerRegistryProtectionRule()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `number` | No |  |
| `minimum_access_level_for_delete` | `string` | No |  |
| `minimum_access_level_for_push` | `string` | No |  |
| `project_id` | `number` | No |  |
| `repository_path_pattern` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiEntitiesProjectsContainerRegistryProtectionRule().create({
  project_id: /* string */,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiEntitiesProjectsContainerRegistryProtectionRule().list()
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ApiEntitiesProjectsContainerRegistryProtectionRule().update({
  id: 'id',
  project_id: 'project_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesProjectsContainerRegistryProtectionRuleEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesProjectsPackagesProtectionRuleEntity

```ts
const api_entities_projects_packages_protection_rule = client.ApiEntitiesProjectsPackagesProtectionRule()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `number` | No |  |
| `minimum_access_level_for_delete` | `string` | No |  |
| `minimum_access_level_for_push` | `string` | No |  |
| `package_name_pattern` | `string` | No |  |
| `package_type` | `string` | No |  |
| `project_id` | `number` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiEntitiesProjectsPackagesProtectionRule().create({
  project_id: /* string */,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiEntitiesProjectsPackagesProtectionRule().list()
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ApiEntitiesProjectsPackagesProtectionRule().update({
  id: 'id',
  project_id: 'project_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesProjectsPackagesProtectionRuleEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesProjectsTopicEntity

```ts
const api_entities_projects_topic = client.ApiEntitiesProjectsTopic()
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiEntitiesProjectsTopic().create({
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesProjectsTopic().load({ id: 'api_entities_projects_topic_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ApiEntitiesProjectsTopic().update({
  id: 'api_entities_projects_topic_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesProjectsTopicEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesProtectedBranchEntity

```ts
const api_entities_protected_branch = client.ApiEntitiesProtectedBranch()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_force_push` | `boolean` | No |  |
| `code_owner_approval_required` | `boolean` | No |  |
| `id` | `number` | No |  |
| `inherited` | `boolean` | No |  |
| `merge_access_level` | `any[]` | No |  |
| `name` | `string` | No |  |
| `push_access_level` | `any[]` | No |  |
| `unprotect_access_level` | `any[]` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiEntitiesProtectedBranch().create({
  project_id: /* string */,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiEntitiesProtectedBranch().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesProtectedBranch().load({ id: 'api_entities_protected_branch_id', project_id: 'project_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ApiEntitiesProtectedBranch().update({
  id: 'api_entities_protected_branch_id',
  project_id: 'project_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesProtectedBranchEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesProtectedTagEntity

```ts
const api_entities_protected_tag = client.ApiEntitiesProtectedTag()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `create_access_level` | `Record<string, any>` | No |  |
| `name` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiEntitiesProtectedTag().create({
  project_id: /* string */,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiEntitiesProtectedTag().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesProtectedTag().load({ id: 'api_entities_protected_tag_id', project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesProtectedTagEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesPublicGroupDetailEntity

```ts
const api_entities_public_group_detail = client.ApiEntitiesPublicGroupDetail()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiEntitiesPublicGroupDetail().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesPublicGroupDetailEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesRelatedIssueEntity

```ts
const api_entities_related_issue = client.ApiEntitiesRelatedIssue()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assignee` | `Record<string, any>` | No |  |
| `author` | `Record<string, any>` | No |  |
| `blocking_issues_count` | `string` | No |  |
| `closed_at` | `string` | No |  |
| `closed_by` | `Record<string, any>` | No |  |
| `confidential` | `boolean` | No |  |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `discussion_locked` | `boolean` | No |  |
| `downvote` | `string` | No |  |
| `due_date` | `string` | No |  |
| `epic` | `Record<string, any>` | No |  |
| `epic_iid` | `string` | No |  |
| `has_task` | `boolean` | No |  |
| `health_status` | `string` | No |  |
| `id` | `number` | No |  |
| `iid` | `number` | No |  |
| `imported` | `string` | No |  |
| `imported_from` | `string` | No |  |
| `issue_link_id` | `string` | No |  |
| `issue_type` | `string` | No |  |
| `iteration` | `Record<string, any>` | No |  |
| `label` | `any[]` | No |  |
| `link` | `Record<string, any>` | No |  |
| `link_created_at` | `string` | No |  |
| `link_type` | `string` | No |  |
| `link_updated_at` | `string` | No |  |
| `merge_requests_count` | `string` | No |  |
| `milestone` | `Record<string, any>` | No |  |
| `moved_to_id` | `string` | No |  |
| `project_id` | `number` | No |  |
| `reference` | `Record<string, any>` | No |  |
| `service_desk_reply_to` | `string` | No |  |
| `severity` | `string` | No |  |
| `state` | `string` | No |  |
| `subscribed` | `string` | No |  |
| `task_completion_status` | `string` | No |  |
| `task_status` | `string` | No |  |
| `time_stat` | `Record<string, any>` | No |  |
| `title` | `string` | No |  |
| `type` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upvote` | `string` | No |  |
| `user_notes_count` | `string` | No |  |
| `web_url` | `string` | No |  |
| `weight` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiEntitiesRelatedIssue().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesRelatedIssueEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesRelationImportTrackerEntity

```ts
const api_entities_relation_import_tracker = client.ApiEntitiesRelationImportTracker()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiEntitiesRelationImportTracker().create({
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesRelationImportTrackerEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesReleaseEntity

```ts
const api_entities_release = client.ApiEntitiesRelease()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `asset` | `Record<string, any>` | No |  |
| `author` | `Record<string, any>` | No |  |
| `commit` | `Record<string, any>` | No |  |
| `commit_path` | `string` | No |  |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `description_html` | `string` | No |  |
| `evidence` | `Record<string, any>` | No |  |
| `link` | `Record<string, any>` | No |  |
| `milestone` | `Record<string, any>` | No |  |
| `name` | `string` | No |  |
| `released_at` | `string` | No |  |
| `tag_name` | `string` | No |  |
| `tag_path` | `string` | No |  |
| `upcoming_release` | `boolean` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiEntitiesRelease().create({
  project_id: /* string */,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiEntitiesRelease().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesRelease().load({ id: 'api_entities_release_id', project_id: 'project_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ApiEntitiesRelease().update({
  id: 'api_entities_release_id',
  project_id: 'project_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesReleaseEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesReleasesLinkEntity

```ts
const api_entities_releases_link = client.ApiEntitiesReleasesLink()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `direct_asset_url` | `string` | No |  |
| `id` | `number` | No |  |
| `link_type` | `string` | No |  |
| `name` | `string` | No |  |
| `url` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiEntitiesReleasesLink().create({
  project_id: /* string */,
  release_id: /* string */,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiEntitiesReleasesLink().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesReleasesLink().load({ id: 'api_entities_releases_link_id', project_id: 'project_id', release_id: 'release_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ApiEntitiesReleasesLink().update({
  id: 'api_entities_releases_link_id',
  project_id: 'project_id',
  release_id: 'release_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesReleasesLinkEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesRemoteMirrorEntity

```ts
const api_entities_remote_mirror = client.ApiEntitiesRemoteMirror()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_method` | `string` | No |  |
| `enabled` | `boolean` | No |  |
| `host_key` | `any[]` | No |  |
| `id` | `number` | No |  |
| `keep_divergent_ref` | `boolean` | No |  |
| `last_error` | `number` | No |  |
| `last_successful_update_at` | `string` | No |  |
| `last_update_at` | `string` | No |  |
| `last_update_started_at` | `string` | No |  |
| `mirror_branch_regex` | `string` | No |  |
| `only_protected_branch` | `boolean` | No |  |
| `update_status` | `string` | No |  |
| `url` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiEntitiesRemoteMirror().create({
  project_id: /* string */,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiEntitiesRemoteMirror().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesRemoteMirror().load({ id: 'api_entities_remote_mirror_id', project_id: 'project_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ApiEntitiesRemoteMirror().update({
  id: 'api_entities_remote_mirror_id',
  project_id: 'project_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesRemoteMirrorEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesRepositoryHealthEntity

```ts
const api_entities_repository_health = client.ApiEntitiesRepositoryHealth()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alternate` | `Record<string, any>` | No |  |
| `bitmap` | `Record<string, any>` | No |  |
| `commit_graph` | `Record<string, any>` | No |  |
| `is_object_pool` | `boolean` | No |  |
| `last_full_repack` | `Record<string, any>` | No |  |
| `multi_pack_index` | `Record<string, any>` | No |  |
| `multi_pack_index_bitmap` | `Record<string, any>` | No |  |
| `object` | `Record<string, any>` | No |  |
| `reference` | `Record<string, any>` | No |  |
| `size` | `number` | No |  |
| `updated_at` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesRepositoryHealth().load({ project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesRepositoryHealthEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesResourceAccessTokenWithTokenEntity

```ts
const api_entities_resource_access_token_with_token = client.ApiEntitiesResourceAccessTokenWithToken()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access_level` | `number` | No |  |
| `active` | `boolean` | No |  |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `expires_at` | `string` | No |  |
| `id` | `number` | No |  |
| `last_used_at` | `string` | No |  |
| `name` | `string` | No |  |
| `resource_id` | `number` | No |  |
| `resource_type` | `string` | No |  |
| `revoked` | `boolean` | No |  |
| `scope` | `any[]` | No |  |
| `token` | `string` | No |  |
| `user_id` | `number` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiEntitiesResourceAccessTokenWithToken().create({
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesResourceAccessTokenWithTokenEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesResourceMilestoneEventEntity

```ts
const api_entities_resource_milestone_event = client.ApiEntitiesResourceMilestoneEvent()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `string` | No |  |
| `created_at` | `string` | No |  |
| `id` | `number` | No |  |
| `milestone` | `Record<string, any>` | No |  |
| `resource_id` | `number` | No |  |
| `resource_type` | `string` | No |  |
| `state` | `string` | No |  |
| `user` | `Record<string, any>` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiEntitiesResourceMilestoneEvent().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesResourceMilestoneEvent().load({ id: 'api_entities_resource_milestone_event_id', project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesResourceMilestoneEventEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesSnippetEntity

```ts
const api_entities_snippet = client.ApiEntitiesSnippet()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `Record<string, any>` | No |  |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `file` | `any[]` | No |  |
| `file_name` | `string` | No |  |
| `http_url_to_repo` | `string` | No |  |
| `id` | `number` | No |  |
| `imported` | `boolean` | No |  |
| `imported_from` | `string` | No |  |
| `project_id` | `number` | No |  |
| `raw_url` | `string` | No |  |
| `repository_storage` | `string` | No |  |
| `ssh_url_to_repo` | `string` | No |  |
| `title` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `visibility` | `string` | No |  |
| `web_url` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiEntitiesSnippet().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesSnippetEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesSshKeyWithUserEntity

```ts
const api_entities_ssh_key_with_user = client.ApiEntitiesSshKeyWithUser()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No |  |
| `expires_at` | `string` | No |  |
| `id` | `number` | No |  |
| `key` | `string` | No |  |
| `last_used_at` | `string` | No |  |
| `title` | `string` | No |  |
| `usage_type` | `string` | No |  |
| `user` | `Record<string, any>` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesSshKeyWithUser().load({ id: 'api_entities_ssh_key_with_user_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesSshKeyWithUserEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesSuggestionEntity

```ts
const api_entities_suggestion = client.ApiEntitiesSuggestion()
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

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ApiEntitiesSuggestion().update({
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesSuggestionEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesSystemBroadcastMessageEntity

```ts
const api_entities_system_broadcast_message = client.ApiEntitiesSystemBroadcastMessage()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | No |  |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiEntitiesSystemBroadcastMessage().create({
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesSystemBroadcastMessage().load({ id: 'api_entities_system_broadcast_message_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.ApiEntitiesSystemBroadcastMessage().remove({ id: 'api_entities_system_broadcast_message_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ApiEntitiesSystemBroadcastMessage().update({
  id: 'api_entities_system_broadcast_message_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesSystemBroadcastMessageEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesTagEntity

```ts
const api_entities_tag = client.ApiEntitiesTag()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `commit` | `Record<string, any>` | No |  |
| `created_at` | `string` | No |  |
| `message` | `string` | No |  |
| `name` | `string` | No |  |
| `protected` | `boolean` | No |  |
| `release` | `Record<string, any>` | No |  |
| `target` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiEntitiesTag().create({
  project_id: /* string */,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiEntitiesTag().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesTag().load({ id: 'api_entities_tag_id', project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesTagEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesTagSignatureEntity

```ts
const api_entities_tag_signature = client.ApiEntitiesTagSignature()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `signature` | `string` | No |  |
| `signature_type` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesTagSignature().load({ project_id: 'project_id', tag_name: 'tag_name' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesTagSignatureEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesTemplatesListEntity

```ts
const api_entities_templates_list = client.ApiEntitiesTemplatesList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `key` | `string` | No |  |
| `name` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesTemplatesList().load({ project_id: 'project_id', type: 'type' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesTemplatesListEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesTerraformModuleVersionEntity

```ts
const api_entities_terraform_module_version = client.ApiEntitiesTerraformModuleVersion()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiEntitiesTerraformModuleVersion().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesTerraformModuleVersion().load({ module_name: 'module_name', module_system: 'module_system' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesTerraformModuleVersionEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesTreeObjectEntity

```ts
const api_entities_tree_object = client.ApiEntitiesTreeObject()
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesTreeObject().load({ project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesTreeObjectEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesTriggerEntity

```ts
const api_entities_trigger = client.ApiEntitiesTrigger()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `expires_at` | `string` | No |  |
| `id` | `number` | No |  |
| `last_used` | `string` | No |  |
| `owner` | `Record<string, any>` | No |  |
| `token` | `string` | No |  |
| `updated_at` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiEntitiesTrigger().create({
  project_id: /* string */,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiEntitiesTrigger().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesTrigger().load({ id: 'api_entities_trigger_id', project_id: 'project_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ApiEntitiesTrigger().update({
  id: 'api_entities_trigger_id',
  project_id: 'project_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesTriggerEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesUserAgentDetailEntity

```ts
const api_entities_user_agent_detail = client.ApiEntitiesUserAgentDetail()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `akismet_submitted` | `boolean` | No |  |
| `ip_address` | `string` | No |  |
| `user_agent` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesUserAgentDetail().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesUserAgentDetailEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesUserCountEntity

```ts
const api_entities_user_count = client.ApiEntitiesUserCount()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assigned_issue` | `number` | No |  |
| `assigned_merge_request` | `number` | No |  |
| `merge_request` | `number` | No |  |
| `review_requested_merge_request` | `number` | No |  |
| `todo` | `number` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesUserCount().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesUserCountEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesUserPublicEntity

```ts
const api_entities_user_public = client.ApiEntitiesUserPublic()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_path` | `string` | No |  |
| `avatar_url` | `string` | No |  |
| `bio` | `string` | No |  |
| `bot` | `string` | No |  |
| `can_create_group` | `boolean` | No |  |
| `can_create_project` | `boolean` | No |  |
| `color_scheme_id` | `number` | No |  |
| `commit_email` | `string` | No |  |
| `confirmed_at` | `string` | No |  |
| `created_at` | `string` | No |  |
| `current_sign_in_at` | `string` | No |  |
| `custom_attribute` | `any[]` | No |  |
| `discord` | `string` | No |  |
| `email` | `string` | No |  |
| `external` | `string` | No |  |
| `extra_shared_runners_minutes_limit` | `string` | No |  |
| `follower` | `string` | No |  |
| `following` | `string` | No |  |
| `github` | `string` | No |  |
| `id` | `number` | No |  |
| `identity` | `Record<string, any>` | No |  |
| `is_followed` | `boolean` | No |  |
| `job_title` | `string` | No |  |
| `key` | `string` | No |  |
| `last_activity_on` | `string` | No |  |
| `last_sign_in_at` | `string` | No |  |
| `linkedin` | `string` | No |  |
| `local_time` | `string` | No |  |
| `location` | `string` | No |  |
| `locked` | `boolean` | No |  |
| `name` | `string` | No |  |
| `organization` | `string` | No |  |
| `preferred_language` | `string` | No |  |
| `private_profile` | `boolean` | No |  |
| `projects_limit` | `number` | No |  |
| `pronoun` | `string` | No |  |
| `public_email` | `string` | No |  |
| `scim_identity` | `Record<string, any>` | No |  |
| `shared_runners_minutes_limit` | `string` | No |  |
| `state` | `string` | No |  |
| `theme_id` | `number` | No |  |
| `twitter` | `string` | No |  |
| `two_factor_enabled` | `boolean` | No |  |
| `username` | `string` | No |  |
| `value` | `string` | No |  |
| `web_url` | `string` | No |  |
| `website_url` | `string` | No |  |
| `work_information` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiEntitiesUserPublic().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesUserPublicEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesUserWithAdminEntity

```ts
const api_entities_user_with_admin = client.ApiEntitiesUserWithAdmin()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `key` | `string` | No |  |
| `value` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiEntitiesUserWithAdmin().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesUserWithAdminEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesWikiAttachmentEntity

```ts
const api_entities_wiki_attachment = client.ApiEntitiesWikiAttachment()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiEntitiesWikiAttachment().create({
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesWikiAttachmentEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesWikiPageEntity

```ts
const api_entities_wiki_page = client.ApiEntitiesWikiPage()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content` | `string` | No |  |
| `encoding` | `string` | No |  |
| `format` | `string` | No |  |
| `front_matter` | `Record<string, any>` | No |  |
| `slug` | `string` | No |  |
| `title` | `string` | No |  |
| `wiki_page_meta_id` | `number` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiEntitiesWikiPage().create({
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiEntitiesWikiPage().load({ slug: 'slug' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ApiEntitiesWikiPage().update({
  slug: 'slug',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesWikiPageEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntitiesWikiPageBasicEntity

```ts
const api_entities_wiki_page_basic = client.ApiEntitiesWikiPageBasic()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `format` | `string` | No |  |
| `slug` | `string` | No |  |
| `title` | `string` | No |  |
| `wiki_page_meta_id` | `number` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiEntitiesWikiPageBasic().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntitiesWikiPageBasicEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApplicationEntity

```ts
const application = client.Application()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Application().remove({ id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApplicationEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AwardEmojiEntity

```ts
const award_emoji = client.AwardEmoji()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.AwardEmoji().remove({ id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AwardEmojiEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BadgeEntity

```ts
const badge = client.Badge()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Badge().remove({ id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BadgeEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BranchEntity

```ts
const branch = client.Branch()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Branch().remove({ project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BranchEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CargoPackageEntity

```ts
const cargo_package = client.CargoPackage()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.CargoPackage().load({ project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CargoPackageEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CiVariableEntity

```ts
const ci_variable = client.CiVariable()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.CiVariable().remove({ id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CiVariableEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ClusterEntity

```ts
const cluster = client.Cluster()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Cluster().remove({ id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ClusterEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ClusterAgentEntity

```ts
const cluster_agent = client.ClusterAgent()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.ClusterAgent().remove({ id: 'id', project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ClusterAgentEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ComposerEntity

```ts
const composer = client.Composer()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Composer().create({
  project_id: /* string */,
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ComposerEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ComposerPackageEntity

```ts
const composer_package = client.ComposerPackage()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ComposerPackage().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ComposerPackageEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ConanEntity

```ts
const conan = client.Conan()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Conan().remove({ package_channel: 'package_channel', package_name: 'package_name', package_username: 'package_username', package_version: 'package_version' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ConanEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ConanPackageEntity

```ts
const conan_package = client.ConanPackage()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ConanPackage().load({ id: 'conan_package_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.ConanPackage().remove({ conan_id: 'conan_id', package_channel: 'package_channel', package_username: 'package_username', package_version: 'package_version', project_id: 'project_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ConanPackage().update({
  id: 'conan_package_id',
  file_name: 'file_name',
  package_channel: 'package_channel',
  package_username: 'package_username',
  package_version: 'package_version',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ConanPackageEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ContainerRegistryEntity

```ts
const container_registry = client.ContainerRegistry()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.ContainerRegistry().remove({ project_id: 'project_id', repository_id: 'repository_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ContainerRegistryEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ContainerRegistryEventEntity

```ts
const container_registry_event = client.ContainerRegistryEvent()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ContainerRegistryEvent().create({
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ContainerRegistryEventEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CustomAttributeEntity

```ts
const custom_attribute = client.CustomAttribute()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `key` | `string` | No |  |
| `value` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.CustomAttribute().load({ id: 'custom_attribute_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CustomAttributeEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DebianEntity

```ts
const debian = client.Debian()
```

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Debian().update({
  id: 'id',
  project_id: 'project_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DebianEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DebianDistributionEntity

```ts
const debian_distribution = client.DebianDistribution()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.DebianDistribution().remove({ id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DebianDistributionEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DebianPackageEntity

```ts
const debian_package = client.DebianPackage()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.DebianPackage().load({ id: 'debian_package_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.DebianPackage().update({
  file_name: 'file_name',
  project_id: 'project_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DebianPackageEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DependencyProxyEntity

```ts
const dependency_proxy = client.DependencyProxy()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.DependencyProxy().remove({ group_id: 'group_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DependencyProxyEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DeployKeyEntity

```ts
const deploy_key = client.DeployKey()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.DeployKey().remove({ id: 'id', project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DeployKeyEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DeployTokenEntity

```ts
const deploy_token = client.DeployToken()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.DeployToken().remove({ id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DeployTokenEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DeploymentEntity

```ts
const deployment = client.Deployment()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Deployment().remove({ id: 'id', project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DeploymentEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EeApiEntitiesApprovalStateEntity

```ts
const ee_api_entities_approval_state = client.EeApiEntitiesApprovalState()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.EeApiEntitiesApprovalState().create({
  merge_request_id: /* string */,
  project_id: /* string */,
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EeApiEntitiesApprovalStateEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EeApiEntitiesAuditEventEntity

```ts
const ee_api_entities_audit_event = client.EeApiEntitiesAuditEvent()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.EeApiEntitiesAuditEvent().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.EeApiEntitiesAuditEvent().load({ id: 'ee_api_entities_audit_event_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EeApiEntitiesAuditEventEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EeApiEntitiesBillableMembershipEntity

```ts
const ee_api_entities_billable_membership = client.EeApiEntitiesBillableMembership()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access_level` | `Record<string, any>` | No |  |
| `created_at` | `string` | No |  |
| `expires_at` | `string` | No |  |
| `id` | `string` | No |  |
| `source_full_name` | `string` | No |  |
| `source_id` | `string` | No |  |
| `source_members_url` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.EeApiEntitiesBillableMembership().load({ billable_member_id: 'billable_member_id', group_id: 'group_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EeApiEntitiesBillableMembershipEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EeApiEntitiesGeoNodeStatusEntity

```ts
const ee_api_entities_geo_node_status = client.EeApiEntitiesGeoNodeStatus()
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
| `link` | `Record<string, any>` | No |  |
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
| `namespace` | `Record<string, any>` | No |  |
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
| `storage_shard` | `Record<string, any>` | No |  |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.EeApiEntitiesGeoNodeStatus().create({
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EeApiEntitiesGeoNodeStatusEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EeApiEntitiesGeoPipelineRefEntity

```ts
const ee_api_entities_geo_pipeline_ref = client.EeApiEntitiesGeoPipelineRef()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `pipeline_ref` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.EeApiEntitiesGeoPipelineRef().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EeApiEntitiesGeoPipelineRefEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EeApiEntitiesIssuableMetricImageEntity

```ts
const ee_api_entities_issuable_metric_image = client.EeApiEntitiesIssuableMetricImage()
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.EeApiEntitiesIssuableMetricImage().create({
  issue_id: /* string */,
  project_id: /* string */,
})
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.EeApiEntitiesIssuableMetricImage().remove({ id: 'id', issue_id: 'issue_id', project_id: 'project_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.EeApiEntitiesIssuableMetricImage().update({
  id: 'id',
  issue_id: 'issue_id',
  project_id: 'project_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EeApiEntitiesIssuableMetricImageEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EeApiEntitiesMergeRequestApprovalStateEntity

```ts
const ee_api_entities_merge_request_approval_state = client.EeApiEntitiesMergeRequestApprovalState()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `approvals_required` | `number` | No |  |
| `approved` | `boolean` | No |  |
| `approved_by` | `any[]` | No |  |
| `code_owner` | `boolean` | No |  |
| `contains_hidden_group` | `boolean` | No |  |
| `eligible_approver` | `any[]` | No |  |
| `group` | `any[]` | No |  |
| `id` | `number` | No |  |
| `name` | `string` | No |  |
| `overridden` | `boolean` | No |  |
| `report_type` | `string` | No |  |
| `rule_type` | `string` | No |  |
| `section` | `string` | No |  |
| `source_rule` | `Record<string, any>` | No |  |
| `user` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.EeApiEntitiesMergeRequestApprovalState().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EeApiEntitiesMergeRequestApprovalStateEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EeApiEntitiesSshCertificateEntity

```ts
const ee_api_entities_ssh_certificate = client.EeApiEntitiesSshCertificate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No |  |
| `id` | `number` | No |  |
| `key` | `string` | No |  |
| `title` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.EeApiEntitiesSshCertificate().create({
  group_id: /* string */,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.EeApiEntitiesSshCertificate().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EeApiEntitiesSshCertificateEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EnvironmentEntity

```ts
const environment = client.Environment()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Environment().create({
  project_id: /* string */,
})
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Environment().remove({ id: 'id', project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EnvironmentEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ErrorTrackingClientKeyEntity

```ts
const error_tracking_client_key = client.ErrorTrackingClientKey()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.ErrorTrackingClientKey().remove({ id: 'id', project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ErrorTrackingClientKeyEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## FeatureEntity

```ts
const feature = client.Feature()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Feature().remove({ id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `FeatureEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## FeatureFlagEntity

```ts
const feature_flag = client.FeatureFlag()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.FeatureFlag().create({
  unleash_id: /* string */,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.FeatureFlag().load({ project_id: 'project_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.FeatureFlag().remove({ id: 'id', project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `FeatureFlagEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## FeatureFlagsUserListEntity

```ts
const feature_flags_user_list = client.FeatureFlagsUserList()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.FeatureFlagsUserList().remove({ id: 'id', project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `FeatureFlagsUserListEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## FreezePeriodEntity

```ts
const freeze_period = client.FreezePeriod()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.FreezePeriod().remove({ id: 'id', project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `FreezePeriodEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## GenericPackageEntity

```ts
const generic_package = client.GenericPackage()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.GenericPackage().load({ file_name: 'file_name', generic_id: 'generic_id', project_id: 'project_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.GenericPackage().update({
  file_name: 'file_name',
  generic_id: 'generic_id',
  project_id: 'project_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GenericPackageEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## GeoEntity

```ts
const geo = client.Geo()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Geo().create({
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Geo().load({ replicable_id: 'replicable_id', replicable_name: 'replicable_name' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GeoEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## GoProxyEntity

```ts
const go_proxy = client.GoProxy()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.GoProxy().load({ project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GoProxyEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## GroupEntity

```ts
const group = client.Group()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Group().create({
  id: /* string */,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Group().load({ id: 'group_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Group().remove({ id: 'group_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Group().update({
  id: 'group_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GroupEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## GroupAvatarEntity

```ts
const group_avatar = client.GroupAvatar()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.GroupAvatar().load({ id: 'group_avatar_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GroupAvatarEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## GroupExportEntity

```ts
const group_export = client.GroupExport()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.GroupExport().create({
  id: /* string */,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.GroupExport().load({ group_id: 'group_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GroupExportEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## GroupImportEntity

```ts
const group_import = client.GroupImport()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.GroupImport().create({
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GroupImportEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## HelmPackageEntity

```ts
const helm_package = client.HelmPackage()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.HelmPackage().create({
  project_id: /* string */,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.HelmPackage().load({ project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `HelmPackageEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## HookEntity

```ts
const hook = client.Hook()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Hook().create({
  id: /* string */,
})
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Hook().remove({ id: 'id', key: 'key' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Hook().update({
  id: 'id',
  key: 'key',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `HookEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ImportEntity

```ts
const import_ = client.Import()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Import().create({
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ImportEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IntegrationEntity

```ts
const integration = client.Integration()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Integration().create({
})
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Integration().remove()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IntegrationEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## InvitationEntity

```ts
const invitation = client.Invitation()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Invitation().remove({ id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `InvitationEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IssueLinkEntity

```ts
const issue_link = client.IssueLink()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.IssueLink().remove({ id: 'id', issue_id: 'issue_id', project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IssueLinkEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IssuesStatisticEntity

```ts
const issues_statistic = client.IssuesStatistic()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.IssuesStatistic().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IssuesStatisticEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## JobEntity

```ts
const job = client.Job()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Job().create({
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Job().load({ id: 'job_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Job().update({
  id: 'job_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `JobEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MavenPackageEntity

```ts
const maven_package = client.MavenPackage()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.MavenPackage().load({ file_name: 'file_name' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.MavenPackage().update({
  file_name: 'file_name',
  project_id: 'project_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MavenPackageEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MemberEntity

```ts
const member = client.Member()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Member().remove({ id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MemberEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MergeRequestEntity

```ts
const merge_request = client.MergeRequest()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.MergeRequest().load({ id: 'merge_request_id', project_id: 'project_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.MergeRequest().remove({ id: 'merge_request_id', project_id: 'project_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.MergeRequest().update({
  id: 'merge_request_id',
  project_id: 'project_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MergeRequestEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MetadataEntity

```ts
const metadata = client.Metadata()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enterprise` | `boolean` | No |  |
| `kas` | `Record<string, any>` | No |  |
| `revision` | `string` | No |  |
| `version` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Metadata().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MetadataEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MigrationEntity

```ts
const migration = client.Migration()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Migration().create({
  timestamp: /* any */,
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MigrationEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MlModelRegistryEntity

```ts
const ml_model_registry = client.MlModelRegistry()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.MlModelRegistry().load({ file_name: 'file_name', ml_model_id: 'ml_model_id', project_id: 'project_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.MlModelRegistry().update({
  file_name: 'file_name',
  ml_model_id: 'ml_model_id',
  project_id: 'project_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MlModelRegistryEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## NamespaceEntity

```ts
const namespace = client.Namespace()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Namespace().remove({ id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `NamespaceEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## NpmEntity

```ts
const npm = client.Npm()
```

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Npm().update({
  id: 'id',
  project_id: 'project_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `NpmEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## NpmPackageEntity

```ts
const npm_package = client.NpmPackage()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.NpmPackage().create({
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.NpmPackage().load({ project_id: 'project_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.NpmPackage().remove({ tag: 'tag' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.NpmPackage().update({
  tag: 'tag',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `NpmPackageEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## NugetEntity

```ts
const nuget = client.Nuget()
```

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Nuget().update({
  project_id: 'project_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `NugetEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## NugetPackageEntity

```ts
const nuget_package = client.NugetPackage()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `catalog_entry` | `Record<string, any>` | No |  |
| `count` | `number` | No |  |
| `id` | `string` | No |  |
| `item` | `any[]` | No |  |
| `lower` | `string` | No |  |
| `package_content` | `string` | No |  |
| `upper` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.NugetPackage().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.NugetPackage().load()
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.NugetPackage().remove({ project_id: 'project_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.NugetPackage().update({
  project_id: 'project_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `NugetPackageEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PackageFileEntity

```ts
const package_file = client.PackageFile()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.PackageFile().load({ id: 'package_file_id', package_id: 'package_id', project_id: 'project_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.PackageFile().remove({ id: 'package_file_id', package_id: 'package_id', project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PackageFileEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PageEntity

```ts
const page = client.Page()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Page().load({ project_id: 'project_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Page().remove({ project_id: 'project_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Page().update({
  project_id: 'project_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PageEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ParticipantEntity

```ts
const participant = client.Participant()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `key` | `string` | No |  |
| `value` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Participant().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ParticipantEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PersonalAccessTokenEntity

```ts
const personal_access_token = client.PersonalAccessToken()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.PersonalAccessToken().remove({ id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PersonalAccessTokenEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProjectEntity

```ts
const project = client.Project()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `before_sha` | `string` | No |  |
| `committed_at` | `string` | No |  |
| `coverage` | `number` | No |  |
| `created_at` | `string` | No |  |
| `detailed_status` | `Record<string, any>` | No |  |
| `duration` | `number` | No |  |
| `finished_at` | `string` | No |  |
| `id` | `number` | No |  |
| `iid` | `number` | No |  |
| `name` | `string` | No |  |
| `project_id` | `number` | No |  |
| `queued_duration` | `number` | No |  |
| `ref` | `string` | No |  |
| `sha` | `string` | No |  |
| `source` | `string` | No |  |
| `started_at` | `string` | No |  |
| `status` | `string` | No |  |
| `tag` | `boolean` | No |  |
| `updated_at` | `string` | No |  |
| `user` | `Record<string, any>` | No |  |
| `web_url` | `string` | No |  |
| `yaml_error` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Project().create({
  id: /* string */,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Project().load({ id: 'project_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Project().remove({ id: 'project_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Project().update({
  id: 'project_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProjectEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProjectAvatarEntity

```ts
const project_avatar = client.ProjectAvatar()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ProjectAvatar().load({ id: 'project_avatar_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProjectAvatarEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProjectEntityEntity

```ts
const project_entity = client.ProjectEntity()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ProjectEntity().create({
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProjectEntityEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProjectExportEntity

```ts
const project_export = client.ProjectExport()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ProjectExport().create({
  id: /* string */,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ProjectExport().load({ project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProjectExportEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProjectHookEntity

```ts
const project_hook = client.ProjectHook()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.ProjectHook().remove({ id: 'id', project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProjectHookEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProjectImportEntity

```ts
const project_import = client.ProjectImport()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ProjectImport().create({
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProjectImportEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProjectImportEntityEntity

```ts
const project_import_entity = client.ProjectImportEntity()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `forked` | `boolean` | No |  |
| `full_name` | `string` | No |  |
| `full_path` | `string` | No |  |
| `human_import_status_name` | `string` | No |  |
| `id` | `number` | No |  |
| `import_error` | `string` | No |  |
| `import_source` | `string` | No |  |
| `import_status` | `string` | No |  |
| `import_warning` | `string` | No |  |
| `name` | `string` | No |  |
| `provider_link` | `string` | No |  |
| `refs_url` | `string` | No |  |
| `relation_type` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ProjectImportEntity().create({
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProjectImportEntityEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProjectPackageEntity

```ts
const project_package = client.ProjectPackage()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.ProjectPackage().remove({ id: 'id', project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProjectPackageEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProjectSnippetEntity

```ts
const project_snippet = client.ProjectSnippet()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.ProjectSnippet().remove({ id: 'id', project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProjectSnippetEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProjectsJobTokenScopeEntity

```ts
const projects_job_token_scope = client.ProjectsJobTokenScope()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.ProjectsJobTokenScope().remove({ project_id: 'project_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ProjectsJobTokenScope().update({
  project_id: 'project_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProjectsJobTokenScopeEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProtectedTagEntity

```ts
const protected_tag = client.ProtectedTag()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.ProtectedTag().remove({ id: 'id', project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProtectedTagEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PypiEntity

```ts
const pypi = client.Pypi()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Pypi().create({
  project_id: /* string */,
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PypiEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PypiPackageEntity

```ts
const pypi_package = client.PypiPackage()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.PypiPackage().create({
  project_id: /* string */,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.PypiPackage().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PypiPackageEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ReleaseEntity

```ts
const release = client.Release()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Release().load({ project_id: 'project_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Release().remove({ id: 'id', project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ReleaseEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ReleaseLinkEntity

```ts
const release_link = client.ReleaseLink()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.ReleaseLink().remove({ id: 'id', project_id: 'project_id', release_id: 'release_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ReleaseLinkEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RemoteMirrorEntity

```ts
const remote_mirror = client.RemoteMirror()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.RemoteMirror().create({
  id: /* string */,
  project_id: /* string */,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.RemoteMirror().load({ id: 'remote_mirror_id', project_id: 'project_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.RemoteMirror().remove({ id: 'remote_mirror_id', project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RemoteMirrorEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RpmEntity

```ts
const rpm = client.Rpm()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Rpm().create({
  project_id: /* string */,
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RpmEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RpmPackageEntity

```ts
const rpm_package = client.RpmPackage()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.RpmPackage().create({
  project_id: /* string */,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.RpmPackage().load({ project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RpmPackageEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RubygemEntity

```ts
const rubygem = client.Rubygem()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Rubygem().load({ id: 'rubygem_id', project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RubygemEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RubygemPackageEntity

```ts
const rubygem_package = client.RubygemPackage()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.RubygemPackage().create({
  project_id: /* string */,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.RubygemPackage().load({ project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RubygemPackageEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RunnerEntity

```ts
const runner = client.Runner()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Runner().create({
})
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Runner().remove()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RunnerEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SearchEntity

```ts
const search = client.Search()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Search().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SearchEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SecureFileEntity

```ts
const secure_file = client.SecureFile()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.SecureFile().load({ id: 'secure_file_id', project_id: 'project_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.SecureFile().remove({ id: 'secure_file_id', project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SecureFileEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SlackEntity

```ts
const slack = client.Slack()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Slack().create({
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SlackEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SnippetEntity

```ts
const snippet = client.Snippet()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Snippet().load({ id: 'snippet_id', file_id: 'file_id', file_path: 'file_path' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Snippet().remove({ id: 'snippet_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SnippetEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## StarrerEntity

```ts
const starrer = client.Starrer()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_path` | `string` | No |  |
| `avatar_url` | `string` | No |  |
| `custom_attribute` | `any[]` | No |  |
| `id` | `number` | No |  |
| `locked` | `boolean` | No |  |
| `name` | `string` | No |  |
| `public_email` | `string` | No |  |
| `state` | `string` | No |  |
| `username` | `string` | No |  |
| `web_url` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Starrer().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `StarrerEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SystemHookEntity

```ts
const system_hook = client.SystemHook()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.SystemHook().remove({ id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SystemHookEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TagEntity

```ts
const tag = client.Tag()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Tag().remove({ id: 'id', project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TagEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TerraformRegistryEntity

```ts
const terraform_registry = client.TerraformRegistry()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.TerraformRegistry().load({ id: 'terraform_registry_id', module_system: 'module_system' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.TerraformRegistry().update({
  module_id: 'module_id',
  module_system: 'module_system',
  project_id: 'project_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TerraformRegistryEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TerraformStateEntity

```ts
const terraform_state = client.TerraformState()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.TerraformState().create({
  project_id: /* string */,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.TerraformState().load({ id: 'terraform_state_id', project_id: 'project_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.TerraformState().remove({ id: 'terraform_state_id', project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TerraformStateEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TestReportEntity

```ts
const test_report = client.TestReport()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `error_count` | `number` | No |  |
| `failed_count` | `number` | No |  |
| `name` | `string` | No |  |
| `skipped_count` | `number` | No |  |
| `success_count` | `number` | No |  |
| `suite_error` | `string` | No |  |
| `test_case` | `any[]` | No |  |
| `total_count` | `number` | No |  |
| `total_time` | `number` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.TestReport().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TestReportEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TestReportSummaryEntity

```ts
const test_report_summary = client.TestReportSummary()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `test_suite` | `Record<string, any>` | No |  |
| `total` | `Record<string, any>` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.TestReportSummary().load({ pipeline_id: 'pipeline_id', project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TestReportSummaryEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TopicEntity

```ts
const topic = client.Topic()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Topic().remove({ id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TopicEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UnleashApiEntity

```ts
const unleash_api = client.UnleashApi()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.UnleashApi().load({ unleash_id: 'unleash_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UnleashApiEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UsageDataEntity

```ts
const usage_data = client.UsageData()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.UsageData().create({
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.UsageData().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UsageDataEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UserEntity

```ts
const user = client.User()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_path` | `string` | No |  |
| `avatar_url` | `string` | No |  |
| `custom_attribute` | `any[]` | No |  |
| `id` | `number` | No |  |
| `locked` | `boolean` | No |  |
| `name` | `string` | No |  |
| `public_email` | `string` | No |  |
| `state` | `string` | No |  |
| `username` | `string` | No |  |
| `web_url` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.User().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UserEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WebCommitEntity

```ts
const web_commit = client.WebCommit()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.WebCommit().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WebCommitEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WikiEntity

```ts
const wiki = client.Wiki()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Wiki().remove({ id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WikiEntity` instance with the same client and
options.

#### `client()`

Return the parent `GitlabSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new GitlabSDK({
  feature: {
    test: { active: true },
  }
})
```

