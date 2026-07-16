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

func TestApiEntitiesProjectsPackagesProtectionRuleEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.ApiEntitiesProjectsPackagesProtectionRule(nil)
		if ent == nil {
			t.Fatal("expected non-nil ApiEntitiesProjectsPackagesProtectionRuleEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"api_entities_projects_packages_protection_rule": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.ApiEntitiesProjectsPackagesProtectionRule(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.ApiEntitiesProjectsPackagesProtectionRule(nil).Stream("list", nil, nil) {
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
		setup := api_entities_projects_packages_protection_ruleBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "api_entities_projects_packages_protection_rule." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set GITLAB_TEST_API_ENTITIES_PROJECTS_PACKAGES_PROTECTION_RULE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		apiEntitiesProjectsPackagesProtectionRuleRef01Ent := client.ApiEntitiesProjectsPackagesProtectionRule(nil)
		apiEntitiesProjectsPackagesProtectionRuleRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "api_entities_projects_packages_protection_rule"}, setup.data), "api_entities_projects_packages_protection_rule_ref01"))
		apiEntitiesProjectsPackagesProtectionRuleRef01Data["project_id"] = setup.idmap["project01"]

		apiEntitiesProjectsPackagesProtectionRuleRef01DataResult, err := apiEntitiesProjectsPackagesProtectionRuleRef01Ent.Create(apiEntitiesProjectsPackagesProtectionRuleRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		apiEntitiesProjectsPackagesProtectionRuleRef01Data = core.ToMapAny(apiEntitiesProjectsPackagesProtectionRuleRef01DataResult)
		if apiEntitiesProjectsPackagesProtectionRuleRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if apiEntitiesProjectsPackagesProtectionRuleRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		apiEntitiesProjectsPackagesProtectionRuleRef01Match := map[string]any{
			"project_id": setup.idmap["project01"],
		}

		apiEntitiesProjectsPackagesProtectionRuleRef01ListResult, err := apiEntitiesProjectsPackagesProtectionRuleRef01Ent.List(apiEntitiesProjectsPackagesProtectionRuleRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		apiEntitiesProjectsPackagesProtectionRuleRef01List, apiEntitiesProjectsPackagesProtectionRuleRef01ListOk := apiEntitiesProjectsPackagesProtectionRuleRef01ListResult.([]any)
		if !apiEntitiesProjectsPackagesProtectionRuleRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", apiEntitiesProjectsPackagesProtectionRuleRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(apiEntitiesProjectsPackagesProtectionRuleRef01List), map[string]any{"id": apiEntitiesProjectsPackagesProtectionRuleRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		apiEntitiesProjectsPackagesProtectionRuleRef01DataUp0Up := map[string]any{
			"id": apiEntitiesProjectsPackagesProtectionRuleRef01Data["id"],
			"project_id": setup.idmap["project_id"],
		}

		apiEntitiesProjectsPackagesProtectionRuleRef01MarkdefUp0Name := "minimum_access_level_for_delete"
		apiEntitiesProjectsPackagesProtectionRuleRef01MarkdefUp0Value := fmt.Sprintf("Mark01-api_entities_projects_packages_protection_rule_ref01_%d", setup.now)
		apiEntitiesProjectsPackagesProtectionRuleRef01DataUp0Up[apiEntitiesProjectsPackagesProtectionRuleRef01MarkdefUp0Name] = apiEntitiesProjectsPackagesProtectionRuleRef01MarkdefUp0Value

		apiEntitiesProjectsPackagesProtectionRuleRef01ResdataUp0Result, err := apiEntitiesProjectsPackagesProtectionRuleRef01Ent.Update(apiEntitiesProjectsPackagesProtectionRuleRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		apiEntitiesProjectsPackagesProtectionRuleRef01ResdataUp0 := core.ToMapAny(apiEntitiesProjectsPackagesProtectionRuleRef01ResdataUp0Result)
		if apiEntitiesProjectsPackagesProtectionRuleRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if apiEntitiesProjectsPackagesProtectionRuleRef01ResdataUp0["id"] != apiEntitiesProjectsPackagesProtectionRuleRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if apiEntitiesProjectsPackagesProtectionRuleRef01ResdataUp0[apiEntitiesProjectsPackagesProtectionRuleRef01MarkdefUp0Name] != apiEntitiesProjectsPackagesProtectionRuleRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", apiEntitiesProjectsPackagesProtectionRuleRef01MarkdefUp0Name, apiEntitiesProjectsPackagesProtectionRuleRef01ResdataUp0[apiEntitiesProjectsPackagesProtectionRuleRef01MarkdefUp0Name])
		}

	})
}

func api_entities_projects_packages_protection_ruleBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "api_entities_projects_packages_protection_rule", "ApiEntitiesProjectsPackagesProtectionRuleTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read api_entities_projects_packages_protection_rule test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse api_entities_projects_packages_protection_rule test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"api_entities_projects_packages_protection_rule01", "api_entities_projects_packages_protection_rule02", "api_entities_projects_packages_protection_rule03", "project01", "project02", "project03"},
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
	entidEnvRaw := os.Getenv("GITLAB_TEST_API_ENTITIES_PROJECTS_PACKAGES_PROTECTION_RULE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"GITLAB_TEST_API_ENTITIES_PROJECTS_PACKAGES_PROTECTION_RULE_ENTID": idmap,
		"GITLAB_TEST_LIVE":      "FALSE",
		"GITLAB_TEST_EXPLAIN":   "FALSE",
		"GITLAB_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["GITLAB_TEST_API_ENTITIES_PROJECTS_PACKAGES_PROTECTION_RULE_ENTID"])
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
