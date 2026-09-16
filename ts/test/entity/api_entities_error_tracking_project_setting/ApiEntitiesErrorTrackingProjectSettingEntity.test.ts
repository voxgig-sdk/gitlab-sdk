

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"active","req":false,"type":"`$BOOLEAN`","index$":0},{"active":true,"name":"api_url","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"integrated","req":false,"type":"`$BOOLEAN`","index$":2},{"active":true,"name":"project_name","req":false,"type":"`$STRING`","index$":3},{"active":true,"name":"sentry_external_url","req":false,"type":"`$STRING`","index$":4}],"name":"api_entities_error_tracking_project_setting","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /api/v4/projects/{id}/error_tracking/settings","json":"{\"operationId\":\"getApiV4ProjectsIdErrorTrackingSettings\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project owned by the authenticated user\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get Error Tracking settings\",\"schema\":{\"description\":\"API_Entities_ErrorTracking_ProjectSetting model\",\"properties\":{\"active\":{\"type\":\"boolean\"},\"api_url\":{\"example\":\"https://sentry.io/api/0/projects/myawesomeproject/project\",\"type\":\"string\"},\"integrated\":{\"type\":\"boolean\"},\"project_name\":{\"example\":\"sample sentry project\",\"type\":\"string\"},\"sentry_external_url\":{\"example\":\"https://sentry.io/myawesomeproject/project\",\"type\":\"string\"}},\"type\":\"object\"}}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/projects/{id}/error_tracking/settings","rename":{"param":{"id":"project_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"error_tracking"},{"lit":"settings"}],"select":{"exist":["project_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"patch":{"input":"data","name":"patch","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`"}],"query":[{"active":true,"kind":"query","name":"patch_api_v4_projects_id_error_tracking_setting","orig":"patch_api_v4_projects_id_error_tracking_setting","reqd":true,"type":"`$OBJECT`"}]},"contract":{"id":"PATCH /api/v4/projects/{id}/error_tracking/settings","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"patchApiV4ProjectsIdErrorTrackingSettings\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project owned by the authenticated user\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"in\":\"body\",\"name\":\"patchApiV4ProjectsIdErrorTrackingSettings\",\"required\":true,\"schema\":{\"description\":\"Enable or disable the Error Tracking project settings\",\"properties\":{\"active\":{\"description\":\"Pass true to enable the already configured Error Tracking settings or false to disable it.\",\"type\":\"boolean\"},\"integrated\":{\"description\":\"Pass true to enable the integrated Error Tracking backend. Available in GitLab 14.2 and later.\",\"type\":\"boolean\"}},\"required\":[\"active\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Enable or disable the Error Tracking project settings\",\"schema\":{\"description\":\"API_Entities_ErrorTracking_ProjectSetting model\",\"properties\":{\"active\":{\"type\":\"boolean\"},\"api_url\":{\"example\":\"https://sentry.io/api/0/projects/myawesomeproject/project\",\"type\":\"string\"},\"integrated\":{\"type\":\"boolean\"},\"project_name\":{\"example\":\"sample sentry project\",\"type\":\"string\"},\"sentry_external_url\":{\"example\":\"https://sentry.io/myawesomeproject/project\",\"type\":\"string\"}},\"type\":\"object\"}},\"400\":{\"description\":\"Bad request\"},\"401\":{\"description\":\"Unauthorized\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"PATCH","orig":"/api/v4/projects/{id}/error_tracking/settings","rename":{"param":{"id":"project_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"error_tracking"},{"lit":"settings"}],"select":{"exist":["patch_api_v4_projects_id_error_tracking_setting","project_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"patch"},"update":{"input":"data","name":"update","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"kind":"query","name":"put_api_v4_projects_id_error_tracking_setting","orig":"put_api_v4_projects_id_error_tracking_setting","reqd":true,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"PUT /api/v4/projects/{id}/error_tracking/settings","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"putApiV4ProjectsIdErrorTrackingSettings\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project owned by the authenticated user\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"in\":\"body\",\"name\":\"putApiV4ProjectsIdErrorTrackingSettings\",\"required\":true,\"schema\":{\"description\":\"Update Error Tracking project settings. Available in GitLab 15.10 and later.\",\"properties\":{\"active\":{\"description\":\"Pass true to enable the configured Error Tracking settings or false to disable it.\",\"type\":\"boolean\"},\"integrated\":{\"description\":\"Pass true to enable the integrated Error Tracking backend.\",\"type\":\"boolean\"}},\"required\":[\"active\",\"integrated\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Update Error Tracking project settings. Available in GitLab 15.10 and later.\",\"schema\":{\"description\":\"API_Entities_ErrorTracking_ProjectSetting model\",\"properties\":{\"active\":{\"type\":\"boolean\"},\"api_url\":{\"example\":\"https://sentry.io/api/0/projects/myawesomeproject/project\",\"type\":\"string\"},\"integrated\":{\"type\":\"boolean\"},\"project_name\":{\"example\":\"sample sentry project\",\"type\":\"string\"},\"sentry_external_url\":{\"example\":\"https://sentry.io/myawesomeproject/project\",\"type\":\"string\"}},\"type\":\"object\"}},\"400\":{\"description\":\"Bad request\"},\"401\":{\"description\":\"Unauthorized\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"PUT","orig":"/api/v4/projects/{id}/error_tracking/settings","rename":{"param":{"id":"project_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"error_tracking"},{"lit":"settings"}],"select":{"exist":["project_id","put_api_v4_projects_id_error_tracking_setting"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["project"]]},"key$":"api_entities_error_tracking_project_setting","name__orig":"api_entities_error_tracking_project_setting","Name":"ApiEntitiesErrorTrackingProjectSetting","name_":"api_entities_error_tracking_project_setting","name-":"api-entities-error-tracking-project-setting","NAME":"API_ENTITIES_ERROR_TRACKING_PROJECT_SETTING","index$":70}, {"active":true,"entity":"api_entities_error_tracking_project_setting","key$":"BasicApiEntitiesErrorTrackingProjectSettingFlow","kind":"basic","name":"BasicApiEntitiesErrorTrackingProjectSettingFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"api_entities_error_tracking_project_setting_ref01","srcdatavar":"api_entities_error_tracking_project_setting_ref01_data","suffix":"_up0","textfield":"api_url"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_error_tracking_project_setting_ref01"}}],"valid":[],"index$":0},{"active":true,"data":{},"input":{"ref":"api_entities_error_tracking_project_setting_ref01","srcdatavar":"api_entities_error_tracking_project_setting_ref01_data","suffix":"_dt0"},"match":{"id":"api_entities_error_tracking_project_setting01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_error_tracking_project_setting_ref01"}}],"index$":1}]}, 'ApiEntitiesErrorTrackingProjectSetting')
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
  
