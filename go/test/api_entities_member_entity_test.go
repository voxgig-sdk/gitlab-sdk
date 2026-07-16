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

func TestApiEntitiesMemberEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.ApiEntitiesMember(nil)
		if ent == nil {
			t.Fatal("expected non-nil ApiEntitiesMemberEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"api_entities_member": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.ApiEntitiesMember(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.ApiEntitiesMember(nil).Stream("list", nil, nil) {
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
		setup := api_entities_memberBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "api_entities_member." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set GITLAB_TEST_API_ENTITIES_MEMBER_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		apiEntitiesMemberRef01Ent := client.ApiEntitiesMember(nil)
		apiEntitiesMemberRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "api_entities_member"}, setup.data), "api_entities_member_ref01"))
		apiEntitiesMemberRef01Data["group_id"] = setup.idmap["group01"]
		apiEntitiesMemberRef01Data["project_id"] = setup.idmap["project01"]

		apiEntitiesMemberRef01DataResult, err := apiEntitiesMemberRef01Ent.Create(apiEntitiesMemberRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		apiEntitiesMemberRef01Data = core.ToMapAny(apiEntitiesMemberRef01DataResult)
		if apiEntitiesMemberRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if apiEntitiesMemberRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		apiEntitiesMemberRef01Match := map[string]any{
			"group_id": setup.idmap["group01"],
		}

		apiEntitiesMemberRef01ListResult, err := apiEntitiesMemberRef01Ent.List(apiEntitiesMemberRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		apiEntitiesMemberRef01List, apiEntitiesMemberRef01ListOk := apiEntitiesMemberRef01ListResult.([]any)
		if !apiEntitiesMemberRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", apiEntitiesMemberRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(apiEntitiesMemberRef01List), map[string]any{"id": apiEntitiesMemberRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		apiEntitiesMemberRef01DataUp0Up := map[string]any{
			"id": apiEntitiesMemberRef01Data["id"],
			"project_id": setup.idmap["project_id"],
		}

		apiEntitiesMemberRef01MarkdefUp0Name := "access_level"
		apiEntitiesMemberRef01MarkdefUp0Value := fmt.Sprintf("Mark01-api_entities_member_ref01_%d", setup.now)
		apiEntitiesMemberRef01DataUp0Up[apiEntitiesMemberRef01MarkdefUp0Name] = apiEntitiesMemberRef01MarkdefUp0Value

		apiEntitiesMemberRef01ResdataUp0Result, err := apiEntitiesMemberRef01Ent.Update(apiEntitiesMemberRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		apiEntitiesMemberRef01ResdataUp0 := core.ToMapAny(apiEntitiesMemberRef01ResdataUp0Result)
		if apiEntitiesMemberRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if apiEntitiesMemberRef01ResdataUp0["id"] != apiEntitiesMemberRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if apiEntitiesMemberRef01ResdataUp0[apiEntitiesMemberRef01MarkdefUp0Name] != apiEntitiesMemberRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", apiEntitiesMemberRef01MarkdefUp0Name, apiEntitiesMemberRef01ResdataUp0[apiEntitiesMemberRef01MarkdefUp0Name])
		}

		// LOAD
		apiEntitiesMemberRef01MatchDt0 := map[string]any{
			"id": apiEntitiesMemberRef01Data["id"],
		}
		apiEntitiesMemberRef01DataDt0Loaded, err := apiEntitiesMemberRef01Ent.Load(apiEntitiesMemberRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		apiEntitiesMemberRef01DataDt0LoadResult := core.ToMapAny(apiEntitiesMemberRef01DataDt0Loaded)
		if apiEntitiesMemberRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if apiEntitiesMemberRef01DataDt0LoadResult["id"] != apiEntitiesMemberRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		apiEntitiesMemberRef01MatchRm0 := map[string]any{
			"id": apiEntitiesMemberRef01Data["id"],
		}
		_, err = apiEntitiesMemberRef01Ent.Remove(apiEntitiesMemberRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		apiEntitiesMemberRef01MatchRt0 := map[string]any{
			"group_id": setup.idmap["group01"],
		}

		apiEntitiesMemberRef01ListRt0Result, err := apiEntitiesMemberRef01Ent.List(apiEntitiesMemberRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		apiEntitiesMemberRef01ListRt0, apiEntitiesMemberRef01ListRt0Ok := apiEntitiesMemberRef01ListRt0Result.([]any)
		if !apiEntitiesMemberRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", apiEntitiesMemberRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(apiEntitiesMemberRef01ListRt0), map[string]any{"id": apiEntitiesMemberRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func api_entities_memberBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "api_entities_member", "ApiEntitiesMemberTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read api_entities_member test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse api_entities_member test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"api_entities_member01", "api_entities_member02", "api_entities_member03", "group01", "group02", "group03", "project01", "project02", "project03", "all01", "all02", "all03", "member01", "member02", "member03"},
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
	entidEnvRaw := os.Getenv("GITLAB_TEST_API_ENTITIES_MEMBER_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"GITLAB_TEST_API_ENTITIES_MEMBER_ENTID": idmap,
		"GITLAB_TEST_LIVE":      "FALSE",
		"GITLAB_TEST_EXPLAIN":   "FALSE",
		"GITLAB_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["GITLAB_TEST_API_ENTITIES_MEMBER_ENTID"])
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
