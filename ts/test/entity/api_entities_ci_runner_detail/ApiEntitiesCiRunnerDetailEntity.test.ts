

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


describe('ApiEntitiesCiRunnerDetailEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesCiRunnerDetail()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_ci_runner_detail.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"access_level","req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"active","req":false,"type":"`$BOOLEAN`","index$":1},{"active":true,"name":"architecture","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"contacted_at","req":false,"type":"`$STRING`","index$":3},{"active":true,"format":"date-time","name":"created_at","req":false,"type":"`$STRING`","index$":4},{"active":true,"name":"created_by","req":false,"short":"API_Entities_UserBasic model","type":"`$OBJECT`","index$":5},{"active":true,"name":"description","req":false,"type":"`$STRING`","index$":6},{"active":true,"name":"groups","req":false,"short":"API_Entities_BasicGroupDetails model","type":"`$OBJECT`","index$":7},{"active":true,"format":"int32","name":"id","req":false,"type":"`$INTEGER`","index$":8},{"active":true,"name":"ip_address","req":false,"type":"`$STRING`","index$":9},{"active":true,"name":"is_shared","req":false,"type":"`$BOOLEAN`","index$":10},{"active":true,"name":"job_execution_status","req":false,"type":"`$STRING`","index$":11},{"active":true,"name":"locked","req":false,"type":"`$BOOLEAN`","index$":12},{"active":true,"name":"maintenance_note","req":false,"type":"`$STRING`","index$":13},{"active":true,"name":"maximum_timeout","req":false,"type":"`$STRING`","index$":14},{"active":true,"name":"name","req":false,"type":"`$STRING`","index$":15},{"active":true,"name":"online","req":false,"type":"`$BOOLEAN`","index$":16},{"active":true,"name":"paused","req":false,"type":"`$BOOLEAN`","index$":17},{"active":true,"name":"platform","req":false,"type":"`$STRING`","index$":18},{"active":true,"name":"projects","req":false,"short":"API_Entities_BasicProjectDetails model","type":"`$OBJECT`","index$":19},{"active":true,"name":"revision","req":false,"type":"`$STRING`","index$":20},{"active":true,"name":"run_untagged","req":false,"type":"`$STRING`","index$":21},{"active":true,"name":"runner_type","req":false,"type":"`$STRING`","index$":22},{"active":true,"name":"status","req":false,"type":"`$STRING`","index$":23},{"active":true,"name":"tag_list","req":false,"type":"`$STRING`","index$":24},{"active":true,"name":"version","req":false,"type":"`$STRING`","index$":25}],"id":{"field":"id","name":"id"},"name":"api_entities_ci_runner_detail","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /api/v4/runners/{id}","json":"{\"operationId\":\"getApiV4RunnersId\",\"parameters\":[{\"description\":\"The ID of a runner\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get runner's details\",\"schema\":{\"description\":\"API_Entities_Ci_RunnerDetails model\",\"properties\":{\"access_level\":{\"type\":\"string\"},\"active\":{\"example\":true,\"type\":\"boolean\"},\"architecture\":{\"type\":\"string\"},\"contacted_at\":{\"type\":\"string\"},\"created_at\":{\"example\":\"2025-05-03T00:00:00.000Z\",\"format\":\"date-time\",\"type\":\"string\"},\"created_by\":{\"description\":\"API_Entities_UserBasic model\",\"properties\":{\"avatar_path\":{\"example\":\"/user/avatar/28/The-Big-Lebowski-400-400.png\",\"type\":\"string\"},\"avatar_url\":{\"example\":\"https://gravatar.com/avatar/1\",\"type\":\"string\"},\"custom_attributes\":{\"items\":{\"description\":\"API_Entities_CustomAttribute model\",\"properties\":{\"key\":{\"example\":\"foo\",\"type\":\"string\"},\"value\":{\"example\":\"bar\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"locked\":{\"type\":\"boolean\"},\"name\":{\"example\":\"Administrator\",\"type\":\"string\"},\"public_email\":{\"example\":\"john@example.com\",\"type\":\"string\"},\"state\":{\"example\":\"active\",\"type\":\"string\"},\"username\":{\"example\":\"admin\",\"type\":\"string\"},\"web_url\":{\"example\":\"https://gitlab.example.com/root\",\"type\":\"string\"}},\"type\":\"object\"},\"description\":{\"example\":\"test-1-20150125\",\"type\":\"string\"},\"groups\":{\"description\":\"API_Entities_BasicGroupDetails model\",\"properties\":{\"id\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"web_url\":{\"type\":\"string\"}},\"type\":\"object\"},\"id\":{\"example\":8,\"format\":\"int32\",\"type\":\"integer\"},\"ip_address\":{\"example\":\"127.0.0.1\",\"type\":\"string\"},\"is_shared\":{\"example\":true,\"type\":\"boolean\"},\"job_execution_status\":{\"enum\":[\"active\",\"idle\"],\"example\":\"idle\",\"type\":\"string\"},\"locked\":{\"type\":\"string\"},\"maintenance_note\":{\"type\":\"string\"},\"maximum_timeout\":{\"type\":\"string\"},\"name\":{\"example\":\"test\",\"type\":\"string\"},\"online\":{\"example\":true,\"type\":\"boolean\"},\"paused\":{\"example\":false,\"type\":\"boolean\"},\"platform\":{\"type\":\"string\"},\"projects\":{\"description\":\"API_Entities_BasicProjectDetails model\",\"properties\":{\"avatar_url\":{\"example\":\"http://example.com/uploads/project/avatar/3/uploads/avatar.png\",\"type\":\"string\"},\"created_at\":{\"example\":\"2020-05-07T04:27:17.016Z\",\"format\":\"date-time\",\"type\":\"string\"},\"custom_attributes\":{\"description\":\"API_Entities_CustomAttribute model\",\"properties\":{\"key\":{\"example\":\"foo\",\"type\":\"string\"},\"value\":{\"example\":\"bar\",\"type\":\"string\"}},\"type\":\"object\"},\"default_branch\":{\"example\":\"main\",\"type\":\"string\"},\"description\":{\"example\":\"desc\",\"type\":\"string\"},\"forks_count\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"http_url_to_repo\":{\"example\":\"https://gitlab.example.com/gitlab/gitlab.git\",\"type\":\"string\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"last_activity_at\":{\"example\":\"2013-09-30T13:46:02Z\",\"format\":\"date-time\",\"type\":\"string\"},\"license\":{\"properties\":{\"html_url\":{\"example\":\"http://choosealicense.com/licenses/gpl-3.0\",\"type\":\"string\"},\"key\":{\"example\":\"gpl-3.0\",\"type\":\"string\"},\"name\":{\"example\":\"GNU General Public License v3.0\",\"type\":\"string\"},\"nickname\":{\"example\":\"GNU GPLv3\",\"type\":\"string\"},\"source_url\":{\"type\":\"string\"}},\"type\":\"object\"},\"license_url\":{\"example\":\"https://gitlab.example.com/gitlab/gitlab/blob/master/LICENCE\",\"type\":\"string\"},\"name\":{\"example\":\"project1\",\"type\":\"string\"},\"name_with_namespace\":{\"example\":\"John Doe / project1\",\"type\":\"string\"},\"namespace\":{\"properties\":{\"avatar_url\":{\"example\":\"https://example.com/avatar/12345\",\"type\":\"string\"},\"full_path\":{\"example\":\"group/my_project\",\"type\":\"string\"},\"id\":{\"example\":2,\"format\":\"int32\",\"type\":\"integer\"},\"kind\":{\"example\":\"project\",\"type\":\"string\"},\"name\":{\"example\":\"project\",\"type\":\"string\"},\"parent_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"path\":{\"example\":\"my_project\",\"type\":\"string\"},\"web_url\":{\"example\":\"https://example.com/group/my_project\",\"type\":\"string\"}},\"type\":\"object\"},\"path\":{\"example\":\"project1\",\"type\":\"string\"},\"path_with_namespace\":{\"example\":\"namespace1/project1\",\"type\":\"string\"},\"readme_url\":{\"example\":\"https://gitlab.example.com/gitlab/gitlab/blob/master/README.md\",\"type\":\"string\"},\"repository_storage\":{\"example\":\"default\",\"type\":\"string\"},\"ssh_url_to_repo\":{\"example\":\"git@gitlab.example.com:gitlab/gitlab.git\",\"type\":\"string\"},\"star_count\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"tag_list\":{\"example\":\"tag\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"topics\":{\"example\":\"topic\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"visibility\":{\"example\":\"public\",\"type\":\"string\"},\"web_url\":{\"example\":\"https://gitlab.example.com/gitlab/gitlab\",\"type\":\"string\"}},\"type\":\"object\"},\"revision\":{\"type\":\"string\"},\"run_untagged\":{\"type\":\"string\"},\"runner_type\":{\"enum\":[\"instance_type\",\"group_type\",\"project_type\"],\"example\":\"instance_type\",\"type\":\"string\"},\"status\":{\"example\":\"online\",\"type\":\"string\"},\"tag_list\":{\"type\":\"string\"},\"version\":{\"type\":\"string\"}},\"type\":\"object\"}},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"No access granted\"},\"404\":{\"description\":\"Runner not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/runners/{id}","segments":[{"lit":"api"},{"lit":"v4"},{"lit":"runners"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"kind":"query","name":"put_api_v4_runners_id","orig":"put_api_v4_runners_id","reqd":true,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"PUT /api/v4/runners/{id}","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"putApiV4RunnersId\",\"parameters\":[{\"description\":\"The ID of a runner\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"integer\"},{\"in\":\"body\",\"name\":\"putApiV4RunnersId\",\"required\":true,\"schema\":{\"description\":\"Update runner's details\",\"properties\":{\"access_level\":{\"description\":\"The access level of the runner\",\"enum\":[\"not_protected\",\"ref_protected\"],\"type\":\"string\"},\"active\":{\"description\":\"Deprecated: Use `paused` instead. Flag indicating whether the runner is allowed to receive jobs\",\"type\":\"boolean\"},\"description\":{\"description\":\"The description of the runner\",\"type\":\"string\"},\"locked\":{\"description\":\"Specifies if the runner is locked\",\"type\":\"boolean\"},\"maintenance_note\":{\"description\":\"Free-form maintenance notes for the runner (1024 characters)\",\"type\":\"string\"},\"maximum_timeout\":{\"description\":\"Maximum timeout that limits the amount of time (in seconds) that runners can run jobs\",\"format\":\"int32\",\"type\":\"integer\"},\"paused\":{\"description\":\"Specifies if the runner should ignore new jobs\",\"type\":\"boolean\"},\"run_untagged\":{\"description\":\"Specifies if the runner can execute untagged jobs\",\"type\":\"boolean\"},\"tag_list\":{\"description\":\"The list of tags for a runner\",\"example\":\"['macos', 'shell']\",\"items\":{\"type\":\"string\"},\"type\":\"array\"}},\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Update runner's details\",\"schema\":{\"description\":\"API_Entities_Ci_RunnerDetails model\",\"properties\":{\"access_level\":{\"type\":\"string\"},\"active\":{\"example\":true,\"type\":\"boolean\"},\"architecture\":{\"type\":\"string\"},\"contacted_at\":{\"type\":\"string\"},\"created_at\":{\"example\":\"2025-05-03T00:00:00.000Z\",\"format\":\"date-time\",\"type\":\"string\"},\"created_by\":{\"description\":\"API_Entities_UserBasic model\",\"properties\":{\"avatar_path\":{\"example\":\"/user/avatar/28/The-Big-Lebowski-400-400.png\",\"type\":\"string\"},\"avatar_url\":{\"example\":\"https://gravatar.com/avatar/1\",\"type\":\"string\"},\"custom_attributes\":{\"items\":{\"description\":\"API_Entities_CustomAttribute model\",\"properties\":{\"key\":{\"example\":\"foo\",\"type\":\"string\"},\"value\":{\"example\":\"bar\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"locked\":{\"type\":\"boolean\"},\"name\":{\"example\":\"Administrator\",\"type\":\"string\"},\"public_email\":{\"example\":\"john@example.com\",\"type\":\"string\"},\"state\":{\"example\":\"active\",\"type\":\"string\"},\"username\":{\"example\":\"admin\",\"type\":\"string\"},\"web_url\":{\"example\":\"https://gitlab.example.com/root\",\"type\":\"string\"}},\"type\":\"object\"},\"description\":{\"example\":\"test-1-20150125\",\"type\":\"string\"},\"groups\":{\"description\":\"API_Entities_BasicGroupDetails model\",\"properties\":{\"id\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"web_url\":{\"type\":\"string\"}},\"type\":\"object\"},\"id\":{\"example\":8,\"format\":\"int32\",\"type\":\"integer\"},\"ip_address\":{\"example\":\"127.0.0.1\",\"type\":\"string\"},\"is_shared\":{\"example\":true,\"type\":\"boolean\"},\"job_execution_status\":{\"enum\":[\"active\",\"idle\"],\"example\":\"idle\",\"type\":\"string\"},\"locked\":{\"type\":\"string\"},\"maintenance_note\":{\"type\":\"string\"},\"maximum_timeout\":{\"type\":\"string\"},\"name\":{\"example\":\"test\",\"type\":\"string\"},\"online\":{\"example\":true,\"type\":\"boolean\"},\"paused\":{\"example\":false,\"type\":\"boolean\"},\"platform\":{\"type\":\"string\"},\"projects\":{\"description\":\"API_Entities_BasicProjectDetails model\",\"properties\":{\"avatar_url\":{\"example\":\"http://example.com/uploads/project/avatar/3/uploads/avatar.png\",\"type\":\"string\"},\"created_at\":{\"example\":\"2020-05-07T04:27:17.016Z\",\"format\":\"date-time\",\"type\":\"string\"},\"custom_attributes\":{\"description\":\"API_Entities_CustomAttribute model\",\"properties\":{\"key\":{\"example\":\"foo\",\"type\":\"string\"},\"value\":{\"example\":\"bar\",\"type\":\"string\"}},\"type\":\"object\"},\"default_branch\":{\"example\":\"main\",\"type\":\"string\"},\"description\":{\"example\":\"desc\",\"type\":\"string\"},\"forks_count\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"http_url_to_repo\":{\"example\":\"https://gitlab.example.com/gitlab/gitlab.git\",\"type\":\"string\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"last_activity_at\":{\"example\":\"2013-09-30T13:46:02Z\",\"format\":\"date-time\",\"type\":\"string\"},\"license\":{\"properties\":{\"html_url\":{\"example\":\"http://choosealicense.com/licenses/gpl-3.0\",\"type\":\"string\"},\"key\":{\"example\":\"gpl-3.0\",\"type\":\"string\"},\"name\":{\"example\":\"GNU General Public License v3.0\",\"type\":\"string\"},\"nickname\":{\"example\":\"GNU GPLv3\",\"type\":\"string\"},\"source_url\":{\"type\":\"string\"}},\"type\":\"object\"},\"license_url\":{\"example\":\"https://gitlab.example.com/gitlab/gitlab/blob/master/LICENCE\",\"type\":\"string\"},\"name\":{\"example\":\"project1\",\"type\":\"string\"},\"name_with_namespace\":{\"example\":\"John Doe / project1\",\"type\":\"string\"},\"namespace\":{\"properties\":{\"avatar_url\":{\"example\":\"https://example.com/avatar/12345\",\"type\":\"string\"},\"full_path\":{\"example\":\"group/my_project\",\"type\":\"string\"},\"id\":{\"example\":2,\"format\":\"int32\",\"type\":\"integer\"},\"kind\":{\"example\":\"project\",\"type\":\"string\"},\"name\":{\"example\":\"project\",\"type\":\"string\"},\"parent_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"path\":{\"example\":\"my_project\",\"type\":\"string\"},\"web_url\":{\"example\":\"https://example.com/group/my_project\",\"type\":\"string\"}},\"type\":\"object\"},\"path\":{\"example\":\"project1\",\"type\":\"string\"},\"path_with_namespace\":{\"example\":\"namespace1/project1\",\"type\":\"string\"},\"readme_url\":{\"example\":\"https://gitlab.example.com/gitlab/gitlab/blob/master/README.md\",\"type\":\"string\"},\"repository_storage\":{\"example\":\"default\",\"type\":\"string\"},\"ssh_url_to_repo\":{\"example\":\"git@gitlab.example.com:gitlab/gitlab.git\",\"type\":\"string\"},\"star_count\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"tag_list\":{\"example\":\"tag\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"topics\":{\"example\":\"topic\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"visibility\":{\"example\":\"public\",\"type\":\"string\"},\"web_url\":{\"example\":\"https://gitlab.example.com/gitlab/gitlab\",\"type\":\"string\"}},\"type\":\"object\"},\"revision\":{\"type\":\"string\"},\"run_untagged\":{\"type\":\"string\"},\"runner_type\":{\"enum\":[\"instance_type\",\"group_type\",\"project_type\"],\"example\":\"instance_type\",\"type\":\"string\"},\"status\":{\"example\":\"online\",\"type\":\"string\"},\"tag_list\":{\"type\":\"string\"},\"version\":{\"type\":\"string\"}},\"type\":\"object\"}},\"400\":{\"description\":\"Bad Request\"},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"No access granted\"},\"404\":{\"description\":\"Runner not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"PUT","orig":"/api/v4/runners/{id}","segments":[{"lit":"api"},{"lit":"v4"},{"lit":"runners"},{"var":"id"}],"select":{"exist":["id","put_api_v4_runners_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"api_entities_ci_runner_detail","name__orig":"api_entities_ci_runner_detail","Name":"ApiEntitiesCiRunnerDetail","name_":"api_entities_ci_runner_detail","name-":"api-entities-ci-runner-detail","NAME":"API_ENTITIES_CI_RUNNER_DETAIL","index$":34}, {"active":true,"entity":"api_entities_ci_runner_detail","key$":"BasicApiEntitiesCiRunnerDetailFlow","kind":"basic","name":"BasicApiEntitiesCiRunnerDetailFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"api_entities_ci_runner_detail_ref01","srcdatavar":"api_entities_ci_runner_detail_ref01_data","suffix":"_up0","textfield":"access_level"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_ci_runner_detail_ref01"}}],"valid":[],"index$":0},{"active":true,"data":{},"input":{"ref":"api_entities_ci_runner_detail_ref01","srcdatavar":"api_entities_ci_runner_detail_ref01_data","suffix":"_dt0"},"match":{"id":"api_entities_ci_runner_detail01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_ci_runner_detail_ref01"}}],"index$":1}]}, 'ApiEntitiesCiRunnerDetail')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let api_entities_ci_runner_detail_ref01_data = Object.values(setup.data.existing.api_entities_ci_runner_detail)[0] as any

    // UPDATE
    const api_entities_ci_runner_detail_ref01_ent = client.ApiEntitiesCiRunnerDetail()
    const api_entities_ci_runner_detail_ref01_data_up0: any = {}
    api_entities_ci_runner_detail_ref01_data_up0.id = api_entities_ci_runner_detail_ref01_data.id

    const api_entities_ci_runner_detail_ref01_markdef_up0 = { name: 'access_level', value: 'Mark01-api_entities_ci_runner_detail_ref01_' + setup.now }
    ;(api_entities_ci_runner_detail_ref01_data_up0 as any)[api_entities_ci_runner_detail_ref01_markdef_up0.name] = api_entities_ci_runner_detail_ref01_markdef_up0.value

    const api_entities_ci_runner_detail_ref01_resdata_up0 = (await api_entities_ci_runner_detail_ref01_ent.update(api_entities_ci_runner_detail_ref01_data_up0)).data()
    assert(api_entities_ci_runner_detail_ref01_resdata_up0.id === api_entities_ci_runner_detail_ref01_data_up0.id)

    assert((api_entities_ci_runner_detail_ref01_resdata_up0 as any)[api_entities_ci_runner_detail_ref01_markdef_up0.name] === api_entities_ci_runner_detail_ref01_markdef_up0.value)


    // LOAD
    const api_entities_ci_runner_detail_ref01_match_dt0: any = {}
    api_entities_ci_runner_detail_ref01_match_dt0.id = api_entities_ci_runner_detail_ref01_data.id
    const api_entities_ci_runner_detail_ref01_data_dt0 = (await api_entities_ci_runner_detail_ref01_ent.load(api_entities_ci_runner_detail_ref01_match_dt0)).data()
    assert(api_entities_ci_runner_detail_ref01_data_dt0.id === api_entities_ci_runner_detail_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_ci_runner_detail/ApiEntitiesCiRunnerDetailTestData.json')

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
    ['api_entities_ci_runner_detail01','api_entities_ci_runner_detail02','api_entities_ci_runner_detail03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_CI_RUNNER_DETAIL_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_CI_RUNNER_DETAIL_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_CI_RUNNER_DETAIL_ENTID']
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
  
