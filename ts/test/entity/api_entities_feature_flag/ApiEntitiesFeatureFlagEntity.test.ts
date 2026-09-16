

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


describe('ApiEntitiesFeatureFlagEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesFeatureFlag()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_feature_flag.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"active","req":false,"type":"`$BOOLEAN`","index$":0},{"active":true,"format":"date-time","name":"created_at","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"description","req":false,"type":"`$STRING`","index$":2},{"active":true,"format":"int32","name":"id","req":false,"type":"`$INTEGER`","index$":3},{"active":true,"name":"name","req":false,"type":"`$STRING`","index$":4},{"active":true,"name":"parameters","req":false,"type":"`$STRING`","index$":5},{"active":true,"name":"scopes","req":false,"type":"`$OBJECT`","index$":6},{"active":true,"name":"strategies","req":false,"type":"`$OBJECT`","index$":7},{"active":true,"format":"date-time","name":"updated_at","req":false,"type":"`$STRING`","index$":8},{"active":true,"name":"user_list","req":false,"type":"`$OBJECT`","index$":9},{"active":true,"name":"version","req":false,"type":"`$STRING`","index$":10}],"id":{"field":"id","name":"id"},"name":"api_entities_feature_flag","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"kind":"query","name":"post_api_v4_projects_id_feature_flag","orig":"post_api_v4_projects_id_feature_flag","reqd":true,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"POST /api/v4/projects/{id}/feature_flags","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4ProjectsIdFeatureFlags\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"in\":\"body\",\"name\":\"postApiV4ProjectsIdFeatureFlags\",\"required\":true,\"schema\":{\"description\":\"Create a new feature flag\",\"properties\":{\"active\":{\"description\":\"The active state of the flag. Defaults to `true`. Supported in GitLab 13.3 and later\",\"type\":\"boolean\"},\"description\":{\"description\":\"The description of the feature flag\",\"type\":\"string\"},\"name\":{\"description\":\"The name of the feature flag\",\"type\":\"string\"},\"strategies\":{\"items\":{\"properties\":{\"name\":{\"description\":\"The strategy name. Can be `default`, `gradualRolloutUserId`, `userWithId`, or `gitlabUserList`. In GitLab 13.5 and later, can be `flexibleRollout`\",\"type\":\"string\"},\"parameters\":{\"description\":\"The strategy parameters as a JSON-formatted string e.g. `{\\\"userIds\\\":\\\"user1\\\"}`\",\"type\":\"string\"},\"scopes\":{\"items\":{\"properties\":{\"environment_scope\":{\"description\":\"The environment scope of the scope\",\"type\":\"string\"}},\"required\":[\"environment_scope\"],\"type\":\"object\"},\"type\":\"array\"},\"user_list_id\":{\"description\":\"The ID of the feature flag user list. If strategy is `gitlabUserList`.\",\"format\":\"int32\",\"type\":\"integer\"}},\"required\":[\"name\"],\"type\":\"object\"},\"type\":\"array\"},\"version\":{\"description\":\"The version of the feature flag. Must be `new_version_flag`. Omit to create a Legacy feature flag.\",\"type\":\"string\"}},\"required\":[\"name\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"201\":{\"description\":\"Create a new feature flag\",\"schema\":{\"description\":\"API_Entities_FeatureFlag model\",\"properties\":{\"active\":{\"type\":\"boolean\"},\"created_at\":{\"example\":\"2019-11-04T08:13:51.423Z\",\"format\":\"date-time\",\"type\":\"string\"},\"description\":{\"example\":\"merge train feature flag\",\"type\":\"string\"},\"name\":{\"example\":\"merge_train\",\"type\":\"string\"},\"scopes\":{\"type\":\"string\"},\"strategies\":{\"properties\":{\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"name\":{\"example\":\"userWithId\",\"type\":\"string\"},\"parameters\":{\"example\":\"{\\\"userIds\\\": \\\"user1\\\"}\",\"type\":\"string\"},\"scopes\":{\"properties\":{\"environment_scope\":{\"example\":\"production\",\"type\":\"string\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"}},\"type\":\"object\"},\"user_list\":{\"properties\":{\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"iid\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"name\":{\"example\":\"user_list\",\"type\":\"string\"},\"user_xids\":{\"example\":\"user1,user2\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},\"updated_at\":{\"example\":\"2019-11-04T08:13:51.423Z\",\"format\":\"date-time\",\"type\":\"string\"},\"version\":{\"example\":\"new_version_flag\",\"type\":\"string\"}},\"type\":\"object\"}},\"400\":{\"description\":\"Bad request\"},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/api/v4/projects/{id}/feature_flags","rename":{"param":{"id":"project_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"feature_flags"}],"select":{"exist":["post_api_v4_projects_id_feature_flag","project_id"]},"transform":{"req":"`reqdata`","res":"`body.strategies`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"example":1,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":0},{"active":true,"example":20,"kind":"query","name":"per_page","orig":"per_page","reqd":false,"type":"`$INTEGER`","index$":1},{"active":true,"kind":"query","name":"scope","orig":"scope","reqd":false,"type":"`$ANY`","index$":2}]},"contract":{"id":"GET /api/v4/projects/{id}/feature_flags","json":"{\"operationId\":\"getApiV4ProjectsIdFeatureFlags\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The scope of feature flags, one of: `enabled`, `disabled`\",\"enum\":[\"enabled\",\"disabled\"],\"in\":\"query\",\"name\":\"scope\",\"required\":false,\"type\":\"string\"},{\"default\":1,\"description\":\"Current page number\",\"example\":1,\"format\":\"int32\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"type\":\"integer\"},{\"default\":20,\"description\":\"Number of items per page\",\"example\":20,\"format\":\"int32\",\"in\":\"query\",\"name\":\"per_page\",\"required\":false,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"List feature flags for a project\",\"schema\":{\"items\":{\"description\":\"API_Entities_FeatureFlag model\",\"properties\":{\"active\":{\"type\":\"boolean\"},\"created_at\":{\"example\":\"2019-11-04T08:13:51.423Z\",\"format\":\"date-time\",\"type\":\"string\"},\"description\":{\"example\":\"merge train feature flag\",\"type\":\"string\"},\"name\":{\"example\":\"merge_train\",\"type\":\"string\"},\"scopes\":{\"type\":\"string\"},\"strategies\":{\"properties\":{\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"name\":{\"example\":\"userWithId\",\"type\":\"string\"},\"parameters\":{\"example\":\"{\\\"userIds\\\": \\\"user1\\\"}\",\"type\":\"string\"},\"scopes\":{\"properties\":{\"environment_scope\":{\"example\":\"production\",\"type\":\"string\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"}},\"type\":\"object\"},\"user_list\":{\"properties\":{\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"iid\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"name\":{\"example\":\"user_list\",\"type\":\"string\"},\"user_xids\":{\"example\":\"user1,user2\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},\"updated_at\":{\"example\":\"2019-11-04T08:13:51.423Z\",\"format\":\"date-time\",\"type\":\"string\"},\"version\":{\"example\":\"new_version_flag\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"401\":{\"description\":\"Unauthorized\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/projects/{id}/feature_flags","rename":{"param":{"id":"project_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"feature_flags"}],"select":{"exist":["page","per_page","project_id","scope"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"feature_flag_name","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"GET /api/v4/projects/{id}/feature_flags/{feature_flag_name}","json":"{\"operationId\":\"getApiV4ProjectsIdFeatureFlagsFeatureFlagName\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The name of the feature flag\",\"in\":\"path\",\"name\":\"feature_flag_name\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get a single feature flag\",\"schema\":{\"description\":\"API_Entities_FeatureFlag model\",\"properties\":{\"active\":{\"type\":\"boolean\"},\"created_at\":{\"example\":\"2019-11-04T08:13:51.423Z\",\"format\":\"date-time\",\"type\":\"string\"},\"description\":{\"example\":\"merge train feature flag\",\"type\":\"string\"},\"name\":{\"example\":\"merge_train\",\"type\":\"string\"},\"scopes\":{\"type\":\"string\"},\"strategies\":{\"properties\":{\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"name\":{\"example\":\"userWithId\",\"type\":\"string\"},\"parameters\":{\"example\":\"{\\\"userIds\\\": \\\"user1\\\"}\",\"type\":\"string\"},\"scopes\":{\"properties\":{\"environment_scope\":{\"example\":\"production\",\"type\":\"string\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"}},\"type\":\"object\"},\"user_list\":{\"properties\":{\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"iid\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"name\":{\"example\":\"user_list\",\"type\":\"string\"},\"user_xids\":{\"example\":\"user1,user2\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},\"updated_at\":{\"example\":\"2019-11-04T08:13:51.423Z\",\"format\":\"date-time\",\"type\":\"string\"},\"version\":{\"example\":\"new_version_flag\",\"type\":\"string\"}},\"type\":\"object\"}},\"401\":{\"description\":\"Unauthorized\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/projects/{id}/feature_flags/{feature_flag_name}","rename":{"param":{"feature_flag_name":"id","id":"project_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"feature_flags"},{"var":"id"}],"select":{"exist":["id","project_id"]},"transform":{"req":"`reqdata`","res":"`body.strategies`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"feature_flag_name","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":1}],"query":[{"active":true,"kind":"query","name":"put_api_v4_projects_id_feature_flags_feature_flag_name","orig":"put_api_v4_projects_id_feature_flags_feature_flag_name","reqd":true,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"PUT /api/v4/projects/{id}/feature_flags/{feature_flag_name}","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"putApiV4ProjectsIdFeatureFlagsFeatureFlagName\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The name of the feature flag\",\"in\":\"path\",\"name\":\"feature_flag_name\",\"required\":true,\"type\":\"string\"},{\"in\":\"body\",\"name\":\"putApiV4ProjectsIdFeatureFlagsFeatureFlagName\",\"required\":true,\"schema\":{\"description\":\"Update a feature flag\",\"properties\":{\"active\":{\"description\":\"The active state of the flag. Supported in GitLab 13.3 and later\",\"type\":\"boolean\"},\"description\":{\"description\":\"The description of the feature flag\",\"type\":\"string\"},\"name\":{\"description\":\"The new name of the feature flag. Supported in GitLab 13.3 and later\",\"type\":\"string\"},\"strategies\":{\"items\":{\"properties\":{\"_destroy\":{\"description\":\"Delete the strategy when true\",\"type\":\"boolean\"},\"id\":{\"description\":\"The feature flag strategy ID\",\"format\":\"int32\",\"type\":\"integer\"},\"name\":{\"description\":\"The strategy name\",\"type\":\"string\"},\"parameters\":{\"description\":\"The strategy parameters as a JSON-formatted string e.g. `{\\\"userIds\\\":\\\"user1\\\"}`\",\"type\":\"string\"},\"scopes\":{\"items\":{\"properties\":{\"_destroy\":{\"description\":\"Delete the scope when true\",\"type\":\"boolean\"},\"environment_scope\":{\"description\":\"The environment scope of the scope\",\"type\":\"string\"},\"id\":{\"description\":\"The scope id\",\"format\":\"int32\",\"type\":\"integer\"}},\"type\":\"object\"},\"type\":\"array\"},\"user_list_id\":{\"description\":\"The ID of the feature flag user list\",\"format\":\"int32\",\"type\":\"integer\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Update a feature flag\",\"schema\":{\"description\":\"API_Entities_FeatureFlag model\",\"properties\":{\"active\":{\"type\":\"boolean\"},\"created_at\":{\"example\":\"2019-11-04T08:13:51.423Z\",\"format\":\"date-time\",\"type\":\"string\"},\"description\":{\"example\":\"merge train feature flag\",\"type\":\"string\"},\"name\":{\"example\":\"merge_train\",\"type\":\"string\"},\"scopes\":{\"type\":\"string\"},\"strategies\":{\"properties\":{\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"name\":{\"example\":\"userWithId\",\"type\":\"string\"},\"parameters\":{\"example\":\"{\\\"userIds\\\": \\\"user1\\\"}\",\"type\":\"string\"},\"scopes\":{\"properties\":{\"environment_scope\":{\"example\":\"production\",\"type\":\"string\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"}},\"type\":\"object\"},\"user_list\":{\"properties\":{\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"iid\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"name\":{\"example\":\"user_list\",\"type\":\"string\"},\"user_xids\":{\"example\":\"user1,user2\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},\"updated_at\":{\"example\":\"2019-11-04T08:13:51.423Z\",\"format\":\"date-time\",\"type\":\"string\"},\"version\":{\"example\":\"new_version_flag\",\"type\":\"string\"}},\"type\":\"object\"}},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not found\"},\"422\":{\"description\":\"Unprocessable entity\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"PUT","orig":"/api/v4/projects/{id}/feature_flags/{feature_flag_name}","rename":{"param":{"feature_flag_name":"id","id":"project_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"feature_flags"},{"var":"id"}],"select":{"exist":["id","project_id","put_api_v4_projects_id_feature_flags_feature_flag_name"]},"transform":{"req":"`reqdata`","res":"`body.strategies`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["project"]]},"key$":"api_entities_feature_flag","name__orig":"api_entities_feature_flag","Name":"ApiEntitiesFeatureFlag","name_":"api_entities_feature_flag","name-":"api-entities-feature-flag","NAME":"API_ENTITIES_FEATURE_FLAG","index$":74}, {"active":true,"entity":"api_entities_feature_flag","key$":"BasicApiEntitiesFeatureFlagFlow","kind":"basic","name":"BasicApiEntitiesFeatureFlagFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"api_entities_feature_flag_ref01"},"match":{"project_id":"project01"},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{},"match":{"project_id":"project01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"api_entities_feature_flag_ref01"}}],"index$":1},{"active":true,"data":{"project_id":"project01"},"input":{"ref":"api_entities_feature_flag_ref01","srcdatavar":"api_entities_feature_flag_ref01_data","suffix":"_up0","textfield":"created_at"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_feature_flag_ref01"}}],"valid":[],"index$":2},{"active":true,"data":{},"input":{"ref":"api_entities_feature_flag_ref01","srcdatavar":"api_entities_feature_flag_ref01_data","suffix":"_dt0"},"match":{"id":"api_entities_feature_flag01","project_id":"project01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_feature_flag_ref01"}}],"index$":3}]}, 'ApiEntitiesFeatureFlag')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const api_entities_feature_flag_ref01_ent = client.ApiEntitiesFeatureFlag()
    let api_entities_feature_flag_ref01_data = setup.data.new.api_entities_feature_flag['api_entities_feature_flag_ref01']
    api_entities_feature_flag_ref01_data['project_id'] = setup.idmap['project01']

    api_entities_feature_flag_ref01_data = (await api_entities_feature_flag_ref01_ent.create(api_entities_feature_flag_ref01_data)).data()
    assert(null != api_entities_feature_flag_ref01_data.id)


    // LIST
    const api_entities_feature_flag_ref01_match: any = {}
    api_entities_feature_flag_ref01_match['project_id'] = setup.idmap['project01']

    const api_entities_feature_flag_ref01_list = (await api_entities_feature_flag_ref01_ent.list(api_entities_feature_flag_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(api_entities_feature_flag_ref01_list, { id: api_entities_feature_flag_ref01_data.id })))


    // UPDATE
    const api_entities_feature_flag_ref01_data_up0: any = {}
    api_entities_feature_flag_ref01_data_up0.id = api_entities_feature_flag_ref01_data.id
    api_entities_feature_flag_ref01_data_up0 ['project_id'] = setup.idmap['project_id']

    const api_entities_feature_flag_ref01_markdef_up0 = { name: 'created_at', value: 'Mark01-api_entities_feature_flag_ref01_' + setup.now }
    ;(api_entities_feature_flag_ref01_data_up0 as any)[api_entities_feature_flag_ref01_markdef_up0.name] = api_entities_feature_flag_ref01_markdef_up0.value

    const api_entities_feature_flag_ref01_resdata_up0 = (await api_entities_feature_flag_ref01_ent.update(api_entities_feature_flag_ref01_data_up0)).data()
    assert(api_entities_feature_flag_ref01_resdata_up0.id === api_entities_feature_flag_ref01_data_up0.id)

    assert((api_entities_feature_flag_ref01_resdata_up0 as any)[api_entities_feature_flag_ref01_markdef_up0.name] === api_entities_feature_flag_ref01_markdef_up0.value)


    // LOAD
    const api_entities_feature_flag_ref01_match_dt0: any = {}
    api_entities_feature_flag_ref01_match_dt0.id = api_entities_feature_flag_ref01_data.id
    const api_entities_feature_flag_ref01_data_dt0 = (await api_entities_feature_flag_ref01_ent.load(api_entities_feature_flag_ref01_match_dt0)).data()
    assert(api_entities_feature_flag_ref01_data_dt0.id === api_entities_feature_flag_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_feature_flag/ApiEntitiesFeatureFlagTestData.json')

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
    ['api_entities_feature_flag01','api_entities_feature_flag02','api_entities_feature_flag03','project01','project02','project03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_FEATURE_FLAG_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_FEATURE_FLAG_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_FEATURE_FLAG_ENTID']
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
  
