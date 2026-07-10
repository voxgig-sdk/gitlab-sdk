-- Gitlab SDK

local vs = require("utility.struct.struct")
local Utility = require("core.utility_type")
local Spec = require("core.spec")
local helpers = require("core.helpers")

-- Load utility registration (populates Utility._registrar)
require("utility.register")

-- Load features
local BaseFeature = require("feature.base_feature")
local features_factory = require("features")


local GitlabSDK = {}
GitlabSDK.__index = GitlabSDK


local function _make_feature(name)
  local factory = features_factory[name]
  if factory ~= nil then
    return factory()
  end
  return features_factory.base()
end

GitlabSDK._make_feature = _make_feature


function GitlabSDK.new(options)
  local self = setmetatable({}, GitlabSDK)
  self.mode = "live"
  self.features = {}
  self.options = nil

  local utility = Utility.new()
  self._utility = utility

  local config = require("config")()

  self._rootctx = utility.make_context({
    client = self,
    utility = utility,
    config = config,
    options = options or {},
    shared = {},
  }, nil)

  self.options = utility.make_options(self._rootctx)

  if vs.getpath(self.options, "feature.test.active") == true then
    self.mode = "test"
  end

  self._rootctx.options = self.options

  -- Add features from config.
  local feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
  if feature_opts ~= nil then
    local feature_items = vs.items(feature_opts)
    if feature_items ~= nil then
      for _, item in ipairs(feature_items) do
        local fname = item[1]
        local fopts = helpers.to_map(item[2])
        if fopts ~= nil and fopts["active"] == true then
          utility.feature_add(self._rootctx, _make_feature(fname))
        end
      end
    end
  end

  -- Add extension features.
  local extend = vs.getprop(self.options, "extend")
  if type(extend) == "table" then
    for _, f in ipairs(extend) do
      if type(f) == "table" and type(f.get_name) == "function" then
        utility.feature_add(self._rootctx, f)
      end
    end
  end

  -- Initialize features.
  for _, f in ipairs(self.features) do
    utility.feature_init(self._rootctx, f)
  end

  utility.feature_hook(self._rootctx, "PostConstruct")

  -- #BuildFeatures

  return self
end


function GitlabSDK:options_map()
  local out = vs.clone(self.options)
  if type(out) == "table" then
    return out
  end
  return {}
end


function GitlabSDK:get_utility()
  return Utility.copy(self._utility)
end


function GitlabSDK:get_root_ctx()
  return self._rootctx
end


function GitlabSDK:prepare(fetchargs)
  local utility = self._utility

  fetchargs = fetchargs or {}

  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "prepare",
    ctrl = ctrl,
  }, self._rootctx)

  local options = self.options

  local path = vs.getprop(fetchargs, "path") or ""
  if type(path) ~= "string" then path = "" end

  local method = vs.getprop(fetchargs, "method") or "GET"
  if type(method) ~= "string" then method = "GET" end

  local params = helpers.to_map(vs.getprop(fetchargs, "params")) or {}
  local query = helpers.to_map(vs.getprop(fetchargs, "query")) or {}

  local headers = utility.prepare_headers(ctx)

  local base = vs.getprop(options, "base") or ""
  if type(base) ~= "string" then base = "" end
  local prefix = vs.getprop(options, "prefix") or ""
  if type(prefix) ~= "string" then prefix = "" end
  local suffix = vs.getprop(options, "suffix") or ""
  if type(suffix) ~= "string" then suffix = "" end

  ctx.spec = Spec.new({
    base = base,
    prefix = prefix,
    suffix = suffix,
    path = path,
    method = method,
    params = params,
    query = query,
    headers = headers,
    body = vs.getprop(fetchargs, "body"),
    step = "start",
  })

  -- Merge user-provided headers.
  local uh = vs.getprop(fetchargs, "headers")
  if type(uh) == "table" then
    for k, v in pairs(uh) do
      ctx.spec.headers[k] = v
    end
  end

  local _, err = utility.prepare_auth(ctx)
  if err ~= nil then
    return nil, err
  end

  return utility.make_fetch_def(ctx)
end


function GitlabSDK:direct(fetchargs)
  local utility = self._utility

  local fetchdef, err = self:prepare(fetchargs)
  if err ~= nil then
    return { ok = false, err = err }, nil
  end

  fetchargs = fetchargs or {}
  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "direct",
    ctrl = ctrl,
  }, self._rootctx)

  local url = fetchdef["url"] or ""
  local fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

  if fetch_err ~= nil then
    return { ok = false, err = fetch_err }, nil
  end

  if fetched == nil then
    return {
      ok = false,
      err = ctx:make_error("direct_no_response", "response: undefined"),
    }, nil
  end

  if type(fetched) == "table" then
    local status = helpers.to_int(vs.getprop(fetched, "status"))
    local headers = vs.getprop(fetched, "headers") or {}

    -- No-body responses (204, 304) and explicit zero content-length
    -- must skip JSON parsing — calling json() on an empty body errors.
    local content_length = nil
    if type(headers) == "table" then
      content_length = headers["content-length"]
    end
    local no_body = status == 204 or status == 304 or tostring(content_length) == "0"

    local json_data = nil
    if not no_body then
      local jf = vs.getprop(fetched, "json")
      if type(jf) == "function" then
        local ok, result = pcall(jf)
        if ok then
          json_data = result
        end
        -- Non-JSON body: json_data stays nil, status/headers preserved.
      end
    end

    return {
      ok = status >= 200 and status < 300,
      status = status,
      headers = headers,
      data = json_data,
    }, nil
  end

  return {
    ok = false,
    err = ctx:make_error("direct_invalid", "invalid response type"),
  }, nil
end



-- Idiomatic facade: client:AccessRequest():list() / client:AccessRequest():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:AccessRequest(data)
  local EntityMod = require("entity.access_request_entity")
  if data == nil then
    if self._access_request == nil then
      self._access_request = EntityMod.new(self, nil)
    end
    return self._access_request
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AlertManagement():list() / client:AlertManagement():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:AlertManagement(data)
  local EntityMod = require("entity.alert_management_entity")
  if data == nil then
    if self._alert_management == nil then
      self._alert_management = EntityMod.new(self, nil)
    end
    return self._alert_management
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesAccessRequester():list() / client:ApiEntitiesAccessRequester():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesAccessRequester(data)
  local EntityMod = require("entity.api_entities_access_requester_entity")
  if data == nil then
    if self._api_entities_access_requester == nil then
      self._api_entities_access_requester = EntityMod.new(self, nil)
    end
    return self._api_entities_access_requester
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesAppearance():list() / client:ApiEntitiesAppearance():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesAppearance(data)
  local EntityMod = require("entity.api_entities_appearance_entity")
  if data == nil then
    if self._api_entities_appearance == nil then
      self._api_entities_appearance = EntityMod.new(self, nil)
    end
    return self._api_entities_appearance
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesApplication():list() / client:ApiEntitiesApplication():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesApplication(data)
  local EntityMod = require("entity.api_entities_application_entity")
  if data == nil then
    if self._api_entities_application == nil then
      self._api_entities_application = EntityMod.new(self, nil)
    end
    return self._api_entities_application
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesApplicationStatistic():list() / client:ApiEntitiesApplicationStatistic():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesApplicationStatistic(data)
  local EntityMod = require("entity.api_entities_application_statistic_entity")
  if data == nil then
    if self._api_entities_application_statistic == nil then
      self._api_entities_application_statistic = EntityMod.new(self, nil)
    end
    return self._api_entities_application_statistic
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesApplicationWithSecret():list() / client:ApiEntitiesApplicationWithSecret():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesApplicationWithSecret(data)
  local EntityMod = require("entity.api_entities_application_with_secret_entity")
  if data == nil then
    if self._api_entities_application_with_secret == nil then
      self._api_entities_application_with_secret = EntityMod.new(self, nil)
    end
    return self._api_entities_application_with_secret
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesAvatar():list() / client:ApiEntitiesAvatar():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesAvatar(data)
  local EntityMod = require("entity.api_entities_avatar_entity")
  if data == nil then
    if self._api_entities_avatar == nil then
      self._api_entities_avatar = EntityMod.new(self, nil)
    end
    return self._api_entities_avatar
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesAwardEmoji():list() / client:ApiEntitiesAwardEmoji():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesAwardEmoji(data)
  local EntityMod = require("entity.api_entities_award_emoji_entity")
  if data == nil then
    if self._api_entities_award_emoji == nil then
      self._api_entities_award_emoji = EntityMod.new(self, nil)
    end
    return self._api_entities_award_emoji
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesBadge():list() / client:ApiEntitiesBadge():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesBadge(data)
  local EntityMod = require("entity.api_entities_badge_entity")
  if data == nil then
    if self._api_entities_badge == nil then
      self._api_entities_badge = EntityMod.new(self, nil)
    end
    return self._api_entities_badge
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesBasicBadgeDetail():list() / client:ApiEntitiesBasicBadgeDetail():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesBasicBadgeDetail(data)
  local EntityMod = require("entity.api_entities_basic_badge_detail_entity")
  if data == nil then
    if self._api_entities_basic_badge_detail == nil then
      self._api_entities_basic_badge_detail = EntityMod.new(self, nil)
    end
    return self._api_entities_basic_badge_detail
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesBasicGroupDetail():list() / client:ApiEntitiesBasicGroupDetail():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesBasicGroupDetail(data)
  local EntityMod = require("entity.api_entities_basic_group_detail_entity")
  if data == nil then
    if self._api_entities_basic_group_detail == nil then
      self._api_entities_basic_group_detail = EntityMod.new(self, nil)
    end
    return self._api_entities_basic_group_detail
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesBasicProjectDetail():list() / client:ApiEntitiesBasicProjectDetail():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesBasicProjectDetail(data)
  local EntityMod = require("entity.api_entities_basic_project_detail_entity")
  if data == nil then
    if self._api_entities_basic_project_detail == nil then
      self._api_entities_basic_project_detail = EntityMod.new(self, nil)
    end
    return self._api_entities_basic_project_detail
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesBasicRef():list() / client:ApiEntitiesBasicRef():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesBasicRef(data)
  local EntityMod = require("entity.api_entities_basic_ref_entity")
  if data == nil then
    if self._api_entities_basic_ref == nil then
      self._api_entities_basic_ref = EntityMod.new(self, nil)
    end
    return self._api_entities_basic_ref
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesBasicSuccess():list() / client:ApiEntitiesBasicSuccess():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesBasicSuccess(data)
  local EntityMod = require("entity.api_entities_basic_success_entity")
  if data == nil then
    if self._api_entities_basic_success == nil then
      self._api_entities_basic_success = EntityMod.new(self, nil)
    end
    return self._api_entities_basic_success
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesBatchedBackgroundMigration():list() / client:ApiEntitiesBatchedBackgroundMigration():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesBatchedBackgroundMigration(data)
  local EntityMod = require("entity.api_entities_batched_background_migration_entity")
  if data == nil then
    if self._api_entities_batched_background_migration == nil then
      self._api_entities_batched_background_migration = EntityMod.new(self, nil)
    end
    return self._api_entities_batched_background_migration
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesBranch():list() / client:ApiEntitiesBranch():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesBranch(data)
  local EntityMod = require("entity.api_entities_branch_entity")
  if data == nil then
    if self._api_entities_branch == nil then
      self._api_entities_branch = EntityMod.new(self, nil)
    end
    return self._api_entities_branch
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesBulkImport():list() / client:ApiEntitiesBulkImport():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesBulkImport(data)
  local EntityMod = require("entity.api_entities_bulk_import_entity")
  if data == nil then
    if self._api_entities_bulk_import == nil then
      self._api_entities_bulk_import = EntityMod.new(self, nil)
    end
    return self._api_entities_bulk_import
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesBulkImportsEntityFailure():list() / client:ApiEntitiesBulkImportsEntityFailure():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesBulkImportsEntityFailure(data)
  local EntityMod = require("entity.api_entities_bulk_imports_entity_failure_entity")
  if data == nil then
    if self._api_entities_bulk_imports_entity_failure == nil then
      self._api_entities_bulk_imports_entity_failure = EntityMod.new(self, nil)
    end
    return self._api_entities_bulk_imports_entity_failure
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesBulkImportsExportStatus():list() / client:ApiEntitiesBulkImportsExportStatus():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesBulkImportsExportStatus(data)
  local EntityMod = require("entity.api_entities_bulk_imports_export_status_entity")
  if data == nil then
    if self._api_entities_bulk_imports_export_status == nil then
      self._api_entities_bulk_imports_export_status = EntityMod.new(self, nil)
    end
    return self._api_entities_bulk_imports_export_status
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesChangelog():list() / client:ApiEntitiesChangelog():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesChangelog(data)
  local EntityMod = require("entity.api_entities_changelog_entity")
  if data == nil then
    if self._api_entities_changelog == nil then
      self._api_entities_changelog = EntityMod.new(self, nil)
    end
    return self._api_entities_changelog
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesCiBridge():list() / client:ApiEntitiesCiBridge():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesCiBridge(data)
  local EntityMod = require("entity.api_entities_ci_bridge_entity")
  if data == nil then
    if self._api_entities_ci_bridge == nil then
      self._api_entities_ci_bridge = EntityMod.new(self, nil)
    end
    return self._api_entities_ci_bridge
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesCiCatalogResourcesVersion():list() / client:ApiEntitiesCiCatalogResourcesVersion():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesCiCatalogResourcesVersion(data)
  local EntityMod = require("entity.api_entities_ci_catalog_resources_version_entity")
  if data == nil then
    if self._api_entities_ci_catalog_resources_version == nil then
      self._api_entities_ci_catalog_resources_version = EntityMod.new(self, nil)
    end
    return self._api_entities_ci_catalog_resources_version
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesCiJob():list() / client:ApiEntitiesCiJob():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesCiJob(data)
  local EntityMod = require("entity.api_entities_ci_job_entity")
  if data == nil then
    if self._api_entities_ci_job == nil then
      self._api_entities_ci_job = EntityMod.new(self, nil)
    end
    return self._api_entities_ci_job
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesCiJobBasic():list() / client:ApiEntitiesCiJobBasic():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesCiJobBasic(data)
  local EntityMod = require("entity.api_entities_ci_job_basic_entity")
  if data == nil then
    if self._api_entities_ci_job_basic == nil then
      self._api_entities_ci_job_basic = EntityMod.new(self, nil)
    end
    return self._api_entities_ci_job_basic
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesCiJobBasicWithProject():list() / client:ApiEntitiesCiJobBasicWithProject():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesCiJobBasicWithProject(data)
  local EntityMod = require("entity.api_entities_ci_job_basic_with_project_entity")
  if data == nil then
    if self._api_entities_ci_job_basic_with_project == nil then
      self._api_entities_ci_job_basic_with_project = EntityMod.new(self, nil)
    end
    return self._api_entities_ci_job_basic_with_project
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesCiLintResult():list() / client:ApiEntitiesCiLintResult():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesCiLintResult(data)
  local EntityMod = require("entity.api_entities_ci_lint_result_entity")
  if data == nil then
    if self._api_entities_ci_lint_result == nil then
      self._api_entities_ci_lint_result = EntityMod.new(self, nil)
    end
    return self._api_entities_ci_lint_result
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesCiPipeline():list() / client:ApiEntitiesCiPipeline():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesCiPipeline(data)
  local EntityMod = require("entity.api_entities_ci_pipeline_entity")
  if data == nil then
    if self._api_entities_ci_pipeline == nil then
      self._api_entities_ci_pipeline = EntityMod.new(self, nil)
    end
    return self._api_entities_ci_pipeline
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesCiPipelineBasic():list() / client:ApiEntitiesCiPipelineBasic():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesCiPipelineBasic(data)
  local EntityMod = require("entity.api_entities_ci_pipeline_basic_entity")
  if data == nil then
    if self._api_entities_ci_pipeline_basic == nil then
      self._api_entities_ci_pipeline_basic = EntityMod.new(self, nil)
    end
    return self._api_entities_ci_pipeline_basic
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesCiPipelineSchedule():list() / client:ApiEntitiesCiPipelineSchedule():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesCiPipelineSchedule(data)
  local EntityMod = require("entity.api_entities_ci_pipeline_schedule_entity")
  if data == nil then
    if self._api_entities_ci_pipeline_schedule == nil then
      self._api_entities_ci_pipeline_schedule = EntityMod.new(self, nil)
    end
    return self._api_entities_ci_pipeline_schedule
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesCiPipelineScheduleDetail():list() / client:ApiEntitiesCiPipelineScheduleDetail():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesCiPipelineScheduleDetail(data)
  local EntityMod = require("entity.api_entities_ci_pipeline_schedule_detail_entity")
  if data == nil then
    if self._api_entities_ci_pipeline_schedule_detail == nil then
      self._api_entities_ci_pipeline_schedule_detail = EntityMod.new(self, nil)
    end
    return self._api_entities_ci_pipeline_schedule_detail
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesCiResetTokenResult():list() / client:ApiEntitiesCiResetTokenResult():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesCiResetTokenResult(data)
  local EntityMod = require("entity.api_entities_ci_reset_token_result_entity")
  if data == nil then
    if self._api_entities_ci_reset_token_result == nil then
      self._api_entities_ci_reset_token_result = EntityMod.new(self, nil)
    end
    return self._api_entities_ci_reset_token_result
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesCiResourceGroup():list() / client:ApiEntitiesCiResourceGroup():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesCiResourceGroup(data)
  local EntityMod = require("entity.api_entities_ci_resource_group_entity")
  if data == nil then
    if self._api_entities_ci_resource_group == nil then
      self._api_entities_ci_resource_group = EntityMod.new(self, nil)
    end
    return self._api_entities_ci_resource_group
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesCiRunner():list() / client:ApiEntitiesCiRunner():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesCiRunner(data)
  local EntityMod = require("entity.api_entities_ci_runner_entity")
  if data == nil then
    if self._api_entities_ci_runner == nil then
      self._api_entities_ci_runner = EntityMod.new(self, nil)
    end
    return self._api_entities_ci_runner
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesCiRunnerDetail():list() / client:ApiEntitiesCiRunnerDetail():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesCiRunnerDetail(data)
  local EntityMod = require("entity.api_entities_ci_runner_detail_entity")
  if data == nil then
    if self._api_entities_ci_runner_detail == nil then
      self._api_entities_ci_runner_detail = EntityMod.new(self, nil)
    end
    return self._api_entities_ci_runner_detail
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesCiRunnerManager():list() / client:ApiEntitiesCiRunnerManager():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesCiRunnerManager(data)
  local EntityMod = require("entity.api_entities_ci_runner_manager_entity")
  if data == nil then
    if self._api_entities_ci_runner_manager == nil then
      self._api_entities_ci_runner_manager = EntityMod.new(self, nil)
    end
    return self._api_entities_ci_runner_manager
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesCiRunnerRegistrationDetail():list() / client:ApiEntitiesCiRunnerRegistrationDetail():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesCiRunnerRegistrationDetail(data)
  local EntityMod = require("entity.api_entities_ci_runner_registration_detail_entity")
  if data == nil then
    if self._api_entities_ci_runner_registration_detail == nil then
      self._api_entities_ci_runner_registration_detail = EntityMod.new(self, nil)
    end
    return self._api_entities_ci_runner_registration_detail
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesCiSecureFile():list() / client:ApiEntitiesCiSecureFile():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesCiSecureFile(data)
  local EntityMod = require("entity.api_entities_ci_secure_file_entity")
  if data == nil then
    if self._api_entities_ci_secure_file == nil then
      self._api_entities_ci_secure_file = EntityMod.new(self, nil)
    end
    return self._api_entities_ci_secure_file
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesCiVariable():list() / client:ApiEntitiesCiVariable():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesCiVariable(data)
  local EntityMod = require("entity.api_entities_ci_variable_entity")
  if data == nil then
    if self._api_entities_ci_variable == nil then
      self._api_entities_ci_variable = EntityMod.new(self, nil)
    end
    return self._api_entities_ci_variable
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesCluster():list() / client:ApiEntitiesCluster():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesCluster(data)
  local EntityMod = require("entity.api_entities_cluster_entity")
  if data == nil then
    if self._api_entities_cluster == nil then
      self._api_entities_cluster = EntityMod.new(self, nil)
    end
    return self._api_entities_cluster
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesClusterGroup():list() / client:ApiEntitiesClusterGroup():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesClusterGroup(data)
  local EntityMod = require("entity.api_entities_cluster_group_entity")
  if data == nil then
    if self._api_entities_cluster_group == nil then
      self._api_entities_cluster_group = EntityMod.new(self, nil)
    end
    return self._api_entities_cluster_group
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesClusterProject():list() / client:ApiEntitiesClusterProject():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesClusterProject(data)
  local EntityMod = require("entity.api_entities_cluster_project_entity")
  if data == nil then
    if self._api_entities_cluster_project == nil then
      self._api_entities_cluster_project = EntityMod.new(self, nil)
    end
    return self._api_entities_cluster_project
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesClustersAgent():list() / client:ApiEntitiesClustersAgent():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesClustersAgent(data)
  local EntityMod = require("entity.api_entities_clusters_agent_entity")
  if data == nil then
    if self._api_entities_clusters_agent == nil then
      self._api_entities_clusters_agent = EntityMod.new(self, nil)
    end
    return self._api_entities_clusters_agent
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesClustersAgentToken():list() / client:ApiEntitiesClustersAgentToken():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesClustersAgentToken(data)
  local EntityMod = require("entity.api_entities_clusters_agent_token_entity")
  if data == nil then
    if self._api_entities_clusters_agent_token == nil then
      self._api_entities_clusters_agent_token = EntityMod.new(self, nil)
    end
    return self._api_entities_clusters_agent_token
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesClustersAgentTokenBasic():list() / client:ApiEntitiesClustersAgentTokenBasic():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesClustersAgentTokenBasic(data)
  local EntityMod = require("entity.api_entities_clusters_agent_token_basic_entity")
  if data == nil then
    if self._api_entities_clusters_agent_token_basic == nil then
      self._api_entities_clusters_agent_token_basic = EntityMod.new(self, nil)
    end
    return self._api_entities_clusters_agent_token_basic
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesClustersAgentTokenWithToken():list() / client:ApiEntitiesClustersAgentTokenWithToken():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesClustersAgentTokenWithToken(data)
  local EntityMod = require("entity.api_entities_clusters_agent_token_with_token_entity")
  if data == nil then
    if self._api_entities_clusters_agent_token_with_token == nil then
      self._api_entities_clusters_agent_token_with_token = EntityMod.new(self, nil)
    end
    return self._api_entities_clusters_agent_token_with_token
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesCommit():list() / client:ApiEntitiesCommit():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesCommit(data)
  local EntityMod = require("entity.api_entities_commit_entity")
  if data == nil then
    if self._api_entities_commit == nil then
      self._api_entities_commit = EntityMod.new(self, nil)
    end
    return self._api_entities_commit
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesCommitDetail():list() / client:ApiEntitiesCommitDetail():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesCommitDetail(data)
  local EntityMod = require("entity.api_entities_commit_detail_entity")
  if data == nil then
    if self._api_entities_commit_detail == nil then
      self._api_entities_commit_detail = EntityMod.new(self, nil)
    end
    return self._api_entities_commit_detail
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesCommitNote():list() / client:ApiEntitiesCommitNote():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesCommitNote(data)
  local EntityMod = require("entity.api_entities_commit_note_entity")
  if data == nil then
    if self._api_entities_commit_note == nil then
      self._api_entities_commit_note = EntityMod.new(self, nil)
    end
    return self._api_entities_commit_note
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesCommitSequence():list() / client:ApiEntitiesCommitSequence():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesCommitSequence(data)
  local EntityMod = require("entity.api_entities_commit_sequence_entity")
  if data == nil then
    if self._api_entities_commit_sequence == nil then
      self._api_entities_commit_sequence = EntityMod.new(self, nil)
    end
    return self._api_entities_commit_sequence
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesCommitSignature():list() / client:ApiEntitiesCommitSignature():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesCommitSignature(data)
  local EntityMod = require("entity.api_entities_commit_signature_entity")
  if data == nil then
    if self._api_entities_commit_signature == nil then
      self._api_entities_commit_signature = EntityMod.new(self, nil)
    end
    return self._api_entities_commit_signature
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesCommitStatus():list() / client:ApiEntitiesCommitStatus():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesCommitStatus(data)
  local EntityMod = require("entity.api_entities_commit_status_entity")
  if data == nil then
    if self._api_entities_commit_status == nil then
      self._api_entities_commit_status = EntityMod.new(self, nil)
    end
    return self._api_entities_commit_status
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesCompare():list() / client:ApiEntitiesCompare():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesCompare(data)
  local EntityMod = require("entity.api_entities_compare_entity")
  if data == nil then
    if self._api_entities_compare == nil then
      self._api_entities_compare = EntityMod.new(self, nil)
    end
    return self._api_entities_compare
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesContainerRegistryRepository():list() / client:ApiEntitiesContainerRegistryRepository():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesContainerRegistryRepository(data)
  local EntityMod = require("entity.api_entities_container_registry_repository_entity")
  if data == nil then
    if self._api_entities_container_registry_repository == nil then
      self._api_entities_container_registry_repository = EntityMod.new(self, nil)
    end
    return self._api_entities_container_registry_repository
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesContainerRegistryTag():list() / client:ApiEntitiesContainerRegistryTag():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesContainerRegistryTag(data)
  local EntityMod = require("entity.api_entities_container_registry_tag_entity")
  if data == nil then
    if self._api_entities_container_registry_tag == nil then
      self._api_entities_container_registry_tag = EntityMod.new(self, nil)
    end
    return self._api_entities_container_registry_tag
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesContainerRegistryTagDetail():list() / client:ApiEntitiesContainerRegistryTagDetail():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesContainerRegistryTagDetail(data)
  local EntityMod = require("entity.api_entities_container_registry_tag_detail_entity")
  if data == nil then
    if self._api_entities_container_registry_tag_detail == nil then
      self._api_entities_container_registry_tag_detail = EntityMod.new(self, nil)
    end
    return self._api_entities_container_registry_tag_detail
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesContributor():list() / client:ApiEntitiesContributor():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesContributor(data)
  local EntityMod = require("entity.api_entities_contributor_entity")
  if data == nil then
    if self._api_entities_contributor == nil then
      self._api_entities_contributor = EntityMod.new(self, nil)
    end
    return self._api_entities_contributor
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesDeployKey():list() / client:ApiEntitiesDeployKey():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesDeployKey(data)
  local EntityMod = require("entity.api_entities_deploy_key_entity")
  if data == nil then
    if self._api_entities_deploy_key == nil then
      self._api_entities_deploy_key = EntityMod.new(self, nil)
    end
    return self._api_entities_deploy_key
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesDeployKeysProject():list() / client:ApiEntitiesDeployKeysProject():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesDeployKeysProject(data)
  local EntityMod = require("entity.api_entities_deploy_keys_project_entity")
  if data == nil then
    if self._api_entities_deploy_keys_project == nil then
      self._api_entities_deploy_keys_project = EntityMod.new(self, nil)
    end
    return self._api_entities_deploy_keys_project
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesDeployToken():list() / client:ApiEntitiesDeployToken():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesDeployToken(data)
  local EntityMod = require("entity.api_entities_deploy_token_entity")
  if data == nil then
    if self._api_entities_deploy_token == nil then
      self._api_entities_deploy_token = EntityMod.new(self, nil)
    end
    return self._api_entities_deploy_token
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesDeployTokenWithToken():list() / client:ApiEntitiesDeployTokenWithToken():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesDeployTokenWithToken(data)
  local EntityMod = require("entity.api_entities_deploy_token_with_token_entity")
  if data == nil then
    if self._api_entities_deploy_token_with_token == nil then
      self._api_entities_deploy_token_with_token = EntityMod.new(self, nil)
    end
    return self._api_entities_deploy_token_with_token
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesDeployment():list() / client:ApiEntitiesDeployment():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesDeployment(data)
  local EntityMod = require("entity.api_entities_deployment_entity")
  if data == nil then
    if self._api_entities_deployment == nil then
      self._api_entities_deployment = EntityMod.new(self, nil)
    end
    return self._api_entities_deployment
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesDeploymentExtended():list() / client:ApiEntitiesDeploymentExtended():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesDeploymentExtended(data)
  local EntityMod = require("entity.api_entities_deployment_extended_entity")
  if data == nil then
    if self._api_entities_deployment_extended == nil then
      self._api_entities_deployment_extended = EntityMod.new(self, nil)
    end
    return self._api_entities_deployment_extended
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesDeploymentsApproval():list() / client:ApiEntitiesDeploymentsApproval():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesDeploymentsApproval(data)
  local EntityMod = require("entity.api_entities_deployments_approval_entity")
  if data == nil then
    if self._api_entities_deployments_approval == nil then
      self._api_entities_deployments_approval = EntityMod.new(self, nil)
    end
    return self._api_entities_deployments_approval
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesDictionaryTable():list() / client:ApiEntitiesDictionaryTable():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesDictionaryTable(data)
  local EntityMod = require("entity.api_entities_dictionary_table_entity")
  if data == nil then
    if self._api_entities_dictionary_table == nil then
      self._api_entities_dictionary_table = EntityMod.new(self, nil)
    end
    return self._api_entities_dictionary_table
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesDiff():list() / client:ApiEntitiesDiff():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesDiff(data)
  local EntityMod = require("entity.api_entities_diff_entity")
  if data == nil then
    if self._api_entities_diff == nil then
      self._api_entities_diff = EntityMod.new(self, nil)
    end
    return self._api_entities_diff
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesDiscoveredCluster():list() / client:ApiEntitiesDiscoveredCluster():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesDiscoveredCluster(data)
  local EntityMod = require("entity.api_entities_discovered_cluster_entity")
  if data == nil then
    if self._api_entities_discovered_cluster == nil then
      self._api_entities_discovered_cluster = EntityMod.new(self, nil)
    end
    return self._api_entities_discovered_cluster
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesDraftNote():list() / client:ApiEntitiesDraftNote():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesDraftNote(data)
  local EntityMod = require("entity.api_entities_draft_note_entity")
  if data == nil then
    if self._api_entities_draft_note == nil then
      self._api_entities_draft_note = EntityMod.new(self, nil)
    end
    return self._api_entities_draft_note
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesEnvironment():list() / client:ApiEntitiesEnvironment():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesEnvironment(data)
  local EntityMod = require("entity.api_entities_environment_entity")
  if data == nil then
    if self._api_entities_environment == nil then
      self._api_entities_environment = EntityMod.new(self, nil)
    end
    return self._api_entities_environment
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesErrorTrackingClientKey():list() / client:ApiEntitiesErrorTrackingClientKey():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesErrorTrackingClientKey(data)
  local EntityMod = require("entity.api_entities_error_tracking_client_key_entity")
  if data == nil then
    if self._api_entities_error_tracking_client_key == nil then
      self._api_entities_error_tracking_client_key = EntityMod.new(self, nil)
    end
    return self._api_entities_error_tracking_client_key
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesErrorTrackingProjectSetting():list() / client:ApiEntitiesErrorTrackingProjectSetting():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesErrorTrackingProjectSetting(data)
  local EntityMod = require("entity.api_entities_error_tracking_project_setting_entity")
  if data == nil then
    if self._api_entities_error_tracking_project_setting == nil then
      self._api_entities_error_tracking_project_setting = EntityMod.new(self, nil)
    end
    return self._api_entities_error_tracking_project_setting
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesEvent():list() / client:ApiEntitiesEvent():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesEvent(data)
  local EntityMod = require("entity.api_entities_event_entity")
  if data == nil then
    if self._api_entities_event == nil then
      self._api_entities_event = EntityMod.new(self, nil)
    end
    return self._api_entities_event
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesFeature():list() / client:ApiEntitiesFeature():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesFeature(data)
  local EntityMod = require("entity.api_entities_feature_entity")
  if data == nil then
    if self._api_entities_feature == nil then
      self._api_entities_feature = EntityMod.new(self, nil)
    end
    return self._api_entities_feature
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesFeatureDefinition():list() / client:ApiEntitiesFeatureDefinition():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesFeatureDefinition(data)
  local EntityMod = require("entity.api_entities_feature_definition_entity")
  if data == nil then
    if self._api_entities_feature_definition == nil then
      self._api_entities_feature_definition = EntityMod.new(self, nil)
    end
    return self._api_entities_feature_definition
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesFeatureFlag():list() / client:ApiEntitiesFeatureFlag():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesFeatureFlag(data)
  local EntityMod = require("entity.api_entities_feature_flag_entity")
  if data == nil then
    if self._api_entities_feature_flag == nil then
      self._api_entities_feature_flag = EntityMod.new(self, nil)
    end
    return self._api_entities_feature_flag
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesFeatureFlagUserList():list() / client:ApiEntitiesFeatureFlagUserList():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesFeatureFlagUserList(data)
  local EntityMod = require("entity.api_entities_feature_flag_user_list_entity")
  if data == nil then
    if self._api_entities_feature_flag_user_list == nil then
      self._api_entities_feature_flag_user_list = EntityMod.new(self, nil)
    end
    return self._api_entities_feature_flag_user_list
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesFreezePeriod():list() / client:ApiEntitiesFreezePeriod():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesFreezePeriod(data)
  local EntityMod = require("entity.api_entities_freeze_period_entity")
  if data == nil then
    if self._api_entities_freeze_period == nil then
      self._api_entities_freeze_period = EntityMod.new(self, nil)
    end
    return self._api_entities_freeze_period
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesGitlabSubscription():list() / client:ApiEntitiesGitlabSubscription():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesGitlabSubscription(data)
  local EntityMod = require("entity.api_entities_gitlab_subscription_entity")
  if data == nil then
    if self._api_entities_gitlab_subscription == nil then
      self._api_entities_gitlab_subscription = EntityMod.new(self, nil)
    end
    return self._api_entities_gitlab_subscription
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesGoModuleVersion():list() / client:ApiEntitiesGoModuleVersion():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesGoModuleVersion(data)
  local EntityMod = require("entity.api_entities_go_module_version_entity")
  if data == nil then
    if self._api_entities_go_module_version == nil then
      self._api_entities_go_module_version = EntityMod.new(self, nil)
    end
    return self._api_entities_go_module_version
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesGroup():list() / client:ApiEntitiesGroup():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesGroup(data)
  local EntityMod = require("entity.api_entities_group_entity")
  if data == nil then
    if self._api_entities_group == nil then
      self._api_entities_group = EntityMod.new(self, nil)
    end
    return self._api_entities_group
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesGroupDetail():list() / client:ApiEntitiesGroupDetail():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesGroupDetail(data)
  local EntityMod = require("entity.api_entities_group_detail_entity")
  if data == nil then
    if self._api_entities_group_detail == nil then
      self._api_entities_group_detail = EntityMod.new(self, nil)
    end
    return self._api_entities_group_detail
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesHook():list() / client:ApiEntitiesHook():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesHook(data)
  local EntityMod = require("entity.api_entities_hook_entity")
  if data == nil then
    if self._api_entities_hook == nil then
      self._api_entities_hook = EntityMod.new(self, nil)
    end
    return self._api_entities_hook
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesIntegration():list() / client:ApiEntitiesIntegration():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesIntegration(data)
  local EntityMod = require("entity.api_entities_integration_entity")
  if data == nil then
    if self._api_entities_integration == nil then
      self._api_entities_integration = EntityMod.new(self, nil)
    end
    return self._api_entities_integration
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesIntegrationBasic():list() / client:ApiEntitiesIntegrationBasic():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesIntegrationBasic(data)
  local EntityMod = require("entity.api_entities_integration_basic_entity")
  if data == nil then
    if self._api_entities_integration_basic == nil then
      self._api_entities_integration_basic = EntityMod.new(self, nil)
    end
    return self._api_entities_integration_basic
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesInvitation():list() / client:ApiEntitiesInvitation():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesInvitation(data)
  local EntityMod = require("entity.api_entities_invitation_entity")
  if data == nil then
    if self._api_entities_invitation == nil then
      self._api_entities_invitation = EntityMod.new(self, nil)
    end
    return self._api_entities_invitation
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesIssuableTimeStat():list() / client:ApiEntitiesIssuableTimeStat():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesIssuableTimeStat(data)
  local EntityMod = require("entity.api_entities_issuable_time_stat_entity")
  if data == nil then
    if self._api_entities_issuable_time_stat == nil then
      self._api_entities_issuable_time_stat = EntityMod.new(self, nil)
    end
    return self._api_entities_issuable_time_stat
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesIssue():list() / client:ApiEntitiesIssue():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesIssue(data)
  local EntityMod = require("entity.api_entities_issue_entity")
  if data == nil then
    if self._api_entities_issue == nil then
      self._api_entities_issue = EntityMod.new(self, nil)
    end
    return self._api_entities_issue
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesIssueLink():list() / client:ApiEntitiesIssueLink():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesIssueLink(data)
  local EntityMod = require("entity.api_entities_issue_link_entity")
  if data == nil then
    if self._api_entities_issue_link == nil then
      self._api_entities_issue_link = EntityMod.new(self, nil)
    end
    return self._api_entities_issue_link
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesLicense():list() / client:ApiEntitiesLicense():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesLicense(data)
  local EntityMod = require("entity.api_entities_license_entity")
  if data == nil then
    if self._api_entities_license == nil then
      self._api_entities_license = EntityMod.new(self, nil)
    end
    return self._api_entities_license
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesMarkdown():list() / client:ApiEntitiesMarkdown():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesMarkdown(data)
  local EntityMod = require("entity.api_entities_markdown_entity")
  if data == nil then
    if self._api_entities_markdown == nil then
      self._api_entities_markdown = EntityMod.new(self, nil)
    end
    return self._api_entities_markdown
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesMarkdownUploadAdmin():list() / client:ApiEntitiesMarkdownUploadAdmin():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesMarkdownUploadAdmin(data)
  local EntityMod = require("entity.api_entities_markdown_upload_admin_entity")
  if data == nil then
    if self._api_entities_markdown_upload_admin == nil then
      self._api_entities_markdown_upload_admin = EntityMod.new(self, nil)
    end
    return self._api_entities_markdown_upload_admin
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesMember():list() / client:ApiEntitiesMember():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesMember(data)
  local EntityMod = require("entity.api_entities_member_entity")
  if data == nil then
    if self._api_entities_member == nil then
      self._api_entities_member = EntityMod.new(self, nil)
    end
    return self._api_entities_member
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesMerge():list() / client:ApiEntitiesMerge():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesMerge(data)
  local EntityMod = require("entity.api_entities_merge_entity")
  if data == nil then
    if self._api_entities_merge == nil then
      self._api_entities_merge = EntityMod.new(self, nil)
    end
    return self._api_entities_merge
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesMergeRequestApproval():list() / client:ApiEntitiesMergeRequestApproval():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesMergeRequestApproval(data)
  local EntityMod = require("entity.api_entities_merge_request_approval_entity")
  if data == nil then
    if self._api_entities_merge_request_approval == nil then
      self._api_entities_merge_request_approval = EntityMod.new(self, nil)
    end
    return self._api_entities_merge_request_approval
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesMergeRequestBasic():list() / client:ApiEntitiesMergeRequestBasic():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesMergeRequestBasic(data)
  local EntityMod = require("entity.api_entities_merge_request_basic_entity")
  if data == nil then
    if self._api_entities_merge_request_basic == nil then
      self._api_entities_merge_request_basic = EntityMod.new(self, nil)
    end
    return self._api_entities_merge_request_basic
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesMergeRequestChange():list() / client:ApiEntitiesMergeRequestChange():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesMergeRequestChange(data)
  local EntityMod = require("entity.api_entities_merge_request_change_entity")
  if data == nil then
    if self._api_entities_merge_request_change == nil then
      self._api_entities_merge_request_change = EntityMod.new(self, nil)
    end
    return self._api_entities_merge_request_change
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesMergeRequestDiff():list() / client:ApiEntitiesMergeRequestDiff():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesMergeRequestDiff(data)
  local EntityMod = require("entity.api_entities_merge_request_diff_entity")
  if data == nil then
    if self._api_entities_merge_request_diff == nil then
      self._api_entities_merge_request_diff = EntityMod.new(self, nil)
    end
    return self._api_entities_merge_request_diff
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesMergeRequestDiffFull():list() / client:ApiEntitiesMergeRequestDiffFull():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesMergeRequestDiffFull(data)
  local EntityMod = require("entity.api_entities_merge_request_diff_full_entity")
  if data == nil then
    if self._api_entities_merge_request_diff_full == nil then
      self._api_entities_merge_request_diff_full = EntityMod.new(self, nil)
    end
    return self._api_entities_merge_request_diff_full
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesMergeRequestReviewer():list() / client:ApiEntitiesMergeRequestReviewer():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesMergeRequestReviewer(data)
  local EntityMod = require("entity.api_entities_merge_request_reviewer_entity")
  if data == nil then
    if self._api_entities_merge_request_reviewer == nil then
      self._api_entities_merge_request_reviewer = EntityMod.new(self, nil)
    end
    return self._api_entities_merge_request_reviewer
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesMetricImage():list() / client:ApiEntitiesMetricImage():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesMetricImage(data)
  local EntityMod = require("entity.api_entities_metric_image_entity")
  if data == nil then
    if self._api_entities_metric_image == nil then
      self._api_entities_metric_image = EntityMod.new(self, nil)
    end
    return self._api_entities_metric_image
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesMrNote():list() / client:ApiEntitiesMrNote():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesMrNote(data)
  local EntityMod = require("entity.api_entities_mr_note_entity")
  if data == nil then
    if self._api_entities_mr_note == nil then
      self._api_entities_mr_note = EntityMod.new(self, nil)
    end
    return self._api_entities_mr_note
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesNamespace():list() / client:ApiEntitiesNamespace():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesNamespace(data)
  local EntityMod = require("entity.api_entities_namespace_entity")
  if data == nil then
    if self._api_entities_namespace == nil then
      self._api_entities_namespace = EntityMod.new(self, nil)
    end
    return self._api_entities_namespace
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesNamespaceExistence():list() / client:ApiEntitiesNamespaceExistence():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesNamespaceExistence(data)
  local EntityMod = require("entity.api_entities_namespace_existence_entity")
  if data == nil then
    if self._api_entities_namespace_existence == nil then
      self._api_entities_namespace_existence = EntityMod.new(self, nil)
    end
    return self._api_entities_namespace_existence
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesNamespacesStorageLimitExclusion():list() / client:ApiEntitiesNamespacesStorageLimitExclusion():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesNamespacesStorageLimitExclusion(data)
  local EntityMod = require("entity.api_entities_namespaces_storage_limit_exclusion_entity")
  if data == nil then
    if self._api_entities_namespaces_storage_limit_exclusion == nil then
      self._api_entities_namespaces_storage_limit_exclusion = EntityMod.new(self, nil)
    end
    return self._api_entities_namespaces_storage_limit_exclusion
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesNpmPackage():list() / client:ApiEntitiesNpmPackage():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesNpmPackage(data)
  local EntityMod = require("entity.api_entities_npm_package_entity")
  if data == nil then
    if self._api_entities_npm_package == nil then
      self._api_entities_npm_package = EntityMod.new(self, nil)
    end
    return self._api_entities_npm_package
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesNpmPackageTag():list() / client:ApiEntitiesNpmPackageTag():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesNpmPackageTag(data)
  local EntityMod = require("entity.api_entities_npm_package_tag_entity")
  if data == nil then
    if self._api_entities_npm_package_tag == nil then
      self._api_entities_npm_package_tag = EntityMod.new(self, nil)
    end
    return self._api_entities_npm_package_tag
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesNugetPackagesVersion():list() / client:ApiEntitiesNugetPackagesVersion():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesNugetPackagesVersion(data)
  local EntityMod = require("entity.api_entities_nuget_packages_version_entity")
  if data == nil then
    if self._api_entities_nuget_packages_version == nil then
      self._api_entities_nuget_packages_version = EntityMod.new(self, nil)
    end
    return self._api_entities_nuget_packages_version
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesNugetSearchResult():list() / client:ApiEntitiesNugetSearchResult():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesNugetSearchResult(data)
  local EntityMod = require("entity.api_entities_nuget_search_result_entity")
  if data == nil then
    if self._api_entities_nuget_search_result == nil then
      self._api_entities_nuget_search_result = EntityMod.new(self, nil)
    end
    return self._api_entities_nuget_search_result
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesNugetServiceIndex():list() / client:ApiEntitiesNugetServiceIndex():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesNugetServiceIndex(data)
  local EntityMod = require("entity.api_entities_nuget_service_index_entity")
  if data == nil then
    if self._api_entities_nuget_service_index == nil then
      self._api_entities_nuget_service_index = EntityMod.new(self, nil)
    end
    return self._api_entities_nuget_service_index
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesOrganizationsOrganization():list() / client:ApiEntitiesOrganizationsOrganization():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesOrganizationsOrganization(data)
  local EntityMod = require("entity.api_entities_organizations_organization_entity")
  if data == nil then
    if self._api_entities_organizations_organization == nil then
      self._api_entities_organizations_organization = EntityMod.new(self, nil)
    end
    return self._api_entities_organizations_organization
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesPackage():list() / client:ApiEntitiesPackage():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesPackage(data)
  local EntityMod = require("entity.api_entities_package_entity")
  if data == nil then
    if self._api_entities_package == nil then
      self._api_entities_package = EntityMod.new(self, nil)
    end
    return self._api_entities_package
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesPackageFile():list() / client:ApiEntitiesPackageFile():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesPackageFile(data)
  local EntityMod = require("entity.api_entities_package_file_entity")
  if data == nil then
    if self._api_entities_package_file == nil then
      self._api_entities_package_file = EntityMod.new(self, nil)
    end
    return self._api_entities_package_file
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesPackagePipeline():list() / client:ApiEntitiesPackagePipeline():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesPackagePipeline(data)
  local EntityMod = require("entity.api_entities_package_pipeline_entity")
  if data == nil then
    if self._api_entities_package_pipeline == nil then
      self._api_entities_package_pipeline = EntityMod.new(self, nil)
    end
    return self._api_entities_package_pipeline
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesPackagesConanFilesList():list() / client:ApiEntitiesPackagesConanFilesList():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesPackagesConanFilesList(data)
  local EntityMod = require("entity.api_entities_packages_conan_files_list_entity")
  if data == nil then
    if self._api_entities_packages_conan_files_list == nil then
      self._api_entities_packages_conan_files_list = EntityMod.new(self, nil)
    end
    return self._api_entities_packages_conan_files_list
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesPackagesConanPackageManifest():list() / client:ApiEntitiesPackagesConanPackageManifest():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesPackagesConanPackageManifest(data)
  local EntityMod = require("entity.api_entities_packages_conan_package_manifest_entity")
  if data == nil then
    if self._api_entities_packages_conan_package_manifest == nil then
      self._api_entities_packages_conan_package_manifest = EntityMod.new(self, nil)
    end
    return self._api_entities_packages_conan_package_manifest
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesPackagesConanPackageRevision():list() / client:ApiEntitiesPackagesConanPackageRevision():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesPackagesConanPackageRevision(data)
  local EntityMod = require("entity.api_entities_packages_conan_package_revision_entity")
  if data == nil then
    if self._api_entities_packages_conan_package_revision == nil then
      self._api_entities_packages_conan_package_revision = EntityMod.new(self, nil)
    end
    return self._api_entities_packages_conan_package_revision
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesPackagesConanPackageSnapshot():list() / client:ApiEntitiesPackagesConanPackageSnapshot():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesPackagesConanPackageSnapshot(data)
  local EntityMod = require("entity.api_entities_packages_conan_package_snapshot_entity")
  if data == nil then
    if self._api_entities_packages_conan_package_snapshot == nil then
      self._api_entities_packages_conan_package_snapshot = EntityMod.new(self, nil)
    end
    return self._api_entities_packages_conan_package_snapshot
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesPackagesConanRecipeManifest():list() / client:ApiEntitiesPackagesConanRecipeManifest():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesPackagesConanRecipeManifest(data)
  local EntityMod = require("entity.api_entities_packages_conan_recipe_manifest_entity")
  if data == nil then
    if self._api_entities_packages_conan_recipe_manifest == nil then
      self._api_entities_packages_conan_recipe_manifest = EntityMod.new(self, nil)
    end
    return self._api_entities_packages_conan_recipe_manifest
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesPackagesConanRecipeRevision():list() / client:ApiEntitiesPackagesConanRecipeRevision():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesPackagesConanRecipeRevision(data)
  local EntityMod = require("entity.api_entities_packages_conan_recipe_revision_entity")
  if data == nil then
    if self._api_entities_packages_conan_recipe_revision == nil then
      self._api_entities_packages_conan_recipe_revision = EntityMod.new(self, nil)
    end
    return self._api_entities_packages_conan_recipe_revision
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesPackagesConanRecipeSnapshot():list() / client:ApiEntitiesPackagesConanRecipeSnapshot():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesPackagesConanRecipeSnapshot(data)
  local EntityMod = require("entity.api_entities_packages_conan_recipe_snapshot_entity")
  if data == nil then
    if self._api_entities_packages_conan_recipe_snapshot == nil then
      self._api_entities_packages_conan_recipe_snapshot = EntityMod.new(self, nil)
    end
    return self._api_entities_packages_conan_recipe_snapshot
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesPackagesConanRevision():list() / client:ApiEntitiesPackagesConanRevision():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesPackagesConanRevision(data)
  local EntityMod = require("entity.api_entities_packages_conan_revision_entity")
  if data == nil then
    if self._api_entities_packages_conan_revision == nil then
      self._api_entities_packages_conan_revision = EntityMod.new(self, nil)
    end
    return self._api_entities_packages_conan_revision
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesPackagesConanUploadUrl():list() / client:ApiEntitiesPackagesConanUploadUrl():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesPackagesConanUploadUrl(data)
  local EntityMod = require("entity.api_entities_packages_conan_upload_url_entity")
  if data == nil then
    if self._api_entities_packages_conan_upload_url == nil then
      self._api_entities_packages_conan_upload_url = EntityMod.new(self, nil)
    end
    return self._api_entities_packages_conan_upload_url
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesPackagesDebianDistribution():list() / client:ApiEntitiesPackagesDebianDistribution():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesPackagesDebianDistribution(data)
  local EntityMod = require("entity.api_entities_packages_debian_distribution_entity")
  if data == nil then
    if self._api_entities_packages_debian_distribution == nil then
      self._api_entities_packages_debian_distribution = EntityMod.new(self, nil)
    end
    return self._api_entities_packages_debian_distribution
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesPagesDomain():list() / client:ApiEntitiesPagesDomain():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesPagesDomain(data)
  local EntityMod = require("entity.api_entities_pages_domain_entity")
  if data == nil then
    if self._api_entities_pages_domain == nil then
      self._api_entities_pages_domain = EntityMod.new(self, nil)
    end
    return self._api_entities_pages_domain
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesPagesDomainBasic():list() / client:ApiEntitiesPagesDomainBasic():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesPagesDomainBasic(data)
  local EntityMod = require("entity.api_entities_pages_domain_basic_entity")
  if data == nil then
    if self._api_entities_pages_domain_basic == nil then
      self._api_entities_pages_domain_basic = EntityMod.new(self, nil)
    end
    return self._api_entities_pages_domain_basic
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesPersonalAccessToken():list() / client:ApiEntitiesPersonalAccessToken():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesPersonalAccessToken(data)
  local EntityMod = require("entity.api_entities_personal_access_token_entity")
  if data == nil then
    if self._api_entities_personal_access_token == nil then
      self._api_entities_personal_access_token = EntityMod.new(self, nil)
    end
    return self._api_entities_personal_access_token
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesPersonalAccessTokenWithLastUsedIp():list() / client:ApiEntitiesPersonalAccessTokenWithLastUsedIp():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesPersonalAccessTokenWithLastUsedIp(data)
  local EntityMod = require("entity.api_entities_personal_access_token_with_last_used_ip_entity")
  if data == nil then
    if self._api_entities_personal_access_token_with_last_used_ip == nil then
      self._api_entities_personal_access_token_with_last_used_ip = EntityMod.new(self, nil)
    end
    return self._api_entities_personal_access_token_with_last_used_ip
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesPersonalAccessTokenWithToken():list() / client:ApiEntitiesPersonalAccessTokenWithToken():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesPersonalAccessTokenWithToken(data)
  local EntityMod = require("entity.api_entities_personal_access_token_with_token_entity")
  if data == nil then
    if self._api_entities_personal_access_token_with_token == nil then
      self._api_entities_personal_access_token_with_token = EntityMod.new(self, nil)
    end
    return self._api_entities_personal_access_token_with_token
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesPersonalSnippet():list() / client:ApiEntitiesPersonalSnippet():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesPersonalSnippet(data)
  local EntityMod = require("entity.api_entities_personal_snippet_entity")
  if data == nil then
    if self._api_entities_personal_snippet == nil then
      self._api_entities_personal_snippet = EntityMod.new(self, nil)
    end
    return self._api_entities_personal_snippet
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesPlanLimit():list() / client:ApiEntitiesPlanLimit():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesPlanLimit(data)
  local EntityMod = require("entity.api_entities_plan_limit_entity")
  if data == nil then
    if self._api_entities_plan_limit == nil then
      self._api_entities_plan_limit = EntityMod.new(self, nil)
    end
    return self._api_entities_plan_limit
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesProject():list() / client:ApiEntitiesProject():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesProject(data)
  local EntityMod = require("entity.api_entities_project_entity")
  if data == nil then
    if self._api_entities_project == nil then
      self._api_entities_project = EntityMod.new(self, nil)
    end
    return self._api_entities_project
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesProjectDailyStatistic():list() / client:ApiEntitiesProjectDailyStatistic():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesProjectDailyStatistic(data)
  local EntityMod = require("entity.api_entities_project_daily_statistic_entity")
  if data == nil then
    if self._api_entities_project_daily_statistic == nil then
      self._api_entities_project_daily_statistic = EntityMod.new(self, nil)
    end
    return self._api_entities_project_daily_statistic
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesProjectExportStatus():list() / client:ApiEntitiesProjectExportStatus():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesProjectExportStatus(data)
  local EntityMod = require("entity.api_entities_project_export_status_entity")
  if data == nil then
    if self._api_entities_project_export_status == nil then
      self._api_entities_project_export_status = EntityMod.new(self, nil)
    end
    return self._api_entities_project_export_status
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesProjectGroupLink():list() / client:ApiEntitiesProjectGroupLink():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesProjectGroupLink(data)
  local EntityMod = require("entity.api_entities_project_group_link_entity")
  if data == nil then
    if self._api_entities_project_group_link == nil then
      self._api_entities_project_group_link = EntityMod.new(self, nil)
    end
    return self._api_entities_project_group_link
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesProjectHook():list() / client:ApiEntitiesProjectHook():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesProjectHook(data)
  local EntityMod = require("entity.api_entities_project_hook_entity")
  if data == nil then
    if self._api_entities_project_hook == nil then
      self._api_entities_project_hook = EntityMod.new(self, nil)
    end
    return self._api_entities_project_hook
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesProjectImportStatus():list() / client:ApiEntitiesProjectImportStatus():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesProjectImportStatus(data)
  local EntityMod = require("entity.api_entities_project_import_status_entity")
  if data == nil then
    if self._api_entities_project_import_status == nil then
      self._api_entities_project_import_status = EntityMod.new(self, nil)
    end
    return self._api_entities_project_import_status
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesProjectJobTokenScope():list() / client:ApiEntitiesProjectJobTokenScope():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesProjectJobTokenScope(data)
  local EntityMod = require("entity.api_entities_project_job_token_scope_entity")
  if data == nil then
    if self._api_entities_project_job_token_scope == nil then
      self._api_entities_project_job_token_scope = EntityMod.new(self, nil)
    end
    return self._api_entities_project_job_token_scope
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesProjectRepositoryStorage():list() / client:ApiEntitiesProjectRepositoryStorage():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesProjectRepositoryStorage(data)
  local EntityMod = require("entity.api_entities_project_repository_storage_entity")
  if data == nil then
    if self._api_entities_project_repository_storage == nil then
      self._api_entities_project_repository_storage = EntityMod.new(self, nil)
    end
    return self._api_entities_project_repository_storage
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesProjectSnippet():list() / client:ApiEntitiesProjectSnippet():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesProjectSnippet(data)
  local EntityMod = require("entity.api_entities_project_snippet_entity")
  if data == nil then
    if self._api_entities_project_snippet == nil then
      self._api_entities_project_snippet = EntityMod.new(self, nil)
    end
    return self._api_entities_project_snippet
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesProjectUpload():list() / client:ApiEntitiesProjectUpload():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesProjectUpload(data)
  local EntityMod = require("entity.api_entities_project_upload_entity")
  if data == nil then
    if self._api_entities_project_upload == nil then
      self._api_entities_project_upload = EntityMod.new(self, nil)
    end
    return self._api_entities_project_upload
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesProjectWithAccess():list() / client:ApiEntitiesProjectWithAccess():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesProjectWithAccess(data)
  local EntityMod = require("entity.api_entities_project_with_access_entity")
  if data == nil then
    if self._api_entities_project_with_access == nil then
      self._api_entities_project_with_access = EntityMod.new(self, nil)
    end
    return self._api_entities_project_with_access
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesProjectsContainerRegistryProtectionRule():list() / client:ApiEntitiesProjectsContainerRegistryProtectionRule():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesProjectsContainerRegistryProtectionRule(data)
  local EntityMod = require("entity.api_entities_projects_container_registry_protection_rule_entity")
  if data == nil then
    if self._api_entities_projects_container_registry_protection_rule == nil then
      self._api_entities_projects_container_registry_protection_rule = EntityMod.new(self, nil)
    end
    return self._api_entities_projects_container_registry_protection_rule
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesProjectsPackagesProtectionRule():list() / client:ApiEntitiesProjectsPackagesProtectionRule():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesProjectsPackagesProtectionRule(data)
  local EntityMod = require("entity.api_entities_projects_packages_protection_rule_entity")
  if data == nil then
    if self._api_entities_projects_packages_protection_rule == nil then
      self._api_entities_projects_packages_protection_rule = EntityMod.new(self, nil)
    end
    return self._api_entities_projects_packages_protection_rule
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesProjectsTopic():list() / client:ApiEntitiesProjectsTopic():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesProjectsTopic(data)
  local EntityMod = require("entity.api_entities_projects_topic_entity")
  if data == nil then
    if self._api_entities_projects_topic == nil then
      self._api_entities_projects_topic = EntityMod.new(self, nil)
    end
    return self._api_entities_projects_topic
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesProtectedBranch():list() / client:ApiEntitiesProtectedBranch():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesProtectedBranch(data)
  local EntityMod = require("entity.api_entities_protected_branch_entity")
  if data == nil then
    if self._api_entities_protected_branch == nil then
      self._api_entities_protected_branch = EntityMod.new(self, nil)
    end
    return self._api_entities_protected_branch
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesProtectedTag():list() / client:ApiEntitiesProtectedTag():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesProtectedTag(data)
  local EntityMod = require("entity.api_entities_protected_tag_entity")
  if data == nil then
    if self._api_entities_protected_tag == nil then
      self._api_entities_protected_tag = EntityMod.new(self, nil)
    end
    return self._api_entities_protected_tag
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesPublicGroupDetail():list() / client:ApiEntitiesPublicGroupDetail():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesPublicGroupDetail(data)
  local EntityMod = require("entity.api_entities_public_group_detail_entity")
  if data == nil then
    if self._api_entities_public_group_detail == nil then
      self._api_entities_public_group_detail = EntityMod.new(self, nil)
    end
    return self._api_entities_public_group_detail
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesRelatedIssue():list() / client:ApiEntitiesRelatedIssue():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesRelatedIssue(data)
  local EntityMod = require("entity.api_entities_related_issue_entity")
  if data == nil then
    if self._api_entities_related_issue == nil then
      self._api_entities_related_issue = EntityMod.new(self, nil)
    end
    return self._api_entities_related_issue
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesRelationImportTracker():list() / client:ApiEntitiesRelationImportTracker():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesRelationImportTracker(data)
  local EntityMod = require("entity.api_entities_relation_import_tracker_entity")
  if data == nil then
    if self._api_entities_relation_import_tracker == nil then
      self._api_entities_relation_import_tracker = EntityMod.new(self, nil)
    end
    return self._api_entities_relation_import_tracker
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesRelease():list() / client:ApiEntitiesRelease():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesRelease(data)
  local EntityMod = require("entity.api_entities_release_entity")
  if data == nil then
    if self._api_entities_release == nil then
      self._api_entities_release = EntityMod.new(self, nil)
    end
    return self._api_entities_release
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesReleasesLink():list() / client:ApiEntitiesReleasesLink():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesReleasesLink(data)
  local EntityMod = require("entity.api_entities_releases_link_entity")
  if data == nil then
    if self._api_entities_releases_link == nil then
      self._api_entities_releases_link = EntityMod.new(self, nil)
    end
    return self._api_entities_releases_link
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesRemoteMirror():list() / client:ApiEntitiesRemoteMirror():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesRemoteMirror(data)
  local EntityMod = require("entity.api_entities_remote_mirror_entity")
  if data == nil then
    if self._api_entities_remote_mirror == nil then
      self._api_entities_remote_mirror = EntityMod.new(self, nil)
    end
    return self._api_entities_remote_mirror
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesRepositoryHealth():list() / client:ApiEntitiesRepositoryHealth():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesRepositoryHealth(data)
  local EntityMod = require("entity.api_entities_repository_health_entity")
  if data == nil then
    if self._api_entities_repository_health == nil then
      self._api_entities_repository_health = EntityMod.new(self, nil)
    end
    return self._api_entities_repository_health
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesResourceAccessTokenWithToken():list() / client:ApiEntitiesResourceAccessTokenWithToken():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesResourceAccessTokenWithToken(data)
  local EntityMod = require("entity.api_entities_resource_access_token_with_token_entity")
  if data == nil then
    if self._api_entities_resource_access_token_with_token == nil then
      self._api_entities_resource_access_token_with_token = EntityMod.new(self, nil)
    end
    return self._api_entities_resource_access_token_with_token
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesResourceMilestoneEvent():list() / client:ApiEntitiesResourceMilestoneEvent():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesResourceMilestoneEvent(data)
  local EntityMod = require("entity.api_entities_resource_milestone_event_entity")
  if data == nil then
    if self._api_entities_resource_milestone_event == nil then
      self._api_entities_resource_milestone_event = EntityMod.new(self, nil)
    end
    return self._api_entities_resource_milestone_event
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesSnippet():list() / client:ApiEntitiesSnippet():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesSnippet(data)
  local EntityMod = require("entity.api_entities_snippet_entity")
  if data == nil then
    if self._api_entities_snippet == nil then
      self._api_entities_snippet = EntityMod.new(self, nil)
    end
    return self._api_entities_snippet
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesSshKeyWithUser():list() / client:ApiEntitiesSshKeyWithUser():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesSshKeyWithUser(data)
  local EntityMod = require("entity.api_entities_ssh_key_with_user_entity")
  if data == nil then
    if self._api_entities_ssh_key_with_user == nil then
      self._api_entities_ssh_key_with_user = EntityMod.new(self, nil)
    end
    return self._api_entities_ssh_key_with_user
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesSuggestion():list() / client:ApiEntitiesSuggestion():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesSuggestion(data)
  local EntityMod = require("entity.api_entities_suggestion_entity")
  if data == nil then
    if self._api_entities_suggestion == nil then
      self._api_entities_suggestion = EntityMod.new(self, nil)
    end
    return self._api_entities_suggestion
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesSystemBroadcastMessage():list() / client:ApiEntitiesSystemBroadcastMessage():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesSystemBroadcastMessage(data)
  local EntityMod = require("entity.api_entities_system_broadcast_message_entity")
  if data == nil then
    if self._api_entities_system_broadcast_message == nil then
      self._api_entities_system_broadcast_message = EntityMod.new(self, nil)
    end
    return self._api_entities_system_broadcast_message
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesTag():list() / client:ApiEntitiesTag():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesTag(data)
  local EntityMod = require("entity.api_entities_tag_entity")
  if data == nil then
    if self._api_entities_tag == nil then
      self._api_entities_tag = EntityMod.new(self, nil)
    end
    return self._api_entities_tag
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesTagSignature():list() / client:ApiEntitiesTagSignature():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesTagSignature(data)
  local EntityMod = require("entity.api_entities_tag_signature_entity")
  if data == nil then
    if self._api_entities_tag_signature == nil then
      self._api_entities_tag_signature = EntityMod.new(self, nil)
    end
    return self._api_entities_tag_signature
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesTemplatesList():list() / client:ApiEntitiesTemplatesList():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesTemplatesList(data)
  local EntityMod = require("entity.api_entities_templates_list_entity")
  if data == nil then
    if self._api_entities_templates_list == nil then
      self._api_entities_templates_list = EntityMod.new(self, nil)
    end
    return self._api_entities_templates_list
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesTerraformModuleVersion():list() / client:ApiEntitiesTerraformModuleVersion():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesTerraformModuleVersion(data)
  local EntityMod = require("entity.api_entities_terraform_module_version_entity")
  if data == nil then
    if self._api_entities_terraform_module_version == nil then
      self._api_entities_terraform_module_version = EntityMod.new(self, nil)
    end
    return self._api_entities_terraform_module_version
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesTreeObject():list() / client:ApiEntitiesTreeObject():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesTreeObject(data)
  local EntityMod = require("entity.api_entities_tree_object_entity")
  if data == nil then
    if self._api_entities_tree_object == nil then
      self._api_entities_tree_object = EntityMod.new(self, nil)
    end
    return self._api_entities_tree_object
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesTrigger():list() / client:ApiEntitiesTrigger():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesTrigger(data)
  local EntityMod = require("entity.api_entities_trigger_entity")
  if data == nil then
    if self._api_entities_trigger == nil then
      self._api_entities_trigger = EntityMod.new(self, nil)
    end
    return self._api_entities_trigger
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesUserAgentDetail():list() / client:ApiEntitiesUserAgentDetail():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesUserAgentDetail(data)
  local EntityMod = require("entity.api_entities_user_agent_detail_entity")
  if data == nil then
    if self._api_entities_user_agent_detail == nil then
      self._api_entities_user_agent_detail = EntityMod.new(self, nil)
    end
    return self._api_entities_user_agent_detail
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesUserCount():list() / client:ApiEntitiesUserCount():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesUserCount(data)
  local EntityMod = require("entity.api_entities_user_count_entity")
  if data == nil then
    if self._api_entities_user_count == nil then
      self._api_entities_user_count = EntityMod.new(self, nil)
    end
    return self._api_entities_user_count
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesUserPublic():list() / client:ApiEntitiesUserPublic():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesUserPublic(data)
  local EntityMod = require("entity.api_entities_user_public_entity")
  if data == nil then
    if self._api_entities_user_public == nil then
      self._api_entities_user_public = EntityMod.new(self, nil)
    end
    return self._api_entities_user_public
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesUserWithAdmin():list() / client:ApiEntitiesUserWithAdmin():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesUserWithAdmin(data)
  local EntityMod = require("entity.api_entities_user_with_admin_entity")
  if data == nil then
    if self._api_entities_user_with_admin == nil then
      self._api_entities_user_with_admin = EntityMod.new(self, nil)
    end
    return self._api_entities_user_with_admin
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesWikiAttachment():list() / client:ApiEntitiesWikiAttachment():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesWikiAttachment(data)
  local EntityMod = require("entity.api_entities_wiki_attachment_entity")
  if data == nil then
    if self._api_entities_wiki_attachment == nil then
      self._api_entities_wiki_attachment = EntityMod.new(self, nil)
    end
    return self._api_entities_wiki_attachment
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesWikiPage():list() / client:ApiEntitiesWikiPage():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesWikiPage(data)
  local EntityMod = require("entity.api_entities_wiki_page_entity")
  if data == nil then
    if self._api_entities_wiki_page == nil then
      self._api_entities_wiki_page = EntityMod.new(self, nil)
    end
    return self._api_entities_wiki_page
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiEntitiesWikiPageBasic():list() / client:ApiEntitiesWikiPageBasic():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ApiEntitiesWikiPageBasic(data)
  local EntityMod = require("entity.api_entities_wiki_page_basic_entity")
  if data == nil then
    if self._api_entities_wiki_page_basic == nil then
      self._api_entities_wiki_page_basic = EntityMod.new(self, nil)
    end
    return self._api_entities_wiki_page_basic
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Application():list() / client:Application():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:Application(data)
  local EntityMod = require("entity.application_entity")
  if data == nil then
    if self._application == nil then
      self._application = EntityMod.new(self, nil)
    end
    return self._application
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AwardEmoji():list() / client:AwardEmoji():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:AwardEmoji(data)
  local EntityMod = require("entity.award_emoji_entity")
  if data == nil then
    if self._award_emoji == nil then
      self._award_emoji = EntityMod.new(self, nil)
    end
    return self._award_emoji
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Badge():list() / client:Badge():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:Badge(data)
  local EntityMod = require("entity.badge_entity")
  if data == nil then
    if self._badge == nil then
      self._badge = EntityMod.new(self, nil)
    end
    return self._badge
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Branch():list() / client:Branch():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:Branch(data)
  local EntityMod = require("entity.branch_entity")
  if data == nil then
    if self._branch == nil then
      self._branch = EntityMod.new(self, nil)
    end
    return self._branch
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CargoPackage():list() / client:CargoPackage():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:CargoPackage(data)
  local EntityMod = require("entity.cargo_package_entity")
  if data == nil then
    if self._cargo_package == nil then
      self._cargo_package = EntityMod.new(self, nil)
    end
    return self._cargo_package
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CiVariable():list() / client:CiVariable():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:CiVariable(data)
  local EntityMod = require("entity.ci_variable_entity")
  if data == nil then
    if self._ci_variable == nil then
      self._ci_variable = EntityMod.new(self, nil)
    end
    return self._ci_variable
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Cluster():list() / client:Cluster():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:Cluster(data)
  local EntityMod = require("entity.cluster_entity")
  if data == nil then
    if self._cluster == nil then
      self._cluster = EntityMod.new(self, nil)
    end
    return self._cluster
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ClusterAgent():list() / client:ClusterAgent():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ClusterAgent(data)
  local EntityMod = require("entity.cluster_agent_entity")
  if data == nil then
    if self._cluster_agent == nil then
      self._cluster_agent = EntityMod.new(self, nil)
    end
    return self._cluster_agent
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Composer():list() / client:Composer():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:Composer(data)
  local EntityMod = require("entity.composer_entity")
  if data == nil then
    if self._composer == nil then
      self._composer = EntityMod.new(self, nil)
    end
    return self._composer
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ComposerPackage():list() / client:ComposerPackage():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ComposerPackage(data)
  local EntityMod = require("entity.composer_package_entity")
  if data == nil then
    if self._composer_package == nil then
      self._composer_package = EntityMod.new(self, nil)
    end
    return self._composer_package
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Conan():list() / client:Conan():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:Conan(data)
  local EntityMod = require("entity.conan_entity")
  if data == nil then
    if self._conan == nil then
      self._conan = EntityMod.new(self, nil)
    end
    return self._conan
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ConanPackage():list() / client:ConanPackage():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ConanPackage(data)
  local EntityMod = require("entity.conan_package_entity")
  if data == nil then
    if self._conan_package == nil then
      self._conan_package = EntityMod.new(self, nil)
    end
    return self._conan_package
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ContainerRegistry():list() / client:ContainerRegistry():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ContainerRegistry(data)
  local EntityMod = require("entity.container_registry_entity")
  if data == nil then
    if self._container_registry == nil then
      self._container_registry = EntityMod.new(self, nil)
    end
    return self._container_registry
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ContainerRegistryEvent():list() / client:ContainerRegistryEvent():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ContainerRegistryEvent(data)
  local EntityMod = require("entity.container_registry_event_entity")
  if data == nil then
    if self._container_registry_event == nil then
      self._container_registry_event = EntityMod.new(self, nil)
    end
    return self._container_registry_event
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CustomAttribute():list() / client:CustomAttribute():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:CustomAttribute(data)
  local EntityMod = require("entity.custom_attribute_entity")
  if data == nil then
    if self._custom_attribute == nil then
      self._custom_attribute = EntityMod.new(self, nil)
    end
    return self._custom_attribute
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Debian():list() / client:Debian():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:Debian(data)
  local EntityMod = require("entity.debian_entity")
  if data == nil then
    if self._debian == nil then
      self._debian = EntityMod.new(self, nil)
    end
    return self._debian
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DebianDistribution():list() / client:DebianDistribution():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:DebianDistribution(data)
  local EntityMod = require("entity.debian_distribution_entity")
  if data == nil then
    if self._debian_distribution == nil then
      self._debian_distribution = EntityMod.new(self, nil)
    end
    return self._debian_distribution
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DebianPackage():list() / client:DebianPackage():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:DebianPackage(data)
  local EntityMod = require("entity.debian_package_entity")
  if data == nil then
    if self._debian_package == nil then
      self._debian_package = EntityMod.new(self, nil)
    end
    return self._debian_package
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DependencyProxy():list() / client:DependencyProxy():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:DependencyProxy(data)
  local EntityMod = require("entity.dependency_proxy_entity")
  if data == nil then
    if self._dependency_proxy == nil then
      self._dependency_proxy = EntityMod.new(self, nil)
    end
    return self._dependency_proxy
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DeployKey():list() / client:DeployKey():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:DeployKey(data)
  local EntityMod = require("entity.deploy_key_entity")
  if data == nil then
    if self._deploy_key == nil then
      self._deploy_key = EntityMod.new(self, nil)
    end
    return self._deploy_key
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DeployToken():list() / client:DeployToken():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:DeployToken(data)
  local EntityMod = require("entity.deploy_token_entity")
  if data == nil then
    if self._deploy_token == nil then
      self._deploy_token = EntityMod.new(self, nil)
    end
    return self._deploy_token
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Deployment():list() / client:Deployment():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:Deployment(data)
  local EntityMod = require("entity.deployment_entity")
  if data == nil then
    if self._deployment == nil then
      self._deployment = EntityMod.new(self, nil)
    end
    return self._deployment
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:EeApiEntitiesApprovalState():list() / client:EeApiEntitiesApprovalState():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:EeApiEntitiesApprovalState(data)
  local EntityMod = require("entity.ee_api_entities_approval_state_entity")
  if data == nil then
    if self._ee_api_entities_approval_state == nil then
      self._ee_api_entities_approval_state = EntityMod.new(self, nil)
    end
    return self._ee_api_entities_approval_state
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:EeApiEntitiesAuditEvent():list() / client:EeApiEntitiesAuditEvent():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:EeApiEntitiesAuditEvent(data)
  local EntityMod = require("entity.ee_api_entities_audit_event_entity")
  if data == nil then
    if self._ee_api_entities_audit_event == nil then
      self._ee_api_entities_audit_event = EntityMod.new(self, nil)
    end
    return self._ee_api_entities_audit_event
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:EeApiEntitiesBillableMembership():list() / client:EeApiEntitiesBillableMembership():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:EeApiEntitiesBillableMembership(data)
  local EntityMod = require("entity.ee_api_entities_billable_membership_entity")
  if data == nil then
    if self._ee_api_entities_billable_membership == nil then
      self._ee_api_entities_billable_membership = EntityMod.new(self, nil)
    end
    return self._ee_api_entities_billable_membership
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:EeApiEntitiesGeoNodeStatus():list() / client:EeApiEntitiesGeoNodeStatus():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:EeApiEntitiesGeoNodeStatus(data)
  local EntityMod = require("entity.ee_api_entities_geo_node_status_entity")
  if data == nil then
    if self._ee_api_entities_geo_node_status == nil then
      self._ee_api_entities_geo_node_status = EntityMod.new(self, nil)
    end
    return self._ee_api_entities_geo_node_status
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:EeApiEntitiesGeoPipelineRef():list() / client:EeApiEntitiesGeoPipelineRef():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:EeApiEntitiesGeoPipelineRef(data)
  local EntityMod = require("entity.ee_api_entities_geo_pipeline_ref_entity")
  if data == nil then
    if self._ee_api_entities_geo_pipeline_ref == nil then
      self._ee_api_entities_geo_pipeline_ref = EntityMod.new(self, nil)
    end
    return self._ee_api_entities_geo_pipeline_ref
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:EeApiEntitiesIssuableMetricImage():list() / client:EeApiEntitiesIssuableMetricImage():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:EeApiEntitiesIssuableMetricImage(data)
  local EntityMod = require("entity.ee_api_entities_issuable_metric_image_entity")
  if data == nil then
    if self._ee_api_entities_issuable_metric_image == nil then
      self._ee_api_entities_issuable_metric_image = EntityMod.new(self, nil)
    end
    return self._ee_api_entities_issuable_metric_image
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:EeApiEntitiesMergeRequestApprovalState():list() / client:EeApiEntitiesMergeRequestApprovalState():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:EeApiEntitiesMergeRequestApprovalState(data)
  local EntityMod = require("entity.ee_api_entities_merge_request_approval_state_entity")
  if data == nil then
    if self._ee_api_entities_merge_request_approval_state == nil then
      self._ee_api_entities_merge_request_approval_state = EntityMod.new(self, nil)
    end
    return self._ee_api_entities_merge_request_approval_state
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:EeApiEntitiesSshCertificate():list() / client:EeApiEntitiesSshCertificate():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:EeApiEntitiesSshCertificate(data)
  local EntityMod = require("entity.ee_api_entities_ssh_certificate_entity")
  if data == nil then
    if self._ee_api_entities_ssh_certificate == nil then
      self._ee_api_entities_ssh_certificate = EntityMod.new(self, nil)
    end
    return self._ee_api_entities_ssh_certificate
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Environment():list() / client:Environment():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:Environment(data)
  local EntityMod = require("entity.environment_entity")
  if data == nil then
    if self._environment == nil then
      self._environment = EntityMod.new(self, nil)
    end
    return self._environment
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ErrorTrackingClientKey():list() / client:ErrorTrackingClientKey():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ErrorTrackingClientKey(data)
  local EntityMod = require("entity.error_tracking_client_key_entity")
  if data == nil then
    if self._error_tracking_client_key == nil then
      self._error_tracking_client_key = EntityMod.new(self, nil)
    end
    return self._error_tracking_client_key
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Feature():list() / client:Feature():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:Feature(data)
  local EntityMod = require("entity.feature_entity")
  if data == nil then
    if self._feature == nil then
      self._feature = EntityMod.new(self, nil)
    end
    return self._feature
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:FeatureFlag():list() / client:FeatureFlag():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:FeatureFlag(data)
  local EntityMod = require("entity.feature_flag_entity")
  if data == nil then
    if self._feature_flag == nil then
      self._feature_flag = EntityMod.new(self, nil)
    end
    return self._feature_flag
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:FeatureFlagsUserList():list() / client:FeatureFlagsUserList():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:FeatureFlagsUserList(data)
  local EntityMod = require("entity.feature_flags_user_list_entity")
  if data == nil then
    if self._feature_flags_user_list == nil then
      self._feature_flags_user_list = EntityMod.new(self, nil)
    end
    return self._feature_flags_user_list
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:FreezePeriod():list() / client:FreezePeriod():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:FreezePeriod(data)
  local EntityMod = require("entity.freeze_period_entity")
  if data == nil then
    if self._freeze_period == nil then
      self._freeze_period = EntityMod.new(self, nil)
    end
    return self._freeze_period
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:GenericPackage():list() / client:GenericPackage():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:GenericPackage(data)
  local EntityMod = require("entity.generic_package_entity")
  if data == nil then
    if self._generic_package == nil then
      self._generic_package = EntityMod.new(self, nil)
    end
    return self._generic_package
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Geo():list() / client:Geo():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:Geo(data)
  local EntityMod = require("entity.geo_entity")
  if data == nil then
    if self._geo == nil then
      self._geo = EntityMod.new(self, nil)
    end
    return self._geo
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:GoProxy():list() / client:GoProxy():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:GoProxy(data)
  local EntityMod = require("entity.go_proxy_entity")
  if data == nil then
    if self._go_proxy == nil then
      self._go_proxy = EntityMod.new(self, nil)
    end
    return self._go_proxy
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Group():list() / client:Group():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:Group(data)
  local EntityMod = require("entity.group_entity")
  if data == nil then
    if self._group == nil then
      self._group = EntityMod.new(self, nil)
    end
    return self._group
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:GroupAvatar():list() / client:GroupAvatar():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:GroupAvatar(data)
  local EntityMod = require("entity.group_avatar_entity")
  if data == nil then
    if self._group_avatar == nil then
      self._group_avatar = EntityMod.new(self, nil)
    end
    return self._group_avatar
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:GroupExport():list() / client:GroupExport():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:GroupExport(data)
  local EntityMod = require("entity.group_export_entity")
  if data == nil then
    if self._group_export == nil then
      self._group_export = EntityMod.new(self, nil)
    end
    return self._group_export
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:GroupImport():list() / client:GroupImport():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:GroupImport(data)
  local EntityMod = require("entity.group_import_entity")
  if data == nil then
    if self._group_import == nil then
      self._group_import = EntityMod.new(self, nil)
    end
    return self._group_import
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:HelmPackage():list() / client:HelmPackage():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:HelmPackage(data)
  local EntityMod = require("entity.helm_package_entity")
  if data == nil then
    if self._helm_package == nil then
      self._helm_package = EntityMod.new(self, nil)
    end
    return self._helm_package
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Hook():list() / client:Hook():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:Hook(data)
  local EntityMod = require("entity.hook_entity")
  if data == nil then
    if self._hook == nil then
      self._hook = EntityMod.new(self, nil)
    end
    return self._hook
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Import():list() / client:Import():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:Import(data)
  local EntityMod = require("entity.import_entity")
  if data == nil then
    if self._import == nil then
      self._import = EntityMod.new(self, nil)
    end
    return self._import
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Integration():list() / client:Integration():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:Integration(data)
  local EntityMod = require("entity.integration_entity")
  if data == nil then
    if self._integration == nil then
      self._integration = EntityMod.new(self, nil)
    end
    return self._integration
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Invitation():list() / client:Invitation():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:Invitation(data)
  local EntityMod = require("entity.invitation_entity")
  if data == nil then
    if self._invitation == nil then
      self._invitation = EntityMod.new(self, nil)
    end
    return self._invitation
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:IssueLink():list() / client:IssueLink():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:IssueLink(data)
  local EntityMod = require("entity.issue_link_entity")
  if data == nil then
    if self._issue_link == nil then
      self._issue_link = EntityMod.new(self, nil)
    end
    return self._issue_link
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:IssuesStatistic():list() / client:IssuesStatistic():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:IssuesStatistic(data)
  local EntityMod = require("entity.issues_statistic_entity")
  if data == nil then
    if self._issues_statistic == nil then
      self._issues_statistic = EntityMod.new(self, nil)
    end
    return self._issues_statistic
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Job():list() / client:Job():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:Job(data)
  local EntityMod = require("entity.job_entity")
  if data == nil then
    if self._job == nil then
      self._job = EntityMod.new(self, nil)
    end
    return self._job
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:MavenPackage():list() / client:MavenPackage():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:MavenPackage(data)
  local EntityMod = require("entity.maven_package_entity")
  if data == nil then
    if self._maven_package == nil then
      self._maven_package = EntityMod.new(self, nil)
    end
    return self._maven_package
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Member():list() / client:Member():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:Member(data)
  local EntityMod = require("entity.member_entity")
  if data == nil then
    if self._member == nil then
      self._member = EntityMod.new(self, nil)
    end
    return self._member
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:MergeRequest():list() / client:MergeRequest():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:MergeRequest(data)
  local EntityMod = require("entity.merge_request_entity")
  if data == nil then
    if self._merge_request == nil then
      self._merge_request = EntityMod.new(self, nil)
    end
    return self._merge_request
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Metadata():list() / client:Metadata():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:Metadata(data)
  local EntityMod = require("entity.metadata_entity")
  if data == nil then
    if self._metadata == nil then
      self._metadata = EntityMod.new(self, nil)
    end
    return self._metadata
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Migration():list() / client:Migration():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:Migration(data)
  local EntityMod = require("entity.migration_entity")
  if data == nil then
    if self._migration == nil then
      self._migration = EntityMod.new(self, nil)
    end
    return self._migration
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:MlModelRegistry():list() / client:MlModelRegistry():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:MlModelRegistry(data)
  local EntityMod = require("entity.ml_model_registry_entity")
  if data == nil then
    if self._ml_model_registry == nil then
      self._ml_model_registry = EntityMod.new(self, nil)
    end
    return self._ml_model_registry
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Namespace():list() / client:Namespace():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:Namespace(data)
  local EntityMod = require("entity.namespace_entity")
  if data == nil then
    if self._namespace == nil then
      self._namespace = EntityMod.new(self, nil)
    end
    return self._namespace
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Npm():list() / client:Npm():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:Npm(data)
  local EntityMod = require("entity.npm_entity")
  if data == nil then
    if self._npm == nil then
      self._npm = EntityMod.new(self, nil)
    end
    return self._npm
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:NpmPackage():list() / client:NpmPackage():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:NpmPackage(data)
  local EntityMod = require("entity.npm_package_entity")
  if data == nil then
    if self._npm_package == nil then
      self._npm_package = EntityMod.new(self, nil)
    end
    return self._npm_package
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Nuget():list() / client:Nuget():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:Nuget(data)
  local EntityMod = require("entity.nuget_entity")
  if data == nil then
    if self._nuget == nil then
      self._nuget = EntityMod.new(self, nil)
    end
    return self._nuget
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:NugetPackage():list() / client:NugetPackage():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:NugetPackage(data)
  local EntityMod = require("entity.nuget_package_entity")
  if data == nil then
    if self._nuget_package == nil then
      self._nuget_package = EntityMod.new(self, nil)
    end
    return self._nuget_package
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PackageFile():list() / client:PackageFile():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:PackageFile(data)
  local EntityMod = require("entity.package_file_entity")
  if data == nil then
    if self._package_file == nil then
      self._package_file = EntityMod.new(self, nil)
    end
    return self._package_file
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Page():list() / client:Page():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:Page(data)
  local EntityMod = require("entity.page_entity")
  if data == nil then
    if self._page == nil then
      self._page = EntityMod.new(self, nil)
    end
    return self._page
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Participant():list() / client:Participant():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:Participant(data)
  local EntityMod = require("entity.participant_entity")
  if data == nil then
    if self._participant == nil then
      self._participant = EntityMod.new(self, nil)
    end
    return self._participant
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PersonalAccessToken():list() / client:PersonalAccessToken():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:PersonalAccessToken(data)
  local EntityMod = require("entity.personal_access_token_entity")
  if data == nil then
    if self._personal_access_token == nil then
      self._personal_access_token = EntityMod.new(self, nil)
    end
    return self._personal_access_token
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Project():list() / client:Project():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:Project(data)
  local EntityMod = require("entity.project_entity")
  if data == nil then
    if self._project == nil then
      self._project = EntityMod.new(self, nil)
    end
    return self._project
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ProjectAvatar():list() / client:ProjectAvatar():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ProjectAvatar(data)
  local EntityMod = require("entity.project_avatar_entity")
  if data == nil then
    if self._project_avatar == nil then
      self._project_avatar = EntityMod.new(self, nil)
    end
    return self._project_avatar
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ProjectEntity():list() / client:ProjectEntity():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ProjectEntity(data)
  local EntityMod = require("entity.project_entity_entity")
  if data == nil then
    if self._project_entity == nil then
      self._project_entity = EntityMod.new(self, nil)
    end
    return self._project_entity
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ProjectExport():list() / client:ProjectExport():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ProjectExport(data)
  local EntityMod = require("entity.project_export_entity")
  if data == nil then
    if self._project_export == nil then
      self._project_export = EntityMod.new(self, nil)
    end
    return self._project_export
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ProjectHook():list() / client:ProjectHook():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ProjectHook(data)
  local EntityMod = require("entity.project_hook_entity")
  if data == nil then
    if self._project_hook == nil then
      self._project_hook = EntityMod.new(self, nil)
    end
    return self._project_hook
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ProjectImport():list() / client:ProjectImport():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ProjectImport(data)
  local EntityMod = require("entity.project_import_entity")
  if data == nil then
    if self._project_import == nil then
      self._project_import = EntityMod.new(self, nil)
    end
    return self._project_import
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ProjectImportEntity():list() / client:ProjectImportEntity():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ProjectImportEntity(data)
  local EntityMod = require("entity.project_import_entity_entity")
  if data == nil then
    if self._project_import_entity == nil then
      self._project_import_entity = EntityMod.new(self, nil)
    end
    return self._project_import_entity
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ProjectPackage():list() / client:ProjectPackage():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ProjectPackage(data)
  local EntityMod = require("entity.project_package_entity")
  if data == nil then
    if self._project_package == nil then
      self._project_package = EntityMod.new(self, nil)
    end
    return self._project_package
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ProjectSnippet():list() / client:ProjectSnippet():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ProjectSnippet(data)
  local EntityMod = require("entity.project_snippet_entity")
  if data == nil then
    if self._project_snippet == nil then
      self._project_snippet = EntityMod.new(self, nil)
    end
    return self._project_snippet
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ProjectsJobTokenScope():list() / client:ProjectsJobTokenScope():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ProjectsJobTokenScope(data)
  local EntityMod = require("entity.projects_job_token_scope_entity")
  if data == nil then
    if self._projects_job_token_scope == nil then
      self._projects_job_token_scope = EntityMod.new(self, nil)
    end
    return self._projects_job_token_scope
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ProtectedTag():list() / client:ProtectedTag():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ProtectedTag(data)
  local EntityMod = require("entity.protected_tag_entity")
  if data == nil then
    if self._protected_tag == nil then
      self._protected_tag = EntityMod.new(self, nil)
    end
    return self._protected_tag
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Pypi():list() / client:Pypi():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:Pypi(data)
  local EntityMod = require("entity.pypi_entity")
  if data == nil then
    if self._pypi == nil then
      self._pypi = EntityMod.new(self, nil)
    end
    return self._pypi
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PypiPackage():list() / client:PypiPackage():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:PypiPackage(data)
  local EntityMod = require("entity.pypi_package_entity")
  if data == nil then
    if self._pypi_package == nil then
      self._pypi_package = EntityMod.new(self, nil)
    end
    return self._pypi_package
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Release():list() / client:Release():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:Release(data)
  local EntityMod = require("entity.release_entity")
  if data == nil then
    if self._release == nil then
      self._release = EntityMod.new(self, nil)
    end
    return self._release
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ReleaseLink():list() / client:ReleaseLink():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:ReleaseLink(data)
  local EntityMod = require("entity.release_link_entity")
  if data == nil then
    if self._release_link == nil then
      self._release_link = EntityMod.new(self, nil)
    end
    return self._release_link
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:RemoteMirror():list() / client:RemoteMirror():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:RemoteMirror(data)
  local EntityMod = require("entity.remote_mirror_entity")
  if data == nil then
    if self._remote_mirror == nil then
      self._remote_mirror = EntityMod.new(self, nil)
    end
    return self._remote_mirror
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Rpm():list() / client:Rpm():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:Rpm(data)
  local EntityMod = require("entity.rpm_entity")
  if data == nil then
    if self._rpm == nil then
      self._rpm = EntityMod.new(self, nil)
    end
    return self._rpm
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:RpmPackage():list() / client:RpmPackage():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:RpmPackage(data)
  local EntityMod = require("entity.rpm_package_entity")
  if data == nil then
    if self._rpm_package == nil then
      self._rpm_package = EntityMod.new(self, nil)
    end
    return self._rpm_package
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Rubygem():list() / client:Rubygem():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:Rubygem(data)
  local EntityMod = require("entity.rubygem_entity")
  if data == nil then
    if self._rubygem == nil then
      self._rubygem = EntityMod.new(self, nil)
    end
    return self._rubygem
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:RubygemPackage():list() / client:RubygemPackage():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:RubygemPackage(data)
  local EntityMod = require("entity.rubygem_package_entity")
  if data == nil then
    if self._rubygem_package == nil then
      self._rubygem_package = EntityMod.new(self, nil)
    end
    return self._rubygem_package
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Runner():list() / client:Runner():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:Runner(data)
  local EntityMod = require("entity.runner_entity")
  if data == nil then
    if self._runner == nil then
      self._runner = EntityMod.new(self, nil)
    end
    return self._runner
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Search():list() / client:Search():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:Search(data)
  local EntityMod = require("entity.search_entity")
  if data == nil then
    if self._search == nil then
      self._search = EntityMod.new(self, nil)
    end
    return self._search
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SecureFile():list() / client:SecureFile():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:SecureFile(data)
  local EntityMod = require("entity.secure_file_entity")
  if data == nil then
    if self._secure_file == nil then
      self._secure_file = EntityMod.new(self, nil)
    end
    return self._secure_file
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Slack():list() / client:Slack():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:Slack(data)
  local EntityMod = require("entity.slack_entity")
  if data == nil then
    if self._slack == nil then
      self._slack = EntityMod.new(self, nil)
    end
    return self._slack
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Snippet():list() / client:Snippet():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:Snippet(data)
  local EntityMod = require("entity.snippet_entity")
  if data == nil then
    if self._snippet == nil then
      self._snippet = EntityMod.new(self, nil)
    end
    return self._snippet
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Starrer():list() / client:Starrer():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:Starrer(data)
  local EntityMod = require("entity.starrer_entity")
  if data == nil then
    if self._starrer == nil then
      self._starrer = EntityMod.new(self, nil)
    end
    return self._starrer
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SystemHook():list() / client:SystemHook():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:SystemHook(data)
  local EntityMod = require("entity.system_hook_entity")
  if data == nil then
    if self._system_hook == nil then
      self._system_hook = EntityMod.new(self, nil)
    end
    return self._system_hook
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Tag():list() / client:Tag():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:Tag(data)
  local EntityMod = require("entity.tag_entity")
  if data == nil then
    if self._tag == nil then
      self._tag = EntityMod.new(self, nil)
    end
    return self._tag
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TerraformRegistry():list() / client:TerraformRegistry():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:TerraformRegistry(data)
  local EntityMod = require("entity.terraform_registry_entity")
  if data == nil then
    if self._terraform_registry == nil then
      self._terraform_registry = EntityMod.new(self, nil)
    end
    return self._terraform_registry
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TerraformState():list() / client:TerraformState():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:TerraformState(data)
  local EntityMod = require("entity.terraform_state_entity")
  if data == nil then
    if self._terraform_state == nil then
      self._terraform_state = EntityMod.new(self, nil)
    end
    return self._terraform_state
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TestReport():list() / client:TestReport():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:TestReport(data)
  local EntityMod = require("entity.test_report_entity")
  if data == nil then
    if self._test_report == nil then
      self._test_report = EntityMod.new(self, nil)
    end
    return self._test_report
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TestReportSummary():list() / client:TestReportSummary():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:TestReportSummary(data)
  local EntityMod = require("entity.test_report_summary_entity")
  if data == nil then
    if self._test_report_summary == nil then
      self._test_report_summary = EntityMod.new(self, nil)
    end
    return self._test_report_summary
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Topic():list() / client:Topic():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:Topic(data)
  local EntityMod = require("entity.topic_entity")
  if data == nil then
    if self._topic == nil then
      self._topic = EntityMod.new(self, nil)
    end
    return self._topic
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:UnleashApi():list() / client:UnleashApi():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:UnleashApi(data)
  local EntityMod = require("entity.unleash_api_entity")
  if data == nil then
    if self._unleash_api == nil then
      self._unleash_api = EntityMod.new(self, nil)
    end
    return self._unleash_api
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:UsageData():list() / client:UsageData():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:UsageData(data)
  local EntityMod = require("entity.usage_data_entity")
  if data == nil then
    if self._usage_data == nil then
      self._usage_data = EntityMod.new(self, nil)
    end
    return self._usage_data
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:User():list() / client:User():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:User(data)
  local EntityMod = require("entity.user_entity")
  if data == nil then
    if self._user == nil then
      self._user = EntityMod.new(self, nil)
    end
    return self._user
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:WebCommit():list() / client:WebCommit():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:WebCommit(data)
  local EntityMod = require("entity.web_commit_entity")
  if data == nil then
    if self._web_commit == nil then
      self._web_commit = EntityMod.new(self, nil)
    end
    return self._web_commit
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Wiki():list() / client:Wiki():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GitlabSDK:Wiki(data)
  local EntityMod = require("entity.wiki_entity")
  if data == nil then
    if self._wiki == nil then
      self._wiki = EntityMod.new(self, nil)
    end
    return self._wiki
  end
  return EntityMod.new(self, data)
end




function GitlabSDK.test(testopts, sdkopts)
  sdkopts = sdkopts or {}
  sdkopts = vs.clone(sdkopts)
  if type(sdkopts) ~= "table" then
    sdkopts = {}
  end

  testopts = testopts or {}
  testopts = vs.clone(testopts)
  if type(testopts) ~= "table" then
    testopts = {}
  end
  testopts["active"] = true

  vs.setpath(sdkopts, "feature.test", testopts)

  local sdk = GitlabSDK.new(sdkopts)
  sdk.mode = "test"

  return sdk
end


return GitlabSDK
