

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


describe('GroupImportEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.GroupImport()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'group_import.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"group_import","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/v4/groups/import","source":"swagger2","version":2},"g":{"query":[{"a":true,"k":"query","n":"file","or":"file","r":true,"t":"`$ANY`","index$":0},{"a":true,"k":"query","n":"name","or":"name","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"organization_id","or":"organization_id","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"parent_id","or":"parent_id","r":false,"t":"`$STRING`","index$":3},{"a":true,"k":"query","n":"path","or":"path","r":true,"t":"`$STRING`","index$":4}]},"k":"http","m":"POST","o":"/api/v4/groups/import","q":{"exist":["file","name","organization_id","parent_id","path"]},"r":{},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"groups"},{"lit":"import"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /api/v4/groups/import/authorize","source":"swagger2","version":2},"g":{},"k":"http","m":"POST","o":"/api/v4/groups/import/authorize","q":{},"r":{},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"groups"},{"lit":"import"},{"lit":"authorize"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"group_import","name__orig":"group_import","Name":"GroupImport","name_":"group_import","name-":"group-import","NAME":"GROUP_IMPORT","index$":214}, {"active":true,"entity":"group_import","key$":"BasicGroupImportFlow","kind":"basic","name":"BasicGroupImportFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"group_import_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'GroupImport', {"POST /api/v4/groups/import":{"protocol":"http","parameters":[{"in":"formData","name":"path","description":"Group path","type":"string","required":true,"index$":0},{"in":"formData","name":"name","description":"Group name","type":"string","required":true,"index$":1},{"in":"formData","name":"file","description":"The group export file to be imported","type":"file","required":true,"index$":2},{"in":"formData","name":"parent_id","description":"The ID of the parent group that the group will be imported into. Defaults to the current user's namespace.","type":"integer","format":"int32","required":false,"index$":3},{"in":"formData","name":"organization_id","description":"The ID of the organization that the group will be part of. ","type":"integer","format":"int32","default":{},"required":false,"index$":4}]},"POST /api/v4/groups/import/authorize":{"protocol":"http","parameters":[]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const group_import_ref01_ent = client.GroupImport()
    let group_import_ref01_data = setup.data.new.group_import['group_import_ref01']

    group_import_ref01_data = (await group_import_ref01_ent.create(group_import_ref01_data)).data()
    assert(null != group_import_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/group_import/GroupImportTestData.json')

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
    ['group_import01','group_import02','group_import03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_GROUP_IMPORT_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_GROUP_IMPORT_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_GROUP_IMPORT_ENTID']
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
  
