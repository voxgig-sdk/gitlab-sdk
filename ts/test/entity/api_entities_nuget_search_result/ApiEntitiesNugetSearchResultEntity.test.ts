

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"authors","req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"description","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"iconUrl","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":3},{"active":true,"name":"licenseUrl","req":false,"type":"`$STRING`","index$":4},{"active":true,"name":"projectUrl","req":false,"type":"`$STRING`","index$":5},{"active":true,"name":"summary","req":false,"type":"`$STRING`","index$":6},{"active":true,"name":"tags","req":false,"type":"`$STRING`","index$":7},{"active":true,"name":"title","req":false,"type":"`$STRING`","index$":8},{"active":true,"format":"int32","name":"totalDownloads","req":false,"type":"`$INTEGER`","index$":9},{"active":true,"name":"type","req":false,"type":"`$STRING`","index$":10},{"active":true,"name":"verified","req":false,"type":"`$BOOLEAN`","index$":11},{"active":true,"name":"version","req":false,"type":"`$STRING`","index$":12},{"active":true,"name":"versions","req":false,"type":"`$OBJECT`","index$":13}],"id":{"field":"id","name":"id"},"name":"api_entities_nuget_search_result","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"group_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"kind":"query","name":"prerelease","orig":"prerelease","reqd":false,"type":"`$ANY`","index$":0},{"active":true,"example":"MyNuGet","kind":"query","name":"q","orig":"q","reqd":false,"type":"`$ANY`","index$":1},{"active":true,"example":1,"kind":"query","name":"skip","orig":"skip","reqd":false,"type":"`$INTEGER`","index$":2},{"active":true,"example":1,"kind":"query","name":"take","orig":"take","reqd":false,"type":"`$ANY`","index$":3}]},"contract":{"id":"GET /api/v4/groups/{id}/-/packages/nuget/query","json":"{\"operationId\":\"getApiV4GroupsIdPackagesNugetQuery\",\"parameters\":[{\"description\":\"The group ID or full group path.\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"integer\"},{\"description\":\"The search term\",\"example\":\"MyNuGet\",\"in\":\"query\",\"name\":\"q\",\"required\":false,\"type\":\"string\"},{\"default\":0,\"description\":\"The number of results to skip\",\"example\":1,\"format\":\"int32\",\"in\":\"query\",\"name\":\"skip\",\"required\":false,\"type\":\"integer\"},{\"default\":20,\"description\":\"The number of results to return\",\"example\":1,\"format\":\"int32\",\"in\":\"query\",\"name\":\"take\",\"required\":false,\"type\":\"integer\"},{\"default\":true,\"description\":\"Include prerelease versions\",\"in\":\"query\",\"name\":\"prerelease\",\"required\":false,\"type\":\"boolean\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"The NuGet Search Service\",\"schema\":{\"description\":\"API_Entities_Nuget_SearchResults model\",\"properties\":{\"data\":{\"items\":{\"properties\":{\"@type\":{\"example\":\"Package\",\"type\":\"string\"},\"authors\":{\"example\":\"Authors\",\"type\":\"string\"},\"description\":{\"example\":\"Description\",\"type\":\"string\"},\"iconUrl\":{\"example\":\"http://sandbox.com/icon\",\"type\":\"string\"},\"id\":{\"example\":\"MyNuGetPkg\",\"type\":\"string\"},\"licenseUrl\":{\"example\":\"http://sandbox.com/license\",\"type\":\"string\"},\"projectUrl\":{\"example\":\"http://sandbox.com/project\",\"type\":\"string\"},\"summary\":{\"example\":\"Description\",\"type\":\"string\"},\"tags\":{\"example\":\"tag#1 tag#2\",\"type\":\"string\"},\"title\":{\"example\":\"MyNuGetPkg\",\"type\":\"string\"},\"totalDownloads\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"verified\":{\"type\":\"boolean\"},\"version\":{\"example\":\"1.3.0.17\",\"type\":\"string\"},\"versions\":{\"properties\":{\"@id\":{\"example\":\"https://gitlab.example.com/api/v4/projects/1/packages/nuget/metadata/MyNuGetPkg/1.3.0.17.json\",\"type\":\"string\"},\"downloads\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"version\":{\"example\":\"1.3.0.17\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},\"type\":\"array\"},\"totalHits\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"}},\"type\":\"object\"}},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not Found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/groups/{id}/-/packages/nuget/query","rename":{"param":{"id":"group_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"groups"},{"var":"group_id"},{"lit":"-"},{"lit":"packages"},{"lit":"nuget"},{"lit":"query"}],"select":{"exist":["group_id","prerelease","q","skip","take"]},"transform":{"req":"`reqdata`","res":"`body.data`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"kind":"query","name":"prerelease","orig":"prerelease","reqd":false,"type":"`$ANY`","index$":0},{"active":true,"example":"MyNuGet","kind":"query","name":"q","orig":"q","reqd":false,"type":"`$ANY`","index$":1},{"active":true,"example":1,"kind":"query","name":"skip","orig":"skip","reqd":false,"type":"`$INTEGER`","index$":2},{"active":true,"example":1,"kind":"query","name":"take","orig":"take","reqd":false,"type":"`$ANY`","index$":3}]},"contract":{"id":"GET /api/v4/projects/{id}/packages/nuget/query","json":"{\"operationId\":\"getApiV4ProjectsIdPackagesNugetQuery\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The search term\",\"example\":\"MyNuGet\",\"in\":\"query\",\"name\":\"q\",\"required\":false,\"type\":\"string\"},{\"default\":0,\"description\":\"The number of results to skip\",\"example\":1,\"format\":\"int32\",\"in\":\"query\",\"name\":\"skip\",\"required\":false,\"type\":\"integer\"},{\"default\":20,\"description\":\"The number of results to return\",\"example\":1,\"format\":\"int32\",\"in\":\"query\",\"name\":\"take\",\"required\":false,\"type\":\"integer\"},{\"default\":true,\"description\":\"Include prerelease versions\",\"in\":\"query\",\"name\":\"prerelease\",\"required\":false,\"type\":\"boolean\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"The NuGet Search Service\",\"schema\":{\"description\":\"API_Entities_Nuget_SearchResults model\",\"properties\":{\"data\":{\"items\":{\"properties\":{\"@type\":{\"example\":\"Package\",\"type\":\"string\"},\"authors\":{\"example\":\"Authors\",\"type\":\"string\"},\"description\":{\"example\":\"Description\",\"type\":\"string\"},\"iconUrl\":{\"example\":\"http://sandbox.com/icon\",\"type\":\"string\"},\"id\":{\"example\":\"MyNuGetPkg\",\"type\":\"string\"},\"licenseUrl\":{\"example\":\"http://sandbox.com/license\",\"type\":\"string\"},\"projectUrl\":{\"example\":\"http://sandbox.com/project\",\"type\":\"string\"},\"summary\":{\"example\":\"Description\",\"type\":\"string\"},\"tags\":{\"example\":\"tag#1 tag#2\",\"type\":\"string\"},\"title\":{\"example\":\"MyNuGetPkg\",\"type\":\"string\"},\"totalDownloads\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"verified\":{\"type\":\"boolean\"},\"version\":{\"example\":\"1.3.0.17\",\"type\":\"string\"},\"versions\":{\"properties\":{\"@id\":{\"example\":\"https://gitlab.example.com/api/v4/projects/1/packages/nuget/metadata/MyNuGetPkg/1.3.0.17.json\",\"type\":\"string\"},\"downloads\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"version\":{\"example\":\"1.3.0.17\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},\"type\":\"array\"},\"totalHits\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"}},\"type\":\"object\"}},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not Found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/projects/{id}/packages/nuget/query","rename":{"param":{"id":"project_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"packages"},{"lit":"nuget"},{"lit":"query"}],"select":{"exist":["prerelease","project_id","q","skip","take"]},"transform":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["group"],["project"]]},"key$":"api_entities_nuget_search_result","name__orig":"api_entities_nuget_search_result","Name":"ApiEntitiesNugetSearchResult","name_":"api_entities_nuget_search_result","name-":"api-entities-nuget-search-result","NAME":"API_ENTITIES_NUGET_SEARCH_RESULT","index$":107}, {"active":true,"entity":"api_entities_nuget_search_result","key$":"BasicApiEntitiesNugetSearchResultFlow","kind":"basic","name":"BasicApiEntitiesNugetSearchResultFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{"project_id":"project01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"api_entities_nuget_search_result_ref01"}}],"index$":0}]}, 'ApiEntitiesNugetSearchResult')
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
  
