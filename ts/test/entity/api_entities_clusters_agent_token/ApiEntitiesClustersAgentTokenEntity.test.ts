

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


describe('ApiEntitiesClustersAgentTokenEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesClustersAgentToken()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_clusters_agent_token.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"agent_id":{"a":true,"h":"Agent Id","n":"agent_id","r":false,"t":"`$STRING`","key$":"agent_id","index$":0},"created_at":{"a":true,"h":"Created At","n":"created_at","r":false,"t":"`$STRING`","key$":"created_at","index$":1},"created_by_user_id":{"a":true,"h":"Created By User Id","n":"created_by_user_id","r":false,"t":"`$STRING`","key$":"created_by_user_id","index$":2},"description":{"a":true,"h":"Description","n":"description","r":false,"t":"`$STRING`","key$":"description","index$":3},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":4},"last_used_at":{"a":true,"h":"Last Used At","n":"last_used_at","r":false,"t":"`$STRING`","key$":"last_used_at","index$":5},"name":{"a":true,"h":"Name","n":"name","r":false,"t":"`$STRING`","key$":"name","index$":6},"status":{"a":true,"h":"Status","n":"status","r":false,"t":"`$STRING`","key$":"status","index$":7}},"id":{"field":"id","name":"id"},"name":"api_entities_clusters_agent_token","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v4/projects/{id}/cluster_agents/{agent_id}/tokens/{token_id}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"cluster_agent_id","or":"agent_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"token_id","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/cluster_agents/{agent_id}/tokens/{token_id}","q":{"exist":["cluster_agent_id","id","project_id"]},"r":{"param":{"agent_id":"cluster_agent_id","id":"project_id","token_id":"id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"cluster_agents"},{"var":"cluster_agent_id"},{"lit":"tokens"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.project","$.main.kit.entity.cluster_agent"]]},"key$":"api_entities_clusters_agent_token","name__orig":"api_entities_clusters_agent_token","Name":"ApiEntitiesClustersAgentToken","name_":"api_entities_clusters_agent_token","name-":"api-entities-clusters-agent-token","NAME":"API_ENTITIES_CLUSTERS_AGENT_TOKEN","index$":43}, {"active":true,"entity":"api_entities_clusters_agent_token","key$":"BasicApiEntitiesClustersAgentTokenFlow","kind":"basic","name":"BasicApiEntitiesClustersAgentTokenFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"api_entities_clusters_agent_token_ref01","srcdatavar":"api_entities_clusters_agent_token_ref01_data","suffix":"_dt0"},"m":{"cluster_agent_id":"cluster_agent01","id":"api_entities_clusters_agent_token01","project_id":"project01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_clusters_agent_token_ref01"}}],"index$":0}]}, 'ApiEntitiesClustersAgentToken', {"GET /api/v4/projects/{id}/cluster_agents/{agent_id}/tokens/{token_id}":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"index$":0},{"in":"path","name":"agent_id","description":"The ID of an agent","type":"integer","format":"int32","required":true,"index$":1},{"in":"path","name":"token_id","description":"The ID of the agent token","type":"integer","format":"int32","required":true,"index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let api_entities_clusters_agent_token_ref01_data = Object.values(setup.data.existing.api_entities_clusters_agent_token)[0] as any

    // LOAD
    const api_entities_clusters_agent_token_ref01_ent = client.ApiEntitiesClustersAgentToken()
    const api_entities_clusters_agent_token_ref01_match_dt0: any = {}
    api_entities_clusters_agent_token_ref01_match_dt0.id = api_entities_clusters_agent_token_ref01_data.id
    const api_entities_clusters_agent_token_ref01_data_dt0 = (await api_entities_clusters_agent_token_ref01_ent.load(api_entities_clusters_agent_token_ref01_match_dt0)).data()
    assert(api_entities_clusters_agent_token_ref01_data_dt0.id === api_entities_clusters_agent_token_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_clusters_agent_token/ApiEntitiesClustersAgentTokenTestData.json')

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
    ['api_entities_clusters_agent_token01','api_entities_clusters_agent_token02','api_entities_clusters_agent_token03','project01','project02','project03','cluster_agent01','cluster_agent02','cluster_agent03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_CLUSTERS_AGENT_TOKEN_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_CLUSTERS_AGENT_TOKEN_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_CLUSTERS_AGENT_TOKEN_ENTID']
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
  
