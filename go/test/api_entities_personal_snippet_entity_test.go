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

func TestApiEntitiesPersonalSnippetEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.ApiEntitiesPersonalSnippet(nil)
		if ent == nil {
			t.Fatal("expected non-nil ApiEntitiesPersonalSnippetEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := api_entities_personal_snippetBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "api_entities_personal_snippet." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set GITLAB_TEST_API_ENTITIES_PERSONAL_SNIPPET_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		apiEntitiesPersonalSnippetRef01Ent := client.ApiEntitiesPersonalSnippet(nil)
		apiEntitiesPersonalSnippetRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "api_entities_personal_snippet"}, setup.data), "api_entities_personal_snippet_ref01"))

		apiEntitiesPersonalSnippetRef01DataResult, err := apiEntitiesPersonalSnippetRef01Ent.Create(apiEntitiesPersonalSnippetRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		apiEntitiesPersonalSnippetRef01Data = core.ToMapAny(apiEntitiesPersonalSnippetRef01DataResult)
		if apiEntitiesPersonalSnippetRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if apiEntitiesPersonalSnippetRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		apiEntitiesPersonalSnippetRef01Match := map[string]any{}

		apiEntitiesPersonalSnippetRef01ListResult, err := apiEntitiesPersonalSnippetRef01Ent.List(apiEntitiesPersonalSnippetRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		apiEntitiesPersonalSnippetRef01List, apiEntitiesPersonalSnippetRef01ListOk := apiEntitiesPersonalSnippetRef01ListResult.([]any)
		if !apiEntitiesPersonalSnippetRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", apiEntitiesPersonalSnippetRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(apiEntitiesPersonalSnippetRef01List), map[string]any{"id": apiEntitiesPersonalSnippetRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		apiEntitiesPersonalSnippetRef01DataUp0Up := map[string]any{
			"id": apiEntitiesPersonalSnippetRef01Data["id"],
		}

		apiEntitiesPersonalSnippetRef01MarkdefUp0Name := "created_at"
		apiEntitiesPersonalSnippetRef01MarkdefUp0Value := fmt.Sprintf("Mark01-api_entities_personal_snippet_ref01_%d", setup.now)
		apiEntitiesPersonalSnippetRef01DataUp0Up[apiEntitiesPersonalSnippetRef01MarkdefUp0Name] = apiEntitiesPersonalSnippetRef01MarkdefUp0Value

		apiEntitiesPersonalSnippetRef01ResdataUp0Result, err := apiEntitiesPersonalSnippetRef01Ent.Update(apiEntitiesPersonalSnippetRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		apiEntitiesPersonalSnippetRef01ResdataUp0 := core.ToMapAny(apiEntitiesPersonalSnippetRef01ResdataUp0Result)
		if apiEntitiesPersonalSnippetRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if apiEntitiesPersonalSnippetRef01ResdataUp0["id"] != apiEntitiesPersonalSnippetRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if apiEntitiesPersonalSnippetRef01ResdataUp0[apiEntitiesPersonalSnippetRef01MarkdefUp0Name] != apiEntitiesPersonalSnippetRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", apiEntitiesPersonalSnippetRef01MarkdefUp0Name, apiEntitiesPersonalSnippetRef01ResdataUp0[apiEntitiesPersonalSnippetRef01MarkdefUp0Name])
		}

		// LOAD
		apiEntitiesPersonalSnippetRef01MatchDt0 := map[string]any{
			"id": apiEntitiesPersonalSnippetRef01Data["id"],
		}
		apiEntitiesPersonalSnippetRef01DataDt0Loaded, err := apiEntitiesPersonalSnippetRef01Ent.Load(apiEntitiesPersonalSnippetRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		apiEntitiesPersonalSnippetRef01DataDt0LoadResult := core.ToMapAny(apiEntitiesPersonalSnippetRef01DataDt0Loaded)
		if apiEntitiesPersonalSnippetRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if apiEntitiesPersonalSnippetRef01DataDt0LoadResult["id"] != apiEntitiesPersonalSnippetRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func api_entities_personal_snippetBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "api_entities_personal_snippet", "ApiEntitiesPersonalSnippetTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read api_entities_personal_snippet test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse api_entities_personal_snippet test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"api_entities_personal_snippet01", "api_entities_personal_snippet02", "api_entities_personal_snippet03"},
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
	entidEnvRaw := os.Getenv("GITLAB_TEST_API_ENTITIES_PERSONAL_SNIPPET_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"GITLAB_TEST_API_ENTITIES_PERSONAL_SNIPPET_ENTID": idmap,
		"GITLAB_TEST_LIVE":      "FALSE",
		"GITLAB_TEST_EXPLAIN":   "FALSE",
		"GITLAB_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["GITLAB_TEST_API_ENTITIES_PERSONAL_SNIPPET_ENTID"])
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
