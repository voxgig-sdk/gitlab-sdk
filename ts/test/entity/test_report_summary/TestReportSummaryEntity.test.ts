

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


describe('TestReportSummaryEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.TestReportSummary()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'test_report_summary.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"test_suites","req":false,"type":"`$OBJECT`","index$":0},{"active":true,"name":"total","req":false,"type":"`$OBJECT`","index$":1}],"name":"test_report_summary","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"example":18,"kind":"param","name":"pipeline_id","orig":"pipeline_id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"example":11,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"GET /api/v4/projects/{id}/pipelines/{pipeline_id}/test_report_summary","json":"{\"operationId\":\"getApiV4ProjectsIdPipelinesPipelineIdTestReportSummary\",\"parameters\":[{\"description\":\"The project ID or URL-encoded path\",\"example\":11,\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The pipeline ID\",\"example\":18,\"format\":\"int32\",\"in\":\"path\",\"name\":\"pipeline_id\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Gets the test report summary for a given pipeline\",\"schema\":{\"description\":\"TestReportSummaryEntity model\",\"properties\":{\"test_suites\":{\"properties\":{\"build_ids\":{\"example\":[66004],\"items\":{\"format\":\"int32\",\"type\":\"integer\"},\"type\":\"array\"},\"error_count\":{\"example\":0,\"format\":\"int32\",\"type\":\"integer\"},\"failed_count\":{\"example\":0,\"format\":\"int32\",\"type\":\"integer\"},\"name\":{\"example\":\"test\",\"type\":\"string\"},\"skipped_count\":{\"example\":12,\"format\":\"int32\",\"type\":\"integer\"},\"success_count\":{\"example\":3351,\"format\":\"int32\",\"type\":\"integer\"},\"suite_error\":{\"example\":\"JUnit XML parsing failed: 1:1: FATAL: Document is empty\",\"type\":\"string\"},\"test_cases\":{\"items\":{\"properties\":{\"attachment_url\":{\"example\":\"http://localhost/namespace1/project1/-/jobs/1/artifacts/file/some/path.png\",\"type\":\"string\"},\"classname\":{\"example\":\"vulnerability_management_spec\",\"type\":\"string\"},\"execution_time\":{\"example\":180,\"format\":\"int32\",\"type\":\"integer\"},\"file\":{\"example\":\"./spec/test_spec.rb\",\"type\":\"string\"},\"name\":{\"example\":\"Security Reports can create an auto-remediation MR\",\"type\":\"string\"},\"recent_failures\":{\"example\":{\"base_branch\":\"develop\",\"count\":3},\"type\":\"string\"},\"stack_trace\":{\"example\":\"Failure/Error: is_expected.to eq(3)\",\"type\":\"string\"},\"status\":{\"example\":\"success\",\"type\":\"string\"},\"system_output\":{\"example\":\"Failure/Error: is_expected.to eq(3)\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"total_count\":{\"example\":3363,\"format\":\"int32\",\"type\":\"integer\"},\"total_time\":{\"example\":1904,\"format\":\"int32\",\"type\":\"integer\"}},\"type\":\"object\"},\"total\":{\"example\":{\"count\":2,\"error\":0,\"failed\":0,\"skipped\":0,\"success\":2,\"suite_error\":null,\"time\":0.42},\"type\":\"object\"}},\"type\":\"object\"}},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/projects/{id}/pipelines/{pipeline_id}/test_report_summary","rename":{"param":{"id":"project_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"pipelines"},{"var":"pipeline_id"},{"lit":"test_report_summary"}],"select":{"exist":["pipeline_id","project_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["project","pipeline"]]},"key$":"test_report_summary","name__orig":"test_report_summary","Name":"TestReportSummary","name_":"test_report_summary","name-":"test-report-summary","NAME":"TEST_REPORT_SUMMARY","index$":269}, {"active":true,"entity":"test_report_summary","key$":"BasicTestReportSummaryFlow","kind":"basic","name":"BasicTestReportSummaryFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"test_report_summary_ref01","srcdatavar":"test_report_summary_ref01_data","suffix":"_dt0"},"match":{"id":"test_report_summary01","project_id":"project01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-test_report_summary_ref01"}}],"index$":0}]}, 'TestReportSummary')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let test_report_summary_ref01_data = Object.values(setup.data.existing.test_report_summary)[0] as any

    // LOAD: skipped — no entity id field and load requires path params.
    // Entity-var is declared here so later flow steps still compile.
    const test_report_summary_ref01_ent = client.TestReportSummary()


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/test_report_summary/TestReportSummaryTestData.json')

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
    ['test_report_summary01','test_report_summary02','test_report_summary03','project01','project02','project03','pipeline01','pipeline02','pipeline03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_TEST_REPORT_SUMMARY_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_TEST_REPORT_SUMMARY_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_TEST_REPORT_SUMMARY_ENTID']
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
  
