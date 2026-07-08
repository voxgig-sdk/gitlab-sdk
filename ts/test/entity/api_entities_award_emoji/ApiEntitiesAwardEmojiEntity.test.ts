
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


describe('ApiEntitiesAwardEmojiEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesAwardEmoji()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['create', 'list', 'load']) {
      if (maybeSkipControl(t, 'entityOp', 'api_entities_award_emoji.' + op, live)) return
    }

    const setup = basicSetup()
    // The basic flow consumes synthetic IDs and field values from the
    // fixture (entity TestData.json). Those don't exist on the live API.
    // Skip live runs unless the user provided a real ENTID env override.
    if (setup.syntheticOnly) {
      t.skip('live entity test uses synthetic IDs from fixture — set GITLAB_TEST_API_ENTITIES_AWARD_EMOJI_ENTID JSON to run live')
      return
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const api_entities_award_emoji_ref01_ent = client.ApiEntitiesAwardEmoji()
    let api_entities_award_emoji_ref01_data = setup.data.new.api_entities_award_emoji['api_entities_award_emoji_ref01']
    api_entities_award_emoji_ref01_data['epic_id'] = setup.idmap['epic01']
    api_entities_award_emoji_ref01_data['group_id'] = setup.idmap['group01']
    api_entities_award_emoji_ref01_data['issue_id'] = setup.idmap['issue01']
    api_entities_award_emoji_ref01_data['merge_request_id'] = setup.idmap['merge_request01']
    api_entities_award_emoji_ref01_data['note_id'] = setup.idmap['note01']
    api_entities_award_emoji_ref01_data['project_id'] = setup.idmap['project01']
    api_entities_award_emoji_ref01_data['snippet_id'] = setup.idmap['snippet01']

    api_entities_award_emoji_ref01_data = await api_entities_award_emoji_ref01_ent.create(api_entities_award_emoji_ref01_data)
    assert(null != api_entities_award_emoji_ref01_data.id)


    // LIST
    const api_entities_award_emoji_ref01_match: any = {}
    api_entities_award_emoji_ref01_match['project_id'] = setup.idmap['project01']
    api_entities_award_emoji_ref01_match['snippet_id'] = setup.idmap['snippet01']

    const api_entities_award_emoji_ref01_list = await api_entities_award_emoji_ref01_ent.list(api_entities_award_emoji_ref01_match)

    assert(!isempty(select(api_entities_award_emoji_ref01_list, { id: api_entities_award_emoji_ref01_data.id })))


    // LOAD
    const api_entities_award_emoji_ref01_match_dt0: any = {}
    api_entities_award_emoji_ref01_match_dt0.id = api_entities_award_emoji_ref01_data.id
    const api_entities_award_emoji_ref01_data_dt0 = await api_entities_award_emoji_ref01_ent.load(api_entities_award_emoji_ref01_match_dt0)
    assert(api_entities_award_emoji_ref01_data_dt0.id === api_entities_award_emoji_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_award_emoji/ApiEntitiesAwardEmojiTestData.json')

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
    ['api_entities_award_emoji01','api_entities_award_emoji02','api_entities_award_emoji03','group01','group02','group03','epic01','epic02','epic03','project01','project02','project03','issue01','issue02','issue03','project01','project02','project03','merge_request01','merge_request02','merge_request03','project01','project02','project03','snippet01','snippet02','snippet03','group01','group02','group03','epic01','epic02','epic03','note01','note02','note03','project01','project02','project03','issue01','issue02','issue03','note01','note02','note03','project01','project02','project03','merge_request01','merge_request02','merge_request03','note01','note02','note03','project01','project02','project03','snippet01','snippet02','snippet03','note01','note02','note03'],
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
  const idmapEnvVal = process.env['GITLAB_TEST_API_ENTITIES_AWARD_EMOJI_ENTID']
  const idmapOverridden = null != idmapEnvVal && idmapEnvVal.trim().startsWith('{')

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_AWARD_EMOJI_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': 'NONE',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_AWARD_EMOJI_ENTID']

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
  
