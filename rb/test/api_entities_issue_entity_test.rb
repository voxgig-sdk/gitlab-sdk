# ApiEntitiesIssue entity test

require "minitest/autorun"
require "json"
require_relative "../Gitlab_sdk"
require_relative "runner"

class ApiEntitiesIssueEntityTest < Minitest::Test
  def test_create_instance
    testsdk = GitlabSDK.test(nil, nil)
    ent = testsdk.ApiEntitiesIssue(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = api_entities_issue_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "list", "update", "load"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "api_entities_issue." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set GITLAB_TEST_API_ENTITIES_ISSUE_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    api_entities_issue_ref01_ent = client.ApiEntitiesIssue(nil)
    api_entities_issue_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.api_entities_issue"), "api_entities_issue_ref01"))
    api_entities_issue_ref01_data["group_id"] = setup[:idmap]["group01"]
    api_entities_issue_ref01_data["project_id"] = setup[:idmap]["project01"]

    api_entities_issue_ref01_data_result = api_entities_issue_ref01_ent.create(api_entities_issue_ref01_data, nil)
    api_entities_issue_ref01_data = Helpers.to_map(api_entities_issue_ref01_data_result)
    assert !api_entities_issue_ref01_data.nil?
    assert !api_entities_issue_ref01_data["id"].nil?

    # LIST
    api_entities_issue_ref01_match = {}

    api_entities_issue_ref01_list_result = api_entities_issue_ref01_ent.list(api_entities_issue_ref01_match, nil)
    assert api_entities_issue_ref01_list_result.is_a?(Array)

    found_item = Vs.select(
      Runner.entity_list_to_data(api_entities_issue_ref01_list_result),
      { "id" => api_entities_issue_ref01_data["id"] })
    assert !Vs.isempty(found_item)

    # UPDATE
    api_entities_issue_ref01_data_up0_up = {
      "id" => api_entities_issue_ref01_data["id"],
      "project_id" => setup[:idmap]["project_id"],
    }

    api_entities_issue_ref01_markdef_up0_name = "blocking_issues_count"
    api_entities_issue_ref01_markdef_up0_value = "Mark01-api_entities_issue_ref01_#{setup[:now]}"
    api_entities_issue_ref01_data_up0_up[api_entities_issue_ref01_markdef_up0_name] = api_entities_issue_ref01_markdef_up0_value

    api_entities_issue_ref01_resdata_up0_result = api_entities_issue_ref01_ent.update(api_entities_issue_ref01_data_up0_up, nil)
    api_entities_issue_ref01_resdata_up0 = Helpers.to_map(api_entities_issue_ref01_resdata_up0_result)
    assert !api_entities_issue_ref01_resdata_up0.nil?
    assert_equal api_entities_issue_ref01_resdata_up0["id"], api_entities_issue_ref01_data_up0_up["id"]
    assert_equal api_entities_issue_ref01_resdata_up0[api_entities_issue_ref01_markdef_up0_name], api_entities_issue_ref01_markdef_up0_value

    # LOAD
    api_entities_issue_ref01_match_dt0 = {
      "id" => api_entities_issue_ref01_data["id"],
    }
    api_entities_issue_ref01_data_dt0_loaded = api_entities_issue_ref01_ent.load(api_entities_issue_ref01_match_dt0, nil)
    api_entities_issue_ref01_data_dt0_load_result = Helpers.to_map(api_entities_issue_ref01_data_dt0_loaded)
    assert !api_entities_issue_ref01_data_dt0_load_result.nil?
    assert_equal api_entities_issue_ref01_data_dt0_load_result["id"], api_entities_issue_ref01_data["id"]

  end
end

def api_entities_issue_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "api_entities_issue", "ApiEntitiesIssueTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = GitlabSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["api_entities_issue01", "api_entities_issue02", "api_entities_issue03", "group01", "group02", "group03", "project01", "project02", "project03", "issue01", "issue02", "issue03"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Detect ENTID env override before envOverride consumes it. When live
  # mode is on without a real override, the basic test runs against synthetic
  # IDs from the fixture and 4xx's. Surface this so the test can skip.
  entid_env_raw = ENV["GITLAB_TEST_API_ENTITIES_ISSUE_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "GITLAB_TEST_API_ENTITIES_ISSUE_ENTID" => idmap,
    "GITLAB_TEST_LIVE" => "FALSE",
    "GITLAB_TEST_EXPLAIN" => "FALSE",
    "GITLAB_APIKEY" => "NONE",
  })

  idmap_resolved = Helpers.to_map(
    env["GITLAB_TEST_API_ENTITIES_ISSUE_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end
  if idmap_resolved["project_id"].nil?
    idmap_resolved["project_id"] = idmap_resolved["project01"]
  end

  if env["GITLAB_TEST_LIVE"] == "TRUE"
    merged_opts = Vs.merge([
      {
        "apikey" => env["GITLAB_APIKEY"],
      },
      extra || {},
    ])
    client = GitlabSDK.new(Helpers.to_map(merged_opts))
  end

  live = env["GITLAB_TEST_LIVE"] == "TRUE"
  {
    client: client,
    data: entity_data,
    idmap: idmap_resolved,
    env: env,
    explain: env["GITLAB_TEST_EXPLAIN"] == "TRUE",
    live: live,
    synthetic_only: live && !idmap_overridden,
    now: (Time.now.to_f * 1000).to_i,
  }
end
