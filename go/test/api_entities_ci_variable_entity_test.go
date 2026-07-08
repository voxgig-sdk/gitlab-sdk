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

func TestApiEntitiesCiVariableEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.ApiEntitiesCiVariable(nil)
		if ent == nil {
			t.Fatal("expected non-nil ApiEntitiesCiVariableEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := api_entities_ci_variableBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "api_entities_ci_variable." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set GITLAB_TEST_API_ENTITIES_CI_VARIABLE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		apiEntitiesCiVariableRef01Ent := client.ApiEntitiesCiVariable(nil)
		apiEntitiesCiVariableRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "api_entities_ci_variable"}, setup.data), "api_entities_ci_variable_ref01"))
		apiEntitiesCiVariableRef01Data["group_id"] = setup.idmap["group01"]
		apiEntitiesCiVariableRef01Data["pipeline_id"] = setup.idmap["pipeline01"]
		apiEntitiesCiVariableRef01Data["pipeline_schedule_id"] = setup.idmap["pipeline_schedule01"]
		apiEntitiesCiVariableRef01Data["project_id"] = setup.idmap["project01"]

		apiEntitiesCiVariableRef01DataResult, err := apiEntitiesCiVariableRef01Ent.Create(apiEntitiesCiVariableRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		apiEntitiesCiVariableRef01Data = core.ToMapAny(apiEntitiesCiVariableRef01DataResult)
		if apiEntitiesCiVariableRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

		// LIST
		apiEntitiesCiVariableRef01Match := map[string]any{
			"pipeline_id": setup.idmap["pipeline01"],
			"project_id": setup.idmap["project01"],
		}

		apiEntitiesCiVariableRef01ListResult, err := apiEntitiesCiVariableRef01Ent.List(apiEntitiesCiVariableRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		apiEntitiesCiVariableRef01List, apiEntitiesCiVariableRef01ListOk := apiEntitiesCiVariableRef01ListResult.([]any)
		if !apiEntitiesCiVariableRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", apiEntitiesCiVariableRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(apiEntitiesCiVariableRef01List), map[string]any{"id": apiEntitiesCiVariableRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		apiEntitiesCiVariableRef01DataUp0Up := map[string]any{
		}

		apiEntitiesCiVariableRef01MarkdefUp0Name := "description"
		apiEntitiesCiVariableRef01MarkdefUp0Value := fmt.Sprintf("Mark01-api_entities_ci_variable_ref01_%d", setup.now)
		apiEntitiesCiVariableRef01DataUp0Up[apiEntitiesCiVariableRef01MarkdefUp0Name] = apiEntitiesCiVariableRef01MarkdefUp0Value

		apiEntitiesCiVariableRef01ResdataUp0Result, err := apiEntitiesCiVariableRef01Ent.Update(apiEntitiesCiVariableRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		apiEntitiesCiVariableRef01ResdataUp0 := core.ToMapAny(apiEntitiesCiVariableRef01ResdataUp0Result)
		if apiEntitiesCiVariableRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if apiEntitiesCiVariableRef01ResdataUp0[apiEntitiesCiVariableRef01MarkdefUp0Name] != apiEntitiesCiVariableRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", apiEntitiesCiVariableRef01MarkdefUp0Name, apiEntitiesCiVariableRef01ResdataUp0[apiEntitiesCiVariableRef01MarkdefUp0Name])
		}

		// LOAD
		apiEntitiesCiVariableRef01MatchDt0 := map[string]any{}
		apiEntitiesCiVariableRef01DataDt0Loaded, err := apiEntitiesCiVariableRef01Ent.Load(apiEntitiesCiVariableRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if apiEntitiesCiVariableRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func api_entities_ci_variableBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "api_entities_ci_variable", "ApiEntitiesCiVariableTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read api_entities_ci_variable test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse api_entities_ci_variable test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"api_entities_ci_variable01", "api_entities_ci_variable02", "api_entities_ci_variable03", "group01", "group02", "group03", "project01", "project02", "project03", "pipeline_schedule01", "pipeline_schedule02", "pipeline_schedule03", "pipeline01", "pipeline02", "pipeline03"},
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
	entidEnvRaw := os.Getenv("GITLAB_TEST_API_ENTITIES_CI_VARIABLE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"GITLAB_TEST_API_ENTITIES_CI_VARIABLE_ENTID": idmap,
		"GITLAB_TEST_LIVE":      "FALSE",
		"GITLAB_TEST_EXPLAIN":   "FALSE",
		"GITLAB_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["GITLAB_TEST_API_ENTITIES_CI_VARIABLE_ENTID"])
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
