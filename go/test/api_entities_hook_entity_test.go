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

func TestApiEntitiesHookEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.ApiEntitiesHook(nil)
		if ent == nil {
			t.Fatal("expected non-nil ApiEntitiesHookEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := api_entities_hookBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "api_entities_hook." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set GITLAB_TEST_API_ENTITIES_HOOK_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		apiEntitiesHookRef01Ent := client.ApiEntitiesHook(nil)
		apiEntitiesHookRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "api_entities_hook"}, setup.data), "api_entities_hook_ref01"))

		apiEntitiesHookRef01DataResult, err := apiEntitiesHookRef01Ent.Create(apiEntitiesHookRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		apiEntitiesHookRef01Data = core.ToMapAny(apiEntitiesHookRef01DataResult)
		if apiEntitiesHookRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if apiEntitiesHookRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		apiEntitiesHookRef01Match := map[string]any{}

		apiEntitiesHookRef01ListResult, err := apiEntitiesHookRef01Ent.List(apiEntitiesHookRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		apiEntitiesHookRef01List, apiEntitiesHookRef01ListOk := apiEntitiesHookRef01ListResult.([]any)
		if !apiEntitiesHookRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", apiEntitiesHookRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(apiEntitiesHookRef01List), map[string]any{"id": apiEntitiesHookRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		apiEntitiesHookRef01DataUp0Up := map[string]any{
			"id": apiEntitiesHookRef01Data["id"],
		}

		apiEntitiesHookRef01MarkdefUp0Name := "branch_filter_strategy"
		apiEntitiesHookRef01MarkdefUp0Value := fmt.Sprintf("Mark01-api_entities_hook_ref01_%d", setup.now)
		apiEntitiesHookRef01DataUp0Up[apiEntitiesHookRef01MarkdefUp0Name] = apiEntitiesHookRef01MarkdefUp0Value

		apiEntitiesHookRef01ResdataUp0Result, err := apiEntitiesHookRef01Ent.Update(apiEntitiesHookRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		apiEntitiesHookRef01ResdataUp0 := core.ToMapAny(apiEntitiesHookRef01ResdataUp0Result)
		if apiEntitiesHookRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if apiEntitiesHookRef01ResdataUp0["id"] != apiEntitiesHookRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if apiEntitiesHookRef01ResdataUp0[apiEntitiesHookRef01MarkdefUp0Name] != apiEntitiesHookRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", apiEntitiesHookRef01MarkdefUp0Name, apiEntitiesHookRef01ResdataUp0[apiEntitiesHookRef01MarkdefUp0Name])
		}

		// LOAD
		apiEntitiesHookRef01MatchDt0 := map[string]any{
			"id": apiEntitiesHookRef01Data["id"],
		}
		apiEntitiesHookRef01DataDt0Loaded, err := apiEntitiesHookRef01Ent.Load(apiEntitiesHookRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		apiEntitiesHookRef01DataDt0LoadResult := core.ToMapAny(apiEntitiesHookRef01DataDt0Loaded)
		if apiEntitiesHookRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if apiEntitiesHookRef01DataDt0LoadResult["id"] != apiEntitiesHookRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func api_entities_hookBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "api_entities_hook", "ApiEntitiesHookTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read api_entities_hook test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse api_entities_hook test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"api_entities_hook01", "api_entities_hook02", "api_entities_hook03"},
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
	entidEnvRaw := os.Getenv("GITLAB_TEST_API_ENTITIES_HOOK_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"GITLAB_TEST_API_ENTITIES_HOOK_ENTID": idmap,
		"GITLAB_TEST_LIVE":      "FALSE",
		"GITLAB_TEST_EXPLAIN":   "FALSE",
		"GITLAB_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["GITLAB_TEST_API_ENTITIES_HOOK_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
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
