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

func TestAlertManagementEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.AlertManagement(nil)
		if ent == nil {
			t.Fatal("expected non-nil AlertManagementEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := alert_managementBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "alert_management." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set GITLAB_TEST_ALERT_MANAGEMENT_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		alertManagementRef01Ent := client.AlertManagement(nil)
		alertManagementRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "alert_management"}, setup.data), "alert_management_ref01"))
		alertManagementRef01Data["alert_management_alert_id"] = setup.idmap["alert_management_alert01"]
		alertManagementRef01Data["project_id"] = setup.idmap["project01"]

		alertManagementRef01DataResult, err := alertManagementRef01Ent.Create(alertManagementRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		alertManagementRef01Data = core.ToMapAny(alertManagementRef01DataResult)
		if alertManagementRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

		// REMOVE
		alertManagementRef01MatchRm0 := map[string]any{
			"id": alertManagementRef01Data["id"],
		}
		_, err = alertManagementRef01Ent.Remove(alertManagementRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

	})
}

func alert_managementBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "alert_management", "AlertManagementTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read alert_management test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse alert_management test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"alert_management01", "alert_management02", "alert_management03", "project01", "project02", "project03", "alert_management_alert01", "alert_management_alert02", "alert_management_alert03", "metric_image01", "metric_image02", "metric_image03"},
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
	entidEnvRaw := os.Getenv("GITLAB_TEST_ALERT_MANAGEMENT_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"GITLAB_TEST_ALERT_MANAGEMENT_ENTID": idmap,
		"GITLAB_TEST_LIVE":      "FALSE",
		"GITLAB_TEST_EXPLAIN":   "FALSE",
		"GITLAB_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["GITLAB_TEST_ALERT_MANAGEMENT_ENTID"])
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
