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

func TestApiEntitiesAccessRequesterEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.ApiEntitiesAccessRequester(nil)
		if ent == nil {
			t.Fatal("expected non-nil ApiEntitiesAccessRequesterEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := api_entities_access_requesterBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "api_entities_access_requester." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set GITLAB_TEST_API_ENTITIES_ACCESS_REQUESTER_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		apiEntitiesAccessRequesterRef01Ent := client.ApiEntitiesAccessRequester(nil)
		apiEntitiesAccessRequesterRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "api_entities_access_requester"}, setup.data), "api_entities_access_requester_ref01"))
		apiEntitiesAccessRequesterRef01Data["group_id"] = setup.idmap["group01"]
		apiEntitiesAccessRequesterRef01Data["project_id"] = setup.idmap["project01"]

		apiEntitiesAccessRequesterRef01DataResult, err := apiEntitiesAccessRequesterRef01Ent.Create(apiEntitiesAccessRequesterRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		apiEntitiesAccessRequesterRef01Data = core.ToMapAny(apiEntitiesAccessRequesterRef01DataResult)
		if apiEntitiesAccessRequesterRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if apiEntitiesAccessRequesterRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		apiEntitiesAccessRequesterRef01Match := map[string]any{
			"project_id": setup.idmap["project01"],
		}

		apiEntitiesAccessRequesterRef01ListResult, err := apiEntitiesAccessRequesterRef01Ent.List(apiEntitiesAccessRequesterRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		apiEntitiesAccessRequesterRef01List, apiEntitiesAccessRequesterRef01ListOk := apiEntitiesAccessRequesterRef01ListResult.([]any)
		if !apiEntitiesAccessRequesterRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", apiEntitiesAccessRequesterRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(apiEntitiesAccessRequesterRef01List), map[string]any{"id": apiEntitiesAccessRequesterRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		apiEntitiesAccessRequesterRef01DataUp0Up := map[string]any{
			"id": apiEntitiesAccessRequesterRef01Data["id"],
			"project_id": setup.idmap["project_id"],
		}

		apiEntitiesAccessRequesterRef01MarkdefUp0Name := "avatar_path"
		apiEntitiesAccessRequesterRef01MarkdefUp0Value := fmt.Sprintf("Mark01-api_entities_access_requester_ref01_%d", setup.now)
		apiEntitiesAccessRequesterRef01DataUp0Up[apiEntitiesAccessRequesterRef01MarkdefUp0Name] = apiEntitiesAccessRequesterRef01MarkdefUp0Value

		apiEntitiesAccessRequesterRef01ResdataUp0Result, err := apiEntitiesAccessRequesterRef01Ent.Update(apiEntitiesAccessRequesterRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		apiEntitiesAccessRequesterRef01ResdataUp0 := core.ToMapAny(apiEntitiesAccessRequesterRef01ResdataUp0Result)
		if apiEntitiesAccessRequesterRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if apiEntitiesAccessRequesterRef01ResdataUp0["id"] != apiEntitiesAccessRequesterRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if apiEntitiesAccessRequesterRef01ResdataUp0[apiEntitiesAccessRequesterRef01MarkdefUp0Name] != apiEntitiesAccessRequesterRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", apiEntitiesAccessRequesterRef01MarkdefUp0Name, apiEntitiesAccessRequesterRef01ResdataUp0[apiEntitiesAccessRequesterRef01MarkdefUp0Name])
		}

	})
}

func api_entities_access_requesterBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "api_entities_access_requester", "ApiEntitiesAccessRequesterTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read api_entities_access_requester test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse api_entities_access_requester test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"api_entities_access_requester01", "api_entities_access_requester02", "api_entities_access_requester03", "group01", "group02", "group03", "project01", "project02", "project03", "access_request01", "access_request02", "access_request03"},
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
	entidEnvRaw := os.Getenv("GITLAB_TEST_API_ENTITIES_ACCESS_REQUESTER_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"GITLAB_TEST_API_ENTITIES_ACCESS_REQUESTER_ENTID": idmap,
		"GITLAB_TEST_LIVE":      "FALSE",
		"GITLAB_TEST_EXPLAIN":   "FALSE",
		"GITLAB_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["GITLAB_TEST_API_ENTITIES_ACCESS_REQUESTER_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
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
