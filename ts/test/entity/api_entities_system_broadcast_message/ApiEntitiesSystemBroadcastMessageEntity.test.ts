

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


describe('ApiEntitiesSystemBroadcastMessageEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesSystemBroadcastMessage()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['create', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_system_broadcast_message.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"active":{"a":true,"h":"Active","n":"active","r":false,"t":"`$BOOLEAN`","key$":"active","index$":0},"broadcast_type":{"a":true,"h":"Broadcast Type","n":"broadcast_type","r":false,"t":"`$STRING`","key$":"broadcast_type","index$":1},"color":{"a":true,"h":"Color","n":"color","r":false,"t":"`$STRING`","key$":"color","index$":2},"dismissable":{"a":true,"h":"Dismissable","n":"dismissable","r":false,"t":"`$STRING`","key$":"dismissable","index$":3},"ends_at":{"a":true,"h":"Ends At","n":"ends_at","r":false,"t":"`$STRING`","key$":"ends_at","index$":4},"font":{"a":true,"h":"Font","n":"font","r":false,"t":"`$STRING`","key$":"font","index$":5},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":6},"message":{"a":true,"h":"Message","n":"message","r":false,"t":"`$STRING`","key$":"message","index$":7},"starts_at":{"a":true,"h":"Starts At","n":"starts_at","r":false,"t":"`$STRING`","key$":"starts_at","index$":8},"target_access_levels":{"a":true,"h":"Target Access Levels","n":"target_access_levels","r":false,"t":"`$STRING`","key$":"target_access_levels","index$":9},"target_path":{"a":true,"h":"Target Path","n":"target_path","r":false,"t":"`$STRING`","key$":"target_path","index$":10},"theme":{"a":true,"h":"Theme","n":"theme","r":false,"t":"`$STRING`","key$":"theme","index$":11}},"id":{"field":"id","name":"id"},"name":"api_entities_system_broadcast_message","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/v4/broadcast_messages","source":"swagger2","version":2},"g":{"query":[{"a":true,"k":"query","n":"post_api_v4_broadcast_message","or":"post_api_v4_broadcast_message","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"POST","o":"/api/v4/broadcast_messages","q":{"exist":["post_api_v4_broadcast_message"]},"r":{},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"broadcast_messages"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v4/broadcast_messages","source":"swagger2","version":2},"g":{"query":[{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":20,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/api/v4/broadcast_messages","q":{"exist":["page","per_page"]},"r":{},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"broadcast_messages"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /api/v4/broadcast_messages/{id}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/v4/broadcast_messages/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"broadcast_messages"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /api/v4/broadcast_messages/{id}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/api/v4/broadcast_messages/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"broadcast_messages"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /api/v4/broadcast_messages/{id}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"put_api_v4_broadcast_messages_id","or":"put_api_v4_broadcast_messages_id","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"PUT","o":"/api/v4/broadcast_messages/{id}","q":{"exist":["id","put_api_v4_broadcast_messages_id"]},"r":{},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"broadcast_messages"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"api_entities_system_broadcast_message","name__orig":"api_entities_system_broadcast_message","Name":"ApiEntitiesSystemBroadcastMessage","name_":"api_entities_system_broadcast_message","name-":"api-entities-system-broadcast-message","NAME":"API_ENTITIES_SYSTEM_BROADCAST_MESSAGE","index$":158}, {"active":true,"entity":"api_entities_system_broadcast_message","key$":"BasicApiEntitiesSystemBroadcastMessageFlow","kind":"basic","name":"BasicApiEntitiesSystemBroadcastMessageFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"api_entities_system_broadcast_message_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"api_entities_system_broadcast_message_ref01","srcdatavar":"api_entities_system_broadcast_message_ref01_data","suffix":"_up0","textfield":"broadcast_type"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_system_broadcast_message_ref01"}}],"v":[],"index$":1},{"a":true,"d":{},"i":{"ref":"api_entities_system_broadcast_message_ref01","srcdatavar":"api_entities_system_broadcast_message_ref01_data","suffix":"_dt0"},"m":{"id":"api_entities_system_broadcast_message01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_system_broadcast_message_ref01"}}],"index$":2},{"a":true,"d":{},"i":{"ref":"api_entities_system_broadcast_message_ref01","suffix":"_rm0"},"m":{"id":"api_entities_system_broadcast_message01"},"o":"remove","s":[],"v":[],"index$":3}]}, 'ApiEntitiesSystemBroadcastMessage', {"POST /api/v4/broadcast_messages":{"protocol":"http","parameters":[{"name":"postApiV4BroadcastMessages","in":"body","required":true,"schema":{"type":"object","properties":{"message":{"type":"string","description":"Message to display"},"starts_at":{"type":"string","format":"date-time","description":"Starting time","default":{}},"ends_at":{"type":"string","format":"date-time","description":"Ending time","default":{}},"color":{"type":"string","description":"Background color (Deprecated. Use \"theme\" instead.)"},"font":{"type":"string","description":"Foreground color (Deprecated. Use \"theme\" instead.)"},"target_access_levels":{"type":"array","description":"Target user roles","items":{"type":"integer","format":"int32","enum":[10,15,20,30,40,50]}},"target_path":{"type":"string","description":"Target path"},"broadcast_type":{"type":"string","description":"Broadcast type. Defaults to banner","enum":["banner","notification"],"default":{}},"dismissable":{"type":"boolean","description":"Is dismissable"},"theme":{"type":"string","description":"The theme for the message","enum":["indigo","light-indigo","blue","light-blue","green","light-green","red","light-red","dark","light"]}},"required":["message"],"description":"Create a broadcast message","x-ref":"#/definitions/postApiV4BroadcastMessages"},"index$":0}]},"GET /api/v4/broadcast_messages":{"protocol":"http","parameters":[{"in":"query","name":"page","description":"Current page number","type":"integer","format":"int32","default":1,"required":false,"example":1,"index$":0},{"in":"query","name":"per_page","description":"Number of items per page","type":"integer","format":"int32","default":20,"required":false,"example":20,"index$":1}]},"GET /api/v4/broadcast_messages/{id}":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"Broadcast message ID","type":"integer","format":"int32","required":true,"index$":0}]},"DELETE /api/v4/broadcast_messages/{id}":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"Broadcast message ID","type":"integer","format":"int32","required":true,"index$":0}]},"PUT /api/v4/broadcast_messages/{id}":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"Broadcast message ID","type":"integer","format":"int32","required":true,"index$":0},{"name":"putApiV4BroadcastMessagesId","in":"body","required":true,"schema":{"type":"object","properties":{"message":{"type":"string","description":"Message to display"},"starts_at":{"type":"string","format":"date-time","description":"Starting time"},"ends_at":{"type":"string","format":"date-time","description":"Ending time"},"color":{"type":"string","description":"Background color (Deprecated. Use \"theme\" instead.)"},"font":{"type":"string","description":"Foreground color (Deprecated. Use \"theme\" instead.)"},"target_access_levels":{"type":"array","description":"Target user roles","items":{"type":"integer","format":"int32","enum":[10,15,20,30,40,50]}},"target_path":{"type":"string","description":"Target path"},"broadcast_type":{"type":"string","description":"Broadcast Type","enum":["banner","notification"]},"dismissable":{"type":"boolean","description":"Is dismissable"},"theme":{"type":"string","description":"The theme for the message","enum":["indigo","light-indigo","blue","light-blue","green","light-green","red","light-red","dark","light"]}},"description":"Update a broadcast message","x-ref":"#/definitions/putApiV4BroadcastMessagesId"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const api_entities_system_broadcast_message_ref01_ent = client.ApiEntitiesSystemBroadcastMessage()
    let api_entities_system_broadcast_message_ref01_data = setup.data.new.api_entities_system_broadcast_message['api_entities_system_broadcast_message_ref01']

    api_entities_system_broadcast_message_ref01_data = (await api_entities_system_broadcast_message_ref01_ent.create(api_entities_system_broadcast_message_ref01_data)).data()
    assert(null != api_entities_system_broadcast_message_ref01_data.id)


    // UPDATE
    const api_entities_system_broadcast_message_ref01_data_up0: any = {}
    api_entities_system_broadcast_message_ref01_data_up0.id = api_entities_system_broadcast_message_ref01_data.id

    const api_entities_system_broadcast_message_ref01_markdef_up0 = { name: 'broadcast_type', value: 'Mark01-api_entities_system_broadcast_message_ref01_' + setup.now }
    ;(api_entities_system_broadcast_message_ref01_data_up0 as any)[api_entities_system_broadcast_message_ref01_markdef_up0.name] = api_entities_system_broadcast_message_ref01_markdef_up0.value

    const api_entities_system_broadcast_message_ref01_resdata_up0 = (await api_entities_system_broadcast_message_ref01_ent.update(api_entities_system_broadcast_message_ref01_data_up0)).data()
    assert(api_entities_system_broadcast_message_ref01_resdata_up0.id === api_entities_system_broadcast_message_ref01_data_up0.id)

    assert((api_entities_system_broadcast_message_ref01_resdata_up0 as any)[api_entities_system_broadcast_message_ref01_markdef_up0.name] === api_entities_system_broadcast_message_ref01_markdef_up0.value)


    // LOAD
    const api_entities_system_broadcast_message_ref01_match_dt0: any = {}
    api_entities_system_broadcast_message_ref01_match_dt0.id = api_entities_system_broadcast_message_ref01_data.id
    const api_entities_system_broadcast_message_ref01_data_dt0 = (await api_entities_system_broadcast_message_ref01_ent.load(api_entities_system_broadcast_message_ref01_match_dt0)).data()
    assert(api_entities_system_broadcast_message_ref01_data_dt0.id === api_entities_system_broadcast_message_ref01_data.id)


    // REMOVE
    const api_entities_system_broadcast_message_ref01_match_rm0: any = { id: api_entities_system_broadcast_message_ref01_data.id }
    await api_entities_system_broadcast_message_ref01_ent.remove(api_entities_system_broadcast_message_ref01_match_rm0)
  

  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_system_broadcast_message/ApiEntitiesSystemBroadcastMessageTestData.json')

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
    ['api_entities_system_broadcast_message01','api_entities_system_broadcast_message02','api_entities_system_broadcast_message03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_SYSTEM_BROADCAST_MESSAGE_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_SYSTEM_BROADCAST_MESSAGE_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_SYSTEM_BROADCAST_MESSAGE_ENTID']
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
  
