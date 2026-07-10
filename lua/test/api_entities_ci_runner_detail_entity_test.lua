-- ApiEntitiesCiRunnerDetail entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("gitlab_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("ApiEntitiesCiRunnerDetailEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:ApiEntitiesCiRunnerDetail(nil)
    assert.is_not_nil(ent)
  end)

  it("should run basic flow", function()
    local setup = api_entities_ci_runner_detail_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"update", "load"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "api_entities_ci_runner_detail." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set GITLAB_TEST_API_ENTITIES_CI_RUNNER_DETAIL_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- Bootstrap entity data from existing test data.
    local api_entities_ci_runner_detail_ref01_data_raw = vs.items(helpers.to_map(
      vs.getpath(setup.data, "existing.api_entities_ci_runner_detail")))
    local api_entities_ci_runner_detail_ref01_data = nil
    if #api_entities_ci_runner_detail_ref01_data_raw > 0 then
      api_entities_ci_runner_detail_ref01_data = helpers.to_map(api_entities_ci_runner_detail_ref01_data_raw[1][2])
    end

    -- UPDATE
    local api_entities_ci_runner_detail_ref01_ent = client:ApiEntitiesCiRunnerDetail(nil)
    local api_entities_ci_runner_detail_ref01_data_up0_up = {
      id = api_entities_ci_runner_detail_ref01_data["id"],
    }

    local api_entities_ci_runner_detail_ref01_markdef_up0_name = "access_level"
    local api_entities_ci_runner_detail_ref01_markdef_up0_value = "Mark01-api_entities_ci_runner_detail_ref01_" .. tostring(setup.now)
    api_entities_ci_runner_detail_ref01_data_up0_up[api_entities_ci_runner_detail_ref01_markdef_up0_name] = api_entities_ci_runner_detail_ref01_markdef_up0_value

    local api_entities_ci_runner_detail_ref01_resdata_up0_result, err = api_entities_ci_runner_detail_ref01_ent:update(api_entities_ci_runner_detail_ref01_data_up0_up, nil)
    assert.is_nil(err)
    local api_entities_ci_runner_detail_ref01_resdata_up0 = helpers.to_map(api_entities_ci_runner_detail_ref01_resdata_up0_result)
    assert.is_not_nil(api_entities_ci_runner_detail_ref01_resdata_up0)
    assert.are.equal(api_entities_ci_runner_detail_ref01_resdata_up0["id"], api_entities_ci_runner_detail_ref01_data_up0_up["id"])
    assert.are.equal(api_entities_ci_runner_detail_ref01_resdata_up0[api_entities_ci_runner_detail_ref01_markdef_up0_name], api_entities_ci_runner_detail_ref01_markdef_up0_value)

    -- LOAD
    local api_entities_ci_runner_detail_ref01_match_dt0 = {
      id = api_entities_ci_runner_detail_ref01_data["id"],
    }
    local api_entities_ci_runner_detail_ref01_data_dt0_loaded, err = api_entities_ci_runner_detail_ref01_ent:load(api_entities_ci_runner_detail_ref01_match_dt0, nil)
    assert.is_nil(err)
    local api_entities_ci_runner_detail_ref01_data_dt0_load_result = helpers.to_map(api_entities_ci_runner_detail_ref01_data_dt0_loaded)
    assert.is_not_nil(api_entities_ci_runner_detail_ref01_data_dt0_load_result)
    assert.are.equal(api_entities_ci_runner_detail_ref01_data_dt0_load_result["id"], api_entities_ci_runner_detail_ref01_data["id"])

  end)
end)

function api_entities_ci_runner_detail_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/api_entities_ci_runner_detail/ApiEntitiesCiRunnerDetailTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read api_entities_ci_runner_detail test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "api_entities_ci_runner_detail01", "api_entities_ci_runner_detail02", "api_entities_ci_runner_detail03" },
    {
      ["`$PACK`"] = { "", {
        ["`$KEY`"] = "`$COPY`",
        ["`$VAL`"] = { "`$FORMAT`", "upper", "`$COPY`" },
      }},
    }
  )

  -- Detect ENTID env override before envOverride consumes it. When live
  -- mode is on without a real override, the basic test runs against synthetic
  -- IDs from the fixture and 4xx's. Surface this so the test can skip.
  local entid_env_raw = os.getenv("GITLAB_TEST_API_ENTITIES_CI_RUNNER_DETAIL_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["GITLAB_TEST_API_ENTITIES_CI_RUNNER_DETAIL_ENTID"] = idmap,
    ["GITLAB_TEST_LIVE"] = "FALSE",
    ["GITLAB_TEST_EXPLAIN"] = "FALSE",
    ["GITLAB_APIKEY"] = "NONE",
  })

  local idmap_resolved = helpers.to_map(
    env["GITLAB_TEST_API_ENTITIES_CI_RUNNER_DETAIL_ENTID"])
  if idmap_resolved == nil then
    idmap_resolved = helpers.to_map(idmap)
  end

  if env["GITLAB_TEST_LIVE"] == "TRUE" then
    local merged_opts = vs.merge({
      {
        apikey = env["GITLAB_APIKEY"],
      },
      extra or {},
    })
    client = sdk.new(helpers.to_map(merged_opts))
  end

  local live = env["GITLAB_TEST_LIVE"] == "TRUE"
  return {
    client = client,
    data = entity_data,
    idmap = idmap_resolved,
    env = env,
    explain = env["GITLAB_TEST_EXPLAIN"] == "TRUE",
    live = live,
    synthetic_only = live and not idmap_overridden,
    now = os.time() * 1000,
  }
end
