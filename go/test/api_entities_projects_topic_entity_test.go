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

func TestApiEntitiesProjectsTopicEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.ApiEntitiesProjectsTopic(nil)
		if ent == nil {
			t.Fatal("expected non-nil ApiEntitiesProjectsTopicEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := api_entities_projects_topicBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "api_entities_projects_topic." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set GITLAB_TEST_API_ENTITIES_PROJECTS_TOPIC_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		apiEntitiesProjectsTopicRef01Ent := client.ApiEntitiesProjectsTopic(nil)
		apiEntitiesProjectsTopicRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "api_entities_projects_topic"}, setup.data), "api_entities_projects_topic_ref01"))

		apiEntitiesProjectsTopicRef01DataResult, err := apiEntitiesProjectsTopicRef01Ent.Create(apiEntitiesProjectsTopicRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		apiEntitiesProjectsTopicRef01Data = core.ToMapAny(apiEntitiesProjectsTopicRef01DataResult)
		if apiEntitiesProjectsTopicRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if apiEntitiesProjectsTopicRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// UPDATE
		apiEntitiesProjectsTopicRef01DataUp0Up := map[string]any{
			"id": apiEntitiesProjectsTopicRef01Data["id"],
		}

		apiEntitiesProjectsTopicRef01MarkdefUp0Name := "avatar_url"
		apiEntitiesProjectsTopicRef01MarkdefUp0Value := fmt.Sprintf("Mark01-api_entities_projects_topic_ref01_%d", setup.now)
		apiEntitiesProjectsTopicRef01DataUp0Up[apiEntitiesProjectsTopicRef01MarkdefUp0Name] = apiEntitiesProjectsTopicRef01MarkdefUp0Value

		apiEntitiesProjectsTopicRef01ResdataUp0Result, err := apiEntitiesProjectsTopicRef01Ent.Update(apiEntitiesProjectsTopicRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		apiEntitiesProjectsTopicRef01ResdataUp0 := core.ToMapAny(apiEntitiesProjectsTopicRef01ResdataUp0Result)
		if apiEntitiesProjectsTopicRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if apiEntitiesProjectsTopicRef01ResdataUp0["id"] != apiEntitiesProjectsTopicRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if apiEntitiesProjectsTopicRef01ResdataUp0[apiEntitiesProjectsTopicRef01MarkdefUp0Name] != apiEntitiesProjectsTopicRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", apiEntitiesProjectsTopicRef01MarkdefUp0Name, apiEntitiesProjectsTopicRef01ResdataUp0[apiEntitiesProjectsTopicRef01MarkdefUp0Name])
		}

		// LOAD
		apiEntitiesProjectsTopicRef01MatchDt0 := map[string]any{
			"id": apiEntitiesProjectsTopicRef01Data["id"],
		}
		apiEntitiesProjectsTopicRef01DataDt0Loaded, err := apiEntitiesProjectsTopicRef01Ent.Load(apiEntitiesProjectsTopicRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		apiEntitiesProjectsTopicRef01DataDt0LoadResult := core.ToMapAny(apiEntitiesProjectsTopicRef01DataDt0Loaded)
		if apiEntitiesProjectsTopicRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if apiEntitiesProjectsTopicRef01DataDt0LoadResult["id"] != apiEntitiesProjectsTopicRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func api_entities_projects_topicBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "api_entities_projects_topic", "ApiEntitiesProjectsTopicTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read api_entities_projects_topic test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse api_entities_projects_topic test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"api_entities_projects_topic01", "api_entities_projects_topic02", "api_entities_projects_topic03"},
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
	entidEnvRaw := os.Getenv("GITLAB_TEST_API_ENTITIES_PROJECTS_TOPIC_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"GITLAB_TEST_API_ENTITIES_PROJECTS_TOPIC_ENTID": idmap,
		"GITLAB_TEST_LIVE":      "FALSE",
		"GITLAB_TEST_EXPLAIN":   "FALSE",
		"GITLAB_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["GITLAB_TEST_API_ENTITIES_PROJECTS_TOPIC_ENTID"])
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
