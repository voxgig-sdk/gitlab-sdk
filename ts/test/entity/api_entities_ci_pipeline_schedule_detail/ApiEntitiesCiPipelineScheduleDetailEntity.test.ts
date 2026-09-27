

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"active":{"a":true,"h":"Active","n":"active","r":false,"t":"`$BOOLEAN`","key$":"active","index$":0},"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":false,"t":"`$STRING`","key$":"created_at","index$":1},"cron":{"a":true,"h":"Cron","n":"cron","r":false,"t":"`$STRING`","key$":"cron","index$":2},"cron_timezone":{"a":true,"h":"Cron Timezone","n":"cron_timezone","r":false,"t":"`$STRING`","key$":"cron_timezone","index$":3},"description":{"a":true,"h":"Description","n":"description","r":false,"t":"`$STRING`","key$":"description","index$":4},"id":{"a":true,"fo":"int32","h":"Id","n":"id","r":false,"t":"`$INTEGER`","key$":"id","index$":5},"inputs":{"a":true,"h":"Inputs","n":"inputs","r":false,"t":"`$OBJECT`","key$":"inputs","index$":6},"last_pipeline":{"a":true,"h":"Last Pipeline","n":"last_pipeline","r":false,"sh":"API_Entities_Ci_PipelineBasic model","t":"`$OBJECT`","key$":"last_pipeline","index$":7},"next_run_at":{"a":true,"fo":"date-time","h":"Next Run At","n":"next_run_at","r":false,"t":"`$STRING`","key$":"next_run_at","index$":8},"owner":{"a":true,"h":"Owner","n":"owner","r":false,"sh":"API_Entities_UserBasic model","t":"`$OBJECT`","key$":"owner","index$":9},"ref":{"a":true,"h":"Ref","n":"ref","r":false,"t":"`$STRING`","key$":"ref","index$":10},"updated_at":{"a":true,"fo":"date-time","h":"Updated At","n":"updated_at","r":false,"t":"`$STRING`","key$":"updated_at","index$":11},"variables":{"a":true,"h":"Variables","n":"variables","r":false,"sh":"API_Entities_Ci_Variable model","t":"`$OBJECT`","key$":"variables","index$":12}},"id":{"field":"id","name":"id"},"name":"api_entities_ci_pipeline_schedule_detail","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/v4/projects/{id}/pipeline_schedules/{pipeline_schedule_id}/play","source":"swagger2","version":2},"g":{"params":[{"a":true,"ex":13,"k":"param","n":"pipeline_schedule_id","or":"pipeline_schedule_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":18,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/api/v4/projects/{id}/pipeline_schedules/{pipeline_schedule_id}/play","q":{"$action":"play","exist":["pipeline_schedule_id","project_id"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"pipeline_schedules"},{"var":"pipeline_schedule_id"},{"lit":"play"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /api/v4/projects/{id}/pipeline_schedules/{pipeline_schedule_id}/take_ownership","source":"swagger2","version":2},"g":{"params":[{"a":true,"ex":13,"k":"param","n":"pipeline_schedule_id","or":"pipeline_schedule_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":18,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/api/v4/projects/{id}/pipeline_schedules/{pipeline_schedule_id}/take_ownership","q":{"exist":["pipeline_schedule_id","project_id"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"pipeline_schedules"},{"var":"pipeline_schedule_id"},{"lit":"take_ownership"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"POST /api/v4/projects/{id}/pipeline_schedules","source":"swagger2","version":2},"g":{"params":[{"a":true,"ex":18,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"post_api_v4_projects_id_pipeline_schedule","or":"post_api_v4_projects_id_pipeline_schedule","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"POST","o":"/api/v4/projects/{id}/pipeline_schedules","q":{"exist":["post_api_v4_projects_id_pipeline_schedule","project_id"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"pipeline_schedules"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v4/projects/{id}/pipeline_schedules/{pipeline_schedule_id}","source":"swagger2","version":2},"g":{"params":[{"a":true,"ex":13,"k":"param","n":"pipeline_schedule_id","or":"pipeline_schedule_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":18,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/pipeline_schedules/{pipeline_schedule_id}","q":{"exist":["pipeline_schedule_id","project_id"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"pipeline_schedules"},{"var":"pipeline_schedule_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /api/v4/projects/{id}/pipeline_schedules/{pipeline_schedule_id}","source":"swagger2","version":2},"g":{"params":[{"a":true,"ex":13,"k":"param","n":"pipeline_schedule_id","or":"pipeline_schedule_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":18,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"put_api_v4_projects_id_pipeline_schedules_pipeline_schedule_id","or":"put_api_v4_projects_id_pipeline_schedules_pipeline_schedule_id","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"PUT","o":"/api/v4/projects/{id}/pipeline_schedules/{pipeline_schedule_id}","q":{"exist":["pipeline_schedule_id","project_id","put_api_v4_projects_id_pipeline_schedules_pipeline_schedule_id"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"pipeline_schedules"},{"var":"pipeline_schedule_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.project"],["$.main.kit.entity.project"]]},"key$":"api_entities_ci_pipeline_schedule_detail","name__orig":"api_entities_ci_pipeline_schedule_detail","Name":"ApiEntitiesCiPipelineScheduleDetail","name_":"api_entities_ci_pipeline_schedule_detail","name-":"api-entities-ci-pipeline-schedule-detail","NAME":"API_ENTITIES_CI_PIPELINE_SCHEDULE_DETAIL","index$":30}, {"active":true,"entity":"api_entities_ci_pipeline_schedule_detail","key$":"BasicApiEntitiesCiPipelineScheduleDetailFlow","kind":"basic","name":"BasicApiEntitiesCiPipelineScheduleDetailFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"api_entities_ci_pipeline_schedule_detail_ref01"},"m":{"project_id":"project01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{"project_id":"project01"},"i":{"ref":"api_entities_ci_pipeline_schedule_detail_ref01","srcdatavar":"api_entities_ci_pipeline_schedule_detail_ref01_data","suffix":"_up0","textfield":"created_at"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_ci_pipeline_schedule_detail_ref01"}}],"v":[],"index$":1},{"a":true,"d":{},"i":{"ref":"api_entities_ci_pipeline_schedule_detail_ref01","srcdatavar":"api_entities_ci_pipeline_schedule_detail_ref01_data","suffix":"_dt0"},"m":{"id":"api_entities_ci_pipeline_schedule_detail01","project_id":"project01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_ci_pipeline_schedule_detail_ref01"}}],"index$":2}]}, 'ApiEntitiesCiPipelineScheduleDetail', {"POST /api/v4/projects/{id}/pipeline_schedules/{pipeline_schedule_id}/play":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"example":18,"index$":0},{"in":"path","name":"pipeline_schedule_id","description":"The pipeline schedule id","type":"integer","format":"int32","required":true,"example":13,"index$":1}]},"POST /api/v4/projects/{id}/pipeline_schedules/{pipeline_schedule_id}/take_ownership":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"example":18,"index$":0},{"in":"path","name":"pipeline_schedule_id","description":"The pipeline schedule id","type":"integer","format":"int32","required":true,"example":13,"index$":1}]},"POST /api/v4/projects/{id}/pipeline_schedules":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"example":18,"index$":0},{"name":"postApiV4ProjectsIdPipelineSchedules","in":"body","required":true,"schema":{"type":"object","properties":{"description":{"type":"string","description":"The description of pipeline schedule","example":"Test schedule pipeline"},"ref":{"type":"string","description":"The branch/tag name will be triggered","example":"develop"},"cron":{"type":"string","description":"The cron","example":"* * * * *"},"cron_timezone":{"type":"string","description":"The timezone","default":"UTC","example":"Asia/Tokyo"},"active":{"type":"boolean","description":"The activation of pipeline schedule","default":true,"example":true},"inputs":{"type":"array","description":"Inputs for the pipeline schedule","example":[{"name":"array_input","value":[1,2]},{"name":"boolean_input","value":true}],"items":{"type":"object","properties":{"name":{"type":"string","description":"The name of the input","example":"deploy_strategy"},"value":{"type":"string","description":"The value of the input","example":"blue-green"}},"required":["name","value"]}}},"required":["description","ref","cron"],"description":"Create a new pipeline schedule","x-ref":"#/definitions/postApiV4ProjectsIdPipelineSchedules"},"index$":1}]},"GET /api/v4/projects/{id}/pipeline_schedules/{pipeline_schedule_id}":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"example":18,"index$":0},{"in":"path","name":"pipeline_schedule_id","description":"The pipeline schedule id","type":"integer","format":"int32","required":true,"example":13,"index$":1}]},"PUT /api/v4/projects/{id}/pipeline_schedules/{pipeline_schedule_id}":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"example":18,"index$":0},{"in":"path","name":"pipeline_schedule_id","description":"The pipeline schedule id","type":"integer","format":"int32","required":true,"example":13,"index$":1},{"name":"putApiV4ProjectsIdPipelineSchedulesPipelineScheduleId","in":"body","required":true,"schema":{"type":"object","properties":{"description":{"type":"string","description":"The description of pipeline schedule","example":"Test schedule pipeline"},"ref":{"type":"string","description":"The branch/tag name will be triggered","example":"develop"},"cron":{"type":"string","description":"The cron","example":"* * * * *"},"cron_timezone":{"type":"string","description":"The timezone","example":"Asia/Tokyo"},"active":{"type":"boolean","description":"The activation of pipeline schedule","example":true},"inputs":{"type":"array","description":"Inputs for the pipeline schedule","example":[{"name":"deploy_strategy","value":"blue-green"}],"items":{"type":"object","properties":{"name":{"type":"string","description":"The name of the input","example":"deploy_strategy"},"destroy":{"type":"boolean","description":"Whether to delete the input","default":false},"value":{"type":"string","description":"The value of the input","example":"blue-green"}},"required":["name","value"]}}},"description":"Edit a pipeline schedule","x-ref":"#/definitions/putApiV4ProjectsIdPipelineSchedulesPipelineScheduleId"},"index$":2}]}})
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
    ['api_entities_ci_pipeline_schedule_detail01','api_entities_ci_pipeline_schedule_detail02','api_entities_ci_pipeline_schedule_detail03','project01','project02','project03'],
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
  
