

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


describe('ApiEntitiesCiRunnerRegistrationDetailEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesCiRunnerRegistrationDetail()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_ci_runner_registration_detail.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"api_entities_ci_runner_registration_detail","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/v4/runners","source":"swagger2","version":2},"g":{"query":[{"a":true,"k":"query","n":"post_api_v4_runner","or":"post_api_v4_runner","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"POST","o":"/api/v4/runners","q":{"exist":["post_api_v4_runner"]},"r":{},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"runners"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /api/v4/user/runners","source":"swagger2","version":2},"g":{"query":[{"a":true,"k":"query","n":"post_api_v4_user_runner","or":"post_api_v4_user_runner","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"POST","o":"/api/v4/user/runners","q":{"exist":["post_api_v4_user_runner"]},"r":{},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"user"},{"lit":"runners"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"api_entities_ci_runner_registration_detail","name__orig":"api_entities_ci_runner_registration_detail","Name":"ApiEntitiesCiRunnerRegistrationDetail","name_":"api_entities_ci_runner_registration_detail","name-":"api-entities-ci-runner-registration-detail","NAME":"API_ENTITIES_CI_RUNNER_REGISTRATION_DETAIL","index$":36}, {"active":true,"entity":"api_entities_ci_runner_registration_detail","key$":"BasicApiEntitiesCiRunnerRegistrationDetailFlow","kind":"basic","name":"BasicApiEntitiesCiRunnerRegistrationDetailFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"api_entities_ci_runner_registration_detail_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'ApiEntitiesCiRunnerRegistrationDetail', {"POST /api/v4/runners":{"protocol":"http","parameters":[{"name":"postApiV4Runners","in":"body","required":true,"schema":{"type":"object","properties":{"token":{"type":"string","description":"Registration token"},"description":{"type":"string","description":"Description of the runner"},"maintainer_note":{"type":"string","description":"Deprecated: see `maintenance_note`"},"maintenance_note":{"type":"string","description":"Free-form maintenance notes for the runner (1024 characters)"},"info":{"type":"object","description":"Runner's metadata","properties":{"name":{"type":"string","description":"Runner's name"},"version":{"type":"string","description":"Runner's version"},"revision":{"type":"string","description":"Runner's revision"},"platform":{"type":"string","description":"Runner's platform"},"architecture":{"type":"string","description":"Runner's architecture"}}},"active":{"type":"boolean","description":"Deprecated: Use `paused` instead. Specifies if the runner is allowed to receive new jobs"},"paused":{"type":"boolean","description":"Specifies if the runner should ignore new jobs"},"locked":{"type":"boolean","description":"Specifies if the runner should be locked for the current project"},"access_level":{"type":"string","description":"The access level of the runner","enum":["not_protected","ref_protected"]},"run_untagged":{"type":"boolean","description":"Specifies if the runner should handle untagged jobs"},"tag_list":{"type":"array","description":"A list of runner tags","items":{"type":"string"}},"maximum_timeout":{"type":"integer","format":"int32","description":"Maximum timeout that limits the amount of time (in seconds) that runners can run jobs"}},"required":["token"],"description":"Register a new runner","x-ref":"#/definitions/postApiV4Runners"},"index$":0}]},"POST /api/v4/user/runners":{"protocol":"http","parameters":[{"name":"postApiV4UserRunners","in":"body","required":true,"schema":{"type":"object","properties":{"runner_type":{"type":"string","description":"Specifies the scope of the runner","enum":["instance_type","group_type","project_type"]},"group_id":{"type":"integer","format":"int32","description":"The ID of the group that the runner is created in","example":1},"project_id":{"type":"integer","format":"int32","description":"The ID of the project that the runner is created in","example":1},"description":{"type":"string","description":"Description of the runner"},"maintenance_note":{"type":"string","description":"Free-form maintenance notes for the runner (1024 characters)"},"paused":{"type":"boolean","description":"Specifies if the runner should ignore new jobs (defaults to false)"},"locked":{"type":"boolean","description":"Specifies if the runner should be locked for the current project (defaults to false)"},"access_level":{"type":"string","description":"The access level of the runner","enum":["not_protected","ref_protected"]},"run_untagged":{"type":"boolean","description":"Specifies if the runner should handle untagged jobs  (defaults to true)"},"tag_list":{"type":"array","description":"A list of runner tags","items":{"type":"string"}},"maximum_timeout":{"type":"integer","format":"int32","description":"Maximum timeout that limits the amount of time (in seconds) that runners can run jobs"}},"required":["runner_type","group_id","project_id"],"description":"Create a runner owned by currently authenticated user","x-ref":"#/definitions/postApiV4UserRunners"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const api_entities_ci_runner_registration_detail_ref01_ent = client.ApiEntitiesCiRunnerRegistrationDetail()
    let api_entities_ci_runner_registration_detail_ref01_data = setup.data.new.api_entities_ci_runner_registration_detail['api_entities_ci_runner_registration_detail_ref01']

    api_entities_ci_runner_registration_detail_ref01_data = (await api_entities_ci_runner_registration_detail_ref01_ent.create(api_entities_ci_runner_registration_detail_ref01_data)).data()
    assert(null != api_entities_ci_runner_registration_detail_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_ci_runner_registration_detail/ApiEntitiesCiRunnerRegistrationDetailTestData.json')

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
    ['api_entities_ci_runner_registration_detail01','api_entities_ci_runner_registration_detail02','api_entities_ci_runner_registration_detail03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_CI_RUNNER_REGISTRATION_DETAIL_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_CI_RUNNER_REGISTRATION_DETAIL_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_CI_RUNNER_REGISTRATION_DETAIL_ENTID']
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
  
