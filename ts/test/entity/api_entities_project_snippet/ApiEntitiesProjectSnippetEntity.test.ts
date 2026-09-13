

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'


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


describe('ApiEntitiesProjectSnippetEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesProjectSnippet()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load']) {
      if (maybeSkipControl(t, 'entityOp', 'api_entities_project_snippet.' + op, live)) return
    }

    const setup = basicSetup()
    // The basic flow consumes synthetic IDs and field values from the
    // fixture (entity TestData.json). Those don't exist on the live API.
    // Skip live runs unless the user provided a real ENTID env override.
    if (setup.syntheticOnly) {
      t.skip('live entity test uses synthetic IDs from fixture — set GITLAB_TEST_API_ENTITIES_PROJECT_SNIPPET_ENTID JSON to run live')
      return
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const api_entities_project_snippet_ref01_ent = client.ApiEntitiesProjectSnippet()
    let api_entities_project_snippet_ref01_data = setup.data.new.api_entities_project_snippet['api_entities_project_snippet_ref01']
    api_entities_project_snippet_ref01_data['file_id'] = setup.idmap['file01']
    api_entities_project_snippet_ref01_data['file_path'] = setup.idmap['file_path01']
    api_entities_project_snippet_ref01_data['project_id'] = setup.idmap['project01']
    api_entities_project_snippet_ref01_data['snippet_id'] = setup.idmap['snippet01']

    api_entities_project_snippet_ref01_data = (await api_entities_project_snippet_ref01_ent.create(api_entities_project_snippet_ref01_data)).data()
    assert(null != api_entities_project_snippet_ref01_data.id)


    // LIST
    const api_entities_project_snippet_ref01_match: any = {}
    api_entities_project_snippet_ref01_match['project_id'] = setup.idmap['project01']
    api_entities_project_snippet_ref01_match['snippet_id'] = setup.idmap['snippet01']

    const api_entities_project_snippet_ref01_list = (await api_entities_project_snippet_ref01_ent.list(api_entities_project_snippet_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(api_entities_project_snippet_ref01_list, { id: api_entities_project_snippet_ref01_data.id })))


    // UPDATE
    const api_entities_project_snippet_ref01_data_up0: any = {}
    api_entities_project_snippet_ref01_data_up0.id = api_entities_project_snippet_ref01_data.id
    api_entities_project_snippet_ref01_data_up0 ['project_id'] = setup.idmap['project_id']

    const api_entities_project_snippet_ref01_markdef_up0 = { name: 'created_at', value: 'Mark01-api_entities_project_snippet_ref01_' + setup.now }
    ;(api_entities_project_snippet_ref01_data_up0 as any)[api_entities_project_snippet_ref01_markdef_up0.name] = api_entities_project_snippet_ref01_markdef_up0.value

    const api_entities_project_snippet_ref01_resdata_up0 = (await api_entities_project_snippet_ref01_ent.update(api_entities_project_snippet_ref01_data_up0)).data()
    assert(api_entities_project_snippet_ref01_resdata_up0.id === api_entities_project_snippet_ref01_data_up0.id)

    assert((api_entities_project_snippet_ref01_resdata_up0 as any)[api_entities_project_snippet_ref01_markdef_up0.name] === api_entities_project_snippet_ref01_markdef_up0.value)


    // LOAD
    const api_entities_project_snippet_ref01_match_dt0: any = {}
    api_entities_project_snippet_ref01_match_dt0.id = api_entities_project_snippet_ref01_data.id
    const api_entities_project_snippet_ref01_data_dt0 = (await api_entities_project_snippet_ref01_ent.load(api_entities_project_snippet_ref01_match_dt0)).data()
    assert(api_entities_project_snippet_ref01_data_dt0.id === api_entities_project_snippet_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_project_snippet/ApiEntitiesProjectSnippetTestData.json')

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
    ['api_entities_project_snippet01','api_entities_project_snippet02','api_entities_project_snippet03','project01','project02','project03','project01','project02','project03','snippet01','snippet02','snippet03','project01','project02','project03','snippet01','snippet02','snippet03','file01','file02','file03'],
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
  const idmapEnvVal = process.env['GITLAB_TEST_API_ENTITIES_PROJECT_SNIPPET_ENTID']
  const idmapOverridden = null != idmapEnvVal && idmapEnvVal.trim().startsWith('{')

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_PROJECT_SNIPPET_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_PROJECT_SNIPPET_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  if (live) {
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
      extra || {}
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
  
