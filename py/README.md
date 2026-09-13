# Gitlab Python SDK



The Python SDK for the Gitlab API — an entity-oriented client following Pythonic conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.AccessRequest()` — each
carrying a small, uniform set of operations (`list`, `load`, `create`, `update`, `remove`, `patch`) instead of raw URL
paths and query strings. You work with named resources and verbs, which
keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to PyPI. Install it from the GitHub
release tag (`py/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/gitlab-sdk/releases)) or
from a source checkout:

```bash
pip install -e .
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```python
import os
from gitlab_sdk import GitlabSDK

client = GitlabSDK({
    "apikey": os.environ.get("GITLAB_APIKEY"),
})
```

### 3. Load an apientitiesbasicbadgedetail

ApiEntitiesBasicBadgeDetail is nested under image_url, so provide the `image_url`.
`load()` returns the ENTITY — call data_get() for the record — and raises on error.

```python
try:
    apientitiesbasicbadgedetail = client.ApiEntitiesBasicBadgeDetail().load({"image_url": "example_image_url", "link_url": "example_link_url"})
    print(apientitiesbasicbadgedetail)
except Exception as err:
    print(f"load failed: {err}")
```

### 4. Create, update, and remove

```python
# Remove
client.AccessRequest().remove({"id": "example_id"})
```


## Error handling

Entity operations raise on failure, so wrap them in `try` / `except`:

```python
try:
    apientitiesmetricimages = client.ApiEntitiesMetricImage().list()
    print(apientitiesmetricimages)
except Exception as err:
    print(f"list failed: {err}")
```

`direct()` does **not** raise — it returns the result envelope. Branch
on `ok`; on failure `status` holds the HTTP status (for error responses)
and `err` holds a transport error, so read both defensively:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example_id"},
})

if not result["ok"]:
    print("request failed:", result.get("status"), result.get("err"))
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})

if result["ok"]:
    print(result["status"])  # 200
    print(result["data"])    # response body
else:
    # A non-2xx response carries status + data (the error body); a
    # transport-level failure carries err instead. Only one is present, so
    # read both with .get() rather than indexing a key that may be absent.
    print(result.get("status"), result.get("err"))
```

### Prepare a request without sending it

```python
# prepare() returns the fetch definition and raises on error.
fetchdef = client.prepare({
    "path": "/api/resource/{id}",
    "method": "DELETE",
    "params": {"id": "example"},
})

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```python
client = GitlabSDK.test()

# Entity ops return the ENTITY and raises on error;
# call data_get() for the record.
apientitiesmetricimage = client.ApiEntitiesMetricImage().list()
# apientitiesmetricimage contains the mock response record
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```python
def mock_fetch(url, init):
    return {
        "status": 200,
        "statusText": "OK",
        "headers": {},
        "json": lambda: {"id": "mock01"},
    }, None

client = GitlabSDK({
    "base": "http://localhost:8080",
    "system": {
        "fetch": mock_fetch,
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
cd py && pytest test/
```


## Reference

### GitlabSDK

```python
from gitlab_sdk import GitlabSDK

client = GitlabSDK(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `str` | API key for authentication. |
| `base` | `str` | Base URL of the API server. |
| `prefix` | `str` | URL path prefix prepended to all requests. |
| `suffix` | `str` | URL path suffix appended to all requests. |
| `feature` | `dict` | Feature activation flags. |
| `extend` | `list` | Additional Feature instances to load. |
| `system` | `dict` | System overrides (e.g. custom `fetch` function). |

### test

```python
client = GitlabSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `None`.

### GitlabSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> dict` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> dict` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> dict` | Build and send an HTTP request. Returns a result dict (branch on `ok`). |
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
| `list` | `(reqmatch, ctrl) -> list` | List entities matching the criteria. Raises on error. |
| `create` | `(reqdata, ctrl) -> any` | Create a new entity. Raises on error. |
| `update` | `(reqdata, ctrl) -> any` | Update an existing entity. Raises on error. |
| `remove` | `(reqmatch, ctrl) -> any` | Remove an entity. Raises on error. |
| `data_get` | `() -> dict` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> dict` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> str` | Return the entity name. |

### Result shape

Entity operations return the ENTITY (call data_get() for the record) (a `dict` for single-entity
ops, a `list` for `list`) and raise on error. Wrap calls in
`try`/`except` to handle failures.

The `direct()` escape hatch never raises — it returns a result `dict`
you branch on via `result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `True` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `dict` | Response headers. |
| `data` | `any` | Parsed JSON response body. |

On error, `ok` is `False` and `err` contains the error value.

### Entities

#### AccessRequest

| Field | Description |
| --- | --- |
| `id` |  |

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
| `custom_attributes` |  |
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
| `member_guidelines` |  |
| `message_background_color` |  |
| `message_font_color` |  |
| `new_project_guidelines` |  |
| `profile_image_guidelines` |  |
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
| `active_users` | Number of active users |
| `forks` | Approximate number of repo forks |
| `groups` | Approximate number of projects |
| `issues` | Approximate number of issues |
| `merge_requests` | Approximate number of merge requests |
| `milestones` | Approximate number of milestones |
| `notes` | Approximate number of notes |
| `projects` | Approximate number of projects |
| `snippets` | Approximate number of snippets |
| `ssh_keys` | Approximate number of SSH keys |
| `users` | Approximate number of users |

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
| `avatar_path` |  |
| `avatar_url` |  |
| `awardable_id` |  |
| `awardable_type` |  |
| `created_at` |  |
| `custom_attributes` |  |
| `id` |  |
| `locked` |  |
| `name` |  |
| `public_email` |  |
| `state` |  |
| `updated_at` |  |
| `url` |  |
| `user` | API_Entities_UserBasic model |
| `username` |  |
| `web_url` |  |

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
| `custom_attributes` | API_Entities_CustomAttribute model |
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
| `topics` |  |
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
| `author_email` |  |
| `author_name` |  |
| `authored_date` |  |
| `can_push` |  |
| `commit` | API_Entities_Commit model |
| `committed_date` |  |
| `committer_email` |  |
| `committer_name` |  |
| `created_at` |  |
| `default` |  |
| `developers_can_merge` |  |
| `developers_can_push` |  |
| `extended_trailers` |  |
| `id` |  |
| `merged` |  |
| `message` |  |
| `name` |  |
| `parent_ids` |  |
| `protected` |  |
| `short_id` |  |
| `title` |  |
| `trailers` |  |
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
| `failures` |  |
| `has_failures` |  |
| `id` |  |
| `migrate_memberships` |  |
| `migrate_projects` |  |
| `namespace_id` |  |
| `parent_id` |  |
| `project_id` |  |
| `source_full_path` |  |
| `source_type` |  |
| `source_url` |  |
| `stats` |  |
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
| `batched` |  |
| `batches` |  |
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
| `notes` |  |

Operations: Load.

API path: `/api/v4/projects/{id}/repository/changelog`

#### ApiEntitiesCiBridge

| Field | Description |
| --- | --- |
| `allow_failure` |  |
| `commit` | API_Entities_Commit model |
| `coverage` |  |
| `created_at` |  |
| `downstream_pipeline` | API_Entities_Ci_PipelineBasic model |
| `duration` | Time spent running |
| `erased_at` |  |
| `failure_reason` |  |
| `finished_at` |  |
| `id` |  |
| `name` |  |
| `pipeline` | API_Entities_Ci_PipelineBasic model |
| `project` |  |
| `queued_duration` | Time spent enqueued |
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
| `artifacts` |  |
| `artifacts_expire_at` |  |
| `artifacts_file` |  |
| `commit` | API_Entities_Commit model |
| `coverage` |  |
| `created_at` |  |
| `duration` | Time spent running |
| `erased_at` |  |
| `failure_reason` |  |
| `file_format` |  |
| `file_type` |  |
| `filename` |  |
| `finished_at` |  |
| `id` |  |
| `name` |  |
| `pipeline` | API_Entities_Ci_PipelineBasic model |
| `project` |  |
| `queued_duration` | Time spent enqueued |
| `ref` |  |
| `runner` | API_Entities_Ci_Runner model |
| `runner_manager` | API_Entities_Ci_RunnerManager model |
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
| `commit` | API_Entities_Commit model |
| `coverage` |  |
| `created_at` |  |
| `duration` | Time spent running |
| `erased_at` |  |
| `failure_reason` |  |
| `finished_at` |  |
| `id` |  |
| `name` |  |
| `pipeline` | API_Entities_Ci_PipelineBasic model |
| `project` |  |
| `queued_duration` | Time spent enqueued |
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
| `commit` | API_Entities_Commit model |
| `coverage` |  |
| `created_at` |  |
| `duration` | Time spent running |
| `erased_at` |  |
| `failure_reason` |  |
| `finished_at` |  |
| `id` |  |
| `name` |  |
| `pipeline` | API_Entities_Ci_PipelineBasic model |
| `project` |  |
| `queued_duration` | Time spent enqueued |
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
| `errors` |  |
| `extra` |  |
| `includes` |  |
| `jobs` |  |
| `location` |  |
| `merged_yaml` |  |
| `raw` |  |
| `type` |  |
| `valid` |  |
| `warnings` |  |

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
| `inputs` |  |
| `next_run_at` |  |
| `owner` | API_Entities_UserBasic model |
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
| `inputs` |  |
| `last_pipeline` | API_Entities_Ci_PipelineBasic model |
| `next_run_at` |  |
| `owner` | API_Entities_UserBasic model |
| `ref` |  |
| `updated_at` |  |
| `variables` | API_Entities_Ci_Variable model |

Operations: Create, Load, Update.

API path: `/api/v4/projects/{id}/pipeline_schedules/{pipeline_schedule_id}/play`

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
| `avatar_path` |  |
| `avatar_url` |  |
| `custom_attributes` |  |
| `id` |  |
| `locked` |  |
| `name` |  |
| `public_email` |  |
| `state` |  |
| `username` |  |
| `web_url` |  |

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
| `created_by` | API_Entities_UserBasic model |
| `description` |  |
| `groups` | API_Entities_BasicGroupDetails model |
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
| `projects` | API_Entities_BasicProjectDetails model |
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
| `id` |  |

Operations: Create, Load.

API path: `/api/v4/projects/{id}/secure_files`

#### ApiEntitiesCiVariable

| Field | Description |
| --- | --- |
| `description` |  |
| `environment_scope` |  |
| `hidden` |  |
| `id` |  |
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
| `platform_kubernetes` |  |
| `platform_type` |  |
| `provider_gcp` |  |
| `provider_type` |  |
| `user` | API_Entities_UserBasic model |

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
| `group` | API_Entities_BasicGroupDetails model |
| `id` |  |
| `managed` |  |
| `management_project` |  |
| `name` |  |
| `namespace_per_environment` |  |
| `platform_kubernetes` |  |
| `platform_type` |  |
| `provider_gcp` |  |
| `provider_type` |  |
| `user` | API_Entities_UserBasic model |

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
| `platform_kubernetes` |  |
| `platform_type` |  |
| `project` | API_Entities_BasicProjectDetails model |
| `provider_gcp` |  |
| `provider_type` |  |
| `user` | API_Entities_UserBasic model |

Operations: Create, Load, Update.

API path: `/api/v4/projects/{id}/clusters/user`

#### ApiEntitiesClustersAgent

| Field | Description |
| --- | --- |
| `created_at` |  |
| `description` |  |
| `id` |  |
| `name` |  |
| `name_with_namespace` |  |
| `path` |  |
| `path_with_namespace` |  |

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
| `extended_trailers` |  |
| `id` |  |
| `message` |  |
| `parent_ids` |  |
| `short_id` |  |
| `title` |  |
| `trailers` |  |
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
| `extended_trailers` |  |
| `id` |  |
| `last_pipeline` | API_Entities_Ci_PipelineBasic model |
| `message` |  |
| `parent_ids` |  |
| `project_id` |  |
| `short_id` |  |
| `stats` |  |
| `status` |  |
| `title` |  |
| `trailers` |  |
| `web_url` |  |

Operations: Create, Load, Update.

API path: `/api/v4/projects/{id}/repository/commits`

#### ApiEntitiesCommitNote

| Field | Description |
| --- | --- |
| `author` | API_Entities_UserBasic model |
| `avatar_path` |  |
| `avatar_url` |  |
| `created_at` |  |
| `custom_attributes` |  |
| `id` |  |
| `line` |  |
| `line_type` |  |
| `locked` |  |
| `name` |  |
| `note` |  |
| `path` |  |
| `public_email` |  |
| `state` |  |
| `username` |  |
| `web_url` |  |

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
| `author` | API_Entities_UserBasic model |
| `avatar_path` |  |
| `avatar_url` |  |
| `coverage` |  |
| `created_at` |  |
| `custom_attributes` |  |
| `description` |  |
| `finished_at` |  |
| `id` |  |
| `locked` |  |
| `name` |  |
| `pipeline_id` |  |
| `public_email` |  |
| `ref` |  |
| `sha` |  |
| `started_at` |  |
| `state` |  |
| `status` |  |
| `target_url` |  |
| `username` |  |
| `web_url` |  |

Operations: Create, List.

API path: `/api/v4/projects/{id}/statuses/{sha}`

#### ApiEntitiesCompare

| Field | Description |
| --- | --- |
| `commit` | API_Entities_Commit model |
| `commits` |  |
| `compare_same_ref` |  |
| `compare_timeout` |  |
| `diffs` |  |
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
| `tags` | API_Entities_ContainerRegistry_Tag model |
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
| `additions` |  |
| `commits` |  |
| `deletions` |  |
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
| `scopes` |  |
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
| `deployable` | API_Entities_Ci_Job model |
| `environment` | API_Entities_EnvironmentBasic model |
| `id` |  |
| `iid` |  |
| `ref` |  |
| `sha` |  |
| `status` |  |
| `updated_at` |  |
| `user` | API_Entities_UserBasic model |

Operations: List.

API path: `/api/v4/projects/{id}/deployments`

#### ApiEntitiesDeploymentExtended

| Field | Description |
| --- | --- |
| `approval_summary` |  |
| `approvals` | API_Entities_Deployments_Approval model |
| `created_at` |  |
| `deployable` | API_Entities_Ci_Job model |
| `environment` | API_Entities_EnvironmentBasic model |
| `id` |  |
| `iid` |  |
| `pending_approval_count` |  |
| `ref` |  |
| `sha` |  |
| `status` |  |
| `updated_at` |  |
| `user` | API_Entities_UserBasic model |

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
| `feature_categories` |  |
| `id` |  |
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
| `groups` |  |
| `projects` |  |

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
| `cluster_agent` | API_Entities_Clusters_Agent model |
| `created_at` |  |
| `description` |  |
| `external_url` |  |
| `flux_resource_path` |  |
| `id` |  |
| `kubernetes_namespace` |  |
| `last_deployment` | API_Entities_Deployment model |
| `name` |  |
| `project` | API_Entities_BasicProjectDetails model |
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
| `author` | API_Entities_UserBasic model |
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
| `wiki_page` | API_Entities_WikiPageBasic model |

Operations: List, Load.

API path: `/api/v4/events`

#### ApiEntitiesFeature

| Field | Description |
| --- | --- |
| `definition` | API_Entities_Feature_Definition model |
| `gates` |  |
| `id` |  |
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
| `log_state_changes` |  |
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
| `id` |  |
| `name` |  |
| `parameters` |  |
| `scopes` |  |
| `strategies` |  |
| `updated_at` |  |
| `user_list` |  |
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
| `user_xids` |  |

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
| `Time` |  |
| `Version` |  |

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
| `custom_attributes` | API_Entities_CustomAttribute model |
| `default_branch` |  |
| `default_branch_protection` |  |
| `default_branch_protection_defaults` |  |
| `description` |  |
| `duo_core_features_enabled` | [Experimental] Indicates whether GitLab Duo Core features are enabled for the group |
| `duo_features_enabled` |  |
| `emails_disabled` |  |
| `emails_enabled` |  |
| `file_template_project_id` |  |
| `full_name` |  |
| `full_path` |  |
| `id` |  |
| `ldap_access` |  |
| `ldap_cn` |  |
| `ldap_group_links` |  |
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
| `root_storage_statistics` |  |
| `saml_group_links` |  |
| `share_with_group_lock` |  |
| `shared_runners_setting` |  |
| `show_diff_preview_in_email` |  |
| `statistics` |  |
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
| `custom_attributes` | API_Entities_CustomAttribute model |
| `default_branch` |  |
| `default_branch_protection` |  |
| `default_branch_protection_defaults` |  |
| `description` |  |
| `duo_core_features_enabled` | [Experimental] Indicates whether GitLab Duo Core features are enabled for the group |
| `duo_features_enabled` |  |
| `emails_disabled` |  |
| `emails_enabled` |  |
| `enabled_git_access_protocol` |  |
| `extra_shared_runners_minutes_limit` |  |
| `file_template_project_id` |  |
| `full_name` |  |
| `full_path` |  |
| `id` |  |
| `ip_restriction_ranges` |  |
| `ldap_access` |  |
| `ldap_cn` |  |
| `ldap_group_links` |  |
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
| `project_creation_level` |  |
| `projects` | API_Entities_Project model |
| `repository_storage` |  |
| `request_access_enabled` |  |
| `require_two_factor_authentication` |  |
| `root_storage_statistics` |  |
| `runners_token` |  |
| `saml_group_links` |  |
| `service_access_tokens_expiration_enforced` |  |
| `share_with_group_lock` |  |
| `shared_projects` | API_Entities_Project model |
| `shared_runners_minutes_limit` |  |
| `shared_runners_setting` |  |
| `shared_with_groups` |  |
| `show_diff_preview_in_email` |  |
| `statistics` |  |
| `subgroup_creation_level` |  |
| `two_factor_grace_period` |  |
| `unique_project_download_limit` |  |
| `unique_project_download_limit_alertlist` |  |
| `unique_project_download_limit_allowlist` |  |
| `unique_project_download_limit_interval_in_seconds` |  |
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
| `custom_headers` |  |
| `custom_webhook_template` |  |
| `description` |  |
| `disabled_until` |  |
| `enable_ssl_verification` |  |
| `id` |  |
| `merge_requests_events` |  |
| `name` |  |
| `push_events` |  |
| `push_events_branch_filter` |  |
| `repository_update_events` |  |
| `tag_push_events` |  |
| `url` |  |
| `url_variables` |  |

Operations: Create, List, Load, Update.

API path: `/api/v4/hooks`

#### ApiEntitiesIntegration

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Load.

API path: `/api/v4/groups/{id}/integrations/{slug}`

#### ApiEntitiesIntegrationBasic

| Field | Description |
| --- | --- |
| `active` |  |
| `alert_events` |  |
| `comment_on_event_enabled` |  |
| `commit_events` |  |
| `confidential_issues_events` |  |
| `confidential_note_events` |  |
| `created_at` |  |
| `deployment_events` |  |
| `id` |  |
| `incident_events` |  |
| `inherited` |  |
| `issues_events` |  |
| `job_events` |  |
| `merge_requests_events` |  |
| `note_events` |  |
| `pipeline_events` |  |
| `push_events` |  |
| `slug` |  |
| `tag_push_events` |  |
| `title` |  |
| `updated_at` |  |
| `vulnerability_events` |  |
| `wiki_page_events` |  |

Operations: List, Update.

API path: `/api/v4/groups/{id}/integrations`

#### ApiEntitiesInvitation

| Field | Description |
| --- | --- |
| `access_level` |  |
| `created_at` |  |
| `created_by_name` |  |
| `expires_at` |  |
| `id` |  |
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
| `assignee` | API_Entities_UserBasic model |
| `assignees` | API_Entities_UserBasic model |
| `author` | API_Entities_UserBasic model |
| `blocking_issues_count` |  |
| `closed_at` |  |
| `closed_by` | API_Entities_UserBasic model |
| `confidential` |  |
| `created_at` |  |
| `description` |  |
| `discussion_locked` |  |
| `downvotes` |  |
| `due_date` |  |
| `epic` |  |
| `epic_iid` |  |
| `has_tasks` |  |
| `health_status` |  |
| `id` |  |
| `iid` |  |
| `imported` |  |
| `imported_from` |  |
| `issue_type` |  |
| `iteration` |  |
| `labels` |  |
| `links` |  |
| `merge_requests_count` |  |
| `milestone` |  |
| `moved_to_id` |  |
| `project_id` |  |
| `references` |  |
| `service_desk_reply_to` |  |
| `severity` | One of ["UNKNOWN", "LOW", "MEDIUM", "HIGH", "CRITICAL"] |
| `state` |  |
| `subscribed` |  |
| `task_completion_status` |  |
| `task_status` |  |
| `time_stats` | API_Entities_IssuableTimeStats model |
| `title` |  |
| `type` | One of ["ISSUE", "INCIDENT", "TEST_CASE", "REQUIREMENT", "TASK", "TICKET"] |
| `updated_at` |  |
| `upvotes` |  |
| `user_notes_count` |  |
| `web_url` |  |
| `weight` |  |

Operations: Create, List, Load, Update.

API path: `/api/v4/projects/{id}/issues/{issue_iid}/clone`

#### ApiEntitiesIssueLink

| Field | Description |
| --- | --- |
| `id` |  |
| `link_type` |  |
| `source_issue` |  |
| `target_issue` |  |

Operations: Create, Load.

API path: `/api/v4/projects/{id}/issues/{issue_iid}/links`

#### ApiEntitiesLicense

| Field | Description |
| --- | --- |
| `conditions` |  |
| `content` |  |
| `description` |  |
| `html_url` |  |
| `id` |  |
| `key` |  |
| `limitations` |  |
| `name` |  |
| `nickname` |  |
| `permissions` |  |
| `popular` |  |
| `source_url` |  |

Operations: Load.

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
| `created_by` | API_Entities_UserBasic model |
| `custom_attributes` |  |
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
| `assignee` | API_Entities_UserBasic model |
| `assignees` | API_Entities_UserBasic model |
| `author` | API_Entities_UserBasic model |
| `blocking_discussions_resolved` |  |
| `changes_count` |  |
| `closed_at` |  |
| `closed_by` | API_Entities_UserBasic model |
| `created_at` |  |
| `description` |  |
| `description_html` |  |
| `detailed_merge_status` |  |
| `diff_refs` |  |
| `discussion_locked` |  |
| `diverged_commits_count` |  |
| `downvotes` |  |
| `draft` |  |
| `first_contribution` |  |
| `first_deployed_to_production_at` |  |
| `force_remove_source_branch` |  |
| `has_conflicts` |  |
| `head_pipeline` | API_Entities_Ci_Pipeline model |
| `id` |  |
| `iid` |  |
| `imported` |  |
| `imported_from` |  |
| `labels` |  |
| `latest_build_finished_at` |  |
| `latest_build_started_at` |  |
| `merge_after` |  |
| `merge_commit_sha` |  |
| `merge_error` |  |
| `merge_status` |  |
| `merge_user` | API_Entities_UserBasic model |
| `merge_when_pipeline_succeeds` |  |
| `merged_at` |  |
| `merged_by` | API_Entities_UserBasic model |
| `milestone` |  |
| `pipeline` | API_Entities_Ci_PipelineBasic model |
| `prepared_at` |  |
| `project_id` |  |
| `rebase_in_progress` |  |
| `reference` |  |
| `references` |  |
| `reviewers` | API_Entities_UserBasic model |
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
| `time_stats` | API_Entities_IssuableTimeStats model |
| `title` |  |
| `title_html` |  |
| `updated_at` |  |
| `upvotes` |  |
| `user` |  |
| `user_notes_count` |  |
| `web_url` |  |
| `work_in_progress` |  |

Operations: Create, Load, Update.

API path: `/api/v4/projects/{id}/merge_requests/{merge_request_iid}/cancel_merge_when_pipeline_succeeds`

#### ApiEntitiesMergeRequestApproval

| Field | Description |
| --- | --- |
| `approved_at` |  |
| `user` | API_Entities_UserBasic model |

Operations: Create, Load.

API path: `/api/v4/projects/{id}/merge_requests/{merge_request_iid}/approve`

#### ApiEntitiesMergeRequestBasic

| Field | Description |
| --- | --- |
| `allow_collaboration` |  |
| `allow_maintainer_to_push` |  |
| `approvals_before_merge` |  |
| `assignee` | API_Entities_UserBasic model |
| `assignees` | API_Entities_UserBasic model |
| `author` | API_Entities_UserBasic model |
| `blocking_discussions_resolved` |  |
| `closed_at` |  |
| `closed_by` | API_Entities_UserBasic model |
| `created_at` |  |
| `description` |  |
| `description_html` |  |
| `detailed_merge_status` |  |
| `discussion_locked` |  |
| `downvotes` |  |
| `draft` |  |
| `force_remove_source_branch` |  |
| `has_conflicts` |  |
| `id` |  |
| `iid` |  |
| `imported` |  |
| `imported_from` |  |
| `labels` |  |
| `merge_after` |  |
| `merge_commit_sha` |  |
| `merge_status` |  |
| `merge_user` | API_Entities_UserBasic model |
| `merge_when_pipeline_succeeds` |  |
| `merged_at` |  |
| `merged_by` | API_Entities_UserBasic model |
| `milestone` |  |
| `prepared_at` |  |
| `project_id` |  |
| `reference` |  |
| `references` |  |
| `reviewers` | API_Entities_UserBasic model |
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
| `time_stats` | API_Entities_IssuableTimeStats model |
| `title` |  |
| `title_html` |  |
| `updated_at` |  |
| `upvotes` |  |
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
| `assignee` | API_Entities_UserBasic model |
| `assignees` | API_Entities_UserBasic model |
| `author` | API_Entities_UserBasic model |
| `blocking_discussions_resolved` |  |
| `changes` | API_Entities_Diff model |
| `changes_count` |  |
| `closed_at` |  |
| `closed_by` | API_Entities_UserBasic model |
| `created_at` |  |
| `description` |  |
| `description_html` |  |
| `detailed_merge_status` |  |
| `diff_refs` |  |
| `discussion_locked` |  |
| `diverged_commits_count` |  |
| `downvotes` |  |
| `draft` |  |
| `first_contribution` |  |
| `first_deployed_to_production_at` |  |
| `force_remove_source_branch` |  |
| `has_conflicts` |  |
| `head_pipeline` | API_Entities_Ci_Pipeline model |
| `id` |  |
| `iid` |  |
| `imported` |  |
| `imported_from` |  |
| `labels` |  |
| `latest_build_finished_at` |  |
| `latest_build_started_at` |  |
| `merge_after` |  |
| `merge_commit_sha` |  |
| `merge_error` |  |
| `merge_status` |  |
| `merge_user` | API_Entities_UserBasic model |
| `merge_when_pipeline_succeeds` |  |
| `merged_at` |  |
| `merged_by` | API_Entities_UserBasic model |
| `milestone` |  |
| `overflow` |  |
| `pipeline` | API_Entities_Ci_PipelineBasic model |
| `prepared_at` |  |
| `project_id` |  |
| `rebase_in_progress` |  |
| `reference` |  |
| `references` |  |
| `reviewers` | API_Entities_UserBasic model |
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
| `time_stats` | API_Entities_IssuableTimeStats model |
| `title` |  |
| `title_html` |  |
| `updated_at` |  |
| `upvotes` |  |
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
| `commits` | API_Entities_Commit model |
| `created_at` |  |
| `diffs` | API_Entities_Diff model |
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
| `avatar_path` |  |
| `avatar_url` |  |
| `custom_attributes` |  |
| `id` |  |
| `locked` |  |
| `name` |  |
| `public_email` |  |
| `state` |  |
| `username` |  |
| `web_url` |  |

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
| `avatar_path` |  |
| `avatar_url` |  |
| `custom_attributes` |  |
| `id` |  |
| `locked` |  |
| `name` |  |
| `public_email` |  |
| `state` |  |
| `username` |  |
| `web_url` |  |

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
| `members_count_with_descendants` |  |
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
| `exists` |  |
| `suggests` |  |

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
| `disttags` |  |
| `name` |  |
| `versions` |  |

Operations: Load.

API path: `/api/v4/groups/{id}/-/packages/npm/*package_name`

#### ApiEntitiesNpmPackageTag

| Field | Description |
| --- | --- |

Operations: Load.

API path: `/api/v4/groups/{id}/-/packages/npm/-/package/*package_name/dist-tags`

#### ApiEntitiesNugetPackagesVersion

| Field | Description |
| --- | --- |
| `versions` |  |

Operations: List.

API path: `/api/v4/projects/{id}/packages/nuget/download/*package_name/index`

#### ApiEntitiesNugetSearchResult

| Field | Description |
| --- | --- |
| `authors` |  |
| `description` |  |
| `iconUrl` |  |
| `id` |  |
| `licenseUrl` |  |
| `projectUrl` |  |
| `summary` |  |
| `tags` |  |
| `title` |  |
| `totalDownloads` |  |
| `type` |  |
| `verified` |  |
| `version` |  |
| `versions` |  |

Operations: List.

API path: `/api/v4/groups/{id}/-/packages/nuget/query`

#### ApiEntitiesNugetServiceIndex

| Field | Description |
| --- | --- |
| `resources` |  |
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
| `links` |  |
| `name` |  |
| `package_type` |  |
| `pipeline` | API_Entities_Package_Pipeline model |
| `pipelines` | API_Entities_Package_Pipeline model |
| `project_id` |  |
| `project_path` |  |
| `status` |  |
| `tags` |  |
| `version` |  |
| `versions` |  |

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
| `pipelines` | API_Entities_Package_Pipeline model |
| `size` |  |

Operations: List.

API path: `/api/v4/projects/{id}/packages/{package_id}/package_files`

#### ApiEntitiesPackagePipeline

| Field | Description |
| --- | --- |
| `avatar_path` |  |
| `avatar_url` |  |
| `custom_attributes` |  |
| `id` |  |
| `locked` |  |
| `name` |  |
| `public_email` |  |
| `state` |  |
| `username` |  |
| `web_url` |  |

Operations: Load.

API path: `/api/v4/projects/{id}/packages/{package_id}/pipelines`

#### ApiEntitiesPackagesConanFilesList

| Field | Description |
| --- | --- |

Operations: Load.

API path: `/api/v4/projects/{id}/packages/conan/v2/conans/{package_name}/{package_version}/{package_username}/{package_channel}/revisions/{recipe_revision}/packages/{conan_package_reference}/revisions/{package_revision}/files`

#### ApiEntitiesPackagesConanPackageManifest

| Field | Description |
| --- | --- |

Operations: Load.

API path: `/api/v4/projects/{id}/packages/conan/v1/conans/{package_name}/{package_version}/{package_username}/{package_channel}/packages/{conan_package_reference}/digest`

#### ApiEntitiesPackagesConanPackageRevision

| Field | Description |
| --- | --- |
| `revision` | The revision hash of the Conan recipe or package |
| `time` | The UTC timestamp when the revision was created |

Operations: List.

API path: `/api/v4/projects/{id}/packages/conan/v2/conans/{package_name}/{package_version}/{package_username}/{package_channel}/revisions/{recipe_revision}/packages/{conan_package_reference}/revisions`

#### ApiEntitiesPackagesConanPackageSnapshot

| Field | Description |
| --- | --- |

Operations: Load.

API path: `/api/v4/projects/{id}/packages/conan/v1/conans/{package_name}/{package_version}/{package_username}/{package_channel}/packages/{conan_package_reference}`

#### ApiEntitiesPackagesConanRecipeManifest

| Field | Description |
| --- | --- |

Operations: Load.

API path: `/api/v4/projects/{id}/packages/conan/v1/conans/{package_name}/{package_version}/{package_username}/{package_channel}/digest`

#### ApiEntitiesPackagesConanRecipeRevision

| Field | Description |
| --- | --- |
| `revision` | The revision hash of the Conan recipe or package |
| `time` | The UTC timestamp when the revision was created |

Operations: List.

API path: `/api/v4/projects/{id}/packages/conan/v2/conans/{package_name}/{package_version}/{package_username}/{package_channel}/revisions`

#### ApiEntitiesPackagesConanRecipeSnapshot

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Load.

API path: `/api/v4/projects/{id}/packages/conan/v1/conans/{package_name}/{package_version}/{package_username}/{package_channel}`

#### ApiEntitiesPackagesConanRevision

| Field | Description |
| --- | --- |
| `revision` | The revision hash of the Conan recipe or package |
| `time` | The UTC timestamp when the revision was created |

Operations: Load.

API path: `/api/v4/projects/{id}/packages/conan/v2/conans/{package_name}/{package_version}/{package_username}/{package_channel}/revisions/{recipe_revision}/packages/{conan_package_reference}/latest`

#### ApiEntitiesPackagesConanUploadUrl

| Field | Description |
| --- | --- |

Operations: Create.

API path: `/api/v4/projects/{id}/packages/conan/v1/conans/{package_name}/{package_version}/{package_username}/{package_channel}/packages/{conan_package_reference}/upload_urls`

#### ApiEntitiesPackagesDebianDistribution

| Field | Description |
| --- | --- |
| `architectures` |  |
| `codename` |  |
| `components` |  |
| `description` |  |
| `id` |  |
| `label` |  |
| `origin` |  |
| `suite` |  |
| `valid_time_duration_seconds` |  |
| `version` |  |

Operations: Create, List, Load, Update.

API path: `/api/v4/groups/{id}/-/debian_distributions`

#### ApiEntitiesPagesDomain

| Field | Description |
| --- | --- |
| `auto_ssl_enabled` |  |
| `certificate` |  |
| `certificate_text` |  |
| `domain` |  |
| `enabled_until` |  |
| `expired` |  |
| `id` |  |
| `subject` |  |
| `url` |  |
| `verification_code` |  |
| `verified` |  |

Operations: Create, List, Load, Update.

API path: `/api/v4/projects/{id}/pages/domains`

#### ApiEntitiesPagesDomainBasic

| Field | Description |
| --- | --- |
| `expiration` |  |
| `expired` |  |

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
| `scopes` |  |
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
| `last_used_ips` |  |
| `name` |  |
| `revoked` |  |
| `scopes` |  |
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
| `scopes` |  |
| `token` |  |
| `user_id` |  |

Operations: Create.

API path: `/api/v4/personal_access_tokens/{id}/rotate`

#### ApiEntitiesPersonalSnippet

| Field | Description |
| --- | --- |
| `author` | API_Entities_UserBasic model |
| `created_at` |  |
| `description` |  |
| `file_name` |  |
| `files` |  |
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
| `auto_cancel_pending_pipelines` |  |
| `auto_devops_deploy_strategy` |  |
| `auto_devops_enabled` |  |
| `auto_duo_code_review_enabled` |  |
| `autoclose_referenced_issues` |  |
| `avatar_url` |  |
| `build_git_strategy` |  |
| `build_timeout` |  |
| `builds_access_level` |  |
| `can_create_merge_request_in` |  |
| `ci_allow_fork_pipelines_to_run_in_parent_project` |  |
| `ci_config_path` |  |
| `ci_default_git_depth` |  |
| `ci_delete_pipelines_in_seconds` |  |
| `ci_forward_deployment_enabled` |  |
| `ci_forward_deployment_rollback_allowed` |  |
| `ci_id_token_sub_claim_components` |  |
| `ci_job_token_scope_enabled` |  |
| `ci_pipeline_variables_minimum_override_role` |  |
| `ci_push_repository_for_job_token_allowed` |  |
| `ci_restrict_pipeline_cancellation_role` |  |
| `ci_separated_caches` |  |
| `compliance_frameworks` |  |
| `container_expiration_policy` |  |
| `container_registry_access_level` |  |
| `container_registry_enabled` |  |
| `container_registry_image_prefix` |  |
| `created_at` |  |
| `creator_id` |  |
| `custom_attributes` | API_Entities_CustomAttribute model |
| `default_branch` |  |
| `description` |  |
| `description_html` |  |
| `duo_remote_flows_enabled` |  |
| `emails_disabled` |  |
| `emails_enabled` |  |
| `empty_repo` |  |
| `enforce_auth_checks_on_uploads` |  |
| `environments_access_level` |  |
| `external_authorization_classification_label` |  |
| `feature_flags_access_level` |  |
| `forked_from_project` | API_Entities_BasicProjectDetails model |
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
| `links` |  |
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
| `mirror_overwrites_diverged_branches` |  |
| `mirror_trigger_builds` |  |
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
| `only_allow_merge_if_pipeline_succeeds` |  |
| `only_mirror_protected_branches` |  |
| `open_issues_count` |  |
| `owner` | API_Entities_UserBasic model |
| `package_registry_access_level` |  |
| `packages_enabled` |  |
| `pages_access_level` |  |
| `path` |  |
| `path_with_namespace` |  |
| `pre_receive_secret_detection_enabled` |  |
| `prevent_merge_without_jira_issue` |  |
| `printing_merge_request_link_enabled` |  |
| `public_jobs` |  |
| `readme_url` |  |
| `releases_access_level` |  |
| `remove_source_branch_after_merge` |  |
| `repository_access_level` |  |
| `repository_object_format` |  |
| `repository_storage` |  |
| `request_access_enabled` |  |
| `requirements_access_level` |  |
| `requirements_enabled` |  |
| `resolve_outdated_diff_discussions` |  |
| `resource_group_default_process_mode` |  |
| `restrict_user_defined_variables` |  |
| `runner_token_expiration_interval` |  |
| `runners_token` |  |
| `secret_push_protection_enabled` |  |
| `security_and_compliance_access_level` |  |
| `security_and_compliance_enabled` |  |
| `service_desk_address` |  |
| `service_desk_enabled` |  |
| `shared_runners_enabled` |  |
| `shared_with_groups` |  |
| `show_diff_preview_in_email` |  |
| `snippets_access_level` |  |
| `snippets_enabled` |  |
| `spp_repository_pipeline_access` | The spp_repository_pipeline_access setting is only visible if the security_orchestration_policies feature is available. |
| `squash_commit_template` |  |
| `squash_option` |  |
| `ssh_url_to_repo` |  |
| `star_count` |  |
| `statistics` |  |
| `suggestion_commit_message` |  |
| `tag_list` |  |
| `topics` |  |
| `updated_at` |  |
| `visibility` |  |
| `warn_about_potentially_unwanted_characters` |  |
| `web_based_commit_signing_enabled` |  |
| `web_url` |  |
| `wiki_access_level` |  |
| `wiki_enabled` |  |

Operations: Create, List, Update.

API path: `/api/v4/projects/{id}/fork/{forked_from_id}`

#### ApiEntitiesProjectDailyStatistic

| Field | Description |
| --- | --- |
| `days` |  |
| `total` |  |

Operations: Load.

API path: `/api/v4/projects/{id}/statistics`

#### ApiEntitiesProjectExportStatus

| Field | Description |
| --- | --- |
| `api_url` |  |
| `web_url` |  |

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
| `confidential_issues_events` |  |
| `confidential_note_events` |  |
| `created_at` |  |
| `custom_headers` |  |
| `custom_webhook_template` |  |
| `deployment_events` |  |
| `description` |  |
| `disabled_until` |  |
| `emoji_events` |  |
| `enable_ssl_verification` |  |
| `feature_flag_events` |  |
| `id` |  |
| `issues_events` |  |
| `job_events` |  |
| `merge_requests_events` |  |
| `milestone_events` |  |
| `name` |  |
| `note_events` |  |
| `pipeline_events` |  |
| `project_id` |  |
| `push_events` |  |
| `push_events_branch_filter` |  |
| `releases_events` |  |
| `repository_update_events` |  |
| `resource_access_token_events` |  |
| `tag_push_events` |  |
| `url` |  |
| `url_variables` |  |
| `vulnerability_events` |  |
| `wiki_page_events` |  |

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
| `author` | API_Entities_UserBasic model |
| `created_at` |  |
| `description` |  |
| `file_name` |  |
| `files` |  |
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
| `auto_cancel_pending_pipelines` |  |
| `auto_devops_deploy_strategy` |  |
| `auto_devops_enabled` |  |
| `auto_duo_code_review_enabled` |  |
| `autoclose_referenced_issues` |  |
| `avatar_url` |  |
| `build_git_strategy` |  |
| `build_timeout` |  |
| `builds_access_level` |  |
| `can_create_merge_request_in` |  |
| `ci_allow_fork_pipelines_to_run_in_parent_project` |  |
| `ci_config_path` |  |
| `ci_default_git_depth` |  |
| `ci_delete_pipelines_in_seconds` |  |
| `ci_forward_deployment_enabled` |  |
| `ci_forward_deployment_rollback_allowed` |  |
| `ci_id_token_sub_claim_components` |  |
| `ci_job_token_scope_enabled` |  |
| `ci_pipeline_variables_minimum_override_role` |  |
| `ci_push_repository_for_job_token_allowed` |  |
| `ci_restrict_pipeline_cancellation_role` |  |
| `ci_separated_caches` |  |
| `compliance_frameworks` |  |
| `container_expiration_policy` |  |
| `container_registry_access_level` |  |
| `container_registry_enabled` |  |
| `container_registry_image_prefix` |  |
| `created_at` |  |
| `creator_id` |  |
| `custom_attributes` | API_Entities_CustomAttribute model |
| `default_branch` |  |
| `description` |  |
| `description_html` |  |
| `duo_remote_flows_enabled` |  |
| `emails_disabled` |  |
| `emails_enabled` |  |
| `empty_repo` |  |
| `enforce_auth_checks_on_uploads` |  |
| `environments_access_level` |  |
| `external_authorization_classification_label` |  |
| `feature_flags_access_level` |  |
| `forked_from_project` | API_Entities_BasicProjectDetails model |
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
| `links` |  |
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
| `mirror_overwrites_diverged_branches` |  |
| `mirror_trigger_builds` |  |
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
| `only_allow_merge_if_pipeline_succeeds` |  |
| `only_mirror_protected_branches` |  |
| `open_issues_count` |  |
| `owner` | API_Entities_UserBasic model |
| `package_registry_access_level` |  |
| `packages_enabled` |  |
| `pages_access_level` |  |
| `path` |  |
| `path_with_namespace` |  |
| `permissions` |  |
| `pre_receive_secret_detection_enabled` |  |
| `prevent_merge_without_jira_issue` |  |
| `printing_merge_request_link_enabled` |  |
| `public_jobs` |  |
| `readme_url` |  |
| `releases_access_level` |  |
| `remove_source_branch_after_merge` |  |
| `repository_access_level` |  |
| `repository_object_format` |  |
| `repository_storage` |  |
| `request_access_enabled` |  |
| `requirements_access_level` |  |
| `requirements_enabled` |  |
| `resolve_outdated_diff_discussions` |  |
| `resource_group_default_process_mode` |  |
| `restrict_user_defined_variables` |  |
| `runner_token_expiration_interval` |  |
| `runners_token` |  |
| `secret_push_protection_enabled` |  |
| `security_and_compliance_access_level` |  |
| `security_and_compliance_enabled` |  |
| `service_desk_address` |  |
| `service_desk_enabled` |  |
| `shared_runners_enabled` |  |
| `shared_with_groups` |  |
| `show_diff_preview_in_email` |  |
| `snippets_access_level` |  |
| `snippets_enabled` |  |
| `spp_repository_pipeline_access` | The spp_repository_pipeline_access setting is only visible if the security_orchestration_policies feature is available. |
| `squash_commit_template` |  |
| `squash_option` |  |
| `ssh_url_to_repo` |  |
| `star_count` |  |
| `statistics` |  |
| `suggestion_commit_message` |  |
| `tag_list` |  |
| `topics` |  |
| `updated_at` |  |
| `visibility` |  |
| `warn_about_potentially_unwanted_characters` |  |
| `web_based_commit_signing_enabled` |  |
| `web_url` |  |
| `wiki_access_level` |  |
| `wiki_enabled` |  |

Operations: Create, Load.

API path: `/api/v4/projects/{id}/housekeeping`

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
| `merge_access_levels` |  |
| `name` |  |
| `push_access_levels` |  |
| `unprotect_access_levels` |  |

Operations: Create, List, Load, Update.

API path: `/api/v4/projects/{id}/protected_branches`

#### ApiEntitiesProtectedTag

| Field | Description |
| --- | --- |
| `access_level` |  |
| `access_level_description` |  |
| `create_access_levels` |  |
| `deploy_key_id` |  |
| `group_id` |  |
| `id` |  |
| `name` |  |
| `user_id` |  |

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
| `assignee` | API_Entities_UserBasic model |
| `assignees` | API_Entities_UserBasic model |
| `author` | API_Entities_UserBasic model |
| `blocking_issues_count` |  |
| `closed_at` |  |
| `closed_by` | API_Entities_UserBasic model |
| `confidential` |  |
| `created_at` |  |
| `description` |  |
| `discussion_locked` |  |
| `downvotes` |  |
| `due_date` |  |
| `epic` |  |
| `epic_iid` |  |
| `has_tasks` |  |
| `health_status` |  |
| `id` |  |
| `iid` |  |
| `imported` |  |
| `imported_from` |  |
| `issue_link_id` |  |
| `issue_type` |  |
| `iteration` |  |
| `labels` |  |
| `link_created_at` |  |
| `link_type` |  |
| `link_updated_at` |  |
| `links` |  |
| `merge_requests_count` |  |
| `milestone` |  |
| `moved_to_id` |  |
| `project_id` |  |
| `references` |  |
| `service_desk_reply_to` |  |
| `severity` | One of ["UNKNOWN", "LOW", "MEDIUM", "HIGH", "CRITICAL"] |
| `state` |  |
| `subscribed` |  |
| `task_completion_status` |  |
| `task_status` |  |
| `time_stats` | API_Entities_IssuableTimeStats model |
| `title` |  |
| `type` | One of ["ISSUE", "INCIDENT", "TEST_CASE", "REQUIREMENT", "TASK", "TICKET"] |
| `updated_at` |  |
| `upvotes` |  |
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
| `assets` |  |
| `author` | API_Entities_UserBasic model |
| `commit` | API_Entities_Commit model |
| `commit_path` |  |
| `created_at` |  |
| `description` |  |
| `description_html` |  |
| `evidences` |  |
| `id` |  |
| `links` |  |
| `milestones` |  |
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
| `host_keys` |  |
| `id` |  |
| `keep_divergent_refs` |  |
| `last_error` |  |
| `last_successful_update_at` |  |
| `last_update_at` |  |
| `last_update_started_at` |  |
| `mirror_branch_regex` |  |
| `only_protected_branches` |  |
| `update_status` |  |
| `url` |  |

Operations: Create, List, Load, Update.

API path: `/api/v4/projects/{id}/remote_mirrors`

#### ApiEntitiesRepositoryHealth

| Field | Description |
| --- | --- |
| `alternates` |  |
| `bitmap` |  |
| `commit_graph` |  |
| `is_object_pool` |  |
| `last_full_repack` |  |
| `multi_pack_index` |  |
| `multi_pack_index_bitmap` |  |
| `objects` |  |
| `references` |  |
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
| `scopes` |  |
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
| `user` | API_Entities_UserBasic model |

Operations: List, Load.

API path: `/api/v4/projects/{id}/issues/{eventable_id}/resource_milestone_events`

#### ApiEntitiesSnippet

| Field | Description |
| --- | --- |
| `author` | API_Entities_UserBasic model |
| `created_at` |  |
| `description` |  |
| `file_name` |  |
| `files` |  |
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
| `custom_attributes` |  |
| `discord` |  |
| `email` |  |
| `external` |  |
| `extra_shared_runners_minutes_limit` |  |
| `followers` |  |
| `following` |  |
| `github` |  |
| `id` |  |
| `identities` |  |
| `is_followed` |  |
| `job_title` |  |
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
| `pronouns` |  |
| `public_email` |  |
| `scim_identities` |  |
| `shared_runners_minutes_limit` |  |
| `state` |  |
| `theme_id` |  |
| `twitter` |  |
| `two_factor_enabled` |  |
| `username` |  |
| `web_url` |  |
| `website_url` |  |
| `work_information` |  |

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
| `target_access_levels` |  |
| `target_path` |  |
| `theme` |  |

Operations: Create, Load, Remove, Update.

API path: `/api/v4/broadcast_messages`

#### ApiEntitiesTag

| Field | Description |
| --- | --- |
| `commit` | API_Entities_Commit model |
| `created_at` |  |
| `id` |  |
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
| `id` |  |
| `modules` |  |
| `name` |  |
| `provider` |  |
| `providers` |  |
| `root` |  |
| `source` |  |
| `submodules` |  |
| `version` |  |
| `versions` |  |

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
| `avatar_path` |  |
| `avatar_url` |  |
| `created_at` |  |
| `custom_attributes` |  |
| `description` |  |
| `expires_at` |  |
| `id` |  |
| `last_used` |  |
| `locked` |  |
| `name` |  |
| `owner` | API_Entities_UserBasic model |
| `public_email` |  |
| `state` |  |
| `token` |  |
| `updated_at` |  |
| `username` |  |
| `web_url` |  |

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
| `assigned_issues` |  |
| `assigned_merge_requests` |  |
| `merge_requests` |  |
| `review_requested_merge_requests` |  |
| `todos` |  |

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
| `custom_attributes` |  |
| `discord` |  |
| `email` |  |
| `external` |  |
| `extra_shared_runners_minutes_limit` |  |
| `followers` |  |
| `following` |  |
| `github` |  |
| `id` |  |
| `identities` |  |
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
| `pronouns` |  |
| `public_email` |  |
| `scim_identities` |  |
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
| `id` |  |

Operations: Remove.

API path: `/api/v4/applications/{id}`

#### AwardEmoji

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Remove.

API path: `/api/v4/groups/{id}/epics/{epic_iid}/notes/{note_id}/award_emoji/{award_id}`

#### Badge

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Remove.

API path: `/api/v4/groups/{id}/badges/{badge_id}`

#### Branch

| Field | Description |
| --- | --- |
| `id` |  |

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
| `id` |  |

Operations: Remove.

API path: `/api/v4/projects/{id}/variables/{key}`

#### Cluster

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Remove.

API path: `/api/v4/groups/{id}/clusters/{cluster_id}`

#### ClusterAgent

| Field | Description |
| --- | --- |
| `id` |  |

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
| `id` |  |

Operations: Remove.

API path: `/api/v4/projects/{id}/packages/conan/v1/conans/{package_name}/{package_version}/{package_username}/{package_channel}`

#### ConanPackage

| Field | Description |
| --- | --- |
| `id` |  |

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
| `id` |  |
| `key` |  |
| `value` |  |

Operations: Load.

API path: `/api/v4/groups/{id}/custom_attributes/{key}`

#### Debian

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Update.

API path: `/api/v4/projects/{id}/packages/debian/{file_name}/authorize`

#### DebianDistribution

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Remove.

API path: `/api/v4/groups/{id}/-/debian_distributions/{codename}`

#### DebianPackage

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Load.

API path: `/api/v4/groups/{id}/-/packages/debian/pool/{distribution}/{project_id}/{letter}/{package_name}/{package_version}/{file_name}`

#### DependencyProxy

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/api/v4/groups/{id}/dependency_proxy/cache`

#### DeployKey

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Remove.

API path: `/api/v4/projects/{id}/deploy_keys/{key_id}`

#### DeployToken

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Remove.

API path: `/api/v4/groups/{id}/deploy_tokens/{token_id}`

#### Deployment

| Field | Description |
| --- | --- |
| `id` |  |

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
| `details` |  |
| `entity_id` |  |
| `entity_type` |  |
| `event_name` |  |
| `id` |  |

Operations: List, Load.

API path: `/api/v4/groups/{id}/audit_events`

#### EeApiEntitiesBillableMembership

| Field | Description |
| --- | --- |
| `custom_role` |  |
| `integer_value` |  |
| `string_value` |  |

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
| `db_replication_lag_seconds` |  |
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
| `links` |  |
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
| `namespaces` |  |
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
| `replication_slots_max_retained_wal_bytes` |  |
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
| `storage_shards` |  |
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
| `pipeline_refs` |  |

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
| `contains_hidden_groups` |  |
| `eligible_approvers` |  |
| `groups` |  |
| `id` |  |
| `name` |  |
| `overridden` |  |
| `report_type` |  |
| `rule_type` |  |
| `section` |  |
| `source_rule` |  |
| `users` |  |

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
| `id` |  |

Operations: Create, Remove.

API path: `/api/v4/projects/{id}/environments/stop_stale`

#### ErrorTrackingClientKey

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Remove.

API path: `/api/v4/projects/{id}/error_tracking/client_keys/{key_id}`

#### Feature

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Remove.

API path: `/api/v4/features/{name}`

#### FeatureFlag

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Create, Load, Remove.

API path: `/api/v4/feature_flags/unleash/{project_id}/client/metrics`

#### FeatureFlagsUserList

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Remove.

API path: `/api/v4/projects/{id}/feature_flags_user_lists/{iid}`

#### FreezePeriod

| Field | Description |
| --- | --- |
| `id` |  |

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
| `id` |  |

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
| `id` |  |

Operations: Create, Load, Remove, Update.

API path: `/api/v4/groups/{id}/placeholder_reassignments`

#### GroupAvatar

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Load.

API path: `/api/v4/groups/{id}/avatar`

#### GroupExport

| Field | Description |
| --- | --- |
| `id` |  |

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
| `id` |  |

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
| `id` |  |

Operations: Create, Remove.

API path: `/api/v4/projects/{id}/integrations/mattermost_slash_commands/trigger`

#### Invitation

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Remove.

API path: `/api/v4/groups/{id}/invitations/{email}`

#### IssueLink

| Field | Description |
| --- | --- |
| `id` |  |

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
| `id` |  |

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
| `id` |  |

Operations: Remove, Update.

API path: `/api/v4/groups/{id}/members/{user_id}`

#### MergeRequest

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Load, Remove, Update.

API path: `/api/v4/projects/{id}/merge_requests/{merge_request_iid}/related_issues`

#### Metadata

| Field | Description |
| --- | --- |
| `enabled` |  |
| `externalK8sProxyUrl` |  |
| `externalUrl` |  |
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
| `id` |  |

Operations: Remove.

API path: `/api/v4/namespaces/{id}/storage/limit_exclusion`

#### Npm

| Field | Description |
| --- | --- |
| `id` |  |

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
| `authors` |  |
| `count` |  |
| `dependencyGroups` |  |
| `description` |  |
| `iconUrl` |  |
| `id` |  |
| `items` |  |
| `licenseUrl` |  |
| `lower` |  |
| `packageContent` |  |
| `projectUrl` |  |
| `published` |  |
| `summary` |  |
| `tags` |  |
| `upper` |  |
| `version` |  |

Operations: List, Load, Remove, Update.

API path: `/api/v4/groups/{id}/-/packages/nuget/metadata/*package_name/index`

#### PackageFile

| Field | Description |
| --- | --- |
| `id` |  |

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
| `id` |  |

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
| `duration` | Time spent running in seconds |
| `finished_at` |  |
| `id` |  |
| `iid` |  |
| `name` |  |
| `project_id` |  |
| `queued_duration` | Time spent enqueued in seconds |
| `ref` |  |
| `sha` |  |
| `source` |  |
| `started_at` |  |
| `status` |  |
| `tag` |  |
| `updated_at` |  |
| `user` | API_Entities_UserBasic model |
| `web_url` |  |
| `yaml_errors` |  |

Operations: Create, Load, Remove, Update.

API path: `/api/v4/projects/{id}/hooks/{hook_id}/events/{hook_log_id}/resend`

#### ProjectAvatar

| Field | Description |
| --- | --- |
| `id` |  |

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
| `id` |  |

Operations: Create, Load.

API path: `/api/v4/projects/{id}/export`

#### ProjectHook

| Field | Description |
| --- | --- |
| `id` |  |

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
| `id` |  |

Operations: Remove.

API path: `/api/v4/projects/{id}/packages/{package_id}`

#### ProjectSnippet

| Field | Description |
| --- | --- |
| `id` |  |

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
| `id` |  |

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
| `id` |  |

Operations: Load, Remove.

API path: `/api/v4/projects/{id}/releases/{tag_name}/downloads/*direct_asset_path`

#### ReleaseLink

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Remove.

API path: `/api/v4/projects/{id}/releases/{tag_name}/assets/links/{link_id}`

#### RemoteMirror

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Load, Remove.

API path: `/api/v4/projects/{id}/remote_mirrors/{mirror_id}/public_key`

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
| `id` |  |

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
| `id` |  |

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
| `id` |  |

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
| `id` |  |

Operations: Load, Remove.

API path: `/api/v4/snippets/{id}/files/{ref}/{file_path}/raw`

#### Starrer

| Field | Description |
| --- | --- |
| `avatar_path` |  |
| `avatar_url` |  |
| `custom_attributes` |  |
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
| `id` |  |

Operations: Remove.

API path: `/api/v4/hooks/{hook_id}`

#### Tag

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Remove.

API path: `/api/v4/projects/{id}/repository/tags/{tag_name}`

#### TerraformRegistry

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Load, Update.

API path: `/api/v4/projects/{id}/packages/terraform/modules/{module_name}/{module_system}/*module_version`

#### TerraformState

| Field | Description |
| --- | --- |
| `id` |  |

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
| `test_cases` |  |
| `total_count` |  |
| `total_time` |  |

Operations: List.

API path: `/api/v4/projects/{id}/pipelines/{pipeline_id}/test_report`

#### TestReportSummary

| Field | Description |
| --- | --- |
| `test_suites` |  |
| `total` |  |

Operations: Load.

API path: `/api/v4/projects/{id}/pipelines/{pipeline_id}/test_report_summary`

#### Topic

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Remove.

API path: `/api/v4/topics/{id}`

#### UnleashApi

| Field | Description |
| --- | --- |
| `id` |  |

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
| `custom_attributes` |  |
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
| `id` |  |

Operations: Remove.

API path: `/api/v4/groups/{id}/wikis/{slug}`



## Entities


### AccessRequest

Create an instance: `access_request = client.AccessRequest()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |


### AlertManagement

Create an instance: `alert_management = client.AlertManagement()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |

#### Example: Create

```python
alert_management = client.AlertManagement().create({
    "alert_management_alert_id": "example_alert_management_alert_id",  # str
    "project_id": "example_project_id",  # str
})
```


### ApiEntitiesAccessRequester

Create an instance: `api_entities_access_requester = client.ApiEntitiesAccessRequester()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_path` | `str` |  |
| `avatar_url` | `str` |  |
| `custom_attributes` | `list` |  |
| `id` | `int` |  |
| `key` | `str` |  |
| `locked` | `bool` |  |
| `name` | `str` |  |
| `public_email` | `str` |  |
| `requested_at` | `str` |  |
| `state` | `str` |  |
| `username` | `str` |  |
| `value` | `str` |  |
| `web_url` | `str` |  |

#### Example: List

```python
api_entities_access_requesters = client.ApiEntitiesAccessRequester().list({"group_id": "example"})
```

#### Example: Create

```python
api_entities_access_requester = client.ApiEntitiesAccessRequester().create({
    "group_id": "example_group_id",  # str
})
```


### ApiEntitiesAppearance

Create an instance: `api_entities_appearance = client.ApiEntitiesAppearance()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `str` |  |
| `email_header_and_footer_enabled` | `str` |  |
| `favicon` | `str` |  |
| `footer_message` | `str` |  |
| `header_logo` | `str` |  |
| `header_message` | `str` |  |
| `logo` | `str` |  |
| `member_guidelines` | `str` |  |
| `message_background_color` | `str` |  |
| `message_font_color` | `str` |  |
| `new_project_guidelines` | `str` |  |
| `profile_image_guidelines` | `str` |  |
| `pwa_description` | `str` |  |
| `pwa_icon` | `str` |  |
| `pwa_name` | `str` |  |
| `pwa_short_name` | `str` |  |
| `title` | `str` |  |

#### Example: Load

```python
api_entities_appearance = client.ApiEntitiesAppearance().load()
```


### ApiEntitiesApplication

Create an instance: `api_entities_application = client.ApiEntitiesApplication()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `application_id` | `str` |  |
| `application_name` | `str` |  |
| `callback_url` | `str` |  |
| `confidential` | `bool` |  |
| `id` | `str` |  |

#### Example: List

```python
api_entities_applications = client.ApiEntitiesApplication().list()
```


### ApiEntitiesApplicationStatistic

Create an instance: `api_entities_application_statistic = client.ApiEntitiesApplicationStatistic()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active_users` | `int` | Number of active users |
| `forks` | `int` | Approximate number of repo forks |
| `groups` | `int` | Approximate number of projects |
| `issues` | `int` | Approximate number of issues |
| `merge_requests` | `int` | Approximate number of merge requests |
| `milestones` | `int` | Approximate number of milestones |
| `notes` | `int` | Approximate number of notes |
| `projects` | `int` | Approximate number of projects |
| `snippets` | `int` | Approximate number of snippets |
| `ssh_keys` | `int` | Approximate number of SSH keys |
| `users` | `int` | Approximate number of users |

#### Example: Load

```python
api_entities_application_statistic = client.ApiEntitiesApplicationStatistic().load()
```


### ApiEntitiesApplicationWithSecret

Create an instance: `api_entities_application_with_secret = client.ApiEntitiesApplicationWithSecret()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `application_id` | `str` |  |
| `application_name` | `str` |  |
| `callback_url` | `str` |  |
| `confidential` | `bool` |  |
| `id` | `str` |  |
| `secret` | `str` |  |

#### Example: Create

```python
api_entities_application_with_secret = client.ApiEntitiesApplicationWithSecret().create({
    "post_api_v4_application": {},  # dict
})
```


### ApiEntitiesAvatar

Create an instance: `api_entities_avatar = client.ApiEntitiesAvatar()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_url` | `str` |  |

#### Example: Load

```python
api_entities_avatar = client.ApiEntitiesAvatar().load({"email": "email"})
```


### ApiEntitiesAwardEmoji

Create an instance: `api_entities_award_emoji = client.ApiEntitiesAwardEmoji()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_path` | `str` |  |
| `avatar_url` | `str` |  |
| `awardable_id` | `int` |  |
| `awardable_type` | `str` |  |
| `created_at` | `str` |  |
| `custom_attributes` | `list` |  |
| `id` | `int` |  |
| `locked` | `bool` |  |
| `name` | `str` |  |
| `public_email` | `str` |  |
| `state` | `str` |  |
| `updated_at` | `str` |  |
| `url` | `str` |  |
| `user` | `dict` | API_Entities_UserBasic model |
| `username` | `str` |  |
| `web_url` | `str` |  |

#### Example: Load

```python
api_entities_award_emoji = client.ApiEntitiesAwardEmoji().load({"id": "api_entities_award_emoji_id"})
```

#### Example: List

```python
api_entities_award_emojis = client.ApiEntitiesAwardEmoji().list({"epic_id": "example", "group_id": "example"})
```

#### Example: Create

```python
api_entities_award_emoji = client.ApiEntitiesAwardEmoji().create({
    "epic_id": "example_epic_id",  # str
    "group_id": "example_group_id",  # str
    "post_api_v4_groups_id_epics_epic_iid_award_emoji": {},  # dict
})
```


### ApiEntitiesBadge

Create an instance: `api_entities_badge = client.ApiEntitiesBadge()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |
| `image_url` | `str` |  |
| `kind` | `str` |  |
| `link_url` | `str` |  |
| `name` | `str` |  |
| `rendered_image_url` | `str` |  |
| `rendered_link_url` | `str` |  |

#### Example: Load

```python
api_entities_badge = client.ApiEntitiesBadge().load({"id": "api_entities_badge_id"})
```

#### Example: List

```python
api_entities_badges = client.ApiEntitiesBadge().list({"group_id": "example"})
```

#### Example: Create

```python
api_entities_badge = client.ApiEntitiesBadge().create({
    "group_id": "example_group_id",  # str
    "post_api_v4_groups_id_badge": {},  # dict
})
```


### ApiEntitiesBasicBadgeDetail

Create an instance: `api_entities_basic_badge_detail = client.ApiEntitiesBasicBadgeDetail()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `image_url` | `str` |  |
| `link_url` | `str` |  |
| `name` | `str` |  |
| `rendered_image_url` | `str` |  |
| `rendered_link_url` | `str` |  |

#### Example: Load

```python
api_entities_basic_badge_detail = client.ApiEntitiesBasicBadgeDetail().load({"image_url": "image_url", "link_url": "link_url"})
```


### ApiEntitiesBasicGroupDetail

Create an instance: `api_entities_basic_group_detail = client.ApiEntitiesBasicGroupDetail()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```python
api_entities_basic_group_detail = client.ApiEntitiesBasicGroupDetail().create({
    "project_id": "example_project_id",  # str
    "post_api_v4_projects_id_job_token_scope_groups_allowlist": {},  # dict
})
```


### ApiEntitiesBasicProjectDetail

Create an instance: `api_entities_basic_project_detail = client.ApiEntitiesBasicProjectDetail()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_url` | `str` |  |
| `created_at` | `str` |  |
| `custom_attributes` | `dict` | API_Entities_CustomAttribute model |
| `default_branch` | `str` |  |
| `description` | `str` |  |
| `forks_count` | `int` |  |
| `http_url_to_repo` | `str` |  |
| `id` | `int` |  |
| `last_activity_at` | `str` |  |
| `license` | `dict` |  |
| `license_url` | `str` |  |
| `name` | `str` |  |
| `name_with_namespace` | `str` |  |
| `namespace` | `dict` |  |
| `path` | `str` |  |
| `path_with_namespace` | `str` |  |
| `readme_url` | `str` |  |
| `repository_storage` | `str` |  |
| `ssh_url_to_repo` | `str` |  |
| `star_count` | `int` |  |
| `tag_list` | `list` |  |
| `topics` | `list` |  |
| `visibility` | `str` |  |
| `web_url` | `str` |  |

#### Example: List

```python
api_entities_basic_project_details = client.ApiEntitiesBasicProjectDetail().list()
```

#### Example: Create

```python
api_entities_basic_project_detail = client.ApiEntitiesBasicProjectDetail().create({
    "project_id": "example_project_id",  # str
    "post_api_v4_projects_id_job_token_scope_allowlist": {},  # dict
})
```


### ApiEntitiesBasicRef

Create an instance: `api_entities_basic_ref = client.ApiEntitiesBasicRef()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `name` | `str` |  |
| `type` | `str` |  |

#### Example: List

```python
api_entities_basic_refs = client.ApiEntitiesBasicRef().list({"project_id": "example", "sha": "example"})
```


### ApiEntitiesBasicSuccess

Create an instance: `api_entities_basic_success = client.ApiEntitiesBasicSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```python
api_entities_basic_success = client.ApiEntitiesBasicSuccess().create({
    "post_api_v4_integrations_jira_connect_subscription": {},  # dict
})
```


### ApiEntitiesBatchedBackgroundMigration

Create an instance: `api_entities_batched_background_migration = client.ApiEntitiesBatchedBackgroundMigration()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `column_name` | `str` |  |
| `created_at` | `str` |  |
| `id` | `str` |  |
| `job_class_name` | `str` |  |
| `progress` | `float` |  |
| `status` | `str` |  |
| `table_name` | `str` |  |

#### Example: Load

```python
api_entities_batched_background_migration = client.ApiEntitiesBatchedBackgroundMigration().load({"id": "api_entities_batched_background_migration_id"})
```

#### Example: List

```python
api_entities_batched_background_migrations = client.ApiEntitiesBatchedBackgroundMigration().list()
```


### ApiEntitiesBranch

Create an instance: `api_entities_branch = client.ApiEntitiesBranch()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author_email` | `str` |  |
| `author_name` | `str` |  |
| `authored_date` | `str` |  |
| `can_push` | `bool` |  |
| `commit` | `dict` | API_Entities_Commit model |
| `committed_date` | `str` |  |
| `committer_email` | `str` |  |
| `committer_name` | `str` |  |
| `created_at` | `str` |  |
| `default` | `bool` |  |
| `developers_can_merge` | `bool` |  |
| `developers_can_push` | `bool` |  |
| `extended_trailers` | `dict` |  |
| `id` | `str` |  |
| `merged` | `bool` |  |
| `message` | `str` |  |
| `name` | `str` |  |
| `parent_ids` | `list` |  |
| `protected` | `bool` |  |
| `short_id` | `str` |  |
| `title` | `str` |  |
| `trailers` | `dict` |  |
| `web_url` | `str` |  |

#### Example: Load

```python
api_entities_branch = client.ApiEntitiesBranch().load({"id": "api_entities_branch_id", "project_id": "project_id"})
```

#### Example: List

```python
api_entities_branchs = client.ApiEntitiesBranch().list({"project_id": "example"})
```

#### Example: Create

```python
api_entities_branch = client.ApiEntitiesBranch().create({
    "project_id": "example_project_id",  # str
    "post_api_v4_projects_id_repository_branch": {},  # dict
})
```


### ApiEntitiesBulkImport

Create an instance: `api_entities_bulk_import = client.ApiEntitiesBulkImport()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `bulk_import_id` | `int` |  |
| `created_at` | `str` |  |
| `destination_full_path` | `str` |  |
| `destination_name` | `str` |  |
| `destination_namespace` | `str` |  |
| `destination_slug` | `str` |  |
| `entity_type` | `str` |  |
| `failures` | `list` |  |
| `has_failures` | `bool` |  |
| `id` | `int` |  |
| `migrate_memberships` | `bool` |  |
| `migrate_projects` | `bool` |  |
| `namespace_id` | `int` |  |
| `parent_id` | `int` |  |
| `project_id` | `int` |  |
| `source_full_path` | `str` |  |
| `source_type` | `str` |  |
| `source_url` | `str` |  |
| `stats` | `dict` |  |
| `status` | `str` |  |
| `updated_at` | `str` |  |

#### Example: Load

```python
api_entities_bulk_import = client.ApiEntitiesBulkImport().load({"id": "api_entities_bulk_import_id"})
```

#### Example: List

```python
api_entities_bulk_imports = client.ApiEntitiesBulkImport().list()
```

#### Example: Create

```python
api_entities_bulk_import = client.ApiEntitiesBulkImport().create({
    "configuration_access_token": "example_configuration_access_token",  # Any
    "configuration_url": "example_configuration_url",  # Any
    "entities_destination_namespace": "example_entities_destination_namespace",  # Any
    "entities_source_full_path": "example_entities_source_full_path",  # Any
    "entities_source_type": "example_entities_source_type",  # Any
})
```


### ApiEntitiesBulkImportsEntityFailure

Create an instance: `api_entities_bulk_imports_entity_failure = client.ApiEntitiesBulkImportsEntityFailure()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `correlation_id_value` | `str` |  |
| `exception_class` | `str` |  |
| `exception_message` | `str` |  |
| `relation` | `str` |  |
| `source_title` | `str` |  |
| `source_url` | `str` |  |

#### Example: Load

```python
api_entities_bulk_imports_entity_failure = client.ApiEntitiesBulkImportsEntityFailure().load({"bulk_import_id": "bulk_import_id", "entity_id": "entity_id"})
```


### ApiEntitiesBulkImportsExportStatus

Create an instance: `api_entities_bulk_imports_export_status = client.ApiEntitiesBulkImportsExportStatus()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `batched` | `bool` |  |
| `batches` | `dict` |  |
| `batches_count` | `int` |  |
| `error` | `str` |  |
| `relation` | `str` |  |
| `status` | `str` |  |
| `total_objects_count` | `int` |  |
| `updated_at` | `str` |  |

#### Example: List

```python
api_entities_bulk_imports_export_statuss = client.ApiEntitiesBulkImportsExportStatus().list({"group_id": "example"})
```


### ApiEntitiesChangelog

Create an instance: `api_entities_changelog = client.ApiEntitiesChangelog()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `notes` | `str` |  |

#### Example: Load

```python
api_entities_changelog = client.ApiEntitiesChangelog().load({"project_id": "project_id", "version": "version"})
```


### ApiEntitiesCiBridge

Create an instance: `api_entities_ci_bridge = client.ApiEntitiesCiBridge()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_failure` | `bool` |  |
| `commit` | `dict` | API_Entities_Commit model |
| `coverage` | `float` |  |
| `created_at` | `str` |  |
| `downstream_pipeline` | `dict` | API_Entities_Ci_PipelineBasic model |
| `duration` | `float` | Time spent running |
| `erased_at` | `str` |  |
| `failure_reason` | `str` |  |
| `finished_at` | `str` |  |
| `id` | `int` |  |
| `name` | `str` |  |
| `pipeline` | `dict` | API_Entities_Ci_PipelineBasic model |
| `project` | `dict` |  |
| `queued_duration` | `float` | Time spent enqueued |
| `ref` | `str` |  |
| `stage` | `str` |  |
| `started_at` | `str` |  |
| `status` | `str` |  |
| `tag` | `bool` |  |
| `user` | `dict` |  |
| `web_url` | `str` |  |

#### Example: List

```python
api_entities_ci_bridges = client.ApiEntitiesCiBridge().list({"pipeline_id": "example", "project_id": "example"})
```


### ApiEntitiesCiCatalogResourcesVersion

Create an instance: `api_entities_ci_catalog_resources_version = client.ApiEntitiesCiCatalogResourcesVersion()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```python
api_entities_ci_catalog_resources_version = client.ApiEntitiesCiCatalogResourcesVersion().create({
    "project_id": "example_project_id",  # str
    "post_api_v4_projects_id_catalog_publish": {},  # dict
})
```


### ApiEntitiesCiJob

Create an instance: `api_entities_ci_job = client.ApiEntitiesCiJob()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_failure` | `bool` |  |
| `archived` | `bool` |  |
| `artifacts` | `list` |  |
| `artifacts_expire_at` | `str` |  |
| `artifacts_file` | `dict` |  |
| `commit` | `dict` | API_Entities_Commit model |
| `coverage` | `float` |  |
| `created_at` | `str` |  |
| `duration` | `float` | Time spent running |
| `erased_at` | `str` |  |
| `failure_reason` | `str` |  |
| `file_format` | `str` |  |
| `file_type` | `str` |  |
| `filename` | `str` |  |
| `finished_at` | `str` |  |
| `id` | `int` |  |
| `name` | `str` |  |
| `pipeline` | `dict` | API_Entities_Ci_PipelineBasic model |
| `project` | `dict` |  |
| `queued_duration` | `float` | Time spent enqueued |
| `ref` | `str` |  |
| `runner` | `dict` | API_Entities_Ci_Runner model |
| `runner_manager` | `dict` | API_Entities_Ci_RunnerManager model |
| `size` | `int` |  |
| `stage` | `str` |  |
| `started_at` | `str` |  |
| `status` | `str` |  |
| `tag` | `bool` |  |
| `tag_list` | `list` |  |
| `user` | `dict` |  |
| `web_url` | `str` |  |

#### Example: Load

```python
api_entities_ci_job = client.ApiEntitiesCiJob().load({"id": "api_entities_ci_job_id", "project_id": "project_id"})
```

#### Example: List

```python
api_entities_ci_jobs = client.ApiEntitiesCiJob().list()
```

#### Example: Create

```python
api_entities_ci_job = client.ApiEntitiesCiJob().create({
    "job_id": "example_job_id",  # str
    "project_id": "example_project_id",  # str
})
```


### ApiEntitiesCiJobBasic

Create an instance: `api_entities_ci_job_basic = client.ApiEntitiesCiJobBasic()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_failure` | `bool` |  |
| `commit` | `dict` | API_Entities_Commit model |
| `coverage` | `float` |  |
| `created_at` | `str` |  |
| `duration` | `float` | Time spent running |
| `erased_at` | `str` |  |
| `failure_reason` | `str` |  |
| `finished_at` | `str` |  |
| `id` | `int` |  |
| `name` | `str` |  |
| `pipeline` | `dict` | API_Entities_Ci_PipelineBasic model |
| `project` | `dict` |  |
| `queued_duration` | `float` | Time spent enqueued |
| `ref` | `str` |  |
| `stage` | `str` |  |
| `started_at` | `str` |  |
| `status` | `str` |  |
| `tag` | `bool` |  |
| `user` | `dict` |  |
| `web_url` | `str` |  |

#### Example: List

```python
api_entities_ci_job_basics = client.ApiEntitiesCiJobBasic().list({"key": "example", "project_id": "example"})
```

#### Example: Create

```python
api_entities_ci_job_basic = client.ApiEntitiesCiJobBasic().create({
    "job_id": "example_job_id",  # str
    "project_id": "example_project_id",  # str
    "post_api_v4_projects_id_jobs_job_id_play": {},  # dict
})
```


### ApiEntitiesCiJobBasicWithProject

Create an instance: `api_entities_ci_job_basic_with_project = client.ApiEntitiesCiJobBasicWithProject()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_failure` | `bool` |  |
| `commit` | `dict` | API_Entities_Commit model |
| `coverage` | `float` |  |
| `created_at` | `str` |  |
| `duration` | `float` | Time spent running |
| `erased_at` | `str` |  |
| `failure_reason` | `str` |  |
| `finished_at` | `str` |  |
| `id` | `int` |  |
| `name` | `str` |  |
| `pipeline` | `dict` | API_Entities_Ci_PipelineBasic model |
| `project` | `dict` |  |
| `queued_duration` | `float` | Time spent enqueued |
| `ref` | `str` |  |
| `stage` | `str` |  |
| `started_at` | `str` |  |
| `status` | `str` |  |
| `tag` | `bool` |  |
| `user` | `dict` |  |
| `web_url` | `str` |  |

#### Example: Load

```python
api_entities_ci_job_basic_with_project = client.ApiEntitiesCiJobBasicWithProject().load({"runner_id": "runner_id"})
```


### ApiEntitiesCiLintResult

Create an instance: `api_entities_ci_lint_result = client.ApiEntitiesCiLintResult()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `blob` | `str` |  |
| `context_project` | `str` |  |
| `context_sha` | `str` |  |
| `errors` | `list` |  |
| `extra` | `dict` |  |
| `includes` | `list` |  |
| `jobs` | `list` |  |
| `location` | `str` |  |
| `merged_yaml` | `str` |  |
| `raw` | `str` |  |
| `type` | `str` |  |
| `valid` | `bool` |  |
| `warnings` | `list` |  |

#### Example: List

```python
api_entities_ci_lint_results = client.ApiEntitiesCiLintResult().list({"project_id": "example"})
```

#### Example: Create

```python
api_entities_ci_lint_result = client.ApiEntitiesCiLintResult().create({
    "project_id": "example_project_id",  # str
    "post_api_v4_projects_id_ci_lint": {},  # dict
})
```


### ApiEntitiesCiPipeline

Create an instance: `api_entities_ci_pipeline = client.ApiEntitiesCiPipeline()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```python
api_entities_ci_pipeline = client.ApiEntitiesCiPipeline().create({
    "project_id": "example_project_id",  # str
})
```


### ApiEntitiesCiPipelineBasic

Create an instance: `api_entities_ci_pipeline_basic = client.ApiEntitiesCiPipelineBasic()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` |  |
| `id` | `int` |  |
| `iid` | `int` |  |
| `project_id` | `int` |  |
| `ref` | `str` |  |
| `sha` | `str` |  |
| `source` | `str` |  |
| `status` | `str` |  |
| `updated_at` | `str` |  |
| `web_url` | `str` |  |

#### Example: Load

```python
api_entities_ci_pipeline_basic = client.ApiEntitiesCiPipelineBasic().load({"merge_request_id": "merge_request_id", "project_id": "project_id"})
```

#### Example: List

```python
api_entities_ci_pipeline_basics = client.ApiEntitiesCiPipelineBasic().list({"project_id": "example"})
```


### ApiEntitiesCiPipelineSchedule

Create an instance: `api_entities_ci_pipeline_schedule = client.ApiEntitiesCiPipelineSchedule()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` |  |
| `created_at` | `str` |  |
| `cron` | `str` |  |
| `cron_timezone` | `str` |  |
| `description` | `str` |  |
| `id` | `int` |  |
| `inputs` | `dict` |  |
| `next_run_at` | `str` |  |
| `owner` | `dict` | API_Entities_UserBasic model |
| `ref` | `str` |  |
| `updated_at` | `str` |  |

#### Example: List

```python
api_entities_ci_pipeline_schedules = client.ApiEntitiesCiPipelineSchedule().list({"project_id": "example"})
```


### ApiEntitiesCiPipelineScheduleDetail

Create an instance: `api_entities_ci_pipeline_schedule_detail = client.ApiEntitiesCiPipelineScheduleDetail()`

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
| `created_at` | `str` |  |
| `cron` | `str` |  |
| `cron_timezone` | `str` |  |
| `description` | `str` |  |
| `id` | `int` |  |
| `inputs` | `dict` |  |
| `last_pipeline` | `dict` | API_Entities_Ci_PipelineBasic model |
| `next_run_at` | `str` |  |
| `owner` | `dict` | API_Entities_UserBasic model |
| `ref` | `str` |  |
| `updated_at` | `str` |  |
| `variables` | `dict` | API_Entities_Ci_Variable model |

#### Example: Load

```python
api_entities_ci_pipeline_schedule_detail = client.ApiEntitiesCiPipelineScheduleDetail().load({"pipeline_schedule_id": "pipeline_schedule_id", "project_id": "project_id"})
```

#### Example: Create

```python
api_entities_ci_pipeline_schedule_detail = client.ApiEntitiesCiPipelineScheduleDetail().create({
    "project_id": "example_project_id",  # str
})
```


### ApiEntitiesCiResetTokenResult

Create an instance: `api_entities_ci_reset_token_result = client.ApiEntitiesCiResetTokenResult()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```python
api_entities_ci_reset_token_result = client.ApiEntitiesCiResetTokenResult().create({
    "post_api_v4_runners_reset_authentication_token": {},  # dict
})
```


### ApiEntitiesCiResourceGroup

Create an instance: `api_entities_ci_resource_group = client.ApiEntitiesCiResourceGroup()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` |  |
| `id` | `int` |  |
| `key` | `str` |  |
| `process_mode` | `str` |  |
| `updated_at` | `str` |  |

#### Example: Load

```python
api_entities_ci_resource_group = client.ApiEntitiesCiResourceGroup().load({"id": "api_entities_ci_resource_group_id", "project_id": "project_id"})
```

#### Example: List

```python
api_entities_ci_resource_groups = client.ApiEntitiesCiResourceGroup().list({"project_id": "example"})
```


### ApiEntitiesCiRunner

Create an instance: `api_entities_ci_runner = client.ApiEntitiesCiRunner()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_path` | `str` |  |
| `avatar_url` | `str` |  |
| `custom_attributes` | `list` |  |
| `id` | `int` |  |
| `locked` | `bool` |  |
| `name` | `str` |  |
| `public_email` | `str` |  |
| `state` | `str` |  |
| `username` | `str` |  |
| `web_url` | `str` |  |

#### Example: Load

```python
api_entities_ci_runner = client.ApiEntitiesCiRunner().load()
```

#### Example: Create

```python
api_entities_ci_runner = client.ApiEntitiesCiRunner().create({
    "project_id": "example_project_id",  # str
    "post_api_v4_projects_id_runner": {},  # dict
})
```


### ApiEntitiesCiRunnerDetail

Create an instance: `api_entities_ci_runner_detail = client.ApiEntitiesCiRunnerDetail()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `access_level` | `str` |  |
| `active` | `bool` |  |
| `architecture` | `str` |  |
| `contacted_at` | `str` |  |
| `created_at` | `str` |  |
| `created_by` | `dict` | API_Entities_UserBasic model |
| `description` | `str` |  |
| `groups` | `dict` | API_Entities_BasicGroupDetails model |
| `id` | `int` |  |
| `ip_address` | `str` |  |
| `is_shared` | `bool` |  |
| `job_execution_status` | `str` |  |
| `locked` | `bool` |  |
| `maintenance_note` | `str` |  |
| `maximum_timeout` | `str` |  |
| `name` | `str` |  |
| `online` | `bool` |  |
| `paused` | `bool` |  |
| `platform` | `str` |  |
| `projects` | `dict` | API_Entities_BasicProjectDetails model |
| `revision` | `str` |  |
| `run_untagged` | `str` |  |
| `runner_type` | `str` |  |
| `status` | `str` |  |
| `tag_list` | `str` |  |
| `version` | `str` |  |

#### Example: Load

```python
api_entities_ci_runner_detail = client.ApiEntitiesCiRunnerDetail().load({"id": "api_entities_ci_runner_detail_id"})
```


### ApiEntitiesCiRunnerManager

Create an instance: `api_entities_ci_runner_manager = client.ApiEntitiesCiRunnerManager()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `architecture` | `str` |  |
| `contacted_at` | `str` |  |
| `created_at` | `str` |  |
| `id` | `int` |  |
| `ip_address` | `str` |  |
| `job_execution_status` | `str` |  |
| `platform` | `str` |  |
| `revision` | `str` |  |
| `status` | `str` |  |
| `system_id` | `str` |  |
| `version` | `str` |  |

#### Example: Load

```python
api_entities_ci_runner_manager = client.ApiEntitiesCiRunnerManager().load({"runner_id": "runner_id"})
```


### ApiEntitiesCiRunnerRegistrationDetail

Create an instance: `api_entities_ci_runner_registration_detail = client.ApiEntitiesCiRunnerRegistrationDetail()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```python
api_entities_ci_runner_registration_detail = client.ApiEntitiesCiRunnerRegistrationDetail().create({
    "post_api_v4_runner": {},  # dict
})
```


### ApiEntitiesCiSecureFile

Create an instance: `api_entities_ci_secure_file = client.ApiEntitiesCiSecureFile()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |

#### Example: Load

```python
api_entities_ci_secure_file = client.ApiEntitiesCiSecureFile().load({"id": "api_entities_ci_secure_file_id", "project_id": "project_id"})
```

#### Example: Create

```python
api_entities_ci_secure_file = client.ApiEntitiesCiSecureFile().create({
    "project_id": "example_project_id",  # str
    "post_api_v4_projects_id_secure_file": {},  # dict
})
```


### ApiEntitiesCiVariable

Create an instance: `api_entities_ci_variable = client.ApiEntitiesCiVariable()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `str` |  |
| `environment_scope` | `str` |  |
| `hidden` | `bool` |  |
| `id` | `str` |  |
| `key` | `str` |  |
| `masked` | `bool` |  |
| `protected` | `bool` |  |
| `raw` | `bool` |  |
| `value` | `str` |  |
| `variable_type` | `str` |  |

#### Example: Load

```python
api_entities_ci_variable = client.ApiEntitiesCiVariable().load({"id": "api_entities_ci_variable_id", "project_id": "project_id"})
```

#### Example: List

```python
api_entities_ci_variables = client.ApiEntitiesCiVariable().list({"pipeline_id": "example", "project_id": "example"})
```

#### Example: Create

```python
api_entities_ci_variable = client.ApiEntitiesCiVariable().create({
    "group_id": "example_group_id",  # str
    "post_api_v4_groups_id_variable": {},  # dict
})
```


### ApiEntitiesCluster

Create an instance: `api_entities_cluster = client.ApiEntitiesCluster()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cluster_type` | `str` |  |
| `created_at` | `str` |  |
| `domain` | `str` |  |
| `enabled` | `bool` |  |
| `environment_scope` | `str` |  |
| `id` | `str` |  |
| `managed` | `str` |  |
| `management_project` | `dict` |  |
| `name` | `str` |  |
| `namespace_per_environment` | `str` |  |
| `platform_kubernetes` | `dict` |  |
| `platform_type` | `str` |  |
| `provider_gcp` | `dict` |  |
| `provider_type` | `str` |  |
| `user` | `dict` | API_Entities_UserBasic model |

#### Example: Load

```python
api_entities_cluster = client.ApiEntitiesCluster().load({"id": "api_entities_cluster_id"})
```

#### Example: List

```python
api_entities_clusters = client.ApiEntitiesCluster().list()
```

#### Example: Create

```python
api_entities_cluster = client.ApiEntitiesCluster().create({
    "post_api_v4_admin_clusters_add": {},  # dict
})
```


### ApiEntitiesClusterGroup

Create an instance: `api_entities_cluster_group = client.ApiEntitiesClusterGroup()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cluster_type` | `str` |  |
| `created_at` | `str` |  |
| `domain` | `str` |  |
| `enabled` | `bool` |  |
| `environment_scope` | `str` |  |
| `group` | `dict` | API_Entities_BasicGroupDetails model |
| `id` | `str` |  |
| `managed` | `str` |  |
| `management_project` | `dict` |  |
| `name` | `str` |  |
| `namespace_per_environment` | `str` |  |
| `platform_kubernetes` | `dict` |  |
| `platform_type` | `str` |  |
| `provider_gcp` | `dict` |  |
| `provider_type` | `str` |  |
| `user` | `dict` | API_Entities_UserBasic model |

#### Example: Load

```python
api_entities_cluster_group = client.ApiEntitiesClusterGroup().load({"cluster_id": "cluster_id", "group_id": "group_id"})
```

#### Example: Create

```python
api_entities_cluster_group = client.ApiEntitiesClusterGroup().create({
    "group_id": "example_group_id",  # str
    "post_api_v4_groups_id_clusters_user": {},  # dict
})
```


### ApiEntitiesClusterProject

Create an instance: `api_entities_cluster_project = client.ApiEntitiesClusterProject()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cluster_type` | `str` |  |
| `created_at` | `str` |  |
| `domain` | `str` |  |
| `enabled` | `bool` |  |
| `environment_scope` | `str` |  |
| `id` | `str` |  |
| `managed` | `str` |  |
| `management_project` | `dict` |  |
| `name` | `str` |  |
| `namespace_per_environment` | `str` |  |
| `platform_kubernetes` | `dict` |  |
| `platform_type` | `str` |  |
| `project` | `dict` | API_Entities_BasicProjectDetails model |
| `provider_gcp` | `dict` |  |
| `provider_type` | `str` |  |
| `user` | `dict` | API_Entities_UserBasic model |

#### Example: Load

```python
api_entities_cluster_project = client.ApiEntitiesClusterProject().load({"cluster_id": "cluster_id", "project_id": "project_id"})
```

#### Example: Create

```python
api_entities_cluster_project = client.ApiEntitiesClusterProject().create({
    "project_id": "example_project_id",  # str
    "post_api_v4_projects_id_clusters_user": {},  # dict
})
```


### ApiEntitiesClustersAgent

Create an instance: `api_entities_clusters_agent = client.ApiEntitiesClustersAgent()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` |  |
| `description` | `str` |  |
| `id` | `int` |  |
| `name` | `str` |  |
| `name_with_namespace` | `str` |  |
| `path` | `str` |  |
| `path_with_namespace` | `str` |  |

#### Example: Load

```python
api_entities_clusters_agent = client.ApiEntitiesClustersAgent().load({"project_id": "project_id"})
```

#### Example: Create

```python
api_entities_clusters_agent = client.ApiEntitiesClustersAgent().create({
    "project_id": "example_project_id",  # str
    "post_api_v4_projects_id_cluster_agent": {},  # dict
})
```


### ApiEntitiesClustersAgentToken

Create an instance: `api_entities_clusters_agent_token = client.ApiEntitiesClustersAgentToken()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agent_id` | `str` |  |
| `created_at` | `str` |  |
| `created_by_user_id` | `str` |  |
| `description` | `str` |  |
| `id` | `str` |  |
| `last_used_at` | `str` |  |
| `name` | `str` |  |
| `status` | `str` |  |

#### Example: Load

```python
api_entities_clusters_agent_token = client.ApiEntitiesClustersAgentToken().load({"id": "api_entities_clusters_agent_token_id", "cluster_agent_id": "cluster_agent_id", "project_id": "project_id"})
```


### ApiEntitiesClustersAgentTokenBasic

Create an instance: `api_entities_clusters_agent_token_basic = client.ApiEntitiesClustersAgentTokenBasic()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agent_id` | `str` |  |
| `created_at` | `str` |  |
| `created_by_user_id` | `str` |  |
| `description` | `str` |  |
| `id` | `str` |  |
| `name` | `str` |  |
| `status` | `str` |  |

#### Example: Load

```python
api_entities_clusters_agent_token_basic = client.ApiEntitiesClustersAgentTokenBasic().load({"cluster_agent_id": "cluster_agent_id", "project_id": "project_id"})
```


### ApiEntitiesClustersAgentTokenWithToken

Create an instance: `api_entities_clusters_agent_token_with_token = client.ApiEntitiesClustersAgentTokenWithToken()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```python
api_entities_clusters_agent_token_with_token = client.ApiEntitiesClustersAgentTokenWithToken().create({
    "cluster_agent_id": "example_cluster_agent_id",  # str
    "project_id": "example_project_id",  # str
    "post_api_v4_projects_id_cluster_agents_agent_id_token": {},  # dict
})
```


### ApiEntitiesCommit

Create an instance: `api_entities_commit = client.ApiEntitiesCommit()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author_email` | `str` |  |
| `author_name` | `str` |  |
| `authored_date` | `str` |  |
| `committed_date` | `str` |  |
| `committer_email` | `str` |  |
| `committer_name` | `str` |  |
| `created_at` | `str` |  |
| `extended_trailers` | `dict` |  |
| `id` | `str` |  |
| `message` | `str` |  |
| `parent_ids` | `list` |  |
| `short_id` | `str` |  |
| `title` | `str` |  |
| `trailers` | `dict` |  |
| `web_url` | `str` |  |

#### Example: List

```python
api_entities_commits = client.ApiEntitiesCommit().list({"project_id": "example"})
```

#### Example: Create

```python
api_entities_commit = client.ApiEntitiesCommit().create({
    "project_id": "example_project_id",  # str
})
```


### ApiEntitiesCommitDetail

Create an instance: `api_entities_commit_detail = client.ApiEntitiesCommitDetail()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author_email` | `str` |  |
| `author_name` | `str` |  |
| `authored_date` | `str` |  |
| `committed_date` | `str` |  |
| `committer_email` | `str` |  |
| `committer_name` | `str` |  |
| `created_at` | `str` |  |
| `extended_trailers` | `dict` |  |
| `id` | `str` |  |
| `last_pipeline` | `dict` | API_Entities_Ci_PipelineBasic model |
| `message` | `str` |  |
| `parent_ids` | `list` |  |
| `project_id` | `int` |  |
| `short_id` | `str` |  |
| `stats` | `dict` |  |
| `status` | `str` |  |
| `title` | `str` |  |
| `trailers` | `dict` |  |
| `web_url` | `str` |  |

#### Example: Load

```python
api_entities_commit_detail = client.ApiEntitiesCommitDetail().load({"project_id": "project_id", "sha": "sha"})
```

#### Example: Create

```python
api_entities_commit_detail = client.ApiEntitiesCommitDetail().create({
    "project_id": "example_project_id",  # str
    "post_api_v4_projects_id_repository_commit": {},  # dict
})
```


### ApiEntitiesCommitNote

Create an instance: `api_entities_commit_note = client.ApiEntitiesCommitNote()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author` | `dict` | API_Entities_UserBasic model |
| `avatar_path` | `str` |  |
| `avatar_url` | `str` |  |
| `created_at` | `str` |  |
| `custom_attributes` | `list` |  |
| `id` | `int` |  |
| `line` | `int` |  |
| `line_type` | `str` |  |
| `locked` | `bool` |  |
| `name` | `str` |  |
| `note` | `str` |  |
| `path` | `str` |  |
| `public_email` | `str` |  |
| `state` | `str` |  |
| `username` | `str` |  |
| `web_url` | `str` |  |

#### Example: List

```python
api_entities_commit_notes = client.ApiEntitiesCommitNote().list({"project_id": "example", "sha": "example"})
```

#### Example: Create

```python
api_entities_commit_note = client.ApiEntitiesCommitNote().create({
    "project_id": "example_project_id",  # str
    "sha": "example_sha",  # Any
    "post_api_v4_projects_id_repository_commits_sha_comment": {},  # dict
})
```


### ApiEntitiesCommitSequence

Create an instance: `api_entities_commit_sequence = client.ApiEntitiesCommitSequence()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `count` | `int` |  |

#### Example: Load

```python
api_entities_commit_sequence = client.ApiEntitiesCommitSequence().load({"project_id": "project_id", "sha": "sha"})
```


### ApiEntitiesCommitSignature

Create an instance: `api_entities_commit_signature = client.ApiEntitiesCommitSignature()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `commit_source` | `str` |  |
| `signature` | `str` |  |
| `signature_type` | `str` |  |

#### Example: Load

```python
api_entities_commit_signature = client.ApiEntitiesCommitSignature().load({"project_id": "project_id", "sha": "sha"})
```


### ApiEntitiesCommitStatus

Create an instance: `api_entities_commit_status = client.ApiEntitiesCommitStatus()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_failure` | `bool` |  |
| `author` | `dict` | API_Entities_UserBasic model |
| `avatar_path` | `str` |  |
| `avatar_url` | `str` |  |
| `coverage` | `float` |  |
| `created_at` | `str` |  |
| `custom_attributes` | `list` |  |
| `description` | `str` |  |
| `finished_at` | `str` |  |
| `id` | `int` |  |
| `locked` | `bool` |  |
| `name` | `str` |  |
| `pipeline_id` | `int` |  |
| `public_email` | `str` |  |
| `ref` | `str` |  |
| `sha` | `str` |  |
| `started_at` | `str` |  |
| `state` | `str` |  |
| `status` | `str` |  |
| `target_url` | `str` |  |
| `username` | `str` |  |
| `web_url` | `str` |  |

#### Example: List

```python
api_entities_commit_statuss = client.ApiEntitiesCommitStatus().list({"project_id": "example", "sha": "example"})
```

#### Example: Create

```python
api_entities_commit_status = client.ApiEntitiesCommitStatus().create({
    "id": "example_id",  # str
    "project_id": "example_project_id",  # str
    "post_api_v4_projects_id_statuses_sha": {},  # dict
})
```


### ApiEntitiesCompare

Create an instance: `api_entities_compare = client.ApiEntitiesCompare()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `commit` | `dict` | API_Entities_Commit model |
| `commits` | `list` |  |
| `compare_same_ref` | `bool` |  |
| `compare_timeout` | `bool` |  |
| `diffs` | `list` |  |
| `web_url` | `str` |  |

#### Example: List

```python
api_entities_compares = client.ApiEntitiesCompare().list({"project_id": "example", "from": "example", "to": "example"})
```


### ApiEntitiesContainerRegistryRepository

Create an instance: `api_entities_container_registry_repository = client.ApiEntitiesContainerRegistryRepository()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cleanup_policy_started_at` | `str` |  |
| `created_at` | `str` |  |
| `delete_api_path` | `str` |  |
| `id` | `int` |  |
| `location` | `str` |  |
| `name` | `str` |  |
| `path` | `str` |  |
| `project_id` | `int` |  |
| `size` | `int` |  |
| `status` | `str` |  |
| `tags` | `dict` | API_Entities_ContainerRegistry_Tag model |
| `tags_count` | `int` |  |

#### Example: Load

```python
api_entities_container_registry_repository = client.ApiEntitiesContainerRegistryRepository().load({"id": "api_entities_container_registry_repository_id"})
```

#### Example: List

```python
api_entities_container_registry_repositorys = client.ApiEntitiesContainerRegistryRepository().list({"project_id": "example"})
```


### ApiEntitiesContainerRegistryTag

Create an instance: `api_entities_container_registry_tag = client.ApiEntitiesContainerRegistryTag()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `location` | `str` |  |
| `name` | `str` |  |
| `path` | `str` |  |

#### Example: List

```python
api_entities_container_registry_tags = client.ApiEntitiesContainerRegistryTag().list({"project_id": "example", "repository_id": "example"})
```


### ApiEntitiesContainerRegistryTagDetail

Create an instance: `api_entities_container_registry_tag_detail = client.ApiEntitiesContainerRegistryTagDetail()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` |  |
| `digest` | `str` |  |
| `location` | `str` |  |
| `name` | `str` |  |
| `path` | `str` |  |
| `revision` | `str` |  |
| `short_revision` | `str` |  |
| `total_size` | `int` |  |

#### Example: Load

```python
api_entities_container_registry_tag_detail = client.ApiEntitiesContainerRegistryTagDetail().load({"project_id": "project_id", "repository_id": "repository_id", "tag_name": "tag_name"})
```


### ApiEntitiesContributor

Create an instance: `api_entities_contributor = client.ApiEntitiesContributor()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `additions` | `int` |  |
| `commits` | `int` |  |
| `deletions` | `int` |  |
| `email` | `str` |  |
| `name` | `str` |  |

#### Example: Load

```python
api_entities_contributor = client.ApiEntitiesContributor().load({"project_id": "project_id"})
```


### ApiEntitiesDeployKey

Create an instance: `api_entities_deploy_key = client.ApiEntitiesDeployKey()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` |  |
| `expires_at` | `str` |  |
| `fingerprint` | `str` |  |
| `fingerprint_sha256` | `str` |  |
| `id` | `int` |  |
| `key` | `str` |  |
| `last_used_at` | `str` |  |
| `projects_with_readonly_access` | `dict` |  |
| `projects_with_write_access` | `dict` |  |
| `title` | `str` |  |
| `usage_type` | `str` |  |

#### Example: List

```python
api_entities_deploy_keys = client.ApiEntitiesDeployKey().list()
```

#### Example: Create

```python
api_entities_deploy_key = client.ApiEntitiesDeployKey().create({
    "post_api_v4_deploy_key": {},  # dict
})
```


### ApiEntitiesDeployKeysProject

Create an instance: `api_entities_deploy_keys_project = client.ApiEntitiesDeployKeysProject()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `can_push` | `bool` |  |
| `created_at` | `str` |  |
| `expires_at` | `str` |  |
| `fingerprint` | `str` |  |
| `fingerprint_sha256` | `str` |  |
| `id` | `int` |  |
| `key` | `str` |  |
| `last_used_at` | `str` |  |
| `projects_with_readonly_access` | `dict` |  |
| `projects_with_write_access` | `dict` |  |
| `title` | `str` |  |
| `usage_type` | `str` |  |

#### Example: Load

```python
api_entities_deploy_keys_project = client.ApiEntitiesDeployKeysProject().load({"key_id": "key_id", "project_id": "project_id"})
```

#### Example: List

```python
api_entities_deploy_keys_projects = client.ApiEntitiesDeployKeysProject().list({"project_id": "example"})
```

#### Example: Create

```python
api_entities_deploy_keys_project = client.ApiEntitiesDeployKeysProject().create({
    "project_id": "example_project_id",  # str
    "post_api_v4_projects_id_deploy_key": {},  # dict
})
```


### ApiEntitiesDeployToken

Create an instance: `api_entities_deploy_token = client.ApiEntitiesDeployToken()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `expired` | `bool` |  |
| `expires_at` | `str` |  |
| `id` | `int` |  |
| `name` | `str` |  |
| `revoked` | `bool` |  |
| `scopes` | `list` |  |
| `username` | `str` |  |

#### Example: Load

```python
api_entities_deploy_token = client.ApiEntitiesDeployToken().load({"id": "api_entities_deploy_token_id"})
```

#### Example: List

```python
api_entities_deploy_tokens = client.ApiEntitiesDeployToken().list()
```


### ApiEntitiesDeployTokenWithToken

Create an instance: `api_entities_deploy_token_with_token = client.ApiEntitiesDeployTokenWithToken()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```python
api_entities_deploy_token_with_token = client.ApiEntitiesDeployTokenWithToken().create({
    "group_id": "example_group_id",  # str
    "post_api_v4_groups_id_deploy_token": {},  # dict
})
```


### ApiEntitiesDeployment

Create an instance: `api_entities_deployment = client.ApiEntitiesDeployment()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` |  |
| `deployable` | `dict` | API_Entities_Ci_Job model |
| `environment` | `dict` | API_Entities_EnvironmentBasic model |
| `id` | `int` |  |
| `iid` | `int` |  |
| `ref` | `str` |  |
| `sha` | `str` |  |
| `status` | `str` |  |
| `updated_at` | `str` |  |
| `user` | `dict` | API_Entities_UserBasic model |

#### Example: List

```python
api_entities_deployments = client.ApiEntitiesDeployment().list({"project_id": "example"})
```


### ApiEntitiesDeploymentExtended

Create an instance: `api_entities_deployment_extended = client.ApiEntitiesDeploymentExtended()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `approval_summary` | `dict` |  |
| `approvals` | `dict` | API_Entities_Deployments_Approval model |
| `created_at` | `str` |  |
| `deployable` | `dict` | API_Entities_Ci_Job model |
| `environment` | `dict` | API_Entities_EnvironmentBasic model |
| `id` | `int` |  |
| `iid` | `int` |  |
| `pending_approval_count` | `int` |  |
| `ref` | `str` |  |
| `sha` | `str` |  |
| `status` | `str` |  |
| `updated_at` | `str` |  |
| `user` | `dict` | API_Entities_UserBasic model |

#### Example: Load

```python
api_entities_deployment_extended = client.ApiEntitiesDeploymentExtended().load({"deployment_id": "deployment_id", "project_id": "project_id"})
```

#### Example: Create

```python
api_entities_deployment_extended = client.ApiEntitiesDeploymentExtended().create({
    "project_id": "example_project_id",  # str
    "post_api_v4_projects_id_deployment": {},  # dict
})
```


### ApiEntitiesDeploymentsApproval

Create an instance: `api_entities_deployments_approval = client.ApiEntitiesDeploymentsApproval()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```python
api_entities_deployments_approval = client.ApiEntitiesDeploymentsApproval().create({
    "deployment_id": "example_deployment_id",  # str
    "project_id": "example_project_id",  # str
    "post_api_v4_projects_id_deployments_deployment_id_approval": {},  # dict
})
```


### ApiEntitiesDictionaryTable

Create an instance: `api_entities_dictionary_table = client.ApiEntitiesDictionaryTable()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `feature_categories` | `list` |  |
| `id` | `str` |  |
| `table_name` | `str` |  |

#### Example: Load

```python
api_entities_dictionary_table = client.ApiEntitiesDictionaryTable().load({"id": "api_entities_dictionary_table_id", "databas_id": "databas_id"})
```


### ApiEntitiesDiff

Create an instance: `api_entities_diff = client.ApiEntitiesDiff()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `a_mode` | `str` |  |
| `b_mode` | `str` |  |
| `collapsed` | `bool` |  |
| `deleted_file` | `bool` |  |
| `diff` | `str` |  |
| `generated_file` | `bool` |  |
| `new_file` | `bool` |  |
| `new_path` | `str` |  |
| `old_path` | `str` |  |
| `renamed_file` | `bool` |  |
| `too_large` | `bool` |  |

#### Example: Load

```python
api_entities_diff = client.ApiEntitiesDiff().load({"merge_request_id": "merge_request_id", "project_id": "project_id"})
```

#### Example: List

```python
api_entities_diffs = client.ApiEntitiesDiff().list({"project_id": "example", "sha": "example"})
```


### ApiEntitiesDiscoveredCluster

Create an instance: `api_entities_discovered_cluster = client.ApiEntitiesDiscoveredCluster()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `groups` | `str` |  |
| `projects` | `str` |  |

#### Example: Load

```python
api_entities_discovered_cluster = client.ApiEntitiesDiscoveredCluster().load({"group_id": "group_id"})
```


### ApiEntitiesDraftNote

Create an instance: `api_entities_draft_note = client.ApiEntitiesDraftNote()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author_id` | `int` |  |
| `commit_id` | `int` |  |
| `discussion_id` | `int` |  |
| `id` | `int` |  |
| `line_code` | `str` |  |
| `merge_request_id` | `int` |  |
| `note` | `str` |  |
| `position` | `dict` |  |
| `resolve_discussion` | `bool` |  |

#### Example: Load

```python
api_entities_draft_note = client.ApiEntitiesDraftNote().load({"id": "api_entities_draft_note_id", "merge_request_id": "merge_request_id", "project_id": "project_id"})
```

#### Example: List

```python
api_entities_draft_notes = client.ApiEntitiesDraftNote().list({"merge_request_id": "example", "project_id": "example"})
```

#### Example: Create

```python
api_entities_draft_note = client.ApiEntitiesDraftNote().create({
    "merge_request_id": "example_merge_request_id",  # str
    "project_id": "example_project_id",  # str
    "post_api_v4_projects_id_merge_requests_merge_request_iid_draft_note": {},  # dict
})
```


### ApiEntitiesEnvironment

Create an instance: `api_entities_environment = client.ApiEntitiesEnvironment()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auto_stop_at` | `str` |  |
| `auto_stop_setting` | `str` |  |
| `cluster_agent` | `dict` | API_Entities_Clusters_Agent model |
| `created_at` | `str` |  |
| `description` | `str` |  |
| `external_url` | `str` |  |
| `flux_resource_path` | `str` |  |
| `id` | `int` |  |
| `kubernetes_namespace` | `str` |  |
| `last_deployment` | `dict` | API_Entities_Deployment model |
| `name` | `str` |  |
| `project` | `dict` | API_Entities_BasicProjectDetails model |
| `slug` | `str` |  |
| `state` | `str` |  |
| `tier` | `str` |  |
| `updated_at` | `str` |  |

#### Example: Load

```python
api_entities_environment = client.ApiEntitiesEnvironment().load({"id": "api_entities_environment_id", "project_id": "project_id"})
```

#### Example: List

```python
api_entities_environments = client.ApiEntitiesEnvironment().list({"project_id": "example"})
```

#### Example: Create

```python
api_entities_environment = client.ApiEntitiesEnvironment().create({
    "project_id": "example_project_id",  # str
})
```


### ApiEntitiesErrorTrackingClientKey

Create an instance: `api_entities_error_tracking_client_key = client.ApiEntitiesErrorTrackingClientKey()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` |  |
| `id` | `int` |  |
| `public_key` | `str` |  |
| `sentry_dsn` | `str` |  |

#### Example: List

```python
api_entities_error_tracking_client_keys = client.ApiEntitiesErrorTrackingClientKey().list({"project_id": "example"})
```

#### Example: Create

```python
api_entities_error_tracking_client_key = client.ApiEntitiesErrorTrackingClientKey().create({
    "project_id": "example_project_id",  # str
})
```


### ApiEntitiesErrorTrackingProjectSetting

Create an instance: `api_entities_error_tracking_project_setting = client.ApiEntitiesErrorTrackingProjectSetting()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` |  |
| `api_url` | `str` |  |
| `integrated` | `bool` |  |
| `project_name` | `str` |  |
| `sentry_external_url` | `str` |  |

#### Example: Load

```python
api_entities_error_tracking_project_setting = client.ApiEntitiesErrorTrackingProjectSetting().load({"project_id": "project_id"})
```


### ApiEntitiesEvent

Create an instance: `api_entities_event = client.ApiEntitiesEvent()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action_name` | `str` |  |
| `author` | `dict` | API_Entities_UserBasic model |
| `author_id` | `int` |  |
| `author_username` | `str` |  |
| `created_at` | `str` |  |
| `id` | `int` |  |
| `imported` | `bool` |  |
| `imported_from` | `str` |  |
| `note` | `dict` |  |
| `project_id` | `int` |  |
| `push_data` | `dict` |  |
| `target_id` | `int` |  |
| `target_iid` | `int` |  |
| `target_title` | `str` |  |
| `target_type` | `str` |  |
| `wiki_page` | `dict` | API_Entities_WikiPageBasic model |

#### Example: Load

```python
api_entities_event = client.ApiEntitiesEvent().load({"project_id": "project_id"})
```

#### Example: List

```python
api_entities_events = client.ApiEntitiesEvent().list()
```


### ApiEntitiesFeature

Create an instance: `api_entities_feature = client.ApiEntitiesFeature()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `definition` | `dict` | API_Entities_Feature_Definition model |
| `gates` | `dict` |  |
| `id` | `str` |  |
| `name` | `str` |  |
| `state` | `str` |  |

#### Example: List

```python
api_entities_features = client.ApiEntitiesFeature().list()
```

#### Example: Create

```python
api_entities_feature = client.ApiEntitiesFeature().create({
    "id": "example_id",  # str
    "post_api_v4_features_name": {},  # dict
})
```


### ApiEntitiesFeatureDefinition

Create an instance: `api_entities_feature_definition = client.ApiEntitiesFeatureDefinition()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `default_enabled` | `str` |  |
| `feature_issue_url` | `str` |  |
| `group` | `str` |  |
| `intended_to_rollout_by` | `str` |  |
| `introduced_by_url` | `str` |  |
| `log_state_changes` | `str` |  |
| `milestone` | `str` |  |
| `name` | `str` |  |
| `rollout_issue_url` | `str` |  |
| `type` | `str` |  |

#### Example: List

```python
api_entities_feature_definitions = client.ApiEntitiesFeatureDefinition().list()
```


### ApiEntitiesFeatureFlag

Create an instance: `api_entities_feature_flag = client.ApiEntitiesFeatureFlag()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` |  |
| `created_at` | `str` |  |
| `description` | `str` |  |
| `id` | `int` |  |
| `name` | `str` |  |
| `parameters` | `str` |  |
| `scopes` | `dict` |  |
| `strategies` | `dict` |  |
| `updated_at` | `str` |  |
| `user_list` | `dict` |  |
| `version` | `str` |  |

#### Example: Load

```python
api_entities_feature_flag = client.ApiEntitiesFeatureFlag().load({"id": "api_entities_feature_flag_id", "project_id": "project_id"})
```

#### Example: List

```python
api_entities_feature_flags = client.ApiEntitiesFeatureFlag().list({"project_id": "example"})
```

#### Example: Create

```python
api_entities_feature_flag = client.ApiEntitiesFeatureFlag().create({
    "project_id": "example_project_id",  # str
    "post_api_v4_projects_id_feature_flag": {},  # dict
})
```


### ApiEntitiesFeatureFlagUserList

Create an instance: `api_entities_feature_flag_user_list = client.ApiEntitiesFeatureFlagUserList()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` |  |
| `edit_path` | `str` |  |
| `id` | `int` |  |
| `iid` | `int` |  |
| `name` | `str` |  |
| `path` | `str` |  |
| `project_id` | `int` |  |
| `updated_at` | `str` |  |
| `user_xids` | `str` |  |

#### Example: Load

```python
api_entities_feature_flag_user_list = client.ApiEntitiesFeatureFlagUserList().load({"iid": "iid", "project_id": "project_id"})
```

#### Example: List

```python
api_entities_feature_flag_user_lists = client.ApiEntitiesFeatureFlagUserList().list({"project_id": "example"})
```

#### Example: Create

```python
api_entities_feature_flag_user_list = client.ApiEntitiesFeatureFlagUserList().create({
    "project_id": "example_project_id",  # str
    "post_api_v4_projects_id_feature_flags_user_list": {},  # dict
})
```


### ApiEntitiesFreezePeriod

Create an instance: `api_entities_freeze_period = client.ApiEntitiesFreezePeriod()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` |  |
| `cron_timezone` | `str` |  |
| `freeze_end` | `str` |  |
| `freeze_start` | `str` |  |
| `id` | `int` |  |
| `updated_at` | `str` |  |

#### Example: Load

```python
api_entities_freeze_period = client.ApiEntitiesFreezePeriod().load({"id": "api_entities_freeze_period_id", "project_id": "project_id"})
```

#### Example: List

```python
api_entities_freeze_periods = client.ApiEntitiesFreezePeriod().list({"project_id": "example"})
```

#### Example: Create

```python
api_entities_freeze_period = client.ApiEntitiesFreezePeriod().create({
    "project_id": "example_project_id",  # str
    "post_api_v4_projects_id_freeze_period": {},  # dict
})
```


### ApiEntitiesGitlabSubscription

Create an instance: `api_entities_gitlab_subscription = client.ApiEntitiesGitlabSubscription()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `billing` | `dict` |  |
| `plan` | `dict` |  |
| `usage` | `dict` |  |

#### Example: Load

```python
api_entities_gitlab_subscription = client.ApiEntitiesGitlabSubscription().load({"namespace_id": "namespace_id"})
```


### ApiEntitiesGoModuleVersion

Create an instance: `api_entities_go_module_version = client.ApiEntitiesGoModuleVersion()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `Time` | `str` |  |
| `Version` | `str` |  |

#### Example: Load

```python
api_entities_go_module_version = client.ApiEntitiesGoModuleVersion().load({"module_version": "module_version", "project_id": "project_id", "module_name": "module_name"})
```


### ApiEntitiesGroup

Create an instance: `api_entities_group = client.ApiEntitiesGroup()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived` | `bool` |  |
| `auto_devops_enabled` | `str` |  |
| `auto_duo_code_review_enabled` | `str` |  |
| `avatar_url` | `str` |  |
| `created_at` | `str` |  |
| `custom_attributes` | `dict` | API_Entities_CustomAttribute model |
| `default_branch` | `str` |  |
| `default_branch_protection` | `str` |  |
| `default_branch_protection_defaults` | `str` |  |
| `description` | `str` |  |
| `duo_core_features_enabled` | `bool` | [Experimental] Indicates whether GitLab Duo Core features are enabled for the group |
| `duo_features_enabled` | `str` |  |
| `emails_disabled` | `bool` |  |
| `emails_enabled` | `bool` |  |
| `file_template_project_id` | `str` |  |
| `full_name` | `str` |  |
| `full_path` | `str` |  |
| `id` | `str` |  |
| `ldap_access` | `str` |  |
| `ldap_cn` | `str` |  |
| `ldap_group_links` | `dict` |  |
| `lfs_enabled` | `str` |  |
| `lock_duo_features_enabled` | `str` |  |
| `lock_math_rendering_limits_enabled` | `bool` |  |
| `marked_for_deletion_on` | `str` |  |
| `math_rendering_limits_enabled` | `bool` |  |
| `max_artifacts_size` | `int` |  |
| `mentions_disabled` | `str` |  |
| `name` | `str` |  |
| `organization_id` | `str` |  |
| `parent_id` | `str` |  |
| `path` | `str` |  |
| `project_creation_level` | `str` |  |
| `repository_storage` | `str` |  |
| `request_access_enabled` | `str` |  |
| `require_two_factor_authentication` | `str` |  |
| `root_storage_statistics` | `dict` |  |
| `saml_group_links` | `dict` |  |
| `share_with_group_lock` | `str` |  |
| `shared_runners_setting` | `str` |  |
| `show_diff_preview_in_email` | `bool` |  |
| `statistics` | `dict` |  |
| `subgroup_creation_level` | `str` |  |
| `two_factor_grace_period` | `str` |  |
| `visibility` | `str` |  |
| `web_based_commit_signing_enabled` | `str` |  |
| `web_url` | `str` |  |
| `wiki_access_level` | `str` |  |

#### Example: Load

```python
api_entities_group = client.ApiEntitiesGroup().load({"project_id": "project_id"})
```

#### Example: List

```python
api_entities_groups = client.ApiEntitiesGroup().list()
```

#### Example: Create

```python
api_entities_group = client.ApiEntitiesGroup().create({
    "post_api_v4_group": {},  # dict
})
```


### ApiEntitiesGroupDetail

Create an instance: `api_entities_group_detail = client.ApiEntitiesGroupDetail()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowed_email_domains_list` | `str` |  |
| `archived` | `bool` |  |
| `auto_ban_user_on_excessive_projects_download` | `str` |  |
| `auto_devops_enabled` | `str` |  |
| `auto_duo_code_review_enabled` | `str` |  |
| `avatar_url` | `str` |  |
| `created_at` | `str` |  |
| `custom_attributes` | `dict` | API_Entities_CustomAttribute model |
| `default_branch` | `str` |  |
| `default_branch_protection` | `str` |  |
| `default_branch_protection_defaults` | `str` |  |
| `description` | `str` |  |
| `duo_core_features_enabled` | `bool` | [Experimental] Indicates whether GitLab Duo Core features are enabled for the group |
| `duo_features_enabled` | `str` |  |
| `emails_disabled` | `bool` |  |
| `emails_enabled` | `bool` |  |
| `enabled_git_access_protocol` | `str` |  |
| `extra_shared_runners_minutes_limit` | `str` |  |
| `file_template_project_id` | `str` |  |
| `full_name` | `str` |  |
| `full_path` | `str` |  |
| `id` | `str` |  |
| `ip_restriction_ranges` | `str` |  |
| `ldap_access` | `str` |  |
| `ldap_cn` | `str` |  |
| `ldap_group_links` | `dict` |  |
| `lfs_enabled` | `str` |  |
| `lock_duo_features_enabled` | `str` |  |
| `lock_math_rendering_limits_enabled` | `bool` |  |
| `marked_for_deletion_on` | `str` |  |
| `math_rendering_limits_enabled` | `bool` |  |
| `max_artifacts_size` | `int` |  |
| `membership_lock` | `str` |  |
| `mentions_disabled` | `str` |  |
| `name` | `str` |  |
| `organization_id` | `str` |  |
| `parent_id` | `str` |  |
| `path` | `str` |  |
| `prevent_forking_outside_group` | `str` |  |
| `prevent_sharing_groups_outside_hierarchy` | `str` |  |
| `project_creation_level` | `str` |  |
| `projects` | `dict` | API_Entities_Project model |
| `repository_storage` | `str` |  |
| `request_access_enabled` | `str` |  |
| `require_two_factor_authentication` | `str` |  |
| `root_storage_statistics` | `dict` |  |
| `runners_token` | `str` |  |
| `saml_group_links` | `dict` |  |
| `service_access_tokens_expiration_enforced` | `str` |  |
| `share_with_group_lock` | `str` |  |
| `shared_projects` | `dict` | API_Entities_Project model |
| `shared_runners_minutes_limit` | `str` |  |
| `shared_runners_setting` | `str` |  |
| `shared_with_groups` | `str` |  |
| `show_diff_preview_in_email` | `bool` |  |
| `statistics` | `dict` |  |
| `subgroup_creation_level` | `str` |  |
| `two_factor_grace_period` | `str` |  |
| `unique_project_download_limit` | `str` |  |
| `unique_project_download_limit_alertlist` | `str` |  |
| `unique_project_download_limit_allowlist` | `str` |  |
| `unique_project_download_limit_interval_in_seconds` | `str` |  |
| `visibility` | `str` |  |
| `web_based_commit_signing_enabled` | `str` |  |
| `web_url` | `str` |  |
| `wiki_access_level` | `str` |  |

#### Example: Load

```python
api_entities_group_detail = client.ApiEntitiesGroupDetail().load({"id": "api_entities_group_detail_id"})
```

#### Example: Create

```python
api_entities_group_detail = client.ApiEntitiesGroupDetail().create({
    "group_id": "example_group_id",  # str
})
```


### ApiEntitiesHook

Create an instance: `api_entities_hook = client.ApiEntitiesHook()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alert_status` | `Any` |  |
| `branch_filter_strategy` | `str` |  |
| `created_at` | `str` |  |
| `custom_headers` | `list` |  |
| `custom_webhook_template` | `str` |  |
| `description` | `str` |  |
| `disabled_until` | `str` |  |
| `enable_ssl_verification` | `bool` |  |
| `id` | `str` |  |
| `merge_requests_events` | `bool` |  |
| `name` | `str` |  |
| `push_events` | `bool` |  |
| `push_events_branch_filter` | `str` |  |
| `repository_update_events` | `bool` |  |
| `tag_push_events` | `bool` |  |
| `url` | `str` |  |
| `url_variables` | `list` |  |

#### Example: Load

```python
api_entities_hook = client.ApiEntitiesHook().load({"id": "api_entities_hook_id"})
```

#### Example: List

```python
api_entities_hooks = client.ApiEntitiesHook().list()
```

#### Example: Create

```python
api_entities_hook = client.ApiEntitiesHook().create({
    "post_api_v4_hook": {},  # dict
})
```


### ApiEntitiesIntegration

Create an instance: `api_entities_integration = client.ApiEntitiesIntegration()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |

#### Example: Load

```python
api_entities_integration = client.ApiEntitiesIntegration().load({"id": "api_entities_integration_id", "group_id": "group_id"})
```


### ApiEntitiesIntegrationBasic

Create an instance: `api_entities_integration_basic = client.ApiEntitiesIntegrationBasic()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` |  |
| `alert_events` | `bool` |  |
| `comment_on_event_enabled` | `bool` |  |
| `commit_events` | `bool` |  |
| `confidential_issues_events` | `bool` |  |
| `confidential_note_events` | `bool` |  |
| `created_at` | `str` |  |
| `deployment_events` | `bool` |  |
| `id` | `int` |  |
| `incident_events` | `bool` |  |
| `inherited` | `bool` |  |
| `issues_events` | `bool` |  |
| `job_events` | `bool` |  |
| `merge_requests_events` | `bool` |  |
| `note_events` | `bool` |  |
| `pipeline_events` | `bool` |  |
| `push_events` | `bool` |  |
| `slug` | `int` |  |
| `tag_push_events` | `bool` |  |
| `title` | `str` |  |
| `updated_at` | `str` |  |
| `vulnerability_events` | `bool` |  |
| `wiki_page_events` | `bool` |  |

#### Example: List

```python
api_entities_integration_basics = client.ApiEntitiesIntegrationBasic().list({"group_id": "example"})
```


### ApiEntitiesInvitation

Create an instance: `api_entities_invitation = client.ApiEntitiesInvitation()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `access_level` | `str` |  |
| `created_at` | `str` |  |
| `created_by_name` | `str` |  |
| `expires_at` | `str` |  |
| `id` | `str` |  |
| `invite_email` | `str` |  |
| `invite_token` | `str` |  |
| `user_name` | `str` |  |

#### Example: List

```python
api_entities_invitations = client.ApiEntitiesInvitation().list({"group_id": "example"})
```

#### Example: Create

```python
api_entities_invitation = client.ApiEntitiesInvitation().create({
    "group_id": "example_group_id",  # str
    "post_api_v4_groups_id_invitation": {},  # dict
})
```


### ApiEntitiesIssuableTimeStat

Create an instance: `api_entities_issuable_time_stat = client.ApiEntitiesIssuableTimeStat()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `human_time_estimate` | `str` |  |
| `human_total_time_spent` | `str` |  |
| `time_estimate` | `int` |  |
| `total_time_spent` | `int` |  |

#### Example: Load

```python
api_entities_issuable_time_stat = client.ApiEntitiesIssuableTimeStat().load({"project_id": "project_id"})
```

#### Example: Create

```python
api_entities_issuable_time_stat = client.ApiEntitiesIssuableTimeStat().create({
    "project_id": "example_project_id",  # str
})
```


### ApiEntitiesIssue

Create an instance: `api_entities_issue = client.ApiEntitiesIssue()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assignee` | `dict` | API_Entities_UserBasic model |
| `assignees` | `dict` | API_Entities_UserBasic model |
| `author` | `dict` | API_Entities_UserBasic model |
| `blocking_issues_count` | `str` |  |
| `closed_at` | `str` |  |
| `closed_by` | `dict` | API_Entities_UserBasic model |
| `confidential` | `bool` |  |
| `created_at` | `str` |  |
| `description` | `str` |  |
| `discussion_locked` | `bool` |  |
| `downvotes` | `str` |  |
| `due_date` | `str` |  |
| `epic` | `dict` |  |
| `epic_iid` | `str` |  |
| `has_tasks` | `bool` |  |
| `health_status` | `str` |  |
| `id` | `int` |  |
| `iid` | `int` |  |
| `imported` | `str` |  |
| `imported_from` | `str` |  |
| `issue_type` | `str` |  |
| `iteration` | `dict` |  |
| `labels` | `list` |  |
| `links` | `dict` |  |
| `merge_requests_count` | `str` |  |
| `milestone` | `dict` |  |
| `moved_to_id` | `str` |  |
| `project_id` | `int` |  |
| `references` | `dict` |  |
| `service_desk_reply_to` | `str` |  |
| `severity` | `str` | One of ["UNKNOWN", "LOW", "MEDIUM", "HIGH", "CRITICAL"] |
| `state` | `str` |  |
| `subscribed` | `str` |  |
| `task_completion_status` | `str` |  |
| `task_status` | `str` |  |
| `time_stats` | `dict` | API_Entities_IssuableTimeStats model |
| `title` | `str` |  |
| `type` | `str` | One of ["ISSUE", "INCIDENT", "TEST_CASE", "REQUIREMENT", "TASK", "TICKET"] |
| `updated_at` | `str` |  |
| `upvotes` | `str` |  |
| `user_notes_count` | `str` |  |
| `web_url` | `str` |  |
| `weight` | `str` |  |

#### Example: Load

```python
api_entities_issue = client.ApiEntitiesIssue().load({"id": "api_entities_issue_id"})
```

#### Example: List

```python
api_entities_issues = client.ApiEntitiesIssue().list()
```

#### Example: Create

```python
api_entities_issue = client.ApiEntitiesIssue().create({
    "project_id": "example_project_id",  # str
})
```


### ApiEntitiesIssueLink

Create an instance: `api_entities_issue_link = client.ApiEntitiesIssueLink()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |
| `link_type` | `str` |  |
| `source_issue` | `dict` |  |
| `target_issue` | `dict` |  |

#### Example: Load

```python
api_entities_issue_link = client.ApiEntitiesIssueLink().load({"id": "api_entities_issue_link_id", "issue_id": "issue_id", "project_id": "project_id"})
```

#### Example: Create

```python
api_entities_issue_link = client.ApiEntitiesIssueLink().create({
    "issue_id": "example_issue_id",  # str
    "project_id": "example_project_id",  # str
    "post_api_v4_projects_id_issues_issue_iid_link": {},  # dict
})
```


### ApiEntitiesLicense

Create an instance: `api_entities_license = client.ApiEntitiesLicense()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `conditions` | `list` |  |
| `content` | `str` |  |
| `description` | `str` |  |
| `html_url` | `str` |  |
| `id` | `str` |  |
| `key` | `str` |  |
| `limitations` | `list` |  |
| `name` | `str` |  |
| `nickname` | `str` |  |
| `permissions` | `list` |  |
| `popular` | `bool` |  |
| `source_url` | `str` |  |

#### Example: Load

```python
api_entities_license = client.ApiEntitiesLicense().load({"id": "api_entities_license_id", "name": "name", "type": "type"})
```


### ApiEntitiesMarkdown

Create an instance: `api_entities_markdown = client.ApiEntitiesMarkdown()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```python
api_entities_markdown = client.ApiEntitiesMarkdown().create({
    "post_api_v4_markdown": {},  # dict
})
```


### ApiEntitiesMarkdownUploadAdmin

Create an instance: `api_entities_markdown_upload_admin = client.ApiEntitiesMarkdownUploadAdmin()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` |  |
| `filename` | `str` |  |
| `id` | `str` |  |
| `size` | `str` |  |
| `uploaded_by` | `dict` |  |

#### Example: List

```python
api_entities_markdown_upload_admins = client.ApiEntitiesMarkdownUploadAdmin().list({"group_id": "example"})
```


### ApiEntitiesMember

Create an instance: `api_entities_member = client.ApiEntitiesMember()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `access_level` | `str` |  |
| `avatar_path` | `str` |  |
| `avatar_url` | `str` |  |
| `created_at` | `str` |  |
| `created_by` | `dict` | API_Entities_UserBasic model |
| `custom_attributes` | `list` |  |
| `email` | `str` |  |
| `expires_at` | `str` |  |
| `group_saml_identity` | `dict` |  |
| `group_scim_identity` | `dict` |  |
| `id` | `int` |  |
| `is_using_seat` | `bool` |  |
| `key` | `str` |  |
| `locked` | `bool` |  |
| `member_role` | `dict` |  |
| `membership_state` | `str` |  |
| `name` | `str` |  |
| `override` | `str` |  |
| `public_email` | `str` |  |
| `state` | `str` |  |
| `username` | `str` |  |
| `value` | `str` |  |
| `web_url` | `str` |  |

#### Example: Load

```python
api_entities_member = client.ApiEntitiesMember().load({"id": "api_entities_member_id", "group_id": "group_id"})
```

#### Example: List

```python
api_entities_members = client.ApiEntitiesMember().list({"group_id": "example"})
```

#### Example: Create

```python
api_entities_member = client.ApiEntitiesMember().create({
    "group_id": "example_group_id",  # str
    "post_api_v4_groups_id_member": {},  # dict
})
```


### ApiEntitiesMerge

Create an instance: `api_entities_merge = client.ApiEntitiesMerge()`

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
| `approvals_before_merge` | `str` |  |
| `assignee` | `dict` | API_Entities_UserBasic model |
| `assignees` | `dict` | API_Entities_UserBasic model |
| `author` | `dict` | API_Entities_UserBasic model |
| `blocking_discussions_resolved` | `str` |  |
| `changes_count` | `str` |  |
| `closed_at` | `str` |  |
| `closed_by` | `dict` | API_Entities_UserBasic model |
| `created_at` | `str` |  |
| `description` | `str` |  |
| `description_html` | `str` |  |
| `detailed_merge_status` | `str` |  |
| `diff_refs` | `dict` |  |
| `discussion_locked` | `str` |  |
| `diverged_commits_count` | `str` |  |
| `downvotes` | `str` |  |
| `draft` | `str` |  |
| `first_contribution` | `str` |  |
| `first_deployed_to_production_at` | `str` |  |
| `force_remove_source_branch` | `str` |  |
| `has_conflicts` | `bool` |  |
| `head_pipeline` | `dict` | API_Entities_Ci_Pipeline model |
| `id` | `int` |  |
| `iid` | `int` |  |
| `imported` | `str` |  |
| `imported_from` | `str` |  |
| `labels` | `str` |  |
| `latest_build_finished_at` | `str` |  |
| `latest_build_started_at` | `str` |  |
| `merge_after` | `str` |  |
| `merge_commit_sha` | `str` |  |
| `merge_error` | `str` |  |
| `merge_status` | `str` |  |
| `merge_user` | `dict` | API_Entities_UserBasic model |
| `merge_when_pipeline_succeeds` | `str` |  |
| `merged_at` | `str` |  |
| `merged_by` | `dict` | API_Entities_UserBasic model |
| `milestone` | `dict` |  |
| `pipeline` | `dict` | API_Entities_Ci_PipelineBasic model |
| `prepared_at` | `str` |  |
| `project_id` | `int` |  |
| `rebase_in_progress` | `str` |  |
| `reference` | `str` |  |
| `references` | `dict` |  |
| `reviewers` | `dict` | API_Entities_UserBasic model |
| `sha` | `str` |  |
| `should_remove_source_branch` | `bool` |  |
| `source_branch` | `str` |  |
| `source_project_id` | `str` |  |
| `squash` | `str` |  |
| `squash_commit_sha` | `str` |  |
| `squash_on_merge` | `str` |  |
| `state` | `str` |  |
| `subscribed` | `str` |  |
| `target_branch` | `str` |  |
| `target_project_id` | `str` |  |
| `task_completion_status` | `str` |  |
| `time_stats` | `dict` | API_Entities_IssuableTimeStats model |
| `title` | `str` |  |
| `title_html` | `str` |  |
| `updated_at` | `str` |  |
| `upvotes` | `str` |  |
| `user` | `dict` |  |
| `user_notes_count` | `str` |  |
| `web_url` | `str` |  |
| `work_in_progress` | `str` |  |

#### Example: Load

```python
api_entities_merge = client.ApiEntitiesMerge().load({"merge_request_iid": "merge_request_iid", "project_id": "project_id"})
```

#### Example: Create

```python
api_entities_merge = client.ApiEntitiesMerge().create({
    "project_id": "example_project_id",  # str
})
```


### ApiEntitiesMergeRequestApproval

Create an instance: `api_entities_merge_request_approval = client.ApiEntitiesMergeRequestApproval()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `approved_at` | `str` |  |
| `user` | `dict` | API_Entities_UserBasic model |

#### Example: Load

```python
api_entities_merge_request_approval = client.ApiEntitiesMergeRequestApproval().load({"merge_request_id": "merge_request_id", "project_id": "project_id"})
```

#### Example: Create

```python
api_entities_merge_request_approval = client.ApiEntitiesMergeRequestApproval().create({
    "merge_request_id": "example_merge_request_id",  # str
    "project_id": "example_project_id",  # str
})
```


### ApiEntitiesMergeRequestBasic

Create an instance: `api_entities_merge_request_basic = client.ApiEntitiesMergeRequestBasic()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_collaboration` | `bool` |  |
| `allow_maintainer_to_push` | `bool` |  |
| `approvals_before_merge` | `str` |  |
| `assignee` | `dict` | API_Entities_UserBasic model |
| `assignees` | `dict` | API_Entities_UserBasic model |
| `author` | `dict` | API_Entities_UserBasic model |
| `blocking_discussions_resolved` | `str` |  |
| `closed_at` | `str` |  |
| `closed_by` | `dict` | API_Entities_UserBasic model |
| `created_at` | `str` |  |
| `description` | `str` |  |
| `description_html` | `str` |  |
| `detailed_merge_status` | `str` |  |
| `discussion_locked` | `str` |  |
| `downvotes` | `str` |  |
| `draft` | `str` |  |
| `force_remove_source_branch` | `str` |  |
| `has_conflicts` | `bool` |  |
| `id` | `int` |  |
| `iid` | `int` |  |
| `imported` | `str` |  |
| `imported_from` | `str` |  |
| `labels` | `str` |  |
| `merge_after` | `str` |  |
| `merge_commit_sha` | `str` |  |
| `merge_status` | `str` |  |
| `merge_user` | `dict` | API_Entities_UserBasic model |
| `merge_when_pipeline_succeeds` | `str` |  |
| `merged_at` | `str` |  |
| `merged_by` | `dict` | API_Entities_UserBasic model |
| `milestone` | `dict` |  |
| `prepared_at` | `str` |  |
| `project_id` | `int` |  |
| `reference` | `str` |  |
| `references` | `dict` |  |
| `reviewers` | `dict` | API_Entities_UserBasic model |
| `sha` | `str` |  |
| `should_remove_source_branch` | `bool` |  |
| `source_branch` | `str` |  |
| `source_project_id` | `str` |  |
| `squash` | `str` |  |
| `squash_commit_sha` | `str` |  |
| `squash_on_merge` | `str` |  |
| `state` | `str` |  |
| `target_branch` | `str` |  |
| `target_project_id` | `str` |  |
| `task_completion_status` | `str` |  |
| `time_stats` | `dict` | API_Entities_IssuableTimeStats model |
| `title` | `str` |  |
| `title_html` | `str` |  |
| `updated_at` | `str` |  |
| `upvotes` | `str` |  |
| `user_notes_count` | `str` |  |
| `web_url` | `str` |  |
| `work_in_progress` | `str` |  |

#### Example: Load

```python
api_entities_merge_request_basic = client.ApiEntitiesMergeRequestBasic().load()
```

#### Example: List

```python
api_entities_merge_request_basics = client.ApiEntitiesMergeRequestBasic().list({"project_id": "example"})
```


### ApiEntitiesMergeRequestChange

Create an instance: `api_entities_merge_request_change = client.ApiEntitiesMergeRequestChange()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_collaboration` | `bool` |  |
| `allow_maintainer_to_push` | `bool` |  |
| `approvals_before_merge` | `str` |  |
| `assignee` | `dict` | API_Entities_UserBasic model |
| `assignees` | `dict` | API_Entities_UserBasic model |
| `author` | `dict` | API_Entities_UserBasic model |
| `blocking_discussions_resolved` | `str` |  |
| `changes` | `dict` | API_Entities_Diff model |
| `changes_count` | `str` |  |
| `closed_at` | `str` |  |
| `closed_by` | `dict` | API_Entities_UserBasic model |
| `created_at` | `str` |  |
| `description` | `str` |  |
| `description_html` | `str` |  |
| `detailed_merge_status` | `str` |  |
| `diff_refs` | `dict` |  |
| `discussion_locked` | `str` |  |
| `diverged_commits_count` | `str` |  |
| `downvotes` | `str` |  |
| `draft` | `str` |  |
| `first_contribution` | `str` |  |
| `first_deployed_to_production_at` | `str` |  |
| `force_remove_source_branch` | `str` |  |
| `has_conflicts` | `bool` |  |
| `head_pipeline` | `dict` | API_Entities_Ci_Pipeline model |
| `id` | `int` |  |
| `iid` | `int` |  |
| `imported` | `str` |  |
| `imported_from` | `str` |  |
| `labels` | `str` |  |
| `latest_build_finished_at` | `str` |  |
| `latest_build_started_at` | `str` |  |
| `merge_after` | `str` |  |
| `merge_commit_sha` | `str` |  |
| `merge_error` | `str` |  |
| `merge_status` | `str` |  |
| `merge_user` | `dict` | API_Entities_UserBasic model |
| `merge_when_pipeline_succeeds` | `str` |  |
| `merged_at` | `str` |  |
| `merged_by` | `dict` | API_Entities_UserBasic model |
| `milestone` | `dict` |  |
| `overflow` | `str` |  |
| `pipeline` | `dict` | API_Entities_Ci_PipelineBasic model |
| `prepared_at` | `str` |  |
| `project_id` | `int` |  |
| `rebase_in_progress` | `str` |  |
| `reference` | `str` |  |
| `references` | `dict` |  |
| `reviewers` | `dict` | API_Entities_UserBasic model |
| `sha` | `str` |  |
| `should_remove_source_branch` | `bool` |  |
| `source_branch` | `str` |  |
| `source_project_id` | `str` |  |
| `squash` | `str` |  |
| `squash_commit_sha` | `str` |  |
| `squash_on_merge` | `str` |  |
| `state` | `str` |  |
| `subscribed` | `str` |  |
| `target_branch` | `str` |  |
| `target_project_id` | `str` |  |
| `task_completion_status` | `str` |  |
| `time_stats` | `dict` | API_Entities_IssuableTimeStats model |
| `title` | `str` |  |
| `title_html` | `str` |  |
| `updated_at` | `str` |  |
| `upvotes` | `str` |  |
| `user` | `dict` |  |
| `user_notes_count` | `str` |  |
| `web_url` | `str` |  |
| `work_in_progress` | `str` |  |

#### Example: Load

```python
api_entities_merge_request_change = client.ApiEntitiesMergeRequestChange().load({"merge_request_id": "merge_request_id", "project_id": "project_id"})
```


### ApiEntitiesMergeRequestDiff

Create an instance: `api_entities_merge_request_diff = client.ApiEntitiesMergeRequestDiff()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `base_commit_sha` | `str` |  |
| `created_at` | `str` |  |
| `head_commit_sha` | `str` |  |
| `id` | `str` |  |
| `merge_request_id` | `str` |  |
| `patch_id_sha` | `str` |  |
| `real_size` | `str` |  |
| `start_commit_sha` | `str` |  |
| `state` | `str` |  |

#### Example: List

```python
api_entities_merge_request_diffs = client.ApiEntitiesMergeRequestDiff().list({"merge_request_id": "example", "project_id": "example"})
```


### ApiEntitiesMergeRequestDiffFull

Create an instance: `api_entities_merge_request_diff_full = client.ApiEntitiesMergeRequestDiffFull()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `base_commit_sha` | `str` |  |
| `commits` | `dict` | API_Entities_Commit model |
| `created_at` | `str` |  |
| `diffs` | `dict` | API_Entities_Diff model |
| `head_commit_sha` | `str` |  |
| `id` | `str` |  |
| `merge_request_id` | `str` |  |
| `patch_id_sha` | `str` |  |
| `real_size` | `str` |  |
| `start_commit_sha` | `str` |  |
| `state` | `str` |  |

#### Example: Load

```python
api_entities_merge_request_diff_full = client.ApiEntitiesMergeRequestDiffFull().load({"merge_request_id": "merge_request_id", "project_id": "project_id", "version_id": "version_id"})
```


### ApiEntitiesMergeRequestReviewer

Create an instance: `api_entities_merge_request_reviewer = client.ApiEntitiesMergeRequestReviewer()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_path` | `str` |  |
| `avatar_url` | `str` |  |
| `custom_attributes` | `list` |  |
| `id` | `int` |  |
| `locked` | `bool` |  |
| `name` | `str` |  |
| `public_email` | `str` |  |
| `state` | `str` |  |
| `username` | `str` |  |
| `web_url` | `str` |  |

#### Example: Load

```python
api_entities_merge_request_reviewer = client.ApiEntitiesMergeRequestReviewer().load({"merge_request_id": "merge_request_id", "project_id": "project_id"})
```


### ApiEntitiesMetricImage

Create an instance: `api_entities_metric_image = client.ApiEntitiesMetricImage()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` |  |
| `file_path` | `str` |  |
| `filename` | `str` |  |
| `id` | `int` |  |
| `url` | `str` |  |
| `url_text` | `str` |  |

#### Example: List

```python
api_entities_metric_images = client.ApiEntitiesMetricImage().list({"alert_management_alert_id": "example", "project_id": "example"})
```

#### Example: Create

```python
api_entities_metric_image = client.ApiEntitiesMetricImage().create({
    "alert_management_alert_id": "example_alert_management_alert_id",  # str
    "project_id": "example_project_id",  # str
    "file": "example_file",  # Any
})
```


### ApiEntitiesMrNote

Create an instance: `api_entities_mr_note = client.ApiEntitiesMrNote()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_path` | `str` |  |
| `avatar_url` | `str` |  |
| `custom_attributes` | `list` |  |
| `id` | `int` |  |
| `locked` | `bool` |  |
| `name` | `str` |  |
| `public_email` | `str` |  |
| `state` | `str` |  |
| `username` | `str` |  |
| `web_url` | `str` |  |

#### Example: Load

```python
api_entities_mr_note = client.ApiEntitiesMrNote().load({"merge_request_id": "merge_request_id", "project_id": "project_id"})
```


### ApiEntitiesNamespace

Create an instance: `api_entities_namespace = client.ApiEntitiesNamespace()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `additional_purchased_storage_ends_on` | `str` |  |
| `additional_purchased_storage_size` | `int` |  |
| `avatar_url` | `str` |  |
| `billable_members_count` | `int` |  |
| `end_date` | `str` |  |
| `extra_shared_runners_minutes_limit` | `int` |  |
| `full_path` | `str` |  |
| `id` | `int` |  |
| `kind` | `str` |  |
| `max_seats_used` | `int` |  |
| `max_seats_used_changed_at` | `str` |  |
| `members_count_with_descendants` | `int` |  |
| `name` | `str` |  |
| `parent_id` | `int` |  |
| `path` | `str` |  |
| `plan` | `str` |  |
| `projects_count` | `int` |  |
| `root_repository_size` | `int` |  |
| `seats_in_use` | `int` |  |
| `shared_runners_minutes_limit` | `int` |  |
| `trial` | `bool` |  |
| `trial_ends_on` | `str` |  |
| `web_url` | `str` |  |

#### Example: Load

```python
api_entities_namespace = client.ApiEntitiesNamespace().load({"id": "api_entities_namespace_id"})
```

#### Example: List

```python
api_entities_namespaces = client.ApiEntitiesNamespace().list()
```


### ApiEntitiesNamespaceExistence

Create an instance: `api_entities_namespace_existence = client.ApiEntitiesNamespaceExistence()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `exists` | `bool` |  |
| `suggests` | `list` |  |

#### Example: List

```python
api_entities_namespace_existences = client.ApiEntitiesNamespaceExistence().list({"namespace_id": "example"})
```


### ApiEntitiesNamespacesStorageLimitExclusion

Create an instance: `api_entities_namespaces_storage_limit_exclusion = client.ApiEntitiesNamespacesStorageLimitExclusion()`

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
| `namespace_name` | `str` |  |
| `reason` | `str` |  |

#### Example: Load

```python
api_entities_namespaces_storage_limit_exclusion = client.ApiEntitiesNamespacesStorageLimitExclusion().load()
```

#### Example: Create

```python
api_entities_namespaces_storage_limit_exclusion = client.ApiEntitiesNamespacesStorageLimitExclusion().create({
    "namespace_id": "example_namespace_id",  # str
    "post_api_v4_namespaces_id_storage_limit_exclusion": {},  # dict
})
```


### ApiEntitiesNpmPackage

Create an instance: `api_entities_npm_package = client.ApiEntitiesNpmPackage()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `disttags` | `dict` |  |
| `name` | `str` |  |
| `versions` | `dict` |  |

#### Example: Load

```python
api_entities_npm_package = client.ApiEntitiesNpmPackage().load({"package_name": "package_name"})
```


### ApiEntitiesNpmPackageTag

Create an instance: `api_entities_npm_package_tag = client.ApiEntitiesNpmPackageTag()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```python
api_entities_npm_package_tag = client.ApiEntitiesNpmPackageTag().load({"package_name": "package_name"})
```


### ApiEntitiesNugetPackagesVersion

Create an instance: `api_entities_nuget_packages_version = client.ApiEntitiesNugetPackagesVersion()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `versions` | `list` |  |

#### Example: List

```python
api_entities_nuget_packages_versions = client.ApiEntitiesNugetPackagesVersion().list({"project_id": "example", "package_name": "example"})
```


### ApiEntitiesNugetSearchResult

Create an instance: `api_entities_nuget_search_result = client.ApiEntitiesNugetSearchResult()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `authors` | `str` |  |
| `description` | `str` |  |
| `iconUrl` | `str` |  |
| `id` | `str` |  |
| `licenseUrl` | `str` |  |
| `projectUrl` | `str` |  |
| `summary` | `str` |  |
| `tags` | `str` |  |
| `title` | `str` |  |
| `totalDownloads` | `int` |  |
| `type` | `str` |  |
| `verified` | `bool` |  |
| `version` | `str` |  |
| `versions` | `dict` |  |

#### Example: List

```python
api_entities_nuget_search_results = client.ApiEntitiesNugetSearchResult().list({"project_id": "example"})
```


### ApiEntitiesNugetServiceIndex

Create an instance: `api_entities_nuget_service_index = client.ApiEntitiesNugetServiceIndex()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `resources` | `list` |  |
| `version` | `str` |  |

#### Example: List

```python
api_entities_nuget_service_indexs = client.ApiEntitiesNugetServiceIndex().list({"project_id": "example"})
```


### ApiEntitiesOrganizationsOrganization

Create an instance: `api_entities_organizations_organization = client.ApiEntitiesOrganizationsOrganization()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```python
api_entities_organizations_organization = client.ApiEntitiesOrganizationsOrganization().create({
    "post_api_v4_organization": {},  # dict
})
```


### ApiEntitiesPackage

Create an instance: `api_entities_package = client.ApiEntitiesPackage()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `conan_package_name` | `str` |  |
| `created_at` | `str` |  |
| `id` | `int` |  |
| `last_downloaded_at` | `str` |  |
| `links` | `dict` |  |
| `name` | `str` |  |
| `package_type` | `str` |  |
| `pipeline` | `dict` | API_Entities_Package_Pipeline model |
| `pipelines` | `dict` | API_Entities_Package_Pipeline model |
| `project_id` | `int` |  |
| `project_path` | `str` |  |
| `status` | `str` |  |
| `tags` | `str` |  |
| `version` | `str` |  |
| `versions` | `dict` |  |

#### Example: Load

```python
api_entities_package = client.ApiEntitiesPackage().load({"id": "api_entities_package_id", "project_id": "project_id"})
```

#### Example: List

```python
api_entities_packages = client.ApiEntitiesPackage().list({"group_id": "example"})
```


### ApiEntitiesPackageFile

Create an instance: `api_entities_package_file = client.ApiEntitiesPackageFile()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` |  |
| `file_md5` | `str` |  |
| `file_name` | `str` |  |
| `file_sha1` | `str` |  |
| `file_sha256` | `str` |  |
| `id` | `int` |  |
| `package_id` | `int` |  |
| `pipelines` | `dict` | API_Entities_Package_Pipeline model |
| `size` | `int` |  |

#### Example: List

```python
api_entities_package_files = client.ApiEntitiesPackageFile().list({"package_id": "example", "project_id": "example"})
```


### ApiEntitiesPackagePipeline

Create an instance: `api_entities_package_pipeline = client.ApiEntitiesPackagePipeline()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_path` | `str` |  |
| `avatar_url` | `str` |  |
| `custom_attributes` | `list` |  |
| `id` | `int` |  |
| `locked` | `bool` |  |
| `name` | `str` |  |
| `public_email` | `str` |  |
| `state` | `str` |  |
| `username` | `str` |  |
| `web_url` | `str` |  |

#### Example: Load

```python
api_entities_package_pipeline = client.ApiEntitiesPackagePipeline().load({"package_id": "package_id", "project_id": "project_id"})
```


### ApiEntitiesPackagesConanFilesList

Create an instance: `api_entities_packages_conan_files_list = client.ApiEntitiesPackagesConanFilesList()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```python
api_entities_packages_conan_files_list = client.ApiEntitiesPackagesConanFilesList().load({"conan_id": "conan_id", "package_channel": "package_channel", "package_username": "package_username", "package_version": "package_version", "project_id": "project_id"})
```


### ApiEntitiesPackagesConanPackageManifest

Create an instance: `api_entities_packages_conan_package_manifest = client.ApiEntitiesPackagesConanPackageManifest()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```python
api_entities_packages_conan_package_manifest = client.ApiEntitiesPackagesConanPackageManifest().load({"conan_id": "conan_id", "conan_package_reference": "conan_package_reference", "package_channel": "package_channel", "package_username": "package_username", "package_version": "package_version"})
```


### ApiEntitiesPackagesConanPackageRevision

Create an instance: `api_entities_packages_conan_package_revision = client.ApiEntitiesPackagesConanPackageRevision()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `revision` | `str` | The revision hash of the Conan recipe or package |
| `time` | `str` | The UTC timestamp when the revision was created |

#### Example: List

```python
api_entities_packages_conan_package_revisions = client.ApiEntitiesPackagesConanPackageRevision().list({"conan_id": "example", "conan_package_reference": "example", "package_channel": "example", "package_username": "example", "package_version": "example", "project_id": "example", "revision_id": "example"})
```


### ApiEntitiesPackagesConanPackageSnapshot

Create an instance: `api_entities_packages_conan_package_snapshot = client.ApiEntitiesPackagesConanPackageSnapshot()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```python
api_entities_packages_conan_package_snapshot = client.ApiEntitiesPackagesConanPackageSnapshot().load({"conan_id": "conan_id", "conan_package_reference": "conan_package_reference", "package_channel": "package_channel", "package_username": "package_username", "package_version": "package_version"})
```


### ApiEntitiesPackagesConanRecipeManifest

Create an instance: `api_entities_packages_conan_recipe_manifest = client.ApiEntitiesPackagesConanRecipeManifest()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```python
api_entities_packages_conan_recipe_manifest = client.ApiEntitiesPackagesConanRecipeManifest().load({"conan_id": "conan_id", "package_channel": "package_channel", "package_username": "package_username", "package_version": "package_version"})
```


### ApiEntitiesPackagesConanRecipeRevision

Create an instance: `api_entities_packages_conan_recipe_revision = client.ApiEntitiesPackagesConanRecipeRevision()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `revision` | `str` | The revision hash of the Conan recipe or package |
| `time` | `str` | The UTC timestamp when the revision was created |

#### Example: List

```python
api_entities_packages_conan_recipe_revisions = client.ApiEntitiesPackagesConanRecipeRevision().list({"conan_id": "example", "package_channel": "example", "package_username": "example", "package_version": "example", "project_id": "example"})
```


### ApiEntitiesPackagesConanRecipeSnapshot

Create an instance: `api_entities_packages_conan_recipe_snapshot = client.ApiEntitiesPackagesConanRecipeSnapshot()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |

#### Example: Load

```python
api_entities_packages_conan_recipe_snapshot = client.ApiEntitiesPackagesConanRecipeSnapshot().load({"id": "api_entities_packages_conan_recipe_snapshot_id", "package_channel": "package_channel", "package_name": "package_name", "package_username": "package_username", "package_version": "package_version"})
```


### ApiEntitiesPackagesConanRevision

Create an instance: `api_entities_packages_conan_revision = client.ApiEntitiesPackagesConanRevision()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `revision` | `str` | The revision hash of the Conan recipe or package |
| `time` | `str` | The UTC timestamp when the revision was created |

#### Example: Load

```python
api_entities_packages_conan_revision = client.ApiEntitiesPackagesConanRevision().load({"conan_id": "conan_id", "package_channel": "package_channel", "package_username": "package_username", "package_version": "package_version", "project_id": "project_id"})
```


### ApiEntitiesPackagesConanUploadUrl

Create an instance: `api_entities_packages_conan_upload_url = client.ApiEntitiesPackagesConanUploadUrl()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```python
api_entities_packages_conan_upload_url = client.ApiEntitiesPackagesConanUploadUrl().create({
    "conan_id": "example_conan_id",  # str
    "package_channel": "example_package_channel",  # Any
    "package_username": "example_package_username",  # Any
    "package_version": "example_package_version",  # Any
})
```


### ApiEntitiesPackagesDebianDistribution

Create an instance: `api_entities_packages_debian_distribution = client.ApiEntitiesPackagesDebianDistribution()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `architectures` | `list` |  |
| `codename` | `str` |  |
| `components` | `list` |  |
| `description` | `str` |  |
| `id` | `int` |  |
| `label` | `str` |  |
| `origin` | `str` |  |
| `suite` | `str` |  |
| `valid_time_duration_seconds` | `int` |  |
| `version` | `str` |  |

#### Example: Load

```python
api_entities_packages_debian_distribution = client.ApiEntitiesPackagesDebianDistribution().load({"id": "api_entities_packages_debian_distribution_id"})
```

#### Example: List

```python
api_entities_packages_debian_distributions = client.ApiEntitiesPackagesDebianDistribution().list({"project_id": "example"})
```

#### Example: Create

```python
api_entities_packages_debian_distribution = client.ApiEntitiesPackagesDebianDistribution().create({
    "project_id": "example_project_id",  # str
    "post_api_v4_projects_id_debian_distribution": {},  # dict
})
```


### ApiEntitiesPagesDomain

Create an instance: `api_entities_pages_domain = client.ApiEntitiesPagesDomain()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auto_ssl_enabled` | `str` |  |
| `certificate` | `str` |  |
| `certificate_text` | `str` |  |
| `domain` | `str` |  |
| `enabled_until` | `str` |  |
| `expired` | `str` |  |
| `id` | `str` |  |
| `subject` | `str` |  |
| `url` | `str` |  |
| `verification_code` | `str` |  |
| `verified` | `bool` |  |

#### Example: Load

```python
api_entities_pages_domain = client.ApiEntitiesPagesDomain().load({"id": "api_entities_pages_domain_id", "project_id": "project_id"})
```

#### Example: List

```python
api_entities_pages_domains = client.ApiEntitiesPagesDomain().list({"project_id": "example"})
```

#### Example: Create

```python
api_entities_pages_domain = client.ApiEntitiesPagesDomain().create({
    "project_id": "example_project_id",  # str
    "post_api_v4_projects_id_pages_domain": {},  # dict
})
```


### ApiEntitiesPagesDomainBasic

Create an instance: `api_entities_pages_domain_basic = client.ApiEntitiesPagesDomainBasic()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `expiration` | `str` |  |
| `expired` | `str` |  |

#### Example: Load

```python
api_entities_pages_domain_basic = client.ApiEntitiesPagesDomainBasic().load()
```


### ApiEntitiesPersonalAccessToken

Create an instance: `api_entities_personal_access_token = client.ApiEntitiesPersonalAccessToken()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` |  |
| `created_at` | `str` |  |
| `description` | `str` |  |
| `expires_at` | `str` |  |
| `id` | `int` |  |
| `last_used_at` | `str` |  |
| `name` | `str` |  |
| `revoked` | `bool` |  |
| `scopes` | `list` |  |
| `user_id` | `int` |  |

#### Example: List

```python
api_entities_personal_access_tokens = client.ApiEntitiesPersonalAccessToken().list()
```


### ApiEntitiesPersonalAccessTokenWithLastUsedIp

Create an instance: `api_entities_personal_access_token_with_last_used_ip = client.ApiEntitiesPersonalAccessTokenWithLastUsedIp()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` |  |
| `created_at` | `str` |  |
| `description` | `str` |  |
| `expires_at` | `str` |  |
| `id` | `int` |  |
| `last_used_at` | `str` |  |
| `last_used_ips` | `list` |  |
| `name` | `str` |  |
| `revoked` | `bool` |  |
| `scopes` | `list` |  |
| `user_id` | `int` |  |

#### Example: Load

```python
api_entities_personal_access_token_with_last_used_ip = client.ApiEntitiesPersonalAccessTokenWithLastUsedIp().load({"id": "api_entities_personal_access_token_with_last_used_ip_id"})
```

#### Example: List

```python
api_entities_personal_access_token_with_last_used_ips = client.ApiEntitiesPersonalAccessTokenWithLastUsedIp().list()
```


### ApiEntitiesPersonalAccessTokenWithToken

Create an instance: `api_entities_personal_access_token_with_token = client.ApiEntitiesPersonalAccessTokenWithToken()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` |  |
| `created_at` | `str` |  |
| `description` | `str` |  |
| `expires_at` | `str` |  |
| `id` | `int` |  |
| `last_used_at` | `str` |  |
| `name` | `str` |  |
| `revoked` | `bool` |  |
| `scopes` | `list` |  |
| `token` | `str` |  |
| `user_id` | `int` |  |

#### Example: Create

```python
api_entities_personal_access_token_with_token = client.ApiEntitiesPersonalAccessTokenWithToken().create({
    "personal_access_token_id": "example_personal_access_token_id",  # str
    "post_api_v4_personal_access_tokens_id_rotate": {},  # dict
})
```


### ApiEntitiesPersonalSnippet

Create an instance: `api_entities_personal_snippet = client.ApiEntitiesPersonalSnippet()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author` | `dict` | API_Entities_UserBasic model |
| `created_at` | `str` |  |
| `description` | `str` |  |
| `file_name` | `str` |  |
| `files` | `list` |  |
| `http_url_to_repo` | `str` |  |
| `id` | `int` |  |
| `imported` | `bool` |  |
| `imported_from` | `str` |  |
| `project_id` | `int` |  |
| `raw_url` | `str` |  |
| `repository_storage` | `str` |  |
| `ssh_url_to_repo` | `str` |  |
| `title` | `str` |  |
| `updated_at` | `str` |  |
| `visibility` | `str` |  |
| `web_url` | `str` |  |

#### Example: Load

```python
api_entities_personal_snippet = client.ApiEntitiesPersonalSnippet().load({"id": "api_entities_personal_snippet_id"})
```

#### Example: List

```python
api_entities_personal_snippets = client.ApiEntitiesPersonalSnippet().list()
```

#### Example: Create

```python
api_entities_personal_snippet = client.ApiEntitiesPersonalSnippet().create({
    "post_api_v4_snippet": {},  # dict
})
```


### ApiEntitiesPlanLimit

Create an instance: `api_entities_plan_limit = client.ApiEntitiesPlanLimit()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Example: Load

```python
api_entities_plan_limit = client.ApiEntitiesPlanLimit().load()
```


### ApiEntitiesProject

Create an instance: `api_entities_project = client.ApiEntitiesProject()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_merge_on_skipped_pipeline` | `bool` |  |
| `allow_pipeline_trigger_approve_deployment` | `bool` |  |
| `analytics_access_level` | `str` |  |
| `approvals_before_merge` | `str` |  |
| `archived` | `bool` |  |
| `auto_cancel_pending_pipelines` | `str` |  |
| `auto_devops_deploy_strategy` | `str` |  |
| `auto_devops_enabled` | `bool` |  |
| `auto_duo_code_review_enabled` | `str` |  |
| `autoclose_referenced_issues` | `bool` |  |
| `avatar_url` | `str` |  |
| `build_git_strategy` | `str` |  |
| `build_timeout` | `int` |  |
| `builds_access_level` | `str` |  |
| `can_create_merge_request_in` | `bool` |  |
| `ci_allow_fork_pipelines_to_run_in_parent_project` | `bool` |  |
| `ci_config_path` | `str` |  |
| `ci_default_git_depth` | `int` |  |
| `ci_delete_pipelines_in_seconds` | `int` |  |
| `ci_forward_deployment_enabled` | `bool` |  |
| `ci_forward_deployment_rollback_allowed` | `bool` |  |
| `ci_id_token_sub_claim_components` | `list` |  |
| `ci_job_token_scope_enabled` | `bool` |  |
| `ci_pipeline_variables_minimum_override_role` | `str` |  |
| `ci_push_repository_for_job_token_allowed` | `bool` |  |
| `ci_restrict_pipeline_cancellation_role` | `str` |  |
| `ci_separated_caches` | `bool` |  |
| `compliance_frameworks` | `str` |  |
| `container_expiration_policy` | `dict` |  |
| `container_registry_access_level` | `str` |  |
| `container_registry_enabled` | `bool` |  |
| `container_registry_image_prefix` | `str` |  |
| `created_at` | `str` |  |
| `creator_id` | `int` |  |
| `custom_attributes` | `dict` | API_Entities_CustomAttribute model |
| `default_branch` | `str` |  |
| `description` | `str` |  |
| `description_html` | `str` |  |
| `duo_remote_flows_enabled` | `str` |  |
| `emails_disabled` | `bool` |  |
| `emails_enabled` | `bool` |  |
| `empty_repo` | `bool` |  |
| `enforce_auth_checks_on_uploads` | `bool` |  |
| `environments_access_level` | `str` |  |
| `external_authorization_classification_label` | `str` |  |
| `feature_flags_access_level` | `str` |  |
| `forked_from_project` | `dict` | API_Entities_BasicProjectDetails model |
| `forking_access_level` | `str` |  |
| `forks_count` | `int` |  |
| `group_runners_enabled` | `bool` |  |
| `http_url_to_repo` | `str` |  |
| `id` | `int` |  |
| `import_error` | `str` |  |
| `import_status` | `str` |  |
| `import_type` | `str` |  |
| `import_url` | `str` |  |
| `infrastructure_access_level` | `str` |  |
| `issue_branch_template` | `str` |  |
| `issues_access_level` | `str` |  |
| `issues_enabled` | `bool` |  |
| `issues_template` | `str` |  |
| `jobs_enabled` | `bool` |  |
| `keep_latest_artifact` | `bool` |  |
| `last_activity_at` | `str` |  |
| `lfs_enabled` | `bool` |  |
| `license` | `dict` |  |
| `license_url` | `str` |  |
| `links` | `dict` |  |
| `marked_for_deletion_at` | `str` |  |
| `marked_for_deletion_on` | `str` |  |
| `max_artifacts_size` | `int` |  |
| `merge_commit_template` | `str` |  |
| `merge_method` | `str` |  |
| `merge_pipelines_enabled` | `str` |  |
| `merge_request_title_regex` | `str` |  |
| `merge_request_title_regex_description` | `str` |  |
| `merge_requests_access_level` | `str` |  |
| `merge_requests_enabled` | `bool` |  |
| `merge_requests_template` | `str` |  |
| `merge_trains_enabled` | `str` |  |
| `merge_trains_skip_train_allowed` | `str` |  |
| `mirror` | `str` |  |
| `mirror_overwrites_diverged_branches` | `str` |  |
| `mirror_trigger_builds` | `str` |  |
| `mirror_user_id` | `str` |  |
| `model_experiments_access_level` | `str` |  |
| `model_registry_access_level` | `str` |  |
| `monitor_access_level` | `str` |  |
| `mr_default_target_self` | `bool` |  |
| `name` | `str` |  |
| `name_with_namespace` | `str` |  |
| `namespace` | `dict` |  |
| `only_allow_merge_if_all_discussions_are_resolved` | `bool` |  |
| `only_allow_merge_if_all_status_checks_passed` | `str` |  |
| `only_allow_merge_if_pipeline_succeeds` | `bool` |  |
| `only_mirror_protected_branches` | `str` |  |
| `open_issues_count` | `int` |  |
| `owner` | `dict` | API_Entities_UserBasic model |
| `package_registry_access_level` | `str` |  |
| `packages_enabled` | `bool` |  |
| `pages_access_level` | `str` |  |
| `path` | `str` |  |
| `path_with_namespace` | `str` |  |
| `pre_receive_secret_detection_enabled` | `bool` |  |
| `prevent_merge_without_jira_issue` | `str` |  |
| `printing_merge_request_link_enabled` | `bool` |  |
| `public_jobs` | `bool` |  |
| `readme_url` | `str` |  |
| `releases_access_level` | `str` |  |
| `remove_source_branch_after_merge` | `bool` |  |
| `repository_access_level` | `str` |  |
| `repository_object_format` | `str` |  |
| `repository_storage` | `str` |  |
| `request_access_enabled` | `bool` |  |
| `requirements_access_level` | `str` |  |
| `requirements_enabled` | `str` |  |
| `resolve_outdated_diff_discussions` | `bool` |  |
| `resource_group_default_process_mode` | `str` |  |
| `restrict_user_defined_variables` | `bool` |  |
| `runner_token_expiration_interval` | `int` |  |
| `runners_token` | `str` |  |
| `secret_push_protection_enabled` | `bool` |  |
| `security_and_compliance_access_level` | `str` |  |
| `security_and_compliance_enabled` | `str` |  |
| `service_desk_address` | `str` |  |
| `service_desk_enabled` | `bool` |  |
| `shared_runners_enabled` | `bool` |  |
| `shared_with_groups` | `list` |  |
| `show_diff_preview_in_email` | `bool` |  |
| `snippets_access_level` | `str` |  |
| `snippets_enabled` | `bool` |  |
| `spp_repository_pipeline_access` | `bool` | The spp_repository_pipeline_access setting is only visible if the security_orchestration_policies feature is available. |
| `squash_commit_template` | `str` |  |
| `squash_option` | `str` |  |
| `ssh_url_to_repo` | `str` |  |
| `star_count` | `int` |  |
| `statistics` | `dict` |  |
| `suggestion_commit_message` | `str` |  |
| `tag_list` | `list` |  |
| `topics` | `list` |  |
| `updated_at` | `str` |  |
| `visibility` | `str` |  |
| `warn_about_potentially_unwanted_characters` | `bool` |  |
| `web_based_commit_signing_enabled` | `str` |  |
| `web_url` | `str` |  |
| `wiki_access_level` | `str` |  |
| `wiki_enabled` | `bool` |  |

#### Example: List

```python
api_entities_projects = client.ApiEntitiesProject().list({"project_id": "example"})
```

#### Example: Create

```python
api_entities_project = client.ApiEntitiesProject().create({
    "user_id": "example_user_id",  # str
    "post_api_v4_projects_user_user_id": {},  # dict
})
```


### ApiEntitiesProjectDailyStatistic

Create an instance: `api_entities_project_daily_statistic = client.ApiEntitiesProjectDailyStatistic()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `days` | `list` |  |
| `total` | `int` |  |

#### Example: Load

```python
api_entities_project_daily_statistic = client.ApiEntitiesProjectDailyStatistic().load({"project_id": "project_id"})
```


### ApiEntitiesProjectExportStatus

Create an instance: `api_entities_project_export_status = client.ApiEntitiesProjectExportStatus()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `api_url` | `str` |  |
| `web_url` | `str` |  |

#### Example: Load

```python
api_entities_project_export_status = client.ApiEntitiesProjectExportStatus().load({"project_id": "project_id"})
```


### ApiEntitiesProjectGroupLink

Create an instance: `api_entities_project_group_link = client.ApiEntitiesProjectGroupLink()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```python
api_entities_project_group_link = client.ApiEntitiesProjectGroupLink().create({
    "project_id": "example_project_id",  # str
    "post_api_v4_projects_id_share": {},  # dict
})
```


### ApiEntitiesProjectHook

Create an instance: `api_entities_project_hook = client.ApiEntitiesProjectHook()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alert_status` | `Any` |  |
| `branch_filter_strategy` | `str` |  |
| `confidential_issues_events` | `bool` |  |
| `confidential_note_events` | `bool` |  |
| `created_at` | `str` |  |
| `custom_headers` | `list` |  |
| `custom_webhook_template` | `str` |  |
| `deployment_events` | `bool` |  |
| `description` | `str` |  |
| `disabled_until` | `str` |  |
| `emoji_events` | `bool` |  |
| `enable_ssl_verification` | `bool` |  |
| `feature_flag_events` | `bool` |  |
| `id` | `str` |  |
| `issues_events` | `bool` |  |
| `job_events` | `bool` |  |
| `merge_requests_events` | `bool` |  |
| `milestone_events` | `bool` |  |
| `name` | `str` |  |
| `note_events` | `bool` |  |
| `pipeline_events` | `bool` |  |
| `project_id` | `str` |  |
| `push_events` | `bool` |  |
| `push_events_branch_filter` | `str` |  |
| `releases_events` | `bool` |  |
| `repository_update_events` | `bool` |  |
| `resource_access_token_events` | `bool` |  |
| `tag_push_events` | `bool` |  |
| `url` | `str` |  |
| `url_variables` | `list` |  |
| `vulnerability_events` | `bool` |  |
| `wiki_page_events` | `bool` |  |

#### Example: Load

```python
api_entities_project_hook = client.ApiEntitiesProjectHook().load({"id": "api_entities_project_hook_id", "project_id": "project_id"})
```

#### Example: List

```python
api_entities_project_hooks = client.ApiEntitiesProjectHook().list({"project_id": "example"})
```

#### Example: Create

```python
api_entities_project_hook = client.ApiEntitiesProjectHook().create({
    "project_id": "example_project_id",  # str
    "post_api_v4_projects_id_hook": {},  # dict
})
```


### ApiEntitiesProjectImportStatus

Create an instance: `api_entities_project_import_status = client.ApiEntitiesProjectImportStatus()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` |  |
| `exception_class` | `str` |  |
| `exception_message` | `str` |  |
| `id` | `str` |  |
| `line_number` | `int` |  |
| `relation_name` | `str` |  |
| `source` | `str` |  |

#### Example: List

```python
api_entities_project_import_statuss = client.ApiEntitiesProjectImportStatus().list({"project_id": "example"})
```

#### Example: Create

```python
api_entities_project_import_status = client.ApiEntitiesProjectImportStatus().create({
    "path": "example_path",  # str
})
```


### ApiEntitiesProjectJobTokenScope

Create an instance: `api_entities_project_job_token_scope = client.ApiEntitiesProjectJobTokenScope()`

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

```python
api_entities_project_job_token_scope = client.ApiEntitiesProjectJobTokenScope().load({"project_id": "project_id"})
```


### ApiEntitiesProjectRepositoryStorage

Create an instance: `api_entities_project_repository_storage = client.ApiEntitiesProjectRepositoryStorage()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` |  |
| `disk_path` | `str` |  |
| `project_id` | `int` |  |
| `repository_storage` | `str` |  |

#### Example: Load

```python
api_entities_project_repository_storage = client.ApiEntitiesProjectRepositoryStorage().load({"project_id": "project_id"})
```


### ApiEntitiesProjectSnippet

Create an instance: `api_entities_project_snippet = client.ApiEntitiesProjectSnippet()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author` | `dict` | API_Entities_UserBasic model |
| `created_at` | `str` |  |
| `description` | `str` |  |
| `file_name` | `str` |  |
| `files` | `list` |  |
| `http_url_to_repo` | `str` |  |
| `id` | `int` |  |
| `imported` | `bool` |  |
| `imported_from` | `str` |  |
| `project_id` | `int` |  |
| `raw_url` | `str` |  |
| `repository_storage` | `str` |  |
| `ssh_url_to_repo` | `str` |  |
| `title` | `str` |  |
| `updated_at` | `str` |  |
| `visibility` | `str` |  |
| `web_url` | `str` |  |

#### Example: Load

```python
api_entities_project_snippet = client.ApiEntitiesProjectSnippet().load({"id": "api_entities_project_snippet_id", "project_id": "project_id"})
```

#### Example: List

```python
api_entities_project_snippets = client.ApiEntitiesProjectSnippet().list({"project_id": "example"})
```

#### Example: Create

```python
api_entities_project_snippet = client.ApiEntitiesProjectSnippet().create({
    "project_id": "example_project_id",  # str
    "post_api_v4_projects_id_snippet": {},  # dict
})
```


### ApiEntitiesProjectUpload

Create an instance: `api_entities_project_upload = client.ApiEntitiesProjectUpload()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```python
api_entities_project_upload = client.ApiEntitiesProjectUpload().create({
    "project_id": "example_project_id",  # str
    "post_api_v4_projects_id_upload": {},  # dict
})
```


### ApiEntitiesProjectWithAccess

Create an instance: `api_entities_project_with_access = client.ApiEntitiesProjectWithAccess()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_merge_on_skipped_pipeline` | `bool` |  |
| `allow_pipeline_trigger_approve_deployment` | `bool` |  |
| `analytics_access_level` | `str` |  |
| `approvals_before_merge` | `str` |  |
| `archived` | `bool` |  |
| `auto_cancel_pending_pipelines` | `str` |  |
| `auto_devops_deploy_strategy` | `str` |  |
| `auto_devops_enabled` | `bool` |  |
| `auto_duo_code_review_enabled` | `str` |  |
| `autoclose_referenced_issues` | `bool` |  |
| `avatar_url` | `str` |  |
| `build_git_strategy` | `str` |  |
| `build_timeout` | `int` |  |
| `builds_access_level` | `str` |  |
| `can_create_merge_request_in` | `bool` |  |
| `ci_allow_fork_pipelines_to_run_in_parent_project` | `bool` |  |
| `ci_config_path` | `str` |  |
| `ci_default_git_depth` | `int` |  |
| `ci_delete_pipelines_in_seconds` | `int` |  |
| `ci_forward_deployment_enabled` | `bool` |  |
| `ci_forward_deployment_rollback_allowed` | `bool` |  |
| `ci_id_token_sub_claim_components` | `list` |  |
| `ci_job_token_scope_enabled` | `bool` |  |
| `ci_pipeline_variables_minimum_override_role` | `str` |  |
| `ci_push_repository_for_job_token_allowed` | `bool` |  |
| `ci_restrict_pipeline_cancellation_role` | `str` |  |
| `ci_separated_caches` | `bool` |  |
| `compliance_frameworks` | `str` |  |
| `container_expiration_policy` | `dict` |  |
| `container_registry_access_level` | `str` |  |
| `container_registry_enabled` | `bool` |  |
| `container_registry_image_prefix` | `str` |  |
| `created_at` | `str` |  |
| `creator_id` | `int` |  |
| `custom_attributes` | `dict` | API_Entities_CustomAttribute model |
| `default_branch` | `str` |  |
| `description` | `str` |  |
| `description_html` | `str` |  |
| `duo_remote_flows_enabled` | `str` |  |
| `emails_disabled` | `bool` |  |
| `emails_enabled` | `bool` |  |
| `empty_repo` | `bool` |  |
| `enforce_auth_checks_on_uploads` | `bool` |  |
| `environments_access_level` | `str` |  |
| `external_authorization_classification_label` | `str` |  |
| `feature_flags_access_level` | `str` |  |
| `forked_from_project` | `dict` | API_Entities_BasicProjectDetails model |
| `forking_access_level` | `str` |  |
| `forks_count` | `int` |  |
| `group_runners_enabled` | `bool` |  |
| `http_url_to_repo` | `str` |  |
| `id` | `int` |  |
| `import_error` | `str` |  |
| `import_status` | `str` |  |
| `import_type` | `str` |  |
| `import_url` | `str` |  |
| `infrastructure_access_level` | `str` |  |
| `issue_branch_template` | `str` |  |
| `issues_access_level` | `str` |  |
| `issues_enabled` | `bool` |  |
| `issues_template` | `str` |  |
| `jobs_enabled` | `bool` |  |
| `keep_latest_artifact` | `bool` |  |
| `last_activity_at` | `str` |  |
| `lfs_enabled` | `bool` |  |
| `license` | `dict` |  |
| `license_url` | `str` |  |
| `links` | `dict` |  |
| `marked_for_deletion_at` | `str` |  |
| `marked_for_deletion_on` | `str` |  |
| `max_artifacts_size` | `int` |  |
| `merge_commit_template` | `str` |  |
| `merge_method` | `str` |  |
| `merge_pipelines_enabled` | `str` |  |
| `merge_request_title_regex` | `str` |  |
| `merge_request_title_regex_description` | `str` |  |
| `merge_requests_access_level` | `str` |  |
| `merge_requests_enabled` | `bool` |  |
| `merge_requests_template` | `str` |  |
| `merge_trains_enabled` | `str` |  |
| `merge_trains_skip_train_allowed` | `str` |  |
| `mirror` | `str` |  |
| `mirror_overwrites_diverged_branches` | `str` |  |
| `mirror_trigger_builds` | `str` |  |
| `mirror_user_id` | `str` |  |
| `model_experiments_access_level` | `str` |  |
| `model_registry_access_level` | `str` |  |
| `monitor_access_level` | `str` |  |
| `mr_default_target_self` | `bool` |  |
| `name` | `str` |  |
| `name_with_namespace` | `str` |  |
| `namespace` | `dict` |  |
| `only_allow_merge_if_all_discussions_are_resolved` | `bool` |  |
| `only_allow_merge_if_all_status_checks_passed` | `str` |  |
| `only_allow_merge_if_pipeline_succeeds` | `bool` |  |
| `only_mirror_protected_branches` | `str` |  |
| `open_issues_count` | `int` |  |
| `owner` | `dict` | API_Entities_UserBasic model |
| `package_registry_access_level` | `str` |  |
| `packages_enabled` | `bool` |  |
| `pages_access_level` | `str` |  |
| `path` | `str` |  |
| `path_with_namespace` | `str` |  |
| `permissions` | `dict` |  |
| `pre_receive_secret_detection_enabled` | `bool` |  |
| `prevent_merge_without_jira_issue` | `str` |  |
| `printing_merge_request_link_enabled` | `bool` |  |
| `public_jobs` | `bool` |  |
| `readme_url` | `str` |  |
| `releases_access_level` | `str` |  |
| `remove_source_branch_after_merge` | `bool` |  |
| `repository_access_level` | `str` |  |
| `repository_object_format` | `str` |  |
| `repository_storage` | `str` |  |
| `request_access_enabled` | `bool` |  |
| `requirements_access_level` | `str` |  |
| `requirements_enabled` | `str` |  |
| `resolve_outdated_diff_discussions` | `bool` |  |
| `resource_group_default_process_mode` | `str` |  |
| `restrict_user_defined_variables` | `bool` |  |
| `runner_token_expiration_interval` | `int` |  |
| `runners_token` | `str` |  |
| `secret_push_protection_enabled` | `bool` |  |
| `security_and_compliance_access_level` | `str` |  |
| `security_and_compliance_enabled` | `str` |  |
| `service_desk_address` | `str` |  |
| `service_desk_enabled` | `bool` |  |
| `shared_runners_enabled` | `bool` |  |
| `shared_with_groups` | `list` |  |
| `show_diff_preview_in_email` | `bool` |  |
| `snippets_access_level` | `str` |  |
| `snippets_enabled` | `bool` |  |
| `spp_repository_pipeline_access` | `bool` | The spp_repository_pipeline_access setting is only visible if the security_orchestration_policies feature is available. |
| `squash_commit_template` | `str` |  |
| `squash_option` | `str` |  |
| `ssh_url_to_repo` | `str` |  |
| `star_count` | `int` |  |
| `statistics` | `dict` |  |
| `suggestion_commit_message` | `str` |  |
| `tag_list` | `list` |  |
| `topics` | `list` |  |
| `updated_at` | `str` |  |
| `visibility` | `str` |  |
| `warn_about_potentially_unwanted_characters` | `bool` |  |
| `web_based_commit_signing_enabled` | `str` |  |
| `web_url` | `str` |  |
| `wiki_access_level` | `str` |  |
| `wiki_enabled` | `bool` |  |

#### Example: Load

```python
api_entities_project_with_access = client.ApiEntitiesProjectWithAccess().load({"id": "api_entities_project_with_access_id"})
```

#### Example: Create

```python
api_entities_project_with_access = client.ApiEntitiesProjectWithAccess().create({
    "project_id": "example_project_id",  # str
})
```


### ApiEntitiesProjectsContainerRegistryProtectionRule

Create an instance: `api_entities_projects_container_registry_protection_rule = client.ApiEntitiesProjectsContainerRegistryProtectionRule()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `int` |  |
| `minimum_access_level_for_delete` | `str` |  |
| `minimum_access_level_for_push` | `str` |  |
| `project_id` | `int` |  |
| `repository_path_pattern` | `str` |  |

#### Example: List

```python
api_entities_projects_container_registry_protection_rules = client.ApiEntitiesProjectsContainerRegistryProtectionRule().list({"project_id": "example"})
```

#### Example: Create

```python
api_entities_projects_container_registry_protection_rule = client.ApiEntitiesProjectsContainerRegistryProtectionRule().create({
    "project_id": "example_project_id",  # str
    "post_api_v4_projects_id_registry_protection_repository_rule": {},  # dict
})
```


### ApiEntitiesProjectsPackagesProtectionRule

Create an instance: `api_entities_projects_packages_protection_rule = client.ApiEntitiesProjectsPackagesProtectionRule()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `int` |  |
| `minimum_access_level_for_delete` | `str` |  |
| `minimum_access_level_for_push` | `str` |  |
| `package_name_pattern` | `str` |  |
| `package_type` | `str` |  |
| `project_id` | `int` |  |

#### Example: List

```python
api_entities_projects_packages_protection_rules = client.ApiEntitiesProjectsPackagesProtectionRule().list({"project_id": "example"})
```

#### Example: Create

```python
api_entities_projects_packages_protection_rule = client.ApiEntitiesProjectsPackagesProtectionRule().create({
    "project_id": "example_project_id",  # str
    "post_api_v4_projects_id_packages_protection_rule": {},  # dict
})
```


### ApiEntitiesProjectsTopic

Create an instance: `api_entities_projects_topic = client.ApiEntitiesProjectsTopic()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_url` | `str` |  |
| `description` | `str` |  |
| `id` | `str` |  |
| `name` | `str` |  |
| `organization_id` | `str` |  |
| `title` | `str` |  |
| `total_projects_count` | `str` |  |

#### Example: Load

```python
api_entities_projects_topic = client.ApiEntitiesProjectsTopic().load({"id": "api_entities_projects_topic_id"})
```

#### Example: Create

```python
api_entities_projects_topic = client.ApiEntitiesProjectsTopic().create({
    "post_api_v4_topic": {},  # dict
})
```


### ApiEntitiesProtectedBranch

Create an instance: `api_entities_protected_branch = client.ApiEntitiesProtectedBranch()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_force_push` | `bool` |  |
| `code_owner_approval_required` | `bool` |  |
| `id` | `int` |  |
| `inherited` | `bool` |  |
| `merge_access_levels` | `list` |  |
| `name` | `str` |  |
| `push_access_levels` | `list` |  |
| `unprotect_access_levels` | `list` |  |

#### Example: Load

```python
api_entities_protected_branch = client.ApiEntitiesProtectedBranch().load({"id": "api_entities_protected_branch_id", "project_id": "project_id"})
```

#### Example: List

```python
api_entities_protected_branchs = client.ApiEntitiesProtectedBranch().list({"project_id": "example"})
```

#### Example: Create

```python
api_entities_protected_branch = client.ApiEntitiesProtectedBranch().create({
    "project_id": "example_project_id",  # str
    "post_api_v4_projects_id_protected_branch": {},  # dict
})
```


### ApiEntitiesProtectedTag

Create an instance: `api_entities_protected_tag = client.ApiEntitiesProtectedTag()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `access_level` | `int` |  |
| `access_level_description` | `str` |  |
| `create_access_levels` | `dict` |  |
| `deploy_key_id` | `int` |  |
| `group_id` | `int` |  |
| `id` | `int` |  |
| `name` | `str` |  |
| `user_id` | `int` |  |

#### Example: Load

```python
api_entities_protected_tag = client.ApiEntitiesProtectedTag().load({"id": "api_entities_protected_tag_id", "project_id": "project_id"})
```

#### Example: List

```python
api_entities_protected_tags = client.ApiEntitiesProtectedTag().list({"project_id": "example"})
```

#### Example: Create

```python
api_entities_protected_tag = client.ApiEntitiesProtectedTag().create({
    "project_id": "example_project_id",  # str
    "post_api_v4_projects_id_protected_tag": {},  # dict
})
```


### ApiEntitiesPublicGroupDetail

Create an instance: `api_entities_public_group_detail = client.ApiEntitiesPublicGroupDetail()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_url` | `str` |  |
| `full_name` | `str` |  |
| `full_path` | `str` |  |
| `id` | `str` |  |
| `name` | `str` |  |
| `web_url` | `str` |  |

#### Example: List

```python
api_entities_public_group_details = client.ApiEntitiesPublicGroupDetail().list({"project_id": "example"})
```


### ApiEntitiesRelatedIssue

Create an instance: `api_entities_related_issue = client.ApiEntitiesRelatedIssue()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assignee` | `dict` | API_Entities_UserBasic model |
| `assignees` | `dict` | API_Entities_UserBasic model |
| `author` | `dict` | API_Entities_UserBasic model |
| `blocking_issues_count` | `str` |  |
| `closed_at` | `str` |  |
| `closed_by` | `dict` | API_Entities_UserBasic model |
| `confidential` | `bool` |  |
| `created_at` | `str` |  |
| `description` | `str` |  |
| `discussion_locked` | `bool` |  |
| `downvotes` | `str` |  |
| `due_date` | `str` |  |
| `epic` | `dict` |  |
| `epic_iid` | `str` |  |
| `has_tasks` | `bool` |  |
| `health_status` | `str` |  |
| `id` | `int` |  |
| `iid` | `int` |  |
| `imported` | `str` |  |
| `imported_from` | `str` |  |
| `issue_link_id` | `str` |  |
| `issue_type` | `str` |  |
| `iteration` | `dict` |  |
| `labels` | `list` |  |
| `link_created_at` | `str` |  |
| `link_type` | `str` |  |
| `link_updated_at` | `str` |  |
| `links` | `dict` |  |
| `merge_requests_count` | `str` |  |
| `milestone` | `dict` |  |
| `moved_to_id` | `str` |  |
| `project_id` | `int` |  |
| `references` | `dict` |  |
| `service_desk_reply_to` | `str` |  |
| `severity` | `str` | One of ["UNKNOWN", "LOW", "MEDIUM", "HIGH", "CRITICAL"] |
| `state` | `str` |  |
| `subscribed` | `str` |  |
| `task_completion_status` | `str` |  |
| `task_status` | `str` |  |
| `time_stats` | `dict` | API_Entities_IssuableTimeStats model |
| `title` | `str` |  |
| `type` | `str` | One of ["ISSUE", "INCIDENT", "TEST_CASE", "REQUIREMENT", "TASK", "TICKET"] |
| `updated_at` | `str` |  |
| `upvotes` | `str` |  |
| `user_notes_count` | `str` |  |
| `web_url` | `str` |  |
| `weight` | `str` |  |

#### Example: List

```python
api_entities_related_issues = client.ApiEntitiesRelatedIssue().list({"issue_id": "example", "project_id": "example"})
```


### ApiEntitiesRelationImportTracker

Create an instance: `api_entities_relation_import_tracker = client.ApiEntitiesRelationImportTracker()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```python
api_entities_relation_import_tracker = client.ApiEntitiesRelationImportTracker().create({
    "file": "example_file",  # Any
    "path": "example_path",  # str
    "relation": "example_relation",  # Any
})
```


### ApiEntitiesRelease

Create an instance: `api_entities_release = client.ApiEntitiesRelease()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assets` | `dict` |  |
| `author` | `dict` | API_Entities_UserBasic model |
| `commit` | `dict` | API_Entities_Commit model |
| `commit_path` | `str` |  |
| `created_at` | `str` |  |
| `description` | `str` |  |
| `description_html` | `str` |  |
| `evidences` | `dict` |  |
| `id` | `str` |  |
| `links` | `dict` |  |
| `milestones` | `dict` |  |
| `name` | `str` |  |
| `released_at` | `str` |  |
| `tag_name` | `str` |  |
| `tag_path` | `str` |  |
| `upcoming_release` | `bool` |  |

#### Example: Load

```python
api_entities_release = client.ApiEntitiesRelease().load({"id": "api_entities_release_id", "project_id": "project_id"})
```

#### Example: List

```python
api_entities_releases = client.ApiEntitiesRelease().list({"project_id": "example"})
```

#### Example: Create

```python
api_entities_release = client.ApiEntitiesRelease().create({
    "project_id": "example_project_id",  # str
})
```


### ApiEntitiesReleasesLink

Create an instance: `api_entities_releases_link = client.ApiEntitiesReleasesLink()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `direct_asset_url` | `str` |  |
| `id` | `int` |  |
| `link_type` | `str` |  |
| `name` | `str` |  |
| `url` | `str` |  |

#### Example: Load

```python
api_entities_releases_link = client.ApiEntitiesReleasesLink().load({"id": "api_entities_releases_link_id", "project_id": "project_id", "release_id": "release_id"})
```

#### Example: List

```python
api_entities_releases_links = client.ApiEntitiesReleasesLink().list({"project_id": "example", "release_id": "example"})
```

#### Example: Create

```python
api_entities_releases_link = client.ApiEntitiesReleasesLink().create({
    "project_id": "example_project_id",  # str
    "release_id": "example_release_id",  # str
    "post_api_v4_projects_id_releases_tag_name_assets_link": {},  # dict
})
```


### ApiEntitiesRemoteMirror

Create an instance: `api_entities_remote_mirror = client.ApiEntitiesRemoteMirror()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_method` | `str` |  |
| `enabled` | `bool` |  |
| `host_keys` | `list` |  |
| `id` | `int` |  |
| `keep_divergent_refs` | `bool` |  |
| `last_error` | `int` |  |
| `last_successful_update_at` | `str` |  |
| `last_update_at` | `str` |  |
| `last_update_started_at` | `str` |  |
| `mirror_branch_regex` | `str` |  |
| `only_protected_branches` | `bool` |  |
| `update_status` | `str` |  |
| `url` | `str` |  |

#### Example: Load

```python
api_entities_remote_mirror = client.ApiEntitiesRemoteMirror().load({"id": "api_entities_remote_mirror_id", "project_id": "project_id"})
```

#### Example: List

```python
api_entities_remote_mirrors = client.ApiEntitiesRemoteMirror().list({"project_id": "example"})
```

#### Example: Create

```python
api_entities_remote_mirror = client.ApiEntitiesRemoteMirror().create({
    "project_id": "example_project_id",  # str
    "post_api_v4_projects_id_remote_mirror": {},  # dict
})
```


### ApiEntitiesRepositoryHealth

Create an instance: `api_entities_repository_health = client.ApiEntitiesRepositoryHealth()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alternates` | `dict` |  |
| `bitmap` | `dict` |  |
| `commit_graph` | `dict` |  |
| `is_object_pool` | `bool` |  |
| `last_full_repack` | `dict` |  |
| `multi_pack_index` | `dict` |  |
| `multi_pack_index_bitmap` | `dict` |  |
| `objects` | `dict` |  |
| `references` | `dict` |  |
| `size` | `int` |  |
| `updated_at` | `str` |  |

#### Example: Load

```python
api_entities_repository_health = client.ApiEntitiesRepositoryHealth().load({"project_id": "project_id"})
```


### ApiEntitiesResourceAccessTokenWithToken

Create an instance: `api_entities_resource_access_token_with_token = client.ApiEntitiesResourceAccessTokenWithToken()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `access_level` | `int` |  |
| `active` | `bool` |  |
| `created_at` | `str` |  |
| `description` | `str` |  |
| `expires_at` | `str` |  |
| `id` | `int` |  |
| `last_used_at` | `str` |  |
| `name` | `str` |  |
| `resource_id` | `int` |  |
| `resource_type` | `str` |  |
| `revoked` | `bool` |  |
| `scopes` | `list` |  |
| `token` | `str` |  |
| `user_id` | `int` |  |

#### Example: Create

```python
api_entities_resource_access_token_with_token = client.ApiEntitiesResourceAccessTokenWithToken().create({
    "group_id": "example_group_id",  # str
    "post_api_v4_groups_id_access_tokens_self_rotate": {},  # dict
})
```


### ApiEntitiesResourceMilestoneEvent

Create an instance: `api_entities_resource_milestone_event = client.ApiEntitiesResourceMilestoneEvent()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action` | `str` |  |
| `created_at` | `str` |  |
| `id` | `int` |  |
| `milestone` | `dict` |  |
| `resource_id` | `int` |  |
| `resource_type` | `str` |  |
| `state` | `str` |  |
| `user` | `dict` | API_Entities_UserBasic model |

#### Example: Load

```python
api_entities_resource_milestone_event = client.ApiEntitiesResourceMilestoneEvent().load({"id": "api_entities_resource_milestone_event_id", "project_id": "project_id"})
```

#### Example: List

```python
api_entities_resource_milestone_events = client.ApiEntitiesResourceMilestoneEvent().list({"project_id": "example"})
```


### ApiEntitiesSnippet

Create an instance: `api_entities_snippet = client.ApiEntitiesSnippet()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author` | `dict` | API_Entities_UserBasic model |
| `created_at` | `str` |  |
| `description` | `str` |  |
| `file_name` | `str` |  |
| `files` | `list` |  |
| `http_url_to_repo` | `str` |  |
| `id` | `int` |  |
| `imported` | `bool` |  |
| `imported_from` | `str` |  |
| `project_id` | `int` |  |
| `raw_url` | `str` |  |
| `repository_storage` | `str` |  |
| `ssh_url_to_repo` | `str` |  |
| `title` | `str` |  |
| `updated_at` | `str` |  |
| `visibility` | `str` |  |
| `web_url` | `str` |  |

#### Example: List

```python
api_entities_snippets = client.ApiEntitiesSnippet().list()
```


### ApiEntitiesSshKeyWithUser

Create an instance: `api_entities_ssh_key_with_user = client.ApiEntitiesSshKeyWithUser()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_path` | `str` |  |
| `avatar_url` | `str` |  |
| `bio` | `str` |  |
| `bot` | `str` |  |
| `can_create_group` | `bool` |  |
| `can_create_project` | `bool` |  |
| `color_scheme_id` | `int` |  |
| `commit_email` | `str` |  |
| `confirmed_at` | `str` |  |
| `created_at` | `str` |  |
| `current_sign_in_at` | `str` |  |
| `custom_attributes` | `list` |  |
| `discord` | `str` |  |
| `email` | `str` |  |
| `external` | `str` |  |
| `extra_shared_runners_minutes_limit` | `str` |  |
| `followers` | `str` |  |
| `following` | `str` |  |
| `github` | `str` |  |
| `id` | `int` |  |
| `identities` | `dict` |  |
| `is_followed` | `bool` |  |
| `job_title` | `str` |  |
| `last_activity_on` | `str` |  |
| `last_sign_in_at` | `str` |  |
| `linkedin` | `str` |  |
| `local_time` | `str` |  |
| `location` | `str` |  |
| `locked` | `bool` |  |
| `name` | `str` |  |
| `organization` | `str` |  |
| `preferred_language` | `str` |  |
| `private_profile` | `bool` |  |
| `projects_limit` | `int` |  |
| `pronouns` | `str` |  |
| `public_email` | `str` |  |
| `scim_identities` | `dict` |  |
| `shared_runners_minutes_limit` | `str` |  |
| `state` | `str` |  |
| `theme_id` | `int` |  |
| `twitter` | `str` |  |
| `two_factor_enabled` | `bool` |  |
| `username` | `str` |  |
| `web_url` | `str` |  |
| `website_url` | `str` |  |
| `work_information` | `str` |  |

#### Example: Load

```python
api_entities_ssh_key_with_user = client.ApiEntitiesSshKeyWithUser().load({"id": "api_entities_ssh_key_with_user_id"})
```


### ApiEntitiesSuggestion

Create an instance: `api_entities_suggestion = client.ApiEntitiesSuggestion()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `appliable` | `str` |  |
| `applied` | `str` |  |
| `from_content` | `str` |  |
| `from_line` | `str` |  |
| `id` | `str` |  |
| `to_content` | `str` |  |
| `to_line` | `str` |  |


### ApiEntitiesSystemBroadcastMessage

Create an instance: `api_entities_system_broadcast_message = client.ApiEntitiesSystemBroadcastMessage()`

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
| `broadcast_type` | `str` |  |
| `color` | `str` |  |
| `dismissable` | `str` |  |
| `ends_at` | `str` |  |
| `font` | `str` |  |
| `id` | `str` |  |
| `message` | `str` |  |
| `starts_at` | `str` |  |
| `target_access_levels` | `str` |  |
| `target_path` | `str` |  |
| `theme` | `str` |  |

#### Example: Load

```python
api_entities_system_broadcast_message = client.ApiEntitiesSystemBroadcastMessage().load({"id": "api_entities_system_broadcast_message_id"})
```

#### Example: Create

```python
api_entities_system_broadcast_message = client.ApiEntitiesSystemBroadcastMessage().create({
    "post_api_v4_broadcast_message": {},  # dict
})
```


### ApiEntitiesTag

Create an instance: `api_entities_tag = client.ApiEntitiesTag()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `commit` | `dict` | API_Entities_Commit model |
| `created_at` | `str` |  |
| `id` | `str` |  |
| `message` | `str` |  |
| `name` | `str` |  |
| `protected` | `bool` |  |
| `release` | `dict` |  |
| `target` | `str` |  |

#### Example: Load

```python
api_entities_tag = client.ApiEntitiesTag().load({"id": "api_entities_tag_id", "project_id": "project_id"})
```

#### Example: List

```python
api_entities_tags = client.ApiEntitiesTag().list({"project_id": "example"})
```

#### Example: Create

```python
api_entities_tag = client.ApiEntitiesTag().create({
    "project_id": "example_project_id",  # str
    "post_api_v4_projects_id_repository_tag": {},  # dict
})
```


### ApiEntitiesTagSignature

Create an instance: `api_entities_tag_signature = client.ApiEntitiesTagSignature()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `signature` | `str` |  |
| `signature_type` | `str` |  |

#### Example: Load

```python
api_entities_tag_signature = client.ApiEntitiesTagSignature().load({"project_id": "project_id", "tag_name": "tag_name"})
```


### ApiEntitiesTemplatesList

Create an instance: `api_entities_templates_list = client.ApiEntitiesTemplatesList()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `key` | `str` |  |
| `name` | `str` |  |

#### Example: Load

```python
api_entities_templates_list = client.ApiEntitiesTemplatesList().load({"project_id": "project_id", "type": "type"})
```


### ApiEntitiesTerraformModuleVersion

Create an instance: `api_entities_terraform_module_version = client.ApiEntitiesTerraformModuleVersion()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |
| `modules` | `str` |  |
| `name` | `str` |  |
| `provider` | `str` |  |
| `providers` | `str` |  |
| `root` | `str` |  |
| `source` | `str` |  |
| `submodules` | `str` |  |
| `version` | `str` |  |
| `versions` | `str` |  |

#### Example: Load

```python
api_entities_terraform_module_version = client.ApiEntitiesTerraformModuleVersion().load({"module_name": "module_name", "module_system": "module_system"})
```

#### Example: List

```python
api_entities_terraform_module_versions = client.ApiEntitiesTerraformModuleVersion().list({"module_name": "example", "module_system": "example", "v1_id": "example"})
```


### ApiEntitiesTreeObject

Create an instance: `api_entities_tree_object = client.ApiEntitiesTreeObject()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |
| `mode` | `str` |  |
| `name` | `str` |  |
| `path` | `str` |  |
| `type` | `str` |  |

#### Example: Load

```python
api_entities_tree_object = client.ApiEntitiesTreeObject().load({"project_id": "project_id"})
```


### ApiEntitiesTrigger

Create an instance: `api_entities_trigger = client.ApiEntitiesTrigger()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_path` | `str` |  |
| `avatar_url` | `str` |  |
| `created_at` | `str` |  |
| `custom_attributes` | `list` |  |
| `description` | `str` |  |
| `expires_at` | `str` |  |
| `id` | `int` |  |
| `last_used` | `str` |  |
| `locked` | `bool` |  |
| `name` | `str` |  |
| `owner` | `dict` | API_Entities_UserBasic model |
| `public_email` | `str` |  |
| `state` | `str` |  |
| `token` | `str` |  |
| `updated_at` | `str` |  |
| `username` | `str` |  |
| `web_url` | `str` |  |

#### Example: Load

```python
api_entities_trigger = client.ApiEntitiesTrigger().load({"id": "api_entities_trigger_id", "project_id": "project_id"})
```

#### Example: List

```python
api_entities_triggers = client.ApiEntitiesTrigger().list({"project_id": "example"})
```

#### Example: Create

```python
api_entities_trigger = client.ApiEntitiesTrigger().create({
    "project_id": "example_project_id",  # str
    "post_api_v4_projects_id_trigger": {},  # dict
})
```


### ApiEntitiesUserAgentDetail

Create an instance: `api_entities_user_agent_detail = client.ApiEntitiesUserAgentDetail()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `akismet_submitted` | `bool` |  |
| `ip_address` | `str` |  |
| `user_agent` | `str` |  |

#### Example: Load

```python
api_entities_user_agent_detail = client.ApiEntitiesUserAgentDetail().load({"snippet_id": "snippet_id"})
```


### ApiEntitiesUserCount

Create an instance: `api_entities_user_count = client.ApiEntitiesUserCount()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assigned_issues` | `int` |  |
| `assigned_merge_requests` | `int` |  |
| `merge_requests` | `int` |  |
| `review_requested_merge_requests` | `int` |  |
| `todos` | `int` |  |

#### Example: Load

```python
api_entities_user_count = client.ApiEntitiesUserCount().load()
```


### ApiEntitiesUserPublic

Create an instance: `api_entities_user_public = client.ApiEntitiesUserPublic()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_path` | `str` |  |
| `avatar_url` | `str` |  |
| `bio` | `str` |  |
| `bot` | `str` |  |
| `can_create_group` | `bool` |  |
| `can_create_project` | `bool` |  |
| `color_scheme_id` | `int` |  |
| `commit_email` | `str` |  |
| `confirmed_at` | `str` |  |
| `created_at` | `str` |  |
| `current_sign_in_at` | `str` |  |
| `custom_attributes` | `list` |  |
| `discord` | `str` |  |
| `email` | `str` |  |
| `external` | `str` |  |
| `extra_shared_runners_minutes_limit` | `str` |  |
| `followers` | `str` |  |
| `following` | `str` |  |
| `github` | `str` |  |
| `id` | `int` |  |
| `identities` | `dict` |  |
| `is_followed` | `bool` |  |
| `job_title` | `str` |  |
| `key` | `str` |  |
| `last_activity_on` | `str` |  |
| `last_sign_in_at` | `str` |  |
| `linkedin` | `str` |  |
| `local_time` | `str` |  |
| `location` | `str` |  |
| `locked` | `bool` |  |
| `name` | `str` |  |
| `organization` | `str` |  |
| `preferred_language` | `str` |  |
| `private_profile` | `bool` |  |
| `projects_limit` | `int` |  |
| `pronouns` | `str` |  |
| `public_email` | `str` |  |
| `scim_identities` | `dict` |  |
| `shared_runners_minutes_limit` | `str` |  |
| `state` | `str` |  |
| `theme_id` | `int` |  |
| `twitter` | `str` |  |
| `two_factor_enabled` | `bool` |  |
| `username` | `str` |  |
| `value` | `str` |  |
| `web_url` | `str` |  |
| `website_url` | `str` |  |
| `work_information` | `str` |  |

#### Example: List

```python
api_entities_user_publics = client.ApiEntitiesUserPublic().list({"group_id": "example"})
```


### ApiEntitiesUserWithAdmin

Create an instance: `api_entities_user_with_admin = client.ApiEntitiesUserWithAdmin()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `key` | `str` |  |
| `value` | `str` |  |

#### Example: List

```python
api_entities_user_with_admins = client.ApiEntitiesUserWithAdmin().list({"fingerprint": "example"})
```


### ApiEntitiesWikiAttachment

Create an instance: `api_entities_wiki_attachment = client.ApiEntitiesWikiAttachment()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```python
api_entities_wiki_attachment = client.ApiEntitiesWikiAttachment().create({
    "group_id": "example_group_id",  # str
    "post_api_v4_groups_id_wikis_attachment": {},  # dict
})
```


### ApiEntitiesWikiPage

Create an instance: `api_entities_wiki_page = client.ApiEntitiesWikiPage()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Example: Load

```python
api_entities_wiki_page = client.ApiEntitiesWikiPage().load({"slug": "slug"})
```

#### Example: Create

```python
api_entities_wiki_page = client.ApiEntitiesWikiPage().create({
    "group_id": "example_group_id",  # str
    "post_api_v4_groups_id_wiki": {},  # dict
})
```


### ApiEntitiesWikiPageBasic

Create an instance: `api_entities_wiki_page_basic = client.ApiEntitiesWikiPageBasic()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `format` | `str` |  |
| `slug` | `str` |  |
| `title` | `str` |  |
| `wiki_page_meta_id` | `int` |  |

#### Example: List

```python
api_entities_wiki_page_basics = client.ApiEntitiesWikiPageBasic().list({"group_id": "example"})
```


### Application

Create an instance: `application = client.Application()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |


### AwardEmoji

Create an instance: `award_emoji = client.AwardEmoji()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |


### Badge

Create an instance: `badge = client.Badge()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |


### Branch

Create an instance: `branch = client.Branch()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |


### CargoPackage

Create an instance: `cargo_package = client.CargoPackage()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```python
cargo_package = client.CargoPackage().load({"project_id": "project_id"})
```


### CiVariable

Create an instance: `ci_variable = client.CiVariable()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |


### Cluster

Create an instance: `cluster = client.Cluster()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |


### ClusterAgent

Create an instance: `cluster_agent = client.ClusterAgent()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |


### Composer

Create an instance: `composer = client.Composer()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```python
composer = client.Composer().create({
    "project_id": "example_project_id",  # str
    "post_api_v4_projects_id_packages_composer": {},  # dict
})
```


### ComposerPackage

Create an instance: `composer_package = client.ComposerPackage()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```python
composer_package = client.ComposerPackage().load({"group_id": "group_id", "sha": "sha"})
```


### Conan

Create an instance: `conan = client.Conan()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |


### ConanPackage

Create an instance: `conan_package = client.ConanPackage()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |

#### Example: Load

```python
conan_package = client.ConanPackage().load({"file_id": "file_id", "file_name": "file_name", "package_channel": "package_channel", "package_username": "package_username", "package_version": "package_version", "recipe_revision": "recipe_revision"})
```


### ContainerRegistry

Create an instance: `container_registry = client.ContainerRegistry()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### ContainerRegistryEvent

Create an instance: `container_registry_event = client.ContainerRegistryEvent()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```python
container_registry_event = client.ContainerRegistryEvent().create({
})
```


### CustomAttribute

Create an instance: `custom_attribute = client.CustomAttribute()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |
| `key` | `str` |  |
| `value` | `str` |  |

#### Example: Load

```python
custom_attribute = client.CustomAttribute().load({"id": "custom_attribute_id", "group_id": "group_id"})
```


### Debian

Create an instance: `debian = client.Debian()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |


### DebianDistribution

Create an instance: `debian_distribution = client.DebianDistribution()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |


### DebianPackage

Create an instance: `debian_package = client.DebianPackage()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |

#### Example: Load

```python
debian_package = client.DebianPackage().load({"id": "debian_package_id", "distribution": "distribution"})
```


### DependencyProxy

Create an instance: `dependency_proxy = client.DependencyProxy()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### DeployKey

Create an instance: `deploy_key = client.DeployKey()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |


### DeployToken

Create an instance: `deploy_token = client.DeployToken()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |


### Deployment

Create an instance: `deployment = client.Deployment()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |


### EeApiEntitiesApprovalState

Create an instance: `ee_api_entities_approval_state = client.EeApiEntitiesApprovalState()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```python
ee_api_entities_approval_state = client.EeApiEntitiesApprovalState().create({
    "merge_request_id": "example_merge_request_id",  # str
    "project_id": "example_project_id",  # str
    "post_api_v4_projects_id_merge_requests_merge_request_iid_approval": {},  # dict
})
```


### EeApiEntitiesAuditEvent

Create an instance: `ee_api_entities_audit_event = client.EeApiEntitiesAuditEvent()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author_id` | `str` |  |
| `created_at` | `str` |  |
| `details` | `str` |  |
| `entity_id` | `str` |  |
| `entity_type` | `str` |  |
| `event_name` | `str` |  |
| `id` | `str` |  |

#### Example: Load

```python
ee_api_entities_audit_event = client.EeApiEntitiesAuditEvent().load({"id": "ee_api_entities_audit_event_id"})
```

#### Example: List

```python
ee_api_entities_audit_events = client.EeApiEntitiesAuditEvent().list({"group_id": "example"})
```


### EeApiEntitiesBillableMembership

Create an instance: `ee_api_entities_billable_membership = client.EeApiEntitiesBillableMembership()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `custom_role` | `str` |  |
| `integer_value` | `str` |  |
| `string_value` | `str` |  |

#### Example: Load

```python
ee_api_entities_billable_membership = client.EeApiEntitiesBillableMembership().load({"billable_member_id": "billable_member_id", "group_id": "group_id"})
```


### EeApiEntitiesGeoNodeStatus

Create an instance: `ee_api_entities_geo_node_status = client.EeApiEntitiesGeoNodeStatus()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ci_secure_files_checksum_failed_count` | `str` |  |
| `ci_secure_files_checksum_total_count` | `str` |  |
| `ci_secure_files_checksummed_count` | `str` |  |
| `ci_secure_files_count` | `str` |  |
| `ci_secure_files_failed_count` | `str` |  |
| `ci_secure_files_registry_count` | `str` |  |
| `ci_secure_files_synced_count` | `str` |  |
| `ci_secure_files_synced_in_percentage` | `str` |  |
| `ci_secure_files_verification_failed_count` | `str` |  |
| `ci_secure_files_verification_total_count` | `str` |  |
| `ci_secure_files_verified_count` | `str` |  |
| `ci_secure_files_verified_in_percentage` | `str` |  |
| `container_repositories_checksum_failed_count` | `str` |  |
| `container_repositories_checksum_total_count` | `str` |  |
| `container_repositories_checksummed_count` | `str` |  |
| `container_repositories_count` | `str` |  |
| `container_repositories_failed_count` | `str` |  |
| `container_repositories_registry_count` | `str` |  |
| `container_repositories_replication_enabled` | `str` |  |
| `container_repositories_synced_count` | `str` |  |
| `container_repositories_synced_in_percentage` | `str` |  |
| `container_repositories_verification_failed_count` | `str` |  |
| `container_repositories_verification_total_count` | `str` |  |
| `container_repositories_verified_count` | `str` |  |
| `container_repositories_verified_in_percentage` | `str` |  |
| `cursor_last_event_id` | `str` |  |
| `cursor_last_event_timestamp` | `str` |  |
| `db_replication_lag_seconds` | `str` |  |
| `dependency_proxy_blobs_checksum_failed_count` | `str` |  |
| `dependency_proxy_blobs_checksum_total_count` | `str` |  |
| `dependency_proxy_blobs_checksummed_count` | `str` |  |
| `dependency_proxy_blobs_count` | `str` |  |
| `dependency_proxy_blobs_failed_count` | `str` |  |
| `dependency_proxy_blobs_registry_count` | `str` |  |
| `dependency_proxy_blobs_synced_count` | `str` |  |
| `dependency_proxy_blobs_synced_in_percentage` | `str` |  |
| `dependency_proxy_blobs_verification_failed_count` | `str` |  |
| `dependency_proxy_blobs_verification_total_count` | `str` |  |
| `dependency_proxy_blobs_verified_count` | `str` |  |
| `dependency_proxy_blobs_verified_in_percentage` | `str` |  |
| `dependency_proxy_manifests_checksum_failed_count` | `str` |  |
| `dependency_proxy_manifests_checksum_total_count` | `str` |  |
| `dependency_proxy_manifests_checksummed_count` | `str` |  |
| `dependency_proxy_manifests_count` | `str` |  |
| `dependency_proxy_manifests_failed_count` | `str` |  |
| `dependency_proxy_manifests_registry_count` | `str` |  |
| `dependency_proxy_manifests_synced_count` | `str` |  |
| `dependency_proxy_manifests_synced_in_percentage` | `str` |  |
| `dependency_proxy_manifests_verification_failed_count` | `str` |  |
| `dependency_proxy_manifests_verification_total_count` | `str` |  |
| `dependency_proxy_manifests_verified_count` | `str` |  |
| `dependency_proxy_manifests_verified_in_percentage` | `str` |  |
| `design_management_repositories_checksum_failed_count` | `str` |  |
| `design_management_repositories_checksum_total_count` | `str` |  |
| `design_management_repositories_checksummed_count` | `str` |  |
| `design_management_repositories_count` | `str` |  |
| `design_management_repositories_failed_count` | `str` |  |
| `design_management_repositories_registry_count` | `str` |  |
| `design_management_repositories_synced_count` | `str` |  |
| `design_management_repositories_synced_in_percentage` | `str` |  |
| `design_management_repositories_verification_failed_count` | `str` |  |
| `design_management_repositories_verification_total_count` | `str` |  |
| `design_management_repositories_verified_count` | `str` |  |
| `design_management_repositories_verified_in_percentage` | `str` |  |
| `geo_node_id` | `str` |  |
| `git_fetch_event_count_weekly` | `str` |  |
| `git_push_event_count_weekly` | `str` |  |
| `group_wiki_repositories_checksum_failed_count` | `str` |  |
| `group_wiki_repositories_checksum_total_count` | `str` |  |
| `group_wiki_repositories_checksummed_count` | `str` |  |
| `group_wiki_repositories_count` | `str` |  |
| `group_wiki_repositories_failed_count` | `str` |  |
| `group_wiki_repositories_registry_count` | `str` |  |
| `group_wiki_repositories_synced_count` | `str` |  |
| `group_wiki_repositories_synced_in_percentage` | `str` |  |
| `group_wiki_repositories_verification_failed_count` | `str` |  |
| `group_wiki_repositories_verification_total_count` | `str` |  |
| `group_wiki_repositories_verified_count` | `str` |  |
| `group_wiki_repositories_verified_in_percentage` | `str` |  |
| `health` | `str` |  |
| `health_status` | `str` |  |
| `healthy` | `str` |  |
| `job_artifacts_checksum_failed_count` | `str` |  |
| `job_artifacts_checksum_total_count` | `str` |  |
| `job_artifacts_checksummed_count` | `str` |  |
| `job_artifacts_count` | `str` |  |
| `job_artifacts_failed_count` | `str` |  |
| `job_artifacts_registry_count` | `str` |  |
| `job_artifacts_synced_count` | `str` |  |
| `job_artifacts_synced_in_percentage` | `str` |  |
| `job_artifacts_verification_failed_count` | `str` |  |
| `job_artifacts_verification_total_count` | `str` |  |
| `job_artifacts_verified_count` | `str` |  |
| `job_artifacts_verified_in_percentage` | `str` |  |
| `last_event_id` | `str` |  |
| `last_event_timestamp` | `str` |  |
| `last_successful_status_check_timestamp` | `str` |  |
| `lfs_objects_checksum_failed_count` | `str` |  |
| `lfs_objects_checksum_total_count` | `str` |  |
| `lfs_objects_checksummed_count` | `str` |  |
| `lfs_objects_count` | `str` |  |
| `lfs_objects_failed_count` | `str` |  |
| `lfs_objects_registry_count` | `str` |  |
| `lfs_objects_synced_count` | `str` |  |
| `lfs_objects_synced_in_percentage` | `str` |  |
| `lfs_objects_verification_failed_count` | `str` |  |
| `lfs_objects_verification_total_count` | `str` |  |
| `lfs_objects_verified_count` | `str` |  |
| `lfs_objects_verified_in_percentage` | `str` |  |
| `links` | `dict` |  |
| `merge_request_diffs_checksum_failed_count` | `str` |  |
| `merge_request_diffs_checksum_total_count` | `str` |  |
| `merge_request_diffs_checksummed_count` | `str` |  |
| `merge_request_diffs_count` | `str` |  |
| `merge_request_diffs_failed_count` | `str` |  |
| `merge_request_diffs_registry_count` | `str` |  |
| `merge_request_diffs_synced_count` | `str` |  |
| `merge_request_diffs_synced_in_percentage` | `str` |  |
| `merge_request_diffs_verification_failed_count` | `str` |  |
| `merge_request_diffs_verification_total_count` | `str` |  |
| `merge_request_diffs_verified_count` | `str` |  |
| `merge_request_diffs_verified_in_percentage` | `str` |  |
| `missing_oauth_application` | `str` |  |
| `namespaces` | `dict` |  |
| `package_files_checksum_failed_count` | `str` |  |
| `package_files_checksum_total_count` | `str` |  |
| `package_files_checksummed_count` | `str` |  |
| `package_files_count` | `str` |  |
| `package_files_failed_count` | `str` |  |
| `package_files_registry_count` | `str` |  |
| `package_files_synced_count` | `str` |  |
| `package_files_synced_in_percentage` | `str` |  |
| `package_files_verification_failed_count` | `str` |  |
| `package_files_verification_total_count` | `str` |  |
| `package_files_verified_count` | `str` |  |
| `package_files_verified_in_percentage` | `str` |  |
| `pages_deployments_checksum_failed_count` | `str` |  |
| `pages_deployments_checksum_total_count` | `str` |  |
| `pages_deployments_checksummed_count` | `str` |  |
| `pages_deployments_count` | `str` |  |
| `pages_deployments_failed_count` | `str` |  |
| `pages_deployments_registry_count` | `str` |  |
| `pages_deployments_synced_count` | `str` |  |
| `pages_deployments_synced_in_percentage` | `str` |  |
| `pages_deployments_verification_failed_count` | `str` |  |
| `pages_deployments_verification_total_count` | `str` |  |
| `pages_deployments_verified_count` | `str` |  |
| `pages_deployments_verified_in_percentage` | `str` |  |
| `pipeline_artifacts_checksum_failed_count` | `str` |  |
| `pipeline_artifacts_checksum_total_count` | `str` |  |
| `pipeline_artifacts_checksummed_count` | `str` |  |
| `pipeline_artifacts_count` | `str` |  |
| `pipeline_artifacts_failed_count` | `str` |  |
| `pipeline_artifacts_registry_count` | `str` |  |
| `pipeline_artifacts_synced_count` | `str` |  |
| `pipeline_artifacts_synced_in_percentage` | `str` |  |
| `pipeline_artifacts_verification_failed_count` | `str` |  |
| `pipeline_artifacts_verification_total_count` | `str` |  |
| `pipeline_artifacts_verified_count` | `str` |  |
| `pipeline_artifacts_verified_in_percentage` | `str` |  |
| `project_repositories_checksum_failed_count` | `str` |  |
| `project_repositories_checksum_total_count` | `str` |  |
| `project_repositories_checksummed_count` | `str` |  |
| `project_repositories_count` | `str` |  |
| `project_repositories_failed_count` | `str` |  |
| `project_repositories_registry_count` | `str` |  |
| `project_repositories_synced_count` | `str` |  |
| `project_repositories_synced_in_percentage` | `str` |  |
| `project_repositories_verification_failed_count` | `str` |  |
| `project_repositories_verification_total_count` | `str` |  |
| `project_repositories_verified_count` | `str` |  |
| `project_repositories_verified_in_percentage` | `str` |  |
| `project_wiki_repositories_checksum_failed_count` | `str` |  |
| `project_wiki_repositories_checksum_total_count` | `str` |  |
| `project_wiki_repositories_checksummed_count` | `str` |  |
| `project_wiki_repositories_count` | `str` |  |
| `project_wiki_repositories_failed_count` | `str` |  |
| `project_wiki_repositories_registry_count` | `str` |  |
| `project_wiki_repositories_synced_count` | `str` |  |
| `project_wiki_repositories_synced_in_percentage` | `str` |  |
| `project_wiki_repositories_verification_failed_count` | `str` |  |
| `project_wiki_repositories_verification_total_count` | `str` |  |
| `project_wiki_repositories_verified_count` | `str` |  |
| `project_wiki_repositories_verified_in_percentage` | `str` |  |
| `projects_count` | `str` |  |
| `proxy_local_requests_event_count_weekly` | `str` |  |
| `proxy_remote_requests_event_count_weekly` | `str` |  |
| `replication_slots_count` | `str` |  |
| `replication_slots_max_retained_wal_bytes` | `str` |  |
| `replication_slots_used_count` | `str` |  |
| `replication_slots_used_in_percentage` | `str` |  |
| `repositories_checked_count` | `str` |  |
| `repositories_checked_failed_count` | `str` |  |
| `repositories_checked_in_percentage` | `str` |  |
| `repositories_count` | `str` |  |
| `revision` | `str` |  |
| `selective_sync_type` | `str` |  |
| `snippet_repositories_checksum_failed_count` | `str` |  |
| `snippet_repositories_checksum_total_count` | `str` |  |
| `snippet_repositories_checksummed_count` | `str` |  |
| `snippet_repositories_count` | `str` |  |
| `snippet_repositories_failed_count` | `str` |  |
| `snippet_repositories_registry_count` | `str` |  |
| `snippet_repositories_synced_count` | `str` |  |
| `snippet_repositories_synced_in_percentage` | `str` |  |
| `snippet_repositories_verification_failed_count` | `str` |  |
| `snippet_repositories_verification_total_count` | `str` |  |
| `snippet_repositories_verified_count` | `str` |  |
| `snippet_repositories_verified_in_percentage` | `str` |  |
| `storage_shards` | `dict` |  |
| `storage_shards_match` | `str` |  |
| `terraform_state_versions_checksum_failed_count` | `str` |  |
| `terraform_state_versions_checksum_total_count` | `str` |  |
| `terraform_state_versions_checksummed_count` | `str` |  |
| `terraform_state_versions_count` | `str` |  |
| `terraform_state_versions_failed_count` | `str` |  |
| `terraform_state_versions_registry_count` | `str` |  |
| `terraform_state_versions_synced_count` | `str` |  |
| `terraform_state_versions_synced_in_percentage` | `str` |  |
| `terraform_state_versions_verification_failed_count` | `str` |  |
| `terraform_state_versions_verification_total_count` | `str` |  |
| `terraform_state_versions_verified_count` | `str` |  |
| `terraform_state_versions_verified_in_percentage` | `str` |  |
| `updated_at` | `str` |  |
| `uploads_checksum_failed_count` | `str` |  |
| `uploads_checksum_total_count` | `str` |  |
| `uploads_checksummed_count` | `str` |  |
| `uploads_count` | `str` |  |
| `uploads_failed_count` | `str` |  |
| `uploads_registry_count` | `str` |  |
| `uploads_synced_count` | `str` |  |
| `uploads_synced_in_percentage` | `str` |  |
| `uploads_verification_failed_count` | `str` |  |
| `uploads_verification_total_count` | `str` |  |
| `uploads_verified_count` | `str` |  |
| `uploads_verified_in_percentage` | `str` |  |
| `version` | `str` |  |

#### Example: Create

```python
ee_api_entities_geo_node_status = client.EeApiEntitiesGeoNodeStatus().create({
    "post_api_v4_geo_status": {},  # dict
})
```


### EeApiEntitiesGeoPipelineRef

Create an instance: `ee_api_entities_geo_pipeline_ref = client.EeApiEntitiesGeoPipelineRef()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `pipeline_refs` | `list` |  |

#### Example: List

```python
ee_api_entities_geo_pipeline_refs = client.EeApiEntitiesGeoPipelineRef().list({"gl_repository": "example"})
```


### EeApiEntitiesIssuableMetricImage

Create an instance: `ee_api_entities_issuable_metric_image = client.EeApiEntitiesIssuableMetricImage()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` |  |
| `file_path` | `str` |  |
| `filename` | `str` |  |
| `id` | `str` |  |
| `url` | `str` |  |
| `url_text` | `str` |  |

#### Example: Create

```python
ee_api_entities_issuable_metric_image = client.EeApiEntitiesIssuableMetricImage().create({
    "issue_id": "example_issue_id",  # str
    "project_id": "example_project_id",  # str
    "post_api_v4_projects_id_issues_issue_iid_metric_image": {},  # dict
})
```


### EeApiEntitiesMergeRequestApprovalState

Create an instance: `ee_api_entities_merge_request_approval_state = client.EeApiEntitiesMergeRequestApprovalState()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `approvals_required` | `int` |  |
| `approved` | `bool` |  |
| `approved_by` | `list` |  |
| `code_owner` | `bool` |  |
| `contains_hidden_groups` | `bool` |  |
| `eligible_approvers` | `list` |  |
| `groups` | `list` |  |
| `id` | `int` |  |
| `name` | `str` |  |
| `overridden` | `bool` |  |
| `report_type` | `str` |  |
| `rule_type` | `str` |  |
| `section` | `str` |  |
| `source_rule` | `dict` |  |
| `users` | `list` |  |

#### Example: List

```python
ee_api_entities_merge_request_approval_states = client.EeApiEntitiesMergeRequestApprovalState().list({"merge_request_id": "example", "project_id": "example"})
```


### EeApiEntitiesSshCertificate

Create an instance: `ee_api_entities_ssh_certificate = client.EeApiEntitiesSshCertificate()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` |  |
| `id` | `int` |  |
| `key` | `str` |  |
| `title` | `str` |  |

#### Example: List

```python
ee_api_entities_ssh_certificates = client.EeApiEntitiesSshCertificate().list({"group_id": "example"})
```

#### Example: Create

```python
ee_api_entities_ssh_certificate = client.EeApiEntitiesSshCertificate().create({
    "group_id": "example_group_id",  # str
    "post_api_v4_groups_id_ssh_certificate": {},  # dict
})
```


### Environment

Create an instance: `environment = client.Environment()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |

#### Example: Create

```python
environment = client.Environment().create({
    "project_id": "example_project_id",  # str
    "post_api_v4_projects_id_environments_stop_stale": {},  # dict
})
```


### ErrorTrackingClientKey

Create an instance: `error_tracking_client_key = client.ErrorTrackingClientKey()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |


### Feature

Create an instance: `feature = client.Feature()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |


### FeatureFlag

Create an instance: `feature_flag = client.FeatureFlag()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |

#### Example: Load

```python
feature_flag = client.FeatureFlag().load({"project_id": "project_id"})
```

#### Example: Create

```python
feature_flag = client.FeatureFlag().create({
    "unleash_id": "example_unleash_id",  # str
})
```


### FeatureFlagsUserList

Create an instance: `feature_flags_user_list = client.FeatureFlagsUserList()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |


### FreezePeriod

Create an instance: `freeze_period = client.FreezePeriod()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |


### GenericPackage

Create an instance: `generic_package = client.GenericPackage()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Example: Load

```python
generic_package = client.GenericPackage().load({"file_name": "file_name", "generic_id": "generic_id", "project_id": "project_id", "package_version": "package_version"})
```


### Geo

Create an instance: `geo = client.Geo()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |

#### Example: Load

```python
geo = client.Geo().load({"replicable_id": "replicable_id", "replicable_name": "replicable_name"})
```

#### Example: Create

```python
geo = client.Geo().create({
    "post_api_v4_geo_proxy_git_ssh_info_refs_receive_pack": {},  # dict
})
```


### GoProxy

Create an instance: `go_proxy = client.GoProxy()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```python
go_proxy = client.GoProxy().load({"project_id": "project_id", "module_name": "module_name"})
```


### Group

Create an instance: `group = client.Group()`

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
| `id` | `str` |  |

#### Example: Load

```python
group = client.Group().load({"id": "group_id"})
```

#### Example: Create

```python
group = client.Group().create({
    "id": "example_id",  # str
})
```


### GroupAvatar

Create an instance: `group_avatar = client.GroupAvatar()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |

#### Example: Load

```python
group_avatar = client.GroupAvatar().load({"id": "group_avatar_id"})
```


### GroupExport

Create an instance: `group_export = client.GroupExport()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |

#### Example: Load

```python
group_export = client.GroupExport().load({"group_id": "group_id"})
```

#### Example: Create

```python
group_export = client.GroupExport().create({
    "id": "example_id",  # str
})
```


### GroupImport

Create an instance: `group_import = client.GroupImport()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```python
group_import = client.GroupImport().create({
    "file": "example_file",  # Any
    "name": "example_name",  # str
    "path": "example_path",  # str
})
```


### HelmPackage

Create an instance: `helm_package = client.HelmPackage()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```python
helm_package = client.HelmPackage().load({"project_id": "project_id"})
```

#### Example: Create

```python
helm_package = client.HelmPackage().create({
    "project_id": "example_project_id",  # str
})
```


### Hook

Create an instance: `hook = client.Hook()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |

#### Example: Create

```python
hook = client.Hook().create({
    "id": "example_id",  # str
})
```


### Import

Create an instance: `import_ = client.Import()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```python
import_ = client.Import().create({
    "post_api_v4_import_github_gist": {},  # dict
})
```


### Integration

Create an instance: `integration = client.Integration()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |

#### Example: Create

```python
integration = client.Integration().create({
    "post_api_v4_integrations_slack_event": {},  # dict
})
```


### Invitation

Create an instance: `invitation = client.Invitation()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |


### IssueLink

Create an instance: `issue_link = client.IssueLink()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |


### IssuesStatistic

Create an instance: `issues_statistic = client.IssuesStatistic()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```python
issues_statistic = client.IssuesStatistic().load()
```


### Job

Create an instance: `job = client.Job()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |

#### Example: Load

```python
job = client.Job().load({"id": "job_id"})
```

#### Example: Create

```python
job = client.Job().create({
    "post_api_v4_jobs_request": {},  # dict
})
```


### MavenPackage

Create an instance: `maven_package = client.MavenPackage()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Example: Load

```python
maven_package = client.MavenPackage().load({"file_name": "file_name", "path": "path"})
```


### Member

Create an instance: `member = client.Member()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |


### MergeRequest

Create an instance: `merge_request = client.MergeRequest()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |

#### Example: Load

```python
merge_request = client.MergeRequest().load({"id": "merge_request_id", "project_id": "project_id"})
```


### Metadata

Create an instance: `metadata = client.Metadata()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `enabled` | `bool` |  |
| `externalK8sProxyUrl` | `str` |  |
| `externalUrl` | `str` |  |
| `version` | `str` |  |

#### Example: Load

```python
metadata = client.Metadata().load()
```


### Migration

Create an instance: `migration = client.Migration()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```python
migration = client.Migration().create({
    "timestamp": "example_timestamp",  # Any
    "post_api_v4_admin_migrations_timestamp_mark": {},  # dict
})
```


### MlModelRegistry

Create an instance: `ml_model_registry = client.MlModelRegistry()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Example: Load

```python
ml_model_registry = client.MlModelRegistry().load({"file_name": "file_name", "ml_model_id": "ml_model_id", "project_id": "project_id"})
```


### Namespace

Create an instance: `namespace = client.Namespace()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |


### Npm

Create an instance: `npm = client.Npm()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |


### NpmPackage

Create an instance: `npm_package = client.NpmPackage()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Example: Load

```python
npm_package = client.NpmPackage().load({"project_id": "project_id", "file_name": "file_name", "package_name": "package_name"})
```

#### Example: Create

```python
npm_package = client.NpmPackage().create({
})
```


### Nuget

Create an instance: `nuget = client.Nuget()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |


### NugetPackage

Create an instance: `nuget_package = client.NugetPackage()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `authors` | `str` |  |
| `count` | `int` |  |
| `dependencyGroups` | `list` |  |
| `description` | `str` |  |
| `iconUrl` | `str` |  |
| `id` | `str` |  |
| `items` | `list` |  |
| `licenseUrl` | `str` |  |
| `lower` | `str` |  |
| `packageContent` | `str` |  |
| `projectUrl` | `str` |  |
| `published` | `str` |  |
| `summary` | `str` |  |
| `tags` | `str` |  |
| `upper` | `str` |  |
| `version` | `str` |  |

#### Example: Load

```python
nuget_package = client.NugetPackage().load({"project_id": "project_id"})
```

#### Example: List

```python
nuget_packages = client.NugetPackage().list({"package_name": "example"})
```


### PackageFile

Create an instance: `package_file = client.PackageFile()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |

#### Example: Load

```python
package_file = client.PackageFile().load({"id": "package_file_id", "package_id": "package_id", "project_id": "project_id"})
```


### Page

Create an instance: `page = client.Page()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Example: Load

```python
page = client.Page().load({"project_id": "project_id"})
```


### Participant

Create an instance: `participant = client.Participant()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `key` | `str` |  |
| `value` | `str` |  |

#### Example: List

```python
participants = client.Participant().list({"project_id": "example"})
```


### PersonalAccessToken

Create an instance: `personal_access_token = client.PersonalAccessToken()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |


### Project

Create an instance: `project = client.Project()`

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
| `before_sha` | `str` |  |
| `committed_at` | `str` |  |
| `coverage` | `float` |  |
| `created_at` | `str` |  |
| `detailed_status` | `dict` |  |
| `duration` | `int` | Time spent running in seconds |
| `finished_at` | `str` |  |
| `id` | `int` |  |
| `iid` | `int` |  |
| `name` | `str` |  |
| `project_id` | `int` |  |
| `queued_duration` | `int` | Time spent enqueued in seconds |
| `ref` | `str` |  |
| `sha` | `str` |  |
| `source` | `str` |  |
| `started_at` | `str` |  |
| `status` | `str` |  |
| `tag` | `bool` |  |
| `updated_at` | `str` |  |
| `user` | `dict` | API_Entities_UserBasic model |
| `web_url` | `str` |  |
| `yaml_errors` | `str` |  |

#### Example: Load

```python
project = client.Project().load({"id": "project_id"})
```

#### Example: Create

```python
project = client.Project().create({
    "id": "example_id",  # str
})
```


### ProjectAvatar

Create an instance: `project_avatar = client.ProjectAvatar()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |

#### Example: Load

```python
project_avatar = client.ProjectAvatar().load({"id": "project_avatar_id"})
```


### ProjectEntity

Create an instance: `project_entity = client.ProjectEntity()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```python
project_entity = client.ProjectEntity().create({
    "post_api_v4_import_bitbucket_server": {},  # dict
})
```


### ProjectExport

Create an instance: `project_export = client.ProjectExport()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |

#### Example: Load

```python
project_export = client.ProjectExport().load({"project_id": "project_id"})
```

#### Example: Create

```python
project_export = client.ProjectExport().create({
    "id": "example_id",  # str
    "post_api_v4_projects_id_export": {},  # dict
})
```


### ProjectHook

Create an instance: `project_hook = client.ProjectHook()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |


### ProjectImport

Create an instance: `project_import = client.ProjectImport()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```python
project_import = client.ProjectImport().create({
})
```


### ProjectImportEntity

Create an instance: `project_import_entity = client.ProjectImportEntity()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `forked` | `bool` |  |
| `full_name` | `str` |  |
| `full_path` | `str` |  |
| `human_import_status_name` | `str` |  |
| `id` | `int` |  |
| `import_error` | `str` |  |
| `import_source` | `str` |  |
| `import_status` | `str` |  |
| `import_warning` | `str` |  |
| `name` | `str` |  |
| `provider_link` | `str` |  |
| `refs_url` | `str` |  |
| `relation_type` | `str` |  |

#### Example: Create

```python
project_import_entity = client.ProjectImportEntity().create({
    "post_api_v4_import_bitbucket": {},  # dict
})
```


### ProjectPackage

Create an instance: `project_package = client.ProjectPackage()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |


### ProjectSnippet

Create an instance: `project_snippet = client.ProjectSnippet()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |


### ProjectsJobTokenScope

Create an instance: `projects_job_token_scope = client.ProjectsJobTokenScope()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |


### ProtectedTag

Create an instance: `protected_tag = client.ProtectedTag()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |


### Pypi

Create an instance: `pypi = client.Pypi()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```python
pypi = client.Pypi().create({
    "project_id": "example_project_id",  # str
    "post_api_v4_projects_id_packages_pypi": {},  # dict
})
```


### PypiPackage

Create an instance: `pypi_package = client.PypiPackage()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```python
pypi_package = client.PypiPackage().load({"project_id": "project_id"})
```

#### Example: Create

```python
pypi_package = client.PypiPackage().create({
    "project_id": "example_project_id",  # str
})
```


### Release

Create an instance: `release = client.Release()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |

#### Example: Load

```python
release = client.Release().load({"project_id": "project_id", "suffix_path": "suffix_path"})
```


### ReleaseLink

Create an instance: `release_link = client.ReleaseLink()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |


### RemoteMirror

Create an instance: `remote_mirror = client.RemoteMirror()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |

#### Example: Load

```python
remote_mirror = client.RemoteMirror().load({"id": "remote_mirror_id", "project_id": "project_id"})
```


### Rpm

Create an instance: `rpm = client.Rpm()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```python
rpm = client.Rpm().create({
    "project_id": "example_project_id",  # str
})
```


### RpmPackage

Create an instance: `rpm_package = client.RpmPackage()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```python
rpm_package = client.RpmPackage().load({"project_id": "project_id", "file_name": "file_name"})
```

#### Example: Create

```python
rpm_package = client.RpmPackage().create({
    "project_id": "example_project_id",  # str
})
```


### Rubygem

Create an instance: `rubygem = client.Rubygem()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |

#### Example: Load

```python
rubygem = client.Rubygem().load({"id": "rubygem_id", "project_id": "project_id"})
```


### RubygemPackage

Create an instance: `rubygem_package = client.RubygemPackage()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```python
rubygem_package = client.RubygemPackage().load({"project_id": "project_id"})
```

#### Example: Create

```python
rubygem_package = client.RubygemPackage().create({
    "project_id": "example_project_id",  # str
})
```


### Runner

Create an instance: `runner = client.Runner()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |

#### Example: Create

```python
runner = client.Runner().create({
    "post_api_v4_runners_verify": {},  # dict
})
```


### Search

Create an instance: `search = client.Search()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```python
search = client.Search().load({"scope": "scope", "search": "search"})
```


### SecureFile

Create an instance: `secure_file = client.SecureFile()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |

#### Example: Load

```python
secure_file = client.SecureFile().load({"id": "secure_file_id", "project_id": "project_id"})
```


### Slack

Create an instance: `slack = client.Slack()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```python
slack = client.Slack().create({
    "post_api_v4_slack_trigger": {},  # dict
})
```


### Snippet

Create an instance: `snippet = client.Snippet()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |

#### Example: Load

```python
snippet = client.Snippet().load({"id": "snippet_id", "file_id": "file_id", "file_path": "file_path"})
```


### Starrer

Create an instance: `starrer = client.Starrer()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_path` | `str` |  |
| `avatar_url` | `str` |  |
| `custom_attributes` | `list` |  |
| `id` | `int` |  |
| `locked` | `bool` |  |
| `name` | `str` |  |
| `public_email` | `str` |  |
| `state` | `str` |  |
| `username` | `str` |  |
| `web_url` | `str` |  |

#### Example: List

```python
starrers = client.Starrer().list({"project_id": "example"})
```


### SystemHook

Create an instance: `system_hook = client.SystemHook()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |


### Tag

Create an instance: `tag = client.Tag()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |


### TerraformRegistry

Create an instance: `terraform_registry = client.TerraformRegistry()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |

#### Example: Load

```python
terraform_registry = client.TerraformRegistry().load({"id": "terraform_registry_id", "module_system": "module_system"})
```


### TerraformState

Create an instance: `terraform_state = client.TerraformState()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |

#### Example: Load

```python
terraform_state = client.TerraformState().load({"id": "terraform_state_id", "project_id": "project_id"})
```

#### Example: Create

```python
terraform_state = client.TerraformState().create({
    "id": "example_id",  # str
    "project_id": "example_project_id",  # str
})
```


### TestReport

Create an instance: `test_report = client.TestReport()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `error_count` | `int` |  |
| `failed_count` | `int` |  |
| `name` | `str` |  |
| `skipped_count` | `int` |  |
| `success_count` | `int` |  |
| `suite_error` | `str` |  |
| `test_cases` | `list` |  |
| `total_count` | `int` |  |
| `total_time` | `int` |  |

#### Example: List

```python
test_reports = client.TestReport().list({"pipeline_id": "example", "project_id": "example"})
```


### TestReportSummary

Create an instance: `test_report_summary = client.TestReportSummary()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `test_suites` | `dict` |  |
| `total` | `dict` |  |

#### Example: Load

```python
test_report_summary = client.TestReportSummary().load({"pipeline_id": "pipeline_id", "project_id": "project_id"})
```


### Topic

Create an instance: `topic = client.Topic()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |


### UnleashApi

Create an instance: `unleash_api = client.UnleashApi()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |

#### Example: Load

```python
unleash_api = client.UnleashApi().load({"unleash_id": "unleash_id"})
```


### UsageData

Create an instance: `usage_data = client.UsageData()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```python
usage_data = client.UsageData().load()
```

#### Example: Create

```python
usage_data = client.UsageData().create({
    "post_api_v4_usage_data_increment_counter": {},  # dict
})
```


### User

Create an instance: `user = client.User()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_path` | `str` |  |
| `avatar_url` | `str` |  |
| `custom_attributes` | `list` |  |
| `id` | `int` |  |
| `locked` | `bool` |  |
| `name` | `str` |  |
| `public_email` | `str` |  |
| `state` | `str` |  |
| `username` | `str` |  |
| `web_url` | `str` |  |

#### Example: List

```python
users = client.User().list({"project_id": "example"})
```


### WebCommit

Create an instance: `web_commit = client.WebCommit()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```python
web_commit = client.WebCommit().load()
```


### Wiki

Create an instance: `wiki = client.Wiki()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |

## Features

This SDK ships 1 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`test`](#test) | In-memory mock transport for testing without a live server |

### test

In-memory mock transport for testing without a live server.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.


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

Features are the extension mechanism. A feature is a Python class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as dicts

The Python SDK uses plain dicts throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a dict.

### Module structure

```
py/
├── gitlab_sdk.py         -- Main SDK module
├── config.py                    -- Configuration
├── features.py                  -- Feature factory
├── core/                        -- Core types and context
├── entity/                      -- Entity implementations
├── feature/                     -- Built-in features (Base, Test, Log)
├── utility/                     -- Utility functions and struct library
└── test/                        -- Test suites
```

The main module (`gitlab_sdk`) exports the SDK class.
Import entity or utility modules directly only when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```python
apientitiesmetricimage = client.ApiEntitiesMetricImage()
apientitiesmetricimage.list()

# apientitiesmetricimage.data_get() now returns the apientitiesmetricimage data from the last list
# apientitiesmetricimage.match_get() returns the last match criteria
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
