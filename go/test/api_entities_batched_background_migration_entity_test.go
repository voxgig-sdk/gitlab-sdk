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

func TestApiEntitiesBatchedBackgroundMigrationEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.ApiEntitiesBatchedBackgroundMigration(nil)
		if ent == nil {
			t.Fatal("expected non-nil ApiEntitiesBatchedBackgroundMigrationEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"api_entities_batched_background_migration": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.ApiEntitiesBatchedBackgroundMigration(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.ApiEntitiesBatchedBackgroundMigration(nil).Stream("list", nil, nil) {
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
		setup := api_entities_batched_background_migrationBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"list", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "api_entities_batched_background_migration." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set GITLAB_TEST_API_ENTITIES_BATCHED_BACKGROUND_MIGRATION_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		apiEntitiesBatchedBackgroundMigrationRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.api_entities_batched_background_migration", setup.data)))
		var apiEntitiesBatchedBackgroundMigrationRef01Data map[string]any
		if len(apiEntitiesBatchedBackgroundMigrationRef01DataRaw) > 0 {
			apiEntitiesBatchedBackgroundMigrationRef01Data = core.ToMapAny(apiEntitiesBatchedBackgroundMigrationRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = apiEntitiesBatchedBackgroundMigrationRef01Data

		// LIST
		apiEntitiesBatchedBackgroundMigrationRef01Ent := client.ApiEntitiesBatchedBackgroundMigration(nil)
		apiEntitiesBatchedBackgroundMigrationRef01Match := map[string]any{}

		apiEntitiesBatchedBackgroundMigrationRef01ListResult, err := apiEntitiesBatchedBackgroundMigrationRef01Ent.List(apiEntitiesBatchedBackgroundMigrationRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		_, apiEntitiesBatchedBackgroundMigrationRef01ListOk := apiEntitiesBatchedBackgroundMigrationRef01ListResult.([]any)
		if !apiEntitiesBatchedBackgroundMigrationRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", apiEntitiesBatchedBackgroundMigrationRef01ListResult)
		}

		// UPDATE
		apiEntitiesBatchedBackgroundMigrationRef01DataUp0Up := map[string]any{
			"id": apiEntitiesBatchedBackgroundMigrationRef01Data["id"],
		}

		apiEntitiesBatchedBackgroundMigrationRef01MarkdefUp0Name := "column_name"
		apiEntitiesBatchedBackgroundMigrationRef01MarkdefUp0Value := fmt.Sprintf("Mark01-api_entities_batched_background_migration_ref01_%d", setup.now)
		apiEntitiesBatchedBackgroundMigrationRef01DataUp0Up[apiEntitiesBatchedBackgroundMigrationRef01MarkdefUp0Name] = apiEntitiesBatchedBackgroundMigrationRef01MarkdefUp0Value

		apiEntitiesBatchedBackgroundMigrationRef01ResdataUp0Result, err := apiEntitiesBatchedBackgroundMigrationRef01Ent.Update(apiEntitiesBatchedBackgroundMigrationRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		apiEntitiesBatchedBackgroundMigrationRef01ResdataUp0 := core.ToMapAny(apiEntitiesBatchedBackgroundMigrationRef01ResdataUp0Result)
		if apiEntitiesBatchedBackgroundMigrationRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if apiEntitiesBatchedBackgroundMigrationRef01ResdataUp0["id"] != apiEntitiesBatchedBackgroundMigrationRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if apiEntitiesBatchedBackgroundMigrationRef01ResdataUp0[apiEntitiesBatchedBackgroundMigrationRef01MarkdefUp0Name] != apiEntitiesBatchedBackgroundMigrationRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", apiEntitiesBatchedBackgroundMigrationRef01MarkdefUp0Name, apiEntitiesBatchedBackgroundMigrationRef01ResdataUp0[apiEntitiesBatchedBackgroundMigrationRef01MarkdefUp0Name])
		}

		// LOAD
		apiEntitiesBatchedBackgroundMigrationRef01MatchDt0 := map[string]any{
			"id": apiEntitiesBatchedBackgroundMigrationRef01Data["id"],
		}
		apiEntitiesBatchedBackgroundMigrationRef01DataDt0Loaded, err := apiEntitiesBatchedBackgroundMigrationRef01Ent.Load(apiEntitiesBatchedBackgroundMigrationRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		apiEntitiesBatchedBackgroundMigrationRef01DataDt0LoadResult := core.ToMapAny(apiEntitiesBatchedBackgroundMigrationRef01DataDt0Loaded)
		if apiEntitiesBatchedBackgroundMigrationRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if apiEntitiesBatchedBackgroundMigrationRef01DataDt0LoadResult["id"] != apiEntitiesBatchedBackgroundMigrationRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func api_entities_batched_background_migrationBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "api_entities_batched_background_migration", "ApiEntitiesBatchedBackgroundMigrationTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read api_entities_batched_background_migration test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse api_entities_batched_background_migration test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"api_entities_batched_background_migration01", "api_entities_batched_background_migration02", "api_entities_batched_background_migration03", "batched_background_migration01", "batched_background_migration02", "batched_background_migration03"},
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
	entidEnvRaw := os.Getenv("GITLAB_TEST_API_ENTITIES_BATCHED_BACKGROUND_MIGRATION_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"GITLAB_TEST_API_ENTITIES_BATCHED_BACKGROUND_MIGRATION_ENTID": idmap,
		"GITLAB_TEST_LIVE":      "FALSE",
		"GITLAB_TEST_EXPLAIN":   "FALSE",
		"GITLAB_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["GITLAB_TEST_API_ENTITIES_BATCHED_BACKGROUND_MIGRATION_ENTID"])
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
