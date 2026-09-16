

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


describe('ClusterEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.Cluster()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of []) {
      if (!live && maybeSkipControl(t, 'entityOp', 'cluster.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":0}],"id":{"field":"id","name":"id"},"name":"cluster","op":{"remove":{"input":"data","name":"remove","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"group_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"id","orig":"cluster_id","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"DELETE /api/v4/groups/{id}/clusters/{cluster_id}","json":"{\"operationId\":\"deleteApiV4GroupsIdClustersClusterId\",\"parameters\":[{\"description\":\"The ID of the group\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The Cluster ID\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"cluster_id\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"204\":{\"description\":\"Delete group cluster\",\"schema\":{\"description\":\"API_Entities_ClusterGroup model\",\"properties\":{\"cluster_type\":{\"type\":\"string\"},\"created_at\":{\"type\":\"string\"},\"domain\":{\"type\":\"string\"},\"enabled\":{\"type\":\"string\"},\"environment_scope\":{\"type\":\"string\"},\"group\":{\"description\":\"API_Entities_BasicGroupDetails model\",\"properties\":{\"id\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"web_url\":{\"type\":\"string\"}},\"type\":\"object\"},\"id\":{\"type\":\"string\"},\"managed\":{\"type\":\"string\"},\"management_project\":{\"properties\":{\"created_at\":{\"example\":\"2020-05-07T04:27:17.016Z\",\"format\":\"date-time\",\"type\":\"string\"},\"description\":{\"example\":\"desc\",\"type\":\"string\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"name\":{\"example\":\"project1\",\"type\":\"string\"},\"name_with_namespace\":{\"example\":\"John Doe / project1\",\"type\":\"string\"},\"path\":{\"example\":\"project1\",\"type\":\"string\"},\"path_with_namespace\":{\"example\":\"namespace1/project1\",\"type\":\"string\"}},\"type\":\"object\"},\"name\":{\"type\":\"string\"},\"namespace_per_environment\":{\"type\":\"string\"},\"platform_kubernetes\":{\"properties\":{\"api_url\":{\"type\":\"string\"},\"authorization_type\":{\"type\":\"string\"},\"ca_cert\":{\"type\":\"string\"},\"namespace\":{\"type\":\"string\"}},\"type\":\"object\"},\"platform_type\":{\"type\":\"string\"},\"provider_gcp\":{\"properties\":{\"cluster_id\":{\"type\":\"string\"},\"endpoint\":{\"type\":\"string\"},\"gcp_project_id\":{\"type\":\"string\"},\"machine_type\":{\"type\":\"string\"},\"num_nodes\":{\"type\":\"string\"},\"status_name\":{\"type\":\"string\"},\"zone\":{\"type\":\"string\"}},\"type\":\"object\"},\"provider_type\":{\"type\":\"string\"},\"user\":{\"description\":\"API_Entities_UserBasic model\",\"properties\":{\"avatar_path\":{\"example\":\"/user/avatar/28/The-Big-Lebowski-400-400.png\",\"type\":\"string\"},\"avatar_url\":{\"example\":\"https://gravatar.com/avatar/1\",\"type\":\"string\"},\"custom_attributes\":{\"items\":{\"description\":\"API_Entities_CustomAttribute model\",\"properties\":{\"key\":{\"example\":\"foo\",\"type\":\"string\"},\"value\":{\"example\":\"bar\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"locked\":{\"type\":\"boolean\"},\"name\":{\"example\":\"Administrator\",\"type\":\"string\"},\"public_email\":{\"example\":\"john@example.com\",\"type\":\"string\"},\"state\":{\"example\":\"active\",\"type\":\"string\"},\"username\":{\"example\":\"admin\",\"type\":\"string\"},\"web_url\":{\"example\":\"https://gitlab.example.com/root\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"}},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"DELETE","orig":"/api/v4/groups/{id}/clusters/{cluster_id}","rename":{"param":{"cluster_id":"id","id":"group_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"groups"},{"var":"group_id"},{"lit":"clusters"},{"var":"id"}],"select":{"exist":["group_id","id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"cluster_id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"DELETE /api/v4/projects/{id}/clusters/{cluster_id}","json":"{\"operationId\":\"deleteApiV4ProjectsIdClustersClusterId\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The Cluster ID\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"cluster_id\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"204\":{\"description\":\"Delete project cluster\",\"schema\":{\"description\":\"API_Entities_ClusterProject model\",\"properties\":{\"cluster_type\":{\"type\":\"string\"},\"created_at\":{\"type\":\"string\"},\"domain\":{\"type\":\"string\"},\"enabled\":{\"type\":\"string\"},\"environment_scope\":{\"type\":\"string\"},\"id\":{\"type\":\"string\"},\"managed\":{\"type\":\"string\"},\"management_project\":{\"properties\":{\"created_at\":{\"example\":\"2020-05-07T04:27:17.016Z\",\"format\":\"date-time\",\"type\":\"string\"},\"description\":{\"example\":\"desc\",\"type\":\"string\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"name\":{\"example\":\"project1\",\"type\":\"string\"},\"name_with_namespace\":{\"example\":\"John Doe / project1\",\"type\":\"string\"},\"path\":{\"example\":\"project1\",\"type\":\"string\"},\"path_with_namespace\":{\"example\":\"namespace1/project1\",\"type\":\"string\"}},\"type\":\"object\"},\"name\":{\"type\":\"string\"},\"namespace_per_environment\":{\"type\":\"string\"},\"platform_kubernetes\":{\"properties\":{\"api_url\":{\"type\":\"string\"},\"authorization_type\":{\"type\":\"string\"},\"ca_cert\":{\"type\":\"string\"},\"namespace\":{\"type\":\"string\"}},\"type\":\"object\"},\"platform_type\":{\"type\":\"string\"},\"project\":{\"description\":\"API_Entities_BasicProjectDetails model\",\"properties\":{\"avatar_url\":{\"example\":\"http://example.com/uploads/project/avatar/3/uploads/avatar.png\",\"type\":\"string\"},\"created_at\":{\"example\":\"2020-05-07T04:27:17.016Z\",\"format\":\"date-time\",\"type\":\"string\"},\"custom_attributes\":{\"description\":\"API_Entities_CustomAttribute model\",\"properties\":{\"key\":{\"example\":\"foo\",\"type\":\"string\"},\"value\":{\"example\":\"bar\",\"type\":\"string\"}},\"type\":\"object\"},\"default_branch\":{\"example\":\"main\",\"type\":\"string\"},\"description\":{\"example\":\"desc\",\"type\":\"string\"},\"forks_count\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"http_url_to_repo\":{\"example\":\"https://gitlab.example.com/gitlab/gitlab.git\",\"type\":\"string\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"last_activity_at\":{\"example\":\"2013-09-30T13:46:02Z\",\"format\":\"date-time\",\"type\":\"string\"},\"license\":{\"properties\":{\"html_url\":{\"example\":\"http://choosealicense.com/licenses/gpl-3.0\",\"type\":\"string\"},\"key\":{\"example\":\"gpl-3.0\",\"type\":\"string\"},\"name\":{\"example\":\"GNU General Public License v3.0\",\"type\":\"string\"},\"nickname\":{\"example\":\"GNU GPLv3\",\"type\":\"string\"},\"source_url\":{\"type\":\"string\"}},\"type\":\"object\"},\"license_url\":{\"example\":\"https://gitlab.example.com/gitlab/gitlab/blob/master/LICENCE\",\"type\":\"string\"},\"name\":{\"example\":\"project1\",\"type\":\"string\"},\"name_with_namespace\":{\"example\":\"John Doe / project1\",\"type\":\"string\"},\"namespace\":{\"properties\":{\"avatar_url\":{\"example\":\"https://example.com/avatar/12345\",\"type\":\"string\"},\"full_path\":{\"example\":\"group/my_project\",\"type\":\"string\"},\"id\":{\"example\":2,\"format\":\"int32\",\"type\":\"integer\"},\"kind\":{\"example\":\"project\",\"type\":\"string\"},\"name\":{\"example\":\"project\",\"type\":\"string\"},\"parent_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"path\":{\"example\":\"my_project\",\"type\":\"string\"},\"web_url\":{\"example\":\"https://example.com/group/my_project\",\"type\":\"string\"}},\"type\":\"object\"},\"path\":{\"example\":\"project1\",\"type\":\"string\"},\"path_with_namespace\":{\"example\":\"namespace1/project1\",\"type\":\"string\"},\"readme_url\":{\"example\":\"https://gitlab.example.com/gitlab/gitlab/blob/master/README.md\",\"type\":\"string\"},\"repository_storage\":{\"example\":\"default\",\"type\":\"string\"},\"ssh_url_to_repo\":{\"example\":\"git@gitlab.example.com:gitlab/gitlab.git\",\"type\":\"string\"},\"star_count\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"tag_list\":{\"example\":\"tag\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"topics\":{\"example\":\"topic\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"visibility\":{\"example\":\"public\",\"type\":\"string\"},\"web_url\":{\"example\":\"https://gitlab.example.com/gitlab/gitlab\",\"type\":\"string\"}},\"type\":\"object\"},\"provider_gcp\":{\"properties\":{\"cluster_id\":{\"type\":\"string\"},\"endpoint\":{\"type\":\"string\"},\"gcp_project_id\":{\"type\":\"string\"},\"machine_type\":{\"type\":\"string\"},\"num_nodes\":{\"type\":\"string\"},\"status_name\":{\"type\":\"string\"},\"zone\":{\"type\":\"string\"}},\"type\":\"object\"},\"provider_type\":{\"type\":\"string\"},\"user\":{\"description\":\"API_Entities_UserBasic model\",\"properties\":{\"avatar_path\":{\"example\":\"/user/avatar/28/The-Big-Lebowski-400-400.png\",\"type\":\"string\"},\"avatar_url\":{\"example\":\"https://gravatar.com/avatar/1\",\"type\":\"string\"},\"custom_attributes\":{\"items\":{\"description\":\"API_Entities_CustomAttribute model\",\"properties\":{\"key\":{\"example\":\"foo\",\"type\":\"string\"},\"value\":{\"example\":\"bar\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"locked\":{\"type\":\"boolean\"},\"name\":{\"example\":\"Administrator\",\"type\":\"string\"},\"public_email\":{\"example\":\"john@example.com\",\"type\":\"string\"},\"state\":{\"example\":\"active\",\"type\":\"string\"},\"username\":{\"example\":\"admin\",\"type\":\"string\"},\"web_url\":{\"example\":\"https://gitlab.example.com/root\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"}},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"DELETE","orig":"/api/v4/projects/{id}/clusters/{cluster_id}","rename":{"param":{"cluster_id":"id","id":"project_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"clusters"},{"var":"id"}],"select":{"exist":["id","project_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"cluster_id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"DELETE /api/v4/admin/clusters/{cluster_id}","json":"{\"operationId\":\"deleteApiV4AdminClustersClusterId\",\"parameters\":[{\"description\":\"The cluster ID\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"cluster_id\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"204\":{\"description\":\"Delete instance cluster\",\"schema\":{\"description\":\"API_Entities_Cluster model\",\"properties\":{\"cluster_type\":{\"type\":\"string\"},\"created_at\":{\"type\":\"string\"},\"domain\":{\"type\":\"string\"},\"enabled\":{\"type\":\"string\"},\"environment_scope\":{\"type\":\"string\"},\"id\":{\"type\":\"string\"},\"managed\":{\"type\":\"string\"},\"management_project\":{\"properties\":{\"created_at\":{\"example\":\"2020-05-07T04:27:17.016Z\",\"format\":\"date-time\",\"type\":\"string\"},\"description\":{\"example\":\"desc\",\"type\":\"string\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"name\":{\"example\":\"project1\",\"type\":\"string\"},\"name_with_namespace\":{\"example\":\"John Doe / project1\",\"type\":\"string\"},\"path\":{\"example\":\"project1\",\"type\":\"string\"},\"path_with_namespace\":{\"example\":\"namespace1/project1\",\"type\":\"string\"}},\"type\":\"object\"},\"name\":{\"type\":\"string\"},\"namespace_per_environment\":{\"type\":\"string\"},\"platform_kubernetes\":{\"properties\":{\"api_url\":{\"type\":\"string\"},\"authorization_type\":{\"type\":\"string\"},\"ca_cert\":{\"type\":\"string\"},\"namespace\":{\"type\":\"string\"}},\"type\":\"object\"},\"platform_type\":{\"type\":\"string\"},\"provider_gcp\":{\"properties\":{\"cluster_id\":{\"type\":\"string\"},\"endpoint\":{\"type\":\"string\"},\"gcp_project_id\":{\"type\":\"string\"},\"machine_type\":{\"type\":\"string\"},\"num_nodes\":{\"type\":\"string\"},\"status_name\":{\"type\":\"string\"},\"zone\":{\"type\":\"string\"}},\"type\":\"object\"},\"provider_type\":{\"type\":\"string\"},\"user\":{\"description\":\"API_Entities_UserBasic model\",\"properties\":{\"avatar_path\":{\"example\":\"/user/avatar/28/The-Big-Lebowski-400-400.png\",\"type\":\"string\"},\"avatar_url\":{\"example\":\"https://gravatar.com/avatar/1\",\"type\":\"string\"},\"custom_attributes\":{\"items\":{\"description\":\"API_Entities_CustomAttribute model\",\"properties\":{\"key\":{\"example\":\"foo\",\"type\":\"string\"},\"value\":{\"example\":\"bar\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"locked\":{\"type\":\"boolean\"},\"name\":{\"example\":\"Administrator\",\"type\":\"string\"},\"public_email\":{\"example\":\"john@example.com\",\"type\":\"string\"},\"state\":{\"example\":\"active\",\"type\":\"string\"},\"username\":{\"example\":\"admin\",\"type\":\"string\"},\"web_url\":{\"example\":\"https://gitlab.example.com/root\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"}},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"DELETE","orig":"/api/v4/admin/clusters/{cluster_id}","rename":{"param":{"cluster_id":"id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"admin"},{"lit":"clusters"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"remove"}},"relations":{"ancestors":[["group"],["project"]]},"key$":"cluster","name__orig":"cluster","Name":"Cluster","name_":"cluster","name-":"cluster","NAME":"CLUSTER","index$":178}, {"active":true,"entity":"cluster","key$":"BasicClusterFlow","kind":"basic","name":"BasicClusterFlow","param":{},"step":[]}, 'Cluster')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let cluster_ref01_data = Object.values(setup.data.existing.cluster)[0] as any

  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/cluster/ClusterTestData.json')

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
    ['cluster01','cluster02','cluster03','group01','group02','group03','project01','project02','project03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_CLUSTER_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_CLUSTER_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_CLUSTER_ENTID']
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
  
