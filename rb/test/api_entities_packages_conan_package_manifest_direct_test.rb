# ApiEntitiesPackagesConanPackageManifest direct test

require "minitest/autorun"
require "json"
require_relative "../Gitlab_sdk"
require_relative "runner"

class ApiEntitiesPackagesConanPackageManifestDirectTest < Minitest::Test
  def test_direct_load_api_entities_packages_conan_package_manifest
    setup = api_entities_packages_conan_package_manifest_direct_setup({ "id" => "direct01" })
    _should_skip, _reason = Runner.is_control_skipped("direct", "direct-load-api_entities_packages_conan_package_manifest", setup[:live] ? "live" : "unit")
    if _should_skip
      skip(_reason || "skipped via sdk-test-control.json")
      return
    end
    if setup[:live]
      skip "live direct-load needs real ID — set *_ENTID env var with real IDs to run"
      return
    end
    client = setup[:client]

    params = {}
    query = {}
    unless setup[:live]
      params["conan_id"] = "direct01"
      params["conan_package_reference"] = "direct02"
      params["package_channel"] = "direct03"
      params["package_username"] = "direct04"
      params["package_version"] = "direct05"
      params["project_id"] = "direct06"
    end

    result = client.direct({
      "path" => "api/v4/projects/{project_id}/packages/conan/v1/conans/{conan_id}/{package_version}/{package_username}/{package_channel}/packages/{conan_package_reference}/digest",
      "method" => "GET",
      "params" => params,
      "query" => query,
    })
    if setup[:live]
      # Live mode is lenient: synthetic IDs frequently 4xx. Skip rather
      # than fail when the load endpoint isn't reachable with the IDs
      # we can construct from setup.idmap.
      if !result["err"].nil?
        skip("load call failed (likely synthetic IDs against live API): #{result["err"]}")
        return
      end
      unless result["ok"]
        skip("load call not ok (likely synthetic IDs against live API)")
        return
      end
      status = Helpers.to_int(result["status"])
      if status < 200 || status >= 300
        skip("expected 2xx status, got #{status}")
        return
      end
    else
      assert_nil result["err"]
      assert result["ok"]
      assert_equal 200, Helpers.to_int(result["status"])
      assert !result["data"].nil?
      if result["data"].is_a?(Hash)
        assert_equal "direct01", result["data"]["id"]
      end
      assert_equal 1, setup[:calls].length
    end
  end

end


def api_entities_packages_conan_package_manifest_direct_setup(mockres)
  Runner.load_env_local

  calls = []

  env = Runner.env_override({
    "GITLAB_TEST_API_ENTITIES_PACKAGES_CONAN_PACKAGE_MANIFEST_ENTID" => {},
    "GITLAB_TEST_LIVE" => "FALSE",
    "GITLAB_APIKEY" => "NONE",
  })

  live = env["GITLAB_TEST_LIVE"] == "TRUE"

  if live
    merged_opts = {
      "apikey" => env["GITLAB_APIKEY"],
    }
    client = GitlabSDK.new(merged_opts)
    return {
      client: client,
      calls: calls,
      live: true,
      idmap: {},
    }
  end

  mock_fetch = ->(url, init) {
    calls.push({ "url" => url, "init" => init })
    return {
      "status" => 200,
      "statusText" => "OK",
      "headers" => {},
      "json" => ->() {
        if !mockres.nil?
          return mockres
        end
        return { "id" => "direct01" }
      },
      "body" => "mock",
    }, nil
  }

  client = GitlabSDK.new({
    "base" => "http://localhost:8080",
    "system" => {
      "fetch" => mock_fetch,
    },
  })

  {
    client: client,
    calls: calls,
    live: false,
    idmap: {},
  }
end
