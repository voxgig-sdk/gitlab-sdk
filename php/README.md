# Gitlab PHP SDK



The PHP SDK for the Gitlab API — an entity-oriented client using PHP conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `$client->AccessRequest()` — with named operations (`list`/`load`/`create`/`update`/`remove`/`patch`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to Packagist. Install it from the
GitHub release tag (`php/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/gitlab-sdk/releases](https://github.com/voxgig-sdk/gitlab-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```php
<?php
require_once 'gitlab_sdk.php';

$client = new GitlabSDK([
    "apikey" => getenv("GITLAB_APIKEY"),
]);
```

### 3. Load an apientitiesbranch

ApiEntitiesBranch is nested under project, so provide the `project_id`.

```php
try {
    // load() returns the bare ApiEntitiesBranch record (throws on error).
    $apientitiesbranch = $client->ApiEntitiesBranch()->load(["project_id" => "example_project_id", "id" => "example_id"]);
    print_r($apientitiesbranch);
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

### 4. Create, update, and remove

```php
// Remove
$client->AccessRequest()->remove(["id" => "example_id"]);
```


## Error handling

Entity operations throw a `\Throwable` on failure, so wrap them in
`try` / `catch`:

```php
try {
    $apientitiesaccessrequesters = $client->ApiEntitiesAccessRequester()->list();
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

`direct()` does **not** throw — it returns the result array. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```php
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example_id"],
]);

if (! $result["ok"]) {
    $err = $result["err"] ?? null;
    echo "request failed: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```php
// direct() is the raw-HTTP escape hatch: it returns a result array
// (it does not throw). Branch on $result["ok"].
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);

if ($result["ok"]) {
    echo $result["status"];  // 200
    print_r($result["data"]);  // response body
} else {
    // On an HTTP error status there is no err (only a transport failure sets
    // it), so fall back to the status code.
    $err = $result["err"] ?? null;
    echo "Error: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```

### Prepare a request without sending it

```php
// prepare() throws on error and returns the fetch definition.
$fetchdef = $client->prepare([
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => ["id" => "example"],
]);

echo $fetchdef["url"];
echo $fetchdef["method"];
print_r($fetchdef["headers"]);
```

### Use test mode

Create a mock client for unit testing — no server required:

```php
$client = GitlabSDK::test();

// Entity ops return the bare mock record (throws on error).
$apientitiesaccessrequester = $client->ApiEntitiesAccessRequester()->list();
print_r($apientitiesaccessrequester);
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```php
$mock_fetch = function ($url, $init) {
    return [
        [
            "status" => 200,
            "statusText" => "OK",
            "headers" => [],
            "json" => function () { return ["id" => "mock01"]; },
        ],
        null,
    ];
};

$client = new GitlabSDK([
    "base" => "http://localhost:8080",
    "system" => [
        "fetch" => $mock_fetch,
    ],
]);
```

### Run live tests

Create a `.env.local` file at the project root:

```
GITLAB_TEST_LIVE=TRUE
GITLAB_APIKEY=<your-key>
```

Then run:

```bash
cd php && ./vendor/bin/phpunit test/
```


## Reference

### GitlabSDK

```php
require_once 'gitlab_sdk.php';
$client = new GitlabSDK($options);
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `array` | Feature activation flags. |
| `extend` | `array` | Additional Feature instances to load. |
| `system` | `array` | System overrides (e.g. custom `fetch` callable). |

### test

```php
$client = GitlabSDK::test($testopts, $sdkopts);
```

Creates a test-mode client with mock transport. Both arguments may be `null`.

### GitlabSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `(): array` | Deep copy of current SDK options. |
| `get_utility` | `(): Utility` | Copy of the SDK utility object. |
| `prepare` | `(array $fetchargs): array` | Build an HTTP request definition without sending. |
| `direct` | `(array $fetchargs): array` | Build and send an HTTP request. |
| `AccessRequest` | `($data): AccessRequestEntity` | Create an AccessRequest entity instance. |
| `AlertManagement` | `($data): AlertManagementEntity` | Create an AlertManagement entity instance. |
| `ApiEntitiesAccessRequester` | `($data): ApiEntitiesAccessRequesterEntity` | Create an ApiEntitiesAccessRequester entity instance. |
| `ApiEntitiesAppearance` | `($data): ApiEntitiesAppearanceEntity` | Create an ApiEntitiesAppearance entity instance. |
| `ApiEntitiesApplication` | `($data): ApiEntitiesApplicationEntity` | Create an ApiEntitiesApplication entity instance. |
| `ApiEntitiesApplicationStatistic` | `($data): ApiEntitiesApplicationStatisticEntity` | Create an ApiEntitiesApplicationStatistic entity instance. |
| `ApiEntitiesApplicationWithSecret` | `($data): ApiEntitiesApplicationWithSecretEntity` | Create an ApiEntitiesApplicationWithSecret entity instance. |
| `ApiEntitiesAvatar` | `($data): ApiEntitiesAvatarEntity` | Create an ApiEntitiesAvatar entity instance. |
| `ApiEntitiesAwardEmoji` | `($data): ApiEntitiesAwardEmojiEntity` | Create an ApiEntitiesAwardEmoji entity instance. |
| `ApiEntitiesBadge` | `($data): ApiEntitiesBadgeEntity` | Create an ApiEntitiesBadge entity instance. |
| `ApiEntitiesBasicBadgeDetail` | `($data): ApiEntitiesBasicBadgeDetailEntity` | Create an ApiEntitiesBasicBadgeDetail entity instance. |
| `ApiEntitiesBasicGroupDetail` | `($data): ApiEntitiesBasicGroupDetailEntity` | Create an ApiEntitiesBasicGroupDetail entity instance. |
| `ApiEntitiesBasicProjectDetail` | `($data): ApiEntitiesBasicProjectDetailEntity` | Create an ApiEntitiesBasicProjectDetail entity instance. |
| `ApiEntitiesBasicRef` | `($data): ApiEntitiesBasicRefEntity` | Create an ApiEntitiesBasicRef entity instance. |
| `ApiEntitiesBasicSuccess` | `($data): ApiEntitiesBasicSuccessEntity` | Create an ApiEntitiesBasicSuccess entity instance. |
| `ApiEntitiesBatchedBackgroundMigration` | `($data): ApiEntitiesBatchedBackgroundMigrationEntity` | Create an ApiEntitiesBatchedBackgroundMigration entity instance. |
| `ApiEntitiesBranch` | `($data): ApiEntitiesBranchEntity` | Create an ApiEntitiesBranch entity instance. |
| `ApiEntitiesBulkImport` | `($data): ApiEntitiesBulkImportEntity` | Create an ApiEntitiesBulkImport entity instance. |
| `ApiEntitiesBulkImportsEntityFailure` | `($data): ApiEntitiesBulkImportsEntityFailureEntity` | Create an ApiEntitiesBulkImportsEntityFailure entity instance. |
| `ApiEntitiesBulkImportsExportStatus` | `($data): ApiEntitiesBulkImportsExportStatusEntity` | Create an ApiEntitiesBulkImportsExportStatus entity instance. |
| `ApiEntitiesChangelog` | `($data): ApiEntitiesChangelogEntity` | Create an ApiEntitiesChangelog entity instance. |
| `ApiEntitiesCiBridge` | `($data): ApiEntitiesCiBridgeEntity` | Create an ApiEntitiesCiBridge entity instance. |
| `ApiEntitiesCiCatalogResourcesVersion` | `($data): ApiEntitiesCiCatalogResourcesVersionEntity` | Create an ApiEntitiesCiCatalogResourcesVersion entity instance. |
| `ApiEntitiesCiJob` | `($data): ApiEntitiesCiJobEntity` | Create an ApiEntitiesCiJob entity instance. |
| `ApiEntitiesCiJobBasic` | `($data): ApiEntitiesCiJobBasicEntity` | Create an ApiEntitiesCiJobBasic entity instance. |
| `ApiEntitiesCiJobBasicWithProject` | `($data): ApiEntitiesCiJobBasicWithProjectEntity` | Create an ApiEntitiesCiJobBasicWithProject entity instance. |
| `ApiEntitiesCiLintResult` | `($data): ApiEntitiesCiLintResultEntity` | Create an ApiEntitiesCiLintResult entity instance. |
| `ApiEntitiesCiPipeline` | `($data): ApiEntitiesCiPipelineEntity` | Create an ApiEntitiesCiPipeline entity instance. |
| `ApiEntitiesCiPipelineBasic` | `($data): ApiEntitiesCiPipelineBasicEntity` | Create an ApiEntitiesCiPipelineBasic entity instance. |
| `ApiEntitiesCiPipelineSchedule` | `($data): ApiEntitiesCiPipelineScheduleEntity` | Create an ApiEntitiesCiPipelineSchedule entity instance. |
| `ApiEntitiesCiPipelineScheduleDetail` | `($data): ApiEntitiesCiPipelineScheduleDetailEntity` | Create an ApiEntitiesCiPipelineScheduleDetail entity instance. |
| `ApiEntitiesCiResetTokenResult` | `($data): ApiEntitiesCiResetTokenResultEntity` | Create an ApiEntitiesCiResetTokenResult entity instance. |
| `ApiEntitiesCiResourceGroup` | `($data): ApiEntitiesCiResourceGroupEntity` | Create an ApiEntitiesCiResourceGroup entity instance. |
| `ApiEntitiesCiRunner` | `($data): ApiEntitiesCiRunnerEntity` | Create an ApiEntitiesCiRunner entity instance. |
| `ApiEntitiesCiRunnerDetail` | `($data): ApiEntitiesCiRunnerDetailEntity` | Create an ApiEntitiesCiRunnerDetail entity instance. |
| `ApiEntitiesCiRunnerManager` | `($data): ApiEntitiesCiRunnerManagerEntity` | Create an ApiEntitiesCiRunnerManager entity instance. |
| `ApiEntitiesCiRunnerRegistrationDetail` | `($data): ApiEntitiesCiRunnerRegistrationDetailEntity` | Create an ApiEntitiesCiRunnerRegistrationDetail entity instance. |
| `ApiEntitiesCiSecureFile` | `($data): ApiEntitiesCiSecureFileEntity` | Create an ApiEntitiesCiSecureFile entity instance. |
| `ApiEntitiesCiVariable` | `($data): ApiEntitiesCiVariableEntity` | Create an ApiEntitiesCiVariable entity instance. |
| `ApiEntitiesCluster` | `($data): ApiEntitiesClusterEntity` | Create an ApiEntitiesCluster entity instance. |
| `ApiEntitiesClusterGroup` | `($data): ApiEntitiesClusterGroupEntity` | Create an ApiEntitiesClusterGroup entity instance. |
| `ApiEntitiesClusterProject` | `($data): ApiEntitiesClusterProjectEntity` | Create an ApiEntitiesClusterProject entity instance. |
| `ApiEntitiesClustersAgent` | `($data): ApiEntitiesClustersAgentEntity` | Create an ApiEntitiesClustersAgent entity instance. |
| `ApiEntitiesClustersAgentToken` | `($data): ApiEntitiesClustersAgentTokenEntity` | Create an ApiEntitiesClustersAgentToken entity instance. |
| `ApiEntitiesClustersAgentTokenBasic` | `($data): ApiEntitiesClustersAgentTokenBasicEntity` | Create an ApiEntitiesClustersAgentTokenBasic entity instance. |
| `ApiEntitiesClustersAgentTokenWithToken` | `($data): ApiEntitiesClustersAgentTokenWithTokenEntity` | Create an ApiEntitiesClustersAgentTokenWithToken entity instance. |
| `ApiEntitiesCommit` | `($data): ApiEntitiesCommitEntity` | Create an ApiEntitiesCommit entity instance. |
| `ApiEntitiesCommitDetail` | `($data): ApiEntitiesCommitDetailEntity` | Create an ApiEntitiesCommitDetail entity instance. |
| `ApiEntitiesCommitNote` | `($data): ApiEntitiesCommitNoteEntity` | Create an ApiEntitiesCommitNote entity instance. |
| `ApiEntitiesCommitSequence` | `($data): ApiEntitiesCommitSequenceEntity` | Create an ApiEntitiesCommitSequence entity instance. |
| `ApiEntitiesCommitSignature` | `($data): ApiEntitiesCommitSignatureEntity` | Create an ApiEntitiesCommitSignature entity instance. |
| `ApiEntitiesCommitStatus` | `($data): ApiEntitiesCommitStatusEntity` | Create an ApiEntitiesCommitStatus entity instance. |
| `ApiEntitiesCompare` | `($data): ApiEntitiesCompareEntity` | Create an ApiEntitiesCompare entity instance. |
| `ApiEntitiesContainerRegistryRepository` | `($data): ApiEntitiesContainerRegistryRepositoryEntity` | Create an ApiEntitiesContainerRegistryRepository entity instance. |
| `ApiEntitiesContainerRegistryTag` | `($data): ApiEntitiesContainerRegistryTagEntity` | Create an ApiEntitiesContainerRegistryTag entity instance. |
| `ApiEntitiesContainerRegistryTagDetail` | `($data): ApiEntitiesContainerRegistryTagDetailEntity` | Create an ApiEntitiesContainerRegistryTagDetail entity instance. |
| `ApiEntitiesContributor` | `($data): ApiEntitiesContributorEntity` | Create an ApiEntitiesContributor entity instance. |
| `ApiEntitiesDeployKey` | `($data): ApiEntitiesDeployKeyEntity` | Create an ApiEntitiesDeployKey entity instance. |
| `ApiEntitiesDeployKeysProject` | `($data): ApiEntitiesDeployKeysProjectEntity` | Create an ApiEntitiesDeployKeysProject entity instance. |
| `ApiEntitiesDeployToken` | `($data): ApiEntitiesDeployTokenEntity` | Create an ApiEntitiesDeployToken entity instance. |
| `ApiEntitiesDeployTokenWithToken` | `($data): ApiEntitiesDeployTokenWithTokenEntity` | Create an ApiEntitiesDeployTokenWithToken entity instance. |
| `ApiEntitiesDeployment` | `($data): ApiEntitiesDeploymentEntity` | Create an ApiEntitiesDeployment entity instance. |
| `ApiEntitiesDeploymentExtended` | `($data): ApiEntitiesDeploymentExtendedEntity` | Create an ApiEntitiesDeploymentExtended entity instance. |
| `ApiEntitiesDeploymentsApproval` | `($data): ApiEntitiesDeploymentsApprovalEntity` | Create an ApiEntitiesDeploymentsApproval entity instance. |
| `ApiEntitiesDictionaryTable` | `($data): ApiEntitiesDictionaryTableEntity` | Create an ApiEntitiesDictionaryTable entity instance. |
| `ApiEntitiesDiff` | `($data): ApiEntitiesDiffEntity` | Create an ApiEntitiesDiff entity instance. |
| `ApiEntitiesDiscoveredCluster` | `($data): ApiEntitiesDiscoveredClusterEntity` | Create an ApiEntitiesDiscoveredCluster entity instance. |
| `ApiEntitiesDraftNote` | `($data): ApiEntitiesDraftNoteEntity` | Create an ApiEntitiesDraftNote entity instance. |
| `ApiEntitiesEnvironment` | `($data): ApiEntitiesEnvironmentEntity` | Create an ApiEntitiesEnvironment entity instance. |
| `ApiEntitiesErrorTrackingClientKey` | `($data): ApiEntitiesErrorTrackingClientKeyEntity` | Create an ApiEntitiesErrorTrackingClientKey entity instance. |
| `ApiEntitiesErrorTrackingProjectSetting` | `($data): ApiEntitiesErrorTrackingProjectSettingEntity` | Create an ApiEntitiesErrorTrackingProjectSetting entity instance. |
| `ApiEntitiesEvent` | `($data): ApiEntitiesEventEntity` | Create an ApiEntitiesEvent entity instance. |
| `ApiEntitiesFeature` | `($data): ApiEntitiesFeatureEntity` | Create an ApiEntitiesFeature entity instance. |
| `ApiEntitiesFeatureDefinition` | `($data): ApiEntitiesFeatureDefinitionEntity` | Create an ApiEntitiesFeatureDefinition entity instance. |
| `ApiEntitiesFeatureFlag` | `($data): ApiEntitiesFeatureFlagEntity` | Create an ApiEntitiesFeatureFlag entity instance. |
| `ApiEntitiesFeatureFlagUserList` | `($data): ApiEntitiesFeatureFlagUserListEntity` | Create an ApiEntitiesFeatureFlagUserList entity instance. |
| `ApiEntitiesFreezePeriod` | `($data): ApiEntitiesFreezePeriodEntity` | Create an ApiEntitiesFreezePeriod entity instance. |
| `ApiEntitiesGitlabSubscription` | `($data): ApiEntitiesGitlabSubscriptionEntity` | Create an ApiEntitiesGitlabSubscription entity instance. |
| `ApiEntitiesGoModuleVersion` | `($data): ApiEntitiesGoModuleVersionEntity` | Create an ApiEntitiesGoModuleVersion entity instance. |
| `ApiEntitiesGroup` | `($data): ApiEntitiesGroupEntity` | Create an ApiEntitiesGroup entity instance. |
| `ApiEntitiesGroupDetail` | `($data): ApiEntitiesGroupDetailEntity` | Create an ApiEntitiesGroupDetail entity instance. |
| `ApiEntitiesHook` | `($data): ApiEntitiesHookEntity` | Create an ApiEntitiesHook entity instance. |
| `ApiEntitiesIntegration` | `($data): ApiEntitiesIntegrationEntity` | Create an ApiEntitiesIntegration entity instance. |
| `ApiEntitiesIntegrationBasic` | `($data): ApiEntitiesIntegrationBasicEntity` | Create an ApiEntitiesIntegrationBasic entity instance. |
| `ApiEntitiesInvitation` | `($data): ApiEntitiesInvitationEntity` | Create an ApiEntitiesInvitation entity instance. |
| `ApiEntitiesIssuableTimeStat` | `($data): ApiEntitiesIssuableTimeStatEntity` | Create an ApiEntitiesIssuableTimeStat entity instance. |
| `ApiEntitiesIssue` | `($data): ApiEntitiesIssueEntity` | Create an ApiEntitiesIssue entity instance. |
| `ApiEntitiesIssueLink` | `($data): ApiEntitiesIssueLinkEntity` | Create an ApiEntitiesIssueLink entity instance. |
| `ApiEntitiesLicense` | `($data): ApiEntitiesLicenseEntity` | Create an ApiEntitiesLicense entity instance. |
| `ApiEntitiesMarkdown` | `($data): ApiEntitiesMarkdownEntity` | Create an ApiEntitiesMarkdown entity instance. |
| `ApiEntitiesMarkdownUploadAdmin` | `($data): ApiEntitiesMarkdownUploadAdminEntity` | Create an ApiEntitiesMarkdownUploadAdmin entity instance. |
| `ApiEntitiesMember` | `($data): ApiEntitiesMemberEntity` | Create an ApiEntitiesMember entity instance. |
| `ApiEntitiesMerge` | `($data): ApiEntitiesMergeEntity` | Create an ApiEntitiesMerge entity instance. |
| `ApiEntitiesMergeRequestApproval` | `($data): ApiEntitiesMergeRequestApprovalEntity` | Create an ApiEntitiesMergeRequestApproval entity instance. |
| `ApiEntitiesMergeRequestBasic` | `($data): ApiEntitiesMergeRequestBasicEntity` | Create an ApiEntitiesMergeRequestBasic entity instance. |
| `ApiEntitiesMergeRequestChange` | `($data): ApiEntitiesMergeRequestChangeEntity` | Create an ApiEntitiesMergeRequestChange entity instance. |
| `ApiEntitiesMergeRequestDiff` | `($data): ApiEntitiesMergeRequestDiffEntity` | Create an ApiEntitiesMergeRequestDiff entity instance. |
| `ApiEntitiesMergeRequestDiffFull` | `($data): ApiEntitiesMergeRequestDiffFullEntity` | Create an ApiEntitiesMergeRequestDiffFull entity instance. |
| `ApiEntitiesMergeRequestReviewer` | `($data): ApiEntitiesMergeRequestReviewerEntity` | Create an ApiEntitiesMergeRequestReviewer entity instance. |
| `ApiEntitiesMetricImage` | `($data): ApiEntitiesMetricImageEntity` | Create an ApiEntitiesMetricImage entity instance. |
| `ApiEntitiesMrNote` | `($data): ApiEntitiesMrNoteEntity` | Create an ApiEntitiesMrNote entity instance. |
| `ApiEntitiesNamespace` | `($data): ApiEntitiesNamespaceEntity` | Create an ApiEntitiesNamespace entity instance. |
| `ApiEntitiesNamespaceExistence` | `($data): ApiEntitiesNamespaceExistenceEntity` | Create an ApiEntitiesNamespaceExistence entity instance. |
| `ApiEntitiesNamespacesStorageLimitExclusion` | `($data): ApiEntitiesNamespacesStorageLimitExclusionEntity` | Create an ApiEntitiesNamespacesStorageLimitExclusion entity instance. |
| `ApiEntitiesNpmPackage` | `($data): ApiEntitiesNpmPackageEntity` | Create an ApiEntitiesNpmPackage entity instance. |
| `ApiEntitiesNpmPackageTag` | `($data): ApiEntitiesNpmPackageTagEntity` | Create an ApiEntitiesNpmPackageTag entity instance. |
| `ApiEntitiesNugetPackagesVersion` | `($data): ApiEntitiesNugetPackagesVersionEntity` | Create an ApiEntitiesNugetPackagesVersion entity instance. |
| `ApiEntitiesNugetSearchResult` | `($data): ApiEntitiesNugetSearchResultEntity` | Create an ApiEntitiesNugetSearchResult entity instance. |
| `ApiEntitiesNugetServiceIndex` | `($data): ApiEntitiesNugetServiceIndexEntity` | Create an ApiEntitiesNugetServiceIndex entity instance. |
| `ApiEntitiesOrganizationsOrganization` | `($data): ApiEntitiesOrganizationsOrganizationEntity` | Create an ApiEntitiesOrganizationsOrganization entity instance. |
| `ApiEntitiesPackage` | `($data): ApiEntitiesPackageEntity` | Create an ApiEntitiesPackage entity instance. |
| `ApiEntitiesPackageFile` | `($data): ApiEntitiesPackageFileEntity` | Create an ApiEntitiesPackageFile entity instance. |
| `ApiEntitiesPackagePipeline` | `($data): ApiEntitiesPackagePipelineEntity` | Create an ApiEntitiesPackagePipeline entity instance. |
| `ApiEntitiesPackagesConanFilesList` | `($data): ApiEntitiesPackagesConanFilesListEntity` | Create an ApiEntitiesPackagesConanFilesList entity instance. |
| `ApiEntitiesPackagesConanPackageManifest` | `($data): ApiEntitiesPackagesConanPackageManifestEntity` | Create an ApiEntitiesPackagesConanPackageManifest entity instance. |
| `ApiEntitiesPackagesConanPackageRevision` | `($data): ApiEntitiesPackagesConanPackageRevisionEntity` | Create an ApiEntitiesPackagesConanPackageRevision entity instance. |
| `ApiEntitiesPackagesConanPackageSnapshot` | `($data): ApiEntitiesPackagesConanPackageSnapshotEntity` | Create an ApiEntitiesPackagesConanPackageSnapshot entity instance. |
| `ApiEntitiesPackagesConanRecipeManifest` | `($data): ApiEntitiesPackagesConanRecipeManifestEntity` | Create an ApiEntitiesPackagesConanRecipeManifest entity instance. |
| `ApiEntitiesPackagesConanRecipeRevision` | `($data): ApiEntitiesPackagesConanRecipeRevisionEntity` | Create an ApiEntitiesPackagesConanRecipeRevision entity instance. |
| `ApiEntitiesPackagesConanRecipeSnapshot` | `($data): ApiEntitiesPackagesConanRecipeSnapshotEntity` | Create an ApiEntitiesPackagesConanRecipeSnapshot entity instance. |
| `ApiEntitiesPackagesConanRevision` | `($data): ApiEntitiesPackagesConanRevisionEntity` | Create an ApiEntitiesPackagesConanRevision entity instance. |
| `ApiEntitiesPackagesConanUploadUrl` | `($data): ApiEntitiesPackagesConanUploadUrlEntity` | Create an ApiEntitiesPackagesConanUploadUrl entity instance. |
| `ApiEntitiesPackagesDebianDistribution` | `($data): ApiEntitiesPackagesDebianDistributionEntity` | Create an ApiEntitiesPackagesDebianDistribution entity instance. |
| `ApiEntitiesPagesDomain` | `($data): ApiEntitiesPagesDomainEntity` | Create an ApiEntitiesPagesDomain entity instance. |
| `ApiEntitiesPagesDomainBasic` | `($data): ApiEntitiesPagesDomainBasicEntity` | Create an ApiEntitiesPagesDomainBasic entity instance. |
| `ApiEntitiesPersonalAccessToken` | `($data): ApiEntitiesPersonalAccessTokenEntity` | Create an ApiEntitiesPersonalAccessToken entity instance. |
| `ApiEntitiesPersonalAccessTokenWithLastUsedIp` | `($data): ApiEntitiesPersonalAccessTokenWithLastUsedIpEntity` | Create an ApiEntitiesPersonalAccessTokenWithLastUsedIp entity instance. |
| `ApiEntitiesPersonalAccessTokenWithToken` | `($data): ApiEntitiesPersonalAccessTokenWithTokenEntity` | Create an ApiEntitiesPersonalAccessTokenWithToken entity instance. |
| `ApiEntitiesPersonalSnippet` | `($data): ApiEntitiesPersonalSnippetEntity` | Create an ApiEntitiesPersonalSnippet entity instance. |
| `ApiEntitiesPlanLimit` | `($data): ApiEntitiesPlanLimitEntity` | Create an ApiEntitiesPlanLimit entity instance. |
| `ApiEntitiesProject` | `($data): ApiEntitiesProjectEntity` | Create an ApiEntitiesProject entity instance. |
| `ApiEntitiesProjectDailyStatistic` | `($data): ApiEntitiesProjectDailyStatisticEntity` | Create an ApiEntitiesProjectDailyStatistic entity instance. |
| `ApiEntitiesProjectExportStatus` | `($data): ApiEntitiesProjectExportStatusEntity` | Create an ApiEntitiesProjectExportStatus entity instance. |
| `ApiEntitiesProjectGroupLink` | `($data): ApiEntitiesProjectGroupLinkEntity` | Create an ApiEntitiesProjectGroupLink entity instance. |
| `ApiEntitiesProjectHook` | `($data): ApiEntitiesProjectHookEntity` | Create an ApiEntitiesProjectHook entity instance. |
| `ApiEntitiesProjectImportStatus` | `($data): ApiEntitiesProjectImportStatusEntity` | Create an ApiEntitiesProjectImportStatus entity instance. |
| `ApiEntitiesProjectJobTokenScope` | `($data): ApiEntitiesProjectJobTokenScopeEntity` | Create an ApiEntitiesProjectJobTokenScope entity instance. |
| `ApiEntitiesProjectRepositoryStorage` | `($data): ApiEntitiesProjectRepositoryStorageEntity` | Create an ApiEntitiesProjectRepositoryStorage entity instance. |
| `ApiEntitiesProjectSnippet` | `($data): ApiEntitiesProjectSnippetEntity` | Create an ApiEntitiesProjectSnippet entity instance. |
| `ApiEntitiesProjectUpload` | `($data): ApiEntitiesProjectUploadEntity` | Create an ApiEntitiesProjectUpload entity instance. |
| `ApiEntitiesProjectWithAccess` | `($data): ApiEntitiesProjectWithAccessEntity` | Create an ApiEntitiesProjectWithAccess entity instance. |
| `ApiEntitiesProjectsContainerRegistryProtectionRule` | `($data): ApiEntitiesProjectsContainerRegistryProtectionRuleEntity` | Create an ApiEntitiesProjectsContainerRegistryProtectionRule entity instance. |
| `ApiEntitiesProjectsPackagesProtectionRule` | `($data): ApiEntitiesProjectsPackagesProtectionRuleEntity` | Create an ApiEntitiesProjectsPackagesProtectionRule entity instance. |
| `ApiEntitiesProjectsTopic` | `($data): ApiEntitiesProjectsTopicEntity` | Create an ApiEntitiesProjectsTopic entity instance. |
| `ApiEntitiesProtectedBranch` | `($data): ApiEntitiesProtectedBranchEntity` | Create an ApiEntitiesProtectedBranch entity instance. |
| `ApiEntitiesProtectedTag` | `($data): ApiEntitiesProtectedTagEntity` | Create an ApiEntitiesProtectedTag entity instance. |
| `ApiEntitiesPublicGroupDetail` | `($data): ApiEntitiesPublicGroupDetailEntity` | Create an ApiEntitiesPublicGroupDetail entity instance. |
| `ApiEntitiesRelatedIssue` | `($data): ApiEntitiesRelatedIssueEntity` | Create an ApiEntitiesRelatedIssue entity instance. |
| `ApiEntitiesRelationImportTracker` | `($data): ApiEntitiesRelationImportTrackerEntity` | Create an ApiEntitiesRelationImportTracker entity instance. |
| `ApiEntitiesRelease` | `($data): ApiEntitiesReleaseEntity` | Create an ApiEntitiesRelease entity instance. |
| `ApiEntitiesReleasesLink` | `($data): ApiEntitiesReleasesLinkEntity` | Create an ApiEntitiesReleasesLink entity instance. |
| `ApiEntitiesRemoteMirror` | `($data): ApiEntitiesRemoteMirrorEntity` | Create an ApiEntitiesRemoteMirror entity instance. |
| `ApiEntitiesRepositoryHealth` | `($data): ApiEntitiesRepositoryHealthEntity` | Create an ApiEntitiesRepositoryHealth entity instance. |
| `ApiEntitiesResourceAccessTokenWithToken` | `($data): ApiEntitiesResourceAccessTokenWithTokenEntity` | Create an ApiEntitiesResourceAccessTokenWithToken entity instance. |
| `ApiEntitiesResourceMilestoneEvent` | `($data): ApiEntitiesResourceMilestoneEventEntity` | Create an ApiEntitiesResourceMilestoneEvent entity instance. |
| `ApiEntitiesSnippet` | `($data): ApiEntitiesSnippetEntity` | Create an ApiEntitiesSnippet entity instance. |
| `ApiEntitiesSshKeyWithUser` | `($data): ApiEntitiesSshKeyWithUserEntity` | Create an ApiEntitiesSshKeyWithUser entity instance. |
| `ApiEntitiesSuggestion` | `($data): ApiEntitiesSuggestionEntity` | Create an ApiEntitiesSuggestion entity instance. |
| `ApiEntitiesSystemBroadcastMessage` | `($data): ApiEntitiesSystemBroadcastMessageEntity` | Create an ApiEntitiesSystemBroadcastMessage entity instance. |
| `ApiEntitiesTag` | `($data): ApiEntitiesTagEntity` | Create an ApiEntitiesTag entity instance. |
| `ApiEntitiesTagSignature` | `($data): ApiEntitiesTagSignatureEntity` | Create an ApiEntitiesTagSignature entity instance. |
| `ApiEntitiesTemplatesList` | `($data): ApiEntitiesTemplatesListEntity` | Create an ApiEntitiesTemplatesList entity instance. |
| `ApiEntitiesTerraformModuleVersion` | `($data): ApiEntitiesTerraformModuleVersionEntity` | Create an ApiEntitiesTerraformModuleVersion entity instance. |
| `ApiEntitiesTreeObject` | `($data): ApiEntitiesTreeObjectEntity` | Create an ApiEntitiesTreeObject entity instance. |
| `ApiEntitiesTrigger` | `($data): ApiEntitiesTriggerEntity` | Create an ApiEntitiesTrigger entity instance. |
| `ApiEntitiesUserAgentDetail` | `($data): ApiEntitiesUserAgentDetailEntity` | Create an ApiEntitiesUserAgentDetail entity instance. |
| `ApiEntitiesUserCount` | `($data): ApiEntitiesUserCountEntity` | Create an ApiEntitiesUserCount entity instance. |
| `ApiEntitiesUserPublic` | `($data): ApiEntitiesUserPublicEntity` | Create an ApiEntitiesUserPublic entity instance. |
| `ApiEntitiesUserWithAdmin` | `($data): ApiEntitiesUserWithAdminEntity` | Create an ApiEntitiesUserWithAdmin entity instance. |
| `ApiEntitiesWikiAttachment` | `($data): ApiEntitiesWikiAttachmentEntity` | Create an ApiEntitiesWikiAttachment entity instance. |
| `ApiEntitiesWikiPage` | `($data): ApiEntitiesWikiPageEntity` | Create an ApiEntitiesWikiPage entity instance. |
| `ApiEntitiesWikiPageBasic` | `($data): ApiEntitiesWikiPageBasicEntity` | Create an ApiEntitiesWikiPageBasic entity instance. |
| `Application` | `($data): ApplicationEntity` | Create an Application entity instance. |
| `AwardEmoji` | `($data): AwardEmojiEntity` | Create an AwardEmoji entity instance. |
| `Badge` | `($data): BadgeEntity` | Create a Badge entity instance. |
| `Branch` | `($data): BranchEntity` | Create a Branch entity instance. |
| `CargoPackage` | `($data): CargoPackageEntity` | Create a CargoPackage entity instance. |
| `CiVariable` | `($data): CiVariableEntity` | Create a CiVariable entity instance. |
| `Cluster` | `($data): ClusterEntity` | Create a Cluster entity instance. |
| `ClusterAgent` | `($data): ClusterAgentEntity` | Create a ClusterAgent entity instance. |
| `Composer` | `($data): ComposerEntity` | Create a Composer entity instance. |
| `ComposerPackage` | `($data): ComposerPackageEntity` | Create a ComposerPackage entity instance. |
| `Conan` | `($data): ConanEntity` | Create a Conan entity instance. |
| `ConanPackage` | `($data): ConanPackageEntity` | Create a ConanPackage entity instance. |
| `ContainerRegistry` | `($data): ContainerRegistryEntity` | Create a ContainerRegistry entity instance. |
| `ContainerRegistryEvent` | `($data): ContainerRegistryEventEntity` | Create a ContainerRegistryEvent entity instance. |
| `CustomAttribute` | `($data): CustomAttributeEntity` | Create a CustomAttribute entity instance. |
| `Debian` | `($data): DebianEntity` | Create a Debian entity instance. |
| `DebianDistribution` | `($data): DebianDistributionEntity` | Create a DebianDistribution entity instance. |
| `DebianPackage` | `($data): DebianPackageEntity` | Create a DebianPackage entity instance. |
| `DependencyProxy` | `($data): DependencyProxyEntity` | Create a DependencyProxy entity instance. |
| `DeployKey` | `($data): DeployKeyEntity` | Create a DeployKey entity instance. |
| `DeployToken` | `($data): DeployTokenEntity` | Create a DeployToken entity instance. |
| `Deployment` | `($data): DeploymentEntity` | Create a Deployment entity instance. |
| `EeApiEntitiesApprovalState` | `($data): EeApiEntitiesApprovalStateEntity` | Create an EeApiEntitiesApprovalState entity instance. |
| `EeApiEntitiesAuditEvent` | `($data): EeApiEntitiesAuditEventEntity` | Create an EeApiEntitiesAuditEvent entity instance. |
| `EeApiEntitiesBillableMembership` | `($data): EeApiEntitiesBillableMembershipEntity` | Create an EeApiEntitiesBillableMembership entity instance. |
| `EeApiEntitiesGeoNodeStatus` | `($data): EeApiEntitiesGeoNodeStatusEntity` | Create an EeApiEntitiesGeoNodeStatus entity instance. |
| `EeApiEntitiesGeoPipelineRef` | `($data): EeApiEntitiesGeoPipelineRefEntity` | Create an EeApiEntitiesGeoPipelineRef entity instance. |
| `EeApiEntitiesIssuableMetricImage` | `($data): EeApiEntitiesIssuableMetricImageEntity` | Create an EeApiEntitiesIssuableMetricImage entity instance. |
| `EeApiEntitiesMergeRequestApprovalState` | `($data): EeApiEntitiesMergeRequestApprovalStateEntity` | Create an EeApiEntitiesMergeRequestApprovalState entity instance. |
| `EeApiEntitiesSshCertificate` | `($data): EeApiEntitiesSshCertificateEntity` | Create an EeApiEntitiesSshCertificate entity instance. |
| `Environment` | `($data): EnvironmentEntity` | Create an Environment entity instance. |
| `ErrorTrackingClientKey` | `($data): ErrorTrackingClientKeyEntity` | Create an ErrorTrackingClientKey entity instance. |
| `Feature` | `($data): FeatureEntity` | Create a Feature entity instance. |
| `FeatureFlag` | `($data): FeatureFlagEntity` | Create a FeatureFlag entity instance. |
| `FeatureFlagsUserList` | `($data): FeatureFlagsUserListEntity` | Create a FeatureFlagsUserList entity instance. |
| `FreezePeriod` | `($data): FreezePeriodEntity` | Create a FreezePeriod entity instance. |
| `GenericPackage` | `($data): GenericPackageEntity` | Create a GenericPackage entity instance. |
| `Geo` | `($data): GeoEntity` | Create a Geo entity instance. |
| `GoProxy` | `($data): GoProxyEntity` | Create a GoProxy entity instance. |
| `Group` | `($data): GroupEntity` | Create a Group entity instance. |
| `GroupAvatar` | `($data): GroupAvatarEntity` | Create a GroupAvatar entity instance. |
| `GroupExport` | `($data): GroupExportEntity` | Create a GroupExport entity instance. |
| `GroupImport` | `($data): GroupImportEntity` | Create a GroupImport entity instance. |
| `HelmPackage` | `($data): HelmPackageEntity` | Create a HelmPackage entity instance. |
| `Hook` | `($data): HookEntity` | Create a Hook entity instance. |
| `Import` | `($data): ImportEntity` | Create an Import entity instance. |
| `Integration` | `($data): IntegrationEntity` | Create an Integration entity instance. |
| `Invitation` | `($data): InvitationEntity` | Create an Invitation entity instance. |
| `IssueLink` | `($data): IssueLinkEntity` | Create an IssueLink entity instance. |
| `IssuesStatistic` | `($data): IssuesStatisticEntity` | Create an IssuesStatistic entity instance. |
| `Job` | `($data): JobEntity` | Create a Job entity instance. |
| `MavenPackage` | `($data): MavenPackageEntity` | Create a MavenPackage entity instance. |
| `Member` | `($data): MemberEntity` | Create a Member entity instance. |
| `MergeRequest` | `($data): MergeRequestEntity` | Create a MergeRequest entity instance. |
| `Metadata` | `($data): MetadataEntity` | Create a Metadata entity instance. |
| `Migration` | `($data): MigrationEntity` | Create a Migration entity instance. |
| `MlModelRegistry` | `($data): MlModelRegistryEntity` | Create a MlModelRegistry entity instance. |
| `Namespace` | `($data): NamespaceEntity` | Create a Namespace entity instance. |
| `Npm` | `($data): NpmEntity` | Create a Npm entity instance. |
| `NpmPackage` | `($data): NpmPackageEntity` | Create a NpmPackage entity instance. |
| `Nuget` | `($data): NugetEntity` | Create a Nuget entity instance. |
| `NugetPackage` | `($data): NugetPackageEntity` | Create a NugetPackage entity instance. |
| `PackageFile` | `($data): PackageFileEntity` | Create a PackageFile entity instance. |
| `Page` | `($data): PageEntity` | Create a Page entity instance. |
| `Participant` | `($data): ParticipantEntity` | Create a Participant entity instance. |
| `PersonalAccessToken` | `($data): PersonalAccessTokenEntity` | Create a PersonalAccessToken entity instance. |
| `Project` | `($data): ProjectEntity` | Create a Project entity instance. |
| `ProjectAvatar` | `($data): ProjectAvatarEntity` | Create a ProjectAvatar entity instance. |
| `ProjectEntity` | `($data): ProjectEntityEntity` | Create a ProjectEntity entity instance. |
| `ProjectExport` | `($data): ProjectExportEntity` | Create a ProjectExport entity instance. |
| `ProjectHook` | `($data): ProjectHookEntity` | Create a ProjectHook entity instance. |
| `ProjectImport` | `($data): ProjectImportEntity` | Create a ProjectImport entity instance. |
| `ProjectImportEntity` | `($data): ProjectImportEntityEntity` | Create a ProjectImportEntity entity instance. |
| `ProjectPackage` | `($data): ProjectPackageEntity` | Create a ProjectPackage entity instance. |
| `ProjectSnippet` | `($data): ProjectSnippetEntity` | Create a ProjectSnippet entity instance. |
| `ProjectsJobTokenScope` | `($data): ProjectsJobTokenScopeEntity` | Create a ProjectsJobTokenScope entity instance. |
| `ProtectedTag` | `($data): ProtectedTagEntity` | Create a ProtectedTag entity instance. |
| `Pypi` | `($data): PypiEntity` | Create a Pypi entity instance. |
| `PypiPackage` | `($data): PypiPackageEntity` | Create a PypiPackage entity instance. |
| `Release` | `($data): ReleaseEntity` | Create a Release entity instance. |
| `ReleaseLink` | `($data): ReleaseLinkEntity` | Create a ReleaseLink entity instance. |
| `RemoteMirror` | `($data): RemoteMirrorEntity` | Create a RemoteMirror entity instance. |
| `Rpm` | `($data): RpmEntity` | Create a Rpm entity instance. |
| `RpmPackage` | `($data): RpmPackageEntity` | Create a RpmPackage entity instance. |
| `Rubygem` | `($data): RubygemEntity` | Create a Rubygem entity instance. |
| `RubygemPackage` | `($data): RubygemPackageEntity` | Create a RubygemPackage entity instance. |
| `Runner` | `($data): RunnerEntity` | Create a Runner entity instance. |
| `Search` | `($data): SearchEntity` | Create a Search entity instance. |
| `SecureFile` | `($data): SecureFileEntity` | Create a SecureFile entity instance. |
| `Slack` | `($data): SlackEntity` | Create a Slack entity instance. |
| `Snippet` | `($data): SnippetEntity` | Create a Snippet entity instance. |
| `Starrer` | `($data): StarrerEntity` | Create a Starrer entity instance. |
| `SystemHook` | `($data): SystemHookEntity` | Create a SystemHook entity instance. |
| `Tag` | `($data): TagEntity` | Create a Tag entity instance. |
| `TerraformRegistry` | `($data): TerraformRegistryEntity` | Create a TerraformRegistry entity instance. |
| `TerraformState` | `($data): TerraformStateEntity` | Create a TerraformState entity instance. |
| `TestReport` | `($data): TestReportEntity` | Create a TestReport entity instance. |
| `TestReportSummary` | `($data): TestReportSummaryEntity` | Create a TestReportSummary entity instance. |
| `Topic` | `($data): TopicEntity` | Create a Topic entity instance. |
| `UnleashApi` | `($data): UnleashApiEntity` | Create an UnleashApi entity instance. |
| `UsageData` | `($data): UsageDataEntity` | Create an UsageData entity instance. |
| `User` | `($data): UserEntity` | Create an User entity instance. |
| `WebCommit` | `($data): WebCommitEntity` | Create a WebCommit entity instance. |
| `Wiki` | `($data): WikiEntity` | Create a Wiki entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `($reqmatch, $ctrl): array` | Load a single entity by match criteria. |
| `list` | `(?array $reqmatch = null, $ctrl): array` | List entities matching the criteria (call with no argument to list all). |
| `create` | `($reqdata, $ctrl): array` | Create a new entity. |
| `update` | `($reqdata, $ctrl): array` | Update an existing entity. |
| `remove` | `($reqmatch, $ctrl): array` | Remove an entity. |
| `data_get` | `(): array` | Get entity data. |
| `data_set` | `($data): void` | Set entity data. |
| `match_get` | `(): array` | Get entity match criteria. |
| `match_set` | `($match): void` | Set entity match criteria. |
| `make` | `(): Entity` | Create a new instance with the same options. |
| `get_name` | `(): string` | Return the entity name. |

### Result shape

Entity operations return the bare result data (an `array` for single-entity
ops, a `list` for `list`) and throw on error. Wrap calls in
`try`/`catch` to handle failures.

The `direct()` escape hatch never throws — it returns a result `array`
you branch on via `$result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `true` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `array` | Response headers. |
| `data` | `mixed` | Parsed JSON response body. |

On error, `ok` is `false` and `$err` contains the error value.

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

Create an instance: `$access_request = $client->AccessRequest();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### AlertManagement

Create an instance: `$alert_management = $client->AlertManagement();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |

#### Example: Create

```php
$alert_management = $client->AlertManagement()->create([
    "alert_management_alert_id" => null, // string
    "project_id" => null, // string
]);
```


### ApiEntitiesAccessRequester

Create an instance: `$api_entities_access_requester = $client->ApiEntitiesAccessRequester();`

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
| `custom_attribute` | `array` |  |
| `id` | `int` |  |
| `key` | `string` |  |
| `locked` | `bool` |  |
| `name` | `string` |  |
| `public_email` | `string` |  |
| `requested_at` | `string` |  |
| `state` | `string` |  |
| `username` | `string` |  |
| `value` | `string` |  |
| `web_url` | `string` |  |

#### Example: List

```php
// list() returns an array of ApiEntitiesAccessRequester records (throws on error).
$api_entities_access_requesters = $client->ApiEntitiesAccessRequester()->list();
```

#### Example: Create

```php
$api_entities_access_requester = $client->ApiEntitiesAccessRequester()->create([
]);
```


### ApiEntitiesAppearance

Create an instance: `$api_entities_appearance = $client->ApiEntitiesAppearance();`

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

```php
// load() returns the bare ApiEntitiesAppearance record (throws on error).
$api_entities_appearance = $client->ApiEntitiesAppearance()->load();
```


### ApiEntitiesApplication

Create an instance: `$api_entities_application = $client->ApiEntitiesApplication();`

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
| `confidential` | `bool` |  |
| `id` | `string` |  |

#### Example: List

```php
// list() returns an array of ApiEntitiesApplication records (throws on error).
$api_entities_applications = $client->ApiEntitiesApplication()->list();
```


### ApiEntitiesApplicationStatistic

Create an instance: `$api_entities_application_statistic = $client->ApiEntitiesApplicationStatistic();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active_user` | `int` |  |
| `fork` | `int` |  |
| `group` | `int` |  |
| `issue` | `int` |  |
| `merge_request` | `int` |  |
| `milestone` | `int` |  |
| `note` | `int` |  |
| `project` | `int` |  |
| `snippet` | `int` |  |
| `ssh_key` | `int` |  |
| `user` | `int` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesApplicationStatistic record (throws on error).
$api_entities_application_statistic = $client->ApiEntitiesApplicationStatistic()->load();
```


### ApiEntitiesApplicationWithSecret

Create an instance: `$api_entities_application_with_secret = $client->ApiEntitiesApplicationWithSecret();`

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
| `confidential` | `bool` |  |
| `id` | `string` |  |
| `secret` | `string` |  |

#### Example: Create

```php
$api_entities_application_with_secret = $client->ApiEntitiesApplicationWithSecret()->create([
]);
```


### ApiEntitiesAvatar

Create an instance: `$api_entities_avatar = $client->ApiEntitiesAvatar();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_url` | `string` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesAvatar record (throws on error).
$api_entities_avatar = $client->ApiEntitiesAvatar()->load();
```


### ApiEntitiesAwardEmoji

Create an instance: `$api_entities_award_emoji = $client->ApiEntitiesAwardEmoji();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `awardable_id` | `int` |  |
| `awardable_type` | `string` |  |
| `created_at` | `string` |  |
| `id` | `int` |  |
| `name` | `string` |  |
| `updated_at` | `string` |  |
| `url` | `string` |  |
| `user` | `array` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesAwardEmoji record (throws on error).
$api_entities_award_emoji = $client->ApiEntitiesAwardEmoji()->load(["id" => "api_entities_award_emoji_id"]);
```

#### Example: List

```php
// list() returns an array of ApiEntitiesAwardEmoji records (throws on error).
$api_entities_award_emojis = $client->ApiEntitiesAwardEmoji()->list();
```

#### Example: Create

```php
$api_entities_award_emoji = $client->ApiEntitiesAwardEmoji()->create([
]);
```


### ApiEntitiesBadge

Create an instance: `$api_entities_badge = $client->ApiEntitiesBadge();`

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

```php
// load() returns the bare ApiEntitiesBadge record (throws on error).
$api_entities_badge = $client->ApiEntitiesBadge()->load(["id" => "api_entities_badge_id"]);
```

#### Example: List

```php
// list() returns an array of ApiEntitiesBadge records (throws on error).
$api_entities_badges = $client->ApiEntitiesBadge()->list();
```

#### Example: Create

```php
$api_entities_badge = $client->ApiEntitiesBadge()->create([
]);
```


### ApiEntitiesBasicBadgeDetail

Create an instance: `$api_entities_basic_badge_detail = $client->ApiEntitiesBasicBadgeDetail();`

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

```php
// load() returns the bare ApiEntitiesBasicBadgeDetail record (throws on error).
$api_entities_basic_badge_detail = $client->ApiEntitiesBasicBadgeDetail()->load();
```


### ApiEntitiesBasicGroupDetail

Create an instance: `$api_entities_basic_group_detail = $client->ApiEntitiesBasicGroupDetail();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```php
$api_entities_basic_group_detail = $client->ApiEntitiesBasicGroupDetail()->create([
    "project_id" => null, // string
]);
```


### ApiEntitiesBasicProjectDetail

Create an instance: `$api_entities_basic_project_detail = $client->ApiEntitiesBasicProjectDetail();`

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
| `custom_attribute` | `array` |  |
| `default_branch` | `string` |  |
| `description` | `string` |  |
| `forks_count` | `int` |  |
| `http_url_to_repo` | `string` |  |
| `id` | `int` |  |
| `last_activity_at` | `string` |  |
| `license` | `array` |  |
| `license_url` | `string` |  |
| `name` | `string` |  |
| `name_with_namespace` | `string` |  |
| `namespace` | `array` |  |
| `path` | `string` |  |
| `path_with_namespace` | `string` |  |
| `readme_url` | `string` |  |
| `repository_storage` | `string` |  |
| `ssh_url_to_repo` | `string` |  |
| `star_count` | `int` |  |
| `tag_list` | `array` |  |
| `topic` | `array` |  |
| `visibility` | `string` |  |
| `web_url` | `string` |  |

#### Example: List

```php
// list() returns an array of ApiEntitiesBasicProjectDetail records (throws on error).
$api_entities_basic_project_details = $client->ApiEntitiesBasicProjectDetail()->list();
```

#### Example: Create

```php
$api_entities_basic_project_detail = $client->ApiEntitiesBasicProjectDetail()->create([
    "project_id" => null, // string
]);
```


### ApiEntitiesBasicRef

Create an instance: `$api_entities_basic_ref = $client->ApiEntitiesBasicRef();`

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

```php
// list() returns an array of ApiEntitiesBasicRef records (throws on error).
$api_entities_basic_refs = $client->ApiEntitiesBasicRef()->list();
```


### ApiEntitiesBasicSuccess

Create an instance: `$api_entities_basic_success = $client->ApiEntitiesBasicSuccess();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```php
$api_entities_basic_success = $client->ApiEntitiesBasicSuccess()->create([
]);
```


### ApiEntitiesBatchedBackgroundMigration

Create an instance: `$api_entities_batched_background_migration = $client->ApiEntitiesBatchedBackgroundMigration();`

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
| `progress` | `float` |  |
| `status` | `string` |  |
| `table_name` | `string` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesBatchedBackgroundMigration record (throws on error).
$api_entities_batched_background_migration = $client->ApiEntitiesBatchedBackgroundMigration()->load(["id" => "api_entities_batched_background_migration_id"]);
```

#### Example: List

```php
// list() returns an array of ApiEntitiesBatchedBackgroundMigration records (throws on error).
$api_entities_batched_background_migrations = $client->ApiEntitiesBatchedBackgroundMigration()->list();
```


### ApiEntitiesBranch

Create an instance: `$api_entities_branch = $client->ApiEntitiesBranch();`

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
| `can_push` | `bool` |  |
| `commit` | `array` |  |
| `default` | `bool` |  |
| `developers_can_merge` | `bool` |  |
| `developers_can_push` | `bool` |  |
| `merged` | `bool` |  |
| `name` | `string` |  |
| `protected` | `bool` |  |
| `web_url` | `string` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesBranch record (throws on error).
$api_entities_branch = $client->ApiEntitiesBranch()->load(["id" => "api_entities_branch_id", "project_id" => "project_id"]);
```

#### Example: List

```php
// list() returns an array of ApiEntitiesBranch records (throws on error).
$api_entities_branchs = $client->ApiEntitiesBranch()->list();
```

#### Example: Create

```php
$api_entities_branch = $client->ApiEntitiesBranch()->create([
    "project_id" => null, // string
]);
```


### ApiEntitiesBulkImport

Create an instance: `$api_entities_bulk_import = $client->ApiEntitiesBulkImport();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `bulk_import_id` | `int` |  |
| `created_at` | `string` |  |
| `destination_full_path` | `string` |  |
| `destination_name` | `string` |  |
| `destination_namespace` | `string` |  |
| `destination_slug` | `string` |  |
| `entity_type` | `string` |  |
| `failure` | `array` |  |
| `has_failure` | `bool` |  |
| `id` | `int` |  |
| `migrate_membership` | `bool` |  |
| `migrate_project` | `bool` |  |
| `namespace_id` | `int` |  |
| `parent_id` | `int` |  |
| `project_id` | `int` |  |
| `source_full_path` | `string` |  |
| `source_type` | `string` |  |
| `source_url` | `string` |  |
| `stat` | `array` |  |
| `status` | `string` |  |
| `updated_at` | `string` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesBulkImport record (throws on error).
$api_entities_bulk_import = $client->ApiEntitiesBulkImport()->load(["id" => "api_entities_bulk_import_id"]);
```

#### Example: List

```php
// list() returns an array of ApiEntitiesBulkImport records (throws on error).
$api_entities_bulk_imports = $client->ApiEntitiesBulkImport()->list();
```

#### Example: Create

```php
$api_entities_bulk_import = $client->ApiEntitiesBulkImport()->create([
]);
```


### ApiEntitiesBulkImportsEntityFailure

Create an instance: `$api_entities_bulk_imports_entity_failure = $client->ApiEntitiesBulkImportsEntityFailure();`

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

```php
// load() returns the bare ApiEntitiesBulkImportsEntityFailure record (throws on error).
$api_entities_bulk_imports_entity_failure = $client->ApiEntitiesBulkImportsEntityFailure()->load(["bulk_import_id" => "bulk_import_id", "entity_id" => "entity_id"]);
```


### ApiEntitiesBulkImportsExportStatus

Create an instance: `$api_entities_bulk_imports_export_status = $client->ApiEntitiesBulkImportsExportStatus();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `batch` | `array` |  |
| `batched` | `bool` |  |
| `batches_count` | `int` |  |
| `error` | `string` |  |
| `relation` | `string` |  |
| `status` | `string` |  |
| `total_objects_count` | `int` |  |
| `updated_at` | `string` |  |

#### Example: List

```php
// list() returns an array of ApiEntitiesBulkImportsExportStatus records (throws on error).
$api_entities_bulk_imports_export_statuss = $client->ApiEntitiesBulkImportsExportStatus()->list();
```


### ApiEntitiesChangelog

Create an instance: `$api_entities_changelog = $client->ApiEntitiesChangelog();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `note` | `string` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesChangelog record (throws on error).
$api_entities_changelog = $client->ApiEntitiesChangelog()->load(["project_id" => "project_id"]);
```


### ApiEntitiesCiBridge

Create an instance: `$api_entities_ci_bridge = $client->ApiEntitiesCiBridge();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_failure` | `bool` |  |
| `commit` | `array` |  |
| `coverage` | `float` |  |
| `created_at` | `string` |  |
| `downstream_pipeline` | `array` |  |
| `duration` | `float` |  |
| `erased_at` | `string` |  |
| `failure_reason` | `string` |  |
| `finished_at` | `string` |  |
| `id` | `int` |  |
| `name` | `string` |  |
| `pipeline` | `array` |  |
| `project` | `array` |  |
| `queued_duration` | `float` |  |
| `ref` | `string` |  |
| `stage` | `string` |  |
| `started_at` | `string` |  |
| `status` | `string` |  |
| `tag` | `bool` |  |
| `user` | `array` |  |
| `web_url` | `string` |  |

#### Example: List

```php
// list() returns an array of ApiEntitiesCiBridge records (throws on error).
$api_entities_ci_bridges = $client->ApiEntitiesCiBridge()->list();
```


### ApiEntitiesCiCatalogResourcesVersion

Create an instance: `$api_entities_ci_catalog_resources_version = $client->ApiEntitiesCiCatalogResourcesVersion();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```php
$api_entities_ci_catalog_resources_version = $client->ApiEntitiesCiCatalogResourcesVersion()->create([
    "project_id" => null, // string
]);
```


### ApiEntitiesCiJob

Create an instance: `$api_entities_ci_job = $client->ApiEntitiesCiJob();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_failure` | `bool` |  |
| `archived` | `bool` |  |
| `artifact` | `array` |  |
| `artifacts_expire_at` | `string` |  |
| `artifacts_file` | `array` |  |
| `commit` | `array` |  |
| `coverage` | `float` |  |
| `created_at` | `string` |  |
| `duration` | `float` |  |
| `erased_at` | `string` |  |
| `failure_reason` | `string` |  |
| `file_format` | `string` |  |
| `file_type` | `string` |  |
| `filename` | `string` |  |
| `finished_at` | `string` |  |
| `id` | `int` |  |
| `name` | `string` |  |
| `pipeline` | `array` |  |
| `project` | `array` |  |
| `queued_duration` | `float` |  |
| `ref` | `string` |  |
| `runner` | `array` |  |
| `runner_manager` | `array` |  |
| `size` | `int` |  |
| `stage` | `string` |  |
| `started_at` | `string` |  |
| `status` | `string` |  |
| `tag` | `bool` |  |
| `tag_list` | `array` |  |
| `user` | `array` |  |
| `web_url` | `string` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesCiJob record (throws on error).
$api_entities_ci_job = $client->ApiEntitiesCiJob()->load(["id" => "api_entities_ci_job_id", "project_id" => "project_id"]);
```

#### Example: List

```php
// list() returns an array of ApiEntitiesCiJob records (throws on error).
$api_entities_ci_jobs = $client->ApiEntitiesCiJob()->list();
```

#### Example: Create

```php
$api_entities_ci_job = $client->ApiEntitiesCiJob()->create([
    "job_id" => null, // string
    "project_id" => null, // string
]);
```


### ApiEntitiesCiJobBasic

Create an instance: `$api_entities_ci_job_basic = $client->ApiEntitiesCiJobBasic();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_failure` | `bool` |  |
| `commit` | `array` |  |
| `coverage` | `float` |  |
| `created_at` | `string` |  |
| `duration` | `float` |  |
| `erased_at` | `string` |  |
| `failure_reason` | `string` |  |
| `finished_at` | `string` |  |
| `id` | `int` |  |
| `name` | `string` |  |
| `pipeline` | `array` |  |
| `project` | `array` |  |
| `queued_duration` | `float` |  |
| `ref` | `string` |  |
| `stage` | `string` |  |
| `started_at` | `string` |  |
| `status` | `string` |  |
| `tag` | `bool` |  |
| `user` | `array` |  |
| `web_url` | `string` |  |

#### Example: List

```php
// list() returns an array of ApiEntitiesCiJobBasic records (throws on error).
$api_entities_ci_job_basics = $client->ApiEntitiesCiJobBasic()->list();
```

#### Example: Create

```php
$api_entities_ci_job_basic = $client->ApiEntitiesCiJobBasic()->create([
    "job_id" => null, // string
    "project_id" => null, // string
]);
```


### ApiEntitiesCiJobBasicWithProject

Create an instance: `$api_entities_ci_job_basic_with_project = $client->ApiEntitiesCiJobBasicWithProject();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_failure` | `bool` |  |
| `commit` | `array` |  |
| `coverage` | `float` |  |
| `created_at` | `string` |  |
| `duration` | `float` |  |
| `erased_at` | `string` |  |
| `failure_reason` | `string` |  |
| `finished_at` | `string` |  |
| `id` | `int` |  |
| `name` | `string` |  |
| `pipeline` | `array` |  |
| `project` | `array` |  |
| `queued_duration` | `float` |  |
| `ref` | `string` |  |
| `stage` | `string` |  |
| `started_at` | `string` |  |
| `status` | `string` |  |
| `tag` | `bool` |  |
| `user` | `array` |  |
| `web_url` | `string` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesCiJobBasicWithProject record (throws on error).
$api_entities_ci_job_basic_with_project = $client->ApiEntitiesCiJobBasicWithProject()->load(["runner_id" => "runner_id"]);
```


### ApiEntitiesCiLintResult

Create an instance: `$api_entities_ci_lint_result = $client->ApiEntitiesCiLintResult();`

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
| `error` | `array` |  |
| `extra` | `array` |  |
| `include` | `array` |  |
| `job` | `array` |  |
| `location` | `string` |  |
| `merged_yaml` | `string` |  |
| `raw` | `string` |  |
| `type` | `string` |  |
| `valid` | `bool` |  |
| `warning` | `array` |  |

#### Example: List

```php
// list() returns an array of ApiEntitiesCiLintResult records (throws on error).
$api_entities_ci_lint_results = $client->ApiEntitiesCiLintResult()->list();
```

#### Example: Create

```php
$api_entities_ci_lint_result = $client->ApiEntitiesCiLintResult()->create([
    "project_id" => null, // string
]);
```


### ApiEntitiesCiPipeline

Create an instance: `$api_entities_ci_pipeline = $client->ApiEntitiesCiPipeline();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```php
$api_entities_ci_pipeline = $client->ApiEntitiesCiPipeline()->create([
    "project_id" => null, // string
]);
```


### ApiEntitiesCiPipelineBasic

Create an instance: `$api_entities_ci_pipeline_basic = $client->ApiEntitiesCiPipelineBasic();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `id` | `int` |  |
| `iid` | `int` |  |
| `project_id` | `int` |  |
| `ref` | `string` |  |
| `sha` | `string` |  |
| `source` | `string` |  |
| `status` | `string` |  |
| `updated_at` | `string` |  |
| `web_url` | `string` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesCiPipelineBasic record (throws on error).
$api_entities_ci_pipeline_basic = $client->ApiEntitiesCiPipelineBasic()->load(["merge_request_id" => "merge_request_id", "project_id" => "project_id"]);
```

#### Example: List

```php
// list() returns an array of ApiEntitiesCiPipelineBasic records (throws on error).
$api_entities_ci_pipeline_basics = $client->ApiEntitiesCiPipelineBasic()->list();
```


### ApiEntitiesCiPipelineSchedule

Create an instance: `$api_entities_ci_pipeline_schedule = $client->ApiEntitiesCiPipelineSchedule();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` |  |
| `created_at` | `string` |  |
| `cron` | `string` |  |
| `cron_timezone` | `string` |  |
| `description` | `string` |  |
| `id` | `int` |  |
| `input` | `array` |  |
| `next_run_at` | `string` |  |
| `owner` | `array` |  |
| `ref` | `string` |  |
| `updated_at` | `string` |  |

#### Example: List

```php
// list() returns an array of ApiEntitiesCiPipelineSchedule records (throws on error).
$api_entities_ci_pipeline_schedules = $client->ApiEntitiesCiPipelineSchedule()->list();
```


### ApiEntitiesCiPipelineScheduleDetail

Create an instance: `$api_entities_ci_pipeline_schedule_detail = $client->ApiEntitiesCiPipelineScheduleDetail();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` |  |
| `created_at` | `string` |  |
| `cron` | `string` |  |
| `cron_timezone` | `string` |  |
| `description` | `string` |  |
| `id` | `int` |  |
| `input` | `array` |  |
| `last_pipeline` | `array` |  |
| `next_run_at` | `string` |  |
| `owner` | `array` |  |
| `ref` | `string` |  |
| `updated_at` | `string` |  |
| `variable` | `array` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesCiPipelineScheduleDetail record (throws on error).
$api_entities_ci_pipeline_schedule_detail = $client->ApiEntitiesCiPipelineScheduleDetail()->load(["pipeline_schedule_id" => "pipeline_schedule_id", "project_id" => "project_id"]);
```

#### Example: Create

```php
$api_entities_ci_pipeline_schedule_detail = $client->ApiEntitiesCiPipelineScheduleDetail()->create([
    "project_id" => null, // string
]);
```


### ApiEntitiesCiResetTokenResult

Create an instance: `$api_entities_ci_reset_token_result = $client->ApiEntitiesCiResetTokenResult();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```php
$api_entities_ci_reset_token_result = $client->ApiEntitiesCiResetTokenResult()->create([
]);
```


### ApiEntitiesCiResourceGroup

Create an instance: `$api_entities_ci_resource_group = $client->ApiEntitiesCiResourceGroup();`

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
| `id` | `int` |  |
| `key` | `string` |  |
| `process_mode` | `string` |  |
| `updated_at` | `string` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesCiResourceGroup record (throws on error).
$api_entities_ci_resource_group = $client->ApiEntitiesCiResourceGroup()->load(["id" => "api_entities_ci_resource_group_id", "project_id" => "project_id"]);
```

#### Example: List

```php
// list() returns an array of ApiEntitiesCiResourceGroup records (throws on error).
$api_entities_ci_resource_groups = $client->ApiEntitiesCiResourceGroup()->list();
```


### ApiEntitiesCiRunner

Create an instance: `$api_entities_ci_runner = $client->ApiEntitiesCiRunner();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` |  |
| `created_at` | `string` |  |
| `created_by` | `array` |  |
| `description` | `string` |  |
| `id` | `int` |  |
| `ip_address` | `string` |  |
| `is_shared` | `bool` |  |
| `job_execution_status` | `string` |  |
| `name` | `string` |  |
| `online` | `bool` |  |
| `paused` | `bool` |  |
| `runner_type` | `string` |  |
| `status` | `string` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesCiRunner record (throws on error).
$api_entities_ci_runner = $client->ApiEntitiesCiRunner()->load();
```

#### Example: Create

```php
$api_entities_ci_runner = $client->ApiEntitiesCiRunner()->create([
    "project_id" => null, // string
]);
```


### ApiEntitiesCiRunnerDetail

Create an instance: `$api_entities_ci_runner_detail = $client->ApiEntitiesCiRunnerDetail();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `access_level` | `string` |  |
| `active` | `bool` |  |
| `architecture` | `string` |  |
| `contacted_at` | `string` |  |
| `created_at` | `string` |  |
| `created_by` | `array` |  |
| `description` | `string` |  |
| `group` | `array` |  |
| `id` | `int` |  |
| `ip_address` | `string` |  |
| `is_shared` | `bool` |  |
| `job_execution_status` | `string` |  |
| `locked` | `bool` |  |
| `maintenance_note` | `string` |  |
| `maximum_timeout` | `string` |  |
| `name` | `string` |  |
| `online` | `bool` |  |
| `paused` | `bool` |  |
| `platform` | `string` |  |
| `project` | `array` |  |
| `revision` | `string` |  |
| `run_untagged` | `string` |  |
| `runner_type` | `string` |  |
| `status` | `string` |  |
| `tag_list` | `string` |  |
| `version` | `string` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesCiRunnerDetail record (throws on error).
$api_entities_ci_runner_detail = $client->ApiEntitiesCiRunnerDetail()->load(["id" => "api_entities_ci_runner_detail_id"]);
```


### ApiEntitiesCiRunnerManager

Create an instance: `$api_entities_ci_runner_manager = $client->ApiEntitiesCiRunnerManager();`

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
| `id` | `int` |  |
| `ip_address` | `string` |  |
| `job_execution_status` | `string` |  |
| `platform` | `string` |  |
| `revision` | `string` |  |
| `status` | `string` |  |
| `system_id` | `string` |  |
| `version` | `string` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesCiRunnerManager record (throws on error).
$api_entities_ci_runner_manager = $client->ApiEntitiesCiRunnerManager()->load(["runner_id" => "runner_id"]);
```


### ApiEntitiesCiRunnerRegistrationDetail

Create an instance: `$api_entities_ci_runner_registration_detail = $client->ApiEntitiesCiRunnerRegistrationDetail();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```php
$api_entities_ci_runner_registration_detail = $client->ApiEntitiesCiRunnerRegistrationDetail()->create([
]);
```


### ApiEntitiesCiSecureFile

Create an instance: `$api_entities_ci_secure_file = $client->ApiEntitiesCiSecureFile();`

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
| `id` | `int` |  |
| `metadata` | `array` |  |
| `name` | `string` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesCiSecureFile record (throws on error).
$api_entities_ci_secure_file = $client->ApiEntitiesCiSecureFile()->load(["id" => "api_entities_ci_secure_file_id", "project_id" => "project_id"]);
```

#### Example: Create

```php
$api_entities_ci_secure_file = $client->ApiEntitiesCiSecureFile()->create([
    "project_id" => null, // string
]);
```


### ApiEntitiesCiVariable

Create an instance: `$api_entities_ci_variable = $client->ApiEntitiesCiVariable();`

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
| `hidden` | `bool` |  |
| `key` | `string` |  |
| `masked` | `bool` |  |
| `protected` | `bool` |  |
| `raw` | `bool` |  |
| `value` | `string` |  |
| `variable_type` | `string` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesCiVariable record (throws on error).
$api_entities_ci_variable = $client->ApiEntitiesCiVariable()->load(["id" => "api_entities_ci_variable_id"]);
```

#### Example: List

```php
// list() returns an array of ApiEntitiesCiVariable records (throws on error).
$api_entities_ci_variables = $client->ApiEntitiesCiVariable()->list();
```

#### Example: Create

```php
$api_entities_ci_variable = $client->ApiEntitiesCiVariable()->create([
]);
```


### ApiEntitiesCluster

Create an instance: `$api_entities_cluster = $client->ApiEntitiesCluster();`

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
| `enabled` | `bool` |  |
| `environment_scope` | `string` |  |
| `id` | `string` |  |
| `managed` | `string` |  |
| `management_project` | `array` |  |
| `name` | `string` |  |
| `namespace_per_environment` | `string` |  |
| `platform_kubernete` | `array` |  |
| `platform_type` | `string` |  |
| `provider_gcp` | `array` |  |
| `provider_type` | `string` |  |
| `user` | `array` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesCluster record (throws on error).
$api_entities_cluster = $client->ApiEntitiesCluster()->load(["id" => "api_entities_cluster_id"]);
```

#### Example: List

```php
// list() returns an array of ApiEntitiesCluster records (throws on error).
$api_entities_clusters = $client->ApiEntitiesCluster()->list();
```

#### Example: Create

```php
$api_entities_cluster = $client->ApiEntitiesCluster()->create([
]);
```


### ApiEntitiesClusterGroup

Create an instance: `$api_entities_cluster_group = $client->ApiEntitiesClusterGroup();`

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
| `enabled` | `bool` |  |
| `environment_scope` | `string` |  |
| `group` | `array` |  |
| `id` | `string` |  |
| `managed` | `string` |  |
| `management_project` | `array` |  |
| `name` | `string` |  |
| `namespace_per_environment` | `string` |  |
| `platform_kubernete` | `array` |  |
| `platform_type` | `string` |  |
| `provider_gcp` | `array` |  |
| `provider_type` | `string` |  |
| `user` | `array` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesClusterGroup record (throws on error).
$api_entities_cluster_group = $client->ApiEntitiesClusterGroup()->load(["cluster_id" => "cluster_id", "group_id" => "group_id"]);
```

#### Example: Create

```php
$api_entities_cluster_group = $client->ApiEntitiesClusterGroup()->create([
    "group_id" => null, // string
]);
```


### ApiEntitiesClusterProject

Create an instance: `$api_entities_cluster_project = $client->ApiEntitiesClusterProject();`

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
| `enabled` | `bool` |  |
| `environment_scope` | `string` |  |
| `id` | `string` |  |
| `managed` | `string` |  |
| `management_project` | `array` |  |
| `name` | `string` |  |
| `namespace_per_environment` | `string` |  |
| `platform_kubernete` | `array` |  |
| `platform_type` | `string` |  |
| `project` | `array` |  |
| `provider_gcp` | `array` |  |
| `provider_type` | `string` |  |
| `user` | `array` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesClusterProject record (throws on error).
$api_entities_cluster_project = $client->ApiEntitiesClusterProject()->load(["cluster_id" => "cluster_id", "project_id" => "project_id"]);
```

#### Example: Create

```php
$api_entities_cluster_project = $client->ApiEntitiesClusterProject()->create([
    "project_id" => null, // string
]);
```


### ApiEntitiesClustersAgent

Create an instance: `$api_entities_clusters_agent = $client->ApiEntitiesClustersAgent();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `config_project` | `array` |  |
| `created_at` | `string` |  |
| `created_by_user_id` | `string` |  |
| `id` | `string` |  |
| `is_receptive` | `bool` |  |
| `name` | `string` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesClustersAgent record (throws on error).
$api_entities_clusters_agent = $client->ApiEntitiesClustersAgent()->load(["project_id" => "project_id"]);
```

#### Example: Create

```php
$api_entities_clusters_agent = $client->ApiEntitiesClustersAgent()->create([
    "project_id" => null, // string
]);
```


### ApiEntitiesClustersAgentToken

Create an instance: `$api_entities_clusters_agent_token = $client->ApiEntitiesClustersAgentToken();`

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

```php
// load() returns the bare ApiEntitiesClustersAgentToken record (throws on error).
$api_entities_clusters_agent_token = $client->ApiEntitiesClustersAgentToken()->load(["id" => "api_entities_clusters_agent_token_id", "cluster_agent_id" => "cluster_agent_id", "project_id" => "project_id"]);
```


### ApiEntitiesClustersAgentTokenBasic

Create an instance: `$api_entities_clusters_agent_token_basic = $client->ApiEntitiesClustersAgentTokenBasic();`

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

```php
// load() returns the bare ApiEntitiesClustersAgentTokenBasic record (throws on error).
$api_entities_clusters_agent_token_basic = $client->ApiEntitiesClustersAgentTokenBasic()->load(["cluster_agent_id" => "cluster_agent_id", "project_id" => "project_id"]);
```


### ApiEntitiesClustersAgentTokenWithToken

Create an instance: `$api_entities_clusters_agent_token_with_token = $client->ApiEntitiesClustersAgentTokenWithToken();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```php
$api_entities_clusters_agent_token_with_token = $client->ApiEntitiesClustersAgentTokenWithToken()->create([
    "cluster_agent_id" => null, // string
    "project_id" => null, // string
]);
```


### ApiEntitiesCommit

Create an instance: `$api_entities_commit = $client->ApiEntitiesCommit();`

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
| `extended_trailer` | `array` |  |
| `id` | `string` |  |
| `message` | `string` |  |
| `parent_id` | `array` |  |
| `short_id` | `string` |  |
| `title` | `string` |  |
| `trailer` | `array` |  |
| `web_url` | `string` |  |

#### Example: List

```php
// list() returns an array of ApiEntitiesCommit records (throws on error).
$api_entities_commits = $client->ApiEntitiesCommit()->list();
```

#### Example: Create

```php
$api_entities_commit = $client->ApiEntitiesCommit()->create([
    "project_id" => null, // string
]);
```


### ApiEntitiesCommitDetail

Create an instance: `$api_entities_commit_detail = $client->ApiEntitiesCommitDetail();`

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
| `extended_trailer` | `array` |  |
| `id` | `string` |  |
| `last_pipeline` | `array` |  |
| `message` | `string` |  |
| `parent_id` | `array` |  |
| `project_id` | `int` |  |
| `short_id` | `string` |  |
| `stat` | `array` |  |
| `status` | `string` |  |
| `title` | `string` |  |
| `trailer` | `array` |  |
| `web_url` | `string` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesCommitDetail record (throws on error).
$api_entities_commit_detail = $client->ApiEntitiesCommitDetail()->load(["project_id" => "project_id", "sha" => "sha"]);
```

#### Example: Create

```php
$api_entities_commit_detail = $client->ApiEntitiesCommitDetail()->create([
    "project_id" => null, // string
]);
```


### ApiEntitiesCommitNote

Create an instance: `$api_entities_commit_note = $client->ApiEntitiesCommitNote();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author` | `array` |  |
| `created_at` | `string` |  |
| `line` | `int` |  |
| `line_type` | `string` |  |
| `note` | `string` |  |
| `path` | `string` |  |

#### Example: List

```php
// list() returns an array of ApiEntitiesCommitNote records (throws on error).
$api_entities_commit_notes = $client->ApiEntitiesCommitNote()->list();
```

#### Example: Create

```php
$api_entities_commit_note = $client->ApiEntitiesCommitNote()->create([
    "project_id" => null, // string
    "sha" => null, // mixed
]);
```


### ApiEntitiesCommitSequence

Create an instance: `$api_entities_commit_sequence = $client->ApiEntitiesCommitSequence();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `count` | `int` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesCommitSequence record (throws on error).
$api_entities_commit_sequence = $client->ApiEntitiesCommitSequence()->load(["project_id" => "project_id", "sha" => "sha"]);
```


### ApiEntitiesCommitSignature

Create an instance: `$api_entities_commit_signature = $client->ApiEntitiesCommitSignature();`

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

```php
// load() returns the bare ApiEntitiesCommitSignature record (throws on error).
$api_entities_commit_signature = $client->ApiEntitiesCommitSignature()->load(["project_id" => "project_id", "sha" => "sha"]);
```


### ApiEntitiesCommitStatus

Create an instance: `$api_entities_commit_status = $client->ApiEntitiesCommitStatus();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_failure` | `bool` |  |
| `author` | `array` |  |
| `coverage` | `float` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `finished_at` | `string` |  |
| `id` | `int` |  |
| `name` | `string` |  |
| `pipeline_id` | `int` |  |
| `ref` | `string` |  |
| `sha` | `string` |  |
| `started_at` | `string` |  |
| `status` | `string` |  |
| `target_url` | `string` |  |

#### Example: List

```php
// list() returns an array of ApiEntitiesCommitStatus records (throws on error).
$api_entities_commit_statuss = $client->ApiEntitiesCommitStatus()->list();
```

#### Example: Create

```php
$api_entities_commit_status = $client->ApiEntitiesCommitStatus()->create([
    "id" => null, // string
    "project_id" => null, // string
]);
```


### ApiEntitiesCompare

Create an instance: `$api_entities_compare = $client->ApiEntitiesCompare();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `commit` | `array` |  |
| `compare_same_ref` | `bool` |  |
| `compare_timeout` | `bool` |  |
| `diff` | `array` |  |
| `web_url` | `string` |  |

#### Example: List

```php
// list() returns an array of ApiEntitiesCompare records (throws on error).
$api_entities_compares = $client->ApiEntitiesCompare()->list();
```


### ApiEntitiesContainerRegistryRepository

Create an instance: `$api_entities_container_registry_repository = $client->ApiEntitiesContainerRegistryRepository();`

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
| `id` | `int` |  |
| `location` | `string` |  |
| `name` | `string` |  |
| `path` | `string` |  |
| `project_id` | `int` |  |
| `size` | `int` |  |
| `status` | `string` |  |
| `tag` | `array` |  |
| `tags_count` | `int` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesContainerRegistryRepository record (throws on error).
$api_entities_container_registry_repository = $client->ApiEntitiesContainerRegistryRepository()->load(["id" => "api_entities_container_registry_repository_id"]);
```

#### Example: List

```php
// list() returns an array of ApiEntitiesContainerRegistryRepository records (throws on error).
$api_entities_container_registry_repositorys = $client->ApiEntitiesContainerRegistryRepository()->list();
```


### ApiEntitiesContainerRegistryTag

Create an instance: `$api_entities_container_registry_tag = $client->ApiEntitiesContainerRegistryTag();`

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

```php
// list() returns an array of ApiEntitiesContainerRegistryTag records (throws on error).
$api_entities_container_registry_tags = $client->ApiEntitiesContainerRegistryTag()->list();
```


### ApiEntitiesContainerRegistryTagDetail

Create an instance: `$api_entities_container_registry_tag_detail = $client->ApiEntitiesContainerRegistryTagDetail();`

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
| `total_size` | `int` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesContainerRegistryTagDetail record (throws on error).
$api_entities_container_registry_tag_detail = $client->ApiEntitiesContainerRegistryTagDetail()->load(["project_id" => "project_id", "repository_id" => "repository_id", "tag_name" => "tag_name"]);
```


### ApiEntitiesContributor

Create an instance: `$api_entities_contributor = $client->ApiEntitiesContributor();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `addition` | `int` |  |
| `commit` | `int` |  |
| `deletion` | `int` |  |
| `email` | `string` |  |
| `name` | `string` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesContributor record (throws on error).
$api_entities_contributor = $client->ApiEntitiesContributor()->load(["project_id" => "project_id"]);
```


### ApiEntitiesDeployKey

Create an instance: `$api_entities_deploy_key = $client->ApiEntitiesDeployKey();`

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
| `id` | `int` |  |
| `key` | `string` |  |
| `last_used_at` | `string` |  |
| `projects_with_readonly_access` | `array` |  |
| `projects_with_write_access` | `array` |  |
| `title` | `string` |  |
| `usage_type` | `string` |  |

#### Example: List

```php
// list() returns an array of ApiEntitiesDeployKey records (throws on error).
$api_entities_deploy_keys = $client->ApiEntitiesDeployKey()->list();
```

#### Example: Create

```php
$api_entities_deploy_key = $client->ApiEntitiesDeployKey()->create([
]);
```


### ApiEntitiesDeployKeysProject

Create an instance: `$api_entities_deploy_keys_project = $client->ApiEntitiesDeployKeysProject();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `can_push` | `bool` |  |
| `created_at` | `string` |  |
| `expires_at` | `string` |  |
| `fingerprint` | `string` |  |
| `fingerprint_sha256` | `string` |  |
| `id` | `int` |  |
| `key` | `string` |  |
| `last_used_at` | `string` |  |
| `projects_with_readonly_access` | `array` |  |
| `projects_with_write_access` | `array` |  |
| `title` | `string` |  |
| `usage_type` | `string` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesDeployKeysProject record (throws on error).
$api_entities_deploy_keys_project = $client->ApiEntitiesDeployKeysProject()->load(["key_id" => "key_id", "project_id" => "project_id"]);
```

#### Example: List

```php
// list() returns an array of ApiEntitiesDeployKeysProject records (throws on error).
$api_entities_deploy_keys_projects = $client->ApiEntitiesDeployKeysProject()->list();
```

#### Example: Create

```php
$api_entities_deploy_keys_project = $client->ApiEntitiesDeployKeysProject()->create([
    "project_id" => null, // string
]);
```


### ApiEntitiesDeployToken

Create an instance: `$api_entities_deploy_token = $client->ApiEntitiesDeployToken();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `expired` | `bool` |  |
| `expires_at` | `string` |  |
| `id` | `int` |  |
| `name` | `string` |  |
| `revoked` | `bool` |  |
| `scope` | `array` |  |
| `username` | `string` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesDeployToken record (throws on error).
$api_entities_deploy_token = $client->ApiEntitiesDeployToken()->load(["id" => "api_entities_deploy_token_id"]);
```

#### Example: List

```php
// list() returns an array of ApiEntitiesDeployToken records (throws on error).
$api_entities_deploy_tokens = $client->ApiEntitiesDeployToken()->list();
```


### ApiEntitiesDeployTokenWithToken

Create an instance: `$api_entities_deploy_token_with_token = $client->ApiEntitiesDeployTokenWithToken();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```php
$api_entities_deploy_token_with_token = $client->ApiEntitiesDeployTokenWithToken()->create([
]);
```


### ApiEntitiesDeployment

Create an instance: `$api_entities_deployment = $client->ApiEntitiesDeployment();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `deployable` | `array` |  |
| `environment` | `array` |  |
| `id` | `int` |  |
| `iid` | `int` |  |
| `ref` | `string` |  |
| `sha` | `string` |  |
| `status` | `string` |  |
| `updated_at` | `string` |  |
| `user` | `array` |  |

#### Example: List

```php
// list() returns an array of ApiEntitiesDeployment records (throws on error).
$api_entities_deployments = $client->ApiEntitiesDeployment()->list();
```


### ApiEntitiesDeploymentExtended

Create an instance: `$api_entities_deployment_extended = $client->ApiEntitiesDeploymentExtended();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `approval` | `array` |  |
| `approval_summary` | `array` |  |
| `created_at` | `string` |  |
| `deployable` | `array` |  |
| `environment` | `array` |  |
| `id` | `int` |  |
| `iid` | `int` |  |
| `pending_approval_count` | `int` |  |
| `ref` | `string` |  |
| `sha` | `string` |  |
| `status` | `string` |  |
| `updated_at` | `string` |  |
| `user` | `array` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesDeploymentExtended record (throws on error).
$api_entities_deployment_extended = $client->ApiEntitiesDeploymentExtended()->load(["deployment_id" => "deployment_id", "project_id" => "project_id"]);
```

#### Example: Create

```php
$api_entities_deployment_extended = $client->ApiEntitiesDeploymentExtended()->create([
    "project_id" => null, // string
]);
```


### ApiEntitiesDeploymentsApproval

Create an instance: `$api_entities_deployments_approval = $client->ApiEntitiesDeploymentsApproval();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```php
$api_entities_deployments_approval = $client->ApiEntitiesDeploymentsApproval()->create([
    "deployment_id" => null, // string
    "project_id" => null, // string
]);
```


### ApiEntitiesDictionaryTable

Create an instance: `$api_entities_dictionary_table = $client->ApiEntitiesDictionaryTable();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `feature_category` | `array` |  |
| `table_name` | `string` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesDictionaryTable record (throws on error).
$api_entities_dictionary_table = $client->ApiEntitiesDictionaryTable()->load(["id" => "api_entities_dictionary_table_id", "databas_id" => "databas_id"]);
```


### ApiEntitiesDiff

Create an instance: `$api_entities_diff = $client->ApiEntitiesDiff();`

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
| `collapsed` | `bool` |  |
| `deleted_file` | `bool` |  |
| `diff` | `string` |  |
| `generated_file` | `bool` |  |
| `new_file` | `bool` |  |
| `new_path` | `string` |  |
| `old_path` | `string` |  |
| `renamed_file` | `bool` |  |
| `too_large` | `bool` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesDiff record (throws on error).
$api_entities_diff = $client->ApiEntitiesDiff()->load(["merge_request_id" => "merge_request_id", "project_id" => "project_id"]);
```

#### Example: List

```php
// list() returns an array of ApiEntitiesDiff records (throws on error).
$api_entities_diffs = $client->ApiEntitiesDiff()->list();
```


### ApiEntitiesDiscoveredCluster

Create an instance: `$api_entities_discovered_cluster = $client->ApiEntitiesDiscoveredCluster();`

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

```php
// load() returns the bare ApiEntitiesDiscoveredCluster record (throws on error).
$api_entities_discovered_cluster = $client->ApiEntitiesDiscoveredCluster()->load();
```


### ApiEntitiesDraftNote

Create an instance: `$api_entities_draft_note = $client->ApiEntitiesDraftNote();`

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
| `author_id` | `int` |  |
| `commit_id` | `int` |  |
| `discussion_id` | `int` |  |
| `id` | `int` |  |
| `line_code` | `string` |  |
| `merge_request_id` | `int` |  |
| `note` | `string` |  |
| `position` | `array` |  |
| `resolve_discussion` | `bool` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesDraftNote record (throws on error).
$api_entities_draft_note = $client->ApiEntitiesDraftNote()->load(["id" => "api_entities_draft_note_id", "merge_request_id" => "merge_request_id", "project_id" => "project_id"]);
```

#### Example: List

```php
// list() returns an array of ApiEntitiesDraftNote records (throws on error).
$api_entities_draft_notes = $client->ApiEntitiesDraftNote()->list();
```

#### Example: Create

```php
$api_entities_draft_note = $client->ApiEntitiesDraftNote()->create([
    "merge_request_id" => null, // string
    "project_id" => null, // string
]);
```


### ApiEntitiesEnvironment

Create an instance: `$api_entities_environment = $client->ApiEntitiesEnvironment();`

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
| `cluster_agent` | `array` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `external_url` | `string` |  |
| `flux_resource_path` | `string` |  |
| `id` | `int` |  |
| `kubernetes_namespace` | `string` |  |
| `last_deployment` | `array` |  |
| `name` | `string` |  |
| `project` | `array` |  |
| `slug` | `string` |  |
| `state` | `string` |  |
| `tier` | `string` |  |
| `updated_at` | `string` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesEnvironment record (throws on error).
$api_entities_environment = $client->ApiEntitiesEnvironment()->load(["id" => "api_entities_environment_id", "project_id" => "project_id"]);
```

#### Example: List

```php
// list() returns an array of ApiEntitiesEnvironment records (throws on error).
$api_entities_environments = $client->ApiEntitiesEnvironment()->list();
```

#### Example: Create

```php
$api_entities_environment = $client->ApiEntitiesEnvironment()->create([
    "project_id" => null, // string
]);
```


### ApiEntitiesErrorTrackingClientKey

Create an instance: `$api_entities_error_tracking_client_key = $client->ApiEntitiesErrorTrackingClientKey();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` |  |
| `id` | `int` |  |
| `public_key` | `string` |  |
| `sentry_dsn` | `string` |  |

#### Example: List

```php
// list() returns an array of ApiEntitiesErrorTrackingClientKey records (throws on error).
$api_entities_error_tracking_client_keys = $client->ApiEntitiesErrorTrackingClientKey()->list();
```

#### Example: Create

```php
$api_entities_error_tracking_client_key = $client->ApiEntitiesErrorTrackingClientKey()->create([
    "project_id" => null, // string
]);
```


### ApiEntitiesErrorTrackingProjectSetting

Create an instance: `$api_entities_error_tracking_project_setting = $client->ApiEntitiesErrorTrackingProjectSetting();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` |  |
| `api_url` | `string` |  |
| `integrated` | `bool` |  |
| `project_name` | `string` |  |
| `sentry_external_url` | `string` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesErrorTrackingProjectSetting record (throws on error).
$api_entities_error_tracking_project_setting = $client->ApiEntitiesErrorTrackingProjectSetting()->load(["project_id" => "project_id"]);
```


### ApiEntitiesEvent

Create an instance: `$api_entities_event = $client->ApiEntitiesEvent();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action_name` | `string` |  |
| `author` | `array` |  |
| `author_id` | `int` |  |
| `author_username` | `string` |  |
| `created_at` | `string` |  |
| `id` | `int` |  |
| `imported` | `bool` |  |
| `imported_from` | `string` |  |
| `note` | `array` |  |
| `project_id` | `int` |  |
| `push_data` | `array` |  |
| `target_id` | `int` |  |
| `target_iid` | `int` |  |
| `target_title` | `string` |  |
| `target_type` | `string` |  |
| `wiki_page` | `array` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesEvent record (throws on error).
$api_entities_event = $client->ApiEntitiesEvent()->load(["project_id" => "project_id"]);
```

#### Example: List

```php
// list() returns an array of ApiEntitiesEvent records (throws on error).
$api_entities_events = $client->ApiEntitiesEvent()->list();
```


### ApiEntitiesFeature

Create an instance: `$api_entities_feature = $client->ApiEntitiesFeature();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `definition` | `array` |  |
| `gate` | `array` |  |
| `name` | `string` |  |
| `state` | `string` |  |

#### Example: List

```php
// list() returns an array of ApiEntitiesFeature records (throws on error).
$api_entities_features = $client->ApiEntitiesFeature()->list();
```

#### Example: Create

```php
$api_entities_feature = $client->ApiEntitiesFeature()->create([
    "id" => null, // string
]);
```


### ApiEntitiesFeatureDefinition

Create an instance: `$api_entities_feature_definition = $client->ApiEntitiesFeatureDefinition();`

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

```php
// list() returns an array of ApiEntitiesFeatureDefinition records (throws on error).
$api_entities_feature_definitions = $client->ApiEntitiesFeatureDefinition()->list();
```


### ApiEntitiesFeatureFlag

Create an instance: `$api_entities_feature_flag = $client->ApiEntitiesFeatureFlag();`

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
| `active` | `bool` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `name` | `string` |  |
| `scope` | `string` |  |
| `strategy` | `array` |  |
| `updated_at` | `string` |  |
| `version` | `string` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesFeatureFlag record (throws on error).
$api_entities_feature_flag = $client->ApiEntitiesFeatureFlag()->load(["id" => "api_entities_feature_flag_id", "project_id" => "project_id"]);
```

#### Example: List

```php
// list() returns an array of ApiEntitiesFeatureFlag records (throws on error).
$api_entities_feature_flags = $client->ApiEntitiesFeatureFlag()->list();
```

#### Example: Create

```php
$api_entities_feature_flag = $client->ApiEntitiesFeatureFlag()->create([
    "project_id" => null, // string
]);
```


### ApiEntitiesFeatureFlagUserList

Create an instance: `$api_entities_feature_flag_user_list = $client->ApiEntitiesFeatureFlagUserList();`

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
| `id` | `int` |  |
| `iid` | `int` |  |
| `name` | `string` |  |
| `path` | `string` |  |
| `project_id` | `int` |  |
| `updated_at` | `string` |  |
| `user_xid` | `string` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesFeatureFlagUserList record (throws on error).
$api_entities_feature_flag_user_list = $client->ApiEntitiesFeatureFlagUserList()->load(["iid" => "iid", "project_id" => "project_id"]);
```

#### Example: List

```php
// list() returns an array of ApiEntitiesFeatureFlagUserList records (throws on error).
$api_entities_feature_flag_user_lists = $client->ApiEntitiesFeatureFlagUserList()->list();
```

#### Example: Create

```php
$api_entities_feature_flag_user_list = $client->ApiEntitiesFeatureFlagUserList()->create([
    "project_id" => null, // string
]);
```


### ApiEntitiesFreezePeriod

Create an instance: `$api_entities_freeze_period = $client->ApiEntitiesFreezePeriod();`

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
| `id` | `int` |  |
| `updated_at` | `string` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesFreezePeriod record (throws on error).
$api_entities_freeze_period = $client->ApiEntitiesFreezePeriod()->load(["id" => "api_entities_freeze_period_id", "project_id" => "project_id"]);
```

#### Example: List

```php
// list() returns an array of ApiEntitiesFreezePeriod records (throws on error).
$api_entities_freeze_periods = $client->ApiEntitiesFreezePeriod()->list();
```

#### Example: Create

```php
$api_entities_freeze_period = $client->ApiEntitiesFreezePeriod()->create([
    "project_id" => null, // string
]);
```


### ApiEntitiesGitlabSubscription

Create an instance: `$api_entities_gitlab_subscription = $client->ApiEntitiesGitlabSubscription();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `billing` | `array` |  |
| `plan` | `array` |  |
| `usage` | `array` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesGitlabSubscription record (throws on error).
$api_entities_gitlab_subscription = $client->ApiEntitiesGitlabSubscription()->load(["namespace_id" => "namespace_id"]);
```


### ApiEntitiesGoModuleVersion

Create an instance: `$api_entities_go_module_version = $client->ApiEntitiesGoModuleVersion();`

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

```php
// load() returns the bare ApiEntitiesGoModuleVersion record (throws on error).
$api_entities_go_module_version = $client->ApiEntitiesGoModuleVersion()->load(["module_version" => "module_version", "project_id" => "project_id"]);
```


### ApiEntitiesGroup

Create an instance: `$api_entities_group = $client->ApiEntitiesGroup();`

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
| `archived` | `bool` |  |
| `auto_devops_enabled` | `string` |  |
| `auto_duo_code_review_enabled` | `string` |  |
| `avatar_url` | `string` |  |
| `created_at` | `string` |  |
| `custom_attribute` | `array` |  |
| `default_branch` | `string` |  |
| `default_branch_protection` | `string` |  |
| `default_branch_protection_default` | `string` |  |
| `description` | `string` |  |
| `duo_core_features_enabled` | `bool` |  |
| `duo_features_enabled` | `string` |  |
| `emails_disabled` | `bool` |  |
| `emails_enabled` | `bool` |  |
| `file_template_project_id` | `string` |  |
| `full_name` | `string` |  |
| `full_path` | `string` |  |
| `id` | `string` |  |
| `ldap_access` | `string` |  |
| `ldap_cn` | `string` |  |
| `ldap_group_link` | `array` |  |
| `lfs_enabled` | `string` |  |
| `lock_duo_features_enabled` | `string` |  |
| `lock_math_rendering_limits_enabled` | `bool` |  |
| `marked_for_deletion_on` | `string` |  |
| `math_rendering_limits_enabled` | `bool` |  |
| `max_artifacts_size` | `int` |  |
| `mentions_disabled` | `string` |  |
| `name` | `string` |  |
| `organization_id` | `string` |  |
| `parent_id` | `string` |  |
| `path` | `string` |  |
| `project_creation_level` | `string` |  |
| `repository_storage` | `string` |  |
| `request_access_enabled` | `string` |  |
| `require_two_factor_authentication` | `string` |  |
| `root_storage_statistic` | `array` |  |
| `saml_group_link` | `array` |  |
| `share_with_group_lock` | `string` |  |
| `shared_runners_setting` | `string` |  |
| `show_diff_preview_in_email` | `bool` |  |
| `statistic` | `array` |  |
| `subgroup_creation_level` | `string` |  |
| `two_factor_grace_period` | `string` |  |
| `visibility` | `string` |  |
| `web_based_commit_signing_enabled` | `string` |  |
| `web_url` | `string` |  |
| `wiki_access_level` | `string` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesGroup record (throws on error).
$api_entities_group = $client->ApiEntitiesGroup()->load(["project_id" => "project_id"]);
```

#### Example: List

```php
// list() returns an array of ApiEntitiesGroup records (throws on error).
$api_entities_groups = $client->ApiEntitiesGroup()->list();
```

#### Example: Create

```php
$api_entities_group = $client->ApiEntitiesGroup()->create([
]);
```


### ApiEntitiesGroupDetail

Create an instance: `$api_entities_group_detail = $client->ApiEntitiesGroupDetail();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowed_email_domains_list` | `string` |  |
| `archived` | `bool` |  |
| `auto_ban_user_on_excessive_projects_download` | `string` |  |
| `auto_devops_enabled` | `string` |  |
| `auto_duo_code_review_enabled` | `string` |  |
| `avatar_url` | `string` |  |
| `created_at` | `string` |  |
| `custom_attribute` | `array` |  |
| `default_branch` | `string` |  |
| `default_branch_protection` | `string` |  |
| `default_branch_protection_default` | `string` |  |
| `description` | `string` |  |
| `duo_core_features_enabled` | `bool` |  |
| `duo_features_enabled` | `string` |  |
| `emails_disabled` | `bool` |  |
| `emails_enabled` | `bool` |  |
| `enabled_git_access_protocol` | `string` |  |
| `extra_shared_runners_minutes_limit` | `string` |  |
| `file_template_project_id` | `string` |  |
| `full_name` | `string` |  |
| `full_path` | `string` |  |
| `id` | `string` |  |
| `ip_restriction_range` | `string` |  |
| `ldap_access` | `string` |  |
| `ldap_cn` | `string` |  |
| `ldap_group_link` | `array` |  |
| `lfs_enabled` | `string` |  |
| `lock_duo_features_enabled` | `string` |  |
| `lock_math_rendering_limits_enabled` | `bool` |  |
| `marked_for_deletion_on` | `string` |  |
| `math_rendering_limits_enabled` | `bool` |  |
| `max_artifacts_size` | `int` |  |
| `membership_lock` | `string` |  |
| `mentions_disabled` | `string` |  |
| `name` | `string` |  |
| `organization_id` | `string` |  |
| `parent_id` | `string` |  |
| `path` | `string` |  |
| `prevent_forking_outside_group` | `string` |  |
| `prevent_sharing_groups_outside_hierarchy` | `string` |  |
| `project` | `array` |  |
| `project_creation_level` | `string` |  |
| `repository_storage` | `string` |  |
| `request_access_enabled` | `string` |  |
| `require_two_factor_authentication` | `string` |  |
| `root_storage_statistic` | `array` |  |
| `runners_token` | `string` |  |
| `saml_group_link` | `array` |  |
| `service_access_tokens_expiration_enforced` | `string` |  |
| `share_with_group_lock` | `string` |  |
| `shared_project` | `array` |  |
| `shared_runners_minutes_limit` | `string` |  |
| `shared_runners_setting` | `string` |  |
| `shared_with_group` | `string` |  |
| `show_diff_preview_in_email` | `bool` |  |
| `statistic` | `array` |  |
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

```php
// load() returns the bare ApiEntitiesGroupDetail record (throws on error).
$api_entities_group_detail = $client->ApiEntitiesGroupDetail()->load(["id" => "api_entities_group_detail_id"]);
```

#### Example: Create

```php
$api_entities_group_detail = $client->ApiEntitiesGroupDetail()->create([
    "group_id" => null, // string
]);
```


### ApiEntitiesHook

Create an instance: `$api_entities_hook = $client->ApiEntitiesHook();`

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
| `alert_status` | `mixed` |  |
| `branch_filter_strategy` | `string` |  |
| `created_at` | `string` |  |
| `custom_header` | `array` |  |
| `custom_webhook_template` | `string` |  |
| `description` | `string` |  |
| `disabled_until` | `string` |  |
| `enable_ssl_verification` | `bool` |  |
| `id` | `string` |  |
| `merge_requests_event` | `bool` |  |
| `name` | `string` |  |
| `push_event` | `bool` |  |
| `push_events_branch_filter` | `string` |  |
| `repository_update_event` | `bool` |  |
| `tag_push_event` | `bool` |  |
| `url` | `string` |  |
| `url_variable` | `array` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesHook record (throws on error).
$api_entities_hook = $client->ApiEntitiesHook()->load(["id" => "api_entities_hook_id"]);
```

#### Example: List

```php
// list() returns an array of ApiEntitiesHook records (throws on error).
$api_entities_hooks = $client->ApiEntitiesHook()->list();
```

#### Example: Create

```php
$api_entities_hook = $client->ApiEntitiesHook()->create([
]);
```


### ApiEntitiesIntegration

Create an instance: `$api_entities_integration = $client->ApiEntitiesIntegration();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` |  |
| `alert_event` | `bool` |  |
| `comment_on_event_enabled` | `bool` |  |
| `commit_event` | `bool` |  |
| `confidential_issues_event` | `bool` |  |
| `confidential_note_event` | `bool` |  |
| `created_at` | `string` |  |
| `deployment_event` | `bool` |  |
| `id` | `int` |  |
| `incident_event` | `bool` |  |
| `inherited` | `bool` |  |
| `issues_event` | `bool` |  |
| `job_event` | `bool` |  |
| `merge_requests_event` | `bool` |  |
| `note_event` | `bool` |  |
| `pipeline_event` | `bool` |  |
| `property` | `array` |  |
| `push_event` | `bool` |  |
| `slug` | `int` |  |
| `tag_push_event` | `bool` |  |
| `title` | `string` |  |
| `updated_at` | `string` |  |
| `vulnerability_event` | `bool` |  |
| `wiki_page_event` | `bool` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesIntegration record (throws on error).
$api_entities_integration = $client->ApiEntitiesIntegration()->load(["id" => "api_entities_integration_id"]);
```


### ApiEntitiesIntegrationBasic

Create an instance: `$api_entities_integration_basic = $client->ApiEntitiesIntegrationBasic();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` |  |
| `alert_event` | `bool` |  |
| `comment_on_event_enabled` | `bool` |  |
| `commit_event` | `bool` |  |
| `confidential_issues_event` | `bool` |  |
| `confidential_note_event` | `bool` |  |
| `created_at` | `string` |  |
| `deployment_event` | `bool` |  |
| `id` | `int` |  |
| `incident_event` | `bool` |  |
| `inherited` | `bool` |  |
| `issues_event` | `bool` |  |
| `job_event` | `bool` |  |
| `merge_requests_event` | `bool` |  |
| `note_event` | `bool` |  |
| `pipeline_event` | `bool` |  |
| `push_event` | `bool` |  |
| `slug` | `int` |  |
| `tag_push_event` | `bool` |  |
| `title` | `string` |  |
| `updated_at` | `string` |  |
| `vulnerability_event` | `bool` |  |
| `wiki_page_event` | `bool` |  |

#### Example: List

```php
// list() returns an array of ApiEntitiesIntegrationBasic records (throws on error).
$api_entities_integration_basics = $client->ApiEntitiesIntegrationBasic()->list();
```


### ApiEntitiesInvitation

Create an instance: `$api_entities_invitation = $client->ApiEntitiesInvitation();`

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

```php
// list() returns an array of ApiEntitiesInvitation records (throws on error).
$api_entities_invitations = $client->ApiEntitiesInvitation()->list();
```

#### Example: Create

```php
$api_entities_invitation = $client->ApiEntitiesInvitation()->create([
]);
```


### ApiEntitiesIssuableTimeStat

Create an instance: `$api_entities_issuable_time_stat = $client->ApiEntitiesIssuableTimeStat();`

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
| `time_estimate` | `int` |  |
| `total_time_spent` | `int` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesIssuableTimeStat record (throws on error).
$api_entities_issuable_time_stat = $client->ApiEntitiesIssuableTimeStat()->load(["project_id" => "project_id"]);
```

#### Example: Create

```php
$api_entities_issuable_time_stat = $client->ApiEntitiesIssuableTimeStat()->create([
    "project_id" => null, // string
]);
```


### ApiEntitiesIssue

Create an instance: `$api_entities_issue = $client->ApiEntitiesIssue();`

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
| `assignee` | `array` |  |
| `author` | `array` |  |
| `blocking_issues_count` | `string` |  |
| `closed_at` | `string` |  |
| `closed_by` | `array` |  |
| `confidential` | `bool` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `discussion_locked` | `bool` |  |
| `downvote` | `string` |  |
| `due_date` | `string` |  |
| `epic` | `array` |  |
| `epic_iid` | `string` |  |
| `has_task` | `bool` |  |
| `health_status` | `string` |  |
| `id` | `int` |  |
| `iid` | `int` |  |
| `imported` | `string` |  |
| `imported_from` | `string` |  |
| `issue_type` | `string` |  |
| `iteration` | `array` |  |
| `label` | `array` |  |
| `link` | `array` |  |
| `merge_requests_count` | `string` |  |
| `milestone` | `array` |  |
| `moved_to_id` | `string` |  |
| `project_id` | `int` |  |
| `reference` | `array` |  |
| `service_desk_reply_to` | `string` |  |
| `severity` | `string` |  |
| `state` | `string` |  |
| `subscribed` | `string` |  |
| `task_completion_status` | `string` |  |
| `task_status` | `string` |  |
| `time_stat` | `array` |  |
| `title` | `string` |  |
| `type` | `string` |  |
| `updated_at` | `string` |  |
| `upvote` | `string` |  |
| `user_notes_count` | `string` |  |
| `web_url` | `string` |  |
| `weight` | `string` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesIssue record (throws on error).
$api_entities_issue = $client->ApiEntitiesIssue()->load(["id" => "api_entities_issue_id"]);
```

#### Example: List

```php
// list() returns an array of ApiEntitiesIssue records (throws on error).
$api_entities_issues = $client->ApiEntitiesIssue()->list();
```

#### Example: Create

```php
$api_entities_issue = $client->ApiEntitiesIssue()->create([
    "project_id" => null, // string
]);
```


### ApiEntitiesIssueLink

Create an instance: `$api_entities_issue_link = $client->ApiEntitiesIssueLink();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `link_type` | `string` |  |
| `source_issue` | `array` |  |
| `target_issue` | `array` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesIssueLink record (throws on error).
$api_entities_issue_link = $client->ApiEntitiesIssueLink()->load(["id" => "api_entities_issue_link_id", "issue_id" => "issue_id", "project_id" => "project_id"]);
```

#### Example: Create

```php
$api_entities_issue_link = $client->ApiEntitiesIssueLink()->create([
    "issue_id" => null, // string
    "project_id" => null, // string
]);
```


### ApiEntitiesLicense

Create an instance: `$api_entities_license = $client->ApiEntitiesLicense();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `condition` | `array` |  |
| `content` | `string` |  |
| `description` | `string` |  |
| `html_url` | `string` |  |
| `key` | `string` |  |
| `limitation` | `array` |  |
| `name` | `string` |  |
| `nickname` | `string` |  |
| `permission` | `array` |  |
| `popular` | `bool` |  |
| `source_url` | `string` |  |

#### Example: List

```php
// list() returns an array of ApiEntitiesLicense records (throws on error).
$api_entities_licenses = $client->ApiEntitiesLicense()->list();
```


### ApiEntitiesMarkdown

Create an instance: `$api_entities_markdown = $client->ApiEntitiesMarkdown();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```php
$api_entities_markdown = $client->ApiEntitiesMarkdown()->create([
]);
```


### ApiEntitiesMarkdownUploadAdmin

Create an instance: `$api_entities_markdown_upload_admin = $client->ApiEntitiesMarkdownUploadAdmin();`

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
| `uploaded_by` | `array` |  |

#### Example: List

```php
// list() returns an array of ApiEntitiesMarkdownUploadAdmin records (throws on error).
$api_entities_markdown_upload_admins = $client->ApiEntitiesMarkdownUploadAdmin()->list();
```


### ApiEntitiesMember

Create an instance: `$api_entities_member = $client->ApiEntitiesMember();`

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
| `created_by` | `array` |  |
| `custom_attribute` | `array` |  |
| `email` | `string` |  |
| `expires_at` | `string` |  |
| `group_saml_identity` | `array` |  |
| `group_scim_identity` | `array` |  |
| `id` | `int` |  |
| `is_using_seat` | `bool` |  |
| `key` | `string` |  |
| `locked` | `bool` |  |
| `member_role` | `array` |  |
| `membership_state` | `string` |  |
| `name` | `string` |  |
| `override` | `string` |  |
| `public_email` | `string` |  |
| `state` | `string` |  |
| `username` | `string` |  |
| `value` | `string` |  |
| `web_url` | `string` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesMember record (throws on error).
$api_entities_member = $client->ApiEntitiesMember()->load(["id" => "api_entities_member_id"]);
```

#### Example: List

```php
// list() returns an array of ApiEntitiesMember records (throws on error).
$api_entities_members = $client->ApiEntitiesMember()->list();
```

#### Example: Create

```php
$api_entities_member = $client->ApiEntitiesMember()->create([
]);
```


### ApiEntitiesMerge

Create an instance: `$api_entities_merge = $client->ApiEntitiesMerge();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_collaboration` | `bool` |  |
| `allow_maintainer_to_push` | `bool` |  |
| `approvals_before_merge` | `string` |  |
| `assignee` | `array` |  |
| `author` | `array` |  |
| `blocking_discussions_resolved` | `string` |  |
| `changes_count` | `string` |  |
| `closed_at` | `string` |  |
| `closed_by` | `array` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `description_html` | `string` |  |
| `detailed_merge_status` | `string` |  |
| `diff_ref` | `array` |  |
| `discussion_locked` | `string` |  |
| `diverged_commits_count` | `string` |  |
| `downvote` | `string` |  |
| `draft` | `string` |  |
| `first_contribution` | `string` |  |
| `first_deployed_to_production_at` | `string` |  |
| `force_remove_source_branch` | `string` |  |
| `has_conflict` | `bool` |  |
| `head_pipeline` | `array` |  |
| `id` | `int` |  |
| `iid` | `int` |  |
| `imported` | `string` |  |
| `imported_from` | `string` |  |
| `label` | `string` |  |
| `latest_build_finished_at` | `string` |  |
| `latest_build_started_at` | `string` |  |
| `merge_after` | `string` |  |
| `merge_commit_sha` | `string` |  |
| `merge_error` | `string` |  |
| `merge_status` | `string` |  |
| `merge_user` | `array` |  |
| `merge_when_pipeline_succeed` | `string` |  |
| `merged_at` | `string` |  |
| `merged_by` | `array` |  |
| `milestone` | `array` |  |
| `pipeline` | `array` |  |
| `prepared_at` | `string` |  |
| `project_id` | `int` |  |
| `rebase_in_progress` | `string` |  |
| `reference` | `string` |  |
| `reviewer` | `array` |  |
| `sha` | `string` |  |
| `should_remove_source_branch` | `bool` |  |
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
| `time_stat` | `array` |  |
| `title` | `string` |  |
| `title_html` | `string` |  |
| `updated_at` | `string` |  |
| `upvote` | `string` |  |
| `user` | `array` |  |
| `user_notes_count` | `string` |  |
| `web_url` | `string` |  |
| `work_in_progress` | `string` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesMerge record (throws on error).
$api_entities_merge = $client->ApiEntitiesMerge()->load(["merge_request_iid" => "merge_request_iid", "project_id" => "project_id"]);
```

#### Example: Create

```php
$api_entities_merge = $client->ApiEntitiesMerge()->create([
    "project_id" => null, // string
]);
```


### ApiEntitiesMergeRequestApproval

Create an instance: `$api_entities_merge_request_approval = $client->ApiEntitiesMergeRequestApproval();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `approved` | `bool` |  |
| `approved_by` | `array` |  |
| `user_can_approve` | `bool` |  |
| `user_has_approved` | `bool` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesMergeRequestApproval record (throws on error).
$api_entities_merge_request_approval = $client->ApiEntitiesMergeRequestApproval()->load(["merge_request_id" => "merge_request_id", "project_id" => "project_id"]);
```

#### Example: Create

```php
$api_entities_merge_request_approval = $client->ApiEntitiesMergeRequestApproval()->create([
    "merge_request_id" => null, // string
    "project_id" => null, // string
]);
```


### ApiEntitiesMergeRequestBasic

Create an instance: `$api_entities_merge_request_basic = $client->ApiEntitiesMergeRequestBasic();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_collaboration` | `bool` |  |
| `allow_maintainer_to_push` | `bool` |  |
| `approvals_before_merge` | `string` |  |
| `assignee` | `array` |  |
| `author` | `array` |  |
| `blocking_discussions_resolved` | `string` |  |
| `closed_at` | `string` |  |
| `closed_by` | `array` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `description_html` | `string` |  |
| `detailed_merge_status` | `string` |  |
| `discussion_locked` | `string` |  |
| `downvote` | `string` |  |
| `draft` | `string` |  |
| `force_remove_source_branch` | `string` |  |
| `has_conflict` | `bool` |  |
| `id` | `int` |  |
| `iid` | `int` |  |
| `imported` | `string` |  |
| `imported_from` | `string` |  |
| `label` | `string` |  |
| `merge_after` | `string` |  |
| `merge_commit_sha` | `string` |  |
| `merge_status` | `string` |  |
| `merge_user` | `array` |  |
| `merge_when_pipeline_succeed` | `string` |  |
| `merged_at` | `string` |  |
| `merged_by` | `array` |  |
| `milestone` | `array` |  |
| `prepared_at` | `string` |  |
| `project_id` | `int` |  |
| `reference` | `string` |  |
| `reviewer` | `array` |  |
| `sha` | `string` |  |
| `should_remove_source_branch` | `bool` |  |
| `source_branch` | `string` |  |
| `source_project_id` | `string` |  |
| `squash` | `string` |  |
| `squash_commit_sha` | `string` |  |
| `squash_on_merge` | `string` |  |
| `state` | `string` |  |
| `target_branch` | `string` |  |
| `target_project_id` | `string` |  |
| `task_completion_status` | `string` |  |
| `time_stat` | `array` |  |
| `title` | `string` |  |
| `title_html` | `string` |  |
| `updated_at` | `string` |  |
| `upvote` | `string` |  |
| `user_notes_count` | `string` |  |
| `web_url` | `string` |  |
| `work_in_progress` | `string` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesMergeRequestBasic record (throws on error).
$api_entities_merge_request_basic = $client->ApiEntitiesMergeRequestBasic()->load();
```

#### Example: List

```php
// list() returns an array of ApiEntitiesMergeRequestBasic records (throws on error).
$api_entities_merge_request_basics = $client->ApiEntitiesMergeRequestBasic()->list();
```


### ApiEntitiesMergeRequestChange

Create an instance: `$api_entities_merge_request_change = $client->ApiEntitiesMergeRequestChange();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_collaboration` | `bool` |  |
| `allow_maintainer_to_push` | `bool` |  |
| `approvals_before_merge` | `string` |  |
| `assignee` | `array` |  |
| `author` | `array` |  |
| `blocking_discussions_resolved` | `string` |  |
| `change` | `array` |  |
| `changes_count` | `string` |  |
| `closed_at` | `string` |  |
| `closed_by` | `array` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `description_html` | `string` |  |
| `detailed_merge_status` | `string` |  |
| `diff_ref` | `array` |  |
| `discussion_locked` | `string` |  |
| `diverged_commits_count` | `string` |  |
| `downvote` | `string` |  |
| `draft` | `string` |  |
| `first_contribution` | `string` |  |
| `first_deployed_to_production_at` | `string` |  |
| `force_remove_source_branch` | `string` |  |
| `has_conflict` | `bool` |  |
| `head_pipeline` | `array` |  |
| `id` | `int` |  |
| `iid` | `int` |  |
| `imported` | `string` |  |
| `imported_from` | `string` |  |
| `label` | `string` |  |
| `latest_build_finished_at` | `string` |  |
| `latest_build_started_at` | `string` |  |
| `merge_after` | `string` |  |
| `merge_commit_sha` | `string` |  |
| `merge_error` | `string` |  |
| `merge_status` | `string` |  |
| `merge_user` | `array` |  |
| `merge_when_pipeline_succeed` | `string` |  |
| `merged_at` | `string` |  |
| `merged_by` | `array` |  |
| `milestone` | `array` |  |
| `overflow` | `string` |  |
| `pipeline` | `array` |  |
| `prepared_at` | `string` |  |
| `project_id` | `int` |  |
| `rebase_in_progress` | `string` |  |
| `reference` | `string` |  |
| `reviewer` | `array` |  |
| `sha` | `string` |  |
| `should_remove_source_branch` | `bool` |  |
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
| `time_stat` | `array` |  |
| `title` | `string` |  |
| `title_html` | `string` |  |
| `updated_at` | `string` |  |
| `upvote` | `string` |  |
| `user` | `array` |  |
| `user_notes_count` | `string` |  |
| `web_url` | `string` |  |
| `work_in_progress` | `string` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesMergeRequestChange record (throws on error).
$api_entities_merge_request_change = $client->ApiEntitiesMergeRequestChange()->load(["merge_request_id" => "merge_request_id", "project_id" => "project_id"]);
```


### ApiEntitiesMergeRequestDiff

Create an instance: `$api_entities_merge_request_diff = $client->ApiEntitiesMergeRequestDiff();`

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

```php
// list() returns an array of ApiEntitiesMergeRequestDiff records (throws on error).
$api_entities_merge_request_diffs = $client->ApiEntitiesMergeRequestDiff()->list();
```


### ApiEntitiesMergeRequestDiffFull

Create an instance: `$api_entities_merge_request_diff_full = $client->ApiEntitiesMergeRequestDiffFull();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `base_commit_sha` | `string` |  |
| `commit` | `array` |  |
| `created_at` | `string` |  |
| `diff` | `array` |  |
| `head_commit_sha` | `string` |  |
| `id` | `string` |  |
| `merge_request_id` | `string` |  |
| `patch_id_sha` | `string` |  |
| `real_size` | `string` |  |
| `start_commit_sha` | `string` |  |
| `state` | `string` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesMergeRequestDiffFull record (throws on error).
$api_entities_merge_request_diff_full = $client->ApiEntitiesMergeRequestDiffFull()->load(["merge_request_id" => "merge_request_id", "project_id" => "project_id", "version_id" => "version_id"]);
```


### ApiEntitiesMergeRequestReviewer

Create an instance: `$api_entities_merge_request_reviewer = $client->ApiEntitiesMergeRequestReviewer();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `state` | `string` |  |
| `user` | `array` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesMergeRequestReviewer record (throws on error).
$api_entities_merge_request_reviewer = $client->ApiEntitiesMergeRequestReviewer()->load(["merge_request_id" => "merge_request_id", "project_id" => "project_id"]);
```


### ApiEntitiesMetricImage

Create an instance: `$api_entities_metric_image = $client->ApiEntitiesMetricImage();`

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
| `id` | `int` |  |
| `url` | `string` |  |
| `url_text` | `string` |  |

#### Example: List

```php
// list() returns an array of ApiEntitiesMetricImage records (throws on error).
$api_entities_metric_images = $client->ApiEntitiesMetricImage()->list();
```

#### Example: Create

```php
$api_entities_metric_image = $client->ApiEntitiesMetricImage()->create([
    "alert_management_alert_id" => null, // string
    "project_id" => null, // string
]);
```


### ApiEntitiesMrNote

Create an instance: `$api_entities_mr_note = $client->ApiEntitiesMrNote();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author` | `array` |  |
| `note` | `string` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesMrNote record (throws on error).
$api_entities_mr_note = $client->ApiEntitiesMrNote()->load(["merge_request_id" => "merge_request_id", "project_id" => "project_id"]);
```


### ApiEntitiesNamespace

Create an instance: `$api_entities_namespace = $client->ApiEntitiesNamespace();`

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
| `additional_purchased_storage_size` | `int` |  |
| `avatar_url` | `string` |  |
| `billable_members_count` | `int` |  |
| `end_date` | `string` |  |
| `extra_shared_runners_minutes_limit` | `int` |  |
| `full_path` | `string` |  |
| `id` | `int` |  |
| `kind` | `string` |  |
| `max_seats_used` | `int` |  |
| `max_seats_used_changed_at` | `string` |  |
| `members_count_with_descendant` | `int` |  |
| `name` | `string` |  |
| `parent_id` | `int` |  |
| `path` | `string` |  |
| `plan` | `string` |  |
| `projects_count` | `int` |  |
| `root_repository_size` | `int` |  |
| `seats_in_use` | `int` |  |
| `shared_runners_minutes_limit` | `int` |  |
| `trial` | `bool` |  |
| `trial_ends_on` | `string` |  |
| `web_url` | `string` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesNamespace record (throws on error).
$api_entities_namespace = $client->ApiEntitiesNamespace()->load(["id" => "api_entities_namespace_id"]);
```

#### Example: List

```php
// list() returns an array of ApiEntitiesNamespace records (throws on error).
$api_entities_namespaces = $client->ApiEntitiesNamespace()->list();
```


### ApiEntitiesNamespaceExistence

Create an instance: `$api_entities_namespace_existence = $client->ApiEntitiesNamespaceExistence();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `exist` | `bool` |  |
| `suggest` | `array` |  |

#### Example: List

```php
// list() returns an array of ApiEntitiesNamespaceExistence records (throws on error).
$api_entities_namespace_existences = $client->ApiEntitiesNamespaceExistence()->list();
```


### ApiEntitiesNamespacesStorageLimitExclusion

Create an instance: `$api_entities_namespaces_storage_limit_exclusion = $client->ApiEntitiesNamespacesStorageLimitExclusion();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `int` |  |
| `namespace_id` | `int` |  |
| `namespace_name` | `string` |  |
| `reason` | `string` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesNamespacesStorageLimitExclusion record (throws on error).
$api_entities_namespaces_storage_limit_exclusion = $client->ApiEntitiesNamespacesStorageLimitExclusion()->load(["id" => 1]);
```

#### Example: Create

```php
$api_entities_namespaces_storage_limit_exclusion = $client->ApiEntitiesNamespacesStorageLimitExclusion()->create([
    "namespace_id" => null, // string
]);
```


### ApiEntitiesNpmPackage

Create an instance: `$api_entities_npm_package = $client->ApiEntitiesNpmPackage();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `dist_tag` | `array` |  |
| `name` | `string` |  |
| `version` | `array` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesNpmPackage record (throws on error).
$api_entities_npm_package = $client->ApiEntitiesNpmPackage()->load();
```


### ApiEntitiesNpmPackageTag

Create an instance: `$api_entities_npm_package_tag = $client->ApiEntitiesNpmPackageTag();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `dist_tag` | `array` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesNpmPackageTag record (throws on error).
$api_entities_npm_package_tag = $client->ApiEntitiesNpmPackageTag()->load();
```


### ApiEntitiesNugetPackagesVersion

Create an instance: `$api_entities_nuget_packages_version = $client->ApiEntitiesNugetPackagesVersion();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `version` | `array` |  |

#### Example: List

```php
// list() returns an array of ApiEntitiesNugetPackagesVersion records (throws on error).
$api_entities_nuget_packages_versions = $client->ApiEntitiesNugetPackagesVersion()->list();
```


### ApiEntitiesNugetSearchResult

Create an instance: `$api_entities_nuget_search_result = $client->ApiEntitiesNugetSearchResult();`

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
| `total_download` | `int` |  |
| `type` | `string` |  |
| `verified` | `bool` |  |
| `version` | `string` |  |

#### Example: List

```php
// list() returns an array of ApiEntitiesNugetSearchResult records (throws on error).
$api_entities_nuget_search_results = $client->ApiEntitiesNugetSearchResult()->list();
```


### ApiEntitiesNugetServiceIndex

Create an instance: `$api_entities_nuget_service_index = $client->ApiEntitiesNugetServiceIndex();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `resource` | `array` |  |
| `version` | `string` |  |

#### Example: List

```php
// list() returns an array of ApiEntitiesNugetServiceIndex records (throws on error).
$api_entities_nuget_service_indexs = $client->ApiEntitiesNugetServiceIndex()->list();
```


### ApiEntitiesOrganizationsOrganization

Create an instance: `$api_entities_organizations_organization = $client->ApiEntitiesOrganizationsOrganization();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```php
$api_entities_organizations_organization = $client->ApiEntitiesOrganizationsOrganization()->create([
]);
```


### ApiEntitiesPackage

Create an instance: `$api_entities_package = $client->ApiEntitiesPackage();`

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
| `id` | `int` |  |
| `last_downloaded_at` | `string` |  |
| `link` | `array` |  |
| `name` | `string` |  |
| `package_type` | `string` |  |
| `pipeline` | `array` |  |
| `project_id` | `int` |  |
| `project_path` | `string` |  |
| `status` | `string` |  |
| `tag` | `string` |  |
| `version` | `string` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesPackage record (throws on error).
$api_entities_package = $client->ApiEntitiesPackage()->load(["id" => "api_entities_package_id", "project_id" => "project_id"]);
```

#### Example: List

```php
// list() returns an array of ApiEntitiesPackage records (throws on error).
$api_entities_packages = $client->ApiEntitiesPackage()->list();
```


### ApiEntitiesPackageFile

Create an instance: `$api_entities_package_file = $client->ApiEntitiesPackageFile();`

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
| `id` | `int` |  |
| `package_id` | `int` |  |
| `pipeline` | `array` |  |
| `size` | `int` |  |

#### Example: List

```php
// list() returns an array of ApiEntitiesPackageFile records (throws on error).
$api_entities_package_files = $client->ApiEntitiesPackageFile()->list();
```


### ApiEntitiesPackagePipeline

Create an instance: `$api_entities_package_pipeline = $client->ApiEntitiesPackagePipeline();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `id` | `int` |  |
| `iid` | `int` |  |
| `project_id` | `int` |  |
| `ref` | `string` |  |
| `sha` | `string` |  |
| `source` | `string` |  |
| `status` | `string` |  |
| `updated_at` | `string` |  |
| `user` | `array` |  |
| `web_url` | `string` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesPackagePipeline record (throws on error).
$api_entities_package_pipeline = $client->ApiEntitiesPackagePipeline()->load(["package_id" => "package_id", "project_id" => "project_id"]);
```


### ApiEntitiesPackagesConanFilesList

Create an instance: `$api_entities_packages_conan_files_list = $client->ApiEntitiesPackagesConanFilesList();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `file` | `array` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesPackagesConanFilesList record (throws on error).
$api_entities_packages_conan_files_list = $client->ApiEntitiesPackagesConanFilesList()->load(["conan_id" => "conan_id", "package_channel" => "package_channel", "package_username" => "package_username", "package_version" => "package_version", "project_id" => "project_id"]);
```


### ApiEntitiesPackagesConanPackageManifest

Create an instance: `$api_entities_packages_conan_package_manifest = $client->ApiEntitiesPackagesConanPackageManifest();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `package_url` | `array` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesPackagesConanPackageManifest record (throws on error).
$api_entities_packages_conan_package_manifest = $client->ApiEntitiesPackagesConanPackageManifest()->load(["conan_id" => "conan_id", "conan_package_reference" => "conan_package_reference", "package_channel" => "package_channel", "package_username" => "package_username", "package_version" => "package_version"]);
```


### ApiEntitiesPackagesConanPackageRevision

Create an instance: `$api_entities_packages_conan_package_revision = $client->ApiEntitiesPackagesConanPackageRevision();`

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

```php
// list() returns an array of ApiEntitiesPackagesConanPackageRevision records (throws on error).
$api_entities_packages_conan_package_revisions = $client->ApiEntitiesPackagesConanPackageRevision()->list();
```


### ApiEntitiesPackagesConanPackageSnapshot

Create an instance: `$api_entities_packages_conan_package_snapshot = $client->ApiEntitiesPackagesConanPackageSnapshot();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `package_snapshot` | `array` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesPackagesConanPackageSnapshot record (throws on error).
$api_entities_packages_conan_package_snapshot = $client->ApiEntitiesPackagesConanPackageSnapshot()->load(["conan_id" => "conan_id", "conan_package_reference" => "conan_package_reference", "package_channel" => "package_channel", "package_username" => "package_username", "package_version" => "package_version"]);
```


### ApiEntitiesPackagesConanRecipeManifest

Create an instance: `$api_entities_packages_conan_recipe_manifest = $client->ApiEntitiesPackagesConanRecipeManifest();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `recipe_url` | `array` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesPackagesConanRecipeManifest record (throws on error).
$api_entities_packages_conan_recipe_manifest = $client->ApiEntitiesPackagesConanRecipeManifest()->load(["conan_id" => "conan_id", "package_channel" => "package_channel", "package_username" => "package_username", "package_version" => "package_version"]);
```


### ApiEntitiesPackagesConanRecipeRevision

Create an instance: `$api_entities_packages_conan_recipe_revision = $client->ApiEntitiesPackagesConanRecipeRevision();`

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

```php
// list() returns an array of ApiEntitiesPackagesConanRecipeRevision records (throws on error).
$api_entities_packages_conan_recipe_revisions = $client->ApiEntitiesPackagesConanRecipeRevision()->list();
```


### ApiEntitiesPackagesConanRecipeSnapshot

Create an instance: `$api_entities_packages_conan_recipe_snapshot = $client->ApiEntitiesPackagesConanRecipeSnapshot();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `recipe_snapshot` | `array` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesPackagesConanRecipeSnapshot record (throws on error).
$api_entities_packages_conan_recipe_snapshot = $client->ApiEntitiesPackagesConanRecipeSnapshot()->load(["id" => "api_entities_packages_conan_recipe_snapshot_id", "package_channel" => "package_channel", "package_name" => "package_name", "package_username" => "package_username", "package_version" => "package_version"]);
```


### ApiEntitiesPackagesConanRevision

Create an instance: `$api_entities_packages_conan_revision = $client->ApiEntitiesPackagesConanRevision();`

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

```php
// load() returns the bare ApiEntitiesPackagesConanRevision record (throws on error).
$api_entities_packages_conan_revision = $client->ApiEntitiesPackagesConanRevision()->load(["conan_id" => "conan_id", "package_channel" => "package_channel", "package_username" => "package_username", "package_version" => "package_version", "project_id" => "project_id"]);
```


### ApiEntitiesPackagesConanUploadUrl

Create an instance: `$api_entities_packages_conan_upload_url = $client->ApiEntitiesPackagesConanUploadUrl();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `upload_url` | `array` |  |

#### Example: Create

```php
$api_entities_packages_conan_upload_url = $client->ApiEntitiesPackagesConanUploadUrl()->create([
    "conan_id" => null, // string
    "package_channel" => null, // mixed
    "package_username" => null, // mixed
    "package_version" => null, // mixed
]);
```


### ApiEntitiesPackagesDebianDistribution

Create an instance: `$api_entities_packages_debian_distribution = $client->ApiEntitiesPackagesDebianDistribution();`

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
| `architecture` | `array` |  |
| `codename` | `string` |  |
| `component` | `array` |  |
| `description` | `string` |  |
| `id` | `int` |  |
| `label` | `string` |  |
| `origin` | `string` |  |
| `suite` | `string` |  |
| `valid_time_duration_second` | `int` |  |
| `version` | `string` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesPackagesDebianDistribution record (throws on error).
$api_entities_packages_debian_distribution = $client->ApiEntitiesPackagesDebianDistribution()->load(["id" => "api_entities_packages_debian_distribution_id"]);
```

#### Example: List

```php
// list() returns an array of ApiEntitiesPackagesDebianDistribution records (throws on error).
$api_entities_packages_debian_distributions = $client->ApiEntitiesPackagesDebianDistribution()->list();
```

#### Example: Create

```php
$api_entities_packages_debian_distribution = $client->ApiEntitiesPackagesDebianDistribution()->create([
]);
```


### ApiEntitiesPagesDomain

Create an instance: `$api_entities_pages_domain = $client->ApiEntitiesPagesDomain();`

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
| `certificate` | `array` |  |
| `domain` | `string` |  |
| `enabled_until` | `string` |  |
| `url` | `string` |  |
| `verification_code` | `string` |  |
| `verified` | `bool` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesPagesDomain record (throws on error).
$api_entities_pages_domain = $client->ApiEntitiesPagesDomain()->load(["id" => "api_entities_pages_domain_id", "project_id" => "project_id"]);
```

#### Example: List

```php
// list() returns an array of ApiEntitiesPagesDomain records (throws on error).
$api_entities_pages_domains = $client->ApiEntitiesPagesDomain()->list();
```

#### Example: Create

```php
$api_entities_pages_domain = $client->ApiEntitiesPagesDomain()->create([
    "project_id" => null, // string
]);
```


### ApiEntitiesPagesDomainBasic

Create an instance: `$api_entities_pages_domain_basic = $client->ApiEntitiesPagesDomainBasic();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auto_ssl_enabled` | `string` |  |
| `certificate_expiration` | `array` |  |
| `domain` | `string` |  |
| `enabled_until` | `string` |  |
| `project_id` | `string` |  |
| `url` | `string` |  |
| `verification_code` | `string` |  |
| `verified` | `bool` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesPagesDomainBasic record (throws on error).
$api_entities_pages_domain_basic = $client->ApiEntitiesPagesDomainBasic()->load();
```


### ApiEntitiesPersonalAccessToken

Create an instance: `$api_entities_personal_access_token = $client->ApiEntitiesPersonalAccessToken();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `expires_at` | `string` |  |
| `id` | `int` |  |
| `last_used_at` | `string` |  |
| `name` | `string` |  |
| `revoked` | `bool` |  |
| `scope` | `array` |  |
| `user_id` | `int` |  |

#### Example: List

```php
// list() returns an array of ApiEntitiesPersonalAccessToken records (throws on error).
$api_entities_personal_access_tokens = $client->ApiEntitiesPersonalAccessToken()->list();
```


### ApiEntitiesPersonalAccessTokenWithLastUsedIp

Create an instance: `$api_entities_personal_access_token_with_last_used_ip = $client->ApiEntitiesPersonalAccessTokenWithLastUsedIp();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `expires_at` | `string` |  |
| `id` | `int` |  |
| `last_used_at` | `string` |  |
| `last_used_ip` | `array` |  |
| `name` | `string` |  |
| `revoked` | `bool` |  |
| `scope` | `array` |  |
| `user_id` | `int` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesPersonalAccessTokenWithLastUsedIp record (throws on error).
$api_entities_personal_access_token_with_last_used_ip = $client->ApiEntitiesPersonalAccessTokenWithLastUsedIp()->load(["id" => "api_entities_personal_access_token_with_last_used_ip_id"]);
```

#### Example: List

```php
// list() returns an array of ApiEntitiesPersonalAccessTokenWithLastUsedIp records (throws on error).
$api_entities_personal_access_token_with_last_used_ips = $client->ApiEntitiesPersonalAccessTokenWithLastUsedIp()->list();
```


### ApiEntitiesPersonalAccessTokenWithToken

Create an instance: `$api_entities_personal_access_token_with_token = $client->ApiEntitiesPersonalAccessTokenWithToken();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `expires_at` | `string` |  |
| `id` | `int` |  |
| `last_used_at` | `string` |  |
| `name` | `string` |  |
| `revoked` | `bool` |  |
| `scope` | `array` |  |
| `token` | `string` |  |
| `user_id` | `int` |  |

#### Example: Create

```php
$api_entities_personal_access_token_with_token = $client->ApiEntitiesPersonalAccessTokenWithToken()->create([
]);
```


### ApiEntitiesPersonalSnippet

Create an instance: `$api_entities_personal_snippet = $client->ApiEntitiesPersonalSnippet();`

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
| `author` | `array` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `file` | `array` |  |
| `file_name` | `string` |  |
| `http_url_to_repo` | `string` |  |
| `id` | `int` |  |
| `imported` | `bool` |  |
| `imported_from` | `string` |  |
| `project_id` | `int` |  |
| `raw_url` | `string` |  |
| `repository_storage` | `string` |  |
| `ssh_url_to_repo` | `string` |  |
| `title` | `string` |  |
| `updated_at` | `string` |  |
| `visibility` | `string` |  |
| `web_url` | `string` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesPersonalSnippet record (throws on error).
$api_entities_personal_snippet = $client->ApiEntitiesPersonalSnippet()->load(["id" => "api_entities_personal_snippet_id"]);
```

#### Example: List

```php
// list() returns an array of ApiEntitiesPersonalSnippet records (throws on error).
$api_entities_personal_snippets = $client->ApiEntitiesPersonalSnippet()->list();
```

#### Example: Create

```php
$api_entities_personal_snippet = $client->ApiEntitiesPersonalSnippet()->create([
]);
```


### ApiEntitiesPlanLimit

Create an instance: `$api_entities_plan_limit = $client->ApiEntitiesPlanLimit();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ci_active_job` | `int` |  |
| `ci_instance_level_variable` | `int` |  |
| `ci_needs_size_limit` | `int` |  |
| `ci_pipeline_schedule` | `int` |  |
| `ci_pipeline_size` | `int` |  |
| `ci_project_subscription` | `int` |  |
| `ci_registered_group_runner` | `int` |  |
| `ci_registered_project_runner` | `int` |  |
| `conan_max_file_size` | `int` |  |
| `dotenv_size` | `int` |  |
| `dotenv_variable` | `int` |  |
| `enforcement_limit` | `int` |  |
| `generic_packages_max_file_size` | `int` |  |
| `helm_max_file_size` | `int` |  |
| `limits_history` | `array` |  |
| `maven_max_file_size` | `int` |  |
| `notification_limit` | `int` |  |
| `npm_max_file_size` | `int` |  |
| `nuget_max_file_size` | `int` |  |
| `pipeline_hierarchy_size` | `int` |  |
| `pypi_max_file_size` | `int` |  |
| `storage_size_limit` | `int` |  |
| `terraform_module_max_file_size` | `int` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesPlanLimit record (throws on error).
$api_entities_plan_limit = $client->ApiEntitiesPlanLimit()->load();
```


### ApiEntitiesProject

Create an instance: `$api_entities_project = $client->ApiEntitiesProject();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_merge_on_skipped_pipeline` | `bool` |  |
| `allow_pipeline_trigger_approve_deployment` | `bool` |  |
| `analytics_access_level` | `string` |  |
| `approvals_before_merge` | `string` |  |
| `archived` | `bool` |  |
| `auto_cancel_pending_pipeline` | `string` |  |
| `auto_devops_deploy_strategy` | `string` |  |
| `auto_devops_enabled` | `bool` |  |
| `auto_duo_code_review_enabled` | `string` |  |
| `autoclose_referenced_issue` | `bool` |  |
| `avatar_url` | `string` |  |
| `build_git_strategy` | `string` |  |
| `build_timeout` | `int` |  |
| `builds_access_level` | `string` |  |
| `can_create_merge_request_in` | `bool` |  |
| `ci_allow_fork_pipelines_to_run_in_parent_project` | `bool` |  |
| `ci_config_path` | `string` |  |
| `ci_default_git_depth` | `int` |  |
| `ci_delete_pipelines_in_second` | `int` |  |
| `ci_forward_deployment_enabled` | `bool` |  |
| `ci_forward_deployment_rollback_allowed` | `bool` |  |
| `ci_id_token_sub_claim_component` | `array` |  |
| `ci_job_token_scope_enabled` | `bool` |  |
| `ci_pipeline_variables_minimum_override_role` | `string` |  |
| `ci_push_repository_for_job_token_allowed` | `bool` |  |
| `ci_restrict_pipeline_cancellation_role` | `string` |  |
| `ci_separated_cache` | `bool` |  |
| `compliance_framework` | `string` |  |
| `container_expiration_policy` | `array` |  |
| `container_registry_access_level` | `string` |  |
| `container_registry_enabled` | `bool` |  |
| `container_registry_image_prefix` | `string` |  |
| `created_at` | `string` |  |
| `creator_id` | `int` |  |
| `custom_attribute` | `array` |  |
| `default_branch` | `string` |  |
| `description` | `string` |  |
| `description_html` | `string` |  |
| `duo_remote_flows_enabled` | `string` |  |
| `emails_disabled` | `bool` |  |
| `emails_enabled` | `bool` |  |
| `empty_repo` | `bool` |  |
| `enforce_auth_checks_on_upload` | `bool` |  |
| `environments_access_level` | `string` |  |
| `external_authorization_classification_label` | `string` |  |
| `feature_flags_access_level` | `string` |  |
| `forked_from_project` | `array` |  |
| `forking_access_level` | `string` |  |
| `forks_count` | `int` |  |
| `group_runners_enabled` | `bool` |  |
| `http_url_to_repo` | `string` |  |
| `id` | `int` |  |
| `import_error` | `string` |  |
| `import_status` | `string` |  |
| `import_type` | `string` |  |
| `import_url` | `string` |  |
| `infrastructure_access_level` | `string` |  |
| `issue_branch_template` | `string` |  |
| `issues_access_level` | `string` |  |
| `issues_enabled` | `bool` |  |
| `issues_template` | `string` |  |
| `jobs_enabled` | `bool` |  |
| `keep_latest_artifact` | `bool` |  |
| `last_activity_at` | `string` |  |
| `lfs_enabled` | `bool` |  |
| `license` | `array` |  |
| `license_url` | `string` |  |
| `link` | `array` |  |
| `marked_for_deletion_at` | `string` |  |
| `marked_for_deletion_on` | `string` |  |
| `max_artifacts_size` | `int` |  |
| `merge_commit_template` | `string` |  |
| `merge_method` | `string` |  |
| `merge_pipelines_enabled` | `string` |  |
| `merge_request_title_regex` | `string` |  |
| `merge_request_title_regex_description` | `string` |  |
| `merge_requests_access_level` | `string` |  |
| `merge_requests_enabled` | `bool` |  |
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
| `mr_default_target_self` | `bool` |  |
| `name` | `string` |  |
| `name_with_namespace` | `string` |  |
| `namespace` | `array` |  |
| `only_allow_merge_if_all_discussions_are_resolved` | `bool` |  |
| `only_allow_merge_if_all_status_checks_passed` | `string` |  |
| `only_allow_merge_if_pipeline_succeed` | `bool` |  |
| `only_mirror_protected_branch` | `string` |  |
| `open_issues_count` | `int` |  |
| `owner` | `array` |  |
| `package_registry_access_level` | `string` |  |
| `packages_enabled` | `bool` |  |
| `pages_access_level` | `string` |  |
| `path` | `string` |  |
| `path_with_namespace` | `string` |  |
| `pre_receive_secret_detection_enabled` | `bool` |  |
| `prevent_merge_without_jira_issue` | `string` |  |
| `printing_merge_request_link_enabled` | `bool` |  |
| `public_job` | `bool` |  |
| `readme_url` | `string` |  |
| `releases_access_level` | `string` |  |
| `remove_source_branch_after_merge` | `bool` |  |
| `repository_access_level` | `string` |  |
| `repository_object_format` | `string` |  |
| `repository_storage` | `string` |  |
| `request_access_enabled` | `bool` |  |
| `requirements_access_level` | `string` |  |
| `requirements_enabled` | `string` |  |
| `resolve_outdated_diff_discussion` | `bool` |  |
| `resource_group_default_process_mode` | `string` |  |
| `restrict_user_defined_variable` | `bool` |  |
| `runner_token_expiration_interval` | `int` |  |
| `runners_token` | `string` |  |
| `secret_push_protection_enabled` | `bool` |  |
| `security_and_compliance_access_level` | `string` |  |
| `security_and_compliance_enabled` | `string` |  |
| `service_desk_address` | `string` |  |
| `service_desk_enabled` | `bool` |  |
| `shared_runners_enabled` | `bool` |  |
| `shared_with_group` | `array` |  |
| `show_diff_preview_in_email` | `bool` |  |
| `snippets_access_level` | `string` |  |
| `snippets_enabled` | `bool` |  |
| `spp_repository_pipeline_access` | `bool` |  |
| `squash_commit_template` | `string` |  |
| `squash_option` | `string` |  |
| `ssh_url_to_repo` | `string` |  |
| `star_count` | `int` |  |
| `statistic` | `array` |  |
| `suggestion_commit_message` | `string` |  |
| `tag_list` | `array` |  |
| `topic` | `array` |  |
| `updated_at` | `string` |  |
| `visibility` | `string` |  |
| `warn_about_potentially_unwanted_character` | `bool` |  |
| `web_based_commit_signing_enabled` | `string` |  |
| `web_url` | `string` |  |
| `wiki_access_level` | `string` |  |
| `wiki_enabled` | `bool` |  |

#### Example: List

```php
// list() returns an array of ApiEntitiesProject records (throws on error).
$api_entities_projects = $client->ApiEntitiesProject()->list();
```

#### Example: Create

```php
$api_entities_project = $client->ApiEntitiesProject()->create([
]);
```


### ApiEntitiesProjectDailyStatistic

Create an instance: `$api_entities_project_daily_statistic = $client->ApiEntitiesProjectDailyStatistic();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `fetch` | `array` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesProjectDailyStatistic record (throws on error).
$api_entities_project_daily_statistic = $client->ApiEntitiesProjectDailyStatistic()->load(["project_id" => "project_id"]);
```


### ApiEntitiesProjectExportStatus

Create an instance: `$api_entities_project_export_status = $client->ApiEntitiesProjectExportStatus();`

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
| `id` | `int` |  |
| `link` | `array` |  |
| `name` | `string` |  |
| `name_with_namespace` | `string` |  |
| `path` | `string` |  |
| `path_with_namespace` | `string` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesProjectExportStatus record (throws on error).
$api_entities_project_export_status = $client->ApiEntitiesProjectExportStatus()->load(["project_id" => "project_id"]);
```


### ApiEntitiesProjectGroupLink

Create an instance: `$api_entities_project_group_link = $client->ApiEntitiesProjectGroupLink();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```php
$api_entities_project_group_link = $client->ApiEntitiesProjectGroupLink()->create([
    "project_id" => null, // string
]);
```


### ApiEntitiesProjectHook

Create an instance: `$api_entities_project_hook = $client->ApiEntitiesProjectHook();`

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
| `alert_status` | `mixed` |  |
| `branch_filter_strategy` | `string` |  |
| `confidential_issues_event` | `bool` |  |
| `confidential_note_event` | `bool` |  |
| `created_at` | `string` |  |
| `custom_header` | `array` |  |
| `custom_webhook_template` | `string` |  |
| `deployment_event` | `bool` |  |
| `description` | `string` |  |
| `disabled_until` | `string` |  |
| `emoji_event` | `bool` |  |
| `enable_ssl_verification` | `bool` |  |
| `feature_flag_event` | `bool` |  |
| `id` | `string` |  |
| `issues_event` | `bool` |  |
| `job_event` | `bool` |  |
| `merge_requests_event` | `bool` |  |
| `milestone_event` | `bool` |  |
| `name` | `string` |  |
| `note_event` | `bool` |  |
| `pipeline_event` | `bool` |  |
| `project_id` | `string` |  |
| `push_event` | `bool` |  |
| `push_events_branch_filter` | `string` |  |
| `releases_event` | `bool` |  |
| `repository_update_event` | `bool` |  |
| `resource_access_token_event` | `bool` |  |
| `tag_push_event` | `bool` |  |
| `url` | `string` |  |
| `url_variable` | `array` |  |
| `vulnerability_event` | `bool` |  |
| `wiki_page_event` | `bool` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesProjectHook record (throws on error).
$api_entities_project_hook = $client->ApiEntitiesProjectHook()->load(["id" => "api_entities_project_hook_id", "project_id" => "project_id"]);
```

#### Example: List

```php
// list() returns an array of ApiEntitiesProjectHook records (throws on error).
$api_entities_project_hooks = $client->ApiEntitiesProjectHook()->list();
```

#### Example: Create

```php
$api_entities_project_hook = $client->ApiEntitiesProjectHook()->create([
    "project_id" => null, // string
]);
```


### ApiEntitiesProjectImportStatus

Create an instance: `$api_entities_project_import_status = $client->ApiEntitiesProjectImportStatus();`

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
| `line_number` | `int` |  |
| `relation_name` | `string` |  |
| `source` | `string` |  |

#### Example: List

```php
// list() returns an array of ApiEntitiesProjectImportStatus records (throws on error).
$api_entities_project_import_statuss = $client->ApiEntitiesProjectImportStatus()->list();
```

#### Example: Create

```php
$api_entities_project_import_status = $client->ApiEntitiesProjectImportStatus()->create([
]);
```


### ApiEntitiesProjectJobTokenScope

Create an instance: `$api_entities_project_job_token_scope = $client->ApiEntitiesProjectJobTokenScope();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `inbound_enabled` | `bool` |  |
| `outbound_enabled` | `bool` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesProjectJobTokenScope record (throws on error).
$api_entities_project_job_token_scope = $client->ApiEntitiesProjectJobTokenScope()->load(["project_id" => "project_id"]);
```


### ApiEntitiesProjectRepositoryStorage

Create an instance: `$api_entities_project_repository_storage = $client->ApiEntitiesProjectRepositoryStorage();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `disk_path` | `string` |  |
| `project_id` | `int` |  |
| `repository_storage` | `string` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesProjectRepositoryStorage record (throws on error).
$api_entities_project_repository_storage = $client->ApiEntitiesProjectRepositoryStorage()->load(["project_id" => "project_id"]);
```


### ApiEntitiesProjectSnippet

Create an instance: `$api_entities_project_snippet = $client->ApiEntitiesProjectSnippet();`

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
| `author` | `array` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `file` | `array` |  |
| `file_name` | `string` |  |
| `http_url_to_repo` | `string` |  |
| `id` | `int` |  |
| `imported` | `bool` |  |
| `imported_from` | `string` |  |
| `project_id` | `int` |  |
| `raw_url` | `string` |  |
| `repository_storage` | `string` |  |
| `ssh_url_to_repo` | `string` |  |
| `title` | `string` |  |
| `updated_at` | `string` |  |
| `visibility` | `string` |  |
| `web_url` | `string` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesProjectSnippet record (throws on error).
$api_entities_project_snippet = $client->ApiEntitiesProjectSnippet()->load(["id" => "api_entities_project_snippet_id", "project_id" => "project_id"]);
```

#### Example: List

```php
// list() returns an array of ApiEntitiesProjectSnippet records (throws on error).
$api_entities_project_snippets = $client->ApiEntitiesProjectSnippet()->list();
```

#### Example: Create

```php
$api_entities_project_snippet = $client->ApiEntitiesProjectSnippet()->create([
    "project_id" => null, // string
]);
```


### ApiEntitiesProjectUpload

Create an instance: `$api_entities_project_upload = $client->ApiEntitiesProjectUpload();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```php
$api_entities_project_upload = $client->ApiEntitiesProjectUpload()->create([
    "project_id" => null, // string
]);
```


### ApiEntitiesProjectWithAccess

Create an instance: `$api_entities_project_with_access = $client->ApiEntitiesProjectWithAccess();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_merge_on_skipped_pipeline` | `bool` |  |
| `allow_pipeline_trigger_approve_deployment` | `bool` |  |
| `analytics_access_level` | `string` |  |
| `approvals_before_merge` | `string` |  |
| `archived` | `bool` |  |
| `auto_cancel_pending_pipeline` | `string` |  |
| `auto_devops_deploy_strategy` | `string` |  |
| `auto_devops_enabled` | `bool` |  |
| `auto_duo_code_review_enabled` | `string` |  |
| `autoclose_referenced_issue` | `bool` |  |
| `avatar_url` | `string` |  |
| `build_git_strategy` | `string` |  |
| `build_timeout` | `int` |  |
| `builds_access_level` | `string` |  |
| `can_create_merge_request_in` | `bool` |  |
| `ci_allow_fork_pipelines_to_run_in_parent_project` | `bool` |  |
| `ci_config_path` | `string` |  |
| `ci_default_git_depth` | `int` |  |
| `ci_delete_pipelines_in_second` | `int` |  |
| `ci_forward_deployment_enabled` | `bool` |  |
| `ci_forward_deployment_rollback_allowed` | `bool` |  |
| `ci_id_token_sub_claim_component` | `array` |  |
| `ci_job_token_scope_enabled` | `bool` |  |
| `ci_pipeline_variables_minimum_override_role` | `string` |  |
| `ci_push_repository_for_job_token_allowed` | `bool` |  |
| `ci_restrict_pipeline_cancellation_role` | `string` |  |
| `ci_separated_cache` | `bool` |  |
| `compliance_framework` | `string` |  |
| `container_expiration_policy` | `array` |  |
| `container_registry_access_level` | `string` |  |
| `container_registry_enabled` | `bool` |  |
| `container_registry_image_prefix` | `string` |  |
| `created_at` | `string` |  |
| `creator_id` | `int` |  |
| `custom_attribute` | `array` |  |
| `default_branch` | `string` |  |
| `description` | `string` |  |
| `description_html` | `string` |  |
| `duo_remote_flows_enabled` | `string` |  |
| `emails_disabled` | `bool` |  |
| `emails_enabled` | `bool` |  |
| `empty_repo` | `bool` |  |
| `enforce_auth_checks_on_upload` | `bool` |  |
| `environments_access_level` | `string` |  |
| `external_authorization_classification_label` | `string` |  |
| `feature_flags_access_level` | `string` |  |
| `forked_from_project` | `array` |  |
| `forking_access_level` | `string` |  |
| `forks_count` | `int` |  |
| `group_runners_enabled` | `bool` |  |
| `http_url_to_repo` | `string` |  |
| `id` | `int` |  |
| `import_error` | `string` |  |
| `import_status` | `string` |  |
| `import_type` | `string` |  |
| `import_url` | `string` |  |
| `infrastructure_access_level` | `string` |  |
| `issue_branch_template` | `string` |  |
| `issues_access_level` | `string` |  |
| `issues_enabled` | `bool` |  |
| `issues_template` | `string` |  |
| `jobs_enabled` | `bool` |  |
| `keep_latest_artifact` | `bool` |  |
| `last_activity_at` | `string` |  |
| `lfs_enabled` | `bool` |  |
| `license` | `array` |  |
| `license_url` | `string` |  |
| `link` | `array` |  |
| `marked_for_deletion_at` | `string` |  |
| `marked_for_deletion_on` | `string` |  |
| `max_artifacts_size` | `int` |  |
| `merge_commit_template` | `string` |  |
| `merge_method` | `string` |  |
| `merge_pipelines_enabled` | `string` |  |
| `merge_request_title_regex` | `string` |  |
| `merge_request_title_regex_description` | `string` |  |
| `merge_requests_access_level` | `string` |  |
| `merge_requests_enabled` | `bool` |  |
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
| `mr_default_target_self` | `bool` |  |
| `name` | `string` |  |
| `name_with_namespace` | `string` |  |
| `namespace` | `array` |  |
| `only_allow_merge_if_all_discussions_are_resolved` | `bool` |  |
| `only_allow_merge_if_all_status_checks_passed` | `string` |  |
| `only_allow_merge_if_pipeline_succeed` | `bool` |  |
| `only_mirror_protected_branch` | `string` |  |
| `open_issues_count` | `int` |  |
| `owner` | `array` |  |
| `package_registry_access_level` | `string` |  |
| `packages_enabled` | `bool` |  |
| `pages_access_level` | `string` |  |
| `path` | `string` |  |
| `path_with_namespace` | `string` |  |
| `permission` | `array` |  |
| `pre_receive_secret_detection_enabled` | `bool` |  |
| `prevent_merge_without_jira_issue` | `string` |  |
| `printing_merge_request_link_enabled` | `bool` |  |
| `public_job` | `bool` |  |
| `readme_url` | `string` |  |
| `releases_access_level` | `string` |  |
| `remove_source_branch_after_merge` | `bool` |  |
| `repository_access_level` | `string` |  |
| `repository_object_format` | `string` |  |
| `repository_storage` | `string` |  |
| `request_access_enabled` | `bool` |  |
| `requirements_access_level` | `string` |  |
| `requirements_enabled` | `string` |  |
| `resolve_outdated_diff_discussion` | `bool` |  |
| `resource_group_default_process_mode` | `string` |  |
| `restrict_user_defined_variable` | `bool` |  |
| `runner_token_expiration_interval` | `int` |  |
| `runners_token` | `string` |  |
| `secret_push_protection_enabled` | `bool` |  |
| `security_and_compliance_access_level` | `string` |  |
| `security_and_compliance_enabled` | `string` |  |
| `service_desk_address` | `string` |  |
| `service_desk_enabled` | `bool` |  |
| `shared_runners_enabled` | `bool` |  |
| `shared_with_group` | `array` |  |
| `show_diff_preview_in_email` | `bool` |  |
| `snippets_access_level` | `string` |  |
| `snippets_enabled` | `bool` |  |
| `spp_repository_pipeline_access` | `bool` |  |
| `squash_commit_template` | `string` |  |
| `squash_option` | `string` |  |
| `ssh_url_to_repo` | `string` |  |
| `star_count` | `int` |  |
| `statistic` | `array` |  |
| `suggestion_commit_message` | `string` |  |
| `tag_list` | `array` |  |
| `topic` | `array` |  |
| `updated_at` | `string` |  |
| `visibility` | `string` |  |
| `warn_about_potentially_unwanted_character` | `bool` |  |
| `web_based_commit_signing_enabled` | `string` |  |
| `web_url` | `string` |  |
| `wiki_access_level` | `string` |  |
| `wiki_enabled` | `bool` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesProjectWithAccess record (throws on error).
$api_entities_project_with_access = $client->ApiEntitiesProjectWithAccess()->load(["id" => "api_entities_project_with_access_id"]);
```


### ApiEntitiesProjectsContainerRegistryProtectionRule

Create an instance: `$api_entities_projects_container_registry_protection_rule = $client->ApiEntitiesProjectsContainerRegistryProtectionRule();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `int` |  |
| `minimum_access_level_for_delete` | `string` |  |
| `minimum_access_level_for_push` | `string` |  |
| `project_id` | `int` |  |
| `repository_path_pattern` | `string` |  |

#### Example: List

```php
// list() returns an array of ApiEntitiesProjectsContainerRegistryProtectionRule records (throws on error).
$api_entities_projects_container_registry_protection_rules = $client->ApiEntitiesProjectsContainerRegistryProtectionRule()->list();
```

#### Example: Create

```php
$api_entities_projects_container_registry_protection_rule = $client->ApiEntitiesProjectsContainerRegistryProtectionRule()->create([
    "project_id" => null, // string
]);
```


### ApiEntitiesProjectsPackagesProtectionRule

Create an instance: `$api_entities_projects_packages_protection_rule = $client->ApiEntitiesProjectsPackagesProtectionRule();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `int` |  |
| `minimum_access_level_for_delete` | `string` |  |
| `minimum_access_level_for_push` | `string` |  |
| `package_name_pattern` | `string` |  |
| `package_type` | `string` |  |
| `project_id` | `int` |  |

#### Example: List

```php
// list() returns an array of ApiEntitiesProjectsPackagesProtectionRule records (throws on error).
$api_entities_projects_packages_protection_rules = $client->ApiEntitiesProjectsPackagesProtectionRule()->list();
```

#### Example: Create

```php
$api_entities_projects_packages_protection_rule = $client->ApiEntitiesProjectsPackagesProtectionRule()->create([
    "project_id" => null, // string
]);
```


### ApiEntitiesProjectsTopic

Create an instance: `$api_entities_projects_topic = $client->ApiEntitiesProjectsTopic();`

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

```php
// load() returns the bare ApiEntitiesProjectsTopic record (throws on error).
$api_entities_projects_topic = $client->ApiEntitiesProjectsTopic()->load(["id" => "api_entities_projects_topic_id"]);
```

#### Example: Create

```php
$api_entities_projects_topic = $client->ApiEntitiesProjectsTopic()->create([
]);
```


### ApiEntitiesProtectedBranch

Create an instance: `$api_entities_protected_branch = $client->ApiEntitiesProtectedBranch();`

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
| `allow_force_push` | `bool` |  |
| `code_owner_approval_required` | `bool` |  |
| `id` | `int` |  |
| `inherited` | `bool` |  |
| `merge_access_level` | `array` |  |
| `name` | `string` |  |
| `push_access_level` | `array` |  |
| `unprotect_access_level` | `array` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesProtectedBranch record (throws on error).
$api_entities_protected_branch = $client->ApiEntitiesProtectedBranch()->load(["id" => "api_entities_protected_branch_id", "project_id" => "project_id"]);
```

#### Example: List

```php
// list() returns an array of ApiEntitiesProtectedBranch records (throws on error).
$api_entities_protected_branchs = $client->ApiEntitiesProtectedBranch()->list();
```

#### Example: Create

```php
$api_entities_protected_branch = $client->ApiEntitiesProtectedBranch()->create([
    "project_id" => null, // string
]);
```


### ApiEntitiesProtectedTag

Create an instance: `$api_entities_protected_tag = $client->ApiEntitiesProtectedTag();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `create_access_level` | `array` |  |
| `name` | `string` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesProtectedTag record (throws on error).
$api_entities_protected_tag = $client->ApiEntitiesProtectedTag()->load(["id" => "api_entities_protected_tag_id", "project_id" => "project_id"]);
```

#### Example: List

```php
// list() returns an array of ApiEntitiesProtectedTag records (throws on error).
$api_entities_protected_tags = $client->ApiEntitiesProtectedTag()->list();
```

#### Example: Create

```php
$api_entities_protected_tag = $client->ApiEntitiesProtectedTag()->create([
    "project_id" => null, // string
]);
```


### ApiEntitiesPublicGroupDetail

Create an instance: `$api_entities_public_group_detail = $client->ApiEntitiesPublicGroupDetail();`

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

```php
// list() returns an array of ApiEntitiesPublicGroupDetail records (throws on error).
$api_entities_public_group_details = $client->ApiEntitiesPublicGroupDetail()->list();
```


### ApiEntitiesRelatedIssue

Create an instance: `$api_entities_related_issue = $client->ApiEntitiesRelatedIssue();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assignee` | `array` |  |
| `author` | `array` |  |
| `blocking_issues_count` | `string` |  |
| `closed_at` | `string` |  |
| `closed_by` | `array` |  |
| `confidential` | `bool` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `discussion_locked` | `bool` |  |
| `downvote` | `string` |  |
| `due_date` | `string` |  |
| `epic` | `array` |  |
| `epic_iid` | `string` |  |
| `has_task` | `bool` |  |
| `health_status` | `string` |  |
| `id` | `int` |  |
| `iid` | `int` |  |
| `imported` | `string` |  |
| `imported_from` | `string` |  |
| `issue_link_id` | `string` |  |
| `issue_type` | `string` |  |
| `iteration` | `array` |  |
| `label` | `array` |  |
| `link` | `array` |  |
| `link_created_at` | `string` |  |
| `link_type` | `string` |  |
| `link_updated_at` | `string` |  |
| `merge_requests_count` | `string` |  |
| `milestone` | `array` |  |
| `moved_to_id` | `string` |  |
| `project_id` | `int` |  |
| `reference` | `array` |  |
| `service_desk_reply_to` | `string` |  |
| `severity` | `string` |  |
| `state` | `string` |  |
| `subscribed` | `string` |  |
| `task_completion_status` | `string` |  |
| `task_status` | `string` |  |
| `time_stat` | `array` |  |
| `title` | `string` |  |
| `type` | `string` |  |
| `updated_at` | `string` |  |
| `upvote` | `string` |  |
| `user_notes_count` | `string` |  |
| `web_url` | `string` |  |
| `weight` | `string` |  |

#### Example: List

```php
// list() returns an array of ApiEntitiesRelatedIssue records (throws on error).
$api_entities_related_issues = $client->ApiEntitiesRelatedIssue()->list();
```


### ApiEntitiesRelationImportTracker

Create an instance: `$api_entities_relation_import_tracker = $client->ApiEntitiesRelationImportTracker();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```php
$api_entities_relation_import_tracker = $client->ApiEntitiesRelationImportTracker()->create([
]);
```


### ApiEntitiesRelease

Create an instance: `$api_entities_release = $client->ApiEntitiesRelease();`

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
| `asset` | `array` |  |
| `author` | `array` |  |
| `commit` | `array` |  |
| `commit_path` | `string` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `description_html` | `string` |  |
| `evidence` | `array` |  |
| `link` | `array` |  |
| `milestone` | `array` |  |
| `name` | `string` |  |
| `released_at` | `string` |  |
| `tag_name` | `string` |  |
| `tag_path` | `string` |  |
| `upcoming_release` | `bool` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesRelease record (throws on error).
$api_entities_release = $client->ApiEntitiesRelease()->load(["id" => "api_entities_release_id", "project_id" => "project_id"]);
```

#### Example: List

```php
// list() returns an array of ApiEntitiesRelease records (throws on error).
$api_entities_releases = $client->ApiEntitiesRelease()->list();
```

#### Example: Create

```php
$api_entities_release = $client->ApiEntitiesRelease()->create([
    "project_id" => null, // string
]);
```


### ApiEntitiesReleasesLink

Create an instance: `$api_entities_releases_link = $client->ApiEntitiesReleasesLink();`

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
| `id` | `int` |  |
| `link_type` | `string` |  |
| `name` | `string` |  |
| `url` | `string` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesReleasesLink record (throws on error).
$api_entities_releases_link = $client->ApiEntitiesReleasesLink()->load(["id" => "api_entities_releases_link_id", "project_id" => "project_id", "release_id" => "release_id"]);
```

#### Example: List

```php
// list() returns an array of ApiEntitiesReleasesLink records (throws on error).
$api_entities_releases_links = $client->ApiEntitiesReleasesLink()->list();
```

#### Example: Create

```php
$api_entities_releases_link = $client->ApiEntitiesReleasesLink()->create([
    "project_id" => null, // string
    "release_id" => null, // string
]);
```


### ApiEntitiesRemoteMirror

Create an instance: `$api_entities_remote_mirror = $client->ApiEntitiesRemoteMirror();`

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
| `enabled` | `bool` |  |
| `host_key` | `array` |  |
| `id` | `int` |  |
| `keep_divergent_ref` | `bool` |  |
| `last_error` | `int` |  |
| `last_successful_update_at` | `string` |  |
| `last_update_at` | `string` |  |
| `last_update_started_at` | `string` |  |
| `mirror_branch_regex` | `string` |  |
| `only_protected_branch` | `bool` |  |
| `update_status` | `string` |  |
| `url` | `string` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesRemoteMirror record (throws on error).
$api_entities_remote_mirror = $client->ApiEntitiesRemoteMirror()->load(["id" => "api_entities_remote_mirror_id", "project_id" => "project_id"]);
```

#### Example: List

```php
// list() returns an array of ApiEntitiesRemoteMirror records (throws on error).
$api_entities_remote_mirrors = $client->ApiEntitiesRemoteMirror()->list();
```

#### Example: Create

```php
$api_entities_remote_mirror = $client->ApiEntitiesRemoteMirror()->create([
    "project_id" => null, // string
]);
```


### ApiEntitiesRepositoryHealth

Create an instance: `$api_entities_repository_health = $client->ApiEntitiesRepositoryHealth();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alternate` | `array` |  |
| `bitmap` | `array` |  |
| `commit_graph` | `array` |  |
| `is_object_pool` | `bool` |  |
| `last_full_repack` | `array` |  |
| `multi_pack_index` | `array` |  |
| `multi_pack_index_bitmap` | `array` |  |
| `object` | `array` |  |
| `reference` | `array` |  |
| `size` | `int` |  |
| `updated_at` | `string` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesRepositoryHealth record (throws on error).
$api_entities_repository_health = $client->ApiEntitiesRepositoryHealth()->load(["project_id" => "project_id"]);
```


### ApiEntitiesResourceAccessTokenWithToken

Create an instance: `$api_entities_resource_access_token_with_token = $client->ApiEntitiesResourceAccessTokenWithToken();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `access_level` | `int` |  |
| `active` | `bool` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `expires_at` | `string` |  |
| `id` | `int` |  |
| `last_used_at` | `string` |  |
| `name` | `string` |  |
| `resource_id` | `int` |  |
| `resource_type` | `string` |  |
| `revoked` | `bool` |  |
| `scope` | `array` |  |
| `token` | `string` |  |
| `user_id` | `int` |  |

#### Example: Create

```php
$api_entities_resource_access_token_with_token = $client->ApiEntitiesResourceAccessTokenWithToken()->create([
]);
```


### ApiEntitiesResourceMilestoneEvent

Create an instance: `$api_entities_resource_milestone_event = $client->ApiEntitiesResourceMilestoneEvent();`

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
| `id` | `int` |  |
| `milestone` | `array` |  |
| `resource_id` | `int` |  |
| `resource_type` | `string` |  |
| `state` | `string` |  |
| `user` | `array` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesResourceMilestoneEvent record (throws on error).
$api_entities_resource_milestone_event = $client->ApiEntitiesResourceMilestoneEvent()->load(["id" => "api_entities_resource_milestone_event_id", "project_id" => "project_id"]);
```

#### Example: List

```php
// list() returns an array of ApiEntitiesResourceMilestoneEvent records (throws on error).
$api_entities_resource_milestone_events = $client->ApiEntitiesResourceMilestoneEvent()->list();
```


### ApiEntitiesSnippet

Create an instance: `$api_entities_snippet = $client->ApiEntitiesSnippet();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author` | `array` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `file` | `array` |  |
| `file_name` | `string` |  |
| `http_url_to_repo` | `string` |  |
| `id` | `int` |  |
| `imported` | `bool` |  |
| `imported_from` | `string` |  |
| `project_id` | `int` |  |
| `raw_url` | `string` |  |
| `repository_storage` | `string` |  |
| `ssh_url_to_repo` | `string` |  |
| `title` | `string` |  |
| `updated_at` | `string` |  |
| `visibility` | `string` |  |
| `web_url` | `string` |  |

#### Example: List

```php
// list() returns an array of ApiEntitiesSnippet records (throws on error).
$api_entities_snippets = $client->ApiEntitiesSnippet()->list();
```


### ApiEntitiesSshKeyWithUser

Create an instance: `$api_entities_ssh_key_with_user = $client->ApiEntitiesSshKeyWithUser();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `expires_at` | `string` |  |
| `id` | `int` |  |
| `key` | `string` |  |
| `last_used_at` | `string` |  |
| `title` | `string` |  |
| `usage_type` | `string` |  |
| `user` | `array` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesSshKeyWithUser record (throws on error).
$api_entities_ssh_key_with_user = $client->ApiEntitiesSshKeyWithUser()->load(["id" => "api_entities_ssh_key_with_user_id"]);
```


### ApiEntitiesSuggestion

Create an instance: `$api_entities_suggestion = $client->ApiEntitiesSuggestion();`

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

Create an instance: `$api_entities_system_broadcast_message = $client->ApiEntitiesSystemBroadcastMessage();`

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
| `active` | `bool` |  |
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

```php
// load() returns the bare ApiEntitiesSystemBroadcastMessage record (throws on error).
$api_entities_system_broadcast_message = $client->ApiEntitiesSystemBroadcastMessage()->load(["id" => "api_entities_system_broadcast_message_id"]);
```

#### Example: Create

```php
$api_entities_system_broadcast_message = $client->ApiEntitiesSystemBroadcastMessage()->create([
]);
```


### ApiEntitiesTag

Create an instance: `$api_entities_tag = $client->ApiEntitiesTag();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `commit` | `array` |  |
| `created_at` | `string` |  |
| `message` | `string` |  |
| `name` | `string` |  |
| `protected` | `bool` |  |
| `release` | `array` |  |
| `target` | `string` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesTag record (throws on error).
$api_entities_tag = $client->ApiEntitiesTag()->load(["id" => "api_entities_tag_id", "project_id" => "project_id"]);
```

#### Example: List

```php
// list() returns an array of ApiEntitiesTag records (throws on error).
$api_entities_tags = $client->ApiEntitiesTag()->list();
```

#### Example: Create

```php
$api_entities_tag = $client->ApiEntitiesTag()->create([
    "project_id" => null, // string
]);
```


### ApiEntitiesTagSignature

Create an instance: `$api_entities_tag_signature = $client->ApiEntitiesTagSignature();`

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

```php
// load() returns the bare ApiEntitiesTagSignature record (throws on error).
$api_entities_tag_signature = $client->ApiEntitiesTagSignature()->load(["project_id" => "project_id", "tag_name" => "tag_name"]);
```


### ApiEntitiesTemplatesList

Create an instance: `$api_entities_templates_list = $client->ApiEntitiesTemplatesList();`

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

```php
// load() returns the bare ApiEntitiesTemplatesList record (throws on error).
$api_entities_templates_list = $client->ApiEntitiesTemplatesList()->load(["project_id" => "project_id", "type" => "type"]);
```


### ApiEntitiesTerraformModuleVersion

Create an instance: `$api_entities_terraform_module_version = $client->ApiEntitiesTerraformModuleVersion();`

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

```php
// load() returns the bare ApiEntitiesTerraformModuleVersion record (throws on error).
$api_entities_terraform_module_version = $client->ApiEntitiesTerraformModuleVersion()->load(["module_name" => "module_name", "module_system" => "module_system"]);
```

#### Example: List

```php
// list() returns an array of ApiEntitiesTerraformModuleVersion records (throws on error).
$api_entities_terraform_module_versions = $client->ApiEntitiesTerraformModuleVersion()->list();
```


### ApiEntitiesTreeObject

Create an instance: `$api_entities_tree_object = $client->ApiEntitiesTreeObject();`

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

```php
// load() returns the bare ApiEntitiesTreeObject record (throws on error).
$api_entities_tree_object = $client->ApiEntitiesTreeObject()->load(["project_id" => "project_id"]);
```


### ApiEntitiesTrigger

Create an instance: `$api_entities_trigger = $client->ApiEntitiesTrigger();`

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
| `id` | `int` |  |
| `last_used` | `string` |  |
| `owner` | `array` |  |
| `token` | `string` |  |
| `updated_at` | `string` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesTrigger record (throws on error).
$api_entities_trigger = $client->ApiEntitiesTrigger()->load(["id" => "api_entities_trigger_id", "project_id" => "project_id"]);
```

#### Example: List

```php
// list() returns an array of ApiEntitiesTrigger records (throws on error).
$api_entities_triggers = $client->ApiEntitiesTrigger()->list();
```

#### Example: Create

```php
$api_entities_trigger = $client->ApiEntitiesTrigger()->create([
    "project_id" => null, // string
]);
```


### ApiEntitiesUserAgentDetail

Create an instance: `$api_entities_user_agent_detail = $client->ApiEntitiesUserAgentDetail();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `akismet_submitted` | `bool` |  |
| `ip_address` | `string` |  |
| `user_agent` | `string` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesUserAgentDetail record (throws on error).
$api_entities_user_agent_detail = $client->ApiEntitiesUserAgentDetail()->load();
```


### ApiEntitiesUserCount

Create an instance: `$api_entities_user_count = $client->ApiEntitiesUserCount();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assigned_issue` | `int` |  |
| `assigned_merge_request` | `int` |  |
| `merge_request` | `int` |  |
| `review_requested_merge_request` | `int` |  |
| `todo` | `int` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesUserCount record (throws on error).
$api_entities_user_count = $client->ApiEntitiesUserCount()->load();
```


### ApiEntitiesUserPublic

Create an instance: `$api_entities_user_public = $client->ApiEntitiesUserPublic();`

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
| `can_create_group` | `bool` |  |
| `can_create_project` | `bool` |  |
| `color_scheme_id` | `int` |  |
| `commit_email` | `string` |  |
| `confirmed_at` | `string` |  |
| `created_at` | `string` |  |
| `current_sign_in_at` | `string` |  |
| `custom_attribute` | `array` |  |
| `discord` | `string` |  |
| `email` | `string` |  |
| `external` | `string` |  |
| `extra_shared_runners_minutes_limit` | `string` |  |
| `follower` | `string` |  |
| `following` | `string` |  |
| `github` | `string` |  |
| `id` | `int` |  |
| `identity` | `array` |  |
| `is_followed` | `bool` |  |
| `job_title` | `string` |  |
| `key` | `string` |  |
| `last_activity_on` | `string` |  |
| `last_sign_in_at` | `string` |  |
| `linkedin` | `string` |  |
| `local_time` | `string` |  |
| `location` | `string` |  |
| `locked` | `bool` |  |
| `name` | `string` |  |
| `organization` | `string` |  |
| `preferred_language` | `string` |  |
| `private_profile` | `bool` |  |
| `projects_limit` | `int` |  |
| `pronoun` | `string` |  |
| `public_email` | `string` |  |
| `scim_identity` | `array` |  |
| `shared_runners_minutes_limit` | `string` |  |
| `state` | `string` |  |
| `theme_id` | `int` |  |
| `twitter` | `string` |  |
| `two_factor_enabled` | `bool` |  |
| `username` | `string` |  |
| `value` | `string` |  |
| `web_url` | `string` |  |
| `website_url` | `string` |  |
| `work_information` | `string` |  |

#### Example: List

```php
// list() returns an array of ApiEntitiesUserPublic records (throws on error).
$api_entities_user_publics = $client->ApiEntitiesUserPublic()->list();
```


### ApiEntitiesUserWithAdmin

Create an instance: `$api_entities_user_with_admin = $client->ApiEntitiesUserWithAdmin();`

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

```php
// list() returns an array of ApiEntitiesUserWithAdmin records (throws on error).
$api_entities_user_with_admins = $client->ApiEntitiesUserWithAdmin()->list();
```


### ApiEntitiesWikiAttachment

Create an instance: `$api_entities_wiki_attachment = $client->ApiEntitiesWikiAttachment();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```php
$api_entities_wiki_attachment = $client->ApiEntitiesWikiAttachment()->create([
]);
```


### ApiEntitiesWikiPage

Create an instance: `$api_entities_wiki_page = $client->ApiEntitiesWikiPage();`

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
| `front_matter` | `array` |  |
| `slug` | `string` |  |
| `title` | `string` |  |
| `wiki_page_meta_id` | `int` |  |

#### Example: Load

```php
// load() returns the bare ApiEntitiesWikiPage record (throws on error).
$api_entities_wiki_page = $client->ApiEntitiesWikiPage()->load(["slug" => "slug"]);
```

#### Example: Create

```php
$api_entities_wiki_page = $client->ApiEntitiesWikiPage()->create([
]);
```


### ApiEntitiesWikiPageBasic

Create an instance: `$api_entities_wiki_page_basic = $client->ApiEntitiesWikiPageBasic();`

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
| `wiki_page_meta_id` | `int` |  |

#### Example: List

```php
// list() returns an array of ApiEntitiesWikiPageBasic records (throws on error).
$api_entities_wiki_page_basics = $client->ApiEntitiesWikiPageBasic()->list();
```


### Application

Create an instance: `$application = $client->Application();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### AwardEmoji

Create an instance: `$award_emoji = $client->AwardEmoji();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### Badge

Create an instance: `$badge = $client->Badge();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### Branch

Create an instance: `$branch = $client->Branch();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### CargoPackage

Create an instance: `$cargo_package = $client->CargoPackage();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```php
// load() returns the bare CargoPackage record (throws on error).
$cargo_package = $client->CargoPackage()->load(["project_id" => "project_id"]);
```


### CiVariable

Create an instance: `$ci_variable = $client->CiVariable();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### Cluster

Create an instance: `$cluster = $client->Cluster();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### ClusterAgent

Create an instance: `$cluster_agent = $client->ClusterAgent();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### Composer

Create an instance: `$composer = $client->Composer();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```php
$composer = $client->Composer()->create([
    "project_id" => null, // string
]);
```


### ComposerPackage

Create an instance: `$composer_package = $client->ComposerPackage();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```php
// load() returns the bare ComposerPackage record (throws on error).
$composer_package = $client->ComposerPackage()->load();
```


### Conan

Create an instance: `$conan = $client->Conan();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### ConanPackage

Create an instance: `$conan_package = $client->ConanPackage();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Example: Load

```php
// load() returns the bare ConanPackage record (throws on error).
$conan_package = $client->ConanPackage()->load(["id" => "conan_package_id"]);
```


### ContainerRegistry

Create an instance: `$container_registry = $client->ContainerRegistry();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### ContainerRegistryEvent

Create an instance: `$container_registry_event = $client->ContainerRegistryEvent();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```php
$container_registry_event = $client->ContainerRegistryEvent()->create([
]);
```


### CustomAttribute

Create an instance: `$custom_attribute = $client->CustomAttribute();`

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

```php
// load() returns the bare CustomAttribute record (throws on error).
$custom_attribute = $client->CustomAttribute()->load(["id" => "custom_attribute_id"]);
```


### Debian

Create an instance: `$debian = $client->Debian();`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |


### DebianDistribution

Create an instance: `$debian_distribution = $client->DebianDistribution();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### DebianPackage

Create an instance: `$debian_package = $client->DebianPackage();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Example: Load

```php
// load() returns the bare DebianPackage record (throws on error).
$debian_package = $client->DebianPackage()->load(["id" => "debian_package_id"]);
```


### DependencyProxy

Create an instance: `$dependency_proxy = $client->DependencyProxy();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### DeployKey

Create an instance: `$deploy_key = $client->DeployKey();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### DeployToken

Create an instance: `$deploy_token = $client->DeployToken();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### Deployment

Create an instance: `$deployment = $client->Deployment();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### EeApiEntitiesApprovalState

Create an instance: `$ee_api_entities_approval_state = $client->EeApiEntitiesApprovalState();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```php
$ee_api_entities_approval_state = $client->EeApiEntitiesApprovalState()->create([
    "merge_request_id" => null, // string
    "project_id" => null, // string
]);
```


### EeApiEntitiesAuditEvent

Create an instance: `$ee_api_entities_audit_event = $client->EeApiEntitiesAuditEvent();`

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

```php
// load() returns the bare EeApiEntitiesAuditEvent record (throws on error).
$ee_api_entities_audit_event = $client->EeApiEntitiesAuditEvent()->load(["id" => "ee_api_entities_audit_event_id"]);
```

#### Example: List

```php
// list() returns an array of EeApiEntitiesAuditEvent records (throws on error).
$ee_api_entities_audit_events = $client->EeApiEntitiesAuditEvent()->list();
```


### EeApiEntitiesBillableMembership

Create an instance: `$ee_api_entities_billable_membership = $client->EeApiEntitiesBillableMembership();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `access_level` | `array` |  |
| `created_at` | `string` |  |
| `expires_at` | `string` |  |
| `id` | `string` |  |
| `source_full_name` | `string` |  |
| `source_id` | `string` |  |
| `source_members_url` | `string` |  |

#### Example: Load

```php
// load() returns the bare EeApiEntitiesBillableMembership record (throws on error).
$ee_api_entities_billable_membership = $client->EeApiEntitiesBillableMembership()->load(["billable_member_id" => "billable_member_id", "group_id" => "group_id"]);
```


### EeApiEntitiesGeoNodeStatus

Create an instance: `$ee_api_entities_geo_node_status = $client->EeApiEntitiesGeoNodeStatus();`

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
| `link` | `array` |  |
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
| `namespace` | `array` |  |
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
| `storage_shard` | `array` |  |
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

```php
$ee_api_entities_geo_node_status = $client->EeApiEntitiesGeoNodeStatus()->create([
]);
```


### EeApiEntitiesGeoPipelineRef

Create an instance: `$ee_api_entities_geo_pipeline_ref = $client->EeApiEntitiesGeoPipelineRef();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `pipeline_ref` | `array` |  |

#### Example: List

```php
// list() returns an array of EeApiEntitiesGeoPipelineRef records (throws on error).
$ee_api_entities_geo_pipeline_refs = $client->EeApiEntitiesGeoPipelineRef()->list();
```


### EeApiEntitiesIssuableMetricImage

Create an instance: `$ee_api_entities_issuable_metric_image = $client->EeApiEntitiesIssuableMetricImage();`

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

```php
$ee_api_entities_issuable_metric_image = $client->EeApiEntitiesIssuableMetricImage()->create([
    "issue_id" => null, // string
    "project_id" => null, // string
]);
```


### EeApiEntitiesMergeRequestApprovalState

Create an instance: `$ee_api_entities_merge_request_approval_state = $client->EeApiEntitiesMergeRequestApprovalState();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `approvals_required` | `int` |  |
| `approved` | `bool` |  |
| `approved_by` | `array` |  |
| `code_owner` | `bool` |  |
| `contains_hidden_group` | `bool` |  |
| `eligible_approver` | `array` |  |
| `group` | `array` |  |
| `id` | `int` |  |
| `name` | `string` |  |
| `overridden` | `bool` |  |
| `report_type` | `string` |  |
| `rule_type` | `string` |  |
| `section` | `string` |  |
| `source_rule` | `array` |  |
| `user` | `array` |  |

#### Example: List

```php
// list() returns an array of EeApiEntitiesMergeRequestApprovalState records (throws on error).
$ee_api_entities_merge_request_approval_states = $client->EeApiEntitiesMergeRequestApprovalState()->list();
```


### EeApiEntitiesSshCertificate

Create an instance: `$ee_api_entities_ssh_certificate = $client->EeApiEntitiesSshCertificate();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `id` | `int` |  |
| `key` | `string` |  |
| `title` | `string` |  |

#### Example: List

```php
// list() returns an array of EeApiEntitiesSshCertificate records (throws on error).
$ee_api_entities_ssh_certificates = $client->EeApiEntitiesSshCertificate()->list();
```

#### Example: Create

```php
$ee_api_entities_ssh_certificate = $client->EeApiEntitiesSshCertificate()->create([
    "group_id" => null, // string
]);
```


### Environment

Create an instance: `$environment = $client->Environment();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |

#### Example: Create

```php
$environment = $client->Environment()->create([
    "project_id" => null, // string
]);
```


### ErrorTrackingClientKey

Create an instance: `$error_tracking_client_key = $client->ErrorTrackingClientKey();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### Feature

Create an instance: `$feature = $client->Feature();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### FeatureFlag

Create an instance: `$feature_flag = $client->FeatureFlag();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Example: Load

```php
// load() returns the bare FeatureFlag record (throws on error).
$feature_flag = $client->FeatureFlag()->load(["project_id" => "project_id"]);
```

#### Example: Create

```php
$feature_flag = $client->FeatureFlag()->create([
    "unleash_id" => null, // string
]);
```


### FeatureFlagsUserList

Create an instance: `$feature_flags_user_list = $client->FeatureFlagsUserList();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### FreezePeriod

Create an instance: `$freeze_period = $client->FreezePeriod();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### GenericPackage

Create an instance: `$generic_package = $client->GenericPackage();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Example: Load

```php
// load() returns the bare GenericPackage record (throws on error).
$generic_package = $client->GenericPackage()->load(["file_name" => "file_name", "generic_id" => "generic_id", "project_id" => "project_id"]);
```


### Geo

Create an instance: `$geo = $client->Geo();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```php
// load() returns the bare Geo record (throws on error).
$geo = $client->Geo()->load(["replicable_id" => "replicable_id", "replicable_name" => "replicable_name"]);
```

#### Example: Create

```php
$geo = $client->Geo()->create([
]);
```


### GoProxy

Create an instance: `$go_proxy = $client->GoProxy();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```php
// load() returns the bare GoProxy record (throws on error).
$go_proxy = $client->GoProxy()->load(["project_id" => "project_id"]);
```


### Group

Create an instance: `$group = $client->Group();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Example: Load

```php
// load() returns the bare Group record (throws on error).
$group = $client->Group()->load(["id" => "group_id"]);
```

#### Example: Create

```php
$group = $client->Group()->create([
    "id" => null, // string
]);
```


### GroupAvatar

Create an instance: `$group_avatar = $client->GroupAvatar();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```php
// load() returns the bare GroupAvatar record (throws on error).
$group_avatar = $client->GroupAvatar()->load(["id" => "group_avatar_id"]);
```


### GroupExport

Create an instance: `$group_export = $client->GroupExport();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```php
// load() returns the bare GroupExport record (throws on error).
$group_export = $client->GroupExport()->load(["group_id" => "group_id"]);
```

#### Example: Create

```php
$group_export = $client->GroupExport()->create([
    "id" => null, // string
]);
```


### GroupImport

Create an instance: `$group_import = $client->GroupImport();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```php
$group_import = $client->GroupImport()->create([
]);
```


### HelmPackage

Create an instance: `$helm_package = $client->HelmPackage();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```php
// load() returns the bare HelmPackage record (throws on error).
$helm_package = $client->HelmPackage()->load(["project_id" => "project_id"]);
```

#### Example: Create

```php
$helm_package = $client->HelmPackage()->create([
    "project_id" => null, // string
]);
```


### Hook

Create an instance: `$hook = $client->Hook();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Example: Create

```php
$hook = $client->Hook()->create([
    "id" => null, // string
]);
```


### Import

Create an instance: `$import = $client->Import();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```php
$import = $client->Import()->create([
]);
```


### Integration

Create an instance: `$integration = $client->Integration();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |

#### Example: Create

```php
$integration = $client->Integration()->create([
]);
```


### Invitation

Create an instance: `$invitation = $client->Invitation();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### IssueLink

Create an instance: `$issue_link = $client->IssueLink();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### IssuesStatistic

Create an instance: `$issues_statistic = $client->IssuesStatistic();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```php
// load() returns the bare IssuesStatistic record (throws on error).
$issues_statistic = $client->IssuesStatistic()->load();
```


### Job

Create an instance: `$job = $client->Job();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Example: Load

```php
// load() returns the bare Job record (throws on error).
$job = $client->Job()->load(["id" => "job_id"]);
```

#### Example: Create

```php
$job = $client->Job()->create([
]);
```


### MavenPackage

Create an instance: `$maven_package = $client->MavenPackage();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Example: Load

```php
// load() returns the bare MavenPackage record (throws on error).
$maven_package = $client->MavenPackage()->load(["file_name" => "file_name"]);
```


### Member

Create an instance: `$member = $client->Member();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### MergeRequest

Create an instance: `$merge_request = $client->MergeRequest();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Example: Load

```php
// load() returns the bare MergeRequest record (throws on error).
$merge_request = $client->MergeRequest()->load(["id" => "merge_request_id", "project_id" => "project_id"]);
```


### Metadata

Create an instance: `$metadata = $client->Metadata();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `enterprise` | `bool` |  |
| `kas` | `array` |  |
| `revision` | `string` |  |
| `version` | `string` |  |

#### Example: Load

```php
// load() returns the bare Metadata record (throws on error).
$metadata = $client->Metadata()->load();
```


### Migration

Create an instance: `$migration = $client->Migration();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```php
$migration = $client->Migration()->create([
    "timestamp" => null, // mixed
]);
```


### MlModelRegistry

Create an instance: `$ml_model_registry = $client->MlModelRegistry();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Example: Load

```php
// load() returns the bare MlModelRegistry record (throws on error).
$ml_model_registry = $client->MlModelRegistry()->load(["file_name" => "file_name", "ml_model_id" => "ml_model_id", "project_id" => "project_id"]);
```


### Namespace

Create an instance: `$namespace = $client->Namespace();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### Npm

Create an instance: `$npm = $client->Npm();`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |


### NpmPackage

Create an instance: `$npm_package = $client->NpmPackage();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Example: Load

```php
// load() returns the bare NpmPackage record (throws on error).
$npm_package = $client->NpmPackage()->load(["project_id" => "project_id"]);
```

#### Example: Create

```php
$npm_package = $client->NpmPackage()->create([
]);
```


### Nuget

Create an instance: `$nuget = $client->Nuget();`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |


### NugetPackage

Create an instance: `$nuget_package = $client->NugetPackage();`

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
| `catalog_entry` | `array` |  |
| `count` | `int` |  |
| `id` | `string` |  |
| `item` | `array` |  |
| `lower` | `string` |  |
| `package_content` | `string` |  |
| `upper` | `string` |  |

#### Example: Load

```php
// load() returns the bare NugetPackage record (throws on error).
$nuget_package = $client->NugetPackage()->load();
```

#### Example: List

```php
// list() returns an array of NugetPackage records (throws on error).
$nuget_packages = $client->NugetPackage()->list();
```


### PackageFile

Create an instance: `$package_file = $client->PackageFile();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Example: Load

```php
// load() returns the bare PackageFile record (throws on error).
$package_file = $client->PackageFile()->load(["id" => "package_file_id", "package_id" => "package_id", "project_id" => "project_id"]);
```


### Page

Create an instance: `$page = $client->Page();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Example: Load

```php
// load() returns the bare Page record (throws on error).
$page = $client->Page()->load(["project_id" => "project_id"]);
```


### Participant

Create an instance: `$participant = $client->Participant();`

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

```php
// list() returns an array of Participant records (throws on error).
$participants = $client->Participant()->list();
```


### PersonalAccessToken

Create an instance: `$personal_access_token = $client->PersonalAccessToken();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### Project

Create an instance: `$project = $client->Project();`

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
| `coverage` | `float` |  |
| `created_at` | `string` |  |
| `detailed_status` | `array` |  |
| `duration` | `int` |  |
| `finished_at` | `string` |  |
| `id` | `int` |  |
| `iid` | `int` |  |
| `name` | `string` |  |
| `project_id` | `int` |  |
| `queued_duration` | `int` |  |
| `ref` | `string` |  |
| `sha` | `string` |  |
| `source` | `string` |  |
| `started_at` | `string` |  |
| `status` | `string` |  |
| `tag` | `bool` |  |
| `updated_at` | `string` |  |
| `user` | `array` |  |
| `web_url` | `string` |  |
| `yaml_error` | `string` |  |

#### Example: Load

```php
// load() returns the bare Project record (throws on error).
$project = $client->Project()->load(["id" => "project_id"]);
```

#### Example: Create

```php
$project = $client->Project()->create([
    "id" => null, // string
]);
```


### ProjectAvatar

Create an instance: `$project_avatar = $client->ProjectAvatar();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```php
// load() returns the bare ProjectAvatar record (throws on error).
$project_avatar = $client->ProjectAvatar()->load(["id" => "project_avatar_id"]);
```


### ProjectEntity

Create an instance: `$project_entity = $client->ProjectEntity();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```php
$project_entity = $client->ProjectEntity()->create([
]);
```


### ProjectExport

Create an instance: `$project_export = $client->ProjectExport();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```php
// load() returns the bare ProjectExport record (throws on error).
$project_export = $client->ProjectExport()->load(["project_id" => "project_id"]);
```

#### Example: Create

```php
$project_export = $client->ProjectExport()->create([
    "id" => null, // string
]);
```


### ProjectHook

Create an instance: `$project_hook = $client->ProjectHook();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### ProjectImport

Create an instance: `$project_import = $client->ProjectImport();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```php
$project_import = $client->ProjectImport()->create([
]);
```


### ProjectImportEntity

Create an instance: `$project_import_entity = $client->ProjectImportEntity();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `forked` | `bool` |  |
| `full_name` | `string` |  |
| `full_path` | `string` |  |
| `human_import_status_name` | `string` |  |
| `id` | `int` |  |
| `import_error` | `string` |  |
| `import_source` | `string` |  |
| `import_status` | `string` |  |
| `import_warning` | `string` |  |
| `name` | `string` |  |
| `provider_link` | `string` |  |
| `refs_url` | `string` |  |
| `relation_type` | `string` |  |

#### Example: Create

```php
$project_import_entity = $client->ProjectImportEntity()->create([
]);
```


### ProjectPackage

Create an instance: `$project_package = $client->ProjectPackage();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### ProjectSnippet

Create an instance: `$project_snippet = $client->ProjectSnippet();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### ProjectsJobTokenScope

Create an instance: `$projects_job_token_scope = $client->ProjectsJobTokenScope();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |


### ProtectedTag

Create an instance: `$protected_tag = $client->ProtectedTag();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### Pypi

Create an instance: `$pypi = $client->Pypi();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```php
$pypi = $client->Pypi()->create([
    "project_id" => null, // string
]);
```


### PypiPackage

Create an instance: `$pypi_package = $client->PypiPackage();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```php
// load() returns the bare PypiPackage record (throws on error).
$pypi_package = $client->PypiPackage()->load();
```

#### Example: Create

```php
$pypi_package = $client->PypiPackage()->create([
    "project_id" => null, // string
]);
```


### Release

Create an instance: `$release = $client->Release();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Example: Load

```php
// load() returns the bare Release record (throws on error).
$release = $client->Release()->load(["project_id" => "project_id"]);
```


### ReleaseLink

Create an instance: `$release_link = $client->ReleaseLink();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### RemoteMirror

Create an instance: `$remote_mirror = $client->RemoteMirror();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Example: Load

```php
// load() returns the bare RemoteMirror record (throws on error).
$remote_mirror = $client->RemoteMirror()->load(["id" => "remote_mirror_id", "project_id" => "project_id"]);
```

#### Example: Create

```php
$remote_mirror = $client->RemoteMirror()->create([
    "id" => null, // string
    "project_id" => null, // string
]);
```


### Rpm

Create an instance: `$rpm = $client->Rpm();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```php
$rpm = $client->Rpm()->create([
    "project_id" => null, // string
]);
```


### RpmPackage

Create an instance: `$rpm_package = $client->RpmPackage();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```php
// load() returns the bare RpmPackage record (throws on error).
$rpm_package = $client->RpmPackage()->load(["project_id" => "project_id"]);
```

#### Example: Create

```php
$rpm_package = $client->RpmPackage()->create([
    "project_id" => null, // string
]);
```


### Rubygem

Create an instance: `$rubygem = $client->Rubygem();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```php
// load() returns the bare Rubygem record (throws on error).
$rubygem = $client->Rubygem()->load(["id" => "rubygem_id", "project_id" => "project_id"]);
```


### RubygemPackage

Create an instance: `$rubygem_package = $client->RubygemPackage();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```php
// load() returns the bare RubygemPackage record (throws on error).
$rubygem_package = $client->RubygemPackage()->load(["project_id" => "project_id"]);
```

#### Example: Create

```php
$rubygem_package = $client->RubygemPackage()->create([
    "project_id" => null, // string
]);
```


### Runner

Create an instance: `$runner = $client->Runner();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |

#### Example: Create

```php
$runner = $client->Runner()->create([
]);
```


### Search

Create an instance: `$search = $client->Search();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```php
// load() returns the bare Search record (throws on error).
$search = $client->Search()->load();
```


### SecureFile

Create an instance: `$secure_file = $client->SecureFile();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Example: Load

```php
// load() returns the bare SecureFile record (throws on error).
$secure_file = $client->SecureFile()->load(["id" => "secure_file_id", "project_id" => "project_id"]);
```


### Slack

Create an instance: `$slack = $client->Slack();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```php
$slack = $client->Slack()->create([
]);
```


### Snippet

Create an instance: `$snippet = $client->Snippet();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Example: Load

```php
// load() returns the bare Snippet record (throws on error).
$snippet = $client->Snippet()->load(["id" => "snippet_id", "file_id" => "file_id", "file_path" => "file_path"]);
```


### Starrer

Create an instance: `$starrer = $client->Starrer();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_path` | `string` |  |
| `avatar_url` | `string` |  |
| `custom_attribute` | `array` |  |
| `id` | `int` |  |
| `locked` | `bool` |  |
| `name` | `string` |  |
| `public_email` | `string` |  |
| `state` | `string` |  |
| `username` | `string` |  |
| `web_url` | `string` |  |

#### Example: List

```php
// list() returns an array of Starrer records (throws on error).
$starrers = $client->Starrer()->list();
```


### SystemHook

Create an instance: `$system_hook = $client->SystemHook();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### Tag

Create an instance: `$tag = $client->Tag();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### TerraformRegistry

Create an instance: `$terraform_registry = $client->TerraformRegistry();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Example: Load

```php
// load() returns the bare TerraformRegistry record (throws on error).
$terraform_registry = $client->TerraformRegistry()->load(["id" => "terraform_registry_id", "module_system" => "module_system"]);
```


### TerraformState

Create an instance: `$terraform_state = $client->TerraformState();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Example: Load

```php
// load() returns the bare TerraformState record (throws on error).
$terraform_state = $client->TerraformState()->load(["id" => "terraform_state_id", "project_id" => "project_id"]);
```

#### Example: Create

```php
$terraform_state = $client->TerraformState()->create([
    "project_id" => null, // string
]);
```


### TestReport

Create an instance: `$test_report = $client->TestReport();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `error_count` | `int` |  |
| `failed_count` | `int` |  |
| `name` | `string` |  |
| `skipped_count` | `int` |  |
| `success_count` | `int` |  |
| `suite_error` | `string` |  |
| `test_case` | `array` |  |
| `total_count` | `int` |  |
| `total_time` | `int` |  |

#### Example: List

```php
// list() returns an array of TestReport records (throws on error).
$test_reports = $client->TestReport()->list();
```


### TestReportSummary

Create an instance: `$test_report_summary = $client->TestReportSummary();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `test_suite` | `array` |  |
| `total` | `array` |  |

#### Example: Load

```php
// load() returns the bare TestReportSummary record (throws on error).
$test_report_summary = $client->TestReportSummary()->load(["pipeline_id" => "pipeline_id", "project_id" => "project_id"]);
```


### Topic

Create an instance: `$topic = $client->Topic();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### UnleashApi

Create an instance: `$unleash_api = $client->UnleashApi();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```php
// load() returns the bare UnleashApi record (throws on error).
$unleash_api = $client->UnleashApi()->load(["unleash_id" => "unleash_id"]);
```


### UsageData

Create an instance: `$usage_data = $client->UsageData();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```php
// load() returns the bare UsageData record (throws on error).
$usage_data = $client->UsageData()->load();
```

#### Example: Create

```php
$usage_data = $client->UsageData()->create([
]);
```


### User

Create an instance: `$user = $client->User();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_path` | `string` |  |
| `avatar_url` | `string` |  |
| `custom_attribute` | `array` |  |
| `id` | `int` |  |
| `locked` | `bool` |  |
| `name` | `string` |  |
| `public_email` | `string` |  |
| `state` | `string` |  |
| `username` | `string` |  |
| `web_url` | `string` |  |

#### Example: List

```php
// list() returns an array of User records (throws on error).
$users = $client->User()->list();
```


### WebCommit

Create an instance: `$web_commit = $client->WebCommit();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```php
// load() returns the bare WebCommit record (throws on error).
$web_commit = $client->WebCommit()->load();
```


### Wiki

Create an instance: `$wiki = $client->Wiki();`

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

Features are the extension mechanism. A feature is a PHP class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as arrays

The PHP SDK uses plain PHP associative arrays throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers::to_map()` to safely validate that a value is an array.

### Directory structure

```
php/
├── gitlab_sdk.php          -- Main SDK class
├── config.php                     -- Configuration
├── features.php                   -- Feature factory
├── core/                          -- Core types and context
├── entity/                        -- Entity implementations
├── feature/                       -- Built-in features (Base, Test, Log)
├── utility/                       -- Utility functions and struct library
└── test/                          -- Test suites
```

The main class (`gitlab_sdk.php`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```php
$apientitiesaccessrequester = $client->ApiEntitiesAccessRequester();
$apientitiesaccessrequester->list();

// $apientitiesaccessrequester->data_get() now returns the apientitiesaccessrequester data from the last list
// $apientitiesaccessrequester->match_get() returns the last match criteria
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
