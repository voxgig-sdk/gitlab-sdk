

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


describe('ApiEntitiesNugetSearchResultEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesNugetSearchResult()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_nuget_search_result.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"authors":{"a":true,"h":"Authors","n":"authors","r":false,"t":"`$STRING`","key$":"authors","index$":0},"description":{"a":true,"h":"Description","n":"description","r":false,"t":"`$STRING`","key$":"description","index$":1},"iconUrl":{"a":true,"h":"Icon Url","n":"iconUrl","r":false,"t":"`$STRING`","key$":"iconUrl","index$":2},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":3},"licenseUrl":{"a":true,"h":"License Url","n":"licenseUrl","r":false,"t":"`$STRING`","key$":"licenseUrl","index$":4},"projectUrl":{"a":true,"h":"Project Url","n":"projectUrl","r":false,"t":"`$STRING`","key$":"projectUrl","index$":5},"summary":{"a":true,"h":"Summary","n":"summary","r":false,"t":"`$STRING`","key$":"summary","index$":6},"tags":{"a":true,"h":"Tags","n":"tags","r":false,"t":"`$STRING`","key$":"tags","index$":7},"title":{"a":true,"h":"Title","n":"title","r":false,"t":"`$STRING`","key$":"title","index$":8},"totalDownloads":{"a":true,"fo":"int32","h":"Total Downloads","n":"totalDownloads","r":false,"t":"`$INTEGER`","key$":"totalDownloads","index$":9},"type":{"a":true,"h":"Type","n":"type","r":false,"t":"`$STRING`","key$":"type","index$":10},"verified":{"a":true,"h":"Verified","n":"verified","r":false,"t":"`$BOOLEAN`","key$":"verified","index$":11},"version":{"a":true,"h":"Version","n":"version","r":false,"t":"`$STRING`","key$":"version","index$":12},"versions":{"a":true,"h":"Versions","n":"versions","r":false,"t":"`$OBJECT`","key$":"versions","index$":13}},"id":{"field":"id","name":"id"},"name":"api_entities_nuget_search_result","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/v4/groups/{id}/-/packages/nuget/query","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"group_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"prerelease","or":"prerelease","r":false,"t":"`$ANY`","index$":0},{"a":true,"ex":"MyNuGet","k":"query","n":"q","or":"q","r":false,"t":"`$ANY`","index$":1},{"a":true,"ex":1,"k":"query","n":"skip","or":"skip","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"ex":1,"k":"query","n":"take","or":"take","r":false,"t":"`$ANY`","index$":3}]},"k":"http","m":"GET","o":"/api/v4/groups/{id}/-/packages/nuget/query","q":{"exist":["group_id","prerelease","q","skip","take"]},"r":{"param":{"id":"group_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"groups"},{"var":"group_id"},{"lit":"-"},{"lit":"packages"},{"lit":"nuget"},{"lit":"query"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0},{"a":true,"co":{"id":"GET /api/v4/projects/{id}/packages/nuget/query","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"prerelease","or":"prerelease","r":false,"t":"`$ANY`","index$":0},{"a":true,"ex":"MyNuGet","k":"query","n":"q","or":"q","r":false,"t":"`$ANY`","index$":1},{"a":true,"ex":1,"k":"query","n":"skip","or":"skip","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"ex":1,"k":"query","n":"take","or":"take","r":false,"t":"`$ANY`","index$":3}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/packages/nuget/query","q":{"exist":["prerelease","project_id","q","skip","take"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"packages"},{"lit":"nuget"},{"lit":"query"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.group"],["$.main.kit.entity.project"]]},"key$":"api_entities_nuget_search_result","name__orig":"api_entities_nuget_search_result","Name":"ApiEntitiesNugetSearchResult","name_":"api_entities_nuget_search_result","name-":"api-entities-nuget-search-result","NAME":"API_ENTITIES_NUGET_SEARCH_RESULT","index$":107}, {"active":true,"entity":"api_entities_nuget_search_result","key$":"BasicApiEntitiesNugetSearchResultFlow","kind":"basic","name":"BasicApiEntitiesNugetSearchResultFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"project_id":"project01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"api_entities_nuget_search_result_ref01"}}],"index$":0}]}, 'ApiEntitiesNugetSearchResult', {"GET /api/v4/groups/{id}/-/packages/nuget/query":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The group ID or full group path.","type":"integer","format":"int32","required":true,"index$":0},{"in":"query","name":"q","description":"The search term","type":"string","required":false,"example":"MyNuGet","index$":1},{"in":"query","name":"skip","description":"The number of results to skip","type":"integer","format":"int32","default":0,"required":false,"example":1,"index$":2},{"in":"query","name":"take","description":"The number of results to return","type":"integer","format":"int32","default":20,"required":false,"example":1,"index$":3},{"in":"query","name":"prerelease","description":"Include prerelease versions","type":"boolean","default":true,"required":false,"index$":4}]},"GET /api/v4/projects/{id}/packages/nuget/query":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"index$":0},{"in":"query","name":"q","description":"The search term","type":"string","required":false,"example":"MyNuGet","index$":1},{"in":"query","name":"skip","description":"The number of results to skip","type":"integer","format":"int32","default":0,"required":false,"example":1,"index$":2},{"in":"query","name":"take","description":"The number of results to return","type":"integer","format":"int32","default":20,"required":false,"example":1,"index$":3},{"in":"query","name":"prerelease","description":"Include prerelease versions","type":"boolean","default":true,"required":false,"index$":4}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let api_entities_nuget_search_result_ref01_data = Object.values(setup.data.existing.api_entities_nuget_search_result)[0] as any

    // LIST
    const api_entities_nuget_search_result_ref01_ent = client.ApiEntitiesNugetSearchResult()
    const api_entities_nuget_search_result_ref01_match: any = {}
    api_entities_nuget_search_result_ref01_match['project_id'] = setup.idmap['project01']

    const api_entities_nuget_search_result_ref01_list = (await api_entities_nuget_search_result_ref01_ent.list(api_entities_nuget_search_result_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_nuget_search_result/ApiEntitiesNugetSearchResultTestData.json')

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
    ['api_entities_nuget_search_result01','api_entities_nuget_search_result02','api_entities_nuget_search_result03','group01','group02','group03','project01','project02','project03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_NUGET_SEARCH_RESULT_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_NUGET_SEARCH_RESULT_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_NUGET_SEARCH_RESULT_ENTID']
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
  
