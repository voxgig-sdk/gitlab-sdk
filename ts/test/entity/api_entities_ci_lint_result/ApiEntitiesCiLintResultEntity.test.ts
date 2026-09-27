

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


describe('ApiEntitiesCiLintResultEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesCiLintResult()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['create', 'list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_ci_lint_result.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"blob":{"a":true,"h":"Blob","n":"blob","r":false,"t":"`$STRING`","key$":"blob","index$":0},"context_project":{"a":true,"h":"Context Project","n":"context_project","r":false,"t":"`$STRING`","key$":"context_project","index$":1},"context_sha":{"a":true,"h":"Context Sha","n":"context_sha","r":false,"t":"`$STRING`","key$":"context_sha","index$":2},"errors":{"a":true,"h":"Errors","n":"errors","r":false,"t":"`$ARRAY`","key$":"errors","index$":3},"extra":{"a":true,"h":"Extra","n":"extra","r":false,"t":"`$OBJECT`","key$":"extra","index$":4},"includes":{"a":true,"h":"Includes","n":"includes","r":false,"t":"`$ARRAY`","key$":"includes","index$":5},"jobs":{"a":true,"h":"Jobs","n":"jobs","r":false,"t":"`$ARRAY`","key$":"jobs","index$":6},"location":{"a":true,"h":"Location","n":"location","r":false,"t":"`$STRING`","key$":"location","index$":7},"merged_yaml":{"a":true,"h":"Merged Yaml","n":"merged_yaml","r":false,"t":"`$STRING`","key$":"merged_yaml","index$":8},"raw":{"a":true,"h":"Raw","n":"raw","r":false,"t":"`$STRING`","key$":"raw","index$":9},"type":{"a":true,"h":"Type","n":"type","r":false,"t":"`$STRING`","key$":"type","index$":10},"valid":{"a":true,"h":"Valid","n":"valid","r":false,"t":"`$BOOLEAN`","key$":"valid","index$":11},"warnings":{"a":true,"h":"Warnings","n":"warnings","r":false,"t":"`$ARRAY`","key$":"warnings","index$":12}},"name":"api_entities_ci_lint_result","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/v4/projects/{id}/ci/lint","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"post_api_v4_projects_id_ci_lint","or":"post_api_v4_projects_id_ci_lint","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"POST","o":"/api/v4/projects/{id}/ci/lint","q":{"exist":["post_api_v4_projects_id_ci_lint","project_id"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"ci"},{"lit":"lint"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/v4/projects/{id}/ci/lint","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"content_ref","or":"content_ref","r":false,"t":"`$ANY`","index$":0},{"a":true,"k":"query","n":"dry_run","or":"dry_run","r":false,"t":"`$ANY`","index$":1},{"a":true,"k":"query","n":"dry_run_ref","or":"dry_run_ref","r":false,"t":"`$ANY`","index$":2},{"a":true,"k":"query","n":"include_job","or":"include_job","r":false,"t":"`$ANY`","index$":3},{"a":true,"k":"query","n":"ref","or":"ref","r":false,"t":"`$ANY`","index$":4},{"a":true,"k":"query","n":"sha","or":"sha","r":false,"t":"`$ANY`","index$":5}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/ci/lint","q":{"exist":["content_ref","dry_run","dry_run_ref","include_job","project_id","ref","sha"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"ci"},{"lit":"lint"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.project"]]},"key$":"api_entities_ci_lint_result","name__orig":"api_entities_ci_lint_result","Name":"ApiEntitiesCiLintResult","name_":"api_entities_ci_lint_result","name-":"api-entities-ci-lint-result","NAME":"API_ENTITIES_CI_LINT_RESULT","index$":26}, {"active":true,"entity":"api_entities_ci_lint_result","key$":"BasicApiEntitiesCiLintResultFlow","kind":"basic","name":"BasicApiEntitiesCiLintResultFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"api_entities_ci_lint_result_ref01"},"m":{"project_id":"project01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"project_id":"project01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"api_entities_ci_lint_result_ref01"}}],"index$":1}]}, 'ApiEntitiesCiLintResult', {"POST /api/v4/projects/{id}/ci/lint":{"protocol":"http","parameters":[{"in":"path","name":"id","type":"integer","format":"int32","required":true,"index$":0},{"name":"postApiV4ProjectsIdCiLint","in":"body","required":true,"schema":{"type":"object","properties":{"content":{"type":"string","description":"Content of .gitlab-ci.yml"},"dry_run":{"type":"boolean","description":"Run pipeline creation simulation, or only do static check. This is false by default","default":false},"include_jobs":{"type":"boolean","description":"If the list of jobs that would exist in a static check or pipeline\n        simulation should be included in the response. This is false by default"},"ref":{"type":"string","description":"When dry_run is true, sets the branch or tag to use. Defaults to the project’s default branch when not set"}},"required":["content"],"description":"Validate a CI YAML configuration with a namespace","x-ref":"#/definitions/postApiV4ProjectsIdCiLint"},"index$":1}]},"GET /api/v4/projects/{id}/ci/lint":{"protocol":"http","parameters":[{"in":"query","name":"sha","description":"Deprecated: Use content_ref instead","type":"string","required":false,"index$":0},{"in":"query","name":"content_ref","description":"The CI/CD configuration content is taken from this commit SHA, branch or tag. Defaults to the HEAD of the project's default branch","type":"string","required":false,"index$":1},{"in":"query","name":"dry_run","description":"Run pipeline creation simulation, or only do static check. This is false by default","type":"boolean","default":false,"required":false,"index$":2},{"in":"query","name":"include_jobs","description":"If the list of jobs that would exist in a static check or pipeline\n        simulation should be included in the response. This is false by default","type":"boolean","required":false,"index$":3},{"in":"query","name":"ref","description":"Deprecated: Use dry_run_ref instead","type":"string","required":false,"index$":4},{"in":"query","name":"dry_run_ref","description":"Branch or tag used as context when executing a dry run. Defaults to the default branch of the project. Only used when dry_run is true","type":"string","required":false,"index$":5},{"in":"path","name":"id","type":"integer","format":"int32","required":true,"index$":6}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const api_entities_ci_lint_result_ref01_ent = client.ApiEntitiesCiLintResult()
    let api_entities_ci_lint_result_ref01_data = setup.data.new.api_entities_ci_lint_result['api_entities_ci_lint_result_ref01']
    api_entities_ci_lint_result_ref01_data['project_id'] = setup.idmap['project01']

    api_entities_ci_lint_result_ref01_data = (await api_entities_ci_lint_result_ref01_ent.create(api_entities_ci_lint_result_ref01_data)).data()
    assert(null != api_entities_ci_lint_result_ref01_data)


    // LIST
    const api_entities_ci_lint_result_ref01_match: any = {}
    api_entities_ci_lint_result_ref01_match['project_id'] = setup.idmap['project01']

    const api_entities_ci_lint_result_ref01_list = (await api_entities_ci_lint_result_ref01_ent.list(api_entities_ci_lint_result_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_ci_lint_result/ApiEntitiesCiLintResultTestData.json')

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
    ['api_entities_ci_lint_result01','api_entities_ci_lint_result02','api_entities_ci_lint_result03','project01','project02','project03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_CI_LINT_RESULT_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_CI_LINT_RESULT_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_CI_LINT_RESULT_ENTID']
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
  
