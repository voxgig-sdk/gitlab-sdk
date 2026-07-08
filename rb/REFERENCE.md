# Gitlab Ruby SDK Reference

Complete API reference for the Gitlab Ruby SDK.


## GitlabSDK

### Constructor

```ruby
require_relative 'Gitlab_sdk'

client = GitlabSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["apikey"]` | `String` | API key for authentication. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `GitlabSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = GitlabSDK.test
```


### Instance Methods

#### `AccessRequest(data = nil)`

Create a new `AccessRequest` entity instance. Pass `nil` for no initial data.

#### `AlertManagement(data = nil)`

Create a new `AlertManagement` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesAccessRequester(data = nil)`

Create a new `ApiEntitiesAccessRequester` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesAppearance(data = nil)`

Create a new `ApiEntitiesAppearance` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesApplication(data = nil)`

Create a new `ApiEntitiesApplication` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesApplicationStatistic(data = nil)`

Create a new `ApiEntitiesApplicationStatistic` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesApplicationWithSecret(data = nil)`

Create a new `ApiEntitiesApplicationWithSecret` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesAvatar(data = nil)`

Create a new `ApiEntitiesAvatar` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesAwardEmoji(data = nil)`

Create a new `ApiEntitiesAwardEmoji` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesBadge(data = nil)`

Create a new `ApiEntitiesBadge` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesBasicBadgeDetail(data = nil)`

Create a new `ApiEntitiesBasicBadgeDetail` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesBasicGroupDetail(data = nil)`

Create a new `ApiEntitiesBasicGroupDetail` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesBasicProjectDetail(data = nil)`

Create a new `ApiEntitiesBasicProjectDetail` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesBasicRef(data = nil)`

Create a new `ApiEntitiesBasicRef` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesBasicSuccess(data = nil)`

Create a new `ApiEntitiesBasicSuccess` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesBatchedBackgroundMigration(data = nil)`

Create a new `ApiEntitiesBatchedBackgroundMigration` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesBranch(data = nil)`

Create a new `ApiEntitiesBranch` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesBulkImport(data = nil)`

Create a new `ApiEntitiesBulkImport` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesBulkImportsEntityFailure(data = nil)`

Create a new `ApiEntitiesBulkImportsEntityFailure` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesBulkImportsExportStatus(data = nil)`

Create a new `ApiEntitiesBulkImportsExportStatus` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesChangelog(data = nil)`

Create a new `ApiEntitiesChangelog` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesCiBridge(data = nil)`

Create a new `ApiEntitiesCiBridge` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesCiCatalogResourcesVersion(data = nil)`

Create a new `ApiEntitiesCiCatalogResourcesVersion` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesCiJob(data = nil)`

Create a new `ApiEntitiesCiJob` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesCiJobBasic(data = nil)`

Create a new `ApiEntitiesCiJobBasic` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesCiJobBasicWithProject(data = nil)`

Create a new `ApiEntitiesCiJobBasicWithProject` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesCiLintResult(data = nil)`

Create a new `ApiEntitiesCiLintResult` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesCiPipeline(data = nil)`

Create a new `ApiEntitiesCiPipeline` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesCiPipelineBasic(data = nil)`

Create a new `ApiEntitiesCiPipelineBasic` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesCiPipelineSchedule(data = nil)`

Create a new `ApiEntitiesCiPipelineSchedule` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesCiPipelineScheduleDetail(data = nil)`

Create a new `ApiEntitiesCiPipelineScheduleDetail` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesCiResetTokenResult(data = nil)`

Create a new `ApiEntitiesCiResetTokenResult` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesCiResourceGroup(data = nil)`

Create a new `ApiEntitiesCiResourceGroup` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesCiRunner(data = nil)`

Create a new `ApiEntitiesCiRunner` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesCiRunnerDetail(data = nil)`

Create a new `ApiEntitiesCiRunnerDetail` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesCiRunnerManager(data = nil)`

Create a new `ApiEntitiesCiRunnerManager` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesCiRunnerRegistrationDetail(data = nil)`

Create a new `ApiEntitiesCiRunnerRegistrationDetail` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesCiSecureFile(data = nil)`

Create a new `ApiEntitiesCiSecureFile` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesCiVariable(data = nil)`

Create a new `ApiEntitiesCiVariable` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesCluster(data = nil)`

Create a new `ApiEntitiesCluster` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesClusterGroup(data = nil)`

Create a new `ApiEntitiesClusterGroup` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesClusterProject(data = nil)`

Create a new `ApiEntitiesClusterProject` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesClustersAgent(data = nil)`

Create a new `ApiEntitiesClustersAgent` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesClustersAgentToken(data = nil)`

Create a new `ApiEntitiesClustersAgentToken` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesClustersAgentTokenBasic(data = nil)`

Create a new `ApiEntitiesClustersAgentTokenBasic` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesClustersAgentTokenWithToken(data = nil)`

Create a new `ApiEntitiesClustersAgentTokenWithToken` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesCommit(data = nil)`

Create a new `ApiEntitiesCommit` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesCommitDetail(data = nil)`

Create a new `ApiEntitiesCommitDetail` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesCommitNote(data = nil)`

Create a new `ApiEntitiesCommitNote` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesCommitSequence(data = nil)`

Create a new `ApiEntitiesCommitSequence` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesCommitSignature(data = nil)`

Create a new `ApiEntitiesCommitSignature` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesCommitStatus(data = nil)`

Create a new `ApiEntitiesCommitStatus` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesCompare(data = nil)`

Create a new `ApiEntitiesCompare` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesContainerRegistryRepository(data = nil)`

Create a new `ApiEntitiesContainerRegistryRepository` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesContainerRegistryTag(data = nil)`

Create a new `ApiEntitiesContainerRegistryTag` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesContainerRegistryTagDetail(data = nil)`

Create a new `ApiEntitiesContainerRegistryTagDetail` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesContributor(data = nil)`

Create a new `ApiEntitiesContributor` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesDeployKey(data = nil)`

Create a new `ApiEntitiesDeployKey` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesDeployKeysProject(data = nil)`

Create a new `ApiEntitiesDeployKeysProject` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesDeployToken(data = nil)`

Create a new `ApiEntitiesDeployToken` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesDeployTokenWithToken(data = nil)`

Create a new `ApiEntitiesDeployTokenWithToken` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesDeployment(data = nil)`

Create a new `ApiEntitiesDeployment` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesDeploymentExtended(data = nil)`

Create a new `ApiEntitiesDeploymentExtended` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesDeploymentsApproval(data = nil)`

Create a new `ApiEntitiesDeploymentsApproval` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesDictionaryTable(data = nil)`

Create a new `ApiEntitiesDictionaryTable` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesDiff(data = nil)`

Create a new `ApiEntitiesDiff` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesDiscoveredCluster(data = nil)`

Create a new `ApiEntitiesDiscoveredCluster` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesDraftNote(data = nil)`

Create a new `ApiEntitiesDraftNote` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesEnvironment(data = nil)`

Create a new `ApiEntitiesEnvironment` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesErrorTrackingClientKey(data = nil)`

Create a new `ApiEntitiesErrorTrackingClientKey` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesErrorTrackingProjectSetting(data = nil)`

Create a new `ApiEntitiesErrorTrackingProjectSetting` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesEvent(data = nil)`

Create a new `ApiEntitiesEvent` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesFeature(data = nil)`

Create a new `ApiEntitiesFeature` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesFeatureDefinition(data = nil)`

Create a new `ApiEntitiesFeatureDefinition` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesFeatureFlag(data = nil)`

Create a new `ApiEntitiesFeatureFlag` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesFeatureFlagUserList(data = nil)`

Create a new `ApiEntitiesFeatureFlagUserList` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesFreezePeriod(data = nil)`

Create a new `ApiEntitiesFreezePeriod` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesGitlabSubscription(data = nil)`

Create a new `ApiEntitiesGitlabSubscription` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesGoModuleVersion(data = nil)`

Create a new `ApiEntitiesGoModuleVersion` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesGroup(data = nil)`

Create a new `ApiEntitiesGroup` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesGroupDetail(data = nil)`

Create a new `ApiEntitiesGroupDetail` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesHook(data = nil)`

Create a new `ApiEntitiesHook` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesIntegration(data = nil)`

Create a new `ApiEntitiesIntegration` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesIntegrationBasic(data = nil)`

Create a new `ApiEntitiesIntegrationBasic` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesInvitation(data = nil)`

Create a new `ApiEntitiesInvitation` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesIssuableTimeStat(data = nil)`

Create a new `ApiEntitiesIssuableTimeStat` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesIssue(data = nil)`

Create a new `ApiEntitiesIssue` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesIssueLink(data = nil)`

Create a new `ApiEntitiesIssueLink` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesLicense(data = nil)`

Create a new `ApiEntitiesLicense` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesMarkdown(data = nil)`

Create a new `ApiEntitiesMarkdown` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesMarkdownUploadAdmin(data = nil)`

Create a new `ApiEntitiesMarkdownUploadAdmin` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesMember(data = nil)`

Create a new `ApiEntitiesMember` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesMerge(data = nil)`

Create a new `ApiEntitiesMerge` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesMergeRequestApproval(data = nil)`

Create a new `ApiEntitiesMergeRequestApproval` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesMergeRequestBasic(data = nil)`

Create a new `ApiEntitiesMergeRequestBasic` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesMergeRequestChange(data = nil)`

Create a new `ApiEntitiesMergeRequestChange` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesMergeRequestDiff(data = nil)`

Create a new `ApiEntitiesMergeRequestDiff` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesMergeRequestDiffFull(data = nil)`

Create a new `ApiEntitiesMergeRequestDiffFull` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesMergeRequestReviewer(data = nil)`

Create a new `ApiEntitiesMergeRequestReviewer` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesMetricImage(data = nil)`

Create a new `ApiEntitiesMetricImage` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesMrNote(data = nil)`

Create a new `ApiEntitiesMrNote` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesNamespace(data = nil)`

Create a new `ApiEntitiesNamespace` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesNamespaceExistence(data = nil)`

Create a new `ApiEntitiesNamespaceExistence` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesNamespacesStorageLimitExclusion(data = nil)`

Create a new `ApiEntitiesNamespacesStorageLimitExclusion` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesNpmPackage(data = nil)`

Create a new `ApiEntitiesNpmPackage` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesNpmPackageTag(data = nil)`

Create a new `ApiEntitiesNpmPackageTag` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesNugetPackagesVersion(data = nil)`

Create a new `ApiEntitiesNugetPackagesVersion` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesNugetSearchResult(data = nil)`

Create a new `ApiEntitiesNugetSearchResult` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesNugetServiceIndex(data = nil)`

Create a new `ApiEntitiesNugetServiceIndex` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesOrganizationsOrganization(data = nil)`

Create a new `ApiEntitiesOrganizationsOrganization` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesPackage(data = nil)`

Create a new `ApiEntitiesPackage` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesPackageFile(data = nil)`

Create a new `ApiEntitiesPackageFile` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesPackagePipeline(data = nil)`

Create a new `ApiEntitiesPackagePipeline` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesPackagesConanFilesList(data = nil)`

Create a new `ApiEntitiesPackagesConanFilesList` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesPackagesConanPackageManifest(data = nil)`

Create a new `ApiEntitiesPackagesConanPackageManifest` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesPackagesConanPackageRevision(data = nil)`

Create a new `ApiEntitiesPackagesConanPackageRevision` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesPackagesConanPackageSnapshot(data = nil)`

Create a new `ApiEntitiesPackagesConanPackageSnapshot` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesPackagesConanRecipeManifest(data = nil)`

Create a new `ApiEntitiesPackagesConanRecipeManifest` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesPackagesConanRecipeRevision(data = nil)`

Create a new `ApiEntitiesPackagesConanRecipeRevision` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesPackagesConanRecipeSnapshot(data = nil)`

Create a new `ApiEntitiesPackagesConanRecipeSnapshot` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesPackagesConanRevision(data = nil)`

Create a new `ApiEntitiesPackagesConanRevision` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesPackagesConanUploadUrl(data = nil)`

Create a new `ApiEntitiesPackagesConanUploadUrl` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesPackagesDebianDistribution(data = nil)`

Create a new `ApiEntitiesPackagesDebianDistribution` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesPagesDomain(data = nil)`

Create a new `ApiEntitiesPagesDomain` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesPagesDomainBasic(data = nil)`

Create a new `ApiEntitiesPagesDomainBasic` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesPersonalAccessToken(data = nil)`

Create a new `ApiEntitiesPersonalAccessToken` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesPersonalAccessTokenWithLastUsedIp(data = nil)`

Create a new `ApiEntitiesPersonalAccessTokenWithLastUsedIp` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesPersonalAccessTokenWithToken(data = nil)`

Create a new `ApiEntitiesPersonalAccessTokenWithToken` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesPersonalSnippet(data = nil)`

Create a new `ApiEntitiesPersonalSnippet` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesPlanLimit(data = nil)`

Create a new `ApiEntitiesPlanLimit` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesProject(data = nil)`

Create a new `ApiEntitiesProject` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesProjectDailyStatistic(data = nil)`

Create a new `ApiEntitiesProjectDailyStatistic` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesProjectExportStatus(data = nil)`

Create a new `ApiEntitiesProjectExportStatus` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesProjectGroupLink(data = nil)`

Create a new `ApiEntitiesProjectGroupLink` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesProjectHook(data = nil)`

Create a new `ApiEntitiesProjectHook` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesProjectImportStatus(data = nil)`

Create a new `ApiEntitiesProjectImportStatus` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesProjectJobTokenScope(data = nil)`

Create a new `ApiEntitiesProjectJobTokenScope` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesProjectRepositoryStorage(data = nil)`

Create a new `ApiEntitiesProjectRepositoryStorage` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesProjectSnippet(data = nil)`

Create a new `ApiEntitiesProjectSnippet` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesProjectUpload(data = nil)`

Create a new `ApiEntitiesProjectUpload` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesProjectWithAccess(data = nil)`

Create a new `ApiEntitiesProjectWithAccess` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesProjectsContainerRegistryProtectionRule(data = nil)`

Create a new `ApiEntitiesProjectsContainerRegistryProtectionRule` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesProjectsPackagesProtectionRule(data = nil)`

Create a new `ApiEntitiesProjectsPackagesProtectionRule` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesProjectsTopic(data = nil)`

Create a new `ApiEntitiesProjectsTopic` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesProtectedBranch(data = nil)`

Create a new `ApiEntitiesProtectedBranch` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesProtectedTag(data = nil)`

Create a new `ApiEntitiesProtectedTag` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesPublicGroupDetail(data = nil)`

Create a new `ApiEntitiesPublicGroupDetail` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesRelatedIssue(data = nil)`

Create a new `ApiEntitiesRelatedIssue` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesRelationImportTracker(data = nil)`

Create a new `ApiEntitiesRelationImportTracker` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesRelease(data = nil)`

Create a new `ApiEntitiesRelease` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesReleasesLink(data = nil)`

Create a new `ApiEntitiesReleasesLink` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesRemoteMirror(data = nil)`

Create a new `ApiEntitiesRemoteMirror` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesRepositoryHealth(data = nil)`

Create a new `ApiEntitiesRepositoryHealth` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesResourceAccessTokenWithToken(data = nil)`

Create a new `ApiEntitiesResourceAccessTokenWithToken` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesResourceMilestoneEvent(data = nil)`

Create a new `ApiEntitiesResourceMilestoneEvent` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesSnippet(data = nil)`

Create a new `ApiEntitiesSnippet` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesSshKeyWithUser(data = nil)`

Create a new `ApiEntitiesSshKeyWithUser` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesSuggestion(data = nil)`

Create a new `ApiEntitiesSuggestion` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesSystemBroadcastMessage(data = nil)`

Create a new `ApiEntitiesSystemBroadcastMessage` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesTag(data = nil)`

Create a new `ApiEntitiesTag` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesTagSignature(data = nil)`

Create a new `ApiEntitiesTagSignature` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesTemplatesList(data = nil)`

Create a new `ApiEntitiesTemplatesList` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesTerraformModuleVersion(data = nil)`

Create a new `ApiEntitiesTerraformModuleVersion` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesTreeObject(data = nil)`

Create a new `ApiEntitiesTreeObject` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesTrigger(data = nil)`

Create a new `ApiEntitiesTrigger` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesUserAgentDetail(data = nil)`

Create a new `ApiEntitiesUserAgentDetail` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesUserCount(data = nil)`

Create a new `ApiEntitiesUserCount` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesUserPublic(data = nil)`

Create a new `ApiEntitiesUserPublic` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesUserWithAdmin(data = nil)`

Create a new `ApiEntitiesUserWithAdmin` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesWikiAttachment(data = nil)`

Create a new `ApiEntitiesWikiAttachment` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesWikiPage(data = nil)`

Create a new `ApiEntitiesWikiPage` entity instance. Pass `nil` for no initial data.

#### `ApiEntitiesWikiPageBasic(data = nil)`

Create a new `ApiEntitiesWikiPageBasic` entity instance. Pass `nil` for no initial data.

#### `Application(data = nil)`

Create a new `Application` entity instance. Pass `nil` for no initial data.

#### `AwardEmoji(data = nil)`

Create a new `AwardEmoji` entity instance. Pass `nil` for no initial data.

#### `Badge(data = nil)`

Create a new `Badge` entity instance. Pass `nil` for no initial data.

#### `Branch(data = nil)`

Create a new `Branch` entity instance. Pass `nil` for no initial data.

#### `CargoPackage(data = nil)`

Create a new `CargoPackage` entity instance. Pass `nil` for no initial data.

#### `CiVariable(data = nil)`

Create a new `CiVariable` entity instance. Pass `nil` for no initial data.

#### `Cluster(data = nil)`

Create a new `Cluster` entity instance. Pass `nil` for no initial data.

#### `ClusterAgent(data = nil)`

Create a new `ClusterAgent` entity instance. Pass `nil` for no initial data.

#### `Composer(data = nil)`

Create a new `Composer` entity instance. Pass `nil` for no initial data.

#### `ComposerPackage(data = nil)`

Create a new `ComposerPackage` entity instance. Pass `nil` for no initial data.

#### `Conan(data = nil)`

Create a new `Conan` entity instance. Pass `nil` for no initial data.

#### `ConanPackage(data = nil)`

Create a new `ConanPackage` entity instance. Pass `nil` for no initial data.

#### `ContainerRegistry(data = nil)`

Create a new `ContainerRegistry` entity instance. Pass `nil` for no initial data.

#### `ContainerRegistryEvent(data = nil)`

Create a new `ContainerRegistryEvent` entity instance. Pass `nil` for no initial data.

#### `CustomAttribute(data = nil)`

Create a new `CustomAttribute` entity instance. Pass `nil` for no initial data.

#### `Debian(data = nil)`

Create a new `Debian` entity instance. Pass `nil` for no initial data.

#### `DebianDistribution(data = nil)`

Create a new `DebianDistribution` entity instance. Pass `nil` for no initial data.

#### `DebianPackage(data = nil)`

Create a new `DebianPackage` entity instance. Pass `nil` for no initial data.

#### `DependencyProxy(data = nil)`

Create a new `DependencyProxy` entity instance. Pass `nil` for no initial data.

#### `DeployKey(data = nil)`

Create a new `DeployKey` entity instance. Pass `nil` for no initial data.

#### `DeployToken(data = nil)`

Create a new `DeployToken` entity instance. Pass `nil` for no initial data.

#### `Deployment(data = nil)`

Create a new `Deployment` entity instance. Pass `nil` for no initial data.

#### `EeApiEntitiesApprovalState(data = nil)`

Create a new `EeApiEntitiesApprovalState` entity instance. Pass `nil` for no initial data.

#### `EeApiEntitiesAuditEvent(data = nil)`

Create a new `EeApiEntitiesAuditEvent` entity instance. Pass `nil` for no initial data.

#### `EeApiEntitiesBillableMembership(data = nil)`

Create a new `EeApiEntitiesBillableMembership` entity instance. Pass `nil` for no initial data.

#### `EeApiEntitiesGeoNodeStatus(data = nil)`

Create a new `EeApiEntitiesGeoNodeStatus` entity instance. Pass `nil` for no initial data.

#### `EeApiEntitiesGeoPipelineRef(data = nil)`

Create a new `EeApiEntitiesGeoPipelineRef` entity instance. Pass `nil` for no initial data.

#### `EeApiEntitiesIssuableMetricImage(data = nil)`

Create a new `EeApiEntitiesIssuableMetricImage` entity instance. Pass `nil` for no initial data.

#### `EeApiEntitiesMergeRequestApprovalState(data = nil)`

Create a new `EeApiEntitiesMergeRequestApprovalState` entity instance. Pass `nil` for no initial data.

#### `EeApiEntitiesSshCertificate(data = nil)`

Create a new `EeApiEntitiesSshCertificate` entity instance. Pass `nil` for no initial data.

#### `Environment(data = nil)`

Create a new `Environment` entity instance. Pass `nil` for no initial data.

#### `ErrorTrackingClientKey(data = nil)`

Create a new `ErrorTrackingClientKey` entity instance. Pass `nil` for no initial data.

#### `Feature(data = nil)`

Create a new `Feature` entity instance. Pass `nil` for no initial data.

#### `FeatureFlag(data = nil)`

Create a new `FeatureFlag` entity instance. Pass `nil` for no initial data.

#### `FeatureFlagsUserList(data = nil)`

Create a new `FeatureFlagsUserList` entity instance. Pass `nil` for no initial data.

#### `FreezePeriod(data = nil)`

Create a new `FreezePeriod` entity instance. Pass `nil` for no initial data.

#### `GenericPackage(data = nil)`

Create a new `GenericPackage` entity instance. Pass `nil` for no initial data.

#### `Geo(data = nil)`

Create a new `Geo` entity instance. Pass `nil` for no initial data.

#### `GoProxy(data = nil)`

Create a new `GoProxy` entity instance. Pass `nil` for no initial data.

#### `Group(data = nil)`

Create a new `Group` entity instance. Pass `nil` for no initial data.

#### `GroupAvatar(data = nil)`

Create a new `GroupAvatar` entity instance. Pass `nil` for no initial data.

#### `GroupExport(data = nil)`

Create a new `GroupExport` entity instance. Pass `nil` for no initial data.

#### `GroupImport(data = nil)`

Create a new `GroupImport` entity instance. Pass `nil` for no initial data.

#### `HelmPackage(data = nil)`

Create a new `HelmPackage` entity instance. Pass `nil` for no initial data.

#### `Hook(data = nil)`

Create a new `Hook` entity instance. Pass `nil` for no initial data.

#### `Import(data = nil)`

Create a new `Import` entity instance. Pass `nil` for no initial data.

#### `Integration(data = nil)`

Create a new `Integration` entity instance. Pass `nil` for no initial data.

#### `Invitation(data = nil)`

Create a new `Invitation` entity instance. Pass `nil` for no initial data.

#### `IssueLink(data = nil)`

Create a new `IssueLink` entity instance. Pass `nil` for no initial data.

#### `IssuesStatistic(data = nil)`

Create a new `IssuesStatistic` entity instance. Pass `nil` for no initial data.

#### `Job(data = nil)`

Create a new `Job` entity instance. Pass `nil` for no initial data.

#### `MavenPackage(data = nil)`

Create a new `MavenPackage` entity instance. Pass `nil` for no initial data.

#### `Member(data = nil)`

Create a new `Member` entity instance. Pass `nil` for no initial data.

#### `MergeRequest(data = nil)`

Create a new `MergeRequest` entity instance. Pass `nil` for no initial data.

#### `Metadata(data = nil)`

Create a new `Metadata` entity instance. Pass `nil` for no initial data.

#### `Migration(data = nil)`

Create a new `Migration` entity instance. Pass `nil` for no initial data.

#### `MlModelRegistry(data = nil)`

Create a new `MlModelRegistry` entity instance. Pass `nil` for no initial data.

#### `Namespace(data = nil)`

Create a new `Namespace` entity instance. Pass `nil` for no initial data.

#### `Npm(data = nil)`

Create a new `Npm` entity instance. Pass `nil` for no initial data.

#### `NpmPackage(data = nil)`

Create a new `NpmPackage` entity instance. Pass `nil` for no initial data.

#### `Nuget(data = nil)`

Create a new `Nuget` entity instance. Pass `nil` for no initial data.

#### `NugetPackage(data = nil)`

Create a new `NugetPackage` entity instance. Pass `nil` for no initial data.

#### `PackageFile(data = nil)`

Create a new `PackageFile` entity instance. Pass `nil` for no initial data.

#### `Page(data = nil)`

Create a new `Page` entity instance. Pass `nil` for no initial data.

#### `Participant(data = nil)`

Create a new `Participant` entity instance. Pass `nil` for no initial data.

#### `PersonalAccessToken(data = nil)`

Create a new `PersonalAccessToken` entity instance. Pass `nil` for no initial data.

#### `Project(data = nil)`

Create a new `Project` entity instance. Pass `nil` for no initial data.

#### `ProjectAvatar(data = nil)`

Create a new `ProjectAvatar` entity instance. Pass `nil` for no initial data.

#### `ProjectEntity(data = nil)`

Create a new `ProjectEntity` entity instance. Pass `nil` for no initial data.

#### `ProjectExport(data = nil)`

Create a new `ProjectExport` entity instance. Pass `nil` for no initial data.

#### `ProjectHook(data = nil)`

Create a new `ProjectHook` entity instance. Pass `nil` for no initial data.

#### `ProjectImport(data = nil)`

Create a new `ProjectImport` entity instance. Pass `nil` for no initial data.

#### `ProjectImportEntity(data = nil)`

Create a new `ProjectImportEntity` entity instance. Pass `nil` for no initial data.

#### `ProjectPackage(data = nil)`

Create a new `ProjectPackage` entity instance. Pass `nil` for no initial data.

#### `ProjectSnippet(data = nil)`

Create a new `ProjectSnippet` entity instance. Pass `nil` for no initial data.

#### `ProjectsJobTokenScope(data = nil)`

Create a new `ProjectsJobTokenScope` entity instance. Pass `nil` for no initial data.

#### `ProtectedTag(data = nil)`

Create a new `ProtectedTag` entity instance. Pass `nil` for no initial data.

#### `Pypi(data = nil)`

Create a new `Pypi` entity instance. Pass `nil` for no initial data.

#### `PypiPackage(data = nil)`

Create a new `PypiPackage` entity instance. Pass `nil` for no initial data.

#### `Release(data = nil)`

Create a new `Release` entity instance. Pass `nil` for no initial data.

#### `ReleaseLink(data = nil)`

Create a new `ReleaseLink` entity instance. Pass `nil` for no initial data.

#### `RemoteMirror(data = nil)`

Create a new `RemoteMirror` entity instance. Pass `nil` for no initial data.

#### `Rpm(data = nil)`

Create a new `Rpm` entity instance. Pass `nil` for no initial data.

#### `RpmPackage(data = nil)`

Create a new `RpmPackage` entity instance. Pass `nil` for no initial data.

#### `Rubygem(data = nil)`

Create a new `Rubygem` entity instance. Pass `nil` for no initial data.

#### `RubygemPackage(data = nil)`

Create a new `RubygemPackage` entity instance. Pass `nil` for no initial data.

#### `Runner(data = nil)`

Create a new `Runner` entity instance. Pass `nil` for no initial data.

#### `Search(data = nil)`

Create a new `Search` entity instance. Pass `nil` for no initial data.

#### `SecureFile(data = nil)`

Create a new `SecureFile` entity instance. Pass `nil` for no initial data.

#### `Slack(data = nil)`

Create a new `Slack` entity instance. Pass `nil` for no initial data.

#### `Snippet(data = nil)`

Create a new `Snippet` entity instance. Pass `nil` for no initial data.

#### `Starrer(data = nil)`

Create a new `Starrer` entity instance. Pass `nil` for no initial data.

#### `SystemHook(data = nil)`

Create a new `SystemHook` entity instance. Pass `nil` for no initial data.

#### `Tag(data = nil)`

Create a new `Tag` entity instance. Pass `nil` for no initial data.

#### `TerraformRegistry(data = nil)`

Create a new `TerraformRegistry` entity instance. Pass `nil` for no initial data.

#### `TerraformState(data = nil)`

Create a new `TerraformState` entity instance. Pass `nil` for no initial data.

#### `TestReport(data = nil)`

Create a new `TestReport` entity instance. Pass `nil` for no initial data.

#### `TestReportSummary(data = nil)`

Create a new `TestReportSummary` entity instance. Pass `nil` for no initial data.

#### `Topic(data = nil)`

Create a new `Topic` entity instance. Pass `nil` for no initial data.

#### `UnleashApi(data = nil)`

Create a new `UnleashApi` entity instance. Pass `nil` for no initial data.

#### `UsageData(data = nil)`

Create a new `UsageData` entity instance. Pass `nil` for no initial data.

#### `User(data = nil)`

Create a new `User` entity instance. Pass `nil` for no initial data.

#### `WebCommit(data = nil)`

Create a new `WebCommit` entity instance. Pass `nil` for no initial data.

#### `Wiki(data = nil)`

Create a new `Wiki` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash`

Make a direct HTTP request to any API endpoint. Returns a result hash
(`{ "ok" => ..., "status" => ..., "data" => ..., "err" => ... }`); it
does not raise — inspect `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash`

#### `prepare(fetchargs = {}) -> Hash`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`. Raises on error.

**Returns:** `Hash` (the fetch definition; raises on error)


---

## AccessRequestEntity

```ruby
access_request = client.AccessRequest
```

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.AccessRequest.remove({ "id" => "id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AccessRequestEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AlertManagementEntity

```ruby
alert_management = client.AlertManagement
```

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.AlertManagement.create({
  "alert_management_alert_id" => "example_alert_management_alert_id", # String
  "project_id" => "example_project_id", # String
})
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.AlertManagement.remove({ "alert_management_alert_id" => "alert_management_alert_id", "metric_image_id" => "metric_image_id", "project_id" => "project_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AlertManagementEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesAccessRequesterEntity

```ruby
api_entities_access_requester = client.ApiEntitiesAccessRequester
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_path` | `String` | No |  |
| `avatar_url` | `String` | No |  |
| `custom_attribute` | `Array` | No |  |
| `id` | `Integer` | No |  |
| `key` | `String` | No |  |
| `locked` | `Boolean` | No |  |
| `name` | `String` | No |  |
| `public_email` | `String` | No |  |
| `requested_at` | `String` | No |  |
| `state` | `String` | No |  |
| `username` | `String` | No |  |
| `value` | `String` | No |  |
| `web_url` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ApiEntitiesAccessRequester.create({
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiEntitiesAccessRequester.list
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ApiEntitiesAccessRequester.update({
  "access_request_id" => "access_request_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesAccessRequesterEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesAppearanceEntity

```ruby
api_entities_appearance = client.ApiEntitiesAppearance
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `String` | No |  |
| `email_header_and_footer_enabled` | `String` | No |  |
| `favicon` | `String` | No |  |
| `footer_message` | `String` | No |  |
| `header_logo` | `String` | No |  |
| `header_message` | `String` | No |  |
| `logo` | `String` | No |  |
| `member_guideline` | `String` | No |  |
| `message_background_color` | `String` | No |  |
| `message_font_color` | `String` | No |  |
| `new_project_guideline` | `String` | No |  |
| `profile_image_guideline` | `String` | No |  |
| `pwa_description` | `String` | No |  |
| `pwa_icon` | `String` | No |  |
| `pwa_name` | `String` | No |  |
| `pwa_short_name` | `String` | No |  |
| `title` | `String` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesAppearance.load()
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ApiEntitiesAppearance.update({
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesAppearanceEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesApplicationEntity

```ruby
api_entities_application = client.ApiEntitiesApplication
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `application_id` | `String` | No |  |
| `application_name` | `String` | No |  |
| `callback_url` | `String` | No |  |
| `confidential` | `Boolean` | No |  |
| `id` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiEntitiesApplication.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesApplicationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesApplicationStatisticEntity

```ruby
api_entities_application_statistic = client.ApiEntitiesApplicationStatistic
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_user` | `Integer` | No |  |
| `fork` | `Integer` | No |  |
| `group` | `Integer` | No |  |
| `issue` | `Integer` | No |  |
| `merge_request` | `Integer` | No |  |
| `milestone` | `Integer` | No |  |
| `note` | `Integer` | No |  |
| `project` | `Integer` | No |  |
| `snippet` | `Integer` | No |  |
| `ssh_key` | `Integer` | No |  |
| `user` | `Integer` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesApplicationStatistic.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesApplicationStatisticEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesApplicationWithSecretEntity

```ruby
api_entities_application_with_secret = client.ApiEntitiesApplicationWithSecret
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `application_id` | `String` | No |  |
| `application_name` | `String` | No |  |
| `callback_url` | `String` | No |  |
| `confidential` | `Boolean` | No |  |
| `id` | `String` | No |  |
| `secret` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ApiEntitiesApplicationWithSecret.create({
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesApplicationWithSecretEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesAvatarEntity

```ruby
api_entities_avatar = client.ApiEntitiesAvatar
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_url` | `String` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesAvatar.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesAvatarEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesAwardEmojiEntity

```ruby
api_entities_award_emoji = client.ApiEntitiesAwardEmoji
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `awardable_id` | `Integer` | No |  |
| `awardable_type` | `String` | No |  |
| `created_at` | `String` | No |  |
| `id` | `Integer` | No |  |
| `name` | `String` | No |  |
| `updated_at` | `String` | No |  |
| `url` | `String` | No |  |
| `user` | `Hash` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ApiEntitiesAwardEmoji.create({
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiEntitiesAwardEmoji.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesAwardEmoji.load({ "id" => "api_entities_award_emoji_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesAwardEmojiEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesBadgeEntity

```ruby
api_entities_badge = client.ApiEntitiesBadge
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |
| `image_url` | `String` | No |  |
| `kind` | `String` | No |  |
| `link_url` | `String` | No |  |
| `name` | `String` | No |  |
| `rendered_image_url` | `String` | No |  |
| `rendered_link_url` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ApiEntitiesBadge.create({
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiEntitiesBadge.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesBadge.load({ "id" => "api_entities_badge_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ApiEntitiesBadge.update({
  "id" => "api_entities_badge_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesBadgeEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesBasicBadgeDetailEntity

```ruby
api_entities_basic_badge_detail = client.ApiEntitiesBasicBadgeDetail
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `image_url` | `String` | No |  |
| `link_url` | `String` | No |  |
| `name` | `String` | No |  |
| `rendered_image_url` | `String` | No |  |
| `rendered_link_url` | `String` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesBasicBadgeDetail.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesBasicBadgeDetailEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesBasicGroupDetailEntity

```ruby
api_entities_basic_group_detail = client.ApiEntitiesBasicGroupDetail
```

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ApiEntitiesBasicGroupDetail.create({
  "project_id" => "example_project_id", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesBasicGroupDetailEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesBasicProjectDetailEntity

```ruby
api_entities_basic_project_detail = client.ApiEntitiesBasicProjectDetail
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_url` | `String` | No |  |
| `created_at` | `String` | No |  |
| `custom_attribute` | `Hash` | No |  |
| `default_branch` | `String` | No |  |
| `description` | `String` | No |  |
| `forks_count` | `Integer` | No |  |
| `http_url_to_repo` | `String` | No |  |
| `id` | `Integer` | No |  |
| `last_activity_at` | `String` | No |  |
| `license` | `Hash` | No |  |
| `license_url` | `String` | No |  |
| `name` | `String` | No |  |
| `name_with_namespace` | `String` | No |  |
| `namespace` | `Hash` | No |  |
| `path` | `String` | No |  |
| `path_with_namespace` | `String` | No |  |
| `readme_url` | `String` | No |  |
| `repository_storage` | `String` | No |  |
| `ssh_url_to_repo` | `String` | No |  |
| `star_count` | `Integer` | No |  |
| `tag_list` | `Array` | No |  |
| `topic` | `Array` | No |  |
| `visibility` | `String` | No |  |
| `web_url` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ApiEntitiesBasicProjectDetail.create({
  "project_id" => "example_project_id", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiEntitiesBasicProjectDetail.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesBasicProjectDetailEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesBasicRefEntity

```ruby
api_entities_basic_ref = client.ApiEntitiesBasicRef
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `String` | No |  |
| `type` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiEntitiesBasicRef.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesBasicRefEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesBasicSuccessEntity

```ruby
api_entities_basic_success = client.ApiEntitiesBasicSuccess
```

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ApiEntitiesBasicSuccess.create({
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesBasicSuccessEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesBatchedBackgroundMigrationEntity

```ruby
api_entities_batched_background_migration = client.ApiEntitiesBatchedBackgroundMigration
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `column_name` | `String` | No |  |
| `created_at` | `String` | No |  |
| `id` | `String` | No |  |
| `job_class_name` | `String` | No |  |
| `progress` | `Float` | No |  |
| `status` | `String` | No |  |
| `table_name` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiEntitiesBatchedBackgroundMigration.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesBatchedBackgroundMigration.load({ "id" => "api_entities_batched_background_migration_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ApiEntitiesBatchedBackgroundMigration.update({
  "batched_background_migration_id" => "batched_background_migration_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesBatchedBackgroundMigrationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesBranchEntity

```ruby
api_entities_branch = client.ApiEntitiesBranch
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `can_push` | `Boolean` | No |  |
| `commit` | `Hash` | No |  |
| `default` | `Boolean` | No |  |
| `developers_can_merge` | `Boolean` | No |  |
| `developers_can_push` | `Boolean` | No |  |
| `merged` | `Boolean` | No |  |
| `name` | `String` | No |  |
| `protected` | `Boolean` | No |  |
| `web_url` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ApiEntitiesBranch.create({
  "project_id" => "example_project_id", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiEntitiesBranch.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesBranch.load({ "id" => "api_entities_branch_id", "project_id" => "project_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ApiEntitiesBranch.update({
  "branch_id" => "branch_id",
  "project_id" => "project_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesBranchEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesBulkImportEntity

```ruby
api_entities_bulk_import = client.ApiEntitiesBulkImport
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bulk_import_id` | `Integer` | No |  |
| `created_at` | `String` | No |  |
| `destination_full_path` | `String` | No |  |
| `destination_name` | `String` | No |  |
| `destination_namespace` | `String` | No |  |
| `destination_slug` | `String` | No |  |
| `entity_type` | `String` | No |  |
| `failure` | `Array` | No |  |
| `has_failure` | `Boolean` | No |  |
| `id` | `Integer` | No |  |
| `migrate_membership` | `Boolean` | No |  |
| `migrate_project` | `Boolean` | No |  |
| `namespace_id` | `Integer` | No |  |
| `parent_id` | `Integer` | No |  |
| `project_id` | `Integer` | No |  |
| `source_full_path` | `String` | No |  |
| `source_type` | `String` | No |  |
| `source_url` | `String` | No |  |
| `stat` | `Hash` | No |  |
| `status` | `String` | No |  |
| `updated_at` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ApiEntitiesBulkImport.create({
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiEntitiesBulkImport.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesBulkImport.load({ "id" => "api_entities_bulk_import_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesBulkImportEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesBulkImportsEntityFailureEntity

```ruby
api_entities_bulk_imports_entity_failure = client.ApiEntitiesBulkImportsEntityFailure
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `correlation_id_value` | `String` | No |  |
| `exception_class` | `String` | No |  |
| `exception_message` | `String` | No |  |
| `relation` | `String` | No |  |
| `source_title` | `String` | No |  |
| `source_url` | `String` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesBulkImportsEntityFailure.load({ "bulk_import_id" => "bulk_import_id", "entity_id" => "entity_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesBulkImportsEntityFailureEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesBulkImportsExportStatusEntity

```ruby
api_entities_bulk_imports_export_status = client.ApiEntitiesBulkImportsExportStatus
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `batch` | `Hash` | No |  |
| `batched` | `Boolean` | No |  |
| `batches_count` | `Integer` | No |  |
| `error` | `String` | No |  |
| `relation` | `String` | No |  |
| `status` | `String` | No |  |
| `total_objects_count` | `Integer` | No |  |
| `updated_at` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiEntitiesBulkImportsExportStatus.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesBulkImportsExportStatusEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesChangelogEntity

```ruby
api_entities_changelog = client.ApiEntitiesChangelog
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `note` | `String` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesChangelog.load({ "project_id" => "project_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesChangelogEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesCiBridgeEntity

```ruby
api_entities_ci_bridge = client.ApiEntitiesCiBridge
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_failure` | `Boolean` | No |  |
| `commit` | `Hash` | No |  |
| `coverage` | `Float` | No |  |
| `created_at` | `String` | No |  |
| `downstream_pipeline` | `Hash` | No |  |
| `duration` | `Float` | No |  |
| `erased_at` | `String` | No |  |
| `failure_reason` | `String` | No |  |
| `finished_at` | `String` | No |  |
| `id` | `Integer` | No |  |
| `name` | `String` | No |  |
| `pipeline` | `Hash` | No |  |
| `project` | `Hash` | No |  |
| `queued_duration` | `Float` | No |  |
| `ref` | `String` | No |  |
| `stage` | `String` | No |  |
| `started_at` | `String` | No |  |
| `status` | `String` | No |  |
| `tag` | `Boolean` | No |  |
| `user` | `Hash` | No |  |
| `web_url` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiEntitiesCiBridge.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesCiBridgeEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesCiCatalogResourcesVersionEntity

```ruby
api_entities_ci_catalog_resources_version = client.ApiEntitiesCiCatalogResourcesVersion
```

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ApiEntitiesCiCatalogResourcesVersion.create({
  "project_id" => "example_project_id", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesCiCatalogResourcesVersionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesCiJobEntity

```ruby
api_entities_ci_job = client.ApiEntitiesCiJob
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_failure` | `Boolean` | No |  |
| `archived` | `Boolean` | No |  |
| `artifact` | `Array` | No |  |
| `artifacts_expire_at` | `String` | No |  |
| `artifacts_file` | `Hash` | No |  |
| `commit` | `Hash` | No |  |
| `coverage` | `Float` | No |  |
| `created_at` | `String` | No |  |
| `duration` | `Float` | No |  |
| `erased_at` | `String` | No |  |
| `failure_reason` | `String` | No |  |
| `file_format` | `String` | No |  |
| `file_type` | `String` | No |  |
| `filename` | `String` | No |  |
| `finished_at` | `String` | No |  |
| `id` | `Integer` | No |  |
| `name` | `String` | No |  |
| `pipeline` | `Hash` | No |  |
| `project` | `Hash` | No |  |
| `queued_duration` | `Float` | No |  |
| `ref` | `String` | No |  |
| `runner` | `Hash` | No |  |
| `runner_manager` | `Hash` | No |  |
| `size` | `Integer` | No |  |
| `stage` | `String` | No |  |
| `started_at` | `String` | No |  |
| `status` | `String` | No |  |
| `tag` | `Boolean` | No |  |
| `tag_list` | `Array` | No |  |
| `user` | `Hash` | No |  |
| `web_url` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ApiEntitiesCiJob.create({
  "job_id" => "example_job_id", # String
  "project_id" => "example_project_id", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiEntitiesCiJob.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesCiJob.load({ "id" => "api_entities_ci_job_id", "project_id" => "project_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesCiJobEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesCiJobBasicEntity

```ruby
api_entities_ci_job_basic = client.ApiEntitiesCiJobBasic
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_failure` | `Boolean` | No |  |
| `commit` | `Hash` | No |  |
| `coverage` | `Float` | No |  |
| `created_at` | `String` | No |  |
| `duration` | `Float` | No |  |
| `erased_at` | `String` | No |  |
| `failure_reason` | `String` | No |  |
| `finished_at` | `String` | No |  |
| `id` | `Integer` | No |  |
| `name` | `String` | No |  |
| `pipeline` | `Hash` | No |  |
| `project` | `Hash` | No |  |
| `queued_duration` | `Float` | No |  |
| `ref` | `String` | No |  |
| `stage` | `String` | No |  |
| `started_at` | `String` | No |  |
| `status` | `String` | No |  |
| `tag` | `Boolean` | No |  |
| `user` | `Hash` | No |  |
| `web_url` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ApiEntitiesCiJobBasic.create({
  "job_id" => "example_job_id", # String
  "project_id" => "example_project_id", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiEntitiesCiJobBasic.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesCiJobBasicEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesCiJobBasicWithProjectEntity

```ruby
api_entities_ci_job_basic_with_project = client.ApiEntitiesCiJobBasicWithProject
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_failure` | `Boolean` | No |  |
| `commit` | `Hash` | No |  |
| `coverage` | `Float` | No |  |
| `created_at` | `String` | No |  |
| `duration` | `Float` | No |  |
| `erased_at` | `String` | No |  |
| `failure_reason` | `String` | No |  |
| `finished_at` | `String` | No |  |
| `id` | `Integer` | No |  |
| `name` | `String` | No |  |
| `pipeline` | `Hash` | No |  |
| `project` | `Hash` | No |  |
| `queued_duration` | `Float` | No |  |
| `ref` | `String` | No |  |
| `stage` | `String` | No |  |
| `started_at` | `String` | No |  |
| `status` | `String` | No |  |
| `tag` | `Boolean` | No |  |
| `user` | `Hash` | No |  |
| `web_url` | `String` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesCiJobBasicWithProject.load({ "runner_id" => "runner_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesCiJobBasicWithProjectEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesCiLintResultEntity

```ruby
api_entities_ci_lint_result = client.ApiEntitiesCiLintResult
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `blob` | `String` | No |  |
| `context_project` | `String` | No |  |
| `context_sha` | `String` | No |  |
| `error` | `Array` | No |  |
| `extra` | `Hash` | No |  |
| `include` | `Array` | No |  |
| `job` | `Array` | No |  |
| `location` | `String` | No |  |
| `merged_yaml` | `String` | No |  |
| `raw` | `String` | No |  |
| `type` | `String` | No |  |
| `valid` | `Boolean` | No |  |
| `warning` | `Array` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ApiEntitiesCiLintResult.create({
  "project_id" => "example_project_id", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiEntitiesCiLintResult.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesCiLintResultEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesCiPipelineEntity

```ruby
api_entities_ci_pipeline = client.ApiEntitiesCiPipeline
```

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ApiEntitiesCiPipeline.create({
  "project_id" => "example_project_id", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesCiPipelineEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesCiPipelineBasicEntity

```ruby
api_entities_ci_pipeline_basic = client.ApiEntitiesCiPipelineBasic
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `String` | No |  |
| `id` | `Integer` | No |  |
| `iid` | `Integer` | No |  |
| `project_id` | `Integer` | No |  |
| `ref` | `String` | No |  |
| `sha` | `String` | No |  |
| `source` | `String` | No |  |
| `status` | `String` | No |  |
| `updated_at` | `String` | No |  |
| `web_url` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiEntitiesCiPipelineBasic.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesCiPipelineBasic.load({ "merge_request_id" => "merge_request_id", "project_id" => "project_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesCiPipelineBasicEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesCiPipelineScheduleEntity

```ruby
api_entities_ci_pipeline_schedule = client.ApiEntitiesCiPipelineSchedule
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `Boolean` | No |  |
| `created_at` | `String` | No |  |
| `cron` | `String` | No |  |
| `cron_timezone` | `String` | No |  |
| `description` | `String` | No |  |
| `id` | `Integer` | No |  |
| `input` | `Hash` | No |  |
| `next_run_at` | `String` | No |  |
| `owner` | `Hash` | No |  |
| `ref` | `String` | No |  |
| `updated_at` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiEntitiesCiPipelineSchedule.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesCiPipelineScheduleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesCiPipelineScheduleDetailEntity

```ruby
api_entities_ci_pipeline_schedule_detail = client.ApiEntitiesCiPipelineScheduleDetail
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `Boolean` | No |  |
| `created_at` | `String` | No |  |
| `cron` | `String` | No |  |
| `cron_timezone` | `String` | No |  |
| `description` | `String` | No |  |
| `id` | `Integer` | No |  |
| `input` | `Hash` | No |  |
| `last_pipeline` | `Hash` | No |  |
| `next_run_at` | `String` | No |  |
| `owner` | `Hash` | No |  |
| `ref` | `String` | No |  |
| `updated_at` | `String` | No |  |
| `variable` | `Hash` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ApiEntitiesCiPipelineScheduleDetail.create({
  "project_id" => "example_project_id", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesCiPipelineScheduleDetail.load({ "pipeline_schedule_id" => "pipeline_schedule_id", "project_id" => "project_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ApiEntitiesCiPipelineScheduleDetail.update({
  "pipeline_schedule_id" => "pipeline_schedule_id",
  "project_id" => "project_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesCiPipelineScheduleDetailEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesCiResetTokenResultEntity

```ruby
api_entities_ci_reset_token_result = client.ApiEntitiesCiResetTokenResult
```

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ApiEntitiesCiResetTokenResult.create({
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesCiResetTokenResultEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesCiResourceGroupEntity

```ruby
api_entities_ci_resource_group = client.ApiEntitiesCiResourceGroup
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `String` | No |  |
| `id` | `Integer` | No |  |
| `key` | `String` | No |  |
| `process_mode` | `String` | No |  |
| `updated_at` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiEntitiesCiResourceGroup.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesCiResourceGroup.load({ "id" => "api_entities_ci_resource_group_id", "project_id" => "project_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ApiEntitiesCiResourceGroup.update({
  "id" => "api_entities_ci_resource_group_id",
  "project_id" => "project_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesCiResourceGroupEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesCiRunnerEntity

```ruby
api_entities_ci_runner = client.ApiEntitiesCiRunner
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `Boolean` | No |  |
| `created_at` | `String` | No |  |
| `created_by` | `Hash` | No |  |
| `description` | `String` | No |  |
| `id` | `Integer` | No |  |
| `ip_address` | `String` | No |  |
| `is_shared` | `Boolean` | No |  |
| `job_execution_status` | `String` | No |  |
| `name` | `String` | No |  |
| `online` | `Boolean` | No |  |
| `paused` | `Boolean` | No |  |
| `runner_type` | `String` | No |  |
| `status` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ApiEntitiesCiRunner.create({
  "project_id" => "example_project_id", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesCiRunner.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesCiRunnerEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesCiRunnerDetailEntity

```ruby
api_entities_ci_runner_detail = client.ApiEntitiesCiRunnerDetail
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access_level` | `String` | No |  |
| `active` | `Boolean` | No |  |
| `architecture` | `String` | No |  |
| `contacted_at` | `String` | No |  |
| `created_at` | `String` | No |  |
| `created_by` | `Hash` | No |  |
| `description` | `String` | No |  |
| `group` | `Hash` | No |  |
| `id` | `Integer` | No |  |
| `ip_address` | `String` | No |  |
| `is_shared` | `Boolean` | No |  |
| `job_execution_status` | `String` | No |  |
| `locked` | `Boolean` | No |  |
| `maintenance_note` | `String` | No |  |
| `maximum_timeout` | `String` | No |  |
| `name` | `String` | No |  |
| `online` | `Boolean` | No |  |
| `paused` | `Boolean` | No |  |
| `platform` | `String` | No |  |
| `project` | `Hash` | No |  |
| `revision` | `String` | No |  |
| `run_untagged` | `String` | No |  |
| `runner_type` | `String` | No |  |
| `status` | `String` | No |  |
| `tag_list` | `String` | No |  |
| `version` | `String` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesCiRunnerDetail.load({ "id" => "api_entities_ci_runner_detail_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ApiEntitiesCiRunnerDetail.update({
  "id" => "api_entities_ci_runner_detail_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesCiRunnerDetailEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesCiRunnerManagerEntity

```ruby
api_entities_ci_runner_manager = client.ApiEntitiesCiRunnerManager
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `architecture` | `String` | No |  |
| `contacted_at` | `String` | No |  |
| `created_at` | `String` | No |  |
| `id` | `Integer` | No |  |
| `ip_address` | `String` | No |  |
| `job_execution_status` | `String` | No |  |
| `platform` | `String` | No |  |
| `revision` | `String` | No |  |
| `status` | `String` | No |  |
| `system_id` | `String` | No |  |
| `version` | `String` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesCiRunnerManager.load({ "runner_id" => "runner_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesCiRunnerManagerEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesCiRunnerRegistrationDetailEntity

```ruby
api_entities_ci_runner_registration_detail = client.ApiEntitiesCiRunnerRegistrationDetail
```

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ApiEntitiesCiRunnerRegistrationDetail.create({
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesCiRunnerRegistrationDetailEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesCiSecureFileEntity

```ruby
api_entities_ci_secure_file = client.ApiEntitiesCiSecureFile
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `checksum` | `String` | No |  |
| `checksum_algorithm` | `String` | No |  |
| `created_at` | `String` | No |  |
| `expires_at` | `String` | No |  |
| `file_extension` | `String` | No |  |
| `id` | `Integer` | No |  |
| `metadata` | `Hash` | No |  |
| `name` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ApiEntitiesCiSecureFile.create({
  "project_id" => "example_project_id", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesCiSecureFile.load({ "id" => "api_entities_ci_secure_file_id", "project_id" => "project_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesCiSecureFileEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesCiVariableEntity

```ruby
api_entities_ci_variable = client.ApiEntitiesCiVariable
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `String` | No |  |
| `environment_scope` | `String` | No |  |
| `hidden` | `Boolean` | No |  |
| `key` | `String` | No |  |
| `masked` | `Boolean` | No |  |
| `protected` | `Boolean` | No |  |
| `raw` | `Boolean` | No |  |
| `value` | `String` | No |  |
| `variable_type` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ApiEntitiesCiVariable.create({
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiEntitiesCiVariable.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesCiVariable.load({ "id" => "api_entities_ci_variable_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ApiEntitiesCiVariable.update({
  "id" => "api_entities_ci_variable_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesCiVariableEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesClusterEntity

```ruby
api_entities_cluster = client.ApiEntitiesCluster
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cluster_type` | `String` | No |  |
| `created_at` | `String` | No |  |
| `domain` | `String` | No |  |
| `enabled` | `Boolean` | No |  |
| `environment_scope` | `String` | No |  |
| `id` | `String` | No |  |
| `managed` | `String` | No |  |
| `management_project` | `Hash` | No |  |
| `name` | `String` | No |  |
| `namespace_per_environment` | `String` | No |  |
| `platform_kubernete` | `Hash` | No |  |
| `platform_type` | `String` | No |  |
| `provider_gcp` | `Hash` | No |  |
| `provider_type` | `String` | No |  |
| `user` | `Hash` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ApiEntitiesCluster.create({
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiEntitiesCluster.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesCluster.load({ "id" => "api_entities_cluster_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ApiEntitiesCluster.update({
  "id" => "api_entities_cluster_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesClusterEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesClusterGroupEntity

```ruby
api_entities_cluster_group = client.ApiEntitiesClusterGroup
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cluster_type` | `String` | No |  |
| `created_at` | `String` | No |  |
| `domain` | `String` | No |  |
| `enabled` | `Boolean` | No |  |
| `environment_scope` | `String` | No |  |
| `group` | `Hash` | No |  |
| `id` | `String` | No |  |
| `managed` | `String` | No |  |
| `management_project` | `Hash` | No |  |
| `name` | `String` | No |  |
| `namespace_per_environment` | `String` | No |  |
| `platform_kubernete` | `Hash` | No |  |
| `platform_type` | `String` | No |  |
| `provider_gcp` | `Hash` | No |  |
| `provider_type` | `String` | No |  |
| `user` | `Hash` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ApiEntitiesClusterGroup.create({
  "group_id" => "example_group_id", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesClusterGroup.load({ "cluster_id" => "cluster_id", "group_id" => "group_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ApiEntitiesClusterGroup.update({
  "cluster_id" => "cluster_id",
  "group_id" => "group_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesClusterGroupEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesClusterProjectEntity

```ruby
api_entities_cluster_project = client.ApiEntitiesClusterProject
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cluster_type` | `String` | No |  |
| `created_at` | `String` | No |  |
| `domain` | `String` | No |  |
| `enabled` | `Boolean` | No |  |
| `environment_scope` | `String` | No |  |
| `id` | `String` | No |  |
| `managed` | `String` | No |  |
| `management_project` | `Hash` | No |  |
| `name` | `String` | No |  |
| `namespace_per_environment` | `String` | No |  |
| `platform_kubernete` | `Hash` | No |  |
| `platform_type` | `String` | No |  |
| `project` | `Hash` | No |  |
| `provider_gcp` | `Hash` | No |  |
| `provider_type` | `String` | No |  |
| `user` | `Hash` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ApiEntitiesClusterProject.create({
  "project_id" => "example_project_id", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesClusterProject.load({ "cluster_id" => "cluster_id", "project_id" => "project_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ApiEntitiesClusterProject.update({
  "cluster_id" => "cluster_id",
  "project_id" => "project_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesClusterProjectEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesClustersAgentEntity

```ruby
api_entities_clusters_agent = client.ApiEntitiesClustersAgent
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `config_project` | `Hash` | No |  |
| `created_at` | `String` | No |  |
| `created_by_user_id` | `String` | No |  |
| `id` | `String` | No |  |
| `is_receptive` | `Boolean` | No |  |
| `name` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ApiEntitiesClustersAgent.create({
  "project_id" => "example_project_id", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesClustersAgent.load({ "project_id" => "project_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesClustersAgentEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesClustersAgentTokenEntity

```ruby
api_entities_clusters_agent_token = client.ApiEntitiesClustersAgentToken
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent_id` | `String` | No |  |
| `created_at` | `String` | No |  |
| `created_by_user_id` | `String` | No |  |
| `description` | `String` | No |  |
| `id` | `String` | No |  |
| `last_used_at` | `String` | No |  |
| `name` | `String` | No |  |
| `status` | `String` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesClustersAgentToken.load({ "id" => "api_entities_clusters_agent_token_id", "cluster_agent_id" => "cluster_agent_id", "project_id" => "project_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesClustersAgentTokenEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesClustersAgentTokenBasicEntity

```ruby
api_entities_clusters_agent_token_basic = client.ApiEntitiesClustersAgentTokenBasic
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent_id` | `String` | No |  |
| `created_at` | `String` | No |  |
| `created_by_user_id` | `String` | No |  |
| `description` | `String` | No |  |
| `id` | `String` | No |  |
| `name` | `String` | No |  |
| `status` | `String` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesClustersAgentTokenBasic.load({ "cluster_agent_id" => "cluster_agent_id", "project_id" => "project_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesClustersAgentTokenBasicEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesClustersAgentTokenWithTokenEntity

```ruby
api_entities_clusters_agent_token_with_token = client.ApiEntitiesClustersAgentTokenWithToken
```

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ApiEntitiesClustersAgentTokenWithToken.create({
  "cluster_agent_id" => "example_cluster_agent_id", # String
  "project_id" => "example_project_id", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesClustersAgentTokenWithTokenEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesCommitEntity

```ruby
api_entities_commit = client.ApiEntitiesCommit
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author_email` | `String` | No |  |
| `author_name` | `String` | No |  |
| `authored_date` | `String` | No |  |
| `committed_date` | `String` | No |  |
| `committer_email` | `String` | No |  |
| `committer_name` | `String` | No |  |
| `created_at` | `String` | No |  |
| `extended_trailer` | `Hash` | No |  |
| `id` | `String` | No |  |
| `message` | `String` | No |  |
| `parent_id` | `Array` | No |  |
| `short_id` | `String` | No |  |
| `title` | `String` | No |  |
| `trailer` | `Hash` | No |  |
| `web_url` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ApiEntitiesCommit.create({
  "project_id" => "example_project_id", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiEntitiesCommit.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesCommitEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesCommitDetailEntity

```ruby
api_entities_commit_detail = client.ApiEntitiesCommitDetail
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author_email` | `String` | No |  |
| `author_name` | `String` | No |  |
| `authored_date` | `String` | No |  |
| `committed_date` | `String` | No |  |
| `committer_email` | `String` | No |  |
| `committer_name` | `String` | No |  |
| `created_at` | `String` | No |  |
| `extended_trailer` | `Hash` | No |  |
| `id` | `String` | No |  |
| `last_pipeline` | `Hash` | No |  |
| `message` | `String` | No |  |
| `parent_id` | `Array` | No |  |
| `project_id` | `Integer` | No |  |
| `short_id` | `String` | No |  |
| `stat` | `Hash` | No |  |
| `status` | `String` | No |  |
| `title` | `String` | No |  |
| `trailer` | `Hash` | No |  |
| `web_url` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ApiEntitiesCommitDetail.create({
  "project_id" => "example_project_id", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesCommitDetail.load({ "project_id" => "project_id", "sha" => "sha" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ApiEntitiesCommitDetail.update({
  "project_id" => "project_id",
  "submodule" => "submodule",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesCommitDetailEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesCommitNoteEntity

```ruby
api_entities_commit_note = client.ApiEntitiesCommitNote
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `Hash` | No |  |
| `created_at` | `String` | No |  |
| `line` | `Integer` | No |  |
| `line_type` | `String` | No |  |
| `note` | `String` | No |  |
| `path` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ApiEntitiesCommitNote.create({
  "project_id" => "example_project_id", # String
  "sha" => "example_sha", # Object
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiEntitiesCommitNote.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesCommitNoteEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesCommitSequenceEntity

```ruby
api_entities_commit_sequence = client.ApiEntitiesCommitSequence
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `Integer` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesCommitSequence.load({ "project_id" => "project_id", "sha" => "sha" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesCommitSequenceEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesCommitSignatureEntity

```ruby
api_entities_commit_signature = client.ApiEntitiesCommitSignature
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `commit_source` | `String` | No |  |
| `signature` | `String` | No |  |
| `signature_type` | `String` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesCommitSignature.load({ "project_id" => "project_id", "sha" => "sha" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesCommitSignatureEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesCommitStatusEntity

```ruby
api_entities_commit_status = client.ApiEntitiesCommitStatus
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_failure` | `Boolean` | No |  |
| `author` | `Hash` | No |  |
| `coverage` | `Float` | No |  |
| `created_at` | `String` | No |  |
| `description` | `String` | No |  |
| `finished_at` | `String` | No |  |
| `id` | `Integer` | No |  |
| `name` | `String` | No |  |
| `pipeline_id` | `Integer` | No |  |
| `ref` | `String` | No |  |
| `sha` | `String` | No |  |
| `started_at` | `String` | No |  |
| `status` | `String` | No |  |
| `target_url` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ApiEntitiesCommitStatus.create({
  "id" => "example_id", # String
  "project_id" => "example_project_id", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiEntitiesCommitStatus.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesCommitStatusEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesCompareEntity

```ruby
api_entities_compare = client.ApiEntitiesCompare
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `commit` | `Hash` | No |  |
| `compare_same_ref` | `Boolean` | No |  |
| `compare_timeout` | `Boolean` | No |  |
| `diff` | `Array` | No |  |
| `web_url` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiEntitiesCompare.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesCompareEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesContainerRegistryRepositoryEntity

```ruby
api_entities_container_registry_repository = client.ApiEntitiesContainerRegistryRepository
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cleanup_policy_started_at` | `String` | No |  |
| `created_at` | `String` | No |  |
| `delete_api_path` | `String` | No |  |
| `id` | `Integer` | No |  |
| `location` | `String` | No |  |
| `name` | `String` | No |  |
| `path` | `String` | No |  |
| `project_id` | `Integer` | No |  |
| `size` | `Integer` | No |  |
| `status` | `String` | No |  |
| `tag` | `Hash` | No |  |
| `tags_count` | `Integer` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiEntitiesContainerRegistryRepository.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesContainerRegistryRepository.load({ "id" => "api_entities_container_registry_repository_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesContainerRegistryRepositoryEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesContainerRegistryTagEntity

```ruby
api_entities_container_registry_tag = client.ApiEntitiesContainerRegistryTag
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `location` | `String` | No |  |
| `name` | `String` | No |  |
| `path` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiEntitiesContainerRegistryTag.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesContainerRegistryTagEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesContainerRegistryTagDetailEntity

```ruby
api_entities_container_registry_tag_detail = client.ApiEntitiesContainerRegistryTagDetail
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `String` | No |  |
| `digest` | `String` | No |  |
| `location` | `String` | No |  |
| `name` | `String` | No |  |
| `path` | `String` | No |  |
| `revision` | `String` | No |  |
| `short_revision` | `String` | No |  |
| `total_size` | `Integer` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesContainerRegistryTagDetail.load({ "project_id" => "project_id", "repository_id" => "repository_id", "tag_name" => "tag_name" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesContainerRegistryTagDetailEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesContributorEntity

```ruby
api_entities_contributor = client.ApiEntitiesContributor
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `addition` | `Integer` | No |  |
| `commit` | `Integer` | No |  |
| `deletion` | `Integer` | No |  |
| `email` | `String` | No |  |
| `name` | `String` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesContributor.load({ "project_id" => "project_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesContributorEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesDeployKeyEntity

```ruby
api_entities_deploy_key = client.ApiEntitiesDeployKey
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `String` | No |  |
| `expires_at` | `String` | No |  |
| `fingerprint` | `String` | No |  |
| `fingerprint_sha256` | `String` | No |  |
| `id` | `Integer` | No |  |
| `key` | `String` | No |  |
| `last_used_at` | `String` | No |  |
| `projects_with_readonly_access` | `Hash` | No |  |
| `projects_with_write_access` | `Hash` | No |  |
| `title` | `String` | No |  |
| `usage_type` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ApiEntitiesDeployKey.create({
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiEntitiesDeployKey.list
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ApiEntitiesDeployKey.update({
  "id" => "id",
  "project_id" => "project_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesDeployKeyEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesDeployKeysProjectEntity

```ruby
api_entities_deploy_keys_project = client.ApiEntitiesDeployKeysProject
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `can_push` | `Boolean` | No |  |
| `created_at` | `String` | No |  |
| `expires_at` | `String` | No |  |
| `fingerprint` | `String` | No |  |
| `fingerprint_sha256` | `String` | No |  |
| `id` | `Integer` | No |  |
| `key` | `String` | No |  |
| `last_used_at` | `String` | No |  |
| `projects_with_readonly_access` | `Hash` | No |  |
| `projects_with_write_access` | `Hash` | No |  |
| `title` | `String` | No |  |
| `usage_type` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ApiEntitiesDeployKeysProject.create({
  "project_id" => "example_project_id", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiEntitiesDeployKeysProject.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesDeployKeysProject.load({ "key_id" => "key_id", "project_id" => "project_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesDeployKeysProjectEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesDeployTokenEntity

```ruby
api_entities_deploy_token = client.ApiEntitiesDeployToken
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `expired` | `Boolean` | No |  |
| `expires_at` | `String` | No |  |
| `id` | `Integer` | No |  |
| `name` | `String` | No |  |
| `revoked` | `Boolean` | No |  |
| `scope` | `Array` | No |  |
| `username` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiEntitiesDeployToken.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesDeployToken.load({ "id" => "api_entities_deploy_token_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesDeployTokenEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesDeployTokenWithTokenEntity

```ruby
api_entities_deploy_token_with_token = client.ApiEntitiesDeployTokenWithToken
```

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ApiEntitiesDeployTokenWithToken.create({
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesDeployTokenWithTokenEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesDeploymentEntity

```ruby
api_entities_deployment = client.ApiEntitiesDeployment
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `String` | No |  |
| `deployable` | `Hash` | No |  |
| `environment` | `Hash` | No |  |
| `id` | `Integer` | No |  |
| `iid` | `Integer` | No |  |
| `ref` | `String` | No |  |
| `sha` | `String` | No |  |
| `status` | `String` | No |  |
| `updated_at` | `String` | No |  |
| `user` | `Hash` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiEntitiesDeployment.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesDeploymentEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesDeploymentExtendedEntity

```ruby
api_entities_deployment_extended = client.ApiEntitiesDeploymentExtended
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `approval` | `Hash` | No |  |
| `approval_summary` | `Hash` | No |  |
| `created_at` | `String` | No |  |
| `deployable` | `Hash` | No |  |
| `environment` | `Hash` | No |  |
| `id` | `Integer` | No |  |
| `iid` | `Integer` | No |  |
| `pending_approval_count` | `Integer` | No |  |
| `ref` | `String` | No |  |
| `sha` | `String` | No |  |
| `status` | `String` | No |  |
| `updated_at` | `String` | No |  |
| `user` | `Hash` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ApiEntitiesDeploymentExtended.create({
  "project_id" => "example_project_id", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesDeploymentExtended.load({ "deployment_id" => "deployment_id", "project_id" => "project_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ApiEntitiesDeploymentExtended.update({
  "deployment_id" => "deployment_id",
  "project_id" => "project_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesDeploymentExtendedEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesDeploymentsApprovalEntity

```ruby
api_entities_deployments_approval = client.ApiEntitiesDeploymentsApproval
```

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ApiEntitiesDeploymentsApproval.create({
  "deployment_id" => "example_deployment_id", # String
  "project_id" => "example_project_id", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesDeploymentsApprovalEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesDictionaryTableEntity

```ruby
api_entities_dictionary_table = client.ApiEntitiesDictionaryTable
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `feature_category` | `Array` | No |  |
| `table_name` | `String` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesDictionaryTable.load({ "id" => "api_entities_dictionary_table_id", "databas_id" => "databas_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesDictionaryTableEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesDiffEntity

```ruby
api_entities_diff = client.ApiEntitiesDiff
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `a_mode` | `String` | No |  |
| `b_mode` | `String` | No |  |
| `collapsed` | `Boolean` | No |  |
| `deleted_file` | `Boolean` | No |  |
| `diff` | `String` | No |  |
| `generated_file` | `Boolean` | No |  |
| `new_file` | `Boolean` | No |  |
| `new_path` | `String` | No |  |
| `old_path` | `String` | No |  |
| `renamed_file` | `Boolean` | No |  |
| `too_large` | `Boolean` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiEntitiesDiff.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesDiff.load({ "merge_request_id" => "merge_request_id", "project_id" => "project_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesDiffEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesDiscoveredClusterEntity

```ruby
api_entities_discovered_cluster = client.ApiEntitiesDiscoveredCluster
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `group` | `String` | No |  |
| `project` | `String` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesDiscoveredCluster.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesDiscoveredClusterEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesDraftNoteEntity

```ruby
api_entities_draft_note = client.ApiEntitiesDraftNote
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author_id` | `Integer` | No |  |
| `commit_id` | `Integer` | No |  |
| `discussion_id` | `Integer` | No |  |
| `id` | `Integer` | No |  |
| `line_code` | `String` | No |  |
| `merge_request_id` | `Integer` | No |  |
| `note` | `String` | No |  |
| `position` | `Hash` | No |  |
| `resolve_discussion` | `Boolean` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ApiEntitiesDraftNote.create({
  "merge_request_id" => "example_merge_request_id", # String
  "project_id" => "example_project_id", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiEntitiesDraftNote.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesDraftNote.load({ "id" => "api_entities_draft_note_id", "merge_request_id" => "merge_request_id", "project_id" => "project_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ApiEntitiesDraftNote.update({
  "id" => "api_entities_draft_note_id",
  "merge_request_id" => "merge_request_id",
  "project_id" => "project_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesDraftNoteEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesEnvironmentEntity

```ruby
api_entities_environment = client.ApiEntitiesEnvironment
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auto_stop_at` | `String` | No |  |
| `auto_stop_setting` | `String` | No |  |
| `cluster_agent` | `Hash` | No |  |
| `created_at` | `String` | No |  |
| `description` | `String` | No |  |
| `external_url` | `String` | No |  |
| `flux_resource_path` | `String` | No |  |
| `id` | `Integer` | No |  |
| `kubernetes_namespace` | `String` | No |  |
| `last_deployment` | `Hash` | No |  |
| `name` | `String` | No |  |
| `project` | `Hash` | No |  |
| `slug` | `String` | No |  |
| `state` | `String` | No |  |
| `tier` | `String` | No |  |
| `updated_at` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ApiEntitiesEnvironment.create({
  "project_id" => "example_project_id", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiEntitiesEnvironment.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesEnvironment.load({ "id" => "api_entities_environment_id", "project_id" => "project_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ApiEntitiesEnvironment.update({
  "id" => "api_entities_environment_id",
  "project_id" => "project_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesEnvironmentEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesErrorTrackingClientKeyEntity

```ruby
api_entities_error_tracking_client_key = client.ApiEntitiesErrorTrackingClientKey
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `Boolean` | No |  |
| `id` | `Integer` | No |  |
| `public_key` | `String` | No |  |
| `sentry_dsn` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ApiEntitiesErrorTrackingClientKey.create({
  "project_id" => "example_project_id", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiEntitiesErrorTrackingClientKey.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesErrorTrackingClientKeyEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesErrorTrackingProjectSettingEntity

```ruby
api_entities_error_tracking_project_setting = client.ApiEntitiesErrorTrackingProjectSetting
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `Boolean` | No |  |
| `api_url` | `String` | No |  |
| `integrated` | `Boolean` | No |  |
| `project_name` | `String` | No |  |
| `sentry_external_url` | `String` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesErrorTrackingProjectSetting.load({ "project_id" => "project_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ApiEntitiesErrorTrackingProjectSetting.update({
  "project_id" => "project_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesErrorTrackingProjectSettingEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesEventEntity

```ruby
api_entities_event = client.ApiEntitiesEvent
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action_name` | `String` | No |  |
| `author` | `Hash` | No |  |
| `author_id` | `Integer` | No |  |
| `author_username` | `String` | No |  |
| `created_at` | `String` | No |  |
| `id` | `Integer` | No |  |
| `imported` | `Boolean` | No |  |
| `imported_from` | `String` | No |  |
| `note` | `Hash` | No |  |
| `project_id` | `Integer` | No |  |
| `push_data` | `Hash` | No |  |
| `target_id` | `Integer` | No |  |
| `target_iid` | `Integer` | No |  |
| `target_title` | `String` | No |  |
| `target_type` | `String` | No |  |
| `wiki_page` | `Hash` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiEntitiesEvent.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesEvent.load({ "project_id" => "project_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesEventEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesFeatureEntity

```ruby
api_entities_feature = client.ApiEntitiesFeature
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `definition` | `Hash` | No |  |
| `gate` | `Hash` | No |  |
| `name` | `String` | No |  |
| `state` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ApiEntitiesFeature.create({
  "id" => "example_id", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiEntitiesFeature.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesFeatureEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesFeatureDefinitionEntity

```ruby
api_entities_feature_definition = client.ApiEntitiesFeatureDefinition
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `default_enabled` | `String` | No |  |
| `feature_issue_url` | `String` | No |  |
| `group` | `String` | No |  |
| `intended_to_rollout_by` | `String` | No |  |
| `introduced_by_url` | `String` | No |  |
| `log_state_change` | `String` | No |  |
| `milestone` | `String` | No |  |
| `name` | `String` | No |  |
| `rollout_issue_url` | `String` | No |  |
| `type` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiEntitiesFeatureDefinition.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesFeatureDefinitionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesFeatureFlagEntity

```ruby
api_entities_feature_flag = client.ApiEntitiesFeatureFlag
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `Boolean` | No |  |
| `created_at` | `String` | No |  |
| `description` | `String` | No |  |
| `name` | `String` | No |  |
| `scope` | `String` | No |  |
| `strategy` | `Hash` | No |  |
| `updated_at` | `String` | No |  |
| `version` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ApiEntitiesFeatureFlag.create({
  "project_id" => "example_project_id", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiEntitiesFeatureFlag.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesFeatureFlag.load({ "id" => "api_entities_feature_flag_id", "project_id" => "project_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ApiEntitiesFeatureFlag.update({
  "id" => "api_entities_feature_flag_id",
  "project_id" => "project_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesFeatureFlagEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesFeatureFlagUserListEntity

```ruby
api_entities_feature_flag_user_list = client.ApiEntitiesFeatureFlagUserList
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `String` | No |  |
| `edit_path` | `String` | No |  |
| `id` | `Integer` | No |  |
| `iid` | `Integer` | No |  |
| `name` | `String` | No |  |
| `path` | `String` | No |  |
| `project_id` | `Integer` | No |  |
| `updated_at` | `String` | No |  |
| `user_xid` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ApiEntitiesFeatureFlagUserList.create({
  "project_id" => "example_project_id", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiEntitiesFeatureFlagUserList.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesFeatureFlagUserList.load({ "iid" => "iid", "project_id" => "project_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ApiEntitiesFeatureFlagUserList.update({
  "iid" => "iid",
  "project_id" => "project_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesFeatureFlagUserListEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesFreezePeriodEntity

```ruby
api_entities_freeze_period = client.ApiEntitiesFreezePeriod
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `String` | No |  |
| `cron_timezone` | `String` | No |  |
| `freeze_end` | `String` | No |  |
| `freeze_start` | `String` | No |  |
| `id` | `Integer` | No |  |
| `updated_at` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ApiEntitiesFreezePeriod.create({
  "project_id" => "example_project_id", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiEntitiesFreezePeriod.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesFreezePeriod.load({ "id" => "api_entities_freeze_period_id", "project_id" => "project_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ApiEntitiesFreezePeriod.update({
  "id" => "api_entities_freeze_period_id",
  "project_id" => "project_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesFreezePeriodEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesGitlabSubscriptionEntity

```ruby
api_entities_gitlab_subscription = client.ApiEntitiesGitlabSubscription
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `billing` | `Hash` | No |  |
| `plan` | `Hash` | No |  |
| `usage` | `Hash` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesGitlabSubscription.load({ "namespace_id" => "namespace_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesGitlabSubscriptionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesGoModuleVersionEntity

```ruby
api_entities_go_module_version = client.ApiEntitiesGoModuleVersion
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `time` | `String` | No |  |
| `version` | `String` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesGoModuleVersion.load({ "module_version" => "module_version", "project_id" => "project_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesGoModuleVersionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesGroupEntity

```ruby
api_entities_group = client.ApiEntitiesGroup
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `Boolean` | No |  |
| `auto_devops_enabled` | `String` | No |  |
| `auto_duo_code_review_enabled` | `String` | No |  |
| `avatar_url` | `String` | No |  |
| `created_at` | `String` | No |  |
| `custom_attribute` | `Hash` | No |  |
| `default_branch` | `String` | No |  |
| `default_branch_protection` | `String` | No |  |
| `default_branch_protection_default` | `String` | No |  |
| `description` | `String` | No |  |
| `duo_core_features_enabled` | `Boolean` | No |  |
| `duo_features_enabled` | `String` | No |  |
| `emails_disabled` | `Boolean` | No |  |
| `emails_enabled` | `Boolean` | No |  |
| `file_template_project_id` | `String` | No |  |
| `full_name` | `String` | No |  |
| `full_path` | `String` | No |  |
| `id` | `String` | No |  |
| `ldap_access` | `String` | No |  |
| `ldap_cn` | `String` | No |  |
| `ldap_group_link` | `Hash` | No |  |
| `lfs_enabled` | `String` | No |  |
| `lock_duo_features_enabled` | `String` | No |  |
| `lock_math_rendering_limits_enabled` | `Boolean` | No |  |
| `marked_for_deletion_on` | `String` | No |  |
| `math_rendering_limits_enabled` | `Boolean` | No |  |
| `max_artifacts_size` | `Integer` | No |  |
| `mentions_disabled` | `String` | No |  |
| `name` | `String` | No |  |
| `organization_id` | `String` | No |  |
| `parent_id` | `String` | No |  |
| `path` | `String` | No |  |
| `project_creation_level` | `String` | No |  |
| `repository_storage` | `String` | No |  |
| `request_access_enabled` | `String` | No |  |
| `require_two_factor_authentication` | `String` | No |  |
| `root_storage_statistic` | `Hash` | No |  |
| `saml_group_link` | `Hash` | No |  |
| `share_with_group_lock` | `String` | No |  |
| `shared_runners_setting` | `String` | No |  |
| `show_diff_preview_in_email` | `Boolean` | No |  |
| `statistic` | `Hash` | No |  |
| `subgroup_creation_level` | `String` | No |  |
| `two_factor_grace_period` | `String` | No |  |
| `visibility` | `String` | No |  |
| `web_based_commit_signing_enabled` | `String` | No |  |
| `web_url` | `String` | No |  |
| `wiki_access_level` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ApiEntitiesGroup.create({
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiEntitiesGroup.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesGroup.load({ "project_id" => "project_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ApiEntitiesGroup.update({
  "id" => "id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesGroupEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesGroupDetailEntity

```ruby
api_entities_group_detail = client.ApiEntitiesGroupDetail
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowed_email_domains_list` | `String` | No |  |
| `archived` | `Boolean` | No |  |
| `auto_ban_user_on_excessive_projects_download` | `String` | No |  |
| `auto_devops_enabled` | `String` | No |  |
| `auto_duo_code_review_enabled` | `String` | No |  |
| `avatar_url` | `String` | No |  |
| `created_at` | `String` | No |  |
| `custom_attribute` | `Hash` | No |  |
| `default_branch` | `String` | No |  |
| `default_branch_protection` | `String` | No |  |
| `default_branch_protection_default` | `String` | No |  |
| `description` | `String` | No |  |
| `duo_core_features_enabled` | `Boolean` | No |  |
| `duo_features_enabled` | `String` | No |  |
| `emails_disabled` | `Boolean` | No |  |
| `emails_enabled` | `Boolean` | No |  |
| `enabled_git_access_protocol` | `String` | No |  |
| `extra_shared_runners_minutes_limit` | `String` | No |  |
| `file_template_project_id` | `String` | No |  |
| `full_name` | `String` | No |  |
| `full_path` | `String` | No |  |
| `id` | `String` | No |  |
| `ip_restriction_range` | `String` | No |  |
| `ldap_access` | `String` | No |  |
| `ldap_cn` | `String` | No |  |
| `ldap_group_link` | `Hash` | No |  |
| `lfs_enabled` | `String` | No |  |
| `lock_duo_features_enabled` | `String` | No |  |
| `lock_math_rendering_limits_enabled` | `Boolean` | No |  |
| `marked_for_deletion_on` | `String` | No |  |
| `math_rendering_limits_enabled` | `Boolean` | No |  |
| `max_artifacts_size` | `Integer` | No |  |
| `membership_lock` | `String` | No |  |
| `mentions_disabled` | `String` | No |  |
| `name` | `String` | No |  |
| `organization_id` | `String` | No |  |
| `parent_id` | `String` | No |  |
| `path` | `String` | No |  |
| `prevent_forking_outside_group` | `String` | No |  |
| `prevent_sharing_groups_outside_hierarchy` | `String` | No |  |
| `project` | `Hash` | No |  |
| `project_creation_level` | `String` | No |  |
| `repository_storage` | `String` | No |  |
| `request_access_enabled` | `String` | No |  |
| `require_two_factor_authentication` | `String` | No |  |
| `root_storage_statistic` | `Hash` | No |  |
| `runners_token` | `String` | No |  |
| `saml_group_link` | `Hash` | No |  |
| `service_access_tokens_expiration_enforced` | `String` | No |  |
| `share_with_group_lock` | `String` | No |  |
| `shared_project` | `Hash` | No |  |
| `shared_runners_minutes_limit` | `String` | No |  |
| `shared_runners_setting` | `String` | No |  |
| `shared_with_group` | `String` | No |  |
| `show_diff_preview_in_email` | `Boolean` | No |  |
| `statistic` | `Hash` | No |  |
| `subgroup_creation_level` | `String` | No |  |
| `two_factor_grace_period` | `String` | No |  |
| `unique_project_download_limit` | `String` | No |  |
| `unique_project_download_limit_alertlist` | `String` | No |  |
| `unique_project_download_limit_allowlist` | `String` | No |  |
| `unique_project_download_limit_interval_in_second` | `String` | No |  |
| `visibility` | `String` | No |  |
| `web_based_commit_signing_enabled` | `String` | No |  |
| `web_url` | `String` | No |  |
| `wiki_access_level` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ApiEntitiesGroupDetail.create({
  "group_id" => "example_group_id", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesGroupDetail.load({ "id" => "api_entities_group_detail_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesGroupDetailEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesHookEntity

```ruby
api_entities_hook = client.ApiEntitiesHook
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert_status` | `Object` | No |  |
| `branch_filter_strategy` | `String` | No |  |
| `created_at` | `String` | No |  |
| `custom_header` | `Array` | No |  |
| `custom_webhook_template` | `String` | No |  |
| `description` | `String` | No |  |
| `disabled_until` | `String` | No |  |
| `enable_ssl_verification` | `Boolean` | No |  |
| `id` | `String` | No |  |
| `merge_requests_event` | `Boolean` | No |  |
| `name` | `String` | No |  |
| `push_event` | `Boolean` | No |  |
| `push_events_branch_filter` | `String` | No |  |
| `repository_update_event` | `Boolean` | No |  |
| `tag_push_event` | `Boolean` | No |  |
| `url` | `String` | No |  |
| `url_variable` | `Array` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ApiEntitiesHook.create({
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiEntitiesHook.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesHook.load({ "id" => "api_entities_hook_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ApiEntitiesHook.update({
  "id" => "api_entities_hook_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesHookEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesIntegrationEntity

```ruby
api_entities_integration = client.ApiEntitiesIntegration
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `Boolean` | No |  |
| `alert_event` | `Boolean` | No |  |
| `comment_on_event_enabled` | `Boolean` | No |  |
| `commit_event` | `Boolean` | No |  |
| `confidential_issues_event` | `Boolean` | No |  |
| `confidential_note_event` | `Boolean` | No |  |
| `created_at` | `String` | No |  |
| `deployment_event` | `Boolean` | No |  |
| `id` | `Integer` | No |  |
| `incident_event` | `Boolean` | No |  |
| `inherited` | `Boolean` | No |  |
| `issues_event` | `Boolean` | No |  |
| `job_event` | `Boolean` | No |  |
| `merge_requests_event` | `Boolean` | No |  |
| `note_event` | `Boolean` | No |  |
| `pipeline_event` | `Boolean` | No |  |
| `property` | `Hash` | No |  |
| `push_event` | `Boolean` | No |  |
| `slug` | `Integer` | No |  |
| `tag_push_event` | `Boolean` | No |  |
| `title` | `String` | No |  |
| `updated_at` | `String` | No |  |
| `vulnerability_event` | `Boolean` | No |  |
| `wiki_page_event` | `Boolean` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesIntegration.load({ "id" => "api_entities_integration_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesIntegrationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesIntegrationBasicEntity

```ruby
api_entities_integration_basic = client.ApiEntitiesIntegrationBasic
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `Boolean` | No |  |
| `alert_event` | `Boolean` | No |  |
| `comment_on_event_enabled` | `Boolean` | No |  |
| `commit_event` | `Boolean` | No |  |
| `confidential_issues_event` | `Boolean` | No |  |
| `confidential_note_event` | `Boolean` | No |  |
| `created_at` | `String` | No |  |
| `deployment_event` | `Boolean` | No |  |
| `id` | `Integer` | No |  |
| `incident_event` | `Boolean` | No |  |
| `inherited` | `Boolean` | No |  |
| `issues_event` | `Boolean` | No |  |
| `job_event` | `Boolean` | No |  |
| `merge_requests_event` | `Boolean` | No |  |
| `note_event` | `Boolean` | No |  |
| `pipeline_event` | `Boolean` | No |  |
| `push_event` | `Boolean` | No |  |
| `slug` | `Integer` | No |  |
| `tag_push_event` | `Boolean` | No |  |
| `title` | `String` | No |  |
| `updated_at` | `String` | No |  |
| `vulnerability_event` | `Boolean` | No |  |
| `wiki_page_event` | `Boolean` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiEntitiesIntegrationBasic.list
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ApiEntitiesIntegrationBasic.update({
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesIntegrationBasicEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesInvitationEntity

```ruby
api_entities_invitation = client.ApiEntitiesInvitation
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access_level` | `String` | No |  |
| `created_at` | `String` | No |  |
| `created_by_name` | `String` | No |  |
| `expires_at` | `String` | No |  |
| `invite_email` | `String` | No |  |
| `invite_token` | `String` | No |  |
| `user_name` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ApiEntitiesInvitation.create({
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiEntitiesInvitation.list
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ApiEntitiesInvitation.update({
  "id" => "id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesInvitationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesIssuableTimeStatEntity

```ruby
api_entities_issuable_time_stat = client.ApiEntitiesIssuableTimeStat
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `human_time_estimate` | `String` | No |  |
| `human_total_time_spent` | `String` | No |  |
| `time_estimate` | `Integer` | No |  |
| `total_time_spent` | `Integer` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ApiEntitiesIssuableTimeStat.create({
  "project_id" => "example_project_id", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesIssuableTimeStat.load({ "project_id" => "project_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesIssuableTimeStatEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesIssueEntity

```ruby
api_entities_issue = client.ApiEntitiesIssue
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assignee` | `Hash` | No |  |
| `author` | `Hash` | No |  |
| `blocking_issues_count` | `String` | No |  |
| `closed_at` | `String` | No |  |
| `closed_by` | `Hash` | No |  |
| `confidential` | `Boolean` | No |  |
| `created_at` | `String` | No |  |
| `description` | `String` | No |  |
| `discussion_locked` | `Boolean` | No |  |
| `downvote` | `String` | No |  |
| `due_date` | `String` | No |  |
| `epic` | `Hash` | No |  |
| `epic_iid` | `String` | No |  |
| `has_task` | `Boolean` | No |  |
| `health_status` | `String` | No |  |
| `id` | `Integer` | No |  |
| `iid` | `Integer` | No |  |
| `imported` | `String` | No |  |
| `imported_from` | `String` | No |  |
| `issue_type` | `String` | No |  |
| `iteration` | `Hash` | No |  |
| `label` | `Array` | No |  |
| `link` | `Hash` | No |  |
| `merge_requests_count` | `String` | No |  |
| `milestone` | `Hash` | No |  |
| `moved_to_id` | `String` | No |  |
| `project_id` | `Integer` | No |  |
| `reference` | `Hash` | No |  |
| `service_desk_reply_to` | `String` | No |  |
| `severity` | `String` | No |  |
| `state` | `String` | No |  |
| `subscribed` | `String` | No |  |
| `task_completion_status` | `String` | No |  |
| `task_status` | `String` | No |  |
| `time_stat` | `Hash` | No |  |
| `title` | `String` | No |  |
| `type` | `String` | No |  |
| `updated_at` | `String` | No |  |
| `upvote` | `String` | No |  |
| `user_notes_count` | `String` | No |  |
| `web_url` | `String` | No |  |
| `weight` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ApiEntitiesIssue.create({
  "project_id" => "example_project_id", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiEntitiesIssue.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesIssue.load({ "id" => "api_entities_issue_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ApiEntitiesIssue.update({
  "id" => "api_entities_issue_id",
  "project_id" => "project_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesIssueEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesIssueLinkEntity

```ruby
api_entities_issue_link = client.ApiEntitiesIssueLink
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `link_type` | `String` | No |  |
| `source_issue` | `Hash` | No |  |
| `target_issue` | `Hash` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ApiEntitiesIssueLink.create({
  "issue_id" => "example_issue_id", # String
  "project_id" => "example_project_id", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesIssueLink.load({ "id" => "api_entities_issue_link_id", "issue_id" => "issue_id", "project_id" => "project_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesIssueLinkEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesLicenseEntity

```ruby
api_entities_license = client.ApiEntitiesLicense
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `condition` | `Array` | No |  |
| `content` | `String` | No |  |
| `description` | `String` | No |  |
| `html_url` | `String` | No |  |
| `key` | `String` | No |  |
| `limitation` | `Array` | No |  |
| `name` | `String` | No |  |
| `nickname` | `String` | No |  |
| `permission` | `Array` | No |  |
| `popular` | `Boolean` | No |  |
| `source_url` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiEntitiesLicense.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesLicenseEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesMarkdownEntity

```ruby
api_entities_markdown = client.ApiEntitiesMarkdown
```

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ApiEntitiesMarkdown.create({
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesMarkdownEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesMarkdownUploadAdminEntity

```ruby
api_entities_markdown_upload_admin = client.ApiEntitiesMarkdownUploadAdmin
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `String` | No |  |
| `filename` | `String` | No |  |
| `id` | `String` | No |  |
| `size` | `String` | No |  |
| `uploaded_by` | `Hash` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiEntitiesMarkdownUploadAdmin.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesMarkdownUploadAdminEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesMemberEntity

```ruby
api_entities_member = client.ApiEntitiesMember
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access_level` | `String` | No |  |
| `avatar_path` | `String` | No |  |
| `avatar_url` | `String` | No |  |
| `created_at` | `String` | No |  |
| `created_by` | `Hash` | No |  |
| `custom_attribute` | `Array` | No |  |
| `email` | `String` | No |  |
| `expires_at` | `String` | No |  |
| `group_saml_identity` | `Hash` | No |  |
| `group_scim_identity` | `Hash` | No |  |
| `id` | `Integer` | No |  |
| `is_using_seat` | `Boolean` | No |  |
| `key` | `String` | No |  |
| `locked` | `Boolean` | No |  |
| `member_role` | `Hash` | No |  |
| `membership_state` | `String` | No |  |
| `name` | `String` | No |  |
| `override` | `String` | No |  |
| `public_email` | `String` | No |  |
| `state` | `String` | No |  |
| `username` | `String` | No |  |
| `value` | `String` | No |  |
| `web_url` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ApiEntitiesMember.create({
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiEntitiesMember.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesMember.load({ "id" => "api_entities_member_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesMember.remove({ "group_id" => "group_id", "member_id" => "member_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ApiEntitiesMember.update({
  "id" => "api_entities_member_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesMemberEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesMergeEntity

```ruby
api_entities_merge = client.ApiEntitiesMerge
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_collaboration` | `Boolean` | No |  |
| `allow_maintainer_to_push` | `Boolean` | No |  |
| `approvals_before_merge` | `String` | No |  |
| `assignee` | `Hash` | No |  |
| `author` | `Hash` | No |  |
| `blocking_discussions_resolved` | `String` | No |  |
| `changes_count` | `String` | No |  |
| `closed_at` | `String` | No |  |
| `closed_by` | `Hash` | No |  |
| `created_at` | `String` | No |  |
| `description` | `String` | No |  |
| `description_html` | `String` | No |  |
| `detailed_merge_status` | `String` | No |  |
| `diff_ref` | `Hash` | No |  |
| `discussion_locked` | `String` | No |  |
| `diverged_commits_count` | `String` | No |  |
| `downvote` | `String` | No |  |
| `draft` | `String` | No |  |
| `first_contribution` | `String` | No |  |
| `first_deployed_to_production_at` | `String` | No |  |
| `force_remove_source_branch` | `String` | No |  |
| `has_conflict` | `Boolean` | No |  |
| `head_pipeline` | `Hash` | No |  |
| `id` | `Integer` | No |  |
| `iid` | `Integer` | No |  |
| `imported` | `String` | No |  |
| `imported_from` | `String` | No |  |
| `label` | `String` | No |  |
| `latest_build_finished_at` | `String` | No |  |
| `latest_build_started_at` | `String` | No |  |
| `merge_after` | `String` | No |  |
| `merge_commit_sha` | `String` | No |  |
| `merge_error` | `String` | No |  |
| `merge_status` | `String` | No |  |
| `merge_user` | `Hash` | No |  |
| `merge_when_pipeline_succeed` | `String` | No |  |
| `merged_at` | `String` | No |  |
| `merged_by` | `Hash` | No |  |
| `milestone` | `Hash` | No |  |
| `pipeline` | `Hash` | No |  |
| `prepared_at` | `String` | No |  |
| `project_id` | `Integer` | No |  |
| `rebase_in_progress` | `String` | No |  |
| `reference` | `String` | No |  |
| `reviewer` | `Hash` | No |  |
| `sha` | `String` | No |  |
| `should_remove_source_branch` | `Boolean` | No |  |
| `source_branch` | `String` | No |  |
| `source_project_id` | `String` | No |  |
| `squash` | `String` | No |  |
| `squash_commit_sha` | `String` | No |  |
| `squash_on_merge` | `String` | No |  |
| `state` | `String` | No |  |
| `subscribed` | `String` | No |  |
| `target_branch` | `String` | No |  |
| `target_project_id` | `String` | No |  |
| `task_completion_status` | `String` | No |  |
| `time_stat` | `Hash` | No |  |
| `title` | `String` | No |  |
| `title_html` | `String` | No |  |
| `updated_at` | `String` | No |  |
| `upvote` | `String` | No |  |
| `user` | `Hash` | No |  |
| `user_notes_count` | `String` | No |  |
| `web_url` | `String` | No |  |
| `work_in_progress` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ApiEntitiesMerge.create({
  "project_id" => "example_project_id", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesMerge.load({ "merge_request_iid" => "merge_request_iid", "project_id" => "project_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ApiEntitiesMerge.update({
  "project_id" => "project_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesMergeEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesMergeRequestApprovalEntity

```ruby
api_entities_merge_request_approval = client.ApiEntitiesMergeRequestApproval
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `approved` | `Boolean` | No |  |
| `approved_by` | `Hash` | No |  |
| `user_can_approve` | `Boolean` | No |  |
| `user_has_approved` | `Boolean` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ApiEntitiesMergeRequestApproval.create({
  "merge_request_id" => "example_merge_request_id", # String
  "project_id" => "example_project_id", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesMergeRequestApproval.load({ "merge_request_id" => "merge_request_id", "project_id" => "project_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesMergeRequestApprovalEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesMergeRequestBasicEntity

```ruby
api_entities_merge_request_basic = client.ApiEntitiesMergeRequestBasic
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_collaboration` | `Boolean` | No |  |
| `allow_maintainer_to_push` | `Boolean` | No |  |
| `approvals_before_merge` | `String` | No |  |
| `assignee` | `Hash` | No |  |
| `author` | `Hash` | No |  |
| `blocking_discussions_resolved` | `String` | No |  |
| `closed_at` | `String` | No |  |
| `closed_by` | `Hash` | No |  |
| `created_at` | `String` | No |  |
| `description` | `String` | No |  |
| `description_html` | `String` | No |  |
| `detailed_merge_status` | `String` | No |  |
| `discussion_locked` | `String` | No |  |
| `downvote` | `String` | No |  |
| `draft` | `String` | No |  |
| `force_remove_source_branch` | `String` | No |  |
| `has_conflict` | `Boolean` | No |  |
| `id` | `Integer` | No |  |
| `iid` | `Integer` | No |  |
| `imported` | `String` | No |  |
| `imported_from` | `String` | No |  |
| `label` | `String` | No |  |
| `merge_after` | `String` | No |  |
| `merge_commit_sha` | `String` | No |  |
| `merge_status` | `String` | No |  |
| `merge_user` | `Hash` | No |  |
| `merge_when_pipeline_succeed` | `String` | No |  |
| `merged_at` | `String` | No |  |
| `merged_by` | `Hash` | No |  |
| `milestone` | `Hash` | No |  |
| `prepared_at` | `String` | No |  |
| `project_id` | `Integer` | No |  |
| `reference` | `String` | No |  |
| `reviewer` | `Hash` | No |  |
| `sha` | `String` | No |  |
| `should_remove_source_branch` | `Boolean` | No |  |
| `source_branch` | `String` | No |  |
| `source_project_id` | `String` | No |  |
| `squash` | `String` | No |  |
| `squash_commit_sha` | `String` | No |  |
| `squash_on_merge` | `String` | No |  |
| `state` | `String` | No |  |
| `target_branch` | `String` | No |  |
| `target_project_id` | `String` | No |  |
| `task_completion_status` | `String` | No |  |
| `time_stat` | `Hash` | No |  |
| `title` | `String` | No |  |
| `title_html` | `String` | No |  |
| `updated_at` | `String` | No |  |
| `upvote` | `String` | No |  |
| `user_notes_count` | `String` | No |  |
| `web_url` | `String` | No |  |
| `work_in_progress` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiEntitiesMergeRequestBasic.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesMergeRequestBasic.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesMergeRequestBasicEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesMergeRequestChangeEntity

```ruby
api_entities_merge_request_change = client.ApiEntitiesMergeRequestChange
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_collaboration` | `Boolean` | No |  |
| `allow_maintainer_to_push` | `Boolean` | No |  |
| `approvals_before_merge` | `String` | No |  |
| `assignee` | `Hash` | No |  |
| `author` | `Hash` | No |  |
| `blocking_discussions_resolved` | `String` | No |  |
| `change` | `Hash` | No |  |
| `changes_count` | `String` | No |  |
| `closed_at` | `String` | No |  |
| `closed_by` | `Hash` | No |  |
| `created_at` | `String` | No |  |
| `description` | `String` | No |  |
| `description_html` | `String` | No |  |
| `detailed_merge_status` | `String` | No |  |
| `diff_ref` | `Hash` | No |  |
| `discussion_locked` | `String` | No |  |
| `diverged_commits_count` | `String` | No |  |
| `downvote` | `String` | No |  |
| `draft` | `String` | No |  |
| `first_contribution` | `String` | No |  |
| `first_deployed_to_production_at` | `String` | No |  |
| `force_remove_source_branch` | `String` | No |  |
| `has_conflict` | `Boolean` | No |  |
| `head_pipeline` | `Hash` | No |  |
| `id` | `Integer` | No |  |
| `iid` | `Integer` | No |  |
| `imported` | `String` | No |  |
| `imported_from` | `String` | No |  |
| `label` | `String` | No |  |
| `latest_build_finished_at` | `String` | No |  |
| `latest_build_started_at` | `String` | No |  |
| `merge_after` | `String` | No |  |
| `merge_commit_sha` | `String` | No |  |
| `merge_error` | `String` | No |  |
| `merge_status` | `String` | No |  |
| `merge_user` | `Hash` | No |  |
| `merge_when_pipeline_succeed` | `String` | No |  |
| `merged_at` | `String` | No |  |
| `merged_by` | `Hash` | No |  |
| `milestone` | `Hash` | No |  |
| `overflow` | `String` | No |  |
| `pipeline` | `Hash` | No |  |
| `prepared_at` | `String` | No |  |
| `project_id` | `Integer` | No |  |
| `rebase_in_progress` | `String` | No |  |
| `reference` | `String` | No |  |
| `reviewer` | `Hash` | No |  |
| `sha` | `String` | No |  |
| `should_remove_source_branch` | `Boolean` | No |  |
| `source_branch` | `String` | No |  |
| `source_project_id` | `String` | No |  |
| `squash` | `String` | No |  |
| `squash_commit_sha` | `String` | No |  |
| `squash_on_merge` | `String` | No |  |
| `state` | `String` | No |  |
| `subscribed` | `String` | No |  |
| `target_branch` | `String` | No |  |
| `target_project_id` | `String` | No |  |
| `task_completion_status` | `String` | No |  |
| `time_stat` | `Hash` | No |  |
| `title` | `String` | No |  |
| `title_html` | `String` | No |  |
| `updated_at` | `String` | No |  |
| `upvote` | `String` | No |  |
| `user` | `Hash` | No |  |
| `user_notes_count` | `String` | No |  |
| `web_url` | `String` | No |  |
| `work_in_progress` | `String` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesMergeRequestChange.load({ "merge_request_id" => "merge_request_id", "project_id" => "project_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesMergeRequestChangeEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesMergeRequestDiffEntity

```ruby
api_entities_merge_request_diff = client.ApiEntitiesMergeRequestDiff
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `base_commit_sha` | `String` | No |  |
| `created_at` | `String` | No |  |
| `head_commit_sha` | `String` | No |  |
| `id` | `String` | No |  |
| `merge_request_id` | `String` | No |  |
| `patch_id_sha` | `String` | No |  |
| `real_size` | `String` | No |  |
| `start_commit_sha` | `String` | No |  |
| `state` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiEntitiesMergeRequestDiff.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesMergeRequestDiffEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesMergeRequestDiffFullEntity

```ruby
api_entities_merge_request_diff_full = client.ApiEntitiesMergeRequestDiffFull
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `base_commit_sha` | `String` | No |  |
| `commit` | `Hash` | No |  |
| `created_at` | `String` | No |  |
| `diff` | `Hash` | No |  |
| `head_commit_sha` | `String` | No |  |
| `id` | `String` | No |  |
| `merge_request_id` | `String` | No |  |
| `patch_id_sha` | `String` | No |  |
| `real_size` | `String` | No |  |
| `start_commit_sha` | `String` | No |  |
| `state` | `String` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesMergeRequestDiffFull.load({ "merge_request_id" => "merge_request_id", "project_id" => "project_id", "version_id" => "version_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesMergeRequestDiffFullEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesMergeRequestReviewerEntity

```ruby
api_entities_merge_request_reviewer = client.ApiEntitiesMergeRequestReviewer
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `String` | No |  |
| `state` | `String` | No |  |
| `user` | `Hash` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesMergeRequestReviewer.load({ "merge_request_id" => "merge_request_id", "project_id" => "project_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesMergeRequestReviewerEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesMetricImageEntity

```ruby
api_entities_metric_image = client.ApiEntitiesMetricImage
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `String` | No |  |
| `file_path` | `String` | No |  |
| `filename` | `String` | No |  |
| `id` | `Integer` | No |  |
| `url` | `String` | No |  |
| `url_text` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ApiEntitiesMetricImage.create({
  "alert_management_alert_id" => "example_alert_management_alert_id", # String
  "project_id" => "example_project_id", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiEntitiesMetricImage.list
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ApiEntitiesMetricImage.update({
  "alert_management_alert_id" => "alert_management_alert_id",
  "id" => "id",
  "project_id" => "project_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesMetricImageEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesMrNoteEntity

```ruby
api_entities_mr_note = client.ApiEntitiesMrNote
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `Hash` | No |  |
| `note` | `String` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesMrNote.load({ "merge_request_id" => "merge_request_id", "project_id" => "project_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesMrNoteEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesNamespaceEntity

```ruby
api_entities_namespace = client.ApiEntitiesNamespace
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `additional_purchased_storage_ends_on` | `String` | No |  |
| `additional_purchased_storage_size` | `Integer` | No |  |
| `avatar_url` | `String` | No |  |
| `billable_members_count` | `Integer` | No |  |
| `end_date` | `String` | No |  |
| `extra_shared_runners_minutes_limit` | `Integer` | No |  |
| `full_path` | `String` | No |  |
| `id` | `Integer` | No |  |
| `kind` | `String` | No |  |
| `max_seats_used` | `Integer` | No |  |
| `max_seats_used_changed_at` | `String` | No |  |
| `members_count_with_descendant` | `Integer` | No |  |
| `name` | `String` | No |  |
| `parent_id` | `Integer` | No |  |
| `path` | `String` | No |  |
| `plan` | `String` | No |  |
| `projects_count` | `Integer` | No |  |
| `root_repository_size` | `Integer` | No |  |
| `seats_in_use` | `Integer` | No |  |
| `shared_runners_minutes_limit` | `Integer` | No |  |
| `trial` | `Boolean` | No |  |
| `trial_ends_on` | `String` | No |  |
| `web_url` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiEntitiesNamespace.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesNamespace.load({ "id" => "api_entities_namespace_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ApiEntitiesNamespace.update({
  "id" => "api_entities_namespace_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesNamespaceEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesNamespaceExistenceEntity

```ruby
api_entities_namespace_existence = client.ApiEntitiesNamespaceExistence
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `exist` | `Boolean` | No |  |
| `suggest` | `Array` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiEntitiesNamespaceExistence.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesNamespaceExistenceEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesNamespacesStorageLimitExclusionEntity

```ruby
api_entities_namespaces_storage_limit_exclusion = client.ApiEntitiesNamespacesStorageLimitExclusion
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `Integer` | No |  |
| `namespace_id` | `Integer` | No |  |
| `namespace_name` | `String` | No |  |
| `reason` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ApiEntitiesNamespacesStorageLimitExclusion.create({
  "namespace_id" => "example_namespace_id", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesNamespacesStorageLimitExclusion.load({ "id" => 1 })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesNamespacesStorageLimitExclusionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesNpmPackageEntity

```ruby
api_entities_npm_package = client.ApiEntitiesNpmPackage
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dist_tag` | `Hash` | No |  |
| `name` | `String` | No |  |
| `version` | `Hash` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesNpmPackage.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesNpmPackageEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesNpmPackageTagEntity

```ruby
api_entities_npm_package_tag = client.ApiEntitiesNpmPackageTag
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dist_tag` | `Hash` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesNpmPackageTag.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesNpmPackageTagEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesNugetPackagesVersionEntity

```ruby
api_entities_nuget_packages_version = client.ApiEntitiesNugetPackagesVersion
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `version` | `Array` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiEntitiesNugetPackagesVersion.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesNugetPackagesVersionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesNugetSearchResultEntity

```ruby
api_entities_nuget_search_result = client.ApiEntitiesNugetSearchResult
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `String` | No |  |
| `description` | `String` | No |  |
| `icon_url` | `String` | No |  |
| `id` | `String` | No |  |
| `license_url` | `String` | No |  |
| `project_url` | `String` | No |  |
| `summary` | `String` | No |  |
| `tag` | `String` | No |  |
| `title` | `String` | No |  |
| `total_download` | `Integer` | No |  |
| `type` | `String` | No |  |
| `verified` | `Boolean` | No |  |
| `version` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiEntitiesNugetSearchResult.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesNugetSearchResultEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesNugetServiceIndexEntity

```ruby
api_entities_nuget_service_index = client.ApiEntitiesNugetServiceIndex
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `resource` | `Array` | No |  |
| `version` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiEntitiesNugetServiceIndex.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesNugetServiceIndexEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesOrganizationsOrganizationEntity

```ruby
api_entities_organizations_organization = client.ApiEntitiesOrganizationsOrganization
```

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ApiEntitiesOrganizationsOrganization.create({
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesOrganizationsOrganizationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesPackageEntity

```ruby
api_entities_package = client.ApiEntitiesPackage
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `conan_package_name` | `String` | No |  |
| `created_at` | `String` | No |  |
| `id` | `Integer` | No |  |
| `last_downloaded_at` | `String` | No |  |
| `link` | `Hash` | No |  |
| `name` | `String` | No |  |
| `package_type` | `String` | No |  |
| `pipeline` | `Hash` | No |  |
| `project_id` | `Integer` | No |  |
| `project_path` | `String` | No |  |
| `status` | `String` | No |  |
| `tag` | `String` | No |  |
| `version` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiEntitiesPackage.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesPackage.load({ "id" => "api_entities_package_id", "project_id" => "project_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesPackageEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesPackageFileEntity

```ruby
api_entities_package_file = client.ApiEntitiesPackageFile
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `String` | No |  |
| `file_md5` | `String` | No |  |
| `file_name` | `String` | No |  |
| `file_sha1` | `String` | No |  |
| `file_sha256` | `String` | No |  |
| `id` | `Integer` | No |  |
| `package_id` | `Integer` | No |  |
| `pipeline` | `Hash` | No |  |
| `size` | `Integer` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiEntitiesPackageFile.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesPackageFileEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesPackagePipelineEntity

```ruby
api_entities_package_pipeline = client.ApiEntitiesPackagePipeline
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `String` | No |  |
| `id` | `Integer` | No |  |
| `iid` | `Integer` | No |  |
| `project_id` | `Integer` | No |  |
| `ref` | `String` | No |  |
| `sha` | `String` | No |  |
| `source` | `String` | No |  |
| `status` | `String` | No |  |
| `updated_at` | `String` | No |  |
| `user` | `Hash` | No |  |
| `web_url` | `String` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesPackagePipeline.load({ "package_id" => "package_id", "project_id" => "project_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesPackagePipelineEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesPackagesConanFilesListEntity

```ruby
api_entities_packages_conan_files_list = client.ApiEntitiesPackagesConanFilesList
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `file` | `Hash` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesPackagesConanFilesList.load({ "conan_id" => "conan_id", "package_channel" => "package_channel", "package_username" => "package_username", "package_version" => "package_version", "project_id" => "project_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesPackagesConanFilesListEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesPackagesConanPackageManifestEntity

```ruby
api_entities_packages_conan_package_manifest = client.ApiEntitiesPackagesConanPackageManifest
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `package_url` | `Hash` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesPackagesConanPackageManifest.load({ "conan_id" => "conan_id", "conan_package_reference" => "conan_package_reference", "package_channel" => "package_channel", "package_username" => "package_username", "package_version" => "package_version" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesPackagesConanPackageManifestEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesPackagesConanPackageRevisionEntity

```ruby
api_entities_packages_conan_package_revision = client.ApiEntitiesPackagesConanPackageRevision
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `revision` | `String` | No |  |
| `time` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiEntitiesPackagesConanPackageRevision.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesPackagesConanPackageRevisionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesPackagesConanPackageSnapshotEntity

```ruby
api_entities_packages_conan_package_snapshot = client.ApiEntitiesPackagesConanPackageSnapshot
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `package_snapshot` | `Hash` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesPackagesConanPackageSnapshot.load({ "conan_id" => "conan_id", "conan_package_reference" => "conan_package_reference", "package_channel" => "package_channel", "package_username" => "package_username", "package_version" => "package_version" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesPackagesConanPackageSnapshotEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesPackagesConanRecipeManifestEntity

```ruby
api_entities_packages_conan_recipe_manifest = client.ApiEntitiesPackagesConanRecipeManifest
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `recipe_url` | `Hash` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesPackagesConanRecipeManifest.load({ "conan_id" => "conan_id", "package_channel" => "package_channel", "package_username" => "package_username", "package_version" => "package_version" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesPackagesConanRecipeManifestEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesPackagesConanRecipeRevisionEntity

```ruby
api_entities_packages_conan_recipe_revision = client.ApiEntitiesPackagesConanRecipeRevision
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `revision` | `String` | No |  |
| `time` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiEntitiesPackagesConanRecipeRevision.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesPackagesConanRecipeRevisionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesPackagesConanRecipeSnapshotEntity

```ruby
api_entities_packages_conan_recipe_snapshot = client.ApiEntitiesPackagesConanRecipeSnapshot
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `recipe_snapshot` | `Hash` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesPackagesConanRecipeSnapshot.load({ "id" => "api_entities_packages_conan_recipe_snapshot_id", "package_channel" => "package_channel", "package_name" => "package_name", "package_username" => "package_username", "package_version" => "package_version" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesPackagesConanRecipeSnapshotEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesPackagesConanRevisionEntity

```ruby
api_entities_packages_conan_revision = client.ApiEntitiesPackagesConanRevision
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `revision` | `String` | No |  |
| `time` | `String` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesPackagesConanRevision.load({ "conan_id" => "conan_id", "package_channel" => "package_channel", "package_username" => "package_username", "package_version" => "package_version", "project_id" => "project_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesPackagesConanRevisionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesPackagesConanUploadUrlEntity

```ruby
api_entities_packages_conan_upload_url = client.ApiEntitiesPackagesConanUploadUrl
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `upload_url` | `Hash` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ApiEntitiesPackagesConanUploadUrl.create({
  "conan_id" => "example_conan_id", # String
  "package_channel" => "example_package_channel", # Object
  "package_username" => "example_package_username", # Object
  "package_version" => "example_package_version", # Object
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesPackagesConanUploadUrlEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesPackagesDebianDistributionEntity

```ruby
api_entities_packages_debian_distribution = client.ApiEntitiesPackagesDebianDistribution
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `architecture` | `Array` | No |  |
| `codename` | `String` | No |  |
| `component` | `Array` | No |  |
| `description` | `String` | No |  |
| `id` | `Integer` | No |  |
| `label` | `String` | No |  |
| `origin` | `String` | No |  |
| `suite` | `String` | No |  |
| `valid_time_duration_second` | `Integer` | No |  |
| `version` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ApiEntitiesPackagesDebianDistribution.create({
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiEntitiesPackagesDebianDistribution.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesPackagesDebianDistribution.load({ "id" => "api_entities_packages_debian_distribution_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ApiEntitiesPackagesDebianDistribution.update({
  "id" => "api_entities_packages_debian_distribution_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesPackagesDebianDistributionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesPagesDomainEntity

```ruby
api_entities_pages_domain = client.ApiEntitiesPagesDomain
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auto_ssl_enabled` | `String` | No |  |
| `certificate` | `Hash` | No |  |
| `domain` | `String` | No |  |
| `enabled_until` | `String` | No |  |
| `url` | `String` | No |  |
| `verification_code` | `String` | No |  |
| `verified` | `Boolean` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ApiEntitiesPagesDomain.create({
  "project_id" => "example_project_id", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiEntitiesPagesDomain.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesPagesDomain.load({ "id" => "api_entities_pages_domain_id", "project_id" => "project_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ApiEntitiesPagesDomain.update({
  "domain_id" => "domain_id",
  "project_id" => "project_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesPagesDomainEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesPagesDomainBasicEntity

```ruby
api_entities_pages_domain_basic = client.ApiEntitiesPagesDomainBasic
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auto_ssl_enabled` | `String` | No |  |
| `certificate_expiration` | `Hash` | No |  |
| `domain` | `String` | No |  |
| `enabled_until` | `String` | No |  |
| `project_id` | `String` | No |  |
| `url` | `String` | No |  |
| `verification_code` | `String` | No |  |
| `verified` | `Boolean` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesPagesDomainBasic.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesPagesDomainBasicEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesPersonalAccessTokenEntity

```ruby
api_entities_personal_access_token = client.ApiEntitiesPersonalAccessToken
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `Boolean` | No |  |
| `created_at` | `String` | No |  |
| `description` | `String` | No |  |
| `expires_at` | `String` | No |  |
| `id` | `Integer` | No |  |
| `last_used_at` | `String` | No |  |
| `name` | `String` | No |  |
| `revoked` | `Boolean` | No |  |
| `scope` | `Array` | No |  |
| `user_id` | `Integer` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiEntitiesPersonalAccessToken.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesPersonalAccessTokenEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesPersonalAccessTokenWithLastUsedIpEntity

```ruby
api_entities_personal_access_token_with_last_used_ip = client.ApiEntitiesPersonalAccessTokenWithLastUsedIp
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `Boolean` | No |  |
| `created_at` | `String` | No |  |
| `description` | `String` | No |  |
| `expires_at` | `String` | No |  |
| `id` | `Integer` | No |  |
| `last_used_at` | `String` | No |  |
| `last_used_ip` | `Array` | No |  |
| `name` | `String` | No |  |
| `revoked` | `Boolean` | No |  |
| `scope` | `Array` | No |  |
| `user_id` | `Integer` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiEntitiesPersonalAccessTokenWithLastUsedIp.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesPersonalAccessTokenWithLastUsedIp.load({ "id" => "api_entities_personal_access_token_with_last_used_ip_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesPersonalAccessTokenWithLastUsedIpEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesPersonalAccessTokenWithTokenEntity

```ruby
api_entities_personal_access_token_with_token = client.ApiEntitiesPersonalAccessTokenWithToken
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `Boolean` | No |  |
| `created_at` | `String` | No |  |
| `description` | `String` | No |  |
| `expires_at` | `String` | No |  |
| `id` | `Integer` | No |  |
| `last_used_at` | `String` | No |  |
| `name` | `String` | No |  |
| `revoked` | `Boolean` | No |  |
| `scope` | `Array` | No |  |
| `token` | `String` | No |  |
| `user_id` | `Integer` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ApiEntitiesPersonalAccessTokenWithToken.create({
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesPersonalAccessTokenWithTokenEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesPersonalSnippetEntity

```ruby
api_entities_personal_snippet = client.ApiEntitiesPersonalSnippet
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `Hash` | No |  |
| `created_at` | `String` | No |  |
| `description` | `String` | No |  |
| `file` | `Array` | No |  |
| `file_name` | `String` | No |  |
| `http_url_to_repo` | `String` | No |  |
| `id` | `Integer` | No |  |
| `imported` | `Boolean` | No |  |
| `imported_from` | `String` | No |  |
| `project_id` | `Integer` | No |  |
| `raw_url` | `String` | No |  |
| `repository_storage` | `String` | No |  |
| `ssh_url_to_repo` | `String` | No |  |
| `title` | `String` | No |  |
| `updated_at` | `String` | No |  |
| `visibility` | `String` | No |  |
| `web_url` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ApiEntitiesPersonalSnippet.create({
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiEntitiesPersonalSnippet.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesPersonalSnippet.load({ "id" => "api_entities_personal_snippet_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ApiEntitiesPersonalSnippet.update({
  "id" => "api_entities_personal_snippet_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesPersonalSnippetEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesPlanLimitEntity

```ruby
api_entities_plan_limit = client.ApiEntitiesPlanLimit
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ci_active_job` | `Integer` | No |  |
| `ci_instance_level_variable` | `Integer` | No |  |
| `ci_needs_size_limit` | `Integer` | No |  |
| `ci_pipeline_schedule` | `Integer` | No |  |
| `ci_pipeline_size` | `Integer` | No |  |
| `ci_project_subscription` | `Integer` | No |  |
| `ci_registered_group_runner` | `Integer` | No |  |
| `ci_registered_project_runner` | `Integer` | No |  |
| `conan_max_file_size` | `Integer` | No |  |
| `dotenv_size` | `Integer` | No |  |
| `dotenv_variable` | `Integer` | No |  |
| `enforcement_limit` | `Integer` | No |  |
| `generic_packages_max_file_size` | `Integer` | No |  |
| `helm_max_file_size` | `Integer` | No |  |
| `limits_history` | `Hash` | No |  |
| `maven_max_file_size` | `Integer` | No |  |
| `notification_limit` | `Integer` | No |  |
| `npm_max_file_size` | `Integer` | No |  |
| `nuget_max_file_size` | `Integer` | No |  |
| `pipeline_hierarchy_size` | `Integer` | No |  |
| `pypi_max_file_size` | `Integer` | No |  |
| `storage_size_limit` | `Integer` | No |  |
| `terraform_module_max_file_size` | `Integer` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesPlanLimit.load()
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ApiEntitiesPlanLimit.update({
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesPlanLimitEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesProjectEntity

```ruby
api_entities_project = client.ApiEntitiesProject
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_merge_on_skipped_pipeline` | `Boolean` | No |  |
| `allow_pipeline_trigger_approve_deployment` | `Boolean` | No |  |
| `analytics_access_level` | `String` | No |  |
| `approvals_before_merge` | `String` | No |  |
| `archived` | `Boolean` | No |  |
| `auto_cancel_pending_pipeline` | `String` | No |  |
| `auto_devops_deploy_strategy` | `String` | No |  |
| `auto_devops_enabled` | `Boolean` | No |  |
| `auto_duo_code_review_enabled` | `String` | No |  |
| `autoclose_referenced_issue` | `Boolean` | No |  |
| `avatar_url` | `String` | No |  |
| `build_git_strategy` | `String` | No |  |
| `build_timeout` | `Integer` | No |  |
| `builds_access_level` | `String` | No |  |
| `can_create_merge_request_in` | `Boolean` | No |  |
| `ci_allow_fork_pipelines_to_run_in_parent_project` | `Boolean` | No |  |
| `ci_config_path` | `String` | No |  |
| `ci_default_git_depth` | `Integer` | No |  |
| `ci_delete_pipelines_in_second` | `Integer` | No |  |
| `ci_forward_deployment_enabled` | `Boolean` | No |  |
| `ci_forward_deployment_rollback_allowed` | `Boolean` | No |  |
| `ci_id_token_sub_claim_component` | `Array` | No |  |
| `ci_job_token_scope_enabled` | `Boolean` | No |  |
| `ci_pipeline_variables_minimum_override_role` | `String` | No |  |
| `ci_push_repository_for_job_token_allowed` | `Boolean` | No |  |
| `ci_restrict_pipeline_cancellation_role` | `String` | No |  |
| `ci_separated_cache` | `Boolean` | No |  |
| `compliance_framework` | `String` | No |  |
| `container_expiration_policy` | `Hash` | No |  |
| `container_registry_access_level` | `String` | No |  |
| `container_registry_enabled` | `Boolean` | No |  |
| `container_registry_image_prefix` | `String` | No |  |
| `created_at` | `String` | No |  |
| `creator_id` | `Integer` | No |  |
| `custom_attribute` | `Hash` | No |  |
| `default_branch` | `String` | No |  |
| `description` | `String` | No |  |
| `description_html` | `String` | No |  |
| `duo_remote_flows_enabled` | `String` | No |  |
| `emails_disabled` | `Boolean` | No |  |
| `emails_enabled` | `Boolean` | No |  |
| `empty_repo` | `Boolean` | No |  |
| `enforce_auth_checks_on_upload` | `Boolean` | No |  |
| `environments_access_level` | `String` | No |  |
| `external_authorization_classification_label` | `String` | No |  |
| `feature_flags_access_level` | `String` | No |  |
| `forked_from_project` | `Hash` | No |  |
| `forking_access_level` | `String` | No |  |
| `forks_count` | `Integer` | No |  |
| `group_runners_enabled` | `Boolean` | No |  |
| `http_url_to_repo` | `String` | No |  |
| `id` | `Integer` | No |  |
| `import_error` | `String` | No |  |
| `import_status` | `String` | No |  |
| `import_type` | `String` | No |  |
| `import_url` | `String` | No |  |
| `infrastructure_access_level` | `String` | No |  |
| `issue_branch_template` | `String` | No |  |
| `issues_access_level` | `String` | No |  |
| `issues_enabled` | `Boolean` | No |  |
| `issues_template` | `String` | No |  |
| `jobs_enabled` | `Boolean` | No |  |
| `keep_latest_artifact` | `Boolean` | No |  |
| `last_activity_at` | `String` | No |  |
| `lfs_enabled` | `Boolean` | No |  |
| `license` | `Hash` | No |  |
| `license_url` | `String` | No |  |
| `link` | `Hash` | No |  |
| `marked_for_deletion_at` | `String` | No |  |
| `marked_for_deletion_on` | `String` | No |  |
| `max_artifacts_size` | `Integer` | No |  |
| `merge_commit_template` | `String` | No |  |
| `merge_method` | `String` | No |  |
| `merge_pipelines_enabled` | `String` | No |  |
| `merge_request_title_regex` | `String` | No |  |
| `merge_request_title_regex_description` | `String` | No |  |
| `merge_requests_access_level` | `String` | No |  |
| `merge_requests_enabled` | `Boolean` | No |  |
| `merge_requests_template` | `String` | No |  |
| `merge_trains_enabled` | `String` | No |  |
| `merge_trains_skip_train_allowed` | `String` | No |  |
| `mirror` | `String` | No |  |
| `mirror_overwrites_diverged_branch` | `String` | No |  |
| `mirror_trigger_build` | `String` | No |  |
| `mirror_user_id` | `String` | No |  |
| `model_experiments_access_level` | `String` | No |  |
| `model_registry_access_level` | `String` | No |  |
| `monitor_access_level` | `String` | No |  |
| `mr_default_target_self` | `Boolean` | No |  |
| `name` | `String` | No |  |
| `name_with_namespace` | `String` | No |  |
| `namespace` | `Hash` | No |  |
| `only_allow_merge_if_all_discussions_are_resolved` | `Boolean` | No |  |
| `only_allow_merge_if_all_status_checks_passed` | `String` | No |  |
| `only_allow_merge_if_pipeline_succeed` | `Boolean` | No |  |
| `only_mirror_protected_branch` | `String` | No |  |
| `open_issues_count` | `Integer` | No |  |
| `owner` | `Hash` | No |  |
| `package_registry_access_level` | `String` | No |  |
| `packages_enabled` | `Boolean` | No |  |
| `pages_access_level` | `String` | No |  |
| `path` | `String` | No |  |
| `path_with_namespace` | `String` | No |  |
| `pre_receive_secret_detection_enabled` | `Boolean` | No |  |
| `prevent_merge_without_jira_issue` | `String` | No |  |
| `printing_merge_request_link_enabled` | `Boolean` | No |  |
| `public_job` | `Boolean` | No |  |
| `readme_url` | `String` | No |  |
| `releases_access_level` | `String` | No |  |
| `remove_source_branch_after_merge` | `Boolean` | No |  |
| `repository_access_level` | `String` | No |  |
| `repository_object_format` | `String` | No |  |
| `repository_storage` | `String` | No |  |
| `request_access_enabled` | `Boolean` | No |  |
| `requirements_access_level` | `String` | No |  |
| `requirements_enabled` | `String` | No |  |
| `resolve_outdated_diff_discussion` | `Boolean` | No |  |
| `resource_group_default_process_mode` | `String` | No |  |
| `restrict_user_defined_variable` | `Boolean` | No |  |
| `runner_token_expiration_interval` | `Integer` | No |  |
| `runners_token` | `String` | No |  |
| `secret_push_protection_enabled` | `Boolean` | No |  |
| `security_and_compliance_access_level` | `String` | No |  |
| `security_and_compliance_enabled` | `String` | No |  |
| `service_desk_address` | `String` | No |  |
| `service_desk_enabled` | `Boolean` | No |  |
| `shared_runners_enabled` | `Boolean` | No |  |
| `shared_with_group` | `Array` | No |  |
| `show_diff_preview_in_email` | `Boolean` | No |  |
| `snippets_access_level` | `String` | No |  |
| `snippets_enabled` | `Boolean` | No |  |
| `spp_repository_pipeline_access` | `Boolean` | No |  |
| `squash_commit_template` | `String` | No |  |
| `squash_option` | `String` | No |  |
| `ssh_url_to_repo` | `String` | No |  |
| `star_count` | `Integer` | No |  |
| `statistic` | `Hash` | No |  |
| `suggestion_commit_message` | `String` | No |  |
| `tag_list` | `Array` | No |  |
| `topic` | `Array` | No |  |
| `updated_at` | `String` | No |  |
| `visibility` | `String` | No |  |
| `warn_about_potentially_unwanted_character` | `Boolean` | No |  |
| `web_based_commit_signing_enabled` | `String` | No |  |
| `web_url` | `String` | No |  |
| `wiki_access_level` | `String` | No |  |
| `wiki_enabled` | `Boolean` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ApiEntitiesProject.create({
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiEntitiesProject.list
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ApiEntitiesProject.update({
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesProjectEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesProjectDailyStatisticEntity

```ruby
api_entities_project_daily_statistic = client.ApiEntitiesProjectDailyStatistic
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fetch` | `Hash` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesProjectDailyStatistic.load({ "project_id" => "project_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesProjectDailyStatisticEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesProjectExportStatusEntity

```ruby
api_entities_project_export_status = client.ApiEntitiesProjectExportStatus
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `String` | No |  |
| `description` | `String` | No |  |
| `export_status` | `String` | No |  |
| `id` | `Integer` | No |  |
| `link` | `Hash` | No |  |
| `name` | `String` | No |  |
| `name_with_namespace` | `String` | No |  |
| `path` | `String` | No |  |
| `path_with_namespace` | `String` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesProjectExportStatus.load({ "project_id" => "project_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesProjectExportStatusEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesProjectGroupLinkEntity

```ruby
api_entities_project_group_link = client.ApiEntitiesProjectGroupLink
```

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ApiEntitiesProjectGroupLink.create({
  "project_id" => "example_project_id", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesProjectGroupLinkEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesProjectHookEntity

```ruby
api_entities_project_hook = client.ApiEntitiesProjectHook
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert_status` | `Object` | No |  |
| `branch_filter_strategy` | `String` | No |  |
| `confidential_issues_event` | `Boolean` | No |  |
| `confidential_note_event` | `Boolean` | No |  |
| `created_at` | `String` | No |  |
| `custom_header` | `Array` | No |  |
| `custom_webhook_template` | `String` | No |  |
| `deployment_event` | `Boolean` | No |  |
| `description` | `String` | No |  |
| `disabled_until` | `String` | No |  |
| `emoji_event` | `Boolean` | No |  |
| `enable_ssl_verification` | `Boolean` | No |  |
| `feature_flag_event` | `Boolean` | No |  |
| `id` | `String` | No |  |
| `issues_event` | `Boolean` | No |  |
| `job_event` | `Boolean` | No |  |
| `merge_requests_event` | `Boolean` | No |  |
| `milestone_event` | `Boolean` | No |  |
| `name` | `String` | No |  |
| `note_event` | `Boolean` | No |  |
| `pipeline_event` | `Boolean` | No |  |
| `project_id` | `String` | No |  |
| `push_event` | `Boolean` | No |  |
| `push_events_branch_filter` | `String` | No |  |
| `releases_event` | `Boolean` | No |  |
| `repository_update_event` | `Boolean` | No |  |
| `resource_access_token_event` | `Boolean` | No |  |
| `tag_push_event` | `Boolean` | No |  |
| `url` | `String` | No |  |
| `url_variable` | `Array` | No |  |
| `vulnerability_event` | `Boolean` | No |  |
| `wiki_page_event` | `Boolean` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ApiEntitiesProjectHook.create({
  "project_id" => "example_project_id", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiEntitiesProjectHook.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesProjectHook.load({ "id" => "api_entities_project_hook_id", "project_id" => "project_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ApiEntitiesProjectHook.update({
  "id" => "api_entities_project_hook_id",
  "project_id" => "project_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesProjectHookEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesProjectImportStatusEntity

```ruby
api_entities_project_import_status = client.ApiEntitiesProjectImportStatus
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `String` | No |  |
| `exception_class` | `String` | No |  |
| `exception_message` | `String` | No |  |
| `id` | `String` | No |  |
| `line_number` | `Integer` | No |  |
| `relation_name` | `String` | No |  |
| `source` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ApiEntitiesProjectImportStatus.create({
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiEntitiesProjectImportStatus.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesProjectImportStatusEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesProjectJobTokenScopeEntity

```ruby
api_entities_project_job_token_scope = client.ApiEntitiesProjectJobTokenScope
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `inbound_enabled` | `Boolean` | No |  |
| `outbound_enabled` | `Boolean` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesProjectJobTokenScope.load({ "project_id" => "project_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesProjectJobTokenScopeEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesProjectRepositoryStorageEntity

```ruby
api_entities_project_repository_storage = client.ApiEntitiesProjectRepositoryStorage
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `String` | No |  |
| `disk_path` | `String` | No |  |
| `project_id` | `Integer` | No |  |
| `repository_storage` | `String` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesProjectRepositoryStorage.load({ "project_id" => "project_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesProjectRepositoryStorageEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesProjectSnippetEntity

```ruby
api_entities_project_snippet = client.ApiEntitiesProjectSnippet
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `Hash` | No |  |
| `created_at` | `String` | No |  |
| `description` | `String` | No |  |
| `file` | `Array` | No |  |
| `file_name` | `String` | No |  |
| `http_url_to_repo` | `String` | No |  |
| `id` | `Integer` | No |  |
| `imported` | `Boolean` | No |  |
| `imported_from` | `String` | No |  |
| `project_id` | `Integer` | No |  |
| `raw_url` | `String` | No |  |
| `repository_storage` | `String` | No |  |
| `ssh_url_to_repo` | `String` | No |  |
| `title` | `String` | No |  |
| `updated_at` | `String` | No |  |
| `visibility` | `String` | No |  |
| `web_url` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ApiEntitiesProjectSnippet.create({
  "project_id" => "example_project_id", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiEntitiesProjectSnippet.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesProjectSnippet.load({ "id" => "api_entities_project_snippet_id", "project_id" => "project_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ApiEntitiesProjectSnippet.update({
  "id" => "api_entities_project_snippet_id",
  "project_id" => "project_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesProjectSnippetEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesProjectUploadEntity

```ruby
api_entities_project_upload = client.ApiEntitiesProjectUpload
```

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ApiEntitiesProjectUpload.create({
  "project_id" => "example_project_id", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesProjectUploadEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesProjectWithAccessEntity

```ruby
api_entities_project_with_access = client.ApiEntitiesProjectWithAccess
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_merge_on_skipped_pipeline` | `Boolean` | No |  |
| `allow_pipeline_trigger_approve_deployment` | `Boolean` | No |  |
| `analytics_access_level` | `String` | No |  |
| `approvals_before_merge` | `String` | No |  |
| `archived` | `Boolean` | No |  |
| `auto_cancel_pending_pipeline` | `String` | No |  |
| `auto_devops_deploy_strategy` | `String` | No |  |
| `auto_devops_enabled` | `Boolean` | No |  |
| `auto_duo_code_review_enabled` | `String` | No |  |
| `autoclose_referenced_issue` | `Boolean` | No |  |
| `avatar_url` | `String` | No |  |
| `build_git_strategy` | `String` | No |  |
| `build_timeout` | `Integer` | No |  |
| `builds_access_level` | `String` | No |  |
| `can_create_merge_request_in` | `Boolean` | No |  |
| `ci_allow_fork_pipelines_to_run_in_parent_project` | `Boolean` | No |  |
| `ci_config_path` | `String` | No |  |
| `ci_default_git_depth` | `Integer` | No |  |
| `ci_delete_pipelines_in_second` | `Integer` | No |  |
| `ci_forward_deployment_enabled` | `Boolean` | No |  |
| `ci_forward_deployment_rollback_allowed` | `Boolean` | No |  |
| `ci_id_token_sub_claim_component` | `Array` | No |  |
| `ci_job_token_scope_enabled` | `Boolean` | No |  |
| `ci_pipeline_variables_minimum_override_role` | `String` | No |  |
| `ci_push_repository_for_job_token_allowed` | `Boolean` | No |  |
| `ci_restrict_pipeline_cancellation_role` | `String` | No |  |
| `ci_separated_cache` | `Boolean` | No |  |
| `compliance_framework` | `String` | No |  |
| `container_expiration_policy` | `Hash` | No |  |
| `container_registry_access_level` | `String` | No |  |
| `container_registry_enabled` | `Boolean` | No |  |
| `container_registry_image_prefix` | `String` | No |  |
| `created_at` | `String` | No |  |
| `creator_id` | `Integer` | No |  |
| `custom_attribute` | `Hash` | No |  |
| `default_branch` | `String` | No |  |
| `description` | `String` | No |  |
| `description_html` | `String` | No |  |
| `duo_remote_flows_enabled` | `String` | No |  |
| `emails_disabled` | `Boolean` | No |  |
| `emails_enabled` | `Boolean` | No |  |
| `empty_repo` | `Boolean` | No |  |
| `enforce_auth_checks_on_upload` | `Boolean` | No |  |
| `environments_access_level` | `String` | No |  |
| `external_authorization_classification_label` | `String` | No |  |
| `feature_flags_access_level` | `String` | No |  |
| `forked_from_project` | `Hash` | No |  |
| `forking_access_level` | `String` | No |  |
| `forks_count` | `Integer` | No |  |
| `group_runners_enabled` | `Boolean` | No |  |
| `http_url_to_repo` | `String` | No |  |
| `id` | `Integer` | No |  |
| `import_error` | `String` | No |  |
| `import_status` | `String` | No |  |
| `import_type` | `String` | No |  |
| `import_url` | `String` | No |  |
| `infrastructure_access_level` | `String` | No |  |
| `issue_branch_template` | `String` | No |  |
| `issues_access_level` | `String` | No |  |
| `issues_enabled` | `Boolean` | No |  |
| `issues_template` | `String` | No |  |
| `jobs_enabled` | `Boolean` | No |  |
| `keep_latest_artifact` | `Boolean` | No |  |
| `last_activity_at` | `String` | No |  |
| `lfs_enabled` | `Boolean` | No |  |
| `license` | `Hash` | No |  |
| `license_url` | `String` | No |  |
| `link` | `Hash` | No |  |
| `marked_for_deletion_at` | `String` | No |  |
| `marked_for_deletion_on` | `String` | No |  |
| `max_artifacts_size` | `Integer` | No |  |
| `merge_commit_template` | `String` | No |  |
| `merge_method` | `String` | No |  |
| `merge_pipelines_enabled` | `String` | No |  |
| `merge_request_title_regex` | `String` | No |  |
| `merge_request_title_regex_description` | `String` | No |  |
| `merge_requests_access_level` | `String` | No |  |
| `merge_requests_enabled` | `Boolean` | No |  |
| `merge_requests_template` | `String` | No |  |
| `merge_trains_enabled` | `String` | No |  |
| `merge_trains_skip_train_allowed` | `String` | No |  |
| `mirror` | `String` | No |  |
| `mirror_overwrites_diverged_branch` | `String` | No |  |
| `mirror_trigger_build` | `String` | No |  |
| `mirror_user_id` | `String` | No |  |
| `model_experiments_access_level` | `String` | No |  |
| `model_registry_access_level` | `String` | No |  |
| `monitor_access_level` | `String` | No |  |
| `mr_default_target_self` | `Boolean` | No |  |
| `name` | `String` | No |  |
| `name_with_namespace` | `String` | No |  |
| `namespace` | `Hash` | No |  |
| `only_allow_merge_if_all_discussions_are_resolved` | `Boolean` | No |  |
| `only_allow_merge_if_all_status_checks_passed` | `String` | No |  |
| `only_allow_merge_if_pipeline_succeed` | `Boolean` | No |  |
| `only_mirror_protected_branch` | `String` | No |  |
| `open_issues_count` | `Integer` | No |  |
| `owner` | `Hash` | No |  |
| `package_registry_access_level` | `String` | No |  |
| `packages_enabled` | `Boolean` | No |  |
| `pages_access_level` | `String` | No |  |
| `path` | `String` | No |  |
| `path_with_namespace` | `String` | No |  |
| `permission` | `Hash` | No |  |
| `pre_receive_secret_detection_enabled` | `Boolean` | No |  |
| `prevent_merge_without_jira_issue` | `String` | No |  |
| `printing_merge_request_link_enabled` | `Boolean` | No |  |
| `public_job` | `Boolean` | No |  |
| `readme_url` | `String` | No |  |
| `releases_access_level` | `String` | No |  |
| `remove_source_branch_after_merge` | `Boolean` | No |  |
| `repository_access_level` | `String` | No |  |
| `repository_object_format` | `String` | No |  |
| `repository_storage` | `String` | No |  |
| `request_access_enabled` | `Boolean` | No |  |
| `requirements_access_level` | `String` | No |  |
| `requirements_enabled` | `String` | No |  |
| `resolve_outdated_diff_discussion` | `Boolean` | No |  |
| `resource_group_default_process_mode` | `String` | No |  |
| `restrict_user_defined_variable` | `Boolean` | No |  |
| `runner_token_expiration_interval` | `Integer` | No |  |
| `runners_token` | `String` | No |  |
| `secret_push_protection_enabled` | `Boolean` | No |  |
| `security_and_compliance_access_level` | `String` | No |  |
| `security_and_compliance_enabled` | `String` | No |  |
| `service_desk_address` | `String` | No |  |
| `service_desk_enabled` | `Boolean` | No |  |
| `shared_runners_enabled` | `Boolean` | No |  |
| `shared_with_group` | `Array` | No |  |
| `show_diff_preview_in_email` | `Boolean` | No |  |
| `snippets_access_level` | `String` | No |  |
| `snippets_enabled` | `Boolean` | No |  |
| `spp_repository_pipeline_access` | `Boolean` | No |  |
| `squash_commit_template` | `String` | No |  |
| `squash_option` | `String` | No |  |
| `ssh_url_to_repo` | `String` | No |  |
| `star_count` | `Integer` | No |  |
| `statistic` | `Hash` | No |  |
| `suggestion_commit_message` | `String` | No |  |
| `tag_list` | `Array` | No |  |
| `topic` | `Array` | No |  |
| `updated_at` | `String` | No |  |
| `visibility` | `String` | No |  |
| `warn_about_potentially_unwanted_character` | `Boolean` | No |  |
| `web_based_commit_signing_enabled` | `String` | No |  |
| `web_url` | `String` | No |  |
| `wiki_access_level` | `String` | No |  |
| `wiki_enabled` | `Boolean` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesProjectWithAccess.load({ "id" => "api_entities_project_with_access_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesProjectWithAccessEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesProjectsContainerRegistryProtectionRuleEntity

```ruby
api_entities_projects_container_registry_protection_rule = client.ApiEntitiesProjectsContainerRegistryProtectionRule
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `Integer` | No |  |
| `minimum_access_level_for_delete` | `String` | No |  |
| `minimum_access_level_for_push` | `String` | No |  |
| `project_id` | `Integer` | No |  |
| `repository_path_pattern` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ApiEntitiesProjectsContainerRegistryProtectionRule.create({
  "project_id" => "example_project_id", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiEntitiesProjectsContainerRegistryProtectionRule.list
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ApiEntitiesProjectsContainerRegistryProtectionRule.update({
  "id" => "id",
  "project_id" => "project_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesProjectsContainerRegistryProtectionRuleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesProjectsPackagesProtectionRuleEntity

```ruby
api_entities_projects_packages_protection_rule = client.ApiEntitiesProjectsPackagesProtectionRule
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `Integer` | No |  |
| `minimum_access_level_for_delete` | `String` | No |  |
| `minimum_access_level_for_push` | `String` | No |  |
| `package_name_pattern` | `String` | No |  |
| `package_type` | `String` | No |  |
| `project_id` | `Integer` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ApiEntitiesProjectsPackagesProtectionRule.create({
  "project_id" => "example_project_id", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiEntitiesProjectsPackagesProtectionRule.list
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ApiEntitiesProjectsPackagesProtectionRule.update({
  "id" => "id",
  "project_id" => "project_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesProjectsPackagesProtectionRuleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesProjectsTopicEntity

```ruby
api_entities_projects_topic = client.ApiEntitiesProjectsTopic
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_url` | `String` | No |  |
| `description` | `String` | No |  |
| `id` | `String` | No |  |
| `name` | `String` | No |  |
| `organization_id` | `String` | No |  |
| `title` | `String` | No |  |
| `total_projects_count` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ApiEntitiesProjectsTopic.create({
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesProjectsTopic.load({ "id" => "api_entities_projects_topic_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ApiEntitiesProjectsTopic.update({
  "id" => "api_entities_projects_topic_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesProjectsTopicEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesProtectedBranchEntity

```ruby
api_entities_protected_branch = client.ApiEntitiesProtectedBranch
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_force_push` | `Boolean` | No |  |
| `code_owner_approval_required` | `Boolean` | No |  |
| `id` | `Integer` | No |  |
| `inherited` | `Boolean` | No |  |
| `merge_access_level` | `Array` | No |  |
| `name` | `String` | No |  |
| `push_access_level` | `Array` | No |  |
| `unprotect_access_level` | `Array` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ApiEntitiesProtectedBranch.create({
  "project_id" => "example_project_id", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiEntitiesProtectedBranch.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesProtectedBranch.load({ "id" => "api_entities_protected_branch_id", "project_id" => "project_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ApiEntitiesProtectedBranch.update({
  "id" => "api_entities_protected_branch_id",
  "project_id" => "project_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesProtectedBranchEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesProtectedTagEntity

```ruby
api_entities_protected_tag = client.ApiEntitiesProtectedTag
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `create_access_level` | `Hash` | No |  |
| `name` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ApiEntitiesProtectedTag.create({
  "project_id" => "example_project_id", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiEntitiesProtectedTag.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesProtectedTag.load({ "id" => "api_entities_protected_tag_id", "project_id" => "project_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesProtectedTagEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesPublicGroupDetailEntity

```ruby
api_entities_public_group_detail = client.ApiEntitiesPublicGroupDetail
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_url` | `String` | No |  |
| `full_name` | `String` | No |  |
| `full_path` | `String` | No |  |
| `id` | `String` | No |  |
| `name` | `String` | No |  |
| `web_url` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiEntitiesPublicGroupDetail.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesPublicGroupDetailEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesRelatedIssueEntity

```ruby
api_entities_related_issue = client.ApiEntitiesRelatedIssue
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assignee` | `Hash` | No |  |
| `author` | `Hash` | No |  |
| `blocking_issues_count` | `String` | No |  |
| `closed_at` | `String` | No |  |
| `closed_by` | `Hash` | No |  |
| `confidential` | `Boolean` | No |  |
| `created_at` | `String` | No |  |
| `description` | `String` | No |  |
| `discussion_locked` | `Boolean` | No |  |
| `downvote` | `String` | No |  |
| `due_date` | `String` | No |  |
| `epic` | `Hash` | No |  |
| `epic_iid` | `String` | No |  |
| `has_task` | `Boolean` | No |  |
| `health_status` | `String` | No |  |
| `id` | `Integer` | No |  |
| `iid` | `Integer` | No |  |
| `imported` | `String` | No |  |
| `imported_from` | `String` | No |  |
| `issue_link_id` | `String` | No |  |
| `issue_type` | `String` | No |  |
| `iteration` | `Hash` | No |  |
| `label` | `Array` | No |  |
| `link` | `Hash` | No |  |
| `link_created_at` | `String` | No |  |
| `link_type` | `String` | No |  |
| `link_updated_at` | `String` | No |  |
| `merge_requests_count` | `String` | No |  |
| `milestone` | `Hash` | No |  |
| `moved_to_id` | `String` | No |  |
| `project_id` | `Integer` | No |  |
| `reference` | `Hash` | No |  |
| `service_desk_reply_to` | `String` | No |  |
| `severity` | `String` | No |  |
| `state` | `String` | No |  |
| `subscribed` | `String` | No |  |
| `task_completion_status` | `String` | No |  |
| `task_status` | `String` | No |  |
| `time_stat` | `Hash` | No |  |
| `title` | `String` | No |  |
| `type` | `String` | No |  |
| `updated_at` | `String` | No |  |
| `upvote` | `String` | No |  |
| `user_notes_count` | `String` | No |  |
| `web_url` | `String` | No |  |
| `weight` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiEntitiesRelatedIssue.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesRelatedIssueEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesRelationImportTrackerEntity

```ruby
api_entities_relation_import_tracker = client.ApiEntitiesRelationImportTracker
```

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ApiEntitiesRelationImportTracker.create({
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesRelationImportTrackerEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesReleaseEntity

```ruby
api_entities_release = client.ApiEntitiesRelease
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `asset` | `Hash` | No |  |
| `author` | `Hash` | No |  |
| `commit` | `Hash` | No |  |
| `commit_path` | `String` | No |  |
| `created_at` | `String` | No |  |
| `description` | `String` | No |  |
| `description_html` | `String` | No |  |
| `evidence` | `Hash` | No |  |
| `link` | `Hash` | No |  |
| `milestone` | `Hash` | No |  |
| `name` | `String` | No |  |
| `released_at` | `String` | No |  |
| `tag_name` | `String` | No |  |
| `tag_path` | `String` | No |  |
| `upcoming_release` | `Boolean` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ApiEntitiesRelease.create({
  "project_id" => "example_project_id", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiEntitiesRelease.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesRelease.load({ "id" => "api_entities_release_id", "project_id" => "project_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ApiEntitiesRelease.update({
  "id" => "api_entities_release_id",
  "project_id" => "project_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesReleaseEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesReleasesLinkEntity

```ruby
api_entities_releases_link = client.ApiEntitiesReleasesLink
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `direct_asset_url` | `String` | No |  |
| `id` | `Integer` | No |  |
| `link_type` | `String` | No |  |
| `name` | `String` | No |  |
| `url` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ApiEntitiesReleasesLink.create({
  "project_id" => "example_project_id", # String
  "release_id" => "example_release_id", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiEntitiesReleasesLink.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesReleasesLink.load({ "id" => "api_entities_releases_link_id", "project_id" => "project_id", "release_id" => "release_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ApiEntitiesReleasesLink.update({
  "id" => "api_entities_releases_link_id",
  "project_id" => "project_id",
  "release_id" => "release_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesReleasesLinkEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesRemoteMirrorEntity

```ruby
api_entities_remote_mirror = client.ApiEntitiesRemoteMirror
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_method` | `String` | No |  |
| `enabled` | `Boolean` | No |  |
| `host_key` | `Array` | No |  |
| `id` | `Integer` | No |  |
| `keep_divergent_ref` | `Boolean` | No |  |
| `last_error` | `Integer` | No |  |
| `last_successful_update_at` | `String` | No |  |
| `last_update_at` | `String` | No |  |
| `last_update_started_at` | `String` | No |  |
| `mirror_branch_regex` | `String` | No |  |
| `only_protected_branch` | `Boolean` | No |  |
| `update_status` | `String` | No |  |
| `url` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ApiEntitiesRemoteMirror.create({
  "project_id" => "example_project_id", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiEntitiesRemoteMirror.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesRemoteMirror.load({ "id" => "api_entities_remote_mirror_id", "project_id" => "project_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ApiEntitiesRemoteMirror.update({
  "id" => "api_entities_remote_mirror_id",
  "project_id" => "project_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesRemoteMirrorEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesRepositoryHealthEntity

```ruby
api_entities_repository_health = client.ApiEntitiesRepositoryHealth
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alternate` | `Hash` | No |  |
| `bitmap` | `Hash` | No |  |
| `commit_graph` | `Hash` | No |  |
| `is_object_pool` | `Boolean` | No |  |
| `last_full_repack` | `Hash` | No |  |
| `multi_pack_index` | `Hash` | No |  |
| `multi_pack_index_bitmap` | `Hash` | No |  |
| `object` | `Hash` | No |  |
| `reference` | `Hash` | No |  |
| `size` | `Integer` | No |  |
| `updated_at` | `String` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesRepositoryHealth.load({ "project_id" => "project_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesRepositoryHealthEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesResourceAccessTokenWithTokenEntity

```ruby
api_entities_resource_access_token_with_token = client.ApiEntitiesResourceAccessTokenWithToken
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access_level` | `Integer` | No |  |
| `active` | `Boolean` | No |  |
| `created_at` | `String` | No |  |
| `description` | `String` | No |  |
| `expires_at` | `String` | No |  |
| `id` | `Integer` | No |  |
| `last_used_at` | `String` | No |  |
| `name` | `String` | No |  |
| `resource_id` | `Integer` | No |  |
| `resource_type` | `String` | No |  |
| `revoked` | `Boolean` | No |  |
| `scope` | `Array` | No |  |
| `token` | `String` | No |  |
| `user_id` | `Integer` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ApiEntitiesResourceAccessTokenWithToken.create({
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesResourceAccessTokenWithTokenEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesResourceMilestoneEventEntity

```ruby
api_entities_resource_milestone_event = client.ApiEntitiesResourceMilestoneEvent
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `String` | No |  |
| `created_at` | `String` | No |  |
| `id` | `Integer` | No |  |
| `milestone` | `Hash` | No |  |
| `resource_id` | `Integer` | No |  |
| `resource_type` | `String` | No |  |
| `state` | `String` | No |  |
| `user` | `Hash` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiEntitiesResourceMilestoneEvent.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesResourceMilestoneEvent.load({ "id" => "api_entities_resource_milestone_event_id", "project_id" => "project_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesResourceMilestoneEventEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesSnippetEntity

```ruby
api_entities_snippet = client.ApiEntitiesSnippet
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `Hash` | No |  |
| `created_at` | `String` | No |  |
| `description` | `String` | No |  |
| `file` | `Array` | No |  |
| `file_name` | `String` | No |  |
| `http_url_to_repo` | `String` | No |  |
| `id` | `Integer` | No |  |
| `imported` | `Boolean` | No |  |
| `imported_from` | `String` | No |  |
| `project_id` | `Integer` | No |  |
| `raw_url` | `String` | No |  |
| `repository_storage` | `String` | No |  |
| `ssh_url_to_repo` | `String` | No |  |
| `title` | `String` | No |  |
| `updated_at` | `String` | No |  |
| `visibility` | `String` | No |  |
| `web_url` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiEntitiesSnippet.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesSnippetEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesSshKeyWithUserEntity

```ruby
api_entities_ssh_key_with_user = client.ApiEntitiesSshKeyWithUser
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `String` | No |  |
| `expires_at` | `String` | No |  |
| `id` | `Integer` | No |  |
| `key` | `String` | No |  |
| `last_used_at` | `String` | No |  |
| `title` | `String` | No |  |
| `usage_type` | `String` | No |  |
| `user` | `Hash` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesSshKeyWithUser.load({ "id" => "api_entities_ssh_key_with_user_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesSshKeyWithUserEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesSuggestionEntity

```ruby
api_entities_suggestion = client.ApiEntitiesSuggestion
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `appliable` | `String` | No |  |
| `applied` | `String` | No |  |
| `from_content` | `String` | No |  |
| `from_line` | `String` | No |  |
| `id` | `String` | No |  |
| `to_content` | `String` | No |  |
| `to_line` | `String` | No |  |

### Operations

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ApiEntitiesSuggestion.update({
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesSuggestionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesSystemBroadcastMessageEntity

```ruby
api_entities_system_broadcast_message = client.ApiEntitiesSystemBroadcastMessage
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `Boolean` | No |  |
| `broadcast_type` | `String` | No |  |
| `color` | `String` | No |  |
| `dismissable` | `String` | No |  |
| `ends_at` | `String` | No |  |
| `font` | `String` | No |  |
| `id` | `String` | No |  |
| `message` | `String` | No |  |
| `starts_at` | `String` | No |  |
| `target_access_level` | `String` | No |  |
| `target_path` | `String` | No |  |
| `theme` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ApiEntitiesSystemBroadcastMessage.create({
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesSystemBroadcastMessage.load({ "id" => "api_entities_system_broadcast_message_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesSystemBroadcastMessage.remove({ "id" => "api_entities_system_broadcast_message_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ApiEntitiesSystemBroadcastMessage.update({
  "id" => "api_entities_system_broadcast_message_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesSystemBroadcastMessageEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesTagEntity

```ruby
api_entities_tag = client.ApiEntitiesTag
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `commit` | `Hash` | No |  |
| `created_at` | `String` | No |  |
| `message` | `String` | No |  |
| `name` | `String` | No |  |
| `protected` | `Boolean` | No |  |
| `release` | `Hash` | No |  |
| `target` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ApiEntitiesTag.create({
  "project_id" => "example_project_id", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiEntitiesTag.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesTag.load({ "id" => "api_entities_tag_id", "project_id" => "project_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesTagEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesTagSignatureEntity

```ruby
api_entities_tag_signature = client.ApiEntitiesTagSignature
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `signature` | `String` | No |  |
| `signature_type` | `String` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesTagSignature.load({ "project_id" => "project_id", "tag_name" => "tag_name" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesTagSignatureEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesTemplatesListEntity

```ruby
api_entities_templates_list = client.ApiEntitiesTemplatesList
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `key` | `String` | No |  |
| `name` | `String` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesTemplatesList.load({ "project_id" => "project_id", "type" => "type" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesTemplatesListEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesTerraformModuleVersionEntity

```ruby
api_entities_terraform_module_version = client.ApiEntitiesTerraformModuleVersion
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `module` | `String` | No |  |
| `name` | `String` | No |  |
| `provider` | `String` | No |  |
| `root` | `String` | No |  |
| `source` | `String` | No |  |
| `submodule` | `String` | No |  |
| `version` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiEntitiesTerraformModuleVersion.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesTerraformModuleVersion.load({ "module_name" => "module_name", "module_system" => "module_system" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesTerraformModuleVersionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesTreeObjectEntity

```ruby
api_entities_tree_object = client.ApiEntitiesTreeObject
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |
| `mode` | `String` | No |  |
| `name` | `String` | No |  |
| `path` | `String` | No |  |
| `type` | `String` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesTreeObject.load({ "project_id" => "project_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesTreeObjectEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesTriggerEntity

```ruby
api_entities_trigger = client.ApiEntitiesTrigger
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `String` | No |  |
| `description` | `String` | No |  |
| `expires_at` | `String` | No |  |
| `id` | `Integer` | No |  |
| `last_used` | `String` | No |  |
| `owner` | `Hash` | No |  |
| `token` | `String` | No |  |
| `updated_at` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ApiEntitiesTrigger.create({
  "project_id" => "example_project_id", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiEntitiesTrigger.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesTrigger.load({ "id" => "api_entities_trigger_id", "project_id" => "project_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ApiEntitiesTrigger.update({
  "id" => "api_entities_trigger_id",
  "project_id" => "project_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesTriggerEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesUserAgentDetailEntity

```ruby
api_entities_user_agent_detail = client.ApiEntitiesUserAgentDetail
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `akismet_submitted` | `Boolean` | No |  |
| `ip_address` | `String` | No |  |
| `user_agent` | `String` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesUserAgentDetail.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesUserAgentDetailEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesUserCountEntity

```ruby
api_entities_user_count = client.ApiEntitiesUserCount
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assigned_issue` | `Integer` | No |  |
| `assigned_merge_request` | `Integer` | No |  |
| `merge_request` | `Integer` | No |  |
| `review_requested_merge_request` | `Integer` | No |  |
| `todo` | `Integer` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesUserCount.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesUserCountEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesUserPublicEntity

```ruby
api_entities_user_public = client.ApiEntitiesUserPublic
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_path` | `String` | No |  |
| `avatar_url` | `String` | No |  |
| `bio` | `String` | No |  |
| `bot` | `String` | No |  |
| `can_create_group` | `Boolean` | No |  |
| `can_create_project` | `Boolean` | No |  |
| `color_scheme_id` | `Integer` | No |  |
| `commit_email` | `String` | No |  |
| `confirmed_at` | `String` | No |  |
| `created_at` | `String` | No |  |
| `current_sign_in_at` | `String` | No |  |
| `custom_attribute` | `Array` | No |  |
| `discord` | `String` | No |  |
| `email` | `String` | No |  |
| `external` | `String` | No |  |
| `extra_shared_runners_minutes_limit` | `String` | No |  |
| `follower` | `String` | No |  |
| `following` | `String` | No |  |
| `github` | `String` | No |  |
| `id` | `Integer` | No |  |
| `identity` | `Hash` | No |  |
| `is_followed` | `Boolean` | No |  |
| `job_title` | `String` | No |  |
| `key` | `String` | No |  |
| `last_activity_on` | `String` | No |  |
| `last_sign_in_at` | `String` | No |  |
| `linkedin` | `String` | No |  |
| `local_time` | `String` | No |  |
| `location` | `String` | No |  |
| `locked` | `Boolean` | No |  |
| `name` | `String` | No |  |
| `organization` | `String` | No |  |
| `preferred_language` | `String` | No |  |
| `private_profile` | `Boolean` | No |  |
| `projects_limit` | `Integer` | No |  |
| `pronoun` | `String` | No |  |
| `public_email` | `String` | No |  |
| `scim_identity` | `Hash` | No |  |
| `shared_runners_minutes_limit` | `String` | No |  |
| `state` | `String` | No |  |
| `theme_id` | `Integer` | No |  |
| `twitter` | `String` | No |  |
| `two_factor_enabled` | `Boolean` | No |  |
| `username` | `String` | No |  |
| `value` | `String` | No |  |
| `web_url` | `String` | No |  |
| `website_url` | `String` | No |  |
| `work_information` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiEntitiesUserPublic.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesUserPublicEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesUserWithAdminEntity

```ruby
api_entities_user_with_admin = client.ApiEntitiesUserWithAdmin
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `key` | `String` | No |  |
| `value` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiEntitiesUserWithAdmin.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesUserWithAdminEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesWikiAttachmentEntity

```ruby
api_entities_wiki_attachment = client.ApiEntitiesWikiAttachment
```

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ApiEntitiesWikiAttachment.create({
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesWikiAttachmentEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesWikiPageEntity

```ruby
api_entities_wiki_page = client.ApiEntitiesWikiPage
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content` | `String` | No |  |
| `encoding` | `String` | No |  |
| `format` | `String` | No |  |
| `front_matter` | `Hash` | No |  |
| `slug` | `String` | No |  |
| `title` | `String` | No |  |
| `wiki_page_meta_id` | `Integer` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ApiEntitiesWikiPage.create({
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiEntitiesWikiPage.load({ "slug" => "slug" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ApiEntitiesWikiPage.update({
  "slug" => "slug",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesWikiPageEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiEntitiesWikiPageBasicEntity

```ruby
api_entities_wiki_page_basic = client.ApiEntitiesWikiPageBasic
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `format` | `String` | No |  |
| `slug` | `String` | No |  |
| `title` | `String` | No |  |
| `wiki_page_meta_id` | `Integer` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiEntitiesWikiPageBasic.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntitiesWikiPageBasicEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApplicationEntity

```ruby
application = client.Application
```

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Application.remove({ "id" => "id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApplicationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AwardEmojiEntity

```ruby
award_emoji = client.AwardEmoji
```

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.AwardEmoji.remove({ "id" => "id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AwardEmojiEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## BadgeEntity

```ruby
badge = client.Badge
```

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Badge.remove({ "id" => "id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `BadgeEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## BranchEntity

```ruby
branch = client.Branch
```

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Branch.remove({ "project_id" => "project_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `BranchEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CargoPackageEntity

```ruby
cargo_package = client.CargoPackage
```

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.CargoPackage.load({ "project_id" => "project_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CargoPackageEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CiVariableEntity

```ruby
ci_variable = client.CiVariable
```

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.CiVariable.remove({ "id" => "id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CiVariableEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ClusterEntity

```ruby
cluster = client.Cluster
```

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Cluster.remove({ "id" => "id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ClusterEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ClusterAgentEntity

```ruby
cluster_agent = client.ClusterAgent
```

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.ClusterAgent.remove({ "id" => "id", "project_id" => "project_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ClusterAgentEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ComposerEntity

```ruby
composer = client.Composer
```

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Composer.create({
  "project_id" => "example_project_id", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ComposerEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ComposerPackageEntity

```ruby
composer_package = client.ComposerPackage
```

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ComposerPackage.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ComposerPackageEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ConanEntity

```ruby
conan = client.Conan
```

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Conan.remove({ "package_channel" => "package_channel", "package_name" => "package_name", "package_username" => "package_username", "package_version" => "package_version" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ConanEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ConanPackageEntity

```ruby
conan_package = client.ConanPackage
```

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ConanPackage.load({ "id" => "conan_package_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.ConanPackage.remove({ "conan_id" => "conan_id", "package_channel" => "package_channel", "package_username" => "package_username", "package_version" => "package_version", "project_id" => "project_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ConanPackage.update({
  "id" => "conan_package_id",
  "file_name" => "file_name",
  "package_channel" => "package_channel",
  "package_username" => "package_username",
  "package_version" => "package_version",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ConanPackageEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ContainerRegistryEntity

```ruby
container_registry = client.ContainerRegistry
```

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.ContainerRegistry.remove({ "project_id" => "project_id", "repository_id" => "repository_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ContainerRegistryEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ContainerRegistryEventEntity

```ruby
container_registry_event = client.ContainerRegistryEvent
```

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ContainerRegistryEvent.create({
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ContainerRegistryEventEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CustomAttributeEntity

```ruby
custom_attribute = client.CustomAttribute
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `key` | `String` | No |  |
| `value` | `String` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.CustomAttribute.load({ "id" => "custom_attribute_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CustomAttributeEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DebianEntity

```ruby
debian = client.Debian
```

### Operations

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Debian.update({
  "id" => "id",
  "project_id" => "project_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DebianEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DebianDistributionEntity

```ruby
debian_distribution = client.DebianDistribution
```

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.DebianDistribution.remove({ "id" => "id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DebianDistributionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DebianPackageEntity

```ruby
debian_package = client.DebianPackage
```

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.DebianPackage.load({ "id" => "debian_package_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.DebianPackage.update({
  "file_name" => "file_name",
  "project_id" => "project_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DebianPackageEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DependencyProxyEntity

```ruby
dependency_proxy = client.DependencyProxy
```

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.DependencyProxy.remove({ "group_id" => "group_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DependencyProxyEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DeployKeyEntity

```ruby
deploy_key = client.DeployKey
```

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.DeployKey.remove({ "id" => "id", "project_id" => "project_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DeployKeyEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DeployTokenEntity

```ruby
deploy_token = client.DeployToken
```

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.DeployToken.remove({ "id" => "id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DeployTokenEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DeploymentEntity

```ruby
deployment = client.Deployment
```

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Deployment.remove({ "id" => "id", "project_id" => "project_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DeploymentEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## EeApiEntitiesApprovalStateEntity

```ruby
ee_api_entities_approval_state = client.EeApiEntitiesApprovalState
```

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.EeApiEntitiesApprovalState.create({
  "merge_request_id" => "example_merge_request_id", # String
  "project_id" => "example_project_id", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `EeApiEntitiesApprovalStateEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## EeApiEntitiesAuditEventEntity

```ruby
ee_api_entities_audit_event = client.EeApiEntitiesAuditEvent
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author_id` | `String` | No |  |
| `created_at` | `String` | No |  |
| `detail` | `String` | No |  |
| `entity_id` | `String` | No |  |
| `entity_type` | `String` | No |  |
| `event_name` | `String` | No |  |
| `id` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.EeApiEntitiesAuditEvent.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.EeApiEntitiesAuditEvent.load({ "id" => "ee_api_entities_audit_event_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `EeApiEntitiesAuditEventEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## EeApiEntitiesBillableMembershipEntity

```ruby
ee_api_entities_billable_membership = client.EeApiEntitiesBillableMembership
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access_level` | `Hash` | No |  |
| `created_at` | `String` | No |  |
| `expires_at` | `String` | No |  |
| `id` | `String` | No |  |
| `source_full_name` | `String` | No |  |
| `source_id` | `String` | No |  |
| `source_members_url` | `String` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.EeApiEntitiesBillableMembership.load({ "billable_member_id" => "billable_member_id", "group_id" => "group_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `EeApiEntitiesBillableMembershipEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## EeApiEntitiesGeoNodeStatusEntity

```ruby
ee_api_entities_geo_node_status = client.EeApiEntitiesGeoNodeStatus
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ci_secure_files_checksum_failed_count` | `String` | No |  |
| `ci_secure_files_checksum_total_count` | `String` | No |  |
| `ci_secure_files_checksummed_count` | `String` | No |  |
| `ci_secure_files_count` | `String` | No |  |
| `ci_secure_files_failed_count` | `String` | No |  |
| `ci_secure_files_registry_count` | `String` | No |  |
| `ci_secure_files_synced_count` | `String` | No |  |
| `ci_secure_files_synced_in_percentage` | `String` | No |  |
| `ci_secure_files_verification_failed_count` | `String` | No |  |
| `ci_secure_files_verification_total_count` | `String` | No |  |
| `ci_secure_files_verified_count` | `String` | No |  |
| `ci_secure_files_verified_in_percentage` | `String` | No |  |
| `container_repositories_checksum_failed_count` | `String` | No |  |
| `container_repositories_checksum_total_count` | `String` | No |  |
| `container_repositories_checksummed_count` | `String` | No |  |
| `container_repositories_count` | `String` | No |  |
| `container_repositories_failed_count` | `String` | No |  |
| `container_repositories_registry_count` | `String` | No |  |
| `container_repositories_replication_enabled` | `String` | No |  |
| `container_repositories_synced_count` | `String` | No |  |
| `container_repositories_synced_in_percentage` | `String` | No |  |
| `container_repositories_verification_failed_count` | `String` | No |  |
| `container_repositories_verification_total_count` | `String` | No |  |
| `container_repositories_verified_count` | `String` | No |  |
| `container_repositories_verified_in_percentage` | `String` | No |  |
| `cursor_last_event_id` | `String` | No |  |
| `cursor_last_event_timestamp` | `String` | No |  |
| `db_replication_lag_second` | `String` | No |  |
| `dependency_proxy_blobs_checksum_failed_count` | `String` | No |  |
| `dependency_proxy_blobs_checksum_total_count` | `String` | No |  |
| `dependency_proxy_blobs_checksummed_count` | `String` | No |  |
| `dependency_proxy_blobs_count` | `String` | No |  |
| `dependency_proxy_blobs_failed_count` | `String` | No |  |
| `dependency_proxy_blobs_registry_count` | `String` | No |  |
| `dependency_proxy_blobs_synced_count` | `String` | No |  |
| `dependency_proxy_blobs_synced_in_percentage` | `String` | No |  |
| `dependency_proxy_blobs_verification_failed_count` | `String` | No |  |
| `dependency_proxy_blobs_verification_total_count` | `String` | No |  |
| `dependency_proxy_blobs_verified_count` | `String` | No |  |
| `dependency_proxy_blobs_verified_in_percentage` | `String` | No |  |
| `dependency_proxy_manifests_checksum_failed_count` | `String` | No |  |
| `dependency_proxy_manifests_checksum_total_count` | `String` | No |  |
| `dependency_proxy_manifests_checksummed_count` | `String` | No |  |
| `dependency_proxy_manifests_count` | `String` | No |  |
| `dependency_proxy_manifests_failed_count` | `String` | No |  |
| `dependency_proxy_manifests_registry_count` | `String` | No |  |
| `dependency_proxy_manifests_synced_count` | `String` | No |  |
| `dependency_proxy_manifests_synced_in_percentage` | `String` | No |  |
| `dependency_proxy_manifests_verification_failed_count` | `String` | No |  |
| `dependency_proxy_manifests_verification_total_count` | `String` | No |  |
| `dependency_proxy_manifests_verified_count` | `String` | No |  |
| `dependency_proxy_manifests_verified_in_percentage` | `String` | No |  |
| `design_management_repositories_checksum_failed_count` | `String` | No |  |
| `design_management_repositories_checksum_total_count` | `String` | No |  |
| `design_management_repositories_checksummed_count` | `String` | No |  |
| `design_management_repositories_count` | `String` | No |  |
| `design_management_repositories_failed_count` | `String` | No |  |
| `design_management_repositories_registry_count` | `String` | No |  |
| `design_management_repositories_synced_count` | `String` | No |  |
| `design_management_repositories_synced_in_percentage` | `String` | No |  |
| `design_management_repositories_verification_failed_count` | `String` | No |  |
| `design_management_repositories_verification_total_count` | `String` | No |  |
| `design_management_repositories_verified_count` | `String` | No |  |
| `design_management_repositories_verified_in_percentage` | `String` | No |  |
| `geo_node_id` | `String` | No |  |
| `git_fetch_event_count_weekly` | `String` | No |  |
| `git_push_event_count_weekly` | `String` | No |  |
| `group_wiki_repositories_checksum_failed_count` | `String` | No |  |
| `group_wiki_repositories_checksum_total_count` | `String` | No |  |
| `group_wiki_repositories_checksummed_count` | `String` | No |  |
| `group_wiki_repositories_count` | `String` | No |  |
| `group_wiki_repositories_failed_count` | `String` | No |  |
| `group_wiki_repositories_registry_count` | `String` | No |  |
| `group_wiki_repositories_synced_count` | `String` | No |  |
| `group_wiki_repositories_synced_in_percentage` | `String` | No |  |
| `group_wiki_repositories_verification_failed_count` | `String` | No |  |
| `group_wiki_repositories_verification_total_count` | `String` | No |  |
| `group_wiki_repositories_verified_count` | `String` | No |  |
| `group_wiki_repositories_verified_in_percentage` | `String` | No |  |
| `health` | `String` | No |  |
| `health_status` | `String` | No |  |
| `healthy` | `String` | No |  |
| `job_artifacts_checksum_failed_count` | `String` | No |  |
| `job_artifacts_checksum_total_count` | `String` | No |  |
| `job_artifacts_checksummed_count` | `String` | No |  |
| `job_artifacts_count` | `String` | No |  |
| `job_artifacts_failed_count` | `String` | No |  |
| `job_artifacts_registry_count` | `String` | No |  |
| `job_artifacts_synced_count` | `String` | No |  |
| `job_artifacts_synced_in_percentage` | `String` | No |  |
| `job_artifacts_verification_failed_count` | `String` | No |  |
| `job_artifacts_verification_total_count` | `String` | No |  |
| `job_artifacts_verified_count` | `String` | No |  |
| `job_artifacts_verified_in_percentage` | `String` | No |  |
| `last_event_id` | `String` | No |  |
| `last_event_timestamp` | `String` | No |  |
| `last_successful_status_check_timestamp` | `String` | No |  |
| `lfs_objects_checksum_failed_count` | `String` | No |  |
| `lfs_objects_checksum_total_count` | `String` | No |  |
| `lfs_objects_checksummed_count` | `String` | No |  |
| `lfs_objects_count` | `String` | No |  |
| `lfs_objects_failed_count` | `String` | No |  |
| `lfs_objects_registry_count` | `String` | No |  |
| `lfs_objects_synced_count` | `String` | No |  |
| `lfs_objects_synced_in_percentage` | `String` | No |  |
| `lfs_objects_verification_failed_count` | `String` | No |  |
| `lfs_objects_verification_total_count` | `String` | No |  |
| `lfs_objects_verified_count` | `String` | No |  |
| `lfs_objects_verified_in_percentage` | `String` | No |  |
| `link` | `Hash` | No |  |
| `merge_request_diffs_checksum_failed_count` | `String` | No |  |
| `merge_request_diffs_checksum_total_count` | `String` | No |  |
| `merge_request_diffs_checksummed_count` | `String` | No |  |
| `merge_request_diffs_count` | `String` | No |  |
| `merge_request_diffs_failed_count` | `String` | No |  |
| `merge_request_diffs_registry_count` | `String` | No |  |
| `merge_request_diffs_synced_count` | `String` | No |  |
| `merge_request_diffs_synced_in_percentage` | `String` | No |  |
| `merge_request_diffs_verification_failed_count` | `String` | No |  |
| `merge_request_diffs_verification_total_count` | `String` | No |  |
| `merge_request_diffs_verified_count` | `String` | No |  |
| `merge_request_diffs_verified_in_percentage` | `String` | No |  |
| `missing_oauth_application` | `String` | No |  |
| `namespace` | `Hash` | No |  |
| `package_files_checksum_failed_count` | `String` | No |  |
| `package_files_checksum_total_count` | `String` | No |  |
| `package_files_checksummed_count` | `String` | No |  |
| `package_files_count` | `String` | No |  |
| `package_files_failed_count` | `String` | No |  |
| `package_files_registry_count` | `String` | No |  |
| `package_files_synced_count` | `String` | No |  |
| `package_files_synced_in_percentage` | `String` | No |  |
| `package_files_verification_failed_count` | `String` | No |  |
| `package_files_verification_total_count` | `String` | No |  |
| `package_files_verified_count` | `String` | No |  |
| `package_files_verified_in_percentage` | `String` | No |  |
| `pages_deployments_checksum_failed_count` | `String` | No |  |
| `pages_deployments_checksum_total_count` | `String` | No |  |
| `pages_deployments_checksummed_count` | `String` | No |  |
| `pages_deployments_count` | `String` | No |  |
| `pages_deployments_failed_count` | `String` | No |  |
| `pages_deployments_registry_count` | `String` | No |  |
| `pages_deployments_synced_count` | `String` | No |  |
| `pages_deployments_synced_in_percentage` | `String` | No |  |
| `pages_deployments_verification_failed_count` | `String` | No |  |
| `pages_deployments_verification_total_count` | `String` | No |  |
| `pages_deployments_verified_count` | `String` | No |  |
| `pages_deployments_verified_in_percentage` | `String` | No |  |
| `pipeline_artifacts_checksum_failed_count` | `String` | No |  |
| `pipeline_artifacts_checksum_total_count` | `String` | No |  |
| `pipeline_artifacts_checksummed_count` | `String` | No |  |
| `pipeline_artifacts_count` | `String` | No |  |
| `pipeline_artifacts_failed_count` | `String` | No |  |
| `pipeline_artifacts_registry_count` | `String` | No |  |
| `pipeline_artifacts_synced_count` | `String` | No |  |
| `pipeline_artifacts_synced_in_percentage` | `String` | No |  |
| `pipeline_artifacts_verification_failed_count` | `String` | No |  |
| `pipeline_artifacts_verification_total_count` | `String` | No |  |
| `pipeline_artifacts_verified_count` | `String` | No |  |
| `pipeline_artifacts_verified_in_percentage` | `String` | No |  |
| `project_repositories_checksum_failed_count` | `String` | No |  |
| `project_repositories_checksum_total_count` | `String` | No |  |
| `project_repositories_checksummed_count` | `String` | No |  |
| `project_repositories_count` | `String` | No |  |
| `project_repositories_failed_count` | `String` | No |  |
| `project_repositories_registry_count` | `String` | No |  |
| `project_repositories_synced_count` | `String` | No |  |
| `project_repositories_synced_in_percentage` | `String` | No |  |
| `project_repositories_verification_failed_count` | `String` | No |  |
| `project_repositories_verification_total_count` | `String` | No |  |
| `project_repositories_verified_count` | `String` | No |  |
| `project_repositories_verified_in_percentage` | `String` | No |  |
| `project_wiki_repositories_checksum_failed_count` | `String` | No |  |
| `project_wiki_repositories_checksum_total_count` | `String` | No |  |
| `project_wiki_repositories_checksummed_count` | `String` | No |  |
| `project_wiki_repositories_count` | `String` | No |  |
| `project_wiki_repositories_failed_count` | `String` | No |  |
| `project_wiki_repositories_registry_count` | `String` | No |  |
| `project_wiki_repositories_synced_count` | `String` | No |  |
| `project_wiki_repositories_synced_in_percentage` | `String` | No |  |
| `project_wiki_repositories_verification_failed_count` | `String` | No |  |
| `project_wiki_repositories_verification_total_count` | `String` | No |  |
| `project_wiki_repositories_verified_count` | `String` | No |  |
| `project_wiki_repositories_verified_in_percentage` | `String` | No |  |
| `projects_count` | `String` | No |  |
| `proxy_local_requests_event_count_weekly` | `String` | No |  |
| `proxy_remote_requests_event_count_weekly` | `String` | No |  |
| `replication_slots_count` | `String` | No |  |
| `replication_slots_max_retained_wal_byte` | `String` | No |  |
| `replication_slots_used_count` | `String` | No |  |
| `replication_slots_used_in_percentage` | `String` | No |  |
| `repositories_checked_count` | `String` | No |  |
| `repositories_checked_failed_count` | `String` | No |  |
| `repositories_checked_in_percentage` | `String` | No |  |
| `repositories_count` | `String` | No |  |
| `revision` | `String` | No |  |
| `selective_sync_type` | `String` | No |  |
| `snippet_repositories_checksum_failed_count` | `String` | No |  |
| `snippet_repositories_checksum_total_count` | `String` | No |  |
| `snippet_repositories_checksummed_count` | `String` | No |  |
| `snippet_repositories_count` | `String` | No |  |
| `snippet_repositories_failed_count` | `String` | No |  |
| `snippet_repositories_registry_count` | `String` | No |  |
| `snippet_repositories_synced_count` | `String` | No |  |
| `snippet_repositories_synced_in_percentage` | `String` | No |  |
| `snippet_repositories_verification_failed_count` | `String` | No |  |
| `snippet_repositories_verification_total_count` | `String` | No |  |
| `snippet_repositories_verified_count` | `String` | No |  |
| `snippet_repositories_verified_in_percentage` | `String` | No |  |
| `storage_shard` | `Hash` | No |  |
| `storage_shards_match` | `String` | No |  |
| `terraform_state_versions_checksum_failed_count` | `String` | No |  |
| `terraform_state_versions_checksum_total_count` | `String` | No |  |
| `terraform_state_versions_checksummed_count` | `String` | No |  |
| `terraform_state_versions_count` | `String` | No |  |
| `terraform_state_versions_failed_count` | `String` | No |  |
| `terraform_state_versions_registry_count` | `String` | No |  |
| `terraform_state_versions_synced_count` | `String` | No |  |
| `terraform_state_versions_synced_in_percentage` | `String` | No |  |
| `terraform_state_versions_verification_failed_count` | `String` | No |  |
| `terraform_state_versions_verification_total_count` | `String` | No |  |
| `terraform_state_versions_verified_count` | `String` | No |  |
| `terraform_state_versions_verified_in_percentage` | `String` | No |  |
| `updated_at` | `String` | No |  |
| `uploads_checksum_failed_count` | `String` | No |  |
| `uploads_checksum_total_count` | `String` | No |  |
| `uploads_checksummed_count` | `String` | No |  |
| `uploads_count` | `String` | No |  |
| `uploads_failed_count` | `String` | No |  |
| `uploads_registry_count` | `String` | No |  |
| `uploads_synced_count` | `String` | No |  |
| `uploads_synced_in_percentage` | `String` | No |  |
| `uploads_verification_failed_count` | `String` | No |  |
| `uploads_verification_total_count` | `String` | No |  |
| `uploads_verified_count` | `String` | No |  |
| `uploads_verified_in_percentage` | `String` | No |  |
| `version` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.EeApiEntitiesGeoNodeStatus.create({
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `EeApiEntitiesGeoNodeStatusEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## EeApiEntitiesGeoPipelineRefEntity

```ruby
ee_api_entities_geo_pipeline_ref = client.EeApiEntitiesGeoPipelineRef
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `pipeline_ref` | `Array` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.EeApiEntitiesGeoPipelineRef.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `EeApiEntitiesGeoPipelineRefEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## EeApiEntitiesIssuableMetricImageEntity

```ruby
ee_api_entities_issuable_metric_image = client.EeApiEntitiesIssuableMetricImage
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `String` | No |  |
| `file_path` | `String` | No |  |
| `filename` | `String` | No |  |
| `id` | `String` | No |  |
| `url` | `String` | No |  |
| `url_text` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.EeApiEntitiesIssuableMetricImage.create({
  "issue_id" => "example_issue_id", # String
  "project_id" => "example_project_id", # String
})
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.EeApiEntitiesIssuableMetricImage.remove({ "id" => "id", "issue_id" => "issue_id", "project_id" => "project_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.EeApiEntitiesIssuableMetricImage.update({
  "id" => "id",
  "issue_id" => "issue_id",
  "project_id" => "project_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `EeApiEntitiesIssuableMetricImageEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## EeApiEntitiesMergeRequestApprovalStateEntity

```ruby
ee_api_entities_merge_request_approval_state = client.EeApiEntitiesMergeRequestApprovalState
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `approvals_required` | `Integer` | No |  |
| `approved` | `Boolean` | No |  |
| `approved_by` | `Array` | No |  |
| `code_owner` | `Boolean` | No |  |
| `contains_hidden_group` | `Boolean` | No |  |
| `eligible_approver` | `Array` | No |  |
| `group` | `Array` | No |  |
| `id` | `Integer` | No |  |
| `name` | `String` | No |  |
| `overridden` | `Boolean` | No |  |
| `report_type` | `String` | No |  |
| `rule_type` | `String` | No |  |
| `section` | `String` | No |  |
| `source_rule` | `Hash` | No |  |
| `user` | `Array` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.EeApiEntitiesMergeRequestApprovalState.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `EeApiEntitiesMergeRequestApprovalStateEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## EeApiEntitiesSshCertificateEntity

```ruby
ee_api_entities_ssh_certificate = client.EeApiEntitiesSshCertificate
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `String` | No |  |
| `id` | `Integer` | No |  |
| `key` | `String` | No |  |
| `title` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.EeApiEntitiesSshCertificate.create({
  "group_id" => "example_group_id", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.EeApiEntitiesSshCertificate.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `EeApiEntitiesSshCertificateEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## EnvironmentEntity

```ruby
environment = client.Environment
```

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Environment.create({
  "project_id" => "example_project_id", # String
})
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Environment.remove({ "id" => "id", "project_id" => "project_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `EnvironmentEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ErrorTrackingClientKeyEntity

```ruby
error_tracking_client_key = client.ErrorTrackingClientKey
```

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.ErrorTrackingClientKey.remove({ "id" => "id", "project_id" => "project_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ErrorTrackingClientKeyEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## FeatureEntity

```ruby
feature = client.Feature
```

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Feature.remove({ "id" => "id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `FeatureEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## FeatureFlagEntity

```ruby
feature_flag = client.FeatureFlag
```

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.FeatureFlag.create({
  "unleash_id" => "example_unleash_id", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.FeatureFlag.load({ "project_id" => "project_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.FeatureFlag.remove({ "id" => "id", "project_id" => "project_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `FeatureFlagEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## FeatureFlagsUserListEntity

```ruby
feature_flags_user_list = client.FeatureFlagsUserList
```

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.FeatureFlagsUserList.remove({ "id" => "id", "project_id" => "project_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `FeatureFlagsUserListEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## FreezePeriodEntity

```ruby
freeze_period = client.FreezePeriod
```

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.FreezePeriod.remove({ "id" => "id", "project_id" => "project_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `FreezePeriodEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## GenericPackageEntity

```ruby
generic_package = client.GenericPackage
```

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.GenericPackage.load({ "file_name" => "file_name", "generic_id" => "generic_id", "project_id" => "project_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.GenericPackage.update({
  "file_name" => "file_name",
  "generic_id" => "generic_id",
  "project_id" => "project_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `GenericPackageEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## GeoEntity

```ruby
geo = client.Geo
```

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Geo.create({
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Geo.load({ "replicable_id" => "replicable_id", "replicable_name" => "replicable_name" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `GeoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## GoProxyEntity

```ruby
go_proxy = client.GoProxy
```

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.GoProxy.load({ "project_id" => "project_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `GoProxyEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## GroupEntity

```ruby
group = client.Group
```

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Group.create({
  "id" => "example_id", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Group.load({ "id" => "group_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Group.remove({ "id" => "group_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Group.update({
  "id" => "group_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `GroupEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## GroupAvatarEntity

```ruby
group_avatar = client.GroupAvatar
```

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.GroupAvatar.load({ "id" => "group_avatar_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `GroupAvatarEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## GroupExportEntity

```ruby
group_export = client.GroupExport
```

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.GroupExport.create({
  "id" => "example_id", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.GroupExport.load({ "group_id" => "group_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `GroupExportEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## GroupImportEntity

```ruby
group_import = client.GroupImport
```

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.GroupImport.create({
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `GroupImportEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## HelmPackageEntity

```ruby
helm_package = client.HelmPackage
```

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.HelmPackage.create({
  "project_id" => "example_project_id", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.HelmPackage.load({ "project_id" => "project_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `HelmPackageEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## HookEntity

```ruby
hook = client.Hook
```

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Hook.create({
  "id" => "example_id", # String
})
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Hook.remove({ "id" => "id", "key" => "key" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Hook.update({
  "id" => "id",
  "key" => "key",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `HookEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ImportEntity

```ruby
import = client.Import
```

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Import.create({
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ImportEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## IntegrationEntity

```ruby
integration = client.Integration
```

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Integration.create({
})
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Integration.remove()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `IntegrationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## InvitationEntity

```ruby
invitation = client.Invitation
```

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Invitation.remove({ "id" => "id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `InvitationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## IssueLinkEntity

```ruby
issue_link = client.IssueLink
```

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.IssueLink.remove({ "id" => "id", "issue_id" => "issue_id", "project_id" => "project_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `IssueLinkEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## IssuesStatisticEntity

```ruby
issues_statistic = client.IssuesStatistic
```

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.IssuesStatistic.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `IssuesStatisticEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## JobEntity

```ruby
job = client.Job
```

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Job.create({
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Job.load({ "id" => "job_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Job.update({
  "id" => "job_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `JobEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## MavenPackageEntity

```ruby
maven_package = client.MavenPackage
```

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.MavenPackage.load({ "file_name" => "file_name" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.MavenPackage.update({
  "file_name" => "file_name",
  "project_id" => "project_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `MavenPackageEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## MemberEntity

```ruby
member = client.Member
```

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Member.remove({ "id" => "id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `MemberEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## MergeRequestEntity

```ruby
merge_request = client.MergeRequest
```

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.MergeRequest.load({ "id" => "merge_request_id", "project_id" => "project_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.MergeRequest.remove({ "id" => "merge_request_id", "project_id" => "project_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.MergeRequest.update({
  "id" => "merge_request_id",
  "project_id" => "project_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `MergeRequestEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## MetadataEntity

```ruby
metadata = client.Metadata
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enterprise` | `Boolean` | No |  |
| `kas` | `Hash` | No |  |
| `revision` | `String` | No |  |
| `version` | `String` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Metadata.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `MetadataEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## MigrationEntity

```ruby
migration = client.Migration
```

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Migration.create({
  "timestamp" => "example_timestamp", # Object
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `MigrationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## MlModelRegistryEntity

```ruby
ml_model_registry = client.MlModelRegistry
```

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.MlModelRegistry.load({ "file_name" => "file_name", "ml_model_id" => "ml_model_id", "project_id" => "project_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.MlModelRegistry.update({
  "file_name" => "file_name",
  "ml_model_id" => "ml_model_id",
  "project_id" => "project_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `MlModelRegistryEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## NamespaceEntity

```ruby
namespace = client.Namespace
```

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Namespace.remove({ "id" => "id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `NamespaceEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## NpmEntity

```ruby
npm = client.Npm
```

### Operations

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Npm.update({
  "id" => "id",
  "project_id" => "project_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `NpmEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## NpmPackageEntity

```ruby
npm_package = client.NpmPackage
```

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.NpmPackage.create({
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.NpmPackage.load({ "project_id" => "project_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.NpmPackage.remove({ "tag" => "tag" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.NpmPackage.update({
  "tag" => "tag",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `NpmPackageEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## NugetEntity

```ruby
nuget = client.Nuget
```

### Operations

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Nuget.update({
  "project_id" => "project_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `NugetEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## NugetPackageEntity

```ruby
nuget_package = client.NugetPackage
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `catalog_entry` | `Hash` | No |  |
| `count` | `Integer` | No |  |
| `id` | `String` | No |  |
| `item` | `Array` | No |  |
| `lower` | `String` | No |  |
| `package_content` | `String` | No |  |
| `upper` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.NugetPackage.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.NugetPackage.load()
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.NugetPackage.remove({ "project_id" => "project_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.NugetPackage.update({
  "project_id" => "project_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `NugetPackageEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PackageFileEntity

```ruby
package_file = client.PackageFile
```

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.PackageFile.load({ "id" => "package_file_id", "package_id" => "package_id", "project_id" => "project_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.PackageFile.remove({ "id" => "package_file_id", "package_id" => "package_id", "project_id" => "project_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PackageFileEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PageEntity

```ruby
page = client.Page
```

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Page.load({ "project_id" => "project_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Page.remove({ "project_id" => "project_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Page.update({
  "project_id" => "project_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PageEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ParticipantEntity

```ruby
participant = client.Participant
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `key` | `String` | No |  |
| `value` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Participant.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ParticipantEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PersonalAccessTokenEntity

```ruby
personal_access_token = client.PersonalAccessToken
```

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.PersonalAccessToken.remove({ "id" => "id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PersonalAccessTokenEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ProjectEntity

```ruby
project = client.Project
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `before_sha` | `String` | No |  |
| `committed_at` | `String` | No |  |
| `coverage` | `Float` | No |  |
| `created_at` | `String` | No |  |
| `detailed_status` | `Hash` | No |  |
| `duration` | `Integer` | No |  |
| `finished_at` | `String` | No |  |
| `id` | `Integer` | No |  |
| `iid` | `Integer` | No |  |
| `name` | `String` | No |  |
| `project_id` | `Integer` | No |  |
| `queued_duration` | `Integer` | No |  |
| `ref` | `String` | No |  |
| `sha` | `String` | No |  |
| `source` | `String` | No |  |
| `started_at` | `String` | No |  |
| `status` | `String` | No |  |
| `tag` | `Boolean` | No |  |
| `updated_at` | `String` | No |  |
| `user` | `Hash` | No |  |
| `web_url` | `String` | No |  |
| `yaml_error` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Project.create({
  "id" => "example_id", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Project.load({ "id" => "project_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Project.remove({ "id" => "project_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Project.update({
  "id" => "project_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ProjectEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ProjectAvatarEntity

```ruby
project_avatar = client.ProjectAvatar
```

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ProjectAvatar.load({ "id" => "project_avatar_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ProjectAvatarEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ProjectEntityEntity

```ruby
project_entity = client.ProjectEntity
```

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ProjectEntity.create({
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ProjectEntityEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ProjectExportEntity

```ruby
project_export = client.ProjectExport
```

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ProjectExport.create({
  "id" => "example_id", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ProjectExport.load({ "project_id" => "project_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ProjectExportEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ProjectHookEntity

```ruby
project_hook = client.ProjectHook
```

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.ProjectHook.remove({ "id" => "id", "project_id" => "project_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ProjectHookEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ProjectImportEntity

```ruby
project_import = client.ProjectImport
```

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ProjectImport.create({
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ProjectImportEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ProjectImportEntityEntity

```ruby
project_import_entity = client.ProjectImportEntity
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `forked` | `Boolean` | No |  |
| `full_name` | `String` | No |  |
| `full_path` | `String` | No |  |
| `human_import_status_name` | `String` | No |  |
| `id` | `Integer` | No |  |
| `import_error` | `String` | No |  |
| `import_source` | `String` | No |  |
| `import_status` | `String` | No |  |
| `import_warning` | `String` | No |  |
| `name` | `String` | No |  |
| `provider_link` | `String` | No |  |
| `refs_url` | `String` | No |  |
| `relation_type` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ProjectImportEntity.create({
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ProjectImportEntityEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ProjectPackageEntity

```ruby
project_package = client.ProjectPackage
```

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.ProjectPackage.remove({ "id" => "id", "project_id" => "project_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ProjectPackageEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ProjectSnippetEntity

```ruby
project_snippet = client.ProjectSnippet
```

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.ProjectSnippet.remove({ "id" => "id", "project_id" => "project_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ProjectSnippetEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ProjectsJobTokenScopeEntity

```ruby
projects_job_token_scope = client.ProjectsJobTokenScope
```

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.ProjectsJobTokenScope.remove({ "project_id" => "project_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ProjectsJobTokenScope.update({
  "project_id" => "project_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ProjectsJobTokenScopeEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ProtectedTagEntity

```ruby
protected_tag = client.ProtectedTag
```

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.ProtectedTag.remove({ "id" => "id", "project_id" => "project_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ProtectedTagEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PypiEntity

```ruby
pypi = client.Pypi
```

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Pypi.create({
  "project_id" => "example_project_id", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PypiEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PypiPackageEntity

```ruby
pypi_package = client.PypiPackage
```

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.PypiPackage.create({
  "project_id" => "example_project_id", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.PypiPackage.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PypiPackageEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ReleaseEntity

```ruby
release = client.Release
```

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Release.load({ "project_id" => "project_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Release.remove({ "id" => "id", "project_id" => "project_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ReleaseEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ReleaseLinkEntity

```ruby
release_link = client.ReleaseLink
```

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.ReleaseLink.remove({ "id" => "id", "project_id" => "project_id", "release_id" => "release_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ReleaseLinkEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## RemoteMirrorEntity

```ruby
remote_mirror = client.RemoteMirror
```

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.RemoteMirror.create({
  "id" => "example_id", # String
  "project_id" => "example_project_id", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.RemoteMirror.load({ "id" => "remote_mirror_id", "project_id" => "project_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.RemoteMirror.remove({ "id" => "remote_mirror_id", "project_id" => "project_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RemoteMirrorEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## RpmEntity

```ruby
rpm = client.Rpm
```

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Rpm.create({
  "project_id" => "example_project_id", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RpmEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## RpmPackageEntity

```ruby
rpm_package = client.RpmPackage
```

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.RpmPackage.create({
  "project_id" => "example_project_id", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.RpmPackage.load({ "project_id" => "project_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RpmPackageEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## RubygemEntity

```ruby
rubygem = client.Rubygem
```

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Rubygem.load({ "id" => "rubygem_id", "project_id" => "project_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RubygemEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## RubygemPackageEntity

```ruby
rubygem_package = client.RubygemPackage
```

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.RubygemPackage.create({
  "project_id" => "example_project_id", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.RubygemPackage.load({ "project_id" => "project_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RubygemPackageEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## RunnerEntity

```ruby
runner = client.Runner
```

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Runner.create({
})
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Runner.remove()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RunnerEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SearchEntity

```ruby
search = client.Search
```

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Search.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SearchEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SecureFileEntity

```ruby
secure_file = client.SecureFile
```

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.SecureFile.load({ "id" => "secure_file_id", "project_id" => "project_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.SecureFile.remove({ "id" => "secure_file_id", "project_id" => "project_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SecureFileEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SlackEntity

```ruby
slack = client.Slack
```

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Slack.create({
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SlackEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SnippetEntity

```ruby
snippet = client.Snippet
```

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Snippet.load({ "id" => "snippet_id", "file_id" => "file_id", "file_path" => "file_path" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Snippet.remove({ "id" => "snippet_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SnippetEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## StarrerEntity

```ruby
starrer = client.Starrer
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_path` | `String` | No |  |
| `avatar_url` | `String` | No |  |
| `custom_attribute` | `Array` | No |  |
| `id` | `Integer` | No |  |
| `locked` | `Boolean` | No |  |
| `name` | `String` | No |  |
| `public_email` | `String` | No |  |
| `state` | `String` | No |  |
| `username` | `String` | No |  |
| `web_url` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Starrer.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `StarrerEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SystemHookEntity

```ruby
system_hook = client.SystemHook
```

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.SystemHook.remove({ "id" => "id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SystemHookEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TagEntity

```ruby
tag = client.Tag
```

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Tag.remove({ "id" => "id", "project_id" => "project_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TagEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TerraformRegistryEntity

```ruby
terraform_registry = client.TerraformRegistry
```

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.TerraformRegistry.load({ "id" => "terraform_registry_id", "module_system" => "module_system" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.TerraformRegistry.update({
  "module_id" => "module_id",
  "module_system" => "module_system",
  "project_id" => "project_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TerraformRegistryEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TerraformStateEntity

```ruby
terraform_state = client.TerraformState
```

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.TerraformState.create({
  "project_id" => "example_project_id", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.TerraformState.load({ "id" => "terraform_state_id", "project_id" => "project_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.TerraformState.remove({ "id" => "terraform_state_id", "project_id" => "project_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TerraformStateEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TestReportEntity

```ruby
test_report = client.TestReport
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `error_count` | `Integer` | No |  |
| `failed_count` | `Integer` | No |  |
| `name` | `String` | No |  |
| `skipped_count` | `Integer` | No |  |
| `success_count` | `Integer` | No |  |
| `suite_error` | `String` | No |  |
| `test_case` | `Array` | No |  |
| `total_count` | `Integer` | No |  |
| `total_time` | `Integer` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.TestReport.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TestReportEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TestReportSummaryEntity

```ruby
test_report_summary = client.TestReportSummary
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `test_suite` | `Hash` | No |  |
| `total` | `Hash` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.TestReportSummary.load({ "pipeline_id" => "pipeline_id", "project_id" => "project_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TestReportSummaryEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TopicEntity

```ruby
topic = client.Topic
```

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Topic.remove({ "id" => "id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TopicEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## UnleashApiEntity

```ruby
unleash_api = client.UnleashApi
```

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.UnleashApi.load({ "unleash_id" => "unleash_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `UnleashApiEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## UsageDataEntity

```ruby
usage_data = client.UsageData
```

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.UsageData.create({
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.UsageData.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `UsageDataEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## UserEntity

```ruby
user = client.User
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_path` | `String` | No |  |
| `avatar_url` | `String` | No |  |
| `custom_attribute` | `Array` | No |  |
| `id` | `Integer` | No |  |
| `locked` | `Boolean` | No |  |
| `name` | `String` | No |  |
| `public_email` | `String` | No |  |
| `state` | `String` | No |  |
| `username` | `String` | No |  |
| `web_url` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.User.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `UserEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## WebCommitEntity

```ruby
web_commit = client.WebCommit
```

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.WebCommit.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `WebCommitEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## WikiEntity

```ruby
wiki = client.Wiki
```

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Wiki.remove({ "id" => "id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `WikiEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ruby
client = GitlabSDK.new({
  "feature" => {
    "test" => { "active" => true },
  },
})
```

