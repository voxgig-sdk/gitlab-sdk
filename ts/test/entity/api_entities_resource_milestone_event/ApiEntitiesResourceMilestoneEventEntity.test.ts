

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"action","req":false,"type":"`$STRING`","index$":0},{"active":true,"format":"date-time","name":"created_at","req":false,"type":"`$STRING`","index$":1},{"active":true,"format":"int32","name":"id","req":false,"type":"`$INTEGER`","index$":2},{"active":true,"name":"milestone","req":false,"type":"`$OBJECT`","index$":3},{"active":true,"format":"int32","name":"resource_id","req":false,"type":"`$INTEGER`","index$":4},{"active":true,"name":"resource_type","req":false,"type":"`$STRING`","index$":5},{"active":true,"name":"state","req":false,"type":"`$STRING`","index$":6},{"active":true,"name":"user","req":false,"short":"API_Entities_UserBasic model","type":"`$OBJECT`","index$":7}],"id":{"field":"id","name":"id"},"name":"api_entities_resource_milestone_event","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"issue_id","orig":"eventable_id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":1}],"query":[{"active":true,"example":1,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":0},{"active":true,"example":20,"kind":"query","name":"per_page","orig":"per_page","reqd":false,"type":"`$INTEGER`","index$":1}]},"contract":{"id":"GET /api/v4/projects/{id}/issues/{eventable_id}/resource_milestone_events","json":"{\"operationId\":\"getApiV4ProjectsIdIssuesEventableIdResourceMilestoneEvents\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The ID of the eventable\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"eventable_id\",\"required\":true,\"type\":\"integer\"},{\"default\":1,\"description\":\"Current page number\",\"example\":1,\"format\":\"int32\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"type\":\"integer\"},{\"default\":20,\"description\":\"Number of items per page\",\"example\":20,\"format\":\"int32\",\"in\":\"query\",\"name\":\"per_page\",\"required\":false,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"List project Issue milestone events\",\"schema\":{\"items\":{\"description\":\"API_Entities_ResourceMilestoneEvent model\",\"properties\":{\"action\":{\"example\":\"add\",\"type\":\"string\"},\"created_at\":{\"example\":\"2018-08-20T13:38:20.077Z\",\"format\":\"date-time\",\"type\":\"string\"},\"id\":{\"example\":142,\"format\":\"int32\",\"type\":\"integer\"},\"milestone\":{\"properties\":{\"created_at\":{\"type\":\"string\"},\"description\":{\"type\":\"string\"},\"due_date\":{\"type\":\"string\"},\"expired\":{\"type\":\"string\"},\"group_id\":{\"type\":\"string\"},\"id\":{\"type\":\"string\"},\"iid\":{\"type\":\"string\"},\"project_id\":{\"type\":\"string\"},\"start_date\":{\"type\":\"string\"},\"state\":{\"type\":\"string\"},\"title\":{\"type\":\"string\"},\"updated_at\":{\"type\":\"string\"},\"web_url\":{\"type\":\"string\"}},\"type\":\"object\"},\"resource_id\":{\"example\":253,\"format\":\"int32\",\"type\":\"integer\"},\"resource_type\":{\"example\":\"Issue\",\"type\":\"string\"},\"state\":{\"example\":\"active\",\"type\":\"string\"},\"user\":{\"description\":\"API_Entities_UserBasic model\",\"properties\":{\"avatar_path\":{\"example\":\"/user/avatar/28/The-Big-Lebowski-400-400.png\",\"type\":\"string\"},\"avatar_url\":{\"example\":\"https://gravatar.com/avatar/1\",\"type\":\"string\"},\"custom_attributes\":{\"items\":{\"description\":\"API_Entities_CustomAttribute model\",\"properties\":{\"key\":{\"example\":\"foo\",\"type\":\"string\"},\"value\":{\"example\":\"bar\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"locked\":{\"type\":\"boolean\"},\"name\":{\"example\":\"Administrator\",\"type\":\"string\"},\"public_email\":{\"example\":\"john@example.com\",\"type\":\"string\"},\"state\":{\"example\":\"active\",\"type\":\"string\"},\"username\":{\"example\":\"admin\",\"type\":\"string\"},\"web_url\":{\"example\":\"https://gitlab.example.com/root\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},\"type\":\"array\"}}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/projects/{id}/issues/{eventable_id}/resource_milestone_events","rename":{"param":{"eventable_id":"issue_id","id":"project_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"issues"},{"var":"issue_id"},{"lit":"resource_milestone_events"}],"select":{"exist":["issue_id","page","per_page","project_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"merge_request_id","orig":"eventable_id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":1}],"query":[{"active":true,"example":1,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":0},{"active":true,"example":20,"kind":"query","name":"per_page","orig":"per_page","reqd":false,"type":"`$INTEGER`","index$":1}]},"contract":{"id":"GET /api/v4/projects/{id}/merge_requests/{eventable_id}/resource_milestone_events","json":"{\"operationId\":\"getApiV4ProjectsIdMergeRequestsEventableIdResourceMilestoneEvents\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The ID of the eventable\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"eventable_id\",\"required\":true,\"type\":\"integer\"},{\"default\":1,\"description\":\"Current page number\",\"example\":1,\"format\":\"int32\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"type\":\"integer\"},{\"default\":20,\"description\":\"Number of items per page\",\"example\":20,\"format\":\"int32\",\"in\":\"query\",\"name\":\"per_page\",\"required\":false,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"List project Merge request milestone events\",\"schema\":{\"items\":{\"description\":\"API_Entities_ResourceMilestoneEvent model\",\"properties\":{\"action\":{\"example\":\"add\",\"type\":\"string\"},\"created_at\":{\"example\":\"2018-08-20T13:38:20.077Z\",\"format\":\"date-time\",\"type\":\"string\"},\"id\":{\"example\":142,\"format\":\"int32\",\"type\":\"integer\"},\"milestone\":{\"properties\":{\"created_at\":{\"type\":\"string\"},\"description\":{\"type\":\"string\"},\"due_date\":{\"type\":\"string\"},\"expired\":{\"type\":\"string\"},\"group_id\":{\"type\":\"string\"},\"id\":{\"type\":\"string\"},\"iid\":{\"type\":\"string\"},\"project_id\":{\"type\":\"string\"},\"start_date\":{\"type\":\"string\"},\"state\":{\"type\":\"string\"},\"title\":{\"type\":\"string\"},\"updated_at\":{\"type\":\"string\"},\"web_url\":{\"type\":\"string\"}},\"type\":\"object\"},\"resource_id\":{\"example\":253,\"format\":\"int32\",\"type\":\"integer\"},\"resource_type\":{\"example\":\"Issue\",\"type\":\"string\"},\"state\":{\"example\":\"active\",\"type\":\"string\"},\"user\":{\"description\":\"API_Entities_UserBasic model\",\"properties\":{\"avatar_path\":{\"example\":\"/user/avatar/28/The-Big-Lebowski-400-400.png\",\"type\":\"string\"},\"avatar_url\":{\"example\":\"https://gravatar.com/avatar/1\",\"type\":\"string\"},\"custom_attributes\":{\"items\":{\"description\":\"API_Entities_CustomAttribute model\",\"properties\":{\"key\":{\"example\":\"foo\",\"type\":\"string\"},\"value\":{\"example\":\"bar\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"locked\":{\"type\":\"boolean\"},\"name\":{\"example\":\"Administrator\",\"type\":\"string\"},\"public_email\":{\"example\":\"john@example.com\",\"type\":\"string\"},\"state\":{\"example\":\"active\",\"type\":\"string\"},\"username\":{\"example\":\"admin\",\"type\":\"string\"},\"web_url\":{\"example\":\"https://gitlab.example.com/root\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},\"type\":\"array\"}}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/projects/{id}/merge_requests/{eventable_id}/resource_milestone_events","rename":{"param":{"eventable_id":"merge_request_id","id":"project_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"merge_requests"},{"var":"merge_request_id"},{"lit":"resource_milestone_events"}],"select":{"exist":["merge_request_id","page","per_page","project_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"event_id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"issue_id","orig":"eventable_id","reqd":true,"type":"`$STRING`","index$":1},{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":2}]},"contract":{"id":"GET /api/v4/projects/{id}/issues/{eventable_id}/resource_milestone_events/{event_id}","json":"{\"operationId\":\"getApiV4ProjectsIdIssuesEventableIdResourceMilestoneEventsEventId\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The ID of a resource milestone event\",\"in\":\"path\",\"name\":\"event_id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The ID of the eventable\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"eventable_id\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get single Issue milestone event\",\"schema\":{\"description\":\"API_Entities_ResourceMilestoneEvent model\",\"properties\":{\"action\":{\"example\":\"add\",\"type\":\"string\"},\"created_at\":{\"example\":\"2018-08-20T13:38:20.077Z\",\"format\":\"date-time\",\"type\":\"string\"},\"id\":{\"example\":142,\"format\":\"int32\",\"type\":\"integer\"},\"milestone\":{\"properties\":{\"created_at\":{\"type\":\"string\"},\"description\":{\"type\":\"string\"},\"due_date\":{\"type\":\"string\"},\"expired\":{\"type\":\"string\"},\"group_id\":{\"type\":\"string\"},\"id\":{\"type\":\"string\"},\"iid\":{\"type\":\"string\"},\"project_id\":{\"type\":\"string\"},\"start_date\":{\"type\":\"string\"},\"state\":{\"type\":\"string\"},\"title\":{\"type\":\"string\"},\"updated_at\":{\"type\":\"string\"},\"web_url\":{\"type\":\"string\"}},\"type\":\"object\"},\"resource_id\":{\"example\":253,\"format\":\"int32\",\"type\":\"integer\"},\"resource_type\":{\"example\":\"Issue\",\"type\":\"string\"},\"state\":{\"example\":\"active\",\"type\":\"string\"},\"user\":{\"description\":\"API_Entities_UserBasic model\",\"properties\":{\"avatar_path\":{\"example\":\"/user/avatar/28/The-Big-Lebowski-400-400.png\",\"type\":\"string\"},\"avatar_url\":{\"example\":\"https://gravatar.com/avatar/1\",\"type\":\"string\"},\"custom_attributes\":{\"items\":{\"description\":\"API_Entities_CustomAttribute model\",\"properties\":{\"key\":{\"example\":\"foo\",\"type\":\"string\"},\"value\":{\"example\":\"bar\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"locked\":{\"type\":\"boolean\"},\"name\":{\"example\":\"Administrator\",\"type\":\"string\"},\"public_email\":{\"example\":\"john@example.com\",\"type\":\"string\"},\"state\":{\"example\":\"active\",\"type\":\"string\"},\"username\":{\"example\":\"admin\",\"type\":\"string\"},\"web_url\":{\"example\":\"https://gitlab.example.com/root\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"}},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/projects/{id}/issues/{eventable_id}/resource_milestone_events/{event_id}","rename":{"param":{"event_id":"id","eventable_id":"issue_id","id":"project_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"issues"},{"var":"issue_id"},{"lit":"resource_milestone_events"},{"var":"id"}],"select":{"exist":["id","issue_id","project_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"event_id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"merge_request_id","orig":"eventable_id","reqd":true,"type":"`$STRING`","index$":1},{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":2}]},"contract":{"id":"GET /api/v4/projects/{id}/merge_requests/{eventable_id}/resource_milestone_events/{event_id}","json":"{\"operationId\":\"getApiV4ProjectsIdMergeRequestsEventableIdResourceMilestoneEventsEventId\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The ID of a resource milestone event\",\"in\":\"path\",\"name\":\"event_id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The ID of the eventable\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"eventable_id\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get single Merge request milestone event\",\"schema\":{\"description\":\"API_Entities_ResourceMilestoneEvent model\",\"properties\":{\"action\":{\"example\":\"add\",\"type\":\"string\"},\"created_at\":{\"example\":\"2018-08-20T13:38:20.077Z\",\"format\":\"date-time\",\"type\":\"string\"},\"id\":{\"example\":142,\"format\":\"int32\",\"type\":\"integer\"},\"milestone\":{\"properties\":{\"created_at\":{\"type\":\"string\"},\"description\":{\"type\":\"string\"},\"due_date\":{\"type\":\"string\"},\"expired\":{\"type\":\"string\"},\"group_id\":{\"type\":\"string\"},\"id\":{\"type\":\"string\"},\"iid\":{\"type\":\"string\"},\"project_id\":{\"type\":\"string\"},\"start_date\":{\"type\":\"string\"},\"state\":{\"type\":\"string\"},\"title\":{\"type\":\"string\"},\"updated_at\":{\"type\":\"string\"},\"web_url\":{\"type\":\"string\"}},\"type\":\"object\"},\"resource_id\":{\"example\":253,\"format\":\"int32\",\"type\":\"integer\"},\"resource_type\":{\"example\":\"Issue\",\"type\":\"string\"},\"state\":{\"example\":\"active\",\"type\":\"string\"},\"user\":{\"description\":\"API_Entities_UserBasic model\",\"properties\":{\"avatar_path\":{\"example\":\"/user/avatar/28/The-Big-Lebowski-400-400.png\",\"type\":\"string\"},\"avatar_url\":{\"example\":\"https://gravatar.com/avatar/1\",\"type\":\"string\"},\"custom_attributes\":{\"items\":{\"description\":\"API_Entities_CustomAttribute model\",\"properties\":{\"key\":{\"example\":\"foo\",\"type\":\"string\"},\"value\":{\"example\":\"bar\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"locked\":{\"type\":\"boolean\"},\"name\":{\"example\":\"Administrator\",\"type\":\"string\"},\"public_email\":{\"example\":\"john@example.com\",\"type\":\"string\"},\"state\":{\"example\":\"active\",\"type\":\"string\"},\"username\":{\"example\":\"admin\",\"type\":\"string\"},\"web_url\":{\"example\":\"https://gitlab.example.com/root\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"}},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/projects/{id}/merge_requests/{eventable_id}/resource_milestone_events/{event_id}","rename":{"param":{"event_id":"id","eventable_id":"merge_request_id","id":"project_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"merge_requests"},{"var":"merge_request_id"},{"lit":"resource_milestone_events"},{"var":"id"}],"select":{"exist":["id","merge_request_id","project_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"}},"relations":{"ancestors":[["project","issue"],["project","merge_request"]]},"key$":"api_entities_resource_milestone_event","name__orig":"api_entities_resource_milestone_event","Name":"ApiEntitiesResourceMilestoneEvent","name_":"api_entities_resource_milestone_event","name-":"api-entities-resource-milestone-event","NAME":"API_ENTITIES_RESOURCE_MILESTONE_EVENT","index$":154}, {"active":true,"entity":"api_entities_resource_milestone_event","key$":"BasicApiEntitiesResourceMilestoneEventFlow","kind":"basic","name":"BasicApiEntitiesResourceMilestoneEventFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{"merge_request_id":"merge_request01","project_id":"project01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"api_entities_resource_milestone_event_ref01"}}],"index$":0},{"active":true,"data":{},"input":{"ref":"api_entities_resource_milestone_event_ref01","srcdatavar":"api_entities_resource_milestone_event_ref01_data","suffix":"_dt0"},"match":{"id":"api_entities_resource_milestone_event01","merge_request_id":"merge_request01","project_id":"project01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_resource_milestone_event_ref01"}}],"index$":1}]}, 'ApiEntitiesResourceMilestoneEvent')
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
    ['api_entities_resource_milestone_event01','api_entities_resource_milestone_event02','api_entities_resource_milestone_event03','project01','project02','project03','issue01','issue02','issue03','project01','project02','project03','merge_request01','merge_request02','merge_request03'],
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
  
