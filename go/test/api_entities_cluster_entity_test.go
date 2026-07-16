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

func TestApiEntitiesClusterEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.ApiEntitiesCluster(nil)
		if ent == nil {
			t.Fatal("expected non-nil ApiEntitiesClusterEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"api_entities_cluster": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.ApiEntitiesCluster(nil).Stream("list", nil, nil) {
			seen = append(seen, item)
		}
		if len(seen) != 3 {
			t.Fatalf("expected 3 streamed items, got %d", len(seen))
		}

		// Inbound: streaming active -> yields each item from the feature iterator.
		hasStreaming := false
		if fm, ok := core.MakeConfig()["feature"].(map[string]any); ok {
			_, hasStreaming = fm["streaming"]
		}
		if hasStreaming {
			streamSdk := sdk.TestSDK(seed, map[string]any{
				"feature": map[string]any{"streaming": map[string]any{"active": true}},
			})
			var got []any
			for item := range streamSdk.ApiEntitiesCluster(nil).Stream("list", nil, nil) {
				if sub, ok := item.([]any); ok {
					got = append(got, sub...)
				} else {
					got = append(got, item)
				}
			}
			if len(got) != 3 {
				t.Fatalf("expected 3 items via streaming feature, got %d", len(got))
			}
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := api_entities_clusterBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "api_entities_cluster." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set GITLAB_TEST_API_ENTITIES_CLUSTER_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		apiEntitiesClusterRef01Ent := client.ApiEntitiesCluster(nil)
		apiEntitiesClusterRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "api_entities_cluster"}, setup.data), "api_entities_cluster_ref01"))
		apiEntitiesClusterRef01Data["group_id"] = setup.idmap["group01"]
		apiEntitiesClusterRef01Data["project_id"] = setup.idmap["project01"]

		apiEntitiesClusterRef01DataResult, err := apiEntitiesClusterRef01Ent.Create(apiEntitiesClusterRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		apiEntitiesClusterRef01Data = core.ToMapAny(apiEntitiesClusterRef01DataResult)
		if apiEntitiesClusterRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if apiEntitiesClusterRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		apiEntitiesClusterRef01Match := map[string]any{}

		apiEntitiesClusterRef01ListResult, err := apiEntitiesClusterRef01Ent.List(apiEntitiesClusterRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		apiEntitiesClusterRef01List, apiEntitiesClusterRef01ListOk := apiEntitiesClusterRef01ListResult.([]any)
		if !apiEntitiesClusterRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", apiEntitiesClusterRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(apiEntitiesClusterRef01List), map[string]any{"id": apiEntitiesClusterRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		apiEntitiesClusterRef01DataUp0Up := map[string]any{
			"id": apiEntitiesClusterRef01Data["id"],
		}

		apiEntitiesClusterRef01MarkdefUp0Name := "cluster_type"
		apiEntitiesClusterRef01MarkdefUp0Value := fmt.Sprintf("Mark01-api_entities_cluster_ref01_%d", setup.now)
		apiEntitiesClusterRef01DataUp0Up[apiEntitiesClusterRef01MarkdefUp0Name] = apiEntitiesClusterRef01MarkdefUp0Value

		apiEntitiesClusterRef01ResdataUp0Result, err := apiEntitiesClusterRef01Ent.Update(apiEntitiesClusterRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		apiEntitiesClusterRef01ResdataUp0 := core.ToMapAny(apiEntitiesClusterRef01ResdataUp0Result)
		if apiEntitiesClusterRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if apiEntitiesClusterRef01ResdataUp0["id"] != apiEntitiesClusterRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if apiEntitiesClusterRef01ResdataUp0[apiEntitiesClusterRef01MarkdefUp0Name] != apiEntitiesClusterRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", apiEntitiesClusterRef01MarkdefUp0Name, apiEntitiesClusterRef01ResdataUp0[apiEntitiesClusterRef01MarkdefUp0Name])
		}

		// LOAD
		apiEntitiesClusterRef01MatchDt0 := map[string]any{
			"id": apiEntitiesClusterRef01Data["id"],
		}
		apiEntitiesClusterRef01DataDt0Loaded, err := apiEntitiesClusterRef01Ent.Load(apiEntitiesClusterRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		apiEntitiesClusterRef01DataDt0LoadResult := core.ToMapAny(apiEntitiesClusterRef01DataDt0Loaded)
		if apiEntitiesClusterRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if apiEntitiesClusterRef01DataDt0LoadResult["id"] != apiEntitiesClusterRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func api_entities_clusterBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "api_entities_cluster", "ApiEntitiesClusterTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read api_entities_cluster test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse api_entities_cluster test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"api_entities_cluster01", "api_entities_cluster02", "api_entities_cluster03", "group01", "group02", "group03", "project01", "project02", "project03"},
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
	entidEnvRaw := os.Getenv("GITLAB_TEST_API_ENTITIES_CLUSTER_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"GITLAB_TEST_API_ENTITIES_CLUSTER_ENTID": idmap,
		"GITLAB_TEST_LIVE":      "FALSE",
		"GITLAB_TEST_EXPLAIN":   "FALSE",
		"GITLAB_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["GITLAB_TEST_API_ENTITIES_CLUSTER_ENTID"])
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
