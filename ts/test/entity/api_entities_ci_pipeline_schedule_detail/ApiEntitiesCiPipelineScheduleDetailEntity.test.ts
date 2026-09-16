

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


describe('ApiEntitiesCiPipelineScheduleDetailEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesCiPipelineScheduleDetail()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['create', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_ci_pipeline_schedule_detail.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"active","req":false,"type":"`$BOOLEAN`","index$":0},{"active":true,"format":"date-time","name":"created_at","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"cron","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"cron_timezone","req":false,"type":"`$STRING`","index$":3},{"active":true,"name":"description","req":false,"type":"`$STRING`","index$":4},{"active":true,"format":"int32","name":"id","req":false,"type":"`$INTEGER`","index$":5},{"active":true,"name":"inputs","req":false,"type":"`$OBJECT`","index$":6},{"active":true,"name":"last_pipeline","req":false,"short":"API_Entities_Ci_PipelineBasic model","type":"`$OBJECT`","index$":7},{"active":true,"format":"date-time","name":"next_run_at","req":false,"type":"`$STRING`","index$":8},{"active":true,"name":"owner","req":false,"short":"API_Entities_UserBasic model","type":"`$OBJECT`","index$":9},{"active":true,"name":"ref","req":false,"type":"`$STRING`","index$":10},{"active":true,"format":"date-time","name":"updated_at","req":false,"type":"`$STRING`","index$":11},{"active":true,"name":"variables","req":false,"short":"API_Entities_Ci_Variable model","type":"`$OBJECT`","index$":12}],"id":{"field":"id","name":"id"},"name":"api_entities_ci_pipeline_schedule_detail","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"params":[{"active":true,"example":13,"kind":"param","name":"pipeline_schedule_id","orig":"pipeline_schedule_id","reqd":true,"type":"`$STRING`"},{"active":true,"example":18,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`"}]},"contract":{"id":"POST /api/v4/projects/{id}/pipeline_schedules/{pipeline_schedule_id}/play","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4ProjectsIdPipelineSchedulesPipelineScheduleIdPlay\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"example\":18,\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The pipeline schedule id\",\"example\":13,\"format\":\"int32\",\"in\":\"path\",\"name\":\"pipeline_schedule_id\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"201\":{\"description\":\"Play a scheduled pipeline immediately\"},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/api/v4/projects/{id}/pipeline_schedules/{pipeline_schedule_id}/play","rename":{"param":{"id":"project_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"pipeline_schedules"},{"var":"pipeline_schedule_id"},{"lit":"play"}],"select":{"$action":"play","exist":["pipeline_schedule_id","project_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"example":13,"kind":"param","name":"pipeline_schedule_id","orig":"pipeline_schedule_id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"example":18,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"POST /api/v4/projects/{id}/pipeline_schedules/{pipeline_schedule_id}/take_ownership","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4ProjectsIdPipelineSchedulesPipelineScheduleIdTakeOwnership\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"example\":18,\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The pipeline schedule id\",\"example\":13,\"format\":\"int32\",\"in\":\"path\",\"name\":\"pipeline_schedule_id\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"201\":{\"description\":\"Take ownership of a pipeline schedule\",\"schema\":{\"description\":\"API_Entities_Ci_PipelineScheduleDetails model\",\"properties\":{\"active\":{\"example\":true,\"type\":\"boolean\"},\"created_at\":{\"example\":\"2017-05-19T13:31:08.849Z\",\"format\":\"date-time\",\"type\":\"string\"},\"cron\":{\"example\":\"* * * * *\",\"type\":\"string\"},\"cron_timezone\":{\"example\":\"Asia/Tokyo\",\"type\":\"string\"},\"description\":{\"example\":\"Test schedule pipeline\",\"type\":\"string\"},\"id\":{\"example\":13,\"format\":\"int32\",\"type\":\"integer\"},\"inputs\":{\"properties\":{\"name\":{\"type\":\"string\"},\"value\":{\"type\":\"string\"}},\"type\":\"object\"},\"last_pipeline\":{\"description\":\"API_Entities_Ci_PipelineBasic model\",\"properties\":{\"created_at\":{\"example\":\"2022-10-21T16:49:48.000+02:00\",\"format\":\"date-time\",\"type\":\"string\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"iid\":{\"example\":2,\"format\":\"int32\",\"type\":\"integer\"},\"project_id\":{\"example\":3,\"format\":\"int32\",\"type\":\"integer\"},\"ref\":{\"example\":\"feature-branch\",\"type\":\"string\"},\"sha\":{\"example\":\"0ec9e58fdfca6cdd6652c083c9edb53abc0bad52\",\"type\":\"string\"},\"source\":{\"example\":\"push\",\"type\":\"string\"},\"status\":{\"example\":\"success\",\"type\":\"string\"},\"updated_at\":{\"example\":\"2022-10-21T16:49:48.000+02:00\",\"format\":\"date-time\",\"type\":\"string\"},\"web_url\":{\"example\":\"https://gitlab.example.com/gitlab-org/gitlab-foss/-/pipelines/61\",\"type\":\"string\"}},\"type\":\"object\"},\"next_run_at\":{\"example\":\"2017-05-19T13:41:00.000Z\",\"format\":\"date-time\",\"type\":\"string\"},\"owner\":{\"description\":\"API_Entities_UserBasic model\",\"properties\":{\"avatar_path\":{\"example\":\"/user/avatar/28/The-Big-Lebowski-400-400.png\",\"type\":\"string\"},\"avatar_url\":{\"example\":\"https://gravatar.com/avatar/1\",\"type\":\"string\"},\"custom_attributes\":{\"items\":{\"description\":\"API_Entities_CustomAttribute model\",\"properties\":{\"key\":{\"example\":\"foo\",\"type\":\"string\"},\"value\":{\"example\":\"bar\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"locked\":{\"type\":\"boolean\"},\"name\":{\"example\":\"Administrator\",\"type\":\"string\"},\"public_email\":{\"example\":\"john@example.com\",\"type\":\"string\"},\"state\":{\"example\":\"active\",\"type\":\"string\"},\"username\":{\"example\":\"admin\",\"type\":\"string\"},\"web_url\":{\"example\":\"https://gitlab.example.com/root\",\"type\":\"string\"}},\"type\":\"object\"},\"ref\":{\"example\":\"develop\",\"type\":\"string\"},\"updated_at\":{\"example\":\"2017-05-19T13:40:17.727Z\",\"format\":\"date-time\",\"type\":\"string\"},\"variables\":{\"description\":\"API_Entities_Ci_Variable model\",\"properties\":{\"description\":{\"example\":\"This variable is being used for ...\",\"type\":\"string\"},\"environment_scope\":{\"example\":\"*\",\"type\":\"string\"},\"hidden\":{\"type\":\"boolean\"},\"key\":{\"example\":\"TEST_VARIABLE_1\",\"type\":\"string\"},\"masked\":{\"type\":\"boolean\"},\"protected\":{\"type\":\"boolean\"},\"raw\":{\"type\":\"boolean\"},\"value\":{\"example\":\"TEST_1\",\"type\":\"string\"},\"variable_type\":{\"example\":\"env_var\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"}},\"400\":{\"description\":\"Bad request\"},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/api/v4/projects/{id}/pipeline_schedules/{pipeline_schedule_id}/take_ownership","rename":{"param":{"id":"project_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"pipeline_schedules"},{"var":"pipeline_schedule_id"},{"lit":"take_ownership"}],"select":{"exist":["pipeline_schedule_id","project_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1},{"active":true,"args":{"params":[{"active":true,"example":18,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"kind":"query","name":"post_api_v4_projects_id_pipeline_schedule","orig":"post_api_v4_projects_id_pipeline_schedule","reqd":true,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"POST /api/v4/projects/{id}/pipeline_schedules","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4ProjectsIdPipelineSchedules\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"example\":18,\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"in\":\"body\",\"name\":\"postApiV4ProjectsIdPipelineSchedules\",\"required\":true,\"schema\":{\"description\":\"Create a new pipeline schedule\",\"properties\":{\"active\":{\"default\":true,\"description\":\"The activation of pipeline schedule\",\"example\":true,\"type\":\"boolean\"},\"cron\":{\"description\":\"The cron\",\"example\":\"* * * * *\",\"type\":\"string\"},\"cron_timezone\":{\"default\":\"UTC\",\"description\":\"The timezone\",\"example\":\"Asia/Tokyo\",\"type\":\"string\"},\"description\":{\"description\":\"The description of pipeline schedule\",\"example\":\"Test schedule pipeline\",\"type\":\"string\"},\"inputs\":{\"description\":\"Inputs for the pipeline schedule\",\"example\":[{\"name\":\"array_input\",\"value\":[1,2]},{\"name\":\"boolean_input\",\"value\":true}],\"items\":{\"properties\":{\"name\":{\"description\":\"The name of the input\",\"example\":\"deploy_strategy\",\"type\":\"string\"},\"value\":{\"description\":\"The value of the input\",\"example\":\"blue-green\",\"type\":\"string\"}},\"required\":[\"name\",\"value\"],\"type\":\"object\"},\"type\":\"array\"},\"ref\":{\"description\":\"The branch/tag name will be triggered\",\"example\":\"develop\",\"type\":\"string\"}},\"required\":[\"description\",\"ref\",\"cron\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"201\":{\"description\":\"Create a new pipeline schedule\",\"schema\":{\"description\":\"API_Entities_Ci_PipelineScheduleDetails model\",\"properties\":{\"active\":{\"example\":true,\"type\":\"boolean\"},\"created_at\":{\"example\":\"2017-05-19T13:31:08.849Z\",\"format\":\"date-time\",\"type\":\"string\"},\"cron\":{\"example\":\"* * * * *\",\"type\":\"string\"},\"cron_timezone\":{\"example\":\"Asia/Tokyo\",\"type\":\"string\"},\"description\":{\"example\":\"Test schedule pipeline\",\"type\":\"string\"},\"id\":{\"example\":13,\"format\":\"int32\",\"type\":\"integer\"},\"inputs\":{\"properties\":{\"name\":{\"type\":\"string\"},\"value\":{\"type\":\"string\"}},\"type\":\"object\"},\"last_pipeline\":{\"description\":\"API_Entities_Ci_PipelineBasic model\",\"properties\":{\"created_at\":{\"example\":\"2022-10-21T16:49:48.000+02:00\",\"format\":\"date-time\",\"type\":\"string\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"iid\":{\"example\":2,\"format\":\"int32\",\"type\":\"integer\"},\"project_id\":{\"example\":3,\"format\":\"int32\",\"type\":\"integer\"},\"ref\":{\"example\":\"feature-branch\",\"type\":\"string\"},\"sha\":{\"example\":\"0ec9e58fdfca6cdd6652c083c9edb53abc0bad52\",\"type\":\"string\"},\"source\":{\"example\":\"push\",\"type\":\"string\"},\"status\":{\"example\":\"success\",\"type\":\"string\"},\"updated_at\":{\"example\":\"2022-10-21T16:49:48.000+02:00\",\"format\":\"date-time\",\"type\":\"string\"},\"web_url\":{\"example\":\"https://gitlab.example.com/gitlab-org/gitlab-foss/-/pipelines/61\",\"type\":\"string\"}},\"type\":\"object\"},\"next_run_at\":{\"example\":\"2017-05-19T13:41:00.000Z\",\"format\":\"date-time\",\"type\":\"string\"},\"owner\":{\"description\":\"API_Entities_UserBasic model\",\"properties\":{\"avatar_path\":{\"example\":\"/user/avatar/28/The-Big-Lebowski-400-400.png\",\"type\":\"string\"},\"avatar_url\":{\"example\":\"https://gravatar.com/avatar/1\",\"type\":\"string\"},\"custom_attributes\":{\"items\":{\"description\":\"API_Entities_CustomAttribute model\",\"properties\":{\"key\":{\"example\":\"foo\",\"type\":\"string\"},\"value\":{\"example\":\"bar\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"locked\":{\"type\":\"boolean\"},\"name\":{\"example\":\"Administrator\",\"type\":\"string\"},\"public_email\":{\"example\":\"john@example.com\",\"type\":\"string\"},\"state\":{\"example\":\"active\",\"type\":\"string\"},\"username\":{\"example\":\"admin\",\"type\":\"string\"},\"web_url\":{\"example\":\"https://gitlab.example.com/root\",\"type\":\"string\"}},\"type\":\"object\"},\"ref\":{\"example\":\"develop\",\"type\":\"string\"},\"updated_at\":{\"example\":\"2017-05-19T13:40:17.727Z\",\"format\":\"date-time\",\"type\":\"string\"},\"variables\":{\"description\":\"API_Entities_Ci_Variable model\",\"properties\":{\"description\":{\"example\":\"This variable is being used for ...\",\"type\":\"string\"},\"environment_scope\":{\"example\":\"*\",\"type\":\"string\"},\"hidden\":{\"type\":\"boolean\"},\"key\":{\"example\":\"TEST_VARIABLE_1\",\"type\":\"string\"},\"masked\":{\"type\":\"boolean\"},\"protected\":{\"type\":\"boolean\"},\"raw\":{\"type\":\"boolean\"},\"value\":{\"example\":\"TEST_1\",\"type\":\"string\"},\"variable_type\":{\"example\":\"env_var\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"}},\"400\":{\"description\":\"Bad request\"},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/api/v4/projects/{id}/pipeline_schedules","rename":{"param":{"id":"project_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"pipeline_schedules"}],"select":{"exist":["post_api_v4_projects_id_pipeline_schedule","project_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"example":13,"kind":"param","name":"pipeline_schedule_id","orig":"pipeline_schedule_id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"example":18,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"GET /api/v4/projects/{id}/pipeline_schedules/{pipeline_schedule_id}","json":"{\"operationId\":\"getApiV4ProjectsIdPipelineSchedulesPipelineScheduleId\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"example\":18,\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The pipeline schedule id\",\"example\":13,\"format\":\"int32\",\"in\":\"path\",\"name\":\"pipeline_schedule_id\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get a single pipeline schedule\",\"schema\":{\"description\":\"API_Entities_Ci_PipelineScheduleDetails model\",\"properties\":{\"active\":{\"example\":true,\"type\":\"boolean\"},\"created_at\":{\"example\":\"2017-05-19T13:31:08.849Z\",\"format\":\"date-time\",\"type\":\"string\"},\"cron\":{\"example\":\"* * * * *\",\"type\":\"string\"},\"cron_timezone\":{\"example\":\"Asia/Tokyo\",\"type\":\"string\"},\"description\":{\"example\":\"Test schedule pipeline\",\"type\":\"string\"},\"id\":{\"example\":13,\"format\":\"int32\",\"type\":\"integer\"},\"inputs\":{\"properties\":{\"name\":{\"type\":\"string\"},\"value\":{\"type\":\"string\"}},\"type\":\"object\"},\"last_pipeline\":{\"description\":\"API_Entities_Ci_PipelineBasic model\",\"properties\":{\"created_at\":{\"example\":\"2022-10-21T16:49:48.000+02:00\",\"format\":\"date-time\",\"type\":\"string\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"iid\":{\"example\":2,\"format\":\"int32\",\"type\":\"integer\"},\"project_id\":{\"example\":3,\"format\":\"int32\",\"type\":\"integer\"},\"ref\":{\"example\":\"feature-branch\",\"type\":\"string\"},\"sha\":{\"example\":\"0ec9e58fdfca6cdd6652c083c9edb53abc0bad52\",\"type\":\"string\"},\"source\":{\"example\":\"push\",\"type\":\"string\"},\"status\":{\"example\":\"success\",\"type\":\"string\"},\"updated_at\":{\"example\":\"2022-10-21T16:49:48.000+02:00\",\"format\":\"date-time\",\"type\":\"string\"},\"web_url\":{\"example\":\"https://gitlab.example.com/gitlab-org/gitlab-foss/-/pipelines/61\",\"type\":\"string\"}},\"type\":\"object\"},\"next_run_at\":{\"example\":\"2017-05-19T13:41:00.000Z\",\"format\":\"date-time\",\"type\":\"string\"},\"owner\":{\"description\":\"API_Entities_UserBasic model\",\"properties\":{\"avatar_path\":{\"example\":\"/user/avatar/28/The-Big-Lebowski-400-400.png\",\"type\":\"string\"},\"avatar_url\":{\"example\":\"https://gravatar.com/avatar/1\",\"type\":\"string\"},\"custom_attributes\":{\"items\":{\"description\":\"API_Entities_CustomAttribute model\",\"properties\":{\"key\":{\"example\":\"foo\",\"type\":\"string\"},\"value\":{\"example\":\"bar\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"locked\":{\"type\":\"boolean\"},\"name\":{\"example\":\"Administrator\",\"type\":\"string\"},\"public_email\":{\"example\":\"john@example.com\",\"type\":\"string\"},\"state\":{\"example\":\"active\",\"type\":\"string\"},\"username\":{\"example\":\"admin\",\"type\":\"string\"},\"web_url\":{\"example\":\"https://gitlab.example.com/root\",\"type\":\"string\"}},\"type\":\"object\"},\"ref\":{\"example\":\"develop\",\"type\":\"string\"},\"updated_at\":{\"example\":\"2017-05-19T13:40:17.727Z\",\"format\":\"date-time\",\"type\":\"string\"},\"variables\":{\"description\":\"API_Entities_Ci_Variable model\",\"properties\":{\"description\":{\"example\":\"This variable is being used for ...\",\"type\":\"string\"},\"environment_scope\":{\"example\":\"*\",\"type\":\"string\"},\"hidden\":{\"type\":\"boolean\"},\"key\":{\"example\":\"TEST_VARIABLE_1\",\"type\":\"string\"},\"masked\":{\"type\":\"boolean\"},\"protected\":{\"type\":\"boolean\"},\"raw\":{\"type\":\"boolean\"},\"value\":{\"example\":\"TEST_1\",\"type\":\"string\"},\"variable_type\":{\"example\":\"env_var\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"}},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/projects/{id}/pipeline_schedules/{pipeline_schedule_id}","rename":{"param":{"id":"project_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"pipeline_schedules"},{"var":"pipeline_schedule_id"}],"select":{"exist":["pipeline_schedule_id","project_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"active":true,"args":{"params":[{"active":true,"example":13,"kind":"param","name":"pipeline_schedule_id","orig":"pipeline_schedule_id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"example":18,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":1}],"query":[{"active":true,"kind":"query","name":"put_api_v4_projects_id_pipeline_schedules_pipeline_schedule_id","orig":"put_api_v4_projects_id_pipeline_schedules_pipeline_schedule_id","reqd":true,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"PUT /api/v4/projects/{id}/pipeline_schedules/{pipeline_schedule_id}","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"putApiV4ProjectsIdPipelineSchedulesPipelineScheduleId\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"example\":18,\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The pipeline schedule id\",\"example\":13,\"format\":\"int32\",\"in\":\"path\",\"name\":\"pipeline_schedule_id\",\"required\":true,\"type\":\"integer\"},{\"in\":\"body\",\"name\":\"putApiV4ProjectsIdPipelineSchedulesPipelineScheduleId\",\"required\":true,\"schema\":{\"description\":\"Edit a pipeline schedule\",\"properties\":{\"active\":{\"description\":\"The activation of pipeline schedule\",\"example\":true,\"type\":\"boolean\"},\"cron\":{\"description\":\"The cron\",\"example\":\"* * * * *\",\"type\":\"string\"},\"cron_timezone\":{\"description\":\"The timezone\",\"example\":\"Asia/Tokyo\",\"type\":\"string\"},\"description\":{\"description\":\"The description of pipeline schedule\",\"example\":\"Test schedule pipeline\",\"type\":\"string\"},\"inputs\":{\"description\":\"Inputs for the pipeline schedule\",\"example\":[{\"name\":\"deploy_strategy\",\"value\":\"blue-green\"}],\"items\":{\"properties\":{\"destroy\":{\"default\":false,\"description\":\"Whether to delete the input\",\"type\":\"boolean\"},\"name\":{\"description\":\"The name of the input\",\"example\":\"deploy_strategy\",\"type\":\"string\"},\"value\":{\"description\":\"The value of the input\",\"example\":\"blue-green\",\"type\":\"string\"}},\"required\":[\"name\",\"value\"],\"type\":\"object\"},\"type\":\"array\"},\"ref\":{\"description\":\"The branch/tag name will be triggered\",\"example\":\"develop\",\"type\":\"string\"}},\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Edit a pipeline schedule\",\"schema\":{\"description\":\"API_Entities_Ci_PipelineScheduleDetails model\",\"properties\":{\"active\":{\"example\":true,\"type\":\"boolean\"},\"created_at\":{\"example\":\"2017-05-19T13:31:08.849Z\",\"format\":\"date-time\",\"type\":\"string\"},\"cron\":{\"example\":\"* * * * *\",\"type\":\"string\"},\"cron_timezone\":{\"example\":\"Asia/Tokyo\",\"type\":\"string\"},\"description\":{\"example\":\"Test schedule pipeline\",\"type\":\"string\"},\"id\":{\"example\":13,\"format\":\"int32\",\"type\":\"integer\"},\"inputs\":{\"properties\":{\"name\":{\"type\":\"string\"},\"value\":{\"type\":\"string\"}},\"type\":\"object\"},\"last_pipeline\":{\"description\":\"API_Entities_Ci_PipelineBasic model\",\"properties\":{\"created_at\":{\"example\":\"2022-10-21T16:49:48.000+02:00\",\"format\":\"date-time\",\"type\":\"string\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"iid\":{\"example\":2,\"format\":\"int32\",\"type\":\"integer\"},\"project_id\":{\"example\":3,\"format\":\"int32\",\"type\":\"integer\"},\"ref\":{\"example\":\"feature-branch\",\"type\":\"string\"},\"sha\":{\"example\":\"0ec9e58fdfca6cdd6652c083c9edb53abc0bad52\",\"type\":\"string\"},\"source\":{\"example\":\"push\",\"type\":\"string\"},\"status\":{\"example\":\"success\",\"type\":\"string\"},\"updated_at\":{\"example\":\"2022-10-21T16:49:48.000+02:00\",\"format\":\"date-time\",\"type\":\"string\"},\"web_url\":{\"example\":\"https://gitlab.example.com/gitlab-org/gitlab-foss/-/pipelines/61\",\"type\":\"string\"}},\"type\":\"object\"},\"next_run_at\":{\"example\":\"2017-05-19T13:41:00.000Z\",\"format\":\"date-time\",\"type\":\"string\"},\"owner\":{\"description\":\"API_Entities_UserBasic model\",\"properties\":{\"avatar_path\":{\"example\":\"/user/avatar/28/The-Big-Lebowski-400-400.png\",\"type\":\"string\"},\"avatar_url\":{\"example\":\"https://gravatar.com/avatar/1\",\"type\":\"string\"},\"custom_attributes\":{\"items\":{\"description\":\"API_Entities_CustomAttribute model\",\"properties\":{\"key\":{\"example\":\"foo\",\"type\":\"string\"},\"value\":{\"example\":\"bar\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"locked\":{\"type\":\"boolean\"},\"name\":{\"example\":\"Administrator\",\"type\":\"string\"},\"public_email\":{\"example\":\"john@example.com\",\"type\":\"string\"},\"state\":{\"example\":\"active\",\"type\":\"string\"},\"username\":{\"example\":\"admin\",\"type\":\"string\"},\"web_url\":{\"example\":\"https://gitlab.example.com/root\",\"type\":\"string\"}},\"type\":\"object\"},\"ref\":{\"example\":\"develop\",\"type\":\"string\"},\"updated_at\":{\"example\":\"2017-05-19T13:40:17.727Z\",\"format\":\"date-time\",\"type\":\"string\"},\"variables\":{\"description\":\"API_Entities_Ci_Variable model\",\"properties\":{\"description\":{\"example\":\"This variable is being used for ...\",\"type\":\"string\"},\"environment_scope\":{\"example\":\"*\",\"type\":\"string\"},\"hidden\":{\"type\":\"boolean\"},\"key\":{\"example\":\"TEST_VARIABLE_1\",\"type\":\"string\"},\"masked\":{\"type\":\"boolean\"},\"protected\":{\"type\":\"boolean\"},\"raw\":{\"type\":\"boolean\"},\"value\":{\"example\":\"TEST_1\",\"type\":\"string\"},\"variable_type\":{\"example\":\"env_var\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"}},\"400\":{\"description\":\"Bad request\"},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"PUT","orig":"/api/v4/projects/{id}/pipeline_schedules/{pipeline_schedule_id}","rename":{"param":{"id":"project_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"pipeline_schedules"},{"var":"pipeline_schedule_id"}],"select":{"exist":["pipeline_schedule_id","project_id","put_api_v4_projects_id_pipeline_schedules_pipeline_schedule_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["project"],["project","pipeline_schedule"]]},"key$":"api_entities_ci_pipeline_schedule_detail","name__orig":"api_entities_ci_pipeline_schedule_detail","Name":"ApiEntitiesCiPipelineScheduleDetail","name_":"api_entities_ci_pipeline_schedule_detail","name-":"api-entities-ci-pipeline-schedule-detail","NAME":"API_ENTITIES_CI_PIPELINE_SCHEDULE_DETAIL","index$":30}, {"active":true,"entity":"api_entities_ci_pipeline_schedule_detail","key$":"BasicApiEntitiesCiPipelineScheduleDetailFlow","kind":"basic","name":"BasicApiEntitiesCiPipelineScheduleDetailFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"api_entities_ci_pipeline_schedule_detail_ref01"},"match":{"project_id":"project01"},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{"project_id":"project01"},"input":{"ref":"api_entities_ci_pipeline_schedule_detail_ref01","srcdatavar":"api_entities_ci_pipeline_schedule_detail_ref01_data","suffix":"_up0","textfield":"created_at"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_ci_pipeline_schedule_detail_ref01"}}],"valid":[],"index$":1},{"active":true,"data":{},"input":{"ref":"api_entities_ci_pipeline_schedule_detail_ref01","srcdatavar":"api_entities_ci_pipeline_schedule_detail_ref01_data","suffix":"_dt0"},"match":{"id":"api_entities_ci_pipeline_schedule_detail01","project_id":"project01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_ci_pipeline_schedule_detail_ref01"}}],"index$":2}]}, 'ApiEntitiesCiPipelineScheduleDetail')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const api_entities_ci_pipeline_schedule_detail_ref01_ent = client.ApiEntitiesCiPipelineScheduleDetail()
    let api_entities_ci_pipeline_schedule_detail_ref01_data = setup.data.new.api_entities_ci_pipeline_schedule_detail['api_entities_ci_pipeline_schedule_detail_ref01']
    api_entities_ci_pipeline_schedule_detail_ref01_data['project_id'] = setup.idmap['project01']

    api_entities_ci_pipeline_schedule_detail_ref01_data = (await api_entities_ci_pipeline_schedule_detail_ref01_ent.create(api_entities_ci_pipeline_schedule_detail_ref01_data)).data()
    assert(null != api_entities_ci_pipeline_schedule_detail_ref01_data.id)


    // UPDATE
    const api_entities_ci_pipeline_schedule_detail_ref01_data_up0: any = {}
    api_entities_ci_pipeline_schedule_detail_ref01_data_up0.id = api_entities_ci_pipeline_schedule_detail_ref01_data.id
    api_entities_ci_pipeline_schedule_detail_ref01_data_up0 ['project_id'] = setup.idmap['project_id']

    const api_entities_ci_pipeline_schedule_detail_ref01_markdef_up0 = { name: 'created_at', value: 'Mark01-api_entities_ci_pipeline_schedule_detail_ref01_' + setup.now }
    ;(api_entities_ci_pipeline_schedule_detail_ref01_data_up0 as any)[api_entities_ci_pipeline_schedule_detail_ref01_markdef_up0.name] = api_entities_ci_pipeline_schedule_detail_ref01_markdef_up0.value

    const api_entities_ci_pipeline_schedule_detail_ref01_resdata_up0 = (await api_entities_ci_pipeline_schedule_detail_ref01_ent.update(api_entities_ci_pipeline_schedule_detail_ref01_data_up0)).data()
    assert(api_entities_ci_pipeline_schedule_detail_ref01_resdata_up0.id === api_entities_ci_pipeline_schedule_detail_ref01_data_up0.id)

    assert((api_entities_ci_pipeline_schedule_detail_ref01_resdata_up0 as any)[api_entities_ci_pipeline_schedule_detail_ref01_markdef_up0.name] === api_entities_ci_pipeline_schedule_detail_ref01_markdef_up0.value)


    // LOAD
    const api_entities_ci_pipeline_schedule_detail_ref01_match_dt0: any = {}
    api_entities_ci_pipeline_schedule_detail_ref01_match_dt0.id = api_entities_ci_pipeline_schedule_detail_ref01_data.id
    const api_entities_ci_pipeline_schedule_detail_ref01_data_dt0 = (await api_entities_ci_pipeline_schedule_detail_ref01_ent.load(api_entities_ci_pipeline_schedule_detail_ref01_match_dt0)).data()
    assert(api_entities_ci_pipeline_schedule_detail_ref01_data_dt0.id === api_entities_ci_pipeline_schedule_detail_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_ci_pipeline_schedule_detail/ApiEntitiesCiPipelineScheduleDetailTestData.json')

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
    ['api_entities_ci_pipeline_schedule_detail01','api_entities_ci_pipeline_schedule_detail02','api_entities_ci_pipeline_schedule_detail03','project01','project02','project03','project01','project02','project03','pipeline_schedule01','pipeline_schedule02','pipeline_schedule03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_CI_PIPELINE_SCHEDULE_DETAIL_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_CI_PIPELINE_SCHEDULE_DETAIL_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_CI_PIPELINE_SCHEDULE_DETAIL_ENTID']
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
  
