

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


describe('ApiEntitiesHookEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesHook()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_hook.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"alert_status","req":false,"type":"Any","index$":0},{"active":true,"name":"branch_filter_strategy","req":false,"type":"`$STRING`","index$":1},{"active":true,"format":"date-time","name":"created_at","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"custom_headers","req":false,"type":"`$ARRAY`","index$":3},{"active":true,"name":"custom_webhook_template","req":false,"type":"`$STRING`","index$":4},{"active":true,"name":"description","req":false,"type":"`$STRING`","index$":5},{"active":true,"format":"date-time","name":"disabled_until","req":false,"type":"`$STRING`","index$":6},{"active":true,"name":"enable_ssl_verification","req":false,"type":"`$BOOLEAN`","index$":7},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":8},{"active":true,"name":"merge_requests_events","req":false,"type":"`$BOOLEAN`","index$":9},{"active":true,"name":"name","req":false,"type":"`$STRING`","index$":10},{"active":true,"name":"push_events","req":false,"type":"`$BOOLEAN`","index$":11},{"active":true,"name":"push_events_branch_filter","req":false,"type":"`$STRING`","index$":12},{"active":true,"name":"repository_update_events","req":false,"type":"`$BOOLEAN`","index$":13},{"active":true,"name":"tag_push_events","req":false,"type":"`$BOOLEAN`","index$":14},{"active":true,"name":"url","req":false,"type":"`$STRING`","index$":15},{"active":true,"name":"url_variables","req":false,"type":"`$ARRAY`","index$":16}],"id":{"field":"id","name":"id"},"name":"api_entities_hook","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"post_api_v4_hook","orig":"post_api_v4_hook","reqd":true,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"POST /api/v4/hooks","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4Hooks\",\"parameters\":[{\"in\":\"body\",\"name\":\"postApiV4Hooks\",\"required\":true,\"schema\":{\"description\":\"Add new system hook\",\"properties\":{\"branch_filter_strategy\":{\"description\":\"Filter push events by branch. Possible values are `wildcard` (default), `regex`, and `all_branches`\",\"enum\":[\"wildcard\",\"regex\",\"all_branches\"],\"type\":\"string\"},\"custom_headers\":{\"description\":\"Custom headers\",\"items\":{\"properties\":{\"key\":{\"description\":\"Name of the header\",\"example\":\"X-Custom-Header\",\"type\":\"string\"},\"value\":{\"description\":\"Value of the header\",\"example\":\"value\",\"type\":\"string\"}},\"required\":[\"key\",\"value\"],\"type\":\"object\"},\"type\":\"array\"},\"description\":{\"description\":\"Description of the hook\",\"type\":\"string\"},\"enable_ssl_verification\":{\"description\":\"Do SSL verification when triggering the hook\",\"type\":\"boolean\"},\"merge_requests_events\":{\"description\":\"Trigger hook on merge requests events\",\"type\":\"boolean\"},\"name\":{\"description\":\"Name of the hook\",\"type\":\"string\"},\"push_events\":{\"description\":\"When true, the hook fires on push events\",\"type\":\"boolean\"},\"push_events_branch_filter\":{\"description\":\"Trigger hook on specified branch only\",\"type\":\"string\"},\"repository_update_events\":{\"description\":\"Trigger hook on repository update events\",\"type\":\"boolean\"},\"tag_push_events\":{\"description\":\"When true, the hook fires on new tags being pushed\",\"type\":\"boolean\"},\"token\":{\"description\":\"Secret token to validate received payloads; this isn't returned in the response\",\"type\":\"string\"},\"url\":{\"description\":\"The URL to send the request to\",\"example\":\"http://example.com/hook\",\"type\":\"string\"},\"url_variables\":{\"description\":\"URL variables for interpolation\",\"items\":{\"properties\":{\"key\":{\"description\":\"Name of the variable\",\"example\":\"token\",\"type\":\"string\"},\"value\":{\"description\":\"Value of the variable\",\"example\":\"123\",\"type\":\"string\"}},\"required\":[\"key\",\"value\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"url\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"201\":{\"description\":\"Add new system hook\",\"schema\":{\"description\":\"API_Entities_Hook model\",\"properties\":{\"alert_status\":{\"example\":\"executable\",\"type\":\"symbol\"},\"branch_filter_strategy\":{\"example\":\"wildcard\",\"type\":\"string\"},\"created_at\":{\"example\":\"2012-05-28T04:42:42-07:00\",\"format\":\"date-time\",\"type\":\"string\"},\"custom_headers\":{\"example\":{\"X-Custom-Header\":\"value\"},\"items\":{\"type\":\"object\"},\"type\":\"array\"},\"custom_webhook_template\":{\"example\":\"{\\\"event\\\":\\\"{{object_kind}}\\\"}\",\"type\":\"string\"},\"description\":{\"example\":\"Hook description\",\"type\":\"string\"},\"disabled_until\":{\"example\":\"2012-05-28T04:42:42-07:00\",\"format\":\"date-time\",\"type\":\"string\"},\"enable_ssl_verification\":{\"type\":\"boolean\"},\"id\":{\"example\":1,\"type\":\"string\"},\"merge_requests_events\":{\"type\":\"boolean\"},\"name\":{\"example\":\"Hook name\",\"type\":\"string\"},\"push_events\":{\"type\":\"boolean\"},\"push_events_branch_filter\":{\"example\":\"my-branch-*\",\"type\":\"string\"},\"repository_update_events\":{\"type\":\"boolean\"},\"tag_push_events\":{\"type\":\"boolean\"},\"url\":{\"example\":\"https://webhook.site\",\"type\":\"string\"},\"url_variables\":{\"example\":{\"token\":\"secr3t\"},\"items\":{\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}},\"400\":{\"description\":\"Validation error\"},\"404\":{\"description\":\"Not found\"},\"422\":{\"description\":\"Unprocessable entity\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/api/v4/hooks","segments":[{"lit":"api"},{"lit":"v4"},{"lit":"hooks"}],"select":{"exist":["post_api_v4_hook"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"example":1,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":0},{"active":true,"example":20,"kind":"query","name":"per_page","orig":"per_page","reqd":false,"type":"`$INTEGER`","index$":1}]},"contract":{"id":"GET /api/v4/hooks","json":"{\"operationId\":\"getApiV4Hooks\",\"parameters\":[{\"default\":1,\"description\":\"Current page number\",\"example\":1,\"format\":\"int32\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"type\":\"integer\"},{\"default\":20,\"description\":\"Number of items per page\",\"example\":20,\"format\":\"int32\",\"in\":\"query\",\"name\":\"per_page\",\"required\":false,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"List system hooks\",\"schema\":{\"items\":{\"description\":\"API_Entities_Hook model\",\"properties\":{\"alert_status\":{\"example\":\"executable\",\"type\":\"symbol\"},\"branch_filter_strategy\":{\"example\":\"wildcard\",\"type\":\"string\"},\"created_at\":{\"example\":\"2012-05-28T04:42:42-07:00\",\"format\":\"date-time\",\"type\":\"string\"},\"custom_headers\":{\"example\":{\"X-Custom-Header\":\"value\"},\"items\":{\"type\":\"object\"},\"type\":\"array\"},\"custom_webhook_template\":{\"example\":\"{\\\"event\\\":\\\"{{object_kind}}\\\"}\",\"type\":\"string\"},\"description\":{\"example\":\"Hook description\",\"type\":\"string\"},\"disabled_until\":{\"example\":\"2012-05-28T04:42:42-07:00\",\"format\":\"date-time\",\"type\":\"string\"},\"enable_ssl_verification\":{\"type\":\"boolean\"},\"id\":{\"example\":1,\"type\":\"string\"},\"merge_requests_events\":{\"type\":\"boolean\"},\"name\":{\"example\":\"Hook name\",\"type\":\"string\"},\"push_events\":{\"type\":\"boolean\"},\"push_events_branch_filter\":{\"example\":\"my-branch-*\",\"type\":\"string\"},\"repository_update_events\":{\"type\":\"boolean\"},\"tag_push_events\":{\"type\":\"boolean\"},\"url\":{\"example\":\"https://webhook.site\",\"type\":\"string\"},\"url_variables\":{\"example\":{\"token\":\"secr3t\"},\"items\":{\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"},\"type\":\"array\"}}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/hooks","segments":[{"lit":"api"},{"lit":"v4"},{"lit":"hooks"}],"select":{"exist":["page","per_page"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"hook_id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /api/v4/hooks/{hook_id}","json":"{\"operationId\":\"getApiV4HooksHookId\",\"parameters\":[{\"description\":\"The ID of the system hook\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"hook_id\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get system hook\",\"schema\":{\"description\":\"API_Entities_Hook model\",\"properties\":{\"alert_status\":{\"example\":\"executable\",\"type\":\"symbol\"},\"branch_filter_strategy\":{\"example\":\"wildcard\",\"type\":\"string\"},\"created_at\":{\"example\":\"2012-05-28T04:42:42-07:00\",\"format\":\"date-time\",\"type\":\"string\"},\"custom_headers\":{\"example\":{\"X-Custom-Header\":\"value\"},\"items\":{\"type\":\"object\"},\"type\":\"array\"},\"custom_webhook_template\":{\"example\":\"{\\\"event\\\":\\\"{{object_kind}}\\\"}\",\"type\":\"string\"},\"description\":{\"example\":\"Hook description\",\"type\":\"string\"},\"disabled_until\":{\"example\":\"2012-05-28T04:42:42-07:00\",\"format\":\"date-time\",\"type\":\"string\"},\"enable_ssl_verification\":{\"type\":\"boolean\"},\"id\":{\"example\":1,\"type\":\"string\"},\"merge_requests_events\":{\"type\":\"boolean\"},\"name\":{\"example\":\"Hook name\",\"type\":\"string\"},\"push_events\":{\"type\":\"boolean\"},\"push_events_branch_filter\":{\"example\":\"my-branch-*\",\"type\":\"string\"},\"repository_update_events\":{\"type\":\"boolean\"},\"tag_push_events\":{\"type\":\"boolean\"},\"url\":{\"example\":\"https://webhook.site\",\"type\":\"string\"},\"url_variables\":{\"example\":{\"token\":\"secr3t\"},\"items\":{\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/hooks/{hook_id}","rename":{"param":{"hook_id":"id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"hooks"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"hook_id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"kind":"query","name":"put_api_v4_hooks_hook_id","orig":"put_api_v4_hooks_hook_id","reqd":true,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"PUT /api/v4/hooks/{hook_id}","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"putApiV4HooksHookId\",\"parameters\":[{\"description\":\"The ID of the system hook\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"hook_id\",\"required\":true,\"type\":\"integer\"},{\"in\":\"body\",\"name\":\"putApiV4HooksHookId\",\"required\":true,\"schema\":{\"description\":\"Edit system hook\",\"properties\":{\"branch_filter_strategy\":{\"description\":\"Filter push events by branch. Possible values are `wildcard` (default), `regex`, and `all_branches`\",\"enum\":[\"wildcard\",\"regex\",\"all_branches\"],\"type\":\"string\"},\"custom_headers\":{\"description\":\"Custom headers\",\"items\":{\"properties\":{\"key\":{\"description\":\"Name of the header\",\"example\":\"X-Custom-Header\",\"type\":\"string\"},\"value\":{\"description\":\"Value of the header\",\"example\":\"value\",\"type\":\"string\"}},\"required\":[\"key\",\"value\"],\"type\":\"object\"},\"type\":\"array\"},\"description\":{\"description\":\"Description of the hook\",\"type\":\"string\"},\"enable_ssl_verification\":{\"description\":\"Do SSL verification when triggering the hook\",\"type\":\"boolean\"},\"merge_requests_events\":{\"description\":\"Trigger hook on merge requests events\",\"type\":\"boolean\"},\"name\":{\"description\":\"Name of the hook\",\"type\":\"string\"},\"push_events\":{\"description\":\"When true, the hook fires on push events\",\"type\":\"boolean\"},\"push_events_branch_filter\":{\"description\":\"Trigger hook on specified branch only\",\"type\":\"string\"},\"repository_update_events\":{\"description\":\"Trigger hook on repository update events\",\"type\":\"boolean\"},\"tag_push_events\":{\"description\":\"When true, the hook fires on new tags being pushed\",\"type\":\"boolean\"},\"token\":{\"description\":\"Secret token to validate received payloads; this isn't returned in the response\",\"type\":\"string\"},\"url\":{\"description\":\"The URL to send the request to\",\"type\":\"string\"},\"url_variables\":{\"description\":\"URL variables for interpolation\",\"items\":{\"properties\":{\"key\":{\"description\":\"Name of the variable\",\"example\":\"token\",\"type\":\"string\"},\"value\":{\"description\":\"Value of the variable\",\"example\":\"123\",\"type\":\"string\"}},\"required\":[\"key\",\"value\"],\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Edit system hook\",\"schema\":{\"description\":\"API_Entities_Hook model\",\"properties\":{\"alert_status\":{\"example\":\"executable\",\"type\":\"symbol\"},\"branch_filter_strategy\":{\"example\":\"wildcard\",\"type\":\"string\"},\"created_at\":{\"example\":\"2012-05-28T04:42:42-07:00\",\"format\":\"date-time\",\"type\":\"string\"},\"custom_headers\":{\"example\":{\"X-Custom-Header\":\"value\"},\"items\":{\"type\":\"object\"},\"type\":\"array\"},\"custom_webhook_template\":{\"example\":\"{\\\"event\\\":\\\"{{object_kind}}\\\"}\",\"type\":\"string\"},\"description\":{\"example\":\"Hook description\",\"type\":\"string\"},\"disabled_until\":{\"example\":\"2012-05-28T04:42:42-07:00\",\"format\":\"date-time\",\"type\":\"string\"},\"enable_ssl_verification\":{\"type\":\"boolean\"},\"id\":{\"example\":1,\"type\":\"string\"},\"merge_requests_events\":{\"type\":\"boolean\"},\"name\":{\"example\":\"Hook name\",\"type\":\"string\"},\"push_events\":{\"type\":\"boolean\"},\"push_events_branch_filter\":{\"example\":\"my-branch-*\",\"type\":\"string\"},\"repository_update_events\":{\"type\":\"boolean\"},\"tag_push_events\":{\"type\":\"boolean\"},\"url\":{\"example\":\"https://webhook.site\",\"type\":\"string\"},\"url_variables\":{\"example\":{\"token\":\"secr3t\"},\"items\":{\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}},\"400\":{\"description\":\"Validation error\"},\"404\":{\"description\":\"Not found\"},\"422\":{\"description\":\"Unprocessable entity\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"PUT","orig":"/api/v4/hooks/{hook_id}","rename":{"param":{"hook_id":"id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"hooks"},{"var":"id"}],"select":{"exist":["id","put_api_v4_hooks_hook_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"api_entities_hook","name__orig":"api_entities_hook","Name":"ApiEntitiesHook","name_":"api_entities_hook","name-":"api-entities-hook","NAME":"API_ENTITIES_HOOK","index$":81}, {"active":true,"entity":"api_entities_hook","key$":"BasicApiEntitiesHookFlow","kind":"basic","name":"BasicApiEntitiesHookFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"api_entities_hook_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"api_entities_hook_ref01"}}],"index$":1},{"active":true,"data":{},"input":{"ref":"api_entities_hook_ref01","srcdatavar":"api_entities_hook_ref01_data","suffix":"_up0","textfield":"branch_filter_strategy"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_hook_ref01"}}],"valid":[],"index$":2},{"active":true,"data":{},"input":{"ref":"api_entities_hook_ref01","srcdatavar":"api_entities_hook_ref01_data","suffix":"_dt0"},"match":{"id":"api_entities_hook01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_hook_ref01"}}],"index$":3}]}, 'ApiEntitiesHook')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const api_entities_hook_ref01_ent = client.ApiEntitiesHook()
    let api_entities_hook_ref01_data = setup.data.new.api_entities_hook['api_entities_hook_ref01']

    api_entities_hook_ref01_data = (await api_entities_hook_ref01_ent.create(api_entities_hook_ref01_data)).data()
    assert(null != api_entities_hook_ref01_data.id)


    // LIST
    const api_entities_hook_ref01_match: any = {}

    const api_entities_hook_ref01_list = (await api_entities_hook_ref01_ent.list(api_entities_hook_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(api_entities_hook_ref01_list, { id: api_entities_hook_ref01_data.id })))


    // UPDATE
    const api_entities_hook_ref01_data_up0: any = {}
    api_entities_hook_ref01_data_up0.id = api_entities_hook_ref01_data.id

    const api_entities_hook_ref01_markdef_up0 = { name: 'branch_filter_strategy', value: 'Mark01-api_entities_hook_ref01_' + setup.now }
    ;(api_entities_hook_ref01_data_up0 as any)[api_entities_hook_ref01_markdef_up0.name] = api_entities_hook_ref01_markdef_up0.value

    const api_entities_hook_ref01_resdata_up0 = (await api_entities_hook_ref01_ent.update(api_entities_hook_ref01_data_up0)).data()
    assert(api_entities_hook_ref01_resdata_up0.id === api_entities_hook_ref01_data_up0.id)

    assert((api_entities_hook_ref01_resdata_up0 as any)[api_entities_hook_ref01_markdef_up0.name] === api_entities_hook_ref01_markdef_up0.value)


    // LOAD
    const api_entities_hook_ref01_match_dt0: any = {}
    api_entities_hook_ref01_match_dt0.id = api_entities_hook_ref01_data.id
    const api_entities_hook_ref01_data_dt0 = (await api_entities_hook_ref01_ent.load(api_entities_hook_ref01_match_dt0)).data()
    assert(api_entities_hook_ref01_data_dt0.id === api_entities_hook_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_hook/ApiEntitiesHookTestData.json')

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
    ['api_entities_hook01','api_entities_hook02','api_entities_hook03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_HOOK_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_HOOK_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_HOOK_ENTID']
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
  
