# ApiEntitiesReleasesLink entity test

require "minitest/autorun"
require "json"
require_relative "../Gitlab_sdk"
require_relative "runner"

class ApiEntitiesReleasesLinkEntityTest < Minitest::Test
  def test_create_instance
    testsdk = GitlabSDK.test(nil, nil)
    ent = testsdk.ApiEntitiesReleasesLink(nil)
    assert !ent.nil?
  end

  # Feature #4: the entity stream(action, ...) method runs the op pipeline and
  # returns an Enumerator over result items. With the streaming feature active
  # it yields the feature's incremental output; otherwise it falls back to the
  # materialised list so stream always yields.
  def test_stream
    seed = {
      "entity" => {
        "api_entities_releases_link" => {
          "s1" => { "id" => "s1" },
          "s2" => { "id" => "s2" },
          "s3" => { "id" => "s3" },
        },
      },
    }

    # Fallback: streaming inactive -> yields the materialised list items.
    base = GitlabSDK.test(seed, nil)
    seen = base.ApiEntitiesReleasesLink(nil).stream("list", nil, nil).to_a
    assert_equal 3, seen.length

    # Inbound: streaming active -> yields each item from the feature.
    cfg = GitlabConfig.make_config
    if cfg["feature"].is_a?(Hash) && cfg["feature"].key?("streaming")
      sdk = GitlabSDK.test(seed, { "feature" => { "streaming" => { "active" => true } } })
      got = []
      sdk.ApiEntitiesReleasesLink(nil).stream("list", nil, nil).each do |item|
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
    setup = api_entities_releases_link_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "list", "update", "load"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "api_entities_releases_link." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set GITLAB_TEST_API_ENTITIES_RELEASES_LINK_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    api_entities_releases_link_ref01_ent = client.ApiEntitiesReleasesLink(nil)
    api_entities_releases_link_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.api_entities_releases_link"), "api_entities_releases_link_ref01"))
    api_entities_releases_link_ref01_data["project_id"] = setup[:idmap]["project01"]
    api_entities_releases_link_ref01_data["release_id"] = setup[:idmap]["release01"]

    api_entities_releases_link_ref01_data_result = api_entities_releases_link_ref01_ent.create(api_entities_releases_link_ref01_data, nil)
    api_entities_releases_link_ref01_data = Helpers.to_map(api_entities_releases_link_ref01_data_result)
    assert !api_entities_releases_link_ref01_data.nil?
    assert !api_entities_releases_link_ref01_data["id"].nil?

    # LIST
    api_entities_releases_link_ref01_match = {
      "project_id" => setup[:idmap]["project01"],
      "release_id" => setup[:idmap]["release01"],
    }

    api_entities_releases_link_ref01_list_result = api_entities_releases_link_ref01_ent.list(api_entities_releases_link_ref01_match, nil)
    assert api_entities_releases_link_ref01_list_result.is_a?(Array)

    found_item = Vs.select(
      Runner.entity_list_to_data(api_entities_releases_link_ref01_list_result),
      { "id" => api_entities_releases_link_ref01_data["id"] })
    assert !Vs.isempty(found_item)

    # UPDATE
    api_entities_releases_link_ref01_data_up0_up = {
      "id" => api_entities_releases_link_ref01_data["id"],
      "project_id" => setup[:idmap]["project_id"],
      "release_id" => setup[:idmap]["release_id"],
    }

    api_entities_releases_link_ref01_markdef_up0_name = "direct_asset_url"
    api_entities_releases_link_ref01_markdef_up0_value = "Mark01-api_entities_releases_link_ref01_#{setup[:now]}"
    api_entities_releases_link_ref01_data_up0_up[api_entities_releases_link_ref01_markdef_up0_name] = api_entities_releases_link_ref01_markdef_up0_value

    api_entities_releases_link_ref01_resdata_up0_result = api_entities_releases_link_ref01_ent.update(api_entities_releases_link_ref01_data_up0_up, nil)
    api_entities_releases_link_ref01_resdata_up0 = Helpers.to_map(api_entities_releases_link_ref01_resdata_up0_result)
    assert !api_entities_releases_link_ref01_resdata_up0.nil?
    assert_equal api_entities_releases_link_ref01_resdata_up0["id"], api_entities_releases_link_ref01_data_up0_up["id"]
    assert_equal api_entities_releases_link_ref01_resdata_up0[api_entities_releases_link_ref01_markdef_up0_name], api_entities_releases_link_ref01_markdef_up0_value

    # LOAD
    api_entities_releases_link_ref01_match_dt0 = {
      "id" => api_entities_releases_link_ref01_data["id"],
    }
    api_entities_releases_link_ref01_data_dt0_loaded = api_entities_releases_link_ref01_ent.load(api_entities_releases_link_ref01_match_dt0, nil)
    api_entities_releases_link_ref01_data_dt0_load_result = Helpers.to_map(api_entities_releases_link_ref01_data_dt0_loaded)
    assert !api_entities_releases_link_ref01_data_dt0_load_result.nil?
    assert_equal api_entities_releases_link_ref01_data_dt0_load_result["id"], api_entities_releases_link_ref01_data["id"]

  end
end

def api_entities_releases_link_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "api_entities_releases_link", "ApiEntitiesReleasesLinkTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = GitlabSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["api_entities_releases_link01", "api_entities_releases_link02", "api_entities_releases_link03", "project01", "project02", "project03", "release01", "release02", "release03"],
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
  entid_env_raw = ENV["GITLAB_TEST_API_ENTITIES_RELEASES_LINK_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "GITLAB_TEST_API_ENTITIES_RELEASES_LINK_ENTID" => idmap,
    "GITLAB_TEST_LIVE" => "FALSE",
    "GITLAB_TEST_EXPLAIN" => "FALSE",
    "GITLAB_APIKEY" => "NONE",
  })

  idmap_resolved = Helpers.to_map(
    env["GITLAB_TEST_API_ENTITIES_RELEASES_LINK_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end
  if idmap_resolved["project_id"].nil?
    idmap_resolved["project_id"] = idmap_resolved["project01"]
  end
  if idmap_resolved["release_id"].nil?
    idmap_resolved["release_id"] = idmap_resolved["release01"]
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
