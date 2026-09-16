

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


describe('ApiEntitiesCiResourceGroupEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesCiResourceGroup()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['list', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_ci_resource_group.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"format":"date-time","name":"created_at","req":false,"type":"`$STRING`","index$":0},{"active":true,"format":"int32","name":"id","req":false,"type":"`$INTEGER`","index$":1},{"active":true,"name":"key","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"process_mode","req":false,"type":"`$STRING`","index$":3},{"active":true,"format":"date-time","name":"updated_at","req":false,"type":"`$STRING`","index$":4}],"id":{"field":"id","name":"id"},"name":"api_entities_ci_resource_group","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"example":1,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":0},{"active":true,"example":20,"kind":"query","name":"per_page","orig":"per_page","reqd":false,"type":"`$INTEGER`","index$":1}]},"contract":{"id":"GET /api/v4/projects/{id}/resource_groups","json":"{\"operationId\":\"getApiV4ProjectsIdResourceGroups\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project owned by the authenticated user\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"default\":1,\"description\":\"Current page number\",\"example\":1,\"format\":\"int32\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"type\":\"integer\"},{\"default\":20,\"description\":\"Number of items per page\",\"example\":20,\"format\":\"int32\",\"in\":\"query\",\"name\":\"per_page\",\"required\":false,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get all resource groups for a project\",\"schema\":{\"items\":{\"description\":\"API_Entities_Ci_ResourceGroup model\",\"properties\":{\"created_at\":{\"example\":\"2021-09-01T08:04:59.650Z\",\"format\":\"date-time\",\"type\":\"string\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"key\":{\"example\":\"production\",\"type\":\"string\"},\"process_mode\":{\"example\":\"unordered\",\"type\":\"string\"},\"updated_at\":{\"example\":\"2021-09-01T08:04:59.650Z\",\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"401\":{\"description\":\"Unauthorized\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/projects/{id}/resource_groups","rename":{"param":{"id":"project_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"resource_groups"}],"select":{"exist":["page","per_page","project_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"key","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"GET /api/v4/projects/{id}/resource_groups/{key}","json":"{\"operationId\":\"getApiV4ProjectsIdResourceGroupsKey\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project owned by the authenticated user\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The key of the resource group\",\"in\":\"path\",\"name\":\"key\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get a specific resource group\",\"schema\":{\"description\":\"API_Entities_Ci_ResourceGroup model\",\"properties\":{\"created_at\":{\"example\":\"2021-09-01T08:04:59.650Z\",\"format\":\"date-time\",\"type\":\"string\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"key\":{\"example\":\"production\",\"type\":\"string\"},\"process_mode\":{\"example\":\"unordered\",\"type\":\"string\"},\"updated_at\":{\"example\":\"2021-09-01T08:04:59.650Z\",\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"}},\"401\":{\"description\":\"Unauthorized\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/projects/{id}/resource_groups/{key}","rename":{"param":{"id":"project_id","key":"id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"resource_groups"},{"var":"id"}],"select":{"exist":["id","project_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"key","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":1}],"query":[{"active":true,"kind":"query","name":"put_api_v4_projects_id_resource_groups_key","orig":"put_api_v4_projects_id_resource_groups_key","reqd":true,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"PUT /api/v4/projects/{id}/resource_groups/{key}","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"putApiV4ProjectsIdResourceGroupsKey\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project owned by the authenticated user\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The key of the resource group\",\"in\":\"path\",\"name\":\"key\",\"required\":true,\"type\":\"string\"},{\"in\":\"body\",\"name\":\"putApiV4ProjectsIdResourceGroupsKey\",\"required\":true,\"schema\":{\"description\":\"Edit an existing resource group\",\"properties\":{\"process_mode\":{\"description\":\"The process mode of the resource group\",\"enum\":[\"unordered\",\"oldest_first\",\"newest_first\",\"newest_ready_first\"],\"type\":\"string\"}},\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Edit an existing resource group\",\"schema\":{\"description\":\"API_Entities_Ci_ResourceGroup model\",\"properties\":{\"created_at\":{\"example\":\"2021-09-01T08:04:59.650Z\",\"format\":\"date-time\",\"type\":\"string\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"key\":{\"example\":\"production\",\"type\":\"string\"},\"process_mode\":{\"example\":\"unordered\",\"type\":\"string\"},\"updated_at\":{\"example\":\"2021-09-01T08:04:59.650Z\",\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"}},\"400\":{\"description\":\"Bad request\"},\"401\":{\"description\":\"Unauthorized\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"PUT","orig":"/api/v4/projects/{id}/resource_groups/{key}","rename":{"param":{"id":"project_id","key":"id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"resource_groups"},{"var":"id"}],"select":{"exist":["id","project_id","put_api_v4_projects_id_resource_groups_key"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["project"]]},"key$":"api_entities_ci_resource_group","name__orig":"api_entities_ci_resource_group","Name":"ApiEntitiesCiResourceGroup","name_":"api_entities_ci_resource_group","name-":"api-entities-ci-resource-group","NAME":"API_ENTITIES_CI_RESOURCE_GROUP","index$":32}, {"active":true,"entity":"api_entities_ci_resource_group","key$":"BasicApiEntitiesCiResourceGroupFlow","kind":"basic","name":"BasicApiEntitiesCiResourceGroupFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{"project_id":"project01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"api_entities_ci_resource_group_ref01"}}],"index$":0},{"active":true,"data":{"project_id":"project01"},"input":{"ref":"api_entities_ci_resource_group_ref01","srcdatavar":"api_entities_ci_resource_group_ref01_data","suffix":"_up0","textfield":"created_at"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_ci_resource_group_ref01"}}],"valid":[],"index$":1},{"active":true,"data":{},"input":{"ref":"api_entities_ci_resource_group_ref01","srcdatavar":"api_entities_ci_resource_group_ref01_data","suffix":"_dt0"},"match":{"id":"api_entities_ci_resource_group01","project_id":"project01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_ci_resource_group_ref01"}}],"index$":2}]}, 'ApiEntitiesCiResourceGroup')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let api_entities_ci_resource_group_ref01_data = Object.values(setup.data.existing.api_entities_ci_resource_group)[0] as any

    // LIST
    const api_entities_ci_resource_group_ref01_ent = client.ApiEntitiesCiResourceGroup()
    const api_entities_ci_resource_group_ref01_match: any = {}
    api_entities_ci_resource_group_ref01_match['project_id'] = setup.idmap['project01']

    const api_entities_ci_resource_group_ref01_list = (await api_entities_ci_resource_group_ref01_ent.list(api_entities_ci_resource_group_ref01_match)).map((e: any) => e.data())


    // UPDATE
    const api_entities_ci_resource_group_ref01_data_up0: any = {}
    api_entities_ci_resource_group_ref01_data_up0.id = api_entities_ci_resource_group_ref01_data.id
    api_entities_ci_resource_group_ref01_data_up0 ['project_id'] = setup.idmap['project_id']

    const api_entities_ci_resource_group_ref01_markdef_up0 = { name: 'created_at', value: 'Mark01-api_entities_ci_resource_group_ref01_' + setup.now }
    ;(api_entities_ci_resource_group_ref01_data_up0 as any)[api_entities_ci_resource_group_ref01_markdef_up0.name] = api_entities_ci_resource_group_ref01_markdef_up0.value

    const api_entities_ci_resource_group_ref01_resdata_up0 = (await api_entities_ci_resource_group_ref01_ent.update(api_entities_ci_resource_group_ref01_data_up0)).data()
    assert(api_entities_ci_resource_group_ref01_resdata_up0.id === api_entities_ci_resource_group_ref01_data_up0.id)

    assert((api_entities_ci_resource_group_ref01_resdata_up0 as any)[api_entities_ci_resource_group_ref01_markdef_up0.name] === api_entities_ci_resource_group_ref01_markdef_up0.value)


    // LOAD
    const api_entities_ci_resource_group_ref01_match_dt0: any = {}
    api_entities_ci_resource_group_ref01_match_dt0.id = api_entities_ci_resource_group_ref01_data.id
    const api_entities_ci_resource_group_ref01_data_dt0 = (await api_entities_ci_resource_group_ref01_ent.load(api_entities_ci_resource_group_ref01_match_dt0)).data()
    assert(api_entities_ci_resource_group_ref01_data_dt0.id === api_entities_ci_resource_group_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_ci_resource_group/ApiEntitiesCiResourceGroupTestData.json')

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
    ['api_entities_ci_resource_group01','api_entities_ci_resource_group02','api_entities_ci_resource_group03','project01','project02','project03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_CI_RESOURCE_GROUP_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_CI_RESOURCE_GROUP_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_CI_RESOURCE_GROUP_ENTID']
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
  
