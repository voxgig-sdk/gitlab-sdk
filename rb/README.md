# Gitlab Ruby SDK



The Ruby SDK for the Gitlab API — an entity-oriented client using idiomatic Ruby conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.AccessRequest` — with named operations (`list`/`load`/`create`/`update`/`remove`/`patch`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to RubyGems. Install it from the
GitHub release tag (`rb/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/gitlab-sdk/releases](https://github.com/voxgig-sdk/gitlab-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ruby
require_relative "Gitlab_sdk"

client = GitlabSDK.new({
  "apikey" => ENV["GITLAB_APIKEY"],
})
```

### 3. Load an apientitiesbranch

ApiEntitiesBranch is nested under project, so provide the `project_id`.

```ruby
begin
  # load returns the bare ApiEntitiesBranch record (raises on error).
  apientitiesbranch = client.ApiEntitiesBranch.load({ "project_id" => "example_project_id", "id" => "example_id" })
  puts apientitiesbranch
rescue => err
  warn "load failed: #{err}"
end
```

### 4. Create, update, and remove

```ruby
# Remove
client.AccessRequest.remove({ "id" => "example_id" })
```


## Error handling

Entity operations raise on failure, so rescue them:

```ruby
begin
  accessrequest = client.AccessRequest.remove()
rescue => err
  warn "remove failed: #{err}"
end
```

`direct` does **not** raise — it returns the result hash. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```ruby
result = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example_id" },
})

warn "request failed: #{result["err"] || "HTTP #{result["status"]}"}" unless result["ok"]
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ruby
result = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})

if result["ok"]
  puts result["status"]  # 200
  puts result["data"]    # response body
else
  # On an HTTP error status there is no err (only a transport failure sets
  # it), so fall back to the status code.
  warn(result["err"] || "HTTP #{result["status"]}")
end
```

### Prepare a request without sending it

```ruby
begin
  fetchdef = client.prepare({
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => { "id" => "example" },
  })
  puts fetchdef["url"]
  puts fetchdef["method"]
  puts fetchdef["headers"]
rescue => err
  warn "prepare failed: #{err}"
end
```

### Use test mode

Create a mock client for unit testing — no server required:

```ruby
client = GitlabSDK.test

# Entity ops return the bare mock record (raises on error).
accessrequest = client.AccessRequest.remove()
puts accessrequest
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```ruby
mock_fetch = ->(url, init) {
  return {
    "status" => 200,
    "statusText" => "OK",
    "headers" => {},
    "json" => ->() { { "id" => "mock01" } },
  }, nil
}

client = GitlabSDK.new({
  "base" => "http://localhost:8080",
  "system" => {
    "fetch" => mock_fetch,
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
cd rb && ruby -Itest -e "Dir['test/*_test.rb'].each { |f| require_relative f }"
```


## Reference

### GitlabSDK

```ruby
require_relative "Gitlab_sdk"
client = GitlabSDK.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `String` | API key for authentication. |
| `base` | `String` | Base URL of the API server. |
| `prefix` | `String` | URL path prefix prepended to all requests. |
| `suffix` | `String` | URL path suffix appended to all requests. |
| `feature` | `Hash` | Feature activation flags. |
| `extend` | `Hash` | Additional Feature instances to load. |
| `system` | `Hash` | System overrides (e.g. custom `fetch` lambda). |

### test

```ruby
client = GitlabSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### GitlabSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> Hash` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> Hash` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> Hash` | Build and send an HTTP request. Returns a result hash (`result["ok"]`); does not raise. |
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
| `load` | `(reqmatch, ctrl) -> any` | Load a single entity by match criteria. Raises on error. |
| `list` | `(reqmatch = nil, ctrl) -> Array` | List entities matching the criteria (call with no argument to list all). Raises on error. |
| `create` | `(reqdata, ctrl) -> any` | Create a new entity. Raises on error. |
| `update` | `(reqdata, ctrl) -> any` | Update an existing entity. Raises on error. |
| `remove` | `(reqmatch, ctrl) -> any` | Remove an entity. Raises on error. |
| `data_get` | `() -> Hash` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> Hash` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> String` | Return the entity name. |

### Result shape

Entity operations return the result data directly. On failure they
raise a `GitlabError` (a `StandardError` subclass), so wrap
calls in `begin`/`rescue` where you need to handle errors.

The `direct` escape hatch is the exception: it never raises and instead
returns a result `Hash` with these keys:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `Boolean` | `true` if the HTTP status is 2xx. |
| `status` | `Integer` | HTTP status code. |
| `headers` | `Hash` | Response headers. |
| `data` | `any` | Parsed JSON response body. |
| `err` | `Error` | Present when `ok` is `false`. |

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

Create an instance: `access_request = client.AccessRequest`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### AlertManagement

Create an instance: `alert_management = client.AlertManagement`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |

#### Example: Create

```ruby
alert_management = client.AlertManagement.create({
  "alert_management_alert_id" => "example_alert_management_alert_id", # String
  "project_id" => "example_project_id", # String
})
```


### ApiEntitiesAccessRequester

Create an instance: `api_entities_access_requester = client.ApiEntitiesAccessRequester`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_path` | `String` |  |
| `avatar_url` | `String` |  |
| `custom_attribute` | `Array` |  |
| `id` | `Integer` |  |
| `key` | `String` |  |
| `locked` | `Boolean` |  |
| `name` | `String` |  |
| `public_email` | `String` |  |
| `requested_at` | `String` |  |
| `state` | `String` |  |
| `username` | `String` |  |
| `value` | `String` |  |
| `web_url` | `String` |  |

#### Example: List

```ruby
# list returns an Array of ApiEntitiesAccessRequester records (raises on error).
api_entities_access_requesters = client.ApiEntitiesAccessRequester.list
```

#### Example: Create

```ruby
api_entities_access_requester = client.ApiEntitiesAccessRequester.create({
})
```


### ApiEntitiesAppearance

Create an instance: `api_entities_appearance = client.ApiEntitiesAppearance`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `String` |  |
| `email_header_and_footer_enabled` | `String` |  |
| `favicon` | `String` |  |
| `footer_message` | `String` |  |
| `header_logo` | `String` |  |
| `header_message` | `String` |  |
| `logo` | `String` |  |
| `member_guideline` | `String` |  |
| `message_background_color` | `String` |  |
| `message_font_color` | `String` |  |
| `new_project_guideline` | `String` |  |
| `profile_image_guideline` | `String` |  |
| `pwa_description` | `String` |  |
| `pwa_icon` | `String` |  |
| `pwa_name` | `String` |  |
| `pwa_short_name` | `String` |  |
| `title` | `String` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesAppearance record (raises on error).
api_entities_appearance = client.ApiEntitiesAppearance.load()
```


### ApiEntitiesApplication

Create an instance: `api_entities_application = client.ApiEntitiesApplication`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `application_id` | `String` |  |
| `application_name` | `String` |  |
| `callback_url` | `String` |  |
| `confidential` | `Boolean` |  |
| `id` | `String` |  |

#### Example: List

```ruby
# list returns an Array of ApiEntitiesApplication records (raises on error).
api_entities_applications = client.ApiEntitiesApplication.list
```


### ApiEntitiesApplicationStatistic

Create an instance: `api_entities_application_statistic = client.ApiEntitiesApplicationStatistic`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active_user` | `Integer` |  |
| `fork` | `Integer` |  |
| `group` | `Integer` |  |
| `issue` | `Integer` |  |
| `merge_request` | `Integer` |  |
| `milestone` | `Integer` |  |
| `note` | `Integer` |  |
| `project` | `Integer` |  |
| `snippet` | `Integer` |  |
| `ssh_key` | `Integer` |  |
| `user` | `Integer` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesApplicationStatistic record (raises on error).
api_entities_application_statistic = client.ApiEntitiesApplicationStatistic.load()
```


### ApiEntitiesApplicationWithSecret

Create an instance: `api_entities_application_with_secret = client.ApiEntitiesApplicationWithSecret`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `application_id` | `String` |  |
| `application_name` | `String` |  |
| `callback_url` | `String` |  |
| `confidential` | `Boolean` |  |
| `id` | `String` |  |
| `secret` | `String` |  |

#### Example: Create

```ruby
api_entities_application_with_secret = client.ApiEntitiesApplicationWithSecret.create({
})
```


### ApiEntitiesAvatar

Create an instance: `api_entities_avatar = client.ApiEntitiesAvatar`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_url` | `String` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesAvatar record (raises on error).
api_entities_avatar = client.ApiEntitiesAvatar.load()
```


### ApiEntitiesAwardEmoji

Create an instance: `api_entities_award_emoji = client.ApiEntitiesAwardEmoji`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `awardable_id` | `Integer` |  |
| `awardable_type` | `String` |  |
| `created_at` | `String` |  |
| `id` | `Integer` |  |
| `name` | `String` |  |
| `updated_at` | `String` |  |
| `url` | `String` |  |
| `user` | `Hash` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesAwardEmoji record (raises on error).
api_entities_award_emoji = client.ApiEntitiesAwardEmoji.load({ "id" => "api_entities_award_emoji_id" })
```

#### Example: List

```ruby
# list returns an Array of ApiEntitiesAwardEmoji records (raises on error).
api_entities_award_emojis = client.ApiEntitiesAwardEmoji.list
```

#### Example: Create

```ruby
api_entities_award_emoji = client.ApiEntitiesAwardEmoji.create({
})
```


### ApiEntitiesBadge

Create an instance: `api_entities_badge = client.ApiEntitiesBadge`

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
| `id` | `String` |  |
| `image_url` | `String` |  |
| `kind` | `String` |  |
| `link_url` | `String` |  |
| `name` | `String` |  |
| `rendered_image_url` | `String` |  |
| `rendered_link_url` | `String` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesBadge record (raises on error).
api_entities_badge = client.ApiEntitiesBadge.load({ "id" => "api_entities_badge_id" })
```

#### Example: List

```ruby
# list returns an Array of ApiEntitiesBadge records (raises on error).
api_entities_badges = client.ApiEntitiesBadge.list
```

#### Example: Create

```ruby
api_entities_badge = client.ApiEntitiesBadge.create({
})
```


### ApiEntitiesBasicBadgeDetail

Create an instance: `api_entities_basic_badge_detail = client.ApiEntitiesBasicBadgeDetail`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `image_url` | `String` |  |
| `link_url` | `String` |  |
| `name` | `String` |  |
| `rendered_image_url` | `String` |  |
| `rendered_link_url` | `String` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesBasicBadgeDetail record (raises on error).
api_entities_basic_badge_detail = client.ApiEntitiesBasicBadgeDetail.load()
```


### ApiEntitiesBasicGroupDetail

Create an instance: `api_entities_basic_group_detail = client.ApiEntitiesBasicGroupDetail`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```ruby
api_entities_basic_group_detail = client.ApiEntitiesBasicGroupDetail.create({
  "project_id" => "example_project_id", # String
})
```


### ApiEntitiesBasicProjectDetail

Create an instance: `api_entities_basic_project_detail = client.ApiEntitiesBasicProjectDetail`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_url` | `String` |  |
| `created_at` | `String` |  |
| `custom_attribute` | `Hash` |  |
| `default_branch` | `String` |  |
| `description` | `String` |  |
| `forks_count` | `Integer` |  |
| `http_url_to_repo` | `String` |  |
| `id` | `Integer` |  |
| `last_activity_at` | `String` |  |
| `license` | `Hash` |  |
| `license_url` | `String` |  |
| `name` | `String` |  |
| `name_with_namespace` | `String` |  |
| `namespace` | `Hash` |  |
| `path` | `String` |  |
| `path_with_namespace` | `String` |  |
| `readme_url` | `String` |  |
| `repository_storage` | `String` |  |
| `ssh_url_to_repo` | `String` |  |
| `star_count` | `Integer` |  |
| `tag_list` | `Array` |  |
| `topic` | `Array` |  |
| `visibility` | `String` |  |
| `web_url` | `String` |  |

#### Example: List

```ruby
# list returns an Array of ApiEntitiesBasicProjectDetail records (raises on error).
api_entities_basic_project_details = client.ApiEntitiesBasicProjectDetail.list
```

#### Example: Create

```ruby
api_entities_basic_project_detail = client.ApiEntitiesBasicProjectDetail.create({
  "project_id" => "example_project_id", # String
})
```


### ApiEntitiesBasicRef

Create an instance: `api_entities_basic_ref = client.ApiEntitiesBasicRef`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `name` | `String` |  |
| `type` | `String` |  |

#### Example: List

```ruby
# list returns an Array of ApiEntitiesBasicRef records (raises on error).
api_entities_basic_refs = client.ApiEntitiesBasicRef.list
```


### ApiEntitiesBasicSuccess

Create an instance: `api_entities_basic_success = client.ApiEntitiesBasicSuccess`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```ruby
api_entities_basic_success = client.ApiEntitiesBasicSuccess.create({
})
```


### ApiEntitiesBatchedBackgroundMigration

Create an instance: `api_entities_batched_background_migration = client.ApiEntitiesBatchedBackgroundMigration`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `column_name` | `String` |  |
| `created_at` | `String` |  |
| `id` | `String` |  |
| `job_class_name` | `String` |  |
| `progress` | `Float` |  |
| `status` | `String` |  |
| `table_name` | `String` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesBatchedBackgroundMigration record (raises on error).
api_entities_batched_background_migration = client.ApiEntitiesBatchedBackgroundMigration.load({ "id" => "api_entities_batched_background_migration_id" })
```

#### Example: List

```ruby
# list returns an Array of ApiEntitiesBatchedBackgroundMigration records (raises on error).
api_entities_batched_background_migrations = client.ApiEntitiesBatchedBackgroundMigration.list
```


### ApiEntitiesBranch

Create an instance: `api_entities_branch = client.ApiEntitiesBranch`

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
| `can_push` | `Boolean` |  |
| `commit` | `Hash` |  |
| `default` | `Boolean` |  |
| `developers_can_merge` | `Boolean` |  |
| `developers_can_push` | `Boolean` |  |
| `merged` | `Boolean` |  |
| `name` | `String` |  |
| `protected` | `Boolean` |  |
| `web_url` | `String` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesBranch record (raises on error).
api_entities_branch = client.ApiEntitiesBranch.load({ "id" => "api_entities_branch_id", "project_id" => "project_id" })
```

#### Example: List

```ruby
# list returns an Array of ApiEntitiesBranch records (raises on error).
api_entities_branchs = client.ApiEntitiesBranch.list
```

#### Example: Create

```ruby
api_entities_branch = client.ApiEntitiesBranch.create({
  "project_id" => "example_project_id", # String
})
```


### ApiEntitiesBulkImport

Create an instance: `api_entities_bulk_import = client.ApiEntitiesBulkImport`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `bulk_import_id` | `Integer` |  |
| `created_at` | `String` |  |
| `destination_full_path` | `String` |  |
| `destination_name` | `String` |  |
| `destination_namespace` | `String` |  |
| `destination_slug` | `String` |  |
| `entity_type` | `String` |  |
| `failure` | `Array` |  |
| `has_failure` | `Boolean` |  |
| `id` | `Integer` |  |
| `migrate_membership` | `Boolean` |  |
| `migrate_project` | `Boolean` |  |
| `namespace_id` | `Integer` |  |
| `parent_id` | `Integer` |  |
| `project_id` | `Integer` |  |
| `source_full_path` | `String` |  |
| `source_type` | `String` |  |
| `source_url` | `String` |  |
| `stat` | `Hash` |  |
| `status` | `String` |  |
| `updated_at` | `String` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesBulkImport record (raises on error).
api_entities_bulk_import = client.ApiEntitiesBulkImport.load({ "id" => "api_entities_bulk_import_id" })
```

#### Example: List

```ruby
# list returns an Array of ApiEntitiesBulkImport records (raises on error).
api_entities_bulk_imports = client.ApiEntitiesBulkImport.list
```

#### Example: Create

```ruby
api_entities_bulk_import = client.ApiEntitiesBulkImport.create({
})
```


### ApiEntitiesBulkImportsEntityFailure

Create an instance: `api_entities_bulk_imports_entity_failure = client.ApiEntitiesBulkImportsEntityFailure`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `correlation_id_value` | `String` |  |
| `exception_class` | `String` |  |
| `exception_message` | `String` |  |
| `relation` | `String` |  |
| `source_title` | `String` |  |
| `source_url` | `String` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesBulkImportsEntityFailure record (raises on error).
api_entities_bulk_imports_entity_failure = client.ApiEntitiesBulkImportsEntityFailure.load({ "bulk_import_id" => "bulk_import_id", "entity_id" => "entity_id" })
```


### ApiEntitiesBulkImportsExportStatus

Create an instance: `api_entities_bulk_imports_export_status = client.ApiEntitiesBulkImportsExportStatus`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `batch` | `Hash` |  |
| `batched` | `Boolean` |  |
| `batches_count` | `Integer` |  |
| `error` | `String` |  |
| `relation` | `String` |  |
| `status` | `String` |  |
| `total_objects_count` | `Integer` |  |
| `updated_at` | `String` |  |

#### Example: List

```ruby
# list returns an Array of ApiEntitiesBulkImportsExportStatus records (raises on error).
api_entities_bulk_imports_export_statuss = client.ApiEntitiesBulkImportsExportStatus.list
```


### ApiEntitiesChangelog

Create an instance: `api_entities_changelog = client.ApiEntitiesChangelog`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `note` | `String` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesChangelog record (raises on error).
api_entities_changelog = client.ApiEntitiesChangelog.load({ "project_id" => "project_id" })
```


### ApiEntitiesCiBridge

Create an instance: `api_entities_ci_bridge = client.ApiEntitiesCiBridge`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_failure` | `Boolean` |  |
| `commit` | `Hash` |  |
| `coverage` | `Float` |  |
| `created_at` | `String` |  |
| `downstream_pipeline` | `Hash` |  |
| `duration` | `Float` |  |
| `erased_at` | `String` |  |
| `failure_reason` | `String` |  |
| `finished_at` | `String` |  |
| `id` | `Integer` |  |
| `name` | `String` |  |
| `pipeline` | `Hash` |  |
| `project` | `Hash` |  |
| `queued_duration` | `Float` |  |
| `ref` | `String` |  |
| `stage` | `String` |  |
| `started_at` | `String` |  |
| `status` | `String` |  |
| `tag` | `Boolean` |  |
| `user` | `Hash` |  |
| `web_url` | `String` |  |

#### Example: List

```ruby
# list returns an Array of ApiEntitiesCiBridge records (raises on error).
api_entities_ci_bridges = client.ApiEntitiesCiBridge.list
```


### ApiEntitiesCiCatalogResourcesVersion

Create an instance: `api_entities_ci_catalog_resources_version = client.ApiEntitiesCiCatalogResourcesVersion`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```ruby
api_entities_ci_catalog_resources_version = client.ApiEntitiesCiCatalogResourcesVersion.create({
  "project_id" => "example_project_id", # String
})
```


### ApiEntitiesCiJob

Create an instance: `api_entities_ci_job = client.ApiEntitiesCiJob`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_failure` | `Boolean` |  |
| `archived` | `Boolean` |  |
| `artifact` | `Array` |  |
| `artifacts_expire_at` | `String` |  |
| `artifacts_file` | `Hash` |  |
| `commit` | `Hash` |  |
| `coverage` | `Float` |  |
| `created_at` | `String` |  |
| `duration` | `Float` |  |
| `erased_at` | `String` |  |
| `failure_reason` | `String` |  |
| `file_format` | `String` |  |
| `file_type` | `String` |  |
| `filename` | `String` |  |
| `finished_at` | `String` |  |
| `id` | `Integer` |  |
| `name` | `String` |  |
| `pipeline` | `Hash` |  |
| `project` | `Hash` |  |
| `queued_duration` | `Float` |  |
| `ref` | `String` |  |
| `runner` | `Hash` |  |
| `runner_manager` | `Hash` |  |
| `size` | `Integer` |  |
| `stage` | `String` |  |
| `started_at` | `String` |  |
| `status` | `String` |  |
| `tag` | `Boolean` |  |
| `tag_list` | `Array` |  |
| `user` | `Hash` |  |
| `web_url` | `String` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesCiJob record (raises on error).
api_entities_ci_job = client.ApiEntitiesCiJob.load({ "id" => "api_entities_ci_job_id", "project_id" => "project_id" })
```

#### Example: List

```ruby
# list returns an Array of ApiEntitiesCiJob records (raises on error).
api_entities_ci_jobs = client.ApiEntitiesCiJob.list
```

#### Example: Create

```ruby
api_entities_ci_job = client.ApiEntitiesCiJob.create({
  "job_id" => "example_job_id", # String
  "project_id" => "example_project_id", # String
})
```


### ApiEntitiesCiJobBasic

Create an instance: `api_entities_ci_job_basic = client.ApiEntitiesCiJobBasic`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_failure` | `Boolean` |  |
| `commit` | `Hash` |  |
| `coverage` | `Float` |  |
| `created_at` | `String` |  |
| `duration` | `Float` |  |
| `erased_at` | `String` |  |
| `failure_reason` | `String` |  |
| `finished_at` | `String` |  |
| `id` | `Integer` |  |
| `name` | `String` |  |
| `pipeline` | `Hash` |  |
| `project` | `Hash` |  |
| `queued_duration` | `Float` |  |
| `ref` | `String` |  |
| `stage` | `String` |  |
| `started_at` | `String` |  |
| `status` | `String` |  |
| `tag` | `Boolean` |  |
| `user` | `Hash` |  |
| `web_url` | `String` |  |

#### Example: List

```ruby
# list returns an Array of ApiEntitiesCiJobBasic records (raises on error).
api_entities_ci_job_basics = client.ApiEntitiesCiJobBasic.list
```

#### Example: Create

```ruby
api_entities_ci_job_basic = client.ApiEntitiesCiJobBasic.create({
  "job_id" => "example_job_id", # String
  "project_id" => "example_project_id", # String
})
```


### ApiEntitiesCiJobBasicWithProject

Create an instance: `api_entities_ci_job_basic_with_project = client.ApiEntitiesCiJobBasicWithProject`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_failure` | `Boolean` |  |
| `commit` | `Hash` |  |
| `coverage` | `Float` |  |
| `created_at` | `String` |  |
| `duration` | `Float` |  |
| `erased_at` | `String` |  |
| `failure_reason` | `String` |  |
| `finished_at` | `String` |  |
| `id` | `Integer` |  |
| `name` | `String` |  |
| `pipeline` | `Hash` |  |
| `project` | `Hash` |  |
| `queued_duration` | `Float` |  |
| `ref` | `String` |  |
| `stage` | `String` |  |
| `started_at` | `String` |  |
| `status` | `String` |  |
| `tag` | `Boolean` |  |
| `user` | `Hash` |  |
| `web_url` | `String` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesCiJobBasicWithProject record (raises on error).
api_entities_ci_job_basic_with_project = client.ApiEntitiesCiJobBasicWithProject.load({ "runner_id" => "runner_id" })
```


### ApiEntitiesCiLintResult

Create an instance: `api_entities_ci_lint_result = client.ApiEntitiesCiLintResult`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `blob` | `String` |  |
| `context_project` | `String` |  |
| `context_sha` | `String` |  |
| `error` | `Array` |  |
| `extra` | `Hash` |  |
| `include` | `Array` |  |
| `job` | `Array` |  |
| `location` | `String` |  |
| `merged_yaml` | `String` |  |
| `raw` | `String` |  |
| `type` | `String` |  |
| `valid` | `Boolean` |  |
| `warning` | `Array` |  |

#### Example: List

```ruby
# list returns an Array of ApiEntitiesCiLintResult records (raises on error).
api_entities_ci_lint_results = client.ApiEntitiesCiLintResult.list
```

#### Example: Create

```ruby
api_entities_ci_lint_result = client.ApiEntitiesCiLintResult.create({
  "project_id" => "example_project_id", # String
})
```


### ApiEntitiesCiPipeline

Create an instance: `api_entities_ci_pipeline = client.ApiEntitiesCiPipeline`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```ruby
api_entities_ci_pipeline = client.ApiEntitiesCiPipeline.create({
  "project_id" => "example_project_id", # String
})
```


### ApiEntitiesCiPipelineBasic

Create an instance: `api_entities_ci_pipeline_basic = client.ApiEntitiesCiPipelineBasic`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `String` |  |
| `id` | `Integer` |  |
| `iid` | `Integer` |  |
| `project_id` | `Integer` |  |
| `ref` | `String` |  |
| `sha` | `String` |  |
| `source` | `String` |  |
| `status` | `String` |  |
| `updated_at` | `String` |  |
| `web_url` | `String` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesCiPipelineBasic record (raises on error).
api_entities_ci_pipeline_basic = client.ApiEntitiesCiPipelineBasic.load({ "merge_request_id" => "merge_request_id", "project_id" => "project_id" })
```

#### Example: List

```ruby
# list returns an Array of ApiEntitiesCiPipelineBasic records (raises on error).
api_entities_ci_pipeline_basics = client.ApiEntitiesCiPipelineBasic.list
```


### ApiEntitiesCiPipelineSchedule

Create an instance: `api_entities_ci_pipeline_schedule = client.ApiEntitiesCiPipelineSchedule`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `Boolean` |  |
| `created_at` | `String` |  |
| `cron` | `String` |  |
| `cron_timezone` | `String` |  |
| `description` | `String` |  |
| `id` | `Integer` |  |
| `input` | `Hash` |  |
| `next_run_at` | `String` |  |
| `owner` | `Hash` |  |
| `ref` | `String` |  |
| `updated_at` | `String` |  |

#### Example: List

```ruby
# list returns an Array of ApiEntitiesCiPipelineSchedule records (raises on error).
api_entities_ci_pipeline_schedules = client.ApiEntitiesCiPipelineSchedule.list
```


### ApiEntitiesCiPipelineScheduleDetail

Create an instance: `api_entities_ci_pipeline_schedule_detail = client.ApiEntitiesCiPipelineScheduleDetail`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `Boolean` |  |
| `created_at` | `String` |  |
| `cron` | `String` |  |
| `cron_timezone` | `String` |  |
| `description` | `String` |  |
| `id` | `Integer` |  |
| `input` | `Hash` |  |
| `last_pipeline` | `Hash` |  |
| `next_run_at` | `String` |  |
| `owner` | `Hash` |  |
| `ref` | `String` |  |
| `updated_at` | `String` |  |
| `variable` | `Hash` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesCiPipelineScheduleDetail record (raises on error).
api_entities_ci_pipeline_schedule_detail = client.ApiEntitiesCiPipelineScheduleDetail.load({ "pipeline_schedule_id" => "pipeline_schedule_id", "project_id" => "project_id" })
```

#### Example: Create

```ruby
api_entities_ci_pipeline_schedule_detail = client.ApiEntitiesCiPipelineScheduleDetail.create({
  "project_id" => "example_project_id", # String
})
```


### ApiEntitiesCiResetTokenResult

Create an instance: `api_entities_ci_reset_token_result = client.ApiEntitiesCiResetTokenResult`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```ruby
api_entities_ci_reset_token_result = client.ApiEntitiesCiResetTokenResult.create({
})
```


### ApiEntitiesCiResourceGroup

Create an instance: `api_entities_ci_resource_group = client.ApiEntitiesCiResourceGroup`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `String` |  |
| `id` | `Integer` |  |
| `key` | `String` |  |
| `process_mode` | `String` |  |
| `updated_at` | `String` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesCiResourceGroup record (raises on error).
api_entities_ci_resource_group = client.ApiEntitiesCiResourceGroup.load({ "id" => "api_entities_ci_resource_group_id", "project_id" => "project_id" })
```

#### Example: List

```ruby
# list returns an Array of ApiEntitiesCiResourceGroup records (raises on error).
api_entities_ci_resource_groups = client.ApiEntitiesCiResourceGroup.list
```


### ApiEntitiesCiRunner

Create an instance: `api_entities_ci_runner = client.ApiEntitiesCiRunner`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `Boolean` |  |
| `created_at` | `String` |  |
| `created_by` | `Hash` |  |
| `description` | `String` |  |
| `id` | `Integer` |  |
| `ip_address` | `String` |  |
| `is_shared` | `Boolean` |  |
| `job_execution_status` | `String` |  |
| `name` | `String` |  |
| `online` | `Boolean` |  |
| `paused` | `Boolean` |  |
| `runner_type` | `String` |  |
| `status` | `String` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesCiRunner record (raises on error).
api_entities_ci_runner = client.ApiEntitiesCiRunner.load()
```

#### Example: Create

```ruby
api_entities_ci_runner = client.ApiEntitiesCiRunner.create({
  "project_id" => "example_project_id", # String
})
```


### ApiEntitiesCiRunnerDetail

Create an instance: `api_entities_ci_runner_detail = client.ApiEntitiesCiRunnerDetail`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `access_level` | `String` |  |
| `active` | `Boolean` |  |
| `architecture` | `String` |  |
| `contacted_at` | `String` |  |
| `created_at` | `String` |  |
| `created_by` | `Hash` |  |
| `description` | `String` |  |
| `group` | `Hash` |  |
| `id` | `Integer` |  |
| `ip_address` | `String` |  |
| `is_shared` | `Boolean` |  |
| `job_execution_status` | `String` |  |
| `locked` | `Boolean` |  |
| `maintenance_note` | `String` |  |
| `maximum_timeout` | `String` |  |
| `name` | `String` |  |
| `online` | `Boolean` |  |
| `paused` | `Boolean` |  |
| `platform` | `String` |  |
| `project` | `Hash` |  |
| `revision` | `String` |  |
| `run_untagged` | `String` |  |
| `runner_type` | `String` |  |
| `status` | `String` |  |
| `tag_list` | `String` |  |
| `version` | `String` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesCiRunnerDetail record (raises on error).
api_entities_ci_runner_detail = client.ApiEntitiesCiRunnerDetail.load({ "id" => "api_entities_ci_runner_detail_id" })
```


### ApiEntitiesCiRunnerManager

Create an instance: `api_entities_ci_runner_manager = client.ApiEntitiesCiRunnerManager`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `architecture` | `String` |  |
| `contacted_at` | `String` |  |
| `created_at` | `String` |  |
| `id` | `Integer` |  |
| `ip_address` | `String` |  |
| `job_execution_status` | `String` |  |
| `platform` | `String` |  |
| `revision` | `String` |  |
| `status` | `String` |  |
| `system_id` | `String` |  |
| `version` | `String` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesCiRunnerManager record (raises on error).
api_entities_ci_runner_manager = client.ApiEntitiesCiRunnerManager.load({ "runner_id" => "runner_id" })
```


### ApiEntitiesCiRunnerRegistrationDetail

Create an instance: `api_entities_ci_runner_registration_detail = client.ApiEntitiesCiRunnerRegistrationDetail`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```ruby
api_entities_ci_runner_registration_detail = client.ApiEntitiesCiRunnerRegistrationDetail.create({
})
```


### ApiEntitiesCiSecureFile

Create an instance: `api_entities_ci_secure_file = client.ApiEntitiesCiSecureFile`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `checksum` | `String` |  |
| `checksum_algorithm` | `String` |  |
| `created_at` | `String` |  |
| `expires_at` | `String` |  |
| `file_extension` | `String` |  |
| `id` | `Integer` |  |
| `metadata` | `Hash` |  |
| `name` | `String` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesCiSecureFile record (raises on error).
api_entities_ci_secure_file = client.ApiEntitiesCiSecureFile.load({ "id" => "api_entities_ci_secure_file_id", "project_id" => "project_id" })
```

#### Example: Create

```ruby
api_entities_ci_secure_file = client.ApiEntitiesCiSecureFile.create({
  "project_id" => "example_project_id", # String
})
```


### ApiEntitiesCiVariable

Create an instance: `api_entities_ci_variable = client.ApiEntitiesCiVariable`

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
| `description` | `String` |  |
| `environment_scope` | `String` |  |
| `hidden` | `Boolean` |  |
| `key` | `String` |  |
| `masked` | `Boolean` |  |
| `protected` | `Boolean` |  |
| `raw` | `Boolean` |  |
| `value` | `String` |  |
| `variable_type` | `String` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesCiVariable record (raises on error).
api_entities_ci_variable = client.ApiEntitiesCiVariable.load({ "id" => "api_entities_ci_variable_id" })
```

#### Example: List

```ruby
# list returns an Array of ApiEntitiesCiVariable records (raises on error).
api_entities_ci_variables = client.ApiEntitiesCiVariable.list
```

#### Example: Create

```ruby
api_entities_ci_variable = client.ApiEntitiesCiVariable.create({
})
```


### ApiEntitiesCluster

Create an instance: `api_entities_cluster = client.ApiEntitiesCluster`

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
| `cluster_type` | `String` |  |
| `created_at` | `String` |  |
| `domain` | `String` |  |
| `enabled` | `Boolean` |  |
| `environment_scope` | `String` |  |
| `id` | `String` |  |
| `managed` | `String` |  |
| `management_project` | `Hash` |  |
| `name` | `String` |  |
| `namespace_per_environment` | `String` |  |
| `platform_kubernete` | `Hash` |  |
| `platform_type` | `String` |  |
| `provider_gcp` | `Hash` |  |
| `provider_type` | `String` |  |
| `user` | `Hash` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesCluster record (raises on error).
api_entities_cluster = client.ApiEntitiesCluster.load({ "id" => "api_entities_cluster_id" })
```

#### Example: List

```ruby
# list returns an Array of ApiEntitiesCluster records (raises on error).
api_entities_clusters = client.ApiEntitiesCluster.list
```

#### Example: Create

```ruby
api_entities_cluster = client.ApiEntitiesCluster.create({
})
```


### ApiEntitiesClusterGroup

Create an instance: `api_entities_cluster_group = client.ApiEntitiesClusterGroup`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cluster_type` | `String` |  |
| `created_at` | `String` |  |
| `domain` | `String` |  |
| `enabled` | `Boolean` |  |
| `environment_scope` | `String` |  |
| `group` | `Hash` |  |
| `id` | `String` |  |
| `managed` | `String` |  |
| `management_project` | `Hash` |  |
| `name` | `String` |  |
| `namespace_per_environment` | `String` |  |
| `platform_kubernete` | `Hash` |  |
| `platform_type` | `String` |  |
| `provider_gcp` | `Hash` |  |
| `provider_type` | `String` |  |
| `user` | `Hash` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesClusterGroup record (raises on error).
api_entities_cluster_group = client.ApiEntitiesClusterGroup.load({ "cluster_id" => "cluster_id", "group_id" => "group_id" })
```

#### Example: Create

```ruby
api_entities_cluster_group = client.ApiEntitiesClusterGroup.create({
  "group_id" => "example_group_id", # String
})
```


### ApiEntitiesClusterProject

Create an instance: `api_entities_cluster_project = client.ApiEntitiesClusterProject`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cluster_type` | `String` |  |
| `created_at` | `String` |  |
| `domain` | `String` |  |
| `enabled` | `Boolean` |  |
| `environment_scope` | `String` |  |
| `id` | `String` |  |
| `managed` | `String` |  |
| `management_project` | `Hash` |  |
| `name` | `String` |  |
| `namespace_per_environment` | `String` |  |
| `platform_kubernete` | `Hash` |  |
| `platform_type` | `String` |  |
| `project` | `Hash` |  |
| `provider_gcp` | `Hash` |  |
| `provider_type` | `String` |  |
| `user` | `Hash` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesClusterProject record (raises on error).
api_entities_cluster_project = client.ApiEntitiesClusterProject.load({ "cluster_id" => "cluster_id", "project_id" => "project_id" })
```

#### Example: Create

```ruby
api_entities_cluster_project = client.ApiEntitiesClusterProject.create({
  "project_id" => "example_project_id", # String
})
```


### ApiEntitiesClustersAgent

Create an instance: `api_entities_clusters_agent = client.ApiEntitiesClustersAgent`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `config_project` | `Hash` |  |
| `created_at` | `String` |  |
| `created_by_user_id` | `String` |  |
| `id` | `String` |  |
| `is_receptive` | `Boolean` |  |
| `name` | `String` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesClustersAgent record (raises on error).
api_entities_clusters_agent = client.ApiEntitiesClustersAgent.load({ "project_id" => "project_id" })
```

#### Example: Create

```ruby
api_entities_clusters_agent = client.ApiEntitiesClustersAgent.create({
  "project_id" => "example_project_id", # String
})
```


### ApiEntitiesClustersAgentToken

Create an instance: `api_entities_clusters_agent_token = client.ApiEntitiesClustersAgentToken`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agent_id` | `String` |  |
| `created_at` | `String` |  |
| `created_by_user_id` | `String` |  |
| `description` | `String` |  |
| `id` | `String` |  |
| `last_used_at` | `String` |  |
| `name` | `String` |  |
| `status` | `String` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesClustersAgentToken record (raises on error).
api_entities_clusters_agent_token = client.ApiEntitiesClustersAgentToken.load({ "id" => "api_entities_clusters_agent_token_id", "cluster_agent_id" => "cluster_agent_id", "project_id" => "project_id" })
```


### ApiEntitiesClustersAgentTokenBasic

Create an instance: `api_entities_clusters_agent_token_basic = client.ApiEntitiesClustersAgentTokenBasic`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agent_id` | `String` |  |
| `created_at` | `String` |  |
| `created_by_user_id` | `String` |  |
| `description` | `String` |  |
| `id` | `String` |  |
| `name` | `String` |  |
| `status` | `String` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesClustersAgentTokenBasic record (raises on error).
api_entities_clusters_agent_token_basic = client.ApiEntitiesClustersAgentTokenBasic.load({ "cluster_agent_id" => "cluster_agent_id", "project_id" => "project_id" })
```


### ApiEntitiesClustersAgentTokenWithToken

Create an instance: `api_entities_clusters_agent_token_with_token = client.ApiEntitiesClustersAgentTokenWithToken`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```ruby
api_entities_clusters_agent_token_with_token = client.ApiEntitiesClustersAgentTokenWithToken.create({
  "cluster_agent_id" => "example_cluster_agent_id", # String
  "project_id" => "example_project_id", # String
})
```


### ApiEntitiesCommit

Create an instance: `api_entities_commit = client.ApiEntitiesCommit`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author_email` | `String` |  |
| `author_name` | `String` |  |
| `authored_date` | `String` |  |
| `committed_date` | `String` |  |
| `committer_email` | `String` |  |
| `committer_name` | `String` |  |
| `created_at` | `String` |  |
| `extended_trailer` | `Hash` |  |
| `id` | `String` |  |
| `message` | `String` |  |
| `parent_id` | `Array` |  |
| `short_id` | `String` |  |
| `title` | `String` |  |
| `trailer` | `Hash` |  |
| `web_url` | `String` |  |

#### Example: List

```ruby
# list returns an Array of ApiEntitiesCommit records (raises on error).
api_entities_commits = client.ApiEntitiesCommit.list
```

#### Example: Create

```ruby
api_entities_commit = client.ApiEntitiesCommit.create({
  "project_id" => "example_project_id", # String
})
```


### ApiEntitiesCommitDetail

Create an instance: `api_entities_commit_detail = client.ApiEntitiesCommitDetail`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author_email` | `String` |  |
| `author_name` | `String` |  |
| `authored_date` | `String` |  |
| `committed_date` | `String` |  |
| `committer_email` | `String` |  |
| `committer_name` | `String` |  |
| `created_at` | `String` |  |
| `extended_trailer` | `Hash` |  |
| `id` | `String` |  |
| `last_pipeline` | `Hash` |  |
| `message` | `String` |  |
| `parent_id` | `Array` |  |
| `project_id` | `Integer` |  |
| `short_id` | `String` |  |
| `stat` | `Hash` |  |
| `status` | `String` |  |
| `title` | `String` |  |
| `trailer` | `Hash` |  |
| `web_url` | `String` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesCommitDetail record (raises on error).
api_entities_commit_detail = client.ApiEntitiesCommitDetail.load({ "project_id" => "project_id", "sha" => "sha" })
```

#### Example: Create

```ruby
api_entities_commit_detail = client.ApiEntitiesCommitDetail.create({
  "project_id" => "example_project_id", # String
})
```


### ApiEntitiesCommitNote

Create an instance: `api_entities_commit_note = client.ApiEntitiesCommitNote`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author` | `Hash` |  |
| `created_at` | `String` |  |
| `line` | `Integer` |  |
| `line_type` | `String` |  |
| `note` | `String` |  |
| `path` | `String` |  |

#### Example: List

```ruby
# list returns an Array of ApiEntitiesCommitNote records (raises on error).
api_entities_commit_notes = client.ApiEntitiesCommitNote.list
```

#### Example: Create

```ruby
api_entities_commit_note = client.ApiEntitiesCommitNote.create({
  "project_id" => "example_project_id", # String
  "sha" => "example_sha", # Object
})
```


### ApiEntitiesCommitSequence

Create an instance: `api_entities_commit_sequence = client.ApiEntitiesCommitSequence`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `count` | `Integer` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesCommitSequence record (raises on error).
api_entities_commit_sequence = client.ApiEntitiesCommitSequence.load({ "project_id" => "project_id", "sha" => "sha" })
```


### ApiEntitiesCommitSignature

Create an instance: `api_entities_commit_signature = client.ApiEntitiesCommitSignature`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `commit_source` | `String` |  |
| `signature` | `String` |  |
| `signature_type` | `String` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesCommitSignature record (raises on error).
api_entities_commit_signature = client.ApiEntitiesCommitSignature.load({ "project_id" => "project_id", "sha" => "sha" })
```


### ApiEntitiesCommitStatus

Create an instance: `api_entities_commit_status = client.ApiEntitiesCommitStatus`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_failure` | `Boolean` |  |
| `author` | `Hash` |  |
| `coverage` | `Float` |  |
| `created_at` | `String` |  |
| `description` | `String` |  |
| `finished_at` | `String` |  |
| `id` | `Integer` |  |
| `name` | `String` |  |
| `pipeline_id` | `Integer` |  |
| `ref` | `String` |  |
| `sha` | `String` |  |
| `started_at` | `String` |  |
| `status` | `String` |  |
| `target_url` | `String` |  |

#### Example: List

```ruby
# list returns an Array of ApiEntitiesCommitStatus records (raises on error).
api_entities_commit_statuss = client.ApiEntitiesCommitStatus.list
```

#### Example: Create

```ruby
api_entities_commit_status = client.ApiEntitiesCommitStatus.create({
  "id" => "example_id", # String
  "project_id" => "example_project_id", # String
})
```


### ApiEntitiesCompare

Create an instance: `api_entities_compare = client.ApiEntitiesCompare`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `commit` | `Hash` |  |
| `compare_same_ref` | `Boolean` |  |
| `compare_timeout` | `Boolean` |  |
| `diff` | `Array` |  |
| `web_url` | `String` |  |

#### Example: List

```ruby
# list returns an Array of ApiEntitiesCompare records (raises on error).
api_entities_compares = client.ApiEntitiesCompare.list
```


### ApiEntitiesContainerRegistryRepository

Create an instance: `api_entities_container_registry_repository = client.ApiEntitiesContainerRegistryRepository`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cleanup_policy_started_at` | `String` |  |
| `created_at` | `String` |  |
| `delete_api_path` | `String` |  |
| `id` | `Integer` |  |
| `location` | `String` |  |
| `name` | `String` |  |
| `path` | `String` |  |
| `project_id` | `Integer` |  |
| `size` | `Integer` |  |
| `status` | `String` |  |
| `tag` | `Hash` |  |
| `tags_count` | `Integer` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesContainerRegistryRepository record (raises on error).
api_entities_container_registry_repository = client.ApiEntitiesContainerRegistryRepository.load({ "id" => "api_entities_container_registry_repository_id" })
```

#### Example: List

```ruby
# list returns an Array of ApiEntitiesContainerRegistryRepository records (raises on error).
api_entities_container_registry_repositorys = client.ApiEntitiesContainerRegistryRepository.list
```


### ApiEntitiesContainerRegistryTag

Create an instance: `api_entities_container_registry_tag = client.ApiEntitiesContainerRegistryTag`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `location` | `String` |  |
| `name` | `String` |  |
| `path` | `String` |  |

#### Example: List

```ruby
# list returns an Array of ApiEntitiesContainerRegistryTag records (raises on error).
api_entities_container_registry_tags = client.ApiEntitiesContainerRegistryTag.list
```


### ApiEntitiesContainerRegistryTagDetail

Create an instance: `api_entities_container_registry_tag_detail = client.ApiEntitiesContainerRegistryTagDetail`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `String` |  |
| `digest` | `String` |  |
| `location` | `String` |  |
| `name` | `String` |  |
| `path` | `String` |  |
| `revision` | `String` |  |
| `short_revision` | `String` |  |
| `total_size` | `Integer` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesContainerRegistryTagDetail record (raises on error).
api_entities_container_registry_tag_detail = client.ApiEntitiesContainerRegistryTagDetail.load({ "project_id" => "project_id", "repository_id" => "repository_id", "tag_name" => "tag_name" })
```


### ApiEntitiesContributor

Create an instance: `api_entities_contributor = client.ApiEntitiesContributor`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `addition` | `Integer` |  |
| `commit` | `Integer` |  |
| `deletion` | `Integer` |  |
| `email` | `String` |  |
| `name` | `String` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesContributor record (raises on error).
api_entities_contributor = client.ApiEntitiesContributor.load({ "project_id" => "project_id" })
```


### ApiEntitiesDeployKey

Create an instance: `api_entities_deploy_key = client.ApiEntitiesDeployKey`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `String` |  |
| `expires_at` | `String` |  |
| `fingerprint` | `String` |  |
| `fingerprint_sha256` | `String` |  |
| `id` | `Integer` |  |
| `key` | `String` |  |
| `last_used_at` | `String` |  |
| `projects_with_readonly_access` | `Hash` |  |
| `projects_with_write_access` | `Hash` |  |
| `title` | `String` |  |
| `usage_type` | `String` |  |

#### Example: List

```ruby
# list returns an Array of ApiEntitiesDeployKey records (raises on error).
api_entities_deploy_keys = client.ApiEntitiesDeployKey.list
```

#### Example: Create

```ruby
api_entities_deploy_key = client.ApiEntitiesDeployKey.create({
})
```


### ApiEntitiesDeployKeysProject

Create an instance: `api_entities_deploy_keys_project = client.ApiEntitiesDeployKeysProject`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `can_push` | `Boolean` |  |
| `created_at` | `String` |  |
| `expires_at` | `String` |  |
| `fingerprint` | `String` |  |
| `fingerprint_sha256` | `String` |  |
| `id` | `Integer` |  |
| `key` | `String` |  |
| `last_used_at` | `String` |  |
| `projects_with_readonly_access` | `Hash` |  |
| `projects_with_write_access` | `Hash` |  |
| `title` | `String` |  |
| `usage_type` | `String` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesDeployKeysProject record (raises on error).
api_entities_deploy_keys_project = client.ApiEntitiesDeployKeysProject.load({ "key_id" => "key_id", "project_id" => "project_id" })
```

#### Example: List

```ruby
# list returns an Array of ApiEntitiesDeployKeysProject records (raises on error).
api_entities_deploy_keys_projects = client.ApiEntitiesDeployKeysProject.list
```

#### Example: Create

```ruby
api_entities_deploy_keys_project = client.ApiEntitiesDeployKeysProject.create({
  "project_id" => "example_project_id", # String
})
```


### ApiEntitiesDeployToken

Create an instance: `api_entities_deploy_token = client.ApiEntitiesDeployToken`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `expired` | `Boolean` |  |
| `expires_at` | `String` |  |
| `id` | `Integer` |  |
| `name` | `String` |  |
| `revoked` | `Boolean` |  |
| `scope` | `Array` |  |
| `username` | `String` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesDeployToken record (raises on error).
api_entities_deploy_token = client.ApiEntitiesDeployToken.load({ "id" => "api_entities_deploy_token_id" })
```

#### Example: List

```ruby
# list returns an Array of ApiEntitiesDeployToken records (raises on error).
api_entities_deploy_tokens = client.ApiEntitiesDeployToken.list
```


### ApiEntitiesDeployTokenWithToken

Create an instance: `api_entities_deploy_token_with_token = client.ApiEntitiesDeployTokenWithToken`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```ruby
api_entities_deploy_token_with_token = client.ApiEntitiesDeployTokenWithToken.create({
})
```


### ApiEntitiesDeployment

Create an instance: `api_entities_deployment = client.ApiEntitiesDeployment`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `String` |  |
| `deployable` | `Hash` |  |
| `environment` | `Hash` |  |
| `id` | `Integer` |  |
| `iid` | `Integer` |  |
| `ref` | `String` |  |
| `sha` | `String` |  |
| `status` | `String` |  |
| `updated_at` | `String` |  |
| `user` | `Hash` |  |

#### Example: List

```ruby
# list returns an Array of ApiEntitiesDeployment records (raises on error).
api_entities_deployments = client.ApiEntitiesDeployment.list
```


### ApiEntitiesDeploymentExtended

Create an instance: `api_entities_deployment_extended = client.ApiEntitiesDeploymentExtended`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `approval` | `Hash` |  |
| `approval_summary` | `Hash` |  |
| `created_at` | `String` |  |
| `deployable` | `Hash` |  |
| `environment` | `Hash` |  |
| `id` | `Integer` |  |
| `iid` | `Integer` |  |
| `pending_approval_count` | `Integer` |  |
| `ref` | `String` |  |
| `sha` | `String` |  |
| `status` | `String` |  |
| `updated_at` | `String` |  |
| `user` | `Hash` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesDeploymentExtended record (raises on error).
api_entities_deployment_extended = client.ApiEntitiesDeploymentExtended.load({ "deployment_id" => "deployment_id", "project_id" => "project_id" })
```

#### Example: Create

```ruby
api_entities_deployment_extended = client.ApiEntitiesDeploymentExtended.create({
  "project_id" => "example_project_id", # String
})
```


### ApiEntitiesDeploymentsApproval

Create an instance: `api_entities_deployments_approval = client.ApiEntitiesDeploymentsApproval`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```ruby
api_entities_deployments_approval = client.ApiEntitiesDeploymentsApproval.create({
  "deployment_id" => "example_deployment_id", # String
  "project_id" => "example_project_id", # String
})
```


### ApiEntitiesDictionaryTable

Create an instance: `api_entities_dictionary_table = client.ApiEntitiesDictionaryTable`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `feature_category` | `Array` |  |
| `table_name` | `String` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesDictionaryTable record (raises on error).
api_entities_dictionary_table = client.ApiEntitiesDictionaryTable.load({ "id" => "api_entities_dictionary_table_id", "databas_id" => "databas_id" })
```


### ApiEntitiesDiff

Create an instance: `api_entities_diff = client.ApiEntitiesDiff`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `a_mode` | `String` |  |
| `b_mode` | `String` |  |
| `collapsed` | `Boolean` |  |
| `deleted_file` | `Boolean` |  |
| `diff` | `String` |  |
| `generated_file` | `Boolean` |  |
| `new_file` | `Boolean` |  |
| `new_path` | `String` |  |
| `old_path` | `String` |  |
| `renamed_file` | `Boolean` |  |
| `too_large` | `Boolean` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesDiff record (raises on error).
api_entities_diff = client.ApiEntitiesDiff.load({ "merge_request_id" => "merge_request_id", "project_id" => "project_id" })
```

#### Example: List

```ruby
# list returns an Array of ApiEntitiesDiff records (raises on error).
api_entities_diffs = client.ApiEntitiesDiff.list
```


### ApiEntitiesDiscoveredCluster

Create an instance: `api_entities_discovered_cluster = client.ApiEntitiesDiscoveredCluster`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `group` | `String` |  |
| `project` | `String` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesDiscoveredCluster record (raises on error).
api_entities_discovered_cluster = client.ApiEntitiesDiscoveredCluster.load()
```


### ApiEntitiesDraftNote

Create an instance: `api_entities_draft_note = client.ApiEntitiesDraftNote`

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
| `author_id` | `Integer` |  |
| `commit_id` | `Integer` |  |
| `discussion_id` | `Integer` |  |
| `id` | `Integer` |  |
| `line_code` | `String` |  |
| `merge_request_id` | `Integer` |  |
| `note` | `String` |  |
| `position` | `Hash` |  |
| `resolve_discussion` | `Boolean` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesDraftNote record (raises on error).
api_entities_draft_note = client.ApiEntitiesDraftNote.load({ "id" => "api_entities_draft_note_id", "merge_request_id" => "merge_request_id", "project_id" => "project_id" })
```

#### Example: List

```ruby
# list returns an Array of ApiEntitiesDraftNote records (raises on error).
api_entities_draft_notes = client.ApiEntitiesDraftNote.list
```

#### Example: Create

```ruby
api_entities_draft_note = client.ApiEntitiesDraftNote.create({
  "merge_request_id" => "example_merge_request_id", # String
  "project_id" => "example_project_id", # String
})
```


### ApiEntitiesEnvironment

Create an instance: `api_entities_environment = client.ApiEntitiesEnvironment`

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
| `auto_stop_at` | `String` |  |
| `auto_stop_setting` | `String` |  |
| `cluster_agent` | `Hash` |  |
| `created_at` | `String` |  |
| `description` | `String` |  |
| `external_url` | `String` |  |
| `flux_resource_path` | `String` |  |
| `id` | `Integer` |  |
| `kubernetes_namespace` | `String` |  |
| `last_deployment` | `Hash` |  |
| `name` | `String` |  |
| `project` | `Hash` |  |
| `slug` | `String` |  |
| `state` | `String` |  |
| `tier` | `String` |  |
| `updated_at` | `String` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesEnvironment record (raises on error).
api_entities_environment = client.ApiEntitiesEnvironment.load({ "id" => "api_entities_environment_id", "project_id" => "project_id" })
```

#### Example: List

```ruby
# list returns an Array of ApiEntitiesEnvironment records (raises on error).
api_entities_environments = client.ApiEntitiesEnvironment.list
```

#### Example: Create

```ruby
api_entities_environment = client.ApiEntitiesEnvironment.create({
  "project_id" => "example_project_id", # String
})
```


### ApiEntitiesErrorTrackingClientKey

Create an instance: `api_entities_error_tracking_client_key = client.ApiEntitiesErrorTrackingClientKey`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `Boolean` |  |
| `id` | `Integer` |  |
| `public_key` | `String` |  |
| `sentry_dsn` | `String` |  |

#### Example: List

```ruby
# list returns an Array of ApiEntitiesErrorTrackingClientKey records (raises on error).
api_entities_error_tracking_client_keys = client.ApiEntitiesErrorTrackingClientKey.list
```

#### Example: Create

```ruby
api_entities_error_tracking_client_key = client.ApiEntitiesErrorTrackingClientKey.create({
  "project_id" => "example_project_id", # String
})
```


### ApiEntitiesErrorTrackingProjectSetting

Create an instance: `api_entities_error_tracking_project_setting = client.ApiEntitiesErrorTrackingProjectSetting`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `Boolean` |  |
| `api_url` | `String` |  |
| `integrated` | `Boolean` |  |
| `project_name` | `String` |  |
| `sentry_external_url` | `String` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesErrorTrackingProjectSetting record (raises on error).
api_entities_error_tracking_project_setting = client.ApiEntitiesErrorTrackingProjectSetting.load({ "project_id" => "project_id" })
```


### ApiEntitiesEvent

Create an instance: `api_entities_event = client.ApiEntitiesEvent`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action_name` | `String` |  |
| `author` | `Hash` |  |
| `author_id` | `Integer` |  |
| `author_username` | `String` |  |
| `created_at` | `String` |  |
| `id` | `Integer` |  |
| `imported` | `Boolean` |  |
| `imported_from` | `String` |  |
| `note` | `Hash` |  |
| `project_id` | `Integer` |  |
| `push_data` | `Hash` |  |
| `target_id` | `Integer` |  |
| `target_iid` | `Integer` |  |
| `target_title` | `String` |  |
| `target_type` | `String` |  |
| `wiki_page` | `Hash` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesEvent record (raises on error).
api_entities_event = client.ApiEntitiesEvent.load({ "project_id" => "project_id" })
```

#### Example: List

```ruby
# list returns an Array of ApiEntitiesEvent records (raises on error).
api_entities_events = client.ApiEntitiesEvent.list
```


### ApiEntitiesFeature

Create an instance: `api_entities_feature = client.ApiEntitiesFeature`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `definition` | `Hash` |  |
| `gate` | `Hash` |  |
| `name` | `String` |  |
| `state` | `String` |  |

#### Example: List

```ruby
# list returns an Array of ApiEntitiesFeature records (raises on error).
api_entities_features = client.ApiEntitiesFeature.list
```

#### Example: Create

```ruby
api_entities_feature = client.ApiEntitiesFeature.create({
  "id" => "example_id", # String
})
```


### ApiEntitiesFeatureDefinition

Create an instance: `api_entities_feature_definition = client.ApiEntitiesFeatureDefinition`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `default_enabled` | `String` |  |
| `feature_issue_url` | `String` |  |
| `group` | `String` |  |
| `intended_to_rollout_by` | `String` |  |
| `introduced_by_url` | `String` |  |
| `log_state_change` | `String` |  |
| `milestone` | `String` |  |
| `name` | `String` |  |
| `rollout_issue_url` | `String` |  |
| `type` | `String` |  |

#### Example: List

```ruby
# list returns an Array of ApiEntitiesFeatureDefinition records (raises on error).
api_entities_feature_definitions = client.ApiEntitiesFeatureDefinition.list
```


### ApiEntitiesFeatureFlag

Create an instance: `api_entities_feature_flag = client.ApiEntitiesFeatureFlag`

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
| `active` | `Boolean` |  |
| `created_at` | `String` |  |
| `description` | `String` |  |
| `name` | `String` |  |
| `scope` | `String` |  |
| `strategy` | `Hash` |  |
| `updated_at` | `String` |  |
| `version` | `String` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesFeatureFlag record (raises on error).
api_entities_feature_flag = client.ApiEntitiesFeatureFlag.load({ "id" => "api_entities_feature_flag_id", "project_id" => "project_id" })
```

#### Example: List

```ruby
# list returns an Array of ApiEntitiesFeatureFlag records (raises on error).
api_entities_feature_flags = client.ApiEntitiesFeatureFlag.list
```

#### Example: Create

```ruby
api_entities_feature_flag = client.ApiEntitiesFeatureFlag.create({
  "project_id" => "example_project_id", # String
})
```


### ApiEntitiesFeatureFlagUserList

Create an instance: `api_entities_feature_flag_user_list = client.ApiEntitiesFeatureFlagUserList`

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
| `created_at` | `String` |  |
| `edit_path` | `String` |  |
| `id` | `Integer` |  |
| `iid` | `Integer` |  |
| `name` | `String` |  |
| `path` | `String` |  |
| `project_id` | `Integer` |  |
| `updated_at` | `String` |  |
| `user_xid` | `String` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesFeatureFlagUserList record (raises on error).
api_entities_feature_flag_user_list = client.ApiEntitiesFeatureFlagUserList.load({ "iid" => "iid", "project_id" => "project_id" })
```

#### Example: List

```ruby
# list returns an Array of ApiEntitiesFeatureFlagUserList records (raises on error).
api_entities_feature_flag_user_lists = client.ApiEntitiesFeatureFlagUserList.list
```

#### Example: Create

```ruby
api_entities_feature_flag_user_list = client.ApiEntitiesFeatureFlagUserList.create({
  "project_id" => "example_project_id", # String
})
```


### ApiEntitiesFreezePeriod

Create an instance: `api_entities_freeze_period = client.ApiEntitiesFreezePeriod`

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
| `created_at` | `String` |  |
| `cron_timezone` | `String` |  |
| `freeze_end` | `String` |  |
| `freeze_start` | `String` |  |
| `id` | `Integer` |  |
| `updated_at` | `String` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesFreezePeriod record (raises on error).
api_entities_freeze_period = client.ApiEntitiesFreezePeriod.load({ "id" => "api_entities_freeze_period_id", "project_id" => "project_id" })
```

#### Example: List

```ruby
# list returns an Array of ApiEntitiesFreezePeriod records (raises on error).
api_entities_freeze_periods = client.ApiEntitiesFreezePeriod.list
```

#### Example: Create

```ruby
api_entities_freeze_period = client.ApiEntitiesFreezePeriod.create({
  "project_id" => "example_project_id", # String
})
```


### ApiEntitiesGitlabSubscription

Create an instance: `api_entities_gitlab_subscription = client.ApiEntitiesGitlabSubscription`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `billing` | `Hash` |  |
| `plan` | `Hash` |  |
| `usage` | `Hash` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesGitlabSubscription record (raises on error).
api_entities_gitlab_subscription = client.ApiEntitiesGitlabSubscription.load({ "namespace_id" => "namespace_id" })
```


### ApiEntitiesGoModuleVersion

Create an instance: `api_entities_go_module_version = client.ApiEntitiesGoModuleVersion`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `time` | `String` |  |
| `version` | `String` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesGoModuleVersion record (raises on error).
api_entities_go_module_version = client.ApiEntitiesGoModuleVersion.load({ "module_version" => "module_version", "project_id" => "project_id" })
```


### ApiEntitiesGroup

Create an instance: `api_entities_group = client.ApiEntitiesGroup`

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
| `archived` | `Boolean` |  |
| `auto_devops_enabled` | `String` |  |
| `auto_duo_code_review_enabled` | `String` |  |
| `avatar_url` | `String` |  |
| `created_at` | `String` |  |
| `custom_attribute` | `Hash` |  |
| `default_branch` | `String` |  |
| `default_branch_protection` | `String` |  |
| `default_branch_protection_default` | `String` |  |
| `description` | `String` |  |
| `duo_core_features_enabled` | `Boolean` |  |
| `duo_features_enabled` | `String` |  |
| `emails_disabled` | `Boolean` |  |
| `emails_enabled` | `Boolean` |  |
| `file_template_project_id` | `String` |  |
| `full_name` | `String` |  |
| `full_path` | `String` |  |
| `id` | `String` |  |
| `ldap_access` | `String` |  |
| `ldap_cn` | `String` |  |
| `ldap_group_link` | `Hash` |  |
| `lfs_enabled` | `String` |  |
| `lock_duo_features_enabled` | `String` |  |
| `lock_math_rendering_limits_enabled` | `Boolean` |  |
| `marked_for_deletion_on` | `String` |  |
| `math_rendering_limits_enabled` | `Boolean` |  |
| `max_artifacts_size` | `Integer` |  |
| `mentions_disabled` | `String` |  |
| `name` | `String` |  |
| `organization_id` | `String` |  |
| `parent_id` | `String` |  |
| `path` | `String` |  |
| `project_creation_level` | `String` |  |
| `repository_storage` | `String` |  |
| `request_access_enabled` | `String` |  |
| `require_two_factor_authentication` | `String` |  |
| `root_storage_statistic` | `Hash` |  |
| `saml_group_link` | `Hash` |  |
| `share_with_group_lock` | `String` |  |
| `shared_runners_setting` | `String` |  |
| `show_diff_preview_in_email` | `Boolean` |  |
| `statistic` | `Hash` |  |
| `subgroup_creation_level` | `String` |  |
| `two_factor_grace_period` | `String` |  |
| `visibility` | `String` |  |
| `web_based_commit_signing_enabled` | `String` |  |
| `web_url` | `String` |  |
| `wiki_access_level` | `String` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesGroup record (raises on error).
api_entities_group = client.ApiEntitiesGroup.load({ "project_id" => "project_id" })
```

#### Example: List

```ruby
# list returns an Array of ApiEntitiesGroup records (raises on error).
api_entities_groups = client.ApiEntitiesGroup.list
```

#### Example: Create

```ruby
api_entities_group = client.ApiEntitiesGroup.create({
})
```


### ApiEntitiesGroupDetail

Create an instance: `api_entities_group_detail = client.ApiEntitiesGroupDetail`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowed_email_domains_list` | `String` |  |
| `archived` | `Boolean` |  |
| `auto_ban_user_on_excessive_projects_download` | `String` |  |
| `auto_devops_enabled` | `String` |  |
| `auto_duo_code_review_enabled` | `String` |  |
| `avatar_url` | `String` |  |
| `created_at` | `String` |  |
| `custom_attribute` | `Hash` |  |
| `default_branch` | `String` |  |
| `default_branch_protection` | `String` |  |
| `default_branch_protection_default` | `String` |  |
| `description` | `String` |  |
| `duo_core_features_enabled` | `Boolean` |  |
| `duo_features_enabled` | `String` |  |
| `emails_disabled` | `Boolean` |  |
| `emails_enabled` | `Boolean` |  |
| `enabled_git_access_protocol` | `String` |  |
| `extra_shared_runners_minutes_limit` | `String` |  |
| `file_template_project_id` | `String` |  |
| `full_name` | `String` |  |
| `full_path` | `String` |  |
| `id` | `String` |  |
| `ip_restriction_range` | `String` |  |
| `ldap_access` | `String` |  |
| `ldap_cn` | `String` |  |
| `ldap_group_link` | `Hash` |  |
| `lfs_enabled` | `String` |  |
| `lock_duo_features_enabled` | `String` |  |
| `lock_math_rendering_limits_enabled` | `Boolean` |  |
| `marked_for_deletion_on` | `String` |  |
| `math_rendering_limits_enabled` | `Boolean` |  |
| `max_artifacts_size` | `Integer` |  |
| `membership_lock` | `String` |  |
| `mentions_disabled` | `String` |  |
| `name` | `String` |  |
| `organization_id` | `String` |  |
| `parent_id` | `String` |  |
| `path` | `String` |  |
| `prevent_forking_outside_group` | `String` |  |
| `prevent_sharing_groups_outside_hierarchy` | `String` |  |
| `project` | `Hash` |  |
| `project_creation_level` | `String` |  |
| `repository_storage` | `String` |  |
| `request_access_enabled` | `String` |  |
| `require_two_factor_authentication` | `String` |  |
| `root_storage_statistic` | `Hash` |  |
| `runners_token` | `String` |  |
| `saml_group_link` | `Hash` |  |
| `service_access_tokens_expiration_enforced` | `String` |  |
| `share_with_group_lock` | `String` |  |
| `shared_project` | `Hash` |  |
| `shared_runners_minutes_limit` | `String` |  |
| `shared_runners_setting` | `String` |  |
| `shared_with_group` | `String` |  |
| `show_diff_preview_in_email` | `Boolean` |  |
| `statistic` | `Hash` |  |
| `subgroup_creation_level` | `String` |  |
| `two_factor_grace_period` | `String` |  |
| `unique_project_download_limit` | `String` |  |
| `unique_project_download_limit_alertlist` | `String` |  |
| `unique_project_download_limit_allowlist` | `String` |  |
| `unique_project_download_limit_interval_in_second` | `String` |  |
| `visibility` | `String` |  |
| `web_based_commit_signing_enabled` | `String` |  |
| `web_url` | `String` |  |
| `wiki_access_level` | `String` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesGroupDetail record (raises on error).
api_entities_group_detail = client.ApiEntitiesGroupDetail.load({ "id" => "api_entities_group_detail_id" })
```

#### Example: Create

```ruby
api_entities_group_detail = client.ApiEntitiesGroupDetail.create({
  "group_id" => "example_group_id", # String
})
```


### ApiEntitiesHook

Create an instance: `api_entities_hook = client.ApiEntitiesHook`

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
| `alert_status` | `Object` |  |
| `branch_filter_strategy` | `String` |  |
| `created_at` | `String` |  |
| `custom_header` | `Array` |  |
| `custom_webhook_template` | `String` |  |
| `description` | `String` |  |
| `disabled_until` | `String` |  |
| `enable_ssl_verification` | `Boolean` |  |
| `id` | `String` |  |
| `merge_requests_event` | `Boolean` |  |
| `name` | `String` |  |
| `push_event` | `Boolean` |  |
| `push_events_branch_filter` | `String` |  |
| `repository_update_event` | `Boolean` |  |
| `tag_push_event` | `Boolean` |  |
| `url` | `String` |  |
| `url_variable` | `Array` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesHook record (raises on error).
api_entities_hook = client.ApiEntitiesHook.load({ "id" => "api_entities_hook_id" })
```

#### Example: List

```ruby
# list returns an Array of ApiEntitiesHook records (raises on error).
api_entities_hooks = client.ApiEntitiesHook.list
```

#### Example: Create

```ruby
api_entities_hook = client.ApiEntitiesHook.create({
})
```


### ApiEntitiesIntegration

Create an instance: `api_entities_integration = client.ApiEntitiesIntegration`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `Boolean` |  |
| `alert_event` | `Boolean` |  |
| `comment_on_event_enabled` | `Boolean` |  |
| `commit_event` | `Boolean` |  |
| `confidential_issues_event` | `Boolean` |  |
| `confidential_note_event` | `Boolean` |  |
| `created_at` | `String` |  |
| `deployment_event` | `Boolean` |  |
| `id` | `Integer` |  |
| `incident_event` | `Boolean` |  |
| `inherited` | `Boolean` |  |
| `issues_event` | `Boolean` |  |
| `job_event` | `Boolean` |  |
| `merge_requests_event` | `Boolean` |  |
| `note_event` | `Boolean` |  |
| `pipeline_event` | `Boolean` |  |
| `property` | `Hash` |  |
| `push_event` | `Boolean` |  |
| `slug` | `Integer` |  |
| `tag_push_event` | `Boolean` |  |
| `title` | `String` |  |
| `updated_at` | `String` |  |
| `vulnerability_event` | `Boolean` |  |
| `wiki_page_event` | `Boolean` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesIntegration record (raises on error).
api_entities_integration = client.ApiEntitiesIntegration.load({ "id" => "api_entities_integration_id" })
```


### ApiEntitiesIntegrationBasic

Create an instance: `api_entities_integration_basic = client.ApiEntitiesIntegrationBasic`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `Boolean` |  |
| `alert_event` | `Boolean` |  |
| `comment_on_event_enabled` | `Boolean` |  |
| `commit_event` | `Boolean` |  |
| `confidential_issues_event` | `Boolean` |  |
| `confidential_note_event` | `Boolean` |  |
| `created_at` | `String` |  |
| `deployment_event` | `Boolean` |  |
| `id` | `Integer` |  |
| `incident_event` | `Boolean` |  |
| `inherited` | `Boolean` |  |
| `issues_event` | `Boolean` |  |
| `job_event` | `Boolean` |  |
| `merge_requests_event` | `Boolean` |  |
| `note_event` | `Boolean` |  |
| `pipeline_event` | `Boolean` |  |
| `push_event` | `Boolean` |  |
| `slug` | `Integer` |  |
| `tag_push_event` | `Boolean` |  |
| `title` | `String` |  |
| `updated_at` | `String` |  |
| `vulnerability_event` | `Boolean` |  |
| `wiki_page_event` | `Boolean` |  |

#### Example: List

```ruby
# list returns an Array of ApiEntitiesIntegrationBasic records (raises on error).
api_entities_integration_basics = client.ApiEntitiesIntegrationBasic.list
```


### ApiEntitiesInvitation

Create an instance: `api_entities_invitation = client.ApiEntitiesInvitation`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `access_level` | `String` |  |
| `created_at` | `String` |  |
| `created_by_name` | `String` |  |
| `expires_at` | `String` |  |
| `invite_email` | `String` |  |
| `invite_token` | `String` |  |
| `user_name` | `String` |  |

#### Example: List

```ruby
# list returns an Array of ApiEntitiesInvitation records (raises on error).
api_entities_invitations = client.ApiEntitiesInvitation.list
```

#### Example: Create

```ruby
api_entities_invitation = client.ApiEntitiesInvitation.create({
})
```


### ApiEntitiesIssuableTimeStat

Create an instance: `api_entities_issuable_time_stat = client.ApiEntitiesIssuableTimeStat`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `human_time_estimate` | `String` |  |
| `human_total_time_spent` | `String` |  |
| `time_estimate` | `Integer` |  |
| `total_time_spent` | `Integer` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesIssuableTimeStat record (raises on error).
api_entities_issuable_time_stat = client.ApiEntitiesIssuableTimeStat.load({ "project_id" => "project_id" })
```

#### Example: Create

```ruby
api_entities_issuable_time_stat = client.ApiEntitiesIssuableTimeStat.create({
  "project_id" => "example_project_id", # String
})
```


### ApiEntitiesIssue

Create an instance: `api_entities_issue = client.ApiEntitiesIssue`

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
| `assignee` | `Hash` |  |
| `author` | `Hash` |  |
| `blocking_issues_count` | `String` |  |
| `closed_at` | `String` |  |
| `closed_by` | `Hash` |  |
| `confidential` | `Boolean` |  |
| `created_at` | `String` |  |
| `description` | `String` |  |
| `discussion_locked` | `Boolean` |  |
| `downvote` | `String` |  |
| `due_date` | `String` |  |
| `epic` | `Hash` |  |
| `epic_iid` | `String` |  |
| `has_task` | `Boolean` |  |
| `health_status` | `String` |  |
| `id` | `Integer` |  |
| `iid` | `Integer` |  |
| `imported` | `String` |  |
| `imported_from` | `String` |  |
| `issue_type` | `String` |  |
| `iteration` | `Hash` |  |
| `label` | `Array` |  |
| `link` | `Hash` |  |
| `merge_requests_count` | `String` |  |
| `milestone` | `Hash` |  |
| `moved_to_id` | `String` |  |
| `project_id` | `Integer` |  |
| `reference` | `Hash` |  |
| `service_desk_reply_to` | `String` |  |
| `severity` | `String` |  |
| `state` | `String` |  |
| `subscribed` | `String` |  |
| `task_completion_status` | `String` |  |
| `task_status` | `String` |  |
| `time_stat` | `Hash` |  |
| `title` | `String` |  |
| `type` | `String` |  |
| `updated_at` | `String` |  |
| `upvote` | `String` |  |
| `user_notes_count` | `String` |  |
| `web_url` | `String` |  |
| `weight` | `String` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesIssue record (raises on error).
api_entities_issue = client.ApiEntitiesIssue.load({ "id" => "api_entities_issue_id" })
```

#### Example: List

```ruby
# list returns an Array of ApiEntitiesIssue records (raises on error).
api_entities_issues = client.ApiEntitiesIssue.list
```

#### Example: Create

```ruby
api_entities_issue = client.ApiEntitiesIssue.create({
  "project_id" => "example_project_id", # String
})
```


### ApiEntitiesIssueLink

Create an instance: `api_entities_issue_link = client.ApiEntitiesIssueLink`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `link_type` | `String` |  |
| `source_issue` | `Hash` |  |
| `target_issue` | `Hash` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesIssueLink record (raises on error).
api_entities_issue_link = client.ApiEntitiesIssueLink.load({ "id" => "api_entities_issue_link_id", "issue_id" => "issue_id", "project_id" => "project_id" })
```

#### Example: Create

```ruby
api_entities_issue_link = client.ApiEntitiesIssueLink.create({
  "issue_id" => "example_issue_id", # String
  "project_id" => "example_project_id", # String
})
```


### ApiEntitiesLicense

Create an instance: `api_entities_license = client.ApiEntitiesLicense`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `condition` | `Array` |  |
| `content` | `String` |  |
| `description` | `String` |  |
| `html_url` | `String` |  |
| `key` | `String` |  |
| `limitation` | `Array` |  |
| `name` | `String` |  |
| `nickname` | `String` |  |
| `permission` | `Array` |  |
| `popular` | `Boolean` |  |
| `source_url` | `String` |  |

#### Example: List

```ruby
# list returns an Array of ApiEntitiesLicense records (raises on error).
api_entities_licenses = client.ApiEntitiesLicense.list
```


### ApiEntitiesMarkdown

Create an instance: `api_entities_markdown = client.ApiEntitiesMarkdown`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```ruby
api_entities_markdown = client.ApiEntitiesMarkdown.create({
})
```


### ApiEntitiesMarkdownUploadAdmin

Create an instance: `api_entities_markdown_upload_admin = client.ApiEntitiesMarkdownUploadAdmin`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `String` |  |
| `filename` | `String` |  |
| `id` | `String` |  |
| `size` | `String` |  |
| `uploaded_by` | `Hash` |  |

#### Example: List

```ruby
# list returns an Array of ApiEntitiesMarkdownUploadAdmin records (raises on error).
api_entities_markdown_upload_admins = client.ApiEntitiesMarkdownUploadAdmin.list
```


### ApiEntitiesMember

Create an instance: `api_entities_member = client.ApiEntitiesMember`

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
| `access_level` | `String` |  |
| `avatar_path` | `String` |  |
| `avatar_url` | `String` |  |
| `created_at` | `String` |  |
| `created_by` | `Hash` |  |
| `custom_attribute` | `Array` |  |
| `email` | `String` |  |
| `expires_at` | `String` |  |
| `group_saml_identity` | `Hash` |  |
| `group_scim_identity` | `Hash` |  |
| `id` | `Integer` |  |
| `is_using_seat` | `Boolean` |  |
| `key` | `String` |  |
| `locked` | `Boolean` |  |
| `member_role` | `Hash` |  |
| `membership_state` | `String` |  |
| `name` | `String` |  |
| `override` | `String` |  |
| `public_email` | `String` |  |
| `state` | `String` |  |
| `username` | `String` |  |
| `value` | `String` |  |
| `web_url` | `String` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesMember record (raises on error).
api_entities_member = client.ApiEntitiesMember.load({ "id" => "api_entities_member_id" })
```

#### Example: List

```ruby
# list returns an Array of ApiEntitiesMember records (raises on error).
api_entities_members = client.ApiEntitiesMember.list
```

#### Example: Create

```ruby
api_entities_member = client.ApiEntitiesMember.create({
})
```


### ApiEntitiesMerge

Create an instance: `api_entities_merge = client.ApiEntitiesMerge`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_collaboration` | `Boolean` |  |
| `allow_maintainer_to_push` | `Boolean` |  |
| `approvals_before_merge` | `String` |  |
| `assignee` | `Hash` |  |
| `author` | `Hash` |  |
| `blocking_discussions_resolved` | `String` |  |
| `changes_count` | `String` |  |
| `closed_at` | `String` |  |
| `closed_by` | `Hash` |  |
| `created_at` | `String` |  |
| `description` | `String` |  |
| `description_html` | `String` |  |
| `detailed_merge_status` | `String` |  |
| `diff_ref` | `Hash` |  |
| `discussion_locked` | `String` |  |
| `diverged_commits_count` | `String` |  |
| `downvote` | `String` |  |
| `draft` | `String` |  |
| `first_contribution` | `String` |  |
| `first_deployed_to_production_at` | `String` |  |
| `force_remove_source_branch` | `String` |  |
| `has_conflict` | `Boolean` |  |
| `head_pipeline` | `Hash` |  |
| `id` | `Integer` |  |
| `iid` | `Integer` |  |
| `imported` | `String` |  |
| `imported_from` | `String` |  |
| `label` | `String` |  |
| `latest_build_finished_at` | `String` |  |
| `latest_build_started_at` | `String` |  |
| `merge_after` | `String` |  |
| `merge_commit_sha` | `String` |  |
| `merge_error` | `String` |  |
| `merge_status` | `String` |  |
| `merge_user` | `Hash` |  |
| `merge_when_pipeline_succeed` | `String` |  |
| `merged_at` | `String` |  |
| `merged_by` | `Hash` |  |
| `milestone` | `Hash` |  |
| `pipeline` | `Hash` |  |
| `prepared_at` | `String` |  |
| `project_id` | `Integer` |  |
| `rebase_in_progress` | `String` |  |
| `reference` | `String` |  |
| `reviewer` | `Hash` |  |
| `sha` | `String` |  |
| `should_remove_source_branch` | `Boolean` |  |
| `source_branch` | `String` |  |
| `source_project_id` | `String` |  |
| `squash` | `String` |  |
| `squash_commit_sha` | `String` |  |
| `squash_on_merge` | `String` |  |
| `state` | `String` |  |
| `subscribed` | `String` |  |
| `target_branch` | `String` |  |
| `target_project_id` | `String` |  |
| `task_completion_status` | `String` |  |
| `time_stat` | `Hash` |  |
| `title` | `String` |  |
| `title_html` | `String` |  |
| `updated_at` | `String` |  |
| `upvote` | `String` |  |
| `user` | `Hash` |  |
| `user_notes_count` | `String` |  |
| `web_url` | `String` |  |
| `work_in_progress` | `String` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesMerge record (raises on error).
api_entities_merge = client.ApiEntitiesMerge.load({ "merge_request_iid" => "merge_request_iid", "project_id" => "project_id" })
```

#### Example: Create

```ruby
api_entities_merge = client.ApiEntitiesMerge.create({
  "project_id" => "example_project_id", # String
})
```


### ApiEntitiesMergeRequestApproval

Create an instance: `api_entities_merge_request_approval = client.ApiEntitiesMergeRequestApproval`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `approved` | `Boolean` |  |
| `approved_by` | `Hash` |  |
| `user_can_approve` | `Boolean` |  |
| `user_has_approved` | `Boolean` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesMergeRequestApproval record (raises on error).
api_entities_merge_request_approval = client.ApiEntitiesMergeRequestApproval.load({ "merge_request_id" => "merge_request_id", "project_id" => "project_id" })
```

#### Example: Create

```ruby
api_entities_merge_request_approval = client.ApiEntitiesMergeRequestApproval.create({
  "merge_request_id" => "example_merge_request_id", # String
  "project_id" => "example_project_id", # String
})
```


### ApiEntitiesMergeRequestBasic

Create an instance: `api_entities_merge_request_basic = client.ApiEntitiesMergeRequestBasic`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_collaboration` | `Boolean` |  |
| `allow_maintainer_to_push` | `Boolean` |  |
| `approvals_before_merge` | `String` |  |
| `assignee` | `Hash` |  |
| `author` | `Hash` |  |
| `blocking_discussions_resolved` | `String` |  |
| `closed_at` | `String` |  |
| `closed_by` | `Hash` |  |
| `created_at` | `String` |  |
| `description` | `String` |  |
| `description_html` | `String` |  |
| `detailed_merge_status` | `String` |  |
| `discussion_locked` | `String` |  |
| `downvote` | `String` |  |
| `draft` | `String` |  |
| `force_remove_source_branch` | `String` |  |
| `has_conflict` | `Boolean` |  |
| `id` | `Integer` |  |
| `iid` | `Integer` |  |
| `imported` | `String` |  |
| `imported_from` | `String` |  |
| `label` | `String` |  |
| `merge_after` | `String` |  |
| `merge_commit_sha` | `String` |  |
| `merge_status` | `String` |  |
| `merge_user` | `Hash` |  |
| `merge_when_pipeline_succeed` | `String` |  |
| `merged_at` | `String` |  |
| `merged_by` | `Hash` |  |
| `milestone` | `Hash` |  |
| `prepared_at` | `String` |  |
| `project_id` | `Integer` |  |
| `reference` | `String` |  |
| `reviewer` | `Hash` |  |
| `sha` | `String` |  |
| `should_remove_source_branch` | `Boolean` |  |
| `source_branch` | `String` |  |
| `source_project_id` | `String` |  |
| `squash` | `String` |  |
| `squash_commit_sha` | `String` |  |
| `squash_on_merge` | `String` |  |
| `state` | `String` |  |
| `target_branch` | `String` |  |
| `target_project_id` | `String` |  |
| `task_completion_status` | `String` |  |
| `time_stat` | `Hash` |  |
| `title` | `String` |  |
| `title_html` | `String` |  |
| `updated_at` | `String` |  |
| `upvote` | `String` |  |
| `user_notes_count` | `String` |  |
| `web_url` | `String` |  |
| `work_in_progress` | `String` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesMergeRequestBasic record (raises on error).
api_entities_merge_request_basic = client.ApiEntitiesMergeRequestBasic.load()
```

#### Example: List

```ruby
# list returns an Array of ApiEntitiesMergeRequestBasic records (raises on error).
api_entities_merge_request_basics = client.ApiEntitiesMergeRequestBasic.list
```


### ApiEntitiesMergeRequestChange

Create an instance: `api_entities_merge_request_change = client.ApiEntitiesMergeRequestChange`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_collaboration` | `Boolean` |  |
| `allow_maintainer_to_push` | `Boolean` |  |
| `approvals_before_merge` | `String` |  |
| `assignee` | `Hash` |  |
| `author` | `Hash` |  |
| `blocking_discussions_resolved` | `String` |  |
| `change` | `Hash` |  |
| `changes_count` | `String` |  |
| `closed_at` | `String` |  |
| `closed_by` | `Hash` |  |
| `created_at` | `String` |  |
| `description` | `String` |  |
| `description_html` | `String` |  |
| `detailed_merge_status` | `String` |  |
| `diff_ref` | `Hash` |  |
| `discussion_locked` | `String` |  |
| `diverged_commits_count` | `String` |  |
| `downvote` | `String` |  |
| `draft` | `String` |  |
| `first_contribution` | `String` |  |
| `first_deployed_to_production_at` | `String` |  |
| `force_remove_source_branch` | `String` |  |
| `has_conflict` | `Boolean` |  |
| `head_pipeline` | `Hash` |  |
| `id` | `Integer` |  |
| `iid` | `Integer` |  |
| `imported` | `String` |  |
| `imported_from` | `String` |  |
| `label` | `String` |  |
| `latest_build_finished_at` | `String` |  |
| `latest_build_started_at` | `String` |  |
| `merge_after` | `String` |  |
| `merge_commit_sha` | `String` |  |
| `merge_error` | `String` |  |
| `merge_status` | `String` |  |
| `merge_user` | `Hash` |  |
| `merge_when_pipeline_succeed` | `String` |  |
| `merged_at` | `String` |  |
| `merged_by` | `Hash` |  |
| `milestone` | `Hash` |  |
| `overflow` | `String` |  |
| `pipeline` | `Hash` |  |
| `prepared_at` | `String` |  |
| `project_id` | `Integer` |  |
| `rebase_in_progress` | `String` |  |
| `reference` | `String` |  |
| `reviewer` | `Hash` |  |
| `sha` | `String` |  |
| `should_remove_source_branch` | `Boolean` |  |
| `source_branch` | `String` |  |
| `source_project_id` | `String` |  |
| `squash` | `String` |  |
| `squash_commit_sha` | `String` |  |
| `squash_on_merge` | `String` |  |
| `state` | `String` |  |
| `subscribed` | `String` |  |
| `target_branch` | `String` |  |
| `target_project_id` | `String` |  |
| `task_completion_status` | `String` |  |
| `time_stat` | `Hash` |  |
| `title` | `String` |  |
| `title_html` | `String` |  |
| `updated_at` | `String` |  |
| `upvote` | `String` |  |
| `user` | `Hash` |  |
| `user_notes_count` | `String` |  |
| `web_url` | `String` |  |
| `work_in_progress` | `String` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesMergeRequestChange record (raises on error).
api_entities_merge_request_change = client.ApiEntitiesMergeRequestChange.load({ "merge_request_id" => "merge_request_id", "project_id" => "project_id" })
```


### ApiEntitiesMergeRequestDiff

Create an instance: `api_entities_merge_request_diff = client.ApiEntitiesMergeRequestDiff`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `base_commit_sha` | `String` |  |
| `created_at` | `String` |  |
| `head_commit_sha` | `String` |  |
| `id` | `String` |  |
| `merge_request_id` | `String` |  |
| `patch_id_sha` | `String` |  |
| `real_size` | `String` |  |
| `start_commit_sha` | `String` |  |
| `state` | `String` |  |

#### Example: List

```ruby
# list returns an Array of ApiEntitiesMergeRequestDiff records (raises on error).
api_entities_merge_request_diffs = client.ApiEntitiesMergeRequestDiff.list
```


### ApiEntitiesMergeRequestDiffFull

Create an instance: `api_entities_merge_request_diff_full = client.ApiEntitiesMergeRequestDiffFull`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `base_commit_sha` | `String` |  |
| `commit` | `Hash` |  |
| `created_at` | `String` |  |
| `diff` | `Hash` |  |
| `head_commit_sha` | `String` |  |
| `id` | `String` |  |
| `merge_request_id` | `String` |  |
| `patch_id_sha` | `String` |  |
| `real_size` | `String` |  |
| `start_commit_sha` | `String` |  |
| `state` | `String` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesMergeRequestDiffFull record (raises on error).
api_entities_merge_request_diff_full = client.ApiEntitiesMergeRequestDiffFull.load({ "merge_request_id" => "merge_request_id", "project_id" => "project_id", "version_id" => "version_id" })
```


### ApiEntitiesMergeRequestReviewer

Create an instance: `api_entities_merge_request_reviewer = client.ApiEntitiesMergeRequestReviewer`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `String` |  |
| `state` | `String` |  |
| `user` | `Hash` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesMergeRequestReviewer record (raises on error).
api_entities_merge_request_reviewer = client.ApiEntitiesMergeRequestReviewer.load({ "merge_request_id" => "merge_request_id", "project_id" => "project_id" })
```


### ApiEntitiesMetricImage

Create an instance: `api_entities_metric_image = client.ApiEntitiesMetricImage`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `String` |  |
| `file_path` | `String` |  |
| `filename` | `String` |  |
| `id` | `Integer` |  |
| `url` | `String` |  |
| `url_text` | `String` |  |

#### Example: List

```ruby
# list returns an Array of ApiEntitiesMetricImage records (raises on error).
api_entities_metric_images = client.ApiEntitiesMetricImage.list
```

#### Example: Create

```ruby
api_entities_metric_image = client.ApiEntitiesMetricImage.create({
  "alert_management_alert_id" => "example_alert_management_alert_id", # String
  "project_id" => "example_project_id", # String
})
```


### ApiEntitiesMrNote

Create an instance: `api_entities_mr_note = client.ApiEntitiesMrNote`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author` | `Hash` |  |
| `note` | `String` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesMrNote record (raises on error).
api_entities_mr_note = client.ApiEntitiesMrNote.load({ "merge_request_id" => "merge_request_id", "project_id" => "project_id" })
```


### ApiEntitiesNamespace

Create an instance: `api_entities_namespace = client.ApiEntitiesNamespace`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `additional_purchased_storage_ends_on` | `String` |  |
| `additional_purchased_storage_size` | `Integer` |  |
| `avatar_url` | `String` |  |
| `billable_members_count` | `Integer` |  |
| `end_date` | `String` |  |
| `extra_shared_runners_minutes_limit` | `Integer` |  |
| `full_path` | `String` |  |
| `id` | `Integer` |  |
| `kind` | `String` |  |
| `max_seats_used` | `Integer` |  |
| `max_seats_used_changed_at` | `String` |  |
| `members_count_with_descendant` | `Integer` |  |
| `name` | `String` |  |
| `parent_id` | `Integer` |  |
| `path` | `String` |  |
| `plan` | `String` |  |
| `projects_count` | `Integer` |  |
| `root_repository_size` | `Integer` |  |
| `seats_in_use` | `Integer` |  |
| `shared_runners_minutes_limit` | `Integer` |  |
| `trial` | `Boolean` |  |
| `trial_ends_on` | `String` |  |
| `web_url` | `String` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesNamespace record (raises on error).
api_entities_namespace = client.ApiEntitiesNamespace.load({ "id" => "api_entities_namespace_id" })
```

#### Example: List

```ruby
# list returns an Array of ApiEntitiesNamespace records (raises on error).
api_entities_namespaces = client.ApiEntitiesNamespace.list
```


### ApiEntitiesNamespaceExistence

Create an instance: `api_entities_namespace_existence = client.ApiEntitiesNamespaceExistence`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `exist` | `Boolean` |  |
| `suggest` | `Array` |  |

#### Example: List

```ruby
# list returns an Array of ApiEntitiesNamespaceExistence records (raises on error).
api_entities_namespace_existences = client.ApiEntitiesNamespaceExistence.list
```


### ApiEntitiesNamespacesStorageLimitExclusion

Create an instance: `api_entities_namespaces_storage_limit_exclusion = client.ApiEntitiesNamespacesStorageLimitExclusion`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `Integer` |  |
| `namespace_id` | `Integer` |  |
| `namespace_name` | `String` |  |
| `reason` | `String` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesNamespacesStorageLimitExclusion record (raises on error).
api_entities_namespaces_storage_limit_exclusion = client.ApiEntitiesNamespacesStorageLimitExclusion.load({ "id" => 1 })
```

#### Example: Create

```ruby
api_entities_namespaces_storage_limit_exclusion = client.ApiEntitiesNamespacesStorageLimitExclusion.create({
  "namespace_id" => "example_namespace_id", # String
})
```


### ApiEntitiesNpmPackage

Create an instance: `api_entities_npm_package = client.ApiEntitiesNpmPackage`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `dist_tag` | `Hash` |  |
| `name` | `String` |  |
| `version` | `Hash` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesNpmPackage record (raises on error).
api_entities_npm_package = client.ApiEntitiesNpmPackage.load()
```


### ApiEntitiesNpmPackageTag

Create an instance: `api_entities_npm_package_tag = client.ApiEntitiesNpmPackageTag`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `dist_tag` | `Hash` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesNpmPackageTag record (raises on error).
api_entities_npm_package_tag = client.ApiEntitiesNpmPackageTag.load()
```


### ApiEntitiesNugetPackagesVersion

Create an instance: `api_entities_nuget_packages_version = client.ApiEntitiesNugetPackagesVersion`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `version` | `Array` |  |

#### Example: List

```ruby
# list returns an Array of ApiEntitiesNugetPackagesVersion records (raises on error).
api_entities_nuget_packages_versions = client.ApiEntitiesNugetPackagesVersion.list
```


### ApiEntitiesNugetSearchResult

Create an instance: `api_entities_nuget_search_result = client.ApiEntitiesNugetSearchResult`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author` | `String` |  |
| `description` | `String` |  |
| `icon_url` | `String` |  |
| `id` | `String` |  |
| `license_url` | `String` |  |
| `project_url` | `String` |  |
| `summary` | `String` |  |
| `tag` | `String` |  |
| `title` | `String` |  |
| `total_download` | `Integer` |  |
| `type` | `String` |  |
| `verified` | `Boolean` |  |
| `version` | `String` |  |

#### Example: List

```ruby
# list returns an Array of ApiEntitiesNugetSearchResult records (raises on error).
api_entities_nuget_search_results = client.ApiEntitiesNugetSearchResult.list
```


### ApiEntitiesNugetServiceIndex

Create an instance: `api_entities_nuget_service_index = client.ApiEntitiesNugetServiceIndex`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `resource` | `Array` |  |
| `version` | `String` |  |

#### Example: List

```ruby
# list returns an Array of ApiEntitiesNugetServiceIndex records (raises on error).
api_entities_nuget_service_indexs = client.ApiEntitiesNugetServiceIndex.list
```


### ApiEntitiesOrganizationsOrganization

Create an instance: `api_entities_organizations_organization = client.ApiEntitiesOrganizationsOrganization`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```ruby
api_entities_organizations_organization = client.ApiEntitiesOrganizationsOrganization.create({
})
```


### ApiEntitiesPackage

Create an instance: `api_entities_package = client.ApiEntitiesPackage`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `conan_package_name` | `String` |  |
| `created_at` | `String` |  |
| `id` | `Integer` |  |
| `last_downloaded_at` | `String` |  |
| `link` | `Hash` |  |
| `name` | `String` |  |
| `package_type` | `String` |  |
| `pipeline` | `Hash` |  |
| `project_id` | `Integer` |  |
| `project_path` | `String` |  |
| `status` | `String` |  |
| `tag` | `String` |  |
| `version` | `String` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesPackage record (raises on error).
api_entities_package = client.ApiEntitiesPackage.load({ "id" => "api_entities_package_id", "project_id" => "project_id" })
```

#### Example: List

```ruby
# list returns an Array of ApiEntitiesPackage records (raises on error).
api_entities_packages = client.ApiEntitiesPackage.list
```


### ApiEntitiesPackageFile

Create an instance: `api_entities_package_file = client.ApiEntitiesPackageFile`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `String` |  |
| `file_md5` | `String` |  |
| `file_name` | `String` |  |
| `file_sha1` | `String` |  |
| `file_sha256` | `String` |  |
| `id` | `Integer` |  |
| `package_id` | `Integer` |  |
| `pipeline` | `Hash` |  |
| `size` | `Integer` |  |

#### Example: List

```ruby
# list returns an Array of ApiEntitiesPackageFile records (raises on error).
api_entities_package_files = client.ApiEntitiesPackageFile.list
```


### ApiEntitiesPackagePipeline

Create an instance: `api_entities_package_pipeline = client.ApiEntitiesPackagePipeline`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `String` |  |
| `id` | `Integer` |  |
| `iid` | `Integer` |  |
| `project_id` | `Integer` |  |
| `ref` | `String` |  |
| `sha` | `String` |  |
| `source` | `String` |  |
| `status` | `String` |  |
| `updated_at` | `String` |  |
| `user` | `Hash` |  |
| `web_url` | `String` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesPackagePipeline record (raises on error).
api_entities_package_pipeline = client.ApiEntitiesPackagePipeline.load({ "package_id" => "package_id", "project_id" => "project_id" })
```


### ApiEntitiesPackagesConanFilesList

Create an instance: `api_entities_packages_conan_files_list = client.ApiEntitiesPackagesConanFilesList`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `file` | `Hash` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesPackagesConanFilesList record (raises on error).
api_entities_packages_conan_files_list = client.ApiEntitiesPackagesConanFilesList.load({ "conan_id" => "conan_id", "package_channel" => "package_channel", "package_username" => "package_username", "package_version" => "package_version", "project_id" => "project_id" })
```


### ApiEntitiesPackagesConanPackageManifest

Create an instance: `api_entities_packages_conan_package_manifest = client.ApiEntitiesPackagesConanPackageManifest`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `package_url` | `Hash` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesPackagesConanPackageManifest record (raises on error).
api_entities_packages_conan_package_manifest = client.ApiEntitiesPackagesConanPackageManifest.load({ "conan_id" => "conan_id", "conan_package_reference" => "conan_package_reference", "package_channel" => "package_channel", "package_username" => "package_username", "package_version" => "package_version" })
```


### ApiEntitiesPackagesConanPackageRevision

Create an instance: `api_entities_packages_conan_package_revision = client.ApiEntitiesPackagesConanPackageRevision`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `revision` | `String` |  |
| `time` | `String` |  |

#### Example: List

```ruby
# list returns an Array of ApiEntitiesPackagesConanPackageRevision records (raises on error).
api_entities_packages_conan_package_revisions = client.ApiEntitiesPackagesConanPackageRevision.list
```


### ApiEntitiesPackagesConanPackageSnapshot

Create an instance: `api_entities_packages_conan_package_snapshot = client.ApiEntitiesPackagesConanPackageSnapshot`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `package_snapshot` | `Hash` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesPackagesConanPackageSnapshot record (raises on error).
api_entities_packages_conan_package_snapshot = client.ApiEntitiesPackagesConanPackageSnapshot.load({ "conan_id" => "conan_id", "conan_package_reference" => "conan_package_reference", "package_channel" => "package_channel", "package_username" => "package_username", "package_version" => "package_version" })
```


### ApiEntitiesPackagesConanRecipeManifest

Create an instance: `api_entities_packages_conan_recipe_manifest = client.ApiEntitiesPackagesConanRecipeManifest`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `recipe_url` | `Hash` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesPackagesConanRecipeManifest record (raises on error).
api_entities_packages_conan_recipe_manifest = client.ApiEntitiesPackagesConanRecipeManifest.load({ "conan_id" => "conan_id", "package_channel" => "package_channel", "package_username" => "package_username", "package_version" => "package_version" })
```


### ApiEntitiesPackagesConanRecipeRevision

Create an instance: `api_entities_packages_conan_recipe_revision = client.ApiEntitiesPackagesConanRecipeRevision`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `revision` | `String` |  |
| `time` | `String` |  |

#### Example: List

```ruby
# list returns an Array of ApiEntitiesPackagesConanRecipeRevision records (raises on error).
api_entities_packages_conan_recipe_revisions = client.ApiEntitiesPackagesConanRecipeRevision.list
```


### ApiEntitiesPackagesConanRecipeSnapshot

Create an instance: `api_entities_packages_conan_recipe_snapshot = client.ApiEntitiesPackagesConanRecipeSnapshot`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `recipe_snapshot` | `Hash` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesPackagesConanRecipeSnapshot record (raises on error).
api_entities_packages_conan_recipe_snapshot = client.ApiEntitiesPackagesConanRecipeSnapshot.load({ "id" => "api_entities_packages_conan_recipe_snapshot_id", "package_channel" => "package_channel", "package_name" => "package_name", "package_username" => "package_username", "package_version" => "package_version" })
```


### ApiEntitiesPackagesConanRevision

Create an instance: `api_entities_packages_conan_revision = client.ApiEntitiesPackagesConanRevision`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `revision` | `String` |  |
| `time` | `String` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesPackagesConanRevision record (raises on error).
api_entities_packages_conan_revision = client.ApiEntitiesPackagesConanRevision.load({ "conan_id" => "conan_id", "package_channel" => "package_channel", "package_username" => "package_username", "package_version" => "package_version", "project_id" => "project_id" })
```


### ApiEntitiesPackagesConanUploadUrl

Create an instance: `api_entities_packages_conan_upload_url = client.ApiEntitiesPackagesConanUploadUrl`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `upload_url` | `Hash` |  |

#### Example: Create

```ruby
api_entities_packages_conan_upload_url = client.ApiEntitiesPackagesConanUploadUrl.create({
  "conan_id" => "example_conan_id", # String
  "package_channel" => "example_package_channel", # Object
  "package_username" => "example_package_username", # Object
  "package_version" => "example_package_version", # Object
})
```


### ApiEntitiesPackagesDebianDistribution

Create an instance: `api_entities_packages_debian_distribution = client.ApiEntitiesPackagesDebianDistribution`

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
| `architecture` | `Array` |  |
| `codename` | `String` |  |
| `component` | `Array` |  |
| `description` | `String` |  |
| `id` | `Integer` |  |
| `label` | `String` |  |
| `origin` | `String` |  |
| `suite` | `String` |  |
| `valid_time_duration_second` | `Integer` |  |
| `version` | `String` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesPackagesDebianDistribution record (raises on error).
api_entities_packages_debian_distribution = client.ApiEntitiesPackagesDebianDistribution.load({ "id" => "api_entities_packages_debian_distribution_id" })
```

#### Example: List

```ruby
# list returns an Array of ApiEntitiesPackagesDebianDistribution records (raises on error).
api_entities_packages_debian_distributions = client.ApiEntitiesPackagesDebianDistribution.list
```

#### Example: Create

```ruby
api_entities_packages_debian_distribution = client.ApiEntitiesPackagesDebianDistribution.create({
})
```


### ApiEntitiesPagesDomain

Create an instance: `api_entities_pages_domain = client.ApiEntitiesPagesDomain`

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
| `auto_ssl_enabled` | `String` |  |
| `certificate` | `Hash` |  |
| `domain` | `String` |  |
| `enabled_until` | `String` |  |
| `url` | `String` |  |
| `verification_code` | `String` |  |
| `verified` | `Boolean` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesPagesDomain record (raises on error).
api_entities_pages_domain = client.ApiEntitiesPagesDomain.load({ "id" => "api_entities_pages_domain_id", "project_id" => "project_id" })
```

#### Example: List

```ruby
# list returns an Array of ApiEntitiesPagesDomain records (raises on error).
api_entities_pages_domains = client.ApiEntitiesPagesDomain.list
```

#### Example: Create

```ruby
api_entities_pages_domain = client.ApiEntitiesPagesDomain.create({
  "project_id" => "example_project_id", # String
})
```


### ApiEntitiesPagesDomainBasic

Create an instance: `api_entities_pages_domain_basic = client.ApiEntitiesPagesDomainBasic`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auto_ssl_enabled` | `String` |  |
| `certificate_expiration` | `Hash` |  |
| `domain` | `String` |  |
| `enabled_until` | `String` |  |
| `project_id` | `String` |  |
| `url` | `String` |  |
| `verification_code` | `String` |  |
| `verified` | `Boolean` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesPagesDomainBasic record (raises on error).
api_entities_pages_domain_basic = client.ApiEntitiesPagesDomainBasic.load()
```


### ApiEntitiesPersonalAccessToken

Create an instance: `api_entities_personal_access_token = client.ApiEntitiesPersonalAccessToken`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `Boolean` |  |
| `created_at` | `String` |  |
| `description` | `String` |  |
| `expires_at` | `String` |  |
| `id` | `Integer` |  |
| `last_used_at` | `String` |  |
| `name` | `String` |  |
| `revoked` | `Boolean` |  |
| `scope` | `Array` |  |
| `user_id` | `Integer` |  |

#### Example: List

```ruby
# list returns an Array of ApiEntitiesPersonalAccessToken records (raises on error).
api_entities_personal_access_tokens = client.ApiEntitiesPersonalAccessToken.list
```


### ApiEntitiesPersonalAccessTokenWithLastUsedIp

Create an instance: `api_entities_personal_access_token_with_last_used_ip = client.ApiEntitiesPersonalAccessTokenWithLastUsedIp`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `Boolean` |  |
| `created_at` | `String` |  |
| `description` | `String` |  |
| `expires_at` | `String` |  |
| `id` | `Integer` |  |
| `last_used_at` | `String` |  |
| `last_used_ip` | `Array` |  |
| `name` | `String` |  |
| `revoked` | `Boolean` |  |
| `scope` | `Array` |  |
| `user_id` | `Integer` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesPersonalAccessTokenWithLastUsedIp record (raises on error).
api_entities_personal_access_token_with_last_used_ip = client.ApiEntitiesPersonalAccessTokenWithLastUsedIp.load({ "id" => "api_entities_personal_access_token_with_last_used_ip_id" })
```

#### Example: List

```ruby
# list returns an Array of ApiEntitiesPersonalAccessTokenWithLastUsedIp records (raises on error).
api_entities_personal_access_token_with_last_used_ips = client.ApiEntitiesPersonalAccessTokenWithLastUsedIp.list
```


### ApiEntitiesPersonalAccessTokenWithToken

Create an instance: `api_entities_personal_access_token_with_token = client.ApiEntitiesPersonalAccessTokenWithToken`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `Boolean` |  |
| `created_at` | `String` |  |
| `description` | `String` |  |
| `expires_at` | `String` |  |
| `id` | `Integer` |  |
| `last_used_at` | `String` |  |
| `name` | `String` |  |
| `revoked` | `Boolean` |  |
| `scope` | `Array` |  |
| `token` | `String` |  |
| `user_id` | `Integer` |  |

#### Example: Create

```ruby
api_entities_personal_access_token_with_token = client.ApiEntitiesPersonalAccessTokenWithToken.create({
})
```


### ApiEntitiesPersonalSnippet

Create an instance: `api_entities_personal_snippet = client.ApiEntitiesPersonalSnippet`

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
| `author` | `Hash` |  |
| `created_at` | `String` |  |
| `description` | `String` |  |
| `file` | `Array` |  |
| `file_name` | `String` |  |
| `http_url_to_repo` | `String` |  |
| `id` | `Integer` |  |
| `imported` | `Boolean` |  |
| `imported_from` | `String` |  |
| `project_id` | `Integer` |  |
| `raw_url` | `String` |  |
| `repository_storage` | `String` |  |
| `ssh_url_to_repo` | `String` |  |
| `title` | `String` |  |
| `updated_at` | `String` |  |
| `visibility` | `String` |  |
| `web_url` | `String` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesPersonalSnippet record (raises on error).
api_entities_personal_snippet = client.ApiEntitiesPersonalSnippet.load({ "id" => "api_entities_personal_snippet_id" })
```

#### Example: List

```ruby
# list returns an Array of ApiEntitiesPersonalSnippet records (raises on error).
api_entities_personal_snippets = client.ApiEntitiesPersonalSnippet.list
```

#### Example: Create

```ruby
api_entities_personal_snippet = client.ApiEntitiesPersonalSnippet.create({
})
```


### ApiEntitiesPlanLimit

Create an instance: `api_entities_plan_limit = client.ApiEntitiesPlanLimit`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ci_active_job` | `Integer` |  |
| `ci_instance_level_variable` | `Integer` |  |
| `ci_needs_size_limit` | `Integer` |  |
| `ci_pipeline_schedule` | `Integer` |  |
| `ci_pipeline_size` | `Integer` |  |
| `ci_project_subscription` | `Integer` |  |
| `ci_registered_group_runner` | `Integer` |  |
| `ci_registered_project_runner` | `Integer` |  |
| `conan_max_file_size` | `Integer` |  |
| `dotenv_size` | `Integer` |  |
| `dotenv_variable` | `Integer` |  |
| `enforcement_limit` | `Integer` |  |
| `generic_packages_max_file_size` | `Integer` |  |
| `helm_max_file_size` | `Integer` |  |
| `limits_history` | `Hash` |  |
| `maven_max_file_size` | `Integer` |  |
| `notification_limit` | `Integer` |  |
| `npm_max_file_size` | `Integer` |  |
| `nuget_max_file_size` | `Integer` |  |
| `pipeline_hierarchy_size` | `Integer` |  |
| `pypi_max_file_size` | `Integer` |  |
| `storage_size_limit` | `Integer` |  |
| `terraform_module_max_file_size` | `Integer` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesPlanLimit record (raises on error).
api_entities_plan_limit = client.ApiEntitiesPlanLimit.load()
```


### ApiEntitiesProject

Create an instance: `api_entities_project = client.ApiEntitiesProject`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_merge_on_skipped_pipeline` | `Boolean` |  |
| `allow_pipeline_trigger_approve_deployment` | `Boolean` |  |
| `analytics_access_level` | `String` |  |
| `approvals_before_merge` | `String` |  |
| `archived` | `Boolean` |  |
| `auto_cancel_pending_pipeline` | `String` |  |
| `auto_devops_deploy_strategy` | `String` |  |
| `auto_devops_enabled` | `Boolean` |  |
| `auto_duo_code_review_enabled` | `String` |  |
| `autoclose_referenced_issue` | `Boolean` |  |
| `avatar_url` | `String` |  |
| `build_git_strategy` | `String` |  |
| `build_timeout` | `Integer` |  |
| `builds_access_level` | `String` |  |
| `can_create_merge_request_in` | `Boolean` |  |
| `ci_allow_fork_pipelines_to_run_in_parent_project` | `Boolean` |  |
| `ci_config_path` | `String` |  |
| `ci_default_git_depth` | `Integer` |  |
| `ci_delete_pipelines_in_second` | `Integer` |  |
| `ci_forward_deployment_enabled` | `Boolean` |  |
| `ci_forward_deployment_rollback_allowed` | `Boolean` |  |
| `ci_id_token_sub_claim_component` | `Array` |  |
| `ci_job_token_scope_enabled` | `Boolean` |  |
| `ci_pipeline_variables_minimum_override_role` | `String` |  |
| `ci_push_repository_for_job_token_allowed` | `Boolean` |  |
| `ci_restrict_pipeline_cancellation_role` | `String` |  |
| `ci_separated_cache` | `Boolean` |  |
| `compliance_framework` | `String` |  |
| `container_expiration_policy` | `Hash` |  |
| `container_registry_access_level` | `String` |  |
| `container_registry_enabled` | `Boolean` |  |
| `container_registry_image_prefix` | `String` |  |
| `created_at` | `String` |  |
| `creator_id` | `Integer` |  |
| `custom_attribute` | `Hash` |  |
| `default_branch` | `String` |  |
| `description` | `String` |  |
| `description_html` | `String` |  |
| `duo_remote_flows_enabled` | `String` |  |
| `emails_disabled` | `Boolean` |  |
| `emails_enabled` | `Boolean` |  |
| `empty_repo` | `Boolean` |  |
| `enforce_auth_checks_on_upload` | `Boolean` |  |
| `environments_access_level` | `String` |  |
| `external_authorization_classification_label` | `String` |  |
| `feature_flags_access_level` | `String` |  |
| `forked_from_project` | `Hash` |  |
| `forking_access_level` | `String` |  |
| `forks_count` | `Integer` |  |
| `group_runners_enabled` | `Boolean` |  |
| `http_url_to_repo` | `String` |  |
| `id` | `Integer` |  |
| `import_error` | `String` |  |
| `import_status` | `String` |  |
| `import_type` | `String` |  |
| `import_url` | `String` |  |
| `infrastructure_access_level` | `String` |  |
| `issue_branch_template` | `String` |  |
| `issues_access_level` | `String` |  |
| `issues_enabled` | `Boolean` |  |
| `issues_template` | `String` |  |
| `jobs_enabled` | `Boolean` |  |
| `keep_latest_artifact` | `Boolean` |  |
| `last_activity_at` | `String` |  |
| `lfs_enabled` | `Boolean` |  |
| `license` | `Hash` |  |
| `license_url` | `String` |  |
| `link` | `Hash` |  |
| `marked_for_deletion_at` | `String` |  |
| `marked_for_deletion_on` | `String` |  |
| `max_artifacts_size` | `Integer` |  |
| `merge_commit_template` | `String` |  |
| `merge_method` | `String` |  |
| `merge_pipelines_enabled` | `String` |  |
| `merge_request_title_regex` | `String` |  |
| `merge_request_title_regex_description` | `String` |  |
| `merge_requests_access_level` | `String` |  |
| `merge_requests_enabled` | `Boolean` |  |
| `merge_requests_template` | `String` |  |
| `merge_trains_enabled` | `String` |  |
| `merge_trains_skip_train_allowed` | `String` |  |
| `mirror` | `String` |  |
| `mirror_overwrites_diverged_branch` | `String` |  |
| `mirror_trigger_build` | `String` |  |
| `mirror_user_id` | `String` |  |
| `model_experiments_access_level` | `String` |  |
| `model_registry_access_level` | `String` |  |
| `monitor_access_level` | `String` |  |
| `mr_default_target_self` | `Boolean` |  |
| `name` | `String` |  |
| `name_with_namespace` | `String` |  |
| `namespace` | `Hash` |  |
| `only_allow_merge_if_all_discussions_are_resolved` | `Boolean` |  |
| `only_allow_merge_if_all_status_checks_passed` | `String` |  |
| `only_allow_merge_if_pipeline_succeed` | `Boolean` |  |
| `only_mirror_protected_branch` | `String` |  |
| `open_issues_count` | `Integer` |  |
| `owner` | `Hash` |  |
| `package_registry_access_level` | `String` |  |
| `packages_enabled` | `Boolean` |  |
| `pages_access_level` | `String` |  |
| `path` | `String` |  |
| `path_with_namespace` | `String` |  |
| `pre_receive_secret_detection_enabled` | `Boolean` |  |
| `prevent_merge_without_jira_issue` | `String` |  |
| `printing_merge_request_link_enabled` | `Boolean` |  |
| `public_job` | `Boolean` |  |
| `readme_url` | `String` |  |
| `releases_access_level` | `String` |  |
| `remove_source_branch_after_merge` | `Boolean` |  |
| `repository_access_level` | `String` |  |
| `repository_object_format` | `String` |  |
| `repository_storage` | `String` |  |
| `request_access_enabled` | `Boolean` |  |
| `requirements_access_level` | `String` |  |
| `requirements_enabled` | `String` |  |
| `resolve_outdated_diff_discussion` | `Boolean` |  |
| `resource_group_default_process_mode` | `String` |  |
| `restrict_user_defined_variable` | `Boolean` |  |
| `runner_token_expiration_interval` | `Integer` |  |
| `runners_token` | `String` |  |
| `secret_push_protection_enabled` | `Boolean` |  |
| `security_and_compliance_access_level` | `String` |  |
| `security_and_compliance_enabled` | `String` |  |
| `service_desk_address` | `String` |  |
| `service_desk_enabled` | `Boolean` |  |
| `shared_runners_enabled` | `Boolean` |  |
| `shared_with_group` | `Array` |  |
| `show_diff_preview_in_email` | `Boolean` |  |
| `snippets_access_level` | `String` |  |
| `snippets_enabled` | `Boolean` |  |
| `spp_repository_pipeline_access` | `Boolean` |  |
| `squash_commit_template` | `String` |  |
| `squash_option` | `String` |  |
| `ssh_url_to_repo` | `String` |  |
| `star_count` | `Integer` |  |
| `statistic` | `Hash` |  |
| `suggestion_commit_message` | `String` |  |
| `tag_list` | `Array` |  |
| `topic` | `Array` |  |
| `updated_at` | `String` |  |
| `visibility` | `String` |  |
| `warn_about_potentially_unwanted_character` | `Boolean` |  |
| `web_based_commit_signing_enabled` | `String` |  |
| `web_url` | `String` |  |
| `wiki_access_level` | `String` |  |
| `wiki_enabled` | `Boolean` |  |

#### Example: List

```ruby
# list returns an Array of ApiEntitiesProject records (raises on error).
api_entities_projects = client.ApiEntitiesProject.list
```

#### Example: Create

```ruby
api_entities_project = client.ApiEntitiesProject.create({
})
```


### ApiEntitiesProjectDailyStatistic

Create an instance: `api_entities_project_daily_statistic = client.ApiEntitiesProjectDailyStatistic`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `fetch` | `Hash` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesProjectDailyStatistic record (raises on error).
api_entities_project_daily_statistic = client.ApiEntitiesProjectDailyStatistic.load({ "project_id" => "project_id" })
```


### ApiEntitiesProjectExportStatus

Create an instance: `api_entities_project_export_status = client.ApiEntitiesProjectExportStatus`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `String` |  |
| `description` | `String` |  |
| `export_status` | `String` |  |
| `id` | `Integer` |  |
| `link` | `Hash` |  |
| `name` | `String` |  |
| `name_with_namespace` | `String` |  |
| `path` | `String` |  |
| `path_with_namespace` | `String` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesProjectExportStatus record (raises on error).
api_entities_project_export_status = client.ApiEntitiesProjectExportStatus.load({ "project_id" => "project_id" })
```


### ApiEntitiesProjectGroupLink

Create an instance: `api_entities_project_group_link = client.ApiEntitiesProjectGroupLink`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```ruby
api_entities_project_group_link = client.ApiEntitiesProjectGroupLink.create({
  "project_id" => "example_project_id", # String
})
```


### ApiEntitiesProjectHook

Create an instance: `api_entities_project_hook = client.ApiEntitiesProjectHook`

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
| `alert_status` | `Object` |  |
| `branch_filter_strategy` | `String` |  |
| `confidential_issues_event` | `Boolean` |  |
| `confidential_note_event` | `Boolean` |  |
| `created_at` | `String` |  |
| `custom_header` | `Array` |  |
| `custom_webhook_template` | `String` |  |
| `deployment_event` | `Boolean` |  |
| `description` | `String` |  |
| `disabled_until` | `String` |  |
| `emoji_event` | `Boolean` |  |
| `enable_ssl_verification` | `Boolean` |  |
| `feature_flag_event` | `Boolean` |  |
| `id` | `String` |  |
| `issues_event` | `Boolean` |  |
| `job_event` | `Boolean` |  |
| `merge_requests_event` | `Boolean` |  |
| `milestone_event` | `Boolean` |  |
| `name` | `String` |  |
| `note_event` | `Boolean` |  |
| `pipeline_event` | `Boolean` |  |
| `project_id` | `String` |  |
| `push_event` | `Boolean` |  |
| `push_events_branch_filter` | `String` |  |
| `releases_event` | `Boolean` |  |
| `repository_update_event` | `Boolean` |  |
| `resource_access_token_event` | `Boolean` |  |
| `tag_push_event` | `Boolean` |  |
| `url` | `String` |  |
| `url_variable` | `Array` |  |
| `vulnerability_event` | `Boolean` |  |
| `wiki_page_event` | `Boolean` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesProjectHook record (raises on error).
api_entities_project_hook = client.ApiEntitiesProjectHook.load({ "id" => "api_entities_project_hook_id", "project_id" => "project_id" })
```

#### Example: List

```ruby
# list returns an Array of ApiEntitiesProjectHook records (raises on error).
api_entities_project_hooks = client.ApiEntitiesProjectHook.list
```

#### Example: Create

```ruby
api_entities_project_hook = client.ApiEntitiesProjectHook.create({
  "project_id" => "example_project_id", # String
})
```


### ApiEntitiesProjectImportStatus

Create an instance: `api_entities_project_import_status = client.ApiEntitiesProjectImportStatus`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `String` |  |
| `exception_class` | `String` |  |
| `exception_message` | `String` |  |
| `id` | `String` |  |
| `line_number` | `Integer` |  |
| `relation_name` | `String` |  |
| `source` | `String` |  |

#### Example: List

```ruby
# list returns an Array of ApiEntitiesProjectImportStatus records (raises on error).
api_entities_project_import_statuss = client.ApiEntitiesProjectImportStatus.list
```

#### Example: Create

```ruby
api_entities_project_import_status = client.ApiEntitiesProjectImportStatus.create({
})
```


### ApiEntitiesProjectJobTokenScope

Create an instance: `api_entities_project_job_token_scope = client.ApiEntitiesProjectJobTokenScope`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `inbound_enabled` | `Boolean` |  |
| `outbound_enabled` | `Boolean` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesProjectJobTokenScope record (raises on error).
api_entities_project_job_token_scope = client.ApiEntitiesProjectJobTokenScope.load({ "project_id" => "project_id" })
```


### ApiEntitiesProjectRepositoryStorage

Create an instance: `api_entities_project_repository_storage = client.ApiEntitiesProjectRepositoryStorage`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `String` |  |
| `disk_path` | `String` |  |
| `project_id` | `Integer` |  |
| `repository_storage` | `String` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesProjectRepositoryStorage record (raises on error).
api_entities_project_repository_storage = client.ApiEntitiesProjectRepositoryStorage.load({ "project_id" => "project_id" })
```


### ApiEntitiesProjectSnippet

Create an instance: `api_entities_project_snippet = client.ApiEntitiesProjectSnippet`

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
| `author` | `Hash` |  |
| `created_at` | `String` |  |
| `description` | `String` |  |
| `file` | `Array` |  |
| `file_name` | `String` |  |
| `http_url_to_repo` | `String` |  |
| `id` | `Integer` |  |
| `imported` | `Boolean` |  |
| `imported_from` | `String` |  |
| `project_id` | `Integer` |  |
| `raw_url` | `String` |  |
| `repository_storage` | `String` |  |
| `ssh_url_to_repo` | `String` |  |
| `title` | `String` |  |
| `updated_at` | `String` |  |
| `visibility` | `String` |  |
| `web_url` | `String` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesProjectSnippet record (raises on error).
api_entities_project_snippet = client.ApiEntitiesProjectSnippet.load({ "id" => "api_entities_project_snippet_id", "project_id" => "project_id" })
```

#### Example: List

```ruby
# list returns an Array of ApiEntitiesProjectSnippet records (raises on error).
api_entities_project_snippets = client.ApiEntitiesProjectSnippet.list
```

#### Example: Create

```ruby
api_entities_project_snippet = client.ApiEntitiesProjectSnippet.create({
  "project_id" => "example_project_id", # String
})
```


### ApiEntitiesProjectUpload

Create an instance: `api_entities_project_upload = client.ApiEntitiesProjectUpload`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```ruby
api_entities_project_upload = client.ApiEntitiesProjectUpload.create({
  "project_id" => "example_project_id", # String
})
```


### ApiEntitiesProjectWithAccess

Create an instance: `api_entities_project_with_access = client.ApiEntitiesProjectWithAccess`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_merge_on_skipped_pipeline` | `Boolean` |  |
| `allow_pipeline_trigger_approve_deployment` | `Boolean` |  |
| `analytics_access_level` | `String` |  |
| `approvals_before_merge` | `String` |  |
| `archived` | `Boolean` |  |
| `auto_cancel_pending_pipeline` | `String` |  |
| `auto_devops_deploy_strategy` | `String` |  |
| `auto_devops_enabled` | `Boolean` |  |
| `auto_duo_code_review_enabled` | `String` |  |
| `autoclose_referenced_issue` | `Boolean` |  |
| `avatar_url` | `String` |  |
| `build_git_strategy` | `String` |  |
| `build_timeout` | `Integer` |  |
| `builds_access_level` | `String` |  |
| `can_create_merge_request_in` | `Boolean` |  |
| `ci_allow_fork_pipelines_to_run_in_parent_project` | `Boolean` |  |
| `ci_config_path` | `String` |  |
| `ci_default_git_depth` | `Integer` |  |
| `ci_delete_pipelines_in_second` | `Integer` |  |
| `ci_forward_deployment_enabled` | `Boolean` |  |
| `ci_forward_deployment_rollback_allowed` | `Boolean` |  |
| `ci_id_token_sub_claim_component` | `Array` |  |
| `ci_job_token_scope_enabled` | `Boolean` |  |
| `ci_pipeline_variables_minimum_override_role` | `String` |  |
| `ci_push_repository_for_job_token_allowed` | `Boolean` |  |
| `ci_restrict_pipeline_cancellation_role` | `String` |  |
| `ci_separated_cache` | `Boolean` |  |
| `compliance_framework` | `String` |  |
| `container_expiration_policy` | `Hash` |  |
| `container_registry_access_level` | `String` |  |
| `container_registry_enabled` | `Boolean` |  |
| `container_registry_image_prefix` | `String` |  |
| `created_at` | `String` |  |
| `creator_id` | `Integer` |  |
| `custom_attribute` | `Hash` |  |
| `default_branch` | `String` |  |
| `description` | `String` |  |
| `description_html` | `String` |  |
| `duo_remote_flows_enabled` | `String` |  |
| `emails_disabled` | `Boolean` |  |
| `emails_enabled` | `Boolean` |  |
| `empty_repo` | `Boolean` |  |
| `enforce_auth_checks_on_upload` | `Boolean` |  |
| `environments_access_level` | `String` |  |
| `external_authorization_classification_label` | `String` |  |
| `feature_flags_access_level` | `String` |  |
| `forked_from_project` | `Hash` |  |
| `forking_access_level` | `String` |  |
| `forks_count` | `Integer` |  |
| `group_runners_enabled` | `Boolean` |  |
| `http_url_to_repo` | `String` |  |
| `id` | `Integer` |  |
| `import_error` | `String` |  |
| `import_status` | `String` |  |
| `import_type` | `String` |  |
| `import_url` | `String` |  |
| `infrastructure_access_level` | `String` |  |
| `issue_branch_template` | `String` |  |
| `issues_access_level` | `String` |  |
| `issues_enabled` | `Boolean` |  |
| `issues_template` | `String` |  |
| `jobs_enabled` | `Boolean` |  |
| `keep_latest_artifact` | `Boolean` |  |
| `last_activity_at` | `String` |  |
| `lfs_enabled` | `Boolean` |  |
| `license` | `Hash` |  |
| `license_url` | `String` |  |
| `link` | `Hash` |  |
| `marked_for_deletion_at` | `String` |  |
| `marked_for_deletion_on` | `String` |  |
| `max_artifacts_size` | `Integer` |  |
| `merge_commit_template` | `String` |  |
| `merge_method` | `String` |  |
| `merge_pipelines_enabled` | `String` |  |
| `merge_request_title_regex` | `String` |  |
| `merge_request_title_regex_description` | `String` |  |
| `merge_requests_access_level` | `String` |  |
| `merge_requests_enabled` | `Boolean` |  |
| `merge_requests_template` | `String` |  |
| `merge_trains_enabled` | `String` |  |
| `merge_trains_skip_train_allowed` | `String` |  |
| `mirror` | `String` |  |
| `mirror_overwrites_diverged_branch` | `String` |  |
| `mirror_trigger_build` | `String` |  |
| `mirror_user_id` | `String` |  |
| `model_experiments_access_level` | `String` |  |
| `model_registry_access_level` | `String` |  |
| `monitor_access_level` | `String` |  |
| `mr_default_target_self` | `Boolean` |  |
| `name` | `String` |  |
| `name_with_namespace` | `String` |  |
| `namespace` | `Hash` |  |
| `only_allow_merge_if_all_discussions_are_resolved` | `Boolean` |  |
| `only_allow_merge_if_all_status_checks_passed` | `String` |  |
| `only_allow_merge_if_pipeline_succeed` | `Boolean` |  |
| `only_mirror_protected_branch` | `String` |  |
| `open_issues_count` | `Integer` |  |
| `owner` | `Hash` |  |
| `package_registry_access_level` | `String` |  |
| `packages_enabled` | `Boolean` |  |
| `pages_access_level` | `String` |  |
| `path` | `String` |  |
| `path_with_namespace` | `String` |  |
| `permission` | `Hash` |  |
| `pre_receive_secret_detection_enabled` | `Boolean` |  |
| `prevent_merge_without_jira_issue` | `String` |  |
| `printing_merge_request_link_enabled` | `Boolean` |  |
| `public_job` | `Boolean` |  |
| `readme_url` | `String` |  |
| `releases_access_level` | `String` |  |
| `remove_source_branch_after_merge` | `Boolean` |  |
| `repository_access_level` | `String` |  |
| `repository_object_format` | `String` |  |
| `repository_storage` | `String` |  |
| `request_access_enabled` | `Boolean` |  |
| `requirements_access_level` | `String` |  |
| `requirements_enabled` | `String` |  |
| `resolve_outdated_diff_discussion` | `Boolean` |  |
| `resource_group_default_process_mode` | `String` |  |
| `restrict_user_defined_variable` | `Boolean` |  |
| `runner_token_expiration_interval` | `Integer` |  |
| `runners_token` | `String` |  |
| `secret_push_protection_enabled` | `Boolean` |  |
| `security_and_compliance_access_level` | `String` |  |
| `security_and_compliance_enabled` | `String` |  |
| `service_desk_address` | `String` |  |
| `service_desk_enabled` | `Boolean` |  |
| `shared_runners_enabled` | `Boolean` |  |
| `shared_with_group` | `Array` |  |
| `show_diff_preview_in_email` | `Boolean` |  |
| `snippets_access_level` | `String` |  |
| `snippets_enabled` | `Boolean` |  |
| `spp_repository_pipeline_access` | `Boolean` |  |
| `squash_commit_template` | `String` |  |
| `squash_option` | `String` |  |
| `ssh_url_to_repo` | `String` |  |
| `star_count` | `Integer` |  |
| `statistic` | `Hash` |  |
| `suggestion_commit_message` | `String` |  |
| `tag_list` | `Array` |  |
| `topic` | `Array` |  |
| `updated_at` | `String` |  |
| `visibility` | `String` |  |
| `warn_about_potentially_unwanted_character` | `Boolean` |  |
| `web_based_commit_signing_enabled` | `String` |  |
| `web_url` | `String` |  |
| `wiki_access_level` | `String` |  |
| `wiki_enabled` | `Boolean` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesProjectWithAccess record (raises on error).
api_entities_project_with_access = client.ApiEntitiesProjectWithAccess.load({ "id" => "api_entities_project_with_access_id" })
```


### ApiEntitiesProjectsContainerRegistryProtectionRule

Create an instance: `api_entities_projects_container_registry_protection_rule = client.ApiEntitiesProjectsContainerRegistryProtectionRule`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `Integer` |  |
| `minimum_access_level_for_delete` | `String` |  |
| `minimum_access_level_for_push` | `String` |  |
| `project_id` | `Integer` |  |
| `repository_path_pattern` | `String` |  |

#### Example: List

```ruby
# list returns an Array of ApiEntitiesProjectsContainerRegistryProtectionRule records (raises on error).
api_entities_projects_container_registry_protection_rules = client.ApiEntitiesProjectsContainerRegistryProtectionRule.list
```

#### Example: Create

```ruby
api_entities_projects_container_registry_protection_rule = client.ApiEntitiesProjectsContainerRegistryProtectionRule.create({
  "project_id" => "example_project_id", # String
})
```


### ApiEntitiesProjectsPackagesProtectionRule

Create an instance: `api_entities_projects_packages_protection_rule = client.ApiEntitiesProjectsPackagesProtectionRule`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `Integer` |  |
| `minimum_access_level_for_delete` | `String` |  |
| `minimum_access_level_for_push` | `String` |  |
| `package_name_pattern` | `String` |  |
| `package_type` | `String` |  |
| `project_id` | `Integer` |  |

#### Example: List

```ruby
# list returns an Array of ApiEntitiesProjectsPackagesProtectionRule records (raises on error).
api_entities_projects_packages_protection_rules = client.ApiEntitiesProjectsPackagesProtectionRule.list
```

#### Example: Create

```ruby
api_entities_projects_packages_protection_rule = client.ApiEntitiesProjectsPackagesProtectionRule.create({
  "project_id" => "example_project_id", # String
})
```


### ApiEntitiesProjectsTopic

Create an instance: `api_entities_projects_topic = client.ApiEntitiesProjectsTopic`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_url` | `String` |  |
| `description` | `String` |  |
| `id` | `String` |  |
| `name` | `String` |  |
| `organization_id` | `String` |  |
| `title` | `String` |  |
| `total_projects_count` | `String` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesProjectsTopic record (raises on error).
api_entities_projects_topic = client.ApiEntitiesProjectsTopic.load({ "id" => "api_entities_projects_topic_id" })
```

#### Example: Create

```ruby
api_entities_projects_topic = client.ApiEntitiesProjectsTopic.create({
})
```


### ApiEntitiesProtectedBranch

Create an instance: `api_entities_protected_branch = client.ApiEntitiesProtectedBranch`

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
| `allow_force_push` | `Boolean` |  |
| `code_owner_approval_required` | `Boolean` |  |
| `id` | `Integer` |  |
| `inherited` | `Boolean` |  |
| `merge_access_level` | `Array` |  |
| `name` | `String` |  |
| `push_access_level` | `Array` |  |
| `unprotect_access_level` | `Array` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesProtectedBranch record (raises on error).
api_entities_protected_branch = client.ApiEntitiesProtectedBranch.load({ "id" => "api_entities_protected_branch_id", "project_id" => "project_id" })
```

#### Example: List

```ruby
# list returns an Array of ApiEntitiesProtectedBranch records (raises on error).
api_entities_protected_branchs = client.ApiEntitiesProtectedBranch.list
```

#### Example: Create

```ruby
api_entities_protected_branch = client.ApiEntitiesProtectedBranch.create({
  "project_id" => "example_project_id", # String
})
```


### ApiEntitiesProtectedTag

Create an instance: `api_entities_protected_tag = client.ApiEntitiesProtectedTag`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `create_access_level` | `Hash` |  |
| `name` | `String` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesProtectedTag record (raises on error).
api_entities_protected_tag = client.ApiEntitiesProtectedTag.load({ "id" => "api_entities_protected_tag_id", "project_id" => "project_id" })
```

#### Example: List

```ruby
# list returns an Array of ApiEntitiesProtectedTag records (raises on error).
api_entities_protected_tags = client.ApiEntitiesProtectedTag.list
```

#### Example: Create

```ruby
api_entities_protected_tag = client.ApiEntitiesProtectedTag.create({
  "project_id" => "example_project_id", # String
})
```


### ApiEntitiesPublicGroupDetail

Create an instance: `api_entities_public_group_detail = client.ApiEntitiesPublicGroupDetail`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_url` | `String` |  |
| `full_name` | `String` |  |
| `full_path` | `String` |  |
| `id` | `String` |  |
| `name` | `String` |  |
| `web_url` | `String` |  |

#### Example: List

```ruby
# list returns an Array of ApiEntitiesPublicGroupDetail records (raises on error).
api_entities_public_group_details = client.ApiEntitiesPublicGroupDetail.list
```


### ApiEntitiesRelatedIssue

Create an instance: `api_entities_related_issue = client.ApiEntitiesRelatedIssue`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assignee` | `Hash` |  |
| `author` | `Hash` |  |
| `blocking_issues_count` | `String` |  |
| `closed_at` | `String` |  |
| `closed_by` | `Hash` |  |
| `confidential` | `Boolean` |  |
| `created_at` | `String` |  |
| `description` | `String` |  |
| `discussion_locked` | `Boolean` |  |
| `downvote` | `String` |  |
| `due_date` | `String` |  |
| `epic` | `Hash` |  |
| `epic_iid` | `String` |  |
| `has_task` | `Boolean` |  |
| `health_status` | `String` |  |
| `id` | `Integer` |  |
| `iid` | `Integer` |  |
| `imported` | `String` |  |
| `imported_from` | `String` |  |
| `issue_link_id` | `String` |  |
| `issue_type` | `String` |  |
| `iteration` | `Hash` |  |
| `label` | `Array` |  |
| `link` | `Hash` |  |
| `link_created_at` | `String` |  |
| `link_type` | `String` |  |
| `link_updated_at` | `String` |  |
| `merge_requests_count` | `String` |  |
| `milestone` | `Hash` |  |
| `moved_to_id` | `String` |  |
| `project_id` | `Integer` |  |
| `reference` | `Hash` |  |
| `service_desk_reply_to` | `String` |  |
| `severity` | `String` |  |
| `state` | `String` |  |
| `subscribed` | `String` |  |
| `task_completion_status` | `String` |  |
| `task_status` | `String` |  |
| `time_stat` | `Hash` |  |
| `title` | `String` |  |
| `type` | `String` |  |
| `updated_at` | `String` |  |
| `upvote` | `String` |  |
| `user_notes_count` | `String` |  |
| `web_url` | `String` |  |
| `weight` | `String` |  |

#### Example: List

```ruby
# list returns an Array of ApiEntitiesRelatedIssue records (raises on error).
api_entities_related_issues = client.ApiEntitiesRelatedIssue.list
```


### ApiEntitiesRelationImportTracker

Create an instance: `api_entities_relation_import_tracker = client.ApiEntitiesRelationImportTracker`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```ruby
api_entities_relation_import_tracker = client.ApiEntitiesRelationImportTracker.create({
})
```


### ApiEntitiesRelease

Create an instance: `api_entities_release = client.ApiEntitiesRelease`

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
| `asset` | `Hash` |  |
| `author` | `Hash` |  |
| `commit` | `Hash` |  |
| `commit_path` | `String` |  |
| `created_at` | `String` |  |
| `description` | `String` |  |
| `description_html` | `String` |  |
| `evidence` | `Hash` |  |
| `link` | `Hash` |  |
| `milestone` | `Hash` |  |
| `name` | `String` |  |
| `released_at` | `String` |  |
| `tag_name` | `String` |  |
| `tag_path` | `String` |  |
| `upcoming_release` | `Boolean` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesRelease record (raises on error).
api_entities_release = client.ApiEntitiesRelease.load({ "id" => "api_entities_release_id", "project_id" => "project_id" })
```

#### Example: List

```ruby
# list returns an Array of ApiEntitiesRelease records (raises on error).
api_entities_releases = client.ApiEntitiesRelease.list
```

#### Example: Create

```ruby
api_entities_release = client.ApiEntitiesRelease.create({
  "project_id" => "example_project_id", # String
})
```


### ApiEntitiesReleasesLink

Create an instance: `api_entities_releases_link = client.ApiEntitiesReleasesLink`

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
| `direct_asset_url` | `String` |  |
| `id` | `Integer` |  |
| `link_type` | `String` |  |
| `name` | `String` |  |
| `url` | `String` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesReleasesLink record (raises on error).
api_entities_releases_link = client.ApiEntitiesReleasesLink.load({ "id" => "api_entities_releases_link_id", "project_id" => "project_id", "release_id" => "release_id" })
```

#### Example: List

```ruby
# list returns an Array of ApiEntitiesReleasesLink records (raises on error).
api_entities_releases_links = client.ApiEntitiesReleasesLink.list
```

#### Example: Create

```ruby
api_entities_releases_link = client.ApiEntitiesReleasesLink.create({
  "project_id" => "example_project_id", # String
  "release_id" => "example_release_id", # String
})
```


### ApiEntitiesRemoteMirror

Create an instance: `api_entities_remote_mirror = client.ApiEntitiesRemoteMirror`

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
| `auth_method` | `String` |  |
| `enabled` | `Boolean` |  |
| `host_key` | `Array` |  |
| `id` | `Integer` |  |
| `keep_divergent_ref` | `Boolean` |  |
| `last_error` | `Integer` |  |
| `last_successful_update_at` | `String` |  |
| `last_update_at` | `String` |  |
| `last_update_started_at` | `String` |  |
| `mirror_branch_regex` | `String` |  |
| `only_protected_branch` | `Boolean` |  |
| `update_status` | `String` |  |
| `url` | `String` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesRemoteMirror record (raises on error).
api_entities_remote_mirror = client.ApiEntitiesRemoteMirror.load({ "id" => "api_entities_remote_mirror_id", "project_id" => "project_id" })
```

#### Example: List

```ruby
# list returns an Array of ApiEntitiesRemoteMirror records (raises on error).
api_entities_remote_mirrors = client.ApiEntitiesRemoteMirror.list
```

#### Example: Create

```ruby
api_entities_remote_mirror = client.ApiEntitiesRemoteMirror.create({
  "project_id" => "example_project_id", # String
})
```


### ApiEntitiesRepositoryHealth

Create an instance: `api_entities_repository_health = client.ApiEntitiesRepositoryHealth`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alternate` | `Hash` |  |
| `bitmap` | `Hash` |  |
| `commit_graph` | `Hash` |  |
| `is_object_pool` | `Boolean` |  |
| `last_full_repack` | `Hash` |  |
| `multi_pack_index` | `Hash` |  |
| `multi_pack_index_bitmap` | `Hash` |  |
| `object` | `Hash` |  |
| `reference` | `Hash` |  |
| `size` | `Integer` |  |
| `updated_at` | `String` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesRepositoryHealth record (raises on error).
api_entities_repository_health = client.ApiEntitiesRepositoryHealth.load({ "project_id" => "project_id" })
```


### ApiEntitiesResourceAccessTokenWithToken

Create an instance: `api_entities_resource_access_token_with_token = client.ApiEntitiesResourceAccessTokenWithToken`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `access_level` | `Integer` |  |
| `active` | `Boolean` |  |
| `created_at` | `String` |  |
| `description` | `String` |  |
| `expires_at` | `String` |  |
| `id` | `Integer` |  |
| `last_used_at` | `String` |  |
| `name` | `String` |  |
| `resource_id` | `Integer` |  |
| `resource_type` | `String` |  |
| `revoked` | `Boolean` |  |
| `scope` | `Array` |  |
| `token` | `String` |  |
| `user_id` | `Integer` |  |

#### Example: Create

```ruby
api_entities_resource_access_token_with_token = client.ApiEntitiesResourceAccessTokenWithToken.create({
})
```


### ApiEntitiesResourceMilestoneEvent

Create an instance: `api_entities_resource_milestone_event = client.ApiEntitiesResourceMilestoneEvent`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action` | `String` |  |
| `created_at` | `String` |  |
| `id` | `Integer` |  |
| `milestone` | `Hash` |  |
| `resource_id` | `Integer` |  |
| `resource_type` | `String` |  |
| `state` | `String` |  |
| `user` | `Hash` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesResourceMilestoneEvent record (raises on error).
api_entities_resource_milestone_event = client.ApiEntitiesResourceMilestoneEvent.load({ "id" => "api_entities_resource_milestone_event_id", "project_id" => "project_id" })
```

#### Example: List

```ruby
# list returns an Array of ApiEntitiesResourceMilestoneEvent records (raises on error).
api_entities_resource_milestone_events = client.ApiEntitiesResourceMilestoneEvent.list
```


### ApiEntitiesSnippet

Create an instance: `api_entities_snippet = client.ApiEntitiesSnippet`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author` | `Hash` |  |
| `created_at` | `String` |  |
| `description` | `String` |  |
| `file` | `Array` |  |
| `file_name` | `String` |  |
| `http_url_to_repo` | `String` |  |
| `id` | `Integer` |  |
| `imported` | `Boolean` |  |
| `imported_from` | `String` |  |
| `project_id` | `Integer` |  |
| `raw_url` | `String` |  |
| `repository_storage` | `String` |  |
| `ssh_url_to_repo` | `String` |  |
| `title` | `String` |  |
| `updated_at` | `String` |  |
| `visibility` | `String` |  |
| `web_url` | `String` |  |

#### Example: List

```ruby
# list returns an Array of ApiEntitiesSnippet records (raises on error).
api_entities_snippets = client.ApiEntitiesSnippet.list
```


### ApiEntitiesSshKeyWithUser

Create an instance: `api_entities_ssh_key_with_user = client.ApiEntitiesSshKeyWithUser`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `String` |  |
| `expires_at` | `String` |  |
| `id` | `Integer` |  |
| `key` | `String` |  |
| `last_used_at` | `String` |  |
| `title` | `String` |  |
| `usage_type` | `String` |  |
| `user` | `Hash` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesSshKeyWithUser record (raises on error).
api_entities_ssh_key_with_user = client.ApiEntitiesSshKeyWithUser.load({ "id" => "api_entities_ssh_key_with_user_id" })
```


### ApiEntitiesSuggestion

Create an instance: `api_entities_suggestion = client.ApiEntitiesSuggestion`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `appliable` | `String` |  |
| `applied` | `String` |  |
| `from_content` | `String` |  |
| `from_line` | `String` |  |
| `id` | `String` |  |
| `to_content` | `String` |  |
| `to_line` | `String` |  |


### ApiEntitiesSystemBroadcastMessage

Create an instance: `api_entities_system_broadcast_message = client.ApiEntitiesSystemBroadcastMessage`

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
| `active` | `Boolean` |  |
| `broadcast_type` | `String` |  |
| `color` | `String` |  |
| `dismissable` | `String` |  |
| `ends_at` | `String` |  |
| `font` | `String` |  |
| `id` | `String` |  |
| `message` | `String` |  |
| `starts_at` | `String` |  |
| `target_access_level` | `String` |  |
| `target_path` | `String` |  |
| `theme` | `String` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesSystemBroadcastMessage record (raises on error).
api_entities_system_broadcast_message = client.ApiEntitiesSystemBroadcastMessage.load({ "id" => "api_entities_system_broadcast_message_id" })
```

#### Example: Create

```ruby
api_entities_system_broadcast_message = client.ApiEntitiesSystemBroadcastMessage.create({
})
```


### ApiEntitiesTag

Create an instance: `api_entities_tag = client.ApiEntitiesTag`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `commit` | `Hash` |  |
| `created_at` | `String` |  |
| `message` | `String` |  |
| `name` | `String` |  |
| `protected` | `Boolean` |  |
| `release` | `Hash` |  |
| `target` | `String` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesTag record (raises on error).
api_entities_tag = client.ApiEntitiesTag.load({ "id" => "api_entities_tag_id", "project_id" => "project_id" })
```

#### Example: List

```ruby
# list returns an Array of ApiEntitiesTag records (raises on error).
api_entities_tags = client.ApiEntitiesTag.list
```

#### Example: Create

```ruby
api_entities_tag = client.ApiEntitiesTag.create({
  "project_id" => "example_project_id", # String
})
```


### ApiEntitiesTagSignature

Create an instance: `api_entities_tag_signature = client.ApiEntitiesTagSignature`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `signature` | `String` |  |
| `signature_type` | `String` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesTagSignature record (raises on error).
api_entities_tag_signature = client.ApiEntitiesTagSignature.load({ "project_id" => "project_id", "tag_name" => "tag_name" })
```


### ApiEntitiesTemplatesList

Create an instance: `api_entities_templates_list = client.ApiEntitiesTemplatesList`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `key` | `String` |  |
| `name` | `String` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesTemplatesList record (raises on error).
api_entities_templates_list = client.ApiEntitiesTemplatesList.load({ "project_id" => "project_id", "type" => "type" })
```


### ApiEntitiesTerraformModuleVersion

Create an instance: `api_entities_terraform_module_version = client.ApiEntitiesTerraformModuleVersion`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `module` | `String` |  |
| `name` | `String` |  |
| `provider` | `String` |  |
| `root` | `String` |  |
| `source` | `String` |  |
| `submodule` | `String` |  |
| `version` | `String` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesTerraformModuleVersion record (raises on error).
api_entities_terraform_module_version = client.ApiEntitiesTerraformModuleVersion.load({ "module_name" => "module_name", "module_system" => "module_system" })
```

#### Example: List

```ruby
# list returns an Array of ApiEntitiesTerraformModuleVersion records (raises on error).
api_entities_terraform_module_versions = client.ApiEntitiesTerraformModuleVersion.list
```


### ApiEntitiesTreeObject

Create an instance: `api_entities_tree_object = client.ApiEntitiesTreeObject`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `String` |  |
| `mode` | `String` |  |
| `name` | `String` |  |
| `path` | `String` |  |
| `type` | `String` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesTreeObject record (raises on error).
api_entities_tree_object = client.ApiEntitiesTreeObject.load({ "project_id" => "project_id" })
```


### ApiEntitiesTrigger

Create an instance: `api_entities_trigger = client.ApiEntitiesTrigger`

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
| `created_at` | `String` |  |
| `description` | `String` |  |
| `expires_at` | `String` |  |
| `id` | `Integer` |  |
| `last_used` | `String` |  |
| `owner` | `Hash` |  |
| `token` | `String` |  |
| `updated_at` | `String` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesTrigger record (raises on error).
api_entities_trigger = client.ApiEntitiesTrigger.load({ "id" => "api_entities_trigger_id", "project_id" => "project_id" })
```

#### Example: List

```ruby
# list returns an Array of ApiEntitiesTrigger records (raises on error).
api_entities_triggers = client.ApiEntitiesTrigger.list
```

#### Example: Create

```ruby
api_entities_trigger = client.ApiEntitiesTrigger.create({
  "project_id" => "example_project_id", # String
})
```


### ApiEntitiesUserAgentDetail

Create an instance: `api_entities_user_agent_detail = client.ApiEntitiesUserAgentDetail`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `akismet_submitted` | `Boolean` |  |
| `ip_address` | `String` |  |
| `user_agent` | `String` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesUserAgentDetail record (raises on error).
api_entities_user_agent_detail = client.ApiEntitiesUserAgentDetail.load()
```


### ApiEntitiesUserCount

Create an instance: `api_entities_user_count = client.ApiEntitiesUserCount`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assigned_issue` | `Integer` |  |
| `assigned_merge_request` | `Integer` |  |
| `merge_request` | `Integer` |  |
| `review_requested_merge_request` | `Integer` |  |
| `todo` | `Integer` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesUserCount record (raises on error).
api_entities_user_count = client.ApiEntitiesUserCount.load()
```


### ApiEntitiesUserPublic

Create an instance: `api_entities_user_public = client.ApiEntitiesUserPublic`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_path` | `String` |  |
| `avatar_url` | `String` |  |
| `bio` | `String` |  |
| `bot` | `String` |  |
| `can_create_group` | `Boolean` |  |
| `can_create_project` | `Boolean` |  |
| `color_scheme_id` | `Integer` |  |
| `commit_email` | `String` |  |
| `confirmed_at` | `String` |  |
| `created_at` | `String` |  |
| `current_sign_in_at` | `String` |  |
| `custom_attribute` | `Array` |  |
| `discord` | `String` |  |
| `email` | `String` |  |
| `external` | `String` |  |
| `extra_shared_runners_minutes_limit` | `String` |  |
| `follower` | `String` |  |
| `following` | `String` |  |
| `github` | `String` |  |
| `id` | `Integer` |  |
| `identity` | `Hash` |  |
| `is_followed` | `Boolean` |  |
| `job_title` | `String` |  |
| `key` | `String` |  |
| `last_activity_on` | `String` |  |
| `last_sign_in_at` | `String` |  |
| `linkedin` | `String` |  |
| `local_time` | `String` |  |
| `location` | `String` |  |
| `locked` | `Boolean` |  |
| `name` | `String` |  |
| `organization` | `String` |  |
| `preferred_language` | `String` |  |
| `private_profile` | `Boolean` |  |
| `projects_limit` | `Integer` |  |
| `pronoun` | `String` |  |
| `public_email` | `String` |  |
| `scim_identity` | `Hash` |  |
| `shared_runners_minutes_limit` | `String` |  |
| `state` | `String` |  |
| `theme_id` | `Integer` |  |
| `twitter` | `String` |  |
| `two_factor_enabled` | `Boolean` |  |
| `username` | `String` |  |
| `value` | `String` |  |
| `web_url` | `String` |  |
| `website_url` | `String` |  |
| `work_information` | `String` |  |

#### Example: List

```ruby
# list returns an Array of ApiEntitiesUserPublic records (raises on error).
api_entities_user_publics = client.ApiEntitiesUserPublic.list
```


### ApiEntitiesUserWithAdmin

Create an instance: `api_entities_user_with_admin = client.ApiEntitiesUserWithAdmin`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `key` | `String` |  |
| `value` | `String` |  |

#### Example: List

```ruby
# list returns an Array of ApiEntitiesUserWithAdmin records (raises on error).
api_entities_user_with_admins = client.ApiEntitiesUserWithAdmin.list
```


### ApiEntitiesWikiAttachment

Create an instance: `api_entities_wiki_attachment = client.ApiEntitiesWikiAttachment`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```ruby
api_entities_wiki_attachment = client.ApiEntitiesWikiAttachment.create({
})
```


### ApiEntitiesWikiPage

Create an instance: `api_entities_wiki_page = client.ApiEntitiesWikiPage`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `content` | `String` |  |
| `encoding` | `String` |  |
| `format` | `String` |  |
| `front_matter` | `Hash` |  |
| `slug` | `String` |  |
| `title` | `String` |  |
| `wiki_page_meta_id` | `Integer` |  |

#### Example: Load

```ruby
# load returns the bare ApiEntitiesWikiPage record (raises on error).
api_entities_wiki_page = client.ApiEntitiesWikiPage.load({ "slug" => "slug" })
```

#### Example: Create

```ruby
api_entities_wiki_page = client.ApiEntitiesWikiPage.create({
})
```


### ApiEntitiesWikiPageBasic

Create an instance: `api_entities_wiki_page_basic = client.ApiEntitiesWikiPageBasic`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `format` | `String` |  |
| `slug` | `String` |  |
| `title` | `String` |  |
| `wiki_page_meta_id` | `Integer` |  |

#### Example: List

```ruby
# list returns an Array of ApiEntitiesWikiPageBasic records (raises on error).
api_entities_wiki_page_basics = client.ApiEntitiesWikiPageBasic.list
```


### Application

Create an instance: `application = client.Application`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### AwardEmoji

Create an instance: `award_emoji = client.AwardEmoji`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### Badge

Create an instance: `badge = client.Badge`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### Branch

Create an instance: `branch = client.Branch`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### CargoPackage

Create an instance: `cargo_package = client.CargoPackage`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ruby
# load returns the bare CargoPackage record (raises on error).
cargo_package = client.CargoPackage.load({ "project_id" => "project_id" })
```


### CiVariable

Create an instance: `ci_variable = client.CiVariable`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### Cluster

Create an instance: `cluster = client.Cluster`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### ClusterAgent

Create an instance: `cluster_agent = client.ClusterAgent`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### Composer

Create an instance: `composer = client.Composer`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```ruby
composer = client.Composer.create({
  "project_id" => "example_project_id", # String
})
```


### ComposerPackage

Create an instance: `composer_package = client.ComposerPackage`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ruby
# load returns the bare ComposerPackage record (raises on error).
composer_package = client.ComposerPackage.load()
```


### Conan

Create an instance: `conan = client.Conan`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### ConanPackage

Create an instance: `conan_package = client.ConanPackage`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Example: Load

```ruby
# load returns the bare ConanPackage record (raises on error).
conan_package = client.ConanPackage.load({ "id" => "conan_package_id" })
```


### ContainerRegistry

Create an instance: `container_registry = client.ContainerRegistry`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### ContainerRegistryEvent

Create an instance: `container_registry_event = client.ContainerRegistryEvent`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```ruby
container_registry_event = client.ContainerRegistryEvent.create({
})
```


### CustomAttribute

Create an instance: `custom_attribute = client.CustomAttribute`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `key` | `String` |  |
| `value` | `String` |  |

#### Example: Load

```ruby
# load returns the bare CustomAttribute record (raises on error).
custom_attribute = client.CustomAttribute.load({ "id" => "custom_attribute_id" })
```


### Debian

Create an instance: `debian = client.Debian`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |


### DebianDistribution

Create an instance: `debian_distribution = client.DebianDistribution`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### DebianPackage

Create an instance: `debian_package = client.DebianPackage`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Example: Load

```ruby
# load returns the bare DebianPackage record (raises on error).
debian_package = client.DebianPackage.load({ "id" => "debian_package_id" })
```


### DependencyProxy

Create an instance: `dependency_proxy = client.DependencyProxy`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### DeployKey

Create an instance: `deploy_key = client.DeployKey`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### DeployToken

Create an instance: `deploy_token = client.DeployToken`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### Deployment

Create an instance: `deployment = client.Deployment`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### EeApiEntitiesApprovalState

Create an instance: `ee_api_entities_approval_state = client.EeApiEntitiesApprovalState`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```ruby
ee_api_entities_approval_state = client.EeApiEntitiesApprovalState.create({
  "merge_request_id" => "example_merge_request_id", # String
  "project_id" => "example_project_id", # String
})
```


### EeApiEntitiesAuditEvent

Create an instance: `ee_api_entities_audit_event = client.EeApiEntitiesAuditEvent`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author_id` | `String` |  |
| `created_at` | `String` |  |
| `detail` | `String` |  |
| `entity_id` | `String` |  |
| `entity_type` | `String` |  |
| `event_name` | `String` |  |
| `id` | `String` |  |

#### Example: Load

```ruby
# load returns the bare EeApiEntitiesAuditEvent record (raises on error).
ee_api_entities_audit_event = client.EeApiEntitiesAuditEvent.load({ "id" => "ee_api_entities_audit_event_id" })
```

#### Example: List

```ruby
# list returns an Array of EeApiEntitiesAuditEvent records (raises on error).
ee_api_entities_audit_events = client.EeApiEntitiesAuditEvent.list
```


### EeApiEntitiesBillableMembership

Create an instance: `ee_api_entities_billable_membership = client.EeApiEntitiesBillableMembership`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `access_level` | `Hash` |  |
| `created_at` | `String` |  |
| `expires_at` | `String` |  |
| `id` | `String` |  |
| `source_full_name` | `String` |  |
| `source_id` | `String` |  |
| `source_members_url` | `String` |  |

#### Example: Load

```ruby
# load returns the bare EeApiEntitiesBillableMembership record (raises on error).
ee_api_entities_billable_membership = client.EeApiEntitiesBillableMembership.load({ "billable_member_id" => "billable_member_id", "group_id" => "group_id" })
```


### EeApiEntitiesGeoNodeStatus

Create an instance: `ee_api_entities_geo_node_status = client.EeApiEntitiesGeoNodeStatus`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ci_secure_files_checksum_failed_count` | `String` |  |
| `ci_secure_files_checksum_total_count` | `String` |  |
| `ci_secure_files_checksummed_count` | `String` |  |
| `ci_secure_files_count` | `String` |  |
| `ci_secure_files_failed_count` | `String` |  |
| `ci_secure_files_registry_count` | `String` |  |
| `ci_secure_files_synced_count` | `String` |  |
| `ci_secure_files_synced_in_percentage` | `String` |  |
| `ci_secure_files_verification_failed_count` | `String` |  |
| `ci_secure_files_verification_total_count` | `String` |  |
| `ci_secure_files_verified_count` | `String` |  |
| `ci_secure_files_verified_in_percentage` | `String` |  |
| `container_repositories_checksum_failed_count` | `String` |  |
| `container_repositories_checksum_total_count` | `String` |  |
| `container_repositories_checksummed_count` | `String` |  |
| `container_repositories_count` | `String` |  |
| `container_repositories_failed_count` | `String` |  |
| `container_repositories_registry_count` | `String` |  |
| `container_repositories_replication_enabled` | `String` |  |
| `container_repositories_synced_count` | `String` |  |
| `container_repositories_synced_in_percentage` | `String` |  |
| `container_repositories_verification_failed_count` | `String` |  |
| `container_repositories_verification_total_count` | `String` |  |
| `container_repositories_verified_count` | `String` |  |
| `container_repositories_verified_in_percentage` | `String` |  |
| `cursor_last_event_id` | `String` |  |
| `cursor_last_event_timestamp` | `String` |  |
| `db_replication_lag_second` | `String` |  |
| `dependency_proxy_blobs_checksum_failed_count` | `String` |  |
| `dependency_proxy_blobs_checksum_total_count` | `String` |  |
| `dependency_proxy_blobs_checksummed_count` | `String` |  |
| `dependency_proxy_blobs_count` | `String` |  |
| `dependency_proxy_blobs_failed_count` | `String` |  |
| `dependency_proxy_blobs_registry_count` | `String` |  |
| `dependency_proxy_blobs_synced_count` | `String` |  |
| `dependency_proxy_blobs_synced_in_percentage` | `String` |  |
| `dependency_proxy_blobs_verification_failed_count` | `String` |  |
| `dependency_proxy_blobs_verification_total_count` | `String` |  |
| `dependency_proxy_blobs_verified_count` | `String` |  |
| `dependency_proxy_blobs_verified_in_percentage` | `String` |  |
| `dependency_proxy_manifests_checksum_failed_count` | `String` |  |
| `dependency_proxy_manifests_checksum_total_count` | `String` |  |
| `dependency_proxy_manifests_checksummed_count` | `String` |  |
| `dependency_proxy_manifests_count` | `String` |  |
| `dependency_proxy_manifests_failed_count` | `String` |  |
| `dependency_proxy_manifests_registry_count` | `String` |  |
| `dependency_proxy_manifests_synced_count` | `String` |  |
| `dependency_proxy_manifests_synced_in_percentage` | `String` |  |
| `dependency_proxy_manifests_verification_failed_count` | `String` |  |
| `dependency_proxy_manifests_verification_total_count` | `String` |  |
| `dependency_proxy_manifests_verified_count` | `String` |  |
| `dependency_proxy_manifests_verified_in_percentage` | `String` |  |
| `design_management_repositories_checksum_failed_count` | `String` |  |
| `design_management_repositories_checksum_total_count` | `String` |  |
| `design_management_repositories_checksummed_count` | `String` |  |
| `design_management_repositories_count` | `String` |  |
| `design_management_repositories_failed_count` | `String` |  |
| `design_management_repositories_registry_count` | `String` |  |
| `design_management_repositories_synced_count` | `String` |  |
| `design_management_repositories_synced_in_percentage` | `String` |  |
| `design_management_repositories_verification_failed_count` | `String` |  |
| `design_management_repositories_verification_total_count` | `String` |  |
| `design_management_repositories_verified_count` | `String` |  |
| `design_management_repositories_verified_in_percentage` | `String` |  |
| `geo_node_id` | `String` |  |
| `git_fetch_event_count_weekly` | `String` |  |
| `git_push_event_count_weekly` | `String` |  |
| `group_wiki_repositories_checksum_failed_count` | `String` |  |
| `group_wiki_repositories_checksum_total_count` | `String` |  |
| `group_wiki_repositories_checksummed_count` | `String` |  |
| `group_wiki_repositories_count` | `String` |  |
| `group_wiki_repositories_failed_count` | `String` |  |
| `group_wiki_repositories_registry_count` | `String` |  |
| `group_wiki_repositories_synced_count` | `String` |  |
| `group_wiki_repositories_synced_in_percentage` | `String` |  |
| `group_wiki_repositories_verification_failed_count` | `String` |  |
| `group_wiki_repositories_verification_total_count` | `String` |  |
| `group_wiki_repositories_verified_count` | `String` |  |
| `group_wiki_repositories_verified_in_percentage` | `String` |  |
| `health` | `String` |  |
| `health_status` | `String` |  |
| `healthy` | `String` |  |
| `job_artifacts_checksum_failed_count` | `String` |  |
| `job_artifacts_checksum_total_count` | `String` |  |
| `job_artifacts_checksummed_count` | `String` |  |
| `job_artifacts_count` | `String` |  |
| `job_artifacts_failed_count` | `String` |  |
| `job_artifacts_registry_count` | `String` |  |
| `job_artifacts_synced_count` | `String` |  |
| `job_artifacts_synced_in_percentage` | `String` |  |
| `job_artifacts_verification_failed_count` | `String` |  |
| `job_artifacts_verification_total_count` | `String` |  |
| `job_artifacts_verified_count` | `String` |  |
| `job_artifacts_verified_in_percentage` | `String` |  |
| `last_event_id` | `String` |  |
| `last_event_timestamp` | `String` |  |
| `last_successful_status_check_timestamp` | `String` |  |
| `lfs_objects_checksum_failed_count` | `String` |  |
| `lfs_objects_checksum_total_count` | `String` |  |
| `lfs_objects_checksummed_count` | `String` |  |
| `lfs_objects_count` | `String` |  |
| `lfs_objects_failed_count` | `String` |  |
| `lfs_objects_registry_count` | `String` |  |
| `lfs_objects_synced_count` | `String` |  |
| `lfs_objects_synced_in_percentage` | `String` |  |
| `lfs_objects_verification_failed_count` | `String` |  |
| `lfs_objects_verification_total_count` | `String` |  |
| `lfs_objects_verified_count` | `String` |  |
| `lfs_objects_verified_in_percentage` | `String` |  |
| `link` | `Hash` |  |
| `merge_request_diffs_checksum_failed_count` | `String` |  |
| `merge_request_diffs_checksum_total_count` | `String` |  |
| `merge_request_diffs_checksummed_count` | `String` |  |
| `merge_request_diffs_count` | `String` |  |
| `merge_request_diffs_failed_count` | `String` |  |
| `merge_request_diffs_registry_count` | `String` |  |
| `merge_request_diffs_synced_count` | `String` |  |
| `merge_request_diffs_synced_in_percentage` | `String` |  |
| `merge_request_diffs_verification_failed_count` | `String` |  |
| `merge_request_diffs_verification_total_count` | `String` |  |
| `merge_request_diffs_verified_count` | `String` |  |
| `merge_request_diffs_verified_in_percentage` | `String` |  |
| `missing_oauth_application` | `String` |  |
| `namespace` | `Hash` |  |
| `package_files_checksum_failed_count` | `String` |  |
| `package_files_checksum_total_count` | `String` |  |
| `package_files_checksummed_count` | `String` |  |
| `package_files_count` | `String` |  |
| `package_files_failed_count` | `String` |  |
| `package_files_registry_count` | `String` |  |
| `package_files_synced_count` | `String` |  |
| `package_files_synced_in_percentage` | `String` |  |
| `package_files_verification_failed_count` | `String` |  |
| `package_files_verification_total_count` | `String` |  |
| `package_files_verified_count` | `String` |  |
| `package_files_verified_in_percentage` | `String` |  |
| `pages_deployments_checksum_failed_count` | `String` |  |
| `pages_deployments_checksum_total_count` | `String` |  |
| `pages_deployments_checksummed_count` | `String` |  |
| `pages_deployments_count` | `String` |  |
| `pages_deployments_failed_count` | `String` |  |
| `pages_deployments_registry_count` | `String` |  |
| `pages_deployments_synced_count` | `String` |  |
| `pages_deployments_synced_in_percentage` | `String` |  |
| `pages_deployments_verification_failed_count` | `String` |  |
| `pages_deployments_verification_total_count` | `String` |  |
| `pages_deployments_verified_count` | `String` |  |
| `pages_deployments_verified_in_percentage` | `String` |  |
| `pipeline_artifacts_checksum_failed_count` | `String` |  |
| `pipeline_artifacts_checksum_total_count` | `String` |  |
| `pipeline_artifacts_checksummed_count` | `String` |  |
| `pipeline_artifacts_count` | `String` |  |
| `pipeline_artifacts_failed_count` | `String` |  |
| `pipeline_artifacts_registry_count` | `String` |  |
| `pipeline_artifacts_synced_count` | `String` |  |
| `pipeline_artifacts_synced_in_percentage` | `String` |  |
| `pipeline_artifacts_verification_failed_count` | `String` |  |
| `pipeline_artifacts_verification_total_count` | `String` |  |
| `pipeline_artifacts_verified_count` | `String` |  |
| `pipeline_artifacts_verified_in_percentage` | `String` |  |
| `project_repositories_checksum_failed_count` | `String` |  |
| `project_repositories_checksum_total_count` | `String` |  |
| `project_repositories_checksummed_count` | `String` |  |
| `project_repositories_count` | `String` |  |
| `project_repositories_failed_count` | `String` |  |
| `project_repositories_registry_count` | `String` |  |
| `project_repositories_synced_count` | `String` |  |
| `project_repositories_synced_in_percentage` | `String` |  |
| `project_repositories_verification_failed_count` | `String` |  |
| `project_repositories_verification_total_count` | `String` |  |
| `project_repositories_verified_count` | `String` |  |
| `project_repositories_verified_in_percentage` | `String` |  |
| `project_wiki_repositories_checksum_failed_count` | `String` |  |
| `project_wiki_repositories_checksum_total_count` | `String` |  |
| `project_wiki_repositories_checksummed_count` | `String` |  |
| `project_wiki_repositories_count` | `String` |  |
| `project_wiki_repositories_failed_count` | `String` |  |
| `project_wiki_repositories_registry_count` | `String` |  |
| `project_wiki_repositories_synced_count` | `String` |  |
| `project_wiki_repositories_synced_in_percentage` | `String` |  |
| `project_wiki_repositories_verification_failed_count` | `String` |  |
| `project_wiki_repositories_verification_total_count` | `String` |  |
| `project_wiki_repositories_verified_count` | `String` |  |
| `project_wiki_repositories_verified_in_percentage` | `String` |  |
| `projects_count` | `String` |  |
| `proxy_local_requests_event_count_weekly` | `String` |  |
| `proxy_remote_requests_event_count_weekly` | `String` |  |
| `replication_slots_count` | `String` |  |
| `replication_slots_max_retained_wal_byte` | `String` |  |
| `replication_slots_used_count` | `String` |  |
| `replication_slots_used_in_percentage` | `String` |  |
| `repositories_checked_count` | `String` |  |
| `repositories_checked_failed_count` | `String` |  |
| `repositories_checked_in_percentage` | `String` |  |
| `repositories_count` | `String` |  |
| `revision` | `String` |  |
| `selective_sync_type` | `String` |  |
| `snippet_repositories_checksum_failed_count` | `String` |  |
| `snippet_repositories_checksum_total_count` | `String` |  |
| `snippet_repositories_checksummed_count` | `String` |  |
| `snippet_repositories_count` | `String` |  |
| `snippet_repositories_failed_count` | `String` |  |
| `snippet_repositories_registry_count` | `String` |  |
| `snippet_repositories_synced_count` | `String` |  |
| `snippet_repositories_synced_in_percentage` | `String` |  |
| `snippet_repositories_verification_failed_count` | `String` |  |
| `snippet_repositories_verification_total_count` | `String` |  |
| `snippet_repositories_verified_count` | `String` |  |
| `snippet_repositories_verified_in_percentage` | `String` |  |
| `storage_shard` | `Hash` |  |
| `storage_shards_match` | `String` |  |
| `terraform_state_versions_checksum_failed_count` | `String` |  |
| `terraform_state_versions_checksum_total_count` | `String` |  |
| `terraform_state_versions_checksummed_count` | `String` |  |
| `terraform_state_versions_count` | `String` |  |
| `terraform_state_versions_failed_count` | `String` |  |
| `terraform_state_versions_registry_count` | `String` |  |
| `terraform_state_versions_synced_count` | `String` |  |
| `terraform_state_versions_synced_in_percentage` | `String` |  |
| `terraform_state_versions_verification_failed_count` | `String` |  |
| `terraform_state_versions_verification_total_count` | `String` |  |
| `terraform_state_versions_verified_count` | `String` |  |
| `terraform_state_versions_verified_in_percentage` | `String` |  |
| `updated_at` | `String` |  |
| `uploads_checksum_failed_count` | `String` |  |
| `uploads_checksum_total_count` | `String` |  |
| `uploads_checksummed_count` | `String` |  |
| `uploads_count` | `String` |  |
| `uploads_failed_count` | `String` |  |
| `uploads_registry_count` | `String` |  |
| `uploads_synced_count` | `String` |  |
| `uploads_synced_in_percentage` | `String` |  |
| `uploads_verification_failed_count` | `String` |  |
| `uploads_verification_total_count` | `String` |  |
| `uploads_verified_count` | `String` |  |
| `uploads_verified_in_percentage` | `String` |  |
| `version` | `String` |  |

#### Example: Create

```ruby
ee_api_entities_geo_node_status = client.EeApiEntitiesGeoNodeStatus.create({
})
```


### EeApiEntitiesGeoPipelineRef

Create an instance: `ee_api_entities_geo_pipeline_ref = client.EeApiEntitiesGeoPipelineRef`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `pipeline_ref` | `Array` |  |

#### Example: List

```ruby
# list returns an Array of EeApiEntitiesGeoPipelineRef records (raises on error).
ee_api_entities_geo_pipeline_refs = client.EeApiEntitiesGeoPipelineRef.list
```


### EeApiEntitiesIssuableMetricImage

Create an instance: `ee_api_entities_issuable_metric_image = client.EeApiEntitiesIssuableMetricImage`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `String` |  |
| `file_path` | `String` |  |
| `filename` | `String` |  |
| `id` | `String` |  |
| `url` | `String` |  |
| `url_text` | `String` |  |

#### Example: Create

```ruby
ee_api_entities_issuable_metric_image = client.EeApiEntitiesIssuableMetricImage.create({
  "issue_id" => "example_issue_id", # String
  "project_id" => "example_project_id", # String
})
```


### EeApiEntitiesMergeRequestApprovalState

Create an instance: `ee_api_entities_merge_request_approval_state = client.EeApiEntitiesMergeRequestApprovalState`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `approvals_required` | `Integer` |  |
| `approved` | `Boolean` |  |
| `approved_by` | `Array` |  |
| `code_owner` | `Boolean` |  |
| `contains_hidden_group` | `Boolean` |  |
| `eligible_approver` | `Array` |  |
| `group` | `Array` |  |
| `id` | `Integer` |  |
| `name` | `String` |  |
| `overridden` | `Boolean` |  |
| `report_type` | `String` |  |
| `rule_type` | `String` |  |
| `section` | `String` |  |
| `source_rule` | `Hash` |  |
| `user` | `Array` |  |

#### Example: List

```ruby
# list returns an Array of EeApiEntitiesMergeRequestApprovalState records (raises on error).
ee_api_entities_merge_request_approval_states = client.EeApiEntitiesMergeRequestApprovalState.list
```


### EeApiEntitiesSshCertificate

Create an instance: `ee_api_entities_ssh_certificate = client.EeApiEntitiesSshCertificate`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `String` |  |
| `id` | `Integer` |  |
| `key` | `String` |  |
| `title` | `String` |  |

#### Example: List

```ruby
# list returns an Array of EeApiEntitiesSshCertificate records (raises on error).
ee_api_entities_ssh_certificates = client.EeApiEntitiesSshCertificate.list
```

#### Example: Create

```ruby
ee_api_entities_ssh_certificate = client.EeApiEntitiesSshCertificate.create({
  "group_id" => "example_group_id", # String
})
```


### Environment

Create an instance: `environment = client.Environment`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |

#### Example: Create

```ruby
environment = client.Environment.create({
  "project_id" => "example_project_id", # String
})
```


### ErrorTrackingClientKey

Create an instance: `error_tracking_client_key = client.ErrorTrackingClientKey`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### Feature

Create an instance: `feature = client.Feature`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### FeatureFlag

Create an instance: `feature_flag = client.FeatureFlag`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Example: Load

```ruby
# load returns the bare FeatureFlag record (raises on error).
feature_flag = client.FeatureFlag.load({ "project_id" => "project_id" })
```

#### Example: Create

```ruby
feature_flag = client.FeatureFlag.create({
  "unleash_id" => "example_unleash_id", # String
})
```


### FeatureFlagsUserList

Create an instance: `feature_flags_user_list = client.FeatureFlagsUserList`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### FreezePeriod

Create an instance: `freeze_period = client.FreezePeriod`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### GenericPackage

Create an instance: `generic_package = client.GenericPackage`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Example: Load

```ruby
# load returns the bare GenericPackage record (raises on error).
generic_package = client.GenericPackage.load({ "file_name" => "file_name", "generic_id" => "generic_id", "project_id" => "project_id" })
```


### Geo

Create an instance: `geo = client.Geo`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ruby
# load returns the bare Geo record (raises on error).
geo = client.Geo.load({ "replicable_id" => "replicable_id", "replicable_name" => "replicable_name" })
```

#### Example: Create

```ruby
geo = client.Geo.create({
})
```


### GoProxy

Create an instance: `go_proxy = client.GoProxy`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ruby
# load returns the bare GoProxy record (raises on error).
go_proxy = client.GoProxy.load({ "project_id" => "project_id" })
```


### Group

Create an instance: `group = client.Group`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Example: Load

```ruby
# load returns the bare Group record (raises on error).
group = client.Group.load({ "id" => "group_id" })
```

#### Example: Create

```ruby
group = client.Group.create({
  "id" => "example_id", # String
})
```


### GroupAvatar

Create an instance: `group_avatar = client.GroupAvatar`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ruby
# load returns the bare GroupAvatar record (raises on error).
group_avatar = client.GroupAvatar.load({ "id" => "group_avatar_id" })
```


### GroupExport

Create an instance: `group_export = client.GroupExport`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ruby
# load returns the bare GroupExport record (raises on error).
group_export = client.GroupExport.load({ "group_id" => "group_id" })
```

#### Example: Create

```ruby
group_export = client.GroupExport.create({
  "id" => "example_id", # String
})
```


### GroupImport

Create an instance: `group_import = client.GroupImport`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```ruby
group_import = client.GroupImport.create({
})
```


### HelmPackage

Create an instance: `helm_package = client.HelmPackage`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ruby
# load returns the bare HelmPackage record (raises on error).
helm_package = client.HelmPackage.load({ "project_id" => "project_id" })
```

#### Example: Create

```ruby
helm_package = client.HelmPackage.create({
  "project_id" => "example_project_id", # String
})
```


### Hook

Create an instance: `hook = client.Hook`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Example: Create

```ruby
hook = client.Hook.create({
  "id" => "example_id", # String
})
```


### Import

Create an instance: `import = client.Import`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```ruby
import = client.Import.create({
})
```


### Integration

Create an instance: `integration = client.Integration`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |

#### Example: Create

```ruby
integration = client.Integration.create({
})
```


### Invitation

Create an instance: `invitation = client.Invitation`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### IssueLink

Create an instance: `issue_link = client.IssueLink`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### IssuesStatistic

Create an instance: `issues_statistic = client.IssuesStatistic`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ruby
# load returns the bare IssuesStatistic record (raises on error).
issues_statistic = client.IssuesStatistic.load()
```


### Job

Create an instance: `job = client.Job`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Example: Load

```ruby
# load returns the bare Job record (raises on error).
job = client.Job.load({ "id" => "job_id" })
```

#### Example: Create

```ruby
job = client.Job.create({
})
```


### MavenPackage

Create an instance: `maven_package = client.MavenPackage`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Example: Load

```ruby
# load returns the bare MavenPackage record (raises on error).
maven_package = client.MavenPackage.load({ "file_name" => "file_name" })
```


### Member

Create an instance: `member = client.Member`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### MergeRequest

Create an instance: `merge_request = client.MergeRequest`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Example: Load

```ruby
# load returns the bare MergeRequest record (raises on error).
merge_request = client.MergeRequest.load({ "id" => "merge_request_id", "project_id" => "project_id" })
```


### Metadata

Create an instance: `metadata = client.Metadata`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `enterprise` | `Boolean` |  |
| `kas` | `Hash` |  |
| `revision` | `String` |  |
| `version` | `String` |  |

#### Example: Load

```ruby
# load returns the bare Metadata record (raises on error).
metadata = client.Metadata.load()
```


### Migration

Create an instance: `migration = client.Migration`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```ruby
migration = client.Migration.create({
  "timestamp" => "example_timestamp", # Object
})
```


### MlModelRegistry

Create an instance: `ml_model_registry = client.MlModelRegistry`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Example: Load

```ruby
# load returns the bare MlModelRegistry record (raises on error).
ml_model_registry = client.MlModelRegistry.load({ "file_name" => "file_name", "ml_model_id" => "ml_model_id", "project_id" => "project_id" })
```


### Namespace

Create an instance: `namespace = client.Namespace`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### Npm

Create an instance: `npm = client.Npm`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |


### NpmPackage

Create an instance: `npm_package = client.NpmPackage`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Example: Load

```ruby
# load returns the bare NpmPackage record (raises on error).
npm_package = client.NpmPackage.load({ "project_id" => "project_id" })
```

#### Example: Create

```ruby
npm_package = client.NpmPackage.create({
})
```


### Nuget

Create an instance: `nuget = client.Nuget`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |


### NugetPackage

Create an instance: `nuget_package = client.NugetPackage`

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
| `catalog_entry` | `Hash` |  |
| `count` | `Integer` |  |
| `id` | `String` |  |
| `item` | `Array` |  |
| `lower` | `String` |  |
| `package_content` | `String` |  |
| `upper` | `String` |  |

#### Example: Load

```ruby
# load returns the bare NugetPackage record (raises on error).
nuget_package = client.NugetPackage.load()
```

#### Example: List

```ruby
# list returns an Array of NugetPackage records (raises on error).
nuget_packages = client.NugetPackage.list
```


### PackageFile

Create an instance: `package_file = client.PackageFile`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Example: Load

```ruby
# load returns the bare PackageFile record (raises on error).
package_file = client.PackageFile.load({ "id" => "package_file_id", "package_id" => "package_id", "project_id" => "project_id" })
```


### Page

Create an instance: `page = client.Page`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Example: Load

```ruby
# load returns the bare Page record (raises on error).
page = client.Page.load({ "project_id" => "project_id" })
```


### Participant

Create an instance: `participant = client.Participant`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `key` | `String` |  |
| `value` | `String` |  |

#### Example: List

```ruby
# list returns an Array of Participant records (raises on error).
participants = client.Participant.list
```


### PersonalAccessToken

Create an instance: `personal_access_token = client.PersonalAccessToken`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### Project

Create an instance: `project = client.Project`

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
| `before_sha` | `String` |  |
| `committed_at` | `String` |  |
| `coverage` | `Float` |  |
| `created_at` | `String` |  |
| `detailed_status` | `Hash` |  |
| `duration` | `Integer` |  |
| `finished_at` | `String` |  |
| `id` | `Integer` |  |
| `iid` | `Integer` |  |
| `name` | `String` |  |
| `project_id` | `Integer` |  |
| `queued_duration` | `Integer` |  |
| `ref` | `String` |  |
| `sha` | `String` |  |
| `source` | `String` |  |
| `started_at` | `String` |  |
| `status` | `String` |  |
| `tag` | `Boolean` |  |
| `updated_at` | `String` |  |
| `user` | `Hash` |  |
| `web_url` | `String` |  |
| `yaml_error` | `String` |  |

#### Example: Load

```ruby
# load returns the bare Project record (raises on error).
project = client.Project.load({ "id" => "project_id" })
```

#### Example: Create

```ruby
project = client.Project.create({
  "id" => "example_id", # String
})
```


### ProjectAvatar

Create an instance: `project_avatar = client.ProjectAvatar`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ruby
# load returns the bare ProjectAvatar record (raises on error).
project_avatar = client.ProjectAvatar.load({ "id" => "project_avatar_id" })
```


### ProjectEntity

Create an instance: `project_entity = client.ProjectEntity`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```ruby
project_entity = client.ProjectEntity.create({
})
```


### ProjectExport

Create an instance: `project_export = client.ProjectExport`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ruby
# load returns the bare ProjectExport record (raises on error).
project_export = client.ProjectExport.load({ "project_id" => "project_id" })
```

#### Example: Create

```ruby
project_export = client.ProjectExport.create({
  "id" => "example_id", # String
})
```


### ProjectHook

Create an instance: `project_hook = client.ProjectHook`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### ProjectImport

Create an instance: `project_import = client.ProjectImport`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```ruby
project_import = client.ProjectImport.create({
})
```


### ProjectImportEntity

Create an instance: `project_import_entity = client.ProjectImportEntity`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `forked` | `Boolean` |  |
| `full_name` | `String` |  |
| `full_path` | `String` |  |
| `human_import_status_name` | `String` |  |
| `id` | `Integer` |  |
| `import_error` | `String` |  |
| `import_source` | `String` |  |
| `import_status` | `String` |  |
| `import_warning` | `String` |  |
| `name` | `String` |  |
| `provider_link` | `String` |  |
| `refs_url` | `String` |  |
| `relation_type` | `String` |  |

#### Example: Create

```ruby
project_import_entity = client.ProjectImportEntity.create({
})
```


### ProjectPackage

Create an instance: `project_package = client.ProjectPackage`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### ProjectSnippet

Create an instance: `project_snippet = client.ProjectSnippet`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### ProjectsJobTokenScope

Create an instance: `projects_job_token_scope = client.ProjectsJobTokenScope`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |


### ProtectedTag

Create an instance: `protected_tag = client.ProtectedTag`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### Pypi

Create an instance: `pypi = client.Pypi`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```ruby
pypi = client.Pypi.create({
  "project_id" => "example_project_id", # String
})
```


### PypiPackage

Create an instance: `pypi_package = client.PypiPackage`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ruby
# load returns the bare PypiPackage record (raises on error).
pypi_package = client.PypiPackage.load()
```

#### Example: Create

```ruby
pypi_package = client.PypiPackage.create({
  "project_id" => "example_project_id", # String
})
```


### Release

Create an instance: `release = client.Release`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Example: Load

```ruby
# load returns the bare Release record (raises on error).
release = client.Release.load({ "project_id" => "project_id" })
```


### ReleaseLink

Create an instance: `release_link = client.ReleaseLink`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### RemoteMirror

Create an instance: `remote_mirror = client.RemoteMirror`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Example: Load

```ruby
# load returns the bare RemoteMirror record (raises on error).
remote_mirror = client.RemoteMirror.load({ "id" => "remote_mirror_id", "project_id" => "project_id" })
```

#### Example: Create

```ruby
remote_mirror = client.RemoteMirror.create({
  "id" => "example_id", # String
  "project_id" => "example_project_id", # String
})
```


### Rpm

Create an instance: `rpm = client.Rpm`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```ruby
rpm = client.Rpm.create({
  "project_id" => "example_project_id", # String
})
```


### RpmPackage

Create an instance: `rpm_package = client.RpmPackage`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ruby
# load returns the bare RpmPackage record (raises on error).
rpm_package = client.RpmPackage.load({ "project_id" => "project_id" })
```

#### Example: Create

```ruby
rpm_package = client.RpmPackage.create({
  "project_id" => "example_project_id", # String
})
```


### Rubygem

Create an instance: `rubygem = client.Rubygem`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ruby
# load returns the bare Rubygem record (raises on error).
rubygem = client.Rubygem.load({ "id" => "rubygem_id", "project_id" => "project_id" })
```


### RubygemPackage

Create an instance: `rubygem_package = client.RubygemPackage`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ruby
# load returns the bare RubygemPackage record (raises on error).
rubygem_package = client.RubygemPackage.load({ "project_id" => "project_id" })
```

#### Example: Create

```ruby
rubygem_package = client.RubygemPackage.create({
  "project_id" => "example_project_id", # String
})
```


### Runner

Create an instance: `runner = client.Runner`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |

#### Example: Create

```ruby
runner = client.Runner.create({
})
```


### Search

Create an instance: `search = client.Search`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ruby
# load returns the bare Search record (raises on error).
search = client.Search.load()
```


### SecureFile

Create an instance: `secure_file = client.SecureFile`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Example: Load

```ruby
# load returns the bare SecureFile record (raises on error).
secure_file = client.SecureFile.load({ "id" => "secure_file_id", "project_id" => "project_id" })
```


### Slack

Create an instance: `slack = client.Slack`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```ruby
slack = client.Slack.create({
})
```


### Snippet

Create an instance: `snippet = client.Snippet`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Example: Load

```ruby
# load returns the bare Snippet record (raises on error).
snippet = client.Snippet.load({ "id" => "snippet_id", "file_id" => "file_id", "file_path" => "file_path" })
```


### Starrer

Create an instance: `starrer = client.Starrer`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_path` | `String` |  |
| `avatar_url` | `String` |  |
| `custom_attribute` | `Array` |  |
| `id` | `Integer` |  |
| `locked` | `Boolean` |  |
| `name` | `String` |  |
| `public_email` | `String` |  |
| `state` | `String` |  |
| `username` | `String` |  |
| `web_url` | `String` |  |

#### Example: List

```ruby
# list returns an Array of Starrer records (raises on error).
starrers = client.Starrer.list
```


### SystemHook

Create an instance: `system_hook = client.SystemHook`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### Tag

Create an instance: `tag = client.Tag`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### TerraformRegistry

Create an instance: `terraform_registry = client.TerraformRegistry`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Example: Load

```ruby
# load returns the bare TerraformRegistry record (raises on error).
terraform_registry = client.TerraformRegistry.load({ "id" => "terraform_registry_id", "module_system" => "module_system" })
```


### TerraformState

Create an instance: `terraform_state = client.TerraformState`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Example: Load

```ruby
# load returns the bare TerraformState record (raises on error).
terraform_state = client.TerraformState.load({ "id" => "terraform_state_id", "project_id" => "project_id" })
```

#### Example: Create

```ruby
terraform_state = client.TerraformState.create({
  "project_id" => "example_project_id", # String
})
```


### TestReport

Create an instance: `test_report = client.TestReport`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `error_count` | `Integer` |  |
| `failed_count` | `Integer` |  |
| `name` | `String` |  |
| `skipped_count` | `Integer` |  |
| `success_count` | `Integer` |  |
| `suite_error` | `String` |  |
| `test_case` | `Array` |  |
| `total_count` | `Integer` |  |
| `total_time` | `Integer` |  |

#### Example: List

```ruby
# list returns an Array of TestReport records (raises on error).
test_reports = client.TestReport.list
```


### TestReportSummary

Create an instance: `test_report_summary = client.TestReportSummary`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `test_suite` | `Hash` |  |
| `total` | `Hash` |  |

#### Example: Load

```ruby
# load returns the bare TestReportSummary record (raises on error).
test_report_summary = client.TestReportSummary.load({ "pipeline_id" => "pipeline_id", "project_id" => "project_id" })
```


### Topic

Create an instance: `topic = client.Topic`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### UnleashApi

Create an instance: `unleash_api = client.UnleashApi`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ruby
# load returns the bare UnleashApi record (raises on error).
unleash_api = client.UnleashApi.load({ "unleash_id" => "unleash_id" })
```


### UsageData

Create an instance: `usage_data = client.UsageData`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ruby
# load returns the bare UsageData record (raises on error).
usage_data = client.UsageData.load()
```

#### Example: Create

```ruby
usage_data = client.UsageData.create({
})
```


### User

Create an instance: `user = client.User`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_path` | `String` |  |
| `avatar_url` | `String` |  |
| `custom_attribute` | `Array` |  |
| `id` | `Integer` |  |
| `locked` | `Boolean` |  |
| `name` | `String` |  |
| `public_email` | `String` |  |
| `state` | `String` |  |
| `username` | `String` |  |
| `web_url` | `String` |  |

#### Example: List

```ruby
# list returns an Array of User records (raises on error).
users = client.User.list
```


### WebCommit

Create an instance: `web_commit = client.WebCommit`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ruby
# load returns the bare WebCommit record (raises on error).
web_commit = client.WebCommit.load()
```


### Wiki

Create an instance: `wiki = client.Wiki`

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

Features are the extension mechanism. A feature is a Ruby class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as hashes

The Ruby SDK uses plain Ruby hashes throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers.to_map()` to safely validate that a value is a hash.

### Module structure

```
rb/
├── Gitlab_sdk.rb       -- Main SDK module
├── config.rb                  -- Configuration
├── features.rb                -- Feature factory
├── core/                      -- Core types and context
├── entity/                    -- Entity implementations
├── feature/                   -- Built-in features (Base, Test, Log)
├── utility/                   -- Utility functions and struct library
└── test/                      -- Test suites
```

The main module (`Gitlab_sdk`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `remove`, the entity
stores the returned data and match criteria internally.

```ruby
accessrequest = client.AccessRequest
accessrequest.remove()

# accessrequest.data_get now returns the accessrequest data from the last remove
# accessrequest.match_get returns the last match criteria
```

Call `make` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
