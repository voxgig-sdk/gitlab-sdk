-- ConanPackage entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("gitlab_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("ConanPackageEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:ConanPackage(nil)
    assert.is_not_nil(ent)
  end)

  it("should run basic flow", function()
    local setup = conan_package_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"update", "load"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "conan_package." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set GITLAB_TEST_CONAN_PACKAGE_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- Bootstrap entity data from existing test data.
    local conan_package_ref01_data_raw = vs.items(helpers.to_map(
      vs.getpath(setup.data, "existing.conan_package")))
    local conan_package_ref01_data = nil
    if #conan_package_ref01_data_raw > 0 then
      conan_package_ref01_data = helpers.to_map(conan_package_ref01_data_raw[1][2])
    end

    -- UPDATE
    local conan_package_ref01_ent = client:ConanPackage(nil)
    local conan_package_ref01_data_up0_up = {
      ["file_id"] = setup.idmap["file_id"],
      ["package_channel"] = setup.idmap["package_channel"],
      ["package_username"] = setup.idmap["package_username"],
      ["package_version"] = setup.idmap["package_version"],
      ["recipe_revision"] = setup.idmap["recipe_revision"],
    }

    local conan_package_ref01_resdata_up0_result, err = conan_package_ref01_ent:update(conan_package_ref01_data_up0_up, nil)
    assert.is_nil(err)
    local conan_package_ref01_resdata_up0 = helpers.to_map(conan_package_ref01_resdata_up0_result)
    assert.is_not_nil(conan_package_ref01_resdata_up0)

    -- LOAD
    local conan_package_ref01_match_dt0 = {}
    local conan_package_ref01_data_dt0_loaded, err = conan_package_ref01_ent:load(conan_package_ref01_match_dt0, nil)
    assert.is_nil(err)
    assert.is_not_nil(conan_package_ref01_data_dt0_loaded)

  end)
end)

function conan_package_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/conan_package/ConanPackageTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read conan_package test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "conan_package01", "conan_package02", "conan_package03", "project01", "project02", "project03", "conan01", "conan02", "conan03", "file01", "file02", "file03", "export01", "export02", "export03", "package01", "package02", "package03", "revision01", "revision02", "revision03", "package_channel01", "package_username01", "package_version01", "recipe_revision01" },
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
  local entid_env_raw = os.getenv("GITLAB_TEST_CONAN_PACKAGE_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["GITLAB_TEST_CONAN_PACKAGE_ENTID"] = idmap,
    ["GITLAB_TEST_LIVE"] = "FALSE",
    ["GITLAB_TEST_EXPLAIN"] = "FALSE",
    ["GITLAB_APIKEY"] = "NONE",
  })

  local idmap_resolved = helpers.to_map(
    env["GITLAB_TEST_CONAN_PACKAGE_ENTID"])
  if idmap_resolved == nil then
    idmap_resolved = helpers.to_map(idmap)
  end
  if idmap_resolved["file_id"] == nil then
    idmap_resolved["file_id"] = idmap_resolved["file01"]
  end
  if idmap_resolved["package_channel"] == nil then
    idmap_resolved["package_channel"] = idmap_resolved["package_channel01"]
  end
  if idmap_resolved["package_username"] == nil then
    idmap_resolved["package_username"] = idmap_resolved["package_username01"]
  end
  if idmap_resolved["package_version"] == nil then
    idmap_resolved["package_version"] = idmap_resolved["package_version01"]
  end
  if idmap_resolved["recipe_revision"] == nil then
    idmap_resolved["recipe_revision"] = idmap_resolved["recipe_revision01"]
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
