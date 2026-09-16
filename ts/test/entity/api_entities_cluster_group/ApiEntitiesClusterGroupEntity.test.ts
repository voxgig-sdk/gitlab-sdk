

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


describe('ApiEntitiesClusterGroupEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesClusterGroup()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['create', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_cluster_group.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"cluster_type","req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"created_at","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"domain","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"enabled","req":false,"type":"`$BOOLEAN`","index$":3},{"active":true,"name":"environment_scope","req":false,"type":"`$STRING`","index$":4},{"active":true,"name":"group","req":false,"short":"API_Entities_BasicGroupDetails model","type":"`$OBJECT`","index$":5},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":6},{"active":true,"name":"managed","req":false,"type":"`$STRING`","index$":7},{"active":true,"name":"management_project","req":false,"type":"`$OBJECT`","index$":8},{"active":true,"name":"name","req":false,"type":"`$STRING`","index$":9},{"active":true,"name":"namespace_per_environment","req":false,"type":"`$STRING`","index$":10},{"active":true,"name":"platform_kubernetes","req":false,"type":"`$OBJECT`","index$":11},{"active":true,"name":"platform_type","req":false,"type":"`$STRING`","index$":12},{"active":true,"name":"provider_gcp","req":false,"type":"`$OBJECT`","index$":13},{"active":true,"name":"provider_type","req":false,"type":"`$STRING`","index$":14},{"active":true,"name":"user","req":false,"short":"API_Entities_UserBasic model","type":"`$OBJECT`","index$":15}],"id":{"field":"id","name":"id"},"name":"api_entities_cluster_group","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"group_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"kind":"query","name":"post_api_v4_groups_id_clusters_user","orig":"post_api_v4_groups_id_clusters_user","reqd":true,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"POST /api/v4/groups/{id}/clusters/user","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4GroupsIdClustersUser\",\"parameters\":[{\"description\":\"The ID of the group\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"in\":\"body\",\"name\":\"postApiV4GroupsIdClustersUser\",\"required\":true,\"schema\":{\"description\":\"Add existing cluster to group\",\"properties\":{\"domain\":{\"description\":\"Cluster base domain\",\"type\":\"string\"},\"enabled\":{\"default\":true,\"description\":\"Determines if cluster is active or not, defaults to true\",\"type\":\"boolean\"},\"environment_scope\":{\"default\":\"*\",\"description\":\"The associated environment to the cluster\",\"type\":\"string\"},\"managed\":{\"default\":true,\"description\":\"Determines if GitLab will manage namespaces and service accounts for this cluster, defaults to true\",\"type\":\"boolean\"},\"management_project_id\":{\"description\":\"The ID of the management project\",\"format\":\"int32\",\"type\":\"integer\"},\"name\":{\"description\":\"Cluster name\",\"type\":\"string\"},\"namespace_per_environment\":{\"default\":true,\"description\":\"Deploy each environment to a separate Kubernetes namespace\",\"type\":\"boolean\"},\"platform_kubernetes_attributes\":{\"description\":\"Platform Kubernetes data\",\"properties\":{\"api_url\":{\"description\":\"URL to access the Kubernetes API\",\"type\":\"string\"},\"authorization_type\":{\"default\":\"rbac\",\"description\":\"Cluster authorization type, defaults to RBAC\",\"enum\":[\"unknown_authorization\",\"rbac\",\"abac\"],\"type\":\"string\"},\"ca_cert\":{\"description\":\"TLS certificate (needed if API is using a self-signed TLS certificate)\",\"type\":\"string\"},\"namespace\":{\"description\":\"Unique namespace related to Group\",\"type\":\"string\"},\"token\":{\"description\":\"Token to authenticate against Kubernetes\",\"type\":\"string\"}},\"required\":[\"api_url\",\"token\"],\"type\":\"object\"}},\"required\":[\"name\",\"platform_kubernetes_attributes\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"201\":{\"description\":\"Add existing cluster to group\",\"schema\":{\"description\":\"API_Entities_ClusterGroup model\",\"properties\":{\"cluster_type\":{\"type\":\"string\"},\"created_at\":{\"type\":\"string\"},\"domain\":{\"type\":\"string\"},\"enabled\":{\"type\":\"string\"},\"environment_scope\":{\"type\":\"string\"},\"group\":{\"description\":\"API_Entities_BasicGroupDetails model\",\"properties\":{\"id\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"web_url\":{\"type\":\"string\"}},\"type\":\"object\"},\"id\":{\"type\":\"string\"},\"managed\":{\"type\":\"string\"},\"management_project\":{\"properties\":{\"created_at\":{\"example\":\"2020-05-07T04:27:17.016Z\",\"format\":\"date-time\",\"type\":\"string\"},\"description\":{\"example\":\"desc\",\"type\":\"string\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"name\":{\"example\":\"project1\",\"type\":\"string\"},\"name_with_namespace\":{\"example\":\"John Doe / project1\",\"type\":\"string\"},\"path\":{\"example\":\"project1\",\"type\":\"string\"},\"path_with_namespace\":{\"example\":\"namespace1/project1\",\"type\":\"string\"}},\"type\":\"object\"},\"name\":{\"type\":\"string\"},\"namespace_per_environment\":{\"type\":\"string\"},\"platform_kubernetes\":{\"properties\":{\"api_url\":{\"type\":\"string\"},\"authorization_type\":{\"type\":\"string\"},\"ca_cert\":{\"type\":\"string\"},\"namespace\":{\"type\":\"string\"}},\"type\":\"object\"},\"platform_type\":{\"type\":\"string\"},\"provider_gcp\":{\"properties\":{\"cluster_id\":{\"type\":\"string\"},\"endpoint\":{\"type\":\"string\"},\"gcp_project_id\":{\"type\":\"string\"},\"machine_type\":{\"type\":\"string\"},\"num_nodes\":{\"type\":\"string\"},\"status_name\":{\"type\":\"string\"},\"zone\":{\"type\":\"string\"}},\"type\":\"object\"},\"provider_type\":{\"type\":\"string\"},\"user\":{\"description\":\"API_Entities_UserBasic model\",\"properties\":{\"avatar_path\":{\"example\":\"/user/avatar/28/The-Big-Lebowski-400-400.png\",\"type\":\"string\"},\"avatar_url\":{\"example\":\"https://gravatar.com/avatar/1\",\"type\":\"string\"},\"custom_attributes\":{\"items\":{\"description\":\"API_Entities_CustomAttribute model\",\"properties\":{\"key\":{\"example\":\"foo\",\"type\":\"string\"},\"value\":{\"example\":\"bar\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"locked\":{\"type\":\"boolean\"},\"name\":{\"example\":\"Administrator\",\"type\":\"string\"},\"public_email\":{\"example\":\"john@example.com\",\"type\":\"string\"},\"state\":{\"example\":\"active\",\"type\":\"string\"},\"username\":{\"example\":\"admin\",\"type\":\"string\"},\"web_url\":{\"example\":\"https://gitlab.example.com/root\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"}},\"400\":{\"description\":\"Validation error\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/api/v4/groups/{id}/clusters/user","rename":{"param":{"id":"group_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"groups"},{"var":"group_id"},{"lit":"clusters"},{"lit":"user"}],"select":{"exist":["group_id","post_api_v4_groups_id_clusters_user"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"cluster_id","orig":"cluster_id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"group_id","orig":"id","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"GET /api/v4/groups/{id}/clusters/{cluster_id}","json":"{\"operationId\":\"getApiV4GroupsIdClustersClusterId\",\"parameters\":[{\"description\":\"The ID of the group\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The cluster ID\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"cluster_id\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get a single group cluster\",\"schema\":{\"description\":\"API_Entities_ClusterGroup model\",\"properties\":{\"cluster_type\":{\"type\":\"string\"},\"created_at\":{\"type\":\"string\"},\"domain\":{\"type\":\"string\"},\"enabled\":{\"type\":\"string\"},\"environment_scope\":{\"type\":\"string\"},\"group\":{\"description\":\"API_Entities_BasicGroupDetails model\",\"properties\":{\"id\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"web_url\":{\"type\":\"string\"}},\"type\":\"object\"},\"id\":{\"type\":\"string\"},\"managed\":{\"type\":\"string\"},\"management_project\":{\"properties\":{\"created_at\":{\"example\":\"2020-05-07T04:27:17.016Z\",\"format\":\"date-time\",\"type\":\"string\"},\"description\":{\"example\":\"desc\",\"type\":\"string\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"name\":{\"example\":\"project1\",\"type\":\"string\"},\"name_with_namespace\":{\"example\":\"John Doe / project1\",\"type\":\"string\"},\"path\":{\"example\":\"project1\",\"type\":\"string\"},\"path_with_namespace\":{\"example\":\"namespace1/project1\",\"type\":\"string\"}},\"type\":\"object\"},\"name\":{\"type\":\"string\"},\"namespace_per_environment\":{\"type\":\"string\"},\"platform_kubernetes\":{\"properties\":{\"api_url\":{\"type\":\"string\"},\"authorization_type\":{\"type\":\"string\"},\"ca_cert\":{\"type\":\"string\"},\"namespace\":{\"type\":\"string\"}},\"type\":\"object\"},\"platform_type\":{\"type\":\"string\"},\"provider_gcp\":{\"properties\":{\"cluster_id\":{\"type\":\"string\"},\"endpoint\":{\"type\":\"string\"},\"gcp_project_id\":{\"type\":\"string\"},\"machine_type\":{\"type\":\"string\"},\"num_nodes\":{\"type\":\"string\"},\"status_name\":{\"type\":\"string\"},\"zone\":{\"type\":\"string\"}},\"type\":\"object\"},\"provider_type\":{\"type\":\"string\"},\"user\":{\"description\":\"API_Entities_UserBasic model\",\"properties\":{\"avatar_path\":{\"example\":\"/user/avatar/28/The-Big-Lebowski-400-400.png\",\"type\":\"string\"},\"avatar_url\":{\"example\":\"https://gravatar.com/avatar/1\",\"type\":\"string\"},\"custom_attributes\":{\"items\":{\"description\":\"API_Entities_CustomAttribute model\",\"properties\":{\"key\":{\"example\":\"foo\",\"type\":\"string\"},\"value\":{\"example\":\"bar\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"locked\":{\"type\":\"boolean\"},\"name\":{\"example\":\"Administrator\",\"type\":\"string\"},\"public_email\":{\"example\":\"john@example.com\",\"type\":\"string\"},\"state\":{\"example\":\"active\",\"type\":\"string\"},\"username\":{\"example\":\"admin\",\"type\":\"string\"},\"web_url\":{\"example\":\"https://gitlab.example.com/root\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"}},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/groups/{id}/clusters/{cluster_id}","rename":{"param":{"id":"group_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"groups"},{"var":"group_id"},{"lit":"clusters"},{"var":"cluster_id"}],"select":{"exist":["cluster_id","group_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"cluster_id","orig":"cluster_id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"group_id","orig":"id","reqd":true,"type":"`$STRING`","index$":1}],"query":[{"active":true,"kind":"query","name":"put_api_v4_groups_id_clusters_cluster_id","orig":"put_api_v4_groups_id_clusters_cluster_id","reqd":true,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"PUT /api/v4/groups/{id}/clusters/{cluster_id}","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"putApiV4GroupsIdClustersClusterId\",\"parameters\":[{\"description\":\"The ID of the group\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The cluster ID\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"cluster_id\",\"required\":true,\"type\":\"integer\"},{\"in\":\"body\",\"name\":\"putApiV4GroupsIdClustersClusterId\",\"required\":true,\"schema\":{\"description\":\"Edit group cluster\",\"properties\":{\"domain\":{\"description\":\"Cluster base domain\",\"type\":\"string\"},\"enabled\":{\"description\":\"Determines if cluster is active or not\",\"type\":\"boolean\"},\"environment_scope\":{\"description\":\"The associated environment to the cluster\",\"type\":\"string\"},\"managed\":{\"description\":\"Determines if GitLab will manage namespaces and service accounts for this cluster\",\"type\":\"boolean\"},\"management_project_id\":{\"description\":\"The ID of the management project\",\"format\":\"int32\",\"type\":\"integer\"},\"name\":{\"description\":\"Cluster name\",\"type\":\"string\"},\"namespace_per_environment\":{\"default\":true,\"description\":\"Deploy each environment to a separate Kubernetes namespace\",\"type\":\"boolean\"},\"platform_kubernetes_attributes\":{\"description\":\"Platform Kubernetes data\",\"properties\":{\"api_url\":{\"description\":\"URL to access the Kubernetes API\",\"type\":\"string\"},\"ca_cert\":{\"description\":\"TLS certificate (needed if API is using a self-signed TLS certificate)\",\"type\":\"string\"},\"namespace\":{\"description\":\"Unique namespace related to Group\",\"type\":\"string\"},\"token\":{\"description\":\"Token to authenticate against Kubernetes\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Edit group cluster\",\"schema\":{\"description\":\"API_Entities_ClusterGroup model\",\"properties\":{\"cluster_type\":{\"type\":\"string\"},\"created_at\":{\"type\":\"string\"},\"domain\":{\"type\":\"string\"},\"enabled\":{\"type\":\"string\"},\"environment_scope\":{\"type\":\"string\"},\"group\":{\"description\":\"API_Entities_BasicGroupDetails model\",\"properties\":{\"id\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"web_url\":{\"type\":\"string\"}},\"type\":\"object\"},\"id\":{\"type\":\"string\"},\"managed\":{\"type\":\"string\"},\"management_project\":{\"properties\":{\"created_at\":{\"example\":\"2020-05-07T04:27:17.016Z\",\"format\":\"date-time\",\"type\":\"string\"},\"description\":{\"example\":\"desc\",\"type\":\"string\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"name\":{\"example\":\"project1\",\"type\":\"string\"},\"name_with_namespace\":{\"example\":\"John Doe / project1\",\"type\":\"string\"},\"path\":{\"example\":\"project1\",\"type\":\"string\"},\"path_with_namespace\":{\"example\":\"namespace1/project1\",\"type\":\"string\"}},\"type\":\"object\"},\"name\":{\"type\":\"string\"},\"namespace_per_environment\":{\"type\":\"string\"},\"platform_kubernetes\":{\"properties\":{\"api_url\":{\"type\":\"string\"},\"authorization_type\":{\"type\":\"string\"},\"ca_cert\":{\"type\":\"string\"},\"namespace\":{\"type\":\"string\"}},\"type\":\"object\"},\"platform_type\":{\"type\":\"string\"},\"provider_gcp\":{\"properties\":{\"cluster_id\":{\"type\":\"string\"},\"endpoint\":{\"type\":\"string\"},\"gcp_project_id\":{\"type\":\"string\"},\"machine_type\":{\"type\":\"string\"},\"num_nodes\":{\"type\":\"string\"},\"status_name\":{\"type\":\"string\"},\"zone\":{\"type\":\"string\"}},\"type\":\"object\"},\"provider_type\":{\"type\":\"string\"},\"user\":{\"description\":\"API_Entities_UserBasic model\",\"properties\":{\"avatar_path\":{\"example\":\"/user/avatar/28/The-Big-Lebowski-400-400.png\",\"type\":\"string\"},\"avatar_url\":{\"example\":\"https://gravatar.com/avatar/1\",\"type\":\"string\"},\"custom_attributes\":{\"items\":{\"description\":\"API_Entities_CustomAttribute model\",\"properties\":{\"key\":{\"example\":\"foo\",\"type\":\"string\"},\"value\":{\"example\":\"bar\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"locked\":{\"type\":\"boolean\"},\"name\":{\"example\":\"Administrator\",\"type\":\"string\"},\"public_email\":{\"example\":\"john@example.com\",\"type\":\"string\"},\"state\":{\"example\":\"active\",\"type\":\"string\"},\"username\":{\"example\":\"admin\",\"type\":\"string\"},\"web_url\":{\"example\":\"https://gitlab.example.com/root\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"}},\"400\":{\"description\":\"Validation error\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"PUT","orig":"/api/v4/groups/{id}/clusters/{cluster_id}","rename":{"param":{"id":"group_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"groups"},{"var":"group_id"},{"lit":"clusters"},{"var":"cluster_id"}],"select":{"exist":["cluster_id","group_id","put_api_v4_groups_id_clusters_cluster_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["group"],["group","cluster"]]},"key$":"api_entities_cluster_group","name__orig":"api_entities_cluster_group","Name":"ApiEntitiesClusterGroup","name_":"api_entities_cluster_group","name-":"api-entities-cluster-group","NAME":"API_ENTITIES_CLUSTER_GROUP","index$":40}, {"active":true,"entity":"api_entities_cluster_group","key$":"BasicApiEntitiesClusterGroupFlow","kind":"basic","name":"BasicApiEntitiesClusterGroupFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"api_entities_cluster_group_ref01"},"match":{"group_id":"group01"},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{"group_id":"group01"},"input":{"ref":"api_entities_cluster_group_ref01","srcdatavar":"api_entities_cluster_group_ref01_data","suffix":"_up0","textfield":"cluster_type"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_cluster_group_ref01"}}],"valid":[],"index$":1},{"active":true,"data":{},"input":{"ref":"api_entities_cluster_group_ref01","srcdatavar":"api_entities_cluster_group_ref01_data","suffix":"_dt0"},"match":{"group_id":"group01","id":"api_entities_cluster_group01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_cluster_group_ref01"}}],"index$":2}]}, 'ApiEntitiesClusterGroup')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const api_entities_cluster_group_ref01_ent = client.ApiEntitiesClusterGroup()
    let api_entities_cluster_group_ref01_data = setup.data.new.api_entities_cluster_group['api_entities_cluster_group_ref01']
    api_entities_cluster_group_ref01_data['group_id'] = setup.idmap['group01']

    api_entities_cluster_group_ref01_data = (await api_entities_cluster_group_ref01_ent.create(api_entities_cluster_group_ref01_data)).data()
    assert(null != api_entities_cluster_group_ref01_data.id)


    // UPDATE
    const api_entities_cluster_group_ref01_data_up0: any = {}
    api_entities_cluster_group_ref01_data_up0.id = api_entities_cluster_group_ref01_data.id
    api_entities_cluster_group_ref01_data_up0 ['group_id'] = setup.idmap['group_id']

    const api_entities_cluster_group_ref01_markdef_up0 = { name: 'cluster_type', value: 'Mark01-api_entities_cluster_group_ref01_' + setup.now }
    ;(api_entities_cluster_group_ref01_data_up0 as any)[api_entities_cluster_group_ref01_markdef_up0.name] = api_entities_cluster_group_ref01_markdef_up0.value

    const api_entities_cluster_group_ref01_resdata_up0 = (await api_entities_cluster_group_ref01_ent.update(api_entities_cluster_group_ref01_data_up0)).data()
    assert(api_entities_cluster_group_ref01_resdata_up0.id === api_entities_cluster_group_ref01_data_up0.id)

    assert((api_entities_cluster_group_ref01_resdata_up0 as any)[api_entities_cluster_group_ref01_markdef_up0.name] === api_entities_cluster_group_ref01_markdef_up0.value)


    // LOAD
    const api_entities_cluster_group_ref01_match_dt0: any = {}
    api_entities_cluster_group_ref01_match_dt0.id = api_entities_cluster_group_ref01_data.id
    const api_entities_cluster_group_ref01_data_dt0 = (await api_entities_cluster_group_ref01_ent.load(api_entities_cluster_group_ref01_match_dt0)).data()
    assert(api_entities_cluster_group_ref01_data_dt0.id === api_entities_cluster_group_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_cluster_group/ApiEntitiesClusterGroupTestData.json')

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
    ['api_entities_cluster_group01','api_entities_cluster_group02','api_entities_cluster_group03','group01','group02','group03','group01','group02','group03','cluster01','cluster02','cluster03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_CLUSTER_GROUP_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_CLUSTER_GROUP_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_CLUSTER_GROUP_ENTID']
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
  
