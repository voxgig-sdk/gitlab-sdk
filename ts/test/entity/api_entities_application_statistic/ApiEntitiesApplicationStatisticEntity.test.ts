

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


describe('ApiEntitiesApplicationStatisticEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesApplicationStatistic()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_application_statistic.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"active_users":{"a":true,"fo":"int32","h":"Active Users","n":"active_users","r":false,"sh":"Number of active users","t":"`$INTEGER`","key$":"active_users","index$":0},"forks":{"a":true,"fo":"int32","h":"Forks","n":"forks","r":false,"sh":"Approximate number of repo forks","t":"`$INTEGER`","key$":"forks","index$":1},"groups":{"a":true,"fo":"int32","h":"Groups","n":"groups","r":false,"sh":"Approximate number of projects","t":"`$INTEGER`","key$":"groups","index$":2},"issues":{"a":true,"fo":"int32","h":"Issues","n":"issues","r":false,"sh":"Approximate number of issues","t":"`$INTEGER`","key$":"issues","index$":3},"merge_requests":{"a":true,"fo":"int32","h":"Merge Requests","n":"merge_requests","r":false,"sh":"Approximate number of merge requests","t":"`$INTEGER`","key$":"merge_requests","index$":4},"milestones":{"a":true,"fo":"int32","h":"Milestones","n":"milestones","r":false,"sh":"Approximate number of milestones","t":"`$INTEGER`","key$":"milestones","index$":5},"notes":{"a":true,"fo":"int32","h":"Notes","n":"notes","r":false,"sh":"Approximate number of notes","t":"`$INTEGER`","key$":"notes","index$":6},"projects":{"a":true,"fo":"int32","h":"Projects","n":"projects","r":false,"sh":"Approximate number of projects","t":"`$INTEGER`","key$":"projects","index$":7},"snippets":{"a":true,"fo":"int32","h":"Snippets","n":"snippets","r":false,"sh":"Approximate number of snippets","t":"`$INTEGER`","key$":"snippets","index$":8},"ssh_keys":{"a":true,"fo":"int32","h":"Ssh Keys","n":"ssh_keys","r":false,"sh":"Approximate number of SSH keys","t":"`$INTEGER`","key$":"ssh_keys","index$":9},"users":{"a":true,"fo":"int32","h":"Users","n":"users","r":false,"sh":"Approximate number of users","t":"`$INTEGER`","key$":"users","index$":10}},"name":"api_entities_application_statistic","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v4/application/statistics","source":"swagger2","version":2},"g":{},"k":"http","m":"GET","o":"/api/v4/application/statistics","q":{},"r":{},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"application"},{"lit":"statistics"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"api_entities_application_statistic","name__orig":"api_entities_application_statistic","Name":"ApiEntitiesApplicationStatistic","name_":"api_entities_application_statistic","name-":"api-entities-application-statistic","NAME":"API_ENTITIES_APPLICATION_STATISTIC","index$":5}, {"active":true,"entity":"api_entities_application_statistic","key$":"BasicApiEntitiesApplicationStatisticFlow","kind":"basic","name":"BasicApiEntitiesApplicationStatisticFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"api_entities_application_statistic_ref01","srcdatavar":"api_entities_application_statistic_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_application_statistic_ref01"}}],"index$":0}]}, 'ApiEntitiesApplicationStatistic', {"GET /api/v4/application/statistics":{"protocol":"http","parameters":[]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let api_entities_application_statistic_ref01_data = Object.values(setup.data.existing.api_entities_application_statistic)[0] as any

    // LOAD
    const api_entities_application_statistic_ref01_ent = client.ApiEntitiesApplicationStatistic()
    const api_entities_application_statistic_ref01_match_dt0: any = {}
    const api_entities_application_statistic_ref01_data_dt0 = (await api_entities_application_statistic_ref01_ent.load(api_entities_application_statistic_ref01_match_dt0)).data()
    assert(null != api_entities_application_statistic_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_application_statistic/ApiEntitiesApplicationStatisticTestData.json')

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
    ['api_entities_application_statistic01','api_entities_application_statistic02','api_entities_application_statistic03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_APPLICATION_STATISTIC_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_APPLICATION_STATISTIC_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_APPLICATION_STATISTIC_ENTID']
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
  
