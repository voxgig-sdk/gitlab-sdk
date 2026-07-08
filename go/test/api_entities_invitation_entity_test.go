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

func TestApiEntitiesInvitationEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.ApiEntitiesInvitation(nil)
		if ent == nil {
			t.Fatal("expected non-nil ApiEntitiesInvitationEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := api_entities_invitationBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "api_entities_invitation." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set GITLAB_TEST_API_ENTITIES_INVITATION_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		apiEntitiesInvitationRef01Ent := client.ApiEntitiesInvitation(nil)
		apiEntitiesInvitationRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "api_entities_invitation"}, setup.data), "api_entities_invitation_ref01"))
		apiEntitiesInvitationRef01Data["group_id"] = setup.idmap["group01"]
		apiEntitiesInvitationRef01Data["project_id"] = setup.idmap["project01"]

		apiEntitiesInvitationRef01DataResult, err := apiEntitiesInvitationRef01Ent.Create(apiEntitiesInvitationRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		apiEntitiesInvitationRef01Data = core.ToMapAny(apiEntitiesInvitationRef01DataResult)
		if apiEntitiesInvitationRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

		// LIST
		apiEntitiesInvitationRef01Match := map[string]any{
			"project_id": setup.idmap["project01"],
		}

		apiEntitiesInvitationRef01ListResult, err := apiEntitiesInvitationRef01Ent.List(apiEntitiesInvitationRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		apiEntitiesInvitationRef01List, apiEntitiesInvitationRef01ListOk := apiEntitiesInvitationRef01ListResult.([]any)
		if !apiEntitiesInvitationRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", apiEntitiesInvitationRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(apiEntitiesInvitationRef01List), map[string]any{"id": apiEntitiesInvitationRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		apiEntitiesInvitationRef01DataUp0Up := map[string]any{
			"project_id": setup.idmap["project_id"],
		}

		apiEntitiesInvitationRef01MarkdefUp0Name := "access_level"
		apiEntitiesInvitationRef01MarkdefUp0Value := fmt.Sprintf("Mark01-api_entities_invitation_ref01_%d", setup.now)
		apiEntitiesInvitationRef01DataUp0Up[apiEntitiesInvitationRef01MarkdefUp0Name] = apiEntitiesInvitationRef01MarkdefUp0Value

		apiEntitiesInvitationRef01ResdataUp0Result, err := apiEntitiesInvitationRef01Ent.Update(apiEntitiesInvitationRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		apiEntitiesInvitationRef01ResdataUp0 := core.ToMapAny(apiEntitiesInvitationRef01ResdataUp0Result)
		if apiEntitiesInvitationRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if apiEntitiesInvitationRef01ResdataUp0[apiEntitiesInvitationRef01MarkdefUp0Name] != apiEntitiesInvitationRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", apiEntitiesInvitationRef01MarkdefUp0Name, apiEntitiesInvitationRef01ResdataUp0[apiEntitiesInvitationRef01MarkdefUp0Name])
		}

	})
}

func api_entities_invitationBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "api_entities_invitation", "ApiEntitiesInvitationTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read api_entities_invitation test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse api_entities_invitation test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"api_entities_invitation01", "api_entities_invitation02", "api_entities_invitation03", "group01", "group02", "group03", "project01", "project02", "project03"},
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
	entidEnvRaw := os.Getenv("GITLAB_TEST_API_ENTITIES_INVITATION_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"GITLAB_TEST_API_ENTITIES_INVITATION_ENTID": idmap,
		"GITLAB_TEST_LIVE":      "FALSE",
		"GITLAB_TEST_EXPLAIN":   "FALSE",
		"GITLAB_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["GITLAB_TEST_API_ENTITIES_INVITATION_ENTID"])
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
