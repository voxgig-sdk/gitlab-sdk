

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"alert_management","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/v4/projects/{id}/alert_management_alerts/{alert_iid}/metric_images/authorize","source":"swagger2","version":2},"g":{"params":[{"a":true,"ex":23,"k":"param","n":"alert_management_alert_id","or":"alert_iid","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":17,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/api/v4/projects/{id}/alert_management_alerts/{alert_iid}/metric_images/authorize","q":{"exist":["alert_management_alert_id","project_id"]},"r":{"param":{"alert_iid":"alert_management_alert_id","id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"alert_management_alerts"},{"var":"alert_management_alert_id"},{"lit":"metric_images"},{"lit":"authorize"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /api/v4/projects/{id}/alert_management_alerts/{alert_iid}/metric_images/{metric_image_id}","source":"swagger2","version":2},"g":{"params":[{"a":true,"ex":23,"k":"param","n":"alert_management_alert_id","or":"alert_iid","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":42,"k":"param","n":"metric_image_id","or":"metric_image_id","r":true,"t":"`$STRING`","index$":1},{"a":true,"ex":17,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"DELETE","o":"/api/v4/projects/{id}/alert_management_alerts/{alert_iid}/metric_images/{metric_image_id}","q":{"exist":["alert_management_alert_id","metric_image_id","project_id"]},"r":{"param":{"alert_iid":"alert_management_alert_id","id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"alert_management_alerts"},{"var":"alert_management_alert_id"},{"lit":"metric_images"},{"var":"metric_image_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[["$.main.kit.entity.project"],["$.main.kit.entity.project"]]},"key$":"alert_management","name__orig":"alert_management","Name":"AlertManagement","name_":"alert_management","name-":"alert-management","NAME":"ALERT_MANAGEMENT","index$":1}, {"active":true,"entity":"alert_management","key$":"BasicAlertManagementFlow","kind":"basic","name":"BasicAlertManagementFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"alert_management_ref01"},"m":{"alert_management_alert_id":"alert_management_alert01","project_id":"project01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"alert_management_ref01","suffix":"_rm0"},"m":{"alert_management_alert_id":"alert_management_alert01","id":"alert_management01","project_id":"project01"},"o":"remove","s":[],"v":[],"index$":1}]}, 'AlertManagement', {"POST /api/v4/projects/{id}/alert_management_alerts/{alert_iid}/metric_images/authorize":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"example":17,"index$":0},{"in":"path","name":"alert_iid","description":"The IID of the Alert","type":"integer","format":"int32","required":true,"example":23,"index$":1}]},"DELETE /api/v4/projects/{id}/alert_management_alerts/{alert_iid}/metric_images/{metric_image_id}":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"example":17,"index$":0},{"in":"path","name":"alert_iid","description":"The IID of the Alert","type":"integer","format":"int32","required":true,"example":23,"index$":1},{"in":"path","name":"metric_image_id","description":"The ID of metric image","type":"integer","format":"int32","required":true,"example":42,"index$":2}]}})
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
    ['alert_management01','alert_management02','alert_management03','project01','project02','project03','alert_management_alert01'],
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
  
