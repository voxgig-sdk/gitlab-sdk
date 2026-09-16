

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


describe('ApiEntitiesNugetServiceIndexEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesNugetServiceIndex()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_nuget_service_index.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"resources","req":false,"type":"`$ARRAY`","index$":0},{"active":true,"name":"version","req":false,"type":"`$STRING`","index$":1}],"name":"api_entities_nuget_service_index","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"group_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /api/v4/groups/{id}/-/packages/nuget/index","json":"{\"operationId\":\"getApiV4GroupsIdPackagesNugetIndex\",\"parameters\":[{\"description\":\"The group ID or full group path.\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"The NuGet V3 Feed Service Index\",\"schema\":{\"description\":\"API_Entities_Nuget_ServiceIndex model\",\"properties\":{\"resources\":{\"example\":\"{ \\\"@id\\\": \\\"https://gitlab.com/api/v4/projects/1/packages/nuget/query\\\", \\\"@type\\\": \\\"SearchQueryService\\\", \\\"comment\\\": \\\"Filter and search for packages by keyword.\\\"}\",\"items\":{\"type\":\"object\"},\"type\":\"array\"},\"version\":{\"example\":\"1.3.0.17\",\"type\":\"string\"}},\"type\":\"object\"}},\"404\":{\"description\":\"Not Found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/groups/{id}/-/packages/nuget/index","rename":{"param":{"id":"group_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"groups"},{"var":"group_id"},{"lit":"-"},{"lit":"packages"},{"lit":"nuget"},{"lit":"index"}],"select":{"exist":["group_id"]},"transform":{"req":"`reqdata`","res":"`body.resources`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /api/v4/projects/{id}/packages/nuget/index","json":"{\"operationId\":\"getApiV4ProjectsIdPackagesNugetIndex\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"The NuGet V3 Feed Service Index\",\"schema\":{\"description\":\"API_Entities_Nuget_ServiceIndex model\",\"properties\":{\"resources\":{\"example\":\"{ \\\"@id\\\": \\\"https://gitlab.com/api/v4/projects/1/packages/nuget/query\\\", \\\"@type\\\": \\\"SearchQueryService\\\", \\\"comment\\\": \\\"Filter and search for packages by keyword.\\\"}\",\"items\":{\"type\":\"object\"},\"type\":\"array\"},\"version\":{\"example\":\"1.3.0.17\",\"type\":\"string\"}},\"type\":\"object\"}},\"404\":{\"description\":\"Not Found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/projects/{id}/packages/nuget/index","rename":{"param":{"id":"project_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"packages"},{"lit":"nuget"},{"lit":"index"}],"select":{"exist":["project_id"]},"transform":{"req":"`reqdata`","res":"`body.resources`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["group"],["project"]]},"key$":"api_entities_nuget_service_index","name__orig":"api_entities_nuget_service_index","Name":"ApiEntitiesNugetServiceIndex","name_":"api_entities_nuget_service_index","name-":"api-entities-nuget-service-index","NAME":"API_ENTITIES_NUGET_SERVICE_INDEX","index$":108}, {"active":true,"entity":"api_entities_nuget_service_index","key$":"BasicApiEntitiesNugetServiceIndexFlow","kind":"basic","name":"BasicApiEntitiesNugetServiceIndexFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{"project_id":"project01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"api_entities_nuget_service_index_ref01"}}],"index$":0}]}, 'ApiEntitiesNugetServiceIndex')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let api_entities_nuget_service_index_ref01_data = Object.values(setup.data.existing.api_entities_nuget_service_index)[0] as any

    // LIST
    const api_entities_nuget_service_index_ref01_ent = client.ApiEntitiesNugetServiceIndex()
    const api_entities_nuget_service_index_ref01_match: any = {}
    api_entities_nuget_service_index_ref01_match['project_id'] = setup.idmap['project01']

    const api_entities_nuget_service_index_ref01_list = (await api_entities_nuget_service_index_ref01_ent.list(api_entities_nuget_service_index_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_nuget_service_index/ApiEntitiesNugetServiceIndexTestData.json')

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
    ['api_entities_nuget_service_index01','api_entities_nuget_service_index02','api_entities_nuget_service_index03','group01','group02','group03','project01','project02','project03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_NUGET_SERVICE_INDEX_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_NUGET_SERVICE_INDEX_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_NUGET_SERVICE_INDEX_ENTID']
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
  
