

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[],"name":"migration","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"timestamp","orig":"timestamp","reqd":true,"type":"`$ANY`","index$":0}],"query":[{"active":true,"kind":"query","name":"post_api_v4_admin_migrations_timestamp_mark","orig":"post_api_v4_admin_migrations_timestamp_mark","reqd":true,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"POST /api/v4/admin/migrations/{timestamp}/mark","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4AdminMigrationsTimestampMark\",\"parameters\":[{\"description\":\"The migration version timestamp\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"timestamp\",\"required\":true,\"type\":\"integer\"},{\"in\":\"body\",\"name\":\"postApiV4AdminMigrationsTimestampMark\",\"required\":true,\"schema\":{\"description\":\"Mark the migration as successfully executed\",\"properties\":{\"database\":{\"default\":\"main\",\"description\":\"The name of the database\",\"enum\":[\"main\",\"ci\",\"sec\",\"embedding\",\"geo\"],\"type\":\"string\"}},\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"201\":{\"description\":\"201 Created\"},\"401\":{\"description\":\"401 Unauthorized\"},\"403\":{\"description\":\"403 Forbidden\"},\"404\":{\"description\":\"404 Not found\"},\"422\":{\"description\":\"You can mark only pending migrations\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/api/v4/admin/migrations/{timestamp}/mark","segments":[{"lit":"api"},{"lit":"v4"},{"lit":"admin"},{"lit":"migrations"},{"var":"timestamp"},{"lit":"mark"}],"select":{"$action":"mark","exist":["post_api_v4_admin_migrations_timestamp_mark","timestamp"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[["migration"]]},"key$":"migration","name__orig":"migration","Name":"Migration","name_":"migration","name-":"migration","NAME":"MIGRATION","index$":227}, {"active":true,"entity":"migration","key$":"BasicMigrationFlow","kind":"basic","name":"BasicMigrationFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"migration_ref01"},"match":{"timestamp":"timestamp01"},"op":"create","spec":[],"valid":[],"index$":0}]}, 'Migration')
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
    ['migration01','migration02','migration03','migration01','migration02','migration03'],
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
  
