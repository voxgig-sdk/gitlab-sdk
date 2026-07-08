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

func TestApiEntitiesCiJobBasicEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.ApiEntitiesCiJobBasic(nil)
		if ent == nil {
			t.Fatal("expected non-nil ApiEntitiesCiJobBasicEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := api_entities_ci_job_basicBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "api_entities_ci_job_basic." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set GITLAB_TEST_API_ENTITIES_CI_JOB_BASIC_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		apiEntitiesCiJobBasicRef01Ent := client.ApiEntitiesCiJobBasic(nil)
		apiEntitiesCiJobBasicRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "api_entities_ci_job_basic"}, setup.data), "api_entities_ci_job_basic_ref01"))
		apiEntitiesCiJobBasicRef01Data["job_id"] = setup.idmap["job01"]
		apiEntitiesCiJobBasicRef01Data["key"] = setup.idmap["key01"]
		apiEntitiesCiJobBasicRef01Data["project_id"] = setup.idmap["project01"]

		apiEntitiesCiJobBasicRef01DataResult, err := apiEntitiesCiJobBasicRef01Ent.Create(apiEntitiesCiJobBasicRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		apiEntitiesCiJobBasicRef01Data = core.ToMapAny(apiEntitiesCiJobBasicRef01DataResult)
		if apiEntitiesCiJobBasicRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if apiEntitiesCiJobBasicRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		apiEntitiesCiJobBasicRef01Match := map[string]any{
			"key": setup.idmap["key01"],
			"project_id": setup.idmap["project01"],
		}

		apiEntitiesCiJobBasicRef01ListResult, err := apiEntitiesCiJobBasicRef01Ent.List(apiEntitiesCiJobBasicRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		apiEntitiesCiJobBasicRef01List, apiEntitiesCiJobBasicRef01ListOk := apiEntitiesCiJobBasicRef01ListResult.([]any)
		if !apiEntitiesCiJobBasicRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", apiEntitiesCiJobBasicRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(apiEntitiesCiJobBasicRef01List), map[string]any{"id": apiEntitiesCiJobBasicRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

	})
}

func api_entities_ci_job_basicBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "api_entities_ci_job_basic", "ApiEntitiesCiJobBasicTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read api_entities_ci_job_basic test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse api_entities_ci_job_basic test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"api_entities_ci_job_basic01", "api_entities_ci_job_basic02", "api_entities_ci_job_basic03", "project01", "project02", "project03", "job01", "job02", "job03", "resource_group01", "resource_group02", "resource_group03", "key01"},
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
	entidEnvRaw := os.Getenv("GITLAB_TEST_API_ENTITIES_CI_JOB_BASIC_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"GITLAB_TEST_API_ENTITIES_CI_JOB_BASIC_ENTID": idmap,
		"GITLAB_TEST_LIVE":      "FALSE",
		"GITLAB_TEST_EXPLAIN":   "FALSE",
		"GITLAB_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["GITLAB_TEST_API_ENTITIES_CI_JOB_BASIC_ENTID"])
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
