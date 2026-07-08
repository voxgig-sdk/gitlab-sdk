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

func TestTerraformStateEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.TerraformState(nil)
		if ent == nil {
			t.Fatal("expected non-nil TerraformStateEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := terraform_stateBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "terraform_state." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set GITLAB_TEST_TERRAFORM_STATE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		terraformStateRef01Ent := client.TerraformState(nil)
		terraformStateRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "terraform_state"}, setup.data), "terraform_state_ref01"))
		terraformStateRef01Data["name"] = setup.idmap["name01"]
		terraformStateRef01Data["project_id"] = setup.idmap["project01"]
		terraformStateRef01Data["state_id"] = setup.idmap["state01"]

		terraformStateRef01DataResult, err := terraformStateRef01Ent.Create(terraformStateRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		terraformStateRef01Data = core.ToMapAny(terraformStateRef01DataResult)
		if terraformStateRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

		// LOAD
		terraformStateRef01MatchDt0 := map[string]any{}
		terraformStateRef01DataDt0Loaded, err := terraformStateRef01Ent.Load(terraformStateRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if terraformStateRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

		// REMOVE
		terraformStateRef01MatchRm0 := map[string]any{
			"id": terraformStateRef01Data["id"],
		}
		_, err = terraformStateRef01Ent.Remove(terraformStateRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

	})
}

func terraform_stateBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "terraform_state", "TerraformStateTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read terraform_state test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse terraform_state test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"terraform_state01", "terraform_state02", "terraform_state03", "project01", "project02", "project03", "state01", "state02", "state03", "version01", "version02", "version03", "name01"},
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
	entidEnvRaw := os.Getenv("GITLAB_TEST_TERRAFORM_STATE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"GITLAB_TEST_TERRAFORM_STATE_ENTID": idmap,
		"GITLAB_TEST_LIVE":      "FALSE",
		"GITLAB_TEST_EXPLAIN":   "FALSE",
		"GITLAB_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["GITLAB_TEST_TERRAFORM_STATE_ENTID"])
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
