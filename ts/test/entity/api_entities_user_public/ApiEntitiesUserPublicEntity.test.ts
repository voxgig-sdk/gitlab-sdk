

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


describe('ApiEntitiesUserPublicEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesUserPublic()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_user_public.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"avatar_path","req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"avatar_url","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"bio","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"bot","req":false,"type":"`$STRING`","index$":3},{"active":true,"name":"can_create_group","req":false,"type":"`$BOOLEAN`","index$":4},{"active":true,"name":"can_create_project","req":false,"type":"`$BOOLEAN`","index$":5},{"active":true,"format":"int32","name":"color_scheme_id","req":false,"type":"`$INTEGER`","index$":6},{"active":true,"name":"commit_email","req":false,"type":"`$STRING`","index$":7},{"active":true,"format":"date-time","name":"confirmed_at","req":false,"type":"`$STRING`","index$":8},{"active":true,"name":"created_at","req":false,"type":"`$STRING`","index$":9},{"active":true,"format":"date-time","name":"current_sign_in_at","req":false,"type":"`$STRING`","index$":10},{"active":true,"name":"custom_attributes","req":false,"type":"`$ARRAY`","index$":11},{"active":true,"name":"discord","req":false,"type":"`$STRING`","index$":12},{"active":true,"name":"email","req":false,"type":"`$STRING`","index$":13},{"active":true,"name":"external","req":false,"type":"`$STRING`","index$":14},{"active":true,"name":"extra_shared_runners_minutes_limit","req":false,"type":"`$STRING`","index$":15},{"active":true,"name":"followers","req":false,"type":"`$STRING`","index$":16},{"active":true,"name":"following","req":false,"type":"`$STRING`","index$":17},{"active":true,"name":"github","req":false,"type":"`$STRING`","index$":18},{"active":true,"format":"int32","name":"id","req":false,"type":"`$INTEGER`","index$":19},{"active":true,"name":"identities","req":false,"type":"`$OBJECT`","index$":20},{"active":true,"name":"is_followed","req":false,"type":"`$BOOLEAN`","index$":21},{"active":true,"name":"job_title","req":false,"type":"`$STRING`","index$":22},{"active":true,"name":"key","req":false,"type":"`$STRING`","index$":23},{"active":true,"format":"date-time","name":"last_activity_on","req":false,"type":"`$STRING`","index$":24},{"active":true,"format":"date-time","name":"last_sign_in_at","req":false,"type":"`$STRING`","index$":25},{"active":true,"name":"linkedin","req":false,"type":"`$STRING`","index$":26},{"active":true,"name":"local_time","req":false,"type":"`$STRING`","index$":27},{"active":true,"name":"location","req":false,"type":"`$STRING`","index$":28},{"active":true,"name":"locked","req":false,"type":"`$BOOLEAN`","index$":29},{"active":true,"name":"name","req":false,"type":"`$STRING`","index$":30},{"active":true,"name":"organization","req":false,"type":"`$STRING`","index$":31},{"active":true,"name":"preferred_language","req":false,"type":"`$STRING`","index$":32},{"active":true,"name":"private_profile","req":false,"type":"`$BOOLEAN`","index$":33},{"active":true,"format":"int32","name":"projects_limit","req":false,"type":"`$INTEGER`","index$":34},{"active":true,"name":"pronouns","req":false,"type":"`$STRING`","index$":35},{"active":true,"name":"public_email","req":false,"type":"`$STRING`","index$":36},{"active":true,"name":"scim_identities","req":false,"type":"`$OBJECT`","index$":37},{"active":true,"name":"shared_runners_minutes_limit","req":false,"type":"`$STRING`","index$":38},{"active":true,"name":"state","req":false,"type":"`$STRING`","index$":39},{"active":true,"format":"int32","name":"theme_id","req":false,"type":"`$INTEGER`","index$":40},{"active":true,"name":"twitter","req":false,"type":"`$STRING`","index$":41},{"active":true,"name":"two_factor_enabled","req":false,"type":"`$BOOLEAN`","index$":42},{"active":true,"name":"username","req":false,"type":"`$STRING`","index$":43},{"active":true,"name":"value","req":false,"type":"`$STRING`","index$":44},{"active":true,"name":"web_url","req":false,"type":"`$STRING`","index$":45},{"active":true,"name":"website_url","req":false,"type":"`$STRING`","index$":46},{"active":true,"name":"work_information","req":false,"type":"`$STRING`","index$":47}],"id":{"field":"id","name":"id"},"name":"api_entities_user_public","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"group_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"kind":"query","name":"active","orig":"active","reqd":false,"type":"`$BOOLEAN`","index$":0},{"active":true,"kind":"query","name":"blocked","orig":"blocked","reqd":false,"type":"`$BOOLEAN`","index$":1},{"active":true,"kind":"query","name":"created_after","orig":"created_after","reqd":false,"type":"`$ANY`","index$":2},{"active":true,"kind":"query","name":"created_before","orig":"created_before","reqd":false,"type":"`$ANY`","index$":3},{"active":true,"example":1,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":4},{"active":true,"example":20,"kind":"query","name":"per_page","orig":"per_page","reqd":false,"type":"`$INTEGER`","index$":5},{"active":true,"kind":"query","name":"search","orig":"search","reqd":false,"type":"`$ANY`","index$":6},{"active":true,"kind":"query","name":"username","orig":"username","reqd":false,"type":"`$STRING`","index$":7}]},"contract":{"id":"GET /api/v4/groups/{id}/provisioned_users","json":"{\"operationId\":\"getApiV4GroupsIdProvisionedUsers\",\"parameters\":[{\"description\":\"Return a single user with a specific username\",\"in\":\"query\",\"name\":\"username\",\"required\":false,\"type\":\"string\"},{\"description\":\"Search users by name, email or username\",\"in\":\"query\",\"name\":\"search\",\"required\":false,\"type\":\"string\"},{\"default\":false,\"description\":\"Return only active users\",\"in\":\"query\",\"name\":\"active\",\"required\":false,\"type\":\"boolean\"},{\"default\":false,\"description\":\"Return only blocked users\",\"in\":\"query\",\"name\":\"blocked\",\"required\":false,\"type\":\"boolean\"},{\"description\":\"Return users created after the specified time\",\"format\":\"date-time\",\"in\":\"query\",\"name\":\"created_after\",\"required\":false,\"type\":\"string\"},{\"description\":\"Return users created before the specified time\",\"format\":\"date-time\",\"in\":\"query\",\"name\":\"created_before\",\"required\":false,\"type\":\"string\"},{\"default\":1,\"description\":\"Current page number\",\"example\":1,\"format\":\"int32\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"type\":\"integer\"},{\"default\":20,\"description\":\"Number of items per page\",\"example\":20,\"format\":\"int32\",\"in\":\"query\",\"name\":\"per_page\",\"required\":false,\"type\":\"integer\"},{\"format\":\"int32\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get a list of users provisioned by the group\",\"schema\":{\"description\":\"API_Entities_UserPublic model\",\"properties\":{\"avatar_path\":{\"example\":\"/user/avatar/28/The-Big-Lebowski-400-400.png\",\"type\":\"string\"},\"avatar_url\":{\"example\":\"https://gravatar.com/avatar/1\",\"type\":\"string\"},\"bio\":{\"type\":\"string\"},\"bot\":{\"type\":\"string\"},\"can_create_group\":{\"example\":true,\"type\":\"boolean\"},\"can_create_project\":{\"example\":true,\"type\":\"boolean\"},\"color_scheme_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"commit_email\":{\"type\":\"string\"},\"confirmed_at\":{\"example\":\"2015-09-03T07:24:01.670Z\",\"format\":\"date-time\",\"type\":\"string\"},\"created_at\":{\"type\":\"string\"},\"current_sign_in_at\":{\"example\":\"2015-09-03T07:24:01.670Z\",\"format\":\"date-time\",\"type\":\"string\"},\"custom_attributes\":{\"items\":{\"description\":\"API_Entities_CustomAttribute model\",\"properties\":{\"key\":{\"example\":\"foo\",\"type\":\"string\"},\"value\":{\"example\":\"bar\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"discord\":{\"type\":\"string\"},\"email\":{\"example\":\"john@example.com\",\"type\":\"string\"},\"external\":{\"type\":\"string\"},\"extra_shared_runners_minutes_limit\":{\"type\":\"string\"},\"followers\":{\"type\":\"string\"},\"following\":{\"type\":\"string\"},\"github\":{\"type\":\"string\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"identities\":{\"properties\":{\"extern_uid\":{\"type\":\"string\"},\"provider\":{\"type\":\"string\"},\"saml_provider_id\":{\"type\":\"string\"}},\"type\":\"object\"},\"is_followed\":{\"type\":\"string\"},\"job_title\":{\"type\":\"string\"},\"last_activity_on\":{\"example\":\"2015-09-03T07:24:01.670Z\",\"format\":\"date-time\",\"type\":\"string\"},\"last_sign_in_at\":{\"example\":\"2015-09-03T07:24:01.670Z\",\"format\":\"date-time\",\"type\":\"string\"},\"linkedin\":{\"type\":\"string\"},\"local_time\":{\"type\":\"string\"},\"location\":{\"type\":\"string\"},\"locked\":{\"type\":\"boolean\"},\"name\":{\"example\":\"Administrator\",\"type\":\"string\"},\"organization\":{\"type\":\"string\"},\"preferred_language\":{\"example\":\"en\",\"type\":\"string\"},\"private_profile\":{\"example\":\"null\",\"type\":\"boolean\"},\"projects_limit\":{\"example\":10,\"format\":\"int32\",\"type\":\"integer\"},\"pronouns\":{\"type\":\"string\"},\"public_email\":{\"example\":\"john@example.com\",\"type\":\"string\"},\"scim_identities\":{\"properties\":{\"active\":{\"type\":\"string\"},\"extern_uid\":{\"type\":\"string\"},\"group_id\":{\"type\":\"string\"}},\"type\":\"object\"},\"shared_runners_minutes_limit\":{\"type\":\"string\"},\"state\":{\"example\":\"active\",\"type\":\"string\"},\"theme_id\":{\"example\":2,\"format\":\"int32\",\"type\":\"integer\"},\"twitter\":{\"type\":\"string\"},\"two_factor_enabled\":{\"example\":true,\"type\":\"boolean\"},\"username\":{\"example\":\"admin\",\"type\":\"string\"},\"web_url\":{\"example\":\"https://gitlab.example.com/root\",\"type\":\"string\"},\"website_url\":{\"type\":\"string\"},\"work_information\":{\"type\":\"string\"}},\"type\":\"object\"}}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/groups/{id}/provisioned_users","rename":{"param":{"id":"group_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"groups"},{"var":"group_id"},{"lit":"provisioned_users"}],"select":{"exist":["active","blocked","created_after","created_before","group_id","page","per_page","search","username"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"group_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"kind":"query","name":"active","orig":"active","reqd":false,"type":"`$BOOLEAN`","index$":0},{"active":true,"kind":"query","name":"blocked","orig":"blocked","reqd":false,"type":"`$BOOLEAN`","index$":1},{"active":true,"kind":"query","name":"created_after","orig":"created_after","reqd":false,"type":"`$ANY`","index$":2},{"active":true,"kind":"query","name":"created_before","orig":"created_before","reqd":false,"type":"`$ANY`","index$":3},{"active":true,"example":1,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":4},{"active":true,"example":20,"kind":"query","name":"per_page","orig":"per_page","reqd":false,"type":"`$INTEGER`","index$":5},{"active":true,"kind":"query","name":"search","orig":"search","reqd":false,"type":"`$ANY`","index$":6},{"active":true,"kind":"query","name":"username","orig":"username","reqd":false,"type":"`$STRING`","index$":7}]},"contract":{"id":"GET /api/v4/groups/{id}/saml_users","json":"{\"operationId\":\"getApiV4GroupsIdSamlUsers\",\"parameters\":[{\"description\":\"Return single user with a specific username.\",\"in\":\"query\",\"name\":\"username\",\"required\":false,\"type\":\"string\"},{\"description\":\"Search users by name, email, username.\",\"in\":\"query\",\"name\":\"search\",\"required\":false,\"type\":\"string\"},{\"default\":false,\"description\":\"Return only active users.\",\"in\":\"query\",\"name\":\"active\",\"required\":false,\"type\":\"boolean\"},{\"default\":false,\"description\":\"Return only blocked users.\",\"in\":\"query\",\"name\":\"blocked\",\"required\":false,\"type\":\"boolean\"},{\"description\":\"Return users created after the specified time.\",\"format\":\"date-time\",\"in\":\"query\",\"name\":\"created_after\",\"required\":false,\"type\":\"string\"},{\"description\":\"Return users created before the specified time.\",\"format\":\"date-time\",\"in\":\"query\",\"name\":\"created_before\",\"required\":false,\"type\":\"string\"},{\"default\":1,\"description\":\"Current page number\",\"example\":1,\"format\":\"int32\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"type\":\"integer\"},{\"default\":20,\"description\":\"Number of items per page\",\"example\":20,\"format\":\"int32\",\"in\":\"query\",\"name\":\"per_page\",\"required\":false,\"type\":\"integer\"},{\"format\":\"int32\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get a list of SAML users of the group\",\"schema\":{\"items\":{\"description\":\"API_Entities_UserPublic model\",\"properties\":{\"avatar_path\":{\"example\":\"/user/avatar/28/The-Big-Lebowski-400-400.png\",\"type\":\"string\"},\"avatar_url\":{\"example\":\"https://gravatar.com/avatar/1\",\"type\":\"string\"},\"bio\":{\"type\":\"string\"},\"bot\":{\"type\":\"string\"},\"can_create_group\":{\"example\":true,\"type\":\"boolean\"},\"can_create_project\":{\"example\":true,\"type\":\"boolean\"},\"color_scheme_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"commit_email\":{\"type\":\"string\"},\"confirmed_at\":{\"example\":\"2015-09-03T07:24:01.670Z\",\"format\":\"date-time\",\"type\":\"string\"},\"created_at\":{\"type\":\"string\"},\"current_sign_in_at\":{\"example\":\"2015-09-03T07:24:01.670Z\",\"format\":\"date-time\",\"type\":\"string\"},\"custom_attributes\":{\"items\":{\"description\":\"API_Entities_CustomAttribute model\",\"properties\":{\"key\":{\"example\":\"foo\",\"type\":\"string\"},\"value\":{\"example\":\"bar\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"discord\":{\"type\":\"string\"},\"email\":{\"example\":\"john@example.com\",\"type\":\"string\"},\"external\":{\"type\":\"string\"},\"extra_shared_runners_minutes_limit\":{\"type\":\"string\"},\"followers\":{\"type\":\"string\"},\"following\":{\"type\":\"string\"},\"github\":{\"type\":\"string\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"identities\":{\"properties\":{\"extern_uid\":{\"type\":\"string\"},\"provider\":{\"type\":\"string\"},\"saml_provider_id\":{\"type\":\"string\"}},\"type\":\"object\"},\"is_followed\":{\"type\":\"string\"},\"job_title\":{\"type\":\"string\"},\"last_activity_on\":{\"example\":\"2015-09-03T07:24:01.670Z\",\"format\":\"date-time\",\"type\":\"string\"},\"last_sign_in_at\":{\"example\":\"2015-09-03T07:24:01.670Z\",\"format\":\"date-time\",\"type\":\"string\"},\"linkedin\":{\"type\":\"string\"},\"local_time\":{\"type\":\"string\"},\"location\":{\"type\":\"string\"},\"locked\":{\"type\":\"boolean\"},\"name\":{\"example\":\"Administrator\",\"type\":\"string\"},\"organization\":{\"type\":\"string\"},\"preferred_language\":{\"example\":\"en\",\"type\":\"string\"},\"private_profile\":{\"example\":\"null\",\"type\":\"boolean\"},\"projects_limit\":{\"example\":10,\"format\":\"int32\",\"type\":\"integer\"},\"pronouns\":{\"type\":\"string\"},\"public_email\":{\"example\":\"john@example.com\",\"type\":\"string\"},\"scim_identities\":{\"properties\":{\"active\":{\"type\":\"string\"},\"extern_uid\":{\"type\":\"string\"},\"group_id\":{\"type\":\"string\"}},\"type\":\"object\"},\"shared_runners_minutes_limit\":{\"type\":\"string\"},\"state\":{\"example\":\"active\",\"type\":\"string\"},\"theme_id\":{\"example\":2,\"format\":\"int32\",\"type\":\"integer\"},\"twitter\":{\"type\":\"string\"},\"two_factor_enabled\":{\"example\":true,\"type\":\"boolean\"},\"username\":{\"example\":\"admin\",\"type\":\"string\"},\"web_url\":{\"example\":\"https://gitlab.example.com/root\",\"type\":\"string\"},\"website_url\":{\"type\":\"string\"},\"work_information\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/groups/{id}/saml_users","rename":{"param":{"id":"group_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"groups"},{"var":"group_id"},{"lit":"saml_users"}],"select":{"exist":["active","blocked","created_after","created_before","group_id","page","per_page","search","username"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"list"}},"relations":{"ancestors":[["group"]]},"key$":"api_entities_user_public","name__orig":"api_entities_user_public","Name":"ApiEntitiesUserPublic","name_":"api_entities_user_public","name-":"api-entities-user-public","NAME":"API_ENTITIES_USER_PUBLIC","index$":167}, {"active":true,"entity":"api_entities_user_public","key$":"BasicApiEntitiesUserPublicFlow","kind":"basic","name":"BasicApiEntitiesUserPublicFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{"group_id":"group01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"api_entities_user_public_ref01"}}],"index$":0}]}, 'ApiEntitiesUserPublic')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let api_entities_user_public_ref01_data = Object.values(setup.data.existing.api_entities_user_public)[0] as any

    // LIST
    const api_entities_user_public_ref01_ent = client.ApiEntitiesUserPublic()
    const api_entities_user_public_ref01_match: any = {}
    api_entities_user_public_ref01_match['group_id'] = setup.idmap['group01']

    const api_entities_user_public_ref01_list = (await api_entities_user_public_ref01_ent.list(api_entities_user_public_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_user_public/ApiEntitiesUserPublicTestData.json')

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
    ['api_entities_user_public01','api_entities_user_public02','api_entities_user_public03','group01','group02','group03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_USER_PUBLIC_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_USER_PUBLIC_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_USER_PUBLIC_ENTID']
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
  
