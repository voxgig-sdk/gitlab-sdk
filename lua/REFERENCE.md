# Gitlab Lua SDK Reference

Complete API reference for the Gitlab Lua SDK.


## GitlabSDK

### Constructor

```lua
local sdk = require("gitlab_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `AccessRequest(data)`

Create a new `AccessRequest` entity instance. Pass `nil` for no initial data.

#### `AlertManagement(data)`

Create a new `AlertManagement` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesAccessRequester(data)`

Create a new `ApiEntitiesAccessRequester` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesAppearance(data)`

Create a new `ApiEntitiesAppearance` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesApplication(data)`

Create a new `ApiEntitiesApplication` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesApplicationStatistic(data)`

Create a new `ApiEntitiesApplicationStatistic` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesApplicationWithSecret(data)`

Create a new `ApiEntitiesApplicationWithSecret` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesAvatar(data)`

Create a new `ApiEntitiesAvatar` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesAwardEmoji(data)`

Create a new `ApiEntitiesAwardEmoji` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesBadge(data)`

Create a new `ApiEntitiesBadge` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesBasicBadgeDetail(data)`

Create a new `ApiEntitiesBasicBadgeDetail` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesBasicGroupDetail(data)`

Create a new `ApiEntitiesBasicGroupDetail` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesBasicProjectDetail(data)`

Create a new `ApiEntitiesBasicProjectDetail` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesBasicRef(data)`

Create a new `ApiEntitiesBasicRef` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesBasicSuccess(data)`

Create a new `ApiEntitiesBasicSuccess` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesBatchedBackgroundMigration(data)`

Create a new `ApiEntitiesBatchedBackgroundMigration` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesBranch(data)`

Create a new `ApiEntitiesBranch` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesBulkImport(data)`

Create a new `ApiEntitiesBulkImport` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesBulkImportsEntityFailure(data)`

Create a new `ApiEntitiesBulkImportsEntityFailure` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesBulkImportsExportStatus(data)`

Create a new `ApiEntitiesBulkImportsExportStatus` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesChangelog(data)`

Create a new `ApiEntitiesChangelog` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesCiBridge(data)`

Create a new `ApiEntitiesCiBridge` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesCiCatalogResourcesVersion(data)`

Create a new `ApiEntitiesCiCatalogResourcesVersion` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesCiJob(data)`

Create a new `ApiEntitiesCiJob` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesCiJobBasic(data)`

Create a new `ApiEntitiesCiJobBasic` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesCiJobBasicWithProject(data)`

Create a new `ApiEntitiesCiJobBasicWithProject` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesCiLintResult(data)`

Create a new `ApiEntitiesCiLintResult` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesCiPipeline(data)`

Create a new `ApiEntitiesCiPipeline` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesCiPipelineBasic(data)`

Create a new `ApiEntitiesCiPipelineBasic` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesCiPipelineSchedule(data)`

Create a new `ApiEntitiesCiPipelineSchedule` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesCiPipelineScheduleDetail(data)`

Create a new `ApiEntitiesCiPipelineScheduleDetail` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesCiResetTokenResult(data)`

Create a new `ApiEntitiesCiResetTokenResult` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesCiResourceGroup(data)`

Create a new `ApiEntitiesCiResourceGroup` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesCiRunner(data)`

Create a new `ApiEntitiesCiRunner` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesCiRunnerDetail(data)`

Create a new `ApiEntitiesCiRunnerDetail` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesCiRunnerManager(data)`

Create a new `ApiEntitiesCiRunnerManager` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesCiRunnerRegistrationDetail(data)`

Create a new `ApiEntitiesCiRunnerRegistrationDetail` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesCiSecureFile(data)`

Create a new `ApiEntitiesCiSecureFile` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesCiVariable(data)`

Create a new `ApiEntitiesCiVariable` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesCluster(data)`

Create a new `ApiEntitiesCluster` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesClusterGroup(data)`

Create a new `ApiEntitiesClusterGroup` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesClusterProject(data)`

Create a new `ApiEntitiesClusterProject` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesClustersAgent(data)`

Create a new `ApiEntitiesClustersAgent` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesClustersAgentToken(data)`

Create a new `ApiEntitiesClustersAgentToken` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesClustersAgentTokenBasic(data)`

Create a new `ApiEntitiesClustersAgentTokenBasic` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesClustersAgentTokenWithToken(data)`

Create a new `ApiEntitiesClustersAgentTokenWithToken` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesCommit(data)`

Create a new `ApiEntitiesCommit` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesCommitDetail(data)`

Create a new `ApiEntitiesCommitDetail` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesCommitNote(data)`

Create a new `ApiEntitiesCommitNote` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesCommitSequence(data)`

Create a new `ApiEntitiesCommitSequence` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesCommitSignature(data)`

Create a new `ApiEntitiesCommitSignature` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesCommitStatus(data)`

Create a new `ApiEntitiesCommitStatus` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesCompare(data)`

Create a new `ApiEntitiesCompare` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesContainerRegistryRepository(data)`

Create a new `ApiEntitiesContainerRegistryRepository` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesContainerRegistryTag(data)`

Create a new `ApiEntitiesContainerRegistryTag` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesContainerRegistryTagDetail(data)`

Create a new `ApiEntitiesContainerRegistryTagDetail` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesContributor(data)`

Create a new `ApiEntitiesContributor` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesDeployKey(data)`

Create a new `ApiEntitiesDeployKey` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesDeployKeysProject(data)`

Create a new `ApiEntitiesDeployKeysProject` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesDeployToken(data)`

Create a new `ApiEntitiesDeployToken` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesDeployTokenWithToken(data)`

Create a new `ApiEntitiesDeployTokenWithToken` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesDeployment(data)`

Create a new `ApiEntitiesDeployment` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesDeploymentExtended(data)`

Create a new `ApiEntitiesDeploymentExtended` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesDeploymentsApproval(data)`

Create a new `ApiEntitiesDeploymentsApproval` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesDictionaryTable(data)`

Create a new `ApiEntitiesDictionaryTable` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesDiff(data)`

Create a new `ApiEntitiesDiff` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesDiscoveredCluster(data)`

Create a new `ApiEntitiesDiscoveredCluster` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesDraftNote(data)`

Create a new `ApiEntitiesDraftNote` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesEnvironment(data)`

Create a new `ApiEntitiesEnvironment` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesErrorTrackingClientKey(data)`

Create a new `ApiEntitiesErrorTrackingClientKey` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesErrorTrackingProjectSetting(data)`

Create a new `ApiEntitiesErrorTrackingProjectSetting` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesEvent(data)`

Create a new `ApiEntitiesEvent` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesFeature(data)`

Create a new `ApiEntitiesFeature` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesFeatureDefinition(data)`

Create a new `ApiEntitiesFeatureDefinition` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesFeatureFlag(data)`

Create a new `ApiEntitiesFeatureFlag` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesFeatureFlagUserList(data)`

Create a new `ApiEntitiesFeatureFlagUserList` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesFreezePeriod(data)`

Create a new `ApiEntitiesFreezePeriod` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesGitlabSubscription(data)`

Create a new `ApiEntitiesGitlabSubscription` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesGoModuleVersion(data)`

Create a new `ApiEntitiesGoModuleVersion` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesGroup(data)`

Create a new `ApiEntitiesGroup` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesGroupDetail(data)`

Create a new `ApiEntitiesGroupDetail` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesHook(data)`

Create a new `ApiEntitiesHook` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesIntegration(data)`

Create a new `ApiEntitiesIntegration` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesIntegrationBasic(data)`

Create a new `ApiEntitiesIntegrationBasic` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesInvitation(data)`

Create a new `ApiEntitiesInvitation` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesIssuableTimeStat(data)`

Create a new `ApiEntitiesIssuableTimeStat` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesIssue(data)`

Create a new `ApiEntitiesIssue` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesIssueLink(data)`

Create a new `ApiEntitiesIssueLink` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesLicense(data)`

Create a new `ApiEntitiesLicense` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesMarkdown(data)`

Create a new `ApiEntitiesMarkdown` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesMarkdownUploadAdmin(data)`

Create a new `ApiEntitiesMarkdownUploadAdmin` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesMember(data)`

Create a new `ApiEntitiesMember` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesMerge(data)`

Create a new `ApiEntitiesMerge` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesMergeRequestApproval(data)`

Create a new `ApiEntitiesMergeRequestApproval` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesMergeRequestBasic(data)`

Create a new `ApiEntitiesMergeRequestBasic` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesMergeRequestChange(data)`

Create a new `ApiEntitiesMergeRequestChange` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesMergeRequestDiff(data)`

Create a new `ApiEntitiesMergeRequestDiff` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesMergeRequestDiffFull(data)`

Create a new `ApiEntitiesMergeRequestDiffFull` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesMergeRequestReviewer(data)`

Create a new `ApiEntitiesMergeRequestReviewer` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesMetricImage(data)`

Create a new `ApiEntitiesMetricImage` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesMrNote(data)`

Create a new `ApiEntitiesMrNote` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesNamespace(data)`

Create a new `ApiEntitiesNamespace` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesNamespaceExistence(data)`

Create a new `ApiEntitiesNamespaceExistence` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesNamespacesStorageLimitExclusion(data)`

Create a new `ApiEntitiesNamespacesStorageLimitExclusion` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesNpmPackage(data)`

Create a new `ApiEntitiesNpmPackage` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesNpmPackageTag(data)`

Create a new `ApiEntitiesNpmPackageTag` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesNugetPackagesVersion(data)`

Create a new `ApiEntitiesNugetPackagesVersion` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesNugetSearchResult(data)`

Create a new `ApiEntitiesNugetSearchResult` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesNugetServiceIndex(data)`

Create a new `ApiEntitiesNugetServiceIndex` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesOrganizationsOrganization(data)`

Create a new `ApiEntitiesOrganizationsOrganization` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesPackage(data)`

Create a new `ApiEntitiesPackage` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesPackageFile(data)`

Create a new `ApiEntitiesPackageFile` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesPackagePipeline(data)`

Create a new `ApiEntitiesPackagePipeline` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesPackagesConanFilesList(data)`

Create a new `ApiEntitiesPackagesConanFilesList` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesPackagesConanPackageManifest(data)`

Create a new `ApiEntitiesPackagesConanPackageManifest` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesPackagesConanPackageRevision(data)`

Create a new `ApiEntitiesPackagesConanPackageRevision` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesPackagesConanPackageSnapshot(data)`

Create a new `ApiEntitiesPackagesConanPackageSnapshot` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesPackagesConanRecipeManifest(data)`

Create a new `ApiEntitiesPackagesConanRecipeManifest` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesPackagesConanRecipeRevision(data)`

Create a new `ApiEntitiesPackagesConanRecipeRevision` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesPackagesConanRecipeSnapshot(data)`

Create a new `ApiEntitiesPackagesConanRecipeSnapshot` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesPackagesConanRevision(data)`

Create a new `ApiEntitiesPackagesConanRevision` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesPackagesConanUploadUrl(data)`

Create a new `ApiEntitiesPackagesConanUploadUrl` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesPackagesDebianDistribution(data)`

Create a new `ApiEntitiesPackagesDebianDistribution` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesPagesDomain(data)`

Create a new `ApiEntitiesPagesDomain` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesPagesDomainBasic(data)`

Create a new `ApiEntitiesPagesDomainBasic` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesPersonalAccessToken(data)`

Create a new `ApiEntitiesPersonalAccessToken` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesPersonalAccessTokenWithLastUsedIp(data)`

Create a new `ApiEntitiesPersonalAccessTokenWithLastUsedIp` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesPersonalAccessTokenWithToken(data)`

Create a new `ApiEntitiesPersonalAccessTokenWithToken` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesPersonalSnippet(data)`

Create a new `ApiEntitiesPersonalSnippet` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesPlanLimit(data)`

Create a new `ApiEntitiesPlanLimit` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesProject(data)`

Create a new `ApiEntitiesProject` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesProjectDailyStatistic(data)`

Create a new `ApiEntitiesProjectDailyStatistic` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesProjectExportStatus(data)`

Create a new `ApiEntitiesProjectExportStatus` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesProjectGroupLink(data)`

Create a new `ApiEntitiesProjectGroupLink` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesProjectHook(data)`

Create a new `ApiEntitiesProjectHook` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesProjectImportStatus(data)`

Create a new `ApiEntitiesProjectImportStatus` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesProjectJobTokenScope(data)`

Create a new `ApiEntitiesProjectJobTokenScope` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesProjectRepositoryStorage(data)`

Create a new `ApiEntitiesProjectRepositoryStorage` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesProjectSnippet(data)`

Create a new `ApiEntitiesProjectSnippet` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesProjectUpload(data)`

Create a new `ApiEntitiesProjectUpload` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesProjectWithAccess(data)`

Create a new `ApiEntitiesProjectWithAccess` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesProjectsContainerRegistryProtectionRule(data)`

Create a new `ApiEntitiesProjectsContainerRegistryProtectionRule` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesProjectsPackagesProtectionRule(data)`

Create a new `ApiEntitiesProjectsPackagesProtectionRule` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesProjectsTopic(data)`

Create a new `ApiEntitiesProjectsTopic` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesProtectedBranch(data)`

Create a new `ApiEntitiesProtectedBranch` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesProtectedTag(data)`

Create a new `ApiEntitiesProtectedTag` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesPublicGroupDetail(data)`

Create a new `ApiEntitiesPublicGroupDetail` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesRelatedIssue(data)`

Create a new `ApiEntitiesRelatedIssue` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesRelationImportTracker(data)`

Create a new `ApiEntitiesRelationImportTracker` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesRelease(data)`

Create a new `ApiEntitiesRelease` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesReleasesLink(data)`

Create a new `ApiEntitiesReleasesLink` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesRemoteMirror(data)`

Create a new `ApiEntitiesRemoteMirror` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesRepositoryHealth(data)`

Create a new `ApiEntitiesRepositoryHealth` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesResourceAccessTokenWithToken(data)`

Create a new `ApiEntitiesResourceAccessTokenWithToken` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesResourceMilestoneEvent(data)`

Create a new `ApiEntitiesResourceMilestoneEvent` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesSnippet(data)`

Create a new `ApiEntitiesSnippet` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesSshKeyWithUser(data)`

Create a new `ApiEntitiesSshKeyWithUser` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesSuggestion(data)`

Create a new `ApiEntitiesSuggestion` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesSystemBroadcastMessage(data)`

Create a new `ApiEntitiesSystemBroadcastMessage` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesTag(data)`

Create a new `ApiEntitiesTag` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesTagSignature(data)`

Create a new `ApiEntitiesTagSignature` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesTemplatesList(data)`

Create a new `ApiEntitiesTemplatesList` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesTerraformModuleVersion(data)`

Create a new `ApiEntitiesTerraformModuleVersion` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesTreeObject(data)`

Create a new `ApiEntitiesTreeObject` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesTrigger(data)`

Create a new `ApiEntitiesTrigger` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesUserAgentDetail(data)`

Create a new `ApiEntitiesUserAgentDetail` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesUserCount(data)`

Create a new `ApiEntitiesUserCount` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesUserPublic(data)`

Create a new `ApiEntitiesUserPublic` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesUserWithAdmin(data)`

Create a new `ApiEntitiesUserWithAdmin` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesWikiAttachment(data)`

Create a new `ApiEntitiesWikiAttachment` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesWikiPage(data)`

Create a new `ApiEntitiesWikiPage` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesWikiPageBasic(data)`

Create a new `ApiEntitiesWikiPageBasic` entity instance. Pass `nil` for no initial data.

#### `Application(data)`

Create a new `Application` entity instance. Pass `nil` for no initial data.

#### `AwardEmoji(data)`

Create a new `AwardEmoji` entity instance. Pass `nil` for no initial data.

#### `Badge(data)`

Create a new `Badge` entity instance. Pass `nil` for no initial data.

#### `Branch(data)`

Create a new `Branch` entity instance. Pass `nil` for no initial data.

#### `CargoPackage(data)`

Create a new `CargoPackage` entity instance. Pass `nil` for no initial data.

#### `CiVariable(data)`

Create a new `CiVariable` entity instance. Pass `nil` for no initial data.

#### `Cluster(data)`

Create a new `Cluster` entity instance. Pass `nil` for no initial data.

#### `ClusterAgent(data)`

Create a new `ClusterAgent` entity instance. Pass `nil` for no initial data.

#### `Composer(data)`

Create a new `Composer` entity instance. Pass `nil` for no initial data.

#### `ComposerPackage(data)`

Create a new `ComposerPackage` entity instance. Pass `nil` for no initial data.

#### `Conan(data)`

Create a new `Conan` entity instance. Pass `nil` for no initial data.

#### `ConanPackage(data)`

Create a new `ConanPackage` entity instance. Pass `nil` for no initial data.

#### `ContainerRegistry(data)`

Create a new `ContainerRegistry` entity instance. Pass `nil` for no initial data.

#### `ContainerRegistryEvent(data)`

Create a new `ContainerRegistryEvent` entity instance. Pass `nil` for no initial data.

#### `CustomAttribute(data)`

Create a new `CustomAttribute` entity instance. Pass `nil` for no initial data.

#### `Debian(data)`

Create a new `Debian` entity instance. Pass `nil` for no initial data.

#### `DebianDistribution(data)`

Create a new `DebianDistribution` entity instance. Pass `nil` for no initial data.

#### `DebianPackage(data)`

Create a new `DebianPackage` entity instance. Pass `nil` for no initial data.

#### `DependencyProxy(data)`

Create a new `DependencyProxy` entity instance. Pass `nil` for no initial data.

#### `DeployKey(data)`

Create a new `DeployKey` entity instance. Pass `nil` for no initial data.

#### `DeployToken(data)`

Create a new `DeployToken` entity instance. Pass `nil` for no initial data.

#### `Deployment(data)`

Create a new `Deployment` entity instance. Pass `nil` for no initial data.

#### `EeApiEntitiesApprovalState(data)`

Create a new `EeApiEntitiesApprovalState` entity instance. Pass `nil` for no initial data.

#### `EeApiEntitiesAuditEvent(data)`

Create a new `EeApiEntitiesAuditEvent` entity instance. Pass `nil` for no initial data.

#### `EeApiEntitiesBillableMembership(data)`

Create a new `EeApiEntitiesBillableMembership` entity instance. Pass `nil` for no initial data.

#### `EeApiEntitiesGeoNodeStatus(data)`

Create a new `EeApiEntitiesGeoNodeStatus` entity instance. Pass `nil` for no initial data.

#### `EeApiEntitiesGeoPipelineRef(data)`

Create a new `EeApiEntitiesGeoPipelineRef` entity instance. Pass `nil` for no initial data.

#### `EeApiEntitiesIssuableMetricImage(data)`

Create a new `EeApiEntitiesIssuableMetricImage` entity instance. Pass `nil` for no initial data.

#### `EeApiEntitiesMergeRequestApprovalState(data)`

Create a new `EeApiEntitiesMergeRequestApprovalState` entity instance. Pass `nil` for no initial data.

#### `EeApiEntitiesSshCertificate(data)`

Create a new `EeApiEntitiesSshCertificate` entity instance. Pass `nil` for no initial data.

#### `Environment(data)`

Create a new `Environment` entity instance. Pass `nil` for no initial data.

#### `ErrorTrackingClientKey(data)`

Create a new `ErrorTrackingClientKey` entity instance. Pass `nil` for no initial data.

#### `Feature(data)`

Create a new `Feature` entity instance. Pass `nil` for no initial data.

#### `FeatureFlag(data)`

Create a new `FeatureFlag` entity instance. Pass `nil` for no initial data.

#### `FeatureFlagsUserList(data)`

Create a new `FeatureFlagsUserList` entity instance. Pass `nil` for no initial data.

#### `FreezePeriod(data)`

Create a new `FreezePeriod` entity instance. Pass `nil` for no initial data.

#### `GenericPackage(data)`

Create a new `GenericPackage` entity instance. Pass `nil` for no initial data.

#### `Geo(data)`

Create a new `Geo` entity instance. Pass `nil` for no initial data.

#### `GoProxy(data)`

Create a new `GoProxy` entity instance. Pass `nil` for no initial data.

#### `Group(data)`

Create a new `Group` entity instance. Pass `nil` for no initial data.

#### `GroupAvatar(data)`

Create a new `GroupAvatar` entity instance. Pass `nil` for no initial data.

#### `GroupExport(data)`

Create a new `GroupExport` entity instance. Pass `nil` for no initial data.

#### `GroupImport(data)`

Create a new `GroupImport` entity instance. Pass `nil` for no initial data.

#### `HelmPackage(data)`

Create a new `HelmPackage` entity instance. Pass `nil` for no initial data.

#### `Hook(data)`

Create a new `Hook` entity instance. Pass `nil` for no initial data.

#### `Import(data)`

Create a new `Import` entity instance. Pass `nil` for no initial data.

#### `Integration(data)`

Create a new `Integration` entity instance. Pass `nil` for no initial data.

#### `Invitation(data)`

Create a new `Invitation` entity instance. Pass `nil` for no initial data.

#### `IssueLink(data)`

Create a new `IssueLink` entity instance. Pass `nil` for no initial data.

#### `IssuesStatistic(data)`

Create a new `IssuesStatistic` entity instance. Pass `nil` for no initial data.

#### `Job(data)`

Create a new `Job` entity instance. Pass `nil` for no initial data.

#### `MavenPackage(data)`

Create a new `MavenPackage` entity instance. Pass `nil` for no initial data.

#### `Member(data)`

Create a new `Member` entity instance. Pass `nil` for no initial data.

#### `MergeRequest(data)`

Create a new `MergeRequest` entity instance. Pass `nil` for no initial data.

#### `Metadata(data)`

Create a new `Metadata` entity instance. Pass `nil` for no initial data.

#### `Migration(data)`

Create a new `Migration` entity instance. Pass `nil` for no initial data.

#### `MlModelRegistry(data)`

Create a new `MlModelRegistry` entity instance. Pass `nil` for no initial data.

#### `Namespace(data)`

Create a new `Namespace` entity instance. Pass `nil` for no initial data.

#### `Npm(data)`

Create a new `Npm` entity instance. Pass `nil` for no initial data.

#### `NpmPackage(data)`

Create a new `NpmPackage` entity instance. Pass `nil` for no initial data.

#### `Nuget(data)`

Create a new `Nuget` entity instance. Pass `nil` for no initial data.

#### `NugetPackage(data)`

Create a new `NugetPackage` entity instance. Pass `nil` for no initial data.

#### `PackageFile(data)`

Create a new `PackageFile` entity instance. Pass `nil` for no initial data.

#### `Page(data)`

Create a new `Page` entity instance. Pass `nil` for no initial data.

#### `Participant(data)`

Create a new `Participant` entity instance. Pass `nil` for no initial data.

#### `PersonalAccessToken(data)`

Create a new `PersonalAccessToken` entity instance. Pass `nil` for no initial data.

#### `Project(data)`

Create a new `Project` entity instance. Pass `nil` for no initial data.

#### `ProjectAvatar(data)`

Create a new `ProjectAvatar` entity instance. Pass `nil` for no initial data.

#### `ProjectEntity(data)`

Create a new `ProjectEntity` entity instance. Pass `nil` for no initial data.

#### `ProjectExport(data)`

Create a new `ProjectExport` entity instance. Pass `nil` for no initial data.

#### `ProjectHook(data)`

Create a new `ProjectHook` entity instance. Pass `nil` for no initial data.

#### `ProjectImport(data)`

Create a new `ProjectImport` entity instance. Pass `nil` for no initial data.

#### `ProjectImportEntity(data)`

Create a new `ProjectImportEntity` entity instance. Pass `nil` for no initial data.

#### `ProjectPackage(data)`

Create a new `ProjectPackage` entity instance. Pass `nil` for no initial data.

#### `ProjectSnippet(data)`

Create a new `ProjectSnippet` entity instance. Pass `nil` for no initial data.

#### `ProjectsJobTokenScope(data)`

Create a new `ProjectsJobTokenScope` entity instance. Pass `nil` for no initial data.

#### `ProtectedTag(data)`

Create a new `ProtectedTag` entity instance. Pass `nil` for no initial data.

#### `Pypi(data)`

Create a new `Pypi` entity instance. Pass `nil` for no initial data.

#### `PypiPackage(data)`

Create a new `PypiPackage` entity instance. Pass `nil` for no initial data.

#### `Release(data)`

Create a new `Release` entity instance. Pass `nil` for no initial data.

#### `ReleaseLink(data)`

Create a new `ReleaseLink` entity instance. Pass `nil` for no initial data.

#### `RemoteMirror(data)`

Create a new `RemoteMirror` entity instance. Pass `nil` for no initial data.

#### `Rpm(data)`

Create a new `Rpm` entity instance. Pass `nil` for no initial data.

#### `RpmPackage(data)`

Create a new `RpmPackage` entity instance. Pass `nil` for no initial data.

#### `Rubygem(data)`

Create a new `Rubygem` entity instance. Pass `nil` for no initial data.

#### `RubygemPackage(data)`

Create a new `RubygemPackage` entity instance. Pass `nil` for no initial data.

#### `Runner(data)`

Create a new `Runner` entity instance. Pass `nil` for no initial data.

#### `Search(data)`

Create a new `Search` entity instance. Pass `nil` for no initial data.

#### `SecureFile(data)`

Create a new `SecureFile` entity instance. Pass `nil` for no initial data.

#### `Slack(data)`

Create a new `Slack` entity instance. Pass `nil` for no initial data.

#### `Snippet(data)`

Create a new `Snippet` entity instance. Pass `nil` for no initial data.

#### `Starrer(data)`

Create a new `Starrer` entity instance. Pass `nil` for no initial data.

#### `SystemHook(data)`

Create a new `SystemHook` entity instance. Pass `nil` for no initial data.

#### `Tag(data)`

Create a new `Tag` entity instance. Pass `nil` for no initial data.

#### `TerraformRegistry(data)`

Create a new `TerraformRegistry` entity instance. Pass `nil` for no initial data.

#### `TerraformState(data)`

Create a new `TerraformState` entity instance. Pass `nil` for no initial data.

#### `TestReport(data)`

Create a new `TestReport` entity instance. Pass `nil` for no initial data.

#### `TestReportSummary(data)`

Create a new `TestReportSummary` entity instance. Pass `nil` for no initial data.

#### `Topic(data)`

Create a new `Topic` entity instance. Pass `nil` for no initial data.

#### `UnleashApi(data)`

Create a new `UnleashApi` entity instance. Pass `nil` for no initial data.

#### `UsageData(data)`

Create a new `UsageData` entity instance. Pass `nil` for no initial data.

#### `User(data)`

Create a new `User` entity instance. Pass `nil` for no initial data.

#### `WebCommit(data)`

Create a new `WebCommit` entity instance. Pass `nil` for no initial data.

#### `Wiki(data)`

Create a new `Wiki` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## AccessRequestEntity

```lua
local access_request = client:AccessRequest(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:AccessRequest():remove({ id = "id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AccessRequestEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AlertManagementEntity

```lua
local alert_management = client:AlertManagement(nil)
```

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:AlertManagement():create({
  alert_management_alert_id = --[[ string ]],
  project_id = --[[ string ]],
})
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:AlertManagement():remove({ alert_management_alert_id = "alert_management_alert_id", metric_image_id = "metric_image_id", project_id = "project_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AlertManagementEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesAccessRequesterEntity

```lua
local api_entities_access_requester = client:ApiEntitiesAccessRequester(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_path` | `string` | No |  |
| `avatar_url` | `string` | No |  |
| `custom_attribute` | `table` | No |  |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApiEntitiesAccessRequester():create({
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiEntitiesAccessRequester():list()
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ApiEntitiesAccessRequester():update({
  access_request_id = "access_request_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesAccessRequesterEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesAppearanceEntity

```lua
local api_entities_appearance = client:ApiEntitiesAppearance(nil)
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

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesAppearance():load()
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ApiEntitiesAppearance():update({
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesAppearanceEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesApplicationEntity

```lua
local api_entities_application = client:ApiEntitiesApplication(nil)
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

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiEntitiesApplication():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesApplicationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesApplicationStatisticEntity

```lua
local api_entities_application_statistic = client:ApiEntitiesApplicationStatistic(nil)
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

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesApplicationStatistic():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesApplicationStatisticEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesApplicationWithSecretEntity

```lua
local api_entities_application_with_secret = client:ApiEntitiesApplicationWithSecret(nil)
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApiEntitiesApplicationWithSecret():create({
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesApplicationWithSecretEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesAvatarEntity

```lua
local api_entities_avatar = client:ApiEntitiesAvatar(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_url` | `string` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesAvatar():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesAvatarEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesAwardEmojiEntity

```lua
local api_entities_award_emoji = client:ApiEntitiesAwardEmoji(nil)
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
| `user` | `table` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApiEntitiesAwardEmoji():create({
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiEntitiesAwardEmoji():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesAwardEmoji():load({ id = "api_entities_award_emoji_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesAwardEmojiEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesBadgeEntity

```lua
local api_entities_badge = client:ApiEntitiesBadge(nil)
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApiEntitiesBadge():create({
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiEntitiesBadge():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesBadge():load({ id = "api_entities_badge_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ApiEntitiesBadge():update({
  id = "api_entities_badge_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesBadgeEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesBasicBadgeDetailEntity

```lua
local api_entities_basic_badge_detail = client:ApiEntitiesBasicBadgeDetail(nil)
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

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesBasicBadgeDetail():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesBasicBadgeDetailEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesBasicGroupDetailEntity

```lua
local api_entities_basic_group_detail = client:ApiEntitiesBasicGroupDetail(nil)
```

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApiEntitiesBasicGroupDetail():create({
  project_id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesBasicGroupDetailEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesBasicProjectDetailEntity

```lua
local api_entities_basic_project_detail = client:ApiEntitiesBasicProjectDetail(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_url` | `string` | No |  |
| `created_at` | `string` | No |  |
| `custom_attribute` | `table` | No |  |
| `default_branch` | `string` | No |  |
| `description` | `string` | No |  |
| `forks_count` | `number` | No |  |
| `http_url_to_repo` | `string` | No |  |
| `id` | `number` | No |  |
| `last_activity_at` | `string` | No |  |
| `license` | `table` | No |  |
| `license_url` | `string` | No |  |
| `name` | `string` | No |  |
| `name_with_namespace` | `string` | No |  |
| `namespace` | `table` | No |  |
| `path` | `string` | No |  |
| `path_with_namespace` | `string` | No |  |
| `readme_url` | `string` | No |  |
| `repository_storage` | `string` | No |  |
| `ssh_url_to_repo` | `string` | No |  |
| `star_count` | `number` | No |  |
| `tag_list` | `table` | No |  |
| `topic` | `table` | No |  |
| `visibility` | `string` | No |  |
| `web_url` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApiEntitiesBasicProjectDetail():create({
  project_id = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiEntitiesBasicProjectDetail():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesBasicProjectDetailEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesBasicRefEntity

```lua
local api_entities_basic_ref = client:ApiEntitiesBasicRef(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | No |  |
| `type` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiEntitiesBasicRef():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesBasicRefEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesBasicSuccessEntity

```lua
local api_entities_basic_success = client:ApiEntitiesBasicSuccess(nil)
```

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApiEntitiesBasicSuccess():create({
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesBasicSuccessEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesBatchedBackgroundMigrationEntity

```lua
local api_entities_batched_background_migration = client:ApiEntitiesBatchedBackgroundMigration(nil)
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

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiEntitiesBatchedBackgroundMigration():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesBatchedBackgroundMigration():load({ id = "api_entities_batched_background_migration_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ApiEntitiesBatchedBackgroundMigration():update({
  batched_background_migration_id = "batched_background_migration_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesBatchedBackgroundMigrationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesBranchEntity

```lua
local api_entities_branch = client:ApiEntitiesBranch(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `can_push` | `boolean` | No |  |
| `commit` | `table` | No |  |
| `default` | `boolean` | No |  |
| `developers_can_merge` | `boolean` | No |  |
| `developers_can_push` | `boolean` | No |  |
| `merged` | `boolean` | No |  |
| `name` | `string` | No |  |
| `protected` | `boolean` | No |  |
| `web_url` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApiEntitiesBranch():create({
  project_id = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiEntitiesBranch():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesBranch():load({ id = "api_entities_branch_id", project_id = "project_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ApiEntitiesBranch():update({
  branch_id = "branch_id",
  project_id = "project_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesBranchEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesBulkImportEntity

```lua
local api_entities_bulk_import = client:ApiEntitiesBulkImport(nil)
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
| `failure` | `table` | No |  |
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
| `stat` | `table` | No |  |
| `status` | `string` | No |  |
| `updated_at` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApiEntitiesBulkImport():create({
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiEntitiesBulkImport():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesBulkImport():load({ id = "api_entities_bulk_import_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesBulkImportEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesBulkImportsEntityFailureEntity

```lua
local api_entities_bulk_imports_entity_failure = client:ApiEntitiesBulkImportsEntityFailure(nil)
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

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesBulkImportsEntityFailure():load({ bulk_import_id = "bulk_import_id", entity_id = "entity_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesBulkImportsEntityFailureEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesBulkImportsExportStatusEntity

```lua
local api_entities_bulk_imports_export_status = client:ApiEntitiesBulkImportsExportStatus(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `batch` | `table` | No |  |
| `batched` | `boolean` | No |  |
| `batches_count` | `number` | No |  |
| `error` | `string` | No |  |
| `relation` | `string` | No |  |
| `status` | `string` | No |  |
| `total_objects_count` | `number` | No |  |
| `updated_at` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiEntitiesBulkImportsExportStatus():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesBulkImportsExportStatusEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesChangelogEntity

```lua
local api_entities_changelog = client:ApiEntitiesChangelog(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `note` | `string` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesChangelog():load({ project_id = "project_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesChangelogEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesCiBridgeEntity

```lua
local api_entities_ci_bridge = client:ApiEntitiesCiBridge(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_failure` | `boolean` | No |  |
| `commit` | `table` | No |  |
| `coverage` | `number` | No |  |
| `created_at` | `string` | No |  |
| `downstream_pipeline` | `table` | No |  |
| `duration` | `number` | No |  |
| `erased_at` | `string` | No |  |
| `failure_reason` | `string` | No |  |
| `finished_at` | `string` | No |  |
| `id` | `number` | No |  |
| `name` | `string` | No |  |
| `pipeline` | `table` | No |  |
| `project` | `table` | No |  |
| `queued_duration` | `number` | No |  |
| `ref` | `string` | No |  |
| `stage` | `string` | No |  |
| `started_at` | `string` | No |  |
| `status` | `string` | No |  |
| `tag` | `boolean` | No |  |
| `user` | `table` | No |  |
| `web_url` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiEntitiesCiBridge():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesCiBridgeEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesCiCatalogResourcesVersionEntity

```lua
local api_entities_ci_catalog_resources_version = client:ApiEntitiesCiCatalogResourcesVersion(nil)
```

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApiEntitiesCiCatalogResourcesVersion():create({
  project_id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesCiCatalogResourcesVersionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesCiJobEntity

```lua
local api_entities_ci_job = client:ApiEntitiesCiJob(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_failure` | `boolean` | No |  |
| `archived` | `boolean` | No |  |
| `artifact` | `table` | No |  |
| `artifacts_expire_at` | `string` | No |  |
| `artifacts_file` | `table` | No |  |
| `commit` | `table` | No |  |
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
| `pipeline` | `table` | No |  |
| `project` | `table` | No |  |
| `queued_duration` | `number` | No |  |
| `ref` | `string` | No |  |
| `runner` | `table` | No |  |
| `runner_manager` | `table` | No |  |
| `size` | `number` | No |  |
| `stage` | `string` | No |  |
| `started_at` | `string` | No |  |
| `status` | `string` | No |  |
| `tag` | `boolean` | No |  |
| `tag_list` | `table` | No |  |
| `user` | `table` | No |  |
| `web_url` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApiEntitiesCiJob():create({
  job_id = --[[ string ]],
  project_id = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiEntitiesCiJob():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesCiJob():load({ id = "api_entities_ci_job_id", project_id = "project_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesCiJobEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesCiJobBasicEntity

```lua
local api_entities_ci_job_basic = client:ApiEntitiesCiJobBasic(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_failure` | `boolean` | No |  |
| `commit` | `table` | No |  |
| `coverage` | `number` | No |  |
| `created_at` | `string` | No |  |
| `duration` | `number` | No |  |
| `erased_at` | `string` | No |  |
| `failure_reason` | `string` | No |  |
| `finished_at` | `string` | No |  |
| `id` | `number` | No |  |
| `name` | `string` | No |  |
| `pipeline` | `table` | No |  |
| `project` | `table` | No |  |
| `queued_duration` | `number` | No |  |
| `ref` | `string` | No |  |
| `stage` | `string` | No |  |
| `started_at` | `string` | No |  |
| `status` | `string` | No |  |
| `tag` | `boolean` | No |  |
| `user` | `table` | No |  |
| `web_url` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApiEntitiesCiJobBasic():create({
  job_id = --[[ string ]],
  project_id = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiEntitiesCiJobBasic():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesCiJobBasicEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesCiJobBasicWithProjectEntity

```lua
local api_entities_ci_job_basic_with_project = client:ApiEntitiesCiJobBasicWithProject(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_failure` | `boolean` | No |  |
| `commit` | `table` | No |  |
| `coverage` | `number` | No |  |
| `created_at` | `string` | No |  |
| `duration` | `number` | No |  |
| `erased_at` | `string` | No |  |
| `failure_reason` | `string` | No |  |
| `finished_at` | `string` | No |  |
| `id` | `number` | No |  |
| `name` | `string` | No |  |
| `pipeline` | `table` | No |  |
| `project` | `table` | No |  |
| `queued_duration` | `number` | No |  |
| `ref` | `string` | No |  |
| `stage` | `string` | No |  |
| `started_at` | `string` | No |  |
| `status` | `string` | No |  |
| `tag` | `boolean` | No |  |
| `user` | `table` | No |  |
| `web_url` | `string` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesCiJobBasicWithProject():load({ runner_id = "runner_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesCiJobBasicWithProjectEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesCiLintResultEntity

```lua
local api_entities_ci_lint_result = client:ApiEntitiesCiLintResult(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `blob` | `string` | No |  |
| `context_project` | `string` | No |  |
| `context_sha` | `string` | No |  |
| `error` | `table` | No |  |
| `extra` | `table` | No |  |
| `include` | `table` | No |  |
| `job` | `table` | No |  |
| `location` | `string` | No |  |
| `merged_yaml` | `string` | No |  |
| `raw` | `string` | No |  |
| `type` | `string` | No |  |
| `valid` | `boolean` | No |  |
| `warning` | `table` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApiEntitiesCiLintResult():create({
  project_id = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiEntitiesCiLintResult():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesCiLintResultEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesCiPipelineEntity

```lua
local api_entities_ci_pipeline = client:ApiEntitiesCiPipeline(nil)
```

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApiEntitiesCiPipeline():create({
  project_id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesCiPipelineEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesCiPipelineBasicEntity

```lua
local api_entities_ci_pipeline_basic = client:ApiEntitiesCiPipelineBasic(nil)
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

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiEntitiesCiPipelineBasic():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesCiPipelineBasic():load({ merge_request_id = "merge_request_id", project_id = "project_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesCiPipelineBasicEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesCiPipelineScheduleEntity

```lua
local api_entities_ci_pipeline_schedule = client:ApiEntitiesCiPipelineSchedule(nil)
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
| `input` | `table` | No |  |
| `next_run_at` | `string` | No |  |
| `owner` | `table` | No |  |
| `ref` | `string` | No |  |
| `updated_at` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiEntitiesCiPipelineSchedule():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesCiPipelineScheduleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesCiPipelineScheduleDetailEntity

```lua
local api_entities_ci_pipeline_schedule_detail = client:ApiEntitiesCiPipelineScheduleDetail(nil)
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
| `input` | `table` | No |  |
| `last_pipeline` | `table` | No |  |
| `next_run_at` | `string` | No |  |
| `owner` | `table` | No |  |
| `ref` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `variable` | `table` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApiEntitiesCiPipelineScheduleDetail():create({
  project_id = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesCiPipelineScheduleDetail():load({ pipeline_schedule_id = "pipeline_schedule_id", project_id = "project_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ApiEntitiesCiPipelineScheduleDetail():update({
  pipeline_schedule_id = "pipeline_schedule_id",
  project_id = "project_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesCiPipelineScheduleDetailEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesCiResetTokenResultEntity

```lua
local api_entities_ci_reset_token_result = client:ApiEntitiesCiResetTokenResult(nil)
```

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApiEntitiesCiResetTokenResult():create({
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesCiResetTokenResultEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesCiResourceGroupEntity

```lua
local api_entities_ci_resource_group = client:ApiEntitiesCiResourceGroup(nil)
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

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiEntitiesCiResourceGroup():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesCiResourceGroup():load({ id = "api_entities_ci_resource_group_id", project_id = "project_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ApiEntitiesCiResourceGroup():update({
  id = "api_entities_ci_resource_group_id",
  project_id = "project_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesCiResourceGroupEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesCiRunnerEntity

```lua
local api_entities_ci_runner = client:ApiEntitiesCiRunner(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | No |  |
| `created_at` | `string` | No |  |
| `created_by` | `table` | No |  |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApiEntitiesCiRunner():create({
  project_id = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesCiRunner():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesCiRunnerEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesCiRunnerDetailEntity

```lua
local api_entities_ci_runner_detail = client:ApiEntitiesCiRunnerDetail(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access_level` | `string` | No |  |
| `active` | `boolean` | No |  |
| `architecture` | `string` | No |  |
| `contacted_at` | `string` | No |  |
| `created_at` | `string` | No |  |
| `created_by` | `table` | No |  |
| `description` | `string` | No |  |
| `group` | `table` | No |  |
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
| `project` | `table` | No |  |
| `revision` | `string` | No |  |
| `run_untagged` | `string` | No |  |
| `runner_type` | `string` | No |  |
| `status` | `string` | No |  |
| `tag_list` | `string` | No |  |
| `version` | `string` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesCiRunnerDetail():load({ id = "api_entities_ci_runner_detail_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ApiEntitiesCiRunnerDetail():update({
  id = "api_entities_ci_runner_detail_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesCiRunnerDetailEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesCiRunnerManagerEntity

```lua
local api_entities_ci_runner_manager = client:ApiEntitiesCiRunnerManager(nil)
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

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesCiRunnerManager():load({ runner_id = "runner_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesCiRunnerManagerEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesCiRunnerRegistrationDetailEntity

```lua
local api_entities_ci_runner_registration_detail = client:ApiEntitiesCiRunnerRegistrationDetail(nil)
```

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApiEntitiesCiRunnerRegistrationDetail():create({
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesCiRunnerRegistrationDetailEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesCiSecureFileEntity

```lua
local api_entities_ci_secure_file = client:ApiEntitiesCiSecureFile(nil)
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
| `metadata` | `table` | No |  |
| `name` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApiEntitiesCiSecureFile():create({
  project_id = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesCiSecureFile():load({ id = "api_entities_ci_secure_file_id", project_id = "project_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesCiSecureFileEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesCiVariableEntity

```lua
local api_entities_ci_variable = client:ApiEntitiesCiVariable(nil)
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApiEntitiesCiVariable():create({
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiEntitiesCiVariable():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesCiVariable():load({ id = "api_entities_ci_variable_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ApiEntitiesCiVariable():update({
  id = "api_entities_ci_variable_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesCiVariableEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesClusterEntity

```lua
local api_entities_cluster = client:ApiEntitiesCluster(nil)
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
| `management_project` | `table` | No |  |
| `name` | `string` | No |  |
| `namespace_per_environment` | `string` | No |  |
| `platform_kubernete` | `table` | No |  |
| `platform_type` | `string` | No |  |
| `provider_gcp` | `table` | No |  |
| `provider_type` | `string` | No |  |
| `user` | `table` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApiEntitiesCluster():create({
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiEntitiesCluster():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesCluster():load({ id = "api_entities_cluster_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ApiEntitiesCluster():update({
  id = "api_entities_cluster_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesClusterEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesClusterGroupEntity

```lua
local api_entities_cluster_group = client:ApiEntitiesClusterGroup(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cluster_type` | `string` | No |  |
| `created_at` | `string` | No |  |
| `domain` | `string` | No |  |
| `enabled` | `boolean` | No |  |
| `environment_scope` | `string` | No |  |
| `group` | `table` | No |  |
| `id` | `string` | No |  |
| `managed` | `string` | No |  |
| `management_project` | `table` | No |  |
| `name` | `string` | No |  |
| `namespace_per_environment` | `string` | No |  |
| `platform_kubernete` | `table` | No |  |
| `platform_type` | `string` | No |  |
| `provider_gcp` | `table` | No |  |
| `provider_type` | `string` | No |  |
| `user` | `table` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApiEntitiesClusterGroup():create({
  group_id = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesClusterGroup():load({ cluster_id = "cluster_id", group_id = "group_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ApiEntitiesClusterGroup():update({
  cluster_id = "cluster_id",
  group_id = "group_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesClusterGroupEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesClusterProjectEntity

```lua
local api_entities_cluster_project = client:ApiEntitiesClusterProject(nil)
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
| `management_project` | `table` | No |  |
| `name` | `string` | No |  |
| `namespace_per_environment` | `string` | No |  |
| `platform_kubernete` | `table` | No |  |
| `platform_type` | `string` | No |  |
| `project` | `table` | No |  |
| `provider_gcp` | `table` | No |  |
| `provider_type` | `string` | No |  |
| `user` | `table` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApiEntitiesClusterProject():create({
  project_id = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesClusterProject():load({ cluster_id = "cluster_id", project_id = "project_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ApiEntitiesClusterProject():update({
  cluster_id = "cluster_id",
  project_id = "project_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesClusterProjectEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesClustersAgentEntity

```lua
local api_entities_clusters_agent = client:ApiEntitiesClustersAgent(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `config_project` | `table` | No |  |
| `created_at` | `string` | No |  |
| `created_by_user_id` | `string` | No |  |
| `id` | `string` | No |  |
| `is_receptive` | `boolean` | No |  |
| `name` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApiEntitiesClustersAgent():create({
  project_id = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesClustersAgent():load({ project_id = "project_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesClustersAgentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesClustersAgentTokenEntity

```lua
local api_entities_clusters_agent_token = client:ApiEntitiesClustersAgentToken(nil)
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

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesClustersAgentToken():load({ id = "api_entities_clusters_agent_token_id", cluster_agent_id = "cluster_agent_id", project_id = "project_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesClustersAgentTokenEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesClustersAgentTokenBasicEntity

```lua
local api_entities_clusters_agent_token_basic = client:ApiEntitiesClustersAgentTokenBasic(nil)
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

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesClustersAgentTokenBasic():load({ cluster_agent_id = "cluster_agent_id", project_id = "project_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesClustersAgentTokenBasicEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesClustersAgentTokenWithTokenEntity

```lua
local api_entities_clusters_agent_token_with_token = client:ApiEntitiesClustersAgentTokenWithToken(nil)
```

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApiEntitiesClustersAgentTokenWithToken():create({
  cluster_agent_id = --[[ string ]],
  project_id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesClustersAgentTokenWithTokenEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesCommitEntity

```lua
local api_entities_commit = client:ApiEntitiesCommit(nil)
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
| `extended_trailer` | `table` | No |  |
| `id` | `string` | No |  |
| `message` | `string` | No |  |
| `parent_id` | `table` | No |  |
| `short_id` | `string` | No |  |
| `title` | `string` | No |  |
| `trailer` | `table` | No |  |
| `web_url` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApiEntitiesCommit():create({
  project_id = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiEntitiesCommit():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesCommitEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesCommitDetailEntity

```lua
local api_entities_commit_detail = client:ApiEntitiesCommitDetail(nil)
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
| `extended_trailer` | `table` | No |  |
| `id` | `string` | No |  |
| `last_pipeline` | `table` | No |  |
| `message` | `string` | No |  |
| `parent_id` | `table` | No |  |
| `project_id` | `number` | No |  |
| `short_id` | `string` | No |  |
| `stat` | `table` | No |  |
| `status` | `string` | No |  |
| `title` | `string` | No |  |
| `trailer` | `table` | No |  |
| `web_url` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApiEntitiesCommitDetail():create({
  project_id = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesCommitDetail():load({ project_id = "project_id", sha = "sha" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ApiEntitiesCommitDetail():update({
  project_id = "project_id",
  submodule = "submodule",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesCommitDetailEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesCommitNoteEntity

```lua
local api_entities_commit_note = client:ApiEntitiesCommitNote(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `table` | No |  |
| `created_at` | `string` | No |  |
| `line` | `number` | No |  |
| `line_type` | `string` | No |  |
| `note` | `string` | No |  |
| `path` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApiEntitiesCommitNote():create({
  project_id = --[[ string ]],
  sha = --[[ any ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiEntitiesCommitNote():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesCommitNoteEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesCommitSequenceEntity

```lua
local api_entities_commit_sequence = client:ApiEntitiesCommitSequence(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `number` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesCommitSequence():load({ project_id = "project_id", sha = "sha" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesCommitSequenceEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesCommitSignatureEntity

```lua
local api_entities_commit_signature = client:ApiEntitiesCommitSignature(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `commit_source` | `string` | No |  |
| `signature` | `string` | No |  |
| `signature_type` | `string` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesCommitSignature():load({ project_id = "project_id", sha = "sha" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesCommitSignatureEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesCommitStatusEntity

```lua
local api_entities_commit_status = client:ApiEntitiesCommitStatus(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_failure` | `boolean` | No |  |
| `author` | `table` | No |  |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApiEntitiesCommitStatus():create({
  id = --[[ string ]],
  project_id = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiEntitiesCommitStatus():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesCommitStatusEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesCompareEntity

```lua
local api_entities_compare = client:ApiEntitiesCompare(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `commit` | `table` | No |  |
| `compare_same_ref` | `boolean` | No |  |
| `compare_timeout` | `boolean` | No |  |
| `diff` | `table` | No |  |
| `web_url` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiEntitiesCompare():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesCompareEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesContainerRegistryRepositoryEntity

```lua
local api_entities_container_registry_repository = client:ApiEntitiesContainerRegistryRepository(nil)
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
| `tag` | `table` | No |  |
| `tags_count` | `number` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiEntitiesContainerRegistryRepository():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesContainerRegistryRepository():load({ id = "api_entities_container_registry_repository_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesContainerRegistryRepositoryEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesContainerRegistryTagEntity

```lua
local api_entities_container_registry_tag = client:ApiEntitiesContainerRegistryTag(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `location` | `string` | No |  |
| `name` | `string` | No |  |
| `path` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiEntitiesContainerRegistryTag():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesContainerRegistryTagEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesContainerRegistryTagDetailEntity

```lua
local api_entities_container_registry_tag_detail = client:ApiEntitiesContainerRegistryTagDetail(nil)
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

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesContainerRegistryTagDetail():load({ project_id = "project_id", repository_id = "repository_id", tag_name = "tag_name" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesContainerRegistryTagDetailEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesContributorEntity

```lua
local api_entities_contributor = client:ApiEntitiesContributor(nil)
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

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesContributor():load({ project_id = "project_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesContributorEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesDeployKeyEntity

```lua
local api_entities_deploy_key = client:ApiEntitiesDeployKey(nil)
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
| `projects_with_readonly_access` | `table` | No |  |
| `projects_with_write_access` | `table` | No |  |
| `title` | `string` | No |  |
| `usage_type` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApiEntitiesDeployKey():create({
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiEntitiesDeployKey():list()
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ApiEntitiesDeployKey():update({
  id = "id",
  project_id = "project_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesDeployKeyEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesDeployKeysProjectEntity

```lua
local api_entities_deploy_keys_project = client:ApiEntitiesDeployKeysProject(nil)
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
| `projects_with_readonly_access` | `table` | No |  |
| `projects_with_write_access` | `table` | No |  |
| `title` | `string` | No |  |
| `usage_type` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApiEntitiesDeployKeysProject():create({
  project_id = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiEntitiesDeployKeysProject():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesDeployKeysProject():load({ key_id = "key_id", project_id = "project_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesDeployKeysProjectEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesDeployTokenEntity

```lua
local api_entities_deploy_token = client:ApiEntitiesDeployToken(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `expired` | `boolean` | No |  |
| `expires_at` | `string` | No |  |
| `id` | `number` | No |  |
| `name` | `string` | No |  |
| `revoked` | `boolean` | No |  |
| `scope` | `table` | No |  |
| `username` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiEntitiesDeployToken():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesDeployToken():load({ id = "api_entities_deploy_token_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesDeployTokenEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesDeployTokenWithTokenEntity

```lua
local api_entities_deploy_token_with_token = client:ApiEntitiesDeployTokenWithToken(nil)
```

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApiEntitiesDeployTokenWithToken():create({
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesDeployTokenWithTokenEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesDeploymentEntity

```lua
local api_entities_deployment = client:ApiEntitiesDeployment(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No |  |
| `deployable` | `table` | No |  |
| `environment` | `table` | No |  |
| `id` | `number` | No |  |
| `iid` | `number` | No |  |
| `ref` | `string` | No |  |
| `sha` | `string` | No |  |
| `status` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `user` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiEntitiesDeployment():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesDeploymentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesDeploymentExtendedEntity

```lua
local api_entities_deployment_extended = client:ApiEntitiesDeploymentExtended(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `approval` | `table` | No |  |
| `approval_summary` | `table` | No |  |
| `created_at` | `string` | No |  |
| `deployable` | `table` | No |  |
| `environment` | `table` | No |  |
| `id` | `number` | No |  |
| `iid` | `number` | No |  |
| `pending_approval_count` | `number` | No |  |
| `ref` | `string` | No |  |
| `sha` | `string` | No |  |
| `status` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `user` | `table` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApiEntitiesDeploymentExtended():create({
  project_id = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesDeploymentExtended():load({ deployment_id = "deployment_id", project_id = "project_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ApiEntitiesDeploymentExtended():update({
  deployment_id = "deployment_id",
  project_id = "project_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesDeploymentExtendedEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesDeploymentsApprovalEntity

```lua
local api_entities_deployments_approval = client:ApiEntitiesDeploymentsApproval(nil)
```

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApiEntitiesDeploymentsApproval():create({
  deployment_id = --[[ string ]],
  project_id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesDeploymentsApprovalEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesDictionaryTableEntity

```lua
local api_entities_dictionary_table = client:ApiEntitiesDictionaryTable(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `feature_category` | `table` | No |  |
| `table_name` | `string` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesDictionaryTable():load({ id = "api_entities_dictionary_table_id", databas_id = "databas_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesDictionaryTableEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesDiffEntity

```lua
local api_entities_diff = client:ApiEntitiesDiff(nil)
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

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiEntitiesDiff():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesDiff():load({ merge_request_id = "merge_request_id", project_id = "project_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesDiffEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesDiscoveredClusterEntity

```lua
local api_entities_discovered_cluster = client:ApiEntitiesDiscoveredCluster(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `group` | `string` | No |  |
| `project` | `string` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesDiscoveredCluster():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesDiscoveredClusterEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesDraftNoteEntity

```lua
local api_entities_draft_note = client:ApiEntitiesDraftNote(nil)
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
| `position` | `table` | No |  |
| `resolve_discussion` | `boolean` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApiEntitiesDraftNote():create({
  merge_request_id = --[[ string ]],
  project_id = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiEntitiesDraftNote():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesDraftNote():load({ id = "api_entities_draft_note_id", merge_request_id = "merge_request_id", project_id = "project_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ApiEntitiesDraftNote():update({
  id = "api_entities_draft_note_id",
  merge_request_id = "merge_request_id",
  project_id = "project_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesDraftNoteEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesEnvironmentEntity

```lua
local api_entities_environment = client:ApiEntitiesEnvironment(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auto_stop_at` | `string` | No |  |
| `auto_stop_setting` | `string` | No |  |
| `cluster_agent` | `table` | No |  |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `external_url` | `string` | No |  |
| `flux_resource_path` | `string` | No |  |
| `id` | `number` | No |  |
| `kubernetes_namespace` | `string` | No |  |
| `last_deployment` | `table` | No |  |
| `name` | `string` | No |  |
| `project` | `table` | No |  |
| `slug` | `string` | No |  |
| `state` | `string` | No |  |
| `tier` | `string` | No |  |
| `updated_at` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApiEntitiesEnvironment():create({
  project_id = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiEntitiesEnvironment():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesEnvironment():load({ id = "api_entities_environment_id", project_id = "project_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ApiEntitiesEnvironment():update({
  id = "api_entities_environment_id",
  project_id = "project_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesEnvironmentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesErrorTrackingClientKeyEntity

```lua
local api_entities_error_tracking_client_key = client:ApiEntitiesErrorTrackingClientKey(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | No |  |
| `id` | `number` | No |  |
| `public_key` | `string` | No |  |
| `sentry_dsn` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApiEntitiesErrorTrackingClientKey():create({
  project_id = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiEntitiesErrorTrackingClientKey():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesErrorTrackingClientKeyEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesErrorTrackingProjectSettingEntity

```lua
local api_entities_error_tracking_project_setting = client:ApiEntitiesErrorTrackingProjectSetting(nil)
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

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesErrorTrackingProjectSetting():load({ project_id = "project_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ApiEntitiesErrorTrackingProjectSetting():update({
  project_id = "project_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesErrorTrackingProjectSettingEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesEventEntity

```lua
local api_entities_event = client:ApiEntitiesEvent(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action_name` | `string` | No |  |
| `author` | `table` | No |  |
| `author_id` | `number` | No |  |
| `author_username` | `string` | No |  |
| `created_at` | `string` | No |  |
| `id` | `number` | No |  |
| `imported` | `boolean` | No |  |
| `imported_from` | `string` | No |  |
| `note` | `table` | No |  |
| `project_id` | `number` | No |  |
| `push_data` | `table` | No |  |
| `target_id` | `number` | No |  |
| `target_iid` | `number` | No |  |
| `target_title` | `string` | No |  |
| `target_type` | `string` | No |  |
| `wiki_page` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiEntitiesEvent():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesEvent():load({ project_id = "project_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesEventEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesFeatureEntity

```lua
local api_entities_feature = client:ApiEntitiesFeature(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `definition` | `table` | No |  |
| `gate` | `table` | No |  |
| `name` | `string` | No |  |
| `state` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApiEntitiesFeature():create({
  id = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiEntitiesFeature():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesFeatureEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesFeatureDefinitionEntity

```lua
local api_entities_feature_definition = client:ApiEntitiesFeatureDefinition(nil)
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

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiEntitiesFeatureDefinition():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesFeatureDefinitionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesFeatureFlagEntity

```lua
local api_entities_feature_flag = client:ApiEntitiesFeatureFlag(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | No |  |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `name` | `string` | No |  |
| `scope` | `string` | No |  |
| `strategy` | `table` | No |  |
| `updated_at` | `string` | No |  |
| `version` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApiEntitiesFeatureFlag():create({
  project_id = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiEntitiesFeatureFlag():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesFeatureFlag():load({ id = "api_entities_feature_flag_id", project_id = "project_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ApiEntitiesFeatureFlag():update({
  id = "api_entities_feature_flag_id",
  project_id = "project_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesFeatureFlagEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesFeatureFlagUserListEntity

```lua
local api_entities_feature_flag_user_list = client:ApiEntitiesFeatureFlagUserList(nil)
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApiEntitiesFeatureFlagUserList():create({
  project_id = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiEntitiesFeatureFlagUserList():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesFeatureFlagUserList():load({ iid = "iid", project_id = "project_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ApiEntitiesFeatureFlagUserList():update({
  iid = "iid",
  project_id = "project_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesFeatureFlagUserListEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesFreezePeriodEntity

```lua
local api_entities_freeze_period = client:ApiEntitiesFreezePeriod(nil)
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApiEntitiesFreezePeriod():create({
  project_id = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiEntitiesFreezePeriod():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesFreezePeriod():load({ id = "api_entities_freeze_period_id", project_id = "project_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ApiEntitiesFreezePeriod():update({
  id = "api_entities_freeze_period_id",
  project_id = "project_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesFreezePeriodEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesGitlabSubscriptionEntity

```lua
local api_entities_gitlab_subscription = client:ApiEntitiesGitlabSubscription(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `billing` | `table` | No |  |
| `plan` | `table` | No |  |
| `usage` | `table` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesGitlabSubscription():load({ namespace_id = "namespace_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesGitlabSubscriptionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesGoModuleVersionEntity

```lua
local api_entities_go_module_version = client:ApiEntitiesGoModuleVersion(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `time` | `string` | No |  |
| `version` | `string` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesGoModuleVersion():load({ module_version = "module_version", project_id = "project_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesGoModuleVersionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesGroupEntity

```lua
local api_entities_group = client:ApiEntitiesGroup(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `boolean` | No |  |
| `auto_devops_enabled` | `string` | No |  |
| `auto_duo_code_review_enabled` | `string` | No |  |
| `avatar_url` | `string` | No |  |
| `created_at` | `string` | No |  |
| `custom_attribute` | `table` | No |  |
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
| `ldap_group_link` | `table` | No |  |
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
| `root_storage_statistic` | `table` | No |  |
| `saml_group_link` | `table` | No |  |
| `share_with_group_lock` | `string` | No |  |
| `shared_runners_setting` | `string` | No |  |
| `show_diff_preview_in_email` | `boolean` | No |  |
| `statistic` | `table` | No |  |
| `subgroup_creation_level` | `string` | No |  |
| `two_factor_grace_period` | `string` | No |  |
| `visibility` | `string` | No |  |
| `web_based_commit_signing_enabled` | `string` | No |  |
| `web_url` | `string` | No |  |
| `wiki_access_level` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApiEntitiesGroup():create({
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiEntitiesGroup():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesGroup():load({ project_id = "project_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ApiEntitiesGroup():update({
  id = "id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesGroupEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesGroupDetailEntity

```lua
local api_entities_group_detail = client:ApiEntitiesGroupDetail(nil)
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
| `custom_attribute` | `table` | No |  |
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
| `ldap_group_link` | `table` | No |  |
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
| `project` | `table` | No |  |
| `project_creation_level` | `string` | No |  |
| `repository_storage` | `string` | No |  |
| `request_access_enabled` | `string` | No |  |
| `require_two_factor_authentication` | `string` | No |  |
| `root_storage_statistic` | `table` | No |  |
| `runners_token` | `string` | No |  |
| `saml_group_link` | `table` | No |  |
| `service_access_tokens_expiration_enforced` | `string` | No |  |
| `share_with_group_lock` | `string` | No |  |
| `shared_project` | `table` | No |  |
| `shared_runners_minutes_limit` | `string` | No |  |
| `shared_runners_setting` | `string` | No |  |
| `shared_with_group` | `string` | No |  |
| `show_diff_preview_in_email` | `boolean` | No |  |
| `statistic` | `table` | No |  |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApiEntitiesGroupDetail():create({
  group_id = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesGroupDetail():load({ id = "api_entities_group_detail_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesGroupDetailEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesHookEntity

```lua
local api_entities_hook = client:ApiEntitiesHook(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert_status` | `any` | No |  |
| `branch_filter_strategy` | `string` | No |  |
| `created_at` | `string` | No |  |
| `custom_header` | `table` | No |  |
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
| `url_variable` | `table` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApiEntitiesHook():create({
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiEntitiesHook():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesHook():load({ id = "api_entities_hook_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ApiEntitiesHook():update({
  id = "api_entities_hook_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesHookEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesIntegrationEntity

```lua
local api_entities_integration = client:ApiEntitiesIntegration(nil)
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
| `property` | `table` | No |  |
| `push_event` | `boolean` | No |  |
| `slug` | `number` | No |  |
| `tag_push_event` | `boolean` | No |  |
| `title` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `vulnerability_event` | `boolean` | No |  |
| `wiki_page_event` | `boolean` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesIntegration():load({ id = "api_entities_integration_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesIntegrationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesIntegrationBasicEntity

```lua
local api_entities_integration_basic = client:ApiEntitiesIntegrationBasic(nil)
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

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiEntitiesIntegrationBasic():list()
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ApiEntitiesIntegrationBasic():update({
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesIntegrationBasicEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesInvitationEntity

```lua
local api_entities_invitation = client:ApiEntitiesInvitation(nil)
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApiEntitiesInvitation():create({
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiEntitiesInvitation():list()
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ApiEntitiesInvitation():update({
  id = "id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesInvitationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesIssuableTimeStatEntity

```lua
local api_entities_issuable_time_stat = client:ApiEntitiesIssuableTimeStat(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `human_time_estimate` | `string` | No |  |
| `human_total_time_spent` | `string` | No |  |
| `time_estimate` | `number` | No |  |
| `total_time_spent` | `number` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApiEntitiesIssuableTimeStat():create({
  project_id = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesIssuableTimeStat():load({ project_id = "project_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesIssuableTimeStatEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesIssueEntity

```lua
local api_entities_issue = client:ApiEntitiesIssue(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assignee` | `table` | No |  |
| `author` | `table` | No |  |
| `blocking_issues_count` | `string` | No |  |
| `closed_at` | `string` | No |  |
| `closed_by` | `table` | No |  |
| `confidential` | `boolean` | No |  |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `discussion_locked` | `boolean` | No |  |
| `downvote` | `string` | No |  |
| `due_date` | `string` | No |  |
| `epic` | `table` | No |  |
| `epic_iid` | `string` | No |  |
| `has_task` | `boolean` | No |  |
| `health_status` | `string` | No |  |
| `id` | `number` | No |  |
| `iid` | `number` | No |  |
| `imported` | `string` | No |  |
| `imported_from` | `string` | No |  |
| `issue_type` | `string` | No |  |
| `iteration` | `table` | No |  |
| `label` | `table` | No |  |
| `link` | `table` | No |  |
| `merge_requests_count` | `string` | No |  |
| `milestone` | `table` | No |  |
| `moved_to_id` | `string` | No |  |
| `project_id` | `number` | No |  |
| `reference` | `table` | No |  |
| `service_desk_reply_to` | `string` | No |  |
| `severity` | `string` | No |  |
| `state` | `string` | No |  |
| `subscribed` | `string` | No |  |
| `task_completion_status` | `string` | No |  |
| `task_status` | `string` | No |  |
| `time_stat` | `table` | No |  |
| `title` | `string` | No |  |
| `type` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upvote` | `string` | No |  |
| `user_notes_count` | `string` | No |  |
| `web_url` | `string` | No |  |
| `weight` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApiEntitiesIssue():create({
  project_id = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiEntitiesIssue():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesIssue():load({ id = "api_entities_issue_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ApiEntitiesIssue():update({
  id = "api_entities_issue_id",
  project_id = "project_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesIssueEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesIssueLinkEntity

```lua
local api_entities_issue_link = client:ApiEntitiesIssueLink(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `link_type` | `string` | No |  |
| `source_issue` | `table` | No |  |
| `target_issue` | `table` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApiEntitiesIssueLink():create({
  issue_id = --[[ string ]],
  project_id = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesIssueLink():load({ id = "api_entities_issue_link_id", issue_id = "issue_id", project_id = "project_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesIssueLinkEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesLicenseEntity

```lua
local api_entities_license = client:ApiEntitiesLicense(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `condition` | `table` | No |  |
| `content` | `string` | No |  |
| `description` | `string` | No |  |
| `html_url` | `string` | No |  |
| `key` | `string` | No |  |
| `limitation` | `table` | No |  |
| `name` | `string` | No |  |
| `nickname` | `string` | No |  |
| `permission` | `table` | No |  |
| `popular` | `boolean` | No |  |
| `source_url` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiEntitiesLicense():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesLicenseEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesMarkdownEntity

```lua
local api_entities_markdown = client:ApiEntitiesMarkdown(nil)
```

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApiEntitiesMarkdown():create({
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesMarkdownEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesMarkdownUploadAdminEntity

```lua
local api_entities_markdown_upload_admin = client:ApiEntitiesMarkdownUploadAdmin(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No |  |
| `filename` | `string` | No |  |
| `id` | `string` | No |  |
| `size` | `string` | No |  |
| `uploaded_by` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiEntitiesMarkdownUploadAdmin():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesMarkdownUploadAdminEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesMemberEntity

```lua
local api_entities_member = client:ApiEntitiesMember(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access_level` | `string` | No |  |
| `avatar_path` | `string` | No |  |
| `avatar_url` | `string` | No |  |
| `created_at` | `string` | No |  |
| `created_by` | `table` | No |  |
| `custom_attribute` | `table` | No |  |
| `email` | `string` | No |  |
| `expires_at` | `string` | No |  |
| `group_saml_identity` | `table` | No |  |
| `group_scim_identity` | `table` | No |  |
| `id` | `number` | No |  |
| `is_using_seat` | `boolean` | No |  |
| `key` | `string` | No |  |
| `locked` | `boolean` | No |  |
| `member_role` | `table` | No |  |
| `membership_state` | `string` | No |  |
| `name` | `string` | No |  |
| `override` | `string` | No |  |
| `public_email` | `string` | No |  |
| `state` | `string` | No |  |
| `username` | `string` | No |  |
| `value` | `string` | No |  |
| `web_url` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApiEntitiesMember():create({
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiEntitiesMember():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesMember():load({ id = "api_entities_member_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesMember():remove({ group_id = "group_id", member_id = "member_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ApiEntitiesMember():update({
  id = "api_entities_member_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesMemberEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesMergeEntity

```lua
local api_entities_merge = client:ApiEntitiesMerge(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_collaboration` | `boolean` | No |  |
| `allow_maintainer_to_push` | `boolean` | No |  |
| `approvals_before_merge` | `string` | No |  |
| `assignee` | `table` | No |  |
| `author` | `table` | No |  |
| `blocking_discussions_resolved` | `string` | No |  |
| `changes_count` | `string` | No |  |
| `closed_at` | `string` | No |  |
| `closed_by` | `table` | No |  |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `description_html` | `string` | No |  |
| `detailed_merge_status` | `string` | No |  |
| `diff_ref` | `table` | No |  |
| `discussion_locked` | `string` | No |  |
| `diverged_commits_count` | `string` | No |  |
| `downvote` | `string` | No |  |
| `draft` | `string` | No |  |
| `first_contribution` | `string` | No |  |
| `first_deployed_to_production_at` | `string` | No |  |
| `force_remove_source_branch` | `string` | No |  |
| `has_conflict` | `boolean` | No |  |
| `head_pipeline` | `table` | No |  |
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
| `merge_user` | `table` | No |  |
| `merge_when_pipeline_succeed` | `string` | No |  |
| `merged_at` | `string` | No |  |
| `merged_by` | `table` | No |  |
| `milestone` | `table` | No |  |
| `pipeline` | `table` | No |  |
| `prepared_at` | `string` | No |  |
| `project_id` | `number` | No |  |
| `rebase_in_progress` | `string` | No |  |
| `reference` | `string` | No |  |
| `reviewer` | `table` | No |  |
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
| `time_stat` | `table` | No |  |
| `title` | `string` | No |  |
| `title_html` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upvote` | `string` | No |  |
| `user` | `table` | No |  |
| `user_notes_count` | `string` | No |  |
| `web_url` | `string` | No |  |
| `work_in_progress` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApiEntitiesMerge():create({
  project_id = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesMerge():load({ merge_request_iid = "merge_request_iid", project_id = "project_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ApiEntitiesMerge():update({
  project_id = "project_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesMergeEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesMergeRequestApprovalEntity

```lua
local api_entities_merge_request_approval = client:ApiEntitiesMergeRequestApproval(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `approved` | `boolean` | No |  |
| `approved_by` | `table` | No |  |
| `user_can_approve` | `boolean` | No |  |
| `user_has_approved` | `boolean` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApiEntitiesMergeRequestApproval():create({
  merge_request_id = --[[ string ]],
  project_id = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesMergeRequestApproval():load({ merge_request_id = "merge_request_id", project_id = "project_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesMergeRequestApprovalEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesMergeRequestBasicEntity

```lua
local api_entities_merge_request_basic = client:ApiEntitiesMergeRequestBasic(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_collaboration` | `boolean` | No |  |
| `allow_maintainer_to_push` | `boolean` | No |  |
| `approvals_before_merge` | `string` | No |  |
| `assignee` | `table` | No |  |
| `author` | `table` | No |  |
| `blocking_discussions_resolved` | `string` | No |  |
| `closed_at` | `string` | No |  |
| `closed_by` | `table` | No |  |
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
| `merge_user` | `table` | No |  |
| `merge_when_pipeline_succeed` | `string` | No |  |
| `merged_at` | `string` | No |  |
| `merged_by` | `table` | No |  |
| `milestone` | `table` | No |  |
| `prepared_at` | `string` | No |  |
| `project_id` | `number` | No |  |
| `reference` | `string` | No |  |
| `reviewer` | `table` | No |  |
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
| `time_stat` | `table` | No |  |
| `title` | `string` | No |  |
| `title_html` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upvote` | `string` | No |  |
| `user_notes_count` | `string` | No |  |
| `web_url` | `string` | No |  |
| `work_in_progress` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiEntitiesMergeRequestBasic():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesMergeRequestBasic():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesMergeRequestBasicEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesMergeRequestChangeEntity

```lua
local api_entities_merge_request_change = client:ApiEntitiesMergeRequestChange(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_collaboration` | `boolean` | No |  |
| `allow_maintainer_to_push` | `boolean` | No |  |
| `approvals_before_merge` | `string` | No |  |
| `assignee` | `table` | No |  |
| `author` | `table` | No |  |
| `blocking_discussions_resolved` | `string` | No |  |
| `change` | `table` | No |  |
| `changes_count` | `string` | No |  |
| `closed_at` | `string` | No |  |
| `closed_by` | `table` | No |  |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `description_html` | `string` | No |  |
| `detailed_merge_status` | `string` | No |  |
| `diff_ref` | `table` | No |  |
| `discussion_locked` | `string` | No |  |
| `diverged_commits_count` | `string` | No |  |
| `downvote` | `string` | No |  |
| `draft` | `string` | No |  |
| `first_contribution` | `string` | No |  |
| `first_deployed_to_production_at` | `string` | No |  |
| `force_remove_source_branch` | `string` | No |  |
| `has_conflict` | `boolean` | No |  |
| `head_pipeline` | `table` | No |  |
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
| `merge_user` | `table` | No |  |
| `merge_when_pipeline_succeed` | `string` | No |  |
| `merged_at` | `string` | No |  |
| `merged_by` | `table` | No |  |
| `milestone` | `table` | No |  |
| `overflow` | `string` | No |  |
| `pipeline` | `table` | No |  |
| `prepared_at` | `string` | No |  |
| `project_id` | `number` | No |  |
| `rebase_in_progress` | `string` | No |  |
| `reference` | `string` | No |  |
| `reviewer` | `table` | No |  |
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
| `time_stat` | `table` | No |  |
| `title` | `string` | No |  |
| `title_html` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upvote` | `string` | No |  |
| `user` | `table` | No |  |
| `user_notes_count` | `string` | No |  |
| `web_url` | `string` | No |  |
| `work_in_progress` | `string` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesMergeRequestChange():load({ merge_request_id = "merge_request_id", project_id = "project_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesMergeRequestChangeEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesMergeRequestDiffEntity

```lua
local api_entities_merge_request_diff = client:ApiEntitiesMergeRequestDiff(nil)
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

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiEntitiesMergeRequestDiff():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesMergeRequestDiffEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesMergeRequestDiffFullEntity

```lua
local api_entities_merge_request_diff_full = client:ApiEntitiesMergeRequestDiffFull(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `base_commit_sha` | `string` | No |  |
| `commit` | `table` | No |  |
| `created_at` | `string` | No |  |
| `diff` | `table` | No |  |
| `head_commit_sha` | `string` | No |  |
| `id` | `string` | No |  |
| `merge_request_id` | `string` | No |  |
| `patch_id_sha` | `string` | No |  |
| `real_size` | `string` | No |  |
| `start_commit_sha` | `string` | No |  |
| `state` | `string` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesMergeRequestDiffFull():load({ merge_request_id = "merge_request_id", project_id = "project_id", version_id = "version_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesMergeRequestDiffFullEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesMergeRequestReviewerEntity

```lua
local api_entities_merge_request_reviewer = client:ApiEntitiesMergeRequestReviewer(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No |  |
| `state` | `string` | No |  |
| `user` | `table` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesMergeRequestReviewer():load({ merge_request_id = "merge_request_id", project_id = "project_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesMergeRequestReviewerEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesMetricImageEntity

```lua
local api_entities_metric_image = client:ApiEntitiesMetricImage(nil)
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApiEntitiesMetricImage():create({
  alert_management_alert_id = --[[ string ]],
  project_id = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiEntitiesMetricImage():list()
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ApiEntitiesMetricImage():update({
  alert_management_alert_id = "alert_management_alert_id",
  id = "id",
  project_id = "project_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesMetricImageEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesMrNoteEntity

```lua
local api_entities_mr_note = client:ApiEntitiesMrNote(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `table` | No |  |
| `note` | `string` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesMrNote():load({ merge_request_id = "merge_request_id", project_id = "project_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesMrNoteEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesNamespaceEntity

```lua
local api_entities_namespace = client:ApiEntitiesNamespace(nil)
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

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiEntitiesNamespace():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesNamespace():load({ id = "api_entities_namespace_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ApiEntitiesNamespace():update({
  id = "api_entities_namespace_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesNamespaceEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesNamespaceExistenceEntity

```lua
local api_entities_namespace_existence = client:ApiEntitiesNamespaceExistence(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `exist` | `boolean` | No |  |
| `suggest` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiEntitiesNamespaceExistence():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesNamespaceExistenceEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesNamespacesStorageLimitExclusionEntity

```lua
local api_entities_namespaces_storage_limit_exclusion = client:ApiEntitiesNamespacesStorageLimitExclusion(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `number` | No |  |
| `namespace_id` | `number` | No |  |
| `namespace_name` | `string` | No |  |
| `reason` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApiEntitiesNamespacesStorageLimitExclusion():create({
  namespace_id = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesNamespacesStorageLimitExclusion():load({ id = 1 })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesNamespacesStorageLimitExclusionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesNpmPackageEntity

```lua
local api_entities_npm_package = client:ApiEntitiesNpmPackage(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dist_tag` | `table` | No |  |
| `name` | `string` | No |  |
| `version` | `table` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesNpmPackage():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesNpmPackageEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesNpmPackageTagEntity

```lua
local api_entities_npm_package_tag = client:ApiEntitiesNpmPackageTag(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dist_tag` | `table` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesNpmPackageTag():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesNpmPackageTagEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesNugetPackagesVersionEntity

```lua
local api_entities_nuget_packages_version = client:ApiEntitiesNugetPackagesVersion(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `version` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiEntitiesNugetPackagesVersion():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesNugetPackagesVersionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesNugetSearchResultEntity

```lua
local api_entities_nuget_search_result = client:ApiEntitiesNugetSearchResult(nil)
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

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiEntitiesNugetSearchResult():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesNugetSearchResultEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesNugetServiceIndexEntity

```lua
local api_entities_nuget_service_index = client:ApiEntitiesNugetServiceIndex(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `resource` | `table` | No |  |
| `version` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiEntitiesNugetServiceIndex():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesNugetServiceIndexEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesOrganizationsOrganizationEntity

```lua
local api_entities_organizations_organization = client:ApiEntitiesOrganizationsOrganization(nil)
```

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApiEntitiesOrganizationsOrganization():create({
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesOrganizationsOrganizationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesPackageEntity

```lua
local api_entities_package = client:ApiEntitiesPackage(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `conan_package_name` | `string` | No |  |
| `created_at` | `string` | No |  |
| `id` | `number` | No |  |
| `last_downloaded_at` | `string` | No |  |
| `link` | `table` | No |  |
| `name` | `string` | No |  |
| `package_type` | `string` | No |  |
| `pipeline` | `table` | No |  |
| `project_id` | `number` | No |  |
| `project_path` | `string` | No |  |
| `status` | `string` | No |  |
| `tag` | `string` | No |  |
| `version` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiEntitiesPackage():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesPackage():load({ id = "api_entities_package_id", project_id = "project_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesPackageEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesPackageFileEntity

```lua
local api_entities_package_file = client:ApiEntitiesPackageFile(nil)
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
| `pipeline` | `table` | No |  |
| `size` | `number` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiEntitiesPackageFile():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesPackageFileEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesPackagePipelineEntity

```lua
local api_entities_package_pipeline = client:ApiEntitiesPackagePipeline(nil)
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
| `user` | `table` | No |  |
| `web_url` | `string` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesPackagePipeline():load({ package_id = "package_id", project_id = "project_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesPackagePipelineEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesPackagesConanFilesListEntity

```lua
local api_entities_packages_conan_files_list = client:ApiEntitiesPackagesConanFilesList(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `file` | `table` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesPackagesConanFilesList():load({ conan_id = "conan_id", package_channel = "package_channel", package_username = "package_username", package_version = "package_version", project_id = "project_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesPackagesConanFilesListEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesPackagesConanPackageManifestEntity

```lua
local api_entities_packages_conan_package_manifest = client:ApiEntitiesPackagesConanPackageManifest(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `package_url` | `table` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesPackagesConanPackageManifest():load({ conan_id = "conan_id", conan_package_reference = "conan_package_reference", package_channel = "package_channel", package_username = "package_username", package_version = "package_version" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesPackagesConanPackageManifestEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesPackagesConanPackageRevisionEntity

```lua
local api_entities_packages_conan_package_revision = client:ApiEntitiesPackagesConanPackageRevision(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `revision` | `string` | No |  |
| `time` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiEntitiesPackagesConanPackageRevision():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesPackagesConanPackageRevisionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesPackagesConanPackageSnapshotEntity

```lua
local api_entities_packages_conan_package_snapshot = client:ApiEntitiesPackagesConanPackageSnapshot(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `package_snapshot` | `table` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesPackagesConanPackageSnapshot():load({ conan_id = "conan_id", conan_package_reference = "conan_package_reference", package_channel = "package_channel", package_username = "package_username", package_version = "package_version" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesPackagesConanPackageSnapshotEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesPackagesConanRecipeManifestEntity

```lua
local api_entities_packages_conan_recipe_manifest = client:ApiEntitiesPackagesConanRecipeManifest(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `recipe_url` | `table` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesPackagesConanRecipeManifest():load({ conan_id = "conan_id", package_channel = "package_channel", package_username = "package_username", package_version = "package_version" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesPackagesConanRecipeManifestEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesPackagesConanRecipeRevisionEntity

```lua
local api_entities_packages_conan_recipe_revision = client:ApiEntitiesPackagesConanRecipeRevision(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `revision` | `string` | No |  |
| `time` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiEntitiesPackagesConanRecipeRevision():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesPackagesConanRecipeRevisionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesPackagesConanRecipeSnapshotEntity

```lua
local api_entities_packages_conan_recipe_snapshot = client:ApiEntitiesPackagesConanRecipeSnapshot(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `recipe_snapshot` | `table` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesPackagesConanRecipeSnapshot():load({ id = "api_entities_packages_conan_recipe_snapshot_id", package_channel = "package_channel", package_name = "package_name", package_username = "package_username", package_version = "package_version" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesPackagesConanRecipeSnapshotEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesPackagesConanRevisionEntity

```lua
local api_entities_packages_conan_revision = client:ApiEntitiesPackagesConanRevision(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `revision` | `string` | No |  |
| `time` | `string` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesPackagesConanRevision():load({ conan_id = "conan_id", package_channel = "package_channel", package_username = "package_username", package_version = "package_version", project_id = "project_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesPackagesConanRevisionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesPackagesConanUploadUrlEntity

```lua
local api_entities_packages_conan_upload_url = client:ApiEntitiesPackagesConanUploadUrl(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `upload_url` | `table` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApiEntitiesPackagesConanUploadUrl():create({
  conan_id = --[[ string ]],
  package_channel = --[[ any ]],
  package_username = --[[ any ]],
  package_version = --[[ any ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesPackagesConanUploadUrlEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesPackagesDebianDistributionEntity

```lua
local api_entities_packages_debian_distribution = client:ApiEntitiesPackagesDebianDistribution(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `architecture` | `table` | No |  |
| `codename` | `string` | No |  |
| `component` | `table` | No |  |
| `description` | `string` | No |  |
| `id` | `number` | No |  |
| `label` | `string` | No |  |
| `origin` | `string` | No |  |
| `suite` | `string` | No |  |
| `valid_time_duration_second` | `number` | No |  |
| `version` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApiEntitiesPackagesDebianDistribution():create({
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiEntitiesPackagesDebianDistribution():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesPackagesDebianDistribution():load({ id = "api_entities_packages_debian_distribution_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ApiEntitiesPackagesDebianDistribution():update({
  id = "api_entities_packages_debian_distribution_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesPackagesDebianDistributionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesPagesDomainEntity

```lua
local api_entities_pages_domain = client:ApiEntitiesPagesDomain(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auto_ssl_enabled` | `string` | No |  |
| `certificate` | `table` | No |  |
| `domain` | `string` | No |  |
| `enabled_until` | `string` | No |  |
| `url` | `string` | No |  |
| `verification_code` | `string` | No |  |
| `verified` | `boolean` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApiEntitiesPagesDomain():create({
  project_id = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiEntitiesPagesDomain():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesPagesDomain():load({ id = "api_entities_pages_domain_id", project_id = "project_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ApiEntitiesPagesDomain():update({
  domain_id = "domain_id",
  project_id = "project_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesPagesDomainEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesPagesDomainBasicEntity

```lua
local api_entities_pages_domain_basic = client:ApiEntitiesPagesDomainBasic(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auto_ssl_enabled` | `string` | No |  |
| `certificate_expiration` | `table` | No |  |
| `domain` | `string` | No |  |
| `enabled_until` | `string` | No |  |
| `project_id` | `string` | No |  |
| `url` | `string` | No |  |
| `verification_code` | `string` | No |  |
| `verified` | `boolean` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesPagesDomainBasic():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesPagesDomainBasicEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesPersonalAccessTokenEntity

```lua
local api_entities_personal_access_token = client:ApiEntitiesPersonalAccessToken(nil)
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
| `scope` | `table` | No |  |
| `user_id` | `number` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiEntitiesPersonalAccessToken():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesPersonalAccessTokenEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesPersonalAccessTokenWithLastUsedIpEntity

```lua
local api_entities_personal_access_token_with_last_used_ip = client:ApiEntitiesPersonalAccessTokenWithLastUsedIp(nil)
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
| `last_used_ip` | `table` | No |  |
| `name` | `string` | No |  |
| `revoked` | `boolean` | No |  |
| `scope` | `table` | No |  |
| `user_id` | `number` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiEntitiesPersonalAccessTokenWithLastUsedIp():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesPersonalAccessTokenWithLastUsedIp():load({ id = "api_entities_personal_access_token_with_last_used_ip_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesPersonalAccessTokenWithLastUsedIpEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesPersonalAccessTokenWithTokenEntity

```lua
local api_entities_personal_access_token_with_token = client:ApiEntitiesPersonalAccessTokenWithToken(nil)
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
| `scope` | `table` | No |  |
| `token` | `string` | No |  |
| `user_id` | `number` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApiEntitiesPersonalAccessTokenWithToken():create({
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesPersonalAccessTokenWithTokenEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesPersonalSnippetEntity

```lua
local api_entities_personal_snippet = client:ApiEntitiesPersonalSnippet(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `table` | No |  |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `file` | `table` | No |  |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApiEntitiesPersonalSnippet():create({
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiEntitiesPersonalSnippet():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesPersonalSnippet():load({ id = "api_entities_personal_snippet_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ApiEntitiesPersonalSnippet():update({
  id = "api_entities_personal_snippet_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesPersonalSnippetEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesPlanLimitEntity

```lua
local api_entities_plan_limit = client:ApiEntitiesPlanLimit(nil)
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
| `limits_history` | `table` | No |  |
| `maven_max_file_size` | `number` | No |  |
| `notification_limit` | `number` | No |  |
| `npm_max_file_size` | `number` | No |  |
| `nuget_max_file_size` | `number` | No |  |
| `pipeline_hierarchy_size` | `number` | No |  |
| `pypi_max_file_size` | `number` | No |  |
| `storage_size_limit` | `number` | No |  |
| `terraform_module_max_file_size` | `number` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesPlanLimit():load()
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ApiEntitiesPlanLimit():update({
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesPlanLimitEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesProjectEntity

```lua
local api_entities_project = client:ApiEntitiesProject(nil)
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
| `ci_id_token_sub_claim_component` | `table` | No |  |
| `ci_job_token_scope_enabled` | `boolean` | No |  |
| `ci_pipeline_variables_minimum_override_role` | `string` | No |  |
| `ci_push_repository_for_job_token_allowed` | `boolean` | No |  |
| `ci_restrict_pipeline_cancellation_role` | `string` | No |  |
| `ci_separated_cache` | `boolean` | No |  |
| `compliance_framework` | `string` | No |  |
| `container_expiration_policy` | `table` | No |  |
| `container_registry_access_level` | `string` | No |  |
| `container_registry_enabled` | `boolean` | No |  |
| `container_registry_image_prefix` | `string` | No |  |
| `created_at` | `string` | No |  |
| `creator_id` | `number` | No |  |
| `custom_attribute` | `table` | No |  |
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
| `forked_from_project` | `table` | No |  |
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
| `license` | `table` | No |  |
| `license_url` | `string` | No |  |
| `link` | `table` | No |  |
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
| `namespace` | `table` | No |  |
| `only_allow_merge_if_all_discussions_are_resolved` | `boolean` | No |  |
| `only_allow_merge_if_all_status_checks_passed` | `string` | No |  |
| `only_allow_merge_if_pipeline_succeed` | `boolean` | No |  |
| `only_mirror_protected_branch` | `string` | No |  |
| `open_issues_count` | `number` | No |  |
| `owner` | `table` | No |  |
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
| `shared_with_group` | `table` | No |  |
| `show_diff_preview_in_email` | `boolean` | No |  |
| `snippets_access_level` | `string` | No |  |
| `snippets_enabled` | `boolean` | No |  |
| `spp_repository_pipeline_access` | `boolean` | No |  |
| `squash_commit_template` | `string` | No |  |
| `squash_option` | `string` | No |  |
| `ssh_url_to_repo` | `string` | No |  |
| `star_count` | `number` | No |  |
| `statistic` | `table` | No |  |
| `suggestion_commit_message` | `string` | No |  |
| `tag_list` | `table` | No |  |
| `topic` | `table` | No |  |
| `updated_at` | `string` | No |  |
| `visibility` | `string` | No |  |
| `warn_about_potentially_unwanted_character` | `boolean` | No |  |
| `web_based_commit_signing_enabled` | `string` | No |  |
| `web_url` | `string` | No |  |
| `wiki_access_level` | `string` | No |  |
| `wiki_enabled` | `boolean` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApiEntitiesProject():create({
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiEntitiesProject():list()
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ApiEntitiesProject():update({
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesProjectEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesProjectDailyStatisticEntity

```lua
local api_entities_project_daily_statistic = client:ApiEntitiesProjectDailyStatistic(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fetch` | `table` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesProjectDailyStatistic():load({ project_id = "project_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesProjectDailyStatisticEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesProjectExportStatusEntity

```lua
local api_entities_project_export_status = client:ApiEntitiesProjectExportStatus(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `export_status` | `string` | No |  |
| `id` | `number` | No |  |
| `link` | `table` | No |  |
| `name` | `string` | No |  |
| `name_with_namespace` | `string` | No |  |
| `path` | `string` | No |  |
| `path_with_namespace` | `string` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesProjectExportStatus():load({ project_id = "project_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesProjectExportStatusEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesProjectGroupLinkEntity

```lua
local api_entities_project_group_link = client:ApiEntitiesProjectGroupLink(nil)
```

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApiEntitiesProjectGroupLink():create({
  project_id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesProjectGroupLinkEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesProjectHookEntity

```lua
local api_entities_project_hook = client:ApiEntitiesProjectHook(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert_status` | `any` | No |  |
| `branch_filter_strategy` | `string` | No |  |
| `confidential_issues_event` | `boolean` | No |  |
| `confidential_note_event` | `boolean` | No |  |
| `created_at` | `string` | No |  |
| `custom_header` | `table` | No |  |
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
| `url_variable` | `table` | No |  |
| `vulnerability_event` | `boolean` | No |  |
| `wiki_page_event` | `boolean` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApiEntitiesProjectHook():create({
  project_id = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiEntitiesProjectHook():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesProjectHook():load({ id = "api_entities_project_hook_id", project_id = "project_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ApiEntitiesProjectHook():update({
  id = "api_entities_project_hook_id",
  project_id = "project_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesProjectHookEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesProjectImportStatusEntity

```lua
local api_entities_project_import_status = client:ApiEntitiesProjectImportStatus(nil)
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApiEntitiesProjectImportStatus():create({
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiEntitiesProjectImportStatus():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesProjectImportStatusEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesProjectJobTokenScopeEntity

```lua
local api_entities_project_job_token_scope = client:ApiEntitiesProjectJobTokenScope(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `inbound_enabled` | `boolean` | No |  |
| `outbound_enabled` | `boolean` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesProjectJobTokenScope():load({ project_id = "project_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesProjectJobTokenScopeEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesProjectRepositoryStorageEntity

```lua
local api_entities_project_repository_storage = client:ApiEntitiesProjectRepositoryStorage(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No |  |
| `disk_path` | `string` | No |  |
| `project_id` | `number` | No |  |
| `repository_storage` | `string` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesProjectRepositoryStorage():load({ project_id = "project_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesProjectRepositoryStorageEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesProjectSnippetEntity

```lua
local api_entities_project_snippet = client:ApiEntitiesProjectSnippet(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `table` | No |  |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `file` | `table` | No |  |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApiEntitiesProjectSnippet():create({
  project_id = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiEntitiesProjectSnippet():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesProjectSnippet():load({ id = "api_entities_project_snippet_id", project_id = "project_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ApiEntitiesProjectSnippet():update({
  id = "api_entities_project_snippet_id",
  project_id = "project_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesProjectSnippetEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesProjectUploadEntity

```lua
local api_entities_project_upload = client:ApiEntitiesProjectUpload(nil)
```

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApiEntitiesProjectUpload():create({
  project_id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesProjectUploadEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesProjectWithAccessEntity

```lua
local api_entities_project_with_access = client:ApiEntitiesProjectWithAccess(nil)
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
| `ci_id_token_sub_claim_component` | `table` | No |  |
| `ci_job_token_scope_enabled` | `boolean` | No |  |
| `ci_pipeline_variables_minimum_override_role` | `string` | No |  |
| `ci_push_repository_for_job_token_allowed` | `boolean` | No |  |
| `ci_restrict_pipeline_cancellation_role` | `string` | No |  |
| `ci_separated_cache` | `boolean` | No |  |
| `compliance_framework` | `string` | No |  |
| `container_expiration_policy` | `table` | No |  |
| `container_registry_access_level` | `string` | No |  |
| `container_registry_enabled` | `boolean` | No |  |
| `container_registry_image_prefix` | `string` | No |  |
| `created_at` | `string` | No |  |
| `creator_id` | `number` | No |  |
| `custom_attribute` | `table` | No |  |
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
| `forked_from_project` | `table` | No |  |
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
| `license` | `table` | No |  |
| `license_url` | `string` | No |  |
| `link` | `table` | No |  |
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
| `namespace` | `table` | No |  |
| `only_allow_merge_if_all_discussions_are_resolved` | `boolean` | No |  |
| `only_allow_merge_if_all_status_checks_passed` | `string` | No |  |
| `only_allow_merge_if_pipeline_succeed` | `boolean` | No |  |
| `only_mirror_protected_branch` | `string` | No |  |
| `open_issues_count` | `number` | No |  |
| `owner` | `table` | No |  |
| `package_registry_access_level` | `string` | No |  |
| `packages_enabled` | `boolean` | No |  |
| `pages_access_level` | `string` | No |  |
| `path` | `string` | No |  |
| `path_with_namespace` | `string` | No |  |
| `permission` | `table` | No |  |
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
| `shared_with_group` | `table` | No |  |
| `show_diff_preview_in_email` | `boolean` | No |  |
| `snippets_access_level` | `string` | No |  |
| `snippets_enabled` | `boolean` | No |  |
| `spp_repository_pipeline_access` | `boolean` | No |  |
| `squash_commit_template` | `string` | No |  |
| `squash_option` | `string` | No |  |
| `ssh_url_to_repo` | `string` | No |  |
| `star_count` | `number` | No |  |
| `statistic` | `table` | No |  |
| `suggestion_commit_message` | `string` | No |  |
| `tag_list` | `table` | No |  |
| `topic` | `table` | No |  |
| `updated_at` | `string` | No |  |
| `visibility` | `string` | No |  |
| `warn_about_potentially_unwanted_character` | `boolean` | No |  |
| `web_based_commit_signing_enabled` | `string` | No |  |
| `web_url` | `string` | No |  |
| `wiki_access_level` | `string` | No |  |
| `wiki_enabled` | `boolean` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesProjectWithAccess():load({ id = "api_entities_project_with_access_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesProjectWithAccessEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesProjectsContainerRegistryProtectionRuleEntity

```lua
local api_entities_projects_container_registry_protection_rule = client:ApiEntitiesProjectsContainerRegistryProtectionRule(nil)
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApiEntitiesProjectsContainerRegistryProtectionRule():create({
  project_id = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiEntitiesProjectsContainerRegistryProtectionRule():list()
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ApiEntitiesProjectsContainerRegistryProtectionRule():update({
  id = "id",
  project_id = "project_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesProjectsContainerRegistryProtectionRuleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesProjectsPackagesProtectionRuleEntity

```lua
local api_entities_projects_packages_protection_rule = client:ApiEntitiesProjectsPackagesProtectionRule(nil)
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApiEntitiesProjectsPackagesProtectionRule():create({
  project_id = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiEntitiesProjectsPackagesProtectionRule():list()
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ApiEntitiesProjectsPackagesProtectionRule():update({
  id = "id",
  project_id = "project_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesProjectsPackagesProtectionRuleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesProjectsTopicEntity

```lua
local api_entities_projects_topic = client:ApiEntitiesProjectsTopic(nil)
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApiEntitiesProjectsTopic():create({
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesProjectsTopic():load({ id = "api_entities_projects_topic_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ApiEntitiesProjectsTopic():update({
  id = "api_entities_projects_topic_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesProjectsTopicEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesProtectedBranchEntity

```lua
local api_entities_protected_branch = client:ApiEntitiesProtectedBranch(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_force_push` | `boolean` | No |  |
| `code_owner_approval_required` | `boolean` | No |  |
| `id` | `number` | No |  |
| `inherited` | `boolean` | No |  |
| `merge_access_level` | `table` | No |  |
| `name` | `string` | No |  |
| `push_access_level` | `table` | No |  |
| `unprotect_access_level` | `table` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApiEntitiesProtectedBranch():create({
  project_id = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiEntitiesProtectedBranch():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesProtectedBranch():load({ id = "api_entities_protected_branch_id", project_id = "project_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ApiEntitiesProtectedBranch():update({
  id = "api_entities_protected_branch_id",
  project_id = "project_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesProtectedBranchEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesProtectedTagEntity

```lua
local api_entities_protected_tag = client:ApiEntitiesProtectedTag(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `create_access_level` | `table` | No |  |
| `name` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApiEntitiesProtectedTag():create({
  project_id = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiEntitiesProtectedTag():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesProtectedTag():load({ id = "api_entities_protected_tag_id", project_id = "project_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesProtectedTagEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesPublicGroupDetailEntity

```lua
local api_entities_public_group_detail = client:ApiEntitiesPublicGroupDetail(nil)
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

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiEntitiesPublicGroupDetail():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesPublicGroupDetailEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesRelatedIssueEntity

```lua
local api_entities_related_issue = client:ApiEntitiesRelatedIssue(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assignee` | `table` | No |  |
| `author` | `table` | No |  |
| `blocking_issues_count` | `string` | No |  |
| `closed_at` | `string` | No |  |
| `closed_by` | `table` | No |  |
| `confidential` | `boolean` | No |  |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `discussion_locked` | `boolean` | No |  |
| `downvote` | `string` | No |  |
| `due_date` | `string` | No |  |
| `epic` | `table` | No |  |
| `epic_iid` | `string` | No |  |
| `has_task` | `boolean` | No |  |
| `health_status` | `string` | No |  |
| `id` | `number` | No |  |
| `iid` | `number` | No |  |
| `imported` | `string` | No |  |
| `imported_from` | `string` | No |  |
| `issue_link_id` | `string` | No |  |
| `issue_type` | `string` | No |  |
| `iteration` | `table` | No |  |
| `label` | `table` | No |  |
| `link` | `table` | No |  |
| `link_created_at` | `string` | No |  |
| `link_type` | `string` | No |  |
| `link_updated_at` | `string` | No |  |
| `merge_requests_count` | `string` | No |  |
| `milestone` | `table` | No |  |
| `moved_to_id` | `string` | No |  |
| `project_id` | `number` | No |  |
| `reference` | `table` | No |  |
| `service_desk_reply_to` | `string` | No |  |
| `severity` | `string` | No |  |
| `state` | `string` | No |  |
| `subscribed` | `string` | No |  |
| `task_completion_status` | `string` | No |  |
| `task_status` | `string` | No |  |
| `time_stat` | `table` | No |  |
| `title` | `string` | No |  |
| `type` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upvote` | `string` | No |  |
| `user_notes_count` | `string` | No |  |
| `web_url` | `string` | No |  |
| `weight` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiEntitiesRelatedIssue():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesRelatedIssueEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesRelationImportTrackerEntity

```lua
local api_entities_relation_import_tracker = client:ApiEntitiesRelationImportTracker(nil)
```

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApiEntitiesRelationImportTracker():create({
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesRelationImportTrackerEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesReleaseEntity

```lua
local api_entities_release = client:ApiEntitiesRelease(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `asset` | `table` | No |  |
| `author` | `table` | No |  |
| `commit` | `table` | No |  |
| `commit_path` | `string` | No |  |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `description_html` | `string` | No |  |
| `evidence` | `table` | No |  |
| `link` | `table` | No |  |
| `milestone` | `table` | No |  |
| `name` | `string` | No |  |
| `released_at` | `string` | No |  |
| `tag_name` | `string` | No |  |
| `tag_path` | `string` | No |  |
| `upcoming_release` | `boolean` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApiEntitiesRelease():create({
  project_id = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiEntitiesRelease():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesRelease():load({ id = "api_entities_release_id", project_id = "project_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ApiEntitiesRelease():update({
  id = "api_entities_release_id",
  project_id = "project_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesReleaseEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesReleasesLinkEntity

```lua
local api_entities_releases_link = client:ApiEntitiesReleasesLink(nil)
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApiEntitiesReleasesLink():create({
  project_id = --[[ string ]],
  release_id = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiEntitiesReleasesLink():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesReleasesLink():load({ id = "api_entities_releases_link_id", project_id = "project_id", release_id = "release_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ApiEntitiesReleasesLink():update({
  id = "api_entities_releases_link_id",
  project_id = "project_id",
  release_id = "release_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesReleasesLinkEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesRemoteMirrorEntity

```lua
local api_entities_remote_mirror = client:ApiEntitiesRemoteMirror(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_method` | `string` | No |  |
| `enabled` | `boolean` | No |  |
| `host_key` | `table` | No |  |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApiEntitiesRemoteMirror():create({
  project_id = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiEntitiesRemoteMirror():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesRemoteMirror():load({ id = "api_entities_remote_mirror_id", project_id = "project_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ApiEntitiesRemoteMirror():update({
  id = "api_entities_remote_mirror_id",
  project_id = "project_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesRemoteMirrorEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesRepositoryHealthEntity

```lua
local api_entities_repository_health = client:ApiEntitiesRepositoryHealth(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alternate` | `table` | No |  |
| `bitmap` | `table` | No |  |
| `commit_graph` | `table` | No |  |
| `is_object_pool` | `boolean` | No |  |
| `last_full_repack` | `table` | No |  |
| `multi_pack_index` | `table` | No |  |
| `multi_pack_index_bitmap` | `table` | No |  |
| `object` | `table` | No |  |
| `reference` | `table` | No |  |
| `size` | `number` | No |  |
| `updated_at` | `string` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesRepositoryHealth():load({ project_id = "project_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesRepositoryHealthEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesResourceAccessTokenWithTokenEntity

```lua
local api_entities_resource_access_token_with_token = client:ApiEntitiesResourceAccessTokenWithToken(nil)
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
| `scope` | `table` | No |  |
| `token` | `string` | No |  |
| `user_id` | `number` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApiEntitiesResourceAccessTokenWithToken():create({
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesResourceAccessTokenWithTokenEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesResourceMilestoneEventEntity

```lua
local api_entities_resource_milestone_event = client:ApiEntitiesResourceMilestoneEvent(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `string` | No |  |
| `created_at` | `string` | No |  |
| `id` | `number` | No |  |
| `milestone` | `table` | No |  |
| `resource_id` | `number` | No |  |
| `resource_type` | `string` | No |  |
| `state` | `string` | No |  |
| `user` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiEntitiesResourceMilestoneEvent():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesResourceMilestoneEvent():load({ id = "api_entities_resource_milestone_event_id", project_id = "project_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesResourceMilestoneEventEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesSnippetEntity

```lua
local api_entities_snippet = client:ApiEntitiesSnippet(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `table` | No |  |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `file` | `table` | No |  |
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

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiEntitiesSnippet():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesSnippetEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesSshKeyWithUserEntity

```lua
local api_entities_ssh_key_with_user = client:ApiEntitiesSshKeyWithUser(nil)
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
| `user` | `table` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesSshKeyWithUser():load({ id = "api_entities_ssh_key_with_user_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesSshKeyWithUserEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesSuggestionEntity

```lua
local api_entities_suggestion = client:ApiEntitiesSuggestion(nil)
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

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ApiEntitiesSuggestion():update({
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesSuggestionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesSystemBroadcastMessageEntity

```lua
local api_entities_system_broadcast_message = client:ApiEntitiesSystemBroadcastMessage(nil)
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApiEntitiesSystemBroadcastMessage():create({
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesSystemBroadcastMessage():load({ id = "api_entities_system_broadcast_message_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesSystemBroadcastMessage():remove({ id = "api_entities_system_broadcast_message_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ApiEntitiesSystemBroadcastMessage():update({
  id = "api_entities_system_broadcast_message_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesSystemBroadcastMessageEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesTagEntity

```lua
local api_entities_tag = client:ApiEntitiesTag(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `commit` | `table` | No |  |
| `created_at` | `string` | No |  |
| `message` | `string` | No |  |
| `name` | `string` | No |  |
| `protected` | `boolean` | No |  |
| `release` | `table` | No |  |
| `target` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApiEntitiesTag():create({
  project_id = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiEntitiesTag():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesTag():load({ id = "api_entities_tag_id", project_id = "project_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesTagEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesTagSignatureEntity

```lua
local api_entities_tag_signature = client:ApiEntitiesTagSignature(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `signature` | `string` | No |  |
| `signature_type` | `string` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesTagSignature():load({ project_id = "project_id", tag_name = "tag_name" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesTagSignatureEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesTemplatesListEntity

```lua
local api_entities_templates_list = client:ApiEntitiesTemplatesList(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `key` | `string` | No |  |
| `name` | `string` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesTemplatesList():load({ project_id = "project_id", type = "type" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesTemplatesListEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesTerraformModuleVersionEntity

```lua
local api_entities_terraform_module_version = client:ApiEntitiesTerraformModuleVersion(nil)
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

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiEntitiesTerraformModuleVersion():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesTerraformModuleVersion():load({ module_name = "module_name", module_system = "module_system" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesTerraformModuleVersionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesTreeObjectEntity

```lua
local api_entities_tree_object = client:ApiEntitiesTreeObject(nil)
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

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesTreeObject():load({ project_id = "project_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesTreeObjectEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesTriggerEntity

```lua
local api_entities_trigger = client:ApiEntitiesTrigger(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `expires_at` | `string` | No |  |
| `id` | `number` | No |  |
| `last_used` | `string` | No |  |
| `owner` | `table` | No |  |
| `token` | `string` | No |  |
| `updated_at` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApiEntitiesTrigger():create({
  project_id = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiEntitiesTrigger():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesTrigger():load({ id = "api_entities_trigger_id", project_id = "project_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ApiEntitiesTrigger():update({
  id = "api_entities_trigger_id",
  project_id = "project_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesTriggerEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesUserAgentDetailEntity

```lua
local api_entities_user_agent_detail = client:ApiEntitiesUserAgentDetail(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `akismet_submitted` | `boolean` | No |  |
| `ip_address` | `string` | No |  |
| `user_agent` | `string` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesUserAgentDetail():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesUserAgentDetailEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesUserCountEntity

```lua
local api_entities_user_count = client:ApiEntitiesUserCount(nil)
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

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesUserCount():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesUserCountEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesUserPublicEntity

```lua
local api_entities_user_public = client:ApiEntitiesUserPublic(nil)
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
| `custom_attribute` | `table` | No |  |
| `discord` | `string` | No |  |
| `email` | `string` | No |  |
| `external` | `string` | No |  |
| `extra_shared_runners_minutes_limit` | `string` | No |  |
| `follower` | `string` | No |  |
| `following` | `string` | No |  |
| `github` | `string` | No |  |
| `id` | `number` | No |  |
| `identity` | `table` | No |  |
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
| `scim_identity` | `table` | No |  |
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

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiEntitiesUserPublic():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesUserPublicEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesUserWithAdminEntity

```lua
local api_entities_user_with_admin = client:ApiEntitiesUserWithAdmin(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `key` | `string` | No |  |
| `value` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiEntitiesUserWithAdmin():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesUserWithAdminEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesWikiAttachmentEntity

```lua
local api_entities_wiki_attachment = client:ApiEntitiesWikiAttachment(nil)
```

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApiEntitiesWikiAttachment():create({
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesWikiAttachmentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesWikiPageEntity

```lua
local api_entities_wiki_page = client:ApiEntitiesWikiPage(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content` | `string` | No |  |
| `encoding` | `string` | No |  |
| `format` | `string` | No |  |
| `front_matter` | `table` | No |  |
| `slug` | `string` | No |  |
| `title` | `string` | No |  |
| `wiki_page_meta_id` | `number` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApiEntitiesWikiPage():create({
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiEntitiesWikiPage():load({ slug = "slug" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ApiEntitiesWikiPage():update({
  slug = "slug",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesWikiPageEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntitiesWikiPageBasicEntity

```lua
local api_entities_wiki_page_basic = client:ApiEntitiesWikiPageBasic(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `format` | `string` | No |  |
| `slug` | `string` | No |  |
| `title` | `string` | No |  |
| `wiki_page_meta_id` | `number` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiEntitiesWikiPageBasic():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntitiesWikiPageBasicEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApplicationEntity

```lua
local application = client:Application(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Application():remove({ id = "id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApplicationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AwardEmojiEntity

```lua
local award_emoji = client:AwardEmoji(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:AwardEmoji():remove({ id = "id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AwardEmojiEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BadgeEntity

```lua
local badge = client:Badge(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Badge():remove({ id = "id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BadgeEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BranchEntity

```lua
local branch = client:Branch(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Branch():remove({ project_id = "project_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BranchEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CargoPackageEntity

```lua
local cargo_package = client:CargoPackage(nil)
```

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:CargoPackage():load({ project_id = "project_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CargoPackageEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CiVariableEntity

```lua
local ci_variable = client:CiVariable(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:CiVariable():remove({ id = "id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CiVariableEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ClusterEntity

```lua
local cluster = client:Cluster(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Cluster():remove({ id = "id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ClusterEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ClusterAgentEntity

```lua
local cluster_agent = client:ClusterAgent(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:ClusterAgent():remove({ id = "id", project_id = "project_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ClusterAgentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ComposerEntity

```lua
local composer = client:Composer(nil)
```

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Composer():create({
  project_id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ComposerEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ComposerPackageEntity

```lua
local composer_package = client:ComposerPackage(nil)
```

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ComposerPackage():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ComposerPackageEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ConanEntity

```lua
local conan = client:Conan(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Conan():remove({ package_channel = "package_channel", package_name = "package_name", package_username = "package_username", package_version = "package_version" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConanEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ConanPackageEntity

```lua
local conan_package = client:ConanPackage(nil)
```

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ConanPackage():load({ id = "conan_package_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:ConanPackage():remove({ conan_id = "conan_id", package_channel = "package_channel", package_username = "package_username", package_version = "package_version", project_id = "project_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ConanPackage():update({
  id = "conan_package_id",
  file_name = "file_name",
  package_channel = "package_channel",
  package_username = "package_username",
  package_version = "package_version",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConanPackageEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ContainerRegistryEntity

```lua
local container_registry = client:ContainerRegistry(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:ContainerRegistry():remove({ project_id = "project_id", repository_id = "repository_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ContainerRegistryEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ContainerRegistryEventEntity

```lua
local container_registry_event = client:ContainerRegistryEvent(nil)
```

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ContainerRegistryEvent():create({
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ContainerRegistryEventEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CustomAttributeEntity

```lua
local custom_attribute = client:CustomAttribute(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `key` | `string` | No |  |
| `value` | `string` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:CustomAttribute():load({ id = "custom_attribute_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomAttributeEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DebianEntity

```lua
local debian = client:Debian(nil)
```

### Operations

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Debian():update({
  id = "id",
  project_id = "project_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DebianEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DebianDistributionEntity

```lua
local debian_distribution = client:DebianDistribution(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:DebianDistribution():remove({ id = "id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DebianDistributionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DebianPackageEntity

```lua
local debian_package = client:DebianPackage(nil)
```

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:DebianPackage():load({ id = "debian_package_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:DebianPackage():update({
  file_name = "file_name",
  project_id = "project_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DebianPackageEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DependencyProxyEntity

```lua
local dependency_proxy = client:DependencyProxy(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:DependencyProxy():remove({ group_id = "group_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DependencyProxyEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DeployKeyEntity

```lua
local deploy_key = client:DeployKey(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:DeployKey():remove({ id = "id", project_id = "project_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DeployKeyEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DeployTokenEntity

```lua
local deploy_token = client:DeployToken(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:DeployToken():remove({ id = "id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DeployTokenEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DeploymentEntity

```lua
local deployment = client:Deployment(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Deployment():remove({ id = "id", project_id = "project_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DeploymentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EeApiEntitiesApprovalStateEntity

```lua
local ee_api_entities_approval_state = client:EeApiEntitiesApprovalState(nil)
```

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:EeApiEntitiesApprovalState():create({
  merge_request_id = --[[ string ]],
  project_id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EeApiEntitiesApprovalStateEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EeApiEntitiesAuditEventEntity

```lua
local ee_api_entities_audit_event = client:EeApiEntitiesAuditEvent(nil)
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

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:EeApiEntitiesAuditEvent():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:EeApiEntitiesAuditEvent():load({ id = "ee_api_entities_audit_event_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EeApiEntitiesAuditEventEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EeApiEntitiesBillableMembershipEntity

```lua
local ee_api_entities_billable_membership = client:EeApiEntitiesBillableMembership(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access_level` | `table` | No |  |
| `created_at` | `string` | No |  |
| `expires_at` | `string` | No |  |
| `id` | `string` | No |  |
| `source_full_name` | `string` | No |  |
| `source_id` | `string` | No |  |
| `source_members_url` | `string` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:EeApiEntitiesBillableMembership():load({ billable_member_id = "billable_member_id", group_id = "group_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EeApiEntitiesBillableMembershipEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EeApiEntitiesGeoNodeStatusEntity

```lua
local ee_api_entities_geo_node_status = client:EeApiEntitiesGeoNodeStatus(nil)
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
| `link` | `table` | No |  |
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
| `namespace` | `table` | No |  |
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
| `storage_shard` | `table` | No |  |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:EeApiEntitiesGeoNodeStatus():create({
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EeApiEntitiesGeoNodeStatusEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EeApiEntitiesGeoPipelineRefEntity

```lua
local ee_api_entities_geo_pipeline_ref = client:EeApiEntitiesGeoPipelineRef(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `pipeline_ref` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:EeApiEntitiesGeoPipelineRef():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EeApiEntitiesGeoPipelineRefEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EeApiEntitiesIssuableMetricImageEntity

```lua
local ee_api_entities_issuable_metric_image = client:EeApiEntitiesIssuableMetricImage(nil)
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:EeApiEntitiesIssuableMetricImage():create({
  issue_id = --[[ string ]],
  project_id = --[[ string ]],
})
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:EeApiEntitiesIssuableMetricImage():remove({ id = "id", issue_id = "issue_id", project_id = "project_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:EeApiEntitiesIssuableMetricImage():update({
  id = "id",
  issue_id = "issue_id",
  project_id = "project_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EeApiEntitiesIssuableMetricImageEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EeApiEntitiesMergeRequestApprovalStateEntity

```lua
local ee_api_entities_merge_request_approval_state = client:EeApiEntitiesMergeRequestApprovalState(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `approvals_required` | `number` | No |  |
| `approved` | `boolean` | No |  |
| `approved_by` | `table` | No |  |
| `code_owner` | `boolean` | No |  |
| `contains_hidden_group` | `boolean` | No |  |
| `eligible_approver` | `table` | No |  |
| `group` | `table` | No |  |
| `id` | `number` | No |  |
| `name` | `string` | No |  |
| `overridden` | `boolean` | No |  |
| `report_type` | `string` | No |  |
| `rule_type` | `string` | No |  |
| `section` | `string` | No |  |
| `source_rule` | `table` | No |  |
| `user` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:EeApiEntitiesMergeRequestApprovalState():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EeApiEntitiesMergeRequestApprovalStateEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EeApiEntitiesSshCertificateEntity

```lua
local ee_api_entities_ssh_certificate = client:EeApiEntitiesSshCertificate(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No |  |
| `id` | `number` | No |  |
| `key` | `string` | No |  |
| `title` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:EeApiEntitiesSshCertificate():create({
  group_id = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:EeApiEntitiesSshCertificate():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EeApiEntitiesSshCertificateEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EnvironmentEntity

```lua
local environment = client:Environment(nil)
```

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Environment():create({
  project_id = --[[ string ]],
})
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Environment():remove({ id = "id", project_id = "project_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EnvironmentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ErrorTrackingClientKeyEntity

```lua
local error_tracking_client_key = client:ErrorTrackingClientKey(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:ErrorTrackingClientKey():remove({ id = "id", project_id = "project_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ErrorTrackingClientKeyEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## FeatureEntity

```lua
local feature = client:Feature(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Feature():remove({ id = "id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FeatureEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## FeatureFlagEntity

```lua
local feature_flag = client:FeatureFlag(nil)
```

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:FeatureFlag():create({
  unleash_id = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:FeatureFlag():load({ project_id = "project_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:FeatureFlag():remove({ id = "id", project_id = "project_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FeatureFlagEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## FeatureFlagsUserListEntity

```lua
local feature_flags_user_list = client:FeatureFlagsUserList(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:FeatureFlagsUserList():remove({ id = "id", project_id = "project_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FeatureFlagsUserListEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## FreezePeriodEntity

```lua
local freeze_period = client:FreezePeriod(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:FreezePeriod():remove({ id = "id", project_id = "project_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FreezePeriodEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## GenericPackageEntity

```lua
local generic_package = client:GenericPackage(nil)
```

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:GenericPackage():load({ file_name = "file_name", generic_id = "generic_id", project_id = "project_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:GenericPackage():update({
  file_name = "file_name",
  generic_id = "generic_id",
  project_id = "project_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GenericPackageEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## GeoEntity

```lua
local geo = client:Geo(nil)
```

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Geo():create({
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Geo():load({ replicable_id = "replicable_id", replicable_name = "replicable_name" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GeoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## GoProxyEntity

```lua
local go_proxy = client:GoProxy(nil)
```

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:GoProxy():load({ project_id = "project_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GoProxyEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## GroupEntity

```lua
local group = client:Group(nil)
```

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Group():create({
  id = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Group():load({ id = "group_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Group():remove({ id = "group_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Group():update({
  id = "group_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GroupEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## GroupAvatarEntity

```lua
local group_avatar = client:GroupAvatar(nil)
```

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:GroupAvatar():load({ id = "group_avatar_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GroupAvatarEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## GroupExportEntity

```lua
local group_export = client:GroupExport(nil)
```

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:GroupExport():create({
  id = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:GroupExport():load({ group_id = "group_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GroupExportEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## GroupImportEntity

```lua
local group_import = client:GroupImport(nil)
```

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:GroupImport():create({
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GroupImportEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## HelmPackageEntity

```lua
local helm_package = client:HelmPackage(nil)
```

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:HelmPackage():create({
  project_id = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:HelmPackage():load({ project_id = "project_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `HelmPackageEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## HookEntity

```lua
local hook = client:Hook(nil)
```

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Hook():create({
  id = --[[ string ]],
})
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Hook():remove({ id = "id", key = "key" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Hook():update({
  id = "id",
  key = "key",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `HookEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ImportEntity

```lua
local import = client:Import(nil)
```

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Import():create({
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ImportEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IntegrationEntity

```lua
local integration = client:Integration(nil)
```

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Integration():create({
})
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Integration():remove()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IntegrationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## InvitationEntity

```lua
local invitation = client:Invitation(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Invitation():remove({ id = "id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `InvitationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IssueLinkEntity

```lua
local issue_link = client:IssueLink(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:IssueLink():remove({ id = "id", issue_id = "issue_id", project_id = "project_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IssueLinkEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IssuesStatisticEntity

```lua
local issues_statistic = client:IssuesStatistic(nil)
```

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:IssuesStatistic():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IssuesStatisticEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## JobEntity

```lua
local job = client:Job(nil)
```

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Job():create({
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Job():load({ id = "job_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Job():update({
  id = "job_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `JobEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MavenPackageEntity

```lua
local maven_package = client:MavenPackage(nil)
```

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:MavenPackage():load({ file_name = "file_name" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:MavenPackage():update({
  file_name = "file_name",
  project_id = "project_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MavenPackageEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MemberEntity

```lua
local member = client:Member(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Member():remove({ id = "id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MemberEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MergeRequestEntity

```lua
local merge_request = client:MergeRequest(nil)
```

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:MergeRequest():load({ id = "merge_request_id", project_id = "project_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:MergeRequest():remove({ id = "merge_request_id", project_id = "project_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:MergeRequest():update({
  id = "merge_request_id",
  project_id = "project_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MergeRequestEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MetadataEntity

```lua
local metadata = client:Metadata(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enterprise` | `boolean` | No |  |
| `kas` | `table` | No |  |
| `revision` | `string` | No |  |
| `version` | `string` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Metadata():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MetadataEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MigrationEntity

```lua
local migration = client:Migration(nil)
```

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Migration():create({
  timestamp = --[[ any ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MigrationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MlModelRegistryEntity

```lua
local ml_model_registry = client:MlModelRegistry(nil)
```

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:MlModelRegistry():load({ file_name = "file_name", ml_model_id = "ml_model_id", project_id = "project_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:MlModelRegistry():update({
  file_name = "file_name",
  ml_model_id = "ml_model_id",
  project_id = "project_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MlModelRegistryEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## NamespaceEntity

```lua
local namespace = client:Namespace(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Namespace():remove({ id = "id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NamespaceEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## NpmEntity

```lua
local npm = client:Npm(nil)
```

### Operations

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Npm():update({
  id = "id",
  project_id = "project_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NpmEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## NpmPackageEntity

```lua
local npm_package = client:NpmPackage(nil)
```

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:NpmPackage():create({
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:NpmPackage():load({ project_id = "project_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:NpmPackage():remove({ tag = "tag" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:NpmPackage():update({
  tag = "tag",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NpmPackageEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## NugetEntity

```lua
local nuget = client:Nuget(nil)
```

### Operations

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Nuget():update({
  project_id = "project_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NugetEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## NugetPackageEntity

```lua
local nuget_package = client:NugetPackage(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `catalog_entry` | `table` | No |  |
| `count` | `number` | No |  |
| `id` | `string` | No |  |
| `item` | `table` | No |  |
| `lower` | `string` | No |  |
| `package_content` | `string` | No |  |
| `upper` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:NugetPackage():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:NugetPackage():load()
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:NugetPackage():remove({ project_id = "project_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:NugetPackage():update({
  project_id = "project_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NugetPackageEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PackageFileEntity

```lua
local package_file = client:PackageFile(nil)
```

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:PackageFile():load({ id = "package_file_id", package_id = "package_id", project_id = "project_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:PackageFile():remove({ id = "package_file_id", package_id = "package_id", project_id = "project_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PackageFileEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PageEntity

```lua
local page = client:Page(nil)
```

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Page():load({ project_id = "project_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Page():remove({ project_id = "project_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Page():update({
  project_id = "project_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PageEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ParticipantEntity

```lua
local participant = client:Participant(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `key` | `string` | No |  |
| `value` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Participant():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ParticipantEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PersonalAccessTokenEntity

```lua
local personal_access_token = client:PersonalAccessToken(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:PersonalAccessToken():remove({ id = "id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PersonalAccessTokenEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ProjectEntity

```lua
local project = client:Project(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `before_sha` | `string` | No |  |
| `committed_at` | `string` | No |  |
| `coverage` | `number` | No |  |
| `created_at` | `string` | No |  |
| `detailed_status` | `table` | No |  |
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
| `user` | `table` | No |  |
| `web_url` | `string` | No |  |
| `yaml_error` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Project():create({
  id = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Project():load({ id = "project_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Project():remove({ id = "project_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Project():update({
  id = "project_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ProjectAvatarEntity

```lua
local project_avatar = client:ProjectAvatar(nil)
```

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ProjectAvatar():load({ id = "project_avatar_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectAvatarEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ProjectEntityEntity

```lua
local project_entity = client:ProjectEntity(nil)
```

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ProjectEntity():create({
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectEntityEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ProjectExportEntity

```lua
local project_export = client:ProjectExport(nil)
```

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ProjectExport():create({
  id = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ProjectExport():load({ project_id = "project_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectExportEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ProjectHookEntity

```lua
local project_hook = client:ProjectHook(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:ProjectHook():remove({ id = "id", project_id = "project_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectHookEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ProjectImportEntity

```lua
local project_import = client:ProjectImport(nil)
```

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ProjectImport():create({
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectImportEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ProjectImportEntityEntity

```lua
local project_import_entity = client:ProjectImportEntity(nil)
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ProjectImportEntity():create({
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectImportEntityEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ProjectPackageEntity

```lua
local project_package = client:ProjectPackage(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:ProjectPackage():remove({ id = "id", project_id = "project_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectPackageEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ProjectSnippetEntity

```lua
local project_snippet = client:ProjectSnippet(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:ProjectSnippet():remove({ id = "id", project_id = "project_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectSnippetEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ProjectsJobTokenScopeEntity

```lua
local projects_job_token_scope = client:ProjectsJobTokenScope(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:ProjectsJobTokenScope():remove({ project_id = "project_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ProjectsJobTokenScope():update({
  project_id = "project_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectsJobTokenScopeEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ProtectedTagEntity

```lua
local protected_tag = client:ProtectedTag(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:ProtectedTag():remove({ id = "id", project_id = "project_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProtectedTagEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PypiEntity

```lua
local pypi = client:Pypi(nil)
```

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Pypi():create({
  project_id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PypiEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PypiPackageEntity

```lua
local pypi_package = client:PypiPackage(nil)
```

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:PypiPackage():create({
  project_id = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:PypiPackage():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PypiPackageEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ReleaseEntity

```lua
local release = client:Release(nil)
```

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Release():load({ project_id = "project_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Release():remove({ id = "id", project_id = "project_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ReleaseEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ReleaseLinkEntity

```lua
local release_link = client:ReleaseLink(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:ReleaseLink():remove({ id = "id", project_id = "project_id", release_id = "release_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ReleaseLinkEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RemoteMirrorEntity

```lua
local remote_mirror = client:RemoteMirror(nil)
```

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:RemoteMirror():create({
  id = --[[ string ]],
  project_id = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:RemoteMirror():load({ id = "remote_mirror_id", project_id = "project_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:RemoteMirror():remove({ id = "remote_mirror_id", project_id = "project_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RemoteMirrorEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RpmEntity

```lua
local rpm = client:Rpm(nil)
```

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Rpm():create({
  project_id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RpmEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RpmPackageEntity

```lua
local rpm_package = client:RpmPackage(nil)
```

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:RpmPackage():create({
  project_id = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:RpmPackage():load({ project_id = "project_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RpmPackageEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RubygemEntity

```lua
local rubygem = client:Rubygem(nil)
```

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Rubygem():load({ id = "rubygem_id", project_id = "project_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RubygemEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RubygemPackageEntity

```lua
local rubygem_package = client:RubygemPackage(nil)
```

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:RubygemPackage():create({
  project_id = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:RubygemPackage():load({ project_id = "project_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RubygemPackageEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RunnerEntity

```lua
local runner = client:Runner(nil)
```

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Runner():create({
})
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Runner():remove()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RunnerEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SearchEntity

```lua
local search = client:Search(nil)
```

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Search():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SearchEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SecureFileEntity

```lua
local secure_file = client:SecureFile(nil)
```

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:SecureFile():load({ id = "secure_file_id", project_id = "project_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:SecureFile():remove({ id = "secure_file_id", project_id = "project_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SecureFileEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SlackEntity

```lua
local slack = client:Slack(nil)
```

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Slack():create({
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SlackEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SnippetEntity

```lua
local snippet = client:Snippet(nil)
```

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Snippet():load({ id = "snippet_id", file_id = "file_id", file_path = "file_path" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Snippet():remove({ id = "snippet_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SnippetEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## StarrerEntity

```lua
local starrer = client:Starrer(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_path` | `string` | No |  |
| `avatar_url` | `string` | No |  |
| `custom_attribute` | `table` | No |  |
| `id` | `number` | No |  |
| `locked` | `boolean` | No |  |
| `name` | `string` | No |  |
| `public_email` | `string` | No |  |
| `state` | `string` | No |  |
| `username` | `string` | No |  |
| `web_url` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Starrer():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `StarrerEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SystemHookEntity

```lua
local system_hook = client:SystemHook(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:SystemHook():remove({ id = "id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SystemHookEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TagEntity

```lua
local tag = client:Tag(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Tag():remove({ id = "id", project_id = "project_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TagEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TerraformRegistryEntity

```lua
local terraform_registry = client:TerraformRegistry(nil)
```

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:TerraformRegistry():load({ id = "terraform_registry_id", module_system = "module_system" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:TerraformRegistry():update({
  module_id = "module_id",
  module_system = "module_system",
  project_id = "project_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TerraformRegistryEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TerraformStateEntity

```lua
local terraform_state = client:TerraformState(nil)
```

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:TerraformState():create({
  project_id = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:TerraformState():load({ id = "terraform_state_id", project_id = "project_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:TerraformState():remove({ id = "terraform_state_id", project_id = "project_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TerraformStateEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TestReportEntity

```lua
local test_report = client:TestReport(nil)
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
| `test_case` | `table` | No |  |
| `total_count` | `number` | No |  |
| `total_time` | `number` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:TestReport():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TestReportEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TestReportSummaryEntity

```lua
local test_report_summary = client:TestReportSummary(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `test_suite` | `table` | No |  |
| `total` | `table` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:TestReportSummary():load({ pipeline_id = "pipeline_id", project_id = "project_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TestReportSummaryEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TopicEntity

```lua
local topic = client:Topic(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Topic():remove({ id = "id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TopicEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## UnleashApiEntity

```lua
local unleash_api = client:UnleashApi(nil)
```

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:UnleashApi():load({ unleash_id = "unleash_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UnleashApiEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## UsageDataEntity

```lua
local usage_data = client:UsageData(nil)
```

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:UsageData():create({
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:UsageData():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UsageDataEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## UserEntity

```lua
local user = client:User(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_path` | `string` | No |  |
| `avatar_url` | `string` | No |  |
| `custom_attribute` | `table` | No |  |
| `id` | `number` | No |  |
| `locked` | `boolean` | No |  |
| `name` | `string` | No |  |
| `public_email` | `string` | No |  |
| `state` | `string` | No |  |
| `username` | `string` | No |  |
| `web_url` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:User():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UserEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WebCommitEntity

```lua
local web_commit = client:WebCommit(nil)
```

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:WebCommit():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WebCommitEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WikiEntity

```lua
local wiki = client:Wiki(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Wiki():remove({ id = "id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WikiEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```lua
local client = sdk.new({
  feature = {
    test = { active = true },
  },
})
```

