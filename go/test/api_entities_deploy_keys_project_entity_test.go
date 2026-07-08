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

func TestApiEntitiesDeployKeysProjectEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.ApiEntitiesDeployKeysProject(nil)
		if ent == nil {
			t.Fatal("expected non-nil ApiEntitiesDeployKeysProjectEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := api_entities_deploy_keys_projectBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "api_entities_deploy_keys_project." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set GITLAB_TEST_API_ENTITIES_DEPLOY_KEYS_PROJECT_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		apiEntitiesDeployKeysProjectRef01Ent := client.ApiEntitiesDeployKeysProject(nil)
		apiEntitiesDeployKeysProjectRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "api_entities_deploy_keys_project"}, setup.data), "api_entities_deploy_keys_project_ref01"))
		apiEntitiesDeployKeysProjectRef01Data["project_id"] = setup.idmap["project01"]

		apiEntitiesDeployKeysProjectRef01DataResult, err := apiEntitiesDeployKeysProjectRef01Ent.Create(apiEntitiesDeployKeysProjectRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		apiEntitiesDeployKeysProjectRef01Data = core.ToMapAny(apiEntitiesDeployKeysProjectRef01DataResult)
		if apiEntitiesDeployKeysProjectRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if apiEntitiesDeployKeysProjectRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		apiEntitiesDeployKeysProjectRef01Match := map[string]any{
			"project_id": setup.idmap["project01"],
		}

		apiEntitiesDeployKeysProjectRef01ListResult, err := apiEntitiesDeployKeysProjectRef01Ent.List(apiEntitiesDeployKeysProjectRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		apiEntitiesDeployKeysProjectRef01List, apiEntitiesDeployKeysProjectRef01ListOk := apiEntitiesDeployKeysProjectRef01ListResult.([]any)
		if !apiEntitiesDeployKeysProjectRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", apiEntitiesDeployKeysProjectRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(apiEntitiesDeployKeysProjectRef01List), map[string]any{"id": apiEntitiesDeployKeysProjectRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// LOAD
		apiEntitiesDeployKeysProjectRef01MatchDt0 := map[string]any{
			"id": apiEntitiesDeployKeysProjectRef01Data["id"],
		}
		apiEntitiesDeployKeysProjectRef01DataDt0Loaded, err := apiEntitiesDeployKeysProjectRef01Ent.Load(apiEntitiesDeployKeysProjectRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		apiEntitiesDeployKeysProjectRef01DataDt0LoadResult := core.ToMapAny(apiEntitiesDeployKeysProjectRef01DataDt0Loaded)
		if apiEntitiesDeployKeysProjectRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if apiEntitiesDeployKeysProjectRef01DataDt0LoadResult["id"] != apiEntitiesDeployKeysProjectRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func api_entities_deploy_keys_projectBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "api_entities_deploy_keys_project", "ApiEntitiesDeployKeysProjectTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read api_entities_deploy_keys_project test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse api_entities_deploy_keys_project test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"api_entities_deploy_keys_project01", "api_entities_deploy_keys_project02", "api_entities_deploy_keys_project03", "project01", "project02", "project03", "deploy_key01", "deploy_key02", "deploy_key03"},
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
	entidEnvRaw := os.Getenv("GITLAB_TEST_API_ENTITIES_DEPLOY_KEYS_PROJECT_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"GITLAB_TEST_API_ENTITIES_DEPLOY_KEYS_PROJECT_ENTID": idmap,
		"GITLAB_TEST_LIVE":      "FALSE",
		"GITLAB_TEST_EXPLAIN":   "FALSE",
		"GITLAB_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["GITLAB_TEST_API_ENTITIES_DEPLOY_KEYS_PROJECT_ENTID"])
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
