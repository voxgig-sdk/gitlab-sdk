

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


describe('ApiEntitiesErrorTrackingClientKeyEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesErrorTrackingClientKey()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['create', 'list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_error_tracking_client_key.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"active":{"a":true,"h":"Active","n":"active","r":false,"t":"`$BOOLEAN`","key$":"active","index$":0},"id":{"a":true,"fo":"int32","h":"Id","n":"id","r":false,"t":"`$INTEGER`","key$":"id","index$":1},"public_key":{"a":true,"h":"Public Key","n":"public_key","r":false,"t":"`$STRING`","key$":"public_key","index$":2},"sentry_dsn":{"a":true,"h":"Sentry Dsn","n":"sentry_dsn","r":false,"t":"`$STRING`","key$":"sentry_dsn","index$":3}},"id":{"field":"id","name":"id"},"name":"api_entities_error_tracking_client_key","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/v4/projects/{id}/error_tracking/client_keys","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/api/v4/projects/{id}/error_tracking/client_keys","q":{"exist":["project_id"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"error_tracking"},{"lit":"client_keys"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/v4/projects/{id}/error_tracking/client_keys","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/error_tracking/client_keys","q":{"exist":["project_id"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"error_tracking"},{"lit":"client_keys"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.project"]]},"key$":"api_entities_error_tracking_client_key","name__orig":"api_entities_error_tracking_client_key","Name":"ApiEntitiesErrorTrackingClientKey","name_":"api_entities_error_tracking_client_key","name-":"api-entities-error-tracking-client-key","NAME":"API_ENTITIES_ERROR_TRACKING_CLIENT_KEY","index$":69}, {"active":true,"entity":"api_entities_error_tracking_client_key","key$":"BasicApiEntitiesErrorTrackingClientKeyFlow","kind":"basic","name":"BasicApiEntitiesErrorTrackingClientKeyFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"api_entities_error_tracking_client_key_ref01"},"m":{"project_id":"project01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"project_id":"project01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"api_entities_error_tracking_client_key_ref01"}}],"index$":1}]}, 'ApiEntitiesErrorTrackingClientKey', {"POST /api/v4/projects/{id}/error_tracking/client_keys":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project owned by the authenticated user","type":"string","required":true,"index$":0}]},"GET /api/v4/projects/{id}/error_tracking/client_keys":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project owned by the authenticated user","type":"string","required":true,"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const api_entities_error_tracking_client_key_ref01_ent = client.ApiEntitiesErrorTrackingClientKey()
    let api_entities_error_tracking_client_key_ref01_data = setup.data.new.api_entities_error_tracking_client_key['api_entities_error_tracking_client_key_ref01']
    api_entities_error_tracking_client_key_ref01_data['project_id'] = setup.idmap['project01']

    api_entities_error_tracking_client_key_ref01_data = (await api_entities_error_tracking_client_key_ref01_ent.create(api_entities_error_tracking_client_key_ref01_data)).data()
    assert(null != api_entities_error_tracking_client_key_ref01_data.id)


    // LIST
    const api_entities_error_tracking_client_key_ref01_match: any = {}
    api_entities_error_tracking_client_key_ref01_match['project_id'] = setup.idmap['project01']

    const api_entities_error_tracking_client_key_ref01_list = (await api_entities_error_tracking_client_key_ref01_ent.list(api_entities_error_tracking_client_key_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(api_entities_error_tracking_client_key_ref01_list, { id: api_entities_error_tracking_client_key_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_error_tracking_client_key/ApiEntitiesErrorTrackingClientKeyTestData.json')

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
    ['api_entities_error_tracking_client_key01','api_entities_error_tracking_client_key02','api_entities_error_tracking_client_key03','project01','project02','project03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_ERROR_TRACKING_CLIENT_KEY_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_ERROR_TRACKING_CLIENT_KEY_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_ERROR_TRACKING_CLIENT_KEY_ENTID']
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
  
