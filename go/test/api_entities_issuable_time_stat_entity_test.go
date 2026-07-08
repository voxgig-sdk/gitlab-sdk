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

func TestApiEntitiesIssuableTimeStatEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.ApiEntitiesIssuableTimeStat(nil)
		if ent == nil {
			t.Fatal("expected non-nil ApiEntitiesIssuableTimeStatEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := api_entities_issuable_time_statBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "api_entities_issuable_time_stat." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set GITLAB_TEST_API_ENTITIES_ISSUABLE_TIME_STAT_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		apiEntitiesIssuableTimeStatRef01Ent := client.ApiEntitiesIssuableTimeStat(nil)
		apiEntitiesIssuableTimeStatRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "api_entities_issuable_time_stat"}, setup.data), "api_entities_issuable_time_stat_ref01"))
		apiEntitiesIssuableTimeStatRef01Data["merge_request_id"] = setup.idmap["merge_request01"]
		apiEntitiesIssuableTimeStatRef01Data["project_id"] = setup.idmap["project01"]

		apiEntitiesIssuableTimeStatRef01DataResult, err := apiEntitiesIssuableTimeStatRef01Ent.Create(apiEntitiesIssuableTimeStatRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		apiEntitiesIssuableTimeStatRef01Data = core.ToMapAny(apiEntitiesIssuableTimeStatRef01DataResult)
		if apiEntitiesIssuableTimeStatRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

		// LOAD
		apiEntitiesIssuableTimeStatRef01MatchDt0 := map[string]any{}
		apiEntitiesIssuableTimeStatRef01DataDt0Loaded, err := apiEntitiesIssuableTimeStatRef01Ent.Load(apiEntitiesIssuableTimeStatRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if apiEntitiesIssuableTimeStatRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func api_entities_issuable_time_statBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "api_entities_issuable_time_stat", "ApiEntitiesIssuableTimeStatTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read api_entities_issuable_time_stat test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse api_entities_issuable_time_stat test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"api_entities_issuable_time_stat01", "api_entities_issuable_time_stat02", "api_entities_issuable_time_stat03", "project01", "project02", "project03", "issue01", "issue02", "issue03", "merge_request01", "merge_request02", "merge_request03"},
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
	entidEnvRaw := os.Getenv("GITLAB_TEST_API_ENTITIES_ISSUABLE_TIME_STAT_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"GITLAB_TEST_API_ENTITIES_ISSUABLE_TIME_STAT_ENTID": idmap,
		"GITLAB_TEST_LIVE":      "FALSE",
		"GITLAB_TEST_EXPLAIN":   "FALSE",
		"GITLAB_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["GITLAB_TEST_API_ENTITIES_ISSUABLE_TIME_STAT_ENTID"])
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
