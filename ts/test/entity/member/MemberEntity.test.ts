

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


describe('MemberEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.Member()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'member.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":0}],"id":{"field":"id","name":"id"},"name":"member","op":{"remove":{"input":"data","name":"remove","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"group_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"id","orig":"user_id","reqd":true,"type":"`$STRING`","index$":1}],"query":[{"active":true,"kind":"query","name":"skip_subresource","orig":"skip_subresource","reqd":false,"type":"`$ANY`","index$":0},{"active":true,"kind":"query","name":"unassign_issuable","orig":"unassign_issuable","reqd":false,"type":"`$ANY`","index$":1}]},"contract":{"id":"DELETE /api/v4/groups/{id}/members/{user_id}","json":"{\"operationId\":\"deleteApiV4GroupsIdMembersUserId\",\"parameters\":[{\"description\":\"The group ID\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The user ID of the member\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"user_id\",\"required\":true,\"type\":\"integer\"},{\"default\":false,\"description\":\"Flag indicating if the deletion of direct memberships of the removed member in subgroups and projects should be skipped\",\"in\":\"query\",\"name\":\"skip_subresources\",\"required\":false,\"type\":\"boolean\"},{\"default\":false,\"description\":\"Flag indicating if the removed member should be unassigned from any issues or merge requests within given group or project\",\"in\":\"query\",\"name\":\"unassign_issuables\",\"required\":false,\"type\":\"boolean\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"204\":{\"description\":\"Removes a user from a group or project.\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"DELETE","orig":"/api/v4/groups/{id}/members/{user_id}","rename":{"param":{"id":"group_id","user_id":"id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"groups"},{"var":"group_id"},{"lit":"members"},{"var":"id"}],"select":{"exist":["group_id","id","skip_subresource","unassign_issuable"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"user_id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":1}],"query":[{"active":true,"kind":"query","name":"skip_subresource","orig":"skip_subresource","reqd":false,"type":"`$ANY`","index$":0},{"active":true,"kind":"query","name":"unassign_issuable","orig":"unassign_issuable","reqd":false,"type":"`$ANY`","index$":1}]},"contract":{"id":"DELETE /api/v4/projects/{id}/members/{user_id}","json":"{\"operationId\":\"deleteApiV4ProjectsIdMembersUserId\",\"parameters\":[{\"description\":\"The project ID\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The user ID of the member\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"user_id\",\"required\":true,\"type\":\"integer\"},{\"default\":false,\"description\":\"Flag indicating if the deletion of direct memberships of the removed member in subgroups and projects should be skipped\",\"in\":\"query\",\"name\":\"skip_subresources\",\"required\":false,\"type\":\"boolean\"},{\"default\":false,\"description\":\"Flag indicating if the removed member should be unassigned from any issues or merge requests within given group or project\",\"in\":\"query\",\"name\":\"unassign_issuables\",\"required\":false,\"type\":\"boolean\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"204\":{\"description\":\"Removes a user from a group or project.\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"DELETE","orig":"/api/v4/projects/{id}/members/{user_id}","rename":{"param":{"id":"project_id","user_id":"id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"members"},{"var":"id"}],"select":{"exist":["id","project_id","skip_subresource","unassign_issuable"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"group_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"id","orig":"member_id","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"PUT /api/v4/groups/{id}/members/{member_id}/approve","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"putApiV4GroupsIdMembersMemberIdApprove\",\"parameters\":[{\"description\":\"The ID of a group\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The ID of the member requiring approval\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"member_id\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Approves a pending member\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"PUT","orig":"/api/v4/groups/{id}/members/{member_id}/approve","rename":{"param":{"id":"group_id","member_id":"id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"groups"},{"var":"group_id"},{"lit":"members"},{"var":"id"},{"lit":"approve"}],"select":{"$action":"approve","exist":["group_id","id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["group"],["project"]]},"key$":"member","name__orig":"member","Name":"Member","name_":"member","name-":"member","NAME":"MEMBER","index$":224}, {"active":true,"entity":"member","key$":"BasicMemberFlow","kind":"basic","name":"BasicMemberFlow","param":{},"step":[{"active":true,"data":{"group_id":"group01"},"input":{"ref":"member_ref01","srcdatavar":"member_ref01_data","suffix":"_up0"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-member_ref01"}}],"valid":[],"index$":0}]}, 'Member')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let member_ref01_data = Object.values(setup.data.existing.member)[0] as any

    // UPDATE
    const member_ref01_ent = client.Member()
    const member_ref01_data_up0: any = {}
    member_ref01_data_up0.id = member_ref01_data.id
    member_ref01_data_up0 ['group_id'] = setup.idmap['group_id']

    const member_ref01_resdata_up0 = (await member_ref01_ent.update(member_ref01_data_up0)).data()
    assert(member_ref01_resdata_up0.id === member_ref01_data_up0.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/member/MemberTestData.json')

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
    ['member01','member02','member03','group01','group02','group03','project01','project02','project03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_MEMBER_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_MEMBER_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_MEMBER_ENTID']
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
  
