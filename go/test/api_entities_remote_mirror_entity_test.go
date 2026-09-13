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

func TestApiEntitiesRemoteMirrorEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.ApiEntitiesRemoteMirror(nil)
		if ent == nil {
			t.Fatal("expected non-nil ApiEntitiesRemoteMirrorEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"api_entities_remote_mirror": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.ApiEntitiesRemoteMirror(nil).Stream("list", nil, nil) {
			seen = append(seen, item)
		}
		if len(seen) != 3 {
			t.Fatalf("expected 3 streamed items, got %d", len(seen))
		}

		// Inbound: streaming active -> yields each item from the feature iterator.
		hasStreaming := false
		if fm, ok := core.SharedConfig()["feature"].(map[string]any); ok {
			_, hasStreaming = fm["streaming"]
		}
		if hasStreaming {
			streamSdk := sdk.TestSDK(seed, map[string]any{
				"feature": map[string]any{"streaming": map[string]any{"active": true}},
			})
			var got []any
			for item := range streamSdk.ApiEntitiesRemoteMirror(nil).Stream("list", nil, nil) {
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
		setup := api_entities_remote_mirrorBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "api_entities_remote_mirror." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set GITLAB_TEST_API_ENTITIES_REMOTE_MIRROR_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		apiEntitiesRemoteMirrorRef01Ent := client.ApiEntitiesRemoteMirror(nil)
		apiEntitiesRemoteMirrorRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "api_entities_remote_mirror"}), "api_entities_remote_mirror_ref01"))
		apiEntitiesRemoteMirrorRef01Data["project_id"] = setup.idmap["project01"]
		apiEntitiesRemoteMirrorRef01Data["remote_mirror_id"] = setup.idmap["remote_mirror01"]

		apiEntitiesRemoteMirrorRef01DataResult, err := apiEntitiesRemoteMirrorRef01Ent.Create(apiEntitiesRemoteMirrorRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		apiEntitiesRemoteMirrorRef01Data = core.ToMapAny(entityData(apiEntitiesRemoteMirrorRef01DataResult))
		if apiEntitiesRemoteMirrorRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if apiEntitiesRemoteMirrorRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		apiEntitiesRemoteMirrorRef01Match := map[string]any{
			"project_id": setup.idmap["project01"],
		}

		apiEntitiesRemoteMirrorRef01ListResult, err := apiEntitiesRemoteMirrorRef01Ent.List(apiEntitiesRemoteMirrorRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		apiEntitiesRemoteMirrorRef01List, apiEntitiesRemoteMirrorRef01ListOk := apiEntitiesRemoteMirrorRef01ListResult.([]any)
		if !apiEntitiesRemoteMirrorRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", apiEntitiesRemoteMirrorRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(apiEntitiesRemoteMirrorRef01List), map[string]any{"id": apiEntitiesRemoteMirrorRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		apiEntitiesRemoteMirrorRef01DataUp0Up := map[string]any{
			"id": apiEntitiesRemoteMirrorRef01Data["id"],
			"project_id": setup.idmap["project_id"],
		}

		apiEntitiesRemoteMirrorRef01MarkdefUp0Name := "auth_method"
		apiEntitiesRemoteMirrorRef01MarkdefUp0Value := fmt.Sprintf("Mark01-api_entities_remote_mirror_ref01_%d", setup.now)
		apiEntitiesRemoteMirrorRef01DataUp0Up[apiEntitiesRemoteMirrorRef01MarkdefUp0Name] = apiEntitiesRemoteMirrorRef01MarkdefUp0Value

		apiEntitiesRemoteMirrorRef01ResdataUp0Result, err := apiEntitiesRemoteMirrorRef01Ent.Update(apiEntitiesRemoteMirrorRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		apiEntitiesRemoteMirrorRef01ResdataUp0 := core.ToMapAny(entityData(apiEntitiesRemoteMirrorRef01ResdataUp0Result))
		if apiEntitiesRemoteMirrorRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if apiEntitiesRemoteMirrorRef01ResdataUp0["id"] != apiEntitiesRemoteMirrorRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if apiEntitiesRemoteMirrorRef01ResdataUp0[apiEntitiesRemoteMirrorRef01MarkdefUp0Name] != apiEntitiesRemoteMirrorRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", apiEntitiesRemoteMirrorRef01MarkdefUp0Name, apiEntitiesRemoteMirrorRef01ResdataUp0[apiEntitiesRemoteMirrorRef01MarkdefUp0Name])
		}

		// LOAD
		apiEntitiesRemoteMirrorRef01MatchDt0 := map[string]any{
			"id": apiEntitiesRemoteMirrorRef01Data["id"],
		}
		apiEntitiesRemoteMirrorRef01DataDt0Loaded, err := apiEntitiesRemoteMirrorRef01Ent.Load(apiEntitiesRemoteMirrorRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		apiEntitiesRemoteMirrorRef01DataDt0LoadResult := core.ToMapAny(entityData(apiEntitiesRemoteMirrorRef01DataDt0Loaded))
		if apiEntitiesRemoteMirrorRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if apiEntitiesRemoteMirrorRef01DataDt0LoadResult["id"] != apiEntitiesRemoteMirrorRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func api_entities_remote_mirrorBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "api_entities_remote_mirror", "ApiEntitiesRemoteMirrorTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read api_entities_remote_mirror test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse api_entities_remote_mirror test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"api_entities_remote_mirror01", "api_entities_remote_mirror02", "api_entities_remote_mirror03", "project01", "project02", "project03", "remote_mirror01", "remote_mirror02", "remote_mirror03"},
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
	entidEnvRaw := os.Getenv("GITLAB_TEST_API_ENTITIES_REMOTE_MIRROR_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"GITLAB_TEST_API_ENTITIES_REMOTE_MIRROR_ENTID": idmap,
		"GITLAB_TEST_LIVE":      "FALSE",
		"GITLAB_TEST_EXPLAIN":   "FALSE",
		"GITLAB_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["GITLAB_TEST_API_ENTITIES_REMOTE_MIRROR_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}
	// Add project_id alias for update test.
	if idmapResolved["project_id"] == nil {
		idmapResolved["project_id"] = idmapResolved["project01"]
	}

	if env["GITLAB_TEST_LIVE"] == "TRUE" {
		// An empty map, not a nil one: Merge returns nil when its last entry
		// is nil, and BasicSetup is normally called with no extras - so a
		// bare nil silently discarded the apikey and server values below.
		extraOpts := extra
		if extraOpts == nil {
			extraOpts = map[string]any{}
		}

		mergedOpts := vs.Merge([]any{
			// liveClientOptions() FIRST, so the generated fields below win:
			// sdk-test-control.json's test.client.options adds to the live
			// client, it does not redirect it.
			liveClientOptions(),
			map[string]any{
				"apikey": env["GITLAB_APIKEY"],
			},
			extraOpts,
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
