

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


describe('ProjectsJobTokenScopeEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ProjectsJobTokenScope()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'projects_job_token_scope.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"projects_job_token_scope","op":{"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /api/v4/projects/{id}/job_token_scope/groups_allowlist/{target_group_id}","source":"swagger2","version":2},"g":{"params":[{"a":true,"ex":1,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":2,"k":"param","n":"target_group_id","or":"target_group_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/api/v4/projects/{id}/job_token_scope/groups_allowlist/{target_group_id}","q":{"exist":["project_id","target_group_id"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"job_token_scope"},{"lit":"groups_allowlist"},{"var":"target_group_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"DELETE /api/v4/projects/{id}/job_token_scope/allowlist/{target_project_id}","source":"swagger2","version":2},"g":{"params":[{"a":true,"ex":1,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":2,"k":"param","n":"target_project_id","or":"target_project_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/api/v4/projects/{id}/job_token_scope/allowlist/{target_project_id}","q":{"exist":["project_id","target_project_id"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"job_token_scope"},{"lit":"allowlist"},{"var":"target_project_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /api/v4/projects/{id}/job_token_scope","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"patch_api_v4_projects_id_job_token_scope","or":"patch_api_v4_projects_id_job_token_scope","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"PATCH","o":"/api/v4/projects/{id}/job_token_scope","q":{"exist":["patch_api_v4_projects_id_job_token_scope","project_id"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"job_token_scope"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.project"],["$.main.kit.entity.project"],["$.main.kit.entity.project"]]},"key$":"projects_job_token_scope","name__orig":"projects_job_token_scope","Name":"ProjectsJobTokenScope","name_":"projects_job_token_scope","name-":"projects-job-token-scope","NAME":"PROJECTS_JOB_TOKEN_SCOPE","index$":247}, {"active":true,"entity":"projects_job_token_scope","key$":"BasicProjectsJobTokenScopeFlow","kind":"basic","name":"BasicProjectsJobTokenScopeFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"projects_job_token_scope_ref01","srcdatavar":"projects_job_token_scope_ref01_data","suffix":"_up0"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-projects_job_token_scope_ref01"}}],"v":[],"index$":0}]}, 'ProjectsJobTokenScope', {"DELETE /api/v4/projects/{id}/job_token_scope/groups_allowlist/{target_group_id}":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"ID of user project","type":"integer","format":"int32","required":true,"example":1,"index$":0},{"in":"path","name":"target_group_id","description":"ID of the group to be removed from the allowlist","type":"integer","format":"int32","required":true,"example":2,"index$":1}]},"DELETE /api/v4/projects/{id}/job_token_scope/allowlist/{target_project_id}":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"ID of user project","type":"integer","format":"int32","required":true,"example":1,"index$":0},{"in":"path","name":"target_project_id","description":"ID of the project to be removed from the allowlist","type":"integer","format":"int32","required":true,"example":2,"index$":1}]},"PATCH /api/v4/projects/{id}/job_token_scope":{"protocol":"http","parameters":[{"in":"path","name":"id","type":"integer","format":"int32","required":true,"index$":0},{"name":"patchApiV4ProjectsIdJobTokenScope","in":"body","required":true,"schema":{"type":"object","properties":{"enabled":{"type":"boolean","description":"Indicates CI/CD job tokens generated in other projects have restricted access to this project."}},"required":["enabled"],"description":"Patch CI_JOB_TOKEN access settings.","x-ref":"#/definitions/patchApiV4ProjectsIdJobTokenScope"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let projects_job_token_scope_ref01_data = Object.values(setup.data.existing.projects_job_token_scope)[0] as any

    // UPDATE
    const projects_job_token_scope_ref01_ent = client.ProjectsJobTokenScope()
    const projects_job_token_scope_ref01_data_up0: any = {}

    const projects_job_token_scope_ref01_resdata_up0 = (await projects_job_token_scope_ref01_ent.update(projects_job_token_scope_ref01_data_up0)).data()
    assert(null != projects_job_token_scope_ref01_resdata_up0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/projects_job_token_scope/ProjectsJobTokenScopeTestData.json')

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
    ['projects_job_token_scope01','projects_job_token_scope02','projects_job_token_scope03','project01','project02','project03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_PROJECTS_JOB_TOKEN_SCOPE_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_PROJECTS_JOB_TOKEN_SCOPE_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_PROJECTS_JOB_TOKEN_SCOPE_ENTID']
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
  
