

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


describe('ApiEntitiesUserCountEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesUserCount()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_user_count.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"assigned_issues":{"a":true,"fo":"int32","h":"Assigned Issues","n":"assigned_issues","r":false,"t":"`$INTEGER`","key$":"assigned_issues","index$":0},"assigned_merge_requests":{"a":true,"fo":"int32","h":"Assigned Merge Requests","n":"assigned_merge_requests","r":false,"t":"`$INTEGER`","key$":"assigned_merge_requests","index$":1},"merge_requests":{"a":true,"fo":"int32","h":"Merge Requests","n":"merge_requests","r":false,"t":"`$INTEGER`","key$":"merge_requests","index$":2},"review_requested_merge_requests":{"a":true,"fo":"int32","h":"Review Requested Merge Requests","n":"review_requested_merge_requests","r":false,"t":"`$INTEGER`","key$":"review_requested_merge_requests","index$":3},"todos":{"a":true,"fo":"int32","h":"Todos","n":"todos","r":false,"t":"`$INTEGER`","key$":"todos","index$":4}},"name":"api_entities_user_count","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v4/user_counts","source":"swagger2","version":2},"g":{},"k":"http","m":"GET","o":"/api/v4/user_counts","q":{},"r":{},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"user_counts"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"api_entities_user_count","name__orig":"api_entities_user_count","Name":"ApiEntitiesUserCount","name_":"api_entities_user_count","name-":"api-entities-user-count","NAME":"API_ENTITIES_USER_COUNT","index$":166}, {"active":true,"entity":"api_entities_user_count","key$":"BasicApiEntitiesUserCountFlow","kind":"basic","name":"BasicApiEntitiesUserCountFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"api_entities_user_count_ref01","srcdatavar":"api_entities_user_count_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_user_count_ref01"}}],"index$":0}]}, 'ApiEntitiesUserCount', {"GET /api/v4/user_counts":{"protocol":"http","parameters":[]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let api_entities_user_count_ref01_data = Object.values(setup.data.existing.api_entities_user_count)[0] as any

    // LOAD
    const api_entities_user_count_ref01_ent = client.ApiEntitiesUserCount()
    const api_entities_user_count_ref01_match_dt0: any = {}
    const api_entities_user_count_ref01_data_dt0 = (await api_entities_user_count_ref01_ent.load(api_entities_user_count_ref01_match_dt0)).data()
    assert(null != api_entities_user_count_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_user_count/ApiEntitiesUserCountTestData.json')

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
    ['api_entities_user_count01','api_entities_user_count02','api_entities_user_count03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_USER_COUNT_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_USER_COUNT_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_USER_COUNT_ENTID']
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
  
