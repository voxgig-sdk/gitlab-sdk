

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


describe('ApiEntitiesDeploymentsApprovalEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesDeploymentsApproval()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_deployments_approval.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[],"name":"api_entities_deployments_approval","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"deployment_id","orig":"deployment_id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":1}],"query":[{"active":true,"kind":"query","name":"post_api_v4_projects_id_deployments_deployment_id_approval","orig":"post_api_v4_projects_id_deployments_deployment_id_approval","reqd":true,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"POST /api/v4/projects/{id}/deployments/{deployment_id}/approval","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4ProjectsIdDeploymentsDeploymentIdApproval\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project owned by the authenticated user\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The ID of the deployment\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"deployment_id\",\"required\":true,\"type\":\"integer\"},{\"in\":\"body\",\"name\":\"postApiV4ProjectsIdDeploymentsDeploymentIdApproval\",\"required\":true,\"schema\":{\"description\":\"Approve or reject a blocked deployment\",\"properties\":{\"comment\":{\"description\":\"A comment to go with the approval\",\"type\":\"string\"},\"represented_as\":{\"description\":\"The name of the User/Group/Role to use for the approval, when the user belongs to multiple approval rules\",\"type\":\"string\"},\"status\":{\"description\":\"The status of the approval (either `approved` or `rejected`)\",\"enum\":[\"approved\",\"rejected\"],\"type\":\"string\"}},\"required\":[\"status\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"201\":{\"description\":\"Approve or reject a blocked deployment\",\"schema\":{\"description\":\"API_Entities_Deployments_Approval model\",\"properties\":{\"comment\":{\"example\":\"LGTM\",\"type\":\"string\"},\"created_at\":{\"example\":\"2022-02-24T20:22:30.097Z\",\"format\":\"date-time\",\"type\":\"string\"},\"status\":{\"example\":\"approved\",\"type\":\"string\"},\"user\":{\"description\":\"API_Entities_UserBasic model\",\"properties\":{\"avatar_path\":{\"example\":\"/user/avatar/28/The-Big-Lebowski-400-400.png\",\"type\":\"string\"},\"avatar_url\":{\"example\":\"https://gravatar.com/avatar/1\",\"type\":\"string\"},\"custom_attributes\":{\"items\":{\"description\":\"API_Entities_CustomAttribute model\",\"properties\":{\"key\":{\"example\":\"foo\",\"type\":\"string\"},\"value\":{\"example\":\"bar\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"locked\":{\"type\":\"boolean\"},\"name\":{\"example\":\"Administrator\",\"type\":\"string\"},\"public_email\":{\"example\":\"john@example.com\",\"type\":\"string\"},\"state\":{\"example\":\"active\",\"type\":\"string\"},\"username\":{\"example\":\"admin\",\"type\":\"string\"},\"web_url\":{\"example\":\"https://gitlab.example.com/root\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/api/v4/projects/{id}/deployments/{deployment_id}/approval","rename":{"param":{"id":"project_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"deployments"},{"var":"deployment_id"},{"lit":"approval"}],"select":{"exist":["deployment_id","post_api_v4_projects_id_deployments_deployment_id_approval","project_id"]},"transform":{"req":"`reqdata`","res":"`body.user`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[["project","deployment"]]},"key$":"api_entities_deployments_approval","name__orig":"api_entities_deployments_approval","Name":"ApiEntitiesDeploymentsApproval","name_":"api_entities_deployments_approval","name-":"api-entities-deployments-approval","NAME":"API_ENTITIES_DEPLOYMENTS_APPROVAL","index$":63}, {"active":true,"entity":"api_entities_deployments_approval","key$":"BasicApiEntitiesDeploymentsApprovalFlow","kind":"basic","name":"BasicApiEntitiesDeploymentsApprovalFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"api_entities_deployments_approval_ref01"},"match":{"deployment_id":"deployment01","project_id":"project01"},"op":"create","spec":[],"valid":[],"index$":0}]}, 'ApiEntitiesDeploymentsApproval')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const api_entities_deployments_approval_ref01_ent = client.ApiEntitiesDeploymentsApproval()
    let api_entities_deployments_approval_ref01_data = setup.data.new.api_entities_deployments_approval['api_entities_deployments_approval_ref01']
    api_entities_deployments_approval_ref01_data['deployment_id'] = setup.idmap['deployment01']
    api_entities_deployments_approval_ref01_data['project_id'] = setup.idmap['project01']

    api_entities_deployments_approval_ref01_data = (await api_entities_deployments_approval_ref01_ent.create(api_entities_deployments_approval_ref01_data)).data()
    assert(null != api_entities_deployments_approval_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_deployments_approval/ApiEntitiesDeploymentsApprovalTestData.json')

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
    ['api_entities_deployments_approval01','api_entities_deployments_approval02','api_entities_deployments_approval03','project01','project02','project03','deployment01','deployment02','deployment03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_DEPLOYMENTS_APPROVAL_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_DEPLOYMENTS_APPROVAL_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_DEPLOYMENTS_APPROVAL_ENTID']
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
  
