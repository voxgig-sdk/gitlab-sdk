

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


describe('ApiEntitiesProtectedTagEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesProtectedTag()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['create', 'list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_protected_tag.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"format":"int32","name":"access_level","req":false,"type":"`$INTEGER`","index$":0},{"active":true,"name":"access_level_description","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"create_access_levels","req":false,"type":"`$OBJECT`","index$":2},{"active":true,"format":"int32","name":"deploy_key_id","req":false,"type":"`$INTEGER`","index$":3},{"active":true,"format":"int32","name":"group_id","req":false,"type":"`$INTEGER`","index$":4},{"active":true,"format":"int32","name":"id","req":false,"type":"`$INTEGER`","index$":5},{"active":true,"name":"name","req":false,"type":"`$STRING`","index$":6},{"active":true,"format":"int32","name":"user_id","req":false,"type":"`$INTEGER`","index$":7}],"id":{"field":"id","name":"id"},"name":"api_entities_protected_tag","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"kind":"query","name":"post_api_v4_projects_id_protected_tag","orig":"post_api_v4_projects_id_protected_tag","reqd":true,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"POST /api/v4/projects/{id}/protected_tags","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4ProjectsIdProtectedTags\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"in\":\"body\",\"name\":\"postApiV4ProjectsIdProtectedTags\",\"required\":true,\"schema\":{\"description\":\"Protect a single tag or wildcard\",\"properties\":{\"allowed_to_create\":{\"description\":\"An array of users/groups allowed to create\",\"items\":{\"properties\":{\"access_level\":{\"enum\":[30,40,60,0],\"format\":\"int32\",\"type\":\"integer\"},\"deploy_key_id\":{\"format\":\"int32\",\"type\":\"integer\"},\"group_id\":{\"format\":\"int32\",\"type\":\"integer\"},\"user_id\":{\"format\":\"int32\",\"type\":\"integer\"}},\"type\":\"object\"},\"type\":\"array\"},\"create_access_level\":{\"description\":\"Access levels allowed to create (defaults: `40`, maintainer access level)\",\"enum\":[30,40,60,0],\"example\":30,\"format\":\"int32\",\"type\":\"integer\"},\"name\":{\"description\":\"The name of the protected tag\",\"example\":\"release-1-0\",\"type\":\"string\"}},\"required\":[\"name\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"201\":{\"description\":\"Protect a single tag or wildcard\",\"schema\":{\"description\":\"API_Entities_ProtectedTag model\",\"properties\":{\"create_access_levels\":{\"properties\":{\"access_level\":{\"example\":40,\"format\":\"int32\",\"type\":\"integer\"},\"access_level_description\":{\"example\":\"Maintainers\",\"type\":\"string\"},\"deploy_key_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"group_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"user_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"}},\"type\":\"object\"},\"name\":{\"example\":\"release-1-0\",\"type\":\"string\"}},\"type\":\"object\"}},\"403\":{\"description\":\"Unauthenticated\"},\"404\":{\"description\":\"Not found\"},\"422\":{\"description\":\"Unprocessable entity\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/api/v4/projects/{id}/protected_tags","rename":{"param":{"id":"project_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"protected_tags"}],"select":{"exist":["post_api_v4_projects_id_protected_tag","project_id"]},"transform":{"req":"`reqdata`","res":"`body.create_access_levels`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"example":1,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":0},{"active":true,"example":20,"kind":"query","name":"per_page","orig":"per_page","reqd":false,"type":"`$INTEGER`","index$":1}]},"contract":{"id":"GET /api/v4/projects/{id}/protected_tags","json":"{\"operationId\":\"getApiV4ProjectsIdProtectedTags\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"default\":1,\"description\":\"Current page number\",\"example\":1,\"format\":\"int32\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"type\":\"integer\"},{\"default\":20,\"description\":\"Number of items per page\",\"example\":20,\"format\":\"int32\",\"in\":\"query\",\"name\":\"per_page\",\"required\":false,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get a project's protected tags\",\"schema\":{\"items\":{\"description\":\"API_Entities_ProtectedTag model\",\"properties\":{\"create_access_levels\":{\"properties\":{\"access_level\":{\"example\":40,\"format\":\"int32\",\"type\":\"integer\"},\"access_level_description\":{\"example\":\"Maintainers\",\"type\":\"string\"},\"deploy_key_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"group_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"user_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"}},\"type\":\"object\"},\"name\":{\"example\":\"release-1-0\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"403\":{\"description\":\"Unauthenticated\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/projects/{id}/protected_tags","rename":{"param":{"id":"project_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"protected_tags"}],"select":{"exist":["page","per_page","project_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"example":"release*","kind":"param","name":"id","orig":"name","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"GET /api/v4/projects/{id}/protected_tags/{name}","json":"{\"operationId\":\"getApiV4ProjectsIdProtectedTagsName\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The name of the tag or wildcard\",\"example\":\"release*\",\"in\":\"path\",\"name\":\"name\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get a single protected tag\",\"schema\":{\"description\":\"API_Entities_ProtectedTag model\",\"properties\":{\"create_access_levels\":{\"properties\":{\"access_level\":{\"example\":40,\"format\":\"int32\",\"type\":\"integer\"},\"access_level_description\":{\"example\":\"Maintainers\",\"type\":\"string\"},\"deploy_key_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"group_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"user_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"}},\"type\":\"object\"},\"name\":{\"example\":\"release-1-0\",\"type\":\"string\"}},\"type\":\"object\"}},\"403\":{\"description\":\"Unauthenticated\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/projects/{id}/protected_tags/{name}","rename":{"param":{"id":"project_id","name":"id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"protected_tags"},{"var":"id"}],"select":{"exist":["id","project_id"]},"transform":{"req":"`reqdata`","res":"`body.create_access_levels`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["project"]]},"key$":"api_entities_protected_tag","name__orig":"api_entities_protected_tag","Name":"ApiEntitiesProtectedTag","name_":"api_entities_protected_tag","name-":"api-entities-protected-tag","NAME":"API_ENTITIES_PROTECTED_TAG","index$":145}, {"active":true,"entity":"api_entities_protected_tag","key$":"BasicApiEntitiesProtectedTagFlow","kind":"basic","name":"BasicApiEntitiesProtectedTagFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"api_entities_protected_tag_ref01"},"match":{"project_id":"project01"},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{},"match":{"project_id":"project01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"api_entities_protected_tag_ref01"}}],"index$":1},{"active":true,"data":{},"input":{"ref":"api_entities_protected_tag_ref01","srcdatavar":"api_entities_protected_tag_ref01_data","suffix":"_dt0"},"match":{"id":"api_entities_protected_tag01","project_id":"project01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_protected_tag_ref01"}}],"index$":2}]}, 'ApiEntitiesProtectedTag')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const api_entities_protected_tag_ref01_ent = client.ApiEntitiesProtectedTag()
    let api_entities_protected_tag_ref01_data = setup.data.new.api_entities_protected_tag['api_entities_protected_tag_ref01']
    api_entities_protected_tag_ref01_data['project_id'] = setup.idmap['project01']

    api_entities_protected_tag_ref01_data = (await api_entities_protected_tag_ref01_ent.create(api_entities_protected_tag_ref01_data)).data()
    assert(null != api_entities_protected_tag_ref01_data.id)


    // LIST
    const api_entities_protected_tag_ref01_match: any = {}
    api_entities_protected_tag_ref01_match['project_id'] = setup.idmap['project01']

    const api_entities_protected_tag_ref01_list = (await api_entities_protected_tag_ref01_ent.list(api_entities_protected_tag_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(api_entities_protected_tag_ref01_list, { id: api_entities_protected_tag_ref01_data.id })))


    // LOAD
    const api_entities_protected_tag_ref01_match_dt0: any = {}
    api_entities_protected_tag_ref01_match_dt0.id = api_entities_protected_tag_ref01_data.id
    const api_entities_protected_tag_ref01_data_dt0 = (await api_entities_protected_tag_ref01_ent.load(api_entities_protected_tag_ref01_match_dt0)).data()
    assert(api_entities_protected_tag_ref01_data_dt0.id === api_entities_protected_tag_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_protected_tag/ApiEntitiesProtectedTagTestData.json')

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
    ['api_entities_protected_tag01','api_entities_protected_tag02','api_entities_protected_tag03','project01','project02','project03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_PROTECTED_TAG_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_PROTECTED_TAG_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_PROTECTED_TAG_ENTID']
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
  
