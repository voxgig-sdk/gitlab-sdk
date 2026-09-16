

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


describe('ApiEntitiesMrNoteEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesMrNote()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_mr_note.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"avatar_path","req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"avatar_url","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"custom_attributes","req":false,"type":"`$ARRAY`","index$":2},{"active":true,"format":"int32","name":"id","req":false,"type":"`$INTEGER`","index$":3},{"active":true,"name":"locked","req":false,"type":"`$BOOLEAN`","index$":4},{"active":true,"name":"name","req":false,"type":"`$STRING`","index$":5},{"active":true,"name":"public_email","req":false,"type":"`$STRING`","index$":6},{"active":true,"name":"state","req":false,"type":"`$STRING`","index$":7},{"active":true,"name":"username","req":false,"type":"`$STRING`","index$":8},{"active":true,"name":"web_url","req":false,"type":"`$STRING`","index$":9}],"id":{"field":"id","name":"id"},"name":"api_entities_mr_note","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"merge_request_id","orig":"merge_request_iid","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":1}],"query":[{"active":true,"example":1,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":0},{"active":true,"example":20,"kind":"query","name":"per_page","orig":"per_page","reqd":false,"type":"`$INTEGER`","index$":1}]},"contract":{"id":"GET /api/v4/projects/{id}/merge_requests/{merge_request_iid}/closes_issues","json":"{\"operationId\":\"getApiV4ProjectsIdMergeRequestsMergeRequestIidClosesIssues\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project.\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"default\":1,\"description\":\"Current page number\",\"example\":1,\"format\":\"int32\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"type\":\"integer\"},{\"default\":20,\"description\":\"Number of items per page\",\"example\":20,\"format\":\"int32\",\"in\":\"query\",\"name\":\"per_page\",\"required\":false,\"type\":\"integer\"},{\"format\":\"int32\",\"in\":\"path\",\"name\":\"merge_request_iid\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"List issues that close on merge\",\"schema\":{\"description\":\"API_Entities_MRNote model\",\"properties\":{\"author\":{\"description\":\"API_Entities_UserBasic model\",\"properties\":{\"avatar_path\":{\"example\":\"/user/avatar/28/The-Big-Lebowski-400-400.png\",\"type\":\"string\"},\"avatar_url\":{\"example\":\"https://gravatar.com/avatar/1\",\"type\":\"string\"},\"custom_attributes\":{\"items\":{\"description\":\"API_Entities_CustomAttribute model\",\"properties\":{\"key\":{\"example\":\"foo\",\"type\":\"string\"},\"value\":{\"example\":\"bar\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"locked\":{\"type\":\"boolean\"},\"name\":{\"example\":\"Administrator\",\"type\":\"string\"},\"public_email\":{\"example\":\"john@example.com\",\"type\":\"string\"},\"state\":{\"example\":\"active\",\"type\":\"string\"},\"username\":{\"example\":\"admin\",\"type\":\"string\"},\"web_url\":{\"example\":\"https://gitlab.example.com/root\",\"type\":\"string\"}},\"type\":\"object\"},\"note\":{\"type\":\"string\"}},\"type\":\"object\"}},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/projects/{id}/merge_requests/{merge_request_iid}/closes_issues","rename":{"param":{"id":"project_id","merge_request_iid":"merge_request_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"merge_requests"},{"var":"merge_request_id"},{"lit":"closes_issues"}],"select":{"exist":["merge_request_id","page","per_page","project_id"]},"transform":{"req":"`reqdata`","res":"`body.author`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["project","merge_request"]]},"key$":"api_entities_mr_note","name__orig":"api_entities_mr_note","Name":"ApiEntitiesMrNote","name_":"api_entities_mr_note","name-":"api-entities-mr-note","NAME":"API_ENTITIES_MR_NOTE","index$":100}, {"active":true,"entity":"api_entities_mr_note","key$":"BasicApiEntitiesMrNoteFlow","kind":"basic","name":"BasicApiEntitiesMrNoteFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"api_entities_mr_note_ref01","srcdatavar":"api_entities_mr_note_ref01_data","suffix":"_dt0"},"match":{"id":"api_entities_mr_note01","project_id":"project01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_mr_note_ref01"}}],"index$":0}]}, 'ApiEntitiesMrNote')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let api_entities_mr_note_ref01_data = Object.values(setup.data.existing.api_entities_mr_note)[0] as any

    // LOAD
    const api_entities_mr_note_ref01_ent = client.ApiEntitiesMrNote()
    const api_entities_mr_note_ref01_match_dt0: any = {}
    api_entities_mr_note_ref01_match_dt0.id = api_entities_mr_note_ref01_data.id
    const api_entities_mr_note_ref01_data_dt0 = (await api_entities_mr_note_ref01_ent.load(api_entities_mr_note_ref01_match_dt0)).data()
    assert(api_entities_mr_note_ref01_data_dt0.id === api_entities_mr_note_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_mr_note/ApiEntitiesMrNoteTestData.json')

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
    ['api_entities_mr_note01','api_entities_mr_note02','api_entities_mr_note03','project01','project02','project03','merge_request01','merge_request02','merge_request03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_MR_NOTE_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_MR_NOTE_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_MR_NOTE_ENTID']
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
  
