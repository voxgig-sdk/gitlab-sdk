

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


describe('EnvironmentEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.Environment()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['create', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'environment.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0}},"id":{"field":"id","name":"id"},"name":"environment","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/v4/projects/{id}/environments/stop_stale","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"post_api_v4_projects_id_environments_stop_stale","or":"post_api_v4_projects_id_environments_stop_stale","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"POST","o":"/api/v4/projects/{id}/environments/stop_stale","q":{"$action":"stop_stale","exist":["post_api_v4_projects_id_environments_stop_stale","project_id"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"environments"},{"lit":"stop_stale"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /api/v4/projects/{id}/environments/review_apps","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"before","or":"before","r":false,"t":"`$ANY`","index$":0},{"a":true,"k":"query","n":"dry_run","or":"dry_run","r":false,"t":"`$ANY`","index$":1},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":2}]},"k":"http","m":"DELETE","o":"/api/v4/projects/{id}/environments/review_apps","q":{"$action":"review_app","exist":["before","dry_run","limit","project_id"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"environments"},{"lit":"review_apps"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"DELETE /api/v4/projects/{id}/environments/{environment_id}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"environment_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/api/v4/projects/{id}/environments/{environment_id}","q":{"exist":["id","project_id"]},"r":{"param":{"environment_id":"id","id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"environments"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"remove"}},"relations":{"ancestors":[["$.main.kit.entity.project"]]},"key$":"environment","name__orig":"environment","Name":"Environment","name_":"environment","name-":"environment","NAME":"ENVIRONMENT","index$":202}, {"active":true,"entity":"environment","key$":"BasicEnvironmentFlow","kind":"basic","name":"BasicEnvironmentFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"environment_ref01"},"m":{"project_id":"project01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"environment_ref01","suffix":"_rm0"},"m":{"id":"environment01","project_id":"project01"},"o":"remove","s":[],"v":[],"index$":1}]}, 'Environment', {"POST /api/v4/projects/{id}/environments/stop_stale":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project owned by the authenticated user","type":"string","required":true,"index$":0},{"name":"postApiV4ProjectsIdEnvironmentsStopStale","in":"body","required":true,"schema":{"type":"object","properties":{"before":{"type":"string","format":"date-time","description":"Stop all environments that were last modified or deployed to before this date."}},"required":["before"],"description":"Stop stale environments","x-ref":"#/definitions/postApiV4ProjectsIdEnvironmentsStopStale"},"index$":1}]},"DELETE /api/v4/projects/{id}/environments/review_apps":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project owned by the authenticated user","type":"string","required":true,"index$":0},{"in":"query","name":"before","description":"The date before which environments can be deleted. Defaults to 30 days ago. Expected in ISO 8601 format (`YYYY-MM-DDTHH:MM:SSZ`)","type":"string","format":"date-time","default":{},"required":false,"index$":1},{"in":"query","name":"limit","description":"Maximum number of environments to delete. Defaults to 100","type":"integer","format":"int32","default":100,"minimum":1,"maximum":1000,"required":false,"index$":2},{"in":"query","name":"dry_run","description":"Defaults to true for safety reasons. It performs a dry run where no actual deletion will be performed. Set to false to actually delete the environment","type":"boolean","default":true,"required":false,"index$":3}]},"DELETE /api/v4/projects/{id}/environments/{environment_id}":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project owned by the authenticated user","type":"string","required":true,"index$":0},{"in":"path","name":"environment_id","description":"The ID of the environment","type":"integer","format":"int32","required":true,"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const environment_ref01_ent = client.Environment()
    let environment_ref01_data = setup.data.new.environment['environment_ref01']
    environment_ref01_data['project_id'] = setup.idmap['project01']

    environment_ref01_data = (await environment_ref01_ent.create(environment_ref01_data)).data()
    assert(null != environment_ref01_data.id)


    // REMOVE
    const environment_ref01_match_rm0: any = { id: environment_ref01_data.id }
    await environment_ref01_ent.remove(environment_ref01_match_rm0)
  

  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/environment/EnvironmentTestData.json')

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
    ['environment01','environment02','environment03','project01','project02','project03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_ENVIRONMENT_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_ENVIRONMENT_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_ENVIRONMENT_ENTID']
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
  
