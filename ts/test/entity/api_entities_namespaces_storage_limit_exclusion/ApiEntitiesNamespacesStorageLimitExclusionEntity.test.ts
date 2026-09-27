

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


describe('ApiEntitiesNamespacesStorageLimitExclusionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesNamespacesStorageLimitExclusion()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['create', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_namespaces_storage_limit_exclusion.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"fo":"int32","h":"Id","n":"id","r":false,"t":"`$INTEGER`","key$":"id","index$":0},"namespace_id":{"a":true,"fo":"int32","h":"Namespace Id","n":"namespace_id","r":false,"t":"`$INTEGER`","key$":"namespace_id","index$":1},"namespace_name":{"a":true,"h":"Namespace Name","n":"namespace_name","r":false,"t":"`$STRING`","key$":"namespace_name","index$":2},"reason":{"a":true,"h":"Reason","n":"reason","r":false,"t":"`$STRING`","key$":"reason","index$":3}},"id":{"field":"id","name":"id"},"name":"api_entities_namespaces_storage_limit_exclusion","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/v4/namespaces/{id}/storage/limit_exclusion","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"namespace_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"post_api_v4_namespaces_id_storage_limit_exclusion","or":"post_api_v4_namespaces_id_storage_limit_exclusion","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"POST","o":"/api/v4/namespaces/{id}/storage/limit_exclusion","q":{"exist":["namespace_id","post_api_v4_namespaces_id_storage_limit_exclusion"]},"r":{"param":{"id":"namespace_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"namespaces"},{"var":"namespace_id"},{"lit":"storage"},{"lit":"limit_exclusion"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v4/namespaces/storage/limit_exclusions","source":"swagger2","version":2},"g":{"query":[{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":20,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/api/v4/namespaces/storage/limit_exclusions","q":{"exist":["page","per_page"]},"r":{},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"namespaces"},{"lit":"storage"},{"lit":"limit_exclusions"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.namespace"]]},"key$":"api_entities_namespaces_storage_limit_exclusion","name__orig":"api_entities_namespaces_storage_limit_exclusion","Name":"ApiEntitiesNamespacesStorageLimitExclusion","name_":"api_entities_namespaces_storage_limit_exclusion","name-":"api-entities-namespaces-storage-limit-exclusion","NAME":"API_ENTITIES_NAMESPACES_STORAGE_LIMIT_EXCLUSION","index$":103}, {"active":true,"entity":"api_entities_namespaces_storage_limit_exclusion","key$":"BasicApiEntitiesNamespacesStorageLimitExclusionFlow","kind":"basic","name":"BasicApiEntitiesNamespacesStorageLimitExclusionFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"api_entities_namespaces_storage_limit_exclusion_ref01"},"m":{"namespace_id":"namespace01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"api_entities_namespaces_storage_limit_exclusion_ref01","srcdatavar":"api_entities_namespaces_storage_limit_exclusion_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_namespaces_storage_limit_exclusion_ref01"}}],"index$":1}]}, 'ApiEntitiesNamespacesStorageLimitExclusion', {"POST /api/v4/namespaces/{id}/storage/limit_exclusion":{"protocol":"http","parameters":[{"in":"path","name":"id","type":"integer","format":"int32","required":true,"index$":0},{"name":"postApiV4NamespacesIdStorageLimitExclusion","in":"body","required":true,"schema":{"type":"object","properties":{"reason":{"type":"string","description":"The reason the Namespace is being excluded"}},"required":["reason"],"description":"Creates a storage limit exclusion for a Namespace","x-ref":"#/definitions/postApiV4NamespacesIdStorageLimitExclusion"},"index$":1}]},"GET /api/v4/namespaces/storage/limit_exclusions":{"protocol":"http","parameters":[{"in":"query","name":"page","description":"Current page number","type":"integer","format":"int32","default":1,"required":false,"example":1,"index$":0},{"in":"query","name":"per_page","description":"Number of items per page","type":"integer","format":"int32","default":20,"required":false,"example":20,"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const api_entities_namespaces_storage_limit_exclusion_ref01_ent = client.ApiEntitiesNamespacesStorageLimitExclusion()
    let api_entities_namespaces_storage_limit_exclusion_ref01_data = setup.data.new.api_entities_namespaces_storage_limit_exclusion['api_entities_namespaces_storage_limit_exclusion_ref01']
    api_entities_namespaces_storage_limit_exclusion_ref01_data['namespace_id'] = setup.idmap['namespace01']

    api_entities_namespaces_storage_limit_exclusion_ref01_data = (await api_entities_namespaces_storage_limit_exclusion_ref01_ent.create(api_entities_namespaces_storage_limit_exclusion_ref01_data)).data()
    assert(null != api_entities_namespaces_storage_limit_exclusion_ref01_data.id)


    // LOAD
    const api_entities_namespaces_storage_limit_exclusion_ref01_match_dt0: any = {}
    api_entities_namespaces_storage_limit_exclusion_ref01_match_dt0.id = api_entities_namespaces_storage_limit_exclusion_ref01_data.id
    const api_entities_namespaces_storage_limit_exclusion_ref01_data_dt0 = (await api_entities_namespaces_storage_limit_exclusion_ref01_ent.load(api_entities_namespaces_storage_limit_exclusion_ref01_match_dt0)).data()
    assert(api_entities_namespaces_storage_limit_exclusion_ref01_data_dt0.id === api_entities_namespaces_storage_limit_exclusion_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_namespaces_storage_limit_exclusion/ApiEntitiesNamespacesStorageLimitExclusionTestData.json')

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
    ['api_entities_namespaces_storage_limit_exclusion01','api_entities_namespaces_storage_limit_exclusion02','api_entities_namespaces_storage_limit_exclusion03','namespace01','namespace02','namespace03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_NAMESPACES_STORAGE_LIMIT_EXCLUSION_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_NAMESPACES_STORAGE_LIMIT_EXCLUSION_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_NAMESPACES_STORAGE_LIMIT_EXCLUSION_ENTID']
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
  
