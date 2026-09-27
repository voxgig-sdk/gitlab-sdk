

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


describe('ApiEntitiesPersonalAccessTokenEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesPersonalAccessToken()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_personal_access_token.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"active":{"a":true,"h":"Active","n":"active","r":false,"t":"`$BOOLEAN`","key$":"active","index$":0},"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":false,"t":"`$STRING`","key$":"created_at","index$":1},"description":{"a":true,"h":"Description","n":"description","r":false,"t":"`$STRING`","key$":"description","index$":2},"expires_at":{"a":true,"fo":"date-time","h":"Expires At","n":"expires_at","r":false,"t":"`$STRING`","key$":"expires_at","index$":3},"id":{"a":true,"fo":"int32","h":"Id","n":"id","r":false,"t":"`$INTEGER`","key$":"id","index$":4},"last_used_at":{"a":true,"fo":"date-time","h":"Last Used At","n":"last_used_at","r":false,"t":"`$STRING`","key$":"last_used_at","index$":5},"name":{"a":true,"h":"Name","n":"name","r":false,"t":"`$STRING`","key$":"name","index$":6},"revoked":{"a":true,"h":"Revoked","n":"revoked","r":false,"t":"`$BOOLEAN`","key$":"revoked","index$":7},"scopes":{"a":true,"h":"Scopes","n":"scopes","r":false,"t":"`$ARRAY`","key$":"scopes","index$":8},"user_id":{"a":true,"fo":"int32","h":"User Id","n":"user_id","r":false,"t":"`$INTEGER`","key$":"user_id","index$":9}},"id":{"field":"id","name":"id"},"name":"api_entities_personal_access_token","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/v4/personal_access_tokens/self/associations","source":"swagger2","version":2},"g":{"query":[{"a":true,"k":"query","n":"min_access_level","or":"min_access_level","r":false,"t":"`$ANY`","index$":0},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"ex":20,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":2}]},"k":"http","m":"GET","o":"/api/v4/personal_access_tokens/self/associations","q":{"exist":["min_access_level","page","per_page"]},"r":{},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"personal_access_tokens"},{"lit":"self"},{"lit":"associations"}],"t":{"req":"`reqdata`","res":"`body.scopes`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"api_entities_personal_access_token","name__orig":"api_entities_personal_access_token","Name":"ApiEntitiesPersonalAccessToken","name_":"api_entities_personal_access_token","name-":"api-entities-personal-access-token","NAME":"API_ENTITIES_PERSONAL_ACCESS_TOKEN","index$":125}, {"active":true,"entity":"api_entities_personal_access_token","key$":"BasicApiEntitiesPersonalAccessTokenFlow","kind":"basic","name":"BasicApiEntitiesPersonalAccessTokenFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"api_entities_personal_access_token_ref01"}}],"index$":0}]}, 'ApiEntitiesPersonalAccessToken', {"GET /api/v4/personal_access_tokens/self/associations":{"protocol":"http","parameters":[{"in":"query","name":"min_access_level","description":"Limit by minimum access level of authenticated user","type":"integer","format":"int32","enum":[10,15,20,30,40,50],"required":false,"index$":0},{"in":"query","name":"page","description":"Current page number","type":"integer","format":"int32","default":1,"required":false,"example":1,"index$":1},{"in":"query","name":"per_page","description":"Number of items per page","type":"integer","format":"int32","default":20,"required":false,"example":20,"index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let api_entities_personal_access_token_ref01_data = Object.values(setup.data.existing.api_entities_personal_access_token)[0] as any

    // LIST
    const api_entities_personal_access_token_ref01_ent = client.ApiEntitiesPersonalAccessToken()
    const api_entities_personal_access_token_ref01_match: any = {}

    const api_entities_personal_access_token_ref01_list = (await api_entities_personal_access_token_ref01_ent.list(api_entities_personal_access_token_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_personal_access_token/ApiEntitiesPersonalAccessTokenTestData.json')

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
    ['api_entities_personal_access_token01','api_entities_personal_access_token02','api_entities_personal_access_token03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_PERSONAL_ACCESS_TOKEN_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_PERSONAL_ACCESS_TOKEN_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_PERSONAL_ACCESS_TOKEN_ENTID']
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
  
