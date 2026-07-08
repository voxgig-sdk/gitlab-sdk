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

func TestApiEntitiesIntegrationBasicEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.ApiEntitiesIntegrationBasic(nil)
		if ent == nil {
			t.Fatal("expected non-nil ApiEntitiesIntegrationBasicEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := api_entities_integration_basicBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"list", "update"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "api_entities_integration_basic." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set GITLAB_TEST_API_ENTITIES_INTEGRATION_BASIC_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		apiEntitiesIntegrationBasicRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.api_entities_integration_basic", setup.data)))
		var apiEntitiesIntegrationBasicRef01Data map[string]any
		if len(apiEntitiesIntegrationBasicRef01DataRaw) > 0 {
			apiEntitiesIntegrationBasicRef01Data = core.ToMapAny(apiEntitiesIntegrationBasicRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = apiEntitiesIntegrationBasicRef01Data

		// LIST
		apiEntitiesIntegrationBasicRef01Ent := client.ApiEntitiesIntegrationBasic(nil)
		apiEntitiesIntegrationBasicRef01Match := map[string]any{
			"project_id": setup.idmap["project01"],
		}

		apiEntitiesIntegrationBasicRef01ListResult, err := apiEntitiesIntegrationBasicRef01Ent.List(apiEntitiesIntegrationBasicRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		_, apiEntitiesIntegrationBasicRef01ListOk := apiEntitiesIntegrationBasicRef01ListResult.([]any)
		if !apiEntitiesIntegrationBasicRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", apiEntitiesIntegrationBasicRef01ListResult)
		}

		// UPDATE
		apiEntitiesIntegrationBasicRef01DataUp0Up := map[string]any{
			"id": apiEntitiesIntegrationBasicRef01Data["id"],
		}

		apiEntitiesIntegrationBasicRef01MarkdefUp0Name := "created_at"
		apiEntitiesIntegrationBasicRef01MarkdefUp0Value := fmt.Sprintf("Mark01-api_entities_integration_basic_ref01_%d", setup.now)
		apiEntitiesIntegrationBasicRef01DataUp0Up[apiEntitiesIntegrationBasicRef01MarkdefUp0Name] = apiEntitiesIntegrationBasicRef01MarkdefUp0Value

		apiEntitiesIntegrationBasicRef01ResdataUp0Result, err := apiEntitiesIntegrationBasicRef01Ent.Update(apiEntitiesIntegrationBasicRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		apiEntitiesIntegrationBasicRef01ResdataUp0 := core.ToMapAny(apiEntitiesIntegrationBasicRef01ResdataUp0Result)
		if apiEntitiesIntegrationBasicRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if apiEntitiesIntegrationBasicRef01ResdataUp0["id"] != apiEntitiesIntegrationBasicRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if apiEntitiesIntegrationBasicRef01ResdataUp0[apiEntitiesIntegrationBasicRef01MarkdefUp0Name] != apiEntitiesIntegrationBasicRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", apiEntitiesIntegrationBasicRef01MarkdefUp0Name, apiEntitiesIntegrationBasicRef01ResdataUp0[apiEntitiesIntegrationBasicRef01MarkdefUp0Name])
		}

	})
}

func api_entities_integration_basicBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "api_entities_integration_basic", "ApiEntitiesIntegrationBasicTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read api_entities_integration_basic test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse api_entities_integration_basic test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"api_entities_integration_basic01", "api_entities_integration_basic02", "api_entities_integration_basic03", "group01", "group02", "group03", "project01", "project02", "project03"},
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
	entidEnvRaw := os.Getenv("GITLAB_TEST_API_ENTITIES_INTEGRATION_BASIC_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"GITLAB_TEST_API_ENTITIES_INTEGRATION_BASIC_ENTID": idmap,
		"GITLAB_TEST_LIVE":      "FALSE",
		"GITLAB_TEST_EXPLAIN":   "FALSE",
		"GITLAB_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["GITLAB_TEST_API_ENTITIES_INTEGRATION_BASIC_ENTID"])
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
