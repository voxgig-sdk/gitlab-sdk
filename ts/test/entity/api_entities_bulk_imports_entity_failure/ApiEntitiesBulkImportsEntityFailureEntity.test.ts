

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


describe('ApiEntitiesBulkImportsEntityFailureEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesBulkImportsEntityFailure()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_bulk_imports_entity_failure.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"correlation_id_value","req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"exception_class","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"exception_message","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"relation","req":false,"type":"`$STRING`","index$":3},{"active":true,"name":"source_title","req":false,"type":"`$STRING`","index$":4},{"active":true,"name":"source_url","req":false,"type":"`$STRING`","index$":5}],"name":"api_entities_bulk_imports_entity_failure","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"bulk_import_id","orig":"import_id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"entity_id","orig":"entity_id","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"GET /api/v4/bulk_imports/{import_id}/entities/{entity_id}/failures","json":"{\"operationId\":\"getApiV4BulkImportsImportIdEntitiesEntityIdFailures\",\"parameters\":[{\"description\":\"The ID of user's GitLab Migration\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"import_id\",\"required\":true,\"type\":\"integer\"},{\"description\":\"The ID of GitLab Migration entity\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"entity_id\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get GitLab Migration entity failures\",\"schema\":{\"description\":\"API_Entities_BulkImports_EntityFailure model\",\"properties\":{\"correlation_id_value\":{\"example\":\"dfcf583058ed4508e4c7c617bd7f0edd\",\"type\":\"string\"},\"exception_class\":{\"example\":\"Exception\",\"type\":\"string\"},\"exception_message\":{\"example\":\"error message\",\"type\":\"string\"},\"relation\":{\"example\":\"label\",\"type\":\"string\"},\"source_title\":{\"example\":\"title\",\"type\":\"string\"},\"source_url\":{\"example\":\"https://source.gitlab.com/group/-/epics/1\",\"type\":\"string\"}},\"type\":\"object\"}},\"401\":{\"description\":\"Unauthorized\"},\"404\":{\"description\":\"Not found\"},\"503\":{\"description\":\"Service unavailable\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/bulk_imports/{import_id}/entities/{entity_id}/failures","rename":{"param":{"import_id":"bulk_import_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"bulk_imports"},{"var":"bulk_import_id"},{"lit":"entities"},{"var":"entity_id"},{"lit":"failures"}],"select":{"exist":["bulk_import_id","entity_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["bulk_import","entity"]]},"key$":"api_entities_bulk_imports_entity_failure","name__orig":"api_entities_bulk_imports_entity_failure","Name":"ApiEntitiesBulkImportsEntityFailure","name_":"api_entities_bulk_imports_entity_failure","name-":"api-entities-bulk-imports-entity-failure","NAME":"API_ENTITIES_BULK_IMPORTS_ENTITY_FAILURE","index$":18}, {"active":true,"entity":"api_entities_bulk_imports_entity_failure","key$":"BasicApiEntitiesBulkImportsEntityFailureFlow","kind":"basic","name":"BasicApiEntitiesBulkImportsEntityFailureFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"api_entities_bulk_imports_entity_failure_ref01","srcdatavar":"api_entities_bulk_imports_entity_failure_ref01_data","suffix":"_dt0"},"match":{"bulk_import_id":"bulk_import01","id":"api_entities_bulk_imports_entity_failure01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_bulk_imports_entity_failure_ref01"}}],"index$":0}]}, 'ApiEntitiesBulkImportsEntityFailure')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let api_entities_bulk_imports_entity_failure_ref01_data = Object.values(setup.data.existing.api_entities_bulk_imports_entity_failure)[0] as any

    // LOAD: skipped — no entity id field and load requires path params.
    // Entity-var is declared here so later flow steps still compile.
    const api_entities_bulk_imports_entity_failure_ref01_ent = client.ApiEntitiesBulkImportsEntityFailure()


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_bulk_imports_entity_failure/ApiEntitiesBulkImportsEntityFailureTestData.json')

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
    ['api_entities_bulk_imports_entity_failure01','api_entities_bulk_imports_entity_failure02','api_entities_bulk_imports_entity_failure03','bulk_import01','bulk_import02','bulk_import03','entity01','entity02','entity03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_BULK_IMPORTS_ENTITY_FAILURE_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_BULK_IMPORTS_ENTITY_FAILURE_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_BULK_IMPORTS_ENTITY_FAILURE_ENTID']
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
  
