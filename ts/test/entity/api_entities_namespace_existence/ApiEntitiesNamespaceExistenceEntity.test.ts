

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


describe('ApiEntitiesNamespaceExistenceEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesNamespaceExistence()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_namespace_existence.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"exists","req":false,"type":"`$BOOLEAN`","index$":0},{"active":true,"name":"suggests","req":false,"type":"`$ARRAY`","index$":1}],"name":"api_entities_namespace_existence","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"namespace_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"kind":"query","name":"parent_id","orig":"parent_id","reqd":false,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /api/v4/namespaces/{id}/exists","json":"{\"operationId\":\"getApiV4NamespacesIdExists\",\"parameters\":[{\"description\":\"Namespace’s path\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The ID of the parent namespace. If no ID is specified, only top-level namespaces are considered.\",\"format\":\"int32\",\"in\":\"query\",\"name\":\"parent_id\",\"required\":false,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get existence of a namespace\",\"schema\":{\"description\":\"API_Entities_NamespaceExistence model\",\"properties\":{\"exists\":{\"type\":\"boolean\"},\"suggests\":{\"example\":\"my-group1\",\"items\":{\"type\":\"string\"},\"type\":\"array\"}},\"type\":\"object\"}},\"401\":{\"description\":\"Unauthorized\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/namespaces/{id}/exists","rename":{"param":{"id":"namespace_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"namespaces"},{"var":"namespace_id"},{"lit":"exists"}],"select":{"exist":["namespace_id","parent_id"]},"transform":{"req":"`reqdata`","res":"`body.suggests`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["namespace"]]},"key$":"api_entities_namespace_existence","name__orig":"api_entities_namespace_existence","Name":"ApiEntitiesNamespaceExistence","name_":"api_entities_namespace_existence","name-":"api-entities-namespace-existence","NAME":"API_ENTITIES_NAMESPACE_EXISTENCE","index$":102}, {"active":true,"entity":"api_entities_namespace_existence","key$":"BasicApiEntitiesNamespaceExistenceFlow","kind":"basic","name":"BasicApiEntitiesNamespaceExistenceFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{"namespace_id":"namespace01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"api_entities_namespace_existence_ref01"}}],"index$":0}]}, 'ApiEntitiesNamespaceExistence')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let api_entities_namespace_existence_ref01_data = Object.values(setup.data.existing.api_entities_namespace_existence)[0] as any

    // LIST
    const api_entities_namespace_existence_ref01_ent = client.ApiEntitiesNamespaceExistence()
    const api_entities_namespace_existence_ref01_match: any = {}
    api_entities_namespace_existence_ref01_match['namespace_id'] = setup.idmap['namespace01']

    const api_entities_namespace_existence_ref01_list = (await api_entities_namespace_existence_ref01_ent.list(api_entities_namespace_existence_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_namespace_existence/ApiEntitiesNamespaceExistenceTestData.json')

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
    ['api_entities_namespace_existence01','api_entities_namespace_existence02','api_entities_namespace_existence03','namespace01','namespace02','namespace03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_NAMESPACE_EXISTENCE_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_NAMESPACE_EXISTENCE_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_NAMESPACE_EXISTENCE_ENTID']
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
  
