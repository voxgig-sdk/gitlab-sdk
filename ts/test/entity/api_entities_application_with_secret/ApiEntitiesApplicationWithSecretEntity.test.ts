

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


describe('ApiEntitiesApplicationWithSecretEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesApplicationWithSecret()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_application_with_secret.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"application_id":{"a":true,"h":"Application Id","n":"application_id","r":false,"t":"`$STRING`","key$":"application_id","index$":0},"application_name":{"a":true,"h":"Application Name","n":"application_name","r":false,"t":"`$STRING`","key$":"application_name","index$":1},"callback_url":{"a":true,"h":"Callback Url","n":"callback_url","r":false,"t":"`$STRING`","key$":"callback_url","index$":2},"confidential":{"a":true,"h":"Confidential","n":"confidential","r":false,"t":"`$BOOLEAN`","key$":"confidential","index$":3},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":4},"secret":{"a":true,"h":"Secret","n":"secret","r":false,"t":"`$STRING`","key$":"secret","index$":5}},"id":{"field":"id","name":"id"},"name":"api_entities_application_with_secret","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/v4/applications/{id}/renew-secret","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"application_id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/api/v4/applications/{id}/renew-secret","q":{"exist":["application_id"]},"r":{"param":{"id":"application_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"applications"},{"var":"application_id"},{"lit":"renew-secret"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /api/v4/applications","source":"swagger2","version":2},"g":{"query":[{"a":true,"k":"query","n":"post_api_v4_application","or":"post_api_v4_application","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"POST","o":"/api/v4/applications","q":{"exist":["post_api_v4_application"]},"r":{},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"applications"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[["$.main.kit.entity.application"]]},"key$":"api_entities_application_with_secret","name__orig":"api_entities_application_with_secret","Name":"ApiEntitiesApplicationWithSecret","name_":"api_entities_application_with_secret","name-":"api-entities-application-with-secret","NAME":"API_ENTITIES_APPLICATION_WITH_SECRET","index$":6}, {"active":true,"entity":"api_entities_application_with_secret","key$":"BasicApiEntitiesApplicationWithSecretFlow","kind":"basic","name":"BasicApiEntitiesApplicationWithSecretFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"api_entities_application_with_secret_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'ApiEntitiesApplicationWithSecret', {"POST /api/v4/applications/{id}/renew-secret":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID of the application (not the application_id)","type":"integer","format":"int32","required":true,"index$":0}]},"POST /api/v4/applications":{"protocol":"http","parameters":[{"name":"postApiV4Applications","in":"body","required":true,"schema":{"type":"object","properties":{"name":{"type":"string","description":"Name of the application.","example":"MyApplication"},"redirect_uri":{"type":"string","description":"Redirect URI of the application.","example":"https://redirect.uri"},"scopes":{"type":"string","description":"Scopes of the application. You can specify multiple scopes by separating\\\n                                 each scope using a space"},"confidential":{"type":"boolean","description":"The application is used where the client secret can be kept confidential. Native mobile apps \\\n                        and Single Page Apps are considered non-confidential. Defaults to true if not supplied","default":true}},"required":["name","redirect_uri","scopes"],"description":"Create a new application","x-ref":"#/definitions/postApiV4Applications"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const api_entities_application_with_secret_ref01_ent = client.ApiEntitiesApplicationWithSecret()
    let api_entities_application_with_secret_ref01_data = setup.data.new.api_entities_application_with_secret['api_entities_application_with_secret_ref01']

    api_entities_application_with_secret_ref01_data = (await api_entities_application_with_secret_ref01_ent.create(api_entities_application_with_secret_ref01_data)).data()
    assert(null != api_entities_application_with_secret_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_application_with_secret/ApiEntitiesApplicationWithSecretTestData.json')

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
    ['api_entities_application_with_secret01','api_entities_application_with_secret02','api_entities_application_with_secret03','application01','application02','application03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_APPLICATION_WITH_SECRET_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_APPLICATION_WITH_SECRET_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_APPLICATION_WITH_SECRET_ENTID']
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
  
