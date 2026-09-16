

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


describe('ApiEntitiesBulkImportsExportStatusEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesBulkImportsExportStatus()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_bulk_imports_export_status.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"batched","req":false,"type":"`$BOOLEAN`","index$":0},{"active":true,"name":"batches","req":false,"type":"`$OBJECT`","index$":1},{"active":true,"format":"int32","name":"batches_count","req":false,"type":"`$INTEGER`","index$":2},{"active":true,"name":"error","req":false,"type":"`$STRING`","index$":3},{"active":true,"name":"relation","req":false,"type":"`$STRING`","index$":4},{"active":true,"name":"status","req":false,"type":"`$STRING`","index$":5},{"active":true,"format":"int32","name":"total_objects_count","req":false,"type":"`$INTEGER`","index$":6},{"active":true,"format":"date-time","name":"updated_at","req":false,"type":"`$STRING`","index$":7}],"name":"api_entities_bulk_imports_export_status","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"group_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"kind":"query","name":"relation","orig":"relation","reqd":false,"type":"`$ANY`","index$":0}]},"contract":{"id":"GET /api/v4/groups/{id}/export_relations/status","json":"{\"operationId\":\"getApiV4GroupsIdExportRelationsStatus\",\"parameters\":[{\"description\":\"The ID of a group\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"Group relation name\",\"in\":\"query\",\"name\":\"relation\",\"required\":false,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Relations export status\",\"schema\":{\"items\":{\"description\":\"API_Entities_BulkImports_ExportStatus model\",\"properties\":{\"batched\":{\"example\":true,\"type\":\"boolean\"},\"batches\":{\"properties\":{\"batch_number\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"error\":{\"example\":\"Error message\",\"type\":\"string\"},\"objects_count\":{\"example\":100,\"format\":\"int32\",\"type\":\"integer\"},\"status\":{\"enum\":[\"started\",\"finished\",\"failed\"],\"example\":\"started\",\"type\":\"string\"},\"updated_at\":{\"example\":\"2012-05-28T04:42:42-07:00\",\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"},\"batches_count\":{\"example\":2,\"format\":\"int32\",\"type\":\"integer\"},\"error\":{\"example\":\"Error message\",\"type\":\"string\"},\"relation\":{\"example\":\"issues\",\"type\":\"string\"},\"status\":{\"enum\":[\"started\",\"finished\",\"failed\"],\"example\":\"started\",\"type\":\"string\"},\"total_objects_count\":{\"example\":100,\"format\":\"int32\",\"type\":\"integer\"},\"updated_at\":{\"example\":\"2012-05-28T04:42:42-07:00\",\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not found\"},\"503\":{\"description\":\"Service unavailable\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/groups/{id}/export_relations/status","rename":{"param":{"id":"group_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"groups"},{"var":"group_id"},{"lit":"export_relations"},{"lit":"status"}],"select":{"exist":["group_id","relation"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"kind":"query","name":"relation","orig":"relation","reqd":false,"type":"`$ANY`","index$":0}]},"contract":{"id":"GET /api/v4/projects/{id}/export_relations/status","json":"{\"operationId\":\"getApiV4ProjectsIdExportRelationsStatus\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"Project relation name\",\"in\":\"query\",\"name\":\"relation\",\"required\":false,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Relations export status\",\"schema\":{\"items\":{\"description\":\"API_Entities_BulkImports_ExportStatus model\",\"properties\":{\"batched\":{\"example\":true,\"type\":\"boolean\"},\"batches\":{\"properties\":{\"batch_number\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"error\":{\"example\":\"Error message\",\"type\":\"string\"},\"objects_count\":{\"example\":100,\"format\":\"int32\",\"type\":\"integer\"},\"status\":{\"enum\":[\"started\",\"finished\",\"failed\"],\"example\":\"started\",\"type\":\"string\"},\"updated_at\":{\"example\":\"2012-05-28T04:42:42-07:00\",\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"},\"batches_count\":{\"example\":2,\"format\":\"int32\",\"type\":\"integer\"},\"error\":{\"example\":\"Error message\",\"type\":\"string\"},\"relation\":{\"example\":\"issues\",\"type\":\"string\"},\"status\":{\"enum\":[\"started\",\"finished\",\"failed\"],\"example\":\"started\",\"type\":\"string\"},\"total_objects_count\":{\"example\":100,\"format\":\"int32\",\"type\":\"integer\"},\"updated_at\":{\"example\":\"2012-05-28T04:42:42-07:00\",\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not found\"},\"503\":{\"description\":\"Service unavailable\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/projects/{id}/export_relations/status","rename":{"param":{"id":"project_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"export_relations"},{"lit":"status"}],"select":{"exist":["project_id","relation"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"list"}},"relations":{"ancestors":[["group"],["project"]]},"key$":"api_entities_bulk_imports_export_status","name__orig":"api_entities_bulk_imports_export_status","Name":"ApiEntitiesBulkImportsExportStatus","name_":"api_entities_bulk_imports_export_status","name-":"api-entities-bulk-imports-export-status","NAME":"API_ENTITIES_BULK_IMPORTS_EXPORT_STATUS","index$":19}, {"active":true,"entity":"api_entities_bulk_imports_export_status","key$":"BasicApiEntitiesBulkImportsExportStatusFlow","kind":"basic","name":"BasicApiEntitiesBulkImportsExportStatusFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{"project_id":"project01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"api_entities_bulk_imports_export_status_ref01"}}],"index$":0}]}, 'ApiEntitiesBulkImportsExportStatus')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let api_entities_bulk_imports_export_status_ref01_data = Object.values(setup.data.existing.api_entities_bulk_imports_export_status)[0] as any

    // LIST
    const api_entities_bulk_imports_export_status_ref01_ent = client.ApiEntitiesBulkImportsExportStatus()
    const api_entities_bulk_imports_export_status_ref01_match: any = {}
    api_entities_bulk_imports_export_status_ref01_match['project_id'] = setup.idmap['project01']

    const api_entities_bulk_imports_export_status_ref01_list = (await api_entities_bulk_imports_export_status_ref01_ent.list(api_entities_bulk_imports_export_status_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_bulk_imports_export_status/ApiEntitiesBulkImportsExportStatusTestData.json')

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
    ['api_entities_bulk_imports_export_status01','api_entities_bulk_imports_export_status02','api_entities_bulk_imports_export_status03','group01','group02','group03','project01','project02','project03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_BULK_IMPORTS_EXPORT_STATUS_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_BULK_IMPORTS_EXPORT_STATUS_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_BULK_IMPORTS_EXPORT_STATUS_ENTID']
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
  
