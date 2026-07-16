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

func TestProjectsJobTokenScopeEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.ProjectsJobTokenScope(nil)
		if ent == nil {
			t.Fatal("expected non-nil ProjectsJobTokenScopeEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := projects_job_token_scopeBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"update"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "projects_job_token_scope." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set GITLAB_TEST_PROJECTS_JOB_TOKEN_SCOPE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		projectsJobTokenScopeRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.projects_job_token_scope", setup.data)))
		var projectsJobTokenScopeRef01Data map[string]any
		if len(projectsJobTokenScopeRef01DataRaw) > 0 {
			projectsJobTokenScopeRef01Data = core.ToMapAny(projectsJobTokenScopeRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = projectsJobTokenScopeRef01Data

		// UPDATE
		projectsJobTokenScopeRef01Ent := client.ProjectsJobTokenScope(nil)
		projectsJobTokenScopeRef01DataUp0Up := map[string]any{
		}

		projectsJobTokenScopeRef01ResdataUp0Result, err := projectsJobTokenScopeRef01Ent.Update(projectsJobTokenScopeRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		projectsJobTokenScopeRef01ResdataUp0 := core.ToMapAny(projectsJobTokenScopeRef01ResdataUp0Result)
		if projectsJobTokenScopeRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}

	})
}

func projects_job_token_scopeBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "projects_job_token_scope", "ProjectsJobTokenScopeTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read projects_job_token_scope test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse projects_job_token_scope test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"projects_job_token_scope01", "projects_job_token_scope02", "projects_job_token_scope03", "project01", "project02", "project03", "allowlist01", "allowlist02", "allowlist03", "groups_allowlist01", "groups_allowlist02", "groups_allowlist03"},
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
	entidEnvRaw := os.Getenv("GITLAB_TEST_PROJECTS_JOB_TOKEN_SCOPE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"GITLAB_TEST_PROJECTS_JOB_TOKEN_SCOPE_ENTID": idmap,
		"GITLAB_TEST_LIVE":      "FALSE",
		"GITLAB_TEST_EXPLAIN":   "FALSE",
		"GITLAB_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["GITLAB_TEST_PROJECTS_JOB_TOKEN_SCOPE_ENTID"])
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
