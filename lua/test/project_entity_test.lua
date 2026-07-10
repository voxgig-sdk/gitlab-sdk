-- Project entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("gitlab_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("ProjectEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:Project(nil)
    assert.is_not_nil(ent)
  end)

  it("should run basic flow", function()
    local setup = project_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"create", "update", "load", "remove"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "project." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set GITLAB_TEST_PROJECT_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- CREATE
    local project_ref01_ent = client:Project(nil)
    local project_ref01_data = helpers.to_map(vs.getprop(
      vs.getpath(setup.data, "new.project"), "project_ref01"))
    project_ref01_data["hook_id"] = setup.idmap["hook01"]
    project_ref01_data["merge_request_id"] = setup.idmap["merge_request01"]
    project_ref01_data["pipeline_schedule_id"] = setup.idmap["pipeline_schedule01"]
    project_ref01_data["secret"] = setup.idmap["secret01"]

    local project_ref01_data_result, err = project_ref01_ent:create(project_ref01_data, nil)
    assert.is_nil(err)
    project_ref01_data = helpers.to_map(project_ref01_data_result)
    assert.is_not_nil(project_ref01_data)
    assert.is_not_nil(project_ref01_data["id"])

    -- UPDATE
    local project_ref01_data_up0_up = {
      id = project_ref01_data["id"],
    }

    local project_ref01_markdef_up0_name = "before_sha"
    local project_ref01_markdef_up0_value = "Mark01-project_ref01_" .. tostring(setup.now)
    project_ref01_data_up0_up[project_ref01_markdef_up0_name] = project_ref01_markdef_up0_value

    local project_ref01_resdata_up0_result, err = project_ref01_ent:update(project_ref01_data_up0_up, nil)
    assert.is_nil(err)
    local project_ref01_resdata_up0 = helpers.to_map(project_ref01_resdata_up0_result)
    assert.is_not_nil(project_ref01_resdata_up0)
    assert.are.equal(project_ref01_resdata_up0["id"], project_ref01_data_up0_up["id"])
    assert.are.equal(project_ref01_resdata_up0[project_ref01_markdef_up0_name], project_ref01_markdef_up0_value)

    -- LOAD
    local project_ref01_match_dt0 = {
      id = project_ref01_data["id"],
    }
    local project_ref01_data_dt0_loaded, err = project_ref01_ent:load(project_ref01_match_dt0, nil)
    assert.is_nil(err)
    local project_ref01_data_dt0_load_result = helpers.to_map(project_ref01_data_dt0_loaded)
    assert.is_not_nil(project_ref01_data_dt0_load_result)
    assert.are.equal(project_ref01_data_dt0_load_result["id"], project_ref01_data["id"])

    -- REMOVE
    local project_ref01_match_rm0 = {
      id = project_ref01_data["id"],
    }
    local _, err = project_ref01_ent:remove(project_ref01_match_rm0, nil)
    assert.is_nil(err)

  end)
end)

function project_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/project/ProjectTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read project test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "project01", "project02", "project03", "custom_attribute01", "custom_attribute02", "custom_attribute03", "hook01", "hook02", "hook03", "import_project_member01", "import_project_member02", "import_project_member03", "issue01", "issue02", "issue03", "artifact01", "artifact02", "artifact03", "job01", "job02", "job03", "merge_request01", "merge_request02", "merge_request03", "domain01", "domain02", "domain03", "pipeline_schedule01", "pipeline_schedule02", "pipeline_schedule03", "pipeline01", "pipeline02", "pipeline03", "protected_branch01", "protected_branch02", "protected_branch03", "rule01", "rule02", "rule03", "blob01", "blob02", "blob03", "file01", "file02", "file03", "share01", "share02", "share03", "trigger01", "trigger02", "trigger03", "upload01", "upload02", "upload03", "custom_header01", "custom_header02", "custom_header03", "event01", "event02", "event03", "test01", "test02", "test03", "url_variable01", "url_variable02", "url_variable03", "draft_note01", "draft_note02", "draft_note03", "variable01", "variable02", "variable03", "secret01" },
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
  local entid_env_raw = os.getenv("GITLAB_TEST_PROJECT_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["GITLAB_TEST_PROJECT_ENTID"] = idmap,
    ["GITLAB_TEST_LIVE"] = "FALSE",
    ["GITLAB_TEST_EXPLAIN"] = "FALSE",
    ["GITLAB_APIKEY"] = "NONE",
  })

  local idmap_resolved = helpers.to_map(
    env["GITLAB_TEST_PROJECT_ENTID"])
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
