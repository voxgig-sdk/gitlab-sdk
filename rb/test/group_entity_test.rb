# Group entity test

require "minitest/autorun"
require "json"
require_relative "../Gitlab_sdk"
require_relative "runner"

class GroupEntityTest < Minitest::Test
  def test_create_instance
    testsdk = GitlabSDK.test(nil, nil)
    ent = testsdk.Group(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = group_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "update", "load", "remove"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "group." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set GITLAB_TEST_GROUP_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    group_ref01_ent = client.Group(nil)
    group_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.group"), "group_ref01"))
    group_ref01_data["secret"] = setup[:idmap]["secret01"]

    group_ref01_data_result = group_ref01_ent.create(group_ref01_data, nil)
    group_ref01_data = Helpers.to_map(group_ref01_data_result)
    assert !group_ref01_data.nil?

    # UPDATE
    group_ref01_data_up0_up = {
    }

    group_ref01_resdata_up0_result = group_ref01_ent.update(group_ref01_data_up0_up, nil)
    group_ref01_resdata_up0 = Helpers.to_map(group_ref01_resdata_up0_result)
    assert !group_ref01_resdata_up0.nil?

    # LOAD
    group_ref01_match_dt0 = {}
    group_ref01_data_dt0_loaded = group_ref01_ent.load(group_ref01_match_dt0, nil)
    assert !group_ref01_data_dt0_loaded.nil?

    # REMOVE
    group_ref01_match_rm0 = {
      "id" => group_ref01_data["id"],
    }
    group_ref01_ent.remove(group_ref01_match_rm0, nil)

  end
end

def group_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "group", "GroupTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = GitlabSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["group01", "group02", "group03", "billable_member01", "billable_member02", "billable_member03", "custom_attribute01", "custom_attribute02", "custom_attribute03", "member01", "member02", "member03", "share01", "share02", "share03", "ssh_certificate01", "ssh_certificate02", "ssh_certificate03", "upload01", "upload02", "upload03", "secret01"],
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
  entid_env_raw = ENV["GITLAB_TEST_GROUP_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "GITLAB_TEST_GROUP_ENTID" => idmap,
    "GITLAB_TEST_LIVE" => "FALSE",
    "GITLAB_TEST_EXPLAIN" => "FALSE",
    "GITLAB_APIKEY" => "NONE",
  })

  idmap_resolved = Helpers.to_map(
    env["GITLAB_TEST_GROUP_ENTID"])
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
