

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


describe('RunnerEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.Runner()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['create', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'runner.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":0}],"id":{"field":"id","name":"id"},"name":"runner","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"post_api_v4_runners_verify","orig":"post_api_v4_runners_verify","reqd":true,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"POST /api/v4/runners/verify","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4RunnersVerify\",\"parameters\":[{\"in\":\"body\",\"name\":\"postApiV4RunnersVerify\",\"required\":true,\"schema\":{\"description\":\"Validate authentication credentials\",\"properties\":{\"system_id\":{\"description\":\"The runner's system identifier\",\"type\":\"string\"},\"token\":{\"description\":\"The runner's authentication token\",\"type\":\"string\"}},\"required\":[\"token\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Credentials are valid\"},\"403\":{\"description\":\"Forbidden\"},\"422\":{\"description\":\"Runner is orphaned\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/api/v4/runners/verify","segments":[{"lit":"api"},{"lit":"v4"},{"lit":"runners"},{"lit":"verify"}],"select":{"$action":"verify","exist":["post_api_v4_runners_verify"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"remove":{"input":"data","name":"remove","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"runner_id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"DELETE /api/v4/projects/{id}/runners/{runner_id}","json":"{\"operationId\":\"deleteApiV4ProjectsIdRunnersRunnerId\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project owned by the authenticated user\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The ID of a runner\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"runner_id\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"204\":{\"description\":\"Unassign a runner from project\",\"schema\":{\"description\":\"API_Entities_Ci_Runner model\",\"properties\":{\"active\":{\"example\":true,\"type\":\"boolean\"},\"created_at\":{\"example\":\"2025-05-03T00:00:00.000Z\",\"format\":\"date-time\",\"type\":\"string\"},\"created_by\":{\"description\":\"API_Entities_UserBasic model\",\"properties\":{\"avatar_path\":{\"example\":\"/user/avatar/28/The-Big-Lebowski-400-400.png\",\"type\":\"string\"},\"avatar_url\":{\"example\":\"https://gravatar.com/avatar/1\",\"type\":\"string\"},\"custom_attributes\":{\"items\":{\"description\":\"API_Entities_CustomAttribute model\",\"properties\":{\"key\":{\"example\":\"foo\",\"type\":\"string\"},\"value\":{\"example\":\"bar\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"locked\":{\"type\":\"boolean\"},\"name\":{\"example\":\"Administrator\",\"type\":\"string\"},\"public_email\":{\"example\":\"john@example.com\",\"type\":\"string\"},\"state\":{\"example\":\"active\",\"type\":\"string\"},\"username\":{\"example\":\"admin\",\"type\":\"string\"},\"web_url\":{\"example\":\"https://gitlab.example.com/root\",\"type\":\"string\"}},\"type\":\"object\"},\"description\":{\"example\":\"test-1-20150125\",\"type\":\"string\"},\"id\":{\"example\":8,\"format\":\"int32\",\"type\":\"integer\"},\"ip_address\":{\"example\":\"127.0.0.1\",\"type\":\"string\"},\"is_shared\":{\"example\":true,\"type\":\"boolean\"},\"job_execution_status\":{\"enum\":[\"active\",\"idle\"],\"example\":\"idle\",\"type\":\"string\"},\"name\":{\"example\":\"test\",\"type\":\"string\"},\"online\":{\"example\":true,\"type\":\"boolean\"},\"paused\":{\"example\":false,\"type\":\"boolean\"},\"runner_type\":{\"enum\":[\"instance_type\",\"group_type\",\"project_type\"],\"example\":\"instance_type\",\"type\":\"string\"},\"status\":{\"example\":\"online\",\"type\":\"string\"}},\"type\":\"object\"}},\"400\":{\"description\":\"Bad Request\"},\"403\":{\"description\":\"You cannot unassign a runner from the owner project. Delete the runner instead\"},\"404\":{\"description\":\"Runner not found\"},\"412\":{\"description\":\"Precondition Failed\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"DELETE","orig":"/api/v4/projects/{id}/runners/{runner_id}","rename":{"param":{"id":"project_id","runner_id":"id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"runners"},{"var":"id"}],"select":{"exist":["id","project_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"system_id","orig":"system_id","reqd":true,"type":"`$STRING`"},{"active":true,"kind":"query","name":"token","orig":"token","reqd":true,"type":"`$STRING`"}]},"contract":{"id":"DELETE /api/v4/runners/managers","json":"{\"operationId\":\"deleteApiV4RunnersManagers\",\"parameters\":[{\"description\":\"The runner's authentication token\",\"in\":\"query\",\"name\":\"token\",\"required\":true,\"type\":\"string\"},{\"description\":\"The runner's system identifier.\",\"in\":\"query\",\"name\":\"system_id\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"204\":{\"description\":\"Runner manager was deleted\"},\"400\":{\"description\":\"Bad Request\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not Found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"DELETE","orig":"/api/v4/runners/managers","segments":[{"lit":"api"},{"lit":"v4"},{"lit":"runners"},{"lit":"managers"}],"select":{"$action":"manager","exist":["system_id","token"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"DELETE /api/v4/runners/{id}","json":"{\"operationId\":\"deleteApiV4RunnersId\",\"parameters\":[{\"description\":\"The ID of a runner\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"204\":{\"description\":\"Remove a runner\",\"schema\":{\"description\":\"API_Entities_Ci_Runner model\",\"properties\":{\"active\":{\"example\":true,\"type\":\"boolean\"},\"created_at\":{\"example\":\"2025-05-03T00:00:00.000Z\",\"format\":\"date-time\",\"type\":\"string\"},\"created_by\":{\"description\":\"API_Entities_UserBasic model\",\"properties\":{\"avatar_path\":{\"example\":\"/user/avatar/28/The-Big-Lebowski-400-400.png\",\"type\":\"string\"},\"avatar_url\":{\"example\":\"https://gravatar.com/avatar/1\",\"type\":\"string\"},\"custom_attributes\":{\"items\":{\"description\":\"API_Entities_CustomAttribute model\",\"properties\":{\"key\":{\"example\":\"foo\",\"type\":\"string\"},\"value\":{\"example\":\"bar\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"locked\":{\"type\":\"boolean\"},\"name\":{\"example\":\"Administrator\",\"type\":\"string\"},\"public_email\":{\"example\":\"john@example.com\",\"type\":\"string\"},\"state\":{\"example\":\"active\",\"type\":\"string\"},\"username\":{\"example\":\"admin\",\"type\":\"string\"},\"web_url\":{\"example\":\"https://gitlab.example.com/root\",\"type\":\"string\"}},\"type\":\"object\"},\"description\":{\"example\":\"test-1-20150125\",\"type\":\"string\"},\"id\":{\"example\":8,\"format\":\"int32\",\"type\":\"integer\"},\"ip_address\":{\"example\":\"127.0.0.1\",\"type\":\"string\"},\"is_shared\":{\"example\":true,\"type\":\"boolean\"},\"job_execution_status\":{\"enum\":[\"active\",\"idle\"],\"example\":\"idle\",\"type\":\"string\"},\"name\":{\"example\":\"test\",\"type\":\"string\"},\"online\":{\"example\":true,\"type\":\"boolean\"},\"paused\":{\"example\":false,\"type\":\"boolean\"},\"runner_type\":{\"enum\":[\"instance_type\",\"group_type\",\"project_type\"],\"example\":\"instance_type\",\"type\":\"string\"},\"status\":{\"example\":\"online\",\"type\":\"string\"}},\"type\":\"object\"}},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"No access granted\"},\"404\":{\"description\":\"Runner not found\"},\"412\":{\"description\":\"Precondition Failed\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"DELETE","orig":"/api/v4/runners/{id}","segments":[{"lit":"api"},{"lit":"v4"},{"lit":"runners"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"token","orig":"token","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"DELETE /api/v4/runners","json":"{\"operationId\":\"deleteApiV4Runners\",\"parameters\":[{\"description\":\"The runner's authentication token\",\"in\":\"query\",\"name\":\"token\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"204\":{\"description\":\"Delete a registered runner\"},\"403\":{\"description\":\"Forbidden\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"DELETE","orig":"/api/v4/runners","segments":[{"lit":"api"},{"lit":"v4"},{"lit":"runners"}],"select":{"exist":["token"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":3}],"key$":"remove"}},"relations":{"ancestors":[["project"]]},"key$":"runner","name__orig":"runner","Name":"Runner","name_":"runner","name-":"runner","NAME":"RUNNER","index$":258}, {"active":true,"entity":"runner","key$":"BasicRunnerFlow","kind":"basic","name":"BasicRunnerFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"runner_ref01"},"match":{"project_id":"project01"},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{"ref":"runner_ref01","suffix":"_rm0"},"match":{},"op":"remove","spec":[],"valid":[],"index$":1}]}, 'Runner')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const runner_ref01_ent = client.Runner()
    let runner_ref01_data = setup.data.new.runner['runner_ref01']
    runner_ref01_data['project_id'] = setup.idmap['project01']

    runner_ref01_data = (await runner_ref01_ent.create(runner_ref01_data)).data()
    assert(null != runner_ref01_data.id)


    // REMOVE
    const runner_ref01_match_rm0: any = { id: runner_ref01_data.id }
    await runner_ref01_ent.remove(runner_ref01_match_rm0)
  

  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/runner/RunnerTestData.json')

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
    ['runner01','runner02','runner03','project01','project02','project03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_RUNNER_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_RUNNER_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_RUNNER_ENTID']
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
  
