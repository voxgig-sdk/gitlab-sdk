

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


describe('ApiEntitiesClustersAgentTokenWithTokenEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesClustersAgentTokenWithToken()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_clusters_agent_token_with_token.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"api_entities_clusters_agent_token_with_token","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/v4/projects/{id}/cluster_agents/{agent_id}/tokens","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"cluster_agent_id","or":"agent_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"post_api_v4_projects_id_cluster_agents_agent_id_token","or":"post_api_v4_projects_id_cluster_agents_agent_id_token","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"POST","o":"/api/v4/projects/{id}/cluster_agents/{agent_id}/tokens","q":{"exist":["cluster_agent_id","post_api_v4_projects_id_cluster_agents_agent_id_token","project_id"]},"r":{"param":{"agent_id":"cluster_agent_id","id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"cluster_agents"},{"var":"cluster_agent_id"},{"lit":"tokens"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[["$.main.kit.entity.project","$.main.kit.entity.cluster_agent"]]},"key$":"api_entities_clusters_agent_token_with_token","name__orig":"api_entities_clusters_agent_token_with_token","Name":"ApiEntitiesClustersAgentTokenWithToken","name_":"api_entities_clusters_agent_token_with_token","name-":"api-entities-clusters-agent-token-with-token","NAME":"API_ENTITIES_CLUSTERS_AGENT_TOKEN_WITH_TOKEN","index$":45}, {"active":true,"entity":"api_entities_clusters_agent_token_with_token","key$":"BasicApiEntitiesClustersAgentTokenWithTokenFlow","kind":"basic","name":"BasicApiEntitiesClustersAgentTokenWithTokenFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"api_entities_clusters_agent_token_with_token_ref01"},"m":{"cluster_agent_id":"cluster_agent01","project_id":"project01"},"o":"create","s":[],"v":[],"index$":0}]}, 'ApiEntitiesClustersAgentTokenWithToken', {"POST /api/v4/projects/{id}/cluster_agents/{agent_id}/tokens":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"index$":0},{"in":"path","name":"agent_id","description":"The ID of an agent","type":"integer","format":"int32","required":true,"index$":1},{"name":"postApiV4ProjectsIdClusterAgentsAgentIdTokens","in":"body","required":true,"schema":{"type":"object","properties":{"name":{"type":"string","description":"The name for the token"},"description":{"type":"string","description":"The description for the token"}},"required":["name"],"description":"Create an agent token","x-ref":"#/definitions/postApiV4ProjectsIdClusterAgentsAgentIdTokens"},"index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const api_entities_clusters_agent_token_with_token_ref01_ent = client.ApiEntitiesClustersAgentTokenWithToken()
    let api_entities_clusters_agent_token_with_token_ref01_data = setup.data.new.api_entities_clusters_agent_token_with_token['api_entities_clusters_agent_token_with_token_ref01']
    api_entities_clusters_agent_token_with_token_ref01_data['cluster_agent_id'] = setup.idmap['cluster_agent01']
    api_entities_clusters_agent_token_with_token_ref01_data['project_id'] = setup.idmap['project01']

    api_entities_clusters_agent_token_with_token_ref01_data = (await api_entities_clusters_agent_token_with_token_ref01_ent.create(api_entities_clusters_agent_token_with_token_ref01_data)).data()
    assert(null != api_entities_clusters_agent_token_with_token_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_clusters_agent_token_with_token/ApiEntitiesClustersAgentTokenWithTokenTestData.json')

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
    ['api_entities_clusters_agent_token_with_token01','api_entities_clusters_agent_token_with_token02','api_entities_clusters_agent_token_with_token03','project01','project02','project03','cluster_agent01','cluster_agent02','cluster_agent03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_CLUSTERS_AGENT_TOKEN_WITH_TOKEN_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_CLUSTERS_AGENT_TOKEN_WITH_TOKEN_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_CLUSTERS_AGENT_TOKEN_WITH_TOKEN_ENTID']
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
  
