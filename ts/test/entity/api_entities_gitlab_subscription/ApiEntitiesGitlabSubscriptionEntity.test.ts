

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


describe('ApiEntitiesGitlabSubscriptionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesGitlabSubscription()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_gitlab_subscription.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"billing":{"a":true,"h":"Billing","n":"billing","r":false,"t":"`$OBJECT`","key$":"billing","index$":0},"plan":{"a":true,"h":"Plan","n":"plan","r":false,"t":"`$OBJECT`","key$":"plan","index$":1},"usage":{"a":true,"h":"Usage","n":"usage","r":false,"t":"`$OBJECT`","key$":"usage","index$":2}},"name":"api_entities_gitlab_subscription","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v4/namespaces/{id}/gitlab_subscription","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"namespace_id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/v4/namespaces/{id}/gitlab_subscription","q":{"exist":["namespace_id"]},"r":{"param":{"id":"namespace_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"namespaces"},{"var":"namespace_id"},{"lit":"gitlab_subscription"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.namespace"]]},"key$":"api_entities_gitlab_subscription","name__orig":"api_entities_gitlab_subscription","Name":"ApiEntitiesGitlabSubscription","name_":"api_entities_gitlab_subscription","name-":"api-entities-gitlab-subscription","NAME":"API_ENTITIES_GITLAB_SUBSCRIPTION","index$":77}, {"active":true,"entity":"api_entities_gitlab_subscription","key$":"BasicApiEntitiesGitlabSubscriptionFlow","kind":"basic","name":"BasicApiEntitiesGitlabSubscriptionFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"api_entities_gitlab_subscription_ref01","srcdatavar":"api_entities_gitlab_subscription_ref01_data","suffix":"_dt0"},"m":{"id":"api_entities_gitlab_subscription01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_gitlab_subscription_ref01"}}],"index$":0}]}, 'ApiEntitiesGitlabSubscription', {"GET /api/v4/namespaces/{id}/gitlab_subscription":{"protocol":"http","parameters":[{"in":"path","name":"id","type":"integer","format":"int32","required":true,"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let api_entities_gitlab_subscription_ref01_data = Object.values(setup.data.existing.api_entities_gitlab_subscription)[0] as any

    // LOAD: skipped — no entity id field and load requires path params.
    // Entity-var is declared here so later flow steps still compile.
    const api_entities_gitlab_subscription_ref01_ent = client.ApiEntitiesGitlabSubscription()


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_gitlab_subscription/ApiEntitiesGitlabSubscriptionTestData.json')

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
    ['api_entities_gitlab_subscription01','api_entities_gitlab_subscription02','api_entities_gitlab_subscription03','namespace01','namespace02','namespace03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_GITLAB_SUBSCRIPTION_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_GITLAB_SUBSCRIPTION_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_GITLAB_SUBSCRIPTION_ENTID']
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
  
