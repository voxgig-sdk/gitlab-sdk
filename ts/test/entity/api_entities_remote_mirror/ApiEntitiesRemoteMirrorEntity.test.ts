

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


describe('ApiEntitiesRemoteMirrorEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesRemoteMirror()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_remote_mirror.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"auth_method","req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"enabled","req":false,"type":"`$BOOLEAN`","index$":1},{"active":true,"name":"host_keys","req":false,"type":"`$ARRAY`","index$":2},{"active":true,"format":"int32","name":"id","req":false,"type":"`$INTEGER`","index$":3},{"active":true,"name":"keep_divergent_refs","req":false,"type":"`$BOOLEAN`","index$":4},{"active":true,"format":"int32","name":"last_error","req":false,"type":"`$INTEGER`","index$":5},{"active":true,"format":"date-time","name":"last_successful_update_at","req":false,"type":"`$STRING`","index$":6},{"active":true,"format":"date-time","name":"last_update_at","req":false,"type":"`$STRING`","index$":7},{"active":true,"format":"date-time","name":"last_update_started_at","req":false,"type":"`$STRING`","index$":8},{"active":true,"name":"mirror_branch_regex","req":false,"type":"`$STRING`","index$":9},{"active":true,"name":"only_protected_branches","req":false,"type":"`$BOOLEAN`","index$":10},{"active":true,"name":"update_status","req":false,"type":"`$STRING`","index$":11},{"active":true,"name":"url","req":false,"type":"`$STRING`","index$":12}],"id":{"field":"id","name":"id"},"name":"api_entities_remote_mirror","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"kind":"query","name":"post_api_v4_projects_id_remote_mirror","orig":"post_api_v4_projects_id_remote_mirror","reqd":true,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"POST /api/v4/projects/{id}/remote_mirrors","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4ProjectsIdRemoteMirrors\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"in\":\"body\",\"name\":\"postApiV4ProjectsIdRemoteMirrors\",\"required\":true,\"schema\":{\"description\":\"Create remote mirror for a project\",\"properties\":{\"auth_method\":{\"description\":\"Determines the mirror authentication method\",\"enum\":[\"ssh_public_key\",\"password\"],\"type\":\"string\"},\"enabled\":{\"description\":\"Determines if the mirror is enabled\",\"type\":\"boolean\"},\"keep_divergent_refs\":{\"description\":\"Determines if divergent refs are kept on the target\",\"type\":\"boolean\"},\"mirror_branch_regex\":{\"description\":\"Determines if only matched branches are mirrored\",\"type\":\"string\"},\"only_protected_branches\":{\"description\":\"Determines if only protected branches are mirrored\",\"type\":\"boolean\"},\"url\":{\"description\":\"The URL for a remote mirror\",\"example\":\"https://*****:*****@example.com/gitlab/example.git\",\"type\":\"string\"}},\"required\":[\"url\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"201\":{\"description\":\"Create remote mirror for a project\",\"schema\":{\"description\":\"API_Entities_RemoteMirror model\",\"properties\":{\"auth_method\":{\"example\":\"password\",\"type\":\"string\"},\"enabled\":{\"example\":true,\"type\":\"boolean\"},\"host_keys\":{\"items\":{\"properties\":{\"fingerprint_sha256\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"id\":{\"example\":101486,\"format\":\"int32\",\"type\":\"integer\"},\"keep_divergent_refs\":{\"type\":\"boolean\"},\"last_error\":{\"example\":\"The remote mirror URL is invalid.\",\"format\":\"int32\",\"type\":\"integer\"},\"last_successful_update_at\":{\"example\":\"2020-01-06T17:31:55.864Z\",\"format\":\"date-time\",\"type\":\"string\"},\"last_update_at\":{\"example\":\"2020-01-06T17:32:02.823Z\",\"format\":\"date-time\",\"type\":\"string\"},\"last_update_started_at\":{\"example\":\"2020-01-06T17:32:02.823Z\",\"format\":\"date-time\",\"type\":\"string\"},\"mirror_branch_regex\":{\"type\":\"string\"},\"only_protected_branches\":{\"type\":\"boolean\"},\"update_status\":{\"example\":\"finished\",\"type\":\"string\"},\"url\":{\"example\":\"https://*****:*****@example.com/gitlab/example.git\",\"type\":\"string\"}},\"type\":\"object\"}},\"400\":{\"description\":\"Bad request\"},\"401\":{\"description\":\"Unauthorized\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/api/v4/projects/{id}/remote_mirrors","rename":{"param":{"id":"project_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"remote_mirrors"}],"select":{"exist":["post_api_v4_projects_id_remote_mirror","project_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`"},{"active":true,"kind":"param","name":"remote_mirror_id","orig":"mirror_id","reqd":true,"type":"`$STRING`"}]},"contract":{"id":"POST /api/v4/projects/{id}/remote_mirrors/{mirror_id}/sync","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4ProjectsIdRemoteMirrorsMirrorIdSync\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The ID of a remote mirror\",\"in\":\"path\",\"name\":\"mirror_id\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"204\":{\"description\":\"Triggers a push mirror operation\"},\"400\":{\"description\":\"Bad request\"},\"401\":{\"description\":\"Unauthorized\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/api/v4/projects/{id}/remote_mirrors/{mirror_id}/sync","rename":{"param":{"id":"project_id","mirror_id":"remote_mirror_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"remote_mirrors"},{"var":"remote_mirror_id"},{"lit":"sync"}],"select":{"$action":"sync","exist":["project_id","remote_mirror_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"example":1,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":0},{"active":true,"example":20,"kind":"query","name":"per_page","orig":"per_page","reqd":false,"type":"`$INTEGER`","index$":1}]},"contract":{"id":"GET /api/v4/projects/{id}/remote_mirrors","json":"{\"operationId\":\"getApiV4ProjectsIdRemoteMirrors\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"default\":1,\"description\":\"Current page number\",\"example\":1,\"format\":\"int32\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"type\":\"integer\"},{\"default\":20,\"description\":\"Number of items per page\",\"example\":20,\"format\":\"int32\",\"in\":\"query\",\"name\":\"per_page\",\"required\":false,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"List the project's remote mirrors\",\"schema\":{\"items\":{\"description\":\"API_Entities_RemoteMirror model\",\"properties\":{\"auth_method\":{\"example\":\"password\",\"type\":\"string\"},\"enabled\":{\"example\":true,\"type\":\"boolean\"},\"host_keys\":{\"items\":{\"properties\":{\"fingerprint_sha256\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"id\":{\"example\":101486,\"format\":\"int32\",\"type\":\"integer\"},\"keep_divergent_refs\":{\"type\":\"boolean\"},\"last_error\":{\"example\":\"The remote mirror URL is invalid.\",\"format\":\"int32\",\"type\":\"integer\"},\"last_successful_update_at\":{\"example\":\"2020-01-06T17:31:55.864Z\",\"format\":\"date-time\",\"type\":\"string\"},\"last_update_at\":{\"example\":\"2020-01-06T17:32:02.823Z\",\"format\":\"date-time\",\"type\":\"string\"},\"last_update_started_at\":{\"example\":\"2020-01-06T17:32:02.823Z\",\"format\":\"date-time\",\"type\":\"string\"},\"mirror_branch_regex\":{\"type\":\"string\"},\"only_protected_branches\":{\"type\":\"boolean\"},\"update_status\":{\"example\":\"finished\",\"type\":\"string\"},\"url\":{\"example\":\"https://*****:*****@example.com/gitlab/example.git\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"401\":{\"description\":\"Unauthorized\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/projects/{id}/remote_mirrors","rename":{"param":{"id":"project_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"remote_mirrors"}],"select":{"exist":["page","per_page","project_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"mirror_id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"GET /api/v4/projects/{id}/remote_mirrors/{mirror_id}","json":"{\"operationId\":\"getApiV4ProjectsIdRemoteMirrorsMirrorId\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The ID of a remote mirror\",\"in\":\"path\",\"name\":\"mirror_id\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get a single remote mirror\",\"schema\":{\"description\":\"API_Entities_RemoteMirror model\",\"properties\":{\"auth_method\":{\"example\":\"password\",\"type\":\"string\"},\"enabled\":{\"example\":true,\"type\":\"boolean\"},\"host_keys\":{\"items\":{\"properties\":{\"fingerprint_sha256\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"id\":{\"example\":101486,\"format\":\"int32\",\"type\":\"integer\"},\"keep_divergent_refs\":{\"type\":\"boolean\"},\"last_error\":{\"example\":\"The remote mirror URL is invalid.\",\"format\":\"int32\",\"type\":\"integer\"},\"last_successful_update_at\":{\"example\":\"2020-01-06T17:31:55.864Z\",\"format\":\"date-time\",\"type\":\"string\"},\"last_update_at\":{\"example\":\"2020-01-06T17:32:02.823Z\",\"format\":\"date-time\",\"type\":\"string\"},\"last_update_started_at\":{\"example\":\"2020-01-06T17:32:02.823Z\",\"format\":\"date-time\",\"type\":\"string\"},\"mirror_branch_regex\":{\"type\":\"string\"},\"only_protected_branches\":{\"type\":\"boolean\"},\"update_status\":{\"example\":\"finished\",\"type\":\"string\"},\"url\":{\"example\":\"https://*****:*****@example.com/gitlab/example.git\",\"type\":\"string\"}},\"type\":\"object\"}},\"401\":{\"description\":\"Unauthorized\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/projects/{id}/remote_mirrors/{mirror_id}","rename":{"param":{"id":"project_id","mirror_id":"id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"remote_mirrors"},{"var":"id"}],"select":{"exist":["id","project_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"mirror_id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":1}],"query":[{"active":true,"kind":"query","name":"put_api_v4_projects_id_remote_mirrors_mirror_id","orig":"put_api_v4_projects_id_remote_mirrors_mirror_id","reqd":true,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"PUT /api/v4/projects/{id}/remote_mirrors/{mirror_id}","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"putApiV4ProjectsIdRemoteMirrorsMirrorId\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The ID of a remote mirror\",\"in\":\"path\",\"name\":\"mirror_id\",\"required\":true,\"type\":\"string\"},{\"in\":\"body\",\"name\":\"putApiV4ProjectsIdRemoteMirrorsMirrorId\",\"required\":true,\"schema\":{\"description\":\"Update the attributes of a single remote mirror\",\"properties\":{\"auth_method\":{\"description\":\"Determines the mirror authentication method\",\"type\":\"string\"},\"enabled\":{\"description\":\"Determines if the mirror is enabled\",\"example\":true,\"type\":\"boolean\"},\"keep_divergent_refs\":{\"description\":\"Determines if divergent refs are kept on the target\",\"type\":\"boolean\"},\"mirror_branch_regex\":{\"description\":\"Determines if only matched branches are mirrored\",\"type\":\"string\"},\"only_protected_branches\":{\"description\":\"Determines if only protected branches are mirrored\",\"type\":\"boolean\"}},\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Update the attributes of a single remote mirror\",\"schema\":{\"description\":\"API_Entities_RemoteMirror model\",\"properties\":{\"auth_method\":{\"example\":\"password\",\"type\":\"string\"},\"enabled\":{\"example\":true,\"type\":\"boolean\"},\"host_keys\":{\"items\":{\"properties\":{\"fingerprint_sha256\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"id\":{\"example\":101486,\"format\":\"int32\",\"type\":\"integer\"},\"keep_divergent_refs\":{\"type\":\"boolean\"},\"last_error\":{\"example\":\"The remote mirror URL is invalid.\",\"format\":\"int32\",\"type\":\"integer\"},\"last_successful_update_at\":{\"example\":\"2020-01-06T17:31:55.864Z\",\"format\":\"date-time\",\"type\":\"string\"},\"last_update_at\":{\"example\":\"2020-01-06T17:32:02.823Z\",\"format\":\"date-time\",\"type\":\"string\"},\"last_update_started_at\":{\"example\":\"2020-01-06T17:32:02.823Z\",\"format\":\"date-time\",\"type\":\"string\"},\"mirror_branch_regex\":{\"type\":\"string\"},\"only_protected_branches\":{\"type\":\"boolean\"},\"update_status\":{\"example\":\"finished\",\"type\":\"string\"},\"url\":{\"example\":\"https://*****:*****@example.com/gitlab/example.git\",\"type\":\"string\"}},\"type\":\"object\"}},\"400\":{\"description\":\"Bad request\"},\"401\":{\"description\":\"Unauthorized\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"PUT","orig":"/api/v4/projects/{id}/remote_mirrors/{mirror_id}","rename":{"param":{"id":"project_id","mirror_id":"id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"remote_mirrors"},{"var":"id"}],"select":{"exist":["id","project_id","put_api_v4_projects_id_remote_mirrors_mirror_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["project"],["project","remote_mirror"]]},"key$":"api_entities_remote_mirror","name__orig":"api_entities_remote_mirror","Name":"ApiEntitiesRemoteMirror","name_":"api_entities_remote_mirror","name-":"api-entities-remote-mirror","NAME":"API_ENTITIES_REMOTE_MIRROR","index$":151}, {"active":true,"entity":"api_entities_remote_mirror","key$":"BasicApiEntitiesRemoteMirrorFlow","kind":"basic","name":"BasicApiEntitiesRemoteMirrorFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"api_entities_remote_mirror_ref01"},"match":{"project_id":"project01","remote_mirror_id":"remote_mirror01"},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{},"match":{"project_id":"project01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"api_entities_remote_mirror_ref01"}}],"index$":1},{"active":true,"data":{"project_id":"project01"},"input":{"ref":"api_entities_remote_mirror_ref01","srcdatavar":"api_entities_remote_mirror_ref01_data","suffix":"_up0","textfield":"auth_method"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_remote_mirror_ref01"}}],"valid":[],"index$":2},{"active":true,"data":{},"input":{"ref":"api_entities_remote_mirror_ref01","srcdatavar":"api_entities_remote_mirror_ref01_data","suffix":"_dt0"},"match":{"id":"api_entities_remote_mirror01","project_id":"project01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_remote_mirror_ref01"}}],"index$":3}]}, 'ApiEntitiesRemoteMirror')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const api_entities_remote_mirror_ref01_ent = client.ApiEntitiesRemoteMirror()
    let api_entities_remote_mirror_ref01_data = setup.data.new.api_entities_remote_mirror['api_entities_remote_mirror_ref01']
    api_entities_remote_mirror_ref01_data['project_id'] = setup.idmap['project01']
    api_entities_remote_mirror_ref01_data['remote_mirror_id'] = setup.idmap['remote_mirror01']

    api_entities_remote_mirror_ref01_data = (await api_entities_remote_mirror_ref01_ent.create(api_entities_remote_mirror_ref01_data)).data()
    assert(null != api_entities_remote_mirror_ref01_data.id)


    // LIST
    const api_entities_remote_mirror_ref01_match: any = {}
    api_entities_remote_mirror_ref01_match['project_id'] = setup.idmap['project01']

    const api_entities_remote_mirror_ref01_list = (await api_entities_remote_mirror_ref01_ent.list(api_entities_remote_mirror_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(api_entities_remote_mirror_ref01_list, { id: api_entities_remote_mirror_ref01_data.id })))


    // UPDATE
    const api_entities_remote_mirror_ref01_data_up0: any = {}
    api_entities_remote_mirror_ref01_data_up0.id = api_entities_remote_mirror_ref01_data.id
    api_entities_remote_mirror_ref01_data_up0 ['project_id'] = setup.idmap['project_id']

    const api_entities_remote_mirror_ref01_markdef_up0 = { name: 'auth_method', value: 'Mark01-api_entities_remote_mirror_ref01_' + setup.now }
    ;(api_entities_remote_mirror_ref01_data_up0 as any)[api_entities_remote_mirror_ref01_markdef_up0.name] = api_entities_remote_mirror_ref01_markdef_up0.value

    const api_entities_remote_mirror_ref01_resdata_up0 = (await api_entities_remote_mirror_ref01_ent.update(api_entities_remote_mirror_ref01_data_up0)).data()
    assert(api_entities_remote_mirror_ref01_resdata_up0.id === api_entities_remote_mirror_ref01_data_up0.id)

    assert((api_entities_remote_mirror_ref01_resdata_up0 as any)[api_entities_remote_mirror_ref01_markdef_up0.name] === api_entities_remote_mirror_ref01_markdef_up0.value)


    // LOAD
    const api_entities_remote_mirror_ref01_match_dt0: any = {}
    api_entities_remote_mirror_ref01_match_dt0.id = api_entities_remote_mirror_ref01_data.id
    const api_entities_remote_mirror_ref01_data_dt0 = (await api_entities_remote_mirror_ref01_ent.load(api_entities_remote_mirror_ref01_match_dt0)).data()
    assert(api_entities_remote_mirror_ref01_data_dt0.id === api_entities_remote_mirror_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_remote_mirror/ApiEntitiesRemoteMirrorTestData.json')

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
    ['api_entities_remote_mirror01','api_entities_remote_mirror02','api_entities_remote_mirror03','project01','project02','project03','project01','project02','project03','remote_mirror01','remote_mirror02','remote_mirror03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_REMOTE_MIRROR_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_REMOTE_MIRROR_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_REMOTE_MIRROR_ENTID']
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
  
