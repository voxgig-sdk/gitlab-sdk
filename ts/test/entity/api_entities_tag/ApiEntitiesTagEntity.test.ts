

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


describe('ApiEntitiesTagEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesTag()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['create', 'list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_tag.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"commit":{"a":true,"h":"Commit","n":"commit","r":false,"sh":"API_Entities_Commit model","t":"`$OBJECT`","key$":"commit","index$":0},"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":false,"t":"`$STRING`","key$":"created_at","index$":1},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":2},"message":{"a":true,"h":"Message","n":"message","r":false,"t":"`$STRING`","key$":"message","index$":3},"name":{"a":true,"h":"Name","n":"name","r":false,"t":"`$STRING`","key$":"name","index$":4},"protected":{"a":true,"h":"Protected","n":"protected","r":false,"t":"`$BOOLEAN`","key$":"protected","index$":5},"release":{"a":true,"h":"Release","n":"release","r":false,"t":"`$OBJECT`","key$":"release","index$":6},"target":{"a":true,"h":"Target","n":"target","r":false,"t":"`$STRING`","key$":"target","index$":7}},"id":{"field":"id","name":"id"},"name":"api_entities_tag","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/v4/projects/{id}/repository/tags","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"post_api_v4_projects_id_repository_tag","or":"post_api_v4_projects_id_repository_tag","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"POST","o":"/api/v4/projects/{id}/repository/tags","q":{"exist":["post_api_v4_projects_id_repository_tag","project_id"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"repository"},{"lit":"tags"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/v4/projects/{id}/repository/tags","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"order_by","or":"order_by","r":false,"t":"`$ANY`","index$":0},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"k":"query","n":"page_token","or":"page_token","r":false,"t":"`$ANY`","index$":2},{"a":true,"ex":20,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":3},{"a":true,"k":"query","n":"search","or":"search","r":false,"t":"`$ANY`","index$":4},{"a":true,"k":"query","n":"sort","or":"sort","r":false,"t":"`$ANY`","index$":5}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/repository/tags","q":{"exist":["order_by","page","page_token","per_page","project_id","search","sort"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"repository"},{"lit":"tags"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v4/projects/{id}/repository/tags/{tag_name}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"tag_name","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/repository/tags/{tag_name}","q":{"exist":["id","project_id"]},"r":{"param":{"id":"project_id","tag_name":"id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"repository"},{"lit":"tags"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.project"]]},"key$":"api_entities_tag","name__orig":"api_entities_tag","Name":"ApiEntitiesTag","name_":"api_entities_tag","name-":"api-entities-tag","NAME":"API_ENTITIES_TAG","index$":159}, {"active":true,"entity":"api_entities_tag","key$":"BasicApiEntitiesTagFlow","kind":"basic","name":"BasicApiEntitiesTagFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"api_entities_tag_ref01"},"m":{"project_id":"project01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"project_id":"project01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"api_entities_tag_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"api_entities_tag_ref01","srcdatavar":"api_entities_tag_ref01_data","suffix":"_dt0"},"m":{"id":"api_entities_tag01","project_id":"project01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_tag_ref01"}}],"index$":2}]}, 'ApiEntitiesTag', {"POST /api/v4/projects/{id}/repository/tags":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"index$":0},{"name":"postApiV4ProjectsIdRepositoryTags","in":"body","required":true,"schema":{"type":"object","properties":{"tag_name":{"type":"string","description":"The name of the tag","example":"v.1.0.0"},"ref":{"type":"string","description":"The commit sha or branch name","example":"2695effb5807a22ff3d138d593fd856244e155e7"},"message":{"type":"string","description":"Specifying a message creates an annotated tag","example":"Release 1.0.0"}},"required":["tag_name","ref"],"description":"Create a new repository tag","x-ref":"#/definitions/postApiV4ProjectsIdRepositoryTags"},"index$":1}]},"GET /api/v4/projects/{id}/repository/tags":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"index$":0},{"in":"query","name":"sort","description":"Return tags sorted in updated by `asc` or `desc` order.","type":"string","default":"desc","enum":["asc","desc"],"required":false,"index$":1},{"in":"query","name":"order_by","description":"Return tags ordered by `name`, `updated`, `version` fields.","type":"string","default":"updated","enum":["name","updated","version"],"required":false,"index$":2},{"in":"query","name":"search","description":"Return list of tags matching the search criteria","type":"string","required":false,"index$":3},{"in":"query","name":"page_token","description":"Name of tag to start the pagination from","type":"string","required":false,"index$":4},{"in":"query","name":"page","description":"Current page number","type":"integer","format":"int32","default":1,"required":false,"example":1,"index$":5},{"in":"query","name":"per_page","description":"Number of items per page","type":"integer","format":"int32","default":20,"required":false,"example":20,"index$":6}]},"GET /api/v4/projects/{id}/repository/tags/{tag_name}":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"index$":0},{"in":"path","name":"tag_name","description":"The name of the tag","type":"string","required":true,"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const api_entities_tag_ref01_ent = client.ApiEntitiesTag()
    let api_entities_tag_ref01_data = setup.data.new.api_entities_tag['api_entities_tag_ref01']
    api_entities_tag_ref01_data['project_id'] = setup.idmap['project01']

    api_entities_tag_ref01_data = (await api_entities_tag_ref01_ent.create(api_entities_tag_ref01_data)).data()
    assert(null != api_entities_tag_ref01_data.id)


    // LIST
    const api_entities_tag_ref01_match: any = {}
    api_entities_tag_ref01_match['project_id'] = setup.idmap['project01']

    const api_entities_tag_ref01_list = (await api_entities_tag_ref01_ent.list(api_entities_tag_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(api_entities_tag_ref01_list, { id: api_entities_tag_ref01_data.id })))


    // LOAD
    const api_entities_tag_ref01_match_dt0: any = {}
    api_entities_tag_ref01_match_dt0.id = api_entities_tag_ref01_data.id
    const api_entities_tag_ref01_data_dt0 = (await api_entities_tag_ref01_ent.load(api_entities_tag_ref01_match_dt0)).data()
    assert(api_entities_tag_ref01_data_dt0.id === api_entities_tag_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_tag/ApiEntitiesTagTestData.json')

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
    ['api_entities_tag01','api_entities_tag02','api_entities_tag03','project01','project02','project03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_TAG_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_TAG_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_TAG_ENTID']
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
  
