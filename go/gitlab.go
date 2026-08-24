package voxgiggitlabsdk

import (
	"github.com/voxgig-sdk/gitlab-sdk/go/core"
	"github.com/voxgig-sdk/gitlab-sdk/go/entity"
	"github.com/voxgig-sdk/gitlab-sdk/go/feature"
	_ "github.com/voxgig-sdk/gitlab-sdk/go/utility"
)

// Type aliases preserve external API.
type GitlabSDK = core.GitlabSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type GitlabEntity = core.GitlabEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type GitlabError = core.GitlabError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewApiEntitiesProjectWithAccessEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewApiEntitiesProjectWithAccessEntity(client, entopts)
	}
	core.NewProjectEntityFunc = func(client *core.GitlabSDK, entopts map[string]any) core.GitlabEntity {
		return entity.NewProjectEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewGitlabSDK = core.NewGitlabSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var SharedConfig = core.SharedConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewGitlabSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *GitlabSDK  { return NewGitlabSDK(nil) }
func Test() *GitlabSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
