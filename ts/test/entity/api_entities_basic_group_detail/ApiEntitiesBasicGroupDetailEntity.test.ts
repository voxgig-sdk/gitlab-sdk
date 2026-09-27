

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


describe('ApiEntitiesBasicGroupDetailEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesBasicGroupDetail()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_basic_group_detail.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"api_entities_basic_group_detail","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/v4/projects/{id}/job_token_scope/groups_allowlist","source":"swagger2","version":2},"g":{"params":[{"a":true,"ex":1,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"post_api_v4_projects_id_job_token_scope_groups_allowlist","or":"post_api_v4_projects_id_job_token_scope_groups_allowlist","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"POST","o":"/api/v4/projects/{id}/job_token_scope/groups_allowlist","q":{"exist":["post_api_v4_projects_id_job_token_scope_groups_allowlist","project_id"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"job_token_scope"},{"lit":"groups_allowlist"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[["$.main.kit.entity.project"]]},"key$":"api_entities_basic_group_detail","name__orig":"api_entities_basic_group_detail","Name":"ApiEntitiesBasicGroupDetail","name_":"api_entities_basic_group_detail","name-":"api-entities-basic-group-detail","NAME":"API_ENTITIES_BASIC_GROUP_DETAIL","index$":11}, {"active":true,"entity":"api_entities_basic_group_detail","key$":"BasicApiEntitiesBasicGroupDetailFlow","kind":"basic","name":"BasicApiEntitiesBasicGroupDetailFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"api_entities_basic_group_detail_ref01"},"m":{"project_id":"project01"},"o":"create","s":[],"v":[],"index$":0}]}, 'ApiEntitiesBasicGroupDetail', {"POST /api/v4/projects/{id}/job_token_scope/groups_allowlist":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"ID of user project","type":"integer","format":"int32","required":true,"example":1,"index$":0},{"name":"postApiV4ProjectsIdJobTokenScopeGroupsAllowlist","in":"body","required":true,"schema":{"type":"object","properties":{"target_group_id":{"type":"integer","format":"int32","description":"ID of target group","example":2}},"required":["target_group_id"],"description":"Add target group to allowlist.","x-ref":"#/definitions/postApiV4ProjectsIdJobTokenScopeGroupsAllowlist"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const api_entities_basic_group_detail_ref01_ent = client.ApiEntitiesBasicGroupDetail()
    let api_entities_basic_group_detail_ref01_data = setup.data.new.api_entities_basic_group_detail['api_entities_basic_group_detail_ref01']
    api_entities_basic_group_detail_ref01_data['project_id'] = setup.idmap['project01']

    api_entities_basic_group_detail_ref01_data = (await api_entities_basic_group_detail_ref01_ent.create(api_entities_basic_group_detail_ref01_data)).data()
    assert(null != api_entities_basic_group_detail_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_basic_group_detail/ApiEntitiesBasicGroupDetailTestData.json')

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
    ['api_entities_basic_group_detail01','api_entities_basic_group_detail02','api_entities_basic_group_detail03','project01','project02','project03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_BASIC_GROUP_DETAIL_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_BASIC_GROUP_DETAIL_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_BASIC_GROUP_DETAIL_ENTID']
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
  
