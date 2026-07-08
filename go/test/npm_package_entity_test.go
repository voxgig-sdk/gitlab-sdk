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

func TestNpmPackageEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.NpmPackage(nil)
		if ent == nil {
			t.Fatal("expected non-nil NpmPackageEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := npm_packageBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "npm_package." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set GITLAB_TEST_NPM_PACKAGE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		npmPackageRef01Ent := client.NpmPackage(nil)
		npmPackageRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "npm_package"}, setup.data), "npm_package_ref01"))
		npmPackageRef01Data["group_id"] = setup.idmap["group01"]
		npmPackageRef01Data["project_id"] = setup.idmap["project01"]

		npmPackageRef01DataResult, err := npmPackageRef01Ent.Create(npmPackageRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		npmPackageRef01Data = core.ToMapAny(npmPackageRef01DataResult)
		if npmPackageRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

		// UPDATE
		npmPackageRef01DataUp0Up := map[string]any{
		}

		npmPackageRef01ResdataUp0Result, err := npmPackageRef01Ent.Update(npmPackageRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		npmPackageRef01ResdataUp0 := core.ToMapAny(npmPackageRef01ResdataUp0Result)
		if npmPackageRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}

		// LOAD
		npmPackageRef01MatchDt0 := map[string]any{}
		npmPackageRef01DataDt0Loaded, err := npmPackageRef01Ent.Load(npmPackageRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if npmPackageRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

		// REMOVE
		npmPackageRef01MatchRm0 := map[string]any{
			"id": npmPackageRef01Data["id"],
		}
		_, err = npmPackageRef01Ent.Remove(npmPackageRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

	})
}

func npm_packageBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "npm_package", "NpmPackageTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read npm_package test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse npm_package test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"npm_package01", "npm_package02", "npm_package03", "group01", "group02", "group03", "project01", "project02", "project03", "dist_tag01", "dist_tag02", "dist_tag03"},
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
	entidEnvRaw := os.Getenv("GITLAB_TEST_NPM_PACKAGE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"GITLAB_TEST_NPM_PACKAGE_ENTID": idmap,
		"GITLAB_TEST_LIVE":      "FALSE",
		"GITLAB_TEST_EXPLAIN":   "FALSE",
		"GITLAB_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["GITLAB_TEST_NPM_PACKAGE_ENTID"])
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
