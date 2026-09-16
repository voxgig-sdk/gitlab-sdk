

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


describe('ApiEntitiesCiJobBasicWithProjectEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesCiJobBasicWithProject()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_ci_job_basic_with_project.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"allow_failure","req":false,"type":"`$BOOLEAN`","index$":0},{"active":true,"name":"commit","req":false,"short":"API_Entities_Commit model","type":"`$OBJECT`","index$":1},{"active":true,"format":"float","name":"coverage","req":false,"type":"`$NUMBER`","index$":2},{"active":true,"format":"date-time","name":"created_at","req":false,"type":"`$STRING`","index$":3},{"active":true,"format":"float","name":"duration","req":false,"short":"Time spent running","type":"`$NUMBER`","index$":4},{"active":true,"format":"date-time","name":"erased_at","req":false,"type":"`$STRING`","index$":5},{"active":true,"name":"failure_reason","req":false,"type":"`$STRING`","index$":6},{"active":true,"format":"date-time","name":"finished_at","req":false,"type":"`$STRING`","index$":7},{"active":true,"format":"int32","name":"id","req":false,"type":"`$INTEGER`","index$":8},{"active":true,"name":"name","req":false,"type":"`$STRING`","index$":9},{"active":true,"name":"pipeline","req":false,"short":"API_Entities_Ci_PipelineBasic model","type":"`$OBJECT`","index$":10},{"active":true,"name":"project","req":false,"type":"`$OBJECT`","index$":11},{"active":true,"format":"float","name":"queued_duration","req":false,"short":"Time spent enqueued","type":"`$NUMBER`","index$":12},{"active":true,"name":"ref","req":false,"type":"`$STRING`","index$":13},{"active":true,"name":"stage","req":false,"type":"`$STRING`","index$":14},{"active":true,"format":"date-time","name":"started_at","req":false,"type":"`$STRING`","index$":15},{"active":true,"name":"status","req":false,"type":"`$STRING`","index$":16},{"active":true,"name":"tag","req":false,"type":"`$BOOLEAN`","index$":17},{"active":true,"name":"user","req":false,"type":"`$OBJECT`","index$":18},{"active":true,"name":"web_url","req":false,"type":"`$STRING`","index$":19}],"id":{"field":"id","name":"id"},"name":"api_entities_ci_job_basic_with_project","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"runner_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"kind":"query","name":"cursor","orig":"cursor","reqd":false,"type":"`$ANY`","index$":0},{"active":true,"kind":"query","name":"order_by","orig":"order_by","reqd":false,"type":"`$ANY`","index$":1},{"active":true,"example":1,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":2},{"active":true,"example":20,"kind":"query","name":"per_page","orig":"per_page","reqd":false,"type":"`$INTEGER`","index$":3},{"active":true,"kind":"query","name":"sort","orig":"sort","reqd":false,"type":"`$ANY`","index$":4},{"active":true,"kind":"query","name":"status","orig":"status","reqd":false,"type":"`$ANY`","index$":5},{"active":true,"kind":"query","name":"system_id","orig":"system_id","reqd":false,"type":"`$STRING`","index$":6}]},"contract":{"id":"GET /api/v4/runners/{id}/jobs","json":"{\"operationId\":\"getApiV4RunnersIdJobs\",\"parameters\":[{\"description\":\"The ID of a runner\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"integer\"},{\"description\":\"System ID associated with the runner manager\",\"in\":\"query\",\"name\":\"system_id\",\"required\":false,\"type\":\"string\"},{\"description\":\"Status of the job\",\"enum\":[\"created\",\"waiting_for_resource\",\"preparing\",\"waiting_for_callback\",\"pending\",\"running\",\"success\",\"failed\",\"canceling\",\"canceled\",\"skipped\",\"manual\",\"scheduled\"],\"in\":\"query\",\"name\":\"status\",\"required\":false,\"type\":\"string\"},{\"description\":\"Order by `id`\",\"enum\":[\"id\"],\"in\":\"query\",\"name\":\"order_by\",\"required\":false,\"type\":\"string\"},{\"default\":\"desc\",\"description\":\"Sort by `asc` or `desc` order. Specify `order_by` as well, including for `id`\",\"enum\":[\"asc\",\"desc\"],\"in\":\"query\",\"name\":\"sort\",\"required\":false,\"type\":\"string\"},{\"description\":\"Cursor for obtaining the next set of records\",\"in\":\"query\",\"name\":\"cursor\",\"required\":false,\"type\":\"string\"},{\"default\":1,\"description\":\"Current page number\",\"example\":1,\"format\":\"int32\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"type\":\"integer\"},{\"default\":20,\"description\":\"Number of items per page\",\"example\":20,\"format\":\"int32\",\"in\":\"query\",\"name\":\"per_page\",\"required\":false,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"List jobs running on a runner\",\"schema\":{\"description\":\"API_Entities_Ci_JobBasicWithProject model\",\"properties\":{\"allow_failure\":{\"type\":\"boolean\"},\"commit\":{\"description\":\"API_Entities_Commit model\",\"properties\":{\"author_email\":{\"example\":\"john@example.com\",\"type\":\"string\"},\"author_name\":{\"example\":\"John Smith\",\"type\":\"string\"},\"authored_date\":{\"example\":\"2012-05-28T04:42:42-07:00\",\"format\":\"date-time\",\"type\":\"string\"},\"committed_date\":{\"example\":\"2012-05-28T04:42:42-07:00\",\"format\":\"date-time\",\"type\":\"string\"},\"committer_email\":{\"example\":\"jack@example.com\",\"type\":\"string\"},\"committer_name\":{\"example\":\"Jack Smith\",\"type\":\"string\"},\"created_at\":{\"example\":\"2017-07-26T11:08:53.000+02:00\",\"format\":\"date-time\",\"type\":\"string\"},\"extended_trailers\":{\"example\":\"{ \\\"Signed-off-by\\\": [\\\"John Doe <johndoe@gitlab.com>\\\", \\\"Jane Doe <janedoe@gitlab.com>\\\"] }\",\"type\":\"object\"},\"id\":{\"example\":\"2695effb5807a22ff3d138d593fd856244e155e7\",\"type\":\"string\"},\"message\":{\"example\":\"Initial commit\",\"type\":\"string\"},\"parent_ids\":{\"example\":\"2a4b78934375d7f53875269ffd4f45fd83a84ebe\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"short_id\":{\"example\":\"2695effb\",\"type\":\"string\"},\"title\":{\"example\":\"Initial commit\",\"type\":\"string\"},\"trailers\":{\"example\":\"{ \\\"Merged-By\\\": \\\"Jane Doe janedoe@gitlab.com\\\" }\",\"type\":\"object\"},\"web_url\":{\"example\":\"https://gitlab.example.com/janedoe/gitlab-foss/-/commit/ed899a2f4b50b4370feeea94676502b42383c746\",\"type\":\"string\"}},\"type\":\"object\"},\"coverage\":{\"example\":98.29,\"format\":\"float\",\"type\":\"number\"},\"created_at\":{\"example\":\"2015-12-24T15:51:21.880Z\",\"format\":\"date-time\",\"type\":\"string\"},\"duration\":{\"description\":\"Time spent running\",\"example\":0.465,\"format\":\"float\",\"type\":\"number\"},\"erased_at\":{\"example\":\"2015-12-24T18:00:29.728Z\",\"format\":\"date-time\",\"type\":\"string\"},\"failure_reason\":{\"example\":\"script_failure\",\"type\":\"string\"},\"finished_at\":{\"example\":\"2015-12-24T17:54:31.198Z\",\"format\":\"date-time\",\"type\":\"string\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"name\":{\"example\":\"deploy_to_production\",\"type\":\"string\"},\"pipeline\":{\"description\":\"API_Entities_Ci_PipelineBasic model\",\"properties\":{\"created_at\":{\"example\":\"2022-10-21T16:49:48.000+02:00\",\"format\":\"date-time\",\"type\":\"string\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"iid\":{\"example\":2,\"format\":\"int32\",\"type\":\"integer\"},\"project_id\":{\"example\":3,\"format\":\"int32\",\"type\":\"integer\"},\"ref\":{\"example\":\"feature-branch\",\"type\":\"string\"},\"sha\":{\"example\":\"0ec9e58fdfca6cdd6652c083c9edb53abc0bad52\",\"type\":\"string\"},\"source\":{\"example\":\"push\",\"type\":\"string\"},\"status\":{\"example\":\"success\",\"type\":\"string\"},\"updated_at\":{\"example\":\"2022-10-21T16:49:48.000+02:00\",\"format\":\"date-time\",\"type\":\"string\"},\"web_url\":{\"example\":\"https://gitlab.example.com/gitlab-org/gitlab-foss/-/pipelines/61\",\"type\":\"string\"}},\"type\":\"object\"},\"project\":{\"properties\":{\"created_at\":{\"example\":\"2020-05-07T04:27:17.016Z\",\"format\":\"date-time\",\"type\":\"string\"},\"description\":{\"example\":\"desc\",\"type\":\"string\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"name\":{\"example\":\"project1\",\"type\":\"string\"},\"name_with_namespace\":{\"example\":\"John Doe / project1\",\"type\":\"string\"},\"path\":{\"example\":\"project1\",\"type\":\"string\"},\"path_with_namespace\":{\"example\":\"namespace1/project1\",\"type\":\"string\"}},\"type\":\"object\"},\"queued_duration\":{\"description\":\"Time spent enqueued\",\"example\":0.123,\"format\":\"float\",\"type\":\"number\"},\"ref\":{\"example\":\"main\",\"type\":\"string\"},\"stage\":{\"example\":\"deploy\",\"type\":\"string\"},\"started_at\":{\"example\":\"2015-12-24T17:54:30.733Z\",\"format\":\"date-time\",\"type\":\"string\"},\"status\":{\"example\":\"waiting_for_resource\",\"type\":\"string\"},\"tag\":{\"type\":\"boolean\"},\"user\":{\"properties\":{\"avatar_path\":{\"example\":\"/user/avatar/28/The-Big-Lebowski-400-400.png\",\"type\":\"string\"},\"avatar_url\":{\"example\":\"https://gravatar.com/avatar/1\",\"type\":\"string\"},\"bio\":{\"type\":\"string\"},\"bot\":{\"type\":\"string\"},\"created_at\":{\"type\":\"string\"},\"custom_attributes\":{\"items\":{\"description\":\"API_Entities_CustomAttribute model\",\"properties\":{\"key\":{\"example\":\"foo\",\"type\":\"string\"},\"value\":{\"example\":\"bar\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"discord\":{\"type\":\"string\"},\"followers\":{\"type\":\"string\"},\"following\":{\"type\":\"string\"},\"github\":{\"type\":\"string\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"is_followed\":{\"type\":\"string\"},\"job_title\":{\"type\":\"string\"},\"linkedin\":{\"type\":\"string\"},\"local_time\":{\"type\":\"string\"},\"location\":{\"type\":\"string\"},\"locked\":{\"type\":\"boolean\"},\"name\":{\"example\":\"Administrator\",\"type\":\"string\"},\"organization\":{\"type\":\"string\"},\"pronouns\":{\"type\":\"string\"},\"public_email\":{\"example\":\"john@example.com\",\"type\":\"string\"},\"state\":{\"example\":\"active\",\"type\":\"string\"},\"twitter\":{\"type\":\"string\"},\"username\":{\"example\":\"admin\",\"type\":\"string\"},\"web_url\":{\"example\":\"https://gitlab.example.com/root\",\"type\":\"string\"},\"website_url\":{\"type\":\"string\"},\"work_information\":{\"type\":\"string\"}},\"type\":\"object\"},\"web_url\":{\"example\":\"https://example.com/foo/bar/-/jobs/1\",\"type\":\"string\"}},\"type\":\"object\"}},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"No access granted\"},\"404\":{\"description\":\"Runner not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/runners/{id}/jobs","rename":{"param":{"id":"runner_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"runners"},{"var":"runner_id"},{"lit":"jobs"}],"select":{"exist":["cursor","order_by","page","per_page","runner_id","sort","status","system_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["runner"]]},"key$":"api_entities_ci_job_basic_with_project","name__orig":"api_entities_ci_job_basic_with_project","Name":"ApiEntitiesCiJobBasicWithProject","name_":"api_entities_ci_job_basic_with_project","name-":"api-entities-ci-job-basic-with-project","NAME":"API_ENTITIES_CI_JOB_BASIC_WITH_PROJECT","index$":25}, {"active":true,"entity":"api_entities_ci_job_basic_with_project","key$":"BasicApiEntitiesCiJobBasicWithProjectFlow","kind":"basic","name":"BasicApiEntitiesCiJobBasicWithProjectFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"api_entities_ci_job_basic_with_project_ref01","srcdatavar":"api_entities_ci_job_basic_with_project_ref01_data","suffix":"_dt0"},"match":{"id":"api_entities_ci_job_basic_with_project01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_ci_job_basic_with_project_ref01"}}],"index$":0}]}, 'ApiEntitiesCiJobBasicWithProject')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let api_entities_ci_job_basic_with_project_ref01_data = Object.values(setup.data.existing.api_entities_ci_job_basic_with_project)[0] as any

    // LOAD
    const api_entities_ci_job_basic_with_project_ref01_ent = client.ApiEntitiesCiJobBasicWithProject()
    const api_entities_ci_job_basic_with_project_ref01_match_dt0: any = {}
    api_entities_ci_job_basic_with_project_ref01_match_dt0.id = api_entities_ci_job_basic_with_project_ref01_data.id
    const api_entities_ci_job_basic_with_project_ref01_data_dt0 = (await api_entities_ci_job_basic_with_project_ref01_ent.load(api_entities_ci_job_basic_with_project_ref01_match_dt0)).data()
    assert(api_entities_ci_job_basic_with_project_ref01_data_dt0.id === api_entities_ci_job_basic_with_project_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_ci_job_basic_with_project/ApiEntitiesCiJobBasicWithProjectTestData.json')

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
    ['api_entities_ci_job_basic_with_project01','api_entities_ci_job_basic_with_project02','api_entities_ci_job_basic_with_project03','runner01','runner02','runner03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_CI_JOB_BASIC_WITH_PROJECT_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_CI_JOB_BASIC_WITH_PROJECT_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_CI_JOB_BASIC_WITH_PROJECT_ENTID']
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
  
