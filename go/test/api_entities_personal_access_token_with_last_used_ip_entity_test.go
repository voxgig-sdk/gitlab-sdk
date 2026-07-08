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

func TestApiEntitiesPersonalAccessTokenWithLastUsedIpEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.ApiEntitiesPersonalAccessTokenWithLastUsedIp(nil)
		if ent == nil {
			t.Fatal("expected non-nil ApiEntitiesPersonalAccessTokenWithLastUsedIpEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := api_entities_personal_access_token_with_last_used_ipBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"list", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "api_entities_personal_access_token_with_last_used_ip." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set GITLAB_TEST_API_ENTITIES_PERSONAL_ACCESS_TOKEN_WITH_LAST_USED_IP_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		apiEntitiesPersonalAccessTokenWithLastUsedIpRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.api_entities_personal_access_token_with_last_used_ip", setup.data)))
		var apiEntitiesPersonalAccessTokenWithLastUsedIpRef01Data map[string]any
		if len(apiEntitiesPersonalAccessTokenWithLastUsedIpRef01DataRaw) > 0 {
			apiEntitiesPersonalAccessTokenWithLastUsedIpRef01Data = core.ToMapAny(apiEntitiesPersonalAccessTokenWithLastUsedIpRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = apiEntitiesPersonalAccessTokenWithLastUsedIpRef01Data

		// LIST
		apiEntitiesPersonalAccessTokenWithLastUsedIpRef01Ent := client.ApiEntitiesPersonalAccessTokenWithLastUsedIp(nil)
		apiEntitiesPersonalAccessTokenWithLastUsedIpRef01Match := map[string]any{}

		apiEntitiesPersonalAccessTokenWithLastUsedIpRef01ListResult, err := apiEntitiesPersonalAccessTokenWithLastUsedIpRef01Ent.List(apiEntitiesPersonalAccessTokenWithLastUsedIpRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		_, apiEntitiesPersonalAccessTokenWithLastUsedIpRef01ListOk := apiEntitiesPersonalAccessTokenWithLastUsedIpRef01ListResult.([]any)
		if !apiEntitiesPersonalAccessTokenWithLastUsedIpRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", apiEntitiesPersonalAccessTokenWithLastUsedIpRef01ListResult)
		}

		// LOAD
		apiEntitiesPersonalAccessTokenWithLastUsedIpRef01MatchDt0 := map[string]any{
			"id": apiEntitiesPersonalAccessTokenWithLastUsedIpRef01Data["id"],
		}
		apiEntitiesPersonalAccessTokenWithLastUsedIpRef01DataDt0Loaded, err := apiEntitiesPersonalAccessTokenWithLastUsedIpRef01Ent.Load(apiEntitiesPersonalAccessTokenWithLastUsedIpRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		apiEntitiesPersonalAccessTokenWithLastUsedIpRef01DataDt0LoadResult := core.ToMapAny(apiEntitiesPersonalAccessTokenWithLastUsedIpRef01DataDt0Loaded)
		if apiEntitiesPersonalAccessTokenWithLastUsedIpRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if apiEntitiesPersonalAccessTokenWithLastUsedIpRef01DataDt0LoadResult["id"] != apiEntitiesPersonalAccessTokenWithLastUsedIpRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func api_entities_personal_access_token_with_last_used_ipBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "api_entities_personal_access_token_with_last_used_ip", "ApiEntitiesPersonalAccessTokenWithLastUsedIpTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read api_entities_personal_access_token_with_last_used_ip test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse api_entities_personal_access_token_with_last_used_ip test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"api_entities_personal_access_token_with_last_used_ip01", "api_entities_personal_access_token_with_last_used_ip02", "api_entities_personal_access_token_with_last_used_ip03"},
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
	entidEnvRaw := os.Getenv("GITLAB_TEST_API_ENTITIES_PERSONAL_ACCESS_TOKEN_WITH_LAST_USED_IP_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"GITLAB_TEST_API_ENTITIES_PERSONAL_ACCESS_TOKEN_WITH_LAST_USED_IP_ENTID": idmap,
		"GITLAB_TEST_LIVE":      "FALSE",
		"GITLAB_TEST_EXPLAIN":   "FALSE",
		"GITLAB_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["GITLAB_TEST_API_ENTITIES_PERSONAL_ACCESS_TOKEN_WITH_LAST_USED_IP_ENTID"])
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
