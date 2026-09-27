

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


describe('ApiEntitiesClusterEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesCluster()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_cluster.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"cluster_type":{"a":true,"h":"Cluster Type","n":"cluster_type","r":false,"t":"`$STRING`","key$":"cluster_type","index$":0},"created_at":{"a":true,"h":"Created At","n":"created_at","r":false,"t":"`$STRING`","key$":"created_at","index$":1},"domain":{"a":true,"h":"Domain","n":"domain","r":false,"t":"`$STRING`","key$":"domain","index$":2},"enabled":{"a":true,"h":"Enabled","n":"enabled","r":false,"t":"`$BOOLEAN`","key$":"enabled","index$":3},"environment_scope":{"a":true,"h":"Environment Scope","n":"environment_scope","r":false,"t":"`$STRING`","key$":"environment_scope","index$":4},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":5},"managed":{"a":true,"h":"Managed","n":"managed","r":false,"t":"`$STRING`","key$":"managed","index$":6},"management_project":{"a":true,"h":"Management Project","n":"management_project","r":false,"t":"`$OBJECT`","key$":"management_project","index$":7},"name":{"a":true,"h":"Name","n":"name","r":false,"t":"`$STRING`","key$":"name","index$":8},"namespace_per_environment":{"a":true,"h":"Namespace Per Environment","n":"namespace_per_environment","r":false,"t":"`$STRING`","key$":"namespace_per_environment","index$":9},"platform_kubernetes":{"a":true,"h":"Platform Kubernetes","n":"platform_kubernetes","r":false,"t":"`$OBJECT`","key$":"platform_kubernetes","index$":10},"platform_type":{"a":true,"h":"Platform Type","n":"platform_type","r":false,"t":"`$STRING`","key$":"platform_type","index$":11},"provider_gcp":{"a":true,"h":"Provider Gcp","n":"provider_gcp","r":false,"t":"`$OBJECT`","key$":"provider_gcp","index$":12},"provider_type":{"a":true,"h":"Provider Type","n":"provider_type","r":false,"t":"`$STRING`","key$":"provider_type","index$":13},"user":{"a":true,"h":"User","n":"user","r":false,"sh":"API_Entities_UserBasic model","t":"`$OBJECT`","key$":"user","index$":14}},"id":{"field":"id","name":"id"},"name":"api_entities_cluster","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/v4/admin/clusters/add","source":"swagger2","version":2},"g":{"query":[{"a":true,"k":"query","n":"post_api_v4_admin_clusters_add","or":"post_api_v4_admin_clusters_add","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"POST","o":"/api/v4/admin/clusters/add","q":{"exist":["post_api_v4_admin_clusters_add"]},"r":{},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"admin"},{"lit":"clusters"},{"lit":"add"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/v4/groups/{id}/clusters","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"group_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":20,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/api/v4/groups/{id}/clusters","q":{"exist":["group_id","page","per_page"]},"r":{"param":{"id":"group_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"groups"},{"var":"group_id"},{"lit":"clusters"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /api/v4/projects/{id}/clusters","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":20,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/clusters","q":{"exist":["page","per_page","project_id"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"clusters"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"GET /api/v4/admin/clusters","source":"swagger2","version":2},"g":{},"k":"http","m":"GET","o":"/api/v4/admin/clusters","q":{},"r":{},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"admin"},{"lit":"clusters"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v4/admin/clusters/{cluster_id}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"cluster_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/v4/admin/clusters/{cluster_id}","q":{"exist":["id"]},"r":{"param":{"cluster_id":"id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"admin"},{"lit":"clusters"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /api/v4/admin/clusters/{cluster_id}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"cluster_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"put_api_v4_admin_clusters_cluster_id","or":"put_api_v4_admin_clusters_cluster_id","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"PUT","o":"/api/v4/admin/clusters/{cluster_id}","q":{"exist":["id","put_api_v4_admin_clusters_cluster_id"]},"r":{"param":{"cluster_id":"id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"admin"},{"lit":"clusters"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.group"],["$.main.kit.entity.project"]]},"key$":"api_entities_cluster","name__orig":"api_entities_cluster","Name":"ApiEntitiesCluster","name_":"api_entities_cluster","name-":"api-entities-cluster","NAME":"API_ENTITIES_CLUSTER","index$":39}, {"active":true,"entity":"api_entities_cluster","key$":"BasicApiEntitiesClusterFlow","kind":"basic","name":"BasicApiEntitiesClusterFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"api_entities_cluster_ref01"},"m":{"group_id":"group01","project_id":"project01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"api_entities_cluster_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"api_entities_cluster_ref01","srcdatavar":"api_entities_cluster_ref01_data","suffix":"_up0","textfield":"cluster_type"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_cluster_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"api_entities_cluster_ref01","srcdatavar":"api_entities_cluster_ref01_data","suffix":"_dt0"},"m":{"id":"api_entities_cluster01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_cluster_ref01"}}],"index$":3}]}, 'ApiEntitiesCluster', {"POST /api/v4/admin/clusters/add":{"protocol":"http","parameters":[{"name":"postApiV4AdminClustersAdd","in":"body","required":true,"schema":{"type":"object","properties":{"name":{"type":"string","description":"Cluster name"},"enabled":{"type":"boolean","description":"Determines if cluster is active or not, defaults to true","default":true},"environment_scope":{"type":"string","description":"The associated environment to the cluster","default":"*"},"namespace_per_environment":{"type":"boolean","description":"Deploy each environment to a separate Kubernetes namespace","default":true},"domain":{"type":"string","description":"Cluster base domain"},"management_project_id":{"type":"integer","format":"int32","description":"The ID of the management project"},"managed":{"type":"boolean","description":"Determines if GitLab will manage namespaces and service accounts for this cluster, defaults to true","default":true},"platform_kubernetes_attributes":{"type":"object","description":"Platform Kubernetes data","properties":{"api_url":{"type":"string","description":"URL to access the Kubernetes API"},"token":{"type":"string","description":"Token to authenticate against Kubernetes"},"ca_cert":{"type":"string","description":"TLS certificate (needed if API is using a self-signed TLS certificate)"},"namespace":{"type":"string","description":"Unique namespace related to Project"},"authorization_type":{"type":"string","description":"Cluster authorization type, defaults to RBAC","enum":["unknown_authorization","rbac","abac"],"default":"rbac"}},"required":["api_url","token"]}},"required":["name","platform_kubernetes_attributes"],"description":"Add existing instance cluster","x-ref":"#/definitions/postApiV4AdminClustersAdd"},"index$":0}]},"GET /api/v4/groups/{id}/clusters":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID of the group","type":"string","required":true,"index$":0},{"in":"query","name":"page","description":"Current page number","type":"integer","format":"int32","default":1,"required":false,"example":1,"index$":1},{"in":"query","name":"per_page","description":"Number of items per page","type":"integer","format":"int32","default":20,"required":false,"example":20,"index$":2}]},"GET /api/v4/projects/{id}/clusters":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"index$":0},{"in":"query","name":"page","description":"Current page number","type":"integer","format":"int32","default":1,"required":false,"example":1,"index$":1},{"in":"query","name":"per_page","description":"Number of items per page","type":"integer","format":"int32","default":20,"required":false,"example":20,"index$":2}]},"GET /api/v4/admin/clusters":{"protocol":"http","parameters":[]},"GET /api/v4/admin/clusters/{cluster_id}":{"protocol":"http","parameters":[{"in":"path","name":"cluster_id","description":"The cluster ID","type":"integer","format":"int32","required":true,"index$":0}]},"PUT /api/v4/admin/clusters/{cluster_id}":{"protocol":"http","parameters":[{"in":"path","name":"cluster_id","description":"The cluster ID","type":"integer","format":"int32","required":true,"index$":0},{"name":"putApiV4AdminClustersClusterId","in":"body","required":true,"schema":{"type":"object","properties":{"name":{"type":"string","description":"Cluster name"},"enabled":{"type":"boolean","description":"Enable or disable Gitlab's connection to your Kubernetes cluster"},"environment_scope":{"type":"string","description":"The associated environment to the cluster"},"namespace_per_environment":{"type":"boolean","description":"Deploy each environment to a separate Kubernetes namespace","default":true},"domain":{"type":"string","description":"Cluster base domain"},"management_project_id":{"type":"integer","format":"int32","description":"The ID of the management project"},"managed":{"type":"boolean","description":"Determines if GitLab will manage namespaces and service accounts for this cluster"},"platform_kubernetes_attributes":{"type":"object","description":"Platform Kubernetes data","properties":{"api_url":{"type":"string","description":"URL to access the Kubernetes API"},"token":{"type":"string","description":"Token to authenticate against Kubernetes"},"ca_cert":{"type":"string","description":"TLS certificate (needed if API is using a self-signed TLS certificate)"},"namespace":{"type":"string","description":"Unique namespace related to Project"}}}},"description":"Edit instance cluster","x-ref":"#/definitions/putApiV4AdminClustersClusterId"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const api_entities_cluster_ref01_ent = client.ApiEntitiesCluster()
    let api_entities_cluster_ref01_data = setup.data.new.api_entities_cluster['api_entities_cluster_ref01']
    api_entities_cluster_ref01_data['group_id'] = setup.idmap['group01']
    api_entities_cluster_ref01_data['project_id'] = setup.idmap['project01']

    api_entities_cluster_ref01_data = (await api_entities_cluster_ref01_ent.create(api_entities_cluster_ref01_data)).data()
    assert(null != api_entities_cluster_ref01_data.id)


    // LIST
    const api_entities_cluster_ref01_match: any = {}

    const api_entities_cluster_ref01_list = (await api_entities_cluster_ref01_ent.list(api_entities_cluster_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(api_entities_cluster_ref01_list, { id: api_entities_cluster_ref01_data.id })))


    // UPDATE
    const api_entities_cluster_ref01_data_up0: any = {}
    api_entities_cluster_ref01_data_up0.id = api_entities_cluster_ref01_data.id

    const api_entities_cluster_ref01_markdef_up0 = { name: 'cluster_type', value: 'Mark01-api_entities_cluster_ref01_' + setup.now }
    ;(api_entities_cluster_ref01_data_up0 as any)[api_entities_cluster_ref01_markdef_up0.name] = api_entities_cluster_ref01_markdef_up0.value

    const api_entities_cluster_ref01_resdata_up0 = (await api_entities_cluster_ref01_ent.update(api_entities_cluster_ref01_data_up0)).data()
    assert(api_entities_cluster_ref01_resdata_up0.id === api_entities_cluster_ref01_data_up0.id)

    assert((api_entities_cluster_ref01_resdata_up0 as any)[api_entities_cluster_ref01_markdef_up0.name] === api_entities_cluster_ref01_markdef_up0.value)


    // LOAD
    const api_entities_cluster_ref01_match_dt0: any = {}
    api_entities_cluster_ref01_match_dt0.id = api_entities_cluster_ref01_data.id
    const api_entities_cluster_ref01_data_dt0 = (await api_entities_cluster_ref01_ent.load(api_entities_cluster_ref01_match_dt0)).data()
    assert(api_entities_cluster_ref01_data_dt0.id === api_entities_cluster_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_cluster/ApiEntitiesClusterTestData.json')

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
    ['api_entities_cluster01','api_entities_cluster02','api_entities_cluster03','group01','group02','group03','project01','project02','project03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_CLUSTER_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_CLUSTER_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_CLUSTER_ENTID']
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
  
