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

func TestApiEntitiesDeploymentExtendedEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.ApiEntitiesDeploymentExtended(nil)
		if ent == nil {
			t.Fatal("expected non-nil ApiEntitiesDeploymentExtendedEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := api_entities_deployment_extendedBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "api_entities_deployment_extended." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set GITLAB_TEST_API_ENTITIES_DEPLOYMENT_EXTENDED_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		apiEntitiesDeploymentExtendedRef01Ent := client.ApiEntitiesDeploymentExtended(nil)
		apiEntitiesDeploymentExtendedRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "api_entities_deployment_extended"}, setup.data), "api_entities_deployment_extended_ref01"))
		apiEntitiesDeploymentExtendedRef01Data["project_id"] = setup.idmap["project01"]

		apiEntitiesDeploymentExtendedRef01DataResult, err := apiEntitiesDeploymentExtendedRef01Ent.Create(apiEntitiesDeploymentExtendedRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		apiEntitiesDeploymentExtendedRef01Data = core.ToMapAny(apiEntitiesDeploymentExtendedRef01DataResult)
		if apiEntitiesDeploymentExtendedRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if apiEntitiesDeploymentExtendedRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// UPDATE
		apiEntitiesDeploymentExtendedRef01DataUp0Up := map[string]any{
			"id": apiEntitiesDeploymentExtendedRef01Data["id"],
			"project_id": setup.idmap["project_id"],
		}

		apiEntitiesDeploymentExtendedRef01MarkdefUp0Name := "created_at"
		apiEntitiesDeploymentExtendedRef01MarkdefUp0Value := fmt.Sprintf("Mark01-api_entities_deployment_extended_ref01_%d", setup.now)
		apiEntitiesDeploymentExtendedRef01DataUp0Up[apiEntitiesDeploymentExtendedRef01MarkdefUp0Name] = apiEntitiesDeploymentExtendedRef01MarkdefUp0Value

		apiEntitiesDeploymentExtendedRef01ResdataUp0Result, err := apiEntitiesDeploymentExtendedRef01Ent.Update(apiEntitiesDeploymentExtendedRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		apiEntitiesDeploymentExtendedRef01ResdataUp0 := core.ToMapAny(apiEntitiesDeploymentExtendedRef01ResdataUp0Result)
		if apiEntitiesDeploymentExtendedRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if apiEntitiesDeploymentExtendedRef01ResdataUp0["id"] != apiEntitiesDeploymentExtendedRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if apiEntitiesDeploymentExtendedRef01ResdataUp0[apiEntitiesDeploymentExtendedRef01MarkdefUp0Name] != apiEntitiesDeploymentExtendedRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", apiEntitiesDeploymentExtendedRef01MarkdefUp0Name, apiEntitiesDeploymentExtendedRef01ResdataUp0[apiEntitiesDeploymentExtendedRef01MarkdefUp0Name])
		}

		// LOAD
		apiEntitiesDeploymentExtendedRef01MatchDt0 := map[string]any{
			"id": apiEntitiesDeploymentExtendedRef01Data["id"],
		}
		apiEntitiesDeploymentExtendedRef01DataDt0Loaded, err := apiEntitiesDeploymentExtendedRef01Ent.Load(apiEntitiesDeploymentExtendedRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		apiEntitiesDeploymentExtendedRef01DataDt0LoadResult := core.ToMapAny(apiEntitiesDeploymentExtendedRef01DataDt0Loaded)
		if apiEntitiesDeploymentExtendedRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if apiEntitiesDeploymentExtendedRef01DataDt0LoadResult["id"] != apiEntitiesDeploymentExtendedRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func api_entities_deployment_extendedBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "api_entities_deployment_extended", "ApiEntitiesDeploymentExtendedTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read api_entities_deployment_extended test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse api_entities_deployment_extended test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"api_entities_deployment_extended01", "api_entities_deployment_extended02", "api_entities_deployment_extended03", "project01", "project02", "project03", "deployment01", "deployment02", "deployment03"},
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
	entidEnvRaw := os.Getenv("GITLAB_TEST_API_ENTITIES_DEPLOYMENT_EXTENDED_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"GITLAB_TEST_API_ENTITIES_DEPLOYMENT_EXTENDED_ENTID": idmap,
		"GITLAB_TEST_LIVE":      "FALSE",
		"GITLAB_TEST_EXPLAIN":   "FALSE",
		"GITLAB_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["GITLAB_TEST_API_ENTITIES_DEPLOYMENT_EXTENDED_ENTID"])
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
