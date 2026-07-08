# Project entity test

require "minitest/autorun"
require "json"
require_relative "../Gitlab_sdk"
require_relative "runner"

class ProjectEntityTest < Minitest::Test
  def test_create_instance
    testsdk = GitlabSDK.test(nil, nil)
    ent = testsdk.Project(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = project_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "update", "load", "remove"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "project." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set GITLAB_TEST_PROJECT_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    project_ref01_ent = client.Project(nil)
    project_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.project"), "project_ref01"))
    project_ref01_data["hook_id"] = setup[:idmap]["hook01"]
    project_ref01_data["merge_request_id"] = setup[:idmap]["merge_request01"]
    project_ref01_data["pipeline_schedule_id"] = setup[:idmap]["pipeline_schedule01"]
    project_ref01_data["secret"] = setup[:idmap]["secret01"]

    project_ref01_data_result = project_ref01_ent.create(project_ref01_data, nil)
    project_ref01_data = Helpers.to_map(project_ref01_data_result)
    assert !project_ref01_data.nil?
    assert !project_ref01_data["id"].nil?

    # UPDATE
    project_ref01_data_up0_up = {
      "id" => project_ref01_data["id"],
    }

    project_ref01_markdef_up0_name = "before_sha"
    project_ref01_markdef_up0_value = "Mark01-project_ref01_#{setup[:now]}"
    project_ref01_data_up0_up[project_ref01_markdef_up0_name] = project_ref01_markdef_up0_value

    project_ref01_resdata_up0_result = project_ref01_ent.update(project_ref01_data_up0_up, nil)
    project_ref01_resdata_up0 = Helpers.to_map(project_ref01_resdata_up0_result)
    assert !project_ref01_resdata_up0.nil?
    assert_equal project_ref01_resdata_up0["id"], project_ref01_data_up0_up["id"]
    assert_equal project_ref01_resdata_up0[project_ref01_markdef_up0_name], project_ref01_markdef_up0_value

    # LOAD
    project_ref01_match_dt0 = {
      "id" => project_ref01_data["id"],
    }
    project_ref01_data_dt0_loaded = project_ref01_ent.load(project_ref01_match_dt0, nil)
    project_ref01_data_dt0_load_result = Helpers.to_map(project_ref01_data_dt0_loaded)
    assert !project_ref01_data_dt0_load_result.nil?
    assert_equal project_ref01_data_dt0_load_result["id"], project_ref01_data["id"]

    # REMOVE
    project_ref01_match_rm0 = {
      "id" => project_ref01_data["id"],
    }
    project_ref01_ent.remove(project_ref01_match_rm0, nil)

  end
end

def project_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "project", "ProjectTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = GitlabSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["project01", "project02", "project03", "custom_attribute01", "custom_attribute02", "custom_attribute03", "hook01", "hook02", "hook03", "import_project_member01", "import_project_member02", "import_project_member03", "issue01", "issue02", "issue03", "artifact01", "artifact02", "artifact03", "job01", "job02", "job03", "merge_request01", "merge_request02", "merge_request03", "domain01", "domain02", "domain03", "pipeline_schedule01", "pipeline_schedule02", "pipeline_schedule03", "pipeline01", "pipeline02", "pipeline03", "protected_branch01", "protected_branch02", "protected_branch03", "rule01", "rule02", "rule03", "blob01", "blob02", "blob03", "file01", "file02", "file03", "share01", "share02", "share03", "trigger01", "trigger02", "trigger03", "upload01", "upload02", "upload03", "custom_header01", "custom_header02", "custom_header03", "event01", "event02", "event03", "test01", "test02", "test03", "url_variable01", "url_variable02", "url_variable03", "draft_note01", "draft_note02", "draft_note03", "variable01", "variable02", "variable03", "secret01"],
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
  entid_env_raw = ENV["GITLAB_TEST_PROJECT_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "GITLAB_TEST_PROJECT_ENTID" => idmap,
    "GITLAB_TEST_LIVE" => "FALSE",
    "GITLAB_TEST_EXPLAIN" => "FALSE",
    "GITLAB_APIKEY" => "NONE",
  })

  idmap_resolved = Helpers.to_map(
    env["GITLAB_TEST_PROJECT_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
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
