

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


describe('GroupExportEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.GroupExport()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['create', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'group_export.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0}},"id":{"field":"id","name":"id"},"name":"group_export","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/v4/groups/{id}/export_relations","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"post_api_v4_groups_id_export_relation","or":"post_api_v4_groups_id_export_relation","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"POST","o":"/api/v4/groups/{id}/export_relations","q":{"$action":"export_relations","exist":["id","post_api_v4_groups_id_export_relation"]},"r":{},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"groups"},{"var":"id"},{"lit":"export_relations"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /api/v4/groups/{id}/export","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/api/v4/groups/{id}/export","q":{"exist":["id"]},"r":{},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"groups"},{"var":"id"},{"lit":"export"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v4/groups/{id}/export_relations/download","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"group_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"batch_number","or":"batch_number","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"k":"query","n":"batched","or":"batched","r":false,"t":"`$ANY`","index$":1},{"a":true,"k":"query","n":"relation","or":"relation","r":true,"t":"`$ANY`","index$":2}]},"k":"http","m":"GET","o":"/api/v4/groups/{id}/export_relations/download","q":{"exist":["batch_number","batched","group_id","relation"]},"r":{"param":{"id":"group_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"groups"},{"var":"group_id"},{"lit":"export_relations"},{"lit":"download"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /api/v4/groups/{id}/export/download","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"group_id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/v4/groups/{id}/export/download","q":{"exist":["group_id"]},"r":{"param":{"id":"group_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"groups"},{"var":"group_id"},{"lit":"export"},{"lit":"download"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.group"]]},"key$":"group_export","name__orig":"group_export","Name":"GroupExport","name_":"group_export","name-":"group-export","NAME":"GROUP_EXPORT","index$":213}, {"active":true,"entity":"group_export","key$":"BasicGroupExportFlow","kind":"basic","name":"BasicGroupExportFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"group_export_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"group_export_ref01","srcdatavar":"group_export_ref01_data","suffix":"_dt0"},"m":{"id":"group_export01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-group_export_ref01"}}],"index$":1}]}, 'GroupExport', {"POST /api/v4/groups/{id}/export_relations":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID of a group","type":"string","required":true,"index$":0},{"name":"postApiV4GroupsIdExportRelations","in":"body","required":true,"schema":{"type":"object","properties":{"batched":{"type":"boolean","description":"Whether to export in batches"}},"description":"Start relations export","x-ref":"#/definitions/postApiV4GroupsIdExportRelations"},"index$":1}]},"POST /api/v4/groups/{id}/export":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID of a group","type":"string","required":true,"index$":0}]},"GET /api/v4/groups/{id}/export_relations/download":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID of a group","type":"string","required":true,"index$":0},{"in":"query","name":"relation","description":"Group relation name","type":"string","required":true,"index$":1},{"in":"query","name":"batched","description":"Whether to download in batches","type":"boolean","required":false,"index$":2},{"in":"query","name":"batch_number","description":"Batch number to download","type":"integer","format":"int32","required":false,"index$":3}]},"GET /api/v4/groups/{id}/export/download":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID of a group","type":"string","required":true,"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const group_export_ref01_ent = client.GroupExport()
    let group_export_ref01_data = setup.data.new.group_export['group_export_ref01']

    group_export_ref01_data = (await group_export_ref01_ent.create(group_export_ref01_data)).data()
    assert(null != group_export_ref01_data.id)


    // LOAD
    const group_export_ref01_match_dt0: any = {}
    group_export_ref01_match_dt0.id = group_export_ref01_data.id
    const group_export_ref01_data_dt0 = (await group_export_ref01_ent.load(group_export_ref01_match_dt0)).data()
    assert(group_export_ref01_data_dt0.id === group_export_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/group_export/GroupExportTestData.json')

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
    ['group_export01','group_export02','group_export03','group01','group02','group03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_GROUP_EXPORT_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_GROUP_EXPORT_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_GROUP_EXPORT_ENTID']
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
  
