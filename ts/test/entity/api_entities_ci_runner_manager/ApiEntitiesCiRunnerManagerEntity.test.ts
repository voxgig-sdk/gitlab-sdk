

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


describe('ApiEntitiesCiRunnerManagerEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesCiRunnerManager()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_ci_runner_manager.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"architecture":{"a":true,"h":"Architecture","n":"architecture","r":false,"t":"`$STRING`","key$":"architecture","index$":0},"contacted_at":{"a":true,"h":"Contacted At","n":"contacted_at","r":false,"t":"`$STRING`","key$":"contacted_at","index$":1},"created_at":{"a":true,"h":"Created At","n":"created_at","r":false,"t":"`$STRING`","key$":"created_at","index$":2},"id":{"a":true,"fo":"int32","h":"Id","n":"id","r":false,"t":"`$INTEGER`","key$":"id","index$":3},"ip_address":{"a":true,"h":"Ip Address","n":"ip_address","r":false,"t":"`$STRING`","key$":"ip_address","index$":4},"job_execution_status":{"a":true,"h":"Job Execution Status","n":"job_execution_status","r":false,"t":"`$STRING`","key$":"job_execution_status","index$":5},"platform":{"a":true,"h":"Platform","n":"platform","r":false,"t":"`$STRING`","key$":"platform","index$":6},"revision":{"a":true,"h":"Revision","n":"revision","r":false,"t":"`$STRING`","key$":"revision","index$":7},"status":{"a":true,"h":"Status","n":"status","r":false,"t":"`$STRING`","key$":"status","index$":8},"system_id":{"a":true,"h":"System Id","n":"system_id","r":false,"t":"`$STRING`","key$":"system_id","index$":9},"version":{"a":true,"h":"Version","n":"version","r":false,"t":"`$STRING`","key$":"version","index$":10}},"id":{"field":"id","name":"id"},"name":"api_entities_ci_runner_manager","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v4/runners/{id}/managers","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"runner_id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/v4/runners/{id}/managers","q":{"exist":["runner_id"]},"r":{"param":{"id":"runner_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"runners"},{"var":"runner_id"},{"lit":"managers"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.runner"]]},"key$":"api_entities_ci_runner_manager","name__orig":"api_entities_ci_runner_manager","Name":"ApiEntitiesCiRunnerManager","name_":"api_entities_ci_runner_manager","name-":"api-entities-ci-runner-manager","NAME":"API_ENTITIES_CI_RUNNER_MANAGER","index$":35}, {"active":true,"entity":"api_entities_ci_runner_manager","key$":"BasicApiEntitiesCiRunnerManagerFlow","kind":"basic","name":"BasicApiEntitiesCiRunnerManagerFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"api_entities_ci_runner_manager_ref01","srcdatavar":"api_entities_ci_runner_manager_ref01_data","suffix":"_dt0"},"m":{"id":"api_entities_ci_runner_manager01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_ci_runner_manager_ref01"}}],"index$":0}]}, 'ApiEntitiesCiRunnerManager', {"GET /api/v4/runners/{id}/managers":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID of a runner","type":"integer","format":"int32","required":true,"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let api_entities_ci_runner_manager_ref01_data = Object.values(setup.data.existing.api_entities_ci_runner_manager)[0] as any

    // LOAD
    const api_entities_ci_runner_manager_ref01_ent = client.ApiEntitiesCiRunnerManager()
    const api_entities_ci_runner_manager_ref01_match_dt0: any = {}
    api_entities_ci_runner_manager_ref01_match_dt0.id = api_entities_ci_runner_manager_ref01_data.id
    const api_entities_ci_runner_manager_ref01_data_dt0 = (await api_entities_ci_runner_manager_ref01_ent.load(api_entities_ci_runner_manager_ref01_match_dt0)).data()
    assert(api_entities_ci_runner_manager_ref01_data_dt0.id === api_entities_ci_runner_manager_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_ci_runner_manager/ApiEntitiesCiRunnerManagerTestData.json')

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
    ['api_entities_ci_runner_manager01','api_entities_ci_runner_manager02','api_entities_ci_runner_manager03','runner01','runner02','runner03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_CI_RUNNER_MANAGER_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_CI_RUNNER_MANAGER_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_CI_RUNNER_MANAGER_ENTID']
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
  
