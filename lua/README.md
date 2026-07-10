# Gitlab Lua SDK



The Lua SDK for the Gitlab API — an entity-oriented client using Lua conventions.

It exposes the API as capitalised, semantic **Entities** — e.g. `client:AccessRequest()` — each with the same small set of operations (`list`, `load`, `create`, `update`, `remove`, `patch`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to LuaRocks. Install it from the
GitHub release tag (`lua/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/gitlab-sdk/releases)),
or add the source directory to your `LUA_PATH`:

```bash
export LUA_PATH="path/to/lua/?.lua;path/to/lua/?/init.lua;;"
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```lua
local sdk = require("gitlab_sdk")

local client = sdk.new({
  apikey = os.getenv("GITLAB_APIKEY"),
})
```

### 3. Load an apientitiesbranch

ApiEntitiesBranch is nested under project, so provide the `project_id`.

```lua
local apientitiesbranch, err = client:ApiEntitiesBranch():load({ project_id = "example_project_id", id = "example_id" })
if err then error(err) end
print(apientitiesbranch)
```

### 4. Create, update, and remove

```lua
-- Remove
client:AccessRequest():remove({ id = "example_id" })
```


## Error handling

Entity operations return `(value, err)`. Check `err` before using
the value:

```lua
local apientitiesaccessrequesters, err = client:ApiEntitiesAccessRequester():list()
if err then error(err) end
```

`direct` follows the same `(value, err)` convention:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example_id" },
})
if err then error(err) end
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
if err then error(err) end

if result["ok"] then
  print(result["status"])  -- 200
  print(result["data"])    -- response body
end
```

### Prepare a request without sending it

```lua
local fetchdef, err = client:prepare({
  path = "/api/resource/{id}",
  method = "DELETE",
  params = { id = "example" },
})
if err then error(err) end

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```lua
local client = sdk.test()

local result, err = client:ApiEntitiesAccessRequester():list()
-- result is the returned data; err is set on failure
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```lua
local function mock_fetch(url, init)
  return {
    status = 200,
    statusText = "OK",
    headers = {},
    json = function()
      return { id = "mock01" }
    end,
  }, nil
end

local client = sdk.new({
  base = "http://localhost:8080",
  system = {
    fetch = mock_fetch,
  },
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
GITLAB_TEST_LIVE=TRUE
GITLAB_APIKEY=<your-key>
```

Then run:

```bash
cd lua && busted test/
```


## Reference

### GitlabSDK

```lua
local sdk = require("gitlab_sdk")
local client = sdk.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `table` | Feature activation flags. |
| `extend` | `table` | Additional Feature instances to load. |
| `system` | `table` | System overrides (e.g. custom `fetch` function). |

### test

```lua
local client = sdk.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### GitlabSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> table` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> table, err` | Build an HTTP request definition without sending. |
| `direct` | `(fetchargs) -> table, err` | Build and send an HTTP request. |
| `AccessRequest` | `(data) -> AccessRequestEntity` | Create an AccessRequest entity instance. |
| `AlertManagement` | `(data) -> AlertManagementEntity` | Create an AlertManagement entity instance. |
| `ApiEntitiesAccessRequester` | `(data) -> ApiEntitiesAccessRequesterEntity` | Create an ApiEntitiesAccessRequester entity instance. |
| `ApiEntitiesAppearance` | `(data) -> ApiEntitiesAppearanceEntity` | Create an ApiEntitiesAppearance entity instance. |
| `ApiEntitiesApplication` | `(data) -> ApiEntitiesApplicationEntity` | Create an ApiEntitiesApplication entity instance. |
| `ApiEntitiesApplicationStatistic` | `(data) -> ApiEntitiesApplicationStatisticEntity` | Create an ApiEntitiesApplicationStatistic entity instance. |
| `ApiEntitiesApplicationWithSecret` | `(data) -> ApiEntitiesApplicationWithSecretEntity` | Create an ApiEntitiesApplicationWithSecret entity instance. |
| `ApiEntitiesAvatar` | `(data) -> ApiEntitiesAvatarEntity` | Create an ApiEntitiesAvatar entity instance. |
| `ApiEntitiesAwardEmoji` | `(data) -> ApiEntitiesAwardEmojiEntity` | Create an ApiEntitiesAwardEmoji entity instance. |
| `ApiEntitiesBadge` | `(data) -> ApiEntitiesBadgeEntity` | Create an ApiEntitiesBadge entity instance. |
| `ApiEntitiesBasicBadgeDetail` | `(data) -> ApiEntitiesBasicBadgeDetailEntity` | Create an ApiEntitiesBasicBadgeDetail entity instance. |
| `ApiEntitiesBasicGroupDetail` | `(data) -> ApiEntitiesBasicGroupDetailEntity` | Create an ApiEntitiesBasicGroupDetail entity instance. |
| `ApiEntitiesBasicProjectDetail` | `(data) -> ApiEntitiesBasicProjectDetailEntity` | Create an ApiEntitiesBasicProjectDetail entity instance. |
| `ApiEntitiesBasicRef` | `(data) -> ApiEntitiesBasicRefEntity` | Create an ApiEntitiesBasicRef entity instance. |
| `ApiEntitiesBasicSuccess` | `(data) -> ApiEntitiesBasicSuccessEntity` | Create an ApiEntitiesBasicSuccess entity instance. |
| `ApiEntitiesBatchedBackgroundMigration` | `(data) -> ApiEntitiesBatchedBackgroundMigrationEntity` | Create an ApiEntitiesBatchedBackgroundMigration entity instance. |
| `ApiEntitiesBranch` | `(data) -> ApiEntitiesBranchEntity` | Create an ApiEntitiesBranch entity instance. |
| `ApiEntitiesBulkImport` | `(data) -> ApiEntitiesBulkImportEntity` | Create an ApiEntitiesBulkImport entity instance. |
| `ApiEntitiesBulkImportsEntityFailure` | `(data) -> ApiEntitiesBulkImportsEntityFailureEntity` | Create an ApiEntitiesBulkImportsEntityFailure entity instance. |
| `ApiEntitiesBulkImportsExportStatus` | `(data) -> ApiEntitiesBulkImportsExportStatusEntity` | Create an ApiEntitiesBulkImportsExportStatus entity instance. |
| `ApiEntitiesChangelog` | `(data) -> ApiEntitiesChangelogEntity` | Create an ApiEntitiesChangelog entity instance. |
| `ApiEntitiesCiBridge` | `(data) -> ApiEntitiesCiBridgeEntity` | Create an ApiEntitiesCiBridge entity instance. |
| `ApiEntitiesCiCatalogResourcesVersion` | `(data) -> ApiEntitiesCiCatalogResourcesVersionEntity` | Create an ApiEntitiesCiCatalogResourcesVersion entity instance. |
| `ApiEntitiesCiJob` | `(data) -> ApiEntitiesCiJobEntity` | Create an ApiEntitiesCiJob entity instance. |
| `ApiEntitiesCiJobBasic` | `(data) -> ApiEntitiesCiJobBasicEntity` | Create an ApiEntitiesCiJobBasic entity instance. |
| `ApiEntitiesCiJobBasicWithProject` | `(data) -> ApiEntitiesCiJobBasicWithProjectEntity` | Create an ApiEntitiesCiJobBasicWithProject entity instance. |
| `ApiEntitiesCiLintResult` | `(data) -> ApiEntitiesCiLintResultEntity` | Create an ApiEntitiesCiLintResult entity instance. |
| `ApiEntitiesCiPipeline` | `(data) -> ApiEntitiesCiPipelineEntity` | Create an ApiEntitiesCiPipeline entity instance. |
| `ApiEntitiesCiPipelineBasic` | `(data) -> ApiEntitiesCiPipelineBasicEntity` | Create an ApiEntitiesCiPipelineBasic entity instance. |
| `ApiEntitiesCiPipelineSchedule` | `(data) -> ApiEntitiesCiPipelineScheduleEntity` | Create an ApiEntitiesCiPipelineSchedule entity instance. |
| `ApiEntitiesCiPipelineScheduleDetail` | `(data) -> ApiEntitiesCiPipelineScheduleDetailEntity` | Create an ApiEntitiesCiPipelineScheduleDetail entity instance. |
| `ApiEntitiesCiResetTokenResult` | `(data) -> ApiEntitiesCiResetTokenResultEntity` | Create an ApiEntitiesCiResetTokenResult entity instance. |
| `ApiEntitiesCiResourceGroup` | `(data) -> ApiEntitiesCiResourceGroupEntity` | Create an ApiEntitiesCiResourceGroup entity instance. |
| `ApiEntitiesCiRunner` | `(data) -> ApiEntitiesCiRunnerEntity` | Create an ApiEntitiesCiRunner entity instance. |
| `ApiEntitiesCiRunnerDetail` | `(data) -> ApiEntitiesCiRunnerDetailEntity` | Create an ApiEntitiesCiRunnerDetail entity instance. |
| `ApiEntitiesCiRunnerManager` | `(data) -> ApiEntitiesCiRunnerManagerEntity` | Create an ApiEntitiesCiRunnerManager entity instance. |
| `ApiEntitiesCiRunnerRegistrationDetail` | `(data) -> ApiEntitiesCiRunnerRegistrationDetailEntity` | Create an ApiEntitiesCiRunnerRegistrationDetail entity instance. |
| `ApiEntitiesCiSecureFile` | `(data) -> ApiEntitiesCiSecureFileEntity` | Create an ApiEntitiesCiSecureFile entity instance. |
| `ApiEntitiesCiVariable` | `(data) -> ApiEntitiesCiVariableEntity` | Create an ApiEntitiesCiVariable entity instance. |
| `ApiEntitiesCluster` | `(data) -> ApiEntitiesClusterEntity` | Create an ApiEntitiesCluster entity instance. |
| `ApiEntitiesClusterGroup` | `(data) -> ApiEntitiesClusterGroupEntity` | Create an ApiEntitiesClusterGroup entity instance. |
| `ApiEntitiesClusterProject` | `(data) -> ApiEntitiesClusterProjectEntity` | Create an ApiEntitiesClusterProject entity instance. |
| `ApiEntitiesClustersAgent` | `(data) -> ApiEntitiesClustersAgentEntity` | Create an ApiEntitiesClustersAgent entity instance. |
| `ApiEntitiesClustersAgentToken` | `(data) -> ApiEntitiesClustersAgentTokenEntity` | Create an ApiEntitiesClustersAgentToken entity instance. |
| `ApiEntitiesClustersAgentTokenBasic` | `(data) -> ApiEntitiesClustersAgentTokenBasicEntity` | Create an ApiEntitiesClustersAgentTokenBasic entity instance. |
| `ApiEntitiesClustersAgentTokenWithToken` | `(data) -> ApiEntitiesClustersAgentTokenWithTokenEntity` | Create an ApiEntitiesClustersAgentTokenWithToken entity instance. |
| `ApiEntitiesCommit` | `(data) -> ApiEntitiesCommitEntity` | Create an ApiEntitiesCommit entity instance. |
| `ApiEntitiesCommitDetail` | `(data) -> ApiEntitiesCommitDetailEntity` | Create an ApiEntitiesCommitDetail entity instance. |
| `ApiEntitiesCommitNote` | `(data) -> ApiEntitiesCommitNoteEntity` | Create an ApiEntitiesCommitNote entity instance. |
| `ApiEntitiesCommitSequence` | `(data) -> ApiEntitiesCommitSequenceEntity` | Create an ApiEntitiesCommitSequence entity instance. |
| `ApiEntitiesCommitSignature` | `(data) -> ApiEntitiesCommitSignatureEntity` | Create an ApiEntitiesCommitSignature entity instance. |
| `ApiEntitiesCommitStatus` | `(data) -> ApiEntitiesCommitStatusEntity` | Create an ApiEntitiesCommitStatus entity instance. |
| `ApiEntitiesCompare` | `(data) -> ApiEntitiesCompareEntity` | Create an ApiEntitiesCompare entity instance. |
| `ApiEntitiesContainerRegistryRepository` | `(data) -> ApiEntitiesContainerRegistryRepositoryEntity` | Create an ApiEntitiesContainerRegistryRepository entity instance. |
| `ApiEntitiesContainerRegistryTag` | `(data) -> ApiEntitiesContainerRegistryTagEntity` | Create an ApiEntitiesContainerRegistryTag entity instance. |
| `ApiEntitiesContainerRegistryTagDetail` | `(data) -> ApiEntitiesContainerRegistryTagDetailEntity` | Create an ApiEntitiesContainerRegistryTagDetail entity instance. |
| `ApiEntitiesContributor` | `(data) -> ApiEntitiesContributorEntity` | Create an ApiEntitiesContributor entity instance. |
| `ApiEntitiesDeployKey` | `(data) -> ApiEntitiesDeployKeyEntity` | Create an ApiEntitiesDeployKey entity instance. |
| `ApiEntitiesDeployKeysProject` | `(data) -> ApiEntitiesDeployKeysProjectEntity` | Create an ApiEntitiesDeployKeysProject entity instance. |
| `ApiEntitiesDeployToken` | `(data) -> ApiEntitiesDeployTokenEntity` | Create an ApiEntitiesDeployToken entity instance. |
| `ApiEntitiesDeployTokenWithToken` | `(data) -> ApiEntitiesDeployTokenWithTokenEntity` | Create an ApiEntitiesDeployTokenWithToken entity instance. |
| `ApiEntitiesDeployment` | `(data) -> ApiEntitiesDeploymentEntity` | Create an ApiEntitiesDeployment entity instance. |
| `ApiEntitiesDeploymentExtended` | `(data) -> ApiEntitiesDeploymentExtendedEntity` | Create an ApiEntitiesDeploymentExtended entity instance. |
| `ApiEntitiesDeploymentsApproval` | `(data) -> ApiEntitiesDeploymentsApprovalEntity` | Create an ApiEntitiesDeploymentsApproval entity instance. |
| `ApiEntitiesDictionaryTable` | `(data) -> ApiEntitiesDictionaryTableEntity` | Create an ApiEntitiesDictionaryTable entity instance. |
| `ApiEntitiesDiff` | `(data) -> ApiEntitiesDiffEntity` | Create an ApiEntitiesDiff entity instance. |
| `ApiEntitiesDiscoveredCluster` | `(data) -> ApiEntitiesDiscoveredClusterEntity` | Create an ApiEntitiesDiscoveredCluster entity instance. |
| `ApiEntitiesDraftNote` | `(data) -> ApiEntitiesDraftNoteEntity` | Create an ApiEntitiesDraftNote entity instance. |
| `ApiEntitiesEnvironment` | `(data) -> ApiEntitiesEnvironmentEntity` | Create an ApiEntitiesEnvironment entity instance. |
| `ApiEntitiesErrorTrackingClientKey` | `(data) -> ApiEntitiesErrorTrackingClientKeyEntity` | Create an ApiEntitiesErrorTrackingClientKey entity instance. |
| `ApiEntitiesErrorTrackingProjectSetting` | `(data) -> ApiEntitiesErrorTrackingProjectSettingEntity` | Create an ApiEntitiesErrorTrackingProjectSetting entity instance. |
| `ApiEntitiesEvent` | `(data) -> ApiEntitiesEventEntity` | Create an ApiEntitiesEvent entity instance. |
| `ApiEntitiesFeature` | `(data) -> ApiEntitiesFeatureEntity` | Create an ApiEntitiesFeature entity instance. |
| `ApiEntitiesFeatureDefinition` | `(data) -> ApiEntitiesFeatureDefinitionEntity` | Create an ApiEntitiesFeatureDefinition entity instance. |
| `ApiEntitiesFeatureFlag` | `(data) -> ApiEntitiesFeatureFlagEntity` | Create an ApiEntitiesFeatureFlag entity instance. |
| `ApiEntitiesFeatureFlagUserList` | `(data) -> ApiEntitiesFeatureFlagUserListEntity` | Create an ApiEntitiesFeatureFlagUserList entity instance. |
| `ApiEntitiesFreezePeriod` | `(data) -> ApiEntitiesFreezePeriodEntity` | Create an ApiEntitiesFreezePeriod entity instance. |
| `ApiEntitiesGitlabSubscription` | `(data) -> ApiEntitiesGitlabSubscriptionEntity` | Create an ApiEntitiesGitlabSubscription entity instance. |
| `ApiEntitiesGoModuleVersion` | `(data) -> ApiEntitiesGoModuleVersionEntity` | Create an ApiEntitiesGoModuleVersion entity instance. |
| `ApiEntitiesGroup` | `(data) -> ApiEntitiesGroupEntity` | Create an ApiEntitiesGroup entity instance. |
| `ApiEntitiesGroupDetail` | `(data) -> ApiEntitiesGroupDetailEntity` | Create an ApiEntitiesGroupDetail entity instance. |
| `ApiEntitiesHook` | `(data) -> ApiEntitiesHookEntity` | Create an ApiEntitiesHook entity instance. |
| `ApiEntitiesIntegration` | `(data) -> ApiEntitiesIntegrationEntity` | Create an ApiEntitiesIntegration entity instance. |
| `ApiEntitiesIntegrationBasic` | `(data) -> ApiEntitiesIntegrationBasicEntity` | Create an ApiEntitiesIntegrationBasic entity instance. |
| `ApiEntitiesInvitation` | `(data) -> ApiEntitiesInvitationEntity` | Create an ApiEntitiesInvitation entity instance. |
| `ApiEntitiesIssuableTimeStat` | `(data) -> ApiEntitiesIssuableTimeStatEntity` | Create an ApiEntitiesIssuableTimeStat entity instance. |
| `ApiEntitiesIssue` | `(data) -> ApiEntitiesIssueEntity` | Create an ApiEntitiesIssue entity instance. |
| `ApiEntitiesIssueLink` | `(data) -> ApiEntitiesIssueLinkEntity` | Create an ApiEntitiesIssueLink entity instance. |
| `ApiEntitiesLicense` | `(data) -> ApiEntitiesLicenseEntity` | Create an ApiEntitiesLicense entity instance. |
| `ApiEntitiesMarkdown` | `(data) -> ApiEntitiesMarkdownEntity` | Create an ApiEntitiesMarkdown entity instance. |
| `ApiEntitiesMarkdownUploadAdmin` | `(data) -> ApiEntitiesMarkdownUploadAdminEntity` | Create an ApiEntitiesMarkdownUploadAdmin entity instance. |
| `ApiEntitiesMember` | `(data) -> ApiEntitiesMemberEntity` | Create an ApiEntitiesMember entity instance. |
| `ApiEntitiesMerge` | `(data) -> ApiEntitiesMergeEntity` | Create an ApiEntitiesMerge entity instance. |
| `ApiEntitiesMergeRequestApproval` | `(data) -> ApiEntitiesMergeRequestApprovalEntity` | Create an ApiEntitiesMergeRequestApproval entity instance. |
| `ApiEntitiesMergeRequestBasic` | `(data) -> ApiEntitiesMergeRequestBasicEntity` | Create an ApiEntitiesMergeRequestBasic entity instance. |
| `ApiEntitiesMergeRequestChange` | `(data) -> ApiEntitiesMergeRequestChangeEntity` | Create an ApiEntitiesMergeRequestChange entity instance. |
| `ApiEntitiesMergeRequestDiff` | `(data) -> ApiEntitiesMergeRequestDiffEntity` | Create an ApiEntitiesMergeRequestDiff entity instance. |
| `ApiEntitiesMergeRequestDiffFull` | `(data) -> ApiEntitiesMergeRequestDiffFullEntity` | Create an ApiEntitiesMergeRequestDiffFull entity instance. |
| `ApiEntitiesMergeRequestReviewer` | `(data) -> ApiEntitiesMergeRequestReviewerEntity` | Create an ApiEntitiesMergeRequestReviewer entity instance. |
| `ApiEntitiesMetricImage` | `(data) -> ApiEntitiesMetricImageEntity` | Create an ApiEntitiesMetricImage entity instance. |
| `ApiEntitiesMrNote` | `(data) -> ApiEntitiesMrNoteEntity` | Create an ApiEntitiesMrNote entity instance. |
| `ApiEntitiesNamespace` | `(data) -> ApiEntitiesNamespaceEntity` | Create an ApiEntitiesNamespace entity instance. |
| `ApiEntitiesNamespaceExistence` | `(data) -> ApiEntitiesNamespaceExistenceEntity` | Create an ApiEntitiesNamespaceExistence entity instance. |
| `ApiEntitiesNamespacesStorageLimitExclusion` | `(data) -> ApiEntitiesNamespacesStorageLimitExclusionEntity` | Create an ApiEntitiesNamespacesStorageLimitExclusion entity instance. |
| `ApiEntitiesNpmPackage` | `(data) -> ApiEntitiesNpmPackageEntity` | Create an ApiEntitiesNpmPackage entity instance. |
| `ApiEntitiesNpmPackageTag` | `(data) -> ApiEntitiesNpmPackageTagEntity` | Create an ApiEntitiesNpmPackageTag entity instance. |
| `ApiEntitiesNugetPackagesVersion` | `(data) -> ApiEntitiesNugetPackagesVersionEntity` | Create an ApiEntitiesNugetPackagesVersion entity instance. |
| `ApiEntitiesNugetSearchResult` | `(data) -> ApiEntitiesNugetSearchResultEntity` | Create an ApiEntitiesNugetSearchResult entity instance. |
| `ApiEntitiesNugetServiceIndex` | `(data) -> ApiEntitiesNugetServiceIndexEntity` | Create an ApiEntitiesNugetServiceIndex entity instance. |
| `ApiEntitiesOrganizationsOrganization` | `(data) -> ApiEntitiesOrganizationsOrganizationEntity` | Create an ApiEntitiesOrganizationsOrganization entity instance. |
| `ApiEntitiesPackage` | `(data) -> ApiEntitiesPackageEntity` | Create an ApiEntitiesPackage entity instance. |
| `ApiEntitiesPackageFile` | `(data) -> ApiEntitiesPackageFileEntity` | Create an ApiEntitiesPackageFile entity instance. |
| `ApiEntitiesPackagePipeline` | `(data) -> ApiEntitiesPackagePipelineEntity` | Create an ApiEntitiesPackagePipeline entity instance. |
| `ApiEntitiesPackagesConanFilesList` | `(data) -> ApiEntitiesPackagesConanFilesListEntity` | Create an ApiEntitiesPackagesConanFilesList entity instance. |
| `ApiEntitiesPackagesConanPackageManifest` | `(data) -> ApiEntitiesPackagesConanPackageManifestEntity` | Create an ApiEntitiesPackagesConanPackageManifest entity instance. |
| `ApiEntitiesPackagesConanPackageRevision` | `(data) -> ApiEntitiesPackagesConanPackageRevisionEntity` | Create an ApiEntitiesPackagesConanPackageRevision entity instance. |
| `ApiEntitiesPackagesConanPackageSnapshot` | `(data) -> ApiEntitiesPackagesConanPackageSnapshotEntity` | Create an ApiEntitiesPackagesConanPackageSnapshot entity instance. |
| `ApiEntitiesPackagesConanRecipeManifest` | `(data) -> ApiEntitiesPackagesConanRecipeManifestEntity` | Create an ApiEntitiesPackagesConanRecipeManifest entity instance. |
| `ApiEntitiesPackagesConanRecipeRevision` | `(data) -> ApiEntitiesPackagesConanRecipeRevisionEntity` | Create an ApiEntitiesPackagesConanRecipeRevision entity instance. |
| `ApiEntitiesPackagesConanRecipeSnapshot` | `(data) -> ApiEntitiesPackagesConanRecipeSnapshotEntity` | Create an ApiEntitiesPackagesConanRecipeSnapshot entity instance. |
| `ApiEntitiesPackagesConanRevision` | `(data) -> ApiEntitiesPackagesConanRevisionEntity` | Create an ApiEntitiesPackagesConanRevision entity instance. |
| `ApiEntitiesPackagesConanUploadUrl` | `(data) -> ApiEntitiesPackagesConanUploadUrlEntity` | Create an ApiEntitiesPackagesConanUploadUrl entity instance. |
| `ApiEntitiesPackagesDebianDistribution` | `(data) -> ApiEntitiesPackagesDebianDistributionEntity` | Create an ApiEntitiesPackagesDebianDistribution entity instance. |
| `ApiEntitiesPagesDomain` | `(data) -> ApiEntitiesPagesDomainEntity` | Create an ApiEntitiesPagesDomain entity instance. |
| `ApiEntitiesPagesDomainBasic` | `(data) -> ApiEntitiesPagesDomainBasicEntity` | Create an ApiEntitiesPagesDomainBasic entity instance. |
| `ApiEntitiesPersonalAccessToken` | `(data) -> ApiEntitiesPersonalAccessTokenEntity` | Create an ApiEntitiesPersonalAccessToken entity instance. |
| `ApiEntitiesPersonalAccessTokenWithLastUsedIp` | `(data) -> ApiEntitiesPersonalAccessTokenWithLastUsedIpEntity` | Create an ApiEntitiesPersonalAccessTokenWithLastUsedIp entity instance. |
| `ApiEntitiesPersonalAccessTokenWithToken` | `(data) -> ApiEntitiesPersonalAccessTokenWithTokenEntity` | Create an ApiEntitiesPersonalAccessTokenWithToken entity instance. |
| `ApiEntitiesPersonalSnippet` | `(data) -> ApiEntitiesPersonalSnippetEntity` | Create an ApiEntitiesPersonalSnippet entity instance. |
| `ApiEntitiesPlanLimit` | `(data) -> ApiEntitiesPlanLimitEntity` | Create an ApiEntitiesPlanLimit entity instance. |
| `ApiEntitiesProject` | `(data) -> ApiEntitiesProjectEntity` | Create an ApiEntitiesProject entity instance. |
| `ApiEntitiesProjectDailyStatistic` | `(data) -> ApiEntitiesProjectDailyStatisticEntity` | Create an ApiEntitiesProjectDailyStatistic entity instance. |
| `ApiEntitiesProjectExportStatus` | `(data) -> ApiEntitiesProjectExportStatusEntity` | Create an ApiEntitiesProjectExportStatus entity instance. |
| `ApiEntitiesProjectGroupLink` | `(data) -> ApiEntitiesProjectGroupLinkEntity` | Create an ApiEntitiesProjectGroupLink entity instance. |
| `ApiEntitiesProjectHook` | `(data) -> ApiEntitiesProjectHookEntity` | Create an ApiEntitiesProjectHook entity instance. |
| `ApiEntitiesProjectImportStatus` | `(data) -> ApiEntitiesProjectImportStatusEntity` | Create an ApiEntitiesProjectImportStatus entity instance. |
| `ApiEntitiesProjectJobTokenScope` | `(data) -> ApiEntitiesProjectJobTokenScopeEntity` | Create an ApiEntitiesProjectJobTokenScope entity instance. |
| `ApiEntitiesProjectRepositoryStorage` | `(data) -> ApiEntitiesProjectRepositoryStorageEntity` | Create an ApiEntitiesProjectRepositoryStorage entity instance. |
| `ApiEntitiesProjectSnippet` | `(data) -> ApiEntitiesProjectSnippetEntity` | Create an ApiEntitiesProjectSnippet entity instance. |
| `ApiEntitiesProjectUpload` | `(data) -> ApiEntitiesProjectUploadEntity` | Create an ApiEntitiesProjectUpload entity instance. |
| `ApiEntitiesProjectWithAccess` | `(data) -> ApiEntitiesProjectWithAccessEntity` | Create an ApiEntitiesProjectWithAccess entity instance. |
| `ApiEntitiesProjectsContainerRegistryProtectionRule` | `(data) -> ApiEntitiesProjectsContainerRegistryProtectionRuleEntity` | Create an ApiEntitiesProjectsContainerRegistryProtectionRule entity instance. |
| `ApiEntitiesProjectsPackagesProtectionRule` | `(data) -> ApiEntitiesProjectsPackagesProtectionRuleEntity` | Create an ApiEntitiesProjectsPackagesProtectionRule entity instance. |
| `ApiEntitiesProjectsTopic` | `(data) -> ApiEntitiesProjectsTopicEntity` | Create an ApiEntitiesProjectsTopic entity instance. |
| `ApiEntitiesProtectedBranch` | `(data) -> ApiEntitiesProtectedBranchEntity` | Create an ApiEntitiesProtectedBranch entity instance. |
| `ApiEntitiesProtectedTag` | `(data) -> ApiEntitiesProtectedTagEntity` | Create an ApiEntitiesProtectedTag entity instance. |
| `ApiEntitiesPublicGroupDetail` | `(data) -> ApiEntitiesPublicGroupDetailEntity` | Create an ApiEntitiesPublicGroupDetail entity instance. |
| `ApiEntitiesRelatedIssue` | `(data) -> ApiEntitiesRelatedIssueEntity` | Create an ApiEntitiesRelatedIssue entity instance. |
| `ApiEntitiesRelationImportTracker` | `(data) -> ApiEntitiesRelationImportTrackerEntity` | Create an ApiEntitiesRelationImportTracker entity instance. |
| `ApiEntitiesRelease` | `(data) -> ApiEntitiesReleaseEntity` | Create an ApiEntitiesRelease entity instance. |
| `ApiEntitiesReleasesLink` | `(data) -> ApiEntitiesReleasesLinkEntity` | Create an ApiEntitiesReleasesLink entity instance. |
| `ApiEntitiesRemoteMirror` | `(data) -> ApiEntitiesRemoteMirrorEntity` | Create an ApiEntitiesRemoteMirror entity instance. |
| `ApiEntitiesRepositoryHealth` | `(data) -> ApiEntitiesRepositoryHealthEntity` | Create an ApiEntitiesRepositoryHealth entity instance. |
| `ApiEntitiesResourceAccessTokenWithToken` | `(data) -> ApiEntitiesResourceAccessTokenWithTokenEntity` | Create an ApiEntitiesResourceAccessTokenWithToken entity instance. |
| `ApiEntitiesResourceMilestoneEvent` | `(data) -> ApiEntitiesResourceMilestoneEventEntity` | Create an ApiEntitiesResourceMilestoneEvent entity instance. |
| `ApiEntitiesSnippet` | `(data) -> ApiEntitiesSnippetEntity` | Create an ApiEntitiesSnippet entity instance. |
| `ApiEntitiesSshKeyWithUser` | `(data) -> ApiEntitiesSshKeyWithUserEntity` | Create an ApiEntitiesSshKeyWithUser entity instance. |
| `ApiEntitiesSuggestion` | `(data) -> ApiEntitiesSuggestionEntity` | Create an ApiEntitiesSuggestion entity instance. |
| `ApiEntitiesSystemBroadcastMessage` | `(data) -> ApiEntitiesSystemBroadcastMessageEntity` | Create an ApiEntitiesSystemBroadcastMessage entity instance. |
| `ApiEntitiesTag` | `(data) -> ApiEntitiesTagEntity` | Create an ApiEntitiesTag entity instance. |
| `ApiEntitiesTagSignature` | `(data) -> ApiEntitiesTagSignatureEntity` | Create an ApiEntitiesTagSignature entity instance. |
| `ApiEntitiesTemplatesList` | `(data) -> ApiEntitiesTemplatesListEntity` | Create an ApiEntitiesTemplatesList entity instance. |
| `ApiEntitiesTerraformModuleVersion` | `(data) -> ApiEntitiesTerraformModuleVersionEntity` | Create an ApiEntitiesTerraformModuleVersion entity instance. |
| `ApiEntitiesTreeObject` | `(data) -> ApiEntitiesTreeObjectEntity` | Create an ApiEntitiesTreeObject entity instance. |
| `ApiEntitiesTrigger` | `(data) -> ApiEntitiesTriggerEntity` | Create an ApiEntitiesTrigger entity instance. |
| `ApiEntitiesUserAgentDetail` | `(data) -> ApiEntitiesUserAgentDetailEntity` | Create an ApiEntitiesUserAgentDetail entity instance. |
| `ApiEntitiesUserCount` | `(data) -> ApiEntitiesUserCountEntity` | Create an ApiEntitiesUserCount entity instance. |
| `ApiEntitiesUserPublic` | `(data) -> ApiEntitiesUserPublicEntity` | Create an ApiEntitiesUserPublic entity instance. |
| `ApiEntitiesUserWithAdmin` | `(data) -> ApiEntitiesUserWithAdminEntity` | Create an ApiEntitiesUserWithAdmin entity instance. |
| `ApiEntitiesWikiAttachment` | `(data) -> ApiEntitiesWikiAttachmentEntity` | Create an ApiEntitiesWikiAttachment entity instance. |
| `ApiEntitiesWikiPage` | `(data) -> ApiEntitiesWikiPageEntity` | Create an ApiEntitiesWikiPage entity instance. |
| `ApiEntitiesWikiPageBasic` | `(data) -> ApiEntitiesWikiPageBasicEntity` | Create an ApiEntitiesWikiPageBasic entity instance. |
| `Application` | `(data) -> ApplicationEntity` | Create an Application entity instance. |
| `AwardEmoji` | `(data) -> AwardEmojiEntity` | Create an AwardEmoji entity instance. |
| `Badge` | `(data) -> BadgeEntity` | Create a Badge entity instance. |
| `Branch` | `(data) -> BranchEntity` | Create a Branch entity instance. |
| `CargoPackage` | `(data) -> CargoPackageEntity` | Create a CargoPackage entity instance. |
| `CiVariable` | `(data) -> CiVariableEntity` | Create a CiVariable entity instance. |
| `Cluster` | `(data) -> ClusterEntity` | Create a Cluster entity instance. |
| `ClusterAgent` | `(data) -> ClusterAgentEntity` | Create a ClusterAgent entity instance. |
| `Composer` | `(data) -> ComposerEntity` | Create a Composer entity instance. |
| `ComposerPackage` | `(data) -> ComposerPackageEntity` | Create a ComposerPackage entity instance. |
| `Conan` | `(data) -> ConanEntity` | Create a Conan entity instance. |
| `ConanPackage` | `(data) -> ConanPackageEntity` | Create a ConanPackage entity instance. |
| `ContainerRegistry` | `(data) -> ContainerRegistryEntity` | Create a ContainerRegistry entity instance. |
| `ContainerRegistryEvent` | `(data) -> ContainerRegistryEventEntity` | Create a ContainerRegistryEvent entity instance. |
| `CustomAttribute` | `(data) -> CustomAttributeEntity` | Create a CustomAttribute entity instance. |
| `Debian` | `(data) -> DebianEntity` | Create a Debian entity instance. |
| `DebianDistribution` | `(data) -> DebianDistributionEntity` | Create a DebianDistribution entity instance. |
| `DebianPackage` | `(data) -> DebianPackageEntity` | Create a DebianPackage entity instance. |
| `DependencyProxy` | `(data) -> DependencyProxyEntity` | Create a DependencyProxy entity instance. |
| `DeployKey` | `(data) -> DeployKeyEntity` | Create a DeployKey entity instance. |
| `DeployToken` | `(data) -> DeployTokenEntity` | Create a DeployToken entity instance. |
| `Deployment` | `(data) -> DeploymentEntity` | Create a Deployment entity instance. |
| `EeApiEntitiesApprovalState` | `(data) -> EeApiEntitiesApprovalStateEntity` | Create an EeApiEntitiesApprovalState entity instance. |
| `EeApiEntitiesAuditEvent` | `(data) -> EeApiEntitiesAuditEventEntity` | Create an EeApiEntitiesAuditEvent entity instance. |
| `EeApiEntitiesBillableMembership` | `(data) -> EeApiEntitiesBillableMembershipEntity` | Create an EeApiEntitiesBillableMembership entity instance. |
| `EeApiEntitiesGeoNodeStatus` | `(data) -> EeApiEntitiesGeoNodeStatusEntity` | Create an EeApiEntitiesGeoNodeStatus entity instance. |
| `EeApiEntitiesGeoPipelineRef` | `(data) -> EeApiEntitiesGeoPipelineRefEntity` | Create an EeApiEntitiesGeoPipelineRef entity instance. |
| `EeApiEntitiesIssuableMetricImage` | `(data) -> EeApiEntitiesIssuableMetricImageEntity` | Create an EeApiEntitiesIssuableMetricImage entity instance. |
| `EeApiEntitiesMergeRequestApprovalState` | `(data) -> EeApiEntitiesMergeRequestApprovalStateEntity` | Create an EeApiEntitiesMergeRequestApprovalState entity instance. |
| `EeApiEntitiesSshCertificate` | `(data) -> EeApiEntitiesSshCertificateEntity` | Create an EeApiEntitiesSshCertificate entity instance. |
| `Environment` | `(data) -> EnvironmentEntity` | Create an Environment entity instance. |
| `ErrorTrackingClientKey` | `(data) -> ErrorTrackingClientKeyEntity` | Create an ErrorTrackingClientKey entity instance. |
| `Feature` | `(data) -> FeatureEntity` | Create a Feature entity instance. |
| `FeatureFlag` | `(data) -> FeatureFlagEntity` | Create a FeatureFlag entity instance. |
| `FeatureFlagsUserList` | `(data) -> FeatureFlagsUserListEntity` | Create a FeatureFlagsUserList entity instance. |
| `FreezePeriod` | `(data) -> FreezePeriodEntity` | Create a FreezePeriod entity instance. |
| `GenericPackage` | `(data) -> GenericPackageEntity` | Create a GenericPackage entity instance. |
| `Geo` | `(data) -> GeoEntity` | Create a Geo entity instance. |
| `GoProxy` | `(data) -> GoProxyEntity` | Create a GoProxy entity instance. |
| `Group` | `(data) -> GroupEntity` | Create a Group entity instance. |
| `GroupAvatar` | `(data) -> GroupAvatarEntity` | Create a GroupAvatar entity instance. |
| `GroupExport` | `(data) -> GroupExportEntity` | Create a GroupExport entity instance. |
| `GroupImport` | `(data) -> GroupImportEntity` | Create a GroupImport entity instance. |
| `HelmPackage` | `(data) -> HelmPackageEntity` | Create a HelmPackage entity instance. |
| `Hook` | `(data) -> HookEntity` | Create a Hook entity instance. |
| `Import` | `(data) -> ImportEntity` | Create an Import entity instance. |
| `Integration` | `(data) -> IntegrationEntity` | Create an Integration entity instance. |
| `Invitation` | `(data) -> InvitationEntity` | Create an Invitation entity instance. |
| `IssueLink` | `(data) -> IssueLinkEntity` | Create an IssueLink entity instance. |
| `IssuesStatistic` | `(data) -> IssuesStatisticEntity` | Create an IssuesStatistic entity instance. |
| `Job` | `(data) -> JobEntity` | Create a Job entity instance. |
| `MavenPackage` | `(data) -> MavenPackageEntity` | Create a MavenPackage entity instance. |
| `Member` | `(data) -> MemberEntity` | Create a Member entity instance. |
| `MergeRequest` | `(data) -> MergeRequestEntity` | Create a MergeRequest entity instance. |
| `Metadata` | `(data) -> MetadataEntity` | Create a Metadata entity instance. |
| `Migration` | `(data) -> MigrationEntity` | Create a Migration entity instance. |
| `MlModelRegistry` | `(data) -> MlModelRegistryEntity` | Create a MlModelRegistry entity instance. |
| `Namespace` | `(data) -> NamespaceEntity` | Create a Namespace entity instance. |
| `Npm` | `(data) -> NpmEntity` | Create a Npm entity instance. |
| `NpmPackage` | `(data) -> NpmPackageEntity` | Create a NpmPackage entity instance. |
| `Nuget` | `(data) -> NugetEntity` | Create a Nuget entity instance. |
| `NugetPackage` | `(data) -> NugetPackageEntity` | Create a NugetPackage entity instance. |
| `PackageFile` | `(data) -> PackageFileEntity` | Create a PackageFile entity instance. |
| `Page` | `(data) -> PageEntity` | Create a Page entity instance. |
| `Participant` | `(data) -> ParticipantEntity` | Create a Participant entity instance. |
| `PersonalAccessToken` | `(data) -> PersonalAccessTokenEntity` | Create a PersonalAccessToken entity instance. |
| `Project` | `(data) -> ProjectEntity` | Create a Project entity instance. |
| `ProjectAvatar` | `(data) -> ProjectAvatarEntity` | Create a ProjectAvatar entity instance. |
| `ProjectEntity` | `(data) -> ProjectEntityEntity` | Create a ProjectEntity entity instance. |
| `ProjectExport` | `(data) -> ProjectExportEntity` | Create a ProjectExport entity instance. |
| `ProjectHook` | `(data) -> ProjectHookEntity` | Create a ProjectHook entity instance. |
| `ProjectImport` | `(data) -> ProjectImportEntity` | Create a ProjectImport entity instance. |
| `ProjectImportEntity` | `(data) -> ProjectImportEntityEntity` | Create a ProjectImportEntity entity instance. |
| `ProjectPackage` | `(data) -> ProjectPackageEntity` | Create a ProjectPackage entity instance. |
| `ProjectSnippet` | `(data) -> ProjectSnippetEntity` | Create a ProjectSnippet entity instance. |
| `ProjectsJobTokenScope` | `(data) -> ProjectsJobTokenScopeEntity` | Create a ProjectsJobTokenScope entity instance. |
| `ProtectedTag` | `(data) -> ProtectedTagEntity` | Create a ProtectedTag entity instance. |
| `Pypi` | `(data) -> PypiEntity` | Create a Pypi entity instance. |
| `PypiPackage` | `(data) -> PypiPackageEntity` | Create a PypiPackage entity instance. |
| `Release` | `(data) -> ReleaseEntity` | Create a Release entity instance. |
| `ReleaseLink` | `(data) -> ReleaseLinkEntity` | Create a ReleaseLink entity instance. |
| `RemoteMirror` | `(data) -> RemoteMirrorEntity` | Create a RemoteMirror entity instance. |
| `Rpm` | `(data) -> RpmEntity` | Create a Rpm entity instance. |
| `RpmPackage` | `(data) -> RpmPackageEntity` | Create a RpmPackage entity instance. |
| `Rubygem` | `(data) -> RubygemEntity` | Create a Rubygem entity instance. |
| `RubygemPackage` | `(data) -> RubygemPackageEntity` | Create a RubygemPackage entity instance. |
| `Runner` | `(data) -> RunnerEntity` | Create a Runner entity instance. |
| `Search` | `(data) -> SearchEntity` | Create a Search entity instance. |
| `SecureFile` | `(data) -> SecureFileEntity` | Create a SecureFile entity instance. |
| `Slack` | `(data) -> SlackEntity` | Create a Slack entity instance. |
| `Snippet` | `(data) -> SnippetEntity` | Create a Snippet entity instance. |
| `Starrer` | `(data) -> StarrerEntity` | Create a Starrer entity instance. |
| `SystemHook` | `(data) -> SystemHookEntity` | Create a SystemHook entity instance. |
| `Tag` | `(data) -> TagEntity` | Create a Tag entity instance. |
| `TerraformRegistry` | `(data) -> TerraformRegistryEntity` | Create a TerraformRegistry entity instance. |
| `TerraformState` | `(data) -> TerraformStateEntity` | Create a TerraformState entity instance. |
| `TestReport` | `(data) -> TestReportEntity` | Create a TestReport entity instance. |
| `TestReportSummary` | `(data) -> TestReportSummaryEntity` | Create a TestReportSummary entity instance. |
| `Topic` | `(data) -> TopicEntity` | Create a Topic entity instance. |
| `UnleashApi` | `(data) -> UnleashApiEntity` | Create an UnleashApi entity instance. |
| `UsageData` | `(data) -> UsageDataEntity` | Create an UsageData entity instance. |
| `User` | `(data) -> UserEntity` | Create an User entity instance. |
| `WebCommit` | `(data) -> WebCommitEntity` | Create a WebCommit entity instance. |
| `Wiki` | `(data) -> WikiEntity` | Create a Wiki entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> any, err` | Load a single entity by match criteria. |
| `list` | `(reqmatch, ctrl) -> any, err` | List entities matching the criteria. |
| `create` | `(reqdata, ctrl) -> any, err` | Create a new entity. |
| `update` | `(reqdata, ctrl) -> any, err` | Update an existing entity. |
| `remove` | `(reqmatch, ctrl) -> any, err` | Remove an entity. |
| `data_get` | `() -> table` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> table` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> string` | Return the entity name. |

### Result shape

Entity operations return `(value, err)`. The `value` is the operation's
data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `load` / `create` / `update` / `remove` | the entity record (a `table`) |
| `list` | an array (`table`) of entity records |

Check `err` first (it is non-`nil` on failure), then use `value`:

    local access_request, err = client:AccessRequest():load()
    if err then error(err) end
    -- access_request is the loaded record

Only `direct()` returns a response envelope — a `table` with `ok`,
`status`, `headers`, and `data` keys.

### Entities

#### AccessRequest

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/api/v4/groups/{id}/access_requests/{user_id}`

#### AlertManagement

| Field | Description |
| --- | --- |

Operations: Create, Remove.

API path: `/api/v4/projects/{id}/alert_management_alerts/{alert_iid}/metric_images/authorize`

#### ApiEntitiesAccessRequester

| Field | Description |
| --- | --- |
| `avatar_path` |  |
| `avatar_url` |  |
| `custom_attribute` |  |
| `id` |  |
| `key` |  |
| `locked` |  |
| `name` |  |
| `public_email` |  |
| `requested_at` |  |
| `state` |  |
| `username` |  |
| `value` |  |
| `web_url` |  |

Operations: Create, List, Update.

API path: `/api/v4/groups/{id}/access_requests`

#### ApiEntitiesAppearance

| Field | Description |
| --- | --- |
| `description` |  |
| `email_header_and_footer_enabled` |  |
| `favicon` |  |
| `footer_message` |  |
| `header_logo` |  |
| `header_message` |  |
| `logo` |  |
| `member_guideline` |  |
| `message_background_color` |  |
| `message_font_color` |  |
| `new_project_guideline` |  |
| `profile_image_guideline` |  |
| `pwa_description` |  |
| `pwa_icon` |  |
| `pwa_name` |  |
| `pwa_short_name` |  |
| `title` |  |

Operations: Load, Update.

API path: `/api/v4/application/appearance`

#### ApiEntitiesApplication

| Field | Description |
| --- | --- |
| `application_id` |  |
| `application_name` |  |
| `callback_url` |  |
| `confidential` |  |
| `id` |  |

Operations: List.

API path: `/api/v4/applications`

#### ApiEntitiesApplicationStatistic

| Field | Description |
| --- | --- |
| `active_user` |  |
| `fork` |  |
| `group` |  |
| `issue` |  |
| `merge_request` |  |
| `milestone` |  |
| `note` |  |
| `project` |  |
| `snippet` |  |
| `ssh_key` |  |
| `user` |  |

Operations: Load.

API path: `/api/v4/application/statistics`

#### ApiEntitiesApplicationWithSecret

| Field | Description |
| --- | --- |
| `application_id` |  |
| `application_name` |  |
| `callback_url` |  |
| `confidential` |  |
| `id` |  |
| `secret` |  |

Operations: Create.

API path: `/api/v4/applications/{id}/renew-secret`

#### ApiEntitiesAvatar

| Field | Description |
| --- | --- |
| `avatar_url` |  |

Operations: Load.

API path: `/api/v4/avatar`

#### ApiEntitiesAwardEmoji

| Field | Description |
| --- | --- |
| `awardable_id` |  |
| `awardable_type` |  |
| `created_at` |  |
| `id` |  |
| `name` |  |
| `updated_at` |  |
| `url` |  |
| `user` |  |

Operations: Create, List, Load.

API path: `/api/v4/groups/{id}/epics/{epic_iid}/notes/{note_id}/award_emoji`

#### ApiEntitiesBadge

| Field | Description |
| --- | --- |
| `id` |  |
| `image_url` |  |
| `kind` |  |
| `link_url` |  |
| `name` |  |
| `rendered_image_url` |  |
| `rendered_link_url` |  |

Operations: Create, List, Load, Update.

API path: `/api/v4/groups/{id}/badges`

#### ApiEntitiesBasicBadgeDetail

| Field | Description |
| --- | --- |
| `image_url` |  |
| `link_url` |  |
| `name` |  |
| `rendered_image_url` |  |
| `rendered_link_url` |  |

Operations: Load.

API path: `/api/v4/groups/{id}/badges/render`

#### ApiEntitiesBasicGroupDetail

| Field | Description |
| --- | --- |

Operations: Create.

API path: `/api/v4/projects/{id}/job_token_scope/groups_allowlist`

#### ApiEntitiesBasicProjectDetail

| Field | Description |
| --- | --- |
| `avatar_url` |  |
| `created_at` |  |
| `custom_attribute` |  |
| `default_branch` |  |
| `description` |  |
| `forks_count` |  |
| `http_url_to_repo` |  |
| `id` |  |
| `last_activity_at` |  |
| `license` |  |
| `license_url` |  |
| `name` |  |
| `name_with_namespace` |  |
| `namespace` |  |
| `path` |  |
| `path_with_namespace` |  |
| `readme_url` |  |
| `repository_storage` |  |
| `ssh_url_to_repo` |  |
| `star_count` |  |
| `tag_list` |  |
| `topic` |  |
| `visibility` |  |
| `web_url` |  |

Operations: Create, List.

API path: `/api/v4/projects/{id}/job_token_scope/allowlist`

#### ApiEntitiesBasicRef

| Field | Description |
| --- | --- |
| `name` |  |
| `type` |  |

Operations: List.

API path: `/api/v4/projects/{id}/repository/commits/{sha}/refs`

#### ApiEntitiesBasicSuccess

| Field | Description |
| --- | --- |

Operations: Create.

API path: `/api/v4/integrations/jira_connect/subscriptions`

#### ApiEntitiesBatchedBackgroundMigration

| Field | Description |
| --- | --- |
| `column_name` |  |
| `created_at` |  |
| `id` |  |
| `job_class_name` |  |
| `progress` |  |
| `status` |  |
| `table_name` |  |

Operations: List, Load, Update.

API path: `/api/v4/admin/batched_background_migrations`

#### ApiEntitiesBranch

| Field | Description |
| --- | --- |
| `can_push` |  |
| `commit` |  |
| `default` |  |
| `developers_can_merge` |  |
| `developers_can_push` |  |
| `merged` |  |
| `name` |  |
| `protected` |  |
| `web_url` |  |

Operations: Create, List, Load, Update.

API path: `/api/v4/projects/{id}/repository/branches`

#### ApiEntitiesBulkImport

| Field | Description |
| --- | --- |
| `bulk_import_id` |  |
| `created_at` |  |
| `destination_full_path` |  |
| `destination_name` |  |
| `destination_namespace` |  |
| `destination_slug` |  |
| `entity_type` |  |
| `failure` |  |
| `has_failure` |  |
| `id` |  |
| `migrate_membership` |  |
| `migrate_project` |  |
| `namespace_id` |  |
| `parent_id` |  |
| `project_id` |  |
| `source_full_path` |  |
| `source_type` |  |
| `source_url` |  |
| `stat` |  |
| `status` |  |
| `updated_at` |  |

Operations: Create, List, Load.

API path: `/api/v4/bulk_imports`

#### ApiEntitiesBulkImportsEntityFailure

| Field | Description |
| --- | --- |
| `correlation_id_value` |  |
| `exception_class` |  |
| `exception_message` |  |
| `relation` |  |
| `source_title` |  |
| `source_url` |  |

Operations: Load.

API path: `/api/v4/bulk_imports/{import_id}/entities/{entity_id}/failures`

#### ApiEntitiesBulkImportsExportStatus

| Field | Description |
| --- | --- |
| `batch` |  |
| `batched` |  |
| `batches_count` |  |
| `error` |  |
| `relation` |  |
| `status` |  |
| `total_objects_count` |  |
| `updated_at` |  |

Operations: List.

API path: `/api/v4/groups/{id}/export_relations/status`

#### ApiEntitiesChangelog

| Field | Description |
| --- | --- |
| `note` |  |

Operations: Load.

API path: `/api/v4/projects/{id}/repository/changelog`

#### ApiEntitiesCiBridge

| Field | Description |
| --- | --- |
| `allow_failure` |  |
| `commit` |  |
| `coverage` |  |
| `created_at` |  |
| `downstream_pipeline` |  |
| `duration` |  |
| `erased_at` |  |
| `failure_reason` |  |
| `finished_at` |  |
| `id` |  |
| `name` |  |
| `pipeline` |  |
| `project` |  |
| `queued_duration` |  |
| `ref` |  |
| `stage` |  |
| `started_at` |  |
| `status` |  |
| `tag` |  |
| `user` |  |
| `web_url` |  |

Operations: List.

API path: `/api/v4/projects/{id}/pipelines/{pipeline_id}/bridges`

#### ApiEntitiesCiCatalogResourcesVersion

| Field | Description |
| --- | --- |

Operations: Create.

API path: `/api/v4/projects/{id}/catalog/publish`

#### ApiEntitiesCiJob

| Field | Description |
| --- | --- |
| `allow_failure` |  |
| `archived` |  |
| `artifact` |  |
| `artifacts_expire_at` |  |
| `artifacts_file` |  |
| `commit` |  |
| `coverage` |  |
| `created_at` |  |
| `duration` |  |
| `erased_at` |  |
| `failure_reason` |  |
| `file_format` |  |
| `file_type` |  |
| `filename` |  |
| `finished_at` |  |
| `id` |  |
| `name` |  |
| `pipeline` |  |
| `project` |  |
| `queued_duration` |  |
| `ref` |  |
| `runner` |  |
| `runner_manager` |  |
| `size` |  |
| `stage` |  |
| `started_at` |  |
| `status` |  |
| `tag` |  |
| `tag_list` |  |
| `user` |  |
| `web_url` |  |

Operations: Create, List, Load.

API path: `/api/v4/projects/{id}/jobs/{job_id}/cancel`

#### ApiEntitiesCiJobBasic

| Field | Description |
| --- | --- |
| `allow_failure` |  |
| `commit` |  |
| `coverage` |  |
| `created_at` |  |
| `duration` |  |
| `erased_at` |  |
| `failure_reason` |  |
| `finished_at` |  |
| `id` |  |
| `name` |  |
| `pipeline` |  |
| `project` |  |
| `queued_duration` |  |
| `ref` |  |
| `stage` |  |
| `started_at` |  |
| `status` |  |
| `tag` |  |
| `user` |  |
| `web_url` |  |

Operations: Create, List.

API path: `/api/v4/projects/{id}/jobs/{job_id}/play`

#### ApiEntitiesCiJobBasicWithProject

| Field | Description |
| --- | --- |
| `allow_failure` |  |
| `commit` |  |
| `coverage` |  |
| `created_at` |  |
| `duration` |  |
| `erased_at` |  |
| `failure_reason` |  |
| `finished_at` |  |
| `id` |  |
| `name` |  |
| `pipeline` |  |
| `project` |  |
| `queued_duration` |  |
| `ref` |  |
| `stage` |  |
| `started_at` |  |
| `status` |  |
| `tag` |  |
| `user` |  |
| `web_url` |  |

Operations: Load.

API path: `/api/v4/runners/{id}/jobs`

#### ApiEntitiesCiLintResult

| Field | Description |
| --- | --- |
| `blob` |  |
| `context_project` |  |
| `context_sha` |  |
| `error` |  |
| `extra` |  |
| `include` |  |
| `job` |  |
| `location` |  |
| `merged_yaml` |  |
| `raw` |  |
| `type` |  |
| `valid` |  |
| `warning` |  |

Operations: Create, List.

API path: `/api/v4/projects/{id}/ci/lint`

#### ApiEntitiesCiPipeline

| Field | Description |
| --- | --- |

Operations: Create.

API path: `/api/v4/projects/{id}/merge_requests/{merge_request_iid}/pipelines`

#### ApiEntitiesCiPipelineBasic

| Field | Description |
| --- | --- |
| `created_at` |  |
| `id` |  |
| `iid` |  |
| `project_id` |  |
| `ref` |  |
| `sha` |  |
| `source` |  |
| `status` |  |
| `updated_at` |  |
| `web_url` |  |

Operations: List, Load.

API path: `/api/v4/projects/{id}/pipelines`

#### ApiEntitiesCiPipelineSchedule

| Field | Description |
| --- | --- |
| `active` |  |
| `created_at` |  |
| `cron` |  |
| `cron_timezone` |  |
| `description` |  |
| `id` |  |
| `input` |  |
| `next_run_at` |  |
| `owner` |  |
| `ref` |  |
| `updated_at` |  |

Operations: List.

API path: `/api/v4/projects/{id}/pipeline_schedules`

#### ApiEntitiesCiPipelineScheduleDetail

| Field | Description |
| --- | --- |
| `active` |  |
| `created_at` |  |
| `cron` |  |
| `cron_timezone` |  |
| `description` |  |
| `id` |  |
| `input` |  |
| `last_pipeline` |  |
| `next_run_at` |  |
| `owner` |  |
| `ref` |  |
| `updated_at` |  |
| `variable` |  |

Operations: Create, Load, Update.

API path: `/api/v4/projects/{id}/pipeline_schedules/{pipeline_schedule_id}/take_ownership`

#### ApiEntitiesCiResetTokenResult

| Field | Description |
| --- | --- |

Operations: Create.

API path: `/api/v4/groups/{id}/runners/reset_registration_token`

#### ApiEntitiesCiResourceGroup

| Field | Description |
| --- | --- |
| `created_at` |  |
| `id` |  |
| `key` |  |
| `process_mode` |  |
| `updated_at` |  |

Operations: List, Load, Update.

API path: `/api/v4/projects/{id}/resource_groups`

#### ApiEntitiesCiRunner

| Field | Description |
| --- | --- |
| `active` |  |
| `created_at` |  |
| `created_by` |  |
| `description` |  |
| `id` |  |
| `ip_address` |  |
| `is_shared` |  |
| `job_execution_status` |  |
| `name` |  |
| `online` |  |
| `paused` |  |
| `runner_type` |  |
| `status` |  |

Operations: Create, Load.

API path: `/api/v4/projects/{id}/runners`

#### ApiEntitiesCiRunnerDetail

| Field | Description |
| --- | --- |
| `access_level` |  |
| `active` |  |
| `architecture` |  |
| `contacted_at` |  |
| `created_at` |  |
| `created_by` |  |
| `description` |  |
| `group` |  |
| `id` |  |
| `ip_address` |  |
| `is_shared` |  |
| `job_execution_status` |  |
| `locked` |  |
| `maintenance_note` |  |
| `maximum_timeout` |  |
| `name` |  |
| `online` |  |
| `paused` |  |
| `platform` |  |
| `project` |  |
| `revision` |  |
| `run_untagged` |  |
| `runner_type` |  |
| `status` |  |
| `tag_list` |  |
| `version` |  |

Operations: Load, Update.

API path: `/api/v4/runners/{id}`

#### ApiEntitiesCiRunnerManager

| Field | Description |
| --- | --- |
| `architecture` |  |
| `contacted_at` |  |
| `created_at` |  |
| `id` |  |
| `ip_address` |  |
| `job_execution_status` |  |
| `platform` |  |
| `revision` |  |
| `status` |  |
| `system_id` |  |
| `version` |  |

Operations: Load.

API path: `/api/v4/runners/{id}/managers`

#### ApiEntitiesCiRunnerRegistrationDetail

| Field | Description |
| --- | --- |

Operations: Create.

API path: `/api/v4/runners`

#### ApiEntitiesCiSecureFile

| Field | Description |
| --- | --- |
| `checksum` |  |
| `checksum_algorithm` |  |
| `created_at` |  |
| `expires_at` |  |
| `file_extension` |  |
| `id` |  |
| `metadata` |  |
| `name` |  |

Operations: Create, Load.

API path: `/api/v4/projects/{id}/secure_files`

#### ApiEntitiesCiVariable

| Field | Description |
| --- | --- |
| `description` |  |
| `environment_scope` |  |
| `hidden` |  |
| `key` |  |
| `masked` |  |
| `protected` |  |
| `raw` |  |
| `value` |  |
| `variable_type` |  |

Operations: Create, List, Load, Update.

API path: `/api/v4/projects/{id}/pipeline_schedules/{pipeline_schedule_id}/variables`

#### ApiEntitiesCluster

| Field | Description |
| --- | --- |
| `cluster_type` |  |
| `created_at` |  |
| `domain` |  |
| `enabled` |  |
| `environment_scope` |  |
| `id` |  |
| `managed` |  |
| `management_project` |  |
| `name` |  |
| `namespace_per_environment` |  |
| `platform_kubernete` |  |
| `platform_type` |  |
| `provider_gcp` |  |
| `provider_type` |  |
| `user` |  |

Operations: Create, List, Load, Update.

API path: `/api/v4/admin/clusters/add`

#### ApiEntitiesClusterGroup

| Field | Description |
| --- | --- |
| `cluster_type` |  |
| `created_at` |  |
| `domain` |  |
| `enabled` |  |
| `environment_scope` |  |
| `group` |  |
| `id` |  |
| `managed` |  |
| `management_project` |  |
| `name` |  |
| `namespace_per_environment` |  |
| `platform_kubernete` |  |
| `platform_type` |  |
| `provider_gcp` |  |
| `provider_type` |  |
| `user` |  |

Operations: Create, Load, Update.

API path: `/api/v4/groups/{id}/clusters/user`

#### ApiEntitiesClusterProject

| Field | Description |
| --- | --- |
| `cluster_type` |  |
| `created_at` |  |
| `domain` |  |
| `enabled` |  |
| `environment_scope` |  |
| `id` |  |
| `managed` |  |
| `management_project` |  |
| `name` |  |
| `namespace_per_environment` |  |
| `platform_kubernete` |  |
| `platform_type` |  |
| `project` |  |
| `provider_gcp` |  |
| `provider_type` |  |
| `user` |  |

Operations: Create, Load, Update.

API path: `/api/v4/projects/{id}/clusters/user`

#### ApiEntitiesClustersAgent

| Field | Description |
| --- | --- |
| `config_project` |  |
| `created_at` |  |
| `created_by_user_id` |  |
| `id` |  |
| `is_receptive` |  |
| `name` |  |

Operations: Create, Load.

API path: `/api/v4/projects/{id}/cluster_agents`

#### ApiEntitiesClustersAgentToken

| Field | Description |
| --- | --- |
| `agent_id` |  |
| `created_at` |  |
| `created_by_user_id` |  |
| `description` |  |
| `id` |  |
| `last_used_at` |  |
| `name` |  |
| `status` |  |

Operations: Load.

API path: `/api/v4/projects/{id}/cluster_agents/{agent_id}/tokens/{token_id}`

#### ApiEntitiesClustersAgentTokenBasic

| Field | Description |
| --- | --- |
| `agent_id` |  |
| `created_at` |  |
| `created_by_user_id` |  |
| `description` |  |
| `id` |  |
| `name` |  |
| `status` |  |

Operations: Load.

API path: `/api/v4/projects/{id}/cluster_agents/{agent_id}/tokens`

#### ApiEntitiesClustersAgentTokenWithToken

| Field | Description |
| --- | --- |

Operations: Create.

API path: `/api/v4/projects/{id}/cluster_agents/{agent_id}/tokens`

#### ApiEntitiesCommit

| Field | Description |
| --- | --- |
| `author_email` |  |
| `author_name` |  |
| `authored_date` |  |
| `committed_date` |  |
| `committer_email` |  |
| `committer_name` |  |
| `created_at` |  |
| `extended_trailer` |  |
| `id` |  |
| `message` |  |
| `parent_id` |  |
| `short_id` |  |
| `title` |  |
| `trailer` |  |
| `web_url` |  |

Operations: Create, List.

API path: `/api/v4/projects/{id}/merge_requests/{merge_request_iid}/context_commits`

#### ApiEntitiesCommitDetail

| Field | Description |
| --- | --- |
| `author_email` |  |
| `author_name` |  |
| `authored_date` |  |
| `committed_date` |  |
| `committer_email` |  |
| `committer_name` |  |
| `created_at` |  |
| `extended_trailer` |  |
| `id` |  |
| `last_pipeline` |  |
| `message` |  |
| `parent_id` |  |
| `project_id` |  |
| `short_id` |  |
| `stat` |  |
| `status` |  |
| `title` |  |
| `trailer` |  |
| `web_url` |  |

Operations: Create, Load, Update.

API path: `/api/v4/projects/{id}/repository/commits`

#### ApiEntitiesCommitNote

| Field | Description |
| --- | --- |
| `author` |  |
| `created_at` |  |
| `line` |  |
| `line_type` |  |
| `note` |  |
| `path` |  |

Operations: Create, List.

API path: `/api/v4/projects/{id}/repository/commits/{sha}/comments`

#### ApiEntitiesCommitSequence

| Field | Description |
| --- | --- |
| `count` |  |

Operations: Load.

API path: `/api/v4/projects/{id}/repository/commits/{sha}/sequence`

#### ApiEntitiesCommitSignature

| Field | Description |
| --- | --- |
| `commit_source` |  |
| `signature` |  |
| `signature_type` |  |

Operations: Load.

API path: `/api/v4/projects/{id}/repository/commits/{sha}/signature`

#### ApiEntitiesCommitStatus

| Field | Description |
| --- | --- |
| `allow_failure` |  |
| `author` |  |
| `coverage` |  |
| `created_at` |  |
| `description` |  |
| `finished_at` |  |
| `id` |  |
| `name` |  |
| `pipeline_id` |  |
| `ref` |  |
| `sha` |  |
| `started_at` |  |
| `status` |  |
| `target_url` |  |

Operations: Create, List.

API path: `/api/v4/projects/{id}/statuses/{sha}`

#### ApiEntitiesCompare

| Field | Description |
| --- | --- |
| `commit` |  |
| `compare_same_ref` |  |
| `compare_timeout` |  |
| `diff` |  |
| `web_url` |  |

Operations: List.

API path: `/api/v4/projects/{id}/repository/compare`

#### ApiEntitiesContainerRegistryRepository

| Field | Description |
| --- | --- |
| `cleanup_policy_started_at` |  |
| `created_at` |  |
| `delete_api_path` |  |
| `id` |  |
| `location` |  |
| `name` |  |
| `path` |  |
| `project_id` |  |
| `size` |  |
| `status` |  |
| `tag` |  |
| `tags_count` |  |

Operations: List, Load.

API path: `/api/v4/projects/{id}/registry/repositories`

#### ApiEntitiesContainerRegistryTag

| Field | Description |
| --- | --- |
| `location` |  |
| `name` |  |
| `path` |  |

Operations: List.

API path: `/api/v4/projects/{id}/registry/repositories/{repository_id}/tags`

#### ApiEntitiesContainerRegistryTagDetail

| Field | Description |
| --- | --- |
| `created_at` |  |
| `digest` |  |
| `location` |  |
| `name` |  |
| `path` |  |
| `revision` |  |
| `short_revision` |  |
| `total_size` |  |

Operations: Load.

API path: `/api/v4/projects/{id}/registry/repositories/{repository_id}/tags/{tag_name}`

#### ApiEntitiesContributor

| Field | Description |
| --- | --- |
| `addition` |  |
| `commit` |  |
| `deletion` |  |
| `email` |  |
| `name` |  |

Operations: Load.

API path: `/api/v4/projects/{id}/repository/contributors`

#### ApiEntitiesDeployKey

| Field | Description |
| --- | --- |
| `created_at` |  |
| `expires_at` |  |
| `fingerprint` |  |
| `fingerprint_sha256` |  |
| `id` |  |
| `key` |  |
| `last_used_at` |  |
| `projects_with_readonly_access` |  |
| `projects_with_write_access` |  |
| `title` |  |
| `usage_type` |  |

Operations: Create, List, Update.

API path: `/api/v4/projects/{id}/deploy_keys/{key_id}/enable`

#### ApiEntitiesDeployKeysProject

| Field | Description |
| --- | --- |
| `can_push` |  |
| `created_at` |  |
| `expires_at` |  |
| `fingerprint` |  |
| `fingerprint_sha256` |  |
| `id` |  |
| `key` |  |
| `last_used_at` |  |
| `projects_with_readonly_access` |  |
| `projects_with_write_access` |  |
| `title` |  |
| `usage_type` |  |

Operations: Create, List, Load.

API path: `/api/v4/projects/{id}/deploy_keys`

#### ApiEntitiesDeployToken

| Field | Description |
| --- | --- |
| `expired` |  |
| `expires_at` |  |
| `id` |  |
| `name` |  |
| `revoked` |  |
| `scope` |  |
| `username` |  |

Operations: List, Load.

API path: `/api/v4/groups/{id}/deploy_tokens`

#### ApiEntitiesDeployTokenWithToken

| Field | Description |
| --- | --- |

Operations: Create.

API path: `/api/v4/groups/{id}/deploy_tokens`

#### ApiEntitiesDeployment

| Field | Description |
| --- | --- |
| `created_at` |  |
| `deployable` |  |
| `environment` |  |
| `id` |  |
| `iid` |  |
| `ref` |  |
| `sha` |  |
| `status` |  |
| `updated_at` |  |
| `user` |  |

Operations: List.

API path: `/api/v4/projects/{id}/deployments`

#### ApiEntitiesDeploymentExtended

| Field | Description |
| --- | --- |
| `approval` |  |
| `approval_summary` |  |
| `created_at` |  |
| `deployable` |  |
| `environment` |  |
| `id` |  |
| `iid` |  |
| `pending_approval_count` |  |
| `ref` |  |
| `sha` |  |
| `status` |  |
| `updated_at` |  |
| `user` |  |

Operations: Create, Load, Update.

API path: `/api/v4/projects/{id}/deployments`

#### ApiEntitiesDeploymentsApproval

| Field | Description |
| --- | --- |

Operations: Create.

API path: `/api/v4/projects/{id}/deployments/{deployment_id}/approval`

#### ApiEntitiesDictionaryTable

| Field | Description |
| --- | --- |
| `feature_category` |  |
| `table_name` |  |

Operations: Load.

API path: `/api/v4/admin/databases/{database_name}/dictionary/tables/{table_name}`

#### ApiEntitiesDiff

| Field | Description |
| --- | --- |
| `a_mode` |  |
| `b_mode` |  |
| `collapsed` |  |
| `deleted_file` |  |
| `diff` |  |
| `generated_file` |  |
| `new_file` |  |
| `new_path` |  |
| `old_path` |  |
| `renamed_file` |  |
| `too_large` |  |

Operations: List, Load.

API path: `/api/v4/projects/{id}/repository/commits/{sha}/diff`

#### ApiEntitiesDiscoveredCluster

| Field | Description |
| --- | --- |
| `group` |  |
| `project` |  |

Operations: Load.

API path: `/api/v4/discover-cert-based-clusters`

#### ApiEntitiesDraftNote

| Field | Description |
| --- | --- |
| `author_id` |  |
| `commit_id` |  |
| `discussion_id` |  |
| `id` |  |
| `line_code` |  |
| `merge_request_id` |  |
| `note` |  |
| `position` |  |
| `resolve_discussion` |  |

Operations: Create, List, Load, Update.

API path: `/api/v4/projects/{id}/merge_requests/{merge_request_iid}/draft_notes`

#### ApiEntitiesEnvironment

| Field | Description |
| --- | --- |
| `auto_stop_at` |  |
| `auto_stop_setting` |  |
| `cluster_agent` |  |
| `created_at` |  |
| `description` |  |
| `external_url` |  |
| `flux_resource_path` |  |
| `id` |  |
| `kubernetes_namespace` |  |
| `last_deployment` |  |
| `name` |  |
| `project` |  |
| `slug` |  |
| `state` |  |
| `tier` |  |
| `updated_at` |  |

Operations: Create, List, Load, Update.

API path: `/api/v4/projects/{id}/environments/{environment_id}/stop`

#### ApiEntitiesErrorTrackingClientKey

| Field | Description |
| --- | --- |
| `active` |  |
| `id` |  |
| `public_key` |  |
| `sentry_dsn` |  |

Operations: Create, List.

API path: `/api/v4/projects/{id}/error_tracking/client_keys`

#### ApiEntitiesErrorTrackingProjectSetting

| Field | Description |
| --- | --- |
| `active` |  |
| `api_url` |  |
| `integrated` |  |
| `project_name` |  |
| `sentry_external_url` |  |

Operations: Load, Patch, Update.

API path: `/api/v4/projects/{id}/error_tracking/settings`

#### ApiEntitiesEvent

| Field | Description |
| --- | --- |
| `action_name` |  |
| `author` |  |
| `author_id` |  |
| `author_username` |  |
| `created_at` |  |
| `id` |  |
| `imported` |  |
| `imported_from` |  |
| `note` |  |
| `project_id` |  |
| `push_data` |  |
| `target_id` |  |
| `target_iid` |  |
| `target_title` |  |
| `target_type` |  |
| `wiki_page` |  |

Operations: List, Load.

API path: `/api/v4/events`

#### ApiEntitiesFeature

| Field | Description |
| --- | --- |
| `definition` |  |
| `gate` |  |
| `name` |  |
| `state` |  |

Operations: Create, List.

API path: `/api/v4/features/{name}`

#### ApiEntitiesFeatureDefinition

| Field | Description |
| --- | --- |
| `default_enabled` |  |
| `feature_issue_url` |  |
| `group` |  |
| `intended_to_rollout_by` |  |
| `introduced_by_url` |  |
| `log_state_change` |  |
| `milestone` |  |
| `name` |  |
| `rollout_issue_url` |  |
| `type` |  |

Operations: List.

API path: `/api/v4/features/definitions`

#### ApiEntitiesFeatureFlag

| Field | Description |
| --- | --- |
| `active` |  |
| `created_at` |  |
| `description` |  |
| `name` |  |
| `scope` |  |
| `strategy` |  |
| `updated_at` |  |
| `version` |  |

Operations: Create, List, Load, Update.

API path: `/api/v4/projects/{id}/feature_flags`

#### ApiEntitiesFeatureFlagUserList

| Field | Description |
| --- | --- |
| `created_at` |  |
| `edit_path` |  |
| `id` |  |
| `iid` |  |
| `name` |  |
| `path` |  |
| `project_id` |  |
| `updated_at` |  |
| `user_xid` |  |

Operations: Create, List, Load, Update.

API path: `/api/v4/projects/{id}/feature_flags_user_lists`

#### ApiEntitiesFreezePeriod

| Field | Description |
| --- | --- |
| `created_at` |  |
| `cron_timezone` |  |
| `freeze_end` |  |
| `freeze_start` |  |
| `id` |  |
| `updated_at` |  |

Operations: Create, List, Load, Update.

API path: `/api/v4/projects/{id}/freeze_periods`

#### ApiEntitiesGitlabSubscription

| Field | Description |
| --- | --- |
| `billing` |  |
| `plan` |  |
| `usage` |  |

Operations: Load.

API path: `/api/v4/namespaces/{id}/gitlab_subscription`

#### ApiEntitiesGoModuleVersion

| Field | Description |
| --- | --- |
| `time` |  |
| `version` |  |

Operations: Load.

API path: `/api/v4/projects/{id}/packages/go/*module_name/@v/{module_version}.info`

#### ApiEntitiesGroup

| Field | Description |
| --- | --- |
| `archived` |  |
| `auto_devops_enabled` |  |
| `auto_duo_code_review_enabled` |  |
| `avatar_url` |  |
| `created_at` |  |
| `custom_attribute` |  |
| `default_branch` |  |
| `default_branch_protection` |  |
| `default_branch_protection_default` |  |
| `description` |  |
| `duo_core_features_enabled` |  |
| `duo_features_enabled` |  |
| `emails_disabled` |  |
| `emails_enabled` |  |
| `file_template_project_id` |  |
| `full_name` |  |
| `full_path` |  |
| `id` |  |
| `ldap_access` |  |
| `ldap_cn` |  |
| `ldap_group_link` |  |
| `lfs_enabled` |  |
| `lock_duo_features_enabled` |  |
| `lock_math_rendering_limits_enabled` |  |
| `marked_for_deletion_on` |  |
| `math_rendering_limits_enabled` |  |
| `max_artifacts_size` |  |
| `mentions_disabled` |  |
| `name` |  |
| `organization_id` |  |
| `parent_id` |  |
| `path` |  |
| `project_creation_level` |  |
| `repository_storage` |  |
| `request_access_enabled` |  |
| `require_two_factor_authentication` |  |
| `root_storage_statistic` |  |
| `saml_group_link` |  |
| `share_with_group_lock` |  |
| `shared_runners_setting` |  |
| `show_diff_preview_in_email` |  |
| `statistic` |  |
| `subgroup_creation_level` |  |
| `two_factor_grace_period` |  |
| `visibility` |  |
| `web_based_commit_signing_enabled` |  |
| `web_url` |  |
| `wiki_access_level` |  |

Operations: Create, List, Load, Update.

API path: `/api/v4/groups/{id}/archive`

#### ApiEntitiesGroupDetail

| Field | Description |
| --- | --- |
| `allowed_email_domains_list` |  |
| `archived` |  |
| `auto_ban_user_on_excessive_projects_download` |  |
| `auto_devops_enabled` |  |
| `auto_duo_code_review_enabled` |  |
| `avatar_url` |  |
| `created_at` |  |
| `custom_attribute` |  |
| `default_branch` |  |
| `default_branch_protection` |  |
| `default_branch_protection_default` |  |
| `description` |  |
| `duo_core_features_enabled` |  |
| `duo_features_enabled` |  |
| `emails_disabled` |  |
| `emails_enabled` |  |
| `enabled_git_access_protocol` |  |
| `extra_shared_runners_minutes_limit` |  |
| `file_template_project_id` |  |
| `full_name` |  |
| `full_path` |  |
| `id` |  |
| `ip_restriction_range` |  |
| `ldap_access` |  |
| `ldap_cn` |  |
| `ldap_group_link` |  |
| `lfs_enabled` |  |
| `lock_duo_features_enabled` |  |
| `lock_math_rendering_limits_enabled` |  |
| `marked_for_deletion_on` |  |
| `math_rendering_limits_enabled` |  |
| `max_artifacts_size` |  |
| `membership_lock` |  |
| `mentions_disabled` |  |
| `name` |  |
| `organization_id` |  |
| `parent_id` |  |
| `path` |  |
| `prevent_forking_outside_group` |  |
| `prevent_sharing_groups_outside_hierarchy` |  |
| `project` |  |
| `project_creation_level` |  |
| `repository_storage` |  |
| `request_access_enabled` |  |
| `require_two_factor_authentication` |  |
| `root_storage_statistic` |  |
| `runners_token` |  |
| `saml_group_link` |  |
| `service_access_tokens_expiration_enforced` |  |
| `share_with_group_lock` |  |
| `shared_project` |  |
| `shared_runners_minutes_limit` |  |
| `shared_runners_setting` |  |
| `shared_with_group` |  |
| `show_diff_preview_in_email` |  |
| `statistic` |  |
| `subgroup_creation_level` |  |
| `two_factor_grace_period` |  |
| `unique_project_download_limit` |  |
| `unique_project_download_limit_alertlist` |  |
| `unique_project_download_limit_allowlist` |  |
| `unique_project_download_limit_interval_in_second` |  |
| `visibility` |  |
| `web_based_commit_signing_enabled` |  |
| `web_url` |  |
| `wiki_access_level` |  |

Operations: Create, Load.

API path: `/api/v4/groups/{id}/share`

#### ApiEntitiesHook

| Field | Description |
| --- | --- |
| `alert_status` |  |
| `branch_filter_strategy` |  |
| `created_at` |  |
| `custom_header` |  |
| `custom_webhook_template` |  |
| `description` |  |
| `disabled_until` |  |
| `enable_ssl_verification` |  |
| `id` |  |
| `merge_requests_event` |  |
| `name` |  |
| `push_event` |  |
| `push_events_branch_filter` |  |
| `repository_update_event` |  |
| `tag_push_event` |  |
| `url` |  |
| `url_variable` |  |

Operations: Create, List, Load, Update.

API path: `/api/v4/hooks`

#### ApiEntitiesIntegration

| Field | Description |
| --- | --- |
| `active` |  |
| `alert_event` |  |
| `comment_on_event_enabled` |  |
| `commit_event` |  |
| `confidential_issues_event` |  |
| `confidential_note_event` |  |
| `created_at` |  |
| `deployment_event` |  |
| `id` |  |
| `incident_event` |  |
| `inherited` |  |
| `issues_event` |  |
| `job_event` |  |
| `merge_requests_event` |  |
| `note_event` |  |
| `pipeline_event` |  |
| `property` |  |
| `push_event` |  |
| `slug` |  |
| `tag_push_event` |  |
| `title` |  |
| `updated_at` |  |
| `vulnerability_event` |  |
| `wiki_page_event` |  |

Operations: Load.

API path: `/api/v4/groups/{id}/integrations/{slug}`

#### ApiEntitiesIntegrationBasic

| Field | Description |
| --- | --- |
| `active` |  |
| `alert_event` |  |
| `comment_on_event_enabled` |  |
| `commit_event` |  |
| `confidential_issues_event` |  |
| `confidential_note_event` |  |
| `created_at` |  |
| `deployment_event` |  |
| `id` |  |
| `incident_event` |  |
| `inherited` |  |
| `issues_event` |  |
| `job_event` |  |
| `merge_requests_event` |  |
| `note_event` |  |
| `pipeline_event` |  |
| `push_event` |  |
| `slug` |  |
| `tag_push_event` |  |
| `title` |  |
| `updated_at` |  |
| `vulnerability_event` |  |
| `wiki_page_event` |  |

Operations: List, Update.

API path: `/api/v4/groups/{id}/integrations`

#### ApiEntitiesInvitation

| Field | Description |
| --- | --- |
| `access_level` |  |
| `created_at` |  |
| `created_by_name` |  |
| `expires_at` |  |
| `invite_email` |  |
| `invite_token` |  |
| `user_name` |  |

Operations: Create, List, Update.

API path: `/api/v4/groups/{id}/invitations`

#### ApiEntitiesIssuableTimeStat

| Field | Description |
| --- | --- |
| `human_time_estimate` |  |
| `human_total_time_spent` |  |
| `time_estimate` |  |
| `total_time_spent` |  |

Operations: Create, Load.

API path: `/api/v4/projects/{id}/issues/{issue_iid}/add_spent_time`

#### ApiEntitiesIssue

| Field | Description |
| --- | --- |
| `assignee` |  |
| `author` |  |
| `blocking_issues_count` |  |
| `closed_at` |  |
| `closed_by` |  |
| `confidential` |  |
| `created_at` |  |
| `description` |  |
| `discussion_locked` |  |
| `downvote` |  |
| `due_date` |  |
| `epic` |  |
| `epic_iid` |  |
| `has_task` |  |
| `health_status` |  |
| `id` |  |
| `iid` |  |
| `imported` |  |
| `imported_from` |  |
| `issue_type` |  |
| `iteration` |  |
| `label` |  |
| `link` |  |
| `merge_requests_count` |  |
| `milestone` |  |
| `moved_to_id` |  |
| `project_id` |  |
| `reference` |  |
| `service_desk_reply_to` |  |
| `severity` |  |
| `state` |  |
| `subscribed` |  |
| `task_completion_status` |  |
| `task_status` |  |
| `time_stat` |  |
| `title` |  |
| `type` |  |
| `updated_at` |  |
| `upvote` |  |
| `user_notes_count` |  |
| `web_url` |  |
| `weight` |  |

Operations: Create, List, Load, Update.

API path: `/api/v4/projects/{id}/issues/{issue_iid}/clone`

#### ApiEntitiesIssueLink

| Field | Description |
| --- | --- |
| `link_type` |  |
| `source_issue` |  |
| `target_issue` |  |

Operations: Create, Load.

API path: `/api/v4/projects/{id}/issues/{issue_iid}/links`

#### ApiEntitiesLicense

| Field | Description |
| --- | --- |
| `condition` |  |
| `content` |  |
| `description` |  |
| `html_url` |  |
| `key` |  |
| `limitation` |  |
| `name` |  |
| `nickname` |  |
| `permission` |  |
| `popular` |  |
| `source_url` |  |

Operations: List.

API path: `/api/v4/projects/{id}/templates/{type}/{name}`

#### ApiEntitiesMarkdown

| Field | Description |
| --- | --- |

Operations: Create.

API path: `/api/v4/markdown`

#### ApiEntitiesMarkdownUploadAdmin

| Field | Description |
| --- | --- |
| `created_at` |  |
| `filename` |  |
| `id` |  |
| `size` |  |
| `uploaded_by` |  |

Operations: List.

API path: `/api/v4/groups/{id}/uploads`

#### ApiEntitiesMember

| Field | Description |
| --- | --- |
| `access_level` |  |
| `avatar_path` |  |
| `avatar_url` |  |
| `created_at` |  |
| `created_by` |  |
| `custom_attribute` |  |
| `email` |  |
| `expires_at` |  |
| `group_saml_identity` |  |
| `group_scim_identity` |  |
| `id` |  |
| `is_using_seat` |  |
| `key` |  |
| `locked` |  |
| `member_role` |  |
| `membership_state` |  |
| `name` |  |
| `override` |  |
| `public_email` |  |
| `state` |  |
| `username` |  |
| `value` |  |
| `web_url` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/api/v4/groups/{id}/members/{user_id}/override`

#### ApiEntitiesMerge

| Field | Description |
| --- | --- |
| `allow_collaboration` |  |
| `allow_maintainer_to_push` |  |
| `approvals_before_merge` |  |
| `assignee` |  |
| `author` |  |
| `blocking_discussions_resolved` |  |
| `changes_count` |  |
| `closed_at` |  |
| `closed_by` |  |
| `created_at` |  |
| `description` |  |
| `description_html` |  |
| `detailed_merge_status` |  |
| `diff_ref` |  |
| `discussion_locked` |  |
| `diverged_commits_count` |  |
| `downvote` |  |
| `draft` |  |
| `first_contribution` |  |
| `first_deployed_to_production_at` |  |
| `force_remove_source_branch` |  |
| `has_conflict` |  |
| `head_pipeline` |  |
| `id` |  |
| `iid` |  |
| `imported` |  |
| `imported_from` |  |
| `label` |  |
| `latest_build_finished_at` |  |
| `latest_build_started_at` |  |
| `merge_after` |  |
| `merge_commit_sha` |  |
| `merge_error` |  |
| `merge_status` |  |
| `merge_user` |  |
| `merge_when_pipeline_succeed` |  |
| `merged_at` |  |
| `merged_by` |  |
| `milestone` |  |
| `pipeline` |  |
| `prepared_at` |  |
| `project_id` |  |
| `rebase_in_progress` |  |
| `reference` |  |
| `reviewer` |  |
| `sha` |  |
| `should_remove_source_branch` |  |
| `source_branch` |  |
| `source_project_id` |  |
| `squash` |  |
| `squash_commit_sha` |  |
| `squash_on_merge` |  |
| `state` |  |
| `subscribed` |  |
| `target_branch` |  |
| `target_project_id` |  |
| `task_completion_status` |  |
| `time_stat` |  |
| `title` |  |
| `title_html` |  |
| `updated_at` |  |
| `upvote` |  |
| `user` |  |
| `user_notes_count` |  |
| `web_url` |  |
| `work_in_progress` |  |

Operations: Create, Load, Update.

API path: `/api/v4/projects/{id}/merge_requests/{merge_request_iid}/cancel_merge_when_pipeline_succeeds`

#### ApiEntitiesMergeRequestApproval

| Field | Description |
| --- | --- |
| `approved` |  |
| `approved_by` |  |
| `user_can_approve` |  |
| `user_has_approved` |  |

Operations: Create, Load.

API path: `/api/v4/projects/{id}/merge_requests/{merge_request_iid}/approve`

#### ApiEntitiesMergeRequestBasic

| Field | Description |
| --- | --- |
| `allow_collaboration` |  |
| `allow_maintainer_to_push` |  |
| `approvals_before_merge` |  |
| `assignee` |  |
| `author` |  |
| `blocking_discussions_resolved` |  |
| `closed_at` |  |
| `closed_by` |  |
| `created_at` |  |
| `description` |  |
| `description_html` |  |
| `detailed_merge_status` |  |
| `discussion_locked` |  |
| `downvote` |  |
| `draft` |  |
| `force_remove_source_branch` |  |
| `has_conflict` |  |
| `id` |  |
| `iid` |  |
| `imported` |  |
| `imported_from` |  |
| `label` |  |
| `merge_after` |  |
| `merge_commit_sha` |  |
| `merge_status` |  |
| `merge_user` |  |
| `merge_when_pipeline_succeed` |  |
| `merged_at` |  |
| `merged_by` |  |
| `milestone` |  |
| `prepared_at` |  |
| `project_id` |  |
| `reference` |  |
| `reviewer` |  |
| `sha` |  |
| `should_remove_source_branch` |  |
| `source_branch` |  |
| `source_project_id` |  |
| `squash` |  |
| `squash_commit_sha` |  |
| `squash_on_merge` |  |
| `state` |  |
| `target_branch` |  |
| `target_project_id` |  |
| `task_completion_status` |  |
| `time_stat` |  |
| `title` |  |
| `title_html` |  |
| `updated_at` |  |
| `upvote` |  |
| `user_notes_count` |  |
| `web_url` |  |
| `work_in_progress` |  |

Operations: List, Load.

API path: `/api/v4/projects/{id}/deployments/{deployment_id}/merge_requests`

#### ApiEntitiesMergeRequestChange

| Field | Description |
| --- | --- |
| `allow_collaboration` |  |
| `allow_maintainer_to_push` |  |
| `approvals_before_merge` |  |
| `assignee` |  |
| `author` |  |
| `blocking_discussions_resolved` |  |
| `change` |  |
| `changes_count` |  |
| `closed_at` |  |
| `closed_by` |  |
| `created_at` |  |
| `description` |  |
| `description_html` |  |
| `detailed_merge_status` |  |
| `diff_ref` |  |
| `discussion_locked` |  |
| `diverged_commits_count` |  |
| `downvote` |  |
| `draft` |  |
| `first_contribution` |  |
| `first_deployed_to_production_at` |  |
| `force_remove_source_branch` |  |
| `has_conflict` |  |
| `head_pipeline` |  |
| `id` |  |
| `iid` |  |
| `imported` |  |
| `imported_from` |  |
| `label` |  |
| `latest_build_finished_at` |  |
| `latest_build_started_at` |  |
| `merge_after` |  |
| `merge_commit_sha` |  |
| `merge_error` |  |
| `merge_status` |  |
| `merge_user` |  |
| `merge_when_pipeline_succeed` |  |
| `merged_at` |  |
| `merged_by` |  |
| `milestone` |  |
| `overflow` |  |
| `pipeline` |  |
| `prepared_at` |  |
| `project_id` |  |
| `rebase_in_progress` |  |
| `reference` |  |
| `reviewer` |  |
| `sha` |  |
| `should_remove_source_branch` |  |
| `source_branch` |  |
| `source_project_id` |  |
| `squash` |  |
| `squash_commit_sha` |  |
| `squash_on_merge` |  |
| `state` |  |
| `subscribed` |  |
| `target_branch` |  |
| `target_project_id` |  |
| `task_completion_status` |  |
| `time_stat` |  |
| `title` |  |
| `title_html` |  |
| `updated_at` |  |
| `upvote` |  |
| `user` |  |
| `user_notes_count` |  |
| `web_url` |  |
| `work_in_progress` |  |

Operations: Load.

API path: `/api/v4/projects/{id}/merge_requests/{merge_request_iid}/changes`

#### ApiEntitiesMergeRequestDiff

| Field | Description |
| --- | --- |
| `base_commit_sha` |  |
| `created_at` |  |
| `head_commit_sha` |  |
| `id` |  |
| `merge_request_id` |  |
| `patch_id_sha` |  |
| `real_size` |  |
| `start_commit_sha` |  |
| `state` |  |

Operations: List.

API path: `/api/v4/projects/{id}/merge_requests/{merge_request_iid}/versions`

#### ApiEntitiesMergeRequestDiffFull

| Field | Description |
| --- | --- |
| `base_commit_sha` |  |
| `commit` |  |
| `created_at` |  |
| `diff` |  |
| `head_commit_sha` |  |
| `id` |  |
| `merge_request_id` |  |
| `patch_id_sha` |  |
| `real_size` |  |
| `start_commit_sha` |  |
| `state` |  |

Operations: Load.

API path: `/api/v4/projects/{id}/merge_requests/{merge_request_iid}/versions/{version_id}`

#### ApiEntitiesMergeRequestReviewer

| Field | Description |
| --- | --- |
| `created_at` |  |
| `state` |  |
| `user` |  |

Operations: Load.

API path: `/api/v4/projects/{id}/merge_requests/{merge_request_iid}/reviewers`

#### ApiEntitiesMetricImage

| Field | Description |
| --- | --- |
| `created_at` |  |
| `file_path` |  |
| `filename` |  |
| `id` |  |
| `url` |  |
| `url_text` |  |

Operations: Create, List, Update.

API path: `/api/v4/projects/{id}/alert_management_alerts/{alert_iid}/metric_images`

#### ApiEntitiesMrNote

| Field | Description |
| --- | --- |
| `author` |  |
| `note` |  |

Operations: Load.

API path: `/api/v4/projects/{id}/merge_requests/{merge_request_iid}/closes_issues`

#### ApiEntitiesNamespace

| Field | Description |
| --- | --- |
| `additional_purchased_storage_ends_on` |  |
| `additional_purchased_storage_size` |  |
| `avatar_url` |  |
| `billable_members_count` |  |
| `end_date` |  |
| `extra_shared_runners_minutes_limit` |  |
| `full_path` |  |
| `id` |  |
| `kind` |  |
| `max_seats_used` |  |
| `max_seats_used_changed_at` |  |
| `members_count_with_descendant` |  |
| `name` |  |
| `parent_id` |  |
| `path` |  |
| `plan` |  |
| `projects_count` |  |
| `root_repository_size` |  |
| `seats_in_use` |  |
| `shared_runners_minutes_limit` |  |
| `trial` |  |
| `trial_ends_on` |  |
| `web_url` |  |

Operations: List, Load, Update.

API path: `/api/v4/namespaces`

#### ApiEntitiesNamespaceExistence

| Field | Description |
| --- | --- |
| `exist` |  |
| `suggest` |  |

Operations: List.

API path: `/api/v4/namespaces/{id}/exists`

#### ApiEntitiesNamespacesStorageLimitExclusion

| Field | Description |
| --- | --- |
| `id` |  |
| `namespace_id` |  |
| `namespace_name` |  |
| `reason` |  |

Operations: Create, Load.

API path: `/api/v4/namespaces/{id}/storage/limit_exclusion`

#### ApiEntitiesNpmPackage

| Field | Description |
| --- | --- |
| `dist_tag` |  |
| `name` |  |
| `version` |  |

Operations: Load.

API path: `/api/v4/groups/{id}/-/packages/npm/*package_name`

#### ApiEntitiesNpmPackageTag

| Field | Description |
| --- | --- |
| `dist_tag` |  |

Operations: Load.

API path: `/api/v4/groups/{id}/-/packages/npm/-/package/*package_name/dist-tags`

#### ApiEntitiesNugetPackagesVersion

| Field | Description |
| --- | --- |
| `version` |  |

Operations: List.

API path: `/api/v4/projects/{id}/packages/nuget/download/*package_name/index`

#### ApiEntitiesNugetSearchResult

| Field | Description |
| --- | --- |
| `author` |  |
| `description` |  |
| `icon_url` |  |
| `id` |  |
| `license_url` |  |
| `project_url` |  |
| `summary` |  |
| `tag` |  |
| `title` |  |
| `total_download` |  |
| `type` |  |
| `verified` |  |
| `version` |  |

Operations: List.

API path: `/api/v4/groups/{id}/-/packages/nuget/query`

#### ApiEntitiesNugetServiceIndex

| Field | Description |
| --- | --- |
| `resource` |  |
| `version` |  |

Operations: List.

API path: `/api/v4/groups/{id}/-/packages/nuget/index`

#### ApiEntitiesOrganizationsOrganization

| Field | Description |
| --- | --- |

Operations: Create.

API path: `/api/v4/organizations`

#### ApiEntitiesPackage

| Field | Description |
| --- | --- |
| `conan_package_name` |  |
| `created_at` |  |
| `id` |  |
| `last_downloaded_at` |  |
| `link` |  |
| `name` |  |
| `package_type` |  |
| `pipeline` |  |
| `project_id` |  |
| `project_path` |  |
| `status` |  |
| `tag` |  |
| `version` |  |

Operations: List, Load.

API path: `/api/v4/groups/{id}/packages`

#### ApiEntitiesPackageFile

| Field | Description |
| --- | --- |
| `created_at` |  |
| `file_md5` |  |
| `file_name` |  |
| `file_sha1` |  |
| `file_sha256` |  |
| `id` |  |
| `package_id` |  |
| `pipeline` |  |
| `size` |  |

Operations: List.

API path: `/api/v4/projects/{id}/packages/{package_id}/package_files`

#### ApiEntitiesPackagePipeline

| Field | Description |
| --- | --- |
| `created_at` |  |
| `id` |  |
| `iid` |  |
| `project_id` |  |
| `ref` |  |
| `sha` |  |
| `source` |  |
| `status` |  |
| `updated_at` |  |
| `user` |  |
| `web_url` |  |

Operations: Load.

API path: `/api/v4/projects/{id}/packages/{package_id}/pipelines`

#### ApiEntitiesPackagesConanFilesList

| Field | Description |
| --- | --- |
| `file` |  |

Operations: Load.

API path: `/api/v4/projects/{id}/packages/conan/v2/conans/{package_name}/{package_version}/{package_username}/{package_channel}/revisions/{recipe_revision}/packages/{conan_package_reference}/revisions/{package_revision}/files`

#### ApiEntitiesPackagesConanPackageManifest

| Field | Description |
| --- | --- |
| `package_url` |  |

Operations: Load.

API path: `/api/v4/projects/{id}/packages/conan/v1/conans/{package_name}/{package_version}/{package_username}/{package_channel}/packages/{conan_package_reference}/digest`

#### ApiEntitiesPackagesConanPackageRevision

| Field | Description |
| --- | --- |
| `revision` |  |
| `time` |  |

Operations: List.

API path: `/api/v4/projects/{id}/packages/conan/v2/conans/{package_name}/{package_version}/{package_username}/{package_channel}/revisions/{recipe_revision}/packages/{conan_package_reference}/revisions`

#### ApiEntitiesPackagesConanPackageSnapshot

| Field | Description |
| --- | --- |
| `package_snapshot` |  |

Operations: Load.

API path: `/api/v4/projects/{id}/packages/conan/v1/conans/{package_name}/{package_version}/{package_username}/{package_channel}/packages/{conan_package_reference}`

#### ApiEntitiesPackagesConanRecipeManifest

| Field | Description |
| --- | --- |
| `recipe_url` |  |

Operations: Load.

API path: `/api/v4/projects/{id}/packages/conan/v1/conans/{package_name}/{package_version}/{package_username}/{package_channel}/digest`

#### ApiEntitiesPackagesConanRecipeRevision

| Field | Description |
| --- | --- |
| `revision` |  |
| `time` |  |

Operations: List.

API path: `/api/v4/projects/{id}/packages/conan/v2/conans/{package_name}/{package_version}/{package_username}/{package_channel}/revisions`

#### ApiEntitiesPackagesConanRecipeSnapshot

| Field | Description |
| --- | --- |
| `recipe_snapshot` |  |

Operations: Load.

API path: `/api/v4/projects/{id}/packages/conan/v1/conans/{package_name}/{package_version}/{package_username}/{package_channel}`

#### ApiEntitiesPackagesConanRevision

| Field | Description |
| --- | --- |
| `revision` |  |
| `time` |  |

Operations: Load.

API path: `/api/v4/projects/{id}/packages/conan/v2/conans/{package_name}/{package_version}/{package_username}/{package_channel}/revisions/{recipe_revision}/packages/{conan_package_reference}/latest`

#### ApiEntitiesPackagesConanUploadUrl

| Field | Description |
| --- | --- |
| `upload_url` |  |

Operations: Create.

API path: `/api/v4/projects/{id}/packages/conan/v1/conans/{package_name}/{package_version}/{package_username}/{package_channel}/packages/{conan_package_reference}/upload_urls`

#### ApiEntitiesPackagesDebianDistribution

| Field | Description |
| --- | --- |
| `architecture` |  |
| `codename` |  |
| `component` |  |
| `description` |  |
| `id` |  |
| `label` |  |
| `origin` |  |
| `suite` |  |
| `valid_time_duration_second` |  |
| `version` |  |

Operations: Create, List, Load, Update.

API path: `/api/v4/groups/{id}/-/debian_distributions`

#### ApiEntitiesPagesDomain

| Field | Description |
| --- | --- |
| `auto_ssl_enabled` |  |
| `certificate` |  |
| `domain` |  |
| `enabled_until` |  |
| `url` |  |
| `verification_code` |  |
| `verified` |  |

Operations: Create, List, Load, Update.

API path: `/api/v4/projects/{id}/pages/domains`

#### ApiEntitiesPagesDomainBasic

| Field | Description |
| --- | --- |
| `auto_ssl_enabled` |  |
| `certificate_expiration` |  |
| `domain` |  |
| `enabled_until` |  |
| `project_id` |  |
| `url` |  |
| `verification_code` |  |
| `verified` |  |

Operations: Load.

API path: `/api/v4/pages/domains`

#### ApiEntitiesPersonalAccessToken

| Field | Description |
| --- | --- |
| `active` |  |
| `created_at` |  |
| `description` |  |
| `expires_at` |  |
| `id` |  |
| `last_used_at` |  |
| `name` |  |
| `revoked` |  |
| `scope` |  |
| `user_id` |  |

Operations: List.

API path: `/api/v4/personal_access_tokens/self/associations`

#### ApiEntitiesPersonalAccessTokenWithLastUsedIp

| Field | Description |
| --- | --- |
| `active` |  |
| `created_at` |  |
| `description` |  |
| `expires_at` |  |
| `id` |  |
| `last_used_at` |  |
| `last_used_ip` |  |
| `name` |  |
| `revoked` |  |
| `scope` |  |
| `user_id` |  |

Operations: List, Load.

API path: `/api/v4/personal_access_tokens`

#### ApiEntitiesPersonalAccessTokenWithToken

| Field | Description |
| --- | --- |
| `active` |  |
| `created_at` |  |
| `description` |  |
| `expires_at` |  |
| `id` |  |
| `last_used_at` |  |
| `name` |  |
| `revoked` |  |
| `scope` |  |
| `token` |  |
| `user_id` |  |

Operations: Create.

API path: `/api/v4/personal_access_tokens/{id}/rotate`

#### ApiEntitiesPersonalSnippet

| Field | Description |
| --- | --- |
| `author` |  |
| `created_at` |  |
| `description` |  |
| `file` |  |
| `file_name` |  |
| `http_url_to_repo` |  |
| `id` |  |
| `imported` |  |
| `imported_from` |  |
| `project_id` |  |
| `raw_url` |  |
| `repository_storage` |  |
| `ssh_url_to_repo` |  |
| `title` |  |
| `updated_at` |  |
| `visibility` |  |
| `web_url` |  |

Operations: Create, List, Load, Update.

API path: `/api/v4/snippets`

#### ApiEntitiesPlanLimit

| Field | Description |
| --- | --- |
| `ci_active_job` |  |
| `ci_instance_level_variable` |  |
| `ci_needs_size_limit` |  |
| `ci_pipeline_schedule` |  |
| `ci_pipeline_size` |  |
| `ci_project_subscription` |  |
| `ci_registered_group_runner` |  |
| `ci_registered_project_runner` |  |
| `conan_max_file_size` |  |
| `dotenv_size` |  |
| `dotenv_variable` |  |
| `enforcement_limit` |  |
| `generic_packages_max_file_size` |  |
| `helm_max_file_size` |  |
| `limits_history` |  |
| `maven_max_file_size` |  |
| `notification_limit` |  |
| `npm_max_file_size` |  |
| `nuget_max_file_size` |  |
| `pipeline_hierarchy_size` |  |
| `pypi_max_file_size` |  |
| `storage_size_limit` |  |
| `terraform_module_max_file_size` |  |

Operations: Load, Update.

API path: `/api/v4/application/plan_limits`

#### ApiEntitiesProject

| Field | Description |
| --- | --- |
| `allow_merge_on_skipped_pipeline` |  |
| `allow_pipeline_trigger_approve_deployment` |  |
| `analytics_access_level` |  |
| `approvals_before_merge` |  |
| `archived` |  |
| `auto_cancel_pending_pipeline` |  |
| `auto_devops_deploy_strategy` |  |
| `auto_devops_enabled` |  |
| `auto_duo_code_review_enabled` |  |
| `autoclose_referenced_issue` |  |
| `avatar_url` |  |
| `build_git_strategy` |  |
| `build_timeout` |  |
| `builds_access_level` |  |
| `can_create_merge_request_in` |  |
| `ci_allow_fork_pipelines_to_run_in_parent_project` |  |
| `ci_config_path` |  |
| `ci_default_git_depth` |  |
| `ci_delete_pipelines_in_second` |  |
| `ci_forward_deployment_enabled` |  |
| `ci_forward_deployment_rollback_allowed` |  |
| `ci_id_token_sub_claim_component` |  |
| `ci_job_token_scope_enabled` |  |
| `ci_pipeline_variables_minimum_override_role` |  |
| `ci_push_repository_for_job_token_allowed` |  |
| `ci_restrict_pipeline_cancellation_role` |  |
| `ci_separated_cache` |  |
| `compliance_framework` |  |
| `container_expiration_policy` |  |
| `container_registry_access_level` |  |
| `container_registry_enabled` |  |
| `container_registry_image_prefix` |  |
| `created_at` |  |
| `creator_id` |  |
| `custom_attribute` |  |
| `default_branch` |  |
| `description` |  |
| `description_html` |  |
| `duo_remote_flows_enabled` |  |
| `emails_disabled` |  |
| `emails_enabled` |  |
| `empty_repo` |  |
| `enforce_auth_checks_on_upload` |  |
| `environments_access_level` |  |
| `external_authorization_classification_label` |  |
| `feature_flags_access_level` |  |
| `forked_from_project` |  |
| `forking_access_level` |  |
| `forks_count` |  |
| `group_runners_enabled` |  |
| `http_url_to_repo` |  |
| `id` |  |
| `import_error` |  |
| `import_status` |  |
| `import_type` |  |
| `import_url` |  |
| `infrastructure_access_level` |  |
| `issue_branch_template` |  |
| `issues_access_level` |  |
| `issues_enabled` |  |
| `issues_template` |  |
| `jobs_enabled` |  |
| `keep_latest_artifact` |  |
| `last_activity_at` |  |
| `lfs_enabled` |  |
| `license` |  |
| `license_url` |  |
| `link` |  |
| `marked_for_deletion_at` |  |
| `marked_for_deletion_on` |  |
| `max_artifacts_size` |  |
| `merge_commit_template` |  |
| `merge_method` |  |
| `merge_pipelines_enabled` |  |
| `merge_request_title_regex` |  |
| `merge_request_title_regex_description` |  |
| `merge_requests_access_level` |  |
| `merge_requests_enabled` |  |
| `merge_requests_template` |  |
| `merge_trains_enabled` |  |
| `merge_trains_skip_train_allowed` |  |
| `mirror` |  |
| `mirror_overwrites_diverged_branch` |  |
| `mirror_trigger_build` |  |
| `mirror_user_id` |  |
| `model_experiments_access_level` |  |
| `model_registry_access_level` |  |
| `monitor_access_level` |  |
| `mr_default_target_self` |  |
| `name` |  |
| `name_with_namespace` |  |
| `namespace` |  |
| `only_allow_merge_if_all_discussions_are_resolved` |  |
| `only_allow_merge_if_all_status_checks_passed` |  |
| `only_allow_merge_if_pipeline_succeed` |  |
| `only_mirror_protected_branch` |  |
| `open_issues_count` |  |
| `owner` |  |
| `package_registry_access_level` |  |
| `packages_enabled` |  |
| `pages_access_level` |  |
| `path` |  |
| `path_with_namespace` |  |
| `pre_receive_secret_detection_enabled` |  |
| `prevent_merge_without_jira_issue` |  |
| `printing_merge_request_link_enabled` |  |
| `public_job` |  |
| `readme_url` |  |
| `releases_access_level` |  |
| `remove_source_branch_after_merge` |  |
| `repository_access_level` |  |
| `repository_object_format` |  |
| `repository_storage` |  |
| `request_access_enabled` |  |
| `requirements_access_level` |  |
| `requirements_enabled` |  |
| `resolve_outdated_diff_discussion` |  |
| `resource_group_default_process_mode` |  |
| `restrict_user_defined_variable` |  |
| `runner_token_expiration_interval` |  |
| `runners_token` |  |
| `secret_push_protection_enabled` |  |
| `security_and_compliance_access_level` |  |
| `security_and_compliance_enabled` |  |
| `service_desk_address` |  |
| `service_desk_enabled` |  |
| `shared_runners_enabled` |  |
| `shared_with_group` |  |
| `show_diff_preview_in_email` |  |
| `snippets_access_level` |  |
| `snippets_enabled` |  |
| `spp_repository_pipeline_access` |  |
| `squash_commit_template` |  |
| `squash_option` |  |
| `ssh_url_to_repo` |  |
| `star_count` |  |
| `statistic` |  |
| `suggestion_commit_message` |  |
| `tag_list` |  |
| `topic` |  |
| `updated_at` |  |
| `visibility` |  |
| `warn_about_potentially_unwanted_character` |  |
| `web_based_commit_signing_enabled` |  |
| `web_url` |  |
| `wiki_access_level` |  |
| `wiki_enabled` |  |

Operations: Create, List, Update.

API path: `/api/v4/projects/{id}/fork/{forked_from_id}`

#### ApiEntitiesProjectDailyStatistic

| Field | Description |
| --- | --- |
| `fetch` |  |

Operations: Load.

API path: `/api/v4/projects/{id}/statistics`

#### ApiEntitiesProjectExportStatus

| Field | Description |
| --- | --- |
| `created_at` |  |
| `description` |  |
| `export_status` |  |
| `id` |  |
| `link` |  |
| `name` |  |
| `name_with_namespace` |  |
| `path` |  |
| `path_with_namespace` |  |

Operations: Load.

API path: `/api/v4/projects/{id}/export`

#### ApiEntitiesProjectGroupLink

| Field | Description |
| --- | --- |

Operations: Create.

API path: `/api/v4/projects/{id}/share`

#### ApiEntitiesProjectHook

| Field | Description |
| --- | --- |
| `alert_status` |  |
| `branch_filter_strategy` |  |
| `confidential_issues_event` |  |
| `confidential_note_event` |  |
| `created_at` |  |
| `custom_header` |  |
| `custom_webhook_template` |  |
| `deployment_event` |  |
| `description` |  |
| `disabled_until` |  |
| `emoji_event` |  |
| `enable_ssl_verification` |  |
| `feature_flag_event` |  |
| `id` |  |
| `issues_event` |  |
| `job_event` |  |
| `merge_requests_event` |  |
| `milestone_event` |  |
| `name` |  |
| `note_event` |  |
| `pipeline_event` |  |
| `project_id` |  |
| `push_event` |  |
| `push_events_branch_filter` |  |
| `releases_event` |  |
| `repository_update_event` |  |
| `resource_access_token_event` |  |
| `tag_push_event` |  |
| `url` |  |
| `url_variable` |  |
| `vulnerability_event` |  |
| `wiki_page_event` |  |

Operations: Create, List, Load, Update.

API path: `/api/v4/projects/{id}/hooks`

#### ApiEntitiesProjectImportStatus

| Field | Description |
| --- | --- |
| `created_at` |  |
| `exception_class` |  |
| `exception_message` |  |
| `id` |  |
| `line_number` |  |
| `relation_name` |  |
| `source` |  |

Operations: Create, List.

API path: `/api/v4/projects/import`

#### ApiEntitiesProjectJobTokenScope

| Field | Description |
| --- | --- |
| `inbound_enabled` |  |
| `outbound_enabled` |  |

Operations: Load.

API path: `/api/v4/projects/{id}/job_token_scope`

#### ApiEntitiesProjectRepositoryStorage

| Field | Description |
| --- | --- |
| `created_at` |  |
| `disk_path` |  |
| `project_id` |  |
| `repository_storage` |  |

Operations: Load.

API path: `/api/v4/projects/{id}/storage`

#### ApiEntitiesProjectSnippet

| Field | Description |
| --- | --- |
| `author` |  |
| `created_at` |  |
| `description` |  |
| `file` |  |
| `file_name` |  |
| `http_url_to_repo` |  |
| `id` |  |
| `imported` |  |
| `imported_from` |  |
| `project_id` |  |
| `raw_url` |  |
| `repository_storage` |  |
| `ssh_url_to_repo` |  |
| `title` |  |
| `updated_at` |  |
| `visibility` |  |
| `web_url` |  |

Operations: Create, List, Load, Update.

API path: `/api/v4/projects/{id}/snippets`

#### ApiEntitiesProjectUpload

| Field | Description |
| --- | --- |

Operations: Create.

API path: `/api/v4/projects/{id}/uploads`

#### ApiEntitiesProjectWithAccess

| Field | Description |
| --- | --- |
| `allow_merge_on_skipped_pipeline` |  |
| `allow_pipeline_trigger_approve_deployment` |  |
| `analytics_access_level` |  |
| `approvals_before_merge` |  |
| `archived` |  |
| `auto_cancel_pending_pipeline` |  |
| `auto_devops_deploy_strategy` |  |
| `auto_devops_enabled` |  |
| `auto_duo_code_review_enabled` |  |
| `autoclose_referenced_issue` |  |
| `avatar_url` |  |
| `build_git_strategy` |  |
| `build_timeout` |  |
| `builds_access_level` |  |
| `can_create_merge_request_in` |  |
| `ci_allow_fork_pipelines_to_run_in_parent_project` |  |
| `ci_config_path` |  |
| `ci_default_git_depth` |  |
| `ci_delete_pipelines_in_second` |  |
| `ci_forward_deployment_enabled` |  |
| `ci_forward_deployment_rollback_allowed` |  |
| `ci_id_token_sub_claim_component` |  |
| `ci_job_token_scope_enabled` |  |
| `ci_pipeline_variables_minimum_override_role` |  |
| `ci_push_repository_for_job_token_allowed` |  |
| `ci_restrict_pipeline_cancellation_role` |  |
| `ci_separated_cache` |  |
| `compliance_framework` |  |
| `container_expiration_policy` |  |
| `container_registry_access_level` |  |
| `container_registry_enabled` |  |
| `container_registry_image_prefix` |  |
| `created_at` |  |
| `creator_id` |  |
| `custom_attribute` |  |
| `default_branch` |  |
| `description` |  |
| `description_html` |  |
| `duo_remote_flows_enabled` |  |
| `emails_disabled` |  |
| `emails_enabled` |  |
| `empty_repo` |  |
| `enforce_auth_checks_on_upload` |  |
| `environments_access_level` |  |
| `external_authorization_classification_label` |  |
| `feature_flags_access_level` |  |
| `forked_from_project` |  |
| `forking_access_level` |  |
| `forks_count` |  |
| `group_runners_enabled` |  |
| `http_url_to_repo` |  |
| `id` |  |
| `import_error` |  |
| `import_status` |  |
| `import_type` |  |
| `import_url` |  |
| `infrastructure_access_level` |  |
| `issue_branch_template` |  |
| `issues_access_level` |  |
| `issues_enabled` |  |
| `issues_template` |  |
| `jobs_enabled` |  |
| `keep_latest_artifact` |  |
| `last_activity_at` |  |
| `lfs_enabled` |  |
| `license` |  |
| `license_url` |  |
| `link` |  |
| `marked_for_deletion_at` |  |
| `marked_for_deletion_on` |  |
| `max_artifacts_size` |  |
| `merge_commit_template` |  |
| `merge_method` |  |
| `merge_pipelines_enabled` |  |
| `merge_request_title_regex` |  |
| `merge_request_title_regex_description` |  |
| `merge_requests_access_level` |  |
| `merge_requests_enabled` |  |
| `merge_requests_template` |  |
| `merge_trains_enabled` |  |
| `merge_trains_skip_train_allowed` |  |
| `mirror` |  |
| `mirror_overwrites_diverged_branch` |  |
| `mirror_trigger_build` |  |
| `mirror_user_id` |  |
| `model_experiments_access_level` |  |
| `model_registry_access_level` |  |
| `monitor_access_level` |  |
| `mr_default_target_self` |  |
| `name` |  |
| `name_with_namespace` |  |
| `namespace` |  |
| `only_allow_merge_if_all_discussions_are_resolved` |  |
| `only_allow_merge_if_all_status_checks_passed` |  |
| `only_allow_merge_if_pipeline_succeed` |  |
| `only_mirror_protected_branch` |  |
| `open_issues_count` |  |
| `owner` |  |
| `package_registry_access_level` |  |
| `packages_enabled` |  |
| `pages_access_level` |  |
| `path` |  |
| `path_with_namespace` |  |
| `permission` |  |
| `pre_receive_secret_detection_enabled` |  |
| `prevent_merge_without_jira_issue` |  |
| `printing_merge_request_link_enabled` |  |
| `public_job` |  |
| `readme_url` |  |
| `releases_access_level` |  |
| `remove_source_branch_after_merge` |  |
| `repository_access_level` |  |
| `repository_object_format` |  |
| `repository_storage` |  |
| `request_access_enabled` |  |
| `requirements_access_level` |  |
| `requirements_enabled` |  |
| `resolve_outdated_diff_discussion` |  |
| `resource_group_default_process_mode` |  |
| `restrict_user_defined_variable` |  |
| `runner_token_expiration_interval` |  |
| `runners_token` |  |
| `secret_push_protection_enabled` |  |
| `security_and_compliance_access_level` |  |
| `security_and_compliance_enabled` |  |
| `service_desk_address` |  |
| `service_desk_enabled` |  |
| `shared_runners_enabled` |  |
| `shared_with_group` |  |
| `show_diff_preview_in_email` |  |
| `snippets_access_level` |  |
| `snippets_enabled` |  |
| `spp_repository_pipeline_access` |  |
| `squash_commit_template` |  |
| `squash_option` |  |
| `ssh_url_to_repo` |  |
| `star_count` |  |
| `statistic` |  |
| `suggestion_commit_message` |  |
| `tag_list` |  |
| `topic` |  |
| `updated_at` |  |
| `visibility` |  |
| `warn_about_potentially_unwanted_character` |  |
| `web_based_commit_signing_enabled` |  |
| `web_url` |  |
| `wiki_access_level` |  |
| `wiki_enabled` |  |

Operations: Load.

API path: `/api/v4/projects/{id}`

#### ApiEntitiesProjectsContainerRegistryProtectionRule

| Field | Description |
| --- | --- |
| `id` |  |
| `minimum_access_level_for_delete` |  |
| `minimum_access_level_for_push` |  |
| `project_id` |  |
| `repository_path_pattern` |  |

Operations: Create, List, Update.

API path: `/api/v4/projects/{id}/registry/protection/repository/rules`

#### ApiEntitiesProjectsPackagesProtectionRule

| Field | Description |
| --- | --- |
| `id` |  |
| `minimum_access_level_for_delete` |  |
| `minimum_access_level_for_push` |  |
| `package_name_pattern` |  |
| `package_type` |  |
| `project_id` |  |

Operations: Create, List, Update.

API path: `/api/v4/projects/{id}/packages/protection/rules`

#### ApiEntitiesProjectsTopic

| Field | Description |
| --- | --- |
| `avatar_url` |  |
| `description` |  |
| `id` |  |
| `name` |  |
| `organization_id` |  |
| `title` |  |
| `total_projects_count` |  |

Operations: Create, Load, Update.

API path: `/api/v4/topics`

#### ApiEntitiesProtectedBranch

| Field | Description |
| --- | --- |
| `allow_force_push` |  |
| `code_owner_approval_required` |  |
| `id` |  |
| `inherited` |  |
| `merge_access_level` |  |
| `name` |  |
| `push_access_level` |  |
| `unprotect_access_level` |  |

Operations: Create, List, Load, Update.

API path: `/api/v4/projects/{id}/protected_branches`

#### ApiEntitiesProtectedTag

| Field | Description |
| --- | --- |
| `create_access_level` |  |
| `name` |  |

Operations: Create, List, Load.

API path: `/api/v4/projects/{id}/protected_tags`

#### ApiEntitiesPublicGroupDetail

| Field | Description |
| --- | --- |
| `avatar_url` |  |
| `full_name` |  |
| `full_path` |  |
| `id` |  |
| `name` |  |
| `web_url` |  |

Operations: List.

API path: `/api/v4/projects/{id}/groups`

#### ApiEntitiesRelatedIssue

| Field | Description |
| --- | --- |
| `assignee` |  |
| `author` |  |
| `blocking_issues_count` |  |
| `closed_at` |  |
| `closed_by` |  |
| `confidential` |  |
| `created_at` |  |
| `description` |  |
| `discussion_locked` |  |
| `downvote` |  |
| `due_date` |  |
| `epic` |  |
| `epic_iid` |  |
| `has_task` |  |
| `health_status` |  |
| `id` |  |
| `iid` |  |
| `imported` |  |
| `imported_from` |  |
| `issue_link_id` |  |
| `issue_type` |  |
| `iteration` |  |
| `label` |  |
| `link` |  |
| `link_created_at` |  |
| `link_type` |  |
| `link_updated_at` |  |
| `merge_requests_count` |  |
| `milestone` |  |
| `moved_to_id` |  |
| `project_id` |  |
| `reference` |  |
| `service_desk_reply_to` |  |
| `severity` |  |
| `state` |  |
| `subscribed` |  |
| `task_completion_status` |  |
| `task_status` |  |
| `time_stat` |  |
| `title` |  |
| `type` |  |
| `updated_at` |  |
| `upvote` |  |
| `user_notes_count` |  |
| `web_url` |  |
| `weight` |  |

Operations: List.

API path: `/api/v4/projects/{id}/issues/{issue_iid}/links`

#### ApiEntitiesRelationImportTracker

| Field | Description |
| --- | --- |

Operations: Create.

API path: `/api/v4/projects/import-relation`

#### ApiEntitiesRelease

| Field | Description |
| --- | --- |
| `asset` |  |
| `author` |  |
| `commit` |  |
| `commit_path` |  |
| `created_at` |  |
| `description` |  |
| `description_html` |  |
| `evidence` |  |
| `link` |  |
| `milestone` |  |
| `name` |  |
| `released_at` |  |
| `tag_name` |  |
| `tag_path` |  |
| `upcoming_release` |  |

Operations: Create, List, Load, Update.

API path: `/api/v4/projects/{id}/releases`

#### ApiEntitiesReleasesLink

| Field | Description |
| --- | --- |
| `direct_asset_url` |  |
| `id` |  |
| `link_type` |  |
| `name` |  |
| `url` |  |

Operations: Create, List, Load, Update.

API path: `/api/v4/projects/{id}/releases/{tag_name}/assets/links`

#### ApiEntitiesRemoteMirror

| Field | Description |
| --- | --- |
| `auth_method` |  |
| `enabled` |  |
| `host_key` |  |
| `id` |  |
| `keep_divergent_ref` |  |
| `last_error` |  |
| `last_successful_update_at` |  |
| `last_update_at` |  |
| `last_update_started_at` |  |
| `mirror_branch_regex` |  |
| `only_protected_branch` |  |
| `update_status` |  |
| `url` |  |

Operations: Create, List, Load, Update.

API path: `/api/v4/projects/{id}/remote_mirrors`

#### ApiEntitiesRepositoryHealth

| Field | Description |
| --- | --- |
| `alternate` |  |
| `bitmap` |  |
| `commit_graph` |  |
| `is_object_pool` |  |
| `last_full_repack` |  |
| `multi_pack_index` |  |
| `multi_pack_index_bitmap` |  |
| `object` |  |
| `reference` |  |
| `size` |  |
| `updated_at` |  |

Operations: Load.

API path: `/api/v4/projects/{id}/repository/health`

#### ApiEntitiesResourceAccessTokenWithToken

| Field | Description |
| --- | --- |
| `access_level` |  |
| `active` |  |
| `created_at` |  |
| `description` |  |
| `expires_at` |  |
| `id` |  |
| `last_used_at` |  |
| `name` |  |
| `resource_id` |  |
| `resource_type` |  |
| `revoked` |  |
| `scope` |  |
| `token` |  |
| `user_id` |  |

Operations: Create.

API path: `/api/v4/groups/{id}/access_tokens/self/rotate`

#### ApiEntitiesResourceMilestoneEvent

| Field | Description |
| --- | --- |
| `action` |  |
| `created_at` |  |
| `id` |  |
| `milestone` |  |
| `resource_id` |  |
| `resource_type` |  |
| `state` |  |
| `user` |  |

Operations: List, Load.

API path: `/api/v4/projects/{id}/issues/{eventable_id}/resource_milestone_events`

#### ApiEntitiesSnippet

| Field | Description |
| --- | --- |
| `author` |  |
| `created_at` |  |
| `description` |  |
| `file` |  |
| `file_name` |  |
| `http_url_to_repo` |  |
| `id` |  |
| `imported` |  |
| `imported_from` |  |
| `project_id` |  |
| `raw_url` |  |
| `repository_storage` |  |
| `ssh_url_to_repo` |  |
| `title` |  |
| `updated_at` |  |
| `visibility` |  |
| `web_url` |  |

Operations: List.

API path: `/api/v4/snippets/all`

#### ApiEntitiesSshKeyWithUser

| Field | Description |
| --- | --- |
| `created_at` |  |
| `expires_at` |  |
| `id` |  |
| `key` |  |
| `last_used_at` |  |
| `title` |  |
| `usage_type` |  |
| `user` |  |

Operations: Load.

API path: `/api/v4/keys/{id}`

#### ApiEntitiesSuggestion

| Field | Description |
| --- | --- |
| `appliable` |  |
| `applied` |  |
| `from_content` |  |
| `from_line` |  |
| `id` |  |
| `to_content` |  |
| `to_line` |  |

Operations: Update.

API path: `/api/v4/suggestions/{id}/apply`

#### ApiEntitiesSystemBroadcastMessage

| Field | Description |
| --- | --- |
| `active` |  |
| `broadcast_type` |  |
| `color` |  |
| `dismissable` |  |
| `ends_at` |  |
| `font` |  |
| `id` |  |
| `message` |  |
| `starts_at` |  |
| `target_access_level` |  |
| `target_path` |  |
| `theme` |  |

Operations: Create, Load, Remove, Update.

API path: `/api/v4/broadcast_messages`

#### ApiEntitiesTag

| Field | Description |
| --- | --- |
| `commit` |  |
| `created_at` |  |
| `message` |  |
| `name` |  |
| `protected` |  |
| `release` |  |
| `target` |  |

Operations: Create, List, Load.

API path: `/api/v4/projects/{id}/repository/tags`

#### ApiEntitiesTagSignature

| Field | Description |
| --- | --- |
| `signature` |  |
| `signature_type` |  |

Operations: Load.

API path: `/api/v4/projects/{id}/repository/tags/{tag_name}/signature`

#### ApiEntitiesTemplatesList

| Field | Description |
| --- | --- |
| `key` |  |
| `name` |  |

Operations: Load.

API path: `/api/v4/projects/{id}/templates/{type}`

#### ApiEntitiesTerraformModuleVersion

| Field | Description |
| --- | --- |
| `module` |  |
| `name` |  |
| `provider` |  |
| `root` |  |
| `source` |  |
| `submodule` |  |
| `version` |  |

Operations: List, Load.

API path: `/api/v4/packages/terraform/modules/v1/{module_namespace}/{module_name}/{module_system}/versions`

#### ApiEntitiesTreeObject

| Field | Description |
| --- | --- |
| `id` |  |
| `mode` |  |
| `name` |  |
| `path` |  |
| `type` |  |

Operations: Load.

API path: `/api/v4/projects/{id}/repository/tree`

#### ApiEntitiesTrigger

| Field | Description |
| --- | --- |
| `created_at` |  |
| `description` |  |
| `expires_at` |  |
| `id` |  |
| `last_used` |  |
| `owner` |  |
| `token` |  |
| `updated_at` |  |

Operations: Create, List, Load, Update.

API path: `/api/v4/projects/{id}/triggers`

#### ApiEntitiesUserAgentDetail

| Field | Description |
| --- | --- |
| `akismet_submitted` |  |
| `ip_address` |  |
| `user_agent` |  |

Operations: Load.

API path: `/api/v4/projects/{id}/issues/{issue_iid}/user_agent_detail`

#### ApiEntitiesUserCount

| Field | Description |
| --- | --- |
| `assigned_issue` |  |
| `assigned_merge_request` |  |
| `merge_request` |  |
| `review_requested_merge_request` |  |
| `todo` |  |

Operations: Load.

API path: `/api/v4/user_counts`

#### ApiEntitiesUserPublic

| Field | Description |
| --- | --- |
| `avatar_path` |  |
| `avatar_url` |  |
| `bio` |  |
| `bot` |  |
| `can_create_group` |  |
| `can_create_project` |  |
| `color_scheme_id` |  |
| `commit_email` |  |
| `confirmed_at` |  |
| `created_at` |  |
| `current_sign_in_at` |  |
| `custom_attribute` |  |
| `discord` |  |
| `email` |  |
| `external` |  |
| `extra_shared_runners_minutes_limit` |  |
| `follower` |  |
| `following` |  |
| `github` |  |
| `id` |  |
| `identity` |  |
| `is_followed` |  |
| `job_title` |  |
| `key` |  |
| `last_activity_on` |  |
| `last_sign_in_at` |  |
| `linkedin` |  |
| `local_time` |  |
| `location` |  |
| `locked` |  |
| `name` |  |
| `organization` |  |
| `preferred_language` |  |
| `private_profile` |  |
| `projects_limit` |  |
| `pronoun` |  |
| `public_email` |  |
| `scim_identity` |  |
| `shared_runners_minutes_limit` |  |
| `state` |  |
| `theme_id` |  |
| `twitter` |  |
| `two_factor_enabled` |  |
| `username` |  |
| `value` |  |
| `web_url` |  |
| `website_url` |  |
| `work_information` |  |

Operations: List.

API path: `/api/v4/groups/{id}/provisioned_users`

#### ApiEntitiesUserWithAdmin

| Field | Description |
| --- | --- |
| `key` |  |
| `value` |  |

Operations: List.

API path: `/api/v4/keys`

#### ApiEntitiesWikiAttachment

| Field | Description |
| --- | --- |

Operations: Create.

API path: `/api/v4/groups/{id}/wikis/attachments`

#### ApiEntitiesWikiPage

| Field | Description |
| --- | --- |
| `content` |  |
| `encoding` |  |
| `format` |  |
| `front_matter` |  |
| `slug` |  |
| `title` |  |
| `wiki_page_meta_id` |  |

Operations: Create, Load, Update.

API path: `/api/v4/groups/{id}/wikis`

#### ApiEntitiesWikiPageBasic

| Field | Description |
| --- | --- |
| `format` |  |
| `slug` |  |
| `title` |  |
| `wiki_page_meta_id` |  |

Operations: List.

API path: `/api/v4/groups/{id}/wikis`

#### Application

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/api/v4/applications/{id}`

#### AwardEmoji

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/api/v4/groups/{id}/epics/{epic_iid}/notes/{note_id}/award_emoji/{award_id}`

#### Badge

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/api/v4/groups/{id}/badges/{badge_id}`

#### Branch

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/api/v4/projects/{id}/repository/branches/{branch}`

#### CargoPackage

| Field | Description |
| --- | --- |

Operations: Load.

API path: `/api/v4/projects/{id}/packages/cargo/config.json`

#### CiVariable

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/api/v4/projects/{id}/variables/{key}`

#### Cluster

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/api/v4/groups/{id}/clusters/{cluster_id}`

#### ClusterAgent

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/api/v4/projects/{id}/cluster_agents/{agent_id}/tokens/{token_id}`

#### Composer

| Field | Description |
| --- | --- |

Operations: Create.

API path: `/api/v4/projects/{id}/packages/composer`

#### ComposerPackage

| Field | Description |
| --- | --- |

Operations: Load.

API path: `/api/v4/projects/{id}/packages/composer/archives/*package_name`

#### Conan

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/api/v4/projects/{id}/packages/conan/v1/conans/{package_name}/{package_version}/{package_username}/{package_channel}`

#### ConanPackage

| Field | Description |
| --- | --- |

Operations: Load, Remove, Update.

API path: `/api/v4/projects/{id}/packages/conan/v1/files/{package_name}/{package_version}/{package_username}/{package_channel}/{recipe_revision}/package/{conan_package_reference}/{package_revision}/{file_name}`

#### ContainerRegistry

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/api/v4/projects/{id}/registry/repositories/{repository_id}/tags`

#### ContainerRegistryEvent

| Field | Description |
| --- | --- |

Operations: Create.

API path: `/api/v4/container_registry_event/events`

#### CustomAttribute

| Field | Description |
| --- | --- |
| `key` |  |
| `value` |  |

Operations: Load.

API path: `/api/v4/groups/{id}/custom_attributes/{key}`

#### Debian

| Field | Description |
| --- | --- |

Operations: Update.

API path: `/api/v4/projects/{id}/packages/debian/{file_name}`

#### DebianDistribution

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/api/v4/groups/{id}/-/debian_distributions/{codename}`

#### DebianPackage

| Field | Description |
| --- | --- |

Operations: Load, Update.

API path: `/api/v4/groups/{id}/-/packages/debian/pool/{distribution}/{project_id}/{letter}/{package_name}/{package_version}/{file_name}`

#### DependencyProxy

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/api/v4/groups/{id}/dependency_proxy/cache`

#### DeployKey

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/api/v4/projects/{id}/deploy_keys/{key_id}`

#### DeployToken

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/api/v4/groups/{id}/deploy_tokens/{token_id}`

#### Deployment

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/api/v4/projects/{id}/deployments/{deployment_id}`

#### EeApiEntitiesApprovalState

| Field | Description |
| --- | --- |

Operations: Create.

API path: `/api/v4/projects/{id}/merge_requests/{merge_request_iid}/approvals`

#### EeApiEntitiesAuditEvent

| Field | Description |
| --- | --- |
| `author_id` |  |
| `created_at` |  |
| `detail` |  |
| `entity_id` |  |
| `entity_type` |  |
| `event_name` |  |
| `id` |  |

Operations: List, Load.

API path: `/api/v4/groups/{id}/audit_events`

#### EeApiEntitiesBillableMembership

| Field | Description |
| --- | --- |
| `access_level` |  |
| `created_at` |  |
| `expires_at` |  |
| `id` |  |
| `source_full_name` |  |
| `source_id` |  |
| `source_members_url` |  |

Operations: Load.

API path: `/api/v4/groups/{id}/billable_members/{user_id}/indirect`

#### EeApiEntitiesGeoNodeStatus

| Field | Description |
| --- | --- |
| `ci_secure_files_checksum_failed_count` |  |
| `ci_secure_files_checksum_total_count` |  |
| `ci_secure_files_checksummed_count` |  |
| `ci_secure_files_count` |  |
| `ci_secure_files_failed_count` |  |
| `ci_secure_files_registry_count` |  |
| `ci_secure_files_synced_count` |  |
| `ci_secure_files_synced_in_percentage` |  |
| `ci_secure_files_verification_failed_count` |  |
| `ci_secure_files_verification_total_count` |  |
| `ci_secure_files_verified_count` |  |
| `ci_secure_files_verified_in_percentage` |  |
| `container_repositories_checksum_failed_count` |  |
| `container_repositories_checksum_total_count` |  |
| `container_repositories_checksummed_count` |  |
| `container_repositories_count` |  |
| `container_repositories_failed_count` |  |
| `container_repositories_registry_count` |  |
| `container_repositories_replication_enabled` |  |
| `container_repositories_synced_count` |  |
| `container_repositories_synced_in_percentage` |  |
| `container_repositories_verification_failed_count` |  |
| `container_repositories_verification_total_count` |  |
| `container_repositories_verified_count` |  |
| `container_repositories_verified_in_percentage` |  |
| `cursor_last_event_id` |  |
| `cursor_last_event_timestamp` |  |
| `db_replication_lag_second` |  |
| `dependency_proxy_blobs_checksum_failed_count` |  |
| `dependency_proxy_blobs_checksum_total_count` |  |
| `dependency_proxy_blobs_checksummed_count` |  |
| `dependency_proxy_blobs_count` |  |
| `dependency_proxy_blobs_failed_count` |  |
| `dependency_proxy_blobs_registry_count` |  |
| `dependency_proxy_blobs_synced_count` |  |
| `dependency_proxy_blobs_synced_in_percentage` |  |
| `dependency_proxy_blobs_verification_failed_count` |  |
| `dependency_proxy_blobs_verification_total_count` |  |
| `dependency_proxy_blobs_verified_count` |  |
| `dependency_proxy_blobs_verified_in_percentage` |  |
| `dependency_proxy_manifests_checksum_failed_count` |  |
| `dependency_proxy_manifests_checksum_total_count` |  |
| `dependency_proxy_manifests_checksummed_count` |  |
| `dependency_proxy_manifests_count` |  |
| `dependency_proxy_manifests_failed_count` |  |
| `dependency_proxy_manifests_registry_count` |  |
| `dependency_proxy_manifests_synced_count` |  |
| `dependency_proxy_manifests_synced_in_percentage` |  |
| `dependency_proxy_manifests_verification_failed_count` |  |
| `dependency_proxy_manifests_verification_total_count` |  |
| `dependency_proxy_manifests_verified_count` |  |
| `dependency_proxy_manifests_verified_in_percentage` |  |
| `design_management_repositories_checksum_failed_count` |  |
| `design_management_repositories_checksum_total_count` |  |
| `design_management_repositories_checksummed_count` |  |
| `design_management_repositories_count` |  |
| `design_management_repositories_failed_count` |  |
| `design_management_repositories_registry_count` |  |
| `design_management_repositories_synced_count` |  |
| `design_management_repositories_synced_in_percentage` |  |
| `design_management_repositories_verification_failed_count` |  |
| `design_management_repositories_verification_total_count` |  |
| `design_management_repositories_verified_count` |  |
| `design_management_repositories_verified_in_percentage` |  |
| `geo_node_id` |  |
| `git_fetch_event_count_weekly` |  |
| `git_push_event_count_weekly` |  |
| `group_wiki_repositories_checksum_failed_count` |  |
| `group_wiki_repositories_checksum_total_count` |  |
| `group_wiki_repositories_checksummed_count` |  |
| `group_wiki_repositories_count` |  |
| `group_wiki_repositories_failed_count` |  |
| `group_wiki_repositories_registry_count` |  |
| `group_wiki_repositories_synced_count` |  |
| `group_wiki_repositories_synced_in_percentage` |  |
| `group_wiki_repositories_verification_failed_count` |  |
| `group_wiki_repositories_verification_total_count` |  |
| `group_wiki_repositories_verified_count` |  |
| `group_wiki_repositories_verified_in_percentage` |  |
| `health` |  |
| `health_status` |  |
| `healthy` |  |
| `job_artifacts_checksum_failed_count` |  |
| `job_artifacts_checksum_total_count` |  |
| `job_artifacts_checksummed_count` |  |
| `job_artifacts_count` |  |
| `job_artifacts_failed_count` |  |
| `job_artifacts_registry_count` |  |
| `job_artifacts_synced_count` |  |
| `job_artifacts_synced_in_percentage` |  |
| `job_artifacts_verification_failed_count` |  |
| `job_artifacts_verification_total_count` |  |
| `job_artifacts_verified_count` |  |
| `job_artifacts_verified_in_percentage` |  |
| `last_event_id` |  |
| `last_event_timestamp` |  |
| `last_successful_status_check_timestamp` |  |
| `lfs_objects_checksum_failed_count` |  |
| `lfs_objects_checksum_total_count` |  |
| `lfs_objects_checksummed_count` |  |
| `lfs_objects_count` |  |
| `lfs_objects_failed_count` |  |
| `lfs_objects_registry_count` |  |
| `lfs_objects_synced_count` |  |
| `lfs_objects_synced_in_percentage` |  |
| `lfs_objects_verification_failed_count` |  |
| `lfs_objects_verification_total_count` |  |
| `lfs_objects_verified_count` |  |
| `lfs_objects_verified_in_percentage` |  |
| `link` |  |
| `merge_request_diffs_checksum_failed_count` |  |
| `merge_request_diffs_checksum_total_count` |  |
| `merge_request_diffs_checksummed_count` |  |
| `merge_request_diffs_count` |  |
| `merge_request_diffs_failed_count` |  |
| `merge_request_diffs_registry_count` |  |
| `merge_request_diffs_synced_count` |  |
| `merge_request_diffs_synced_in_percentage` |  |
| `merge_request_diffs_verification_failed_count` |  |
| `merge_request_diffs_verification_total_count` |  |
| `merge_request_diffs_verified_count` |  |
| `merge_request_diffs_verified_in_percentage` |  |
| `missing_oauth_application` |  |
| `namespace` |  |
| `package_files_checksum_failed_count` |  |
| `package_files_checksum_total_count` |  |
| `package_files_checksummed_count` |  |
| `package_files_count` |  |
| `package_files_failed_count` |  |
| `package_files_registry_count` |  |
| `package_files_synced_count` |  |
| `package_files_synced_in_percentage` |  |
| `package_files_verification_failed_count` |  |
| `package_files_verification_total_count` |  |
| `package_files_verified_count` |  |
| `package_files_verified_in_percentage` |  |
| `pages_deployments_checksum_failed_count` |  |
| `pages_deployments_checksum_total_count` |  |
| `pages_deployments_checksummed_count` |  |
| `pages_deployments_count` |  |
| `pages_deployments_failed_count` |  |
| `pages_deployments_registry_count` |  |
| `pages_deployments_synced_count` |  |
| `pages_deployments_synced_in_percentage` |  |
| `pages_deployments_verification_failed_count` |  |
| `pages_deployments_verification_total_count` |  |
| `pages_deployments_verified_count` |  |
| `pages_deployments_verified_in_percentage` |  |
| `pipeline_artifacts_checksum_failed_count` |  |
| `pipeline_artifacts_checksum_total_count` |  |
| `pipeline_artifacts_checksummed_count` |  |
| `pipeline_artifacts_count` |  |
| `pipeline_artifacts_failed_count` |  |
| `pipeline_artifacts_registry_count` |  |
| `pipeline_artifacts_synced_count` |  |
| `pipeline_artifacts_synced_in_percentage` |  |
| `pipeline_artifacts_verification_failed_count` |  |
| `pipeline_artifacts_verification_total_count` |  |
| `pipeline_artifacts_verified_count` |  |
| `pipeline_artifacts_verified_in_percentage` |  |
| `project_repositories_checksum_failed_count` |  |
| `project_repositories_checksum_total_count` |  |
| `project_repositories_checksummed_count` |  |
| `project_repositories_count` |  |
| `project_repositories_failed_count` |  |
| `project_repositories_registry_count` |  |
| `project_repositories_synced_count` |  |
| `project_repositories_synced_in_percentage` |  |
| `project_repositories_verification_failed_count` |  |
| `project_repositories_verification_total_count` |  |
| `project_repositories_verified_count` |  |
| `project_repositories_verified_in_percentage` |  |
| `project_wiki_repositories_checksum_failed_count` |  |
| `project_wiki_repositories_checksum_total_count` |  |
| `project_wiki_repositories_checksummed_count` |  |
| `project_wiki_repositories_count` |  |
| `project_wiki_repositories_failed_count` |  |
| `project_wiki_repositories_registry_count` |  |
| `project_wiki_repositories_synced_count` |  |
| `project_wiki_repositories_synced_in_percentage` |  |
| `project_wiki_repositories_verification_failed_count` |  |
| `project_wiki_repositories_verification_total_count` |  |
| `project_wiki_repositories_verified_count` |  |
| `project_wiki_repositories_verified_in_percentage` |  |
| `projects_count` |  |
| `proxy_local_requests_event_count_weekly` |  |
| `proxy_remote_requests_event_count_weekly` |  |
| `replication_slots_count` |  |
| `replication_slots_max_retained_wal_byte` |  |
| `replication_slots_used_count` |  |
| `replication_slots_used_in_percentage` |  |
| `repositories_checked_count` |  |
| `repositories_checked_failed_count` |  |
| `repositories_checked_in_percentage` |  |
| `repositories_count` |  |
| `revision` |  |
| `selective_sync_type` |  |
| `snippet_repositories_checksum_failed_count` |  |
| `snippet_repositories_checksum_total_count` |  |
| `snippet_repositories_checksummed_count` |  |
| `snippet_repositories_count` |  |
| `snippet_repositories_failed_count` |  |
| `snippet_repositories_registry_count` |  |
| `snippet_repositories_synced_count` |  |
| `snippet_repositories_synced_in_percentage` |  |
| `snippet_repositories_verification_failed_count` |  |
| `snippet_repositories_verification_total_count` |  |
| `snippet_repositories_verified_count` |  |
| `snippet_repositories_verified_in_percentage` |  |
| `storage_shard` |  |
| `storage_shards_match` |  |
| `terraform_state_versions_checksum_failed_count` |  |
| `terraform_state_versions_checksum_total_count` |  |
| `terraform_state_versions_checksummed_count` |  |
| `terraform_state_versions_count` |  |
| `terraform_state_versions_failed_count` |  |
| `terraform_state_versions_registry_count` |  |
| `terraform_state_versions_synced_count` |  |
| `terraform_state_versions_synced_in_percentage` |  |
| `terraform_state_versions_verification_failed_count` |  |
| `terraform_state_versions_verification_total_count` |  |
| `terraform_state_versions_verified_count` |  |
| `terraform_state_versions_verified_in_percentage` |  |
| `updated_at` |  |
| `uploads_checksum_failed_count` |  |
| `uploads_checksum_total_count` |  |
| `uploads_checksummed_count` |  |
| `uploads_count` |  |
| `uploads_failed_count` |  |
| `uploads_registry_count` |  |
| `uploads_synced_count` |  |
| `uploads_synced_in_percentage` |  |
| `uploads_verification_failed_count` |  |
| `uploads_verification_total_count` |  |
| `uploads_verified_count` |  |
| `uploads_verified_in_percentage` |  |
| `version` |  |

Operations: Create.

API path: `/api/v4/geo/status`

#### EeApiEntitiesGeoPipelineRef

| Field | Description |
| --- | --- |
| `pipeline_ref` |  |

Operations: List.

API path: `/api/v4/geo/repositories/{gl_repository}/pipeline_refs`

#### EeApiEntitiesIssuableMetricImage

| Field | Description |
| --- | --- |
| `created_at` |  |
| `file_path` |  |
| `filename` |  |
| `id` |  |
| `url` |  |
| `url_text` |  |

Operations: Create, Remove, Update.

API path: `/api/v4/projects/{id}/issues/{issue_iid}/metric_images`

#### EeApiEntitiesMergeRequestApprovalState

| Field | Description |
| --- | --- |
| `approvals_required` |  |
| `approved` |  |
| `approved_by` |  |
| `code_owner` |  |
| `contains_hidden_group` |  |
| `eligible_approver` |  |
| `group` |  |
| `id` |  |
| `name` |  |
| `overridden` |  |
| `report_type` |  |
| `rule_type` |  |
| `section` |  |
| `source_rule` |  |
| `user` |  |

Operations: List.

API path: `/api/v4/projects/{id}/merge_requests/{merge_request_iid}/approval_state`

#### EeApiEntitiesSshCertificate

| Field | Description |
| --- | --- |
| `created_at` |  |
| `id` |  |
| `key` |  |
| `title` |  |

Operations: Create, List.

API path: `/api/v4/groups/{id}/ssh_certificates`

#### Environment

| Field | Description |
| --- | --- |

Operations: Create, Remove.

API path: `/api/v4/projects/{id}/environments/stop_stale`

#### ErrorTrackingClientKey

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/api/v4/projects/{id}/error_tracking/client_keys/{key_id}`

#### Feature

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/api/v4/features/{name}`

#### FeatureFlag

| Field | Description |
| --- | --- |

Operations: Create, Load, Remove.

API path: `/api/v4/feature_flags/unleash/{project_id}/client/metrics`

#### FeatureFlagsUserList

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/api/v4/projects/{id}/feature_flags_user_lists/{iid}`

#### FreezePeriod

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/api/v4/projects/{id}/freeze_periods/{freeze_period_id}`

#### GenericPackage

| Field | Description |
| --- | --- |

Operations: Load, Update.

API path: `/api/v4/projects/{id}/packages/generic/{package_name}/*package_version/(*path/){file_name}`

#### Geo

| Field | Description |
| --- | --- |

Operations: Create, Load.

API path: `/api/v4/geo/node_proxy/{id}/graphql`

#### GoProxy

| Field | Description |
| --- | --- |

Operations: Load.

API path: `/api/v4/projects/{id}/packages/go/*module_name/@v/{module_version}.mod`

#### Group

| Field | Description |
| --- | --- |

Operations: Create, Load, Remove, Update.

API path: `/api/v4/groups/{id}/placeholder_reassignments`

#### GroupAvatar

| Field | Description |
| --- | --- |

Operations: Load.

API path: `/api/v4/groups/{id}/avatar`

#### GroupExport

| Field | Description |
| --- | --- |

Operations: Create, Load.

API path: `/api/v4/groups/{id}/export_relations`

#### GroupImport

| Field | Description |
| --- | --- |

Operations: Create.

API path: `/api/v4/groups/import`

#### HelmPackage

| Field | Description |
| --- | --- |

Operations: Create, Load.

API path: `/api/v4/projects/{id}/packages/helm/api/{channel}/charts`

#### Hook

| Field | Description |
| --- | --- |

Operations: Create, Remove, Update.

API path: `/api/v4/hooks/{hook_id}`

#### Import

| Field | Description |
| --- | --- |

Operations: Create.

API path: `/api/v4/import/github/gists`

#### Integration

| Field | Description |
| --- | --- |

Operations: Create, Remove.

API path: `/api/v4/projects/{id}/integrations/mattermost_slash_commands/trigger`

#### Invitation

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/api/v4/groups/{id}/invitations/{email}`

#### IssueLink

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/api/v4/projects/{id}/issues/{issue_iid}/links/{issue_link_id}`

#### IssuesStatistic

| Field | Description |
| --- | --- |

Operations: Load.

API path: `/api/v4/issues_statistics`

#### Job

| Field | Description |
| --- | --- |

Operations: Create, Load, Patch, Update.

API path: `/api/v4/jobs/{id}/artifacts`

#### MavenPackage

| Field | Description |
| --- | --- |

Operations: Load, Update.

API path: `/api/v4/groups/{id}/-/packages/maven/*path/{file_name}`

#### Member

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/api/v4/groups/{id}/members/{user_id}`

#### MergeRequest

| Field | Description |
| --- | --- |

Operations: Load, Remove, Update.

API path: `/api/v4/projects/{id}/merge_requests/{merge_request_iid}/related_issues`

#### Metadata

| Field | Description |
| --- | --- |
| `enterprise` |  |
| `kas` |  |
| `revision` |  |
| `version` |  |

Operations: Load.

API path: `/api/v4/metadata`

#### Migration

| Field | Description |
| --- | --- |

Operations: Create.

API path: `/api/v4/admin/migrations/{timestamp}/mark`

#### MlModelRegistry

| Field | Description |
| --- | --- |

Operations: Load, Update.

API path: `/api/v4/projects/{id}/packages/ml_models/{model_version_id}/files/(*path/){file_name}`

#### Namespace

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/api/v4/namespaces/{id}/storage/limit_exclusion`

#### Npm

| Field | Description |
| --- | --- |

Operations: Update.

API path: `/api/v4/projects/{id}/packages/npm/{package_name}`

#### NpmPackage

| Field | Description |
| --- | --- |

Operations: Create, Load, Remove, Update.

API path: `/api/v4/groups/{id}/-/packages/npm/-/npm/v1/security/advisories/bulk`

#### Nuget

| Field | Description |
| --- | --- |

Operations: Update.

API path: `/api/v4/projects/{id}/packages/nuget`

#### NugetPackage

| Field | Description |
| --- | --- |
| `catalog_entry` |  |
| `count` |  |
| `id` |  |
| `item` |  |
| `lower` |  |
| `package_content` |  |
| `upper` |  |

Operations: List, Load, Remove, Update.

API path: `/api/v4/groups/{id}/-/packages/nuget/metadata/*package_name/index`

#### PackageFile

| Field | Description |
| --- | --- |

Operations: Load, Remove.

API path: `/api/v4/projects/{id}/packages/{package_id}/package_files/{package_file_id}/download`

#### Page

| Field | Description |
| --- | --- |

Operations: Load, Remove, Update.

API path: `/api/v4/projects/{id}/pages`

#### Participant

| Field | Description |
| --- | --- |
| `key` |  |
| `value` |  |

Operations: List.

API path: `/api/v4/projects/{id}/issues/{issue_iid}/participants`

#### PersonalAccessToken

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/api/v4/personal_access_tokens/{id}`

#### Project

| Field | Description |
| --- | --- |
| `before_sha` |  |
| `committed_at` |  |
| `coverage` |  |
| `created_at` |  |
| `detailed_status` |  |
| `duration` |  |
| `finished_at` |  |
| `id` |  |
| `iid` |  |
| `name` |  |
| `project_id` |  |
| `queued_duration` |  |
| `ref` |  |
| `sha` |  |
| `source` |  |
| `started_at` |  |
| `status` |  |
| `tag` |  |
| `updated_at` |  |
| `user` |  |
| `web_url` |  |
| `yaml_error` |  |

Operations: Create, Load, Remove, Update.

API path: `/api/v4/projects/{id}/hooks/{hook_id}/events/{hook_log_id}/resend`

#### ProjectAvatar

| Field | Description |
| --- | --- |

Operations: Load.

API path: `/api/v4/projects/{id}/avatar`

#### ProjectEntity

| Field | Description |
| --- | --- |

Operations: Create.

API path: `/api/v4/import/bitbucket_server`

#### ProjectExport

| Field | Description |
| --- | --- |

Operations: Create, Load.

API path: `/api/v4/projects/{id}/export`

#### ProjectHook

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/api/v4/projects/{id}/hooks/{hook_id}`

#### ProjectImport

| Field | Description |
| --- | --- |

Operations: Create.

API path: `/api/v4/projects/import-relation/authorize`

#### ProjectImportEntity

| Field | Description |
| --- | --- |
| `forked` |  |
| `full_name` |  |
| `full_path` |  |
| `human_import_status_name` |  |
| `id` |  |
| `import_error` |  |
| `import_source` |  |
| `import_status` |  |
| `import_warning` |  |
| `name` |  |
| `provider_link` |  |
| `refs_url` |  |
| `relation_type` |  |

Operations: Create.

API path: `/api/v4/import/bitbucket`

#### ProjectPackage

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/api/v4/projects/{id}/packages/{package_id}`

#### ProjectSnippet

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/api/v4/projects/{id}/snippets/{snippet_id}`

#### ProjectsJobTokenScope

| Field | Description |
| --- | --- |

Operations: Remove, Update.

API path: `/api/v4/projects/{id}/job_token_scope/groups_allowlist/{target_group_id}`

#### ProtectedTag

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/api/v4/projects/{id}/protected_tags/{name}`

#### Pypi

| Field | Description |
| --- | --- |

Operations: Create.

API path: `/api/v4/projects/{id}/packages/pypi`

#### PypiPackage

| Field | Description |
| --- | --- |

Operations: Create, Load.

API path: `/api/v4/projects/{id}/packages/pypi/authorize`

#### Release

| Field | Description |
| --- | --- |

Operations: Load, Remove.

API path: `/api/v4/projects/{id}/releases/{tag_name}/downloads/*direct_asset_path`

#### ReleaseLink

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/api/v4/projects/{id}/releases/{tag_name}/assets/links/{link_id}`

#### RemoteMirror

| Field | Description |
| --- | --- |

Operations: Create, Load, Remove.

API path: `/api/v4/projects/{id}/remote_mirrors/{mirror_id}/sync`

#### Rpm

| Field | Description |
| --- | --- |

Operations: Create.

API path: `/api/v4/projects/{id}/packages/rpm`

#### RpmPackage

| Field | Description |
| --- | --- |

Operations: Create, Load.

API path: `/api/v4/projects/{id}/packages/rpm/authorize`

#### Rubygem

| Field | Description |
| --- | --- |

Operations: Load.

API path: `/api/v4/projects/{id}/packages/rubygems/{file_name}`

#### RubygemPackage

| Field | Description |
| --- | --- |

Operations: Create, Load.

API path: `/api/v4/projects/{id}/packages/rubygems/api/v1/gems`

#### Runner

| Field | Description |
| --- | --- |

Operations: Create, Remove.

API path: `/api/v4/runners/verify`

#### Search

| Field | Description |
| --- | --- |

Operations: Load.

API path: `/api/v4/search`

#### SecureFile

| Field | Description |
| --- | --- |

Operations: Load, Remove.

API path: `/api/v4/projects/{id}/secure_files/{secure_file_id}/download`

#### Slack

| Field | Description |
| --- | --- |

Operations: Create.

API path: `/api/v4/slack/trigger`

#### Snippet

| Field | Description |
| --- | --- |

Operations: Load, Remove.

API path: `/api/v4/snippets/{id}/files/{ref}/{file_path}/raw`

#### Starrer

| Field | Description |
| --- | --- |
| `avatar_path` |  |
| `avatar_url` |  |
| `custom_attribute` |  |
| `id` |  |
| `locked` |  |
| `name` |  |
| `public_email` |  |
| `state` |  |
| `username` |  |
| `web_url` |  |

Operations: List.

API path: `/api/v4/projects/{id}/starrers`

#### SystemHook

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/api/v4/hooks/{hook_id}`

#### Tag

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/api/v4/projects/{id}/repository/tags/{tag_name}`

#### TerraformRegistry

| Field | Description |
| --- | --- |

Operations: Load, Update.

API path: `/api/v4/projects/{id}/packages/terraform/modules/{module_name}/{module_system}/*module_version`

#### TerraformState

| Field | Description |
| --- | --- |

Operations: Create, Load, Remove.

API path: `/api/v4/projects/{id}/terraform/state/{name}/lock`

#### TestReport

| Field | Description |
| --- | --- |
| `error_count` |  |
| `failed_count` |  |
| `name` |  |
| `skipped_count` |  |
| `success_count` |  |
| `suite_error` |  |
| `test_case` |  |
| `total_count` |  |
| `total_time` |  |

Operations: List.

API path: `/api/v4/projects/{id}/pipelines/{pipeline_id}/test_report`

#### TestReportSummary

| Field | Description |
| --- | --- |
| `test_suite` |  |
| `total` |  |

Operations: Load.

API path: `/api/v4/projects/{id}/pipelines/{pipeline_id}/test_report_summary`

#### Topic

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/api/v4/topics/{id}`

#### UnleashApi

| Field | Description |
| --- | --- |

Operations: Load.

API path: `/api/v4/feature_flags/unleash/{project_id}/features`

#### UsageData

| Field | Description |
| --- | --- |

Operations: Create, Load.

API path: `/api/v4/usage_data/increment_counter`

#### User

| Field | Description |
| --- | --- |
| `avatar_path` |  |
| `avatar_url` |  |
| `custom_attribute` |  |
| `id` |  |
| `locked` |  |
| `name` |  |
| `public_email` |  |
| `state` |  |
| `username` |  |
| `web_url` |  |

Operations: List.

API path: `/api/v4/projects/{id}/users`

#### WebCommit

| Field | Description |
| --- | --- |

Operations: Load.

API path: `/api/v4/web_commits/public_key`

#### Wiki

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/api/v4/groups/{id}/wikis/{slug}`



## Entities


### AccessRequest

Create an instance: `local access_request = client:AccessRequest(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### AlertManagement

Create an instance: `local alert_management = client:AlertManagement(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |

#### Example: Create

```lua
local alert_management, err = client:AlertManagement():create({
  alert_management_alert_id = "example_alert_management_alert_id", -- string
  project_id = "example_project_id", -- string
})
```


### ApiEntitiesAccessRequester

Create an instance: `local api_entities_access_requester = client:ApiEntitiesAccessRequester(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_path` | `string` |  |
| `avatar_url` | `string` |  |
| `custom_attribute` | `table` |  |
| `id` | `number` |  |
| `key` | `string` |  |
| `locked` | `boolean` |  |
| `name` | `string` |  |
| `public_email` | `string` |  |
| `requested_at` | `string` |  |
| `state` | `string` |  |
| `username` | `string` |  |
| `value` | `string` |  |
| `web_url` | `string` |  |

#### Example: List

```lua
local api_entities_access_requesters, err = client:ApiEntitiesAccessRequester():list()
```

#### Example: Create

```lua
local api_entities_access_requester, err = client:ApiEntitiesAccessRequester():create({
})
```


### ApiEntitiesAppearance

Create an instance: `local api_entities_appearance = client:ApiEntitiesAppearance(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` |  |
| `email_header_and_footer_enabled` | `string` |  |
| `favicon` | `string` |  |
| `footer_message` | `string` |  |
| `header_logo` | `string` |  |
| `header_message` | `string` |  |
| `logo` | `string` |  |
| `member_guideline` | `string` |  |
| `message_background_color` | `string` |  |
| `message_font_color` | `string` |  |
| `new_project_guideline` | `string` |  |
| `profile_image_guideline` | `string` |  |
| `pwa_description` | `string` |  |
| `pwa_icon` | `string` |  |
| `pwa_name` | `string` |  |
| `pwa_short_name` | `string` |  |
| `title` | `string` |  |

#### Example: Load

```lua
local api_entities_appearance, err = client:ApiEntitiesAppearance():load()
```


### ApiEntitiesApplication

Create an instance: `local api_entities_application = client:ApiEntitiesApplication(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `application_id` | `string` |  |
| `application_name` | `string` |  |
| `callback_url` | `string` |  |
| `confidential` | `boolean` |  |
| `id` | `string` |  |

#### Example: List

```lua
local api_entities_applications, err = client:ApiEntitiesApplication():list()
```


### ApiEntitiesApplicationStatistic

Create an instance: `local api_entities_application_statistic = client:ApiEntitiesApplicationStatistic(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active_user` | `number` |  |
| `fork` | `number` |  |
| `group` | `number` |  |
| `issue` | `number` |  |
| `merge_request` | `number` |  |
| `milestone` | `number` |  |
| `note` | `number` |  |
| `project` | `number` |  |
| `snippet` | `number` |  |
| `ssh_key` | `number` |  |
| `user` | `number` |  |

#### Example: Load

```lua
local api_entities_application_statistic, err = client:ApiEntitiesApplicationStatistic():load()
```


### ApiEntitiesApplicationWithSecret

Create an instance: `local api_entities_application_with_secret = client:ApiEntitiesApplicationWithSecret(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `application_id` | `string` |  |
| `application_name` | `string` |  |
| `callback_url` | `string` |  |
| `confidential` | `boolean` |  |
| `id` | `string` |  |
| `secret` | `string` |  |

#### Example: Create

```lua
local api_entities_application_with_secret, err = client:ApiEntitiesApplicationWithSecret():create({
})
```


### ApiEntitiesAvatar

Create an instance: `local api_entities_avatar = client:ApiEntitiesAvatar(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_url` | `string` |  |

#### Example: Load

```lua
local api_entities_avatar, err = client:ApiEntitiesAvatar():load()
```


### ApiEntitiesAwardEmoji

Create an instance: `local api_entities_award_emoji = client:ApiEntitiesAwardEmoji(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `awardable_id` | `number` |  |
| `awardable_type` | `string` |  |
| `created_at` | `string` |  |
| `id` | `number` |  |
| `name` | `string` |  |
| `updated_at` | `string` |  |
| `url` | `string` |  |
| `user` | `table` |  |

#### Example: Load

```lua
local api_entities_award_emoji, err = client:ApiEntitiesAwardEmoji():load({ id = "api_entities_award_emoji_id" })
```

#### Example: List

```lua
local api_entities_award_emojis, err = client:ApiEntitiesAwardEmoji():list()
```

#### Example: Create

```lua
local api_entities_award_emoji, err = client:ApiEntitiesAwardEmoji():create({
})
```


### ApiEntitiesBadge

Create an instance: `local api_entities_badge = client:ApiEntitiesBadge(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `image_url` | `string` |  |
| `kind` | `string` |  |
| `link_url` | `string` |  |
| `name` | `string` |  |
| `rendered_image_url` | `string` |  |
| `rendered_link_url` | `string` |  |

#### Example: Load

```lua
local api_entities_badge, err = client:ApiEntitiesBadge():load({ id = "api_entities_badge_id" })
```

#### Example: List

```lua
local api_entities_badges, err = client:ApiEntitiesBadge():list()
```

#### Example: Create

```lua
local api_entities_badge, err = client:ApiEntitiesBadge():create({
})
```


### ApiEntitiesBasicBadgeDetail

Create an instance: `local api_entities_basic_badge_detail = client:ApiEntitiesBasicBadgeDetail(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `image_url` | `string` |  |
| `link_url` | `string` |  |
| `name` | `string` |  |
| `rendered_image_url` | `string` |  |
| `rendered_link_url` | `string` |  |

#### Example: Load

```lua
local api_entities_basic_badge_detail, err = client:ApiEntitiesBasicBadgeDetail():load()
```


### ApiEntitiesBasicGroupDetail

Create an instance: `local api_entities_basic_group_detail = client:ApiEntitiesBasicGroupDetail(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```lua
local api_entities_basic_group_detail, err = client:ApiEntitiesBasicGroupDetail():create({
  project_id = "example_project_id", -- string
})
```


### ApiEntitiesBasicProjectDetail

Create an instance: `local api_entities_basic_project_detail = client:ApiEntitiesBasicProjectDetail(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_url` | `string` |  |
| `created_at` | `string` |  |
| `custom_attribute` | `table` |  |
| `default_branch` | `string` |  |
| `description` | `string` |  |
| `forks_count` | `number` |  |
| `http_url_to_repo` | `string` |  |
| `id` | `number` |  |
| `last_activity_at` | `string` |  |
| `license` | `table` |  |
| `license_url` | `string` |  |
| `name` | `string` |  |
| `name_with_namespace` | `string` |  |
| `namespace` | `table` |  |
| `path` | `string` |  |
| `path_with_namespace` | `string` |  |
| `readme_url` | `string` |  |
| `repository_storage` | `string` |  |
| `ssh_url_to_repo` | `string` |  |
| `star_count` | `number` |  |
| `tag_list` | `table` |  |
| `topic` | `table` |  |
| `visibility` | `string` |  |
| `web_url` | `string` |  |

#### Example: List

```lua
local api_entities_basic_project_details, err = client:ApiEntitiesBasicProjectDetail():list()
```

#### Example: Create

```lua
local api_entities_basic_project_detail, err = client:ApiEntitiesBasicProjectDetail():create({
  project_id = "example_project_id", -- string
})
```


### ApiEntitiesBasicRef

Create an instance: `local api_entities_basic_ref = client:ApiEntitiesBasicRef(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `name` | `string` |  |
| `type` | `string` |  |

#### Example: List

```lua
local api_entities_basic_refs, err = client:ApiEntitiesBasicRef():list()
```


### ApiEntitiesBasicSuccess

Create an instance: `local api_entities_basic_success = client:ApiEntitiesBasicSuccess(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```lua
local api_entities_basic_success, err = client:ApiEntitiesBasicSuccess():create({
})
```


### ApiEntitiesBatchedBackgroundMigration

Create an instance: `local api_entities_batched_background_migration = client:ApiEntitiesBatchedBackgroundMigration(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `column_name` | `string` |  |
| `created_at` | `string` |  |
| `id` | `string` |  |
| `job_class_name` | `string` |  |
| `progress` | `number` |  |
| `status` | `string` |  |
| `table_name` | `string` |  |

#### Example: Load

```lua
local api_entities_batched_background_migration, err = client:ApiEntitiesBatchedBackgroundMigration():load({ id = "api_entities_batched_background_migration_id" })
```

#### Example: List

```lua
local api_entities_batched_background_migrations, err = client:ApiEntitiesBatchedBackgroundMigration():list()
```


### ApiEntitiesBranch

Create an instance: `local api_entities_branch = client:ApiEntitiesBranch(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `can_push` | `boolean` |  |
| `commit` | `table` |  |
| `default` | `boolean` |  |
| `developers_can_merge` | `boolean` |  |
| `developers_can_push` | `boolean` |  |
| `merged` | `boolean` |  |
| `name` | `string` |  |
| `protected` | `boolean` |  |
| `web_url` | `string` |  |

#### Example: Load

```lua
local api_entities_branch, err = client:ApiEntitiesBranch():load({ id = "api_entities_branch_id", project_id = "project_id" })
```

#### Example: List

```lua
local api_entities_branchs, err = client:ApiEntitiesBranch():list()
```

#### Example: Create

```lua
local api_entities_branch, err = client:ApiEntitiesBranch():create({
  project_id = "example_project_id", -- string
})
```


### ApiEntitiesBulkImport

Create an instance: `local api_entities_bulk_import = client:ApiEntitiesBulkImport(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `bulk_import_id` | `number` |  |
| `created_at` | `string` |  |
| `destination_full_path` | `string` |  |
| `destination_name` | `string` |  |
| `destination_namespace` | `string` |  |
| `destination_slug` | `string` |  |
| `entity_type` | `string` |  |
| `failure` | `table` |  |
| `has_failure` | `boolean` |  |
| `id` | `number` |  |
| `migrate_membership` | `boolean` |  |
| `migrate_project` | `boolean` |  |
| `namespace_id` | `number` |  |
| `parent_id` | `number` |  |
| `project_id` | `number` |  |
| `source_full_path` | `string` |  |
| `source_type` | `string` |  |
| `source_url` | `string` |  |
| `stat` | `table` |  |
| `status` | `string` |  |
| `updated_at` | `string` |  |

#### Example: Load

```lua
local api_entities_bulk_import, err = client:ApiEntitiesBulkImport():load({ id = "api_entities_bulk_import_id" })
```

#### Example: List

```lua
local api_entities_bulk_imports, err = client:ApiEntitiesBulkImport():list()
```

#### Example: Create

```lua
local api_entities_bulk_import, err = client:ApiEntitiesBulkImport():create({
})
```


### ApiEntitiesBulkImportsEntityFailure

Create an instance: `local api_entities_bulk_imports_entity_failure = client:ApiEntitiesBulkImportsEntityFailure(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `correlation_id_value` | `string` |  |
| `exception_class` | `string` |  |
| `exception_message` | `string` |  |
| `relation` | `string` |  |
| `source_title` | `string` |  |
| `source_url` | `string` |  |

#### Example: Load

```lua
local api_entities_bulk_imports_entity_failure, err = client:ApiEntitiesBulkImportsEntityFailure():load({ bulk_import_id = "bulk_import_id", entity_id = "entity_id" })
```


### ApiEntitiesBulkImportsExportStatus

Create an instance: `local api_entities_bulk_imports_export_status = client:ApiEntitiesBulkImportsExportStatus(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `batch` | `table` |  |
| `batched` | `boolean` |  |
| `batches_count` | `number` |  |
| `error` | `string` |  |
| `relation` | `string` |  |
| `status` | `string` |  |
| `total_objects_count` | `number` |  |
| `updated_at` | `string` |  |

#### Example: List

```lua
local api_entities_bulk_imports_export_statuss, err = client:ApiEntitiesBulkImportsExportStatus():list()
```


### ApiEntitiesChangelog

Create an instance: `local api_entities_changelog = client:ApiEntitiesChangelog(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `note` | `string` |  |

#### Example: Load

```lua
local api_entities_changelog, err = client:ApiEntitiesChangelog():load({ project_id = "project_id" })
```


### ApiEntitiesCiBridge

Create an instance: `local api_entities_ci_bridge = client:ApiEntitiesCiBridge(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_failure` | `boolean` |  |
| `commit` | `table` |  |
| `coverage` | `number` |  |
| `created_at` | `string` |  |
| `downstream_pipeline` | `table` |  |
| `duration` | `number` |  |
| `erased_at` | `string` |  |
| `failure_reason` | `string` |  |
| `finished_at` | `string` |  |
| `id` | `number` |  |
| `name` | `string` |  |
| `pipeline` | `table` |  |
| `project` | `table` |  |
| `queued_duration` | `number` |  |
| `ref` | `string` |  |
| `stage` | `string` |  |
| `started_at` | `string` |  |
| `status` | `string` |  |
| `tag` | `boolean` |  |
| `user` | `table` |  |
| `web_url` | `string` |  |

#### Example: List

```lua
local api_entities_ci_bridges, err = client:ApiEntitiesCiBridge():list()
```


### ApiEntitiesCiCatalogResourcesVersion

Create an instance: `local api_entities_ci_catalog_resources_version = client:ApiEntitiesCiCatalogResourcesVersion(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```lua
local api_entities_ci_catalog_resources_version, err = client:ApiEntitiesCiCatalogResourcesVersion():create({
  project_id = "example_project_id", -- string
})
```


### ApiEntitiesCiJob

Create an instance: `local api_entities_ci_job = client:ApiEntitiesCiJob(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_failure` | `boolean` |  |
| `archived` | `boolean` |  |
| `artifact` | `table` |  |
| `artifacts_expire_at` | `string` |  |
| `artifacts_file` | `table` |  |
| `commit` | `table` |  |
| `coverage` | `number` |  |
| `created_at` | `string` |  |
| `duration` | `number` |  |
| `erased_at` | `string` |  |
| `failure_reason` | `string` |  |
| `file_format` | `string` |  |
| `file_type` | `string` |  |
| `filename` | `string` |  |
| `finished_at` | `string` |  |
| `id` | `number` |  |
| `name` | `string` |  |
| `pipeline` | `table` |  |
| `project` | `table` |  |
| `queued_duration` | `number` |  |
| `ref` | `string` |  |
| `runner` | `table` |  |
| `runner_manager` | `table` |  |
| `size` | `number` |  |
| `stage` | `string` |  |
| `started_at` | `string` |  |
| `status` | `string` |  |
| `tag` | `boolean` |  |
| `tag_list` | `table` |  |
| `user` | `table` |  |
| `web_url` | `string` |  |

#### Example: Load

```lua
local api_entities_ci_job, err = client:ApiEntitiesCiJob():load({ id = "api_entities_ci_job_id", project_id = "project_id" })
```

#### Example: List

```lua
local api_entities_ci_jobs, err = client:ApiEntitiesCiJob():list()
```

#### Example: Create

```lua
local api_entities_ci_job, err = client:ApiEntitiesCiJob():create({
  job_id = "example_job_id", -- string
  project_id = "example_project_id", -- string
})
```


### ApiEntitiesCiJobBasic

Create an instance: `local api_entities_ci_job_basic = client:ApiEntitiesCiJobBasic(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_failure` | `boolean` |  |
| `commit` | `table` |  |
| `coverage` | `number` |  |
| `created_at` | `string` |  |
| `duration` | `number` |  |
| `erased_at` | `string` |  |
| `failure_reason` | `string` |  |
| `finished_at` | `string` |  |
| `id` | `number` |  |
| `name` | `string` |  |
| `pipeline` | `table` |  |
| `project` | `table` |  |
| `queued_duration` | `number` |  |
| `ref` | `string` |  |
| `stage` | `string` |  |
| `started_at` | `string` |  |
| `status` | `string` |  |
| `tag` | `boolean` |  |
| `user` | `table` |  |
| `web_url` | `string` |  |

#### Example: List

```lua
local api_entities_ci_job_basics, err = client:ApiEntitiesCiJobBasic():list()
```

#### Example: Create

```lua
local api_entities_ci_job_basic, err = client:ApiEntitiesCiJobBasic():create({
  job_id = "example_job_id", -- string
  project_id = "example_project_id", -- string
})
```


### ApiEntitiesCiJobBasicWithProject

Create an instance: `local api_entities_ci_job_basic_with_project = client:ApiEntitiesCiJobBasicWithProject(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_failure` | `boolean` |  |
| `commit` | `table` |  |
| `coverage` | `number` |  |
| `created_at` | `string` |  |
| `duration` | `number` |  |
| `erased_at` | `string` |  |
| `failure_reason` | `string` |  |
| `finished_at` | `string` |  |
| `id` | `number` |  |
| `name` | `string` |  |
| `pipeline` | `table` |  |
| `project` | `table` |  |
| `queued_duration` | `number` |  |
| `ref` | `string` |  |
| `stage` | `string` |  |
| `started_at` | `string` |  |
| `status` | `string` |  |
| `tag` | `boolean` |  |
| `user` | `table` |  |
| `web_url` | `string` |  |

#### Example: Load

```lua
local api_entities_ci_job_basic_with_project, err = client:ApiEntitiesCiJobBasicWithProject():load({ runner_id = "runner_id" })
```


### ApiEntitiesCiLintResult

Create an instance: `local api_entities_ci_lint_result = client:ApiEntitiesCiLintResult(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `blob` | `string` |  |
| `context_project` | `string` |  |
| `context_sha` | `string` |  |
| `error` | `table` |  |
| `extra` | `table` |  |
| `include` | `table` |  |
| `job` | `table` |  |
| `location` | `string` |  |
| `merged_yaml` | `string` |  |
| `raw` | `string` |  |
| `type` | `string` |  |
| `valid` | `boolean` |  |
| `warning` | `table` |  |

#### Example: List

```lua
local api_entities_ci_lint_results, err = client:ApiEntitiesCiLintResult():list()
```

#### Example: Create

```lua
local api_entities_ci_lint_result, err = client:ApiEntitiesCiLintResult():create({
  project_id = "example_project_id", -- string
})
```


### ApiEntitiesCiPipeline

Create an instance: `local api_entities_ci_pipeline = client:ApiEntitiesCiPipeline(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```lua
local api_entities_ci_pipeline, err = client:ApiEntitiesCiPipeline():create({
  project_id = "example_project_id", -- string
})
```


### ApiEntitiesCiPipelineBasic

Create an instance: `local api_entities_ci_pipeline_basic = client:ApiEntitiesCiPipelineBasic(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `id` | `number` |  |
| `iid` | `number` |  |
| `project_id` | `number` |  |
| `ref` | `string` |  |
| `sha` | `string` |  |
| `source` | `string` |  |
| `status` | `string` |  |
| `updated_at` | `string` |  |
| `web_url` | `string` |  |

#### Example: Load

```lua
local api_entities_ci_pipeline_basic, err = client:ApiEntitiesCiPipelineBasic():load({ merge_request_id = "merge_request_id", project_id = "project_id" })
```

#### Example: List

```lua
local api_entities_ci_pipeline_basics, err = client:ApiEntitiesCiPipelineBasic():list()
```


### ApiEntitiesCiPipelineSchedule

Create an instance: `local api_entities_ci_pipeline_schedule = client:ApiEntitiesCiPipelineSchedule(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `boolean` |  |
| `created_at` | `string` |  |
| `cron` | `string` |  |
| `cron_timezone` | `string` |  |
| `description` | `string` |  |
| `id` | `number` |  |
| `input` | `table` |  |
| `next_run_at` | `string` |  |
| `owner` | `table` |  |
| `ref` | `string` |  |
| `updated_at` | `string` |  |

#### Example: List

```lua
local api_entities_ci_pipeline_schedules, err = client:ApiEntitiesCiPipelineSchedule():list()
```


### ApiEntitiesCiPipelineScheduleDetail

Create an instance: `local api_entities_ci_pipeline_schedule_detail = client:ApiEntitiesCiPipelineScheduleDetail(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `boolean` |  |
| `created_at` | `string` |  |
| `cron` | `string` |  |
| `cron_timezone` | `string` |  |
| `description` | `string` |  |
| `id` | `number` |  |
| `input` | `table` |  |
| `last_pipeline` | `table` |  |
| `next_run_at` | `string` |  |
| `owner` | `table` |  |
| `ref` | `string` |  |
| `updated_at` | `string` |  |
| `variable` | `table` |  |

#### Example: Load

```lua
local api_entities_ci_pipeline_schedule_detail, err = client:ApiEntitiesCiPipelineScheduleDetail():load({ pipeline_schedule_id = "pipeline_schedule_id", project_id = "project_id" })
```

#### Example: Create

```lua
local api_entities_ci_pipeline_schedule_detail, err = client:ApiEntitiesCiPipelineScheduleDetail():create({
  project_id = "example_project_id", -- string
})
```


### ApiEntitiesCiResetTokenResult

Create an instance: `local api_entities_ci_reset_token_result = client:ApiEntitiesCiResetTokenResult(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```lua
local api_entities_ci_reset_token_result, err = client:ApiEntitiesCiResetTokenResult():create({
})
```


### ApiEntitiesCiResourceGroup

Create an instance: `local api_entities_ci_resource_group = client:ApiEntitiesCiResourceGroup(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `id` | `number` |  |
| `key` | `string` |  |
| `process_mode` | `string` |  |
| `updated_at` | `string` |  |

#### Example: Load

```lua
local api_entities_ci_resource_group, err = client:ApiEntitiesCiResourceGroup():load({ id = "api_entities_ci_resource_group_id", project_id = "project_id" })
```

#### Example: List

```lua
local api_entities_ci_resource_groups, err = client:ApiEntitiesCiResourceGroup():list()
```


### ApiEntitiesCiRunner

Create an instance: `local api_entities_ci_runner = client:ApiEntitiesCiRunner(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `boolean` |  |
| `created_at` | `string` |  |
| `created_by` | `table` |  |
| `description` | `string` |  |
| `id` | `number` |  |
| `ip_address` | `string` |  |
| `is_shared` | `boolean` |  |
| `job_execution_status` | `string` |  |
| `name` | `string` |  |
| `online` | `boolean` |  |
| `paused` | `boolean` |  |
| `runner_type` | `string` |  |
| `status` | `string` |  |

#### Example: Load

```lua
local api_entities_ci_runner, err = client:ApiEntitiesCiRunner():load()
```

#### Example: Create

```lua
local api_entities_ci_runner, err = client:ApiEntitiesCiRunner():create({
  project_id = "example_project_id", -- string
})
```


### ApiEntitiesCiRunnerDetail

Create an instance: `local api_entities_ci_runner_detail = client:ApiEntitiesCiRunnerDetail(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `access_level` | `string` |  |
| `active` | `boolean` |  |
| `architecture` | `string` |  |
| `contacted_at` | `string` |  |
| `created_at` | `string` |  |
| `created_by` | `table` |  |
| `description` | `string` |  |
| `group` | `table` |  |
| `id` | `number` |  |
| `ip_address` | `string` |  |
| `is_shared` | `boolean` |  |
| `job_execution_status` | `string` |  |
| `locked` | `boolean` |  |
| `maintenance_note` | `string` |  |
| `maximum_timeout` | `string` |  |
| `name` | `string` |  |
| `online` | `boolean` |  |
| `paused` | `boolean` |  |
| `platform` | `string` |  |
| `project` | `table` |  |
| `revision` | `string` |  |
| `run_untagged` | `string` |  |
| `runner_type` | `string` |  |
| `status` | `string` |  |
| `tag_list` | `string` |  |
| `version` | `string` |  |

#### Example: Load

```lua
local api_entities_ci_runner_detail, err = client:ApiEntitiesCiRunnerDetail():load({ id = "api_entities_ci_runner_detail_id" })
```


### ApiEntitiesCiRunnerManager

Create an instance: `local api_entities_ci_runner_manager = client:ApiEntitiesCiRunnerManager(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `architecture` | `string` |  |
| `contacted_at` | `string` |  |
| `created_at` | `string` |  |
| `id` | `number` |  |
| `ip_address` | `string` |  |
| `job_execution_status` | `string` |  |
| `platform` | `string` |  |
| `revision` | `string` |  |
| `status` | `string` |  |
| `system_id` | `string` |  |
| `version` | `string` |  |

#### Example: Load

```lua
local api_entities_ci_runner_manager, err = client:ApiEntitiesCiRunnerManager():load({ runner_id = "runner_id" })
```


### ApiEntitiesCiRunnerRegistrationDetail

Create an instance: `local api_entities_ci_runner_registration_detail = client:ApiEntitiesCiRunnerRegistrationDetail(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```lua
local api_entities_ci_runner_registration_detail, err = client:ApiEntitiesCiRunnerRegistrationDetail():create({
})
```


### ApiEntitiesCiSecureFile

Create an instance: `local api_entities_ci_secure_file = client:ApiEntitiesCiSecureFile(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `checksum` | `string` |  |
| `checksum_algorithm` | `string` |  |
| `created_at` | `string` |  |
| `expires_at` | `string` |  |
| `file_extension` | `string` |  |
| `id` | `number` |  |
| `metadata` | `table` |  |
| `name` | `string` |  |

#### Example: Load

```lua
local api_entities_ci_secure_file, err = client:ApiEntitiesCiSecureFile():load({ id = "api_entities_ci_secure_file_id", project_id = "project_id" })
```

#### Example: Create

```lua
local api_entities_ci_secure_file, err = client:ApiEntitiesCiSecureFile():create({
  project_id = "example_project_id", -- string
})
```


### ApiEntitiesCiVariable

Create an instance: `local api_entities_ci_variable = client:ApiEntitiesCiVariable(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` |  |
| `environment_scope` | `string` |  |
| `hidden` | `boolean` |  |
| `key` | `string` |  |
| `masked` | `boolean` |  |
| `protected` | `boolean` |  |
| `raw` | `boolean` |  |
| `value` | `string` |  |
| `variable_type` | `string` |  |

#### Example: Load

```lua
local api_entities_ci_variable, err = client:ApiEntitiesCiVariable():load({ id = "api_entities_ci_variable_id" })
```

#### Example: List

```lua
local api_entities_ci_variables, err = client:ApiEntitiesCiVariable():list()
```

#### Example: Create

```lua
local api_entities_ci_variable, err = client:ApiEntitiesCiVariable():create({
})
```


### ApiEntitiesCluster

Create an instance: `local api_entities_cluster = client:ApiEntitiesCluster(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cluster_type` | `string` |  |
| `created_at` | `string` |  |
| `domain` | `string` |  |
| `enabled` | `boolean` |  |
| `environment_scope` | `string` |  |
| `id` | `string` |  |
| `managed` | `string` |  |
| `management_project` | `table` |  |
| `name` | `string` |  |
| `namespace_per_environment` | `string` |  |
| `platform_kubernete` | `table` |  |
| `platform_type` | `string` |  |
| `provider_gcp` | `table` |  |
| `provider_type` | `string` |  |
| `user` | `table` |  |

#### Example: Load

```lua
local api_entities_cluster, err = client:ApiEntitiesCluster():load({ id = "api_entities_cluster_id" })
```

#### Example: List

```lua
local api_entities_clusters, err = client:ApiEntitiesCluster():list()
```

#### Example: Create

```lua
local api_entities_cluster, err = client:ApiEntitiesCluster():create({
})
```


### ApiEntitiesClusterGroup

Create an instance: `local api_entities_cluster_group = client:ApiEntitiesClusterGroup(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cluster_type` | `string` |  |
| `created_at` | `string` |  |
| `domain` | `string` |  |
| `enabled` | `boolean` |  |
| `environment_scope` | `string` |  |
| `group` | `table` |  |
| `id` | `string` |  |
| `managed` | `string` |  |
| `management_project` | `table` |  |
| `name` | `string` |  |
| `namespace_per_environment` | `string` |  |
| `platform_kubernete` | `table` |  |
| `platform_type` | `string` |  |
| `provider_gcp` | `table` |  |
| `provider_type` | `string` |  |
| `user` | `table` |  |

#### Example: Load

```lua
local api_entities_cluster_group, err = client:ApiEntitiesClusterGroup():load({ cluster_id = "cluster_id", group_id = "group_id" })
```

#### Example: Create

```lua
local api_entities_cluster_group, err = client:ApiEntitiesClusterGroup():create({
  group_id = "example_group_id", -- string
})
```


### ApiEntitiesClusterProject

Create an instance: `local api_entities_cluster_project = client:ApiEntitiesClusterProject(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cluster_type` | `string` |  |
| `created_at` | `string` |  |
| `domain` | `string` |  |
| `enabled` | `boolean` |  |
| `environment_scope` | `string` |  |
| `id` | `string` |  |
| `managed` | `string` |  |
| `management_project` | `table` |  |
| `name` | `string` |  |
| `namespace_per_environment` | `string` |  |
| `platform_kubernete` | `table` |  |
| `platform_type` | `string` |  |
| `project` | `table` |  |
| `provider_gcp` | `table` |  |
| `provider_type` | `string` |  |
| `user` | `table` |  |

#### Example: Load

```lua
local api_entities_cluster_project, err = client:ApiEntitiesClusterProject():load({ cluster_id = "cluster_id", project_id = "project_id" })
```

#### Example: Create

```lua
local api_entities_cluster_project, err = client:ApiEntitiesClusterProject():create({
  project_id = "example_project_id", -- string
})
```


### ApiEntitiesClustersAgent

Create an instance: `local api_entities_clusters_agent = client:ApiEntitiesClustersAgent(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `config_project` | `table` |  |
| `created_at` | `string` |  |
| `created_by_user_id` | `string` |  |
| `id` | `string` |  |
| `is_receptive` | `boolean` |  |
| `name` | `string` |  |

#### Example: Load

```lua
local api_entities_clusters_agent, err = client:ApiEntitiesClustersAgent():load({ project_id = "project_id" })
```

#### Example: Create

```lua
local api_entities_clusters_agent, err = client:ApiEntitiesClustersAgent():create({
  project_id = "example_project_id", -- string
})
```


### ApiEntitiesClustersAgentToken

Create an instance: `local api_entities_clusters_agent_token = client:ApiEntitiesClustersAgentToken(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agent_id` | `string` |  |
| `created_at` | `string` |  |
| `created_by_user_id` | `string` |  |
| `description` | `string` |  |
| `id` | `string` |  |
| `last_used_at` | `string` |  |
| `name` | `string` |  |
| `status` | `string` |  |

#### Example: Load

```lua
local api_entities_clusters_agent_token, err = client:ApiEntitiesClustersAgentToken():load({ id = "api_entities_clusters_agent_token_id", cluster_agent_id = "cluster_agent_id", project_id = "project_id" })
```


### ApiEntitiesClustersAgentTokenBasic

Create an instance: `local api_entities_clusters_agent_token_basic = client:ApiEntitiesClustersAgentTokenBasic(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agent_id` | `string` |  |
| `created_at` | `string` |  |
| `created_by_user_id` | `string` |  |
| `description` | `string` |  |
| `id` | `string` |  |
| `name` | `string` |  |
| `status` | `string` |  |

#### Example: Load

```lua
local api_entities_clusters_agent_token_basic, err = client:ApiEntitiesClustersAgentTokenBasic():load({ cluster_agent_id = "cluster_agent_id", project_id = "project_id" })
```


### ApiEntitiesClustersAgentTokenWithToken

Create an instance: `local api_entities_clusters_agent_token_with_token = client:ApiEntitiesClustersAgentTokenWithToken(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```lua
local api_entities_clusters_agent_token_with_token, err = client:ApiEntitiesClustersAgentTokenWithToken():create({
  cluster_agent_id = "example_cluster_agent_id", -- string
  project_id = "example_project_id", -- string
})
```


### ApiEntitiesCommit

Create an instance: `local api_entities_commit = client:ApiEntitiesCommit(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author_email` | `string` |  |
| `author_name` | `string` |  |
| `authored_date` | `string` |  |
| `committed_date` | `string` |  |
| `committer_email` | `string` |  |
| `committer_name` | `string` |  |
| `created_at` | `string` |  |
| `extended_trailer` | `table` |  |
| `id` | `string` |  |
| `message` | `string` |  |
| `parent_id` | `table` |  |
| `short_id` | `string` |  |
| `title` | `string` |  |
| `trailer` | `table` |  |
| `web_url` | `string` |  |

#### Example: List

```lua
local api_entities_commits, err = client:ApiEntitiesCommit():list()
```

#### Example: Create

```lua
local api_entities_commit, err = client:ApiEntitiesCommit():create({
  project_id = "example_project_id", -- string
})
```


### ApiEntitiesCommitDetail

Create an instance: `local api_entities_commit_detail = client:ApiEntitiesCommitDetail(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author_email` | `string` |  |
| `author_name` | `string` |  |
| `authored_date` | `string` |  |
| `committed_date` | `string` |  |
| `committer_email` | `string` |  |
| `committer_name` | `string` |  |
| `created_at` | `string` |  |
| `extended_trailer` | `table` |  |
| `id` | `string` |  |
| `last_pipeline` | `table` |  |
| `message` | `string` |  |
| `parent_id` | `table` |  |
| `project_id` | `number` |  |
| `short_id` | `string` |  |
| `stat` | `table` |  |
| `status` | `string` |  |
| `title` | `string` |  |
| `trailer` | `table` |  |
| `web_url` | `string` |  |

#### Example: Load

```lua
local api_entities_commit_detail, err = client:ApiEntitiesCommitDetail():load({ project_id = "project_id", sha = "sha" })
```

#### Example: Create

```lua
local api_entities_commit_detail, err = client:ApiEntitiesCommitDetail():create({
  project_id = "example_project_id", -- string
})
```


### ApiEntitiesCommitNote

Create an instance: `local api_entities_commit_note = client:ApiEntitiesCommitNote(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author` | `table` |  |
| `created_at` | `string` |  |
| `line` | `number` |  |
| `line_type` | `string` |  |
| `note` | `string` |  |
| `path` | `string` |  |

#### Example: List

```lua
local api_entities_commit_notes, err = client:ApiEntitiesCommitNote():list()
```

#### Example: Create

```lua
local api_entities_commit_note, err = client:ApiEntitiesCommitNote():create({
  project_id = "example_project_id", -- string
  sha = "example_sha", -- any
})
```


### ApiEntitiesCommitSequence

Create an instance: `local api_entities_commit_sequence = client:ApiEntitiesCommitSequence(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `count` | `number` |  |

#### Example: Load

```lua
local api_entities_commit_sequence, err = client:ApiEntitiesCommitSequence():load({ project_id = "project_id", sha = "sha" })
```


### ApiEntitiesCommitSignature

Create an instance: `local api_entities_commit_signature = client:ApiEntitiesCommitSignature(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `commit_source` | `string` |  |
| `signature` | `string` |  |
| `signature_type` | `string` |  |

#### Example: Load

```lua
local api_entities_commit_signature, err = client:ApiEntitiesCommitSignature():load({ project_id = "project_id", sha = "sha" })
```


### ApiEntitiesCommitStatus

Create an instance: `local api_entities_commit_status = client:ApiEntitiesCommitStatus(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_failure` | `boolean` |  |
| `author` | `table` |  |
| `coverage` | `number` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `finished_at` | `string` |  |
| `id` | `number` |  |
| `name` | `string` |  |
| `pipeline_id` | `number` |  |
| `ref` | `string` |  |
| `sha` | `string` |  |
| `started_at` | `string` |  |
| `status` | `string` |  |
| `target_url` | `string` |  |

#### Example: List

```lua
local api_entities_commit_statuss, err = client:ApiEntitiesCommitStatus():list()
```

#### Example: Create

```lua
local api_entities_commit_status, err = client:ApiEntitiesCommitStatus():create({
  id = "example_id", -- string
  project_id = "example_project_id", -- string
})
```


### ApiEntitiesCompare

Create an instance: `local api_entities_compare = client:ApiEntitiesCompare(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `commit` | `table` |  |
| `compare_same_ref` | `boolean` |  |
| `compare_timeout` | `boolean` |  |
| `diff` | `table` |  |
| `web_url` | `string` |  |

#### Example: List

```lua
local api_entities_compares, err = client:ApiEntitiesCompare():list()
```


### ApiEntitiesContainerRegistryRepository

Create an instance: `local api_entities_container_registry_repository = client:ApiEntitiesContainerRegistryRepository(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cleanup_policy_started_at` | `string` |  |
| `created_at` | `string` |  |
| `delete_api_path` | `string` |  |
| `id` | `number` |  |
| `location` | `string` |  |
| `name` | `string` |  |
| `path` | `string` |  |
| `project_id` | `number` |  |
| `size` | `number` |  |
| `status` | `string` |  |
| `tag` | `table` |  |
| `tags_count` | `number` |  |

#### Example: Load

```lua
local api_entities_container_registry_repository, err = client:ApiEntitiesContainerRegistryRepository():load({ id = "api_entities_container_registry_repository_id" })
```

#### Example: List

```lua
local api_entities_container_registry_repositorys, err = client:ApiEntitiesContainerRegistryRepository():list()
```


### ApiEntitiesContainerRegistryTag

Create an instance: `local api_entities_container_registry_tag = client:ApiEntitiesContainerRegistryTag(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `location` | `string` |  |
| `name` | `string` |  |
| `path` | `string` |  |

#### Example: List

```lua
local api_entities_container_registry_tags, err = client:ApiEntitiesContainerRegistryTag():list()
```


### ApiEntitiesContainerRegistryTagDetail

Create an instance: `local api_entities_container_registry_tag_detail = client:ApiEntitiesContainerRegistryTagDetail(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `digest` | `string` |  |
| `location` | `string` |  |
| `name` | `string` |  |
| `path` | `string` |  |
| `revision` | `string` |  |
| `short_revision` | `string` |  |
| `total_size` | `number` |  |

#### Example: Load

```lua
local api_entities_container_registry_tag_detail, err = client:ApiEntitiesContainerRegistryTagDetail():load({ project_id = "project_id", repository_id = "repository_id", tag_name = "tag_name" })
```


### ApiEntitiesContributor

Create an instance: `local api_entities_contributor = client:ApiEntitiesContributor(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `addition` | `number` |  |
| `commit` | `number` |  |
| `deletion` | `number` |  |
| `email` | `string` |  |
| `name` | `string` |  |

#### Example: Load

```lua
local api_entities_contributor, err = client:ApiEntitiesContributor():load({ project_id = "project_id" })
```


### ApiEntitiesDeployKey

Create an instance: `local api_entities_deploy_key = client:ApiEntitiesDeployKey(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `expires_at` | `string` |  |
| `fingerprint` | `string` |  |
| `fingerprint_sha256` | `string` |  |
| `id` | `number` |  |
| `key` | `string` |  |
| `last_used_at` | `string` |  |
| `projects_with_readonly_access` | `table` |  |
| `projects_with_write_access` | `table` |  |
| `title` | `string` |  |
| `usage_type` | `string` |  |

#### Example: List

```lua
local api_entities_deploy_keys, err = client:ApiEntitiesDeployKey():list()
```

#### Example: Create

```lua
local api_entities_deploy_key, err = client:ApiEntitiesDeployKey():create({
})
```


### ApiEntitiesDeployKeysProject

Create an instance: `local api_entities_deploy_keys_project = client:ApiEntitiesDeployKeysProject(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `can_push` | `boolean` |  |
| `created_at` | `string` |  |
| `expires_at` | `string` |  |
| `fingerprint` | `string` |  |
| `fingerprint_sha256` | `string` |  |
| `id` | `number` |  |
| `key` | `string` |  |
| `last_used_at` | `string` |  |
| `projects_with_readonly_access` | `table` |  |
| `projects_with_write_access` | `table` |  |
| `title` | `string` |  |
| `usage_type` | `string` |  |

#### Example: Load

```lua
local api_entities_deploy_keys_project, err = client:ApiEntitiesDeployKeysProject():load({ key_id = "key_id", project_id = "project_id" })
```

#### Example: List

```lua
local api_entities_deploy_keys_projects, err = client:ApiEntitiesDeployKeysProject():list()
```

#### Example: Create

```lua
local api_entities_deploy_keys_project, err = client:ApiEntitiesDeployKeysProject():create({
  project_id = "example_project_id", -- string
})
```


### ApiEntitiesDeployToken

Create an instance: `local api_entities_deploy_token = client:ApiEntitiesDeployToken(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `expired` | `boolean` |  |
| `expires_at` | `string` |  |
| `id` | `number` |  |
| `name` | `string` |  |
| `revoked` | `boolean` |  |
| `scope` | `table` |  |
| `username` | `string` |  |

#### Example: Load

```lua
local api_entities_deploy_token, err = client:ApiEntitiesDeployToken():load({ id = "api_entities_deploy_token_id" })
```

#### Example: List

```lua
local api_entities_deploy_tokens, err = client:ApiEntitiesDeployToken():list()
```


### ApiEntitiesDeployTokenWithToken

Create an instance: `local api_entities_deploy_token_with_token = client:ApiEntitiesDeployTokenWithToken(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```lua
local api_entities_deploy_token_with_token, err = client:ApiEntitiesDeployTokenWithToken():create({
})
```


### ApiEntitiesDeployment

Create an instance: `local api_entities_deployment = client:ApiEntitiesDeployment(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `deployable` | `table` |  |
| `environment` | `table` |  |
| `id` | `number` |  |
| `iid` | `number` |  |
| `ref` | `string` |  |
| `sha` | `string` |  |
| `status` | `string` |  |
| `updated_at` | `string` |  |
| `user` | `table` |  |

#### Example: List

```lua
local api_entities_deployments, err = client:ApiEntitiesDeployment():list()
```


### ApiEntitiesDeploymentExtended

Create an instance: `local api_entities_deployment_extended = client:ApiEntitiesDeploymentExtended(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `approval` | `table` |  |
| `approval_summary` | `table` |  |
| `created_at` | `string` |  |
| `deployable` | `table` |  |
| `environment` | `table` |  |
| `id` | `number` |  |
| `iid` | `number` |  |
| `pending_approval_count` | `number` |  |
| `ref` | `string` |  |
| `sha` | `string` |  |
| `status` | `string` |  |
| `updated_at` | `string` |  |
| `user` | `table` |  |

#### Example: Load

```lua
local api_entities_deployment_extended, err = client:ApiEntitiesDeploymentExtended():load({ deployment_id = "deployment_id", project_id = "project_id" })
```

#### Example: Create

```lua
local api_entities_deployment_extended, err = client:ApiEntitiesDeploymentExtended():create({
  project_id = "example_project_id", -- string
})
```


### ApiEntitiesDeploymentsApproval

Create an instance: `local api_entities_deployments_approval = client:ApiEntitiesDeploymentsApproval(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```lua
local api_entities_deployments_approval, err = client:ApiEntitiesDeploymentsApproval():create({
  deployment_id = "example_deployment_id", -- string
  project_id = "example_project_id", -- string
})
```


### ApiEntitiesDictionaryTable

Create an instance: `local api_entities_dictionary_table = client:ApiEntitiesDictionaryTable(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `feature_category` | `table` |  |
| `table_name` | `string` |  |

#### Example: Load

```lua
local api_entities_dictionary_table, err = client:ApiEntitiesDictionaryTable():load({ id = "api_entities_dictionary_table_id", databas_id = "databas_id" })
```


### ApiEntitiesDiff

Create an instance: `local api_entities_diff = client:ApiEntitiesDiff(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `a_mode` | `string` |  |
| `b_mode` | `string` |  |
| `collapsed` | `boolean` |  |
| `deleted_file` | `boolean` |  |
| `diff` | `string` |  |
| `generated_file` | `boolean` |  |
| `new_file` | `boolean` |  |
| `new_path` | `string` |  |
| `old_path` | `string` |  |
| `renamed_file` | `boolean` |  |
| `too_large` | `boolean` |  |

#### Example: Load

```lua
local api_entities_diff, err = client:ApiEntitiesDiff():load({ merge_request_id = "merge_request_id", project_id = "project_id" })
```

#### Example: List

```lua
local api_entities_diffs, err = client:ApiEntitiesDiff():list()
```


### ApiEntitiesDiscoveredCluster

Create an instance: `local api_entities_discovered_cluster = client:ApiEntitiesDiscoveredCluster(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `group` | `string` |  |
| `project` | `string` |  |

#### Example: Load

```lua
local api_entities_discovered_cluster, err = client:ApiEntitiesDiscoveredCluster():load()
```


### ApiEntitiesDraftNote

Create an instance: `local api_entities_draft_note = client:ApiEntitiesDraftNote(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author_id` | `number` |  |
| `commit_id` | `number` |  |
| `discussion_id` | `number` |  |
| `id` | `number` |  |
| `line_code` | `string` |  |
| `merge_request_id` | `number` |  |
| `note` | `string` |  |
| `position` | `table` |  |
| `resolve_discussion` | `boolean` |  |

#### Example: Load

```lua
local api_entities_draft_note, err = client:ApiEntitiesDraftNote():load({ id = "api_entities_draft_note_id", merge_request_id = "merge_request_id", project_id = "project_id" })
```

#### Example: List

```lua
local api_entities_draft_notes, err = client:ApiEntitiesDraftNote():list()
```

#### Example: Create

```lua
local api_entities_draft_note, err = client:ApiEntitiesDraftNote():create({
  merge_request_id = "example_merge_request_id", -- string
  project_id = "example_project_id", -- string
})
```


### ApiEntitiesEnvironment

Create an instance: `local api_entities_environment = client:ApiEntitiesEnvironment(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auto_stop_at` | `string` |  |
| `auto_stop_setting` | `string` |  |
| `cluster_agent` | `table` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `external_url` | `string` |  |
| `flux_resource_path` | `string` |  |
| `id` | `number` |  |
| `kubernetes_namespace` | `string` |  |
| `last_deployment` | `table` |  |
| `name` | `string` |  |
| `project` | `table` |  |
| `slug` | `string` |  |
| `state` | `string` |  |
| `tier` | `string` |  |
| `updated_at` | `string` |  |

#### Example: Load

```lua
local api_entities_environment, err = client:ApiEntitiesEnvironment():load({ id = "api_entities_environment_id", project_id = "project_id" })
```

#### Example: List

```lua
local api_entities_environments, err = client:ApiEntitiesEnvironment():list()
```

#### Example: Create

```lua
local api_entities_environment, err = client:ApiEntitiesEnvironment():create({
  project_id = "example_project_id", -- string
})
```


### ApiEntitiesErrorTrackingClientKey

Create an instance: `local api_entities_error_tracking_client_key = client:ApiEntitiesErrorTrackingClientKey(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `boolean` |  |
| `id` | `number` |  |
| `public_key` | `string` |  |
| `sentry_dsn` | `string` |  |

#### Example: List

```lua
local api_entities_error_tracking_client_keys, err = client:ApiEntitiesErrorTrackingClientKey():list()
```

#### Example: Create

```lua
local api_entities_error_tracking_client_key, err = client:ApiEntitiesErrorTrackingClientKey():create({
  project_id = "example_project_id", -- string
})
```


### ApiEntitiesErrorTrackingProjectSetting

Create an instance: `local api_entities_error_tracking_project_setting = client:ApiEntitiesErrorTrackingProjectSetting(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `boolean` |  |
| `api_url` | `string` |  |
| `integrated` | `boolean` |  |
| `project_name` | `string` |  |
| `sentry_external_url` | `string` |  |

#### Example: Load

```lua
local api_entities_error_tracking_project_setting, err = client:ApiEntitiesErrorTrackingProjectSetting():load({ project_id = "project_id" })
```


### ApiEntitiesEvent

Create an instance: `local api_entities_event = client:ApiEntitiesEvent(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action_name` | `string` |  |
| `author` | `table` |  |
| `author_id` | `number` |  |
| `author_username` | `string` |  |
| `created_at` | `string` |  |
| `id` | `number` |  |
| `imported` | `boolean` |  |
| `imported_from` | `string` |  |
| `note` | `table` |  |
| `project_id` | `number` |  |
| `push_data` | `table` |  |
| `target_id` | `number` |  |
| `target_iid` | `number` |  |
| `target_title` | `string` |  |
| `target_type` | `string` |  |
| `wiki_page` | `table` |  |

#### Example: Load

```lua
local api_entities_event, err = client:ApiEntitiesEvent():load({ project_id = "project_id" })
```

#### Example: List

```lua
local api_entities_events, err = client:ApiEntitiesEvent():list()
```


### ApiEntitiesFeature

Create an instance: `local api_entities_feature = client:ApiEntitiesFeature(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `definition` | `table` |  |
| `gate` | `table` |  |
| `name` | `string` |  |
| `state` | `string` |  |

#### Example: List

```lua
local api_entities_features, err = client:ApiEntitiesFeature():list()
```

#### Example: Create

```lua
local api_entities_feature, err = client:ApiEntitiesFeature():create({
  id = "example_id", -- string
})
```


### ApiEntitiesFeatureDefinition

Create an instance: `local api_entities_feature_definition = client:ApiEntitiesFeatureDefinition(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `default_enabled` | `string` |  |
| `feature_issue_url` | `string` |  |
| `group` | `string` |  |
| `intended_to_rollout_by` | `string` |  |
| `introduced_by_url` | `string` |  |
| `log_state_change` | `string` |  |
| `milestone` | `string` |  |
| `name` | `string` |  |
| `rollout_issue_url` | `string` |  |
| `type` | `string` |  |

#### Example: List

```lua
local api_entities_feature_definitions, err = client:ApiEntitiesFeatureDefinition():list()
```


### ApiEntitiesFeatureFlag

Create an instance: `local api_entities_feature_flag = client:ApiEntitiesFeatureFlag(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `boolean` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `name` | `string` |  |
| `scope` | `string` |  |
| `strategy` | `table` |  |
| `updated_at` | `string` |  |
| `version` | `string` |  |

#### Example: Load

```lua
local api_entities_feature_flag, err = client:ApiEntitiesFeatureFlag():load({ id = "api_entities_feature_flag_id", project_id = "project_id" })
```

#### Example: List

```lua
local api_entities_feature_flags, err = client:ApiEntitiesFeatureFlag():list()
```

#### Example: Create

```lua
local api_entities_feature_flag, err = client:ApiEntitiesFeatureFlag():create({
  project_id = "example_project_id", -- string
})
```


### ApiEntitiesFeatureFlagUserList

Create an instance: `local api_entities_feature_flag_user_list = client:ApiEntitiesFeatureFlagUserList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `edit_path` | `string` |  |
| `id` | `number` |  |
| `iid` | `number` |  |
| `name` | `string` |  |
| `path` | `string` |  |
| `project_id` | `number` |  |
| `updated_at` | `string` |  |
| `user_xid` | `string` |  |

#### Example: Load

```lua
local api_entities_feature_flag_user_list, err = client:ApiEntitiesFeatureFlagUserList():load({ iid = "iid", project_id = "project_id" })
```

#### Example: List

```lua
local api_entities_feature_flag_user_lists, err = client:ApiEntitiesFeatureFlagUserList():list()
```

#### Example: Create

```lua
local api_entities_feature_flag_user_list, err = client:ApiEntitiesFeatureFlagUserList():create({
  project_id = "example_project_id", -- string
})
```


### ApiEntitiesFreezePeriod

Create an instance: `local api_entities_freeze_period = client:ApiEntitiesFreezePeriod(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `cron_timezone` | `string` |  |
| `freeze_end` | `string` |  |
| `freeze_start` | `string` |  |
| `id` | `number` |  |
| `updated_at` | `string` |  |

#### Example: Load

```lua
local api_entities_freeze_period, err = client:ApiEntitiesFreezePeriod():load({ id = "api_entities_freeze_period_id", project_id = "project_id" })
```

#### Example: List

```lua
local api_entities_freeze_periods, err = client:ApiEntitiesFreezePeriod():list()
```

#### Example: Create

```lua
local api_entities_freeze_period, err = client:ApiEntitiesFreezePeriod():create({
  project_id = "example_project_id", -- string
})
```


### ApiEntitiesGitlabSubscription

Create an instance: `local api_entities_gitlab_subscription = client:ApiEntitiesGitlabSubscription(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `billing` | `table` |  |
| `plan` | `table` |  |
| `usage` | `table` |  |

#### Example: Load

```lua
local api_entities_gitlab_subscription, err = client:ApiEntitiesGitlabSubscription():load({ namespace_id = "namespace_id" })
```


### ApiEntitiesGoModuleVersion

Create an instance: `local api_entities_go_module_version = client:ApiEntitiesGoModuleVersion(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `time` | `string` |  |
| `version` | `string` |  |

#### Example: Load

```lua
local api_entities_go_module_version, err = client:ApiEntitiesGoModuleVersion():load({ module_version = "module_version", project_id = "project_id" })
```


### ApiEntitiesGroup

Create an instance: `local api_entities_group = client:ApiEntitiesGroup(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived` | `boolean` |  |
| `auto_devops_enabled` | `string` |  |
| `auto_duo_code_review_enabled` | `string` |  |
| `avatar_url` | `string` |  |
| `created_at` | `string` |  |
| `custom_attribute` | `table` |  |
| `default_branch` | `string` |  |
| `default_branch_protection` | `string` |  |
| `default_branch_protection_default` | `string` |  |
| `description` | `string` |  |
| `duo_core_features_enabled` | `boolean` |  |
| `duo_features_enabled` | `string` |  |
| `emails_disabled` | `boolean` |  |
| `emails_enabled` | `boolean` |  |
| `file_template_project_id` | `string` |  |
| `full_name` | `string` |  |
| `full_path` | `string` |  |
| `id` | `string` |  |
| `ldap_access` | `string` |  |
| `ldap_cn` | `string` |  |
| `ldap_group_link` | `table` |  |
| `lfs_enabled` | `string` |  |
| `lock_duo_features_enabled` | `string` |  |
| `lock_math_rendering_limits_enabled` | `boolean` |  |
| `marked_for_deletion_on` | `string` |  |
| `math_rendering_limits_enabled` | `boolean` |  |
| `max_artifacts_size` | `number` |  |
| `mentions_disabled` | `string` |  |
| `name` | `string` |  |
| `organization_id` | `string` |  |
| `parent_id` | `string` |  |
| `path` | `string` |  |
| `project_creation_level` | `string` |  |
| `repository_storage` | `string` |  |
| `request_access_enabled` | `string` |  |
| `require_two_factor_authentication` | `string` |  |
| `root_storage_statistic` | `table` |  |
| `saml_group_link` | `table` |  |
| `share_with_group_lock` | `string` |  |
| `shared_runners_setting` | `string` |  |
| `show_diff_preview_in_email` | `boolean` |  |
| `statistic` | `table` |  |
| `subgroup_creation_level` | `string` |  |
| `two_factor_grace_period` | `string` |  |
| `visibility` | `string` |  |
| `web_based_commit_signing_enabled` | `string` |  |
| `web_url` | `string` |  |
| `wiki_access_level` | `string` |  |

#### Example: Load

```lua
local api_entities_group, err = client:ApiEntitiesGroup():load({ project_id = "project_id" })
```

#### Example: List

```lua
local api_entities_groups, err = client:ApiEntitiesGroup():list()
```

#### Example: Create

```lua
local api_entities_group, err = client:ApiEntitiesGroup():create({
})
```


### ApiEntitiesGroupDetail

Create an instance: `local api_entities_group_detail = client:ApiEntitiesGroupDetail(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowed_email_domains_list` | `string` |  |
| `archived` | `boolean` |  |
| `auto_ban_user_on_excessive_projects_download` | `string` |  |
| `auto_devops_enabled` | `string` |  |
| `auto_duo_code_review_enabled` | `string` |  |
| `avatar_url` | `string` |  |
| `created_at` | `string` |  |
| `custom_attribute` | `table` |  |
| `default_branch` | `string` |  |
| `default_branch_protection` | `string` |  |
| `default_branch_protection_default` | `string` |  |
| `description` | `string` |  |
| `duo_core_features_enabled` | `boolean` |  |
| `duo_features_enabled` | `string` |  |
| `emails_disabled` | `boolean` |  |
| `emails_enabled` | `boolean` |  |
| `enabled_git_access_protocol` | `string` |  |
| `extra_shared_runners_minutes_limit` | `string` |  |
| `file_template_project_id` | `string` |  |
| `full_name` | `string` |  |
| `full_path` | `string` |  |
| `id` | `string` |  |
| `ip_restriction_range` | `string` |  |
| `ldap_access` | `string` |  |
| `ldap_cn` | `string` |  |
| `ldap_group_link` | `table` |  |
| `lfs_enabled` | `string` |  |
| `lock_duo_features_enabled` | `string` |  |
| `lock_math_rendering_limits_enabled` | `boolean` |  |
| `marked_for_deletion_on` | `string` |  |
| `math_rendering_limits_enabled` | `boolean` |  |
| `max_artifacts_size` | `number` |  |
| `membership_lock` | `string` |  |
| `mentions_disabled` | `string` |  |
| `name` | `string` |  |
| `organization_id` | `string` |  |
| `parent_id` | `string` |  |
| `path` | `string` |  |
| `prevent_forking_outside_group` | `string` |  |
| `prevent_sharing_groups_outside_hierarchy` | `string` |  |
| `project` | `table` |  |
| `project_creation_level` | `string` |  |
| `repository_storage` | `string` |  |
| `request_access_enabled` | `string` |  |
| `require_two_factor_authentication` | `string` |  |
| `root_storage_statistic` | `table` |  |
| `runners_token` | `string` |  |
| `saml_group_link` | `table` |  |
| `service_access_tokens_expiration_enforced` | `string` |  |
| `share_with_group_lock` | `string` |  |
| `shared_project` | `table` |  |
| `shared_runners_minutes_limit` | `string` |  |
| `shared_runners_setting` | `string` |  |
| `shared_with_group` | `string` |  |
| `show_diff_preview_in_email` | `boolean` |  |
| `statistic` | `table` |  |
| `subgroup_creation_level` | `string` |  |
| `two_factor_grace_period` | `string` |  |
| `unique_project_download_limit` | `string` |  |
| `unique_project_download_limit_alertlist` | `string` |  |
| `unique_project_download_limit_allowlist` | `string` |  |
| `unique_project_download_limit_interval_in_second` | `string` |  |
| `visibility` | `string` |  |
| `web_based_commit_signing_enabled` | `string` |  |
| `web_url` | `string` |  |
| `wiki_access_level` | `string` |  |

#### Example: Load

```lua
local api_entities_group_detail, err = client:ApiEntitiesGroupDetail():load({ id = "api_entities_group_detail_id" })
```

#### Example: Create

```lua
local api_entities_group_detail, err = client:ApiEntitiesGroupDetail():create({
  group_id = "example_group_id", -- string
})
```


### ApiEntitiesHook

Create an instance: `local api_entities_hook = client:ApiEntitiesHook(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alert_status` | `any` |  |
| `branch_filter_strategy` | `string` |  |
| `created_at` | `string` |  |
| `custom_header` | `table` |  |
| `custom_webhook_template` | `string` |  |
| `description` | `string` |  |
| `disabled_until` | `string` |  |
| `enable_ssl_verification` | `boolean` |  |
| `id` | `string` |  |
| `merge_requests_event` | `boolean` |  |
| `name` | `string` |  |
| `push_event` | `boolean` |  |
| `push_events_branch_filter` | `string` |  |
| `repository_update_event` | `boolean` |  |
| `tag_push_event` | `boolean` |  |
| `url` | `string` |  |
| `url_variable` | `table` |  |

#### Example: Load

```lua
local api_entities_hook, err = client:ApiEntitiesHook():load({ id = "api_entities_hook_id" })
```

#### Example: List

```lua
local api_entities_hooks, err = client:ApiEntitiesHook():list()
```

#### Example: Create

```lua
local api_entities_hook, err = client:ApiEntitiesHook():create({
})
```


### ApiEntitiesIntegration

Create an instance: `local api_entities_integration = client:ApiEntitiesIntegration(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `boolean` |  |
| `alert_event` | `boolean` |  |
| `comment_on_event_enabled` | `boolean` |  |
| `commit_event` | `boolean` |  |
| `confidential_issues_event` | `boolean` |  |
| `confidential_note_event` | `boolean` |  |
| `created_at` | `string` |  |
| `deployment_event` | `boolean` |  |
| `id` | `number` |  |
| `incident_event` | `boolean` |  |
| `inherited` | `boolean` |  |
| `issues_event` | `boolean` |  |
| `job_event` | `boolean` |  |
| `merge_requests_event` | `boolean` |  |
| `note_event` | `boolean` |  |
| `pipeline_event` | `boolean` |  |
| `property` | `table` |  |
| `push_event` | `boolean` |  |
| `slug` | `number` |  |
| `tag_push_event` | `boolean` |  |
| `title` | `string` |  |
| `updated_at` | `string` |  |
| `vulnerability_event` | `boolean` |  |
| `wiki_page_event` | `boolean` |  |

#### Example: Load

```lua
local api_entities_integration, err = client:ApiEntitiesIntegration():load({ id = "api_entities_integration_id" })
```


### ApiEntitiesIntegrationBasic

Create an instance: `local api_entities_integration_basic = client:ApiEntitiesIntegrationBasic(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `boolean` |  |
| `alert_event` | `boolean` |  |
| `comment_on_event_enabled` | `boolean` |  |
| `commit_event` | `boolean` |  |
| `confidential_issues_event` | `boolean` |  |
| `confidential_note_event` | `boolean` |  |
| `created_at` | `string` |  |
| `deployment_event` | `boolean` |  |
| `id` | `number` |  |
| `incident_event` | `boolean` |  |
| `inherited` | `boolean` |  |
| `issues_event` | `boolean` |  |
| `job_event` | `boolean` |  |
| `merge_requests_event` | `boolean` |  |
| `note_event` | `boolean` |  |
| `pipeline_event` | `boolean` |  |
| `push_event` | `boolean` |  |
| `slug` | `number` |  |
| `tag_push_event` | `boolean` |  |
| `title` | `string` |  |
| `updated_at` | `string` |  |
| `vulnerability_event` | `boolean` |  |
| `wiki_page_event` | `boolean` |  |

#### Example: List

```lua
local api_entities_integration_basics, err = client:ApiEntitiesIntegrationBasic():list()
```


### ApiEntitiesInvitation

Create an instance: `local api_entities_invitation = client:ApiEntitiesInvitation(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `access_level` | `string` |  |
| `created_at` | `string` |  |
| `created_by_name` | `string` |  |
| `expires_at` | `string` |  |
| `invite_email` | `string` |  |
| `invite_token` | `string` |  |
| `user_name` | `string` |  |

#### Example: List

```lua
local api_entities_invitations, err = client:ApiEntitiesInvitation():list()
```

#### Example: Create

```lua
local api_entities_invitation, err = client:ApiEntitiesInvitation():create({
})
```


### ApiEntitiesIssuableTimeStat

Create an instance: `local api_entities_issuable_time_stat = client:ApiEntitiesIssuableTimeStat(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `human_time_estimate` | `string` |  |
| `human_total_time_spent` | `string` |  |
| `time_estimate` | `number` |  |
| `total_time_spent` | `number` |  |

#### Example: Load

```lua
local api_entities_issuable_time_stat, err = client:ApiEntitiesIssuableTimeStat():load({ project_id = "project_id" })
```

#### Example: Create

```lua
local api_entities_issuable_time_stat, err = client:ApiEntitiesIssuableTimeStat():create({
  project_id = "example_project_id", -- string
})
```


### ApiEntitiesIssue

Create an instance: `local api_entities_issue = client:ApiEntitiesIssue(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assignee` | `table` |  |
| `author` | `table` |  |
| `blocking_issues_count` | `string` |  |
| `closed_at` | `string` |  |
| `closed_by` | `table` |  |
| `confidential` | `boolean` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `discussion_locked` | `boolean` |  |
| `downvote` | `string` |  |
| `due_date` | `string` |  |
| `epic` | `table` |  |
| `epic_iid` | `string` |  |
| `has_task` | `boolean` |  |
| `health_status` | `string` |  |
| `id` | `number` |  |
| `iid` | `number` |  |
| `imported` | `string` |  |
| `imported_from` | `string` |  |
| `issue_type` | `string` |  |
| `iteration` | `table` |  |
| `label` | `table` |  |
| `link` | `table` |  |
| `merge_requests_count` | `string` |  |
| `milestone` | `table` |  |
| `moved_to_id` | `string` |  |
| `project_id` | `number` |  |
| `reference` | `table` |  |
| `service_desk_reply_to` | `string` |  |
| `severity` | `string` |  |
| `state` | `string` |  |
| `subscribed` | `string` |  |
| `task_completion_status` | `string` |  |
| `task_status` | `string` |  |
| `time_stat` | `table` |  |
| `title` | `string` |  |
| `type` | `string` |  |
| `updated_at` | `string` |  |
| `upvote` | `string` |  |
| `user_notes_count` | `string` |  |
| `web_url` | `string` |  |
| `weight` | `string` |  |

#### Example: Load

```lua
local api_entities_issue, err = client:ApiEntitiesIssue():load({ id = "api_entities_issue_id" })
```

#### Example: List

```lua
local api_entities_issues, err = client:ApiEntitiesIssue():list()
```

#### Example: Create

```lua
local api_entities_issue, err = client:ApiEntitiesIssue():create({
  project_id = "example_project_id", -- string
})
```


### ApiEntitiesIssueLink

Create an instance: `local api_entities_issue_link = client:ApiEntitiesIssueLink(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `link_type` | `string` |  |
| `source_issue` | `table` |  |
| `target_issue` | `table` |  |

#### Example: Load

```lua
local api_entities_issue_link, err = client:ApiEntitiesIssueLink():load({ id = "api_entities_issue_link_id", issue_id = "issue_id", project_id = "project_id" })
```

#### Example: Create

```lua
local api_entities_issue_link, err = client:ApiEntitiesIssueLink():create({
  issue_id = "example_issue_id", -- string
  project_id = "example_project_id", -- string
})
```


### ApiEntitiesLicense

Create an instance: `local api_entities_license = client:ApiEntitiesLicense(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `condition` | `table` |  |
| `content` | `string` |  |
| `description` | `string` |  |
| `html_url` | `string` |  |
| `key` | `string` |  |
| `limitation` | `table` |  |
| `name` | `string` |  |
| `nickname` | `string` |  |
| `permission` | `table` |  |
| `popular` | `boolean` |  |
| `source_url` | `string` |  |

#### Example: List

```lua
local api_entities_licenses, err = client:ApiEntitiesLicense():list()
```


### ApiEntitiesMarkdown

Create an instance: `local api_entities_markdown = client:ApiEntitiesMarkdown(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```lua
local api_entities_markdown, err = client:ApiEntitiesMarkdown():create({
})
```


### ApiEntitiesMarkdownUploadAdmin

Create an instance: `local api_entities_markdown_upload_admin = client:ApiEntitiesMarkdownUploadAdmin(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `filename` | `string` |  |
| `id` | `string` |  |
| `size` | `string` |  |
| `uploaded_by` | `table` |  |

#### Example: List

```lua
local api_entities_markdown_upload_admins, err = client:ApiEntitiesMarkdownUploadAdmin():list()
```


### ApiEntitiesMember

Create an instance: `local api_entities_member = client:ApiEntitiesMember(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `access_level` | `string` |  |
| `avatar_path` | `string` |  |
| `avatar_url` | `string` |  |
| `created_at` | `string` |  |
| `created_by` | `table` |  |
| `custom_attribute` | `table` |  |
| `email` | `string` |  |
| `expires_at` | `string` |  |
| `group_saml_identity` | `table` |  |
| `group_scim_identity` | `table` |  |
| `id` | `number` |  |
| `is_using_seat` | `boolean` |  |
| `key` | `string` |  |
| `locked` | `boolean` |  |
| `member_role` | `table` |  |
| `membership_state` | `string` |  |
| `name` | `string` |  |
| `override` | `string` |  |
| `public_email` | `string` |  |
| `state` | `string` |  |
| `username` | `string` |  |
| `value` | `string` |  |
| `web_url` | `string` |  |

#### Example: Load

```lua
local api_entities_member, err = client:ApiEntitiesMember():load({ id = "api_entities_member_id" })
```

#### Example: List

```lua
local api_entities_members, err = client:ApiEntitiesMember():list()
```

#### Example: Create

```lua
local api_entities_member, err = client:ApiEntitiesMember():create({
})
```


### ApiEntitiesMerge

Create an instance: `local api_entities_merge = client:ApiEntitiesMerge(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_collaboration` | `boolean` |  |
| `allow_maintainer_to_push` | `boolean` |  |
| `approvals_before_merge` | `string` |  |
| `assignee` | `table` |  |
| `author` | `table` |  |
| `blocking_discussions_resolved` | `string` |  |
| `changes_count` | `string` |  |
| `closed_at` | `string` |  |
| `closed_by` | `table` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `description_html` | `string` |  |
| `detailed_merge_status` | `string` |  |
| `diff_ref` | `table` |  |
| `discussion_locked` | `string` |  |
| `diverged_commits_count` | `string` |  |
| `downvote` | `string` |  |
| `draft` | `string` |  |
| `first_contribution` | `string` |  |
| `first_deployed_to_production_at` | `string` |  |
| `force_remove_source_branch` | `string` |  |
| `has_conflict` | `boolean` |  |
| `head_pipeline` | `table` |  |
| `id` | `number` |  |
| `iid` | `number` |  |
| `imported` | `string` |  |
| `imported_from` | `string` |  |
| `label` | `string` |  |
| `latest_build_finished_at` | `string` |  |
| `latest_build_started_at` | `string` |  |
| `merge_after` | `string` |  |
| `merge_commit_sha` | `string` |  |
| `merge_error` | `string` |  |
| `merge_status` | `string` |  |
| `merge_user` | `table` |  |
| `merge_when_pipeline_succeed` | `string` |  |
| `merged_at` | `string` |  |
| `merged_by` | `table` |  |
| `milestone` | `table` |  |
| `pipeline` | `table` |  |
| `prepared_at` | `string` |  |
| `project_id` | `number` |  |
| `rebase_in_progress` | `string` |  |
| `reference` | `string` |  |
| `reviewer` | `table` |  |
| `sha` | `string` |  |
| `should_remove_source_branch` | `boolean` |  |
| `source_branch` | `string` |  |
| `source_project_id` | `string` |  |
| `squash` | `string` |  |
| `squash_commit_sha` | `string` |  |
| `squash_on_merge` | `string` |  |
| `state` | `string` |  |
| `subscribed` | `string` |  |
| `target_branch` | `string` |  |
| `target_project_id` | `string` |  |
| `task_completion_status` | `string` |  |
| `time_stat` | `table` |  |
| `title` | `string` |  |
| `title_html` | `string` |  |
| `updated_at` | `string` |  |
| `upvote` | `string` |  |
| `user` | `table` |  |
| `user_notes_count` | `string` |  |
| `web_url` | `string` |  |
| `work_in_progress` | `string` |  |

#### Example: Load

```lua
local api_entities_merge, err = client:ApiEntitiesMerge():load({ merge_request_iid = "merge_request_iid", project_id = "project_id" })
```

#### Example: Create

```lua
local api_entities_merge, err = client:ApiEntitiesMerge():create({
  project_id = "example_project_id", -- string
})
```


### ApiEntitiesMergeRequestApproval

Create an instance: `local api_entities_merge_request_approval = client:ApiEntitiesMergeRequestApproval(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `approved` | `boolean` |  |
| `approved_by` | `table` |  |
| `user_can_approve` | `boolean` |  |
| `user_has_approved` | `boolean` |  |

#### Example: Load

```lua
local api_entities_merge_request_approval, err = client:ApiEntitiesMergeRequestApproval():load({ merge_request_id = "merge_request_id", project_id = "project_id" })
```

#### Example: Create

```lua
local api_entities_merge_request_approval, err = client:ApiEntitiesMergeRequestApproval():create({
  merge_request_id = "example_merge_request_id", -- string
  project_id = "example_project_id", -- string
})
```


### ApiEntitiesMergeRequestBasic

Create an instance: `local api_entities_merge_request_basic = client:ApiEntitiesMergeRequestBasic(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_collaboration` | `boolean` |  |
| `allow_maintainer_to_push` | `boolean` |  |
| `approvals_before_merge` | `string` |  |
| `assignee` | `table` |  |
| `author` | `table` |  |
| `blocking_discussions_resolved` | `string` |  |
| `closed_at` | `string` |  |
| `closed_by` | `table` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `description_html` | `string` |  |
| `detailed_merge_status` | `string` |  |
| `discussion_locked` | `string` |  |
| `downvote` | `string` |  |
| `draft` | `string` |  |
| `force_remove_source_branch` | `string` |  |
| `has_conflict` | `boolean` |  |
| `id` | `number` |  |
| `iid` | `number` |  |
| `imported` | `string` |  |
| `imported_from` | `string` |  |
| `label` | `string` |  |
| `merge_after` | `string` |  |
| `merge_commit_sha` | `string` |  |
| `merge_status` | `string` |  |
| `merge_user` | `table` |  |
| `merge_when_pipeline_succeed` | `string` |  |
| `merged_at` | `string` |  |
| `merged_by` | `table` |  |
| `milestone` | `table` |  |
| `prepared_at` | `string` |  |
| `project_id` | `number` |  |
| `reference` | `string` |  |
| `reviewer` | `table` |  |
| `sha` | `string` |  |
| `should_remove_source_branch` | `boolean` |  |
| `source_branch` | `string` |  |
| `source_project_id` | `string` |  |
| `squash` | `string` |  |
| `squash_commit_sha` | `string` |  |
| `squash_on_merge` | `string` |  |
| `state` | `string` |  |
| `target_branch` | `string` |  |
| `target_project_id` | `string` |  |
| `task_completion_status` | `string` |  |
| `time_stat` | `table` |  |
| `title` | `string` |  |
| `title_html` | `string` |  |
| `updated_at` | `string` |  |
| `upvote` | `string` |  |
| `user_notes_count` | `string` |  |
| `web_url` | `string` |  |
| `work_in_progress` | `string` |  |

#### Example: Load

```lua
local api_entities_merge_request_basic, err = client:ApiEntitiesMergeRequestBasic():load()
```

#### Example: List

```lua
local api_entities_merge_request_basics, err = client:ApiEntitiesMergeRequestBasic():list()
```


### ApiEntitiesMergeRequestChange

Create an instance: `local api_entities_merge_request_change = client:ApiEntitiesMergeRequestChange(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_collaboration` | `boolean` |  |
| `allow_maintainer_to_push` | `boolean` |  |
| `approvals_before_merge` | `string` |  |
| `assignee` | `table` |  |
| `author` | `table` |  |
| `blocking_discussions_resolved` | `string` |  |
| `change` | `table` |  |
| `changes_count` | `string` |  |
| `closed_at` | `string` |  |
| `closed_by` | `table` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `description_html` | `string` |  |
| `detailed_merge_status` | `string` |  |
| `diff_ref` | `table` |  |
| `discussion_locked` | `string` |  |
| `diverged_commits_count` | `string` |  |
| `downvote` | `string` |  |
| `draft` | `string` |  |
| `first_contribution` | `string` |  |
| `first_deployed_to_production_at` | `string` |  |
| `force_remove_source_branch` | `string` |  |
| `has_conflict` | `boolean` |  |
| `head_pipeline` | `table` |  |
| `id` | `number` |  |
| `iid` | `number` |  |
| `imported` | `string` |  |
| `imported_from` | `string` |  |
| `label` | `string` |  |
| `latest_build_finished_at` | `string` |  |
| `latest_build_started_at` | `string` |  |
| `merge_after` | `string` |  |
| `merge_commit_sha` | `string` |  |
| `merge_error` | `string` |  |
| `merge_status` | `string` |  |
| `merge_user` | `table` |  |
| `merge_when_pipeline_succeed` | `string` |  |
| `merged_at` | `string` |  |
| `merged_by` | `table` |  |
| `milestone` | `table` |  |
| `overflow` | `string` |  |
| `pipeline` | `table` |  |
| `prepared_at` | `string` |  |
| `project_id` | `number` |  |
| `rebase_in_progress` | `string` |  |
| `reference` | `string` |  |
| `reviewer` | `table` |  |
| `sha` | `string` |  |
| `should_remove_source_branch` | `boolean` |  |
| `source_branch` | `string` |  |
| `source_project_id` | `string` |  |
| `squash` | `string` |  |
| `squash_commit_sha` | `string` |  |
| `squash_on_merge` | `string` |  |
| `state` | `string` |  |
| `subscribed` | `string` |  |
| `target_branch` | `string` |  |
| `target_project_id` | `string` |  |
| `task_completion_status` | `string` |  |
| `time_stat` | `table` |  |
| `title` | `string` |  |
| `title_html` | `string` |  |
| `updated_at` | `string` |  |
| `upvote` | `string` |  |
| `user` | `table` |  |
| `user_notes_count` | `string` |  |
| `web_url` | `string` |  |
| `work_in_progress` | `string` |  |

#### Example: Load

```lua
local api_entities_merge_request_change, err = client:ApiEntitiesMergeRequestChange():load({ merge_request_id = "merge_request_id", project_id = "project_id" })
```


### ApiEntitiesMergeRequestDiff

Create an instance: `local api_entities_merge_request_diff = client:ApiEntitiesMergeRequestDiff(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `base_commit_sha` | `string` |  |
| `created_at` | `string` |  |
| `head_commit_sha` | `string` |  |
| `id` | `string` |  |
| `merge_request_id` | `string` |  |
| `patch_id_sha` | `string` |  |
| `real_size` | `string` |  |
| `start_commit_sha` | `string` |  |
| `state` | `string` |  |

#### Example: List

```lua
local api_entities_merge_request_diffs, err = client:ApiEntitiesMergeRequestDiff():list()
```


### ApiEntitiesMergeRequestDiffFull

Create an instance: `local api_entities_merge_request_diff_full = client:ApiEntitiesMergeRequestDiffFull(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `base_commit_sha` | `string` |  |
| `commit` | `table` |  |
| `created_at` | `string` |  |
| `diff` | `table` |  |
| `head_commit_sha` | `string` |  |
| `id` | `string` |  |
| `merge_request_id` | `string` |  |
| `patch_id_sha` | `string` |  |
| `real_size` | `string` |  |
| `start_commit_sha` | `string` |  |
| `state` | `string` |  |

#### Example: Load

```lua
local api_entities_merge_request_diff_full, err = client:ApiEntitiesMergeRequestDiffFull():load({ merge_request_id = "merge_request_id", project_id = "project_id", version_id = "version_id" })
```


### ApiEntitiesMergeRequestReviewer

Create an instance: `local api_entities_merge_request_reviewer = client:ApiEntitiesMergeRequestReviewer(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `state` | `string` |  |
| `user` | `table` |  |

#### Example: Load

```lua
local api_entities_merge_request_reviewer, err = client:ApiEntitiesMergeRequestReviewer():load({ merge_request_id = "merge_request_id", project_id = "project_id" })
```


### ApiEntitiesMetricImage

Create an instance: `local api_entities_metric_image = client:ApiEntitiesMetricImage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `file_path` | `string` |  |
| `filename` | `string` |  |
| `id` | `number` |  |
| `url` | `string` |  |
| `url_text` | `string` |  |

#### Example: List

```lua
local api_entities_metric_images, err = client:ApiEntitiesMetricImage():list()
```

#### Example: Create

```lua
local api_entities_metric_image, err = client:ApiEntitiesMetricImage():create({
  alert_management_alert_id = "example_alert_management_alert_id", -- string
  project_id = "example_project_id", -- string
})
```


### ApiEntitiesMrNote

Create an instance: `local api_entities_mr_note = client:ApiEntitiesMrNote(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author` | `table` |  |
| `note` | `string` |  |

#### Example: Load

```lua
local api_entities_mr_note, err = client:ApiEntitiesMrNote():load({ merge_request_id = "merge_request_id", project_id = "project_id" })
```


### ApiEntitiesNamespace

Create an instance: `local api_entities_namespace = client:ApiEntitiesNamespace(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `additional_purchased_storage_ends_on` | `string` |  |
| `additional_purchased_storage_size` | `number` |  |
| `avatar_url` | `string` |  |
| `billable_members_count` | `number` |  |
| `end_date` | `string` |  |
| `extra_shared_runners_minutes_limit` | `number` |  |
| `full_path` | `string` |  |
| `id` | `number` |  |
| `kind` | `string` |  |
| `max_seats_used` | `number` |  |
| `max_seats_used_changed_at` | `string` |  |
| `members_count_with_descendant` | `number` |  |
| `name` | `string` |  |
| `parent_id` | `number` |  |
| `path` | `string` |  |
| `plan` | `string` |  |
| `projects_count` | `number` |  |
| `root_repository_size` | `number` |  |
| `seats_in_use` | `number` |  |
| `shared_runners_minutes_limit` | `number` |  |
| `trial` | `boolean` |  |
| `trial_ends_on` | `string` |  |
| `web_url` | `string` |  |

#### Example: Load

```lua
local api_entities_namespace, err = client:ApiEntitiesNamespace():load({ id = "api_entities_namespace_id" })
```

#### Example: List

```lua
local api_entities_namespaces, err = client:ApiEntitiesNamespace():list()
```


### ApiEntitiesNamespaceExistence

Create an instance: `local api_entities_namespace_existence = client:ApiEntitiesNamespaceExistence(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `exist` | `boolean` |  |
| `suggest` | `table` |  |

#### Example: List

```lua
local api_entities_namespace_existences, err = client:ApiEntitiesNamespaceExistence():list()
```


### ApiEntitiesNamespacesStorageLimitExclusion

Create an instance: `local api_entities_namespaces_storage_limit_exclusion = client:ApiEntitiesNamespacesStorageLimitExclusion(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `number` |  |
| `namespace_id` | `number` |  |
| `namespace_name` | `string` |  |
| `reason` | `string` |  |

#### Example: Load

```lua
local api_entities_namespaces_storage_limit_exclusion, err = client:ApiEntitiesNamespacesStorageLimitExclusion():load({ id = 1 })
```

#### Example: Create

```lua
local api_entities_namespaces_storage_limit_exclusion, err = client:ApiEntitiesNamespacesStorageLimitExclusion():create({
  namespace_id = "example_namespace_id", -- string
})
```


### ApiEntitiesNpmPackage

Create an instance: `local api_entities_npm_package = client:ApiEntitiesNpmPackage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `dist_tag` | `table` |  |
| `name` | `string` |  |
| `version` | `table` |  |

#### Example: Load

```lua
local api_entities_npm_package, err = client:ApiEntitiesNpmPackage():load()
```


### ApiEntitiesNpmPackageTag

Create an instance: `local api_entities_npm_package_tag = client:ApiEntitiesNpmPackageTag(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `dist_tag` | `table` |  |

#### Example: Load

```lua
local api_entities_npm_package_tag, err = client:ApiEntitiesNpmPackageTag():load()
```


### ApiEntitiesNugetPackagesVersion

Create an instance: `local api_entities_nuget_packages_version = client:ApiEntitiesNugetPackagesVersion(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `version` | `table` |  |

#### Example: List

```lua
local api_entities_nuget_packages_versions, err = client:ApiEntitiesNugetPackagesVersion():list()
```


### ApiEntitiesNugetSearchResult

Create an instance: `local api_entities_nuget_search_result = client:ApiEntitiesNugetSearchResult(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author` | `string` |  |
| `description` | `string` |  |
| `icon_url` | `string` |  |
| `id` | `string` |  |
| `license_url` | `string` |  |
| `project_url` | `string` |  |
| `summary` | `string` |  |
| `tag` | `string` |  |
| `title` | `string` |  |
| `total_download` | `number` |  |
| `type` | `string` |  |
| `verified` | `boolean` |  |
| `version` | `string` |  |

#### Example: List

```lua
local api_entities_nuget_search_results, err = client:ApiEntitiesNugetSearchResult():list()
```


### ApiEntitiesNugetServiceIndex

Create an instance: `local api_entities_nuget_service_index = client:ApiEntitiesNugetServiceIndex(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `resource` | `table` |  |
| `version` | `string` |  |

#### Example: List

```lua
local api_entities_nuget_service_indexs, err = client:ApiEntitiesNugetServiceIndex():list()
```


### ApiEntitiesOrganizationsOrganization

Create an instance: `local api_entities_organizations_organization = client:ApiEntitiesOrganizationsOrganization(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```lua
local api_entities_organizations_organization, err = client:ApiEntitiesOrganizationsOrganization():create({
})
```


### ApiEntitiesPackage

Create an instance: `local api_entities_package = client:ApiEntitiesPackage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `conan_package_name` | `string` |  |
| `created_at` | `string` |  |
| `id` | `number` |  |
| `last_downloaded_at` | `string` |  |
| `link` | `table` |  |
| `name` | `string` |  |
| `package_type` | `string` |  |
| `pipeline` | `table` |  |
| `project_id` | `number` |  |
| `project_path` | `string` |  |
| `status` | `string` |  |
| `tag` | `string` |  |
| `version` | `string` |  |

#### Example: Load

```lua
local api_entities_package, err = client:ApiEntitiesPackage():load({ id = "api_entities_package_id", project_id = "project_id" })
```

#### Example: List

```lua
local api_entities_packages, err = client:ApiEntitiesPackage():list()
```


### ApiEntitiesPackageFile

Create an instance: `local api_entities_package_file = client:ApiEntitiesPackageFile(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `file_md5` | `string` |  |
| `file_name` | `string` |  |
| `file_sha1` | `string` |  |
| `file_sha256` | `string` |  |
| `id` | `number` |  |
| `package_id` | `number` |  |
| `pipeline` | `table` |  |
| `size` | `number` |  |

#### Example: List

```lua
local api_entities_package_files, err = client:ApiEntitiesPackageFile():list()
```


### ApiEntitiesPackagePipeline

Create an instance: `local api_entities_package_pipeline = client:ApiEntitiesPackagePipeline(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `id` | `number` |  |
| `iid` | `number` |  |
| `project_id` | `number` |  |
| `ref` | `string` |  |
| `sha` | `string` |  |
| `source` | `string` |  |
| `status` | `string` |  |
| `updated_at` | `string` |  |
| `user` | `table` |  |
| `web_url` | `string` |  |

#### Example: Load

```lua
local api_entities_package_pipeline, err = client:ApiEntitiesPackagePipeline():load({ package_id = "package_id", project_id = "project_id" })
```


### ApiEntitiesPackagesConanFilesList

Create an instance: `local api_entities_packages_conan_files_list = client:ApiEntitiesPackagesConanFilesList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `file` | `table` |  |

#### Example: Load

```lua
local api_entities_packages_conan_files_list, err = client:ApiEntitiesPackagesConanFilesList():load({ conan_id = "conan_id", package_channel = "package_channel", package_username = "package_username", package_version = "package_version", project_id = "project_id" })
```


### ApiEntitiesPackagesConanPackageManifest

Create an instance: `local api_entities_packages_conan_package_manifest = client:ApiEntitiesPackagesConanPackageManifest(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `package_url` | `table` |  |

#### Example: Load

```lua
local api_entities_packages_conan_package_manifest, err = client:ApiEntitiesPackagesConanPackageManifest():load({ conan_id = "conan_id", conan_package_reference = "conan_package_reference", package_channel = "package_channel", package_username = "package_username", package_version = "package_version" })
```


### ApiEntitiesPackagesConanPackageRevision

Create an instance: `local api_entities_packages_conan_package_revision = client:ApiEntitiesPackagesConanPackageRevision(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `revision` | `string` |  |
| `time` | `string` |  |

#### Example: List

```lua
local api_entities_packages_conan_package_revisions, err = client:ApiEntitiesPackagesConanPackageRevision():list()
```


### ApiEntitiesPackagesConanPackageSnapshot

Create an instance: `local api_entities_packages_conan_package_snapshot = client:ApiEntitiesPackagesConanPackageSnapshot(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `package_snapshot` | `table` |  |

#### Example: Load

```lua
local api_entities_packages_conan_package_snapshot, err = client:ApiEntitiesPackagesConanPackageSnapshot():load({ conan_id = "conan_id", conan_package_reference = "conan_package_reference", package_channel = "package_channel", package_username = "package_username", package_version = "package_version" })
```


### ApiEntitiesPackagesConanRecipeManifest

Create an instance: `local api_entities_packages_conan_recipe_manifest = client:ApiEntitiesPackagesConanRecipeManifest(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `recipe_url` | `table` |  |

#### Example: Load

```lua
local api_entities_packages_conan_recipe_manifest, err = client:ApiEntitiesPackagesConanRecipeManifest():load({ conan_id = "conan_id", package_channel = "package_channel", package_username = "package_username", package_version = "package_version" })
```


### ApiEntitiesPackagesConanRecipeRevision

Create an instance: `local api_entities_packages_conan_recipe_revision = client:ApiEntitiesPackagesConanRecipeRevision(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `revision` | `string` |  |
| `time` | `string` |  |

#### Example: List

```lua
local api_entities_packages_conan_recipe_revisions, err = client:ApiEntitiesPackagesConanRecipeRevision():list()
```


### ApiEntitiesPackagesConanRecipeSnapshot

Create an instance: `local api_entities_packages_conan_recipe_snapshot = client:ApiEntitiesPackagesConanRecipeSnapshot(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `recipe_snapshot` | `table` |  |

#### Example: Load

```lua
local api_entities_packages_conan_recipe_snapshot, err = client:ApiEntitiesPackagesConanRecipeSnapshot():load({ id = "api_entities_packages_conan_recipe_snapshot_id", package_channel = "package_channel", package_name = "package_name", package_username = "package_username", package_version = "package_version" })
```


### ApiEntitiesPackagesConanRevision

Create an instance: `local api_entities_packages_conan_revision = client:ApiEntitiesPackagesConanRevision(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `revision` | `string` |  |
| `time` | `string` |  |

#### Example: Load

```lua
local api_entities_packages_conan_revision, err = client:ApiEntitiesPackagesConanRevision():load({ conan_id = "conan_id", package_channel = "package_channel", package_username = "package_username", package_version = "package_version", project_id = "project_id" })
```


### ApiEntitiesPackagesConanUploadUrl

Create an instance: `local api_entities_packages_conan_upload_url = client:ApiEntitiesPackagesConanUploadUrl(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `upload_url` | `table` |  |

#### Example: Create

```lua
local api_entities_packages_conan_upload_url, err = client:ApiEntitiesPackagesConanUploadUrl():create({
  conan_id = "example_conan_id", -- string
  package_channel = "example_package_channel", -- any
  package_username = "example_package_username", -- any
  package_version = "example_package_version", -- any
})
```


### ApiEntitiesPackagesDebianDistribution

Create an instance: `local api_entities_packages_debian_distribution = client:ApiEntitiesPackagesDebianDistribution(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `architecture` | `table` |  |
| `codename` | `string` |  |
| `component` | `table` |  |
| `description` | `string` |  |
| `id` | `number` |  |
| `label` | `string` |  |
| `origin` | `string` |  |
| `suite` | `string` |  |
| `valid_time_duration_second` | `number` |  |
| `version` | `string` |  |

#### Example: Load

```lua
local api_entities_packages_debian_distribution, err = client:ApiEntitiesPackagesDebianDistribution():load({ id = "api_entities_packages_debian_distribution_id" })
```

#### Example: List

```lua
local api_entities_packages_debian_distributions, err = client:ApiEntitiesPackagesDebianDistribution():list()
```

#### Example: Create

```lua
local api_entities_packages_debian_distribution, err = client:ApiEntitiesPackagesDebianDistribution():create({
})
```


### ApiEntitiesPagesDomain

Create an instance: `local api_entities_pages_domain = client:ApiEntitiesPagesDomain(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auto_ssl_enabled` | `string` |  |
| `certificate` | `table` |  |
| `domain` | `string` |  |
| `enabled_until` | `string` |  |
| `url` | `string` |  |
| `verification_code` | `string` |  |
| `verified` | `boolean` |  |

#### Example: Load

```lua
local api_entities_pages_domain, err = client:ApiEntitiesPagesDomain():load({ id = "api_entities_pages_domain_id", project_id = "project_id" })
```

#### Example: List

```lua
local api_entities_pages_domains, err = client:ApiEntitiesPagesDomain():list()
```

#### Example: Create

```lua
local api_entities_pages_domain, err = client:ApiEntitiesPagesDomain():create({
  project_id = "example_project_id", -- string
})
```


### ApiEntitiesPagesDomainBasic

Create an instance: `local api_entities_pages_domain_basic = client:ApiEntitiesPagesDomainBasic(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auto_ssl_enabled` | `string` |  |
| `certificate_expiration` | `table` |  |
| `domain` | `string` |  |
| `enabled_until` | `string` |  |
| `project_id` | `string` |  |
| `url` | `string` |  |
| `verification_code` | `string` |  |
| `verified` | `boolean` |  |

#### Example: Load

```lua
local api_entities_pages_domain_basic, err = client:ApiEntitiesPagesDomainBasic():load()
```


### ApiEntitiesPersonalAccessToken

Create an instance: `local api_entities_personal_access_token = client:ApiEntitiesPersonalAccessToken(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `boolean` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `expires_at` | `string` |  |
| `id` | `number` |  |
| `last_used_at` | `string` |  |
| `name` | `string` |  |
| `revoked` | `boolean` |  |
| `scope` | `table` |  |
| `user_id` | `number` |  |

#### Example: List

```lua
local api_entities_personal_access_tokens, err = client:ApiEntitiesPersonalAccessToken():list()
```


### ApiEntitiesPersonalAccessTokenWithLastUsedIp

Create an instance: `local api_entities_personal_access_token_with_last_used_ip = client:ApiEntitiesPersonalAccessTokenWithLastUsedIp(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `boolean` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `expires_at` | `string` |  |
| `id` | `number` |  |
| `last_used_at` | `string` |  |
| `last_used_ip` | `table` |  |
| `name` | `string` |  |
| `revoked` | `boolean` |  |
| `scope` | `table` |  |
| `user_id` | `number` |  |

#### Example: Load

```lua
local api_entities_personal_access_token_with_last_used_ip, err = client:ApiEntitiesPersonalAccessTokenWithLastUsedIp():load({ id = "api_entities_personal_access_token_with_last_used_ip_id" })
```

#### Example: List

```lua
local api_entities_personal_access_token_with_last_used_ips, err = client:ApiEntitiesPersonalAccessTokenWithLastUsedIp():list()
```


### ApiEntitiesPersonalAccessTokenWithToken

Create an instance: `local api_entities_personal_access_token_with_token = client:ApiEntitiesPersonalAccessTokenWithToken(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `boolean` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `expires_at` | `string` |  |
| `id` | `number` |  |
| `last_used_at` | `string` |  |
| `name` | `string` |  |
| `revoked` | `boolean` |  |
| `scope` | `table` |  |
| `token` | `string` |  |
| `user_id` | `number` |  |

#### Example: Create

```lua
local api_entities_personal_access_token_with_token, err = client:ApiEntitiesPersonalAccessTokenWithToken():create({
})
```


### ApiEntitiesPersonalSnippet

Create an instance: `local api_entities_personal_snippet = client:ApiEntitiesPersonalSnippet(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author` | `table` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `file` | `table` |  |
| `file_name` | `string` |  |
| `http_url_to_repo` | `string` |  |
| `id` | `number` |  |
| `imported` | `boolean` |  |
| `imported_from` | `string` |  |
| `project_id` | `number` |  |
| `raw_url` | `string` |  |
| `repository_storage` | `string` |  |
| `ssh_url_to_repo` | `string` |  |
| `title` | `string` |  |
| `updated_at` | `string` |  |
| `visibility` | `string` |  |
| `web_url` | `string` |  |

#### Example: Load

```lua
local api_entities_personal_snippet, err = client:ApiEntitiesPersonalSnippet():load({ id = "api_entities_personal_snippet_id" })
```

#### Example: List

```lua
local api_entities_personal_snippets, err = client:ApiEntitiesPersonalSnippet():list()
```

#### Example: Create

```lua
local api_entities_personal_snippet, err = client:ApiEntitiesPersonalSnippet():create({
})
```


### ApiEntitiesPlanLimit

Create an instance: `local api_entities_plan_limit = client:ApiEntitiesPlanLimit(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ci_active_job` | `number` |  |
| `ci_instance_level_variable` | `number` |  |
| `ci_needs_size_limit` | `number` |  |
| `ci_pipeline_schedule` | `number` |  |
| `ci_pipeline_size` | `number` |  |
| `ci_project_subscription` | `number` |  |
| `ci_registered_group_runner` | `number` |  |
| `ci_registered_project_runner` | `number` |  |
| `conan_max_file_size` | `number` |  |
| `dotenv_size` | `number` |  |
| `dotenv_variable` | `number` |  |
| `enforcement_limit` | `number` |  |
| `generic_packages_max_file_size` | `number` |  |
| `helm_max_file_size` | `number` |  |
| `limits_history` | `table` |  |
| `maven_max_file_size` | `number` |  |
| `notification_limit` | `number` |  |
| `npm_max_file_size` | `number` |  |
| `nuget_max_file_size` | `number` |  |
| `pipeline_hierarchy_size` | `number` |  |
| `pypi_max_file_size` | `number` |  |
| `storage_size_limit` | `number` |  |
| `terraform_module_max_file_size` | `number` |  |

#### Example: Load

```lua
local api_entities_plan_limit, err = client:ApiEntitiesPlanLimit():load()
```


### ApiEntitiesProject

Create an instance: `local api_entities_project = client:ApiEntitiesProject(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_merge_on_skipped_pipeline` | `boolean` |  |
| `allow_pipeline_trigger_approve_deployment` | `boolean` |  |
| `analytics_access_level` | `string` |  |
| `approvals_before_merge` | `string` |  |
| `archived` | `boolean` |  |
| `auto_cancel_pending_pipeline` | `string` |  |
| `auto_devops_deploy_strategy` | `string` |  |
| `auto_devops_enabled` | `boolean` |  |
| `auto_duo_code_review_enabled` | `string` |  |
| `autoclose_referenced_issue` | `boolean` |  |
| `avatar_url` | `string` |  |
| `build_git_strategy` | `string` |  |
| `build_timeout` | `number` |  |
| `builds_access_level` | `string` |  |
| `can_create_merge_request_in` | `boolean` |  |
| `ci_allow_fork_pipelines_to_run_in_parent_project` | `boolean` |  |
| `ci_config_path` | `string` |  |
| `ci_default_git_depth` | `number` |  |
| `ci_delete_pipelines_in_second` | `number` |  |
| `ci_forward_deployment_enabled` | `boolean` |  |
| `ci_forward_deployment_rollback_allowed` | `boolean` |  |
| `ci_id_token_sub_claim_component` | `table` |  |
| `ci_job_token_scope_enabled` | `boolean` |  |
| `ci_pipeline_variables_minimum_override_role` | `string` |  |
| `ci_push_repository_for_job_token_allowed` | `boolean` |  |
| `ci_restrict_pipeline_cancellation_role` | `string` |  |
| `ci_separated_cache` | `boolean` |  |
| `compliance_framework` | `string` |  |
| `container_expiration_policy` | `table` |  |
| `container_registry_access_level` | `string` |  |
| `container_registry_enabled` | `boolean` |  |
| `container_registry_image_prefix` | `string` |  |
| `created_at` | `string` |  |
| `creator_id` | `number` |  |
| `custom_attribute` | `table` |  |
| `default_branch` | `string` |  |
| `description` | `string` |  |
| `description_html` | `string` |  |
| `duo_remote_flows_enabled` | `string` |  |
| `emails_disabled` | `boolean` |  |
| `emails_enabled` | `boolean` |  |
| `empty_repo` | `boolean` |  |
| `enforce_auth_checks_on_upload` | `boolean` |  |
| `environments_access_level` | `string` |  |
| `external_authorization_classification_label` | `string` |  |
| `feature_flags_access_level` | `string` |  |
| `forked_from_project` | `table` |  |
| `forking_access_level` | `string` |  |
| `forks_count` | `number` |  |
| `group_runners_enabled` | `boolean` |  |
| `http_url_to_repo` | `string` |  |
| `id` | `number` |  |
| `import_error` | `string` |  |
| `import_status` | `string` |  |
| `import_type` | `string` |  |
| `import_url` | `string` |  |
| `infrastructure_access_level` | `string` |  |
| `issue_branch_template` | `string` |  |
| `issues_access_level` | `string` |  |
| `issues_enabled` | `boolean` |  |
| `issues_template` | `string` |  |
| `jobs_enabled` | `boolean` |  |
| `keep_latest_artifact` | `boolean` |  |
| `last_activity_at` | `string` |  |
| `lfs_enabled` | `boolean` |  |
| `license` | `table` |  |
| `license_url` | `string` |  |
| `link` | `table` |  |
| `marked_for_deletion_at` | `string` |  |
| `marked_for_deletion_on` | `string` |  |
| `max_artifacts_size` | `number` |  |
| `merge_commit_template` | `string` |  |
| `merge_method` | `string` |  |
| `merge_pipelines_enabled` | `string` |  |
| `merge_request_title_regex` | `string` |  |
| `merge_request_title_regex_description` | `string` |  |
| `merge_requests_access_level` | `string` |  |
| `merge_requests_enabled` | `boolean` |  |
| `merge_requests_template` | `string` |  |
| `merge_trains_enabled` | `string` |  |
| `merge_trains_skip_train_allowed` | `string` |  |
| `mirror` | `string` |  |
| `mirror_overwrites_diverged_branch` | `string` |  |
| `mirror_trigger_build` | `string` |  |
| `mirror_user_id` | `string` |  |
| `model_experiments_access_level` | `string` |  |
| `model_registry_access_level` | `string` |  |
| `monitor_access_level` | `string` |  |
| `mr_default_target_self` | `boolean` |  |
| `name` | `string` |  |
| `name_with_namespace` | `string` |  |
| `namespace` | `table` |  |
| `only_allow_merge_if_all_discussions_are_resolved` | `boolean` |  |
| `only_allow_merge_if_all_status_checks_passed` | `string` |  |
| `only_allow_merge_if_pipeline_succeed` | `boolean` |  |
| `only_mirror_protected_branch` | `string` |  |
| `open_issues_count` | `number` |  |
| `owner` | `table` |  |
| `package_registry_access_level` | `string` |  |
| `packages_enabled` | `boolean` |  |
| `pages_access_level` | `string` |  |
| `path` | `string` |  |
| `path_with_namespace` | `string` |  |
| `pre_receive_secret_detection_enabled` | `boolean` |  |
| `prevent_merge_without_jira_issue` | `string` |  |
| `printing_merge_request_link_enabled` | `boolean` |  |
| `public_job` | `boolean` |  |
| `readme_url` | `string` |  |
| `releases_access_level` | `string` |  |
| `remove_source_branch_after_merge` | `boolean` |  |
| `repository_access_level` | `string` |  |
| `repository_object_format` | `string` |  |
| `repository_storage` | `string` |  |
| `request_access_enabled` | `boolean` |  |
| `requirements_access_level` | `string` |  |
| `requirements_enabled` | `string` |  |
| `resolve_outdated_diff_discussion` | `boolean` |  |
| `resource_group_default_process_mode` | `string` |  |
| `restrict_user_defined_variable` | `boolean` |  |
| `runner_token_expiration_interval` | `number` |  |
| `runners_token` | `string` |  |
| `secret_push_protection_enabled` | `boolean` |  |
| `security_and_compliance_access_level` | `string` |  |
| `security_and_compliance_enabled` | `string` |  |
| `service_desk_address` | `string` |  |
| `service_desk_enabled` | `boolean` |  |
| `shared_runners_enabled` | `boolean` |  |
| `shared_with_group` | `table` |  |
| `show_diff_preview_in_email` | `boolean` |  |
| `snippets_access_level` | `string` |  |
| `snippets_enabled` | `boolean` |  |
| `spp_repository_pipeline_access` | `boolean` |  |
| `squash_commit_template` | `string` |  |
| `squash_option` | `string` |  |
| `ssh_url_to_repo` | `string` |  |
| `star_count` | `number` |  |
| `statistic` | `table` |  |
| `suggestion_commit_message` | `string` |  |
| `tag_list` | `table` |  |
| `topic` | `table` |  |
| `updated_at` | `string` |  |
| `visibility` | `string` |  |
| `warn_about_potentially_unwanted_character` | `boolean` |  |
| `web_based_commit_signing_enabled` | `string` |  |
| `web_url` | `string` |  |
| `wiki_access_level` | `string` |  |
| `wiki_enabled` | `boolean` |  |

#### Example: List

```lua
local api_entities_projects, err = client:ApiEntitiesProject():list()
```

#### Example: Create

```lua
local api_entities_project, err = client:ApiEntitiesProject():create({
})
```


### ApiEntitiesProjectDailyStatistic

Create an instance: `local api_entities_project_daily_statistic = client:ApiEntitiesProjectDailyStatistic(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `fetch` | `table` |  |

#### Example: Load

```lua
local api_entities_project_daily_statistic, err = client:ApiEntitiesProjectDailyStatistic():load({ project_id = "project_id" })
```


### ApiEntitiesProjectExportStatus

Create an instance: `local api_entities_project_export_status = client:ApiEntitiesProjectExportStatus(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `export_status` | `string` |  |
| `id` | `number` |  |
| `link` | `table` |  |
| `name` | `string` |  |
| `name_with_namespace` | `string` |  |
| `path` | `string` |  |
| `path_with_namespace` | `string` |  |

#### Example: Load

```lua
local api_entities_project_export_status, err = client:ApiEntitiesProjectExportStatus():load({ project_id = "project_id" })
```


### ApiEntitiesProjectGroupLink

Create an instance: `local api_entities_project_group_link = client:ApiEntitiesProjectGroupLink(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```lua
local api_entities_project_group_link, err = client:ApiEntitiesProjectGroupLink():create({
  project_id = "example_project_id", -- string
})
```


### ApiEntitiesProjectHook

Create an instance: `local api_entities_project_hook = client:ApiEntitiesProjectHook(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alert_status` | `any` |  |
| `branch_filter_strategy` | `string` |  |
| `confidential_issues_event` | `boolean` |  |
| `confidential_note_event` | `boolean` |  |
| `created_at` | `string` |  |
| `custom_header` | `table` |  |
| `custom_webhook_template` | `string` |  |
| `deployment_event` | `boolean` |  |
| `description` | `string` |  |
| `disabled_until` | `string` |  |
| `emoji_event` | `boolean` |  |
| `enable_ssl_verification` | `boolean` |  |
| `feature_flag_event` | `boolean` |  |
| `id` | `string` |  |
| `issues_event` | `boolean` |  |
| `job_event` | `boolean` |  |
| `merge_requests_event` | `boolean` |  |
| `milestone_event` | `boolean` |  |
| `name` | `string` |  |
| `note_event` | `boolean` |  |
| `pipeline_event` | `boolean` |  |
| `project_id` | `string` |  |
| `push_event` | `boolean` |  |
| `push_events_branch_filter` | `string` |  |
| `releases_event` | `boolean` |  |
| `repository_update_event` | `boolean` |  |
| `resource_access_token_event` | `boolean` |  |
| `tag_push_event` | `boolean` |  |
| `url` | `string` |  |
| `url_variable` | `table` |  |
| `vulnerability_event` | `boolean` |  |
| `wiki_page_event` | `boolean` |  |

#### Example: Load

```lua
local api_entities_project_hook, err = client:ApiEntitiesProjectHook():load({ id = "api_entities_project_hook_id", project_id = "project_id" })
```

#### Example: List

```lua
local api_entities_project_hooks, err = client:ApiEntitiesProjectHook():list()
```

#### Example: Create

```lua
local api_entities_project_hook, err = client:ApiEntitiesProjectHook():create({
  project_id = "example_project_id", -- string
})
```


### ApiEntitiesProjectImportStatus

Create an instance: `local api_entities_project_import_status = client:ApiEntitiesProjectImportStatus(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `exception_class` | `string` |  |
| `exception_message` | `string` |  |
| `id` | `string` |  |
| `line_number` | `number` |  |
| `relation_name` | `string` |  |
| `source` | `string` |  |

#### Example: List

```lua
local api_entities_project_import_statuss, err = client:ApiEntitiesProjectImportStatus():list()
```

#### Example: Create

```lua
local api_entities_project_import_status, err = client:ApiEntitiesProjectImportStatus():create({
})
```


### ApiEntitiesProjectJobTokenScope

Create an instance: `local api_entities_project_job_token_scope = client:ApiEntitiesProjectJobTokenScope(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `inbound_enabled` | `boolean` |  |
| `outbound_enabled` | `boolean` |  |

#### Example: Load

```lua
local api_entities_project_job_token_scope, err = client:ApiEntitiesProjectJobTokenScope():load({ project_id = "project_id" })
```


### ApiEntitiesProjectRepositoryStorage

Create an instance: `local api_entities_project_repository_storage = client:ApiEntitiesProjectRepositoryStorage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `disk_path` | `string` |  |
| `project_id` | `number` |  |
| `repository_storage` | `string` |  |

#### Example: Load

```lua
local api_entities_project_repository_storage, err = client:ApiEntitiesProjectRepositoryStorage():load({ project_id = "project_id" })
```


### ApiEntitiesProjectSnippet

Create an instance: `local api_entities_project_snippet = client:ApiEntitiesProjectSnippet(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author` | `table` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `file` | `table` |  |
| `file_name` | `string` |  |
| `http_url_to_repo` | `string` |  |
| `id` | `number` |  |
| `imported` | `boolean` |  |
| `imported_from` | `string` |  |
| `project_id` | `number` |  |
| `raw_url` | `string` |  |
| `repository_storage` | `string` |  |
| `ssh_url_to_repo` | `string` |  |
| `title` | `string` |  |
| `updated_at` | `string` |  |
| `visibility` | `string` |  |
| `web_url` | `string` |  |

#### Example: Load

```lua
local api_entities_project_snippet, err = client:ApiEntitiesProjectSnippet():load({ id = "api_entities_project_snippet_id", project_id = "project_id" })
```

#### Example: List

```lua
local api_entities_project_snippets, err = client:ApiEntitiesProjectSnippet():list()
```

#### Example: Create

```lua
local api_entities_project_snippet, err = client:ApiEntitiesProjectSnippet():create({
  project_id = "example_project_id", -- string
})
```


### ApiEntitiesProjectUpload

Create an instance: `local api_entities_project_upload = client:ApiEntitiesProjectUpload(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```lua
local api_entities_project_upload, err = client:ApiEntitiesProjectUpload():create({
  project_id = "example_project_id", -- string
})
```


### ApiEntitiesProjectWithAccess

Create an instance: `local api_entities_project_with_access = client:ApiEntitiesProjectWithAccess(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_merge_on_skipped_pipeline` | `boolean` |  |
| `allow_pipeline_trigger_approve_deployment` | `boolean` |  |
| `analytics_access_level` | `string` |  |
| `approvals_before_merge` | `string` |  |
| `archived` | `boolean` |  |
| `auto_cancel_pending_pipeline` | `string` |  |
| `auto_devops_deploy_strategy` | `string` |  |
| `auto_devops_enabled` | `boolean` |  |
| `auto_duo_code_review_enabled` | `string` |  |
| `autoclose_referenced_issue` | `boolean` |  |
| `avatar_url` | `string` |  |
| `build_git_strategy` | `string` |  |
| `build_timeout` | `number` |  |
| `builds_access_level` | `string` |  |
| `can_create_merge_request_in` | `boolean` |  |
| `ci_allow_fork_pipelines_to_run_in_parent_project` | `boolean` |  |
| `ci_config_path` | `string` |  |
| `ci_default_git_depth` | `number` |  |
| `ci_delete_pipelines_in_second` | `number` |  |
| `ci_forward_deployment_enabled` | `boolean` |  |
| `ci_forward_deployment_rollback_allowed` | `boolean` |  |
| `ci_id_token_sub_claim_component` | `table` |  |
| `ci_job_token_scope_enabled` | `boolean` |  |
| `ci_pipeline_variables_minimum_override_role` | `string` |  |
| `ci_push_repository_for_job_token_allowed` | `boolean` |  |
| `ci_restrict_pipeline_cancellation_role` | `string` |  |
| `ci_separated_cache` | `boolean` |  |
| `compliance_framework` | `string` |  |
| `container_expiration_policy` | `table` |  |
| `container_registry_access_level` | `string` |  |
| `container_registry_enabled` | `boolean` |  |
| `container_registry_image_prefix` | `string` |  |
| `created_at` | `string` |  |
| `creator_id` | `number` |  |
| `custom_attribute` | `table` |  |
| `default_branch` | `string` |  |
| `description` | `string` |  |
| `description_html` | `string` |  |
| `duo_remote_flows_enabled` | `string` |  |
| `emails_disabled` | `boolean` |  |
| `emails_enabled` | `boolean` |  |
| `empty_repo` | `boolean` |  |
| `enforce_auth_checks_on_upload` | `boolean` |  |
| `environments_access_level` | `string` |  |
| `external_authorization_classification_label` | `string` |  |
| `feature_flags_access_level` | `string` |  |
| `forked_from_project` | `table` |  |
| `forking_access_level` | `string` |  |
| `forks_count` | `number` |  |
| `group_runners_enabled` | `boolean` |  |
| `http_url_to_repo` | `string` |  |
| `id` | `number` |  |
| `import_error` | `string` |  |
| `import_status` | `string` |  |
| `import_type` | `string` |  |
| `import_url` | `string` |  |
| `infrastructure_access_level` | `string` |  |
| `issue_branch_template` | `string` |  |
| `issues_access_level` | `string` |  |
| `issues_enabled` | `boolean` |  |
| `issues_template` | `string` |  |
| `jobs_enabled` | `boolean` |  |
| `keep_latest_artifact` | `boolean` |  |
| `last_activity_at` | `string` |  |
| `lfs_enabled` | `boolean` |  |
| `license` | `table` |  |
| `license_url` | `string` |  |
| `link` | `table` |  |
| `marked_for_deletion_at` | `string` |  |
| `marked_for_deletion_on` | `string` |  |
| `max_artifacts_size` | `number` |  |
| `merge_commit_template` | `string` |  |
| `merge_method` | `string` |  |
| `merge_pipelines_enabled` | `string` |  |
| `merge_request_title_regex` | `string` |  |
| `merge_request_title_regex_description` | `string` |  |
| `merge_requests_access_level` | `string` |  |
| `merge_requests_enabled` | `boolean` |  |
| `merge_requests_template` | `string` |  |
| `merge_trains_enabled` | `string` |  |
| `merge_trains_skip_train_allowed` | `string` |  |
| `mirror` | `string` |  |
| `mirror_overwrites_diverged_branch` | `string` |  |
| `mirror_trigger_build` | `string` |  |
| `mirror_user_id` | `string` |  |
| `model_experiments_access_level` | `string` |  |
| `model_registry_access_level` | `string` |  |
| `monitor_access_level` | `string` |  |
| `mr_default_target_self` | `boolean` |  |
| `name` | `string` |  |
| `name_with_namespace` | `string` |  |
| `namespace` | `table` |  |
| `only_allow_merge_if_all_discussions_are_resolved` | `boolean` |  |
| `only_allow_merge_if_all_status_checks_passed` | `string` |  |
| `only_allow_merge_if_pipeline_succeed` | `boolean` |  |
| `only_mirror_protected_branch` | `string` |  |
| `open_issues_count` | `number` |  |
| `owner` | `table` |  |
| `package_registry_access_level` | `string` |  |
| `packages_enabled` | `boolean` |  |
| `pages_access_level` | `string` |  |
| `path` | `string` |  |
| `path_with_namespace` | `string` |  |
| `permission` | `table` |  |
| `pre_receive_secret_detection_enabled` | `boolean` |  |
| `prevent_merge_without_jira_issue` | `string` |  |
| `printing_merge_request_link_enabled` | `boolean` |  |
| `public_job` | `boolean` |  |
| `readme_url` | `string` |  |
| `releases_access_level` | `string` |  |
| `remove_source_branch_after_merge` | `boolean` |  |
| `repository_access_level` | `string` |  |
| `repository_object_format` | `string` |  |
| `repository_storage` | `string` |  |
| `request_access_enabled` | `boolean` |  |
| `requirements_access_level` | `string` |  |
| `requirements_enabled` | `string` |  |
| `resolve_outdated_diff_discussion` | `boolean` |  |
| `resource_group_default_process_mode` | `string` |  |
| `restrict_user_defined_variable` | `boolean` |  |
| `runner_token_expiration_interval` | `number` |  |
| `runners_token` | `string` |  |
| `secret_push_protection_enabled` | `boolean` |  |
| `security_and_compliance_access_level` | `string` |  |
| `security_and_compliance_enabled` | `string` |  |
| `service_desk_address` | `string` |  |
| `service_desk_enabled` | `boolean` |  |
| `shared_runners_enabled` | `boolean` |  |
| `shared_with_group` | `table` |  |
| `show_diff_preview_in_email` | `boolean` |  |
| `snippets_access_level` | `string` |  |
| `snippets_enabled` | `boolean` |  |
| `spp_repository_pipeline_access` | `boolean` |  |
| `squash_commit_template` | `string` |  |
| `squash_option` | `string` |  |
| `ssh_url_to_repo` | `string` |  |
| `star_count` | `number` |  |
| `statistic` | `table` |  |
| `suggestion_commit_message` | `string` |  |
| `tag_list` | `table` |  |
| `topic` | `table` |  |
| `updated_at` | `string` |  |
| `visibility` | `string` |  |
| `warn_about_potentially_unwanted_character` | `boolean` |  |
| `web_based_commit_signing_enabled` | `string` |  |
| `web_url` | `string` |  |
| `wiki_access_level` | `string` |  |
| `wiki_enabled` | `boolean` |  |

#### Example: Load

```lua
local api_entities_project_with_access, err = client:ApiEntitiesProjectWithAccess():load({ id = "api_entities_project_with_access_id" })
```


### ApiEntitiesProjectsContainerRegistryProtectionRule

Create an instance: `local api_entities_projects_container_registry_protection_rule = client:ApiEntitiesProjectsContainerRegistryProtectionRule(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `number` |  |
| `minimum_access_level_for_delete` | `string` |  |
| `minimum_access_level_for_push` | `string` |  |
| `project_id` | `number` |  |
| `repository_path_pattern` | `string` |  |

#### Example: List

```lua
local api_entities_projects_container_registry_protection_rules, err = client:ApiEntitiesProjectsContainerRegistryProtectionRule():list()
```

#### Example: Create

```lua
local api_entities_projects_container_registry_protection_rule, err = client:ApiEntitiesProjectsContainerRegistryProtectionRule():create({
  project_id = "example_project_id", -- string
})
```


### ApiEntitiesProjectsPackagesProtectionRule

Create an instance: `local api_entities_projects_packages_protection_rule = client:ApiEntitiesProjectsPackagesProtectionRule(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `number` |  |
| `minimum_access_level_for_delete` | `string` |  |
| `minimum_access_level_for_push` | `string` |  |
| `package_name_pattern` | `string` |  |
| `package_type` | `string` |  |
| `project_id` | `number` |  |

#### Example: List

```lua
local api_entities_projects_packages_protection_rules, err = client:ApiEntitiesProjectsPackagesProtectionRule():list()
```

#### Example: Create

```lua
local api_entities_projects_packages_protection_rule, err = client:ApiEntitiesProjectsPackagesProtectionRule():create({
  project_id = "example_project_id", -- string
})
```


### ApiEntitiesProjectsTopic

Create an instance: `local api_entities_projects_topic = client:ApiEntitiesProjectsTopic(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_url` | `string` |  |
| `description` | `string` |  |
| `id` | `string` |  |
| `name` | `string` |  |
| `organization_id` | `string` |  |
| `title` | `string` |  |
| `total_projects_count` | `string` |  |

#### Example: Load

```lua
local api_entities_projects_topic, err = client:ApiEntitiesProjectsTopic():load({ id = "api_entities_projects_topic_id" })
```

#### Example: Create

```lua
local api_entities_projects_topic, err = client:ApiEntitiesProjectsTopic():create({
})
```


### ApiEntitiesProtectedBranch

Create an instance: `local api_entities_protected_branch = client:ApiEntitiesProtectedBranch(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_force_push` | `boolean` |  |
| `code_owner_approval_required` | `boolean` |  |
| `id` | `number` |  |
| `inherited` | `boolean` |  |
| `merge_access_level` | `table` |  |
| `name` | `string` |  |
| `push_access_level` | `table` |  |
| `unprotect_access_level` | `table` |  |

#### Example: Load

```lua
local api_entities_protected_branch, err = client:ApiEntitiesProtectedBranch():load({ id = "api_entities_protected_branch_id", project_id = "project_id" })
```

#### Example: List

```lua
local api_entities_protected_branchs, err = client:ApiEntitiesProtectedBranch():list()
```

#### Example: Create

```lua
local api_entities_protected_branch, err = client:ApiEntitiesProtectedBranch():create({
  project_id = "example_project_id", -- string
})
```


### ApiEntitiesProtectedTag

Create an instance: `local api_entities_protected_tag = client:ApiEntitiesProtectedTag(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `create_access_level` | `table` |  |
| `name` | `string` |  |

#### Example: Load

```lua
local api_entities_protected_tag, err = client:ApiEntitiesProtectedTag():load({ id = "api_entities_protected_tag_id", project_id = "project_id" })
```

#### Example: List

```lua
local api_entities_protected_tags, err = client:ApiEntitiesProtectedTag():list()
```

#### Example: Create

```lua
local api_entities_protected_tag, err = client:ApiEntitiesProtectedTag():create({
  project_id = "example_project_id", -- string
})
```


### ApiEntitiesPublicGroupDetail

Create an instance: `local api_entities_public_group_detail = client:ApiEntitiesPublicGroupDetail(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_url` | `string` |  |
| `full_name` | `string` |  |
| `full_path` | `string` |  |
| `id` | `string` |  |
| `name` | `string` |  |
| `web_url` | `string` |  |

#### Example: List

```lua
local api_entities_public_group_details, err = client:ApiEntitiesPublicGroupDetail():list()
```


### ApiEntitiesRelatedIssue

Create an instance: `local api_entities_related_issue = client:ApiEntitiesRelatedIssue(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assignee` | `table` |  |
| `author` | `table` |  |
| `blocking_issues_count` | `string` |  |
| `closed_at` | `string` |  |
| `closed_by` | `table` |  |
| `confidential` | `boolean` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `discussion_locked` | `boolean` |  |
| `downvote` | `string` |  |
| `due_date` | `string` |  |
| `epic` | `table` |  |
| `epic_iid` | `string` |  |
| `has_task` | `boolean` |  |
| `health_status` | `string` |  |
| `id` | `number` |  |
| `iid` | `number` |  |
| `imported` | `string` |  |
| `imported_from` | `string` |  |
| `issue_link_id` | `string` |  |
| `issue_type` | `string` |  |
| `iteration` | `table` |  |
| `label` | `table` |  |
| `link` | `table` |  |
| `link_created_at` | `string` |  |
| `link_type` | `string` |  |
| `link_updated_at` | `string` |  |
| `merge_requests_count` | `string` |  |
| `milestone` | `table` |  |
| `moved_to_id` | `string` |  |
| `project_id` | `number` |  |
| `reference` | `table` |  |
| `service_desk_reply_to` | `string` |  |
| `severity` | `string` |  |
| `state` | `string` |  |
| `subscribed` | `string` |  |
| `task_completion_status` | `string` |  |
| `task_status` | `string` |  |
| `time_stat` | `table` |  |
| `title` | `string` |  |
| `type` | `string` |  |
| `updated_at` | `string` |  |
| `upvote` | `string` |  |
| `user_notes_count` | `string` |  |
| `web_url` | `string` |  |
| `weight` | `string` |  |

#### Example: List

```lua
local api_entities_related_issues, err = client:ApiEntitiesRelatedIssue():list()
```


### ApiEntitiesRelationImportTracker

Create an instance: `local api_entities_relation_import_tracker = client:ApiEntitiesRelationImportTracker(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```lua
local api_entities_relation_import_tracker, err = client:ApiEntitiesRelationImportTracker():create({
})
```


### ApiEntitiesRelease

Create an instance: `local api_entities_release = client:ApiEntitiesRelease(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `asset` | `table` |  |
| `author` | `table` |  |
| `commit` | `table` |  |
| `commit_path` | `string` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `description_html` | `string` |  |
| `evidence` | `table` |  |
| `link` | `table` |  |
| `milestone` | `table` |  |
| `name` | `string` |  |
| `released_at` | `string` |  |
| `tag_name` | `string` |  |
| `tag_path` | `string` |  |
| `upcoming_release` | `boolean` |  |

#### Example: Load

```lua
local api_entities_release, err = client:ApiEntitiesRelease():load({ id = "api_entities_release_id", project_id = "project_id" })
```

#### Example: List

```lua
local api_entities_releases, err = client:ApiEntitiesRelease():list()
```

#### Example: Create

```lua
local api_entities_release, err = client:ApiEntitiesRelease():create({
  project_id = "example_project_id", -- string
})
```


### ApiEntitiesReleasesLink

Create an instance: `local api_entities_releases_link = client:ApiEntitiesReleasesLink(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `direct_asset_url` | `string` |  |
| `id` | `number` |  |
| `link_type` | `string` |  |
| `name` | `string` |  |
| `url` | `string` |  |

#### Example: Load

```lua
local api_entities_releases_link, err = client:ApiEntitiesReleasesLink():load({ id = "api_entities_releases_link_id", project_id = "project_id", release_id = "release_id" })
```

#### Example: List

```lua
local api_entities_releases_links, err = client:ApiEntitiesReleasesLink():list()
```

#### Example: Create

```lua
local api_entities_releases_link, err = client:ApiEntitiesReleasesLink():create({
  project_id = "example_project_id", -- string
  release_id = "example_release_id", -- string
})
```


### ApiEntitiesRemoteMirror

Create an instance: `local api_entities_remote_mirror = client:ApiEntitiesRemoteMirror(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_method` | `string` |  |
| `enabled` | `boolean` |  |
| `host_key` | `table` |  |
| `id` | `number` |  |
| `keep_divergent_ref` | `boolean` |  |
| `last_error` | `number` |  |
| `last_successful_update_at` | `string` |  |
| `last_update_at` | `string` |  |
| `last_update_started_at` | `string` |  |
| `mirror_branch_regex` | `string` |  |
| `only_protected_branch` | `boolean` |  |
| `update_status` | `string` |  |
| `url` | `string` |  |

#### Example: Load

```lua
local api_entities_remote_mirror, err = client:ApiEntitiesRemoteMirror():load({ id = "api_entities_remote_mirror_id", project_id = "project_id" })
```

#### Example: List

```lua
local api_entities_remote_mirrors, err = client:ApiEntitiesRemoteMirror():list()
```

#### Example: Create

```lua
local api_entities_remote_mirror, err = client:ApiEntitiesRemoteMirror():create({
  project_id = "example_project_id", -- string
})
```


### ApiEntitiesRepositoryHealth

Create an instance: `local api_entities_repository_health = client:ApiEntitiesRepositoryHealth(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alternate` | `table` |  |
| `bitmap` | `table` |  |
| `commit_graph` | `table` |  |
| `is_object_pool` | `boolean` |  |
| `last_full_repack` | `table` |  |
| `multi_pack_index` | `table` |  |
| `multi_pack_index_bitmap` | `table` |  |
| `object` | `table` |  |
| `reference` | `table` |  |
| `size` | `number` |  |
| `updated_at` | `string` |  |

#### Example: Load

```lua
local api_entities_repository_health, err = client:ApiEntitiesRepositoryHealth():load({ project_id = "project_id" })
```


### ApiEntitiesResourceAccessTokenWithToken

Create an instance: `local api_entities_resource_access_token_with_token = client:ApiEntitiesResourceAccessTokenWithToken(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `access_level` | `number` |  |
| `active` | `boolean` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `expires_at` | `string` |  |
| `id` | `number` |  |
| `last_used_at` | `string` |  |
| `name` | `string` |  |
| `resource_id` | `number` |  |
| `resource_type` | `string` |  |
| `revoked` | `boolean` |  |
| `scope` | `table` |  |
| `token` | `string` |  |
| `user_id` | `number` |  |

#### Example: Create

```lua
local api_entities_resource_access_token_with_token, err = client:ApiEntitiesResourceAccessTokenWithToken():create({
})
```


### ApiEntitiesResourceMilestoneEvent

Create an instance: `local api_entities_resource_milestone_event = client:ApiEntitiesResourceMilestoneEvent(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action` | `string` |  |
| `created_at` | `string` |  |
| `id` | `number` |  |
| `milestone` | `table` |  |
| `resource_id` | `number` |  |
| `resource_type` | `string` |  |
| `state` | `string` |  |
| `user` | `table` |  |

#### Example: Load

```lua
local api_entities_resource_milestone_event, err = client:ApiEntitiesResourceMilestoneEvent():load({ id = "api_entities_resource_milestone_event_id", project_id = "project_id" })
```

#### Example: List

```lua
local api_entities_resource_milestone_events, err = client:ApiEntitiesResourceMilestoneEvent():list()
```


### ApiEntitiesSnippet

Create an instance: `local api_entities_snippet = client:ApiEntitiesSnippet(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author` | `table` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `file` | `table` |  |
| `file_name` | `string` |  |
| `http_url_to_repo` | `string` |  |
| `id` | `number` |  |
| `imported` | `boolean` |  |
| `imported_from` | `string` |  |
| `project_id` | `number` |  |
| `raw_url` | `string` |  |
| `repository_storage` | `string` |  |
| `ssh_url_to_repo` | `string` |  |
| `title` | `string` |  |
| `updated_at` | `string` |  |
| `visibility` | `string` |  |
| `web_url` | `string` |  |

#### Example: List

```lua
local api_entities_snippets, err = client:ApiEntitiesSnippet():list()
```


### ApiEntitiesSshKeyWithUser

Create an instance: `local api_entities_ssh_key_with_user = client:ApiEntitiesSshKeyWithUser(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `expires_at` | `string` |  |
| `id` | `number` |  |
| `key` | `string` |  |
| `last_used_at` | `string` |  |
| `title` | `string` |  |
| `usage_type` | `string` |  |
| `user` | `table` |  |

#### Example: Load

```lua
local api_entities_ssh_key_with_user, err = client:ApiEntitiesSshKeyWithUser():load({ id = "api_entities_ssh_key_with_user_id" })
```


### ApiEntitiesSuggestion

Create an instance: `local api_entities_suggestion = client:ApiEntitiesSuggestion(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `appliable` | `string` |  |
| `applied` | `string` |  |
| `from_content` | `string` |  |
| `from_line` | `string` |  |
| `id` | `string` |  |
| `to_content` | `string` |  |
| `to_line` | `string` |  |


### ApiEntitiesSystemBroadcastMessage

Create an instance: `local api_entities_system_broadcast_message = client:ApiEntitiesSystemBroadcastMessage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `boolean` |  |
| `broadcast_type` | `string` |  |
| `color` | `string` |  |
| `dismissable` | `string` |  |
| `ends_at` | `string` |  |
| `font` | `string` |  |
| `id` | `string` |  |
| `message` | `string` |  |
| `starts_at` | `string` |  |
| `target_access_level` | `string` |  |
| `target_path` | `string` |  |
| `theme` | `string` |  |

#### Example: Load

```lua
local api_entities_system_broadcast_message, err = client:ApiEntitiesSystemBroadcastMessage():load({ id = "api_entities_system_broadcast_message_id" })
```

#### Example: Create

```lua
local api_entities_system_broadcast_message, err = client:ApiEntitiesSystemBroadcastMessage():create({
})
```


### ApiEntitiesTag

Create an instance: `local api_entities_tag = client:ApiEntitiesTag(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `commit` | `table` |  |
| `created_at` | `string` |  |
| `message` | `string` |  |
| `name` | `string` |  |
| `protected` | `boolean` |  |
| `release` | `table` |  |
| `target` | `string` |  |

#### Example: Load

```lua
local api_entities_tag, err = client:ApiEntitiesTag():load({ id = "api_entities_tag_id", project_id = "project_id" })
```

#### Example: List

```lua
local api_entities_tags, err = client:ApiEntitiesTag():list()
```

#### Example: Create

```lua
local api_entities_tag, err = client:ApiEntitiesTag():create({
  project_id = "example_project_id", -- string
})
```


### ApiEntitiesTagSignature

Create an instance: `local api_entities_tag_signature = client:ApiEntitiesTagSignature(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `signature` | `string` |  |
| `signature_type` | `string` |  |

#### Example: Load

```lua
local api_entities_tag_signature, err = client:ApiEntitiesTagSignature():load({ project_id = "project_id", tag_name = "tag_name" })
```


### ApiEntitiesTemplatesList

Create an instance: `local api_entities_templates_list = client:ApiEntitiesTemplatesList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `key` | `string` |  |
| `name` | `string` |  |

#### Example: Load

```lua
local api_entities_templates_list, err = client:ApiEntitiesTemplatesList():load({ project_id = "project_id", type = "type" })
```


### ApiEntitiesTerraformModuleVersion

Create an instance: `local api_entities_terraform_module_version = client:ApiEntitiesTerraformModuleVersion(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `module` | `string` |  |
| `name` | `string` |  |
| `provider` | `string` |  |
| `root` | `string` |  |
| `source` | `string` |  |
| `submodule` | `string` |  |
| `version` | `string` |  |

#### Example: Load

```lua
local api_entities_terraform_module_version, err = client:ApiEntitiesTerraformModuleVersion():load({ module_name = "module_name", module_system = "module_system" })
```

#### Example: List

```lua
local api_entities_terraform_module_versions, err = client:ApiEntitiesTerraformModuleVersion():list()
```


### ApiEntitiesTreeObject

Create an instance: `local api_entities_tree_object = client:ApiEntitiesTreeObject(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `path` | `string` |  |
| `type` | `string` |  |

#### Example: Load

```lua
local api_entities_tree_object, err = client:ApiEntitiesTreeObject():load({ project_id = "project_id" })
```


### ApiEntitiesTrigger

Create an instance: `local api_entities_trigger = client:ApiEntitiesTrigger(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `expires_at` | `string` |  |
| `id` | `number` |  |
| `last_used` | `string` |  |
| `owner` | `table` |  |
| `token` | `string` |  |
| `updated_at` | `string` |  |

#### Example: Load

```lua
local api_entities_trigger, err = client:ApiEntitiesTrigger():load({ id = "api_entities_trigger_id", project_id = "project_id" })
```

#### Example: List

```lua
local api_entities_triggers, err = client:ApiEntitiesTrigger():list()
```

#### Example: Create

```lua
local api_entities_trigger, err = client:ApiEntitiesTrigger():create({
  project_id = "example_project_id", -- string
})
```


### ApiEntitiesUserAgentDetail

Create an instance: `local api_entities_user_agent_detail = client:ApiEntitiesUserAgentDetail(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `akismet_submitted` | `boolean` |  |
| `ip_address` | `string` |  |
| `user_agent` | `string` |  |

#### Example: Load

```lua
local api_entities_user_agent_detail, err = client:ApiEntitiesUserAgentDetail():load()
```


### ApiEntitiesUserCount

Create an instance: `local api_entities_user_count = client:ApiEntitiesUserCount(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assigned_issue` | `number` |  |
| `assigned_merge_request` | `number` |  |
| `merge_request` | `number` |  |
| `review_requested_merge_request` | `number` |  |
| `todo` | `number` |  |

#### Example: Load

```lua
local api_entities_user_count, err = client:ApiEntitiesUserCount():load()
```


### ApiEntitiesUserPublic

Create an instance: `local api_entities_user_public = client:ApiEntitiesUserPublic(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_path` | `string` |  |
| `avatar_url` | `string` |  |
| `bio` | `string` |  |
| `bot` | `string` |  |
| `can_create_group` | `boolean` |  |
| `can_create_project` | `boolean` |  |
| `color_scheme_id` | `number` |  |
| `commit_email` | `string` |  |
| `confirmed_at` | `string` |  |
| `created_at` | `string` |  |
| `current_sign_in_at` | `string` |  |
| `custom_attribute` | `table` |  |
| `discord` | `string` |  |
| `email` | `string` |  |
| `external` | `string` |  |
| `extra_shared_runners_minutes_limit` | `string` |  |
| `follower` | `string` |  |
| `following` | `string` |  |
| `github` | `string` |  |
| `id` | `number` |  |
| `identity` | `table` |  |
| `is_followed` | `boolean` |  |
| `job_title` | `string` |  |
| `key` | `string` |  |
| `last_activity_on` | `string` |  |
| `last_sign_in_at` | `string` |  |
| `linkedin` | `string` |  |
| `local_time` | `string` |  |
| `location` | `string` |  |
| `locked` | `boolean` |  |
| `name` | `string` |  |
| `organization` | `string` |  |
| `preferred_language` | `string` |  |
| `private_profile` | `boolean` |  |
| `projects_limit` | `number` |  |
| `pronoun` | `string` |  |
| `public_email` | `string` |  |
| `scim_identity` | `table` |  |
| `shared_runners_minutes_limit` | `string` |  |
| `state` | `string` |  |
| `theme_id` | `number` |  |
| `twitter` | `string` |  |
| `two_factor_enabled` | `boolean` |  |
| `username` | `string` |  |
| `value` | `string` |  |
| `web_url` | `string` |  |
| `website_url` | `string` |  |
| `work_information` | `string` |  |

#### Example: List

```lua
local api_entities_user_publics, err = client:ApiEntitiesUserPublic():list()
```


### ApiEntitiesUserWithAdmin

Create an instance: `local api_entities_user_with_admin = client:ApiEntitiesUserWithAdmin(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `key` | `string` |  |
| `value` | `string` |  |

#### Example: List

```lua
local api_entities_user_with_admins, err = client:ApiEntitiesUserWithAdmin():list()
```


### ApiEntitiesWikiAttachment

Create an instance: `local api_entities_wiki_attachment = client:ApiEntitiesWikiAttachment(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```lua
local api_entities_wiki_attachment, err = client:ApiEntitiesWikiAttachment():create({
})
```


### ApiEntitiesWikiPage

Create an instance: `local api_entities_wiki_page = client:ApiEntitiesWikiPage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `content` | `string` |  |
| `encoding` | `string` |  |
| `format` | `string` |  |
| `front_matter` | `table` |  |
| `slug` | `string` |  |
| `title` | `string` |  |
| `wiki_page_meta_id` | `number` |  |

#### Example: Load

```lua
local api_entities_wiki_page, err = client:ApiEntitiesWikiPage():load({ slug = "slug" })
```

#### Example: Create

```lua
local api_entities_wiki_page, err = client:ApiEntitiesWikiPage():create({
})
```


### ApiEntitiesWikiPageBasic

Create an instance: `local api_entities_wiki_page_basic = client:ApiEntitiesWikiPageBasic(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `format` | `string` |  |
| `slug` | `string` |  |
| `title` | `string` |  |
| `wiki_page_meta_id` | `number` |  |

#### Example: List

```lua
local api_entities_wiki_page_basics, err = client:ApiEntitiesWikiPageBasic():list()
```


### Application

Create an instance: `local application = client:Application(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### AwardEmoji

Create an instance: `local award_emoji = client:AwardEmoji(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### Badge

Create an instance: `local badge = client:Badge(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### Branch

Create an instance: `local branch = client:Branch(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### CargoPackage

Create an instance: `local cargo_package = client:CargoPackage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```lua
local cargo_package, err = client:CargoPackage():load({ project_id = "project_id" })
```


### CiVariable

Create an instance: `local ci_variable = client:CiVariable(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### Cluster

Create an instance: `local cluster = client:Cluster(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### ClusterAgent

Create an instance: `local cluster_agent = client:ClusterAgent(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### Composer

Create an instance: `local composer = client:Composer(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```lua
local composer, err = client:Composer():create({
  project_id = "example_project_id", -- string
})
```


### ComposerPackage

Create an instance: `local composer_package = client:ComposerPackage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```lua
local composer_package, err = client:ComposerPackage():load()
```


### Conan

Create an instance: `local conan = client:Conan(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### ConanPackage

Create an instance: `local conan_package = client:ConanPackage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Example: Load

```lua
local conan_package, err = client:ConanPackage():load({ id = "conan_package_id" })
```


### ContainerRegistry

Create an instance: `local container_registry = client:ContainerRegistry(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### ContainerRegistryEvent

Create an instance: `local container_registry_event = client:ContainerRegistryEvent(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```lua
local container_registry_event, err = client:ContainerRegistryEvent():create({
})
```


### CustomAttribute

Create an instance: `local custom_attribute = client:CustomAttribute(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `key` | `string` |  |
| `value` | `string` |  |

#### Example: Load

```lua
local custom_attribute, err = client:CustomAttribute():load({ id = "custom_attribute_id" })
```


### Debian

Create an instance: `local debian = client:Debian(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |


### DebianDistribution

Create an instance: `local debian_distribution = client:DebianDistribution(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### DebianPackage

Create an instance: `local debian_package = client:DebianPackage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Example: Load

```lua
local debian_package, err = client:DebianPackage():load({ id = "debian_package_id" })
```


### DependencyProxy

Create an instance: `local dependency_proxy = client:DependencyProxy(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### DeployKey

Create an instance: `local deploy_key = client:DeployKey(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### DeployToken

Create an instance: `local deploy_token = client:DeployToken(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### Deployment

Create an instance: `local deployment = client:Deployment(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### EeApiEntitiesApprovalState

Create an instance: `local ee_api_entities_approval_state = client:EeApiEntitiesApprovalState(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```lua
local ee_api_entities_approval_state, err = client:EeApiEntitiesApprovalState():create({
  merge_request_id = "example_merge_request_id", -- string
  project_id = "example_project_id", -- string
})
```


### EeApiEntitiesAuditEvent

Create an instance: `local ee_api_entities_audit_event = client:EeApiEntitiesAuditEvent(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author_id` | `string` |  |
| `created_at` | `string` |  |
| `detail` | `string` |  |
| `entity_id` | `string` |  |
| `entity_type` | `string` |  |
| `event_name` | `string` |  |
| `id` | `string` |  |

#### Example: Load

```lua
local ee_api_entities_audit_event, err = client:EeApiEntitiesAuditEvent():load({ id = "ee_api_entities_audit_event_id" })
```

#### Example: List

```lua
local ee_api_entities_audit_events, err = client:EeApiEntitiesAuditEvent():list()
```


### EeApiEntitiesBillableMembership

Create an instance: `local ee_api_entities_billable_membership = client:EeApiEntitiesBillableMembership(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `access_level` | `table` |  |
| `created_at` | `string` |  |
| `expires_at` | `string` |  |
| `id` | `string` |  |
| `source_full_name` | `string` |  |
| `source_id` | `string` |  |
| `source_members_url` | `string` |  |

#### Example: Load

```lua
local ee_api_entities_billable_membership, err = client:EeApiEntitiesBillableMembership():load({ billable_member_id = "billable_member_id", group_id = "group_id" })
```


### EeApiEntitiesGeoNodeStatus

Create an instance: `local ee_api_entities_geo_node_status = client:EeApiEntitiesGeoNodeStatus(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ci_secure_files_checksum_failed_count` | `string` |  |
| `ci_secure_files_checksum_total_count` | `string` |  |
| `ci_secure_files_checksummed_count` | `string` |  |
| `ci_secure_files_count` | `string` |  |
| `ci_secure_files_failed_count` | `string` |  |
| `ci_secure_files_registry_count` | `string` |  |
| `ci_secure_files_synced_count` | `string` |  |
| `ci_secure_files_synced_in_percentage` | `string` |  |
| `ci_secure_files_verification_failed_count` | `string` |  |
| `ci_secure_files_verification_total_count` | `string` |  |
| `ci_secure_files_verified_count` | `string` |  |
| `ci_secure_files_verified_in_percentage` | `string` |  |
| `container_repositories_checksum_failed_count` | `string` |  |
| `container_repositories_checksum_total_count` | `string` |  |
| `container_repositories_checksummed_count` | `string` |  |
| `container_repositories_count` | `string` |  |
| `container_repositories_failed_count` | `string` |  |
| `container_repositories_registry_count` | `string` |  |
| `container_repositories_replication_enabled` | `string` |  |
| `container_repositories_synced_count` | `string` |  |
| `container_repositories_synced_in_percentage` | `string` |  |
| `container_repositories_verification_failed_count` | `string` |  |
| `container_repositories_verification_total_count` | `string` |  |
| `container_repositories_verified_count` | `string` |  |
| `container_repositories_verified_in_percentage` | `string` |  |
| `cursor_last_event_id` | `string` |  |
| `cursor_last_event_timestamp` | `string` |  |
| `db_replication_lag_second` | `string` |  |
| `dependency_proxy_blobs_checksum_failed_count` | `string` |  |
| `dependency_proxy_blobs_checksum_total_count` | `string` |  |
| `dependency_proxy_blobs_checksummed_count` | `string` |  |
| `dependency_proxy_blobs_count` | `string` |  |
| `dependency_proxy_blobs_failed_count` | `string` |  |
| `dependency_proxy_blobs_registry_count` | `string` |  |
| `dependency_proxy_blobs_synced_count` | `string` |  |
| `dependency_proxy_blobs_synced_in_percentage` | `string` |  |
| `dependency_proxy_blobs_verification_failed_count` | `string` |  |
| `dependency_proxy_blobs_verification_total_count` | `string` |  |
| `dependency_proxy_blobs_verified_count` | `string` |  |
| `dependency_proxy_blobs_verified_in_percentage` | `string` |  |
| `dependency_proxy_manifests_checksum_failed_count` | `string` |  |
| `dependency_proxy_manifests_checksum_total_count` | `string` |  |
| `dependency_proxy_manifests_checksummed_count` | `string` |  |
| `dependency_proxy_manifests_count` | `string` |  |
| `dependency_proxy_manifests_failed_count` | `string` |  |
| `dependency_proxy_manifests_registry_count` | `string` |  |
| `dependency_proxy_manifests_synced_count` | `string` |  |
| `dependency_proxy_manifests_synced_in_percentage` | `string` |  |
| `dependency_proxy_manifests_verification_failed_count` | `string` |  |
| `dependency_proxy_manifests_verification_total_count` | `string` |  |
| `dependency_proxy_manifests_verified_count` | `string` |  |
| `dependency_proxy_manifests_verified_in_percentage` | `string` |  |
| `design_management_repositories_checksum_failed_count` | `string` |  |
| `design_management_repositories_checksum_total_count` | `string` |  |
| `design_management_repositories_checksummed_count` | `string` |  |
| `design_management_repositories_count` | `string` |  |
| `design_management_repositories_failed_count` | `string` |  |
| `design_management_repositories_registry_count` | `string` |  |
| `design_management_repositories_synced_count` | `string` |  |
| `design_management_repositories_synced_in_percentage` | `string` |  |
| `design_management_repositories_verification_failed_count` | `string` |  |
| `design_management_repositories_verification_total_count` | `string` |  |
| `design_management_repositories_verified_count` | `string` |  |
| `design_management_repositories_verified_in_percentage` | `string` |  |
| `geo_node_id` | `string` |  |
| `git_fetch_event_count_weekly` | `string` |  |
| `git_push_event_count_weekly` | `string` |  |
| `group_wiki_repositories_checksum_failed_count` | `string` |  |
| `group_wiki_repositories_checksum_total_count` | `string` |  |
| `group_wiki_repositories_checksummed_count` | `string` |  |
| `group_wiki_repositories_count` | `string` |  |
| `group_wiki_repositories_failed_count` | `string` |  |
| `group_wiki_repositories_registry_count` | `string` |  |
| `group_wiki_repositories_synced_count` | `string` |  |
| `group_wiki_repositories_synced_in_percentage` | `string` |  |
| `group_wiki_repositories_verification_failed_count` | `string` |  |
| `group_wiki_repositories_verification_total_count` | `string` |  |
| `group_wiki_repositories_verified_count` | `string` |  |
| `group_wiki_repositories_verified_in_percentage` | `string` |  |
| `health` | `string` |  |
| `health_status` | `string` |  |
| `healthy` | `string` |  |
| `job_artifacts_checksum_failed_count` | `string` |  |
| `job_artifacts_checksum_total_count` | `string` |  |
| `job_artifacts_checksummed_count` | `string` |  |
| `job_artifacts_count` | `string` |  |
| `job_artifacts_failed_count` | `string` |  |
| `job_artifacts_registry_count` | `string` |  |
| `job_artifacts_synced_count` | `string` |  |
| `job_artifacts_synced_in_percentage` | `string` |  |
| `job_artifacts_verification_failed_count` | `string` |  |
| `job_artifacts_verification_total_count` | `string` |  |
| `job_artifacts_verified_count` | `string` |  |
| `job_artifacts_verified_in_percentage` | `string` |  |
| `last_event_id` | `string` |  |
| `last_event_timestamp` | `string` |  |
| `last_successful_status_check_timestamp` | `string` |  |
| `lfs_objects_checksum_failed_count` | `string` |  |
| `lfs_objects_checksum_total_count` | `string` |  |
| `lfs_objects_checksummed_count` | `string` |  |
| `lfs_objects_count` | `string` |  |
| `lfs_objects_failed_count` | `string` |  |
| `lfs_objects_registry_count` | `string` |  |
| `lfs_objects_synced_count` | `string` |  |
| `lfs_objects_synced_in_percentage` | `string` |  |
| `lfs_objects_verification_failed_count` | `string` |  |
| `lfs_objects_verification_total_count` | `string` |  |
| `lfs_objects_verified_count` | `string` |  |
| `lfs_objects_verified_in_percentage` | `string` |  |
| `link` | `table` |  |
| `merge_request_diffs_checksum_failed_count` | `string` |  |
| `merge_request_diffs_checksum_total_count` | `string` |  |
| `merge_request_diffs_checksummed_count` | `string` |  |
| `merge_request_diffs_count` | `string` |  |
| `merge_request_diffs_failed_count` | `string` |  |
| `merge_request_diffs_registry_count` | `string` |  |
| `merge_request_diffs_synced_count` | `string` |  |
| `merge_request_diffs_synced_in_percentage` | `string` |  |
| `merge_request_diffs_verification_failed_count` | `string` |  |
| `merge_request_diffs_verification_total_count` | `string` |  |
| `merge_request_diffs_verified_count` | `string` |  |
| `merge_request_diffs_verified_in_percentage` | `string` |  |
| `missing_oauth_application` | `string` |  |
| `namespace` | `table` |  |
| `package_files_checksum_failed_count` | `string` |  |
| `package_files_checksum_total_count` | `string` |  |
| `package_files_checksummed_count` | `string` |  |
| `package_files_count` | `string` |  |
| `package_files_failed_count` | `string` |  |
| `package_files_registry_count` | `string` |  |
| `package_files_synced_count` | `string` |  |
| `package_files_synced_in_percentage` | `string` |  |
| `package_files_verification_failed_count` | `string` |  |
| `package_files_verification_total_count` | `string` |  |
| `package_files_verified_count` | `string` |  |
| `package_files_verified_in_percentage` | `string` |  |
| `pages_deployments_checksum_failed_count` | `string` |  |
| `pages_deployments_checksum_total_count` | `string` |  |
| `pages_deployments_checksummed_count` | `string` |  |
| `pages_deployments_count` | `string` |  |
| `pages_deployments_failed_count` | `string` |  |
| `pages_deployments_registry_count` | `string` |  |
| `pages_deployments_synced_count` | `string` |  |
| `pages_deployments_synced_in_percentage` | `string` |  |
| `pages_deployments_verification_failed_count` | `string` |  |
| `pages_deployments_verification_total_count` | `string` |  |
| `pages_deployments_verified_count` | `string` |  |
| `pages_deployments_verified_in_percentage` | `string` |  |
| `pipeline_artifacts_checksum_failed_count` | `string` |  |
| `pipeline_artifacts_checksum_total_count` | `string` |  |
| `pipeline_artifacts_checksummed_count` | `string` |  |
| `pipeline_artifacts_count` | `string` |  |
| `pipeline_artifacts_failed_count` | `string` |  |
| `pipeline_artifacts_registry_count` | `string` |  |
| `pipeline_artifacts_synced_count` | `string` |  |
| `pipeline_artifacts_synced_in_percentage` | `string` |  |
| `pipeline_artifacts_verification_failed_count` | `string` |  |
| `pipeline_artifacts_verification_total_count` | `string` |  |
| `pipeline_artifacts_verified_count` | `string` |  |
| `pipeline_artifacts_verified_in_percentage` | `string` |  |
| `project_repositories_checksum_failed_count` | `string` |  |
| `project_repositories_checksum_total_count` | `string` |  |
| `project_repositories_checksummed_count` | `string` |  |
| `project_repositories_count` | `string` |  |
| `project_repositories_failed_count` | `string` |  |
| `project_repositories_registry_count` | `string` |  |
| `project_repositories_synced_count` | `string` |  |
| `project_repositories_synced_in_percentage` | `string` |  |
| `project_repositories_verification_failed_count` | `string` |  |
| `project_repositories_verification_total_count` | `string` |  |
| `project_repositories_verified_count` | `string` |  |
| `project_repositories_verified_in_percentage` | `string` |  |
| `project_wiki_repositories_checksum_failed_count` | `string` |  |
| `project_wiki_repositories_checksum_total_count` | `string` |  |
| `project_wiki_repositories_checksummed_count` | `string` |  |
| `project_wiki_repositories_count` | `string` |  |
| `project_wiki_repositories_failed_count` | `string` |  |
| `project_wiki_repositories_registry_count` | `string` |  |
| `project_wiki_repositories_synced_count` | `string` |  |
| `project_wiki_repositories_synced_in_percentage` | `string` |  |
| `project_wiki_repositories_verification_failed_count` | `string` |  |
| `project_wiki_repositories_verification_total_count` | `string` |  |
| `project_wiki_repositories_verified_count` | `string` |  |
| `project_wiki_repositories_verified_in_percentage` | `string` |  |
| `projects_count` | `string` |  |
| `proxy_local_requests_event_count_weekly` | `string` |  |
| `proxy_remote_requests_event_count_weekly` | `string` |  |
| `replication_slots_count` | `string` |  |
| `replication_slots_max_retained_wal_byte` | `string` |  |
| `replication_slots_used_count` | `string` |  |
| `replication_slots_used_in_percentage` | `string` |  |
| `repositories_checked_count` | `string` |  |
| `repositories_checked_failed_count` | `string` |  |
| `repositories_checked_in_percentage` | `string` |  |
| `repositories_count` | `string` |  |
| `revision` | `string` |  |
| `selective_sync_type` | `string` |  |
| `snippet_repositories_checksum_failed_count` | `string` |  |
| `snippet_repositories_checksum_total_count` | `string` |  |
| `snippet_repositories_checksummed_count` | `string` |  |
| `snippet_repositories_count` | `string` |  |
| `snippet_repositories_failed_count` | `string` |  |
| `snippet_repositories_registry_count` | `string` |  |
| `snippet_repositories_synced_count` | `string` |  |
| `snippet_repositories_synced_in_percentage` | `string` |  |
| `snippet_repositories_verification_failed_count` | `string` |  |
| `snippet_repositories_verification_total_count` | `string` |  |
| `snippet_repositories_verified_count` | `string` |  |
| `snippet_repositories_verified_in_percentage` | `string` |  |
| `storage_shard` | `table` |  |
| `storage_shards_match` | `string` |  |
| `terraform_state_versions_checksum_failed_count` | `string` |  |
| `terraform_state_versions_checksum_total_count` | `string` |  |
| `terraform_state_versions_checksummed_count` | `string` |  |
| `terraform_state_versions_count` | `string` |  |
| `terraform_state_versions_failed_count` | `string` |  |
| `terraform_state_versions_registry_count` | `string` |  |
| `terraform_state_versions_synced_count` | `string` |  |
| `terraform_state_versions_synced_in_percentage` | `string` |  |
| `terraform_state_versions_verification_failed_count` | `string` |  |
| `terraform_state_versions_verification_total_count` | `string` |  |
| `terraform_state_versions_verified_count` | `string` |  |
| `terraform_state_versions_verified_in_percentage` | `string` |  |
| `updated_at` | `string` |  |
| `uploads_checksum_failed_count` | `string` |  |
| `uploads_checksum_total_count` | `string` |  |
| `uploads_checksummed_count` | `string` |  |
| `uploads_count` | `string` |  |
| `uploads_failed_count` | `string` |  |
| `uploads_registry_count` | `string` |  |
| `uploads_synced_count` | `string` |  |
| `uploads_synced_in_percentage` | `string` |  |
| `uploads_verification_failed_count` | `string` |  |
| `uploads_verification_total_count` | `string` |  |
| `uploads_verified_count` | `string` |  |
| `uploads_verified_in_percentage` | `string` |  |
| `version` | `string` |  |

#### Example: Create

```lua
local ee_api_entities_geo_node_status, err = client:EeApiEntitiesGeoNodeStatus():create({
})
```


### EeApiEntitiesGeoPipelineRef

Create an instance: `local ee_api_entities_geo_pipeline_ref = client:EeApiEntitiesGeoPipelineRef(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `pipeline_ref` | `table` |  |

#### Example: List

```lua
local ee_api_entities_geo_pipeline_refs, err = client:EeApiEntitiesGeoPipelineRef():list()
```


### EeApiEntitiesIssuableMetricImage

Create an instance: `local ee_api_entities_issuable_metric_image = client:EeApiEntitiesIssuableMetricImage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `file_path` | `string` |  |
| `filename` | `string` |  |
| `id` | `string` |  |
| `url` | `string` |  |
| `url_text` | `string` |  |

#### Example: Create

```lua
local ee_api_entities_issuable_metric_image, err = client:EeApiEntitiesIssuableMetricImage():create({
  issue_id = "example_issue_id", -- string
  project_id = "example_project_id", -- string
})
```


### EeApiEntitiesMergeRequestApprovalState

Create an instance: `local ee_api_entities_merge_request_approval_state = client:EeApiEntitiesMergeRequestApprovalState(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `approvals_required` | `number` |  |
| `approved` | `boolean` |  |
| `approved_by` | `table` |  |
| `code_owner` | `boolean` |  |
| `contains_hidden_group` | `boolean` |  |
| `eligible_approver` | `table` |  |
| `group` | `table` |  |
| `id` | `number` |  |
| `name` | `string` |  |
| `overridden` | `boolean` |  |
| `report_type` | `string` |  |
| `rule_type` | `string` |  |
| `section` | `string` |  |
| `source_rule` | `table` |  |
| `user` | `table` |  |

#### Example: List

```lua
local ee_api_entities_merge_request_approval_states, err = client:EeApiEntitiesMergeRequestApprovalState():list()
```


### EeApiEntitiesSshCertificate

Create an instance: `local ee_api_entities_ssh_certificate = client:EeApiEntitiesSshCertificate(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `id` | `number` |  |
| `key` | `string` |  |
| `title` | `string` |  |

#### Example: List

```lua
local ee_api_entities_ssh_certificates, err = client:EeApiEntitiesSshCertificate():list()
```

#### Example: Create

```lua
local ee_api_entities_ssh_certificate, err = client:EeApiEntitiesSshCertificate():create({
  group_id = "example_group_id", -- string
})
```


### Environment

Create an instance: `local environment = client:Environment(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |

#### Example: Create

```lua
local environment, err = client:Environment():create({
  project_id = "example_project_id", -- string
})
```


### ErrorTrackingClientKey

Create an instance: `local error_tracking_client_key = client:ErrorTrackingClientKey(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### Feature

Create an instance: `local feature = client:Feature(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### FeatureFlag

Create an instance: `local feature_flag = client:FeatureFlag(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Example: Load

```lua
local feature_flag, err = client:FeatureFlag():load({ project_id = "project_id" })
```

#### Example: Create

```lua
local feature_flag, err = client:FeatureFlag():create({
  unleash_id = "example_unleash_id", -- string
})
```


### FeatureFlagsUserList

Create an instance: `local feature_flags_user_list = client:FeatureFlagsUserList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### FreezePeriod

Create an instance: `local freeze_period = client:FreezePeriod(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### GenericPackage

Create an instance: `local generic_package = client:GenericPackage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Example: Load

```lua
local generic_package, err = client:GenericPackage():load({ file_name = "file_name", generic_id = "generic_id", project_id = "project_id" })
```


### Geo

Create an instance: `local geo = client:Geo(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```lua
local geo, err = client:Geo():load({ replicable_id = "replicable_id", replicable_name = "replicable_name" })
```

#### Example: Create

```lua
local geo, err = client:Geo():create({
})
```


### GoProxy

Create an instance: `local go_proxy = client:GoProxy(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```lua
local go_proxy, err = client:GoProxy():load({ project_id = "project_id" })
```


### Group

Create an instance: `local group = client:Group(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Example: Load

```lua
local group, err = client:Group():load({ id = "group_id" })
```

#### Example: Create

```lua
local group, err = client:Group():create({
  id = "example_id", -- string
})
```


### GroupAvatar

Create an instance: `local group_avatar = client:GroupAvatar(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```lua
local group_avatar, err = client:GroupAvatar():load({ id = "group_avatar_id" })
```


### GroupExport

Create an instance: `local group_export = client:GroupExport(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```lua
local group_export, err = client:GroupExport():load({ group_id = "group_id" })
```

#### Example: Create

```lua
local group_export, err = client:GroupExport():create({
  id = "example_id", -- string
})
```


### GroupImport

Create an instance: `local group_import = client:GroupImport(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```lua
local group_import, err = client:GroupImport():create({
})
```


### HelmPackage

Create an instance: `local helm_package = client:HelmPackage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```lua
local helm_package, err = client:HelmPackage():load({ project_id = "project_id" })
```

#### Example: Create

```lua
local helm_package, err = client:HelmPackage():create({
  project_id = "example_project_id", -- string
})
```


### Hook

Create an instance: `local hook = client:Hook(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Example: Create

```lua
local hook, err = client:Hook():create({
  id = "example_id", -- string
})
```


### Import

Create an instance: `local import = client:Import(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```lua
local import, err = client:Import():create({
})
```


### Integration

Create an instance: `local integration = client:Integration(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |

#### Example: Create

```lua
local integration, err = client:Integration():create({
})
```


### Invitation

Create an instance: `local invitation = client:Invitation(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### IssueLink

Create an instance: `local issue_link = client:IssueLink(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### IssuesStatistic

Create an instance: `local issues_statistic = client:IssuesStatistic(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```lua
local issues_statistic, err = client:IssuesStatistic():load()
```


### Job

Create an instance: `local job = client:Job(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Example: Load

```lua
local job, err = client:Job():load({ id = "job_id" })
```

#### Example: Create

```lua
local job, err = client:Job():create({
})
```


### MavenPackage

Create an instance: `local maven_package = client:MavenPackage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Example: Load

```lua
local maven_package, err = client:MavenPackage():load({ file_name = "file_name" })
```


### Member

Create an instance: `local member = client:Member(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### MergeRequest

Create an instance: `local merge_request = client:MergeRequest(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Example: Load

```lua
local merge_request, err = client:MergeRequest():load({ id = "merge_request_id", project_id = "project_id" })
```


### Metadata

Create an instance: `local metadata = client:Metadata(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `enterprise` | `boolean` |  |
| `kas` | `table` |  |
| `revision` | `string` |  |
| `version` | `string` |  |

#### Example: Load

```lua
local metadata, err = client:Metadata():load()
```


### Migration

Create an instance: `local migration = client:Migration(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```lua
local migration, err = client:Migration():create({
  timestamp = "example_timestamp", -- any
})
```


### MlModelRegistry

Create an instance: `local ml_model_registry = client:MlModelRegistry(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Example: Load

```lua
local ml_model_registry, err = client:MlModelRegistry():load({ file_name = "file_name", ml_model_id = "ml_model_id", project_id = "project_id" })
```


### Namespace

Create an instance: `local namespace = client:Namespace(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### Npm

Create an instance: `local npm = client:Npm(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |


### NpmPackage

Create an instance: `local npm_package = client:NpmPackage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Example: Load

```lua
local npm_package, err = client:NpmPackage():load({ project_id = "project_id" })
```

#### Example: Create

```lua
local npm_package, err = client:NpmPackage():create({
})
```


### Nuget

Create an instance: `local nuget = client:Nuget(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |


### NugetPackage

Create an instance: `local nuget_package = client:NugetPackage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `catalog_entry` | `table` |  |
| `count` | `number` |  |
| `id` | `string` |  |
| `item` | `table` |  |
| `lower` | `string` |  |
| `package_content` | `string` |  |
| `upper` | `string` |  |

#### Example: Load

```lua
local nuget_package, err = client:NugetPackage():load()
```

#### Example: List

```lua
local nuget_packages, err = client:NugetPackage():list()
```


### PackageFile

Create an instance: `local package_file = client:PackageFile(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Example: Load

```lua
local package_file, err = client:PackageFile():load({ id = "package_file_id", package_id = "package_id", project_id = "project_id" })
```


### Page

Create an instance: `local page = client:Page(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Example: Load

```lua
local page, err = client:Page():load({ project_id = "project_id" })
```


### Participant

Create an instance: `local participant = client:Participant(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `key` | `string` |  |
| `value` | `string` |  |

#### Example: List

```lua
local participants, err = client:Participant():list()
```


### PersonalAccessToken

Create an instance: `local personal_access_token = client:PersonalAccessToken(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### Project

Create an instance: `local project = client:Project(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `before_sha` | `string` |  |
| `committed_at` | `string` |  |
| `coverage` | `number` |  |
| `created_at` | `string` |  |
| `detailed_status` | `table` |  |
| `duration` | `number` |  |
| `finished_at` | `string` |  |
| `id` | `number` |  |
| `iid` | `number` |  |
| `name` | `string` |  |
| `project_id` | `number` |  |
| `queued_duration` | `number` |  |
| `ref` | `string` |  |
| `sha` | `string` |  |
| `source` | `string` |  |
| `started_at` | `string` |  |
| `status` | `string` |  |
| `tag` | `boolean` |  |
| `updated_at` | `string` |  |
| `user` | `table` |  |
| `web_url` | `string` |  |
| `yaml_error` | `string` |  |

#### Example: Load

```lua
local project, err = client:Project():load({ id = "project_id" })
```

#### Example: Create

```lua
local project, err = client:Project():create({
  id = "example_id", -- string
})
```


### ProjectAvatar

Create an instance: `local project_avatar = client:ProjectAvatar(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```lua
local project_avatar, err = client:ProjectAvatar():load({ id = "project_avatar_id" })
```


### ProjectEntity

Create an instance: `local project_entity = client:ProjectEntity(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```lua
local project_entity, err = client:ProjectEntity():create({
})
```


### ProjectExport

Create an instance: `local project_export = client:ProjectExport(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```lua
local project_export, err = client:ProjectExport():load({ project_id = "project_id" })
```

#### Example: Create

```lua
local project_export, err = client:ProjectExport():create({
  id = "example_id", -- string
})
```


### ProjectHook

Create an instance: `local project_hook = client:ProjectHook(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### ProjectImport

Create an instance: `local project_import = client:ProjectImport(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```lua
local project_import, err = client:ProjectImport():create({
})
```


### ProjectImportEntity

Create an instance: `local project_import_entity = client:ProjectImportEntity(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `forked` | `boolean` |  |
| `full_name` | `string` |  |
| `full_path` | `string` |  |
| `human_import_status_name` | `string` |  |
| `id` | `number` |  |
| `import_error` | `string` |  |
| `import_source` | `string` |  |
| `import_status` | `string` |  |
| `import_warning` | `string` |  |
| `name` | `string` |  |
| `provider_link` | `string` |  |
| `refs_url` | `string` |  |
| `relation_type` | `string` |  |

#### Example: Create

```lua
local project_import_entity, err = client:ProjectImportEntity():create({
})
```


### ProjectPackage

Create an instance: `local project_package = client:ProjectPackage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### ProjectSnippet

Create an instance: `local project_snippet = client:ProjectSnippet(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### ProjectsJobTokenScope

Create an instance: `local projects_job_token_scope = client:ProjectsJobTokenScope(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |


### ProtectedTag

Create an instance: `local protected_tag = client:ProtectedTag(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### Pypi

Create an instance: `local pypi = client:Pypi(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```lua
local pypi, err = client:Pypi():create({
  project_id = "example_project_id", -- string
})
```


### PypiPackage

Create an instance: `local pypi_package = client:PypiPackage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```lua
local pypi_package, err = client:PypiPackage():load()
```

#### Example: Create

```lua
local pypi_package, err = client:PypiPackage():create({
  project_id = "example_project_id", -- string
})
```


### Release

Create an instance: `local release = client:Release(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Example: Load

```lua
local release, err = client:Release():load({ project_id = "project_id" })
```


### ReleaseLink

Create an instance: `local release_link = client:ReleaseLink(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### RemoteMirror

Create an instance: `local remote_mirror = client:RemoteMirror(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Example: Load

```lua
local remote_mirror, err = client:RemoteMirror():load({ id = "remote_mirror_id", project_id = "project_id" })
```

#### Example: Create

```lua
local remote_mirror, err = client:RemoteMirror():create({
  id = "example_id", -- string
  project_id = "example_project_id", -- string
})
```


### Rpm

Create an instance: `local rpm = client:Rpm(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```lua
local rpm, err = client:Rpm():create({
  project_id = "example_project_id", -- string
})
```


### RpmPackage

Create an instance: `local rpm_package = client:RpmPackage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```lua
local rpm_package, err = client:RpmPackage():load({ project_id = "project_id" })
```

#### Example: Create

```lua
local rpm_package, err = client:RpmPackage():create({
  project_id = "example_project_id", -- string
})
```


### Rubygem

Create an instance: `local rubygem = client:Rubygem(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```lua
local rubygem, err = client:Rubygem():load({ id = "rubygem_id", project_id = "project_id" })
```


### RubygemPackage

Create an instance: `local rubygem_package = client:RubygemPackage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```lua
local rubygem_package, err = client:RubygemPackage():load({ project_id = "project_id" })
```

#### Example: Create

```lua
local rubygem_package, err = client:RubygemPackage():create({
  project_id = "example_project_id", -- string
})
```


### Runner

Create an instance: `local runner = client:Runner(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |

#### Example: Create

```lua
local runner, err = client:Runner():create({
})
```


### Search

Create an instance: `local search = client:Search(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```lua
local search, err = client:Search():load()
```


### SecureFile

Create an instance: `local secure_file = client:SecureFile(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Example: Load

```lua
local secure_file, err = client:SecureFile():load({ id = "secure_file_id", project_id = "project_id" })
```


### Slack

Create an instance: `local slack = client:Slack(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```lua
local slack, err = client:Slack():create({
})
```


### Snippet

Create an instance: `local snippet = client:Snippet(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Example: Load

```lua
local snippet, err = client:Snippet():load({ id = "snippet_id", file_id = "file_id", file_path = "file_path" })
```


### Starrer

Create an instance: `local starrer = client:Starrer(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_path` | `string` |  |
| `avatar_url` | `string` |  |
| `custom_attribute` | `table` |  |
| `id` | `number` |  |
| `locked` | `boolean` |  |
| `name` | `string` |  |
| `public_email` | `string` |  |
| `state` | `string` |  |
| `username` | `string` |  |
| `web_url` | `string` |  |

#### Example: List

```lua
local starrers, err = client:Starrer():list()
```


### SystemHook

Create an instance: `local system_hook = client:SystemHook(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### Tag

Create an instance: `local tag = client:Tag(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### TerraformRegistry

Create an instance: `local terraform_registry = client:TerraformRegistry(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Example: Load

```lua
local terraform_registry, err = client:TerraformRegistry():load({ id = "terraform_registry_id", module_system = "module_system" })
```


### TerraformState

Create an instance: `local terraform_state = client:TerraformState(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Example: Load

```lua
local terraform_state, err = client:TerraformState():load({ id = "terraform_state_id", project_id = "project_id" })
```

#### Example: Create

```lua
local terraform_state, err = client:TerraformState():create({
  project_id = "example_project_id", -- string
})
```


### TestReport

Create an instance: `local test_report = client:TestReport(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `error_count` | `number` |  |
| `failed_count` | `number` |  |
| `name` | `string` |  |
| `skipped_count` | `number` |  |
| `success_count` | `number` |  |
| `suite_error` | `string` |  |
| `test_case` | `table` |  |
| `total_count` | `number` |  |
| `total_time` | `number` |  |

#### Example: List

```lua
local test_reports, err = client:TestReport():list()
```


### TestReportSummary

Create an instance: `local test_report_summary = client:TestReportSummary(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `test_suite` | `table` |  |
| `total` | `table` |  |

#### Example: Load

```lua
local test_report_summary, err = client:TestReportSummary():load({ pipeline_id = "pipeline_id", project_id = "project_id" })
```


### Topic

Create an instance: `local topic = client:Topic(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### UnleashApi

Create an instance: `local unleash_api = client:UnleashApi(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```lua
local unleash_api, err = client:UnleashApi():load({ unleash_id = "unleash_id" })
```


### UsageData

Create an instance: `local usage_data = client:UsageData(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```lua
local usage_data, err = client:UsageData():load()
```

#### Example: Create

```lua
local usage_data, err = client:UsageData():create({
})
```


### User

Create an instance: `local user = client:User(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_path` | `string` |  |
| `avatar_url` | `string` |  |
| `custom_attribute` | `table` |  |
| `id` | `number` |  |
| `locked` | `boolean` |  |
| `name` | `string` |  |
| `public_email` | `string` |  |
| `state` | `string` |  |
| `username` | `string` |  |
| `web_url` | `string` |  |

#### Example: List

```lua
local users, err = client:User():list()
```


### WebCommit

Create an instance: `local web_commit = client:WebCommit(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```lua
local web_commit, err = client:WebCommit():load()
```


### Wiki

Create an instance: `local wiki = client:Wiki(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is a Lua table
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as tables

The Lua SDK uses plain Lua tables throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a table.

### Module structure

```
lua/
├── gitlab_sdk.lua    -- Main SDK module
├── config.lua               -- Configuration
├── features.lua             -- Feature factory
├── core/                    -- Core types and context
├── entity/                  -- Entity implementations
├── feature/                 -- Built-in features (Base, Test, Log)
├── utility/                 -- Utility functions and struct library
└── test/                    -- Test suites
```

The main module (`gitlab_sdk`) exports the SDK constructor
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```lua
local apientitiesaccessrequester = client:ApiEntitiesAccessRequester()
apientitiesaccessrequester:list()

-- apientitiesaccessrequester:data_get() now returns the apientitiesaccessrequester data from the last list
-- apientitiesaccessrequester:match_get() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
