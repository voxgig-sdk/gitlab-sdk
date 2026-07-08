# Participant direct test

require "minitest/autorun"
require "json"
require_relative "../Gitlab_sdk"
require_relative "runner"

class ParticipantDirectTest < Minitest::Test
  def test_direct_list_participant
    setup = participant_direct_setup([
      { "id" => "direct01" },
      { "id" => "direct02" },
    ])
    _should_skip, _reason = Runner.is_control_skipped("direct", "direct-list-participant", setup[:live] ? "live" : "unit")
    if _should_skip
      skip(_reason || "skipped via sdk-test-control.json")
      return
    end
    if setup[:live]
      ["issue01", "project01"].each do |_live_key|
        if setup[:idmap][_live_key].nil?
          skip "live test needs #{_live_key} via *_ENTID env var (synthetic IDs only)"
          return
        end
      end
    end
    client = setup[:client]

    params = {}
    if setup[:live]
      params["issue_id"] = setup[:idmap]["issue01"]
    else
      params["issue_id"] = "direct01"
    end
    if setup[:live]
      params["project_id"] = setup[:idmap]["project01"]
    else
      params["project_id"] = "direct01"
    end

    result = client.direct({
      "path" => "api/v4/projects/{project_id}/issues/{issue_id}/participants",
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

end


def participant_direct_setup(mockres)
  Runner.load_env_local

  calls = []

  env = Runner.env_override({
    "GITLAB_TEST_PARTICIPANT_ENTID" => {},
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
