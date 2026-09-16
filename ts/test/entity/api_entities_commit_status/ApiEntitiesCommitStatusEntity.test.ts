

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


describe('ApiEntitiesCommitStatusEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesCommitStatus()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['create', 'list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_commit_status.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"allow_failure","req":false,"type":"`$BOOLEAN`","index$":0},{"active":true,"name":"author","req":false,"short":"API_Entities_UserBasic model","type":"`$OBJECT`","index$":1},{"active":true,"name":"avatar_path","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"avatar_url","req":false,"type":"`$STRING`","index$":3},{"active":true,"format":"float","name":"coverage","req":false,"type":"`$NUMBER`","index$":4},{"active":true,"format":"date-time","name":"created_at","req":false,"type":"`$STRING`","index$":5},{"active":true,"name":"custom_attributes","req":false,"type":"`$ARRAY`","index$":6},{"active":true,"name":"description","req":false,"type":"`$STRING`","index$":7},{"active":true,"format":"date-time","name":"finished_at","req":false,"type":"`$STRING`","index$":8},{"active":true,"format":"int32","name":"id","req":false,"type":"`$INTEGER`","index$":9},{"active":true,"name":"locked","req":false,"type":"`$BOOLEAN`","index$":10},{"active":true,"name":"name","req":false,"type":"`$STRING`","index$":11},{"active":true,"format":"int32","name":"pipeline_id","req":false,"type":"`$INTEGER`","index$":12},{"active":true,"name":"public_email","req":false,"type":"`$STRING`","index$":13},{"active":true,"name":"ref","req":false,"type":"`$STRING`","index$":14},{"active":true,"name":"sha","req":false,"type":"`$STRING`","index$":15},{"active":true,"format":"date-time","name":"started_at","req":false,"type":"`$STRING`","index$":16},{"active":true,"name":"state","req":false,"type":"`$STRING`","index$":17},{"active":true,"name":"status","req":false,"type":"`$STRING`","index$":18},{"active":true,"name":"target_url","req":false,"type":"`$STRING`","index$":19},{"active":true,"name":"username","req":false,"type":"`$STRING`","index$":20},{"active":true,"name":"web_url","req":false,"type":"`$STRING`","index$":21}],"id":{"field":"id","name":"id"},"name":"api_entities_commit_status","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"params":[{"active":true,"example":"18f3e63d05582537db6d183d9d557be09e1f90c8","kind":"param","name":"id","orig":"sha","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":1}],"query":[{"active":true,"kind":"query","name":"post_api_v4_projects_id_statuses_sha","orig":"post_api_v4_projects_id_statuses_sha","reqd":true,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"POST /api/v4/projects/{id}/statuses/{sha}","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4ProjectsIdStatusesSha\",\"parameters\":[{\"description\":\"ID or URL-encoded path of the project.\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The commit hash\",\"example\":\"18f3e63d05582537db6d183d9d557be09e1f90c8\",\"in\":\"path\",\"name\":\"sha\",\"required\":true,\"type\":\"string\"},{\"in\":\"body\",\"name\":\"postApiV4ProjectsIdStatusesSha\",\"required\":true,\"schema\":{\"description\":\"Post status to a commit\",\"properties\":{\"context\":{\"default\":\"default\",\"description\":\"A string label to differentiate this status from the status of other systems\",\"example\":\"coverage\",\"type\":\"string\"},\"coverage\":{\"description\":\"The total code coverage\",\"example\":100,\"format\":\"float\",\"type\":\"number\"},\"description\":{\"description\":\"A short description of the status\",\"type\":\"string\"},\"name\":{\"default\":\"default\",\"description\":\"A string label to differentiate this status from the status of other systems\",\"example\":\"coverage\",\"type\":\"string\"},\"pipeline_id\":{\"description\":\"An existing pipeline ID, when multiple pipelines on the same commit SHA have been triggered\",\"format\":\"int32\",\"type\":\"integer\"},\"ref\":{\"description\":\"The ref\",\"example\":\"develop\",\"type\":\"string\"},\"state\":{\"description\":\"The state of the status\",\"enum\":[\"pending\",\"running\",\"success\",\"failed\",\"canceled\",\"skipped\"],\"example\":\"pending\",\"type\":\"string\"},\"target_url\":{\"description\":\"The target URL to associate with this status\",\"example\":\"https://gitlab.example.com/janedoe/gitlab-foss/builds/91\",\"type\":\"string\"}},\"required\":[\"state\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Post status to a commit\",\"schema\":{\"description\":\"API_Entities_CommitStatus model\",\"properties\":{\"allow_failure\":{\"example\":false,\"type\":\"boolean\"},\"author\":{\"description\":\"API_Entities_UserBasic model\",\"properties\":{\"avatar_path\":{\"example\":\"/user/avatar/28/The-Big-Lebowski-400-400.png\",\"type\":\"string\"},\"avatar_url\":{\"example\":\"https://gravatar.com/avatar/1\",\"type\":\"string\"},\"custom_attributes\":{\"items\":{\"description\":\"API_Entities_CustomAttribute model\",\"properties\":{\"key\":{\"example\":\"foo\",\"type\":\"string\"},\"value\":{\"example\":\"bar\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"locked\":{\"type\":\"boolean\"},\"name\":{\"example\":\"Administrator\",\"type\":\"string\"},\"public_email\":{\"example\":\"john@example.com\",\"type\":\"string\"},\"state\":{\"example\":\"active\",\"type\":\"string\"},\"username\":{\"example\":\"admin\",\"type\":\"string\"},\"web_url\":{\"example\":\"https://gitlab.example.com/root\",\"type\":\"string\"}},\"type\":\"object\"},\"coverage\":{\"example\":98.29,\"format\":\"float\",\"type\":\"number\"},\"created_at\":{\"example\":\"2016-01-19T09:05:50.355Z\",\"format\":\"date-time\",\"type\":\"string\"},\"description\":{\"type\":\"string\"},\"finished_at\":{\"example\":\"2016-01-21T08:40:25.832Z\",\"format\":\"date-time\",\"type\":\"string\"},\"id\":{\"example\":93,\"format\":\"int32\",\"type\":\"integer\"},\"name\":{\"example\":\"default\",\"type\":\"string\"},\"pipeline_id\":{\"example\":101,\"format\":\"int32\",\"type\":\"integer\"},\"ref\":{\"example\":\"develop\",\"type\":\"string\"},\"sha\":{\"example\":\"18f3e63d05582537db6d183d9d557be09e1f90c8\",\"type\":\"string\"},\"started_at\":{\"example\":\"2016-01-20T08:40:25.832Z\",\"format\":\"date-time\",\"type\":\"string\"},\"status\":{\"example\":\"success\",\"type\":\"string\"},\"target_url\":{\"example\":\"https://gitlab.example.com/janedoe/gitlab-foss/builds/91\",\"type\":\"string\"}},\"type\":\"object\"}},\"400\":{\"description\":\"Bad request\"},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/api/v4/projects/{id}/statuses/{sha}","rename":{"param":{"id":"project_id","sha":"id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"statuses"},{"var":"id"}],"select":{"exist":["id","post_api_v4_projects_id_statuses_sha","project_id"]},"transform":{"req":"`reqdata`","res":"`body.author`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"example":"18f3e63d05582537db6d183d9d557be09e1f90c8","kind":"param","name":"sha","orig":"sha","reqd":true,"type":"`$ANY`","index$":1}],"query":[{"active":true,"kind":"query","name":"all","orig":"all","reqd":false,"type":"`$ANY`","index$":0},{"active":true,"example":"bundler:audit","kind":"query","name":"name","orig":"name","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"kind":"query","name":"order_by","orig":"order_by","reqd":false,"type":"`$ANY`","index$":2},{"active":true,"example":1,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":3},{"active":true,"example":20,"kind":"query","name":"per_page","orig":"per_page","reqd":false,"type":"`$INTEGER`","index$":4},{"active":true,"example":1234,"kind":"query","name":"pipeline_id","orig":"pipeline_id","reqd":false,"type":"`$STRING`","index$":5},{"active":true,"example":"develop","kind":"query","name":"ref","orig":"ref","reqd":false,"type":"`$ANY`","index$":6},{"active":true,"kind":"query","name":"sort","orig":"sort","reqd":false,"type":"`$ANY`","index$":7},{"active":true,"example":"test","kind":"query","name":"stage","orig":"stage","reqd":false,"type":"`$ANY`","index$":8}]},"contract":{"id":"GET /api/v4/projects/{id}/repository/commits/{sha}/statuses","json":"{\"operationId\":\"getApiV4ProjectsIdRepositoryCommitsShaStatuses\",\"parameters\":[{\"description\":\"ID or URL-encoded path of the project.\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"Hash of the commit.\",\"example\":\"18f3e63d05582537db6d183d9d557be09e1f90c8\",\"in\":\"path\",\"name\":\"sha\",\"required\":true,\"type\":\"string\"},{\"description\":\"Name of the branch or tag. Default is the default branch.\",\"example\":\"develop\",\"in\":\"query\",\"name\":\"ref\",\"required\":false,\"type\":\"string\"},{\"description\":\"Filter statuses by build stage.\",\"example\":\"test\",\"in\":\"query\",\"name\":\"stage\",\"required\":false,\"type\":\"string\"},{\"description\":\"Filter statuses by job name.\",\"example\":\"bundler:audit\",\"in\":\"query\",\"name\":\"name\",\"required\":false,\"type\":\"string\"},{\"description\":\"Filter statuses by pipeline ID.\",\"example\":1234,\"format\":\"int32\",\"in\":\"query\",\"name\":\"pipeline_id\",\"required\":false,\"type\":\"integer\"},{\"default\":false,\"description\":\"Include all statuses instead of latest only. Default is `false`.\",\"in\":\"query\",\"name\":\"all\",\"required\":false,\"type\":\"boolean\"},{\"default\":\"id\",\"description\":\"Values for sorting statuses. Valid values are `id` and `pipeline_id`. Default is `id`.\",\"enum\":[\"id\",\"pipeline_id\"],\"in\":\"query\",\"name\":\"order_by\",\"required\":false,\"type\":\"string\"},{\"default\":\"asc\",\"description\":\"Sort statuses in ascending or descending order. Valid values are `asc` and `desc`. Default is `asc`.\",\"enum\":[\"asc\",\"desc\"],\"in\":\"query\",\"name\":\"sort\",\"required\":false,\"type\":\"string\"},{\"default\":1,\"description\":\"Current page number\",\"example\":1,\"format\":\"int32\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"type\":\"integer\"},{\"default\":20,\"description\":\"Number of items per page\",\"example\":20,\"format\":\"int32\",\"in\":\"query\",\"name\":\"per_page\",\"required\":false,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get a commit's statuses\",\"schema\":{\"items\":{\"description\":\"API_Entities_CommitStatus model\",\"properties\":{\"allow_failure\":{\"example\":false,\"type\":\"boolean\"},\"author\":{\"description\":\"API_Entities_UserBasic model\",\"properties\":{\"avatar_path\":{\"example\":\"/user/avatar/28/The-Big-Lebowski-400-400.png\",\"type\":\"string\"},\"avatar_url\":{\"example\":\"https://gravatar.com/avatar/1\",\"type\":\"string\"},\"custom_attributes\":{\"items\":{\"description\":\"API_Entities_CustomAttribute model\",\"properties\":{\"key\":{\"example\":\"foo\",\"type\":\"string\"},\"value\":{\"example\":\"bar\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"locked\":{\"type\":\"boolean\"},\"name\":{\"example\":\"Administrator\",\"type\":\"string\"},\"public_email\":{\"example\":\"john@example.com\",\"type\":\"string\"},\"state\":{\"example\":\"active\",\"type\":\"string\"},\"username\":{\"example\":\"admin\",\"type\":\"string\"},\"web_url\":{\"example\":\"https://gitlab.example.com/root\",\"type\":\"string\"}},\"type\":\"object\"},\"coverage\":{\"example\":98.29,\"format\":\"float\",\"type\":\"number\"},\"created_at\":{\"example\":\"2016-01-19T09:05:50.355Z\",\"format\":\"date-time\",\"type\":\"string\"},\"description\":{\"type\":\"string\"},\"finished_at\":{\"example\":\"2016-01-21T08:40:25.832Z\",\"format\":\"date-time\",\"type\":\"string\"},\"id\":{\"example\":93,\"format\":\"int32\",\"type\":\"integer\"},\"name\":{\"example\":\"default\",\"type\":\"string\"},\"pipeline_id\":{\"example\":101,\"format\":\"int32\",\"type\":\"integer\"},\"ref\":{\"example\":\"develop\",\"type\":\"string\"},\"sha\":{\"example\":\"18f3e63d05582537db6d183d9d557be09e1f90c8\",\"type\":\"string\"},\"started_at\":{\"example\":\"2016-01-20T08:40:25.832Z\",\"format\":\"date-time\",\"type\":\"string\"},\"status\":{\"example\":\"success\",\"type\":\"string\"},\"target_url\":{\"example\":\"https://gitlab.example.com/janedoe/gitlab-foss/builds/91\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/projects/{id}/repository/commits/{sha}/statuses","rename":{"param":{"id":"project_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"repository"},{"lit":"commits"},{"var":"sha"},{"lit":"statuses"}],"select":{"exist":["all","name","order_by","page","per_page","pipeline_id","project_id","ref","sha","sort","stage"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["project"],["project","commit"]]},"key$":"api_entities_commit_status","name__orig":"api_entities_commit_status","Name":"ApiEntitiesCommitStatus","name_":"api_entities_commit_status","name-":"api-entities-commit-status","NAME":"API_ENTITIES_COMMIT_STATUS","index$":51}, {"active":true,"entity":"api_entities_commit_status","key$":"BasicApiEntitiesCommitStatusFlow","kind":"basic","name":"BasicApiEntitiesCommitStatusFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"api_entities_commit_status_ref01"},"match":{"project_id":"project01","sha":"sha01"},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{},"match":{"project_id":"project01","sha":"sha01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"api_entities_commit_status_ref01"}}],"index$":1}]}, 'ApiEntitiesCommitStatus')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const api_entities_commit_status_ref01_ent = client.ApiEntitiesCommitStatus()
    let api_entities_commit_status_ref01_data = setup.data.new.api_entities_commit_status['api_entities_commit_status_ref01']
    api_entities_commit_status_ref01_data['project_id'] = setup.idmap['project01']
    api_entities_commit_status_ref01_data['sha'] = setup.idmap['sha01']

    api_entities_commit_status_ref01_data = (await api_entities_commit_status_ref01_ent.create(api_entities_commit_status_ref01_data)).data()
    assert(null != api_entities_commit_status_ref01_data.id)


    // LIST
    const api_entities_commit_status_ref01_match: any = {}
    api_entities_commit_status_ref01_match['project_id'] = setup.idmap['project01']
    api_entities_commit_status_ref01_match['sha'] = setup.idmap['sha01']

    const api_entities_commit_status_ref01_list = (await api_entities_commit_status_ref01_ent.list(api_entities_commit_status_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(api_entities_commit_status_ref01_list, { id: api_entities_commit_status_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_commit_status/ApiEntitiesCommitStatusTestData.json')

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
    ['api_entities_commit_status01','api_entities_commit_status02','api_entities_commit_status03','project01','project02','project03','project01','project02','project03','commit01','commit02','commit03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_COMMIT_STATUS_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_COMMIT_STATUS_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_COMMIT_STATUS_ENTID']
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
  
