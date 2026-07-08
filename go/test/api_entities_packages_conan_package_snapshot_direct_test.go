package sdktest

import (
	"encoding/json"
	"os"
	"strings"
	"testing"

	sdk "github.com/voxgig-sdk/gitlab-sdk/go"
	"github.com/voxgig-sdk/gitlab-sdk/go/core"
)

func TestApiEntitiesPackagesConanPackageSnapshotDirect(t *testing.T) {
	t.Run("direct-load-api_entities_packages_conan_package_snapshot", func(t *testing.T) {
		setup := api_entities_packages_conan_package_snapshotDirectSetup(map[string]any{"id": "direct01"})
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		if _shouldSkip, _reason := isControlSkipped("direct", "direct-load-api_entities_packages_conan_package_snapshot", _mode); _shouldSkip {
			if _reason == "" {
				_reason = "skipped via sdk-test-control.json"
			}
			t.Skip(_reason)
			return
		}
		if setup.live {
			for _, _liveKey := range []string{"conan_id01", "conan_package_reference01", "package_channel01", "package_username01", "package_version01", "project_id01"} {
				if v := setup.idmap[_liveKey]; v == nil {
					t.Skipf("live test needs %s via *_ENTID env var (synthetic IDs only)", _liveKey)
					return
				}
			}
		}
		client := setup.client

		params := map[string]any{}
		query := map[string]any{}
		if setup.live {
		} else {
			params["conan_id"] = "direct01"
			params["conan_package_reference"] = "direct02"
			params["package_channel"] = "direct03"
			params["package_username"] = "direct04"
			params["package_version"] = "direct05"
			params["project_id"] = "direct06"
		}

		result, err := client.Direct(map[string]any{
			"path":   "api/v4/projects/{project_id}/packages/conan/v1/conans/{conan_id}/{package_version}/{package_username}/{package_channel}/packages/{conan_package_reference}",
			"method": "GET",
			"params": params,
			"query":  query,
		})
		if setup.live {
			// Live mode is lenient: synthetic IDs frequently 4xx. Skip
			// rather than fail when the load endpoint isn't reachable with
			// the IDs we can construct from setup.idmap.
			if err != nil {
				t.Skipf("load call failed (likely synthetic IDs against live API): %v", err)
			}
			if result["ok"] != true {
				t.Skipf("load call not ok (likely synthetic IDs against live API): %v", result)
			}
			status := core.ToInt(result["status"])
			if status < 200 || status >= 300 {
				t.Skipf("expected 2xx status, got %v", result["status"])
			}
		} else {
			if err != nil {
				t.Fatalf("direct failed: %v", err)
			}
			if result["ok"] != true {
				t.Fatalf("expected ok to be true, got %v", result["ok"])
			}
			if core.ToInt(result["status"]) != 200 {
				t.Fatalf("expected status 200, got %v", result["status"])
			}
			if result["data"] == nil {
				t.Fatal("expected data to be non-nil")
			}
		}

		if !setup.live {
			if dataMap, ok := result["data"].(map[string]any); ok {
				if dataMap["id"] != "direct01" {
					t.Fatalf("expected data.id to be direct01, got %v", dataMap["id"])
				}
			}

			if len(*setup.calls) != 1 {
				t.Fatalf("expected 1 call, got %d", len(*setup.calls))
			}
			call := (*setup.calls)[0]
			if initMap, ok := call["init"].(map[string]any); ok {
				if initMap["method"] != "GET" {
					t.Fatalf("expected method GET, got %v", initMap["method"])
				}
			}
			if url, ok := call["url"].(string); ok {
				if !strings.Contains(url, "direct01") {
					t.Fatalf("expected url to contain direct01, got %v", url)
				}
				if !strings.Contains(url, "direct02") {
					t.Fatalf("expected url to contain direct02, got %v", url)
				}
				if !strings.Contains(url, "direct03") {
					t.Fatalf("expected url to contain direct03, got %v", url)
				}
				if !strings.Contains(url, "direct04") {
					t.Fatalf("expected url to contain direct04, got %v", url)
				}
				if !strings.Contains(url, "direct05") {
					t.Fatalf("expected url to contain direct05, got %v", url)
				}
				if !strings.Contains(url, "direct06") {
					t.Fatalf("expected url to contain direct06, got %v", url)
				}
			}
		}
	})

}

type api_entities_packages_conan_package_snapshotDirectSetupResult struct {
	client *sdk.GitlabSDK
	calls  *[]map[string]any
	live   bool
	idmap  map[string]any
}

func api_entities_packages_conan_package_snapshotDirectSetup(mockres any) *api_entities_packages_conan_package_snapshotDirectSetupResult {
	loadEnvLocal()

	calls := &[]map[string]any{}

	env := envOverride(map[string]any{
		"GITLAB_TEST_API_ENTITIES_PACKAGES_CONAN_PACKAGE_SNAPSHOT_ENTID": map[string]any{},
		"GITLAB_TEST_LIVE":    "FALSE",
		"GITLAB_APIKEY":       "NONE",
	})

	live := env["GITLAB_TEST_LIVE"] == "TRUE"

	if live {
		mergedOpts := map[string]any{
			"apikey": env["GITLAB_APIKEY"],
		}
		client := sdk.NewGitlabSDK(mergedOpts)

		idmap := map[string]any{}
		if entidRaw, ok := env["GITLAB_TEST_API_ENTITIES_PACKAGES_CONAN_PACKAGE_SNAPSHOT_ENTID"]; ok {
			if entidStr, ok := entidRaw.(string); ok && strings.HasPrefix(entidStr, "{") {
				json.Unmarshal([]byte(entidStr), &idmap)
			} else if entidMap, ok := entidRaw.(map[string]any); ok {
				idmap = entidMap
			}
		}

		return &api_entities_packages_conan_package_snapshotDirectSetupResult{client: client, calls: calls, live: true, idmap: idmap}
	}

	mockFetch := func(url string, init map[string]any) (map[string]any, error) {
		*calls = append(*calls, map[string]any{"url": url, "init": init})
		return map[string]any{
			"status":     200,
			"statusText": "OK",
			"headers":    map[string]any{},
			"json": (func() any)(func() any {
				if mockres != nil {
					return mockres
				}
				return map[string]any{"id": "direct01"}
			}),
		}, nil
	}

	client := sdk.NewGitlabSDK(map[string]any{
		"base": "http://localhost:8080",
		"system": map[string]any{
			"fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
		},
	})

	return &api_entities_packages_conan_package_snapshotDirectSetupResult{client: client, calls: calls, live: false, idmap: map[string]any{}}
}

var _ = os.Getenv
var _ = json.Unmarshal
