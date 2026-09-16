

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


describe('ApiEntitiesPersonalSnippetEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesPersonalSnippet()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_personal_snippet.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"author","req":false,"short":"API_Entities_UserBasic model","type":"`$OBJECT`","index$":0},{"active":true,"format":"date-time","name":"created_at","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"description","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"file_name","req":false,"type":"`$STRING`","index$":3},{"active":true,"name":"files","req":false,"type":"`$ARRAY`","index$":4},{"active":true,"name":"http_url_to_repo","req":false,"type":"`$STRING`","index$":5},{"active":true,"format":"int32","name":"id","req":false,"type":"`$INTEGER`","index$":6},{"active":true,"name":"imported","req":false,"type":"`$BOOLEAN`","index$":7},{"active":true,"name":"imported_from","req":false,"type":"`$STRING`","index$":8},{"active":true,"format":"int32","name":"project_id","req":false,"type":"`$INTEGER`","index$":9},{"active":true,"name":"raw_url","req":false,"type":"`$STRING`","index$":10},{"active":true,"name":"repository_storage","req":false,"type":"`$STRING`","index$":11},{"active":true,"name":"ssh_url_to_repo","req":false,"type":"`$STRING`","index$":12},{"active":true,"name":"title","req":false,"type":"`$STRING`","index$":13},{"active":true,"format":"date-time","name":"updated_at","req":false,"type":"`$STRING`","index$":14},{"active":true,"name":"visibility","req":false,"type":"`$STRING`","index$":15},{"active":true,"name":"web_url","req":false,"type":"`$STRING`","index$":16}],"id":{"field":"id","name":"id"},"name":"api_entities_personal_snippet","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"post_api_v4_snippet","orig":"post_api_v4_snippet","reqd":true,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"POST /api/v4/snippets","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4Snippets\",\"parameters\":[{\"in\":\"body\",\"name\":\"postApiV4Snippets\",\"required\":true,\"schema\":{\"description\":\"Create new snippet\",\"properties\":{\"content\":{\"description\":\"The content of a snippet\",\"type\":\"string\"},\"description\":{\"description\":\"The description of a snippet\",\"type\":\"string\"},\"file_name\":{\"description\":\"The name of a snippet file\",\"type\":\"string\"},\"files\":{\"description\":\"An array of files\",\"items\":{\"properties\":{\"content\":{\"description\":\"The content of a snippet file\",\"type\":\"string\"},\"file_path\":{\"description\":\"The path of a snippet file\",\"type\":\"string\"}},\"required\":[\"file_path\",\"content\"],\"type\":\"object\"},\"type\":\"array\"},\"title\":{\"description\":\"The title of a snippet\",\"type\":\"string\"},\"visibility\":{\"default\":\"internal\",\"description\":\"The visibility of the snippet\",\"enum\":[\"private\",\"internal\",\"public\"],\"type\":\"string\"}},\"required\":[\"title\",\"file_name\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"201\":{\"description\":\"Create new snippet\",\"schema\":{\"description\":\"API_Entities_PersonalSnippet model\",\"properties\":{\"author\":{\"description\":\"API_Entities_UserBasic model\",\"properties\":{\"avatar_path\":{\"example\":\"/user/avatar/28/The-Big-Lebowski-400-400.png\",\"type\":\"string\"},\"avatar_url\":{\"example\":\"https://gravatar.com/avatar/1\",\"type\":\"string\"},\"custom_attributes\":{\"items\":{\"description\":\"API_Entities_CustomAttribute model\",\"properties\":{\"key\":{\"example\":\"foo\",\"type\":\"string\"},\"value\":{\"example\":\"bar\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"locked\":{\"type\":\"boolean\"},\"name\":{\"example\":\"Administrator\",\"type\":\"string\"},\"public_email\":{\"example\":\"john@example.com\",\"type\":\"string\"},\"state\":{\"example\":\"active\",\"type\":\"string\"},\"username\":{\"example\":\"admin\",\"type\":\"string\"},\"web_url\":{\"example\":\"https://gitlab.example.com/root\",\"type\":\"string\"}},\"type\":\"object\"},\"created_at\":{\"example\":\"2012-06-28T10:52:04Z\",\"format\":\"date-time\",\"type\":\"string\"},\"description\":{\"example\":\"Ruby test snippet\",\"type\":\"string\"},\"file_name\":{\"example\":\"add.rb\",\"type\":\"string\"},\"files\":{\"example\":\"e0d123e5f316bef78bfdf5a008837577\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"http_url_to_repo\":{\"example\":\"https://gitlab.example.com/snippets/65.git\",\"type\":\"string\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"imported\":{\"example\":false,\"type\":\"boolean\"},\"imported_from\":{\"example\":\"none\",\"type\":\"string\"},\"project_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"raw_url\":{\"example\":\"http://example.com/example/example/snippets/1/raw\",\"type\":\"string\"},\"repository_storage\":{\"type\":\"string\"},\"ssh_url_to_repo\":{\"example\":\"ssh://user@gitlab.example.com/snippets/65.git\",\"type\":\"string\"},\"title\":{\"example\":\"test\",\"type\":\"string\"},\"updated_at\":{\"example\":\"2012-06-28T10:52:04Z\",\"format\":\"date-time\",\"type\":\"string\"},\"visibility\":{\"example\":\"public\",\"type\":\"string\"},\"web_url\":{\"example\":\"http://example.com/example/example/snippets/1\",\"type\":\"string\"}},\"type\":\"object\"}},\"400\":{\"description\":\"Validation error\"},\"404\":{\"description\":\"Not found\"},\"422\":{\"description\":\"Unprocessable entity\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/api/v4/snippets","segments":[{"lit":"api"},{"lit":"v4"},{"lit":"snippets"}],"select":{"exist":["post_api_v4_snippet"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"created_after","orig":"created_after","reqd":false,"type":"`$ANY`","index$":0},{"active":true,"kind":"query","name":"created_before","orig":"created_before","reqd":false,"type":"`$ANY`","index$":1},{"active":true,"example":1,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":2},{"active":true,"example":20,"kind":"query","name":"per_page","orig":"per_page","reqd":false,"type":"`$INTEGER`","index$":3}]},"contract":{"id":"GET /api/v4/snippets/public","json":"{\"operationId\":\"getApiV4SnippetsPublic\",\"parameters\":[{\"description\":\"Return snippets created after the specified time\",\"format\":\"date-time\",\"in\":\"query\",\"name\":\"created_after\",\"required\":false,\"type\":\"string\"},{\"description\":\"Return snippets created before the specified time\",\"format\":\"date-time\",\"in\":\"query\",\"name\":\"created_before\",\"required\":false,\"type\":\"string\"},{\"default\":1,\"description\":\"Current page number\",\"example\":1,\"format\":\"int32\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"type\":\"integer\"},{\"default\":20,\"description\":\"Number of items per page\",\"example\":20,\"format\":\"int32\",\"in\":\"query\",\"name\":\"per_page\",\"required\":false,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"List all public personal snippets current_user has access to\",\"schema\":{\"items\":{\"description\":\"API_Entities_PersonalSnippet model\",\"properties\":{\"author\":{\"description\":\"API_Entities_UserBasic model\",\"properties\":{\"avatar_path\":{\"example\":\"/user/avatar/28/The-Big-Lebowski-400-400.png\",\"type\":\"string\"},\"avatar_url\":{\"example\":\"https://gravatar.com/avatar/1\",\"type\":\"string\"},\"custom_attributes\":{\"items\":{\"description\":\"API_Entities_CustomAttribute model\",\"properties\":{\"key\":{\"example\":\"foo\",\"type\":\"string\"},\"value\":{\"example\":\"bar\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"locked\":{\"type\":\"boolean\"},\"name\":{\"example\":\"Administrator\",\"type\":\"string\"},\"public_email\":{\"example\":\"john@example.com\",\"type\":\"string\"},\"state\":{\"example\":\"active\",\"type\":\"string\"},\"username\":{\"example\":\"admin\",\"type\":\"string\"},\"web_url\":{\"example\":\"https://gitlab.example.com/root\",\"type\":\"string\"}},\"type\":\"object\"},\"created_at\":{\"example\":\"2012-06-28T10:52:04Z\",\"format\":\"date-time\",\"type\":\"string\"},\"description\":{\"example\":\"Ruby test snippet\",\"type\":\"string\"},\"file_name\":{\"example\":\"add.rb\",\"type\":\"string\"},\"files\":{\"example\":\"e0d123e5f316bef78bfdf5a008837577\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"http_url_to_repo\":{\"example\":\"https://gitlab.example.com/snippets/65.git\",\"type\":\"string\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"imported\":{\"example\":false,\"type\":\"boolean\"},\"imported_from\":{\"example\":\"none\",\"type\":\"string\"},\"project_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"raw_url\":{\"example\":\"http://example.com/example/example/snippets/1/raw\",\"type\":\"string\"},\"repository_storage\":{\"type\":\"string\"},\"ssh_url_to_repo\":{\"example\":\"ssh://user@gitlab.example.com/snippets/65.git\",\"type\":\"string\"},\"title\":{\"example\":\"test\",\"type\":\"string\"},\"updated_at\":{\"example\":\"2012-06-28T10:52:04Z\",\"format\":\"date-time\",\"type\":\"string\"},\"visibility\":{\"example\":\"public\",\"type\":\"string\"},\"web_url\":{\"example\":\"http://example.com/example/example/snippets/1\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/snippets/public","segments":[{"lit":"api"},{"lit":"v4"},{"lit":"snippets"},{"lit":"public"}],"select":{"exist":["created_after","created_before","page","per_page"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /api/v4/snippets/{id}","json":"{\"operationId\":\"getApiV4SnippetsId\",\"parameters\":[{\"description\":\"The ID of a snippet\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get a single snippet\",\"schema\":{\"description\":\"API_Entities_PersonalSnippet model\",\"properties\":{\"author\":{\"description\":\"API_Entities_UserBasic model\",\"properties\":{\"avatar_path\":{\"example\":\"/user/avatar/28/The-Big-Lebowski-400-400.png\",\"type\":\"string\"},\"avatar_url\":{\"example\":\"https://gravatar.com/avatar/1\",\"type\":\"string\"},\"custom_attributes\":{\"items\":{\"description\":\"API_Entities_CustomAttribute model\",\"properties\":{\"key\":{\"example\":\"foo\",\"type\":\"string\"},\"value\":{\"example\":\"bar\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"locked\":{\"type\":\"boolean\"},\"name\":{\"example\":\"Administrator\",\"type\":\"string\"},\"public_email\":{\"example\":\"john@example.com\",\"type\":\"string\"},\"state\":{\"example\":\"active\",\"type\":\"string\"},\"username\":{\"example\":\"admin\",\"type\":\"string\"},\"web_url\":{\"example\":\"https://gitlab.example.com/root\",\"type\":\"string\"}},\"type\":\"object\"},\"created_at\":{\"example\":\"2012-06-28T10:52:04Z\",\"format\":\"date-time\",\"type\":\"string\"},\"description\":{\"example\":\"Ruby test snippet\",\"type\":\"string\"},\"file_name\":{\"example\":\"add.rb\",\"type\":\"string\"},\"files\":{\"example\":\"e0d123e5f316bef78bfdf5a008837577\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"http_url_to_repo\":{\"example\":\"https://gitlab.example.com/snippets/65.git\",\"type\":\"string\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"imported\":{\"example\":false,\"type\":\"boolean\"},\"imported_from\":{\"example\":\"none\",\"type\":\"string\"},\"project_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"raw_url\":{\"example\":\"http://example.com/example/example/snippets/1/raw\",\"type\":\"string\"},\"repository_storage\":{\"type\":\"string\"},\"ssh_url_to_repo\":{\"example\":\"ssh://user@gitlab.example.com/snippets/65.git\",\"type\":\"string\"},\"title\":{\"example\":\"test\",\"type\":\"string\"},\"updated_at\":{\"example\":\"2012-06-28T10:52:04Z\",\"format\":\"date-time\",\"type\":\"string\"},\"visibility\":{\"example\":\"public\",\"type\":\"string\"},\"web_url\":{\"example\":\"http://example.com/example/example/snippets/1\",\"type\":\"string\"}},\"type\":\"object\"}},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/snippets/{id}","segments":[{"lit":"api"},{"lit":"v4"},{"lit":"snippets"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"kind":"query","name":"put_api_v4_snippets_id","orig":"put_api_v4_snippets_id","reqd":true,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"PUT /api/v4/snippets/{id}","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"putApiV4SnippetsId\",\"parameters\":[{\"description\":\"The ID of a snippet\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"integer\"},{\"in\":\"body\",\"name\":\"putApiV4SnippetsId\",\"required\":true,\"schema\":{\"description\":\"Update an existing snippet\",\"properties\":{\"content\":{\"description\":\"The content of a snippet\",\"type\":\"string\"},\"description\":{\"description\":\"The description of a snippet\",\"type\":\"string\"},\"file_name\":{\"description\":\"The name of a snippet file\",\"type\":\"string\"},\"files\":{\"description\":\"An array of files to update\",\"items\":{\"properties\":{\"action\":{\"description\":\"The type of action to perform on the file, must be one of: create, update, delete, move\",\"enum\":[\"create\",\"update\",\"delete\",\"move\"],\"type\":\"string\"},\"content\":{\"description\":\"The content of a snippet\",\"type\":\"string\"},\"file_path\":{\"description\":\"The file path of a snippet file\",\"type\":\"string\"},\"previous_path\":{\"description\":\"The previous path of a snippet file\",\"type\":\"string\"}},\"required\":[\"action\"],\"type\":\"object\"},\"type\":\"array\"},\"title\":{\"description\":\"The title of a snippet\",\"type\":\"string\"},\"visibility\":{\"description\":\"The visibility of the snippet\",\"enum\":[\"private\",\"internal\",\"public\"],\"type\":\"string\"}},\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Update an existing snippet\",\"schema\":{\"description\":\"API_Entities_PersonalSnippet model\",\"properties\":{\"author\":{\"description\":\"API_Entities_UserBasic model\",\"properties\":{\"avatar_path\":{\"example\":\"/user/avatar/28/The-Big-Lebowski-400-400.png\",\"type\":\"string\"},\"avatar_url\":{\"example\":\"https://gravatar.com/avatar/1\",\"type\":\"string\"},\"custom_attributes\":{\"items\":{\"description\":\"API_Entities_CustomAttribute model\",\"properties\":{\"key\":{\"example\":\"foo\",\"type\":\"string\"},\"value\":{\"example\":\"bar\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"locked\":{\"type\":\"boolean\"},\"name\":{\"example\":\"Administrator\",\"type\":\"string\"},\"public_email\":{\"example\":\"john@example.com\",\"type\":\"string\"},\"state\":{\"example\":\"active\",\"type\":\"string\"},\"username\":{\"example\":\"admin\",\"type\":\"string\"},\"web_url\":{\"example\":\"https://gitlab.example.com/root\",\"type\":\"string\"}},\"type\":\"object\"},\"created_at\":{\"example\":\"2012-06-28T10:52:04Z\",\"format\":\"date-time\",\"type\":\"string\"},\"description\":{\"example\":\"Ruby test snippet\",\"type\":\"string\"},\"file_name\":{\"example\":\"add.rb\",\"type\":\"string\"},\"files\":{\"example\":\"e0d123e5f316bef78bfdf5a008837577\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"http_url_to_repo\":{\"example\":\"https://gitlab.example.com/snippets/65.git\",\"type\":\"string\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"imported\":{\"example\":false,\"type\":\"boolean\"},\"imported_from\":{\"example\":\"none\",\"type\":\"string\"},\"project_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"raw_url\":{\"example\":\"http://example.com/example/example/snippets/1/raw\",\"type\":\"string\"},\"repository_storage\":{\"type\":\"string\"},\"ssh_url_to_repo\":{\"example\":\"ssh://user@gitlab.example.com/snippets/65.git\",\"type\":\"string\"},\"title\":{\"example\":\"test\",\"type\":\"string\"},\"updated_at\":{\"example\":\"2012-06-28T10:52:04Z\",\"format\":\"date-time\",\"type\":\"string\"},\"visibility\":{\"example\":\"public\",\"type\":\"string\"},\"web_url\":{\"example\":\"http://example.com/example/example/snippets/1\",\"type\":\"string\"}},\"type\":\"object\"}},\"400\":{\"description\":\"Validation error\"},\"404\":{\"description\":\"Not found\"},\"422\":{\"description\":\"Unprocessable entity\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"PUT","orig":"/api/v4/snippets/{id}","segments":[{"lit":"api"},{"lit":"v4"},{"lit":"snippets"},{"var":"id"}],"select":{"exist":["id","put_api_v4_snippets_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"api_entities_personal_snippet","name__orig":"api_entities_personal_snippet","Name":"ApiEntitiesPersonalSnippet","name_":"api_entities_personal_snippet","name-":"api-entities-personal-snippet","NAME":"API_ENTITIES_PERSONAL_SNIPPET","index$":128}, {"active":true,"entity":"api_entities_personal_snippet","key$":"BasicApiEntitiesPersonalSnippetFlow","kind":"basic","name":"BasicApiEntitiesPersonalSnippetFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"api_entities_personal_snippet_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"api_entities_personal_snippet_ref01"}}],"index$":1},{"active":true,"data":{},"input":{"ref":"api_entities_personal_snippet_ref01","srcdatavar":"api_entities_personal_snippet_ref01_data","suffix":"_up0","textfield":"created_at"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_personal_snippet_ref01"}}],"valid":[],"index$":2},{"active":true,"data":{},"input":{"ref":"api_entities_personal_snippet_ref01","srcdatavar":"api_entities_personal_snippet_ref01_data","suffix":"_dt0"},"match":{"id":"api_entities_personal_snippet01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_personal_snippet_ref01"}}],"index$":3}]}, 'ApiEntitiesPersonalSnippet')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const api_entities_personal_snippet_ref01_ent = client.ApiEntitiesPersonalSnippet()
    let api_entities_personal_snippet_ref01_data = setup.data.new.api_entities_personal_snippet['api_entities_personal_snippet_ref01']

    api_entities_personal_snippet_ref01_data = (await api_entities_personal_snippet_ref01_ent.create(api_entities_personal_snippet_ref01_data)).data()
    assert(null != api_entities_personal_snippet_ref01_data.id)


    // LIST
    const api_entities_personal_snippet_ref01_match: any = {}

    const api_entities_personal_snippet_ref01_list = (await api_entities_personal_snippet_ref01_ent.list(api_entities_personal_snippet_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(api_entities_personal_snippet_ref01_list, { id: api_entities_personal_snippet_ref01_data.id })))


    // UPDATE
    const api_entities_personal_snippet_ref01_data_up0: any = {}
    api_entities_personal_snippet_ref01_data_up0.id = api_entities_personal_snippet_ref01_data.id

    const api_entities_personal_snippet_ref01_markdef_up0 = { name: 'created_at', value: 'Mark01-api_entities_personal_snippet_ref01_' + setup.now }
    ;(api_entities_personal_snippet_ref01_data_up0 as any)[api_entities_personal_snippet_ref01_markdef_up0.name] = api_entities_personal_snippet_ref01_markdef_up0.value

    const api_entities_personal_snippet_ref01_resdata_up0 = (await api_entities_personal_snippet_ref01_ent.update(api_entities_personal_snippet_ref01_data_up0)).data()
    assert(api_entities_personal_snippet_ref01_resdata_up0.id === api_entities_personal_snippet_ref01_data_up0.id)

    assert((api_entities_personal_snippet_ref01_resdata_up0 as any)[api_entities_personal_snippet_ref01_markdef_up0.name] === api_entities_personal_snippet_ref01_markdef_up0.value)


    // LOAD
    const api_entities_personal_snippet_ref01_match_dt0: any = {}
    api_entities_personal_snippet_ref01_match_dt0.id = api_entities_personal_snippet_ref01_data.id
    const api_entities_personal_snippet_ref01_data_dt0 = (await api_entities_personal_snippet_ref01_ent.load(api_entities_personal_snippet_ref01_match_dt0)).data()
    assert(api_entities_personal_snippet_ref01_data_dt0.id === api_entities_personal_snippet_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_personal_snippet/ApiEntitiesPersonalSnippetTestData.json')

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
    ['api_entities_personal_snippet01','api_entities_personal_snippet02','api_entities_personal_snippet03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_PERSONAL_SNIPPET_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_PERSONAL_SNIPPET_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_PERSONAL_SNIPPET_ENTID']
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
  
