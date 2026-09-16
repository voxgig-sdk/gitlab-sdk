

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[],"name":"group_import","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"file","orig":"file","reqd":true,"type":"`$ANY`","index$":0},{"active":true,"kind":"query","name":"name","orig":"name","reqd":true,"type":"`$STRING`","index$":1},{"active":true,"kind":"query","name":"organization_id","orig":"organization_id","reqd":false,"type":"`$STRING`","index$":2},{"active":true,"kind":"query","name":"parent_id","orig":"parent_id","reqd":false,"type":"`$STRING`","index$":3},{"active":true,"kind":"query","name":"path","orig":"path","reqd":true,"type":"`$STRING`","index$":4}]},"contract":{"id":"POST /api/v4/groups/import","json":"{\"consumes\":[\"multipart/form-data\"],\"operationId\":\"postApiV4GroupsImport\",\"parameters\":[{\"description\":\"Group path\",\"in\":\"formData\",\"name\":\"path\",\"required\":true,\"type\":\"string\"},{\"description\":\"Group name\",\"in\":\"formData\",\"name\":\"name\",\"required\":true,\"type\":\"string\"},{\"description\":\"The group export file to be imported\",\"in\":\"formData\",\"name\":\"file\",\"required\":true,\"type\":\"file\"},{\"description\":\"The ID of the parent group that the group will be imported into. Defaults to the current user's namespace.\",\"format\":\"int32\",\"in\":\"formData\",\"name\":\"parent_id\",\"required\":false,\"type\":\"integer\"},{\"default\":{},\"description\":\"The ID of the organization that the group will be part of. \",\"format\":\"int32\",\"in\":\"formData\",\"name\":\"organization_id\",\"required\":false,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"202\":{\"description\":\"Create a new group import\"},\"400\":{\"description\":\"Bad request\"},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"},\"503\":{\"description\":\"Service unavailable\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/api/v4/groups/import","segments":[{"lit":"api"},{"lit":"v4"},{"lit":"groups"},{"lit":"import"}],"select":{"exist":["file","name","organization_id","parent_id","path"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{},"contract":{"id":"POST /api/v4/groups/import/authorize","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4GroupsImportAuthorize\",\"parameters\":[],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"201\":{\"description\":\"Workhorse authorize the group import upload\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/api/v4/groups/import/authorize","segments":[{"lit":"api"},{"lit":"v4"},{"lit":"groups"},{"lit":"import"},{"lit":"authorize"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"group_import","name__orig":"group_import","Name":"GroupImport","name_":"group_import","name-":"group-import","NAME":"GROUP_IMPORT","index$":214}, {"active":true,"entity":"group_import","key$":"BasicGroupImportFlow","kind":"basic","name":"BasicGroupImportFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"group_import_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0}]}, 'GroupImport')
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
  
