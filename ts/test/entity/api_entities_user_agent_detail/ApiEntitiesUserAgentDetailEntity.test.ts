

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


describe('ApiEntitiesUserAgentDetailEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesUserAgentDetail()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_user_agent_detail.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"akismet_submitted":{"a":true,"h":"Akismet Submitted","n":"akismet_submitted","r":false,"t":"`$BOOLEAN`","key$":"akismet_submitted","index$":0},"ip_address":{"a":true,"h":"Ip Address","n":"ip_address","r":false,"t":"`$STRING`","key$":"ip_address","index$":1},"user_agent":{"a":true,"h":"User Agent","n":"user_agent","r":false,"t":"`$STRING`","key$":"user_agent","index$":2}},"name":"api_entities_user_agent_detail","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v4/projects/{id}/issues/{issue_iid}/user_agent_detail","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"issue_id","or":"issue_iid","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/issues/{issue_iid}/user_agent_detail","q":{"exist":["issue_id","project_id"]},"r":{"param":{"id":"project_id","issue_iid":"issue_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"issues"},{"var":"issue_id"},{"lit":"user_agent_detail"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /api/v4/projects/{id}/snippets/{snippet_id}/user_agent_detail","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"snippet_id","or":"snippet_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/snippets/{snippet_id}/user_agent_detail","q":{"exist":["project_id","snippet_id"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"snippets"},{"var":"snippet_id"},{"lit":"user_agent_detail"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"GET /api/v4/snippets/{id}/user_agent_detail","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"snippet_id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/v4/snippets/{id}/user_agent_detail","q":{"exist":["snippet_id"]},"r":{"param":{"id":"snippet_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"snippets"},{"var":"snippet_id"},{"lit":"user_agent_detail"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.project"],["$.main.kit.entity.project","$.main.kit.entity.snippet"]]},"key$":"api_entities_user_agent_detail","name__orig":"api_entities_user_agent_detail","Name":"ApiEntitiesUserAgentDetail","name_":"api_entities_user_agent_detail","name-":"api-entities-user-agent-detail","NAME":"API_ENTITIES_USER_AGENT_DETAIL","index$":165}, {"active":true,"entity":"api_entities_user_agent_detail","key$":"BasicApiEntitiesUserAgentDetailFlow","kind":"basic","name":"BasicApiEntitiesUserAgentDetailFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"api_entities_user_agent_detail_ref01","srcdatavar":"api_entities_user_agent_detail_ref01_data","suffix":"_dt0"},"m":{"id":"api_entities_user_agent_detail01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_user_agent_detail_ref01"}}],"index$":0}]}, 'ApiEntitiesUserAgentDetail', {"GET /api/v4/projects/{id}/issues/{issue_iid}/user_agent_detail":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"index$":0},{"in":"path","name":"issue_iid","description":"The internal ID of a project issue","type":"integer","format":"int32","required":true,"index$":1}]},"GET /api/v4/projects/{id}/snippets/{snippet_id}/user_agent_detail":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"index$":0},{"in":"path","name":"snippet_id","description":"The ID of a project snippet","type":"integer","format":"int32","required":true,"index$":1}]},"GET /api/v4/snippets/{id}/user_agent_detail":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID of a snippet","type":"integer","format":"int32","required":true,"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let api_entities_user_agent_detail_ref01_data = Object.values(setup.data.existing.api_entities_user_agent_detail)[0] as any

    // LOAD: skipped — no entity id field and load requires path params.
    // Entity-var is declared here so later flow steps still compile.
    const api_entities_user_agent_detail_ref01_ent = client.ApiEntitiesUserAgentDetail()


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_user_agent_detail/ApiEntitiesUserAgentDetailTestData.json')

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
    ['api_entities_user_agent_detail01','api_entities_user_agent_detail02','api_entities_user_agent_detail03','project01','project02','project03','snippet01','snippet02','snippet03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_USER_AGENT_DETAIL_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_USER_AGENT_DETAIL_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_USER_AGENT_DETAIL_ENTID']
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
  
