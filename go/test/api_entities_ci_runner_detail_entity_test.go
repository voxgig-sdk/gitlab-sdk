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

func TestApiEntitiesCiRunnerDetailEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.ApiEntitiesCiRunnerDetail(nil)
		if ent == nil {
			t.Fatal("expected non-nil ApiEntitiesCiRunnerDetailEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := api_entities_ci_runner_detailBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "api_entities_ci_runner_detail." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set GITLAB_TEST_API_ENTITIES_CI_RUNNER_DETAIL_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		apiEntitiesCiRunnerDetailRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.api_entities_ci_runner_detail", setup.data)))
		var apiEntitiesCiRunnerDetailRef01Data map[string]any
		if len(apiEntitiesCiRunnerDetailRef01DataRaw) > 0 {
			apiEntitiesCiRunnerDetailRef01Data = core.ToMapAny(apiEntitiesCiRunnerDetailRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = apiEntitiesCiRunnerDetailRef01Data

		// UPDATE
		apiEntitiesCiRunnerDetailRef01Ent := client.ApiEntitiesCiRunnerDetail(nil)
		apiEntitiesCiRunnerDetailRef01DataUp0Up := map[string]any{
			"id": apiEntitiesCiRunnerDetailRef01Data["id"],
		}

		apiEntitiesCiRunnerDetailRef01MarkdefUp0Name := "access_level"
		apiEntitiesCiRunnerDetailRef01MarkdefUp0Value := fmt.Sprintf("Mark01-api_entities_ci_runner_detail_ref01_%d", setup.now)
		apiEntitiesCiRunnerDetailRef01DataUp0Up[apiEntitiesCiRunnerDetailRef01MarkdefUp0Name] = apiEntitiesCiRunnerDetailRef01MarkdefUp0Value

		apiEntitiesCiRunnerDetailRef01ResdataUp0Result, err := apiEntitiesCiRunnerDetailRef01Ent.Update(apiEntitiesCiRunnerDetailRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		apiEntitiesCiRunnerDetailRef01ResdataUp0 := core.ToMapAny(apiEntitiesCiRunnerDetailRef01ResdataUp0Result)
		if apiEntitiesCiRunnerDetailRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if apiEntitiesCiRunnerDetailRef01ResdataUp0["id"] != apiEntitiesCiRunnerDetailRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if apiEntitiesCiRunnerDetailRef01ResdataUp0[apiEntitiesCiRunnerDetailRef01MarkdefUp0Name] != apiEntitiesCiRunnerDetailRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", apiEntitiesCiRunnerDetailRef01MarkdefUp0Name, apiEntitiesCiRunnerDetailRef01ResdataUp0[apiEntitiesCiRunnerDetailRef01MarkdefUp0Name])
		}

		// LOAD
		apiEntitiesCiRunnerDetailRef01MatchDt0 := map[string]any{
			"id": apiEntitiesCiRunnerDetailRef01Data["id"],
		}
		apiEntitiesCiRunnerDetailRef01DataDt0Loaded, err := apiEntitiesCiRunnerDetailRef01Ent.Load(apiEntitiesCiRunnerDetailRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		apiEntitiesCiRunnerDetailRef01DataDt0LoadResult := core.ToMapAny(apiEntitiesCiRunnerDetailRef01DataDt0Loaded)
		if apiEntitiesCiRunnerDetailRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if apiEntitiesCiRunnerDetailRef01DataDt0LoadResult["id"] != apiEntitiesCiRunnerDetailRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func api_entities_ci_runner_detailBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "api_entities_ci_runner_detail", "ApiEntitiesCiRunnerDetailTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read api_entities_ci_runner_detail test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse api_entities_ci_runner_detail test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"api_entities_ci_runner_detail01", "api_entities_ci_runner_detail02", "api_entities_ci_runner_detail03"},
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
	entidEnvRaw := os.Getenv("GITLAB_TEST_API_ENTITIES_CI_RUNNER_DETAIL_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"GITLAB_TEST_API_ENTITIES_CI_RUNNER_DETAIL_ENTID": idmap,
		"GITLAB_TEST_LIVE":      "FALSE",
		"GITLAB_TEST_EXPLAIN":   "FALSE",
		"GITLAB_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["GITLAB_TEST_API_ENTITIES_CI_RUNNER_DETAIL_ENTID"])
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
