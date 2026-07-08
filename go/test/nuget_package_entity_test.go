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

func TestNugetPackageEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.NugetPackage(nil)
		if ent == nil {
			t.Fatal("expected non-nil NugetPackageEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := nuget_packageBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "nuget_package." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set GITLAB_TEST_NUGET_PACKAGE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		nugetPackageRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.nuget_package", setup.data)))
		var nugetPackageRef01Data map[string]any
		if len(nugetPackageRef01DataRaw) > 0 {
			nugetPackageRef01Data = core.ToMapAny(nugetPackageRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = nugetPackageRef01Data

		// LIST
		nugetPackageRef01Ent := client.NugetPackage(nil)
		nugetPackageRef01Match := map[string]any{
			"project_id": setup.idmap["project01"],
		}

		nugetPackageRef01ListResult, err := nugetPackageRef01Ent.List(nugetPackageRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		_, nugetPackageRef01ListOk := nugetPackageRef01ListResult.([]any)
		if !nugetPackageRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", nugetPackageRef01ListResult)
		}

		// UPDATE
		nugetPackageRef01DataUp0Up := map[string]any{
			"id": nugetPackageRef01Data["id"],
		}

		nugetPackageRef01MarkdefUp0Name := "lower"
		nugetPackageRef01MarkdefUp0Value := fmt.Sprintf("Mark01-nuget_package_ref01_%d", setup.now)
		nugetPackageRef01DataUp0Up[nugetPackageRef01MarkdefUp0Name] = nugetPackageRef01MarkdefUp0Value

		nugetPackageRef01ResdataUp0Result, err := nugetPackageRef01Ent.Update(nugetPackageRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		nugetPackageRef01ResdataUp0 := core.ToMapAny(nugetPackageRef01ResdataUp0Result)
		if nugetPackageRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if nugetPackageRef01ResdataUp0["id"] != nugetPackageRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if nugetPackageRef01ResdataUp0[nugetPackageRef01MarkdefUp0Name] != nugetPackageRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", nugetPackageRef01MarkdefUp0Name, nugetPackageRef01ResdataUp0[nugetPackageRef01MarkdefUp0Name])
		}

		// LOAD
		nugetPackageRef01MatchDt0 := map[string]any{
			"id": nugetPackageRef01Data["id"],
		}
		nugetPackageRef01DataDt0Loaded, err := nugetPackageRef01Ent.Load(nugetPackageRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		nugetPackageRef01DataDt0LoadResult := core.ToMapAny(nugetPackageRef01DataDt0Loaded)
		if nugetPackageRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if nugetPackageRef01DataDt0LoadResult["id"] != nugetPackageRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		nugetPackageRef01MatchRm0 := map[string]any{
			"id": nugetPackageRef01Data["id"],
		}
		_, err = nugetPackageRef01Ent.Remove(nugetPackageRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		nugetPackageRef01MatchRt0 := map[string]any{
			"project_id": setup.idmap["project01"],
		}

		nugetPackageRef01ListRt0Result, err := nugetPackageRef01Ent.List(nugetPackageRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		_, nugetPackageRef01ListRt0Ok := nugetPackageRef01ListRt0Result.([]any)
		if !nugetPackageRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", nugetPackageRef01ListRt0Result)
		}

	})
}

func nuget_packageBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "nuget_package", "NugetPackageTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read nuget_package test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse nuget_package test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"nuget_package01", "nuget_package02", "nuget_package03", "group01", "group02", "group03", "project01", "project02", "project03"},
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
	entidEnvRaw := os.Getenv("GITLAB_TEST_NUGET_PACKAGE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"GITLAB_TEST_NUGET_PACKAGE_ENTID": idmap,
		"GITLAB_TEST_LIVE":      "FALSE",
		"GITLAB_TEST_EXPLAIN":   "FALSE",
		"GITLAB_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["GITLAB_TEST_NUGET_PACKAGE_ENTID"])
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
