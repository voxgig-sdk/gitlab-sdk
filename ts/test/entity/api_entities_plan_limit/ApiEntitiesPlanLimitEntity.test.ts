

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


describe('ApiEntitiesPlanLimitEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesPlanLimit()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_plan_limit.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[],"name":"api_entities_plan_limit","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"plan_name","orig":"plan_name","reqd":false,"type":"`$ANY`","index$":0}]},"contract":{"id":"GET /api/v4/application/plan_limits","json":"{\"operationId\":\"getApiV4ApplicationPlanLimits\",\"parameters\":[{\"default\":\"default\",\"description\":\"Name of the plan to get the limits from. Default: default.\",\"enum\":[\"default\",\"free\",\"bronze\",\"silver\",\"premium\",\"gold\",\"ultimate\",\"ultimate_trial\",\"ultimate_trial_paid_customer\",\"premium_trial\",\"opensource\"],\"in\":\"query\",\"name\":\"plan_name\",\"required\":false,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get current plan limits\",\"schema\":{\"description\":\"API_Entities_PlanLimit model\",\"properties\":{\"ci_active_jobs\":{\"example\":0,\"format\":\"int32\",\"type\":\"integer\"},\"ci_instance_level_variables\":{\"example\":25,\"format\":\"int32\",\"type\":\"integer\"},\"ci_needs_size_limit\":{\"example\":50,\"format\":\"int32\",\"type\":\"integer\"},\"ci_pipeline_schedules\":{\"example\":10,\"format\":\"int32\",\"type\":\"integer\"},\"ci_pipeline_size\":{\"example\":0,\"format\":\"int32\",\"type\":\"integer\"},\"ci_project_subscriptions\":{\"example\":2,\"format\":\"int32\",\"type\":\"integer\"},\"ci_registered_group_runners\":{\"example\":1000,\"format\":\"int32\",\"type\":\"integer\"},\"ci_registered_project_runners\":{\"example\":1000,\"format\":\"int32\",\"type\":\"integer\"},\"conan_max_file_size\":{\"example\":3221225472,\"format\":\"int32\",\"type\":\"integer\"},\"dotenv_size\":{\"example\":5120,\"format\":\"int32\",\"type\":\"integer\"},\"dotenv_variables\":{\"example\":20,\"format\":\"int32\",\"type\":\"integer\"},\"enforcement_limit\":{\"example\":15000,\"format\":\"int32\",\"type\":\"integer\"},\"generic_packages_max_file_size\":{\"example\":5368709120,\"format\":\"int32\",\"type\":\"integer\"},\"helm_max_file_size\":{\"example\":5242880,\"format\":\"int32\",\"type\":\"integer\"},\"limits_history\":{\"example\":\"{\\\"enforcement_limit\\\"=>[{\\\"timestamp\\\"=>1686909124, \\\"user_id\\\"=>1, \\\"username\\\"=>\\\"x\\\", \\\"value\\\"=>5}],\\n                   \\\"notification_limit\\\"=>[{\\\"timestamp\\\"=>1686909124, \\\"user_id\\\"=>2, \\\"username\\\"=>\\\"y\\\", \\\"value\\\"=>7}]}\",\"type\":\"object\"},\"maven_max_file_size\":{\"example\":3221225472,\"format\":\"int32\",\"type\":\"integer\"},\"notification_limit\":{\"example\":15000,\"format\":\"int32\",\"type\":\"integer\"},\"npm_max_file_size\":{\"example\":524288000,\"format\":\"int32\",\"type\":\"integer\"},\"nuget_max_file_size\":{\"example\":524288000,\"format\":\"int32\",\"type\":\"integer\"},\"pipeline_hierarchy_size\":{\"example\":1000,\"format\":\"int32\",\"type\":\"integer\"},\"pypi_max_file_size\":{\"example\":3221225472,\"format\":\"int32\",\"type\":\"integer\"},\"storage_size_limit\":{\"example\":15000,\"format\":\"int32\",\"type\":\"integer\"},\"terraform_module_max_file_size\":{\"example\":1073741824,\"format\":\"int32\",\"type\":\"integer\"}},\"type\":\"object\"}},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/application/plan_limits","segments":[{"lit":"api"},{"lit":"v4"},{"lit":"application"},{"lit":"plan_limits"}],"select":{"exist":["plan_name"]},"transform":{"req":"`reqdata`","res":"`body.limits_history`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"put_api_v4_application_plan_limit","orig":"put_api_v4_application_plan_limit","reqd":true,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"PUT /api/v4/application/plan_limits","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"putApiV4ApplicationPlanLimits\",\"parameters\":[{\"in\":\"body\",\"name\":\"putApiV4ApplicationPlanLimits\",\"required\":true,\"schema\":{\"description\":\"Change plan limits\",\"properties\":{\"ci_active_jobs\":{\"description\":\"Total number of jobs in currently active pipelines\",\"format\":\"int32\",\"type\":\"integer\"},\"ci_instance_level_variables\":{\"description\":\"Maximum number of Instance-level CI/CD variables that can be defined\",\"format\":\"int32\",\"type\":\"integer\"},\"ci_needs_size_limit\":{\"description\":\"Maximum number of needs dependencies that a job can have\",\"format\":\"int32\",\"type\":\"integer\"},\"ci_pipeline_schedules\":{\"description\":\"Maximum number of pipeline schedules\",\"format\":\"int32\",\"type\":\"integer\"},\"ci_pipeline_size\":{\"description\":\"Maximum number of jobs in a single pipeline\",\"format\":\"int32\",\"type\":\"integer\"},\"ci_project_subscriptions\":{\"description\":\"Maximum number of pipeline subscriptions to and from a project\",\"format\":\"int32\",\"type\":\"integer\"},\"ci_registered_group_runners\":{\"description\":\"Maximum number of runners created or active in a group during the past seven days\",\"format\":\"int32\",\"type\":\"integer\"},\"ci_registered_project_runners\":{\"description\":\"Maximum number of runners created or active in a project during the past seven days\",\"format\":\"int32\",\"type\":\"integer\"},\"conan_max_file_size\":{\"description\":\"Maximum Conan package file size in bytes\",\"format\":\"int32\",\"type\":\"integer\"},\"dotenv_size\":{\"description\":\"Maximum size of a dotenv artifact in bytes\",\"format\":\"int32\",\"type\":\"integer\"},\"dotenv_variables\":{\"description\":\"Maximum number of variables in a dotenv artifact\",\"format\":\"int32\",\"type\":\"integer\"},\"enforcement_limit\":{\"description\":\"Maximum storage size for the root namespace enforcement in MiB\",\"format\":\"int32\",\"type\":\"integer\"},\"generic_packages_max_file_size\":{\"description\":\"Maximum generic package file size in bytes\",\"format\":\"int32\",\"type\":\"integer\"},\"helm_max_file_size\":{\"description\":\"Maximum Helm chart file size in bytes\",\"format\":\"int32\",\"type\":\"integer\"},\"maven_max_file_size\":{\"description\":\"Maximum Maven package file size in bytes\",\"format\":\"int32\",\"type\":\"integer\"},\"notification_limit\":{\"description\":\"Maximum storage size for the root namespace notifications in MiB\",\"format\":\"int32\",\"type\":\"integer\"},\"npm_max_file_size\":{\"description\":\"Maximum NPM package file size in bytes\",\"format\":\"int32\",\"type\":\"integer\"},\"nuget_max_file_size\":{\"description\":\"Maximum NuGet package file size in bytes\",\"format\":\"int32\",\"type\":\"integer\"},\"pipeline_hierarchy_size\":{\"description\":\"Maximum number of downstream pipelines in a pipeline's hierarchy tree\",\"format\":\"int32\",\"type\":\"integer\"},\"plan_name\":{\"description\":\"Name of the plan to update\",\"enum\":[\"default\",\"free\",\"bronze\",\"silver\",\"premium\",\"gold\",\"ultimate\",\"ultimate_trial\",\"ultimate_trial_paid_customer\",\"premium_trial\",\"opensource\"],\"type\":\"string\"},\"pypi_max_file_size\":{\"description\":\"Maximum PyPI package file size in bytes\",\"format\":\"int32\",\"type\":\"integer\"},\"storage_size_limit\":{\"description\":\"Maximum storage size for the root namespace in MiB\",\"format\":\"int32\",\"type\":\"integer\"},\"terraform_module_max_file_size\":{\"description\":\"Maximum Terraform Module package file size in bytes\",\"format\":\"int32\",\"type\":\"integer\"}},\"required\":[\"plan_name\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Change plan limits\",\"schema\":{\"description\":\"API_Entities_PlanLimit model\",\"properties\":{\"ci_active_jobs\":{\"example\":0,\"format\":\"int32\",\"type\":\"integer\"},\"ci_instance_level_variables\":{\"example\":25,\"format\":\"int32\",\"type\":\"integer\"},\"ci_needs_size_limit\":{\"example\":50,\"format\":\"int32\",\"type\":\"integer\"},\"ci_pipeline_schedules\":{\"example\":10,\"format\":\"int32\",\"type\":\"integer\"},\"ci_pipeline_size\":{\"example\":0,\"format\":\"int32\",\"type\":\"integer\"},\"ci_project_subscriptions\":{\"example\":2,\"format\":\"int32\",\"type\":\"integer\"},\"ci_registered_group_runners\":{\"example\":1000,\"format\":\"int32\",\"type\":\"integer\"},\"ci_registered_project_runners\":{\"example\":1000,\"format\":\"int32\",\"type\":\"integer\"},\"conan_max_file_size\":{\"example\":3221225472,\"format\":\"int32\",\"type\":\"integer\"},\"dotenv_size\":{\"example\":5120,\"format\":\"int32\",\"type\":\"integer\"},\"dotenv_variables\":{\"example\":20,\"format\":\"int32\",\"type\":\"integer\"},\"enforcement_limit\":{\"example\":15000,\"format\":\"int32\",\"type\":\"integer\"},\"generic_packages_max_file_size\":{\"example\":5368709120,\"format\":\"int32\",\"type\":\"integer\"},\"helm_max_file_size\":{\"example\":5242880,\"format\":\"int32\",\"type\":\"integer\"},\"limits_history\":{\"example\":\"{\\\"enforcement_limit\\\"=>[{\\\"timestamp\\\"=>1686909124, \\\"user_id\\\"=>1, \\\"username\\\"=>\\\"x\\\", \\\"value\\\"=>5}],\\n                   \\\"notification_limit\\\"=>[{\\\"timestamp\\\"=>1686909124, \\\"user_id\\\"=>2, \\\"username\\\"=>\\\"y\\\", \\\"value\\\"=>7}]}\",\"type\":\"object\"},\"maven_max_file_size\":{\"example\":3221225472,\"format\":\"int32\",\"type\":\"integer\"},\"notification_limit\":{\"example\":15000,\"format\":\"int32\",\"type\":\"integer\"},\"npm_max_file_size\":{\"example\":524288000,\"format\":\"int32\",\"type\":\"integer\"},\"nuget_max_file_size\":{\"example\":524288000,\"format\":\"int32\",\"type\":\"integer\"},\"pipeline_hierarchy_size\":{\"example\":1000,\"format\":\"int32\",\"type\":\"integer\"},\"pypi_max_file_size\":{\"example\":3221225472,\"format\":\"int32\",\"type\":\"integer\"},\"storage_size_limit\":{\"example\":15000,\"format\":\"int32\",\"type\":\"integer\"},\"terraform_module_max_file_size\":{\"example\":1073741824,\"format\":\"int32\",\"type\":\"integer\"}},\"type\":\"object\"}},\"400\":{\"description\":\"Bad request\"},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"PUT","orig":"/api/v4/application/plan_limits","segments":[{"lit":"api"},{"lit":"v4"},{"lit":"application"},{"lit":"plan_limits"}],"select":{"exist":["put_api_v4_application_plan_limit"]},"transform":{"req":"`reqdata`","res":"`body.limits_history`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"api_entities_plan_limit","name__orig":"api_entities_plan_limit","Name":"ApiEntitiesPlanLimit","name_":"api_entities_plan_limit","name-":"api-entities-plan-limit","NAME":"API_ENTITIES_PLAN_LIMIT","index$":129}, {"active":true,"entity":"api_entities_plan_limit","key$":"BasicApiEntitiesPlanLimitFlow","kind":"basic","name":"BasicApiEntitiesPlanLimitFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"api_entities_plan_limit_ref01","srcdatavar":"api_entities_plan_limit_ref01_data","suffix":"_up0"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_plan_limit_ref01"}}],"valid":[],"index$":0},{"active":true,"data":{},"input":{"ref":"api_entities_plan_limit_ref01","srcdatavar":"api_entities_plan_limit_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_plan_limit_ref01"}}],"index$":1}]}, 'ApiEntitiesPlanLimit')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let api_entities_plan_limit_ref01_data = Object.values(setup.data.existing.api_entities_plan_limit)[0] as any

    // UPDATE
    const api_entities_plan_limit_ref01_ent = client.ApiEntitiesPlanLimit()
    const api_entities_plan_limit_ref01_data_up0: any = {}

    const api_entities_plan_limit_ref01_resdata_up0 = (await api_entities_plan_limit_ref01_ent.update(api_entities_plan_limit_ref01_data_up0)).data()
    assert(null != api_entities_plan_limit_ref01_resdata_up0)


    // LOAD
    const api_entities_plan_limit_ref01_match_dt0: any = {}
    const api_entities_plan_limit_ref01_data_dt0 = (await api_entities_plan_limit_ref01_ent.load(api_entities_plan_limit_ref01_match_dt0)).data()
    assert(null != api_entities_plan_limit_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_plan_limit/ApiEntitiesPlanLimitTestData.json')

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
    ['api_entities_plan_limit01','api_entities_plan_limit02','api_entities_plan_limit03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_PLAN_LIMIT_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_PLAN_LIMIT_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_PLAN_LIMIT_ENTID']
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
  
