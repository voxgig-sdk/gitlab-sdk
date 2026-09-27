

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"active":{"a":true,"h":"Active","n":"active","r":false,"t":"`$BOOLEAN`","key$":"active","index$":0},"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":false,"t":"`$STRING`","key$":"created_at","index$":1},"cron":{"a":true,"h":"Cron","n":"cron","r":false,"t":"`$STRING`","key$":"cron","index$":2},"cron_timezone":{"a":true,"h":"Cron Timezone","n":"cron_timezone","r":false,"t":"`$STRING`","key$":"cron_timezone","index$":3},"description":{"a":true,"h":"Description","n":"description","r":false,"t":"`$STRING`","key$":"description","index$":4},"id":{"a":true,"fo":"int32","h":"Id","n":"id","r":false,"t":"`$INTEGER`","key$":"id","index$":5},"inputs":{"a":true,"h":"Inputs","n":"inputs","r":false,"t":"`$OBJECT`","key$":"inputs","index$":6},"next_run_at":{"a":true,"fo":"date-time","h":"Next Run At","n":"next_run_at","r":false,"t":"`$STRING`","key$":"next_run_at","index$":7},"owner":{"a":true,"h":"Owner","n":"owner","r":false,"sh":"API_Entities_UserBasic model","t":"`$OBJECT`","key$":"owner","index$":8},"ref":{"a":true,"h":"Ref","n":"ref","r":false,"t":"`$STRING`","key$":"ref","index$":9},"updated_at":{"a":true,"fo":"date-time","h":"Updated At","n":"updated_at","r":false,"t":"`$STRING`","key$":"updated_at","index$":10}},"id":{"field":"id","name":"id"},"name":"api_entities_ci_pipeline_schedule","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/v4/projects/{id}/pipeline_schedules","source":"swagger2","version":2},"g":{"params":[{"a":true,"ex":18,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":20,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"ex":"active","k":"query","n":"scope","or":"scope","r":false,"t":"`$ANY`","index$":2}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/pipeline_schedules","q":{"exist":["page","per_page","project_id","scope"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"pipeline_schedules"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.project"]]},"key$":"api_entities_ci_pipeline_schedule","name__orig":"api_entities_ci_pipeline_schedule","Name":"ApiEntitiesCiPipelineSchedule","name_":"api_entities_ci_pipeline_schedule","name-":"api-entities-ci-pipeline-schedule","NAME":"API_ENTITIES_CI_PIPELINE_SCHEDULE","index$":29}, {"active":true,"entity":"api_entities_ci_pipeline_schedule","key$":"BasicApiEntitiesCiPipelineScheduleFlow","kind":"basic","name":"BasicApiEntitiesCiPipelineScheduleFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"project_id":"project01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"api_entities_ci_pipeline_schedule_ref01"}}],"index$":0}]}, 'ApiEntitiesCiPipelineSchedule', {"GET /api/v4/projects/{id}/pipeline_schedules":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"example":18,"index$":0},{"in":"query","name":"page","description":"Current page number","type":"integer","format":"int32","default":1,"required":false,"example":1,"index$":1},{"in":"query","name":"per_page","description":"Number of items per page","type":"integer","format":"int32","default":20,"required":false,"example":20,"index$":2},{"in":"query","name":"scope","description":"The scope of pipeline schedules","type":"string","enum":["active","inactive"],"required":false,"example":"active","index$":3}]}})
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
  
