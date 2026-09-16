

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


describe('AlertManagementEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.AlertManagement()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['create', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'alert_management.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[],"name":"alert_management","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"params":[{"active":true,"example":23,"kind":"param","name":"alert_management_alert_id","orig":"alert_iid","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"example":17,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"POST /api/v4/projects/{id}/alert_management_alerts/{alert_iid}/metric_images/authorize","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4ProjectsIdAlertManagementAlertsAlertIidMetricImagesAuthorize\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"example\":17,\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The IID of the Alert\",\"example\":23,\"format\":\"int32\",\"in\":\"path\",\"name\":\"alert_iid\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Workhorse authorize metric image file upload\"},\"403\":{\"description\":\"Forbidden\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/api/v4/projects/{id}/alert_management_alerts/{alert_iid}/metric_images/authorize","rename":{"param":{"alert_iid":"alert_management_alert_id","id":"project_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"alert_management_alerts"},{"var":"alert_management_alert_id"},{"lit":"metric_images"},{"lit":"authorize"}],"select":{"exist":["alert_management_alert_id","project_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"remove":{"input":"data","name":"remove","points":[{"active":true,"args":{"params":[{"active":true,"example":23,"kind":"param","name":"alert_management_alert_id","orig":"alert_iid","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"example":42,"kind":"param","name":"metric_image_id","orig":"metric_image_id","reqd":true,"type":"`$STRING`","index$":1},{"active":true,"example":17,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":2}]},"contract":{"id":"DELETE /api/v4/projects/{id}/alert_management_alerts/{alert_iid}/metric_images/{metric_image_id}","json":"{\"operationId\":\"deleteApiV4ProjectsIdAlertManagementAlertsAlertIidMetricImagesMetricImageId\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"example\":17,\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The IID of the Alert\",\"example\":23,\"format\":\"int32\",\"in\":\"path\",\"name\":\"alert_iid\",\"required\":true,\"type\":\"integer\"},{\"description\":\"The ID of metric image\",\"example\":42,\"format\":\"int32\",\"in\":\"path\",\"name\":\"metric_image_id\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"204\":{\"description\":\"Remove a metric image for an alert\",\"schema\":{\"description\":\"API_Entities_MetricImage model\",\"properties\":{\"created_at\":{\"example\":\"2020-11-13T00:06:18.084Z\",\"format\":\"date-time\",\"type\":\"string\"},\"file_path\":{\"example\":\"/uploads/-/system/alert_metric_image/file/23/file.png\",\"type\":\"string\"},\"filename\":{\"example\":\"file.png\",\"type\":\"string\"},\"id\":{\"example\":23,\"format\":\"int32\",\"type\":\"integer\"},\"url\":{\"example\":\"https://example.com/metric\",\"type\":\"string\"},\"url_text\":{\"example\":\"An example metric\",\"type\":\"string\"}},\"type\":\"object\"}},\"403\":{\"description\":\"Forbidden\"},\"422\":{\"description\":\"Unprocessable entity\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"DELETE","orig":"/api/v4/projects/{id}/alert_management_alerts/{alert_iid}/metric_images/{metric_image_id}","rename":{"param":{"alert_iid":"alert_management_alert_id","id":"project_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"alert_management_alerts"},{"var":"alert_management_alert_id"},{"lit":"metric_images"},{"var":"metric_image_id"}],"select":{"exist":["alert_management_alert_id","metric_image_id","project_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[["project","alert_management_alert"],["project","alert_management_alert","metric_image"]]},"key$":"alert_management","name__orig":"alert_management","Name":"AlertManagement","name_":"alert_management","name-":"alert-management","NAME":"ALERT_MANAGEMENT","index$":1}, {"active":true,"entity":"alert_management","key$":"BasicAlertManagementFlow","kind":"basic","name":"BasicAlertManagementFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"alert_management_ref01"},"match":{"alert_management_alert_id":"alert_management_alert01","project_id":"project01"},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{"ref":"alert_management_ref01","suffix":"_rm0"},"match":{"alert_management_alert_id":"alert_management_alert01","id":"alert_management01","project_id":"project01"},"op":"remove","spec":[],"valid":[],"index$":1}]}, 'AlertManagement')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const alert_management_ref01_ent = client.AlertManagement()
    let alert_management_ref01_data = setup.data.new.alert_management['alert_management_ref01']
    alert_management_ref01_data['alert_management_alert_id'] = setup.idmap['alert_management_alert01']
    alert_management_ref01_data['project_id'] = setup.idmap['project01']

    alert_management_ref01_data = (await alert_management_ref01_ent.create(alert_management_ref01_data)).data()
    assert(null != alert_management_ref01_data)



  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/alert_management/AlertManagementTestData.json')

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
    ['alert_management01','alert_management02','alert_management03','project01','project02','project03','alert_management_alert01','alert_management_alert02','alert_management_alert03','project01','project02','project03','alert_management_alert01','alert_management_alert02','alert_management_alert03','metric_image01','metric_image02','metric_image03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_ALERT_MANAGEMENT_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_ALERT_MANAGEMENT_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_ALERT_MANAGEMENT_ENTID']
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
  
