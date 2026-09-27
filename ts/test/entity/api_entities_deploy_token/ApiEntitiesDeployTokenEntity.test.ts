

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


describe('ApiEntitiesDeployTokenEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesDeployToken()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_deploy_token.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"expired":{"a":true,"h":"Expired","n":"expired","r":false,"t":"`$BOOLEAN`","key$":"expired","index$":0},"expires_at":{"a":true,"fo":"date-time","h":"Expires At","n":"expires_at","r":false,"t":"`$STRING`","key$":"expires_at","index$":1},"id":{"a":true,"fo":"int32","h":"Id","n":"id","r":false,"t":"`$INTEGER`","key$":"id","index$":2},"name":{"a":true,"h":"Name","n":"name","r":false,"t":"`$STRING`","key$":"name","index$":3},"revoked":{"a":true,"h":"Revoked","n":"revoked","r":false,"t":"`$BOOLEAN`","key$":"revoked","index$":4},"scopes":{"a":true,"h":"Scopes","n":"scopes","r":false,"t":"`$ARRAY`","key$":"scopes","index$":5},"username":{"a":true,"h":"Username","n":"username","r":false,"t":"`$STRING`","key$":"username","index$":6}},"id":{"field":"id","name":"id"},"name":"api_entities_deploy_token","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/v4/groups/{id}/deploy_tokens","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"group_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"active","or":"active","r":false,"t":"`$BOOLEAN`","index$":0},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"ex":20,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":2}]},"k":"http","m":"GET","o":"/api/v4/groups/{id}/deploy_tokens","q":{"exist":["active","group_id","page","per_page"]},"r":{"param":{"id":"group_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"groups"},{"var":"group_id"},{"lit":"deploy_tokens"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /api/v4/projects/{id}/deploy_tokens","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"active","or":"active","r":false,"t":"`$BOOLEAN`","index$":0},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"ex":20,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":2}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/deploy_tokens","q":{"exist":["active","page","per_page","project_id"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"deploy_tokens"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"GET /api/v4/deploy_tokens","source":"swagger2","version":2},"g":{"query":[{"a":true,"k":"query","n":"active","or":"active","r":false,"t":"`$BOOLEAN`","index$":0},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"ex":20,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":2}]},"k":"http","m":"GET","o":"/api/v4/deploy_tokens","q":{"exist":["active","page","per_page"]},"r":{},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"deploy_tokens"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v4/groups/{id}/deploy_tokens/{token_id}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"group_id","or":"id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"token_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/api/v4/groups/{id}/deploy_tokens/{token_id}","q":{"exist":["group_id","id"]},"r":{"param":{"id":"group_id","token_id":"id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"groups"},{"var":"group_id"},{"lit":"deploy_tokens"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /api/v4/projects/{id}/deploy_tokens/{token_id}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"token_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/deploy_tokens/{token_id}","q":{"exist":["id","project_id"]},"r":{"param":{"id":"project_id","token_id":"id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"deploy_tokens"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.group"],["$.main.kit.entity.project"]]},"key$":"api_entities_deploy_token","name__orig":"api_entities_deploy_token","Name":"ApiEntitiesDeployToken","name_":"api_entities_deploy_token","name-":"api-entities-deploy-token","NAME":"API_ENTITIES_DEPLOY_TOKEN","index$":59}, {"active":true,"entity":"api_entities_deploy_token","key$":"BasicApiEntitiesDeployTokenFlow","kind":"basic","name":"BasicApiEntitiesDeployTokenFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"api_entities_deploy_token_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"api_entities_deploy_token_ref01","srcdatavar":"api_entities_deploy_token_ref01_data","suffix":"_dt0"},"m":{"id":"api_entities_deploy_token01","project_id":"project01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_deploy_token_ref01"}}],"index$":1}]}, 'ApiEntitiesDeployToken', {"GET /api/v4/groups/{id}/deploy_tokens":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the group owned by the authenticated user","type":"integer","format":"int32","required":true,"index$":0},{"in":"query","name":"page","description":"Current page number","type":"integer","format":"int32","default":1,"required":false,"example":1,"index$":1},{"in":"query","name":"per_page","description":"Number of items per page","type":"integer","format":"int32","default":20,"required":false,"example":20,"index$":2},{"in":"query","name":"active","description":"Limit by active status","type":"boolean","required":false,"index$":3}]},"GET /api/v4/projects/{id}/deploy_tokens":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project owned by the authenticated user","type":"string","required":true,"index$":0},{"in":"query","name":"page","description":"Current page number","type":"integer","format":"int32","default":1,"required":false,"example":1,"index$":1},{"in":"query","name":"per_page","description":"Number of items per page","type":"integer","format":"int32","default":20,"required":false,"example":20,"index$":2},{"in":"query","name":"active","description":"Limit by active status","type":"boolean","required":false,"index$":3}]},"GET /api/v4/deploy_tokens":{"protocol":"http","parameters":[{"in":"query","name":"page","description":"Current page number","type":"integer","format":"int32","default":1,"required":false,"example":1,"index$":0},{"in":"query","name":"per_page","description":"Number of items per page","type":"integer","format":"int32","default":20,"required":false,"example":20,"index$":1},{"in":"query","name":"active","description":"Limit by active status","type":"boolean","required":false,"index$":2}]},"GET /api/v4/groups/{id}/deploy_tokens/{token_id}":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the group owned by the authenticated user","type":"integer","format":"int32","required":true,"index$":0},{"in":"path","name":"token_id","description":"The ID of the deploy token","type":"integer","format":"int32","required":true,"index$":1}]},"GET /api/v4/projects/{id}/deploy_tokens/{token_id}":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project owned by the authenticated user","type":"string","required":true,"index$":0},{"in":"path","name":"token_id","description":"The ID of the deploy token","type":"integer","format":"int32","required":true,"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let api_entities_deploy_token_ref01_data = Object.values(setup.data.existing.api_entities_deploy_token)[0] as any

    // LIST
    const api_entities_deploy_token_ref01_ent = client.ApiEntitiesDeployToken()
    const api_entities_deploy_token_ref01_match: any = {}

    const api_entities_deploy_token_ref01_list = (await api_entities_deploy_token_ref01_ent.list(api_entities_deploy_token_ref01_match)).map((e: any) => e.data())


    // LOAD
    const api_entities_deploy_token_ref01_match_dt0: any = {}
    api_entities_deploy_token_ref01_match_dt0.id = api_entities_deploy_token_ref01_data.id
    const api_entities_deploy_token_ref01_data_dt0 = (await api_entities_deploy_token_ref01_ent.load(api_entities_deploy_token_ref01_match_dt0)).data()
    assert(api_entities_deploy_token_ref01_data_dt0.id === api_entities_deploy_token_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_deploy_token/ApiEntitiesDeployTokenTestData.json')

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
    ['api_entities_deploy_token01','api_entities_deploy_token02','api_entities_deploy_token03','group01','group02','group03','project01','project02','project03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_DEPLOY_TOKEN_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_DEPLOY_TOKEN_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_DEPLOY_TOKEN_ENTID']
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
  
