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

func TestApiEntitiesPackagesConanPackageRevisionEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.ApiEntitiesPackagesConanPackageRevision(nil)
		if ent == nil {
			t.Fatal("expected non-nil ApiEntitiesPackagesConanPackageRevisionEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"api_entities_packages_conan_package_revision": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.ApiEntitiesPackagesConanPackageRevision(nil).Stream("list", nil, nil) {
			seen = append(seen, item)
		}
		if len(seen) != 3 {
			t.Fatalf("expected 3 streamed items, got %d", len(seen))
		}

		// Inbound: streaming active -> yields each item from the feature iterator.
		hasStreaming := false
		if fm, ok := core.MakeConfig()["feature"].(map[string]any); ok {
			_, hasStreaming = fm["streaming"]
		}
		if hasStreaming {
			streamSdk := sdk.TestSDK(seed, map[string]any{
				"feature": map[string]any{"streaming": map[string]any{"active": true}},
			})
			var got []any
			for item := range streamSdk.ApiEntitiesPackagesConanPackageRevision(nil).Stream("list", nil, nil) {
				if sub, ok := item.([]any); ok {
					got = append(got, sub...)
				} else {
					got = append(got, item)
				}
			}
			if len(got) != 3 {
				t.Fatalf("expected 3 items via streaming feature, got %d", len(got))
			}
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := api_entities_packages_conan_package_revisionBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"list"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "api_entities_packages_conan_package_revision." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set GITLAB_TEST_API_ENTITIES_PACKAGES_CONAN_PACKAGE_REVISION_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		apiEntitiesPackagesConanPackageRevisionRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.api_entities_packages_conan_package_revision", setup.data)))
		var apiEntitiesPackagesConanPackageRevisionRef01Data map[string]any
		if len(apiEntitiesPackagesConanPackageRevisionRef01DataRaw) > 0 {
			apiEntitiesPackagesConanPackageRevisionRef01Data = core.ToMapAny(apiEntitiesPackagesConanPackageRevisionRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = apiEntitiesPackagesConanPackageRevisionRef01Data

		// LIST
		apiEntitiesPackagesConanPackageRevisionRef01Ent := client.ApiEntitiesPackagesConanPackageRevision(nil)
		apiEntitiesPackagesConanPackageRevisionRef01Match := map[string]any{
			"conan_id": setup.idmap["conan01"],
			"conan_package_reference": setup.idmap["conan_package_reference01"],
			"package_channel": setup.idmap["package_channel01"],
			"package_username": setup.idmap["package_username01"],
			"package_version": setup.idmap["package_version01"],
			"project_id": setup.idmap["project01"],
			"revision_id": setup.idmap["revision01"],
		}

		apiEntitiesPackagesConanPackageRevisionRef01ListResult, err := apiEntitiesPackagesConanPackageRevisionRef01Ent.List(apiEntitiesPackagesConanPackageRevisionRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		_, apiEntitiesPackagesConanPackageRevisionRef01ListOk := apiEntitiesPackagesConanPackageRevisionRef01ListResult.([]any)
		if !apiEntitiesPackagesConanPackageRevisionRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", apiEntitiesPackagesConanPackageRevisionRef01ListResult)
		}

	})
}

func api_entities_packages_conan_package_revisionBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "api_entities_packages_conan_package_revision", "ApiEntitiesPackagesConanPackageRevisionTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read api_entities_packages_conan_package_revision test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse api_entities_packages_conan_package_revision test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"api_entities_packages_conan_package_revision01", "api_entities_packages_conan_package_revision02", "api_entities_packages_conan_package_revision03", "project01", "project02", "project03", "conan01", "conan02", "conan03", "revision01", "revision02", "revision03", "package01", "package02", "package03", "conan_package_reference01", "package_channel01", "package_username01", "package_version01"},
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
	entidEnvRaw := os.Getenv("GITLAB_TEST_API_ENTITIES_PACKAGES_CONAN_PACKAGE_REVISION_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"GITLAB_TEST_API_ENTITIES_PACKAGES_CONAN_PACKAGE_REVISION_ENTID": idmap,
		"GITLAB_TEST_LIVE":      "FALSE",
		"GITLAB_TEST_EXPLAIN":   "FALSE",
		"GITLAB_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["GITLAB_TEST_API_ENTITIES_PACKAGES_CONAN_PACKAGE_REVISION_ENTID"])
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
