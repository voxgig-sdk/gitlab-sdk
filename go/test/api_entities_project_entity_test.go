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

func TestApiEntitiesProjectEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.ApiEntitiesProject(nil)
		if ent == nil {
			t.Fatal("expected non-nil ApiEntitiesProjectEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := api_entities_projectBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "api_entities_project." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set GITLAB_TEST_API_ENTITIES_PROJECT_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		apiEntitiesProjectRef01Ent := client.ApiEntitiesProject(nil)
		apiEntitiesProjectRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "api_entities_project"}, setup.data), "api_entities_project_ref01"))
		apiEntitiesProjectRef01Data["group_id"] = setup.idmap["group01"]
		apiEntitiesProjectRef01Data["project_id"] = setup.idmap["project01"]

		apiEntitiesProjectRef01DataResult, err := apiEntitiesProjectRef01Ent.Create(apiEntitiesProjectRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		apiEntitiesProjectRef01Data = core.ToMapAny(apiEntitiesProjectRef01DataResult)
		if apiEntitiesProjectRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if apiEntitiesProjectRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		apiEntitiesProjectRef01Match := map[string]any{
			"group_id": setup.idmap["group01"],
		}

		apiEntitiesProjectRef01ListResult, err := apiEntitiesProjectRef01Ent.List(apiEntitiesProjectRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		apiEntitiesProjectRef01List, apiEntitiesProjectRef01ListOk := apiEntitiesProjectRef01ListResult.([]any)
		if !apiEntitiesProjectRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", apiEntitiesProjectRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(apiEntitiesProjectRef01List), map[string]any{"id": apiEntitiesProjectRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		apiEntitiesProjectRef01DataUp0Up := map[string]any{
			"id": apiEntitiesProjectRef01Data["id"],
		}

		apiEntitiesProjectRef01MarkdefUp0Name := "analytics_access_level"
		apiEntitiesProjectRef01MarkdefUp0Value := fmt.Sprintf("Mark01-api_entities_project_ref01_%d", setup.now)
		apiEntitiesProjectRef01DataUp0Up[apiEntitiesProjectRef01MarkdefUp0Name] = apiEntitiesProjectRef01MarkdefUp0Value

		apiEntitiesProjectRef01ResdataUp0Result, err := apiEntitiesProjectRef01Ent.Update(apiEntitiesProjectRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		apiEntitiesProjectRef01ResdataUp0 := core.ToMapAny(apiEntitiesProjectRef01ResdataUp0Result)
		if apiEntitiesProjectRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if apiEntitiesProjectRef01ResdataUp0["id"] != apiEntitiesProjectRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if apiEntitiesProjectRef01ResdataUp0[apiEntitiesProjectRef01MarkdefUp0Name] != apiEntitiesProjectRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", apiEntitiesProjectRef01MarkdefUp0Name, apiEntitiesProjectRef01ResdataUp0[apiEntitiesProjectRef01MarkdefUp0Name])
		}

	})
}

func api_entities_projectBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "api_entities_project", "ApiEntitiesProjectTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read api_entities_project test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse api_entities_project test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"api_entities_project01", "api_entities_project02", "api_entities_project03", "group01", "group02", "group03", "user01", "user02", "user03", "project01", "project02", "project03", "fork01", "fork02", "fork03"},
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
	entidEnvRaw := os.Getenv("GITLAB_TEST_API_ENTITIES_PROJECT_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"GITLAB_TEST_API_ENTITIES_PROJECT_ENTID": idmap,
		"GITLAB_TEST_LIVE":      "FALSE",
		"GITLAB_TEST_EXPLAIN":   "FALSE",
		"GITLAB_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["GITLAB_TEST_API_ENTITIES_PROJECT_ENTID"])
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
