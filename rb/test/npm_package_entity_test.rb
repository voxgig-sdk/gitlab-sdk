# NpmPackage entity test

require "minitest/autorun"
require "json"
require_relative "../Gitlab_sdk"
require_relative "runner"

class NpmPackageEntityTest < Minitest::Test
  def test_create_instance
    testsdk = GitlabSDK.test(nil, nil)
    ent = testsdk.NpmPackage(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = npm_package_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "update", "load", "remove"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "npm_package." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set GITLAB_TEST_NPM_PACKAGE_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    npm_package_ref01_ent = client.NpmPackage(nil)
    npm_package_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.npm_package"), "npm_package_ref01"))
    npm_package_ref01_data["group_id"] = setup[:idmap]["group01"]
    npm_package_ref01_data["project_id"] = setup[:idmap]["project01"]

    npm_package_ref01_data_result = npm_package_ref01_ent.create(npm_package_ref01_data, nil)
    npm_package_ref01_data = Helpers.to_map(npm_package_ref01_data_result)
    assert !npm_package_ref01_data.nil?

    # UPDATE
    npm_package_ref01_data_up0_up = {
    }

    npm_package_ref01_resdata_up0_result = npm_package_ref01_ent.update(npm_package_ref01_data_up0_up, nil)
    npm_package_ref01_resdata_up0 = Helpers.to_map(npm_package_ref01_resdata_up0_result)
    assert !npm_package_ref01_resdata_up0.nil?

    # LOAD
    npm_package_ref01_match_dt0 = {}
    npm_package_ref01_data_dt0_loaded = npm_package_ref01_ent.load(npm_package_ref01_match_dt0, nil)
    assert !npm_package_ref01_data_dt0_loaded.nil?

    # REMOVE
    npm_package_ref01_match_rm0 = {
      "id" => npm_package_ref01_data["id"],
    }
    npm_package_ref01_ent.remove(npm_package_ref01_match_rm0, nil)

  end
end

def npm_package_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "npm_package", "NpmPackageTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = GitlabSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["npm_package01", "npm_package02", "npm_package03", "group01", "group02", "group03", "project01", "project02", "project03", "dist_tag01", "dist_tag02", "dist_tag03"],
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
  entid_env_raw = ENV["GITLAB_TEST_NPM_PACKAGE_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "GITLAB_TEST_NPM_PACKAGE_ENTID" => idmap,
    "GITLAB_TEST_LIVE" => "FALSE",
    "GITLAB_TEST_EXPLAIN" => "FALSE",
    "GITLAB_APIKEY" => "NONE",
  })

  idmap_resolved = Helpers.to_map(
    env["GITLAB_TEST_NPM_PACKAGE_ENTID"])
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
