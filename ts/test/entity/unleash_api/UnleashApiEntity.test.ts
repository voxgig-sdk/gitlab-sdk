

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


describe('UnleashApiEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.UnleashApi()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'unleash_api.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0}},"id":{"field":"id","name":"id"},"name":"unleash_api","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v4/feature_flags/unleash/{project_id}/features","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"project_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"app_name","or":"app_name","r":false,"t":"`$ANY`","index$":0},{"a":true,"k":"query","n":"instance_id","or":"instance_id","r":false,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/api/v4/feature_flags/unleash/{project_id}/features","q":{"$action":"features","exist":["app_name","id","instance_id"]},"r":{"param":{"project_id":"id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"feature_flags"},{"lit":"unleash"},{"var":"id"},{"lit":"features"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /api/v4/feature_flags/unleash/{project_id}/client/features","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"unleash_id","or":"project_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"app_name","or":"app_name","r":false,"t":"`$ANY`","index$":0},{"a":true,"k":"query","n":"instance_id","or":"instance_id","r":false,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/api/v4/feature_flags/unleash/{project_id}/client/features","q":{"exist":["app_name","instance_id","unleash_id"]},"r":{"param":{"project_id":"unleash_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"feature_flags"},{"lit":"unleash"},{"var":"unleash_id"},{"lit":"client"},{"lit":"features"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"unleash_api","name__orig":"unleash_api","Name":"UnleashApi","name_":"unleash_api","name-":"unleash-api","NAME":"UNLEASH_API","index$":271}, {"active":true,"entity":"unleash_api","key$":"BasicUnleashApiFlow","kind":"basic","name":"BasicUnleashApiFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"unleash_api_ref01","srcdatavar":"unleash_api_ref01_data","suffix":"_dt0"},"m":{"id":"unleash_api01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-unleash_api_ref01"}}],"index$":0}]}, 'UnleashApi', {"GET /api/v4/feature_flags/unleash/{project_id}/features":{"protocol":"http","parameters":[{"in":"path","name":"project_id","description":"The ID of a project","type":"string","required":true,"index$":0},{"in":"query","name":"instance_id","description":"The instance ID of Unleash Client","type":"string","required":false,"index$":1},{"in":"query","name":"app_name","description":"The application name of Unleash Client","type":"string","required":false,"index$":2}]},"GET /api/v4/feature_flags/unleash/{project_id}/client/features":{"protocol":"http","parameters":[{"in":"path","name":"project_id","description":"The ID of a project","type":"string","required":true,"index$":0},{"in":"query","name":"instance_id","description":"The instance ID of Unleash Client","type":"string","required":false,"index$":1},{"in":"query","name":"app_name","description":"The application name of Unleash Client","type":"string","required":false,"index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let unleash_api_ref01_data = Object.values(setup.data.existing.unleash_api)[0] as any

    // LOAD
    const unleash_api_ref01_ent = client.UnleashApi()
    const unleash_api_ref01_match_dt0: any = {}
    unleash_api_ref01_match_dt0.id = unleash_api_ref01_data.id
    const unleash_api_ref01_data_dt0 = (await unleash_api_ref01_ent.load(unleash_api_ref01_match_dt0)).data()
    assert(unleash_api_ref01_data_dt0.id === unleash_api_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/unleash_api/UnleashApiTestData.json')

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
    ['unleash_api01','unleash_api02','unleash_api03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_UNLEASH_API_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_UNLEASH_API_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_UNLEASH_API_ENTID']
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
  
