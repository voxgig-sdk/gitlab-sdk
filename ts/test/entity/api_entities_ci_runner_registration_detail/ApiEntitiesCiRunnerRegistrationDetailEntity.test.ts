

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


describe('ApiEntitiesCiRunnerRegistrationDetailEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesCiRunnerRegistrationDetail()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_ci_runner_registration_detail.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[],"name":"api_entities_ci_runner_registration_detail","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"post_api_v4_runner","orig":"post_api_v4_runner","reqd":true,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"POST /api/v4/runners","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4Runners\",\"parameters\":[{\"in\":\"body\",\"name\":\"postApiV4Runners\",\"required\":true,\"schema\":{\"description\":\"Register a new runner\",\"properties\":{\"access_level\":{\"description\":\"The access level of the runner\",\"enum\":[\"not_protected\",\"ref_protected\"],\"type\":\"string\"},\"active\":{\"description\":\"Deprecated: Use `paused` instead. Specifies if the runner is allowed to receive new jobs\",\"type\":\"boolean\"},\"description\":{\"description\":\"Description of the runner\",\"type\":\"string\"},\"info\":{\"description\":\"Runner's metadata\",\"properties\":{\"architecture\":{\"description\":\"Runner's architecture\",\"type\":\"string\"},\"name\":{\"description\":\"Runner's name\",\"type\":\"string\"},\"platform\":{\"description\":\"Runner's platform\",\"type\":\"string\"},\"revision\":{\"description\":\"Runner's revision\",\"type\":\"string\"},\"version\":{\"description\":\"Runner's version\",\"type\":\"string\"}},\"type\":\"object\"},\"locked\":{\"description\":\"Specifies if the runner should be locked for the current project\",\"type\":\"boolean\"},\"maintainer_note\":{\"description\":\"Deprecated: see `maintenance_note`\",\"type\":\"string\"},\"maintenance_note\":{\"description\":\"Free-form maintenance notes for the runner (1024 characters)\",\"type\":\"string\"},\"maximum_timeout\":{\"description\":\"Maximum timeout that limits the amount of time (in seconds) that runners can run jobs\",\"format\":\"int32\",\"type\":\"integer\"},\"paused\":{\"description\":\"Specifies if the runner should ignore new jobs\",\"type\":\"boolean\"},\"run_untagged\":{\"description\":\"Specifies if the runner should handle untagged jobs\",\"type\":\"boolean\"},\"tag_list\":{\"description\":\"A list of runner tags\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"token\":{\"description\":\"Registration token\",\"type\":\"string\"}},\"required\":[\"token\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"201\":{\"description\":\"Register a new runner\",\"schema\":{\"description\":\"API_Entities_Ci_RunnerRegistrationDetails model\",\"properties\":{\"id\":{\"type\":\"string\"},\"token\":{\"type\":\"string\"},\"token_expires_at\":{\"type\":\"string\"}},\"type\":\"object\"}},\"400\":{\"description\":\"Bad Request\"},\"403\":{\"description\":\"Forbidden\"},\"410\":{\"description\":\"Gone\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/api/v4/runners","segments":[{"lit":"api"},{"lit":"v4"},{"lit":"runners"}],"select":{"exist":["post_api_v4_runner"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"post_api_v4_user_runner","orig":"post_api_v4_user_runner","reqd":true,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"POST /api/v4/user/runners","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4UserRunners\",\"parameters\":[{\"in\":\"body\",\"name\":\"postApiV4UserRunners\",\"required\":true,\"schema\":{\"description\":\"Create a runner owned by currently authenticated user\",\"properties\":{\"access_level\":{\"description\":\"The access level of the runner\",\"enum\":[\"not_protected\",\"ref_protected\"],\"type\":\"string\"},\"description\":{\"description\":\"Description of the runner\",\"type\":\"string\"},\"group_id\":{\"description\":\"The ID of the group that the runner is created in\",\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"locked\":{\"description\":\"Specifies if the runner should be locked for the current project (defaults to false)\",\"type\":\"boolean\"},\"maintenance_note\":{\"description\":\"Free-form maintenance notes for the runner (1024 characters)\",\"type\":\"string\"},\"maximum_timeout\":{\"description\":\"Maximum timeout that limits the amount of time (in seconds) that runners can run jobs\",\"format\":\"int32\",\"type\":\"integer\"},\"paused\":{\"description\":\"Specifies if the runner should ignore new jobs (defaults to false)\",\"type\":\"boolean\"},\"project_id\":{\"description\":\"The ID of the project that the runner is created in\",\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"run_untagged\":{\"description\":\"Specifies if the runner should handle untagged jobs  (defaults to true)\",\"type\":\"boolean\"},\"runner_type\":{\"description\":\"Specifies the scope of the runner\",\"enum\":[\"instance_type\",\"group_type\",\"project_type\"],\"type\":\"string\"},\"tag_list\":{\"description\":\"A list of runner tags\",\"items\":{\"type\":\"string\"},\"type\":\"array\"}},\"required\":[\"runner_type\",\"group_id\",\"project_id\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"201\":{\"description\":\"Create a runner owned by currently authenticated user\",\"schema\":{\"description\":\"API_Entities_Ci_RunnerRegistrationDetails model\",\"properties\":{\"id\":{\"type\":\"string\"},\"token\":{\"type\":\"string\"},\"token_expires_at\":{\"type\":\"string\"}},\"type\":\"object\"}},\"400\":{\"description\":\"Bad Request\"},\"403\":{\"description\":\"Forbidden\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/api/v4/user/runners","segments":[{"lit":"api"},{"lit":"v4"},{"lit":"user"},{"lit":"runners"}],"select":{"exist":["post_api_v4_user_runner"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"api_entities_ci_runner_registration_detail","name__orig":"api_entities_ci_runner_registration_detail","Name":"ApiEntitiesCiRunnerRegistrationDetail","name_":"api_entities_ci_runner_registration_detail","name-":"api-entities-ci-runner-registration-detail","NAME":"API_ENTITIES_CI_RUNNER_REGISTRATION_DETAIL","index$":36}, {"active":true,"entity":"api_entities_ci_runner_registration_detail","key$":"BasicApiEntitiesCiRunnerRegistrationDetailFlow","kind":"basic","name":"BasicApiEntitiesCiRunnerRegistrationDetailFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"api_entities_ci_runner_registration_detail_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0}]}, 'ApiEntitiesCiRunnerRegistrationDetail')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const api_entities_ci_runner_registration_detail_ref01_ent = client.ApiEntitiesCiRunnerRegistrationDetail()
    let api_entities_ci_runner_registration_detail_ref01_data = setup.data.new.api_entities_ci_runner_registration_detail['api_entities_ci_runner_registration_detail_ref01']

    api_entities_ci_runner_registration_detail_ref01_data = (await api_entities_ci_runner_registration_detail_ref01_ent.create(api_entities_ci_runner_registration_detail_ref01_data)).data()
    assert(null != api_entities_ci_runner_registration_detail_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_ci_runner_registration_detail/ApiEntitiesCiRunnerRegistrationDetailTestData.json')

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
    ['api_entities_ci_runner_registration_detail01','api_entities_ci_runner_registration_detail02','api_entities_ci_runner_registration_detail03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_CI_RUNNER_REGISTRATION_DETAIL_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_CI_RUNNER_REGISTRATION_DETAIL_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_CI_RUNNER_REGISTRATION_DETAIL_ENTID']
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
  
