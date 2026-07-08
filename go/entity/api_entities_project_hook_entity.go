package entity

import (
	"github.com/voxgig-sdk/gitlab-sdk/go/core"

	vs "github.com/voxgig-sdk/gitlab-sdk/go/utility/struct"
)

type ApiEntitiesProjectHookEntity struct {
	name    string
	client  *core.GitlabSDK
	utility *core.Utility
	entopts map[string]any
	data    map[string]any
	match   map[string]any
	entctx  *core.Context
}

func NewApiEntitiesProjectHookEntity(client *core.GitlabSDK, entopts map[string]any) *ApiEntitiesProjectHookEntity {
	if entopts == nil {
		entopts = map[string]any{}
	}
	if _, ok := entopts["active"]; !ok {
		entopts["active"] = true
	} else if entopts["active"] == false {
		// keep false
	} else {
		entopts["active"] = true
	}

	e := &ApiEntitiesProjectHookEntity{
		name:    "api_entities_project_hook",
		client:  client,
		utility: client.GetUtility(),
		entopts: entopts,
		data:    map[string]any{},
		match:   map[string]any{},
	}

	e.entctx = e.utility.MakeContext(map[string]any{
		"entity":  e,
		"entopts": entopts,
	}, client.GetRootCtx())

	e.utility.FeatureHook(e.entctx, "PostConstructEntity")

	return e
}

func (e *ApiEntitiesProjectHookEntity) GetName() string { return e.name }

func (e *ApiEntitiesProjectHookEntity) Make() core.Entity {
	opts := map[string]any{}
	for k, v := range e.entopts {
		opts[k] = v
	}
	return NewApiEntitiesProjectHookEntity(e.client, opts)
}

func (e *ApiEntitiesProjectHookEntity) Data(args ...any) any {
	if len(args) > 0 && args[0] != nil {
		e.data = core.ToMapAny(vs.Clone(args[0]))
		if e.data == nil {
			e.data = map[string]any{}
		}
		e.utility.FeatureHook(e.entctx, "SetData")
	}

	e.utility.FeatureHook(e.entctx, "GetData")
	out := vs.Clone(e.data)
	return out
}

func (e *ApiEntitiesProjectHookEntity) Match(args ...any) any {
	if len(args) > 0 && args[0] != nil {
		e.match = core.ToMapAny(vs.Clone(args[0]))
		if e.match == nil {
			e.match = map[string]any{}
		}
		e.utility.FeatureHook(e.entctx, "SetMatch")
	}

	e.utility.FeatureHook(e.entctx, "GetMatch")
	out := vs.Clone(e.match)
	return out
}

// DataTyped is the statically-typed accessor for this entity's data. With no
// argument it returns the current data as an ApiEntitiesProjectHook; with an argument it
// sets the data and returns the stored value. It delegates to the untyped Data
// (identical runtime) and converts at the typed boundary.
func (e *ApiEntitiesProjectHookEntity) DataTyped(data ...ApiEntitiesProjectHook) ApiEntitiesProjectHook {
	if len(data) > 0 {
		return typedFrom[ApiEntitiesProjectHook](e.Data(asMap(data[0])))
	}
	return typedFrom[ApiEntitiesProjectHook](e.Data())
}

// MatchTyped mirrors DataTyped for the entity's match filter. The match is a
// partial of the entity, so it round-trips through ApiEntitiesProjectHook (all fields
// optional at the wire level).
func (e *ApiEntitiesProjectHookEntity) MatchTyped(match ...ApiEntitiesProjectHook) ApiEntitiesProjectHook {
	if len(match) > 0 {
		return typedFrom[ApiEntitiesProjectHook](e.Match(asMap(match[0])))
	}
	return typedFrom[ApiEntitiesProjectHook](e.Match())
}


func (e *ApiEntitiesProjectHookEntity) Load(reqmatch map[string]any, ctrl map[string]any) (any, error) {
	utility := e.utility
	ctx := utility.MakeContext(map[string]any{
		"opname":   "load",
		"ctrl":     ctrl,
		"match":    e.match,
		"data":     e.data,
		"reqmatch": reqmatch,
	}, e.entctx)

	return e.runOp(ctx, func() {
		if ctx.Result != nil {
			if ctx.Result.Resmatch != nil {
				e.match = ctx.Result.Resmatch
			}
			if ctx.Result.Resdata != nil {
				e.data = core.ToMapAny(vs.Clone(ctx.Result.Resdata))
				if e.data == nil {
					e.data = map[string]any{}
				}
			}
		}
	})
}

// LoadTyped is the statically-typed variant of Load: it takes an
// ApiEntitiesProjectHookLoadMatch and returns an ApiEntitiesProjectHook. It delegates to the untyped
// Load (identical runtime) and converts at the typed boundary.
func (e *ApiEntitiesProjectHookEntity) LoadTyped(reqmatch ApiEntitiesProjectHookLoadMatch, ctrl map[string]any) (ApiEntitiesProjectHook, error) {
	res, err := e.Load(asMap(reqmatch), ctrl)
	if err != nil {
		return ApiEntitiesProjectHook{}, err
	}
	return typedFrom[ApiEntitiesProjectHook](res), nil
}




func (e *ApiEntitiesProjectHookEntity) List(reqmatch map[string]any, ctrl map[string]any) (any, error) {
	utility := e.utility
	ctx := utility.MakeContext(map[string]any{
		"opname":   "list",
		"ctrl":     ctrl,
		"match":    e.match,
		"data":     e.data,
		"reqmatch": reqmatch,
	}, e.entctx)

	return e.runOp(ctx, func() {
		if ctx.Result != nil {
			if ctx.Result.Resmatch != nil {
				e.match = ctx.Result.Resmatch
			}
		}
	})
}

// ListTyped is the statically-typed variant of List: it takes an
// ApiEntitiesProjectHookListMatch and returns []ApiEntitiesProjectHook. It delegates to the untyped
// List (identical runtime) and converts at the typed boundary.
func (e *ApiEntitiesProjectHookEntity) ListTyped(reqmatch ApiEntitiesProjectHookListMatch, ctrl map[string]any) ([]ApiEntitiesProjectHook, error) {
	res, err := e.List(asMap(reqmatch), ctrl)
	if err != nil {
		return nil, err
	}
	return typedSliceFrom[ApiEntitiesProjectHook](res), nil
}




func (e *ApiEntitiesProjectHookEntity) Create(reqdata map[string]any, ctrl map[string]any) (any, error) {
	utility := e.utility
	ctx := utility.MakeContext(map[string]any{
		"opname":  "create",
		"ctrl":    ctrl,
		"match":   e.match,
		"data":    e.data,
		"reqdata": reqdata,
	}, e.entctx)

	return e.runOp(ctx, func() {
		if ctx.Result != nil {
			if ctx.Result.Resdata != nil {
				e.data = core.ToMapAny(vs.Clone(ctx.Result.Resdata))
				if e.data == nil {
					e.data = map[string]any{}
				}
			}
		}
	})
}

// CreateTyped is the statically-typed variant of Create: it takes an
// ApiEntitiesProjectHookCreateData and returns an ApiEntitiesProjectHook. It delegates to the untyped
// Create (identical runtime) and converts at the typed boundary.
func (e *ApiEntitiesProjectHookEntity) CreateTyped(reqdata ApiEntitiesProjectHookCreateData, ctrl map[string]any) (ApiEntitiesProjectHook, error) {
	res, err := e.Create(asMap(reqdata), ctrl)
	if err != nil {
		return ApiEntitiesProjectHook{}, err
	}
	return typedFrom[ApiEntitiesProjectHook](res), nil
}




func (e *ApiEntitiesProjectHookEntity) Update(reqdata map[string]any, ctrl map[string]any) (any, error) {
	utility := e.utility
	ctx := utility.MakeContext(map[string]any{
		"opname":  "update",
		"ctrl":    ctrl,
		"match":   e.match,
		"data":    e.data,
		"reqdata": reqdata,
	}, e.entctx)

	return e.runOp(ctx, func() {
		if ctx.Result != nil {
			if ctx.Result.Resmatch != nil {
				e.match = ctx.Result.Resmatch
			}
			if ctx.Result.Resdata != nil {
				e.data = core.ToMapAny(vs.Clone(ctx.Result.Resdata))
				if e.data == nil {
					e.data = map[string]any{}
				}
			}
		}
	})
}

// UpdateTyped is the statically-typed variant of Update: it takes an
// ApiEntitiesProjectHookUpdateData and returns an ApiEntitiesProjectHook. It delegates to the untyped
// Update (identical runtime) and converts at the typed boundary.
func (e *ApiEntitiesProjectHookEntity) UpdateTyped(reqdata ApiEntitiesProjectHookUpdateData, ctrl map[string]any) (ApiEntitiesProjectHook, error) {
	res, err := e.Update(asMap(reqdata), ctrl)
	if err != nil {
		return ApiEntitiesProjectHook{}, err
	}
	return typedFrom[ApiEntitiesProjectHook](res), nil
}



func (e *ApiEntitiesProjectHookEntity) Remove(_ map[string]any, _ map[string]any) (any, error) {
	return core.UnsupportedOp("remove", e.name)
}


func (e *ApiEntitiesProjectHookEntity) runOp(ctx *core.Context, postDone func()) (any, error) {
	utility := e.utility

	utility.FeatureHook(ctx, "PrePoint")
	point, err := utility.MakePoint(ctx)
	ctx.Out["point"] = point
	if err != nil {
		return utility.MakeError(ctx, err)
	}

	utility.FeatureHook(ctx, "PreSpec")
	spec, err := utility.MakeSpec(ctx)
	ctx.Out["spec"] = spec
	if err != nil {
		return utility.MakeError(ctx, err)
	}

	utility.FeatureHook(ctx, "PreRequest")
	resp, err := utility.MakeRequest(ctx)
	ctx.Out["request"] = resp
	if err != nil {
		return utility.MakeError(ctx, err)
	}

	utility.FeatureHook(ctx, "PreResponse")
	resp2, err := utility.MakeResponse(ctx)
	ctx.Out["response"] = resp2
	if err != nil {
		return utility.MakeError(ctx, err)
	}

	utility.FeatureHook(ctx, "PreResult")
	result, err := utility.MakeResult(ctx)
	ctx.Out["result"] = result
	if err != nil {
		return utility.MakeError(ctx, err)
	}

	utility.FeatureHook(ctx, "PreDone")
	postDone()

	return utility.Done(ctx)
}
