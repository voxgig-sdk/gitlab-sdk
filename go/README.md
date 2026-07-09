# Gitlab Golang SDK



The Golang SDK for the Gitlab API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

It exposes the API as capitalised, semantic **Entities** — e.g. `client.AccessRequest(nil)` — each with the same small set of operations (`List`, `Load`, `Create`, `Update`, `Remove`, `Patch`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
```bash
go get github.com/voxgig-sdk/gitlab-sdk/go@latest
```

The Go module proxy resolves the version from the `go/vX.Y.Z` GitHub
release tag — see [Releases](https://github.com/voxgig-sdk/gitlab-sdk/releases) for the available versions.

To vendor from a local checkout instead, clone this repo alongside your
project and add a `replace` directive pointing at the checked-out
`go/` directory:

```bash
go mod edit -replace github.com/voxgig-sdk/gitlab-sdk/go=../gitlab-sdk/go
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### Quickstart

A complete program: create a client, then call the entity operations.
Each operation returns `(value, error)` — the value is the data itself
(there is no `{ok, data}` wrapper), so check `err` and use the value
directly.

```go
package main

import (
    "fmt"
    "os"
    sdk "github.com/voxgig-sdk/gitlab-sdk/go"
)

func main() {
    client := sdk.NewGitlabSDK(map[string]any{
        "apikey": os.Getenv("GITLAB_APIKEY"),
    })

    // Remove a accessRequest.
    removed, err := client.AccessRequest(nil).Remove(map[string]any{"id": "example_id"}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(removed)
}
```


## Error handling

Every entity operation returns `(value, error)`. Check `err` before
using the value — there is no exception to catch:

```go
accessrequest, err := client.AccessRequest(nil).Remove(nil, nil)
if err != nil {
    // handle err
    return
}
_ = accessrequest
```

`Direct` follows the same `(value, error)` convention:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example_id"},
})
if err != nil {
    // handle err
}
_ = result
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

if result["ok"] == true {
    fmt.Println(result["status"]) // 200
    fmt.Println(result["data"])   // response body
}
```

### Prepare a request without sending it

```go
fetchdef, err := client.Prepare(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "DELETE",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

fmt.Println(fetchdef["url"])
fmt.Println(fetchdef["method"])
fmt.Println(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```go
client := sdk.Test()

apiEntitiesAccessRequester, err := client.ApiEntitiesAccessRequester(nil).List(
    nil, nil,
)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesAccessRequester) // the returned mock data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```go
mockFetch := func(url string, init map[string]any) (map[string]any, error) {
    return map[string]any{
        "status":     200,
        "statusText": "OK",
        "headers":    map[string]any{},
        "json": (func() any)(func() any {
            return map[string]any{"id": "mock01"}
        }),
    }, nil
}

client := sdk.NewGitlabSDK(map[string]any{
    "base": "http://localhost:8080",
    "system": map[string]any{
        "fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
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
cd go && go test ./test/...
```


## Reference

### NewGitlabSDK

```go
func NewGitlabSDK(options map[string]any) *GitlabSDK
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `"apikey"` | `string` | API key for authentication. |
| `"base"` | `string` | Base URL of the API server. |
| `"prefix"` | `string` | URL path prefix prepended to all requests. |
| `"suffix"` | `string` | URL path suffix appended to all requests. |
| `"feature"` | `map[string]any` | Feature activation flags. |
| `"extend"` | `[]any` | Additional Feature instances to load. |
| `"system"` | `map[string]any` | System overrides (e.g. custom `"fetch"` function). |

### TestSDK

```go
func TestSDK(testopts map[string]any, sdkopts map[string]any) *GitlabSDK
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### GitlabSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `OptionsMap` | `() map[string]any` | Deep copy of current SDK options. |
| `GetUtility` | `() *Utility` | Copy of the SDK utility object. |
| `Prepare` | `(fetchargs map[string]any) (map[string]any, error)` | Build an HTTP request definition without sending. |
| `Direct` | `(fetchargs map[string]any) (map[string]any, error)` | Build and send an HTTP request. |
| `AccessRequest` | `(data map[string]any) GitlabEntity` | Create an AccessRequest entity instance. |
| `AlertManagement` | `(data map[string]any) GitlabEntity` | Create an AlertManagement entity instance. |
| `ApiEntitiesAccessRequester` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesAccessRequester entity instance. |
| `ApiEntitiesAppearance` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesAppearance entity instance. |
| `ApiEntitiesApplication` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesApplication entity instance. |
| `ApiEntitiesApplicationStatistic` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesApplicationStatistic entity instance. |
| `ApiEntitiesApplicationWithSecret` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesApplicationWithSecret entity instance. |
| `ApiEntitiesAvatar` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesAvatar entity instance. |
| `ApiEntitiesAwardEmoji` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesAwardEmoji entity instance. |
| `ApiEntitiesBadge` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesBadge entity instance. |
| `ApiEntitiesBasicBadgeDetail` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesBasicBadgeDetail entity instance. |
| `ApiEntitiesBasicGroupDetail` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesBasicGroupDetail entity instance. |
| `ApiEntitiesBasicProjectDetail` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesBasicProjectDetail entity instance. |
| `ApiEntitiesBasicRef` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesBasicRef entity instance. |
| `ApiEntitiesBasicSuccess` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesBasicSuccess entity instance. |
| `ApiEntitiesBatchedBackgroundMigration` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesBatchedBackgroundMigration entity instance. |
| `ApiEntitiesBranch` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesBranch entity instance. |
| `ApiEntitiesBulkImport` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesBulkImport entity instance. |
| `ApiEntitiesBulkImportsEntityFailure` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesBulkImportsEntityFailure entity instance. |
| `ApiEntitiesBulkImportsExportStatus` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesBulkImportsExportStatus entity instance. |
| `ApiEntitiesChangelog` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesChangelog entity instance. |
| `ApiEntitiesCiBridge` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesCiBridge entity instance. |
| `ApiEntitiesCiCatalogResourcesVersion` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesCiCatalogResourcesVersion entity instance. |
| `ApiEntitiesCiJob` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesCiJob entity instance. |
| `ApiEntitiesCiJobBasic` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesCiJobBasic entity instance. |
| `ApiEntitiesCiJobBasicWithProject` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesCiJobBasicWithProject entity instance. |
| `ApiEntitiesCiLintResult` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesCiLintResult entity instance. |
| `ApiEntitiesCiPipeline` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesCiPipeline entity instance. |
| `ApiEntitiesCiPipelineBasic` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesCiPipelineBasic entity instance. |
| `ApiEntitiesCiPipelineSchedule` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesCiPipelineSchedule entity instance. |
| `ApiEntitiesCiPipelineScheduleDetail` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesCiPipelineScheduleDetail entity instance. |
| `ApiEntitiesCiResetTokenResult` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesCiResetTokenResult entity instance. |
| `ApiEntitiesCiResourceGroup` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesCiResourceGroup entity instance. |
| `ApiEntitiesCiRunner` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesCiRunner entity instance. |
| `ApiEntitiesCiRunnerDetail` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesCiRunnerDetail entity instance. |
| `ApiEntitiesCiRunnerManager` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesCiRunnerManager entity instance. |
| `ApiEntitiesCiRunnerRegistrationDetail` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesCiRunnerRegistrationDetail entity instance. |
| `ApiEntitiesCiSecureFile` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesCiSecureFile entity instance. |
| `ApiEntitiesCiVariable` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesCiVariable entity instance. |
| `ApiEntitiesCluster` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesCluster entity instance. |
| `ApiEntitiesClusterGroup` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesClusterGroup entity instance. |
| `ApiEntitiesClusterProject` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesClusterProject entity instance. |
| `ApiEntitiesClustersAgent` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesClustersAgent entity instance. |
| `ApiEntitiesClustersAgentToken` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesClustersAgentToken entity instance. |
| `ApiEntitiesClustersAgentTokenBasic` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesClustersAgentTokenBasic entity instance. |
| `ApiEntitiesClustersAgentTokenWithToken` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesClustersAgentTokenWithToken entity instance. |
| `ApiEntitiesCommit` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesCommit entity instance. |
| `ApiEntitiesCommitDetail` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesCommitDetail entity instance. |
| `ApiEntitiesCommitNote` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesCommitNote entity instance. |
| `ApiEntitiesCommitSequence` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesCommitSequence entity instance. |
| `ApiEntitiesCommitSignature` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesCommitSignature entity instance. |
| `ApiEntitiesCommitStatus` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesCommitStatus entity instance. |
| `ApiEntitiesCompare` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesCompare entity instance. |
| `ApiEntitiesContainerRegistryRepository` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesContainerRegistryRepository entity instance. |
| `ApiEntitiesContainerRegistryTag` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesContainerRegistryTag entity instance. |
| `ApiEntitiesContainerRegistryTagDetail` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesContainerRegistryTagDetail entity instance. |
| `ApiEntitiesContributor` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesContributor entity instance. |
| `ApiEntitiesDeployKey` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesDeployKey entity instance. |
| `ApiEntitiesDeployKeysProject` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesDeployKeysProject entity instance. |
| `ApiEntitiesDeployToken` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesDeployToken entity instance. |
| `ApiEntitiesDeployTokenWithToken` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesDeployTokenWithToken entity instance. |
| `ApiEntitiesDeployment` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesDeployment entity instance. |
| `ApiEntitiesDeploymentExtended` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesDeploymentExtended entity instance. |
| `ApiEntitiesDeploymentsApproval` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesDeploymentsApproval entity instance. |
| `ApiEntitiesDictionaryTable` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesDictionaryTable entity instance. |
| `ApiEntitiesDiff` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesDiff entity instance. |
| `ApiEntitiesDiscoveredCluster` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesDiscoveredCluster entity instance. |
| `ApiEntitiesDraftNote` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesDraftNote entity instance. |
| `ApiEntitiesEnvironment` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesEnvironment entity instance. |
| `ApiEntitiesErrorTrackingClientKey` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesErrorTrackingClientKey entity instance. |
| `ApiEntitiesErrorTrackingProjectSetting` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesErrorTrackingProjectSetting entity instance. |
| `ApiEntitiesEvent` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesEvent entity instance. |
| `ApiEntitiesFeature` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesFeature entity instance. |
| `ApiEntitiesFeatureDefinition` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesFeatureDefinition entity instance. |
| `ApiEntitiesFeatureFlag` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesFeatureFlag entity instance. |
| `ApiEntitiesFeatureFlagUserList` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesFeatureFlagUserList entity instance. |
| `ApiEntitiesFreezePeriod` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesFreezePeriod entity instance. |
| `ApiEntitiesGitlabSubscription` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesGitlabSubscription entity instance. |
| `ApiEntitiesGoModuleVersion` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesGoModuleVersion entity instance. |
| `ApiEntitiesGroup` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesGroup entity instance. |
| `ApiEntitiesGroupDetail` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesGroupDetail entity instance. |
| `ApiEntitiesHook` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesHook entity instance. |
| `ApiEntitiesIntegration` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesIntegration entity instance. |
| `ApiEntitiesIntegrationBasic` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesIntegrationBasic entity instance. |
| `ApiEntitiesInvitation` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesInvitation entity instance. |
| `ApiEntitiesIssuableTimeStat` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesIssuableTimeStat entity instance. |
| `ApiEntitiesIssue` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesIssue entity instance. |
| `ApiEntitiesIssueLink` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesIssueLink entity instance. |
| `ApiEntitiesLicense` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesLicense entity instance. |
| `ApiEntitiesMarkdown` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesMarkdown entity instance. |
| `ApiEntitiesMarkdownUploadAdmin` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesMarkdownUploadAdmin entity instance. |
| `ApiEntitiesMember` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesMember entity instance. |
| `ApiEntitiesMerge` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesMerge entity instance. |
| `ApiEntitiesMergeRequestApproval` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesMergeRequestApproval entity instance. |
| `ApiEntitiesMergeRequestBasic` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesMergeRequestBasic entity instance. |
| `ApiEntitiesMergeRequestChange` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesMergeRequestChange entity instance. |
| `ApiEntitiesMergeRequestDiff` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesMergeRequestDiff entity instance. |
| `ApiEntitiesMergeRequestDiffFull` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesMergeRequestDiffFull entity instance. |
| `ApiEntitiesMergeRequestReviewer` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesMergeRequestReviewer entity instance. |
| `ApiEntitiesMetricImage` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesMetricImage entity instance. |
| `ApiEntitiesMrNote` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesMrNote entity instance. |
| `ApiEntitiesNamespace` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesNamespace entity instance. |
| `ApiEntitiesNamespaceExistence` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesNamespaceExistence entity instance. |
| `ApiEntitiesNamespacesStorageLimitExclusion` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesNamespacesStorageLimitExclusion entity instance. |
| `ApiEntitiesNpmPackage` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesNpmPackage entity instance. |
| `ApiEntitiesNpmPackageTag` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesNpmPackageTag entity instance. |
| `ApiEntitiesNugetPackagesVersion` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesNugetPackagesVersion entity instance. |
| `ApiEntitiesNugetSearchResult` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesNugetSearchResult entity instance. |
| `ApiEntitiesNugetServiceIndex` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesNugetServiceIndex entity instance. |
| `ApiEntitiesOrganizationsOrganization` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesOrganizationsOrganization entity instance. |
| `ApiEntitiesPackage` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesPackage entity instance. |
| `ApiEntitiesPackageFile` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesPackageFile entity instance. |
| `ApiEntitiesPackagePipeline` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesPackagePipeline entity instance. |
| `ApiEntitiesPackagesConanFilesList` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesPackagesConanFilesList entity instance. |
| `ApiEntitiesPackagesConanPackageManifest` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesPackagesConanPackageManifest entity instance. |
| `ApiEntitiesPackagesConanPackageRevision` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesPackagesConanPackageRevision entity instance. |
| `ApiEntitiesPackagesConanPackageSnapshot` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesPackagesConanPackageSnapshot entity instance. |
| `ApiEntitiesPackagesConanRecipeManifest` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesPackagesConanRecipeManifest entity instance. |
| `ApiEntitiesPackagesConanRecipeRevision` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesPackagesConanRecipeRevision entity instance. |
| `ApiEntitiesPackagesConanRecipeSnapshot` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesPackagesConanRecipeSnapshot entity instance. |
| `ApiEntitiesPackagesConanRevision` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesPackagesConanRevision entity instance. |
| `ApiEntitiesPackagesConanUploadUrl` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesPackagesConanUploadUrl entity instance. |
| `ApiEntitiesPackagesDebianDistribution` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesPackagesDebianDistribution entity instance. |
| `ApiEntitiesPagesDomain` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesPagesDomain entity instance. |
| `ApiEntitiesPagesDomainBasic` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesPagesDomainBasic entity instance. |
| `ApiEntitiesPersonalAccessToken` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesPersonalAccessToken entity instance. |
| `ApiEntitiesPersonalAccessTokenWithLastUsedIp` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesPersonalAccessTokenWithLastUsedIp entity instance. |
| `ApiEntitiesPersonalAccessTokenWithToken` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesPersonalAccessTokenWithToken entity instance. |
| `ApiEntitiesPersonalSnippet` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesPersonalSnippet entity instance. |
| `ApiEntitiesPlanLimit` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesPlanLimit entity instance. |
| `ApiEntitiesProject` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesProject entity instance. |
| `ApiEntitiesProjectDailyStatistic` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesProjectDailyStatistic entity instance. |
| `ApiEntitiesProjectExportStatus` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesProjectExportStatus entity instance. |
| `ApiEntitiesProjectGroupLink` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesProjectGroupLink entity instance. |
| `ApiEntitiesProjectHook` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesProjectHook entity instance. |
| `ApiEntitiesProjectImportStatus` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesProjectImportStatus entity instance. |
| `ApiEntitiesProjectJobTokenScope` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesProjectJobTokenScope entity instance. |
| `ApiEntitiesProjectRepositoryStorage` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesProjectRepositoryStorage entity instance. |
| `ApiEntitiesProjectSnippet` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesProjectSnippet entity instance. |
| `ApiEntitiesProjectUpload` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesProjectUpload entity instance. |
| `ApiEntitiesProjectWithAccess` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesProjectWithAccess entity instance. |
| `ApiEntitiesProjectsContainerRegistryProtectionRule` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesProjectsContainerRegistryProtectionRule entity instance. |
| `ApiEntitiesProjectsPackagesProtectionRule` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesProjectsPackagesProtectionRule entity instance. |
| `ApiEntitiesProjectsTopic` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesProjectsTopic entity instance. |
| `ApiEntitiesProtectedBranch` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesProtectedBranch entity instance. |
| `ApiEntitiesProtectedTag` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesProtectedTag entity instance. |
| `ApiEntitiesPublicGroupDetail` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesPublicGroupDetail entity instance. |
| `ApiEntitiesRelatedIssue` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesRelatedIssue entity instance. |
| `ApiEntitiesRelationImportTracker` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesRelationImportTracker entity instance. |
| `ApiEntitiesRelease` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesRelease entity instance. |
| `ApiEntitiesReleasesLink` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesReleasesLink entity instance. |
| `ApiEntitiesRemoteMirror` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesRemoteMirror entity instance. |
| `ApiEntitiesRepositoryHealth` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesRepositoryHealth entity instance. |
| `ApiEntitiesResourceAccessTokenWithToken` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesResourceAccessTokenWithToken entity instance. |
| `ApiEntitiesResourceMilestoneEvent` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesResourceMilestoneEvent entity instance. |
| `ApiEntitiesSnippet` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesSnippet entity instance. |
| `ApiEntitiesSshKeyWithUser` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesSshKeyWithUser entity instance. |
| `ApiEntitiesSuggestion` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesSuggestion entity instance. |
| `ApiEntitiesSystemBroadcastMessage` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesSystemBroadcastMessage entity instance. |
| `ApiEntitiesTag` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesTag entity instance. |
| `ApiEntitiesTagSignature` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesTagSignature entity instance. |
| `ApiEntitiesTemplatesList` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesTemplatesList entity instance. |
| `ApiEntitiesTerraformModuleVersion` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesTerraformModuleVersion entity instance. |
| `ApiEntitiesTreeObject` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesTreeObject entity instance. |
| `ApiEntitiesTrigger` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesTrigger entity instance. |
| `ApiEntitiesUserAgentDetail` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesUserAgentDetail entity instance. |
| `ApiEntitiesUserCount` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesUserCount entity instance. |
| `ApiEntitiesUserPublic` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesUserPublic entity instance. |
| `ApiEntitiesUserWithAdmin` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesUserWithAdmin entity instance. |
| `ApiEntitiesWikiAttachment` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesWikiAttachment entity instance. |
| `ApiEntitiesWikiPage` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesWikiPage entity instance. |
| `ApiEntitiesWikiPageBasic` | `(data map[string]any) GitlabEntity` | Create an ApiEntitiesWikiPageBasic entity instance. |
| `Application` | `(data map[string]any) GitlabEntity` | Create an Application entity instance. |
| `AwardEmoji` | `(data map[string]any) GitlabEntity` | Create an AwardEmoji entity instance. |
| `Badge` | `(data map[string]any) GitlabEntity` | Create a Badge entity instance. |
| `Branch` | `(data map[string]any) GitlabEntity` | Create a Branch entity instance. |
| `CargoPackage` | `(data map[string]any) GitlabEntity` | Create a CargoPackage entity instance. |
| `CiVariable` | `(data map[string]any) GitlabEntity` | Create a CiVariable entity instance. |
| `Cluster` | `(data map[string]any) GitlabEntity` | Create a Cluster entity instance. |
| `ClusterAgent` | `(data map[string]any) GitlabEntity` | Create a ClusterAgent entity instance. |
| `Composer` | `(data map[string]any) GitlabEntity` | Create a Composer entity instance. |
| `ComposerPackage` | `(data map[string]any) GitlabEntity` | Create a ComposerPackage entity instance. |
| `Conan` | `(data map[string]any) GitlabEntity` | Create a Conan entity instance. |
| `ConanPackage` | `(data map[string]any) GitlabEntity` | Create a ConanPackage entity instance. |
| `ContainerRegistry` | `(data map[string]any) GitlabEntity` | Create a ContainerRegistry entity instance. |
| `ContainerRegistryEvent` | `(data map[string]any) GitlabEntity` | Create a ContainerRegistryEvent entity instance. |
| `CustomAttribute` | `(data map[string]any) GitlabEntity` | Create a CustomAttribute entity instance. |
| `Debian` | `(data map[string]any) GitlabEntity` | Create a Debian entity instance. |
| `DebianDistribution` | `(data map[string]any) GitlabEntity` | Create a DebianDistribution entity instance. |
| `DebianPackage` | `(data map[string]any) GitlabEntity` | Create a DebianPackage entity instance. |
| `DependencyProxy` | `(data map[string]any) GitlabEntity` | Create a DependencyProxy entity instance. |
| `DeployKey` | `(data map[string]any) GitlabEntity` | Create a DeployKey entity instance. |
| `DeployToken` | `(data map[string]any) GitlabEntity` | Create a DeployToken entity instance. |
| `Deployment` | `(data map[string]any) GitlabEntity` | Create a Deployment entity instance. |
| `EeApiEntitiesApprovalState` | `(data map[string]any) GitlabEntity` | Create an EeApiEntitiesApprovalState entity instance. |
| `EeApiEntitiesAuditEvent` | `(data map[string]any) GitlabEntity` | Create an EeApiEntitiesAuditEvent entity instance. |
| `EeApiEntitiesBillableMembership` | `(data map[string]any) GitlabEntity` | Create an EeApiEntitiesBillableMembership entity instance. |
| `EeApiEntitiesGeoNodeStatus` | `(data map[string]any) GitlabEntity` | Create an EeApiEntitiesGeoNodeStatus entity instance. |
| `EeApiEntitiesGeoPipelineRef` | `(data map[string]any) GitlabEntity` | Create an EeApiEntitiesGeoPipelineRef entity instance. |
| `EeApiEntitiesIssuableMetricImage` | `(data map[string]any) GitlabEntity` | Create an EeApiEntitiesIssuableMetricImage entity instance. |
| `EeApiEntitiesMergeRequestApprovalState` | `(data map[string]any) GitlabEntity` | Create an EeApiEntitiesMergeRequestApprovalState entity instance. |
| `EeApiEntitiesSshCertificate` | `(data map[string]any) GitlabEntity` | Create an EeApiEntitiesSshCertificate entity instance. |
| `Environment` | `(data map[string]any) GitlabEntity` | Create an Environment entity instance. |
| `ErrorTrackingClientKey` | `(data map[string]any) GitlabEntity` | Create an ErrorTrackingClientKey entity instance. |
| `Feature` | `(data map[string]any) GitlabEntity` | Create a Feature entity instance. |
| `FeatureFlag` | `(data map[string]any) GitlabEntity` | Create a FeatureFlag entity instance. |
| `FeatureFlagsUserList` | `(data map[string]any) GitlabEntity` | Create a FeatureFlagsUserList entity instance. |
| `FreezePeriod` | `(data map[string]any) GitlabEntity` | Create a FreezePeriod entity instance. |
| `GenericPackage` | `(data map[string]any) GitlabEntity` | Create a GenericPackage entity instance. |
| `Geo` | `(data map[string]any) GitlabEntity` | Create a Geo entity instance. |
| `GoProxy` | `(data map[string]any) GitlabEntity` | Create a GoProxy entity instance. |
| `Group` | `(data map[string]any) GitlabEntity` | Create a Group entity instance. |
| `GroupAvatar` | `(data map[string]any) GitlabEntity` | Create a GroupAvatar entity instance. |
| `GroupExport` | `(data map[string]any) GitlabEntity` | Create a GroupExport entity instance. |
| `GroupImport` | `(data map[string]any) GitlabEntity` | Create a GroupImport entity instance. |
| `HelmPackage` | `(data map[string]any) GitlabEntity` | Create a HelmPackage entity instance. |
| `Hook` | `(data map[string]any) GitlabEntity` | Create a Hook entity instance. |
| `Import` | `(data map[string]any) GitlabEntity` | Create an Import entity instance. |
| `Integration` | `(data map[string]any) GitlabEntity` | Create an Integration entity instance. |
| `Invitation` | `(data map[string]any) GitlabEntity` | Create an Invitation entity instance. |
| `IssueLink` | `(data map[string]any) GitlabEntity` | Create an IssueLink entity instance. |
| `IssuesStatistic` | `(data map[string]any) GitlabEntity` | Create an IssuesStatistic entity instance. |
| `Job` | `(data map[string]any) GitlabEntity` | Create a Job entity instance. |
| `MavenPackage` | `(data map[string]any) GitlabEntity` | Create a MavenPackage entity instance. |
| `Member` | `(data map[string]any) GitlabEntity` | Create a Member entity instance. |
| `MergeRequest` | `(data map[string]any) GitlabEntity` | Create a MergeRequest entity instance. |
| `Metadata` | `(data map[string]any) GitlabEntity` | Create a Metadata entity instance. |
| `Migration` | `(data map[string]any) GitlabEntity` | Create a Migration entity instance. |
| `MlModelRegistry` | `(data map[string]any) GitlabEntity` | Create a MlModelRegistry entity instance. |
| `Namespace` | `(data map[string]any) GitlabEntity` | Create a Namespace entity instance. |
| `Npm` | `(data map[string]any) GitlabEntity` | Create a Npm entity instance. |
| `NpmPackage` | `(data map[string]any) GitlabEntity` | Create a NpmPackage entity instance. |
| `Nuget` | `(data map[string]any) GitlabEntity` | Create a Nuget entity instance. |
| `NugetPackage` | `(data map[string]any) GitlabEntity` | Create a NugetPackage entity instance. |
| `PackageFile` | `(data map[string]any) GitlabEntity` | Create a PackageFile entity instance. |
| `Page` | `(data map[string]any) GitlabEntity` | Create a Page entity instance. |
| `Participant` | `(data map[string]any) GitlabEntity` | Create a Participant entity instance. |
| `PersonalAccessToken` | `(data map[string]any) GitlabEntity` | Create a PersonalAccessToken entity instance. |
| `Project` | `(data map[string]any) GitlabEntity` | Create a Project entity instance. |
| `ProjectAvatar` | `(data map[string]any) GitlabEntity` | Create a ProjectAvatar entity instance. |
| `ProjectEntity` | `(data map[string]any) GitlabEntity` | Create a ProjectEntity entity instance. |
| `ProjectExport` | `(data map[string]any) GitlabEntity` | Create a ProjectExport entity instance. |
| `ProjectHook` | `(data map[string]any) GitlabEntity` | Create a ProjectHook entity instance. |
| `ProjectImport` | `(data map[string]any) GitlabEntity` | Create a ProjectImport entity instance. |
| `ProjectImportEntity` | `(data map[string]any) GitlabEntity` | Create a ProjectImportEntity entity instance. |
| `ProjectPackage` | `(data map[string]any) GitlabEntity` | Create a ProjectPackage entity instance. |
| `ProjectSnippet` | `(data map[string]any) GitlabEntity` | Create a ProjectSnippet entity instance. |
| `ProjectsJobTokenScope` | `(data map[string]any) GitlabEntity` | Create a ProjectsJobTokenScope entity instance. |
| `ProtectedTag` | `(data map[string]any) GitlabEntity` | Create a ProtectedTag entity instance. |
| `Pypi` | `(data map[string]any) GitlabEntity` | Create a Pypi entity instance. |
| `PypiPackage` | `(data map[string]any) GitlabEntity` | Create a PypiPackage entity instance. |
| `Release` | `(data map[string]any) GitlabEntity` | Create a Release entity instance. |
| `ReleaseLink` | `(data map[string]any) GitlabEntity` | Create a ReleaseLink entity instance. |
| `RemoteMirror` | `(data map[string]any) GitlabEntity` | Create a RemoteMirror entity instance. |
| `Rpm` | `(data map[string]any) GitlabEntity` | Create a Rpm entity instance. |
| `RpmPackage` | `(data map[string]any) GitlabEntity` | Create a RpmPackage entity instance. |
| `Rubygem` | `(data map[string]any) GitlabEntity` | Create a Rubygem entity instance. |
| `RubygemPackage` | `(data map[string]any) GitlabEntity` | Create a RubygemPackage entity instance. |
| `Runner` | `(data map[string]any) GitlabEntity` | Create a Runner entity instance. |
| `Search` | `(data map[string]any) GitlabEntity` | Create a Search entity instance. |
| `SecureFile` | `(data map[string]any) GitlabEntity` | Create a SecureFile entity instance. |
| `Slack` | `(data map[string]any) GitlabEntity` | Create a Slack entity instance. |
| `Snippet` | `(data map[string]any) GitlabEntity` | Create a Snippet entity instance. |
| `Starrer` | `(data map[string]any) GitlabEntity` | Create a Starrer entity instance. |
| `SystemHook` | `(data map[string]any) GitlabEntity` | Create a SystemHook entity instance. |
| `Tag` | `(data map[string]any) GitlabEntity` | Create a Tag entity instance. |
| `TerraformRegistry` | `(data map[string]any) GitlabEntity` | Create a TerraformRegistry entity instance. |
| `TerraformState` | `(data map[string]any) GitlabEntity` | Create a TerraformState entity instance. |
| `TestReport` | `(data map[string]any) GitlabEntity` | Create a TestReport entity instance. |
| `TestReportSummary` | `(data map[string]any) GitlabEntity` | Create a TestReportSummary entity instance. |
| `Topic` | `(data map[string]any) GitlabEntity` | Create a Topic entity instance. |
| `UnleashApi` | `(data map[string]any) GitlabEntity` | Create an UnleashApi entity instance. |
| `UsageData` | `(data map[string]any) GitlabEntity` | Create an UsageData entity instance. |
| `User` | `(data map[string]any) GitlabEntity` | Create an User entity instance. |
| `WebCommit` | `(data map[string]any) GitlabEntity` | Create a WebCommit entity instance. |
| `Wiki` | `(data map[string]any) GitlabEntity` | Create a Wiki entity instance. |

### Entity interface (GitlabEntity)

All entities implement the `GitlabEntity` interface.

| Method | Signature | Description |
| --- | --- | --- |
| `Load` | `(reqmatch, ctrl map[string]any) (any, error)` | Load a single entity by match criteria. |
| `List` | `(reqmatch, ctrl map[string]any) (any, error)` | List entities matching the criteria. |
| `Create` | `(reqdata, ctrl map[string]any) (any, error)` | Create a new entity. |
| `Update` | `(reqdata, ctrl map[string]any) (any, error)` | Update an existing entity. |
| `Remove` | `(reqmatch, ctrl map[string]any) (any, error)` | Remove an entity. |
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(value, error)`. The `value` is the
operation's data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `Load` / `Create` / `Update` / `Remove` | the entity record (`map[string]any`) |
| `List` | a `[]any` of entity records |

Check `err` first, then use the value directly (or the typed
`...Typed` variants, which return the entity's model struct and a typed
slice):

    accessRequest, err := client.AccessRequest(nil).Remove(nil, nil)
    if err != nil { /* handle */ }
    // accessRequest is the returned record

Only `Direct()` returns a response envelope — a `map[string]any` with
`"ok"`, `"status"`, `"headers"`, and `"data"` keys.

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
| `"avatar_path"` |  |
| `"avatar_url"` |  |
| `"custom_attribute"` |  |
| `"id"` |  |
| `"key"` |  |
| `"locked"` |  |
| `"name"` |  |
| `"public_email"` |  |
| `"requested_at"` |  |
| `"state"` |  |
| `"username"` |  |
| `"value"` |  |
| `"web_url"` |  |

Operations: Create, List, Update.

API path: `/api/v4/groups/{id}/access_requests`

#### ApiEntitiesAppearance

| Field | Description |
| --- | --- |
| `"description"` |  |
| `"email_header_and_footer_enabled"` |  |
| `"favicon"` |  |
| `"footer_message"` |  |
| `"header_logo"` |  |
| `"header_message"` |  |
| `"logo"` |  |
| `"member_guideline"` |  |
| `"message_background_color"` |  |
| `"message_font_color"` |  |
| `"new_project_guideline"` |  |
| `"profile_image_guideline"` |  |
| `"pwa_description"` |  |
| `"pwa_icon"` |  |
| `"pwa_name"` |  |
| `"pwa_short_name"` |  |
| `"title"` |  |

Operations: Load, Update.

API path: `/api/v4/application/appearance`

#### ApiEntitiesApplication

| Field | Description |
| --- | --- |
| `"application_id"` |  |
| `"application_name"` |  |
| `"callback_url"` |  |
| `"confidential"` |  |
| `"id"` |  |

Operations: List.

API path: `/api/v4/applications`

#### ApiEntitiesApplicationStatistic

| Field | Description |
| --- | --- |
| `"active_user"` |  |
| `"fork"` |  |
| `"group"` |  |
| `"issue"` |  |
| `"merge_request"` |  |
| `"milestone"` |  |
| `"note"` |  |
| `"project"` |  |
| `"snippet"` |  |
| `"ssh_key"` |  |
| `"user"` |  |

Operations: Load.

API path: `/api/v4/application/statistics`

#### ApiEntitiesApplicationWithSecret

| Field | Description |
| --- | --- |
| `"application_id"` |  |
| `"application_name"` |  |
| `"callback_url"` |  |
| `"confidential"` |  |
| `"id"` |  |
| `"secret"` |  |

Operations: Create.

API path: `/api/v4/applications/{id}/renew-secret`

#### ApiEntitiesAvatar

| Field | Description |
| --- | --- |
| `"avatar_url"` |  |

Operations: Load.

API path: `/api/v4/avatar`

#### ApiEntitiesAwardEmoji

| Field | Description |
| --- | --- |
| `"awardable_id"` |  |
| `"awardable_type"` |  |
| `"created_at"` |  |
| `"id"` |  |
| `"name"` |  |
| `"updated_at"` |  |
| `"url"` |  |
| `"user"` |  |

Operations: Create, List, Load.

API path: `/api/v4/groups/{id}/epics/{epic_iid}/notes/{note_id}/award_emoji`

#### ApiEntitiesBadge

| Field | Description |
| --- | --- |
| `"id"` |  |
| `"image_url"` |  |
| `"kind"` |  |
| `"link_url"` |  |
| `"name"` |  |
| `"rendered_image_url"` |  |
| `"rendered_link_url"` |  |

Operations: Create, List, Load, Update.

API path: `/api/v4/groups/{id}/badges`

#### ApiEntitiesBasicBadgeDetail

| Field | Description |
| --- | --- |
| `"image_url"` |  |
| `"link_url"` |  |
| `"name"` |  |
| `"rendered_image_url"` |  |
| `"rendered_link_url"` |  |

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
| `"avatar_url"` |  |
| `"created_at"` |  |
| `"custom_attribute"` |  |
| `"default_branch"` |  |
| `"description"` |  |
| `"forks_count"` |  |
| `"http_url_to_repo"` |  |
| `"id"` |  |
| `"last_activity_at"` |  |
| `"license"` |  |
| `"license_url"` |  |
| `"name"` |  |
| `"name_with_namespace"` |  |
| `"namespace"` |  |
| `"path"` |  |
| `"path_with_namespace"` |  |
| `"readme_url"` |  |
| `"repository_storage"` |  |
| `"ssh_url_to_repo"` |  |
| `"star_count"` |  |
| `"tag_list"` |  |
| `"topic"` |  |
| `"visibility"` |  |
| `"web_url"` |  |

Operations: Create, List.

API path: `/api/v4/projects/{id}/job_token_scope/allowlist`

#### ApiEntitiesBasicRef

| Field | Description |
| --- | --- |
| `"name"` |  |
| `"type"` |  |

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
| `"column_name"` |  |
| `"created_at"` |  |
| `"id"` |  |
| `"job_class_name"` |  |
| `"progress"` |  |
| `"status"` |  |
| `"table_name"` |  |

Operations: List, Load, Update.

API path: `/api/v4/admin/batched_background_migrations`

#### ApiEntitiesBranch

| Field | Description |
| --- | --- |
| `"can_push"` |  |
| `"commit"` |  |
| `"default"` |  |
| `"developers_can_merge"` |  |
| `"developers_can_push"` |  |
| `"merged"` |  |
| `"name"` |  |
| `"protected"` |  |
| `"web_url"` |  |

Operations: Create, List, Load, Update.

API path: `/api/v4/projects/{id}/repository/branches`

#### ApiEntitiesBulkImport

| Field | Description |
| --- | --- |
| `"bulk_import_id"` |  |
| `"created_at"` |  |
| `"destination_full_path"` |  |
| `"destination_name"` |  |
| `"destination_namespace"` |  |
| `"destination_slug"` |  |
| `"entity_type"` |  |
| `"failure"` |  |
| `"has_failure"` |  |
| `"id"` |  |
| `"migrate_membership"` |  |
| `"migrate_project"` |  |
| `"namespace_id"` |  |
| `"parent_id"` |  |
| `"project_id"` |  |
| `"source_full_path"` |  |
| `"source_type"` |  |
| `"source_url"` |  |
| `"stat"` |  |
| `"status"` |  |
| `"updated_at"` |  |

Operations: Create, List, Load.

API path: `/api/v4/bulk_imports`

#### ApiEntitiesBulkImportsEntityFailure

| Field | Description |
| --- | --- |
| `"correlation_id_value"` |  |
| `"exception_class"` |  |
| `"exception_message"` |  |
| `"relation"` |  |
| `"source_title"` |  |
| `"source_url"` |  |

Operations: Load.

API path: `/api/v4/bulk_imports/{import_id}/entities/{entity_id}/failures`

#### ApiEntitiesBulkImportsExportStatus

| Field | Description |
| --- | --- |
| `"batch"` |  |
| `"batched"` |  |
| `"batches_count"` |  |
| `"error"` |  |
| `"relation"` |  |
| `"status"` |  |
| `"total_objects_count"` |  |
| `"updated_at"` |  |

Operations: List.

API path: `/api/v4/groups/{id}/export_relations/status`

#### ApiEntitiesChangelog

| Field | Description |
| --- | --- |
| `"note"` |  |

Operations: Load.

API path: `/api/v4/projects/{id}/repository/changelog`

#### ApiEntitiesCiBridge

| Field | Description |
| --- | --- |
| `"allow_failure"` |  |
| `"commit"` |  |
| `"coverage"` |  |
| `"created_at"` |  |
| `"downstream_pipeline"` |  |
| `"duration"` |  |
| `"erased_at"` |  |
| `"failure_reason"` |  |
| `"finished_at"` |  |
| `"id"` |  |
| `"name"` |  |
| `"pipeline"` |  |
| `"project"` |  |
| `"queued_duration"` |  |
| `"ref"` |  |
| `"stage"` |  |
| `"started_at"` |  |
| `"status"` |  |
| `"tag"` |  |
| `"user"` |  |
| `"web_url"` |  |

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
| `"allow_failure"` |  |
| `"archived"` |  |
| `"artifact"` |  |
| `"artifacts_expire_at"` |  |
| `"artifacts_file"` |  |
| `"commit"` |  |
| `"coverage"` |  |
| `"created_at"` |  |
| `"duration"` |  |
| `"erased_at"` |  |
| `"failure_reason"` |  |
| `"file_format"` |  |
| `"file_type"` |  |
| `"filename"` |  |
| `"finished_at"` |  |
| `"id"` |  |
| `"name"` |  |
| `"pipeline"` |  |
| `"project"` |  |
| `"queued_duration"` |  |
| `"ref"` |  |
| `"runner"` |  |
| `"runner_manager"` |  |
| `"size"` |  |
| `"stage"` |  |
| `"started_at"` |  |
| `"status"` |  |
| `"tag"` |  |
| `"tag_list"` |  |
| `"user"` |  |
| `"web_url"` |  |

Operations: Create, List, Load.

API path: `/api/v4/projects/{id}/jobs/{job_id}/cancel`

#### ApiEntitiesCiJobBasic

| Field | Description |
| --- | --- |
| `"allow_failure"` |  |
| `"commit"` |  |
| `"coverage"` |  |
| `"created_at"` |  |
| `"duration"` |  |
| `"erased_at"` |  |
| `"failure_reason"` |  |
| `"finished_at"` |  |
| `"id"` |  |
| `"name"` |  |
| `"pipeline"` |  |
| `"project"` |  |
| `"queued_duration"` |  |
| `"ref"` |  |
| `"stage"` |  |
| `"started_at"` |  |
| `"status"` |  |
| `"tag"` |  |
| `"user"` |  |
| `"web_url"` |  |

Operations: Create, List.

API path: `/api/v4/projects/{id}/jobs/{job_id}/play`

#### ApiEntitiesCiJobBasicWithProject

| Field | Description |
| --- | --- |
| `"allow_failure"` |  |
| `"commit"` |  |
| `"coverage"` |  |
| `"created_at"` |  |
| `"duration"` |  |
| `"erased_at"` |  |
| `"failure_reason"` |  |
| `"finished_at"` |  |
| `"id"` |  |
| `"name"` |  |
| `"pipeline"` |  |
| `"project"` |  |
| `"queued_duration"` |  |
| `"ref"` |  |
| `"stage"` |  |
| `"started_at"` |  |
| `"status"` |  |
| `"tag"` |  |
| `"user"` |  |
| `"web_url"` |  |

Operations: Load.

API path: `/api/v4/runners/{id}/jobs`

#### ApiEntitiesCiLintResult

| Field | Description |
| --- | --- |
| `"blob"` |  |
| `"context_project"` |  |
| `"context_sha"` |  |
| `"error"` |  |
| `"extra"` |  |
| `"include"` |  |
| `"job"` |  |
| `"location"` |  |
| `"merged_yaml"` |  |
| `"raw"` |  |
| `"type"` |  |
| `"valid"` |  |
| `"warning"` |  |

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
| `"created_at"` |  |
| `"id"` |  |
| `"iid"` |  |
| `"project_id"` |  |
| `"ref"` |  |
| `"sha"` |  |
| `"source"` |  |
| `"status"` |  |
| `"updated_at"` |  |
| `"web_url"` |  |

Operations: List, Load.

API path: `/api/v4/projects/{id}/pipelines`

#### ApiEntitiesCiPipelineSchedule

| Field | Description |
| --- | --- |
| `"active"` |  |
| `"created_at"` |  |
| `"cron"` |  |
| `"cron_timezone"` |  |
| `"description"` |  |
| `"id"` |  |
| `"input"` |  |
| `"next_run_at"` |  |
| `"owner"` |  |
| `"ref"` |  |
| `"updated_at"` |  |

Operations: List.

API path: `/api/v4/projects/{id}/pipeline_schedules`

#### ApiEntitiesCiPipelineScheduleDetail

| Field | Description |
| --- | --- |
| `"active"` |  |
| `"created_at"` |  |
| `"cron"` |  |
| `"cron_timezone"` |  |
| `"description"` |  |
| `"id"` |  |
| `"input"` |  |
| `"last_pipeline"` |  |
| `"next_run_at"` |  |
| `"owner"` |  |
| `"ref"` |  |
| `"updated_at"` |  |
| `"variable"` |  |

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
| `"created_at"` |  |
| `"id"` |  |
| `"key"` |  |
| `"process_mode"` |  |
| `"updated_at"` |  |

Operations: List, Load, Update.

API path: `/api/v4/projects/{id}/resource_groups`

#### ApiEntitiesCiRunner

| Field | Description |
| --- | --- |
| `"active"` |  |
| `"created_at"` |  |
| `"created_by"` |  |
| `"description"` |  |
| `"id"` |  |
| `"ip_address"` |  |
| `"is_shared"` |  |
| `"job_execution_status"` |  |
| `"name"` |  |
| `"online"` |  |
| `"paused"` |  |
| `"runner_type"` |  |
| `"status"` |  |

Operations: Create, Load.

API path: `/api/v4/projects/{id}/runners`

#### ApiEntitiesCiRunnerDetail

| Field | Description |
| --- | --- |
| `"access_level"` |  |
| `"active"` |  |
| `"architecture"` |  |
| `"contacted_at"` |  |
| `"created_at"` |  |
| `"created_by"` |  |
| `"description"` |  |
| `"group"` |  |
| `"id"` |  |
| `"ip_address"` |  |
| `"is_shared"` |  |
| `"job_execution_status"` |  |
| `"locked"` |  |
| `"maintenance_note"` |  |
| `"maximum_timeout"` |  |
| `"name"` |  |
| `"online"` |  |
| `"paused"` |  |
| `"platform"` |  |
| `"project"` |  |
| `"revision"` |  |
| `"run_untagged"` |  |
| `"runner_type"` |  |
| `"status"` |  |
| `"tag_list"` |  |
| `"version"` |  |

Operations: Load, Update.

API path: `/api/v4/runners/{id}`

#### ApiEntitiesCiRunnerManager

| Field | Description |
| --- | --- |
| `"architecture"` |  |
| `"contacted_at"` |  |
| `"created_at"` |  |
| `"id"` |  |
| `"ip_address"` |  |
| `"job_execution_status"` |  |
| `"platform"` |  |
| `"revision"` |  |
| `"status"` |  |
| `"system_id"` |  |
| `"version"` |  |

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
| `"checksum"` |  |
| `"checksum_algorithm"` |  |
| `"created_at"` |  |
| `"expires_at"` |  |
| `"file_extension"` |  |
| `"id"` |  |
| `"metadata"` |  |
| `"name"` |  |

Operations: Create, Load.

API path: `/api/v4/projects/{id}/secure_files`

#### ApiEntitiesCiVariable

| Field | Description |
| --- | --- |
| `"description"` |  |
| `"environment_scope"` |  |
| `"hidden"` |  |
| `"key"` |  |
| `"masked"` |  |
| `"protected"` |  |
| `"raw"` |  |
| `"value"` |  |
| `"variable_type"` |  |

Operations: Create, List, Load, Update.

API path: `/api/v4/projects/{id}/pipeline_schedules/{pipeline_schedule_id}/variables`

#### ApiEntitiesCluster

| Field | Description |
| --- | --- |
| `"cluster_type"` |  |
| `"created_at"` |  |
| `"domain"` |  |
| `"enabled"` |  |
| `"environment_scope"` |  |
| `"id"` |  |
| `"managed"` |  |
| `"management_project"` |  |
| `"name"` |  |
| `"namespace_per_environment"` |  |
| `"platform_kubernete"` |  |
| `"platform_type"` |  |
| `"provider_gcp"` |  |
| `"provider_type"` |  |
| `"user"` |  |

Operations: Create, List, Load, Update.

API path: `/api/v4/admin/clusters/add`

#### ApiEntitiesClusterGroup

| Field | Description |
| --- | --- |
| `"cluster_type"` |  |
| `"created_at"` |  |
| `"domain"` |  |
| `"enabled"` |  |
| `"environment_scope"` |  |
| `"group"` |  |
| `"id"` |  |
| `"managed"` |  |
| `"management_project"` |  |
| `"name"` |  |
| `"namespace_per_environment"` |  |
| `"platform_kubernete"` |  |
| `"platform_type"` |  |
| `"provider_gcp"` |  |
| `"provider_type"` |  |
| `"user"` |  |

Operations: Create, Load, Update.

API path: `/api/v4/groups/{id}/clusters/user`

#### ApiEntitiesClusterProject

| Field | Description |
| --- | --- |
| `"cluster_type"` |  |
| `"created_at"` |  |
| `"domain"` |  |
| `"enabled"` |  |
| `"environment_scope"` |  |
| `"id"` |  |
| `"managed"` |  |
| `"management_project"` |  |
| `"name"` |  |
| `"namespace_per_environment"` |  |
| `"platform_kubernete"` |  |
| `"platform_type"` |  |
| `"project"` |  |
| `"provider_gcp"` |  |
| `"provider_type"` |  |
| `"user"` |  |

Operations: Create, Load, Update.

API path: `/api/v4/projects/{id}/clusters/user`

#### ApiEntitiesClustersAgent

| Field | Description |
| --- | --- |
| `"config_project"` |  |
| `"created_at"` |  |
| `"created_by_user_id"` |  |
| `"id"` |  |
| `"is_receptive"` |  |
| `"name"` |  |

Operations: Create, Load.

API path: `/api/v4/projects/{id}/cluster_agents`

#### ApiEntitiesClustersAgentToken

| Field | Description |
| --- | --- |
| `"agent_id"` |  |
| `"created_at"` |  |
| `"created_by_user_id"` |  |
| `"description"` |  |
| `"id"` |  |
| `"last_used_at"` |  |
| `"name"` |  |
| `"status"` |  |

Operations: Load.

API path: `/api/v4/projects/{id}/cluster_agents/{agent_id}/tokens/{token_id}`

#### ApiEntitiesClustersAgentTokenBasic

| Field | Description |
| --- | --- |
| `"agent_id"` |  |
| `"created_at"` |  |
| `"created_by_user_id"` |  |
| `"description"` |  |
| `"id"` |  |
| `"name"` |  |
| `"status"` |  |

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
| `"author_email"` |  |
| `"author_name"` |  |
| `"authored_date"` |  |
| `"committed_date"` |  |
| `"committer_email"` |  |
| `"committer_name"` |  |
| `"created_at"` |  |
| `"extended_trailer"` |  |
| `"id"` |  |
| `"message"` |  |
| `"parent_id"` |  |
| `"short_id"` |  |
| `"title"` |  |
| `"trailer"` |  |
| `"web_url"` |  |

Operations: Create, List.

API path: `/api/v4/projects/{id}/merge_requests/{merge_request_iid}/context_commits`

#### ApiEntitiesCommitDetail

| Field | Description |
| --- | --- |
| `"author_email"` |  |
| `"author_name"` |  |
| `"authored_date"` |  |
| `"committed_date"` |  |
| `"committer_email"` |  |
| `"committer_name"` |  |
| `"created_at"` |  |
| `"extended_trailer"` |  |
| `"id"` |  |
| `"last_pipeline"` |  |
| `"message"` |  |
| `"parent_id"` |  |
| `"project_id"` |  |
| `"short_id"` |  |
| `"stat"` |  |
| `"status"` |  |
| `"title"` |  |
| `"trailer"` |  |
| `"web_url"` |  |

Operations: Create, Load, Update.

API path: `/api/v4/projects/{id}/repository/commits`

#### ApiEntitiesCommitNote

| Field | Description |
| --- | --- |
| `"author"` |  |
| `"created_at"` |  |
| `"line"` |  |
| `"line_type"` |  |
| `"note"` |  |
| `"path"` |  |

Operations: Create, List.

API path: `/api/v4/projects/{id}/repository/commits/{sha}/comments`

#### ApiEntitiesCommitSequence

| Field | Description |
| --- | --- |
| `"count"` |  |

Operations: Load.

API path: `/api/v4/projects/{id}/repository/commits/{sha}/sequence`

#### ApiEntitiesCommitSignature

| Field | Description |
| --- | --- |
| `"commit_source"` |  |
| `"signature"` |  |
| `"signature_type"` |  |

Operations: Load.

API path: `/api/v4/projects/{id}/repository/commits/{sha}/signature`

#### ApiEntitiesCommitStatus

| Field | Description |
| --- | --- |
| `"allow_failure"` |  |
| `"author"` |  |
| `"coverage"` |  |
| `"created_at"` |  |
| `"description"` |  |
| `"finished_at"` |  |
| `"id"` |  |
| `"name"` |  |
| `"pipeline_id"` |  |
| `"ref"` |  |
| `"sha"` |  |
| `"started_at"` |  |
| `"status"` |  |
| `"target_url"` |  |

Operations: Create, List.

API path: `/api/v4/projects/{id}/statuses/{sha}`

#### ApiEntitiesCompare

| Field | Description |
| --- | --- |
| `"commit"` |  |
| `"compare_same_ref"` |  |
| `"compare_timeout"` |  |
| `"diff"` |  |
| `"web_url"` |  |

Operations: List.

API path: `/api/v4/projects/{id}/repository/compare`

#### ApiEntitiesContainerRegistryRepository

| Field | Description |
| --- | --- |
| `"cleanup_policy_started_at"` |  |
| `"created_at"` |  |
| `"delete_api_path"` |  |
| `"id"` |  |
| `"location"` |  |
| `"name"` |  |
| `"path"` |  |
| `"project_id"` |  |
| `"size"` |  |
| `"status"` |  |
| `"tag"` |  |
| `"tags_count"` |  |

Operations: List, Load.

API path: `/api/v4/projects/{id}/registry/repositories`

#### ApiEntitiesContainerRegistryTag

| Field | Description |
| --- | --- |
| `"location"` |  |
| `"name"` |  |
| `"path"` |  |

Operations: List.

API path: `/api/v4/projects/{id}/registry/repositories/{repository_id}/tags`

#### ApiEntitiesContainerRegistryTagDetail

| Field | Description |
| --- | --- |
| `"created_at"` |  |
| `"digest"` |  |
| `"location"` |  |
| `"name"` |  |
| `"path"` |  |
| `"revision"` |  |
| `"short_revision"` |  |
| `"total_size"` |  |

Operations: Load.

API path: `/api/v4/projects/{id}/registry/repositories/{repository_id}/tags/{tag_name}`

#### ApiEntitiesContributor

| Field | Description |
| --- | --- |
| `"addition"` |  |
| `"commit"` |  |
| `"deletion"` |  |
| `"email"` |  |
| `"name"` |  |

Operations: Load.

API path: `/api/v4/projects/{id}/repository/contributors`

#### ApiEntitiesDeployKey

| Field | Description |
| --- | --- |
| `"created_at"` |  |
| `"expires_at"` |  |
| `"fingerprint"` |  |
| `"fingerprint_sha256"` |  |
| `"id"` |  |
| `"key"` |  |
| `"last_used_at"` |  |
| `"projects_with_readonly_access"` |  |
| `"projects_with_write_access"` |  |
| `"title"` |  |
| `"usage_type"` |  |

Operations: Create, List, Update.

API path: `/api/v4/projects/{id}/deploy_keys/{key_id}/enable`

#### ApiEntitiesDeployKeysProject

| Field | Description |
| --- | --- |
| `"can_push"` |  |
| `"created_at"` |  |
| `"expires_at"` |  |
| `"fingerprint"` |  |
| `"fingerprint_sha256"` |  |
| `"id"` |  |
| `"key"` |  |
| `"last_used_at"` |  |
| `"projects_with_readonly_access"` |  |
| `"projects_with_write_access"` |  |
| `"title"` |  |
| `"usage_type"` |  |

Operations: Create, List, Load.

API path: `/api/v4/projects/{id}/deploy_keys`

#### ApiEntitiesDeployToken

| Field | Description |
| --- | --- |
| `"expired"` |  |
| `"expires_at"` |  |
| `"id"` |  |
| `"name"` |  |
| `"revoked"` |  |
| `"scope"` |  |
| `"username"` |  |

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
| `"created_at"` |  |
| `"deployable"` |  |
| `"environment"` |  |
| `"id"` |  |
| `"iid"` |  |
| `"ref"` |  |
| `"sha"` |  |
| `"status"` |  |
| `"updated_at"` |  |
| `"user"` |  |

Operations: List.

API path: `/api/v4/projects/{id}/deployments`

#### ApiEntitiesDeploymentExtended

| Field | Description |
| --- | --- |
| `"approval"` |  |
| `"approval_summary"` |  |
| `"created_at"` |  |
| `"deployable"` |  |
| `"environment"` |  |
| `"id"` |  |
| `"iid"` |  |
| `"pending_approval_count"` |  |
| `"ref"` |  |
| `"sha"` |  |
| `"status"` |  |
| `"updated_at"` |  |
| `"user"` |  |

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
| `"feature_category"` |  |
| `"table_name"` |  |

Operations: Load.

API path: `/api/v4/admin/databases/{database_name}/dictionary/tables/{table_name}`

#### ApiEntitiesDiff

| Field | Description |
| --- | --- |
| `"a_mode"` |  |
| `"b_mode"` |  |
| `"collapsed"` |  |
| `"deleted_file"` |  |
| `"diff"` |  |
| `"generated_file"` |  |
| `"new_file"` |  |
| `"new_path"` |  |
| `"old_path"` |  |
| `"renamed_file"` |  |
| `"too_large"` |  |

Operations: List, Load.

API path: `/api/v4/projects/{id}/repository/commits/{sha}/diff`

#### ApiEntitiesDiscoveredCluster

| Field | Description |
| --- | --- |
| `"group"` |  |
| `"project"` |  |

Operations: Load.

API path: `/api/v4/discover-cert-based-clusters`

#### ApiEntitiesDraftNote

| Field | Description |
| --- | --- |
| `"author_id"` |  |
| `"commit_id"` |  |
| `"discussion_id"` |  |
| `"id"` |  |
| `"line_code"` |  |
| `"merge_request_id"` |  |
| `"note"` |  |
| `"position"` |  |
| `"resolve_discussion"` |  |

Operations: Create, List, Load, Update.

API path: `/api/v4/projects/{id}/merge_requests/{merge_request_iid}/draft_notes`

#### ApiEntitiesEnvironment

| Field | Description |
| --- | --- |
| `"auto_stop_at"` |  |
| `"auto_stop_setting"` |  |
| `"cluster_agent"` |  |
| `"created_at"` |  |
| `"description"` |  |
| `"external_url"` |  |
| `"flux_resource_path"` |  |
| `"id"` |  |
| `"kubernetes_namespace"` |  |
| `"last_deployment"` |  |
| `"name"` |  |
| `"project"` |  |
| `"slug"` |  |
| `"state"` |  |
| `"tier"` |  |
| `"updated_at"` |  |

Operations: Create, List, Load, Update.

API path: `/api/v4/projects/{id}/environments/{environment_id}/stop`

#### ApiEntitiesErrorTrackingClientKey

| Field | Description |
| --- | --- |
| `"active"` |  |
| `"id"` |  |
| `"public_key"` |  |
| `"sentry_dsn"` |  |

Operations: Create, List.

API path: `/api/v4/projects/{id}/error_tracking/client_keys`

#### ApiEntitiesErrorTrackingProjectSetting

| Field | Description |
| --- | --- |
| `"active"` |  |
| `"api_url"` |  |
| `"integrated"` |  |
| `"project_name"` |  |
| `"sentry_external_url"` |  |

Operations: Load, Patch, Update.

API path: `/api/v4/projects/{id}/error_tracking/settings`

#### ApiEntitiesEvent

| Field | Description |
| --- | --- |
| `"action_name"` |  |
| `"author"` |  |
| `"author_id"` |  |
| `"author_username"` |  |
| `"created_at"` |  |
| `"id"` |  |
| `"imported"` |  |
| `"imported_from"` |  |
| `"note"` |  |
| `"project_id"` |  |
| `"push_data"` |  |
| `"target_id"` |  |
| `"target_iid"` |  |
| `"target_title"` |  |
| `"target_type"` |  |
| `"wiki_page"` |  |

Operations: List, Load.

API path: `/api/v4/events`

#### ApiEntitiesFeature

| Field | Description |
| --- | --- |
| `"definition"` |  |
| `"gate"` |  |
| `"name"` |  |
| `"state"` |  |

Operations: Create, List.

API path: `/api/v4/features/{name}`

#### ApiEntitiesFeatureDefinition

| Field | Description |
| --- | --- |
| `"default_enabled"` |  |
| `"feature_issue_url"` |  |
| `"group"` |  |
| `"intended_to_rollout_by"` |  |
| `"introduced_by_url"` |  |
| `"log_state_change"` |  |
| `"milestone"` |  |
| `"name"` |  |
| `"rollout_issue_url"` |  |
| `"type"` |  |

Operations: List.

API path: `/api/v4/features/definitions`

#### ApiEntitiesFeatureFlag

| Field | Description |
| --- | --- |
| `"active"` |  |
| `"created_at"` |  |
| `"description"` |  |
| `"name"` |  |
| `"scope"` |  |
| `"strategy"` |  |
| `"updated_at"` |  |
| `"version"` |  |

Operations: Create, List, Load, Update.

API path: `/api/v4/projects/{id}/feature_flags`

#### ApiEntitiesFeatureFlagUserList

| Field | Description |
| --- | --- |
| `"created_at"` |  |
| `"edit_path"` |  |
| `"id"` |  |
| `"iid"` |  |
| `"name"` |  |
| `"path"` |  |
| `"project_id"` |  |
| `"updated_at"` |  |
| `"user_xid"` |  |

Operations: Create, List, Load, Update.

API path: `/api/v4/projects/{id}/feature_flags_user_lists`

#### ApiEntitiesFreezePeriod

| Field | Description |
| --- | --- |
| `"created_at"` |  |
| `"cron_timezone"` |  |
| `"freeze_end"` |  |
| `"freeze_start"` |  |
| `"id"` |  |
| `"updated_at"` |  |

Operations: Create, List, Load, Update.

API path: `/api/v4/projects/{id}/freeze_periods`

#### ApiEntitiesGitlabSubscription

| Field | Description |
| --- | --- |
| `"billing"` |  |
| `"plan"` |  |
| `"usage"` |  |

Operations: Load.

API path: `/api/v4/namespaces/{id}/gitlab_subscription`

#### ApiEntitiesGoModuleVersion

| Field | Description |
| --- | --- |
| `"time"` |  |
| `"version"` |  |

Operations: Load.

API path: `/api/v4/projects/{id}/packages/go/*module_name/@v/{module_version}.info`

#### ApiEntitiesGroup

| Field | Description |
| --- | --- |
| `"archived"` |  |
| `"auto_devops_enabled"` |  |
| `"auto_duo_code_review_enabled"` |  |
| `"avatar_url"` |  |
| `"created_at"` |  |
| `"custom_attribute"` |  |
| `"default_branch"` |  |
| `"default_branch_protection"` |  |
| `"default_branch_protection_default"` |  |
| `"description"` |  |
| `"duo_core_features_enabled"` |  |
| `"duo_features_enabled"` |  |
| `"emails_disabled"` |  |
| `"emails_enabled"` |  |
| `"file_template_project_id"` |  |
| `"full_name"` |  |
| `"full_path"` |  |
| `"id"` |  |
| `"ldap_access"` |  |
| `"ldap_cn"` |  |
| `"ldap_group_link"` |  |
| `"lfs_enabled"` |  |
| `"lock_duo_features_enabled"` |  |
| `"lock_math_rendering_limits_enabled"` |  |
| `"marked_for_deletion_on"` |  |
| `"math_rendering_limits_enabled"` |  |
| `"max_artifacts_size"` |  |
| `"mentions_disabled"` |  |
| `"name"` |  |
| `"organization_id"` |  |
| `"parent_id"` |  |
| `"path"` |  |
| `"project_creation_level"` |  |
| `"repository_storage"` |  |
| `"request_access_enabled"` |  |
| `"require_two_factor_authentication"` |  |
| `"root_storage_statistic"` |  |
| `"saml_group_link"` |  |
| `"share_with_group_lock"` |  |
| `"shared_runners_setting"` |  |
| `"show_diff_preview_in_email"` |  |
| `"statistic"` |  |
| `"subgroup_creation_level"` |  |
| `"two_factor_grace_period"` |  |
| `"visibility"` |  |
| `"web_based_commit_signing_enabled"` |  |
| `"web_url"` |  |
| `"wiki_access_level"` |  |

Operations: Create, List, Load, Update.

API path: `/api/v4/groups/{id}/archive`

#### ApiEntitiesGroupDetail

| Field | Description |
| --- | --- |
| `"allowed_email_domains_list"` |  |
| `"archived"` |  |
| `"auto_ban_user_on_excessive_projects_download"` |  |
| `"auto_devops_enabled"` |  |
| `"auto_duo_code_review_enabled"` |  |
| `"avatar_url"` |  |
| `"created_at"` |  |
| `"custom_attribute"` |  |
| `"default_branch"` |  |
| `"default_branch_protection"` |  |
| `"default_branch_protection_default"` |  |
| `"description"` |  |
| `"duo_core_features_enabled"` |  |
| `"duo_features_enabled"` |  |
| `"emails_disabled"` |  |
| `"emails_enabled"` |  |
| `"enabled_git_access_protocol"` |  |
| `"extra_shared_runners_minutes_limit"` |  |
| `"file_template_project_id"` |  |
| `"full_name"` |  |
| `"full_path"` |  |
| `"id"` |  |
| `"ip_restriction_range"` |  |
| `"ldap_access"` |  |
| `"ldap_cn"` |  |
| `"ldap_group_link"` |  |
| `"lfs_enabled"` |  |
| `"lock_duo_features_enabled"` |  |
| `"lock_math_rendering_limits_enabled"` |  |
| `"marked_for_deletion_on"` |  |
| `"math_rendering_limits_enabled"` |  |
| `"max_artifacts_size"` |  |
| `"membership_lock"` |  |
| `"mentions_disabled"` |  |
| `"name"` |  |
| `"organization_id"` |  |
| `"parent_id"` |  |
| `"path"` |  |
| `"prevent_forking_outside_group"` |  |
| `"prevent_sharing_groups_outside_hierarchy"` |  |
| `"project"` |  |
| `"project_creation_level"` |  |
| `"repository_storage"` |  |
| `"request_access_enabled"` |  |
| `"require_two_factor_authentication"` |  |
| `"root_storage_statistic"` |  |
| `"runners_token"` |  |
| `"saml_group_link"` |  |
| `"service_access_tokens_expiration_enforced"` |  |
| `"share_with_group_lock"` |  |
| `"shared_project"` |  |
| `"shared_runners_minutes_limit"` |  |
| `"shared_runners_setting"` |  |
| `"shared_with_group"` |  |
| `"show_diff_preview_in_email"` |  |
| `"statistic"` |  |
| `"subgroup_creation_level"` |  |
| `"two_factor_grace_period"` |  |
| `"unique_project_download_limit"` |  |
| `"unique_project_download_limit_alertlist"` |  |
| `"unique_project_download_limit_allowlist"` |  |
| `"unique_project_download_limit_interval_in_second"` |  |
| `"visibility"` |  |
| `"web_based_commit_signing_enabled"` |  |
| `"web_url"` |  |
| `"wiki_access_level"` |  |

Operations: Create, Load.

API path: `/api/v4/groups/{id}/share`

#### ApiEntitiesHook

| Field | Description |
| --- | --- |
| `"alert_status"` |  |
| `"branch_filter_strategy"` |  |
| `"created_at"` |  |
| `"custom_header"` |  |
| `"custom_webhook_template"` |  |
| `"description"` |  |
| `"disabled_until"` |  |
| `"enable_ssl_verification"` |  |
| `"id"` |  |
| `"merge_requests_event"` |  |
| `"name"` |  |
| `"push_event"` |  |
| `"push_events_branch_filter"` |  |
| `"repository_update_event"` |  |
| `"tag_push_event"` |  |
| `"url"` |  |
| `"url_variable"` |  |

Operations: Create, List, Load, Update.

API path: `/api/v4/hooks`

#### ApiEntitiesIntegration

| Field | Description |
| --- | --- |
| `"active"` |  |
| `"alert_event"` |  |
| `"comment_on_event_enabled"` |  |
| `"commit_event"` |  |
| `"confidential_issues_event"` |  |
| `"confidential_note_event"` |  |
| `"created_at"` |  |
| `"deployment_event"` |  |
| `"id"` |  |
| `"incident_event"` |  |
| `"inherited"` |  |
| `"issues_event"` |  |
| `"job_event"` |  |
| `"merge_requests_event"` |  |
| `"note_event"` |  |
| `"pipeline_event"` |  |
| `"property"` |  |
| `"push_event"` |  |
| `"slug"` |  |
| `"tag_push_event"` |  |
| `"title"` |  |
| `"updated_at"` |  |
| `"vulnerability_event"` |  |
| `"wiki_page_event"` |  |

Operations: Load.

API path: `/api/v4/groups/{id}/integrations/{slug}`

#### ApiEntitiesIntegrationBasic

| Field | Description |
| --- | --- |
| `"active"` |  |
| `"alert_event"` |  |
| `"comment_on_event_enabled"` |  |
| `"commit_event"` |  |
| `"confidential_issues_event"` |  |
| `"confidential_note_event"` |  |
| `"created_at"` |  |
| `"deployment_event"` |  |
| `"id"` |  |
| `"incident_event"` |  |
| `"inherited"` |  |
| `"issues_event"` |  |
| `"job_event"` |  |
| `"merge_requests_event"` |  |
| `"note_event"` |  |
| `"pipeline_event"` |  |
| `"push_event"` |  |
| `"slug"` |  |
| `"tag_push_event"` |  |
| `"title"` |  |
| `"updated_at"` |  |
| `"vulnerability_event"` |  |
| `"wiki_page_event"` |  |

Operations: List, Update.

API path: `/api/v4/groups/{id}/integrations`

#### ApiEntitiesInvitation

| Field | Description |
| --- | --- |
| `"access_level"` |  |
| `"created_at"` |  |
| `"created_by_name"` |  |
| `"expires_at"` |  |
| `"invite_email"` |  |
| `"invite_token"` |  |
| `"user_name"` |  |

Operations: Create, List, Update.

API path: `/api/v4/groups/{id}/invitations`

#### ApiEntitiesIssuableTimeStat

| Field | Description |
| --- | --- |
| `"human_time_estimate"` |  |
| `"human_total_time_spent"` |  |
| `"time_estimate"` |  |
| `"total_time_spent"` |  |

Operations: Create, Load.

API path: `/api/v4/projects/{id}/issues/{issue_iid}/add_spent_time`

#### ApiEntitiesIssue

| Field | Description |
| --- | --- |
| `"assignee"` |  |
| `"author"` |  |
| `"blocking_issues_count"` |  |
| `"closed_at"` |  |
| `"closed_by"` |  |
| `"confidential"` |  |
| `"created_at"` |  |
| `"description"` |  |
| `"discussion_locked"` |  |
| `"downvote"` |  |
| `"due_date"` |  |
| `"epic"` |  |
| `"epic_iid"` |  |
| `"has_task"` |  |
| `"health_status"` |  |
| `"id"` |  |
| `"iid"` |  |
| `"imported"` |  |
| `"imported_from"` |  |
| `"issue_type"` |  |
| `"iteration"` |  |
| `"label"` |  |
| `"link"` |  |
| `"merge_requests_count"` |  |
| `"milestone"` |  |
| `"moved_to_id"` |  |
| `"project_id"` |  |
| `"reference"` |  |
| `"service_desk_reply_to"` |  |
| `"severity"` |  |
| `"state"` |  |
| `"subscribed"` |  |
| `"task_completion_status"` |  |
| `"task_status"` |  |
| `"time_stat"` |  |
| `"title"` |  |
| `"type"` |  |
| `"updated_at"` |  |
| `"upvote"` |  |
| `"user_notes_count"` |  |
| `"web_url"` |  |
| `"weight"` |  |

Operations: Create, List, Load, Update.

API path: `/api/v4/projects/{id}/issues/{issue_iid}/clone`

#### ApiEntitiesIssueLink

| Field | Description |
| --- | --- |
| `"link_type"` |  |
| `"source_issue"` |  |
| `"target_issue"` |  |

Operations: Create, Load.

API path: `/api/v4/projects/{id}/issues/{issue_iid}/links`

#### ApiEntitiesLicense

| Field | Description |
| --- | --- |
| `"condition"` |  |
| `"content"` |  |
| `"description"` |  |
| `"html_url"` |  |
| `"key"` |  |
| `"limitation"` |  |
| `"name"` |  |
| `"nickname"` |  |
| `"permission"` |  |
| `"popular"` |  |
| `"source_url"` |  |

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
| `"created_at"` |  |
| `"filename"` |  |
| `"id"` |  |
| `"size"` |  |
| `"uploaded_by"` |  |

Operations: List.

API path: `/api/v4/groups/{id}/uploads`

#### ApiEntitiesMember

| Field | Description |
| --- | --- |
| `"access_level"` |  |
| `"avatar_path"` |  |
| `"avatar_url"` |  |
| `"created_at"` |  |
| `"created_by"` |  |
| `"custom_attribute"` |  |
| `"email"` |  |
| `"expires_at"` |  |
| `"group_saml_identity"` |  |
| `"group_scim_identity"` |  |
| `"id"` |  |
| `"is_using_seat"` |  |
| `"key"` |  |
| `"locked"` |  |
| `"member_role"` |  |
| `"membership_state"` |  |
| `"name"` |  |
| `"override"` |  |
| `"public_email"` |  |
| `"state"` |  |
| `"username"` |  |
| `"value"` |  |
| `"web_url"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/api/v4/groups/{id}/members/{user_id}/override`

#### ApiEntitiesMerge

| Field | Description |
| --- | --- |
| `"allow_collaboration"` |  |
| `"allow_maintainer_to_push"` |  |
| `"approvals_before_merge"` |  |
| `"assignee"` |  |
| `"author"` |  |
| `"blocking_discussions_resolved"` |  |
| `"changes_count"` |  |
| `"closed_at"` |  |
| `"closed_by"` |  |
| `"created_at"` |  |
| `"description"` |  |
| `"description_html"` |  |
| `"detailed_merge_status"` |  |
| `"diff_ref"` |  |
| `"discussion_locked"` |  |
| `"diverged_commits_count"` |  |
| `"downvote"` |  |
| `"draft"` |  |
| `"first_contribution"` |  |
| `"first_deployed_to_production_at"` |  |
| `"force_remove_source_branch"` |  |
| `"has_conflict"` |  |
| `"head_pipeline"` |  |
| `"id"` |  |
| `"iid"` |  |
| `"imported"` |  |
| `"imported_from"` |  |
| `"label"` |  |
| `"latest_build_finished_at"` |  |
| `"latest_build_started_at"` |  |
| `"merge_after"` |  |
| `"merge_commit_sha"` |  |
| `"merge_error"` |  |
| `"merge_status"` |  |
| `"merge_user"` |  |
| `"merge_when_pipeline_succeed"` |  |
| `"merged_at"` |  |
| `"merged_by"` |  |
| `"milestone"` |  |
| `"pipeline"` |  |
| `"prepared_at"` |  |
| `"project_id"` |  |
| `"rebase_in_progress"` |  |
| `"reference"` |  |
| `"reviewer"` |  |
| `"sha"` |  |
| `"should_remove_source_branch"` |  |
| `"source_branch"` |  |
| `"source_project_id"` |  |
| `"squash"` |  |
| `"squash_commit_sha"` |  |
| `"squash_on_merge"` |  |
| `"state"` |  |
| `"subscribed"` |  |
| `"target_branch"` |  |
| `"target_project_id"` |  |
| `"task_completion_status"` |  |
| `"time_stat"` |  |
| `"title"` |  |
| `"title_html"` |  |
| `"updated_at"` |  |
| `"upvote"` |  |
| `"user"` |  |
| `"user_notes_count"` |  |
| `"web_url"` |  |
| `"work_in_progress"` |  |

Operations: Create, Load, Update.

API path: `/api/v4/projects/{id}/merge_requests/{merge_request_iid}/cancel_merge_when_pipeline_succeeds`

#### ApiEntitiesMergeRequestApproval

| Field | Description |
| --- | --- |
| `"approved"` |  |
| `"approved_by"` |  |
| `"user_can_approve"` |  |
| `"user_has_approved"` |  |

Operations: Create, Load.

API path: `/api/v4/projects/{id}/merge_requests/{merge_request_iid}/approve`

#### ApiEntitiesMergeRequestBasic

| Field | Description |
| --- | --- |
| `"allow_collaboration"` |  |
| `"allow_maintainer_to_push"` |  |
| `"approvals_before_merge"` |  |
| `"assignee"` |  |
| `"author"` |  |
| `"blocking_discussions_resolved"` |  |
| `"closed_at"` |  |
| `"closed_by"` |  |
| `"created_at"` |  |
| `"description"` |  |
| `"description_html"` |  |
| `"detailed_merge_status"` |  |
| `"discussion_locked"` |  |
| `"downvote"` |  |
| `"draft"` |  |
| `"force_remove_source_branch"` |  |
| `"has_conflict"` |  |
| `"id"` |  |
| `"iid"` |  |
| `"imported"` |  |
| `"imported_from"` |  |
| `"label"` |  |
| `"merge_after"` |  |
| `"merge_commit_sha"` |  |
| `"merge_status"` |  |
| `"merge_user"` |  |
| `"merge_when_pipeline_succeed"` |  |
| `"merged_at"` |  |
| `"merged_by"` |  |
| `"milestone"` |  |
| `"prepared_at"` |  |
| `"project_id"` |  |
| `"reference"` |  |
| `"reviewer"` |  |
| `"sha"` |  |
| `"should_remove_source_branch"` |  |
| `"source_branch"` |  |
| `"source_project_id"` |  |
| `"squash"` |  |
| `"squash_commit_sha"` |  |
| `"squash_on_merge"` |  |
| `"state"` |  |
| `"target_branch"` |  |
| `"target_project_id"` |  |
| `"task_completion_status"` |  |
| `"time_stat"` |  |
| `"title"` |  |
| `"title_html"` |  |
| `"updated_at"` |  |
| `"upvote"` |  |
| `"user_notes_count"` |  |
| `"web_url"` |  |
| `"work_in_progress"` |  |

Operations: List, Load.

API path: `/api/v4/projects/{id}/deployments/{deployment_id}/merge_requests`

#### ApiEntitiesMergeRequestChange

| Field | Description |
| --- | --- |
| `"allow_collaboration"` |  |
| `"allow_maintainer_to_push"` |  |
| `"approvals_before_merge"` |  |
| `"assignee"` |  |
| `"author"` |  |
| `"blocking_discussions_resolved"` |  |
| `"change"` |  |
| `"changes_count"` |  |
| `"closed_at"` |  |
| `"closed_by"` |  |
| `"created_at"` |  |
| `"description"` |  |
| `"description_html"` |  |
| `"detailed_merge_status"` |  |
| `"diff_ref"` |  |
| `"discussion_locked"` |  |
| `"diverged_commits_count"` |  |
| `"downvote"` |  |
| `"draft"` |  |
| `"first_contribution"` |  |
| `"first_deployed_to_production_at"` |  |
| `"force_remove_source_branch"` |  |
| `"has_conflict"` |  |
| `"head_pipeline"` |  |
| `"id"` |  |
| `"iid"` |  |
| `"imported"` |  |
| `"imported_from"` |  |
| `"label"` |  |
| `"latest_build_finished_at"` |  |
| `"latest_build_started_at"` |  |
| `"merge_after"` |  |
| `"merge_commit_sha"` |  |
| `"merge_error"` |  |
| `"merge_status"` |  |
| `"merge_user"` |  |
| `"merge_when_pipeline_succeed"` |  |
| `"merged_at"` |  |
| `"merged_by"` |  |
| `"milestone"` |  |
| `"overflow"` |  |
| `"pipeline"` |  |
| `"prepared_at"` |  |
| `"project_id"` |  |
| `"rebase_in_progress"` |  |
| `"reference"` |  |
| `"reviewer"` |  |
| `"sha"` |  |
| `"should_remove_source_branch"` |  |
| `"source_branch"` |  |
| `"source_project_id"` |  |
| `"squash"` |  |
| `"squash_commit_sha"` |  |
| `"squash_on_merge"` |  |
| `"state"` |  |
| `"subscribed"` |  |
| `"target_branch"` |  |
| `"target_project_id"` |  |
| `"task_completion_status"` |  |
| `"time_stat"` |  |
| `"title"` |  |
| `"title_html"` |  |
| `"updated_at"` |  |
| `"upvote"` |  |
| `"user"` |  |
| `"user_notes_count"` |  |
| `"web_url"` |  |
| `"work_in_progress"` |  |

Operations: Load.

API path: `/api/v4/projects/{id}/merge_requests/{merge_request_iid}/changes`

#### ApiEntitiesMergeRequestDiff

| Field | Description |
| --- | --- |
| `"base_commit_sha"` |  |
| `"created_at"` |  |
| `"head_commit_sha"` |  |
| `"id"` |  |
| `"merge_request_id"` |  |
| `"patch_id_sha"` |  |
| `"real_size"` |  |
| `"start_commit_sha"` |  |
| `"state"` |  |

Operations: List.

API path: `/api/v4/projects/{id}/merge_requests/{merge_request_iid}/versions`

#### ApiEntitiesMergeRequestDiffFull

| Field | Description |
| --- | --- |
| `"base_commit_sha"` |  |
| `"commit"` |  |
| `"created_at"` |  |
| `"diff"` |  |
| `"head_commit_sha"` |  |
| `"id"` |  |
| `"merge_request_id"` |  |
| `"patch_id_sha"` |  |
| `"real_size"` |  |
| `"start_commit_sha"` |  |
| `"state"` |  |

Operations: Load.

API path: `/api/v4/projects/{id}/merge_requests/{merge_request_iid}/versions/{version_id}`

#### ApiEntitiesMergeRequestReviewer

| Field | Description |
| --- | --- |
| `"created_at"` |  |
| `"state"` |  |
| `"user"` |  |

Operations: Load.

API path: `/api/v4/projects/{id}/merge_requests/{merge_request_iid}/reviewers`

#### ApiEntitiesMetricImage

| Field | Description |
| --- | --- |
| `"created_at"` |  |
| `"file_path"` |  |
| `"filename"` |  |
| `"id"` |  |
| `"url"` |  |
| `"url_text"` |  |

Operations: Create, List, Update.

API path: `/api/v4/projects/{id}/alert_management_alerts/{alert_iid}/metric_images`

#### ApiEntitiesMrNote

| Field | Description |
| --- | --- |
| `"author"` |  |
| `"note"` |  |

Operations: Load.

API path: `/api/v4/projects/{id}/merge_requests/{merge_request_iid}/closes_issues`

#### ApiEntitiesNamespace

| Field | Description |
| --- | --- |
| `"additional_purchased_storage_ends_on"` |  |
| `"additional_purchased_storage_size"` |  |
| `"avatar_url"` |  |
| `"billable_members_count"` |  |
| `"end_date"` |  |
| `"extra_shared_runners_minutes_limit"` |  |
| `"full_path"` |  |
| `"id"` |  |
| `"kind"` |  |
| `"max_seats_used"` |  |
| `"max_seats_used_changed_at"` |  |
| `"members_count_with_descendant"` |  |
| `"name"` |  |
| `"parent_id"` |  |
| `"path"` |  |
| `"plan"` |  |
| `"projects_count"` |  |
| `"root_repository_size"` |  |
| `"seats_in_use"` |  |
| `"shared_runners_minutes_limit"` |  |
| `"trial"` |  |
| `"trial_ends_on"` |  |
| `"web_url"` |  |

Operations: List, Load, Update.

API path: `/api/v4/namespaces`

#### ApiEntitiesNamespaceExistence

| Field | Description |
| --- | --- |
| `"exist"` |  |
| `"suggest"` |  |

Operations: List.

API path: `/api/v4/namespaces/{id}/exists`

#### ApiEntitiesNamespacesStorageLimitExclusion

| Field | Description |
| --- | --- |
| `"id"` |  |
| `"namespace_id"` |  |
| `"namespace_name"` |  |
| `"reason"` |  |

Operations: Create, Load.

API path: `/api/v4/namespaces/{id}/storage/limit_exclusion`

#### ApiEntitiesNpmPackage

| Field | Description |
| --- | --- |
| `"dist_tag"` |  |
| `"name"` |  |
| `"version"` |  |

Operations: Load.

API path: `/api/v4/groups/{id}/-/packages/npm/*package_name`

#### ApiEntitiesNpmPackageTag

| Field | Description |
| --- | --- |
| `"dist_tag"` |  |

Operations: Load.

API path: `/api/v4/groups/{id}/-/packages/npm/-/package/*package_name/dist-tags`

#### ApiEntitiesNugetPackagesVersion

| Field | Description |
| --- | --- |
| `"version"` |  |

Operations: List.

API path: `/api/v4/projects/{id}/packages/nuget/download/*package_name/index`

#### ApiEntitiesNugetSearchResult

| Field | Description |
| --- | --- |
| `"author"` |  |
| `"description"` |  |
| `"icon_url"` |  |
| `"id"` |  |
| `"license_url"` |  |
| `"project_url"` |  |
| `"summary"` |  |
| `"tag"` |  |
| `"title"` |  |
| `"total_download"` |  |
| `"type"` |  |
| `"verified"` |  |
| `"version"` |  |

Operations: List.

API path: `/api/v4/groups/{id}/-/packages/nuget/query`

#### ApiEntitiesNugetServiceIndex

| Field | Description |
| --- | --- |
| `"resource"` |  |
| `"version"` |  |

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
| `"conan_package_name"` |  |
| `"created_at"` |  |
| `"id"` |  |
| `"last_downloaded_at"` |  |
| `"link"` |  |
| `"name"` |  |
| `"package_type"` |  |
| `"pipeline"` |  |
| `"project_id"` |  |
| `"project_path"` |  |
| `"status"` |  |
| `"tag"` |  |
| `"version"` |  |

Operations: List, Load.

API path: `/api/v4/groups/{id}/packages`

#### ApiEntitiesPackageFile

| Field | Description |
| --- | --- |
| `"created_at"` |  |
| `"file_md5"` |  |
| `"file_name"` |  |
| `"file_sha1"` |  |
| `"file_sha256"` |  |
| `"id"` |  |
| `"package_id"` |  |
| `"pipeline"` |  |
| `"size"` |  |

Operations: List.

API path: `/api/v4/projects/{id}/packages/{package_id}/package_files`

#### ApiEntitiesPackagePipeline

| Field | Description |
| --- | --- |
| `"created_at"` |  |
| `"id"` |  |
| `"iid"` |  |
| `"project_id"` |  |
| `"ref"` |  |
| `"sha"` |  |
| `"source"` |  |
| `"status"` |  |
| `"updated_at"` |  |
| `"user"` |  |
| `"web_url"` |  |

Operations: Load.

API path: `/api/v4/projects/{id}/packages/{package_id}/pipelines`

#### ApiEntitiesPackagesConanFilesList

| Field | Description |
| --- | --- |
| `"file"` |  |

Operations: Load.

API path: `/api/v4/projects/{id}/packages/conan/v2/conans/{package_name}/{package_version}/{package_username}/{package_channel}/revisions/{recipe_revision}/packages/{conan_package_reference}/revisions/{package_revision}/files`

#### ApiEntitiesPackagesConanPackageManifest

| Field | Description |
| --- | --- |
| `"package_url"` |  |

Operations: Load.

API path: `/api/v4/projects/{id}/packages/conan/v1/conans/{package_name}/{package_version}/{package_username}/{package_channel}/packages/{conan_package_reference}/digest`

#### ApiEntitiesPackagesConanPackageRevision

| Field | Description |
| --- | --- |
| `"revision"` |  |
| `"time"` |  |

Operations: List.

API path: `/api/v4/projects/{id}/packages/conan/v2/conans/{package_name}/{package_version}/{package_username}/{package_channel}/revisions/{recipe_revision}/packages/{conan_package_reference}/revisions`

#### ApiEntitiesPackagesConanPackageSnapshot

| Field | Description |
| --- | --- |
| `"package_snapshot"` |  |

Operations: Load.

API path: `/api/v4/projects/{id}/packages/conan/v1/conans/{package_name}/{package_version}/{package_username}/{package_channel}/packages/{conan_package_reference}`

#### ApiEntitiesPackagesConanRecipeManifest

| Field | Description |
| --- | --- |
| `"recipe_url"` |  |

Operations: Load.

API path: `/api/v4/projects/{id}/packages/conan/v1/conans/{package_name}/{package_version}/{package_username}/{package_channel}/digest`

#### ApiEntitiesPackagesConanRecipeRevision

| Field | Description |
| --- | --- |
| `"revision"` |  |
| `"time"` |  |

Operations: List.

API path: `/api/v4/projects/{id}/packages/conan/v2/conans/{package_name}/{package_version}/{package_username}/{package_channel}/revisions`

#### ApiEntitiesPackagesConanRecipeSnapshot

| Field | Description |
| --- | --- |
| `"recipe_snapshot"` |  |

Operations: Load.

API path: `/api/v4/projects/{id}/packages/conan/v1/conans/{package_name}/{package_version}/{package_username}/{package_channel}`

#### ApiEntitiesPackagesConanRevision

| Field | Description |
| --- | --- |
| `"revision"` |  |
| `"time"` |  |

Operations: Load.

API path: `/api/v4/projects/{id}/packages/conan/v2/conans/{package_name}/{package_version}/{package_username}/{package_channel}/revisions/{recipe_revision}/packages/{conan_package_reference}/latest`

#### ApiEntitiesPackagesConanUploadUrl

| Field | Description |
| --- | --- |
| `"upload_url"` |  |

Operations: Create.

API path: `/api/v4/projects/{id}/packages/conan/v1/conans/{package_name}/{package_version}/{package_username}/{package_channel}/packages/{conan_package_reference}/upload_urls`

#### ApiEntitiesPackagesDebianDistribution

| Field | Description |
| --- | --- |
| `"architecture"` |  |
| `"codename"` |  |
| `"component"` |  |
| `"description"` |  |
| `"id"` |  |
| `"label"` |  |
| `"origin"` |  |
| `"suite"` |  |
| `"valid_time_duration_second"` |  |
| `"version"` |  |

Operations: Create, List, Load, Update.

API path: `/api/v4/groups/{id}/-/debian_distributions`

#### ApiEntitiesPagesDomain

| Field | Description |
| --- | --- |
| `"auto_ssl_enabled"` |  |
| `"certificate"` |  |
| `"domain"` |  |
| `"enabled_until"` |  |
| `"url"` |  |
| `"verification_code"` |  |
| `"verified"` |  |

Operations: Create, List, Load, Update.

API path: `/api/v4/projects/{id}/pages/domains`

#### ApiEntitiesPagesDomainBasic

| Field | Description |
| --- | --- |
| `"auto_ssl_enabled"` |  |
| `"certificate_expiration"` |  |
| `"domain"` |  |
| `"enabled_until"` |  |
| `"project_id"` |  |
| `"url"` |  |
| `"verification_code"` |  |
| `"verified"` |  |

Operations: Load.

API path: `/api/v4/pages/domains`

#### ApiEntitiesPersonalAccessToken

| Field | Description |
| --- | --- |
| `"active"` |  |
| `"created_at"` |  |
| `"description"` |  |
| `"expires_at"` |  |
| `"id"` |  |
| `"last_used_at"` |  |
| `"name"` |  |
| `"revoked"` |  |
| `"scope"` |  |
| `"user_id"` |  |

Operations: List.

API path: `/api/v4/personal_access_tokens/self/associations`

#### ApiEntitiesPersonalAccessTokenWithLastUsedIp

| Field | Description |
| --- | --- |
| `"active"` |  |
| `"created_at"` |  |
| `"description"` |  |
| `"expires_at"` |  |
| `"id"` |  |
| `"last_used_at"` |  |
| `"last_used_ip"` |  |
| `"name"` |  |
| `"revoked"` |  |
| `"scope"` |  |
| `"user_id"` |  |

Operations: List, Load.

API path: `/api/v4/personal_access_tokens`

#### ApiEntitiesPersonalAccessTokenWithToken

| Field | Description |
| --- | --- |
| `"active"` |  |
| `"created_at"` |  |
| `"description"` |  |
| `"expires_at"` |  |
| `"id"` |  |
| `"last_used_at"` |  |
| `"name"` |  |
| `"revoked"` |  |
| `"scope"` |  |
| `"token"` |  |
| `"user_id"` |  |

Operations: Create.

API path: `/api/v4/personal_access_tokens/{id}/rotate`

#### ApiEntitiesPersonalSnippet

| Field | Description |
| --- | --- |
| `"author"` |  |
| `"created_at"` |  |
| `"description"` |  |
| `"file"` |  |
| `"file_name"` |  |
| `"http_url_to_repo"` |  |
| `"id"` |  |
| `"imported"` |  |
| `"imported_from"` |  |
| `"project_id"` |  |
| `"raw_url"` |  |
| `"repository_storage"` |  |
| `"ssh_url_to_repo"` |  |
| `"title"` |  |
| `"updated_at"` |  |
| `"visibility"` |  |
| `"web_url"` |  |

Operations: Create, List, Load, Update.

API path: `/api/v4/snippets`

#### ApiEntitiesPlanLimit

| Field | Description |
| --- | --- |
| `"ci_active_job"` |  |
| `"ci_instance_level_variable"` |  |
| `"ci_needs_size_limit"` |  |
| `"ci_pipeline_schedule"` |  |
| `"ci_pipeline_size"` |  |
| `"ci_project_subscription"` |  |
| `"ci_registered_group_runner"` |  |
| `"ci_registered_project_runner"` |  |
| `"conan_max_file_size"` |  |
| `"dotenv_size"` |  |
| `"dotenv_variable"` |  |
| `"enforcement_limit"` |  |
| `"generic_packages_max_file_size"` |  |
| `"helm_max_file_size"` |  |
| `"limits_history"` |  |
| `"maven_max_file_size"` |  |
| `"notification_limit"` |  |
| `"npm_max_file_size"` |  |
| `"nuget_max_file_size"` |  |
| `"pipeline_hierarchy_size"` |  |
| `"pypi_max_file_size"` |  |
| `"storage_size_limit"` |  |
| `"terraform_module_max_file_size"` |  |

Operations: Load, Update.

API path: `/api/v4/application/plan_limits`

#### ApiEntitiesProject

| Field | Description |
| --- | --- |
| `"allow_merge_on_skipped_pipeline"` |  |
| `"allow_pipeline_trigger_approve_deployment"` |  |
| `"analytics_access_level"` |  |
| `"approvals_before_merge"` |  |
| `"archived"` |  |
| `"auto_cancel_pending_pipeline"` |  |
| `"auto_devops_deploy_strategy"` |  |
| `"auto_devops_enabled"` |  |
| `"auto_duo_code_review_enabled"` |  |
| `"autoclose_referenced_issue"` |  |
| `"avatar_url"` |  |
| `"build_git_strategy"` |  |
| `"build_timeout"` |  |
| `"builds_access_level"` |  |
| `"can_create_merge_request_in"` |  |
| `"ci_allow_fork_pipelines_to_run_in_parent_project"` |  |
| `"ci_config_path"` |  |
| `"ci_default_git_depth"` |  |
| `"ci_delete_pipelines_in_second"` |  |
| `"ci_forward_deployment_enabled"` |  |
| `"ci_forward_deployment_rollback_allowed"` |  |
| `"ci_id_token_sub_claim_component"` |  |
| `"ci_job_token_scope_enabled"` |  |
| `"ci_pipeline_variables_minimum_override_role"` |  |
| `"ci_push_repository_for_job_token_allowed"` |  |
| `"ci_restrict_pipeline_cancellation_role"` |  |
| `"ci_separated_cache"` |  |
| `"compliance_framework"` |  |
| `"container_expiration_policy"` |  |
| `"container_registry_access_level"` |  |
| `"container_registry_enabled"` |  |
| `"container_registry_image_prefix"` |  |
| `"created_at"` |  |
| `"creator_id"` |  |
| `"custom_attribute"` |  |
| `"default_branch"` |  |
| `"description"` |  |
| `"description_html"` |  |
| `"duo_remote_flows_enabled"` |  |
| `"emails_disabled"` |  |
| `"emails_enabled"` |  |
| `"empty_repo"` |  |
| `"enforce_auth_checks_on_upload"` |  |
| `"environments_access_level"` |  |
| `"external_authorization_classification_label"` |  |
| `"feature_flags_access_level"` |  |
| `"forked_from_project"` |  |
| `"forking_access_level"` |  |
| `"forks_count"` |  |
| `"group_runners_enabled"` |  |
| `"http_url_to_repo"` |  |
| `"id"` |  |
| `"import_error"` |  |
| `"import_status"` |  |
| `"import_type"` |  |
| `"import_url"` |  |
| `"infrastructure_access_level"` |  |
| `"issue_branch_template"` |  |
| `"issues_access_level"` |  |
| `"issues_enabled"` |  |
| `"issues_template"` |  |
| `"jobs_enabled"` |  |
| `"keep_latest_artifact"` |  |
| `"last_activity_at"` |  |
| `"lfs_enabled"` |  |
| `"license"` |  |
| `"license_url"` |  |
| `"link"` |  |
| `"marked_for_deletion_at"` |  |
| `"marked_for_deletion_on"` |  |
| `"max_artifacts_size"` |  |
| `"merge_commit_template"` |  |
| `"merge_method"` |  |
| `"merge_pipelines_enabled"` |  |
| `"merge_request_title_regex"` |  |
| `"merge_request_title_regex_description"` |  |
| `"merge_requests_access_level"` |  |
| `"merge_requests_enabled"` |  |
| `"merge_requests_template"` |  |
| `"merge_trains_enabled"` |  |
| `"merge_trains_skip_train_allowed"` |  |
| `"mirror"` |  |
| `"mirror_overwrites_diverged_branch"` |  |
| `"mirror_trigger_build"` |  |
| `"mirror_user_id"` |  |
| `"model_experiments_access_level"` |  |
| `"model_registry_access_level"` |  |
| `"monitor_access_level"` |  |
| `"mr_default_target_self"` |  |
| `"name"` |  |
| `"name_with_namespace"` |  |
| `"namespace"` |  |
| `"only_allow_merge_if_all_discussions_are_resolved"` |  |
| `"only_allow_merge_if_all_status_checks_passed"` |  |
| `"only_allow_merge_if_pipeline_succeed"` |  |
| `"only_mirror_protected_branch"` |  |
| `"open_issues_count"` |  |
| `"owner"` |  |
| `"package_registry_access_level"` |  |
| `"packages_enabled"` |  |
| `"pages_access_level"` |  |
| `"path"` |  |
| `"path_with_namespace"` |  |
| `"pre_receive_secret_detection_enabled"` |  |
| `"prevent_merge_without_jira_issue"` |  |
| `"printing_merge_request_link_enabled"` |  |
| `"public_job"` |  |
| `"readme_url"` |  |
| `"releases_access_level"` |  |
| `"remove_source_branch_after_merge"` |  |
| `"repository_access_level"` |  |
| `"repository_object_format"` |  |
| `"repository_storage"` |  |
| `"request_access_enabled"` |  |
| `"requirements_access_level"` |  |
| `"requirements_enabled"` |  |
| `"resolve_outdated_diff_discussion"` |  |
| `"resource_group_default_process_mode"` |  |
| `"restrict_user_defined_variable"` |  |
| `"runner_token_expiration_interval"` |  |
| `"runners_token"` |  |
| `"secret_push_protection_enabled"` |  |
| `"security_and_compliance_access_level"` |  |
| `"security_and_compliance_enabled"` |  |
| `"service_desk_address"` |  |
| `"service_desk_enabled"` |  |
| `"shared_runners_enabled"` |  |
| `"shared_with_group"` |  |
| `"show_diff_preview_in_email"` |  |
| `"snippets_access_level"` |  |
| `"snippets_enabled"` |  |
| `"spp_repository_pipeline_access"` |  |
| `"squash_commit_template"` |  |
| `"squash_option"` |  |
| `"ssh_url_to_repo"` |  |
| `"star_count"` |  |
| `"statistic"` |  |
| `"suggestion_commit_message"` |  |
| `"tag_list"` |  |
| `"topic"` |  |
| `"updated_at"` |  |
| `"visibility"` |  |
| `"warn_about_potentially_unwanted_character"` |  |
| `"web_based_commit_signing_enabled"` |  |
| `"web_url"` |  |
| `"wiki_access_level"` |  |
| `"wiki_enabled"` |  |

Operations: Create, List, Update.

API path: `/api/v4/projects/{id}/fork/{forked_from_id}`

#### ApiEntitiesProjectDailyStatistic

| Field | Description |
| --- | --- |
| `"fetch"` |  |

Operations: Load.

API path: `/api/v4/projects/{id}/statistics`

#### ApiEntitiesProjectExportStatus

| Field | Description |
| --- | --- |
| `"created_at"` |  |
| `"description"` |  |
| `"export_status"` |  |
| `"id"` |  |
| `"link"` |  |
| `"name"` |  |
| `"name_with_namespace"` |  |
| `"path"` |  |
| `"path_with_namespace"` |  |

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
| `"alert_status"` |  |
| `"branch_filter_strategy"` |  |
| `"confidential_issues_event"` |  |
| `"confidential_note_event"` |  |
| `"created_at"` |  |
| `"custom_header"` |  |
| `"custom_webhook_template"` |  |
| `"deployment_event"` |  |
| `"description"` |  |
| `"disabled_until"` |  |
| `"emoji_event"` |  |
| `"enable_ssl_verification"` |  |
| `"feature_flag_event"` |  |
| `"id"` |  |
| `"issues_event"` |  |
| `"job_event"` |  |
| `"merge_requests_event"` |  |
| `"milestone_event"` |  |
| `"name"` |  |
| `"note_event"` |  |
| `"pipeline_event"` |  |
| `"project_id"` |  |
| `"push_event"` |  |
| `"push_events_branch_filter"` |  |
| `"releases_event"` |  |
| `"repository_update_event"` |  |
| `"resource_access_token_event"` |  |
| `"tag_push_event"` |  |
| `"url"` |  |
| `"url_variable"` |  |
| `"vulnerability_event"` |  |
| `"wiki_page_event"` |  |

Operations: Create, List, Load, Update.

API path: `/api/v4/projects/{id}/hooks`

#### ApiEntitiesProjectImportStatus

| Field | Description |
| --- | --- |
| `"created_at"` |  |
| `"exception_class"` |  |
| `"exception_message"` |  |
| `"id"` |  |
| `"line_number"` |  |
| `"relation_name"` |  |
| `"source"` |  |

Operations: Create, List.

API path: `/api/v4/projects/import`

#### ApiEntitiesProjectJobTokenScope

| Field | Description |
| --- | --- |
| `"inbound_enabled"` |  |
| `"outbound_enabled"` |  |

Operations: Load.

API path: `/api/v4/projects/{id}/job_token_scope`

#### ApiEntitiesProjectRepositoryStorage

| Field | Description |
| --- | --- |
| `"created_at"` |  |
| `"disk_path"` |  |
| `"project_id"` |  |
| `"repository_storage"` |  |

Operations: Load.

API path: `/api/v4/projects/{id}/storage`

#### ApiEntitiesProjectSnippet

| Field | Description |
| --- | --- |
| `"author"` |  |
| `"created_at"` |  |
| `"description"` |  |
| `"file"` |  |
| `"file_name"` |  |
| `"http_url_to_repo"` |  |
| `"id"` |  |
| `"imported"` |  |
| `"imported_from"` |  |
| `"project_id"` |  |
| `"raw_url"` |  |
| `"repository_storage"` |  |
| `"ssh_url_to_repo"` |  |
| `"title"` |  |
| `"updated_at"` |  |
| `"visibility"` |  |
| `"web_url"` |  |

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
| `"allow_merge_on_skipped_pipeline"` |  |
| `"allow_pipeline_trigger_approve_deployment"` |  |
| `"analytics_access_level"` |  |
| `"approvals_before_merge"` |  |
| `"archived"` |  |
| `"auto_cancel_pending_pipeline"` |  |
| `"auto_devops_deploy_strategy"` |  |
| `"auto_devops_enabled"` |  |
| `"auto_duo_code_review_enabled"` |  |
| `"autoclose_referenced_issue"` |  |
| `"avatar_url"` |  |
| `"build_git_strategy"` |  |
| `"build_timeout"` |  |
| `"builds_access_level"` |  |
| `"can_create_merge_request_in"` |  |
| `"ci_allow_fork_pipelines_to_run_in_parent_project"` |  |
| `"ci_config_path"` |  |
| `"ci_default_git_depth"` |  |
| `"ci_delete_pipelines_in_second"` |  |
| `"ci_forward_deployment_enabled"` |  |
| `"ci_forward_deployment_rollback_allowed"` |  |
| `"ci_id_token_sub_claim_component"` |  |
| `"ci_job_token_scope_enabled"` |  |
| `"ci_pipeline_variables_minimum_override_role"` |  |
| `"ci_push_repository_for_job_token_allowed"` |  |
| `"ci_restrict_pipeline_cancellation_role"` |  |
| `"ci_separated_cache"` |  |
| `"compliance_framework"` |  |
| `"container_expiration_policy"` |  |
| `"container_registry_access_level"` |  |
| `"container_registry_enabled"` |  |
| `"container_registry_image_prefix"` |  |
| `"created_at"` |  |
| `"creator_id"` |  |
| `"custom_attribute"` |  |
| `"default_branch"` |  |
| `"description"` |  |
| `"description_html"` |  |
| `"duo_remote_flows_enabled"` |  |
| `"emails_disabled"` |  |
| `"emails_enabled"` |  |
| `"empty_repo"` |  |
| `"enforce_auth_checks_on_upload"` |  |
| `"environments_access_level"` |  |
| `"external_authorization_classification_label"` |  |
| `"feature_flags_access_level"` |  |
| `"forked_from_project"` |  |
| `"forking_access_level"` |  |
| `"forks_count"` |  |
| `"group_runners_enabled"` |  |
| `"http_url_to_repo"` |  |
| `"id"` |  |
| `"import_error"` |  |
| `"import_status"` |  |
| `"import_type"` |  |
| `"import_url"` |  |
| `"infrastructure_access_level"` |  |
| `"issue_branch_template"` |  |
| `"issues_access_level"` |  |
| `"issues_enabled"` |  |
| `"issues_template"` |  |
| `"jobs_enabled"` |  |
| `"keep_latest_artifact"` |  |
| `"last_activity_at"` |  |
| `"lfs_enabled"` |  |
| `"license"` |  |
| `"license_url"` |  |
| `"link"` |  |
| `"marked_for_deletion_at"` |  |
| `"marked_for_deletion_on"` |  |
| `"max_artifacts_size"` |  |
| `"merge_commit_template"` |  |
| `"merge_method"` |  |
| `"merge_pipelines_enabled"` |  |
| `"merge_request_title_regex"` |  |
| `"merge_request_title_regex_description"` |  |
| `"merge_requests_access_level"` |  |
| `"merge_requests_enabled"` |  |
| `"merge_requests_template"` |  |
| `"merge_trains_enabled"` |  |
| `"merge_trains_skip_train_allowed"` |  |
| `"mirror"` |  |
| `"mirror_overwrites_diverged_branch"` |  |
| `"mirror_trigger_build"` |  |
| `"mirror_user_id"` |  |
| `"model_experiments_access_level"` |  |
| `"model_registry_access_level"` |  |
| `"monitor_access_level"` |  |
| `"mr_default_target_self"` |  |
| `"name"` |  |
| `"name_with_namespace"` |  |
| `"namespace"` |  |
| `"only_allow_merge_if_all_discussions_are_resolved"` |  |
| `"only_allow_merge_if_all_status_checks_passed"` |  |
| `"only_allow_merge_if_pipeline_succeed"` |  |
| `"only_mirror_protected_branch"` |  |
| `"open_issues_count"` |  |
| `"owner"` |  |
| `"package_registry_access_level"` |  |
| `"packages_enabled"` |  |
| `"pages_access_level"` |  |
| `"path"` |  |
| `"path_with_namespace"` |  |
| `"permission"` |  |
| `"pre_receive_secret_detection_enabled"` |  |
| `"prevent_merge_without_jira_issue"` |  |
| `"printing_merge_request_link_enabled"` |  |
| `"public_job"` |  |
| `"readme_url"` |  |
| `"releases_access_level"` |  |
| `"remove_source_branch_after_merge"` |  |
| `"repository_access_level"` |  |
| `"repository_object_format"` |  |
| `"repository_storage"` |  |
| `"request_access_enabled"` |  |
| `"requirements_access_level"` |  |
| `"requirements_enabled"` |  |
| `"resolve_outdated_diff_discussion"` |  |
| `"resource_group_default_process_mode"` |  |
| `"restrict_user_defined_variable"` |  |
| `"runner_token_expiration_interval"` |  |
| `"runners_token"` |  |
| `"secret_push_protection_enabled"` |  |
| `"security_and_compliance_access_level"` |  |
| `"security_and_compliance_enabled"` |  |
| `"service_desk_address"` |  |
| `"service_desk_enabled"` |  |
| `"shared_runners_enabled"` |  |
| `"shared_with_group"` |  |
| `"show_diff_preview_in_email"` |  |
| `"snippets_access_level"` |  |
| `"snippets_enabled"` |  |
| `"spp_repository_pipeline_access"` |  |
| `"squash_commit_template"` |  |
| `"squash_option"` |  |
| `"ssh_url_to_repo"` |  |
| `"star_count"` |  |
| `"statistic"` |  |
| `"suggestion_commit_message"` |  |
| `"tag_list"` |  |
| `"topic"` |  |
| `"updated_at"` |  |
| `"visibility"` |  |
| `"warn_about_potentially_unwanted_character"` |  |
| `"web_based_commit_signing_enabled"` |  |
| `"web_url"` |  |
| `"wiki_access_level"` |  |
| `"wiki_enabled"` |  |

Operations: Load.

API path: `/api/v4/projects/{id}`

#### ApiEntitiesProjectsContainerRegistryProtectionRule

| Field | Description |
| --- | --- |
| `"id"` |  |
| `"minimum_access_level_for_delete"` |  |
| `"minimum_access_level_for_push"` |  |
| `"project_id"` |  |
| `"repository_path_pattern"` |  |

Operations: Create, List, Update.

API path: `/api/v4/projects/{id}/registry/protection/repository/rules`

#### ApiEntitiesProjectsPackagesProtectionRule

| Field | Description |
| --- | --- |
| `"id"` |  |
| `"minimum_access_level_for_delete"` |  |
| `"minimum_access_level_for_push"` |  |
| `"package_name_pattern"` |  |
| `"package_type"` |  |
| `"project_id"` |  |

Operations: Create, List, Update.

API path: `/api/v4/projects/{id}/packages/protection/rules`

#### ApiEntitiesProjectsTopic

| Field | Description |
| --- | --- |
| `"avatar_url"` |  |
| `"description"` |  |
| `"id"` |  |
| `"name"` |  |
| `"organization_id"` |  |
| `"title"` |  |
| `"total_projects_count"` |  |

Operations: Create, Load, Update.

API path: `/api/v4/topics`

#### ApiEntitiesProtectedBranch

| Field | Description |
| --- | --- |
| `"allow_force_push"` |  |
| `"code_owner_approval_required"` |  |
| `"id"` |  |
| `"inherited"` |  |
| `"merge_access_level"` |  |
| `"name"` |  |
| `"push_access_level"` |  |
| `"unprotect_access_level"` |  |

Operations: Create, List, Load, Update.

API path: `/api/v4/projects/{id}/protected_branches`

#### ApiEntitiesProtectedTag

| Field | Description |
| --- | --- |
| `"create_access_level"` |  |
| `"name"` |  |

Operations: Create, List, Load.

API path: `/api/v4/projects/{id}/protected_tags`

#### ApiEntitiesPublicGroupDetail

| Field | Description |
| --- | --- |
| `"avatar_url"` |  |
| `"full_name"` |  |
| `"full_path"` |  |
| `"id"` |  |
| `"name"` |  |
| `"web_url"` |  |

Operations: List.

API path: `/api/v4/projects/{id}/groups`

#### ApiEntitiesRelatedIssue

| Field | Description |
| --- | --- |
| `"assignee"` |  |
| `"author"` |  |
| `"blocking_issues_count"` |  |
| `"closed_at"` |  |
| `"closed_by"` |  |
| `"confidential"` |  |
| `"created_at"` |  |
| `"description"` |  |
| `"discussion_locked"` |  |
| `"downvote"` |  |
| `"due_date"` |  |
| `"epic"` |  |
| `"epic_iid"` |  |
| `"has_task"` |  |
| `"health_status"` |  |
| `"id"` |  |
| `"iid"` |  |
| `"imported"` |  |
| `"imported_from"` |  |
| `"issue_link_id"` |  |
| `"issue_type"` |  |
| `"iteration"` |  |
| `"label"` |  |
| `"link"` |  |
| `"link_created_at"` |  |
| `"link_type"` |  |
| `"link_updated_at"` |  |
| `"merge_requests_count"` |  |
| `"milestone"` |  |
| `"moved_to_id"` |  |
| `"project_id"` |  |
| `"reference"` |  |
| `"service_desk_reply_to"` |  |
| `"severity"` |  |
| `"state"` |  |
| `"subscribed"` |  |
| `"task_completion_status"` |  |
| `"task_status"` |  |
| `"time_stat"` |  |
| `"title"` |  |
| `"type"` |  |
| `"updated_at"` |  |
| `"upvote"` |  |
| `"user_notes_count"` |  |
| `"web_url"` |  |
| `"weight"` |  |

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
| `"asset"` |  |
| `"author"` |  |
| `"commit"` |  |
| `"commit_path"` |  |
| `"created_at"` |  |
| `"description"` |  |
| `"description_html"` |  |
| `"evidence"` |  |
| `"link"` |  |
| `"milestone"` |  |
| `"name"` |  |
| `"released_at"` |  |
| `"tag_name"` |  |
| `"tag_path"` |  |
| `"upcoming_release"` |  |

Operations: Create, List, Load, Update.

API path: `/api/v4/projects/{id}/releases`

#### ApiEntitiesReleasesLink

| Field | Description |
| --- | --- |
| `"direct_asset_url"` |  |
| `"id"` |  |
| `"link_type"` |  |
| `"name"` |  |
| `"url"` |  |

Operations: Create, List, Load, Update.

API path: `/api/v4/projects/{id}/releases/{tag_name}/assets/links`

#### ApiEntitiesRemoteMirror

| Field | Description |
| --- | --- |
| `"auth_method"` |  |
| `"enabled"` |  |
| `"host_key"` |  |
| `"id"` |  |
| `"keep_divergent_ref"` |  |
| `"last_error"` |  |
| `"last_successful_update_at"` |  |
| `"last_update_at"` |  |
| `"last_update_started_at"` |  |
| `"mirror_branch_regex"` |  |
| `"only_protected_branch"` |  |
| `"update_status"` |  |
| `"url"` |  |

Operations: Create, List, Load, Update.

API path: `/api/v4/projects/{id}/remote_mirrors`

#### ApiEntitiesRepositoryHealth

| Field | Description |
| --- | --- |
| `"alternate"` |  |
| `"bitmap"` |  |
| `"commit_graph"` |  |
| `"is_object_pool"` |  |
| `"last_full_repack"` |  |
| `"multi_pack_index"` |  |
| `"multi_pack_index_bitmap"` |  |
| `"object"` |  |
| `"reference"` |  |
| `"size"` |  |
| `"updated_at"` |  |

Operations: Load.

API path: `/api/v4/projects/{id}/repository/health`

#### ApiEntitiesResourceAccessTokenWithToken

| Field | Description |
| --- | --- |
| `"access_level"` |  |
| `"active"` |  |
| `"created_at"` |  |
| `"description"` |  |
| `"expires_at"` |  |
| `"id"` |  |
| `"last_used_at"` |  |
| `"name"` |  |
| `"resource_id"` |  |
| `"resource_type"` |  |
| `"revoked"` |  |
| `"scope"` |  |
| `"token"` |  |
| `"user_id"` |  |

Operations: Create.

API path: `/api/v4/groups/{id}/access_tokens/self/rotate`

#### ApiEntitiesResourceMilestoneEvent

| Field | Description |
| --- | --- |
| `"action"` |  |
| `"created_at"` |  |
| `"id"` |  |
| `"milestone"` |  |
| `"resource_id"` |  |
| `"resource_type"` |  |
| `"state"` |  |
| `"user"` |  |

Operations: List, Load.

API path: `/api/v4/projects/{id}/issues/{eventable_id}/resource_milestone_events`

#### ApiEntitiesSnippet

| Field | Description |
| --- | --- |
| `"author"` |  |
| `"created_at"` |  |
| `"description"` |  |
| `"file"` |  |
| `"file_name"` |  |
| `"http_url_to_repo"` |  |
| `"id"` |  |
| `"imported"` |  |
| `"imported_from"` |  |
| `"project_id"` |  |
| `"raw_url"` |  |
| `"repository_storage"` |  |
| `"ssh_url_to_repo"` |  |
| `"title"` |  |
| `"updated_at"` |  |
| `"visibility"` |  |
| `"web_url"` |  |

Operations: List.

API path: `/api/v4/snippets/all`

#### ApiEntitiesSshKeyWithUser

| Field | Description |
| --- | --- |
| `"created_at"` |  |
| `"expires_at"` |  |
| `"id"` |  |
| `"key"` |  |
| `"last_used_at"` |  |
| `"title"` |  |
| `"usage_type"` |  |
| `"user"` |  |

Operations: Load.

API path: `/api/v4/keys/{id}`

#### ApiEntitiesSuggestion

| Field | Description |
| --- | --- |
| `"appliable"` |  |
| `"applied"` |  |
| `"from_content"` |  |
| `"from_line"` |  |
| `"id"` |  |
| `"to_content"` |  |
| `"to_line"` |  |

Operations: Update.

API path: `/api/v4/suggestions/{id}/apply`

#### ApiEntitiesSystemBroadcastMessage

| Field | Description |
| --- | --- |
| `"active"` |  |
| `"broadcast_type"` |  |
| `"color"` |  |
| `"dismissable"` |  |
| `"ends_at"` |  |
| `"font"` |  |
| `"id"` |  |
| `"message"` |  |
| `"starts_at"` |  |
| `"target_access_level"` |  |
| `"target_path"` |  |
| `"theme"` |  |

Operations: Create, Load, Remove, Update.

API path: `/api/v4/broadcast_messages`

#### ApiEntitiesTag

| Field | Description |
| --- | --- |
| `"commit"` |  |
| `"created_at"` |  |
| `"message"` |  |
| `"name"` |  |
| `"protected"` |  |
| `"release"` |  |
| `"target"` |  |

Operations: Create, List, Load.

API path: `/api/v4/projects/{id}/repository/tags`

#### ApiEntitiesTagSignature

| Field | Description |
| --- | --- |
| `"signature"` |  |
| `"signature_type"` |  |

Operations: Load.

API path: `/api/v4/projects/{id}/repository/tags/{tag_name}/signature`

#### ApiEntitiesTemplatesList

| Field | Description |
| --- | --- |
| `"key"` |  |
| `"name"` |  |

Operations: Load.

API path: `/api/v4/projects/{id}/templates/{type}`

#### ApiEntitiesTerraformModuleVersion

| Field | Description |
| --- | --- |
| `"module"` |  |
| `"name"` |  |
| `"provider"` |  |
| `"root"` |  |
| `"source"` |  |
| `"submodule"` |  |
| `"version"` |  |

Operations: List, Load.

API path: `/api/v4/packages/terraform/modules/v1/{module_namespace}/{module_name}/{module_system}/versions`

#### ApiEntitiesTreeObject

| Field | Description |
| --- | --- |
| `"id"` |  |
| `"mode"` |  |
| `"name"` |  |
| `"path"` |  |
| `"type"` |  |

Operations: Load.

API path: `/api/v4/projects/{id}/repository/tree`

#### ApiEntitiesTrigger

| Field | Description |
| --- | --- |
| `"created_at"` |  |
| `"description"` |  |
| `"expires_at"` |  |
| `"id"` |  |
| `"last_used"` |  |
| `"owner"` |  |
| `"token"` |  |
| `"updated_at"` |  |

Operations: Create, List, Load, Update.

API path: `/api/v4/projects/{id}/triggers`

#### ApiEntitiesUserAgentDetail

| Field | Description |
| --- | --- |
| `"akismet_submitted"` |  |
| `"ip_address"` |  |
| `"user_agent"` |  |

Operations: Load.

API path: `/api/v4/projects/{id}/issues/{issue_iid}/user_agent_detail`

#### ApiEntitiesUserCount

| Field | Description |
| --- | --- |
| `"assigned_issue"` |  |
| `"assigned_merge_request"` |  |
| `"merge_request"` |  |
| `"review_requested_merge_request"` |  |
| `"todo"` |  |

Operations: Load.

API path: `/api/v4/user_counts`

#### ApiEntitiesUserPublic

| Field | Description |
| --- | --- |
| `"avatar_path"` |  |
| `"avatar_url"` |  |
| `"bio"` |  |
| `"bot"` |  |
| `"can_create_group"` |  |
| `"can_create_project"` |  |
| `"color_scheme_id"` |  |
| `"commit_email"` |  |
| `"confirmed_at"` |  |
| `"created_at"` |  |
| `"current_sign_in_at"` |  |
| `"custom_attribute"` |  |
| `"discord"` |  |
| `"email"` |  |
| `"external"` |  |
| `"extra_shared_runners_minutes_limit"` |  |
| `"follower"` |  |
| `"following"` |  |
| `"github"` |  |
| `"id"` |  |
| `"identity"` |  |
| `"is_followed"` |  |
| `"job_title"` |  |
| `"key"` |  |
| `"last_activity_on"` |  |
| `"last_sign_in_at"` |  |
| `"linkedin"` |  |
| `"local_time"` |  |
| `"location"` |  |
| `"locked"` |  |
| `"name"` |  |
| `"organization"` |  |
| `"preferred_language"` |  |
| `"private_profile"` |  |
| `"projects_limit"` |  |
| `"pronoun"` |  |
| `"public_email"` |  |
| `"scim_identity"` |  |
| `"shared_runners_minutes_limit"` |  |
| `"state"` |  |
| `"theme_id"` |  |
| `"twitter"` |  |
| `"two_factor_enabled"` |  |
| `"username"` |  |
| `"value"` |  |
| `"web_url"` |  |
| `"website_url"` |  |
| `"work_information"` |  |

Operations: List.

API path: `/api/v4/groups/{id}/provisioned_users`

#### ApiEntitiesUserWithAdmin

| Field | Description |
| --- | --- |
| `"key"` |  |
| `"value"` |  |

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
| `"content"` |  |
| `"encoding"` |  |
| `"format"` |  |
| `"front_matter"` |  |
| `"slug"` |  |
| `"title"` |  |
| `"wiki_page_meta_id"` |  |

Operations: Create, Load, Update.

API path: `/api/v4/groups/{id}/wikis`

#### ApiEntitiesWikiPageBasic

| Field | Description |
| --- | --- |
| `"format"` |  |
| `"slug"` |  |
| `"title"` |  |
| `"wiki_page_meta_id"` |  |

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
| `"key"` |  |
| `"value"` |  |

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
| `"author_id"` |  |
| `"created_at"` |  |
| `"detail"` |  |
| `"entity_id"` |  |
| `"entity_type"` |  |
| `"event_name"` |  |
| `"id"` |  |

Operations: List, Load.

API path: `/api/v4/groups/{id}/audit_events`

#### EeApiEntitiesBillableMembership

| Field | Description |
| --- | --- |
| `"access_level"` |  |
| `"created_at"` |  |
| `"expires_at"` |  |
| `"id"` |  |
| `"source_full_name"` |  |
| `"source_id"` |  |
| `"source_members_url"` |  |

Operations: Load.

API path: `/api/v4/groups/{id}/billable_members/{user_id}/indirect`

#### EeApiEntitiesGeoNodeStatus

| Field | Description |
| --- | --- |
| `"ci_secure_files_checksum_failed_count"` |  |
| `"ci_secure_files_checksum_total_count"` |  |
| `"ci_secure_files_checksummed_count"` |  |
| `"ci_secure_files_count"` |  |
| `"ci_secure_files_failed_count"` |  |
| `"ci_secure_files_registry_count"` |  |
| `"ci_secure_files_synced_count"` |  |
| `"ci_secure_files_synced_in_percentage"` |  |
| `"ci_secure_files_verification_failed_count"` |  |
| `"ci_secure_files_verification_total_count"` |  |
| `"ci_secure_files_verified_count"` |  |
| `"ci_secure_files_verified_in_percentage"` |  |
| `"container_repositories_checksum_failed_count"` |  |
| `"container_repositories_checksum_total_count"` |  |
| `"container_repositories_checksummed_count"` |  |
| `"container_repositories_count"` |  |
| `"container_repositories_failed_count"` |  |
| `"container_repositories_registry_count"` |  |
| `"container_repositories_replication_enabled"` |  |
| `"container_repositories_synced_count"` |  |
| `"container_repositories_synced_in_percentage"` |  |
| `"container_repositories_verification_failed_count"` |  |
| `"container_repositories_verification_total_count"` |  |
| `"container_repositories_verified_count"` |  |
| `"container_repositories_verified_in_percentage"` |  |
| `"cursor_last_event_id"` |  |
| `"cursor_last_event_timestamp"` |  |
| `"db_replication_lag_second"` |  |
| `"dependency_proxy_blobs_checksum_failed_count"` |  |
| `"dependency_proxy_blobs_checksum_total_count"` |  |
| `"dependency_proxy_blobs_checksummed_count"` |  |
| `"dependency_proxy_blobs_count"` |  |
| `"dependency_proxy_blobs_failed_count"` |  |
| `"dependency_proxy_blobs_registry_count"` |  |
| `"dependency_proxy_blobs_synced_count"` |  |
| `"dependency_proxy_blobs_synced_in_percentage"` |  |
| `"dependency_proxy_blobs_verification_failed_count"` |  |
| `"dependency_proxy_blobs_verification_total_count"` |  |
| `"dependency_proxy_blobs_verified_count"` |  |
| `"dependency_proxy_blobs_verified_in_percentage"` |  |
| `"dependency_proxy_manifests_checksum_failed_count"` |  |
| `"dependency_proxy_manifests_checksum_total_count"` |  |
| `"dependency_proxy_manifests_checksummed_count"` |  |
| `"dependency_proxy_manifests_count"` |  |
| `"dependency_proxy_manifests_failed_count"` |  |
| `"dependency_proxy_manifests_registry_count"` |  |
| `"dependency_proxy_manifests_synced_count"` |  |
| `"dependency_proxy_manifests_synced_in_percentage"` |  |
| `"dependency_proxy_manifests_verification_failed_count"` |  |
| `"dependency_proxy_manifests_verification_total_count"` |  |
| `"dependency_proxy_manifests_verified_count"` |  |
| `"dependency_proxy_manifests_verified_in_percentage"` |  |
| `"design_management_repositories_checksum_failed_count"` |  |
| `"design_management_repositories_checksum_total_count"` |  |
| `"design_management_repositories_checksummed_count"` |  |
| `"design_management_repositories_count"` |  |
| `"design_management_repositories_failed_count"` |  |
| `"design_management_repositories_registry_count"` |  |
| `"design_management_repositories_synced_count"` |  |
| `"design_management_repositories_synced_in_percentage"` |  |
| `"design_management_repositories_verification_failed_count"` |  |
| `"design_management_repositories_verification_total_count"` |  |
| `"design_management_repositories_verified_count"` |  |
| `"design_management_repositories_verified_in_percentage"` |  |
| `"geo_node_id"` |  |
| `"git_fetch_event_count_weekly"` |  |
| `"git_push_event_count_weekly"` |  |
| `"group_wiki_repositories_checksum_failed_count"` |  |
| `"group_wiki_repositories_checksum_total_count"` |  |
| `"group_wiki_repositories_checksummed_count"` |  |
| `"group_wiki_repositories_count"` |  |
| `"group_wiki_repositories_failed_count"` |  |
| `"group_wiki_repositories_registry_count"` |  |
| `"group_wiki_repositories_synced_count"` |  |
| `"group_wiki_repositories_synced_in_percentage"` |  |
| `"group_wiki_repositories_verification_failed_count"` |  |
| `"group_wiki_repositories_verification_total_count"` |  |
| `"group_wiki_repositories_verified_count"` |  |
| `"group_wiki_repositories_verified_in_percentage"` |  |
| `"health"` |  |
| `"health_status"` |  |
| `"healthy"` |  |
| `"job_artifacts_checksum_failed_count"` |  |
| `"job_artifacts_checksum_total_count"` |  |
| `"job_artifacts_checksummed_count"` |  |
| `"job_artifacts_count"` |  |
| `"job_artifacts_failed_count"` |  |
| `"job_artifacts_registry_count"` |  |
| `"job_artifacts_synced_count"` |  |
| `"job_artifacts_synced_in_percentage"` |  |
| `"job_artifacts_verification_failed_count"` |  |
| `"job_artifacts_verification_total_count"` |  |
| `"job_artifacts_verified_count"` |  |
| `"job_artifacts_verified_in_percentage"` |  |
| `"last_event_id"` |  |
| `"last_event_timestamp"` |  |
| `"last_successful_status_check_timestamp"` |  |
| `"lfs_objects_checksum_failed_count"` |  |
| `"lfs_objects_checksum_total_count"` |  |
| `"lfs_objects_checksummed_count"` |  |
| `"lfs_objects_count"` |  |
| `"lfs_objects_failed_count"` |  |
| `"lfs_objects_registry_count"` |  |
| `"lfs_objects_synced_count"` |  |
| `"lfs_objects_synced_in_percentage"` |  |
| `"lfs_objects_verification_failed_count"` |  |
| `"lfs_objects_verification_total_count"` |  |
| `"lfs_objects_verified_count"` |  |
| `"lfs_objects_verified_in_percentage"` |  |
| `"link"` |  |
| `"merge_request_diffs_checksum_failed_count"` |  |
| `"merge_request_diffs_checksum_total_count"` |  |
| `"merge_request_diffs_checksummed_count"` |  |
| `"merge_request_diffs_count"` |  |
| `"merge_request_diffs_failed_count"` |  |
| `"merge_request_diffs_registry_count"` |  |
| `"merge_request_diffs_synced_count"` |  |
| `"merge_request_diffs_synced_in_percentage"` |  |
| `"merge_request_diffs_verification_failed_count"` |  |
| `"merge_request_diffs_verification_total_count"` |  |
| `"merge_request_diffs_verified_count"` |  |
| `"merge_request_diffs_verified_in_percentage"` |  |
| `"missing_oauth_application"` |  |
| `"namespace"` |  |
| `"package_files_checksum_failed_count"` |  |
| `"package_files_checksum_total_count"` |  |
| `"package_files_checksummed_count"` |  |
| `"package_files_count"` |  |
| `"package_files_failed_count"` |  |
| `"package_files_registry_count"` |  |
| `"package_files_synced_count"` |  |
| `"package_files_synced_in_percentage"` |  |
| `"package_files_verification_failed_count"` |  |
| `"package_files_verification_total_count"` |  |
| `"package_files_verified_count"` |  |
| `"package_files_verified_in_percentage"` |  |
| `"pages_deployments_checksum_failed_count"` |  |
| `"pages_deployments_checksum_total_count"` |  |
| `"pages_deployments_checksummed_count"` |  |
| `"pages_deployments_count"` |  |
| `"pages_deployments_failed_count"` |  |
| `"pages_deployments_registry_count"` |  |
| `"pages_deployments_synced_count"` |  |
| `"pages_deployments_synced_in_percentage"` |  |
| `"pages_deployments_verification_failed_count"` |  |
| `"pages_deployments_verification_total_count"` |  |
| `"pages_deployments_verified_count"` |  |
| `"pages_deployments_verified_in_percentage"` |  |
| `"pipeline_artifacts_checksum_failed_count"` |  |
| `"pipeline_artifacts_checksum_total_count"` |  |
| `"pipeline_artifacts_checksummed_count"` |  |
| `"pipeline_artifacts_count"` |  |
| `"pipeline_artifacts_failed_count"` |  |
| `"pipeline_artifacts_registry_count"` |  |
| `"pipeline_artifacts_synced_count"` |  |
| `"pipeline_artifacts_synced_in_percentage"` |  |
| `"pipeline_artifacts_verification_failed_count"` |  |
| `"pipeline_artifacts_verification_total_count"` |  |
| `"pipeline_artifacts_verified_count"` |  |
| `"pipeline_artifacts_verified_in_percentage"` |  |
| `"project_repositories_checksum_failed_count"` |  |
| `"project_repositories_checksum_total_count"` |  |
| `"project_repositories_checksummed_count"` |  |
| `"project_repositories_count"` |  |
| `"project_repositories_failed_count"` |  |
| `"project_repositories_registry_count"` |  |
| `"project_repositories_synced_count"` |  |
| `"project_repositories_synced_in_percentage"` |  |
| `"project_repositories_verification_failed_count"` |  |
| `"project_repositories_verification_total_count"` |  |
| `"project_repositories_verified_count"` |  |
| `"project_repositories_verified_in_percentage"` |  |
| `"project_wiki_repositories_checksum_failed_count"` |  |
| `"project_wiki_repositories_checksum_total_count"` |  |
| `"project_wiki_repositories_checksummed_count"` |  |
| `"project_wiki_repositories_count"` |  |
| `"project_wiki_repositories_failed_count"` |  |
| `"project_wiki_repositories_registry_count"` |  |
| `"project_wiki_repositories_synced_count"` |  |
| `"project_wiki_repositories_synced_in_percentage"` |  |
| `"project_wiki_repositories_verification_failed_count"` |  |
| `"project_wiki_repositories_verification_total_count"` |  |
| `"project_wiki_repositories_verified_count"` |  |
| `"project_wiki_repositories_verified_in_percentage"` |  |
| `"projects_count"` |  |
| `"proxy_local_requests_event_count_weekly"` |  |
| `"proxy_remote_requests_event_count_weekly"` |  |
| `"replication_slots_count"` |  |
| `"replication_slots_max_retained_wal_byte"` |  |
| `"replication_slots_used_count"` |  |
| `"replication_slots_used_in_percentage"` |  |
| `"repositories_checked_count"` |  |
| `"repositories_checked_failed_count"` |  |
| `"repositories_checked_in_percentage"` |  |
| `"repositories_count"` |  |
| `"revision"` |  |
| `"selective_sync_type"` |  |
| `"snippet_repositories_checksum_failed_count"` |  |
| `"snippet_repositories_checksum_total_count"` |  |
| `"snippet_repositories_checksummed_count"` |  |
| `"snippet_repositories_count"` |  |
| `"snippet_repositories_failed_count"` |  |
| `"snippet_repositories_registry_count"` |  |
| `"snippet_repositories_synced_count"` |  |
| `"snippet_repositories_synced_in_percentage"` |  |
| `"snippet_repositories_verification_failed_count"` |  |
| `"snippet_repositories_verification_total_count"` |  |
| `"snippet_repositories_verified_count"` |  |
| `"snippet_repositories_verified_in_percentage"` |  |
| `"storage_shard"` |  |
| `"storage_shards_match"` |  |
| `"terraform_state_versions_checksum_failed_count"` |  |
| `"terraform_state_versions_checksum_total_count"` |  |
| `"terraform_state_versions_checksummed_count"` |  |
| `"terraform_state_versions_count"` |  |
| `"terraform_state_versions_failed_count"` |  |
| `"terraform_state_versions_registry_count"` |  |
| `"terraform_state_versions_synced_count"` |  |
| `"terraform_state_versions_synced_in_percentage"` |  |
| `"terraform_state_versions_verification_failed_count"` |  |
| `"terraform_state_versions_verification_total_count"` |  |
| `"terraform_state_versions_verified_count"` |  |
| `"terraform_state_versions_verified_in_percentage"` |  |
| `"updated_at"` |  |
| `"uploads_checksum_failed_count"` |  |
| `"uploads_checksum_total_count"` |  |
| `"uploads_checksummed_count"` |  |
| `"uploads_count"` |  |
| `"uploads_failed_count"` |  |
| `"uploads_registry_count"` |  |
| `"uploads_synced_count"` |  |
| `"uploads_synced_in_percentage"` |  |
| `"uploads_verification_failed_count"` |  |
| `"uploads_verification_total_count"` |  |
| `"uploads_verified_count"` |  |
| `"uploads_verified_in_percentage"` |  |
| `"version"` |  |

Operations: Create.

API path: `/api/v4/geo/status`

#### EeApiEntitiesGeoPipelineRef

| Field | Description |
| --- | --- |
| `"pipeline_ref"` |  |

Operations: List.

API path: `/api/v4/geo/repositories/{gl_repository}/pipeline_refs`

#### EeApiEntitiesIssuableMetricImage

| Field | Description |
| --- | --- |
| `"created_at"` |  |
| `"file_path"` |  |
| `"filename"` |  |
| `"id"` |  |
| `"url"` |  |
| `"url_text"` |  |

Operations: Create, Remove, Update.

API path: `/api/v4/projects/{id}/issues/{issue_iid}/metric_images`

#### EeApiEntitiesMergeRequestApprovalState

| Field | Description |
| --- | --- |
| `"approvals_required"` |  |
| `"approved"` |  |
| `"approved_by"` |  |
| `"code_owner"` |  |
| `"contains_hidden_group"` |  |
| `"eligible_approver"` |  |
| `"group"` |  |
| `"id"` |  |
| `"name"` |  |
| `"overridden"` |  |
| `"report_type"` |  |
| `"rule_type"` |  |
| `"section"` |  |
| `"source_rule"` |  |
| `"user"` |  |

Operations: List.

API path: `/api/v4/projects/{id}/merge_requests/{merge_request_iid}/approval_state`

#### EeApiEntitiesSshCertificate

| Field | Description |
| --- | --- |
| `"created_at"` |  |
| `"id"` |  |
| `"key"` |  |
| `"title"` |  |

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
| `"enterprise"` |  |
| `"kas"` |  |
| `"revision"` |  |
| `"version"` |  |

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
| `"catalog_entry"` |  |
| `"count"` |  |
| `"id"` |  |
| `"item"` |  |
| `"lower"` |  |
| `"package_content"` |  |
| `"upper"` |  |

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
| `"key"` |  |
| `"value"` |  |

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
| `"before_sha"` |  |
| `"committed_at"` |  |
| `"coverage"` |  |
| `"created_at"` |  |
| `"detailed_status"` |  |
| `"duration"` |  |
| `"finished_at"` |  |
| `"id"` |  |
| `"iid"` |  |
| `"name"` |  |
| `"project_id"` |  |
| `"queued_duration"` |  |
| `"ref"` |  |
| `"sha"` |  |
| `"source"` |  |
| `"started_at"` |  |
| `"status"` |  |
| `"tag"` |  |
| `"updated_at"` |  |
| `"user"` |  |
| `"web_url"` |  |
| `"yaml_error"` |  |

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
| `"forked"` |  |
| `"full_name"` |  |
| `"full_path"` |  |
| `"human_import_status_name"` |  |
| `"id"` |  |
| `"import_error"` |  |
| `"import_source"` |  |
| `"import_status"` |  |
| `"import_warning"` |  |
| `"name"` |  |
| `"provider_link"` |  |
| `"refs_url"` |  |
| `"relation_type"` |  |

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
| `"avatar_path"` |  |
| `"avatar_url"` |  |
| `"custom_attribute"` |  |
| `"id"` |  |
| `"locked"` |  |
| `"name"` |  |
| `"public_email"` |  |
| `"state"` |  |
| `"username"` |  |
| `"web_url"` |  |

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
| `"error_count"` |  |
| `"failed_count"` |  |
| `"name"` |  |
| `"skipped_count"` |  |
| `"success_count"` |  |
| `"suite_error"` |  |
| `"test_case"` |  |
| `"total_count"` |  |
| `"total_time"` |  |

Operations: List.

API path: `/api/v4/projects/{id}/pipelines/{pipeline_id}/test_report`

#### TestReportSummary

| Field | Description |
| --- | --- |
| `"test_suite"` |  |
| `"total"` |  |

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
| `"avatar_path"` |  |
| `"avatar_url"` |  |
| `"custom_attribute"` |  |
| `"id"` |  |
| `"locked"` |  |
| `"name"` |  |
| `"public_email"` |  |
| `"state"` |  |
| `"username"` |  |
| `"web_url"` |  |

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

Create an instance: `accessRequest := client.AccessRequest(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |


### AlertManagement

Create an instance: `alertManagement := client.AlertManagement(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Example: Create

```go
result, err := client.AlertManagement(nil).Create(map[string]any{
    "alert_management_alert_id": "example_alert_management_alert_id",
    "project_id": "example_project_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ApiEntitiesAccessRequester

Create an instance: `apiEntitiesAccessRequester := client.ApiEntitiesAccessRequester(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_path` | `string` |  |
| `avatar_url` | `string` |  |
| `custom_attribute` | `[]any` |  |
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

```go
apiEntitiesAccessRequesters, err := client.ApiEntitiesAccessRequester(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesAccessRequesters) // the array of records
```

#### Example: Create

```go
result, err := client.ApiEntitiesAccessRequester(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ApiEntitiesAppearance

Create an instance: `apiEntitiesAppearance := client.ApiEntitiesAppearance(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

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

```go
apiEntitiesAppearance, err := client.ApiEntitiesAppearance(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesAppearance) // the loaded record
```


### ApiEntitiesApplication

Create an instance: `apiEntitiesApplication := client.ApiEntitiesApplication(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `application_id` | `string` |  |
| `application_name` | `string` |  |
| `callback_url` | `string` |  |
| `confidential` | `bool` |  |
| `id` | `string` |  |

#### Example: List

```go
apiEntitiesApplications, err := client.ApiEntitiesApplication(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesApplications) // the array of records
```


### ApiEntitiesApplicationStatistic

Create an instance: `apiEntitiesApplicationStatistic := client.ApiEntitiesApplicationStatistic(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

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

```go
apiEntitiesApplicationStatistic, err := client.ApiEntitiesApplicationStatistic(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesApplicationStatistic) // the loaded record
```


### ApiEntitiesApplicationWithSecret

Create an instance: `apiEntitiesApplicationWithSecret := client.ApiEntitiesApplicationWithSecret(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

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

```go
result, err := client.ApiEntitiesApplicationWithSecret(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ApiEntitiesAvatar

Create an instance: `apiEntitiesAvatar := client.ApiEntitiesAvatar(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_url` | `string` |  |

#### Example: Load

```go
apiEntitiesAvatar, err := client.ApiEntitiesAvatar(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesAvatar) // the loaded record
```


### ApiEntitiesAwardEmoji

Create an instance: `apiEntitiesAwardEmoji := client.ApiEntitiesAwardEmoji(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

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
| `user` | `map[string]any` |  |

#### Example: Load

```go
apiEntitiesAwardEmoji, err := client.ApiEntitiesAwardEmoji(nil).Load(map[string]any{"id": "api_entities_award_emoji_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesAwardEmoji) // the loaded record
```

#### Example: List

```go
apiEntitiesAwardEmojis, err := client.ApiEntitiesAwardEmoji(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesAwardEmojis) // the array of records
```

#### Example: Create

```go
result, err := client.ApiEntitiesAwardEmoji(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ApiEntitiesBadge

Create an instance: `apiEntitiesBadge := client.ApiEntitiesBadge(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

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

```go
apiEntitiesBadge, err := client.ApiEntitiesBadge(nil).Load(map[string]any{"id": "api_entities_badge_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesBadge) // the loaded record
```

#### Example: List

```go
apiEntitiesBadges, err := client.ApiEntitiesBadge(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesBadges) // the array of records
```

#### Example: Create

```go
result, err := client.ApiEntitiesBadge(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ApiEntitiesBasicBadgeDetail

Create an instance: `apiEntitiesBasicBadgeDetail := client.ApiEntitiesBasicBadgeDetail(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `image_url` | `string` |  |
| `link_url` | `string` |  |
| `name` | `string` |  |
| `rendered_image_url` | `string` |  |
| `rendered_link_url` | `string` |  |

#### Example: Load

```go
apiEntitiesBasicBadgeDetail, err := client.ApiEntitiesBasicBadgeDetail(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesBasicBadgeDetail) // the loaded record
```


### ApiEntitiesBasicGroupDetail

Create an instance: `apiEntitiesBasicGroupDetail := client.ApiEntitiesBasicGroupDetail(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Example: Create

```go
result, err := client.ApiEntitiesBasicGroupDetail(nil).Create(map[string]any{
    "project_id": "example_project_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ApiEntitiesBasicProjectDetail

Create an instance: `apiEntitiesBasicProjectDetail := client.ApiEntitiesBasicProjectDetail(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_url` | `string` |  |
| `created_at` | `string` |  |
| `custom_attribute` | `map[string]any` |  |
| `default_branch` | `string` |  |
| `description` | `string` |  |
| `forks_count` | `int` |  |
| `http_url_to_repo` | `string` |  |
| `id` | `int` |  |
| `last_activity_at` | `string` |  |
| `license` | `map[string]any` |  |
| `license_url` | `string` |  |
| `name` | `string` |  |
| `name_with_namespace` | `string` |  |
| `namespace` | `map[string]any` |  |
| `path` | `string` |  |
| `path_with_namespace` | `string` |  |
| `readme_url` | `string` |  |
| `repository_storage` | `string` |  |
| `ssh_url_to_repo` | `string` |  |
| `star_count` | `int` |  |
| `tag_list` | `[]any` |  |
| `topic` | `[]any` |  |
| `visibility` | `string` |  |
| `web_url` | `string` |  |

#### Example: List

```go
apiEntitiesBasicProjectDetails, err := client.ApiEntitiesBasicProjectDetail(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesBasicProjectDetails) // the array of records
```

#### Example: Create

```go
result, err := client.ApiEntitiesBasicProjectDetail(nil).Create(map[string]any{
    "project_id": "example_project_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ApiEntitiesBasicRef

Create an instance: `apiEntitiesBasicRef := client.ApiEntitiesBasicRef(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `name` | `string` |  |
| `type` | `string` |  |

#### Example: List

```go
apiEntitiesBasicRefs, err := client.ApiEntitiesBasicRef(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesBasicRefs) // the array of records
```


### ApiEntitiesBasicSuccess

Create an instance: `apiEntitiesBasicSuccess := client.ApiEntitiesBasicSuccess(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Example: Create

```go
result, err := client.ApiEntitiesBasicSuccess(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ApiEntitiesBatchedBackgroundMigration

Create an instance: `apiEntitiesBatchedBackgroundMigration := client.ApiEntitiesBatchedBackgroundMigration(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `column_name` | `string` |  |
| `created_at` | `string` |  |
| `id` | `string` |  |
| `job_class_name` | `string` |  |
| `progress` | `float64` |  |
| `status` | `string` |  |
| `table_name` | `string` |  |

#### Example: Load

```go
apiEntitiesBatchedBackgroundMigration, err := client.ApiEntitiesBatchedBackgroundMigration(nil).Load(map[string]any{"id": "api_entities_batched_background_migration_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesBatchedBackgroundMigration) // the loaded record
```

#### Example: List

```go
apiEntitiesBatchedBackgroundMigrations, err := client.ApiEntitiesBatchedBackgroundMigration(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesBatchedBackgroundMigrations) // the array of records
```


### ApiEntitiesBranch

Create an instance: `apiEntitiesBranch := client.ApiEntitiesBranch(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `can_push` | `bool` |  |
| `commit` | `map[string]any` |  |
| `default` | `bool` |  |
| `developers_can_merge` | `bool` |  |
| `developers_can_push` | `bool` |  |
| `merged` | `bool` |  |
| `name` | `string` |  |
| `protected` | `bool` |  |
| `web_url` | `string` |  |

#### Example: Load

```go
apiEntitiesBranch, err := client.ApiEntitiesBranch(nil).Load(map[string]any{"id": "api_entities_branch_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesBranch) // the loaded record
```

#### Example: List

```go
apiEntitiesBranchs, err := client.ApiEntitiesBranch(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesBranchs) // the array of records
```

#### Example: Create

```go
result, err := client.ApiEntitiesBranch(nil).Create(map[string]any{
    "project_id": "example_project_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ApiEntitiesBulkImport

Create an instance: `apiEntitiesBulkImport := client.ApiEntitiesBulkImport(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

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
| `failure` | `[]any` |  |
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
| `stat` | `map[string]any` |  |
| `status` | `string` |  |
| `updated_at` | `string` |  |

#### Example: Load

```go
apiEntitiesBulkImport, err := client.ApiEntitiesBulkImport(nil).Load(map[string]any{"id": "api_entities_bulk_import_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesBulkImport) // the loaded record
```

#### Example: List

```go
apiEntitiesBulkImports, err := client.ApiEntitiesBulkImport(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesBulkImports) // the array of records
```

#### Example: Create

```go
result, err := client.ApiEntitiesBulkImport(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ApiEntitiesBulkImportsEntityFailure

Create an instance: `apiEntitiesBulkImportsEntityFailure := client.ApiEntitiesBulkImportsEntityFailure(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

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

```go
apiEntitiesBulkImportsEntityFailure, err := client.ApiEntitiesBulkImportsEntityFailure(nil).Load(map[string]any{"bulk_import_id": "bulk_import_id", "entity_id": "entity_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesBulkImportsEntityFailure) // the loaded record
```


### ApiEntitiesBulkImportsExportStatus

Create an instance: `apiEntitiesBulkImportsExportStatus := client.ApiEntitiesBulkImportsExportStatus(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `batch` | `map[string]any` |  |
| `batched` | `bool` |  |
| `batches_count` | `int` |  |
| `error` | `string` |  |
| `relation` | `string` |  |
| `status` | `string` |  |
| `total_objects_count` | `int` |  |
| `updated_at` | `string` |  |

#### Example: List

```go
apiEntitiesBulkImportsExportStatuss, err := client.ApiEntitiesBulkImportsExportStatus(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesBulkImportsExportStatuss) // the array of records
```


### ApiEntitiesChangelog

Create an instance: `apiEntitiesChangelog := client.ApiEntitiesChangelog(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `note` | `string` |  |

#### Example: Load

```go
apiEntitiesChangelog, err := client.ApiEntitiesChangelog(nil).Load(map[string]any{"project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesChangelog) // the loaded record
```


### ApiEntitiesCiBridge

Create an instance: `apiEntitiesCiBridge := client.ApiEntitiesCiBridge(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_failure` | `bool` |  |
| `commit` | `map[string]any` |  |
| `coverage` | `float64` |  |
| `created_at` | `string` |  |
| `downstream_pipeline` | `map[string]any` |  |
| `duration` | `float64` |  |
| `erased_at` | `string` |  |
| `failure_reason` | `string` |  |
| `finished_at` | `string` |  |
| `id` | `int` |  |
| `name` | `string` |  |
| `pipeline` | `map[string]any` |  |
| `project` | `map[string]any` |  |
| `queued_duration` | `float64` |  |
| `ref` | `string` |  |
| `stage` | `string` |  |
| `started_at` | `string` |  |
| `status` | `string` |  |
| `tag` | `bool` |  |
| `user` | `map[string]any` |  |
| `web_url` | `string` |  |

#### Example: List

```go
apiEntitiesCiBridges, err := client.ApiEntitiesCiBridge(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesCiBridges) // the array of records
```


### ApiEntitiesCiCatalogResourcesVersion

Create an instance: `apiEntitiesCiCatalogResourcesVersion := client.ApiEntitiesCiCatalogResourcesVersion(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Example: Create

```go
result, err := client.ApiEntitiesCiCatalogResourcesVersion(nil).Create(map[string]any{
    "project_id": "example_project_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ApiEntitiesCiJob

Create an instance: `apiEntitiesCiJob := client.ApiEntitiesCiJob(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_failure` | `bool` |  |
| `archived` | `bool` |  |
| `artifact` | `[]any` |  |
| `artifacts_expire_at` | `string` |  |
| `artifacts_file` | `map[string]any` |  |
| `commit` | `map[string]any` |  |
| `coverage` | `float64` |  |
| `created_at` | `string` |  |
| `duration` | `float64` |  |
| `erased_at` | `string` |  |
| `failure_reason` | `string` |  |
| `file_format` | `string` |  |
| `file_type` | `string` |  |
| `filename` | `string` |  |
| `finished_at` | `string` |  |
| `id` | `int` |  |
| `name` | `string` |  |
| `pipeline` | `map[string]any` |  |
| `project` | `map[string]any` |  |
| `queued_duration` | `float64` |  |
| `ref` | `string` |  |
| `runner` | `map[string]any` |  |
| `runner_manager` | `map[string]any` |  |
| `size` | `int` |  |
| `stage` | `string` |  |
| `started_at` | `string` |  |
| `status` | `string` |  |
| `tag` | `bool` |  |
| `tag_list` | `[]any` |  |
| `user` | `map[string]any` |  |
| `web_url` | `string` |  |

#### Example: Load

```go
apiEntitiesCiJob, err := client.ApiEntitiesCiJob(nil).Load(map[string]any{"id": "api_entities_ci_job_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesCiJob) // the loaded record
```

#### Example: List

```go
apiEntitiesCiJobs, err := client.ApiEntitiesCiJob(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesCiJobs) // the array of records
```

#### Example: Create

```go
result, err := client.ApiEntitiesCiJob(nil).Create(map[string]any{
    "job_id": "example_job_id",
    "project_id": "example_project_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ApiEntitiesCiJobBasic

Create an instance: `apiEntitiesCiJobBasic := client.ApiEntitiesCiJobBasic(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_failure` | `bool` |  |
| `commit` | `map[string]any` |  |
| `coverage` | `float64` |  |
| `created_at` | `string` |  |
| `duration` | `float64` |  |
| `erased_at` | `string` |  |
| `failure_reason` | `string` |  |
| `finished_at` | `string` |  |
| `id` | `int` |  |
| `name` | `string` |  |
| `pipeline` | `map[string]any` |  |
| `project` | `map[string]any` |  |
| `queued_duration` | `float64` |  |
| `ref` | `string` |  |
| `stage` | `string` |  |
| `started_at` | `string` |  |
| `status` | `string` |  |
| `tag` | `bool` |  |
| `user` | `map[string]any` |  |
| `web_url` | `string` |  |

#### Example: List

```go
apiEntitiesCiJobBasics, err := client.ApiEntitiesCiJobBasic(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesCiJobBasics) // the array of records
```

#### Example: Create

```go
result, err := client.ApiEntitiesCiJobBasic(nil).Create(map[string]any{
    "job_id": "example_job_id",
    "project_id": "example_project_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ApiEntitiesCiJobBasicWithProject

Create an instance: `apiEntitiesCiJobBasicWithProject := client.ApiEntitiesCiJobBasicWithProject(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_failure` | `bool` |  |
| `commit` | `map[string]any` |  |
| `coverage` | `float64` |  |
| `created_at` | `string` |  |
| `duration` | `float64` |  |
| `erased_at` | `string` |  |
| `failure_reason` | `string` |  |
| `finished_at` | `string` |  |
| `id` | `int` |  |
| `name` | `string` |  |
| `pipeline` | `map[string]any` |  |
| `project` | `map[string]any` |  |
| `queued_duration` | `float64` |  |
| `ref` | `string` |  |
| `stage` | `string` |  |
| `started_at` | `string` |  |
| `status` | `string` |  |
| `tag` | `bool` |  |
| `user` | `map[string]any` |  |
| `web_url` | `string` |  |

#### Example: Load

```go
apiEntitiesCiJobBasicWithProject, err := client.ApiEntitiesCiJobBasicWithProject(nil).Load(map[string]any{"runner_id": "runner_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesCiJobBasicWithProject) // the loaded record
```


### ApiEntitiesCiLintResult

Create an instance: `apiEntitiesCiLintResult := client.ApiEntitiesCiLintResult(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `blob` | `string` |  |
| `context_project` | `string` |  |
| `context_sha` | `string` |  |
| `error` | `[]any` |  |
| `extra` | `map[string]any` |  |
| `include` | `[]any` |  |
| `job` | `[]any` |  |
| `location` | `string` |  |
| `merged_yaml` | `string` |  |
| `raw` | `string` |  |
| `type` | `string` |  |
| `valid` | `bool` |  |
| `warning` | `[]any` |  |

#### Example: List

```go
apiEntitiesCiLintResults, err := client.ApiEntitiesCiLintResult(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesCiLintResults) // the array of records
```

#### Example: Create

```go
result, err := client.ApiEntitiesCiLintResult(nil).Create(map[string]any{
    "project_id": "example_project_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ApiEntitiesCiPipeline

Create an instance: `apiEntitiesCiPipeline := client.ApiEntitiesCiPipeline(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Example: Create

```go
result, err := client.ApiEntitiesCiPipeline(nil).Create(map[string]any{
    "project_id": "example_project_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ApiEntitiesCiPipelineBasic

Create an instance: `apiEntitiesCiPipelineBasic := client.ApiEntitiesCiPipelineBasic(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

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

```go
apiEntitiesCiPipelineBasic, err := client.ApiEntitiesCiPipelineBasic(nil).Load(map[string]any{"merge_request_id": "merge_request_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesCiPipelineBasic) // the loaded record
```

#### Example: List

```go
apiEntitiesCiPipelineBasics, err := client.ApiEntitiesCiPipelineBasic(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesCiPipelineBasics) // the array of records
```


### ApiEntitiesCiPipelineSchedule

Create an instance: `apiEntitiesCiPipelineSchedule := client.ApiEntitiesCiPipelineSchedule(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` |  |
| `created_at` | `string` |  |
| `cron` | `string` |  |
| `cron_timezone` | `string` |  |
| `description` | `string` |  |
| `id` | `int` |  |
| `input` | `map[string]any` |  |
| `next_run_at` | `string` |  |
| `owner` | `map[string]any` |  |
| `ref` | `string` |  |
| `updated_at` | `string` |  |

#### Example: List

```go
apiEntitiesCiPipelineSchedules, err := client.ApiEntitiesCiPipelineSchedule(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesCiPipelineSchedules) // the array of records
```


### ApiEntitiesCiPipelineScheduleDetail

Create an instance: `apiEntitiesCiPipelineScheduleDetail := client.ApiEntitiesCiPipelineScheduleDetail(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` |  |
| `created_at` | `string` |  |
| `cron` | `string` |  |
| `cron_timezone` | `string` |  |
| `description` | `string` |  |
| `id` | `int` |  |
| `input` | `map[string]any` |  |
| `last_pipeline` | `map[string]any` |  |
| `next_run_at` | `string` |  |
| `owner` | `map[string]any` |  |
| `ref` | `string` |  |
| `updated_at` | `string` |  |
| `variable` | `map[string]any` |  |

#### Example: Load

```go
apiEntitiesCiPipelineScheduleDetail, err := client.ApiEntitiesCiPipelineScheduleDetail(nil).Load(map[string]any{"pipeline_schedule_id": "pipeline_schedule_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesCiPipelineScheduleDetail) // the loaded record
```

#### Example: Create

```go
result, err := client.ApiEntitiesCiPipelineScheduleDetail(nil).Create(map[string]any{
    "project_id": "example_project_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ApiEntitiesCiResetTokenResult

Create an instance: `apiEntitiesCiResetTokenResult := client.ApiEntitiesCiResetTokenResult(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Example: Create

```go
result, err := client.ApiEntitiesCiResetTokenResult(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ApiEntitiesCiResourceGroup

Create an instance: `apiEntitiesCiResourceGroup := client.ApiEntitiesCiResourceGroup(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `id` | `int` |  |
| `key` | `string` |  |
| `process_mode` | `string` |  |
| `updated_at` | `string` |  |

#### Example: Load

```go
apiEntitiesCiResourceGroup, err := client.ApiEntitiesCiResourceGroup(nil).Load(map[string]any{"id": "api_entities_ci_resource_group_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesCiResourceGroup) // the loaded record
```

#### Example: List

```go
apiEntitiesCiResourceGroups, err := client.ApiEntitiesCiResourceGroup(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesCiResourceGroups) // the array of records
```


### ApiEntitiesCiRunner

Create an instance: `apiEntitiesCiRunner := client.ApiEntitiesCiRunner(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` |  |
| `created_at` | `string` |  |
| `created_by` | `map[string]any` |  |
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

```go
apiEntitiesCiRunner, err := client.ApiEntitiesCiRunner(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesCiRunner) // the loaded record
```

#### Example: Create

```go
result, err := client.ApiEntitiesCiRunner(nil).Create(map[string]any{
    "project_id": "example_project_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ApiEntitiesCiRunnerDetail

Create an instance: `apiEntitiesCiRunnerDetail := client.ApiEntitiesCiRunnerDetail(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `access_level` | `string` |  |
| `active` | `bool` |  |
| `architecture` | `string` |  |
| `contacted_at` | `string` |  |
| `created_at` | `string` |  |
| `created_by` | `map[string]any` |  |
| `description` | `string` |  |
| `group` | `map[string]any` |  |
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
| `project` | `map[string]any` |  |
| `revision` | `string` |  |
| `run_untagged` | `string` |  |
| `runner_type` | `string` |  |
| `status` | `string` |  |
| `tag_list` | `string` |  |
| `version` | `string` |  |

#### Example: Load

```go
apiEntitiesCiRunnerDetail, err := client.ApiEntitiesCiRunnerDetail(nil).Load(map[string]any{"id": "api_entities_ci_runner_detail_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesCiRunnerDetail) // the loaded record
```


### ApiEntitiesCiRunnerManager

Create an instance: `apiEntitiesCiRunnerManager := client.ApiEntitiesCiRunnerManager(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

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

```go
apiEntitiesCiRunnerManager, err := client.ApiEntitiesCiRunnerManager(nil).Load(map[string]any{"runner_id": "runner_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesCiRunnerManager) // the loaded record
```


### ApiEntitiesCiRunnerRegistrationDetail

Create an instance: `apiEntitiesCiRunnerRegistrationDetail := client.ApiEntitiesCiRunnerRegistrationDetail(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Example: Create

```go
result, err := client.ApiEntitiesCiRunnerRegistrationDetail(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ApiEntitiesCiSecureFile

Create an instance: `apiEntitiesCiSecureFile := client.ApiEntitiesCiSecureFile(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `checksum` | `string` |  |
| `checksum_algorithm` | `string` |  |
| `created_at` | `string` |  |
| `expires_at` | `string` |  |
| `file_extension` | `string` |  |
| `id` | `int` |  |
| `metadata` | `map[string]any` |  |
| `name` | `string` |  |

#### Example: Load

```go
apiEntitiesCiSecureFile, err := client.ApiEntitiesCiSecureFile(nil).Load(map[string]any{"id": "api_entities_ci_secure_file_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesCiSecureFile) // the loaded record
```

#### Example: Create

```go
result, err := client.ApiEntitiesCiSecureFile(nil).Create(map[string]any{
    "project_id": "example_project_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ApiEntitiesCiVariable

Create an instance: `apiEntitiesCiVariable := client.ApiEntitiesCiVariable(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

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

```go
apiEntitiesCiVariable, err := client.ApiEntitiesCiVariable(nil).Load(map[string]any{"id": "api_entities_ci_variable_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesCiVariable) // the loaded record
```

#### Example: List

```go
apiEntitiesCiVariables, err := client.ApiEntitiesCiVariable(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesCiVariables) // the array of records
```

#### Example: Create

```go
result, err := client.ApiEntitiesCiVariable(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ApiEntitiesCluster

Create an instance: `apiEntitiesCluster := client.ApiEntitiesCluster(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

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
| `management_project` | `map[string]any` |  |
| `name` | `string` |  |
| `namespace_per_environment` | `string` |  |
| `platform_kubernete` | `map[string]any` |  |
| `platform_type` | `string` |  |
| `provider_gcp` | `map[string]any` |  |
| `provider_type` | `string` |  |
| `user` | `map[string]any` |  |

#### Example: Load

```go
apiEntitiesCluster, err := client.ApiEntitiesCluster(nil).Load(map[string]any{"id": "api_entities_cluster_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesCluster) // the loaded record
```

#### Example: List

```go
apiEntitiesClusters, err := client.ApiEntitiesCluster(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesClusters) // the array of records
```

#### Example: Create

```go
result, err := client.ApiEntitiesCluster(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ApiEntitiesClusterGroup

Create an instance: `apiEntitiesClusterGroup := client.ApiEntitiesClusterGroup(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cluster_type` | `string` |  |
| `created_at` | `string` |  |
| `domain` | `string` |  |
| `enabled` | `bool` |  |
| `environment_scope` | `string` |  |
| `group` | `map[string]any` |  |
| `id` | `string` |  |
| `managed` | `string` |  |
| `management_project` | `map[string]any` |  |
| `name` | `string` |  |
| `namespace_per_environment` | `string` |  |
| `platform_kubernete` | `map[string]any` |  |
| `platform_type` | `string` |  |
| `provider_gcp` | `map[string]any` |  |
| `provider_type` | `string` |  |
| `user` | `map[string]any` |  |

#### Example: Load

```go
apiEntitiesClusterGroup, err := client.ApiEntitiesClusterGroup(nil).Load(map[string]any{"cluster_id": "cluster_id", "group_id": "group_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesClusterGroup) // the loaded record
```

#### Example: Create

```go
result, err := client.ApiEntitiesClusterGroup(nil).Create(map[string]any{
    "group_id": "example_group_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ApiEntitiesClusterProject

Create an instance: `apiEntitiesClusterProject := client.ApiEntitiesClusterProject(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

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
| `management_project` | `map[string]any` |  |
| `name` | `string` |  |
| `namespace_per_environment` | `string` |  |
| `platform_kubernete` | `map[string]any` |  |
| `platform_type` | `string` |  |
| `project` | `map[string]any` |  |
| `provider_gcp` | `map[string]any` |  |
| `provider_type` | `string` |  |
| `user` | `map[string]any` |  |

#### Example: Load

```go
apiEntitiesClusterProject, err := client.ApiEntitiesClusterProject(nil).Load(map[string]any{"cluster_id": "cluster_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesClusterProject) // the loaded record
```

#### Example: Create

```go
result, err := client.ApiEntitiesClusterProject(nil).Create(map[string]any{
    "project_id": "example_project_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ApiEntitiesClustersAgent

Create an instance: `apiEntitiesClustersAgent := client.ApiEntitiesClustersAgent(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `config_project` | `map[string]any` |  |
| `created_at` | `string` |  |
| `created_by_user_id` | `string` |  |
| `id` | `string` |  |
| `is_receptive` | `bool` |  |
| `name` | `string` |  |

#### Example: Load

```go
apiEntitiesClustersAgent, err := client.ApiEntitiesClustersAgent(nil).Load(map[string]any{"project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesClustersAgent) // the loaded record
```

#### Example: Create

```go
result, err := client.ApiEntitiesClustersAgent(nil).Create(map[string]any{
    "project_id": "example_project_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ApiEntitiesClustersAgentToken

Create an instance: `apiEntitiesClustersAgentToken := client.ApiEntitiesClustersAgentToken(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

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

```go
apiEntitiesClustersAgentToken, err := client.ApiEntitiesClustersAgentToken(nil).Load(map[string]any{"id": "api_entities_clusters_agent_token_id", "cluster_agent_id": "cluster_agent_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesClustersAgentToken) // the loaded record
```


### ApiEntitiesClustersAgentTokenBasic

Create an instance: `apiEntitiesClustersAgentTokenBasic := client.ApiEntitiesClustersAgentTokenBasic(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

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

```go
apiEntitiesClustersAgentTokenBasic, err := client.ApiEntitiesClustersAgentTokenBasic(nil).Load(map[string]any{"cluster_agent_id": "cluster_agent_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesClustersAgentTokenBasic) // the loaded record
```


### ApiEntitiesClustersAgentTokenWithToken

Create an instance: `apiEntitiesClustersAgentTokenWithToken := client.ApiEntitiesClustersAgentTokenWithToken(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Example: Create

```go
result, err := client.ApiEntitiesClustersAgentTokenWithToken(nil).Create(map[string]any{
    "cluster_agent_id": "example_cluster_agent_id",
    "project_id": "example_project_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ApiEntitiesCommit

Create an instance: `apiEntitiesCommit := client.ApiEntitiesCommit(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

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
| `extended_trailer` | `map[string]any` |  |
| `id` | `string` |  |
| `message` | `string` |  |
| `parent_id` | `[]any` |  |
| `short_id` | `string` |  |
| `title` | `string` |  |
| `trailer` | `map[string]any` |  |
| `web_url` | `string` |  |

#### Example: List

```go
apiEntitiesCommits, err := client.ApiEntitiesCommit(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesCommits) // the array of records
```

#### Example: Create

```go
result, err := client.ApiEntitiesCommit(nil).Create(map[string]any{
    "project_id": "example_project_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ApiEntitiesCommitDetail

Create an instance: `apiEntitiesCommitDetail := client.ApiEntitiesCommitDetail(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

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
| `extended_trailer` | `map[string]any` |  |
| `id` | `string` |  |
| `last_pipeline` | `map[string]any` |  |
| `message` | `string` |  |
| `parent_id` | `[]any` |  |
| `project_id` | `int` |  |
| `short_id` | `string` |  |
| `stat` | `map[string]any` |  |
| `status` | `string` |  |
| `title` | `string` |  |
| `trailer` | `map[string]any` |  |
| `web_url` | `string` |  |

#### Example: Load

```go
apiEntitiesCommitDetail, err := client.ApiEntitiesCommitDetail(nil).Load(map[string]any{"project_id": "project_id", "sha": "sha"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesCommitDetail) // the loaded record
```

#### Example: Create

```go
result, err := client.ApiEntitiesCommitDetail(nil).Create(map[string]any{
    "project_id": "example_project_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ApiEntitiesCommitNote

Create an instance: `apiEntitiesCommitNote := client.ApiEntitiesCommitNote(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author` | `map[string]any` |  |
| `created_at` | `string` |  |
| `line` | `int` |  |
| `line_type` | `string` |  |
| `note` | `string` |  |
| `path` | `string` |  |

#### Example: List

```go
apiEntitiesCommitNotes, err := client.ApiEntitiesCommitNote(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesCommitNotes) // the array of records
```

#### Example: Create

```go
result, err := client.ApiEntitiesCommitNote(nil).Create(map[string]any{
    "project_id": "example_project_id",
    "sha": "example_sha",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ApiEntitiesCommitSequence

Create an instance: `apiEntitiesCommitSequence := client.ApiEntitiesCommitSequence(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `count` | `int` |  |

#### Example: Load

```go
apiEntitiesCommitSequence, err := client.ApiEntitiesCommitSequence(nil).Load(map[string]any{"project_id": "project_id", "sha": "sha"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesCommitSequence) // the loaded record
```


### ApiEntitiesCommitSignature

Create an instance: `apiEntitiesCommitSignature := client.ApiEntitiesCommitSignature(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `commit_source` | `string` |  |
| `signature` | `string` |  |
| `signature_type` | `string` |  |

#### Example: Load

```go
apiEntitiesCommitSignature, err := client.ApiEntitiesCommitSignature(nil).Load(map[string]any{"project_id": "project_id", "sha": "sha"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesCommitSignature) // the loaded record
```


### ApiEntitiesCommitStatus

Create an instance: `apiEntitiesCommitStatus := client.ApiEntitiesCommitStatus(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_failure` | `bool` |  |
| `author` | `map[string]any` |  |
| `coverage` | `float64` |  |
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

```go
apiEntitiesCommitStatuss, err := client.ApiEntitiesCommitStatus(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesCommitStatuss) // the array of records
```

#### Example: Create

```go
result, err := client.ApiEntitiesCommitStatus(nil).Create(map[string]any{
    "id": "example_id",
    "project_id": "example_project_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ApiEntitiesCompare

Create an instance: `apiEntitiesCompare := client.ApiEntitiesCompare(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `commit` | `map[string]any` |  |
| `compare_same_ref` | `bool` |  |
| `compare_timeout` | `bool` |  |
| `diff` | `[]any` |  |
| `web_url` | `string` |  |

#### Example: List

```go
apiEntitiesCompares, err := client.ApiEntitiesCompare(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesCompares) // the array of records
```


### ApiEntitiesContainerRegistryRepository

Create an instance: `apiEntitiesContainerRegistryRepository := client.ApiEntitiesContainerRegistryRepository(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

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
| `tag` | `map[string]any` |  |
| `tags_count` | `int` |  |

#### Example: Load

```go
apiEntitiesContainerRegistryRepository, err := client.ApiEntitiesContainerRegistryRepository(nil).Load(map[string]any{"id": "api_entities_container_registry_repository_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesContainerRegistryRepository) // the loaded record
```

#### Example: List

```go
apiEntitiesContainerRegistryRepositorys, err := client.ApiEntitiesContainerRegistryRepository(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesContainerRegistryRepositorys) // the array of records
```


### ApiEntitiesContainerRegistryTag

Create an instance: `apiEntitiesContainerRegistryTag := client.ApiEntitiesContainerRegistryTag(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `location` | `string` |  |
| `name` | `string` |  |
| `path` | `string` |  |

#### Example: List

```go
apiEntitiesContainerRegistryTags, err := client.ApiEntitiesContainerRegistryTag(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesContainerRegistryTags) // the array of records
```


### ApiEntitiesContainerRegistryTagDetail

Create an instance: `apiEntitiesContainerRegistryTagDetail := client.ApiEntitiesContainerRegistryTagDetail(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

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

```go
apiEntitiesContainerRegistryTagDetail, err := client.ApiEntitiesContainerRegistryTagDetail(nil).Load(map[string]any{"project_id": "project_id", "repository_id": "repository_id", "tag_name": "tag_name"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesContainerRegistryTagDetail) // the loaded record
```


### ApiEntitiesContributor

Create an instance: `apiEntitiesContributor := client.ApiEntitiesContributor(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `addition` | `int` |  |
| `commit` | `int` |  |
| `deletion` | `int` |  |
| `email` | `string` |  |
| `name` | `string` |  |

#### Example: Load

```go
apiEntitiesContributor, err := client.ApiEntitiesContributor(nil).Load(map[string]any{"project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesContributor) // the loaded record
```


### ApiEntitiesDeployKey

Create an instance: `apiEntitiesDeployKey := client.ApiEntitiesDeployKey(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

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
| `projects_with_readonly_access` | `map[string]any` |  |
| `projects_with_write_access` | `map[string]any` |  |
| `title` | `string` |  |
| `usage_type` | `string` |  |

#### Example: List

```go
apiEntitiesDeployKeys, err := client.ApiEntitiesDeployKey(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesDeployKeys) // the array of records
```

#### Example: Create

```go
result, err := client.ApiEntitiesDeployKey(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ApiEntitiesDeployKeysProject

Create an instance: `apiEntitiesDeployKeysProject := client.ApiEntitiesDeployKeysProject(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

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
| `projects_with_readonly_access` | `map[string]any` |  |
| `projects_with_write_access` | `map[string]any` |  |
| `title` | `string` |  |
| `usage_type` | `string` |  |

#### Example: Load

```go
apiEntitiesDeployKeysProject, err := client.ApiEntitiesDeployKeysProject(nil).Load(map[string]any{"key_id": "key_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesDeployKeysProject) // the loaded record
```

#### Example: List

```go
apiEntitiesDeployKeysProjects, err := client.ApiEntitiesDeployKeysProject(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesDeployKeysProjects) // the array of records
```

#### Example: Create

```go
result, err := client.ApiEntitiesDeployKeysProject(nil).Create(map[string]any{
    "project_id": "example_project_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ApiEntitiesDeployToken

Create an instance: `apiEntitiesDeployToken := client.ApiEntitiesDeployToken(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `expired` | `bool` |  |
| `expires_at` | `string` |  |
| `id` | `int` |  |
| `name` | `string` |  |
| `revoked` | `bool` |  |
| `scope` | `[]any` |  |
| `username` | `string` |  |

#### Example: Load

```go
apiEntitiesDeployToken, err := client.ApiEntitiesDeployToken(nil).Load(map[string]any{"id": "api_entities_deploy_token_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesDeployToken) // the loaded record
```

#### Example: List

```go
apiEntitiesDeployTokens, err := client.ApiEntitiesDeployToken(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesDeployTokens) // the array of records
```


### ApiEntitiesDeployTokenWithToken

Create an instance: `apiEntitiesDeployTokenWithToken := client.ApiEntitiesDeployTokenWithToken(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Example: Create

```go
result, err := client.ApiEntitiesDeployTokenWithToken(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ApiEntitiesDeployment

Create an instance: `apiEntitiesDeployment := client.ApiEntitiesDeployment(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `deployable` | `map[string]any` |  |
| `environment` | `map[string]any` |  |
| `id` | `int` |  |
| `iid` | `int` |  |
| `ref` | `string` |  |
| `sha` | `string` |  |
| `status` | `string` |  |
| `updated_at` | `string` |  |
| `user` | `map[string]any` |  |

#### Example: List

```go
apiEntitiesDeployments, err := client.ApiEntitiesDeployment(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesDeployments) // the array of records
```


### ApiEntitiesDeploymentExtended

Create an instance: `apiEntitiesDeploymentExtended := client.ApiEntitiesDeploymentExtended(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `approval` | `map[string]any` |  |
| `approval_summary` | `map[string]any` |  |
| `created_at` | `string` |  |
| `deployable` | `map[string]any` |  |
| `environment` | `map[string]any` |  |
| `id` | `int` |  |
| `iid` | `int` |  |
| `pending_approval_count` | `int` |  |
| `ref` | `string` |  |
| `sha` | `string` |  |
| `status` | `string` |  |
| `updated_at` | `string` |  |
| `user` | `map[string]any` |  |

#### Example: Load

```go
apiEntitiesDeploymentExtended, err := client.ApiEntitiesDeploymentExtended(nil).Load(map[string]any{"deployment_id": "deployment_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesDeploymentExtended) // the loaded record
```

#### Example: Create

```go
result, err := client.ApiEntitiesDeploymentExtended(nil).Create(map[string]any{
    "project_id": "example_project_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ApiEntitiesDeploymentsApproval

Create an instance: `apiEntitiesDeploymentsApproval := client.ApiEntitiesDeploymentsApproval(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Example: Create

```go
result, err := client.ApiEntitiesDeploymentsApproval(nil).Create(map[string]any{
    "deployment_id": "example_deployment_id",
    "project_id": "example_project_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ApiEntitiesDictionaryTable

Create an instance: `apiEntitiesDictionaryTable := client.ApiEntitiesDictionaryTable(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `feature_category` | `[]any` |  |
| `table_name` | `string` |  |

#### Example: Load

```go
apiEntitiesDictionaryTable, err := client.ApiEntitiesDictionaryTable(nil).Load(map[string]any{"id": "api_entities_dictionary_table_id", "databas_id": "databas_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesDictionaryTable) // the loaded record
```


### ApiEntitiesDiff

Create an instance: `apiEntitiesDiff := client.ApiEntitiesDiff(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

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

```go
apiEntitiesDiff, err := client.ApiEntitiesDiff(nil).Load(map[string]any{"merge_request_id": "merge_request_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesDiff) // the loaded record
```

#### Example: List

```go
apiEntitiesDiffs, err := client.ApiEntitiesDiff(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesDiffs) // the array of records
```


### ApiEntitiesDiscoveredCluster

Create an instance: `apiEntitiesDiscoveredCluster := client.ApiEntitiesDiscoveredCluster(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `group` | `string` |  |
| `project` | `string` |  |

#### Example: Load

```go
apiEntitiesDiscoveredCluster, err := client.ApiEntitiesDiscoveredCluster(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesDiscoveredCluster) // the loaded record
```


### ApiEntitiesDraftNote

Create an instance: `apiEntitiesDraftNote := client.ApiEntitiesDraftNote(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

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
| `position` | `map[string]any` |  |
| `resolve_discussion` | `bool` |  |

#### Example: Load

```go
apiEntitiesDraftNote, err := client.ApiEntitiesDraftNote(nil).Load(map[string]any{"id": "api_entities_draft_note_id", "merge_request_id": "merge_request_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesDraftNote) // the loaded record
```

#### Example: List

```go
apiEntitiesDraftNotes, err := client.ApiEntitiesDraftNote(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesDraftNotes) // the array of records
```

#### Example: Create

```go
result, err := client.ApiEntitiesDraftNote(nil).Create(map[string]any{
    "merge_request_id": "example_merge_request_id",
    "project_id": "example_project_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ApiEntitiesEnvironment

Create an instance: `apiEntitiesEnvironment := client.ApiEntitiesEnvironment(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auto_stop_at` | `string` |  |
| `auto_stop_setting` | `string` |  |
| `cluster_agent` | `map[string]any` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `external_url` | `string` |  |
| `flux_resource_path` | `string` |  |
| `id` | `int` |  |
| `kubernetes_namespace` | `string` |  |
| `last_deployment` | `map[string]any` |  |
| `name` | `string` |  |
| `project` | `map[string]any` |  |
| `slug` | `string` |  |
| `state` | `string` |  |
| `tier` | `string` |  |
| `updated_at` | `string` |  |

#### Example: Load

```go
apiEntitiesEnvironment, err := client.ApiEntitiesEnvironment(nil).Load(map[string]any{"id": "api_entities_environment_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesEnvironment) // the loaded record
```

#### Example: List

```go
apiEntitiesEnvironments, err := client.ApiEntitiesEnvironment(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesEnvironments) // the array of records
```

#### Example: Create

```go
result, err := client.ApiEntitiesEnvironment(nil).Create(map[string]any{
    "project_id": "example_project_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ApiEntitiesErrorTrackingClientKey

Create an instance: `apiEntitiesErrorTrackingClientKey := client.ApiEntitiesErrorTrackingClientKey(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` |  |
| `id` | `int` |  |
| `public_key` | `string` |  |
| `sentry_dsn` | `string` |  |

#### Example: List

```go
apiEntitiesErrorTrackingClientKeys, err := client.ApiEntitiesErrorTrackingClientKey(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesErrorTrackingClientKeys) // the array of records
```

#### Example: Create

```go
result, err := client.ApiEntitiesErrorTrackingClientKey(nil).Create(map[string]any{
    "project_id": "example_project_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ApiEntitiesErrorTrackingProjectSetting

Create an instance: `apiEntitiesErrorTrackingProjectSetting := client.ApiEntitiesErrorTrackingProjectSetting(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` |  |
| `api_url` | `string` |  |
| `integrated` | `bool` |  |
| `project_name` | `string` |  |
| `sentry_external_url` | `string` |  |

#### Example: Load

```go
apiEntitiesErrorTrackingProjectSetting, err := client.ApiEntitiesErrorTrackingProjectSetting(nil).Load(map[string]any{"project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesErrorTrackingProjectSetting) // the loaded record
```


### ApiEntitiesEvent

Create an instance: `apiEntitiesEvent := client.ApiEntitiesEvent(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action_name` | `string` |  |
| `author` | `map[string]any` |  |
| `author_id` | `int` |  |
| `author_username` | `string` |  |
| `created_at` | `string` |  |
| `id` | `int` |  |
| `imported` | `bool` |  |
| `imported_from` | `string` |  |
| `note` | `map[string]any` |  |
| `project_id` | `int` |  |
| `push_data` | `map[string]any` |  |
| `target_id` | `int` |  |
| `target_iid` | `int` |  |
| `target_title` | `string` |  |
| `target_type` | `string` |  |
| `wiki_page` | `map[string]any` |  |

#### Example: Load

```go
apiEntitiesEvent, err := client.ApiEntitiesEvent(nil).Load(map[string]any{"project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesEvent) // the loaded record
```

#### Example: List

```go
apiEntitiesEvents, err := client.ApiEntitiesEvent(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesEvents) // the array of records
```


### ApiEntitiesFeature

Create an instance: `apiEntitiesFeature := client.ApiEntitiesFeature(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `definition` | `map[string]any` |  |
| `gate` | `map[string]any` |  |
| `name` | `string` |  |
| `state` | `string` |  |

#### Example: List

```go
apiEntitiesFeatures, err := client.ApiEntitiesFeature(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesFeatures) // the array of records
```

#### Example: Create

```go
result, err := client.ApiEntitiesFeature(nil).Create(map[string]any{
    "id": "example_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ApiEntitiesFeatureDefinition

Create an instance: `apiEntitiesFeatureDefinition := client.ApiEntitiesFeatureDefinition(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

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

```go
apiEntitiesFeatureDefinitions, err := client.ApiEntitiesFeatureDefinition(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesFeatureDefinitions) // the array of records
```


### ApiEntitiesFeatureFlag

Create an instance: `apiEntitiesFeatureFlag := client.ApiEntitiesFeatureFlag(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `name` | `string` |  |
| `scope` | `string` |  |
| `strategy` | `map[string]any` |  |
| `updated_at` | `string` |  |
| `version` | `string` |  |

#### Example: Load

```go
apiEntitiesFeatureFlag, err := client.ApiEntitiesFeatureFlag(nil).Load(map[string]any{"id": "api_entities_feature_flag_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesFeatureFlag) // the loaded record
```

#### Example: List

```go
apiEntitiesFeatureFlags, err := client.ApiEntitiesFeatureFlag(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesFeatureFlags) // the array of records
```

#### Example: Create

```go
result, err := client.ApiEntitiesFeatureFlag(nil).Create(map[string]any{
    "project_id": "example_project_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ApiEntitiesFeatureFlagUserList

Create an instance: `apiEntitiesFeatureFlagUserList := client.ApiEntitiesFeatureFlagUserList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

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

```go
apiEntitiesFeatureFlagUserList, err := client.ApiEntitiesFeatureFlagUserList(nil).Load(map[string]any{"iid": "iid", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesFeatureFlagUserList) // the loaded record
```

#### Example: List

```go
apiEntitiesFeatureFlagUserLists, err := client.ApiEntitiesFeatureFlagUserList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesFeatureFlagUserLists) // the array of records
```

#### Example: Create

```go
result, err := client.ApiEntitiesFeatureFlagUserList(nil).Create(map[string]any{
    "project_id": "example_project_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ApiEntitiesFreezePeriod

Create an instance: `apiEntitiesFreezePeriod := client.ApiEntitiesFreezePeriod(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

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

```go
apiEntitiesFreezePeriod, err := client.ApiEntitiesFreezePeriod(nil).Load(map[string]any{"id": "api_entities_freeze_period_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesFreezePeriod) // the loaded record
```

#### Example: List

```go
apiEntitiesFreezePeriods, err := client.ApiEntitiesFreezePeriod(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesFreezePeriods) // the array of records
```

#### Example: Create

```go
result, err := client.ApiEntitiesFreezePeriod(nil).Create(map[string]any{
    "project_id": "example_project_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ApiEntitiesGitlabSubscription

Create an instance: `apiEntitiesGitlabSubscription := client.ApiEntitiesGitlabSubscription(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `billing` | `map[string]any` |  |
| `plan` | `map[string]any` |  |
| `usage` | `map[string]any` |  |

#### Example: Load

```go
apiEntitiesGitlabSubscription, err := client.ApiEntitiesGitlabSubscription(nil).Load(map[string]any{"namespace_id": "namespace_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesGitlabSubscription) // the loaded record
```


### ApiEntitiesGoModuleVersion

Create an instance: `apiEntitiesGoModuleVersion := client.ApiEntitiesGoModuleVersion(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `time` | `string` |  |
| `version` | `string` |  |

#### Example: Load

```go
apiEntitiesGoModuleVersion, err := client.ApiEntitiesGoModuleVersion(nil).Load(map[string]any{"module_version": "module_version", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesGoModuleVersion) // the loaded record
```


### ApiEntitiesGroup

Create an instance: `apiEntitiesGroup := client.ApiEntitiesGroup(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived` | `bool` |  |
| `auto_devops_enabled` | `string` |  |
| `auto_duo_code_review_enabled` | `string` |  |
| `avatar_url` | `string` |  |
| `created_at` | `string` |  |
| `custom_attribute` | `map[string]any` |  |
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
| `ldap_group_link` | `map[string]any` |  |
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
| `root_storage_statistic` | `map[string]any` |  |
| `saml_group_link` | `map[string]any` |  |
| `share_with_group_lock` | `string` |  |
| `shared_runners_setting` | `string` |  |
| `show_diff_preview_in_email` | `bool` |  |
| `statistic` | `map[string]any` |  |
| `subgroup_creation_level` | `string` |  |
| `two_factor_grace_period` | `string` |  |
| `visibility` | `string` |  |
| `web_based_commit_signing_enabled` | `string` |  |
| `web_url` | `string` |  |
| `wiki_access_level` | `string` |  |

#### Example: Load

```go
apiEntitiesGroup, err := client.ApiEntitiesGroup(nil).Load(map[string]any{"project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesGroup) // the loaded record
```

#### Example: List

```go
apiEntitiesGroups, err := client.ApiEntitiesGroup(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesGroups) // the array of records
```

#### Example: Create

```go
result, err := client.ApiEntitiesGroup(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ApiEntitiesGroupDetail

Create an instance: `apiEntitiesGroupDetail := client.ApiEntitiesGroupDetail(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

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
| `custom_attribute` | `map[string]any` |  |
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
| `ldap_group_link` | `map[string]any` |  |
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
| `project` | `map[string]any` |  |
| `project_creation_level` | `string` |  |
| `repository_storage` | `string` |  |
| `request_access_enabled` | `string` |  |
| `require_two_factor_authentication` | `string` |  |
| `root_storage_statistic` | `map[string]any` |  |
| `runners_token` | `string` |  |
| `saml_group_link` | `map[string]any` |  |
| `service_access_tokens_expiration_enforced` | `string` |  |
| `share_with_group_lock` | `string` |  |
| `shared_project` | `map[string]any` |  |
| `shared_runners_minutes_limit` | `string` |  |
| `shared_runners_setting` | `string` |  |
| `shared_with_group` | `string` |  |
| `show_diff_preview_in_email` | `bool` |  |
| `statistic` | `map[string]any` |  |
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

```go
apiEntitiesGroupDetail, err := client.ApiEntitiesGroupDetail(nil).Load(map[string]any{"id": "api_entities_group_detail_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesGroupDetail) // the loaded record
```

#### Example: Create

```go
result, err := client.ApiEntitiesGroupDetail(nil).Create(map[string]any{
    "group_id": "example_group_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ApiEntitiesHook

Create an instance: `apiEntitiesHook := client.ApiEntitiesHook(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alert_status` | `any` |  |
| `branch_filter_strategy` | `string` |  |
| `created_at` | `string` |  |
| `custom_header` | `[]any` |  |
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
| `url_variable` | `[]any` |  |

#### Example: Load

```go
apiEntitiesHook, err := client.ApiEntitiesHook(nil).Load(map[string]any{"id": "api_entities_hook_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesHook) // the loaded record
```

#### Example: List

```go
apiEntitiesHooks, err := client.ApiEntitiesHook(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesHooks) // the array of records
```

#### Example: Create

```go
result, err := client.ApiEntitiesHook(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ApiEntitiesIntegration

Create an instance: `apiEntitiesIntegration := client.ApiEntitiesIntegration(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

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
| `property` | `map[string]any` |  |
| `push_event` | `bool` |  |
| `slug` | `int` |  |
| `tag_push_event` | `bool` |  |
| `title` | `string` |  |
| `updated_at` | `string` |  |
| `vulnerability_event` | `bool` |  |
| `wiki_page_event` | `bool` |  |

#### Example: Load

```go
apiEntitiesIntegration, err := client.ApiEntitiesIntegration(nil).Load(map[string]any{"id": "api_entities_integration_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesIntegration) // the loaded record
```


### ApiEntitiesIntegrationBasic

Create an instance: `apiEntitiesIntegrationBasic := client.ApiEntitiesIntegrationBasic(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

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

```go
apiEntitiesIntegrationBasics, err := client.ApiEntitiesIntegrationBasic(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesIntegrationBasics) // the array of records
```


### ApiEntitiesInvitation

Create an instance: `apiEntitiesInvitation := client.ApiEntitiesInvitation(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

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

```go
apiEntitiesInvitations, err := client.ApiEntitiesInvitation(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesInvitations) // the array of records
```

#### Example: Create

```go
result, err := client.ApiEntitiesInvitation(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ApiEntitiesIssuableTimeStat

Create an instance: `apiEntitiesIssuableTimeStat := client.ApiEntitiesIssuableTimeStat(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `human_time_estimate` | `string` |  |
| `human_total_time_spent` | `string` |  |
| `time_estimate` | `int` |  |
| `total_time_spent` | `int` |  |

#### Example: Load

```go
apiEntitiesIssuableTimeStat, err := client.ApiEntitiesIssuableTimeStat(nil).Load(map[string]any{"project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesIssuableTimeStat) // the loaded record
```

#### Example: Create

```go
result, err := client.ApiEntitiesIssuableTimeStat(nil).Create(map[string]any{
    "project_id": "example_project_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ApiEntitiesIssue

Create an instance: `apiEntitiesIssue := client.ApiEntitiesIssue(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assignee` | `map[string]any` |  |
| `author` | `map[string]any` |  |
| `blocking_issues_count` | `string` |  |
| `closed_at` | `string` |  |
| `closed_by` | `map[string]any` |  |
| `confidential` | `bool` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `discussion_locked` | `bool` |  |
| `downvote` | `string` |  |
| `due_date` | `string` |  |
| `epic` | `map[string]any` |  |
| `epic_iid` | `string` |  |
| `has_task` | `bool` |  |
| `health_status` | `string` |  |
| `id` | `int` |  |
| `iid` | `int` |  |
| `imported` | `string` |  |
| `imported_from` | `string` |  |
| `issue_type` | `string` |  |
| `iteration` | `map[string]any` |  |
| `label` | `[]any` |  |
| `link` | `map[string]any` |  |
| `merge_requests_count` | `string` |  |
| `milestone` | `map[string]any` |  |
| `moved_to_id` | `string` |  |
| `project_id` | `int` |  |
| `reference` | `map[string]any` |  |
| `service_desk_reply_to` | `string` |  |
| `severity` | `string` |  |
| `state` | `string` |  |
| `subscribed` | `string` |  |
| `task_completion_status` | `string` |  |
| `task_status` | `string` |  |
| `time_stat` | `map[string]any` |  |
| `title` | `string` |  |
| `type` | `string` |  |
| `updated_at` | `string` |  |
| `upvote` | `string` |  |
| `user_notes_count` | `string` |  |
| `web_url` | `string` |  |
| `weight` | `string` |  |

#### Example: Load

```go
apiEntitiesIssue, err := client.ApiEntitiesIssue(nil).Load(map[string]any{"id": "api_entities_issue_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesIssue) // the loaded record
```

#### Example: List

```go
apiEntitiesIssues, err := client.ApiEntitiesIssue(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesIssues) // the array of records
```

#### Example: Create

```go
result, err := client.ApiEntitiesIssue(nil).Create(map[string]any{
    "project_id": "example_project_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ApiEntitiesIssueLink

Create an instance: `apiEntitiesIssueLink := client.ApiEntitiesIssueLink(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `link_type` | `string` |  |
| `source_issue` | `map[string]any` |  |
| `target_issue` | `map[string]any` |  |

#### Example: Load

```go
apiEntitiesIssueLink, err := client.ApiEntitiesIssueLink(nil).Load(map[string]any{"id": "api_entities_issue_link_id", "issue_id": "issue_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesIssueLink) // the loaded record
```

#### Example: Create

```go
result, err := client.ApiEntitiesIssueLink(nil).Create(map[string]any{
    "issue_id": "example_issue_id",
    "project_id": "example_project_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ApiEntitiesLicense

Create an instance: `apiEntitiesLicense := client.ApiEntitiesLicense(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `condition` | `[]any` |  |
| `content` | `string` |  |
| `description` | `string` |  |
| `html_url` | `string` |  |
| `key` | `string` |  |
| `limitation` | `[]any` |  |
| `name` | `string` |  |
| `nickname` | `string` |  |
| `permission` | `[]any` |  |
| `popular` | `bool` |  |
| `source_url` | `string` |  |

#### Example: List

```go
apiEntitiesLicenses, err := client.ApiEntitiesLicense(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesLicenses) // the array of records
```


### ApiEntitiesMarkdown

Create an instance: `apiEntitiesMarkdown := client.ApiEntitiesMarkdown(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Example: Create

```go
result, err := client.ApiEntitiesMarkdown(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ApiEntitiesMarkdownUploadAdmin

Create an instance: `apiEntitiesMarkdownUploadAdmin := client.ApiEntitiesMarkdownUploadAdmin(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `filename` | `string` |  |
| `id` | `string` |  |
| `size` | `string` |  |
| `uploaded_by` | `map[string]any` |  |

#### Example: List

```go
apiEntitiesMarkdownUploadAdmins, err := client.ApiEntitiesMarkdownUploadAdmin(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesMarkdownUploadAdmins) // the array of records
```


### ApiEntitiesMember

Create an instance: `apiEntitiesMember := client.ApiEntitiesMember(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `access_level` | `string` |  |
| `avatar_path` | `string` |  |
| `avatar_url` | `string` |  |
| `created_at` | `string` |  |
| `created_by` | `map[string]any` |  |
| `custom_attribute` | `[]any` |  |
| `email` | `string` |  |
| `expires_at` | `string` |  |
| `group_saml_identity` | `map[string]any` |  |
| `group_scim_identity` | `map[string]any` |  |
| `id` | `int` |  |
| `is_using_seat` | `bool` |  |
| `key` | `string` |  |
| `locked` | `bool` |  |
| `member_role` | `map[string]any` |  |
| `membership_state` | `string` |  |
| `name` | `string` |  |
| `override` | `string` |  |
| `public_email` | `string` |  |
| `state` | `string` |  |
| `username` | `string` |  |
| `value` | `string` |  |
| `web_url` | `string` |  |

#### Example: Load

```go
apiEntitiesMember, err := client.ApiEntitiesMember(nil).Load(map[string]any{"id": "api_entities_member_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesMember) // the loaded record
```

#### Example: List

```go
apiEntitiesMembers, err := client.ApiEntitiesMember(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesMembers) // the array of records
```

#### Example: Create

```go
result, err := client.ApiEntitiesMember(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ApiEntitiesMerge

Create an instance: `apiEntitiesMerge := client.ApiEntitiesMerge(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_collaboration` | `bool` |  |
| `allow_maintainer_to_push` | `bool` |  |
| `approvals_before_merge` | `string` |  |
| `assignee` | `map[string]any` |  |
| `author` | `map[string]any` |  |
| `blocking_discussions_resolved` | `string` |  |
| `changes_count` | `string` |  |
| `closed_at` | `string` |  |
| `closed_by` | `map[string]any` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `description_html` | `string` |  |
| `detailed_merge_status` | `string` |  |
| `diff_ref` | `map[string]any` |  |
| `discussion_locked` | `string` |  |
| `diverged_commits_count` | `string` |  |
| `downvote` | `string` |  |
| `draft` | `string` |  |
| `first_contribution` | `string` |  |
| `first_deployed_to_production_at` | `string` |  |
| `force_remove_source_branch` | `string` |  |
| `has_conflict` | `bool` |  |
| `head_pipeline` | `map[string]any` |  |
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
| `merge_user` | `map[string]any` |  |
| `merge_when_pipeline_succeed` | `string` |  |
| `merged_at` | `string` |  |
| `merged_by` | `map[string]any` |  |
| `milestone` | `map[string]any` |  |
| `pipeline` | `map[string]any` |  |
| `prepared_at` | `string` |  |
| `project_id` | `int` |  |
| `rebase_in_progress` | `string` |  |
| `reference` | `string` |  |
| `reviewer` | `map[string]any` |  |
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
| `time_stat` | `map[string]any` |  |
| `title` | `string` |  |
| `title_html` | `string` |  |
| `updated_at` | `string` |  |
| `upvote` | `string` |  |
| `user` | `map[string]any` |  |
| `user_notes_count` | `string` |  |
| `web_url` | `string` |  |
| `work_in_progress` | `string` |  |

#### Example: Load

```go
apiEntitiesMerge, err := client.ApiEntitiesMerge(nil).Load(map[string]any{"merge_request_iid": "merge_request_iid", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesMerge) // the loaded record
```

#### Example: Create

```go
result, err := client.ApiEntitiesMerge(nil).Create(map[string]any{
    "project_id": "example_project_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ApiEntitiesMergeRequestApproval

Create an instance: `apiEntitiesMergeRequestApproval := client.ApiEntitiesMergeRequestApproval(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `approved` | `bool` |  |
| `approved_by` | `map[string]any` |  |
| `user_can_approve` | `bool` |  |
| `user_has_approved` | `bool` |  |

#### Example: Load

```go
apiEntitiesMergeRequestApproval, err := client.ApiEntitiesMergeRequestApproval(nil).Load(map[string]any{"merge_request_id": "merge_request_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesMergeRequestApproval) // the loaded record
```

#### Example: Create

```go
result, err := client.ApiEntitiesMergeRequestApproval(nil).Create(map[string]any{
    "merge_request_id": "example_merge_request_id",
    "project_id": "example_project_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ApiEntitiesMergeRequestBasic

Create an instance: `apiEntitiesMergeRequestBasic := client.ApiEntitiesMergeRequestBasic(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_collaboration` | `bool` |  |
| `allow_maintainer_to_push` | `bool` |  |
| `approvals_before_merge` | `string` |  |
| `assignee` | `map[string]any` |  |
| `author` | `map[string]any` |  |
| `blocking_discussions_resolved` | `string` |  |
| `closed_at` | `string` |  |
| `closed_by` | `map[string]any` |  |
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
| `merge_user` | `map[string]any` |  |
| `merge_when_pipeline_succeed` | `string` |  |
| `merged_at` | `string` |  |
| `merged_by` | `map[string]any` |  |
| `milestone` | `map[string]any` |  |
| `prepared_at` | `string` |  |
| `project_id` | `int` |  |
| `reference` | `string` |  |
| `reviewer` | `map[string]any` |  |
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
| `time_stat` | `map[string]any` |  |
| `title` | `string` |  |
| `title_html` | `string` |  |
| `updated_at` | `string` |  |
| `upvote` | `string` |  |
| `user_notes_count` | `string` |  |
| `web_url` | `string` |  |
| `work_in_progress` | `string` |  |

#### Example: Load

```go
apiEntitiesMergeRequestBasic, err := client.ApiEntitiesMergeRequestBasic(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesMergeRequestBasic) // the loaded record
```

#### Example: List

```go
apiEntitiesMergeRequestBasics, err := client.ApiEntitiesMergeRequestBasic(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesMergeRequestBasics) // the array of records
```


### ApiEntitiesMergeRequestChange

Create an instance: `apiEntitiesMergeRequestChange := client.ApiEntitiesMergeRequestChange(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_collaboration` | `bool` |  |
| `allow_maintainer_to_push` | `bool` |  |
| `approvals_before_merge` | `string` |  |
| `assignee` | `map[string]any` |  |
| `author` | `map[string]any` |  |
| `blocking_discussions_resolved` | `string` |  |
| `change` | `map[string]any` |  |
| `changes_count` | `string` |  |
| `closed_at` | `string` |  |
| `closed_by` | `map[string]any` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `description_html` | `string` |  |
| `detailed_merge_status` | `string` |  |
| `diff_ref` | `map[string]any` |  |
| `discussion_locked` | `string` |  |
| `diverged_commits_count` | `string` |  |
| `downvote` | `string` |  |
| `draft` | `string` |  |
| `first_contribution` | `string` |  |
| `first_deployed_to_production_at` | `string` |  |
| `force_remove_source_branch` | `string` |  |
| `has_conflict` | `bool` |  |
| `head_pipeline` | `map[string]any` |  |
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
| `merge_user` | `map[string]any` |  |
| `merge_when_pipeline_succeed` | `string` |  |
| `merged_at` | `string` |  |
| `merged_by` | `map[string]any` |  |
| `milestone` | `map[string]any` |  |
| `overflow` | `string` |  |
| `pipeline` | `map[string]any` |  |
| `prepared_at` | `string` |  |
| `project_id` | `int` |  |
| `rebase_in_progress` | `string` |  |
| `reference` | `string` |  |
| `reviewer` | `map[string]any` |  |
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
| `time_stat` | `map[string]any` |  |
| `title` | `string` |  |
| `title_html` | `string` |  |
| `updated_at` | `string` |  |
| `upvote` | `string` |  |
| `user` | `map[string]any` |  |
| `user_notes_count` | `string` |  |
| `web_url` | `string` |  |
| `work_in_progress` | `string` |  |

#### Example: Load

```go
apiEntitiesMergeRequestChange, err := client.ApiEntitiesMergeRequestChange(nil).Load(map[string]any{"merge_request_id": "merge_request_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesMergeRequestChange) // the loaded record
```


### ApiEntitiesMergeRequestDiff

Create an instance: `apiEntitiesMergeRequestDiff := client.ApiEntitiesMergeRequestDiff(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

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

```go
apiEntitiesMergeRequestDiffs, err := client.ApiEntitiesMergeRequestDiff(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesMergeRequestDiffs) // the array of records
```


### ApiEntitiesMergeRequestDiffFull

Create an instance: `apiEntitiesMergeRequestDiffFull := client.ApiEntitiesMergeRequestDiffFull(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `base_commit_sha` | `string` |  |
| `commit` | `map[string]any` |  |
| `created_at` | `string` |  |
| `diff` | `map[string]any` |  |
| `head_commit_sha` | `string` |  |
| `id` | `string` |  |
| `merge_request_id` | `string` |  |
| `patch_id_sha` | `string` |  |
| `real_size` | `string` |  |
| `start_commit_sha` | `string` |  |
| `state` | `string` |  |

#### Example: Load

```go
apiEntitiesMergeRequestDiffFull, err := client.ApiEntitiesMergeRequestDiffFull(nil).Load(map[string]any{"merge_request_id": "merge_request_id", "project_id": "project_id", "version_id": "version_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesMergeRequestDiffFull) // the loaded record
```


### ApiEntitiesMergeRequestReviewer

Create an instance: `apiEntitiesMergeRequestReviewer := client.ApiEntitiesMergeRequestReviewer(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `state` | `string` |  |
| `user` | `map[string]any` |  |

#### Example: Load

```go
apiEntitiesMergeRequestReviewer, err := client.ApiEntitiesMergeRequestReviewer(nil).Load(map[string]any{"merge_request_id": "merge_request_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesMergeRequestReviewer) // the loaded record
```


### ApiEntitiesMetricImage

Create an instance: `apiEntitiesMetricImage := client.ApiEntitiesMetricImage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

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

```go
apiEntitiesMetricImages, err := client.ApiEntitiesMetricImage(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesMetricImages) // the array of records
```

#### Example: Create

```go
result, err := client.ApiEntitiesMetricImage(nil).Create(map[string]any{
    "alert_management_alert_id": "example_alert_management_alert_id",
    "project_id": "example_project_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ApiEntitiesMrNote

Create an instance: `apiEntitiesMrNote := client.ApiEntitiesMrNote(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author` | `map[string]any` |  |
| `note` | `string` |  |

#### Example: Load

```go
apiEntitiesMrNote, err := client.ApiEntitiesMrNote(nil).Load(map[string]any{"merge_request_id": "merge_request_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesMrNote) // the loaded record
```


### ApiEntitiesNamespace

Create an instance: `apiEntitiesNamespace := client.ApiEntitiesNamespace(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

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

```go
apiEntitiesNamespace, err := client.ApiEntitiesNamespace(nil).Load(map[string]any{"id": "api_entities_namespace_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesNamespace) // the loaded record
```

#### Example: List

```go
apiEntitiesNamespaces, err := client.ApiEntitiesNamespace(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesNamespaces) // the array of records
```


### ApiEntitiesNamespaceExistence

Create an instance: `apiEntitiesNamespaceExistence := client.ApiEntitiesNamespaceExistence(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `exist` | `bool` |  |
| `suggest` | `[]any` |  |

#### Example: List

```go
apiEntitiesNamespaceExistences, err := client.ApiEntitiesNamespaceExistence(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesNamespaceExistences) // the array of records
```


### ApiEntitiesNamespacesStorageLimitExclusion

Create an instance: `apiEntitiesNamespacesStorageLimitExclusion := client.ApiEntitiesNamespacesStorageLimitExclusion(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `int` |  |
| `namespace_id` | `int` |  |
| `namespace_name` | `string` |  |
| `reason` | `string` |  |

#### Example: Load

```go
apiEntitiesNamespacesStorageLimitExclusion, err := client.ApiEntitiesNamespacesStorageLimitExclusion(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesNamespacesStorageLimitExclusion) // the loaded record
```

#### Example: Create

```go
result, err := client.ApiEntitiesNamespacesStorageLimitExclusion(nil).Create(map[string]any{
    "namespace_id": "example_namespace_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ApiEntitiesNpmPackage

Create an instance: `apiEntitiesNpmPackage := client.ApiEntitiesNpmPackage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `dist_tag` | `map[string]any` |  |
| `name` | `string` |  |
| `version` | `map[string]any` |  |

#### Example: Load

```go
apiEntitiesNpmPackage, err := client.ApiEntitiesNpmPackage(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesNpmPackage) // the loaded record
```


### ApiEntitiesNpmPackageTag

Create an instance: `apiEntitiesNpmPackageTag := client.ApiEntitiesNpmPackageTag(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `dist_tag` | `map[string]any` |  |

#### Example: Load

```go
apiEntitiesNpmPackageTag, err := client.ApiEntitiesNpmPackageTag(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesNpmPackageTag) // the loaded record
```


### ApiEntitiesNugetPackagesVersion

Create an instance: `apiEntitiesNugetPackagesVersion := client.ApiEntitiesNugetPackagesVersion(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `version` | `[]any` |  |

#### Example: List

```go
apiEntitiesNugetPackagesVersions, err := client.ApiEntitiesNugetPackagesVersion(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesNugetPackagesVersions) // the array of records
```


### ApiEntitiesNugetSearchResult

Create an instance: `apiEntitiesNugetSearchResult := client.ApiEntitiesNugetSearchResult(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

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

```go
apiEntitiesNugetSearchResults, err := client.ApiEntitiesNugetSearchResult(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesNugetSearchResults) // the array of records
```


### ApiEntitiesNugetServiceIndex

Create an instance: `apiEntitiesNugetServiceIndex := client.ApiEntitiesNugetServiceIndex(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `resource` | `[]any` |  |
| `version` | `string` |  |

#### Example: List

```go
apiEntitiesNugetServiceIndexs, err := client.ApiEntitiesNugetServiceIndex(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesNugetServiceIndexs) // the array of records
```


### ApiEntitiesOrganizationsOrganization

Create an instance: `apiEntitiesOrganizationsOrganization := client.ApiEntitiesOrganizationsOrganization(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Example: Create

```go
result, err := client.ApiEntitiesOrganizationsOrganization(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ApiEntitiesPackage

Create an instance: `apiEntitiesPackage := client.ApiEntitiesPackage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `conan_package_name` | `string` |  |
| `created_at` | `string` |  |
| `id` | `int` |  |
| `last_downloaded_at` | `string` |  |
| `link` | `map[string]any` |  |
| `name` | `string` |  |
| `package_type` | `string` |  |
| `pipeline` | `map[string]any` |  |
| `project_id` | `int` |  |
| `project_path` | `string` |  |
| `status` | `string` |  |
| `tag` | `string` |  |
| `version` | `string` |  |

#### Example: Load

```go
apiEntitiesPackage, err := client.ApiEntitiesPackage(nil).Load(map[string]any{"id": "api_entities_package_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesPackage) // the loaded record
```

#### Example: List

```go
apiEntitiesPackages, err := client.ApiEntitiesPackage(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesPackages) // the array of records
```


### ApiEntitiesPackageFile

Create an instance: `apiEntitiesPackageFile := client.ApiEntitiesPackageFile(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

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
| `pipeline` | `map[string]any` |  |
| `size` | `int` |  |

#### Example: List

```go
apiEntitiesPackageFiles, err := client.ApiEntitiesPackageFile(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesPackageFiles) // the array of records
```


### ApiEntitiesPackagePipeline

Create an instance: `apiEntitiesPackagePipeline := client.ApiEntitiesPackagePipeline(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

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
| `user` | `map[string]any` |  |
| `web_url` | `string` |  |

#### Example: Load

```go
apiEntitiesPackagePipeline, err := client.ApiEntitiesPackagePipeline(nil).Load(map[string]any{"package_id": "package_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesPackagePipeline) // the loaded record
```


### ApiEntitiesPackagesConanFilesList

Create an instance: `apiEntitiesPackagesConanFilesList := client.ApiEntitiesPackagesConanFilesList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `file` | `map[string]any` |  |

#### Example: Load

```go
apiEntitiesPackagesConanFilesList, err := client.ApiEntitiesPackagesConanFilesList(nil).Load(map[string]any{"conan_id": "conan_id", "package_channel": "package_channel", "package_username": "package_username", "package_version": "package_version", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesPackagesConanFilesList) // the loaded record
```


### ApiEntitiesPackagesConanPackageManifest

Create an instance: `apiEntitiesPackagesConanPackageManifest := client.ApiEntitiesPackagesConanPackageManifest(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `package_url` | `map[string]any` |  |

#### Example: Load

```go
apiEntitiesPackagesConanPackageManifest, err := client.ApiEntitiesPackagesConanPackageManifest(nil).Load(map[string]any{"conan_id": "conan_id", "conan_package_reference": "conan_package_reference", "package_channel": "package_channel", "package_username": "package_username", "package_version": "package_version"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesPackagesConanPackageManifest) // the loaded record
```


### ApiEntitiesPackagesConanPackageRevision

Create an instance: `apiEntitiesPackagesConanPackageRevision := client.ApiEntitiesPackagesConanPackageRevision(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `revision` | `string` |  |
| `time` | `string` |  |

#### Example: List

```go
apiEntitiesPackagesConanPackageRevisions, err := client.ApiEntitiesPackagesConanPackageRevision(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesPackagesConanPackageRevisions) // the array of records
```


### ApiEntitiesPackagesConanPackageSnapshot

Create an instance: `apiEntitiesPackagesConanPackageSnapshot := client.ApiEntitiesPackagesConanPackageSnapshot(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `package_snapshot` | `map[string]any` |  |

#### Example: Load

```go
apiEntitiesPackagesConanPackageSnapshot, err := client.ApiEntitiesPackagesConanPackageSnapshot(nil).Load(map[string]any{"conan_id": "conan_id", "conan_package_reference": "conan_package_reference", "package_channel": "package_channel", "package_username": "package_username", "package_version": "package_version"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesPackagesConanPackageSnapshot) // the loaded record
```


### ApiEntitiesPackagesConanRecipeManifest

Create an instance: `apiEntitiesPackagesConanRecipeManifest := client.ApiEntitiesPackagesConanRecipeManifest(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `recipe_url` | `map[string]any` |  |

#### Example: Load

```go
apiEntitiesPackagesConanRecipeManifest, err := client.ApiEntitiesPackagesConanRecipeManifest(nil).Load(map[string]any{"conan_id": "conan_id", "package_channel": "package_channel", "package_username": "package_username", "package_version": "package_version"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesPackagesConanRecipeManifest) // the loaded record
```


### ApiEntitiesPackagesConanRecipeRevision

Create an instance: `apiEntitiesPackagesConanRecipeRevision := client.ApiEntitiesPackagesConanRecipeRevision(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `revision` | `string` |  |
| `time` | `string` |  |

#### Example: List

```go
apiEntitiesPackagesConanRecipeRevisions, err := client.ApiEntitiesPackagesConanRecipeRevision(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesPackagesConanRecipeRevisions) // the array of records
```


### ApiEntitiesPackagesConanRecipeSnapshot

Create an instance: `apiEntitiesPackagesConanRecipeSnapshot := client.ApiEntitiesPackagesConanRecipeSnapshot(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `recipe_snapshot` | `map[string]any` |  |

#### Example: Load

```go
apiEntitiesPackagesConanRecipeSnapshot, err := client.ApiEntitiesPackagesConanRecipeSnapshot(nil).Load(map[string]any{"id": "api_entities_packages_conan_recipe_snapshot_id", "package_channel": "package_channel", "package_name": "package_name", "package_username": "package_username", "package_version": "package_version"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesPackagesConanRecipeSnapshot) // the loaded record
```


### ApiEntitiesPackagesConanRevision

Create an instance: `apiEntitiesPackagesConanRevision := client.ApiEntitiesPackagesConanRevision(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `revision` | `string` |  |
| `time` | `string` |  |

#### Example: Load

```go
apiEntitiesPackagesConanRevision, err := client.ApiEntitiesPackagesConanRevision(nil).Load(map[string]any{"conan_id": "conan_id", "package_channel": "package_channel", "package_username": "package_username", "package_version": "package_version", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesPackagesConanRevision) // the loaded record
```


### ApiEntitiesPackagesConanUploadUrl

Create an instance: `apiEntitiesPackagesConanUploadUrl := client.ApiEntitiesPackagesConanUploadUrl(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `upload_url` | `map[string]any` |  |

#### Example: Create

```go
result, err := client.ApiEntitiesPackagesConanUploadUrl(nil).Create(map[string]any{
    "conan_id": "example_conan_id",
    "package_channel": "example_package_channel",
    "package_username": "example_package_username",
    "package_version": "example_package_version",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ApiEntitiesPackagesDebianDistribution

Create an instance: `apiEntitiesPackagesDebianDistribution := client.ApiEntitiesPackagesDebianDistribution(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `architecture` | `[]any` |  |
| `codename` | `string` |  |
| `component` | `[]any` |  |
| `description` | `string` |  |
| `id` | `int` |  |
| `label` | `string` |  |
| `origin` | `string` |  |
| `suite` | `string` |  |
| `valid_time_duration_second` | `int` |  |
| `version` | `string` |  |

#### Example: Load

```go
apiEntitiesPackagesDebianDistribution, err := client.ApiEntitiesPackagesDebianDistribution(nil).Load(map[string]any{"id": "api_entities_packages_debian_distribution_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesPackagesDebianDistribution) // the loaded record
```

#### Example: List

```go
apiEntitiesPackagesDebianDistributions, err := client.ApiEntitiesPackagesDebianDistribution(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesPackagesDebianDistributions) // the array of records
```

#### Example: Create

```go
result, err := client.ApiEntitiesPackagesDebianDistribution(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ApiEntitiesPagesDomain

Create an instance: `apiEntitiesPagesDomain := client.ApiEntitiesPagesDomain(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auto_ssl_enabled` | `string` |  |
| `certificate` | `map[string]any` |  |
| `domain` | `string` |  |
| `enabled_until` | `string` |  |
| `url` | `string` |  |
| `verification_code` | `string` |  |
| `verified` | `bool` |  |

#### Example: Load

```go
apiEntitiesPagesDomain, err := client.ApiEntitiesPagesDomain(nil).Load(map[string]any{"id": "api_entities_pages_domain_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesPagesDomain) // the loaded record
```

#### Example: List

```go
apiEntitiesPagesDomains, err := client.ApiEntitiesPagesDomain(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesPagesDomains) // the array of records
```

#### Example: Create

```go
result, err := client.ApiEntitiesPagesDomain(nil).Create(map[string]any{
    "project_id": "example_project_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ApiEntitiesPagesDomainBasic

Create an instance: `apiEntitiesPagesDomainBasic := client.ApiEntitiesPagesDomainBasic(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auto_ssl_enabled` | `string` |  |
| `certificate_expiration` | `map[string]any` |  |
| `domain` | `string` |  |
| `enabled_until` | `string` |  |
| `project_id` | `string` |  |
| `url` | `string` |  |
| `verification_code` | `string` |  |
| `verified` | `bool` |  |

#### Example: Load

```go
apiEntitiesPagesDomainBasic, err := client.ApiEntitiesPagesDomainBasic(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesPagesDomainBasic) // the loaded record
```


### ApiEntitiesPersonalAccessToken

Create an instance: `apiEntitiesPersonalAccessToken := client.ApiEntitiesPersonalAccessToken(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

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
| `scope` | `[]any` |  |
| `user_id` | `int` |  |

#### Example: List

```go
apiEntitiesPersonalAccessTokens, err := client.ApiEntitiesPersonalAccessToken(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesPersonalAccessTokens) // the array of records
```


### ApiEntitiesPersonalAccessTokenWithLastUsedIp

Create an instance: `apiEntitiesPersonalAccessTokenWithLastUsedIp := client.ApiEntitiesPersonalAccessTokenWithLastUsedIp(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `expires_at` | `string` |  |
| `id` | `int` |  |
| `last_used_at` | `string` |  |
| `last_used_ip` | `[]any` |  |
| `name` | `string` |  |
| `revoked` | `bool` |  |
| `scope` | `[]any` |  |
| `user_id` | `int` |  |

#### Example: Load

```go
apiEntitiesPersonalAccessTokenWithLastUsedIp, err := client.ApiEntitiesPersonalAccessTokenWithLastUsedIp(nil).Load(map[string]any{"id": "api_entities_personal_access_token_with_last_used_ip_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesPersonalAccessTokenWithLastUsedIp) // the loaded record
```

#### Example: List

```go
apiEntitiesPersonalAccessTokenWithLastUsedIps, err := client.ApiEntitiesPersonalAccessTokenWithLastUsedIp(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesPersonalAccessTokenWithLastUsedIps) // the array of records
```


### ApiEntitiesPersonalAccessTokenWithToken

Create an instance: `apiEntitiesPersonalAccessTokenWithToken := client.ApiEntitiesPersonalAccessTokenWithToken(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

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
| `scope` | `[]any` |  |
| `token` | `string` |  |
| `user_id` | `int` |  |

#### Example: Create

```go
result, err := client.ApiEntitiesPersonalAccessTokenWithToken(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ApiEntitiesPersonalSnippet

Create an instance: `apiEntitiesPersonalSnippet := client.ApiEntitiesPersonalSnippet(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author` | `map[string]any` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `file` | `[]any` |  |
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

```go
apiEntitiesPersonalSnippet, err := client.ApiEntitiesPersonalSnippet(nil).Load(map[string]any{"id": "api_entities_personal_snippet_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesPersonalSnippet) // the loaded record
```

#### Example: List

```go
apiEntitiesPersonalSnippets, err := client.ApiEntitiesPersonalSnippet(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesPersonalSnippets) // the array of records
```

#### Example: Create

```go
result, err := client.ApiEntitiesPersonalSnippet(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ApiEntitiesPlanLimit

Create an instance: `apiEntitiesPlanLimit := client.ApiEntitiesPlanLimit(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

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
| `limits_history` | `map[string]any` |  |
| `maven_max_file_size` | `int` |  |
| `notification_limit` | `int` |  |
| `npm_max_file_size` | `int` |  |
| `nuget_max_file_size` | `int` |  |
| `pipeline_hierarchy_size` | `int` |  |
| `pypi_max_file_size` | `int` |  |
| `storage_size_limit` | `int` |  |
| `terraform_module_max_file_size` | `int` |  |

#### Example: Load

```go
apiEntitiesPlanLimit, err := client.ApiEntitiesPlanLimit(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesPlanLimit) // the loaded record
```


### ApiEntitiesProject

Create an instance: `apiEntitiesProject := client.ApiEntitiesProject(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

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
| `ci_id_token_sub_claim_component` | `[]any` |  |
| `ci_job_token_scope_enabled` | `bool` |  |
| `ci_pipeline_variables_minimum_override_role` | `string` |  |
| `ci_push_repository_for_job_token_allowed` | `bool` |  |
| `ci_restrict_pipeline_cancellation_role` | `string` |  |
| `ci_separated_cache` | `bool` |  |
| `compliance_framework` | `string` |  |
| `container_expiration_policy` | `map[string]any` |  |
| `container_registry_access_level` | `string` |  |
| `container_registry_enabled` | `bool` |  |
| `container_registry_image_prefix` | `string` |  |
| `created_at` | `string` |  |
| `creator_id` | `int` |  |
| `custom_attribute` | `map[string]any` |  |
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
| `forked_from_project` | `map[string]any` |  |
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
| `license` | `map[string]any` |  |
| `license_url` | `string` |  |
| `link` | `map[string]any` |  |
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
| `namespace` | `map[string]any` |  |
| `only_allow_merge_if_all_discussions_are_resolved` | `bool` |  |
| `only_allow_merge_if_all_status_checks_passed` | `string` |  |
| `only_allow_merge_if_pipeline_succeed` | `bool` |  |
| `only_mirror_protected_branch` | `string` |  |
| `open_issues_count` | `int` |  |
| `owner` | `map[string]any` |  |
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
| `shared_with_group` | `[]any` |  |
| `show_diff_preview_in_email` | `bool` |  |
| `snippets_access_level` | `string` |  |
| `snippets_enabled` | `bool` |  |
| `spp_repository_pipeline_access` | `bool` |  |
| `squash_commit_template` | `string` |  |
| `squash_option` | `string` |  |
| `ssh_url_to_repo` | `string` |  |
| `star_count` | `int` |  |
| `statistic` | `map[string]any` |  |
| `suggestion_commit_message` | `string` |  |
| `tag_list` | `[]any` |  |
| `topic` | `[]any` |  |
| `updated_at` | `string` |  |
| `visibility` | `string` |  |
| `warn_about_potentially_unwanted_character` | `bool` |  |
| `web_based_commit_signing_enabled` | `string` |  |
| `web_url` | `string` |  |
| `wiki_access_level` | `string` |  |
| `wiki_enabled` | `bool` |  |

#### Example: List

```go
apiEntitiesProjects, err := client.ApiEntitiesProject(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesProjects) // the array of records
```

#### Example: Create

```go
result, err := client.ApiEntitiesProject(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ApiEntitiesProjectDailyStatistic

Create an instance: `apiEntitiesProjectDailyStatistic := client.ApiEntitiesProjectDailyStatistic(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `fetch` | `map[string]any` |  |

#### Example: Load

```go
apiEntitiesProjectDailyStatistic, err := client.ApiEntitiesProjectDailyStatistic(nil).Load(map[string]any{"project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesProjectDailyStatistic) // the loaded record
```


### ApiEntitiesProjectExportStatus

Create an instance: `apiEntitiesProjectExportStatus := client.ApiEntitiesProjectExportStatus(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `export_status` | `string` |  |
| `id` | `int` |  |
| `link` | `map[string]any` |  |
| `name` | `string` |  |
| `name_with_namespace` | `string` |  |
| `path` | `string` |  |
| `path_with_namespace` | `string` |  |

#### Example: Load

```go
apiEntitiesProjectExportStatus, err := client.ApiEntitiesProjectExportStatus(nil).Load(map[string]any{"project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesProjectExportStatus) // the loaded record
```


### ApiEntitiesProjectGroupLink

Create an instance: `apiEntitiesProjectGroupLink := client.ApiEntitiesProjectGroupLink(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Example: Create

```go
result, err := client.ApiEntitiesProjectGroupLink(nil).Create(map[string]any{
    "project_id": "example_project_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ApiEntitiesProjectHook

Create an instance: `apiEntitiesProjectHook := client.ApiEntitiesProjectHook(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alert_status` | `any` |  |
| `branch_filter_strategy` | `string` |  |
| `confidential_issues_event` | `bool` |  |
| `confidential_note_event` | `bool` |  |
| `created_at` | `string` |  |
| `custom_header` | `[]any` |  |
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
| `url_variable` | `[]any` |  |
| `vulnerability_event` | `bool` |  |
| `wiki_page_event` | `bool` |  |

#### Example: Load

```go
apiEntitiesProjectHook, err := client.ApiEntitiesProjectHook(nil).Load(map[string]any{"id": "api_entities_project_hook_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesProjectHook) // the loaded record
```

#### Example: List

```go
apiEntitiesProjectHooks, err := client.ApiEntitiesProjectHook(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesProjectHooks) // the array of records
```

#### Example: Create

```go
result, err := client.ApiEntitiesProjectHook(nil).Create(map[string]any{
    "project_id": "example_project_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ApiEntitiesProjectImportStatus

Create an instance: `apiEntitiesProjectImportStatus := client.ApiEntitiesProjectImportStatus(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

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

```go
apiEntitiesProjectImportStatuss, err := client.ApiEntitiesProjectImportStatus(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesProjectImportStatuss) // the array of records
```

#### Example: Create

```go
result, err := client.ApiEntitiesProjectImportStatus(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ApiEntitiesProjectJobTokenScope

Create an instance: `apiEntitiesProjectJobTokenScope := client.ApiEntitiesProjectJobTokenScope(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `inbound_enabled` | `bool` |  |
| `outbound_enabled` | `bool` |  |

#### Example: Load

```go
apiEntitiesProjectJobTokenScope, err := client.ApiEntitiesProjectJobTokenScope(nil).Load(map[string]any{"project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesProjectJobTokenScope) // the loaded record
```


### ApiEntitiesProjectRepositoryStorage

Create an instance: `apiEntitiesProjectRepositoryStorage := client.ApiEntitiesProjectRepositoryStorage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `disk_path` | `string` |  |
| `project_id` | `int` |  |
| `repository_storage` | `string` |  |

#### Example: Load

```go
apiEntitiesProjectRepositoryStorage, err := client.ApiEntitiesProjectRepositoryStorage(nil).Load(map[string]any{"project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesProjectRepositoryStorage) // the loaded record
```


### ApiEntitiesProjectSnippet

Create an instance: `apiEntitiesProjectSnippet := client.ApiEntitiesProjectSnippet(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author` | `map[string]any` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `file` | `[]any` |  |
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

```go
apiEntitiesProjectSnippet, err := client.ApiEntitiesProjectSnippet(nil).Load(map[string]any{"id": "api_entities_project_snippet_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesProjectSnippet) // the loaded record
```

#### Example: List

```go
apiEntitiesProjectSnippets, err := client.ApiEntitiesProjectSnippet(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesProjectSnippets) // the array of records
```

#### Example: Create

```go
result, err := client.ApiEntitiesProjectSnippet(nil).Create(map[string]any{
    "project_id": "example_project_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ApiEntitiesProjectUpload

Create an instance: `apiEntitiesProjectUpload := client.ApiEntitiesProjectUpload(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Example: Create

```go
result, err := client.ApiEntitiesProjectUpload(nil).Create(map[string]any{
    "project_id": "example_project_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ApiEntitiesProjectWithAccess

Create an instance: `apiEntitiesProjectWithAccess := client.ApiEntitiesProjectWithAccess(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

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
| `ci_id_token_sub_claim_component` | `[]any` |  |
| `ci_job_token_scope_enabled` | `bool` |  |
| `ci_pipeline_variables_minimum_override_role` | `string` |  |
| `ci_push_repository_for_job_token_allowed` | `bool` |  |
| `ci_restrict_pipeline_cancellation_role` | `string` |  |
| `ci_separated_cache` | `bool` |  |
| `compliance_framework` | `string` |  |
| `container_expiration_policy` | `map[string]any` |  |
| `container_registry_access_level` | `string` |  |
| `container_registry_enabled` | `bool` |  |
| `container_registry_image_prefix` | `string` |  |
| `created_at` | `string` |  |
| `creator_id` | `int` |  |
| `custom_attribute` | `map[string]any` |  |
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
| `forked_from_project` | `map[string]any` |  |
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
| `license` | `map[string]any` |  |
| `license_url` | `string` |  |
| `link` | `map[string]any` |  |
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
| `namespace` | `map[string]any` |  |
| `only_allow_merge_if_all_discussions_are_resolved` | `bool` |  |
| `only_allow_merge_if_all_status_checks_passed` | `string` |  |
| `only_allow_merge_if_pipeline_succeed` | `bool` |  |
| `only_mirror_protected_branch` | `string` |  |
| `open_issues_count` | `int` |  |
| `owner` | `map[string]any` |  |
| `package_registry_access_level` | `string` |  |
| `packages_enabled` | `bool` |  |
| `pages_access_level` | `string` |  |
| `path` | `string` |  |
| `path_with_namespace` | `string` |  |
| `permission` | `map[string]any` |  |
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
| `shared_with_group` | `[]any` |  |
| `show_diff_preview_in_email` | `bool` |  |
| `snippets_access_level` | `string` |  |
| `snippets_enabled` | `bool` |  |
| `spp_repository_pipeline_access` | `bool` |  |
| `squash_commit_template` | `string` |  |
| `squash_option` | `string` |  |
| `ssh_url_to_repo` | `string` |  |
| `star_count` | `int` |  |
| `statistic` | `map[string]any` |  |
| `suggestion_commit_message` | `string` |  |
| `tag_list` | `[]any` |  |
| `topic` | `[]any` |  |
| `updated_at` | `string` |  |
| `visibility` | `string` |  |
| `warn_about_potentially_unwanted_character` | `bool` |  |
| `web_based_commit_signing_enabled` | `string` |  |
| `web_url` | `string` |  |
| `wiki_access_level` | `string` |  |
| `wiki_enabled` | `bool` |  |

#### Example: Load

```go
apiEntitiesProjectWithAccess, err := client.ApiEntitiesProjectWithAccess(nil).Load(map[string]any{"id": "api_entities_project_with_access_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesProjectWithAccess) // the loaded record
```


### ApiEntitiesProjectsContainerRegistryProtectionRule

Create an instance: `apiEntitiesProjectsContainerRegistryProtectionRule := client.ApiEntitiesProjectsContainerRegistryProtectionRule(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `int` |  |
| `minimum_access_level_for_delete` | `string` |  |
| `minimum_access_level_for_push` | `string` |  |
| `project_id` | `int` |  |
| `repository_path_pattern` | `string` |  |

#### Example: List

```go
apiEntitiesProjectsContainerRegistryProtectionRules, err := client.ApiEntitiesProjectsContainerRegistryProtectionRule(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesProjectsContainerRegistryProtectionRules) // the array of records
```

#### Example: Create

```go
result, err := client.ApiEntitiesProjectsContainerRegistryProtectionRule(nil).Create(map[string]any{
    "project_id": "example_project_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ApiEntitiesProjectsPackagesProtectionRule

Create an instance: `apiEntitiesProjectsPackagesProtectionRule := client.ApiEntitiesProjectsPackagesProtectionRule(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

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

```go
apiEntitiesProjectsPackagesProtectionRules, err := client.ApiEntitiesProjectsPackagesProtectionRule(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesProjectsPackagesProtectionRules) // the array of records
```

#### Example: Create

```go
result, err := client.ApiEntitiesProjectsPackagesProtectionRule(nil).Create(map[string]any{
    "project_id": "example_project_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ApiEntitiesProjectsTopic

Create an instance: `apiEntitiesProjectsTopic := client.ApiEntitiesProjectsTopic(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

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

```go
apiEntitiesProjectsTopic, err := client.ApiEntitiesProjectsTopic(nil).Load(map[string]any{"id": "api_entities_projects_topic_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesProjectsTopic) // the loaded record
```

#### Example: Create

```go
result, err := client.ApiEntitiesProjectsTopic(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ApiEntitiesProtectedBranch

Create an instance: `apiEntitiesProtectedBranch := client.ApiEntitiesProtectedBranch(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_force_push` | `bool` |  |
| `code_owner_approval_required` | `bool` |  |
| `id` | `int` |  |
| `inherited` | `bool` |  |
| `merge_access_level` | `[]any` |  |
| `name` | `string` |  |
| `push_access_level` | `[]any` |  |
| `unprotect_access_level` | `[]any` |  |

#### Example: Load

```go
apiEntitiesProtectedBranch, err := client.ApiEntitiesProtectedBranch(nil).Load(map[string]any{"id": "api_entities_protected_branch_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesProtectedBranch) // the loaded record
```

#### Example: List

```go
apiEntitiesProtectedBranchs, err := client.ApiEntitiesProtectedBranch(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesProtectedBranchs) // the array of records
```

#### Example: Create

```go
result, err := client.ApiEntitiesProtectedBranch(nil).Create(map[string]any{
    "project_id": "example_project_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ApiEntitiesProtectedTag

Create an instance: `apiEntitiesProtectedTag := client.ApiEntitiesProtectedTag(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `create_access_level` | `map[string]any` |  |
| `name` | `string` |  |

#### Example: Load

```go
apiEntitiesProtectedTag, err := client.ApiEntitiesProtectedTag(nil).Load(map[string]any{"id": "api_entities_protected_tag_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesProtectedTag) // the loaded record
```

#### Example: List

```go
apiEntitiesProtectedTags, err := client.ApiEntitiesProtectedTag(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesProtectedTags) // the array of records
```

#### Example: Create

```go
result, err := client.ApiEntitiesProtectedTag(nil).Create(map[string]any{
    "project_id": "example_project_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ApiEntitiesPublicGroupDetail

Create an instance: `apiEntitiesPublicGroupDetail := client.ApiEntitiesPublicGroupDetail(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

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

```go
apiEntitiesPublicGroupDetails, err := client.ApiEntitiesPublicGroupDetail(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesPublicGroupDetails) // the array of records
```


### ApiEntitiesRelatedIssue

Create an instance: `apiEntitiesRelatedIssue := client.ApiEntitiesRelatedIssue(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assignee` | `map[string]any` |  |
| `author` | `map[string]any` |  |
| `blocking_issues_count` | `string` |  |
| `closed_at` | `string` |  |
| `closed_by` | `map[string]any` |  |
| `confidential` | `bool` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `discussion_locked` | `bool` |  |
| `downvote` | `string` |  |
| `due_date` | `string` |  |
| `epic` | `map[string]any` |  |
| `epic_iid` | `string` |  |
| `has_task` | `bool` |  |
| `health_status` | `string` |  |
| `id` | `int` |  |
| `iid` | `int` |  |
| `imported` | `string` |  |
| `imported_from` | `string` |  |
| `issue_link_id` | `string` |  |
| `issue_type` | `string` |  |
| `iteration` | `map[string]any` |  |
| `label` | `[]any` |  |
| `link` | `map[string]any` |  |
| `link_created_at` | `string` |  |
| `link_type` | `string` |  |
| `link_updated_at` | `string` |  |
| `merge_requests_count` | `string` |  |
| `milestone` | `map[string]any` |  |
| `moved_to_id` | `string` |  |
| `project_id` | `int` |  |
| `reference` | `map[string]any` |  |
| `service_desk_reply_to` | `string` |  |
| `severity` | `string` |  |
| `state` | `string` |  |
| `subscribed` | `string` |  |
| `task_completion_status` | `string` |  |
| `task_status` | `string` |  |
| `time_stat` | `map[string]any` |  |
| `title` | `string` |  |
| `type` | `string` |  |
| `updated_at` | `string` |  |
| `upvote` | `string` |  |
| `user_notes_count` | `string` |  |
| `web_url` | `string` |  |
| `weight` | `string` |  |

#### Example: List

```go
apiEntitiesRelatedIssues, err := client.ApiEntitiesRelatedIssue(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesRelatedIssues) // the array of records
```


### ApiEntitiesRelationImportTracker

Create an instance: `apiEntitiesRelationImportTracker := client.ApiEntitiesRelationImportTracker(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Example: Create

```go
result, err := client.ApiEntitiesRelationImportTracker(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ApiEntitiesRelease

Create an instance: `apiEntitiesRelease := client.ApiEntitiesRelease(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `asset` | `map[string]any` |  |
| `author` | `map[string]any` |  |
| `commit` | `map[string]any` |  |
| `commit_path` | `string` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `description_html` | `string` |  |
| `evidence` | `map[string]any` |  |
| `link` | `map[string]any` |  |
| `milestone` | `map[string]any` |  |
| `name` | `string` |  |
| `released_at` | `string` |  |
| `tag_name` | `string` |  |
| `tag_path` | `string` |  |
| `upcoming_release` | `bool` |  |

#### Example: Load

```go
apiEntitiesRelease, err := client.ApiEntitiesRelease(nil).Load(map[string]any{"id": "api_entities_release_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesRelease) // the loaded record
```

#### Example: List

```go
apiEntitiesReleases, err := client.ApiEntitiesRelease(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesReleases) // the array of records
```

#### Example: Create

```go
result, err := client.ApiEntitiesRelease(nil).Create(map[string]any{
    "project_id": "example_project_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ApiEntitiesReleasesLink

Create an instance: `apiEntitiesReleasesLink := client.ApiEntitiesReleasesLink(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `direct_asset_url` | `string` |  |
| `id` | `int` |  |
| `link_type` | `string` |  |
| `name` | `string` |  |
| `url` | `string` |  |

#### Example: Load

```go
apiEntitiesReleasesLink, err := client.ApiEntitiesReleasesLink(nil).Load(map[string]any{"id": "api_entities_releases_link_id", "project_id": "project_id", "release_id": "release_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesReleasesLink) // the loaded record
```

#### Example: List

```go
apiEntitiesReleasesLinks, err := client.ApiEntitiesReleasesLink(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesReleasesLinks) // the array of records
```

#### Example: Create

```go
result, err := client.ApiEntitiesReleasesLink(nil).Create(map[string]any{
    "project_id": "example_project_id",
    "release_id": "example_release_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ApiEntitiesRemoteMirror

Create an instance: `apiEntitiesRemoteMirror := client.ApiEntitiesRemoteMirror(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_method` | `string` |  |
| `enabled` | `bool` |  |
| `host_key` | `[]any` |  |
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

```go
apiEntitiesRemoteMirror, err := client.ApiEntitiesRemoteMirror(nil).Load(map[string]any{"id": "api_entities_remote_mirror_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesRemoteMirror) // the loaded record
```

#### Example: List

```go
apiEntitiesRemoteMirrors, err := client.ApiEntitiesRemoteMirror(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesRemoteMirrors) // the array of records
```

#### Example: Create

```go
result, err := client.ApiEntitiesRemoteMirror(nil).Create(map[string]any{
    "project_id": "example_project_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ApiEntitiesRepositoryHealth

Create an instance: `apiEntitiesRepositoryHealth := client.ApiEntitiesRepositoryHealth(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alternate` | `map[string]any` |  |
| `bitmap` | `map[string]any` |  |
| `commit_graph` | `map[string]any` |  |
| `is_object_pool` | `bool` |  |
| `last_full_repack` | `map[string]any` |  |
| `multi_pack_index` | `map[string]any` |  |
| `multi_pack_index_bitmap` | `map[string]any` |  |
| `object` | `map[string]any` |  |
| `reference` | `map[string]any` |  |
| `size` | `int` |  |
| `updated_at` | `string` |  |

#### Example: Load

```go
apiEntitiesRepositoryHealth, err := client.ApiEntitiesRepositoryHealth(nil).Load(map[string]any{"project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesRepositoryHealth) // the loaded record
```


### ApiEntitiesResourceAccessTokenWithToken

Create an instance: `apiEntitiesResourceAccessTokenWithToken := client.ApiEntitiesResourceAccessTokenWithToken(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

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
| `scope` | `[]any` |  |
| `token` | `string` |  |
| `user_id` | `int` |  |

#### Example: Create

```go
result, err := client.ApiEntitiesResourceAccessTokenWithToken(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ApiEntitiesResourceMilestoneEvent

Create an instance: `apiEntitiesResourceMilestoneEvent := client.ApiEntitiesResourceMilestoneEvent(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action` | `string` |  |
| `created_at` | `string` |  |
| `id` | `int` |  |
| `milestone` | `map[string]any` |  |
| `resource_id` | `int` |  |
| `resource_type` | `string` |  |
| `state` | `string` |  |
| `user` | `map[string]any` |  |

#### Example: Load

```go
apiEntitiesResourceMilestoneEvent, err := client.ApiEntitiesResourceMilestoneEvent(nil).Load(map[string]any{"id": "api_entities_resource_milestone_event_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesResourceMilestoneEvent) // the loaded record
```

#### Example: List

```go
apiEntitiesResourceMilestoneEvents, err := client.ApiEntitiesResourceMilestoneEvent(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesResourceMilestoneEvents) // the array of records
```


### ApiEntitiesSnippet

Create an instance: `apiEntitiesSnippet := client.ApiEntitiesSnippet(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author` | `map[string]any` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `file` | `[]any` |  |
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

```go
apiEntitiesSnippets, err := client.ApiEntitiesSnippet(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesSnippets) // the array of records
```


### ApiEntitiesSshKeyWithUser

Create an instance: `apiEntitiesSshKeyWithUser := client.ApiEntitiesSshKeyWithUser(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

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
| `user` | `map[string]any` |  |

#### Example: Load

```go
apiEntitiesSshKeyWithUser, err := client.ApiEntitiesSshKeyWithUser(nil).Load(map[string]any{"id": "api_entities_ssh_key_with_user_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesSshKeyWithUser) // the loaded record
```


### ApiEntitiesSuggestion

Create an instance: `apiEntitiesSuggestion := client.ApiEntitiesSuggestion(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Update(data, ctrl)` | Update an existing entity. |

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

Create an instance: `apiEntitiesSystemBroadcastMessage := client.ApiEntitiesSystemBroadcastMessage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

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

```go
apiEntitiesSystemBroadcastMessage, err := client.ApiEntitiesSystemBroadcastMessage(nil).Load(map[string]any{"id": "api_entities_system_broadcast_message_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesSystemBroadcastMessage) // the loaded record
```

#### Example: Create

```go
result, err := client.ApiEntitiesSystemBroadcastMessage(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ApiEntitiesTag

Create an instance: `apiEntitiesTag := client.ApiEntitiesTag(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `commit` | `map[string]any` |  |
| `created_at` | `string` |  |
| `message` | `string` |  |
| `name` | `string` |  |
| `protected` | `bool` |  |
| `release` | `map[string]any` |  |
| `target` | `string` |  |

#### Example: Load

```go
apiEntitiesTag, err := client.ApiEntitiesTag(nil).Load(map[string]any{"id": "api_entities_tag_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesTag) // the loaded record
```

#### Example: List

```go
apiEntitiesTags, err := client.ApiEntitiesTag(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesTags) // the array of records
```

#### Example: Create

```go
result, err := client.ApiEntitiesTag(nil).Create(map[string]any{
    "project_id": "example_project_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ApiEntitiesTagSignature

Create an instance: `apiEntitiesTagSignature := client.ApiEntitiesTagSignature(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `signature` | `string` |  |
| `signature_type` | `string` |  |

#### Example: Load

```go
apiEntitiesTagSignature, err := client.ApiEntitiesTagSignature(nil).Load(map[string]any{"project_id": "project_id", "tag_name": "tag_name"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesTagSignature) // the loaded record
```


### ApiEntitiesTemplatesList

Create an instance: `apiEntitiesTemplatesList := client.ApiEntitiesTemplatesList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `key` | `string` |  |
| `name` | `string` |  |

#### Example: Load

```go
apiEntitiesTemplatesList, err := client.ApiEntitiesTemplatesList(nil).Load(map[string]any{"project_id": "project_id", "type": "type"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesTemplatesList) // the loaded record
```


### ApiEntitiesTerraformModuleVersion

Create an instance: `apiEntitiesTerraformModuleVersion := client.ApiEntitiesTerraformModuleVersion(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

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

```go
apiEntitiesTerraformModuleVersion, err := client.ApiEntitiesTerraformModuleVersion(nil).Load(map[string]any{"module_name": "module_name", "module_system": "module_system"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesTerraformModuleVersion) // the loaded record
```

#### Example: List

```go
apiEntitiesTerraformModuleVersions, err := client.ApiEntitiesTerraformModuleVersion(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesTerraformModuleVersions) // the array of records
```


### ApiEntitiesTreeObject

Create an instance: `apiEntitiesTreeObject := client.ApiEntitiesTreeObject(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `path` | `string` |  |
| `type` | `string` |  |

#### Example: Load

```go
apiEntitiesTreeObject, err := client.ApiEntitiesTreeObject(nil).Load(map[string]any{"project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesTreeObject) // the loaded record
```


### ApiEntitiesTrigger

Create an instance: `apiEntitiesTrigger := client.ApiEntitiesTrigger(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `expires_at` | `string` |  |
| `id` | `int` |  |
| `last_used` | `string` |  |
| `owner` | `map[string]any` |  |
| `token` | `string` |  |
| `updated_at` | `string` |  |

#### Example: Load

```go
apiEntitiesTrigger, err := client.ApiEntitiesTrigger(nil).Load(map[string]any{"id": "api_entities_trigger_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesTrigger) // the loaded record
```

#### Example: List

```go
apiEntitiesTriggers, err := client.ApiEntitiesTrigger(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesTriggers) // the array of records
```

#### Example: Create

```go
result, err := client.ApiEntitiesTrigger(nil).Create(map[string]any{
    "project_id": "example_project_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ApiEntitiesUserAgentDetail

Create an instance: `apiEntitiesUserAgentDetail := client.ApiEntitiesUserAgentDetail(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `akismet_submitted` | `bool` |  |
| `ip_address` | `string` |  |
| `user_agent` | `string` |  |

#### Example: Load

```go
apiEntitiesUserAgentDetail, err := client.ApiEntitiesUserAgentDetail(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesUserAgentDetail) // the loaded record
```


### ApiEntitiesUserCount

Create an instance: `apiEntitiesUserCount := client.ApiEntitiesUserCount(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assigned_issue` | `int` |  |
| `assigned_merge_request` | `int` |  |
| `merge_request` | `int` |  |
| `review_requested_merge_request` | `int` |  |
| `todo` | `int` |  |

#### Example: Load

```go
apiEntitiesUserCount, err := client.ApiEntitiesUserCount(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesUserCount) // the loaded record
```


### ApiEntitiesUserPublic

Create an instance: `apiEntitiesUserPublic := client.ApiEntitiesUserPublic(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

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
| `custom_attribute` | `[]any` |  |
| `discord` | `string` |  |
| `email` | `string` |  |
| `external` | `string` |  |
| `extra_shared_runners_minutes_limit` | `string` |  |
| `follower` | `string` |  |
| `following` | `string` |  |
| `github` | `string` |  |
| `id` | `int` |  |
| `identity` | `map[string]any` |  |
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
| `scim_identity` | `map[string]any` |  |
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

```go
apiEntitiesUserPublics, err := client.ApiEntitiesUserPublic(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesUserPublics) // the array of records
```


### ApiEntitiesUserWithAdmin

Create an instance: `apiEntitiesUserWithAdmin := client.ApiEntitiesUserWithAdmin(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `key` | `string` |  |
| `value` | `string` |  |

#### Example: List

```go
apiEntitiesUserWithAdmins, err := client.ApiEntitiesUserWithAdmin(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesUserWithAdmins) // the array of records
```


### ApiEntitiesWikiAttachment

Create an instance: `apiEntitiesWikiAttachment := client.ApiEntitiesWikiAttachment(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Example: Create

```go
result, err := client.ApiEntitiesWikiAttachment(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ApiEntitiesWikiPage

Create an instance: `apiEntitiesWikiPage := client.ApiEntitiesWikiPage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `content` | `string` |  |
| `encoding` | `string` |  |
| `format` | `string` |  |
| `front_matter` | `map[string]any` |  |
| `slug` | `string` |  |
| `title` | `string` |  |
| `wiki_page_meta_id` | `int` |  |

#### Example: Load

```go
apiEntitiesWikiPage, err := client.ApiEntitiesWikiPage(nil).Load(map[string]any{"slug": "slug"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesWikiPage) // the loaded record
```

#### Example: Create

```go
result, err := client.ApiEntitiesWikiPage(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ApiEntitiesWikiPageBasic

Create an instance: `apiEntitiesWikiPageBasic := client.ApiEntitiesWikiPageBasic(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `format` | `string` |  |
| `slug` | `string` |  |
| `title` | `string` |  |
| `wiki_page_meta_id` | `int` |  |

#### Example: List

```go
apiEntitiesWikiPageBasics, err := client.ApiEntitiesWikiPageBasic(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiEntitiesWikiPageBasics) // the array of records
```


### Application

Create an instance: `application := client.Application(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |


### AwardEmoji

Create an instance: `awardEmoji := client.AwardEmoji(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |


### Badge

Create an instance: `badge := client.Badge(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |


### Branch

Create an instance: `branch := client.Branch(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |


### CargoPackage

Create an instance: `cargoPackage := client.CargoPackage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Example: Load

```go
cargoPackage, err := client.CargoPackage(nil).Load(map[string]any{"project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(cargoPackage) // the loaded record
```


### CiVariable

Create an instance: `ciVariable := client.CiVariable(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |


### Cluster

Create an instance: `cluster := client.Cluster(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |


### ClusterAgent

Create an instance: `clusterAgent := client.ClusterAgent(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |


### Composer

Create an instance: `composer := client.Composer(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Example: Create

```go
result, err := client.Composer(nil).Create(map[string]any{
    "project_id": "example_project_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ComposerPackage

Create an instance: `composerPackage := client.ComposerPackage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Example: Load

```go
composerPackage, err := client.ComposerPackage(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(composerPackage) // the loaded record
```


### Conan

Create an instance: `conan := client.Conan(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |


### ConanPackage

Create an instance: `conanPackage := client.ConanPackage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Example: Load

```go
conanPackage, err := client.ConanPackage(nil).Load(map[string]any{"id": "conan_package_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(conanPackage) // the loaded record
```


### ContainerRegistry

Create an instance: `containerRegistry := client.ContainerRegistry(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |


### ContainerRegistryEvent

Create an instance: `containerRegistryEvent := client.ContainerRegistryEvent(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Example: Create

```go
result, err := client.ContainerRegistryEvent(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### CustomAttribute

Create an instance: `customAttribute := client.CustomAttribute(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `key` | `string` |  |
| `value` | `string` |  |

#### Example: Load

```go
customAttribute, err := client.CustomAttribute(nil).Load(map[string]any{"id": "custom_attribute_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(customAttribute) // the loaded record
```


### Debian

Create an instance: `debian := client.Debian(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Update(data, ctrl)` | Update an existing entity. |


### DebianDistribution

Create an instance: `debianDistribution := client.DebianDistribution(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |


### DebianPackage

Create an instance: `debianPackage := client.DebianPackage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Example: Load

```go
debianPackage, err := client.DebianPackage(nil).Load(map[string]any{"id": "debian_package_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(debianPackage) // the loaded record
```


### DependencyProxy

Create an instance: `dependencyProxy := client.DependencyProxy(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |


### DeployKey

Create an instance: `deployKey := client.DeployKey(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |


### DeployToken

Create an instance: `deployToken := client.DeployToken(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |


### Deployment

Create an instance: `deployment := client.Deployment(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |


### EeApiEntitiesApprovalState

Create an instance: `eeApiEntitiesApprovalState := client.EeApiEntitiesApprovalState(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Example: Create

```go
result, err := client.EeApiEntitiesApprovalState(nil).Create(map[string]any{
    "merge_request_id": "example_merge_request_id",
    "project_id": "example_project_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### EeApiEntitiesAuditEvent

Create an instance: `eeApiEntitiesAuditEvent := client.EeApiEntitiesAuditEvent(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

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

```go
eeApiEntitiesAuditEvent, err := client.EeApiEntitiesAuditEvent(nil).Load(map[string]any{"id": "ee_api_entities_audit_event_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(eeApiEntitiesAuditEvent) // the loaded record
```

#### Example: List

```go
eeApiEntitiesAuditEvents, err := client.EeApiEntitiesAuditEvent(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(eeApiEntitiesAuditEvents) // the array of records
```


### EeApiEntitiesBillableMembership

Create an instance: `eeApiEntitiesBillableMembership := client.EeApiEntitiesBillableMembership(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `access_level` | `map[string]any` |  |
| `created_at` | `string` |  |
| `expires_at` | `string` |  |
| `id` | `string` |  |
| `source_full_name` | `string` |  |
| `source_id` | `string` |  |
| `source_members_url` | `string` |  |

#### Example: Load

```go
eeApiEntitiesBillableMembership, err := client.EeApiEntitiesBillableMembership(nil).Load(map[string]any{"billable_member_id": "billable_member_id", "group_id": "group_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(eeApiEntitiesBillableMembership) // the loaded record
```


### EeApiEntitiesGeoNodeStatus

Create an instance: `eeApiEntitiesGeoNodeStatus := client.EeApiEntitiesGeoNodeStatus(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

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
| `link` | `map[string]any` |  |
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
| `namespace` | `map[string]any` |  |
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
| `storage_shard` | `map[string]any` |  |
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

```go
result, err := client.EeApiEntitiesGeoNodeStatus(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### EeApiEntitiesGeoPipelineRef

Create an instance: `eeApiEntitiesGeoPipelineRef := client.EeApiEntitiesGeoPipelineRef(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `pipeline_ref` | `[]any` |  |

#### Example: List

```go
eeApiEntitiesGeoPipelineRefs, err := client.EeApiEntitiesGeoPipelineRef(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(eeApiEntitiesGeoPipelineRefs) // the array of records
```


### EeApiEntitiesIssuableMetricImage

Create an instance: `eeApiEntitiesIssuableMetricImage := client.EeApiEntitiesIssuableMetricImage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

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

```go
result, err := client.EeApiEntitiesIssuableMetricImage(nil).Create(map[string]any{
    "issue_id": "example_issue_id",
    "project_id": "example_project_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### EeApiEntitiesMergeRequestApprovalState

Create an instance: `eeApiEntitiesMergeRequestApprovalState := client.EeApiEntitiesMergeRequestApprovalState(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `approvals_required` | `int` |  |
| `approved` | `bool` |  |
| `approved_by` | `[]any` |  |
| `code_owner` | `bool` |  |
| `contains_hidden_group` | `bool` |  |
| `eligible_approver` | `[]any` |  |
| `group` | `[]any` |  |
| `id` | `int` |  |
| `name` | `string` |  |
| `overridden` | `bool` |  |
| `report_type` | `string` |  |
| `rule_type` | `string` |  |
| `section` | `string` |  |
| `source_rule` | `map[string]any` |  |
| `user` | `[]any` |  |

#### Example: List

```go
eeApiEntitiesMergeRequestApprovalStates, err := client.EeApiEntitiesMergeRequestApprovalState(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(eeApiEntitiesMergeRequestApprovalStates) // the array of records
```


### EeApiEntitiesSshCertificate

Create an instance: `eeApiEntitiesSshCertificate := client.EeApiEntitiesSshCertificate(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `id` | `int` |  |
| `key` | `string` |  |
| `title` | `string` |  |

#### Example: List

```go
eeApiEntitiesSshCertificates, err := client.EeApiEntitiesSshCertificate(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(eeApiEntitiesSshCertificates) // the array of records
```

#### Example: Create

```go
result, err := client.EeApiEntitiesSshCertificate(nil).Create(map[string]any{
    "group_id": "example_group_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Environment

Create an instance: `environment := client.Environment(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Example: Create

```go
result, err := client.Environment(nil).Create(map[string]any{
    "project_id": "example_project_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ErrorTrackingClientKey

Create an instance: `errorTrackingClientKey := client.ErrorTrackingClientKey(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |


### Feature

Create an instance: `feature := client.Feature(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |


### FeatureFlag

Create an instance: `featureFlag := client.FeatureFlag(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Example: Load

```go
featureFlag, err := client.FeatureFlag(nil).Load(map[string]any{"project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(featureFlag) // the loaded record
```

#### Example: Create

```go
result, err := client.FeatureFlag(nil).Create(map[string]any{
    "unleash_id": "example_unleash_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### FeatureFlagsUserList

Create an instance: `featureFlagsUserList := client.FeatureFlagsUserList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |


### FreezePeriod

Create an instance: `freezePeriod := client.FreezePeriod(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |


### GenericPackage

Create an instance: `genericPackage := client.GenericPackage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Example: Load

```go
genericPackage, err := client.GenericPackage(nil).Load(map[string]any{"file_name": "file_name", "generic_id": "generic_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(genericPackage) // the loaded record
```


### Geo

Create an instance: `geo := client.Geo(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Example: Load

```go
geo, err := client.Geo(nil).Load(map[string]any{"replicable_id": "replicable_id", "replicable_name": "replicable_name"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(geo) // the loaded record
```

#### Example: Create

```go
result, err := client.Geo(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### GoProxy

Create an instance: `goProxy := client.GoProxy(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Example: Load

```go
goProxy, err := client.GoProxy(nil).Load(map[string]any{"project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(goProxy) // the loaded record
```


### Group

Create an instance: `group := client.Group(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Example: Load

```go
group, err := client.Group(nil).Load(map[string]any{"id": "group_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(group) // the loaded record
```

#### Example: Create

```go
result, err := client.Group(nil).Create(map[string]any{
    "id": "example_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### GroupAvatar

Create an instance: `groupAvatar := client.GroupAvatar(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Example: Load

```go
groupAvatar, err := client.GroupAvatar(nil).Load(map[string]any{"id": "group_avatar_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(groupAvatar) // the loaded record
```


### GroupExport

Create an instance: `groupExport := client.GroupExport(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Example: Load

```go
groupExport, err := client.GroupExport(nil).Load(map[string]any{"group_id": "group_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(groupExport) // the loaded record
```

#### Example: Create

```go
result, err := client.GroupExport(nil).Create(map[string]any{
    "id": "example_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### GroupImport

Create an instance: `groupImport := client.GroupImport(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Example: Create

```go
result, err := client.GroupImport(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### HelmPackage

Create an instance: `helmPackage := client.HelmPackage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Example: Load

```go
helmPackage, err := client.HelmPackage(nil).Load(map[string]any{"project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(helmPackage) // the loaded record
```

#### Example: Create

```go
result, err := client.HelmPackage(nil).Create(map[string]any{
    "project_id": "example_project_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Hook

Create an instance: `hook := client.Hook(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Example: Create

```go
result, err := client.Hook(nil).Create(map[string]any{
    "id": "example_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Import

Create an instance: `import_ := client.Import(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Example: Create

```go
result, err := client.Import(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Integration

Create an instance: `integration := client.Integration(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Example: Create

```go
result, err := client.Integration(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Invitation

Create an instance: `invitation := client.Invitation(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |


### IssueLink

Create an instance: `issueLink := client.IssueLink(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |


### IssuesStatistic

Create an instance: `issuesStatistic := client.IssuesStatistic(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Example: Load

```go
issuesStatistic, err := client.IssuesStatistic(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(issuesStatistic) // the loaded record
```


### Job

Create an instance: `job := client.Job(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Example: Load

```go
job, err := client.Job(nil).Load(map[string]any{"id": "job_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(job) // the loaded record
```

#### Example: Create

```go
result, err := client.Job(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### MavenPackage

Create an instance: `mavenPackage := client.MavenPackage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Example: Load

```go
mavenPackage, err := client.MavenPackage(nil).Load(map[string]any{"file_name": "file_name"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(mavenPackage) // the loaded record
```


### Member

Create an instance: `member := client.Member(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |


### MergeRequest

Create an instance: `mergeRequest := client.MergeRequest(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Example: Load

```go
mergeRequest, err := client.MergeRequest(nil).Load(map[string]any{"id": "merge_request_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(mergeRequest) // the loaded record
```


### Metadata

Create an instance: `metadata := client.Metadata(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `enterprise` | `bool` |  |
| `kas` | `map[string]any` |  |
| `revision` | `string` |  |
| `version` | `string` |  |

#### Example: Load

```go
metadata, err := client.Metadata(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(metadata) // the loaded record
```


### Migration

Create an instance: `migration := client.Migration(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Example: Create

```go
result, err := client.Migration(nil).Create(map[string]any{
    "timestamp": "example_timestamp",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### MlModelRegistry

Create an instance: `mlModelRegistry := client.MlModelRegistry(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Example: Load

```go
mlModelRegistry, err := client.MlModelRegistry(nil).Load(map[string]any{"file_name": "file_name", "ml_model_id": "ml_model_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(mlModelRegistry) // the loaded record
```


### Namespace

Create an instance: `namespace := client.Namespace(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |


### Npm

Create an instance: `npm := client.Npm(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Update(data, ctrl)` | Update an existing entity. |


### NpmPackage

Create an instance: `npmPackage := client.NpmPackage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Example: Load

```go
npmPackage, err := client.NpmPackage(nil).Load(map[string]any{"project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(npmPackage) // the loaded record
```

#### Example: Create

```go
result, err := client.NpmPackage(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Nuget

Create an instance: `nuget := client.Nuget(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Update(data, ctrl)` | Update an existing entity. |


### NugetPackage

Create an instance: `nugetPackage := client.NugetPackage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `catalog_entry` | `map[string]any` |  |
| `count` | `int` |  |
| `id` | `string` |  |
| `item` | `[]any` |  |
| `lower` | `string` |  |
| `package_content` | `string` |  |
| `upper` | `string` |  |

#### Example: Load

```go
nugetPackage, err := client.NugetPackage(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(nugetPackage) // the loaded record
```

#### Example: List

```go
nugetPackages, err := client.NugetPackage(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(nugetPackages) // the array of records
```


### PackageFile

Create an instance: `packageFile := client.PackageFile(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Example: Load

```go
packageFile, err := client.PackageFile(nil).Load(map[string]any{"id": "package_file_id", "package_id": "package_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(packageFile) // the loaded record
```


### Page

Create an instance: `page := client.Page(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Example: Load

```go
page, err := client.Page(nil).Load(map[string]any{"project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(page) // the loaded record
```


### Participant

Create an instance: `participant := client.Participant(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `key` | `string` |  |
| `value` | `string` |  |

#### Example: List

```go
participants, err := client.Participant(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(participants) // the array of records
```


### PersonalAccessToken

Create an instance: `personalAccessToken := client.PersonalAccessToken(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |


### Project

Create an instance: `project := client.Project(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `before_sha` | `string` |  |
| `committed_at` | `string` |  |
| `coverage` | `float64` |  |
| `created_at` | `string` |  |
| `detailed_status` | `map[string]any` |  |
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
| `user` | `map[string]any` |  |
| `web_url` | `string` |  |
| `yaml_error` | `string` |  |

#### Example: Load

```go
project, err := client.Project(nil).Load(map[string]any{"id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(project) // the loaded record
```

#### Example: Create

```go
result, err := client.Project(nil).Create(map[string]any{
    "id": "example_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ProjectAvatar

Create an instance: `projectAvatar := client.ProjectAvatar(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Example: Load

```go
projectAvatar, err := client.ProjectAvatar(nil).Load(map[string]any{"id": "project_avatar_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(projectAvatar) // the loaded record
```


### ProjectEntity

Create an instance: `projectEntity := client.ProjectEntity(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Example: Create

```go
result, err := client.ProjectEntity(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ProjectExport

Create an instance: `projectExport := client.ProjectExport(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Example: Load

```go
projectExport, err := client.ProjectExport(nil).Load(map[string]any{"project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(projectExport) // the loaded record
```

#### Example: Create

```go
result, err := client.ProjectExport(nil).Create(map[string]any{
    "id": "example_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ProjectHook

Create an instance: `projectHook := client.ProjectHook(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |


### ProjectImport

Create an instance: `projectImport := client.ProjectImport(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Example: Create

```go
result, err := client.ProjectImport(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ProjectImportEntity

Create an instance: `projectImportEntity := client.ProjectImportEntity(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

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

```go
result, err := client.ProjectImportEntity(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ProjectPackage

Create an instance: `projectPackage := client.ProjectPackage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |


### ProjectSnippet

Create an instance: `projectSnippet := client.ProjectSnippet(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |


### ProjectsJobTokenScope

Create an instance: `projectsJobTokenScope := client.ProjectsJobTokenScope(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |


### ProtectedTag

Create an instance: `protectedTag := client.ProtectedTag(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |


### Pypi

Create an instance: `pypi := client.Pypi(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Example: Create

```go
result, err := client.Pypi(nil).Create(map[string]any{
    "project_id": "example_project_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### PypiPackage

Create an instance: `pypiPackage := client.PypiPackage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Example: Load

```go
pypiPackage, err := client.PypiPackage(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(pypiPackage) // the loaded record
```

#### Example: Create

```go
result, err := client.PypiPackage(nil).Create(map[string]any{
    "project_id": "example_project_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Release

Create an instance: `release := client.Release(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Example: Load

```go
release, err := client.Release(nil).Load(map[string]any{"project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(release) // the loaded record
```


### ReleaseLink

Create an instance: `releaseLink := client.ReleaseLink(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |


### RemoteMirror

Create an instance: `remoteMirror := client.RemoteMirror(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Example: Load

```go
remoteMirror, err := client.RemoteMirror(nil).Load(map[string]any{"id": "remote_mirror_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(remoteMirror) // the loaded record
```

#### Example: Create

```go
result, err := client.RemoteMirror(nil).Create(map[string]any{
    "id": "example_id",
    "project_id": "example_project_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Rpm

Create an instance: `rpm := client.Rpm(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Example: Create

```go
result, err := client.Rpm(nil).Create(map[string]any{
    "project_id": "example_project_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### RpmPackage

Create an instance: `rpmPackage := client.RpmPackage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Example: Load

```go
rpmPackage, err := client.RpmPackage(nil).Load(map[string]any{"project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(rpmPackage) // the loaded record
```

#### Example: Create

```go
result, err := client.RpmPackage(nil).Create(map[string]any{
    "project_id": "example_project_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Rubygem

Create an instance: `rubygem := client.Rubygem(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Example: Load

```go
rubygem, err := client.Rubygem(nil).Load(map[string]any{"id": "rubygem_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(rubygem) // the loaded record
```


### RubygemPackage

Create an instance: `rubygemPackage := client.RubygemPackage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Example: Load

```go
rubygemPackage, err := client.RubygemPackage(nil).Load(map[string]any{"project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(rubygemPackage) // the loaded record
```

#### Example: Create

```go
result, err := client.RubygemPackage(nil).Create(map[string]any{
    "project_id": "example_project_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Runner

Create an instance: `runner := client.Runner(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Example: Create

```go
result, err := client.Runner(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Search

Create an instance: `search := client.Search(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Example: Load

```go
search, err := client.Search(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(search) // the loaded record
```


### SecureFile

Create an instance: `secureFile := client.SecureFile(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Example: Load

```go
secureFile, err := client.SecureFile(nil).Load(map[string]any{"id": "secure_file_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(secureFile) // the loaded record
```


### Slack

Create an instance: `slack := client.Slack(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Example: Create

```go
result, err := client.Slack(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Snippet

Create an instance: `snippet := client.Snippet(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Example: Load

```go
snippet, err := client.Snippet(nil).Load(map[string]any{"id": "snippet_id", "file_id": "file_id", "file_path": "file_path"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(snippet) // the loaded record
```


### Starrer

Create an instance: `starrer := client.Starrer(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_path` | `string` |  |
| `avatar_url` | `string` |  |
| `custom_attribute` | `[]any` |  |
| `id` | `int` |  |
| `locked` | `bool` |  |
| `name` | `string` |  |
| `public_email` | `string` |  |
| `state` | `string` |  |
| `username` | `string` |  |
| `web_url` | `string` |  |

#### Example: List

```go
starrers, err := client.Starrer(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(starrers) // the array of records
```


### SystemHook

Create an instance: `systemHook := client.SystemHook(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |


### Tag

Create an instance: `tag := client.Tag(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |


### TerraformRegistry

Create an instance: `terraformRegistry := client.TerraformRegistry(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Example: Load

```go
terraformRegistry, err := client.TerraformRegistry(nil).Load(map[string]any{"id": "terraform_registry_id", "module_system": "module_system"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(terraformRegistry) // the loaded record
```


### TerraformState

Create an instance: `terraformState := client.TerraformState(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Example: Load

```go
terraformState, err := client.TerraformState(nil).Load(map[string]any{"id": "terraform_state_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(terraformState) // the loaded record
```

#### Example: Create

```go
result, err := client.TerraformState(nil).Create(map[string]any{
    "project_id": "example_project_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### TestReport

Create an instance: `testReport := client.TestReport(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `error_count` | `int` |  |
| `failed_count` | `int` |  |
| `name` | `string` |  |
| `skipped_count` | `int` |  |
| `success_count` | `int` |  |
| `suite_error` | `string` |  |
| `test_case` | `[]any` |  |
| `total_count` | `int` |  |
| `total_time` | `int` |  |

#### Example: List

```go
testReports, err := client.TestReport(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(testReports) // the array of records
```


### TestReportSummary

Create an instance: `testReportSummary := client.TestReportSummary(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `test_suite` | `map[string]any` |  |
| `total` | `map[string]any` |  |

#### Example: Load

```go
testReportSummary, err := client.TestReportSummary(nil).Load(map[string]any{"pipeline_id": "pipeline_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(testReportSummary) // the loaded record
```


### Topic

Create an instance: `topic := client.Topic(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |


### UnleashApi

Create an instance: `unleashApi := client.UnleashApi(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Example: Load

```go
unleashApi, err := client.UnleashApi(nil).Load(map[string]any{"unleash_id": "unleash_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(unleashApi) // the loaded record
```


### UsageData

Create an instance: `usageData := client.UsageData(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Example: Load

```go
usageData, err := client.UsageData(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(usageData) // the loaded record
```

#### Example: Create

```go
result, err := client.UsageData(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### User

Create an instance: `user := client.User(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_path` | `string` |  |
| `avatar_url` | `string` |  |
| `custom_attribute` | `[]any` |  |
| `id` | `int` |  |
| `locked` | `bool` |  |
| `name` | `string` |  |
| `public_email` | `string` |  |
| `state` | `string` |  |
| `username` | `string` |  |
| `web_url` | `string` |  |

#### Example: List

```go
users, err := client.User(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(users) // the array of records
```


### WebCommit

Create an instance: `webCommit := client.WebCommit(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Example: Load

```go
webCommit, err := client.WebCommit(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(webCommit) // the loaded record
```


### Wiki

Create an instance: `wiki := client.Wiki(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |


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

Features are the extension mechanism. A feature implements the
`Feature` interface and provides hooks — functions keyed by pipeline
stage names.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as maps

The Go SDK uses `map[string]any` throughout rather than typed structs.
This mirrors the dynamic nature of the API and keeps the SDK
flexible — no code generation is needed when the API schema changes.

Use `core.ToMapAny()` to safely cast results and nested data.

### Package structure

```
github.com/voxgig-sdk/gitlab-sdk/go/
├── gitlab.go        # Root package — type aliases and constructors
├── core/               # SDK core — client, types, pipeline
├── entity/             # Entity implementations
├── feature/            # Built-in features (Base, Test, Log)
├── utility/            # Utility functions and struct library
└── test/               # Test suites
```

The root package (`github.com/voxgig-sdk/gitlab-sdk/go`) re-exports everything needed
for normal use. Import sub-packages only when you need specific types
like `core.ToMapAny`.

### Entity state

Entity instances are stateful. After a successful `Remove`, the entity
stores the returned data and match criteria internally.

```go
accessrequest := client.AccessRequest(nil)
accessrequest.Remove(nil, nil)

// accessrequest.Data() now returns the accessrequest data from the last remove
// accessrequest.Match() returns the last match criteria
```

Call `Make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`Direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `Prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
