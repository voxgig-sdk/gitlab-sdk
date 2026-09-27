

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"ee_api_entities_approval_state","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/v4/projects/{id}/merge_requests/{merge_request_iid}/approvals","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"merge_request_id","or":"merge_request_iid","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"post_api_v4_projects_id_merge_requests_merge_request_iid_approval","or":"post_api_v4_projects_id_merge_requests_merge_request_iid_approval","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"POST","o":"/api/v4/projects/{id}/merge_requests/{merge_request_iid}/approvals","q":{"exist":["merge_request_id","post_api_v4_projects_id_merge_requests_merge_request_iid_approval","project_id"]},"r":{"param":{"id":"project_id","merge_request_iid":"merge_request_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"merge_requests"},{"var":"merge_request_id"},{"lit":"approvals"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[["$.main.kit.entity.project","$.main.kit.entity.merge_request"]]},"key$":"ee_api_entities_approval_state","name__orig":"ee_api_entities_approval_state","Name":"EeApiEntitiesApprovalState","name_":"ee_api_entities_approval_state","name-":"ee-api-entities-approval-state","NAME":"EE_API_ENTITIES_APPROVAL_STATE","index$":194}, {"active":true,"entity":"ee_api_entities_approval_state","key$":"BasicEeApiEntitiesApprovalStateFlow","kind":"basic","name":"BasicEeApiEntitiesApprovalStateFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"ee_api_entities_approval_state_ref01"},"m":{"merge_request_id":"merge_request01","project_id":"project01"},"o":"create","s":[],"v":[],"index$":0}]}, 'EeApiEntitiesApprovalState', {"POST /api/v4/projects/{id}/merge_requests/{merge_request_iid}/approvals":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"index$":0},{"in":"path","name":"merge_request_iid","description":"The IID of a merge request","type":"integer","format":"int32","required":true,"index$":1},{"name":"postApiV4ProjectsIdMergeRequestsMergeRequestIidApprovals","in":"body","required":true,"schema":{"type":"object","properties":{"approvals_required":{"type":"integer","format":"int32","description":"The amount of approvals required. Must be higher than the project approvals","example":2}},"required":["approvals_required"],"description":"Deprecated in 16.0: Use the merge request approvals API instead. Change approval-related configuration","x-ref":"#/definitions/postApiV4ProjectsIdMergeRequestsMergeRequestIidApprovals"},"index$":2}]}})
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
  
