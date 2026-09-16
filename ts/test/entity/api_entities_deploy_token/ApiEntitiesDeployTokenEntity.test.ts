

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


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"expired","req":false,"type":"`$BOOLEAN`","index$":0},{"active":true,"format":"date-time","name":"expires_at","req":false,"type":"`$STRING`","index$":1},{"active":true,"format":"int32","name":"id","req":false,"type":"`$INTEGER`","index$":2},{"active":true,"name":"name","req":false,"type":"`$STRING`","index$":3},{"active":true,"name":"revoked","req":false,"type":"`$BOOLEAN`","index$":4},{"active":true,"name":"scopes","req":false,"type":"`$ARRAY`","index$":5},{"active":true,"name":"username","req":false,"type":"`$STRING`","index$":6}],"id":{"field":"id","name":"id"},"name":"api_entities_deploy_token","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"group_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"kind":"query","name":"active","orig":"active","reqd":false,"type":"`$BOOLEAN`","index$":0},{"active":true,"example":1,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":1},{"active":true,"example":20,"kind":"query","name":"per_page","orig":"per_page","reqd":false,"type":"`$INTEGER`","index$":2}]},"contract":{"id":"GET /api/v4/groups/{id}/deploy_tokens","json":"{\"operationId\":\"getApiV4GroupsIdDeployTokens\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the group owned by the authenticated user\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"integer\"},{\"default\":1,\"description\":\"Current page number\",\"example\":1,\"format\":\"int32\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"type\":\"integer\"},{\"default\":20,\"description\":\"Number of items per page\",\"example\":20,\"format\":\"int32\",\"in\":\"query\",\"name\":\"per_page\",\"required\":false,\"type\":\"integer\"},{\"description\":\"Limit by active status\",\"in\":\"query\",\"name\":\"active\",\"required\":false,\"type\":\"boolean\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"List group deploy tokens\",\"schema\":{\"items\":{\"description\":\"API_Entities_DeployToken model\",\"properties\":{\"expired\":{\"type\":\"boolean\"},\"expires_at\":{\"example\":\"2020-02-14T00:00:00.000Z\",\"format\":\"date-time\",\"type\":\"string\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"name\":{\"example\":\"MyToken\",\"type\":\"string\"},\"revoked\":{\"type\":\"boolean\"},\"scopes\":{\"example\":[\"read_repository\"],\"type\":\"array\"},\"username\":{\"example\":\"gitlab+deploy-token-1\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/groups/{id}/deploy_tokens","rename":{"param":{"id":"group_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"groups"},{"var":"group_id"},{"lit":"deploy_tokens"}],"select":{"exist":["active","group_id","page","per_page"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"kind":"query","name":"active","orig":"active","reqd":false,"type":"`$BOOLEAN`","index$":0},{"active":true,"example":1,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":1},{"active":true,"example":20,"kind":"query","name":"per_page","orig":"per_page","reqd":false,"type":"`$INTEGER`","index$":2}]},"contract":{"id":"GET /api/v4/projects/{id}/deploy_tokens","json":"{\"operationId\":\"getApiV4ProjectsIdDeployTokens\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project owned by the authenticated user\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"default\":1,\"description\":\"Current page number\",\"example\":1,\"format\":\"int32\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"type\":\"integer\"},{\"default\":20,\"description\":\"Number of items per page\",\"example\":20,\"format\":\"int32\",\"in\":\"query\",\"name\":\"per_page\",\"required\":false,\"type\":\"integer\"},{\"description\":\"Limit by active status\",\"in\":\"query\",\"name\":\"active\",\"required\":false,\"type\":\"boolean\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"List project deploy tokens\",\"schema\":{\"items\":{\"description\":\"API_Entities_DeployToken model\",\"properties\":{\"expired\":{\"type\":\"boolean\"},\"expires_at\":{\"example\":\"2020-02-14T00:00:00.000Z\",\"format\":\"date-time\",\"type\":\"string\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"name\":{\"example\":\"MyToken\",\"type\":\"string\"},\"revoked\":{\"type\":\"boolean\"},\"scopes\":{\"example\":[\"read_repository\"],\"type\":\"array\"},\"username\":{\"example\":\"gitlab+deploy-token-1\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/projects/{id}/deploy_tokens","rename":{"param":{"id":"project_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"deploy_tokens"}],"select":{"exist":["active","page","per_page","project_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1},{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"active","orig":"active","reqd":false,"type":"`$BOOLEAN`","index$":0},{"active":true,"example":1,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":1},{"active":true,"example":20,"kind":"query","name":"per_page","orig":"per_page","reqd":false,"type":"`$INTEGER`","index$":2}]},"contract":{"id":"GET /api/v4/deploy_tokens","json":"{\"operationId\":\"getApiV4DeployTokens\",\"parameters\":[{\"default\":1,\"description\":\"Current page number\",\"example\":1,\"format\":\"int32\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"type\":\"integer\"},{\"default\":20,\"description\":\"Number of items per page\",\"example\":20,\"format\":\"int32\",\"in\":\"query\",\"name\":\"per_page\",\"required\":false,\"type\":\"integer\"},{\"description\":\"Limit by active status\",\"in\":\"query\",\"name\":\"active\",\"required\":false,\"type\":\"boolean\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"List all deploy tokens\",\"schema\":{\"items\":{\"description\":\"API_Entities_DeployToken model\",\"properties\":{\"expired\":{\"type\":\"boolean\"},\"expires_at\":{\"example\":\"2020-02-14T00:00:00.000Z\",\"format\":\"date-time\",\"type\":\"string\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"name\":{\"example\":\"MyToken\",\"type\":\"string\"},\"revoked\":{\"type\":\"boolean\"},\"scopes\":{\"example\":[\"read_repository\"],\"type\":\"array\"},\"username\":{\"example\":\"gitlab+deploy-token-1\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/deploy_tokens","segments":[{"lit":"api"},{"lit":"v4"},{"lit":"deploy_tokens"}],"select":{"exist":["active","page","per_page"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"group_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"id","orig":"token_id","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"GET /api/v4/groups/{id}/deploy_tokens/{token_id}","json":"{\"operationId\":\"getApiV4GroupsIdDeployTokensTokenId\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the group owned by the authenticated user\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"integer\"},{\"description\":\"The ID of the deploy token\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"token_id\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get a group deploy token\",\"schema\":{\"description\":\"API_Entities_DeployToken model\",\"properties\":{\"expired\":{\"type\":\"boolean\"},\"expires_at\":{\"example\":\"2020-02-14T00:00:00.000Z\",\"format\":\"date-time\",\"type\":\"string\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"name\":{\"example\":\"MyToken\",\"type\":\"string\"},\"revoked\":{\"type\":\"boolean\"},\"scopes\":{\"example\":[\"read_repository\"],\"type\":\"array\"},\"username\":{\"example\":\"gitlab+deploy-token-1\",\"type\":\"string\"}},\"type\":\"object\"}},\"401\":{\"description\":\"Unauthorized\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/groups/{id}/deploy_tokens/{token_id}","rename":{"param":{"id":"group_id","token_id":"id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"groups"},{"var":"group_id"},{"lit":"deploy_tokens"},{"var":"id"}],"select":{"exist":["group_id","id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"token_id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"GET /api/v4/projects/{id}/deploy_tokens/{token_id}","json":"{\"operationId\":\"getApiV4ProjectsIdDeployTokensTokenId\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project owned by the authenticated user\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The ID of the deploy token\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"token_id\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get a project deploy token\",\"schema\":{\"description\":\"API_Entities_DeployToken model\",\"properties\":{\"expired\":{\"type\":\"boolean\"},\"expires_at\":{\"example\":\"2020-02-14T00:00:00.000Z\",\"format\":\"date-time\",\"type\":\"string\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"name\":{\"example\":\"MyToken\",\"type\":\"string\"},\"revoked\":{\"type\":\"boolean\"},\"scopes\":{\"example\":[\"read_repository\"],\"type\":\"array\"},\"username\":{\"example\":\"gitlab+deploy-token-1\",\"type\":\"string\"}},\"type\":\"object\"}},\"401\":{\"description\":\"Unauthorized\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/projects/{id}/deploy_tokens/{token_id}","rename":{"param":{"id":"project_id","token_id":"id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"deploy_tokens"},{"var":"id"}],"select":{"exist":["id","project_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"}},"relations":{"ancestors":[["group"],["project"]]},"key$":"api_entities_deploy_token","name__orig":"api_entities_deploy_token","Name":"ApiEntitiesDeployToken","name_":"api_entities_deploy_token","name-":"api-entities-deploy-token","NAME":"API_ENTITIES_DEPLOY_TOKEN","index$":59}, {"active":true,"entity":"api_entities_deploy_token","key$":"BasicApiEntitiesDeployTokenFlow","kind":"basic","name":"BasicApiEntitiesDeployTokenFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"api_entities_deploy_token_ref01"}}],"index$":0},{"active":true,"data":{},"input":{"ref":"api_entities_deploy_token_ref01","srcdatavar":"api_entities_deploy_token_ref01_data","suffix":"_dt0"},"match":{"id":"api_entities_deploy_token01","project_id":"project01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_deploy_token_ref01"}}],"index$":1}]}, 'ApiEntitiesDeployToken')
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
  
