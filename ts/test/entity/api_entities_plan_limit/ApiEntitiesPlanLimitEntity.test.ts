

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"api_entities_plan_limit","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v4/application/plan_limits","source":"swagger2","version":2},"g":{"query":[{"a":true,"k":"query","n":"plan_name","or":"plan_name","r":false,"t":"`$ANY`","index$":0}]},"k":"http","m":"GET","o":"/api/v4/application/plan_limits","q":{"exist":["plan_name"]},"r":{},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"application"},{"lit":"plan_limits"}],"t":{"req":"`reqdata`","res":"`body.limits_history`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /api/v4/application/plan_limits","source":"swagger2","version":2},"g":{"query":[{"a":true,"k":"query","n":"put_api_v4_application_plan_limit","or":"put_api_v4_application_plan_limit","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"PUT","o":"/api/v4/application/plan_limits","q":{"exist":["put_api_v4_application_plan_limit"]},"r":{},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"application"},{"lit":"plan_limits"}],"t":{"req":"`reqdata`","res":"`body.limits_history`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"api_entities_plan_limit","name__orig":"api_entities_plan_limit","Name":"ApiEntitiesPlanLimit","name_":"api_entities_plan_limit","name-":"api-entities-plan-limit","NAME":"API_ENTITIES_PLAN_LIMIT","index$":129}, {"active":true,"entity":"api_entities_plan_limit","key$":"BasicApiEntitiesPlanLimitFlow","kind":"basic","name":"BasicApiEntitiesPlanLimitFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"api_entities_plan_limit_ref01","srcdatavar":"api_entities_plan_limit_ref01_data","suffix":"_up0"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_plan_limit_ref01"}}],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"api_entities_plan_limit_ref01","srcdatavar":"api_entities_plan_limit_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_plan_limit_ref01"}}],"index$":1}]}, 'ApiEntitiesPlanLimit', {"GET /api/v4/application/plan_limits":{"protocol":"http","parameters":[{"in":"query","name":"plan_name","description":"Name of the plan to get the limits from. Default: default.","type":"string","default":"default","enum":["default","free","bronze","silver","premium","gold","ultimate","ultimate_trial","ultimate_trial_paid_customer","premium_trial","opensource"],"required":false,"index$":0}]},"PUT /api/v4/application/plan_limits":{"protocol":"http","parameters":[{"name":"putApiV4ApplicationPlanLimits","in":"body","required":true,"schema":{"type":"object","properties":{"plan_name":{"type":"string","description":"Name of the plan to update","enum":["default","free","bronze","silver","premium","gold","ultimate","ultimate_trial","ultimate_trial_paid_customer","premium_trial","opensource"]},"ci_instance_level_variables":{"type":"integer","format":"int32","description":"Maximum number of Instance-level CI/CD variables that can be defined"},"ci_pipeline_size":{"type":"integer","format":"int32","description":"Maximum number of jobs in a single pipeline"},"ci_active_jobs":{"type":"integer","format":"int32","description":"Total number of jobs in currently active pipelines"},"ci_project_subscriptions":{"type":"integer","format":"int32","description":"Maximum number of pipeline subscriptions to and from a project"},"ci_pipeline_schedules":{"type":"integer","format":"int32","description":"Maximum number of pipeline schedules"},"ci_needs_size_limit":{"type":"integer","format":"int32","description":"Maximum number of needs dependencies that a job can have"},"ci_registered_group_runners":{"type":"integer","format":"int32","description":"Maximum number of runners created or active in a group during the past seven days"},"ci_registered_project_runners":{"type":"integer","format":"int32","description":"Maximum number of runners created or active in a project during the past seven days"},"conan_max_file_size":{"type":"integer","format":"int32","description":"Maximum Conan package file size in bytes"},"dotenv_size":{"type":"integer","format":"int32","description":"Maximum size of a dotenv artifact in bytes"},"dotenv_variables":{"type":"integer","format":"int32","description":"Maximum number of variables in a dotenv artifact"},"enforcement_limit":{"type":"integer","format":"int32","description":"Maximum storage size for the root namespace enforcement in MiB"},"generic_packages_max_file_size":{"type":"integer","format":"int32","description":"Maximum generic package file size in bytes"},"helm_max_file_size":{"type":"integer","format":"int32","description":"Maximum Helm chart file size in bytes"},"maven_max_file_size":{"type":"integer","format":"int32","description":"Maximum Maven package file size in bytes"},"notification_limit":{"type":"integer","format":"int32","description":"Maximum storage size for the root namespace notifications in MiB"},"npm_max_file_size":{"type":"integer","format":"int32","description":"Maximum NPM package file size in bytes"},"nuget_max_file_size":{"type":"integer","format":"int32","description":"Maximum NuGet package file size in bytes"},"pypi_max_file_size":{"type":"integer","format":"int32","description":"Maximum PyPI package file size in bytes"},"terraform_module_max_file_size":{"type":"integer","format":"int32","description":"Maximum Terraform Module package file size in bytes"},"storage_size_limit":{"type":"integer","format":"int32","description":"Maximum storage size for the root namespace in MiB"},"pipeline_hierarchy_size":{"type":"integer","format":"int32","description":"Maximum number of downstream pipelines in a pipeline's hierarchy tree"}},"required":["plan_name"],"description":"Change plan limits","x-ref":"#/definitions/putApiV4ApplicationPlanLimits"},"index$":0}]}})
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
  
