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

func TestProjectEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Project(nil)
		if ent == nil {
			t.Fatal("expected non-nil ProjectEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := projectBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "project." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set GITLAB_TEST_PROJECT_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		projectRef01Ent := client.Project(nil)
		projectRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "project"}, setup.data), "project_ref01"))
		projectRef01Data["hook_id"] = setup.idmap["hook01"]
		projectRef01Data["merge_request_id"] = setup.idmap["merge_request01"]
		projectRef01Data["pipeline_schedule_id"] = setup.idmap["pipeline_schedule01"]
		projectRef01Data["secret"] = setup.idmap["secret01"]

		projectRef01DataResult, err := projectRef01Ent.Create(projectRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		projectRef01Data = core.ToMapAny(projectRef01DataResult)
		if projectRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if projectRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// UPDATE
		projectRef01DataUp0Up := map[string]any{
			"id": projectRef01Data["id"],
		}

		projectRef01MarkdefUp0Name := "before_sha"
		projectRef01MarkdefUp0Value := fmt.Sprintf("Mark01-project_ref01_%d", setup.now)
		projectRef01DataUp0Up[projectRef01MarkdefUp0Name] = projectRef01MarkdefUp0Value

		projectRef01ResdataUp0Result, err := projectRef01Ent.Update(projectRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		projectRef01ResdataUp0 := core.ToMapAny(projectRef01ResdataUp0Result)
		if projectRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if projectRef01ResdataUp0["id"] != projectRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if projectRef01ResdataUp0[projectRef01MarkdefUp0Name] != projectRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", projectRef01MarkdefUp0Name, projectRef01ResdataUp0[projectRef01MarkdefUp0Name])
		}

		// LOAD
		projectRef01MatchDt0 := map[string]any{
			"id": projectRef01Data["id"],
		}
		projectRef01DataDt0Loaded, err := projectRef01Ent.Load(projectRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		projectRef01DataDt0LoadResult := core.ToMapAny(projectRef01DataDt0Loaded)
		if projectRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if projectRef01DataDt0LoadResult["id"] != projectRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		projectRef01MatchRm0 := map[string]any{
			"id": projectRef01Data["id"],
		}
		_, err = projectRef01Ent.Remove(projectRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

	})
}

func projectBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "project", "ProjectTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read project test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse project test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"project01", "project02", "project03", "custom_attribute01", "custom_attribute02", "custom_attribute03", "hook01", "hook02", "hook03", "import_project_member01", "import_project_member02", "import_project_member03", "issue01", "issue02", "issue03", "artifact01", "artifact02", "artifact03", "job01", "job02", "job03", "merge_request01", "merge_request02", "merge_request03", "domain01", "domain02", "domain03", "pipeline_schedule01", "pipeline_schedule02", "pipeline_schedule03", "pipeline01", "pipeline02", "pipeline03", "protected_branch01", "protected_branch02", "protected_branch03", "rule01", "rule02", "rule03", "blob01", "blob02", "blob03", "file01", "file02", "file03", "share01", "share02", "share03", "trigger01", "trigger02", "trigger03", "upload01", "upload02", "upload03", "custom_header01", "custom_header02", "custom_header03", "event01", "event02", "event03", "test01", "test02", "test03", "url_variable01", "url_variable02", "url_variable03", "draft_note01", "draft_note02", "draft_note03", "variable01", "variable02", "variable03", "secret01"},
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
	entidEnvRaw := os.Getenv("GITLAB_TEST_PROJECT_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"GITLAB_TEST_PROJECT_ENTID": idmap,
		"GITLAB_TEST_LIVE":      "FALSE",
		"GITLAB_TEST_EXPLAIN":   "FALSE",
		"GITLAB_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["GITLAB_TEST_PROJECT_ENTID"])
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
