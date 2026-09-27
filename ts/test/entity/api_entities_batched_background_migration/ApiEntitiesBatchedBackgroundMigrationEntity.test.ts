

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


describe('ApiEntitiesBatchedBackgroundMigrationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesBatchedBackgroundMigration()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['list', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_batched_background_migration.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"column_name":{"a":true,"h":"Column Name","n":"column_name","r":false,"t":"`$STRING`","key$":"column_name","index$":0},"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":false,"t":"`$STRING`","key$":"created_at","index$":1},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":2},"job_class_name":{"a":true,"h":"Job Class Name","n":"job_class_name","r":false,"t":"`$STRING`","key$":"job_class_name","index$":3},"progress":{"a":true,"fo":"float","h":"Progress","n":"progress","r":false,"t":"`$NUMBER`","key$":"progress","index$":4},"status":{"a":true,"h":"Status","n":"status","r":false,"t":"`$STRING`","key$":"status","index$":5},"table_name":{"a":true,"h":"Table Name","n":"table_name","r":false,"t":"`$STRING`","key$":"table_name","index$":6}},"id":{"field":"id","name":"id"},"name":"api_entities_batched_background_migration","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/v4/admin/batched_background_migrations","source":"swagger2","version":2},"g":{"query":[{"a":true,"k":"query","n":"database","or":"database","r":false,"t":"`$ANY`","index$":0},{"a":true,"k":"query","n":"job_class_name","or":"job_class_name","r":false,"t":"`$ANY`","index$":1}]},"k":"http","m":"GET","o":"/api/v4/admin/batched_background_migrations","q":{"exist":["database","job_class_name"]},"r":{},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"admin"},{"lit":"batched_background_migrations"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v4/admin/batched_background_migrations/{id}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"database","or":"database","r":false,"t":"`$ANY`","index$":0}]},"k":"http","m":"GET","o":"/api/v4/admin/batched_background_migrations/{id}","q":{"exist":["database","id"]},"r":{},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"admin"},{"lit":"batched_background_migrations"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /api/v4/admin/batched_background_migrations/{id}/pause","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"batched_background_migration_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"put_api_v4_admin_batched_background_migrations_id_pause","or":"put_api_v4_admin_batched_background_migrations_id_pause","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"PUT","o":"/api/v4/admin/batched_background_migrations/{id}/pause","q":{"exist":["batched_background_migration_id","put_api_v4_admin_batched_background_migrations_id_pause"]},"r":{"param":{"id":"batched_background_migration_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"admin"},{"lit":"batched_background_migrations"},{"var":"batched_background_migration_id"},{"lit":"pause"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"PUT /api/v4/admin/batched_background_migrations/{id}/resume","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"batched_background_migration_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"put_api_v4_admin_batched_background_migrations_id_resume","or":"put_api_v4_admin_batched_background_migrations_id_resume","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"PUT","o":"/api/v4/admin/batched_background_migrations/{id}/resume","q":{"exist":["batched_background_migration_id","put_api_v4_admin_batched_background_migrations_id_resume"]},"r":{"param":{"id":"batched_background_migration_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"admin"},{"lit":"batched_background_migrations"},{"var":"batched_background_migration_id"},{"lit":"resume"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"api_entities_batched_background_migration","name__orig":"api_entities_batched_background_migration","Name":"ApiEntitiesBatchedBackgroundMigration","name_":"api_entities_batched_background_migration","name-":"api-entities-batched-background-migration","NAME":"API_ENTITIES_BATCHED_BACKGROUND_MIGRATION","index$":15}, {"active":true,"entity":"api_entities_batched_background_migration","key$":"BasicApiEntitiesBatchedBackgroundMigrationFlow","kind":"basic","name":"BasicApiEntitiesBatchedBackgroundMigrationFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"api_entities_batched_background_migration_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"api_entities_batched_background_migration_ref01","srcdatavar":"api_entities_batched_background_migration_ref01_data","suffix":"_up0","textfield":"column_name"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_batched_background_migration_ref01"}}],"v":[],"index$":1},{"a":true,"d":{},"i":{"ref":"api_entities_batched_background_migration_ref01","srcdatavar":"api_entities_batched_background_migration_ref01_data","suffix":"_dt0"},"m":{"id":"api_entities_batched_background_migration01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_batched_background_migration_ref01"}}],"index$":2}]}, 'ApiEntitiesBatchedBackgroundMigration', {"GET /api/v4/admin/batched_background_migrations":{"protocol":"http","parameters":[{"in":"query","name":"database","description":"The name of the database, the default `main`","type":"string","default":"main","enum":["main","ci","sec","embedding","geo"],"required":false,"index$":0},{"in":"query","name":"job_class_name","description":"Filter migrations by job class name.","type":"string","required":false,"index$":1}]},"GET /api/v4/admin/batched_background_migrations/{id}":{"protocol":"http","parameters":[{"in":"query","name":"database","description":"The name of the database","type":"string","default":"main","enum":["main","ci","sec","embedding","geo"],"required":false,"index$":0},{"in":"path","name":"id","description":"The batched background migration id","type":"integer","format":"int32","required":true,"index$":1}]},"PUT /api/v4/admin/batched_background_migrations/{id}/pause":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The batched background migration id","type":"integer","format":"int32","required":true,"index$":0},{"name":"putApiV4AdminBatchedBackgroundMigrationsIdPause","in":"body","required":true,"schema":{"type":"object","properties":{"database":{"type":"string","description":"The name of the database","enum":["main","ci","sec","embedding","geo"],"default":"main"}},"description":"Pause a batched background migration","x-ref":"#/definitions/putApiV4AdminBatchedBackgroundMigrationsIdPause"},"index$":1}]},"PUT /api/v4/admin/batched_background_migrations/{id}/resume":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The batched background migration id","type":"integer","format":"int32","required":true,"index$":0},{"name":"putApiV4AdminBatchedBackgroundMigrationsIdResume","in":"body","required":true,"schema":{"type":"object","properties":{"database":{"type":"string","description":"The name of the database","enum":["main","ci","sec","embedding","geo"],"default":"main"}},"description":"Resume a batched background migration","x-ref":"#/definitions/putApiV4AdminBatchedBackgroundMigrationsIdResume"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let api_entities_batched_background_migration_ref01_data = Object.values(setup.data.existing.api_entities_batched_background_migration)[0] as any

    // LIST
    const api_entities_batched_background_migration_ref01_ent = client.ApiEntitiesBatchedBackgroundMigration()
    const api_entities_batched_background_migration_ref01_match: any = {}

    const api_entities_batched_background_migration_ref01_list = (await api_entities_batched_background_migration_ref01_ent.list(api_entities_batched_background_migration_ref01_match)).map((e: any) => e.data())


    // UPDATE
    const api_entities_batched_background_migration_ref01_data_up0: any = {}
    api_entities_batched_background_migration_ref01_data_up0.id = api_entities_batched_background_migration_ref01_data.id

    const api_entities_batched_background_migration_ref01_markdef_up0 = { name: 'column_name', value: 'Mark01-api_entities_batched_background_migration_ref01_' + setup.now }
    ;(api_entities_batched_background_migration_ref01_data_up0 as any)[api_entities_batched_background_migration_ref01_markdef_up0.name] = api_entities_batched_background_migration_ref01_markdef_up0.value

    const api_entities_batched_background_migration_ref01_resdata_up0 = (await api_entities_batched_background_migration_ref01_ent.update(api_entities_batched_background_migration_ref01_data_up0)).data()
    assert(api_entities_batched_background_migration_ref01_resdata_up0.id === api_entities_batched_background_migration_ref01_data_up0.id)

    assert((api_entities_batched_background_migration_ref01_resdata_up0 as any)[api_entities_batched_background_migration_ref01_markdef_up0.name] === api_entities_batched_background_migration_ref01_markdef_up0.value)


    // LOAD
    const api_entities_batched_background_migration_ref01_match_dt0: any = {}
    api_entities_batched_background_migration_ref01_match_dt0.id = api_entities_batched_background_migration_ref01_data.id
    const api_entities_batched_background_migration_ref01_data_dt0 = (await api_entities_batched_background_migration_ref01_ent.load(api_entities_batched_background_migration_ref01_match_dt0)).data()
    assert(api_entities_batched_background_migration_ref01_data_dt0.id === api_entities_batched_background_migration_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_batched_background_migration/ApiEntitiesBatchedBackgroundMigrationTestData.json')

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
    ['api_entities_batched_background_migration01','api_entities_batched_background_migration02','api_entities_batched_background_migration03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_BATCHED_BACKGROUND_MIGRATION_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_BATCHED_BACKGROUND_MIGRATION_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_BATCHED_BACKGROUND_MIGRATION_ENTID']
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
  
