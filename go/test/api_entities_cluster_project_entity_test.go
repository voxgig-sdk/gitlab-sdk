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

func TestApiEntitiesClusterProjectEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.ApiEntitiesClusterProject(nil)
		if ent == nil {
			t.Fatal("expected non-nil ApiEntitiesClusterProjectEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := api_entities_cluster_projectBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "api_entities_cluster_project." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set GITLAB_TEST_API_ENTITIES_CLUSTER_PROJECT_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		apiEntitiesClusterProjectRef01Ent := client.ApiEntitiesClusterProject(nil)
		apiEntitiesClusterProjectRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "api_entities_cluster_project"}, setup.data), "api_entities_cluster_project_ref01"))
		apiEntitiesClusterProjectRef01Data["project_id"] = setup.idmap["project01"]

		apiEntitiesClusterProjectRef01DataResult, err := apiEntitiesClusterProjectRef01Ent.Create(apiEntitiesClusterProjectRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		apiEntitiesClusterProjectRef01Data = core.ToMapAny(apiEntitiesClusterProjectRef01DataResult)
		if apiEntitiesClusterProjectRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if apiEntitiesClusterProjectRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// UPDATE
		apiEntitiesClusterProjectRef01DataUp0Up := map[string]any{
			"id": apiEntitiesClusterProjectRef01Data["id"],
			"project_id": setup.idmap["project_id"],
		}

		apiEntitiesClusterProjectRef01MarkdefUp0Name := "cluster_type"
		apiEntitiesClusterProjectRef01MarkdefUp0Value := fmt.Sprintf("Mark01-api_entities_cluster_project_ref01_%d", setup.now)
		apiEntitiesClusterProjectRef01DataUp0Up[apiEntitiesClusterProjectRef01MarkdefUp0Name] = apiEntitiesClusterProjectRef01MarkdefUp0Value

		apiEntitiesClusterProjectRef01ResdataUp0Result, err := apiEntitiesClusterProjectRef01Ent.Update(apiEntitiesClusterProjectRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		apiEntitiesClusterProjectRef01ResdataUp0 := core.ToMapAny(apiEntitiesClusterProjectRef01ResdataUp0Result)
		if apiEntitiesClusterProjectRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if apiEntitiesClusterProjectRef01ResdataUp0["id"] != apiEntitiesClusterProjectRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if apiEntitiesClusterProjectRef01ResdataUp0[apiEntitiesClusterProjectRef01MarkdefUp0Name] != apiEntitiesClusterProjectRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", apiEntitiesClusterProjectRef01MarkdefUp0Name, apiEntitiesClusterProjectRef01ResdataUp0[apiEntitiesClusterProjectRef01MarkdefUp0Name])
		}

		// LOAD
		apiEntitiesClusterProjectRef01MatchDt0 := map[string]any{
			"id": apiEntitiesClusterProjectRef01Data["id"],
		}
		apiEntitiesClusterProjectRef01DataDt0Loaded, err := apiEntitiesClusterProjectRef01Ent.Load(apiEntitiesClusterProjectRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		apiEntitiesClusterProjectRef01DataDt0LoadResult := core.ToMapAny(apiEntitiesClusterProjectRef01DataDt0Loaded)
		if apiEntitiesClusterProjectRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if apiEntitiesClusterProjectRef01DataDt0LoadResult["id"] != apiEntitiesClusterProjectRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func api_entities_cluster_projectBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "api_entities_cluster_project", "ApiEntitiesClusterProjectTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read api_entities_cluster_project test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse api_entities_cluster_project test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"api_entities_cluster_project01", "api_entities_cluster_project02", "api_entities_cluster_project03", "project01", "project02", "project03", "cluster01", "cluster02", "cluster03"},
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
	entidEnvRaw := os.Getenv("GITLAB_TEST_API_ENTITIES_CLUSTER_PROJECT_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"GITLAB_TEST_API_ENTITIES_CLUSTER_PROJECT_ENTID": idmap,
		"GITLAB_TEST_LIVE":      "FALSE",
		"GITLAB_TEST_EXPLAIN":   "FALSE",
		"GITLAB_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["GITLAB_TEST_API_ENTITIES_CLUSTER_PROJECT_ENTID"])
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
