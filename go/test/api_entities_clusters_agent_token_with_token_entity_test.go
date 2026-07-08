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

func TestApiEntitiesClustersAgentTokenWithTokenEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.ApiEntitiesClustersAgentTokenWithToken(nil)
		if ent == nil {
			t.Fatal("expected non-nil ApiEntitiesClustersAgentTokenWithTokenEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := api_entities_clusters_agent_token_with_tokenBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "api_entities_clusters_agent_token_with_token." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set GITLAB_TEST_API_ENTITIES_CLUSTERS_AGENT_TOKEN_WITH_TOKEN_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		apiEntitiesClustersAgentTokenWithTokenRef01Ent := client.ApiEntitiesClustersAgentTokenWithToken(nil)
		apiEntitiesClustersAgentTokenWithTokenRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "api_entities_clusters_agent_token_with_token"}, setup.data), "api_entities_clusters_agent_token_with_token_ref01"))
		apiEntitiesClustersAgentTokenWithTokenRef01Data["cluster_agent_id"] = setup.idmap["cluster_agent01"]
		apiEntitiesClustersAgentTokenWithTokenRef01Data["project_id"] = setup.idmap["project01"]

		apiEntitiesClustersAgentTokenWithTokenRef01DataResult, err := apiEntitiesClustersAgentTokenWithTokenRef01Ent.Create(apiEntitiesClustersAgentTokenWithTokenRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		apiEntitiesClustersAgentTokenWithTokenRef01Data = core.ToMapAny(apiEntitiesClustersAgentTokenWithTokenRef01DataResult)
		if apiEntitiesClustersAgentTokenWithTokenRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

	})
}

func api_entities_clusters_agent_token_with_tokenBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "api_entities_clusters_agent_token_with_token", "ApiEntitiesClustersAgentTokenWithTokenTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read api_entities_clusters_agent_token_with_token test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse api_entities_clusters_agent_token_with_token test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"api_entities_clusters_agent_token_with_token01", "api_entities_clusters_agent_token_with_token02", "api_entities_clusters_agent_token_with_token03", "project01", "project02", "project03", "cluster_agent01", "cluster_agent02", "cluster_agent03"},
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
	entidEnvRaw := os.Getenv("GITLAB_TEST_API_ENTITIES_CLUSTERS_AGENT_TOKEN_WITH_TOKEN_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"GITLAB_TEST_API_ENTITIES_CLUSTERS_AGENT_TOKEN_WITH_TOKEN_ENTID": idmap,
		"GITLAB_TEST_LIVE":      "FALSE",
		"GITLAB_TEST_EXPLAIN":   "FALSE",
		"GITLAB_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["GITLAB_TEST_API_ENTITIES_CLUSTERS_AGENT_TOKEN_WITH_TOKEN_ENTID"])
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
