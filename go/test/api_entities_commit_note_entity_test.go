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

func TestApiEntitiesCommitNoteEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.ApiEntitiesCommitNote(nil)
		if ent == nil {
			t.Fatal("expected non-nil ApiEntitiesCommitNoteEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := api_entities_commit_noteBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "api_entities_commit_note." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set GITLAB_TEST_API_ENTITIES_COMMIT_NOTE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		apiEntitiesCommitNoteRef01Ent := client.ApiEntitiesCommitNote(nil)
		apiEntitiesCommitNoteRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "api_entities_commit_note"}, setup.data), "api_entities_commit_note_ref01"))
		apiEntitiesCommitNoteRef01Data["project_id"] = setup.idmap["project01"]
		apiEntitiesCommitNoteRef01Data["sha"] = setup.idmap["sha01"]

		apiEntitiesCommitNoteRef01DataResult, err := apiEntitiesCommitNoteRef01Ent.Create(apiEntitiesCommitNoteRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		apiEntitiesCommitNoteRef01Data = core.ToMapAny(apiEntitiesCommitNoteRef01DataResult)
		if apiEntitiesCommitNoteRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

		// LIST
		apiEntitiesCommitNoteRef01Match := map[string]any{
			"project_id": setup.idmap["project01"],
			"sha": setup.idmap["sha01"],
		}

		apiEntitiesCommitNoteRef01ListResult, err := apiEntitiesCommitNoteRef01Ent.List(apiEntitiesCommitNoteRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		apiEntitiesCommitNoteRef01List, apiEntitiesCommitNoteRef01ListOk := apiEntitiesCommitNoteRef01ListResult.([]any)
		if !apiEntitiesCommitNoteRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", apiEntitiesCommitNoteRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(apiEntitiesCommitNoteRef01List), map[string]any{"id": apiEntitiesCommitNoteRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

	})
}

func api_entities_commit_noteBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "api_entities_commit_note", "ApiEntitiesCommitNoteTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read api_entities_commit_note test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse api_entities_commit_note test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"api_entities_commit_note01", "api_entities_commit_note02", "api_entities_commit_note03", "project01", "project02", "project03", "commit01", "commit02", "commit03", "sha01"},
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
	entidEnvRaw := os.Getenv("GITLAB_TEST_API_ENTITIES_COMMIT_NOTE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"GITLAB_TEST_API_ENTITIES_COMMIT_NOTE_ENTID": idmap,
		"GITLAB_TEST_LIVE":      "FALSE",
		"GITLAB_TEST_EXPLAIN":   "FALSE",
		"GITLAB_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["GITLAB_TEST_API_ENTITIES_COMMIT_NOTE_ENTID"])
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
