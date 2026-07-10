-- Gitlab SDK ApiEntitiesFreezePeriod entity

local vs = require("utility.struct.struct")
local helpers = require("core.helpers")

local ApiEntitiesFreezePeriodEntity = {}
ApiEntitiesFreezePeriodEntity.__index = ApiEntitiesFreezePeriodEntity


function ApiEntitiesFreezePeriodEntity.new(client, entopts)
  entopts = entopts or {}
  if entopts["active"] == nil then
    entopts["active"] = true
  elseif entopts["active"] == false then
    -- keep false
  else
    entopts["active"] = true
  end

  local self = setmetatable({}, ApiEntitiesFreezePeriodEntity)
  self._name = "api_entities_freeze_period"
  self._client = client
  self._utility = client:get_utility()
  self._entopts = entopts
  self._data = {}
  self._match = {}

  self._entctx = self._utility.make_context({
    entity = self,
    entopts = entopts,
  }, client:get_root_ctx())

  self._utility.feature_hook(self._entctx, "PostConstructEntity")

  return self
end


function ApiEntitiesFreezePeriodEntity:get_name()
  return self._name
end


function ApiEntitiesFreezePeriodEntity:make()
  local opts = {}
  for k, v in pairs(self._entopts) do
    opts[k] = v
  end
  return ApiEntitiesFreezePeriodEntity.new(self._client, opts)
end


function ApiEntitiesFreezePeriodEntity:data_set(args)
  if args ~= nil then
    self._data = helpers.to_map(vs.clone(args)) or {}
    self._utility.feature_hook(self._entctx, "SetData")
  end
end


function ApiEntitiesFreezePeriodEntity:data_get()
  self._utility.feature_hook(self._entctx, "GetData")
  return vs.clone(self._data)
end


function ApiEntitiesFreezePeriodEntity:match_set(args)
  if args ~= nil then
    self._match = helpers.to_map(vs.clone(args)) or {}
    self._utility.feature_hook(self._entctx, "SetMatch")
  end
end


function ApiEntitiesFreezePeriodEntity:match_get()
  self._utility.feature_hook(self._entctx, "GetMatch")
  return vs.clone(self._match)
end



---@param reqmatch ApiEntitiesFreezePeriodLoadMatch
---@param ctrl? table
---@return ApiEntitiesFreezePeriod
---@return string? err
function ApiEntitiesFreezePeriodEntity:load(reqmatch, ctrl)
  local utility = self._utility
  local ctx = utility.make_context({
    opname = "load",
    ctrl = ctrl,
    match = self._match,
    data = self._data,
    reqmatch = reqmatch,
  }, self._entctx)

  return self:_run_op(ctx, function()
    if ctx.result ~= nil then
      if ctx.result.resmatch ~= nil then
        self._match = ctx.result.resmatch
      end
      if ctx.result.resdata ~= nil then
        self._data = helpers.to_map(vs.clone(ctx.result.resdata)) or {}
      end
    end
  end)
end




---@param reqmatch ApiEntitiesFreezePeriodListMatch
---@param ctrl? table
---@return ApiEntitiesFreezePeriod[]
---@return string? err
function ApiEntitiesFreezePeriodEntity:list(reqmatch, ctrl)
  local utility = self._utility
  local ctx = utility.make_context({
    opname = "list",
    ctrl = ctrl,
    match = self._match,
    data = self._data,
    reqmatch = reqmatch,
  }, self._entctx)

  return self:_run_op(ctx, function()
    if ctx.result ~= nil then
      if ctx.result.resmatch ~= nil then
        self._match = ctx.result.resmatch
      end
    end
  end)
end




---@param reqdata ApiEntitiesFreezePeriodCreateData
---@param ctrl? table
---@return ApiEntitiesFreezePeriod
---@return string? err
function ApiEntitiesFreezePeriodEntity:create(reqdata, ctrl)
  local utility = self._utility
  local ctx = utility.make_context({
    opname = "create",
    ctrl = ctrl,
    match = self._match,
    data = self._data,
    reqdata = reqdata,
  }, self._entctx)

  return self:_run_op(ctx, function()
    if ctx.result ~= nil then
      if ctx.result.resdata ~= nil then
        self._data = helpers.to_map(vs.clone(ctx.result.resdata)) or {}
      end
    end
  end)
end




---@param reqdata ApiEntitiesFreezePeriodUpdateData
---@param ctrl? table
---@return ApiEntitiesFreezePeriod
---@return string? err
function ApiEntitiesFreezePeriodEntity:update(reqdata, ctrl)
  local utility = self._utility
  local ctx = utility.make_context({
    opname = "update",
    ctrl = ctrl,
    match = self._match,
    data = self._data,
    reqdata = reqdata,
  }, self._entctx)

  return self:_run_op(ctx, function()
    if ctx.result ~= nil then
      if ctx.result.resmatch ~= nil then
        self._match = ctx.result.resmatch
      end
      if ctx.result.resdata ~= nil then
        self._data = helpers.to_map(vs.clone(ctx.result.resdata)) or {}
      end
    end
  end)
end






function ApiEntitiesFreezePeriodEntity:_run_op(ctx, post_done)
  local utility = self._utility

  -- #PrePoint-Hook

  local point, err = utility.make_point(ctx)
  ctx.out["point"] = point
  if err ~= nil then
    return utility.make_error(ctx, err)
  end

  -- #PreSpec-Hook

  local spec
  spec, err = utility.make_spec(ctx)
  ctx.out["spec"] = spec
  if err ~= nil then
    return utility.make_error(ctx, err)
  end

  -- #PreRequest-Hook

  local resp
  resp, err = utility.make_request(ctx)
  ctx.out["request"] = resp
  if err ~= nil then
    return utility.make_error(ctx, err)
  end

  -- #PreResponse-Hook

  local resp2
  resp2, err = utility.make_response(ctx)
  ctx.out["response"] = resp2
  if err ~= nil then
    return utility.make_error(ctx, err)
  end

  -- #PreResult-Hook

  local result
  result, err = utility.make_result(ctx)
  ctx.out["result"] = result
  if err ~= nil then
    return utility.make_error(ctx, err)
  end

  -- #PreDone-Hook

  post_done()

  return utility.done(ctx)
end


return ApiEntitiesFreezePeriodEntity
