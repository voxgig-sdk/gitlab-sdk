

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"additional_purchased_storage_ends_on":{"a":true,"fo":"date","h":"Additional Purchased Storage Ends On","n":"additional_purchased_storage_ends_on","r":false,"t":"`$STRING`","key$":"additional_purchased_storage_ends_on","index$":0},"additional_purchased_storage_size":{"a":true,"fo":"int32","h":"Additional Purchased Storage Size","n":"additional_purchased_storage_size","r":false,"t":"`$INTEGER`","key$":"additional_purchased_storage_size","index$":1},"avatar_url":{"a":true,"h":"Avatar Url","n":"avatar_url","r":false,"t":"`$STRING`","key$":"avatar_url","index$":2},"billable_members_count":{"a":true,"fo":"int32","h":"Billable Members Count","n":"billable_members_count","r":false,"t":"`$INTEGER`","key$":"billable_members_count","index$":3},"end_date":{"a":true,"fo":"date","h":"End Date","n":"end_date","r":false,"t":"`$STRING`","key$":"end_date","index$":4},"extra_shared_runners_minutes_limit":{"a":true,"fo":"int32","h":"Extra Shared Runners Minutes Limit","n":"extra_shared_runners_minutes_limit","r":false,"t":"`$INTEGER`","key$":"extra_shared_runners_minutes_limit","index$":5},"full_path":{"a":true,"h":"Full Path","n":"full_path","r":false,"t":"`$STRING`","key$":"full_path","index$":6},"id":{"a":true,"fo":"int32","h":"Id","n":"id","r":false,"t":"`$INTEGER`","key$":"id","index$":7},"kind":{"a":true,"h":"Kind","n":"kind","r":false,"t":"`$STRING`","key$":"kind","index$":8},"max_seats_used":{"a":true,"fo":"int32","h":"Max Seats Used","n":"max_seats_used","r":false,"t":"`$INTEGER`","key$":"max_seats_used","index$":9},"max_seats_used_changed_at":{"a":true,"fo":"date","h":"Max Seats Used Changed At","n":"max_seats_used_changed_at","r":false,"t":"`$STRING`","key$":"max_seats_used_changed_at","index$":10},"members_count_with_descendants":{"a":true,"fo":"int32","h":"Members Count With Descendants","n":"members_count_with_descendants","r":false,"t":"`$INTEGER`","key$":"members_count_with_descendants","index$":11},"name":{"a":true,"h":"Name","n":"name","r":false,"t":"`$STRING`","key$":"name","index$":12},"parent_id":{"a":true,"fo":"int32","h":"Parent Id","n":"parent_id","r":false,"t":"`$INTEGER`","key$":"parent_id","index$":13},"path":{"a":true,"h":"Path","n":"path","r":false,"t":"`$STRING`","key$":"path","index$":14},"plan":{"a":true,"h":"Plan","n":"plan","r":false,"t":"`$STRING`","key$":"plan","index$":15},"projects_count":{"a":true,"fo":"int32","h":"Projects Count","n":"projects_count","r":false,"t":"`$INTEGER`","key$":"projects_count","index$":16},"root_repository_size":{"a":true,"fo":"int32","h":"Root Repository Size","n":"root_repository_size","r":false,"t":"`$INTEGER`","key$":"root_repository_size","index$":17},"seats_in_use":{"a":true,"fo":"int32","h":"Seats In Use","n":"seats_in_use","r":false,"t":"`$INTEGER`","key$":"seats_in_use","index$":18},"shared_runners_minutes_limit":{"a":true,"fo":"int32","h":"Shared Runners Minutes Limit","n":"shared_runners_minutes_limit","r":false,"t":"`$INTEGER`","key$":"shared_runners_minutes_limit","index$":19},"trial":{"a":true,"h":"Trial","n":"trial","r":false,"t":"`$BOOLEAN`","key$":"trial","index$":20},"trial_ends_on":{"a":true,"fo":"date","h":"Trial Ends On","n":"trial_ends_on","r":false,"t":"`$STRING`","key$":"trial_ends_on","index$":21},"web_url":{"a":true,"h":"Web Url","n":"web_url","r":false,"t":"`$STRING`","key$":"web_url","index$":22}},"id":{"field":"id","name":"id"},"name":"api_entities_namespace","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/v4/namespaces","source":"swagger2","version":2},"g":{"query":[{"a":true,"k":"query","n":"full_path_search","or":"full_path_search","r":false,"t":"`$ANY`","index$":0},{"a":true,"k":"query","n":"owned_only","or":"owned_only","r":false,"t":"`$ANY`","index$":1},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"ex":20,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":3},{"a":true,"k":"query","n":"requested_hosted_plan","or":"requested_hosted_plan","r":false,"t":"`$ANY`","index$":4},{"a":true,"k":"query","n":"search","or":"search","r":false,"t":"`$ANY`","index$":5},{"a":true,"k":"query","n":"top_level_only","or":"top_level_only","r":false,"t":"`$ANY`","index$":6}]},"k":"http","m":"GET","o":"/api/v4/namespaces","q":{"exist":["full_path_search","owned_only","page","per_page","requested_hosted_plan","search","top_level_only"]},"r":{},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"namespaces"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v4/namespaces/{id}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/v4/namespaces/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"namespaces"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /api/v4/namespaces/{id}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"put_api_v4_namespaces_id","or":"put_api_v4_namespaces_id","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"PUT","o":"/api/v4/namespaces/{id}","q":{"exist":["id","put_api_v4_namespaces_id"]},"r":{},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"namespaces"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"api_entities_namespace","name__orig":"api_entities_namespace","Name":"ApiEntitiesNamespace","name_":"api_entities_namespace","name-":"api-entities-namespace","NAME":"API_ENTITIES_NAMESPACE","index$":101}, {"active":true,"entity":"api_entities_namespace","key$":"BasicApiEntitiesNamespaceFlow","kind":"basic","name":"BasicApiEntitiesNamespaceFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"api_entities_namespace_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"api_entities_namespace_ref01","srcdatavar":"api_entities_namespace_ref01_data","suffix":"_up0","textfield":"additional_purchased_storage_ends_on"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_namespace_ref01"}}],"v":[],"index$":1},{"a":true,"d":{},"i":{"ref":"api_entities_namespace_ref01","srcdatavar":"api_entities_namespace_ref01_data","suffix":"_dt0"},"m":{"id":"api_entities_namespace01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_namespace_ref01"}}],"index$":2}]}, 'ApiEntitiesNamespace', {"GET /api/v4/namespaces":{"protocol":"http","parameters":[{"in":"query","name":"search","description":"Returns a list of namespaces the user is authorized to view based on the search criteria","type":"string","required":false,"index$":0},{"in":"query","name":"owned_only","description":"In GitLab 14.2 and later, returns a list of owned namespaces only","type":"boolean","required":false,"index$":1},{"in":"query","name":"top_level_only","description":"Only include top level namespaces","type":"boolean","default":false,"required":false,"index$":2},{"in":"query","name":"full_path_search","description":"If `true`, the `search` parameter is matched against the full path of the namespaces","type":"boolean","default":false,"required":false,"index$":3},{"in":"query","name":"page","description":"Current page number","type":"integer","format":"int32","default":1,"required":false,"example":1,"index$":4},{"in":"query","name":"per_page","description":"Number of items per page","type":"integer","format":"int32","default":20,"required":false,"example":20,"index$":5},{"in":"query","name":"requested_hosted_plan","description":"Name of the hosted plan requested by the customer","type":"string","required":false,"index$":6}]},"GET /api/v4/namespaces/{id}":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"ID or URL-encoded path of the namespace","type":"string","required":true,"index$":0}]},"PUT /api/v4/namespaces/{id}":{"protocol":"http","parameters":[{"in":"path","name":"id","type":"integer","format":"int32","required":true,"index$":0},{"name":"putApiV4NamespacesId","in":"body","required":true,"schema":{"type":"object","properties":{"shared_runners_minutes_limit":{"type":"integer","format":"int32","description":"Compute minutes quota for this namespace"},"extra_shared_runners_minutes_limit":{"type":"integer","format":"int32","description":"Extra compute minutes for this namespace"},"additional_purchased_storage_size":{"type":"integer","format":"int32","description":"Additional storage size for this namespace"},"additional_purchased_storage_ends_on":{"type":"string","format":"date","description":"End of subscription of the additional purchased storage"},"gitlab_subscription_attributes":{"type":"object","properties":{"start_date":{"type":"string","format":"date","description":"Start date of subscription"},"seats":{"type":"integer","format":"int32","description":"Number of seats in subscription"},"max_seats_used":{"type":"integer","format":"int32","description":"Highest number of active users in the last month"},"plan_code":{"type":"string","description":"Subscription tier code"},"end_date":{"type":"string","format":"date","description":"End date of subscription"},"auto_renew":{"type":"boolean","description":"Whether subscription will auto renew on end date"},"trial":{"type":"boolean","description":"Whether the subscription is a trial"},"trial_ends_on":{"type":"string","format":"date","description":"End date of trial"},"trial_starts_on":{"type":"string","format":"date","description":"Start date of trial"},"trial_extension_type":{"type":"integer","format":"int32","description":"Whether subscription is an extended or reactivated trial"}}}},"description":"[DEPRECATED] Update a namespace","x-ref":"#/definitions/putApiV4NamespacesId"},"index$":1}]}})
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
  
