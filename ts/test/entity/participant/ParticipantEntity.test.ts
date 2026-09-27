

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


describe('ParticipantEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.Participant()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'participant.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"key":{"a":true,"h":"Key","n":"key","r":false,"t":"`$STRING`","key$":"key","index$":0},"value":{"a":true,"h":"Value","n":"value","r":false,"t":"`$STRING`","key$":"value","index$":1}},"name":"participant","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/v4/projects/{id}/issues/{issue_iid}/participants","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"issue_id","or":"issue_iid","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/issues/{issue_iid}/participants","q":{"exist":["issue_id","project_id"]},"r":{"param":{"id":"project_id","issue_iid":"issue_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"issues"},{"var":"issue_id"},{"lit":"participants"}],"t":{"req":"`reqdata`","res":"`body.custom_attributes`"},"index$":0},{"a":true,"co":{"id":"GET /api/v4/projects/{id}/merge_requests/{merge_request_iid}/participants","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"merge_request_id","or":"merge_request_iid","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/merge_requests/{merge_request_iid}/participants","q":{"exist":["merge_request_id","project_id"]},"r":{"param":{"id":"project_id","merge_request_iid":"merge_request_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"merge_requests"},{"var":"merge_request_id"},{"lit":"participants"}],"t":{"req":"`reqdata`","res":"`body.custom_attributes`"},"index$":1}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.project"],["$.main.kit.entity.project","$.main.kit.entity.merge_request"]]},"key$":"participant","name__orig":"participant","Name":"Participant","name_":"participant","name-":"participant","NAME":"PARTICIPANT","index$":236}, {"active":true,"entity":"participant","key$":"BasicParticipantFlow","kind":"basic","name":"BasicParticipantFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"merge_request_id":"merge_request01","project_id":"project01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"participant_ref01"}}],"index$":0}]}, 'Participant', {"GET /api/v4/projects/{id}/issues/{issue_iid}/participants":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"index$":0},{"in":"path","name":"issue_iid","description":"The internal ID of a project issue","type":"integer","format":"int32","required":true,"index$":1}]},"GET /api/v4/projects/{id}/merge_requests/{merge_request_iid}/participants":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project.","type":"string","required":true,"index$":0},{"in":"path","name":"merge_request_iid","type":"integer","format":"int32","required":true,"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let participant_ref01_data = Object.values(setup.data.existing.participant)[0] as any

    // LIST
    const participant_ref01_ent = client.Participant()
    const participant_ref01_match: any = {}
    participant_ref01_match['merge_request_id'] = setup.idmap['merge_request01']
    participant_ref01_match['project_id'] = setup.idmap['project01']

    const participant_ref01_list = (await participant_ref01_ent.list(participant_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/participant/ParticipantTestData.json')

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
    ['participant01','participant02','participant03','project01','project02','project03','merge_request01','merge_request02','merge_request03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_PARTICIPANT_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_PARTICIPANT_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_PARTICIPANT_ENTID']
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
  
