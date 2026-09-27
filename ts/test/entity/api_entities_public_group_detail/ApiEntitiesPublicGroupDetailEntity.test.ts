

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


describe('ApiEntitiesPublicGroupDetailEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesPublicGroupDetail()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_public_group_detail.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"avatar_url":{"a":true,"h":"Avatar Url","n":"avatar_url","r":false,"t":"`$STRING`","key$":"avatar_url","index$":0},"full_name":{"a":true,"h":"Full Name","n":"full_name","r":false,"t":"`$STRING`","key$":"full_name","index$":1},"full_path":{"a":true,"h":"Full Path","n":"full_path","r":false,"t":"`$STRING`","key$":"full_path","index$":2},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":3},"name":{"a":true,"h":"Name","n":"name","r":false,"t":"`$STRING`","key$":"name","index$":4},"web_url":{"a":true,"h":"Web Url","n":"web_url","r":false,"t":"`$STRING`","key$":"web_url","index$":5}},"id":{"field":"id","name":"id"},"name":"api_entities_public_group_detail","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/v4/projects/{id}/groups","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":20,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"ex":"group","k":"query","n":"search","or":"search","r":false,"t":"`$ANY`","index$":2},{"a":true,"k":"query","n":"shared_min_access_level","or":"shared_min_access_level","r":false,"t":"`$ANY`","index$":3},{"a":true,"k":"query","n":"shared_visible_only","or":"shared_visible_only","r":false,"t":"`$ANY`","index$":4},{"a":true,"k":"query","n":"skip_group","or":"skip_group","r":false,"t":"`$ANY`","index$":5},{"a":true,"k":"query","n":"with_shared","or":"with_shared","r":false,"t":"`$ANY`","index$":6}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/groups","q":{"exist":["page","per_page","project_id","search","shared_min_access_level","shared_visible_only","skip_group","with_shared"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"groups"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /api/v4/projects/{id}/transfer_locations","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":20,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"ex":"search","k":"query","n":"search","or":"search","r":false,"t":"`$ANY`","index$":2}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/transfer_locations","q":{"exist":["page","per_page","project_id","search"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"transfer_locations"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.project"]]},"key$":"api_entities_public_group_detail","name__orig":"api_entities_public_group_detail","Name":"ApiEntitiesPublicGroupDetail","name_":"api_entities_public_group_detail","name-":"api-entities-public-group-detail","NAME":"API_ENTITIES_PUBLIC_GROUP_DETAIL","index$":146}, {"active":true,"entity":"api_entities_public_group_detail","key$":"BasicApiEntitiesPublicGroupDetailFlow","kind":"basic","name":"BasicApiEntitiesPublicGroupDetailFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"project_id":"project01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"api_entities_public_group_detail_ref01"}}],"index$":0}]}, 'ApiEntitiesPublicGroupDetail', {"GET /api/v4/projects/{id}/groups":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"index$":0},{"in":"query","name":"search","description":"Return list of groups matching the search criteria","type":"string","required":false,"example":"group","index$":1},{"in":"query","name":"skip_groups","description":"Array of group ids to exclude from list","type":"array","items":{"type":"integer","format":"int32"},"required":false,"index$":2},{"in":"query","name":"with_shared","description":"Include shared groups","type":"boolean","default":false,"required":false,"index$":3},{"in":"query","name":"shared_visible_only","description":"Limit to shared groups user has access to","type":"boolean","default":false,"required":false,"index$":4},{"in":"query","name":"shared_min_access_level","description":"Limit returned shared groups by minimum access level to the project","type":"integer","format":"int32","enum":[10,15,20,30,40,50],"required":false,"index$":5},{"in":"query","name":"page","description":"Current page number","type":"integer","format":"int32","default":1,"required":false,"example":1,"index$":6},{"in":"query","name":"per_page","description":"Number of items per page","type":"integer","format":"int32","default":20,"required":false,"example":20,"index$":7}]},"GET /api/v4/projects/{id}/transfer_locations":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"index$":0},{"in":"query","name":"search","description":"Return list of namespaces matching the search criteria","type":"string","required":false,"example":"search","index$":1},{"in":"query","name":"page","description":"Current page number","type":"integer","format":"int32","default":1,"required":false,"example":1,"index$":2},{"in":"query","name":"per_page","description":"Number of items per page","type":"integer","format":"int32","default":20,"required":false,"example":20,"index$":3}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let api_entities_public_group_detail_ref01_data = Object.values(setup.data.existing.api_entities_public_group_detail)[0] as any

    // LIST
    const api_entities_public_group_detail_ref01_ent = client.ApiEntitiesPublicGroupDetail()
    const api_entities_public_group_detail_ref01_match: any = {}
    api_entities_public_group_detail_ref01_match['project_id'] = setup.idmap['project01']

    const api_entities_public_group_detail_ref01_list = (await api_entities_public_group_detail_ref01_ent.list(api_entities_public_group_detail_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_public_group_detail/ApiEntitiesPublicGroupDetailTestData.json')

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
    ['api_entities_public_group_detail01','api_entities_public_group_detail02','api_entities_public_group_detail03','project01','project02','project03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_PUBLIC_GROUP_DETAIL_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_PUBLIC_GROUP_DETAIL_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_PUBLIC_GROUP_DETAIL_ENTID']
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
  
