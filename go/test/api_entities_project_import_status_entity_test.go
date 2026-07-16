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

func TestApiEntitiesProjectImportStatusEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.ApiEntitiesProjectImportStatus(nil)
		if ent == nil {
			t.Fatal("expected non-nil ApiEntitiesProjectImportStatusEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"api_entities_project_import_status": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.ApiEntitiesProjectImportStatus(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.ApiEntitiesProjectImportStatus(nil).Stream("list", nil, nil) {
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
		setup := api_entities_project_import_statusBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "api_entities_project_import_status." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set GITLAB_TEST_API_ENTITIES_PROJECT_IMPORT_STATUS_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		apiEntitiesProjectImportStatusRef01Ent := client.ApiEntitiesProjectImportStatus(nil)
		apiEntitiesProjectImportStatusRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "api_entities_project_import_status"}, setup.data), "api_entities_project_import_status_ref01"))
		apiEntitiesProjectImportStatusRef01Data["project_id"] = setup.idmap["project01"]

		apiEntitiesProjectImportStatusRef01DataResult, err := apiEntitiesProjectImportStatusRef01Ent.Create(apiEntitiesProjectImportStatusRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		apiEntitiesProjectImportStatusRef01Data = core.ToMapAny(apiEntitiesProjectImportStatusRef01DataResult)
		if apiEntitiesProjectImportStatusRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if apiEntitiesProjectImportStatusRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		apiEntitiesProjectImportStatusRef01Match := map[string]any{
			"project_id": setup.idmap["project01"],
		}

		apiEntitiesProjectImportStatusRef01ListResult, err := apiEntitiesProjectImportStatusRef01Ent.List(apiEntitiesProjectImportStatusRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		apiEntitiesProjectImportStatusRef01List, apiEntitiesProjectImportStatusRef01ListOk := apiEntitiesProjectImportStatusRef01ListResult.([]any)
		if !apiEntitiesProjectImportStatusRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", apiEntitiesProjectImportStatusRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(apiEntitiesProjectImportStatusRef01List), map[string]any{"id": apiEntitiesProjectImportStatusRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

	})
}

func api_entities_project_import_statusBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "api_entities_project_import_status", "ApiEntitiesProjectImportStatusTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read api_entities_project_import_status test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse api_entities_project_import_status test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"api_entities_project_import_status01", "api_entities_project_import_status02", "api_entities_project_import_status03", "project01", "project02", "project03"},
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
	entidEnvRaw := os.Getenv("GITLAB_TEST_API_ENTITIES_PROJECT_IMPORT_STATUS_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"GITLAB_TEST_API_ENTITIES_PROJECT_IMPORT_STATUS_ENTID": idmap,
		"GITLAB_TEST_LIVE":      "FALSE",
		"GITLAB_TEST_EXPLAIN":   "FALSE",
		"GITLAB_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["GITLAB_TEST_API_ENTITIES_PROJECT_IMPORT_STATUS_ENTID"])
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
