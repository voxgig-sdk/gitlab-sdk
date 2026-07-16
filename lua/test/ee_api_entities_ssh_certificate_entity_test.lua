-- EeApiEntitiesSshCertificate entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("gitlab_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("EeApiEntitiesSshCertificateEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:EeApiEntitiesSshCertificate(nil)
    assert.is_not_nil(ent)
  end)

  -- Feature #4: the entity stream(action, ...) method runs the op pipeline and
  -- returns an iterator over result items. With the streaming feature active it
  -- yields the feature's incremental output; otherwise it falls back to the
  -- materialised list so stream always yields.
  it("should stream", function()
    local seed = {
      entity = {
        ["ee_api_entities_ssh_certificate"] = {
          s1 = { id = "s1" },
          s2 = { id = "s2" },
          s3 = { id = "s3" },
        },
      },
    }

    -- Fallback: streaming inactive -> yields the materialised list items.
    local base = sdk.test(seed, nil)
    local seen = {}
    for item in base:EeApiEntitiesSshCertificate(nil):stream("list", nil, nil) do
      table.insert(seen, item)
    end
    assert.are.equal(3, #seen)

    -- Inbound: streaming active -> yields each item from the feature.
    local config = require("config")()
    if type(config.feature) == "table" and config.feature.streaming ~= nil then
      local streamsdk = sdk.test(seed, { feature = { streaming = { active = true } } })
      local got = {}
      for item in streamsdk:EeApiEntitiesSshCertificate(nil):stream("list", nil, nil) do
        if vs.islist(item) then
          for _, sub in ipairs(item) do
            table.insert(got, sub)
          end
        else
          table.insert(got, item)
        end
      end
      assert.are.equal(3, #got)
    end
  end)

  it("should run basic flow", function()
    local setup = ee_api_entities_ssh_certificate_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"create", "list"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "ee_api_entities_ssh_certificate." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set GITLAB_TEST_EE_API_ENTITIES_SSH_CERTIFICATE_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- CREATE
    local ee_api_entities_ssh_certificate_ref01_ent = client:EeApiEntitiesSshCertificate(nil)
    local ee_api_entities_ssh_certificate_ref01_data = helpers.to_map(vs.getprop(
      vs.getpath(setup.data, "new.ee_api_entities_ssh_certificate"), "ee_api_entities_ssh_certificate_ref01"))
    ee_api_entities_ssh_certificate_ref01_data["group_id"] = setup.idmap["group01"]

    local ee_api_entities_ssh_certificate_ref01_data_result, err = ee_api_entities_ssh_certificate_ref01_ent:create(ee_api_entities_ssh_certificate_ref01_data, nil)
    assert.is_nil(err)
    ee_api_entities_ssh_certificate_ref01_data = helpers.to_map(ee_api_entities_ssh_certificate_ref01_data_result)
    assert.is_not_nil(ee_api_entities_ssh_certificate_ref01_data)
    assert.is_not_nil(ee_api_entities_ssh_certificate_ref01_data["id"])

    -- LIST
    local ee_api_entities_ssh_certificate_ref01_match = {
      ["group_id"] = setup.idmap["group01"],
    }

    local ee_api_entities_ssh_certificate_ref01_list_result, err = ee_api_entities_ssh_certificate_ref01_ent:list(ee_api_entities_ssh_certificate_ref01_match, nil)
    assert.is_nil(err)
    assert.is_table(ee_api_entities_ssh_certificate_ref01_list_result)

    local found_item = vs.select(
      runner.entity_list_to_data(ee_api_entities_ssh_certificate_ref01_list_result),
      { id = ee_api_entities_ssh_certificate_ref01_data["id"] })
    assert.is_false(vs.isempty(found_item))

  end)
end)

function ee_api_entities_ssh_certificate_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/ee_api_entities_ssh_certificate/EeApiEntitiesSshCertificateTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read ee_api_entities_ssh_certificate test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "ee_api_entities_ssh_certificate01", "ee_api_entities_ssh_certificate02", "ee_api_entities_ssh_certificate03", "group01", "group02", "group03" },
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
  local entid_env_raw = os.getenv("GITLAB_TEST_EE_API_ENTITIES_SSH_CERTIFICATE_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["GITLAB_TEST_EE_API_ENTITIES_SSH_CERTIFICATE_ENTID"] = idmap,
    ["GITLAB_TEST_LIVE"] = "FALSE",
    ["GITLAB_TEST_EXPLAIN"] = "FALSE",
    ["GITLAB_APIKEY"] = "NONE",
  })

  local idmap_resolved = helpers.to_map(
    env["GITLAB_TEST_EE_API_ENTITIES_SSH_CERTIFICATE_ENTID"])
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
