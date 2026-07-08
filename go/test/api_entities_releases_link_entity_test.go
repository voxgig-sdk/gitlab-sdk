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

func TestApiEntitiesReleasesLinkEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.ApiEntitiesReleasesLink(nil)
		if ent == nil {
			t.Fatal("expected non-nil ApiEntitiesReleasesLinkEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := api_entities_releases_linkBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "api_entities_releases_link." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set GITLAB_TEST_API_ENTITIES_RELEASES_LINK_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		apiEntitiesReleasesLinkRef01Ent := client.ApiEntitiesReleasesLink(nil)
		apiEntitiesReleasesLinkRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "api_entities_releases_link"}, setup.data), "api_entities_releases_link_ref01"))
		apiEntitiesReleasesLinkRef01Data["project_id"] = setup.idmap["project01"]
		apiEntitiesReleasesLinkRef01Data["release_id"] = setup.idmap["release01"]

		apiEntitiesReleasesLinkRef01DataResult, err := apiEntitiesReleasesLinkRef01Ent.Create(apiEntitiesReleasesLinkRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		apiEntitiesReleasesLinkRef01Data = core.ToMapAny(apiEntitiesReleasesLinkRef01DataResult)
		if apiEntitiesReleasesLinkRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if apiEntitiesReleasesLinkRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		apiEntitiesReleasesLinkRef01Match := map[string]any{
			"project_id": setup.idmap["project01"],
			"release_id": setup.idmap["release01"],
		}

		apiEntitiesReleasesLinkRef01ListResult, err := apiEntitiesReleasesLinkRef01Ent.List(apiEntitiesReleasesLinkRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		apiEntitiesReleasesLinkRef01List, apiEntitiesReleasesLinkRef01ListOk := apiEntitiesReleasesLinkRef01ListResult.([]any)
		if !apiEntitiesReleasesLinkRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", apiEntitiesReleasesLinkRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(apiEntitiesReleasesLinkRef01List), map[string]any{"id": apiEntitiesReleasesLinkRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		apiEntitiesReleasesLinkRef01DataUp0Up := map[string]any{
			"id": apiEntitiesReleasesLinkRef01Data["id"],
			"project_id": setup.idmap["project_id"],
			"release_id": setup.idmap["release_id"],
		}

		apiEntitiesReleasesLinkRef01MarkdefUp0Name := "direct_asset_url"
		apiEntitiesReleasesLinkRef01MarkdefUp0Value := fmt.Sprintf("Mark01-api_entities_releases_link_ref01_%d", setup.now)
		apiEntitiesReleasesLinkRef01DataUp0Up[apiEntitiesReleasesLinkRef01MarkdefUp0Name] = apiEntitiesReleasesLinkRef01MarkdefUp0Value

		apiEntitiesReleasesLinkRef01ResdataUp0Result, err := apiEntitiesReleasesLinkRef01Ent.Update(apiEntitiesReleasesLinkRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		apiEntitiesReleasesLinkRef01ResdataUp0 := core.ToMapAny(apiEntitiesReleasesLinkRef01ResdataUp0Result)
		if apiEntitiesReleasesLinkRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if apiEntitiesReleasesLinkRef01ResdataUp0["id"] != apiEntitiesReleasesLinkRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if apiEntitiesReleasesLinkRef01ResdataUp0[apiEntitiesReleasesLinkRef01MarkdefUp0Name] != apiEntitiesReleasesLinkRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", apiEntitiesReleasesLinkRef01MarkdefUp0Name, apiEntitiesReleasesLinkRef01ResdataUp0[apiEntitiesReleasesLinkRef01MarkdefUp0Name])
		}

		// LOAD
		apiEntitiesReleasesLinkRef01MatchDt0 := map[string]any{
			"id": apiEntitiesReleasesLinkRef01Data["id"],
		}
		apiEntitiesReleasesLinkRef01DataDt0Loaded, err := apiEntitiesReleasesLinkRef01Ent.Load(apiEntitiesReleasesLinkRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		apiEntitiesReleasesLinkRef01DataDt0LoadResult := core.ToMapAny(apiEntitiesReleasesLinkRef01DataDt0Loaded)
		if apiEntitiesReleasesLinkRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if apiEntitiesReleasesLinkRef01DataDt0LoadResult["id"] != apiEntitiesReleasesLinkRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func api_entities_releases_linkBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "api_entities_releases_link", "ApiEntitiesReleasesLinkTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read api_entities_releases_link test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse api_entities_releases_link test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"api_entities_releases_link01", "api_entities_releases_link02", "api_entities_releases_link03", "project01", "project02", "project03", "release01", "release02", "release03"},
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
	entidEnvRaw := os.Getenv("GITLAB_TEST_API_ENTITIES_RELEASES_LINK_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"GITLAB_TEST_API_ENTITIES_RELEASES_LINK_ENTID": idmap,
		"GITLAB_TEST_LIVE":      "FALSE",
		"GITLAB_TEST_EXPLAIN":   "FALSE",
		"GITLAB_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["GITLAB_TEST_API_ENTITIES_RELEASES_LINK_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}
	// Add project_id alias for update test.
	if idmapResolved["project_id"] == nil {
		idmapResolved["project_id"] = idmapResolved["project01"]
	}
	// Add release_id alias for update test.
	if idmapResolved["release_id"] == nil {
		idmapResolved["release_id"] = idmapResolved["release01"]
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
