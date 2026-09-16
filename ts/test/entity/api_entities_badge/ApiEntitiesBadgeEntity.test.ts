

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


describe('ApiEntitiesBadgeEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesBadge()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_badge.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"image_url","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"kind","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"link_url","req":false,"type":"`$STRING`","index$":3},{"active":true,"name":"name","req":false,"type":"`$STRING`","index$":4},{"active":true,"name":"rendered_image_url","req":false,"type":"`$STRING`","index$":5},{"active":true,"name":"rendered_link_url","req":false,"type":"`$STRING`","index$":6}],"id":{"field":"id","name":"id"},"name":"api_entities_badge","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"group_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"kind":"query","name":"post_api_v4_groups_id_badge","orig":"post_api_v4_groups_id_badge","reqd":true,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"POST /api/v4/groups/{id}/badges","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4GroupsIdBadges\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the group owned by the authenticated user.\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"in\":\"body\",\"name\":\"postApiV4GroupsIdBadges\",\"required\":true,\"schema\":{\"description\":\"Adds a badge to a group.\",\"properties\":{\"image_url\":{\"description\":\"URL of the badge image\",\"type\":\"string\"},\"link_url\":{\"description\":\"URL of the badge link\",\"type\":\"string\"},\"name\":{\"description\":\"Name for the badge\",\"type\":\"string\"}},\"required\":[\"link_url\",\"image_url\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"201\":{\"description\":\"Adds a badge to a group.\",\"schema\":{\"description\":\"API_Entities_Badge model\",\"properties\":{\"id\":{\"type\":\"string\"},\"image_url\":{\"type\":\"string\"},\"kind\":{\"type\":\"string\"},\"link_url\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"rendered_image_url\":{\"type\":\"string\"},\"rendered_link_url\":{\"type\":\"string\"}},\"type\":\"object\"}}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/api/v4/groups/{id}/badges","rename":{"param":{"id":"group_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"groups"},{"var":"group_id"},{"lit":"badges"}],"select":{"exist":["group_id","post_api_v4_groups_id_badge"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"kind":"query","name":"post_api_v4_projects_id_badge","orig":"post_api_v4_projects_id_badge","reqd":true,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"POST /api/v4/projects/{id}/badges","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4ProjectsIdBadges\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project owned by the authenticated user.\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"in\":\"body\",\"name\":\"postApiV4ProjectsIdBadges\",\"required\":true,\"schema\":{\"description\":\"Adds a badge to a project.\",\"properties\":{\"image_url\":{\"description\":\"URL of the badge image\",\"type\":\"string\"},\"link_url\":{\"description\":\"URL of the badge link\",\"type\":\"string\"},\"name\":{\"description\":\"Name for the badge\",\"type\":\"string\"}},\"required\":[\"link_url\",\"image_url\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"201\":{\"description\":\"Adds a badge to a project.\",\"schema\":{\"description\":\"API_Entities_Badge model\",\"properties\":{\"id\":{\"type\":\"string\"},\"image_url\":{\"type\":\"string\"},\"kind\":{\"type\":\"string\"},\"link_url\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"rendered_image_url\":{\"type\":\"string\"},\"rendered_link_url\":{\"type\":\"string\"}},\"type\":\"object\"}}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/api/v4/projects/{id}/badges","rename":{"param":{"id":"project_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"badges"}],"select":{"exist":["post_api_v4_projects_id_badge","project_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"group_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"kind":"query","name":"name","orig":"name","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"example":1,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":1},{"active":true,"example":20,"kind":"query","name":"per_page","orig":"per_page","reqd":false,"type":"`$INTEGER`","index$":2}]},"contract":{"id":"GET /api/v4/groups/{id}/badges","json":"{\"operationId\":\"getApiV4GroupsIdBadges\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the group owned by the authenticated user.\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"default\":1,\"description\":\"Current page number\",\"example\":1,\"format\":\"int32\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"type\":\"integer\"},{\"default\":20,\"description\":\"Number of items per page\",\"example\":20,\"format\":\"int32\",\"in\":\"query\",\"name\":\"per_page\",\"required\":false,\"type\":\"integer\"},{\"description\":\"Name for the badge\",\"in\":\"query\",\"name\":\"name\",\"required\":false,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Gets a list of group badges viewable by the authenticated user.\",\"schema\":{\"items\":{\"description\":\"API_Entities_Badge model\",\"properties\":{\"id\":{\"type\":\"string\"},\"image_url\":{\"type\":\"string\"},\"kind\":{\"type\":\"string\"},\"link_url\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"rendered_image_url\":{\"type\":\"string\"},\"rendered_link_url\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/groups/{id}/badges","rename":{"param":{"id":"group_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"groups"},{"var":"group_id"},{"lit":"badges"}],"select":{"exist":["group_id","name","page","per_page"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"kind":"query","name":"name","orig":"name","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"example":1,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":1},{"active":true,"example":20,"kind":"query","name":"per_page","orig":"per_page","reqd":false,"type":"`$INTEGER`","index$":2}]},"contract":{"id":"GET /api/v4/projects/{id}/badges","json":"{\"operationId\":\"getApiV4ProjectsIdBadges\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project owned by the authenticated user.\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"default\":1,\"description\":\"Current page number\",\"example\":1,\"format\":\"int32\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"type\":\"integer\"},{\"default\":20,\"description\":\"Number of items per page\",\"example\":20,\"format\":\"int32\",\"in\":\"query\",\"name\":\"per_page\",\"required\":false,\"type\":\"integer\"},{\"description\":\"Name for the badge\",\"in\":\"query\",\"name\":\"name\",\"required\":false,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Gets a list of project badges viewable by the authenticated user.\",\"schema\":{\"items\":{\"description\":\"API_Entities_Badge model\",\"properties\":{\"id\":{\"type\":\"string\"},\"image_url\":{\"type\":\"string\"},\"kind\":{\"type\":\"string\"},\"link_url\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"rendered_image_url\":{\"type\":\"string\"},\"rendered_link_url\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/projects/{id}/badges","rename":{"param":{"id":"project_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"badges"}],"select":{"exist":["name","page","per_page","project_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"group_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"id","orig":"badge_id","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"GET /api/v4/groups/{id}/badges/{badge_id}","json":"{\"operationId\":\"getApiV4GroupsIdBadgesBadgeId\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the group owned by the authenticated user.\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The badge ID\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"badge_id\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Gets a badge of a group.\",\"schema\":{\"description\":\"API_Entities_Badge model\",\"properties\":{\"id\":{\"type\":\"string\"},\"image_url\":{\"type\":\"string\"},\"kind\":{\"type\":\"string\"},\"link_url\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"rendered_image_url\":{\"type\":\"string\"},\"rendered_link_url\":{\"type\":\"string\"}},\"type\":\"object\"}}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/groups/{id}/badges/{badge_id}","rename":{"param":{"badge_id":"id","id":"group_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"groups"},{"var":"group_id"},{"lit":"badges"},{"var":"id"}],"select":{"exist":["group_id","id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"badge_id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"GET /api/v4/projects/{id}/badges/{badge_id}","json":"{\"operationId\":\"getApiV4ProjectsIdBadgesBadgeId\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project owned by the authenticated user.\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The badge ID\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"badge_id\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Gets a badge of a project.\",\"schema\":{\"description\":\"API_Entities_Badge model\",\"properties\":{\"id\":{\"type\":\"string\"},\"image_url\":{\"type\":\"string\"},\"kind\":{\"type\":\"string\"},\"link_url\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"rendered_image_url\":{\"type\":\"string\"},\"rendered_link_url\":{\"type\":\"string\"}},\"type\":\"object\"}}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/projects/{id}/badges/{badge_id}","rename":{"param":{"badge_id":"id","id":"project_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"badges"},{"var":"id"}],"select":{"exist":["id","project_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"group_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"id","orig":"badge_id","reqd":true,"type":"`$STRING`","index$":1}],"query":[{"active":true,"kind":"query","name":"put_api_v4_groups_id_badges_badge_id","orig":"put_api_v4_groups_id_badges_badge_id","reqd":true,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"PUT /api/v4/groups/{id}/badges/{badge_id}","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"putApiV4GroupsIdBadgesBadgeId\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the group owned by the authenticated user.\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"format\":\"int32\",\"in\":\"path\",\"name\":\"badge_id\",\"required\":true,\"type\":\"integer\"},{\"in\":\"body\",\"name\":\"putApiV4GroupsIdBadgesBadgeId\",\"required\":true,\"schema\":{\"description\":\"Updates a badge of a group.\",\"properties\":{\"image_url\":{\"description\":\"URL of the badge image\",\"type\":\"string\"},\"link_url\":{\"description\":\"URL of the badge link\",\"type\":\"string\"},\"name\":{\"description\":\"Name for the badge\",\"type\":\"string\"}},\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Updates a badge of a group.\",\"schema\":{\"description\":\"API_Entities_Badge model\",\"properties\":{\"id\":{\"type\":\"string\"},\"image_url\":{\"type\":\"string\"},\"kind\":{\"type\":\"string\"},\"link_url\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"rendered_image_url\":{\"type\":\"string\"},\"rendered_link_url\":{\"type\":\"string\"}},\"type\":\"object\"}}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"PUT","orig":"/api/v4/groups/{id}/badges/{badge_id}","rename":{"param":{"badge_id":"id","id":"group_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"groups"},{"var":"group_id"},{"lit":"badges"},{"var":"id"}],"select":{"exist":["group_id","id","put_api_v4_groups_id_badges_badge_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"badge_id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":1}],"query":[{"active":true,"kind":"query","name":"put_api_v4_projects_id_badges_badge_id","orig":"put_api_v4_projects_id_badges_badge_id","reqd":true,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"PUT /api/v4/projects/{id}/badges/{badge_id}","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"putApiV4ProjectsIdBadgesBadgeId\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project owned by the authenticated user.\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"format\":\"int32\",\"in\":\"path\",\"name\":\"badge_id\",\"required\":true,\"type\":\"integer\"},{\"in\":\"body\",\"name\":\"putApiV4ProjectsIdBadgesBadgeId\",\"required\":true,\"schema\":{\"description\":\"Updates a badge of a project.\",\"properties\":{\"image_url\":{\"description\":\"URL of the badge image\",\"type\":\"string\"},\"link_url\":{\"description\":\"URL of the badge link\",\"type\":\"string\"},\"name\":{\"description\":\"Name for the badge\",\"type\":\"string\"}},\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Updates a badge of a project.\",\"schema\":{\"description\":\"API_Entities_Badge model\",\"properties\":{\"id\":{\"type\":\"string\"},\"image_url\":{\"type\":\"string\"},\"kind\":{\"type\":\"string\"},\"link_url\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"rendered_image_url\":{\"type\":\"string\"},\"rendered_link_url\":{\"type\":\"string\"}},\"type\":\"object\"}}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"PUT","orig":"/api/v4/projects/{id}/badges/{badge_id}","rename":{"param":{"badge_id":"id","id":"project_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"badges"},{"var":"id"}],"select":{"exist":["id","project_id","put_api_v4_projects_id_badges_badge_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"update"}},"relations":{"ancestors":[["group"],["project"]]},"key$":"api_entities_badge","name__orig":"api_entities_badge","Name":"ApiEntitiesBadge","name_":"api_entities_badge","name-":"api-entities-badge","NAME":"API_ENTITIES_BADGE","index$":9}, {"active":true,"entity":"api_entities_badge","key$":"BasicApiEntitiesBadgeFlow","kind":"basic","name":"BasicApiEntitiesBadgeFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"api_entities_badge_ref01"},"match":{"group_id":"group01","project_id":"project01"},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{},"match":{"project_id":"project01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"api_entities_badge_ref01"}}],"index$":1},{"active":true,"data":{"project_id":"project01"},"input":{"ref":"api_entities_badge_ref01","srcdatavar":"api_entities_badge_ref01_data","suffix":"_up0","textfield":"image_url"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_badge_ref01"}}],"valid":[],"index$":2},{"active":true,"data":{},"input":{"ref":"api_entities_badge_ref01","srcdatavar":"api_entities_badge_ref01_data","suffix":"_dt0"},"match":{"id":"api_entities_badge01","project_id":"project01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_badge_ref01"}}],"index$":3}]}, 'ApiEntitiesBadge')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const api_entities_badge_ref01_ent = client.ApiEntitiesBadge()
    let api_entities_badge_ref01_data = setup.data.new.api_entities_badge['api_entities_badge_ref01']
    api_entities_badge_ref01_data['group_id'] = setup.idmap['group01']
    api_entities_badge_ref01_data['project_id'] = setup.idmap['project01']

    api_entities_badge_ref01_data = (await api_entities_badge_ref01_ent.create(api_entities_badge_ref01_data)).data()
    assert(null != api_entities_badge_ref01_data.id)


    // LIST
    const api_entities_badge_ref01_match: any = {}
    api_entities_badge_ref01_match['project_id'] = setup.idmap['project01']

    const api_entities_badge_ref01_list = (await api_entities_badge_ref01_ent.list(api_entities_badge_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(api_entities_badge_ref01_list, { id: api_entities_badge_ref01_data.id })))


    // UPDATE
    const api_entities_badge_ref01_data_up0: any = {}
    api_entities_badge_ref01_data_up0.id = api_entities_badge_ref01_data.id
    api_entities_badge_ref01_data_up0 ['project_id'] = setup.idmap['project_id']

    const api_entities_badge_ref01_markdef_up0 = { name: 'image_url', value: 'Mark01-api_entities_badge_ref01_' + setup.now }
    ;(api_entities_badge_ref01_data_up0 as any)[api_entities_badge_ref01_markdef_up0.name] = api_entities_badge_ref01_markdef_up0.value

    const api_entities_badge_ref01_resdata_up0 = (await api_entities_badge_ref01_ent.update(api_entities_badge_ref01_data_up0)).data()
    assert(api_entities_badge_ref01_resdata_up0.id === api_entities_badge_ref01_data_up0.id)

    assert((api_entities_badge_ref01_resdata_up0 as any)[api_entities_badge_ref01_markdef_up0.name] === api_entities_badge_ref01_markdef_up0.value)


    // LOAD
    const api_entities_badge_ref01_match_dt0: any = {}
    api_entities_badge_ref01_match_dt0.id = api_entities_badge_ref01_data.id
    const api_entities_badge_ref01_data_dt0 = (await api_entities_badge_ref01_ent.load(api_entities_badge_ref01_match_dt0)).data()
    assert(api_entities_badge_ref01_data_dt0.id === api_entities_badge_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_badge/ApiEntitiesBadgeTestData.json')

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
    ['api_entities_badge01','api_entities_badge02','api_entities_badge03','group01','group02','group03','project01','project02','project03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_BADGE_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_BADGE_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_BADGE_ENTID']
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
  
