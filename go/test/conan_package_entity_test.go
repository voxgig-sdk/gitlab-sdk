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

func TestConanPackageEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.ConanPackage(nil)
		if ent == nil {
			t.Fatal("expected non-nil ConanPackageEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := conan_packageBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "conan_package." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set GITLAB_TEST_CONAN_PACKAGE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		conanPackageRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.conan_package", setup.data)))
		var conanPackageRef01Data map[string]any
		if len(conanPackageRef01DataRaw) > 0 {
			conanPackageRef01Data = core.ToMapAny(conanPackageRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = conanPackageRef01Data

		// UPDATE
		conanPackageRef01Ent := client.ConanPackage(nil)
		conanPackageRef01DataUp0Up := map[string]any{
			"file_id": setup.idmap["file_id"],
			"package_channel": setup.idmap["package_channel"],
			"package_username": setup.idmap["package_username"],
			"package_version": setup.idmap["package_version"],
			"recipe_revision": setup.idmap["recipe_revision"],
		}

		conanPackageRef01ResdataUp0Result, err := conanPackageRef01Ent.Update(conanPackageRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		conanPackageRef01ResdataUp0 := core.ToMapAny(conanPackageRef01ResdataUp0Result)
		if conanPackageRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}

		// LOAD
		conanPackageRef01MatchDt0 := map[string]any{}
		conanPackageRef01DataDt0Loaded, err := conanPackageRef01Ent.Load(conanPackageRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if conanPackageRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

		// REMOVE
		conanPackageRef01MatchRm0 := map[string]any{
			"id": conanPackageRef01Data["id"],
		}
		_, err = conanPackageRef01Ent.Remove(conanPackageRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

	})
}

func conan_packageBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "conan_package", "ConanPackageTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read conan_package test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse conan_package test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"conan_package01", "conan_package02", "conan_package03", "project01", "project02", "project03", "conan01", "conan02", "conan03", "file01", "file02", "file03", "export01", "export02", "export03", "package01", "package02", "package03", "revision01", "revision02", "revision03", "package_channel01", "package_username01", "package_version01", "recipe_revision01"},
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
	entidEnvRaw := os.Getenv("GITLAB_TEST_CONAN_PACKAGE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"GITLAB_TEST_CONAN_PACKAGE_ENTID": idmap,
		"GITLAB_TEST_LIVE":      "FALSE",
		"GITLAB_TEST_EXPLAIN":   "FALSE",
		"GITLAB_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["GITLAB_TEST_CONAN_PACKAGE_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}
	// Add file_id alias for update test.
	if idmapResolved["file_id"] == nil {
		idmapResolved["file_id"] = idmapResolved["file01"]
	}
	// Add package_channel alias for update test.
	if idmapResolved["package_channel"] == nil {
		idmapResolved["package_channel"] = idmapResolved["package_channel01"]
	}
	// Add package_username alias for update test.
	if idmapResolved["package_username"] == nil {
		idmapResolved["package_username"] = idmapResolved["package_username01"]
	}
	// Add package_version alias for update test.
	if idmapResolved["package_version"] == nil {
		idmapResolved["package_version"] = idmapResolved["package_version01"]
	}
	// Add recipe_revision alias for update test.
	if idmapResolved["recipe_revision"] == nil {
		idmapResolved["recipe_revision"] = idmapResolved["recipe_revision01"]
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
