-- ApiEntitiesAwardEmoji entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("gitlab_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("ApiEntitiesAwardEmojiEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:ApiEntitiesAwardEmoji(nil)
    assert.is_not_nil(ent)
  end)

  -- Feature #4: the entity stream(action, ...) method runs the op pipeline and
  -- returns an iterator over result items. With the streaming feature active it
  -- yields the feature's incremental output; otherwise it falls back to the
  -- materialised list so stream always yields.
  it("should stream", function()
    local seed = {
      entity = {
        ["api_entities_award_emoji"] = {
          s1 = { id = "s1" },
          s2 = { id = "s2" },
          s3 = { id = "s3" },
        },
      },
    }

    -- Fallback: streaming inactive -> yields the materialised list items.
    local base = sdk.test(seed, nil)
    local seen = {}
    for item in base:ApiEntitiesAwardEmoji(nil):stream("list", nil, nil) do
      table.insert(seen, item)
    end
    assert.are.equal(3, #seen)

    -- Inbound: streaming active -> yields each item from the feature.
    local config = require("config")()
    if type(config.feature) == "table" and config.feature.streaming ~= nil then
      local streamsdk = sdk.test(seed, { feature = { streaming = { active = true } } })
      local got = {}
      for item in streamsdk:ApiEntitiesAwardEmoji(nil):stream("list", nil, nil) do
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
    local setup = api_entities_award_emoji_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"create", "list", "load"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "api_entities_award_emoji." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set GITLAB_TEST_API_ENTITIES_AWARD_EMOJI_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- CREATE
    local api_entities_award_emoji_ref01_ent = client:ApiEntitiesAwardEmoji(nil)
    local api_entities_award_emoji_ref01_data = helpers.to_map(vs.getprop(
      vs.getpath(setup.data, "new.api_entities_award_emoji"), "api_entities_award_emoji_ref01"))
    api_entities_award_emoji_ref01_data["epic_id"] = setup.idmap["epic01"]
    api_entities_award_emoji_ref01_data["group_id"] = setup.idmap["group01"]
    api_entities_award_emoji_ref01_data["issue_id"] = setup.idmap["issue01"]
    api_entities_award_emoji_ref01_data["merge_request_id"] = setup.idmap["merge_request01"]
    api_entities_award_emoji_ref01_data["note_id"] = setup.idmap["note01"]
    api_entities_award_emoji_ref01_data["project_id"] = setup.idmap["project01"]
    api_entities_award_emoji_ref01_data["snippet_id"] = setup.idmap["snippet01"]

    local api_entities_award_emoji_ref01_data_result, err = api_entities_award_emoji_ref01_ent:create(api_entities_award_emoji_ref01_data, nil)
    assert.is_nil(err)
    api_entities_award_emoji_ref01_data = helpers.to_map(api_entities_award_emoji_ref01_data_result)
    assert.is_not_nil(api_entities_award_emoji_ref01_data)
    assert.is_not_nil(api_entities_award_emoji_ref01_data["id"])

    -- LIST
    local api_entities_award_emoji_ref01_match = {
      ["project_id"] = setup.idmap["project01"],
      ["snippet_id"] = setup.idmap["snippet01"],
    }

    local api_entities_award_emoji_ref01_list_result, err = api_entities_award_emoji_ref01_ent:list(api_entities_award_emoji_ref01_match, nil)
    assert.is_nil(err)
    assert.is_table(api_entities_award_emoji_ref01_list_result)

    local found_item = vs.select(
      runner.entity_list_to_data(api_entities_award_emoji_ref01_list_result),
      { id = api_entities_award_emoji_ref01_data["id"] })
    assert.is_false(vs.isempty(found_item))

    -- LOAD
    local api_entities_award_emoji_ref01_match_dt0 = {
      id = api_entities_award_emoji_ref01_data["id"],
    }
    local api_entities_award_emoji_ref01_data_dt0_loaded, err = api_entities_award_emoji_ref01_ent:load(api_entities_award_emoji_ref01_match_dt0, nil)
    assert.is_nil(err)
    local api_entities_award_emoji_ref01_data_dt0_load_result = helpers.to_map(api_entities_award_emoji_ref01_data_dt0_loaded)
    assert.is_not_nil(api_entities_award_emoji_ref01_data_dt0_load_result)
    assert.are.equal(api_entities_award_emoji_ref01_data_dt0_load_result["id"], api_entities_award_emoji_ref01_data["id"])

  end)
end)

function api_entities_award_emoji_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/api_entities_award_emoji/ApiEntitiesAwardEmojiTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read api_entities_award_emoji test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "api_entities_award_emoji01", "api_entities_award_emoji02", "api_entities_award_emoji03", "group01", "group02", "group03", "epic01", "epic02", "epic03", "project01", "project02", "project03", "issue01", "issue02", "issue03", "merge_request01", "merge_request02", "merge_request03", "snippet01", "snippet02", "snippet03", "note01", "note02", "note03" },
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
  local entid_env_raw = os.getenv("GITLAB_TEST_API_ENTITIES_AWARD_EMOJI_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["GITLAB_TEST_API_ENTITIES_AWARD_EMOJI_ENTID"] = idmap,
    ["GITLAB_TEST_LIVE"] = "FALSE",
    ["GITLAB_TEST_EXPLAIN"] = "FALSE",
    ["GITLAB_APIKEY"] = "NONE",
  })

  local idmap_resolved = helpers.to_map(
    env["GITLAB_TEST_API_ENTITIES_AWARD_EMOJI_ENTID"])
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
