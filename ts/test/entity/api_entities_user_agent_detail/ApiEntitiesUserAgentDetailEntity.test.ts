

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"akismet_submitted","req":false,"type":"`$BOOLEAN`","index$":0},{"active":true,"name":"ip_address","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"user_agent","req":false,"type":"`$STRING`","index$":2}],"name":"api_entities_user_agent_detail","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"issue_id","orig":"issue_iid","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"GET /api/v4/projects/{id}/issues/{issue_iid}/user_agent_detail","json":"{\"operationId\":\"getApiV4ProjectsIdIssuesIssueIidUserAgentDetail\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The internal ID of a project issue\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"issue_iid\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get the user agent details for an issue\",\"schema\":{\"description\":\"API_Entities_UserAgentDetail model\",\"properties\":{\"akismet_submitted\":{\"example\":false,\"type\":\"boolean\"},\"ip_address\":{\"example\":\"127.0.0.1\",\"type\":\"string\"},\"user_agent\":{\"example\":\"AppleWebKit/537.36\",\"type\":\"string\"}},\"type\":\"object\"}}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/projects/{id}/issues/{issue_iid}/user_agent_detail","rename":{"param":{"id":"project_id","issue_iid":"issue_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"issues"},{"var":"issue_id"},{"lit":"user_agent_detail"}],"select":{"exist":["issue_id","project_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"snippet_id","orig":"snippet_id","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"GET /api/v4/projects/{id}/snippets/{snippet_id}/user_agent_detail","json":"{\"operationId\":\"getApiV4ProjectsIdSnippetsSnippetIdUserAgentDetail\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The ID of a project snippet\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"snippet_id\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get the user agent details for a project snippet\",\"schema\":{\"description\":\"API_Entities_UserAgentDetail model\",\"properties\":{\"akismet_submitted\":{\"example\":false,\"type\":\"boolean\"},\"ip_address\":{\"example\":\"127.0.0.1\",\"type\":\"string\"},\"user_agent\":{\"example\":\"AppleWebKit/537.36\",\"type\":\"string\"}},\"type\":\"object\"}},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/projects/{id}/snippets/{snippet_id}/user_agent_detail","rename":{"param":{"id":"project_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"snippets"},{"var":"snippet_id"},{"lit":"user_agent_detail"}],"select":{"exist":["project_id","snippet_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"snippet_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /api/v4/snippets/{id}/user_agent_detail","json":"{\"operationId\":\"getApiV4SnippetsIdUserAgentDetail\",\"parameters\":[{\"description\":\"The ID of a snippet\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get the user agent details for a snippet\",\"schema\":{\"description\":\"API_Entities_UserAgentDetail model\",\"properties\":{\"akismet_submitted\":{\"example\":false,\"type\":\"boolean\"},\"ip_address\":{\"example\":\"127.0.0.1\",\"type\":\"string\"},\"user_agent\":{\"example\":\"AppleWebKit/537.36\",\"type\":\"string\"}},\"type\":\"object\"}},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/snippets/{id}/user_agent_detail","rename":{"param":{"id":"snippet_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"snippets"},{"var":"snippet_id"},{"lit":"user_agent_detail"}],"select":{"exist":["snippet_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["project","issue"],["project","snippet"]]},"key$":"api_entities_user_agent_detail","name__orig":"api_entities_user_agent_detail","Name":"ApiEntitiesUserAgentDetail","name_":"api_entities_user_agent_detail","name-":"api-entities-user-agent-detail","NAME":"API_ENTITIES_USER_AGENT_DETAIL","index$":165}, {"active":true,"entity":"api_entities_user_agent_detail","key$":"BasicApiEntitiesUserAgentDetailFlow","kind":"basic","name":"BasicApiEntitiesUserAgentDetailFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"api_entities_user_agent_detail_ref01","srcdatavar":"api_entities_user_agent_detail_ref01_data","suffix":"_dt0"},"match":{"id":"api_entities_user_agent_detail01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_user_agent_detail_ref01"}}],"index$":0}]}, 'ApiEntitiesUserAgentDetail')
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
    ['api_entities_user_agent_detail01','api_entities_user_agent_detail02','api_entities_user_agent_detail03','project01','project02','project03','issue01','issue02','issue03','project01','project02','project03','snippet01','snippet02','snippet03'],
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
  
