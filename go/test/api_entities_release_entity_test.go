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

func TestApiEntitiesReleaseEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.ApiEntitiesRelease(nil)
		if ent == nil {
			t.Fatal("expected non-nil ApiEntitiesReleaseEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"api_entities_release": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.ApiEntitiesRelease(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.ApiEntitiesRelease(nil).Stream("list", nil, nil) {
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
		setup := api_entities_releaseBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "api_entities_release." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set GITLAB_TEST_API_ENTITIES_RELEASE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		apiEntitiesReleaseRef01Ent := client.ApiEntitiesRelease(nil)
		apiEntitiesReleaseRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "api_entities_release"}, setup.data), "api_entities_release_ref01"))
		apiEntitiesReleaseRef01Data["group_id"] = setup.idmap["group01"]
		apiEntitiesReleaseRef01Data["project_id"] = setup.idmap["project01"]
		apiEntitiesReleaseRef01Data["tag_name"] = setup.idmap["tag_name01"]

		apiEntitiesReleaseRef01DataResult, err := apiEntitiesReleaseRef01Ent.Create(apiEntitiesReleaseRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		apiEntitiesReleaseRef01Data = core.ToMapAny(apiEntitiesReleaseRef01DataResult)
		if apiEntitiesReleaseRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

		// LIST
		apiEntitiesReleaseRef01Match := map[string]any{
			"group_id": setup.idmap["group01"],
		}

		apiEntitiesReleaseRef01ListResult, err := apiEntitiesReleaseRef01Ent.List(apiEntitiesReleaseRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		apiEntitiesReleaseRef01List, apiEntitiesReleaseRef01ListOk := apiEntitiesReleaseRef01ListResult.([]any)
		if !apiEntitiesReleaseRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", apiEntitiesReleaseRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(apiEntitiesReleaseRef01List), map[string]any{"id": apiEntitiesReleaseRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		apiEntitiesReleaseRef01DataUp0Up := map[string]any{
			"project_id": setup.idmap["project_id"],
		}

		apiEntitiesReleaseRef01MarkdefUp0Name := "commit_path"
		apiEntitiesReleaseRef01MarkdefUp0Value := fmt.Sprintf("Mark01-api_entities_release_ref01_%d", setup.now)
		apiEntitiesReleaseRef01DataUp0Up[apiEntitiesReleaseRef01MarkdefUp0Name] = apiEntitiesReleaseRef01MarkdefUp0Value

		apiEntitiesReleaseRef01ResdataUp0Result, err := apiEntitiesReleaseRef01Ent.Update(apiEntitiesReleaseRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		apiEntitiesReleaseRef01ResdataUp0 := core.ToMapAny(apiEntitiesReleaseRef01ResdataUp0Result)
		if apiEntitiesReleaseRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if apiEntitiesReleaseRef01ResdataUp0[apiEntitiesReleaseRef01MarkdefUp0Name] != apiEntitiesReleaseRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", apiEntitiesReleaseRef01MarkdefUp0Name, apiEntitiesReleaseRef01ResdataUp0[apiEntitiesReleaseRef01MarkdefUp0Name])
		}

		// LOAD
		apiEntitiesReleaseRef01MatchDt0 := map[string]any{}
		apiEntitiesReleaseRef01DataDt0Loaded, err := apiEntitiesReleaseRef01Ent.Load(apiEntitiesReleaseRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if apiEntitiesReleaseRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func api_entities_releaseBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "api_entities_release", "ApiEntitiesReleaseTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read api_entities_release test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse api_entities_release test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"api_entities_release01", "api_entities_release02", "api_entities_release03", "group01", "group02", "group03", "project01", "project02", "project03", "release01", "release02", "release03", "tag_name01"},
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
	entidEnvRaw := os.Getenv("GITLAB_TEST_API_ENTITIES_RELEASE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"GITLAB_TEST_API_ENTITIES_RELEASE_ENTID": idmap,
		"GITLAB_TEST_LIVE":      "FALSE",
		"GITLAB_TEST_EXPLAIN":   "FALSE",
		"GITLAB_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["GITLAB_TEST_API_ENTITIES_RELEASE_ENTID"])
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
