

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


describe('ApiEntitiesDeployKeyEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesDeployKey()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['create', 'list', 'update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_deploy_key.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"format":"date-time","name":"created_at","req":false,"type":"`$STRING`","index$":0},{"active":true,"format":"date-time","name":"expires_at","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"fingerprint","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"fingerprint_sha256","req":false,"type":"`$STRING`","index$":3},{"active":true,"format":"int32","name":"id","req":false,"type":"`$INTEGER`","index$":4},{"active":true,"name":"key","req":false,"type":"`$STRING`","index$":5},{"active":true,"format":"date-time","name":"last_used_at","req":false,"type":"`$STRING`","index$":6},{"active":true,"name":"projects_with_readonly_access","req":false,"type":"`$OBJECT`","index$":7},{"active":true,"name":"projects_with_write_access","req":false,"type":"`$OBJECT`","index$":8},{"active":true,"name":"title","req":false,"type":"`$STRING`","index$":9},{"active":true,"name":"usage_type","req":false,"type":"`$STRING`","index$":10}],"id":{"field":"id","name":"id"},"name":"api_entities_deploy_key","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"deploy_key_id","orig":"key_id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"POST /api/v4/projects/{id}/deploy_keys/{key_id}/enable","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4ProjectsIdDeployKeysKeyIdEnable\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project owned by the authenticated user\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The ID of the deploy key\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"key_id\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"201\":{\"description\":\"Enable a deploy key\",\"schema\":{\"description\":\"API_Entities_DeployKey model\",\"properties\":{\"created_at\":{\"example\":\"2015-09-03T07:24:44.627Z\",\"format\":\"date-time\",\"type\":\"string\"},\"expires_at\":{\"example\":\"2020-09-03T07:24:44.627Z\",\"format\":\"date-time\",\"type\":\"string\"},\"fingerprint\":{\"example\":\"4a:9d:64:15:ed:3a:e6:07:6e:89:36:b3:3b:03:05:d9\",\"type\":\"string\"},\"fingerprint_sha256\":{\"example\":\"SHA256:Jrs3LD1Ji30xNLtTVf9NDCj7kkBgPBb2pjvTZ3HfIgU\",\"type\":\"string\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"key\":{\"example\":\"ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAAAgQDNJAkI3Wdf0r13c8a5pEExB2YowPWCSVzfZV22pNBc1CuEbyYLHpUyaD0GwpGvFdx2aP7lMEk35k6Rz3ccBF6jRaVJyhsn5VNnW92PMpBJ/P1UebhXwsFHdQf5rTt082cSxWuk61kGWRQtk4ozt/J2DF/dIUVaLvc+z4HomT41fQ==\",\"type\":\"string\"},\"last_used_at\":{\"example\":\"2020-09-03T07:24:44.627Z\",\"format\":\"date-time\",\"type\":\"string\"},\"projects_with_readonly_access\":{\"properties\":{\"created_at\":{\"example\":\"2020-05-07T04:27:17.016Z\",\"format\":\"date-time\",\"type\":\"string\"},\"description\":{\"example\":\"desc\",\"type\":\"string\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"name\":{\"example\":\"project1\",\"type\":\"string\"},\"name_with_namespace\":{\"example\":\"John Doe / project1\",\"type\":\"string\"},\"path\":{\"example\":\"project1\",\"type\":\"string\"},\"path_with_namespace\":{\"example\":\"namespace1/project1\",\"type\":\"string\"}},\"type\":\"object\"},\"projects_with_write_access\":{\"properties\":{\"created_at\":{\"example\":\"2020-05-07T04:27:17.016Z\",\"format\":\"date-time\",\"type\":\"string\"},\"description\":{\"example\":\"desc\",\"type\":\"string\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"name\":{\"example\":\"project1\",\"type\":\"string\"},\"name_with_namespace\":{\"example\":\"John Doe / project1\",\"type\":\"string\"},\"path\":{\"example\":\"project1\",\"type\":\"string\"},\"path_with_namespace\":{\"example\":\"namespace1/project1\",\"type\":\"string\"}},\"type\":\"object\"},\"title\":{\"example\":\"Sample key 25\",\"type\":\"string\"},\"usage_type\":{\"example\":\"auth\",\"type\":\"string\"}},\"type\":\"object\"}},\"401\":{\"description\":\"Unauthorized\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/api/v4/projects/{id}/deploy_keys/{key_id}/enable","rename":{"param":{"id":"project_id","key_id":"deploy_key_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"deploy_keys"},{"var":"deploy_key_id"},{"lit":"enable"}],"select":{"exist":["deploy_key_id","project_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"post_api_v4_deploy_key","orig":"post_api_v4_deploy_key","reqd":true,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"POST /api/v4/deploy_keys","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4DeployKeys\",\"parameters\":[{\"in\":\"body\",\"name\":\"postApiV4DeployKeys\",\"required\":true,\"schema\":{\"description\":\"Create a deploy key\",\"properties\":{\"expires_at\":{\"description\":\"The expiration date of the SSH key in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ)\",\"format\":\"date-time\",\"type\":\"string\"},\"key\":{\"description\":\"New deploy key\",\"type\":\"string\"},\"title\":{\"description\":\"New deploy key's title\",\"type\":\"string\"}},\"required\":[\"key\",\"title\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"201\":{\"description\":\"Create a deploy key\",\"schema\":{\"description\":\"API_Entities_DeployKey model\",\"properties\":{\"created_at\":{\"example\":\"2015-09-03T07:24:44.627Z\",\"format\":\"date-time\",\"type\":\"string\"},\"expires_at\":{\"example\":\"2020-09-03T07:24:44.627Z\",\"format\":\"date-time\",\"type\":\"string\"},\"fingerprint\":{\"example\":\"4a:9d:64:15:ed:3a:e6:07:6e:89:36:b3:3b:03:05:d9\",\"type\":\"string\"},\"fingerprint_sha256\":{\"example\":\"SHA256:Jrs3LD1Ji30xNLtTVf9NDCj7kkBgPBb2pjvTZ3HfIgU\",\"type\":\"string\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"key\":{\"example\":\"ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAAAgQDNJAkI3Wdf0r13c8a5pEExB2YowPWCSVzfZV22pNBc1CuEbyYLHpUyaD0GwpGvFdx2aP7lMEk35k6Rz3ccBF6jRaVJyhsn5VNnW92PMpBJ/P1UebhXwsFHdQf5rTt082cSxWuk61kGWRQtk4ozt/J2DF/dIUVaLvc+z4HomT41fQ==\",\"type\":\"string\"},\"last_used_at\":{\"example\":\"2020-09-03T07:24:44.627Z\",\"format\":\"date-time\",\"type\":\"string\"},\"projects_with_readonly_access\":{\"properties\":{\"created_at\":{\"example\":\"2020-05-07T04:27:17.016Z\",\"format\":\"date-time\",\"type\":\"string\"},\"description\":{\"example\":\"desc\",\"type\":\"string\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"name\":{\"example\":\"project1\",\"type\":\"string\"},\"name_with_namespace\":{\"example\":\"John Doe / project1\",\"type\":\"string\"},\"path\":{\"example\":\"project1\",\"type\":\"string\"},\"path_with_namespace\":{\"example\":\"namespace1/project1\",\"type\":\"string\"}},\"type\":\"object\"},\"projects_with_write_access\":{\"properties\":{\"created_at\":{\"example\":\"2020-05-07T04:27:17.016Z\",\"format\":\"date-time\",\"type\":\"string\"},\"description\":{\"example\":\"desc\",\"type\":\"string\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"name\":{\"example\":\"project1\",\"type\":\"string\"},\"name_with_namespace\":{\"example\":\"John Doe / project1\",\"type\":\"string\"},\"path\":{\"example\":\"project1\",\"type\":\"string\"},\"path_with_namespace\":{\"example\":\"namespace1/project1\",\"type\":\"string\"}},\"type\":\"object\"},\"title\":{\"example\":\"Sample key 25\",\"type\":\"string\"},\"usage_type\":{\"example\":\"auth\",\"type\":\"string\"}},\"type\":\"object\"}},\"400\":{\"description\":\"Bad request\"},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/api/v4/deploy_keys","segments":[{"lit":"api"},{"lit":"v4"},{"lit":"deploy_keys"}],"select":{"exist":["post_api_v4_deploy_key"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"example":1,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":0},{"active":true,"example":20,"kind":"query","name":"per_page","orig":"per_page","reqd":false,"type":"`$INTEGER`","index$":1},{"active":true,"kind":"query","name":"public","orig":"public","reqd":false,"type":"`$BOOLEAN`","index$":2}]},"contract":{"id":"GET /api/v4/deploy_keys","json":"{\"operationId\":\"getApiV4DeployKeys\",\"parameters\":[{\"default\":1,\"description\":\"Current page number\",\"example\":1,\"format\":\"int32\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"type\":\"integer\"},{\"default\":20,\"description\":\"Number of items per page\",\"example\":20,\"format\":\"int32\",\"in\":\"query\",\"name\":\"per_page\",\"required\":false,\"type\":\"integer\"},{\"default\":false,\"description\":\"Only return deploy keys that are public\",\"in\":\"query\",\"name\":\"public\",\"required\":false,\"type\":\"boolean\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"List all deploy keys\",\"schema\":{\"items\":{\"description\":\"API_Entities_DeployKey model\",\"properties\":{\"created_at\":{\"example\":\"2015-09-03T07:24:44.627Z\",\"format\":\"date-time\",\"type\":\"string\"},\"expires_at\":{\"example\":\"2020-09-03T07:24:44.627Z\",\"format\":\"date-time\",\"type\":\"string\"},\"fingerprint\":{\"example\":\"4a:9d:64:15:ed:3a:e6:07:6e:89:36:b3:3b:03:05:d9\",\"type\":\"string\"},\"fingerprint_sha256\":{\"example\":\"SHA256:Jrs3LD1Ji30xNLtTVf9NDCj7kkBgPBb2pjvTZ3HfIgU\",\"type\":\"string\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"key\":{\"example\":\"ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAAAgQDNJAkI3Wdf0r13c8a5pEExB2YowPWCSVzfZV22pNBc1CuEbyYLHpUyaD0GwpGvFdx2aP7lMEk35k6Rz3ccBF6jRaVJyhsn5VNnW92PMpBJ/P1UebhXwsFHdQf5rTt082cSxWuk61kGWRQtk4ozt/J2DF/dIUVaLvc+z4HomT41fQ==\",\"type\":\"string\"},\"last_used_at\":{\"example\":\"2020-09-03T07:24:44.627Z\",\"format\":\"date-time\",\"type\":\"string\"},\"projects_with_readonly_access\":{\"properties\":{\"created_at\":{\"example\":\"2020-05-07T04:27:17.016Z\",\"format\":\"date-time\",\"type\":\"string\"},\"description\":{\"example\":\"desc\",\"type\":\"string\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"name\":{\"example\":\"project1\",\"type\":\"string\"},\"name_with_namespace\":{\"example\":\"John Doe / project1\",\"type\":\"string\"},\"path\":{\"example\":\"project1\",\"type\":\"string\"},\"path_with_namespace\":{\"example\":\"namespace1/project1\",\"type\":\"string\"}},\"type\":\"object\"},\"projects_with_write_access\":{\"properties\":{\"created_at\":{\"example\":\"2020-05-07T04:27:17.016Z\",\"format\":\"date-time\",\"type\":\"string\"},\"description\":{\"example\":\"desc\",\"type\":\"string\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"name\":{\"example\":\"project1\",\"type\":\"string\"},\"name_with_namespace\":{\"example\":\"John Doe / project1\",\"type\":\"string\"},\"path\":{\"example\":\"project1\",\"type\":\"string\"},\"path_with_namespace\":{\"example\":\"namespace1/project1\",\"type\":\"string\"}},\"type\":\"object\"},\"title\":{\"example\":\"Sample key 25\",\"type\":\"string\"},\"usage_type\":{\"example\":\"auth\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/deploy_keys","segments":[{"lit":"api"},{"lit":"v4"},{"lit":"deploy_keys"}],"select":{"exist":["page","per_page","public"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"update":{"input":"data","name":"update","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"key_id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":1}],"query":[{"active":true,"kind":"query","name":"put_api_v4_projects_id_deploy_keys_key_id","orig":"put_api_v4_projects_id_deploy_keys_key_id","reqd":true,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"PUT /api/v4/projects/{id}/deploy_keys/{key_id}","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"putApiV4ProjectsIdDeployKeysKeyId\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project owned by the authenticated user\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The ID of the deploy key\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"key_id\",\"required\":true,\"type\":\"integer\"},{\"in\":\"body\",\"name\":\"putApiV4ProjectsIdDeployKeysKeyId\",\"required\":true,\"schema\":{\"description\":\"Update deploy key\",\"properties\":{\"can_push\":{\"description\":\"Can deploy key push to the project's repository\",\"type\":\"boolean\"},\"title\":{\"description\":\"New deploy key's title\",\"type\":\"string\"}},\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Update deploy key\",\"schema\":{\"description\":\"API_Entities_DeployKey model\",\"properties\":{\"created_at\":{\"example\":\"2015-09-03T07:24:44.627Z\",\"format\":\"date-time\",\"type\":\"string\"},\"expires_at\":{\"example\":\"2020-09-03T07:24:44.627Z\",\"format\":\"date-time\",\"type\":\"string\"},\"fingerprint\":{\"example\":\"4a:9d:64:15:ed:3a:e6:07:6e:89:36:b3:3b:03:05:d9\",\"type\":\"string\"},\"fingerprint_sha256\":{\"example\":\"SHA256:Jrs3LD1Ji30xNLtTVf9NDCj7kkBgPBb2pjvTZ3HfIgU\",\"type\":\"string\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"key\":{\"example\":\"ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAAAgQDNJAkI3Wdf0r13c8a5pEExB2YowPWCSVzfZV22pNBc1CuEbyYLHpUyaD0GwpGvFdx2aP7lMEk35k6Rz3ccBF6jRaVJyhsn5VNnW92PMpBJ/P1UebhXwsFHdQf5rTt082cSxWuk61kGWRQtk4ozt/J2DF/dIUVaLvc+z4HomT41fQ==\",\"type\":\"string\"},\"last_used_at\":{\"example\":\"2020-09-03T07:24:44.627Z\",\"format\":\"date-time\",\"type\":\"string\"},\"projects_with_readonly_access\":{\"properties\":{\"created_at\":{\"example\":\"2020-05-07T04:27:17.016Z\",\"format\":\"date-time\",\"type\":\"string\"},\"description\":{\"example\":\"desc\",\"type\":\"string\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"name\":{\"example\":\"project1\",\"type\":\"string\"},\"name_with_namespace\":{\"example\":\"John Doe / project1\",\"type\":\"string\"},\"path\":{\"example\":\"project1\",\"type\":\"string\"},\"path_with_namespace\":{\"example\":\"namespace1/project1\",\"type\":\"string\"}},\"type\":\"object\"},\"projects_with_write_access\":{\"properties\":{\"created_at\":{\"example\":\"2020-05-07T04:27:17.016Z\",\"format\":\"date-time\",\"type\":\"string\"},\"description\":{\"example\":\"desc\",\"type\":\"string\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"name\":{\"example\":\"project1\",\"type\":\"string\"},\"name_with_namespace\":{\"example\":\"John Doe / project1\",\"type\":\"string\"},\"path\":{\"example\":\"project1\",\"type\":\"string\"},\"path_with_namespace\":{\"example\":\"namespace1/project1\",\"type\":\"string\"}},\"type\":\"object\"},\"title\":{\"example\":\"Sample key 25\",\"type\":\"string\"},\"usage_type\":{\"example\":\"auth\",\"type\":\"string\"}},\"type\":\"object\"}},\"400\":{\"description\":\"Bad request\"},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"PUT","orig":"/api/v4/projects/{id}/deploy_keys/{key_id}","rename":{"param":{"id":"project_id","key_id":"id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"deploy_keys"},{"var":"id"}],"select":{"exist":["id","project_id","put_api_v4_projects_id_deploy_keys_key_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["project"],["project","deploy_key"]]},"key$":"api_entities_deploy_key","name__orig":"api_entities_deploy_key","Name":"ApiEntitiesDeployKey","name_":"api_entities_deploy_key","name-":"api-entities-deploy-key","NAME":"API_ENTITIES_DEPLOY_KEY","index$":57}, {"active":true,"entity":"api_entities_deploy_key","key$":"BasicApiEntitiesDeployKeyFlow","kind":"basic","name":"BasicApiEntitiesDeployKeyFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"api_entities_deploy_key_ref01"},"match":{"project_id":"project01"},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"api_entities_deploy_key_ref01"}}],"index$":1},{"active":true,"data":{"project_id":"project01"},"input":{"ref":"api_entities_deploy_key_ref01","srcdatavar":"api_entities_deploy_key_ref01_data","suffix":"_up0","textfield":"created_at"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_deploy_key_ref01"}}],"valid":[],"index$":2}]}, 'ApiEntitiesDeployKey')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const api_entities_deploy_key_ref01_ent = client.ApiEntitiesDeployKey()
    let api_entities_deploy_key_ref01_data = setup.data.new.api_entities_deploy_key['api_entities_deploy_key_ref01']
    api_entities_deploy_key_ref01_data['project_id'] = setup.idmap['project01']

    api_entities_deploy_key_ref01_data = (await api_entities_deploy_key_ref01_ent.create(api_entities_deploy_key_ref01_data)).data()
    assert(null != api_entities_deploy_key_ref01_data.id)


    // LIST
    const api_entities_deploy_key_ref01_match: any = {}

    const api_entities_deploy_key_ref01_list = (await api_entities_deploy_key_ref01_ent.list(api_entities_deploy_key_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(api_entities_deploy_key_ref01_list, { id: api_entities_deploy_key_ref01_data.id })))


    // UPDATE
    const api_entities_deploy_key_ref01_data_up0: any = {}
    api_entities_deploy_key_ref01_data_up0.id = api_entities_deploy_key_ref01_data.id
    api_entities_deploy_key_ref01_data_up0 ['project_id'] = setup.idmap['project_id']

    const api_entities_deploy_key_ref01_markdef_up0 = { name: 'created_at', value: 'Mark01-api_entities_deploy_key_ref01_' + setup.now }
    ;(api_entities_deploy_key_ref01_data_up0 as any)[api_entities_deploy_key_ref01_markdef_up0.name] = api_entities_deploy_key_ref01_markdef_up0.value

    const api_entities_deploy_key_ref01_resdata_up0 = (await api_entities_deploy_key_ref01_ent.update(api_entities_deploy_key_ref01_data_up0)).data()
    assert(api_entities_deploy_key_ref01_resdata_up0.id === api_entities_deploy_key_ref01_data_up0.id)

    assert((api_entities_deploy_key_ref01_resdata_up0 as any)[api_entities_deploy_key_ref01_markdef_up0.name] === api_entities_deploy_key_ref01_markdef_up0.value)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_deploy_key/ApiEntitiesDeployKeyTestData.json')

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
    ['api_entities_deploy_key01','api_entities_deploy_key02','api_entities_deploy_key03','project01','project02','project03','project01','project02','project03','deploy_key01','deploy_key02','deploy_key03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_DEPLOY_KEY_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_DEPLOY_KEY_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_DEPLOY_KEY_ENTID']
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
  
