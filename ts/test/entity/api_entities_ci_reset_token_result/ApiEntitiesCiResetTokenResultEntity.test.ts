

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


describe('ApiEntitiesCiResetTokenResultEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesCiResetTokenResult()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_ci_reset_token_result.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[],"name":"api_entities_ci_reset_token_result","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"group_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"POST /api/v4/groups/{id}/runners/reset_registration_token","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4GroupsIdRunnersResetRegistrationToken\",\"parameters\":[{\"description\":\"The ID of a group\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"201\":{\"description\":\"Reset runner registration token\",\"schema\":{\"description\":\"API_Entities_Ci_ResetTokenResult model\",\"properties\":{\"token\":{\"type\":\"string\"},\"token_expires_at\":{\"type\":\"string\"}},\"type\":\"object\"}},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Group Not Found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/api/v4/groups/{id}/runners/reset_registration_token","rename":{"param":{"id":"group_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"groups"},{"var":"group_id"},{"lit":"runners"},{"lit":"reset_registration_token"}],"select":{"exist":["group_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"post_api_v4_runners_reset_authentication_token","orig":"post_api_v4_runners_reset_authentication_token","reqd":true,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"POST /api/v4/runners/reset_authentication_token","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4RunnersResetAuthenticationToken\",\"parameters\":[{\"in\":\"body\",\"name\":\"postApiV4RunnersResetAuthenticationToken\",\"required\":true,\"schema\":{\"description\":\"Reset runner authentication token with current token\",\"properties\":{\"token\":{\"description\":\"The current authentication token of the runner\",\"type\":\"string\"}},\"required\":[\"token\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"201\":{\"description\":\"Reset runner authentication token with current token\",\"schema\":{\"description\":\"API_Entities_Ci_ResetTokenResult model\",\"properties\":{\"token\":{\"type\":\"string\"},\"token_expires_at\":{\"type\":\"string\"}},\"type\":\"object\"}},\"403\":{\"description\":\"Forbidden\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/api/v4/runners/reset_authentication_token","segments":[{"lit":"api"},{"lit":"v4"},{"lit":"runners"},{"lit":"reset_authentication_token"}],"select":{"exist":["post_api_v4_runners_reset_authentication_token"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"POST /api/v4/projects/{id}/runners/reset_registration_token","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4ProjectsIdRunnersResetRegistrationToken\",\"parameters\":[{\"description\":\"The ID of a project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"201\":{\"description\":\"Reset runner registration token\",\"schema\":{\"description\":\"API_Entities_Ci_ResetTokenResult model\",\"properties\":{\"token\":{\"type\":\"string\"},\"token_expires_at\":{\"type\":\"string\"}},\"type\":\"object\"}},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Project Not Found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/api/v4/projects/{id}/runners/reset_registration_token","rename":{"param":{"id":"project_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"runners"},{"lit":"reset_registration_token"}],"select":{"exist":["project_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":2},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"runner_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"POST /api/v4/runners/{id}/reset_authentication_token","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4RunnersIdResetAuthenticationToken\",\"parameters\":[{\"description\":\"The ID of the runner\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"201\":{\"description\":\"Reset runner authentication token\",\"schema\":{\"description\":\"API_Entities_Ci_ResetTokenResult model\",\"properties\":{\"token\":{\"type\":\"string\"},\"token_expires_at\":{\"type\":\"string\"}},\"type\":\"object\"}},\"403\":{\"description\":\"No access granted\"},\"404\":{\"description\":\"Runner not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/api/v4/runners/{id}/reset_authentication_token","rename":{"param":{"id":"runner_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"runners"},{"var":"runner_id"},{"lit":"reset_authentication_token"}],"select":{"exist":["runner_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":3},{"active":true,"args":{},"contract":{"id":"POST /api/v4/runners/reset_registration_token","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4RunnersResetRegistrationToken\",\"parameters\":[],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"201\":{\"description\":\"Reset runner registration token\",\"schema\":{\"description\":\"API_Entities_Ci_ResetTokenResult model\",\"properties\":{\"token\":{\"type\":\"string\"},\"token_expires_at\":{\"type\":\"string\"}},\"type\":\"object\"}},\"403\":{\"description\":\"Forbidden\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/api/v4/runners/reset_registration_token","segments":[{"lit":"api"},{"lit":"v4"},{"lit":"runners"},{"lit":"reset_registration_token"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":4}],"key$":"create"}},"relations":{"ancestors":[["group"],["project"],["runner"]]},"key$":"api_entities_ci_reset_token_result","name__orig":"api_entities_ci_reset_token_result","Name":"ApiEntitiesCiResetTokenResult","name_":"api_entities_ci_reset_token_result","name-":"api-entities-ci-reset-token-result","NAME":"API_ENTITIES_CI_RESET_TOKEN_RESULT","index$":31}, {"active":true,"entity":"api_entities_ci_reset_token_result","key$":"BasicApiEntitiesCiResetTokenResultFlow","kind":"basic","name":"BasicApiEntitiesCiResetTokenResultFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"api_entities_ci_reset_token_result_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0}]}, 'ApiEntitiesCiResetTokenResult')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const api_entities_ci_reset_token_result_ref01_ent = client.ApiEntitiesCiResetTokenResult()
    let api_entities_ci_reset_token_result_ref01_data = setup.data.new.api_entities_ci_reset_token_result['api_entities_ci_reset_token_result_ref01']

    api_entities_ci_reset_token_result_ref01_data = (await api_entities_ci_reset_token_result_ref01_ent.create(api_entities_ci_reset_token_result_ref01_data)).data()
    assert(null != api_entities_ci_reset_token_result_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_ci_reset_token_result/ApiEntitiesCiResetTokenResultTestData.json')

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
    ['api_entities_ci_reset_token_result01','api_entities_ci_reset_token_result02','api_entities_ci_reset_token_result03','group01','group02','group03','project01','project02','project03','runner01','runner02','runner03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_CI_RESET_TOKEN_RESULT_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_CI_RESET_TOKEN_RESULT_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_CI_RESET_TOKEN_RESULT_ENTID']
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
  
