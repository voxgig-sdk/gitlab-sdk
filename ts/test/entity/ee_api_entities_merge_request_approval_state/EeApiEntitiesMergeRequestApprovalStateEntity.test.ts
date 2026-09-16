

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


describe('EeApiEntitiesMergeRequestApprovalStateEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.EeApiEntitiesMergeRequestApprovalState()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'ee_api_entities_merge_request_approval_state.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"format":"int32","name":"approvals_required","req":false,"type":"`$INTEGER`","index$":0},{"active":true,"name":"approved","req":false,"type":"`$BOOLEAN`","index$":1},{"active":true,"name":"approved_by","req":false,"type":"`$ARRAY`","index$":2},{"active":true,"name":"code_owner","req":false,"type":"`$BOOLEAN`","index$":3},{"active":true,"name":"contains_hidden_groups","req":false,"type":"`$BOOLEAN`","index$":4},{"active":true,"name":"eligible_approvers","req":false,"type":"`$ARRAY`","index$":5},{"active":true,"name":"groups","req":false,"type":"`$ARRAY`","index$":6},{"active":true,"format":"int32","name":"id","req":false,"type":"`$INTEGER`","index$":7},{"active":true,"name":"name","req":false,"type":"`$STRING`","index$":8},{"active":true,"name":"overridden","req":false,"type":"`$BOOLEAN`","index$":9},{"active":true,"name":"report_type","req":false,"type":"`$STRING`","index$":10},{"active":true,"name":"rule_type","req":false,"type":"`$STRING`","index$":11},{"active":true,"name":"section","req":false,"type":"`$STRING`","index$":12},{"active":true,"name":"source_rule","req":false,"type":"`$OBJECT`","index$":13},{"active":true,"name":"users","req":false,"type":"`$ARRAY`","index$":14}],"id":{"field":"id","name":"id"},"name":"ee_api_entities_merge_request_approval_state","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"merge_request_id","orig":"merge_request_iid","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"GET /api/v4/projects/{id}/merge_requests/{merge_request_iid}/approval_state","json":"{\"operationId\":\"getApiV4ProjectsIdMergeRequestsMergeRequestIidApprovalState\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The IID of a merge request\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"merge_request_iid\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get approval state of merge request\",\"schema\":{\"description\":\"EE_API_Entities_MergeRequestApprovalState model\",\"properties\":{\"approval_rules_overwritten\":{\"type\":\"boolean\"},\"rules\":{\"items\":{\"properties\":{\"approvals_required\":{\"example\":2,\"format\":\"int32\",\"type\":\"integer\"},\"approved\":{\"type\":\"boolean\"},\"approved_by\":{\"items\":{\"description\":\"API_Entities_UserBasic model\",\"properties\":{\"avatar_path\":{\"example\":\"/user/avatar/28/The-Big-Lebowski-400-400.png\",\"type\":\"string\"},\"avatar_url\":{\"example\":\"https://gravatar.com/avatar/1\",\"type\":\"string\"},\"custom_attributes\":{\"items\":{\"description\":\"API_Entities_CustomAttribute model\",\"properties\":{\"key\":{\"example\":\"foo\",\"type\":\"string\"},\"value\":{\"example\":\"bar\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"locked\":{\"type\":\"boolean\"},\"name\":{\"example\":\"Administrator\",\"type\":\"string\"},\"public_email\":{\"example\":\"john@example.com\",\"type\":\"string\"},\"state\":{\"example\":\"active\",\"type\":\"string\"},\"username\":{\"example\":\"admin\",\"type\":\"string\"},\"web_url\":{\"example\":\"https://gitlab.example.com/root\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"code_owner\":{\"type\":\"boolean\"},\"contains_hidden_groups\":{\"type\":\"boolean\"},\"eligible_approvers\":{\"items\":{\"description\":\"API_Entities_UserBasic model\",\"properties\":{\"avatar_path\":{\"example\":\"/user/avatar/28/The-Big-Lebowski-400-400.png\",\"type\":\"string\"},\"avatar_url\":{\"example\":\"https://gravatar.com/avatar/1\",\"type\":\"string\"},\"custom_attributes\":{\"items\":{\"description\":\"API_Entities_CustomAttribute model\",\"properties\":{\"key\":{\"example\":\"foo\",\"type\":\"string\"},\"value\":{\"example\":\"bar\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"locked\":{\"type\":\"boolean\"},\"name\":{\"example\":\"Administrator\",\"type\":\"string\"},\"public_email\":{\"example\":\"john@example.com\",\"type\":\"string\"},\"state\":{\"example\":\"active\",\"type\":\"string\"},\"username\":{\"example\":\"admin\",\"type\":\"string\"},\"web_url\":{\"example\":\"https://gitlab.example.com/root\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"groups\":{\"items\":{\"description\":\"API_Entities_Group model\",\"properties\":{\"archived\":{\"type\":\"boolean\"},\"auto_devops_enabled\":{\"type\":\"string\"},\"auto_duo_code_review_enabled\":{\"type\":\"string\"},\"avatar_url\":{\"type\":\"string\"},\"created_at\":{\"type\":\"string\"},\"custom_attributes\":{\"description\":\"API_Entities_CustomAttribute model\",\"properties\":{\"key\":{\"example\":\"foo\",\"type\":\"string\"},\"value\":{\"example\":\"bar\",\"type\":\"string\"}},\"type\":\"object\"},\"default_branch\":{\"type\":\"string\"},\"default_branch_protection\":{\"type\":\"string\"},\"default_branch_protection_defaults\":{\"type\":\"string\"},\"description\":{\"type\":\"string\"},\"duo_core_features_enabled\":{\"description\":\"[Experimental] Indicates whether GitLab Duo Core features are enabled for the group\",\"type\":\"boolean\"},\"duo_features_enabled\":{\"type\":\"string\"},\"emails_disabled\":{\"type\":\"boolean\"},\"emails_enabled\":{\"type\":\"boolean\"},\"file_template_project_id\":{\"type\":\"string\"},\"full_name\":{\"type\":\"string\"},\"full_path\":{\"type\":\"string\"},\"id\":{\"type\":\"string\"},\"ldap_access\":{\"type\":\"string\"},\"ldap_cn\":{\"type\":\"string\"},\"ldap_group_links\":{\"properties\":{\"cn\":{\"example\":\"ldap-group-1\",\"type\":\"string\"},\"filter\":{\"example\":\"id >= 500\",\"type\":\"string\"},\"group_access\":{\"example\":10,\"format\":\"int32\",\"type\":\"integer\"},\"member_role_id\":{\"example\":12,\"format\":\"int32\",\"type\":\"integer\"},\"provider\":{\"example\":\"ldapmain\",\"type\":\"string\"}},\"type\":\"object\"},\"lfs_enabled\":{\"type\":\"string\"},\"lock_duo_features_enabled\":{\"type\":\"string\"},\"lock_math_rendering_limits_enabled\":{\"type\":\"boolean\"},\"marked_for_deletion_on\":{\"type\":\"string\"},\"math_rendering_limits_enabled\":{\"type\":\"boolean\"},\"max_artifacts_size\":{\"format\":\"int32\",\"type\":\"integer\"},\"mentions_disabled\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"organization_id\":{\"type\":\"string\"},\"parent_id\":{\"type\":\"string\"},\"path\":{\"type\":\"string\"},\"project_creation_level\":{\"type\":\"string\"},\"repository_storage\":{\"type\":\"string\"},\"request_access_enabled\":{\"type\":\"string\"},\"require_two_factor_authentication\":{\"type\":\"string\"},\"root_storage_statistics\":{\"properties\":{\"build_artifacts_size\":{\"description\":\"CI artifacts size in bytes.\",\"format\":\"int32\",\"type\":\"integer\"},\"container_registry_size\":{\"description\":\"container registry size in bytes.\",\"format\":\"int32\",\"type\":\"integer\"},\"container_registry_size_is_estimated\":{\"description\":\"Indicates whether the deduplicated container registry size for the namespace is an estimated value or not.\",\"type\":\"boolean\"},\"dependency_proxy_size\":{\"description\":\"Dependency Proxy sizes in bytes.\",\"format\":\"int32\",\"type\":\"integer\"},\"lfs_objects_size\":{\"description\":\"LFS objects size in bytes.\",\"format\":\"int32\",\"type\":\"integer\"},\"packages_size\":{\"description\":\"Packages size in bytes.\",\"format\":\"int32\",\"type\":\"integer\"},\"pipeline_artifacts_size\":{\"description\":\"CI pipeline artifacts size in bytes.\",\"format\":\"int32\",\"type\":\"integer\"},\"repository_size\":{\"description\":\"Git repository size in bytes.\",\"format\":\"int32\",\"type\":\"integer\"},\"snippets_size\":{\"description\":\"Snippets size in bytes.\",\"format\":\"int32\",\"type\":\"integer\"},\"storage_size\":{\"description\":\"Total storage in bytes.\",\"format\":\"int32\",\"type\":\"integer\"},\"uploads_size\":{\"description\":\"Uploads size in bytes.\",\"format\":\"int32\",\"type\":\"integer\"},\"wiki_size\":{\"description\":\"Wiki size in bytes.\",\"format\":\"int32\",\"type\":\"integer\"}},\"type\":\"object\"},\"saml_group_links\":{\"properties\":{\"access_level\":{\"example\":40,\"format\":\"int32\",\"type\":\"integer\"},\"member_role_id\":{\"example\":12,\"format\":\"int32\",\"type\":\"integer\"},\"name\":{\"example\":\"saml-group-1\",\"type\":\"string\"},\"provider\":{\"example\":\"saml\",\"type\":\"string\"}},\"type\":\"object\"},\"share_with_group_lock\":{\"type\":\"string\"},\"shared_runners_setting\":{\"type\":\"string\"},\"show_diff_preview_in_email\":{\"type\":\"boolean\"},\"statistics\":{\"properties\":{\"job_artifacts_size\":{\"type\":\"string\"},\"lfs_objects_size\":{\"type\":\"string\"},\"packages_size\":{\"type\":\"string\"},\"pipeline_artifacts_size\":{\"type\":\"string\"},\"repository_size\":{\"type\":\"string\"},\"snippets_size\":{\"type\":\"string\"},\"storage_size\":{\"type\":\"string\"},\"uploads_size\":{\"type\":\"string\"},\"wiki_size\":{\"type\":\"string\"}},\"type\":\"object\"},\"subgroup_creation_level\":{\"type\":\"string\"},\"two_factor_grace_period\":{\"type\":\"string\"},\"visibility\":{\"type\":\"string\"},\"web_based_commit_signing_enabled\":{\"type\":\"string\"},\"web_url\":{\"type\":\"string\"},\"wiki_access_level\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"name\":{\"example\":\"QA\",\"type\":\"string\"},\"overridden\":{\"type\":\"boolean\"},\"report_type\":{\"type\":\"string\"},\"rule_type\":{\"example\":\"regular\",\"type\":\"string\"},\"section\":{\"example\":\"Backend\",\"type\":\"string\"},\"source_rule\":{\"properties\":{\"approvals_required\":{\"example\":2,\"format\":\"int32\",\"type\":\"integer\"}},\"type\":\"object\"},\"users\":{\"items\":{\"description\":\"API_Entities_UserBasic model\",\"properties\":{\"avatar_path\":{\"example\":\"/user/avatar/28/The-Big-Lebowski-400-400.png\",\"type\":\"string\"},\"avatar_url\":{\"example\":\"https://gravatar.com/avatar/1\",\"type\":\"string\"},\"custom_attributes\":{\"items\":{\"description\":\"API_Entities_CustomAttribute model\",\"properties\":{\"key\":{\"example\":\"foo\",\"type\":\"string\"},\"value\":{\"example\":\"bar\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"locked\":{\"type\":\"boolean\"},\"name\":{\"example\":\"Administrator\",\"type\":\"string\"},\"public_email\":{\"example\":\"john@example.com\",\"type\":\"string\"},\"state\":{\"example\":\"active\",\"type\":\"string\"},\"username\":{\"example\":\"admin\",\"type\":\"string\"},\"web_url\":{\"example\":\"https://gitlab.example.com/root\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/projects/{id}/merge_requests/{merge_request_iid}/approval_state","rename":{"param":{"id":"project_id","merge_request_iid":"merge_request_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"merge_requests"},{"var":"merge_request_id"},{"lit":"approval_state"}],"select":{"exist":["merge_request_id","project_id"]},"transform":{"req":"`reqdata`","res":"`body.rules`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["project","merge_request"]]},"key$":"ee_api_entities_merge_request_approval_state","name__orig":"ee_api_entities_merge_request_approval_state","Name":"EeApiEntitiesMergeRequestApprovalState","name_":"ee_api_entities_merge_request_approval_state","name-":"ee-api-entities-merge-request-approval-state","NAME":"EE_API_ENTITIES_MERGE_REQUEST_APPROVAL_STATE","index$":200}, {"active":true,"entity":"ee_api_entities_merge_request_approval_state","key$":"BasicEeApiEntitiesMergeRequestApprovalStateFlow","kind":"basic","name":"BasicEeApiEntitiesMergeRequestApprovalStateFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{"merge_request_id":"merge_request01","project_id":"project01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"ee_api_entities_merge_request_approval_state_ref01"}}],"index$":0}]}, 'EeApiEntitiesMergeRequestApprovalState')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let ee_api_entities_merge_request_approval_state_ref01_data = Object.values(setup.data.existing.ee_api_entities_merge_request_approval_state)[0] as any

    // LIST
    const ee_api_entities_merge_request_approval_state_ref01_ent = client.EeApiEntitiesMergeRequestApprovalState()
    const ee_api_entities_merge_request_approval_state_ref01_match: any = {}
    ee_api_entities_merge_request_approval_state_ref01_match['merge_request_id'] = setup.idmap['merge_request01']
    ee_api_entities_merge_request_approval_state_ref01_match['project_id'] = setup.idmap['project01']

    const ee_api_entities_merge_request_approval_state_ref01_list = (await ee_api_entities_merge_request_approval_state_ref01_ent.list(ee_api_entities_merge_request_approval_state_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/ee_api_entities_merge_request_approval_state/EeApiEntitiesMergeRequestApprovalStateTestData.json')

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
    ['ee_api_entities_merge_request_approval_state01','ee_api_entities_merge_request_approval_state02','ee_api_entities_merge_request_approval_state03','project01','project02','project03','merge_request01','merge_request02','merge_request03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_EE_API_ENTITIES_MERGE_REQUEST_APPROVAL_STATE_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_EE_API_ENTITIES_MERGE_REQUEST_APPROVAL_STATE_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_EE_API_ENTITIES_MERGE_REQUEST_APPROVAL_STATE_ENTID']
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
  
