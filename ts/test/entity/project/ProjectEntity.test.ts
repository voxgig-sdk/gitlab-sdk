
const envlocal = __dirname + '/../../../.env.local'
require('dotenv').config({ quiet: true, path: [envlocal] })

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'


import { GitlabSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveDelay,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


describe('ProjectEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.Project()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['create', 'update', 'load', 'remove']) {
      if (maybeSkipControl(t, 'entityOp', 'project.' + op, live)) return
    }

    const setup = basicSetup()
    // The basic flow consumes synthetic IDs and field values from the
    // fixture (entity TestData.json). Those don't exist on the live API.
    // Skip live runs unless the user provided a real ENTID env override.
    if (setup.syntheticOnly) {
      t.skip('live entity test uses synthetic IDs from fixture — set GITLAB_TEST_PROJECT_ENTID JSON to run live')
      return
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const project_ref01_ent = client.Project()
    let project_ref01_data = setup.data.new.project['project_ref01']
    project_ref01_data['hook_id'] = setup.idmap['hook01']
    project_ref01_data['merge_request_id'] = setup.idmap['merge_request01']
    project_ref01_data['pipeline_schedule_id'] = setup.idmap['pipeline_schedule01']
    project_ref01_data['secret'] = setup.idmap['secret01']

    project_ref01_data = await project_ref01_ent.create(project_ref01_data)
    assert(null != project_ref01_data.id)


    // UPDATE
    const project_ref01_data_up0: any = {}
    project_ref01_data_up0.id = project_ref01_data.id

    const project_ref01_markdef_up0 = { name: 'before_sha', value: 'Mark01-project_ref01_' + setup.now }
    ;(project_ref01_data_up0 as any)[project_ref01_markdef_up0.name] = project_ref01_markdef_up0.value

    const project_ref01_resdata_up0 = await project_ref01_ent.update(project_ref01_data_up0)
    assert(project_ref01_resdata_up0.id === project_ref01_data_up0.id)

    assert((project_ref01_resdata_up0 as any)[project_ref01_markdef_up0.name] === project_ref01_markdef_up0.value)


    // LOAD
    const project_ref01_match_dt0: any = {}
    project_ref01_match_dt0.id = project_ref01_data.id
    const project_ref01_data_dt0 = await project_ref01_ent.load(project_ref01_match_dt0)
    assert(project_ref01_data_dt0.id === project_ref01_data.id)


    // REMOVE
    const project_ref01_match_rm0: any = { id: project_ref01_data.id }
    await project_ref01_ent.remove(project_ref01_match_rm0)
  

  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/project/ProjectTestData.json')

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
    ['project01','project02','project03','custom_attribute01','custom_attribute02','custom_attribute03','hook01','hook02','hook03','import_project_member01','import_project_member02','import_project_member03','issue01','issue02','issue03','artifact01','artifact02','artifact03','job01','job02','job03','merge_request01','merge_request02','merge_request03','domain01','domain02','domain03','pipeline_schedule01','pipeline_schedule02','pipeline_schedule03','pipeline01','pipeline02','pipeline03','protected_branch01','protected_branch02','protected_branch03','rule01','rule02','rule03','blob01','blob02','blob03','file01','file02','file03','share01','share02','share03','trigger01','trigger02','trigger03','upload01','upload02','upload03','hook01','hook02','hook03','custom_header01','custom_header02','custom_header03','hook01','hook02','hook03','event01','event02','event03','hook01','hook02','hook03','test01','test02','test03','hook01','hook02','hook03','url_variable01','url_variable02','url_variable03','merge_request01','merge_request02','merge_request03','draft_note01','draft_note02','draft_note03','pipeline_schedule01','pipeline_schedule02','pipeline_schedule03','variable01','variable02','variable03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  // Detect whether the user provided a real ENTID JSON via env var. The
  // basic flow consumes synthetic IDs from the fixture file; without an
  // override those synthetic IDs reach the live API and 4xx. Surface this
  // to the test so it can skip rather than fail.
  const idmapEnvVal = process.env['GITLAB_TEST_PROJECT_ENTID']
  const idmapOverridden = null != idmapEnvVal && idmapEnvVal.trim().startsWith('{')

  const env = envOverride({
    'GITLAB_TEST_PROJECT_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': 'NONE',
  })

  idmap = env['GITLAB_TEST_PROJECT_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  if (live) {
    client = new GitlabSDK(merge([
      {
        apikey: env.GITLAB_APIKEY,
      },
      extra
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
    syntheticOnly: live && !idmapOverridden,
    now: Date.now(),
  }

  return setup
}
  
