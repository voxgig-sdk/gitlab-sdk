

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


describe('ApiEntitiesPersonalAccessTokenWithLastUsedIpEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesPersonalAccessTokenWithLastUsedIp()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_personal_access_token_with_last_used_ip.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"active","req":false,"type":"`$BOOLEAN`","index$":0},{"active":true,"format":"date-time","name":"created_at","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"description","req":false,"type":"`$STRING`","index$":2},{"active":true,"format":"date-time","name":"expires_at","req":false,"type":"`$STRING`","index$":3},{"active":true,"format":"int32","name":"id","req":false,"type":"`$INTEGER`","index$":4},{"active":true,"format":"date-time","name":"last_used_at","req":false,"type":"`$STRING`","index$":5},{"active":true,"name":"last_used_ips","req":false,"type":"`$ARRAY`","index$":6},{"active":true,"name":"name","req":false,"type":"`$STRING`","index$":7},{"active":true,"name":"revoked","req":false,"type":"`$BOOLEAN`","index$":8},{"active":true,"name":"scopes","req":false,"type":"`$ARRAY`","index$":9},{"active":true,"format":"int32","name":"user_id","req":false,"type":"`$INTEGER`","index$":10}],"id":{"field":"id","name":"id"},"name":"api_entities_personal_access_token_with_last_used_ip","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"example":"2021-01-01","kind":"query","name":"created_after","orig":"created_after","reqd":false,"type":"`$ANY`","index$":0},{"active":true,"example":"2022-01-01","kind":"query","name":"created_before","orig":"created_before","reqd":false,"type":"`$ANY`","index$":1},{"active":true,"example":"2021-01-01","kind":"query","name":"expires_after","orig":"expires_after","reqd":false,"type":"`$ANY`","index$":2},{"active":true,"example":"2022-01-01","kind":"query","name":"expires_before","orig":"expires_before","reqd":false,"type":"`$ANY`","index$":3},{"active":true,"example":"2022-01-01","kind":"query","name":"last_used_after","orig":"last_used_after","reqd":false,"type":"`$ANY`","index$":4},{"active":true,"example":"2021-01-01","kind":"query","name":"last_used_before","orig":"last_used_before","reqd":false,"type":"`$ANY`","index$":5},{"active":true,"example":1,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":6},{"active":true,"example":20,"kind":"query","name":"per_page","orig":"per_page","reqd":false,"type":"`$INTEGER`","index$":7},{"active":true,"kind":"query","name":"revoked","orig":"revoked","reqd":false,"type":"`$ANY`","index$":8},{"active":true,"example":"token","kind":"query","name":"search","orig":"search","reqd":false,"type":"`$ANY`","index$":9},{"active":true,"example":"created_at_desc","kind":"query","name":"sort","orig":"sort","reqd":false,"type":"`$ANY`","index$":10},{"active":true,"example":"active","kind":"query","name":"state","orig":"state","reqd":false,"type":"`$ANY`","index$":11},{"active":true,"example":2,"kind":"query","name":"user_id","orig":"user_id","reqd":false,"type":"`$STRING`","index$":12}]},"contract":{"id":"GET /api/v4/personal_access_tokens","json":"{\"operationId\":\"getApiV4PersonalAccessTokens\",\"parameters\":[{\"description\":\"Filter PATs by User ID\",\"example\":2,\"format\":\"int32\",\"in\":\"query\",\"name\":\"user_id\",\"required\":false,\"type\":\"integer\"},{\"description\":\"Filter tokens where revoked state matches parameter\",\"in\":\"query\",\"name\":\"revoked\",\"required\":false,\"type\":\"boolean\"},{\"description\":\"Filter tokens which are either active or not\",\"enum\":[\"active\",\"inactive\"],\"example\":\"active\",\"in\":\"query\",\"name\":\"state\",\"required\":false,\"type\":\"string\"},{\"description\":\"Filter tokens which were created before given datetime\",\"example\":\"2022-01-01\",\"format\":\"date-time\",\"in\":\"query\",\"name\":\"created_before\",\"required\":false,\"type\":\"string\"},{\"description\":\"Filter tokens which were created after given datetime\",\"example\":\"2021-01-01\",\"format\":\"date-time\",\"in\":\"query\",\"name\":\"created_after\",\"required\":false,\"type\":\"string\"},{\"description\":\"Filter tokens which were used before given datetime\",\"example\":\"2021-01-01\",\"format\":\"date-time\",\"in\":\"query\",\"name\":\"last_used_before\",\"required\":false,\"type\":\"string\"},{\"description\":\"Filter tokens which were used after given datetime\",\"example\":\"2022-01-01\",\"format\":\"date-time\",\"in\":\"query\",\"name\":\"last_used_after\",\"required\":false,\"type\":\"string\"},{\"description\":\"Filter tokens which expire before given datetime\",\"example\":\"2022-01-01\",\"format\":\"date\",\"in\":\"query\",\"name\":\"expires_before\",\"required\":false,\"type\":\"string\"},{\"description\":\"Filter tokens which expire after given datetime\",\"example\":\"2021-01-01\",\"format\":\"date\",\"in\":\"query\",\"name\":\"expires_after\",\"required\":false,\"type\":\"string\"},{\"description\":\"Filters tokens by name\",\"example\":\"token\",\"in\":\"query\",\"name\":\"search\",\"required\":false,\"type\":\"string\"},{\"description\":\"Sort tokens\",\"example\":\"created_at_desc\",\"in\":\"query\",\"name\":\"sort\",\"required\":false,\"type\":\"string\"},{\"default\":1,\"description\":\"Current page number\",\"example\":1,\"format\":\"int32\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"type\":\"integer\"},{\"default\":20,\"description\":\"Number of items per page\",\"example\":20,\"format\":\"int32\",\"in\":\"query\",\"name\":\"per_page\",\"required\":false,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"List personal access tokens\",\"schema\":{\"items\":{\"description\":\"API_Entities_PersonalAccessTokenWithLastUsedIps model\",\"properties\":{\"active\":{\"type\":\"boolean\"},\"created_at\":{\"format\":\"date-time\",\"type\":\"string\"},\"description\":{\"example\":\"Token to manage api\",\"type\":\"string\"},\"expires_at\":{\"example\":\"2020-08-31T15:53:00.073Z\",\"format\":\"date-time\",\"type\":\"string\"},\"id\":{\"example\":2,\"format\":\"int32\",\"type\":\"integer\"},\"last_used_at\":{\"example\":\"2020-08-31T15:53:00.073Z\",\"format\":\"date-time\",\"type\":\"string\"},\"last_used_ips\":{\"example\":[\"127.0.0.1\",\"127.0.0.2\",\"127.0.0.3\"],\"type\":\"array\"},\"name\":{\"example\":\"John Doe\",\"type\":\"string\"},\"revoked\":{\"type\":\"boolean\"},\"scopes\":{\"example\":[\"api\"],\"type\":\"array\"},\"user_id\":{\"example\":3,\"format\":\"int32\",\"type\":\"integer\"}},\"type\":\"object\"},\"type\":\"array\"}},\"401\":{\"description\":\"Unauthorized\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/personal_access_tokens","segments":[{"lit":"api"},{"lit":"v4"},{"lit":"personal_access_tokens"}],"select":{"exist":["created_after","created_before","expires_after","expires_before","last_used_after","last_used_before","page","per_page","revoked","search","sort","state","user_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{},"contract":{"id":"GET /api/v4/personal_access_tokens/self","json":"{\"operationId\":\"getApiV4PersonalAccessTokensSelf\",\"parameters\":[],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get single personal access token\",\"schema\":{\"description\":\"API_Entities_PersonalAccessTokenWithLastUsedIps model\",\"properties\":{\"active\":{\"type\":\"boolean\"},\"created_at\":{\"format\":\"date-time\",\"type\":\"string\"},\"description\":{\"example\":\"Token to manage api\",\"type\":\"string\"},\"expires_at\":{\"example\":\"2020-08-31T15:53:00.073Z\",\"format\":\"date-time\",\"type\":\"string\"},\"id\":{\"example\":2,\"format\":\"int32\",\"type\":\"integer\"},\"last_used_at\":{\"example\":\"2020-08-31T15:53:00.073Z\",\"format\":\"date-time\",\"type\":\"string\"},\"last_used_ips\":{\"example\":[\"127.0.0.1\",\"127.0.0.2\",\"127.0.0.3\"],\"type\":\"array\"},\"name\":{\"example\":\"John Doe\",\"type\":\"string\"},\"revoked\":{\"type\":\"boolean\"},\"scopes\":{\"example\":[\"api\"],\"type\":\"array\"},\"user_id\":{\"example\":3,\"format\":\"int32\",\"type\":\"integer\"}},\"type\":\"object\"}},\"401\":{\"description\":\"Unauthorized\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/personal_access_tokens/self","segments":[{"lit":"api"},{"lit":"v4"},{"lit":"personal_access_tokens"},{"lit":"self"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /api/v4/personal_access_tokens/{id}","json":"{\"operationId\":\"getApiV4PersonalAccessTokensId\",\"parameters\":[{\"format\":\"int32\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get single personal access token\",\"schema\":{\"description\":\"API_Entities_PersonalAccessTokenWithLastUsedIps model\",\"properties\":{\"active\":{\"type\":\"boolean\"},\"created_at\":{\"format\":\"date-time\",\"type\":\"string\"},\"description\":{\"example\":\"Token to manage api\",\"type\":\"string\"},\"expires_at\":{\"example\":\"2020-08-31T15:53:00.073Z\",\"format\":\"date-time\",\"type\":\"string\"},\"id\":{\"example\":2,\"format\":\"int32\",\"type\":\"integer\"},\"last_used_at\":{\"example\":\"2020-08-31T15:53:00.073Z\",\"format\":\"date-time\",\"type\":\"string\"},\"last_used_ips\":{\"example\":[\"127.0.0.1\",\"127.0.0.2\",\"127.0.0.3\"],\"type\":\"array\"},\"name\":{\"example\":\"John Doe\",\"type\":\"string\"},\"revoked\":{\"type\":\"boolean\"},\"scopes\":{\"example\":[\"api\"],\"type\":\"array\"},\"user_id\":{\"example\":3,\"format\":\"int32\",\"type\":\"integer\"}},\"type\":\"object\"}},\"401\":{\"description\":\"Unauthorized\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/personal_access_tokens/{id}","segments":[{"lit":"api"},{"lit":"v4"},{"lit":"personal_access_tokens"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"api_entities_personal_access_token_with_last_used_ip","name__orig":"api_entities_personal_access_token_with_last_used_ip","Name":"ApiEntitiesPersonalAccessTokenWithLastUsedIp","name_":"api_entities_personal_access_token_with_last_used_ip","name-":"api-entities-personal-access-token-with-last-used-ip","NAME":"API_ENTITIES_PERSONAL_ACCESS_TOKEN_WITH_LAST_USED_IP","index$":126}, {"active":true,"entity":"api_entities_personal_access_token_with_last_used_ip","key$":"BasicApiEntitiesPersonalAccessTokenWithLastUsedIpFlow","kind":"basic","name":"BasicApiEntitiesPersonalAccessTokenWithLastUsedIpFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"api_entities_personal_access_token_with_last_used_ip_ref01"}}],"index$":0},{"active":true,"data":{},"input":{"ref":"api_entities_personal_access_token_with_last_used_ip_ref01","srcdatavar":"api_entities_personal_access_token_with_last_used_ip_ref01_data","suffix":"_dt0"},"match":{"id":"api_entities_personal_access_token_with_last_used_ip01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_personal_access_token_with_last_used_ip_ref01"}}],"index$":1}]}, 'ApiEntitiesPersonalAccessTokenWithLastUsedIp')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let api_entities_personal_access_token_with_last_used_ip_ref01_data = Object.values(setup.data.existing.api_entities_personal_access_token_with_last_used_ip)[0] as any

    // LIST
    const api_entities_personal_access_token_with_last_used_ip_ref01_ent = client.ApiEntitiesPersonalAccessTokenWithLastUsedIp()
    const api_entities_personal_access_token_with_last_used_ip_ref01_match: any = {}

    const api_entities_personal_access_token_with_last_used_ip_ref01_list = (await api_entities_personal_access_token_with_last_used_ip_ref01_ent.list(api_entities_personal_access_token_with_last_used_ip_ref01_match)).map((e: any) => e.data())


    // LOAD
    const api_entities_personal_access_token_with_last_used_ip_ref01_match_dt0: any = {}
    api_entities_personal_access_token_with_last_used_ip_ref01_match_dt0.id = api_entities_personal_access_token_with_last_used_ip_ref01_data.id
    const api_entities_personal_access_token_with_last_used_ip_ref01_data_dt0 = (await api_entities_personal_access_token_with_last_used_ip_ref01_ent.load(api_entities_personal_access_token_with_last_used_ip_ref01_match_dt0)).data()
    assert(api_entities_personal_access_token_with_last_used_ip_ref01_data_dt0.id === api_entities_personal_access_token_with_last_used_ip_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_personal_access_token_with_last_used_ip/ApiEntitiesPersonalAccessTokenWithLastUsedIpTestData.json')

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
    ['api_entities_personal_access_token_with_last_used_ip01','api_entities_personal_access_token_with_last_used_ip02','api_entities_personal_access_token_with_last_used_ip03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_PERSONAL_ACCESS_TOKEN_WITH_LAST_USED_IP_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_PERSONAL_ACCESS_TOKEN_WITH_LAST_USED_IP_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_PERSONAL_ACCESS_TOKEN_WITH_LAST_USED_IP_ENTID']
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
  
