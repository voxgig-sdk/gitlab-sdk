package entity

import (
	"github.com/voxgig-sdk/gitlab-sdk/go/core"

	vs "github.com/voxgig-sdk/gitlab-sdk/go/utility/struct"
)

type NugetPackageEntity struct {
	name    string
	client  *core.GitlabSDK
	utility *core.Utility
	entopts map[string]any
	data    map[string]any
	match   map[string]any
	entctx  *core.Context
}

func NewNugetPackageEntity(client *core.GitlabSDK, entopts map[string]any) *NugetPackageEntity {
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

	e := &NugetPackageEntity{
		name:    "nuget_package",
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

func (e *NugetPackageEntity) GetName() string { return e.name }

func (e *NugetPackageEntity) Make() core.Entity {
	opts := map[string]any{}
	for k, v := range e.entopts {
		opts[k] = v
	}
	return NewNugetPackageEntity(e.client, opts)
}

func (e *NugetPackageEntity) Data(args ...any) any {
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

func (e *NugetPackageEntity) Match(args ...any) any {
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
// argument it returns the current data as an NugetPackage; with an argument it
// sets the data and returns the stored value. It delegates to the untyped Data
// (identical runtime) and converts at the typed boundary.
func (e *NugetPackageEntity) DataTyped(data ...NugetPackage) NugetPackage {
	if len(data) > 0 {
		return typedFrom[NugetPackage](e.Data(asMap(data[0])))
	}
	return typedFrom[NugetPackage](e.Data())
}

// MatchTyped mirrors DataTyped for the entity's match filter. The match is a
// partial of the entity, so it round-trips through NugetPackage (all fields
// optional at the wire level).
func (e *NugetPackageEntity) MatchTyped(match ...NugetPackage) NugetPackage {
	if len(match) > 0 {
		return typedFrom[NugetPackage](e.Match(asMap(match[0])))
	}
	return typedFrom[NugetPackage](e.Match())
}


func (e *NugetPackageEntity) Load(reqmatch map[string]any, ctrl map[string]any) (any, error) {
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
// NugetPackageLoadMatch and returns an NugetPackage. It delegates to the untyped
// Load (identical runtime) and converts at the typed boundary.
func (e *NugetPackageEntity) LoadTyped(reqmatch NugetPackageLoadMatch, ctrl map[string]any) (NugetPackage, error) {
	res, err := e.Load(asMap(reqmatch), ctrl)
	if err != nil {
		return NugetPackage{}, err
	}
	return typedFrom[NugetPackage](res), nil
}




func (e *NugetPackageEntity) List(reqmatch map[string]any, ctrl map[string]any) (any, error) {
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
// NugetPackageListMatch and returns []NugetPackage. It delegates to the untyped
// List (identical runtime) and converts at the typed boundary.
func (e *NugetPackageEntity) ListTyped(reqmatch NugetPackageListMatch, ctrl map[string]any) ([]NugetPackage, error) {
	res, err := e.List(asMap(reqmatch), ctrl)
	if err != nil {
		return nil, err
	}
	return typedSliceFrom[NugetPackage](res), nil
}



func (e *NugetPackageEntity) Create(_ map[string]any, _ map[string]any) (any, error) {
	return core.UnsupportedOp("create", e.name)
}



func (e *NugetPackageEntity) Update(reqdata map[string]any, ctrl map[string]any) (any, error) {
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
// NugetPackageUpdateData and returns an NugetPackage. It delegates to the untyped
// Update (identical runtime) and converts at the typed boundary.
func (e *NugetPackageEntity) UpdateTyped(reqdata NugetPackageUpdateData, ctrl map[string]any) (NugetPackage, error) {
	res, err := e.Update(asMap(reqdata), ctrl)
	if err != nil {
		return NugetPackage{}, err
	}
	return typedFrom[NugetPackage](res), nil
}




func (e *NugetPackageEntity) Remove(reqmatch map[string]any, ctrl map[string]any) (any, error) {
	utility := e.utility
	ctx := utility.MakeContext(map[string]any{
		"opname":   "remove",
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

// RemoveTyped is the statically-typed variant of Remove: it takes an
// NugetPackageRemoveMatch and returns an NugetPackage. It delegates to the untyped
// Remove (identical runtime) and converts at the typed boundary.
func (e *NugetPackageEntity) RemoveTyped(reqmatch NugetPackageRemoveMatch, ctrl map[string]any) (NugetPackage, error) {
	res, err := e.Remove(asMap(reqmatch), ctrl)
	if err != nil {
		return NugetPackage{}, err
	}
	return typedFrom[NugetPackage](res), nil
}



func (e *NugetPackageEntity) runOp(ctx *core.Context, postDone func()) (any, error) {
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
