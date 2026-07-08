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

func TestApiEntitiesMetricImageEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.ApiEntitiesMetricImage(nil)
		if ent == nil {
			t.Fatal("expected non-nil ApiEntitiesMetricImageEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := api_entities_metric_imageBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "api_entities_metric_image." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set GITLAB_TEST_API_ENTITIES_METRIC_IMAGE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		apiEntitiesMetricImageRef01Ent := client.ApiEntitiesMetricImage(nil)
		apiEntitiesMetricImageRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "api_entities_metric_image"}, setup.data), "api_entities_metric_image_ref01"))
		apiEntitiesMetricImageRef01Data["alert_management_alert_id"] = setup.idmap["alert_management_alert01"]
		apiEntitiesMetricImageRef01Data["project_id"] = setup.idmap["project01"]

		apiEntitiesMetricImageRef01DataResult, err := apiEntitiesMetricImageRef01Ent.Create(apiEntitiesMetricImageRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		apiEntitiesMetricImageRef01Data = core.ToMapAny(apiEntitiesMetricImageRef01DataResult)
		if apiEntitiesMetricImageRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if apiEntitiesMetricImageRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		apiEntitiesMetricImageRef01Match := map[string]any{
			"alert_management_alert_id": setup.idmap["alert_management_alert01"],
			"project_id": setup.idmap["project01"],
		}

		apiEntitiesMetricImageRef01ListResult, err := apiEntitiesMetricImageRef01Ent.List(apiEntitiesMetricImageRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		apiEntitiesMetricImageRef01List, apiEntitiesMetricImageRef01ListOk := apiEntitiesMetricImageRef01ListResult.([]any)
		if !apiEntitiesMetricImageRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", apiEntitiesMetricImageRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(apiEntitiesMetricImageRef01List), map[string]any{"id": apiEntitiesMetricImageRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		apiEntitiesMetricImageRef01DataUp0Up := map[string]any{
			"id": apiEntitiesMetricImageRef01Data["id"],
			"alert_management_alert_id": setup.idmap["alert_management_alert_id"],
			"project_id": setup.idmap["project_id"],
		}

		apiEntitiesMetricImageRef01MarkdefUp0Name := "created_at"
		apiEntitiesMetricImageRef01MarkdefUp0Value := fmt.Sprintf("Mark01-api_entities_metric_image_ref01_%d", setup.now)
		apiEntitiesMetricImageRef01DataUp0Up[apiEntitiesMetricImageRef01MarkdefUp0Name] = apiEntitiesMetricImageRef01MarkdefUp0Value

		apiEntitiesMetricImageRef01ResdataUp0Result, err := apiEntitiesMetricImageRef01Ent.Update(apiEntitiesMetricImageRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		apiEntitiesMetricImageRef01ResdataUp0 := core.ToMapAny(apiEntitiesMetricImageRef01ResdataUp0Result)
		if apiEntitiesMetricImageRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if apiEntitiesMetricImageRef01ResdataUp0["id"] != apiEntitiesMetricImageRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if apiEntitiesMetricImageRef01ResdataUp0[apiEntitiesMetricImageRef01MarkdefUp0Name] != apiEntitiesMetricImageRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", apiEntitiesMetricImageRef01MarkdefUp0Name, apiEntitiesMetricImageRef01ResdataUp0[apiEntitiesMetricImageRef01MarkdefUp0Name])
		}

	})
}

func api_entities_metric_imageBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "api_entities_metric_image", "ApiEntitiesMetricImageTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read api_entities_metric_image test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse api_entities_metric_image test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"api_entities_metric_image01", "api_entities_metric_image02", "api_entities_metric_image03", "project01", "project02", "project03", "alert_management_alert01", "alert_management_alert02", "alert_management_alert03"},
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
	entidEnvRaw := os.Getenv("GITLAB_TEST_API_ENTITIES_METRIC_IMAGE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"GITLAB_TEST_API_ENTITIES_METRIC_IMAGE_ENTID": idmap,
		"GITLAB_TEST_LIVE":      "FALSE",
		"GITLAB_TEST_EXPLAIN":   "FALSE",
		"GITLAB_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["GITLAB_TEST_API_ENTITIES_METRIC_IMAGE_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}
	// Add alert_management_alert_id alias for update test.
	if idmapResolved["alert_management_alert_id"] == nil {
		idmapResolved["alert_management_alert_id"] = idmapResolved["alert_management_alert01"]
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
