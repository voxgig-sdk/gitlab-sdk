package core

import (
	"fmt"

	vs "github.com/voxgig-sdk/gitlab-sdk/go/utility/struct"
)

type GitlabSDK struct {
	Mode     string
	options  map[string]any
	utility  *Utility
	Features []Feature
	rootctx  *Context
}

func NewGitlabSDK(options map[string]any) *GitlabSDK {
	sdk := &GitlabSDK{
		Mode:     "live",
		Features: []Feature{},
	}

	sdk.utility = NewUtility()

	config := MakeConfig()

	sdk.rootctx = sdk.utility.MakeContext(map[string]any{
		"client":  sdk,
		"utility": sdk.utility,
		"config":  config,
		"options": options,
		"shared":  map[string]any{},
	}, nil)

	sdk.options = sdk.utility.MakeOptions(sdk.rootctx)

	if vs.GetPath([]any{"feature", "test", "active"}, sdk.options) == true {
		sdk.Mode = "test"
	}

	sdk.rootctx.Options = sdk.options

	// Add features from config.
	featureOpts := ToMapAny(vs.GetProp(sdk.options, "feature"))
	if featureOpts != nil {
		for _, item := range vs.Items(featureOpts) {
			fname, _ := item[0].(string)
			fopts := ToMapAny(item[1])
			if fopts != nil {
				if active, ok := fopts["active"]; ok {
					if ab, ok := active.(bool); ok && ab {
						sdk.utility.FeatureAdd(sdk.rootctx, makeFeature(fname))
					}
				}
			}
		}
	}

	// Add extension features.
	if extend := vs.GetProp(sdk.options, "extend"); extend != nil {
		if extList, ok := extend.([]any); ok {
			for _, f := range extList {
				if feat, ok := f.(Feature); ok {
					sdk.utility.FeatureAdd(sdk.rootctx, feat)
				}
			}
		}
	}

	// Initialize features.
	for _, f := range sdk.Features {
		sdk.utility.FeatureInit(sdk.rootctx, f)
	}

	sdk.utility.FeatureHook(sdk.rootctx, "PostConstruct")

	return sdk
}

func (sdk *GitlabSDK) OptionsMap() map[string]any {
	out := vs.Clone(sdk.options)
	if om, ok := out.(map[string]any); ok {
		return om
	}
	return map[string]any{}
}

func (sdk *GitlabSDK) GetUtility() *Utility {
	return CopyUtility(sdk.utility)
}

func (sdk *GitlabSDK) GetRootCtx() *Context {
	return sdk.rootctx
}

func (sdk *GitlabSDK) Prepare(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "prepare",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	options := sdk.options

	path, _ := vs.GetProp(fetchargs, "path").(string)
	method, _ := vs.GetProp(fetchargs, "method").(string)
	if method == "" {
		method = "GET"
	}

	params := ToMapAny(vs.GetProp(fetchargs, "params"))
	if params == nil {
		params = map[string]any{}
	}
	query := ToMapAny(vs.GetProp(fetchargs, "query"))
	if query == nil {
		query = map[string]any{}
	}

	headers := utility.PrepareHeaders(ctx)

	base, _ := vs.GetProp(options, "base").(string)
	prefix, _ := vs.GetProp(options, "prefix").(string)
	suffix, _ := vs.GetProp(options, "suffix").(string)

	ctx.Spec = NewSpec(map[string]any{
		"base":    base,
		"prefix":  prefix,
		"suffix":  suffix,
		"path":    path,
		"method":  method,
		"params":  params,
		"query":   query,
		"headers": headers,
		"body":    vs.GetProp(fetchargs, "body"),
		"step":    "start",
	})

	// Merge user-provided headers.
	if uh := vs.GetProp(fetchargs, "headers"); uh != nil {
		if uhm, ok := uh.(map[string]any); ok {
			for k, v := range uhm {
				ctx.Spec.Headers[k] = v
			}
		}
	}

	_, err := utility.PrepareAuth(ctx)
	if err != nil {
		return nil, err
	}

	return utility.MakeFetchDef(ctx)
}

func (sdk *GitlabSDK) Direct(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	fetchdef, err := sdk.Prepare(fetchargs)
	if err != nil {
		return map[string]any{"ok": false, "err": err}, nil
	}

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "direct",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	url, _ := fetchdef["url"].(string)
	fetched, fetchErr := utility.Fetcher(ctx, url, fetchdef)

	if fetchErr != nil {
		return map[string]any{"ok": false, "err": fetchErr}, nil
	}

	if fetched == nil {
		return map[string]any{
			"ok":  false,
			"err": ctx.MakeError("direct_no_response", "response: undefined"),
		}, nil
	}

	if fm, ok := fetched.(map[string]any); ok {
		status := ToInt(vs.GetProp(fm, "status"))
		headers := vs.GetProp(fm, "headers")

		// No-body responses (204, 304) and explicit zero content-length
		// must skip JSON parsing — calling json() on an empty body errors.
		var contentLength string
		if hm, ok := headers.(map[string]any); ok {
			if cl, ok := hm["content-length"]; ok {
				contentLength = fmt.Sprintf("%v", cl)
			}
		}
		noBody := status == 204 || status == 304 || contentLength == "0"

		var jsonData any
		if !noBody {
			if jf := vs.GetProp(fm, "json"); jf != nil {
				if f, ok := jf.(func() any); ok {
					// f() returns nil on parse error in our fetcher.
					jsonData = f()
				}
			}
		}

		return map[string]any{
			"ok":      status >= 200 && status < 300,
			"status":  status,
			"headers": headers,
			"data":    jsonData,
		}, nil
	}

	return map[string]any{"ok": false, "err": ctx.MakeError("direct_invalid", "invalid response type")}, nil
}


// AccessRequest returns a AccessRequest entity bound to this client.
// Idiomatic usage: client.AccessRequest(nil).List(nil, nil) or
// client.AccessRequest(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) AccessRequest(data map[string]any) GitlabEntity {
	return NewAccessRequestEntityFunc(sdk, data)
}


// AlertManagement returns a AlertManagement entity bound to this client.
// Idiomatic usage: client.AlertManagement(nil).List(nil, nil) or
// client.AlertManagement(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) AlertManagement(data map[string]any) GitlabEntity {
	return NewAlertManagementEntityFunc(sdk, data)
}


// ApiEntitiesAccessRequester returns a ApiEntitiesAccessRequester entity bound to this client.
// Idiomatic usage: client.ApiEntitiesAccessRequester(nil).List(nil, nil) or
// client.ApiEntitiesAccessRequester(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesAccessRequester(data map[string]any) GitlabEntity {
	return NewApiEntitiesAccessRequesterEntityFunc(sdk, data)
}


// ApiEntitiesAppearance returns a ApiEntitiesAppearance entity bound to this client.
// Idiomatic usage: client.ApiEntitiesAppearance(nil).List(nil, nil) or
// client.ApiEntitiesAppearance(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesAppearance(data map[string]any) GitlabEntity {
	return NewApiEntitiesAppearanceEntityFunc(sdk, data)
}


// ApiEntitiesApplication returns a ApiEntitiesApplication entity bound to this client.
// Idiomatic usage: client.ApiEntitiesApplication(nil).List(nil, nil) or
// client.ApiEntitiesApplication(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesApplication(data map[string]any) GitlabEntity {
	return NewApiEntitiesApplicationEntityFunc(sdk, data)
}


// ApiEntitiesApplicationStatistic returns a ApiEntitiesApplicationStatistic entity bound to this client.
// Idiomatic usage: client.ApiEntitiesApplicationStatistic(nil).List(nil, nil) or
// client.ApiEntitiesApplicationStatistic(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesApplicationStatistic(data map[string]any) GitlabEntity {
	return NewApiEntitiesApplicationStatisticEntityFunc(sdk, data)
}


// ApiEntitiesApplicationWithSecret returns a ApiEntitiesApplicationWithSecret entity bound to this client.
// Idiomatic usage: client.ApiEntitiesApplicationWithSecret(nil).List(nil, nil) or
// client.ApiEntitiesApplicationWithSecret(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesApplicationWithSecret(data map[string]any) GitlabEntity {
	return NewApiEntitiesApplicationWithSecretEntityFunc(sdk, data)
}


// ApiEntitiesAvatar returns a ApiEntitiesAvatar entity bound to this client.
// Idiomatic usage: client.ApiEntitiesAvatar(nil).List(nil, nil) or
// client.ApiEntitiesAvatar(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesAvatar(data map[string]any) GitlabEntity {
	return NewApiEntitiesAvatarEntityFunc(sdk, data)
}


// ApiEntitiesAwardEmoji returns a ApiEntitiesAwardEmoji entity bound to this client.
// Idiomatic usage: client.ApiEntitiesAwardEmoji(nil).List(nil, nil) or
// client.ApiEntitiesAwardEmoji(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesAwardEmoji(data map[string]any) GitlabEntity {
	return NewApiEntitiesAwardEmojiEntityFunc(sdk, data)
}


// ApiEntitiesBadge returns a ApiEntitiesBadge entity bound to this client.
// Idiomatic usage: client.ApiEntitiesBadge(nil).List(nil, nil) or
// client.ApiEntitiesBadge(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesBadge(data map[string]any) GitlabEntity {
	return NewApiEntitiesBadgeEntityFunc(sdk, data)
}


// ApiEntitiesBasicBadgeDetail returns a ApiEntitiesBasicBadgeDetail entity bound to this client.
// Idiomatic usage: client.ApiEntitiesBasicBadgeDetail(nil).List(nil, nil) or
// client.ApiEntitiesBasicBadgeDetail(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesBasicBadgeDetail(data map[string]any) GitlabEntity {
	return NewApiEntitiesBasicBadgeDetailEntityFunc(sdk, data)
}


// ApiEntitiesBasicGroupDetail returns a ApiEntitiesBasicGroupDetail entity bound to this client.
// Idiomatic usage: client.ApiEntitiesBasicGroupDetail(nil).List(nil, nil) or
// client.ApiEntitiesBasicGroupDetail(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesBasicGroupDetail(data map[string]any) GitlabEntity {
	return NewApiEntitiesBasicGroupDetailEntityFunc(sdk, data)
}


// ApiEntitiesBasicProjectDetail returns a ApiEntitiesBasicProjectDetail entity bound to this client.
// Idiomatic usage: client.ApiEntitiesBasicProjectDetail(nil).List(nil, nil) or
// client.ApiEntitiesBasicProjectDetail(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesBasicProjectDetail(data map[string]any) GitlabEntity {
	return NewApiEntitiesBasicProjectDetailEntityFunc(sdk, data)
}


// ApiEntitiesBasicRef returns a ApiEntitiesBasicRef entity bound to this client.
// Idiomatic usage: client.ApiEntitiesBasicRef(nil).List(nil, nil) or
// client.ApiEntitiesBasicRef(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesBasicRef(data map[string]any) GitlabEntity {
	return NewApiEntitiesBasicRefEntityFunc(sdk, data)
}


// ApiEntitiesBasicSuccess returns a ApiEntitiesBasicSuccess entity bound to this client.
// Idiomatic usage: client.ApiEntitiesBasicSuccess(nil).List(nil, nil) or
// client.ApiEntitiesBasicSuccess(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesBasicSuccess(data map[string]any) GitlabEntity {
	return NewApiEntitiesBasicSuccessEntityFunc(sdk, data)
}


// ApiEntitiesBatchedBackgroundMigration returns a ApiEntitiesBatchedBackgroundMigration entity bound to this client.
// Idiomatic usage: client.ApiEntitiesBatchedBackgroundMigration(nil).List(nil, nil) or
// client.ApiEntitiesBatchedBackgroundMigration(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesBatchedBackgroundMigration(data map[string]any) GitlabEntity {
	return NewApiEntitiesBatchedBackgroundMigrationEntityFunc(sdk, data)
}


// ApiEntitiesBranch returns a ApiEntitiesBranch entity bound to this client.
// Idiomatic usage: client.ApiEntitiesBranch(nil).List(nil, nil) or
// client.ApiEntitiesBranch(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesBranch(data map[string]any) GitlabEntity {
	return NewApiEntitiesBranchEntityFunc(sdk, data)
}


// ApiEntitiesBulkImport returns a ApiEntitiesBulkImport entity bound to this client.
// Idiomatic usage: client.ApiEntitiesBulkImport(nil).List(nil, nil) or
// client.ApiEntitiesBulkImport(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesBulkImport(data map[string]any) GitlabEntity {
	return NewApiEntitiesBulkImportEntityFunc(sdk, data)
}


// ApiEntitiesBulkImportsEntityFailure returns a ApiEntitiesBulkImportsEntityFailure entity bound to this client.
// Idiomatic usage: client.ApiEntitiesBulkImportsEntityFailure(nil).List(nil, nil) or
// client.ApiEntitiesBulkImportsEntityFailure(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesBulkImportsEntityFailure(data map[string]any) GitlabEntity {
	return NewApiEntitiesBulkImportsEntityFailureEntityFunc(sdk, data)
}


// ApiEntitiesBulkImportsExportStatus returns a ApiEntitiesBulkImportsExportStatus entity bound to this client.
// Idiomatic usage: client.ApiEntitiesBulkImportsExportStatus(nil).List(nil, nil) or
// client.ApiEntitiesBulkImportsExportStatus(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesBulkImportsExportStatus(data map[string]any) GitlabEntity {
	return NewApiEntitiesBulkImportsExportStatusEntityFunc(sdk, data)
}


// ApiEntitiesChangelog returns a ApiEntitiesChangelog entity bound to this client.
// Idiomatic usage: client.ApiEntitiesChangelog(nil).List(nil, nil) or
// client.ApiEntitiesChangelog(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesChangelog(data map[string]any) GitlabEntity {
	return NewApiEntitiesChangelogEntityFunc(sdk, data)
}


// ApiEntitiesCiBridge returns a ApiEntitiesCiBridge entity bound to this client.
// Idiomatic usage: client.ApiEntitiesCiBridge(nil).List(nil, nil) or
// client.ApiEntitiesCiBridge(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesCiBridge(data map[string]any) GitlabEntity {
	return NewApiEntitiesCiBridgeEntityFunc(sdk, data)
}


// ApiEntitiesCiCatalogResourcesVersion returns a ApiEntitiesCiCatalogResourcesVersion entity bound to this client.
// Idiomatic usage: client.ApiEntitiesCiCatalogResourcesVersion(nil).List(nil, nil) or
// client.ApiEntitiesCiCatalogResourcesVersion(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesCiCatalogResourcesVersion(data map[string]any) GitlabEntity {
	return NewApiEntitiesCiCatalogResourcesVersionEntityFunc(sdk, data)
}


// ApiEntitiesCiJob returns a ApiEntitiesCiJob entity bound to this client.
// Idiomatic usage: client.ApiEntitiesCiJob(nil).List(nil, nil) or
// client.ApiEntitiesCiJob(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesCiJob(data map[string]any) GitlabEntity {
	return NewApiEntitiesCiJobEntityFunc(sdk, data)
}


// ApiEntitiesCiJobBasic returns a ApiEntitiesCiJobBasic entity bound to this client.
// Idiomatic usage: client.ApiEntitiesCiJobBasic(nil).List(nil, nil) or
// client.ApiEntitiesCiJobBasic(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesCiJobBasic(data map[string]any) GitlabEntity {
	return NewApiEntitiesCiJobBasicEntityFunc(sdk, data)
}


// ApiEntitiesCiJobBasicWithProject returns a ApiEntitiesCiJobBasicWithProject entity bound to this client.
// Idiomatic usage: client.ApiEntitiesCiJobBasicWithProject(nil).List(nil, nil) or
// client.ApiEntitiesCiJobBasicWithProject(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesCiJobBasicWithProject(data map[string]any) GitlabEntity {
	return NewApiEntitiesCiJobBasicWithProjectEntityFunc(sdk, data)
}


// ApiEntitiesCiLintResult returns a ApiEntitiesCiLintResult entity bound to this client.
// Idiomatic usage: client.ApiEntitiesCiLintResult(nil).List(nil, nil) or
// client.ApiEntitiesCiLintResult(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesCiLintResult(data map[string]any) GitlabEntity {
	return NewApiEntitiesCiLintResultEntityFunc(sdk, data)
}


// ApiEntitiesCiPipeline returns a ApiEntitiesCiPipeline entity bound to this client.
// Idiomatic usage: client.ApiEntitiesCiPipeline(nil).List(nil, nil) or
// client.ApiEntitiesCiPipeline(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesCiPipeline(data map[string]any) GitlabEntity {
	return NewApiEntitiesCiPipelineEntityFunc(sdk, data)
}


// ApiEntitiesCiPipelineBasic returns a ApiEntitiesCiPipelineBasic entity bound to this client.
// Idiomatic usage: client.ApiEntitiesCiPipelineBasic(nil).List(nil, nil) or
// client.ApiEntitiesCiPipelineBasic(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesCiPipelineBasic(data map[string]any) GitlabEntity {
	return NewApiEntitiesCiPipelineBasicEntityFunc(sdk, data)
}


// ApiEntitiesCiPipelineSchedule returns a ApiEntitiesCiPipelineSchedule entity bound to this client.
// Idiomatic usage: client.ApiEntitiesCiPipelineSchedule(nil).List(nil, nil) or
// client.ApiEntitiesCiPipelineSchedule(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesCiPipelineSchedule(data map[string]any) GitlabEntity {
	return NewApiEntitiesCiPipelineScheduleEntityFunc(sdk, data)
}


// ApiEntitiesCiPipelineScheduleDetail returns a ApiEntitiesCiPipelineScheduleDetail entity bound to this client.
// Idiomatic usage: client.ApiEntitiesCiPipelineScheduleDetail(nil).List(nil, nil) or
// client.ApiEntitiesCiPipelineScheduleDetail(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesCiPipelineScheduleDetail(data map[string]any) GitlabEntity {
	return NewApiEntitiesCiPipelineScheduleDetailEntityFunc(sdk, data)
}


// ApiEntitiesCiResetTokenResult returns a ApiEntitiesCiResetTokenResult entity bound to this client.
// Idiomatic usage: client.ApiEntitiesCiResetTokenResult(nil).List(nil, nil) or
// client.ApiEntitiesCiResetTokenResult(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesCiResetTokenResult(data map[string]any) GitlabEntity {
	return NewApiEntitiesCiResetTokenResultEntityFunc(sdk, data)
}


// ApiEntitiesCiResourceGroup returns a ApiEntitiesCiResourceGroup entity bound to this client.
// Idiomatic usage: client.ApiEntitiesCiResourceGroup(nil).List(nil, nil) or
// client.ApiEntitiesCiResourceGroup(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesCiResourceGroup(data map[string]any) GitlabEntity {
	return NewApiEntitiesCiResourceGroupEntityFunc(sdk, data)
}


// ApiEntitiesCiRunner returns a ApiEntitiesCiRunner entity bound to this client.
// Idiomatic usage: client.ApiEntitiesCiRunner(nil).List(nil, nil) or
// client.ApiEntitiesCiRunner(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesCiRunner(data map[string]any) GitlabEntity {
	return NewApiEntitiesCiRunnerEntityFunc(sdk, data)
}


// ApiEntitiesCiRunnerDetail returns a ApiEntitiesCiRunnerDetail entity bound to this client.
// Idiomatic usage: client.ApiEntitiesCiRunnerDetail(nil).List(nil, nil) or
// client.ApiEntitiesCiRunnerDetail(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesCiRunnerDetail(data map[string]any) GitlabEntity {
	return NewApiEntitiesCiRunnerDetailEntityFunc(sdk, data)
}


// ApiEntitiesCiRunnerManager returns a ApiEntitiesCiRunnerManager entity bound to this client.
// Idiomatic usage: client.ApiEntitiesCiRunnerManager(nil).List(nil, nil) or
// client.ApiEntitiesCiRunnerManager(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesCiRunnerManager(data map[string]any) GitlabEntity {
	return NewApiEntitiesCiRunnerManagerEntityFunc(sdk, data)
}


// ApiEntitiesCiRunnerRegistrationDetail returns a ApiEntitiesCiRunnerRegistrationDetail entity bound to this client.
// Idiomatic usage: client.ApiEntitiesCiRunnerRegistrationDetail(nil).List(nil, nil) or
// client.ApiEntitiesCiRunnerRegistrationDetail(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesCiRunnerRegistrationDetail(data map[string]any) GitlabEntity {
	return NewApiEntitiesCiRunnerRegistrationDetailEntityFunc(sdk, data)
}


// ApiEntitiesCiSecureFile returns a ApiEntitiesCiSecureFile entity bound to this client.
// Idiomatic usage: client.ApiEntitiesCiSecureFile(nil).List(nil, nil) or
// client.ApiEntitiesCiSecureFile(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesCiSecureFile(data map[string]any) GitlabEntity {
	return NewApiEntitiesCiSecureFileEntityFunc(sdk, data)
}


// ApiEntitiesCiVariable returns a ApiEntitiesCiVariable entity bound to this client.
// Idiomatic usage: client.ApiEntitiesCiVariable(nil).List(nil, nil) or
// client.ApiEntitiesCiVariable(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesCiVariable(data map[string]any) GitlabEntity {
	return NewApiEntitiesCiVariableEntityFunc(sdk, data)
}


// ApiEntitiesCluster returns a ApiEntitiesCluster entity bound to this client.
// Idiomatic usage: client.ApiEntitiesCluster(nil).List(nil, nil) or
// client.ApiEntitiesCluster(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesCluster(data map[string]any) GitlabEntity {
	return NewApiEntitiesClusterEntityFunc(sdk, data)
}


// ApiEntitiesClusterGroup returns a ApiEntitiesClusterGroup entity bound to this client.
// Idiomatic usage: client.ApiEntitiesClusterGroup(nil).List(nil, nil) or
// client.ApiEntitiesClusterGroup(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesClusterGroup(data map[string]any) GitlabEntity {
	return NewApiEntitiesClusterGroupEntityFunc(sdk, data)
}


// ApiEntitiesClusterProject returns a ApiEntitiesClusterProject entity bound to this client.
// Idiomatic usage: client.ApiEntitiesClusterProject(nil).List(nil, nil) or
// client.ApiEntitiesClusterProject(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesClusterProject(data map[string]any) GitlabEntity {
	return NewApiEntitiesClusterProjectEntityFunc(sdk, data)
}


// ApiEntitiesClustersAgent returns a ApiEntitiesClustersAgent entity bound to this client.
// Idiomatic usage: client.ApiEntitiesClustersAgent(nil).List(nil, nil) or
// client.ApiEntitiesClustersAgent(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesClustersAgent(data map[string]any) GitlabEntity {
	return NewApiEntitiesClustersAgentEntityFunc(sdk, data)
}


// ApiEntitiesClustersAgentToken returns a ApiEntitiesClustersAgentToken entity bound to this client.
// Idiomatic usage: client.ApiEntitiesClustersAgentToken(nil).List(nil, nil) or
// client.ApiEntitiesClustersAgentToken(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesClustersAgentToken(data map[string]any) GitlabEntity {
	return NewApiEntitiesClustersAgentTokenEntityFunc(sdk, data)
}


// ApiEntitiesClustersAgentTokenBasic returns a ApiEntitiesClustersAgentTokenBasic entity bound to this client.
// Idiomatic usage: client.ApiEntitiesClustersAgentTokenBasic(nil).List(nil, nil) or
// client.ApiEntitiesClustersAgentTokenBasic(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesClustersAgentTokenBasic(data map[string]any) GitlabEntity {
	return NewApiEntitiesClustersAgentTokenBasicEntityFunc(sdk, data)
}


// ApiEntitiesClustersAgentTokenWithToken returns a ApiEntitiesClustersAgentTokenWithToken entity bound to this client.
// Idiomatic usage: client.ApiEntitiesClustersAgentTokenWithToken(nil).List(nil, nil) or
// client.ApiEntitiesClustersAgentTokenWithToken(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesClustersAgentTokenWithToken(data map[string]any) GitlabEntity {
	return NewApiEntitiesClustersAgentTokenWithTokenEntityFunc(sdk, data)
}


// ApiEntitiesCommit returns a ApiEntitiesCommit entity bound to this client.
// Idiomatic usage: client.ApiEntitiesCommit(nil).List(nil, nil) or
// client.ApiEntitiesCommit(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesCommit(data map[string]any) GitlabEntity {
	return NewApiEntitiesCommitEntityFunc(sdk, data)
}


// ApiEntitiesCommitDetail returns a ApiEntitiesCommitDetail entity bound to this client.
// Idiomatic usage: client.ApiEntitiesCommitDetail(nil).List(nil, nil) or
// client.ApiEntitiesCommitDetail(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesCommitDetail(data map[string]any) GitlabEntity {
	return NewApiEntitiesCommitDetailEntityFunc(sdk, data)
}


// ApiEntitiesCommitNote returns a ApiEntitiesCommitNote entity bound to this client.
// Idiomatic usage: client.ApiEntitiesCommitNote(nil).List(nil, nil) or
// client.ApiEntitiesCommitNote(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesCommitNote(data map[string]any) GitlabEntity {
	return NewApiEntitiesCommitNoteEntityFunc(sdk, data)
}


// ApiEntitiesCommitSequence returns a ApiEntitiesCommitSequence entity bound to this client.
// Idiomatic usage: client.ApiEntitiesCommitSequence(nil).List(nil, nil) or
// client.ApiEntitiesCommitSequence(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesCommitSequence(data map[string]any) GitlabEntity {
	return NewApiEntitiesCommitSequenceEntityFunc(sdk, data)
}


// ApiEntitiesCommitSignature returns a ApiEntitiesCommitSignature entity bound to this client.
// Idiomatic usage: client.ApiEntitiesCommitSignature(nil).List(nil, nil) or
// client.ApiEntitiesCommitSignature(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesCommitSignature(data map[string]any) GitlabEntity {
	return NewApiEntitiesCommitSignatureEntityFunc(sdk, data)
}


// ApiEntitiesCommitStatus returns a ApiEntitiesCommitStatus entity bound to this client.
// Idiomatic usage: client.ApiEntitiesCommitStatus(nil).List(nil, nil) or
// client.ApiEntitiesCommitStatus(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesCommitStatus(data map[string]any) GitlabEntity {
	return NewApiEntitiesCommitStatusEntityFunc(sdk, data)
}


// ApiEntitiesCompare returns a ApiEntitiesCompare entity bound to this client.
// Idiomatic usage: client.ApiEntitiesCompare(nil).List(nil, nil) or
// client.ApiEntitiesCompare(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesCompare(data map[string]any) GitlabEntity {
	return NewApiEntitiesCompareEntityFunc(sdk, data)
}


// ApiEntitiesContainerRegistryRepository returns a ApiEntitiesContainerRegistryRepository entity bound to this client.
// Idiomatic usage: client.ApiEntitiesContainerRegistryRepository(nil).List(nil, nil) or
// client.ApiEntitiesContainerRegistryRepository(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesContainerRegistryRepository(data map[string]any) GitlabEntity {
	return NewApiEntitiesContainerRegistryRepositoryEntityFunc(sdk, data)
}


// ApiEntitiesContainerRegistryTag returns a ApiEntitiesContainerRegistryTag entity bound to this client.
// Idiomatic usage: client.ApiEntitiesContainerRegistryTag(nil).List(nil, nil) or
// client.ApiEntitiesContainerRegistryTag(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesContainerRegistryTag(data map[string]any) GitlabEntity {
	return NewApiEntitiesContainerRegistryTagEntityFunc(sdk, data)
}


// ApiEntitiesContainerRegistryTagDetail returns a ApiEntitiesContainerRegistryTagDetail entity bound to this client.
// Idiomatic usage: client.ApiEntitiesContainerRegistryTagDetail(nil).List(nil, nil) or
// client.ApiEntitiesContainerRegistryTagDetail(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesContainerRegistryTagDetail(data map[string]any) GitlabEntity {
	return NewApiEntitiesContainerRegistryTagDetailEntityFunc(sdk, data)
}


// ApiEntitiesContributor returns a ApiEntitiesContributor entity bound to this client.
// Idiomatic usage: client.ApiEntitiesContributor(nil).List(nil, nil) or
// client.ApiEntitiesContributor(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesContributor(data map[string]any) GitlabEntity {
	return NewApiEntitiesContributorEntityFunc(sdk, data)
}


// ApiEntitiesDeployKey returns a ApiEntitiesDeployKey entity bound to this client.
// Idiomatic usage: client.ApiEntitiesDeployKey(nil).List(nil, nil) or
// client.ApiEntitiesDeployKey(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesDeployKey(data map[string]any) GitlabEntity {
	return NewApiEntitiesDeployKeyEntityFunc(sdk, data)
}


// ApiEntitiesDeployKeysProject returns a ApiEntitiesDeployKeysProject entity bound to this client.
// Idiomatic usage: client.ApiEntitiesDeployKeysProject(nil).List(nil, nil) or
// client.ApiEntitiesDeployKeysProject(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesDeployKeysProject(data map[string]any) GitlabEntity {
	return NewApiEntitiesDeployKeysProjectEntityFunc(sdk, data)
}


// ApiEntitiesDeployToken returns a ApiEntitiesDeployToken entity bound to this client.
// Idiomatic usage: client.ApiEntitiesDeployToken(nil).List(nil, nil) or
// client.ApiEntitiesDeployToken(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesDeployToken(data map[string]any) GitlabEntity {
	return NewApiEntitiesDeployTokenEntityFunc(sdk, data)
}


// ApiEntitiesDeployTokenWithToken returns a ApiEntitiesDeployTokenWithToken entity bound to this client.
// Idiomatic usage: client.ApiEntitiesDeployTokenWithToken(nil).List(nil, nil) or
// client.ApiEntitiesDeployTokenWithToken(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesDeployTokenWithToken(data map[string]any) GitlabEntity {
	return NewApiEntitiesDeployTokenWithTokenEntityFunc(sdk, data)
}


// ApiEntitiesDeployment returns a ApiEntitiesDeployment entity bound to this client.
// Idiomatic usage: client.ApiEntitiesDeployment(nil).List(nil, nil) or
// client.ApiEntitiesDeployment(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesDeployment(data map[string]any) GitlabEntity {
	return NewApiEntitiesDeploymentEntityFunc(sdk, data)
}


// ApiEntitiesDeploymentExtended returns a ApiEntitiesDeploymentExtended entity bound to this client.
// Idiomatic usage: client.ApiEntitiesDeploymentExtended(nil).List(nil, nil) or
// client.ApiEntitiesDeploymentExtended(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesDeploymentExtended(data map[string]any) GitlabEntity {
	return NewApiEntitiesDeploymentExtendedEntityFunc(sdk, data)
}


// ApiEntitiesDeploymentsApproval returns a ApiEntitiesDeploymentsApproval entity bound to this client.
// Idiomatic usage: client.ApiEntitiesDeploymentsApproval(nil).List(nil, nil) or
// client.ApiEntitiesDeploymentsApproval(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesDeploymentsApproval(data map[string]any) GitlabEntity {
	return NewApiEntitiesDeploymentsApprovalEntityFunc(sdk, data)
}


// ApiEntitiesDictionaryTable returns a ApiEntitiesDictionaryTable entity bound to this client.
// Idiomatic usage: client.ApiEntitiesDictionaryTable(nil).List(nil, nil) or
// client.ApiEntitiesDictionaryTable(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesDictionaryTable(data map[string]any) GitlabEntity {
	return NewApiEntitiesDictionaryTableEntityFunc(sdk, data)
}


// ApiEntitiesDiff returns a ApiEntitiesDiff entity bound to this client.
// Idiomatic usage: client.ApiEntitiesDiff(nil).List(nil, nil) or
// client.ApiEntitiesDiff(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesDiff(data map[string]any) GitlabEntity {
	return NewApiEntitiesDiffEntityFunc(sdk, data)
}


// ApiEntitiesDiscoveredCluster returns a ApiEntitiesDiscoveredCluster entity bound to this client.
// Idiomatic usage: client.ApiEntitiesDiscoveredCluster(nil).List(nil, nil) or
// client.ApiEntitiesDiscoveredCluster(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesDiscoveredCluster(data map[string]any) GitlabEntity {
	return NewApiEntitiesDiscoveredClusterEntityFunc(sdk, data)
}


// ApiEntitiesDraftNote returns a ApiEntitiesDraftNote entity bound to this client.
// Idiomatic usage: client.ApiEntitiesDraftNote(nil).List(nil, nil) or
// client.ApiEntitiesDraftNote(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesDraftNote(data map[string]any) GitlabEntity {
	return NewApiEntitiesDraftNoteEntityFunc(sdk, data)
}


// ApiEntitiesEnvironment returns a ApiEntitiesEnvironment entity bound to this client.
// Idiomatic usage: client.ApiEntitiesEnvironment(nil).List(nil, nil) or
// client.ApiEntitiesEnvironment(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesEnvironment(data map[string]any) GitlabEntity {
	return NewApiEntitiesEnvironmentEntityFunc(sdk, data)
}


// ApiEntitiesErrorTrackingClientKey returns a ApiEntitiesErrorTrackingClientKey entity bound to this client.
// Idiomatic usage: client.ApiEntitiesErrorTrackingClientKey(nil).List(nil, nil) or
// client.ApiEntitiesErrorTrackingClientKey(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesErrorTrackingClientKey(data map[string]any) GitlabEntity {
	return NewApiEntitiesErrorTrackingClientKeyEntityFunc(sdk, data)
}


// ApiEntitiesErrorTrackingProjectSetting returns a ApiEntitiesErrorTrackingProjectSetting entity bound to this client.
// Idiomatic usage: client.ApiEntitiesErrorTrackingProjectSetting(nil).List(nil, nil) or
// client.ApiEntitiesErrorTrackingProjectSetting(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesErrorTrackingProjectSetting(data map[string]any) GitlabEntity {
	return NewApiEntitiesErrorTrackingProjectSettingEntityFunc(sdk, data)
}


// ApiEntitiesEvent returns a ApiEntitiesEvent entity bound to this client.
// Idiomatic usage: client.ApiEntitiesEvent(nil).List(nil, nil) or
// client.ApiEntitiesEvent(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesEvent(data map[string]any) GitlabEntity {
	return NewApiEntitiesEventEntityFunc(sdk, data)
}


// ApiEntitiesFeature returns a ApiEntitiesFeature entity bound to this client.
// Idiomatic usage: client.ApiEntitiesFeature(nil).List(nil, nil) or
// client.ApiEntitiesFeature(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesFeature(data map[string]any) GitlabEntity {
	return NewApiEntitiesFeatureEntityFunc(sdk, data)
}


// ApiEntitiesFeatureDefinition returns a ApiEntitiesFeatureDefinition entity bound to this client.
// Idiomatic usage: client.ApiEntitiesFeatureDefinition(nil).List(nil, nil) or
// client.ApiEntitiesFeatureDefinition(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesFeatureDefinition(data map[string]any) GitlabEntity {
	return NewApiEntitiesFeatureDefinitionEntityFunc(sdk, data)
}


// ApiEntitiesFeatureFlag returns a ApiEntitiesFeatureFlag entity bound to this client.
// Idiomatic usage: client.ApiEntitiesFeatureFlag(nil).List(nil, nil) or
// client.ApiEntitiesFeatureFlag(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesFeatureFlag(data map[string]any) GitlabEntity {
	return NewApiEntitiesFeatureFlagEntityFunc(sdk, data)
}


// ApiEntitiesFeatureFlagUserList returns a ApiEntitiesFeatureFlagUserList entity bound to this client.
// Idiomatic usage: client.ApiEntitiesFeatureFlagUserList(nil).List(nil, nil) or
// client.ApiEntitiesFeatureFlagUserList(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesFeatureFlagUserList(data map[string]any) GitlabEntity {
	return NewApiEntitiesFeatureFlagUserListEntityFunc(sdk, data)
}


// ApiEntitiesFreezePeriod returns a ApiEntitiesFreezePeriod entity bound to this client.
// Idiomatic usage: client.ApiEntitiesFreezePeriod(nil).List(nil, nil) or
// client.ApiEntitiesFreezePeriod(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesFreezePeriod(data map[string]any) GitlabEntity {
	return NewApiEntitiesFreezePeriodEntityFunc(sdk, data)
}


// ApiEntitiesGitlabSubscription returns a ApiEntitiesGitlabSubscription entity bound to this client.
// Idiomatic usage: client.ApiEntitiesGitlabSubscription(nil).List(nil, nil) or
// client.ApiEntitiesGitlabSubscription(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesGitlabSubscription(data map[string]any) GitlabEntity {
	return NewApiEntitiesGitlabSubscriptionEntityFunc(sdk, data)
}


// ApiEntitiesGoModuleVersion returns a ApiEntitiesGoModuleVersion entity bound to this client.
// Idiomatic usage: client.ApiEntitiesGoModuleVersion(nil).List(nil, nil) or
// client.ApiEntitiesGoModuleVersion(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesGoModuleVersion(data map[string]any) GitlabEntity {
	return NewApiEntitiesGoModuleVersionEntityFunc(sdk, data)
}


// ApiEntitiesGroup returns a ApiEntitiesGroup entity bound to this client.
// Idiomatic usage: client.ApiEntitiesGroup(nil).List(nil, nil) or
// client.ApiEntitiesGroup(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesGroup(data map[string]any) GitlabEntity {
	return NewApiEntitiesGroupEntityFunc(sdk, data)
}


// ApiEntitiesGroupDetail returns a ApiEntitiesGroupDetail entity bound to this client.
// Idiomatic usage: client.ApiEntitiesGroupDetail(nil).List(nil, nil) or
// client.ApiEntitiesGroupDetail(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesGroupDetail(data map[string]any) GitlabEntity {
	return NewApiEntitiesGroupDetailEntityFunc(sdk, data)
}


// ApiEntitiesHook returns a ApiEntitiesHook entity bound to this client.
// Idiomatic usage: client.ApiEntitiesHook(nil).List(nil, nil) or
// client.ApiEntitiesHook(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesHook(data map[string]any) GitlabEntity {
	return NewApiEntitiesHookEntityFunc(sdk, data)
}


// ApiEntitiesIntegration returns a ApiEntitiesIntegration entity bound to this client.
// Idiomatic usage: client.ApiEntitiesIntegration(nil).List(nil, nil) or
// client.ApiEntitiesIntegration(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesIntegration(data map[string]any) GitlabEntity {
	return NewApiEntitiesIntegrationEntityFunc(sdk, data)
}


// ApiEntitiesIntegrationBasic returns a ApiEntitiesIntegrationBasic entity bound to this client.
// Idiomatic usage: client.ApiEntitiesIntegrationBasic(nil).List(nil, nil) or
// client.ApiEntitiesIntegrationBasic(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesIntegrationBasic(data map[string]any) GitlabEntity {
	return NewApiEntitiesIntegrationBasicEntityFunc(sdk, data)
}


// ApiEntitiesInvitation returns a ApiEntitiesInvitation entity bound to this client.
// Idiomatic usage: client.ApiEntitiesInvitation(nil).List(nil, nil) or
// client.ApiEntitiesInvitation(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesInvitation(data map[string]any) GitlabEntity {
	return NewApiEntitiesInvitationEntityFunc(sdk, data)
}


// ApiEntitiesIssuableTimeStat returns a ApiEntitiesIssuableTimeStat entity bound to this client.
// Idiomatic usage: client.ApiEntitiesIssuableTimeStat(nil).List(nil, nil) or
// client.ApiEntitiesIssuableTimeStat(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesIssuableTimeStat(data map[string]any) GitlabEntity {
	return NewApiEntitiesIssuableTimeStatEntityFunc(sdk, data)
}


// ApiEntitiesIssue returns a ApiEntitiesIssue entity bound to this client.
// Idiomatic usage: client.ApiEntitiesIssue(nil).List(nil, nil) or
// client.ApiEntitiesIssue(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesIssue(data map[string]any) GitlabEntity {
	return NewApiEntitiesIssueEntityFunc(sdk, data)
}


// ApiEntitiesIssueLink returns a ApiEntitiesIssueLink entity bound to this client.
// Idiomatic usage: client.ApiEntitiesIssueLink(nil).List(nil, nil) or
// client.ApiEntitiesIssueLink(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesIssueLink(data map[string]any) GitlabEntity {
	return NewApiEntitiesIssueLinkEntityFunc(sdk, data)
}


// ApiEntitiesLicense returns a ApiEntitiesLicense entity bound to this client.
// Idiomatic usage: client.ApiEntitiesLicense(nil).List(nil, nil) or
// client.ApiEntitiesLicense(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesLicense(data map[string]any) GitlabEntity {
	return NewApiEntitiesLicenseEntityFunc(sdk, data)
}


// ApiEntitiesMarkdown returns a ApiEntitiesMarkdown entity bound to this client.
// Idiomatic usage: client.ApiEntitiesMarkdown(nil).List(nil, nil) or
// client.ApiEntitiesMarkdown(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesMarkdown(data map[string]any) GitlabEntity {
	return NewApiEntitiesMarkdownEntityFunc(sdk, data)
}


// ApiEntitiesMarkdownUploadAdmin returns a ApiEntitiesMarkdownUploadAdmin entity bound to this client.
// Idiomatic usage: client.ApiEntitiesMarkdownUploadAdmin(nil).List(nil, nil) or
// client.ApiEntitiesMarkdownUploadAdmin(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesMarkdownUploadAdmin(data map[string]any) GitlabEntity {
	return NewApiEntitiesMarkdownUploadAdminEntityFunc(sdk, data)
}


// ApiEntitiesMember returns a ApiEntitiesMember entity bound to this client.
// Idiomatic usage: client.ApiEntitiesMember(nil).List(nil, nil) or
// client.ApiEntitiesMember(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesMember(data map[string]any) GitlabEntity {
	return NewApiEntitiesMemberEntityFunc(sdk, data)
}


// ApiEntitiesMerge returns a ApiEntitiesMerge entity bound to this client.
// Idiomatic usage: client.ApiEntitiesMerge(nil).List(nil, nil) or
// client.ApiEntitiesMerge(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesMerge(data map[string]any) GitlabEntity {
	return NewApiEntitiesMergeEntityFunc(sdk, data)
}


// ApiEntitiesMergeRequestApproval returns a ApiEntitiesMergeRequestApproval entity bound to this client.
// Idiomatic usage: client.ApiEntitiesMergeRequestApproval(nil).List(nil, nil) or
// client.ApiEntitiesMergeRequestApproval(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesMergeRequestApproval(data map[string]any) GitlabEntity {
	return NewApiEntitiesMergeRequestApprovalEntityFunc(sdk, data)
}


// ApiEntitiesMergeRequestBasic returns a ApiEntitiesMergeRequestBasic entity bound to this client.
// Idiomatic usage: client.ApiEntitiesMergeRequestBasic(nil).List(nil, nil) or
// client.ApiEntitiesMergeRequestBasic(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesMergeRequestBasic(data map[string]any) GitlabEntity {
	return NewApiEntitiesMergeRequestBasicEntityFunc(sdk, data)
}


// ApiEntitiesMergeRequestChange returns a ApiEntitiesMergeRequestChange entity bound to this client.
// Idiomatic usage: client.ApiEntitiesMergeRequestChange(nil).List(nil, nil) or
// client.ApiEntitiesMergeRequestChange(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesMergeRequestChange(data map[string]any) GitlabEntity {
	return NewApiEntitiesMergeRequestChangeEntityFunc(sdk, data)
}


// ApiEntitiesMergeRequestDiff returns a ApiEntitiesMergeRequestDiff entity bound to this client.
// Idiomatic usage: client.ApiEntitiesMergeRequestDiff(nil).List(nil, nil) or
// client.ApiEntitiesMergeRequestDiff(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesMergeRequestDiff(data map[string]any) GitlabEntity {
	return NewApiEntitiesMergeRequestDiffEntityFunc(sdk, data)
}


// ApiEntitiesMergeRequestDiffFull returns a ApiEntitiesMergeRequestDiffFull entity bound to this client.
// Idiomatic usage: client.ApiEntitiesMergeRequestDiffFull(nil).List(nil, nil) or
// client.ApiEntitiesMergeRequestDiffFull(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesMergeRequestDiffFull(data map[string]any) GitlabEntity {
	return NewApiEntitiesMergeRequestDiffFullEntityFunc(sdk, data)
}


// ApiEntitiesMergeRequestReviewer returns a ApiEntitiesMergeRequestReviewer entity bound to this client.
// Idiomatic usage: client.ApiEntitiesMergeRequestReviewer(nil).List(nil, nil) or
// client.ApiEntitiesMergeRequestReviewer(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesMergeRequestReviewer(data map[string]any) GitlabEntity {
	return NewApiEntitiesMergeRequestReviewerEntityFunc(sdk, data)
}


// ApiEntitiesMetricImage returns a ApiEntitiesMetricImage entity bound to this client.
// Idiomatic usage: client.ApiEntitiesMetricImage(nil).List(nil, nil) or
// client.ApiEntitiesMetricImage(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesMetricImage(data map[string]any) GitlabEntity {
	return NewApiEntitiesMetricImageEntityFunc(sdk, data)
}


// ApiEntitiesMrNote returns a ApiEntitiesMrNote entity bound to this client.
// Idiomatic usage: client.ApiEntitiesMrNote(nil).List(nil, nil) or
// client.ApiEntitiesMrNote(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesMrNote(data map[string]any) GitlabEntity {
	return NewApiEntitiesMrNoteEntityFunc(sdk, data)
}


// ApiEntitiesNamespace returns a ApiEntitiesNamespace entity bound to this client.
// Idiomatic usage: client.ApiEntitiesNamespace(nil).List(nil, nil) or
// client.ApiEntitiesNamespace(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesNamespace(data map[string]any) GitlabEntity {
	return NewApiEntitiesNamespaceEntityFunc(sdk, data)
}


// ApiEntitiesNamespaceExistence returns a ApiEntitiesNamespaceExistence entity bound to this client.
// Idiomatic usage: client.ApiEntitiesNamespaceExistence(nil).List(nil, nil) or
// client.ApiEntitiesNamespaceExistence(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesNamespaceExistence(data map[string]any) GitlabEntity {
	return NewApiEntitiesNamespaceExistenceEntityFunc(sdk, data)
}


// ApiEntitiesNamespacesStorageLimitExclusion returns a ApiEntitiesNamespacesStorageLimitExclusion entity bound to this client.
// Idiomatic usage: client.ApiEntitiesNamespacesStorageLimitExclusion(nil).List(nil, nil) or
// client.ApiEntitiesNamespacesStorageLimitExclusion(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesNamespacesStorageLimitExclusion(data map[string]any) GitlabEntity {
	return NewApiEntitiesNamespacesStorageLimitExclusionEntityFunc(sdk, data)
}


// ApiEntitiesNpmPackage returns a ApiEntitiesNpmPackage entity bound to this client.
// Idiomatic usage: client.ApiEntitiesNpmPackage(nil).List(nil, nil) or
// client.ApiEntitiesNpmPackage(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesNpmPackage(data map[string]any) GitlabEntity {
	return NewApiEntitiesNpmPackageEntityFunc(sdk, data)
}


// ApiEntitiesNpmPackageTag returns a ApiEntitiesNpmPackageTag entity bound to this client.
// Idiomatic usage: client.ApiEntitiesNpmPackageTag(nil).List(nil, nil) or
// client.ApiEntitiesNpmPackageTag(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesNpmPackageTag(data map[string]any) GitlabEntity {
	return NewApiEntitiesNpmPackageTagEntityFunc(sdk, data)
}


// ApiEntitiesNugetPackagesVersion returns a ApiEntitiesNugetPackagesVersion entity bound to this client.
// Idiomatic usage: client.ApiEntitiesNugetPackagesVersion(nil).List(nil, nil) or
// client.ApiEntitiesNugetPackagesVersion(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesNugetPackagesVersion(data map[string]any) GitlabEntity {
	return NewApiEntitiesNugetPackagesVersionEntityFunc(sdk, data)
}


// ApiEntitiesNugetSearchResult returns a ApiEntitiesNugetSearchResult entity bound to this client.
// Idiomatic usage: client.ApiEntitiesNugetSearchResult(nil).List(nil, nil) or
// client.ApiEntitiesNugetSearchResult(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesNugetSearchResult(data map[string]any) GitlabEntity {
	return NewApiEntitiesNugetSearchResultEntityFunc(sdk, data)
}


// ApiEntitiesNugetServiceIndex returns a ApiEntitiesNugetServiceIndex entity bound to this client.
// Idiomatic usage: client.ApiEntitiesNugetServiceIndex(nil).List(nil, nil) or
// client.ApiEntitiesNugetServiceIndex(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesNugetServiceIndex(data map[string]any) GitlabEntity {
	return NewApiEntitiesNugetServiceIndexEntityFunc(sdk, data)
}


// ApiEntitiesOrganizationsOrganization returns a ApiEntitiesOrganizationsOrganization entity bound to this client.
// Idiomatic usage: client.ApiEntitiesOrganizationsOrganization(nil).List(nil, nil) or
// client.ApiEntitiesOrganizationsOrganization(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesOrganizationsOrganization(data map[string]any) GitlabEntity {
	return NewApiEntitiesOrganizationsOrganizationEntityFunc(sdk, data)
}


// ApiEntitiesPackage returns a ApiEntitiesPackage entity bound to this client.
// Idiomatic usage: client.ApiEntitiesPackage(nil).List(nil, nil) or
// client.ApiEntitiesPackage(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesPackage(data map[string]any) GitlabEntity {
	return NewApiEntitiesPackageEntityFunc(sdk, data)
}


// ApiEntitiesPackageFile returns a ApiEntitiesPackageFile entity bound to this client.
// Idiomatic usage: client.ApiEntitiesPackageFile(nil).List(nil, nil) or
// client.ApiEntitiesPackageFile(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesPackageFile(data map[string]any) GitlabEntity {
	return NewApiEntitiesPackageFileEntityFunc(sdk, data)
}


// ApiEntitiesPackagePipeline returns a ApiEntitiesPackagePipeline entity bound to this client.
// Idiomatic usage: client.ApiEntitiesPackagePipeline(nil).List(nil, nil) or
// client.ApiEntitiesPackagePipeline(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesPackagePipeline(data map[string]any) GitlabEntity {
	return NewApiEntitiesPackagePipelineEntityFunc(sdk, data)
}


// ApiEntitiesPackagesConanFilesList returns a ApiEntitiesPackagesConanFilesList entity bound to this client.
// Idiomatic usage: client.ApiEntitiesPackagesConanFilesList(nil).List(nil, nil) or
// client.ApiEntitiesPackagesConanFilesList(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesPackagesConanFilesList(data map[string]any) GitlabEntity {
	return NewApiEntitiesPackagesConanFilesListEntityFunc(sdk, data)
}


// ApiEntitiesPackagesConanPackageManifest returns a ApiEntitiesPackagesConanPackageManifest entity bound to this client.
// Idiomatic usage: client.ApiEntitiesPackagesConanPackageManifest(nil).List(nil, nil) or
// client.ApiEntitiesPackagesConanPackageManifest(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesPackagesConanPackageManifest(data map[string]any) GitlabEntity {
	return NewApiEntitiesPackagesConanPackageManifestEntityFunc(sdk, data)
}


// ApiEntitiesPackagesConanPackageRevision returns a ApiEntitiesPackagesConanPackageRevision entity bound to this client.
// Idiomatic usage: client.ApiEntitiesPackagesConanPackageRevision(nil).List(nil, nil) or
// client.ApiEntitiesPackagesConanPackageRevision(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesPackagesConanPackageRevision(data map[string]any) GitlabEntity {
	return NewApiEntitiesPackagesConanPackageRevisionEntityFunc(sdk, data)
}


// ApiEntitiesPackagesConanPackageSnapshot returns a ApiEntitiesPackagesConanPackageSnapshot entity bound to this client.
// Idiomatic usage: client.ApiEntitiesPackagesConanPackageSnapshot(nil).List(nil, nil) or
// client.ApiEntitiesPackagesConanPackageSnapshot(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesPackagesConanPackageSnapshot(data map[string]any) GitlabEntity {
	return NewApiEntitiesPackagesConanPackageSnapshotEntityFunc(sdk, data)
}


// ApiEntitiesPackagesConanRecipeManifest returns a ApiEntitiesPackagesConanRecipeManifest entity bound to this client.
// Idiomatic usage: client.ApiEntitiesPackagesConanRecipeManifest(nil).List(nil, nil) or
// client.ApiEntitiesPackagesConanRecipeManifest(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesPackagesConanRecipeManifest(data map[string]any) GitlabEntity {
	return NewApiEntitiesPackagesConanRecipeManifestEntityFunc(sdk, data)
}


// ApiEntitiesPackagesConanRecipeRevision returns a ApiEntitiesPackagesConanRecipeRevision entity bound to this client.
// Idiomatic usage: client.ApiEntitiesPackagesConanRecipeRevision(nil).List(nil, nil) or
// client.ApiEntitiesPackagesConanRecipeRevision(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesPackagesConanRecipeRevision(data map[string]any) GitlabEntity {
	return NewApiEntitiesPackagesConanRecipeRevisionEntityFunc(sdk, data)
}


// ApiEntitiesPackagesConanRecipeSnapshot returns a ApiEntitiesPackagesConanRecipeSnapshot entity bound to this client.
// Idiomatic usage: client.ApiEntitiesPackagesConanRecipeSnapshot(nil).List(nil, nil) or
// client.ApiEntitiesPackagesConanRecipeSnapshot(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesPackagesConanRecipeSnapshot(data map[string]any) GitlabEntity {
	return NewApiEntitiesPackagesConanRecipeSnapshotEntityFunc(sdk, data)
}


// ApiEntitiesPackagesConanRevision returns a ApiEntitiesPackagesConanRevision entity bound to this client.
// Idiomatic usage: client.ApiEntitiesPackagesConanRevision(nil).List(nil, nil) or
// client.ApiEntitiesPackagesConanRevision(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesPackagesConanRevision(data map[string]any) GitlabEntity {
	return NewApiEntitiesPackagesConanRevisionEntityFunc(sdk, data)
}


// ApiEntitiesPackagesConanUploadUrl returns a ApiEntitiesPackagesConanUploadUrl entity bound to this client.
// Idiomatic usage: client.ApiEntitiesPackagesConanUploadUrl(nil).List(nil, nil) or
// client.ApiEntitiesPackagesConanUploadUrl(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesPackagesConanUploadUrl(data map[string]any) GitlabEntity {
	return NewApiEntitiesPackagesConanUploadUrlEntityFunc(sdk, data)
}


// ApiEntitiesPackagesDebianDistribution returns a ApiEntitiesPackagesDebianDistribution entity bound to this client.
// Idiomatic usage: client.ApiEntitiesPackagesDebianDistribution(nil).List(nil, nil) or
// client.ApiEntitiesPackagesDebianDistribution(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesPackagesDebianDistribution(data map[string]any) GitlabEntity {
	return NewApiEntitiesPackagesDebianDistributionEntityFunc(sdk, data)
}


// ApiEntitiesPagesDomain returns a ApiEntitiesPagesDomain entity bound to this client.
// Idiomatic usage: client.ApiEntitiesPagesDomain(nil).List(nil, nil) or
// client.ApiEntitiesPagesDomain(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesPagesDomain(data map[string]any) GitlabEntity {
	return NewApiEntitiesPagesDomainEntityFunc(sdk, data)
}


// ApiEntitiesPagesDomainBasic returns a ApiEntitiesPagesDomainBasic entity bound to this client.
// Idiomatic usage: client.ApiEntitiesPagesDomainBasic(nil).List(nil, nil) or
// client.ApiEntitiesPagesDomainBasic(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesPagesDomainBasic(data map[string]any) GitlabEntity {
	return NewApiEntitiesPagesDomainBasicEntityFunc(sdk, data)
}


// ApiEntitiesPersonalAccessToken returns a ApiEntitiesPersonalAccessToken entity bound to this client.
// Idiomatic usage: client.ApiEntitiesPersonalAccessToken(nil).List(nil, nil) or
// client.ApiEntitiesPersonalAccessToken(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesPersonalAccessToken(data map[string]any) GitlabEntity {
	return NewApiEntitiesPersonalAccessTokenEntityFunc(sdk, data)
}


// ApiEntitiesPersonalAccessTokenWithLastUsedIp returns a ApiEntitiesPersonalAccessTokenWithLastUsedIp entity bound to this client.
// Idiomatic usage: client.ApiEntitiesPersonalAccessTokenWithLastUsedIp(nil).List(nil, nil) or
// client.ApiEntitiesPersonalAccessTokenWithLastUsedIp(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesPersonalAccessTokenWithLastUsedIp(data map[string]any) GitlabEntity {
	return NewApiEntitiesPersonalAccessTokenWithLastUsedIpEntityFunc(sdk, data)
}


// ApiEntitiesPersonalAccessTokenWithToken returns a ApiEntitiesPersonalAccessTokenWithToken entity bound to this client.
// Idiomatic usage: client.ApiEntitiesPersonalAccessTokenWithToken(nil).List(nil, nil) or
// client.ApiEntitiesPersonalAccessTokenWithToken(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesPersonalAccessTokenWithToken(data map[string]any) GitlabEntity {
	return NewApiEntitiesPersonalAccessTokenWithTokenEntityFunc(sdk, data)
}


// ApiEntitiesPersonalSnippet returns a ApiEntitiesPersonalSnippet entity bound to this client.
// Idiomatic usage: client.ApiEntitiesPersonalSnippet(nil).List(nil, nil) or
// client.ApiEntitiesPersonalSnippet(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesPersonalSnippet(data map[string]any) GitlabEntity {
	return NewApiEntitiesPersonalSnippetEntityFunc(sdk, data)
}


// ApiEntitiesPlanLimit returns a ApiEntitiesPlanLimit entity bound to this client.
// Idiomatic usage: client.ApiEntitiesPlanLimit(nil).List(nil, nil) or
// client.ApiEntitiesPlanLimit(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesPlanLimit(data map[string]any) GitlabEntity {
	return NewApiEntitiesPlanLimitEntityFunc(sdk, data)
}


// ApiEntitiesProject returns a ApiEntitiesProject entity bound to this client.
// Idiomatic usage: client.ApiEntitiesProject(nil).List(nil, nil) or
// client.ApiEntitiesProject(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesProject(data map[string]any) GitlabEntity {
	return NewApiEntitiesProjectEntityFunc(sdk, data)
}


// ApiEntitiesProjectDailyStatistic returns a ApiEntitiesProjectDailyStatistic entity bound to this client.
// Idiomatic usage: client.ApiEntitiesProjectDailyStatistic(nil).List(nil, nil) or
// client.ApiEntitiesProjectDailyStatistic(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesProjectDailyStatistic(data map[string]any) GitlabEntity {
	return NewApiEntitiesProjectDailyStatisticEntityFunc(sdk, data)
}


// ApiEntitiesProjectExportStatus returns a ApiEntitiesProjectExportStatus entity bound to this client.
// Idiomatic usage: client.ApiEntitiesProjectExportStatus(nil).List(nil, nil) or
// client.ApiEntitiesProjectExportStatus(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesProjectExportStatus(data map[string]any) GitlabEntity {
	return NewApiEntitiesProjectExportStatusEntityFunc(sdk, data)
}


// ApiEntitiesProjectGroupLink returns a ApiEntitiesProjectGroupLink entity bound to this client.
// Idiomatic usage: client.ApiEntitiesProjectGroupLink(nil).List(nil, nil) or
// client.ApiEntitiesProjectGroupLink(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesProjectGroupLink(data map[string]any) GitlabEntity {
	return NewApiEntitiesProjectGroupLinkEntityFunc(sdk, data)
}


// ApiEntitiesProjectHook returns a ApiEntitiesProjectHook entity bound to this client.
// Idiomatic usage: client.ApiEntitiesProjectHook(nil).List(nil, nil) or
// client.ApiEntitiesProjectHook(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesProjectHook(data map[string]any) GitlabEntity {
	return NewApiEntitiesProjectHookEntityFunc(sdk, data)
}


// ApiEntitiesProjectImportStatus returns a ApiEntitiesProjectImportStatus entity bound to this client.
// Idiomatic usage: client.ApiEntitiesProjectImportStatus(nil).List(nil, nil) or
// client.ApiEntitiesProjectImportStatus(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesProjectImportStatus(data map[string]any) GitlabEntity {
	return NewApiEntitiesProjectImportStatusEntityFunc(sdk, data)
}


// ApiEntitiesProjectJobTokenScope returns a ApiEntitiesProjectJobTokenScope entity bound to this client.
// Idiomatic usage: client.ApiEntitiesProjectJobTokenScope(nil).List(nil, nil) or
// client.ApiEntitiesProjectJobTokenScope(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesProjectJobTokenScope(data map[string]any) GitlabEntity {
	return NewApiEntitiesProjectJobTokenScopeEntityFunc(sdk, data)
}


// ApiEntitiesProjectRepositoryStorage returns a ApiEntitiesProjectRepositoryStorage entity bound to this client.
// Idiomatic usage: client.ApiEntitiesProjectRepositoryStorage(nil).List(nil, nil) or
// client.ApiEntitiesProjectRepositoryStorage(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesProjectRepositoryStorage(data map[string]any) GitlabEntity {
	return NewApiEntitiesProjectRepositoryStorageEntityFunc(sdk, data)
}


// ApiEntitiesProjectSnippet returns a ApiEntitiesProjectSnippet entity bound to this client.
// Idiomatic usage: client.ApiEntitiesProjectSnippet(nil).List(nil, nil) or
// client.ApiEntitiesProjectSnippet(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesProjectSnippet(data map[string]any) GitlabEntity {
	return NewApiEntitiesProjectSnippetEntityFunc(sdk, data)
}


// ApiEntitiesProjectUpload returns a ApiEntitiesProjectUpload entity bound to this client.
// Idiomatic usage: client.ApiEntitiesProjectUpload(nil).List(nil, nil) or
// client.ApiEntitiesProjectUpload(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesProjectUpload(data map[string]any) GitlabEntity {
	return NewApiEntitiesProjectUploadEntityFunc(sdk, data)
}


// ApiEntitiesProjectWithAccess returns a ApiEntitiesProjectWithAccess entity bound to this client.
// Idiomatic usage: client.ApiEntitiesProjectWithAccess(nil).List(nil, nil) or
// client.ApiEntitiesProjectWithAccess(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesProjectWithAccess(data map[string]any) GitlabEntity {
	return NewApiEntitiesProjectWithAccessEntityFunc(sdk, data)
}


// ApiEntitiesProjectsContainerRegistryProtectionRule returns a ApiEntitiesProjectsContainerRegistryProtectionRule entity bound to this client.
// Idiomatic usage: client.ApiEntitiesProjectsContainerRegistryProtectionRule(nil).List(nil, nil) or
// client.ApiEntitiesProjectsContainerRegistryProtectionRule(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesProjectsContainerRegistryProtectionRule(data map[string]any) GitlabEntity {
	return NewApiEntitiesProjectsContainerRegistryProtectionRuleEntityFunc(sdk, data)
}


// ApiEntitiesProjectsPackagesProtectionRule returns a ApiEntitiesProjectsPackagesProtectionRule entity bound to this client.
// Idiomatic usage: client.ApiEntitiesProjectsPackagesProtectionRule(nil).List(nil, nil) or
// client.ApiEntitiesProjectsPackagesProtectionRule(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesProjectsPackagesProtectionRule(data map[string]any) GitlabEntity {
	return NewApiEntitiesProjectsPackagesProtectionRuleEntityFunc(sdk, data)
}


// ApiEntitiesProjectsTopic returns a ApiEntitiesProjectsTopic entity bound to this client.
// Idiomatic usage: client.ApiEntitiesProjectsTopic(nil).List(nil, nil) or
// client.ApiEntitiesProjectsTopic(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesProjectsTopic(data map[string]any) GitlabEntity {
	return NewApiEntitiesProjectsTopicEntityFunc(sdk, data)
}


// ApiEntitiesProtectedBranch returns a ApiEntitiesProtectedBranch entity bound to this client.
// Idiomatic usage: client.ApiEntitiesProtectedBranch(nil).List(nil, nil) or
// client.ApiEntitiesProtectedBranch(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesProtectedBranch(data map[string]any) GitlabEntity {
	return NewApiEntitiesProtectedBranchEntityFunc(sdk, data)
}


// ApiEntitiesProtectedTag returns a ApiEntitiesProtectedTag entity bound to this client.
// Idiomatic usage: client.ApiEntitiesProtectedTag(nil).List(nil, nil) or
// client.ApiEntitiesProtectedTag(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesProtectedTag(data map[string]any) GitlabEntity {
	return NewApiEntitiesProtectedTagEntityFunc(sdk, data)
}


// ApiEntitiesPublicGroupDetail returns a ApiEntitiesPublicGroupDetail entity bound to this client.
// Idiomatic usage: client.ApiEntitiesPublicGroupDetail(nil).List(nil, nil) or
// client.ApiEntitiesPublicGroupDetail(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesPublicGroupDetail(data map[string]any) GitlabEntity {
	return NewApiEntitiesPublicGroupDetailEntityFunc(sdk, data)
}


// ApiEntitiesRelatedIssue returns a ApiEntitiesRelatedIssue entity bound to this client.
// Idiomatic usage: client.ApiEntitiesRelatedIssue(nil).List(nil, nil) or
// client.ApiEntitiesRelatedIssue(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesRelatedIssue(data map[string]any) GitlabEntity {
	return NewApiEntitiesRelatedIssueEntityFunc(sdk, data)
}


// ApiEntitiesRelationImportTracker returns a ApiEntitiesRelationImportTracker entity bound to this client.
// Idiomatic usage: client.ApiEntitiesRelationImportTracker(nil).List(nil, nil) or
// client.ApiEntitiesRelationImportTracker(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesRelationImportTracker(data map[string]any) GitlabEntity {
	return NewApiEntitiesRelationImportTrackerEntityFunc(sdk, data)
}


// ApiEntitiesRelease returns a ApiEntitiesRelease entity bound to this client.
// Idiomatic usage: client.ApiEntitiesRelease(nil).List(nil, nil) or
// client.ApiEntitiesRelease(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesRelease(data map[string]any) GitlabEntity {
	return NewApiEntitiesReleaseEntityFunc(sdk, data)
}


// ApiEntitiesReleasesLink returns a ApiEntitiesReleasesLink entity bound to this client.
// Idiomatic usage: client.ApiEntitiesReleasesLink(nil).List(nil, nil) or
// client.ApiEntitiesReleasesLink(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesReleasesLink(data map[string]any) GitlabEntity {
	return NewApiEntitiesReleasesLinkEntityFunc(sdk, data)
}


// ApiEntitiesRemoteMirror returns a ApiEntitiesRemoteMirror entity bound to this client.
// Idiomatic usage: client.ApiEntitiesRemoteMirror(nil).List(nil, nil) or
// client.ApiEntitiesRemoteMirror(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesRemoteMirror(data map[string]any) GitlabEntity {
	return NewApiEntitiesRemoteMirrorEntityFunc(sdk, data)
}


// ApiEntitiesRepositoryHealth returns a ApiEntitiesRepositoryHealth entity bound to this client.
// Idiomatic usage: client.ApiEntitiesRepositoryHealth(nil).List(nil, nil) or
// client.ApiEntitiesRepositoryHealth(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesRepositoryHealth(data map[string]any) GitlabEntity {
	return NewApiEntitiesRepositoryHealthEntityFunc(sdk, data)
}


// ApiEntitiesResourceAccessTokenWithToken returns a ApiEntitiesResourceAccessTokenWithToken entity bound to this client.
// Idiomatic usage: client.ApiEntitiesResourceAccessTokenWithToken(nil).List(nil, nil) or
// client.ApiEntitiesResourceAccessTokenWithToken(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesResourceAccessTokenWithToken(data map[string]any) GitlabEntity {
	return NewApiEntitiesResourceAccessTokenWithTokenEntityFunc(sdk, data)
}


// ApiEntitiesResourceMilestoneEvent returns a ApiEntitiesResourceMilestoneEvent entity bound to this client.
// Idiomatic usage: client.ApiEntitiesResourceMilestoneEvent(nil).List(nil, nil) or
// client.ApiEntitiesResourceMilestoneEvent(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesResourceMilestoneEvent(data map[string]any) GitlabEntity {
	return NewApiEntitiesResourceMilestoneEventEntityFunc(sdk, data)
}


// ApiEntitiesSnippet returns a ApiEntitiesSnippet entity bound to this client.
// Idiomatic usage: client.ApiEntitiesSnippet(nil).List(nil, nil) or
// client.ApiEntitiesSnippet(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesSnippet(data map[string]any) GitlabEntity {
	return NewApiEntitiesSnippetEntityFunc(sdk, data)
}


// ApiEntitiesSshKeyWithUser returns a ApiEntitiesSshKeyWithUser entity bound to this client.
// Idiomatic usage: client.ApiEntitiesSshKeyWithUser(nil).List(nil, nil) or
// client.ApiEntitiesSshKeyWithUser(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesSshKeyWithUser(data map[string]any) GitlabEntity {
	return NewApiEntitiesSshKeyWithUserEntityFunc(sdk, data)
}


// ApiEntitiesSuggestion returns a ApiEntitiesSuggestion entity bound to this client.
// Idiomatic usage: client.ApiEntitiesSuggestion(nil).List(nil, nil) or
// client.ApiEntitiesSuggestion(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesSuggestion(data map[string]any) GitlabEntity {
	return NewApiEntitiesSuggestionEntityFunc(sdk, data)
}


// ApiEntitiesSystemBroadcastMessage returns a ApiEntitiesSystemBroadcastMessage entity bound to this client.
// Idiomatic usage: client.ApiEntitiesSystemBroadcastMessage(nil).List(nil, nil) or
// client.ApiEntitiesSystemBroadcastMessage(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesSystemBroadcastMessage(data map[string]any) GitlabEntity {
	return NewApiEntitiesSystemBroadcastMessageEntityFunc(sdk, data)
}


// ApiEntitiesTag returns a ApiEntitiesTag entity bound to this client.
// Idiomatic usage: client.ApiEntitiesTag(nil).List(nil, nil) or
// client.ApiEntitiesTag(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesTag(data map[string]any) GitlabEntity {
	return NewApiEntitiesTagEntityFunc(sdk, data)
}


// ApiEntitiesTagSignature returns a ApiEntitiesTagSignature entity bound to this client.
// Idiomatic usage: client.ApiEntitiesTagSignature(nil).List(nil, nil) or
// client.ApiEntitiesTagSignature(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesTagSignature(data map[string]any) GitlabEntity {
	return NewApiEntitiesTagSignatureEntityFunc(sdk, data)
}


// ApiEntitiesTemplatesList returns a ApiEntitiesTemplatesList entity bound to this client.
// Idiomatic usage: client.ApiEntitiesTemplatesList(nil).List(nil, nil) or
// client.ApiEntitiesTemplatesList(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesTemplatesList(data map[string]any) GitlabEntity {
	return NewApiEntitiesTemplatesListEntityFunc(sdk, data)
}


// ApiEntitiesTerraformModuleVersion returns a ApiEntitiesTerraformModuleVersion entity bound to this client.
// Idiomatic usage: client.ApiEntitiesTerraformModuleVersion(nil).List(nil, nil) or
// client.ApiEntitiesTerraformModuleVersion(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesTerraformModuleVersion(data map[string]any) GitlabEntity {
	return NewApiEntitiesTerraformModuleVersionEntityFunc(sdk, data)
}


// ApiEntitiesTreeObject returns a ApiEntitiesTreeObject entity bound to this client.
// Idiomatic usage: client.ApiEntitiesTreeObject(nil).List(nil, nil) or
// client.ApiEntitiesTreeObject(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesTreeObject(data map[string]any) GitlabEntity {
	return NewApiEntitiesTreeObjectEntityFunc(sdk, data)
}


// ApiEntitiesTrigger returns a ApiEntitiesTrigger entity bound to this client.
// Idiomatic usage: client.ApiEntitiesTrigger(nil).List(nil, nil) or
// client.ApiEntitiesTrigger(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesTrigger(data map[string]any) GitlabEntity {
	return NewApiEntitiesTriggerEntityFunc(sdk, data)
}


// ApiEntitiesUserAgentDetail returns a ApiEntitiesUserAgentDetail entity bound to this client.
// Idiomatic usage: client.ApiEntitiesUserAgentDetail(nil).List(nil, nil) or
// client.ApiEntitiesUserAgentDetail(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesUserAgentDetail(data map[string]any) GitlabEntity {
	return NewApiEntitiesUserAgentDetailEntityFunc(sdk, data)
}


// ApiEntitiesUserCount returns a ApiEntitiesUserCount entity bound to this client.
// Idiomatic usage: client.ApiEntitiesUserCount(nil).List(nil, nil) or
// client.ApiEntitiesUserCount(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesUserCount(data map[string]any) GitlabEntity {
	return NewApiEntitiesUserCountEntityFunc(sdk, data)
}


// ApiEntitiesUserPublic returns a ApiEntitiesUserPublic entity bound to this client.
// Idiomatic usage: client.ApiEntitiesUserPublic(nil).List(nil, nil) or
// client.ApiEntitiesUserPublic(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesUserPublic(data map[string]any) GitlabEntity {
	return NewApiEntitiesUserPublicEntityFunc(sdk, data)
}


// ApiEntitiesUserWithAdmin returns a ApiEntitiesUserWithAdmin entity bound to this client.
// Idiomatic usage: client.ApiEntitiesUserWithAdmin(nil).List(nil, nil) or
// client.ApiEntitiesUserWithAdmin(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesUserWithAdmin(data map[string]any) GitlabEntity {
	return NewApiEntitiesUserWithAdminEntityFunc(sdk, data)
}


// ApiEntitiesWikiAttachment returns a ApiEntitiesWikiAttachment entity bound to this client.
// Idiomatic usage: client.ApiEntitiesWikiAttachment(nil).List(nil, nil) or
// client.ApiEntitiesWikiAttachment(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesWikiAttachment(data map[string]any) GitlabEntity {
	return NewApiEntitiesWikiAttachmentEntityFunc(sdk, data)
}


// ApiEntitiesWikiPage returns a ApiEntitiesWikiPage entity bound to this client.
// Idiomatic usage: client.ApiEntitiesWikiPage(nil).List(nil, nil) or
// client.ApiEntitiesWikiPage(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesWikiPage(data map[string]any) GitlabEntity {
	return NewApiEntitiesWikiPageEntityFunc(sdk, data)
}


// ApiEntitiesWikiPageBasic returns a ApiEntitiesWikiPageBasic entity bound to this client.
// Idiomatic usage: client.ApiEntitiesWikiPageBasic(nil).List(nil, nil) or
// client.ApiEntitiesWikiPageBasic(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ApiEntitiesWikiPageBasic(data map[string]any) GitlabEntity {
	return NewApiEntitiesWikiPageBasicEntityFunc(sdk, data)
}


// Application returns a Application entity bound to this client.
// Idiomatic usage: client.Application(nil).List(nil, nil) or
// client.Application(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) Application(data map[string]any) GitlabEntity {
	return NewApplicationEntityFunc(sdk, data)
}


// AwardEmoji returns a AwardEmoji entity bound to this client.
// Idiomatic usage: client.AwardEmoji(nil).List(nil, nil) or
// client.AwardEmoji(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) AwardEmoji(data map[string]any) GitlabEntity {
	return NewAwardEmojiEntityFunc(sdk, data)
}


// Badge returns a Badge entity bound to this client.
// Idiomatic usage: client.Badge(nil).List(nil, nil) or
// client.Badge(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) Badge(data map[string]any) GitlabEntity {
	return NewBadgeEntityFunc(sdk, data)
}


// Branch returns a Branch entity bound to this client.
// Idiomatic usage: client.Branch(nil).List(nil, nil) or
// client.Branch(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) Branch(data map[string]any) GitlabEntity {
	return NewBranchEntityFunc(sdk, data)
}


// CargoPackage returns a CargoPackage entity bound to this client.
// Idiomatic usage: client.CargoPackage(nil).List(nil, nil) or
// client.CargoPackage(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) CargoPackage(data map[string]any) GitlabEntity {
	return NewCargoPackageEntityFunc(sdk, data)
}


// CiVariable returns a CiVariable entity bound to this client.
// Idiomatic usage: client.CiVariable(nil).List(nil, nil) or
// client.CiVariable(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) CiVariable(data map[string]any) GitlabEntity {
	return NewCiVariableEntityFunc(sdk, data)
}


// Cluster returns a Cluster entity bound to this client.
// Idiomatic usage: client.Cluster(nil).List(nil, nil) or
// client.Cluster(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) Cluster(data map[string]any) GitlabEntity {
	return NewClusterEntityFunc(sdk, data)
}


// ClusterAgent returns a ClusterAgent entity bound to this client.
// Idiomatic usage: client.ClusterAgent(nil).List(nil, nil) or
// client.ClusterAgent(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ClusterAgent(data map[string]any) GitlabEntity {
	return NewClusterAgentEntityFunc(sdk, data)
}


// Composer returns a Composer entity bound to this client.
// Idiomatic usage: client.Composer(nil).List(nil, nil) or
// client.Composer(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) Composer(data map[string]any) GitlabEntity {
	return NewComposerEntityFunc(sdk, data)
}


// ComposerPackage returns a ComposerPackage entity bound to this client.
// Idiomatic usage: client.ComposerPackage(nil).List(nil, nil) or
// client.ComposerPackage(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ComposerPackage(data map[string]any) GitlabEntity {
	return NewComposerPackageEntityFunc(sdk, data)
}


// Conan returns a Conan entity bound to this client.
// Idiomatic usage: client.Conan(nil).List(nil, nil) or
// client.Conan(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) Conan(data map[string]any) GitlabEntity {
	return NewConanEntityFunc(sdk, data)
}


// ConanPackage returns a ConanPackage entity bound to this client.
// Idiomatic usage: client.ConanPackage(nil).List(nil, nil) or
// client.ConanPackage(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ConanPackage(data map[string]any) GitlabEntity {
	return NewConanPackageEntityFunc(sdk, data)
}


// ContainerRegistry returns a ContainerRegistry entity bound to this client.
// Idiomatic usage: client.ContainerRegistry(nil).List(nil, nil) or
// client.ContainerRegistry(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ContainerRegistry(data map[string]any) GitlabEntity {
	return NewContainerRegistryEntityFunc(sdk, data)
}


// ContainerRegistryEvent returns a ContainerRegistryEvent entity bound to this client.
// Idiomatic usage: client.ContainerRegistryEvent(nil).List(nil, nil) or
// client.ContainerRegistryEvent(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ContainerRegistryEvent(data map[string]any) GitlabEntity {
	return NewContainerRegistryEventEntityFunc(sdk, data)
}


// CustomAttribute returns a CustomAttribute entity bound to this client.
// Idiomatic usage: client.CustomAttribute(nil).List(nil, nil) or
// client.CustomAttribute(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) CustomAttribute(data map[string]any) GitlabEntity {
	return NewCustomAttributeEntityFunc(sdk, data)
}


// Debian returns a Debian entity bound to this client.
// Idiomatic usage: client.Debian(nil).List(nil, nil) or
// client.Debian(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) Debian(data map[string]any) GitlabEntity {
	return NewDebianEntityFunc(sdk, data)
}


// DebianDistribution returns a DebianDistribution entity bound to this client.
// Idiomatic usage: client.DebianDistribution(nil).List(nil, nil) or
// client.DebianDistribution(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) DebianDistribution(data map[string]any) GitlabEntity {
	return NewDebianDistributionEntityFunc(sdk, data)
}


// DebianPackage returns a DebianPackage entity bound to this client.
// Idiomatic usage: client.DebianPackage(nil).List(nil, nil) or
// client.DebianPackage(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) DebianPackage(data map[string]any) GitlabEntity {
	return NewDebianPackageEntityFunc(sdk, data)
}


// DependencyProxy returns a DependencyProxy entity bound to this client.
// Idiomatic usage: client.DependencyProxy(nil).List(nil, nil) or
// client.DependencyProxy(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) DependencyProxy(data map[string]any) GitlabEntity {
	return NewDependencyProxyEntityFunc(sdk, data)
}


// DeployKey returns a DeployKey entity bound to this client.
// Idiomatic usage: client.DeployKey(nil).List(nil, nil) or
// client.DeployKey(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) DeployKey(data map[string]any) GitlabEntity {
	return NewDeployKeyEntityFunc(sdk, data)
}


// DeployToken returns a DeployToken entity bound to this client.
// Idiomatic usage: client.DeployToken(nil).List(nil, nil) or
// client.DeployToken(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) DeployToken(data map[string]any) GitlabEntity {
	return NewDeployTokenEntityFunc(sdk, data)
}


// Deployment returns a Deployment entity bound to this client.
// Idiomatic usage: client.Deployment(nil).List(nil, nil) or
// client.Deployment(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) Deployment(data map[string]any) GitlabEntity {
	return NewDeploymentEntityFunc(sdk, data)
}


// EeApiEntitiesApprovalState returns a EeApiEntitiesApprovalState entity bound to this client.
// Idiomatic usage: client.EeApiEntitiesApprovalState(nil).List(nil, nil) or
// client.EeApiEntitiesApprovalState(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) EeApiEntitiesApprovalState(data map[string]any) GitlabEntity {
	return NewEeApiEntitiesApprovalStateEntityFunc(sdk, data)
}


// EeApiEntitiesAuditEvent returns a EeApiEntitiesAuditEvent entity bound to this client.
// Idiomatic usage: client.EeApiEntitiesAuditEvent(nil).List(nil, nil) or
// client.EeApiEntitiesAuditEvent(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) EeApiEntitiesAuditEvent(data map[string]any) GitlabEntity {
	return NewEeApiEntitiesAuditEventEntityFunc(sdk, data)
}


// EeApiEntitiesBillableMembership returns a EeApiEntitiesBillableMembership entity bound to this client.
// Idiomatic usage: client.EeApiEntitiesBillableMembership(nil).List(nil, nil) or
// client.EeApiEntitiesBillableMembership(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) EeApiEntitiesBillableMembership(data map[string]any) GitlabEntity {
	return NewEeApiEntitiesBillableMembershipEntityFunc(sdk, data)
}


// EeApiEntitiesGeoNodeStatus returns a EeApiEntitiesGeoNodeStatus entity bound to this client.
// Idiomatic usage: client.EeApiEntitiesGeoNodeStatus(nil).List(nil, nil) or
// client.EeApiEntitiesGeoNodeStatus(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) EeApiEntitiesGeoNodeStatus(data map[string]any) GitlabEntity {
	return NewEeApiEntitiesGeoNodeStatusEntityFunc(sdk, data)
}


// EeApiEntitiesGeoPipelineRef returns a EeApiEntitiesGeoPipelineRef entity bound to this client.
// Idiomatic usage: client.EeApiEntitiesGeoPipelineRef(nil).List(nil, nil) or
// client.EeApiEntitiesGeoPipelineRef(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) EeApiEntitiesGeoPipelineRef(data map[string]any) GitlabEntity {
	return NewEeApiEntitiesGeoPipelineRefEntityFunc(sdk, data)
}


// EeApiEntitiesIssuableMetricImage returns a EeApiEntitiesIssuableMetricImage entity bound to this client.
// Idiomatic usage: client.EeApiEntitiesIssuableMetricImage(nil).List(nil, nil) or
// client.EeApiEntitiesIssuableMetricImage(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) EeApiEntitiesIssuableMetricImage(data map[string]any) GitlabEntity {
	return NewEeApiEntitiesIssuableMetricImageEntityFunc(sdk, data)
}


// EeApiEntitiesMergeRequestApprovalState returns a EeApiEntitiesMergeRequestApprovalState entity bound to this client.
// Idiomatic usage: client.EeApiEntitiesMergeRequestApprovalState(nil).List(nil, nil) or
// client.EeApiEntitiesMergeRequestApprovalState(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) EeApiEntitiesMergeRequestApprovalState(data map[string]any) GitlabEntity {
	return NewEeApiEntitiesMergeRequestApprovalStateEntityFunc(sdk, data)
}


// EeApiEntitiesSshCertificate returns a EeApiEntitiesSshCertificate entity bound to this client.
// Idiomatic usage: client.EeApiEntitiesSshCertificate(nil).List(nil, nil) or
// client.EeApiEntitiesSshCertificate(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) EeApiEntitiesSshCertificate(data map[string]any) GitlabEntity {
	return NewEeApiEntitiesSshCertificateEntityFunc(sdk, data)
}


// Environment returns a Environment entity bound to this client.
// Idiomatic usage: client.Environment(nil).List(nil, nil) or
// client.Environment(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) Environment(data map[string]any) GitlabEntity {
	return NewEnvironmentEntityFunc(sdk, data)
}


// ErrorTrackingClientKey returns a ErrorTrackingClientKey entity bound to this client.
// Idiomatic usage: client.ErrorTrackingClientKey(nil).List(nil, nil) or
// client.ErrorTrackingClientKey(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ErrorTrackingClientKey(data map[string]any) GitlabEntity {
	return NewErrorTrackingClientKeyEntityFunc(sdk, data)
}


// Feature returns a Feature entity bound to this client.
// Idiomatic usage: client.Feature(nil).List(nil, nil) or
// client.Feature(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) Feature(data map[string]any) GitlabEntity {
	return NewFeatureEntityFunc(sdk, data)
}


// FeatureFlag returns a FeatureFlag entity bound to this client.
// Idiomatic usage: client.FeatureFlag(nil).List(nil, nil) or
// client.FeatureFlag(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) FeatureFlag(data map[string]any) GitlabEntity {
	return NewFeatureFlagEntityFunc(sdk, data)
}


// FeatureFlagsUserList returns a FeatureFlagsUserList entity bound to this client.
// Idiomatic usage: client.FeatureFlagsUserList(nil).List(nil, nil) or
// client.FeatureFlagsUserList(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) FeatureFlagsUserList(data map[string]any) GitlabEntity {
	return NewFeatureFlagsUserListEntityFunc(sdk, data)
}


// FreezePeriod returns a FreezePeriod entity bound to this client.
// Idiomatic usage: client.FreezePeriod(nil).List(nil, nil) or
// client.FreezePeriod(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) FreezePeriod(data map[string]any) GitlabEntity {
	return NewFreezePeriodEntityFunc(sdk, data)
}


// GenericPackage returns a GenericPackage entity bound to this client.
// Idiomatic usage: client.GenericPackage(nil).List(nil, nil) or
// client.GenericPackage(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) GenericPackage(data map[string]any) GitlabEntity {
	return NewGenericPackageEntityFunc(sdk, data)
}


// Geo returns a Geo entity bound to this client.
// Idiomatic usage: client.Geo(nil).List(nil, nil) or
// client.Geo(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) Geo(data map[string]any) GitlabEntity {
	return NewGeoEntityFunc(sdk, data)
}


// GoProxy returns a GoProxy entity bound to this client.
// Idiomatic usage: client.GoProxy(nil).List(nil, nil) or
// client.GoProxy(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) GoProxy(data map[string]any) GitlabEntity {
	return NewGoProxyEntityFunc(sdk, data)
}


// Group returns a Group entity bound to this client.
// Idiomatic usage: client.Group(nil).List(nil, nil) or
// client.Group(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) Group(data map[string]any) GitlabEntity {
	return NewGroupEntityFunc(sdk, data)
}


// GroupAvatar returns a GroupAvatar entity bound to this client.
// Idiomatic usage: client.GroupAvatar(nil).List(nil, nil) or
// client.GroupAvatar(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) GroupAvatar(data map[string]any) GitlabEntity {
	return NewGroupAvatarEntityFunc(sdk, data)
}


// GroupExport returns a GroupExport entity bound to this client.
// Idiomatic usage: client.GroupExport(nil).List(nil, nil) or
// client.GroupExport(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) GroupExport(data map[string]any) GitlabEntity {
	return NewGroupExportEntityFunc(sdk, data)
}


// GroupImport returns a GroupImport entity bound to this client.
// Idiomatic usage: client.GroupImport(nil).List(nil, nil) or
// client.GroupImport(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) GroupImport(data map[string]any) GitlabEntity {
	return NewGroupImportEntityFunc(sdk, data)
}


// HelmPackage returns a HelmPackage entity bound to this client.
// Idiomatic usage: client.HelmPackage(nil).List(nil, nil) or
// client.HelmPackage(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) HelmPackage(data map[string]any) GitlabEntity {
	return NewHelmPackageEntityFunc(sdk, data)
}


// Hook returns a Hook entity bound to this client.
// Idiomatic usage: client.Hook(nil).List(nil, nil) or
// client.Hook(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) Hook(data map[string]any) GitlabEntity {
	return NewHookEntityFunc(sdk, data)
}


// Import returns a Import entity bound to this client.
// Idiomatic usage: client.Import(nil).List(nil, nil) or
// client.Import(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) Import(data map[string]any) GitlabEntity {
	return NewImportEntityFunc(sdk, data)
}


// Integration returns a Integration entity bound to this client.
// Idiomatic usage: client.Integration(nil).List(nil, nil) or
// client.Integration(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) Integration(data map[string]any) GitlabEntity {
	return NewIntegrationEntityFunc(sdk, data)
}


// Invitation returns a Invitation entity bound to this client.
// Idiomatic usage: client.Invitation(nil).List(nil, nil) or
// client.Invitation(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) Invitation(data map[string]any) GitlabEntity {
	return NewInvitationEntityFunc(sdk, data)
}


// IssueLink returns a IssueLink entity bound to this client.
// Idiomatic usage: client.IssueLink(nil).List(nil, nil) or
// client.IssueLink(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) IssueLink(data map[string]any) GitlabEntity {
	return NewIssueLinkEntityFunc(sdk, data)
}


// IssuesStatistic returns a IssuesStatistic entity bound to this client.
// Idiomatic usage: client.IssuesStatistic(nil).List(nil, nil) or
// client.IssuesStatistic(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) IssuesStatistic(data map[string]any) GitlabEntity {
	return NewIssuesStatisticEntityFunc(sdk, data)
}


// Job returns a Job entity bound to this client.
// Idiomatic usage: client.Job(nil).List(nil, nil) or
// client.Job(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) Job(data map[string]any) GitlabEntity {
	return NewJobEntityFunc(sdk, data)
}


// MavenPackage returns a MavenPackage entity bound to this client.
// Idiomatic usage: client.MavenPackage(nil).List(nil, nil) or
// client.MavenPackage(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) MavenPackage(data map[string]any) GitlabEntity {
	return NewMavenPackageEntityFunc(sdk, data)
}


// Member returns a Member entity bound to this client.
// Idiomatic usage: client.Member(nil).List(nil, nil) or
// client.Member(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) Member(data map[string]any) GitlabEntity {
	return NewMemberEntityFunc(sdk, data)
}


// MergeRequest returns a MergeRequest entity bound to this client.
// Idiomatic usage: client.MergeRequest(nil).List(nil, nil) or
// client.MergeRequest(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) MergeRequest(data map[string]any) GitlabEntity {
	return NewMergeRequestEntityFunc(sdk, data)
}


// Metadata returns a Metadata entity bound to this client.
// Idiomatic usage: client.Metadata(nil).List(nil, nil) or
// client.Metadata(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) Metadata(data map[string]any) GitlabEntity {
	return NewMetadataEntityFunc(sdk, data)
}


// Migration returns a Migration entity bound to this client.
// Idiomatic usage: client.Migration(nil).List(nil, nil) or
// client.Migration(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) Migration(data map[string]any) GitlabEntity {
	return NewMigrationEntityFunc(sdk, data)
}


// MlModelRegistry returns a MlModelRegistry entity bound to this client.
// Idiomatic usage: client.MlModelRegistry(nil).List(nil, nil) or
// client.MlModelRegistry(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) MlModelRegistry(data map[string]any) GitlabEntity {
	return NewMlModelRegistryEntityFunc(sdk, data)
}


// Namespace returns a Namespace entity bound to this client.
// Idiomatic usage: client.Namespace(nil).List(nil, nil) or
// client.Namespace(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) Namespace(data map[string]any) GitlabEntity {
	return NewNamespaceEntityFunc(sdk, data)
}


// Npm returns a Npm entity bound to this client.
// Idiomatic usage: client.Npm(nil).List(nil, nil) or
// client.Npm(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) Npm(data map[string]any) GitlabEntity {
	return NewNpmEntityFunc(sdk, data)
}


// NpmPackage returns a NpmPackage entity bound to this client.
// Idiomatic usage: client.NpmPackage(nil).List(nil, nil) or
// client.NpmPackage(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) NpmPackage(data map[string]any) GitlabEntity {
	return NewNpmPackageEntityFunc(sdk, data)
}


// Nuget returns a Nuget entity bound to this client.
// Idiomatic usage: client.Nuget(nil).List(nil, nil) or
// client.Nuget(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) Nuget(data map[string]any) GitlabEntity {
	return NewNugetEntityFunc(sdk, data)
}


// NugetPackage returns a NugetPackage entity bound to this client.
// Idiomatic usage: client.NugetPackage(nil).List(nil, nil) or
// client.NugetPackage(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) NugetPackage(data map[string]any) GitlabEntity {
	return NewNugetPackageEntityFunc(sdk, data)
}


// PackageFile returns a PackageFile entity bound to this client.
// Idiomatic usage: client.PackageFile(nil).List(nil, nil) or
// client.PackageFile(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) PackageFile(data map[string]any) GitlabEntity {
	return NewPackageFileEntityFunc(sdk, data)
}


// Page returns a Page entity bound to this client.
// Idiomatic usage: client.Page(nil).List(nil, nil) or
// client.Page(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) Page(data map[string]any) GitlabEntity {
	return NewPageEntityFunc(sdk, data)
}


// Participant returns a Participant entity bound to this client.
// Idiomatic usage: client.Participant(nil).List(nil, nil) or
// client.Participant(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) Participant(data map[string]any) GitlabEntity {
	return NewParticipantEntityFunc(sdk, data)
}


// PersonalAccessToken returns a PersonalAccessToken entity bound to this client.
// Idiomatic usage: client.PersonalAccessToken(nil).List(nil, nil) or
// client.PersonalAccessToken(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) PersonalAccessToken(data map[string]any) GitlabEntity {
	return NewPersonalAccessTokenEntityFunc(sdk, data)
}


// Project returns a Project entity bound to this client.
// Idiomatic usage: client.Project(nil).List(nil, nil) or
// client.Project(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) Project(data map[string]any) GitlabEntity {
	return NewProjectEntityFunc(sdk, data)
}


// ProjectAvatar returns a ProjectAvatar entity bound to this client.
// Idiomatic usage: client.ProjectAvatar(nil).List(nil, nil) or
// client.ProjectAvatar(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ProjectAvatar(data map[string]any) GitlabEntity {
	return NewProjectAvatarEntityFunc(sdk, data)
}


// ProjectEntity returns a ProjectEntity entity bound to this client.
// Idiomatic usage: client.ProjectEntity(nil).List(nil, nil) or
// client.ProjectEntity(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ProjectEntity(data map[string]any) GitlabEntity {
	return NewProjectEntityEntityFunc(sdk, data)
}


// ProjectExport returns a ProjectExport entity bound to this client.
// Idiomatic usage: client.ProjectExport(nil).List(nil, nil) or
// client.ProjectExport(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ProjectExport(data map[string]any) GitlabEntity {
	return NewProjectExportEntityFunc(sdk, data)
}


// ProjectHook returns a ProjectHook entity bound to this client.
// Idiomatic usage: client.ProjectHook(nil).List(nil, nil) or
// client.ProjectHook(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ProjectHook(data map[string]any) GitlabEntity {
	return NewProjectHookEntityFunc(sdk, data)
}


// ProjectImport returns a ProjectImport entity bound to this client.
// Idiomatic usage: client.ProjectImport(nil).List(nil, nil) or
// client.ProjectImport(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ProjectImport(data map[string]any) GitlabEntity {
	return NewProjectImportEntityFunc(sdk, data)
}


// ProjectImportEntity returns a ProjectImportEntity entity bound to this client.
// Idiomatic usage: client.ProjectImportEntity(nil).List(nil, nil) or
// client.ProjectImportEntity(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ProjectImportEntity(data map[string]any) GitlabEntity {
	return NewProjectImportEntityEntityFunc(sdk, data)
}


// ProjectPackage returns a ProjectPackage entity bound to this client.
// Idiomatic usage: client.ProjectPackage(nil).List(nil, nil) or
// client.ProjectPackage(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ProjectPackage(data map[string]any) GitlabEntity {
	return NewProjectPackageEntityFunc(sdk, data)
}


// ProjectSnippet returns a ProjectSnippet entity bound to this client.
// Idiomatic usage: client.ProjectSnippet(nil).List(nil, nil) or
// client.ProjectSnippet(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ProjectSnippet(data map[string]any) GitlabEntity {
	return NewProjectSnippetEntityFunc(sdk, data)
}


// ProjectsJobTokenScope returns a ProjectsJobTokenScope entity bound to this client.
// Idiomatic usage: client.ProjectsJobTokenScope(nil).List(nil, nil) or
// client.ProjectsJobTokenScope(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ProjectsJobTokenScope(data map[string]any) GitlabEntity {
	return NewProjectsJobTokenScopeEntityFunc(sdk, data)
}


// ProtectedTag returns a ProtectedTag entity bound to this client.
// Idiomatic usage: client.ProtectedTag(nil).List(nil, nil) or
// client.ProtectedTag(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ProtectedTag(data map[string]any) GitlabEntity {
	return NewProtectedTagEntityFunc(sdk, data)
}


// Pypi returns a Pypi entity bound to this client.
// Idiomatic usage: client.Pypi(nil).List(nil, nil) or
// client.Pypi(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) Pypi(data map[string]any) GitlabEntity {
	return NewPypiEntityFunc(sdk, data)
}


// PypiPackage returns a PypiPackage entity bound to this client.
// Idiomatic usage: client.PypiPackage(nil).List(nil, nil) or
// client.PypiPackage(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) PypiPackage(data map[string]any) GitlabEntity {
	return NewPypiPackageEntityFunc(sdk, data)
}


// Release returns a Release entity bound to this client.
// Idiomatic usage: client.Release(nil).List(nil, nil) or
// client.Release(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) Release(data map[string]any) GitlabEntity {
	return NewReleaseEntityFunc(sdk, data)
}


// ReleaseLink returns a ReleaseLink entity bound to this client.
// Idiomatic usage: client.ReleaseLink(nil).List(nil, nil) or
// client.ReleaseLink(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) ReleaseLink(data map[string]any) GitlabEntity {
	return NewReleaseLinkEntityFunc(sdk, data)
}


// RemoteMirror returns a RemoteMirror entity bound to this client.
// Idiomatic usage: client.RemoteMirror(nil).List(nil, nil) or
// client.RemoteMirror(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) RemoteMirror(data map[string]any) GitlabEntity {
	return NewRemoteMirrorEntityFunc(sdk, data)
}


// Rpm returns a Rpm entity bound to this client.
// Idiomatic usage: client.Rpm(nil).List(nil, nil) or
// client.Rpm(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) Rpm(data map[string]any) GitlabEntity {
	return NewRpmEntityFunc(sdk, data)
}


// RpmPackage returns a RpmPackage entity bound to this client.
// Idiomatic usage: client.RpmPackage(nil).List(nil, nil) or
// client.RpmPackage(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) RpmPackage(data map[string]any) GitlabEntity {
	return NewRpmPackageEntityFunc(sdk, data)
}


// Rubygem returns a Rubygem entity bound to this client.
// Idiomatic usage: client.Rubygem(nil).List(nil, nil) or
// client.Rubygem(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) Rubygem(data map[string]any) GitlabEntity {
	return NewRubygemEntityFunc(sdk, data)
}


// RubygemPackage returns a RubygemPackage entity bound to this client.
// Idiomatic usage: client.RubygemPackage(nil).List(nil, nil) or
// client.RubygemPackage(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) RubygemPackage(data map[string]any) GitlabEntity {
	return NewRubygemPackageEntityFunc(sdk, data)
}


// Runner returns a Runner entity bound to this client.
// Idiomatic usage: client.Runner(nil).List(nil, nil) or
// client.Runner(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) Runner(data map[string]any) GitlabEntity {
	return NewRunnerEntityFunc(sdk, data)
}


// Search returns a Search entity bound to this client.
// Idiomatic usage: client.Search(nil).List(nil, nil) or
// client.Search(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) Search(data map[string]any) GitlabEntity {
	return NewSearchEntityFunc(sdk, data)
}


// SecureFile returns a SecureFile entity bound to this client.
// Idiomatic usage: client.SecureFile(nil).List(nil, nil) or
// client.SecureFile(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) SecureFile(data map[string]any) GitlabEntity {
	return NewSecureFileEntityFunc(sdk, data)
}


// Slack returns a Slack entity bound to this client.
// Idiomatic usage: client.Slack(nil).List(nil, nil) or
// client.Slack(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) Slack(data map[string]any) GitlabEntity {
	return NewSlackEntityFunc(sdk, data)
}


// Snippet returns a Snippet entity bound to this client.
// Idiomatic usage: client.Snippet(nil).List(nil, nil) or
// client.Snippet(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) Snippet(data map[string]any) GitlabEntity {
	return NewSnippetEntityFunc(sdk, data)
}


// Starrer returns a Starrer entity bound to this client.
// Idiomatic usage: client.Starrer(nil).List(nil, nil) or
// client.Starrer(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) Starrer(data map[string]any) GitlabEntity {
	return NewStarrerEntityFunc(sdk, data)
}


// SystemHook returns a SystemHook entity bound to this client.
// Idiomatic usage: client.SystemHook(nil).List(nil, nil) or
// client.SystemHook(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) SystemHook(data map[string]any) GitlabEntity {
	return NewSystemHookEntityFunc(sdk, data)
}


// Tag returns a Tag entity bound to this client.
// Idiomatic usage: client.Tag(nil).List(nil, nil) or
// client.Tag(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) Tag(data map[string]any) GitlabEntity {
	return NewTagEntityFunc(sdk, data)
}


// TerraformRegistry returns a TerraformRegistry entity bound to this client.
// Idiomatic usage: client.TerraformRegistry(nil).List(nil, nil) or
// client.TerraformRegistry(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) TerraformRegistry(data map[string]any) GitlabEntity {
	return NewTerraformRegistryEntityFunc(sdk, data)
}


// TerraformState returns a TerraformState entity bound to this client.
// Idiomatic usage: client.TerraformState(nil).List(nil, nil) or
// client.TerraformState(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) TerraformState(data map[string]any) GitlabEntity {
	return NewTerraformStateEntityFunc(sdk, data)
}


// TestReport returns a TestReport entity bound to this client.
// Idiomatic usage: client.TestReport(nil).List(nil, nil) or
// client.TestReport(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) TestReport(data map[string]any) GitlabEntity {
	return NewTestReportEntityFunc(sdk, data)
}


// TestReportSummary returns a TestReportSummary entity bound to this client.
// Idiomatic usage: client.TestReportSummary(nil).List(nil, nil) or
// client.TestReportSummary(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) TestReportSummary(data map[string]any) GitlabEntity {
	return NewTestReportSummaryEntityFunc(sdk, data)
}


// Topic returns a Topic entity bound to this client.
// Idiomatic usage: client.Topic(nil).List(nil, nil) or
// client.Topic(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) Topic(data map[string]any) GitlabEntity {
	return NewTopicEntityFunc(sdk, data)
}


// UnleashApi returns a UnleashApi entity bound to this client.
// Idiomatic usage: client.UnleashApi(nil).List(nil, nil) or
// client.UnleashApi(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) UnleashApi(data map[string]any) GitlabEntity {
	return NewUnleashApiEntityFunc(sdk, data)
}


// UsageData returns a UsageData entity bound to this client.
// Idiomatic usage: client.UsageData(nil).List(nil, nil) or
// client.UsageData(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) UsageData(data map[string]any) GitlabEntity {
	return NewUsageDataEntityFunc(sdk, data)
}


// User returns a User entity bound to this client.
// Idiomatic usage: client.User(nil).List(nil, nil) or
// client.User(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) User(data map[string]any) GitlabEntity {
	return NewUserEntityFunc(sdk, data)
}


// WebCommit returns a WebCommit entity bound to this client.
// Idiomatic usage: client.WebCommit(nil).List(nil, nil) or
// client.WebCommit(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) WebCommit(data map[string]any) GitlabEntity {
	return NewWebCommitEntityFunc(sdk, data)
}


// Wiki returns a Wiki entity bound to this client.
// Idiomatic usage: client.Wiki(nil).List(nil, nil) or
// client.Wiki(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GitlabSDK) Wiki(data map[string]any) GitlabEntity {
	return NewWikiEntityFunc(sdk, data)
}



func TestSDK(testopts map[string]any, sdkopts map[string]any) *GitlabSDK {
	if sdkopts == nil {
		sdkopts = map[string]any{}
	}
	sdkopts = vs.Clone(sdkopts).(map[string]any)

	if testopts == nil {
		testopts = map[string]any{}
	}
	testopts = vs.Clone(testopts).(map[string]any)
	testopts["active"] = true

	vs.SetPath(sdkopts, []any{"feature", "test"}, testopts)

	sdk := NewGitlabSDK(sdkopts)
	sdk.Mode = "test"

	return sdk
}
