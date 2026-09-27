

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


describe('EeApiEntitiesAuditEventEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.EeApiEntitiesAuditEvent()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'ee_api_entities_audit_event.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"author_id":{"a":true,"h":"Author Id","n":"author_id","r":false,"t":"`$STRING`","key$":"author_id","index$":0},"created_at":{"a":true,"h":"Created At","n":"created_at","r":false,"t":"`$STRING`","key$":"created_at","index$":1},"details":{"a":true,"h":"Details","n":"details","r":false,"t":"`$STRING`","key$":"details","index$":2},"entity_id":{"a":true,"h":"Entity Id","n":"entity_id","r":false,"t":"`$STRING`","key$":"entity_id","index$":3},"entity_type":{"a":true,"h":"Entity Type","n":"entity_type","r":false,"t":"`$STRING`","key$":"entity_type","index$":4},"event_name":{"a":true,"h":"Event Name","n":"event_name","r":false,"t":"`$STRING`","key$":"event_name","index$":5},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":6}},"id":{"field":"id","name":"id"},"name":"ee_api_entities_audit_event","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/v4/groups/{id}/audit_events","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"group_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"2016-01-19T09:05:50.355Z","k":"query","n":"created_after","or":"created_after","r":false,"t":"`$ANY`","index$":0},{"a":true,"ex":"2016-01-19T09:05:50.355Z","k":"query","n":"created_before","or":"created_before","r":false,"t":"`$ANY`","index$":1},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"ex":20,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":3}]},"k":"http","m":"GET","o":"/api/v4/groups/{id}/audit_events","q":{"exist":["created_after","created_before","group_id","page","per_page"]},"r":{"param":{"id":"group_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"groups"},{"var":"group_id"},{"lit":"audit_events"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /api/v4/projects/{id}/audit_events","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"2016-01-19T09:05:50.355Z","k":"query","n":"created_after","or":"created_after","r":false,"t":"`$ANY`","index$":0},{"a":true,"ex":"2016-01-19T09:05:50.355Z","k":"query","n":"created_before","or":"created_before","r":false,"t":"`$ANY`","index$":1},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"ex":20,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":3}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/audit_events","q":{"exist":["created_after","created_before","page","per_page","project_id"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"audit_events"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v4/groups/{id}/audit_events/{audit_event_id}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"group_id","or":"id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"audit_event_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/api/v4/groups/{id}/audit_events/{audit_event_id}","q":{"exist":["group_id","id"]},"r":{"param":{"audit_event_id":"id","id":"group_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"groups"},{"var":"group_id"},{"lit":"audit_events"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /api/v4/projects/{id}/audit_events/{audit_event_id}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"audit_event_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/audit_events/{audit_event_id}","q":{"exist":["id","project_id"]},"r":{"param":{"audit_event_id":"id","id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"audit_events"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.group"],["$.main.kit.entity.project"]]},"key$":"ee_api_entities_audit_event","name__orig":"ee_api_entities_audit_event","Name":"EeApiEntitiesAuditEvent","name_":"ee_api_entities_audit_event","name-":"ee-api-entities-audit-event","NAME":"EE_API_ENTITIES_AUDIT_EVENT","index$":195}, {"active":true,"entity":"ee_api_entities_audit_event","key$":"BasicEeApiEntitiesAuditEventFlow","kind":"basic","name":"BasicEeApiEntitiesAuditEventFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"project_id":"project01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"ee_api_entities_audit_event_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"ee_api_entities_audit_event_ref01","srcdatavar":"ee_api_entities_audit_event_ref01_data","suffix":"_dt0"},"m":{"id":"ee_api_entities_audit_event01","project_id":"project01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-ee_api_entities_audit_event_ref01"}}],"index$":1}]}, 'EeApiEntitiesAuditEvent', {"GET /api/v4/groups/{id}/audit_events":{"protocol":"http","parameters":[{"in":"query","name":"created_after","description":"Return audit events created after the specified time","type":"string","format":"date-time","required":false,"example":"2016-01-19T09:05:50.355Z","index$":0},{"in":"query","name":"created_before","description":"Return audit events created before the specified time","type":"string","format":"date-time","required":false,"example":"2016-01-19T09:05:50.355Z","index$":1},{"in":"query","name":"page","description":"Current page number","type":"integer","format":"int32","default":1,"required":false,"example":1,"index$":2},{"in":"query","name":"per_page","description":"Number of items per page","type":"integer","format":"int32","default":20,"required":false,"example":20,"index$":3},{"in":"path","name":"id","type":"integer","format":"int32","required":true,"index$":4}]},"GET /api/v4/projects/{id}/audit_events":{"protocol":"http","parameters":[{"in":"query","name":"created_after","description":"Return audit events created after the specified time","type":"string","format":"date-time","required":false,"example":"2016-01-19T09:05:50.355Z","index$":0},{"in":"query","name":"created_before","description":"Return audit events created before the specified time","type":"string","format":"date-time","required":false,"example":"2016-01-19T09:05:50.355Z","index$":1},{"in":"query","name":"page","description":"Current page number","type":"integer","format":"int32","default":1,"required":false,"example":1,"index$":2},{"in":"query","name":"per_page","description":"Number of items per page","type":"integer","format":"int32","default":20,"required":false,"example":20,"index$":3},{"in":"path","name":"id","type":"integer","format":"int32","required":true,"index$":4}]},"GET /api/v4/groups/{id}/audit_events/{audit_event_id}":{"protocol":"http","parameters":[{"in":"path","name":"audit_event_id","description":"The ID of the audit event","type":"integer","format":"int32","required":true,"index$":0},{"in":"path","name":"id","type":"integer","format":"int32","required":true,"index$":1}]},"GET /api/v4/projects/{id}/audit_events/{audit_event_id}":{"protocol":"http","parameters":[{"in":"path","name":"audit_event_id","description":"The ID of the audit event","type":"integer","format":"int32","required":true,"index$":0},{"in":"path","name":"id","type":"integer","format":"int32","required":true,"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let ee_api_entities_audit_event_ref01_data = Object.values(setup.data.existing.ee_api_entities_audit_event)[0] as any

    // LIST
    const ee_api_entities_audit_event_ref01_ent = client.EeApiEntitiesAuditEvent()
    const ee_api_entities_audit_event_ref01_match: any = {}
    ee_api_entities_audit_event_ref01_match['project_id'] = setup.idmap['project01']

    const ee_api_entities_audit_event_ref01_list = (await ee_api_entities_audit_event_ref01_ent.list(ee_api_entities_audit_event_ref01_match)).map((e: any) => e.data())


    // LOAD
    const ee_api_entities_audit_event_ref01_match_dt0: any = {}
    ee_api_entities_audit_event_ref01_match_dt0.id = ee_api_entities_audit_event_ref01_data.id
    const ee_api_entities_audit_event_ref01_data_dt0 = (await ee_api_entities_audit_event_ref01_ent.load(ee_api_entities_audit_event_ref01_match_dt0)).data()
    assert(ee_api_entities_audit_event_ref01_data_dt0.id === ee_api_entities_audit_event_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/ee_api_entities_audit_event/EeApiEntitiesAuditEventTestData.json')

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
    ['ee_api_entities_audit_event01','ee_api_entities_audit_event02','ee_api_entities_audit_event03','group01','group02','group03','project01','project02','project03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_EE_API_ENTITIES_AUDIT_EVENT_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_EE_API_ENTITIES_AUDIT_EVENT_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_EE_API_ENTITIES_AUDIT_EVENT_ENTID']
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
  
