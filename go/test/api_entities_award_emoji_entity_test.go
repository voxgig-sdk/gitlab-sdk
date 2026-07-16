package sdktest

import (
	"encoding/json"
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

func TestApiEntitiesAwardEmojiEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.ApiEntitiesAwardEmoji(nil)
		if ent == nil {
			t.Fatal("expected non-nil ApiEntitiesAwardEmojiEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"api_entities_award_emoji": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.ApiEntitiesAwardEmoji(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.ApiEntitiesAwardEmoji(nil).Stream("list", nil, nil) {
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
		setup := api_entities_award_emojiBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "api_entities_award_emoji." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set GITLAB_TEST_API_ENTITIES_AWARD_EMOJI_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		apiEntitiesAwardEmojiRef01Ent := client.ApiEntitiesAwardEmoji(nil)
		apiEntitiesAwardEmojiRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "api_entities_award_emoji"}, setup.data), "api_entities_award_emoji_ref01"))
		apiEntitiesAwardEmojiRef01Data["epic_id"] = setup.idmap["epic01"]
		apiEntitiesAwardEmojiRef01Data["group_id"] = setup.idmap["group01"]
		apiEntitiesAwardEmojiRef01Data["issue_id"] = setup.idmap["issue01"]
		apiEntitiesAwardEmojiRef01Data["merge_request_id"] = setup.idmap["merge_request01"]
		apiEntitiesAwardEmojiRef01Data["note_id"] = setup.idmap["note01"]
		apiEntitiesAwardEmojiRef01Data["project_id"] = setup.idmap["project01"]
		apiEntitiesAwardEmojiRef01Data["snippet_id"] = setup.idmap["snippet01"]

		apiEntitiesAwardEmojiRef01DataResult, err := apiEntitiesAwardEmojiRef01Ent.Create(apiEntitiesAwardEmojiRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		apiEntitiesAwardEmojiRef01Data = core.ToMapAny(apiEntitiesAwardEmojiRef01DataResult)
		if apiEntitiesAwardEmojiRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if apiEntitiesAwardEmojiRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		apiEntitiesAwardEmojiRef01Match := map[string]any{
			"project_id": setup.idmap["project01"],
			"snippet_id": setup.idmap["snippet01"],
		}

		apiEntitiesAwardEmojiRef01ListResult, err := apiEntitiesAwardEmojiRef01Ent.List(apiEntitiesAwardEmojiRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		apiEntitiesAwardEmojiRef01List, apiEntitiesAwardEmojiRef01ListOk := apiEntitiesAwardEmojiRef01ListResult.([]any)
		if !apiEntitiesAwardEmojiRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", apiEntitiesAwardEmojiRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(apiEntitiesAwardEmojiRef01List), map[string]any{"id": apiEntitiesAwardEmojiRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// LOAD
		apiEntitiesAwardEmojiRef01MatchDt0 := map[string]any{
			"id": apiEntitiesAwardEmojiRef01Data["id"],
		}
		apiEntitiesAwardEmojiRef01DataDt0Loaded, err := apiEntitiesAwardEmojiRef01Ent.Load(apiEntitiesAwardEmojiRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		apiEntitiesAwardEmojiRef01DataDt0LoadResult := core.ToMapAny(apiEntitiesAwardEmojiRef01DataDt0Loaded)
		if apiEntitiesAwardEmojiRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if apiEntitiesAwardEmojiRef01DataDt0LoadResult["id"] != apiEntitiesAwardEmojiRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func api_entities_award_emojiBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "api_entities_award_emoji", "ApiEntitiesAwardEmojiTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read api_entities_award_emoji test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse api_entities_award_emoji test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"api_entities_award_emoji01", "api_entities_award_emoji02", "api_entities_award_emoji03", "group01", "group02", "group03", "epic01", "epic02", "epic03", "project01", "project02", "project03", "issue01", "issue02", "issue03", "merge_request01", "merge_request02", "merge_request03", "snippet01", "snippet02", "snippet03", "note01", "note02", "note03"},
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
	entidEnvRaw := os.Getenv("GITLAB_TEST_API_ENTITIES_AWARD_EMOJI_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"GITLAB_TEST_API_ENTITIES_AWARD_EMOJI_ENTID": idmap,
		"GITLAB_TEST_LIVE":      "FALSE",
		"GITLAB_TEST_EXPLAIN":   "FALSE",
		"GITLAB_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["GITLAB_TEST_API_ENTITIES_AWARD_EMOJI_ENTID"])
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
