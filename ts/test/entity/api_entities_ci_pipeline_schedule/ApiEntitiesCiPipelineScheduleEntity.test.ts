

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


describe('ApiEntitiesCiPipelineScheduleEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesCiPipelineSchedule()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_ci_pipeline_schedule.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"active","req":false,"type":"`$BOOLEAN`","index$":0},{"active":true,"format":"date-time","name":"created_at","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"cron","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"cron_timezone","req":false,"type":"`$STRING`","index$":3},{"active":true,"name":"description","req":false,"type":"`$STRING`","index$":4},{"active":true,"format":"int32","name":"id","req":false,"type":"`$INTEGER`","index$":5},{"active":true,"name":"inputs","req":false,"type":"`$OBJECT`","index$":6},{"active":true,"format":"date-time","name":"next_run_at","req":false,"type":"`$STRING`","index$":7},{"active":true,"name":"owner","req":false,"short":"API_Entities_UserBasic model","type":"`$OBJECT`","index$":8},{"active":true,"name":"ref","req":false,"type":"`$STRING`","index$":9},{"active":true,"format":"date-time","name":"updated_at","req":false,"type":"`$STRING`","index$":10}],"id":{"field":"id","name":"id"},"name":"api_entities_ci_pipeline_schedule","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"example":18,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"example":1,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":0},{"active":true,"example":20,"kind":"query","name":"per_page","orig":"per_page","reqd":false,"type":"`$INTEGER`","index$":1},{"active":true,"example":"active","kind":"query","name":"scope","orig":"scope","reqd":false,"type":"`$ANY`","index$":2}]},"contract":{"id":"GET /api/v4/projects/{id}/pipeline_schedules","json":"{\"operationId\":\"getApiV4ProjectsIdPipelineSchedules\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"example\":18,\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"default\":1,\"description\":\"Current page number\",\"example\":1,\"format\":\"int32\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"type\":\"integer\"},{\"default\":20,\"description\":\"Number of items per page\",\"example\":20,\"format\":\"int32\",\"in\":\"query\",\"name\":\"per_page\",\"required\":false,\"type\":\"integer\"},{\"description\":\"The scope of pipeline schedules\",\"enum\":[\"active\",\"inactive\"],\"example\":\"active\",\"in\":\"query\",\"name\":\"scope\",\"required\":false,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get all pipeline schedules\",\"schema\":{\"items\":{\"description\":\"API_Entities_Ci_PipelineSchedule model\",\"properties\":{\"active\":{\"example\":true,\"type\":\"boolean\"},\"created_at\":{\"example\":\"2017-05-19T13:31:08.849Z\",\"format\":\"date-time\",\"type\":\"string\"},\"cron\":{\"example\":\"* * * * *\",\"type\":\"string\"},\"cron_timezone\":{\"example\":\"Asia/Tokyo\",\"type\":\"string\"},\"description\":{\"example\":\"Test schedule pipeline\",\"type\":\"string\"},\"id\":{\"example\":13,\"format\":\"int32\",\"type\":\"integer\"},\"inputs\":{\"properties\":{\"name\":{\"type\":\"string\"},\"value\":{\"type\":\"string\"}},\"type\":\"object\"},\"next_run_at\":{\"example\":\"2017-05-19T13:41:00.000Z\",\"format\":\"date-time\",\"type\":\"string\"},\"owner\":{\"description\":\"API_Entities_UserBasic model\",\"properties\":{\"avatar_path\":{\"example\":\"/user/avatar/28/The-Big-Lebowski-400-400.png\",\"type\":\"string\"},\"avatar_url\":{\"example\":\"https://gravatar.com/avatar/1\",\"type\":\"string\"},\"custom_attributes\":{\"items\":{\"description\":\"API_Entities_CustomAttribute model\",\"properties\":{\"key\":{\"example\":\"foo\",\"type\":\"string\"},\"value\":{\"example\":\"bar\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"locked\":{\"type\":\"boolean\"},\"name\":{\"example\":\"Administrator\",\"type\":\"string\"},\"public_email\":{\"example\":\"john@example.com\",\"type\":\"string\"},\"state\":{\"example\":\"active\",\"type\":\"string\"},\"username\":{\"example\":\"admin\",\"type\":\"string\"},\"web_url\":{\"example\":\"https://gitlab.example.com/root\",\"type\":\"string\"}},\"type\":\"object\"},\"ref\":{\"example\":\"develop\",\"type\":\"string\"},\"updated_at\":{\"example\":\"2017-05-19T13:40:17.727Z\",\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/projects/{id}/pipeline_schedules","rename":{"param":{"id":"project_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"pipeline_schedules"}],"select":{"exist":["page","per_page","project_id","scope"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["project"]]},"key$":"api_entities_ci_pipeline_schedule","name__orig":"api_entities_ci_pipeline_schedule","Name":"ApiEntitiesCiPipelineSchedule","name_":"api_entities_ci_pipeline_schedule","name-":"api-entities-ci-pipeline-schedule","NAME":"API_ENTITIES_CI_PIPELINE_SCHEDULE","index$":29}, {"active":true,"entity":"api_entities_ci_pipeline_schedule","key$":"BasicApiEntitiesCiPipelineScheduleFlow","kind":"basic","name":"BasicApiEntitiesCiPipelineScheduleFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{"project_id":"project01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"api_entities_ci_pipeline_schedule_ref01"}}],"index$":0}]}, 'ApiEntitiesCiPipelineSchedule')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let api_entities_ci_pipeline_schedule_ref01_data = Object.values(setup.data.existing.api_entities_ci_pipeline_schedule)[0] as any

    // LIST
    const api_entities_ci_pipeline_schedule_ref01_ent = client.ApiEntitiesCiPipelineSchedule()
    const api_entities_ci_pipeline_schedule_ref01_match: any = {}
    api_entities_ci_pipeline_schedule_ref01_match['project_id'] = setup.idmap['project01']

    const api_entities_ci_pipeline_schedule_ref01_list = (await api_entities_ci_pipeline_schedule_ref01_ent.list(api_entities_ci_pipeline_schedule_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_ci_pipeline_schedule/ApiEntitiesCiPipelineScheduleTestData.json')

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
    ['api_entities_ci_pipeline_schedule01','api_entities_ci_pipeline_schedule02','api_entities_ci_pipeline_schedule03','project01','project02','project03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_CI_PIPELINE_SCHEDULE_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_CI_PIPELINE_SCHEDULE_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_CI_PIPELINE_SCHEDULE_ENTID']
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
  
