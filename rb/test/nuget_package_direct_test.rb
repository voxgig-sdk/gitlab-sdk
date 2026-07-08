# NugetPackage direct test

require "minitest/autorun"
require "json"
require_relative "../Gitlab_sdk"
require_relative "runner"

class NugetPackageDirectTest < Minitest::Test
  def test_direct_list_nuget_package
    setup = nuget_package_direct_setup([
      { "id" => "direct01" },
      { "id" => "direct02" },
    ])
    _should_skip, _reason = Runner.is_control_skipped("direct", "direct-list-nuget_package", setup[:live] ? "live" : "unit")
    if _should_skip
      skip(_reason || "skipped via sdk-test-control.json")
      return
    end
    if setup[:live]
      ["group01"].each do |_live_key|
        if setup[:idmap][_live_key].nil?
          skip "live test needs #{_live_key} via *_ENTID env var (synthetic IDs only)"
          return
        end
      end
    end
    client = setup[:client]

    params = {}
    if setup[:live]
      params["group_id"] = setup[:idmap]["group01"]
    else
      params["group_id"] = "direct01"
    end

    result = client.direct({
      "path" => "api/v4/groups/{group_id}/-/packages/nuget/metadata/*package_name/index",
      "method" => "GET",
      "params" => params,
    })
    if setup[:live]
      # Live mode is lenient: synthetic IDs frequently 4xx and the list-
      # response shape varies wildly across public APIs. Skip rather than
      # fail when the call doesn't return a usable list.
      if !result["err"].nil?
        skip("list call failed (likely synthetic IDs against live API): #{result["err"]}")
        return
      end
      unless result["ok"]
        skip("list call not ok (likely synthetic IDs against live API)")
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
      assert result["data"].is_a?(Array)
      assert_equal 2, result["data"].length
      assert_equal 1, setup[:calls].length
    end
  end

  def test_direct_load_nuget_package
    setup = nuget_package_direct_setup({ "id" => "direct01" })
    _should_skip, _reason = Runner.is_control_skipped("direct", "direct-load-nuget_package", setup[:live] ? "live" : "unit")
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
    if setup[:live]
      query["file_name"] = "mynugetpkg.pdb"
      query["signature"] = "k813f89485474661234z7109cve5709eFFFFFFFF"
    end
    unless setup[:live]
      params["group_id"] = "direct01"
    end

    result = client.direct({
      "path" => "api/v4/groups/{group_id}/-/packages/nuget/symbolfiles/*file_name/*signature/*same_file_name",
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


def nuget_package_direct_setup(mockres)
  Runner.load_env_local

  calls = []

  env = Runner.env_override({
    "GITLAB_TEST_NUGET_PACKAGE_ENTID" => {},
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
