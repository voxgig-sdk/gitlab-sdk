

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[],"name":"api_entities_clusters_agent_token_with_token","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"cluster_agent_id","orig":"agent_id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":1}],"query":[{"active":true,"kind":"query","name":"post_api_v4_projects_id_cluster_agents_agent_id_token","orig":"post_api_v4_projects_id_cluster_agents_agent_id_token","reqd":true,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"POST /api/v4/projects/{id}/cluster_agents/{agent_id}/tokens","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4ProjectsIdClusterAgentsAgentIdTokens\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The ID of an agent\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"agent_id\",\"required\":true,\"type\":\"integer\"},{\"in\":\"body\",\"name\":\"postApiV4ProjectsIdClusterAgentsAgentIdTokens\",\"required\":true,\"schema\":{\"description\":\"Create an agent token\",\"properties\":{\"description\":{\"description\":\"The description for the token\",\"type\":\"string\"},\"name\":{\"description\":\"The name for the token\",\"type\":\"string\"}},\"required\":[\"name\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"201\":{\"description\":\"Create an agent token\",\"schema\":{\"description\":\"API_Entities_Clusters_AgentTokenWithToken model\",\"properties\":{\"agent_id\":{\"type\":\"string\"},\"created_at\":{\"type\":\"string\"},\"created_by_user_id\":{\"type\":\"string\"},\"description\":{\"type\":\"string\"},\"id\":{\"type\":\"string\"},\"last_used_at\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"status\":{\"type\":\"string\"},\"token\":{\"type\":\"string\"}},\"type\":\"object\"}}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/api/v4/projects/{id}/cluster_agents/{agent_id}/tokens","rename":{"param":{"agent_id":"cluster_agent_id","id":"project_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"cluster_agents"},{"var":"cluster_agent_id"},{"lit":"tokens"}],"select":{"exist":["cluster_agent_id","post_api_v4_projects_id_cluster_agents_agent_id_token","project_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[["project","cluster_agent"]]},"key$":"api_entities_clusters_agent_token_with_token","name__orig":"api_entities_clusters_agent_token_with_token","Name":"ApiEntitiesClustersAgentTokenWithToken","name_":"api_entities_clusters_agent_token_with_token","name-":"api-entities-clusters-agent-token-with-token","NAME":"API_ENTITIES_CLUSTERS_AGENT_TOKEN_WITH_TOKEN","index$":45}, {"active":true,"entity":"api_entities_clusters_agent_token_with_token","key$":"BasicApiEntitiesClustersAgentTokenWithTokenFlow","kind":"basic","name":"BasicApiEntitiesClustersAgentTokenWithTokenFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"api_entities_clusters_agent_token_with_token_ref01"},"match":{"cluster_agent_id":"cluster_agent01","project_id":"project01"},"op":"create","spec":[],"valid":[],"index$":0}]}, 'ApiEntitiesClustersAgentTokenWithToken')
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
  
