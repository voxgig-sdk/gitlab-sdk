

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


describe('TestReportEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.TestReport()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'test_report.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"error_count":{"a":true,"fo":"int32","h":"Error Count","n":"error_count","r":false,"t":"`$INTEGER`","key$":"error_count","index$":0},"failed_count":{"a":true,"fo":"int32","h":"Failed Count","n":"failed_count","r":false,"t":"`$INTEGER`","key$":"failed_count","index$":1},"name":{"a":true,"h":"Name","n":"name","r":false,"t":"`$STRING`","key$":"name","index$":2},"skipped_count":{"a":true,"fo":"int32","h":"Skipped Count","n":"skipped_count","r":false,"t":"`$INTEGER`","key$":"skipped_count","index$":3},"success_count":{"a":true,"fo":"int32","h":"Success Count","n":"success_count","r":false,"t":"`$INTEGER`","key$":"success_count","index$":4},"suite_error":{"a":true,"h":"Suite Error","n":"suite_error","r":false,"t":"`$STRING`","key$":"suite_error","index$":5},"test_cases":{"a":true,"h":"Test Cases","n":"test_cases","r":false,"t":"`$ARRAY`","key$":"test_cases","index$":6},"total_count":{"a":true,"fo":"int32","h":"Total Count","n":"total_count","r":false,"t":"`$INTEGER`","key$":"total_count","index$":7},"total_time":{"a":true,"fo":"int32","h":"Total Time","n":"total_time","r":false,"t":"`$INTEGER`","key$":"total_time","index$":8}},"name":"test_report","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/v4/projects/{id}/pipelines/{pipeline_id}/test_report","source":"swagger2","version":2},"g":{"params":[{"a":true,"ex":18,"k":"param","n":"pipeline_id","or":"pipeline_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":11,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/pipelines/{pipeline_id}/test_report","q":{"exist":["pipeline_id","project_id"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"pipelines"},{"var":"pipeline_id"},{"lit":"test_report"}],"t":{"req":"`reqdata`","res":"`body.test_suites`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.project"]]},"key$":"test_report","name__orig":"test_report","Name":"TestReport","name_":"test_report","name-":"test-report","NAME":"TEST_REPORT","index$":268}, {"active":true,"entity":"test_report","key$":"BasicTestReportFlow","kind":"basic","name":"BasicTestReportFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"pipeline_id":"pipeline01","project_id":"project01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"test_report_ref01"}}],"index$":0}]}, 'TestReport', {"GET /api/v4/projects/{id}/pipelines/{pipeline_id}/test_report":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The project ID or URL-encoded path","type":"string","required":true,"example":11,"index$":0},{"in":"path","name":"pipeline_id","description":"The pipeline ID","type":"integer","format":"int32","required":true,"example":18,"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let test_report_ref01_data = Object.values(setup.data.existing.test_report)[0] as any

    // LIST
    const test_report_ref01_ent = client.TestReport()
    const test_report_ref01_match: any = {}
    test_report_ref01_match['pipeline_id'] = setup.idmap['pipeline01']
    test_report_ref01_match['project_id'] = setup.idmap['project01']

    const test_report_ref01_list = (await test_report_ref01_ent.list(test_report_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/test_report/TestReportTestData.json')

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
    ['test_report01','test_report02','test_report03','project01','project02','project03','pipeline01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_TEST_REPORT_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_TEST_REPORT_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_TEST_REPORT_ENTID']
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
  
