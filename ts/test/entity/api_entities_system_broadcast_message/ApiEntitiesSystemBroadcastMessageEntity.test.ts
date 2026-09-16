

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"active","req":false,"type":"`$BOOLEAN`","index$":0},{"active":true,"name":"broadcast_type","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"color","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"dismissable","req":false,"type":"`$STRING`","index$":3},{"active":true,"name":"ends_at","req":false,"type":"`$STRING`","index$":4},{"active":true,"name":"font","req":false,"type":"`$STRING`","index$":5},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":6},{"active":true,"name":"message","req":false,"type":"`$STRING`","index$":7},{"active":true,"name":"starts_at","req":false,"type":"`$STRING`","index$":8},{"active":true,"name":"target_access_levels","req":false,"type":"`$STRING`","index$":9},{"active":true,"name":"target_path","req":false,"type":"`$STRING`","index$":10},{"active":true,"name":"theme","req":false,"type":"`$STRING`","index$":11}],"id":{"field":"id","name":"id"},"name":"api_entities_system_broadcast_message","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"post_api_v4_broadcast_message","orig":"post_api_v4_broadcast_message","reqd":true,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"POST /api/v4/broadcast_messages","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4BroadcastMessages\",\"parameters\":[{\"in\":\"body\",\"name\":\"postApiV4BroadcastMessages\",\"required\":true,\"schema\":{\"description\":\"Create a broadcast message\",\"properties\":{\"broadcast_type\":{\"default\":{},\"description\":\"Broadcast type. Defaults to banner\",\"enum\":[\"banner\",\"notification\"],\"type\":\"string\"},\"color\":{\"description\":\"Background color (Deprecated. Use \\\"theme\\\" instead.)\",\"type\":\"string\"},\"dismissable\":{\"description\":\"Is dismissable\",\"type\":\"boolean\"},\"ends_at\":{\"default\":{},\"description\":\"Ending time\",\"format\":\"date-time\",\"type\":\"string\"},\"font\":{\"description\":\"Foreground color (Deprecated. Use \\\"theme\\\" instead.)\",\"type\":\"string\"},\"message\":{\"description\":\"Message to display\",\"type\":\"string\"},\"starts_at\":{\"default\":{},\"description\":\"Starting time\",\"format\":\"date-time\",\"type\":\"string\"},\"target_access_levels\":{\"description\":\"Target user roles\",\"items\":{\"enum\":[10,15,20,30,40,50],\"format\":\"int32\",\"type\":\"integer\"},\"type\":\"array\"},\"target_path\":{\"description\":\"Target path\",\"type\":\"string\"},\"theme\":{\"description\":\"The theme for the message\",\"enum\":[\"indigo\",\"light-indigo\",\"blue\",\"light-blue\",\"green\",\"light-green\",\"red\",\"light-red\",\"dark\",\"light\"],\"type\":\"string\"}},\"required\":[\"message\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"201\":{\"description\":\"Create a broadcast message\",\"schema\":{\"description\":\"API_Entities_System_BroadcastMessage model\",\"properties\":{\"active\":{\"type\":\"string\"},\"broadcast_type\":{\"type\":\"string\"},\"color\":{\"type\":\"string\"},\"dismissable\":{\"type\":\"string\"},\"ends_at\":{\"type\":\"string\"},\"font\":{\"type\":\"string\"},\"id\":{\"type\":\"string\"},\"message\":{\"type\":\"string\"},\"starts_at\":{\"type\":\"string\"},\"target_access_levels\":{\"type\":\"string\"},\"target_path\":{\"type\":\"string\"},\"theme\":{\"type\":\"string\"}},\"type\":\"object\"}}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/api/v4/broadcast_messages","segments":[{"lit":"api"},{"lit":"v4"},{"lit":"broadcast_messages"}],"select":{"exist":["post_api_v4_broadcast_message"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"query":[{"active":true,"example":1,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":0},{"active":true,"example":20,"kind":"query","name":"per_page","orig":"per_page","reqd":false,"type":"`$INTEGER`","index$":1}]},"contract":{"id":"GET /api/v4/broadcast_messages","json":"{\"operationId\":\"getApiV4BroadcastMessages\",\"parameters\":[{\"default\":1,\"description\":\"Current page number\",\"example\":1,\"format\":\"int32\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"type\":\"integer\"},{\"default\":20,\"description\":\"Number of items per page\",\"example\":20,\"format\":\"int32\",\"in\":\"query\",\"name\":\"per_page\",\"required\":false,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get all broadcast messages\",\"schema\":{\"description\":\"API_Entities_System_BroadcastMessage model\",\"properties\":{\"active\":{\"type\":\"string\"},\"broadcast_type\":{\"type\":\"string\"},\"color\":{\"type\":\"string\"},\"dismissable\":{\"type\":\"string\"},\"ends_at\":{\"type\":\"string\"},\"font\":{\"type\":\"string\"},\"id\":{\"type\":\"string\"},\"message\":{\"type\":\"string\"},\"starts_at\":{\"type\":\"string\"},\"target_access_levels\":{\"type\":\"string\"},\"target_path\":{\"type\":\"string\"},\"theme\":{\"type\":\"string\"}},\"type\":\"object\"}}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/broadcast_messages","segments":[{"lit":"api"},{"lit":"v4"},{"lit":"broadcast_messages"}],"select":{"exist":["page","per_page"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /api/v4/broadcast_messages/{id}","json":"{\"operationId\":\"getApiV4BroadcastMessagesId\",\"parameters\":[{\"description\":\"Broadcast message ID\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get a specific broadcast message\",\"schema\":{\"description\":\"API_Entities_System_BroadcastMessage model\",\"properties\":{\"active\":{\"type\":\"string\"},\"broadcast_type\":{\"type\":\"string\"},\"color\":{\"type\":\"string\"},\"dismissable\":{\"type\":\"string\"},\"ends_at\":{\"type\":\"string\"},\"font\":{\"type\":\"string\"},\"id\":{\"type\":\"string\"},\"message\":{\"type\":\"string\"},\"starts_at\":{\"type\":\"string\"},\"target_access_levels\":{\"type\":\"string\"},\"target_path\":{\"type\":\"string\"},\"theme\":{\"type\":\"string\"}},\"type\":\"object\"}}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/broadcast_messages/{id}","segments":[{"lit":"api"},{"lit":"v4"},{"lit":"broadcast_messages"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"DELETE /api/v4/broadcast_messages/{id}","json":"{\"operationId\":\"deleteApiV4BroadcastMessagesId\",\"parameters\":[{\"description\":\"Broadcast message ID\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Delete a broadcast message\",\"schema\":{\"description\":\"API_Entities_System_BroadcastMessage model\",\"properties\":{\"active\":{\"type\":\"string\"},\"broadcast_type\":{\"type\":\"string\"},\"color\":{\"type\":\"string\"},\"dismissable\":{\"type\":\"string\"},\"ends_at\":{\"type\":\"string\"},\"font\":{\"type\":\"string\"},\"id\":{\"type\":\"string\"},\"message\":{\"type\":\"string\"},\"starts_at\":{\"type\":\"string\"},\"target_access_levels\":{\"type\":\"string\"},\"target_path\":{\"type\":\"string\"},\"theme\":{\"type\":\"string\"}},\"type\":\"object\"}}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"DELETE","orig":"/api/v4/broadcast_messages/{id}","segments":[{"lit":"api"},{"lit":"v4"},{"lit":"broadcast_messages"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"kind":"query","name":"put_api_v4_broadcast_messages_id","orig":"put_api_v4_broadcast_messages_id","reqd":true,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"PUT /api/v4/broadcast_messages/{id}","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"putApiV4BroadcastMessagesId\",\"parameters\":[{\"description\":\"Broadcast message ID\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"integer\"},{\"in\":\"body\",\"name\":\"putApiV4BroadcastMessagesId\",\"required\":true,\"schema\":{\"description\":\"Update a broadcast message\",\"properties\":{\"broadcast_type\":{\"description\":\"Broadcast Type\",\"enum\":[\"banner\",\"notification\"],\"type\":\"string\"},\"color\":{\"description\":\"Background color (Deprecated. Use \\\"theme\\\" instead.)\",\"type\":\"string\"},\"dismissable\":{\"description\":\"Is dismissable\",\"type\":\"boolean\"},\"ends_at\":{\"description\":\"Ending time\",\"format\":\"date-time\",\"type\":\"string\"},\"font\":{\"description\":\"Foreground color (Deprecated. Use \\\"theme\\\" instead.)\",\"type\":\"string\"},\"message\":{\"description\":\"Message to display\",\"type\":\"string\"},\"starts_at\":{\"description\":\"Starting time\",\"format\":\"date-time\",\"type\":\"string\"},\"target_access_levels\":{\"description\":\"Target user roles\",\"items\":{\"enum\":[10,15,20,30,40,50],\"format\":\"int32\",\"type\":\"integer\"},\"type\":\"array\"},\"target_path\":{\"description\":\"Target path\",\"type\":\"string\"},\"theme\":{\"description\":\"The theme for the message\",\"enum\":[\"indigo\",\"light-indigo\",\"blue\",\"light-blue\",\"green\",\"light-green\",\"red\",\"light-red\",\"dark\",\"light\"],\"type\":\"string\"}},\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Update a broadcast message\",\"schema\":{\"description\":\"API_Entities_System_BroadcastMessage model\",\"properties\":{\"active\":{\"type\":\"string\"},\"broadcast_type\":{\"type\":\"string\"},\"color\":{\"type\":\"string\"},\"dismissable\":{\"type\":\"string\"},\"ends_at\":{\"type\":\"string\"},\"font\":{\"type\":\"string\"},\"id\":{\"type\":\"string\"},\"message\":{\"type\":\"string\"},\"starts_at\":{\"type\":\"string\"},\"target_access_levels\":{\"type\":\"string\"},\"target_path\":{\"type\":\"string\"},\"theme\":{\"type\":\"string\"}},\"type\":\"object\"}}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"PUT","orig":"/api/v4/broadcast_messages/{id}","segments":[{"lit":"api"},{"lit":"v4"},{"lit":"broadcast_messages"},{"var":"id"}],"select":{"exist":["id","put_api_v4_broadcast_messages_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"api_entities_system_broadcast_message","name__orig":"api_entities_system_broadcast_message","Name":"ApiEntitiesSystemBroadcastMessage","name_":"api_entities_system_broadcast_message","name-":"api-entities-system-broadcast-message","NAME":"API_ENTITIES_SYSTEM_BROADCAST_MESSAGE","index$":158}, {"active":true,"entity":"api_entities_system_broadcast_message","key$":"BasicApiEntitiesSystemBroadcastMessageFlow","kind":"basic","name":"BasicApiEntitiesSystemBroadcastMessageFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"api_entities_system_broadcast_message_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{"ref":"api_entities_system_broadcast_message_ref01","srcdatavar":"api_entities_system_broadcast_message_ref01_data","suffix":"_up0","textfield":"broadcast_type"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_system_broadcast_message_ref01"}}],"valid":[],"index$":1},{"active":true,"data":{},"input":{"ref":"api_entities_system_broadcast_message_ref01","srcdatavar":"api_entities_system_broadcast_message_ref01_data","suffix":"_dt0"},"match":{"id":"api_entities_system_broadcast_message01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_system_broadcast_message_ref01"}}],"index$":2},{"active":true,"data":{},"input":{"ref":"api_entities_system_broadcast_message_ref01","suffix":"_rm0"},"match":{"id":"api_entities_system_broadcast_message01"},"op":"remove","spec":[],"valid":[],"index$":3}]}, 'ApiEntitiesSystemBroadcastMessage')
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
  
