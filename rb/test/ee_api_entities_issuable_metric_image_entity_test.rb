# EeApiEntitiesIssuableMetricImage entity test

require "minitest/autorun"
require "json"
require_relative "../Gitlab_sdk"
require_relative "runner"

class EeApiEntitiesIssuableMetricImageEntityTest < Minitest::Test
  def test_create_instance
    testsdk = GitlabSDK.test(nil, nil)
    ent = testsdk.EeApiEntitiesIssuableMetricImage(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = ee_api_entities_issuable_metric_image_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "update", "remove"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "ee_api_entities_issuable_metric_image." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set GITLAB_TEST_EE_API_ENTITIES_ISSUABLE_METRIC_IMAGE_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    ee_api_entities_issuable_metric_image_ref01_ent = client.EeApiEntitiesIssuableMetricImage(nil)
    ee_api_entities_issuable_metric_image_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.ee_api_entities_issuable_metric_image"), "ee_api_entities_issuable_metric_image_ref01"))
    ee_api_entities_issuable_metric_image_ref01_data["issue_id"] = setup[:idmap]["issue01"]
    ee_api_entities_issuable_metric_image_ref01_data["project_id"] = setup[:idmap]["project01"]

    ee_api_entities_issuable_metric_image_ref01_data_result = ee_api_entities_issuable_metric_image_ref01_ent.create(ee_api_entities_issuable_metric_image_ref01_data, nil)
    ee_api_entities_issuable_metric_image_ref01_data = Helpers.to_map(ee_api_entities_issuable_metric_image_ref01_data_result)
    assert !ee_api_entities_issuable_metric_image_ref01_data.nil?
    assert !ee_api_entities_issuable_metric_image_ref01_data["id"].nil?

    # UPDATE
    ee_api_entities_issuable_metric_image_ref01_data_up0_up = {
      "id" => ee_api_entities_issuable_metric_image_ref01_data["id"],
      "issue_id" => setup[:idmap]["issue_id"],
      "project_id" => setup[:idmap]["project_id"],
    }

    ee_api_entities_issuable_metric_image_ref01_markdef_up0_name = "created_at"
    ee_api_entities_issuable_metric_image_ref01_markdef_up0_value = "Mark01-ee_api_entities_issuable_metric_image_ref01_#{setup[:now]}"
    ee_api_entities_issuable_metric_image_ref01_data_up0_up[ee_api_entities_issuable_metric_image_ref01_markdef_up0_name] = ee_api_entities_issuable_metric_image_ref01_markdef_up0_value

    ee_api_entities_issuable_metric_image_ref01_resdata_up0_result = ee_api_entities_issuable_metric_image_ref01_ent.update(ee_api_entities_issuable_metric_image_ref01_data_up0_up, nil)
    ee_api_entities_issuable_metric_image_ref01_resdata_up0 = Helpers.to_map(ee_api_entities_issuable_metric_image_ref01_resdata_up0_result)
    assert !ee_api_entities_issuable_metric_image_ref01_resdata_up0.nil?
    assert_equal ee_api_entities_issuable_metric_image_ref01_resdata_up0["id"], ee_api_entities_issuable_metric_image_ref01_data_up0_up["id"]
    assert_equal ee_api_entities_issuable_metric_image_ref01_resdata_up0[ee_api_entities_issuable_metric_image_ref01_markdef_up0_name], ee_api_entities_issuable_metric_image_ref01_markdef_up0_value

    # REMOVE
    ee_api_entities_issuable_metric_image_ref01_match_rm0 = {
      "id" => ee_api_entities_issuable_metric_image_ref01_data["id"],
    }
    ee_api_entities_issuable_metric_image_ref01_ent.remove(ee_api_entities_issuable_metric_image_ref01_match_rm0, nil)

  end
end

def ee_api_entities_issuable_metric_image_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "ee_api_entities_issuable_metric_image", "EeApiEntitiesIssuableMetricImageTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = GitlabSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["ee_api_entities_issuable_metric_image01", "ee_api_entities_issuable_metric_image02", "ee_api_entities_issuable_metric_image03", "project01", "project02", "project03", "issue01", "issue02", "issue03"],
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
  entid_env_raw = ENV["GITLAB_TEST_EE_API_ENTITIES_ISSUABLE_METRIC_IMAGE_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "GITLAB_TEST_EE_API_ENTITIES_ISSUABLE_METRIC_IMAGE_ENTID" => idmap,
    "GITLAB_TEST_LIVE" => "FALSE",
    "GITLAB_TEST_EXPLAIN" => "FALSE",
    "GITLAB_APIKEY" => "NONE",
  })

  idmap_resolved = Helpers.to_map(
    env["GITLAB_TEST_EE_API_ENTITIES_ISSUABLE_METRIC_IMAGE_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end
  if idmap_resolved["issue_id"].nil?
    idmap_resolved["issue_id"] = idmap_resolved["issue01"]
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
