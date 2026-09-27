

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


describe('ApiEntitiesCiJobBasicWithProjectEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesCiJobBasicWithProject()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_ci_job_basic_with_project.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"allow_failure":{"a":true,"h":"Allow Failure","n":"allow_failure","r":false,"t":"`$BOOLEAN`","key$":"allow_failure","index$":0},"commit":{"a":true,"h":"Commit","n":"commit","r":false,"sh":"API_Entities_Commit model","t":"`$OBJECT`","key$":"commit","index$":1},"coverage":{"a":true,"fo":"float","h":"Coverage","n":"coverage","r":false,"t":"`$NUMBER`","key$":"coverage","index$":2},"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":false,"t":"`$STRING`","key$":"created_at","index$":3},"duration":{"a":true,"fo":"float","h":"Duration","n":"duration","r":false,"sh":"Time spent running","t":"`$NUMBER`","key$":"duration","index$":4},"erased_at":{"a":true,"fo":"date-time","h":"Erased At","n":"erased_at","r":false,"t":"`$STRING`","key$":"erased_at","index$":5},"failure_reason":{"a":true,"h":"Failure Reason","n":"failure_reason","r":false,"t":"`$STRING`","key$":"failure_reason","index$":6},"finished_at":{"a":true,"fo":"date-time","h":"Finished At","n":"finished_at","r":false,"t":"`$STRING`","key$":"finished_at","index$":7},"id":{"a":true,"fo":"int32","h":"Id","n":"id","r":false,"t":"`$INTEGER`","key$":"id","index$":8},"name":{"a":true,"h":"Name","n":"name","r":false,"t":"`$STRING`","key$":"name","index$":9},"pipeline":{"a":true,"h":"Pipeline","n":"pipeline","r":false,"sh":"API_Entities_Ci_PipelineBasic model","t":"`$OBJECT`","key$":"pipeline","index$":10},"project":{"a":true,"h":"Project","n":"project","r":false,"t":"`$OBJECT`","key$":"project","index$":11},"queued_duration":{"a":true,"fo":"float","h":"Queued Duration","n":"queued_duration","r":false,"sh":"Time spent enqueued","t":"`$NUMBER`","key$":"queued_duration","index$":12},"ref":{"a":true,"h":"Ref","n":"ref","r":false,"t":"`$STRING`","key$":"ref","index$":13},"stage":{"a":true,"h":"Stage","n":"stage","r":false,"t":"`$STRING`","key$":"stage","index$":14},"started_at":{"a":true,"fo":"date-time","h":"Started At","n":"started_at","r":false,"t":"`$STRING`","key$":"started_at","index$":15},"status":{"a":true,"h":"Status","n":"status","r":false,"t":"`$STRING`","key$":"status","index$":16},"tag":{"a":true,"h":"Tag","n":"tag","r":false,"t":"`$BOOLEAN`","key$":"tag","index$":17},"user":{"a":true,"h":"User","n":"user","r":false,"t":"`$OBJECT`","key$":"user","index$":18},"web_url":{"a":true,"h":"Web Url","n":"web_url","r":false,"t":"`$STRING`","key$":"web_url","index$":19}},"id":{"field":"id","name":"id"},"name":"api_entities_ci_job_basic_with_project","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v4/runners/{id}/jobs","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"runner_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"cursor","or":"cursor","r":false,"t":"`$ANY`","index$":0},{"a":true,"k":"query","n":"order_by","or":"order_by","r":false,"t":"`$ANY`","index$":1},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"ex":20,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":3},{"a":true,"k":"query","n":"sort","or":"sort","r":false,"t":"`$ANY`","index$":4},{"a":true,"k":"query","n":"status","or":"status","r":false,"t":"`$ANY`","index$":5},{"a":true,"k":"query","n":"system_id","or":"system_id","r":false,"t":"`$STRING`","index$":6}]},"k":"http","m":"GET","o":"/api/v4/runners/{id}/jobs","q":{"exist":["cursor","order_by","page","per_page","runner_id","sort","status","system_id"]},"r":{"param":{"id":"runner_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"runners"},{"var":"runner_id"},{"lit":"jobs"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.runner"]]},"key$":"api_entities_ci_job_basic_with_project","name__orig":"api_entities_ci_job_basic_with_project","Name":"ApiEntitiesCiJobBasicWithProject","name_":"api_entities_ci_job_basic_with_project","name-":"api-entities-ci-job-basic-with-project","NAME":"API_ENTITIES_CI_JOB_BASIC_WITH_PROJECT","index$":25}, {"active":true,"entity":"api_entities_ci_job_basic_with_project","key$":"BasicApiEntitiesCiJobBasicWithProjectFlow","kind":"basic","name":"BasicApiEntitiesCiJobBasicWithProjectFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"api_entities_ci_job_basic_with_project_ref01","srcdatavar":"api_entities_ci_job_basic_with_project_ref01_data","suffix":"_dt0"},"m":{"id":"api_entities_ci_job_basic_with_project01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_ci_job_basic_with_project_ref01"}}],"index$":0}]}, 'ApiEntitiesCiJobBasicWithProject', {"GET /api/v4/runners/{id}/jobs":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID of a runner","type":"integer","format":"int32","required":true,"index$":0},{"in":"query","name":"system_id","description":"System ID associated with the runner manager","type":"string","required":false,"index$":1},{"in":"query","name":"status","description":"Status of the job","type":"string","enum":["created","waiting_for_resource","preparing","waiting_for_callback","pending","running","success","failed","canceling","canceled","skipped","manual","scheduled"],"required":false,"index$":2},{"in":"query","name":"order_by","description":"Order by `id`","type":"string","enum":["id"],"required":false,"index$":3},{"in":"query","name":"sort","description":"Sort by `asc` or `desc` order. Specify `order_by` as well, including for `id`","type":"string","default":"desc","enum":["asc","desc"],"required":false,"index$":4},{"in":"query","name":"cursor","description":"Cursor for obtaining the next set of records","type":"string","required":false,"index$":5},{"in":"query","name":"page","description":"Current page number","type":"integer","format":"int32","default":1,"required":false,"example":1,"index$":6},{"in":"query","name":"per_page","description":"Number of items per page","type":"integer","format":"int32","default":20,"required":false,"example":20,"index$":7}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let api_entities_ci_job_basic_with_project_ref01_data = Object.values(setup.data.existing.api_entities_ci_job_basic_with_project)[0] as any

    // LOAD
    const api_entities_ci_job_basic_with_project_ref01_ent = client.ApiEntitiesCiJobBasicWithProject()
    const api_entities_ci_job_basic_with_project_ref01_match_dt0: any = {}
    api_entities_ci_job_basic_with_project_ref01_match_dt0.id = api_entities_ci_job_basic_with_project_ref01_data.id
    const api_entities_ci_job_basic_with_project_ref01_data_dt0 = (await api_entities_ci_job_basic_with_project_ref01_ent.load(api_entities_ci_job_basic_with_project_ref01_match_dt0)).data()
    assert(api_entities_ci_job_basic_with_project_ref01_data_dt0.id === api_entities_ci_job_basic_with_project_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_ci_job_basic_with_project/ApiEntitiesCiJobBasicWithProjectTestData.json')

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
    ['api_entities_ci_job_basic_with_project01','api_entities_ci_job_basic_with_project02','api_entities_ci_job_basic_with_project03','runner01','runner02','runner03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_CI_JOB_BASIC_WITH_PROJECT_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_CI_JOB_BASIC_WITH_PROJECT_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_CI_JOB_BASIC_WITH_PROJECT_ENTID']
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
  
