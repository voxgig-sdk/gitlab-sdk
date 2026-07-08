# Gitlab Golang SDK Reference

Complete API reference for the Gitlab Golang SDK.


## GitlabSDK

### Constructor

```go
func NewGitlabSDK(options map[string]any) *GitlabSDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["apikey"]` | `string` | API key for authentication. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *GitlabSDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *GitlabSDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `AccessRequest(data map[string]any) GitlabEntity`

Create a new `AccessRequest` entity instance. Pass `nil` for no initial data.

#### `AlertManagement(data map[string]any) GitlabEntity`

Create a new `AlertManagement` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesAccessRequester(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesAccessRequester` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesAppearance(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesAppearance` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesApplication(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesApplication` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesApplicationStatistic(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesApplicationStatistic` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesApplicationWithSecret(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesApplicationWithSecret` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesAvatar(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesAvatar` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesAwardEmoji(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesAwardEmoji` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesBadge(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesBadge` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesBasicBadgeDetail(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesBasicBadgeDetail` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesBasicGroupDetail(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesBasicGroupDetail` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesBasicProjectDetail(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesBasicProjectDetail` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesBasicRef(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesBasicRef` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesBasicSuccess(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesBasicSuccess` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesBatchedBackgroundMigration(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesBatchedBackgroundMigration` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesBranch(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesBranch` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesBulkImport(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesBulkImport` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesBulkImportsEntityFailure(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesBulkImportsEntityFailure` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesBulkImportsExportStatus(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesBulkImportsExportStatus` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesChangelog(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesChangelog` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesCiBridge(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesCiBridge` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesCiCatalogResourcesVersion(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesCiCatalogResourcesVersion` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesCiJob(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesCiJob` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesCiJobBasic(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesCiJobBasic` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesCiJobBasicWithProject(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesCiJobBasicWithProject` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesCiLintResult(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesCiLintResult` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesCiPipeline(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesCiPipeline` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesCiPipelineBasic(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesCiPipelineBasic` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesCiPipelineSchedule(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesCiPipelineSchedule` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesCiPipelineScheduleDetail(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesCiPipelineScheduleDetail` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesCiResetTokenResult(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesCiResetTokenResult` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesCiResourceGroup(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesCiResourceGroup` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesCiRunner(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesCiRunner` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesCiRunnerDetail(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesCiRunnerDetail` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesCiRunnerManager(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesCiRunnerManager` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesCiRunnerRegistrationDetail(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesCiRunnerRegistrationDetail` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesCiSecureFile(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesCiSecureFile` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesCiVariable(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesCiVariable` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesCluster(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesCluster` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesClusterGroup(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesClusterGroup` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesClusterProject(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesClusterProject` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesClustersAgent(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesClustersAgent` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesClustersAgentToken(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesClustersAgentToken` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesClustersAgentTokenBasic(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesClustersAgentTokenBasic` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesClustersAgentTokenWithToken(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesClustersAgentTokenWithToken` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesCommit(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesCommit` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesCommitDetail(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesCommitDetail` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesCommitNote(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesCommitNote` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesCommitSequence(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesCommitSequence` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesCommitSignature(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesCommitSignature` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesCommitStatus(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesCommitStatus` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesCompare(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesCompare` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesContainerRegistryRepository(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesContainerRegistryRepository` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesContainerRegistryTag(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesContainerRegistryTag` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesContainerRegistryTagDetail(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesContainerRegistryTagDetail` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesContributor(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesContributor` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesDeployKey(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesDeployKey` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesDeployKeysProject(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesDeployKeysProject` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesDeployToken(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesDeployToken` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesDeployTokenWithToken(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesDeployTokenWithToken` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesDeployment(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesDeployment` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesDeploymentExtended(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesDeploymentExtended` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesDeploymentsApproval(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesDeploymentsApproval` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesDictionaryTable(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesDictionaryTable` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesDiff(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesDiff` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesDiscoveredCluster(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesDiscoveredCluster` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesDraftNote(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesDraftNote` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesEnvironment(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesEnvironment` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesErrorTrackingClientKey(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesErrorTrackingClientKey` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesErrorTrackingProjectSetting(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesErrorTrackingProjectSetting` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesEvent(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesEvent` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesFeature(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesFeature` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesFeatureDefinition(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesFeatureDefinition` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesFeatureFlag(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesFeatureFlag` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesFeatureFlagUserList(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesFeatureFlagUserList` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesFreezePeriod(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesFreezePeriod` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesGitlabSubscription(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesGitlabSubscription` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesGoModuleVersion(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesGoModuleVersion` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesGroup(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesGroup` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesGroupDetail(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesGroupDetail` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesHook(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesHook` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesIntegration(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesIntegration` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesIntegrationBasic(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesIntegrationBasic` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesInvitation(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesInvitation` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesIssuableTimeStat(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesIssuableTimeStat` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesIssue(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesIssue` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesIssueLink(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesIssueLink` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesLicense(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesLicense` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesMarkdown(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesMarkdown` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesMarkdownUploadAdmin(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesMarkdownUploadAdmin` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesMember(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesMember` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesMerge(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesMerge` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesMergeRequestApproval(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesMergeRequestApproval` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesMergeRequestBasic(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesMergeRequestBasic` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesMergeRequestChange(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesMergeRequestChange` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesMergeRequestDiff(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesMergeRequestDiff` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesMergeRequestDiffFull(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesMergeRequestDiffFull` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesMergeRequestReviewer(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesMergeRequestReviewer` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesMetricImage(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesMetricImage` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesMrNote(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesMrNote` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesNamespace(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesNamespace` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesNamespaceExistence(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesNamespaceExistence` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesNamespacesStorageLimitExclusion(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesNamespacesStorageLimitExclusion` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesNpmPackage(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesNpmPackage` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesNpmPackageTag(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesNpmPackageTag` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesNugetPackagesVersion(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesNugetPackagesVersion` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesNugetSearchResult(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesNugetSearchResult` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesNugetServiceIndex(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesNugetServiceIndex` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesOrganizationsOrganization(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesOrganizationsOrganization` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesPackage(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesPackage` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesPackageFile(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesPackageFile` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesPackagePipeline(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesPackagePipeline` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesPackagesConanFilesList(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesPackagesConanFilesList` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesPackagesConanPackageManifest(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesPackagesConanPackageManifest` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesPackagesConanPackageRevision(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesPackagesConanPackageRevision` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesPackagesConanPackageSnapshot(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesPackagesConanPackageSnapshot` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesPackagesConanRecipeManifest(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesPackagesConanRecipeManifest` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesPackagesConanRecipeRevision(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesPackagesConanRecipeRevision` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesPackagesConanRecipeSnapshot(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesPackagesConanRecipeSnapshot` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesPackagesConanRevision(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesPackagesConanRevision` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesPackagesConanUploadUrl(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesPackagesConanUploadUrl` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesPackagesDebianDistribution(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesPackagesDebianDistribution` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesPagesDomain(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesPagesDomain` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesPagesDomainBasic(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesPagesDomainBasic` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesPersonalAccessToken(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesPersonalAccessToken` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesPersonalAccessTokenWithLastUsedIp(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesPersonalAccessTokenWithLastUsedIp` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesPersonalAccessTokenWithToken(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesPersonalAccessTokenWithToken` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesPersonalSnippet(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesPersonalSnippet` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesPlanLimit(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesPlanLimit` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesProject(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesProject` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesProjectDailyStatistic(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesProjectDailyStatistic` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesProjectExportStatus(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesProjectExportStatus` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesProjectGroupLink(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesProjectGroupLink` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesProjectHook(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesProjectHook` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesProjectImportStatus(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesProjectImportStatus` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesProjectJobTokenScope(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesProjectJobTokenScope` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesProjectRepositoryStorage(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesProjectRepositoryStorage` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesProjectSnippet(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesProjectSnippet` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesProjectUpload(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesProjectUpload` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesProjectWithAccess(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesProjectWithAccess` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesProjectsContainerRegistryProtectionRule(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesProjectsContainerRegistryProtectionRule` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesProjectsPackagesProtectionRule(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesProjectsPackagesProtectionRule` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesProjectsTopic(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesProjectsTopic` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesProtectedBranch(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesProtectedBranch` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesProtectedTag(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesProtectedTag` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesPublicGroupDetail(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesPublicGroupDetail` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesRelatedIssue(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesRelatedIssue` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesRelationImportTracker(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesRelationImportTracker` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesRelease(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesRelease` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesReleasesLink(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesReleasesLink` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesRemoteMirror(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesRemoteMirror` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesRepositoryHealth(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesRepositoryHealth` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesResourceAccessTokenWithToken(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesResourceAccessTokenWithToken` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesResourceMilestoneEvent(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesResourceMilestoneEvent` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesSnippet(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesSnippet` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesSshKeyWithUser(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesSshKeyWithUser` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesSuggestion(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesSuggestion` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesSystemBroadcastMessage(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesSystemBroadcastMessage` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesTag(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesTag` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesTagSignature(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesTagSignature` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesTemplatesList(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesTemplatesList` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesTerraformModuleVersion(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesTerraformModuleVersion` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesTreeObject(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesTreeObject` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesTrigger(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesTrigger` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesUserAgentDetail(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesUserAgentDetail` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesUserCount(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesUserCount` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesUserPublic(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesUserPublic` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesUserWithAdmin(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesUserWithAdmin` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesWikiAttachment(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesWikiAttachment` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesWikiPage(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesWikiPage` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesWikiPageBasic(data map[string]any) GitlabEntity`

Create a new `ApiEntitiesWikiPageBasic` entity instance. Pass `nil` for no initial data.

#### `Application(data map[string]any) GitlabEntity`

Create a new `Application` entity instance. Pass `nil` for no initial data.

#### `AwardEmoji(data map[string]any) GitlabEntity`

Create a new `AwardEmoji` entity instance. Pass `nil` for no initial data.

#### `Badge(data map[string]any) GitlabEntity`

Create a new `Badge` entity instance. Pass `nil` for no initial data.

#### `Branch(data map[string]any) GitlabEntity`

Create a new `Branch` entity instance. Pass `nil` for no initial data.

#### `CargoPackage(data map[string]any) GitlabEntity`

Create a new `CargoPackage` entity instance. Pass `nil` for no initial data.

#### `CiVariable(data map[string]any) GitlabEntity`

Create a new `CiVariable` entity instance. Pass `nil` for no initial data.

#### `Cluster(data map[string]any) GitlabEntity`

Create a new `Cluster` entity instance. Pass `nil` for no initial data.

#### `ClusterAgent(data map[string]any) GitlabEntity`

Create a new `ClusterAgent` entity instance. Pass `nil` for no initial data.

#### `Composer(data map[string]any) GitlabEntity`

Create a new `Composer` entity instance. Pass `nil` for no initial data.

#### `ComposerPackage(data map[string]any) GitlabEntity`

Create a new `ComposerPackage` entity instance. Pass `nil` for no initial data.

#### `Conan(data map[string]any) GitlabEntity`

Create a new `Conan` entity instance. Pass `nil` for no initial data.

#### `ConanPackage(data map[string]any) GitlabEntity`

Create a new `ConanPackage` entity instance. Pass `nil` for no initial data.

#### `ContainerRegistry(data map[string]any) GitlabEntity`

Create a new `ContainerRegistry` entity instance. Pass `nil` for no initial data.

#### `ContainerRegistryEvent(data map[string]any) GitlabEntity`

Create a new `ContainerRegistryEvent` entity instance. Pass `nil` for no initial data.

#### `CustomAttribute(data map[string]any) GitlabEntity`

Create a new `CustomAttribute` entity instance. Pass `nil` for no initial data.

#### `Debian(data map[string]any) GitlabEntity`

Create a new `Debian` entity instance. Pass `nil` for no initial data.

#### `DebianDistribution(data map[string]any) GitlabEntity`

Create a new `DebianDistribution` entity instance. Pass `nil` for no initial data.

#### `DebianPackage(data map[string]any) GitlabEntity`

Create a new `DebianPackage` entity instance. Pass `nil` for no initial data.

#### `DependencyProxy(data map[string]any) GitlabEntity`

Create a new `DependencyProxy` entity instance. Pass `nil` for no initial data.

#### `DeployKey(data map[string]any) GitlabEntity`

Create a new `DeployKey` entity instance. Pass `nil` for no initial data.

#### `DeployToken(data map[string]any) GitlabEntity`

Create a new `DeployToken` entity instance. Pass `nil` for no initial data.

#### `Deployment(data map[string]any) GitlabEntity`

Create a new `Deployment` entity instance. Pass `nil` for no initial data.

#### `EeApiEntitiesApprovalState(data map[string]any) GitlabEntity`

Create a new `EeApiEntitiesApprovalState` entity instance. Pass `nil` for no initial data.

#### `EeApiEntitiesAuditEvent(data map[string]any) GitlabEntity`

Create a new `EeApiEntitiesAuditEvent` entity instance. Pass `nil` for no initial data.

#### `EeApiEntitiesBillableMembership(data map[string]any) GitlabEntity`

Create a new `EeApiEntitiesBillableMembership` entity instance. Pass `nil` for no initial data.

#### `EeApiEntitiesGeoNodeStatus(data map[string]any) GitlabEntity`

Create a new `EeApiEntitiesGeoNodeStatus` entity instance. Pass `nil` for no initial data.

#### `EeApiEntitiesGeoPipelineRef(data map[string]any) GitlabEntity`

Create a new `EeApiEntitiesGeoPipelineRef` entity instance. Pass `nil` for no initial data.

#### `EeApiEntitiesIssuableMetricImage(data map[string]any) GitlabEntity`

Create a new `EeApiEntitiesIssuableMetricImage` entity instance. Pass `nil` for no initial data.

#### `EeApiEntitiesMergeRequestApprovalState(data map[string]any) GitlabEntity`

Create a new `EeApiEntitiesMergeRequestApprovalState` entity instance. Pass `nil` for no initial data.

#### `EeApiEntitiesSshCertificate(data map[string]any) GitlabEntity`

Create a new `EeApiEntitiesSshCertificate` entity instance. Pass `nil` for no initial data.

#### `Environment(data map[string]any) GitlabEntity`

Create a new `Environment` entity instance. Pass `nil` for no initial data.

#### `ErrorTrackingClientKey(data map[string]any) GitlabEntity`

Create a new `ErrorTrackingClientKey` entity instance. Pass `nil` for no initial data.

#### `Feature(data map[string]any) GitlabEntity`

Create a new `Feature` entity instance. Pass `nil` for no initial data.

#### `FeatureFlag(data map[string]any) GitlabEntity`

Create a new `FeatureFlag` entity instance. Pass `nil` for no initial data.

#### `FeatureFlagsUserList(data map[string]any) GitlabEntity`

Create a new `FeatureFlagsUserList` entity instance. Pass `nil` for no initial data.

#### `FreezePeriod(data map[string]any) GitlabEntity`

Create a new `FreezePeriod` entity instance. Pass `nil` for no initial data.

#### `GenericPackage(data map[string]any) GitlabEntity`

Create a new `GenericPackage` entity instance. Pass `nil` for no initial data.

#### `Geo(data map[string]any) GitlabEntity`

Create a new `Geo` entity instance. Pass `nil` for no initial data.

#### `GoProxy(data map[string]any) GitlabEntity`

Create a new `GoProxy` entity instance. Pass `nil` for no initial data.

#### `Group(data map[string]any) GitlabEntity`

Create a new `Group` entity instance. Pass `nil` for no initial data.

#### `GroupAvatar(data map[string]any) GitlabEntity`

Create a new `GroupAvatar` entity instance. Pass `nil` for no initial data.

#### `GroupExport(data map[string]any) GitlabEntity`

Create a new `GroupExport` entity instance. Pass `nil` for no initial data.

#### `GroupImport(data map[string]any) GitlabEntity`

Create a new `GroupImport` entity instance. Pass `nil` for no initial data.

#### `HelmPackage(data map[string]any) GitlabEntity`

Create a new `HelmPackage` entity instance. Pass `nil` for no initial data.

#### `Hook(data map[string]any) GitlabEntity`

Create a new `Hook` entity instance. Pass `nil` for no initial data.

#### `Import(data map[string]any) GitlabEntity`

Create a new `Import` entity instance. Pass `nil` for no initial data.

#### `Integration(data map[string]any) GitlabEntity`

Create a new `Integration` entity instance. Pass `nil` for no initial data.

#### `Invitation(data map[string]any) GitlabEntity`

Create a new `Invitation` entity instance. Pass `nil` for no initial data.

#### `IssueLink(data map[string]any) GitlabEntity`

Create a new `IssueLink` entity instance. Pass `nil` for no initial data.

#### `IssuesStatistic(data map[string]any) GitlabEntity`

Create a new `IssuesStatistic` entity instance. Pass `nil` for no initial data.

#### `Job(data map[string]any) GitlabEntity`

Create a new `Job` entity instance. Pass `nil` for no initial data.

#### `MavenPackage(data map[string]any) GitlabEntity`

Create a new `MavenPackage` entity instance. Pass `nil` for no initial data.

#### `Member(data map[string]any) GitlabEntity`

Create a new `Member` entity instance. Pass `nil` for no initial data.

#### `MergeRequest(data map[string]any) GitlabEntity`

Create a new `MergeRequest` entity instance. Pass `nil` for no initial data.

#### `Metadata(data map[string]any) GitlabEntity`

Create a new `Metadata` entity instance. Pass `nil` for no initial data.

#### `Migration(data map[string]any) GitlabEntity`

Create a new `Migration` entity instance. Pass `nil` for no initial data.

#### `MlModelRegistry(data map[string]any) GitlabEntity`

Create a new `MlModelRegistry` entity instance. Pass `nil` for no initial data.

#### `Namespace(data map[string]any) GitlabEntity`

Create a new `Namespace` entity instance. Pass `nil` for no initial data.

#### `Npm(data map[string]any) GitlabEntity`

Create a new `Npm` entity instance. Pass `nil` for no initial data.

#### `NpmPackage(data map[string]any) GitlabEntity`

Create a new `NpmPackage` entity instance. Pass `nil` for no initial data.

#### `Nuget(data map[string]any) GitlabEntity`

Create a new `Nuget` entity instance. Pass `nil` for no initial data.

#### `NugetPackage(data map[string]any) GitlabEntity`

Create a new `NugetPackage` entity instance. Pass `nil` for no initial data.

#### `PackageFile(data map[string]any) GitlabEntity`

Create a new `PackageFile` entity instance. Pass `nil` for no initial data.

#### `Page(data map[string]any) GitlabEntity`

Create a new `Page` entity instance. Pass `nil` for no initial data.

#### `Participant(data map[string]any) GitlabEntity`

Create a new `Participant` entity instance. Pass `nil` for no initial data.

#### `PersonalAccessToken(data map[string]any) GitlabEntity`

Create a new `PersonalAccessToken` entity instance. Pass `nil` for no initial data.

#### `Project(data map[string]any) GitlabEntity`

Create a new `Project` entity instance. Pass `nil` for no initial data.

#### `ProjectAvatar(data map[string]any) GitlabEntity`

Create a new `ProjectAvatar` entity instance. Pass `nil` for no initial data.

#### `ProjectEntity(data map[string]any) GitlabEntity`

Create a new `ProjectEntity` entity instance. Pass `nil` for no initial data.

#### `ProjectExport(data map[string]any) GitlabEntity`

Create a new `ProjectExport` entity instance. Pass `nil` for no initial data.

#### `ProjectHook(data map[string]any) GitlabEntity`

Create a new `ProjectHook` entity instance. Pass `nil` for no initial data.

#### `ProjectImport(data map[string]any) GitlabEntity`

Create a new `ProjectImport` entity instance. Pass `nil` for no initial data.

#### `ProjectImportEntity(data map[string]any) GitlabEntity`

Create a new `ProjectImportEntity` entity instance. Pass `nil` for no initial data.

#### `ProjectPackage(data map[string]any) GitlabEntity`

Create a new `ProjectPackage` entity instance. Pass `nil` for no initial data.

#### `ProjectSnippet(data map[string]any) GitlabEntity`

Create a new `ProjectSnippet` entity instance. Pass `nil` for no initial data.

#### `ProjectsJobTokenScope(data map[string]any) GitlabEntity`

Create a new `ProjectsJobTokenScope` entity instance. Pass `nil` for no initial data.

#### `ProtectedTag(data map[string]any) GitlabEntity`

Create a new `ProtectedTag` entity instance. Pass `nil` for no initial data.

#### `Pypi(data map[string]any) GitlabEntity`

Create a new `Pypi` entity instance. Pass `nil` for no initial data.

#### `PypiPackage(data map[string]any) GitlabEntity`

Create a new `PypiPackage` entity instance. Pass `nil` for no initial data.

#### `Release(data map[string]any) GitlabEntity`

Create a new `Release` entity instance. Pass `nil` for no initial data.

#### `ReleaseLink(data map[string]any) GitlabEntity`

Create a new `ReleaseLink` entity instance. Pass `nil` for no initial data.

#### `RemoteMirror(data map[string]any) GitlabEntity`

Create a new `RemoteMirror` entity instance. Pass `nil` for no initial data.

#### `Rpm(data map[string]any) GitlabEntity`

Create a new `Rpm` entity instance. Pass `nil` for no initial data.

#### `RpmPackage(data map[string]any) GitlabEntity`

Create a new `RpmPackage` entity instance. Pass `nil` for no initial data.

#### `Rubygem(data map[string]any) GitlabEntity`

Create a new `Rubygem` entity instance. Pass `nil` for no initial data.

#### `RubygemPackage(data map[string]any) GitlabEntity`

Create a new `RubygemPackage` entity instance. Pass `nil` for no initial data.

#### `Runner(data map[string]any) GitlabEntity`

Create a new `Runner` entity instance. Pass `nil` for no initial data.

#### `Search(data map[string]any) GitlabEntity`

Create a new `Search` entity instance. Pass `nil` for no initial data.

#### `SecureFile(data map[string]any) GitlabEntity`

Create a new `SecureFile` entity instance. Pass `nil` for no initial data.

#### `Slack(data map[string]any) GitlabEntity`

Create a new `Slack` entity instance. Pass `nil` for no initial data.

#### `Snippet(data map[string]any) GitlabEntity`

Create a new `Snippet` entity instance. Pass `nil` for no initial data.

#### `Starrer(data map[string]any) GitlabEntity`

Create a new `Starrer` entity instance. Pass `nil` for no initial data.

#### `SystemHook(data map[string]any) GitlabEntity`

Create a new `SystemHook` entity instance. Pass `nil` for no initial data.

#### `Tag(data map[string]any) GitlabEntity`

Create a new `Tag` entity instance. Pass `nil` for no initial data.

#### `TerraformRegistry(data map[string]any) GitlabEntity`

Create a new `TerraformRegistry` entity instance. Pass `nil` for no initial data.

#### `TerraformState(data map[string]any) GitlabEntity`

Create a new `TerraformState` entity instance. Pass `nil` for no initial data.

#### `TestReport(data map[string]any) GitlabEntity`

Create a new `TestReport` entity instance. Pass `nil` for no initial data.

#### `TestReportSummary(data map[string]any) GitlabEntity`

Create a new `TestReportSummary` entity instance. Pass `nil` for no initial data.

#### `Topic(data map[string]any) GitlabEntity`

Create a new `Topic` entity instance. Pass `nil` for no initial data.

#### `UnleashApi(data map[string]any) GitlabEntity`

Create a new `UnleashApi` entity instance. Pass `nil` for no initial data.

#### `UsageData(data map[string]any) GitlabEntity`

Create a new `UsageData` entity instance. Pass `nil` for no initial data.

#### `User(data map[string]any) GitlabEntity`

Create a new `User` entity instance. Pass `nil` for no initial data.

#### `WebCommit(data map[string]any) GitlabEntity`

Create a new `WebCommit` entity instance. Pass `nil` for no initial data.

#### `Wiki(data map[string]any) GitlabEntity`

Create a new `Wiki` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## AccessRequestEntity

```go
accessRequest := client.AccessRequest(nil)
fmt.Println(accessRequest.GetName()) // "access_request"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.AccessRequest(nil).Remove(map[string]any{"id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AccessRequestEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AlertManagementEntity

```go
alertManagement := client.AlertManagement(nil)
fmt.Println(alertManagement.GetName()) // "alert_management"
```

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.AlertManagement(nil).Create(map[string]any{
    "alert_management_alert_id": /* string */,
    "project_id": /* string */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.AlertManagement(nil).Remove(map[string]any{"alert_management_alert_id": "alert_management_alert_id", "metric_image_id": "metric_image_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AlertManagementEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesAccessRequesterEntity

```go
apiEntitiesAccessRequester := client.ApiEntitiesAccessRequester(nil)
fmt.Println(apiEntitiesAccessRequester.GetName()) // "api_entities_access_requester"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_path` | `string` | No |  |
| `avatar_url` | `string` | No |  |
| `custom_attribute` | `[]any` | No |  |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiEntitiesAccessRequester(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ApiEntitiesAccessRequester(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ApiEntitiesAccessRequester(nil).Update(map[string]any{
    "access_request_id": "access_request_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesAccessRequesterEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesAppearanceEntity

```go
apiEntitiesAppearance := client.ApiEntitiesAppearance(nil)
fmt.Println(apiEntitiesAppearance.GetName()) // "api_entities_appearance"
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesAppearance(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ApiEntitiesAppearance(nil).Update(map[string]any{
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesAppearanceEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesApplicationEntity

```go
apiEntitiesApplication := client.ApiEntitiesApplication(nil)
fmt.Println(apiEntitiesApplication.GetName()) // "api_entities_application"
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiEntitiesApplication(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesApplicationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesApplicationStatisticEntity

```go
apiEntitiesApplicationStatistic := client.ApiEntitiesApplicationStatistic(nil)
fmt.Println(apiEntitiesApplicationStatistic.GetName()) // "api_entities_application_statistic"
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesApplicationStatistic(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesApplicationStatisticEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesApplicationWithSecretEntity

```go
apiEntitiesApplicationWithSecret := client.ApiEntitiesApplicationWithSecret(nil)
fmt.Println(apiEntitiesApplicationWithSecret.GetName()) // "api_entities_application_with_secret"
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

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ApiEntitiesApplicationWithSecret(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesApplicationWithSecretEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesAvatarEntity

```go
apiEntitiesAvatar := client.ApiEntitiesAvatar(nil)
fmt.Println(apiEntitiesAvatar.GetName()) // "api_entities_avatar"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_url` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesAvatar(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesAvatarEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesAwardEmojiEntity

```go
apiEntitiesAwardEmoji := client.ApiEntitiesAwardEmoji(nil)
fmt.Println(apiEntitiesAwardEmoji.GetName()) // "api_entities_award_emoji"
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
| `user` | `map[string]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiEntitiesAwardEmoji(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesAwardEmoji(nil).Load(map[string]any{"id": "api_entities_award_emoji_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ApiEntitiesAwardEmoji(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesAwardEmojiEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesBadgeEntity

```go
apiEntitiesBadge := client.ApiEntitiesBadge(nil)
fmt.Println(apiEntitiesBadge.GetName()) // "api_entities_badge"
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiEntitiesBadge(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesBadge(nil).Load(map[string]any{"id": "api_entities_badge_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ApiEntitiesBadge(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ApiEntitiesBadge(nil).Update(map[string]any{
    "id": "api_entities_badge_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesBadgeEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesBasicBadgeDetailEntity

```go
apiEntitiesBasicBadgeDetail := client.ApiEntitiesBasicBadgeDetail(nil)
fmt.Println(apiEntitiesBasicBadgeDetail.GetName()) // "api_entities_basic_badge_detail"
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesBasicBadgeDetail(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesBasicBadgeDetailEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesBasicGroupDetailEntity

```go
apiEntitiesBasicGroupDetail := client.ApiEntitiesBasicGroupDetail(nil)
fmt.Println(apiEntitiesBasicGroupDetail.GetName()) // "api_entities_basic_group_detail"
```

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ApiEntitiesBasicGroupDetail(nil).Create(map[string]any{
    "project_id": /* string */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesBasicGroupDetailEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesBasicProjectDetailEntity

```go
apiEntitiesBasicProjectDetail := client.ApiEntitiesBasicProjectDetail(nil)
fmt.Println(apiEntitiesBasicProjectDetail.GetName()) // "api_entities_basic_project_detail"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_url` | `string` | No |  |
| `created_at` | `string` | No |  |
| `custom_attribute` | `map[string]any` | No |  |
| `default_branch` | `string` | No |  |
| `description` | `string` | No |  |
| `forks_count` | `int` | No |  |
| `http_url_to_repo` | `string` | No |  |
| `id` | `int` | No |  |
| `last_activity_at` | `string` | No |  |
| `license` | `map[string]any` | No |  |
| `license_url` | `string` | No |  |
| `name` | `string` | No |  |
| `name_with_namespace` | `string` | No |  |
| `namespace` | `map[string]any` | No |  |
| `path` | `string` | No |  |
| `path_with_namespace` | `string` | No |  |
| `readme_url` | `string` | No |  |
| `repository_storage` | `string` | No |  |
| `ssh_url_to_repo` | `string` | No |  |
| `star_count` | `int` | No |  |
| `tag_list` | `[]any` | No |  |
| `topic` | `[]any` | No |  |
| `visibility` | `string` | No |  |
| `web_url` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiEntitiesBasicProjectDetail(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ApiEntitiesBasicProjectDetail(nil).Create(map[string]any{
    "project_id": /* string */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesBasicProjectDetailEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesBasicRefEntity

```go
apiEntitiesBasicRef := client.ApiEntitiesBasicRef(nil)
fmt.Println(apiEntitiesBasicRef.GetName()) // "api_entities_basic_ref"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | No |  |
| `type` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiEntitiesBasicRef(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesBasicRefEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesBasicSuccessEntity

```go
apiEntitiesBasicSuccess := client.ApiEntitiesBasicSuccess(nil)
fmt.Println(apiEntitiesBasicSuccess.GetName()) // "api_entities_basic_success"
```

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ApiEntitiesBasicSuccess(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesBasicSuccessEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesBatchedBackgroundMigrationEntity

```go
apiEntitiesBatchedBackgroundMigration := client.ApiEntitiesBatchedBackgroundMigration(nil)
fmt.Println(apiEntitiesBatchedBackgroundMigration.GetName()) // "api_entities_batched_background_migration"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `column_name` | `string` | No |  |
| `created_at` | `string` | No |  |
| `id` | `string` | No |  |
| `job_class_name` | `string` | No |  |
| `progress` | `float64` | No |  |
| `status` | `string` | No |  |
| `table_name` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiEntitiesBatchedBackgroundMigration(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesBatchedBackgroundMigration(nil).Load(map[string]any{"id": "api_entities_batched_background_migration_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ApiEntitiesBatchedBackgroundMigration(nil).Update(map[string]any{
    "batched_background_migration_id": "batched_background_migration_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesBatchedBackgroundMigrationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesBranchEntity

```go
apiEntitiesBranch := client.ApiEntitiesBranch(nil)
fmt.Println(apiEntitiesBranch.GetName()) // "api_entities_branch"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `can_push` | `bool` | No |  |
| `commit` | `map[string]any` | No |  |
| `default` | `bool` | No |  |
| `developers_can_merge` | `bool` | No |  |
| `developers_can_push` | `bool` | No |  |
| `merged` | `bool` | No |  |
| `name` | `string` | No |  |
| `protected` | `bool` | No |  |
| `web_url` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiEntitiesBranch(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesBranch(nil).Load(map[string]any{"id": "api_entities_branch_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ApiEntitiesBranch(nil).Create(map[string]any{
    "project_id": /* string */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ApiEntitiesBranch(nil).Update(map[string]any{
    "branch_id": "branch_id",
    "project_id": "project_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesBranchEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesBulkImportEntity

```go
apiEntitiesBulkImport := client.ApiEntitiesBulkImport(nil)
fmt.Println(apiEntitiesBulkImport.GetName()) // "api_entities_bulk_import"
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
| `failure` | `[]any` | No |  |
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
| `stat` | `map[string]any` | No |  |
| `status` | `string` | No |  |
| `updated_at` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiEntitiesBulkImport(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesBulkImport(nil).Load(map[string]any{"id": "api_entities_bulk_import_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ApiEntitiesBulkImport(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesBulkImportEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesBulkImportsEntityFailureEntity

```go
apiEntitiesBulkImportsEntityFailure := client.ApiEntitiesBulkImportsEntityFailure(nil)
fmt.Println(apiEntitiesBulkImportsEntityFailure.GetName()) // "api_entities_bulk_imports_entity_failure"
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesBulkImportsEntityFailure(nil).Load(map[string]any{"bulk_import_id": "bulk_import_id", "entity_id": "entity_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesBulkImportsEntityFailureEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesBulkImportsExportStatusEntity

```go
apiEntitiesBulkImportsExportStatus := client.ApiEntitiesBulkImportsExportStatus(nil)
fmt.Println(apiEntitiesBulkImportsExportStatus.GetName()) // "api_entities_bulk_imports_export_status"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `batch` | `map[string]any` | No |  |
| `batched` | `bool` | No |  |
| `batches_count` | `int` | No |  |
| `error` | `string` | No |  |
| `relation` | `string` | No |  |
| `status` | `string` | No |  |
| `total_objects_count` | `int` | No |  |
| `updated_at` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiEntitiesBulkImportsExportStatus(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesBulkImportsExportStatusEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesChangelogEntity

```go
apiEntitiesChangelog := client.ApiEntitiesChangelog(nil)
fmt.Println(apiEntitiesChangelog.GetName()) // "api_entities_changelog"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `note` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesChangelog(nil).Load(map[string]any{"project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesChangelogEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesCiBridgeEntity

```go
apiEntitiesCiBridge := client.ApiEntitiesCiBridge(nil)
fmt.Println(apiEntitiesCiBridge.GetName()) // "api_entities_ci_bridge"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_failure` | `bool` | No |  |
| `commit` | `map[string]any` | No |  |
| `coverage` | `float64` | No |  |
| `created_at` | `string` | No |  |
| `downstream_pipeline` | `map[string]any` | No |  |
| `duration` | `float64` | No |  |
| `erased_at` | `string` | No |  |
| `failure_reason` | `string` | No |  |
| `finished_at` | `string` | No |  |
| `id` | `int` | No |  |
| `name` | `string` | No |  |
| `pipeline` | `map[string]any` | No |  |
| `project` | `map[string]any` | No |  |
| `queued_duration` | `float64` | No |  |
| `ref` | `string` | No |  |
| `stage` | `string` | No |  |
| `started_at` | `string` | No |  |
| `status` | `string` | No |  |
| `tag` | `bool` | No |  |
| `user` | `map[string]any` | No |  |
| `web_url` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiEntitiesCiBridge(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesCiBridgeEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesCiCatalogResourcesVersionEntity

```go
apiEntitiesCiCatalogResourcesVersion := client.ApiEntitiesCiCatalogResourcesVersion(nil)
fmt.Println(apiEntitiesCiCatalogResourcesVersion.GetName()) // "api_entities_ci_catalog_resources_version"
```

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ApiEntitiesCiCatalogResourcesVersion(nil).Create(map[string]any{
    "project_id": /* string */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesCiCatalogResourcesVersionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesCiJobEntity

```go
apiEntitiesCiJob := client.ApiEntitiesCiJob(nil)
fmt.Println(apiEntitiesCiJob.GetName()) // "api_entities_ci_job"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_failure` | `bool` | No |  |
| `archived` | `bool` | No |  |
| `artifact` | `[]any` | No |  |
| `artifacts_expire_at` | `string` | No |  |
| `artifacts_file` | `map[string]any` | No |  |
| `commit` | `map[string]any` | No |  |
| `coverage` | `float64` | No |  |
| `created_at` | `string` | No |  |
| `duration` | `float64` | No |  |
| `erased_at` | `string` | No |  |
| `failure_reason` | `string` | No |  |
| `file_format` | `string` | No |  |
| `file_type` | `string` | No |  |
| `filename` | `string` | No |  |
| `finished_at` | `string` | No |  |
| `id` | `int` | No |  |
| `name` | `string` | No |  |
| `pipeline` | `map[string]any` | No |  |
| `project` | `map[string]any` | No |  |
| `queued_duration` | `float64` | No |  |
| `ref` | `string` | No |  |
| `runner` | `map[string]any` | No |  |
| `runner_manager` | `map[string]any` | No |  |
| `size` | `int` | No |  |
| `stage` | `string` | No |  |
| `started_at` | `string` | No |  |
| `status` | `string` | No |  |
| `tag` | `bool` | No |  |
| `tag_list` | `[]any` | No |  |
| `user` | `map[string]any` | No |  |
| `web_url` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiEntitiesCiJob(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesCiJob(nil).Load(map[string]any{"id": "api_entities_ci_job_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ApiEntitiesCiJob(nil).Create(map[string]any{
    "job_id": /* string */,
    "project_id": /* string */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesCiJobEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesCiJobBasicEntity

```go
apiEntitiesCiJobBasic := client.ApiEntitiesCiJobBasic(nil)
fmt.Println(apiEntitiesCiJobBasic.GetName()) // "api_entities_ci_job_basic"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_failure` | `bool` | No |  |
| `commit` | `map[string]any` | No |  |
| `coverage` | `float64` | No |  |
| `created_at` | `string` | No |  |
| `duration` | `float64` | No |  |
| `erased_at` | `string` | No |  |
| `failure_reason` | `string` | No |  |
| `finished_at` | `string` | No |  |
| `id` | `int` | No |  |
| `name` | `string` | No |  |
| `pipeline` | `map[string]any` | No |  |
| `project` | `map[string]any` | No |  |
| `queued_duration` | `float64` | No |  |
| `ref` | `string` | No |  |
| `stage` | `string` | No |  |
| `started_at` | `string` | No |  |
| `status` | `string` | No |  |
| `tag` | `bool` | No |  |
| `user` | `map[string]any` | No |  |
| `web_url` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiEntitiesCiJobBasic(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ApiEntitiesCiJobBasic(nil).Create(map[string]any{
    "job_id": /* string */,
    "project_id": /* string */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesCiJobBasicEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesCiJobBasicWithProjectEntity

```go
apiEntitiesCiJobBasicWithProject := client.ApiEntitiesCiJobBasicWithProject(nil)
fmt.Println(apiEntitiesCiJobBasicWithProject.GetName()) // "api_entities_ci_job_basic_with_project"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_failure` | `bool` | No |  |
| `commit` | `map[string]any` | No |  |
| `coverage` | `float64` | No |  |
| `created_at` | `string` | No |  |
| `duration` | `float64` | No |  |
| `erased_at` | `string` | No |  |
| `failure_reason` | `string` | No |  |
| `finished_at` | `string` | No |  |
| `id` | `int` | No |  |
| `name` | `string` | No |  |
| `pipeline` | `map[string]any` | No |  |
| `project` | `map[string]any` | No |  |
| `queued_duration` | `float64` | No |  |
| `ref` | `string` | No |  |
| `stage` | `string` | No |  |
| `started_at` | `string` | No |  |
| `status` | `string` | No |  |
| `tag` | `bool` | No |  |
| `user` | `map[string]any` | No |  |
| `web_url` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesCiJobBasicWithProject(nil).Load(map[string]any{"runner_id": "runner_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesCiJobBasicWithProjectEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesCiLintResultEntity

```go
apiEntitiesCiLintResult := client.ApiEntitiesCiLintResult(nil)
fmt.Println(apiEntitiesCiLintResult.GetName()) // "api_entities_ci_lint_result"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `blob` | `string` | No |  |
| `context_project` | `string` | No |  |
| `context_sha` | `string` | No |  |
| `error` | `[]any` | No |  |
| `extra` | `map[string]any` | No |  |
| `include` | `[]any` | No |  |
| `job` | `[]any` | No |  |
| `location` | `string` | No |  |
| `merged_yaml` | `string` | No |  |
| `raw` | `string` | No |  |
| `type` | `string` | No |  |
| `valid` | `bool` | No |  |
| `warning` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiEntitiesCiLintResult(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ApiEntitiesCiLintResult(nil).Create(map[string]any{
    "project_id": /* string */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesCiLintResultEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesCiPipelineEntity

```go
apiEntitiesCiPipeline := client.ApiEntitiesCiPipeline(nil)
fmt.Println(apiEntitiesCiPipeline.GetName()) // "api_entities_ci_pipeline"
```

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ApiEntitiesCiPipeline(nil).Create(map[string]any{
    "project_id": /* string */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesCiPipelineEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesCiPipelineBasicEntity

```go
apiEntitiesCiPipelineBasic := client.ApiEntitiesCiPipelineBasic(nil)
fmt.Println(apiEntitiesCiPipelineBasic.GetName()) // "api_entities_ci_pipeline_basic"
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiEntitiesCiPipelineBasic(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesCiPipelineBasic(nil).Load(map[string]any{"merge_request_id": "merge_request_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesCiPipelineBasicEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesCiPipelineScheduleEntity

```go
apiEntitiesCiPipelineSchedule := client.ApiEntitiesCiPipelineSchedule(nil)
fmt.Println(apiEntitiesCiPipelineSchedule.GetName()) // "api_entities_ci_pipeline_schedule"
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
| `input` | `map[string]any` | No |  |
| `next_run_at` | `string` | No |  |
| `owner` | `map[string]any` | No |  |
| `ref` | `string` | No |  |
| `updated_at` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiEntitiesCiPipelineSchedule(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesCiPipelineScheduleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesCiPipelineScheduleDetailEntity

```go
apiEntitiesCiPipelineScheduleDetail := client.ApiEntitiesCiPipelineScheduleDetail(nil)
fmt.Println(apiEntitiesCiPipelineScheduleDetail.GetName()) // "api_entities_ci_pipeline_schedule_detail"
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
| `input` | `map[string]any` | No |  |
| `last_pipeline` | `map[string]any` | No |  |
| `next_run_at` | `string` | No |  |
| `owner` | `map[string]any` | No |  |
| `ref` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `variable` | `map[string]any` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesCiPipelineScheduleDetail(nil).Load(map[string]any{"pipeline_schedule_id": "pipeline_schedule_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ApiEntitiesCiPipelineScheduleDetail(nil).Create(map[string]any{
    "project_id": /* string */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ApiEntitiesCiPipelineScheduleDetail(nil).Update(map[string]any{
    "pipeline_schedule_id": "pipeline_schedule_id",
    "project_id": "project_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesCiPipelineScheduleDetailEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesCiResetTokenResultEntity

```go
apiEntitiesCiResetTokenResult := client.ApiEntitiesCiResetTokenResult(nil)
fmt.Println(apiEntitiesCiResetTokenResult.GetName()) // "api_entities_ci_reset_token_result"
```

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ApiEntitiesCiResetTokenResult(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesCiResetTokenResultEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesCiResourceGroupEntity

```go
apiEntitiesCiResourceGroup := client.ApiEntitiesCiResourceGroup(nil)
fmt.Println(apiEntitiesCiResourceGroup.GetName()) // "api_entities_ci_resource_group"
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiEntitiesCiResourceGroup(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesCiResourceGroup(nil).Load(map[string]any{"id": "api_entities_ci_resource_group_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ApiEntitiesCiResourceGroup(nil).Update(map[string]any{
    "id": "api_entities_ci_resource_group_id",
    "project_id": "project_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesCiResourceGroupEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesCiRunnerEntity

```go
apiEntitiesCiRunner := client.ApiEntitiesCiRunner(nil)
fmt.Println(apiEntitiesCiRunner.GetName()) // "api_entities_ci_runner"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | No |  |
| `created_at` | `string` | No |  |
| `created_by` | `map[string]any` | No |  |
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesCiRunner(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ApiEntitiesCiRunner(nil).Create(map[string]any{
    "project_id": /* string */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesCiRunnerEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesCiRunnerDetailEntity

```go
apiEntitiesCiRunnerDetail := client.ApiEntitiesCiRunnerDetail(nil)
fmt.Println(apiEntitiesCiRunnerDetail.GetName()) // "api_entities_ci_runner_detail"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access_level` | `string` | No |  |
| `active` | `bool` | No |  |
| `architecture` | `string` | No |  |
| `contacted_at` | `string` | No |  |
| `created_at` | `string` | No |  |
| `created_by` | `map[string]any` | No |  |
| `description` | `string` | No |  |
| `group` | `map[string]any` | No |  |
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
| `project` | `map[string]any` | No |  |
| `revision` | `string` | No |  |
| `run_untagged` | `string` | No |  |
| `runner_type` | `string` | No |  |
| `status` | `string` | No |  |
| `tag_list` | `string` | No |  |
| `version` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesCiRunnerDetail(nil).Load(map[string]any{"id": "api_entities_ci_runner_detail_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ApiEntitiesCiRunnerDetail(nil).Update(map[string]any{
    "id": "api_entities_ci_runner_detail_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesCiRunnerDetailEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesCiRunnerManagerEntity

```go
apiEntitiesCiRunnerManager := client.ApiEntitiesCiRunnerManager(nil)
fmt.Println(apiEntitiesCiRunnerManager.GetName()) // "api_entities_ci_runner_manager"
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesCiRunnerManager(nil).Load(map[string]any{"runner_id": "runner_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesCiRunnerManagerEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesCiRunnerRegistrationDetailEntity

```go
apiEntitiesCiRunnerRegistrationDetail := client.ApiEntitiesCiRunnerRegistrationDetail(nil)
fmt.Println(apiEntitiesCiRunnerRegistrationDetail.GetName()) // "api_entities_ci_runner_registration_detail"
```

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ApiEntitiesCiRunnerRegistrationDetail(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesCiRunnerRegistrationDetailEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesCiSecureFileEntity

```go
apiEntitiesCiSecureFile := client.ApiEntitiesCiSecureFile(nil)
fmt.Println(apiEntitiesCiSecureFile.GetName()) // "api_entities_ci_secure_file"
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
| `metadata` | `map[string]any` | No |  |
| `name` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesCiSecureFile(nil).Load(map[string]any{"id": "api_entities_ci_secure_file_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ApiEntitiesCiSecureFile(nil).Create(map[string]any{
    "project_id": /* string */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesCiSecureFileEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesCiVariableEntity

```go
apiEntitiesCiVariable := client.ApiEntitiesCiVariable(nil)
fmt.Println(apiEntitiesCiVariable.GetName()) // "api_entities_ci_variable"
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiEntitiesCiVariable(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesCiVariable(nil).Load(map[string]any{"id": "api_entities_ci_variable_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ApiEntitiesCiVariable(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ApiEntitiesCiVariable(nil).Update(map[string]any{
    "id": "api_entities_ci_variable_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesCiVariableEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesClusterEntity

```go
apiEntitiesCluster := client.ApiEntitiesCluster(nil)
fmt.Println(apiEntitiesCluster.GetName()) // "api_entities_cluster"
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
| `management_project` | `map[string]any` | No |  |
| `name` | `string` | No |  |
| `namespace_per_environment` | `string` | No |  |
| `platform_kubernete` | `map[string]any` | No |  |
| `platform_type` | `string` | No |  |
| `provider_gcp` | `map[string]any` | No |  |
| `provider_type` | `string` | No |  |
| `user` | `map[string]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiEntitiesCluster(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesCluster(nil).Load(map[string]any{"id": "api_entities_cluster_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ApiEntitiesCluster(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ApiEntitiesCluster(nil).Update(map[string]any{
    "id": "api_entities_cluster_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesClusterEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesClusterGroupEntity

```go
apiEntitiesClusterGroup := client.ApiEntitiesClusterGroup(nil)
fmt.Println(apiEntitiesClusterGroup.GetName()) // "api_entities_cluster_group"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cluster_type` | `string` | No |  |
| `created_at` | `string` | No |  |
| `domain` | `string` | No |  |
| `enabled` | `bool` | No |  |
| `environment_scope` | `string` | No |  |
| `group` | `map[string]any` | No |  |
| `id` | `string` | No |  |
| `managed` | `string` | No |  |
| `management_project` | `map[string]any` | No |  |
| `name` | `string` | No |  |
| `namespace_per_environment` | `string` | No |  |
| `platform_kubernete` | `map[string]any` | No |  |
| `platform_type` | `string` | No |  |
| `provider_gcp` | `map[string]any` | No |  |
| `provider_type` | `string` | No |  |
| `user` | `map[string]any` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesClusterGroup(nil).Load(map[string]any{"cluster_id": "cluster_id", "group_id": "group_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ApiEntitiesClusterGroup(nil).Create(map[string]any{
    "group_id": /* string */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ApiEntitiesClusterGroup(nil).Update(map[string]any{
    "cluster_id": "cluster_id",
    "group_id": "group_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesClusterGroupEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesClusterProjectEntity

```go
apiEntitiesClusterProject := client.ApiEntitiesClusterProject(nil)
fmt.Println(apiEntitiesClusterProject.GetName()) // "api_entities_cluster_project"
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
| `management_project` | `map[string]any` | No |  |
| `name` | `string` | No |  |
| `namespace_per_environment` | `string` | No |  |
| `platform_kubernete` | `map[string]any` | No |  |
| `platform_type` | `string` | No |  |
| `project` | `map[string]any` | No |  |
| `provider_gcp` | `map[string]any` | No |  |
| `provider_type` | `string` | No |  |
| `user` | `map[string]any` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesClusterProject(nil).Load(map[string]any{"cluster_id": "cluster_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ApiEntitiesClusterProject(nil).Create(map[string]any{
    "project_id": /* string */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ApiEntitiesClusterProject(nil).Update(map[string]any{
    "cluster_id": "cluster_id",
    "project_id": "project_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesClusterProjectEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesClustersAgentEntity

```go
apiEntitiesClustersAgent := client.ApiEntitiesClustersAgent(nil)
fmt.Println(apiEntitiesClustersAgent.GetName()) // "api_entities_clusters_agent"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `config_project` | `map[string]any` | No |  |
| `created_at` | `string` | No |  |
| `created_by_user_id` | `string` | No |  |
| `id` | `string` | No |  |
| `is_receptive` | `bool` | No |  |
| `name` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesClustersAgent(nil).Load(map[string]any{"project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ApiEntitiesClustersAgent(nil).Create(map[string]any{
    "project_id": /* string */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesClustersAgentEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesClustersAgentTokenEntity

```go
apiEntitiesClustersAgentToken := client.ApiEntitiesClustersAgentToken(nil)
fmt.Println(apiEntitiesClustersAgentToken.GetName()) // "api_entities_clusters_agent_token"
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesClustersAgentToken(nil).Load(map[string]any{"id": "api_entities_clusters_agent_token_id", "cluster_agent_id": "cluster_agent_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesClustersAgentTokenEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesClustersAgentTokenBasicEntity

```go
apiEntitiesClustersAgentTokenBasic := client.ApiEntitiesClustersAgentTokenBasic(nil)
fmt.Println(apiEntitiesClustersAgentTokenBasic.GetName()) // "api_entities_clusters_agent_token_basic"
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesClustersAgentTokenBasic(nil).Load(map[string]any{"cluster_agent_id": "cluster_agent_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesClustersAgentTokenBasicEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesClustersAgentTokenWithTokenEntity

```go
apiEntitiesClustersAgentTokenWithToken := client.ApiEntitiesClustersAgentTokenWithToken(nil)
fmt.Println(apiEntitiesClustersAgentTokenWithToken.GetName()) // "api_entities_clusters_agent_token_with_token"
```

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ApiEntitiesClustersAgentTokenWithToken(nil).Create(map[string]any{
    "cluster_agent_id": /* string */,
    "project_id": /* string */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesClustersAgentTokenWithTokenEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesCommitEntity

```go
apiEntitiesCommit := client.ApiEntitiesCommit(nil)
fmt.Println(apiEntitiesCommit.GetName()) // "api_entities_commit"
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
| `extended_trailer` | `map[string]any` | No |  |
| `id` | `string` | No |  |
| `message` | `string` | No |  |
| `parent_id` | `[]any` | No |  |
| `short_id` | `string` | No |  |
| `title` | `string` | No |  |
| `trailer` | `map[string]any` | No |  |
| `web_url` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiEntitiesCommit(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ApiEntitiesCommit(nil).Create(map[string]any{
    "project_id": /* string */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesCommitEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesCommitDetailEntity

```go
apiEntitiesCommitDetail := client.ApiEntitiesCommitDetail(nil)
fmt.Println(apiEntitiesCommitDetail.GetName()) // "api_entities_commit_detail"
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
| `extended_trailer` | `map[string]any` | No |  |
| `id` | `string` | No |  |
| `last_pipeline` | `map[string]any` | No |  |
| `message` | `string` | No |  |
| `parent_id` | `[]any` | No |  |
| `project_id` | `int` | No |  |
| `short_id` | `string` | No |  |
| `stat` | `map[string]any` | No |  |
| `status` | `string` | No |  |
| `title` | `string` | No |  |
| `trailer` | `map[string]any` | No |  |
| `web_url` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesCommitDetail(nil).Load(map[string]any{"project_id": "project_id", "sha": "sha"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ApiEntitiesCommitDetail(nil).Create(map[string]any{
    "project_id": /* string */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ApiEntitiesCommitDetail(nil).Update(map[string]any{
    "project_id": "project_id",
    "submodule": "submodule",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesCommitDetailEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesCommitNoteEntity

```go
apiEntitiesCommitNote := client.ApiEntitiesCommitNote(nil)
fmt.Println(apiEntitiesCommitNote.GetName()) // "api_entities_commit_note"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `map[string]any` | No |  |
| `created_at` | `string` | No |  |
| `line` | `int` | No |  |
| `line_type` | `string` | No |  |
| `note` | `string` | No |  |
| `path` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiEntitiesCommitNote(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ApiEntitiesCommitNote(nil).Create(map[string]any{
    "project_id": /* string */,
    "sha": /* any */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesCommitNoteEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesCommitSequenceEntity

```go
apiEntitiesCommitSequence := client.ApiEntitiesCommitSequence(nil)
fmt.Println(apiEntitiesCommitSequence.GetName()) // "api_entities_commit_sequence"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `int` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesCommitSequence(nil).Load(map[string]any{"project_id": "project_id", "sha": "sha"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesCommitSequenceEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesCommitSignatureEntity

```go
apiEntitiesCommitSignature := client.ApiEntitiesCommitSignature(nil)
fmt.Println(apiEntitiesCommitSignature.GetName()) // "api_entities_commit_signature"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `commit_source` | `string` | No |  |
| `signature` | `string` | No |  |
| `signature_type` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesCommitSignature(nil).Load(map[string]any{"project_id": "project_id", "sha": "sha"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesCommitSignatureEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesCommitStatusEntity

```go
apiEntitiesCommitStatus := client.ApiEntitiesCommitStatus(nil)
fmt.Println(apiEntitiesCommitStatus.GetName()) // "api_entities_commit_status"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_failure` | `bool` | No |  |
| `author` | `map[string]any` | No |  |
| `coverage` | `float64` | No |  |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiEntitiesCommitStatus(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ApiEntitiesCommitStatus(nil).Create(map[string]any{
    "id": /* string */,
    "project_id": /* string */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesCommitStatusEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesCompareEntity

```go
apiEntitiesCompare := client.ApiEntitiesCompare(nil)
fmt.Println(apiEntitiesCompare.GetName()) // "api_entities_compare"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `commit` | `map[string]any` | No |  |
| `compare_same_ref` | `bool` | No |  |
| `compare_timeout` | `bool` | No |  |
| `diff` | `[]any` | No |  |
| `web_url` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiEntitiesCompare(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesCompareEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesContainerRegistryRepositoryEntity

```go
apiEntitiesContainerRegistryRepository := client.ApiEntitiesContainerRegistryRepository(nil)
fmt.Println(apiEntitiesContainerRegistryRepository.GetName()) // "api_entities_container_registry_repository"
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
| `tag` | `map[string]any` | No |  |
| `tags_count` | `int` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiEntitiesContainerRegistryRepository(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesContainerRegistryRepository(nil).Load(map[string]any{"id": "api_entities_container_registry_repository_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesContainerRegistryRepositoryEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesContainerRegistryTagEntity

```go
apiEntitiesContainerRegistryTag := client.ApiEntitiesContainerRegistryTag(nil)
fmt.Println(apiEntitiesContainerRegistryTag.GetName()) // "api_entities_container_registry_tag"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `location` | `string` | No |  |
| `name` | `string` | No |  |
| `path` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiEntitiesContainerRegistryTag(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesContainerRegistryTagEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesContainerRegistryTagDetailEntity

```go
apiEntitiesContainerRegistryTagDetail := client.ApiEntitiesContainerRegistryTagDetail(nil)
fmt.Println(apiEntitiesContainerRegistryTagDetail.GetName()) // "api_entities_container_registry_tag_detail"
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesContainerRegistryTagDetail(nil).Load(map[string]any{"project_id": "project_id", "repository_id": "repository_id", "tag_name": "tag_name"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesContainerRegistryTagDetailEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesContributorEntity

```go
apiEntitiesContributor := client.ApiEntitiesContributor(nil)
fmt.Println(apiEntitiesContributor.GetName()) // "api_entities_contributor"
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesContributor(nil).Load(map[string]any{"project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesContributorEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesDeployKeyEntity

```go
apiEntitiesDeployKey := client.ApiEntitiesDeployKey(nil)
fmt.Println(apiEntitiesDeployKey.GetName()) // "api_entities_deploy_key"
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
| `projects_with_readonly_access` | `map[string]any` | No |  |
| `projects_with_write_access` | `map[string]any` | No |  |
| `title` | `string` | No |  |
| `usage_type` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiEntitiesDeployKey(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ApiEntitiesDeployKey(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ApiEntitiesDeployKey(nil).Update(map[string]any{
    "id": "id",
    "project_id": "project_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesDeployKeyEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesDeployKeysProjectEntity

```go
apiEntitiesDeployKeysProject := client.ApiEntitiesDeployKeysProject(nil)
fmt.Println(apiEntitiesDeployKeysProject.GetName()) // "api_entities_deploy_keys_project"
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
| `projects_with_readonly_access` | `map[string]any` | No |  |
| `projects_with_write_access` | `map[string]any` | No |  |
| `title` | `string` | No |  |
| `usage_type` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiEntitiesDeployKeysProject(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesDeployKeysProject(nil).Load(map[string]any{"key_id": "key_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ApiEntitiesDeployKeysProject(nil).Create(map[string]any{
    "project_id": /* string */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesDeployKeysProjectEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesDeployTokenEntity

```go
apiEntitiesDeployToken := client.ApiEntitiesDeployToken(nil)
fmt.Println(apiEntitiesDeployToken.GetName()) // "api_entities_deploy_token"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `expired` | `bool` | No |  |
| `expires_at` | `string` | No |  |
| `id` | `int` | No |  |
| `name` | `string` | No |  |
| `revoked` | `bool` | No |  |
| `scope` | `[]any` | No |  |
| `username` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiEntitiesDeployToken(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesDeployToken(nil).Load(map[string]any{"id": "api_entities_deploy_token_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesDeployTokenEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesDeployTokenWithTokenEntity

```go
apiEntitiesDeployTokenWithToken := client.ApiEntitiesDeployTokenWithToken(nil)
fmt.Println(apiEntitiesDeployTokenWithToken.GetName()) // "api_entities_deploy_token_with_token"
```

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ApiEntitiesDeployTokenWithToken(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesDeployTokenWithTokenEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesDeploymentEntity

```go
apiEntitiesDeployment := client.ApiEntitiesDeployment(nil)
fmt.Println(apiEntitiesDeployment.GetName()) // "api_entities_deployment"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No |  |
| `deployable` | `map[string]any` | No |  |
| `environment` | `map[string]any` | No |  |
| `id` | `int` | No |  |
| `iid` | `int` | No |  |
| `ref` | `string` | No |  |
| `sha` | `string` | No |  |
| `status` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `user` | `map[string]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiEntitiesDeployment(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesDeploymentEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesDeploymentExtendedEntity

```go
apiEntitiesDeploymentExtended := client.ApiEntitiesDeploymentExtended(nil)
fmt.Println(apiEntitiesDeploymentExtended.GetName()) // "api_entities_deployment_extended"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `approval` | `map[string]any` | No |  |
| `approval_summary` | `map[string]any` | No |  |
| `created_at` | `string` | No |  |
| `deployable` | `map[string]any` | No |  |
| `environment` | `map[string]any` | No |  |
| `id` | `int` | No |  |
| `iid` | `int` | No |  |
| `pending_approval_count` | `int` | No |  |
| `ref` | `string` | No |  |
| `sha` | `string` | No |  |
| `status` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `user` | `map[string]any` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesDeploymentExtended(nil).Load(map[string]any{"deployment_id": "deployment_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ApiEntitiesDeploymentExtended(nil).Create(map[string]any{
    "project_id": /* string */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ApiEntitiesDeploymentExtended(nil).Update(map[string]any{
    "deployment_id": "deployment_id",
    "project_id": "project_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesDeploymentExtendedEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesDeploymentsApprovalEntity

```go
apiEntitiesDeploymentsApproval := client.ApiEntitiesDeploymentsApproval(nil)
fmt.Println(apiEntitiesDeploymentsApproval.GetName()) // "api_entities_deployments_approval"
```

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ApiEntitiesDeploymentsApproval(nil).Create(map[string]any{
    "deployment_id": /* string */,
    "project_id": /* string */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesDeploymentsApprovalEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesDictionaryTableEntity

```go
apiEntitiesDictionaryTable := client.ApiEntitiesDictionaryTable(nil)
fmt.Println(apiEntitiesDictionaryTable.GetName()) // "api_entities_dictionary_table"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `feature_category` | `[]any` | No |  |
| `table_name` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesDictionaryTable(nil).Load(map[string]any{"id": "api_entities_dictionary_table_id", "databas_id": "databas_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesDictionaryTableEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesDiffEntity

```go
apiEntitiesDiff := client.ApiEntitiesDiff(nil)
fmt.Println(apiEntitiesDiff.GetName()) // "api_entities_diff"
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiEntitiesDiff(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesDiff(nil).Load(map[string]any{"merge_request_id": "merge_request_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesDiffEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesDiscoveredClusterEntity

```go
apiEntitiesDiscoveredCluster := client.ApiEntitiesDiscoveredCluster(nil)
fmt.Println(apiEntitiesDiscoveredCluster.GetName()) // "api_entities_discovered_cluster"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `group` | `string` | No |  |
| `project` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesDiscoveredCluster(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesDiscoveredClusterEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesDraftNoteEntity

```go
apiEntitiesDraftNote := client.ApiEntitiesDraftNote(nil)
fmt.Println(apiEntitiesDraftNote.GetName()) // "api_entities_draft_note"
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
| `position` | `map[string]any` | No |  |
| `resolve_discussion` | `bool` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiEntitiesDraftNote(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesDraftNote(nil).Load(map[string]any{"id": "api_entities_draft_note_id", "merge_request_id": "merge_request_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ApiEntitiesDraftNote(nil).Create(map[string]any{
    "merge_request_id": /* string */,
    "project_id": /* string */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ApiEntitiesDraftNote(nil).Update(map[string]any{
    "id": "api_entities_draft_note_id",
    "merge_request_id": "merge_request_id",
    "project_id": "project_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesDraftNoteEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesEnvironmentEntity

```go
apiEntitiesEnvironment := client.ApiEntitiesEnvironment(nil)
fmt.Println(apiEntitiesEnvironment.GetName()) // "api_entities_environment"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auto_stop_at` | `string` | No |  |
| `auto_stop_setting` | `string` | No |  |
| `cluster_agent` | `map[string]any` | No |  |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `external_url` | `string` | No |  |
| `flux_resource_path` | `string` | No |  |
| `id` | `int` | No |  |
| `kubernetes_namespace` | `string` | No |  |
| `last_deployment` | `map[string]any` | No |  |
| `name` | `string` | No |  |
| `project` | `map[string]any` | No |  |
| `slug` | `string` | No |  |
| `state` | `string` | No |  |
| `tier` | `string` | No |  |
| `updated_at` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiEntitiesEnvironment(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesEnvironment(nil).Load(map[string]any{"id": "api_entities_environment_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ApiEntitiesEnvironment(nil).Create(map[string]any{
    "project_id": /* string */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ApiEntitiesEnvironment(nil).Update(map[string]any{
    "id": "api_entities_environment_id",
    "project_id": "project_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesEnvironmentEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesErrorTrackingClientKeyEntity

```go
apiEntitiesErrorTrackingClientKey := client.ApiEntitiesErrorTrackingClientKey(nil)
fmt.Println(apiEntitiesErrorTrackingClientKey.GetName()) // "api_entities_error_tracking_client_key"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | No |  |
| `id` | `int` | No |  |
| `public_key` | `string` | No |  |
| `sentry_dsn` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiEntitiesErrorTrackingClientKey(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ApiEntitiesErrorTrackingClientKey(nil).Create(map[string]any{
    "project_id": /* string */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesErrorTrackingClientKeyEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesErrorTrackingProjectSettingEntity

```go
apiEntitiesErrorTrackingProjectSetting := client.ApiEntitiesErrorTrackingProjectSetting(nil)
fmt.Println(apiEntitiesErrorTrackingProjectSetting.GetName()) // "api_entities_error_tracking_project_setting"
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesErrorTrackingProjectSetting(nil).Load(map[string]any{"project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ApiEntitiesErrorTrackingProjectSetting(nil).Update(map[string]any{
    "project_id": "project_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesErrorTrackingProjectSettingEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesEventEntity

```go
apiEntitiesEvent := client.ApiEntitiesEvent(nil)
fmt.Println(apiEntitiesEvent.GetName()) // "api_entities_event"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action_name` | `string` | No |  |
| `author` | `map[string]any` | No |  |
| `author_id` | `int` | No |  |
| `author_username` | `string` | No |  |
| `created_at` | `string` | No |  |
| `id` | `int` | No |  |
| `imported` | `bool` | No |  |
| `imported_from` | `string` | No |  |
| `note` | `map[string]any` | No |  |
| `project_id` | `int` | No |  |
| `push_data` | `map[string]any` | No |  |
| `target_id` | `int` | No |  |
| `target_iid` | `int` | No |  |
| `target_title` | `string` | No |  |
| `target_type` | `string` | No |  |
| `wiki_page` | `map[string]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiEntitiesEvent(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesEvent(nil).Load(map[string]any{"project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesEventEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesFeatureEntity

```go
apiEntitiesFeature := client.ApiEntitiesFeature(nil)
fmt.Println(apiEntitiesFeature.GetName()) // "api_entities_feature"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `definition` | `map[string]any` | No |  |
| `gate` | `map[string]any` | No |  |
| `name` | `string` | No |  |
| `state` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiEntitiesFeature(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ApiEntitiesFeature(nil).Create(map[string]any{
    "id": /* string */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesFeatureEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesFeatureDefinitionEntity

```go
apiEntitiesFeatureDefinition := client.ApiEntitiesFeatureDefinition(nil)
fmt.Println(apiEntitiesFeatureDefinition.GetName()) // "api_entities_feature_definition"
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiEntitiesFeatureDefinition(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesFeatureDefinitionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesFeatureFlagEntity

```go
apiEntitiesFeatureFlag := client.ApiEntitiesFeatureFlag(nil)
fmt.Println(apiEntitiesFeatureFlag.GetName()) // "api_entities_feature_flag"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | No |  |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `name` | `string` | No |  |
| `scope` | `string` | No |  |
| `strategy` | `map[string]any` | No |  |
| `updated_at` | `string` | No |  |
| `version` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiEntitiesFeatureFlag(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesFeatureFlag(nil).Load(map[string]any{"id": "api_entities_feature_flag_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ApiEntitiesFeatureFlag(nil).Create(map[string]any{
    "project_id": /* string */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ApiEntitiesFeatureFlag(nil).Update(map[string]any{
    "id": "api_entities_feature_flag_id",
    "project_id": "project_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesFeatureFlagEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesFeatureFlagUserListEntity

```go
apiEntitiesFeatureFlagUserList := client.ApiEntitiesFeatureFlagUserList(nil)
fmt.Println(apiEntitiesFeatureFlagUserList.GetName()) // "api_entities_feature_flag_user_list"
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiEntitiesFeatureFlagUserList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesFeatureFlagUserList(nil).Load(map[string]any{"iid": "iid", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ApiEntitiesFeatureFlagUserList(nil).Create(map[string]any{
    "project_id": /* string */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ApiEntitiesFeatureFlagUserList(nil).Update(map[string]any{
    "iid": "iid",
    "project_id": "project_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesFeatureFlagUserListEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesFreezePeriodEntity

```go
apiEntitiesFreezePeriod := client.ApiEntitiesFreezePeriod(nil)
fmt.Println(apiEntitiesFreezePeriod.GetName()) // "api_entities_freeze_period"
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiEntitiesFreezePeriod(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesFreezePeriod(nil).Load(map[string]any{"id": "api_entities_freeze_period_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ApiEntitiesFreezePeriod(nil).Create(map[string]any{
    "project_id": /* string */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ApiEntitiesFreezePeriod(nil).Update(map[string]any{
    "id": "api_entities_freeze_period_id",
    "project_id": "project_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesFreezePeriodEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesGitlabSubscriptionEntity

```go
apiEntitiesGitlabSubscription := client.ApiEntitiesGitlabSubscription(nil)
fmt.Println(apiEntitiesGitlabSubscription.GetName()) // "api_entities_gitlab_subscription"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `billing` | `map[string]any` | No |  |
| `plan` | `map[string]any` | No |  |
| `usage` | `map[string]any` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesGitlabSubscription(nil).Load(map[string]any{"namespace_id": "namespace_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesGitlabSubscriptionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesGoModuleVersionEntity

```go
apiEntitiesGoModuleVersion := client.ApiEntitiesGoModuleVersion(nil)
fmt.Println(apiEntitiesGoModuleVersion.GetName()) // "api_entities_go_module_version"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `time` | `string` | No |  |
| `version` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesGoModuleVersion(nil).Load(map[string]any{"module_version": "module_version", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesGoModuleVersionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesGroupEntity

```go
apiEntitiesGroup := client.ApiEntitiesGroup(nil)
fmt.Println(apiEntitiesGroup.GetName()) // "api_entities_group"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `bool` | No |  |
| `auto_devops_enabled` | `string` | No |  |
| `auto_duo_code_review_enabled` | `string` | No |  |
| `avatar_url` | `string` | No |  |
| `created_at` | `string` | No |  |
| `custom_attribute` | `map[string]any` | No |  |
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
| `ldap_group_link` | `map[string]any` | No |  |
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
| `root_storage_statistic` | `map[string]any` | No |  |
| `saml_group_link` | `map[string]any` | No |  |
| `share_with_group_lock` | `string` | No |  |
| `shared_runners_setting` | `string` | No |  |
| `show_diff_preview_in_email` | `bool` | No |  |
| `statistic` | `map[string]any` | No |  |
| `subgroup_creation_level` | `string` | No |  |
| `two_factor_grace_period` | `string` | No |  |
| `visibility` | `string` | No |  |
| `web_based_commit_signing_enabled` | `string` | No |  |
| `web_url` | `string` | No |  |
| `wiki_access_level` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiEntitiesGroup(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesGroup(nil).Load(map[string]any{"project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ApiEntitiesGroup(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ApiEntitiesGroup(nil).Update(map[string]any{
    "id": "id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesGroupEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesGroupDetailEntity

```go
apiEntitiesGroupDetail := client.ApiEntitiesGroupDetail(nil)
fmt.Println(apiEntitiesGroupDetail.GetName()) // "api_entities_group_detail"
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
| `custom_attribute` | `map[string]any` | No |  |
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
| `ldap_group_link` | `map[string]any` | No |  |
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
| `project` | `map[string]any` | No |  |
| `project_creation_level` | `string` | No |  |
| `repository_storage` | `string` | No |  |
| `request_access_enabled` | `string` | No |  |
| `require_two_factor_authentication` | `string` | No |  |
| `root_storage_statistic` | `map[string]any` | No |  |
| `runners_token` | `string` | No |  |
| `saml_group_link` | `map[string]any` | No |  |
| `service_access_tokens_expiration_enforced` | `string` | No |  |
| `share_with_group_lock` | `string` | No |  |
| `shared_project` | `map[string]any` | No |  |
| `shared_runners_minutes_limit` | `string` | No |  |
| `shared_runners_setting` | `string` | No |  |
| `shared_with_group` | `string` | No |  |
| `show_diff_preview_in_email` | `bool` | No |  |
| `statistic` | `map[string]any` | No |  |
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesGroupDetail(nil).Load(map[string]any{"id": "api_entities_group_detail_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ApiEntitiesGroupDetail(nil).Create(map[string]any{
    "group_id": /* string */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesGroupDetailEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesHookEntity

```go
apiEntitiesHook := client.ApiEntitiesHook(nil)
fmt.Println(apiEntitiesHook.GetName()) // "api_entities_hook"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert_status` | `any` | No |  |
| `branch_filter_strategy` | `string` | No |  |
| `created_at` | `string` | No |  |
| `custom_header` | `[]any` | No |  |
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
| `url_variable` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiEntitiesHook(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesHook(nil).Load(map[string]any{"id": "api_entities_hook_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ApiEntitiesHook(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ApiEntitiesHook(nil).Update(map[string]any{
    "id": "api_entities_hook_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesHookEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesIntegrationEntity

```go
apiEntitiesIntegration := client.ApiEntitiesIntegration(nil)
fmt.Println(apiEntitiesIntegration.GetName()) // "api_entities_integration"
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
| `property` | `map[string]any` | No |  |
| `push_event` | `bool` | No |  |
| `slug` | `int` | No |  |
| `tag_push_event` | `bool` | No |  |
| `title` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `vulnerability_event` | `bool` | No |  |
| `wiki_page_event` | `bool` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesIntegration(nil).Load(map[string]any{"id": "api_entities_integration_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesIntegrationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesIntegrationBasicEntity

```go
apiEntitiesIntegrationBasic := client.ApiEntitiesIntegrationBasic(nil)
fmt.Println(apiEntitiesIntegrationBasic.GetName()) // "api_entities_integration_basic"
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiEntitiesIntegrationBasic(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ApiEntitiesIntegrationBasic(nil).Update(map[string]any{
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesIntegrationBasicEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesInvitationEntity

```go
apiEntitiesInvitation := client.ApiEntitiesInvitation(nil)
fmt.Println(apiEntitiesInvitation.GetName()) // "api_entities_invitation"
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiEntitiesInvitation(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ApiEntitiesInvitation(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ApiEntitiesInvitation(nil).Update(map[string]any{
    "id": "id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesInvitationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesIssuableTimeStatEntity

```go
apiEntitiesIssuableTimeStat := client.ApiEntitiesIssuableTimeStat(nil)
fmt.Println(apiEntitiesIssuableTimeStat.GetName()) // "api_entities_issuable_time_stat"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `human_time_estimate` | `string` | No |  |
| `human_total_time_spent` | `string` | No |  |
| `time_estimate` | `int` | No |  |
| `total_time_spent` | `int` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesIssuableTimeStat(nil).Load(map[string]any{"project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ApiEntitiesIssuableTimeStat(nil).Create(map[string]any{
    "project_id": /* string */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesIssuableTimeStatEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesIssueEntity

```go
apiEntitiesIssue := client.ApiEntitiesIssue(nil)
fmt.Println(apiEntitiesIssue.GetName()) // "api_entities_issue"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assignee` | `map[string]any` | No |  |
| `author` | `map[string]any` | No |  |
| `blocking_issues_count` | `string` | No |  |
| `closed_at` | `string` | No |  |
| `closed_by` | `map[string]any` | No |  |
| `confidential` | `bool` | No |  |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `discussion_locked` | `bool` | No |  |
| `downvote` | `string` | No |  |
| `due_date` | `string` | No |  |
| `epic` | `map[string]any` | No |  |
| `epic_iid` | `string` | No |  |
| `has_task` | `bool` | No |  |
| `health_status` | `string` | No |  |
| `id` | `int` | No |  |
| `iid` | `int` | No |  |
| `imported` | `string` | No |  |
| `imported_from` | `string` | No |  |
| `issue_type` | `string` | No |  |
| `iteration` | `map[string]any` | No |  |
| `label` | `[]any` | No |  |
| `link` | `map[string]any` | No |  |
| `merge_requests_count` | `string` | No |  |
| `milestone` | `map[string]any` | No |  |
| `moved_to_id` | `string` | No |  |
| `project_id` | `int` | No |  |
| `reference` | `map[string]any` | No |  |
| `service_desk_reply_to` | `string` | No |  |
| `severity` | `string` | No |  |
| `state` | `string` | No |  |
| `subscribed` | `string` | No |  |
| `task_completion_status` | `string` | No |  |
| `task_status` | `string` | No |  |
| `time_stat` | `map[string]any` | No |  |
| `title` | `string` | No |  |
| `type` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upvote` | `string` | No |  |
| `user_notes_count` | `string` | No |  |
| `web_url` | `string` | No |  |
| `weight` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiEntitiesIssue(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesIssue(nil).Load(map[string]any{"id": "api_entities_issue_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ApiEntitiesIssue(nil).Create(map[string]any{
    "project_id": /* string */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ApiEntitiesIssue(nil).Update(map[string]any{
    "id": "api_entities_issue_id",
    "project_id": "project_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesIssueEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesIssueLinkEntity

```go
apiEntitiesIssueLink := client.ApiEntitiesIssueLink(nil)
fmt.Println(apiEntitiesIssueLink.GetName()) // "api_entities_issue_link"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `link_type` | `string` | No |  |
| `source_issue` | `map[string]any` | No |  |
| `target_issue` | `map[string]any` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesIssueLink(nil).Load(map[string]any{"id": "api_entities_issue_link_id", "issue_id": "issue_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ApiEntitiesIssueLink(nil).Create(map[string]any{
    "issue_id": /* string */,
    "project_id": /* string */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesIssueLinkEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesLicenseEntity

```go
apiEntitiesLicense := client.ApiEntitiesLicense(nil)
fmt.Println(apiEntitiesLicense.GetName()) // "api_entities_license"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `condition` | `[]any` | No |  |
| `content` | `string` | No |  |
| `description` | `string` | No |  |
| `html_url` | `string` | No |  |
| `key` | `string` | No |  |
| `limitation` | `[]any` | No |  |
| `name` | `string` | No |  |
| `nickname` | `string` | No |  |
| `permission` | `[]any` | No |  |
| `popular` | `bool` | No |  |
| `source_url` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiEntitiesLicense(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesLicenseEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesMarkdownEntity

```go
apiEntitiesMarkdown := client.ApiEntitiesMarkdown(nil)
fmt.Println(apiEntitiesMarkdown.GetName()) // "api_entities_markdown"
```

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ApiEntitiesMarkdown(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesMarkdownEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesMarkdownUploadAdminEntity

```go
apiEntitiesMarkdownUploadAdmin := client.ApiEntitiesMarkdownUploadAdmin(nil)
fmt.Println(apiEntitiesMarkdownUploadAdmin.GetName()) // "api_entities_markdown_upload_admin"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No |  |
| `filename` | `string` | No |  |
| `id` | `string` | No |  |
| `size` | `string` | No |  |
| `uploaded_by` | `map[string]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiEntitiesMarkdownUploadAdmin(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesMarkdownUploadAdminEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesMemberEntity

```go
apiEntitiesMember := client.ApiEntitiesMember(nil)
fmt.Println(apiEntitiesMember.GetName()) // "api_entities_member"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access_level` | `string` | No |  |
| `avatar_path` | `string` | No |  |
| `avatar_url` | `string` | No |  |
| `created_at` | `string` | No |  |
| `created_by` | `map[string]any` | No |  |
| `custom_attribute` | `[]any` | No |  |
| `email` | `string` | No |  |
| `expires_at` | `string` | No |  |
| `group_saml_identity` | `map[string]any` | No |  |
| `group_scim_identity` | `map[string]any` | No |  |
| `id` | `int` | No |  |
| `is_using_seat` | `bool` | No |  |
| `key` | `string` | No |  |
| `locked` | `bool` | No |  |
| `member_role` | `map[string]any` | No |  |
| `membership_state` | `string` | No |  |
| `name` | `string` | No |  |
| `override` | `string` | No |  |
| `public_email` | `string` | No |  |
| `state` | `string` | No |  |
| `username` | `string` | No |  |
| `value` | `string` | No |  |
| `web_url` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiEntitiesMember(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesMember(nil).Load(map[string]any{"id": "api_entities_member_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ApiEntitiesMember(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ApiEntitiesMember(nil).Update(map[string]any{
    "id": "api_entities_member_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.ApiEntitiesMember(nil).Remove(map[string]any{"group_id": "group_id", "member_id": "member_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesMemberEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesMergeEntity

```go
apiEntitiesMerge := client.ApiEntitiesMerge(nil)
fmt.Println(apiEntitiesMerge.GetName()) // "api_entities_merge"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_collaboration` | `bool` | No |  |
| `allow_maintainer_to_push` | `bool` | No |  |
| `approvals_before_merge` | `string` | No |  |
| `assignee` | `map[string]any` | No |  |
| `author` | `map[string]any` | No |  |
| `blocking_discussions_resolved` | `string` | No |  |
| `changes_count` | `string` | No |  |
| `closed_at` | `string` | No |  |
| `closed_by` | `map[string]any` | No |  |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `description_html` | `string` | No |  |
| `detailed_merge_status` | `string` | No |  |
| `diff_ref` | `map[string]any` | No |  |
| `discussion_locked` | `string` | No |  |
| `diverged_commits_count` | `string` | No |  |
| `downvote` | `string` | No |  |
| `draft` | `string` | No |  |
| `first_contribution` | `string` | No |  |
| `first_deployed_to_production_at` | `string` | No |  |
| `force_remove_source_branch` | `string` | No |  |
| `has_conflict` | `bool` | No |  |
| `head_pipeline` | `map[string]any` | No |  |
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
| `merge_user` | `map[string]any` | No |  |
| `merge_when_pipeline_succeed` | `string` | No |  |
| `merged_at` | `string` | No |  |
| `merged_by` | `map[string]any` | No |  |
| `milestone` | `map[string]any` | No |  |
| `pipeline` | `map[string]any` | No |  |
| `prepared_at` | `string` | No |  |
| `project_id` | `int` | No |  |
| `rebase_in_progress` | `string` | No |  |
| `reference` | `string` | No |  |
| `reviewer` | `map[string]any` | No |  |
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
| `time_stat` | `map[string]any` | No |  |
| `title` | `string` | No |  |
| `title_html` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upvote` | `string` | No |  |
| `user` | `map[string]any` | No |  |
| `user_notes_count` | `string` | No |  |
| `web_url` | `string` | No |  |
| `work_in_progress` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesMerge(nil).Load(map[string]any{"merge_request_iid": "merge_request_iid", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ApiEntitiesMerge(nil).Create(map[string]any{
    "project_id": /* string */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ApiEntitiesMerge(nil).Update(map[string]any{
    "project_id": "project_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesMergeEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesMergeRequestApprovalEntity

```go
apiEntitiesMergeRequestApproval := client.ApiEntitiesMergeRequestApproval(nil)
fmt.Println(apiEntitiesMergeRequestApproval.GetName()) // "api_entities_merge_request_approval"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `approved` | `bool` | No |  |
| `approved_by` | `map[string]any` | No |  |
| `user_can_approve` | `bool` | No |  |
| `user_has_approved` | `bool` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesMergeRequestApproval(nil).Load(map[string]any{"merge_request_id": "merge_request_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ApiEntitiesMergeRequestApproval(nil).Create(map[string]any{
    "merge_request_id": /* string */,
    "project_id": /* string */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesMergeRequestApprovalEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesMergeRequestBasicEntity

```go
apiEntitiesMergeRequestBasic := client.ApiEntitiesMergeRequestBasic(nil)
fmt.Println(apiEntitiesMergeRequestBasic.GetName()) // "api_entities_merge_request_basic"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_collaboration` | `bool` | No |  |
| `allow_maintainer_to_push` | `bool` | No |  |
| `approvals_before_merge` | `string` | No |  |
| `assignee` | `map[string]any` | No |  |
| `author` | `map[string]any` | No |  |
| `blocking_discussions_resolved` | `string` | No |  |
| `closed_at` | `string` | No |  |
| `closed_by` | `map[string]any` | No |  |
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
| `merge_user` | `map[string]any` | No |  |
| `merge_when_pipeline_succeed` | `string` | No |  |
| `merged_at` | `string` | No |  |
| `merged_by` | `map[string]any` | No |  |
| `milestone` | `map[string]any` | No |  |
| `prepared_at` | `string` | No |  |
| `project_id` | `int` | No |  |
| `reference` | `string` | No |  |
| `reviewer` | `map[string]any` | No |  |
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
| `time_stat` | `map[string]any` | No |  |
| `title` | `string` | No |  |
| `title_html` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upvote` | `string` | No |  |
| `user_notes_count` | `string` | No |  |
| `web_url` | `string` | No |  |
| `work_in_progress` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiEntitiesMergeRequestBasic(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesMergeRequestBasic(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesMergeRequestBasicEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesMergeRequestChangeEntity

```go
apiEntitiesMergeRequestChange := client.ApiEntitiesMergeRequestChange(nil)
fmt.Println(apiEntitiesMergeRequestChange.GetName()) // "api_entities_merge_request_change"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_collaboration` | `bool` | No |  |
| `allow_maintainer_to_push` | `bool` | No |  |
| `approvals_before_merge` | `string` | No |  |
| `assignee` | `map[string]any` | No |  |
| `author` | `map[string]any` | No |  |
| `blocking_discussions_resolved` | `string` | No |  |
| `change` | `map[string]any` | No |  |
| `changes_count` | `string` | No |  |
| `closed_at` | `string` | No |  |
| `closed_by` | `map[string]any` | No |  |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `description_html` | `string` | No |  |
| `detailed_merge_status` | `string` | No |  |
| `diff_ref` | `map[string]any` | No |  |
| `discussion_locked` | `string` | No |  |
| `diverged_commits_count` | `string` | No |  |
| `downvote` | `string` | No |  |
| `draft` | `string` | No |  |
| `first_contribution` | `string` | No |  |
| `first_deployed_to_production_at` | `string` | No |  |
| `force_remove_source_branch` | `string` | No |  |
| `has_conflict` | `bool` | No |  |
| `head_pipeline` | `map[string]any` | No |  |
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
| `merge_user` | `map[string]any` | No |  |
| `merge_when_pipeline_succeed` | `string` | No |  |
| `merged_at` | `string` | No |  |
| `merged_by` | `map[string]any` | No |  |
| `milestone` | `map[string]any` | No |  |
| `overflow` | `string` | No |  |
| `pipeline` | `map[string]any` | No |  |
| `prepared_at` | `string` | No |  |
| `project_id` | `int` | No |  |
| `rebase_in_progress` | `string` | No |  |
| `reference` | `string` | No |  |
| `reviewer` | `map[string]any` | No |  |
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
| `time_stat` | `map[string]any` | No |  |
| `title` | `string` | No |  |
| `title_html` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upvote` | `string` | No |  |
| `user` | `map[string]any` | No |  |
| `user_notes_count` | `string` | No |  |
| `web_url` | `string` | No |  |
| `work_in_progress` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesMergeRequestChange(nil).Load(map[string]any{"merge_request_id": "merge_request_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesMergeRequestChangeEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesMergeRequestDiffEntity

```go
apiEntitiesMergeRequestDiff := client.ApiEntitiesMergeRequestDiff(nil)
fmt.Println(apiEntitiesMergeRequestDiff.GetName()) // "api_entities_merge_request_diff"
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiEntitiesMergeRequestDiff(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesMergeRequestDiffEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesMergeRequestDiffFullEntity

```go
apiEntitiesMergeRequestDiffFull := client.ApiEntitiesMergeRequestDiffFull(nil)
fmt.Println(apiEntitiesMergeRequestDiffFull.GetName()) // "api_entities_merge_request_diff_full"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `base_commit_sha` | `string` | No |  |
| `commit` | `map[string]any` | No |  |
| `created_at` | `string` | No |  |
| `diff` | `map[string]any` | No |  |
| `head_commit_sha` | `string` | No |  |
| `id` | `string` | No |  |
| `merge_request_id` | `string` | No |  |
| `patch_id_sha` | `string` | No |  |
| `real_size` | `string` | No |  |
| `start_commit_sha` | `string` | No |  |
| `state` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesMergeRequestDiffFull(nil).Load(map[string]any{"merge_request_id": "merge_request_id", "project_id": "project_id", "version_id": "version_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesMergeRequestDiffFullEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesMergeRequestReviewerEntity

```go
apiEntitiesMergeRequestReviewer := client.ApiEntitiesMergeRequestReviewer(nil)
fmt.Println(apiEntitiesMergeRequestReviewer.GetName()) // "api_entities_merge_request_reviewer"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No |  |
| `state` | `string` | No |  |
| `user` | `map[string]any` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesMergeRequestReviewer(nil).Load(map[string]any{"merge_request_id": "merge_request_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesMergeRequestReviewerEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesMetricImageEntity

```go
apiEntitiesMetricImage := client.ApiEntitiesMetricImage(nil)
fmt.Println(apiEntitiesMetricImage.GetName()) // "api_entities_metric_image"
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiEntitiesMetricImage(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ApiEntitiesMetricImage(nil).Create(map[string]any{
    "alert_management_alert_id": /* string */,
    "project_id": /* string */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ApiEntitiesMetricImage(nil).Update(map[string]any{
    "alert_management_alert_id": "alert_management_alert_id",
    "id": "id",
    "project_id": "project_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesMetricImageEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesMrNoteEntity

```go
apiEntitiesMrNote := client.ApiEntitiesMrNote(nil)
fmt.Println(apiEntitiesMrNote.GetName()) // "api_entities_mr_note"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `map[string]any` | No |  |
| `note` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesMrNote(nil).Load(map[string]any{"merge_request_id": "merge_request_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesMrNoteEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesNamespaceEntity

```go
apiEntitiesNamespace := client.ApiEntitiesNamespace(nil)
fmt.Println(apiEntitiesNamespace.GetName()) // "api_entities_namespace"
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiEntitiesNamespace(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesNamespace(nil).Load(map[string]any{"id": "api_entities_namespace_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ApiEntitiesNamespace(nil).Update(map[string]any{
    "id": "api_entities_namespace_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesNamespaceEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesNamespaceExistenceEntity

```go
apiEntitiesNamespaceExistence := client.ApiEntitiesNamespaceExistence(nil)
fmt.Println(apiEntitiesNamespaceExistence.GetName()) // "api_entities_namespace_existence"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `exist` | `bool` | No |  |
| `suggest` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiEntitiesNamespaceExistence(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesNamespaceExistenceEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesNamespacesStorageLimitExclusionEntity

```go
apiEntitiesNamespacesStorageLimitExclusion := client.ApiEntitiesNamespacesStorageLimitExclusion(nil)
fmt.Println(apiEntitiesNamespacesStorageLimitExclusion.GetName()) // "api_entities_namespaces_storage_limit_exclusion"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `int` | No |  |
| `namespace_id` | `int` | No |  |
| `namespace_name` | `string` | No |  |
| `reason` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesNamespacesStorageLimitExclusion(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ApiEntitiesNamespacesStorageLimitExclusion(nil).Create(map[string]any{
    "namespace_id": /* string */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesNamespacesStorageLimitExclusionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesNpmPackageEntity

```go
apiEntitiesNpmPackage := client.ApiEntitiesNpmPackage(nil)
fmt.Println(apiEntitiesNpmPackage.GetName()) // "api_entities_npm_package"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dist_tag` | `map[string]any` | No |  |
| `name` | `string` | No |  |
| `version` | `map[string]any` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesNpmPackage(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesNpmPackageEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesNpmPackageTagEntity

```go
apiEntitiesNpmPackageTag := client.ApiEntitiesNpmPackageTag(nil)
fmt.Println(apiEntitiesNpmPackageTag.GetName()) // "api_entities_npm_package_tag"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dist_tag` | `map[string]any` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesNpmPackageTag(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesNpmPackageTagEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesNugetPackagesVersionEntity

```go
apiEntitiesNugetPackagesVersion := client.ApiEntitiesNugetPackagesVersion(nil)
fmt.Println(apiEntitiesNugetPackagesVersion.GetName()) // "api_entities_nuget_packages_version"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `version` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiEntitiesNugetPackagesVersion(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesNugetPackagesVersionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesNugetSearchResultEntity

```go
apiEntitiesNugetSearchResult := client.ApiEntitiesNugetSearchResult(nil)
fmt.Println(apiEntitiesNugetSearchResult.GetName()) // "api_entities_nuget_search_result"
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiEntitiesNugetSearchResult(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesNugetSearchResultEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesNugetServiceIndexEntity

```go
apiEntitiesNugetServiceIndex := client.ApiEntitiesNugetServiceIndex(nil)
fmt.Println(apiEntitiesNugetServiceIndex.GetName()) // "api_entities_nuget_service_index"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `resource` | `[]any` | No |  |
| `version` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiEntitiesNugetServiceIndex(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesNugetServiceIndexEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesOrganizationsOrganizationEntity

```go
apiEntitiesOrganizationsOrganization := client.ApiEntitiesOrganizationsOrganization(nil)
fmt.Println(apiEntitiesOrganizationsOrganization.GetName()) // "api_entities_organizations_organization"
```

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ApiEntitiesOrganizationsOrganization(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesOrganizationsOrganizationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesPackageEntity

```go
apiEntitiesPackage := client.ApiEntitiesPackage(nil)
fmt.Println(apiEntitiesPackage.GetName()) // "api_entities_package"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `conan_package_name` | `string` | No |  |
| `created_at` | `string` | No |  |
| `id` | `int` | No |  |
| `last_downloaded_at` | `string` | No |  |
| `link` | `map[string]any` | No |  |
| `name` | `string` | No |  |
| `package_type` | `string` | No |  |
| `pipeline` | `map[string]any` | No |  |
| `project_id` | `int` | No |  |
| `project_path` | `string` | No |  |
| `status` | `string` | No |  |
| `tag` | `string` | No |  |
| `version` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiEntitiesPackage(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesPackage(nil).Load(map[string]any{"id": "api_entities_package_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesPackageEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesPackageFileEntity

```go
apiEntitiesPackageFile := client.ApiEntitiesPackageFile(nil)
fmt.Println(apiEntitiesPackageFile.GetName()) // "api_entities_package_file"
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
| `pipeline` | `map[string]any` | No |  |
| `size` | `int` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiEntitiesPackageFile(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesPackageFileEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesPackagePipelineEntity

```go
apiEntitiesPackagePipeline := client.ApiEntitiesPackagePipeline(nil)
fmt.Println(apiEntitiesPackagePipeline.GetName()) // "api_entities_package_pipeline"
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
| `user` | `map[string]any` | No |  |
| `web_url` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesPackagePipeline(nil).Load(map[string]any{"package_id": "package_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesPackagePipelineEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesPackagesConanFilesListEntity

```go
apiEntitiesPackagesConanFilesList := client.ApiEntitiesPackagesConanFilesList(nil)
fmt.Println(apiEntitiesPackagesConanFilesList.GetName()) // "api_entities_packages_conan_files_list"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `file` | `map[string]any` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesPackagesConanFilesList(nil).Load(map[string]any{"conan_id": "conan_id", "package_channel": "package_channel", "package_username": "package_username", "package_version": "package_version", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesPackagesConanFilesListEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesPackagesConanPackageManifestEntity

```go
apiEntitiesPackagesConanPackageManifest := client.ApiEntitiesPackagesConanPackageManifest(nil)
fmt.Println(apiEntitiesPackagesConanPackageManifest.GetName()) // "api_entities_packages_conan_package_manifest"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `package_url` | `map[string]any` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesPackagesConanPackageManifest(nil).Load(map[string]any{"conan_id": "conan_id", "conan_package_reference": "conan_package_reference", "package_channel": "package_channel", "package_username": "package_username", "package_version": "package_version"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesPackagesConanPackageManifestEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesPackagesConanPackageRevisionEntity

```go
apiEntitiesPackagesConanPackageRevision := client.ApiEntitiesPackagesConanPackageRevision(nil)
fmt.Println(apiEntitiesPackagesConanPackageRevision.GetName()) // "api_entities_packages_conan_package_revision"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `revision` | `string` | No |  |
| `time` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiEntitiesPackagesConanPackageRevision(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesPackagesConanPackageRevisionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesPackagesConanPackageSnapshotEntity

```go
apiEntitiesPackagesConanPackageSnapshot := client.ApiEntitiesPackagesConanPackageSnapshot(nil)
fmt.Println(apiEntitiesPackagesConanPackageSnapshot.GetName()) // "api_entities_packages_conan_package_snapshot"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `package_snapshot` | `map[string]any` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesPackagesConanPackageSnapshot(nil).Load(map[string]any{"conan_id": "conan_id", "conan_package_reference": "conan_package_reference", "package_channel": "package_channel", "package_username": "package_username", "package_version": "package_version"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesPackagesConanPackageSnapshotEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesPackagesConanRecipeManifestEntity

```go
apiEntitiesPackagesConanRecipeManifest := client.ApiEntitiesPackagesConanRecipeManifest(nil)
fmt.Println(apiEntitiesPackagesConanRecipeManifest.GetName()) // "api_entities_packages_conan_recipe_manifest"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `recipe_url` | `map[string]any` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesPackagesConanRecipeManifest(nil).Load(map[string]any{"conan_id": "conan_id", "package_channel": "package_channel", "package_username": "package_username", "package_version": "package_version"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesPackagesConanRecipeManifestEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesPackagesConanRecipeRevisionEntity

```go
apiEntitiesPackagesConanRecipeRevision := client.ApiEntitiesPackagesConanRecipeRevision(nil)
fmt.Println(apiEntitiesPackagesConanRecipeRevision.GetName()) // "api_entities_packages_conan_recipe_revision"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `revision` | `string` | No |  |
| `time` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiEntitiesPackagesConanRecipeRevision(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesPackagesConanRecipeRevisionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesPackagesConanRecipeSnapshotEntity

```go
apiEntitiesPackagesConanRecipeSnapshot := client.ApiEntitiesPackagesConanRecipeSnapshot(nil)
fmt.Println(apiEntitiesPackagesConanRecipeSnapshot.GetName()) // "api_entities_packages_conan_recipe_snapshot"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `recipe_snapshot` | `map[string]any` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesPackagesConanRecipeSnapshot(nil).Load(map[string]any{"id": "api_entities_packages_conan_recipe_snapshot_id", "package_channel": "package_channel", "package_name": "package_name", "package_username": "package_username", "package_version": "package_version"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesPackagesConanRecipeSnapshotEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesPackagesConanRevisionEntity

```go
apiEntitiesPackagesConanRevision := client.ApiEntitiesPackagesConanRevision(nil)
fmt.Println(apiEntitiesPackagesConanRevision.GetName()) // "api_entities_packages_conan_revision"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `revision` | `string` | No |  |
| `time` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesPackagesConanRevision(nil).Load(map[string]any{"conan_id": "conan_id", "package_channel": "package_channel", "package_username": "package_username", "package_version": "package_version", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesPackagesConanRevisionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesPackagesConanUploadUrlEntity

```go
apiEntitiesPackagesConanUploadUrl := client.ApiEntitiesPackagesConanUploadUrl(nil)
fmt.Println(apiEntitiesPackagesConanUploadUrl.GetName()) // "api_entities_packages_conan_upload_url"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `upload_url` | `map[string]any` | No |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ApiEntitiesPackagesConanUploadUrl(nil).Create(map[string]any{
    "conan_id": /* string */,
    "package_channel": /* any */,
    "package_username": /* any */,
    "package_version": /* any */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesPackagesConanUploadUrlEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesPackagesDebianDistributionEntity

```go
apiEntitiesPackagesDebianDistribution := client.ApiEntitiesPackagesDebianDistribution(nil)
fmt.Println(apiEntitiesPackagesDebianDistribution.GetName()) // "api_entities_packages_debian_distribution"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `architecture` | `[]any` | No |  |
| `codename` | `string` | No |  |
| `component` | `[]any` | No |  |
| `description` | `string` | No |  |
| `id` | `int` | No |  |
| `label` | `string` | No |  |
| `origin` | `string` | No |  |
| `suite` | `string` | No |  |
| `valid_time_duration_second` | `int` | No |  |
| `version` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiEntitiesPackagesDebianDistribution(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesPackagesDebianDistribution(nil).Load(map[string]any{"id": "api_entities_packages_debian_distribution_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ApiEntitiesPackagesDebianDistribution(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ApiEntitiesPackagesDebianDistribution(nil).Update(map[string]any{
    "id": "api_entities_packages_debian_distribution_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesPackagesDebianDistributionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesPagesDomainEntity

```go
apiEntitiesPagesDomain := client.ApiEntitiesPagesDomain(nil)
fmt.Println(apiEntitiesPagesDomain.GetName()) // "api_entities_pages_domain"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auto_ssl_enabled` | `string` | No |  |
| `certificate` | `map[string]any` | No |  |
| `domain` | `string` | No |  |
| `enabled_until` | `string` | No |  |
| `url` | `string` | No |  |
| `verification_code` | `string` | No |  |
| `verified` | `bool` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiEntitiesPagesDomain(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesPagesDomain(nil).Load(map[string]any{"id": "api_entities_pages_domain_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ApiEntitiesPagesDomain(nil).Create(map[string]any{
    "project_id": /* string */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ApiEntitiesPagesDomain(nil).Update(map[string]any{
    "domain_id": "domain_id",
    "project_id": "project_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesPagesDomainEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesPagesDomainBasicEntity

```go
apiEntitiesPagesDomainBasic := client.ApiEntitiesPagesDomainBasic(nil)
fmt.Println(apiEntitiesPagesDomainBasic.GetName()) // "api_entities_pages_domain_basic"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auto_ssl_enabled` | `string` | No |  |
| `certificate_expiration` | `map[string]any` | No |  |
| `domain` | `string` | No |  |
| `enabled_until` | `string` | No |  |
| `project_id` | `string` | No |  |
| `url` | `string` | No |  |
| `verification_code` | `string` | No |  |
| `verified` | `bool` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesPagesDomainBasic(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesPagesDomainBasicEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesPersonalAccessTokenEntity

```go
apiEntitiesPersonalAccessToken := client.ApiEntitiesPersonalAccessToken(nil)
fmt.Println(apiEntitiesPersonalAccessToken.GetName()) // "api_entities_personal_access_token"
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
| `scope` | `[]any` | No |  |
| `user_id` | `int` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiEntitiesPersonalAccessToken(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesPersonalAccessTokenEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesPersonalAccessTokenWithLastUsedIpEntity

```go
apiEntitiesPersonalAccessTokenWithLastUsedIp := client.ApiEntitiesPersonalAccessTokenWithLastUsedIp(nil)
fmt.Println(apiEntitiesPersonalAccessTokenWithLastUsedIp.GetName()) // "api_entities_personal_access_token_with_last_used_ip"
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
| `last_used_ip` | `[]any` | No |  |
| `name` | `string` | No |  |
| `revoked` | `bool` | No |  |
| `scope` | `[]any` | No |  |
| `user_id` | `int` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiEntitiesPersonalAccessTokenWithLastUsedIp(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesPersonalAccessTokenWithLastUsedIp(nil).Load(map[string]any{"id": "api_entities_personal_access_token_with_last_used_ip_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesPersonalAccessTokenWithLastUsedIpEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesPersonalAccessTokenWithTokenEntity

```go
apiEntitiesPersonalAccessTokenWithToken := client.ApiEntitiesPersonalAccessTokenWithToken(nil)
fmt.Println(apiEntitiesPersonalAccessTokenWithToken.GetName()) // "api_entities_personal_access_token_with_token"
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
| `scope` | `[]any` | No |  |
| `token` | `string` | No |  |
| `user_id` | `int` | No |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ApiEntitiesPersonalAccessTokenWithToken(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesPersonalAccessTokenWithTokenEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesPersonalSnippetEntity

```go
apiEntitiesPersonalSnippet := client.ApiEntitiesPersonalSnippet(nil)
fmt.Println(apiEntitiesPersonalSnippet.GetName()) // "api_entities_personal_snippet"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `map[string]any` | No |  |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `file` | `[]any` | No |  |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiEntitiesPersonalSnippet(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesPersonalSnippet(nil).Load(map[string]any{"id": "api_entities_personal_snippet_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ApiEntitiesPersonalSnippet(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ApiEntitiesPersonalSnippet(nil).Update(map[string]any{
    "id": "api_entities_personal_snippet_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesPersonalSnippetEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesPlanLimitEntity

```go
apiEntitiesPlanLimit := client.ApiEntitiesPlanLimit(nil)
fmt.Println(apiEntitiesPlanLimit.GetName()) // "api_entities_plan_limit"
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
| `limits_history` | `map[string]any` | No |  |
| `maven_max_file_size` | `int` | No |  |
| `notification_limit` | `int` | No |  |
| `npm_max_file_size` | `int` | No |  |
| `nuget_max_file_size` | `int` | No |  |
| `pipeline_hierarchy_size` | `int` | No |  |
| `pypi_max_file_size` | `int` | No |  |
| `storage_size_limit` | `int` | No |  |
| `terraform_module_max_file_size` | `int` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesPlanLimit(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ApiEntitiesPlanLimit(nil).Update(map[string]any{
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesPlanLimitEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesProjectEntity

```go
apiEntitiesProject := client.ApiEntitiesProject(nil)
fmt.Println(apiEntitiesProject.GetName()) // "api_entities_project"
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
| `ci_id_token_sub_claim_component` | `[]any` | No |  |
| `ci_job_token_scope_enabled` | `bool` | No |  |
| `ci_pipeline_variables_minimum_override_role` | `string` | No |  |
| `ci_push_repository_for_job_token_allowed` | `bool` | No |  |
| `ci_restrict_pipeline_cancellation_role` | `string` | No |  |
| `ci_separated_cache` | `bool` | No |  |
| `compliance_framework` | `string` | No |  |
| `container_expiration_policy` | `map[string]any` | No |  |
| `container_registry_access_level` | `string` | No |  |
| `container_registry_enabled` | `bool` | No |  |
| `container_registry_image_prefix` | `string` | No |  |
| `created_at` | `string` | No |  |
| `creator_id` | `int` | No |  |
| `custom_attribute` | `map[string]any` | No |  |
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
| `forked_from_project` | `map[string]any` | No |  |
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
| `license` | `map[string]any` | No |  |
| `license_url` | `string` | No |  |
| `link` | `map[string]any` | No |  |
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
| `namespace` | `map[string]any` | No |  |
| `only_allow_merge_if_all_discussions_are_resolved` | `bool` | No |  |
| `only_allow_merge_if_all_status_checks_passed` | `string` | No |  |
| `only_allow_merge_if_pipeline_succeed` | `bool` | No |  |
| `only_mirror_protected_branch` | `string` | No |  |
| `open_issues_count` | `int` | No |  |
| `owner` | `map[string]any` | No |  |
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
| `shared_with_group` | `[]any` | No |  |
| `show_diff_preview_in_email` | `bool` | No |  |
| `snippets_access_level` | `string` | No |  |
| `snippets_enabled` | `bool` | No |  |
| `spp_repository_pipeline_access` | `bool` | No |  |
| `squash_commit_template` | `string` | No |  |
| `squash_option` | `string` | No |  |
| `ssh_url_to_repo` | `string` | No |  |
| `star_count` | `int` | No |  |
| `statistic` | `map[string]any` | No |  |
| `suggestion_commit_message` | `string` | No |  |
| `tag_list` | `[]any` | No |  |
| `topic` | `[]any` | No |  |
| `updated_at` | `string` | No |  |
| `visibility` | `string` | No |  |
| `warn_about_potentially_unwanted_character` | `bool` | No |  |
| `web_based_commit_signing_enabled` | `string` | No |  |
| `web_url` | `string` | No |  |
| `wiki_access_level` | `string` | No |  |
| `wiki_enabled` | `bool` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiEntitiesProject(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ApiEntitiesProject(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ApiEntitiesProject(nil).Update(map[string]any{
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesProjectEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesProjectDailyStatisticEntity

```go
apiEntitiesProjectDailyStatistic := client.ApiEntitiesProjectDailyStatistic(nil)
fmt.Println(apiEntitiesProjectDailyStatistic.GetName()) // "api_entities_project_daily_statistic"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fetch` | `map[string]any` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesProjectDailyStatistic(nil).Load(map[string]any{"project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesProjectDailyStatisticEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesProjectExportStatusEntity

```go
apiEntitiesProjectExportStatus := client.ApiEntitiesProjectExportStatus(nil)
fmt.Println(apiEntitiesProjectExportStatus.GetName()) // "api_entities_project_export_status"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `export_status` | `string` | No |  |
| `id` | `int` | No |  |
| `link` | `map[string]any` | No |  |
| `name` | `string` | No |  |
| `name_with_namespace` | `string` | No |  |
| `path` | `string` | No |  |
| `path_with_namespace` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesProjectExportStatus(nil).Load(map[string]any{"project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesProjectExportStatusEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesProjectGroupLinkEntity

```go
apiEntitiesProjectGroupLink := client.ApiEntitiesProjectGroupLink(nil)
fmt.Println(apiEntitiesProjectGroupLink.GetName()) // "api_entities_project_group_link"
```

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ApiEntitiesProjectGroupLink(nil).Create(map[string]any{
    "project_id": /* string */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesProjectGroupLinkEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesProjectHookEntity

```go
apiEntitiesProjectHook := client.ApiEntitiesProjectHook(nil)
fmt.Println(apiEntitiesProjectHook.GetName()) // "api_entities_project_hook"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert_status` | `any` | No |  |
| `branch_filter_strategy` | `string` | No |  |
| `confidential_issues_event` | `bool` | No |  |
| `confidential_note_event` | `bool` | No |  |
| `created_at` | `string` | No |  |
| `custom_header` | `[]any` | No |  |
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
| `url_variable` | `[]any` | No |  |
| `vulnerability_event` | `bool` | No |  |
| `wiki_page_event` | `bool` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiEntitiesProjectHook(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesProjectHook(nil).Load(map[string]any{"id": "api_entities_project_hook_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ApiEntitiesProjectHook(nil).Create(map[string]any{
    "project_id": /* string */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ApiEntitiesProjectHook(nil).Update(map[string]any{
    "id": "api_entities_project_hook_id",
    "project_id": "project_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesProjectHookEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesProjectImportStatusEntity

```go
apiEntitiesProjectImportStatus := client.ApiEntitiesProjectImportStatus(nil)
fmt.Println(apiEntitiesProjectImportStatus.GetName()) // "api_entities_project_import_status"
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiEntitiesProjectImportStatus(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ApiEntitiesProjectImportStatus(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesProjectImportStatusEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesProjectJobTokenScopeEntity

```go
apiEntitiesProjectJobTokenScope := client.ApiEntitiesProjectJobTokenScope(nil)
fmt.Println(apiEntitiesProjectJobTokenScope.GetName()) // "api_entities_project_job_token_scope"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `inbound_enabled` | `bool` | No |  |
| `outbound_enabled` | `bool` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesProjectJobTokenScope(nil).Load(map[string]any{"project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesProjectJobTokenScopeEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesProjectRepositoryStorageEntity

```go
apiEntitiesProjectRepositoryStorage := client.ApiEntitiesProjectRepositoryStorage(nil)
fmt.Println(apiEntitiesProjectRepositoryStorage.GetName()) // "api_entities_project_repository_storage"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No |  |
| `disk_path` | `string` | No |  |
| `project_id` | `int` | No |  |
| `repository_storage` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesProjectRepositoryStorage(nil).Load(map[string]any{"project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesProjectRepositoryStorageEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesProjectSnippetEntity

```go
apiEntitiesProjectSnippet := client.ApiEntitiesProjectSnippet(nil)
fmt.Println(apiEntitiesProjectSnippet.GetName()) // "api_entities_project_snippet"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `map[string]any` | No |  |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `file` | `[]any` | No |  |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiEntitiesProjectSnippet(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesProjectSnippet(nil).Load(map[string]any{"id": "api_entities_project_snippet_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ApiEntitiesProjectSnippet(nil).Create(map[string]any{
    "project_id": /* string */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ApiEntitiesProjectSnippet(nil).Update(map[string]any{
    "id": "api_entities_project_snippet_id",
    "project_id": "project_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesProjectSnippetEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesProjectUploadEntity

```go
apiEntitiesProjectUpload := client.ApiEntitiesProjectUpload(nil)
fmt.Println(apiEntitiesProjectUpload.GetName()) // "api_entities_project_upload"
```

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ApiEntitiesProjectUpload(nil).Create(map[string]any{
    "project_id": /* string */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesProjectUploadEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesProjectWithAccessEntity

```go
apiEntitiesProjectWithAccess := client.ApiEntitiesProjectWithAccess(nil)
fmt.Println(apiEntitiesProjectWithAccess.GetName()) // "api_entities_project_with_access"
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
| `ci_id_token_sub_claim_component` | `[]any` | No |  |
| `ci_job_token_scope_enabled` | `bool` | No |  |
| `ci_pipeline_variables_minimum_override_role` | `string` | No |  |
| `ci_push_repository_for_job_token_allowed` | `bool` | No |  |
| `ci_restrict_pipeline_cancellation_role` | `string` | No |  |
| `ci_separated_cache` | `bool` | No |  |
| `compliance_framework` | `string` | No |  |
| `container_expiration_policy` | `map[string]any` | No |  |
| `container_registry_access_level` | `string` | No |  |
| `container_registry_enabled` | `bool` | No |  |
| `container_registry_image_prefix` | `string` | No |  |
| `created_at` | `string` | No |  |
| `creator_id` | `int` | No |  |
| `custom_attribute` | `map[string]any` | No |  |
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
| `forked_from_project` | `map[string]any` | No |  |
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
| `license` | `map[string]any` | No |  |
| `license_url` | `string` | No |  |
| `link` | `map[string]any` | No |  |
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
| `namespace` | `map[string]any` | No |  |
| `only_allow_merge_if_all_discussions_are_resolved` | `bool` | No |  |
| `only_allow_merge_if_all_status_checks_passed` | `string` | No |  |
| `only_allow_merge_if_pipeline_succeed` | `bool` | No |  |
| `only_mirror_protected_branch` | `string` | No |  |
| `open_issues_count` | `int` | No |  |
| `owner` | `map[string]any` | No |  |
| `package_registry_access_level` | `string` | No |  |
| `packages_enabled` | `bool` | No |  |
| `pages_access_level` | `string` | No |  |
| `path` | `string` | No |  |
| `path_with_namespace` | `string` | No |  |
| `permission` | `map[string]any` | No |  |
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
| `shared_with_group` | `[]any` | No |  |
| `show_diff_preview_in_email` | `bool` | No |  |
| `snippets_access_level` | `string` | No |  |
| `snippets_enabled` | `bool` | No |  |
| `spp_repository_pipeline_access` | `bool` | No |  |
| `squash_commit_template` | `string` | No |  |
| `squash_option` | `string` | No |  |
| `ssh_url_to_repo` | `string` | No |  |
| `star_count` | `int` | No |  |
| `statistic` | `map[string]any` | No |  |
| `suggestion_commit_message` | `string` | No |  |
| `tag_list` | `[]any` | No |  |
| `topic` | `[]any` | No |  |
| `updated_at` | `string` | No |  |
| `visibility` | `string` | No |  |
| `warn_about_potentially_unwanted_character` | `bool` | No |  |
| `web_based_commit_signing_enabled` | `string` | No |  |
| `web_url` | `string` | No |  |
| `wiki_access_level` | `string` | No |  |
| `wiki_enabled` | `bool` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesProjectWithAccess(nil).Load(map[string]any{"id": "api_entities_project_with_access_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesProjectWithAccessEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesProjectsContainerRegistryProtectionRuleEntity

```go
apiEntitiesProjectsContainerRegistryProtectionRule := client.ApiEntitiesProjectsContainerRegistryProtectionRule(nil)
fmt.Println(apiEntitiesProjectsContainerRegistryProtectionRule.GetName()) // "api_entities_projects_container_registry_protection_rule"
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiEntitiesProjectsContainerRegistryProtectionRule(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ApiEntitiesProjectsContainerRegistryProtectionRule(nil).Create(map[string]any{
    "project_id": /* string */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ApiEntitiesProjectsContainerRegistryProtectionRule(nil).Update(map[string]any{
    "id": "id",
    "project_id": "project_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesProjectsContainerRegistryProtectionRuleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesProjectsPackagesProtectionRuleEntity

```go
apiEntitiesProjectsPackagesProtectionRule := client.ApiEntitiesProjectsPackagesProtectionRule(nil)
fmt.Println(apiEntitiesProjectsPackagesProtectionRule.GetName()) // "api_entities_projects_packages_protection_rule"
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiEntitiesProjectsPackagesProtectionRule(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ApiEntitiesProjectsPackagesProtectionRule(nil).Create(map[string]any{
    "project_id": /* string */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ApiEntitiesProjectsPackagesProtectionRule(nil).Update(map[string]any{
    "id": "id",
    "project_id": "project_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesProjectsPackagesProtectionRuleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesProjectsTopicEntity

```go
apiEntitiesProjectsTopic := client.ApiEntitiesProjectsTopic(nil)
fmt.Println(apiEntitiesProjectsTopic.GetName()) // "api_entities_projects_topic"
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesProjectsTopic(nil).Load(map[string]any{"id": "api_entities_projects_topic_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ApiEntitiesProjectsTopic(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ApiEntitiesProjectsTopic(nil).Update(map[string]any{
    "id": "api_entities_projects_topic_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesProjectsTopicEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesProtectedBranchEntity

```go
apiEntitiesProtectedBranch := client.ApiEntitiesProtectedBranch(nil)
fmt.Println(apiEntitiesProtectedBranch.GetName()) // "api_entities_protected_branch"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_force_push` | `bool` | No |  |
| `code_owner_approval_required` | `bool` | No |  |
| `id` | `int` | No |  |
| `inherited` | `bool` | No |  |
| `merge_access_level` | `[]any` | No |  |
| `name` | `string` | No |  |
| `push_access_level` | `[]any` | No |  |
| `unprotect_access_level` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiEntitiesProtectedBranch(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesProtectedBranch(nil).Load(map[string]any{"id": "api_entities_protected_branch_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ApiEntitiesProtectedBranch(nil).Create(map[string]any{
    "project_id": /* string */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ApiEntitiesProtectedBranch(nil).Update(map[string]any{
    "id": "api_entities_protected_branch_id",
    "project_id": "project_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesProtectedBranchEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesProtectedTagEntity

```go
apiEntitiesProtectedTag := client.ApiEntitiesProtectedTag(nil)
fmt.Println(apiEntitiesProtectedTag.GetName()) // "api_entities_protected_tag"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `create_access_level` | `map[string]any` | No |  |
| `name` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiEntitiesProtectedTag(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesProtectedTag(nil).Load(map[string]any{"id": "api_entities_protected_tag_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ApiEntitiesProtectedTag(nil).Create(map[string]any{
    "project_id": /* string */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesProtectedTagEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesPublicGroupDetailEntity

```go
apiEntitiesPublicGroupDetail := client.ApiEntitiesPublicGroupDetail(nil)
fmt.Println(apiEntitiesPublicGroupDetail.GetName()) // "api_entities_public_group_detail"
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiEntitiesPublicGroupDetail(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesPublicGroupDetailEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesRelatedIssueEntity

```go
apiEntitiesRelatedIssue := client.ApiEntitiesRelatedIssue(nil)
fmt.Println(apiEntitiesRelatedIssue.GetName()) // "api_entities_related_issue"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assignee` | `map[string]any` | No |  |
| `author` | `map[string]any` | No |  |
| `blocking_issues_count` | `string` | No |  |
| `closed_at` | `string` | No |  |
| `closed_by` | `map[string]any` | No |  |
| `confidential` | `bool` | No |  |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `discussion_locked` | `bool` | No |  |
| `downvote` | `string` | No |  |
| `due_date` | `string` | No |  |
| `epic` | `map[string]any` | No |  |
| `epic_iid` | `string` | No |  |
| `has_task` | `bool` | No |  |
| `health_status` | `string` | No |  |
| `id` | `int` | No |  |
| `iid` | `int` | No |  |
| `imported` | `string` | No |  |
| `imported_from` | `string` | No |  |
| `issue_link_id` | `string` | No |  |
| `issue_type` | `string` | No |  |
| `iteration` | `map[string]any` | No |  |
| `label` | `[]any` | No |  |
| `link` | `map[string]any` | No |  |
| `link_created_at` | `string` | No |  |
| `link_type` | `string` | No |  |
| `link_updated_at` | `string` | No |  |
| `merge_requests_count` | `string` | No |  |
| `milestone` | `map[string]any` | No |  |
| `moved_to_id` | `string` | No |  |
| `project_id` | `int` | No |  |
| `reference` | `map[string]any` | No |  |
| `service_desk_reply_to` | `string` | No |  |
| `severity` | `string` | No |  |
| `state` | `string` | No |  |
| `subscribed` | `string` | No |  |
| `task_completion_status` | `string` | No |  |
| `task_status` | `string` | No |  |
| `time_stat` | `map[string]any` | No |  |
| `title` | `string` | No |  |
| `type` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upvote` | `string` | No |  |
| `user_notes_count` | `string` | No |  |
| `web_url` | `string` | No |  |
| `weight` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiEntitiesRelatedIssue(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesRelatedIssueEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesRelationImportTrackerEntity

```go
apiEntitiesRelationImportTracker := client.ApiEntitiesRelationImportTracker(nil)
fmt.Println(apiEntitiesRelationImportTracker.GetName()) // "api_entities_relation_import_tracker"
```

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ApiEntitiesRelationImportTracker(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesRelationImportTrackerEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesReleaseEntity

```go
apiEntitiesRelease := client.ApiEntitiesRelease(nil)
fmt.Println(apiEntitiesRelease.GetName()) // "api_entities_release"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `asset` | `map[string]any` | No |  |
| `author` | `map[string]any` | No |  |
| `commit` | `map[string]any` | No |  |
| `commit_path` | `string` | No |  |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `description_html` | `string` | No |  |
| `evidence` | `map[string]any` | No |  |
| `link` | `map[string]any` | No |  |
| `milestone` | `map[string]any` | No |  |
| `name` | `string` | No |  |
| `released_at` | `string` | No |  |
| `tag_name` | `string` | No |  |
| `tag_path` | `string` | No |  |
| `upcoming_release` | `bool` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiEntitiesRelease(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesRelease(nil).Load(map[string]any{"id": "api_entities_release_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ApiEntitiesRelease(nil).Create(map[string]any{
    "project_id": /* string */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ApiEntitiesRelease(nil).Update(map[string]any{
    "id": "api_entities_release_id",
    "project_id": "project_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesReleaseEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesReleasesLinkEntity

```go
apiEntitiesReleasesLink := client.ApiEntitiesReleasesLink(nil)
fmt.Println(apiEntitiesReleasesLink.GetName()) // "api_entities_releases_link"
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiEntitiesReleasesLink(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesReleasesLink(nil).Load(map[string]any{"id": "api_entities_releases_link_id", "project_id": "project_id", "release_id": "release_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ApiEntitiesReleasesLink(nil).Create(map[string]any{
    "project_id": /* string */,
    "release_id": /* string */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ApiEntitiesReleasesLink(nil).Update(map[string]any{
    "id": "api_entities_releases_link_id",
    "project_id": "project_id",
    "release_id": "release_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesReleasesLinkEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesRemoteMirrorEntity

```go
apiEntitiesRemoteMirror := client.ApiEntitiesRemoteMirror(nil)
fmt.Println(apiEntitiesRemoteMirror.GetName()) // "api_entities_remote_mirror"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_method` | `string` | No |  |
| `enabled` | `bool` | No |  |
| `host_key` | `[]any` | No |  |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiEntitiesRemoteMirror(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesRemoteMirror(nil).Load(map[string]any{"id": "api_entities_remote_mirror_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ApiEntitiesRemoteMirror(nil).Create(map[string]any{
    "project_id": /* string */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ApiEntitiesRemoteMirror(nil).Update(map[string]any{
    "id": "api_entities_remote_mirror_id",
    "project_id": "project_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesRemoteMirrorEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesRepositoryHealthEntity

```go
apiEntitiesRepositoryHealth := client.ApiEntitiesRepositoryHealth(nil)
fmt.Println(apiEntitiesRepositoryHealth.GetName()) // "api_entities_repository_health"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alternate` | `map[string]any` | No |  |
| `bitmap` | `map[string]any` | No |  |
| `commit_graph` | `map[string]any` | No |  |
| `is_object_pool` | `bool` | No |  |
| `last_full_repack` | `map[string]any` | No |  |
| `multi_pack_index` | `map[string]any` | No |  |
| `multi_pack_index_bitmap` | `map[string]any` | No |  |
| `object` | `map[string]any` | No |  |
| `reference` | `map[string]any` | No |  |
| `size` | `int` | No |  |
| `updated_at` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesRepositoryHealth(nil).Load(map[string]any{"project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesRepositoryHealthEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesResourceAccessTokenWithTokenEntity

```go
apiEntitiesResourceAccessTokenWithToken := client.ApiEntitiesResourceAccessTokenWithToken(nil)
fmt.Println(apiEntitiesResourceAccessTokenWithToken.GetName()) // "api_entities_resource_access_token_with_token"
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
| `scope` | `[]any` | No |  |
| `token` | `string` | No |  |
| `user_id` | `int` | No |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ApiEntitiesResourceAccessTokenWithToken(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesResourceAccessTokenWithTokenEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesResourceMilestoneEventEntity

```go
apiEntitiesResourceMilestoneEvent := client.ApiEntitiesResourceMilestoneEvent(nil)
fmt.Println(apiEntitiesResourceMilestoneEvent.GetName()) // "api_entities_resource_milestone_event"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `string` | No |  |
| `created_at` | `string` | No |  |
| `id` | `int` | No |  |
| `milestone` | `map[string]any` | No |  |
| `resource_id` | `int` | No |  |
| `resource_type` | `string` | No |  |
| `state` | `string` | No |  |
| `user` | `map[string]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiEntitiesResourceMilestoneEvent(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesResourceMilestoneEvent(nil).Load(map[string]any{"id": "api_entities_resource_milestone_event_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesResourceMilestoneEventEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesSnippetEntity

```go
apiEntitiesSnippet := client.ApiEntitiesSnippet(nil)
fmt.Println(apiEntitiesSnippet.GetName()) // "api_entities_snippet"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `map[string]any` | No |  |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `file` | `[]any` | No |  |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiEntitiesSnippet(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesSnippetEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesSshKeyWithUserEntity

```go
apiEntitiesSshKeyWithUser := client.ApiEntitiesSshKeyWithUser(nil)
fmt.Println(apiEntitiesSshKeyWithUser.GetName()) // "api_entities_ssh_key_with_user"
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
| `user` | `map[string]any` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesSshKeyWithUser(nil).Load(map[string]any{"id": "api_entities_ssh_key_with_user_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesSshKeyWithUserEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesSuggestionEntity

```go
apiEntitiesSuggestion := client.ApiEntitiesSuggestion(nil)
fmt.Println(apiEntitiesSuggestion.GetName()) // "api_entities_suggestion"
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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ApiEntitiesSuggestion(nil).Update(map[string]any{
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesSuggestionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesSystemBroadcastMessageEntity

```go
apiEntitiesSystemBroadcastMessage := client.ApiEntitiesSystemBroadcastMessage(nil)
fmt.Println(apiEntitiesSystemBroadcastMessage.GetName()) // "api_entities_system_broadcast_message"
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesSystemBroadcastMessage(nil).Load(map[string]any{"id": "api_entities_system_broadcast_message_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ApiEntitiesSystemBroadcastMessage(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ApiEntitiesSystemBroadcastMessage(nil).Update(map[string]any{
    "id": "api_entities_system_broadcast_message_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.ApiEntitiesSystemBroadcastMessage(nil).Remove(map[string]any{"id": "api_entities_system_broadcast_message_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesSystemBroadcastMessageEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesTagEntity

```go
apiEntitiesTag := client.ApiEntitiesTag(nil)
fmt.Println(apiEntitiesTag.GetName()) // "api_entities_tag"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `commit` | `map[string]any` | No |  |
| `created_at` | `string` | No |  |
| `message` | `string` | No |  |
| `name` | `string` | No |  |
| `protected` | `bool` | No |  |
| `release` | `map[string]any` | No |  |
| `target` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiEntitiesTag(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesTag(nil).Load(map[string]any{"id": "api_entities_tag_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ApiEntitiesTag(nil).Create(map[string]any{
    "project_id": /* string */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesTagEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesTagSignatureEntity

```go
apiEntitiesTagSignature := client.ApiEntitiesTagSignature(nil)
fmt.Println(apiEntitiesTagSignature.GetName()) // "api_entities_tag_signature"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `signature` | `string` | No |  |
| `signature_type` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesTagSignature(nil).Load(map[string]any{"project_id": "project_id", "tag_name": "tag_name"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesTagSignatureEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesTemplatesListEntity

```go
apiEntitiesTemplatesList := client.ApiEntitiesTemplatesList(nil)
fmt.Println(apiEntitiesTemplatesList.GetName()) // "api_entities_templates_list"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `key` | `string` | No |  |
| `name` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesTemplatesList(nil).Load(map[string]any{"project_id": "project_id", "type": "type"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesTemplatesListEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesTerraformModuleVersionEntity

```go
apiEntitiesTerraformModuleVersion := client.ApiEntitiesTerraformModuleVersion(nil)
fmt.Println(apiEntitiesTerraformModuleVersion.GetName()) // "api_entities_terraform_module_version"
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiEntitiesTerraformModuleVersion(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesTerraformModuleVersion(nil).Load(map[string]any{"module_name": "module_name", "module_system": "module_system"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesTerraformModuleVersionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesTreeObjectEntity

```go
apiEntitiesTreeObject := client.ApiEntitiesTreeObject(nil)
fmt.Println(apiEntitiesTreeObject.GetName()) // "api_entities_tree_object"
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesTreeObject(nil).Load(map[string]any{"project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesTreeObjectEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesTriggerEntity

```go
apiEntitiesTrigger := client.ApiEntitiesTrigger(nil)
fmt.Println(apiEntitiesTrigger.GetName()) // "api_entities_trigger"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `expires_at` | `string` | No |  |
| `id` | `int` | No |  |
| `last_used` | `string` | No |  |
| `owner` | `map[string]any` | No |  |
| `token` | `string` | No |  |
| `updated_at` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiEntitiesTrigger(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesTrigger(nil).Load(map[string]any{"id": "api_entities_trigger_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ApiEntitiesTrigger(nil).Create(map[string]any{
    "project_id": /* string */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ApiEntitiesTrigger(nil).Update(map[string]any{
    "id": "api_entities_trigger_id",
    "project_id": "project_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesTriggerEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesUserAgentDetailEntity

```go
apiEntitiesUserAgentDetail := client.ApiEntitiesUserAgentDetail(nil)
fmt.Println(apiEntitiesUserAgentDetail.GetName()) // "api_entities_user_agent_detail"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `akismet_submitted` | `bool` | No |  |
| `ip_address` | `string` | No |  |
| `user_agent` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesUserAgentDetail(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesUserAgentDetailEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesUserCountEntity

```go
apiEntitiesUserCount := client.ApiEntitiesUserCount(nil)
fmt.Println(apiEntitiesUserCount.GetName()) // "api_entities_user_count"
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesUserCount(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesUserCountEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesUserPublicEntity

```go
apiEntitiesUserPublic := client.ApiEntitiesUserPublic(nil)
fmt.Println(apiEntitiesUserPublic.GetName()) // "api_entities_user_public"
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
| `custom_attribute` | `[]any` | No |  |
| `discord` | `string` | No |  |
| `email` | `string` | No |  |
| `external` | `string` | No |  |
| `extra_shared_runners_minutes_limit` | `string` | No |  |
| `follower` | `string` | No |  |
| `following` | `string` | No |  |
| `github` | `string` | No |  |
| `id` | `int` | No |  |
| `identity` | `map[string]any` | No |  |
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
| `scim_identity` | `map[string]any` | No |  |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiEntitiesUserPublic(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesUserPublicEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesUserWithAdminEntity

```go
apiEntitiesUserWithAdmin := client.ApiEntitiesUserWithAdmin(nil)
fmt.Println(apiEntitiesUserWithAdmin.GetName()) // "api_entities_user_with_admin"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `key` | `string` | No |  |
| `value` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiEntitiesUserWithAdmin(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesUserWithAdminEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesWikiAttachmentEntity

```go
apiEntitiesWikiAttachment := client.ApiEntitiesWikiAttachment(nil)
fmt.Println(apiEntitiesWikiAttachment.GetName()) // "api_entities_wiki_attachment"
```

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ApiEntitiesWikiAttachment(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesWikiAttachmentEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesWikiPageEntity

```go
apiEntitiesWikiPage := client.ApiEntitiesWikiPage(nil)
fmt.Println(apiEntitiesWikiPage.GetName()) // "api_entities_wiki_page"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content` | `string` | No |  |
| `encoding` | `string` | No |  |
| `format` | `string` | No |  |
| `front_matter` | `map[string]any` | No |  |
| `slug` | `string` | No |  |
| `title` | `string` | No |  |
| `wiki_page_meta_id` | `int` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiEntitiesWikiPage(nil).Load(map[string]any{"slug": "slug"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ApiEntitiesWikiPage(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ApiEntitiesWikiPage(nil).Update(map[string]any{
    "slug": "slug",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesWikiPageEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntitiesWikiPageBasicEntity

```go
apiEntitiesWikiPageBasic := client.ApiEntitiesWikiPageBasic(nil)
fmt.Println(apiEntitiesWikiPageBasic.GetName()) // "api_entities_wiki_page_basic"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `format` | `string` | No |  |
| `slug` | `string` | No |  |
| `title` | `string` | No |  |
| `wiki_page_meta_id` | `int` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiEntitiesWikiPageBasic(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntitiesWikiPageBasicEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApplicationEntity

```go
application := client.Application(nil)
fmt.Println(application.GetName()) // "application"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Application(nil).Remove(map[string]any{"id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApplicationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AwardEmojiEntity

```go
awardEmoji := client.AwardEmoji(nil)
fmt.Println(awardEmoji.GetName()) // "award_emoji"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.AwardEmoji(nil).Remove(map[string]any{"id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AwardEmojiEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BadgeEntity

```go
badge := client.Badge(nil)
fmt.Println(badge.GetName()) // "badge"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Badge(nil).Remove(map[string]any{"id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BadgeEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BranchEntity

```go
branch := client.Branch(nil)
fmt.Println(branch.GetName()) // "branch"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Branch(nil).Remove(map[string]any{"project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BranchEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CargoPackageEntity

```go
cargoPackage := client.CargoPackage(nil)
fmt.Println(cargoPackage.GetName()) // "cargo_package"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.CargoPackage(nil).Load(map[string]any{"project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CargoPackageEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CiVariableEntity

```go
ciVariable := client.CiVariable(nil)
fmt.Println(ciVariable.GetName()) // "ci_variable"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.CiVariable(nil).Remove(map[string]any{"id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CiVariableEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ClusterEntity

```go
cluster := client.Cluster(nil)
fmt.Println(cluster.GetName()) // "cluster"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Cluster(nil).Remove(map[string]any{"id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ClusterEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ClusterAgentEntity

```go
clusterAgent := client.ClusterAgent(nil)
fmt.Println(clusterAgent.GetName()) // "cluster_agent"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.ClusterAgent(nil).Remove(map[string]any{"id": "id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ClusterAgentEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ComposerEntity

```go
composer := client.Composer(nil)
fmt.Println(composer.GetName()) // "composer"
```

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Composer(nil).Create(map[string]any{
    "project_id": /* string */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ComposerEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ComposerPackageEntity

```go
composerPackage := client.ComposerPackage(nil)
fmt.Println(composerPackage.GetName()) // "composer_package"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ComposerPackage(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ComposerPackageEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ConanEntity

```go
conan := client.Conan(nil)
fmt.Println(conan.GetName()) // "conan"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Conan(nil).Remove(map[string]any{"package_channel": "package_channel", "package_name": "package_name", "package_username": "package_username", "package_version": "package_version"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ConanEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ConanPackageEntity

```go
conanPackage := client.ConanPackage(nil)
fmt.Println(conanPackage.GetName()) // "conan_package"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ConanPackage(nil).Load(map[string]any{"id": "conan_package_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ConanPackage(nil).Update(map[string]any{
    "id": "conan_package_id",
    "file_name": "file_name",
    "package_channel": "package_channel",
    "package_username": "package_username",
    "package_version": "package_version",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.ConanPackage(nil).Remove(map[string]any{"conan_id": "conan_id", "package_channel": "package_channel", "package_username": "package_username", "package_version": "package_version", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ConanPackageEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ContainerRegistryEntity

```go
containerRegistry := client.ContainerRegistry(nil)
fmt.Println(containerRegistry.GetName()) // "container_registry"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.ContainerRegistry(nil).Remove(map[string]any{"project_id": "project_id", "repository_id": "repository_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ContainerRegistryEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ContainerRegistryEventEntity

```go
containerRegistryEvent := client.ContainerRegistryEvent(nil)
fmt.Println(containerRegistryEvent.GetName()) // "container_registry_event"
```

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ContainerRegistryEvent(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ContainerRegistryEventEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CustomAttributeEntity

```go
customAttribute := client.CustomAttribute(nil)
fmt.Println(customAttribute.GetName()) // "custom_attribute"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `key` | `string` | No |  |
| `value` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.CustomAttribute(nil).Load(map[string]any{"id": "custom_attribute_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CustomAttributeEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DebianEntity

```go
debian := client.Debian(nil)
fmt.Println(debian.GetName()) // "debian"
```

### Operations

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Debian(nil).Update(map[string]any{
    "id": "id",
    "project_id": "project_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DebianEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DebianDistributionEntity

```go
debianDistribution := client.DebianDistribution(nil)
fmt.Println(debianDistribution.GetName()) // "debian_distribution"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.DebianDistribution(nil).Remove(map[string]any{"id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DebianDistributionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DebianPackageEntity

```go
debianPackage := client.DebianPackage(nil)
fmt.Println(debianPackage.GetName()) // "debian_package"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.DebianPackage(nil).Load(map[string]any{"id": "debian_package_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.DebianPackage(nil).Update(map[string]any{
    "file_name": "file_name",
    "project_id": "project_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DebianPackageEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DependencyProxyEntity

```go
dependencyProxy := client.DependencyProxy(nil)
fmt.Println(dependencyProxy.GetName()) // "dependency_proxy"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.DependencyProxy(nil).Remove(map[string]any{"group_id": "group_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DependencyProxyEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DeployKeyEntity

```go
deployKey := client.DeployKey(nil)
fmt.Println(deployKey.GetName()) // "deploy_key"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.DeployKey(nil).Remove(map[string]any{"id": "id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DeployKeyEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DeployTokenEntity

```go
deployToken := client.DeployToken(nil)
fmt.Println(deployToken.GetName()) // "deploy_token"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.DeployToken(nil).Remove(map[string]any{"id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DeployTokenEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DeploymentEntity

```go
deployment := client.Deployment(nil)
fmt.Println(deployment.GetName()) // "deployment"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Deployment(nil).Remove(map[string]any{"id": "id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DeploymentEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EeApiEntitiesApprovalStateEntity

```go
eeApiEntitiesApprovalState := client.EeApiEntitiesApprovalState(nil)
fmt.Println(eeApiEntitiesApprovalState.GetName()) // "ee_api_entities_approval_state"
```

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.EeApiEntitiesApprovalState(nil).Create(map[string]any{
    "merge_request_id": /* string */,
    "project_id": /* string */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EeApiEntitiesApprovalStateEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EeApiEntitiesAuditEventEntity

```go
eeApiEntitiesAuditEvent := client.EeApiEntitiesAuditEvent(nil)
fmt.Println(eeApiEntitiesAuditEvent.GetName()) // "ee_api_entities_audit_event"
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.EeApiEntitiesAuditEvent(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.EeApiEntitiesAuditEvent(nil).Load(map[string]any{"id": "ee_api_entities_audit_event_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EeApiEntitiesAuditEventEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EeApiEntitiesBillableMembershipEntity

```go
eeApiEntitiesBillableMembership := client.EeApiEntitiesBillableMembership(nil)
fmt.Println(eeApiEntitiesBillableMembership.GetName()) // "ee_api_entities_billable_membership"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access_level` | `map[string]any` | No |  |
| `created_at` | `string` | No |  |
| `expires_at` | `string` | No |  |
| `id` | `string` | No |  |
| `source_full_name` | `string` | No |  |
| `source_id` | `string` | No |  |
| `source_members_url` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.EeApiEntitiesBillableMembership(nil).Load(map[string]any{"billable_member_id": "billable_member_id", "group_id": "group_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EeApiEntitiesBillableMembershipEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EeApiEntitiesGeoNodeStatusEntity

```go
eeApiEntitiesGeoNodeStatus := client.EeApiEntitiesGeoNodeStatus(nil)
fmt.Println(eeApiEntitiesGeoNodeStatus.GetName()) // "ee_api_entities_geo_node_status"
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
| `link` | `map[string]any` | No |  |
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
| `namespace` | `map[string]any` | No |  |
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
| `storage_shard` | `map[string]any` | No |  |
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

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.EeApiEntitiesGeoNodeStatus(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EeApiEntitiesGeoNodeStatusEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EeApiEntitiesGeoPipelineRefEntity

```go
eeApiEntitiesGeoPipelineRef := client.EeApiEntitiesGeoPipelineRef(nil)
fmt.Println(eeApiEntitiesGeoPipelineRef.GetName()) // "ee_api_entities_geo_pipeline_ref"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `pipeline_ref` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.EeApiEntitiesGeoPipelineRef(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EeApiEntitiesGeoPipelineRefEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EeApiEntitiesIssuableMetricImageEntity

```go
eeApiEntitiesIssuableMetricImage := client.EeApiEntitiesIssuableMetricImage(nil)
fmt.Println(eeApiEntitiesIssuableMetricImage.GetName()) // "ee_api_entities_issuable_metric_image"
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

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.EeApiEntitiesIssuableMetricImage(nil).Create(map[string]any{
    "issue_id": /* string */,
    "project_id": /* string */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.EeApiEntitiesIssuableMetricImage(nil).Update(map[string]any{
    "id": "id",
    "issue_id": "issue_id",
    "project_id": "project_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.EeApiEntitiesIssuableMetricImage(nil).Remove(map[string]any{"id": "id", "issue_id": "issue_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EeApiEntitiesIssuableMetricImageEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EeApiEntitiesMergeRequestApprovalStateEntity

```go
eeApiEntitiesMergeRequestApprovalState := client.EeApiEntitiesMergeRequestApprovalState(nil)
fmt.Println(eeApiEntitiesMergeRequestApprovalState.GetName()) // "ee_api_entities_merge_request_approval_state"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `approvals_required` | `int` | No |  |
| `approved` | `bool` | No |  |
| `approved_by` | `[]any` | No |  |
| `code_owner` | `bool` | No |  |
| `contains_hidden_group` | `bool` | No |  |
| `eligible_approver` | `[]any` | No |  |
| `group` | `[]any` | No |  |
| `id` | `int` | No |  |
| `name` | `string` | No |  |
| `overridden` | `bool` | No |  |
| `report_type` | `string` | No |  |
| `rule_type` | `string` | No |  |
| `section` | `string` | No |  |
| `source_rule` | `map[string]any` | No |  |
| `user` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.EeApiEntitiesMergeRequestApprovalState(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EeApiEntitiesMergeRequestApprovalStateEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EeApiEntitiesSshCertificateEntity

```go
eeApiEntitiesSshCertificate := client.EeApiEntitiesSshCertificate(nil)
fmt.Println(eeApiEntitiesSshCertificate.GetName()) // "ee_api_entities_ssh_certificate"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No |  |
| `id` | `int` | No |  |
| `key` | `string` | No |  |
| `title` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.EeApiEntitiesSshCertificate(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.EeApiEntitiesSshCertificate(nil).Create(map[string]any{
    "group_id": /* string */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EeApiEntitiesSshCertificateEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EnvironmentEntity

```go
environment := client.Environment(nil)
fmt.Println(environment.GetName()) // "environment"
```

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Environment(nil).Create(map[string]any{
    "project_id": /* string */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Environment(nil).Remove(map[string]any{"id": "id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EnvironmentEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ErrorTrackingClientKeyEntity

```go
errorTrackingClientKey := client.ErrorTrackingClientKey(nil)
fmt.Println(errorTrackingClientKey.GetName()) // "error_tracking_client_key"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.ErrorTrackingClientKey(nil).Remove(map[string]any{"id": "id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ErrorTrackingClientKeyEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## FeatureEntity

```go
feature := client.Feature(nil)
fmt.Println(feature.GetName()) // "feature"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Feature(nil).Remove(map[string]any{"id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `FeatureEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## FeatureFlagEntity

```go
featureFlag := client.FeatureFlag(nil)
fmt.Println(featureFlag.GetName()) // "feature_flag"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.FeatureFlag(nil).Load(map[string]any{"project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.FeatureFlag(nil).Create(map[string]any{
    "unleash_id": /* string */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.FeatureFlag(nil).Remove(map[string]any{"id": "id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `FeatureFlagEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## FeatureFlagsUserListEntity

```go
featureFlagsUserList := client.FeatureFlagsUserList(nil)
fmt.Println(featureFlagsUserList.GetName()) // "feature_flags_user_list"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.FeatureFlagsUserList(nil).Remove(map[string]any{"id": "id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `FeatureFlagsUserListEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## FreezePeriodEntity

```go
freezePeriod := client.FreezePeriod(nil)
fmt.Println(freezePeriod.GetName()) // "freeze_period"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.FreezePeriod(nil).Remove(map[string]any{"id": "id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `FreezePeriodEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## GenericPackageEntity

```go
genericPackage := client.GenericPackage(nil)
fmt.Println(genericPackage.GetName()) // "generic_package"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.GenericPackage(nil).Load(map[string]any{"file_name": "file_name", "generic_id": "generic_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.GenericPackage(nil).Update(map[string]any{
    "file_name": "file_name",
    "generic_id": "generic_id",
    "project_id": "project_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `GenericPackageEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## GeoEntity

```go
geo := client.Geo(nil)
fmt.Println(geo.GetName()) // "geo"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Geo(nil).Load(map[string]any{"replicable_id": "replicable_id", "replicable_name": "replicable_name"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Geo(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `GeoEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## GoProxyEntity

```go
goProxy := client.GoProxy(nil)
fmt.Println(goProxy.GetName()) // "go_proxy"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.GoProxy(nil).Load(map[string]any{"project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `GoProxyEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## GroupEntity

```go
group := client.Group(nil)
fmt.Println(group.GetName()) // "group"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Group(nil).Load(map[string]any{"id": "group_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Group(nil).Create(map[string]any{
    "id": /* string */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Group(nil).Update(map[string]any{
    "id": "group_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Group(nil).Remove(map[string]any{"id": "group_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `GroupEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## GroupAvatarEntity

```go
groupAvatar := client.GroupAvatar(nil)
fmt.Println(groupAvatar.GetName()) // "group_avatar"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.GroupAvatar(nil).Load(map[string]any{"id": "group_avatar_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `GroupAvatarEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## GroupExportEntity

```go
groupExport := client.GroupExport(nil)
fmt.Println(groupExport.GetName()) // "group_export"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.GroupExport(nil).Load(map[string]any{"group_id": "group_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.GroupExport(nil).Create(map[string]any{
    "id": /* string */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `GroupExportEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## GroupImportEntity

```go
groupImport := client.GroupImport(nil)
fmt.Println(groupImport.GetName()) // "group_import"
```

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.GroupImport(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `GroupImportEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## HelmPackageEntity

```go
helmPackage := client.HelmPackage(nil)
fmt.Println(helmPackage.GetName()) // "helm_package"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.HelmPackage(nil).Load(map[string]any{"project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.HelmPackage(nil).Create(map[string]any{
    "project_id": /* string */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `HelmPackageEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## HookEntity

```go
hook := client.Hook(nil)
fmt.Println(hook.GetName()) // "hook"
```

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Hook(nil).Create(map[string]any{
    "id": /* string */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Hook(nil).Update(map[string]any{
    "id": "id",
    "key": "key",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Hook(nil).Remove(map[string]any{"id": "id", "key": "key"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `HookEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ImportEntity

```go
import_ := client.Import(nil)
fmt.Println(import_.GetName()) // "import"
```

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Import(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ImportEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## IntegrationEntity

```go
integration := client.Integration(nil)
fmt.Println(integration.GetName()) // "integration"
```

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Integration(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Integration(nil).Remove(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IntegrationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## InvitationEntity

```go
invitation := client.Invitation(nil)
fmt.Println(invitation.GetName()) // "invitation"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Invitation(nil).Remove(map[string]any{"id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `InvitationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## IssueLinkEntity

```go
issueLink := client.IssueLink(nil)
fmt.Println(issueLink.GetName()) // "issue_link"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.IssueLink(nil).Remove(map[string]any{"id": "id", "issue_id": "issue_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IssueLinkEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## IssuesStatisticEntity

```go
issuesStatistic := client.IssuesStatistic(nil)
fmt.Println(issuesStatistic.GetName()) // "issues_statistic"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.IssuesStatistic(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IssuesStatisticEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## JobEntity

```go
job := client.Job(nil)
fmt.Println(job.GetName()) // "job"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Job(nil).Load(map[string]any{"id": "job_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Job(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Job(nil).Update(map[string]any{
    "id": "job_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `JobEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MavenPackageEntity

```go
mavenPackage := client.MavenPackage(nil)
fmt.Println(mavenPackage.GetName()) // "maven_package"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.MavenPackage(nil).Load(map[string]any{"file_name": "file_name"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.MavenPackage(nil).Update(map[string]any{
    "file_name": "file_name",
    "project_id": "project_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MavenPackageEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MemberEntity

```go
member := client.Member(nil)
fmt.Println(member.GetName()) // "member"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Member(nil).Remove(map[string]any{"id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MemberEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MergeRequestEntity

```go
mergeRequest := client.MergeRequest(nil)
fmt.Println(mergeRequest.GetName()) // "merge_request"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.MergeRequest(nil).Load(map[string]any{"id": "merge_request_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.MergeRequest(nil).Update(map[string]any{
    "id": "merge_request_id",
    "project_id": "project_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.MergeRequest(nil).Remove(map[string]any{"id": "merge_request_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MergeRequestEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MetadataEntity

```go
metadata := client.Metadata(nil)
fmt.Println(metadata.GetName()) // "metadata"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enterprise` | `bool` | No |  |
| `kas` | `map[string]any` | No |  |
| `revision` | `string` | No |  |
| `version` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Metadata(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MetadataEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MigrationEntity

```go
migration := client.Migration(nil)
fmt.Println(migration.GetName()) // "migration"
```

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Migration(nil).Create(map[string]any{
    "timestamp": /* any */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MigrationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MlModelRegistryEntity

```go
mlModelRegistry := client.MlModelRegistry(nil)
fmt.Println(mlModelRegistry.GetName()) // "ml_model_registry"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.MlModelRegistry(nil).Load(map[string]any{"file_name": "file_name", "ml_model_id": "ml_model_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.MlModelRegistry(nil).Update(map[string]any{
    "file_name": "file_name",
    "ml_model_id": "ml_model_id",
    "project_id": "project_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MlModelRegistryEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## NamespaceEntity

```go
namespace := client.Namespace(nil)
fmt.Println(namespace.GetName()) // "namespace"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Namespace(nil).Remove(map[string]any{"id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `NamespaceEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## NpmEntity

```go
npm := client.Npm(nil)
fmt.Println(npm.GetName()) // "npm"
```

### Operations

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Npm(nil).Update(map[string]any{
    "id": "id",
    "project_id": "project_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `NpmEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## NpmPackageEntity

```go
npmPackage := client.NpmPackage(nil)
fmt.Println(npmPackage.GetName()) // "npm_package"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.NpmPackage(nil).Load(map[string]any{"project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.NpmPackage(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.NpmPackage(nil).Update(map[string]any{
    "tag": "tag",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.NpmPackage(nil).Remove(map[string]any{"tag": "tag"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `NpmPackageEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## NugetEntity

```go
nuget := client.Nuget(nil)
fmt.Println(nuget.GetName()) // "nuget"
```

### Operations

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Nuget(nil).Update(map[string]any{
    "project_id": "project_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `NugetEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## NugetPackageEntity

```go
nugetPackage := client.NugetPackage(nil)
fmt.Println(nugetPackage.GetName()) // "nuget_package"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `catalog_entry` | `map[string]any` | No |  |
| `count` | `int` | No |  |
| `id` | `string` | No |  |
| `item` | `[]any` | No |  |
| `lower` | `string` | No |  |
| `package_content` | `string` | No |  |
| `upper` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.NugetPackage(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.NugetPackage(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.NugetPackage(nil).Update(map[string]any{
    "project_id": "project_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.NugetPackage(nil).Remove(map[string]any{"project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `NugetPackageEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PackageFileEntity

```go
packageFile := client.PackageFile(nil)
fmt.Println(packageFile.GetName()) // "package_file"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.PackageFile(nil).Load(map[string]any{"id": "package_file_id", "package_id": "package_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.PackageFile(nil).Remove(map[string]any{"id": "package_file_id", "package_id": "package_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PackageFileEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PageEntity

```go
page := client.Page(nil)
fmt.Println(page.GetName()) // "page"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Page(nil).Load(map[string]any{"project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Page(nil).Update(map[string]any{
    "project_id": "project_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Page(nil).Remove(map[string]any{"project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PageEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ParticipantEntity

```go
participant := client.Participant(nil)
fmt.Println(participant.GetName()) // "participant"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `key` | `string` | No |  |
| `value` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Participant(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ParticipantEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PersonalAccessTokenEntity

```go
personalAccessToken := client.PersonalAccessToken(nil)
fmt.Println(personalAccessToken.GetName()) // "personal_access_token"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.PersonalAccessToken(nil).Remove(map[string]any{"id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PersonalAccessTokenEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ProjectEntity

```go
project := client.Project(nil)
fmt.Println(project.GetName()) // "project"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `before_sha` | `string` | No |  |
| `committed_at` | `string` | No |  |
| `coverage` | `float64` | No |  |
| `created_at` | `string` | No |  |
| `detailed_status` | `map[string]any` | No |  |
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
| `user` | `map[string]any` | No |  |
| `web_url` | `string` | No |  |
| `yaml_error` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Project(nil).Load(map[string]any{"id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Project(nil).Create(map[string]any{
    "id": /* string */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Project(nil).Update(map[string]any{
    "id": "project_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Project(nil).Remove(map[string]any{"id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ProjectEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ProjectAvatarEntity

```go
projectAvatar := client.ProjectAvatar(nil)
fmt.Println(projectAvatar.GetName()) // "project_avatar"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ProjectAvatar(nil).Load(map[string]any{"id": "project_avatar_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ProjectAvatarEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ProjectEntityEntity

```go
projectEntity := client.ProjectEntity(nil)
fmt.Println(projectEntity.GetName()) // "project_entity"
```

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ProjectEntity(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ProjectEntityEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ProjectExportEntity

```go
projectExport := client.ProjectExport(nil)
fmt.Println(projectExport.GetName()) // "project_export"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ProjectExport(nil).Load(map[string]any{"project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ProjectExport(nil).Create(map[string]any{
    "id": /* string */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ProjectExportEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ProjectHookEntity

```go
projectHook := client.ProjectHook(nil)
fmt.Println(projectHook.GetName()) // "project_hook"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.ProjectHook(nil).Remove(map[string]any{"id": "id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ProjectHookEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ProjectImportEntity

```go
projectImport := client.ProjectImport(nil)
fmt.Println(projectImport.GetName()) // "project_import"
```

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ProjectImport(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ProjectImportEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ProjectImportEntityEntity

```go
projectImportEntity := client.ProjectImportEntity(nil)
fmt.Println(projectImportEntity.GetName()) // "project_import_entity"
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

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ProjectImportEntity(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ProjectImportEntityEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ProjectPackageEntity

```go
projectPackage := client.ProjectPackage(nil)
fmt.Println(projectPackage.GetName()) // "project_package"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.ProjectPackage(nil).Remove(map[string]any{"id": "id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ProjectPackageEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ProjectSnippetEntity

```go
projectSnippet := client.ProjectSnippet(nil)
fmt.Println(projectSnippet.GetName()) // "project_snippet"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.ProjectSnippet(nil).Remove(map[string]any{"id": "id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ProjectSnippetEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ProjectsJobTokenScopeEntity

```go
projectsJobTokenScope := client.ProjectsJobTokenScope(nil)
fmt.Println(projectsJobTokenScope.GetName()) // "projects_job_token_scope"
```

### Operations

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ProjectsJobTokenScope(nil).Update(map[string]any{
    "project_id": "project_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.ProjectsJobTokenScope(nil).Remove(map[string]any{"project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ProjectsJobTokenScopeEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ProtectedTagEntity

```go
protectedTag := client.ProtectedTag(nil)
fmt.Println(protectedTag.GetName()) // "protected_tag"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.ProtectedTag(nil).Remove(map[string]any{"id": "id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ProtectedTagEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PypiEntity

```go
pypi := client.Pypi(nil)
fmt.Println(pypi.GetName()) // "pypi"
```

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Pypi(nil).Create(map[string]any{
    "project_id": /* string */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PypiEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PypiPackageEntity

```go
pypiPackage := client.PypiPackage(nil)
fmt.Println(pypiPackage.GetName()) // "pypi_package"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.PypiPackage(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.PypiPackage(nil).Create(map[string]any{
    "project_id": /* string */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PypiPackageEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ReleaseEntity

```go
release := client.Release(nil)
fmt.Println(release.GetName()) // "release"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Release(nil).Load(map[string]any{"project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Release(nil).Remove(map[string]any{"id": "id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ReleaseEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ReleaseLinkEntity

```go
releaseLink := client.ReleaseLink(nil)
fmt.Println(releaseLink.GetName()) // "release_link"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.ReleaseLink(nil).Remove(map[string]any{"id": "id", "project_id": "project_id", "release_id": "release_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ReleaseLinkEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RemoteMirrorEntity

```go
remoteMirror := client.RemoteMirror(nil)
fmt.Println(remoteMirror.GetName()) // "remote_mirror"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.RemoteMirror(nil).Load(map[string]any{"id": "remote_mirror_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.RemoteMirror(nil).Create(map[string]any{
    "id": /* string */,
    "project_id": /* string */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.RemoteMirror(nil).Remove(map[string]any{"id": "remote_mirror_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RemoteMirrorEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RpmEntity

```go
rpm := client.Rpm(nil)
fmt.Println(rpm.GetName()) // "rpm"
```

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Rpm(nil).Create(map[string]any{
    "project_id": /* string */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RpmEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RpmPackageEntity

```go
rpmPackage := client.RpmPackage(nil)
fmt.Println(rpmPackage.GetName()) // "rpm_package"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.RpmPackage(nil).Load(map[string]any{"project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.RpmPackage(nil).Create(map[string]any{
    "project_id": /* string */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RpmPackageEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RubygemEntity

```go
rubygem := client.Rubygem(nil)
fmt.Println(rubygem.GetName()) // "rubygem"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Rubygem(nil).Load(map[string]any{"id": "rubygem_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RubygemEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RubygemPackageEntity

```go
rubygemPackage := client.RubygemPackage(nil)
fmt.Println(rubygemPackage.GetName()) // "rubygem_package"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.RubygemPackage(nil).Load(map[string]any{"project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.RubygemPackage(nil).Create(map[string]any{
    "project_id": /* string */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RubygemPackageEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RunnerEntity

```go
runner := client.Runner(nil)
fmt.Println(runner.GetName()) // "runner"
```

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Runner(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Runner(nil).Remove(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RunnerEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SearchEntity

```go
search := client.Search(nil)
fmt.Println(search.GetName()) // "search"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Search(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SearchEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SecureFileEntity

```go
secureFile := client.SecureFile(nil)
fmt.Println(secureFile.GetName()) // "secure_file"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.SecureFile(nil).Load(map[string]any{"id": "secure_file_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.SecureFile(nil).Remove(map[string]any{"id": "secure_file_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SecureFileEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SlackEntity

```go
slack := client.Slack(nil)
fmt.Println(slack.GetName()) // "slack"
```

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Slack(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SlackEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SnippetEntity

```go
snippet := client.Snippet(nil)
fmt.Println(snippet.GetName()) // "snippet"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Snippet(nil).Load(map[string]any{"id": "snippet_id", "file_id": "file_id", "file_path": "file_path"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Snippet(nil).Remove(map[string]any{"id": "snippet_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SnippetEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## StarrerEntity

```go
starrer := client.Starrer(nil)
fmt.Println(starrer.GetName()) // "starrer"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_path` | `string` | No |  |
| `avatar_url` | `string` | No |  |
| `custom_attribute` | `[]any` | No |  |
| `id` | `int` | No |  |
| `locked` | `bool` | No |  |
| `name` | `string` | No |  |
| `public_email` | `string` | No |  |
| `state` | `string` | No |  |
| `username` | `string` | No |  |
| `web_url` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Starrer(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `StarrerEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SystemHookEntity

```go
systemHook := client.SystemHook(nil)
fmt.Println(systemHook.GetName()) // "system_hook"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.SystemHook(nil).Remove(map[string]any{"id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SystemHookEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TagEntity

```go
tag := client.Tag(nil)
fmt.Println(tag.GetName()) // "tag"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Tag(nil).Remove(map[string]any{"id": "id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TagEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TerraformRegistryEntity

```go
terraformRegistry := client.TerraformRegistry(nil)
fmt.Println(terraformRegistry.GetName()) // "terraform_registry"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.TerraformRegistry(nil).Load(map[string]any{"id": "terraform_registry_id", "module_system": "module_system"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.TerraformRegistry(nil).Update(map[string]any{
    "module_id": "module_id",
    "module_system": "module_system",
    "project_id": "project_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TerraformRegistryEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TerraformStateEntity

```go
terraformState := client.TerraformState(nil)
fmt.Println(terraformState.GetName()) // "terraform_state"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.TerraformState(nil).Load(map[string]any{"id": "terraform_state_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.TerraformState(nil).Create(map[string]any{
    "project_id": /* string */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.TerraformState(nil).Remove(map[string]any{"id": "terraform_state_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TerraformStateEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TestReportEntity

```go
testReport := client.TestReport(nil)
fmt.Println(testReport.GetName()) // "test_report"
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
| `test_case` | `[]any` | No |  |
| `total_count` | `int` | No |  |
| `total_time` | `int` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.TestReport(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TestReportEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TestReportSummaryEntity

```go
testReportSummary := client.TestReportSummary(nil)
fmt.Println(testReportSummary.GetName()) // "test_report_summary"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `test_suite` | `map[string]any` | No |  |
| `total` | `map[string]any` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.TestReportSummary(nil).Load(map[string]any{"pipeline_id": "pipeline_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TestReportSummaryEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TopicEntity

```go
topic := client.Topic(nil)
fmt.Println(topic.GetName()) // "topic"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Topic(nil).Remove(map[string]any{"id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TopicEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## UnleashApiEntity

```go
unleashApi := client.UnleashApi(nil)
fmt.Println(unleashApi.GetName()) // "unleash_api"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.UnleashApi(nil).Load(map[string]any{"unleash_id": "unleash_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `UnleashApiEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## UsageDataEntity

```go
usageData := client.UsageData(nil)
fmt.Println(usageData.GetName()) // "usage_data"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.UsageData(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.UsageData(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `UsageDataEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## UserEntity

```go
user := client.User(nil)
fmt.Println(user.GetName()) // "user"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_path` | `string` | No |  |
| `avatar_url` | `string` | No |  |
| `custom_attribute` | `[]any` | No |  |
| `id` | `int` | No |  |
| `locked` | `bool` | No |  |
| `name` | `string` | No |  |
| `public_email` | `string` | No |  |
| `state` | `string` | No |  |
| `username` | `string` | No |  |
| `web_url` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.User(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `UserEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WebCommitEntity

```go
webCommit := client.WebCommit(nil)
fmt.Println(webCommit.GetName()) // "web_commit"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.WebCommit(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WebCommitEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WikiEntity

```go
wiki := client.Wiki(nil)
fmt.Println(wiki.GetName()) // "wiki"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Wiki(nil).Remove(map[string]any{"id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WikiEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```go
client := sdk.NewGitlabSDK(map[string]any{
    "feature": map[string]any{
        "test": map[string]any{"active": true},
    },
})
```

