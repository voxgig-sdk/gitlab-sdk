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

func TestApiEntitiesPagesDomainEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.ApiEntitiesPagesDomain(nil)
		if ent == nil {
			t.Fatal("expected non-nil ApiEntitiesPagesDomainEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := api_entities_pages_domainBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "api_entities_pages_domain." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set GITLAB_TEST_API_ENTITIES_PAGES_DOMAIN_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		apiEntitiesPagesDomainRef01Ent := client.ApiEntitiesPagesDomain(nil)
		apiEntitiesPagesDomainRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "api_entities_pages_domain"}, setup.data), "api_entities_pages_domain_ref01"))
		apiEntitiesPagesDomainRef01Data["project_id"] = setup.idmap["project01"]

		apiEntitiesPagesDomainRef01DataResult, err := apiEntitiesPagesDomainRef01Ent.Create(apiEntitiesPagesDomainRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		apiEntitiesPagesDomainRef01Data = core.ToMapAny(apiEntitiesPagesDomainRef01DataResult)
		if apiEntitiesPagesDomainRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

		// LIST
		apiEntitiesPagesDomainRef01Match := map[string]any{
			"project_id": setup.idmap["project01"],
		}

		apiEntitiesPagesDomainRef01ListResult, err := apiEntitiesPagesDomainRef01Ent.List(apiEntitiesPagesDomainRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		apiEntitiesPagesDomainRef01List, apiEntitiesPagesDomainRef01ListOk := apiEntitiesPagesDomainRef01ListResult.([]any)
		if !apiEntitiesPagesDomainRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", apiEntitiesPagesDomainRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(apiEntitiesPagesDomainRef01List), map[string]any{"id": apiEntitiesPagesDomainRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		apiEntitiesPagesDomainRef01DataUp0Up := map[string]any{
			"project_id": setup.idmap["project_id"],
		}

		apiEntitiesPagesDomainRef01MarkdefUp0Name := "auto_ssl_enabled"
		apiEntitiesPagesDomainRef01MarkdefUp0Value := fmt.Sprintf("Mark01-api_entities_pages_domain_ref01_%d", setup.now)
		apiEntitiesPagesDomainRef01DataUp0Up[apiEntitiesPagesDomainRef01MarkdefUp0Name] = apiEntitiesPagesDomainRef01MarkdefUp0Value

		apiEntitiesPagesDomainRef01ResdataUp0Result, err := apiEntitiesPagesDomainRef01Ent.Update(apiEntitiesPagesDomainRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		apiEntitiesPagesDomainRef01ResdataUp0 := core.ToMapAny(apiEntitiesPagesDomainRef01ResdataUp0Result)
		if apiEntitiesPagesDomainRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if apiEntitiesPagesDomainRef01ResdataUp0[apiEntitiesPagesDomainRef01MarkdefUp0Name] != apiEntitiesPagesDomainRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", apiEntitiesPagesDomainRef01MarkdefUp0Name, apiEntitiesPagesDomainRef01ResdataUp0[apiEntitiesPagesDomainRef01MarkdefUp0Name])
		}

		// LOAD
		apiEntitiesPagesDomainRef01MatchDt0 := map[string]any{}
		apiEntitiesPagesDomainRef01DataDt0Loaded, err := apiEntitiesPagesDomainRef01Ent.Load(apiEntitiesPagesDomainRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if apiEntitiesPagesDomainRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func api_entities_pages_domainBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "api_entities_pages_domain", "ApiEntitiesPagesDomainTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read api_entities_pages_domain test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse api_entities_pages_domain test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"api_entities_pages_domain01", "api_entities_pages_domain02", "api_entities_pages_domain03", "project01", "project02", "project03", "domain01", "domain02", "domain03"},
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
	entidEnvRaw := os.Getenv("GITLAB_TEST_API_ENTITIES_PAGES_DOMAIN_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"GITLAB_TEST_API_ENTITIES_PAGES_DOMAIN_ENTID": idmap,
		"GITLAB_TEST_LIVE":      "FALSE",
		"GITLAB_TEST_EXPLAIN":   "FALSE",
		"GITLAB_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["GITLAB_TEST_API_ENTITIES_PAGES_DOMAIN_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}
	// Add project_id alias for update test.
	if idmapResolved["project_id"] == nil {
		idmapResolved["project_id"] = idmapResolved["project01"]
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
