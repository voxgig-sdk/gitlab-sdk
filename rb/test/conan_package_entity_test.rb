# ConanPackage entity test

require "minitest/autorun"
require "json"
require_relative "../Gitlab_sdk"
require_relative "runner"

class ConanPackageEntityTest < Minitest::Test
  def test_create_instance
    testsdk = GitlabSDK.test(nil, nil)
    ent = testsdk.ConanPackage(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = conan_package_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["update", "load", "remove"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "conan_package." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set GITLAB_TEST_CONAN_PACKAGE_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # Bootstrap entity data from existing test data.
    conan_package_ref01_data_raw = Vs.items(Helpers.to_map(
      Vs.getpath(setup[:data], "existing.conan_package")))
    conan_package_ref01_data = nil
    if conan_package_ref01_data_raw.length > 0
      conan_package_ref01_data = Helpers.to_map(conan_package_ref01_data_raw[0][1])
    end

    # UPDATE
    conan_package_ref01_ent = client.ConanPackage(nil)
    conan_package_ref01_data_up0_up = {
      "file_id" => setup[:idmap]["file_id"],
      "package_channel" => setup[:idmap]["package_channel"],
      "package_username" => setup[:idmap]["package_username"],
      "package_version" => setup[:idmap]["package_version"],
      "recipe_revision" => setup[:idmap]["recipe_revision"],
    }

    conan_package_ref01_resdata_up0_result = conan_package_ref01_ent.update(conan_package_ref01_data_up0_up, nil)
    conan_package_ref01_resdata_up0 = Helpers.to_map(conan_package_ref01_resdata_up0_result)
    assert !conan_package_ref01_resdata_up0.nil?

    # LOAD
    conan_package_ref01_match_dt0 = {}
    conan_package_ref01_data_dt0_loaded = conan_package_ref01_ent.load(conan_package_ref01_match_dt0, nil)
    assert !conan_package_ref01_data_dt0_loaded.nil?

    # REMOVE
    conan_package_ref01_match_rm0 = {
      "id" => conan_package_ref01_data["id"],
    }
    conan_package_ref01_ent.remove(conan_package_ref01_match_rm0, nil)

  end
end

def conan_package_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "conan_package", "ConanPackageTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = GitlabSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["conan_package01", "conan_package02", "conan_package03", "project01", "project02", "project03", "conan01", "conan02", "conan03", "file01", "file02", "file03", "export01", "export02", "export03", "package01", "package02", "package03", "revision01", "revision02", "revision03", "package_channel01", "package_username01", "package_version01", "recipe_revision01"],
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
  entid_env_raw = ENV["GITLAB_TEST_CONAN_PACKAGE_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "GITLAB_TEST_CONAN_PACKAGE_ENTID" => idmap,
    "GITLAB_TEST_LIVE" => "FALSE",
    "GITLAB_TEST_EXPLAIN" => "FALSE",
    "GITLAB_APIKEY" => "NONE",
  })

  idmap_resolved = Helpers.to_map(
    env["GITLAB_TEST_CONAN_PACKAGE_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end
  if idmap_resolved["file_id"].nil?
    idmap_resolved["file_id"] = idmap_resolved["file01"]
  end
  if idmap_resolved["package_channel"].nil?
    idmap_resolved["package_channel"] = idmap_resolved["package_channel01"]
  end
  if idmap_resolved["package_username"].nil?
    idmap_resolved["package_username"] = idmap_resolved["package_username01"]
  end
  if idmap_resolved["package_version"].nil?
    idmap_resolved["package_version"] = idmap_resolved["package_version01"]
  end
  if idmap_resolved["recipe_revision"].nil?
    idmap_resolved["recipe_revision"] = idmap_resolved["recipe_revision01"]
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
