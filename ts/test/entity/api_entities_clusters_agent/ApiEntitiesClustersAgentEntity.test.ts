

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


describe('ApiEntitiesClustersAgentEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesClustersAgent()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['create', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_clusters_agent.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":false,"t":"`$STRING`","key$":"created_at","index$":0},"description":{"a":true,"h":"Description","n":"description","r":false,"t":"`$STRING`","key$":"description","index$":1},"id":{"a":true,"fo":"int32","h":"Id","n":"id","r":false,"t":"`$INTEGER`","key$":"id","index$":2},"name":{"a":true,"h":"Name","n":"name","r":false,"t":"`$STRING`","key$":"name","index$":3},"name_with_namespace":{"a":true,"h":"Name With Namespace","n":"name_with_namespace","r":false,"t":"`$STRING`","key$":"name_with_namespace","index$":4},"path":{"a":true,"h":"Path","n":"path","r":false,"t":"`$STRING`","key$":"path","index$":5},"path_with_namespace":{"a":true,"h":"Path With Namespace","n":"path_with_namespace","r":false,"t":"`$STRING`","key$":"path_with_namespace","index$":6}},"id":{"field":"id","name":"id"},"name":"api_entities_clusters_agent","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/v4/projects/{id}/cluster_agents","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"post_api_v4_projects_id_cluster_agent","or":"post_api_v4_projects_id_cluster_agent","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"POST","o":"/api/v4/projects/{id}/cluster_agents","q":{"exist":["post_api_v4_projects_id_cluster_agent","project_id"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"cluster_agents"}],"t":{"req":"`reqdata`","res":"`body.config_project`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v4/projects/{id}/cluster_agents","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":20,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/cluster_agents","q":{"exist":["page","per_page","project_id"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"cluster_agents"}],"t":{"req":"`reqdata`","res":"`body.config_project`"},"index$":0},{"a":true,"co":{"id":"GET /api/v4/projects/{id}/cluster_agents/{agent_id}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"agent_id","or":"agent_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/cluster_agents/{agent_id}","q":{"exist":["agent_id","project_id"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"cluster_agents"},{"var":"agent_id"}],"t":{"req":"`reqdata`","res":"`body.config_project`"},"index$":1}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.project"],["$.main.kit.entity.project","$.main.kit.entity.cluster_agent"]]},"key$":"api_entities_clusters_agent","name__orig":"api_entities_clusters_agent","Name":"ApiEntitiesClustersAgent","name_":"api_entities_clusters_agent","name-":"api-entities-clusters-agent","NAME":"API_ENTITIES_CLUSTERS_AGENT","index$":42}, {"active":true,"entity":"api_entities_clusters_agent","key$":"BasicApiEntitiesClustersAgentFlow","kind":"basic","name":"BasicApiEntitiesClustersAgentFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"api_entities_clusters_agent_ref01"},"m":{"project_id":"project01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"api_entities_clusters_agent_ref01","srcdatavar":"api_entities_clusters_agent_ref01_data","suffix":"_dt0"},"m":{"id":"api_entities_clusters_agent01","project_id":"project01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_clusters_agent_ref01"}}],"index$":1}]}, 'ApiEntitiesClustersAgent', {"POST /api/v4/projects/{id}/cluster_agents":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"index$":0},{"name":"postApiV4ProjectsIdClusterAgents","in":"body","required":true,"schema":{"type":"object","properties":{"name":{"type":"string","description":"The name of the agent"}},"required":["name"],"description":"Register an agent with a project","x-ref":"#/definitions/postApiV4ProjectsIdClusterAgents"},"index$":1}]},"GET /api/v4/projects/{id}/cluster_agents":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"index$":0},{"in":"query","name":"page","description":"Current page number","type":"integer","format":"int32","default":1,"required":false,"example":1,"index$":1},{"in":"query","name":"per_page","description":"Number of items per page","type":"integer","format":"int32","default":20,"required":false,"example":20,"index$":2}]},"GET /api/v4/projects/{id}/cluster_agents/{agent_id}":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"index$":0},{"in":"path","name":"agent_id","description":"The ID of an agent","type":"integer","format":"int32","required":true,"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const api_entities_clusters_agent_ref01_ent = client.ApiEntitiesClustersAgent()
    let api_entities_clusters_agent_ref01_data = setup.data.new.api_entities_clusters_agent['api_entities_clusters_agent_ref01']
    api_entities_clusters_agent_ref01_data['project_id'] = setup.idmap['project01']

    api_entities_clusters_agent_ref01_data = (await api_entities_clusters_agent_ref01_ent.create(api_entities_clusters_agent_ref01_data)).data()
    assert(null != api_entities_clusters_agent_ref01_data.id)


    // LOAD
    const api_entities_clusters_agent_ref01_match_dt0: any = {}
    api_entities_clusters_agent_ref01_match_dt0.id = api_entities_clusters_agent_ref01_data.id
    const api_entities_clusters_agent_ref01_data_dt0 = (await api_entities_clusters_agent_ref01_ent.load(api_entities_clusters_agent_ref01_match_dt0)).data()
    assert(api_entities_clusters_agent_ref01_data_dt0.id === api_entities_clusters_agent_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_clusters_agent/ApiEntitiesClustersAgentTestData.json')

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
    ['api_entities_clusters_agent01','api_entities_clusters_agent02','api_entities_clusters_agent03','project01','project02','project03','cluster_agent01','cluster_agent02','cluster_agent03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_CLUSTERS_AGENT_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_CLUSTERS_AGENT_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_CLUSTERS_AGENT_ENTID']
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
  
