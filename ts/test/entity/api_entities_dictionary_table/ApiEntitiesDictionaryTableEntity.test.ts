

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


describe('ApiEntitiesDictionaryTableEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesDictionaryTable()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_dictionary_table.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"feature_categories","req":false,"type":"`$ARRAY`","index$":0},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"table_name","req":false,"type":"`$STRING`","index$":2}],"id":{"field":"id","name":"id"},"name":"api_entities_dictionary_table","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"databas_id","orig":"database_name","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"id","orig":"table_name","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"GET /api/v4/admin/databases/{database_name}/dictionary/tables/{table_name}","json":"{\"operationId\":\"getApiV4AdminDatabasesDatabaseNameDictionaryTablesTableName\",\"parameters\":[{\"description\":\"The database name\",\"enum\":[\"main\",\"ci\"],\"in\":\"path\",\"name\":\"database_name\",\"required\":true,\"type\":\"string\"},{\"description\":\"The table name\",\"in\":\"path\",\"name\":\"table_name\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Retrieve dictionary details\",\"schema\":{\"description\":\"API_Entities_Dictionary_Table model\",\"properties\":{\"feature_categories\":{\"example\":\"database\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"table_name\":{\"example\":\"users\",\"type\":\"string\"}},\"type\":\"object\"}},\"401\":{\"description\":\"401 Unauthorized\"},\"403\":{\"description\":\"403 Forbidden\"},\"404\":{\"description\":\"404 Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/admin/databases/{database_name}/dictionary/tables/{table_name}","rename":{"param":{"database_name":"databas_id","table_name":"id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"admin"},{"lit":"databases"},{"var":"databas_id"},{"lit":"dictionary"},{"lit":"tables"},{"var":"id"}],"select":{"exist":["databas_id","id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["databas"]]},"key$":"api_entities_dictionary_table","name__orig":"api_entities_dictionary_table","Name":"ApiEntitiesDictionaryTable","name_":"api_entities_dictionary_table","name-":"api-entities-dictionary-table","NAME":"API_ENTITIES_DICTIONARY_TABLE","index$":64}, {"active":true,"entity":"api_entities_dictionary_table","key$":"BasicApiEntitiesDictionaryTableFlow","kind":"basic","name":"BasicApiEntitiesDictionaryTableFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"api_entities_dictionary_table_ref01","srcdatavar":"api_entities_dictionary_table_ref01_data","suffix":"_dt0"},"match":{"databas_id":"databas01","id":"api_entities_dictionary_table01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_dictionary_table_ref01"}}],"index$":0}]}, 'ApiEntitiesDictionaryTable')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let api_entities_dictionary_table_ref01_data = Object.values(setup.data.existing.api_entities_dictionary_table)[0] as any

    // LOAD
    const api_entities_dictionary_table_ref01_ent = client.ApiEntitiesDictionaryTable()
    const api_entities_dictionary_table_ref01_match_dt0: any = {}
    api_entities_dictionary_table_ref01_match_dt0.id = api_entities_dictionary_table_ref01_data.id
    const api_entities_dictionary_table_ref01_data_dt0 = (await api_entities_dictionary_table_ref01_ent.load(api_entities_dictionary_table_ref01_match_dt0)).data()
    assert(api_entities_dictionary_table_ref01_data_dt0.id === api_entities_dictionary_table_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_dictionary_table/ApiEntitiesDictionaryTableTestData.json')

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
    ['api_entities_dictionary_table01','api_entities_dictionary_table02','api_entities_dictionary_table03','databas01','databas02','databas03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_DICTIONARY_TABLE_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_DICTIONARY_TABLE_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_DICTIONARY_TABLE_ENTID']
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
  
