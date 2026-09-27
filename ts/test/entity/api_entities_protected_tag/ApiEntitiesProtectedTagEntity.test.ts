

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"access_level":{"a":true,"fo":"int32","h":"Access Level","n":"access_level","r":false,"t":"`$INTEGER`","key$":"access_level","index$":0},"access_level_description":{"a":true,"h":"Access Level Description","n":"access_level_description","r":false,"t":"`$STRING`","key$":"access_level_description","index$":1},"create_access_levels":{"a":true,"h":"Create Access Levels","n":"create_access_levels","r":false,"t":"`$OBJECT`","key$":"create_access_levels","index$":2},"deploy_key_id":{"a":true,"fo":"int32","h":"Deploy Key Id","n":"deploy_key_id","r":false,"t":"`$INTEGER`","key$":"deploy_key_id","index$":3},"group_id":{"a":true,"fo":"int32","h":"Group Id","n":"group_id","r":false,"t":"`$INTEGER`","key$":"group_id","index$":4},"id":{"a":true,"fo":"int32","h":"Id","n":"id","r":false,"t":"`$INTEGER`","key$":"id","index$":5},"name":{"a":true,"h":"Name","n":"name","r":false,"t":"`$STRING`","key$":"name","index$":6},"user_id":{"a":true,"fo":"int32","h":"User Id","n":"user_id","r":false,"t":"`$INTEGER`","key$":"user_id","index$":7}},"id":{"field":"id","name":"id"},"name":"api_entities_protected_tag","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/v4/projects/{id}/protected_tags","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"post_api_v4_projects_id_protected_tag","or":"post_api_v4_projects_id_protected_tag","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"POST","o":"/api/v4/projects/{id}/protected_tags","q":{"exist":["post_api_v4_projects_id_protected_tag","project_id"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"protected_tags"}],"t":{"req":"`reqdata`","res":"`body.create_access_levels`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/v4/projects/{id}/protected_tags","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":20,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/protected_tags","q":{"exist":["page","per_page","project_id"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"protected_tags"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v4/projects/{id}/protected_tags/{name}","source":"swagger2","version":2},"g":{"params":[{"a":true,"ex":"release*","k":"param","n":"id","or":"name","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/protected_tags/{name}","q":{"exist":["id","project_id"]},"r":{"param":{"id":"project_id","name":"id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"protected_tags"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.create_access_levels`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.project"]]},"key$":"api_entities_protected_tag","name__orig":"api_entities_protected_tag","Name":"ApiEntitiesProtectedTag","name_":"api_entities_protected_tag","name-":"api-entities-protected-tag","NAME":"API_ENTITIES_PROTECTED_TAG","index$":145}, {"active":true,"entity":"api_entities_protected_tag","key$":"BasicApiEntitiesProtectedTagFlow","kind":"basic","name":"BasicApiEntitiesProtectedTagFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"api_entities_protected_tag_ref01"},"m":{"project_id":"project01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"project_id":"project01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"api_entities_protected_tag_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"api_entities_protected_tag_ref01","srcdatavar":"api_entities_protected_tag_ref01_data","suffix":"_dt0"},"m":{"id":"api_entities_protected_tag01","project_id":"project01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_protected_tag_ref01"}}],"index$":2}]}, 'ApiEntitiesProtectedTag', {"POST /api/v4/projects/{id}/protected_tags":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"index$":0},{"name":"postApiV4ProjectsIdProtectedTags","in":"body","required":true,"schema":{"type":"object","properties":{"name":{"type":"string","description":"The name of the protected tag","example":"release-1-0"},"create_access_level":{"type":"integer","format":"int32","description":"Access levels allowed to create (defaults: `40`, maintainer access level)","enum":[30,40,60,0],"example":30},"allowed_to_create":{"type":"array","description":"An array of users/groups allowed to create","items":{"type":"object","properties":{"access_level":{"type":"integer","format":"int32","enum":[30,40,60,0]},"user_id":{"type":"integer","format":"int32"},"group_id":{"type":"integer","format":"int32"},"deploy_key_id":{"type":"integer","format":"int32"}}}}},"required":["name"],"description":"Protect a single tag or wildcard","x-ref":"#/definitions/postApiV4ProjectsIdProtectedTags"},"index$":1}]},"GET /api/v4/projects/{id}/protected_tags":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"index$":0},{"in":"query","name":"page","description":"Current page number","type":"integer","format":"int32","default":1,"required":false,"example":1,"index$":1},{"in":"query","name":"per_page","description":"Number of items per page","type":"integer","format":"int32","default":20,"required":false,"example":20,"index$":2}]},"GET /api/v4/projects/{id}/protected_tags/{name}":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"index$":0},{"in":"path","name":"name","description":"The name of the tag or wildcard","type":"string","required":true,"example":"release*","index$":1}]}})
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
  
