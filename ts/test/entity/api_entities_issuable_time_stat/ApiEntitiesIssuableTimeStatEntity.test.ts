

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { GitlabSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('ApiEntitiesIssuableTimeStatEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesIssuableTimeStat()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['create', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_issuable_time_stat.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"human_time_estimate","req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"human_total_time_spent","req":false,"type":"`$STRING`","index$":1},{"active":true,"format":"int32","name":"time_estimate","req":false,"type":"`$INTEGER`","index$":2},{"active":true,"format":"int32","name":"total_time_spent","req":false,"type":"`$INTEGER`","index$":3}],"name":"api_entities_issuable_time_stat","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"issue_id","orig":"issue_iid","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":1}],"query":[{"active":true,"kind":"query","name":"post_api_v4_projects_id_issues_issue_iid_add_spent_time","orig":"post_api_v4_projects_id_issues_issue_iid_add_spent_time","reqd":true,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"POST /api/v4/projects/{id}/issues/{issue_iid}/add_spent_time","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4ProjectsIdIssuesIssueIidAddSpentTime\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The internal ID of the issue.\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"issue_iid\",\"required\":true,\"type\":\"integer\"},{\"in\":\"body\",\"name\":\"postApiV4ProjectsIdIssuesIssueIidAddSpentTime\",\"required\":true,\"schema\":{\"description\":\"Add spent time for a issue\",\"properties\":{\"duration\":{\"description\":\"The duration in human format.\",\"type\":\"string\"}},\"required\":[\"duration\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"201\":{\"description\":\"Add spent time for a issue\",\"schema\":{\"description\":\"API_Entities_IssuableTimeStats model\",\"properties\":{\"human_time_estimate\":{\"example\":\"3h 30m\",\"type\":\"string\"},\"human_total_time_spent\":{\"example\":\"1h\",\"type\":\"string\"},\"time_estimate\":{\"example\":12600,\"format\":\"int32\",\"type\":\"integer\"},\"total_time_spent\":{\"example\":3600,\"format\":\"int32\",\"type\":\"integer\"}},\"type\":\"object\"}},\"401\":{\"description\":\"Unauthorized\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/api/v4/projects/{id}/issues/{issue_iid}/add_spent_time","rename":{"param":{"id":"project_id","issue_iid":"issue_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"issues"},{"var":"issue_id"},{"lit":"add_spent_time"}],"select":{"exist":["issue_id","post_api_v4_projects_id_issues_issue_iid_add_spent_time","project_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"issue_id","orig":"issue_iid","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":1}],"query":[{"active":true,"kind":"query","name":"post_api_v4_projects_id_issues_issue_iid_time_estimate","orig":"post_api_v4_projects_id_issues_issue_iid_time_estimate","reqd":true,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"POST /api/v4/projects/{id}/issues/{issue_iid}/time_estimate","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4ProjectsIdIssuesIssueIidTimeEstimate\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The internal ID of the issue.\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"issue_iid\",\"required\":true,\"type\":\"integer\"},{\"in\":\"body\",\"name\":\"postApiV4ProjectsIdIssuesIssueIidTimeEstimate\",\"required\":true,\"schema\":{\"description\":\"Set a time estimate for a issue\",\"properties\":{\"duration\":{\"description\":\"The duration in human format.\",\"example\":\"3h30m\",\"type\":\"string\"}},\"required\":[\"duration\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"201\":{\"description\":\"Set a time estimate for a issue\",\"schema\":{\"description\":\"API_Entities_IssuableTimeStats model\",\"properties\":{\"human_time_estimate\":{\"example\":\"3h 30m\",\"type\":\"string\"},\"human_total_time_spent\":{\"example\":\"1h\",\"type\":\"string\"},\"time_estimate\":{\"example\":12600,\"format\":\"int32\",\"type\":\"integer\"},\"total_time_spent\":{\"example\":3600,\"format\":\"int32\",\"type\":\"integer\"}},\"type\":\"object\"}},\"400\":{\"description\":\"Bad request\"},\"401\":{\"description\":\"Unauthorized\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/api/v4/projects/{id}/issues/{issue_iid}/time_estimate","rename":{"param":{"id":"project_id","issue_iid":"issue_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"issues"},{"var":"issue_id"},{"lit":"time_estimate"}],"select":{"exist":["issue_id","post_api_v4_projects_id_issues_issue_iid_time_estimate","project_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"merge_request_id","orig":"merge_request_iid","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":1}],"query":[{"active":true,"kind":"query","name":"post_api_v4_projects_id_merge_requests_merge_request_iid_add_spent_time","orig":"post_api_v4_projects_id_merge_requests_merge_request_iid_add_spent_time","reqd":true,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"POST /api/v4/projects/{id}/merge_requests/{merge_request_iid}/add_spent_time","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4ProjectsIdMergeRequestsMergeRequestIidAddSpentTime\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project.\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The internal ID of the merge_request.\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"merge_request_iid\",\"required\":true,\"type\":\"integer\"},{\"in\":\"body\",\"name\":\"postApiV4ProjectsIdMergeRequestsMergeRequestIidAddSpentTime\",\"required\":true,\"schema\":{\"description\":\"Add spent time for a merge_request\",\"properties\":{\"duration\":{\"description\":\"The duration in human format.\",\"type\":\"string\"}},\"required\":[\"duration\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"201\":{\"description\":\"Add spent time for a merge_request\",\"schema\":{\"description\":\"API_Entities_IssuableTimeStats model\",\"properties\":{\"human_time_estimate\":{\"example\":\"3h 30m\",\"type\":\"string\"},\"human_total_time_spent\":{\"example\":\"1h\",\"type\":\"string\"},\"time_estimate\":{\"example\":12600,\"format\":\"int32\",\"type\":\"integer\"},\"total_time_spent\":{\"example\":3600,\"format\":\"int32\",\"type\":\"integer\"}},\"type\":\"object\"}},\"401\":{\"description\":\"Unauthorized\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/api/v4/projects/{id}/merge_requests/{merge_request_iid}/add_spent_time","rename":{"param":{"id":"project_id","merge_request_iid":"merge_request_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"merge_requests"},{"var":"merge_request_id"},{"lit":"add_spent_time"}],"select":{"exist":["merge_request_id","post_api_v4_projects_id_merge_requests_merge_request_iid_add_spent_time","project_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":2},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"merge_request_id","orig":"merge_request_iid","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":1}],"query":[{"active":true,"kind":"query","name":"post_api_v4_projects_id_merge_requests_merge_request_iid_time_estimate","orig":"post_api_v4_projects_id_merge_requests_merge_request_iid_time_estimate","reqd":true,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"POST /api/v4/projects/{id}/merge_requests/{merge_request_iid}/time_estimate","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4ProjectsIdMergeRequestsMergeRequestIidTimeEstimate\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project.\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The internal ID of the merge_request.\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"merge_request_iid\",\"required\":true,\"type\":\"integer\"},{\"in\":\"body\",\"name\":\"postApiV4ProjectsIdMergeRequestsMergeRequestIidTimeEstimate\",\"required\":true,\"schema\":{\"description\":\"Set a time estimate for a merge_request\",\"properties\":{\"duration\":{\"description\":\"The duration in human format.\",\"example\":\"3h30m\",\"type\":\"string\"}},\"required\":[\"duration\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"201\":{\"description\":\"Set a time estimate for a merge_request\",\"schema\":{\"description\":\"API_Entities_IssuableTimeStats model\",\"properties\":{\"human_time_estimate\":{\"example\":\"3h 30m\",\"type\":\"string\"},\"human_total_time_spent\":{\"example\":\"1h\",\"type\":\"string\"},\"time_estimate\":{\"example\":12600,\"format\":\"int32\",\"type\":\"integer\"},\"total_time_spent\":{\"example\":3600,\"format\":\"int32\",\"type\":\"integer\"}},\"type\":\"object\"}},\"400\":{\"description\":\"Bad request\"},\"401\":{\"description\":\"Unauthorized\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/api/v4/projects/{id}/merge_requests/{merge_request_iid}/time_estimate","rename":{"param":{"id":"project_id","merge_request_iid":"merge_request_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"merge_requests"},{"var":"merge_request_id"},{"lit":"time_estimate"}],"select":{"exist":["merge_request_id","post_api_v4_projects_id_merge_requests_merge_request_iid_time_estimate","project_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":3},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"issue_id","orig":"issue_iid","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"POST /api/v4/projects/{id}/issues/{issue_iid}/reset_spent_time","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4ProjectsIdIssuesIssueIidResetSpentTime\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The internal ID of the issue\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"issue_iid\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"201\":{\"description\":\"Reset spent time for a issue\",\"schema\":{\"description\":\"API_Entities_IssuableTimeStats model\",\"properties\":{\"human_time_estimate\":{\"example\":\"3h 30m\",\"type\":\"string\"},\"human_total_time_spent\":{\"example\":\"1h\",\"type\":\"string\"},\"time_estimate\":{\"example\":12600,\"format\":\"int32\",\"type\":\"integer\"},\"total_time_spent\":{\"example\":3600,\"format\":\"int32\",\"type\":\"integer\"}},\"type\":\"object\"}},\"401\":{\"description\":\"Unauthorized\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/api/v4/projects/{id}/issues/{issue_iid}/reset_spent_time","rename":{"param":{"id":"project_id","issue_iid":"issue_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"issues"},{"var":"issue_id"},{"lit":"reset_spent_time"}],"select":{"exist":["issue_id","project_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":4},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"issue_id","orig":"issue_iid","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"POST /api/v4/projects/{id}/issues/{issue_iid}/reset_time_estimate","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4ProjectsIdIssuesIssueIidResetTimeEstimate\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The internal ID of the issue.\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"issue_iid\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"201\":{\"description\":\"Reset the time estimate for a project issue\",\"schema\":{\"description\":\"API_Entities_IssuableTimeStats model\",\"properties\":{\"human_time_estimate\":{\"example\":\"3h 30m\",\"type\":\"string\"},\"human_total_time_spent\":{\"example\":\"1h\",\"type\":\"string\"},\"time_estimate\":{\"example\":12600,\"format\":\"int32\",\"type\":\"integer\"},\"total_time_spent\":{\"example\":3600,\"format\":\"int32\",\"type\":\"integer\"}},\"type\":\"object\"}},\"401\":{\"description\":\"Unauthorized\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/api/v4/projects/{id}/issues/{issue_iid}/reset_time_estimate","rename":{"param":{"id":"project_id","issue_iid":"issue_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"issues"},{"var":"issue_id"},{"lit":"reset_time_estimate"}],"select":{"exist":["issue_id","project_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":5},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"merge_request_id","orig":"merge_request_iid","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"POST /api/v4/projects/{id}/merge_requests/{merge_request_iid}/reset_spent_time","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4ProjectsIdMergeRequestsMergeRequestIidResetSpentTime\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project.\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The internal ID of the merge_request\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"merge_request_iid\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"201\":{\"description\":\"Reset spent time for a merge_request\",\"schema\":{\"description\":\"API_Entities_IssuableTimeStats model\",\"properties\":{\"human_time_estimate\":{\"example\":\"3h 30m\",\"type\":\"string\"},\"human_total_time_spent\":{\"example\":\"1h\",\"type\":\"string\"},\"time_estimate\":{\"example\":12600,\"format\":\"int32\",\"type\":\"integer\"},\"total_time_spent\":{\"example\":3600,\"format\":\"int32\",\"type\":\"integer\"}},\"type\":\"object\"}},\"401\":{\"description\":\"Unauthorized\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/api/v4/projects/{id}/merge_requests/{merge_request_iid}/reset_spent_time","rename":{"param":{"id":"project_id","merge_request_iid":"merge_request_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"merge_requests"},{"var":"merge_request_id"},{"lit":"reset_spent_time"}],"select":{"exist":["merge_request_id","project_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":6},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"merge_request_id","orig":"merge_request_iid","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"POST /api/v4/projects/{id}/merge_requests/{merge_request_iid}/reset_time_estimate","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4ProjectsIdMergeRequestsMergeRequestIidResetTimeEstimate\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project.\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The internal ID of the merge_request.\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"merge_request_iid\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"201\":{\"description\":\"Reset the time estimate for a project merge_request\",\"schema\":{\"description\":\"API_Entities_IssuableTimeStats model\",\"properties\":{\"human_time_estimate\":{\"example\":\"3h 30m\",\"type\":\"string\"},\"human_total_time_spent\":{\"example\":\"1h\",\"type\":\"string\"},\"time_estimate\":{\"example\":12600,\"format\":\"int32\",\"type\":\"integer\"},\"total_time_spent\":{\"example\":3600,\"format\":\"int32\",\"type\":\"integer\"}},\"type\":\"object\"}},\"401\":{\"description\":\"Unauthorized\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/api/v4/projects/{id}/merge_requests/{merge_request_iid}/reset_time_estimate","rename":{"param":{"id":"project_id","merge_request_iid":"merge_request_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"merge_requests"},{"var":"merge_request_id"},{"lit":"reset_time_estimate"}],"select":{"exist":["merge_request_id","project_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":7}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"issue_id","orig":"issue_iid","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"GET /api/v4/projects/{id}/issues/{issue_iid}/time_stats","json":"{\"operationId\":\"getApiV4ProjectsIdIssuesIssueIidTimeStats\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The internal ID of the issue\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"issue_iid\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get time tracking stats\",\"schema\":{\"description\":\"API_Entities_IssuableTimeStats model\",\"properties\":{\"human_time_estimate\":{\"example\":\"3h 30m\",\"type\":\"string\"},\"human_total_time_spent\":{\"example\":\"1h\",\"type\":\"string\"},\"time_estimate\":{\"example\":12600,\"format\":\"int32\",\"type\":\"integer\"},\"total_time_spent\":{\"example\":3600,\"format\":\"int32\",\"type\":\"integer\"}},\"type\":\"object\"}},\"401\":{\"description\":\"Unauthorized\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/projects/{id}/issues/{issue_iid}/time_stats","rename":{"param":{"id":"project_id","issue_iid":"issue_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"issues"},{"var":"issue_id"},{"lit":"time_stats"}],"select":{"exist":["issue_id","project_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"merge_request_id","orig":"merge_request_iid","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"GET /api/v4/projects/{id}/merge_requests/{merge_request_iid}/time_stats","json":"{\"operationId\":\"getApiV4ProjectsIdMergeRequestsMergeRequestIidTimeStats\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project.\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The internal ID of the merge_request\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"merge_request_iid\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get time tracking stats\",\"schema\":{\"description\":\"API_Entities_IssuableTimeStats model\",\"properties\":{\"human_time_estimate\":{\"example\":\"3h 30m\",\"type\":\"string\"},\"human_total_time_spent\":{\"example\":\"1h\",\"type\":\"string\"},\"time_estimate\":{\"example\":12600,\"format\":\"int32\",\"type\":\"integer\"},\"total_time_spent\":{\"example\":3600,\"format\":\"int32\",\"type\":\"integer\"}},\"type\":\"object\"}},\"401\":{\"description\":\"Unauthorized\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/projects/{id}/merge_requests/{merge_request_iid}/time_stats","rename":{"param":{"id":"project_id","merge_request_iid":"merge_request_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"merge_requests"},{"var":"merge_request_id"},{"lit":"time_stats"}],"select":{"exist":["merge_request_id","project_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"}},"relations":{"ancestors":[["project","issue"],["project","merge_request"]]},"key$":"api_entities_issuable_time_stat","name__orig":"api_entities_issuable_time_stat","Name":"ApiEntitiesIssuableTimeStat","name_":"api_entities_issuable_time_stat","name-":"api-entities-issuable-time-stat","NAME":"API_ENTITIES_ISSUABLE_TIME_STAT","index$":85}, {"active":true,"entity":"api_entities_issuable_time_stat","key$":"BasicApiEntitiesIssuableTimeStatFlow","kind":"basic","name":"BasicApiEntitiesIssuableTimeStatFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"api_entities_issuable_time_stat_ref01"},"match":{"merge_request_id":"merge_request01","project_id":"project01"},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{"ref":"api_entities_issuable_time_stat_ref01","srcdatavar":"api_entities_issuable_time_stat_ref01_data","suffix":"_dt0"},"match":{"id":"api_entities_issuable_time_stat01","project_id":"project01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_issuable_time_stat_ref01"}}],"index$":1}]}, 'ApiEntitiesIssuableTimeStat')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const api_entities_issuable_time_stat_ref01_ent = client.ApiEntitiesIssuableTimeStat()
    let api_entities_issuable_time_stat_ref01_data = setup.data.new.api_entities_issuable_time_stat['api_entities_issuable_time_stat_ref01']
    api_entities_issuable_time_stat_ref01_data['merge_request_id'] = setup.idmap['merge_request01']
    api_entities_issuable_time_stat_ref01_data['project_id'] = setup.idmap['project01']

    api_entities_issuable_time_stat_ref01_data = (await api_entities_issuable_time_stat_ref01_ent.create(api_entities_issuable_time_stat_ref01_data)).data()
    assert(null != api_entities_issuable_time_stat_ref01_data)



  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_issuable_time_stat/ApiEntitiesIssuableTimeStatTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = GitlabSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['api_entities_issuable_time_stat01','api_entities_issuable_time_stat02','api_entities_issuable_time_stat03','project01','project02','project03','issue01','issue02','issue03','project01','project02','project03','merge_request01','merge_request02','merge_request03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_ISSUABLE_TIME_STAT_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_ISSUABLE_TIME_STAT_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_ISSUABLE_TIME_STAT_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new GitlabSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
        apikey: env.GITLAB_APIKEY,
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.GITLAB_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
