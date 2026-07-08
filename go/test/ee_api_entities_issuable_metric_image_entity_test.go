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

func TestEeApiEntitiesIssuableMetricImageEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.EeApiEntitiesIssuableMetricImage(nil)
		if ent == nil {
			t.Fatal("expected non-nil EeApiEntitiesIssuableMetricImageEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := ee_api_entities_issuable_metric_imageBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "ee_api_entities_issuable_metric_image." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set GITLAB_TEST_EE_API_ENTITIES_ISSUABLE_METRIC_IMAGE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		eeApiEntitiesIssuableMetricImageRef01Ent := client.EeApiEntitiesIssuableMetricImage(nil)
		eeApiEntitiesIssuableMetricImageRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "ee_api_entities_issuable_metric_image"}, setup.data), "ee_api_entities_issuable_metric_image_ref01"))
		eeApiEntitiesIssuableMetricImageRef01Data["issue_id"] = setup.idmap["issue01"]
		eeApiEntitiesIssuableMetricImageRef01Data["project_id"] = setup.idmap["project01"]

		eeApiEntitiesIssuableMetricImageRef01DataResult, err := eeApiEntitiesIssuableMetricImageRef01Ent.Create(eeApiEntitiesIssuableMetricImageRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		eeApiEntitiesIssuableMetricImageRef01Data = core.ToMapAny(eeApiEntitiesIssuableMetricImageRef01DataResult)
		if eeApiEntitiesIssuableMetricImageRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if eeApiEntitiesIssuableMetricImageRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// UPDATE
		eeApiEntitiesIssuableMetricImageRef01DataUp0Up := map[string]any{
			"id": eeApiEntitiesIssuableMetricImageRef01Data["id"],
			"issue_id": setup.idmap["issue_id"],
			"project_id": setup.idmap["project_id"],
		}

		eeApiEntitiesIssuableMetricImageRef01MarkdefUp0Name := "created_at"
		eeApiEntitiesIssuableMetricImageRef01MarkdefUp0Value := fmt.Sprintf("Mark01-ee_api_entities_issuable_metric_image_ref01_%d", setup.now)
		eeApiEntitiesIssuableMetricImageRef01DataUp0Up[eeApiEntitiesIssuableMetricImageRef01MarkdefUp0Name] = eeApiEntitiesIssuableMetricImageRef01MarkdefUp0Value

		eeApiEntitiesIssuableMetricImageRef01ResdataUp0Result, err := eeApiEntitiesIssuableMetricImageRef01Ent.Update(eeApiEntitiesIssuableMetricImageRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		eeApiEntitiesIssuableMetricImageRef01ResdataUp0 := core.ToMapAny(eeApiEntitiesIssuableMetricImageRef01ResdataUp0Result)
		if eeApiEntitiesIssuableMetricImageRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if eeApiEntitiesIssuableMetricImageRef01ResdataUp0["id"] != eeApiEntitiesIssuableMetricImageRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if eeApiEntitiesIssuableMetricImageRef01ResdataUp0[eeApiEntitiesIssuableMetricImageRef01MarkdefUp0Name] != eeApiEntitiesIssuableMetricImageRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", eeApiEntitiesIssuableMetricImageRef01MarkdefUp0Name, eeApiEntitiesIssuableMetricImageRef01ResdataUp0[eeApiEntitiesIssuableMetricImageRef01MarkdefUp0Name])
		}

		// REMOVE
		eeApiEntitiesIssuableMetricImageRef01MatchRm0 := map[string]any{
			"id": eeApiEntitiesIssuableMetricImageRef01Data["id"],
		}
		_, err = eeApiEntitiesIssuableMetricImageRef01Ent.Remove(eeApiEntitiesIssuableMetricImageRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

	})
}

func ee_api_entities_issuable_metric_imageBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "ee_api_entities_issuable_metric_image", "EeApiEntitiesIssuableMetricImageTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read ee_api_entities_issuable_metric_image test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse ee_api_entities_issuable_metric_image test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"ee_api_entities_issuable_metric_image01", "ee_api_entities_issuable_metric_image02", "ee_api_entities_issuable_metric_image03", "project01", "project02", "project03", "issue01", "issue02", "issue03"},
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
	entidEnvRaw := os.Getenv("GITLAB_TEST_EE_API_ENTITIES_ISSUABLE_METRIC_IMAGE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"GITLAB_TEST_EE_API_ENTITIES_ISSUABLE_METRIC_IMAGE_ENTID": idmap,
		"GITLAB_TEST_LIVE":      "FALSE",
		"GITLAB_TEST_EXPLAIN":   "FALSE",
		"GITLAB_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["GITLAB_TEST_EE_API_ENTITIES_ISSUABLE_METRIC_IMAGE_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}
	// Add issue_id alias for update test.
	if idmapResolved["issue_id"] == nil {
		idmapResolved["issue_id"] = idmapResolved["issue01"]
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
