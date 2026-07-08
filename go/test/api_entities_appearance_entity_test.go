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

func TestApiEntitiesAppearanceEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.ApiEntitiesAppearance(nil)
		if ent == nil {
			t.Fatal("expected non-nil ApiEntitiesAppearanceEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := api_entities_appearanceBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "api_entities_appearance." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set GITLAB_TEST_API_ENTITIES_APPEARANCE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		apiEntitiesAppearanceRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.api_entities_appearance", setup.data)))
		var apiEntitiesAppearanceRef01Data map[string]any
		if len(apiEntitiesAppearanceRef01DataRaw) > 0 {
			apiEntitiesAppearanceRef01Data = core.ToMapAny(apiEntitiesAppearanceRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = apiEntitiesAppearanceRef01Data

		// UPDATE
		apiEntitiesAppearanceRef01Ent := client.ApiEntitiesAppearance(nil)
		apiEntitiesAppearanceRef01DataUp0Up := map[string]any{
		}

		apiEntitiesAppearanceRef01MarkdefUp0Name := "description"
		apiEntitiesAppearanceRef01MarkdefUp0Value := fmt.Sprintf("Mark01-api_entities_appearance_ref01_%d", setup.now)
		apiEntitiesAppearanceRef01DataUp0Up[apiEntitiesAppearanceRef01MarkdefUp0Name] = apiEntitiesAppearanceRef01MarkdefUp0Value

		apiEntitiesAppearanceRef01ResdataUp0Result, err := apiEntitiesAppearanceRef01Ent.Update(apiEntitiesAppearanceRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		apiEntitiesAppearanceRef01ResdataUp0 := core.ToMapAny(apiEntitiesAppearanceRef01ResdataUp0Result)
		if apiEntitiesAppearanceRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if apiEntitiesAppearanceRef01ResdataUp0[apiEntitiesAppearanceRef01MarkdefUp0Name] != apiEntitiesAppearanceRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", apiEntitiesAppearanceRef01MarkdefUp0Name, apiEntitiesAppearanceRef01ResdataUp0[apiEntitiesAppearanceRef01MarkdefUp0Name])
		}

		// LOAD
		apiEntitiesAppearanceRef01MatchDt0 := map[string]any{}
		apiEntitiesAppearanceRef01DataDt0Loaded, err := apiEntitiesAppearanceRef01Ent.Load(apiEntitiesAppearanceRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if apiEntitiesAppearanceRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func api_entities_appearanceBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "api_entities_appearance", "ApiEntitiesAppearanceTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read api_entities_appearance test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse api_entities_appearance test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"api_entities_appearance01", "api_entities_appearance02", "api_entities_appearance03"},
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
	entidEnvRaw := os.Getenv("GITLAB_TEST_API_ENTITIES_APPEARANCE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"GITLAB_TEST_API_ENTITIES_APPEARANCE_ENTID": idmap,
		"GITLAB_TEST_LIVE":      "FALSE",
		"GITLAB_TEST_EXPLAIN":   "FALSE",
		"GITLAB_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["GITLAB_TEST_API_ENTITIES_APPEARANCE_ENTID"])
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
