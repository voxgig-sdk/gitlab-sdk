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

func TestEeApiEntitiesGeoNodeStatusEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.EeApiEntitiesGeoNodeStatus(nil)
		if ent == nil {
			t.Fatal("expected non-nil EeApiEntitiesGeoNodeStatusEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := ee_api_entities_geo_node_statusBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "ee_api_entities_geo_node_status." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set GITLAB_TEST_EE_API_ENTITIES_GEO_NODE_STATUS_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		eeApiEntitiesGeoNodeStatusRef01Ent := client.EeApiEntitiesGeoNodeStatus(nil)
		eeApiEntitiesGeoNodeStatusRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "ee_api_entities_geo_node_status"}, setup.data), "ee_api_entities_geo_node_status_ref01"))

		eeApiEntitiesGeoNodeStatusRef01DataResult, err := eeApiEntitiesGeoNodeStatusRef01Ent.Create(eeApiEntitiesGeoNodeStatusRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		eeApiEntitiesGeoNodeStatusRef01Data = core.ToMapAny(eeApiEntitiesGeoNodeStatusRef01DataResult)
		if eeApiEntitiesGeoNodeStatusRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

	})
}

func ee_api_entities_geo_node_statusBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "ee_api_entities_geo_node_status", "EeApiEntitiesGeoNodeStatusTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read ee_api_entities_geo_node_status test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse ee_api_entities_geo_node_status test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"ee_api_entities_geo_node_status01", "ee_api_entities_geo_node_status02", "ee_api_entities_geo_node_status03"},
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
	entidEnvRaw := os.Getenv("GITLAB_TEST_EE_API_ENTITIES_GEO_NODE_STATUS_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"GITLAB_TEST_EE_API_ENTITIES_GEO_NODE_STATUS_ENTID": idmap,
		"GITLAB_TEST_LIVE":      "FALSE",
		"GITLAB_TEST_EXPLAIN":   "FALSE",
		"GITLAB_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["GITLAB_TEST_EE_API_ENTITIES_GEO_NODE_STATUS_ENTID"])
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
