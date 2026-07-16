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

func TestEeApiEntitiesAuditEventEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.EeApiEntitiesAuditEvent(nil)
		if ent == nil {
			t.Fatal("expected non-nil EeApiEntitiesAuditEventEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"ee_api_entities_audit_event": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.EeApiEntitiesAuditEvent(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.EeApiEntitiesAuditEvent(nil).Stream("list", nil, nil) {
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
		setup := ee_api_entities_audit_eventBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"list", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "ee_api_entities_audit_event." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set GITLAB_TEST_EE_API_ENTITIES_AUDIT_EVENT_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		eeApiEntitiesAuditEventRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.ee_api_entities_audit_event", setup.data)))
		var eeApiEntitiesAuditEventRef01Data map[string]any
		if len(eeApiEntitiesAuditEventRef01DataRaw) > 0 {
			eeApiEntitiesAuditEventRef01Data = core.ToMapAny(eeApiEntitiesAuditEventRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = eeApiEntitiesAuditEventRef01Data

		// LIST
		eeApiEntitiesAuditEventRef01Ent := client.EeApiEntitiesAuditEvent(nil)
		eeApiEntitiesAuditEventRef01Match := map[string]any{
			"project_id": setup.idmap["project01"],
		}

		eeApiEntitiesAuditEventRef01ListResult, err := eeApiEntitiesAuditEventRef01Ent.List(eeApiEntitiesAuditEventRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		_, eeApiEntitiesAuditEventRef01ListOk := eeApiEntitiesAuditEventRef01ListResult.([]any)
		if !eeApiEntitiesAuditEventRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", eeApiEntitiesAuditEventRef01ListResult)
		}

		// LOAD
		eeApiEntitiesAuditEventRef01MatchDt0 := map[string]any{
			"id": eeApiEntitiesAuditEventRef01Data["id"],
		}
		eeApiEntitiesAuditEventRef01DataDt0Loaded, err := eeApiEntitiesAuditEventRef01Ent.Load(eeApiEntitiesAuditEventRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		eeApiEntitiesAuditEventRef01DataDt0LoadResult := core.ToMapAny(eeApiEntitiesAuditEventRef01DataDt0Loaded)
		if eeApiEntitiesAuditEventRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if eeApiEntitiesAuditEventRef01DataDt0LoadResult["id"] != eeApiEntitiesAuditEventRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func ee_api_entities_audit_eventBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "ee_api_entities_audit_event", "EeApiEntitiesAuditEventTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read ee_api_entities_audit_event test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse ee_api_entities_audit_event test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"ee_api_entities_audit_event01", "ee_api_entities_audit_event02", "ee_api_entities_audit_event03", "group01", "group02", "group03", "project01", "project02", "project03"},
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
	entidEnvRaw := os.Getenv("GITLAB_TEST_EE_API_ENTITIES_AUDIT_EVENT_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"GITLAB_TEST_EE_API_ENTITIES_AUDIT_EVENT_ENTID": idmap,
		"GITLAB_TEST_LIVE":      "FALSE",
		"GITLAB_TEST_EXPLAIN":   "FALSE",
		"GITLAB_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["GITLAB_TEST_EE_API_ENTITIES_AUDIT_EVENT_ENTID"])
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
