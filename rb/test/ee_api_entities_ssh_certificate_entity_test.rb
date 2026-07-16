# EeApiEntitiesSshCertificate entity test

require "minitest/autorun"
require "json"
require_relative "../Gitlab_sdk"
require_relative "runner"

class EeApiEntitiesSshCertificateEntityTest < Minitest::Test
  def test_create_instance
    testsdk = GitlabSDK.test(nil, nil)
    ent = testsdk.EeApiEntitiesSshCertificate(nil)
    assert !ent.nil?
  end

  # Feature #4: the entity stream(action, ...) method runs the op pipeline and
  # returns an Enumerator over result items. With the streaming feature active
  # it yields the feature's incremental output; otherwise it falls back to the
  # materialised list so stream always yields.
  def test_stream
    seed = {
      "entity" => {
        "ee_api_entities_ssh_certificate" => {
          "s1" => { "id" => "s1" },
          "s2" => { "id" => "s2" },
          "s3" => { "id" => "s3" },
        },
      },
    }

    # Fallback: streaming inactive -> yields the materialised list items.
    base = GitlabSDK.test(seed, nil)
    seen = base.EeApiEntitiesSshCertificate(nil).stream("list", nil, nil).to_a
    assert_equal 3, seen.length

    # Inbound: streaming active -> yields each item from the feature.
    cfg = GitlabConfig.make_config
    if cfg["feature"].is_a?(Hash) && cfg["feature"].key?("streaming")
      sdk = GitlabSDK.test(seed, { "feature" => { "streaming" => { "active" => true } } })
      got = []
      sdk.EeApiEntitiesSshCertificate(nil).stream("list", nil, nil).each do |item|
        if item.is_a?(Array)
          got.concat(item)
        else
          got << item
        end
      end
      assert_equal 3, got.length
    end
  end

  def test_basic_flow
    setup = ee_api_entities_ssh_certificate_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "list"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "ee_api_entities_ssh_certificate." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set GITLAB_TEST_EE_API_ENTITIES_SSH_CERTIFICATE_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    ee_api_entities_ssh_certificate_ref01_ent = client.EeApiEntitiesSshCertificate(nil)
    ee_api_entities_ssh_certificate_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.ee_api_entities_ssh_certificate"), "ee_api_entities_ssh_certificate_ref01"))
    ee_api_entities_ssh_certificate_ref01_data["group_id"] = setup[:idmap]["group01"]

    ee_api_entities_ssh_certificate_ref01_data_result = ee_api_entities_ssh_certificate_ref01_ent.create(ee_api_entities_ssh_certificate_ref01_data, nil)
    ee_api_entities_ssh_certificate_ref01_data = Helpers.to_map(ee_api_entities_ssh_certificate_ref01_data_result)
    assert !ee_api_entities_ssh_certificate_ref01_data.nil?
    assert !ee_api_entities_ssh_certificate_ref01_data["id"].nil?

    # LIST
    ee_api_entities_ssh_certificate_ref01_match = {
      "group_id" => setup[:idmap]["group01"],
    }

    ee_api_entities_ssh_certificate_ref01_list_result = ee_api_entities_ssh_certificate_ref01_ent.list(ee_api_entities_ssh_certificate_ref01_match, nil)
    assert ee_api_entities_ssh_certificate_ref01_list_result.is_a?(Array)

    found_item = Vs.select(
      Runner.entity_list_to_data(ee_api_entities_ssh_certificate_ref01_list_result),
      { "id" => ee_api_entities_ssh_certificate_ref01_data["id"] })
    assert !Vs.isempty(found_item)

  end
end

def ee_api_entities_ssh_certificate_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "ee_api_entities_ssh_certificate", "EeApiEntitiesSshCertificateTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = GitlabSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["ee_api_entities_ssh_certificate01", "ee_api_entities_ssh_certificate02", "ee_api_entities_ssh_certificate03", "group01", "group02", "group03"],
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
  entid_env_raw = ENV["GITLAB_TEST_EE_API_ENTITIES_SSH_CERTIFICATE_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "GITLAB_TEST_EE_API_ENTITIES_SSH_CERTIFICATE_ENTID" => idmap,
    "GITLAB_TEST_LIVE" => "FALSE",
    "GITLAB_TEST_EXPLAIN" => "FALSE",
    "GITLAB_APIKEY" => "NONE",
  })

  idmap_resolved = Helpers.to_map(
    env["GITLAB_TEST_EE_API_ENTITIES_SSH_CERTIFICATE_ENTID"])
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
