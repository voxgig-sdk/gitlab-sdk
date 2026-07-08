# Gitlab SDK ApiEntitiesCluster entity

require_relative '../utility/struct/voxgig_struct'
require_relative '../core/helpers'

class ApiEntitiesClusterEntity
  def initialize(client, entopts = nil)
    entopts ||= {}
    if entopts["active"].nil?
      entopts["active"] = true
    elsif entopts["active"] == false
      # keep false
    else
      entopts["active"] = true
    end

    @_name = "api_entities_cluster"
    @_client = client
    @_utility = client.get_utility
    @_entopts = entopts
    @_data = {}
    @_match = {}

    @_entctx = @_utility.make_context.call({
      "entity" => self,
      "entopts" => entopts,
    }, client.get_root_ctx)

    @_utility.feature_hook.call(@_entctx, "PostConstructEntity")
  end

  def get_name
    @_name
  end

  def make
    opts = @_entopts.dup
    ApiEntitiesClusterEntity.new(@_client, opts)
  end

  def data_set(args)
    if args
      @_data = GitlabHelpers.to_map(VoxgigStruct.clone(args)) || {}
      @_utility.feature_hook.call(@_entctx, "SetData")
    end
  end

  # @return [ApiEntitiesCluster, Hash] the current ApiEntitiesCluster data
  def data_get
    @_utility.feature_hook.call(@_entctx, "GetData")
    VoxgigStruct.clone(@_data)
  end

  def match_set(args)
    if args
      @_match = GitlabHelpers.to_map(VoxgigStruct.clone(args)) || {}
      @_utility.feature_hook.call(@_entctx, "SetMatch")
    end
  end

  # @return [Hash] the current match filter (any subset of ApiEntitiesCluster fields)
  def match_get
    @_utility.feature_hook.call(@_entctx, "GetMatch")
    VoxgigStruct.clone(@_match)
  end

  
  # Load a single ApiEntitiesCluster.
  #
  # @param reqmatch [ApiEntitiesClusterLoadMatch, Hash, nil] match criteria (id/query fields);
  #   optional — an entity with no id-like key loads with no match (nil is treated
  #   as an empty match, so client.ApiEntitiesCluster.load works with no args).
  # @param ctrl [Object, nil] optional per-call control
  # @return [ApiEntitiesCluster, Hash] the loaded ApiEntitiesCluster; raises GitlabError on failure
  def load(reqmatch = nil, ctrl = nil)
    utility = @_utility
    ctx = utility.make_context.call({
      "opname" => "load",
      "ctrl" => ctrl,
      "match" => @_match,
      "data" => @_data,
      "reqmatch" => reqmatch,
    }, @_entctx)

    _run_op(ctx) do
      if ctx.result
        @_match = ctx.result.resmatch if ctx.result.resmatch
        if ctx.result.resdata
          @_data = GitlabHelpers.to_map(VoxgigStruct.clone(ctx.result.resdata)) || {}
        end
      end
    end
  end



  
  # List ApiEntitiesCluster items matching the given filter.
  #
  # @param reqmatch [ApiEntitiesClusterListMatch, Hash, nil] match filter (any subset of
  #   ApiEntitiesCluster fields); defaults to nil, treated as an empty match that lists all.
  # @param ctrl [Object, nil] optional per-call control
  # @return [Array<ApiEntitiesCluster>, Array] the matching ApiEntitiesCluster items; raises GitlabError on failure
  def list(reqmatch = nil, ctrl = nil)
    utility = @_utility
    ctx = utility.make_context.call({
      "opname" => "list",
      "ctrl" => ctrl,
      "match" => @_match,
      "data" => @_data,
      "reqmatch" => reqmatch,
    }, @_entctx)

    records = _run_op(ctx) do
      if ctx.result
        @_match = ctx.result.resmatch if ctx.result.resmatch
      end
    end

    # list yields the BARE Array of records — each an accessible Hash — so
    # callers can index item["id"] directly, matching py/lua/go. make_result
    # wraps each entry as an Entity instance for internal use; unwrap those
    # back to their bare record Hashes here (load/create/etc. are unaffected).
    if records.is_a?(Array)
      records = records.map do |item|
        item.respond_to?(:data_get) ? item.data_get : item
      end
    end

    records
  end



  
  # Create a new ApiEntitiesCluster.
  #
  # @param reqdata [ApiEntitiesClusterCreateData, Hash, nil] body data
  # @param ctrl [Object, nil] optional per-call control
  # @return [ApiEntitiesCluster, Hash] the created ApiEntitiesCluster; raises GitlabError on failure
  def create(reqdata, ctrl = nil)
    utility = @_utility
    ctx = utility.make_context.call({
      "opname" => "create",
      "ctrl" => ctrl,
      "match" => @_match,
      "data" => @_data,
      "reqdata" => reqdata,
    }, @_entctx)

    _run_op(ctx) do
      if ctx.result
        if ctx.result.resdata
          @_data = GitlabHelpers.to_map(VoxgigStruct.clone(ctx.result.resdata)) || {}
        end
      end
    end
  end



  
  # Update an existing ApiEntitiesCluster.
  #
  # @param reqdata [ApiEntitiesClusterUpdateData, Hash, nil] body data
  # @param ctrl [Object, nil] optional per-call control
  # @return [ApiEntitiesCluster, Hash] the updated ApiEntitiesCluster; raises GitlabError on failure
  def update(reqdata, ctrl = nil)
    utility = @_utility
    ctx = utility.make_context.call({
      "opname" => "update",
      "ctrl" => ctrl,
      "match" => @_match,
      "data" => @_data,
      "reqdata" => reqdata,
    }, @_entctx)

    _run_op(ctx) do
      if ctx.result
        @_match = ctx.result.resmatch if ctx.result.resmatch
        if ctx.result.resdata
          @_data = GitlabHelpers.to_map(VoxgigStruct.clone(ctx.result.resdata)) || {}
        end
      end
    end
  end



  

  private

  def _run_op(ctx, &post_done)
    utility = @_utility

    # #PrePoint-Hook

    point, err = utility.make_point.call(ctx)
    ctx.out["point"] = point
    return utility.make_error.call(ctx, err) if err

    # #PreSpec-Hook

    spec, err = utility.make_spec.call(ctx)
    ctx.out["spec"] = spec
    return utility.make_error.call(ctx, err) if err

    # #PreRequest-Hook

    resp, err = utility.make_request.call(ctx)
    ctx.out["request"] = resp
    return utility.make_error.call(ctx, err) if err

    # #PreResponse-Hook

    resp2, err = utility.make_response.call(ctx)
    ctx.out["response"] = resp2
    return utility.make_error.call(ctx, err) if err

    # #PreResult-Hook

    result, err = utility.make_result.call(ctx)
    ctx.out["result"] = result
    return utility.make_error.call(ctx, err) if err

    # #PreDone-Hook

    post_done.call

    utility.done.call(ctx)
  end
end
