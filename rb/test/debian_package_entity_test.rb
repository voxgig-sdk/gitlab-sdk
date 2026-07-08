# DebianPackage entity test

require "minitest/autorun"
require "json"
require_relative "../Gitlab_sdk"
require_relative "runner"

class DebianPackageEntityTest < Minitest::Test
  def test_create_instance
    testsdk = GitlabSDK.test(nil, nil)
    ent = testsdk.DebianPackage(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = debian_package_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["update", "load"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "debian_package." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set GITLAB_TEST_DEBIAN_PACKAGE_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # Bootstrap entity data from existing test data.
    debian_package_ref01_data_raw = Vs.items(Helpers.to_map(
      Vs.getpath(setup[:data], "existing.debian_package")))
    debian_package_ref01_data = nil
    if debian_package_ref01_data_raw.length > 0
      debian_package_ref01_data = Helpers.to_map(debian_package_ref01_data_raw[0][1])
    end

    # UPDATE
    debian_package_ref01_ent = client.DebianPackage(nil)
    debian_package_ref01_data_up0_up = {
      "project_id" => setup[:idmap]["project_id"],
    }

    debian_package_ref01_resdata_up0_result = debian_package_ref01_ent.update(debian_package_ref01_data_up0_up, nil)
    debian_package_ref01_resdata_up0 = Helpers.to_map(debian_package_ref01_resdata_up0_result)
    assert !debian_package_ref01_resdata_up0.nil?

    # LOAD
    debian_package_ref01_match_dt0 = {}
    debian_package_ref01_data_dt0_loaded = debian_package_ref01_ent.load(debian_package_ref01_match_dt0, nil)
    assert !debian_package_ref01_data_dt0_loaded.nil?

  end
end

def debian_package_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "debian_package", "DebianPackageTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = GitlabSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["debian_package01", "debian_package02", "debian_package03", "group01", "group02", "group03", "project01", "project02", "project03", "pool01", "pool02", "pool03", "*distribution01", "*distribution02", "*distribution03", "debian01", "debian02", "debian03", "sha25601", "sha25602", "sha25603"],
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
  entid_env_raw = ENV["GITLAB_TEST_DEBIAN_PACKAGE_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "GITLAB_TEST_DEBIAN_PACKAGE_ENTID" => idmap,
    "GITLAB_TEST_LIVE" => "FALSE",
    "GITLAB_TEST_EXPLAIN" => "FALSE",
    "GITLAB_APIKEY" => "NONE",
  })

  idmap_resolved = Helpers.to_map(
    env["GITLAB_TEST_DEBIAN_PACKAGE_ENTID"])
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
