

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":false,"t":"`$STRING`","key$":"created_at","index$":0},"id":{"a":true,"fo":"int32","h":"Id","n":"id","r":false,"t":"`$INTEGER`","key$":"id","index$":1},"key":{"a":true,"h":"Key","n":"key","r":false,"t":"`$STRING`","key$":"key","index$":2},"process_mode":{"a":true,"h":"Process Mode","n":"process_mode","r":false,"t":"`$STRING`","key$":"process_mode","index$":3},"updated_at":{"a":true,"fo":"date-time","h":"Updated At","n":"updated_at","r":false,"t":"`$STRING`","key$":"updated_at","index$":4}},"id":{"field":"id","name":"id"},"name":"api_entities_ci_resource_group","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/v4/projects/{id}/resource_groups","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":20,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/resource_groups","q":{"exist":["page","per_page","project_id"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"resource_groups"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v4/projects/{id}/resource_groups/{key}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"key","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/resource_groups/{key}","q":{"exist":["id","project_id"]},"r":{"param":{"id":"project_id","key":"id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"resource_groups"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /api/v4/projects/{id}/resource_groups/{key}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"key","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"put_api_v4_projects_id_resource_groups_key","or":"put_api_v4_projects_id_resource_groups_key","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"PUT","o":"/api/v4/projects/{id}/resource_groups/{key}","q":{"exist":["id","project_id","put_api_v4_projects_id_resource_groups_key"]},"r":{"param":{"id":"project_id","key":"id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"resource_groups"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.project"]]},"key$":"api_entities_ci_resource_group","name__orig":"api_entities_ci_resource_group","Name":"ApiEntitiesCiResourceGroup","name_":"api_entities_ci_resource_group","name-":"api-entities-ci-resource-group","NAME":"API_ENTITIES_CI_RESOURCE_GROUP","index$":32}, {"active":true,"entity":"api_entities_ci_resource_group","key$":"BasicApiEntitiesCiResourceGroupFlow","kind":"basic","name":"BasicApiEntitiesCiResourceGroupFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"project_id":"project01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"api_entities_ci_resource_group_ref01"}}],"index$":0},{"a":true,"d":{"project_id":"project01"},"i":{"ref":"api_entities_ci_resource_group_ref01","srcdatavar":"api_entities_ci_resource_group_ref01_data","suffix":"_up0","textfield":"created_at"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_ci_resource_group_ref01"}}],"v":[],"index$":1},{"a":true,"d":{},"i":{"ref":"api_entities_ci_resource_group_ref01","srcdatavar":"api_entities_ci_resource_group_ref01_data","suffix":"_dt0"},"m":{"id":"api_entities_ci_resource_group01","project_id":"project01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_ci_resource_group_ref01"}}],"index$":2}]}, 'ApiEntitiesCiResourceGroup', {"GET /api/v4/projects/{id}/resource_groups":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project owned by the authenticated user","type":"string","required":true,"index$":0},{"in":"query","name":"page","description":"Current page number","type":"integer","format":"int32","default":1,"required":false,"example":1,"index$":1},{"in":"query","name":"per_page","description":"Number of items per page","type":"integer","format":"int32","default":20,"required":false,"example":20,"index$":2}]},"GET /api/v4/projects/{id}/resource_groups/{key}":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project owned by the authenticated user","type":"string","required":true,"index$":0},{"in":"path","name":"key","description":"The key of the resource group","type":"string","required":true,"index$":1}]},"PUT /api/v4/projects/{id}/resource_groups/{key}":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project owned by the authenticated user","type":"string","required":true,"index$":0},{"in":"path","name":"key","description":"The key of the resource group","type":"string","required":true,"index$":1},{"name":"putApiV4ProjectsIdResourceGroupsKey","in":"body","required":true,"schema":{"type":"object","properties":{"process_mode":{"type":"string","description":"The process mode of the resource group","enum":["unordered","oldest_first","newest_first","newest_ready_first"]}},"description":"Edit an existing resource group","x-ref":"#/definitions/putApiV4ProjectsIdResourceGroupsKey"},"index$":2}]}})
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
  
