package entity

import (
	"github.com/voxgig-sdk/gitlab-sdk/go/core"

	vs "github.com/voxgig-sdk/gitlab-sdk/go/utility/struct"
)

type ProjectsJobTokenScopeEntity struct {
	name    string
	client  *core.GitlabSDK
	utility *core.Utility
	entopts map[string]any
	data    map[string]any
	match   map[string]any
	entctx  *core.Context
}

func NewProjectsJobTokenScopeEntity(client *core.GitlabSDK, entopts map[string]any) *ProjectsJobTokenScopeEntity {
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

	e := &ProjectsJobTokenScopeEntity{
		name:    "projects_job_token_scope",
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

func (e *ProjectsJobTokenScopeEntity) GetName() string { return e.name }

func (e *ProjectsJobTokenScopeEntity) Make() core.Entity {
	opts := map[string]any{}
	for k, v := range e.entopts {
		opts[k] = v
	}
	return NewProjectsJobTokenScopeEntity(e.client, opts)
}

func (e *ProjectsJobTokenScopeEntity) Data(args ...any) any {
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

func (e *ProjectsJobTokenScopeEntity) Match(args ...any) any {
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
// argument it returns the current data as an ProjectsJobTokenScope; with an argument it
// sets the data and returns the stored value. It delegates to the untyped Data
// (identical runtime) and converts at the typed boundary.
func (e *ProjectsJobTokenScopeEntity) DataTyped(data ...ProjectsJobTokenScope) ProjectsJobTokenScope {
	if len(data) > 0 {
		return typedFrom[ProjectsJobTokenScope](e.Data(asMap(data[0])))
	}
	return typedFrom[ProjectsJobTokenScope](e.Data())
}

// MatchTyped mirrors DataTyped for the entity's match filter. The match is a
// partial of the entity, so it round-trips through ProjectsJobTokenScope (all fields
// optional at the wire level).
func (e *ProjectsJobTokenScopeEntity) MatchTyped(match ...ProjectsJobTokenScope) ProjectsJobTokenScope {
	if len(match) > 0 {
		return typedFrom[ProjectsJobTokenScope](e.Match(asMap(match[0])))
	}
	return typedFrom[ProjectsJobTokenScope](e.Match())
}

func (e *ProjectsJobTokenScopeEntity) Load(_ map[string]any, _ map[string]any) (any, error) {
	return core.UnsupportedOp("load", e.name)
}


func (e *ProjectsJobTokenScopeEntity) List(_ map[string]any, _ map[string]any) (any, error) {
	return core.UnsupportedOp("list", e.name)
}


func (e *ProjectsJobTokenScopeEntity) Create(_ map[string]any, _ map[string]any) (any, error) {
	return core.UnsupportedOp("create", e.name)
}



func (e *ProjectsJobTokenScopeEntity) Update(reqdata map[string]any, ctrl map[string]any) (any, error) {
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
// ProjectsJobTokenScopeUpdateData and returns an ProjectsJobTokenScope. It delegates to the untyped
// Update (identical runtime) and converts at the typed boundary.
func (e *ProjectsJobTokenScopeEntity) UpdateTyped(reqdata ProjectsJobTokenScopeUpdateData, ctrl map[string]any) (ProjectsJobTokenScope, error) {
	res, err := e.Update(asMap(reqdata), ctrl)
	if err != nil {
		return ProjectsJobTokenScope{}, err
	}
	return typedFrom[ProjectsJobTokenScope](res), nil
}




func (e *ProjectsJobTokenScopeEntity) Remove(reqmatch map[string]any, ctrl map[string]any) (any, error) {
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
// ProjectsJobTokenScopeRemoveMatch and returns an ProjectsJobTokenScope. It delegates to the untyped
// Remove (identical runtime) and converts at the typed boundary.
func (e *ProjectsJobTokenScopeEntity) RemoveTyped(reqmatch ProjectsJobTokenScopeRemoveMatch, ctrl map[string]any) (ProjectsJobTokenScope, error) {
	res, err := e.Remove(asMap(reqmatch), ctrl)
	if err != nil {
		return ProjectsJobTokenScope{}, err
	}
	return typedFrom[ProjectsJobTokenScope](res), nil
}



func (e *ProjectsJobTokenScopeEntity) runOp(ctx *core.Context, postDone func()) (any, error) {
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
