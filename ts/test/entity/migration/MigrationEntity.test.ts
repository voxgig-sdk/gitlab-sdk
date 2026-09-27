

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


describe('MigrationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.Migration()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'migration.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"migration","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/v4/admin/migrations/{timestamp}/mark","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"timestamp","or":"timestamp","r":true,"t":"`$ANY`","index$":0}],"query":[{"a":true,"k":"query","n":"post_api_v4_admin_migrations_timestamp_mark","or":"post_api_v4_admin_migrations_timestamp_mark","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"POST","o":"/api/v4/admin/migrations/{timestamp}/mark","q":{"$action":"mark","exist":["post_api_v4_admin_migrations_timestamp_mark","timestamp"]},"r":{},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"admin"},{"lit":"migrations"},{"var":"timestamp"},{"lit":"mark"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"migration","name__orig":"migration","Name":"Migration","name_":"migration","name-":"migration","NAME":"MIGRATION","index$":227}, {"active":true,"entity":"migration","key$":"BasicMigrationFlow","kind":"basic","name":"BasicMigrationFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"migration_ref01"},"m":{"timestamp":"timestamp01"},"o":"create","s":[],"v":[],"index$":0}]}, 'Migration', {"POST /api/v4/admin/migrations/{timestamp}/mark":{"protocol":"http","parameters":[{"in":"path","name":"timestamp","description":"The migration version timestamp","type":"integer","format":"int32","required":true,"index$":0},{"name":"postApiV4AdminMigrationsTimestampMark","in":"body","required":true,"schema":{"type":"object","properties":{"database":{"type":"string","description":"The name of the database","enum":["main","ci","sec","embedding","geo"],"default":"main"}},"description":"Mark the migration as successfully executed","x-ref":"#/definitions/postApiV4AdminMigrationsTimestampMark"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const migration_ref01_ent = client.Migration()
    let migration_ref01_data = setup.data.new.migration['migration_ref01']
    migration_ref01_data['timestamp'] = setup.idmap['timestamp01']

    migration_ref01_data = (await migration_ref01_ent.create(migration_ref01_data)).data()
    assert(null != migration_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/migration/MigrationTestData.json')

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
    ['migration01','migration02','migration03','timestamp01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_MIGRATION_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_MIGRATION_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_MIGRATION_ENTID']
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
  
