

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"correlation_id_value":{"a":true,"h":"Correlation Id Value","n":"correlation_id_value","r":false,"t":"`$STRING`","key$":"correlation_id_value","index$":0},"exception_class":{"a":true,"h":"Exception Class","n":"exception_class","r":false,"t":"`$STRING`","key$":"exception_class","index$":1},"exception_message":{"a":true,"h":"Exception Message","n":"exception_message","r":false,"t":"`$STRING`","key$":"exception_message","index$":2},"relation":{"a":true,"h":"Relation","n":"relation","r":false,"t":"`$STRING`","key$":"relation","index$":3},"source_title":{"a":true,"h":"Source Title","n":"source_title","r":false,"t":"`$STRING`","key$":"source_title","index$":4},"source_url":{"a":true,"h":"Source Url","n":"source_url","r":false,"t":"`$STRING`","key$":"source_url","index$":5}},"name":"api_entities_bulk_imports_entity_failure","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v4/bulk_imports/{import_id}/entities/{entity_id}/failures","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"bulk_import_id","or":"import_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"entity_id","or":"entity_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/api/v4/bulk_imports/{import_id}/entities/{entity_id}/failures","q":{"exist":["bulk_import_id","entity_id"]},"r":{"param":{"import_id":"bulk_import_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"bulk_imports"},{"var":"bulk_import_id"},{"lit":"entities"},{"var":"entity_id"},{"lit":"failures"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"api_entities_bulk_imports_entity_failure","name__orig":"api_entities_bulk_imports_entity_failure","Name":"ApiEntitiesBulkImportsEntityFailure","name_":"api_entities_bulk_imports_entity_failure","name-":"api-entities-bulk-imports-entity-failure","NAME":"API_ENTITIES_BULK_IMPORTS_ENTITY_FAILURE","index$":18}, {"active":true,"entity":"api_entities_bulk_imports_entity_failure","key$":"BasicApiEntitiesBulkImportsEntityFailureFlow","kind":"basic","name":"BasicApiEntitiesBulkImportsEntityFailureFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"api_entities_bulk_imports_entity_failure_ref01","srcdatavar":"api_entities_bulk_imports_entity_failure_ref01_data","suffix":"_dt0"},"m":{"bulk_import_id":"bulk_import01","id":"api_entities_bulk_imports_entity_failure01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_bulk_imports_entity_failure_ref01"}}],"index$":0}]}, 'ApiEntitiesBulkImportsEntityFailure', {"GET /api/v4/bulk_imports/{import_id}/entities/{entity_id}/failures":{"protocol":"http","parameters":[{"in":"path","name":"import_id","description":"The ID of user's GitLab Migration","type":"integer","format":"int32","required":true,"index$":0},{"in":"path","name":"entity_id","description":"The ID of GitLab Migration entity","type":"integer","format":"int32","required":true,"index$":1}]}})
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
    ['api_entities_bulk_imports_entity_failure01','api_entities_bulk_imports_entity_failure02','api_entities_bulk_imports_entity_failure03','bulk_import01'],
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
  
