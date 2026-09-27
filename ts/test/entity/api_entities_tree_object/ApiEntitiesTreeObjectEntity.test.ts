

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


describe('ApiEntitiesTreeObjectEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesTreeObject()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_tree_object.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0},"mode":{"a":true,"h":"Mode","n":"mode","r":false,"t":"`$STRING`","key$":"mode","index$":1},"name":{"a":true,"h":"Name","n":"name","r":false,"t":"`$STRING`","key$":"name","index$":2},"path":{"a":true,"h":"Path","n":"path","r":false,"t":"`$STRING`","key$":"path","index$":3},"type":{"a":true,"h":"Type","n":"type","r":false,"t":"`$STRING`","key$":"type","index$":4}},"id":{"field":"id","name":"id"},"name":"api_entities_tree_object","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v4/projects/{id}/repository/tree","source":"swagger2","version":2},"g":{"params":[{"a":true,"ex":1,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":"a1e8f8d745cc87e3a9248358d9352bb7f9a0aeba","k":"query","n":"page_token","or":"page_token","r":false,"t":"`$ANY`","index$":1},{"a":true,"k":"query","n":"pagination","or":"pagination","r":false,"t":"`$ANY`","index$":2},{"a":true,"ex":"files/html","k":"query","n":"path","or":"path","r":false,"t":"`$STRING`","index$":3},{"a":true,"ex":20,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":4},{"a":true,"k":"query","n":"recursive","or":"recursive","r":false,"t":"`$ANY`","index$":5},{"a":true,"ex":"main","k":"query","n":"ref","or":"ref","r":false,"t":"`$ANY`","index$":6}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/repository/tree","q":{"exist":["page","page_token","pagination","path","per_page","project_id","recursive","ref"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"repository"},{"lit":"tree"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.project"]]},"key$":"api_entities_tree_object","name__orig":"api_entities_tree_object","Name":"ApiEntitiesTreeObject","name_":"api_entities_tree_object","name-":"api-entities-tree-object","NAME":"API_ENTITIES_TREE_OBJECT","index$":163}, {"active":true,"entity":"api_entities_tree_object","key$":"BasicApiEntitiesTreeObjectFlow","kind":"basic","name":"BasicApiEntitiesTreeObjectFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"api_entities_tree_object_ref01","srcdatavar":"api_entities_tree_object_ref01_data","suffix":"_dt0"},"m":{"id":"api_entities_tree_object01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_tree_object_ref01"}}],"index$":0}]}, 'ApiEntitiesTreeObject', {"GET /api/v4/projects/{id}/repository/tree":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"example":1,"index$":0},{"in":"query","name":"ref","description":"The name of a repository branch or tag, if not given the default branch is used","type":"string","required":false,"example":"main","index$":1},{"in":"query","name":"path","description":"The path of the tree","type":"string","required":false,"example":"files/html","index$":2},{"in":"query","name":"recursive","description":"Used to get a recursive tree","type":"boolean","default":false,"required":false,"index$":3},{"in":"query","name":"page","description":"Current page number","type":"integer","format":"int32","default":1,"required":false,"example":1,"index$":4},{"in":"query","name":"per_page","description":"Number of items per page","type":"integer","format":"int32","default":20,"required":false,"example":20,"index$":5},{"in":"query","name":"pagination","description":"Specify the pagination method (\"none\" is only valid if \"recursive\" is true)","type":"string","default":"legacy","enum":["legacy","keyset","none"],"required":false,"index$":6},{"in":"query","name":"page_token","description":"Record from which to start the keyset pagination","type":"string","required":false,"example":"a1e8f8d745cc87e3a9248358d9352bb7f9a0aeba","index$":7}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let api_entities_tree_object_ref01_data = Object.values(setup.data.existing.api_entities_tree_object)[0] as any

    // LOAD
    const api_entities_tree_object_ref01_ent = client.ApiEntitiesTreeObject()
    const api_entities_tree_object_ref01_match_dt0: any = {}
    api_entities_tree_object_ref01_match_dt0.id = api_entities_tree_object_ref01_data.id
    const api_entities_tree_object_ref01_data_dt0 = (await api_entities_tree_object_ref01_ent.load(api_entities_tree_object_ref01_match_dt0)).data()
    assert(api_entities_tree_object_ref01_data_dt0.id === api_entities_tree_object_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_tree_object/ApiEntitiesTreeObjectTestData.json')

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
    ['api_entities_tree_object01','api_entities_tree_object02','api_entities_tree_object03','project01','project02','project03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_TREE_OBJECT_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_TREE_OBJECT_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_TREE_OBJECT_ENTID']
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
  
