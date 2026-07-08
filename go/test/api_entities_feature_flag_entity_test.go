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

func TestApiEntitiesFeatureFlagEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.ApiEntitiesFeatureFlag(nil)
		if ent == nil {
			t.Fatal("expected non-nil ApiEntitiesFeatureFlagEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := api_entities_feature_flagBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "api_entities_feature_flag." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set GITLAB_TEST_API_ENTITIES_FEATURE_FLAG_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		apiEntitiesFeatureFlagRef01Ent := client.ApiEntitiesFeatureFlag(nil)
		apiEntitiesFeatureFlagRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "api_entities_feature_flag"}, setup.data), "api_entities_feature_flag_ref01"))
		apiEntitiesFeatureFlagRef01Data["project_id"] = setup.idmap["project01"]

		apiEntitiesFeatureFlagRef01DataResult, err := apiEntitiesFeatureFlagRef01Ent.Create(apiEntitiesFeatureFlagRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		apiEntitiesFeatureFlagRef01Data = core.ToMapAny(apiEntitiesFeatureFlagRef01DataResult)
		if apiEntitiesFeatureFlagRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

		// LIST
		apiEntitiesFeatureFlagRef01Match := map[string]any{
			"project_id": setup.idmap["project01"],
		}

		apiEntitiesFeatureFlagRef01ListResult, err := apiEntitiesFeatureFlagRef01Ent.List(apiEntitiesFeatureFlagRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		apiEntitiesFeatureFlagRef01List, apiEntitiesFeatureFlagRef01ListOk := apiEntitiesFeatureFlagRef01ListResult.([]any)
		if !apiEntitiesFeatureFlagRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", apiEntitiesFeatureFlagRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(apiEntitiesFeatureFlagRef01List), map[string]any{"id": apiEntitiesFeatureFlagRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		apiEntitiesFeatureFlagRef01DataUp0Up := map[string]any{
			"project_id": setup.idmap["project_id"],
		}

		apiEntitiesFeatureFlagRef01MarkdefUp0Name := "created_at"
		apiEntitiesFeatureFlagRef01MarkdefUp0Value := fmt.Sprintf("Mark01-api_entities_feature_flag_ref01_%d", setup.now)
		apiEntitiesFeatureFlagRef01DataUp0Up[apiEntitiesFeatureFlagRef01MarkdefUp0Name] = apiEntitiesFeatureFlagRef01MarkdefUp0Value

		apiEntitiesFeatureFlagRef01ResdataUp0Result, err := apiEntitiesFeatureFlagRef01Ent.Update(apiEntitiesFeatureFlagRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		apiEntitiesFeatureFlagRef01ResdataUp0 := core.ToMapAny(apiEntitiesFeatureFlagRef01ResdataUp0Result)
		if apiEntitiesFeatureFlagRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if apiEntitiesFeatureFlagRef01ResdataUp0[apiEntitiesFeatureFlagRef01MarkdefUp0Name] != apiEntitiesFeatureFlagRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", apiEntitiesFeatureFlagRef01MarkdefUp0Name, apiEntitiesFeatureFlagRef01ResdataUp0[apiEntitiesFeatureFlagRef01MarkdefUp0Name])
		}

		// LOAD
		apiEntitiesFeatureFlagRef01MatchDt0 := map[string]any{}
		apiEntitiesFeatureFlagRef01DataDt0Loaded, err := apiEntitiesFeatureFlagRef01Ent.Load(apiEntitiesFeatureFlagRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if apiEntitiesFeatureFlagRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func api_entities_feature_flagBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "api_entities_feature_flag", "ApiEntitiesFeatureFlagTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read api_entities_feature_flag test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse api_entities_feature_flag test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"api_entities_feature_flag01", "api_entities_feature_flag02", "api_entities_feature_flag03", "project01", "project02", "project03"},
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
	entidEnvRaw := os.Getenv("GITLAB_TEST_API_ENTITIES_FEATURE_FLAG_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"GITLAB_TEST_API_ENTITIES_FEATURE_FLAG_ENTID": idmap,
		"GITLAB_TEST_LIVE":      "FALSE",
		"GITLAB_TEST_EXPLAIN":   "FALSE",
		"GITLAB_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["GITLAB_TEST_API_ENTITIES_FEATURE_FLAG_ENTID"])
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
