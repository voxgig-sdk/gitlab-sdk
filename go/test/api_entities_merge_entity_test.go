package sdktest

import (
	"encoding/json"
	"fmt"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/gitlab-sdk/go"
	"github.com/voxgig-sdk/gitlab-sdk/go/core"

	vs "github.com/voxgig-sdk/gitlab-sdk/go/utility/struct"
)

func TestApiEntitiesMergeEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.ApiEntitiesMerge(nil)
		if ent == nil {
			t.Fatal("expected non-nil ApiEntitiesMergeEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := api_entities_mergeBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "api_entities_merge." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set GITLAB_TEST_API_ENTITIES_MERGE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		apiEntitiesMergeRef01Ent := client.ApiEntitiesMerge(nil)
		apiEntitiesMergeRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "api_entities_merge"}, setup.data), "api_entities_merge_ref01"))
		apiEntitiesMergeRef01Data["project_id"] = setup.idmap["project01"]

		apiEntitiesMergeRef01DataResult, err := apiEntitiesMergeRef01Ent.Create(apiEntitiesMergeRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		apiEntitiesMergeRef01Data = core.ToMapAny(apiEntitiesMergeRef01DataResult)
		if apiEntitiesMergeRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if apiEntitiesMergeRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// UPDATE
		apiEntitiesMergeRef01DataUp0Up := map[string]any{
			"id": apiEntitiesMergeRef01Data["id"],
			"project_id": setup.idmap["project_id"],
		}

		apiEntitiesMergeRef01MarkdefUp0Name := "approvals_before_merge"
		apiEntitiesMergeRef01MarkdefUp0Value := fmt.Sprintf("Mark01-api_entities_merge_ref01_%d", setup.now)
		apiEntitiesMergeRef01DataUp0Up[apiEntitiesMergeRef01MarkdefUp0Name] = apiEntitiesMergeRef01MarkdefUp0Value

		apiEntitiesMergeRef01ResdataUp0Result, err := apiEntitiesMergeRef01Ent.Update(apiEntitiesMergeRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		apiEntitiesMergeRef01ResdataUp0 := core.ToMapAny(apiEntitiesMergeRef01ResdataUp0Result)
		if apiEntitiesMergeRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if apiEntitiesMergeRef01ResdataUp0["id"] != apiEntitiesMergeRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if apiEntitiesMergeRef01ResdataUp0[apiEntitiesMergeRef01MarkdefUp0Name] != apiEntitiesMergeRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", apiEntitiesMergeRef01MarkdefUp0Name, apiEntitiesMergeRef01ResdataUp0[apiEntitiesMergeRef01MarkdefUp0Name])
		}

		// LOAD
		apiEntitiesMergeRef01MatchDt0 := map[string]any{
			"id": apiEntitiesMergeRef01Data["id"],
		}
		apiEntitiesMergeRef01DataDt0Loaded, err := apiEntitiesMergeRef01Ent.Load(apiEntitiesMergeRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		apiEntitiesMergeRef01DataDt0LoadResult := core.ToMapAny(apiEntitiesMergeRef01DataDt0Loaded)
		if apiEntitiesMergeRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if apiEntitiesMergeRef01DataDt0LoadResult["id"] != apiEntitiesMergeRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func api_entities_mergeBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "api_entities_merge", "ApiEntitiesMergeTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read api_entities_merge test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse api_entities_merge test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"api_entities_merge01", "api_entities_merge02", "api_entities_merge03", "project01", "project02", "project03", "merge_request01", "merge_request02", "merge_request03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("GITLAB_TEST_API_ENTITIES_MERGE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"GITLAB_TEST_API_ENTITIES_MERGE_ENTID": idmap,
		"GITLAB_TEST_LIVE":      "FALSE",
		"GITLAB_TEST_EXPLAIN":   "FALSE",
		"GITLAB_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["GITLAB_TEST_API_ENTITIES_MERGE_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}
	// Add project_id alias for update test.
	if idmapResolved["project_id"] == nil {
		idmapResolved["project_id"] = idmapResolved["project01"]
	}

	if env["GITLAB_TEST_LIVE"] == "TRUE" {
		mergedOpts := vs.Merge([]any{
			map[string]any{
				"apikey": env["GITLAB_APIKEY"],
			},
			extra,
		})
		client = sdk.NewGitlabSDK(core.ToMapAny(mergedOpts))
	}

	live := env["GITLAB_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["GITLAB_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
