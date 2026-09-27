

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


describe('RunnerEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.Runner()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['create', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'runner.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0}},"id":{"field":"id","name":"id"},"name":"runner","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/v4/runners/verify","source":"swagger2","version":2},"g":{"query":[{"a":true,"k":"query","n":"post_api_v4_runners_verify","or":"post_api_v4_runners_verify","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"POST","o":"/api/v4/runners/verify","q":{"$action":"verify","exist":["post_api_v4_runners_verify"]},"r":{},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"runners"},{"lit":"verify"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /api/v4/projects/{id}/runners/{runner_id}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"runner_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/api/v4/projects/{id}/runners/{runner_id}","q":{"exist":["id","project_id"]},"r":{"param":{"id":"project_id","runner_id":"id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"runners"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"DELETE /api/v4/runners/managers","source":"swagger2","version":2},"g":{"query":[{"a":true,"k":"query","n":"system_id","or":"system_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"token","or":"token","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/api/v4/runners/managers","q":{"$action":"manager","exist":["system_id","token"]},"r":{},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"runners"},{"lit":"managers"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"DELETE /api/v4/runners/{id}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/api/v4/runners/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"runners"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"DELETE /api/v4/runners","source":"swagger2","version":2},"g":{"query":[{"a":true,"k":"query","n":"token","or":"token","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/api/v4/runners","q":{"exist":["token"]},"r":{},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"runners"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":3}],"key$":"remove"}},"relations":{"ancestors":[["$.main.kit.entity.project"]]},"key$":"runner","name__orig":"runner","Name":"Runner","name_":"runner","name-":"runner","NAME":"RUNNER","index$":258}, {"active":true,"entity":"runner","key$":"BasicRunnerFlow","kind":"basic","name":"BasicRunnerFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"runner_ref01"},"m":{"project_id":"project01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"runner_ref01","suffix":"_rm0"},"m":{},"o":"remove","s":[],"v":[],"index$":1}]}, 'Runner', {"POST /api/v4/runners/verify":{"protocol":"http","parameters":[{"name":"postApiV4RunnersVerify","in":"body","required":true,"schema":{"type":"object","properties":{"token":{"type":"string","description":"The runner's authentication token"},"system_id":{"type":"string","description":"The runner's system identifier"}},"required":["token"],"description":"Validate authentication credentials","x-ref":"#/definitions/postApiV4RunnersVerify"},"index$":0}]},"DELETE /api/v4/projects/{id}/runners/{runner_id}":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project owned by the authenticated user","type":"string","required":true,"index$":0},{"in":"path","name":"runner_id","description":"The ID of a runner","type":"integer","format":"int32","required":true,"index$":1}]},"DELETE /api/v4/runners/managers":{"protocol":"http","parameters":[{"in":"query","name":"token","description":"The runner's authentication token","type":"string","required":true,"index$":0},{"in":"query","name":"system_id","description":"The runner's system identifier.","type":"string","required":true,"index$":1}]},"DELETE /api/v4/runners/{id}":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID of a runner","type":"integer","format":"int32","required":true,"index$":0}]},"DELETE /api/v4/runners":{"protocol":"http","parameters":[{"in":"query","name":"token","description":"The runner's authentication token","type":"string","required":true,"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const runner_ref01_ent = client.Runner()
    let runner_ref01_data = setup.data.new.runner['runner_ref01']
    runner_ref01_data['project_id'] = setup.idmap['project01']

    runner_ref01_data = (await runner_ref01_ent.create(runner_ref01_data)).data()
    assert(null != runner_ref01_data.id)


    // REMOVE
    const runner_ref01_match_rm0: any = { id: runner_ref01_data.id }
    await runner_ref01_ent.remove(runner_ref01_match_rm0)
  

  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/runner/RunnerTestData.json')

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
    ['runner01','runner02','runner03','project01','project02','project03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_RUNNER_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_RUNNER_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_RUNNER_ENTID']
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
  
