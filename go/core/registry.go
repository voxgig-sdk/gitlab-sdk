package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewApiEntitiesProjectWithAccessEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

var NewProjectEntityFunc func(client *GitlabSDK, entopts map[string]any) GitlabEntity

