

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


describe('ApiEntitiesRepositoryHealthEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesRepositoryHealth()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_repository_health.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"alternates","req":false,"type":"`$OBJECT`","index$":0},{"active":true,"name":"bitmap","req":false,"type":"`$OBJECT`","index$":1},{"active":true,"name":"commit_graph","req":false,"type":"`$OBJECT`","index$":2},{"active":true,"name":"is_object_pool","req":false,"type":"`$BOOLEAN`","index$":3},{"active":true,"name":"last_full_repack","req":false,"type":"`$OBJECT`","index$":4},{"active":true,"name":"multi_pack_index","req":false,"type":"`$OBJECT`","index$":5},{"active":true,"name":"multi_pack_index_bitmap","req":false,"type":"`$OBJECT`","index$":6},{"active":true,"name":"objects","req":false,"type":"`$OBJECT`","index$":7},{"active":true,"name":"references","req":false,"type":"`$OBJECT`","index$":8},{"active":true,"format":"int32","name":"size","req":false,"type":"`$INTEGER`","index$":9},{"active":true,"format":"date-time","name":"updated_at","req":false,"type":"`$STRING`","index$":10}],"name":"api_entities_repository_health","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"example":1,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"kind":"query","name":"generate","orig":"generate","reqd":false,"type":"`$ANY`","index$":0}]},"contract":{"id":"GET /api/v4/projects/{id}/repository/health","json":"{\"operationId\":\"getApiV4ProjectsIdRepositoryHealth\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"example\":1,\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"default\":false,\"description\":\"Triggers a new health report to be generated\",\"in\":\"query\",\"name\":\"generate\",\"required\":false,\"type\":\"boolean\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get repository health\",\"schema\":{\"description\":\"API_Entities_RepositoryHealth model\",\"properties\":{\"alternates\":{\"type\":\"object\"},\"bitmap\":{\"properties\":{\"has_hash_cache\":{\"type\":\"boolean\"},\"has_lookup_table\":{\"type\":\"boolean\"},\"version\":{\"format\":\"int32\",\"type\":\"integer\"}},\"type\":\"object\"},\"commit_graph\":{\"properties\":{\"commit_graph_chain_length\":{\"format\":\"int32\",\"type\":\"integer\"},\"has_bloom_filters\":{\"type\":\"boolean\"},\"has_generation_data\":{\"type\":\"boolean\"},\"has_generation_data_overflow\":{\"type\":\"boolean\"}},\"type\":\"object\"},\"is_object_pool\":{\"type\":\"boolean\"},\"last_full_repack\":{\"properties\":{\"nanos\":{\"format\":\"int32\",\"type\":\"integer\"},\"seconds\":{\"format\":\"int32\",\"type\":\"integer\"}},\"type\":\"object\"},\"multi_pack_index\":{\"properties\":{\"packfile_count\":{\"format\":\"int32\",\"type\":\"integer\"},\"version\":{\"format\":\"int32\",\"type\":\"integer\"}},\"type\":\"object\"},\"multi_pack_index_bitmap\":{\"properties\":{\"has_hash_cache\":{\"type\":\"boolean\"},\"has_lookup_table\":{\"type\":\"boolean\"},\"version\":{\"format\":\"int32\",\"type\":\"integer\"}},\"type\":\"object\"},\"objects\":{\"properties\":{\"cruft_count\":{\"format\":\"int32\",\"type\":\"integer\"},\"keep_count\":{\"format\":\"int32\",\"type\":\"integer\"},\"keep_size\":{\"format\":\"int32\",\"type\":\"integer\"},\"loose_objects_count\":{\"format\":\"int32\",\"type\":\"integer\"},\"loose_objects_garbage_count\":{\"format\":\"int32\",\"type\":\"integer\"},\"packfile_count\":{\"format\":\"int32\",\"type\":\"integer\"},\"recent_size\":{\"format\":\"int32\",\"type\":\"integer\"},\"reverse_index_count\":{\"format\":\"int32\",\"type\":\"integer\"},\"size\":{\"format\":\"int32\",\"type\":\"integer\"},\"stale_loose_objects_count\":{\"format\":\"int32\",\"type\":\"integer\"},\"stale_size\":{\"format\":\"int32\",\"type\":\"integer\"}},\"type\":\"object\"},\"references\":{\"properties\":{\"loose_count\":{\"format\":\"int32\",\"type\":\"integer\"},\"packed_size\":{\"format\":\"int32\",\"type\":\"integer\"},\"reference_backend\":{\"type\":\"string\"}},\"type\":\"object\"},\"size\":{\"format\":\"int32\",\"type\":\"integer\"},\"updated_at\":{\"example\":\"2025-02-24T09:05:50.355Z\",\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"}}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/projects/{id}/repository/health","rename":{"param":{"id":"project_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"repository"},{"lit":"health"}],"select":{"exist":["generate","project_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["project"]]},"key$":"api_entities_repository_health","name__orig":"api_entities_repository_health","Name":"ApiEntitiesRepositoryHealth","name_":"api_entities_repository_health","name-":"api-entities-repository-health","NAME":"API_ENTITIES_REPOSITORY_HEALTH","index$":152}, {"active":true,"entity":"api_entities_repository_health","key$":"BasicApiEntitiesRepositoryHealthFlow","kind":"basic","name":"BasicApiEntitiesRepositoryHealthFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"api_entities_repository_health_ref01","srcdatavar":"api_entities_repository_health_ref01_data","suffix":"_dt0"},"match":{"id":"api_entities_repository_health01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_repository_health_ref01"}}],"index$":0}]}, 'ApiEntitiesRepositoryHealth')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let api_entities_repository_health_ref01_data = Object.values(setup.data.existing.api_entities_repository_health)[0] as any

    // LOAD: skipped — no entity id field and load requires path params.
    // Entity-var is declared here so later flow steps still compile.
    const api_entities_repository_health_ref01_ent = client.ApiEntitiesRepositoryHealth()


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_repository_health/ApiEntitiesRepositoryHealthTestData.json')

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
    ['api_entities_repository_health01','api_entities_repository_health02','api_entities_repository_health03','project01','project02','project03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_REPOSITORY_HEALTH_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_REPOSITORY_HEALTH_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_REPOSITORY_HEALTH_ENTID']
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
  
