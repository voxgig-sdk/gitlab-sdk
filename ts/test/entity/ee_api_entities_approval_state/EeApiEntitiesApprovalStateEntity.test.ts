

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


describe('EeApiEntitiesApprovalStateEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.EeApiEntitiesApprovalState()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'ee_api_entities_approval_state.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[],"name":"ee_api_entities_approval_state","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"merge_request_id","orig":"merge_request_iid","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":1}],"query":[{"active":true,"kind":"query","name":"post_api_v4_projects_id_merge_requests_merge_request_iid_approval","orig":"post_api_v4_projects_id_merge_requests_merge_request_iid_approval","reqd":true,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"POST /api/v4/projects/{id}/merge_requests/{merge_request_iid}/approvals","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4ProjectsIdMergeRequestsMergeRequestIidApprovals\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The IID of a merge request\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"merge_request_iid\",\"required\":true,\"type\":\"integer\"},{\"in\":\"body\",\"name\":\"postApiV4ProjectsIdMergeRequestsMergeRequestIidApprovals\",\"required\":true,\"schema\":{\"description\":\"Deprecated in 16.0: Use the merge request approvals API instead. Change approval-related configuration\",\"properties\":{\"approvals_required\":{\"description\":\"The amount of approvals required. Must be higher than the project approvals\",\"example\":2,\"format\":\"int32\",\"type\":\"integer\"}},\"required\":[\"approvals_required\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"201\":{\"description\":\"Deprecated in 16.0: Use the merge request approvals API instead. Change approval-related configuration\",\"schema\":{\"description\":\"EE_API_Entities_ApprovalState model\",\"properties\":{\"approval_rules_left\":{\"items\":{\"properties\":{\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"name\":{\"example\":\"QA\",\"type\":\"string\"},\"rule_type\":{\"example\":\"regular\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"approvals_left\":{\"example\":2,\"format\":\"int32\",\"type\":\"integer\"},\"approvals_required\":{\"example\":2,\"format\":\"int32\",\"type\":\"integer\"},\"approved\":{\"type\":\"boolean\"},\"approved_by\":{\"items\":{\"properties\":{\"approved_at\":{\"example\":\"2025-01-01T10:00:00Z\",\"format\":\"date-time\",\"type\":\"string\"},\"user\":{\"description\":\"API_Entities_UserBasic model\",\"properties\":{\"avatar_path\":{\"example\":\"/user/avatar/28/The-Big-Lebowski-400-400.png\",\"type\":\"string\"},\"avatar_url\":{\"example\":\"https://gravatar.com/avatar/1\",\"type\":\"string\"},\"custom_attributes\":{\"items\":{\"description\":\"API_Entities_CustomAttribute model\",\"properties\":{\"key\":{\"example\":\"foo\",\"type\":\"string\"},\"value\":{\"example\":\"bar\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"locked\":{\"type\":\"boolean\"},\"name\":{\"example\":\"Administrator\",\"type\":\"string\"},\"public_email\":{\"example\":\"john@example.com\",\"type\":\"string\"},\"state\":{\"example\":\"active\",\"type\":\"string\"},\"username\":{\"example\":\"admin\",\"type\":\"string\"},\"web_url\":{\"example\":\"https://gitlab.example.com/root\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},\"type\":\"array\"},\"approver_groups\":{\"type\":\"string\"},\"approvers\":{\"type\":\"string\"},\"created_at\":{\"example\":\"2022-08-17T12:46:35.053Z\",\"format\":\"date-time\",\"type\":\"string\"},\"description\":{\"example\":\"Repellendus impedit et vel velit dignissimos.\",\"type\":\"string\"},\"has_approval_rules\":{\"type\":\"boolean\"},\"id\":{\"example\":84,\"format\":\"int32\",\"type\":\"integer\"},\"iid\":{\"example\":14,\"format\":\"int32\",\"type\":\"integer\"},\"invalid_approvers_rules\":{\"items\":{\"properties\":{\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"name\":{\"example\":\"QA\",\"type\":\"string\"},\"rule_type\":{\"example\":\"regular\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"merge_request_approvers_available\":{\"type\":\"boolean\"},\"merge_status\":{\"example\":\"can_be_merged\",\"type\":\"string\"},\"multiple_approval_rules_available\":{\"type\":\"boolean\"},\"project_id\":{\"example\":4,\"format\":\"int32\",\"type\":\"integer\"},\"require_password_to_approve\":{\"type\":\"boolean\"},\"state\":{\"example\":\"closed\",\"type\":\"string\"},\"suggested_approvers\":{\"items\":{\"description\":\"API_Entities_UserBasic model\",\"properties\":{\"avatar_path\":{\"example\":\"/user/avatar/28/The-Big-Lebowski-400-400.png\",\"type\":\"string\"},\"avatar_url\":{\"example\":\"https://gravatar.com/avatar/1\",\"type\":\"string\"},\"custom_attributes\":{\"items\":{\"description\":\"API_Entities_CustomAttribute model\",\"properties\":{\"key\":{\"example\":\"foo\",\"type\":\"string\"},\"value\":{\"example\":\"bar\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"locked\":{\"type\":\"boolean\"},\"name\":{\"example\":\"Administrator\",\"type\":\"string\"},\"public_email\":{\"example\":\"john@example.com\",\"type\":\"string\"},\"state\":{\"example\":\"active\",\"type\":\"string\"},\"username\":{\"example\":\"admin\",\"type\":\"string\"},\"web_url\":{\"example\":\"https://gitlab.example.com/root\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"title\":{\"example\":\"Impedit et ut et dolores vero provident ullam est\",\"type\":\"string\"},\"updated_at\":{\"example\":\"2022-11-14T17:22:01.470Z\",\"format\":\"date-time\",\"type\":\"string\"},\"user_can_approve\":{\"type\":\"boolean\"},\"user_has_approved\":{\"type\":\"boolean\"}},\"type\":\"object\"}}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/api/v4/projects/{id}/merge_requests/{merge_request_iid}/approvals","rename":{"param":{"id":"project_id","merge_request_iid":"merge_request_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"merge_requests"},{"var":"merge_request_id"},{"lit":"approvals"}],"select":{"exist":["merge_request_id","post_api_v4_projects_id_merge_requests_merge_request_iid_approval","project_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[["project","merge_request"]]},"key$":"ee_api_entities_approval_state","name__orig":"ee_api_entities_approval_state","Name":"EeApiEntitiesApprovalState","name_":"ee_api_entities_approval_state","name-":"ee-api-entities-approval-state","NAME":"EE_API_ENTITIES_APPROVAL_STATE","index$":194}, {"active":true,"entity":"ee_api_entities_approval_state","key$":"BasicEeApiEntitiesApprovalStateFlow","kind":"basic","name":"BasicEeApiEntitiesApprovalStateFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"ee_api_entities_approval_state_ref01"},"match":{"merge_request_id":"merge_request01","project_id":"project01"},"op":"create","spec":[],"valid":[],"index$":0}]}, 'EeApiEntitiesApprovalState')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const ee_api_entities_approval_state_ref01_ent = client.EeApiEntitiesApprovalState()
    let ee_api_entities_approval_state_ref01_data = setup.data.new.ee_api_entities_approval_state['ee_api_entities_approval_state_ref01']
    ee_api_entities_approval_state_ref01_data['merge_request_id'] = setup.idmap['merge_request01']
    ee_api_entities_approval_state_ref01_data['project_id'] = setup.idmap['project01']

    ee_api_entities_approval_state_ref01_data = (await ee_api_entities_approval_state_ref01_ent.create(ee_api_entities_approval_state_ref01_data)).data()
    assert(null != ee_api_entities_approval_state_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/ee_api_entities_approval_state/EeApiEntitiesApprovalStateTestData.json')

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
    ['ee_api_entities_approval_state01','ee_api_entities_approval_state02','ee_api_entities_approval_state03','project01','project02','project03','merge_request01','merge_request02','merge_request03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_EE_API_ENTITIES_APPROVAL_STATE_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_EE_API_ENTITIES_APPROVAL_STATE_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_EE_API_ENTITIES_APPROVAL_STATE_ENTID']
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
  
