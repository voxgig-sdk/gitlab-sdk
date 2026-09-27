

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


describe('ApiEntitiesResourceMilestoneEventEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesResourceMilestoneEvent()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_resource_milestone_event.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"action":{"a":true,"h":"Action","n":"action","r":false,"t":"`$STRING`","key$":"action","index$":0},"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":false,"t":"`$STRING`","key$":"created_at","index$":1},"id":{"a":true,"fo":"int32","h":"Id","n":"id","r":false,"t":"`$INTEGER`","key$":"id","index$":2},"milestone":{"a":true,"h":"Milestone","n":"milestone","r":false,"t":"`$OBJECT`","key$":"milestone","index$":3},"resource_id":{"a":true,"fo":"int32","h":"Resource Id","n":"resource_id","r":false,"t":"`$INTEGER`","key$":"resource_id","index$":4},"resource_type":{"a":true,"h":"Resource Type","n":"resource_type","r":false,"t":"`$STRING`","key$":"resource_type","index$":5},"state":{"a":true,"h":"State","n":"state","r":false,"t":"`$STRING`","key$":"state","index$":6},"user":{"a":true,"h":"User","n":"user","r":false,"sh":"API_Entities_UserBasic model","t":"`$OBJECT`","key$":"user","index$":7}},"id":{"field":"id","name":"id"},"name":"api_entities_resource_milestone_event","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/v4/projects/{id}/issues/{eventable_id}/resource_milestone_events","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"issue_id","or":"eventable_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":20,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/issues/{eventable_id}/resource_milestone_events","q":{"exist":["issue_id","page","per_page","project_id"]},"r":{"param":{"eventable_id":"issue_id","id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"issues"},{"var":"issue_id"},{"lit":"resource_milestone_events"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /api/v4/projects/{id}/merge_requests/{eventable_id}/resource_milestone_events","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"merge_request_id","or":"eventable_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":20,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/merge_requests/{eventable_id}/resource_milestone_events","q":{"exist":["merge_request_id","page","per_page","project_id"]},"r":{"param":{"eventable_id":"merge_request_id","id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"merge_requests"},{"var":"merge_request_id"},{"lit":"resource_milestone_events"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v4/projects/{id}/issues/{eventable_id}/resource_milestone_events/{event_id}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"event_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"issue_id","or":"eventable_id","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/issues/{eventable_id}/resource_milestone_events/{event_id}","q":{"exist":["id","issue_id","project_id"]},"r":{"param":{"event_id":"id","eventable_id":"issue_id","id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"issues"},{"var":"issue_id"},{"lit":"resource_milestone_events"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /api/v4/projects/{id}/merge_requests/{eventable_id}/resource_milestone_events/{event_id}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"event_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"merge_request_id","or":"eventable_id","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/merge_requests/{eventable_id}/resource_milestone_events/{event_id}","q":{"exist":["id","merge_request_id","project_id"]},"r":{"param":{"event_id":"id","eventable_id":"merge_request_id","id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"merge_requests"},{"var":"merge_request_id"},{"lit":"resource_milestone_events"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.project"],["$.main.kit.entity.project","$.main.kit.entity.merge_request"]]},"key$":"api_entities_resource_milestone_event","name__orig":"api_entities_resource_milestone_event","Name":"ApiEntitiesResourceMilestoneEvent","name_":"api_entities_resource_milestone_event","name-":"api-entities-resource-milestone-event","NAME":"API_ENTITIES_RESOURCE_MILESTONE_EVENT","index$":154}, {"active":true,"entity":"api_entities_resource_milestone_event","key$":"BasicApiEntitiesResourceMilestoneEventFlow","kind":"basic","name":"BasicApiEntitiesResourceMilestoneEventFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"merge_request_id":"merge_request01","project_id":"project01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"api_entities_resource_milestone_event_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"api_entities_resource_milestone_event_ref01","srcdatavar":"api_entities_resource_milestone_event_ref01_data","suffix":"_dt0"},"m":{"id":"api_entities_resource_milestone_event01","merge_request_id":"merge_request01","project_id":"project01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_resource_milestone_event_ref01"}}],"index$":1}]}, 'ApiEntitiesResourceMilestoneEvent', {"GET /api/v4/projects/{id}/issues/{eventable_id}/resource_milestone_events":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"index$":0},{"in":"path","name":"eventable_id","description":"The ID of the eventable","type":"integer","format":"int32","required":true,"index$":1},{"in":"query","name":"page","description":"Current page number","type":"integer","format":"int32","default":1,"required":false,"example":1,"index$":2},{"in":"query","name":"per_page","description":"Number of items per page","type":"integer","format":"int32","default":20,"required":false,"example":20,"index$":3}]},"GET /api/v4/projects/{id}/merge_requests/{eventable_id}/resource_milestone_events":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"index$":0},{"in":"path","name":"eventable_id","description":"The ID of the eventable","type":"integer","format":"int32","required":true,"index$":1},{"in":"query","name":"page","description":"Current page number","type":"integer","format":"int32","default":1,"required":false,"example":1,"index$":2},{"in":"query","name":"per_page","description":"Number of items per page","type":"integer","format":"int32","default":20,"required":false,"example":20,"index$":3}]},"GET /api/v4/projects/{id}/issues/{eventable_id}/resource_milestone_events/{event_id}":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"index$":0},{"in":"path","name":"event_id","description":"The ID of a resource milestone event","type":"string","required":true,"index$":1},{"in":"path","name":"eventable_id","description":"The ID of the eventable","type":"integer","format":"int32","required":true,"index$":2}]},"GET /api/v4/projects/{id}/merge_requests/{eventable_id}/resource_milestone_events/{event_id}":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"index$":0},{"in":"path","name":"event_id","description":"The ID of a resource milestone event","type":"string","required":true,"index$":1},{"in":"path","name":"eventable_id","description":"The ID of the eventable","type":"integer","format":"int32","required":true,"index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let api_entities_resource_milestone_event_ref01_data = Object.values(setup.data.existing.api_entities_resource_milestone_event)[0] as any

    // LIST
    const api_entities_resource_milestone_event_ref01_ent = client.ApiEntitiesResourceMilestoneEvent()
    const api_entities_resource_milestone_event_ref01_match: any = {}
    api_entities_resource_milestone_event_ref01_match['merge_request_id'] = setup.idmap['merge_request01']
    api_entities_resource_milestone_event_ref01_match['project_id'] = setup.idmap['project01']

    const api_entities_resource_milestone_event_ref01_list = (await api_entities_resource_milestone_event_ref01_ent.list(api_entities_resource_milestone_event_ref01_match)).map((e: any) => e.data())


    // LOAD
    const api_entities_resource_milestone_event_ref01_match_dt0: any = {}
    api_entities_resource_milestone_event_ref01_match_dt0.id = api_entities_resource_milestone_event_ref01_data.id
    const api_entities_resource_milestone_event_ref01_data_dt0 = (await api_entities_resource_milestone_event_ref01_ent.load(api_entities_resource_milestone_event_ref01_match_dt0)).data()
    assert(api_entities_resource_milestone_event_ref01_data_dt0.id === api_entities_resource_milestone_event_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_resource_milestone_event/ApiEntitiesResourceMilestoneEventTestData.json')

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
    ['api_entities_resource_milestone_event01','api_entities_resource_milestone_event02','api_entities_resource_milestone_event03','project01','project02','project03','merge_request01','merge_request02','merge_request03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_RESOURCE_MILESTONE_EVENT_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_RESOURCE_MILESTONE_EVENT_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_RESOURCE_MILESTONE_EVENT_ENTID']
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
  
