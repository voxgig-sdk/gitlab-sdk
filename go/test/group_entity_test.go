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

func TestGroupEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Group(nil)
		if ent == nil {
			t.Fatal("expected non-nil GroupEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := groupBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "group." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set GITLAB_TEST_GROUP_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		groupRef01Ent := client.Group(nil)
		groupRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "group"}, setup.data), "group_ref01"))
		groupRef01Data["secret"] = setup.idmap["secret01"]

		groupRef01DataResult, err := groupRef01Ent.Create(groupRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		groupRef01Data = core.ToMapAny(groupRef01DataResult)
		if groupRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

		// UPDATE
		groupRef01DataUp0Up := map[string]any{
		}

		groupRef01ResdataUp0Result, err := groupRef01Ent.Update(groupRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		groupRef01ResdataUp0 := core.ToMapAny(groupRef01ResdataUp0Result)
		if groupRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}

		// LOAD
		groupRef01MatchDt0 := map[string]any{}
		groupRef01DataDt0Loaded, err := groupRef01Ent.Load(groupRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if groupRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

		// REMOVE
		groupRef01MatchRm0 := map[string]any{
			"id": groupRef01Data["id"],
		}
		_, err = groupRef01Ent.Remove(groupRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

	})
}

func groupBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "group", "GroupTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read group test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse group test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"group01", "group02", "group03", "billable_member01", "billable_member02", "billable_member03", "custom_attribute01", "custom_attribute02", "custom_attribute03", "member01", "member02", "member03", "share01", "share02", "share03", "ssh_certificate01", "ssh_certificate02", "ssh_certificate03", "upload01", "upload02", "upload03", "secret01"},
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
	entidEnvRaw := os.Getenv("GITLAB_TEST_GROUP_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"GITLAB_TEST_GROUP_ENTID": idmap,
		"GITLAB_TEST_LIVE":      "FALSE",
		"GITLAB_TEST_EXPLAIN":   "FALSE",
		"GITLAB_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["GITLAB_TEST_GROUP_ENTID"])
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
