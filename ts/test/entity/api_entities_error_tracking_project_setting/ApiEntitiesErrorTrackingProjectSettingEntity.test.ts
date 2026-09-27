

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


describe('ApiEntitiesErrorTrackingProjectSettingEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesErrorTrackingProjectSetting()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_error_tracking_project_setting.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"active":{"a":true,"h":"Active","n":"active","r":false,"t":"`$BOOLEAN`","key$":"active","index$":0},"api_url":{"a":true,"h":"Api Url","n":"api_url","r":false,"t":"`$STRING`","key$":"api_url","index$":1},"integrated":{"a":true,"h":"Integrated","n":"integrated","r":false,"t":"`$BOOLEAN`","key$":"integrated","index$":2},"project_name":{"a":true,"h":"Project Name","n":"project_name","r":false,"t":"`$STRING`","key$":"project_name","index$":3},"sentry_external_url":{"a":true,"h":"Sentry External Url","n":"sentry_external_url","r":false,"t":"`$STRING`","key$":"sentry_external_url","index$":4}},"name":"api_entities_error_tracking_project_setting","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v4/projects/{id}/error_tracking/settings","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/error_tracking/settings","q":{"exist":["project_id"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"error_tracking"},{"lit":"settings"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"patch":{"input":"data","name":"patch","points":[{"a":true,"co":{"id":"PATCH /api/v4/projects/{id}/error_tracking/settings","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"patch_api_v4_projects_id_error_tracking_setting","or":"patch_api_v4_projects_id_error_tracking_setting","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"PATCH","o":"/api/v4/projects/{id}/error_tracking/settings","q":{"exist":["patch_api_v4_projects_id_error_tracking_setting","project_id"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"error_tracking"},{"lit":"settings"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"patch"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /api/v4/projects/{id}/error_tracking/settings","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"put_api_v4_projects_id_error_tracking_setting","or":"put_api_v4_projects_id_error_tracking_setting","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"PUT","o":"/api/v4/projects/{id}/error_tracking/settings","q":{"exist":["project_id","put_api_v4_projects_id_error_tracking_setting"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"error_tracking"},{"lit":"settings"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.project"]]},"key$":"api_entities_error_tracking_project_setting","name__orig":"api_entities_error_tracking_project_setting","Name":"ApiEntitiesErrorTrackingProjectSetting","name_":"api_entities_error_tracking_project_setting","name-":"api-entities-error-tracking-project-setting","NAME":"API_ENTITIES_ERROR_TRACKING_PROJECT_SETTING","index$":70}, {"active":true,"entity":"api_entities_error_tracking_project_setting","key$":"BasicApiEntitiesErrorTrackingProjectSettingFlow","kind":"basic","name":"BasicApiEntitiesErrorTrackingProjectSettingFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"api_entities_error_tracking_project_setting_ref01","srcdatavar":"api_entities_error_tracking_project_setting_ref01_data","suffix":"_up0","textfield":"api_url"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_error_tracking_project_setting_ref01"}}],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"api_entities_error_tracking_project_setting_ref01","srcdatavar":"api_entities_error_tracking_project_setting_ref01_data","suffix":"_dt0"},"m":{"id":"api_entities_error_tracking_project_setting01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_error_tracking_project_setting_ref01"}}],"index$":1}]}, 'ApiEntitiesErrorTrackingProjectSetting', {"GET /api/v4/projects/{id}/error_tracking/settings":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project owned by the authenticated user","type":"string","required":true,"index$":0}]},"PATCH /api/v4/projects/{id}/error_tracking/settings":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project owned by the authenticated user","type":"string","required":true,"index$":0},{"name":"patchApiV4ProjectsIdErrorTrackingSettings","in":"body","required":true,"schema":{"type":"object","properties":{"active":{"type":"boolean","description":"Pass true to enable the already configured Error Tracking settings or false to disable it."},"integrated":{"type":"boolean","description":"Pass true to enable the integrated Error Tracking backend. Available in GitLab 14.2 and later."}},"required":["active"],"description":"Enable or disable the Error Tracking project settings","x-ref":"#/definitions/patchApiV4ProjectsIdErrorTrackingSettings"},"index$":1}]},"PUT /api/v4/projects/{id}/error_tracking/settings":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project owned by the authenticated user","type":"string","required":true,"index$":0},{"name":"putApiV4ProjectsIdErrorTrackingSettings","in":"body","required":true,"schema":{"type":"object","properties":{"active":{"type":"boolean","description":"Pass true to enable the configured Error Tracking settings or false to disable it."},"integrated":{"type":"boolean","description":"Pass true to enable the integrated Error Tracking backend."}},"required":["active","integrated"],"description":"Update Error Tracking project settings. Available in GitLab 15.10 and later.","x-ref":"#/definitions/putApiV4ProjectsIdErrorTrackingSettings"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let api_entities_error_tracking_project_setting_ref01_data = Object.values(setup.data.existing.api_entities_error_tracking_project_setting)[0] as any

    // UPDATE
    const api_entities_error_tracking_project_setting_ref01_ent = client.ApiEntitiesErrorTrackingProjectSetting()
    const api_entities_error_tracking_project_setting_ref01_data_up0: any = {}

    const api_entities_error_tracking_project_setting_ref01_markdef_up0 = { name: 'api_url', value: 'Mark01-api_entities_error_tracking_project_setting_ref01_' + setup.now }
    ;(api_entities_error_tracking_project_setting_ref01_data_up0 as any)[api_entities_error_tracking_project_setting_ref01_markdef_up0.name] = api_entities_error_tracking_project_setting_ref01_markdef_up0.value

    const api_entities_error_tracking_project_setting_ref01_resdata_up0 = (await api_entities_error_tracking_project_setting_ref01_ent.update(api_entities_error_tracking_project_setting_ref01_data_up0)).data()
    assert(null != api_entities_error_tracking_project_setting_ref01_resdata_up0)

    assert((api_entities_error_tracking_project_setting_ref01_resdata_up0 as any)[api_entities_error_tracking_project_setting_ref01_markdef_up0.name] === api_entities_error_tracking_project_setting_ref01_markdef_up0.value)



  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_error_tracking_project_setting/ApiEntitiesErrorTrackingProjectSettingTestData.json')

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
    ['api_entities_error_tracking_project_setting01','api_entities_error_tracking_project_setting02','api_entities_error_tracking_project_setting03','project01','project02','project03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_ERROR_TRACKING_PROJECT_SETTING_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_ERROR_TRACKING_PROJECT_SETTING_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_ERROR_TRACKING_PROJECT_SETTING_ENTID']
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
  
