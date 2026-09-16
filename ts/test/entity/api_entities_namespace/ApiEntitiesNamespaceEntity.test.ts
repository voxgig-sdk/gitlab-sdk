

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


describe('ApiEntitiesNamespaceEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesNamespace()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['list', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_namespace.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"format":"date","name":"additional_purchased_storage_ends_on","req":false,"type":"`$STRING`","index$":0},{"active":true,"format":"int32","name":"additional_purchased_storage_size","req":false,"type":"`$INTEGER`","index$":1},{"active":true,"name":"avatar_url","req":false,"type":"`$STRING`","index$":2},{"active":true,"format":"int32","name":"billable_members_count","req":false,"type":"`$INTEGER`","index$":3},{"active":true,"format":"date","name":"end_date","req":false,"type":"`$STRING`","index$":4},{"active":true,"format":"int32","name":"extra_shared_runners_minutes_limit","req":false,"type":"`$INTEGER`","index$":5},{"active":true,"name":"full_path","req":false,"type":"`$STRING`","index$":6},{"active":true,"format":"int32","name":"id","req":false,"type":"`$INTEGER`","index$":7},{"active":true,"name":"kind","req":false,"type":"`$STRING`","index$":8},{"active":true,"format":"int32","name":"max_seats_used","req":false,"type":"`$INTEGER`","index$":9},{"active":true,"format":"date","name":"max_seats_used_changed_at","req":false,"type":"`$STRING`","index$":10},{"active":true,"format":"int32","name":"members_count_with_descendants","req":false,"type":"`$INTEGER`","index$":11},{"active":true,"name":"name","req":false,"type":"`$STRING`","index$":12},{"active":true,"format":"int32","name":"parent_id","req":false,"type":"`$INTEGER`","index$":13},{"active":true,"name":"path","req":false,"type":"`$STRING`","index$":14},{"active":true,"name":"plan","req":false,"type":"`$STRING`","index$":15},{"active":true,"format":"int32","name":"projects_count","req":false,"type":"`$INTEGER`","index$":16},{"active":true,"format":"int32","name":"root_repository_size","req":false,"type":"`$INTEGER`","index$":17},{"active":true,"format":"int32","name":"seats_in_use","req":false,"type":"`$INTEGER`","index$":18},{"active":true,"format":"int32","name":"shared_runners_minutes_limit","req":false,"type":"`$INTEGER`","index$":19},{"active":true,"name":"trial","req":false,"type":"`$BOOLEAN`","index$":20},{"active":true,"format":"date","name":"trial_ends_on","req":false,"type":"`$STRING`","index$":21},{"active":true,"name":"web_url","req":false,"type":"`$STRING`","index$":22}],"id":{"field":"id","name":"id"},"name":"api_entities_namespace","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"full_path_search","orig":"full_path_search","reqd":false,"type":"`$ANY`","index$":0},{"active":true,"kind":"query","name":"owned_only","orig":"owned_only","reqd":false,"type":"`$ANY`","index$":1},{"active":true,"example":1,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":2},{"active":true,"example":20,"kind":"query","name":"per_page","orig":"per_page","reqd":false,"type":"`$INTEGER`","index$":3},{"active":true,"kind":"query","name":"requested_hosted_plan","orig":"requested_hosted_plan","reqd":false,"type":"`$ANY`","index$":4},{"active":true,"kind":"query","name":"search","orig":"search","reqd":false,"type":"`$ANY`","index$":5},{"active":true,"kind":"query","name":"top_level_only","orig":"top_level_only","reqd":false,"type":"`$ANY`","index$":6}]},"contract":{"id":"GET /api/v4/namespaces","json":"{\"operationId\":\"getApiV4Namespaces\",\"parameters\":[{\"description\":\"Returns a list of namespaces the user is authorized to view based on the search criteria\",\"in\":\"query\",\"name\":\"search\",\"required\":false,\"type\":\"string\"},{\"description\":\"In GitLab 14.2 and later, returns a list of owned namespaces only\",\"in\":\"query\",\"name\":\"owned_only\",\"required\":false,\"type\":\"boolean\"},{\"default\":false,\"description\":\"Only include top level namespaces\",\"in\":\"query\",\"name\":\"top_level_only\",\"required\":false,\"type\":\"boolean\"},{\"default\":false,\"description\":\"If `true`, the `search` parameter is matched against the full path of the namespaces\",\"in\":\"query\",\"name\":\"full_path_search\",\"required\":false,\"type\":\"boolean\"},{\"default\":1,\"description\":\"Current page number\",\"example\":1,\"format\":\"int32\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"type\":\"integer\"},{\"default\":20,\"description\":\"Number of items per page\",\"example\":20,\"format\":\"int32\",\"in\":\"query\",\"name\":\"per_page\",\"required\":false,\"type\":\"integer\"},{\"description\":\"Name of the hosted plan requested by the customer\",\"in\":\"query\",\"name\":\"requested_hosted_plan\",\"required\":false,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"List namespaces\",\"schema\":{\"items\":{\"description\":\"API_Entities_Namespace model\",\"properties\":{\"additional_purchased_storage_ends_on\":{\"example\":\"2022-06-18\",\"format\":\"date\",\"type\":\"string\"},\"additional_purchased_storage_size\":{\"example\":1000,\"format\":\"int32\",\"type\":\"integer\"},\"avatar_url\":{\"example\":\"https://example.com/avatar/12345\",\"type\":\"string\"},\"billable_members_count\":{\"example\":2,\"format\":\"int32\",\"type\":\"integer\"},\"end_date\":{\"example\":\"2022-06-18\",\"format\":\"date\",\"type\":\"string\"},\"extra_shared_runners_minutes_limit\":{\"example\":133,\"format\":\"int32\",\"type\":\"integer\"},\"full_path\":{\"example\":\"group/my_project\",\"type\":\"string\"},\"id\":{\"example\":2,\"format\":\"int32\",\"type\":\"integer\"},\"kind\":{\"example\":\"project\",\"type\":\"string\"},\"max_seats_used\":{\"example\":100,\"format\":\"int32\",\"type\":\"integer\"},\"max_seats_used_changed_at\":{\"example\":\"2022-06-18\",\"format\":\"date\",\"type\":\"string\"},\"members_count_with_descendants\":{\"example\":5,\"format\":\"int32\",\"type\":\"integer\"},\"name\":{\"example\":\"project\",\"type\":\"string\"},\"parent_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"path\":{\"example\":\"my_project\",\"type\":\"string\"},\"plan\":{\"example\":\"default\",\"type\":\"string\"},\"projects_count\":{\"example\":123,\"format\":\"int32\",\"type\":\"integer\"},\"root_repository_size\":{\"example\":123,\"format\":\"int32\",\"type\":\"integer\"},\"seats_in_use\":{\"example\":5,\"format\":\"int32\",\"type\":\"integer\"},\"shared_runners_minutes_limit\":{\"example\":133,\"format\":\"int32\",\"type\":\"integer\"},\"trial\":{\"type\":\"boolean\"},\"trial_ends_on\":{\"example\":\"2022-06-18\",\"format\":\"date\",\"type\":\"string\"},\"web_url\":{\"example\":\"https://example.com/group/my_project\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"401\":{\"description\":\"Unauthorized\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/namespaces","segments":[{"lit":"api"},{"lit":"v4"},{"lit":"namespaces"}],"select":{"exist":["full_path_search","owned_only","page","per_page","requested_hosted_plan","search","top_level_only"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /api/v4/namespaces/{id}","json":"{\"operationId\":\"getApiV4NamespacesId\",\"parameters\":[{\"description\":\"ID or URL-encoded path of the namespace\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get namespace by ID\",\"schema\":{\"description\":\"API_Entities_Namespace model\",\"properties\":{\"additional_purchased_storage_ends_on\":{\"example\":\"2022-06-18\",\"format\":\"date\",\"type\":\"string\"},\"additional_purchased_storage_size\":{\"example\":1000,\"format\":\"int32\",\"type\":\"integer\"},\"avatar_url\":{\"example\":\"https://example.com/avatar/12345\",\"type\":\"string\"},\"billable_members_count\":{\"example\":2,\"format\":\"int32\",\"type\":\"integer\"},\"end_date\":{\"example\":\"2022-06-18\",\"format\":\"date\",\"type\":\"string\"},\"extra_shared_runners_minutes_limit\":{\"example\":133,\"format\":\"int32\",\"type\":\"integer\"},\"full_path\":{\"example\":\"group/my_project\",\"type\":\"string\"},\"id\":{\"example\":2,\"format\":\"int32\",\"type\":\"integer\"},\"kind\":{\"example\":\"project\",\"type\":\"string\"},\"max_seats_used\":{\"example\":100,\"format\":\"int32\",\"type\":\"integer\"},\"max_seats_used_changed_at\":{\"example\":\"2022-06-18\",\"format\":\"date\",\"type\":\"string\"},\"members_count_with_descendants\":{\"example\":5,\"format\":\"int32\",\"type\":\"integer\"},\"name\":{\"example\":\"project\",\"type\":\"string\"},\"parent_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"path\":{\"example\":\"my_project\",\"type\":\"string\"},\"plan\":{\"example\":\"default\",\"type\":\"string\"},\"projects_count\":{\"example\":123,\"format\":\"int32\",\"type\":\"integer\"},\"root_repository_size\":{\"example\":123,\"format\":\"int32\",\"type\":\"integer\"},\"seats_in_use\":{\"example\":5,\"format\":\"int32\",\"type\":\"integer\"},\"shared_runners_minutes_limit\":{\"example\":133,\"format\":\"int32\",\"type\":\"integer\"},\"trial\":{\"type\":\"boolean\"},\"trial_ends_on\":{\"example\":\"2022-06-18\",\"format\":\"date\",\"type\":\"string\"},\"web_url\":{\"example\":\"https://example.com/group/my_project\",\"type\":\"string\"}},\"type\":\"object\"}},\"401\":{\"description\":\"Unauthorized\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/namespaces/{id}","segments":[{"lit":"api"},{"lit":"v4"},{"lit":"namespaces"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"kind":"query","name":"put_api_v4_namespaces_id","orig":"put_api_v4_namespaces_id","reqd":true,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"PUT /api/v4/namespaces/{id}","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"putApiV4NamespacesId\",\"parameters\":[{\"format\":\"int32\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"integer\"},{\"in\":\"body\",\"name\":\"putApiV4NamespacesId\",\"required\":true,\"schema\":{\"description\":\"[DEPRECATED] Update a namespace\",\"properties\":{\"additional_purchased_storage_ends_on\":{\"description\":\"End of subscription of the additional purchased storage\",\"format\":\"date\",\"type\":\"string\"},\"additional_purchased_storage_size\":{\"description\":\"Additional storage size for this namespace\",\"format\":\"int32\",\"type\":\"integer\"},\"extra_shared_runners_minutes_limit\":{\"description\":\"Extra compute minutes for this namespace\",\"format\":\"int32\",\"type\":\"integer\"},\"gitlab_subscription_attributes\":{\"properties\":{\"auto_renew\":{\"description\":\"Whether subscription will auto renew on end date\",\"type\":\"boolean\"},\"end_date\":{\"description\":\"End date of subscription\",\"format\":\"date\",\"type\":\"string\"},\"max_seats_used\":{\"description\":\"Highest number of active users in the last month\",\"format\":\"int32\",\"type\":\"integer\"},\"plan_code\":{\"description\":\"Subscription tier code\",\"type\":\"string\"},\"seats\":{\"description\":\"Number of seats in subscription\",\"format\":\"int32\",\"type\":\"integer\"},\"start_date\":{\"description\":\"Start date of subscription\",\"format\":\"date\",\"type\":\"string\"},\"trial\":{\"description\":\"Whether the subscription is a trial\",\"type\":\"boolean\"},\"trial_ends_on\":{\"description\":\"End date of trial\",\"format\":\"date\",\"type\":\"string\"},\"trial_extension_type\":{\"description\":\"Whether subscription is an extended or reactivated trial\",\"format\":\"int32\",\"type\":\"integer\"},\"trial_starts_on\":{\"description\":\"Start date of trial\",\"format\":\"date\",\"type\":\"string\"}},\"type\":\"object\"},\"shared_runners_minutes_limit\":{\"description\":\"Compute minutes quota for this namespace\",\"format\":\"int32\",\"type\":\"integer\"}},\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"[DEPRECATED] Update a namespace\",\"schema\":{\"description\":\"API_Entities_Namespace model\",\"properties\":{\"additional_purchased_storage_ends_on\":{\"example\":\"2022-06-18\",\"format\":\"date\",\"type\":\"string\"},\"additional_purchased_storage_size\":{\"example\":1000,\"format\":\"int32\",\"type\":\"integer\"},\"avatar_url\":{\"example\":\"https://example.com/avatar/12345\",\"type\":\"string\"},\"billable_members_count\":{\"example\":2,\"format\":\"int32\",\"type\":\"integer\"},\"end_date\":{\"example\":\"2022-06-18\",\"format\":\"date\",\"type\":\"string\"},\"extra_shared_runners_minutes_limit\":{\"example\":133,\"format\":\"int32\",\"type\":\"integer\"},\"full_path\":{\"example\":\"group/my_project\",\"type\":\"string\"},\"id\":{\"example\":2,\"format\":\"int32\",\"type\":\"integer\"},\"kind\":{\"example\":\"project\",\"type\":\"string\"},\"max_seats_used\":{\"example\":100,\"format\":\"int32\",\"type\":\"integer\"},\"max_seats_used_changed_at\":{\"example\":\"2022-06-18\",\"format\":\"date\",\"type\":\"string\"},\"members_count_with_descendants\":{\"example\":5,\"format\":\"int32\",\"type\":\"integer\"},\"name\":{\"example\":\"project\",\"type\":\"string\"},\"parent_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"path\":{\"example\":\"my_project\",\"type\":\"string\"},\"plan\":{\"example\":\"default\",\"type\":\"string\"},\"projects_count\":{\"example\":123,\"format\":\"int32\",\"type\":\"integer\"},\"root_repository_size\":{\"example\":123,\"format\":\"int32\",\"type\":\"integer\"},\"seats_in_use\":{\"example\":5,\"format\":\"int32\",\"type\":\"integer\"},\"shared_runners_minutes_limit\":{\"example\":133,\"format\":\"int32\",\"type\":\"integer\"},\"trial\":{\"type\":\"boolean\"},\"trial_ends_on\":{\"example\":\"2022-06-18\",\"format\":\"date\",\"type\":\"string\"},\"web_url\":{\"example\":\"https://example.com/group/my_project\",\"type\":\"string\"}},\"type\":\"object\"}}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"PUT","orig":"/api/v4/namespaces/{id}","segments":[{"lit":"api"},{"lit":"v4"},{"lit":"namespaces"},{"var":"id"}],"select":{"exist":["id","put_api_v4_namespaces_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"api_entities_namespace","name__orig":"api_entities_namespace","Name":"ApiEntitiesNamespace","name_":"api_entities_namespace","name-":"api-entities-namespace","NAME":"API_ENTITIES_NAMESPACE","index$":101}, {"active":true,"entity":"api_entities_namespace","key$":"BasicApiEntitiesNamespaceFlow","kind":"basic","name":"BasicApiEntitiesNamespaceFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"api_entities_namespace_ref01"}}],"index$":0},{"active":true,"data":{},"input":{"ref":"api_entities_namespace_ref01","srcdatavar":"api_entities_namespace_ref01_data","suffix":"_up0","textfield":"additional_purchased_storage_ends_on"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_namespace_ref01"}}],"valid":[],"index$":1},{"active":true,"data":{},"input":{"ref":"api_entities_namespace_ref01","srcdatavar":"api_entities_namespace_ref01_data","suffix":"_dt0"},"match":{"id":"api_entities_namespace01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_namespace_ref01"}}],"index$":2}]}, 'ApiEntitiesNamespace')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let api_entities_namespace_ref01_data = Object.values(setup.data.existing.api_entities_namespace)[0] as any

    // LIST
    const api_entities_namespace_ref01_ent = client.ApiEntitiesNamespace()
    const api_entities_namespace_ref01_match: any = {}

    const api_entities_namespace_ref01_list = (await api_entities_namespace_ref01_ent.list(api_entities_namespace_ref01_match)).map((e: any) => e.data())


    // UPDATE
    const api_entities_namespace_ref01_data_up0: any = {}
    api_entities_namespace_ref01_data_up0.id = api_entities_namespace_ref01_data.id

    const api_entities_namespace_ref01_markdef_up0 = { name: 'additional_purchased_storage_ends_on', value: 'Mark01-api_entities_namespace_ref01_' + setup.now }
    ;(api_entities_namespace_ref01_data_up0 as any)[api_entities_namespace_ref01_markdef_up0.name] = api_entities_namespace_ref01_markdef_up0.value

    const api_entities_namespace_ref01_resdata_up0 = (await api_entities_namespace_ref01_ent.update(api_entities_namespace_ref01_data_up0)).data()
    assert(api_entities_namespace_ref01_resdata_up0.id === api_entities_namespace_ref01_data_up0.id)

    assert((api_entities_namespace_ref01_resdata_up0 as any)[api_entities_namespace_ref01_markdef_up0.name] === api_entities_namespace_ref01_markdef_up0.value)


    // LOAD
    const api_entities_namespace_ref01_match_dt0: any = {}
    api_entities_namespace_ref01_match_dt0.id = api_entities_namespace_ref01_data.id
    const api_entities_namespace_ref01_data_dt0 = (await api_entities_namespace_ref01_ent.load(api_entities_namespace_ref01_match_dt0)).data()
    assert(api_entities_namespace_ref01_data_dt0.id === api_entities_namespace_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_namespace/ApiEntitiesNamespaceTestData.json')

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
    ['api_entities_namespace01','api_entities_namespace02','api_entities_namespace03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_NAMESPACE_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_NAMESPACE_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_NAMESPACE_ENTID']
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
  
